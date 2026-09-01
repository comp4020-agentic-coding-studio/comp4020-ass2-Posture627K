import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);
const weeksOf = (nodes: ApiNode[]) => nodes.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));

describe("the 12-week teaching progression", () => {
  it("has exactly one session per week, weeks 1 through 12", () => {
    const sessions = byType("sessions");
    expect(sessions).toHaveLength(12);
    expect(weeksOf(sessions)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has exactly one lecture per week, weeks 1 through 12", () => {
    const lectures = byType("lectures");
    expect(lectures).toHaveLength(12);
    expect(weeksOf(lectures)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has at least one lecture that links to a slide deck", () => {
    const lectures = byType("lectures");
    expect(lectures.some((lecture) => typeof lecture.meta?.slides === "string")).toBe(true);
  });
});

describe("the assessment structure", () => {
  it("weights every piece of graded work to sum to exactly 100", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});

describe("the course record", () => {
  it("keeps the allocated code digits (462)", () => {
    expect(api.course.code).toMatch(/462$/);
  });
});
