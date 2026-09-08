// scripts/validate_zoology_physio_all.js
const katex = require('katex');
const path = require('path');

const PARTS = [
  { file: 'data_zoology_physio_part1.js', subTopic: "Body Fluids & Circulation" },
  { file: 'data_zoology_physio_part2.js', subTopic: "Breathing & Exchange of Gases" },
  { file: 'data_zoology_physio_part3.js', subTopic: "Cardiac cycle, ECG, and blood grouping (ABO and Rh)" },
  { file: 'data_zoology_physio_part4.js', subTopic: "Chemical Coordination & Integration" },
  { file: 'data_zoology_physio_part5.js', subTopic: "Conduction of nerve impulse and reflex action" },
  { file: 'data_zoology_physio_part6.js', subTopic: "Endocrine glands and hormones action" },
  { file: 'data_zoology_physio_part7.js', subTopic: "Excretory Products & Elimination" },
  { file: 'data_zoology_physio_part8.js', subTopic: "Locomotion & Movement" },
  { file: 'data_zoology_physio_part9.js', subTopic: "Mechanism of breathing and gas transport (O2-Hb dissociation curve)" },
  { file: 'data_zoology_physio_part10.js', subTopic: "Nephron structure and counter-current mechanism" },
  { file: 'data_zoology_physio_part11.js', subTopic: "Neural Control & Coordination" }
];

let totalQuestions = 0;
let totalErrors = 0;

function checkKatex(str, label) {
  if (!str) return;
  const regex = /\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      totalErrors++;
    }
  }
}

PARTS.forEach((p, pIdx) => {
  const filePath = path.join(__dirname, p.file);
  const data = require(filePath);
  console.log(`Checking Part ${pIdx + 1}: ${p.subTopic} (${data.length} questions)...`);

  if (data.length !== 180) {
    console.error(`Part ${pIdx + 1} has ${data.length} questions, expected 180!`);
    totalErrors++;
  }

  const arCount = data.filter(q => q.type === 'ASSERTION_REASON').length;
  const mcqCount = data.filter(q => q.type === 'MCQ').length;
  if (arCount !== 26 || mcqCount !== 154) {
    console.error(`Part ${pIdx + 1} has unexpected type split: AR=${arCount}, MCQ=${mcqCount}`);
    totalErrors++;
  }

  data.forEach((q, qIdx) => {
    totalQuestions++;
    const label = `Part ${pIdx + 1} Q${qIdx + 1}`;

    if (!q.question || typeof q.question !== 'string') {
      console.error(`Missing or invalid question in ${label}`);
      totalErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`Options must be array of 4 in ${label}`);
      totalErrors++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`Invalid correctAnswer in ${label}`);
      totalErrors++;
    }
    if (!q.explanation || typeof q.explanation !== 'string') {
      console.error(`Missing explanation in ${label}`);
      totalErrors++;
    }
    if (q.subTopic !== p.subTopic) {
      console.error(`subTopic mismatch in ${label}: got "${q.subTopic}", expected "${p.subTopic}"`);
      totalErrors++;
    }
    if (q.chapter !== "Human Physiology" || q.subject !== "Zoology") {
      console.error(`Chapter/Subject mismatch in ${label}`);
      totalErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`Marks mismatch in ${label}`);
      totalErrors++;
    }

    checkKatex(q.question, `${label} question`);
    q.options.forEach((opt, oIdx) => checkKatex(opt, `${label} opt${oIdx + 1}`));
    checkKatex(q.explanation, `${label} explanation`);
  });
});

console.log(`\n================================`);
console.log(`Master Validation Summary:`);
console.log(`Total Questions Validated: ${totalQuestions}`);
console.log(`Total Errors Detected: ${totalErrors}`);
console.log(`================================`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("All 1,980 questions across all 11 subtopics PASSED validation with 0 errors!");
}
