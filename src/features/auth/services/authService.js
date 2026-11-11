import { apiClient } from "../../../services/api/apiClient";
import { tokenStorage } from "../../../services/storage/tokenStorage";

const authPath = "/api/v1/auth";
const responseData = (response) => response.data?.data ?? response.data;

export const authService = {
  async registerPatient(details) {
    return responseData(await apiClient.post(`${authPath}/register/patient`, details, { skipAuth: true }));
  },
  async registerHospital(details) {
    return responseData(await apiClient.post(`${authPath}/register/hospital`, details, { skipAuth: true }));
  },
  async login(credentials) {
    const result = responseData(await apiClient.post(`${authPath}/login`, credentials, { skipAuth: true }));
    tokenStorage.save(result);
    return result;
  },
  async logout() {
    const refreshToken = tokenStorage.getRefreshToken();
    try {
      if (refreshToken) {
        await apiClient.post(`${authPath}/logout`, { refreshToken }, { skipAuth: true });
      }
    } finally {
      tokenStorage.clear();
    }
  },
  async verifyEmail(token) {
    return responseData(await apiClient.post(`${authPath}/verify-email`, { token }, { skipAuth: true }));
  },
  async forgotPassword(email) {
    return responseData(await apiClient.post(`${authPath}/forgot-password`, { email }, { skipAuth: true }));
  },
  async resetPassword(token, password) {
    return responseData(await apiClient.post(`${authPath}/reset-password`, { token, password }, { skipAuth: true }));
  },
  async getCurrentUser() {
    return responseData(await apiClient.get(`${authPath}/me`)).user;
  },
};
