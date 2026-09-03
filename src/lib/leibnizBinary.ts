import { trigramInfo, type TrigramName } from "./trigrams";

// Week 11 — the later, retrospective "binary count" reading of a trigram's
// lines (docs/design-decisions.md's Phase 7 note, item 3; CLAUDE.md's
// Register 3: a later interpretation, not an intrinsic property of the
// trigram itself, and not something Shao Yong did to his own arrangement).
//
// No file in this repository states the line-to-bit convention as a bare
// numeric rule, so it isn't assumed here — it's derived from two facts
// already sourced elsewhere in the repo, checked against each other:
//
//   1. src/content/sessions/week-06.mdx states the reading's two documented
//      endpoints: Kun = 0, Qian = 7.
//   2. François Louis, "The Genesis of an Icon" (HJAS 63.1, 2003), fig. 3
//      ("the creation of the xiantian trigram sequence"), gives Shao Yong's
//      own full ordinal sequence: Qian 1, Dui 2, Li 3, Zhen 4, Xun 5, Kan 6,
//      Gen 7, Kun 8 — and the Phase 7 note already documents the binary
//      reading as running in the *reverse* of that order.
//
// yang = 1, yin = 0, with the BOTTOM line as most significant (weight 4) and
// the TOP line as least significant (weight 1) is the only bit-weight
// assignment that reproduces both the two documented endpoints and the full
// eight-value reversal of Shao Yong's sequence above. See
// docs/design-decisions.md's Phase 9 note for the worked derivation, and
// spec/leibniz-binary.test.ts for the check against both source facts.
const BIT_WEIGHT: readonly [number, number, number] = [4, 2, 1]; // [bottom, middle, top]

export function leibnizBinaryDigits(name: TrigramName): readonly ("0" | "1")[] {
  return trigramInfo(name).lines.map((line) => (line === "yang" ? "1" : "0"));
}

export function leibnizBinaryValue(name: TrigramName): number {
  const { lines } = trigramInfo(name);
  return lines.reduce((total, line, index) => total + (line === "yang" ? BIT_WEIGHT[index] : 0), 0);
}
