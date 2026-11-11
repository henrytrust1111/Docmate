import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Title } from "../../../shared/ui/common/AppComponents";
import { NotFoundPage } from "../../../shared/ui/common/NotFoundPage";
import { AppointmentCard } from "../../appointments/components/AppointmentCard";
import { doctors } from "../data/mockDoctors";
export function AssignDoctorPage() {
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
  const [selected, setSelected] = useState("");
  if (!a) return <NotFoundPage />;
  return <><Title over={a.id} title="Assign a doctor" text="Choose an available clinician before confirming." /><form className="panel form narrow" onSubmit={e => {
      e.preventDefault();
      const d = doctors.find(x => x.id === selected);
      updateAppointment(a.id, {
        doctor: d.name,
        status: "confirmed"
      }, `Confirmed with ${d.name}`);
      flash("Appointment confirmed");
      nav(`/hospital/appointments/${a.id}`);
    }}><div className="doctor-list">{doctors.map(d => <label className={selected === d.id ? "chosen" : ""} key={d.id}><input type="radio" required name="doctor" onChange={() => setSelected(d.id)} /><i>{d.name.split(" ").slice(1).map(x => x[0]).join("")}</i><span><b>{d.name}</b><small>{d.specialty} · {d.availability}</small></span></label>)}</div><button className="button full">Confirm appointment</button></form></>;
}
export function HospitalPatientsPage() {
  const {
    appointments
  } = useAppState();
  return <><Title over="Hospital patients" title="Patients with appointments" text="Only patients associated with this hospital are shown." /><section className="panel appointment-list">{[...new Map(appointments.map(a => [a.email, a])).values()].map(a => <AppointmentCard a={a} hospital key={a.email} />)}</section></>;
}
