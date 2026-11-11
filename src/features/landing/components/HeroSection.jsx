import { Link } from "react-router-dom";
import { Status } from "../../../shared/ui/common/AppComponents";
export function HeroSection() {
  return <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Healthcare appointments, made clearer</span>
          <h1>Find the right hospital and manage your visit with confidence.</h1>
          <p>Explore partner hospitals, request an appointment, and follow every update in one simple place.</p>
          <div className="actions">
            <Link className="button" to="/auth/patient/sign-in">Find a hospital →</Link>
            <Link className="button ghost" to="/auth/hospital/sign-up">For hospitals</Link>
          </div>
          <div className="trust">✓ Verified profiles　✓ Clear status　✓ Mobile-friendly</div>
        </div>
        <div className="demo-card">
          <div>
            <i>LC</i>
            <b>Lagoon Care Hospital</b>
            <Status value="confirmed" />
          </div>
          <p>Next available</p>
          <h2>Today · 2:30 PM</h2>
          <div className="slots"><span>9:00</span><span>10:30</span><span className="chosen">2:30</span></div>
          <strong>Appointment requested ✓</strong>
        </div>
      </div>
    </section>;
}
