# Process overview

## What I built

SLOP2462, *Patterns of Change: Taiji, Bagua, and the Visual Logic of
Transformation* — a twelve-week semiotics course treating Taiji, the eight
trigrams, and the sixty-four hexagrams as a notation for encoding change
itself, not just static categories. The course's structural pivot is an
interactive hexagram-construction lab in week 8, and every historical claim
about the tradition it studies is held to a fact/attribution/interpretation
discipline running through the whole site.

## How I got here

I did not let the agent write course content before it had somewhere
trustworthy to get facts from. In
[`8d4d04d7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Posture627K/commit/8d4d04d7bef847c18c76af63af6a3162c2af6302)
I had it establish three evidence registers — historically attested fact,
traditional/legendary attribution, and later interpretation — and a source
map naming specific scholars (Shaughnessy on Zhouyi dating, Birdwhistell on
Shao Yong, Louis on the history of the taijitu) before any
week of content existed. A course built on contested, easily-mythologized
history is exactly the case where an agent writing from memory will quietly
flatten a live scholarly debate into a confident paragraph; naming the
registers and the sources up front meant every later week had somewhere
specific to attribute a claim to, instead of a gap to fill from general
knowledge.

Sourcing discipline caught historical errors, but not a structural one.
While expanding the curriculum in
[`85485f5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Posture627K/commit/85485f553808229092c382bea522a81b50af2790),
I found week 5 describing "inversion" and "complementary opposition" as two
distinct trigram relationships. Review showed the two labels did not
describe two distinct arrangement-independent relationships: one of them
depended on the Xiantian arrangement rather than holding independent of any
arrangement, as claimed. No check caught this: schema validation and
`pnpm check` passed, and `check:evidence` was reporting only unrelated,
deliberately deferred submission items — none of them ask whether a
technical term is singular and well-defined — that's not a build or
citation problem. I rejected fixing week 5's prose alone, because the same
mistake could recur in any later structural claim. Instead I added a
"Technical precision" rule to `CLAUDE.md` requiring structural relationships
to be defined operationally and never treated as arrangement-independent
unless they demonstrably are, so the fix applied to the harness, not just
the one page.

For the interactive lab in
[`8759dcb7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Posture627K/commit/8759dcb77e5af5c2598bdcf7d21823d734e73a3f),
I compared a static diagram, an animation, and a builder, and rejected the
first two because a student could complete either by recognition rather
than reasoning. The builder was accepted only once it forced construction:
students toggle each line to build trigrams, mark changing lines, and must
commit a prediction for all six lines before the transformed hexagram is
revealed, with per-line correct/incorrect feedback — not shown the answer.
I also bounded it tightly, ruling out a meaning lookup, arrangement layout,
taijitu imagery, and scores, so it stayed a construction-and-transformation
tool rather than drifting into divination.

The site's build, tests, accessibility, and link checks were passing
throughout, but passing them isn't the same question as looking right. In
[`fb63555d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Posture627K/commit/fb63555d2a1ed14760d9c11fc40cb6bb5205d69b),
with `check:evidence` still failing only on the deliberately deferred
PROCESS.md items, my own manual review found the Sessions page still looked
too much like the generic starter/template once I moved beyond the
course-specific homepage hero. Automated checks could establish that the
site was technically correct; they could not judge whether the course
maintained a distinctive visual identity beyond the homepage. I kept the
required SlopU header and branding as the fixed template shell, but directed
the agent to extend the course's own visual grammar — the
line/stacking/progression motif already used for hexagrams — into Sessions,
Lectures, and Assessments.
