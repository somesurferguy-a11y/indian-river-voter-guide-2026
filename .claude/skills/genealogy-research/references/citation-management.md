# Citation management

How to build a citation that lets a stranger retrieve your source *and* judge it, using
Elizabeth Shown Mills's layered model from *Evidence Explained*: anatomy, the three shapes,
provenance chains, templates by record type, hard cases, software behaviour, and citation QA.

**When to load me:** you are writing a citation, fixing one, deciding how to cite a digital
image of a film of an original, designing source records in your software, or auditing a file
of citations before it goes to a cousin, a society, or a portfolio judge.

## Conventions used in this file

- `{curly braces}` mark a **slot** for your data. Nothing in `{...}` is a real number, title,
  or identifier. Fill every slot from the item in front of you.
- `[square brackets]` inside a citation are **real citation punctuation**: they mark information
  *you supplied* that the item itself does not carry. Never put something the item does state
  inside a square bracket. Where a sibling file uses brackets loosely as a fill-in marker in a
  passing example, this file's convention governs: in a finished citation, brackets mean supplied.
- Personal names (Bartholomew Cray, Susannah Teale) are obviously illustrative. Jurisdictions,
  agencies, record types, record groups, and repositories are real, so the shapes transfer.
- Vocabulary is the skill's shared vocabulary: *original / derivative / authored narrative*
  for sources, *primary / secondary / undetermined* for information, assessed per assertion.
- A paste sheet of every template below is at `templates/citation-quickref.md`.

## 1. What a citation must accomplish

A citation has two jobs, and most bad citations do only the first.

**Job (a): retrieval.** Any reader, without asking you, can put their hands on the same item:
the same volume, the same page, the same entry, at a named repository or through a named
publication.

**Job (b): evaluation.** Any reader, *without retrieving anything*, can tell from the citation
alone what kind of thing this is and how much weight it bears. Is it the register the clerk
wrote in, a clerk's recorded copy, a microfilm of that copy, a stranger's index entry, or a
county history's summary of a family story? Made at the time of the event or fifty years
after? By someone present, or someone told?

A citation that satisfies (a) but not (b) is **incomplete, not merely terse**. "Marion County
marriage records, 1868" gets a reader to a courthouse and tells them nothing about whether to
believe you. A bare URL is worse: often it is not even retrievable six months later.

This is the Genealogical Proof Standard element usually phrased *complete and accurate source
citations*. Read both words hard.

- **Accurate**: the citation points at the thing you actually looked at, not the thing the
  website says it is, not the original you assume stands behind an index, not the volume you
  meant to open. Inaccuracy here is not a typo. It is a false claim about your evidence.
- **Complete**: the citation carries what the rest of the GPS needs as input. You cannot
  assess information as primary or secondary if the citation does not say who recorded it and
  when. You cannot resolve a conflict between two records if your citations do not distinguish
  an original from a derivative of it. **The citation is the input to the analysis, not a
  footnote to it.**

The Board for Certification of Genealogists' *Genealogy Standards* (2nd ed. rev.) carries
several numbered standards on citation: when to cite, where citations go, what they contain.
Describe them by content rather than by number unless you have the book open; a wrong standard
number is worse than no number.

**The test:** read the citation aloud and answer *could I find this, and could I tell from
this alone how good it is?* If either answer is no, it is not finished.

## 2. Anatomy: the five elements

| Element | Question | Typical content |
|---|---|---|
| **Who** | Who created or is responsible for it? | Person, agency, court, church, company, publisher. For an unauthored public record, the creating agency: "Marion County, Indiana, Clerk of the Circuit Court." |
| **What** | What is the item? | Title if it has one, description if not. Italics for published titles; quotation marks for unpublished volume titles, databases, article titles. |
| **When** | When was it created or published? | Date of the record, the volume, or publication. For a record, the date of the *entry*, not of the event, where the two differ. |
| **Where-in** | Where inside the source is it? | The specific locator: volume, page, entry number, folio, line, dwelling and family, certificate number, image or frame number. Changes with every use. |
| **Where-is** | Where is the source itself? | Repository and city; or collection, record group, film number; or website, publisher, URL, and persistent identifier. |

Read it as a funnel: largest containing body, down to the one line you used, then out to where
the whole thing lives.

### Degrading gracefully when an element is unknown

| Missing | Do this | Never do this |
|---|---|---|
| **Who** (no author) | Lead with the agency, jurisdiction, or (for published work) the title. Use `[author unknown]` only where a reader would expect a name. | Invent a compiler, or promote a publisher to "author." |
| **What** (untitled) | Describe it in brackets: `[untitled ledger of burials, 1866-1879]`. Describe what it *is*, not what it contains. | Quote a title you made up, or borrow one from a finding aid silently. |
| **When** (undated) | `[n.d.]`, or estimate and show the basis: `[ca. 1885]`, `[after 4 March 1868]`, `[1885?]`. | Substitute the event date for the record date. |
| **Where-in** (unpaginated) | Supply a count and state the counting rule: `[p. 12, counting from the first page of the 1813 baptisms]`. | Write "n.p." and stop. An unpaginated source still needs a locator. |
| **Where-is** (private hands) | `privately held by {name}, [address for private use], {city, state}, {year}`, plus one provenance sentence. | Omit the holder, or publish a living person's street address. |

