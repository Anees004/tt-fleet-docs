/**
 * Screenshot highlight regions as % of the image box (0–100).
 * Calibrated against 1320×2868 device screenshots with a % grid.
 * Key: `${guideId}` or `${guideId}/${pointId}`
 */
export type HighlightBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

export const HIGHLIGHTS: Record<string, HighlightBox> = {
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
  "forgot-password/back-to-sign-in": { x: 2, y: 6.5, w: 11, h: 4, label: "Back" },

  /* ---------- Home default (dh-sim-booted.png) ---------- */
  "home-dashboard": { x: 4, y: 14, w: 92, h: 14, label: "Fleet Status" },
  "home-dashboard/fleet-status": { x: 4, y: 14, w: 92, h: 14, label: "Fleet Status" },
  "home-dashboard/kpi-cards": { x: 4, y: 39, w: 92, h: 24, label: "KPI cards" },
  "home-dashboard/period-default": { x: 4, y: 31.5, w: 92, h: 6.5, label: "Performance period" },
  "home-dashboard/period-presets": { x: 4, y: 31.5, w: 62, h: 6.5, label: "Presets" },
  /* Custom chip on dh; period-custom point may use home.png (one-day) — see override below via image map */
  "home-dashboard/period-custom": { x: 64, y: 31.5, w: 30, h: 6.5, label: "Custom" },
  "home-dashboard/hourly-charts": { x: 4, y: 64, w: 92, h: 24, label: "Earnings chart" },
  "home-dashboard/online-entry": { x: 4, y: 14, w: 92, h: 14, label: "Online / Offline" },
  "home-dashboard/notifications": { x: 86, y: 7.5, w: 11, h: 4.5, label: "Notifications" },

  /* ---------- Home custom / one day (home.png — no chip row) ---------- */
  "home-custom": { x: 4, y: 11, w: 92, h: 26, label: "One-day KPIs" },
  "home-custom/when-custom": { x: 4, y: 11, w: 92, h: 26, label: "Custom day KPIs" },
  "home-custom/one-day": { x: 4, y: 37, w: 92, h: 26, label: "Hourly earnings" },
  "home-custom/date-range": { x: 4, y: 11, w: 92, h: 26, label: "KPI window" },
  "home-custom/same-idea-lists": { x: 4, y: 37, w: 92, h: 50, label: "Day charts" },

  /* ---------- Online drivers ---------- */
  "online-drivers": { x: 4, y: 16, w: 92, h: 58, label: "Online list" },
  "online-drivers/online-list": { x: 4, y: 16, w: 92, h: 58, label: "Online drivers" },
  "online-drivers/search-online": { x: 4, y: 9, w: 92, h: 6, label: "Search" },
  "online-drivers/open-profile": { x: 4, y: 16, w: 92, h: 12, label: "Driver row" },

  /* ---------- Driver profile ---------- */
  "driver-profile": { x: 4, y: 8, w: 92, h: 32, label: "Driver record" },
  "driver-profile/records": { x: 4, y: 16, w: 92, h: 28, label: "Performance cards" },
  "driver-profile/activate-deactivate": { x: 4, y: 78, w: 92, h: 10, label: "Status actions" },
  "driver-profile/vehicles-assign": { x: 4, y: 48, w: 92, h: 22, label: "Vehicle assignment" },
  "driver-profile/documents": { x: 4, y: 68, w: 92, h: 20, label: "Documents" },

  /* ---------- Live map ---------- */
  "live-map": { x: 0, y: 12, w: 100, h: 70, label: "Live map" },
  "live-map/online-drivers": { x: 0, y: 16, w: 100, h: 58, label: "Driver pins" },
  "live-map/real-time-locations": { x: 0, y: 16, w: 100, h: 58, label: "Live locations" },
  "live-map/search-driver": { x: 4, y: 9, w: 92, h: 7, label: "Search drivers" },
  "live-map/open-from-home": { x: 4, y: 24, w: 92, h: 5, label: "View Live Map" },
  "live-map/not-for": { x: 0, y: 12, w: 100, h: 70, label: "Map only" },

  /* ---------- Menu / drawer ---------- */
  "menu": { x: 0, y: 8, w: 78, h: 75, label: "Side menu" },
  "menu/hamburger": { x: 2, y: 7.5, w: 10, h: 4.5, label: "Menu" },
  "menu/drawer-destinations": { x: 0, y: 12, w: 78, h: 70, label: "Drawer items" },
  "menu/vs-tabs": { x: 0, y: 88, w: 100, h: 10, label: "Bottom tabs" },

  /* ---------- Drivers ---------- */
  "drivers": { x: 4, y: 14, w: 92, h: 60, label: "Drivers list" },
  "drivers/search-filter": { x: 4, y: 8, w: 92, h: 12, label: "Search & chips" },
  "drivers/long-press": { x: 4, y: 22, w: 92, h: 40, label: "Select drivers" },
  "drivers/multi-select": { x: 4, y: 8, w: 92, h: 12, label: "Multi-select" },
  "drivers/add-driver": { x: 78, y: 85, w: 16, h: 7, label: "Add (+)" },

  /* ---------- Vehicles ---------- */
  "vehicles": { x: 4, y: 14, w: 92, h: 55, label: "Vehicles" },
  "vehicles/status-chips": { x: 4, y: 8, w: 92, h: 8, label: "Status chips" },
  "vehicles/vehicle-cards": { x: 4, y: 18, w: 92, h: 45, label: "Vehicle cards" },
  "vehicles/add-vehicle": { x: 78, y: 85, w: 16, h: 7, label: "Add (+)" },

  /* ---------- Greeters ---------- */
  "greeters": { x: 4, y: 12, w: 92, h: 55, label: "Greeters" },
  "greeters/when-needed": { x: 4, y: 12, w: 92, h: 55, label: "Greeter list" },
  "greeters/assign-link": { x: 4, y: 12, w: 92, h: 55, label: "Greeters" },

  /* ---------- Bookings ---------- */
  "bookings-list": { x: 4, y: 14, w: 92, h: 55, label: "Bookings list" },
  "bookings-list/status-chips": { x: 4, y: 8, w: 92, h: 8, label: "Status chips" },
  "bookings-list/booking-cards": { x: 4, y: 18, w: 92, h: 45, label: "Booking cards" },
  "bookings-list/export": { x: 78, y: 8, w: 16, h: 6, label: "Export" },

  /* ---------- Accept & assign ---------- */
  "accept-assign": { x: 4, y: 58, w: 92, h: 26, label: "Accept / Assign" },
  "accept-assign/accept-before-assign": { x: 4, y: 68, w: 92, h: 14, label: "Accept & Assign" },
  "accept-assign/fleet-income": { x: 4, y: 32, w: 92, h: 14, label: "Fleet income" },
  "accept-assign/reject": { x: 4, y: 68, w: 44, h: 12, label: "Reject" },
  "accept-assign/assign-people": { x: 4, y: 52, w: 92, h: 28, label: "Assign crew" },

  /* ---------- Ride hailing ---------- */
  "ride-hailing": { x: 4, y: 8, w: 92, h: 10, label: "Ride Hailing tab" },
  "ride-hailing/tab-switch": { x: 4, y: 8, w: 92, h: 10, label: "Pre-booked / Hailing" },
  "ride-hailing/same-detail": { x: 4, y: 18, w: 92, h: 50, label: "Ride list" },

  /* ---------- Date filter ---------- */
  "date-filter": { x: 6, y: 22, w: 88, h: 42, label: "Date filter" },
  "date-filter/funnel-icon": { x: 80, y: 8, w: 14, h: 6, label: "Funnel" },
  "date-filter/presets": { x: 8, y: 24, w: 84, h: 28, label: "Presets" },
  "date-filter/custom-range": { x: 8, y: 48, w: 84, h: 18, label: "Custom range" },
  "date-filter/clear-all": { x: 8, y: 24, w: 84, h: 10, label: "All / clear" },

  /* ---------- More screens ---------- */
  "calendar": { x: 4, y: 12, w: 92, h: 55, label: "Calendar" },
  "calendar/busy-slots": { x: 4, y: 12, w: 92, h: 55, label: "Busy slots" },
  "calendar/vs-list": { x: 4, y: 12, w: 92, h: 55, label: "Calendar" },
  "documents": { x: 4, y: 12, w: 92, h: 55, label: "Documents" },
  "documents/what-belongs": { x: 4, y: 12, w: 92, h: 55, label: "Documents" },
  "documents/keep-current": { x: 4, y: 12, w: 92, h: 55, label: "Documents" },
  "performance": { x: 4, y: 12, w: 92, h: 55, label: "Performance" },
  "performance/vs-home": { x: 4, y: 12, w: 92, h: 55, label: "Performance" },
  "performance/period": { x: 4, y: 8, w: 92, h: 10, label: "Period" },
  "earnings": { x: 4, y: 12, w: 92, h: 55, label: "Earnings" },
  "earnings/period-totals": { x: 4, y: 12, w: 92, h: 30, label: "Totals" },
  "earnings/vs-booking-income": { x: 4, y: 12, w: 92, h: 55, label: "Earnings" },
  "reports": { x: 4, y: 12, w: 92, h: 55, label: "Reports" },
  "reports/match-filters": { x: 4, y: 8, w: 92, h: 14, label: "Filters" },
  "reports/handoff": { x: 4, y: 12, w: 92, h: 55, label: "Reports" },
  "settings": { x: 4, y: 12, w: 92, h: 55, label: "Settings" },
  "settings/who-changes": { x: 4, y: 12, w: 92, h: 55, label: "Settings" },
  "settings/after-change": { x: 4, y: 12, w: 92, h: 55, label: "Settings" },
};

