const path = require('path');
const katex = require('katex');

function validateKatexInText(text, context) {
  if (!text || typeof text !== 'string') return;
  const inlineRegex = /\$([^\$]+?)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    const math = match[1].trim();
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      throw new Error(`[KaTeX Error in ${context}] Math: "${math}" -> ${err.message}`);
    }
  }
}

const subtopicsExpected = [
  { part: 1, subTopic: "Prokaryotic and eukaryotic cell ultrastructure" },
  { part: 2, subTopic: "Cell membrane and fluid mosaic model" },
  { part: 3, subTopic: "Cell organelles" },
  { part: 4, subTopic: "Biomolecules" },
  { part: 5, subTopic: "Cell cycle regulation and checkpoints" },
  { part: 6, subTopic: "Cell life & division" },
  { part: 7, subTopic: "Mitosis" },
  { part: 8, subTopic: "Meiosis" }
];

let grandTotal = 0;
let totalAR = 0;
let totalMCQ = 0;
let errors = 0;

for (const item of subtopicsExpected) {
  const filePath = path.join(__dirname, `data_botany_cell_part${item.part}.js`);
  const data = require(filePath);

  console.log(`\nValidating Part ${item.part}: "${item.subTopic}" (${data.length} questions)...`);

  if (!Array.isArray(data) || data.length !== 180) {
    console.error(`Part ${item.part} has invalid length: ${data?.length} (expected 180)`);
    errors++;
  }

  let arCount = 0;
  let mcqCount = 0;

  data.forEach((q, idx) => {
    grandTotal++;
    if (q.type === 'ASSERTION_REASON') arCount++;
    else if (q.type === 'MCQ') mcqCount++;

    if (idx < 26 && q.type !== 'ASSERTION_REASON') {
      console.error(`Part ${item.part} Q#${idx + 1} expected ASSERTION_REASON, found ${q.type}`);
      errors++;
    }
    if (idx >= 26 && q.type !== 'MCQ') {
      console.error(`Part ${item.part} Q#${idx + 1} expected MCQ, found ${q.type}`);
      errors++;
    }

    if (!q.question || q.question.trim().length < 15) {
      console.error(`Part ${item.part} Q#${idx + 1} question too short`);
      errors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`Part ${item.part} Q#${idx + 1} options length !== 4`);
      errors++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`Part ${item.part} Q#${idx + 1} invalid correctAnswer: ${q.correctAnswer}`);
      errors++;
    }
    if (!q.explanation || q.explanation.trim().length < 20) {
      console.error(`Part ${item.part} Q#${idx + 1} explanation too short`);
      errors++;
    }
    if (q.subTopic !== item.subTopic) {
      console.error(`Part ${item.part} Q#${idx + 1} subTopic mismatch: "${q.subTopic}" vs "${item.subTopic}"`);
      errors++;
    }
    if (q.chapter !== 'Cell Structure and Function' || q.subject !== 'Botany') {
      console.error(`Part ${item.part} Q#${idx + 1} chapter/subject mismatch`);
      errors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`Part ${item.part} Q#${idx + 1} marks/negativeMarks invalid`);
      errors++;
    }

    try {
      validateKatexInText(q.question, `Part ${item.part} Q#${idx + 1} question`);
      q.options.forEach((opt, oIdx) => validateKatexInText(opt, `Part ${item.part} Q#${idx + 1} opt#${oIdx + 1}`));
      validateKatexInText(q.explanation, `Part ${item.part} Q#${idx + 1} explanation`);
    } catch (err) {
      console.error(err.message);
      errors++;
    }
  });

  console.log(`  Part ${item.part} passed: 180 questions (AR: ${arCount}, MCQ: ${mcqCount})`);
  totalAR += arCount;
  totalMCQ += mcqCount;
}

console.log('\n========================================');
console.log(`MASTER VALIDATION COMPLETE`);
console.log(`Total questions checked: ${grandTotal} (AR: ${totalAR}, MCQ: ${totalMCQ})`);
console.log(`Total errors: ${errors}`);
console.log('========================================');

if (errors > 0) {
  process.exit(1);
}
