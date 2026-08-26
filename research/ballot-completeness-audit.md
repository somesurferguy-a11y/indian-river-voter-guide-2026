# Ballot Completeness Audit — Indian River County Voter Guide 2026
### Checking for races/measures missing from data/guide.js (excluding Governor, Attorney General, CFO — handled separately)
**Compiled:** Aug 25, 2026 · Status: COMPLETE — all six checklist items researched and sourced

Scope per assignment: (1) Florida Cabinet offices beyond Gov/AG/CFO, (2) FL Legislature completeness,
(3) constitutional amendments + local ballot questions/referenda, (4) judicial races/retention completeness,
(5) special districts/countywide bodies vs. SOE's own "offices up for election" list, (6) municipalities
(Sebastian, Fellsmere, Orchid).

Every finding below is labeled **COVERED CORRECTLY**, **GAP FOUND**, or **UNABLE TO VERIFY**, each with a
source URL and access date. No claim is made without a citable source.

---

## TOP-OF-FILE SUMMARY

**GAPS FOUND (3):**

1. **Sebastian Inlet Tax District, Board District 4 (Indian River County seat)** — an independent special
   taxing district spanning Indian River and Brevard counties, with its own elected commission, is
   entirely absent from the guide. The Indian River County seat (District 4, held by David Barney) has a
   term expiring in 2026. Confirmed via the district's own site and independently flagged by Ballotpedia's
   Indian River County 2026 elections page. Not listed on the county SOE's "offices up for election" page
   (see note on franchise/administration below) — this may explain why it was missed. See Finding 5c.

2. **City of Fellsmere municipal election — CONFIRMED, CONTESTED, and entirely missing from the guide.**
   General election November 3, 2026 (same day as the county/state general) for THREE council seats, with
   FOUR qualified candidates: Fernando Herrera, Javi Murillo, Shayla Macias, and Jose M. Zamarripa. This
   closes the "could not fully confirm" gap the guide flagged for Fellsmere — it is confirmable, it is
   contested, and it is not blocked by bot detection. See Finding 6b.

3. **City of Sebastian municipal election — CONFIRMED to exist, on a DIFFERENT DATE than the county
   general.** Two council seats up in 2026, election held "the second Tuesday following the first Monday
   in November" — i.e. **November 10, 2026**, not November 3. This is a real date discrepancy of the same
   type the guide already had to correct once for Vero Beach City Council. See Finding 6a.

**CONFIRMED CORRECT / NO GAP (do not need any change):**
- Florida Cabinet: no missing office beyond Governor/AG/CFO (being researched separately) — see Finding 1.
- FL Legislature: Indian River County is wholly within House District 34 and wholly within Senate District
  29 (not split among multiple House districts); no Senate race in 2026 — confirmed accurate. See Finding 2.
- Constitutional amendments: 3 is the complete, correct number certified for Nov 3, 2026 — no 4th measure
  found on Ballotpedia or FL DOS. See Finding 3.
