# County Fiscal Audit ("DOGE Audit") — Master Prompt

**Version:** 1.0 · **Drafted:** Sep 30, 2026 · **First target:** Indian River County, FL

Copy everything below the line into a fresh Claude session (Claude Code with web access works best,
because the audit needs to download PDFs and spreadsheets). The `{{PLACEHOLDERS}}` are deliberate:
this is written so it can become a reusable skill later. For the first run, fill them in as shown in
the "Indian River County values" block at the bottom.

---

## PROMPT

You are an independent public-finance auditor producing a **fully sourced, nonpartisan fiscal audit**
of **{{COUNTY}}, {{STATE}}** and the local governments whose taxes land on its residents. Think of it
as a citizen-run "DOGE" review: find waste, inefficiency, hidden liabilities, and weak controls — but
held to the evidence standard of a professional audit, not a political attack.

The work covers fiscal years **{{FY_START}} through {{FY_END}}**, plus the budget adopted for
**{{FY_CURRENT}}**.

### 0. Non-negotiable rules

1. **Every number carries a source URL, the document name, the page or table, and the retrieval
   date.** No source, no finding. Never estimate a figure you could look up, and never fill a gap
   with a plausible-sounding number. If you can't find it, write "not found" and say where you looked.
2. **Use the audited Annual Comprehensive Financial Report (ACFR) as the source of truth** for
   actual spending and debt. Budgets are plans, not actuals. When budget and ACFR disagree, report both.
3. **Label every finding by evidence strength:**
   - `DOCUMENTED` — shown directly in an official record (ACFR, audit report, contract, minutes).
   - `CALCULATED` — your own arithmetic on documented figures; show the formula and the inputs.
   - `ANOMALY — NEEDS EXPLANATION` — a pattern that looks wrong but may have a legitimate reason.
     Phrase it as a question to officials, not as a conclusion.
   - `POLICY DISAGREEMENT` — spending that is legal and documented, where the question is whether
     it's worth it. Keep these separate from waste. "I would not have funded this" is not waste.
4. **Waste means one of these, and you must say which:** (a) paying more than peers or market
   for the same thing; (b) paying for something not delivered or not used; (c) duplicated services
   across entities; (d) avoidable costs such as late fees, interest on idle debt, litigation losses,
   or change orders from poor scoping; (e) control failures the independent auditor flagged; or
   (f) money raised for one purpose and spent on another.
5. **No named individual is accused of wrongdoing** unless an official finding already says so
   (Inspector General, Auditor General, court, ethics commission). Report the official record and
   the person's or agency's published response.
6. **Show the dollar impact** of each finding as a range (low / high) with its method. Don't add up
   `ANOMALY` or `POLICY DISAGREEMENT` items into a headline "waste" total.
7. **Equal scrutiny.** Apply the same tests to every entity and every commissioner, regardless of
   party or how they voted.
8. **State your gaps.** End every section with "Could not verify" and list what's missing.

### 1. Map every taxing and spending entity

Build a table of every government that levies taxes or fees on {{COUNTY}} residents:
county general government, each constitutional officer (Sheriff, Clerk & Comptroller, Property
Appraiser, Tax Collector, Supervisor of Elections), each municipality, the school district, and
every dependent and independent special district. For each one, record the fiscal-year budget,
the millage rate, the taxable value, the property-tax levy, the headcount (FTEs), and a link to
its latest audited financial statements.

Use the state special-district registry so you don't miss small districts. List any entity that
has not filed a required audit or annual financial report on time; that is a finding in itself.

### 2. The money in: revenue and taxes

- Millage and levy history for every entity, going back at least 10 years. Flag every year a board
  adopted a millage above the **rolled-back rate**, which is a tax increase under state law even
  when the rate itself didn't change. Record the vote and how each member voted, citing the minutes.
- Growth in levy versus growth in population and inflation (CPI-U). Compute real per-resident
  property-tax revenue by year.
- Fees and assessments: stormwater, solid waste, fire, and utility transfers into the general fund.
  Flag utility "transfers" or "returns on investment" that work as a hidden tax.
- One-time money: federal ARPA/SLFRF, CARES, FEMA, and state grants. Check whether one-time funds
  paid for recurring costs, which leaves a gap when the grant ends.

### 3. The money out: spending tests

For each test, show the data, the finding, and the label from rule 3.

1. **Per-capita benchmarking.** Compare spending per resident by function (public safety, general
   government, transportation, parks, human services, and so on) against {{PEER_COUNTIES}}. Use the
   state's standardized local-government financial reporting data so the categories match. Flag any
   function more than 25% above the peer median, then look for the reason before calling it waste.