### Conventions for supplying missing information

- **Square brackets** enclose anything you supplied: counted page numbers, expanded
  abbreviations, translations, corrections, estimates, descriptions of untitled items. This is
  the single most useful habit in citation writing, because a reader sees at a glance which
  parts came from the record and which came from you.
- `[sic]` after an oddity you are reproducing faithfully: `"Barthlomew" [sic]`.
- `ca.` approximate; `?` uncertain; `n.d.` no date; `n.p.` no place *or* no publisher (say which).
- **Round brackets** hold publication data and the `({URL} : accessed {date})` package.
- **Name order** differs by shape: first-name-first in notes, surname-first in source lists.

## 3. The three shapes

A full reference note, a shortened note, and a source-list entry are **three different
structures**, not one structure at three lengths. Mixing them is a visible defect.

| | Full (first) note | Shortened note | Source-list entry |
|---|---|---|---|
| Purpose | Prove this one assertion | Re-point to a source already cited in full | Catalogue the bodies of material used |
| Order | Whole down to part | Whatever identifies it uniquely, plus the locator | Sortable lead element first |
| Names | First name first | Surname only | Surname first, or jurisdiction first |
| Punctuation | Commas within, semicolons between layers, one final period | Commas | Periods between major elements |
| Specific locator | **Always** | **Always** (it changes per use) | **Never** |
| Publication data | Full | Dropped | Full |
| Layers | All of them | Usually the top layer only | Usually two, sometimes split into two entries |

**Why the source-list entry drops the locator.** A note supports one assertion, so it must name
the one entry. A source-list entry answers a different question: *what bodies of material did
this researcher work in?* One entry stands behind fifty notes, and a page number would make it
false for forty-nine of them. The list is also sorted, so its lead element must be what a
reader would look under, which is why it inverts.

```
Full   Marion County, Indiana, Marriage Record {vol.}: {page}, Cray-Teale, {date}; Clerk of the Circuit Court, Indianapolis.
Short  Marion Co., Ind., Marriage Record {vol.}: {page}, Cray-Teale.
List   Marion County, Indiana. Marriage Records, {year range}. Clerk of the Circuit Court, Indianapolis.

Full   1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis, enumeration district (ED) {ED no.}, sheet {no. and letter}, dwelling {no.}, family {no.}, Bartholomew Cray; NARA microfilm publication T9, roll {roll no.}.
Short  1880 U.S. census, Marion Co., Ind., pop. sch., ED {ED no.}, sheet {no.}, fam. {no.}, Cray.
List   Indiana. Marion County. 1880 U.S. census, population schedule. NARA microfilm publication T9. National Archives, Washington, D.C.

Full   {Author first last}, {Title of the Book} ({place}: {publisher}, {year}), {page}.
Short  {Author surname}, {Short Title}, {page}.
List   {Author surname}, {first}. {Title of the Book}. {Place}: {publisher}, {year}.
```

Watch what changes. The census source list drops the person, the sheet, the dwelling and the
family, and leads with the jurisdiction because that is how a reader scans a list of record
groups. The book list leads with the surname for the same reason. Neither is the note with
words removed.

## 4. Layered citations and the provenance chain

**The most important section in this file.** Almost everything a modern researcher touches is
a digital image of a microfilm of a clerk's copy of an original. A citation naming only the
outermost layer is both unretrievable and unevaluable.

> **The rule: cite what you used, first. Then each layer beneath it, in order of derivation.
> Make it unambiguous which layer you actually examined.**

You cite what you used, not what you wish you had used, because the citation is a statement
about *your* evidence. If you read an index entry, you read an index entry. Citing the
original register because the index says it exists is a false claim, and it is the first thing
a reviewer catches.

**Mechanics.** Layers are separated by **semicolons**. The layer you examined comes first, with
its own full Where-in. Layers you did *not* see, which the provider names for you, are
introduced by **`citing`**, a word that functions as a disclaimer: *the provider asserts this,
I did not verify it*. A website layer reads `{Site Name} ({site root URL} : accessed {date})`.
Name the kind of digital object: `database` (index fields only), `database with images`, and
`digital images` (images, no index) are three different claims about what you saw.

### The seven situations

**1. Original examined in person.** One layer. No `citing`, no access date, no URL.

```
Marion County, Indiana, Probate Court, estate file no. {no.}, Bartholomew Cray ({year}), original petition and inventory; Indiana State Archives, Indianapolis.
```

**2. Image of an original on a commercial site.** Three layers: original, image, film. You saw
the image; you did not see the film, and `citing` marks the boundary of your knowledge.

```
1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis, ED {ED no.}, sheet {no.}, dwelling {no.}, family {no.}, Bartholomew Cray; digital image, Ancestry.com (https://www.ancestry.com : accessed {date}); citing NARA microfilm publication T9, roll {roll no.}.
```

**3. Microfilm examined.** Two layers: original, film. No web layer at all.

