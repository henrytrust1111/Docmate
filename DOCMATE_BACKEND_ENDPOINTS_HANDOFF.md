# DocMate frontend: backend endpoint handoff

This document describes the API work needed to connect the current frontend to a backend, excluding the Payments, Notifications, and Support Operations responsibilities listed in the team assignment. It is based on the code currently in this repository; mock data and local-only actions are not treated as existing API behavior.

## 1. Scope and exclusions

### Included

- Hospital discovery, hospital details, services, and appointment availability.
- Patient and hospital appointment queues, booking, and appointment workflow actions.
- Hospital clinician roster and assignment data.
- Patient and hospital profile data.
- Hospital dashboard summary and the hospital's appointment-linked patient list.

### Explicitly excluded

Do not implement or include endpoint requirements for:

- Payment intents, payment verification, or appointment payment status.
- In-app, email, or SMS notifications and delivery.
- Support ticket creation, retrieval, or resolution.
- Communication events or delivery workflows for appointment changes.

Appointment APIs below still need to persist appointment state and return its audit/history entries to render the existing appointment timeline. That is workflow history only; it is not a messaging or notification API. Appointment creation and status changes must not depend on payment or notification endpoints owned by the excluded workstream.

## 2. Current API usage

The current frontend uses `VITE_API_BASE_URL` as its API origin and sends bearer access tokens for authenticated requests. These routes already have frontend service calls and are not part of the pending endpoint list:

| Method | Route | Current frontend use |
|---|---|---|
| `POST` | `/api/v1/auth/register/patient` | Patient registration |
| `POST` | `/api/v1/auth/register/hospital` | Hospital registration |
| `POST` | `/api/v1/auth/login` | Sign-in |
| `POST` | `/api/v1/auth/logout` | Sign-out |
| `POST` | `/api/v1/auth/verify-email` | Verify a token returned during registration |
| `POST` | `/api/v1/auth/forgot-password` | Request password reset |
| `POST` | `/api/v1/auth/reset-password` | Set a new password |
| `GET` | `/api/v1/auth/me` | Restore the signed-in user and role |
| `POST` | `/api/v1/auth/refresh-token` | Refresh an expired access token in the shared HTTP client |

`GET /health` has a frontend service wrapper, but no current call site was found. No other backend requests are currently made by the application. In particular, hospital, appointment, profile, dashboard, clinician, and service screens currently read mock data or local React state.

## 3. Shared API contract

- Prefix the endpoints in this handoff with `/api/v1`, except the already-existing `/health`.
- Require the existing bearer access token on all patient and hospital routes. Derive the acting patient and hospital from the authenticated identity; do not trust a client-supplied `patientId` or `hospitalId` to establish ownership.
- Enforce role and resource-level authorization on every read and write. A patient may access only their own appointments/profile. A hospital account may access only its hospital, its appointments, its clinicians, and patients associated with its appointments.
- Use JSON and return successful results in the existing-compatible form `{ "data": ... }`. The frontend HTTP client also tolerates an unwrapped response.
- Use consistent errors, for example `{ "message": "A human-readable explanation", "error": "STABLE_CODE", "details": {} }`. The frontend reads `message`, `error`, and `details`.
- Return `401` for missing/expired authentication, `403` for insufficient permissions, `404` for inaccessible or missing resources, `409` for stale availability or invalid state transitions, and `422` for field/business validation errors.
- Use ISO-8601 timestamps with timezone offsets (prefer UTC instants) and ISO `YYYY-MM-DD` dates. Include the hospital's IANA timezone when returning local appointment slots; do not make the browser's locale or timezone authoritative.
- Paginate list endpoints with `page` (1-based) and `pageSize` (default 20, maximum 100); return `{ "items": [], "page": 1, "pageSize": 20, "total": 0 }` inside `data`.
- Use stable IDs in API relations. Prices should be numeric amounts plus an ISO currency code, not formatted strings such as `"₦8,000"`; the frontend can format amounts for display.

Example error:

