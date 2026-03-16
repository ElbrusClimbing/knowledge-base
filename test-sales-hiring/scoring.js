/**
 * Elbrus Climbing - Sales Manager Test Scoring Engine
 * Calculates raw scores, honesty, categories, and final decision.
 */

const ScoringEngine = (function () {

  // === ANSWER KEYS (Q1-Q30) ===
  const _k = {
    1:  { a: 0, b: 2, c: -2, d: 2, e: 1 },
    2:  { a: -1, b: -1, c: 1, d: 2 },
    3:  { a: -1, b: 0, c: 2, d: 1 },
    4:  { a: -1, b: 0, c: 2, d: 1 },
    5:  { a: -2, b: 1, c: 2 },
    6:  { a: 1, b: 0, c: 2, d: -2 },
    7:  { a: 0, b: 1, c: 2, d: 1 },
    8:  { a: 0, b: -1, c: 2, d: 1 },
    9:  { a: -2, b: 1, c: 2, d: -1 },
    11: { a: 0, b: -2, c: 2, d: 1, e: 2 },
    12: { a: -2, b: 1, c: -2, d: 2, e: 0 },
    13: { a: 0, b: -1, c: -1, d: 2 },
    14: { a: 0, b: 2, c: 3, d: 0 },
    15: { a: -2, b: 0, c: 2, d: 1 },
    16: { a: 1, b: 2, c: 0 },
    17: { a: -2, b: 2, c: 0, d: 1 },
    18: { a: 0, b: -2, c: 2, d: 1 },
    19: { a: -1, b: -2, c: 1, d: 2 },
    22: { a: -1, b: 1, c: -1, d: 2 },
    23: { a: 0, b: 1, c: 2, d: 1 },
    24: { a: -2, b: 0, c: 1, d: 2 },
    26: { a: 0, b: -2, c: 2, d: 3 },
    27: { a: 0, b: 2, c: 0, d: 1 },
    28: { a: -1, b: 1, c: 0, d: 2 },
    29: { a: -2, b: 0, c: 2, d: 0 },
    30: { a: -1, b: 1, c: 2 }
  };

  // === BOOKS Q10 ===
  const _realBooks = ['a', 'c', 'd', 'f', 'g', 'i', 'j', 'l'];
  const _fakeBooks = ['b', 'e', 'h', 'k'];

  // === FILMS Q20 ===
  const _realFilms = ['a', 'c', 'e', 'f', 'h', 'i', 'k', 'l', 'm'];
  const _fakeFilms = ['b', 'd', 'g', 'j'];

  // === RANKING Q21 ===
  // Ideal: product=1, instructions=2, income=3, team=4, freedom=5
  const _idealRank = { product: 1, instructions: 2, income: 3, team: 4, freedom: 5 };

  // === LIKERT CONFIG ===
  const _directLikert = [31, 33, 35, 37, 39, 41, 43];
  const _inverseLikert = [32, 34, 36, 38, 40, 42, 44, 45, 46];

  // Honesty pairs: [direct, inverse]
  const _likertPairs = [
    [35, 42], [37, 32], [43, 40], [33, 38], [31, 34], [39, 44], [41, 45]
  ];

  // === CATEGORIES ===
  const _categories = {
    sales:      [2, 8, 9, 12, 13, 19, 22, 27, 29, 30],
    client:     [4, 6, 7, 18],
    discipline: [3, 5, 11, 14, 15, 16, 17, 23, 24, 28,
                 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    motivation: [1, 21, 26],
    profdev:    [10, 20, 25]
  };

  // Max possible per category (generous ideal-answer sums)
  const _categoryMax = {
    sales: 22,
    client: 7,
    discipline: 47,
    motivation: 7,
    profdev: 12
  };

  // === SCORING FUNCTIONS ===

  function _scoreSingle(qId, answer) {
    if (_k[qId] === undefined) return 0;
    return _k[qId][answer] !== undefined ? _k[qId][answer] : 0;
  }

  function _scoreLikertDirect(raw) {
    // 0->0, 1->1, 2->2, 3->2
    const v = parseInt(raw, 10);
    if (v <= 0) return 0;
    if (v === 1) return 1;
    return 2; // 2 or 3
  }

  function _scoreLikertInverse(raw) {
    // 0->2, 1->1, 2->0, 3->0
    const v = parseInt(raw, 10);
    if (v <= 0) return 2;
    if (v === 1) return 1;
    return 0; // 2 or 3
  }

  function _scoreBooks(selected) {
    if (!Array.isArray(selected)) return { score: 0, fakeCount: 0 };
    const realCount = selected.filter(s => _realBooks.includes(s)).length;
    const fakeCount = selected.filter(s => _fakeBooks.includes(s)).length;
    let score = 0;
    if (realCount >= 7) score = 4;
    else if (realCount >= 4) score = 2;
    else if (realCount >= 1) score = 1;
    return { score, fakeCount };
  }

  function _scoreFilms(selected) {
    if (!Array.isArray(selected)) return { score: 0, fakeCount: 0 };
    const realCount = selected.filter(s => _realFilms.includes(s)).length;
    const fakeCount = selected.filter(s => _fakeFilms.includes(s)).length;
    let score = 0;
    if (realCount >= 7) score = 4;
    else if (realCount >= 4) score = 2;
    else if (realCount >= 1) score = 1;
    return { score, fakeCount };
  }

  function _scoreRanking(ranking) {
    // ranking = { income: N, product: N, instructions: N, freedom: N, team: N }
    if (!ranking || typeof ranking !== 'object') return { score: -2, penalties: 0 };
    let deviation = 0;
    for (const key of Object.keys(_idealRank)) {
      deviation += Math.abs((ranking[key] || 3) - _idealRank[key]);
    }
    let score;
    if (deviation <= 0) score = 2;
    else if (deviation <= 2) score = 2;
    else if (deviation <= 4) score = 1;
    else if (deviation <= 6) score = 0;
    else if (deviation <= 8) score = -1;
    else score = -2;

    let penalties = 0;
    const freedomPos = ranking.freedom || 5;
    const teamPos = ranking.team || 4;
    if (freedomPos <= 2) penalties -= 2;
    if (teamPos === 1) penalties -= 1;

    return { score: score + penalties, penalties };
  }

  function _scoreMethods(selected) {
    if (!Array.isArray(selected)) return { score: 0 };
    // Only g selected = -3
    if (selected.length === 1 && selected[0] === 'g') return { score: -3 };
    const methodCount = selected.filter(s => s !== 'g').length;
    let score;
    if (methodCount === 0) score = 0;
    else if (methodCount <= 2) score = 1;
    else if (methodCount <= 4) score = 2;
    else score = 3;
    // Bonus +1 if includes books (a) or paid courses (d), max 4
    if (selected.includes('a') || selected.includes('d')) {
      score = Math.min(score + 1, 4);
    }
    return { score };
  }

  // === MAIN SCORING ===

  function calculate(answers) {
    const result = {
      rawScore: 0,
      questionScores: {},
      honestyScore: 20,
      honestyDetails: {
        fakeBooks: 0,
        fakeFilms: 0,
        likertContradictions: 0,
        crossBlockContradictions: 0
      },
      honestyMultiplier: 1.0,
      finalScore: 0,
      categories: {},
      autoReject: false,
      autoRejectReason: null,
      weaknesses: [],
      decision: 'reject'
    };

    // Score Q1-Q30 (except multi/ranking)
    for (let q = 1; q <= 30; q++) {
      const ans = answers['Q' + q];
      if (ans === undefined || ans === null) {
        result.questionScores[q] = 0;
        continue;
      }

      if (q === 10) {
        const bk = _scoreBooks(ans);
        result.questionScores[q] = bk.score;
        result.honestyDetails.fakeBooks = bk.fakeCount;
        result.honestyScore -= bk.fakeCount * 3;
      } else if (q === 20) {
        const fl = _scoreFilms(ans);
        result.questionScores[q] = fl.score;
        result.honestyDetails.fakeFilms = fl.fakeCount;
        result.honestyScore -= fl.fakeCount * 3;
      } else if (q === 21) {
        const rk = _scoreRanking(ans);
        result.questionScores[q] = rk.score;
      } else if (q === 25) {
        const mt = _scoreMethods(ans);
        result.questionScores[q] = mt.score;
      } else {
        result.questionScores[q] = _scoreSingle(q, ans);
      }
    }

    // Score Likert Q31-Q46
    for (let q = 31; q <= 46; q++) {
      const raw = answers['Q' + q];
      if (raw === undefined || raw === null) {
        result.questionScores[q] = 0;
        continue;
      }
      if (_directLikert.includes(q)) {
        result.questionScores[q] = _scoreLikertDirect(raw);
      } else {
        result.questionScores[q] = _scoreLikertInverse(raw);
      }
    }

    // Likert honesty pairs
    for (const [direct, inverse] of _likertPairs) {
      const directRaw = parseInt(answers['Q' + direct] || 0, 10);
      const inverseRaw = parseInt(answers['Q' + inverse] || 0, 10);
      if (directRaw >= 2 && inverseRaw >= 2) {
        result.honestyDetails.likertContradictions++;
        result.honestyScore -= 2;
      }
    }

    // Cross-block contradictions
    const a = answers;
    const _cb = [];

    // Q1(d) but product on 4-5 in Q21
    if (a.Q1 === 'd' && a.Q21 && (a.Q21.product >= 4)) {
      _cb.push('Q1-Q21'); result.honestyScore -= 2;
    }
    // Q21 income=1 but Q26=a (high fixed)
    if (a.Q21 && a.Q21.income === 1 && a.Q26 === 'a') {
      _cb.push('Q21-Q26'); result.honestyScore -= 3;
    }
    // Q5=a but Q11=e (or vice versa)
    if ((a.Q5 === 'a' && a.Q11 === 'e') || (a.Q5 === 'c' && a.Q11 === 'b')) {
      _cb.push('Q5-Q11'); result.honestyScore -= 3;
    }
    // Q2=d but Q8=a or b
    if (a.Q2 === 'd' && (a.Q8 === 'a' || a.Q8 === 'b')) {
      _cb.push('Q2-Q8'); result.honestyScore -= 2;
    }
    // Q13=d but Q9=d
    if (a.Q13 === 'd' && a.Q9 === 'd') {
      _cb.push('Q13-Q9'); result.honestyScore -= 2;
    }
    // Q17=b but Q19=b
    if (a.Q17 === 'b' && a.Q19 === 'b') {
      _cb.push('Q17-Q19'); result.honestyScore -= 3;
    }
    // Q5=c but Q24=a
    if (a.Q5 === 'c' && a.Q24 === 'a') {
      _cb.push('Q5-Q24'); result.honestyScore -= 2;
    }
    // Q35 raw=3 but Q2=a or b
    if (parseInt(a.Q35 || 0, 10) === 3 && (a.Q2 === 'a' || a.Q2 === 'b')) {
      _cb.push('Q35-Q2'); result.honestyScore -= 2;
    }

    result.honestyDetails.crossBlockContradictions = _cb.length;
    result.honestyScore = Math.max(0, result.honestyScore);

    // Honesty multiplier
    if (result.honestyScore >= 17) result.honestyMultiplier = 1.00;
    else if (result.honestyScore >= 13) result.honestyMultiplier = 0.95;
    else if (result.honestyScore >= 9) result.honestyMultiplier = 0.85;
    else if (result.honestyScore >= 5) result.honestyMultiplier = 0.70;
    else result.honestyMultiplier = 0.50;

    // Raw score = sum of all question scores
    let raw = 0;
    for (let q = 1; q <= 46; q++) {
      raw += result.questionScores[q] || 0;
    }
    result.rawScore = raw;

    // Category scores
    for (const [cat, qs] of Object.entries(_categories)) {
      let catScore = 0;
      for (const q of qs) {
        catScore += result.questionScores[q] || 0;
      }
      const maxVal = _categoryMax[cat];
      const pct = Math.round(Math.max(0, catScore) / maxVal * 100);
      result.categories[cat] = { score: catScore, max: maxVal, percent: Math.min(pct, 100) };
    }

    // Auto-reject checks
    const totalFakes = result.honestyDetails.fakeBooks + result.honestyDetails.fakeFilms;
    if (totalFakes >= 3) {
      result.autoReject = true;
      result.autoRejectReason = 'Systematic dishonesty (3+ fake books/films)';
    }
    if (result.honestyScore < 5) {
      result.autoReject = true;
      result.autoRejectReason = 'Critically low honesty score';
    }

    // Final score as percentage of theoretical max (~96 raw max realistic)
    // Using the stated max structure: raw max approx 96 (generous)
    const theoreticalMax = 96;
    const adjusted = Math.max(0, result.rawScore) * result.honestyMultiplier;
    result.finalScore = Math.round(adjusted / theoreticalMax * 100);
    result.finalScore = Math.min(100, Math.max(0, result.finalScore));

    // Decision
    if (result.autoReject) {
      result.decision = 'reject';
    } else if (result.honestyScore < 9) {
      // Max "consider" if honesty < 9
      result.decision = result.finalScore >= 55 ? 'consider' : 'reject';
    } else if (result.finalScore >= 85) {
      // Outstanding requires no category < 50% and honesty >= 13
      const allCatsOk = Object.values(result.categories).every(c => c.percent >= 50);
      if (allCatsOk && result.honestyScore >= 13) {
        result.decision = 'outstanding';
      } else {
        result.decision = 'strong';
      }
    } else if (result.finalScore >= 70) {
      // Excellent/strong
      const allCatsOk = Object.values(result.categories).every(c => c.percent >= 50);
      if (allCatsOk && result.honestyScore >= 13) {
        result.decision = 'strong';
      } else {
        result.decision = 'consider';
      }
    } else if (result.finalScore >= 55) {
      result.decision = 'consider';
    } else {
      result.decision = 'reject';
    }

    // Weakness feedback
    result.weaknesses = _detectWeaknesses(result.questionScores, a);

    return result;
  }

  function _detectWeaknesses(scores, answers) {
    const w = [];

    // 1. Client qualification: 2+ of Q2,Q8,Q22,Q30 scored <=0
    const qualQs = [2, 8, 22, 30];
    const qualFails = qualQs.filter(q => (scores[q] || 0) <= 0).length;
    if (qualFails >= 2) {
      w.push({
        title: 'Client qualification',
        text: 'Consider asking questions to understand the client\'s needs before presenting options or prices. In consultative sales, qualification comes before presentation.'
      });
    }

    // 2. Discount handling: ANY of Q9,Q17,Q19 scored <=-1
    const discountQs = [9, 17, 19];
    const discountFail = discountQs.some(q => (scores[q] || 0) <= -1);
    if (discountFail) {
      w.push({
        title: 'Discount handling',
        text: 'Offering discounts without understanding the real reason behind a client\'s hesitation can undermine product value. Focus on identifying the actual concern first.'
      });
    }

    // 3. Proactivity: 2+ of Q3,Q9,Q19 scored <=-1
    const proactQs = [3, 9, 19];
    const proactFails = proactQs.filter(q => (scores[q] || 0) <= -1).length;
    if (proactFails >= 2) {
      w.push({
        title: 'Proactivity',
        text: 'In sales, waiting for the client to come back on their own often means losing them. A proactive follow-up approach helps maintain momentum.'
      });
    }

    // 4. System adherence: Q5 <= -2 OR Q24 <= -2
    if ((scores[5] || 0) <= -2 || (scores[24] || 0) <= -2) {
      w.push({
        title: 'System adherence',
        text: 'Working within a structured sales system with scripts and processes is essential for consistency and scalability.'
      });
    }

    // 5. Safety: Q18 = b
    if (answers.Q18 === 'b') {
      w.push({
        title: 'Safety',
        text: 'Never provide unverified information about safety to clients. When unsure, consult with the team before responding.'
      });
    }

    // 6. Professional development: Q25 scored <= -3
    if ((scores[25] || 0) <= -3) {
      w.push({
        title: 'Professional development',
        text: 'Investing in professional development through books, courses, and other resources can significantly accelerate your growth in sales.'
      });
    }

    return w;
  }

  return { calculate };
})();
