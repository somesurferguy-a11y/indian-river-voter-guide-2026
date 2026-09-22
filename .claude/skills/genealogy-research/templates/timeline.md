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
| `key_lo` | The ten-digit integer `YYYYMMDDSS` of the **earliest** date the assertion permits | Unknown month `01`, unknown day `01`, bare year always `0101`. `SS` orders events within a day. An integer, never a decimal: `1735020800`, not `17350208.00` |
| `key_hi` | The eight-digit integer `YYYYMMDD` of the **latest** date the assertion permits | Unknown month `12`, unknown day = last of that month. No `SS`: nothing sorts inside the last day an assertion permits |
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
cal 1748-01-24                    calculated to a SINGLE date; arithmetic in notes
est 1730s                         estimated from context only; the weakest
from 1752-04 to 1771-04           a period of time, not an event
```

A **calculated range** is written `bet A and B`, with `calculated from age at X; see notes`
in `notes`. `cal` takes one date and one date only. Never `cal A / B`, never `cal bet A and B`.

Qualifiers append in square brackets and stack: `1735-02-08 [OS, 1734/5, Q]`

```
[OS]        Julian as recorded
[1748/9]    double-dated year (1 January - 24 March only, before the local change)
[Q]         Quaker numbered month, converted
[FR]        French Republican, converted
[R]         regnal, converted
[?]         the reading of the document itself is uncertain
```

These modifiers map to GEDCOM's date modifiers, but **GEDCOM's `CAL` and `EST` apply to a
single date only**: a calculated *range* has no GEDCOM equivalent and exports as `BET…AND`
with the calculation demoted to a note. Check what survived a round trip before trusting it.

---

## Sortable date key

1. Two **integer** columns: `key_lo` is ten digits `YYYYMMDDSS`, `key_hi` is eight digits
   `YYYYMMDD`. No decimal points anywhere. Sort `key_lo` ascending, then `key_hi` ascending.
   The tightest row comes first among rows that start together. Two rows may share a key; the
   key orders the sheet, `id` identifies the row.
2. Unknown components fill in **opposite directions**: `abt 1735` keys `1735010150` /
   `17351231`. A bare year *always* fills `0101` / `1231`, even when you suspect the season.
   Filling two bare years two different ways in one sheet is a silent sort bug.
3. A one-sided bound still needs both keys, **and the open end takes the floor, not the bound**.
   `bef 1799-11-26` keys `key_hi` 17991126 and `key_lo` at the tightest floor you can defend —
   a last known appearance, a marriage, a birth range — with `notes` saying where it came from.
   Keying a `bef` row at its own ceiling collapses it to a point and hides the window. Use the
   sentinels `0000000000` and `99999999` only when there is genuinely no bound; they sort to
   the edges of the sheet where you will see them. Set `prec = U`.
4. `SS` in `key_lo` orders events inside one day, with gaps so you can insert later:
   birth `00`, baptism `10`, marriage `20`, deed signed `30`, deed acknowledged `40`,
   deed recorded `45`, **any other event `50`**, will signed `60`, death `80`, burial `90`,
   probate or administration granted `95`. Use `SS` to order a same-day sequence; **never add
   a day to a key to force an order**, which falsifies a date the next reader cannot recheck.
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
| T-002 | 1728010150 | 17401231 | Y+ | -- | from 1728 to 1740 | -- | -- | New Garden MM / Chester Co. / Prov. Pennsylvania | Chester Co., Pa., USA | monthly meeting | Joseph and Mary Teale (principals) | No disciplinary minute naming them | original | undetermined | negative | New Garden MM men's minutes 1728-1740, [vol./p.; repository] | NEGATIVE EVIDENCE, not a nil search: run verified complete 1728-1740, [how]. Window set to the start of the minute book so it covers the whole of T-014's range, including the part before the 1730 marriage. Had the volume been lost this would bound nothing |
| T-014 | 1729112700 | 17301126 | Y | aged 69 years | bet 1729-11-27 and 1730-11-26 | Q | Cane Creek | not established (the register places the burial, not the birth) | -- | monthly meeting | Susannah Cray (principal) | Birth range implied by stated age at burial | original | secondary | direct | Cane Creek MM burials, [vol./p.; repository] | Calculated: burial 1799-11-26 minus 69 completed years, not 70. Informant not named in the register. Age stated at BURIAL and death precedes burial by days, so the true range opens a few days earlier. REJECTED: all but three weeks of it precedes the parents' marriage (T-001) and a complete minute run shows no disciplinary minute (T-002). Age overstated c. 5 yrs. Row retained as the conflict |
| T-003 | 1735020800 | 17350208 | D | born ye 8th d of ye 12 mo 1734 | 1735-02-08 [OS, 1734/5, Q] | Q | New Garden | New Garden MM / Chester Co. / Prov. Pennsylvania | Chester Co., Pa., USA | monthly meeting | Susannah Teale (principal) | Born, daughter of Joseph and Mary Teale | original | primary | direct | New Garden MM births, [vol./p.; repository] | Pre-1752 Quaker 12 mo = February; February is inside the double-dating window. Conflicts with T-014 |
| T-013 | 1799112690 | 17991126 | D | buried 26th d 11 mo 1799 | 1799-11-26 [Q] | Q | Cane Creek | Cane Creek MM / Orange Co. / North Carolina | Alamance Co., N.C., USA | monthly meeting | Susannah Cray (principal) | Buried | original | primary | indirect | Cane Creek MM burials, [vol./p.; repository] | The register asserts a BURIAL; the death is its own row, T-015, `bef 1799-11-26`, prec U, floor from the last row showing her living. Cane Creek MM is in present-day Alamance Co.; in 1799 the ground was Orange Co., Alamance having been formed from Orange in 1849 |
```

Rows are shown in sort order, which is not id order: `id` records the order you found things,
`key_lo` records the order the world produced them. Never renumber to make them agree.

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
- [ ] Rows with `prec = Y+` or `U` listed out as the next research plan, and every multi-year
      range is tagged `Y+` (not `Y`) and every one-sided bound `U` (not the precision of the
      bound it names), or they drop out of that filter and off your plan.
- [ ] No `key_lo` equals its own `key_hi` on a `bef` or `aft` row. That is the tell that a
      one-sided bound was keyed at its bound instead of at its floor.
- [ ] Every derived row is its own row: the record event (burial, grant of administration,
      baptism) and the bound you derived from it are never fused into one.
- [ ] Every negative row's window actually covers the claim it is used to exclude. Check the
      dates, not the sentence.
- [ ] Every conclusion's place names a row that carries it in `juris_then`. If no row carries
      it, it goes in the residue, not the conclusion.
- [ ] Date columns stored as text, key columns as integers with no decimal part, and an export
      round trip checked.
