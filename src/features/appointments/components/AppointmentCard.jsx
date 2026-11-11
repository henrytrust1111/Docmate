import { Link } from "react-router-dom";
import { Status } from "../../../shared/ui/common/AppComponents";
import { byHospital } from "../../hospitals/utils/hospitalUtils";
import { statusCopy } from "../constants";
export function AppointmentCard({
  a,
  hospital = false
}) {
  const h = byHospital(a.hospitalId);
  const to = hospital ? `/hospital/appointments/${a.id}` : `/patient/appointments/${a.id}`;
  return <Link className="appointment-card" to={to}><div className="date"><b>{new Date(a.date + "T12:00").getDate()}</b><small>{new Date(a.date + "T12:00").toLocaleString("en", {
          month: "short"
        })}</small></div><div><div className="card-head"><h2>{hospital ? a.patient : a.service}</h2><Status value={a.status} /></div><p>{hospital ? a.service : h?.name} · {a.time}</p><small>{statusCopy[a.status]}</small></div><b>›</b></Link>;
}
