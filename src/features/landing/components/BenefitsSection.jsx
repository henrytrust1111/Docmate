const benefits = ["Discover suitable hospitals", "Manage every appointment", "Handle schedule changes clearly", "Always know the next step"];
export function BenefitsSection() {
  return <section className="section soft">
      <div className="container two">
        <div>
          <span className="eyebrow">Built around the appointment</span>
          <h2>Less uncertainty for patients. One organised queue for hospitals.</h2>
          <p>DocMate connects discovery, requests, schedule changes, and clear status updates.</p>
        </div>
        <div className="feature-list">
          {benefits.map(benefit => <div key={benefit}>✓ <b>{benefit}</b></div>)}
        </div>
      </div>
    </section>;
}
