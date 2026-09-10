// scripts/validate_jee_matrices_all.js
// Pre-flight validation engine for Matrices & Determinants questions

const katex = require('katex');
const { repairedGenuineMatrices } = require('./repaired_genuine_matrices');
const { subtopic1Questions } = require('./data_jee_matrices_subtopic1');
const { subtopic2Questions } = require('./data_jee_matrices_subtopic2');
const { subtopic3Questions } = require('./data_jee_matrices_subtopic3');
const { subtopic4Questions } = require('./data_jee_matrices_subtopic4');
const { subtopic5Questions } = require('./data_jee_matrices_subtopic5');
const { subtopic6Questions } = require('./data_jee_matrices_subtopic6');
const { subtopic7Questions } = require('./data_jee_matrices_subtopic7');

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
  const matches = [];
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1] || match[2]);
  }
  return matches;
}

function testKatex(latex) {
  try {
    katex.renderToString(latex, { throwOnError: true });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function runValidation() {
  console.log('=== Matrices & Determinants Pre-Flight Validation Engine ===\n');

  const sets = [
    { name: 'Genuine Repaired', questions: repairedGenuineMatrices, expected: 41 },
    { name: 'Subtopic 1 (Types of matrices)', questions: subtopic1Questions, expected: 30 },
    { name: 'Subtopic 2 (Orthogonal, symmetric, skew-symmetric)', questions: subtopic2Questions, expected: 30 },
    { name: 'Subtopic 3 (Properties of determinants)', questions: subtopic3Questions, expected: 30 },
    { name: 'Subtopic 4 (Adjoint and inverse)', questions: subtopic4Questions, expected: 30 },
    { name: 'Subtopic 5 (System of linear equations consistency and rank)', questions: subtopic5Questions, expected: 30 },
    { name: 'Subtopic 6 (Cramer\'s rule)', questions: subtopic6Questions, expected: 30 },
    { name: 'Subtopic 7 (Solution of linear equations)', questions: subtopic7Questions, expected: 30 }
  ];

  let totalQuestions = 0;
  let hasError = false;
  const seenQuestions = new Map();

  for (const set of sets) {
    console.log(`Checking ${set.name}... (Found: ${set.questions.length}, Expected: ${set.expected})`);
    if (set.questions.length !== set.expected) {
      console.error(`❌ Count mismatch in ${set.name}: expected ${set.expected}, got ${set.questions.length}`);
      hasError = true;
    }
    totalQuestions += set.questions.length;

    set.questions.forEach((q, idx) => {
      const qRef = `${set.name} [Q${idx + 1}]`;

      // 1. Duplicate question check
      const normalizedQ = q.question.trim().replace(/\s+/g, ' ');
      if (seenQuestions.has(normalizedQ)) {
        console.error(`❌ DUPLICATE QUESTION found in ${qRef}! Matches ${seenQuestions.get(normalizedQ)}`);
        hasError = true;
      } else {
        seenQuestions.set(normalizedQ, qRef);
      }

      // 2. Question type and options check
      if (q.type === 'single_choice' || q.type === 'assertion_reason') {
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          console.error(`❌ Invalid options length in ${qRef}: expected 4, got ${q.options?.length}`);
          hasError = true;
        }
        if (q.correctOption === null || q.correctOption === undefined || q.correctOption < 0 || q.correctOption > 3) {
          console.error(`❌ Invalid correctOption in ${qRef}: ${q.correctOption}`);
          hasError = true;
        }
        if (q.marks !== 4 || q.negativeMarks !== 1) {
          console.error(`❌ Invalid marks in MCQ/AR ${qRef}: ${q.marks}, -${q.negativeMarks}`);
          hasError = true;
        }
      } else if (q.type === 'numerical') {
        if (q.correctAnswer === null || q.correctAnswer === undefined || isNaN(Number(q.correctAnswer))) {
          console.error(`❌ Invalid correctAnswer in numerical ${qRef}: ${q.correctAnswer}`);
          hasError = true;
        }
        if (q.marks !== 4 || q.negativeMarks !== 0) {
          console.error(`❌ Invalid marks in NUM ${qRef}: ${q.marks}, -${q.negativeMarks}`);
          hasError = true;
        }
      } else {
        console.error(`❌ Unknown type in ${qRef}: ${q.type}`);
        hasError = true;
      }

      // 3. Solution presence
      if (!q.solution || typeof q.solution !== 'string' || q.solution.trim().length < 10) {
        console.error(`❌ Solution missing or too short in ${qRef}`);
        hasError = true;
      }

      // 4. KaTeX verification
      const textsToTest = [q.question, ...(q.options || []), q.solution];
      for (const text of textsToTest) {
        const latexSnippets = extractLatex(text);
        for (const snippet of latexSnippets) {
          const res = testKatex(snippet);
          if (!res.ok) {
            console.error(`❌ KaTeX Error in ${qRef}: "${res.error}"\nSnippet: ${snippet}`);
            hasError = true;
          }
        }
      }
    });
  }

  console.log(`\nTotal questions checked: ${totalQuestions} (Target: 251)`);
  if (totalQuestions !== 251) {
    console.error(`❌ Total question count is not 251!`);
    hasError = true;
  }

  if (hasError) {
    console.error('\n🚨 PRE-FLIGHT VALIDATION FAILED WITH ERRORS!');
    process.exit(1);
  } else {
    console.log('\n✅ PRE-FLIGHT VALIDATION PASSED 100%! All 251 questions are KaTeX-valid and schema-compliant.');
  }
}

runValidation();
