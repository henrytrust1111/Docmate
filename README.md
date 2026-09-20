# DocMate frontend

A frontend-first healthcare appointment prototype for patients and partner hospitals. It uses local mock data so core journeys can be reviewed before backend integration.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run build
npm run lint
```

## Demo journeys

- Patient: use the prefilled demo credentials, find a hospital, request an appointment, then view, reschedule, or cancel it.
- Hospital: use the prefilled demo credentials, review requests, assign a clinician, confirm an appointment, and manage facility content.
- Hospital discovery includes a Demo state control for loading, error, and offline views.

No real account, appointment, payment, or medical record is created.

## Routes

- Public: `/`, `/about`, `/faq`, `/contact`, and legal/safety pages.
- Authentication: `/auth/patient/*`, `/auth/hospital/*`, and shared password recovery.
- Patient: `/patient/hospitals`, `/patient/appointments`, and `/patient/profile`.
- Hospital: `/hospital/dashboard`, appointments, patients, team, services, and profile.

Hash routing is used for static-host compatibility.

## Frontend data boundary

- `src/frontend/mockData.js` contains fixtures.
- `src/frontend/AppState.jsx` owns demo sessions and appointment mutations.
- Pages update frontend state rather than calling a backend.

For backend integration, preserve page-facing actions and replace the state implementation with feature services/API adapters.

## Deferred surfaces

Pharmacy, blog, AI assistance, realtime chat, generic pricing, and demo payments are intentionally excluded until the core appointment product is stable.
