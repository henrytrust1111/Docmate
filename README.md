# DocMate frontend

DocMate is a React healthcare appointment frontend for patients and partner hospitals. Authentication uses the backend API; appointment, hospital, doctor, and facility data are still demo fixtures because those APIs are not implemented.

## Run locally

```bash
npm install
npm run dev
npm run lint
npm run build
```

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to the backend origin. It defaults to `http://localhost:3000` in development. Production initialization requires the variable to be set. Do not put secrets in Vite environment variables; they are public in the built client. The backend must allow the frontend's origin through CORS.

## Project structure

```text
src/
  app/                 Application entry, providers, route tree, layouts
  config/              Environment-backed configuration
  features/
    appointments/      Appointment pages, demo state data, display constants
    auth/              Authentication pages and auth service
    content/           About, FAQ, contact, legal pages and content data
    hospital/          Hospital dashboard and facility management
    hospitals/         Hospital directory data and helpers
    landing/           Landing page assembled from independent sections
    patient/           Patient hospital, booking, and profile pages
  services/
    api/               Axios client and centralized interceptors
    storage/           Access and refresh token persistence
  shared/ui/common/    Reusable form, layout, status, and empty-state components
  styles/              Design tokens and global/application styles
```

### Application flow

- `src/main.jsx` loads the global tokens and styles.
- `src/app/App.jsx` installs `AppStateProvider` and the centralized router.
- `src/app/router.jsx` defines public, authentication, patient, hospital, and fallback routes.
- Feature pages depend on shared UI components and feature services; they do not call HTTP directly.
- `src/app/providers/AppStateProvider.jsx` coordinates the authenticated session and the appointment prototype state.

## API and authentication

`src/services/api/apiClient.js` is the only HTTP client. It reads the base URL from `src/config/env.js`, attaches the bearer access token, normalizes errors, and refreshes an expired access token through the existing `/api/v1/auth/refresh-token` route. Concurrent refresh attempts share one request, and a retried request cannot loop indefinitely.

Authentication endpoints live in `src/features/auth/services/authService.js`. Access and refresh tokens are stored in `sessionStorage` and cleared on logout or an expired session. `src/services/healthService.js` exposes the backend health check.

Implemented API flows: patient and hospital registration, login, current-user lookup, token refresh, logout, email verification, forgot password, and reset password. Email delivery is not configured; non-production responses may include test tokens.

The backend currently has no appointment booking, hospital search, availability, doctor search, or hospital-management APIs. Those screens remain local demo flows. Do not enter real medical information.

## Design tokens

`src/styles/tokens.css` is the single source for the existing DocMate palette, font families and weights, spacing, radii, shadows, and common typography sizes. Update a token there to apply it throughout the app. Responsive breakpoints remain in CSS media queries because CSS custom properties are not supported as media-query values by browsers.

## Extending the application

### Add a feature

Create `src/features/<feature>/` with only the folders needed for its pages, components, hooks, data, and services. Put endpoint-specific operations in that feature's `services/` module, using `apiClient`; keep HTTP calls out of components. Add its route in `src/app/router.jsx` and shared UI only when it has a genuinely reusable responsibility.

### Add a landing section

Create an independent section component in `src/features/landing/components/` and assemble it in `src/features/landing/pages/LandingPage.jsx`. Reuse the global styles and shared tokens rather than adding one-off color values.

## Routes

- Public: `/`, `/about`, `/faq`, `/contact`, and legal/safety pages.
- Authentication: `/auth/patient/*`, `/auth/hospital/*`, and shared password recovery.
- Patient: `/patient/hospitals`, `/patient/appointments`, and `/patient/profile`.
- Hospital: `/hospital/dashboard`, appointments, patients, team, services, and profile.

Hash routing is used for static-host compatibility.
