# Critic report — timeline-building, round 2

VERDICT: FAIL | TOTAL: 32/50 (round 1: 34/50)
SCORES: citation_formats=7, source_evaluation=5, timeline_accuracy=6,
        relationship_clarity=7, documentation_completeness=7

The drop is from errors round 1 MISSED, most present in the round-1 draft: the ev column,
the calendar slip in T-14, the Irish census claim, and the husband's identity. Round 1's
biggest gap (the sort keys) is GENUINELY CLOSED: all 27 rows verified against rules 1-4.

## BIGGEST GAP
The `ev` column tags rows `direct` because the record states something outright, not because
it answers the sheet's question; eight worked rows are wrong. It holds the lowest axis at 5
and breaks the principle the file repeats most (ref 74, 82-83, 697-699, 822-823).

## FINDINGS AND FIX INSTRUCTIONS (ref = references/timeline-building.md, tpl = templates/timeline.md)
1. WRONG, offset text ref 122-126: "Those boundary dates are Julian dates". Read as Julian, the
   bands omit Julian 29 Feb 1700/1800/1900, on which the offset has already stepped. By JDN:
   Julian 28 Feb 1900 = Gregorian 12 Mar (12 days); Julian 29 Feb 1900 = Gregorian 13 Mar (13).
   The bands join only as Gregorian dates. Fix: say the boundaries are Gregorian, and that in
   Julian dates the step falls on 29 February.
2. WRONG, T-14 (ref 735, tpl 142): 69 years counted back from a GREGORIAN burial date
   (1799-11-26) into the Julian period and keyed among Julian rows with no qualifier. Gregorian
   1729-11-27..1730-11-26 is OS 1729-11-16..1730-11-15, so "all but the last three weeks" and
   "three weeks after" (ref 766-767, tpl 142) should be TEN DAYS. Add a 3.6 rule for ages
   counted back across the calendar change, and extend rule 6 (ref 399-404): a single British
   or colonial chronology straddling September 1752 mixes regimes too.
3. WRONG, ev column: direct -> indirect on T-05, T-07, T-11, T-15 (ref 739, 741, 745, 747) and
   C-03, C-04, C-07, C-08 (section 7). None answers the sheet's question. Add after ref 83:
   "direct means the item answers the question at the top of the sheet by itself. A record that
   states something outright is not thereby direct. A derived row is never more direct than the
   row it rests on."
4. WRONG, derived rows typed info = secondary (T-06, T-12, T-15, C-08). An inference has no
   informant; "secondary" claims a second-hand one. Round 1 flagged "primary" as a category
   error; "secondary" is the other half of the same error.
5. SHALLOW, near WRONG: S4 covers the men's minutes 1728-1740 under "Joseph or Mary Teale". Before
   the marriage she was Mary Bowater, and a woman's discipline was ordinarily taken up by the
   WOMEN'S meeting. Right years, wrong name, wrong series. The completeness claim is still the
   placeholder "[how]" (ref 734, tpl 141), and the keystone argument rests on it.
6. WRONG, T-06 date_norm stacks `bet` inside `from...to`, a construct defined nowhere and forbidden
   at ref 334; and from...to means a continuous period, while the row asserts a bounded event.
   Section 8 (ref 677-678) teaches the same misuse, with a receipt date contradicting S6.
7. WRONG, T-12 is `bet ... and ...`, Y+; T-15 is `bef ...`, U. Same structure, same floor (T-11),
   different notation and prec.
8. SHALLOW, prec buckets have no operational definition; applied inconsistently (ref 205, 735,
   740, 741). Define by the width from key_lo to key_hi.
9. WRONG, era labels: 1757, 1759 and 1771 rows say "N.C." while 1752 says "Prov. N.C.".
10. WRONG, T-10 asserts "the Cray land... passed from Orange and Rowan... No move", citing only
    the act, which says nothing about the Cray land; no row locates it; a tract came from one
    parent county, not both. Guilford was created from Rowan and Orange in 1771.
11. WRONG, ref 476-477: "the 1922 destruction ... took most pre-1901 Irish census returns". The
    1922 fire took most of the 1821-1851 returns; 1861 and 1871 had been destroyed by government
    order, and 1881 and 1891 pulped during the First World War.
12. WRONG, sanity pass ref 809-813: says mother's age at Susannah's birth is "unremarkable" with no
    row giving Mary's birth; calls a 51-month marriage-to-first-birth interval unremarkable while
    flagging Susannah's own 31-month gap as "slightly wide"; then says "Nothing flags".
13. SHALLOW, identity assumed across the two examples: section 7 proves at least two Bartholomew
    Crays in Guilford by 1778, one dead by Aug 1781; section 9 ties Susannah to "Bartholomew Cray"
    (T-08) without arguing which man. The residue considers a second Susannah but not a second
    Bartholomew. Also ref 641-643 assumes A senior, B junior, only two men, contradicted by the
    cautions right after it.
14. WRONG, ref and tpl disagree on the "and" rule (tpl 155 flat ban; ref 52-53 "probably"); T-11
    "Living, and wife of Bartholomew" is two assertions.
15. SHALLOW, the `cite` column follows three conventions (bare keys, placeholders, short notes); no
    row is shown resolving key -> short note -> full note.
16. Nits: ref 188 and 741 say "13 September" / "until 14 September"; the last Julian date in
    Britain was 2 September 1752. rec_level "monthly meeting" is outside the defined vocabulary.
    Padding: failure modes 1, 2 and 4 repeat earlier sections; ref 408's last sentence repeats 349;
    tpl 90-114 restates 3.9 and has already drifted from it.

## VERIFIED CORRECT — KEEP
- Every sort key in both tables and the template (round 1's biggest gap, now closed).
- The calendar body 3.1-3.5, unaltered and correct, plus the new 3.3 rule 3.
- One notation for calculated ranges; the corrected GEDCOM CAL/EST sentence.
- The event/derived-bound splits (C-05/C-08, T-13/T-15) and C-08's sentinel reasoning.
- The four defined col values; section 5 exactly as it stands.
- Cane Creek / Orange / Alamance everywhere; the conclusion that asserts no residence county.
  Orange created 1752; Guilford from Rowan and Orange 1771; Alamance from Orange 1849.
- T-02 widened to 1728; the coverage warning at ref 770-773.
- Section 3.10: every named work is real and correctly titled.
- The template's QA items, header block, "Do not delete T-14", and the no-invented-numbers discipline.
