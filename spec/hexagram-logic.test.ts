import { describe, expect, it } from "vitest";
import {
  applyChangingLines,
  combineTrigrams,
  comparePrediction,
  flipLine,
  incorrectLineNumbers,
  isPredictionComplete,
  splitHexagram,
  type Hexagram,
  type Trigram,
} from "../src/lib/hexagram";

describe("flipLine", () => {
  it("flips yin to yang and yang to yin", () => {
    expect(flipLine("yin")).toBe("yang");
    expect(flipLine("yang")).toBe("yin");
  });
});

describe("combineTrigrams", () => {
  it("stacks the lower trigram at indices 0-2 and the upper trigram at indices 3-5, each read bottom to top", () => {
    const lower: Trigram = ["yang", "yin", "yang"];
    const upper: Trigram = ["yin", "yang", "yin"];
    const hexagram = combineTrigrams(lower, upper);

    expect(hexagram).toEqual(["yang", "yin", "yang", "yin", "yang", "yin"]);
    // index 0 is the lower trigram's own bottom line; index 5 is the upper
    // trigram's own top line.
    expect(hexagram[0]).toBe(lower[0]);
    expect(hexagram[2]).toBe(lower[2]);
    expect(hexagram[3]).toBe(upper[0]);
    expect(hexagram[5]).toBe(upper[2]);
  });

  it("round-trips through splitHexagram", () => {
    const lower: Trigram = ["yin", "yin", "yang"];
    const upper: Trigram = ["yang", "yin", "yin"];
    expect(splitHexagram(combineTrigrams(lower, upper))).toEqual({ lower, upper });
  });
});

describe("applyChangingLines", () => {
  const original: Hexagram = ["yang", "yang", "yang", "yin", "yin", "yin"];

  it("flips only a single marked line", () => {
    const transformed = applyChangingLines(original, [2]);
    expect(transformed[2]).toBe("yin");
    expect(transformed.filter((_, i) => i !== 2)).toEqual(original.filter((_, i) => i !== 2));
  });

  it("leaves every unmarked line unchanged", () => {
    const transformed = applyChangingLines(original, [0]);
    for (let i = 1; i < 6; i++) {
      expect(transformed[i]).toBe(original[i]);
    }
  });

  it("transforms multiple marked lines independently", () => {
    const transformed = applyChangingLines(original, [0, 3, 5]);
    expect(transformed).toEqual(["yin", "yang", "yang", "yang", "yin", "yang"]);
  });

  it("marking every line inverts the whole hexagram", () => {
    const transformed = applyChangingLines(original, [0, 1, 2, 3, 4, 5]);
    expect(transformed).toEqual(original.map(flipLine));
  });

  it("is deterministic and doesn't mutate its input", () => {
    const a = applyChangingLines(original, [1, 4]);
    const b = applyChangingLines(original, [1, 4]);
    expect(a).toEqual(b);
    expect(original).toEqual(["yang", "yang", "yang", "yin", "yin", "yin"]);
  });

  it("derives the same result regardless of the changing set's insertion order", () => {
    expect(applyChangingLines(original, [0, 3])).toEqual(applyChangingLines(original, [3, 0]));
  });
});

describe("comparePrediction", () => {
  it("reports full correctness when the prediction matches exactly", () => {
    const actual: Hexagram = ["yin", "yang", "yin", "yang", "yin", "yang"];
    const result = comparePrediction(actual, actual);
    expect(result.correct).toBe(true);
    expect(result.perLine).toEqual([true, true, true, true, true, true]);
  });

  it("flags exactly the lines that differ from the actual result", () => {
    const actual: Hexagram = ["yin", "yang", "yin", "yang", "yin", "yang"];
    const prediction: Hexagram = ["yin", "yin", "yin", "yang", "yang", "yang"];
    const result = comparePrediction(prediction, actual);
    expect(result.correct).toBe(false);
    expect(result.perLine).toEqual([true, false, true, true, false, true]);
  });
});

describe("incorrectLineNumbers", () => {
  it("reports no lines when every line matched", () => {
    expect(incorrectLineNumbers([true, true, true, true, true, true])).toEqual([]);
  });

  it("reports the 1-indexed line numbers of every mismatch, line 1 being the bottom line", () => {
    expect(incorrectLineNumbers([true, false, true, true, false, true])).toEqual([2, 5]);
  });
});

describe("isPredictionComplete", () => {
  it("is false until every line has been touched", () => {
    expect(isPredictionComplete([true, true, true, true, true, false])).toBe(false);
  });

  it("is true once every line has been touched", () => {
    expect(isPredictionComplete([true, true, true, true, true, true])).toBe(true);
  });

  it("is false for an empty prediction (nothing touched yet)", () => {
    expect(isPredictionComplete([])).toBe(false);
  });
});
