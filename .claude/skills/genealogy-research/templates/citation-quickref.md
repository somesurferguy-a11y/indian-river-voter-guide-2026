# Citation quick reference

Copy-paste sheet. Fill every `{slot}`. Keep `[square brackets]`: they are real citation
punctuation marking information *you supplied* that the item does not carry. Reasoning,
worked layering examples, and the defect table are in
`references/citation-management.md`.

```
LEGEND
{slot}            replace with your data; nothing in braces is a real number or title
[supplied]        keep the brackets; marks what you added, not what the record says
                  (in a finished citation brackets mean supplied, never "fill me in")
_title_           underscores mark a published title (book, journal, newspaper, website)
                  that must be set in italics; code fences cannot render italics, so strip
                  the underscores and italicise the title when you paste
;                 separates provenance layers
citing            everything after this word is the provider's claim, unverified by you
( : accessed )    website layer: (site root URL : accessed {date})
```

## The five elements

```
Who        creator or responsible agency (NOT the website)
What       title, in quotation marks (unpublished/database) or italics (published);
           or [a description you wrote]
When       date of the record or of publication (not the event date, if they differ)
Where-in   the specific locator: vol., page, entry, folio, line, dwelling, family, cert. no.
Where-is   repository + city; or collection / record group / film no.; or site + persistent id
```

## The three shapes

```
FULL NOTE    whole -> part -> layers.  First-name-first.  Commas within, semicolons between
             layers, one final period.  ALWAYS carries the specific locator.
SHORT NOTE   minimum that is unambiguous in this document, PLUS the locator (it changes
             every use).  Surname only.  Abbreviate freely.
SOURCE LIST  sortable lead element first (surname, or jurisdiction).  Periods between major
             elements.  Full publication data.  NEVER carries the specific locator.
```

## Layering formulas

```
Examined the original in person
   {original, full Where-in}; {repository}, {city}.

Examined an online image of an original
   {original, full Where-in}; digital image, _{Site}_ ({site root URL} : accessed {date});
   citing {film / publication / record group the site names}.

Examined microfilm
   {original, full Where-in}; FamilySearch microfilm {film no.}, item {no.}; digital folder
   (DGS) {no.}, FamilySearch Library, Salt Lake City.

Examined an index entry only
   "{exact database title}," database, _{Site}_ ({site root URL} : accessed {date}),
   entry for {person}, {event date}; citing {source the site names}. {Original} not examined.

Read it in someone else's book ("cited in")
   {Author}, _{Title}_ ({place}: {publisher}, {year}), {page}, citing {their source}
   [not examined by this researcher].
```

Descriptor matters: `database` = index fields only. `database with images` = index plus
images. `digital images` = images, no index layer.

## Templates by record type

### Civil registration (US)

```
Full   Indiana, {state health agency as named on the certificate}, death certificate no.
       {cert. no.} ({year of cert.}), Susannah Teale, informant {informant as named},
       {relationship as stated}; Indiana Department of Health, Vital Records, Indianapolis.
Short  Indiana death certificate no. {cert. no.} ({year}), Teale.
List   Indiana. {State health agency as named on the certificates}. Death certificates,
       {year range}. Indiana Department of Health, Vital Records, Indianapolis.
Online Indiana, {state health agency as named on the certificate}, death certificate no.
       {cert. no.} ({year of cert.}), Susannah Teale; digital image, _{Site Name}_
       ({site root URL} : accessed {date}); citing {the series or digital folder (DGS)
       number the site names}.
```
Certificate numbers restart annually: always parenthesise the certificate year. Who is a
slot filled from the certificate itself, not today's agency name; today's holder goes in
Where-is (`references/citation-management.md` §2).

### County marriage record

```
Full   Marion County, Indiana, Marriage Record {vol.}: {page}, Cray-Teale, {date}; Clerk of
       the Circuit Court, Indianapolis.
Short  Marion Co., Ind., Marriage Record {vol.}: {page}, Cray-Teale.
List   Marion County, Indiana. Marriage Records, {year range}. Clerk of the Circuit Court,
       Indianapolis.
```

### US federal census

