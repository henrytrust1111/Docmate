import { useEffect, useState } from "react";
import { Title, Empty } from "../../../shared/ui/common/AppComponents";
import { AppointmentCard } from "../../appointments/components/AppointmentCard";
import { profileService } from "../../auth/services/profileService";
export function DashboardPage() {
  const [summary, setSummary] = useState(null); const [error, setError] = useState("");
  const load = () => profileService.getHospitalSummary().then(setSummary).catch((e) => setError(e.message)); useEffect(() => { load(); }, []);
  return <><Title over="Hospital workspace" title="Hospital dashboard" text="Focus on requests that need a response." />{error ? <Empty icon="!" title="Dashboard summary unavailable" text={error} action={<button className="button" onClick={load}>Try again</button>} /> : !summary ? <p>Loading dashboard…</p> : <><div className="stats"><article><span>Needs action</span><b>{summary.counts?.pending || 0}</b></article><article><span>Confirmed</span><b>{summary.counts?.confirmed || 0}</b></article><article><span>Reschedules</span><b>{summary.counts?.reschedule_requested || 0}</b></article><article><span>Completed</span><b>{summary.counts?.completed || 0}</b></article></div><section className="panel"><h2>Needs attention</h2><div className="appointment-list">{(summary.needsAttention || []).map((a) => <AppointmentCard a={a} hospital key={a.id} />)}{!summary.needsAttention?.length && <p>No appointments need attention.</p>}</div></section></>}</>;
}
