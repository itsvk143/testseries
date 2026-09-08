const fs = require('fs');
const path = require('path');
const katex = require('katex');

const parts = [
  { name: 'Part 1: Capacitors', file: 'data_jee_electrostatics_part1.js', expected: 196, subTopic: 'Capacitors' },
  { name: 'Part 2: Combination of capacitors', file: 'data_jee_electrostatics_part2.js', expected: 53, subTopic: 'Combination of capacitors and energy stored' },
  { name: 'Part 3: Coulomb\'s law', file: 'data_jee_electrostatics_part3.js', expected: 53, subTopic: 'Coulomb\'s law' },
  { name: 'Part 4: Dielectrics', file: 'data_jee_electrostatics_part4.js', expected: 53, subTopic: 'Dielectrics' },
  { name: 'Part 5: Electric dipole', file: 'data_jee_electrostatics_part5.js', expected: 53, subTopic: 'Electric dipole and dipole moment' },
  { name: 'Part 6: Electric field/flux', file: 'data_jee_electrostatics_part6.js', expected: 53, subTopic: 'Electric field/flux' },
  { name: 'Part 7: Equipotential surfaces', file: 'data_jee_electrostatics_part7.js', expected: 53, subTopic: 'Equipotential surfaces' },
  { name: 'Part 8: Gauss\'s law', file: 'data_jee_electrostatics_part8.js', expected: 53, subTopic: 'Gauss\'s law' },
  { name: 'Part 9: Potential energy', file: 'data_jee_electrostatics_part9.js', expected: 53, subTopic: 'Potential energy' }
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
    if (q.chapter !== 'Electrostatics' || q.subject !== 'Physics') {
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
