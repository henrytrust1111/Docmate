import { useAppState } from "../../../app/providers/AppStateProvider";
import { Title } from "../../../shared/ui/common/AppComponents";
import { AppointmentCard } from "../../appointments/components/AppointmentCard";
export function DashboardPage() {
  const {
    appointments
  } = useAppState();
  const count = s => appointments.filter(a => s.includes(a.status)).length;
  return <><Title over="Hospital workspace" title="Good morning, Lagoon Care" text="Focus on requests that need a response." /><div className="stats"><article><span>Needs action</span><b>{count(["pending"])}</b></article><article><span>Confirmed</span><b>{count(["confirmed"])}</b></article><article><span>Reschedules</span><b>{count(["reschedule_requested"])}</b></article><article><span>Completed</span><b>{count(["completed"])}</b></article></div><section className="panel"><h2>Needs attention</h2><div className="appointment-list">{appointments.filter(a => ["pending", "reschedule_requested"].includes(a.status)).map(a => <AppointmentCard a={a} hospital key={a.id} />)}</div></section></>;
}