- No Indian River County-specific local ballot measure/referendum found for 2026 (the "Save Our Indian
  River Lagoon" sales-tax renewal on the Nov 2026 ballot is a **Brevard County** measure only). See Finding 3b.
- Judicial: FL Supreme Court retention (1 justice, Muñiz) and 4th DCA retention (5 judges) both confirmed
  complete and accurate against the Florida Bar's own count. No contested IRC circuit/county judge race
  found. See Finding 4.
- Special districts against the SOE's own "offices up for election" page: exact match to what the guide
  covers (County Commission 2 & 4; School Board 1, 2, 4; Hospital District 2, 4, 6; Soil & Water 1, 3, 5;
  Mosquito Control 2, 3). See Finding 5.
- Indian River Shores: confirmed NO municipal election Nov 2026 — 3 open seats filled unopposed. Matches
  guide's existing claim. See Finding 6c.
- Orchid: confirmed NO municipal election will appear on the Nov 2026 ballot — all 3 council seats filled
  unopposed as of May 1, 2026 (Paul Stach, Bill James, Tracy Cornwell). This closes the guide's "could not
  fully confirm" flag for Orchid with a real answer: nothing to add, correctly nothing on the ballot. See
  Finding 6d.

---

## FINDING 1 — Florida Cabinet / statewide constitutional offices

**COVERED CORRECTLY / NO GAP.** Since a 1998 constitutional amendment took effect (Jan. 7, 2003), the
Florida Cabinet consists of exactly **three elected members**: Attorney General, Chief Financial Officer,
and Commissioner of Agriculture — plus the Governor, who is not formally a "Cabinet member" but sits with
it. The Lieutenant Governor runs on a joint ticket with the Governor and is not separately elected. There
is no fourth or fifth statewide constitutional office being missed: Governor, AG, and CFO are confirmed to
be the three items being researched separately by other researchers; Commissioner of Agriculture (Wilton
Simpson, R) is already fully documented in the guide (`data/guide.js`, race id `fl-ag-commissioner`).
Source: [Florida Cabinet — Wikipedia, citing Fla. Const. Art. IV, § 4](https://en.wikipedia.org/wiki/Florida_Cabinet);
[Executive Office of the Governor — Cabinet Affairs](https://www.flgov.com/eog/leadership/cabinet), accessed 2026-08-25.

---

## FINDING 2 — Florida Legislature

**COVERED CORRECTLY / NO GAP.**
- **Florida Senate:** Confirmed still accurate. Indian River County sits entirely within Senate District 29
  (Sen. Erin Grall, R), whose term runs to November 2028. Only the 20 even-numbered Senate districts are up
  in 2026; zero candidates filed in District 29. The guide's `notOnBallot` entry is correct.
- **Florida House — is there a second district touching Indian River County?** No. Indian River County sits
  **wholly** within House District 34; it is District 34 that crosses a county line (taking in part of
  southern Brevard — Micco, Barefoot Bay, Grant-Valkaria), not the other way around. Both the IRC Supervisor
  of Elections' own maps page (which lists exactly one State House district map — "State House District 34
  Map" — for the county) and the district's own boundary description confirm Indian River County is not
  split among multiple state House districts. Source: `research/state-races.md` (compiled from IRC SOE maps
  page, https://voteindianriver.gov/election_information/maps/index.php, and Wikipedia's "Florida's 34th
  House of Representatives district" page), accessed 2026-08-05; re-confirmed by search 2026-08-25 with no
  contradicting information found.

---

## FINDING 3 — Constitutional amendments (statewide)

**COVERED CORRECTLY / NO GAP.** As of this research pass (2026-08-25), Ballotpedia's "Florida 2026 ballot
measures" page and independent search confirm **three** statewide constitutional amendments are certified
for the November 3, 2026 general election ballot — matching exactly what the guide already documents
(Amendment 1 – Budget Stabilization Fund; Amendment 2 – Agricultural TPP exemption; Amendment 3 – Save Our
Homes property tax measure). No citizen-initiative measure qualified for the 2026 ballot; all three are
legislatively referred amendments. No fourth measure was found on Ballotpedia, the FL Division of
Elections' constitutional-initiatives tracker (constitutionalinitiatives.dos.fl.gov), or in general search.
Sources: [Ballotpedia — Florida 2026 ballot measures](https://ballotpedia.org/Florida_2026_ballot_measures),
accessed 2026-08-25; `research/amendments-judicial.md` (compiled 2026-08-08, citing the same page "as of
August 7, 2026, three statewide ballot measures were certified").

### Finding 3b — Indian River County LOCAL ballot questions/referenda

**COVERED CORRECTLY / NO GAP FOUND (negative result, clearly labeled).** No Indian River County-specific
local ballot measure (countywide sales tax, bond issue, charter amendment, or municipal referendum) was
found for the November 2026 ballot.
- Ballotpedia's dedicated "Indian River County, Florida ballot measures" page lists **zero** 2026 entries —
  its most recent entries are historical (2013, 2012, 2010). Source:
  [Ballotpedia — Indian River County, Florida ballot measures](https://ballotpedia.org/Indian_River_County,_Florida_ballot_measures),
  accessed 2026-08-25.
- A specific search was run for a lagoon-related sales tax, because news coverage of a "Save Our Indian
  River Lagoon" half-cent sales tax renewal on the November 2026 ballot exists — but that measure belongs
  to **Brevard County only** (renewing Brevard's own existing half-cent sales tax for lagoon restoration).
  St. Lucie County separately has its own unrelated half-cent infrastructure sales tax renewal on its
  November 2026 ballot. Neither is an Indian River County measure. Source:
  [WFIT — "IRL Sales Tax Referendum on the November Ballot 2026"](https://www.wfit.org/podcast/coastal-connection/2026-07-14/irl-sales-tax-referendum-on-the-november-ballot-2026), accessed 2026-08-25 ("Brevard County is
  preparing to put a renewal of the Save Our Indian River Lagoon half-cent sales tax on the November 2026
  ballot").
- Caveat: this is a negative finding based on the sources checked (Ballotpedia's local-measures tracker,
  general web search, and the SOE's own "offices up for election" page, which lists offices only, not
  ballot questions). A definitive "no local measure exists" statement would ideally also be confirmed
  directly against the Indian River County Board of County Commissioners' resolutions/agenda record and the
  charters of Vero Beach, Sebastian, Fellsmere, Indian River Shores, and Orchid — that full sweep was not
  completed in this pass. No affirmative evidence of a hidden local measure was found despite a real search
  effort.

---

## FINDING 4 — Judicial races

**COVERED CORRECTLY / NO GAP.**

**Circuit/county judge races:** Re-confirmed. The same nine 19th Judicial Circuit judges the guide already
lists as unopposed and returned to office (Michael C. Heisey, Michael Linn, Steven J. Levin, Michael David
Porter, Laurie Buchanan, Victoria L. Griffin, Lillian B. Ewen, Cynthia L. Cox, Elizabeth Ann Metzger) are
confirmed by an independent search of the same underlying source (The Florida Bar, "Dozens of trial court
races set for August primary"). No Indian River County judge race — circuit or county court — was
contested in the 2026 cycle. Source: [The Florida Bar — Dozens of trial court races set for August primary](https://www.floridabar.org/the-florida-bar-news/dozens-of-trial-court-races-set-for-august-primary/),
re-checked 2026-08-25.

**Florida Supreme Court retention — how many total in 2026?** Only **one** Florida Supreme Court justice —
Chief Justice Carlos G. Muñiz — qualified for merit retention on the November 2026 ballot, out of the
court's 7 seats. This matches the guide exactly; it is not an undercount. Florida Supreme Court justices
serve staggered 6-year terms, so only a subset comes up in any given cycle. Source:
[The Florida Bar — "Justice Muñiz and 22 DCA judges to stand for merit retention"](https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/), accessed 2026-08-25.

**4th DCA retention — complete list check.** The same Florida Bar article lists exactly the same five 4th
DCA judges the guide documents: Alan O. Forst, Mark W. Klingensmith, Johnathan D. Lott, Shannon K. Shaw,
and Caroline Cahill Shepherd. No 4th DCA judge is missing from the guide's list. (Statewide, 22 DCA judges
across all five DCAs are up for retention in 2026; only the 4th DCA's judges are relevant to Indian River
County voters, since the 4th DCA is the appellate court covering the 19th Judicial Circuit.) Same source as
above, accessed 2026-08-25.

**County Court judge "groups"** — Florida county court races are assigned by group/seat number rather than
geographic district within a county; the Florida Bar's "dozens of trial court races" roundup (which lists
races by circuit and county) reported no Indian River County judge races were even filed this cycle, which
would include county court groups. No evidence of an unfiled or missed county court group race was found.

---

## FINDING 5 — Special districts / countywide bodies vs. the SOE's own list

**COVERED CORRECTLY / NO GAP**, with one exception flagged separately as Finding 5c below.

The Indian River County Supervisor of Elections' own "offices up for election" page was fetched directly
and cross-referenced line-by-line against the guide. The SOE page lists exactly:
1. County Commissioner — Districts 2 and 4
2. School Board Member — Districts 1, 2, and 4
3. Indian River County Hospital District — Seats 2, 4, and 6
4. Indian River Soil & Water Conservation District — Seats 1, 3, and 5
5. Indian River Mosquito Control District — Seats 2 and 3

**Every one of these is already covered in the guide** — either as a contested race (County Commission 2 &
4; School Board 2; Mosquito Control Seat 2) or explicitly listed under `notOnBallot` / the "elected without
opposition" race entry (School Board 1 & 4; Hospital District 2, 4, 6; Soil & Water 1 [seat filled
unopposed]; Soil & Water 3 & 5 [no candidate, to be filled by appointment]; Mosquito Control Seat 3). This
is an exact match — nothing on the SOE's own list is missing from the guide.
Source: [IRC Supervisor of Elections — offices up for election](https://www.voteindianriver.gov/campaigns/candidates/offices_up_for_election.php),
accessed 2026-08-25. The page itself notes: "Federal, State, Multi-County and District Office candidates do
not qualify with the local elections office" — directing voters elsewhere for those, which is the likely
explanation for Finding 5c below.

### Finding 5c — GAP: Sebastian Inlet Tax District (Board District 4, the Indian River County seat)

**GAP FOUND.** The Sebastian Inlet Tax District (also styled "Sebastian Inlet District") is an independent
special taxing district, separate from the county, created to manage Sebastian Inlet. It is governed by a
5-member elected commission with 3 seats apportioned to Brevard County and 2 to Indian River County.
Commissioners are elected on a nonpartisan basis "by a plurality of the qualified electors of the District"
— i.e., registered voters in the precincts that fall within the district's geographic boundary, not
property owners at large and not (necessarily) every county voter — serving staggered 4-year terms, with
elections held in November of even-numbered years.

- **The Indian River County seat — Board District 4, currently held by David Barney — has a term expiring
  in 2026**, per the district's own website. Source:
  [Sebastian Inlet District — Board of Commissioners](https://www.sitd.us/board-of-commissioners), accessed
  2026-08-25 (lists Barney, Seat 4, Indian River County, "Term: 2022-2026").
- **Independent corroboration:** Ballotpedia's own "Indian River County, Florida, elections, 2026" page
  lists "Sebastian Inlet Tax District" under its "Special district elections and candidates" section for
  the August 18, 2026 primary — i.e., Ballotpedia itself treats this as an Indian River County 2026 election
  worth tracking, alongside County Commission District 2 and the School Board. Source:
  [Ballotpedia — Indian River County, Florida, elections, 2026](https://ballotpedia.org/Indian_River_County,_Florida,_elections,_2026), accessed 2026-08-25.
- **This district and race are entirely absent from `data/guide.js`** — no mention anywhere in the file.
- **Why it was likely missed:** the district's candidates do NOT appear to qualify through the Indian River
  County SOE's regular candidate portal — a direct search of the SOE's own candidate/financial-reports list
  (voterfocus.com/CampaignFinance/candidate_pr.php?c=indian) turned up no mention of "Sebastian Inlet" or
  David Barney, and the SOE's "offices up for election" page (Finding 5, above) does not list this district
  either. This is consistent with the district being a special-act body that runs its own qualifying process
  (as it does for its Brevard County seats — see the Calvin Holton and Lisa Leger Frazier District 5 primary
  race, Ballotpedia, accessed 2026-08-25) even though county-registered voters within the district's
  boundary precincts vote for it on the regular county-administered ballot.
- **What is NOT verified:** this guide's research could not confirm (a) whether Barney is seeking
  re-election or whether the District 4 seat is contested for 2026, (b) the exact precinct/geographic
  boundary of the district within Indian River County (i.e., whether it covers only the barrier
  island/Sebastian-area precincts near the inlet, or a wider area), or (c) whether the seat will actually
  appear on the printed ballot for any IRC voter this cycle (it is possible, as with several other
  district seats already in the guide, that the seat could be unopposed and thus not appear on the ballot
  at all — this was not confirmed either way). These are the open questions for whoever picks up this gap.
- Sources: [Sebastian Inlet District — Board of Commissioners](https://www.sitd.us/board-of-commissioners);
  [Ballotpedia — Indian River County, Florida, elections, 2026](https://ballotpedia.org/Indian_River_County,_Florida,_elections,_2026);
  [Ballotpedia — Calvin Holton (Sebastian Inlet Tax District Commissioner Board District 5, Florida, candidate 2026)](https://ballotpedia.org/Calvin_Holton_(Sebastian_Inlet_Tax_District_Commissioner_Board_District_5,_Florida,_candidate_2026));
  all accessed 2026-08-25.

---

## FINDING 6 — Municipalities

### 6a — GAP: City of Sebastian — confirmed to exist, on a DIFFERENT ballot date than Nov 3

**GAP FOUND.** The City of Sebastian holds its own municipal elections separate from the county/state
general election calendar. Per the city's own website: the Sebastian City Council has 5 members serving
2-year terms, with elections held annually — **2 members elected in even-numbered years, 3 in odd-numbered
years.** The general election date is defined as "the second Tuesday following the first Monday in
November," which in 2026 falls on **November 10, 2026** — a full week after the county/state general
election on November 3, 2026. **Two seats are up in 2026.**

The current five council members are Fred Jones, Bob McPartlan, Christopher Nunn, Ed Dodd, and Sherrie
Matthews (note: McPartlan is also the losing Republican candidate in the guide's County Commission District
2 primary coverage — his Sebastian council seat and its status are a separate, not-yet-researched question).
This guide's research could not locate a public list of qualified 2026 candidates for the two open Sebastian
seats — the city does not appear to publish one online the way Fellsmere does — so the "who is running" gap
remains open, but the fact that a real, differently-dated municipal election exists is now confirmed and
sourced, which is more than the current guide states.
Sources: [City of Sebastian — Election Information](https://www.cityofsebastian.org/225/Election-Information);
[City of Sebastian — City Council](https://www.cityofsebastian.org/266/City-Council); both accessed
2026-08-25.

### 6b — GAP: City of Fellsmere — CONFIRMED, CONTESTED, and fully documentable

**GAP FOUND — and this one is fully closeable, not just flaggable.** Contrary to the guide's assumption
that Fellsmere "could not be fully confirmed," the city's own Election Information page is directly
accessible (no bot-detection block encountered) and states plainly:

> "The City of Fellsmere will hold a GENERAL ELECTION on November 3, 2026 for Three (3) Council Members."
> Qualifying period: July 30 – August 14, 2026 (closed). Qualified candidates, in the order listed on the
> city's own page: **Fernando Herrera** (qualified 8/4/2026), **Javi Murillo** (8/12/2026), **Shayla Macias**
> (8/12/2026), **Jose M. Zamarripa** (8/13/2026).

This is a **contested race** — four candidates for three seats — happening on the SAME November 3, 2026
date as the county general election, meaning any Fellsmere resident's ballot will include it. This is
currently completely absent from the guide, and unlike Sebastian/Orchid it required no special access to
confirm — a direct fetch of the city's own page returned the full candidate list.
Source: [City of Fellsmere — Election Information](https://www.cityoffellsmere.org/city-clerk/page/election-information), accessed 2026-08-25.

### 6c — Indian River Shores: CONFIRMED CORRECT, no election

**COVERED CORRECTLY / NO GAP.** Confirmed directly: the Town of Indian River Shores will NOT hold a
municipal election on November 3, 2026. All three open council seats were filled unopposed by qualified
electors — Pat Brier, Rob Stevens, and Theresa Morgan. This matches the guide's existing claim that Indian
River Shores has no election this cycle. Source:
[Vero News — "Shores to get three new council members, sans election"](http://veronews.com/2026/08/13/shores-to-get-three-new-council-members-sans-election/), 2026-08-13, accessed 2026-08-25; corroborated by
[Town of Indian River Shores — Elections](https://www.irshores.com/elections.html).

### 6d — Orchid: now fully confirmable — CONFIRMED, no election will appear on the ballot

**RESOLVED — closes the guide's "could not fully confirm" flag with a real, sourced answer.** No bot
blocking was encountered fetching the Town of Orchid's own election page. The Town Council has 5 members
serving 4-year terms, elected at-large. During the April 2026 qualifying period, exactly three Orchid
residents filed for the three seats opening in November 2026 — Paul Stach, Bill James, and Tracy Cornwell —
and all three were **unopposed**, so per the town's own page: "the local election for Town Council will not
appear on the ballot in November." (Separately, and not relevant to the November ballot: Orchid held a
standalone special charter-amendment election on February 24, 2026, already in the past by the time of this
guide's coverage window.)
Source: [Town of Orchid — Local Election for Town Council](https://www.townoforchid.com/towncouncil/page/local-election-town-council), accessed 2026-08-25.

---

## Notes on method

- All findings above were checked against `data/guide.js` as read directly on 2026-08-25 (not from the task
  summary, which the guide's own maintainer flagged as potentially stale).
- Governor, Attorney General, and CFO races were explicitly excluded from this audit per instructions —
  those are being researched separately and nothing here should be read as commentary on their status.
- Every source cited above includes an access date. Where a finding is a negative result (i.e., "nothing
  found"), that is stated explicitly rather than presented as a clean bill of health — see Finding 3b in
  particular for the caveats on that negative result.
