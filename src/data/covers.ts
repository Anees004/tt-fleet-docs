/**
 * Solid patches painted over screenshot regions so obsolete UI
 * (e.g. removed Delete Account) stays hidden without new PNGs.
 * Coordinates are % of the image box (0–100), same as highlights.
 */
export type CoverBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Fill color — match the screen background behind the control. */
  color?: string;
};

function basename(src: string): string {
  return src.split("/").pop() || src;
}

/** Keyed by image filename in /public/images/ */
export const IMAGE_COVERS: Record<string, CoverBox[]> = {
  /* settings2.png — hide removed red Delete Account button under Sign Out */
  "settings2.png": [{ x: 2, y: 64.5, w: 96, h: 16, color: "#f2f2f7" }],
};

export function getImageCovers(imageSrc?: string | null): CoverBox[] {
  if (!imageSrc) return [];
  return IMAGE_COVERS[basename(imageSrc)] ?? [];
}
