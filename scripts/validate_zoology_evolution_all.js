const path = require('path');
const katex = require('katex');

const SUBTOPICS = [
  "Origin of life and biochemical evolution (Miller-Urey experiment)",
  "Evidences of evolution (homology, analogy, vestigial organs, embryology)",
  "Adaptive radiation and Speciation",
  "Darwin's theory of natural selection and Lamarckism",
  "Modern synthetic theory and Hardy-Weinberg equilibrium",
  "Human evolution (Dryopithecus to Homo sapiens)"
];

let totalQuestions = 0;
let totalAR = 0;
let totalMCQ = 0;
let totalKatexErrors = 0;
let validationErrors = [];

function testKatex(text, label) {
  if (!text) return;
  const matches = text.matchAll(/\$([^\$]+)\$/g);
  for (const match of matches) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      totalKatexErrors++;
    }
  }
}

SUBTOPICS.forEach((subtopic, index) => {
  const partNum = index + 1;
  const filePath = path.join(__dirname, `data_zoology_evolution_part${partNum}.js`);
  const data = require(filePath);

  console.log(`\n--- Auditing Part ${partNum}: "${subtopic}" ---`);
  console.log(`Loaded ${data.length} questions from ${filePath}`);

  if (data.length !== 180) {
    validationErrors.push(`Part ${partNum}: expected 180 questions, found ${data.length}`);
  }

  let arCount = 0;
  let mcqCount = 0;

  data.forEach((q, qIdx) => {
    totalQuestions++;
    const qLabel = `Part ${partNum} Q${qIdx + 1}`;

    // Schema checks
    if (!q.question || typeof q.question !== 'string') validationErrors.push(`${qLabel}: missing question`);
    if (!Array.isArray(q.options) || q.options.length !== 4) validationErrors.push(`${qLabel}: options not 4`);
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) validationErrors.push(`${qLabel}: invalid correctAnswer ${q.correctAnswer}`);
    if (!q.explanation || typeof q.explanation !== 'string') validationErrors.push(`${qLabel}: missing explanation`);
    if (q.subTopic !== subtopic) validationErrors.push(`${qLabel}: subTopic mismatch. Expected "${subtopic}", got "${q.subTopic}"`);
    if (q.chapter !== 'Evolution') validationErrors.push(`${qLabel}: chapter mismatch "${q.chapter}"`);
    if (q.subject !== 'Zoology') validationErrors.push(`${qLabel}: subject mismatch "${q.subject}"`);
    if (q.marks !== 4) validationErrors.push(`${qLabel}: marks mismatch ${q.marks}`);
    if (q.negativeMarks !== 1) validationErrors.push(`${qLabel}: negativeMarks mismatch ${q.negativeMarks}`);

    if (q.type === 'ASSERTION_REASON') {
      arCount++;
      totalAR++;
      if (q.questionType !== 'Assertion–Reasoning') validationErrors.push(`${qLabel}: questionType mismatch for AR`);
    } else if (q.type === 'MCQ') {
      mcqCount++;
      totalMCQ++;
      if (q.questionType !== 'MCQ (Multiple Choice Question)') validationErrors.push(`${qLabel}: questionType mismatch for MCQ`);
    } else {
      validationErrors.push(`${qLabel}: unknown type ${q.type}`);
    }

    // KaTeX validation
    testKatex(q.question, `${qLabel} question`);
    q.options.forEach((opt, oIdx) => testKatex(opt, `${qLabel} opt${oIdx + 1}`));
    testKatex(q.explanation, `${qLabel} explanation`);
  });

  console.log(`Part ${partNum} breakdown: ${arCount} AR, ${mcqCount} MCQ`);
  if (arCount !== 26) validationErrors.push(`Part ${partNum}: expected 26 AR, found ${arCount}`);
  if (mcqCount !== 154) validationErrors.push(`Part ${partNum}: expected 154 MCQ, found ${mcqCount}`);
});

console.log("\n==========================================");
console.log("MASTER VALIDATION SUMMARY");
console.log("==========================================");
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total AR questions:      ${totalAR}`);
console.log(`Total MCQ questions:     ${totalMCQ}`);
console.log(`Total KaTeX errors:      ${totalKatexErrors}`);
console.log(`Schema/Logic errors:     ${validationErrors.length}`);

if (validationErrors.length > 0) {
  console.error("Errors found:", validationErrors);
  process.exit(1);
} else if (totalKatexErrors > 0) {
  console.error("KaTeX errors found!");
  process.exit(1);
} else {
  console.log("SUCCESS: All 1,080 questions are 100% verified and ready for DB replacement!");
}