```json
{
  "message": "The selected time is no longer available.",
  "error": "SLOT_UNAVAILABLE",
  "details": { "date": "2026-11-12", "slotId": "slot_123" }
}
```

## 4. Required endpoints

### A. Hospital discovery and details

#### `GET /api/v1/hospitals`

Publicly list only hospitals that are approved/visible to patients. Support:

- `q`: case-insensitive search across hospital name, address/location, and service names.
- `serviceId`: filter to hospitals offering the service.
- `page`, `pageSize`.

Return each result with at least:

```json
{
  "id": "hospital_123",
  "name": "Lagoon Care Hospital",
  "verified": true,
  "location": "Victoria Island, Lagos",
  "distanceMeters": null,
  "hoursSummary": "Open today · 8:00 AM–8:00 PM",
  "nextAvailableAt": "2026-11-12T13:30:00+01:00",
  "services": [
    { "id": "service_1", "name": "General consultation" }
  ]
}
```

The current search UI does not collect a patient location. `distanceMeters` may therefore be `null`; do not fabricate a distance. `nextAvailableAt` should be omitted or `null` when no bookable slot is known.

#### `GET /api/v1/hospitals/{hospitalId}`

Return the selected hospital's patient-visible details:

- `id`, `name`, `verified`, description/about, address/location, phone, and public contact email if available.
- Opening hours and IANA timezone.
- Facilities/accessibility information.
- Active services with `id`, name, description if available, `durationMinutes`, `priceAmount`, `currency`, and active status.

The frontend uses these details on the hospital page and needs service IDs for booking. Avoid returning internal verification or administrative fields.

### B. Availability and booking

#### `GET /api/v1/hospitals/{hospitalId}/availability?serviceId={id}&date=YYYY-MM-DD`

Return bookable slots for the requested hospital, service, and local calendar date:

```json
{
  "data": {
    "hospitalId": "hospital_123",
    "serviceId": "service_1",
    "date": "2026-11-12",
    "timeZone": "Africa/Lagos",
    "slots": [
      {
        "id": "slot_123",
        "startsAt": "2026-11-12T09:00:00+01:00",
        "endsAt": "2026-11-12T09:30:00+01:00",
        "doctorId": null
      }
    ]
  }
}
```

Only return slots that are bookable for that date/service under hospital hours, clinician availability, and existing bookings. The current patient booking and reschedule forms display fixed demo times; those choices must be replaced with this response. Booking creation must re-check availability transactionally to prevent two patients from claiming the same slot.

#### `POST /api/v1/appointments`

Create a patient appointment request. The patient is derived from the token. Suggested request:

```json
{
  "hospitalId": "hospital_123",
  "serviceId": "service_1",
  "slotId": "slot_123",
  "reason": "Recurring headaches and fatigue"
}
```

Require a valid hospital, active service, available slot, and reason (the current UI requires at least 10 characters). Return `201` with the created appointment, including its stable ID, initial `pending` status, requested date/time, and initial workflow history entry. Do not require or set a payment status.

### C. Appointment lists, details, and workflow

The UI has patient and hospital appointment queues, appointment details, status filters, and these status values: `pending`, `confirmed`, `reschedule_requested`, `rejected`, `cancelled`, and `completed`.

#### `GET /api/v1/appointments`

Return appointments scoped to the authenticated role: a patient's own appointments or the signed-in hospital's appointments. Support `status` (one or more status values), `page`, and `pageSize`. The current tabs can continue filtering locally, but server-side status filtering is useful for large queues. Do not permit a caller to expand their scope by supplying another user's ID.

Each item needs at least:

- `id`, `hospitalId`, hospital name, `patientId`, patient display name and email.
- `serviceId`, service name, `date`, `startsAt`/displayable local time, `status`, `reason`, and assigned doctor (or `null`/unassigned).
- `createdAt` and the latest workflow update.

Return only fields required by the authorized view. The hospital UI currently displays patient name/email and visit reason; protect these health-related details from other patients and hospitals.

#### `GET /api/v1/appointments/{appointmentId}`

