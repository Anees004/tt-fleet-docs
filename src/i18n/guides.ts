import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { GUIDE_ORDER } from "../data/meta";
import {
  DEFAULT_LOCALE,
  guideEntryId,
  localeFromEntryId,
  type Locale,
} from "./config";

export type GuideEntry = CollectionEntry<"guides">;

export async function getGuides(locale: Locale): Promise<GuideEntry[]> {
  const all = await getCollection("guides");
  const prefix = `${locale}/`;
  const list = all.filter((g) => g.id.startsWith(prefix));
  // Fallback to English if a locale is incomplete
  if (list.length === 0 && locale !== DEFAULT_LOCALE) {
    return getGuides(DEFAULT_LOCALE);
  }
  return list.slice().sort((a, b) => {
    const ai = GUIDE_ORDER.indexOf(a.data.id as (typeof GUIDE_ORDER)[number]);
    const bi = GUIDE_ORDER.indexOf(b.data.id as (typeof GUIDE_ORDER)[number]);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

export async function getGuide(
  locale: Locale,
  guideId: string,
): Promise<GuideEntry | undefined> {
  const entry = await getEntry("guides", guideEntryId(locale, guideId));
  if (entry) return entry;
  if (locale !== DEFAULT_LOCALE) {
    return getEntry("guides", guideEntryId(DEFAULT_LOCALE, guideId));
  }
  return undefined;
}

export function navGuides(guides: GuideEntry[]) {
  return guides.map((g) => {
    const d = g.data;
    const searchBits = [
      d.title,
      d.blurb,
      d.goal,
      ...(d.steps || []),
      ...(d.points || []).flatMap((p) => [p.title, p.tease, p.body, p.tip || ""]),
    ];
    return {
      id: d.id,
      group: d.group,
      title: d.title,
      blurb: d.blurb,
      icon: d.icon,
      searchText: searchBits.join(" ").toLowerCase(),
      locale: localeFromEntryId(g.id),
    };
  });
}
