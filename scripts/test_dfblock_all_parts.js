const katex = require('katex');

const part1 = require('./data_dfblock_part1.js');
const part2 = require('./data_dfblock_part2.js');
const part3 = require('./data_dfblock_part3.js');
const part4 = require('./data_dfblock_part4.js');

const allQuestions = [...part1, ...part2, ...part3, ...part4];

console.log(`Total questions across all 4 parts: ${allQuestions.length}`);

function checkKatex(str, ctx) {
  if (!str) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

const subtopicCounts = {};
let katexErrors = 0;
let arFormatErrors = 0;
let mcqErrors = 0;
let numErrors = 0;

allQuestions.forEach((q, idx) => {
  subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

  // KaTeX check
  try {
    checkKatex(q.question, `Q[${idx}].question`);
    q.options.forEach((opt, oIdx) => checkKatex(opt, `Q[${idx}].options[${oIdx}]`));
    checkKatex(q.explanation, `Q[${idx}].explanation`);
  } catch (e) {
    console.error(e.message);
    katexErrors++;
  }

  // Type-specific checks
  if (q.questionType === "Assertion-Reason") {
    const lines = q.question.split('\n');
    if (lines.length !== 3) {
      console.error(`AR format error at index ${idx}: expected 3 lines, got ${lines.length}`);
      arFormatErrors++;
    } else {
      if (!lines[0].startsWith("Given below are two statements")) {
        console.error(`AR Line 1 invalid at index ${idx}: ${lines[0]}`);
        arFormatErrors++;
      }
      if (!lines[1].startsWith("Assertion (A):")) {
        console.error(`AR Line 2 invalid at index ${idx}: ${lines[1]}`);
        arFormatErrors++;
      }
      if (!lines[2].startsWith("Reason (R):")) {
        console.error(`AR Line 3 invalid at index ${idx}: ${lines[2]}`);
        arFormatErrors++;
      }
    }
    if (q.options.length !== 4) arFormatErrors++;
    if (typeof q.correctOption !== 'number' || q.correctOption < 0 || q.correctOption > 3) arFormatErrors++;
  } else if (q.questionType === "Single Correct Option") {
    if (q.options.length !== 4) {
      console.error(`MCQ options length error at ${idx}: ${q.options.length}`);
      mcqErrors++;
    }
    if (typeof q.correctOption !== 'number' || q.correctOption < 0 || q.correctOption > 3) {
      console.error(`MCQ correctOption error at ${idx}: ${q.correctOption}`);
      mcqErrors++;
    }
  } else if (q.questionType === "Numerical Value Question") {
    if (q.options.length !== 0) {
      console.error(`Numerical options not empty at ${idx}`);
      numErrors++;
    }
    if (!q.correctAnswer || isNaN(Number(q.correctAnswer))) {
      console.error(`Numerical answer not valid number at ${idx}: ${q.correctAnswer}`);
      numErrors++;
    }
    if (q.negativeMarks !== 0) {
      console.error(`Numerical negative marks not 0 at ${idx}`);
      numErrors++;
    }
  }
});

console.log("\nSubtopic Breakdown:");
Object.entries(subtopicCounts).forEach(([st, cnt]) => {
  console.log(`- "${st}": ${cnt}`);
});

console.log(`\nValidation Summary:`);
console.log(`- Total Questions: ${allQuestions.length}`);
console.log(`- KaTeX Errors: ${katexErrors}`);
console.log(`- AR Format Errors: ${arFormatErrors}`);
console.log(`- MCQ Errors: ${mcqErrors}`);
console.log(`- Numerical Errors: ${numErrors}`);

if (katexErrors === 0 && arFormatErrors === 0 && mcqErrors === 0 && numErrors === 0 && allQuestions.length === 726) {
  console.log("\nALL 726 AUTHENTIC QUESTIONS PASS COMPREHENSIVE VALIDATION!");
} else {
  process.exit(1);
}
