// scripts/validate_jee_prob_all.js
// Pre-flight validation script for all 251 Probability questions

const katex = require('katex');
const { repairedGenuineProb } = require('./repaired_genuine_prob');
const { subtopic1Questions } = require('./data_jee_prob_subtopic1');
const { subtopic2Questions } = require('./data_jee_prob_subtopic2');
const { subtopic3Questions } = require('./data_jee_prob_subtopic3');
const { subtopic4Questions } = require('./data_jee_prob_subtopic4');
const { subtopic5Questions } = require('./data_jee_prob_subtopic5');
const { subtopic6Questions } = require('./data_jee_prob_subtopic6');
const { subtopic7Questions } = require('./data_jee_prob_subtopic7');

function validateKaTeX(text, context) {
  if (!text || typeof text !== 'string') return;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      console.error(`KaTeX Error in ${context}: "${math}"`);
      console.error(err.message);
      throw err;
    }
  }
}

function runPreflightValidation() {
  console.log("=== PRE-FLIGHT VALIDATION FOR PROBABILITY ===");

  const allGenerated = [
    ...subtopic1Questions,
    ...subtopic2Questions,
    ...subtopic3Questions,
    ...subtopic4Questions,
    ...subtopic5Questions,
    ...subtopic6Questions,
    ...subtopic7Questions
  ];

  console.log(`Genuine questions count: ${repairedGenuineProb.length}`);
  console.log(`Generated replacement questions count: ${allGenerated.length}`);
  console.log(`Total questions: ${repairedGenuineProb.length + allGenerated.length}`);

  if (repairedGenuineProb.length !== 41) {
    throw new Error(`Expected 41 genuine questions, got ${repairedGenuineProb.length}`);
  }
  if (allGenerated.length !== 210) {
    throw new Error(`Expected 210 generated questions, got ${allGenerated.length}`);
  }

  const allQuestions = [...repairedGenuineProb, ...allGenerated];
  const seenQuestions = new Set();

  allQuestions.forEach((q, idx) => {
    const ctx = `Question index ${idx} (${q.type}, subtopic: ${q.subtopic || q.subTopic})`;

    // Check duplicate questions
    const qTrimmed = q.question.trim().replace(/\s+/g, ' ');
    if (seenQuestions.has(qTrimmed)) {
      throw new Error(`Duplicate question found at index ${idx}: "${qTrimmed.slice(0, 60)}..."`);
    }
    seenQuestions.add(qTrimmed);

    // Validate scoring & fields
    const correctOpt = q.correctOption !== undefined ? q.correctOption : q.correctAnswer;
    const sol = q.solution || q.explanation;

    if (q.type === 'single_choice' || q.type === 'assertion_reason') {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        throw new Error(`Invalid marks for MCQ/AR at index ${idx}: +${q.marks}/-${q.negativeMarks}`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`MCQ/AR at index ${idx} must have 4 options`);
      }
      if (typeof correctOpt !== 'number' || correctOpt < 0 || correctOpt > 3) {
        throw new Error(`Invalid correctOption/correctAnswer ${correctOpt} at index ${idx}`);
      }
    } else if (q.type === 'numerical') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        throw new Error(`Invalid marks for numerical at index ${idx}: +${q.marks}/-${q.negativeMarks}`);
      }
      if (!q.correctAnswer || typeof q.correctAnswer !== 'string') {
        throw new Error(`Invalid correctAnswer for numerical at index ${idx}`);
      }
    } else {
      throw new Error(`Unknown type ${q.type} at index ${idx}`);
    }

    // KaTeX validation
    validateKaTeX(q.question, `${ctx} -> Question`);
    if (q.options) {
      q.options.forEach((opt, oIdx) => {
        validateKaTeX(opt, `${ctx} -> Option ${oIdx}`);
      });
    }
    if (sol) {
      validateKaTeX(sol, `${ctx} -> Solution`);
    }
  });

  console.log("SUCCESS: All 251 questions passed all pre-flight checks! 0 KaTeX errors, 0 duplicates, correct scoring.");
}

runPreflightValidation();
