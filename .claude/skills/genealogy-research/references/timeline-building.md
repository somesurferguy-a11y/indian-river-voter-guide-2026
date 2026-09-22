# Timeline building

Chronology as the correlation engine: how to turn a pile of records into one sortable
assertion table, handle dates from calendars that were not ours, normalise places whose
names outlived their boundaries, and catch the conflicts that only sequence reveals.

**When to load me:** you have more than about six records on a person, or any record whose
date is old-style, numbered-month, regnal, or derived from an age; or two same-named
candidates you need to separate; or a conclusion that "feels" wrong and you cannot say why.

Sibling files: `references/research-workflows.md` (planning, logs, negative results, when to
stop), `references/citation-management.md` (citation shape and the provenance chain),
`references/relationship-mapping.md` (kinship notation, identity conclusions, DNA),
`references/documentation-standards.md` (proof triad, reports, GPS self-audit).

---

## 1. Why a timeline, not a tree

A tree stores conclusions. Every node in it is already an answer, and the reasoning that
produced it has been thrown away. You cannot audit a tree, you can only believe it.

A timeline stores assertions in the order the world produced them, with each one still
attached to the record it came from. That is what makes it the correlation engine:

- **Conflicts become visible without being hunted.** Two rows that cannot both be true sit
  next to each other once the table is sorted. Nothing else in a research file has that
  property. A tree absorbs the same two records silently, because merging is what trees do.
- **Same-named people separate.** Two people are one person until the chronology makes them
  two. The impossibility that splits them is almost always a sequence fact (section 7).
- **Indirect evidence assembles.** No single row says "Susannah was the daughter of Joseph."
  A residence, a removal certificate, a marriage entry and a probate share-out in sequence
  say it jointly. That joint statement is the raw material of a proof argument.
- **Gaps are legible.** A four-year hole between two sibling births, or a decade in which a
  taxable man vanishes from a complete run of tax lists, is a research question you would
  never have thought to ask.

This is the Genealogical Proof Standard's **thorough analysis and correlation** element in
its most literal form. Correlation means putting items of information beside each other and
asking what they jointly permit. The timeline is the furniture for doing that. The BCG
standards on analysis and correlation, and on resolving conflicting evidence, both assume
something like it exists; they do not prescribe its shape, which is why yours has to be
deliberate.

Build the timeline **before** you draw a chart or enter anything in a tree program. The tree
is a publication format. The timeline is the workbench.

---

## 2. One row per assertion, not per document

The single most common structural mistake is one row per document. A document is not an
assertion. An 1804 Chester County probate file, taken apart, yields:

| From the same file | Assertion |
|---|---|
| Letters of administration granted | The subject died on or before the grant date |
| Bond names the county | He was resident in, or held property in, that county |
| Widow's renunciation | A named woman was his wife and survived him |
| Distribution account | Five named persons took shares, in stated proportions |
| Guardian bond for two of them | Two of the five were minors as of that date |
| Widow signs with a mark; two children sign autographs | A literacy assertion about three people |

That is at least ten rows, each with a different information type, a different evidence
type, and sometimes a different date. Collapsed into one row, none of the arithmetic works:
you cannot compute a birth range for a minor from a row whose date is the administration
grant, and you cannot flag the widow's mark against her signature on a later deed.

**The rule:** a row is one assertion, made by one record, about one person, at one moment.
If a cell would need the word "and," you probably have two rows.

### The column set

| Column | What goes in it |
|---|---|
| `id` | Stable row label (`T-014`). Never reuse or renumber. The proof argument cites these. |
| `key_lo` | Sortable earliest bound, `YYYYMMDD.SS` (section 3.9). |
| `key_hi` | Sortable latest bound, `YYYYMMDD`. |
| `prec` | Precision bucket: `D` day, `M` month, `Y` year, `Y+` multi-year, `U` unbounded one side. |
| `date_rec` | The date exactly as the record writes it, including the old spelling. Verbatim. |
| `date_norm` | Your normalisation, in the section 3.8 notation, with calendar qualifiers. |
| `cal` | Calendar regime of `date_rec`: `G`, `J`, `J/dd` (double-dated), `Q` (Quaker numbered), `FR`, `R` (regnal), `H` (Hebrew), `?`. |
| `place_rec` | Place exactly as the record writes it. Verbatim. |
| `juris_then` | Full jurisdictional stack at the moment of the event (section 4). |
| `juris_now` | Present-day equivalent, for finding it on a map. |
| `rec_level` | The jurisdiction level that created and held the record: town, parish, county, registration district, state, national, church, private. |
| `subject` | Which person the assertion is about, **and their role**: principal, spouse, bondsman, witness, grantor, grantee, informant, neighbour. |
| `assertion` | One assertion, phrased as the record puts it, not as you interpret it. |
| `src_class` | original / derivative / authored narrative. |
| `info` | primary / secondary / undetermined, **for this assertion** in this row. |
| `ev` | direct / indirect / negative, **relative to the research question written at the top of the sheet**. |
| `cite` | Shortened citation, keyed to the full citation in your source list. |
| `notes` | Arithmetic shown, conflicts flagged by `id`, alternative readings, why you chose a bound. |

Seventeen columns is not padding. Each one is load-bearing:

- `src_class`, `info` and `ev` are three different axes and a row can be original / secondary
  / indirect all at once. A death certificate is an original source; its "father's name" is
  secondary information (the informant did not witness the birth); and for a question about
  the decedent's parentage it is direct evidence, while for a question about the father's
  residence it is indirect. Keeping them in separate columns stops the usual collapse into a
  single vague "reliability" score.
- `ev` is **question-relative** by definition. Write the research question in a header cell
  above the table. When the question changes, that column is stale and must be recomputed;
  the rest of the table survives untouched (section 10).
- `subject` plus role is what lets you sort the whole file by person later, and what stops
  you inventing a row for someone the record does not actually mention. A tax list naming
  the householder asserts nothing about his wife. Do not create her row.
- `rec_level` tells you where to look next and what a boundary change does to your search.

