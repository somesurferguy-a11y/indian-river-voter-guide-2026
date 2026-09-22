# Shared build brief — `genealogy-research` skill

Every domain writer and every critic reads this first. It fixes the architecture, the
vocabulary, and the house style so five independently written files read as one skill.

## Who the skill serves

A working family historian — hobbyist through pre-certification — who wants their research
to hold up: to a cousin who disagrees, to a lineage society application, to a BCG portfolio
judge, to themselves in ten years. Not a beginner's "how do I start a tree" tutorial and not
an academic essay. The register is *experienced colleague at the next table in the archive*.

## Skill layout

```
.claude/skills/genealogy-research/
  SKILL.md                              <- router, written last by the orchestrator
  references/research-workflows.md
  references/citation-management.md
  references/timeline-building.md
  references/relationship-mapping.md
  references/documentation-standards.md
  templates/…                           <- copy-paste artifacts
```

SKILL.md stays short and routes to references. Each reference file must stand alone: someone
who loads only that file should be able to do that job correctly.

## Benchmarks you are held to

1. **Board for Certification of Genealogists, _Genealogy Standards_ (2nd ed. rev.)** — the 87
   numbered standards, and the Genealogical Proof Standard (GPS) at their centre:
   - reasonably exhaustive research;
   - complete and accurate source citations;
   - thorough analysis and correlation of the collected information;
   - resolution of conflicting evidence;
   - a soundly reasoned, coherently written conclusion.
2. **FamilySearch Research Wiki** — the research process / "Principles of Family History
   Research" cycle: identify what you know → decide what you want to learn → select records
   to search → obtain and search them → evaluate, record, and repeat.

## Shared vocabulary — use these exactly, every file

- **Source** → *original* / *derivative* / *authored narrative*.
- **Information** → *primary* / *secondary* / *undetermined*, assessed per assertion, not per
  document. One document routinely carries both.
- **Evidence** → *direct* / *indirect* / *negative*. Evidence is a relationship between an
  information item and a research question, so the same item is direct for one question and
  indirect for another. **Negative evidence** (absence where presence is expected) is *not*
  the same as a **negative search result** (a search that found nothing); say which you mean.
- **Proof** → *proof statement* / *proof summary* / *proof argument*, escalating with the
  complexity of the reasoning.
- Say **conclusion** or **assertion**, never "fact". Say **record** for the artifact,
  **event** for the thing that happened, **entry** for one line in a register.

## Citation model (binding on every file that shows a citation)

Elizabeth Shown Mills's layered model from *Evidence Explained*. Every citation shows the
layer it came through: Who → What → When → Where-in → Where-is (and, for online material,
the **provenance chain**: the website layer, the film/image layer, and the underlying
original, in that order). First (full) reference note, shortened note, and source-list entry
are three different shapes — show all three when you show a template.

## Accuracy rules — the critic enforces these hard

- **Never invent a page number, a standard number, a URL, a catalog number, or a record set
  name.** If you are not certain a BCG standard carries a given number, describe the standard
  by its content and name instead. A wrong number is worse than no number.
- Example citations use obviously illustrative names (Bartholomew Cray, Susannah Teale) but
  **structurally real** record types, jurisdictions, and repositories. A reader must be able
  to swap in their own data without changing the shape.
- Where US-specific, say so, and name the non-US analogue at least once per file.
- No em dashes inside citation examples (they collide with real punctuation in titles).

## House style

- Markdown. `##` sections, tables where a table genuinely beats prose, fenced blocks for
  anything copy-pasteable.
- Lead each file with a 2-3 line "what this file is for" and a "when to load me" line.
- Concrete over abstract: show the artifact, then explain the rule behind it.
- Target 350-650 lines per reference file. Density over length; the critic penalises padding.
- Cross-reference sibling files by path, e.g. `references/citation-management.md`, when a
  topic properly belongs to a sibling. Do not duplicate a sibling's job.

## Interfaces between domains (do not overlap)

| File | Owns | Explicitly does NOT own |
|---|---|---|
| research-workflows | the research cycle, question framing, planning, logs, search strategy, negative results, when to stop | citation syntax, proof-argument prose |
| citation-management | citation anatomy, templates, layered/provenance citations, shortened forms, source lists, citation QA | the research log's workflow columns |
| timeline-building | chronologies, date/calendar handling, place-and-time normalisation, conflict detection via sequence | kinship notation |
| relationship-mapping | kinship, identity resolution, same-name separation, DNA-documentary integration, charts and numbering | date arithmetic rules |
| documentation-standards | the proof triad, research reports, report structure, GPS self-audit, archiving and data hygiene | the search-strategy loop |

## Your output

Write exactly one file: `references/<your-domain>.md`. If your domain needs a copy-paste
artifact, also add it under `templates/`. Do not touch another domain's file, SKILL.md, or
anything under `build/`.
