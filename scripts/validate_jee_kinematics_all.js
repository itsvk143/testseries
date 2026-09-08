const fs = require('fs');
const path = require('path');
const katex = require('katex');

const parts = [
  { name: 'Part 1: Graphical analysis', file: 'data_jee_kinematics_part1.js', expected: 53, subTopic: 'Graphical analysis of motion (x-t, v-t graphs)' },
  { name: 'Part 2: Motion in line/plane', file: 'data_jee_kinematics_part2.js', expected: 196, subTopic: 'Motion in a straight line/plane' },
  { name: 'Part 3: Projectile motion', file: 'data_jee_kinematics_part3.js', expected: 196, subTopic: 'Projectile motion' },
  { name: 'Part 4: Relative velocity', file: 'data_jee_kinematics_part4.js', expected: 53, subTopic: 'Relative velocity' },
  { name: 'Part 5: Uniform circular motion', file: 'data_jee_kinematics_part5.js', expected: 53, subTopic: 'Uniform circular motion' },
  { name: 'Part 6: Accelerated motion', file: 'data_jee_kinematics_part6.js', expected: 53, subTopic: 'Uniformly accelerated motion and equations' },
];

function validateMath(text, context) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in [${context}] "${m[1]}": ${err.message}`);
    }
  }
}

let totalQuestions = 0;
let totalKaTeXChecked = 0;

parts.forEach(p => {
  const filePath = path.join(__dirname, p.file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${p.file} not found!`);
  }
  const data = require(filePath);
  if (data.length !== p.expected) {
    throw new Error(`${p.name}: expected ${p.expected} questions, found ${data.length}`);
  }

  data.forEach((q, idx) => {
    totalQuestions++;
    const ctx = `${p.file} Q#${idx + 1}`;

    // Schema checks
    if (q.subTopic !== p.subTopic) {
      throw new Error(`${ctx}: invalid subTopic ${q.subTopic}`);
    }
    if (q.chapter !== 'Kinematics' || q.subject !== 'Physics') {
      throw new Error(`${ctx}: invalid chapter/subject`);
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      throw new Error(`${ctx}: marks/negativeMarks not standardized (4, 1)`);
    }

    // Type-specific checks
    if (q.type === 'ASSERTION_REASON') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`${ctx}: AR options length != 4`);
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        throw new Error(`${ctx}: invalid AR correctAnswer ${q.correctAnswer}`);
      }
    } else if (q.type === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`${ctx}: MCQ options length != 4`);
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        throw new Error(`${ctx}: invalid MCQ correctAnswer ${q.correctAnswer}`);
      }
    } else if (q.type === 'NUMERICAL') {
      if (!Array.isArray(q.options) || q.options.length !== 0) {
        throw new Error(`${ctx}: NUMERICAL options must be empty`);
      }
      if (typeof q.numericalAnswer !== 'number' || isNaN(q.numericalAnswer)) {
        throw new Error(`${ctx}: invalid numericalAnswer ${q.numericalAnswer}`);
      }
      if (q.correctAnswer !== q.numericalAnswer) {
        throw new Error(`${ctx}: correctAnswer !== numericalAnswer`);
      }
    } else {
      throw new Error(`${ctx}: unknown question type ${q.type}`);
    }

    // KaTeX validation
    validateMath(q.question, `${ctx} question`);
    totalKaTeXChecked++;
    q.options.forEach((opt, oIdx) => {
      validateMath(opt, `${ctx} opt ${oIdx}`);
      totalKaTeXChecked++;
    });
    validateMath(q.explanation, `${ctx} explanation`);
    totalKaTeXChecked++;
  });

  console.log(`✓ ${p.name}: ${data.length} questions validated successfully.`);
});

console.log(`\n========================================`);
console.log(`Master validation PASSED!`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total math strings validated: ${totalKaTeXChecked}`);
console.log(`KaTeX errors: 0`);
console.log(`========================================\n`);
