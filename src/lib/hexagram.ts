export type LineValue = "yin" | "yang";

// Index 0 is the bottom line; the last index is the top line — the notation
// is always read and built bottom to top.
export type Trigram = readonly [LineValue, LineValue, LineValue];
export type Hexagram = readonly [
  LineValue,
  LineValue,
  LineValue,
  LineValue,
  LineValue,
  LineValue,
];

export function flipLine(value: LineValue): LineValue {
  return value === "yin" ? "yang" : "yin";
}

// Stacks the lower trigram at the bottom (indices 0-2) and the upper trigram
// on top (indices 3-5), each trigram keeping its own bottom-to-top order.
export function combineTrigrams(lower: Trigram, upper: Trigram): Hexagram {
  return [...lower, ...upper] as unknown as Hexagram;
}

export function splitHexagram(hexagram: Hexagram): { lower: Trigram; upper: Trigram } {
  return {
    lower: hexagram.slice(0, 3) as unknown as Trigram,
    upper: hexagram.slice(3, 6) as unknown as Trigram,
  };
}

// Derives the transformed hexagram: flips every line whose index is in
// `changingIndices`, leaves every other line untouched. Pure and
// deterministic — the result depends only on these two arguments.
export function applyChangingLines(
  hexagram: Hexagram,
  changingIndices: ReadonlySet<number> | readonly number[],
): Hexagram {
  const changing = changingIndices instanceof Set ? changingIndices : new Set(changingIndices);
  return hexagram.map((line, index) => (changing.has(index) ? flipLine(line) : line)) as unknown as Hexagram;
}

export interface PredictionResult {
  correct: boolean;
  perLine: boolean[];
}

export function comparePrediction(prediction: Hexagram, actual: Hexagram): PredictionResult {
  const perLine = prediction.map((line, index) => line === actual[index]);
  return { correct: perLine.every(Boolean), perLine };
}

// 1-indexed line numbers (line 1 is the bottom line, matching the array's
// own index-0-is-bottom convention) of every line comparePrediction flagged
// as incorrect.
export function incorrectLineNumbers(perLine: readonly boolean[]): number[] {
  return perLine.reduce<number[]>((lines, correct, index) => {
    if (!correct) lines.push(index + 1);
    return lines;
  }, []);
}

// Whether every line of a prediction has been explicitly set at least once,
// rather than left at its untouched default — used to gate reveal so a
// prediction can't be skipped while still producing feedback.
export function isPredictionComplete(touched: readonly boolean[]): boolean {
  return touched.length > 0 && touched.every(Boolean);
}