**Minimum viable subset** if you are working in a notebook rather than a spreadsheet:
`id`, `key_lo`, `key_hi`, `date_norm`, `juris_then`, `subject`, `assertion`, `info`, `ev`,
`cite`. Drop the verbatim columns only if you have a transcript elsewhere; dropping them and
having no transcript is how silent normalisation (section 10) starts.

`templates/timeline.md` has the blank table, the CSV header, and the legend.

---

## 3. Date handling

### 3.1 Julian and Gregorian: the change has no single date

There is no "the year Europe changed." The Gregorian reform of 1582 was adopted jurisdiction
by jurisdiction over 341 years, so **the adoption date is a property of the place, not of the
year**. Well-established cases to reason from:

| Jurisdiction | Last Julian date | First Gregorian date | Days dropped |
|---|---|---|---|
| Papal states, Spain, Portugal, Poland, most of Italy | 4 Oct 1582 | 15 Oct 1582 | 10 |
| Denmark-Norway and the Protestant estates of the Holy Roman Empire | 18 Feb 1700 | 1 Mar 1700 | 11 |
| Great Britain, Ireland, and the British colonies including British North America | 2 Sep 1752 | 14 Sep 1752 | 11 |
| Sweden | 17 Feb 1753 | 1 Mar 1753 | 11 |
| Russia | 31 Jan 1918 | 14 Feb 1918 | 13 |

France adopted in December 1582. The Dutch provinces split: the maritime provinces changed in
1582 and 1583, several northern and eastern provinces not until 1700 and 1701. Greece changed
its civil calendar in 1923. **Never carry any of these from memory into a conclusion.** Look
up the specific jurisdiction for the specific year and record where you looked, in `notes`.
Two neighbouring territories could be eleven days apart for over a century, and
correspondence between them routinely carried both dates.

The offset is not fixed: Julian ran 10 days behind Gregorian from 1582 to 28 February 1700,
11 days from 1 March 1700 through 1799, 12 days in the 1800s, 13 days from 1900. If you
convert, you must know which century you are in.

**Convention for recording**, the mainstream genealogical one and the one used throughout this
file: transcribe the day and month exactly as written and **do not shift them**; handle the
year with double dating (3.2); flag the row `cal = J`. Shift the day only for the sort key,
and only when the chronology mixes regimes (3.9). Silent day-shifting is unrecoverable by the
next reader.

### 3.2 Double dating, 1 January to 24 March

Before the 1752 change the English civil and ecclesiastical year began on 25 March (Lady Day),
so a record written "12 February 1748" in London or Boston falls in the year we call 1749. The
window is **1 January through 24 March inclusive**; outside it the year is unambiguous.

The Calendar (New Style) Act 1750 moved the year start to 1 January effective 1 January 1752,
so the year 1751 in England and its colonies ran only from 25 March to 31 December, 282 days.
The eleven-day drop came separately in September 1752. Two changes, two dates, and people
conflate them constantly.

**Correct written form:** `12 February 1748/9`. Old-style year, slash, new-style year.

- Not `1748/49`, not `1748-9`, not `1749 (1748 OS)`. One form, everywhere.
- Never double-date a month outside the window: `12 June 1748/9` is simply wrong.
- Never double-date after the jurisdiction's own change: `3 March 1760/1` in Pennsylvania is wrong.
- **Scotland is the trap inside the trap.** Scotland moved its year start to 1 January in
  **1600**, by an act of James VI's Privy Council in 1599, so Scottish records need double
  dating only before 1600. Scotland nonetheless stayed on the Julian calendar until 1752 with
  England. Year start and calendar are independent variables, and Scotland changed one without
  the other.

In this file: `date_rec` = `ye 12th of Feb 1748`, `date_norm` = `1749-02-12 [OS, 1748/9]`,
`cal` = `J/dd`.

### 3.3 Quaker numbered months

Quakers avoided month and weekday names of pagan derivation and numbered them instead. The
numbering follows the civil year start, so **the same numeral means different months on either
side of 1752**:

| Numeral | Before the change | From 1752 |
|---|---|---|
| 1st month | March | January |
| 3rd month | May | March |
| 9th month | November | September |
| 10th month | December | October |
| 12th month | February | December |

`8th day of 12th month 1734` is 8 February 1734/5; `2nd day of 12th month 1759` is 2 December
1759. Both are "12th month." This is the richest single source of silent five-to-ten-month
errors in Quaker-descended research, and it propagates: a birth misdated by ten months wrecks
every interval check you later run against it.

1. **Keep the numeral.** `8th d 12 mo 1734` in `date_rec`, the conversion in `date_norm`. A
   reader who disagrees can then redo it.
2. **Treat 1752 itself as ambiguous** unless the register proves otherwise. Many meetings
   changed numbering at the start of 1752; some clerks ran the old numbering into the year.
   `4th d 4 mo 1752` enters as `bet 1752-04-04 and 1752-06-04`, `prec = M`. Diagnostic move:
   read the register's surrounding entries in sequence for the changeover, or find an entry
   giving both a numeral and a name.
3. **Use the numbered weekday as a free check.** Quakers numbered weekdays too (First Day =
   Sunday). Run your converted date through a perpetual calendar; if the weekdays disagree,
   your conversion, your reading, or the clerk is wrong, and it is worth knowing which.

Non-British Quaker records and later American meetings vary; check the meeting's own practice.

### 3.4 Regnal years

English and later British legal instruments are routinely dated by the year of the sovereign's
reign. **A regnal year does not align with a calendar year.** It runs from the accession
anniversary, straddles two calendar years, and cited alone is a range, not a date.

George III acceded 25 October 1760, so his fifth regnal year runs 25 October 1764 to 24 October
1765, and `the twelfth day of May in the fifth year of the reign of George the Third` resolves
to **12 May 1765**. Get the half of the regnal year wrong and you are out by a year. Cited
alone, `5 Geo. III` enters as `bet 1764-10-25 and 1765-10-24`, `prec = Y+`.

- Regnal reckoning is jurisdiction-specific: England, Scotland and Ireland did not always
  reckon alike, and a monarch's English and Scottish numbers can differ.
