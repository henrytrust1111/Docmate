import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Empty, Field, Logo } from "../../../shared/ui/common/AppComponents";
export function ForgotPasswordPage() {
  const {
    forgotPassword
  } = useAppState();
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      setResult(await forgotPassword(new FormData(e.currentTarget).get("email")));
    } catch (err) {
      setError(err.message || "The request could not be completed.");
    } finally {
      setBusy(false);
    }
  };
  return <div className="center"><Logo />{result ? <div className="auth-card"><Empty icon="✉" title="Password reset requested" text={result.resetToken ? "Email delivery is not configured in this environment. Continue with the development reset token." : "If the account exists, password reset instructions will be sent when email delivery is enabled."} action={result.resetToken ? <Link className="button" to={`/auth/reset-password/${encodeURIComponent(result.resetToken)}`}>Continue to reset password</Link> : <Link to="/auth/patient/sign-in">Return to sign in</Link>} /></div> : <form className="auth-card form" onSubmit={submit}><h1>Reset your password</h1><p>Enter the email connected to your account.</p><Field label="Email" name="email" type="email" autoComplete="email" required />{error && <p className="error" role="alert">{error}</p>}<button className="button full" disabled={busy}>{busy ? "Please wait…" : "Send instructions"}</button></form>}</div>;
}
