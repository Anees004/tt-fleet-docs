/**
 * Screenshot highlight regions as % of the image box (0–100).
 * Calibrated against 1320×2868 device screenshots with a % grid.
 * Key: `${guideId}` or `${guideId}/${pointId}`
 * A guide overview may use several rectangles (array).
 */
export type HighlightBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  /** Prefer this label placement (multi-highlights especially). */
  side?: "above" | "below" | "left" | "right" | "inside";
};

export type HighlightDef = HighlightBox | readonly HighlightBox[];

function asList(def: HighlightDef | null | undefined): HighlightBox[] {
  if (!def) return [];
  if ("x" in def) return [def];
  return [...def];
}

export const HIGHLIGHTS: Record<string, HighlightDef> = {
  /* ---------- Sign in (login.png / theme / language shots) ---------- */
  "sign-in": { x: 6, y: 54, w: 88, h: 26, label: "Sign in form" },
  "sign-in/email-password": { x: 6, y: 54, w: 88, h: 15, label: "Email & password" },
  /* theme_change_login.png — control + open menu */
  "sign-in/theme-on-login": { x: 4, y: 6.2, w: 30, h: 17.5, label: "Theme" },
  /* language_change_on_login.png — control + open menu */
  "sign-in/language-on-login": { x: 64, y: 6.2, w: 32, h: 16.5, label: "Language" },
  "sign-in/forgot-link": { x: 58, y: 69, w: 36, h: 3.2, label: "Forgot password?" },

  /* ---------- Forgot password ---------- */
  "forgot-password": { x: 6, y: 54, w: 88, h: 42, label: "Email + Send code" },
  "forgot-password/step-one": { x: 6, y: 54, w: 88, h: 7, label: "Fleet email" },
  /* otp.png — 6-digit boxes (~48.7–55%) */
  "forgot-password/step-two": { x: 7, y: 48.5, w: 86, h: 6.8, label: "Email OTP" },
  /* reset_password.png — Password + Confirm (~35.8–49.1%) */
  "forgot-password/step-three": { x: 6, y: 35.5, w: 88, h: 14, label: "New password" },
  "forgot-password/back-to-sign-in": { x: 2, y: 6.5, w: 11, h: 4, label: "Back" },

  /* ---------- Home default (dh-sim-booted.png) — overview uses several boxes ---------- */
  "home-dashboard": [
    { x: 86, y: 7.2, w: 11, h: 4.8, label: "Notifications", side: "left" },
    { x: 4, y: 12.5, w: 92, h: 16.5, label: "Fleet Status", side: "left" },
    { x: 4, y: 30.5, w: 92, h: 33, label: "Performance", side: "inside" },
    { x: 4, y: 64.5, w: 92, h: 22, label: "Charts", side: "inside" },
    { x: 1, y: 91, w: 98, h: 8, label: "Bottom menu", side: "above" },
  ],
  "home-dashboard/fleet-status": { x: 4, y: 12.5, w: 92, h: 16.5, label: "Fleet Status" },
  "home-dashboard/kpi-cards": { x: 4, y: 39, w: 92, h: 24, label: "KPI cards" },
  "home-dashboard/period-default": { x: 4, y: 31.5, w: 92, h: 6.5, label: "Performance period" },
  "home-dashboard/period-presets": { x: 4, y: 31.5, w: 62, h: 6.5, label: "Presets" },
  /* Custom chip on dh; period-custom point may use home.png (one-day) — see override below via image map */
  "home-dashboard/period-custom": { x: 64, y: 31.5, w: 30, h: 6.5, label: "Custom" },
  "home-dashboard/hourly-charts": { x: 4, y: 64.5, w: 92, h: 22, label: "Earnings chart" },
  "home-dashboard/online-entry": { x: 4, y: 12.5, w: 92, h: 16.5, label: "Online / Offline" },
  "home-dashboard/notifications": { x: 86, y: 7.2, w: 11, h: 4.8, label: "Notifications" },
  "home-dashboard/bottom-menu": { x: 1, y: 91, w: 98, h: 8, label: "Bottom menu" },

  /* ---------- Online drivers ---------- */
  "online-drivers": { x: 4, y: 17.5, w: 92, h: 70, label: "" },
  "online-drivers/online-list": { x: 4, y: 17.5, w: 92, h: 70, label: "" },
  "online-drivers/search-online": { x: 5, y: 14.2, w: 90, h: 5.5, label: "Search" },

  /* ---------- Driver profile (each point uses its own scrolled screenshot) ---------- */
  // "driver-profile": { x: 3, y: 48.5, w: 94, h: 38, label: "Performance cards" },
  "driver-profile/records": { x: 3, y: 48.5, w: 94, h: 38, label: "Rides & money" },
  /* driver-detail.png — Deactivate + Remove (above Quality Score cards) */
  "driver-profile/activate-deactivate": {
    x: 6,
    y: 27,
    w: 88,
    h: 17,
    label: "Deactivate / Remove",
    side: "above",
  },
  /* driver-vehicles.png — Vehicle Assignment block */
  "driver-profile/vehicles-assign": {
    x: 4,
    y: 34,
    w: 92,
    h: 52,
    label: "Assign / Unassign",
    side: "above",
  },
  /* driver-documents.png — Documents + Replace */
  "driver-profile/documents": {
    x: 3,
    y: 28,
    w: 94,
    h: 68,
    label: "Documents",
    side: "above",
  },

  /* ---------- Live map ---------- */
  "live-map": { x: 0, y: 12, w: 100, h: 70, label: "Live map" },
  "live-map/search-driver": { x: 7.5, y: 6.5, w: 92, h: 7, label: "Search drivers" },

  /* ---------- Menu / drawer ---------- */
  "menu": { x: 2, y: 7.5, w: 10, h: 4.5, label: "Menu", side: "below" },
  /* Open drawer shot — destinations list */
  "menu/hamburger": { x: 0, y: 12, w: 78, h: 70, label: "Side menu", side: "inside" },
  "menu/vs-tabs": { x: 1, y: 91, w: 98, h: 8, label: "Bottom tabs", side: "above" },

  /* ---------- Drivers ---------- */
  "drivers": { x: 4, y: 14, w: 92, h: 60, label: "Drivers list" },
  "drivers/search-filter": { x: 3, y: 13.2, w: 94, h: 9.5, label: "Search & chips", side: "below" },
  "drivers/long-press": { x: 4, y: 22, w: 92, h: 40, label: "Select drivers" },
  "drivers/multi-select": { x: 4, y: 8, w: 92, h: 12, label: "Multi-select" },
  "drivers/add-driver": { x: 82, y: 81.5, w: 16, h: 7, label: "Add (+)" },

  /* ---------- Vehicles ---------- */
  "vehicles": { x: 4, y: 14, w: 92, h: 55, label: "Vehicles" },
  "vehicles/status-chips": { x: 4, y: 18, w: 92, h: 8, label: "Status chips" },
  "vehicles/vehicle-cards": { x: 4, y: 18, w: 92, h: 45, label: "Vehicle cards" },
  /* edit_vehicle.png — name/Dispatchable + Active toggle */
  "vehicles/edit-status": [
    { x: 5, y: 35, w: 90, h: 56, label: "Edit Vehicle Details", side: "above" },
    { x: 5, y: 22.5, w: 90, h: 7, label: "Active / Inactive", side: "above" },
  ],
  /* edit_vehicle_delete_documentadd.png — docs + delete */
  "vehicles/edit-docs-delete": [
    { x: 4, y: 9.5, w: 92, h: 72, label: "Add/replace docs", side: "above" },
    { x: 2, y: 91.5, w: 95, h: 6, label: "Delete vehicle", side: "above" },
  ],
  "vehicles/add-vehicle": { x: 82, y: 81.5, w: 16, h: 7, label: "Add (+)" },

  /* ---------- Greeters ---------- */
  /* ---------- Greeters ---------- */
  "greeters": { x: 4, y: 22, w: 92, h: 55, label: "Greeter cards" },
  "greeters/when-needed": { x: 4, y: 22, w: 92, h: 55, label: "Greeter list" },
  /* Edit (pencil) + Deactivate on a managed greeter card */
  "greeters/edit-deactivate": [
    { x: 82, y: 34, w: 14, h: 5, label: "Edit", side: "left" },
    { x: 82, y: 39.5, w: 14, h: 5, label: "Deactivate", side: "left" },
  ],
  "greeters/assign-link": { x: 4, y: 22, w: 92, h: 55, label: "Greeters" },

  /* ---------- Bookings ---------- */
  "bookings-list": { x: 4, y: 14, w: 92, h: 55, label: "Bookings list" },
  "bookings-list/status-chips": { x: 4, y: 18, w: 92, h: 8, label: "Status chips" },
  "bookings-list/booking-cards": { x: 4, y: 18, w: 92, h: 45, label: "Booking cards" },
  "bookings-list/export": { x: 84, y: 18, w: 16, h: 6, label: "Export" ,side: "left" },

  /* ---------- Accept & assign (prebook_accept_reject.png + assign_driver_greeter.png) ---------- */
  "accept-assign": [
    { x: 5, y: 50.5, w: 44, h: 5.5, label: "Accept", side: "above" },
    { x: 51, y: 50.5, w: 44, h: 5.5, label: "Reject", side: "above" },
  ],
  "accept-assign/accept-before-assign": [
    { x: 5, y: 50.5, w: 44, h: 5.5, label: "Accept", side: "above" },
    { x: 48, y: 60.5, w: 46, h: 4, label: "Pending", side: "below" },
  ],
  "accept-assign/fleet-income": {
    x: 5,
    y: 27.5,
    w: 90,
    h: 14,
    label: "Fleet income",
    side: "above",
  },
  "accept-assign/reject": { x: 51, y: 50.5, w: 44, h: 5.5, label: "Reject", side: "above" },
  "accept-assign/assign-people": [
    { x: 62, y: 41.5, w: 32, h: 5.5, label: "Driver Assign", side: "left" },
    { x: 62, y: 51.5, w: 32, h: 5.5, label: "Greeter Assign", side: "left" },
  ],

  /* ---------- Ride hailing (ride_hailing_tab.png) ---------- */
  "ride-hailing": [
    { x: 50, y: 12, w: 46, h: 5, label: "Ride Hailing", side: "below" },
    { x: 4, y: 24, w: 92, h: 55, label: "Hailing jobs", side: "inside" },
  ],
  "ride-hailing/tab-switch": [
    { x: 4, y: 12, w: 46, h: 5, label: "Pre-booked", side: "below" },
    { x: 50, y: 12, w: 46, h: 5, label: "Ride Hailing", side: "below" },
  ],

  /* ---------- Date filter ---------- */
  "date-filter": { x: 6, y: 60, w: 88, h: 35, label: "Date filter" },
  "date-filter/funnel-icon": { x: 72, y: 18, w: 14, h: 6, label: "Funnel" },
  "date-filter/presets": { x: 6, y: 60, w: 88, h: 35, label: "Presets" },

  /* ---------- More screens ---------- */
  /* ---------- Calendar (fleet_calendar.png) — multi-highlight overview ---------- */
  "calendar": [
    { x: 4, y: 12, w: 92, h: 8.5, label: "Month summary", side: "above" },
    // { x: 4, y: 19.5, w: 92, h: 5, label: "All / Pre-booked / Hailing", side: "below" },
    { x: 4, y: 25.5, w: 92, h: 35, label: "Heat map", side: "inside" },
    { x: 4, y: 61.5, w: 92, h: 9, label: "Quieter → Busier", side: "left" },
    { x: 4, y: 73.5, w: 92, h: 10, label: "Day + List / By hour", side: "left" },
    { x: 4, y: 84.5, w: 92, h: 6, label: "Hourly bars", side: "above" },
    { x: 4, y: 93.5, w: 92, h: 6.5, label: "Job card", side: "above" },
  ],
  "calendar/month-summary": {
    x: 4,
    y: 13,
    w: 92,
    h: 8.5,
    label: "Rides · drivers · Today",
    side: "above",
  },
  "calendar/type-tabs": {
    x: 3,
    y: 21.5,
    w: 94,
    h: 5,
    label: "Filter by type",
    side: "below",
  },
  "calendar/busy-slots": [
    { x: 4, y: 25.5, w: 92, h: 35, label: "Busy days", side: "inside" },
    { x: 4, y: 61.5, w: 92, h: 9, label: "Quieter → Busier", side: "left" },
  ],
  "calendar/day-detail": [
    { x: 4, y: 74.5, w: 92, h: 10, label: "Day + List / By hour", side: "left" },
    { x: 4, y: 84.5, w: 92, h: 6, label: "Hourly bars", side: "above" },
    { x: 4, y: 91.5, w: 92, h: 6.5, label: "Job card", side: "above" },
  ],
  /* legacy */
  "calendar/vs-list": [
    { x: 4, y: 73.5, w: 92, h: 10, label: "Day detail", side: "left" },
    { x: 4, y: 91.5, w: 92, h: 6.5, label: "Job card", side: "above" },
  ],
  /* ---------- Documents hub (All / Driver / Vehicle) ---------- */
  "documents": [
    { x: 4, y: 13, w: 92, h: 6, label: "Doc type tabs", side: "above" },
    { x: 4, y: 19.5, w: 92, h: 5, label: "Status filters", side: "below" },
  ],
  "documents/hub": [
    { x: 4, y: 14, w: 92, h: 6, label: "All / Driver / Vehicle", side: "above" },
    { x: 4, y: 24, w: 92, h: 55, label: "Document cards", side: "inside" },
  ],
  "documents/status-filters": [
    { x: 4, y: 14.5, w: 92, h: 5, label: "Pending / Approved / Rejected", side: "below" },
    { x: 70, y: 28, w: 26, h: 5, label: "Status badge", side: "left" },
  ],
  "documents/card-actions": [
    { x: 4, y: 26, w: 92, h: 14, label: "Document card", side: "left" },
    { x: 68, y: 34, w: 28, h: 5, label: "View / Download / Remove", side: "left" },
  ],
  "documents/where-upload": [
    { x: 4, y: 9.5, w: 92, h: 72, label: "Upload / Replace", side: "inside" },
    { x: 5, y: 91.5, w: 90, h: 5, label: "Delete vehicle", side: "above" },
  ],
  /* legacy keys if linked elsewhere */
  "documents/what-belongs": [
    { x: 4, y: 8, w: 92, h: 6, label: "Doc type tabs", side: "left" },
    { x: 4, y: 14.5, w: 92, h: 5, label: "Status filters", side: "left" },
  ],
  "documents/vehicle-docs": [
    { x: 4, y: 8, w: 92, h: 6, label: "Vehicle Docs tab", side: "left" },
    { x: 4, y: 22, w: 92, h: 55, label: "Vehicle document cards", side: "inside" },
  ],
  "documents/keep-current": [
    { x: 4, y: 14.5, w: 92, h: 5, label: "Status filters", side: "below" },
  ],
  /* ---------- Performance (performance_screen.png) ---------- */
  "performance": [
    { x: 3, y: 13.8, w: 94, h: 4.2, label: "Period", side: "above" },
    { x: 3, y: 19.2, w: 46, h: 12.5, label: "Earnings", side: "right" },
    { x: 51, y: 19.2, w: 46, h: 12.5, label: "Trips", side: "left" },
    { x: 3, y: 32.8, w: 46, h: 12.5, label: "Acceptance", side: "right" },
    { x: 51, y: 32.8, w: 46, h: 12.5, label: "Cancellation", side: "left" },
    { x: 6, y: 52.5, w: 88, h: 4.5, label: "Search", side: "above" },
    { x: 3, y: 58, w: 94, h: 39, label: "Drivers", side: "inside" },
  ],
  "performance/period": {
    x: 3,
    y: 13.8,
    w: 94,
    h: 4.2,
    label: "Period chips",
    side: "below",
  },
  "performance/kpi-cards": [
    { x: 3, y: 19.2, w: 46, h: 12.5, label: "Earnings", side: "right" },
    { x: 51, y: 19.2, w: 46, h: 12.5, label: "Trips", side: "left" },
    { x: 3, y: 32.8, w: 46, h: 12.5, label: "Acceptance", side: "right" },
    { x: 51, y: 32.8, w: 46, h: 12.5, label: "Cancellation", side: "left" },
  ],
  "performance/driver-list": [
    { x: 6, y: 52.5, w: 88, h: 4.5, label: "Search driver", side: "below" },
    { x: 3, y: 58, w: 94, h: 39, label: "Driver rows", side: "inside" },
  ],
  /* legacy keys if linked elsewhere */
  "performance/vs-home": [
    { x: 3, y: 19.2, w: 46, h: 12.5, label: "Earnings", side: "right" },
    { x: 51, y: 19.2, w: 46, h: 12.5, label: "Trips", side: "left" },
    { x: 3, y: 32.8, w: 46, h: 12.5, label: "Acceptance", side: "right" },
    { x: 51, y: 32.8, w: 46, h: 12.5, label: "Cancellation", side: "left" },
  ],
  /* ---------- Earnings (earning.png) ---------- */
  "earnings": [
    { x: 78, y: 6.8, w: 10, h: 4.2, label: "Download", side: "left" },
    { x: 4, y: 11.5, w: 92, h: 19, label: "Period Filter", side: "left" },
    { x: 4, y: 31.5, w: 92, h: 24, label: "End Balance", side: "inside" },
    { x: 6, y: 58.5, w: 88, h: 6.5, label: "Search driver", side: "below" },
    { x: 4, y: 65.5, w: 92, h: 22, label: "Driver card", side: "inside" },
    { x: 10, y: 83, w: 80, h: 4.2, label: "View statement", side: "above" },
  ],
  "earnings/period-filter": {
    x: 4,
    y: 11.5,
    w: 92,
    h: 19,
    label: "Period · Filter · Reset",
    side: "above",
  },
  "earnings/end-balance": {
    x: 4,
    y: 31.5,
    w: 92,
    h: 24,
    label: "End Balance",
    side: "above",
  },
  "earnings/driver-earnings": [
    { x: 6, y: 58.5, w: 88, h: 6.5, label: "Search driver", side: "below" },
    { x: 4, y: 65.5, w: 92, h: 22, label: "Rides · Gross · Payout · Net", side: "inside" },
    { x: 10, y: 83, w: 80, h: 4.2, label: "View statement", side: "above" },
    { x: 78, y: 6.8, w: 10, h: 4.2, label: "Download", side: "left" },
  ],
  /* legacy keys */
  "earnings/period-totals": {
    x: 4,
    y: 31.5,
    w: 92,
    h: 24,
    label: "End Balance",
    side: "above",
  },
  "earnings/vs-booking-income": {
    x: 4,
    y: 31.5,
    w: 92,
    h: 24,
    label: "End Balance",
    side: "above",
  },
  /* ---------- Reports (reports.png + reports_dialogue.png) ---------- */
  "reports": [
    { x: 4, y: 16, w: 92, h: 8.5, label: "Driver activity", side: "left" },
    { x: 4, y: 25, w: 92, h: 8, label: "Driver earnings", side: "left" },
    { x: 4, y: 33.5, w: 92, h: 8, label: "Trip summary", side: "left" },
    { x: 4, y: 45, w: 92, h: 11, label: "FROM / TO", side: "left" },
    { x: 4, y: 88.5, w: 92, h: 5.5, label: "Generate & Download", side: "above" },
  ],
  "reports/report-type": [
    { x: 4, y: 16, w: 92, h: 8.5, label: "Driver activity", side: "left" },
    { x: 4, y: 25, w: 92, h: 8, label: "Driver earnings", side: "left" },
    { x: 4, y: 33.5, w: 92, h: 8, label: "Trip summary", side: "left" },
  ],
  "reports/date-range": {
    x: 4,
    y: 45,
    w: 92,
    h: 11,
    label: "FROM / TO",
    side: "above",
  },
  "reports/generate-download": [
    { x: 10, y: 34, w: 80, h: 28, label: "Confirm download", side: "inside" },
    { x: 14, y: 50, w: 50, h: 3.5, label: "Don't ask again", side: "below" },
    { x: 14, y: 57.5, w: 34, h: 4.5, label: "Cancel", side: "above" },
    { x: 52, y: 57.5, w: 34, h: 4.5, label: "Download", side: "above" },
  ],
  /* legacy */
  "reports/match-filters": {
    x: 4,
    y: 45,
    w: 92,
    h: 11,
    label: "FROM / TO",
    side: "above",
  },
  "reports/handoff": [
    { x: 10, y: 34, w: 80, h: 28, label: "Confirm download", side: "inside" },
    { x: 52, y: 57.5, w: 34, h: 4.5, label: "Download", side: "above" },
  ],
  /* ---------- Settings (settings2.png + theme_language_change.png) ---------- */
  "settings": [
    { x: 4, y: 14, w: 92, h: 5.5, label: "Fleet Information", side: "left" },
    { x: 4, y: 20, w: 92, h: 5.5, label: "Profile", side: "left" },
    { x: 4, y: 26, w: 92, h: 5.5, label: "Change Password", side: "left" },
    { x: 4, y: 36, w: 92, h: 5.5, label: "Language & Appearance", side: "left" },
    { x: 4, y: 46, w: 92, h: 5.5, label: "Privacy", side: "left" },
    { x: 4, y: 52, w: 92, h: 5.5, label: "Recent Activity", side: "left" },
    { x: 4, y: 60.5, w: 92, h: 4.8, label: "Sign Out", side: "above" },
    { x: 4, y: 66, w: 92, h: 5.2, label: "Delete Account", side: "above" },
  ],
  "settings/fleet-information": {
    x: 4,
    y: 14,
    w: 92,
    h: 5.5,
    label: "Fleet Information",
    side: "below",
  },
  "settings/profile": { x: 4, y: 20, w: 92, h: 5.5, label: "Profile", side: "below" },
  "settings/change-password": {
    x: 4,
    y: 26,
    w: 92,
    h: 5.5,
    label: "Change Password",
    side: "below",
  },
  "settings/language-appearance": [
    { x: 4, y: 11, w: 92, h: 7, label: "Theme", side: "left" },
    { x: 4, y: 19, w: 92, h: 7, label: "Language", side: "left" },
  ],
  "settings/privacy": { x: 4, y: 46, w: 92, h: 5.5, label: "Privacy", side: "below" },
  "settings/recent-activity": {
    x: 4,
    y: 52,
    w: 92,
    h: 5.5,
    label: "Recent Activity",
    side: "below",
  },
  "settings/sign-out": { x: 4, y: 60.5, w: 92, h: 4.8, label: "Sign Out", side: "above" },
  "settings/delete-account": {
    x: 4,
    y: 66,
    w: 92,
    h: 5.2,
    label: "Delete Account",
    side: "above",
  },
  /* legacy */
  "settings/who-changes": [
    { x: 4, y: 14, w: 92, h: 5.5, label: "Fleet Information", side: "left" },
    { x: 4, y: 60.5, w: 92, h: 4.8, label: "Sign Out", side: "above" },
  ],
  "settings/after-change": {
    x: 4,
    y: 36,
    w: 92,
    h: 5.5,
    label: "Language & Appearance",
    side: "below",
  },
};

