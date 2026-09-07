// scripts/validate_botany_div_all.js
const katex = require('katex');

const parts = [
  { file: './data_botany_div_part1.js', subTopic: "Algae", expectedAR: 25, expectedMCQ: 155 },
  { file: './data_botany_div_part2.js', subTopic: "Angiosperms", expectedAR: 26, expectedMCQ: 154 },
  { file: './data_botany_div_part3.js', subTopic: "Biological Classification", expectedAR: 25, expectedMCQ: 155 },
  { file: './data_botany_div_part4.js', subTopic: "Bryophytes", expectedAR: 26, expectedMCQ: 154 },
  { file: './data_botany_div_part5.js', subTopic: "Five kingdom classification system", expectedAR: 26, expectedMCQ: 154 },
  { file: './data_botany_div_part6.js', subTopic: "Gymnosperms", expectedAR: 26, expectedMCQ: 154 },
  { file: './data_botany_div_part7.js', subTopic: "Plant Kingdom", expectedAR: 25, expectedMCQ: 155 },
  { file: './data_botany_div_part8.js', subTopic: "Pteridophytes", expectedAR: 26, expectedMCQ: 154 },
  { file: './data_botany_div_part9.js', subTopic: "Viruses, viroids, prions, and lichens", expectedAR: 26, expectedMCQ: 154 }
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

parts.forEach(({ file, subTopic, expectedAR, expectedMCQ }, pIdx) => {
  const data = require(file);
  console.log(`Checking Part ${pIdx + 1}: ${subTopic} (${data.length} questions)...`);

  if (data.length !== 180) {
    console.error(`Error: Expected 180 questions in ${file}, found ${data.length}`);
    totalErrors++;
  }

  const ar = data.slice(0, expectedAR);
  const mcq = data.slice(expectedAR);

  if (ar.length !== expectedAR || !ar.every(q => q.type === 'ASSERTION_REASON')) {
    console.error(`Error: First ${expectedAR} questions must be ASSERTION_REASON in ${file}`);
    totalErrors++;
  }
  if (mcq.length !== expectedMCQ || !mcq.every(q => q.type === 'MCQ')) {
    console.error(`Error: Remaining ${expectedMCQ} questions must be MCQ in ${file}`);
    totalErrors++;
  }

  data.forEach((q, idx) => {
    totalQuestions++;
    const loc = `Part ${pIdx + 1} [${idx}]`;

    if (q.subTopic !== subTopic) {
      console.error(`Mismatch subTopic at ${loc}: ${q.subTopic} vs ${subTopic}`);
      totalErrors++;
    }
    if (q.chapter !== "Diversity in Living World") {
      console.error(`Mismatch chapter at ${loc}: ${q.chapter}`);
      totalErrors++;
    }
    if (q.subject !== "Botany") {
      console.error(`Mismatch subject at ${loc}: ${q.subject}`);
      totalErrors++;
    }

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
  console.log("All 1,620 questions passed strict schema and KaTeX validation!");
}