Return the same appointment details plus its chronological workflow history for the detail-page timeline. A history entry should identify the state/action, timestamp, and actor label/type. This history is not a notification, message, or communication-delivery feed. Restrict access to the appointment's patient and owning hospital.

#### `POST /api/v1/appointments/{appointmentId}/assign-doctor`

Hospital-only. Request:

```json
{ "doctorId": "doctor_123" }
```

Validate that the doctor belongs to the hospital and is eligible for the appointment's service/time. On success, assign the clinician and transition an eligible pending request to `confirmed`; return the updated appointment. Reject stale or invalid transitions with `409`.

#### `PATCH /api/v1/appointments/{appointmentId}/status`

Hospital-only for decisions not covered by assignment. Accept only allowed transitions, currently at least:

```json
{ "status": "rejected", "reason": "Optional explanation" }
```

Also support marking an eligible confirmed appointment `completed`, if that action is made available in the hospital UI. Never allow arbitrary status assignment; validate transitions and record them in workflow history.

#### `PATCH /api/v1/appointments/{appointmentId}/reschedule`

Support a patient requesting a new date/time and a hospital proposing a new date/time. Request:

```json
{
  "slotId": "slot_456",
  "reason": "Schedule conflict"
}
```

`reason` is optional; the authenticated role determines whether this is a patient request or a hospital proposal. Check that the actor is a participant, the appointment is in a reschedulable state, and the proposed slot is available. Return the updated appointment with `reschedule_requested` and the proposed time represented separately from the currently confirmed time until the change is accepted.

The current screens do not provide a patient accept/reject control for a hospital-proposed time. If proposals must be explicitly approved, add that frontend action and a corresponding decision endpoint before treating the reschedule workflow as complete. Do not silently move a confirmed appointment merely because a proposal was created.

#### `POST /api/v1/appointments/{appointmentId}/reschedule-decision`

Patient-only, for a hospital-proposed time. Request:

```json
{ "decision": "accept" }
```

Accept `accept` or `reject`. On acceptance, apply the proposed slot and retain the appointment's confirmed state; on rejection, keep the existing appointment time/state. Record the decision in workflow history and return the updated appointment. This endpoint requires a matching patient-facing control in the frontend.

#### `POST /api/v1/appointments/{appointmentId}/cancel`

Patient-only in the current UI. Accept a cancellation reason (the current form requires one), validate that the appointment is cancellable, transition to `cancelled`, and return the updated appointment. Record the action in workflow history. Cancellation must not call or depend on payment or notification APIs.

### D. Hospital dashboard and patients

#### `GET /api/v1/dashboard/hospital/summary`

Hospital-only. Return counts for `pending`, `confirmed`, `reschedule_requested`, and `completed`, plus the recent/attention appointments needed for the dashboard's “Needs attention” list. Scope all counts and rows to the signed-in hospital. This avoids downloading the entire queue just to calculate summary totals.

Example:

```json
{
  "data": {
    "counts": {
      "pending": 4,
      "confirmed": 12,
      "reschedule_requested": 1,
      "completed": 38
    },
    "needsAttention": []
  }
}
```

#### `GET /api/v1/hospitals/me/patients`

Hospital-only. List patients who have appointments with the signed-in hospital, with pagination and optional `q` search. Return only the fields needed by the current “Patients with appointments” screen: patient ID, display name, email, most recent appointment summary, and optionally appointment count. This is not a medical-records endpoint; no medical record UI exists in the current frontend.

### E. Clinicians, services, and hospital settings

#### `GET /api/v1/hospitals/me/doctors`

Hospital-only. Return the hospital's clinicians with ID, display name, specialty, and availability suitable for the appointment-assignment screen. Accept optional `serviceId`, `date`, and `slotId` filters so the list can show only clinicians eligible for the selected appointment.

#### `PATCH /api/v1/hospitals/me/doctors/{doctorId}`

Hospital-only. Update clinician availability used by assignment and slot generation. Suggested request:

