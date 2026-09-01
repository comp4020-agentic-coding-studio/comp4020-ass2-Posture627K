import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

type Collection = "sessions" | "lectures";

const pad = (week: number) => String(week).padStart(2, "0");

function readNav(collection: Collection, week: number): string {
  const path = resolve(`dist/${collection}/week-${pad(week)}/index.html`);
  const html = readFileSync(path, "utf8");
  const match = html.match(/<nav class="week-nav"[^>]*>([\s\S]*?)<\/nav>/);
  if (!match) throw new Error(`no week-nav element found on ${collection}/week-${pad(week)}`);
  return match[1];
}

function hrefFor(nav: string, rel: "prev" | "next"): string | null {
  const match = nav.match(new RegExp(`<a href="([^"]+)" rel="${rel}"`));
  return match ? match[1] : null;
}

const linksToWeek = (week: number) => new RegExp(`/week-${pad(week)}/$`);

describe.each(["sessions", "lectures"] satisfies Collection[])(
  "%s week navigation",
  (collection) => {
    it("week 1 has a next link to week 2, but no previous link", () => {
      const nav = readNav(collection, 1);
      expect(hrefFor(nav, "prev")).toBeNull();
      expect(hrefFor(nav, "next")).toMatch(linksToWeek(2));
    });

    it("week 12 has a previous link to week 11, but no next link", () => {
      const nav = readNav(collection, 12);
      expect(hrefFor(nav, "next")).toBeNull();
      expect(hrefFor(nav, "prev")).toMatch(linksToWeek(11));
    });

    it.each(Array.from({ length: 10 }, (_, i) => i + 2))(
      "week %d has both a previous and a next link, to the adjacent weeks",
      (week) => {
        const nav = readNav(collection, week);
        expect(hrefFor(nav, "prev")).toMatch(linksToWeek(week - 1));
        expect(hrefFor(nav, "next")).toMatch(linksToWeek(week + 1));
      },
    );
  },
);