```
Marion County, Indiana, Deed Book {vol.}: {page}, Bartholomew Cray to Susannah Teale, {date}; FHL microfilm {film no.}, item {no.}, Family History Library, Salt Lake City.
```

**4. Index entry only, no image seen.** The index leads, because it is what you used. The
database is a **derivative**; everything after `citing` is the site's claim about its own
source, unverified by you. Until you see the image, the original is a *lead*, not a citation.

```
"{exact database title as the site gives it}," database, FamilySearch (https://www.familysearch.org : accessed {date}), entry for Susannah Teale, {event date}; citing Marion County, Indiana, {record series as the site states it}. Original not examined.
```

**5. Derivative transcript.** A transcript is a source in its own right, with a creator who
could misread.

```
{Transcriber first last}, transcriber, "{Title of the transcript}," typescript, {year}, p. {page}, entry for Bartholomew Cray; Indiana Historical Society, William Henry Smith Memorial Library, Indianapolis; transcribing Marion County, Indiana, {register cited by the transcriber}.
```

**6. Published abstract.** A derivative that has also *discarded* information, which the word
`abstracting` makes visible.

```
{Compiler first last}, {Title of the Abstract Volume} ({place}: {publisher}, {year}), {page}, abstracting Marion County, Indiana, Will Book {vol.}: {page}.
```

**7. An authored narrative citing something you have not seen ("cited in").** A county history,
a journal article, or a cousin's compiled genealogy asserts something and footnotes a record
you cannot reach. Cite it only like this:

```
{Author first last}, {Title of the Work} ({place}: {publisher}, {year}), {page}, citing Marion County, Indiana, Will Book {vol.}: {page} [not examined by this researcher].
```

Three rules for `cited in`:

- **Your citation leads with what you read.** The author's work is your source. The record they
  name is *their* source.
- **Flag non-examination explicitly.** `[not examined]` costs six characters and stops a reader
  crediting you with research you did not do.
- **Treat it as a lead, not as evidence.** A derivative of a derivative (an abstract of an index
  of a film) compounds error at each step. Get to the lowest layer you can reach, then re-cite.
  If you never reach it, your conclusion rests on someone else's reading and the proof
  discussion has to say so: see `references/documentation-standards.md`.

### Which layer counts as "the source"

Classify the **layer you examined**, not the layer at the bottom.

| What you examined | Classification | Note |
|---|---|---|
| The register the clerk wrote in | Original | |
| Clerk's recorded copy in a will book or deed book | Derivative | Faithful in intent, still a hand copy. Say so. |
| Microfilm or digital image of either | Takes the class of what is imaged | An accurate image does not degrade the class, but a poor image hides what an in-person look would show. |
| Index or searchable database | Derivative | |
| Transcript, abstract, translation | Derivative | |
| Compiled genealogy, county history, memorial page text | Authored narrative | |

A faithful image of an original is still an original for analysis; a faithful index of one is
not. The image reproduces the whole record; the index reproduces a person's reading of
selected fields.

## 5. Templates by record type

Triads below; the paste-ready set with the same slots is in `templates/citation-quickref.md`.
US-specific forms are marked, and non-US analogues close the section.

### Civil birth, marriage, and death registration (US)

```
Full   Indiana Department of Health, death certificate no. {cert. no.} ({year of cert.}), Susannah Teale; Vital Records, Indianapolis.
Short  Indiana death certificate no. {cert. no.} ({year}), Teale.
List   Indiana. Department of Health. Death certificates, {year range}. Vital Records, Indianapolis.
```

Certificate numbers restart annually, so parenthesise the certificate year; the number alone is
not a locator. For county-level registration swap in "Marion County, Indiana, Clerk of the
Circuit Court" and cite `Birth Record {vol.}: {page}` (the marriage triad is in §3). Say whether
you had the original register, a certified copy, or a state-issued abstract: a modern
computer-printed "certificate" is a derivative that routinely drops the informant.

### US federal census (all locators)

```
Full   1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis, enumeration district (ED) {ED no.}, sheet {no. and letter}, dwelling {no.}, family {no.}, Bartholomew Cray; NARA microfilm publication T9, roll {roll no.}.
Short  1880 U.S. census, Marion Co., Ind., pop. sch., ED {ED no.}, sheet {no.}, fam. {no.}, Cray.
List   Indiana. Marion County. 1880 U.S. census, population schedule. NARA microfilm publication T9. National Archives, Washington, D.C.
```

Locators narrow in this order: census year, county, state, **schedule type**, civil division
(town, township, ward), ED number (1880 onward), page or sheet number, dwelling number, family
number, person. Give all of them; each survives a different failure of the others. Verified
NARA microfilm publication numbers for the population schedules include **M653** (1860),
**M593** (1870), **T9** (1880), and **T623** (1900), all in Record Group 29, Records of the
Bureau of the Census; look any other year up in NARA's own microfilm catalog rather than
guessing. Name the schedule: population, mortality, agriculture, and the other non-population
schedules are separate records with separate provenance, and "1880 census" alone is ambiguous.

### Church and parish registers (baptism, marriage, burial)