```json
{
  "timeZone": "Africa/Lagos",
  "weeklyAvailability": [
    { "dayOfWeek": "monday", "startTime": "09:00", "endTime": "17:00" }
  ],
  "isActive": true
}
```

Validate the clinician belongs to this hospital and return the saved clinician. The current team screen only exposes an “Edit availability” control; adding and removing clinicians would require additional UI work and is not required by the existing behavior.

#### `GET /api/v1/hospitals/me/services`

Hospital-only. List the signed-in hospital's services and their duration, price/currency, and active state. Patients only see active/published services.

#### `POST /api/v1/hospitals/me/services`

Hospital-only. Create a service with at least a name, duration in minutes, price amount, currency, and active/published state:

```json
{
  "name": "General consultation",
  "durationMinutes": 30,
  "priceAmount": 8000,
  "currency": "NGN",
  "isActive": true
}
```

Return the created service. The current screen displays an “Add service” control but has no form or submit handler yet; frontend implementation is also required to use this endpoint.

#### `PATCH /api/v1/hospitals/me/services/{serviceId}`

Hospital-only. Accept the editable service fields from the create request, validate them, and return the saved service. Update service details or deactivate a service; do not delete a service that is referenced by existing appointments. Retain the historical service name/price snapshot on those appointments.

#### `GET /api/v1/hospitals/me`

Hospital-only. Return the signed-in hospital's editable profile and settings: `id`, `name`, `description`, `email`, `phone`, address/location, `timeZone`, facilities, and weekly opening hours. Include the same service summary needed by the facility profile view if convenient, or load it from `/hospitals/me/services`.

#### `PATCH /api/v1/hospitals/me`

Hospital-only. Accept and persist the editable facility fields currently shown in the profile form: `name`, `description`, contact `email`, `phone`, and `address`/location where supported. Include opening hours in this operation or expose an equivalent settings update within this hospital resource; the current services screen displays weekly opening hours but does not yet provide an edit form. Return the saved profile.

### F. Profiles

#### `GET /api/v1/patients/me`

Patient-only. Return the authenticated patient's profile for the profile page, including `id`, first name, last name, email, phone, and date of birth if collected. The UI currently displays a date of birth but does not collect or edit it; do not invent or return demo values.

#### `PATCH /api/v1/patients/me`

Patient-only. Accept first name, last name, email (if account email changes are supported), and phone as submitted by the profile edit form. Validate and return the saved profile. If changing email requires verification, expose that existing auth verification flow rather than reporting an unverified change as complete.

`GET /api/v1/hospitals/me` and `PATCH /api/v1/hospitals/me` serve the hospital profile; do not duplicate them as a second facility profile API.

## 5. Frontend work required alongside the APIs

The backend endpoints alone will not make the current screens live. The frontend still needs to:

1. Add feature service modules that call these routes through the shared `apiClient`, then replace imports of mock hospitals/doctors/appointments and local mutation handlers.
2. Load hospitals, details, availability, appointment queues/details, profiles, and dashboard data with loading, empty, retry, and error states.
3. Replace fixed appointment date/time defaults and fixed booking slots with real availability. The current default booking date is hard-coded and must not be used as live availability.
4. Wire the hospital “Add service” and “Edit availability” controls to forms and mutations; currently these controls do not submit changes.
5. Add explicit accept/reject behavior for a hospital-proposed reschedule if the intended workflow requires patient approval.
6. Remove demo profile values and the demo notification preferences; notification preferences are outside this handoff's scope.

Static pages (landing, about, FAQ, and legal copy) do not need backend endpoints in their current implementation. The contact form is local/demo-only and is intentionally excluded as support-ticket functionality.

## 6. Suggested implementation order

1. Hospital list/detail and service catalog.
2. Availability and appointment creation.
3. Appointment list/detail and hospital assignment/decision/cancel/reschedule actions.
4. Hospital dashboard summary and appointment-linked patient list.
5. Patient and hospital profile updates, clinician availability, and hospital settings.

This order follows the UI dependencies: booking needs published hospital/service data and live slots; appointment operations need the resulting appointment; dashboard and profile pages can then use authenticated domain data.
