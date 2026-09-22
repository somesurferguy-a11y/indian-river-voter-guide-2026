# Template: chronology table

Copy-paste artifact for `references/timeline-building.md`. One row per **assertion**, never
one row per document. Keep the header block with the table: the evidence column is
meaningless without the research question, and the bound convention is meaningless without
being stated.

---

## Header block

```
RESEARCH QUESTION:  ____________________________________________________
SUBJECT POOL:       ____________________________________________________
DATE CONVENTION:    bef / aft are INCLUSIVE ("on or before", "on or after")
KEY CALENDAR:       [ ] as recorded   [ ] normalised to proleptic Gregorian
LAST REBUILT:       ______________   REASON: ___________________________
```

Change the research question and the `ev` column is stale for every row. Recompute it; the
rows themselves survive.

---

## Column definitions

| Column | Definition | Rule |
|---|---|---|
| `id` | Stable row label, `T-001` | Never reuse, never renumber. Proof arguments cite these |
| `key_lo` | `YYYYMMDD.SS` of the **earliest** date the assertion permits | Unknown month `01`, unknown day `01`. `.SS` orders events within a day, assigned in tens |
| `key_hi` | `YYYYMMDD` of the **latest** date the assertion permits | Unknown month `12`, unknown day = last of that month |
| `prec` | `D` day, `M` month, `Y` year, `Y+` multi-year, `U` unbounded on one side | Filter to `Y+` and `U` to get your research plan |
| `date_rec` | The date **verbatim**, original spelling, original numerals | Never overwrite with your conversion |
| `date_norm` | Your normalisation in the notation below, with qualifiers | Show the arithmetic in `notes` |
| `cal` | `G` Gregorian, `J` Julian, `J/dd` Julian double-dated, `Q` Quaker numbered month, `FR` French Republican, `R` regnal, `H` Hebrew, `?` unknown | |
| `place_rec` | The place **verbatim** as the record writes it | |
| `juris_then` | Full jurisdictional stack **at the moment of the event** | Not as the record names it, and not as it is now |
| `juris_now` | Present-day equivalent | For putting a pin in a map |
| `rec_level` | Who created and kept the record: town, parish, county, registration district, state, national, church, private | Tells you where to search next and what a boundary change does |
| `subject` | Which person, **and their role**: principal, spouse, bondsman, witness, grantor, grantee, informant, neighbour | No person named in the record = no row for them |
| `assertion` | One assertion, phrased as the record puts it | If the cell needs "and," split the row |
| `src_class` | `original` / `derivative` / `authored narrative` | |
| `info` | `primary` / `secondary` / `undetermined`, **for this assertion** | One document routinely carries both |
| `ev` | `direct` / `indirect` / `negative`, **relative to the question in the header** | Negative *evidence* is not a negative *search result*: say which in `notes` |
| `cite` | Shortened citation, keyed to the source list | A row with no `cite` is a rumour. Delete it or source it |
| `notes` | Arithmetic, conflicts flagged by `id`, alternative readings, why you chose a bound, completeness claims for nil results | |

**Minimum viable subset** for notebook work: `id`, `key_lo`, `key_hi`, `date_norm`,
`juris_then`, `subject`, `assertion`, `info`, `ev`, `cite`.

---

## Date notation

One vocabulary. No `c.`, `ca.`, `circa`, `~`, `>`, `<`, or a bare `?`.

```
1757-05-04                        exact as recorded
abt 1735                          approximate; the record itself is soft
bef 1799-11-26                    on or before  (INCLUSIVE)
aft 1751-11-03                    on or after   (INCLUSIVE)
bet 1791-03-02 and 1793-02-28     inclusive at both ends
cal 1747-06-05 / 1748-06-04       calculated; show the arithmetic in notes
est 1730s                         estimated from context only; the weakest
from 1752-04 to 1771-04           a period of time, not an event
```

Qualifiers append in square brackets and stack: `1735-02-08 [OS, 1734/5, Q]`

```
[OS]        Julian as recorded
[1748/9]    double-dated year (1 January - 24 March only, before the local change)
[Q]         Quaker numbered month, converted
[FR]        French Republican, converted
[R]         regnal, converted
[?]         the reading of the document itself is uncertain
```

These modifiers match GEDCOM's date grammar, so the chronology survives export instead of
being flattened to single years.

---

## Sortable date key

1. Two integer columns, `key_lo` and `key_hi`. Sort `key_lo` ascending, then `key_hi`
   ascending. The tightest row comes first among rows that start together.
