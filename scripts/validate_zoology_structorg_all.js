// scripts/validate_zoology_structorg_all.js
const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPICS = [
  "Anatomy of flowering plants",
  "Animal tissues",
  "Cockroach anatomy and morphology",
  "Epithelial, connective, muscular, and neural tissues in animals",
  "Frog morphology and anatomy",
  "Morphology of flowering plants"
];

let totalQuestions = 0;
let totalAR = 0;
let totalMCQ = 0;
let totalKatexErrors = 0;
let schemaErrors = 0;

function checkKatex(str, loc) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error at ${loc}: "${match[1]}" -> ${e.message}`);
      totalKatexErrors++;
    }
  }
}

SUBTOPICS.forEach((st, idx) => {
  const partNum = idx + 1;
  const filePath = path.join(__dirname, `data_zoology_structorg_part${partNum}.js`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    schemaErrors++;
    return;
  }
  const data = require(filePath);
  if (!Array.isArray(data)) {
    console.error(`File ${filePath} does not export an array`);
    schemaErrors++;
    return;
  }

  let arCount = 0;
  let mcqCount = 0;

  data.forEach((q, qIdx) => {
    totalQuestions++;
    const loc = `Part ${partNum} Q${qIdx + 1}`;

    if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
      console.error(`${loc}: missing or empty question`);
      schemaErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`${loc}: options must be array of 4`);
      schemaErrors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
          console.error(`${loc}: empty option ${oIdx + 1}`);
          schemaErrors++;
        }
        checkKatex(opt, `${loc} opt ${oIdx + 1}`);
      });
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`${loc}: invalid correctAnswer ${q.correctAnswer}`);
      schemaErrors++;
    }
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length === 0) {
      console.error(`${loc}: missing explanation`);
      schemaErrors++;
    }
    if (q.subTopic !== st) {
      console.error(`${loc}: subTopic mismatch, expected "${st}", got "${q.subTopic}"`);
      schemaErrors++;
    }
    if (q.chapter !== "Structural Organisation in Animals and Plants" || q.subject !== "Zoology") {
      console.error(`${loc}: chapter/subject mismatch`);
      schemaErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`${loc}: marks mismatch`);
      schemaErrors++;
    }

    if (q.type === "ASSERTION_REASON") {
      arCount++;
      totalAR++;
      if (q.questionType !== "Assertion\u2013Reasoning") {
        console.error(`${loc}: expected questionType "Assertion\u2013Reasoning", got "${q.questionType}"`);
        schemaErrors++;
      }
    } else if (q.type === "MCQ") {
      mcqCount++;
      totalMCQ++;
      if (q.questionType !== "MCQ (Multiple Choice Question)") {
        console.error(`${loc}: expected questionType "MCQ (Multiple Choice Question)", got "${q.questionType}"`);
        schemaErrors++;
      }
    } else {
      console.error(`${loc}: unknown type "${q.type}"`);
      schemaErrors++;
    }

    checkKatex(q.question, `${loc} question`);
    checkKatex(q.explanation, `${loc} explanation`);
  });

  console.log(`Part ${partNum} ("${st}"): ${data.length} questions (AR: ${arCount}, MCQ: ${mcqCount})`);
  if (data.length !== 180 || arCount !== 26 || mcqCount !== 154) {
    console.error(`Part ${partNum} count mismatch! Expected 180 (26 AR + 154 MCQ), got ${data.length} (${arCount} AR + ${mcqCount} MCQ)`);
    schemaErrors++;
  }
});

console.log("\n=== MASTER VALIDATION SUMMARY ===");
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total Assertion-Reason: ${totalAR} (expected: ${26 * 6} = 154)`);
console.log(`Total MCQ: ${totalMCQ} (expected: ${154 * 6} = 924)`);
console.log(`Schema errors: ${schemaErrors}`);
console.log(`KaTeX errors: ${totalKatexErrors}`);

if (schemaErrors === 0 && totalKatexErrors === 0 && totalQuestions === 1080 && totalAR === 156 && totalMCQ === 924) {
  console.log("\n>>> ALL 1,080 QUESTIONS VALIDATED PERFECTLY WITH ZERO ERRORS! <<<");
} else {
  console.error("\n>>> MASTER VALIDATION FAILED! <<<");
  process.exit(1);
}
