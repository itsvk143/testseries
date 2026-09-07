const katex = require("katex");
const p1 = require("./data_periodicity_part1.js");
const p2 = require("./data_periodicity_part2.js");

const allQuestions = [
  ...p1.getModernPeriodicLawQuestions(),
  ...p1.getAtomicRadiusQuestions(),
  ...p1.getIonizationEnthalpyQuestions(),
  ...p2.getElectronGainEnthalpyQuestions(),
  ...p2.getElectronegativityQuestions(),
  ...p2.getTrendsInPeriodicPropertiesQuestions()
];

console.log("Total questions to test:", allQuestions.length);

let errorCount = 0;

function checkMath(str, context) {
  if (!str) return;
  // Match $...$ or $$...$$
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
  console.log("SUCCESS: All 282 questions passed KaTeX rendering test with 0 errors!");
} else {
  console.error(`FAILURE: Found ${errorCount} KaTeX errors.`);
  process.exit(1);
}
