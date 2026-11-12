import { apiClient } from "../../../services/api/apiClient";
const dataOf = (response) => response.data?.data ?? response.data;
export const appointmentService = {
  async list(params = {}) { return dataOf(await apiClient.get("/api/v1/appointments", { params })); },
  async get(id) { return dataOf(await apiClient.get(`/api/v1/appointments/${encodeURIComponent(id)}`)); },
  async create(payload) { return dataOf(await apiClient.post("/api/v1/appointments", payload)); },
  async assignDoctor(id, doctorId) { return dataOf(await apiClient.post(`/api/v1/appointments/${encodeURIComponent(id)}/assign-doctor`, { doctorId })); },
  async updateStatus(id, payload) { return dataOf(await apiClient.patch(`/api/v1/appointments/${encodeURIComponent(id)}/status`, payload)); },
  async reschedule(id, payload) { return dataOf(await apiClient.patch(`/api/v1/appointments/${encodeURIComponent(id)}/reschedule`, payload)); },
  async decideReschedule(id, decision) { return dataOf(await apiClient.post(`/api/v1/appointments/${encodeURIComponent(id)}/reschedule-decision`, { decision })); },
  async cancel(id, reason) { return dataOf(await apiClient.post(`/api/v1/appointments/${encodeURIComponent(id)}/cancel`, { reason })); },
};
