/* ==========================================================================
   Render engine — Indian River County Voter Guide 2026

   The site is a pure renderer over the GUIDE object in data/guide.js.
   No content is hardcoded here. See data/schema.md.
   ========================================================================== */

/* ---------- escaping ---------- */

// All data is rendered through esc(). Content is authored by us, not users,
// but escaping is cheap insurance against a stray quote in a candidate quote
// breaking the page or injecting markup.
function esc(s) {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escAttr(s) { return esc(s); }

/* ---------- dates ---------- */

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// Parse an ISO date as LOCAL midnight, not UTC. `new Date("2026-08-18")` parses
// as UTC and renders as Aug 17 in US timezones — an off-by-one on an election
// date would be a genuinely harmful bug here.
function parseISO(iso) {
  if (!iso) return null;
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return new Date(+m[1], +m[2] - 1, +m[3]);
}

function fmtDate(iso, opts = {}) {
  const d = parseISO(iso);
  if (!d) return esc(iso);
  const s = `${MONTHS[d.getMonth()]} ${d.getDate()}`;
  return opts.year ? `${s}, ${d.getFullYear()}` : s;
}

function todayLocal() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

function daysUntil(iso) {
  const d = parseISO(iso);
  if (!d) return null;
  return Math.round((d - todayLocal()) / 86400000);
}

/* ---------- source citation ---------- */

// Look up a URL's domain against window.MEDIA_RATINGS (see data/guide.js).
// Deliberately scoped to news/media outlets only — government records, court
// filings, and campaign sites are not in the table and get no tag, because
// "political lean" doesn't meaningfully describe a primary document.
function mediaRatingFor(url) {
  if (!url || !window.MEDIA_RATINGS) return null;
  try {
    var host = new URL(url).hostname.replace(/^www\./, '');
    return window.MEDIA_RATINGS[host] || null;
  } catch (e) { return null; }
}

function leanTag(source) {
  var r = source && source.url ? mediaRatingFor(source.url) : null;
  if (!r) return '';
  return ` <a class="lean-tag" href="methodology.html#media-ratings" title="${
    escAttr(r.outlet + ' — ' + r.rating + ' (' + r.ratingBody + ')')}">${esc(r.rating)}</a>`;
}

function srcLink(source, label) {
  if (!source) return '';
  if (!source.url) {
    // A source without a URL still gets shown — readers deserve to know the
    // provenance is weaker, rather than seeing an unmarked bare claim.
    return `<span class="src" style="border-bottom-style:solid">${esc(source.title || 'Source')}${
      source.date ? ' · ' + fmtDate(source.date, { year: true }) : ''}</span>${leanTag(source)}`;
  }
  return `<a class="src" href="${escAttr(source.url)}" target="_blank" rel="noopener noreferrer">${
    esc(source.title || 'Source')}${source.date ? ' · ' + fmtDate(source.date, { year: true }) : ''}</a>${leanTag(source)}`;
}

/* ---------- party helpers ---------- */

const PARTY_LABEL = {
  R: 'Republican', D: 'Democrat', NPA: 'No Party',
  NONPARTISAN: 'Nonpartisan', 'WRITE-IN': 'Write-in', L: 'Libertarian'
};

function partyPill(p) {
  if (!p) return '';
  return `<span class="pill pill--${escAttr(p)}">${esc(PARTY_LABEL[p] || p)}</span>`;
}

/* ---------- primary result pill ---------- */

// Renders nothing until data/guide.js actually carries a `primary` block for
// this candidate — pre-Aug-18 candidates render exactly as before.
function primaryBadge(c) {
  const p = c.primary;
  if (!p) return '';
  const pct = (p.pct !== undefined && p.pct !== null) ? ` — ${esc(p.pct)}%` : '';
  if (p.result === 'won') return `<span class="pill pill--won">Won primary${pct}</span>`;
  if (p.result === 'lost') return `<span class="pill pill--eliminated">Eliminated in primary${pct}</span>`;
  if (p.result === 'advanced') return `<span class="pill pill--advanced">Advances to Nov 3 — no primary needed</span>`;
  if (p.result === 'unopposed') return `<span class="pill pill--won">Elected — unopposed</span>`;
  if (p.result === 'withdrew') return `<span class="pill pill--eliminated">Withdrew before qualifying</span>`;
  if (p.result === 'disqualified') return `<span class="pill pill--eliminated">Did not qualify</span>`;
  return '';
}

/* ---------- claim rendering (record / opposition research) ---------- */

const CLAIM_LABEL = {
  fact:       'Documented',
  vote:       'Vote in office',
  allegation: 'Allegation — not established',
  unverified: 'Unverified claim'
};

function renderClaim(item) {
  const type = CLAIM_LABEL[item.type] ? item.type : 'fact';

  // Schema rule: an allegation must carry a response. If the data is missing
  // one, render an explicit placeholder rather than silently presenting a
  // one-sided accusation.
  let responseHTML = '';
  if (type === 'allegation') {
    const r = item.response && String(item.response).trim();
    responseHTML = `<div class="claim__response"><strong>Candidate's response:</strong> ${
      r ? esc(r) : '<em class="muted">No response on record. This guide could not find a reply from the candidate.</em>'}</div>`;
  } else if (item.response) {
    responseHTML = `<div class="claim__response"><strong>Response:</strong> ${esc(item.response)}</div>`;
  }

  return `
    <div class="claim claim--${escAttr(type)}">
      <div class="claim__type">${esc(CLAIM_LABEL[type])}${item.date ? ' · ' + fmtDate(item.date, { year: true }) : ''}</div>
      <div class="claim__text">${esc(item.claim)}</div>
      ${item.detail ? `<div class="claim__detail">${esc(item.detail)}</div>` : ''}
      ${responseHTML}
      ${srcLink(item.source)}
    </div>`;
}

/* ---------- position rendering ---------- */

function renderPosition(pos) {
  // An unanswered issue is information, not a blank. Say so plainly.
  if (!pos) {
    return `<div class="no-position">No position found on this issue in public sources.</div>`;
  }
  return `
    <div>
      <div>${esc(pos.summary)}</div>
      ${pos.quote ? `<blockquote style="margin:8px 0 4px;padding-left:12px;border-left:2px solid var(--line);font-style:italic;color:var(--ink-2);font-size:.93rem">"${esc(pos.quote)}"</blockquote>` : ''}
      ${srcLink(pos.source)}
    </div>`;
}

/* ---------- finance ---------- */

function money(n) {
  if (n === null || n === undefined || n === '') return null;
  if (typeof n === 'string') return n;
  return '$' + Number(n).toLocaleString('en-US');
}

function renderFinance(f) {
  if (!f) {
    return `<div class="no-position">No campaign finance data retrieved for this candidate.</div>`;
  }
  const rows = [
    ['Raised', money(f.raised)],
    ['Spent', money(f.spent)],
    ['Self-funded', money(f.selfFunded)]
  ].filter(r => r[1]);

  const donors = (f.topDonors || []).length
    ? `<div style="margin-top:10px"><strong class="small">Top donors:</strong><ul class="small" style="margin:5px 0 0;padding-left:18px">${
        f.topDonors.map(d => `<li>${esc(d.name)}${d.amount ? ' — ' + esc(money(d.amount)) : ''}${
          d.category ? ` <span class="muted">(${esc(d.category)})</span>` : ''}</li>`).join('')}</ul></div>`
    : '';

  return `
    <div>
      ${rows.length ? `<div style="display:flex;gap:20px;flex-wrap:wrap">${
        rows.map(r => `<div><div class="small muted">${esc(r[0])}</div><div style="font-weight:800;font-variant-numeric:tabular-nums">${esc(r[1])}</div></div>`).join('')
      }</div>` : '<div class="muted small">Totals not available.</div>'}
      ${donors}
      ${f.note ? `<div class="small muted" style="margin-top:9px">${esc(f.note)}</div>` : ''}
      ${f.asOf ? `<div class="small muted" style="margin-top:7px"><strong>As of ${fmtDate(f.asOf, { year: true })}.</strong> Campaign finance totals change as new reports are filed.</div>` : ''}
      ${srcLink(f.source)}
    </div>`;
}

/* ---------- candidate avatar ----------

   Photos are a rights problem, not a design problem. Campaign headshots are
   copyrighted; republishing one without permission is a real exposure for a
   guide that also publishes critical material about that candidate.

   So: render a real photo ONLY when the data supplies one with an explicit
   rights basis. Otherwise render generated initials. A missing photo must
   never look like a broken image or an editorial slight — every candidate
   gets an identically-styled mark either way.

   Colors are derived from the name hash and drawn from a neutral palette on
   purpose: no red/blue, so an avatar never implies party.
*/

var AVATAR_COLORS = ['#0b4f6c', '#3d6b5c', '#6b5b4a', '#4a5568', '#5c4a6b', '#2f6b6b', '#6b4a52', '#455a52'];

var NAME_SUFFIX = /^(jr|sr|ii|iii|iv|v)\.?$/i;

function initials(name) {
  // Strip nicknames in quotes/parens, then drop generational suffixes so
  // "Thomas E. Chalifoux Jr." yields TC, not TJ.
  var clean = String(name || '').replace(/"[^"]*"/g, ' ').replace(/\([^)]*\)/g, ' ');
  var parts = clean.trim().split(/\s+/).filter(function (p) {
    return p && !NAME_SUFFIX.test(p);
  });
  // Drop middle initials ("E.") when a fuller surname follows.
  var named = parts.filter(function (p) { return !/^[A-Za-z]\.?$/.test(p); });
  if (named.length >= 2) parts = named;
  if (!parts.length) return '?';
  var first = parts[0][0] || '';
  var last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function avatarColor(seed) {
  var h = 0, s = String(seed || '');
  for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function renderAvatar(c, size) {
  size = size || 56;
  var style = 'width:' + size + 'px;height:' + size + 'px;flex:none;border-radius:50%;';

  if (c.photo && c.photo.url) {
    // alt text is the name only — the caption carries credit, so screen readers
    // aren't forced through licensing boilerplate.
    return '<img class="avatar" src="' + escAttr(c.photo.url) + '" alt="' + escAttr(c.name) + '" ' +
      'loading="lazy" style="' + style + 'object-fit:cover;background:var(--bg-3)">';
  }

  return '<div class="avatar avatar--initials" aria-hidden="true" style="' + style +
    'background:' + avatarColor(c.id || c.name) + ';color:#fff;display:grid;place-items:center;' +
    'font-weight:800;font-size:' + Math.round(size * 0.36) + 'px;letter-spacing:-.02em">' +
    esc(initials(c.name)) + '</div>';
}

function photoCredit(c) {
  if (!c.photo || !c.photo.url) return '';
  var bits = [];
  if (c.photo.credit) bits.push(esc(c.photo.credit));
  if (c.photo.rights) bits.push(esc(c.photo.rights));
  if (!bits.length) return '';
  return '<div class="small muted" style="margin-top:4px;font-size:.75rem">Photo: ' + bits.join(' · ') + '</div>';
}

/* ---------- candidate card ---------- */

function renderCandidate(c, issues) {
  const meta = [
    c.age ? `Age ${esc(c.age)}` : '',
    c.residence ? esc(c.residence) : '',
    c.occupation ? esc(c.occupation) : ''
  ].filter(Boolean).join(' · ');

  const positionsHTML = issues.map(iss => {
    const pos = c.positions && c.positions[iss.id];
    if (!pos) return '';
    return `<div style="margin-bottom:14px"><h4 style="margin-bottom:4px">${esc(iss.name)}</h4>${renderPosition(pos)}</div>`;
  }).filter(Boolean).join('');

  const recordHTML = (c.record || []).length
    ? (c.record || []).map(renderClaim).join('')
    : `<div class="no-position">This guide's review of public records, court filings, and news coverage did not surface notable record items for this candidate. That is not a finding of a clean record — only that a good-faith search found nothing reportable.</div>`;

  const endorseHTML = (c.endorsements || []).length
    ? `<ul class="small" style="margin:0;padding-left:18px">${
        (c.endorsements || []).map(e => `<li>${esc(e.name)} ${srcLink(e.source)}</li>`).join('')}</ul>`
    : `<div class="no-position">No endorsements found.</div>`;

  const linksHTML = c.links && Object.keys(c.links).length
    ? `<div class="card__meta">${Object.entries(c.links).map(([k, v]) =>
        `<a href="${escAttr(v)}" target="_blank" rel="noopener noreferrer">${esc(k)}</a>`).join('')}</div>`
    : '';

  const eliminated = c.primary && ['lost', 'withdrew', 'disqualified'].includes(c.primary.result);

  return `
    <article class="cand-card${eliminated ? ' cand-card--eliminated' : ''}" id="cand-${escAttr(c.id)}">
      <div class="cand-card__stripe" data-party="${escAttr(c.party || '')}"></div>
      <div class="cand-card__body">
        <div style="display:flex;gap:14px;align-items:flex-start">
          ${renderAvatar(c, 56)}
          <div style="min-width:0;flex:1">
            <div class="cand-name">
              <h3>${esc(c.name)}</h3>
              ${partyPill(c.party)}
              ${c.incumbent ? '<span class="pill pill--incumbent">Incumbent</span>' : ''}
              ${primaryBadge(c)}
            </div>
            ${meta ? `<div class="cand-meta" style="margin-bottom:0">${meta}</div>` : ''}
            ${photoCredit(c)}
          </div>
        </div>
        <div style="height:12px"></div>
        ${c.bio ? `<p>${esc(c.bio)}</p>` : ''}

        ${positionsHTML ? `<details class="disclosure"><summary>Where they stand on the issues</summary><div class="disclosure__body">${positionsHTML}</div></details>` : ''}

        <details class="disclosure">
          <summary>Record &amp; public filings</summary>
          <div class="disclosure__body">
            <p class="small muted">Items below are labeled by evidence type. "Allegation" means someone made the claim and it is <em>not</em> established as fact.</p>
            ${recordHTML}
          </div>
        </details>

        <details class="disclosure">
          <summary>Campaign money</summary>
          <div class="disclosure__body">${renderFinance(c.finance)}</div>
        </details>

        <details class="disclosure">
          <summary>Endorsements</summary>
          <div class="disclosure__body">${endorseHTML}</div>
        </details>

        ${linksHTML}
      </div>
    </article>`;
}

/* ---------- comparison table ---------- */

function renderCompareTable(race, issues) {
  const cands = race.candidates || [];
  if (!cands.length) return '<p class="muted">No candidates listed.</p>';

  // Only show issue rows where at least one candidate has a position, so the
  // table doesn't fill with empty rows.
  const rows = issues.filter(iss => cands.some(c => c.positions && c.positions[iss.id]));

  const head = `<thead><tr><th scope="col">Issue</th>${
    cands.map(c => `<th scope="col"><div class="compare__cand">
      ${renderAvatar(c, 34)}
      <span class="compare__cand-name">${esc(c.name)}</span>
      <span>${partyPill(c.party)}${c.incumbent ? ' <span class="pill pill--incumbent">Incumbent</span>' : ''}${primaryBadge(c)}</span>
    </div></th>`).join('')}</tr></thead>`;

  const body = `<tbody>${rows.map(iss => `
    <tr>
      <th scope="row">${esc(iss.name)}</th>
      ${cands.map(c => {
        const pos = c.positions && c.positions[iss.id];
        return `<td>${pos
          ? `${esc(pos.summary)}${srcLink(pos.source)}`
          : '<span class="muted small"><em>No position found</em></span>'}</td>`;
      }).join('')}
    </tr>`).join('')}</tbody>`;

  return `
    <div class="compare__hint" aria-hidden="true">↔ Scroll table sideways to see all candidates</div>
    <div class="compare-scroll" tabindex="0" role="region" aria-label="Candidate comparison for ${escAttr(race.office)} ${escAttr(race.district || '')}">
      <table class="compare">${head}${body}</table>
    </div>`;
}

/* ---------- race section ---------- */

function raceTagClass(ballot) {
  if (ballot === 'decided') return 'card__tag--decided';
  if (ballot === 'primary') return 'card__tag--primary';
  return 'card__tag--general';
}

function raceTagLabel(ballot) {
  if (ballot === 'decided') return 'Decided Aug 18 — no Nov 3 contest';
  if (ballot === 'primary') return 'On the Aug 18 primary ballot';
  if (ballot === 'general') return 'On the Nov 3 general ballot';
  return 'Primary &amp; general';
}

function renderRace(race, issues) {
  return `
    <section class="section" id="race-${escAttr(race.id)}">
      <div class="wrap">
        <div class="section__head">
          <span class="card__tag ${raceTagClass(race.ballot)}">${raceTagLabel(race.ballot)}</span>
          <h2>${esc(race.office)}${race.district ? ' — ' + esc(race.district) : ''}</h2>
          ${race.stakes ? `<p>${esc(race.stakes)}</p>` : ''}
        </div>

        ${race.primaryResult ? `<div class="callout ${race.primaryResult.status === 'decided' ? 'callout--ok' : 'callout--info'}">
          <h4>${race.primaryResult.status === 'decided' ? 'Decided in the Aug 18 primary' : 'Aug 18 primary result'}</h4>
          <p class="mb-0">${esc(race.primaryResult.summary)}</p>
          ${srcLink(race.primaryResult.source)}
        </div>` : ''}

        ${race.whoVotes ? `<div class="who-votes"><strong>Who can vote in this race:</strong> ${esc(race.whoVotes)}</div>` : ''}

        <h3 style="margin-top:26px">Side-by-side comparison</h3>
        ${renderCompareTable(race, issues)}

        <h3 style="margin-top:34px">The candidates</h3>
        <div class="grid grid--2">
          ${(race.candidates || []).map(c => renderCandidate(c, issues)).join('')}
        </div>
      </div>
    </section>`;
}

/* ---------- deadlines ---------- */

function renderDeadlines(deadlines) {
  return (deadlines || []).map(d => {
    const days = daysUntil(d.date);
    const past = days !== null && days < 0;
    const urgent = !past && days !== null && days <= 7;
    return `
      <div class="deadline ${past ? 'deadline--past' : ''} ${urgent ? 'deadline--urgent' : ''}">
        <div class="deadline__date">${fmtDate(d.date)}</div>
        <div>
          <div class="deadline__label">${esc(d.label)}${
            past ? ' <span class="small muted">(passed)</span>'
                 : urgent ? ` <span class="small" style="color:var(--urgent)">(${days === 0 ? 'today' : days === 1 ? 'tomorrow' : days + ' days'})</span>`
                 : ''}</div>
          ${d.detail ? `<div class="deadline__detail">${esc(d.detail)}</div>` : ''}
          ${srcLink(d.source)}
        </div>
      </div>`;
  }).join('');
}

/* ---------- countdown ---------- */

function renderCountdown(targetISO, label) {
  const days = daysUntil(targetISO);
  if (days === null) return '';
  return `
    <div class="countdown">
      <div class="cd-unit">
        <div class="cd-unit__n">${days < 0 ? '—' : days}</div>
        <div class="cd-unit__l">${days < 0 ? 'passed' : days === 1 ? 'day' : 'days'} to ${esc(label)}</div>
      </div>
    </div>`;
}

/* ---------- nav / header ---------- */

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Mark current page in nav for orientation + a11y.
  const here = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach(a => {
    if ((a.getAttribute('href') || '').split('/').pop() === here) {
      a.setAttribute('aria-current', 'page');
    }
  });
}

/* ---------- validation (dev aid, see schema.md) ---------- */

function validateGuide(G) {
  const errs = [];
  const issueIds = new Set((G.issues || []).map(i => i.id));

  (G.races || []).forEach(race => {
    (race.candidates || []).forEach(c => {
      Object.entries(c.positions || {}).forEach(([iid, pos]) => {
        if (!issueIds.has(iid)) errs.push(`${c.name}: unknown issue id "${iid}"`);
        if (!pos.source || !pos.source.url) errs.push(`${c.name} / ${iid}: position missing source URL`);
      });
      (c.record || []).forEach((r, i) => {
        if (!r.type)   errs.push(`${c.name}: record[${i}] missing type`);
        if (!r.source) errs.push(`${c.name}: record[${i}] missing source`);
        if (r.type === 'allegation' && !r.response)
          errs.push(`${c.name}: record[${i}] is an allegation with no candidate response`);
      });
      if (c.finance && !c.finance.asOf) errs.push(`${c.name}: finance block missing asOf date`);
      if (c.primary && (c.primary.result === 'won' || c.primary.result === 'lost') && !c.primary.source)
        errs.push(`${c.name}: primary result missing source`);
    });
    if (race.primaryResult && !race.primaryResult.source)
      errs.push(`${race.office}: primaryResult missing source`);
  });

  if (errs.length) {
    console.warn('[voter-guide] schema validation issues:\n' + errs.map(e => ' • ' + e).join('\n'));
    if (new URLSearchParams(location.search).has('debug')) {
      const bar = document.createElement('div');
      bar.style.cssText = 'background:#8a5a00;color:#fff;padding:12px 20px;font:600 13px/1.5 system-ui;position:sticky;top:0;z-index:999';
      bar.textContent = `${errs.length} schema issue(s) — open console for detail`;
      document.body.prepend(bar);
    }
  }
  return errs;
}

/* export for pages */
window.VG = {
  esc, escAttr, fmtDate, daysUntil, parseISO, srcLink, partyPill, primaryBadge,
  renderClaim, renderPosition, renderFinance, renderCandidate,
  renderCompareTable, renderRace, renderDeadlines, renderCountdown,
  renderAvatar, photoCredit, initials, avatarColor,
  initNav, validateGuide, raceTagClass, raceTagLabel
};
