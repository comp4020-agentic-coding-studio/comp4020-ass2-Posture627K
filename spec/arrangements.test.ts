import { describe, expect, it } from "vitest";
import {
  COMPASS_POSITIONS,
  HOUTIAN_ARRANGEMENT,
  OPPOSITE_POSITION,
  oppositeTrigram,
  positionOf,
  trigramAt,
  XIANTIAN_ARRANGEMENT,
  type Arrangement,
  type CompassPosition,
} from "../src/lib/arrangements";
import { lineInverseOf, TRIGRAMS, type TrigramName } from "../src/lib/trigrams";

const ALL_TRIGRAMS = TRIGRAMS.map((t) => t.name);

function expectFullCoverage(arrangement: Arrangement): void {
  expect(arrangement).toHaveLength(8);
  expect(new Set(arrangement.map((e) => e.trigram)).size).toBe(8);
  expect(new Set(arrangement.map((e) => e.position)).size).toBe(8);
  for (const trigram of ALL_TRIGRAMS) {
    expect(arrangement.some((e) => e.trigram === trigram)).toBe(true);
  }
  for (const position of COMPASS_POSITIONS) {
    expect(arrangement.some((e) => e.position === position)).toBe(true);
  }
}

describe("OPPOSITE_POSITION", () => {
  it("is a fixed-point-free involution over all 8 compass positions", () => {
    for (const position of COMPASS_POSITIONS) {
      const opposite = OPPOSITE_POSITION[position];
      expect(opposite).not.toBe(position);
      expect(OPPOSITE_POSITION[opposite]).toBe(position);
    }
  });
});

describe("Xiantian arrangement", () => {
  it("places exactly 8 unique trigrams at exactly 8 unique positions", () => {
    expectFullCoverage(XIANTIAN_ARRANGEMENT);
  });

  it("displays south-up: Qian at south (top), Kun at north (bottom)", () => {
    expect(positionOf(XIANTIAN_ARRANGEMENT, "Qian")).toBe("S");
    expect(positionOf(XIANTIAN_ARRANGEMENT, "Kun")).toBe("N");
  });

  it("places every trigram diametrically opposite its week-5 line-inverse", () => {
    for (const trigram of ALL_TRIGRAMS) {
      expect(oppositeTrigram(XIANTIAN_ARRANGEMENT, trigram)).toBe(lineInverseOf(trigram));
    }
  });

  it("verifies the four named opposite pairs explicitly", () => {
    const pairs: [TrigramName, TrigramName][] = [
      ["Qian", "Kun"],
      ["Dui", "Gen"],
      ["Li", "Kan"],
      ["Zhen", "Xun"],
    ];
    for (const [a, b] of pairs) {
      expect(oppositeTrigram(XIANTIAN_ARRANGEMENT, a)).toBe(b);
      expect(oppositeTrigram(XIANTIAN_ARRANGEMENT, b)).toBe(a);
    }
  });
});

describe("Houtian arrangement", () => {
  it("places exactly 8 unique trigrams at exactly 8 unique positions", () => {
    expectFullCoverage(HOUTIAN_ARRANGEMENT);
  });

  it("displays south-up: Li at south (top), Kan at north (bottom)", () => {
    expect(positionOf(HOUTIAN_ARRANGEMENT, "Li")).toBe("S");
    expect(positionOf(HOUTIAN_ARRANGEMENT, "Kan")).toBe("N");
  });

  it("places Zhen at east and Dui at west", () => {
    expect(positionOf(HOUTIAN_ARRANGEMENT, "Zhen")).toBe("E");
    expect(positionOf(HOUTIAN_ARRANGEMENT, "Dui")).toBe("W");
  });

  it("matches the verified table at every diagonal position", () => {
    const expected: Record<CompassPosition, TrigramName> = {
      S: "Li",
      SE: "Xun",
      E: "Zhen",
      NE: "Gen",
      N: "Kan",
      NW: "Qian",
      W: "Dui",
      SW: "Kun",
    };
    for (const position of COMPASS_POSITIONS) {
      expect(trigramAt(HOUTIAN_ARRANGEMENT, position)).toBe(expected[position]);
    }
  });

  it("does not generally place a trigram opposite its line-inverse — 'opposite' means something different here than in Xiantian", () => {
    for (const trigram of ALL_TRIGRAMS) {
      const opposite = oppositeTrigram(HOUTIAN_ARRANGEMENT, trigram);
      const inverse = lineInverseOf(trigram);
      // Li/Kan is the one coincidental overlap between the two
      // arrangements' opposite pairs; every other trigram's Houtian
      // opposite differs from its (arrangement-independent) line-inverse.
      if (trigram === "Li" || trigram === "Kan") {
        expect(opposite).toBe(inverse);
      } else {
        expect(opposite).not.toBe(inverse);
      }
    }
  });
});
