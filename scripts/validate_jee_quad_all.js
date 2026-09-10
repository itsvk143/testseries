// scripts/validate_jee_quad_all.js
const katex = require('katex');

const { repairedGenuineQuadratic } = require('./repaired_genuine_quadratic');
const { subtopic1Questions } = require('./data_jee_quad_subtopic1');
const { subtopic2Questions } = require('./data_jee_quad_subtopic2');
const { subtopic3Questions } = require('./data_jee_quad_subtopic3');
const { subtopic4Questions } = require('./data_jee_quad_subtopic4');
const { subtopic5Questions } = require('./data_jee_quad_subtopic5');
const { subtopic6Questions } = require('./data_jee_quad_subtopic6');
const { subtopic7Questions } = require('./data_jee_quad_subtopic7');
const { subtopic8Questions } = require('./data_jee_quad_subtopic8');

const allSubtopics = [
  ...subtopic1Questions,
  ...subtopic2Questions,
  ...subtopic3Questions,
  ...subtopic4Questions,
  ...subtopic5Questions,
  ...subtopic6Questions,
  ...subtopic7Questions,
  ...subtopic8Questions
];

console.log(`Loaded ${repairedGenuineQuadratic.length} repaired genuine questions.`);
console.log(`Loaded ${allSubtopics.length} replacement subtopic questions.`);

const allQuestions = [...repairedGenuineQuadratic, ...allSubtopics];
console.log(`Total questions to validate: ${allQuestions.length}`);

let errors = [];

function validateKaTeXInString(str, qIdx, field) {
  if (!str) return;
  const displayMathRegex = /\$\$([\s\S]*?)\$\$/g;
  let match;
  while ((match = displayMathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true, displayMode: true });
    } catch (e) {
      errors.push(`[Q${qIdx}] KaTeX display error in ${field}: ${e.message}\nMath: "${match[1]}"`);
    }
  }

  const cleanedStr = str.replace(displayMathRegex, '');
  const inlineMathRegex = /\$([^\$]+?)\$/g;
  while ((match = inlineMathRegex.exec(cleanedStr)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push(`[Q${qIdx}] KaTeX inline error in ${field}: ${e.message}\nMath: "${match[1]}"`);
    }
  }
}

const seenQuestions = new Map();

allQuestions.forEach((q, idx) => {
  // 1. Text checks
  if (!q.question || q.question.trim().length === 0) {
    errors.push(`[Q${idx}] Missing question text`);
  }
  if (!q.solution || q.solution.trim().length === 0) {
    errors.push(`[Q${idx}] Missing solution`);
  }

  // Duplicate check
  const cleanQText = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
  if (seenQuestions.has(cleanQText)) {
    errors.push(`[Q${idx}] Duplicate question text! Matches Q${seenQuestions.get(cleanQText)}`);
  } else {
    seenQuestions.set(cleanQText, idx);
  }

  // 2. Type & options checks
  if (q.type === 'single_choice' || q.type === 'assertion_reason') {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`[Q${idx}] ${q.type} question must have exactly 4 options. Found: ${q.options ? q.options.length : 0}`);
    }
    if (q.correctOption === undefined || q.correctOption === null || q.correctOption < 0 || q.correctOption > 3) {
      errors.push(`[Q${idx}] Invalid correctOption: ${q.correctOption}`);
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      errors.push(`[Q${idx}] ${q.type} scoring must be +4/-1. Found: +${q.marks}/-${q.negativeMarks}`);
    }
    if (q.options) {
      q.options.forEach((opt, oIdx) => {
        validateKaTeXInString(opt, idx, `option[${oIdx}]`);
      });
    }
  } else if (q.type === 'numerical') {
    if (q.correctAnswer === undefined || q.correctAnswer === null) {
      errors.push(`[Q${idx}] Numerical question missing correctAnswer`);
    }
    if (q.marks !== 4 || q.negativeMarks !== 0) {
      errors.push(`[Q${idx}] Numerical scoring must be +4/0. Found: +${q.marks}/-${q.negativeMarks}`);
    }
  } else {
    errors.push(`[Q${idx}] Unknown question type: ${q.type}`);
  }

  // 3. KaTeX checks
  validateKaTeXInString(q.question, idx, 'question');
  validateKaTeXInString(q.solution, idx, 'solution');
});

if (errors.length > 0) {
  console.error(`\n❌ Validation FAILED with ${errors.length} errors:`);
  errors.slice(0, 25).forEach(err => console.error(err));
  if (errors.length > 25) {
    console.error(`... and ${errors.length - 25} more errors.`);
  }
  process.exit(1);
} else {
  console.log(`\n✅ ALL ${allQuestions.length} QUESTIONS PASSED PRE-FLIGHT VALIDATION 100%!`);
  console.log(`- 0 duplicate questions`);
  console.log(`- Strict KaTeX throwOnError: true passed for all questions, solutions, and options`);
  console.log(`- Scoring patterns verified (+4/-1 for MCQs/AR, +4/0 for Numericals)`);
  process.exit(0);
}
