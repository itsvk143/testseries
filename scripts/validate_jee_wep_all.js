const katex = require('katex');

function extractLatexSpans(text) {
  if (!text) return [];
  const spans = [];
  const regex = /(\$\$[\s\S]*?\$\$|\$([^\$\n]+?)\$|\\\[[\s\S]*?\\\]|\\\(.+?\\\)|\\[a-zA-Z]+(?:\{[^{}]*\}|\[[^\[\]]*\])*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    let raw = match[0];
    let math = raw;
    let displayMode = false;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      math = raw.slice(1, -1);
      displayMode = false;
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      math = raw.slice(2, -2);
      displayMode = false;
    }
    spans.push({ raw, math, displayMode });
  }
  return spans;
}

function testLatex(str) {
  if (!str) return [];
  const errors = [];
  const spans = extractLatexSpans(str);
  for (const span of spans) {
    try {
      katex.renderToString(span.math, {
        throwOnError: true,
        displayMode: span.displayMode
      });
    } catch (err) {
      errors.push({ raw: span.raw, error: err.message });
    }
  }
  return errors;
}

function validateAll() {
  console.log("=== Validating all 7 JEE WEP datasets ===");

  const files = [
    { name: 'Part 1 (Kinetic/potential energy)', path: './data_jee_wep_part1.js', expected: 53 },
    { name: 'Part 2 (Elastic and inelastic collisions)', path: './data_jee_wep_part2.js', expected: 53 },
    { name: 'Part 3 (Vertical circular motion)', path: './data_jee_wep_part3.js', expected: 53 },
    { name: 'Part 4 (Conservation of mechanical energy)', path: './data_jee_wep_part4.js', expected: 53 },
    { name: 'Part 5 (Power and variable force)', path: './data_jee_wep_part5.js', expected: 53 },
    { name: 'Part 6 (Conservative forces and potential energy)', path: './data_jee_wep_part6.js', expected: 11 },
    { name: 'Part 7 (Work-energy theorem)', path: './data_jee_wep_part7.js', expected: 196 }
  ];

  let totalQuestions = 0;
  let totalErrors = 0;

  files.forEach(f => {
    const data = require(f.path);
    console.log(`\nValidating ${f.name}... Loaded: ${data.length} questions (expected ${f.expected})`);
    if (data.length !== f.expected) {
      console.error(`ERROR: Expected ${f.expected} but got ${data.length}`);
      totalErrors++;
    }
    totalQuestions += data.length;

    data.forEach((q, idx) => {
      // Check required fields
      if (!q.question || typeof q.question !== 'string') {
        console.error(`[${f.name} #${idx}] Missing or invalid question`);
        totalErrors++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`[${f.name} #${idx}] Invalid marks (${q.marks}) or negativeMarks (${q.negativeMarks})`);
        totalErrors++;
      }
      if (q.questionType === 'MCQ (Multiple Choice Question)' || q.questionType === 'Assertion-Reason') {
        if (!Array.isArray(q.options) || q.options.length < 2) {
          console.error(`[${f.name} #${idx}] Missing options`);
          totalErrors++;
        }
        if (typeof q.correctAnswer !== 'number') {
          console.error(`[${f.name} #${idx}] Invalid correctAnswer`);
          totalErrors++;
        }
      }
      if (q.questionType === 'Numerical') {
        if (typeof q.correctAnswer !== 'number') {
          console.error(`[${f.name} #${idx}] Missing numerical correctAnswer`);
          totalErrors++;
        }
      }

      // Check KaTeX
      const qErrors = testLatex(q.question);
      const expErrors = testLatex(q.explanation);
      let optErrors = [];
      if (Array.isArray(q.options)) {
        q.options.forEach(opt => optErrors.push(...testLatex(opt)));
      }

      if (qErrors.length > 0 || expErrors.length > 0 || optErrors.length > 0) {
        console.error(`[${f.name} #${idx}] KaTeX errors detected:`, {
          qErrors,
          expErrors,
          optErrors
        });
        totalErrors++;
      }
    });
  });

  console.log("\n==================================================");
  console.log(`Total questions checked: ${totalQuestions} / 472`);
  console.log(`Total errors found: ${totalErrors}`);
  if (totalErrors === 0 && totalQuestions === 472) {
    console.log("SUCCESS! All 472 questions are 100% valid with zero KaTeX errors!");
  } else {
    console.error("FAILURE! Issues detected during validation.");
    process.exit(1);
  }
}

validateAll();
