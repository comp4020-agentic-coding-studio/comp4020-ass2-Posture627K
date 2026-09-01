import { flipLine, type LineValue } from "./hexagram";

// The eight trigrams themselves — name, glyph, and line pattern (bottom to
// top). Intrinsic to the trigram, independent of any arrangement (Xiantian,
// Houtian, or otherwise). Line patterns match each trigram's own Unicode
// glyph and were checked for self-consistency against week 5's four
// verified line-inverse pairs before use — see TrigramFigure.astro's own
// comment for the same cross-check on this exact data.
export type TrigramName = "Qian" | "Kun" | "Zhen" | "Xun" | "Kan" | "Li" | "Gen" | "Dui";

export interface TrigramInfo {
  name: TrigramName;
  glyph: string;
  lines: readonly [LineValue, LineValue, LineValue];
}

export const TRIGRAMS: readonly TrigramInfo[] = [
  { name: "Qian", glyph: "☰", lines: ["yang", "yang", "yang"] },
  { name: "Kun", glyph: "☷", lines: ["yin", "yin", "yin"] },
  { name: "Zhen", glyph: "☳", lines: ["yang", "yin", "yin"] },
  { name: "Xun", glyph: "☴", lines: ["yin", "yang", "yang"] },
  { name: "Kan", glyph: "☵", lines: ["yin", "yang", "yin"] },
  { name: "Li", glyph: "☲", lines: ["yang", "yin", "yang"] },
  { name: "Gen", glyph: "☶", lines: ["yin", "yin", "yang"] },
  { name: "Dui", glyph: "☱", lines: ["yang", "yang", "yin"] },
];

const byName = new Map(TRIGRAMS.map((trigram) => [trigram.name, trigram]));
const byLineKey = new Map(TRIGRAMS.map((trigram) => [trigram.lines.join(","), trigram.name]));

export function trigramInfo(name: TrigramName): TrigramInfo {
  const info = byName.get(name);
  if (!info) throw new Error(`unknown trigram: ${name}`);
  return info;
}

// Week 5's one relationship that holds regardless of arrangement: flip
// every line (see CLAUDE.md's "Technical precision" section and the
// Phase 6 note in docs/design-decisions.md). Defined operationally in terms
// of the lines themselves, via the same `flipLine` the hexagram builder
// uses, rather than as a hard-coded pair list — so it can't drift from the
// line data above.
export function lineInverseOf(name: TrigramName): TrigramName {
  const flipped = trigramInfo(name).lines.map(flipLine).join(",");
  const inverse = byLineKey.get(flipped);
  if (!inverse) throw new Error(`no trigram has the line-inverse of ${name}`);
  return inverse;
}
