# Critic report — documentation-standards, round 1

VERDICT: FAIL | TOTAL: 31/50
SCORES: citation_formats=7, source_evaluation=6, timeline_accuracy=6,
        relationship_clarity=6, documentation_completeness=6

Three axes are CAPPED at 6 by rubric rule (a confidently stated falsehood or a
fabricated locator caps the axis regardless of the rest).

## BIGGEST GAP
Line 38 calls a death certificate's parent names "indirect evidence" — the exact
conflation section 1.4 exists to prevent — capping the axis this file owns.

WHY: it is a stated falsehood in the summary sentence of the section that owns
source_evaluation, so it caps that axis at 6 no matter how good 1.2-1.4 are, and
they are excellent, so one clause is costing three points. It also teaches the
single most common error in the field (that weak information makes evidence
indirect) to a reader who may never reach line 162, where the file contradicts
itself and gets it right.

## CONFIRMED ERRORS

1. WRONG, line 38: "direct evidence of the death date and **indirect evidence of
   the parents**". A death certificate naming the father is DIRECT evidence of
   parentage carried by SECONDARY information. The file says so itself at 162-164:
   "#10 is direct in form but secondary information at two removes ... Direct
   evidence of weak information is still weak."
2. WRONG, line 133: decedent called "a **great-granddaughter**" of a couple married
   14 November 1821 (line 330); she was born 11 June 1848 (line 148). Three
   generations in 27 years is impossible. With "Father: Jesse Cray" (151) she is a
   GRANDdaughter. A file teaching generation-spacing plausibility fails it in the
   one sentence tying its two examples together.
3. WRONG x3 — fabricated internal locators in the shipped templates:
   - templates/proof-argument.md:175 points to "section 2.6" for the GPS self-audit;
     the self-audit is section 2.1 at line 192. There is no 2.6.
   - templates/research-report.md:13 points to "section 5.3"; section 5 has no
     subsections. Report vs compiled genealogy is at line 585.
   - templates/research-report.md:185 points to "section 7.5"; section 7 has no
     subsections. File naming is at line 688.
   A pointer to a location that does not exist is the same failure class as an
   invented page number. One sends the reader to the file's most important
   checklist by a number that does not exist.
4. WRONG/ABSENT: the proof-argument anatomy (310-323) has seven parts and none is
   research extent, so the worked argument (325-468) has no scope section. The
   proof SUMMARY gets a Scope paragraph (286-288); the proof ARGUMENT, the more
   demanding form, does not. The file's own test at line 180 requires "the write-up
   names the sources searched, nil results included", and 297-298 calls the Scope
   paragraph "the reasonably-exhaustive element made visible".
   templates/proof-argument.md is BETTER than its reference file here (it has
   "section 8 Sources searched without result" at 160-169), and line 903 then
   miscounts it as "the seven-part skeleton".
5. WRONG, line 435: concludes "Susannah was Jesse Teale's **daughter in law** and in
   the eyes of the county" — in a passage whose subject is distinguishing a natural
   daughter from a step-daughter. In period American records "daughter-in-law"
   frequently MEANT step-daughter; unhyphenated it reads as the modern term for a
   son's wife. The one sentence a reader will quote is ambiguous about the
   relationship.
6. WRONG by omission, lines 364-368: the seven-equal-shares inference excludes only
   representation. Under North Carolina's act of distributions a widow took a
   CHILD'S PART where there were more than two children, so seven shares is equally
   consistent with a widow and six children. The argument never asks whether Jesse
   Teale left a widow in 1838, though line 433 shows the writer considered his wife
   for another purpose. The load-bearing inference has an unexcluded alternative.
7. WRONG (internal contradiction), line 332-333: Background states Susannah Teale
   was born "about 1804" flatly, while lines 520-525 declare that birth year
   UNRESOLVED between the Bible's 3 February 1799 and the census-derived about 1804,
   and line 528 requires marking "every downstream conclusion that depends on the
   choice". The worked argument is such a document and marks nothing.

## SHALLOW / ABSENT
8. Line 149 row 8: the age/DOB arithmetic is correct (11 Jun 1848 to 14 Mar 1921 is
   exactly 72y 9m 3d) — which is the problem. The example constructs them to agree,
   so it never models the routine case where they DISAGREE, in which the age is not
   derived at all but a second informant statement and a conflict inside one document.
9. Item C (356-359) carries no source class, information class, informant, or limit.
   Items E and F omit "what it does not establish". The flagship argument does not
   run the file's own evaluation protocol on every item.
