import { Link } from "react-router-dom";
import { Empty, Logo } from "../../../shared/ui/common/AppComponents";
export function ResetSuccessPage() {
  return <div className="center"><Logo /><div className="auth-card"><Empty icon="✓" title="Password updated" text="Your password has been reset." action={<div className="actions"><Link className="button" to="/auth/patient/sign-in">Patient sign in</Link><Link className="button ghost" to="/auth/hospital/sign-in">Hospital sign in</Link></div>} /></div></div>;
}
