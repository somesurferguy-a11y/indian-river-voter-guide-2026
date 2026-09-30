# County Fiscal Audit — Roadmap and Ideas

**Drafted:** Sep 30, 2026

The plan runs from one county to 67 Florida counties to all ~3,100 U.S. counties, with a public
website and a debt clock for each county.

---

## Phase 1: Indian River County (manual, by hand)

Run [`county-fiscal-audit-prompt.md`](county-fiscal-audit-prompt.md) on Indian River County first.
The point of doing one county carefully is to discover which sources are actually usable, which
numbers are hard to get, and what the output really needs to look like. Then build the skill around
what worked.

- Send the records requests the audit produces. Some answers will take weeks to come back.
- Send the questions to officials and give them about 10 business days to respond before publishing.
- Treat the output files `findings.json` and `debt.json` as the data contract for later phases.

## Phase 2: Turn it into a skill for all 67 Florida counties

Florida is an unusually good second step, because the state already collects **standardized
financial data from every local government** through the DFS Local Government Annual Financial
Reports. That makes cross-county comparisons cheap and like-for-like.

The skill should be structured like this:

```
skills/county-fiscal-audit/
  SKILL.md                  # the prompt, with {{placeholders}}
  states/florida.md         # FL source pack, statutes, fiscal year, entity types
  schemas/findings.schema.json
  schemas/debt.schema.json
  scripts/fetch_dfs_afr.py  # pull the standardized data for all counties at once
  scripts/validate.py       # every finding has a source, and no unlabeled totals
```

The approach is a **two-tier audit**:

1. **Tier 1 (automated, all 67 counties).** Debt, per-capita spending, millage trends, and peer
   rankings, generated straight from the DFS and ACFR data. This scales, and it's the data behind
   the debt clock.
2. **Tier 2 (deep dive, one county at a time).** Contracts, payroll, change orders, and audit
   findings. These need document reading and records requests, so they don't scale automatically.
   Run them where Tier 1 flags an outlier or where a local volunteer asks for one.

## Phase 3: All U.S. counties

Each state needs its own source pack, because states differ in fiscal year, in how they report
local finances, and in their public-records laws. Data that works nationally:

- **U.S. Census Bureau Annual Survey of State and Local Government Finances**, and the Census of
  Governments every five years. This gives county-level revenue, spending, and debt in one format
  for the whole country. It lags by about two years, but it's the only nationwide apples-to-apples
  source.
- **MSRB EMMA** for bond disclosures from every issuer.
- **Federal Audit Clearinghouse** for Single Audit findings on every entity that spends $1M or more
  in federal awards. It's searchable and machine-readable, which makes it an excellent national
  controls signal.
- **USAspending.gov** for federal awards by county.
- **State pension plan GASB 68 schedules** for each employer's share of the pension liability.

Recommended order: Tier 1 nationwide from Census data first, then state source packs added one at
a time, starting with states that have standardized local reporting (such as Florida, Ohio, Texas,
and California).

---

## The website

Build it as a **separate site** from the voter guide, and use a neutral name such as "County Ledger"
or "Open Books." The voter guide's credibility rests on being nonpartisan, and "DOGE" is a
politically loaded brand. You can still link the two: each commissioner's page in the voter guide
could link to their budget and millage votes on the audit site.

Keep the same architecture as the voter guide, which already works: static files, all data in JSON,
no server, free hosting. Suggested pages:

- **County page.** The debt clock, a headline dashboard, the findings list with labels and official
  responses, and a "What looks fine" section.
- **Compare.** Any county against its peers, or against the state and national median.
- **Map.** A choropleth of debt per resident, spending per resident, or millage trend.
- **Methodology.** The evidence labels, the definition of waste, and the corrections policy. Reuse
  the voter guide's methodology page.
- **Downloads.** All the JSON and CSV data, so journalists and other citizens can check your work.

## The debt clock, done honestly

Governments report debt once a year, as of the fiscal year end, so a clock that ticks every second
is **an estimate between two audited points**. Keep it defensible:

- Show the **last audited figure and its date** directly under the clock, with a link to the ACFR page.
- Compute the tick rate from the **scheduled debt service plus the recent trend in pension and OPEB
  liabilities**, and label it "Estimated. Last audited: Sep 30, 2025."
- Show a **per-resident** and **per-household** figure beside the total. A bare $250M means little
  to readers; "$1,550 per resident" does.
- Break the total into components (bonds, pension, OPEB, leases) with a toggle. Pension and OPEB are
  often larger than bonded debt, and most people don't know that.
- Let the clock tick **down** when the county is paying debt off. An honest clock that sometimes
  shows good news is more credible than one that only climbs.
- Consider an **overlapping debt** view: the county plus the city, school district, and special
  districts that a given address actually pays toward.

## Other ideas

1. **"Your tax bill, itemized."** Enter an address, pull the parcel's TRIM notice, and show exactly
   how many dollars go to each taxing entity, and what each one spends it on. This is likely the
   single most-used feature you could build.
2. **Rolled-back rate tracker.** Every year, record which boards raised taxes by adopting a rate
   above the rolled-back rate, and how each member voted. It's timely each September at budget
   hearings, and it feeds the voter guide directly.
3. **Budget-season alerts.** Track TRIM hearing dates for every entity so residents know when to
   show up and speak.
4. **Agenda watcher.** Automatically scan upcoming consent agendas for contracts, change orders, and
   sole-source awards above a threshold, and publish them before the meeting instead of after.
5. **Vendor explorer.** One searchable view of who gets paid across all local entities. It's where
   duplication and price differences show up.
6. **Salary and overtime explorer** built from public payroll records.
7. **Recurring audit findings board.** The same control weakness showing up three years in a row is
   one of the clearest accountability signals, and it's already in official documents.
8. **Promise tracker for incentives.** Jobs promised against jobs delivered for every
   economic-development deal.
9. **Records request tracker.** Publish each request, its date, and how long the custodian took to
   respond. Transparency about transparency.
10. **Citizen tip line.** Useful, but every tip goes through the same evidence labels before it's
    published. Nothing is posted just because someone reported it.
11. **Plain-language grades per county.** Be careful with this one. The voter guide deliberately
    doesn't score candidates. If you grade counties, grade only objective, published metrics (for
    example, audit filed on time, fund balance within the GFOA range, debt per resident against the
    median), and publish the formula.

## Risks to plan for

- **Accuracy is the whole product.** One wrong number in a viral screenshot will be used to dismiss
  everything else. Keep the "verified or corrected" pass on every headline figure.
- **Defamation.** Findings about programs and spending are safe to state with sources. Implying that
  a named person did something wrong without an official finding is not. Rule 5 in the prompt exists
  for this reason.
- **Double counting.** Component units, pass-through grants, and transfers between funds inflate
  totals. Use government-wide statements and say so.
- **Stale data.** Every figure needs an "as of" date, the same rule the voter guide already enforces.