/** When the same point uses a different screenshot, override by image basename. */
export const HIGHLIGHTS_BY_IMAGE: Record<string, HighlightBox> = {
  /* period-custom on home.png = one-day result, not the Custom chip */
  "home.png::home-dashboard/period-custom": {
    x: 4,
    y: 11,
    w: 92,
    h: 26,
    label: "Custom day result",
  },
  "home.png::home-custom": {
    x: 4,
    y: 11,
    w: 92,
    h: 26,
    label: "One-day KPIs",
  },
  /* Closed theme/language pills on plain login.png (if ever used) */
  "login.png::sign-in/theme-on-login": { x: 4, y: 6.5, w: 26, h: 4, label: "Theme" },
  "login.png::sign-in/language-on-login": { x: 70, y: 6.5, w: 24, h: 4, label: "Language" },
};

function basename(src: string): string {
  return src.split("/").pop() || src;
}

export function getHighlight(
  guideId: string,
  pointId?: string | null,
  imageSrc?: string | null,
): HighlightBox | null {
  const key = pointId ? `${guideId}/${pointId}` : guideId;
  if (imageSrc) {
    const byImg = HIGHLIGHTS_BY_IMAGE[`${basename(imageSrc)}::${key}`];
    if (byImg) return byImg;
  }
  return HIGHLIGHTS[key] ?? (pointId ? HIGHLIGHTS[guideId] ?? null : null);
}
