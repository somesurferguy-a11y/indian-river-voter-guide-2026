/* issues.html — plain-English issue explainers with hard numbers and sources. */
(function () {
  var G = window.GUIDE;
  VG.initNav();
  var out = document.getElementById('out');
  if (!G) { out.innerHTML = '<div class="wrap"><p class="muted">Data failed to load.</p></div>'; return; }

  var issues = G.issues || [];
  var races = G.races || [];

  var nav = '<section class="section" style="padding-bottom:0"><div class="wrap">' +
    '<div class="card"><h3 style="margin-bottom:10px">Jump to an issue</h3>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    issues.map(function (i) {
      return '<a class="btn btn--ghost" style="padding:8px 14px;font-size:.88rem" href="#issue-' +
        VG.escAttr(i.id) + '">' + VG.esc(i.name) + '</a>';
    }).join('') + '</div></div></div></section>';

  out.innerHTML = nav + issues.map(function (iss, idx) {
    // Hard numbers give the issue weight and let readers check us.
    var numbers = (iss.numbers || []).length
      ? '<div class="grid grid--3" style="margin:18px 0">' + iss.numbers.map(function (n) {
          return '<div class="card"><div style="font-size:1.7rem;font-weight:800;letter-spacing:-.02em">' +
            VG.esc(n.value) + '</div><div class="small" style="color:var(--ink-2);margin-top:3px">' +
            VG.esc(n.label) + '</div>' + VG.srcLink(n.source) + '</div>';
        }).join('') + '</div>'
      : '';

    // A multi-year registration trend, where present — shows direction of
    // change rather than just a single snapshot.
    var trend = (iss.trend && iss.trend.rows && iss.trend.rows.length)
      ? '<h3 style="margin-top:26px">' + VG.esc(iss.trend.title || 'Registration trend') + '</h3>' +
        (iss.trend.intro ? '<p class="muted" style="max-width:70ch">' + VG.esc(iss.trend.intro) + '</p>' : '') +
        '<div class="compare-scroll" tabindex="0"><table class="compare"><thead><tr>' +
        '<th scope="col">Snapshot</th><th scope="col">Republican</th><th scope="col">Democrat</th>' +
        '<th scope="col">No Party Affiliation</th><th scope="col">Other</th><th scope="col">Total</th></tr></thead><tbody>' +
        iss.trend.rows.map(function (row) {
          return '<tr><th scope="row">' + VG.esc(row.label) + '</th>' +
            '<td>' + row.r.toLocaleString('en-US') + ' (' + row.rPct + '%)</td>' +
            '<td>' + row.d.toLocaleString('en-US') + ' (' + row.dPct + '%)</td>' +
            '<td>' + row.npa.toLocaleString('en-US') + ' (' + row.npaPct + '%)</td>' +
            '<td>' + row.other.toLocaleString('en-US') + ' (' + row.otherPct + '%)</td>' +
            '<td>' + row.total.toLocaleString('en-US') + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<div class="small muted" style="margin-top:8px">' +
        iss.trend.rows.map(function (row) { return VG.srcLink(row.source); }).join(' &nbsp;·&nbsp; ') + '</div>'
      : '';

    // Which candidates have said something about this issue — the bridge from
    // "here's the problem" to "here's who says what about it".
    var withPos = [];
    races.forEach(function (r) {
      (r.candidates || []).forEach(function (c) {
        if (c.positions && c.positions[iss.id]) {
          withPos.push({ race: r, cand: c, pos: c.positions[iss.id] });
        }
      });
    });

    var positions = withPos.length
      ? '<h3 style="margin-top:26px">What the candidates say</h3>' +
        '<div class="stack">' + withPos.map(function (w) {
          return '<div class="card"><div class="cand-name"><h4 style="margin:0">' + VG.esc(w.cand.name) + '</h4>' +
            VG.partyPill(w.cand.party) + '</div>' +
            '<div class="small muted" style="margin-bottom:7px">' + VG.esc(w.race.office) +
            (w.race.district ? ' — ' + VG.esc(w.race.district) : '') + '</div>' +
            VG.renderPosition(w.pos) + '</div>';
        }).join('') + '</div>'
      : '';

    var sources = (iss.sources || []).length
      ? '<details class="disclosure"><summary>Sources &amp; further reading</summary><div class="disclosure__body">' +
        '<ul style="margin:0;padding-left:18px">' + iss.sources.map(function (s) {
          return '<li class="small"><a href="' + VG.escAttr(s.url) + '" target="_blank" rel="noopener noreferrer">' +
            VG.esc(s.title) + '</a>' + (s.date ? ' <span class="muted">· ' + VG.fmtDate(s.date, { year: true }) + '</span>' : '') + '</li>';
        }).join('') + '</ul></div></details>'
      : '';

    return '<section class="section' + (idx % 2 ? ' section--alt' : '') + '" id="issue-' + VG.escAttr(iss.id) + '">' +
      '<div class="wrap"><div class="section__head"><h2>' + VG.esc(iss.name) + '</h2></div>' +
      '<div style="max-width:72ch">' + (iss.background || '').split('\n\n').map(function (p) {
        return '<p>' + VG.esc(p) + '</p>';
      }).join('') + '</div>' +
      numbers + trend + positions + sources +
      '</div></section>';
  }).join('');
})();
