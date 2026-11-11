import { Title } from "../../../shared/ui/common/AppComponents";
const steps = [["01", "Find care", "Search by hospital, location, or service."], ["02", "Choose a time", "See services and available slots."], ["03", "Send a request", "Review your details before submitting."], ["04", "Stay updated", "Reschedule, cancel, and see history."]];
export function HowItWorksSection() {
  return <section className="section">
      <div className="container">
        <Title over="How it works" title="From search to appointment in four clear steps" text="Everything important stays connected." />
        <div className="steps">
          {steps.map(([number, title, description]) => <article key={number}>
              <i>{number}</i>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>)}
        </div>
      </div>
    </section>;
}
