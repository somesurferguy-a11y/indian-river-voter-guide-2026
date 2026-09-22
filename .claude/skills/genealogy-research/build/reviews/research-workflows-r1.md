# Critic report — research-workflows, round 1

VERDICT: FAIL | TOTAL: 33/50
SCORES: citation_formats=7, source_evaluation=6, timeline_accuracy=7,
        relationship_clarity=7, documentation_completeness=6

## BIGGEST GAP
The worked log and its negative-evidence example are not auditable: no citations, no
searcher, coverage gaps, and an inference that fails the file's own test.

WHY: the log at 572-592 and the negative-evidence contrast at 418-427 are the same artifact
(row 04-02), and it is the thing readers copy. Fixing it moves three axes at once —
citations appear, the deed-book source types and the negative-evidence inference get
corrected, and the Searcher field, coverage and full-citation requirements the file already
states become demonstrated rather than asserted. Every other finding is a sentence-level
repair; this one is the load-bearing example failing standards the file sets two pages earlier.

## CONFIRMED ERRORS
1. WRONG, 422-427 — the flagship negative-evidence illustration fails the file's own
   four-premise test at 407-414. It reads: "his absence 1813 through 1820 indicates he was
   assessed in another township OR UNDER A SPELLING NOT RECOVERED BY A LINE-BY-LINE READ,
   rather than that he left the county." Premise 4 requires absence to be better explained by
   the person's absence than by any of the ten search-side reasons at 346-357 — but the stated
   inference leaves reasons 1 and 6 alive BY NAME, and the conclusion it reaches ("he did not
   leave the county") actually rests on the 1816 marriage and the 1834 will, i.e. on positive
   evidence. The sibling references/documentation-standards.md:370-374 models the owner's
   signature move better than the owner does.
2. WRONG + cross-file contradiction, 574 and 576: log rows 04-01 and 04-03 classify searches
   of county DEED BOOKS as "Original". This file says at 262 "The will book is a record copy,
   not the signed original" and at 662 "The will book entry is a record copy, hence derivative
   of the signed original." A deed book is a clerk's recorded copy exactly as a will book is.
   It also contradicts two siblings outright: references/citation-management.md:227 ("Clerk's
   recorded copy in a will book or deed book | Derivative") and
   references/documentation-standards.md:45 (derivatives include "deed and will books").
3. WRONG (internal contradiction), 446 and templates/research-log.md:54 both require "Searcher
   and date" for a citable nil. Neither the 16 columns (529-544) nor the template's header
   (templates/research-log.md:11) contains a Searcher field. "Searcher" appears twice in the
   whole domain, both times as a requirement, never as a field — and the template offers
   "look-up by agent" as an access route (20), precisely when it matters.
4. WRONG, 577: line 440 sets the coverage rule ("'Greene County deeds' is not coverage;
   'Greene County grantee index, Books 1 through 7, 1796 through 1840' is"). Row 04-04 then
   records "Washington Co., Pa., tax list, township later divided between Washington and
   Greene | 1788 only; list damaged at foot of 2nd membrane" — no township named, no volume,
   no page span. The one row that exists to demonstrate an ambiguous hit fails the file's own
   coverage standard.
5. WRONG, 675-677: "Falsification condition: a record placing both men alive in the same year
   in different jurisdictions." Circular (applying it requires already knowing there are two
   men, which is RQ-04) and wrong on the file's own facts: Greene County was created
   9 February 1796 out of Washington County, so one man recorded in both counties in one year
   is EXPECTED, not disqualifying. A reader following it would falsely refute a true identity.
   The second limb ("a Washington County record showing the 1791 grantor's death before 1804")
   is sound.
6. WRONG, 269: "DNA | Biological relationship, which no document can assert." Documents assert
   biological relationship constantly — a birth register naming parents asserts exactly that.
   What documents cannot do is verify it independently or exclude misattributed parentage. As
   written it invites the reader to privilege DNA over documents, which 618 correctly forbids.
7. WRONG (level), 59-65: the column header reads "Standards chapter that governs it" and the
   cells give "Standards for Planning Research", "Standards for Collecting Data", "Standards
   for Reasoning from Evidence". In Genealogy Standards 2nd ed. rev. these are SECTIONS inside
   chapter 3, "Standards for Researching"; only "Standards for Documenting" (61) is a chapter.
   Relatedly, 65 lists "Terminating the plan" under Reasoning from Evidence — it is a Planning
   Research standard, and the file handles the parallel case correctly at 64.

## SHALLOW / ABSENT
8. Not one of the six rows at 574-579 carries a citation, including the two nil rows (575, 578)
   whose whole point is citability, though 439 requires "Source searched, fully cited".
   templates/research-log.md:33 leaves "Full citation:" as an unfilled bracket. Line 534
   authorises a shortened note but none appears anywhere; what the log puts in that column
   ("Greene Co., Pa., grantee index, deed bks 1-7") carries no author, title, locator or
   repository.
9. ABSENT (interface gap): no informant field in the 16 columns or the template header, though
   548-549 asserts a death certificate is "secondary for the decedent's parents' names" without
   saying why — because of who reported it — and the sibling
   references/documentation-standards.md:84 makes it a prerequisite: "Identify the informant
   explicitly, in writing, before classifying."
10. ABSENT: zero hits for consent, privacy, living, or ethic across research-workflows.md,
    templates/research-log.md and templates/research-plan.md — while 758 proposes DNA-testing a
    living descendant. The nearest touches (64 "respect for record custodians", 342 "Log the
    restriction") are about repositories, not people.
11. SHALLOW, 719-722: "Susannah Cray, aged about 60, widowed. Born about 1790, married 1816 at
    about twenty-six: consistent." Point estimate, no interval, no note that the 1850 age is as
    of 1 June 1850 or that census ages are routinely rounded. Line 722 compounds it: "born by
    about 1770" mixes a boundary with an approximation; the hybrid has no defined meaning.
12. SHALLOW: event date vs filing/recording date is raised at 352 and given no home — column 2
    is "Date searched", column 7 "Coverage searched", neither recording whether a span is
    event-dated or filing-dated.
13. SHALLOW: the filled log at 572 displays 8 of the 16 columns just specified, dropping
    Objective, Repository/access, Condition, Filed as and Analysis; templates/research-log.md:24
    hard-codes the same 8-column table.
14. SHALLOW: section 11 closes RQ-05 as "identity established" (732-735) but never states the
    family — the 1834 will "naming wife Susannah and four children" (662) never names the four,
    and the guardianship "naming a minor child with an age" (727-728) leaves the child unnamed.
15. Nit, 575: "candidate negative evidence, see note" is outside the controlled vocabulary the
    file's own template fixes at templates/research-log.md:19 (direct / indirect / negative).
16. Nit, 558: "imaging [film or image-set identifier]" is not an EE connector; the imaging
    identifier belongs inside the site's "citing" clause or as a trailing film identifier.

## VERIFIED CORRECT — do not disturb
The FamilySearch Wiki page titles at 37-38 and 517-518 (Principles of Family History Research,
Research Process, A Guide to Research, Research Logs, Keeping a Research Log, Prepare a Research
Log) all exist. The concordance claim at 21-23 is true (BCG publishes a 2021-vs-2014 standard
number cross-reference). Every BCG short title used at 61-65 and throughout is a real standard
title. The Newberry Atlas of Historical County Boundaries, 1 July 1837 English civil
registration, the 1922 Four Courts destruction, the 1921 census fire, Greene County created
9 February 1796 from Washington, and Pennsylvania county marriage records beginning 1885 at the
Clerk of Orphans' Court all check out.

## LENGTH
778 lines against a 350-650 target. Most overage is density, but ~40 lines are recap: section 12
(770-778) restates the "Not here" block at 12-15; 6 of the 11 rows in section 10 (631-645) are
cross-references to sections 2, 4.5, 5.4, 7 and 8 wearing a table; the generic record-type table
(256-269) is filler the file itself concedes at 253-254. That budget should have bought the
Searcher field, one fully cited nil row, and a real coverage statement for 04-04.

## FIX INSTRUCTIONS
1. Fix the negative-evidence statement at 422-427. Cut "indicates he was assessed in another
   township or under a spelling not recovered by a line-by-line read, rather than that he left
   the county." Replace with "his absence from those lists is evidence that he was not a taxable
   inhabitant of Cumberland Township in those years." Add: "That he remained in Greene County is
   not carried by the absence; it is carried by the 1816 marriage (04-06) and the 1834 probate,
   with which the absence is correlated." Add a closing line discharging the four premises at
   407-414 by number.
2. Fully cite the two nil rows. Give 04-02 and 04-05 a complete first-reference note in their
   existing NOTE blocks (583-592) and a genuine shortened note — author/title/locator, not a bare
   description — in the table cell. Fill templates/research-log.md:33's "Full citation:" bracket
   with one worked instance.
3. Add a Searcher field to the column list at 529-544 (making it 17), to the header at
   templates/research-log.md:11, and as a "Searcher:" line in the NOTE block at 31-39.
4. Fix row 04-04's coverage (577): name the township as it stood in 1788, the volume and the
   membrane, e.g. "Washington Co., Pa., county tax list, [named] Twp. (territory divided 1796),
   1788, 2 membranes, foot of membrane 2 damaged."
5. Fix the deed-book source type at 574 and 576: "Derivative (recorded copy); signed original not
   seen" — or, if you mean the deed book is an original record of the recording act, say that in
   one sentence at 262 and make the cells read the same way. Do not teach one rule and model another.
6. Add an "Informant / how they knew" column to 529-544 and the template header, and rewrite
   548-549 to show the mechanism: "...primary for the fact and date of death, which the attending
   physician certified; secondary for the decedent's parents' names, which the informant, a
   son-in-law, reported at second hand." Cross-reference documentation-standards rather than
   re-deriving.
7. Fix the falsification condition at 675-677. Cut the first limb. Replace with a condition one
   man cannot satisfy: "two Bartholomew Crays executing instruments before different officials on
   the same date, or a bearer of the name appearing in a Washington County record as 'Jr.'
   alongside a living senior." Keep the second limb.
8. Fix 269: "Biological relationship, which documents assert but cannot independently verify;
   DNA tests the biology, documents supply the identities."
9. Tighten section 11's uncertainty notation. 722: "born by about 1770" -> "born by 1770
   (twenty-one at the 1791 conveyance)". 719-720: give the interval and flag it, e.g. "aged 60 at
   1 June 1850, hence born c. 1785-1795 once census rounding is allowed for; a marriage in 1816
   sits inside that interval, which is a consistency flag and not an identification."
10. Add a four-or-five-line ethics and privacy protocol under section 8 log hygiene: what may be
    logged about living people, how restricted-record content is stored and cited, and that DNA
    testing a living descendant (758) requires informed consent recorded with a date. Add
    "consent obtained, date" to OQ-02 next step 4 at 758. Cross-reference documentation-standards.
11. Cut to the 650-line ceiling and spend the recovered lines on 2, 3 and 6. Delete section 12
    (770-778). Cut the section 10 table (631-645) to the five pathologies not covered elsewhere —
    name collecting, tree copying, conclusion drift, chasing the interesting, jurisdiction
    blindness — deleting index-only research, confirmation bias, single-source conclusions,
    stopping at the first match, ignoring the cluster and unlogged searching, all pointers back to
    4.5, 5.4, 7 and 8. Halve the generic record-type table (256-269), keeping the "Era caution"
    column.
12. Fix the standards-structure labels at 59-65. Change the header to "Standards section (ch. 3,
    Standards for Researching, except row 1)". Move "Terminating the plan" out of the row-5 list
    at 65 or footnote it as a Planning Research standard invoked at step 5.
13. Nit: replace "imaging [film or image-set identifier]" at 558 with EE's handling.

## KEEP
- Section 0 (19-33): the no-numbers policy with the concordance as justification. The premise is
  verified true. Do not let a reviser "helpfully" add standard numbers.
- The re-entry table (70-84) — the single best idea in the file, making the cycle's re-entry point
  depend on what KIND of result you got, including "You cannot state a distinguishing identifier
  for your subject -> re-enter at 1" (81).
- Section 2's bad/better/good table (117-121) and the three tests (129-134).
- The exhaustive-by-class formulation (176-181) and 183-185 ("a conclusion that has not survived
  the search for its own counter-evidence is not a conclusion").
- Sections 4.5 and 5.4, especially 359: "Only 9 and 10 are statements about the world. The other
  eight are statements about your search."
- Section 5.3's collection-state table (335-342).
- Section 6's definitions and the four-premise test (399-414), and the nil-result field table
  (437-446). The definitions are right; only the illustration needs surgery.
- Row 04-05 and its note (578, 591-592) — the model the other five rows should follow.
- Section 9 re-search triggers (609-627), especially "a settled conclusion is reopened by new
  information about the records, not by new information about your preferences."
- The jurisdictional survey (214-249) including the England/Wales and Ireland ladders.
- templates/research-log.md's controlled-value lists (16-20) and the re-search trigger index tab
  (68-75).
- The worked example's factual substrate: Greene/Washington County, the 1796 erection, the 1885
  marriage-record start, Orphans' Court custody, Cumberland Township. All real. Repair the
  reasoning in section 11 without disturbing the jurisdictional facts.
