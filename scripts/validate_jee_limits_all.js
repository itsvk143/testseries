// scripts/validate_jee_limits_all.js
// Pre-flight validation for all 170 Limits, Continuity & Differentiability questions

const katex = require('katex');
const { subtopic1Questions } = require('./data_jee_limits_subtopic1.js');
const { subtopic2Questions } = require('./data_jee_limits_subtopic2.js');
const { subtopic3Questions } = require('./data_jee_limits_subtopic3.js');
const { subtopic4Questions } = require('./data_jee_limits_subtopic4.js');
const { subtopic5Questions } = require('./data_jee_limits_subtopic5.js');
const { repairedGenuineLimits } = require('./repaired_genuine_limits.js');

function testKaTeX(str, context) {
  if (!str) return;
  // Test inline math $...$
  const inline = str.match(/\$([^\$]+)\$/g) || [];
  for (const m of inline) {
    const raw = m.slice(1, -1);
    try {
      katex.renderToString(raw, { throwOnError: true });
    } catch (err) {
      throw new Error(`[KaTeX Inline Error in ${context}]: "${raw}" -> ${err.message}`);
    }
  }

  // Test display math $$...$$
  const display = str.match(/\$\$([^\$]+)\$\$/g) || [];
  for (const m of display) {
    const raw = m.slice(2, -2);
    try {
      katex.renderToString(raw, { displayMode: true, throwOnError: true });
    } catch (err) {
      throw new Error(`[KaTeX Display Error in ${context}]: "${raw}" -> ${err.message}`);
    }
  }
}

function runValidation() {
  console.log('=== STARTING COMPREHENSIVE PRE-FLIGHT VALIDATION ===');

  const allSubtopics = [
    { name: 'Continuity of functions at a point and in an interval', questions: subtopic1Questions },
    { name: 'Derivative as a rate of change', questions: subtopic2Questions },
    { name: 'Differentiability and differentiation rules', questions: subtopic3Questions },
    { name: "L'Hospital rule", questions: subtopic4Questions },
    { name: 'Standard limits and evaluation of indeterminate forms', questions: subtopic5Questions }
  ];

  const seenQuestions = new Set();
  let totalValidated = 0;

  // 1. Validate Generated Subtopics (150 questions)
  allSubtopics.forEach((st, sIdx) => {
    console.log(`\nValidating Subtopic ${sIdx + 1}: "${st.name}" (${st.questions.length} questions)...`);
    if (st.questions.length !== 30) {
      throw new Error(`Subtopic "${st.name}" must have exactly 30 questions, found ${st.questions.length}`);
    }

    const types = { MCQ: 0, ASSERTION_REASON: 0, NUMERICAL: 0 };

    st.questions.forEach((q, qIdx) => {
      const tag = `Subtopic ${sIdx + 1} Q${qIdx + 1} [${q.type}]`;

      // Structure checks
      if (!q.question || typeof q.question !== 'string') throw new Error(`${tag} missing question text`);
      if (!q.explanation || typeof q.explanation !== 'string') throw new Error(`${tag} missing explanation`);
      if (!['MCQ', 'ASSERTION_REASON', 'NUMERICAL'].includes(q.type)) throw new Error(`${tag} invalid type: ${q.type}`);

      types[q.type]++;

      // Duplicate check
      const normalizedQ = q.question.replace(/\s+/g, ' ').trim();
      if (seenQuestions.has(normalizedQ)) {
        throw new Error(`${tag} DUPLICATE QUESTION DETECTED: "${normalizedQ.slice(0, 60)}"`);
      }
      seenQuestions.add(normalizedQ);

      // Options & answer check
      if (q.type === 'NUMERICAL') {
        if (!Array.isArray(q.options) || q.options.length !== 0) {
          throw new Error(`${tag} NUMERICAL must have empty options array`);
        }
        if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
          throw new Error(`${tag} NUMERICAL correctAnswer must be a valid number, got ${q.correctAnswer}`);
        }
        if (q.marks !== 4 || q.negativeMarks !== 0) {
          throw new Error(`${tag} NUMERICAL marking must be +4, -0`);
        }
      } else {
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          throw new Error(`${tag} ${q.type} must have exactly 4 options`);
        }
        if (![0, 1, 2, 3].includes(q.correctAnswer)) {
          throw new Error(`${tag} ${q.type} correctAnswer must be 0, 1, 2, or 3, got ${q.correctAnswer}`);
        }
        if (q.marks !== 4 || q.negativeMarks !== 1) {
          throw new Error(`${tag} ${q.type} marking must be +4, -1`);
        }
      }

      // KaTeX checks
      testKaTeX(q.question, `${tag} question`);
      q.options.forEach((opt, oIdx) => testKaTeX(opt, `${tag} opt[${oIdx}]`));
      testKaTeX(q.explanation, `${tag} explanation`);

      totalValidated++;
    });

    console.log(`  -> Counts: MCQ=${types.MCQ}, AR=${types.ASSERTION_REASON}, NUM=${types.NUMERICAL}`);
    if (types.MCQ !== 10 || types.ASSERTION_REASON !== 10 || types.NUMERICAL !== 10) {
      throw new Error(`Subtopic "${st.name}" does not have 10 MCQ, 10 AR, 10 NUM!`);
    }
  });

  // 2. Validate Repaired Genuine Questions (20 questions)
  console.log(`\nValidating Repaired Genuine Questions (${Object.keys(repairedGenuineLimits).length} questions)...`);
  const genuineIds = Object.keys(repairedGenuineLimits);
  if (genuineIds.length !== 20) {
    throw new Error(`Expected exactly 20 repaired genuine questions, found ${genuineIds.length}`);
  }

  genuineIds.forEach((id, idx) => {
    const q = repairedGenuineLimits[id];
    const tag = `Genuine #${idx + 1} [${id}]`;

    if (!q.question) throw new Error(`${tag} missing question text`);
    if (!q.explanation) throw new Error(`${tag} missing explanation`);
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`${tag} must have 4 options`);
    if (![0, 1, 2, 3].includes(q.correctAnswer)) throw new Error(`${tag} invalid correctAnswer: ${q.correctAnswer}`);

    // Check duplicate with generated
    const normalizedQ = q.question.replace(/\s+/g, ' ').trim();
    if (seenQuestions.has(normalizedQ)) {
      throw new Error(`${tag} DUPLICATE QUESTION DETECTED: "${normalizedQ.slice(0, 60)}"`);
    }
    seenQuestions.add(normalizedQ);

    testKaTeX(q.question, `${tag} question`);
    q.options.forEach((opt, oIdx) => testKaTeX(opt, `${tag} opt[${oIdx}]`));
    testKaTeX(q.explanation, `${tag} explanation`);

    totalValidated++;
  });

  console.log(`\n======================================================`);
  console.log(`SUCCESS! All ${totalValidated} questions (150 generated + 20 genuine) passed 100% of validation checks.`);
  console.log(`- KaTeX throwOnError: true passed on all strings.`);
  console.log(`- 0 duplicates detected.`);
  console.log(`- Marking and option structures 100% compliant.`);
  console.log(`======================================================\n`);
}

runValidation();