- **Charles II is the classic trap.** His regnal years were reckoned from his father's
  execution on 30 January 1648/9, so his twelfth year began in January 1659/60, months before
  the Restoration. Documents survive dated in early regnal years of a reign that was not, in
  any practical sense, happening. The Interregnum itself has no regnal years.
- Some medieval reigns were not reckoned from a fixed calendar date at all. King John's regnal
  years ran from Ascension Day, a movable feast, so they vary in length and need an Easter
  table.
- Medieval and early modern documents frequently combine a regnal year with a **feast day**
  rather than a day of the month. That needs both a regnal table and a table of movable
  feasts. Do not estimate; look both up and name the reference in `notes`.
- British statutes of the period are cited by regnal year and chapter. If you need to cite one,
  take the chapter number from the statute. Do not reconstruct it.

`date_rec` = the regnal phrase verbatim, `date_norm` = `1765-05-12 [R]`, `cal` = `R`.

### 3.5 The French Republican calendar

In force in France from its epoch of **22 September 1792** until Napoleon abolished it
effective **1 January 1806**, with a brief revival during the Paris Commune in 1871. It was
formally adopted in October 1793 but applied retroactively to the epoch, so records from late
1792 onward carry Republican dates.

You meet it in French *état civil* registers and notarial acts, and in the records of
territories annexed to France during the period, including what are now Belgium and Luxembourg,
parts of the Rhineland, and the Netherlands under annexation. Belgian and Luxembourgish civil
registration begins inside this window, so a researcher who never touches France still needs
the conversion.

Twelve months of thirty days (Vendémiaire, Brumaire, Frimaire, Nivôse, Pluviôse, Ventôse,
Germinal, Floréal, Prairial, Messidor, Thermidor, Fructidor), each of three ten-day *décades*,
plus five or six complementary days at the year's end. Years run in Roman numerals from the
epoch and begin near the autumn equinox, so a Republican year spans two Gregorian years and
`an VII` cited alone is a range, exactly like a regnal year. Use a published conversion table
or calculator, never arithmetic by hand; keep the Republican date verbatim in `date_rec`; flag
`cal = FR`. Registers of the period commonly give both forms, which is your check.

Other regimes to flag rather than guess at: Hebrew dates in Jewish community registers, Hijri
dates in Ottoman and other Islamic records, and Julian dates persisting in Orthodox church
registers long after the surrounding state had changed.

### 3.6 Dates derived from ages

**An age at an event yields a birth range, never a birth date.** Losing this is the commonest
cause of false precision in a chronology.

A person stated to be `aged 22` on 1770-06-04 had completed 22 years and not 23:

```
born bet 1747-06-05 and 1748-06-04     prec = Y     cal 1747-06-05 / 1748-06-04
```

Both boundaries are inclusive: after the 23rd-birthday cut-off, on or before the 22nd-birthday
date. An off-by-one here costs a full year.

| Age statement | Range it actually supports |
|---|---|
| `aged 22 years, 4 months, 11 days` at a stated date | A single day, if the informant computed correctly |
| `aged 22` | 1 year |
| `aged about 22` | Widen by a margin you state; 2 to 3 years either side is common practice |
| `aged 20` or `aged 45` in a census | Widen further: ages ending in 0 and 5 are heaped and the true value drifts toward the round number |
| `of full age` / `aged 21 and upwards` | `bef` the event date minus 21 years, nothing more |
| `a minor` / `an infant` in Anglo-American probate | `aft` the event date minus the local age of majority |

- **Self-reported and proxy-reported ages differ.** A census age given by a neighbour, or a
  death-record age given by a grandchild, is secondary information about the birth. Mark it
  `info = secondary` and do not let it outrank a contemporary birth or baptism entry on its own.
- Ages inflate in old age more often than they deflate, and marriage-record ages compress
  toward the partner's.
- Many carved and printed ages in years, months and days were computed by a **30-day-month
  method** treating every month as thirty days. Reversing one with true calendar months will be
  off by a few days roughly a third of the time. If an exact birth date matters, say in `notes`
  which method you assumed.
- **Overlap, do not average.** Five age statements give five ranges, and the answer is their
  intersection. An empty intersection is a conflict (section 6), which is information;
  averaging destroys it.

### 3.7 Boundary dates: on or before, on or after

Most old dates are bounds on an event, not the event. Record the bound, not a guess.

| The record gives | The event | The bound | Typical lag |
|---|---|---|---|
| Burial entry | Death | `bef` burial date | Days. Longer in hard winters, in epidemics, or where the ground was frozen |
| Grant of administration or probate | Death | `bef` the grant or probate date | Weeks to years; intestacy can wait until an heir needs title |
| Will signed | Death | `aft` the signing date | Hours to decades. A will is not a deathbed act |
| Will signed, naming a living wife | That wife alive | `on` the signing date, and nothing about the probate date | Do not let probate imply she survived |
| Marriage bond or licence | Marriage | `aft` the bond date, and the marriage may never have happened | Usually days; same day is common |
| Banns called | Marriage | `aft` the first calling | Weeks; again, may not have followed |
| Baptism entry | Birth | `bef` the baptism date | Days to decades. Adult and group baptisms blow up naive assumptions |
| Deed dated | Grantor alive and competent | `on` the date of the instrument | |
| Deed acknowledged in open court | Grantor physically at that courthouse | `on` the acknowledgment date | A presence assertion, and a strong one |
| Deed recorded | Nothing about the grantor | `aft` the instrument date | Days to decades; proves only when the clerk wrote |
| Last appearance on a complete tax list | Present and taxable | `on` the assessment date, departure `aft` it | The assessment date is not the list's date. Find out which you have |
| Court term with no day given | The act | `bet` the term's first and last sitting day | Look up the term's actual sitting dates; do not use the whole month |

**`bef` and `aft` are inclusive.** `bef 1799-11-26` means "on or before 26 November 1799."
Write the convention on the sheet so the next reader cannot invert it.

One deed legitimately produces three rows: dated, acknowledged, recorded. Only the first two
are presence assertions, and only the acknowledgment places the person somewhere specific.
That distinction does real work in sections 6 and 7.

### 3.8 Notation

