# Research Log

One log per research question. Every search goes in it, hit or miss, written **before** you
move to the next search. Rationale, column semantics, and a filled example:
`references/research-workflows.md` section 8. Citation syntax for the Source column:
`references/citation-management.md`.

## Spreadsheet header (tab-separated, paste into row 1)

```
Search ID	Date searched	Searcher	Question ref	Objective	Repository / access	Source searched (full citation)	Coverage searched	Finding aid	Terms tried	Result	Source type	Information type (per assertion)	Informant / how they knew	Evidence relation	Condition	Filed as	Analysis and next action
```

Controlled values:

- **Result:** `nil` / `hit` / `partial` / `ambiguous` / `inaccessible`
- **Source type:** `original` / `derivative` / `authored narrative`
- **Information type:** `primary` / `secondary` / `undetermined` (assessed per assertion, not per document; one document often needs several entries)
- **Evidence relation:** `direct` / `indirect` / `negative` (relative to the question in *Question ref*; the same item is direct for one question and indirect for another)
- **Access route:** `on-site` / `film` / `online indexed` / `online images, unindexed` / `correspondence` / `look-up by agent`
- **Searcher:** who ran it, named. A nil is a claim about a pair of eyes at a date, and "look-up by agent" means the eyes were not yours
- **Informant / how they knew:** who supplied *this* assertion and from what position (named on the record, constrained by the record type, or `undetermined`). This is what makes the information type defensible: `references/documentation-standards.md` §1.2

## Markdown log (narrow rendering)

| # | Date | By | Source searched (short note) | Coverage | Finding aid | Terms tried | Result | Src / Info / Ev |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |

Second tier: attach a note to any row that needs one. Keep the note with the row.

```
NOTE [search ID]
Objective:        [what this search was supposed to establish]
Searcher:         [who ran it, and how: in person / from film / look-up by an agent, named]
Repository:       [where, by name and place]
Full citation:    [see references/citation-management.md; include the provenance chain
                   for anything reached through a website. Worked instance:]
                  Greene County, Pennsylvania, county tax duplicates, Cumberland Township,
                  eight annual duplicates 1813 through 1820, unpaginated, read entry by
                  entry; Greene County Courthouse, Waynesburg, Pennsylvania.
Short note:       Greene Co., Pa., Tax Duplicates, Cumberland Twp., 1813-1820.
Index or records: index only / records read line by line / both
Informant:        [who supplied each assertion, and from what position; "undetermined" is
                   a real answer, and "n.a." is right when nothing was retrieved]
Condition:        [legibility, damage, missing volumes, restricted access]
Filed as:         [where the image, transcript, or abstract lives]
Analysis:         [what it means for the question]
Next action:      [what it forces; leave blank only if it forces nothing]
```

The short note goes in the table cell and the full citation lives here, so a nil row can be
re-run by someone who never met you. A description ("the Greene County tax lists") is not a
shortened note: a shortened note has an author or jurisdiction, a title, and a locator.

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

## Living people and restricted content

```
[ ] Living people: log only what the question needs; identifying detail stays in the private
    archive and the default in anything circulated is name withheld
[ ] Restricted record: log the restriction, its authority, and the conditions of access
[ ] DNA test of a living person: informed consent recorded with a date, in the consent
    register, before a kit is ordered
```

Protocol: `references/research-workflows.md` section 8; the full version, including the consent
register and misattributed parentage, `references/documentation-standards.md` §9.

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
