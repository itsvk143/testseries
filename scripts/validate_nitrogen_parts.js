const path = require("path");
const katex = require("katex");

function validateKaTeX(text) {
  if (!text) return { valid: true };
  const inlineRegex = /\$([^$]+)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      return { valid: false, error: e.message, math: match[1] };
    }
  }
  return { valid: true };
}

const parts = [
  { file: "data_nitrogen_part1.js", subtopic: "Amines" },
  { file: "data_nitrogen_part2.js", subtopic: "Basicity of amines (gas phase vs aqueous phase)" },
  { file: "data_nitrogen_part3.js", subtopic: "Coupling reactions and synthetic uses of diazonium salts" },
  { file: "data_nitrogen_part4.js", subtopic: "Cyanides" },
  { file: "data_nitrogen_part5.js", subtopic: "Diazonium salts" },
  { file: "data_nitrogen_part6.js", subtopic: "Gabriel phthalimide synthesis and Hoffmann bromamide degradation" },
  { file: "data_nitrogen_part7.js", subtopic: "Isocyanides" }
];

let totalQuestions = 0;
let totalKaTeXErrors = 0;
let schemaErrors = 0;

for (const p of parts) {
  const filePath = path.join(__dirname, p.file);
  const data = require(filePath);
  console.log(`Checking ${p.file} (${p.subtopic})... Count: ${data.length}`);

  if (data.length !== 47) {
    console.error(`ERROR: Expected 47 questions in ${p.file}, got ${data.length}`);
    schemaErrors++;
  }

  let arCount = 0;
  let mcqCount = 0;
  let numCount = 0;

  data.forEach((q, idx) => {
    totalQuestions++;
    if (q.type === "ASSERTION_REASON") arCount++;
    else if (q.type === "MCQ") mcqCount++;
    else if (q.type === "NUMERICAL") numCount++;
    else {
      console.error(`Invalid type ${q.type} at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    if (q.subTopic !== p.subtopic) {
      console.error(`Mismatched subtopic "${q.subTopic}" vs "${p.subtopic}" at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    if (!q.question || q.correctAnswer === undefined || !q.explanation) {
      console.error(`Missing required fields at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    if (q.type === "ASSERTION_REASON" && (!Array.isArray(q.options) || q.options.length !== 4)) {
      console.error(`AR options must be length 4 at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    if (q.type === "MCQ" && (!Array.isArray(q.options) || q.options.length !== 4)) {
      console.error(`MCQ options must be length 4 at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    if (q.type === "NUMERICAL" && (!Array.isArray(q.options) || q.options.length !== 0)) {
      console.error(`Numerical options must be empty array at ${p.file}[${idx}]`);
      schemaErrors++;
    }

    // KaTeX check
    const qK = validateKaTeX(q.question);
    if (!qK.valid) {
      console.error(`KaTeX error in question at ${p.file}[${idx}]:`, qK.error, qK.math);
      totalKaTeXErrors++;
    }
    for (const opt of q.options || []) {
      const oK = validateKaTeX(opt);
      if (!oK.valid) {
        console.error(`KaTeX error in option at ${p.file}[${idx}]:`, oK.error, oK.math);
        totalKaTeXErrors++;
      }
    }
    const eK = validateKaTeX(q.explanation);
    if (!eK.valid) {
      console.error(`KaTeX error in explanation at ${p.file}[${idx}]:`, eK.error, eK.math);
      totalKaTeXErrors++;
    }
  });

  console.log(`  AR: ${arCount}, MCQ: ${mcqCount}, NUM: ${numCount}`);
  if (arCount !== 26 || mcqCount !== 8 || numCount !== 13) {
    console.error(`  ERROR: Incorrect type breakdown in ${p.file}!`);
    schemaErrors++;
  }
}

console.log(`\n========================================`);
console.log(`TOTAL QUESTIONS CHECKED: ${totalQuestions}`);
console.log(`TOTAL KATEX ERRORS: ${totalKaTeXErrors}`);
console.log(`TOTAL SCHEMA ERRORS: ${schemaErrors}`);
console.log(`========================================`);

if (totalKaTeXErrors > 0 || schemaErrors > 0) {
  process.exit(1);
} else {
  console.log("ALL 329 QUESTIONS ARE 100% VALIDATED AND READY FOR DATABASE INGESTION!");
}
