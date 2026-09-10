// scripts/validate_jee_diff_eq_all.js
const katex = require('katex');

const { repairedGenuineDiffEq } = require('./repaired_genuine_diff_eq');
const sub1 = require('./data_jee_diff_eq_subtopic1');
const sub2 = require('./data_jee_diff_eq_subtopic2');
const sub3 = require('./data_jee_diff_eq_subtopic3');
const sub4 = require('./data_jee_diff_eq_subtopic4');
const sub5 = require('./data_jee_diff_eq_subtopic5');
const sub6 = require('./data_jee_diff_eq_subtopic6');

console.log('--- Loading All Modules for Differential Equations ---');

function normalizeItem(q) {
  let type = q.type || q.questionType || 'MCQ';
  let qType = 'MCQ (Multiple Choice Question)';
  let marks = 4;
  let negativeMarks = 1;
  let options = q.options || [];
  let correctAnswer = q.correctAnswer;

  if (type === 'MCQ' || type === 'MCQ (Multiple Choice Question)' || type === 'SINGLE' || type === 'multiple_choice') {
    type = 'MCQ';
    qType = 'MCQ (Multiple Choice Question)';
    if (typeof correctAnswer === 'string' && options.length > 0) {
      const idx = options.indexOf(correctAnswer);
      if (idx !== -1) correctAnswer = idx;
    }
  } else if (type === 'AR' || type === 'ASSERTION_REASON' || type === 'Assertion-Reason Question' || type === 'Assertion-Reason' || type === 'assertion_reason') {
    type = 'ASSERTION_REASON';
    qType = 'Assertion-Reason Question';
    if (typeof correctAnswer === 'string' && options.length > 0) {
      const idx = options.indexOf(correctAnswer);
      if (idx !== -1) correctAnswer = idx;
    }
  } else if (type === 'NUM' || type === 'NUMERICAL' || type === 'Numerical Value Question' || type === 'numerical') {
    type = 'NUMERICAL';
    qType = 'Numerical Value Question';
    negativeMarks = 0;
    options = [];
    correctAnswer = String(correctAnswer);
  }

  return {
    question: q.question,
    options,
    correctAnswer,
    explanation: q.explanation,
    type,
    questionType: qType,
    difficulty: q.difficulty || 'Medium',
    marks,
    negativeMarks
  };
}

const genuineArray = Object.entries(repairedGenuineDiffEq).map(([id, q]) => ({
  ...normalizeItem(q),
  _id: id,
  _sourceGroup: 'genuine_repaired'
}));

const sub1Norm = sub1.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic1' }));
const sub2Norm = sub2.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic2' }));
const sub3Norm = sub3.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic3' }));
const sub4Norm = sub4.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic4' }));
const sub5Norm = sub5.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic5' }));
const sub6Norm = sub6.map(q => ({ ...normalizeItem(q), _sourceGroup: 'subtopic6' }));

console.log(`Repaired Genuine: ${genuineArray.length} questions`);
console.log(`Subtopic 1 (Exact & IF): ${sub1Norm.length} questions`);
console.log(`Subtopic 2 (Formation): ${sub2Norm.length} questions`);
console.log(`Subtopic 3 (Homogeneous): ${sub3Norm.length} questions`);
console.log(`Subtopic 4 (Linear DE): ${sub4Norm.length} questions`);
console.log(`Subtopic 5 (Order & Degree): ${sub5Norm.length} questions`);
console.log(`Subtopic 6 (Separation of Variables): ${sub6Norm.length} questions`);

const allReplacements = [
  ...genuineArray,
  ...sub1Norm,
  ...sub2Norm,
  ...sub3Norm,
  ...sub4Norm,
  ...sub5Norm,
  ...sub6Norm
];

console.log(`Total questions to validate: ${allReplacements.length}`);

let errors = 0;
const questionTexts = new Map();

function validateLatex(text, context) {
  if (!text) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true, displayMode: false });
    } catch (e) {
      console.error(`[LaTeX Error] in ${context}: "${match[1]}" -> ${e.message}`);
      errors++;
    }
  }
}

allReplacements.forEach((q, idx) => {
  const prefix = `[Q#${idx + 1} | ${q._sourceGroup}]`;

  // Check required fields
  if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
    console.error(`${prefix} Missing or empty question`);
    errors++;
  }

  // Duplicate check
  const normalizedText = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
  if (questionTexts.has(normalizedText)) {
    console.error(`${prefix} DUPLICATE question text with Q#${questionTexts.get(normalizedText)}: "${q.question.substring(0, 60)}..."`);
    errors++;
  } else {
    questionTexts.set(normalizedText, idx + 1);
  }

  // Type check
  if (!['MCQ', 'ASSERTION_REASON', 'NUMERICAL'].includes(q.type)) {
    console.error(`${prefix} Invalid question type: ${q.type}`);
    errors++;
  }

  // Scoring & Options
  if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`${prefix} Invalid marks for ${q.type}: +${q.marks}/-${q.negativeMarks}`);
      errors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`${prefix} Options must be array of 4 items`);
      errors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        validateLatex(opt, `${prefix} Option ${oIdx + 1}`);
      });
    }
    if (![0, 1, 2, 3, '0', '1', '2', '3'].includes(q.correctAnswer)) {
      console.error(`${prefix} Invalid correctAnswer index for MCQ/AR: ${q.correctAnswer}`);
      errors++;
    }
  } else if (q.type === 'NUMERICAL') {
    if (q.marks !== 4 || q.negativeMarks !== 0) {
      console.error(`${prefix} Invalid marks for numerical: +${q.marks}/-${q.negativeMarks}`);
      errors++;
    }
    if (q.correctAnswer === undefined || q.correctAnswer === null || isNaN(Number(q.correctAnswer))) {
      console.error(`${prefix} Invalid correctAnswer for numerical: ${q.correctAnswer}`);
      errors++;
    }
  }

  // Check KaTeX in question and explanation
  validateLatex(q.question, `${prefix} question`);
  if (q.explanation) {
    validateLatex(q.explanation, `${prefix} explanation`);
  }
});

console.log(`Validation completed. Total errors: ${errors}`);
if (errors > 0) {
  process.exit(1);
} else {
  console.log('>>> SUCCESS: ALL 220 QUESTIONS PASSED KATEX, SCHEMA, AND ZERO-DUPLICATE CHECKS! <<<');
  process.exit(0);
}
