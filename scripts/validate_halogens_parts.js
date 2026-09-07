const katex = require("katex");

const parts = [
  { name: "Part 1: Nature of C–X bond", file: "./data_halogens_part1.js" },
  { name: "Part 2: Nomenclature", file: "./data_halogens_part2.js" },
  { name: "Part 3: Haloalkanes", file: "./data_halogens_part3.js" },
  { name: "Part 4: Haloarenes", file: "./data_halogens_part4.js" },
  { name: "Part 5: Mechanism of substitution", file: "./data_halogens_part5.js" },
  { name: "Part 6: SN1 and SN2 reaction mechanisms", file: "./data_halogens_part6.js" },
  { name: "Part 7: Elimination reactions", file: "./data_halogens_part7.js" },
  { name: "Part 8: Polyhalogen compounds", file: "./data_halogens_part8.js" },
];

function testLatex(text, location) {
  if (!text) return;
  // Match $...$ and $$...$$
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const expr = match[1] || match[2];
    try {
      katex.renderToString(expr, { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX ERROR at [${location}]: "${expr}" -> ${e.message}`);
      return false;
    }
  }
  return true;
}

let totalQuestions = 0;
let errors = 0;

for (const p of parts) {
  const list = require(p.file);
  console.log(`Testing ${p.name}: ${list.length} questions`);
  totalQuestions += list.length;

  list.forEach((q, idx) => {
    const loc = `${p.name} Q#${idx + 1} (${q.type})`;
    if (!testLatex(q.question, `${loc} question`)) errors++;
    if (!testLatex(q.explanation, `${loc} explanation`)) errors++;
    if (q.options) {
      q.options.forEach((opt, oidx) => {
        if (!testLatex(opt, `${loc} option ${oidx}`)) errors++;
      });
    }
    if (q.type === "ASSERTION_REASON" && (!q.options || q.options.length !== 4)) {
      console.error(`Options length mismatch at ${loc}`);
      errors++;
    }
    if (q.type === "MCQ" && (!q.options || q.options.length !== 4)) {
      console.error(`MCQ options length mismatch at ${loc}`);
      errors++;
    }
    if (q.type === "NUMERICAL" && (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "")) {
      console.error(`Numerical answer missing at ${loc}`);
      errors++;
    }
  });
}

console.log(`\n--- SUMMARY ---`);
console.log(`Total questions tested: ${totalQuestions}`);
console.log(`Total errors: ${errors}`);
if (errors === 0) {
  console.log("ALL QUESTIONS PASSED KATEX AND SCHEMA VALIDATION!");
} else {
  process.exit(1);
}
