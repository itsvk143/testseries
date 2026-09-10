// scripts/validate_jee_seq_all.js
const katex = require('katex');

const { repairedGenuineSequences } = require('./repaired_genuine_sequences');
const { subtopic1Questions } = require('./data_jee_seq_subtopic1');
const { subtopic2Questions } = require('./data_jee_seq_subtopic2');
const { subtopic3Questions } = require('./data_jee_seq_subtopic3');
const { subtopic4Questions } = require('./data_jee_seq_subtopic4');
const { subtopic5Questions } = require('./data_jee_seq_subtopic5');

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
  const formulas = [];
  const blockRegex = /\$\$([\s\S]*?)\$\$/g;
  let match;
  while ((match = blockRegex.exec(text)) !== null) {
    formulas.push({ latex: match[1], displayMode: true });
  }
  const stripped = text.replace(blockRegex, '');
  const inlineRegex = /\$([^\$]+?)\$/g;
  while ((match = inlineRegex.exec(stripped)) !== null) {
    formulas.push({ latex: match[1], displayMode: false });
  }
  return formulas;
}

function validateLatex(text, context) {
  const formulas = extractLatex(text);
  for (const { latex, displayMode } of formulas) {
    try {
      katex.renderToString(latex, { throwOnError: true, displayMode });
    } catch (err) {
      throw new Error(`KaTeX Error in ${context}: "${latex}" -> ${err.message}`);
    }
  }
}

const sets = [
  { name: 'Repaired Genuine (52)', questions: Object.values(repairedGenuineSequences).map(q => ({ type: 'MCQ', marks: 4, negativeMarks: 1, ...q })), expected: 52 },
  { name: 'Subtopic 1 (30)', questions: subtopic1Questions, expected: 30 },
  { name: 'Subtopic 2 (30)', questions: subtopic2Questions, expected: 30 },
  { name: 'Subtopic 3 (30)', questions: subtopic3Questions, expected: 30 },
  { name: 'Subtopic 4 (30)', questions: subtopic4Questions, expected: 30 },
  { name: 'Subtopic 5 (30)', questions: subtopic5Questions, expected: 30 }
];

let totalQuestions = 0;
const seenQuestions = new Map();
let errorCount = 0;

for (const s of sets) {
  console.log(`\n--- Checking ${s.name} ---`);
  if (s.questions.length !== s.expected) {
    console.error(`❌ Count mismatch: expected ${s.expected}, got ${s.questions.length}`);
    errorCount++;
  }
  totalQuestions += s.questions.length;

  s.questions.forEach((q, idx) => {
    const qLabel = `${s.name} Q${idx + 1}`;

    // 1. Uniqueness
    const normQ = q.question.trim().replace(/\s+/g, ' ');
    if (seenQuestions.has(normQ)) {
      console.error(`❌ Duplicate question found in ${qLabel}: matches "${seenQuestions.get(normQ)}"`);
      errorCount++;
    } else {
      seenQuestions.set(normQ, qLabel);
    }

    // 2. Marking
    if (q.type === 'NUMERICAL') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        console.error(`❌ Invalid marking in ${qLabel} (NUMERICAL): marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
        errorCount++;
      }
      if (typeof q.correctAnswer !== 'number' && typeof q.correctAnswer !== 'string') {
        console.error(`❌ Invalid correctAnswer in ${qLabel} (NUMERICAL): ${q.correctAnswer}`);
        errorCount++;
      }
    } else {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`❌ Invalid marking in ${qLabel} (${q.type}): marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
        errorCount++;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`❌ Expected 4 options in ${qLabel}: got ${q.options ? q.options.length : 0}`);
        errorCount++;
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        console.error(`❌ Invalid correctAnswer index in ${qLabel}: ${q.correctAnswer}`);
        errorCount++;
      }
    }

    // 3. KaTeX Validation
    try {
      validateLatex(q.question, `${qLabel} question`);
      if (q.options) {
        q.options.forEach((opt, oIdx) => validateLatex(opt, `${qLabel} option[${oIdx}]`));
      }
      if (q.explanation) {
        validateLatex(q.explanation, `${qLabel} explanation`);
      }
    } catch (err) {
      console.error(`❌ ${err.message}`);
      errorCount++;
    }
  });
}

console.log('\n========================================');
console.log(`Total questions checked: ${totalQuestions} (Target: 202)`);
console.log(`Unique questions: ${seenQuestions.size}`);
console.log(`Total errors: ${errorCount}`);
if (errorCount === 0 && totalQuestions === 202) {
  console.log('✅ ALL 202 QUESTIONS PASSED 100% VALIDATION WITH ZERO ERRORS!');
  process.exit(0);
} else {
  console.error('❌ Validation failed.');
  process.exit(1);
}
