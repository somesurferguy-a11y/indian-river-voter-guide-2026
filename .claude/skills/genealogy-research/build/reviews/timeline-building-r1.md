# Critic report — timeline-building, round 1

VERDICT: FAIL | TOTAL: 34/50
SCORES: citation_formats=7, source_evaluation=7, timeline_accuracy=5,
        relationship_clarity=8, documentation_completeness=7

## BIGGEST GAP
The file states its key, notation and row conventions in section 3, then violates each
of them in nearly every worked row.

WHY: the worked examples are what a reader copies; the prose is what they skim. This is
not one slip but a pattern — eight wrong sort keys, three renderings of a calculated
range, two misapplied precision buckets, `bef` rows keyed at their ceiling, and the
flagship one-row-per-assertion rule broken in both examples. The calendar error caps the
axis at 6 but fixes in thirty seconds; this defect means the file cannot be used as
written, and it is replicated into templates/timeline.md, so both artifacts fail together.

## VERIFIED CORRECT — do not disturb in revision
The critic checked these one by one against external sources and they all hold:
the five adoption rows at 130-134 (Papal states 4->15 Oct 1582; Denmark-Norway and the
Protestant estates of the HRE 18 Feb->1 Mar 1700; Britain/Ireland/colonies 2->14 Sep 1752;
Sweden 17 Feb->1 Mar 1753; Russia 31 Jan->14 Feb 1918); France Dec 1582, the Dutch
1582/1700-01 split, Greece 1923 (136-138); the double-dating window "1 January through
24 March inclusive" (157); the Calendar (New Style) Act 1750 and the 282-day year 1751
(159-160); the Scotland-1600 trap (169-173, Privy Council act of 17 December 1599); the
Quaker numeral table in both directions (184-192); George III's fifth regnal year =
25 Oct 1764 to 24 Oct 1765 (216); Charles II reckoned from 30 Jan 1648/9 with his twelfth
year opening Jan 1659/60 (223-226); King John from Ascension Day (227); the Republican
calendar's 22 Sep 1792 epoch, 1 Jan 1806 abolition, 1871 Commune revival and month list
(240-253). Zero invented URLs, page numbers, standard numbers or record-set names.

## CONFIRMED ERRORS
1. WRONG, 143-145: "11 days from 1 March 1700 through 1799, 12 days in the 1800s, 13 days
   from 1900." The Julian-Gregorian offset steps on 1 MARCH of the century year, not
   1 January. January and February 1800 are 11 days, not 12; January and February 1900 are
   12 days, not 13. The following sentence, "you must know which century you are in",
   states the wrong control variable. Every conversion in those two windows (Orthodox
   registers, Russian records before Feb 1918, Greek records before 1923 — all of which
   this file sends the reader to) comes out a day off. Caps the axis at 6.
2. WRONG, templates/timeline.md:130: `juris_then` = "Cane Creek MM / Guilford Co. /
   North Carolina", `juris_now` = "Guilford Co., N.C., USA". Cane Creek Monthly Meeting
   (founded October 1751) is at Snow Camp in present-day ALAMANCE County, carved out of
   ORANGE County in 1849. It was never in Guilford. Self-contradicting: the reference
   file's own T-07 at 673 correctly says "Cane Creek MM / Orange Co. (created 1752; check
   the parent for 1751) / Prov. North Carolina". Two files in one domain disagree about the
   county of the same meeting, in the exact discipline the domain owns.
   It propagates: the research question (641) and the conclusion (716-717) both assert
   Susannah "died in Guilford County" while the only death/burial row, T-13 (679), carries
   `juris_then` = "Cane Creek MM / N.C." with the county silently dropped. The conclusion
   asserts a jurisdiction no row supports.
