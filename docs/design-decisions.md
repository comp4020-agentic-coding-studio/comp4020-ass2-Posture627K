# Design decisions

Running record of the design decisions made before any course content was
built, so they don't have to be re-derived from chat history. This is a
planning/research document, not the submission account — that's
`PROCESS.md`, written later against real commits.

Status: Phases 1–3 below are settled and shouldn't be redesigned without an
explicit request. Phase 4 (this harness) is in progress. Phases 5+ (writing
the 12 weeks, building the interaction, replacing starter content) haven't
started.

## Terminology glossary

One consistent Chinese term, pinyin, and English gloss per concept — use
these forms everywhere; don't introduce alternate romanizations or
translations without updating this table first. Characters and glosses below
are the ones already established in Phase 1's research, not new coinages.

| Chinese | Pinyin | English |
|---|---|---|
| 陰 / 陽 | yīn / yáng | yin / yang — the two line values (broken / unbroken) |
| 爻 | yáo | line — the minimal unit of a trigram or hexagram |
| 卦 | guà | trigram (3 lines) or hexagram (6 lines, a stacked pair) |
| 太極 | Tàijí | Taiji — the first term in the *Xici*'s generative sequence; rendered variously "Great Ultimate" or "Supreme Polarity" in scholarship, no single gloss is settled here |
| 兩儀 | Liǎngyí | Liangyi — "the Two Modes": yin and yang as the first duality |
| 四象 | Sìxiàng | Sixiang — "the Four Images": the four bigrams in the cosmogonic sequence. Distinct from the unrelated Four Symbols direction-guardian tradition, which shares the same English name — don't conflate them |
| 八卦 | Bāguà | Bagua — the Eight Trigrams |
| 先天八卦 | Xiāntiān Bāguà | Xiantian — the "Before/Prior Heaven" arrangement (Shao Yong, Song dynasty) |
| 後天八卦 | Hòutiān Bāguà | Houtian — the "Later/Posterior Heaven" arrangement (correlative, grounded in the *Shuogua zhuan*) |
| 變爻 | biànyáo | changing line / moving line — a line whose value (6 or 9) flips it to its opposite, producing a transformed hexagram |
| 周易 | Zhōuyì | Zhouyi — the core divinatory text, pre-commentary layer |
| 十翼 | Shíyì | Ten Wings — the commentary layer added across the Warring States–Han, canonized with the Zhouyi as the *Yijing* under Han Wudi (136 BCE) |
| 易經 | Yìjīng | Yijing / I Ching — the canonized classic (Zhouyi + Ten Wings) |
| 說卦傳 | Shuōguà zhuàn | Shuogua zhuan — "Discussion of the Trigrams," one of the Ten Wings; source for the trigram–direction–season–family correlations |
| 繫辭 | Xìcí | Xici — "Great Treatise"/"Appended Statements," one of the Ten Wings; source for the Taiji → Liangyi → Sixiang → Bagua sequence |
| 太極圖 | Tàijítú | Taijitu — "diagram of the Taiji." Names more than one historical image (Zhou Dunyi's 11th-century five-tier diagram and the later swirling symbol) — never use as if it names a single fixed picture |
| 太極圖說 | Tàijítú Shuō | Taijitu shuo — Zhou Dunyi's 11th-century text explaining his diagram |
| 無極 | Wújí | Wuji — the tier above Taiji in Zhou Dunyi's diagram; "Non-Polar"/"Ultimateless" |
| 太極拳 | Tàijíquán | Taijiquan / Tai Chi Chuan — the martial art (Chen Wangting era, ~17th century); named after the philosophical term, not its origin — don't conflate the two histories |

Adding a new term follows the same rule as any other factual claim in this
document: source it before it goes in.

## Phase 1 — Factual boundary and source map

Central question: **how can a small set of visual symbols represent change
and transformation?** Working title: *Patterns of Change: Taiji, Bagua, and
the Visual Logic of Transformation.*

Three evidence registers used throughout:

1. Historically attested fact
2. Traditional or legendary attribution
3. Later interpretation or modern analogy

### Register 1 — historically attested fact

- The *Zhouyi* is a layered, composite text: a Western Zhou divinatory core,
  later overlaid with the Ten Wings commentary (compiled across the Warring
  States into the Han), canonized under Han Wudi in 136 BCE. Its precise date
  is **not settled** — proposals span roughly the 10th–4th centuries BCE.
  Edward Shaughnessy's specific ~9th-century BCE dating (*The Composition of
  the Zhouyi*; *Before Confucius*, SUNY Press) is his own argument, contested
  by other scholars — attribute it to him by name, never present it as
  consensus.
