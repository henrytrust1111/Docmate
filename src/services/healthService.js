import { apiClient } from "./api/apiClient";

export const healthService = {
  async check() {
    return (await apiClient.get("/health", { skipAuth: true })).data;
  },
};
