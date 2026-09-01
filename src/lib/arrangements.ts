import type { TrigramName } from "./trigrams";

// Purely structural: eight compass positions and which one sits opposite
// which. This says nothing about what "opposite" means in any particular
// arrangement — that's for each arrangement's own data and the session
// content, not this file. See docs/design-decisions.md's Xiantian/Houtian
// verification note for the external sources behind every position below;
// none of it was reconstructed from memory.
export type CompassPosition = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

export const COMPASS_POSITIONS: readonly CompassPosition[] = [
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SW",
  "W",
  "NW",
];

export const OPPOSITE_POSITION: Readonly<Record<CompassPosition, CompassPosition>> = {
  N: "S",
  S: "N",
  E: "W",
  W: "E",
  NE: "SW",
  SW: "NE",
  NW: "SE",
  SE: "NW",
};

export interface ArrangementEntry {
  trigram: TrigramName;
  position: CompassPosition;
}

export type Arrangement = readonly ArrangementEntry[];

// Xiantian ("Before Heaven") — Shao Yong's circular arrangement, historical
// south-up display. Verified against the primary Chinese diagram (Zhu Xi,
// Yixue qimeng, trans. Adler), Birdwhistell's Transition to
// Neo-Confucianism, and Fung/Bodde's History of Chinese Philosophy vol. II.
export const XIANTIAN_ARRANGEMENT: Arrangement = [
  { trigram: "Qian", position: "S" },
  { trigram: "Dui", position: "SE" },
  { trigram: "Li", position: "E" },
  { trigram: "Zhen", position: "NE" },
  { trigram: "Kun", position: "N" },
  { trigram: "Gen", position: "NW" },
  { trigram: "Kan", position: "W" },
  { trigram: "Xun", position: "SW" },
];

// Houtian ("Later Heaven") — the Shuogua zhuan's correlative directional
// arrangement, same south-up display. Verified against the Shuogua zhuan
// itself (ch. 5), Wilhelm/Baynes (Shuo Kua §5, Fig. 2), and Legge (Yî King,
// App. V and the introduction's comparison table).
export const HOUTIAN_ARRANGEMENT: Arrangement = [
  { trigram: "Li", position: "S" },
  { trigram: "Xun", position: "SE" },
  { trigram: "Zhen", position: "E" },
  { trigram: "Gen", position: "NE" },
  { trigram: "Kan", position: "N" },
  { trigram: "Qian", position: "NW" },
  { trigram: "Dui", position: "W" },
  { trigram: "Kun", position: "SW" },
];

export function positionOf(arrangement: Arrangement, trigram: TrigramName): CompassPosition {
  const entry = arrangement.find((candidate) => candidate.trigram === trigram);
  if (!entry) throw new Error(`${trigram} is not placed in this arrangement`);
  return entry.position;
}

export function trigramAt(arrangement: Arrangement, position: CompassPosition): TrigramName {
  const entry = arrangement.find((candidate) => candidate.position === position);
  if (!entry) throw new Error(`no trigram is placed at ${position} in this arrangement`);
  return entry.trigram;
}

// The trigram diametrically opposite `trigram` in this specific
// arrangement. Purely geometric (position -> opposite position -> whoever
// is there) — whether that pairing coincides with the trigram's
// arrangement-independent line-inverse (src/lib/trigrams.ts) is a separate
// question the two arrangements answer differently. See
// spec/arrangements.test.ts.
export function oppositeTrigram(arrangement: Arrangement, trigram: TrigramName): TrigramName {
  return trigramAt(arrangement, OPPOSITE_POSITION[positionOf(arrangement, trigram)]);
}
