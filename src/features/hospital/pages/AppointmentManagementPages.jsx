import { useEffect, useState } from "react";
import { Title, Empty, Field } from "../../../shared/ui/common/AppComponents";
import { AppointmentCard } from "../../appointments/components/AppointmentCard";
import { useParams, useNavigate } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { appointmentService } from "../../appointments/services/appointmentService";
import { hospitalService } from "../../hospitals/services/hospitalService";
const rows = (result) => Array.isArray(result) ? result : result?.items || [];
export function AssignDoctorPage() {
 const { appointmentId } = useParams(); const nav = useNavigate(); const { appointments, reloadAppointments, flash } = useAppState(); const appointment = appointments.find((a) => a.id === appointmentId); const [doctors, setDoctors] = useState([]); const [doctorId, setDoctorId] = useState(""); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
 useEffect(() => { if (appointment) hospitalService.doctors({ serviceId: appointment.serviceId, date: appointment.date }).then((x) => setDoctors(rows(x))).catch((e) => setError(e.message)); }, [appointment?.serviceId, appointment?.date]);
 if (!appointment) return <Empty title="Appointment not found" text="Return to the appointment queue and try again." />;
 const submit = async (e) => { e.preventDefault(); setBusy(true); try { await appointmentService.assignDoctor(appointmentId, doctorId); await reloadAppointments(); flash("Appointment confirmed"); nav(`/hospital/appointments/${appointmentId}`); } catch (e) { setError(e.message); } finally { setBusy(false); } };
 return <><Title over={appointment.id} title="Assign a doctor" text="Choose an available clinician before confirming." /><form className="panel form narrow" onSubmit={submit}><Field label="Clinician" as="select" required value={doctorId} onChange={(e) => setDoctorId(e.target.value)}><option value="">Select clinician</option>{doctors.map((d) => <option key={d.id} value={d.id}>{d.displayName} · {d.specialty}</option>)}</Field>{error && <p className="error" role="alert">{error}</p>}<button className="button full" disabled={busy || !doctorId}>{busy ? "Saving…" : "Confirm appointment"}</button></form></>;
}
export function HospitalPatientsPage() {
 const [patients, setPatients] = useState([]); const [q, setQ] = useState(""); const [error, setError] = useState(""); const [loading, setLoading] = useState(true);
 const load = () => { setLoading(true); hospitalService.patients({ q, page: 1, pageSize: 100 }).then((x) => setPatients(rows(x))).catch((e) => setError(e.message)).finally(() => setLoading(false)); }; useEffect(() => { const t = setTimeout(load, 250); return () => clearTimeout(t); }, [q]);
 return <><Title over="Hospital patients" title="Patients with appointments" text="Only patients associated with this hospital are shown." /><Field label="Search patients"><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name or email" /></Field>{loading ? <p>Loading patients…</p> : error ? <Empty icon="!" title="Patients could not be loaded" text={error} action={<button className="button" onClick={load}>Try again</button>} /> : <section className="panel appointment-list">{patients.map((p) => <article className="appointment-card" key={p.id}><div className="date">{p.appointmentCount ?? ""}</div><div><h2>{p.displayName || [p.firstName, p.lastName].filter(Boolean).join(" ")}</h2><p>{p.email}</p>{p.mostRecentAppointment && <small>{p.mostRecentAppointment.serviceName} · {p.mostRecentAppointment.date}</small>}</div></article>)}{!patients.length && <p>No patients found.</p>}</section>}</>;
}

