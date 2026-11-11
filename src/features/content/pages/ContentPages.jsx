import { useState } from "react";
import { Link } from "react-router-dom";
import { Empty, Field } from "../../../shared/ui/common/AppComponents";
import { PageFrame } from "../../../shared/ui/common/PageFrame";
import { faqItems } from "../data/faqItems";
export function AboutPage() {
  return <PageFrame over="About DocMate" title="Appointment coordination that is easier to understand." text="DocMate is designed for patients who need a clearer route to care and hospitals that need an organised way to respond."><div className="cards">{[["Our focus", "Turn “I need care” into a confirmed appointment with a suitable partner hospital."], ["For patients", "Understand services, request a time, follow the response, and manage changes."], ["For hospitals", "Review requests, propose schedules, assign clinicians, and keep queues clear."]].map(x => <article className="panel" key={x[0]}><h2>{x[0]}</h2><p>{x[1]}</p></article>)}</div><div className="actions centered"><Link className="button" to="/auth/patient/sign-in">Explore as patient</Link><Link className="button ghost" to="/auth/hospital/sign-up">Join as hospital</Link></div></PageFrame>;
}
export function FaqPage() {
  const [active, setActive] = useState(0);
  return <PageFrame over="Help centre" title="Frequently asked questions" text="Clear answers about appointments, accounts, safety, and hospital participation."><div className="faqs">{faqItems.map((x, i) => <article key={x[0]}><button aria-expanded={active === i} onClick={() => setActive(active === i ? -1 : i)}>{x[0]}<b>{active === i ? "−" : "+"}</b></button>{active === i && <p>{x[1]}</p>}</article>)}</div><div className="help"><div><h2>Still need help?</h2><p>Tell us what you need and the right team can follow up.</p></div><Link className="button" to="/contact">Contact support</Link></div></PageFrame>;
}
export function ContactPage() {
  const [sent, setSent] = useState(false);
  return <PageFrame over="Contact DocMate" title="How can we help?" text="Choose a category and provide enough detail for the right team."><div className="two"><div><h2>Support categories</h2>{["Patient booking help", "Hospital onboarding", "Technical issue", "Payment enquiry", "General enquiry"].map(x => <p key={x}>✓ {x}</p>)}<div className="warning"><b>Medical emergency?</b><p>DocMate is not an emergency service. Contact local emergency services.</p></div></div>{sent ? <Empty icon="✓" title="Message received" text="Demo reference DM-SUPPORT-0826." action={<button className="button ghost" onClick={() => setSent(false)}>Send another</button>} /> : <form className="panel form" onSubmit={e => {
        e.preventDefault();
        setSent(true);
      }}><Field label="Category" as="select"><option>Patient booking help</option><option>Hospital onboarding</option><option>Technical issue</option></Field><Field label="Full name" required /><Field label="Email" type="email" required /><Field label="Message" as="textarea" rows="5" minLength="20" required hint="At least 20 characters" /><button className="button">Send message</button></form>}</div></PageFrame>;
}
export function LegalPage({
  type
}) {
  const d = {
    privacy: ["Privacy overview", "Only information needed to coordinate appointments should be collected."],
    terms: ["Terms of use", "Appointment requests are not confirmed until accepted by a hospital."],
    accessibility: ["Accessibility commitment", "DocMate aims to support keyboards, screen readers, zoom, and clear focus states."]
  }[type];
  return <PageFrame over="Legal & safety" title={d[0]} text="Frontend content placeholder — requires formal review before launch."><article className="panel prose"><p>{d[1]}</p><h2>Before public launch</h2><p>Collection, retention, cancellation, safety, and access terms must be reviewed for the launch market.</p><Link to="/contact">Ask a question →</Link></article></PageFrame>;
}
