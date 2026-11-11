import { Link } from "react-router-dom";
export function ClosingCtaSection() {
  return <section className="section">
      <div className="container callout">
        <div>
          <span className="eyebrow">Frontend demo</span>
          <h2>Explore the complete appointment journey.</h2>
        </div>
        <div className="actions">
          <Link className="button white" to="/auth/patient/sign-in">Demo patient</Link>
          <Link className="button outline" to="/auth/hospital/sign-in">Demo hospital</Link>
        </div>
      </div>
    </section>;
}