/** When the same point uses a different screenshot, override by image basename. */
export const HIGHLIGHTS_BY_IMAGE: Record<string, HighlightDef> = {
  /* period-custom on home.png = one-day result, not the Custom chip */
  "home.png::home-dashboard/period-custom": {
    x: 4,
    y: 11,
    w: 92,
    h: 26,
    label: "Custom day result",
  },
  /* Closed theme/language pills on plain login.png (if ever used) */
  "login.png::sign-in/theme-on-login": { x: 4, y: 6.5, w: 26, h: 4, label: "Theme" },
  "login.png::sign-in/language-on-login": { x: 70, y: 6.5, w: 24, h: 4, label: "Language" },
  /* Menu: Home hero vs open-drawer hamburger point */
  "dh-sim-booted.png::menu": {
    x: 2,
    y: 7.5,
    w: 10,
    h: 4.5,
    label: "Menu",
    side: "below",
  },
  "dh-sim-booted.png::menu/vs-tabs": {
    x: 1,
    y: 91,
    w: 98,
    h: 8,
    label: "Bottom tabs",
    side: "above",
  },
  "drawer.png::menu/hamburger": {
    x: 0,
    y: 12,
    w: 78,
    h: 70,
    label: "Side menu",
    side: "above",
  },
  "documents-hub.png::documents/status-filters": [
    { x: 4, y: 19.5, w: 92, h: 5, label: "Pending / Approved / Rejected", side: "above" },
    // { x: 70, y: 28, w: 26, h: 5, label: "Rejected / Approved", side: "left" },
  ],
  "edit_vehicle_delete_documentadd.png::documents/where-upload": [
    { x: 4, y: 9.5, w: 92, h: 72, label: "Upload / Replace", side: "inside" },
    { x: 5, y: 92.5, w: 90, h: 5, label: "Delete vehicle", side: "above" },
  ],
  /* Reports: CTA on main screen vs confirm dialogue */
  "reports.png::reports/generate-download": {
    x: 4,
    y: 88.5,
    w: 92,
    h: 5.5,
    label: "Generate & Download CSV",
    side: "above",
  },
  "reports_dialogue.png::reports/generate-download": [
    { x: 10, y: 34, w: 80, h: 28, label: "Confirm download", side: "inside" },
    // { x: 14, y: 50, w: 50, h: 3.5, label: "Don't ask again", side: "below" },
    // { x: 14, y: 57.5, w: 34, h: 4.5, label: "Cancel", side: "above" },
    { x: 52, y: 57.5, w: 34, h: 4.5, label: "Download", side: "above" },
  ],
  /* Language & Appearance detail vs row on settings2 */
  "settings2.png::settings/language-appearance": {
    x: 4,
    y: 36,
    w: 92,
    h: 5.5,
    label: "Language & Appearance",
    side: "below",
  },
  "theme_language_change.png::settings/language-appearance": [
    { x: 4, y: 11, w: 92, h: 7, label: "Theme", side: "left" },
    { x: 4, y: 19, w: 92, h: 7, label: "Language", side: "left" },
  ],
};

function basename(src: string): string {
  return src.split("/").pop() || src;
}

/** All highlight rectangles for a guide or point (empty if none). */
export function getHighlights(
  guideId: string,
  pointId?: string | null,
  imageSrc?: string | null,
): HighlightBox[] {
  const key = pointId ? `${guideId}/${pointId}` : guideId;
  if (imageSrc) {
    const byImg = HIGHLIGHTS_BY_IMAGE[`${basename(imageSrc)}::${key}`];
    if (byImg) return asList(byImg);
  }
  const direct = HIGHLIGHTS[key];
  if (direct) return asList(direct);
  if (pointId) return asList(HIGHLIGHTS[guideId]);
  return [];
}

/** First highlight only (legacy single-box call sites). */
export function getHighlight(
  guideId: string,
  pointId?: string | null,
  imageSrc?: string | null,
): HighlightBox | null {
  return getHighlights(guideId, pointId, imageSrc)[0] ?? null;
}
