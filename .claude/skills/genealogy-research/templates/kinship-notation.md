# Template: kinship notation

Copy-paste artifact for `references/relationship-mapping.md`. Four things live here: the
writing conventions for half, step, adoptive and fostered relationships; the cousin
degree-and-removal grid; the four descending numbering systems side by side on one family,
with Ahnentafel for the ascending direction; and the standard abbreviations.

Everything below uses the exemplar roster at the head of
`references/relationship-mapping.md`, so any block here can be checked against that file.
Swap in your own people without changing the shape.

---

## 1. Writing half, step, adoptive and fostered relationships

The shorthand drops the qualifier, and the reader supplies a wrong one. Write it out every
time, in the conclusion as well as in the notes.

```
WRITE IT AS                                                  NEVER WRITE
half sibling
  "his half brother Silas Cray (same father, Bartholomew     "his brother"
   Cray of Slaughter Neck)"
step relation
  "his stepdaughter Patience Kell, daughter of his wife      "his daughter"
   Dorcas by her first husband Jabez Kell"
step in an older record
  "described as his 'son-in-law', read here as stepson"      a silent modernisation
adoptive, legal
  "adopted son, per the adoption decree entered in the       "son" unqualified
   [county] court, [year]"
adoptive, informal
  "raised in the household of, and called son by, [name];    "adopted son"
   no adoption record found in [jurisdiction], [date span]"
fostered / bound out / apprenticed
  "bound to [name] by the overseers of the poor, [year]      any kinship term
   (indenture)"
guardianship
  "guardian (an office, not necessarily a blood             "uncle", inferred from
   relationship)"                                            the guardianship alone
genetic vs. documentary parent
  "documentary father [name]; genetic father [name]",        either one deleted in
   each defended separately                                  favour of the other
```

Chart tags, for any chart that cannot carry a qualifier in its own notation:

```
Patience Kell [step]      Silas Cray [half, same father]      Nehemiah Cray [adopted 1889]

LEGEND (put it on the chart itself, never in a separate file)
[step]  [half, same father]  [half, same mother]  [adopted YYYY]
[raised by, no adoption record]  [bound out YYYY]  [genetic]  [documentary]
```

---

## 2. Prose conventions

```
1. DATES ON FIRST MENTION, short form after.
   "Bartholomew Cray of Bellwether Creek (1788-1851)" ... then "Bartholomew of
   Bellwether Creek". Estimated: "(ca. 1788-1851)".

2. ONE TAG PER SAME-NAMED PERSON, taken from the records, used every time.
   Declare the scheme once, near the front:
   "Three men of this name appear below and are distinguished throughout as of
   Bellwether Creek, of Slaughter Neck, and the younger."
   Do not disambiguate with Jr and Sr unless the records do; those labels are
   community-relative and they move.

3. STATE THE PATH, NOT JUST THE LABEL.
   "Josiah Teale (1919-1986) was second cousin twice removed to Tabitha Stannard
   (1871-1944), descending from Bartholomew Cray of Bellwether Creek through
   Cray's son Bartholomew the younger, where Tabitha descends through his
   daughter Mary."
   Not: "they were second cousins twice removed."

4. ANCHOR EVERYTHING TO ONE SUBJECT and describe others by their relationship to
   that person. Do not switch reference points mid-paragraph.
```

Log a record's own kinship word before you interpret it:

```
Record:      [creator, instrument, execution date (proved date)]
Source says: "[the word, verbatim, original spelling]"
Read as:     [your reading]
Basis:       [what supports the reading: era, place, the writer's other usages]
Confidence:  [high / moderate / low, and what would change it]
```

---

## 3. Cousin degree and removal

Count generations **up** from each person to the nearest common ancestor. The smaller count
is `a`, the larger `b`. **Count arrows, not names: each arrow is one generation.**

```
a = 0   direct line; one is the ancestor of the other, b generations up
a = 1   the shorter-path person is the sibling of an ancestor of the other:
        sibling (b=1), aunt/uncle (b=2), grandaunt/uncle (b=3), great-grandaunt/
        uncle (b=4), adding one "great" per further generation
a >= 2  cousin degree = a - 1        removal = b - a
```

Rows and columns below are generations down from the common ancestor.

|  | child (1) | grandchild (2) | gt-grandchild (3) | 2x-gt-grandchild (4) | 3x-gt-grandchild (5) |
|---|---|---|---|---|---|
| **child (1)** | siblings | aunt/uncle - niece/nephew | grandaunt/uncle - grandniece/nephew | gt-grandaunt/uncle - gt-grandniece/nephew | 2x-gt-grandaunt/uncle - 2x-gt-grandniece/nephew |
| **grandchild (2)** | | 1st cousins | 1st cousins once removed | 1st cousins twice removed | 1st cousins three times removed |
| **gt-grandchild (3)** | | | 2nd cousins | 2nd cousins once removed | 2nd cousins twice removed |
| **2x-gt-grandchild (4)** | | | | 3rd cousins | 3rd cousins once removed |
| **3x-gt-grandchild (5)** | | | | | 4th cousins |

Each further column adds one removal and nothing else, so the grid extends indefinitely to
the right. Removal is a difference in generation, never lateral distance, and it does not
say which way: "first cousin once removed" describes both your parent's first cousin and
your first cousin's child, so write the direction or name the path.

