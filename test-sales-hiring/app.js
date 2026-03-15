/**
 * Elbrus Climbing - Sales Manager Test
 * Main Application Logic
 */

// === CONFIGURATION ===
const CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxpA1a-2n8n0jYdiRKZdZVtS44dgDChQ_vy8pGbGt-pWTNqpPvL2_sii5AvN0YYXoVxhw/exec',
  TIMER_SECONDS: 25 * 60, // 25 minutes
  TOTAL_QUESTIONS: 46,
  WHATSAPP_URL: 'https://api.whatsapp.com/send/?phone=34603574933'
};

// === STATE ===
const state = {
  currentScreen: 0,       // 0 = welcome, 1 = contact, 2-47 = questions, 48 = results
  answers: {},
  questionStartTimes: {},
  questionTimes: [],
  timerSeconds: CONFIG.TIMER_SECONDS,
  timerInterval: null,
  testStartTime: null,
  candidate: null,
  submitted: false
};

// === DOM HELPERS ===
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
  // Check if already taken
  if (localStorage.getItem('ec_test_taken')) {
    showAlreadyTaken();
    return;
  }
  renderWelcomeScreen();
});

// === ALREADY TAKEN ===
function showAlreadyTaken() {
  const container = $('.container');
  container.innerHTML = `
    <div class="header">
      <div class="logo"><img src="logo.png" alt="Elbrus Climbing" class="logo-img"></div>
    </div>
    <div class="card">
      <div class="already-taken">
        <h2>Test Already Completed</h2>
        <p>You have already completed this test. Each candidate may only take it once.</p>
        <p style="margin-top:16px;">If you believe this is an error, please contact us via
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank" style="color:var(--accent);">WhatsApp</a>.</p>
      </div>
    </div>
  `;
}

// === WELCOME SCREEN (Screen 0) ===
function renderWelcomeScreen() {
  const main = $('#main-content');
  main.innerHTML = `
    <div class="screen active" id="screen-welcome">
      <div class="card">
        <div class="welcome-content">
          <img src="logo.png" alt="Elbrus Climbing" class="welcome-logo" style="display:block;margin:0 auto 20px;">
          <div class="welcome-title">Sales Manager Assessment</div>
          <p class="welcome-intro">Welcome to the Elbrus Climbing sales assessment.</p>
          <p class="welcome-intro">This test evaluates your approach to sales situations, client communication, and professional development. There are no right or wrong answers — we are looking for how you think and make decisions.</p>

          <div class="welcome-section">
            <h3>What you will get:</h3>
            <ul>
              <li>Personalized feedback on your strengths and areas for growth</li>
              <li>Your score and our assessment of fit for the role</li>
            </ul>
          </div>

          <div class="welcome-section">
            <h3>Important:</h3>
            <ul>
              <li>46 questions, estimated time 15-20 minutes</li>
              <li>Time limit: 25 minutes</li>
              <li>Answer honestly — the test includes consistency checks</li>
              <li>You cannot go back to previous questions</li>
              <li>You can only take this test once</li>
            </ul>
          </div>

          <div class="btn-spacer"></div>
          <button class="btn btn-primary" id="btn-welcome-start">Start &rarr;</button>
        </div>
      </div>
    </div>
  `;

  $('#btn-welcome-start').addEventListener('click', () => {
    state.currentScreen = 1;
    initContactForm();
  });
}

// === CONTACT FORM (Screen 1) ===
function initContactForm() {
  renderContactScreen();
  bindContactValidation();
}

function renderContactScreen() {
  const main = $('#main-content');
  main.innerHTML = `
    <div class="screen active" id="screen-contact">
      <div class="card">
        <h2 style="font-size:1.2rem;font-weight:700;color:var(--text-bright);margin-bottom:4px;">Sales Manager Assessment</h2>
        <p style="font-size:0.85rem;color:var(--text-dim);margin-bottom:24px;">Please fill in your details to begin the test. The test contains ${CONFIG.TOTAL_QUESTIONS} questions and is timed at 25 minutes.</p>

        <div class="form-group">
          <label>First Name <span class="required">*</span></label>
          <input type="text" id="inp-first" autocomplete="given-name" placeholder="Your first name">
        </div>

        <div class="form-group">
          <label>Last Name <span class="required">*</span></label>
          <input type="text" id="inp-last" autocomplete="family-name" placeholder="Your last name">
        </div>

        <div class="form-group">
          <label>Resume Link <span class="required">*</span></label>
          <input type="url" id="inp-resume" autocomplete="url" placeholder="https://...">
          <div class="validation-msg" id="val-resume">Please enter a valid URL</div>
        </div>

        <div class="form-group">
          <label>Phone Number <span class="required">*</span></label>
          <input type="tel" id="inp-phone" autocomplete="tel" placeholder="+1 234 567 8900">
        </div>

        <div class="checkbox-group">
          <div class="group-label">Available on <span class="required">*</span> <span style="font-size:0.8rem;color:var(--text-dim);">(select at least one)</span></div>
          <div class="checkbox-row">
            <label class="checkbox-item">
              <input type="checkbox" id="chk-whatsapp"> WhatsApp
            </label>
            <label class="checkbox-item">
              <input type="checkbox" id="chk-telegram"> Telegram
            </label>
          </div>
          <div class="validation-msg" id="val-messenger">Please select at least one messenger</div>
        </div>

        <label class="consent-item">
          <input type="checkbox" id="chk-consent">
          <span>I consent to the processing of my personal data for the purpose of evaluating my candidacy. My data will be stored securely and used only for hiring purposes.</span>
        </label>

        <div class="btn-spacer"></div>
        <button class="btn btn-primary" id="btn-start" disabled>Begin Test</button>
      </div>
    </div>
  `;
}

