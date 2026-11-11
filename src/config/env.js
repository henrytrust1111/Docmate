const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

if (!configuredApiBaseUrl && import.meta.env.PROD) {
  throw new Error("VITE_API_BASE_URL must be configured for production builds.");
}

export const config = Object.freeze({
  apiBaseUrl: (configuredApiBaseUrl || "http://localhost:3000").replace(/\/+$/, ""),
});