```
Full   Saint John's Evangelical Lutheran Church (Indianapolis, Indiana), "Taufregister {year range}," p. {page}, entry {no.}, baptism of Susannah Teale, {date}; parish office, Indianapolis.
Short  St. John's Lutheran (Indianapolis), "Taufregister," p. {page}, entry {no.}, Teale.
List   Saint John's Evangelical Lutheran Church (Indianapolis, Indiana). "Taufregister {year range}." Parish office, Indianapolis.
```

Parenthesise the church's place, because church names repeat endlessly. Cite the volume by the
title on its spine, in quotation marks, and bracket a title you supplied. Baptism is not birth and
burial is not death: cite the sacramental act the register records and let the chronology work out
the event date (`references/timeline-building.md`).

### Probate files and will books (two different sources)

```
Full   Marion County, Indiana, Probate Court, Will Book {vol.}: {page}, recorded copy of the will of Bartholomew Cray, written {date}, proved {date}; Clerk of the Circuit Court, Indianapolis.
Short  Marion Co., Ind., Will Book {vol.}: {page}, Cray will.
List   Marion County, Indiana. Probate Court. Will Books, {year range}. Clerk of the Circuit Court, Indianapolis.

Full   Marion County, Indiana, Probate Court, estate file no. {no.}, Bartholomew Cray ({year}); Indiana State Archives, Indianapolis.
Short  Marion Co., Ind., estate file no. {no.}, Cray.
List   Marion County, Indiana. Probate Court. Estate files, {year range}. Indiana State Archives, Indianapolis.
```

The distinction is load-bearing. The will book is a clerk's recorded copy, a **derivative**, and
its "signatures" are the clerk's transcription of names, not the testator's hand. The loose
estate packet holds the **original** signed will plus petitions, bonds, inventories, receipts,
and guardianship papers that never reached the book. Never cite a will book entry as "the
original will."

### Deeds and land records

```
Full   Marion County, Indiana, Deed Book {vol.}: {page}, Bartholomew Cray to Susannah Teale, {date of instrument}, recorded {date of recording}; County Recorder's Office, Indianapolis.
Short  Marion Co., Ind., Deed Book {vol.}: {page}, Cray to Teale.
List   Marion County, Indiana. Deed Books, {year range}. County Recorder's Office, Indianapolis.
```

