/* measures.html — Florida constitutional amendments on the Nov 3 ballot.

   Design rule: official ballot language and plain-English explanation must
   never blur together. Official text renders in a visually distinct quoted
   block labeled as the exact ballot wording; everything else is clearly this
   guide's own summary. YES and NO are given equal weight and identical styling
   so the layout itself does not nudge the reader. */
(function () {
  var G = window.GUIDE;
  VG.initNav();
  var out = document.getElementById('out');
  if (!G) { out.innerHTML = '<div class="wrap"><p class="muted">Data failed to load.</p></div>'; return; }

  var measures = G.measures || [];
  if (!measures.length) {
    out.innerHTML = '<div class="wrap"><p class="muted">No ballot measures recorded.</p></div>';
    return;
  }

  function args(list, kind) {
    if (!list || !list.length) return '<p class="muted small mb-0">None located.</p>';
    return '<ul style="margin:0;padding-left:18px">' + list.map(function (a) {
      return '<li style="margin-bottom:8px"><strong>' + VG.esc(a.who) + ':</strong> ' +
        (kind === 'quote' ? '"' + VG.esc(a.text) + '"' : VG.esc(a.text)) + '</li>';
    }).join('') + '</ul>';
  }

  var nav = '<section class="section" style="padding-bottom:0"><div class="wrap">' +
    '<div class="callout callout--warn"><h4>These are on the NOVEMBER 3 ballot, not August 18</h4>' +
    '<p class="mb-0">All three are constitutional amendments referred by the Legislature. Each needs ' +
    '<strong>60% approval</strong> to pass — a higher bar than a simple majority. Every registered voter ' +
    'votes on them regardless of party.</p></div>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">' +
    measures.map(function (m) {
      return '<a class="btn btn--ghost" style="padding:8px 14px;font-size:.88rem" href="#' +
        VG.escAttr(m.id) + '">' + VG.esc(m.number) + '</a>';
    }).join('') + '</div></div></section>';

  out.innerHTML = nav + measures.map(function (m, i) {
    return '<section class="section' + (i % 2 ? ' section--alt' : '') + '" id="' + VG.escAttr(m.id) + '">' +
      '<div class="wrap wrap--narrow">' +
      '<span class="card__tag card__tag--general">On the Nov 3 ballot · ' + VG.esc(m.threshold) + '</span>' +
      '<h2>' + VG.esc(m.number) + ' — ' + VG.esc(m.title) + '</h2>' +
      (m.origin ? '<p class="muted">' + VG.esc(m.origin) + '</p>' : '') +

      // Official language, visually fenced off from our words.
      '<h3 style="margin-top:24px">The exact ballot language</h3>' +
      '<div style="border-left:4px solid var(--brand);background:var(--bg-2);padding:16px 18px;border-radius:0 8px 8px 0;font-family:var(--serif);font-size:.97rem">' +
        VG.esc(m.officialText) +
      '</div>' +
      '<p class="small muted" style="margin-top:6px">Above is the official wording you will see on the ballot. Everything below is this guide\'s plain-English explanation.</p>' +

      '<h3 style="margin-top:26px">What it actually does</h3>' +
      '<div style="max-width:70ch">' + (m.plain || '').split('\n\n').map(function (p) {
        return '<p>' + VG.esc(p) + '</p>';
      }).join('') + '</div>' +

      // YES / NO given identical visual weight on purpose.
      '<div class="grid grid--2" style="margin:22px 0">' +
        '<div class="card"><h4 style="margin-bottom:6px">A YES vote means</h4><p class="mb-0">' + VG.esc(m.yes) + '</p></div>' +
        '<div class="card"><h4 style="margin-bottom:6px">A NO vote means</h4><p class="mb-0">' + VG.esc(m.no) + '</p></div>' +
      '</div>' +

      (m.fiscal ? '<h3>Fiscal impact</h3><p style="max-width:70ch">' + VG.esc(m.fiscal) + '</p>' : '') +
      (m.money ? '<h3>Who is funding the campaigns</h3><p style="max-width:70ch">' + VG.esc(m.money) + '</p>' : '') +
      (m.polling ? '<h3>Polling</h3><p style="max-width:70ch">' + VG.esc(m.polling) + '</p>' : '') +

      '<div class="grid grid--2" style="margin-top:22px">' +
        '<div class="card"><h4>Arguments for</h4>' + args(m.argsFor, 'quote') + '</div>' +
        '<div class="card"><h4>Arguments against</h4>' + args(m.argsAgainst, 'quote') + '</div>' +
      '</div>' +

      (m.source ? '<div style="margin-top:14px">' + VG.srcLink(m.source) + '</div>' : '') +
      '</div></section>';
  }).join('') +

  '<section class="section"><div class="wrap wrap--narrow">' +
    '<div class="callout callout--info"><h4>A note on amendment numbers</h4>' +
    '<p>All three numbers above are confirmed against Ballotpedia\'s certified 2026 Florida ballot measures ' +
    'listing, cross-checked with the Florida Department of State: Amendment 1 (Budget Stabilization Fund), ' +
    'Amendment 2 (agricultural equipment exemption), Amendment 3 (Save Our Homes / property tax).</p>' +
    '<p class="mb-0">Separately, the Florida Department of State confirmed in a February 2026 press release ' +
    'that all 22 pending citizen-initiative petition amendments FAILED to qualify for the 2026 ballot — so ' +
    'these three legislatively-referred amendments are the complete list. Your sample ballot will show the ' +
    'numbers you actually get.</p></div>' +
  '</div></section>' +

  renderJudicial(G.judicial);
})();

