import { apiClient } from "../../../services/api/apiClient";
const dataOf = (response) => response.data?.data ?? response.data;
export const profileService = {
  async getPatient() { return dataOf(await apiClient.get("/api/v1/patients/me")); },
  async updatePatient(payload) { return dataOf(await apiClient.patch("/api/v1/patients/me", payload)); },
  async getHospitalSummary() { return dataOf(await apiClient.get("/api/v1/dashboard/hospital/summary")); },
};