One vocabulary, used in `date_norm` and in every example in this file and in
`templates/timeline.md`. Do not mix in `c.`, `ca.`, `circa`, `~`, `>`, `<`, or a bare `?`.

```
1757-05-04                        exact as recorded
abt 1735                          approximate; the record itself is soft
bef 1799-11-26                    on or before
aft 1751-11-03                    on or after
bet 1791-03-02 and 1793-02-28     inclusive at both ends
cal 1747-06-05 / 1748-06-04       calculated; show the arithmetic in notes
est 1730s                         estimated from context only, no arithmetic; the weakest
from 1752-04 to 1771-04           a period of time, not an event
```

Qualifiers append in square brackets and stack, e.g. `1735-02-08 [OS, 1734/5, Q]`:

```
[OS]  Julian as recorded          [1748/9]  double-dated year
[Q]   Quaker numbered month       [FR]      French Republican, converted
[R]   regnal, converted           [?]       the reading of the document is uncertain
```

`abt`, `bef`, `aft`, `bet…and`, `cal`, `est` and `from…to` are also the date modifiers in
GEDCOM's date grammar, so a chronology written this way survives export instead of being
flattened. GEDCOM also carries an explicit calendar escape for Julian, French Republican and
Hebrew dates; check your program's exact syntax before relying on it, because consumer software
frequently drops it on import.

### 3.9 The sortable date key

A chronology of mixed precision will not sort on a text date column. Two integer columns fix it.

```
key_lo = YYYYMMDD of the earliest date the assertion permits, plus .SS intra-day sequence
key_hi = YYYYMMDD of the latest date the assertion permits
```

1. **Unknown components fill in opposite directions.** Unknown month: `01` in `key_lo`, `12` in
   `key_hi`. Unknown day: `01` in `key_lo`, the last day of that month in `key_hi`. So
   `abt 1735` becomes `17350101` / `17351231`.
2. **One-sided bounds still need two keys.** For `bef 1799-11-26`, set `key_lo` to the tightest
   floor you can defend (a last known appearance, a marriage, a birth range) and say in `notes`
   where it came from. Choosing that floor is an analytic act, not bookkeeping. Only when there
   is genuinely no floor use the sentinel `00000000`, which sorts to the top of the sheet where
   you will see it; mirror image `99999999` for an unbounded `aft`. Set `prec = U`.
3. **`.SS` orders events inside a day.** Two digits assigned in tens so you can insert later:
   birth `00`, baptism `10`, marriage `20`, death `80`, burial `90`.
4. **Sort on `key_lo` ascending, then `key_hi` ascending.** That puts the tightest row first
   among rows that start together, which is what you want reading down the page.
5. **Sort on `prec` to find your work.** Filtering to `Y+` and `U` gives you, in one click, the
   rows whose looseness is holding the argument back. That list is your research plan; hand it
   to `references/research-workflows.md`.
6. **Keys live in one calendar.** Default to the calendar as recorded, which is fine when the
   whole chronology sits in one regime. When it does not, for instance a family with records in
   both Pennsylvania (Julian until 1752) and France (Gregorian since 1582), normalise every key
   to proleptic Gregorian, mark the column header, and leave `date_rec` and `date_norm`
   untouched. A Julian 20 February 1719/20 is 2 March 1720 Gregorian and keys `17200302`, so it
   now interleaves correctly with a French record of the same season. For three or more calendar
   systems the Julian Day Number is a cleaner single key than any `YYYYMMDD` scheme.
7. **Store the date columns as text and the key columns as integers.** Spreadsheet date types
   commonly cannot represent dates before 1900 and will silently coerce, reformat, or reject
   them. This is the mechanism behind most of the corruption in section 10.

---

## 4. Place normalisation

Every row carries three place facts, because they answer three different questions.

| Column | Question it answers | Example |
|---|---|---|
| `place_rec` | What did the clerk write? | `Deep Creek, Orange County` |
| `juris_then` | Who had jurisdiction the day it happened? | `Deep Creek / Orange Co. / Province of North Carolina` |
| `juris_now` | Where do I point a map? | `Guilford Co., North Carolina, USA` |
| `rec_level` | Who created and kept the record? | `county court` |

**Record the jurisdiction as it was at the moment of the event**, not as the record names it.
These differ more often than people expect, because a record can be created years after the
event it describes, by which time the county has changed, and clerks and abstractors both
back-project. An 1850 deed reciting a 1771 conveyance will name the 1850 county.

### Boundary changes, and the family that did not move

When a county is created from its parents, everybody inside the new line acquires a new
county without going anywhere. The tell in your chronology is a change of jurisdiction with
no change of neighbours, no land transaction, and no church removal. That is not migration;
it is cartography.

The two errors are symmetrical and both common:

- **Inferring a move from a name change.** The family is in the same house on the same creek.
- **Inferring continuity from a name.** A county name reused after subdivision may cover
  quite different ground.

**Parent-county research** is the operational consequence. If your subject was in a county
formed in 1771, his earlier records are in whichever parent county held that ground, and his
earlier deeds may be recorded there and never re-recorded. Work the county-formation chain
backwards to the colonial or territorial parent, and note in `notes` which reference gave
you the chain. Records also do not always move with the line: a deed recorded in the parent
county before the split usually stays in the parent county's books forever.

Make the boundary change **its own row** in the timeline, with the statute or the county
formation reference as the source. It is an assertion about the world that changes where
you search, so it belongs in the sequence like any other.

### Record loss

Record loss is a property of a jurisdiction and a period, never of a family. Before you
conclude that someone left no records, find out whether the jurisdiction's records survive
for those years. Well-established losses to reason from: the 1890 United States federal
census, lost after a 1921 fire; the destruction of the Public Record Office of Ireland in
1922, which took most pre-1901 Irish census returns and a very large body of testamentary
records; and the 1973 fire at the National Personnel Records Center in St. Louis, which
destroyed a large share of twentieth-century US Army and Air Force personnel files. County
courthouse fires in the American South are common enough that "burned county" is standard
vocabulary.

The remedy is structural, and each option is a different `rec_level`:

- **Up a level**: state or colonial land grants, state censuses, higher courts on appeal.
- **Sideways**: the parent county, the daughter county, the adjoining county where the
  family's church, market or in-laws were.
