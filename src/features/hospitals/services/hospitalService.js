import { apiClient } from "../../../services/api/apiClient";

const dataOf = (response) => response.data?.data ?? response.data;
const query = (params) => Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined && value !== "" && value !== null));

export const hospitalService = {
  async list(params = {}) { return dataOf(await apiClient.get("/api/v1/hospitals", { params: query(params) })); },
  async get(id) { return dataOf(await apiClient.get(`/api/v1/hospitals/${encodeURIComponent(id)}`)); },
  async availability(id, params) { return dataOf(await apiClient.get(`/api/v1/hospitals/${encodeURIComponent(id)}/availability`, { params: query(params) })); },
  async getMine() { return dataOf(await apiClient.get("/api/v1/hospitals/me")); },
  async updateMine(payload) { return dataOf(await apiClient.patch("/api/v1/hospitals/me", payload)); },
  async services() { return dataOf(await apiClient.get("/api/v1/hospitals/me/services")); },
  async createService(payload) { return dataOf(await apiClient.post("/api/v1/hospitals/me/services", payload)); },
  async updateService(id, payload) { return dataOf(await apiClient.patch(`/api/v1/hospitals/me/services/${encodeURIComponent(id)}`, payload)); },
  async doctors(params = {}) { return dataOf(await apiClient.get("/api/v1/hospitals/me/doctors", { params: query(params) })); },
  async updateDoctor(id, payload) { return dataOf(await apiClient.patch(`/api/v1/hospitals/me/doctors/${encodeURIComponent(id)}`, payload)); },
  async patients(params = {}) { return dataOf(await apiClient.get("/api/v1/hospitals/me/patients", { params: query(params) })); },
};
