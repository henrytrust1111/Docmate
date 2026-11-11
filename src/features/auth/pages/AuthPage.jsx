import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Field, Logo } from "../../../shared/ui/common/AppComponents";
export function AuthPage({
  role,
  signup = false
}) {
  const {
    signIn,
    register,
    verifyEmail,
    flash
  } = useAppState();
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault();
    setError("");
    const d = new FormData(e.currentTarget);
    const password = String(d.get("password"));
    if (password.length < 8 || password.length > 128) return setError("Password must be 8–128 characters.");
    setBusy(true);
    try {
      if (signup) {
        const details = role === "hospital" ? {
          email: d.get("email"),
          password,
          hospitalName: d.get("hospitalName")
        } : {
          email: d.get("email"),
          password,
          firstName: d.get("firstName"),
          lastName: d.get("lastName")
        };
        const result = await register(role, details);
        if (result?.verificationToken) {
          try {
            await verifyEmail(result.verificationToken);
            flash("Account created and email verified. You can now sign in.");
          } catch (verificationError) {
            flash(`Account created, but email verification failed: ${verificationError.message}. You can still sign in.`);
          }
        } else flash("Account created. You can now sign in.");
        nav(`/auth/${role}/sign-in`);
      } else {
        await signIn(role, {
          email: d.get("email"),
          password
        });
        flash("Signed in successfully.");
        nav(role === "hospital" ? "/hospital/dashboard" : "/patient/hospitals");
      }
    } catch (err) {
      setError(err.message || "The request could not be completed.");
    } finally {
      setBusy(false);
    }
  };
  return <div className="auth"><aside><Logo /><div><span className="eyebrow">DocMate account</span><h1>{role === "hospital" ? "Organise every appointment request." : "Your next appointment, without the guesswork."}</h1><p>Sign in or create an account to continue.</p></div><Link to="/">← Back home</Link></aside><main><form className="auth-card form" onSubmit={submit}><span className="eyebrow">{role} access</span><h2>{signup ? `Create ${role} account` : `${role} sign in`}</h2>{signup && <div className="form-row">{role === "hospital" ? <Field label="Hospital name" name="hospitalName" minLength="2" required /> : <><Field label="First name" name="firstName" required /><Field label="Last name" name="lastName" required /></>}</div>}<Field label="Email" name="email" type="email" autoComplete="email" required /><Field label="Password" name="password" type="password" autoComplete={signup ? "new-password" : "current-password"} minLength="8" maxLength="128" required hint="8–128 characters" />{signup && <label className="check"><input type="checkbox" required /> I agree to the <Link to="/terms">terms</Link>.</label>}{error && <p className="error" role="alert">{error}</p>}<button className="button full" disabled={busy}>{busy ? "Please wait…" : signup ? "Create account" : "Sign in"}</button>{!signup && <Link to="/auth/forgot-password">Forgot password?</Link>}<p>{signup ? "Already registered?" : "New to DocMate?"} <Link to={`/auth/${role}/${signup ? "sign-in" : "sign-up"}`}>{signup ? "Sign in" : "Create account"}</Link></p><hr /><p>Need {role === "hospital" ? "patient" : "hospital"} access? <Link to={`/auth/${role === "hospital" ? "patient" : "hospital"}/sign-in`}>Switch here</Link>.</p></form></main></div>;
}
