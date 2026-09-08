const katex = require('katex');

const parts = [
  { name: 'Part 1 (Center of mass)', data: require('./data_jee_rm_part1.js') },
  { name: 'Part 2 (Torque)', data: require('./data_jee_rm_part2.js') },
  { name: 'Part 3 (Theorems of parallel and perpendicular axes)', data: require('./data_jee_rm_part3.js') },
  { name: 'Part 4 (Angular momentum conservation)', data: require('./data_jee_rm_part4.js') },
  { name: 'Part 5 (Moment of inertia - Standard Bodies)', data: require('./data_jee_rm_part5.js') },
  { name: 'Part 6 (Moment of inertia - Dynamics & Rolling)', data: require('./data_jee_rm_part6.js') },
  { name: 'Part 7 (Moment of inertia - Incline & Pulley Systems)', data: require('./data_jee_rm_part7.js') },
  { name: 'Part 8 (Moment of inertia - Advanced & Collisions)', data: require('./data_jee_rm_part8.js') }
];

function checkKatex(text, loc) {
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
const typeCounts = {};
const subtopicCounts = {};
const bogusPatterns = [/field vector/i, /described by \$\\vec\{F\}/i, /square of the magnitude/i, /lorem ipsum/i];

console.log('=== VALIDATING ALL 408 REPLACEMENT QUESTIONS FOR ROTATIONAL MOTION ===\n');

for (const p of parts) {
  console.log(`Checking ${p.name}: ${p.data.length} questions...`);
  totalQuestions += p.data.length;

  p.data.forEach((q, idx) => {
    const loc = `${p.name} #${idx + 1}`;

    // Schema checks
    if (!['ASSERTION_REASON', 'MCQ', 'NUMERICAL'].includes(q.type)) {
      throw new Error(`Invalid type "${q.type}" at ${loc}`);
    }
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

    if (q.marks !== 4 || q.negativeMarks !== 1) {
      throw new Error(`Invalid marks at ${loc}: marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
    }
    if (q.chapter !== 'Rotational Motion' || q.subject !== 'Physics') {
      throw new Error(`Invalid chapter/subject at ${loc}: ${q.chapter} / ${q.subject}`);
    }

    // MCQ / AR checks
    if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`Options array must have 4 items at ${loc}`);
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        throw new Error(`Invalid correctAnswer ${q.correctAnswer} at ${loc}`);
      }
      q.options.forEach((opt, oIdx) => checkKatex(opt, `${loc} Option ${oIdx}`));
    }

    // Numerical checks
    if (q.type === 'NUMERICAL') {
      if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
        throw new Error(`Invalid numerical answer at ${loc}: ${q.correctAnswer}`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 0) {
        throw new Error(`Numerical options must be empty array at ${loc}`);
      }
    }

    // Math validation
    checkKatex(q.question, `${loc} Question`);
    checkKatex(q.explanation, `${loc} Explanation`);

    // Bogus pattern checks
    for (const pat of bogusPatterns) {
      if (pat.test(q.question) || pat.test(q.explanation)) {
        throw new Error(`Bogus pattern detected at ${loc}: ${pat}`);
      }
    }
  });
}

console.log(`\nAll ${totalQuestions} questions successfully validated!`);
console.log('Type breakdown:', typeCounts);
console.log('Subtopic breakdown:', subtopicCounts);