Give **both** dates. The gap between execution and recording is routinely years and is
frequently the evidence, as when a deed is recorded only at the grantor's death. For US federal
land, cite the patent through the General Land Office Records site (https://glorecords.blm.gov)
and cite the underlying **land entry case file** separately: it is a thick file of original
applications and proofs in Record Group 49, Records of the Bureau of Land Management, National
Archives, and it is a different source from the one-page patent.

### Military service and pension files (US)

```
Full   Bartholomew Cray (Pvt., Co. {co.}, {regiment} Indiana Infantry, Civil War), pension application no. {app. no.}, certificate no. {cert. no.}, "{series title exactly as the finding aid gives it}," Records of the Department of Veterans Affairs, Record Group 15; National Archives, Washington, D.C.
Short  Cray pension no. {cert. no.}, RG 15, NARA-Washington.
List   Cray, Bartholomew. Pension file, certificate no. {cert. no.}. Records of the Department of Veterans Affairs, Record Group 15. National Archives, Washington, D.C.

Full   Compiled service record, Bartholomew Cray, Pvt., Co. {co.}, {regiment} Indiana Infantry; Records of the Adjutant General's Office, 1780s-1917, Record Group 94; National Archives, Washington, D.C.
```

A pension file is a **file**, not a document, and its contents differ wildly in quality: a
surgeon's certificate is primary for the examination and secondary for the birth date the
claimant recited. Name the paper inside the file when one carries your assertion:
`..., certificate no. {cert. no.}, affidavit of Susannah Teale, {date}`. A compiled service
record is itself a **derivative**, abstracted onto cards from muster rolls by War Department
clerks; saying "compiled service record" tells a reader that instantly.

### Naturalisation (US)

```
Full   Marion County, Indiana, Circuit Court, "Declarations of Intention," vol. {vol.}: {page}, Bartholomew Cray, {date}; Indiana State Archives, Indianapolis.
Short  Marion Co., Ind., Declarations of Intention {vol.}: {page}, Cray.
List   Marion County, Indiana. Circuit Court. Declarations of Intention, {year range}. Indiana State Archives, Indianapolis.

Full   U.S. District Court, District of Indiana, petition for naturalization no. {no.}, Bartholomew Cray, {date}; Records of District Courts of the United States, Record Group 21; National Archives at Chicago.
```

Before the 1906 federal standardisation, naturalisation could happen in **any court of record**,
so the court is an essential element, not an afterthought. Declaration and petition are separate
records, often years apart and in different courts: cite each where you found it, and never fold
them into a single "naturalization record."

### Newspapers

```
Full   "Death of B. Cray," Indianapolis Journal, {date}, p. {page}, col. {col.}.
Short  "Death of B. Cray," Indianapolis Journal, {date}, p. {page}.
List   Indianapolis Journal. Indianapolis, Indiana. {year range}.
```

Headline in quotation marks; describe an untitled item instead: `[untitled death notice]`. Add
the edition where a paper ran several in a day, because page numbers differ between them. For a
digitised paper add the image layer and the title's Library of Congress control number (LCCN) or
the provider's item identifier: newspaper site URLs move often.

### Cemetery markers and sexton records

```
Full   Crown Hill Cemetery (Indianapolis, Marion County, Indiana), Bartholomew Cray marker, section {sec.}, lot {lot}; read, photographed, and transcribed by {researcher}, {date of visit}.
Short  Crown Hill Cemetery (Indianapolis), Cray marker.
List   Crown Hill Cemetery. Indianapolis, Marion County, Indiana. Personal visit, reading, and photographs by {researcher}, {date}.

Full   Crown Hill Cemetery (Indianapolis, Marion County, Indiana), sexton's interment register {vol.}: {page}, entry for Bartholomew Cray, {date of interment}; cemetery office, Indianapolis.
```

A marker is an **artifact**, so the citation names who read it and when. Flag replacement stones:
a 1970s marker over an 1841 burial is a modern assertion about an old burial. Sexton records and
plot cards are a separate source, often better than the stone.

### Find A Grave and similar memorial databases

```
Full   Find a Grave, database with images (https://www.findagrave.com : accessed {date}), memorial {memorial no.}, Bartholomew Cray ({birth year}-{death year}), Crown Hill Cemetery, Indianapolis, Marion County, Indiana; gravestone photograph by {contributor}, uploaded {date}.
Short  Find a Grave, memorial {memorial no.}, Cray.
List   Find a Grave. Database with images. https://www.findagrave.com : {year}.
```

A memorial page holds **two sources bolted together**. The typed dates, relationships, and
biography are a contributor's *authored narrative*, usually uncited. The photograph is an image
of an *artifact*. Cite them separately when they carry different assertions, and never let the
typed birth date inherit the photograph's credibility.

### Online searchable databases (index, no image)

```
Full   "{exact database title as the site gives it}," database, {Site Name} ({site root URL} : accessed {date}), entry for Susannah Teale, {event date}; citing {repository and record series as the site states it}.
Short  "{database title}," {Site Name}, entry for Teale.
List   "{exact database title}." Database. {Site Name}. {site root URL} : {year}.
```

Copy the database title **exactly**, including its date range and any odd capitalisation, in
quotation marks. Pick the right descriptor: `database`, `database with images`, `digital images`.
These three tell a reader what you can and cannot have seen.

### Digitised books

```
Full   {Author first last}, {Title of the Book} ({place}: {publisher}, {year}), {page}; digital images, {Site Name} ({site root URL} : accessed {date}).
Short  {Author surname}, {Short Title}, {page}.
List   {Author surname}, {first}. {Title of the Book}. {Place}: {publisher}, {year}. Digital images. {Site Name}. {site root URL} : {year}.
```

The book's publication data is the evaluable part; the scanning site is only Where-is. Cite the
page of the **book**, not of the PDF, and if the scan lacks the book's pagination say so:
`[image {n} of {N}]`. Prefer a persistent handle or DOI over a session URL.

### Unpublished manuscripts and family papers

```
Full   {Collection Name}, box {no.}, folder {no.}, "{item description}," {date}; {Manuscript repository}, {city}. {Collection number}.
Short  {Collection Name}, box {no.}, folder {no.}, {item}.
List   {Collection Name}. {Collection number}. {Manuscript repository}, {city}.

Full   Cray family Bible records, {Bible title} ({place}: {publisher}, {year}), "Births" page; privately held by {holder}, [address for private use], {city, state}, {year}. {One sentence: how the item reached the present holder.}
```

For an item in private hands the provenance sentence is **not optional**. It is the entire
Where-is, and it is also the only evidence that the entries are what they claim to be. Cite a
family Bible's imprint date, because entries written before the book was printed were written
from memory.

### Correspondence, interviews, and personal knowledge

```
Full   Susannah Teale ([address for private use], Indianapolis, Indiana) to {researcher}, letter, {date}, "{subject}"; {Researcher} Research Files, privately held by {researcher}, {city, state}, {year}.
Short  Teale to {researcher}, letter, {date}.
List   Teale, Susannah. Correspondence with {researcher}, {year range}. {Researcher} Research Files, privately held by {researcher}, {city, state}.

Full   Susannah Teale (Indianapolis, Indiana), interview by {researcher}, {date}; audio recording and transcript privately held by {researcher}, {city, state}, {year}. {One sentence: the informant's relationship to the events and how they know.}
Short  Teale interview, {date}.
List   Teale, Susannah. Interview by {researcher}, {date}. Privately held by {researcher}, {city, state}.

Full   {Researcher} ([address for private use], Indianapolis, Indiana), personal knowledge of {what}, {year range}, {how the knowledge was acquired}; statement written {date}.
Short  {Researcher}, personal knowledge of {what}.
List   {Researcher surname}, {first}. Personal knowledge. {City, state}.
```

The "how they know" sentence is what makes an interview **evaluable**: it converts "someone said
so" into an assessable claim about whether the information is primary or secondary for each
assertion. Personal knowledge is a citable source and must be cited, not assumed: say whether you
were present, were told by a named person (who is then the informant, making this hearsay), or
inferred, and date your own statement. Withhold living people's addresses:
`[address for private use]`.

### DNA test results and match lists

```
Full   {Tester initials or code} (b. {year}), autosomal DNA test, {testing company}, kit no. {kit id}, test taken {date}; {Company} match list ({site root URL} : accessed {date}); test administered by {administrator}, results downloaded and retained by {researcher}, {city, state}.
Short  {Tester code} autosomal DNA, {Company}, accessed {date}.
List   {Company}. Autosomal DNA test results and match lists for {tester codes}. Database. {site root URL} : {year}.

Full   {Tester code} and {Match code}, {nn} cM shared across {n} segments, {Company} match list ({site root URL} : accessed {date}); shared-match data downloaded {date} and retained in {researcher}'s files.
```

- **The access date is not decorative.** Match lists change as testers join, delete accounts,
  and adjust privacy, and companies periodically recompute shared centimorgans. A match list is
  not reproducible, so cite the **snapshot you retained**, and retain it.
- **Use codes or initials for living testers**, and record the kit administrator separately from
  the tester: different people, different consent.
- **Cite the measurement, not the conclusion.** "{nn} cM across {n} segments" is the datum;
  "second cousin" is an interpretation that belongs in your analysis, cited to the documentary
  work that established it. Interpretation lives in `references/relationship-mapping.md`.
- *Genealogy Standards* (2nd ed. rev.) adds standards on DNA evidence covering consent,
  documentation of test details, and integration with documentary evidence. Cite by content, not
  by number.

### Non-US analogues

```
England, parish register
Full   Saint Mary the Virgin (Ashwell, Hertfordshire), "Register of Baptisms {year range}," p. {page}, entry {no.}, baptism of Susannah Teale, {date}; Hertfordshire Archives and Local Studies, Hertford, {archive reference}.
Short  Ashwell, Herts., baptisms, p. {page}, entry {no.}, Teale.
List   Ashwell, Hertfordshire. Saint Mary the Virgin. "Register of Baptisms {year range}." Hertfordshire Archives and Local Studies, Hertford.
```

Post-1812 English baptism and burial registers carry **numbered entries** on printed forms
(under Rose's Act, in use from 1 January 1813), and marriage registers have carried numbered
entries since Hardwicke's Act took effect in 1754. Use the entry number: it is a far better
locator than a page number and it survives rebinding and refoliation.

```
England and Wales, census
Full   {year} census of England, {registration district}, {parish}, folio {folio}, p. {page}, schedule {no.}, Bartholomew Cray; The National Archives (TNA), Kew, {series}/{piece no.}.
Short  {year} census, {parish}, {series}/{piece no.}, fol. {folio}, p. {page}, Cray.
List   England. {County}. {year} census. {series}. The National Archives, Kew.
```

TNA references are **department code / series number / piece number**. The verified census
series are HO 107 (1841 and 1851), RG 9 (1861), RG 10 (1871), RG 11 (1881), RG 12 (1891), RG 13
(1901), and RG 14 (1911). Folio numbers are stamped on every other page and are the archival
locator; page numbers are printed on the form. Give both.

```
England and Wales, civil registration
Full   General Register Office, England and Wales, marriage certificate for Bartholomew Cray and Susannah Teale, {date}, {registration district} registration district, {quarter} {year}, vol. {vol.}, p. {page}; certified copy issued {date}.
```

The same shape carries elsewhere with local vocabulary swapped in: Library and Archives Canada
census returns cite RG 31 with district, sub-district, and page; a German parish register cites
the *Kirchenbuch*, the *Kirchengemeinde*, and the holding *Landeskirchliches Archiv*; an Irish
civil registration cites the superintendent registrar's district, volume, and page. The five
elements never change. Only the names of the containers do.

## 6. Hard cases

| Case | What to do | Written as |
|---|---|---|
| **Unpaginated register** | Supply a locator and state the counting rule once per source. Prefer any existing anchor (a date, entry number, column heading, film frame, named officiant) over a raw count; two anchors beat one count. | `[p. 12, counted from the first page of the 1813 baptisms; pages unnumbered]` |
| **Mis-numbered page** | Cite what is printed, then correct in brackets. Never silently renumber: the reader will meet the same error, and your bracket tells them they are in the right place. | `p. 214 [mis-numbered; falls physically between pp. 211 and 212]` or `p. 88 [second page so numbered]` |
| **Two numbering systems** | Cite the system the repository's own finding aid uses, then supply the other in parentheses. If you cannot tell which it uses, give both and label them. Common in English registers (stamped folio vs written page), 1850-1870 US census schedules (stamped vs enumerator's numbers), and volume pagination vs film frame. | `fol. 42 (stamped), p. 83 (written)` |
| **Loose paper, unprocessed collection** | Describe the container as you found it, date the visit, flag the instability, and photograph the container label as well as the document. | `{Collection Name}, unprocessed accession {no.}, {container as labelled}, "{item description}," {date}; {repository}, {city}; collection unprocessed at the time of use, {date of visit}.` |
| **Recatalogued since your visit** | Keep the citation as you used it and append the current reference, so readers with either finding aid can get there. Never quietly overwrite: you examined nothing under the new number, and your notes and images carry the old one. | `..., cited at the time of use as {old ref}; recatalogued as {new ref} as of {date checked}.` |
| **Behind a paywall** | Nothing changes in the citation. It raises the stakes on the layer beneath: always carry the film number, roll, record group, or repository so a reader without a subscription can reach the content another way. Do not write "available by subscription" in place of a locator. | (no special syntax) |
| **Language or script the reader may not have** | Give the title as it appears, then a bracketed translation. For a non-Latin script give the original, then a romanisation, then name the scheme. Note the record's language where it differs from your report's, because it bears on whether a transcription error is plausible. Calendar differences belong to `references/timeline-building.md`. | `"Taufregister" [baptismal register]` |

**Ephemeral URLs.** Deep links rot: they carry session tokens, search parameters, and internal
database keys that change when a provider reindexes. The rule is **cite the stable layer**.

1. Use the site's **root or landing URL**, not the session URL:
   `(https://www.familysearch.org : accessed {date})`.
2. Add the provider's own **persistent identifier** where one exists: an ARK, DOI, handle,
   memorial number, record or image number, accession number. These are built to survive
   reindexing. Search URLs are not.
3. Add the **underlying stable layer** anyway: microfilm publication and roll, record group,
   repository, collection. A URL is the weakest Where-is there is.
4. Record the **access date** every time. It is what makes a dead link interpretable rather than
   merely broken.
5. **Retain the image.** A downloaded image filed against your citation is the only thing that
   makes a vanished online record reproducible. Archiving practice is in
   `references/documentation-standards.md`.

## 7. Citations inside genealogy software

### The source-versus-citation split

Nearly every program imposes a two-level model, whatever it calls the levels: a **Source**
record for the whole body of material (Who, What, When, Where-is), created once, and a
**citation** attached to a person, event, or assertion carrying the specific locator
(Where-in) plus a quality rating and often a transcript field, created many times per source.
Get the split right and one source record serves two hundred citations. Get it wrong and the
file becomes unusable.

**Templated versus free-form fields.** Several programs ship *Evidence Explained*-style
templates: you fill labelled fields and the program renders a full note, a short note, and a
bibliography entry. Use them, with two cautions. The rendering is **generated at display time
and is not stored**; what is stored is field values plus a template identifier. And template
identifiers are **proprietary**, so another program cannot interpret them.

### What survives a GEDCOM export

| Survives | Does not survive |
|---|---|
| The `SOUR` record with `TITL`, `AUTH`, `PUBL`, `REPO`, `NOTE`, `TEXT` | The template identifier and its field mapping: the receiving program cannot re-render |
| The citation-level pointer with `PAGE` (your Where-in) | Italics, quotation-mark styling, other formatting |
| Free-form text you typed into any of the above | The rendered full note, short note, and bibliography entry: never stored in the first place |
| `QUAY` as a bare number | Any reliable meaning for `QUAY`: programs map it differently |
| | Custom user-defined fields, silently dropped or shunted into unparsed tags |

### The round-trip rule

> **Store the rendered full reference note as literal text, in a free-form field, in addition to
> whatever the template holds.**

It costs one paste. It means that after any export, import, merge, program change, or company
shutdown, the citation is still a complete readable citation rather than a set of orphaned field
values. Do the same for the locator: put the complete Where-in in the `PAGE` / "citation detail"
field, written so it reads correctly on its own
(`Will Book 12: 340, will of Bartholomew Cray, proved 4 March 1868`), not as a bare `340`.

### Source splitting and citation duplication

**Source splitting** is creating a new Source record for every individual document: one per
certificate, one per census household, one per deed. The symptoms are a source list with four
thousand entries differing only in a page number, and an inability to answer "what records have
I searched in this county?" The rule: **one Source per body of material a reader would go to as
a unit; one citation per entry within it.**

| One Source | Many citations |
|---|---|
| Marion County, Indiana, Deed Books | Each book, page, and instrument |
| 1880 U.S. census, Marion County, Indiana, population schedule | Each ED, sheet, dwelling, family |
| A named manuscript collection | Each box, folder, and item |
| A single letter, interview, or Bible | Genuinely one item: one source, few citations |

**Citation duplication** comes from merging trees and importing GEDCOMs: five identical citations
for one entry on one person, differing only in whitespace. Dedupe before any export you intend to
share, merging **into** the record with the fullest Where-is, and run the source-merge utility
after every import, not once a year.

## 8. Citation QA

Run this on every citation before it leaves your file. About twenty seconds, once it is a habit.

- [ ] **Who** names the actual creator or responsible agency, not the website.
- [ ] **What** identifies the item in the right marks: quotation marks for unpublished volume
      titles and databases, italics for published titles, brackets for descriptions you wrote.
- [ ] **When** is the record or publication date, distinguished from the event date if they
      differ.
- [ ] **Where-in** names the one entry: volume, page, entry, line, or number. Present, specific.
- [ ] **Where-is** names a repository, collection, film, or site plus a persistent identifier.
- [ ] **The layer I examined leads**, and `citing` marks everything I did not see.
- [ ] `database`, `database with images`, or `digital images` correctly describes what I saw.
- [ ] An access date appears on every online item.
- [ ] Supplied information is in **square brackets**, and nothing the item states is.
- [ ] The **shape** matches the position: full note first, short note after, source-list entry
      with no specific locator.
- [ ] The short note is **unambiguous** against every other source in this document.
- [ ] A reader could classify the source as original, derivative, or authored narrative from the
      citation alone.
- [ ] Nothing in the citation is a number, title, or identifier I did not read off the item.
- [ ] Private holdings and interviews carry the provenance or informant sentence.

### Common defects, before and after

| Defect | Before | After |
|---|---|---|
| **URL-only citation** | `https://www.ancestry.com/{deep session URL}` | `1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis, ED {ED no.}, sheet {no.}, dwelling {no.}, family {no.}, Bartholomew Cray; digital image, Ancestry.com (https://www.ancestry.com : accessed {date}); citing NARA microfilm publication T9, roll {roll no.}.` |
| **"Ancestry.com" as an entire citation** | `Ancestry.com` | As above. A site name is a fragment of Where-is and answers none of the other four questions. |
| **Missing layer** (you saw an online image) | `1880 U.S. census, Marion County, Indiana, ED {ED no.}, sheet {no.}, Bartholomew Cray.` | Append the layers you passed through: `...; digital image, Ancestry.com (https://www.ancestry.com : accessed {date}); citing NARA microfilm publication T9, roll {roll no.}.` |
| **Index cited as if it were the original** (you saw only an index entry) | `Marion County, Indiana, death certificate no. {cert. no.} ({year}), Susannah Teale.` | `"{exact database title}," database, FamilySearch (https://www.familysearch.org : accessed {date}), entry for Susannah Teale, {event date}; citing Marion County, Indiana, death certificate no. {cert. no.}. Certificate not examined.` |
| **Missing locator** | `Marion County, Indiana, Deed Books; County Recorder's Office, Indianapolis.` | `Marion County, Indiana, Deed Book {vol.}: {page}, Bartholomew Cray to Susannah Teale, {date}, recorded {date}; County Recorder's Office, Indianapolis.` |
| **Repository omitted** | `Marion County, Indiana, Will Book {vol.}: {page}, will of Bartholomew Cray.` | Add Where-is: `...; Clerk of the Circuit Court, Indianapolis.` A county name is a jurisdiction, not a place a reader can walk into. |
| **Undated access, no stable identifier** | `Find a Grave (https://www.findagrave.com), Bartholomew Cray.` | `Find a Grave, database with images (https://www.findagrave.com : accessed {date}), memorial {memorial no.}, Bartholomew Cray ({birth year}-{death year}), Crown Hill Cemetery, Indianapolis, Marion County, Indiana; gravestone photograph by {contributor}.` |
| **Derivative presented as original** | `Original will of Bartholomew Cray, Marion County, Indiana, Will Book {vol.}: {page}.` | `Marion County, Indiana, Probate Court, Will Book {vol.}: {page}, recorded copy of the will of Bartholomew Cray, proved {date}; Clerk of the Circuit Court, Indianapolis.` |
| **Abbreviations in a first full note** | `Marion Co., Ind., Mar. Rec. 4: 112.` | Spell it out on first use. Abbreviate only in the short note. |
| **Source-list entry carrying a locator** | `Marion County, Indiana. Marriage Record 4: 112. Clerk of the Circuit Court.` | `Marion County, Indiana. Marriage Records, {year range}. Clerk of the Circuit Court, Indianapolis.` |
| **"Cited in" collapsed into a direct citation** (read in a county history) | `Marion County, Indiana, Will Book {vol.}: {page}.` | `{Author}, {Title of the Work} ({place}: {publisher}, {year}), {page}, citing Marion County, Indiana, Will Book {vol.}: {page} [not examined by this researcher].` |
| **Event date used as record date** (certificate filed the following year) | `Indiana death certificate ({event year}), Bartholomew Cray.` | `Indiana Department of Health, death certificate no. {cert. no.} ({year of cert.}), Bartholomew Cray, for a death of {event date}; Vital Records, Indianapolis.` |

**When to run it.** Cite as you capture, not at write-up. A citation written from a photograph
three months later is missing the shelf, the finding aid number, the volume's title page, and
the fact that the page was unnumbered. Building citation capture into the research log is a
workflow question and belongs to `references/research-workflows.md`.

## Where this file stops

- Search strategy, planning, logs, negative results, when to stop:
  `references/research-workflows.md`.
- Proof statements, summaries and arguments, reports, GPS self-audit, archiving:
  `references/documentation-standards.md`.
- Dates, calendars, place normalisation: `references/timeline-building.md`.
- Kinship, identity resolution, interpreting DNA matches: `references/relationship-mapping.md`.
- Paste sheet of every template above: `templates/citation-quickref.md`.
