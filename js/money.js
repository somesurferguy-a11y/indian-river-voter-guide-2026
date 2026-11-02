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
          (x.f.asOf ? '<div class="small muted">as of ' + VG.esc(x.f.asOf) + '</div>' : '') +
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
      '<p>Figures come from different dates — each row shows its own "as of" date. County candidates still on the ' +
      'Nov 3 ballot are updated through the reporting period ending <strong>Oct 16, 2026</strong> (Oct 2 where a later ' +
      'report was not yet posted). Candidates whose races were decided in August keep their July 31 figures. ' +
      'Campaign finance changes weekly — later filings may exist.</p>' +
      '<p class="mb-0">"Raised" here includes candidate loans, which is why a heavily self-funded campaign can ' +
      'show a large total while having little outside support. The self-funded column separates that out.</p></div>' +
      table +
      '<div class="grid grid--2" style="margin-top:28px">' +
        '<div class="card"><h3>What stands out</h3>' +
        '<ul style="margin:0;padding-left:18px">' +
          '<li><strong>County Commission District 2:</strong> Pippin (R) has raised about <strong>4.3 times</strong> what Hardingham (D) has, $67,073 to $15,749. But Hardingham has by far the most donors of any county candidate — about 340, almost all under $100 — to Pippin\'s 160.</li>' +
          '<li><strong>County Commission District 4:</strong> Loar (R) raised almost nothing new after July ($54,820 total, now second to Pippin among county candidates) and has spent about $30,400 of it. Jaffe (D) has raised $6,408.</li>' +
          '<li><strong>Mosquito Control Seat 2:</strong> the incumbent, Kirkland, has overtaken her challenger, $6,200 to $5,925 — reversing the July picture.</li>' +
          '<li>In the School Board race decided Aug 18 (July figures), <strong>neither candidate put in a dollar of their own.</strong> Rosario\'s money came largely from the Republican party and state political committees, Lange\'s from a retired Vero Beach donor network writing maximum checks.</li>' +
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
