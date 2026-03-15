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

// === UI TRANSLATIONS ===
const UI_TEXT = {
  en: {
    welcomeTitle: 'Sales Manager Assessment',
    welcomeIntro: 'Welcome to the Elbrus Climbing sales assessment.',
    welcomeIntro2: 'This test evaluates your approach to sales situations, client communication, and professional development. There are no right or wrong answers \u2014 we are looking for how you think and make decisions.',
    whatYouGet: 'What you will get:',
    getItem1: 'Personalized feedback on your strengths and areas for growth',
    getItem2: 'Your score and our assessment of fit for the role',
    important: 'Important:',
    impItem1: '46 questions, estimated time 15\u201320 minutes',
    impItem2: 'Time limit: 25 minutes',
    impItem3: 'Answer honestly \u2014 the test includes consistency checks',
    impItem4: 'You cannot go back to previous questions',
    impItem5: 'You can only take this test once',
    startBtn: 'Start \u2192',
    contactTitle: 'Sales Manager Assessment',
    contactIntro: 'Please fill in your details to begin the test. The test contains 46 questions and is timed at 25 minutes.',
    firstName: 'First Name',
    lastName: 'Last Name',
    resumeLink: 'Resume Link',
    resumePlaceholder: 'https://...',
    resumeError: 'Please enter a valid URL',
    phone: 'Phone Number',
    phonePlaceholder: '+1 234 567 8900',
    availableOn: 'Available on',
    selectOne: '(select at least one)',
    messengerError: 'Please select at least one messenger',
    consent: 'I consent to the processing of my personal data for the purpose of evaluating my candidacy. My data will be stored securely and used only for hiring purposes.',
    beginTest: 'Begin Test',
    questionOf: 'Question {n} of {total}',
    selectAll: 'Select all that apply',
    finishTest: 'Finish Test',
    nextBtn: 'Next',
    submitBtn: 'Submit',
    outOf100: 'out of 100',
    alreadyTakenTitle: 'Test Already Completed',
    alreadyTakenText: 'You have already completed this test. Each candidate may only take it once.',
    alreadyTakenError: 'If you believe this is an error, please contact us via',
    rejectTitle: 'Thank you for your time',
    rejectText: 'Thank you for completing the test.<br><br>Unfortunately, at this time we are unable to offer a collaboration. We wish you the best of luck in your career search.',
    considerTitle: 'Thank you for completing the test!',
    considerText: 'We are ready to consider your candidacy. To continue, please record a short video (1\u20132 minutes) in English telling us about what you expect from working with us, your current priorities, and goals.<br><br>Send the video and a link to your resume via WhatsApp:',
    contactWhatsApp: 'Contact us on WhatsApp',
    strongTitle: 'Excellent result!',
    strongText: 'You have demonstrated a high level of professional competencies. We are ready to discuss a potential collaboration with you.<br><br>We will contact you shortly. You can also reach out to us directly:',
    areasForGrowth: 'Areas for Growth',
    submitting: 'Submitting your results...',
    shareResult: 'Share your result',
    copied: 'Copied!',
    shareText: 'I scored {score}/100 on the Elbrus Climbing sales assessment',
    likertLabels: ['Strongly disagree', 'Rather no', 'Rather yes', 'Fully agree'],
    rankClickHint: 'Click items in order of importance (1 = most important)',
    weaknesses: {
      clientQualification: { title: 'Client qualification', text: 'Consider asking questions to understand the client\'s needs before presenting options or prices. In consultative sales, qualification comes before presentation.' },
      discountHandling: { title: 'Discount handling', text: 'Offering discounts without understanding the real reason behind a client\'s hesitation can undermine product value. Focus on identifying the actual concern first.' },
      proactivity: { title: 'Proactivity', text: 'In sales, waiting for the client to come back on their own often means losing them. A proactive follow-up approach helps maintain momentum.' },
      systemAdherence: { title: 'System adherence', text: 'Working within a structured sales system with scripts and processes is essential for consistency and scalability.' },
      safety: { title: 'Safety', text: 'Never provide unverified information about safety to clients. When unsure, consult with the team before responding.' },
      profDev: { title: 'Professional development', text: 'Investing in professional development through books, courses, and other resources can significantly accelerate your growth in sales.' }
    }
  },
  ru: {
    welcomeTitle: '\u041e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c',
    welcomeIntro: '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0442\u0435\u0441\u0442 \u0434\u043b\u044f \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 Elbrus Climbing.',
    welcomeIntro2: '\u042d\u0442\u043e\u0442 \u0442\u0435\u0441\u0442 \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c, \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044e \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0435\u0442 \u2014 \u043d\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442, \u043a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f.',
    whatYouGet: '\u0427\u0442\u043e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435:',
    getItem1: '\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u043f\u043e \u0441\u0438\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c \u0438 \u0437\u043e\u043d\u0430\u043c \u0440\u043e\u0441\u0442\u0430',
    getItem2: '\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0438 \u043d\u0430\u0448\u0443 \u043e\u0446\u0435\u043d\u043a\u0443 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0440\u043e\u043b\u0438',
    important: '\u0412\u0430\u0436\u043d\u043e:',
    impItem1: '46 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f 15\u201320 \u043c\u0438\u043d\u0443\u0442',
    impItem2: '\u041b\u0438\u043c\u0438\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438: 25 \u043c\u0438\u043d\u0443\u0442',
    impItem3: '\u041e\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u0447\u0435\u0441\u0442\u043d\u043e \u2014 \u0442\u0435\u0441\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
    impItem4: '\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043d\u0435\u043b\u044c\u0437\u044f',
    impItem5: '\u0422\u0435\u0441\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437',
    startBtn: '\u041d\u0430\u0447\u0430\u0442\u044c \u2192',
    contactTitle: '\u041e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c',
    contactIntro: '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0442\u0435\u0441\u0442\u0430. \u0422\u0435\u0441\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 46 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d 25 \u043c\u0438\u043d\u0443\u0442\u0430\u043c\u0438.',
    firstName: '\u0418\u043c\u044f',
    lastName: '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
    resumeLink: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u0437\u044e\u043c\u0435',
    resumePlaceholder: 'https://...',
    resumeError: '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 URL',
    phone: '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430',
    phonePlaceholder: '+7 999 123 4567',
    availableOn: '\u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432',
    selectOne: '(\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d)',
    messengerError: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440',
    consent: '\u042f \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043c\u043e\u0435\u0439 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0443\u0440\u044b. \u041c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u043d\u0430\u0439\u043c\u0430.',
    beginTest: '\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442',
    questionOf: '\u0412\u043e\u043f\u0440\u043e\u0441 {n} \u0438\u0437 {total}',
    selectAll: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435',
    finishTest: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442',
    nextBtn: '\u0414\u0430\u043b\u0435\u0435',
    submitBtn: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
    outOf100: '\u0438\u0437 100',
    alreadyTakenTitle: '\u0422\u0435\u0441\u0442 \u0443\u0436\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d',
    alreadyTakenText: '\u0412\u044b \u0443\u0436\u0435 \u043f\u0440\u043e\u0448\u043b\u0438 \u044d\u0442\u043e\u0442 \u0442\u0435\u0441\u0442. \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u0435\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437.',
    alreadyTakenError: '\u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u044d\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437',
    rejectTitle: '\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f',
    rejectText: '\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430.<br><br>\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e. \u0416\u0435\u043b\u0430\u0435\u043c \u0432\u0430\u043c \u0443\u0441\u043f\u0435\u0445\u043e\u0432 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b.',
    considerTitle: '\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430!',
    considerText: '\u041c\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0430\u0448\u0443 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0443\u0440\u0443. \u0414\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0432\u0438\u0434\u0435\u043e (1\u20132 \u043c\u0438\u043d\u0443\u0442\u044b) \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0432\u044b \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435 \u043e\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0430\u043c\u0438, \u0432\u0430\u0448\u0438 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u044b \u0438 \u0446\u0435\u043b\u0438.<br><br>\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0438 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0440\u0435\u0437\u044e\u043c\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp:',
    contactWhatsApp: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 WhatsApp',
    strongTitle: '\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!',
    strongText: '\u0412\u044b \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0446\u0438\u0439. \u041c\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043e\u0431\u0441\u0443\u0434\u0438\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e.<br><br>\u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c:',
    areasForGrowth: '\u0417\u043e\u043d\u044b \u0440\u043e\u0441\u0442\u0430',
    submitting: '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432...',
    shareResult: '\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c',
    copied: '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!',
    shareText: '\u042f \u043d\u0430\u0431\u0440\u0430\u043b(\u0430) {score}/100 \u0432 \u0442\u0435\u0441\u0442\u0435 Elbrus Climbing \u0434\u043b\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c',
    likertLabels: ['\u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d', '\u0421\u043a\u043e\u0440\u0435\u0435 \u043d\u0435\u0442', '\u0421\u043a\u043e\u0440\u0435\u0435 \u0434\u0430', '\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d'],
    rankClickHint: '\u041d\u0430\u0436\u0438\u043c\u0430\u0439\u0442\u0435 \u043d\u0430 \u043f\u0443\u043d\u043a\u0442\u044b \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438 (1 = \u0441\u0430\u043c\u043e\u0435 \u0432\u0430\u0436\u043d\u043e\u0435)',
    weaknesses: {
      clientQualification: { title: '\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432', text: '\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0438 \u0446\u0435\u043d.' },
      discountHandling: { title: '\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u0430\u043c\u0438', text: '\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043a\u0438\u0434\u043e\u043a \u0431\u0435\u0437 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043a\u043e\u043b\u0435\u0431\u0430\u043d\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0435\u0441\u0446\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442.' },
      proactivity: { title: '\u041f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c', text: '\u0412 \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u0445 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0447\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442 \u0432\u0435\u0440\u043d\u0451\u0442\u0441\u044f \u0441\u0430\u043c \u0447\u0430\u0441\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0435\u0433\u043e \u043f\u043e\u0442\u0435\u0440\u044e.' },
      systemAdherence: { title: '\u0421\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0435', text: '\u0420\u0430\u0431\u043e\u0442\u0430 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u043e\u0434\u0430\u0436 \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438.' },
      safety: { title: '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c', text: '\u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u0435\u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c.' },
      profDev: { title: '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435', text: '\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043a\u043d\u0438\u0433\u0438 \u0438 \u043a\u0443\u0440\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u043a\u043e\u0440\u0438\u0442\u044c \u0432\u0430\u0448 \u0440\u043e\u0441\u0442.' }
    }
  }
};

