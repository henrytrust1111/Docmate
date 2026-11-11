import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Empty, Field, Row, Status, Title } from "../../../shared/ui/common/AppComponents";
import { NotFoundPage } from "../../../shared/ui/common/NotFoundPage";
import { AppointmentCard } from "../components/AppointmentCard";
import { slots } from "../data/bookingSlots";
import { byHospital, formatDate } from "../../hospitals/utils/hospitalUtils";
import { statusCopy } from "../constants";
export function AppointmentsPage({
  hospital = false
}) {
  const {
    appointments
  } = useAppState();
  const [filter, setFilter] = useState(hospital ? "action" : "upcoming");
  const list = appointments.filter(a => filter === "all" || filter === "action" && ["pending", "reschedule_requested"].includes(a.status) || filter === "upcoming" && !['completed', 'cancelled'].includes(a.status) || filter === "past" && ['completed', 'cancelled'].includes(a.status));
  return <><Title over={hospital ? "Hospital operations" : "Your care"} title={hospital ? "Appointment queue" : "Appointments"} text={hospital ? "Review requests and keep each status clear." : "See upcoming and previous visits."} /><div className="tabs">{(hospital ? ["action", "upcoming", "past", "all"] : ["upcoming", "past", "all"]).map(x => <button className={filter === x ? "active" : ""} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div><div className="appointment-list">{list.map(a => <AppointmentCard a={a} hospital={hospital} key={a.id} />)}{!list.length && <Empty title="Nothing here" text="Choose another filter." />}</div></>;
}
export function AppointmentDetailPage({
  hospital = false
}) {
  const {
    appointmentId
  } = useParams();
  const {
    appointments,
    updateAppointment,
    flash
  } = useAppState();
  const a = appointments.find(x => x.id === appointmentId);
  if (!a) return <NotFoundPage />;
  const h = byHospital(a.hospitalId);
  return <><Link to={hospital ? "/hospital/appointments" : "/patient/appointments"}>← Back to appointments</Link><div className="appointment-title"><div><span className="eyebrow">{a.id}</span><h1>{hospital ? a.patient : a.service}</h1><p>{h?.name}</p></div><Status value={a.status} /></div><div className="detail-grid"><div><article className="panel"><h2>{statusCopy[a.status]}</h2><div className="summary-grid"><Row label="Date" value={formatDate(a.date)} /><Row label="Time" value={a.time} /><Row label="Service" value={a.service} /><Row label="Doctor" value={a.doctor} /><Row label="Patient" value={a.patient} /><Row label="Reason" value={a.reason} /></div></article><article className="panel"><h2>Timeline</h2><div className="timeline">{a.timeline.map((x, i) => <div key={i}><i /><span><b>{x.title}</b><small>{x.detail}</small></span></div>)}</div></article></div><aside className="panel sticky"><h2>Next action</h2>{hospital && ["pending", "reschedule_requested"].includes(a.status) ? <><Link className="button full" to="assign">Accept and assign</Link><button className="button ghost full" onClick={() => {
            updateAppointment(a.id, {
              status: "reschedule_requested",
              date: "2026-08-25",
              time: "11:00 AM"
            }, "Hospital proposed a new time");
            flash("New time proposed");
          }}>Propose new time</button><button className="button danger-line full" onClick={() => updateAppointment(a.id, {
            status: "rejected"
          }, "Request declined")}>Decline</button></> : !hospital && !['cancelled', 'completed'].includes(a.status) ? <><Link className="button full" to="reschedule">Request new time</Link><Link className="button danger-line full" to="cancel">Cancel appointment</Link></> : <p>{statusCopy[a.status]}</p>}<Link className="button ghost full" to="/contact">Contact support</Link></aside></div></>;
}
export function ChangeAppointmentPage({
  cancel = false
}) {
  const {
    appointmentId
  } = useParams();
  const {
    appointments,
    updateAppointment,
    flash
  } = useAppState();
  const nav = useNavigate();
  const a = appointments.find(x => x.id === appointmentId);
  const [time, setTime] = useState("");
  if (!a) return <NotFoundPage />;
  const submit = e => {
    e.preventDefault();
    updateAppointment(a.id, cancel ? {
      status: "cancelled"
    } : {
      status: "reschedule_requested",
      time: time || a.time
    }, cancel ? "Appointment cancelled" : "New time requested");
    flash(cancel ? "Appointment cancelled" : "New time requested");
    nav(`/patient/appointments/${a.id}`);
  };
  return <><Title over={a.id} title={cancel ? "Cancel this appointment?" : "Request a new time"} text={cancel ? "Review your appointment before cancelling." : "The hospital must approve the new time."} /><form className="panel form narrow" onSubmit={submit}><div className="info"><span>{a.service}</span><b>{formatDate(a.date)} at {a.time}</b></div>{cancel ? <Field label="Reason" as="select" required><option value="">Select reason</option><option>Schedule conflict</option><option>Feeling better</option><option>Booked elsewhere</option></Field> : <><Field label="New date" type="date" defaultValue={a.date} /><fieldset><legend>Available times</legend><div className="slots">{slots.map(x => <button type="button" className={time === x ? "chosen" : ""} onClick={() => setTime(x)} key={x}>{x}</button>)}</div></fieldset></>}<div className="actions"><Link className="button ghost" to={`/patient/appointments/${a.id}`}>Go back</Link><button className={`button ${cancel ? "danger" : ""}`}>{cancel ? "Cancel appointment" : "Submit request"}</button></div></form></>;
}
