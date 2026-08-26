# Data Schema — Indian River County Voter Guide 2026

All site content lives in `data/guide.js` as a single `GUIDE` object. The site is a
pure renderer: **no content is hardcoded in HTML or JS**. To update the guide, edit
only `data/guide.js`.

## Core principle: every factual claim carries a source

Any statement about a candidate's record, position, or finances MUST have a `source`
with a URL and a date. The renderer displays a citation marker for each. A claim
without a source does not go on the site.

## Claim typing (used for record / opposition-research items)

Each record item declares a `type`, which controls how it renders:

| type         | Meaning                                                        | Renders as    |
|--------------|----------------------------------------------------------------|---------------|
| `fact`       | Documented in a primary source or corroborated reporting        | neutral       |
| `vote`       | A specific recorded vote in office, with date and outcome       | neutral       |
| `allegation` | Someone alleged this; not established. MUST include `response`  | amber, flagged|
| `unverified` | Circulating but uncorroborated. Included only to debunk/contextualize | grey, flagged |

`allegation` and `unverified` items render with an explicit visual warning that the
claim is not established fact. An `allegation` without a `response` field (the
candidate's reply, or "declined to comment" / "did not respond") is a schema error.

## Structure

```js
GUIDE = {
  meta: {
    updated: "ISO date",         // when data was last verified
    primaryDate, generalDate,    // ISO dates
    disclaimer: "..."            // shown in footer
  },

  deadlines: [
    { date: "ISO", label, detail, urgent: bool, source }
  ],

  // Issues are defined once and referenced by candidates via issue id.
  issues: [
    {
      id: "growth",
      name: "Growth & Development",
      icon: "...",
      background: "Plain-English explanation of the issue",
      numbers: [ { label, value, source } ],   // hard data
      sources: [ {title, url, date} ]
    }
  ],

  races: [
    {
      id: "cc-d2",
      office: "County Commission",
      district: "District 2",
      type: "partisan" | "nonpartisan",
      ballot: "primary" | "general" | "decided" | "both",
      whoVotes: "Plain-English: exactly who is eligible to vote in this race",
      stakes: "Why this race matters / what the board controls",
      term: "4 years",
      salary: "...",

      // OPTIONAL. Added once the Aug 18 primary has results. See "Primary
      // results" below.
      primaryResult: {
        status: "decided" | "advanced",
        summary: "Plain-English account of what happened and what's next",
        source: { title, url, date }
      },

      candidates: [ Candidate ]
    }
  ]
}
```

## Primary results (post-Aug-18 update)

Once primary results exist, `race.ballot` gains a third value: `"decided"` means
the office was fully settled on August 18 — no Nov 3 contest for voters on this
office (e.g. a nonpartisan race a candidate won outright with a majority, or an
office that drew only one candidate and needed no election). `"general"` still
means the office is headed to the Nov 3 ballot — including races where a party
primary just narrowed the field.

`race.primaryResult` (optional, added once results exist) carries the plain-
English account of what happened, always with a `source`. `status: "decided"`
races render it as good news (no more action needed from the voter on this
office); `status: "advanced"` races render it as informational (who's left, who
they'll face in November).

Each candidate MAY carry a `primary` block once results exist — see the
Candidate object below.

## Candidate object

```js
{
  id: "mcpartlan",
  name: "Bob McPartlan",
  party: "R" | "D" | "NPA" | "NONPARTISAN" | "WRITE-IN",
  incumbent: bool,
  age: 60,
  residence: "Sebastian",
  occupation: "...",
  bio: "...",

  // Keyed by issue id. Missing key = "No position found" (rendered explicitly,
  // never silently blank — an unanswered issue is itself information).
  positions: {
    growth: {
      summary: "One-line stance",
      quote: "Direct quote if available",
      source: { title, url, date }
    }
  },

  record: [
    { type, claim, date, detail, source, response }   // see claim typing above
  ],

  finance: {
    raised, spent, selfFunded,
    asOf: "ISO date",              // REQUIRED — finance data goes stale weekly
    topDonors: [ {name, amount, category} ],
    source: { title, url, date },
    note: "e.g. 'Filing not machine-readable; figures from news coverage'"
  },

  endorsements: [ {name, source} ],
  links: { website, facebook, filing },
  contacted: bool,                 // did the guide attempt to reach them

  // OPTIONAL. Added once Aug 18 primary results exist for this candidate.
  primary: {
    result: "won" | "lost" | "advanced" | "unopposed",
    // won/lost: this candidate was in a contested primary.
    // advanced: faced no primary themselves (unopposed member of the
    //   opposite party, an NPA candidate, or a qualified write-in) but is
    //   confirmed on the Nov 3 ballot.
    // unopposed: the whole office drew one candidate; already elected/seated,
    //   no election held at all.
    votes: 1234,          // optional — omit if not found, never invent one
    pct: 41.2,             // optional — percentage of the primary vote
    source: { title, url, date }   // REQUIRED whenever result is "won" or "lost"
  },

  // OPTIONAL. Omit entirely unless rights are cleared — see below.
  photo: {
    url: "...",                    // direct image URL or local path
    credit: "U.S. House of Representatives",
    rights: "Public domain"        // or "CC BY-SA 4.0", "Used with permission", ...
  }
}
```

## Candidate photos — rights rules

**A photo goes on this site only when its reuse basis is documented.** Campaign
headshots are copyrighted. Republishing one without permission is a legal exposure,
and it is a particularly bad one for a guide that also publishes critical material
about that same candidate — it hands them a grievance unrelated to the merits.

Tiers, safest first:

| Source | Status | Safe to publish? |
|---|---|---|
| U.S. federal government works (House, Senate, DoD official portraits) | Public domain | **Yes** |
| Wikimedia Commons with an explicit free license | Per license | **Yes, with required attribution** |
| State/county official portraits (Florida House, county commission, school district) | Public record — reuse status varies | **Only if confirmed** |
| Campaign headshots, news photos, social media images | Copyrighted | **No — permission required** |

Rules:

1. **No `photo` field without a `rights` value.** If rights are unclear, omit the
   photo. The initials avatar is a perfectly good fallback and carries no risk.
2. **Never hotlink** a third party's image. Download it, confirm the license, and
   serve it locally.
3. `credit` renders under the name; `rights` renders beside it. Attribution required
   by a license must appear in `credit`.
4. **Ask campaigns for a photo and permission.** Most will happily supply one — that
   turns a copyrighted image into `rights: "Used with permission"` legitimately.
   Ask every campaign in a race, not just some, and record who did not respond.

Candidates with and without photos render at identical size, so a candidate who
declined to supply one is never visually diminished.

## Rules enforced by `js/validate.js`

1. Every `positions` entry has a `source` with a URL.
2. Every `record` item has `type`, `date`, and `source`.
3. Every `record` item of type `allegation` has a non-empty `response`.
4. Every `finance` block has `asOf`.
5. Every candidate in a race is rendered, including write-ins and unopposed.
6. Issue ids referenced in `positions` exist in `issues`.

Validation failures are logged to console and shown in a banner in `?debug=1` mode,
so a bad edit is caught before it misleads a voter.

## Neutrality rules (editorial, not machine-enforced)

- Candidates within a race render in a fixed, documented order (ballot order where
  known, else alphabetical by surname). No ranking, scoring, or recommendation.
- The guide makes no endorsement. Third-party endorsements are reported as facts
  about who endorsed, never adopted.
- Equal-depth rule: if a negative record item is included for one candidate, a
  good-faith search must have been made for all others in the race. Where a search
  found little, `record` includes an explicit `type: "fact"` note saying so, rather
  than leaving an empty section that implies a clean record.