- **Different creator**: church registers, tax lists, militia rolls, newspapers, private
  land company records, undertakers' and cemetery records.

In your chronology, a burned jurisdiction shows up as an unexplained silence. Record the
silence as a row with an explicit source for the loss, so that you and the next reader can
tell it apart from a silence you have not yet investigated. The distinction between a
**negative search result** and **negative evidence** turns on exactly this: absence from a
record set that survives complete is evidence; absence from a record set that burned is
nothing at all.

### Record level and the nesting

In the United States, the level that holds vital information varies by region and era, and
knowing which saves weeks. New England towns kept vital records from the colonial period;
in most of the South and Midwest the county was the record-keeping unit and there is often
no town layer at all; statewide vital registration mostly arrives between the 1850s and the
1920s, unevenly, with early years poorly complied with. A city may be inside its county, or
independent of it with its own records. An event "in" a place may have been recorded by the
town, the county, the state, or a church, and only one of those has the paper.

**Non-US analogues.** England and Wales: the ancient **parish** is the pre-1837 unit, and
from 1 July 1837 civil registration runs through **registration districts** built on Poor
Law unions, which respect neither parish nor county lines, so the district that holds a
birth may be named for a town your family never lived in. Scotland's statutory registration
begins in 1855 and is organised by registration district on a different pattern again.
Historic counties have also been abolished and redrawn: records for a place in historic
Middlesex are now sought under Greater London, created in 1965. In Germany, the civil
registry office, the *Standesamt*, begins in Prussia in 1874 and across the empire in 1876;
before that the church books are the registration, and sovereignty changes mean the place
name in the record and the place name on a modern map may be in different languages and
different countries. In Ireland, the Roman Catholic parish and the civil parish rarely
coincide, and the **townland** is the fundamental land unit that ties them together.

Where a record now physically sits, and how to express that in a citation, belongs to
`references/citation-management.md`. The timeline records the jurisdiction; the citation
records the repository.

---

## 5. Interval plausibility checks

These are **flags that trigger scrutiny**. None of them is proof of anything, in either
direction.

| Interval | Conventional flag window | Outside it, suspect |
|---|---|---|
| Mother's age at a child's birth | roughly 15 to 45 | A wrong mother, a merged pair of same-named women, a grandchild recorded as a child, a misread age |
| Father's age at a child's birth | above roughly 16 | A wrong father, or a junior conflated with a senior |
| Gap between one woman's successive children | roughly 18 to 36 months in a non-contracepting population where infants were breastfed | Under ~12 months: two mothers, a twin recorded separately, or a wrong year. Over ~48 months: a missing child, a lost register, a stillbirth, an absent husband, or a wrong family |
| Marriage to first birth | 8 months or more | Under 8 months: a pre-marital conception (ordinary in many communities and eras), a second marriage, or a wrong date |
| Widowhood to remarriage | weeks to a couple of years | A very fast remarriage is **not** suspicious, especially for a widower with young children; a very slow one is not either. This row flags almost nothing on its own |
| Father's death to a child's birth | up to about 9 months after death | A posthumous child inside that window is entirely legitimate and appears constantly in probate. Beyond roughly 10 months, suspect a wrong death date, a wrong father, or a second man of the name |
| Age of majority in Anglo-American records | commonly 21 | A person acting alone in a conveyance or as an executor is usually of age; a person with a guardian is usually not |
| Guardianship in Anglo-American probate | the court appointed for children under 14; children of 14 and over chose their own | A minor who chooses a guardian is 14 or older: that is a hard `bef` bound on the birth |
| Apprenticeship and binding out | indentures typically ran to 21 for boys and to 18 or marriage for girls | Verify against the local statute; practice varied |
| Militia and draft ages | the 1792 US militia legislation enrolled free able-bodied white male citizens aged 18 to under 45; the September 1918 US draft registration covered men aged 18 through 45 | Every registration and statute has its own band, printed on the form or in the act. Read it rather than assuming |
| Tithable and poll-tax ages | statutory, and changed repeatedly within a single colony or state | Never assume. Look up the statute for that jurisdiction in that year. An assumed tithable age silently shifts a birth estimate by years |

**The base-rate caution, stated plainly.** A flag tells you that the shape in front of you is
uncommon in your data. It does not tell you that this instance is wrong. Forty-eight-year-old
mothers exist. Six-year birth gaps with no missing child exist. Uncommon events happen at
their base rate, and a chronology with forty rows will contain a few of them by arithmetic
alone. Treat a flag as a reason to go and look, and record the flag in `notes` whether or not
the look changes anything.

**The inverse error is worse and is less often named.** An interval that passes every check
is not evidence of identity. Most wrong candidates also pass, because the checks are wide.
"The dates work" is the weakest sentence in genealogy. Impossibility separates people;
possibility never joins them.

---

## 6. Conflict detection patterns

Sort the table and read down it looking for these shapes.

