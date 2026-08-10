/* money.html — cross-race campaign finance comparison.
   Sorted by amount raised so the money picture is legible at a glance. */
(function () {
  var G = window.GUIDE;
  VG.initNav();
  var out = document.getElementById('out');
  if (!G) { out.innerHTML = '<div class="wrap"><p class="muted">Data failed to load.</p></div>'; return; }

  // Flatten every candidate that has a finance block.
  var rows = [];
  (G.races || []).forEach(function (r) {
    (r.candidates || []).forEach(function (c) {
      if (c.finance && (c.finance.raised || c.finance.raised === 0)) {
        rows.push({ race: r, cand: c, f: c.finance });
      }
    });
  });
  rows.sort(function (a, b) { return (b.f.raised || 0) - (a.f.raised || 0); });

  function money(n) {
    if (n === null || n === undefined || n === '') return '—';
    return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
  }
  function pct(part, whole) {
    if (!whole || !part) return '—';
    return Math.round((part / whole) * 100) + '%';
  }

  var maxRaised = rows.length ? (rows[0].f.raised || 1) : 1;

  // Bar width makes relative scale obvious without a charting library.
  var table =
    '<div class="compare__hint" aria-hidden="true">↔ Scroll table sideways on a narrow screen</div>' +
    '<div class="compare-scroll" tabindex="0" role="region" aria-label="Campaign finance comparison">' +
    '<table class="compare"><thead><tr>' +
      '<th scope="col">Candidate</th><th scope="col">Race</th>' +
      '<th scope="col">Raised</th><th scope="col">Spent</th>' +
      '<th scope="col">Self-funded</th><th scope="col">Where the money came from</th>' +
    '</tr></thead><tbody>' +
    rows.map(function (x) {
      var w = Math.max(2, Math.round(((x.f.raised || 0) / maxRaised) * 100));
      return '<tr>' +
        '<th scope="row"><div style="display:flex;gap:10px;align-items:flex-start">' +
          VG.renderAvatar(x.cand, 34) +
          '<div class="compare__cand">' +
            '<span class="compare__cand-name">' + VG.esc(x.cand.name) + '</span>' +
            '<span>' + VG.partyPill(x.cand.party) +
            (x.cand.incumbent ? ' <span class="pill pill--incumbent">Incumbent</span>' : '') + '</span>' +
          '</div>' +
        '</div></th>' +
        '<td class="small">' + VG.esc(x.race.office) + (x.race.district ? '<br>' + VG.esc(x.race.district) : '') + '</td>' +
        '<td><strong style="font-variant-numeric:tabular-nums">' + money(x.f.raised) + '</strong>' +
          '<div style="height:5px;background:var(--brand);opacity:.7;border-radius:3px;margin-top:5px;width:' + w + '%"></div></td>' +
        '<td style="font-variant-numeric:tabular-nums">' + money(x.f.spent) +
          '<div class="small muted">' + pct(x.f.spent, x.f.raised) + ' of raised</div></td>' +
        '<td style="font-variant-numeric:tabular-nums">' + money(x.f.selfFunded) +
          (x.f.selfFunded ? '<div class="small muted">' + pct(x.f.selfFunded, x.f.raised) + '</div>' : '') + '</td>' +
        '<td class="small">' + (x.f.note ? VG.esc(x.f.note) : '<span class="muted">—</span>') + '</td>' +
      '</tr>';
    }).join('') +
    '</tbody></table></div>';

  var missing = [];
  (G.races || []).forEach(function (r) {
    (r.candidates || []).forEach(function (c) {
      if (!c.finance) missing.push(c.name + ' (' + r.office + (r.district ? ' ' + r.district : '') + ')');
    });
  });

  out.innerHTML =
    '<section class="section"><div class="wrap">' +
      '<div class="callout callout--warn"><h4>Read this before the numbers</h4>' +
      '<p>County figures are <strong>as of the reporting period ending July 31, 2026</strong>. Campaign finance ' +
      'changes weekly as new reports are filed — later filings may exist.</p>' +
      '<p class="mb-0">"Raised" here includes candidate loans, which is why a heavily self-funded campaign can ' +
      'show a large total while having little outside support. The self-funded column separates that out.</p></div>' +
      table +
      '<div class="grid grid--2" style="margin-top:28px">' +
        '<div class="card"><h3>What stands out</h3>' +
        '<ul style="margin:0;padding-left:18px">' +
          '<li>The <strong>County Commission District 2</strong> Republican primary is remarkably tight — the three candidates are within a few thousand dollars of each other and have each spent roughly 90% of what they raised.</li>' +
          '<li>Their reliance on their own money differs sharply: Robinson is about <strong>63% self-funded</strong>, McPartlan 27%, Pippin 18%.</li>' +
          '<li>Pippin has the <strong>broadest donor base</strong> in that race (104 donors); Robinson the narrowest (48).</li>' +
          '<li>Both Democrats — Hardingham and Jaffe — are running on well under <strong>one-fifteenth</strong> of their Republican opponents\' money.</li>' +
          '<li>In the School Board race, <strong>neither candidate put in a dollar of their own.</strong> Rosario raised about 1.76x Lange and has spent less of it, holding the larger reserve.</li>' +
          '<li>Their money comes from different places: Rosario\'s from the Republican party and state political committees, Lange\'s from a retired Vero Beach donor network writing maximum checks.</li>' +
        '</ul></div>' +
        '<div class="card"><h3>A note on withdrawn candidates</h3>' +
        '<p>Melissa Dean (R) raised <strong>$84,670</strong> for County Commission District 2 — more than any active candidate in the race — roughly 98% of it her own money, then withdrew and filed a termination report. Damien Gilliams (R) qualified and withdrew with no transactions on file.</p>' +
        '<p class="mb-0 small muted">Neither appears on the ballot. Included because money raised and spent before a withdrawal is still part of the public record of a race.</p></div>' +
      '</div>' +
      (missing.length
        ? '<div class="callout callout--info" style="margin-top:24px"><h4>Candidates with no finance data retrieved</h4>' +
          '<p class="mb-0 small">' + VG.esc(missing.join(' · ')) + '. State and federal candidates file with the Florida Division of Elections or the FEC rather than the county, and those filings were not retrieved for this edition.</p></div>'
        : '') +
    '</div></section>';
})();
