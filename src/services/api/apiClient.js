import axios from "axios";
import { config } from "../../config/env";
import { tokenStorage } from "../storage/tokenStorage";

export class ApiError extends Error {
  constructor(message, { status = 0, code, details, cause } = {}) {
    super(message, { cause });
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { "Content-Type": "application/json" },
});

const refreshPath = "/api/v1/auth/refresh-token";
let refreshRequest;

const refreshAccessToken = () => {
  const refreshToken = tokenStorage.getRefreshToken();
  if (!refreshToken) {
    tokenStorage.clear();
    window.dispatchEvent(new Event("docmate:auth-expired"));
    return Promise.reject(new ApiError("Your session has expired. Please sign in again.", { status: 401 }));
  }

  if (!refreshRequest) {
    refreshRequest = axios.post(refreshPath, { refreshToken }, { baseURL: config.apiBaseUrl })
      .then(({ data: response }) => {
        const result = response?.data ?? response;
        tokenStorage.save(result);
        return result.accessToken;
      })
      .catch((error) => {
        tokenStorage.clear();
        window.dispatchEvent(new Event("docmate:auth-expired"));
        throw normalizeApiError(error);
      })
      .finally(() => {
        refreshRequest = undefined;
      });
  }
  return refreshRequest;
};

const normalizeApiError = (error) => {
  if (error instanceof ApiError) return error;
  const response = error?.response;
  return new ApiError(
    response?.data?.message
      || response?.data?.error
      || (response ? `Request failed (${response.status}).` : `Could not connect to the API at ${config.apiBaseUrl}. Check that the backend is running and allows this origin.`),
    {
      status: response?.status || 0,
      code: response?.data?.error,
      details: response?.data?.details,
      cause: error,
    },
  );
};

apiClient.interceptors.request.use((request) => {
  if (!request.skipAuth) {
    const accessToken = tokenStorage.getAccessToken();
    if (accessToken) request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    if (error.response?.status !== 401 || !request || request.skipAuth || request.url === refreshPath) {
      return Promise.reject(normalizeApiError(error));
    }

    if (request._retry) {
      tokenStorage.clear();
      window.dispatchEvent(new Event("docmate:auth-expired"));
      return Promise.reject(normalizeApiError(error));
    }

    request._retry = true;
    try {
      const accessToken = await refreshAccessToken();
      request.headers.Authorization = `Bearer ${accessToken}`;
      return apiClient(request);
    } catch (refreshError) {
      return Promise.reject(normalizeApiError(refreshError));
    }
  },
);
