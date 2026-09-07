const katex = require('katex');

const p1 = require('./data_redox_part1.js');
const p2 = require('./data_redox_part2.js');
const p3 = require('./data_redox_part3.js');
const p4 = require('./data_redox_part4.js');

function checkKatex(str, ctx) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

const allQuestions = [
  ...p1.getOxidationNumberQuestions(),
  ...p1.getBalancingRedoxQuestions(),
  ...p1.getConductivityQuestions(),
  ...p2.getNernstEquationQuestions(),
  ...p2.getFaradayLawsQuestions(),
  ...p2.getBatteriesCorrosionQuestions(),
  ...p3.getBatteriesAndFuelCellsQuestions(),
  ...p3.getConductanceInElectrolyticSolutionsQuestions(),
  ...p3.getCorrosionQuestions(),
  ...p3.getElectrolysisAndFaradayLawsQuestions(),
  ...p3.getNernstEquationAndCellPotentialQuestions(),
  ...p3.getKohlrauschLawQuestions(),
  ...p4.getElectrochemicalCellsQuestions()
];

console.log(`Total questions across all 4 parts: ${allQuestions.length} (Expected: 786)`);
if (allQuestions.length !== 786) {
  throw new Error(`Expected 786 questions, found ${allQuestions.length}`);
}

let katexCount = 0;
allQuestions.forEach((q, idx) => {
  checkKatex(q.question, `Q[${idx}].question`);
  q.options.forEach((o, oidx) => checkKatex(o, `Q[${idx}].options[${oidx}]`));
  checkKatex(q.explanation, `Q[${idx}].explanation`);
  katexCount++;

  if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
    if (!q.options || q.options.length !== 4) {
      throw new Error(`Invalid options length at Q[${idx}]`);
    }
    if (q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`Invalid correctAnswer at Q[${idx}]`);
    }
  } else if (q.type === 'NUMERICAL') {
    if (!q.correctAnswer || typeof q.correctAnswer !== 'string') {
      throw new Error(`Invalid numerical correctAnswer at Q[${idx}]`);
    }
  }
});

console.log(`All ${katexCount} questions passed KaTeX and schema verification with 0 errors!`);
