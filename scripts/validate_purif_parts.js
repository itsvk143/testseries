// scripts/validate_purif_parts.js
const katex = require('katex');

const parts = [
  { file: './data_purif_part1.js', subTopic: "Purification techniques" },
  { file: './data_purif_part2.js', subTopic: "Qualitative analysis" },
  { file: './data_purif_part3.js', subTopic: "Quantitative analysis" },
  { file: './data_purif_part4.js', subTopic: "Chromatography (TLC, column chromatography)" },
  { file: './data_purif_part5.js', subTopic: "Calculations of empirical and molecular formulas" }
];

let totalErrors = 0;
let totalQuestions = 0;

function checkKatex(str, loc) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error at ${loc}: "${match[1]}" -> ${e.message}`);
      totalErrors++;
    }
  }
}

parts.forEach(({ file, subTopic }, pIdx) => {
  const data = require(file);
  console.log(`Checking Part ${pIdx + 1}: ${subTopic} (${data.length} questions)...`);

  if (data.length !== 47) {
    console.error(`Error: Expected 47 questions in ${file}, found ${data.length}`);
    totalErrors++;
  }

  const ar = data.slice(0, 26);
  const mcq = data.slice(26, 34);
  const num = data.slice(34, 47);

  if (ar.length !== 26 || !ar.every(q => q.type === 'ASSERTION_REASON')) {
    console.error(`Error: First 26 questions must be ASSERTION_REASON in ${file}`);
    totalErrors++;
  }
  if (mcq.length !== 8 || !mcq.every(q => q.type === 'MCQ')) {
    console.error(`Error: Next 8 questions must be MCQ in ${file}`);
    totalErrors++;
  }
  if (num.length !== 13 || !num.every(q => q.type === 'NUMERICAL')) {
    console.error(`Error: Last 13 questions must be NUMERICAL in ${file}`);
    totalErrors++;
  }

  data.forEach((q, idx) => {
    totalQuestions++;
    const loc = `Part ${pIdx + 1} [${idx}]`;

    if (q.subTopic !== subTopic) {
      console.error(`Mismatch subTopic at ${loc}: ${q.subTopic} vs ${subTopic}`);
      totalErrors++;
    }
    if (q.chapter !== "Purification and Characterisation of Organic Compounds") {
      console.error(`Mismatch chapter at ${loc}: ${q.chapter}`);
      totalErrors++;
    }

    if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`Invalid options length at ${loc}`);
        totalErrors++;
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        console.error(`Invalid correctAnswer at ${loc}: ${q.correctAnswer}`);
        totalErrors++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`Invalid marks/negativeMarks at ${loc}`);
        totalErrors++;
      }
    } else if (q.type === 'NUMERICAL') {
      if (!Array.isArray(q.options) || q.options.length !== 0) {
        console.error(`Numerical options must be empty array at ${loc}`);
        totalErrors++;
      }
      if (typeof q.correctAnswer !== 'string' || q.correctAnswer.trim() === '') {
        console.error(`Invalid numerical correctAnswer at ${loc}: ${q.correctAnswer}`);
        totalErrors++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        console.error(`Invalid numerical marks at ${loc}`);
        totalErrors++;
      }
    }

    checkKatex(q.question, `${loc} question`);
    q.options.forEach((opt, oIdx) => checkKatex(opt, `${loc} opt[${oIdx}]`));
    checkKatex(q.explanation, `${loc} explanation`);
  });
});

console.log(`\n========================================`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total errors found: ${totalErrors}`);
console.log(`========================================\n`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("All 235 questions passed strict schema and KaTeX validation!");
}