2. Unknown components fill in **opposite directions**: `abt 1735` keys `17350101` / `17351231`.
3. A one-sided bound still needs both keys. Set the open end to the tightest floor or ceiling
   you can actually defend, and record in `notes` where it came from. Use the sentinels
   `00000000` and `99999999` only when there is genuinely no bound; they sort to the edges
   of the sheet where you will see them. Set `prec = U`.
4. `.SS` in `key_lo` orders events inside one day. Assign in tens so you can insert later:
   birth `00`, baptism `10`, marriage `20`, deed signed `30`, deed acknowledged `40`,
   death `80`, burial `90`.
5. **All keys in one calendar.** Default to the calendar as recorded. If the chronology mixes
   regimes, normalise every key to proleptic Gregorian, tick the header box, and leave
   `date_rec` and `date_norm` untouched. For three or more calendar systems, use the Julian
   Day Number instead.
6. **Spreadsheet setup: date columns as TEXT, key columns as INTEGER.** Spreadsheet date
   types commonly cannot represent dates before 1900 and will coerce, reformat, or reject
   them, usually on a different machine than the one you built the file on.

---

## Blank table

```markdown
| id | key_lo | key_hi | prec | date_rec | date_norm | cal | place_rec | juris_then | juris_now | rec_level | subject | assertion | src_class | info | ev | cite | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T-001 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| T-002 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| T-003 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
```

CSV header for spreadsheet import:

```csv
id,key_lo,key_hi,prec,date_rec,date_norm,cal,place_rec,juris_then,juris_now,rec_level,subject,assertion,src_class,info,ev,cite,notes
```

---

## Filled rows, for shape

```markdown
| id | key_lo | key_hi | prec | date_rec | date_norm | cal | place_rec | juris_then | juris_now | rec_level | subject | assertion | src_class | info | ev | cite | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T-003 | 17350208.00 | 17350208 | D | born ye 8th d of ye 12 mo 1734 | 1735-02-08 [OS, 1734/5, Q] | Q | New Garden | New Garden MM / Chester Co. / Prov. Pennsylvania | Chester Co., Pa., USA | monthly meeting | Susannah Teale (principal) | Born, daughter of Joseph and Mary Teale | original | primary | direct | New Garden MM births, p. [cite] | Pre-1752 Quaker 12 mo = February; February is inside the double-dating window. Conflicts with T-014 |
| T-014 | 17291127.00 | 17301126 | Y | aged 69 years | cal bet 1729-11-27 and 1730-11-26 | Q | Cane Creek | Cane Creek MM / Guilford Co. / North Carolina | Guilford Co., N.C., USA | monthly meeting | Susannah Cray (principal) | Birth range implied by stated age at burial | original | secondary | direct | Cane Creek MM burials, [cite] | Burial 1799-11-26 minus 69 completed years. REJECTED: range all but three weeks precedes the parents' marriage (T-001), and a complete minute run shows no disciplinary minute (T-002). Age overstated c. 5 yrs. Row retained as the conflict |
| T-002 | 17301106.00 | 17400101 | Y+ | -- | from 1730-11 to 1740 | -- | -- | New Garden MM / Chester Co. / Prov. Pennsylvania | Chester Co., Pa., USA | monthly meeting | Joseph and Mary Teale | No disciplinary minute naming them | original | undetermined | negative | New Garden MM men's minutes 1728-1740 | NEGATIVE EVIDENCE, not a nil search: the run is complete for 1728-1740, verified [how]. Had the volume been lost this would bound nothing |
```

---

## QA checklist before you argue from it

- [ ] Research question written in the header, and `ev` recomputed against **this** question.
- [ ] No `assertion` cell contains "and."
- [ ] Every row has a `cite`.
- [ ] Every `date_rec` and `place_rec` is verbatim; no conversion has overwritten a source.
- [ ] Every derived date shows its arithmetic in `notes`, including which bound is inclusive.
- [ ] Every age statement produced a **range**, not a date, and the ranges were intersected,
      not averaged.
- [ ] Every `juris_then` is the jurisdiction on the event date, not the record date and not
      today. Boundary changes have their own rows, with the statute cited.
- [ ] Every `negative` row says in `notes` whether it is negative evidence or a nil search
      result, and carries the completeness claim if it is the former.
- [ ] Conflicts are flagged on **both** rows, by `id`, and rejected rows are retained.
- [ ] Sorted by `key_lo` then `key_hi`, and read straight through once looking for: two
      places at once, an event before birth or after death, a drifting age, a birth after the
      father's death, a marriage after a spouse's death, an impossible journey, a
      jurisdiction that did not yet exist.
- [ ] Rows with `prec = Y+` or `U` listed out as the next research plan.
- [ ] Date columns stored as text, key columns as integers, and an export round trip checked.
