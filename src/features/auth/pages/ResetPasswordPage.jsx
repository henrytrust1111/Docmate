import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Field, Logo } from "../../../shared/ui/common/AppComponents";
export function ResetPasswordPage() {
  const {
    token
  } = useParams();
  const {
    resetPassword
  } = useAppState();
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault();
    setErr("");
    const d = new FormData(e.currentTarget);
    const password = String(d.get("password"));
    if (password !== d.get("confirmPassword")) return setErr("Passwords do not match.");
    if (password.length < 8 || password.length > 128) return setErr("Password must be 8–128 characters.");
    setBusy(true);
    try {
      await resetPassword(token, password);
      nav("/auth/reset-success");
    } catch (error) {
      setErr(error.message || "The password could not be reset.");
    } finally {
      setBusy(false);
    }
  };
  return <div className="center"><Logo /><form className="auth-card form" onSubmit={submit}><h1>Set a new password</h1><Field label="New password" name="password" type="password" autoComplete="new-password" minLength="8" maxLength="128" required /><Field label="Confirm password" name="confirmPassword" type="password" autoComplete="new-password" minLength="8" maxLength="128" required />{err && <p className="error" role="alert">{err}</p>}<button className="button full" disabled={busy}>{busy ? "Please wait…" : "Save password"}</button></form></div>;
}
