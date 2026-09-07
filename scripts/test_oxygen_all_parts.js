const katex = require("katex");

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function validateLatex(text, id) {
  if (!text) return [];
  const errors = [];
  const regex = /\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push({ id, math: match[1], error: e.message });
    }
  }
  return errors;
}

function validateQuestion(q, idx, partName) {
  const errors = [];
  const qId = `${partName} Q#${idx + 1} (${q.type})`;

  // KaTeX checks
  errors.push(...validateLatex(q.question, `${qId} question`));
  if (q.options) {
    q.options.forEach((opt, oIdx) => {
      errors.push(...validateLatex(opt, `${qId} opt[${oIdx}]`));
    });
  }
  errors.push(...validateLatex(q.explanation, `${qId} explanation`));

  // Type checks
  if (q.type === "ASSERTION_REASON") {
    const lines = q.question.split("\n");
    if (lines.length !== 3) {
      errors.push({ id: qId, error: `AR question must be exactly 3 lines, got ${lines.length}` });
    } else {
      if (lines[0] !== "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).") {
        errors.push({ id: qId, error: `AR line 1 invalid: ${lines[0]}` });
      }
      if (!lines[1].startsWith("Assertion (A): ")) {
        errors.push({ id: qId, error: `AR line 2 must start with 'Assertion (A): '` });
      }
      if (!lines[2].startsWith("Reason (R): ")) {
        errors.push({ id: qId, error: `AR line 3 must start with 'Reason (R): '` });
      }
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push({ id: qId, error: `AR must have 4 options` });
    } else {
      for (let i = 0; i < 4; i++) {
        if (q.options[i] !== STANDARD_AR_OPTIONS[i]) {
          errors.push({ id: qId, error: `AR option ${i} does not match standard AR option` });
        }
      }
    }
    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      errors.push({ id: qId, error: `AR correctAnswer must be 0, 1, 2, or 3, got ${q.correctAnswer}` });
    }
  } else if (q.type === "MCQ") {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push({ id: qId, error: `MCQ must have 4 options` });
    } else {
      const set = new Set(q.options);
      if (set.size !== 4) {
        errors.push({ id: qId, error: `MCQ options must be unique, got duplicate options` });
      }
    }
    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      errors.push({ id: qId, error: `MCQ correctAnswer must be 0, 1, 2, or 3, got ${q.correctAnswer}` });
    }
  } else if (q.type === "NUMERICAL") {
    if (!Array.isArray(q.options) || q.options.length !== 0) {
      errors.push({ id: qId, error: `NUM options must be empty array []` });
    }
    if (typeof q.correctAnswer !== "string" || isNaN(parseInt(q.correctAnswer, 10))) {
      errors.push({ id: qId, error: `NUM correctAnswer must be string integer, got ${q.correctAnswer}` });
    }
  } else {
    errors.push({ id: qId, error: `Unknown type: ${q.type}` });
  }

  if (!q.explanation || q.explanation.length < 15) {
    errors.push({ id: qId, error: `Explanation missing or too short: "${q.explanation}"` });
  }

  return errors;
}

function runTests(parts) {
  let totalQs = 0;
  let allErrors = [];

  for (const p of parts) {
    console.log(`Checking ${p.name} (${p.data.length} Qs)...`);
    p.data.forEach((q, idx) => {
      totalQs++;
      const errs = validateQuestion(q, idx, p.name);
      if (errs.length > 0) {
        allErrors.push(...errs);
      }
    });
  }

  console.log(`\n========================================`);
  console.log(`Total questions checked: ${totalQs}`);
  console.log(`Total validation errors: ${allErrors.length}`);
  console.log(`========================================`);

  if (allErrors.length > 0) {
    console.error("Errors found:");
    allErrors.slice(0, 20).forEach(e => console.error(e));
    if (allErrors.length > 20) console.error(`...and ${allErrors.length - 20} more errors`);
    process.exit(1);
  } else {
    console.log("All questions passed validation with zero errors!");
  }
}

module.exports = { validateQuestion, validateLatex, STANDARD_AR_OPTIONS, runTests };

if (require.main === module) {
  const parts = [];
  for (let i = 1; i <= 10; i++) {
    try {
      const data = require(`./data_oxygen_part${i}.js`);
      parts.push({ name: `Part ${i}`, data });
    } catch (e) {
      // Not yet created
    }
  }
  if (parts.length > 0) {
    runTests(parts);
  } else {
    console.log("No data files found yet.");
  }
}
