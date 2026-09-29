import type { Locale } from "./config";
import { GROUPS, type GroupId } from "../data/meta";

type UiDict = {
  siteTitle: string;
  helpCenter: string;
  overview: string;
  operatorHelp: string;
  searchPlaceholder: string;
  noSearchMatch: string;
  closeMenu: string;
  openMenu: string;
  print: string;
  pdf: string;
  downloadPdf: string;
  printView: string;
  backToHelp: string;
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  breadcrumbOverview: string;
  tableOfContents: string;
  steps: string;
  tip: string;
  watchOut: string;
  highlightLegend: string;
  coverTitle: string;
  coverBody: string;
  coverInternal: string;
  generated: string;
  docLabel: string;
  langEn: string;
  langEs: string;
  groups: Record<GroupId, { label: string; desc: string }>;
  workflows: Record<string, string>;
};

export const UI: Record<Locale, UiDict> = {
  en: {
    siteTitle: "Titan Fleet Help",
    helpCenter: "Help center",
    overview: "Overview",
    operatorHelp: "Operator help",
    searchPlaceholder: "Search tasks…",
    noSearchMatch: "No tasks match that search.",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    print: "Print",
    pdf: "PDF",
    downloadPdf: "Download PDF",
    printView: "Print view",
    backToHelp: "← Back to help center",
    heroKicker: "Titan Fleet",
    heroTitle: "Operator help center",
    heroBody:
      "Task-based guides with short steps. Open key points on any screen to dig into a specific control or rule. Download the annotated PDF for offline use.",
    breadcrumbOverview: "Overview",
    tableOfContents: "Table of contents",
    steps: "Steps",
    tip: "Tip",
    watchOut: "Watch out",
    highlightLegend: "Highlighted region on device screenshot",
    coverTitle: "Operator help center",
    coverBody:
      "Task-based guides for Sign in, Home, Live Map, bookings, and fleet setup. Dark red highlights on screenshots mark the control or region each topic explains.",
    coverInternal: "Internal operator documentation",
    generated: "Generated",
    docLabel: "Titan Fleet Operator Help",
    langEn: "EN",
    langEs: "ES",
    groups: {
      start: { label: "Start here", desc: "Sign in, Home, Live Map" },
      setup: { label: "Fleet setup", desc: "Drivers, vehicles, greeters" },
      bookings: { label: "Bookings", desc: "Lists, Accept, filters" },
      more: { label: "More screens", desc: "Performance through Settings" },
      reference: { label: "Reference", desc: "Operator do / don't checklist" },
    },
    workflows: {
      "live-map": "Most used",
      "accept-assign": "Most used",
      "home-dashboard": "Start",
      "date-filter": "Bookings",
      drivers: "Setup",
      "bookings-list": "Bookings",
    },
  },
  es: {
    siteTitle: "Ayuda Titan Fleet",
    helpCenter: "Centro de ayuda",
    overview: "Inicio",
    operatorHelp: "Ayuda del operador",
    searchPlaceholder: "Buscar tareas…",
    noSearchMatch: "Ninguna tarea coincide con esa búsqueda.",
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    print: "Imprimir",
    pdf: "PDF",
    downloadPdf: "Descargar PDF",
    printView: "Vista de impresión",
    backToHelp: "← Volver al centro de ayuda",
    heroKicker: "Titan Fleet",
    heroTitle: "Centro de ayuda del operador",
    heroBody:
      "Guías por tareas con pasos cortos. Abre los puntos clave de cada pantalla para ver un control o regla concreta. Descarga el PDF anotado para usarlo sin conexión.",
    breadcrumbOverview: "Inicio",
    tableOfContents: "Índice",
    steps: "Pasos",
    tip: "Consejo",
    watchOut: "Atención",
    highlightLegend: "Zona resaltada en la captura del dispositivo",
    coverTitle: "Centro de ayuda del operador",
    coverBody:
      "Guías por tareas para Inicio de sesión, Inicio, Mapa en vivo, reservas y configuración de flota. Los resaltados rojo oscuro marcan el control o la zona que explica cada tema.",
    coverInternal: "Documentación interna para operadores",
    generated: "Generado",
    docLabel: "Ayuda del operador Titan Fleet",
    langEn: "EN",
    langEs: "ES",
    groups: {
      start: { label: "Empieza aquí", desc: "Inicio de sesión, Inicio, Mapa" },
      setup: { label: "Configuración", desc: "Conductores, vehículos, saludadores" },
      bookings: { label: "Reservas", desc: "Listas, Aceptar, filtros" },
      more: { label: "Más pantallas", desc: "Rendimiento hasta Ajustes" },
      reference: { label: "Referencia", desc: "Lista de hacer / no hacer" },
    },
    workflows: {
      "live-map": "Más usado",
      "accept-assign": "Más usado",
      "home-dashboard": "Inicio",
      "date-filter": "Reservas",
      drivers: "Configuración",
      "bookings-list": "Reservas",
    },
  },
};

export function t(locale: Locale): UiDict {
  return UI[locale] ?? UI.en;
}

export function groupLabelLocalized(locale: Locale, id: string): string {
  const g = t(locale).groups[id as GroupId];
  if (g) return g.label;
  return GROUPS.find((x) => x.id === id)?.label ?? id;
}

export function formatRevisedDate(locale: Locale, isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
}

export function docVersionLineLocalized(locale: Locale, version: string, revised: string): string {
  return `${t(locale).docLabel} · Doc v${version} · ${formatRevisedDate(locale, revised)}`;
}
