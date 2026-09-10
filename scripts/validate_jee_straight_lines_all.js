const katex = require("katex");
function getArray(mod) {
  if (Array.isArray(mod)) return mod;
  return Object.values(mod).find(v => Array.isArray(v)) || [];
}

const repairedGenuine = getArray(require("./repaired_genuine_straight_lines"));
const subtopic1 = getArray(require("./data_jee_straight_lines_subtopic1"));
const subtopic2 = getArray(require("./data_jee_straight_lines_subtopic2"));
const subtopic3 = getArray(require("./data_jee_straight_lines_subtopic3"));
const subtopic4 = getArray(require("./data_jee_straight_lines_subtopic4"));
const subtopic5 = getArray(require("./data_jee_straight_lines_subtopic5"));
const subtopic6 = getArray(require("./data_jee_straight_lines_subtopic6"));

console.log("--- Starting Pre-flight Validation for Straight Lines Questions ---");

const allDatasets = [
  { name: "Repaired Genuine", questions: repairedGenuine, expectedCount: 42 },
  { name: "Subtopic 1: Angle between lines", questions: subtopic1, expectedCount: 30 },
  { name: "Subtopic 2: Concurrent lines", questions: subtopic2, expectedCount: 30 },
  { name: "Subtopic 3: Distance between parallel lines", questions: subtopic3, expectedCount: 30 },
  { name: "Subtopic 4: Family of lines and angular bisectors", questions: subtopic4, expectedCount: 30 },
  { name: "Subtopic 5: Perpendicular distance", questions: subtopic5, expectedCount: 30 },
  { name: "Subtopic 6: Slope and intercept forms", questions: subtopic6, expectedCount: 30 }
];

let totalQuestions = 0;
let errors = [];
const seenQuestions = new Map();

function validateKaTeX(text, context) {
  if (!text || typeof text !== "string") return;
  // Extract math between $...$ and $$...$$
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(text)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      errors.push(`KaTeX Error in ${context}: "${math}" -> ${err.message}`);
    }
  }
}

const BOGUS_KEYWORDS = [
  "Carnot", "adiabatic", "isothermal", "entropy", "refrigerator",
  "heat pump", "first law of thermodynamics", "Kelvin", "ideal gas",
  "Otto cycle", "thermodynamic", "engine", "enthalpy"
];

allDatasets.forEach(dataset => {
  console.log(`Checking ${dataset.name}: ${dataset.questions.length} questions...`);
  if (dataset.questions.length !== dataset.expectedCount) {
    errors.push(`${dataset.name} count mismatch! Expected ${dataset.expectedCount}, got ${dataset.questions.length}`);
  }

  dataset.questions.forEach((q, idx) => {
    totalQuestions++;
    const qLabel = `${dataset.name} [Q#${idx + 1}]`;

    // 1. Check duplicate text
    const normText = q.question.replace(/\s+/g, " ").trim().toLowerCase();
    if (seenQuestions.has(normText)) {
      errors.push(`Duplicate question found: "${q.question.slice(0, 50)}..." matches ${seenQuestions.get(normText)} and ${qLabel}`);
    } else {
      seenQuestions.set(normText, qLabel);
    }

    // 2. Check bogus keywords
    for (const kw of BOGUS_KEYWORDS) {
      if (
        (q.question && q.question.toLowerCase().includes(kw)) ||
        (q.explanation && q.explanation.toLowerCase().includes(kw))
      ) {
        errors.push(`Bogus keyword "${kw}" found in ${qLabel}`);
      }
    }

    // 3. Check types, options, scoring
    if (q.type === "single_choice" || q.type === "assertion_reason") {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`Invalid options count in ${qLabel}: expected 4, got ${q.options ? q.options.length : 0}`);
      } else {
        const ca = q.correctAnswer;
        if (typeof ca !== "number" || !Number.isInteger(ca) || ca < 0 || ca > 3) {
          errors.push(`correctAnswer index "${ca}" invalid (must be 0, 1, 2, or 3) in ${qLabel}`);
        }
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        errors.push(`Scoring mismatch in ${qLabel}: marks=${q.marks}, neg=${q.negativeMarks}`);
      }
    } else if (q.type === "numerical") {
      if (Array.isArray(q.options) && q.options.length > 0) {
        errors.push(`Numerical question should have empty options in ${qLabel}`);
      }
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "") {
        errors.push(`Empty correctAnswer in numerical ${qLabel}`);
      }
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        errors.push(`Scoring mismatch in numerical ${qLabel}: marks=${q.marks}, neg=${q.negativeMarks}`);
      }
    } else {
      errors.push(`Unknown question type "${q.type}" in ${qLabel}`);
    }

    // 4. KaTeX validation
    validateKaTeX(q.question, `${qLabel} (question)`);
    if (Array.isArray(q.options)) {
      q.options.forEach((opt, optIdx) => {
        validateKaTeX(opt, `${qLabel} (option ${optIdx + 1})`);
      });
    }
    validateKaTeX(q.explanation, `${qLabel} (explanation)`);
  });
});

console.log(`\n--- Validation Summary ---`);
console.log(`Total questions checked: ${totalQuestions} (Expected: 222)`);
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} errors:`);
  errors.forEach((e, i) => console.error(`  ${i + 1}. ${e}`));
  process.exit(1);
} else {
  console.log("SUCCESS! All 222 questions passed 100% validation!");
}
