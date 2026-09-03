import { describe, expect, it } from "vitest";
import { leibnizBinaryDigits, leibnizBinaryValue } from "../src/lib/leibnizBinary";
import { TRIGRAMS, trigramInfo, type TrigramName } from "../src/lib/trigrams";

describe("leibnizBinaryValue", () => {
  it("matches the two endpoints documented in week-06.mdx: Kun = 0, Qian = 7", () => {
    expect(leibnizBinaryValue("Kun")).toBe(0);
    expect(leibnizBinaryValue("Qian")).toBe(7);
  });

  it("reproduces the full sequence as the exact reverse of Shao Yong's own ordinal count (Louis 2003, fig. 3: Qian 1, Dui 2, Li 3, Zhen 4, Xun 5, Kan 6, Gen 7, Kun 8)", () => {
    const shaoYongOrder: TrigramName[] = ["Qian", "Dui", "Li", "Zhen", "Xun", "Kan", "Gen", "Kun"];
    const binaryOrder = [...shaoYongOrder].reverse();
    binaryOrder.forEach((name, value) => {
      expect(leibnizBinaryValue(name)).toBe(value);
    });
  });

  it("is a bijection onto 0-7 across all eight trigrams", () => {
    const values = TRIGRAMS.map((trigram) => leibnizBinaryValue(trigram.name));
    expect(new Set(values).size).toBe(8);
    expect([...values].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("leibnizBinaryDigits", () => {
  it("returns bottom-to-top digits that recompute leibnizBinaryValue's own weighting (bottom = 4, middle = 2, top = 1)", () => {
    const bit = (digit: "0" | "1") => (digit === "1" ? 1 : 0);
    for (const { name } of TRIGRAMS) {
      const [bottom, middle, top] = leibnizBinaryDigits(name);
      const recomputed = bit(bottom) * 4 + bit(middle) * 2 + bit(top) * 1;
      expect(recomputed).toBe(leibnizBinaryValue(name));
    }
  });

  // Qian (111) and Kun (000) are palindromic: reversing the bit order
  // produces the same digit string, so they can't catch a bug that swaps
  // top and bottom. Dui and Gen are asymmetric and checked explicitly
  // against their own line data, so a top/bottom reversal would fail here.
  it("orders digits bottom-to-top for Dui (yang,yang,yin bottom-to-top -> 1,1,0)", () => {
    expect(trigramInfo("Dui").lines).toEqual(["yang", "yang", "yin"]);
    expect(leibnizBinaryDigits("Dui")).toEqual(["1", "1", "0"]);
  });

  it("orders digits bottom-to-top for Gen (yin,yin,yang bottom-to-top -> 0,0,1)", () => {
    expect(trigramInfo("Gen").lines).toEqual(["yin", "yin", "yang"]);
    expect(leibnizBinaryDigits("Gen")).toEqual(["0", "0", "1"]);
  });
});