10. Item E (371-373) asserts the county's guardian-bond practice as the expectation
    grounding negative evidence, and never cites it. Footnote 9 (449-451) cites only
    the volume searched, not the practice.
11. Lines 338-340 rest identity on "no second Susannah Cray of comparable age
    recorded in Rowan County in the period" — an argument from absence with no
    stated search, scope, or variants, the precise move the file forbids at 116-124
    and calls fatal at 896.
12. Footnote 1 (264-265) says "Digital image" with no provenance chain; it would fail
    the file's own test at 181 and audit at 210.
13. Footnote 4 (294-295) cites a family Bible with no chain of custody — the element
    that makes a Bible citable. Line 890 lists "a family Bible with no owner or
    custody" as a fatal failure.
14. Section 7 promises "an archive that survives you" (line 3) and tells START-HERE to
    contain "the filing scheme in plain language" (724), but no folder structure
    appears anywhere. No disposition plan at all: no deed of gift, no named
    repository, no instruction for what happens on death beyond where the key is (720).
15. Ethics: the enslavement protocol (814-831) and misattributed-parentage row (809)
    PASS as genuine protocols. Gap: no rule for the collision — what to do when a
    suppressed conclusion is load-bearing for a lineage application or portfolio, and
    what the report says in its place.
16. Line 655 says "Never all-numeric" and 691-698/743-757 then use ISO dates. The ISO
    exception is explained for filenames (700) but not for the conclusion record.

## PADDING (scored down on the axis it hides)
908 lines against a 350-650 target, 40% over. Section 10 (885-897) is a third
statement of material already given twice; seven of its nine rows recap sections 1-4.
Lines 655-667 restate rules the file correctly assigns to timeline-building.md in the
very next clause. The copyright block (851-868) is 18 dense lines only adjacent to
documentation standards. The excess sits in exactly the sections carrying the
omissions above: thirteen lines recapping and nine on generic 3-2-1 backup advice,
while never showing a folder layout or a disposition plan.

## FIX INSTRUCTIONS
1. Line 38: replace "offering direct evidence of the death date and indirect evidence
   of the parents" with "offering direct evidence of the death date and direct
   evidence of the parents' names that is only as good as the secondary information
   carrying it." If an indirect-evidence illustration is needed, use the census pair
   already written at 111-114.
2. Line 133: "great-granddaughter" -> "granddaughter". Check the sentence still reads
   correctly against "Father: Jesse Cray" at 151.
3. Fix the three template pointers: proof-argument.md:175 "2.6" -> "2.1";
   research-report.md:13 "5.3" -> section 5, "Report vs compiled genealogy";
   research-report.md:185 "7.5" -> section 7, "File naming". Then either number the
   subsections of 5 and 7 or stop using decimal pointers into unnumbered prose.
4. Add research extent to the proof-argument anatomy as a new item between current 5
   and 6 (320-321): "The extent of the research. What was searched, with jurisdiction
   and span, nil results included, and the known record loss for the period. This is
   the reasonably-exhaustive element made visible; without it the reader cannot apply
   the test in section 2." Renumber. Add a matching "Scope of research." paragraph to
   3.4 between Correlation (394) and Conflicting evidence (396), naming the Rowan
   County record groups searched, spans, variants, and surviving/lost registers.
   Change "the seven-part skeleton" at 903 to "the eight-part skeleton".
5. After line 368 add: "A third reading must also be excluded. Under North Carolina's
   act of distributions a widow took a child's part where there were more than two
   children, so seven shares is equally consistent with a widow and six children."
   Then extend Item E (or add an item) showing what was searched to establish Jesse
   Teale left no widow in 1838 — dower allotment, year's provision, widow's receipt in
   the estate file, a bond taken by a widow-administratrix — and what the absence licenses.
6. Line 435: replace with "Susannah was treated as Jesse Teale's daughter in the eyes
   of the law and of the county". Do not leave "daughter in law" standing in a passage
   about step-daughters.
7. Lines 338-340: replace the no-second-Susannah clause with a stated search (which
   indexes and record groups, what span, which variants: Cray, Crey, Craig, and the
   result), or delete it and rest identity on the continuity evidence alone.
8. Under the table at 149 add: "When the stated age and the stated date of birth do
   NOT agree, the age is not derived. It is a second statement by the same informant,
   and the disagreement is a conflict inside one document to be resolved under
   section 4." Optionally add a row 8b showing the mismatch case.
