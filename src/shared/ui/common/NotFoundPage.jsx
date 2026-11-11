import { Link } from "react-router-dom";
import { Empty } from "./AppComponents";
export function NotFoundPage() {
  return <div className="center"><div className="auth-card"><Empty icon="404" title="Page not found" text="This route or demo record does not exist." action={<Link className="button" to="/">Return home</Link>} /></div></div>;
}
