# Proof argument template

Copy this file, rename it `proofs/[ID]_[surname-given]_[topic]_v[n].md`, delete the guidance in
`> quote blocks`, and fill it in. Guidance and rationale: `references/documentation-standards.md`
§3. Citation syntax: `references/citation-management.md`.

Use a proof argument when **any** of these is true: the evidence is indirect; evidence conflicts;
negative evidence carries part of the load; identity must be established before the relationship
can be; or the answer rests on a chain of inference. Otherwise use a proof statement or a proof
summary and do not pad.

> **A proof argument that only marshals supporting evidence is not a proof argument.** If no
> section of your draft begins "Against this," you have not finished. Go back and find what you
> left out.

---

## Header

```
Conclusion ID:     C-____
Title:             [The question, as a phrase]
Researcher:        [name]
Version:           v__          Date: ____-__-__
Status:            Draft / Current / Superseded (see the conclusion record)
Supersedes:        [prior version and date, or "none"]
Confidence:        Proved / Probable / Possible / Unresolved
Depends on:        [other conclusion IDs this rests on, especially identity conclusions]
Depended on by:    [other conclusion IDs, reports, charts, sketches that use this]
```

---

## 1. The question

> One sentence. Specific enough to be answerable and specific enough to fail. Identify the
> person by more than a name: fix the place, the period, and one anchoring event. "Who was the
> father of X, who married Y in Z County in 1821?" not "the X family of Z County."

---

## 2. Background and identity context

> Cover, in this order:
> - Who this person is, and the anchoring events that fix them in time and place.
> - **Identity before relationship.** Show that the records you are about to correlate are all
>   about the same person. Name what would distinguish them from a same-named contemporary. If
>   identity rests on its own argument, cite the conclusion ID and summarise it in two sentences.
>   Mechanics: `references/relationship-mapping.md`.
> - The jurisdiction and its record survival: what exists for this period, what was lost, what
>   was never created. This is where you pre-empt "why didn't you just check the birth record."
> - The state of prior belief: what published or online sources currently say, so the reader
>   knows what you are answering.

---

## 3. The evidence, presented and evaluated

> One block per item, lettered A, B, C. Do not merely cite: present. Each block states:
> - what the record is and what it says (transcribe or closely paraphrase the operative words);
> - **source class**: original / derivative / authored narrative, and why;
> - **information class** for the assertion you are using, with the informant named or recorded
>   as undetermined, and their position relative to the event;
> - **evidence type for THIS question**: direct / indirect / negative evidence, and the inference
>   it supports;
> - what it does **not** establish. This line is not optional; it is what keeps the argument
>   honest.

**Item A. [short label].** [Statement of the record and its content.][^n] [Source class.]
[Information class and informant.] For this question this is **[direct / indirect / negative
evidence]**, because [inference]. It does not establish [limit].

**Item B. [short label].** …

**Item C. [short label].** …

> Where an item is **negative evidence**, state the expectation first: the record-keeper would
> have recorded this if it had happened, and here is how I know that. An absence argued without
> a stated expectation reads as hand-waving. Where an item is a **negative search result**, say
> so in those words and cite the search, including its exact scope.

---

## 4. Correlation

> The argument is actually made here. Lay the items against each other so the pattern is visible
> to the reader rather than only to you. A table or a chronology usually beats prose.

| Date / event | What the record shows | Item | Inference available |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |

> Follow the table with two or three sentences naming the pattern: what no single item says, and
> what they say in sequence.

---

## 5. Conflicting evidence

> Mandatory heading. Keep it even if you must write "No conflicting evidence was found in the
> sources listed in section 3, and the following sources that could have contradicted this
> conclusion were searched: …". Silence here is read as omission.

**The conflict.** [State it plainly, in your own words, before resolving it. Name the source and
what it asserts.]

**The case for it, at its strongest.** [Steelman. Include the parts that genuinely trouble you.
Why would a reasonable researcher believe this instead?]

**The case against it.** [Your evidence and reasoning, point by point.]

**Resolution.** [The outcome, and the principle you applied to reach it. Weigh by source class,
informant position, distance from the event, independence, and consequence attached to accuracy.
Never by counting sources. Where you can, identify the **mechanism of the error**: the
transcription slip, the rounded age, the reused name, the calendar shift. Explaining the losing
evidence is stronger than overruling it.]

> Repeat this block for each conflict. If a conflict is unresolved, say so here under its own
> sub-heading, carry **both** readings forward, mark every downstream conclusion that depends on
> the choice, and name the record type that would settle it.

---

## 6. Conclusion

> What is concluded, at what confidence, in language proportionate to the evidence:
> *proved* / *probably* / *possibly* / *unresolved*. One paragraph. Name the load-bearing
> evidence so the reader knows where to attack.

**Residual doubt, stated.** [What the evidence still does not exclude, and the specific record
that would close it. A proof argument that names its own soft spot is more trustworthy than one
that does not, and the reader will find the soft spot anyway.]

---

## 7. Citation apparatus

> Full reference notes on first use; shortened notes on repetition; a source list if this
> document will circulate on its own. Three different shapes: see
> `references/citation-management.md`. Online items show the provenance chain: website layer,
> film or image layer, underlying original, in that order. Cite negative searches too, with
> their exact scope, because they are part of the argument.
>
> **Never write a page number, film number, standard number, or URL you have not verified.**
> Leave a visible `[placeholder]` instead. A wrong number is worse than a blank.

```
[^1]:
[^2]:
[^3]:

Shortened forms on repetition:

Source-list entries (alphabetised by first element):
```

---

## 8. Sources searched without result

> Included here rather than only in the research report when a negative search supports the
> argument, or when a reader would otherwise reasonably ask why an obvious record was not used.
> Give jurisdiction, exact date span, index or page-by-page, name variants tried, and the
> condition of the source.

| Source | Jurisdiction | Span searched | How searched | Variants | Result |
|---|---|---|---|---|---|
|  |  |  |  |  | nil |

---

## Pre-submission check

Run the GPS self-audit in `references/documentation-standards.md` §2.1 before marking this
document Current. Fail any line and either fix it or downgrade the confidence language.
