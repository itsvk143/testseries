const katex = require("katex");
const p1 = require("./data_bonding_part1.js");
const p2 = require("./data_bonding_part2.js");
const p3 = require("./data_bonding_part3.js");

const allQuestions = [
  ...p1.getIonicAndCovalentBondsQuestions(),
  ...p1.getResonanceAndFormalChargeQuestions(),
  ...p2.getPolarityQuestions(),
  ...p2.getDipoleMomentAndHydrogenBondingQuestions(),
  ...p2.getVSEPRTheoryQuestions(),
  ...p3.getHybridizationQuestions(),
  ...p3.getMolecularOrbitalTheoryQuestions()
];

console.log("Total questions to test in Chemical Bonding:", allQuestions.length);

let errorCount = 0;

function checkMath(str, context) {
  if (!str) return;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true, displayMode: !!match[1] });
    } catch (err) {
      console.error(`KaTeX error in ${context}: "${math}" -> ${err.message}`);
      errorCount++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  checkMath(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => {
    checkMath(opt, `Q${idx + 1} opt[${oIdx}]`);
  });
  checkMath(q.explanation, `Q${idx + 1} explanation`);
});

if (errorCount === 0) {
  console.log("SUCCESS: All 329 questions passed KaTeX rendering test with 0 errors!");
} else {
  console.error(`FAILURE: Found ${errorCount} KaTeX errors.`);
  process.exit(1);
}