```
Full   1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis,
       enumeration district (ED) {ED no.}, sheet {no. and letter}, dwelling {no.},
       family {no.}, Bartholomew Cray; NARA microfilm publication T9, roll {roll no.}.
Short  1880 U.S. census, Marion Co., Ind., pop. sch., ED {ED no.}, sheet {no.},
       fam. {no.}, Cray.
List   Indiana. Marion County. 1880 U.S. census, population schedule. NARA microfilm
       publication T9. National Archives, Washington, D.C.
Online 1880 U.S. census, Marion County, Indiana, population schedule, Indianapolis,
       enumeration district (ED) {ED no.}, sheet {no. and letter}, dwelling {no.},
       family {no.}, Bartholomew Cray; digital image, _{Site Name}_ ({site root URL} :
       accessed {date}); citing NARA microfilm publication T9, roll {roll no.}.
```
Verified publication numbers: M653 (1860), M593 (1870), T9 (1880), T623 (1900). All in
Record Group 29. Look any other year up in NARA's microfilm catalog; do not guess.
Name the schedule (population / mortality / agriculture): they are separate records.

### Church and parish register

```
Full   Saint John's Evangelical Lutheran Church (Indianapolis, Indiana), "Taufregister
       {year range}," p. {page}, entry {no.}, baptism of Susannah Teale, {date}; parish
       office, Indianapolis.
Short  St. John's Lutheran (Indianapolis), "Taufregister," p. {page}, entry {no.}, Teale.
List   Saint John's Evangelical Lutheran Church (Indianapolis, Indiana). "Taufregister
       {year range}." Parish office, Indianapolis.
Online Saint John's Evangelical Lutheran Church (Indianapolis, Indiana), "Taufregister
       {year range}," p. {page}, entry {no.}, baptism of Susannah Teale, {date}; digital
       images, _FamilySearch_ (https://www.familysearch.org : accessed {date}); citing
       digital folder (DGS) {no.}, FamilySearch Library, Salt Lake City.
```
Always parenthesise the church's place. Baptism is not birth; burial is not death.

### Probate: will book AND estate file (two different sources)

```
Full   Marion County, Indiana, Probate Court, Will Book {vol.}: {page}, recorded copy of the
       will of Bartholomew Cray, written {date}, proved {date}; Clerk of the Circuit Court,
       Indianapolis.
Short  Marion Co., Ind., Will Book {vol.}: {page}, Cray will.
List   Marion County, Indiana. Probate Court. Will Books, {year range}. Clerk of the Circuit
       Court, Indianapolis.
Online Marion County, Indiana, Probate Court, Will Book {vol.}: {page}, recorded copy of the
       will of Bartholomew Cray, written {date}, proved {date}; digital images,
       _FamilySearch_ (https://www.familysearch.org : accessed {date}); citing digital
       folder (DGS) {no.}, FamilySearch Library, Salt Lake City.

Full   Marion County, Indiana, Probate Court, estate file no. {no.}, Bartholomew Cray
       ({year}); Indiana State Archives, Indianapolis.
Short  Marion Co., Ind., estate file no. {no.}, Cray.
List   Marion County, Indiana. Probate Court. Estate files, {year range}. Indiana State
       Archives, Indianapolis.
Online Marion County, Indiana, Probate Court, estate file no. {no.}, Bartholomew Cray
       ({year}), {document within the file}, {date}; digital images, _{Site Name}_
       ({site root URL} : accessed {date}); citing {the film or digital folder (DGS)
       number the site names}, Indiana State Archives, Indianapolis.
```
Will book = clerk's copy = DERIVATIVE. Loose estate packet = the originals. Never call a
will book entry "the original will."

### Deeds and land

