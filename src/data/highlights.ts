/**
 * Screenshot highlight regions as % of the image box (0–100).
 * Key: `${guideId}` for guide hero shot, or `${guideId}/${pointId}` for a point.
 */
export type HighlightBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

export const HIGHLIGHTS: Record<string, HighlightBox> = {
  /* Sign in */
  "sign-in": { x: 6, y: 52, w: 88, h: 32, label: "Sign in form" },
  "sign-in/email-password": { x: 6, y: 52, w: 88, h: 22, label: "Email & password" },
  "sign-in/theme-on-login": { x: 3, y: 3.8, w: 28, h: 4.2, label: "Theme" },
  "sign-in/language-on-login": { x: 68, y: 3.8, w: 28, h: 4.2, label: "Language" },
  "sign-in/forgot-link": { x: 52, y: 74, w: 42, h: 3.5, label: "Forgot password?" },

  /* Forgot password */
  "forgot-password": { x: 8, y: 48, w: 84, h: 28, label: "Fleet email + Send code" },
  "forgot-password/step-one": { x: 8, y: 55, w: 84, h: 12, label: "Fleet email" },
  "forgot-password/back-to-sign-in": { x: 3, y: 4, w: 12, h: 4, label: "Back" },

  /* Home (default / Last Week — dh) */
  "home-dashboard": { x: 4, y: 10, w: 92, h: 16, label: "Fleet Status" },
  "home-dashboard/fleet-status": { x: 4, y: 10, w: 92, h: 16, label: "Fleet Status" },
  "home-dashboard/kpi-cards": { x: 4, y: 34, w: 92, h: 18, label: "KPI cards" },
  "home-dashboard/period-default": { x: 4, y: 27, w: 92, h: 6.5, label: "Performance period" },
  "home-dashboard/period-presets": { x: 4, y: 27, w: 70, h: 6.5, label: "Presets" },
  "home-dashboard/period-custom": { x: 68, y: 27, w: 28, h: 6.5, label: "Custom" },
  "home-dashboard/hourly-charts": { x: 4, y: 53, w: 92, h: 30, label: "Earnings chart" },
  "home-dashboard/online-entry": { x: 4, y: 10, w: 92, h: 16, label: "Online / Offline" },
  "home-dashboard/notifications": { x: 82, y: 4, w: 14, h: 5, label: "Notifications" },

  /* Home custom / one day */
  "home-custom": { x: 4, y: 10, w: 92, h: 22, label: "One-day KPIs" },
  "home-custom/when-custom": { x: 4, y: 10, w: 92, h: 8, label: "Custom day view" },
  "home-custom/one-day": { x: 4, y: 34, w: 92, h: 28, label: "Hourly earnings" },
  "home-custom/date-range": { x: 4, y: 10, w: 92, h: 22, label: "KPI window" },

  /* Online drivers */
  "online-drivers": { x: 4, y: 12, w: 92, h: 55, label: "Online list" },
  "online-drivers/online-list": { x: 4, y: 18, w: 92, h: 50, label: "Online drivers" },
  "online-drivers/search-online": { x: 4, y: 10, w: 92, h: 7, label: "Search" },
  "online-drivers/open-profile": { x: 4, y: 18, w: 92, h: 14, label: "Driver row" },

  /* Driver profile */
  "driver-profile": { x: 4, y: 8, w: 92, h: 35, label: "Driver record" },
  "driver-profile/records": { x: 4, y: 18, w: 92, h: 28, label: "Performance cards" },
  "driver-profile/activate-deactivate": { x: 4, y: 78, w: 92, h: 10, label: "Status actions" },
  "driver-profile/vehicles-assign": { x: 4, y: 48, w: 92, h: 22, label: "Vehicle assignment" },
  "driver-profile/documents": { x: 4, y: 70, w: 92, h: 18, label: "Documents" },

  /* Live map */
  "live-map": { x: 0, y: 12, w: 100, h: 70, label: "Live map" },
  "live-map/online-drivers": { x: 0, y: 18, w: 100, h: 55, label: "Driver pins" },
  "live-map/real-time-locations": { x: 0, y: 18, w: 100, h: 55, label: "Live locations" },
  "live-map/search-driver": { x: 4, y: 10, w: 92, h: 7, label: "Search drivers" },
  "live-map/open-from-home": { x: 4, y: 22, w: 92, h: 5, label: "View Live Map" },

  /* Menu / drawer */
  "menu": { x: 0, y: 8, w: 78, h: 75, label: "Side menu" },
  "menu/hamburger": { x: 3, y: 4, w: 12, h: 5, label: "Menu" },
  "menu/drawer-destinations": { x: 0, y: 12, w: 78, h: 70, label: "Drawer items" },

  /* Drivers */
  "drivers": { x: 4, y: 14, w: 92, h: 60, label: "Drivers list" },
  "drivers/search-filter": { x: 4, y: 8, w: 92, h: 12, label: "Search & chips" },
  "drivers/long-press": { x: 4, y: 22, w: 92, h: 40, label: "Select drivers" },
  "drivers/multi-select": { x: 4, y: 8, w: 92, h: 12, label: "Multi-select" },
  "drivers/add-driver": { x: 78, y: 85, w: 16, h: 7, label: "Add (+)" },

  /* Vehicles */
  "vehicles": { x: 4, y: 14, w: 92, h: 55, label: "Vehicles" },
  "vehicles/status-chips": { x: 4, y: 8, w: 92, h: 8, label: "Status chips" },
  "vehicles/vehicle-cards": { x: 4, y: 18, w: 92, h: 45, label: "Vehicle cards" },
  "vehicles/add-vehicle": { x: 78, y: 85, w: 16, h: 7, label: "Add (+)" },

  /* Greeters */
  "greeters": { x: 4, y: 12, w: 92, h: 55, label: "Greeters" },

  /* Bookings */
  "bookings-list": { x: 4, y: 14, w: 92, h: 55, label: "Bookings list" },
  "bookings-list/status-chips": { x: 4, y: 8, w: 92, h: 8, label: "Status chips" },
  "bookings-list/booking-cards": { x: 4, y: 18, w: 92, h: 45, label: "Booking cards" },

  /* Accept & assign */
  "accept-assign": { x: 4, y: 55, w: 92, h: 28, label: "Accept / Assign" },
  "accept-assign/accept-before-assign": { x: 4, y: 70, w: 92, h: 12, label: "Accept & Assign" },
  "accept-assign/fleet-income": { x: 4, y: 35, w: 92, h: 12, label: "Fleet income" },
  "accept-assign/reject": { x: 4, y: 70, w: 44, h: 10, label: "Reject" },
  "accept-assign/assign-people": { x: 4, y: 55, w: 92, h: 25, label: "Assign crew" },

  /* Ride hailing */
  "ride-hailing": { x: 4, y: 8, w: 92, h: 10, label: "Ride Hailing tab" },

  /* Date filter */
  "date-filter": { x: 4, y: 20, w: 92, h: 45, label: "Date filter" },
  "date-filter/funnel-icon": { x: 78, y: 8, w: 16, h: 6, label: "Funnel" },
  "date-filter/presets": { x: 8, y: 25, w: 84, h: 30, label: "Presets" },
  "date-filter/custom-range": { x: 8, y: 45, w: 84, h: 20, label: "Custom range" },

  /* More screens — generic mid-content focus */
  "calendar": { x: 4, y: 12, w: 92, h: 55, label: "Calendar" },
  "documents": { x: 4, y: 12, w: 92, h: 55, label: "Documents" },
  "performance": { x: 4, y: 12, w: 92, h: 55, label: "Performance" },
  "earnings": { x: 4, y: 12, w: 92, h: 55, label: "Earnings" },
  "reports": { x: 4, y: 12, w: 92, h: 55, label: "Reports" },
  "settings": { x: 4, y: 12, w: 92, h: 55, label: "Settings" },
};

export function getHighlight(
  guideId: string,
  pointId?: string | null,
): HighlightBox | null {
  if (pointId) {
    const keyed = HIGHLIGHTS[`${guideId}/${pointId}`];
    if (keyed) return keyed;
  }
  return HIGHLIGHTS[guideId] ?? null;
}