3. WRONG — the sortable key fails on its own worked rows. Eight violations across
   twenty-one example rows:
   - Type contradiction: 77 and template:30 define `key_lo` as `YYYYMMDD.SS` and all
     fourteen rows at 667-680 carry a decimal; 386 and template:100,155 instruct "key
     columns as integers". A column with a fractional part is not an integer column.
   - Rule 1 (364-366, "unknown month: 01 in key_lo, 12 in key_hi") violated: T-02 (668)
     has `from 1730-11 to 1740` with `key_hi` = 17400101; must be 17401231. Copied into
     template:131. In section 7, C-01 and C-04 (568, 571) key bare years 1762 and 1778 as
     17620401 and 17780401 while C-02 (569) keys 1771 as 17710101 — three bare years, two
     different fills, no rule stated.
   - Definition violated (360, `key_lo` = "the earliest date the assertion permits"):
     T-02 keys `from 1730-11` as 17301106 (should be 17301101); T-06 (672) keys
     `from 1751-11-03` as 17511104 (should be 17511103); T-12 (678) keys
     `bet 1791-03-02 and 1793-02-28` as 17910303 (should be 17910302). All three are
     day-shifted by one to force sort order — precisely the job `.SS` exists to do
     (372-373). Every row carries `.00`; the `.SS` mechanism is never once exercised.
   - Rule 2 (367-371, a one-sided bound takes the tightest defensible floor or sentinel
     `00000000`, and `prec = U`) violated: T-13 (679), `bef 1799-11-26`, is given
     `key_lo` = `key_hi` = 17991126 and `prec = D`. C-05 (572), `bef 1781-08`, is given
     `key_lo` = 17810801. Both sort at the LATEST permitted moment, the opposite of rule 2,
     destroying the "tightest row first" property claimed at 374.
4. WRONG, notation self-violation: a calculated range appears in three incompatible forms.
   271 has both `born bet 1747-06-05 and 1748-06-04` and `cal 1747-06-05 / 1748-06-04`;
   336 and template:63 canonise the slash form; 680 and template:130 use a fourth thing,
   `cal bet 1729-11-27 and 1730-11-26`, stacking two defined constructs into one defined
   nowhere. Line 328 forbids exactly this variation one page earlier.
5. WRONG, 349-353 and template:79-80: "are also the date modifiers in GEDCOM's date
   grammar, so a chronology written this way survives export." GEDCOM's CAL is an
   approximation on a SINGLE date; there is no `CAL <range>` and no `cal A / B`. The one
   form the file uses for its most important derived value is the one that will not export.
6. WRONG, 672-673: `[OS]` is defined (344) as "Julian as recorded". T-05 (1751) carries
   `[OS, Q]`; T-06 and T-07, dated April/June 1752, carry only `[Q]` — but Britain and its
   colonies were Julian until 14 September 1752, so those rows are Julian too. The
   qualifier is applied inconsistently on the very transition it exists to mark.