Checked against the roster: Tabitha Stannard (a = 3) and Josiah Teale (b = 5) sit at row 3,
column 5, second cousins twice removed. Mary (Cray) Stannard (a = 1) and Josiah Teale
(b = 5) sit at row 1, column 5, 2x-great-grandaunt and 2x-great-grandnephew.

---

## 4. Numbering systems side by side

One family, four descending systems. Register and NGSQ numbers are arbitrary sequence and
carry no path; Henry and d'Aboville numbers **are** the path from the progenitor.

```
Register   NGSQ    Henry    d'Aboville   Person
--------   ----    -----    ----------   ----------------------------------------
1          1       1        1            Bartholomew Cray of Bellwether Creek,
                                           1788-1851, m. Susannah Teale
      i.   2       11       1.1          Mary Cray, 1810-1884
2.   ii.   +3      12       1.2          Bartholomew Cray the younger, 1812-1880,
                                           m. Verity Marchbank
     iii.  4       13       1.3          Hosea Cray, 1815-1816
      i.   5       121      1.2.1        Josiah Cray, b. 1840
     ii.   6       122      1.2.2        Ann Cray, b. 1843
```

The last two are the children of Bartholomew the younger, so in Register and NGSQ they open a
second numbered entry (Register 2, NGSQ 3) and their roman numerals restart at i. In Henry and
d'Aboville no new entry is needed, because the number already carries the descent.

- **Register**: an Arabic number goes **only** to a person whose family is carried forward to
  a later entry, and sits to the left of that person's roman numeral. Mary and Hosea get
  none, so there is no number by which to cite Mary. That is the system working as intended
  for a narrative following selected lines.
- **NGSQ (Record)**: **every** child gets an Arabic number in one running sequence; a plus
  sign marks those carried forward. Mary is citable as no. 2 although her line is not
  followed here. Suits a complete descendancy.
- **"Modified Register"** is used by different authors for both of the above. Declare the
  mechanics, not the label.
- **Henry** concatenates birth-order digits, so past nine children it needs a convention:
  classic Henry uses X for a tenth child then A, B, C; modified Henry parenthesises, `1(10)`.
  **d'Aboville** separates generations with periods and needs no such convention.

Ascending direction, **Ahnentafel**, subject Tabitha Stannard (1871-1944) numbered 1:

```
father of n = 2n      mother of n = 2n + 1      child of n = n div 2
generation of n = floor(log2 n) + 1

1   Tabitha Stannard, 1871-1944
2   Reuben Stannard, 1838-1901
4   Elias Stannard                5  Mary Cray, 1810-1884
                                 10  Bartholomew Cray of Bellwether Creek, 1788-1851
                                 11  Susannah Teale, 1791-1868
```

10 is even, so male; his child is 10 div 2 = 5, odd, so female; her child is 2, male; whose
child is 1. Number 10 is the subject's father's mother's father, which is what the roster
says. One person occupying two Ahnentafel numbers is pedigree collapse, and it changes what
you should expect from DNA.

Declaration block, to sit near the front of any compiled genealogy:

```
NUMBERING. Descendants are numbered in the [Register / NGSQ (Record) / Henry /
d'Aboville] style: [state the mechanics in one sentence, not just the name].
Roman numerals give birth order within each family. A superscript figure after a
given name is the generation, counting [progenitor] as generation one. Ancestors,
where cited, use Ahnentafel numbers relative to [subject], who is 1.
[If software produced the numbering, name the software and the setting.]
```

---

## 5. Standard abbreviations

Expand every abbreviation once, on first use, in anything a reader outside your file will
read. A conclusion should not require a glossary.

| | | | |
|---|---|---|---|
| `b.` born | `bap.` baptised | `bur.` buried | `ca.` / `c.` circa, about |
| `d.` died | `d.y.` died young | `d.s.p.` died without issue (*decessit sine prole*) | `d.s.p.m.` died without male issue |
| `d.v.p.` died in the father's lifetime (*decessit vita patris*) | `s.p.` without issue (*sine prole*) | `unm.` unmarried | `div.` divorced |
| `m.` married | `m. (1)`, `m. (2)` first, second marriage | `wid.` widow, widower | `rel.` relict (widow) |
| `ch.` children | `liv.` living at the stated date | `fl.` flourished (*floruit*) | `aet.` / `æt.` aged (*aetatis*) |
| `n.d.` no date | `admon` grant of administration | `pr.` proved | `inv.` inventory |
| `wit.` witness | `gdn.` guardian | `exr.` executor | `adm.` administrator |

Latin kinship words as they appear in registers and probate records:

| | | | |
|---|---|---|---|
| *uxor* wife | *vidua* widow | *filius / filia* son / daughter | *nepos / neptis* grandson / granddaughter, also nephew / niece |
| *avus / avia* grandfather / grandmother | *frater / soror* brother / sister | *gener* son-in-law | *nurus* daughter-in-law |
| *vitricus* stepfather | *noverca* stepmother | *privignus / privigna* stepson / stepdaughter | *sponsores / patrini* sponsors, godparents |
| *patruus* father's brother | *avunculus* mother's brother | *amita* father's sister | *matertera* mother's sister |
| *natus / nata* born | *obiit* died | *sepultus / sepulta* buried | *consanguineus* blood relative |

*nepos* is the trap: in English wills through the seventeenth century "nephew" from *nepos*
frequently means **grandson**. Log the word, then log your reading, then say what the reading
rests on. The historical-drift table in `references/relationship-mapping.md` section 4 lists
the rest, with the era and place each reading belongs to.
