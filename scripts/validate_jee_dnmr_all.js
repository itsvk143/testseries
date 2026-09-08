const katex = require('katex');
const path = require('path');

const part1 = require('./data_jee_dnmr_part1.js');
const part2 = require('./data_jee_dnmr_part2.js');
const part3 = require('./data_jee_dnmr_part3.js');
const part4 = require('./data_jee_dnmr_part4.js');
const part5 = require('./data_jee_dnmr_part5.js');
const part6 = require('./data_jee_dnmr_part6.js');
const part7 = require('./data_jee_dnmr_part7.js');
const part8 = require('./data_jee_dnmr_part8.js');

const allDatasets = [
  { name: "Part 1 (Bohr's model)", data: part1, expectedSubtopic: "Bohr's model", expectedCount: 53 },
  { name: "Part 2 (Einstein's photoelectric equation and work function)", data: part2, expectedSubtopic: "Einstein's photoelectric equation and work function", expectedCount: 53 },
  { name: "Part 3 (Wave-particle duality)", data: part3, expectedSubtopic: "Wave-particle duality", expectedCount: 53 },
  { name: "Part 4 (de Broglie wavelength)", data: part4, expectedSubtopic: "de Broglie wavelength", expectedCount: 53 },
  { name: "Part 5 (Photoelectric effect - Threshold)", data: part5, expectedSubtopic: "Photoelectric effect", expectedCount: 63 },
  { name: "Part 6 (Photoelectric effect - Stopping)", data: part6, expectedSubtopic: "Photoelectric effect", expectedCount: 42 },
  { name: "Part 7 (Photoelectric effect - Intensity)", data: part7, expectedSubtopic: "Photoelectric effect", expectedCount: 42 },
  { name: "Part 8 (Photoelectric effect - Advanced)", data: part8, expectedSubtopic: "Photoelectric effect", expectedCount: 42 }
];

let totalQuestions = 0;
let errors = 0;

function validateKatex(text, source) {
  if (!text) return;
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      console.error(`[KaTeX Error] in ${source}: ${e.message} in formula: ${formula}`);
      errors++;
    }
  }
}

for (const ds of allDatasets) {
  console.log(`Checking ${ds.name} (Count: ${ds.data.length})...`);
  if (ds.data.length !== ds.expectedCount) {
    console.error(`ERROR: ${ds.name} has ${ds.data.length} items, expected ${ds.expectedCount}`);
    errors++;
  }
  totalQuestions += ds.data.length;

  for (let i = 0; i < ds.data.length; i++) {
    const q = ds.data[i];
    const src = `${ds.name} #${i + 1}`;

    if (q.subTopic !== ds.expectedSubtopic) {
      console.error(`ERROR: ${src} subTopic is '${q.subTopic}', expected '${ds.expectedSubtopic}'`);
      errors++;
    }
    if (q.chapter !== "Dual Nature of Matter and Radiation") {
      console.error(`ERROR: ${src} chapter is '${q.chapter}'`);
      errors++;
    }
    if (q.subject !== "Physics") {
      console.error(`ERROR: ${src} subject is '${q.subject}'`);
      errors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`ERROR: ${src} invalid marks (${q.marks}, ${q.negativeMarks})`);
      errors++;
    }

    if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`ERROR: ${src} options missing or not length 4`);
        errors++;
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        console.error(`ERROR: ${src} invalid correctAnswer: ${q.correctAnswer}`);
        errors++;
      }
    } else if (q.type === 'NUMERICAL') {
      if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
        console.error(`ERROR: ${src} invalid numerical correctAnswer: ${q.correctAnswer}`);
        errors++;
      }
    } else {
      console.error(`ERROR: ${src} unknown type: ${q.type}`);
      errors++;
    }

    // KaTeX validation
    validateKatex(q.question, `${src} question`);
    if (q.options) {
      q.options.forEach((opt, idx) => validateKatex(opt, `${src} option ${idx}`));
    }
    validateKatex(q.explanation, `${src} explanation`);
  }
}

console.log("\n=========================================");
console.log(`TOTAL QUESTIONS VALIDATED: ${totalQuestions}`);
console.log(`TOTAL ERRORS FOUND: ${errors}`);
console.log("=========================================\n");

if (errors > 0) {
  process.exit(1);
} else {
  console.log("ALL 401 QUESTIONS PASSED VALIDATION WITH 0 ERRORS!");
}
