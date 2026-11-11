# DocMate Backend Development Plan

## 1. Overview

DocMate is currently a frontend-first healthcare appointment platform for patients and partner hospitals. The UI already covers the main patient and hospital journeys using mock data and local app state. The backend must replace that mock layer with real APIs so that the application can support end-to-end appointment handling, hospital management, auth, payments, and lifecycle notifications.

The goal is to build the backend in a dependency-safe order so that by the time all five developers finish, the platform is ready for first MVP API consumption and frontend integration.

---

## 2. What DocMate currently is

From the existing frontend and product audit, DocMate is essentially a healthcare appointment coordination platform with two key user groups:

- Patients
  - discover hospitals
  - view hospital details
  - request appointments
  - see status updates
  - reschedule or cancel
  - manage profile

- Hospitals
  - review incoming appointment requests
  - accept, reject, or propose new times
  - assign doctors
  - manage services and staff
  - maintain profile and dashboard

The current app uses mock data from `src/frontend/mockData.js` and local app state from `src/frontend/AppState.jsx`. It is a strong prototype for UX and user flows, but the backend must formalize these flows into real API-backed data and business logic.

---

## 3. Current UI coverage end to end

### Public experience
- Home page
- About page
- FAQ
- Contact page
- Legal and support pages
- Patient and hospital entry points

### Patient flow
- hospital search and filter
- hospital detail
- service / date / time selection
- appointment request
- appointment review
- status tracking
- reschedule and cancellation
- patient profile

### Hospital flow
- dashboard overview
- appointment queue
- pending and action list
- appointment review
- doctor assignment
- patient list
- services and team management
- hospital profile

### Important backend implication
This is not just a basic product app. It is a full appointment lifecycle system involving:
- user authentication and roles
- hospitals and their services
- doctor availability and assignment
- appointment states
- notifications
- payments
- patient and hospital profile data
- support and dashboard reporting

---

## 4. Backend implementation dependency order

Some endpoints must be created before others because they are prerequisites for the business flow.

### Required dependency order
1. Authentication and user identity
2. Hospital catalog and service catalog
3. Appointment creation and scheduling
4. Appointment workflow actions
5. Payment and notifications
6. Profiles, dashboard, and reporting

If authentication is not done first, the app cannot safely authorize hospital and patient actions. If hospitals and services are not available, appointment creation cannot be validated. If appointment workflows are not available, payments and notifications do not make business sense.

---

## 5. Team assignment

The backend work is divided among five developers:

- Henry
- Rose
- Godwin
- Michael
- Vivian

Each person owns a distinct backend domain. The sequencing below is the intended order for the entire backend build.

---

## 6. Developer responsibilities and task breakdown

### Henry — Authentication, identity, authorization, and security

Primary responsibilities:
- patient and hospital registration
- login/logout
- JWT or session management
- role-based access control
- forgot-password and reset-password flows
- email verification flow
- protected route enforcement
- session refresh and expiry handling

