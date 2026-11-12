export const byHospital = (id, hospitals = []) => hospitals.find((hospital) => hospital.id === id);

export const formatDate = (date) => new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(new Date(`${date}T12:00:00`));

export const displayTime = (appointment) => appointment?.time || (appointment?.startsAt ? new Intl.DateTimeFormat("en-NG", { hour: "numeric", minute: "2-digit", timeZone: appointment.timeZone || "Africa/Lagos" }).format(new Date(appointment.startsAt)) : "Time pending");
export const displayDuration = (service) => service.duration || (service.durationMinutes ? `${service.durationMinutes} min` : "Duration not provided");
export const displayPrice = (service) => service.price || (Number.isFinite(Number(service.priceAmount)) ? new Intl.NumberFormat("en-NG", { style: "currency", currency: service.currency || "NGN", maximumFractionDigits: 0 }).format(Number(service.priceAmount)) : "Price not provided");
export const mapAppointment = (item) => ({
  ...item,
  patient: item.patientName || item.patient?.name || [item.patient?.firstName, item.patient?.lastName].filter(Boolean).join(" ") || "Patient",
  email: item.patientEmail || item.patient?.email || "",
  service: item.serviceName || item.service?.name || "Service",
  time: displayTime(item),
  doctor: item.doctor?.displayName || item.doctor?.name || "Not assigned",
  date: item.date || item.startsAt?.slice(0, 10) || "",
  timeline: (item.history || []).map((event) => ({ title: event.action || event.status || "Appointment updated", detail: event.at ? new Date(event.at).toLocaleString() : "" })),
});