9. Give Item C (356-359) the four elements every other item carries: source class,
   information class with informant named or recorded undetermined, evidence type for
   this question, and what it does not establish. Add the missing "It does not
   establish..." line to Items E and F.
10. Item E (371-373): cite the expectation, not just the search — the statute or county
    practice requiring guardian bonds, or two dated examples from the same volume where
    the commissioners used representation language. Add one sentence to 1.3 after 124:
    "The expectation itself needs a citation. An uncited expectation is an assumption
    wearing the clothes of negative evidence."
11. Footnote 1 (264-265): say how the image was reached — either "digital image supplied
    by the Division of Vital Records, New Castle, [date]" or the full provenance chain
    matching the shape already used at 444-446.
12. Footnote 4 (294-295): add custody — "privately held by [owner], [city, state], 2026;
    [owner] received the volume from [prior holder], [relationship], in [year]."
13. Section 7: add a short fenced folder tree (images/, transcriptions/, proofs/,
    reports/, logs/, correspondence/, permissions/, START-HERE) so "the filing scheme in
    plain language" at 724 refers to something. Add a two-sentence disposition plan to
    the successor block at 722-728: the named repository, society or family member the
    archive goes to, whether a deed of gift or deposit agreement exists, and where that
    document is.
14. Section 9: add one handling rule to the sensitive-findings protocol (799-805) for
    when a suppressed conclusion is load-bearing — state that the relationship rests on
    evidence withheld at the request of a living person, name who holds it, and offer it
    to a reviewer under confidentiality.
15. Line 332: after "born in North Carolina about 1804" add "(the estimate is contested;
    see the unresolved conflict at section 4, and every inference below that depends on
    it is marked)". Mark the dependent cells in the correlation table at 385.
16. CUT, to buy room for 4, 13 and 14. Delete section 10 rows 1, 2, 3, 5, 7, 8, 9
    (889-891, 893, 895-897), keeping only "Hedging instead of analysis" and "The tree
    merged without review"; or delete section 10 entirely and move those two into
    sections 4 and 9. Reduce 655-667 to two pointer sentences plus the "Unknown as a
    surname" rule at 643-644, which is genuinely yours. Compress 851-868 to six lines:
    copyright protects expression not facts; database and compilation rights exist in the
    EU and UK; contract and repository restriction bind independently and are what
    actually catches genealogists; US fair use, non-US fair dealing; keep a permissions
    file. Target 650 lines.
17. Line 655: add "ISO YYYY-MM-DD is the one exception, and only where machine sorting is
    the point: filenames, logs, and record headers."

## KEEP — do not lose in revision
- Section 1.2 (72-98): four-step informant identification, "undetermined" defended as
  respectable and underused, "Unknown informant is a ceiling, not a disqualification"
  with a dated promotion path, and "One informant, two classifications". The strongest
  writing in the skill. Do not touch it.
- Section 1.3 (100-124): the test column ("Must I say 'therefore' to get from this to the
  answer?"), the one-item-two-questions pair, and the negative-evidence vs
  negative-search-result separation with its written-expectation-first model sentence.
- Section 1.4 (126-169): the fifteen-row per-assertion table, the blank as "no assertion",
  the prospective burial entry, the informant line as "what makes the analysis possible",
  and the closing "it never averages the lines into 'a good document.'"
- Section 2's GPS table (178-184): five elements each with a reader-applicable test and a
  "Fails as" column, plus 186-190 on "reasonably" doing real work.
- The self-audit (194-238) and its "FAIL ANY LINE = NOT PROVED" rule.
- The proof-triad trigger table (248-255) and the rule that any single trigger forces an
  argument.
- Lines 302-308: the adversarial framing and "If your draft contains no sentence beginning
  'Against this,' go back and find what you left out" — and the conflict section of the
  worked example (396-424), which practises it: it steelmans the county history at 402-406
  before answering, and resolves by comparison rather than count.
- Section 4 entire (472-533): the mechanism-of-error principle (491-493), "two sources
  corroborate only if they could have disagreed" (478-479), all three outcomes with
  written models, and the "Never counts as resolution" list.
- Section 8 (732-776): the conclusion record and the five propagation steps, including
  "Notify the people you told ... You persuaded them; you owe them the retraction."
- Section 9's enslavement protocol (814-831) and the misattributed-parentage row (809).
- The no-invented-numbers discipline: the convention note at 17-21, the bracketed slots
  throughout, and self-audit line 212. Grep confirms ZERO invented URLs, page numbers,
  film numbers or standard numbers in the file or either template. Whatever else is
  revised, this must survive.
