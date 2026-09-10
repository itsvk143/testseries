const katex = require("katex");
const { repairedGenuineCircles } = require("./repaired_genuine_circles");
const { subtopic1Questions } = require("./data_jee_circles_subtopic1");
const { subtopic2Questions } = require("./data_jee_circles_subtopic2");
const { subtopic3Questions } = require("./data_jee_circles_subtopic3");
const { subtopic4Questions } = require("./data_jee_circles_subtopic4");
const { subtopic5Questions } = require("./data_jee_circles_subtopic5");
const { subtopic6Questions } = require("./data_jee_circles_subtopic6");

const allSets = [
  { name: "Repaired Genuine (42)", questions: repairedGenuineCircles },
  { name: "Subtopic 1: Chord of contact (30)", questions: subtopic1Questions },
  { name: "Subtopic 2: Circle through three points (30)", questions: subtopic2Questions },
  { name: "Subtopic 3: Director circle & chord with midpoint (30)", questions: subtopic3Questions },
  { name: "Subtopic 4: General equation of circle (30)", questions: subtopic4Questions },
  { name: "Subtopic 5: Parametric equation of circle (30)", questions: subtopic5Questions },
  { name: "Subtopic 6: Standard equation (30)", questions: subtopic6Questions }
];

function extractMathChunks(text) {
  if (!text) return [];
  const chunks = [];
  // Match $$...$$ or $...$
  const regex = /\$\$([\s\S]+?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    chunks.push(match[1] || match[2]);
  }
  return chunks;
}

function testKatex(mathStr) {
  try {
    katex.renderToString(mathStr, { throwOnError: true, displayMode: false });
    return null;
  } catch (err) {
    return err.message;
  }
}

let totalQuestions = 0;
let errors = [];
const seenQuestions = new Map();

for (const set of allSets) {
  console.log(`\nValidating set: ${set.name} (${set.questions.length} questions)...`);
  set.questions.forEach((q, idx) => {
    totalQuestions++;
    const qNum = `${set.name} Q${idx + 1}`;

    // Check duplicate questions
    const normQ = q.question.replace(/\s+/g, " ").trim();
    if (seenQuestions.has(normQ)) {
      errors.push(`[DUPLICATE] ${qNum} is duplicate of ${seenQuestions.get(normQ)}: "${normQ.substring(0, 60)}..."`);
    } else {
      seenQuestions.set(normQ, qNum);
    }

    // Check type & marks
    if (q.type === "single_choice" || q.type === "assertion_reason") {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        errors.push(`[MARKS] ${qNum}: Invalid marks for ${q.type}: +${q.marks}/-${q.negativeMarks}`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`[OPTIONS] ${qNum}: Expected 4 options, got ${q.options ? q.options.length : 0}`);
      }
      if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) {
        errors.push(`[CORRECT_ANSWER] ${qNum}: Invalid correctAnswer ${q.correctAnswer}`);
      }
    } else if (q.type === "numerical") {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        errors.push(`[MARKS] ${qNum}: Invalid marks for numerical: +${q.marks}/-${q.negativeMarks}`);
      }
      if (q.options && q.options.length !== 0) {
        errors.push(`[OPTIONS] ${qNum}: Numerical should have empty options array`);
      }
      if (q.correctAnswer === undefined || q.correctAnswer === null || String(q.correctAnswer).trim() === "") {
        errors.push(`[CORRECT_ANSWER] ${qNum}: Missing numerical correctAnswer`);
      }
    } else {
      errors.push(`[TYPE] ${qNum}: Unknown question type "${q.type}"`);
    }

    // Check KaTeX in question
    const qMath = extractMathChunks(q.question);
    for (const math of qMath) {
      const err = testKatex(math);
      if (err) {
        errors.push(`[KATEX Question] ${qNum}: ${err} in "$${math}$"`);
      }
    }

    // Check KaTeX in options
    if (q.options) {
      q.options.forEach((opt, oIdx) => {
        const optMath = extractMathChunks(opt);
        for (const math of optMath) {
          const err = testKatex(math);
          if (err) {
            errors.push(`[KATEX Option ${oIdx}] ${qNum}: ${err} in "$${math}$"`);
          }
        }
      });
    }

    // Check KaTeX in explanation
    const expMath = extractMathChunks(q.explanation);
    for (const math of expMath) {
      const err = testKatex(math);
      if (err) {
        errors.push(`[KATEX Explanation] ${qNum}: ${err} in "$${math}$"`);
      }
    }
  });
}

console.log("\n================ VALIDATION SUMMARY ================");
console.log(`Total questions audited: ${totalQuestions}`);
console.log(`Total errors found: ${errors.length}`);

if (errors.length > 0) {
  console.error("\nERRORS ENCOUNTERED:");
  errors.forEach((e) => console.error(` - ${e}`));
  process.exit(1);
} else {
  console.log("All 222 questions PASSED validation perfectly! (KaTeX, Scoring, Uniqueness, Types)");
  process.exit(0);
}
