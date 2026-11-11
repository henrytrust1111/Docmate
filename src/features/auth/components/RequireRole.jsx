import { Link, Outlet } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Empty, Logo } from "../../../shared/ui/common/AppComponents";
export function RequireRole({
  role
}) {
  const {
    session,
    authReady
  } = useAppState();
  if (!authReady) return <div className="center" role="status">Restoring your session…</div>;
  return session?.role === role ? <Outlet /> : <div className="center"><Logo /><div className="auth-card"><Empty icon="🔒" title={`${role} access required`} text="Sign in with your registered account to open this route." action={<Link className="button" to={`/auth/${role}/sign-in`}>Sign in</Link>} /></div></div>;
}
