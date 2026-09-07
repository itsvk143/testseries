// scripts/validate_botany_repro_all.js
const path = require('path');
const katex = require('katex');

function extractLatex(text) {
  if (!text) return [];
  const matches = [];
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1] || match[2]);
  }
  return matches;
}

function testKatex(text) {
  const snippets = extractLatex(text);
  for (const s of snippets) {
    try {
      katex.renderToString(s, { throwOnError: true });
    } catch (err) {
      return { error: err.message, snippet: s };
    }
  }
  return null;
}

const parts = [
  { num: 1, file: './data_botany_repro_part1.js', subTopic: "Structure of flower and gametophyte development" },
  { num: 2, file: './data_botany_repro_part2.js', subTopic: "Pollination mechanisms and outbreeding devices" },
  { num: 3, file: './data_botany_repro_part3.js', subTopic: "Double fertilization and triple fusion" },
  { num: 4, file: './data_botany_repro_part4.js', subTopic: "Development of endosperm, embryo, and seed" },
  { num: 5, file: './data_botany_repro_part5.js', subTopic: "Apomixis and polyembryony" }
];

let totalQuestions = 0;
let totalErrors = 0;
let totalKatexErrors = 0;

console.log("=== VALIDATING ALL 5 PARTS OF REPRODUCTION IN PLANTS ===");

for (const p of parts) {
  const data = require(p.file);
  console.log(`\nValidating Part ${p.num}: ${p.subTopic} (${data.length} questions)...`);

  if (data.length !== 180) {
    console.error(`ERROR: Expected 180 questions, got ${data.length}`);
    totalErrors++;
  }

  const ar = data.filter(q => q.type === 'ASSERTION_REASON');
  const mcq = data.filter(q => q.type === 'MCQ');
  console.log(`  AR count: ${ar.length}, MCQ count: ${mcq.length}`);

  if (ar.length !== 26 || mcq.length !== 154) {
    console.error(`ERROR in distribution: Expected 26 AR, 154 MCQ!`);
    totalErrors++;
  }

  data.forEach((q, idx) => {
    totalQuestions++;
    // Schema check
    if (!q.question || !q.options || q.options.length !== 4 || q.correctAnswer === undefined || !q.explanation) {
      console.error(`  Schema error at index ${idx}`);
      totalErrors++;
    }
    if (q.subTopic !== p.subTopic) {
      console.error(`  SubTopic mismatch at index ${idx}: ${q.subTopic}`);
      totalErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`  Marks mismatch at index ${idx}`);
      totalErrors++;
    }

    // KaTeX check
    const fields = [q.question, ...q.options, q.explanation];
    for (const f of fields) {
      const err = testKatex(f);
      if (err) {
        console.error(`  KaTeX error at Part ${p.num} Q${idx + 1}: ${err.error} in "${err.snippet}"`);
        totalKatexErrors++;
      }
    }
  });
}

console.log("\n================ VALIDATION SUMMARY ================");
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total schema / count errors: ${totalErrors}`);
console.log(`Total KaTeX errors: ${totalKatexErrors}`);

if (totalErrors === 0 && totalKatexErrors === 0 && totalQuestions === 900) {
  console.log("\n>>> ALL 900 QUESTIONS VALIDATED WITH 100% EXCELLENCE! <<<");
} else {
  console.error("\n>>> VALIDATION FAILED! <<<");
  process.exit(1);
}
