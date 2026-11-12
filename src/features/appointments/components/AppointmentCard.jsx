import { Link } from "react-router-dom";
import { Status } from "../../../shared/ui/common/AppComponents";
import { displayTime } from "../../hospitals/utils/hospitalUtils";
import { statusCopy } from "../constants";
export function AppointmentCard({ a, hospital = false }) {
  const date = a.date || a.startsAt?.slice(0, 10) || "";
  const to = hospital ? `/hospital/appointments/${a.id}` : `/patient/appointments/${a.id}`;
  return <Link className="appointment-card" to={to}><div className="date"><b>{date ? new Date(`${date}T12:00`).getDate() : "–"}</b><small>{date ? new Date(`${date}T12:00`).toLocaleString("en", { month: "short" }) : ""}</small></div><div><div className="card-head"><h2>{hospital ? (a.patient || a.patientName) : (a.service || a.serviceName)}</h2><Status value={a.status} /></div><p>{hospital ? (a.service || a.serviceName) : a.hospitalName} · {displayTime(a)}</p><small>{statusCopy[a.status] || a.status}</small></div><b>›</b></Link>;
}