function renderJudicial(j) {
  if (!j) return '';
  var retRows = (j.retention || []).map(function (r) {
    return '<tr><td><strong>' + VG.esc(r.name) + '</strong></td>' +
      '<td class="small">' + VG.esc(r.court) + '</td>' +
      '<td class="small">' + VG.esc(r.level) + '</td>' +
      '<td class="small">' + (r.appointed ? VG.esc(r.appointed) : '') + VG.srcLink(r.source) + '</td></tr>';
  }).join('');

  return '<section class="section section--alt" id="judicial"><div class="wrap wrap--narrow">' +
    '<span class="card__tag card__tag--general">On the Nov 3 general ballot</span>' +
    '<h2>Judicial retention — a YES/NO vote, not a race between candidates</h2>' +
    '<p style="max-width:70ch">' + VG.esc(j.explainer) + '</p>' +

    '<h3 style="margin-top:24px">Judges up for retention that Indian River County voters see</h3>' +
    '<div class="compare-scroll"><table class="compare" style="min-width:0"><thead><tr>' +
      '<th scope="col">Judge</th><th scope="col">Court</th><th scope="col">Covers</th><th scope="col">Background</th>' +
    '</tr></thead><tbody>' + retRows + '</tbody></table></div>' +
    (j.districtNote ? '<p class="small muted" style="margin-top:8px">' + VG.esc(j.districtNote) + '</p>' : '') +

    '<div class="callout callout--info" style="margin-top:22px"><h4>No circuit or county judge race in Indian River County this year</h4>' +
    '<p>' + VG.esc(j.localRaces.status) + '</p>' +
    '<p' + (j.localRaces.judges && j.localRaces.judges.length ? '' : ' class="mb-0"') + '>' + VG.esc(j.localRaces.detail) + '</p>' +
    (j.localRaces.judges && j.localRaces.judges.length
      ? '<ul class="small" style="margin:10px 0 0;padding-left:18px">' + j.localRaces.judges.map(function (jd) {
          return '<li><strong>' + VG.esc(jd.name) + ':</strong> ' + VG.esc(jd.appointed) + ' ' + VG.srcLink(jd.source) + '</li>';
        }).join('') + '</ul>'
      : VG.srcLink(j.localRaces.source)) +
    '</div>' +

    '<div class="callout callout--warn" style="margin-top:16px"><h4>Why judicial candidates say so little</h4>' +
    '<p class="mb-0">Florida\'s judicial ethics rules bar judges and judicial candidates from announcing how ' +
    'they would rule on issues that might come before them. That is why you will not find campaign platforms ' +
    'or issue positions for any of the judges above — it is a rule of the system, not a gap in this guide.</p></div>' +
  '</div></section>';
}