function bindContactValidation() {
  const inputs = ['inp-first', 'inp-last', 'inp-resume', 'inp-phone'];
  const checkboxes = ['chk-whatsapp', 'chk-telegram', 'chk-consent'];

  [...inputs, ...checkboxes].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', validateContactForm);
    if (el) el.addEventListener('change', validateContactForm);
  });

  $('#btn-start').addEventListener('click', startTest);
}

function validateContactForm() {
  const first = $('#inp-first').value.trim();
  const last = $('#inp-last').value.trim();
  const resume = $('#inp-resume').value.trim();
  const phone = $('#inp-phone').value.trim();
  const wa = $('#chk-whatsapp').checked;
  const tg = $('#chk-telegram').checked;
  const consent = $('#chk-consent').checked;

  let valid = true;

  if (!first || !last || !phone) valid = false;

  // URL validation
  if (!resume) {
    valid = false;
  } else {
    try {
      new URL(resume);
      $('#val-resume').classList.remove('show');
    } catch {
      valid = false;
      if (resume.length > 5) $('#val-resume').classList.add('show');
    }
  }

  if (!wa && !tg) {
    valid = false;
  }

  if (!consent) valid = false;

  $('#btn-start').disabled = !valid;
}

// === START TEST ===
function startTest() {
  state.candidate = {
    firstName: $('#inp-first').value.trim(),
    lastName: $('#inp-last').value.trim(),
    resumeUrl: $('#inp-resume').value.trim(),
    phone: $('#inp-phone').value.trim(),
    whatsapp: $('#chk-whatsapp').checked,
    telegram: $('#chk-telegram').checked
  };

  state.testStartTime = Date.now();
  state.currentScreen = 2;

  // Show progress bar and timer
  $('#progress-section').style.display = 'block';

  startTimer();
  renderQuestion(1);
}

// === TIMER ===
function startTimer() {
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(state.timerSeconds / 60);
  const sec = state.timerSeconds % 60;
  const timerEl = $('#timer');
  timerEl.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  timerEl.className = 'timer';
  if (state.timerSeconds <= 120) timerEl.classList.add('red');
  else if (state.timerSeconds <= 300) timerEl.classList.add('yellow');
  else timerEl.classList.add('green');
}

function autoSubmit() {
  // Fill unanswered with null (will score as 0)
  for (let q = 1; q <= CONFIG.TOTAL_QUESTIONS; q++) {
    if (state.answers['Q' + q] === undefined) {
      state.answers['Q' + q] = null;
    }
  }
  finishTest();
}

// === RENDER QUESTION ===
function renderQuestion(qNum) {
  const q = questions[qNum - 1];
  if (!q) return;

  // Update progress
  updateProgress(qNum);

  // Track time per question
  state.questionStartTimes[qNum] = Date.now();

  const main = $('#main-content');
  const isLast = qNum === CONFIG.TOTAL_QUESTIONS;

  // Section divider before Likert section
  let sectionHeader = '';
  if (qNum === 31) {
    sectionHeader = `
      <div class="section-divider">
        <h2>Section 2: Self-Assessment</h2>
        <p>Rate how much you agree with each statement.<br>There are no right or wrong answers.</p>
      </div>
    `;
  }

  let optionsHTML = '';

  if (q.type === 'single') {
    optionsHTML = renderSingleOptions(q, qNum);
  } else if (q.type === 'multi') {
    optionsHTML = renderMultiOptions(q, qNum);
  } else if (q.type === 'ranking') {
    optionsHTML = renderRankingOptions(q, qNum);
  } else if (q.type === 'likert') {
    optionsHTML = renderLikertOptions(q, qNum);
  }

  main.innerHTML = `
    <div class="screen active" id="screen-q${qNum}">
      <div class="card">
        ${sectionHeader}
        <div class="question-number">Question ${qNum} of ${CONFIG.TOTAL_QUESTIONS}</div>
        <div class="question-text">${q.text}</div>
        ${q.type === 'multi' ? '<div class="question-hint">Select all that apply</div>' : ''}
        ${optionsHTML}
        <div class="btn-spacer"></div>
        <button class="btn btn-primary" id="btn-next" disabled>${isLast ? 'Finish Test' : 'Next'}</button>
      </div>
    </div>
  `;

  // Bind next button
  $('#btn-next').addEventListener('click', () => {
    recordAnswer(qNum, q);
    if (isLast) {
      finishTest();
    } else {
      state.currentScreen = qNum + 2;
      renderQuestion(qNum + 1);
    }
  });

  // Bind answer selection to enable next button
  bindAnswerSelection(qNum, q);
}