| Shape | What it looks like | Innocent explanations to exclude first | Diagnostic move |
|---|---|---|---|
| **Two places at once** | Two presence assertions, same day or overlapping, in jurisdictions he cannot have spanned | One row is a recording date, not a presence date. One is an attorney or agent acting in his name. One is a derivative that copied a term date wrongly | Downgrade every row to what it actually asserts (section 3.7). If both survive as presence assertions, you have two people |
| **Event before birth or after death** | A grantor conveying land eleven years after his estate was administered; a witness aged four | A junior and a senior of the same name. A widow trading under her husband's name. A life estate falling in | Re-read the record for `Jr.`, `Sr.`, `the elder`, `dec'd`, `late of`. Then build parallel timelines (section 7) |
| **Drifting age** | Stated ages across five records imply birth years spread over a decade | Rounding, heaping, proxy informants, deliberate understatement at marriage and overstatement for a pension | Compute all five ranges and intersect them. An empty intersection is a real conflict; a narrow one is a result |
| **Child born after the father's death** | Birth or baptism dated after the burial or probate | Wholly legitimate up to about nine months. Also: a wrong probate date, a posthumous naming of the father, a second man | Check the gap against nine months. Inside it, record it as normal and note it. Outside it, treat as conflict |
| **Marriage after a spouse's supposed death** | He remarries while she is still appearing in records | Two women of the same name. A divorce or desertion. A wrong death attribution, often from a same-named relative's burial | Test whether the "death" row and the later "alive" rows can be two different women before assuming bigamy |
| **Impossible journey** | Consecutive presence assertions the era's transport cannot connect | The lag between an event and its recording. A route faster than you assumed, by water | Reason in orders of magnitude, not constants: an eighteenth-century Anglo-American rider might make 25 to 40 miles a day in good conditions, a family moving with wagons and stock far less, often 10 to 15; a transatlantic crossing under sail commonly ran six to twelve weeks westbound. Rail changes everything from the mid-nineteenth century. Verify against the actual route, season and conveyance |
| **A jurisdiction that did not yet exist** | A record dated 1748 that names a county created in 1771 | An abstractor or a later copyist updated the name | This is a dating tell for the *source*, not the event. Reclassify the source and go find the original |
| **Suspiciously round data** | Every age ends in 0 or 5; several events fall on 1 January | Heaping and clerk convenience | Widen the ranges rather than trusting the precision |

Log every conflict in `notes` on **both** rows, by `id`, so it cannot be lost when you sort.
Resolution of conflicting evidence is a GPS element in its own right, and it has to be
written up, not just fixed: see `references/documentation-standards.md`.

---

## 7. The two-person collision test

The workhorse. You cannot separate two same-named people by arguing about them; you separate
them by finding a single row pair that cannot describe one life.

**Procedure**

1. Pool every row for the name in one chronology, with `subject` set to
   `Bartholomew Cray, unassigned` for all of them. Resist assigning anything yet.
2. Sort and read for the shapes in section 6, looking specifically for a hard impossibility:
   an event after a death, a conveyance of land already conveyed, two simultaneous presences.
3. Split into three columns: **A**, **B**, **unassigned**. Every row goes into one.
4. Anchor each column with a row that can belong to nobody else.
5. Propagate outward using **linked evidence**, never similarity. Chain of title is the
   strongest chronological spine there is: the grantor in a later deed must be a person who
   held title under an earlier one, so the deeds themselves order the men.
6. Stop where the evidence stops, and leave the unassigned column visible.
7. Hand the identity conclusion over. The chronology shows that two men existed and which
   rows belong to which; who those men were to each other is kinship work and belongs to
   `references/relationship-mapping.md`.

**Worked example.** Question: *which Bartholomew Cray sold 150 acres on Deep Creek, Guilford
County, North Carolina, in 1786?*

| id | key_lo | date_norm | assertion | col |
|---|---|---|---|---|
| C-01 | 17620401 | 1762 [tax] | Bartholomew Cray taxed, Rowan Co. | ? |
| C-02 | 17710101 | 1771 | The Deep Creek land passes from Orange and Rowan to the new Guilford Co. | both |
| C-03 | 17740412 | 1774-04-12 | Bartholomew Cray, grantor, acknowledges a deed in open court, Guilford Co. | ? |
| C-04 | 17780401 | 1778 [tax] | **Two** entries on one list: Bartholomew Cray and Bartholomew Cray Junr. | both |
| C-05 | 17810801 | bef 1781-08 | Administration granted on the estate of Bartholomew Cray, dec'd, Guilford Co. | A |
| C-06 | 17860520 | 1786-05-20 | Bartholomew Cray, grantor, 150 a. on Deep Creek | B |
| C-07 | 17910302 | 1791-03-02 | Bartholomew Cray signs his will, Guilford Co. | B |

The impossibility is C-05 against C-06 and C-07: a man whose estate was administered in 1781
does not convey land in 1786 or sign a will in 1791. That alone establishes **at least two**
men of the name in one county.

C-04 had said so already, three years earlier, for free. It was found by reading the whole
tax list instead of the one line with the right name on it. Read the whole list, every time.

Assignment then proceeds by title, not by plausibility. If the tract in C-06 is the tract
C-03 conveyed away, the 1786 grantor cannot be the 1774 grantor unless he reacquired it, and
the deed books will say. C-01 stays unassigned unless the junior's age excludes him: if the
tithable age in that jurisdiction in 1762 was sixteen and the junior was not yet sixteen,
C-01 is A's, and you have now made an interval check do identity work. Look the statutory
age up; do not assume it.

Three cautions:

- **"Junr." in early Anglo-American usage means the younger of two men of that name in the
  community, not the son of the elder.** It is a disambiguator, and it moves: when the elder
  dies, the junior often becomes the senior in the next record, and a third man becomes the
  junior. Treat it as a label on a row, not a relationship.
- **Two is a floor, not a count.** An impossibility proves at least two. A third can hide
  behind rows you assigned too eagerly. Re-run the test after each assignment pass.
- **Do not delete the merged chronology.** The unresolved pool is the evidence that the
  separation was necessary, and the proof argument needs it.

---

## 8. Migration and life-stage chronologies

Following a family across jurisdictions is bracketing: you want the last defensible presence
in the old place and the first in the new, and the narrower that pair, the better.

| Marker | What it actually asserts | Characteristic lag |
|---|---|---|
| **Tax list** | Resident and taxable on the **assessment date** | The assessment date is often months before the list's date or its court presentation. Find out which date you have. First appearance gives arrival `bef` the assessment date; last appearance gives departure `aft` it |
| **Land purchase** | Ownership, and nothing whatever about residence | Settlers routinely squatted, rented, or bought sight-unseen. Purchase can precede arrival by years or follow it by more |
| **Land sale in the old place** | He still had title | Frequently lags the physical move by years; absentee sales are normal. A sale is weak evidence of a departure date |
| **Grant or patent from the state or crown** | Completion of a multi-stage process | Entry or warrant, then survey, then grant, each dated. The grant date can be many years after the entry. The **entry** is the earliest presence assertion in the chain |
| **Deed recording** | When the clerk wrote | Days to decades after the instrument. Never a presence assertion |
| **Church certificate of removal or dismission** | Membership transferred | The best bracket available in congregations that used them. Granted at the origin (departure `aft` that date), produced and recorded at the destination (arrival `bef` that date). Weeks to a year between the two, and an unusually long gap is itself a question |
| **Church admission by letter** | Arrival and settling in | Often lags arrival by a season or more |
| **Militia roll, jury list, road order, poll list, voter list** | Physical presence and, usually, an age and residence qualification | Small lag, but the qualification is statutory: read it |
| **Witnessing a neighbour's deed or will** | Present at that place on that day | None. One of the cleanest presence assertions in the record |

Two habits that pay:

- **Bracket, then state the bracket as one row.** Certificate granted 1751-11-03, received
  1752-04-05: the journey is `from 1751-11-03 to 1752-04-05`, entered as a period, not as
  two separate events you will later misremember as a date.
- **Use the silence, but only where the record set is complete.** A man absent from a
  complete run of annual tax lists between two years in which he appears has a story to
  explain: that is negative evidence and it bounds a range. The same absence in a year whose
  list is lost is a negative search result and bounds nothing. Record which you have, with a
  source for the completeness claim. `references/research-workflows.md` covers how to log
  and cite nil results.

Life-stage chronologies use the same machinery on one person: apprenticeship, coming of age,
first appearance on a tax list, marriage, first land, first public office, last land,
probate. Stages that are missing where they should be present are research questions.

---

## 9. Worked example

**Research question:** When was Susannah (Teale) Cray, who died in Guilford County, North
Carolina, in 1799, born, and where?

Eleven records, in the order they were found, which is not the order they happened.

```
S1  New Garden MM, Chester Co., Pa., marriages: Joseph Teale & Mary Bowater, 5th d 9 mo 1730
S2  Same, births: "Susannah, daughter of Joseph & Mary Teale, born ye 8th d of ye 12 mo 1734"
S3  Same, births: "Joseph, son of Joseph & Mary Teale, born ye 3rd d of ye 3 mo 1737"
S4  Same, men's minutes, 1728-1740, complete run: no disciplinary minute naming Joseph or
    Mary Teale
