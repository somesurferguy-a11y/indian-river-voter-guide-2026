/* races.html — renders every race with full candidate profiles. */
(function () {
  var G = window.GUIDE;
  VG.initNav();
  var out = document.getElementById('out');
  if (!G) { out.innerHTML = '<div class="wrap"><p class="muted">Data failed to load.</p></div>'; return; }
  VG.validateGuide(G);

  var races = G.races || [];
  var issues = G.issues || [];

  // Jump nav so a voter can get to their race without scrolling past others.
  var jump = '<section class="section" style="padding-bottom:0"><div class="wrap">' +
    '<div class="card"><h3 style="margin-bottom:10px">Jump to a race</h3>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    races.map(function (r) {
      return '<a class="btn btn--ghost" style="padding:8px 14px;font-size:.88rem" href="#race-' +
        VG.escAttr(r.id) + '">' + VG.esc(r.office) +
        (r.district ? ' ' + VG.esc(r.district) : '') + '</a>';
    }).join('') +
    '</div></div></div></section>';

  // Absences are information: say plainly what a voter will look for and not find,
  // so a missing race doesn't read as a hole in this guide.
  var absent = (G.notOnBallot || []).length
    ? '<section class="section section--alt"><div class="wrap wrap--narrow">' +
      '<div class="section__head"><h2>What you will <em>not</em> find on your ballot</h2>' +
      '<p>Races voters commonly go looking for that are not being decided this year, or were ' +
      'settled without a vote.</p></div>' +
      (G.notOnBallot || []).map(function (n) {
        return '<div class="callout callout--info"><h4>' + VG.esc(n.label) + '</h4>' +
          '<p class="mb-0">' + VG.esc(n.detail) + '</p>' + VG.srcLink(n.source) + '</div>';
      }).join('') +
      '</div></section>'
    : '';

  out.innerHTML = jump + races.map(function (r) {
    return VG.renderRace(r, issues);
  }).join('') + absent;

  // Deep-link: open the targeted race's disclosures for immediate reading.
  if (location.hash) {
    var el = document.querySelector(location.hash);
    if (el) setTimeout(function () { el.scrollIntoView(); }, 60);
  }
})();
