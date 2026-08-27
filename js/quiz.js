/* quiz.html — candidate-match quiz, scoped per race. Scores are computed
   entirely from the reader's own answers against each candidate's
   already-sourced `stance` field (see data/guide.js positions) — this is
   not an endorsement engine, see the disclaimer rendered from
   GUIDE.quiz.disclaimer.

   Race-first flow: pick a race, then answer only the questions THAT race's
   candidates actually addressed. A fixed global question bank looked
   mismatched for races the bank wasn't designed around (e.g. a Sheriff-
   budget question has no place in a school-board race) — this fixes that
   by deriving each race's question set from its own candidates' stance-
   tagged positions, rather than showing all questions everywhere. */
(function () {
  var G = window.GUIDE;
  VG.initNav();
  if (!G || !G.quiz) { return; }

  var quiz = G.quiz;
  var races = G.races || [];
  var issueName = {};
  (G.issues || []).forEach(function (i) { issueName[i.id] = i.name; });

  document.getElementById('quizDisclaimer').textContent = quiz.disclaimer;

  // A candidate eliminated in their primary (or who withdrew/didn't qualify)
  // is not on the Nov 3 ballot, so they're excluded from quiz matching
  // entirely — matching someone who can't actually be voted for would be
  // misleading, not just unhelpful.
  function isOnGeneralBallot(c) {
    return !c.primary || !['lost', 'withdrew', 'disqualified'].includes(c.primary.result);
  }

  // The questions relevant to a given race: only the global quiz questions
  // where at least one on-ballot candidate in THIS race has a stance. A
  // race with no stance-tagged positions at all (school board, mosquito
  // control, single-candidate seats) yields zero questions and is excluded
  // from the race picker entirely.
  function questionsForRace(race) {
    var onBallot = (race.candidates || []).filter(isOnGeneralBallot);
    return quiz.questions.filter(function (q) {
      return onBallot.some(function (c) {
        return c.positions && c.positions[q.issueId] && c.positions[q.issueId].stance;
      });
    });
  }

  var quizRaces = races
    .map(function (r) { return { race: r, questions: questionsForRace(r) }; })
    .filter(function (x) { return x.questions.length > 0; });

  var raceSelect = document.getElementById('quizRaceSelect');
  raceSelect.innerHTML = '<option value="">— Select a race —</option>' + quizRaces.map(function (x, i) {
    return '<option value="' + i + '">' + VG.esc(x.race.office) + (x.race.district ? ' — ' + VG.esc(x.race.district) : '') + '</option>';
  }).join('');

  // Races left out: single-candidate/unopposed offices have nothing to
  // match against by nature. Others (e.g. U.S. Senate, Attorney General)
  // are left out because this guide hasn't yet tagged a discrete stance for
  // their candidates' real positions — not because no research exists.
  var excludedRaces = races.filter(function (r) { return questionsForRace(r).length === 0; });
  if (excludedRaces.length) {
    document.getElementById('quizExcludedNote').innerHTML = 'Not included: ' +
      excludedRaces.map(function (r) { return VG.esc(r.office + (r.district ? ' — ' + r.district : '')); }).join(', ') +
      ' — either single-candidate races with nothing to compare, or races whose candidates\' real positions haven\'t yet been tagged for this tool.';
  }

  var questionsSection = document.getElementById('quizQuestionsSection');
  var resultsSection = document.getElementById('quizResultsSection');
  var qContainer = document.getElementById('quizQuestions');
  var currentQuestions = [];

  function renderQuestions(questions) {
    currentQuestions = questions;
    qContainer.innerHTML = questions.map(function (q, qi) {
      return '<div class="card">' +
        '<h3 style="margin-bottom:12px">' + VG.esc(q.text) + '</h3>' +
        '<div style="display:flex;flex-direction:column;gap:8px">' +
        q.options.map(function (o, oi) {
          var id = 'q' + qi + '_' + oi;
          return '<label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.95rem">' +
            '<input type="radio" name="q_' + VG.escAttr(q.issueId) + '" value="' + VG.escAttr(o.value) + '" id="' + id + '">' +
            '<span>' + VG.esc(o.label) + '</span></label>';
        }).join('') +
        '<label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.95rem;margin-top:2px;color:var(--ink-3)">' +
        '<input type="radio" name="q_' + VG.escAttr(q.issueId) + '" value="" checked>' +
        '<span>No strong opinion — skip this one</span></label>' +
        '</div></div>';
    }).join('');
  }

  function getAnswers() {
    var answers = {};
    currentQuestions.forEach(function (q) {
      var checked = document.querySelector('input[name="q_' + q.issueId + '"]:checked');
      if (checked && checked.value) answers[q.issueId] = checked.value;
    });
    return answers;
  }

  function scoreCandidate(c, answers) {
    var matched = 0, applicable = 0, detail = [];
    Object.keys(answers).forEach(function (issueId) {
      var pos = c.positions && c.positions[issueId];
      if (!pos || !pos.stance) {
        detail.push({ issueId: issueId, status: 'no-data' });
        return;
      }
      applicable++;
      var isMatch = pos.stance === answers[issueId];
      if (isMatch) matched++;
      detail.push({ issueId: issueId, status: isMatch ? 'match' : 'mismatch', pos: pos });
    });
    return { matched: matched, applicable: applicable, pct: applicable ? Math.round(100 * matched / applicable) : null, detail: detail };
  }

  function renderResults(race, answers) {
    var scored = (race.candidates || []).filter(isOnGeneralBallot).map(function (c) {
      return { c: c, s: scoreCandidate(c, answers) };
    });
    // Sort by the reader's own match score — see the callout on this page:
    // this ordering reflects the reader's answers, not an editorial ranking,
    // and every candidate is still shown.
    scored.sort(function (a, b) {
      if (a.s.pct === null && b.s.pct === null) return 0;
      if (a.s.pct === null) return 1;
      if (b.s.pct === null) return -1;
      return b.s.pct - a.s.pct;
    });

    document.getElementById('quizResults').innerHTML = scored.map(function (row) {
      var c = row.c, s = row.s;
      var scoreHTML = s.pct === null
        ? '<div class="small muted">Not enough data — no stated position on the issues you answered</div>'
        : '<div style="font-size:1.6rem;font-weight:800;letter-spacing:-.02em">' + s.pct + '% match</div>' +
          '<div class="small muted">' + s.matched + ' of ' + s.applicable + ' answered issues aligned</div>';

      var detailHTML = s.detail.filter(function (d) { return d.status !== 'no-data'; }).map(function (d) {
        var label = issueName[d.issueId] || d.issueId;
        var icon = d.status === 'match' ? '✓' : '✗';
        return '<div class="small" style="margin-top:6px"><strong>' + icon + ' ' + VG.esc(label) + ':</strong> ' +
          VG.esc(d.pos.summary) + ' ' + VG.srcLink(d.pos.source) + '</div>';
      }).join('');

      return '<article class="cand-card" style="margin-bottom:16px">' +
        '<div class="cand-card__stripe" data-party="' + VG.escAttr(c.party || '') + '"></div>' +
        '<div class="cand-card__body">' +
        '<div style="display:flex;gap:14px;align-items:flex-start">' +
        VG.renderAvatar(c, 48) +
        '<div style="min-width:0;flex:1">' +
        '<div class="cand-name"><h3 style="margin:0">' + VG.esc(c.name) + '</h3>' + VG.partyPill(c.party) + '</div>' +
        scoreHTML +
        '</div></div>' +
        (detailHTML ? '<div style="margin-top:12px">' + detailHTML + '</div>' : '') +
        '<div class="btn-row" style="margin-top:12px"><a class="btn btn--ghost" style="padding:7px 12px;font-size:.85rem" href="races.html#cand-' + VG.escAttr(c.id) + '">Full profile →</a></div>' +
        '</div></article>';
    }).join('');
  }

  raceSelect.addEventListener('change', function () {
    resultsSection.hidden = true;
    if (raceSelect.value === '') {
      questionsSection.hidden = true;
      return;
    }
    var entry = quizRaces[+raceSelect.value];
    renderQuestions(entry.questions);
    questionsSection.hidden = false;
    questionsSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (raceSelect.value === '') return;
    var entry = quizRaces[+raceSelect.value];
    var answers = getAnswers();
    if (!Object.keys(answers).length) {
      document.getElementById('quizResults').innerHTML = '<p class="muted">Answer at least one question to see matches.</p>';
    } else {
      renderResults(entry.race, answers);
    }
    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('quizReset').addEventListener('click', function () {
    document.querySelectorAll('#quizQuestions input[value=""]').forEach(function (r) { r.checked = true; });
    resultsSection.hidden = true;
  });

  // Deep link support: /quiz.html#cc-d2
  if (location.hash) {
    var hashId = location.hash.replace('#', '');
    var idx = quizRaces.findIndex(function (x) { return x.race.id === hashId; });
    if (idx >= 0) {
      raceSelect.value = idx;
      raceSelect.dispatchEvent(new Event('change'));
    }
  }
})();
