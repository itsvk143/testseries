const path = require('path');
const katex = require('katex');

const SUBTOPICS = [
  "Bacterial, viral, protozoan, and fungal diseases in humans",
  "Cancer",
  "Common diseases",
  "Drug abuse",
  "Immunity",
  "Innate and acquired immunity, vaccination, and AIDS",
  "Microbes in human welfare",
  "Microbes in sewage treatment, biogas production, and biocontrol"
];

let totalKatexErrors = 0;
let totalQuestionsCount = 0;

function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      totalKatexErrors++;
    }
  }
}

for (let part = 1; part <= 8; part++) {
  const filePath = path.join(__dirname, `data_zoology_biohuman_part${part}.js`);
  const expectedSubtopic = SUBTOPICS[part - 1];
  
  console.log(`\nValidating Part ${part}: ${expectedSubtopic}...`);
  const data = require(filePath);
  
  if (!Array.isArray(data)) {
    console.error(`Part ${part} is not an array!`);
    process.exit(1);
  }
  
  const arList = data.filter(q => q.type === 'ASSERTION_REASON');
  const mcqList = data.filter(q => q.type === 'MCQ');
  
  console.log(`  Count: ${data.length} total (AR: ${arList.length}, MCQ: ${mcqList.length})`);
  
  if (data.length !== 180 || arList.length !== 26 || mcqList.length !== 154) {
    console.error(`  ERROR: Incorrect count in Part ${part}! Expected 180 (26 AR, 154 MCQ)`);
    process.exit(1);
  }
  
  data.forEach((q, idx) => {
    const loc = `Part ${part} Q${idx + 1}`;
    
    if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
      console.error(`  ERROR: Invalid question at ${loc}`);
      process.exit(1);
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`  ERROR: Must have 4 options at ${loc}`);
      process.exit(1);
    }
    q.options.forEach((opt, oIdx) => {
      if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
        console.error(`  ERROR: Empty option ${oIdx} at ${loc}`);
        process.exit(1);
      }
      testKatex(opt, `${loc} opt${oIdx}`);
    });
    
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`  ERROR: Invalid correctAnswer (${q.correctAnswer}) at ${loc}`);
      process.exit(1);
    }
    
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length === 0) {
      console.error(`  ERROR: Invalid explanation at ${loc}`);
      process.exit(1);
    }
    
    if (q.subTopic !== expectedSubtopic) {
      console.error(`  ERROR: Mismatched subTopic at ${loc}: expected "${expectedSubtopic}", got "${q.subTopic}"`);
      process.exit(1);
    }
    if (q.chapter !== "Biology and Human Welfare" || q.subject !== "Zoology") {
      console.error(`  ERROR: Invalid chapter/subject at ${loc}`);
      process.exit(1);
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`  ERROR: Invalid marks/negativeMarks at ${loc}`);
      process.exit(1);
    }
    
    testKatex(q.question, `${loc} question`);
    testKatex(q.explanation, `${loc} explanation`);
  });
  
  totalQuestionsCount += data.length;
}

console.log("\n=================================");
console.log(`TOTAL QUESTIONS VALIDATED: ${totalQuestionsCount}`);
console.log(`TOTAL KATEX ERRORS: ${totalKatexErrors}`);
console.log("=================================");

if (totalQuestionsCount === 1440 && totalKatexErrors === 0) {
  console.log("ALL 8 PARTS FULLY VALIDATED AND READY FOR DATABASE INGESTION!");
} else {
  console.error("VALIDATION FAILED!");
  process.exit(1);
}