```
Full   Marion County, Indiana, Deed Book {vol.}: {page}, Bartholomew Cray to Susannah Teale,
       {date of instrument}, recorded {date of recording}; County Recorder's Office,
       Indianapolis.
Short  Marion Co., Ind., Deed Book {vol.}: {page}, Cray to Teale.
List   Marion County, Indiana. Deed Books, {year range}. County Recorder's Office,
       Indianapolis.
Online Marion County, Indiana, Deed Book {vol.}: {page}, Bartholomew Cray to Susannah Teale,
       {date of instrument}, recorded {date of recording}; digital images, _FamilySearch_
       (https://www.familysearch.org : accessed {date}); citing digital folder (DGS) {no.},
       FamilySearch Library, Salt Lake City.
```
Give BOTH dates. US federal land: cite the patent via General Land Office Records
(https://glorecords.blm.gov) and the land entry case file separately, in Record Group 49,
National Archives.

### Military service and pension (US)

```
Full   Bartholomew Cray (Pvt., Co. {co.}, {regiment} Indiana Infantry, Civil War), pension
       application no. {app. no.}, certificate no. {cert. no.}, "{series title exactly as the
       finding aid gives it}," Records of the Department of Veterans Affairs, Record
       Group 15; National Archives, Washington, D.C.
Short  Cray pension no. {cert. no.}, RG 15, NARA-Washington.
List   United States. Department of Veterans Affairs. "{series title exactly as the finding
       aid gives it}." Record Group 15. National Archives, Washington, D.C.

Full   Compiled service record, Bartholomew Cray, Pvt., Co. {co.}, {regiment} Indiana
       Infantry; Records of the Adjutant General's Office, 1780s-1917, Record Group 94;
       National Archives, Washington, D.C.
Short  Cray CSR, Co. {co.}, {regiment} Ind. Inf., RG 94, NARA-Washington.
List   United States. Adjutant General's Office. "{series title exactly as the finding aid
       gives it}." Record Group 94. National Archives, Washington, D.C.
```
The source-list entry is series-level, even for a discrete case file: it names the body of
material searched, not one certificate number (`references/citation-management.md` §5).
A pension file is a FILE. Name the document inside it when one paper carries your assertion:
`..., certificate no. {cert. no.}, affidavit of Susannah Teale, {date}`.
A compiled service record is itself a derivative, abstracted from muster rolls.

### Naturalisation (US)

```
Full   Marion County, Indiana, Circuit Court, "Declarations of Intention," vol. {vol.}:
       {page}, Bartholomew Cray, {date}; Indiana State Archives, Indianapolis.
Short  Marion Co., Ind., Declarations of Intention {vol.}: {page}, Cray.
List   Marion County, Indiana. Circuit Court. Declarations of Intention, {year range}.
       Indiana State Archives, Indianapolis.
Online Marion County, Indiana, Circuit Court, "Declarations of Intention," vol. {vol.}:
       {page}, Bartholomew Cray, {date}; digital images, _{Site Name}_ ({site root URL} :
       accessed {date}); citing {the film or digital folder (DGS) number the site names},
       Indiana State Archives, Indianapolis.

Full   {U.S. district court as named on the record at the date of the petition}, petition
       for naturalization no. {no.}, Bartholomew Cray, {date}; Records of District Courts
       of the United States, Record Group 21; National Archives at Chicago.
Short  {U.S. district court}, petition for naturalization no. {no.}, Cray.
List   United States. {District court as named on the records}. Petitions for
       naturalization, {year range}. Record Group 21. National Archives at Chicago.
```
Pre-1906: any court of record, so the COURT is essential. It is also a slot, not a fixed
name: federal districts split as populations grew (Indiana split into two in 1928), so read
the court off the record itself. Declaration and petition are separate records, often
different courts and years apart.

### Newspapers

```
Full   "Death of B. Cray," _Indianapolis Journal_, {date}, p. {page}, col. {col.}.
Short  "Death of B. Cray," _Indianapolis Journal_, {date}, p. {page}.
List   _Indianapolis Journal_. Indianapolis, Indiana. {year range}.
Online "Death of B. Cray," _Indianapolis Journal_, {date}, p. {page}, col. {col.}; digital
       images, _{Site Name}_ ({site root URL} : accessed {date}); citing {the title's LCCN
       or the provider's own item identifier}.
```
Untitled item: `[untitled death notice]`. Add the edition if the paper ran several a day.
The newspaper title is italicised (a published title); the headline stays in quotation
marks. For a digitised paper carry the title's LCCN, since newspaper site URLs move often.

### Cemetery marker and sexton record

```
Full   Crown Hill Cemetery (Indianapolis, Marion County, Indiana), Bartholomew Cray marker,
       section {sec.}, lot {lot}; read, photographed, and transcribed by {researcher},
       {date of visit}.
Short  Crown Hill Cemetery (Indianapolis), Cray marker.
List   Crown Hill Cemetery. Indianapolis, Marion County, Indiana. Personal visit, reading,
       and photographs by {researcher}, {date}.

Full   Crown Hill Cemetery (Indianapolis, Marion County, Indiana), sexton's interment
       register {vol.}: {page}, entry for Bartholomew Cray, {date of interment}; cemetery
       office, Indianapolis.
Short  Crown Hill Cemetery (Indianapolis), interment register {vol.}: {page}, Cray.
List   Crown Hill Cemetery. Indianapolis, Marion County, Indiana. Sexton's interment
       registers, {year range}. Cemetery office, Indianapolis.
Online Crown Hill Cemetery (Indianapolis, Marion County, Indiana), sexton's interment
       register {vol.}: {page}, entry for Bartholomew Cray, {date of interment}; digital
       images, _{Site Name}_ ({site root URL} : accessed {date}); citing {the film or
       digital folder (DGS) number the site names}.
```
Name who read the stone and when. Flag replacement markers: a modern stone is a modern
assertion about an old burial. Sexton records and plot cards are a separate, often better,
source.

### Find A Grave and similar memorial databases

```
Full   _Find a Grave_, database with images (https://www.findagrave.com : accessed {date}),
       memorial {memorial no.}, Bartholomew Cray ({birth year}-{death year}), Crown Hill
       Cemetery, Indianapolis, Marion County, Indiana; gravestone photograph by
       {contributor}, uploaded {date}.
Short  _Find a Grave_, memorial {memorial no.}, Cray.
List   _Find a Grave_. Database with images. https://www.findagrave.com : {year}.
```
Two sources on one page: the typed dates are a contributor's authored narrative; the
photograph is an image of an artifact. Cite them separately when they carry different
assertions.

### Online searchable database (index, no image)

```
Full   "{exact database title as the site gives it}," database, _{Site Name}_
       ({site root URL} : accessed {date}), entry for Susannah Teale, {event date};
       citing {repository and record series as the site states it}.
Short  "{database title}," _{Site Name}_, entry for Teale.
List   "{exact database title}." Database. _{Site Name}_. {site root URL} : {year}.
```
Copy the database title exactly, including its date range and odd capitalisation.

### Digitised book

```
Full   {Author first last}, _{Title of the Book}_ ({place}: {publisher}, {year}), {page};
       digital images, _{Site Name}_ ({site root URL} : accessed {date}).
Short  {Author surname}, _{Short Title}_, {page}.
List   {Author surname}, {first}. _{Title of the Book}_. {Place}: {publisher}, {year}.
       Digital images. _{Site Name}_. {site root URL} : {year}.
```
Cite the page of the BOOK, not of the PDF. If the scan lacks the book's pagination:
`[image {n} of {N}]`. Prefer a persistent handle or DOI over a session URL.

### Manuscript collection and family papers

```
Full   {Collection Name}, box {no.}, folder {no.}, "{item description}," {date};
       {Manuscript repository}, {city}. {Collection number}.
Short  {Collection Name}, box {no.}, folder {no.}, {item}.
List   {Collection Name}. {Collection number}. {Manuscript repository}, {city}.

Full   Cray family Bible records, _{Bible title}_ ({place}: {publisher}, {year}), "Births"
       page; privately held by {holder}, [address for private use], {city, state}, {year}.
       {One sentence: how the item reached the present holder.}
Short  Cray family Bible records, "Births" page.
List   Cray family Bible records. _{Bible title}_. {Place}: {publisher}, {year}. Privately
       held by {holder}, {city, state}.
```
For private holdings the provenance sentence IS the Where-is. Cite the Bible's imprint date:
entries written before the book was printed were written from memory.

### Correspondence, interview, personal knowledge

```
Full   Susannah Teale ([address for private use], Indianapolis, Indiana) to {researcher},
       letter, {date}, "{subject}"; {Researcher} Research Files, privately held by
       {researcher}, {city, state}, {year}.
Short  Teale to {researcher}, letter, {date}.
List   Teale, Susannah. Correspondence with {researcher}, {year range}. {Researcher}
       Research Files, privately held by {researcher}, {city, state}.

Full   Susannah Teale (Indianapolis, Indiana), interview by {researcher}, {date}; audio
       recording and transcript privately held by {researcher}, {city, state}, {year}.
       {One sentence: the informant's relationship to the events and how they know.}
Short  Teale interview, {date}.
List   Teale, Susannah. Interview by {researcher}, {date}. Privately held by {researcher},
       {city, state}.

Full   {Researcher} ([address for private use], Indianapolis, Indiana), personal knowledge of
       {what}, {year range}, {how the knowledge was acquired}; statement written {date}.
Short  {Researcher}, personal knowledge of {what}.
List   {Researcher surname}, {first}. Personal knowledge. {City, state}.
```
The "how they know" sentence is what makes an interview evaluable. Date your own statement:
your memory in 2026 is not the same source as your memory in 1985.

### DNA test results and match lists

```
Full   {Tester initials or code} (b. {year}), autosomal DNA test, {testing company},
       kit no. {kit id}, test taken {date}; {Company} match list ({site root URL} :
       accessed {date}); test administered by {administrator}, results downloaded and
       retained by {researcher}, {city, state}.
Short  {Tester code} autosomal DNA, {Company}, accessed {date}.
List   {Company}. Autosomal DNA test results and match lists for {tester codes}. Database.
       {site root URL} : {year}.

Full   {Tester code} and {Match code}, {nn} cM shared across {n} segments, {Company} match
       list ({site root URL} : accessed {date}); shared-match data downloaded {date} and
       retained in {researcher}'s files.
Short  {Tester code} and {Match code}, {nn} cM, {Company} match list, accessed {date}.
List   {Company}. Shared-match and shared-centimorgan data for {tester codes}. Database.
       {site root URL} : {year}.
```
Match lists are not reproducible: cite the retained snapshot and the access date. Use codes
for living testers. Record the kit administrator separately from the tester. Cite the
measurement ({nn} cM), never the inferred relationship.

## Non-US analogues

```
England, parish register
Full   Saint Mary the Virgin (Ashwell, Hertfordshire), "Register of Baptisms {year range},"
       p. {page}, entry {no.}, baptism of Susannah Teale, {date}; Hertfordshire Archives and
       Local Studies, Hertford, {archive reference}.
Short  Ashwell, Herts., baptisms, p. {page}, entry {no.}, Teale.
List   Ashwell, Hertfordshire. Saint Mary the Virgin. "Register of Baptisms {year range}."
       Hertfordshire Archives and Local Studies, Hertford.
Online Saint Mary the Virgin (Ashwell, Hertfordshire), "Register of Baptisms {year range},"
       p. {page}, entry {no.}, baptism of Susannah Teale, {date}; digital images,
       _{Site Name}_ ({site root URL} : accessed {date}); citing Hertfordshire Archives and
       Local Studies, Hertford, {archive reference}.
```
Post-1812 baptism and burial registers and post-1754 marriage registers carry NUMBERED
ENTRIES. Use the entry number: it survives rebinding and refoliation.

```
England and Wales, census
Full   {year} census of England, {registration district}, {parish}, folio {folio},
       p. {page}, schedule {no.}, Bartholomew Cray; The National Archives (TNA), Kew,
       {series}/{piece no.}.
Short  {year} census, {parish}, {series}/{piece no.}, fol. {folio}, p. {page}, Cray.
List   England. {County}. {year} census. {series}. The National Archives, Kew.
Online {year} census of England, {registration district}, {parish}, folio {folio}, p.
       {page}, schedule {no.}, Bartholomew Cray; digital image, _{Site Name}_
       ({site root URL} : accessed {date}); citing The National Archives (TNA), Kew,
       {series}/{piece no.}.
```
TNA reference = department code / series / piece. Verified census series: HO 107 (1841,
1851), RG 9 (1861), RG 10 (1871), RG 11 (1881), RG 12 (1891), RG 13 (1901), RG 14 (1911).
Folios are stamped and are the archival locator; page numbers are printed. Give both.

```
England and Wales, civil registration
Full   General Register Office, England and Wales, marriage certificate for Bartholomew Cray
       and Susannah Teale, {date}, {registration district} registration district, {quarter}
       {year}, vol. {vol.}, p. {page}; certified copy issued {date}.
Short  GRO marriage certificate, Cray-Teale, {date}, {registration district}, vol. {vol.},
       p. {page}.
List   England and Wales. General Register Office. Civil registration marriage records,
       {year range}. Certified copies in {researcher}'s files.
```
Say certified copy and mean it: a GRO certificate is a modern transcription, a derivative,
not an image of the register. Same five elements elsewhere, different container names:
Library and Archives Canada census returns (RG 31, district, sub-district, page); a German
*Kirchenbuch* held at a *Landeskirchliches Archiv*; an Irish civil registration by
superintendent registrar's district, volume, and page.

## Hard-case snippets

```
Unpaginated          [p. 12, counted from the first page of the 1813 baptisms; pages
                     unnumbered]
Mis-numbered page    p. 214 [mis-numbered; falls physically between pp. 211 and 212]
                     p. 88 [second page so numbered]
Two numbering        fol. 42 (stamped), p. 83 (written)
  systems            <- cite the system the repository's finding aid uses, supply the other
Unprocessed          {Collection}, unprocessed accession {no.}, {container as labelled},
  collection         "{item description}," {date}; {repository}, {city}; collection
                     unprocessed at the time of use, {date of visit}.
Recatalogued         ..., cited at the time of use as {old ref}; recatalogued as {new ref}
                     as of {date checked}.
Paywalled            No change to the citation. Carry the film no. / record group /
                     repository so a reader without a subscription can still get there.
Ephemeral URL        Site ROOT url + provider's persistent id (ARK, DOI, handle, memorial
                     no., image no.) + the stable layer beneath + access date + a retained
                     download. Never a deep session URL.
Foreign language     "Taufregister" [baptismal register]. Non-Latin script: original, then
                     a romanisation, then name the scheme.
No author            Lead with the agency, jurisdiction, or title.
No title             [untitled ledger of burials, {year range}]
No date              [n.d.] / [ca. 1885] / [after 4 March 1868] / [1885?]
Private hands        privately held by {holder}, [address for private use], {city, state},
                     {year} + one provenance sentence.
Reproduced error     "Barthlomew" [sic]
```

## Software rules

The two-level model, the round-trip rule, and source-splitting/merge discipline are
explained in `references/citation-management.md` §7. Field-level paste sheet:

```
PAGE field:      the COMPLETE Where-in, written so it reads on its own
                 ("Will Book 12: 340, will of Bartholomew Cray, proved 4 March 1868"),
                 not a bare 340.

Survives GEDCOM: SOUR with TITL / AUTH / PUBL / REPO / NOTE / TEXT; citation PAGE.
Does not:        template ids and field mapping, italics and styling, the rendered notes and
                 bibliography, custom fields, any reliable meaning for QUAY.
```

## QA checklist

Full checklist with commentary and the before/after defect table:
`references/citation-management.md` §8. Quick pass before a citation leaves your file:

- [ ] Who / What / When / Where-in / Where-is are all present, in the right marks.
- [ ] Italics are actually on: strip `_underscores_` and italicise every published title
      (book, journal, newspaper, website) when you paste; code fences cannot show italics.
- [ ] The layer I EXAMINED leads; `citing` marks everything I did not see, with the correct
      descriptor (`database` / `database with images` / `digital images`).
- [ ] Access date on every online item; square brackets around everything I supplied.
- [ ] Shape matches position (full / short / source list, no locator); short note
      unambiguous; every number, title, and identifier was read off the item, not assumed.
- [ ] Private holdings and interviews carry the provenance or informant sentence.

Cite as you capture, never at write-up.
