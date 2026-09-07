const katex = require('katex');

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

const part1 = require('./data_coord_part1');
const part2 = require('./data_coord_part2');
const part3 = require('./data_coord_part3');
const part4 = require('./data_coord_part4');
const part5 = require('./data_coord_part5');
const part6 = require('./data_coord_part6');
const part7 = require('./data_coord_part7');

const parts = [
  { name: "Werner's theory", data: part1, expAR: 26, expMCQ: 44, expNUM: 13, expTotal: 83 },
  { name: "IUPAC nomenclature", data: part2, expAR: 26, expMCQ: 44, expNUM: 13, expTotal: 83 },
  { name: "Isomerism", data: part3, expAR: 26, expMCQ: 43, expNUM: 13, expTotal: 82 },
  { name: "Valence bond theory (VBT)", data: part4, expAR: 26, expMCQ: 44, expNUM: 13, expTotal: 83 },
  { name: "Crystal field theory (CFT) and orbital splitting", data: part5, expAR: 26, expMCQ: 44, expNUM: 13, expTotal: 83 },
  { name: "Bonding in coordination compounds", data: part6, expAR: 26, expMCQ: 44, expNUM: 13, expTotal: 83 },
  { name: "Stability and biological importance of coordination compounds", data: part7, expAR: 25, expMCQ: 44, expNUM: 13, expTotal: 82 },
];

let totalQuestions = 0;
let errors = 0;

parts.forEach((p, pIdx) => {
  console.log(`\nTesting Part ${pIdx + 1}: ${p.name}...`);
  const list = p.data;
  totalQuestions += list.length;
  console.log(`  Count: ${list.length} (Expected: ${p.expTotal})`);

  let arCount = 0;
  let mcqCount = 0;
  let numCount = 0;

  list.forEach((q, idx) => {
    const ctx = `${p.name}[${idx}]`;

    // KaTeX check
    try {
      checkKatex(q.question, `${ctx}.question`);
      q.options.forEach((opt, oIdx) => checkKatex(opt, `${ctx}.options[${oIdx}]`));
      checkKatex(q.explanation, `${ctx}.explanation`);
    } catch (err) {
      console.error(`  ERROR at ${ctx}: ${err.message}`);
      errors++;
    }

    if (q.type === 'ASSERTION_REASON') {
      arCount++;
      const lines = q.question.split('\n');
      if (lines.length !== 3) {
        console.error(`  ERROR at ${ctx}: AR question does not have exactly 3 lines (has ${lines.length})`);
        errors++;
      } else {
        if (!lines[0].startsWith("Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).")) {
          console.error(`  ERROR at ${ctx}: Line 1 invalid AR prompt: "${lines[0]}"`);
          errors++;
        }
        if (!lines[1].startsWith("Assertion (A): ")) {
          console.error(`  ERROR at ${ctx}: Line 2 does not start with Assertion (A): "${lines[1]}"`);
          errors++;
        }
        if (!lines[2].startsWith("Reason (R): ")) {
          console.error(`  ERROR at ${ctx}: Line 3 does not start with Reason (R): "${lines[2]}"`);
          errors++;
        }
      }
      if (q.options.length !== 4) {
        console.error(`  ERROR at ${ctx}: AR options length !== 4`);
        errors++;
      }
      if (q.correctAnswer !== q.options[q.correctOption]) {
        console.error(`  ERROR at ${ctx}: correctAnswer mismatch in AR`);
        errors++;
      }
    } else if (q.type === 'MCQ') {
      mcqCount++;
      if (q.options.length !== 4) {
        console.error(`  ERROR at ${ctx}: MCQ options length !== 4`);
        errors++;
      }
      if (q.correctAnswer !== q.options[q.correctOption]) {
        console.error(`  ERROR at ${ctx}: correctAnswer mismatch in MCQ`);
        errors++;
      }
    } else if (q.type === 'NUMERICAL') {
      numCount++;
      if (q.options.length !== 0) {
        console.error(`  ERROR at ${ctx}: NUM options length !== 0`);
        errors++;
      }
      if (isNaN(Number(q.correctAnswer))) {
        console.error(`  ERROR at ${ctx}: NUM correctAnswer is not a number: ${q.correctAnswer}`);
        errors++;
      }
      if (q.negativeMarks !== 0) {
        console.error(`  ERROR at ${ctx}: NUM negativeMarks !== 0`);
        errors++;
      }
    }
  });

  console.log(`  Breakdown: AR = ${arCount}, MCQ = ${mcqCount}, NUM = ${numCount}`);
  if (arCount !== p.expAR || mcqCount !== p.expMCQ || numCount !== p.expNUM) {
    console.error(`  ERROR: Breakdown mismatch in ${p.name}!`);
    errors++;
  }
});

console.log(`\n========================================`);
console.log(`Total questions across 7 parts: ${totalQuestions} (Expected: 579)`);
console.log(`Total validation errors: ${errors}`);
console.log(`========================================\n`);

if (errors > 0 || totalQuestions !== 579) {
  process.exit(1);
} else {
  console.log("ALL 7 PARTS VERIFIED PERFECTLY (100% PASS)!");
}