- The line/trigram/hexagram structure and the *Xici*'s generative sequence
  (Taiji → Liangyi → Sixiang → Bagua) are directly textually attested.
- The *Shuogua zhuan* (Ten Wings) is the textual source assigning each
  trigram a direction, season, family role, and natural image — the raw
  material later systematized into named diagrams.
- Zhou Dunyi (1017–1073), *Taijitu shuo*: a five-tier diagram of concentric
  circles (Wuji → Taiji → yin-yang duality → Five Phases → the myriad
  things) — **not** the swirling black-and-white symbol. Source: Joseph
  Adler's translation (Kenyon College) of the *Taijitu shuo* with Zhu Xi's
  commentary.
- Shao Yong (1011–1077) built the Xiantian numerological system as a
  Song-dynasty construction, per Anne Birdwhistell, *Transition to
  Neo-Confucianism: Shao Yung on Knowledge and Symbols of Reality* (Stanford
  UP, 1989) — not a transmission from antiquity.
- Documented Leibniz–Bouvet exchange: Leibniz drafted binary arithmetic
  independently by 1679 (*De Progressione Dyadica*); Bouvet sent Shao Yong's
  Xiantiantu in a letter dated 4 November 1701; it reached Leibniz 1 April
  1703; Leibniz published "Explication de l'Arithmétique binaire" within
  about a week. Sources: the *Journal of East-West Thought* article on this
  question; Franklin Perkins, *Leibniz and China: A Commerce of Light*
  (Cambridge UP, 2004). The degree of Leibniz's independence is a genuine,
  live scholarly debate — present it as such. Do not add the "erroneous
  diagram" claim from an earlier draft of this research; it wasn't solidly
  sourced.
- The swirling black-and-white taijitu is later than Zhou Dunyi's diagram,
  with documented Ming-era diffusion (appearing in the Ming Daozang,
  compiled 1445), reaching Western popular culture as "the yin-yang symbol"
  in the 20th century.

### Register 2 — traditional or legendary attribution

- Fuxi as inventor of the trigrams and source of the Xiantian arrangement
  (via the river dragon-horse/turtle legend) — a culture-hero story, not a
  verifiable event or person.
- King Wen and the Duke of Zhou as authors of the *Zhouyi*'s judgments and
  line texts — traditional anchor-story; modern scholarship treats the text
  as composite and accreted.
- Confucius as author of the Ten Wings — traditional, not accepted as literal
  authorship by modern scholarship.
