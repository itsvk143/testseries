// scripts/validate_botany_ecology_all.js
// Validates all 7 parts of generated Botany Ecology questions

const katex = require('katex');

const EXPECTED_SUBTOPICS = [
  'Biodiversity & Conservation',
  'Ecological pyramids',
  'Ecological succession and nutrient cycling (carbon and phosphorus)',
  'Ecosystem Structure',
  'In-situ and ex-situ conservation methods',
  'Organisms and Populations',
  'Population interactions (mutualism, competition, predation, parasitism)'
];

let totalQuestions = 0;
let totalErrors = 0;
let katexErrors = 0;

function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
      totalErrors++;
    }
  }
}

for (let i = 1; i <= 7; i++) {
  const data = require(`./data_botany_ecology_part${i}.js`);
  const expectedSubtopic = EXPECTED_SUBTOPICS[i - 1];

  console.log(`\n--- Validating Part ${i}: "${expectedSubtopic}" ---`);
  console.log(`Questions in part: ${data.length}`);

  if (data.length !== 180) {
    console.error(`Error: Part ${i} has ${data.length} questions, expected 180!`);
    totalErrors++;
  }

  let arCount = 0;
  let mcqCount = 0;

  data.forEach((q, idx) => {
    totalQuestions++;
    const label = `Part ${i} Q${idx + 1}`;

    if (q.subTopic !== expectedSubtopic) {
      console.error(`${label}: subTopic mismatch ("${q.subTopic}" !== "${expectedSubtopic}")`);
      totalErrors++;
    }
    if (q.chapter !== "Ecology and Environment") {
      console.error(`${label}: chapter mismatch ("${q.chapter}")`);
      totalErrors++;
    }
    if (q.subject !== "Botany") {
      console.error(`${label}: subject mismatch ("${q.subject}")`);
      totalErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`${label}: invalid marking marks=${q.marks}, neg=${q.negativeMarks}`);
      totalErrors++;
    }
    if (!q.options || q.options.length !== 4) {
      console.error(`${label}: options length != 4`);
      totalErrors++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`${label}: invalid correctAnswer ${q.correctAnswer}`);
      totalErrors++;
    }
    if (q.type === 'ASSERTION_REASON') {
      arCount++;
      if (q.questionType !== 'Assertion\u2013Reasoning' && q.questionType !== 'Assertion-Reasoning') {
        console.error(`${label}: questionType mismatch for AR ("${q.questionType}")`);
        totalErrors++;
      }
    } else if (q.type === 'MCQ') {
      mcqCount++;
      if (q.questionType !== 'MCQ (Multiple Choice Question)') {
        console.error(`${label}: questionType mismatch for MCQ ("${q.questionType}")`);
        totalErrors++;
      }
    } else {
      console.error(`${label}: unknown type ${q.type}`);
      totalErrors++;
    }

    // Check for bogus calculus/pure math patterns
    const bogusRegex = /(derivative of|d\/dx|\bintegral of\b|\blimit as\b|\bpolynomial\b|governing variables|minimizing free energy|restoring force)/i;
    if (bogusRegex.test(q.question) || bogusRegex.test(q.explanation)) {
      console.error(`${label}: Contains bogus math pattern!`);
      totalErrors++;
    }

    // KaTeX validation
    testKatex(q.question, `${label} question`);
    q.options.forEach((opt, oIdx) => testKatex(opt, `${label} opt${oIdx + 1}`));
    testKatex(q.explanation, `${label} explanation`);
  });

  console.log(`Part ${i} breakdown: ${arCount} AR, ${mcqCount} MCQ`);
  if (arCount !== 26 || mcqCount !== 154) {
    console.error(`Error: Part ${i} counts incorrect! AR: ${arCount}, MCQ: ${mcqCount}`);
    totalErrors++;
  }
}

console.log(`\n================================`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total KaTeX errors: ${katexErrors}`);
console.log(`Total validation errors: ${totalErrors}`);

if (totalErrors === 0 && totalQuestions === 1260) {
  console.log(`\nALL 1,260 QUESTIONS ARE 100% VALID! READY FOR IN-PLACE DATABASE UPDATE.`);
} else {
  console.error(`\nVALIDATION FAILED! Check errors above.`);
  process.exit(1);
}
