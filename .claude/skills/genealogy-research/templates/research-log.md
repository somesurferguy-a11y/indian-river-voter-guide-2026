# Research Log

One log per research question. Every search goes in it, hit or miss, written **before** you
move to the next search. Rationale, column semantics, and a filled example:
`references/research-workflows.md` section 8. Citation syntax for the Source column:
`references/citation-management.md`.

## Spreadsheet header (tab-separated, paste into row 1)

```
Search ID	Date searched	Question ref	Objective	Repository / access	Source searched (full citation)	Coverage searched	Finding aid	Terms tried	Result	Source type	Information type (per assertion)	Evidence relation	Condition	Filed as	Analysis and next action
```

Controlled values:

- **Result:** `nil` / `hit` / `partial` / `ambiguous` / `inaccessible`
- **Source type:** `original` / `derivative` / `authored narrative`
- **Information type:** `primary` / `secondary` / `undetermined` (assessed per assertion, not per document; one document often needs several entries)
- **Evidence relation:** `direct` / `indirect` / `negative` (relative to the question in *Question ref*; the same item is direct for one question and indirect for another)
- **Access route:** `on-site` / `film` / `online indexed` / `online images, unindexed` / `correspondence` / `look-up by agent`

## Markdown log (narrow rendering)

| # | Date | Source searched (short) | Coverage | Finding aid | Terms tried | Result | Src / Info / Ev |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

Second tier: attach a note to any row that needs one. Keep the note with the row.

```
NOTE [search ID]
Objective:        [what this search was supposed to establish]
Full citation:    [see references/citation-management.md; include the provenance chain
                   for anything reached through a website]
Index or records: index only / records read line by line / both
Condition:        [legibility, damage, missing volumes, restricted access]
Analysis:         [what it means for the question]
Next action:      [what it forces; leave blank only if it forces nothing]
```

## Nil-result checklist

A nil row is citable only if all of these are filled. Anything less is a note to yourself,
not evidence, and it will be re-run.

```
[ ] Source searched, fully cited
[ ] Jurisdiction and exact coverage (volumes, date span, page span if browsed)
[ ] Completeness and known gaps
[ ] Finding aid used, by name, or "none, read line by line"
[ ] Exact terms and variants tried, including wildcards and blank-field searches
[ ] Legibility and physical condition
[ ] Index searched, or records searched (these are different acts)
[ ] Searcher and date
```

A nil result is a fact about your search. It becomes **negative evidence** only when you can
also show that the record set would have covered this person, that it is complete for the
span, that you searched it properly, and that absence is better explained by the person's
absence than by any search-side reason. Write that argument out; do not imply it.

## Open-question register (second tab)

```
OQ id	Question	Hypothesis	Status	Missing evidence	Next step 1	Next step 2	Blocked by	Reopen when	Opened	Last worked
```

## Re-search trigger index (third tab)

So that when a collection, a jurisdiction, or a DNA match changes, you can pull every affected
row in one filter rather than re-reading the log.

```
Collection / jurisdiction / repository	Search IDs citing it	Conclusions resting on those rows	Last verified
```
