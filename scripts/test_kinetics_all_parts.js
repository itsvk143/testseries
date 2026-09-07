const katex = require('katex');
const p1 = require('./data_kinetics_part1.js');
const p2 = require('./data_kinetics_part2.js');
const p3 = require('./data_kinetics_part3.js');
const p4 = require('./data_kinetics_part4.js');

const allDatasets = [
  { name: "Integrated rate equations", data: p1.getIntegratedRateEquationsQuestions(), expected: 47 },
  { name: "Rate of reaction", data: p1.getRateOfReactionQuestions(), expected: 47 },
  { name: "Arrhenius Part A", data: p1.getArrheniusPartAQuestions(), expected: 85 },
  { name: "Arrhenius Part B", data: p2.getArrheniusPartBQuestions(), expected: 83 },
  { name: "Rate law", data: p2.getRateLawQuestions(), expected: 47 },
  { name: "Order of reaction", data: p2.getOrderOfReactionQuestions(), expected: 47 },
  { name: "Catalysis", data: p3.getCatalysisQuestions(), expected: 47 },
  { name: "Collision theory", data: p3.getCollisionTheoryQuestions(), expected: 47 },
  { name: "Half life & activation energy", data: p3.getHalfLifeActivationEnergyQuestions(), expected: 47 },
  { name: "Rate of chemical reaction", data: p4.getRateOfChemicalReactionQuestions(), expected: 274 }
];

let totalQuestions = 0;
let katexErrors = 0;

function testKatex(str, ctx) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX ERROR in ${ctx}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allDatasets.forEach(ds => {
  console.log(`Checking ${ds.name}: count = ${ds.data.length} (expected ${ds.expected})`);
  if (ds.data.length !== ds.expected) {
    console.error(`MISMATCH in ${ds.name}: got ${ds.data.length}, expected ${ds.expected}`);
  }
  totalQuestions += ds.data.length;

  ds.data.forEach((q, idx) => {
    testKatex(q.question, `${ds.name}[${idx}].question`);
    (q.options || []).forEach((opt, optIdx) => {
      testKatex(opt, `${ds.name}[${idx}].options[${optIdx}]`);
    });
    testKatex(q.explanation, `${ds.name}[${idx}].explanation`);
  });
});

console.log(`\n================================`);
console.log(`Total Questions: ${totalQuestions}`);
console.log(`Total KaTeX Errors: ${katexErrors}`);
console.log(`================================\n`);

if (katexErrors > 0 || totalQuestions !== 771) {
  process.exit(1);
} else {
  console.log("ALL 771 QUESTIONS VERIFIED PERFECTLY WITH ZERO KATEX ERRORS!");
}
