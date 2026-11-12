import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { authService } from "../../features/auth/services/authService";
import { appointmentService } from "../../features/appointments/services/appointmentService";
import { mapAppointment } from "../../features/hospitals/utils/hospitalUtils";
import { tokenStorage } from "../../services/storage/tokenStorage";
const AppStateContext = createContext(null);
const getUserRole = (user) => {
  const roles = [user?.role, user?.accountType, user?.type, ...(user?.roles || []), ...(user?.hospitalMemberships || []).map((m) => m.role)];
  const value = roles.find((role) => typeof role === "string" && /patient|hospital/i.test(role));
  return value ? (/hospital/i.test(value) ? "hospital" : "patient") : null;
};
const createSession = (user, expectedRole) => {
  const role = getUserRole(user) || expectedRole;
  if (!role) throw new Error("The server did not identify this account as a patient or hospital.");
  if (expectedRole && role !== expectedRole) throw new Error(`This account is not registered for ${expectedRole} access.`);
  return { role, name: user?.hospitalMemberships?.[0]?.hospital?.name || user?.patientProfile?.firstName && `${user.patientProfile.firstName} ${user.patientProfile.lastName || ""}`.trim() || user?.firstName && `${user.firstName} ${user.lastName || ""}`.trim() || user?.email || role, user };
};
const unwrapPage = (result) => (Array.isArray(result) ? result : result?.items || []).map(mapAppointment);
export function AppStateProvider({ children }) {
  const [session, setSession] = useState(null); const [authReady, setAuthReady] = useState(false); const [appointments, setAppointments] = useState([]); const [notice, setNotice] = useState("");
  const reloadAppointments = useCallback(async () => { setAppointments(unwrapPage(await appointmentService.list({ page: 1, pageSize: 100 }))); }, []);
  useEffect(() => {
    let active = true;
    const handleExpiredSession = () => { if (active) { setSession(null); setAppointments([]); setNotice("Your session expired. Please sign in again."); } };
    window.addEventListener("docmate:auth-expired", handleExpiredSession);
    if (!tokenStorage.getAccessToken() && !tokenStorage.getRefreshToken()) setAuthReady(true);
    else authService.getCurrentUser().then(async (user) => { const next = createSession(user); if (!active) return; setSession(next); try { setAppointments(unwrapPage(await appointmentService.list({ page: 1, pageSize: 100 }))); } catch { /* keep the authenticated shell available */ } }).catch((error) => { if (!active) return; if (error.status === 401 || error.status === 403) tokenStorage.clear(); setNotice(`Could not restore your sign-in: ${error.message}`); }).finally(() => { if (active) setAuthReady(true); });
    return () => { active = false; window.removeEventListener("docmate:auth-expired", handleExpiredSession); };
  }, []);
  const signIn = useCallback(async (role, credentials) => { const result = await authService.login(credentials); const next = createSession(result.user, role); setSession(next); try { await reloadAppointments(); } catch { setAppointments([]); } return next; }, [reloadAppointments]);
  const register = useCallback((role, details) => role === "hospital" ? authService.registerHospital(details) : authService.registerPatient(details), []);
  const signOut = useCallback(async () => { try { await authService.logout(); } finally { setSession(null); setAppointments([]); } }, []);
  const updateAppointment = useCallback(async (id, operation, event) => { const updated = typeof operation === "function" ? await operation() : operation; if (updated) setAppointments((items) => items.map((item) => item.id === id ? { ...item, ...mapAppointment(updated), ...(event ? { timeline: [...(item.timeline || []), { title: event, detail: "Just now" }] } : {}) } : item)); else await reloadAppointments(); return updated; }, [reloadAppointments]);
  const flash = useCallback((message) => { setNotice(message); window.setTimeout(() => setNotice(""), 5000); }, []);
  const value = useMemo(() => ({ session, authReady, appointments, reloadAppointments, signIn, register, signOut, forgotPassword: authService.forgotPassword, resetPassword: authService.resetPassword, verifyEmail: authService.verifyEmail, updateAppointment, notice, flash }), [session, authReady, appointments, reloadAppointments, signIn, register, signOut, updateAppointment, notice, flash]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}
export const useAppState = () => useContext(AppStateContext);
