import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Empty, Field, Row, Title } from "../../../shared/ui/common/AppComponents";
import { NotFoundPage } from "../../../shared/ui/common/NotFoundPage";
import { hospitals } from "../../hospitals/data/mockHospitals";
import { slots } from "../../appointments/data/bookingSlots";
import { byHospital, formatDate } from "../../hospitals/utils/hospitalUtils";
export function HospitalDirectoryPage() {
  const [q, setQ] = useState("");
  const [service, setService] = useState("All");
  const [scenario, setScenario] = useState("results");
  const services = [...new Set(hospitals.flatMap(h => h.services.map(s => s.name)))];
  const result = hospitals.filter(h => (h.name + h.location + h.services.map(s => s.name)).toLowerCase().includes(q.toLowerCase()) && (service === "All" || h.services.some(s => s.name === service)));
  return <><Title over="Find care" title="Choose a hospital" text="Compare partner facilities, services, opening hours, and availability." /><div className="filters"><Field label="Search"><input value={q} onChange={e => setQ(e.target.value)} placeholder="Hospital, service, or location" /></Field><Field label="Service" as="select" value={service} onChange={e => setService(e.target.value)}><option>All</option>{services.map(x => <option key={x}>{x}</option>)}</Field><Field label="Demo state" as="select" value={scenario} onChange={e => setScenario(e.target.value)}><option>results</option><option>loading</option><option>error</option><option>offline</option></Field></div>{scenario === "loading" ? <div className="hospital-grid">{[1, 2, 3].map(x => <div className="skeleton" key={x} />)}</div> : scenario !== "results" ? <Empty icon="!" title={scenario === "offline" ? "You appear to be offline" : "Hospitals could not be loaded"} text="This is a designed frontend state." action={<button className="button" onClick={() => setScenario("results")}>Try again</button>} /> : result.length ? <div className="hospital-grid">{result.map(h => <article className="hospital-card" key={h.id}><div className="hospital-image"><i>{h.initials}</i><b>Open</b></div><div><div className="card-head"><h2>{h.name}</h2><span className="verified">✓ Verified</span></div><p>⌖ {h.location} · {h.distance}</p><div className="tags">{h.services.map(s => <span key={s.id}>{s.name}</span>)}</div><div className="availability"><small>Next available</small><b>{h.nextAvailable}</b></div><Link className="button full" to={h.id}>View hospital</Link></div></article>)}</div> : <Empty icon="⌕" title="No matching hospitals" text="Try another search or service." />}</>;
}
export function HospitalDetailsPage() {
  const {
    hospitalId
  } = useParams();
  const h = byHospital(hospitalId);
  if (!h) return <NotFoundPage />;
  return <><Link to="/patient/hospitals">← Back to hospitals</Link><div className="detail-head"><i>{h.initials}</i><div><div className="card-head"><h1>{h.name}</h1><span className="verified">✓ Verified</span></div><p>{h.location}<br />{h.hours}</p></div><Link className="button" to="book">Book appointment</Link></div><div className="detail-grid"><div><article className="panel"><h2>About</h2><p>{h.description}</p></article><article className="panel"><h2>Services and price guidance</h2><div className="service-list">{h.services.map(s => <div key={s.id}><span><b>{s.name}</b><small>{s.duration}</small></span><b>{s.price}</b></div>)}</div></article><article className="panel"><h2>Facilities and accessibility</h2>{h.facilities.map(x => <p key={x}>✓ {x}</p>)}</article></div><aside className="panel sticky"><h2>Contact and hours</h2><p><b>Address</b><br />{h.location}</p><p><b>Phone</b><br />{h.phone}</p><p><b>Hours</b><br />{h.hours}</p><div className="map">Map preview<br /><small>Map integration later</small></div></aside></div></>;
}
export function BookingPage() {
  const {
    hospitalId
  } = useParams();
  const h = byHospital(hospitalId);
  const {
    createAppointment
  } = useAppState();
  const nav = useNavigate();
  const [step, setStep] = useState(1),
    [data, setData] = useState({
      service: "",
      date: "2026-08-20",
      time: "",
      reason: ""
    }),
    [err, setErr] = useState("");
  if (!h) return <NotFoundPage />;
  const set = (k, v) => setData({
    ...data,
    [k]: v
  });
  const next = () => {
    if (step === 1 && (!data.service || !data.time)) return setErr("Choose a service and time.");
    if (step === 2 && data.reason.length < 10) return setErr("Describe the reason in at least 10 characters.");
    setErr("");
    setStep(step + 1);
  };
  const done = () => {
    const id = createAppointment({
      hospitalId,
      service: h.services.find(s => s.id === data.service).name,
      ...data
    });
    nav(`/patient/appointments/${id}`);
  };
  return <><Title over={`Step ${step} of 3`} title="Request an appointment" text="The hospital must confirm your requested time." /><div className="progress"><b>Appointment</b><b className={step > 1 ? "on" : ""}>Details</b><b className={step > 2 ? "on" : ""}>Review</b></div><div className="booking"><section className="panel form">{step === 1 && <><Field label="Service" as="select" value={data.service} onChange={e => set("service", e.target.value)}><option value="">Select service</option>{h.services.map(s => <option value={s.id} key={s.id}>{s.name} · {s.price}</option>)}</Field><Field label="Preferred date" type="date" value={data.date} onChange={e => set("date", e.target.value)} /><fieldset><legend>Available times</legend><div className="slots">{slots.map(x => <button type="button" className={data.time === x ? "chosen" : ""} onClick={() => set("time", x)} key={x}>{x}</button>)}</div></fieldset></>}{step === 2 && <><Field label="Reason for visit" as="textarea" rows="5" value={data.reason} onChange={e => set("reason", e.target.value)} hint="Do not include emergency information." /><div className="info"><b>Patient</b><p>Ada Nwosu · ada@example.com</p></div></>}{step === 3 && <><h2>Review request</h2><Row label="Hospital" value={h.name} /><Row label="Service" value={h.services.find(s => s.id === data.service)?.name} /><Row label="Requested time" value={`${formatDate(data.date)} at ${data.time}`} /><Row label="Reason" value={data.reason} /><label className="check"><input type="checkbox" defaultChecked /> I understand this remains pending until confirmed.</label></>}{err && <p className="error">{err}</p>}<div className="actions">{step > 1 && <button className="button ghost" onClick={() => setStep(step - 1)}>Back</button>}{step < 3 ? <button className="button" onClick={next}>Continue</button> : <button className="button" onClick={done}>Send request</button>}</div></section><aside className="panel"><h2>{h.name}</h2><p>{h.location}</p><hr /><b>Urgent help?</b><p>DocMate is not an emergency service.</p></aside></div></>;
}
