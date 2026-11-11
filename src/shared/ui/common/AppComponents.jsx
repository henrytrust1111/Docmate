import { Link } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
export function Logo() {
  return <Link className="logo" to="/"><span>+</span> DocMate</Link>;
}
export function Notice() {
  const {
    notice
  } = useAppState();
  return notice ? <div className="toast" role="status">✓ {notice}</div> : null;
}
export function Field({
  label,
  as = "input",
  hint,
  children,
  ...p
}) {
  const T = as;
  return <label className="field"><span>{label}</span>{as === "input" && children ? children : <T {...p}>{children}</T>}{hint && <small>{hint}</small>}</label>;
}
export function Title({
  over,
  title,
  text
}) {
  return <header className="page-title"><span className="eyebrow">{over}</span><h1>{title}</h1><p>{text}</p></header>;
}
export function Empty({
  icon = "○",
  title,
  text,
  action
}) {
  return <div className="empty"><i>{icon}</i><h2>{title}</h2><p>{text}</p>{action}</div>;
}
export function Status({
  value
}) {
  return <span className={`status ${value}`}>● {value.replace("_", " ")}</span>;
}
export function Row({
  label,
  value
}) {
  return <div className="summary"><span>{label}</span><b>{value || "Not provided"}</b></div>;
}