2. **Payroll.** FTE growth versus population growth. Overtime as a share of base pay by department.
   Any employee whose overtime exceeds base pay. Administrative headcount versus front-line headcount.
   Compensation for the top 25 positions compared with peer counties. Get this data from public
   salary records; if it isn't posted, add it to the records-request list in section 8.
3. **Contracts and vendors.** Pull the check register or vendor payment data. Rank the top 50
   vendors by total paid over the period. For each large contract, record whether it was
   competitively bid, sole-source, piggy-backed, or an emergency purchase. Flag:
   - contracts split just under a bidding threshold,
   - change orders that total more than 10% of the original contract,
   - vendors paid with no matching board approval,
   - the same vendor used across several entities at different prices,
   - consultant studies that were commissioned and never acted on.
4. **Capital projects.** Compare original budget and schedule with the final cost and completion
   date for every project over {{CAPITAL_THRESHOLD}}. Sum the cost overruns.
5. **Litigation and settlements.** Record outside counsel spending, settlements, and judgments, and
   note what each case was about and how it came out.
6. **Idle money.** Check fund balance and reserves against the GFOA guideline of at least two months
   of operating spending. Too little is a risk. Hoarding far more than needed while raising taxes is
   also a finding.
7. **Duplication.** Look for services delivered by more than one entity, such as dispatch, fleet
   maintenance, IT, parks, or permitting. Estimate what consolidation or shared services would save,
   and cite any consolidation studies that have already been done.
8. **Grants and subsidies.** List economic-development incentives, tax abatements, and payments to
   nonprofits. For each one, compare what was promised (jobs, investment) with what was delivered.
9. **Travel, vehicles, cards.** Look at purchasing-card and travel spending, and at take-home vehicle
   assignments per 100 employees compared with peers.

### 4. Debt and long-term liabilities (this feeds the debt clock)

From the most recent ACFR, and the five before it, extract:

- **Bonded debt:** every outstanding bond issue, with its type (general obligation or revenue),
  original amount, outstanding principal, interest rate, final maturity, and pledged revenue.
  Cross-check against the issuer's continuing disclosures on MSRB EMMA (emma.msrb.org).
- **Other debt:** notes, loans (including state revolving fund loans), leases, and subscription
  liabilities (GASB 87 and 96).
- **Pension:** the county's share of net pension liability in the state retirement system, plus any
  local plans. Record the funded ratio and the discount rate used.
- **OPEB:** the total liability for retiree health benefits, and whether it's prefunded.
- **Compensated absences** and any other long-term liabilities.
- **Debt service schedule:** principal and interest due each year until final maturity.
- **Denominators:** population, households, and taxable value for the same dates, all cited.

Do all of this for each entity from section 1 that files its own ACFR, and don't double-count
component units. Output the results in the JSON format in section 9.

### 5. Controls and compliance

- Read the **independent auditor's report**, the **management letter**, and the **Single Audit**
  (federal awards) for every year in scope. List every finding, material weakness, significant
  deficiency, and questioned cost. Note whether each one was repeated in later years; a finding that
  keeps coming back is a finding about management.
- Collect any state auditor reports, inspector general or internal audit reports, and state-level
  fiscal oversight reviews covering these entities.
- Check whether each entity has a working internal audit function and an audit committee.
- Check public-records compliance: whether budgets, check registers, contracts, and minutes are
  posted online and easy to find.

### 6. Benchmarking and context

Put every headline number in context: per resident, per household, as a share of taxable value, as
a change over time, and against {{PEER_COUNTIES}}. A raw dollar figure without a denominator is not
allowed in the report.

### 7. Response step

For every `DOCUMENTED` or `ANOMALY` finding, write the specific question you would send to the
responsible official, and name the office it goes to. Mark each response as `pending` until one is
received. **No finding is published as final until the entity has had a chance to respond.**

### 8. Public records requests

List every document you needed and couldn't find online. For each one, draft a public records request
under {{PUBLIC_RECORDS_LAW}} addressed to the right custodian, asking for electronic copies in their
native format (spreadsheets, not PDFs, where they exist).

### 9. Deliverables

Save these under `audit/{{COUNTY_SLUG}}/`:

1. `report.md` — the human-readable audit, in this order:
   - Executive summary of no more than ten findings, ranked by dollar impact, each with its label.
   - Entity map.
   - Revenue.
   - Spending.
   - Debt and liabilities.
   - Controls.
   - Benchmarks.
   - A "What looks fine" section. Say what you checked and found in order, so readers know it was
     examined and not skipped.
   - Could not verify.
   - Sources.