// === INTERLEAVED QUESTION ORDER ===
// Fixed deterministic order: every 3rd position is a Likert question
// Regular questions (IDs 1-30): 30 questions
// Likert questions (IDs 31-46): 16 questions
// Pattern: R, R, L, R, R, L, ... until we run out of one type, then append rest
const QUESTION_ORDER = (function() {
  const regular = [];
  for (let i = 1; i <= 30; i++) regular.push(i);
  const likert = [];
  for (let i = 31; i <= 46; i++) likert.push(i);

  const order = [];
  let ri = 0, li = 0;
  while (ri < regular.length || li < likert.length) {
    // Add 2 regular questions
    if (ri < regular.length) order.push(regular[ri++]);
    if (ri < regular.length) order.push(regular[ri++]);
    // Add 1 likert question
    if (li < likert.length) order.push(likert[li++]);
  }
  return order;
})();

// === STATE ===
const state = {
  currentScreen: 0,       // 0 = welcome, 1 = contact, 2+ = questions, last = results
  answers: {},
  questionStartTimes: {},
  questionTimes: [],
  timerSeconds: CONFIG.TIMER_SECONDS,
  timerInterval: null,
  testStartTime: null,
  candidate: null,
  submitted: false,
  language: 'en',
  rankingOrder: []  // for click-to-rank
};

