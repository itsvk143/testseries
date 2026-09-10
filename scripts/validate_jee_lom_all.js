const katex = require('katex');

const parts = [
  { name: "Newton's laws", data: require('./data_jee_lom_part1.js') },
  { name: "Friction", data: require('./data_jee_lom_part2.js') },
  { name: "Connected motion and pulley problems", data: require('./data_jee_lom_connected_motion.js') },
  { name: "Conservation of momentum", data: require('./data_jee_lom_part4.js') },
  { name: "Equilibrium of concurrent forces", data: require('./data_jee_lom_concurrent_forces.js') },
  { name: "Impulse", data: require('./data_jee_lom_impulse.js') },
  { name: "Banking of roads", data: require('./data_jee_lom_banking_of_roads.js') }
];

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
  const matches = [];
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(text)) !== null) {
    const expr = match[1] || match[2];
    if (expr && expr.trim()) {
      matches.push(expr.trim());
    }
  }
  return matches;
}

let totalQuestions = 0;
let totalErrors = 0;
const seenTexts = new Map();
let duplicates = 0;

for (const part of parts) {
  console.log(`\nValidating Subtopic: "${part.name}"...`);
  if (part.data.length !== 53) {
    console.error(`  ERROR: Expected 53 questions, got ${part.data.length}`);
    totalErrors++;
  }

  const ar = part.data.filter(q => q.type === 'ASSERTION_REASON');
  const mcq = part.data.filter(q => q.type === 'MCQ');
  const num = part.data.filter(q => q.type === 'NUMERICAL');

  if (ar.length !== 26 || mcq.length !== 7 || num.length !== 20) {
    console.error(`  ERROR: Counts mismatch: AR=${ar.length} (exp 26), MCQ=${mcq.length} (exp 7), NUM=${num.length} (exp 20)`);
    totalErrors++;
  }

  let partErrors = 0;
  part.data.forEach((q, idx) => {
    totalQuestions++;

    // Duplicate check
    const normalized = q.question
      .toLowerCase()
      .replace(/given below are two statements[^\n]*/g, "")
      .replace(/assertion a:?/g, "")
      .replace(/reason r:?/g, "")
      .replace(/[^a-z0-9]/g, "")
      .trim();

    if (seenTexts.has(normalized)) {
      console.warn(`  ⚠️ Duplicate: [${part.name} #${idx}] matches [${seenTexts.get(normalized)}]`);
      duplicates++;
    } else {
      seenTexts.set(normalized, `${part.name} #${idx}`);
    }

    if (!q.question || !q.explanation || q.marks !== 4) {
      console.error(`  [#${idx}] Missing question/explanation or marks != 4`);
      partErrors++;
    }

    if (q.type === 'NUMERICAL') {
      if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
        console.error(`  [#${idx}] NUMERICAL correctAnswer is not a valid number: ${q.correctAnswer}`);
        partErrors++;
      }
      if (q.options && q.options.length !== 0) {
        console.error(`  [#${idx}] NUMERICAL should have empty options`);
        partErrors++;
      }
    } else {
      if (![0, 1, 2, 3].includes(q.correctAnswer)) {
        console.error(`  [#${idx}] ${q.type} invalid correctAnswer: ${q.correctAnswer}`);
        partErrors++;
      }
      if (!q.options || q.options.length !== 4) {
        console.error(`  [#${idx}] ${q.type} options count != 4`);
        partErrors++;
      }
    }

    // KaTeX validation
    const snippets = [
      ...extractLatex(q.question),
      ...extractLatex(q.explanation),
      ...(q.options ? q.options.flatMap(opt => extractLatex(opt)) : [])
    ];

    for (const math of snippets) {
      try {
        katex.renderToString(math, { throwOnError: true });
      } catch (err) {
        console.error(`  [#${idx}] KaTeX Error in math: "${math}": ${err.message}`);
        partErrors++;
      }
    }
  });

  if (partErrors === 0) {
    console.log(`  ✅ Passed! 53 items valid, KaTeX 100% clean.`);
  } else {
    console.error(`  ❌ Failed with ${partErrors} errors.`);
    totalErrors += partErrors;
  }
}

console.log(`\n================================`);
console.log(`TOTAL QUESTIONS CHECKED: ${totalQuestions} (Expected: 371)`);
console.log(`TOTAL ERRORS: ${totalErrors}`);
console.log(`TOTAL DUPLICATES: ${duplicates}`);
console.log(`================================`);

if (totalErrors > 0) {
  process.exit(1);
}
