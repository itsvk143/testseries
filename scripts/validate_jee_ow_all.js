const katex = require('katex');
const path = require('path');

const partsConfig = [
  { file: 'data_jee_ow_part1.js', subtopic: 'Wave motion', expected: { total: 53, ar: 26, mcq: 7, num: 20 } },
  { file: 'data_jee_ow_part2.js', subtopic: 'Superposition of waves', expected: { total: 53, ar: 26, mcq: 7, num: 20 } },
  { file: 'data_jee_ow_part3.js', subtopic: 'Standing waves in strings and organ pipes', expected: { total: 53, ar: 26, mcq: 7, num: 20 } },
  { file: 'data_jee_ow_part4.js', subtopic: 'Beats', expected: { total: 53, ar: 26, mcq: 7, num: 20 } },
  { file: 'data_jee_ow_part5.js', subtopic: 'Simple Harmonic Motion (SHM)', expected: { total: 63, ar: 26, mcq: 7, num: 30 } },
  { file: 'data_jee_ow_part6.js', subtopic: 'Simple Harmonic Motion (SHM)', expected: { total: 45, ar: 0, mcq: 0, num: 45 } },
  { file: 'data_jee_ow_part7.js', subtopic: 'Simple Harmonic Motion (SHM)', expected: { total: 45, ar: 0, mcq: 0, num: 45 } },
  { file: 'data_jee_ow_part8.js', subtopic: 'Simple Harmonic Motion (SHM)', expected: { total: 46, ar: 0, mcq: 0, num: 46 } }
];

function testKatex(text, loc) {
  if (!text) return;
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error at ${loc}: ${e.message} in formula: "${formula}"`);
    }
  }
}

let totalQuestions = 0;
let errors = [];

for (let pIdx = 0; pIdx < partsConfig.length; pIdx++) {
  const { file, subtopic, expected } = partsConfig[pIdx];
  const filePath = path.join(__dirname, file);
  const questions = require(filePath);

  console.log(`\nValidating Part ${pIdx + 1}: ${file} (${subtopic}) - Count: ${questions.length}`);
  if (questions.length !== expected.total) {
    errors.push(`Part ${pIdx + 1} has ${questions.length} questions, expected ${expected.total}`);
  }

  const ar = questions.filter(q => q.type === 'ASSERTION_REASON');
  const mcq = questions.filter(q => q.type === 'MCQ');
  const num = questions.filter(q => q.type === 'NUMERICAL');

  if (ar.length !== expected.ar || mcq.length !== expected.mcq || num.length !== expected.num) {
    errors.push(`Part ${pIdx + 1} distribution mismatch: AR=${ar.length} (exp ${expected.ar}), MCQ=${mcq.length} (exp ${expected.mcq}), NUM=${num.length} (exp ${expected.num})`);
  }

  questions.forEach((q, qIdx) => {
    totalQuestions++;
    const loc = `Part ${pIdx + 1} Q${qIdx + 1} (${q.type})`;

    if (q.subTopic !== subtopic) {
      errors.push(`${loc}: Subtopic "${q.subTopic}" does not match expected "${subtopic}"`);
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      errors.push(`${loc}: Marks mismatch (marks: ${q.marks}, neg: ${q.negativeMarks})`);
    }
    if (!q.question || q.question.trim().length === 0) {
      errors.push(`${loc}: Question text is empty`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      errors.push(`${loc}: Explanation is empty`);
    }

    if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`${loc}: Options must be an array of length 4`);
      } else {
        q.options.forEach((opt, oIdx) => {
          if (!opt || opt.trim().length === 0) {
            errors.push(`${loc}: Option ${oIdx} is empty`);
          }
          try {
            testKatex(opt, `${loc} Option ${oIdx}`);
          } catch (err) {
            errors.push(err.message);
          }
        });
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        errors.push(`${loc}: correctAnswer must be 0, 1, 2, or 3, got ${q.correctAnswer}`);
      }
    } else if (q.type === 'NUMERICAL') {
      if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
        errors.push(`${loc}: Numerical correctAnswer must be a valid number, got ${q.correctAnswer}`);
      }
    } else {
      errors.push(`${loc}: Unknown question type "${q.type}"`);
    }

    try {
      testKatex(q.question, `${loc} Question`);
    } catch (err) {
      errors.push(err.message);
    }
    try {
      testKatex(q.explanation, `${loc} Explanation`);
    } catch (err) {
      errors.push(err.message);
    }
  });
}

console.log(`\n========================================`);
console.log(`TOTAL QUESTIONS CHECKED: ${totalQuestions}`);
if (errors.length > 0) {
  console.error(`VALIDATION FAILED with ${errors.length} errors:`);
  errors.forEach((e, idx) => console.error(`${idx + 1}. ${e}`));
  process.exit(1);
} else {
  console.log(`ALL 411 QUESTIONS VALIDATED SUCCESSFULLY! 0 ERRORS!`);
  console.log(`Schema, Marks (+4/-1), Types (130 AR, 35 MCQ, 246 NUM), and KaTeX fully verified.`);
}
