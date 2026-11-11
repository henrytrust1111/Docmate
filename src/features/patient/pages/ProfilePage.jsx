import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../../app/providers/AppStateProvider";
import { Field, Title } from "../../../shared/ui/common/AppComponents";
import { hospitals } from "../../hospitals/data/mockHospitals";
export function ProfilePage({
  hospital = false,
  edit = false
}) {
  const {
    flash
  } = useAppState();
  const nav = useNavigate();
  const h = hospitals[0];
  if (edit) return <><Title over="Profile" title={`Edit ${hospital ? "facility" : "your"} details`} text="Keep public and contact information accurate." /><form className="panel form narrow" onSubmit={e => {
      e.preventDefault();
      flash("Profile saved");
      nav(hospital ? "/hospital/profile" : "/patient/profile");
    }}><Field label={hospital ? "Facility name" : "First name"} defaultValue={hospital ? h.name : "Ada"} /><Field label={hospital ? "About" : "Last name"} as={hospital ? "textarea" : "input"} defaultValue={hospital ? h.description : "Nwosu"} /><Field label="Email" type="email" defaultValue={hospital ? "team@lagoon.demo" : "ada@example.com"} /><Field label="Phone" defaultValue={hospital ? h.phone : "+234 801 234 5678"} /><div className="actions"><button className="button">Save changes</button></div></form></>;
  return <><Title over="Account" title={hospital ? "Facility profile" : "Profile"} text="Manage the details used across DocMate." /><section className="profile panel"><i>{hospital ? "LC" : "AN"}</i><div><h2>{hospital ? h.name : "Ada Nwosu"}</h2><p>{hospital ? h.location : "ada@example.com · +234 801 234 5678"}</p><span className="verified">✓ Demo profile</span></div><Link className="button ghost" to="edit">Edit profile</Link></section><div className="cards"><article className="panel"><h2>{hospital ? "About" : "Personal details"}</h2><p>{hospital ? h.description : "Date of birth · 18 Apr 1994"}</p></article><article className="panel"><h2>{hospital ? "Profile readiness" : "Notifications"}</h2><p>{hospital ? "85% complete" : "✓ Email updates\n✓ SMS reminders"}</p></article></div></>;
}
