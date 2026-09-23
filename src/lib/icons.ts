export const ICONS: Record<string, string> = {
  home: '<path d="M4 11.5L12 4l8 7.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"/>',
  map: '<path d="M9 4l-5 2v14l5-2 6 2 5-2V4l-5 2-6-2zm0 0v14m6-12v14"/>',
  drivers:
    '<path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0"/><circle cx="12" cy="8" r="3.2"/>',
  vehicles:
    '<path d="M5 16l1.5-5h11L19 16M5 16H4v3h2v-1h12v1h2v-3h-1M7.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 11l1-3h8l1 3"/>',
  bookings: '<path d="M8 4h8a2 2 0 012 2v14l-6-3-6 3V6a2 2 0 012-2z"/>',
  calendar:
    '<rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 4v4M16 4v4M4 10h16"/>',
  docs: '<path d="M7 4h7l4 4v12a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z"/><path d="M14 4v4h4M9 13h6M9 17h4"/>',
  chart: '<path d="M5 19V9M10 19V5M15 19v-7M20 19V8"/>',
  money:
    '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9.5 9.5c.8-1 2-1.5 2.5-1.5s2 .6 2 1.75-1 1.5-2.5 2-2.5.9-2.5 2.25S10.5 16 12 16s2.2-.5 2.6-1.2"/>',
  report:
    '<path d="M6 4h9l3 3v13H6V4z"/><path d="M9 12h6M9 16h4M14 4v3h3"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',
  menu: '<path d="M5 7h14M5 12h14M5 17h10"/>',
  filter: '<path d="M4 6h16l-6 7v5l-4 2v-7L4 6z"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/>',
  assign:
    '<path d="M12 4v10m0 0l-3.5-3.5M12 14l3.5-3.5"/><path d="M5 18h14"/>',
  greeter:
    '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 19a6 6 0 0112 0M13 19a5 5 0 018 0"/>',
  ride: '<path d="M4 15l1.2-4.2A2 2 0 017.1 9.5H17l2 5.5H4zm2.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>',
  rules:
    '<path d="M8 5h8v3H8V5zm0 5h11v2H8v-2zm0 4h9v2H8v-2zm0 4h6v2H8v-2zM5 5h2v16H5V5z"/>',
  custom: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  pin: '<path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z"/><circle cx="12" cy="11" r="2"/>',
  bell: '<path d="M6 16h12l-1.2-1.5a4.5 4.5 0 01-.8-2.6V10a4 4 0 10-8 0v1.9c0 .95-.3 1.87-.8 2.6L6 16zm4 2a2 2 0 004 0"/>',
  check: '<path d="M5 12.5l4 4L19 7"/>',
  x: '<path d="M7 7l10 10M17 7L7 17"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/>',
  link: '<path d="M9 12h6M8.5 15.5l-1.2 1.2a3.5 3.5 0 01-5-5L4 10m16 4l1.7-1.7a3.5 3.5 0 00-5-5L15.5 8.5"/>',
  chevron: '<path d="M9 6l6 6-6 6"/>',
  spark:
    '<path d="M12 3l1.2 4.2L17.5 8.5 13.2 9.8 12 14l-1.2-4.2L6.5 8.5l4.3-1.3L12 3z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 14.5A8.5 8.5 0 1110.5 3a7 7 0 0010.5 11.5z"/>',
};

export function iconSvg(name: string, size = 18): string {
  const path = ICONS[name] || ICONS.spark;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}
