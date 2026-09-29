export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Prefix path for a locale. English stays unprefixed. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  if (clean === "/") return `/${locale}/`;
  return `/${locale}${clean}`;
}

/** Content collection entry id: `en/sign-in` */
export function guideEntryId(locale: Locale, guideId: string): string {
  return `${locale}/${guideId}`;
}

export function localeFromEntryId(entryId: string): Locale {
  const prefix = entryId.split("/")[0];
  return isLocale(prefix) ? prefix : DEFAULT_LOCALE;
}

export function pdfHref(locale: Locale): string {
  return locale === "es"
    ? "/titan-fleet-operator-help-es.pdf"
    : "/titan-fleet-operator-help.pdf";
}

export function printHref(locale: Locale): string {
  return localePath(locale, "/print/");
}