7. WRONG, one-row-per-assertion (the file's own rule at 69) broken in both worked examples:
   T-13 (679) fuses burial and derived death bound into one row (`assertion` = "Died, on or
   shortly before burial", `date_norm` = `bef 1799-11-26`), so the burial — a dated event,
   primary information, directly asserted by the register — never gets its own row. C-05
   (572) does the same with the administration grant.
8. WRONG, 668: the negative-evidence resolution at 703-710 turns on "a complete run of
   those minutes for 1728 to 1740" because the suspect birth window is Nov 1729 to Nov 1730.
   But T-02 as tabulated is `from 1730-11 to 1740` — it BEGINS AFTER the marriage and
   excludes the entire pre-marital window the argument rests on. The keystone proof in the
   keystone example is not supported by the row it cites.
9. WRONG, prec buckets: 79 defines `Y+` as multi-year and `U` as unbounded on one side.
   T-12 (678) spans 1791-1793 and is tagged `Y`; T-13 is a `bef` tagged `D`. Since 376
   makes "filter to Y+ and U" the mechanism generating the research plan, both rows drop
   out of the reader's to-do list — silently disabling a feature the file advertises.

## SHALLOW / ABSENT
10. FamilySearch Research Wiki — one of the two benchmarks the BRIEF binds every file to —
    appears ZERO times. This compounds a real gap: the file says "look it up, do not assume"
    seven times (205, 232, 255, 316, 424, 505, 588) and names no resource once — no county
    boundary reference for the formation chains it demands at 423, no regnal-year table, no
    movable-feast table, no Republican converter, no perpetual calendar.
11. No row in the only full worked chronology carries a citation. The section 9 header (665)
    renames the column `src`, contradicting section 2 and the template; S1-S11 (646-661) are
    informal descriptions with no repository and no provenance chain. Meanwhile template:140
    makes "every row has a `cite`" a hard QA gate and 783 says a row without one "is a
    rumour", and 758 claims such a chronology "converts into a proof summary almost without
    rewriting".
12. `src_class` is in the column set (89) and template (42) but absent from the section 9
    table entirely, so original/derivative/authored is never applied in a worked row. T-06
    (672) tags an INFERENCE ("Migration in progress", derived from S5 and S6) as
    `info = primary` — a category error. T-10 (676) tags a statute's assertion of its own
    enactment as `info = secondary`. The informant for "aged 69" is never identified in T-14
    despite 286 making that the rule.
13. The section 9 table has NO `notes` column, though 93 puts the arithmetic, the bound
    justification and the completeness claim there, and template:142 gates on "every derived
    date shows its arithmetic in notes". The two things the checklist checks hardest, `cite`
    and `notes`, are the two its worked example never shows.
14. Section 7 step 3 (553) says every row goes into A / B / unassigned; the table at 568-573
    uses `?` and `both`, a fourth and fifth value, neither defined. That table carries only
    five columns, below the file's own stated minimum (112).
15. T-14's derived range does not widen for the burial lag, though 305 says death precedes
    burial by days. Nothing says why not.

## VERIFIED CORRECT ARITHMETIC — keep
268-272, "aged 22" on 1770-06-04 -> `bet 1747-06-05 and 1748-06-04`: correct, both
boundaries. T-14 (680), "aged 69" at burial 1799-11-26 -> 1729-11-27 to 1730-11-26:
correct. The sanity pass (731-735): married at 22, first child at 24, 31 months
marriage-to-birth, 27 months T-03 to T-04, all exact. "Three weeks" at 704: exact.

## FIX INSTRUCTIONS
1. Lines 143-145: replace with "11 days from 1 March 1700 through 28 February 1800, 12 days
   from 1 March 1800 through 28 February 1900, 13 days from 1 March 1900." Change the next
   sentence from "you must know which century you are in" to "you must know which side of
   1 March of the century year you are on — the offset steps on 1 March, not on 1 January."
2. templates/timeline.md:130: `juris_then` -> "Cane Creek MM / Orange Co. / North Carolina";
   `juris_now` -> "Alamance Co., N.C., USA" (Alamance formed from Orange, 1849). Add to that
   row's notes: "Cane Creek MM is in present-day Alamance Co.; in 1799 the ground was Orange Co."
3. Reference 640-641 and 715-717: no row supports Guilford. Either add a sourced residence row
   for Guilford, or change the conclusion to "died on or shortly before 26 November 1799 and
   was buried at Cane Creek Monthly Meeting, Orange County, North Carolina; her residence at
   death is not established by this record set" and add it to the residue list at 719-726.
4. Resolve the key type contradiction. Recommended: redefine `key_lo` as a ten-digit integer
   `YYYYMMDDSS` (so 1735020800), drop the decimal everywhere, keep "key columns as integers".
   Make 77, 386 and template 30, 86, 100, 155 agree.
5. Re-derive every key in sections 7 and 9: T-02 key_hi 17400101 -> 17401231; T-02 key_lo
   17301106 -> 17301101; T-06 key_lo 17511104 -> 17511103 with SS ordering it after T-05;
   T-12 key_lo 17910303 -> 17910302 likewise; T-13 key_lo -> the floor from T-11 (last row
   showing her living) with notes "floor = T-11" and prec D -> U; T-12 prec Y -> Y+; C-05
   key_lo 17810801 -> the defensible floor or 00000000; C-01 17620401 and C-04 17780401 ->
   17620101 and 17780101, or state the assessment-date fill rule in 3.9 and apply it to C-02
   too. Apply the same corrections to template:131.
6. Collapse the three calculated-range notations to one. Delete `cal A / B` from 336 and
   template:63; restrict `cal` to a single calculated date; write a derived range as
   `bet A and B` with "calculated from age at X; see notes" in notes. Fix 271, 680 and
   template:130 to match.
7. Lines 349-353 and template:79-80: replace the GEDCOM claim with "abt, bef, aft, bet...and,
   from...to, cal and est map to GEDCOM's date modifiers, but GEDCOM's CAL and EST apply to a
   single date only — a calculated RANGE has no GEDCOM equivalent and exports as BET...AND
   with the calculation demoted to a note. Check what survived a round trip."
8. Add `[OS]` to T-06 and T-07 (Britain and colonies were Julian until 14 September 1752, so
   April/June 1752 dates take `[OS, Q]`, matching T-05). Add one sentence to 3.3 saying so.
9. Split record-event rows from derived-bound rows per the file's own rule at 69. T-13 becomes
   two rows: burial, `1799-11-26 [Q]`, prec D, info primary, ev indirect; and death,
   `bef 1799-11-26`, prec U, info secondary, ev direct, notes "bound from the burial entry;
   lag days". Same for C-05: grant of administration `1781-08`, and death `bef 1781-08`.
10. T-14 notes: "age stated at burial; death precedes burial by days, so the true range opens
    a few days earlier. Not material to the five-year conflict."
11. Line 668 / template:131: widen T-02 to `from 1728 to 1740` (keys 17280101 / 17401231) so it
    covers the pre-marital window the argument at 703-710 depends on, matching S4's stated run.
12. Section 7 (553, 566-573): either define `both` and `?` as legitimate values alongside
    A / B / unassigned, or retag C-01 and C-03 as unassigned and C-02 and C-04 as A+B. Add
    key_hi, juris_then, info, ev and cite to that table, or label it "excerpt; full column set
    at section 2".
13. Add `notes` and `cite` columns to the section 9 table and fill them for at least T-02, T-13
    and T-14. The file currently fails its own QA checklist.
14. Add a "where to look it up" subsection naming real finding aids for each of the seven
    lookups demanded at 205, 232, 255, 316, 424, 505, 588: county formation chains,
    regnal-year tables, movable-feast tables, Republican calendar converters, perpetual
    calendars, colonial tithable statutes, court term sitting dates. Naming a well-known real
    reference is not inventing one.
15. Cite the FamilySearch Research Wiki at least once — it is a bound benchmark and appears
    nowhere. Its jurisdiction and county pages are the natural home for instruction 14's
    boundary-chain lookup; its evaluate-and-record step anchors section 10.
16. Cut roughly 65 lines to reach the ceiling: delete failure modes 2, 4, 5 and 8
    (768-770, 774-778, 779, 785-786), which restate 3.1, 3.9.7, section 2 and section 4 and add
    nothing; compress section 1's four bullets (26-36) to two sentences.

## KEEP
- The whole calendar body 3.1-3.5 (122-261) minus the 143-145 sentence. Every fact verified.
- Section 5 entire (488-517): "flags that trigger scrutiny, none of them is proof in either
  direction", the base-rate paragraph, and "Impossibility separates people; possibility never
  joins them." The best-executed requirement in the domain. Do not soften or shorten.
- Section 3.6's age arithmetic (268-297), "Overlap, do not average", the 30-day-month warning.
- Section 3.7's bounds table (303-323) and the three-rows-from-one-deed observation.
- Section 4: boundary change as its own row with the statute cited (428-430), record loss as a
  property of jurisdiction not family (434-457), the up/sideways/different-creator remedy.
- The negative-evidence vs negative-search-result distinction, all three statements.
- Section 7's "Junr." note, "two is a floor" (592-599), and "Do not delete T-14" (728-729).
- templates/timeline.md's QA checklist (136-155) and the header block.
- The no-invented-numbers discipline throughout.