- Specific Ming-dynasty naming of swirling-diagram variants (e.g. credited to
  a 14th-century figure, simplified by a 16th-century one) — repeated across
  secondary sources but not yet confirmed against the strongest available
  peer-reviewed source (François Louis, "The Genesis of an Icon: The 'Taiji'
  Diagram's Early History," 2003). Treat as a lead to verify against Louis
  before teaching it as settled.

### Register 3 — later interpretation or modern analogy

- Han-dynasty numerological (*xiangshu*) and Wang Bi's philosophical (*yili*)
  interpretive traditions — real, documented interpretive layers, not the
  core text's original meaning.
- The Wilhelm/Baynes translation's Jungian-inflected framing — an influential
  20th-century reception, not a neutral rendering.
- The popular "the I Ching predicted binary computing" story — overstates
  the real, narrower, contested Leibniz–Bouvet episode.
- Feng shui's use of the Houtian arrangement, quantum-physics analogies to
  yin-yang (Capra and successors), TCM's yin-yang theory — real downstream
  cultural uses, not evidence about the sign system's origin, and not claims
  this course validates. Michael R. Matthews (UNSW), "Feng Shui: Teaching
  About Science and Pseudoscience" is the source for the critical framing
  itself.

### Compact source map

| Topic | Strongest source |
|---|---|
| Zhouyi/Ten Wings textual layering | Richard J. Smith, *Fathoming the Cosmos and Ordering the World* (Univ. of Virginia Press, 2008) |
| Zhouyi specific dating argument | Edward Shaughnessy, *Before Confucius* (SUNY Press) — contested, attribute by name |
| Trigram–direction–season–family correlations | *Shuogua zhuan*, in the Wilhelm/Baynes translation (Princeton UP, Bollingen Series) |
| Xiantian / Shao Yong | Anne Birdwhistell, *Transition to Neo-Confucianism* (Stanford UP, 1989); Zhu Xi's *Yixue qimeng* (1186, trans. Joseph Adler); Fung Yu-lan (trans. Derk Bodde), *A History of Chinese Philosophy* vol. II (Princeton UP) |
| Houtian arrangement's exact positions | *Shuogua zhuan* ch. 5; Wilhelm/Baynes, Shuo Kua ch. 5 and arrangement diagram; James Legge, *The Yî King* (SBE vol. XVI), Appendix V and introduction comparison table |
| Shao Yong's own numbering vs. the later binary-count reading | Franklin Perkins, *Leibniz and China* (Cambridge UP, 2004); *Journal of East-West Thought* Leibniz–Bouvet literature — the binary reading is a later, reversed reinterpretation, not Shao Yong's own order |
| Zhou Dunyi's original Taijitu | Joseph Adler (Kenyon College), translation of the *Taijitu shuo* |
| Swirling taijitu's emergence | François Louis, "The Genesis of an Icon" (2003) — verify Ming-era attribution details against this before teaching them |
| Leibniz–Bouvet | *Journal of East-West Thought* article; Franklin Perkins, *Leibniz and China* (Cambridge UP, 2004) |
| Yin-yang as philosophical concept | Internet Encyclopedia of Philosophy, "Yinyang"; Stanford Encyclopedia of Philosophy |
| Oracle bones / material culture | British Museum, Metropolitan Museum of Art collection records |
| Taijiquan vs. the philosophical term | Britannica, "Tai chi chuan"; Smithsonian National Museum of Asian Art |
| Pseudoscience/media-literacy framing | Michael R. Matthews (UNSW), "Feng Shui: Teaching About Science and Pseudoscience" |

Wikipedia, Baidu Baike, and Grokipedia were used only to locate the above —
none of them are a load-bearing citation.

## Phase 2 — Course architecture

Thesis: a visual sign system can represent change itself, not just static
categories, when its minimal unit is binary and its combination rules are
strictly generative (line → bigram → trigram → hexagram, with changing lines
encoding transition into the notation). The system's *meaning* was built up
in separable historical layers, frequently confused with the notation itself
in popular explanations; the course keeps these as two distinct objects of
study.

Learning outcomes:

1. Construct and read the line → bigram → trigram → hexagram notation and
   explain how compositional rules generate its expressive range.
2. Explain how transformation is encoded structurally (changing lines), not
   just thematically.
3. Compare Xiantian and Houtian as two organizing logics over the same eight
   trigrams.
4. Distinguish historically attested fact from traditional attribution from
   modern reinterpretation, for at least three specific cases.
5. Critically evaluate a modern popular claim (Leibniz/binary, feng shui,
   "quantum yin-yang") against primary or academic sourcing.
6. Apply the course's toolkit to an unfamiliar small sign system outside this
   course's content.

12-week progression:

1. **Signs That Move — Framing the Question.** What does a sign system need
   to represent change, not just categories? Establishes the semiotics frame
   using comparison cases (binary code, musical notation, traffic signals)
   before any Chinese-specific content.
2. **One Splits into Two — Taiji and the Yin-Yang Line.** The smallest visual
   distinction that can carry meaning. Presents Taiji as the first term in
   the documented Taiji → Liangyi → Sixiang → Bagua sequence, not as a single
   cosmological interpretation — and deliberately withholds any taijitu image
   (reserved for week 10).
3. **Doubling the Line — Bigrams and the Logic of Combination.** Combinatorial
   growth to four bigrams; first practice telling apart the numerological
   "sixiang" from the unrelated Four Symbols/direction-guardian tradition.
4. **Eight from Three — Constructing the Bagua.** Full trigram construction
   and the Shuogua zhuan's attributed natural images.
5. **Opposites and Neighbors — Relationships Among the Trigrams.** The
   trigram set's one arrangement-independent structural relationship —
   line-inversion (flip every line) — and the four pairs it produces.
   (Originally described as two relationships, "inversion" and "complementary
   opposition"; simplified in Phase 6 — see the note below.)
6. **An Inner Order — The Xiantian Arrangement.** Shao Yong's Song-dynasty
   symmetrical ordering, sourced to Birdwhistell rather than the Fuxi legend
   alone.
7. **An Outer Order — The Houtian Arrangement and Correlative Cosmology.**
   Contrasted against Xiantian; grounded in the Shuogua zhuan as the primary
   source for the correlations.
8. **Lines That Move — Hexagrams and Changing Lines.** Hexagrams as stacked
   trigram pairs; the changing-line mechanism as the direct technical answer
   to the central question. Pivot point from constructing signs to how their
   meanings developed historically.
9. **From Diagram to Text — the Zhouyi and Its Layers.** The text's layered
   composition and its contested dating, handled per the register rules
   above.
10. **One Symbol, Two Histories — Zhou Dunyi's Taijitu and the Swirling
    Symbol.** Distinguishes the two diagrams as historically separate images,
    and centers on how the change in visual form reshaped how the idea was
    communicated — not that the form merely changed while the idea stayed
    fixed.
11. **Crossing Worlds — Leibniz, Binary Arithmetic, and Global Afterlives.**
    The documented exchange vs. the popular overstated version, including the
    live independence debate.
12. **Reading Symbols Critically — Capstone.** Applies the full toolkit to
    modern claims and, as a transfer task, to a sign system outside the
    course.

Alternative considered and rejected: a strictly chronological structure
(archaic origins → Zhouyi/Ten Wings → Han correlative cosmology → Song
diagrams → Ming popularization → Leibniz → modern pseudoscience). Rejected
because it front-loads unresolved dating disputes before students have any
grip on the notation being dated, risks becoming a general history-of-Chinese-
thought survey, and delays the changing-line/transformation mechanism — the
direct answer to the central question — until nearly the end.

## Phase 3 — Interaction design

Compared: a static explanatory diagram, an animated explanation, and an
interactive builder/transformation lab. The builder was chosen — not
accepted by default — because it's the only format that is falsifiable: a
student can only complete it by correctly reasoning through binary
composition and the changing-line rule, rather than recognizing a pattern
they were shown. Static diagrams and short animations still have a role as
reference material and an on-ramp, but the builder is the course's one
central interactive experience.

Recommended interaction:

- **Learning goal:** construct a trigram or hexagram from the binary line
  rule, and correctly apply the changing-line rule to derive a new hexagram.
- **User's actions:** toggle each line (bottom-to-top) to build a trigram;
  stack two trigrams into a hexagram; mark line(s) as changing; predict the
  transformed hexagram before revealing it; trigger the transform.
- **On screen:** the line stack rebuilds live as each toggle is made; on
  transform, the original and the new hexagram are shown side by side (not
  replaced), with the changing line(s) flagged in both.
- **Feedback:** immediate and rule-based — correct/incorrect against the
  student's prediction, with the specific line(s) they got wrong highlighted.
  No scoring, no interpretation of what a hexagram "means."
- **Week mapping:** week 2 (single-line toggling), week 3 (two-line
  combination), week 4 (full trigram construction), week 8 (full
  functionality — hexagram stacking and the changing-line transform, that
  week's central activity). Not used in weeks 6–7 or 9–12 — those are
  historical/critical-reading content.
- **Deliberately excluded:** see `CLAUDE.md`'s "The interaction (builder)"
  section for the standing exclusion list this recommendation produced.

**Final scope note (post-build):** the progressive weeks 2/3/4 embeddings
above were the original recommendation, not what shipped. Once the full
twelve-week curriculum and the week-8 builder both existed, reconsidering the
progressive version against the finished content showed it added a
partially-capable copy of the same tool three weeks before its central use,
with no independent learning goal of its own — weeks 2–4 already teach line,
bigram, and trigram construction directly through their session content and
worked examples, without needing an on-screen tool to do it. Week 8 is also
where the progressive plan's own capstone step (full hexagram stacking, the
changing-line prediction, and side-by-side transformation feedback) lives,
and it's the first point where students have enough prior material — lines,
trigrams, and the changing-line rule itself — for that feedback to mean
anything. The final build keeps the interactive lab exclusively at week 8 for
that reason, rather than introducing it in a reduced form earlier. This
supersedes the week mapping above for weeks 2–4; the week-8 entry in that
mapping, and everything else in this Phase 3 comparison, still holds.

## Phase 6 note — a technical-precision finding, not a historical one

Week 5 originally described two apparently distinct structural relationships
among the trigrams — "inversion" and "complementary opposition" — both
presented as holding independent of any arrangement. Review during Phase 6's
content expansion found that, for a two-valued three-line trigram, there is
only one line-by-line "opposite" operation (flip every line); the second
term either duplicated it under another name, or actually referred to which
trigrams sit diametrically opposite each other on the Xiantian circle — a
property of that specific arrangement, not an arrangement-independent one.

The content was simplified to a single, well-defined relation — line-inverse
— with the Xiantian-circle placement fact moved to week 6, where it belongs
as a property of that arrangement (see the updated week 5 and week 6
descriptions above, and the live pages in `src/content/sessions/`).

This was not a failure of the factuality/evidence-register rules — no
historical claim was wrong. It was a gap in technical precision: an
underdefined structural term passed every existing check (schema validation,
`pnpm check`, `check:evidence`) because those checks don't ask whether a
technical term is singular and well-defined. `CLAUDE.md`'s "Technical
precision" section was added in response to this specific finding.

## Phase 7 note — Xiantian/Houtian arrangement verification

The Phase 4/5 audit found the repository's existing description of the
Xiantian arrangement insufficient to build an exact diagram, and (separately)
factually imprecise: it described the arrangement itself as running "from
Kun to Qian ... in binary-counting order, 0 to 7," which misattributes a
later reading to Shao Yong's own construction. A read-only external
verification pass resolved both problems. Findings, kept as three separate
claims per `CLAUDE.md`'s evidence registers:

1. **The Xiantian arrangement's eight positions** (historically attested,
   Register 1). Confirmed against Zhu Xi's *Yixue qimeng* (1186; trans.
   Joseph Adler), Anne Birdwhistell's *Transition to Neo-Confucianism:
   Shao Yung on Knowledge and Symbols of Reality* (Stanford UP, 1989), and
   Fung Yu-lan (trans. Derk Bodde), *A History of Chinese Philosophy*, vol.
   II (Princeton UP), all of which draw the same circle, south at the top:
   Qian S, Dui SE, Li E, Zhen NE, Kun N, Gen NW, Kan W, Xun SW. Opposite
   pairs — Qian/Kun, Dui/Gen, Li/Kan, Zhen/Xun — are each other's line-inverse
   (week 5), which is what "symmetrical" means for this arrangement. Encoded
   in `src/lib/arrangements.ts` (`XIANTIAN_ARRANGEMENT`) and checked in
   `spec/arrangements.test.ts`.
