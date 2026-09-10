const katex = require('katex');

const parts = [
  { name: "Direction cosines and ratios", data: require('./data_jee_3d_subtopic1.js'), expCount: 30, expMcq: 10, expAr: 10, expNum: 10 },
  { name: "Vector and Cartesian equations of lines", data: require('./data_jee_3d_subtopic2.js'), expCount: 30, expMcq: 10, expAr: 10, expNum: 10 },
  { name: "Angle between two lines", data: require('./data_jee_3d_subtopic3.js'), expCount: 30, expMcq: 10, expAr: 10, expNum: 10 },
  { name: "Distance between parallel lines", data: require('./data_jee_3d_subtopic4.js'), expCount: 18, expMcq: 6, expAr: 6, expNum: 6 },
  { name: "Shortest distance between two skew lines", data: require('./data_jee_3d_subtopic5.js'), expCount: 30, expMcq: 10, expAr: 10, expNum: 10 }
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
  if (part.data.length !== part.expCount) {
    console.error(`  ERROR: Expected ${part.expCount} questions, got ${part.data.length}`);
    totalErrors++;
  }

  const ar = part.data.filter(q => q.type === 'ASSERTION_REASON');
  const mcq = part.data.filter(q => q.type === 'MCQ');
  const num = part.data.filter(q => q.type === 'NUMERICAL');

  if (ar.length !== part.expAr || mcq.length !== part.expMcq || num.length !== part.expNum) {
    console.error(`  ERROR: Counts mismatch: AR=${ar.length} (exp ${part.expAr}), MCQ=${mcq.length} (exp ${part.expMcq}), NUM=${num.length} (exp ${part.expNum})`);
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
      if (q.negativeMarks !== 0) {
        console.error(`  [#${idx}] NUMERICAL should have negativeMarks = 0`);
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
      if (q.negativeMarks !== 1) {
        console.error(`  [#${idx}] ${q.type} should have negativeMarks = 1`);
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
        console.error(`  [#${idx}] KaTeX Error on "$${math}$": ${err.message}`);
        partErrors++;
      }
    }
  });

  if (partErrors === 0) {
    console.log(`  ✓ All ${part.data.length} questions in "${part.name}" validated cleanly!`);
  } else {
    totalErrors += partErrors;
  }
}

console.log(`\n================================`);
console.log(`Validation Complete!`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Duplicates detected: ${duplicates}`);
console.log(`Total errors found: ${totalErrors}`);
console.log(`================================\n`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("SUCCESS: All datasets are 100% valid, properly balanced, and KaTeX-compliant!");
}
