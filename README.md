# Indian River County Voter Guide 2026

A nonpartisan, fully-sourced voter guide for the 2026 Indian River County, Florida elections.
Static site, no build step, no dependencies, no server-side code.

**Primary election: August 18, 2026 · General election: November 3, 2026**

---

## Run it locally

```bash
python -m http.server 8777
```

Then open <http://localhost:8777>.

Any static file server works. There is nothing to compile.

## Deploy it

Because it is pure static files, it deploys free anywhere:

- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect a git repo. No build command; publish directory is the repo root.
- **GitHub Pages** — push to a repo, enable Pages on the branch root.
- **Any web host** — upload by FTP.

No database, no API keys, no runtime. It cannot go down because of a backend failure on election day, which is the reason it was built this way.

---

## How to update content

**All content lives in one file: [`data/guide.js`](data/guide.js).**

The HTML and JS are a pure renderer — no facts are hardcoded in them. To correct a fact,
add a candidate position, or update a finance figure, edit only that file. See
[`data/schema.md`](data/schema.md) for the full data contract.

### ⚠️ Bump the cache version after every content change

Asset URLs carry a version query (`?v=20260805a`) so returning visitors get updated content
instead of a stale browser cache. **If you change `data/guide.js` and don't bump this, people who
already visited will keep seeing the old version** — including old deadlines. That is the single
most dangerous failure mode for this site.

```bash
python - <<'EOF'
import io, glob, re
VER = '20260806a'   # <-- change this
for p in glob.glob('*.html'):
    s = io.open(p, encoding='utf-8').read()
    s = re.sub(r'(href="css/styles\.css)(\?v=[^"]*)?"', r'\1?v=%s"' % VER, s)
    s = re.sub(r'(src="(?:data|js)/[a-zA-Z0-9_-]+\.js)(\?v=[^"]*)?"', r'\1?v=%s"' % VER, s)
    io.open(p, 'w', encoding='utf-8').write(s)
print('versioned to', VER)
EOF
```

Also update `meta.updated` in `data/guide.js` so the "Last verified" date in the footer is honest.

**A caveat the version query does not solve:** bumping `?v=` busts the cache for CSS and JS,
but not for the **HTML pages themselves**. A returning visitor can hold a cached `races.html`
that still points at the old asset version, and see stale content even though the new files are
live on the server. Fix this at the host, not in the markup — configure short or zero
`Cache-Control` max-age for `.html` while leaving hashed assets cacheable. On Netlify/Vercel/
Cloudflare Pages this is a headers rule; the platform defaults are usually already sane for HTML,
but confirm it before relying on a same-day correction reaching people.

### Validate after editing

```bash
node --check data/guide.js
```

Then load any page with `?debug=1` (e.g. `http://localhost:8777/races.html?debug=1`) to surface
schema violations in a banner. Rules enforced:

1. Every position has a source with a URL.
2. Every record item has a type, date, and source.
3. **Every `allegation` has the candidate's response.**
4. Every finance block has an `asOf` date.
5. Issue ids referenced by candidates exist.

---

## Files

```
index.html          Landing: countdown, deadlines, race cards
races.html          Full candidate profiles (positions, record, money, endorsements)
compare.html        Side-by-side issue comparison, per race
issues.html         Plain-English issue explainers with hard numbers
money.html          Cross-race campaign finance comparison
how-to-vote.html    Dates, deadlines, closed-primary rules, ID, cure process
methodology.html    Sourcing standards, claim labeling, corrections policy

data/guide.js       ALL CONTENT. The only file to edit for updates.
data/schema.md      Data contract and editorial rules
js/render.js        Render engine + schema validator
js/{races,issues,money}.js   Per-page renderers
css/styles.css      Styles (light/dark, print, responsive)
research/*.md       Raw sourced research backing the guide
```

---

## Editorial standards

Summarized in full on [methodology.html](methodology.html). The short version:

- **Every factual claim carries a source link and a date.** No source, no publication.
- **Claims are typed by evidence strength** — `Documented`, `Vote in office`,
  `Allegation — not established`, `Unverified`. Allegations always carry the candidate's response.
- **No endorsements, no ranking, no scoring.** Third-party endorsements are reported as facts
  about who endorsed whom, never adopted.
- **Gaps are stated, not hidden.** "No position found" and "this guide could not verify" appear
  throughout on purpose — an empty section would falsely imply a clean record.
- **Equal scrutiny regardless of party.** Where a search found little on a candidate, the guide
  says so explicitly.

---

## Known gaps in this edition

Honest accounting of what is not yet filled in:

- **Mosquito Control Seat 2** — the only contested special-district race, and one of only two races
  open to every voter on Aug 18 — has almost no available candidate information. Down-ballot races
  get very little press. This is the largest remaining gap relative to its importance.
- **County Commission District 4** positions are sparse for both candidates.
- **Florida constitutional amendments** other than the property tax measure (HJR 203) are not yet
  covered; judicial retention races are not yet covered.
- **Top-donor and industry breakdowns for federal candidates** were not pulled. FEC totals are in;
  the itemized "contributions by individual" and OpenSecrets industry rollups are not.
- **Two items were deliberately withheld** as failing the evidence standard, and are noted on the
  site as withheld rather than silently dropped: an unverified claim about a U.S. Senate candidate's
  professional licensing history, and an unresolved 2018 ethics complaint naming 15 members of
  Congress including Darren Soto, for which no disposition could be established.
- **Sohi's final disposition on remand** in the 2015 Ohio dental board case could not be determined,
  and the guide says so rather than implying the sanction was or was not imposed.
- **No candidate was contacted for comment.** Several record items note that no response was
  located; a published edition should seek comment first, particularly from Paul Sohi, who has not
  publicly addressed any of the material in his file.

`research/*.md` contains the underlying sourced research, including explicit
"gaps / could not verify" sections in each file.

---

## Corrections

The corrections policy is on [methodology.html](methodology.html#corrections). Candidates may
submit a position statement for any issue marked "No position found," and may respond to any
record item; responses are published alongside. Factual errors are corrected as fast as they can
be verified.

---

*Independent volunteer project. Not affiliated with any candidate, campaign, party, political
committee, or government agency. Deadlines and ballot content are summarized from official
sources but are not legal advice — always confirm with the Indian River County Supervisor of
Elections, (772) 226-4700, before acting.*
