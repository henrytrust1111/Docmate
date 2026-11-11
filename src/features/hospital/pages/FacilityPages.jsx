import { Title, Status } from "../../../shared/ui/common/AppComponents";
import { doctors } from "../data/mockDoctors";
import { hospitals } from "../../hospitals/data/mockHospitals";
export function HospitalTeamPage() {
  return <><Title over="Hospital setup" title="Clinical team" text="Manage clinicians available for assignment." /><div className="cards">{doctors.map(d => <article className="panel team" key={d.id}><i>{d.name.split(" ").slice(1).map(x => x[0]).join("")}</i><h2>{d.name}</h2><p>{d.specialty}</p><Status value="confirmed" /><button className="button ghost small">Edit availability</button></article>)}</div></>;
}
export function HospitalServicesPage() {
  return <><Title over="Hospital setup" title="Services and availability" text="These details shape what patients can request." /><section className="panel"><div className="card-head"><h2>Published services</h2><button className="button small">+ Add service</button></div><div className="service-list">{hospitals[0].services.map(s => <div key={s.id}><span><b>{s.name}</b><small>{s.duration} · {s.price}</small></span><Status value="confirmed" /></div>)}</div></section><section className="panel"><h2>Opening hours</h2><p>Monday–Friday · 8:00 AM–8:00 PM</p><p>Saturday · 9:00 AM–4:00 PM</p><p>Sunday · Closed</p></section></>;
}
