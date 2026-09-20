import { createContext, useContext, useMemo, useState } from "react";
import { initialAppointments } from "./mockData";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [session, setSession] = useState(() => {
    try { return JSON.parse(localStorage.getItem("docmate-demo-session")) || null; }
    catch { return null; }
  });
  const [appointments, setAppointments] = useState(initialAppointments);
  const [notice, setNotice] = useState("");

  const signIn = (role) => {
    const next = role === "hospital"
      ? { role, name: "Lagoon Care Hospital" }
      : { role: "patient", name: "Ada Nwosu" };
    localStorage.setItem("docmate-demo-session", JSON.stringify(next));
    setSession(next);
  };

  const signOut = () => {
    localStorage.removeItem("docmate-demo-session");
    setSession(null);
  };

  const createAppointment = (data) => {
    const id = `DM-${Math.floor(25000 + Math.random() * 70000)}`;
    const serviceNames = { general: "General consultation", paediatrics: "Paediatrics", cardiology: "Cardiology", dermatology: "Dermatology", "womens-health": "Women’s health", family: "Family medicine" };
    const appointment = {
      id,
      patient: "Ada Nwosu",
      email: "ada@example.com",
      status: "pending",
      doctor: "Not assigned",
      createdAt: new Date().toISOString(),
      timeline: [{ title: "Appointment requested", detail: "Just now" }],
      ...data,
      service: serviceNames[data.service] || data.service,
    };
    setAppointments((items) => [appointment, ...items]);
    return id;
  };

  const updateAppointment = (id, updates, event) => {
    setAppointments((items) => items.map((item) => item.id === id ? {
      ...item,
      ...updates,
      timeline: event ? [...item.timeline, { title: event, detail: "Just now" }] : item.timeline,
    } : item));
  };

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3500);
  };

  const value = useMemo(() => ({ session, appointments, signIn, signOut, createAppointment, updateAppointment, notice, flash }), [session, appointments, notice]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);