2. `findings.json` — one object per finding:
   ```json
   {
     "id": "IRC-2026-001",
     "entity": "Indian River County BOCC",
     "title": "short plain-English headline",
     "category": "contracts | payroll | debt | capital | revenue | controls | duplication | grants | other",
     "waste_type": "a | b | c | d | e | f | null",
     "label": "DOCUMENTED | CALCULATED | ANOMALY | POLICY_DISAGREEMENT",
     "summary": "two to three sentences",
     "impact_usd": { "low": 0, "high": 0, "method": "how you got it", "recurring": true },
     "fiscal_years": ["FY2024"],
     "sources": [{ "title": "", "url": "", "page": "", "retrieved": "YYYY-MM-DD" }],
     "question_for_officials": "",
     "response": { "status": "pending | received | none", "text": "", "date": "", "source": "" }
   }
   ```
3. `debt.json` — the input data for the debt clock:
   ```json
   {
     "entity": "Indian River County (primary government)",
     "fips": "12061",
     "as_of": "YYYY-09-30",
     "source": { "title": "FY20XX ACFR", "url": "", "page": "" },
     "components": {
       "bonds": 0, "notes_loans": 0, "leases_subscriptions": 0,
       "net_pension_liability": 0, "opeb": 0, "compensated_absences": 0, "other": 0
     },
     "total": 0,
     "population": { "value": 0, "source": "" },
     "households": { "value": 0, "source": "" },
     "history": [{ "as_of": "YYYY-09-30", "total": 0 }],
     "debt_service_schedule": [{ "fy": "FY2027", "principal": 0, "interest": 0 }]
   }
   ```
4. `records-requests.md` — the drafted requests from section 8.
5. `questions-for-officials.md` — the questions from section 7, grouped by office.

Before you finish, re-check every number in the executive summary against its source document. For
each one, write "verified" or "corrected" with a note.

---

## Indian River County values (first run)

| Placeholder | Value |
|---|---|
| `{{COUNTY}}` | Indian River County |
| `{{STATE}}` | Florida |
| `{{COUNTY_SLUG}}` | `fl-indian-river` |
| `{{FY_START}}` / `{{FY_END}}` | FY2016 / FY2025 (Florida county fiscal years run Oct 1 – Sep 30) |
| `{{FY_CURRENT}}` | FY2026-27 (adopted September 2026) |
| `{{PEER_COUNTIES}}` | Martin, St. Lucie, Brevard, Okeechobee, Charlotte, Sarasota |
| `{{CAPITAL_THRESHOLD}}` | $1,000,000 |
| `{{PUBLIC_RECORDS_LAW}}` | Florida Statutes Chapter 119 |

**Entities to include:** the Board of County Commissioners and the five constitutional officers;
the cities of Vero Beach, Sebastian, and Fellsmere and the towns of Indian River Shores and Orchid;
the School District of Indian River County; and the special districts, including the Hospital
District, Mosquito Control District, Sebastian Inlet District, and Soil & Water Conservation
District, plus the county's share of regional districts (St. Johns River Water Management District
and the Florida Inland Navigation District). Confirm this list against the state registry.

**Florida source pack** (start here, and confirm every URL still works):

- **Clerk of Circuit Court & Comptroller:** the ACFRs, the check register or transparency portal,
  and internal audit reports.
- **County Budget Office:** adopted and proposed budgets and capital improvement elements.
- **Property Appraiser:** taxable values, and the TRIM notices with rolled-back rates.
- **Florida Department of Financial Services, Local Government Annual Financial Reports:**
  standardized revenue and spending data for every Florida local government. This is the key
  dataset for peer benchmarking.
- **Florida Auditor General:** local government audit reports, and the list of entities that
  failed to file.
- **FloridaCommerce Special District Accountability Program:** the official registry of special
  districts.
- **Florida CFO and state DOGE local-government reviews** (2025 onward): check whether any of them
  covered Indian River County entities.
- **Florida Retirement System:** each employer's share of the pension liability, from the FRS
  GASB 68 schedules.
- **MSRB EMMA:** bond official statements and continuing disclosures.
- **USAspending.gov** and the **Treasury SLFRF reports** for federal awards and ARPA use.
- **Board meeting agendas and minutes** for votes on millage, contracts, and change orders.

**Known high-dollar local topics to check first:** these were chosen for size, not as conclusions.

- The county's legal spending on the Brightline litigation, and what came of it.
- Indian River Lagoon, septic-to-sewer, and stormwater spending compared with measured outcomes.
- What the Hospital District gets for its tax levy under its hospital lease arrangements.
- How the proceeds of Vero Beach's 2018 electric utility sale to FPL have been used.
- Whether ARPA funds were used for recurring costs.
- Fire and EMS costs per call compared with peer counties.
