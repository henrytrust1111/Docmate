export const hospitals = [
  {
    id: "lagoon-care",
    name: "Lagoon Care Hospital",
    initials: "LC",
    verified: true,
    location: "Victoria Island, Lagos",
    distance: "2.4 km away",
    phone: "+234 800 362 6283",
    hours: "Open today · 8:00 AM–8:00 PM",
    nextAvailable: "Today, 2:30 PM",
    description: "A patient-focused outpatient hospital offering accessible primary and specialist care in a calm, modern setting.",
    facilities: ["Wheelchair accessible", "On-site laboratory", "Free parking"],
    services: [
      { id: "general", name: "General consultation", duration: "30 min", price: "₦8,000" },
      { id: "paediatrics", name: "Paediatrics", duration: "40 min", price: "₦12,000" },
      { id: "cardiology", name: "Cardiology", duration: "45 min", price: "₦18,000" },
    ],
  },
  {
    id: "cedar-clinic",
    name: "Cedar Specialist Clinic",
    initials: "CS",
    verified: true,
    location: "Ikeja GRA, Lagos",
    distance: "6.8 km away",
    phone: "+234 800 233 2711",
    hours: "Open today · 9:00 AM–6:00 PM",
    nextAvailable: "Tomorrow, 9:00 AM",
    description: "Specialist-led outpatient care with coordinated diagnostics and follow-up appointments.",
    facilities: ["Diagnostic imaging", "On-site pharmacy", "Accessible entrance"],
    services: [
      { id: "dermatology", name: "Dermatology", duration: "30 min", price: "₦15,000" },
      { id: "womens-health", name: "Women’s health", duration: "40 min", price: "₦14,000" },
    ],
  },
  {
    id: "mainland-family",
    name: "Mainland Family Medical Centre",
    initials: "MF",
    verified: true,
    location: "Yaba, Lagos",
    distance: "8.1 km away",
    phone: "+234 800 624 6526",
    hours: "Open 24 hours",
    nextAvailable: "Today, 4:00 PM",
    description: "Everyday family healthcare with extended opening hours and convenient appointment options.",
    facilities: ["24-hour reception", "Family waiting room", "Laboratory"],
    services: [
      { id: "general", name: "General consultation", duration: "30 min", price: "₦7,500" },
      { id: "family", name: "Family medicine", duration: "30 min", price: "₦9,000" },
    ],
  },
];

export const doctors = [
  { id: "doc-1", name: "Dr Amara Okafor", specialty: "General medicine", availability: "Available today" },
  { id: "doc-2", name: "Dr Tunde Adebayo", specialty: "Cardiology", availability: "Available tomorrow" },
  { id: "doc-3", name: "Dr Kemi Bello", specialty: "Paediatrics", availability: "Available today" },
];

export const initialAppointments = [
  {
    id: "DM-24081",
    hospitalId: "lagoon-care",
    patient: "Ada Nwosu",
    email: "ada@example.com",
    service: "General consultation",
    date: "2026-08-18",
    time: "10:30 AM",
    status: "confirmed",
    reason: "Recurring headaches and fatigue",
    doctor: "Dr Amara Okafor",
    createdAt: "2026-08-12T09:15:00Z",
    timeline: [
      { title: "Appointment requested", detail: "12 Aug · 10:15 AM" },
      { title: "Confirmed by Lagoon Care", detail: "12 Aug · 10:42 AM" },
    ],
  },
  {
    id: "DM-24082",
    hospitalId: "cedar-clinic",
    patient: "Ada Nwosu",
    email: "ada@example.com",
    service: "Dermatology",
    date: "2026-08-22",
    time: "1:00 PM",
    status: "pending",
    reason: "Skin irritation requiring assessment",
    doctor: "Not assigned",
    createdAt: "2026-08-14T14:00:00Z",
    timeline: [{ title: "Appointment requested", detail: "14 Aug · 3:00 PM" }],
  },
  {
    id: "DM-23990",
    hospitalId: "mainland-family",
    patient: "Ada Nwosu",
    email: "ada@example.com",
    service: "Family medicine",
    date: "2026-07-19",
    time: "9:00 AM",
    status: "completed",
    reason: "Routine health check",
    doctor: "Dr Kemi Bello",
    createdAt: "2026-07-12T09:00:00Z",
    timeline: [
      { title: "Appointment requested", detail: "12 Jul · 10:00 AM" },
      { title: "Appointment confirmed", detail: "12 Jul · 10:20 AM" },
      { title: "Visit completed", detail: "19 Jul · 9:45 AM" },
    ],
  },
];

export const faqItems = [
  ["How does booking work?", "Choose a hospital and service, select an available time, and submit your request. The hospital then confirms it or proposes another time."],
  ["What does ‘pending’ mean?", "The hospital has received your request and still needs to respond. Your appointment is only final when its status becomes confirmed."],
  ["Can I reschedule or cancel?", "Yes. Open the appointment and choose reschedule or cancel. The interface will explain any policy before you confirm."],
  ["How are hospitals verified?", "DocMate is designed to show only approved partner facilities. Verification details will be published before live launch."],
  ["Is DocMate for emergencies?", "No. DocMate is an appointment coordination service. For an emergency, contact local emergency services or go to the nearest emergency department."],
  ["How is my information used?", "Only information needed to coordinate your appointment should be collected. Full privacy and retention terms will be published before launch."],
];

export const slots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM", "4:00 PM"];