function renderSingleOptions(q, qNum) {
  return `<div class="options-list">
    ${q.options.map(opt => `
      <div class="option-item">
        <input type="radio" name="q${qNum}" id="q${qNum}_${opt.label}" value="${opt.label}">
        <label class="option-label" for="q${qNum}_${opt.label}">
          <span class="option-letter">${opt.label}</span>
          <span>${opt.text}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function renderMultiOptions(q, qNum) {
  return `<div class="options-list">
    ${q.options.map(opt => `
      <div class="option-item">
        <input type="checkbox" name="q${qNum}" id="q${qNum}_${opt.label}" value="${opt.label}">
        <label class="option-label" for="q${qNum}_${opt.label}">
          <span class="option-letter">${opt.label}</span>
          <span>${opt.text}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function renderRankingOptions(q, qNum) {
  return `<div class="ranking-list">
    ${q.options.map(opt => `
      <div class="ranking-item">
        <select id="rank_${opt.label}" data-rank="${opt.label}">
          <option value="">--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span class="ranking-text">${opt.text}</span>
      </div>
    `).join('')}
  </div>`;
}

function renderLikertOptions(q, qNum) {
  const labels = ['Strongly disagree', 'Rather no', 'Rather yes', 'Fully agree'];
  return `<div class="likert-grid">
    ${[0, 1, 2, 3].map(val => `
      <div class="likert-btn">
        <input type="radio" name="q${qNum}" id="q${qNum}_${val}" value="${val}">
        <label class="likert-label" for="q${qNum}_${val}">
          <span class="likert-number">${val}</span>
          <span class="likert-text">${labels[val]}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function bindAnswerSelection(qNum, q) {
  if (q.type === 'single' || q.type === 'likert') {
    $$(`input[name="q${qNum}"]`).forEach(inp => {
      inp.addEventListener('change', () => {
        $('#btn-next').disabled = false;
      });
    });
  } else if (q.type === 'multi') {
    $$(`input[name="q${qNum}"]`).forEach(inp => {
      inp.addEventListener('change', () => {
        const anyChecked = [...$$(`input[name="q${qNum}"]`)].some(i => i.checked);
        $('#btn-next').disabled = !anyChecked;
      });
    });
  } else if (q.type === 'ranking') {
    $$(`select[data-rank]`).forEach(sel => {
      sel.addEventListener('change', () => {
        const allFilled = [...$$(`select[data-rank]`)].every(s => s.value !== '');
        // Check for duplicates
        const values = [...$$(`select[data-rank]`)].map(s => s.value).filter(v => v !== '');
        const unique = new Set(values);
        const noDuplicates = values.length === unique.size;
        $('#btn-next').disabled = !(allFilled && noDuplicates);

        // Highlight duplicates
        $$(`select[data-rank]`).forEach(s => {
          s.style.borderColor = '';
        });
        if (values.length > unique.size) {
          const seen = {};
          $$(`select[data-rank]`).forEach(s => {
            if (s.value && seen[s.value]) {
              s.style.borderColor = 'var(--error)';
              seen[s.value].style.borderColor = 'var(--error)';
            }
            if (s.value) seen[s.value] = s;
          });
        }
      });
    });
  }
}

function recordAnswer(qNum, q) {
  // Record time spent
  const startTime = state.questionStartTimes[qNum] || Date.now();
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  state.questionTimes[qNum - 1] = elapsed;

  if (q.type === 'single' || q.type === 'likert') {
    const checked = document.querySelector(`input[name="q${qNum}"]:checked`);
    if (checked) {
      state.answers['Q' + qNum] = q.type === 'likert' ? parseInt(checked.value, 10) : checked.value;
    }
  } else if (q.type === 'multi') {
    const checked = [...$$(`input[name="q${qNum}"]:checked`)].map(i => i.value);
    state.answers['Q' + qNum] = checked;
  } else if (q.type === 'ranking') {
    const ranking = {};
    $$(`select[data-rank]`).forEach(sel => {
      ranking[sel.dataset.rank] = parseInt(sel.value, 10);
    });
    state.answers['Q' + qNum] = ranking;
  }
}

function updateProgress(qNum) {
  const pct = ((qNum - 1) / CONFIG.TOTAL_QUESTIONS) * 100;
  $('#progress-fill').style.width = pct + '%';
  $('#progress-text').textContent = `Question ${qNum} of ${CONFIG.TOTAL_QUESTIONS}`;
}

// === FINISH TEST ===
function finishTest() {
  clearInterval(state.timerInterval);

  if (state.submitted) return;
  state.submitted = true;

  // Show loading
  showLoading(true);

  // Calculate score
  const result = ScoringEngine.calculate(state.answers);

  // Build payload
  const payload = {
    timestamp: new Date().toISOString(),
    language: 'en',
    candidate: state.candidate,
    answers: state.answers,
    timing: {
      totalSeconds: Math.round((Date.now() - state.testStartTime) / 1000),
      perQuestion: state.questionTimes
    },
    scoring: {
      rawScore: result.rawScore,
      honestyScore: result.honestyScore,
      honestyMultiplier: result.honestyMultiplier,
      finalScore: result.finalScore,
      categories: result.categories,
      honestyDetails: result.honestyDetails,
      autoReject: result.autoReject,
      autoRejectReason: result.autoRejectReason
    },
    decision: result.decision,
    weaknesses: result.weaknesses.map(w => w.title)
  };

  // Mark as taken
  localStorage.setItem('ec_test_taken', '1');

  // Send to Apps Script
  sendResults(payload).finally(() => {
    showLoading(false);
    renderResults(result);
  });
}

async function sendResults(payload) {
  if (CONFIG.APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
    console.log('Apps Script URL not configured. Results:', JSON.stringify(payload, null, 2));
    return;
  }

  try {
    const resp = await fetch(CONFIG.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    console.log('Submission result:', data);
  } catch (err) {
    console.error('Failed to submit results:', err);
  }
}

function showLoading(show) {
  const overlay = $('#loading-overlay');
  if (show) overlay.classList.add('active');
  else overlay.classList.remove('active');
}

// === RENDER RESULTS ===
function renderResults(result) {
  // Hide progress
  $('#progress-section').style.display = 'none';

  const score = result.finalScore;
  const colorClass = score >= 75 ? 'green' : (score >= 50 ? 'yellow' : 'red');
  const scoreColor = score >= 75 ? 'var(--success)' : (score >= 50 ? 'var(--warning)' : 'var(--error)');

  let decisionHTML = '';
  if (result.autoReject || result.decision === 'reject') {
    decisionHTML = `
      <div class="decision-box reject">
        <div class="decision-title">Thank you for your time</div>
        <div class="decision-text">
          Thank you for completing the test.<br><br>
          Unfortunately, at this time we are unable to offer a collaboration.
          We wish you the best of luck in your career search.
        </div>
      </div>
    `;
  } else if (result.decision === 'consider') {
    decisionHTML = `
      <div class="decision-box consider">
        <div class="decision-title">Thank you for completing the test!</div>
        <div class="decision-text">
          We are ready to consider your candidacy. To continue, please record a short video (1-2 minutes) in English
          telling us about what you expect from working with us, your current priorities, and goals.<br><br>
          Send the video and a link to your resume via WhatsApp:<br>
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank">Contact us on WhatsApp</a>
        </div>
      </div>
    `;
  } else {
    decisionHTML = `
      <div class="decision-box strong">
        <div class="decision-title">Excellent result!</div>
        <div class="decision-text">
          You have demonstrated a high level of professional competencies.
          We are ready to discuss a potential collaboration with you.<br><br>
          We will contact you shortly. You can also reach out to us directly:<br>
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank">Contact us on WhatsApp</a>
        </div>
      </div>
    `;
  }

  // Weaknesses
  let weaknessHTML = '';
  if (result.weaknesses.length > 0) {
    weaknessHTML = `
      <div class="weaknesses">
        <h3>Areas for Growth</h3>
        ${result.weaknesses.map(w => `
          <div class="weakness-item">
            <div class="weakness-title">${w.title}</div>
            <div class="weakness-text">${w.text}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const main = $('#main-content');
  main.innerHTML = `
    <div class="screen active" id="screen-results">
      <div class="card">
        <div class="result-score">
          <div class="result-score-number" style="color:${scoreColor}">${score}</div>
          <div class="result-score-label">out of 100</div>
        </div>
        <div class="result-bar">
          <div class="result-bar-fill ${colorClass}" id="result-bar-fill" style="width:0%"></div>
        </div>
        ${decisionHTML}
        ${weaknessHTML}
      </div>
    </div>
  `;

  // Animate bar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $('#result-bar-fill').style.width = score + '%';
    });
  });
}