// === DOM HELPERS ===
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Helper to get current language text
function t() { return UI_TEXT[state.language]; }
function getQuestions() { return questions[state.language]; }
function getQuestionById(id) { return getQuestions().find(q => q.id === id); }

// === COPY PROTECTION ===
document.addEventListener('contextmenu', e => e.preventDefault());

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
  const txt = t();
  const container = $('.container');
  container.innerHTML = `
    <div class="header">
      <div class="logo"><img src="logo.png" alt="Elbrus Climbing" class="logo-img"></div>
    </div>
    <div class="card">
      <div class="already-taken">
        <h2>${txt.alreadyTakenTitle}</h2>
        <p>${txt.alreadyTakenText}</p>
        <p style="margin-top:16px;">${txt.alreadyTakenError}
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank" style="color:var(--accent);">WhatsApp</a>.</p>
      </div>
    </div>
  `;
}

// === WELCOME SCREEN (Screen 0) ===
function renderWelcomeScreen() {
  const txt = t();
  const main = $('#main-content');
  main.innerHTML = `
    <div class="screen active" id="screen-welcome">
      <div class="card">
        <div class="welcome-content">
          <div class="lang-selector">
            <button class="lang-btn ${state.language === 'en' ? 'active' : ''}" data-lang="en">
              <span class="lang-flag">\ud83c\uddec\ud83c\udde7</span> English
            </button>
            <button class="lang-btn ${state.language === 'ru' ? 'active' : ''}" data-lang="ru">
              <span class="lang-flag">\ud83c\uddf7\ud83c\uddfa</span> \u0420\u0443\u0441\u0441\u043a\u0438\u0439
            </button>
          </div>
          <img src="logo.png" alt="Elbrus Climbing" class="welcome-logo" style="display:block;margin:0 auto 20px;">
          <div class="welcome-title">${txt.welcomeTitle}</div>
          <p class="welcome-intro">${txt.welcomeIntro}</p>
          <p class="welcome-intro">${txt.welcomeIntro2}</p>

          <div class="welcome-section">
            <h3>${txt.whatYouGet}</h3>
            <ul>
              <li>${txt.getItem1}</li>
              <li>${txt.getItem2}</li>
            </ul>
          </div>

          <div class="welcome-section">
            <h3>${txt.important}</h3>
            <ul>
              <li>${txt.impItem1}</li>
              <li>${txt.impItem2}</li>
              <li>${txt.impItem3}</li>
              <li>${txt.impItem4}</li>
              <li>${txt.impItem5}</li>
            </ul>
          </div>

          <div class="btn-spacer"></div>
          <button class="btn btn-primary" id="btn-welcome-start">${txt.startBtn}</button>
        </div>
      </div>
    </div>
  `;

  // Language selector bindings
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.language = btn.dataset.lang;
      renderWelcomeScreen();
    });
  });

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
  const txt = t();
  const main = $('#main-content');
  main.innerHTML = `
    <div class="screen active" id="screen-contact">
      <div class="card">
        <h2 style="font-size:1.2rem;font-weight:700;color:var(--text-bright);margin-bottom:4px;">${txt.contactTitle}</h2>
        <p style="font-size:0.85rem;color:var(--text-dim);margin-bottom:24px;">${txt.contactIntro}</p>

        <div class="form-group">
          <label>${txt.firstName} <span class="required">*</span></label>
          <input type="text" id="inp-first" autocomplete="given-name" placeholder="${txt.firstName}">
        </div>

        <div class="form-group">
          <label>${txt.lastName} <span class="required">*</span></label>
          <input type="text" id="inp-last" autocomplete="family-name" placeholder="${txt.lastName}">
        </div>

        <div class="form-group">
          <label>${txt.resumeLink} <span class="required">*</span></label>
          <input type="url" id="inp-resume" autocomplete="url" placeholder="${txt.resumePlaceholder}">
          <div class="validation-msg" id="val-resume">${txt.resumeError}</div>
        </div>

        <div class="form-group">
          <label>${txt.phone} <span class="required">*</span></label>
          <input type="tel" id="inp-phone" autocomplete="tel" placeholder="${txt.phonePlaceholder}">
        </div>

        <div class="checkbox-group">
          <div class="group-label">${txt.availableOn} <span class="required">*</span> <span style="font-size:0.8rem;color:var(--text-dim);">${txt.selectOne}</span></div>
          <div class="checkbox-row">
            <label class="checkbox-item">
              <input type="checkbox" id="chk-whatsapp"> WhatsApp
            </label>
            <label class="checkbox-item">
              <input type="checkbox" id="chk-telegram"> Telegram
            </label>
          </div>
          <div class="validation-msg" id="val-messenger">${txt.messengerError}</div>
        </div>

        <label class="consent-item">
          <input type="checkbox" id="chk-consent">
          <span>${txt.consent}</span>
        </label>

        <div class="btn-spacer"></div>
        <button class="btn btn-primary" id="btn-start" disabled>${txt.beginTest}</button>
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
  renderQuestionByIndex(0);
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
// positionIndex is 0-based index into QUESTION_ORDER
function renderQuestionByIndex(positionIndex) {
  const qId = QUESTION_ORDER[positionIndex];
  const q = getQuestionById(qId);
  if (!q) return;

  const displayNum = positionIndex + 1;  // 1-based for display
  const txt = t();

  // Update progress
  updateProgress(displayNum);

  // Track time per question (keyed by question ID)
  state.questionStartTimes[qId] = Date.now();

  const main = $('#main-content');
  const isLast = positionIndex === QUESTION_ORDER.length - 1;

  let optionsHTML = '';

  if (q.type === 'single') {
    optionsHTML = renderSingleOptions(q, qId);
  } else if (q.type === 'multi') {
    optionsHTML = renderMultiOptions(q, qId);
  } else if (q.type === 'ranking') {
    optionsHTML = renderRankingOptions(q, qId);
  } else if (q.type === 'likert') {
    optionsHTML = renderLikertOptions(q, qId);
  }

  const questionLabel = txt.questionOf.replace('{n}', displayNum).replace('{total}', CONFIG.TOTAL_QUESTIONS);
  const hintHTML = q.type === 'multi' ? `<div class="question-hint">${txt.selectAll}</div>` : '';
  const rankHintHTML = q.type === 'ranking' ? `<div class="question-hint">${txt.rankClickHint}</div>` : '';

  main.innerHTML = `
    <div class="screen active" id="screen-q${qId}">
      <div class="card">
        <div class="question-number">${questionLabel}</div>
        <div class="question-text">${q.text}</div>
        ${hintHTML}
        ${rankHintHTML}
        ${optionsHTML}
        <div class="btn-spacer"></div>
        <button class="btn btn-primary" id="btn-next" disabled>${isLast ? txt.finishTest : txt.nextBtn}</button>
      </div>
    </div>
  `;

  // Bind next button
  $('#btn-next').addEventListener('click', () => {
    recordAnswer(qId, q);
    if (isLast) {
      finishTest();
    } else {
      state.currentScreen = positionIndex + 3;
      renderQuestionByIndex(positionIndex + 1);
    }
  });

  // Bind answer selection to enable next button
  bindAnswerSelection(qId, q);
}

function renderSingleOptions(q, qId) {
  return `<div class="options-list">
    ${q.options.map(opt => `
      <div class="option-item">
        <input type="radio" name="q${qId}" id="q${qId}_${opt.label}" value="${opt.label}">
        <label class="option-label" for="q${qId}_${opt.label}">
          <span class="option-letter">${opt.label}</span>
          <span>${opt.text}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function renderMultiOptions(q, qId) {
  return `<div class="options-list">
    ${q.options.map(opt => `
      <div class="option-item">
        <input type="checkbox" name="q${qId}" id="q${qId}_${opt.label}" value="${opt.label}">
        <label class="option-label" for="q${qId}_${opt.label}">
          <span class="option-letter">${opt.label}</span>
          <span>${opt.text}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function renderRankingOptions(q, qId) {
  // Click-to-rank interface
  state.rankingOrder = [];
  return `<div class="ranking-list" id="ranking-list">
    ${q.options.map(opt => `
      <div class="ranking-card" data-label="${opt.label}" id="rank-card-${opt.label}">
        <div class="ranking-circle"></div>
        <span class="ranking-text">${opt.text}</span>
      </div>
    `).join('')}
  </div>`;
}

function renderLikertOptions(q, qId) {
  const labels = t().likertLabels;
  return `<div class="likert-grid">
    ${[0, 1, 2, 3].map(val => `
      <div class="likert-btn">
        <input type="radio" name="q${qId}" id="q${qId}_${val}" value="${val}">
        <label class="likert-label" for="q${qId}_${val}">
          <span class="likert-number">${val}</span>
          <span class="likert-text">${labels[val]}</span>
        </label>
      </div>
    `).join('')}
  </div>`;
}

function bindAnswerSelection(qId, q) {
  if (q.type === 'single' || q.type === 'likert') {
    $$(`input[name="q${qId}"]`).forEach(inp => {
      inp.addEventListener('change', () => {
        $('#btn-next').disabled = false;
      });
    });
  } else if (q.type === 'multi') {
    $$(`input[name="q${qId}"]`).forEach(inp => {
      inp.addEventListener('change', () => {
        const anyChecked = [...$$(`input[name="q${qId}"]`)].some(i => i.checked);
        $('#btn-next').disabled = !anyChecked;
      });
    });
  } else if (q.type === 'ranking') {
    // Click-to-rank binding
    $$('.ranking-card').forEach(card => {
      card.addEventListener('click', () => {
        const label = card.dataset.label;
        const existingIdx = state.rankingOrder.indexOf(label);

        if (existingIdx !== -1) {
          // Remove and shift down
          state.rankingOrder.splice(existingIdx, 1);
        } else {
          // Add to end of ranking
          state.rankingOrder.push(label);
        }

        // Update all cards visually
        updateRankingDisplay();

        // Enable next only when all 5 are ranked
        $('#btn-next').disabled = state.rankingOrder.length !== q.options.length;
      });
    });
  }
}

function updateRankingDisplay() {
  $$('.ranking-card').forEach(card => {
    const label = card.dataset.label;
    const circle = card.querySelector('.ranking-circle');
    const idx = state.rankingOrder.indexOf(label);

    if (idx !== -1) {
      circle.textContent = idx + 1;
      card.classList.add('ranked');
    } else {
      circle.textContent = '';
      card.classList.remove('ranked');
    }
  });
}

function recordAnswer(qId, q) {
  // Record time spent
  const startTime = state.questionStartTimes[qId] || Date.now();
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  // Store by question ID
  state.questionTimes[qId - 1] = elapsed;

  if (q.type === 'single' || q.type === 'likert') {
    const checked = document.querySelector(`input[name="q${qId}"]:checked`);
    if (checked) {
      state.answers['Q' + qId] = q.type === 'likert' ? parseInt(checked.value, 10) : checked.value;
    }
  } else if (q.type === 'multi') {
    const checked = [...$$(`input[name="q${qId}"]:checked`)].map(i => i.value);
    state.answers['Q' + qId] = checked;
  } else if (q.type === 'ranking') {
    // Convert rankingOrder array to object: { label: position }
    const ranking = {};
    state.rankingOrder.forEach((label, idx) => {
      ranking[label] = idx + 1;
    });
    state.answers['Q' + qId] = ranking;
  }
}

function updateProgress(displayNum) {
  const pct = ((displayNum - 1) / CONFIG.TOTAL_QUESTIONS) * 100;
  $('#progress-fill').style.width = pct + '%';
  const txt = t();
  const label = txt.questionOf.replace('{n}', displayNum).replace('{total}', CONFIG.TOTAL_QUESTIONS);
  $('#progress-text').textContent = label;
}

// === FINISH TEST ===
function finishTest() {
  clearInterval(state.timerInterval);

  if (state.submitted) return;
  state.submitted = true;

  // Update loading text
  const loadingText = document.querySelector('.loading-text');
  if (loadingText) loadingText.textContent = t().submitting;

  // Show loading
  showLoading(true);

  // Calculate score
  const result = ScoringEngine.calculate(state.answers);

  // Build payload
  const payload = {
    timestamp: new Date().toISOString(),
    language: state.language,
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
  const txt = t();

  // Hide progress
  $('#progress-section').style.display = 'none';

  const score = result.finalScore;
  const colorClass = score >= 75 ? 'green' : (score >= 50 ? 'yellow' : 'red');
  const scoreColor = score >= 75 ? 'var(--success)' : (score >= 50 ? 'var(--warning)' : 'var(--error)');

  let decisionHTML = '';
  if (result.autoReject || result.decision === 'reject') {
    decisionHTML = `
      <div class="decision-box reject">
        <div class="decision-title">${txt.rejectTitle}</div>
        <div class="decision-text">${txt.rejectText}</div>
      </div>
    `;
  } else if (result.decision === 'consider') {
    decisionHTML = `
      <div class="decision-box consider">
        <div class="decision-title">${txt.considerTitle}</div>
        <div class="decision-text">
          ${txt.considerText}<br>
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank">${txt.contactWhatsApp}</a>
        </div>
      </div>
    `;
  } else {
    decisionHTML = `
      <div class="decision-box strong">
        <div class="decision-title">${txt.strongTitle}</div>
        <div class="decision-text">
          ${txt.strongText}<br>
          <a href="${CONFIG.WHATSAPP_URL}" target="_blank">${txt.contactWhatsApp}</a>
        </div>
      </div>
    `;
  }

  // Weaknesses
  let weaknessHTML = '';
  if (result.weaknesses.length > 0) {
    weaknessHTML = `
      <div class="weaknesses">
        <h3>${txt.areasForGrowth}</h3>
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
          <div class="result-score-label">${txt.outOf100}</div>
        </div>
        <div class="result-bar">
          <div class="result-bar-fill ${colorClass}" id="result-bar-fill" style="width:0%"></div>
        </div>
        ${decisionHTML}
        ${weaknessHTML}
        <div class="btn-spacer"></div>
        <button class="btn btn-secondary" id="btn-share">${txt.shareResult}</button>
      </div>
    </div>
  `;

  // Animate bar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $('#result-bar-fill').style.width = score + '%';
    });
  });

  // Share button
  const shareBtn = $('#btn-share');
  const shareTextContent = txt.shareText.replace('{score}', score);
  const shareUrl = window.location.href;

  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: shareTextContent,
          url: shareUrl
        });
      } catch (e) {
        // User cancelled or error — ignore
      }
    } else {
      // Desktop fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareTextContent + ' ' + shareUrl);
        shareBtn.textContent = txt.copied;
        setTimeout(() => {
          shareBtn.textContent = txt.shareResult;
        }, 2000);
      } catch (e) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = shareTextContent + ' ' + shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        shareBtn.textContent = txt.copied;
        setTimeout(() => {
          shareBtn.textContent = txt.shareResult;
        }, 2000);
      }
    }
  });
}
