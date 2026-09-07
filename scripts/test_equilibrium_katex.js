const katex = require('katex');
const p1 = require('./data_equilibrium_part1.js');
const p2 = require('./data_equilibrium_part2.js');
const p3 = require('./data_equilibrium_part3.js');

const allGroups = [
  { name: 'Law of chemical equilibrium', qs: p1.getLawOfEquilibriumQuestions() },
  { name: "Le Chatelier's principle", qs: p1.getLeChatelierPrincipleQuestions() },
  { name: 'Chem Eq Part A', qs: p1.getChemicalEquilibriumPartAQuestions() },
  { name: 'Chem Eq Part B', qs: p2.getChemicalEquilibriumPartBQuestions() },
  { name: 'Ionic equilibrium', qs: p2.getIonicEquilibriumQuestions() },
  { name: 'pH', qs: p2.getPHQuestions() },
  { name: 'Salt hydrolysis & acid-base', qs: p3.getSaltHydrolysisAndAcidBaseQuestions() },
  { name: 'Buffer solutions', qs: p3.getBufferSolutionsQuestions() },
  { name: 'Solubility product & common ion', qs: p3.getSolubilityProductQuestions() }
];

let totalQuestions = 0;
let totalMathExpressions = 0;
let errors = [];

function checkText(text, context) {
  if (!text) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    totalMathExpressions++;
    const math = match[1];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (e) {
      errors.push({
        context,
        math,
        error: e.message
      });
    }
  }
}

for (const group of allGroups) {
  console.log(`Checking ${group.name}: ${group.qs.length} questions`);
  totalQuestions += group.qs.length;
  group.qs.forEach((q, idx) => {
    const ctx = `${group.name} Q${idx + 1}`;
    checkText(q.question, `${ctx} question`);
    q.options.forEach((opt, oIdx) => checkText(opt, `${ctx} opt${oIdx + 1}`));
    checkText(q.explanation, `${ctx} explanation`);
  });
}

console.log(`\n--- KaTeX Validation Summary ---`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total math expressions checked: ${totalMathExpressions}`);
console.log(`Total errors found: ${errors.length}`);

if (errors.length > 0) {
  console.error('\nErrors:');
  errors.forEach((err, idx) => {
    console.error(`\n[${idx + 1}] ${err.context}`);
    console.error(`Math: "${err.math}"`);
    console.error(`Error: ${err.error}`);
  });
  process.exit(1);
} else {
  console.log('ALL KATEX EXPRESSIONS RENDERED SUCCESSFULLY WITH 0 ERRORS!');
}
