import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { useAppState } from "../providers/AppStateProvider";
import { Logo, Notice } from "../../shared/ui/common/AppComponents";
const patientNavigation = [["hospitals", "Find care"], ["appointments", "Appointments"], ["profile", "Profile"], ["/contact", "Help"]];
const hospitalNavigation = [["dashboard", "Dashboard"], ["appointments", "Appointments"], ["patients", "Patients"], ["team", "Team"], ["services", "Services"], ["profile", "Profile"]];
export function DashboardLayout({
  role
}) {
  const {
    session,
    signOut,
    flash
  } = useAppState();
  const nav = useNavigate();
  const items = role === "hospital" ? hospitalNavigation : patientNavigation;
  const logout = async () => {
    try {
      await signOut();
    } catch (error) {
      flash(`Signed out on this device, but server logout failed: ${error.message}`);
    }
    nav("/");
  };
  return <div className="app"><aside><Logo /><nav>{items.map(x => <NavLink key={x[0]} to={x[0]}><i>{x[1][0]}</i>{x[1]}</NavLink>)}</nav><button onClick={logout}>↗ Log out</button></aside><div className="workspace"><header><div><small>Appointments are demo data</small><b>{session.name}</b></div><i>{session.name.split(" ").map(x => x[0]).slice(0, 2).join("")}</i></header><main><Outlet /></main></div><nav className="mobile-nav">{items.slice(0, 4).map(x => <NavLink key={x[0]} to={x[0]}><i>{x[1][0]}</i>{x[1]}</NavLink>)}</nav><Notice /></div>;
}
