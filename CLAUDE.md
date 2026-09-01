# Harness — Patterns of Change

Course: SLOP2462, *Patterns of Change: Taiji, Bagua, and the Visual Logic of
Transformation*. Central question: **how can a small set of visual symbols
represent change and transformation?** Full rationale, the 12-week
progression, the interaction-design comparison, the factuality source map and
the terminology glossary live in `docs/design-decisions.md` — read it before
touching content or the builder.

## Scope discipline

- This is a sign-system and semiotics course, not a survey of Chinese
  philosophy, religion, or culture. Every new page or content item should tie
  back to the visual notation and the idea of change, not to general
  background.
- Do not redesign an approved course decision (thesis, syllabus, interaction
  design) unless the current task explicitly asks for reconsideration.
- Follow the current task's scope. A later phase already being designed in
  `docs/design-decisions.md` (e.g. the 12 weeks' content, the builder, a
  finished `PROCESS.md`) is not authorization to start it — wait for it to be
  explicitly requested.

## Factuality and source discipline

Every historical or factual claim about Taiji/Yijing/Bagua content must be
tagged, explicitly or by section, with one of three evidence registers:

1. **Historically attested fact** — supported by a primary text, an academic
   monograph, a peer-reviewed article, or a museum/archaeological record.
2. **Traditional or legendary attribution** — named as legend/tradition (e.g.
   Fuxi, King Wen, Confucius as authors), never presented as verified history.
3. **Later interpretation or modern analogy** — a reception, reading, or
   popular reuse (Jungian framings, feng shui, "quantum yin-yang"), labelled
   as such.

Rules that follow from this:

- Wikipedia, Baidu Baike, and similar tertiary wikis are a discovery trail
  only. They may lead you to a source; they are never the citation itself.
- Do not state a contested scholarly position as consensus — give the broad
  range, then attribute a specific claim to the scholar who made it. See
  `docs/design-decisions.md`'s Register 1 for the worked example (Zhouyi
  dating).
- Do not conflate Zhou Dunyi's Taijitu with the later swirling symbol, or
  otherwise treat a change in a sign's visual form as if the idea just gained
  a new coat of paint — a redesigned visual form reshapes how the idea is
  communicated. See `docs/design-decisions.md`'s Register 1 for the specifics.
- When in doubt about a claim's register or sourcing, weaken the claim or cut
  it rather than publish it unqualified. Extend the source map in
  `docs/design-decisions.md` when you add a source — don't leave citations
  only in a commit message.

### Sourcing on student-facing pages

`docs/design-decisions.md` remains the one detailed research/source record.
A session, lecture, or assessment page is content, not a bibliography — it
should read like a course, not like the source map.

- Don't duplicate the full source map on a content page: no per-paragraph
  citation lists, no repeated "sources" section, no link back to the source
  map from every page.
- A contested, specific, or attribution-sensitive claim (a disputed dating, a
  named scholar's argument, an attribution likely to be challenged) must name
  the relevant scholar or source inline, clearly enough that the claim reads
  as someone's documented position, not as anonymous fact — a short mention
  ("as Shaughnessy argues...") is enough; the full citation stays in the
  source map.
- An ordinary structural fact that's already securely established (e.g. a
  trigram has three lines) doesn't need a citation on every mention —
  citation is for claims a reader could reasonably contest, not for
  everything.
- If a page would introduce a factual claim not already covered by the
  approved research in `docs/design-decisions.md`, verify it against a real
  source before writing it — don't fill the gap from memory, and don't treat
  "the page needs a sentence here" as license to invent one.

## Technical precision

Separate from the evidence registers above: a structural or technical claim
about the notation itself (a relationship between trigrams, a rule governing
lines, a property of an arrangement) can be wrong even when no historical
fact is in play. This is about the system's own structure, not sourcing.

- Don't introduce two structural terms as distinct unless their operations
  or relationships are actually distinct — if two terms describe the same
  operation, use one term for it.
- Define a structural relationship operationally wherever possible: in terms
  of what changes in the lines or structure (e.g. "flip every line"), not by
  evocative description alone.
- Don't treat a property of one specific arrangement (e.g. what sits opposite
  what on the Xiantian circle) as an intrinsic property of the trigram set
  itself, independent of arrangement.
- If a structural term is ambiguous, or isn't already defined in
  `docs/design-decisions.md`, verify or simplify it before teaching it — the
  same discipline the sourcing rules apply to historical claims, applied here
  to structure instead.

This rule exists because of a specific finding, not a hypothetical: see
`docs/design-decisions.md`'s Phase 6 note on week 5's original "inversion /
complementary opposition" pairing.

## Terminology

Use one consistent Chinese term, pinyin, and English gloss per concept across
every page — see the glossary in `docs/design-decisions.md`. Don't drift
between alternate romanizations or translations mid-course, and don't add a
new term to the glossary without sourcing its characters/gloss first.

## Voice

Write for this specific course's content, not generic LMS copy. No stock
phrases like "in this course you will embark on a journey," no manufactured
enthusiasm, and no restating a definition immediately after giving it as
padding — the AI-tell of saying the same thing twice in adjacent sentences.
A deliberate recap at the start of a later week, or a callback to an earlier
week's definition, is useful pedagogy, not padding, and stays fine. If a
sentence would read the same on a page about any other course, rewrite or cut
it.

## The interaction (builder)

The one interactive tool this course builds teaches construction (line →
bigram → trigram → hexagram) and transformation (changing lines) only.
Keep it that narrow:

- No trigram/hexagram meaning lookup, judgment texts, or divinatory glossary.
- No Xiantian/Houtian arrangement or circular layout inside the tool —
  arrangement is historical/interpretive content for its own weeks, not a
  structural property to bake into the builder.
- No taijitu or swirling-symbol imagery in the tool.
- No scores, badges, streaks, or leaderboard.
- No bundled 64-hexagram reference browser.
- No inline historical or interpretive commentary panel.

Historical and interpretive material belongs in the surrounding week's text
and pages, never inside the builder's UI.

## Starter contracts to preserve

- Keep the four content collections (`sessions`, `assessments`, `lectures`,
  `people`) and their keys — the programs/courses page and generated API
  depend on them.
- Keep the Slop identity (`astro-theme-slop` branding, `src/site-config.ts`,
  `astro.config.ts`) and the base-path handling — never hand-write a
  root-absolute link (`href="/..."`); use markdown links or the theme's
  components so the base path is respected.
- Don't hand-edit generated `dist/api/*.json`.
- When replacing a starter fragment marked `STARTER_CONTENT`, remove that
  exact marker in the same change — don't leave orphaned markers, and don't
  remove a marker without actually replacing the content it flags.
- Replace starter placeholder images deliberately (or make an explicit
  image-free choice) — don't leave them unchanged and don't delete them
  incidentally.

## Testing and verification

- Run `pnpm check` after any content or code change, before considering it
  done.
- Run `pnpm check:evidence` before anything is shipped; a failing
  `STARTER_CONTENT` or starter-image gate before content is actually replaced
  is expected, not a bug to silence.
- New spec tests go in `spec/*.test.ts` and assert contracts (what a page must
  do), not implementation details, so they survive a change of approach.
- Don't mark a check failure "expected" without checking it's actually caused
  by known unfinished starter content, not a real regression.