S5  Same, certificate of removal to Friends in North Carolina, 3rd d 9 mo 1751, naming
    Joseph, Mary, and their children including Susannah
S6  Cane Creek MM, N.C., certificate received and recorded, 4th d 4 mo 1752
S7  Cane Creek MM marriages: Susannah Teale & Bartholomew Cray, 4th d 5 mo 1757
S8  Cane Creek MM births: first child of Bartholomew and Susannah Cray, 2nd d 12 mo 1759
S9  Act creating Guilford County from Rowan and Orange, effective 1771
S10 Guilford Co. will of Bartholomew Cray, signed 2 March 1791, proved at the court term of
    February 1793, naming "my wife Susannah"
S11 Cane Creek MM burials: "Susannah Cray, wife of Bartholomew, buried 26th d 11 mo 1799,
    aged 69 years"
```

Sorted chronology, core columns:

| id | key_lo | key_hi | prec | date_norm | juris_then | subject | assertion | info | ev | src |
|---|---|---|---|---|---|---|---|---|---|---|
| T-01 | 17301105.00 | 17301105 | D | 1730-11-05 [OS, Q] | New Garden MM / Chester Co. / Prov. Pennsylvania | Joseph Teale; Mary Bowater | Married under the care of the meeting | primary | indirect | S1 |
| T-02 | 17301106.00 | 17400101 | Y+ | from 1730-11 to 1740 | as above | Joseph & Mary Teale | No disciplinary minute in a complete run | undetermined | **negative** | S4 |
| T-03 | 17350208.00 | 17350208 | D | 1735-02-08 [OS, 1734/5, Q] | as above | Susannah Teale | Born, daughter of Joseph & Mary | primary | direct | S2 |
| T-04 | 17370503.00 | 17370503 | D | 1737-05-03 [OS, Q] | as above | Joseph Teale jr | Born, son of Joseph & Mary | primary | indirect | S3 |
| T-05 | 17511103.00 | 17511103 | D | 1751-11-03 [OS, Q] | as above | Susannah Teale | Named as a child of Joseph & Mary on a removal certificate; present in Chester Co. | primary | direct | S5 |
| T-06 | 17511104.00 | 17520604 | M | from 1751-11-03 to bet 1752-04-04 and 1752-06-04 [Q] | in transit | Teale household | Migration in progress | primary | indirect | S5, S6 |
| T-07 | 17520404.00 | 17520604 | M | bet 1752-04-04 and 1752-06-04 [Q] | Cane Creek MM / Orange Co. (created 1752; check the parent for 1751) / Prov. North Carolina | Susannah Teale | Certificate received; present in North Carolina | primary | direct | S6 |
| T-08 | 17570504.00 | 17570504 | D | 1757-05-04 [Q] | Cane Creek MM / Orange Co. / N.C. | Susannah Teale | Married Bartholomew Cray | primary | indirect | S7 |
| T-09 | 17591202.00 | 17591202 | D | 1759-12-02 [Q] | as above | Susannah Cray | Bore a child | primary | indirect | S8 |
| T-10 | 17710101.00 | 17711231 | Y | 1771 | Guilford Co. / N.C. | the Cray land | Passed from Orange and Rowan to Guilford jurisdiction. No move | secondary | indirect | S9 |
| T-11 | 17910302.00 | 17910302 | D | 1791-03-02 | Guilford Co. / N.C. | Susannah Cray | Living, and wife of Bartholomew, on the day he signed his will | primary | direct | S10 |
| T-12 | 17910303.00 | 17930228 | Y | bet 1791-03-02 and 1793-02-28 | as above | Bartholomew Cray | Died. Upper bound is the last sitting day of the February 1793 term: look it up | secondary | indirect | S10 |
| T-13 | 17991126.00 | 17991126 | D | bef 1799-11-26 [Q] | Cane Creek MM / N.C. | Susannah Cray | Died, on or shortly before burial | secondary | direct | S11 |
| T-14 | 17291127.00 | 17301126 | Y | cal bet 1729-11-27 and 1730-11-26 | as above | Susannah Cray | Birth range implied by "aged 69" at burial | secondary | direct | S11 |

**Calendar handling in this set.** Three rows need it and they demonstrate the whole problem:

- T-03: `12 mo 1734` in a pre-1752 Quaker register is **February**, and February falls in the
  double-dating window, so the year is 1734/5. The date is 8 February 1734/5. Read as
  December 1734 it would be off by fourteen months, and every interval below would break.
- T-09: `12 mo 1759` in the same meeting's register, post-1752, is **December**. Same
  numeral, different month, same family. This is why the numeral stays in `date_rec`.
- T-07: `4 mo 1752` falls in the transition year and is ambiguous between April and June.
  It enters as a range with `prec = M`. Resolve it, if you can, by reading the register's
  surrounding entries in sequence for the changeover; until then the range stands.
- T-04: `3 mo 1737` is **May**, not March.

**The conflict.** T-03 says born 8 February 1734/5. T-14 says born between 27 November 1729
and 26 November 1730. They cannot both be true, and the gap is about five years.

**Resolution, by the timeline and not by taste.** The tempting move is to prefer T-03 because
it comes from an original register with primary information while T-14 rests on an age
reported by a survivor sixty-four years later. That is a real argument but a weak one on its
own, because burial-register ages are sometimes right and birth registers are sometimes
retrospective. The chronology gives a harder one:

T-01 places the parents' marriage on 5 November 1730. T-14's range runs from 27 November 1729
to 26 November 1730, and **all but the last three weeks of it precedes the marriage**. A
birth three weeks after a Quaker marriage, or at any point before it, would have produced a
disciplinary minute in the men's minutes, and T-02 records that a complete run of those
minutes for 1728 to 1740 contains none. That is **negative evidence**, absence where presence
is required, and it is only worth anything because the run is complete. Had the volume been
lost, T-02 would be a negative search result and would bound nothing at all. Note the
completeness claim and its source in `notes`.

T-14 is therefore rejected: the age at burial is overstated by about five years, which is an
ordinary error in a record whose informant was reporting rather than witnessing.

**Conclusion, with its residue.** Susannah Teale was born 8 February 1734/5 in Chester
County, Pennsylvania, and died on or shortly before 26 November 1799 in Guilford County,
North Carolina.

What the timeline does **not** settle, and which must be stated rather than absorbed:

- Whether the Susannah who married in 1757 is the Susannah born in 1734/5 rests on the
  removal certificate naming her among Joseph and Mary's children (T-05) and on the receiving
  meeting's record. If the 1757 marriage entry does not name her parents, a second Susannah
  Teale in the same meeting remains an open alternative, and section 7 is the next step.
- T-07's month is unresolved.
- T-12's upper bound is a placeholder until the court term's sitting dates are checked.

**Do not delete T-14.** It is the conflict, it was resolved, and the resolution is part of the
proof. Mark it `rejected, see T-01/T-02` in `notes` and leave it in the table.

Interval checks, run as a sanity pass: mother's age at Susannah's birth, 4 years after
marriage, unremarkable; Susannah married at 22 and bore her first recorded child at 24, with
a 31-month marriage-to-first-birth gap that is normal but slightly wide, so note the
possibility of an unrecorded first child; the gap between T-03 and T-04, 27 months, is
ordinary. Nothing flags. Which, per section 5, proves nothing on its own.

---

## 10. Timeline hygiene

**Patch or rebuild.** Patch for a new record, a corrected reading, a tightened bound.
Rebuild when:

- **the research question changes.** `ev` is question-relative, so every value in that column
  is now wrong. The rows survive; recompute the column. This is the cheap rebuild and it is
  the one people skip.
- **you discover a second person.** Re-pool and re-split (section 7). Do not edit `subject`
  in place, because you will lose the record of what was once merged.
- **you find a systematic error**: a calendar regime applied wrongly across a decade, a
  jurisdiction back-projected, a tithable age assumed. Systematic errors do not patch.
- **more than roughly one row in eight is unassigned or uncited.** At that density you are
  no longer reading a chronology, you are reading a pile.

**How it feeds the proof.** The timeline is the skeleton of the written argument, and the
mapping is mechanical: rows become the numbered evidence items; the sort order becomes the
narrative spine; the conflict pairs and their resolutions become the resolution-of-conflict
section that the GPS requires; the unassigned rows and the `prec = U` rows become the stated
limits of the conclusion. A chronology whose rows all carry `cite` values converts into a
proof summary almost without rewriting. Structure, register, and the proof triad itself are
`references/documentation-standards.md`.

**Failure modes**

1. **Recording a conclusion instead of an assertion.** The row says `b. 1748`; the record
   said "aged 22" in 1770. The range is gone, the arithmetic is unverifiable, and the next
   person inherits a date that was never in any document. Every row must be recoverable to
   the words on the page.
2. **Normalising silently.** Writing `1749-03-12` and discarding `ye 12th of March 1748`. The
   conversion may be right, but nobody can check it, and if the calendar regime was wrong the
   error is now invisible. Keep `date_rec` and `place_rec` verbatim, always.
3. **Dropping the nil results that bound a range.** The searches that found nothing are what
   turn "no evidence he was there" into "he was not there," and only when the record set is
   complete. Unrecorded, they get repeated and the bound silently evaporates.
4. **Letting the software rewrite your uncertainty.** Tree programs collapse `bet 1746 and
   1750` to a single displayed year and sometimes store it that way. Spreadsheets coerce
   `1748-03-12` into a serial number, refuse pre-1900 dates, or re-render them in the local
   format on the next machine that opens the file. Store date columns as **text**, key columns
   as **integers**, and check what survived a round trip before trusting an export.
5. **One row per document.** Section 2. The tell is an `assertion` cell containing "and."
6. **Copying a derivative's normalisation.** An abstract that already says "12 March 1749" has
   made a calendar decision for you, and abstractors get the year-start window wrong
   routinely. Go to the image.
7. **Rows without citations.** A row with no `cite` is a rumour occupying a slot in an
   argument. Delete it or source it; do not leave it.
8. **Confusing negative evidence with a negative search result.** They look identical in a
   table and mean opposite things. The `notes` cell must say which, and why.
