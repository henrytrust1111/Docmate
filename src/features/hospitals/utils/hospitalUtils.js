import { hospitals } from "../data/mockHospitals";

export const byHospital = (id) => hospitals.find((hospital) => hospital.id === id);

export const formatDate = (date) => new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(new Date(`${date}T12:00:00`));
