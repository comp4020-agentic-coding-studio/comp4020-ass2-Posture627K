// The course's own documented three-part shape (docs/design-decisions.md,
// "12-week progression"): week 1 frames the question before any notation
// exists; weeks 2-8 build the notation itself, line by line, up to the
// changing-line mechanism; weeks 9-12 turn to how the notation's meanings
// were built and read historically. Week 8 is the documented pivot between
// the second and third phases, not a member of the third.
export type CoursePhase = "framing" | "building" | "history";

export interface CoursePhaseInfo {
  key: CoursePhase;
  label: string;
  firstWeek: number;
  lastWeek: number;
}

export const COURSE_PHASES: CoursePhaseInfo[] = [
  { key: "framing", label: "Framing", firstWeek: 1, lastWeek: 1 },
  { key: "building", label: "Building the notation", firstWeek: 2, lastWeek: 8 },
  { key: "history", label: "Historical reception", firstWeek: 9, lastWeek: 12 },
];

export function phaseForWeek(week: number): CoursePhaseInfo {
  return COURSE_PHASES.find((phase) => week >= phase.firstWeek && week <= phase.lastWeek) ?? COURSE_PHASES[1];
}
