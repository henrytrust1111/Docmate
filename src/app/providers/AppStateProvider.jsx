import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { authService } from "../../features/auth/services/authService";
import { tokenStorage } from "../../services/storage/tokenStorage";
import { initialAppointments } from "../../features/appointments/data/mockAppointments";
const AppStateContext = createContext(null);
const getUserRole = user => {
  const memberships = Array.isArray(user?.memberships) ? user.memberships : [];
  const roles = Array.isArray(user?.roles) ? user.roles : [];
  const candidates = [user?.role, user?.accountType, user?.type, user?.membership?.role, ...memberships.map(membership => membership?.role || membership?.type), ...roles];
  const role = candidates.find(candidate => typeof candidate === "string" && /patient|hospital/i.test(candidate));
  if (!role) return null;
  return memberships.length || /hospital/i.test(role) ? "hospital" : "patient";
};
const createSession = (user, expectedRole) => {
  const role = getUserRole(user) || expectedRole;
  if (!role) throw new Error("The server did not identify this account as a patient or hospital.");
  if (expectedRole && role !== expectedRole) {
    throw new Error(`This account is not registered for ${expectedRole} access.`);
  }
  const name = user?.hospitalName || user?.hospital?.name || [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.name || user?.email || `${role[0].toUpperCase()}${role.slice(1)}`;
  return {
    role,
    name,
    user
  };
};
export function AppStateProvider({
  children
}) {
  const [session, setSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    let active = true;
    const handleExpiredSession = () => {
      if (active) {
        setSession(null);
        setNotice("Your session expired. Please sign in again.");
      }
    };
    window.addEventListener("docmate:auth-expired", handleExpiredSession);
    if (!tokenStorage.getAccessToken() && !tokenStorage.getRefreshToken()) {
      setAuthReady(true);
    } else {
      authService.getCurrentUser().then(user => {
        if (active) setSession(createSession(user));
      }).catch(error => {
        if (!active) return;
        if (error.status === 401 || error.status === 403) tokenStorage.clear();
        setNotice(`Could not restore your sign-in: ${error.message}`);
      }).finally(() => {
        if (active) setAuthReady(true);
      });
    }
    return () => {
      active = false;
      window.removeEventListener("docmate:auth-expired", handleExpiredSession);
    };
  }, []);
  const signIn = useCallback(async (role, credentials) => {
    const result = await authService.login(credentials);
    try {
      const next = createSession(result.user, role);
      setSession(next);
      return next;
    } catch (error) {
      tokenStorage.clear();
      throw error;
    }
  }, []);
  const register = useCallback((role, details) => role === "hospital" ? authService.registerHospital(details) : authService.registerPatient(details), []);
  const signOut = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setSession(null);
    }
  }, []);
  const createAppointment = useCallback(data => {
    const id = `DM-${Math.floor(25000 + Math.random() * 70000)}`;
    const serviceNames = {
      general: "General consultation",
      paediatrics: "Paediatrics",
      cardiology: "Cardiology",
      dermatology: "Dermatology",
      "womens-health": "Women’s health",
      family: "Family medicine"
    };
    const appointment = {
      id,
      patient: session?.name || "Demo patient",
      email: session?.user?.email || "",
      status: "pending",
      doctor: "Not assigned",
      createdAt: new Date().toISOString(),
      timeline: [{
        title: "Appointment requested",
        detail: "Just now"
      }],
      ...data,
      service: serviceNames[data.service] || data.service
    };
    setAppointments(items => [appointment, ...items]);
    return id;
  }, [session]);
  const updateAppointment = useCallback((id, updates, event) => {
    setAppointments(items => items.map(item => item.id === id ? {
      ...item,
      ...updates,
      timeline: event ? [...item.timeline, {
        title: event,
        detail: "Just now"
      }] : item.timeline
    } : item));
  }, []);
  const flash = useCallback(message => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 5000);
  }, []);
  const value = useMemo(() => ({
    session,
    authReady,
    appointments,
    signIn,
    register,
    signOut,
    forgotPassword: authService.forgotPassword,
    resetPassword: authService.resetPassword,
    verifyEmail: authService.verifyEmail,
    createAppointment,
    updateAppointment,
    notice,
    flash
  }), [session, authReady, appointments, signIn, register, signOut, createAppointment, updateAppointment, notice, flash]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}
export const useAppState = () => useContext(AppStateContext);
