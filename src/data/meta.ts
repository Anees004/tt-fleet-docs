export const GROUPS = [
  {
    id: "start",
    label: "Start here",
    icon: "home",
    desc: "Sign in, Home, Live Map",
    first: "sign-in",
  },
  {
    id: "setup",
    label: "Fleet setup",
    icon: "drivers",
    desc: "Drivers, vehicles, greeters",
    first: "drivers",
  },
  {
    id: "bookings",
    label: "Bookings",
    icon: "bookings",
    desc: "Lists, Accept, filters",
    first: "bookings-list",
  },
  {
    id: "more",
    label: "More screens",
    icon: "menu",
    desc: "Calendar through Settings",
    first: "calendar",
  },
  {
    id: "reference",
    label: "Reference",
    icon: "rules",
    desc: "Rules & Custom dates",
    first: "rules",
  },
] as const;

export type GroupId = (typeof GROUPS)[number]["id"];

/** Sidebar / browse order (matches original help content). */
export const GUIDE_ORDER = [
  "sign-in",
  "forgot-password",
  "home-dashboard",
  "online-drivers",
  "driver-profile",
  "live-map",
  "menu",
  "drivers",
  "vehicles",
  "greeters",
  "bookings-list",
  "accept-assign",
  "ride-hailing",
  "date-filter",
  "calendar",
  "documents",
  "performance",
  "earnings",
  "reports",
  "settings",
  "rules",
  "home-custom",
] as const;

export const WORKFLOWS = [
  { id: "live-map", label: "Most used" },
  { id: "accept-assign", label: "Most used" },
  { id: "home-dashboard", label: "Start" },
  { id: "date-filter", label: "Bookings" },
  { id: "drivers", label: "Setup" },
  { id: "bookings-list", label: "Bookings" },
] as const;

export function groupLabel(id: string): string {
  return GROUPS.find((g) => g.id === id)?.label ?? id;
}