Endpoints to build first:
- `POST /api/v1/auth/register/patient`
- `POST /api/v1/auth/register/hospital`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/forgot-password`
- `POST /api/v1/auth/reset-password`
- `POST /api/v1/auth/refresh-token`

Why this goes first:
- Everything else depends on secure user identity and permissions.
- Without auth, patient and hospital operations cannot be safely isolated.

---

### Rose — Hospital domain, service catalog, and doctor data

Primary responsibilities:
- hospital onboarding and verification
- hospital profile CRUD
- hospital search and filtering
- service catalog management
- price, duration, and availability data
- doctor roster and assignment metadata

Endpoints:
- `GET /api/v1/hospitals`
- `GET /api/v1/hospitals/:id`
- `POST /api/v1/hospitals`
- `PATCH /api/v1/hospitals/:id`
- `GET /api/v1/hospitals/:id/services`
- `GET /api/v1/hospitals/:id/doctors`
- `POST /api/v1/hospitals/:id/services`
- `PATCH /api/v1/hospitals/:id/services/:serviceId`
- `GET /api/v1/hospitals/search?location=...&service=...`

Why this comes second:
- Without valid hospital and service data, appointment creation is not meaningful.
- This also powers the hospital discovery and doctor assignment screens.

---

### Godwin — Appointment creation, scheduling, and lifecycle management

Primary responsibilities:
- create appointment requests
- list patient and hospital appointments
- validate availability and booking rules
- appointment status transitions
- reschedule and cancellation flows
- appointment timeline and audit events

Endpoints:
- `POST /api/v1/appointments`
- `GET /api/v1/appointments/:id`
- `GET /api/v1/appointments?patientId=...`
- `GET /api/v1/appointments?hospitalId=...`
- `PATCH /api/v1/appointments/:id/status`
- `PATCH /api/v1/appointments/:id/reschedule`
- `POST /api/v1/appointments/:id/cancel`
- `GET /api/v1/appointments/availability?hospitalId=...&date=...`
- `POST /api/v1/appointments/:id/assign-doctor`

Why this comes third:
- This is the core product engine for the platform.
- It depends on auth, hospitals, and services to work accurately.

---

### Michael — Payments, notifications, and support operations

Primary responsibilities:
- payment intent and verification flow
- appointment payment status
- in-app, email, and SMS notifications
- support ticket creation and resolution
- communication events for appointment changes

Endpoints:
- `POST /api/v1/payments/intents`
- `POST /api/v1/payments/verify`
- `GET /api/v1/payments/:id`
- `GET /api/v1/payments?appointmentId=...`
- `POST /api/v1/notifications/email`
- `POST /api/v1/notifications/sms`
- `GET /api/v1/notifications`
- `POST /api/v1/support/tickets`
- `GET /api/v1/support/tickets`

Why this comes fourth:
- Payment and notifications are downstream of real appointment workflow completion.
- They should not be built before the appointment lifecycle is stable.

---

### Vivian — Profiles, dashboards, reporting, and operational visibility

Primary responsibilities:
- patient profile CRUD
- hospital profile CRUD
- hospital admin dashboard summary
- patient summary and record views
- reports and operational analytics
- audit visibility for appointment and account operations

Endpoints:
- `GET /api/v1/patients/me`
- `PATCH /api/v1/patients/me`
- `GET /api/v1/hospitals/me`
- `PATCH /api/v1/hospitals/me`
- `GET /api/v1/dashboard/hospital/summary`
- `GET /api/v1/dashboard/patient/summary`
- `GET /api/v1/reports/appointments`
- `GET /api/v1/audit/logs`

Why this comes last:
- These are cross-cutting surfaces that rely on all other domain modules being working.
- They make the system production-ready for operational use and dashboard visibility.

---

## 7. Recommended execution order for the full team

This is the working backend sequence for the developers:

1. Henry — Auth and user security
2. Rose — Hospitals, services, and doctors
3. Godwin — Appointments and scheduling
4. Michael — Payments and notifications
5. Vivian — Profiles, dashboards, and reporting

This ensures the app reaches a real MVP progression:
- sign in
- search hospitals
- create appointment
- confirm or reschedule
- assign doctor
- process payment
- notify users
- view hospital and patient dashboards

---

## 8. MVP backend target

By the time all five developers finish, the backend should support the following first-release MVP features:

- patient registration and login
- hospital registration and login
- hospital listing and filtering
- hospital service and pricing data
- appointment request creation
- appointment review and hospital admin decisions
- doctor assignment
- appointment reschedule/cancel logic
- patient and hospital profile management
- payment flow for booked appointments
- notifications for status changes
- support tickets and complaint handling
- dashboard summary view for hospital operations

This makes the frontend ready to integrate with backend APIs and become a real MVP product.

---

## 9. Final recommendation

The most important principle is this: do not build the later features before the earlier ones are stable.

The correct backend progression is:
- secure identity first
- hospital catalog second
- appointments third
- payment and messaging fourth
- dashboards and reporting last

That order gives DocMate the strongest chance of becoming a production-ready MVP without breaking the frontend integration timeline.
