// scripts/validate_jee_vectors_all.js
const katex = require('katex');
const s1 = require('./data_jee_vectors_subtopic1.js');
const s2 = require('./data_jee_vectors_subtopic2.js');
const s3 = require('./data_jee_vectors_subtopic3.js');
const s4 = require('./data_jee_vectors_subtopic4.js');
const s5 = require('./data_jee_vectors_subtopic5.js');
const repairs = require('./repaired_genuine_vectors.js');

function testKatex(str, context) {
  if (!str) return;
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    const latex = match[1] || match[2];
    try {
      katex.renderToString(latex, { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in [${context}]: "${latex}" -> ${err.message}`);
    }
  }
}

const allReplacements = [
  ...s1, ...s2, ...s3, ...s4, ...s5
];

console.log(`Validating ${allReplacements.length} replacement questions...`);

if (allReplacements.length !== 150) {
  console.error(`ERROR: Expected 150 replacement questions, got ${allReplacements.length}`);
  process.exit(1);
}

const seenQuestions = new Set();
let errorCount = 0;

allReplacements.forEach((q, idx) => {
  const ctx = `Repl Q#${idx + 1} (${q.subTopic} - ${q.type})`;
  
  const normQ = q.question.replace(/\s+/g, ' ').trim().toLowerCase();
  if (seenQuestions.has(normQ)) {
    console.error(`Duplicate question found at ${ctx}: "${q.question.substring(0, 50)}..."`);
    errorCount++;
  }
  seenQuestions.add(normQ);

  if (!['MCQ', 'ASSERTION_REASON', 'NUMERICAL'].includes(q.type)) {
    console.error(`Invalid type at ${ctx}: ${q.type}`);
    errorCount++;
  }

  if (q.type === 'NUMERICAL') {
    if (q.marks !== 4 || q.negativeMarks !== 0) {
      console.error(`Invalid marks for NUM at ${ctx}: ${q.marks}/${q.negativeMarks}`);
      errorCount++;
    }
    if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
      console.error(`Invalid correctAnswer for NUM at ${ctx}: ${q.correctAnswer}`);
      errorCount++;
    }
  } else {
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`Invalid marks for MCQ/AR at ${ctx}: ${q.marks}/${q.negativeMarks}`);
      errorCount++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`Options array must have length 4 at ${ctx}`);
      errorCount++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`Invalid correctAnswer at ${ctx}: ${q.correctAnswer}`);
      errorCount++;
    }
  }

  try {
    testKatex(q.question, `${ctx} question`);
    testKatex(q.explanation, `${ctx} explanation`);
    if (q.options) {
      q.options.forEach((opt, oIdx) => {
        testKatex(opt, `${ctx} opt[${oIdx}]`);
      });
    }
  } catch (err) {
    console.error(err.message);
    errorCount++;
  }
});

console.log(`Replacement questions check finished with ${errorCount} errors.`);

console.log(`Validating ${Object.keys(repairs).length} genuine repairs...`);
let repairErrors = 0;
for (const [id, r] of Object.entries(repairs)) {
  const ctx = `Repair for ${id}`;
  try {
    if (r.question) testKatex(r.question, `${ctx} question`);
    if (r.explanation) testKatex(r.explanation, `${ctx} explanation`);
    if (r.options) {
      r.options.forEach((opt, oIdx) => testKatex(opt, `${ctx} opt[${oIdx}]`));
    }
  } catch (err) {
    console.error(err.message);
    repairErrors++;
  }
}

console.log(`Repairs check finished with ${repairErrors} errors.`);

if (errorCount === 0 && repairErrors === 0) {
  console.log('✅ ALL PRE-FLIGHT VALIDATIONS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
