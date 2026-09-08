const path = require('path');
const katex = require('katex');

const parts = [
  { file: './data_jee_emi_ac_part1.js', subTopic: 'AC circuits', count: 196 },
  { file: './data_jee_emi_ac_part2.js', subTopic: "Faraday's law", count: 53 },
  { file: './data_jee_emi_ac_part3.js', subTopic: 'LC oscillations', count: 53 },
  { file: './data_jee_emi_ac_part4.js', subTopic: "Lenz's law", count: 53 },
  { file: './data_jee_emi_ac_part5.js', subTopic: 'RMS values', count: 53 },
  { file: './data_jee_emi_ac_part6.js', subTopic: 'Self and mutual inductance', count: 53 },
  { file: './data_jee_emi_ac_part7.js', subTopic: 'Transformers and AC generator', count: 53 }
];

function checkKaTeX(text, location) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error at ${location} in "${m[1]}": ${err.message}`);
    }
  }
}

let totalQuestions = 0;
let errors = 0;

for (const p of parts) {
  const filePath = path.join(__dirname, p.file);
  const data = require(filePath);
  console.log(`Validating ${p.subTopic} (${data.length} items)...`);

  if (data.length !== p.count) {
    console.error(`  ERROR: Expected ${p.count} items, got ${data.length}`);
    errors++;
  }

  data.forEach((q, idx) => {
    const loc = `${p.subTopic} item ${idx + 1} (${q.type})`;
    if (!q.question || q.question.trim().length === 0) {
      console.error(`  Empty question at ${loc}`);
      errors++;
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      console.error(`  Empty explanation at ${loc}`);
      errors++;
    }
    if (q.chapter !== 'Electromagnetic Induction and Alternating Currents') {
      console.error(`  Wrong chapter at ${loc}: ${q.chapter}`);
      errors++;
    }
    if (q.subject !== 'Physics') {
      console.error(`  Wrong subject at ${loc}: ${q.subject}`);
      errors++;
    }
    if (q.subTopic !== p.subTopic) {
      console.error(`  Wrong subTopic at ${loc}: ${q.subTopic}`);
      errors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`  Wrong marks at ${loc}: marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
      errors++;
    }

    if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`  Invalid options array at ${loc}`);
        errors++;
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        console.error(`  Invalid correctAnswer at ${loc}: ${q.correctAnswer}`);
        errors++;
      }
    } else if (q.type === 'NUMERICAL') {
      if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
        console.error(`  Invalid numerical correctAnswer at ${loc}: ${q.correctAnswer}`);
        errors++;
      }
      if (typeof q.numericalAnswer !== 'number' || isNaN(q.numericalAnswer)) {
        console.error(`  Invalid numericalAnswer at ${loc}: ${q.numericalAnswer}`);
        errors++;
      }
    } else {
      console.error(`  Unknown type at ${loc}: ${q.type}`);
      errors++;
    }

    // KaTeX validation
    try {
      checkKaTeX(q.question, `${loc} question`);
      if (q.options) {
        q.options.forEach((opt, oi) => checkKaTeX(opt, `${loc} option ${oi + 1}`));
      }
      checkKaTeX(q.explanation, `${loc} explanation`);
    } catch (err) {
      console.error(err.message);
      errors++;
    }
  });

  totalQuestions += data.length;
}

console.log(`\n========================================`);
console.log(`Validation Complete!`);
console.log(`Total questions verified: ${totalQuestions}`);
console.log(`Total errors found: ${errors}`);
console.log(`========================================\n`);

if (errors > 0) {
  process.exit(1);
}