2. **Shao Yong's own ordinal numbering of this arrangement** (historically
   attested, Register 1): Qian (1) through Kun (8), "pure yang" first. This
   is a separate fact from the arrangement's spatial layout above — it is a
   count Shao Yong assigned, not a further geometric claim.
3. **The binary-count reading (Kun 0 through Qian 7)** (later interpretation,
   Register 3): documented as a European reading — most notably in Jesuit
   missionary Joachim Bouvet's correspondence with Leibniz — applied to the
   same eight positions roughly two centuries after Shao Yong, and running
   in the *reverse* order of his own numbering, not a continuation of it.
   Sourced via Franklin Perkins, *Leibniz and China* (Cambridge UP, 2004);
   the specific "reverse of Shao Yong's order" framing follows the *Journal
   of East-West Thought* Leibniz–Bouvet literature already in the Phase 1
   source map. Week 6's prose previously collapsed claims 1 and 3 together;
   it has been corrected to state claim 1 as the arrangement's own geometry,
   claim 2 as Shao Yong's numbering, and claim 3 explicitly as a later,
   retrospective reading distinct from and reversed relative to claim 2 (see
   `src/content/sessions/week-06.mdx`).

4. **The Houtian arrangement's eight positions** (historically attested,
   Register 1, grounded in Register-1-sourced correlations already in the
   Phase 1 map). Confirmed against the *Shuogua zhuan* itself (ch. 5),
   Wilhelm/Baynes (*The I Ching or Book of Changes*, Shuo Kua ch. 5 and its
   accompanying arrangement diagram), and James Legge, *The Yî King*
   (Sacred Books of the East, vol. XVI) — its introduction's comparison
   table and Appendix V both give the same layout, south at the top: Li S,
   Xun SE, Zhen E, Gen NE, Kan N, Qian NW, Dui W, Kun SW. Its opposite pairs
   — Li/Kan, Kun/Gen, Dui/Zhen, Qian/Xun — are a different set from
   Xiantian's line-inverse pairs (only Li/Kan coincides); no Five Phases,
   colour, animal, organ, or feng shui correspondence was added beyond what
   the *Shuogua zhuan*/Wilhelm text already states for Li (summer), Kan
   (winter), and Dui (midautumn) — the only three correlations week 7 or
   `HoutianFigure.astro`'s legend name. Encoded in `src/lib/arrangements.ts`
   (`HOUTIAN_ARRANGEMENT`) and checked in `spec/arrangements.test.ts`.

Both arrangements are shown south-at-top in the new figures
(`XiantianFigure.astro`, `HoutianFigure.astro`) because every historical
diagram found in verification uses that orientation — redrawing north-up
would be a silent modern convention substituted for the sourced one. The two
components share only arrangement-agnostic structural utilities
(`CompassPosition`, `OPPOSITE_POSITION`, `Arrangement`) in
`src/lib/arrangements.ts`; they do not share a generic "arrangement meaning"
abstraction, since Xiantian's and Houtian's respective notions of "opposite"
are not the same relation (see the Phase 6 note above on the same category
of mistake).

## Open questions for later phases

- Whether week 3's "sixiang ambiguity" aside needs its own short page or
  fits as a callout within week 3's main content.
- Which specific starter content collection entries map onto which week
  first, and in what order they get replaced.
- Exact scope of the builder's UI chrome (framework/library choice) — not
  decided; deferred to the implementation phase.
