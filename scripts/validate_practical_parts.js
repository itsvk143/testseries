const katex = require("katex");
const path = require("path");

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
  { file: "data_practical_part1.js", subtopic: "Detection of elements", expected: 47, ar: 26, mcq: 8, num: 13 },
  { file: "data_practical_part2.js", subtopic: "Preparation of compounds", expected: 47, ar: 26, mcq: 8, num: 13 },
  { file: "data_practical_part3.js", subtopic: "Purification methods", expected: 47, ar: 26, mcq: 8, num: 13 },
  { file: "data_practical_part4.js", subtopic: "Qualitative analysis", expected: 25, ar: 14, mcq: 8, num: 3 },
  { file: "data_practical_part5.js", subtopic: "Salt analysis (cation and anion systematic detection)", expected: 47, ar: 26, mcq: 8, num: 13 },
  { file: "data_practical_part6.js", subtopic: "Volumetric titration (acid-base and redox titration)", expected: 47, ar: 26, mcq: 8, num: 13 }
];

let totalQuestions = 0;
let totalKaTeXErrors = 0;
let schemaErrors = 0;

for (const p of parts) {
  const filePath = path.join(__dirname, p.file);
  const data = require(filePath);
  console.log(`Checking ${p.file}: ${data.length} questions (expected ${p.expected})`);

  if (data.length !== p.expected) {
    console.error(`Count mismatch in ${p.file}: got ${data.length}, expected ${p.expected}`);
    schemaErrors++;
  }

  let arCount = 0, mcqCount = 0, numCount = 0;

  data.forEach((q, idx) => {
    totalQuestions++;

    if (q.subTopic !== p.subtopic) {
      console.error(`Subtopic mismatch in ${p.file}[${idx}]: ${q.subTopic} vs ${p.subtopic}`);
      schemaErrors++;
    }
    if (q.chapter !== "Principles Related to Practical Chemistry") {
      console.error(`Chapter mismatch in ${p.file}[${idx}]: ${q.chapter}`);
      schemaErrors++;
    }
    if (q.marks !== 4) {
      console.error(`Marks mismatch in ${p.file}[${idx}]: ${q.marks}`);
      schemaErrors++;
    }

    if (q.type === "ASSERTION_REASON") {
      arCount++;
      if (q.negativeMarks !== 1) schemaErrors++;
      if (!Array.isArray(q.options) || q.options.length !== 4) schemaErrors++;
      if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) schemaErrors++;
    } else if (q.type === "MCQ") {
      mcqCount++;
      if (q.negativeMarks !== 1) schemaErrors++;
      if (!Array.isArray(q.options) || q.options.length !== 4) schemaErrors++;
      if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) schemaErrors++;
    } else if (q.type === "NUMERICAL") {
      numCount++;
      if (q.negativeMarks !== 0) schemaErrors++;
      if (!Array.isArray(q.options) || q.options.length !== 0) schemaErrors++;
      if (typeof q.correctAnswer !== "string" || isNaN(Number(q.correctAnswer))) {
        console.error(`Invalid numerical correctAnswer in ${p.file}[${idx}]:`, q.correctAnswer);
        schemaErrors++;
      }
    } else {
      console.error(`Unknown type in ${p.file}[${idx}]: ${q.type}`);
      schemaErrors++;
    }

    // KaTeX validation
    const texts = [q.question, ...(q.options || []), q.explanation];
    for (const t of texts) {
      const res = validateKaTeX(t);
      if (!res.valid) {
        console.error(`KaTeX error in ${p.file}[${idx}]:`, res.error, "math:", res.math);
        totalKaTeXErrors++;
      }
    }
  });

  console.log(`  -> Counts: AR=${arCount} (exp ${p.ar}), MCQ=${mcqCount} (exp ${p.mcq}), NUM=${numCount} (exp ${p.num})`);
  if (arCount !== p.ar || mcqCount !== p.mcq || numCount !== p.num) {
    console.error(`Type breakdown mismatch in ${p.file}`);
    schemaErrors++;
  }
}

console.log("==========================================");
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total KaTeX errors: ${totalKaTeXErrors}`);
console.log(`Total schema errors: ${schemaErrors}`);
console.log("==========================================");

if (totalQuestions === 260 && totalKaTeXErrors === 0 && schemaErrors === 0) {
  console.log("ALL 260 QUESTIONS VALIDATED PERFECTLY!");
  process.exit(0);
} else {
  console.error("VALIDATION FAILED!");
  process.exit(1);
}
