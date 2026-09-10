// scripts/validate_jee_sets_all.js
// Validates all 201 questions for Sets, Relations, and Functions

const katex = require('katex');
const { repairedGenuineSets } = require('./repaired_genuine_sets');
const { subtopic1Questions } = require('./data_jee_sets_subtopic1');
const { subtopic2Questions } = require('./data_jee_sets_subtopic2');
const { subtopic3Questions } = require('./data_jee_sets_subtopic3');
const { subtopic4Questions } = require('./data_jee_sets_subtopic4');
const { subtopic5Questions } = require('./data_jee_sets_subtopic5');

function testKatex(text, id, field) {
  if (!text) return 0;
  let errors = 0;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      console.error(`❌ KaTeX Error in ${id} (${field}): "${math}" -> ${err.message}`);
      errors++;
    }
  }
  return errors;
}

function main() {
  console.log('=== Pre-Flight Validation for Sets, Relations, and Functions ===\n');

  const groups = [
    { name: 'Genuine Repaired', questions: repairedGenuineSets, expected: 51 },
    { name: 'Subtopic 1: Sets, subsets, power set, Venn diagrams', questions: subtopic1Questions, expected: 30 },
    { name: 'Subtopic 2: Set operations', questions: subtopic2Questions, expected: 30 },
    { name: 'Subtopic 3: Types of relations', questions: subtopic3Questions, expected: 30 },
    { name: 'Subtopic 4: Functions (domain, codomain, range)', questions: subtopic4Questions, expected: 30 },
    { name: 'Subtopic 5: Types of functions', questions: subtopic5Questions, expected: 30 }
  ];

  let totalQuestions = 0;
  let totalErrors = 0;
  const seenTexts = new Set();

  for (const group of groups) {
    console.log(`Checking group "${group.name}"... (Expected: ${group.expected})`);
    if (group.questions.length !== group.expected) {
      console.error(`❌ Group count mismatch: expected ${group.expected}, got ${group.questions.length}`);
      totalErrors++;
    }

    group.questions.forEach((q, idx) => {
      totalQuestions++;
      const id = q._id || `${group.name}_Q${idx + 1}`;

      // Duplicate check
      const normText = q.question.trim().replace(/\s+/g, ' ');
      if (seenTexts.has(normText)) {
        console.error(`❌ Duplicate question text found: "${normText.slice(0, 70)}..." (ID: ${id})`);
        totalErrors++;
      }
      seenTexts.add(normText);

      // Question & Solution check
      if (!q.question || q.question.trim().length === 0) {
        console.error(`❌ Missing question text in ${id}`);
        totalErrors++;
      }
      if (!q.solution || q.solution.trim().length === 0) {
        console.error(`❌ Missing solution in ${id}`);
        totalErrors++;
      }

      // Options & Type check
      if (q.type === 'single_choice' || q.type === 'assertion_reason') {
        if (!q.options || q.options.length !== 4) {
          console.error(`❌ ${q.type} must have exactly 4 options in ${id}, got ${q.options?.length}`);
          totalErrors++;
        }
        if (q.correctOption === null || q.correctOption === undefined || q.correctOption < 0 || q.correctOption > 3) {
          console.error(`❌ Invalid correctOption ${q.correctOption} in ${id}`);
          totalErrors++;
        }
        if (q.marks !== 4 || q.negativeMarks !== 1) {
          console.error(`❌ Invalid scoring for MCQ/AR in ${id}: marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
          totalErrors++;
        }
      } else if (q.type === 'numerical') {
        if (q.options && q.options.length !== 0) {
          console.error(`❌ Numerical must have 0 options in ${id}, got ${q.options.length}`);
          totalErrors++;
        }
        if (q.correctOption !== null) {
          console.error(`❌ Numerical must have correctOption null in ${id}, got ${q.correctOption}`);
          totalErrors++;
        }
        if (q.correctAnswer === null || q.correctAnswer === undefined || isNaN(Number(q.correctAnswer))) {
          console.error(`❌ Numerical missing valid numeric correctAnswer in ${id}`);
          totalErrors++;
        }
        if (q.marks !== 4 || q.negativeMarks !== 0) {
          console.error(`❌ Invalid scoring for Numerical in ${id}: marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
          totalErrors++;
        }
      } else {
        console.error(`❌ Unknown question type "${q.type}" in ${id}`);
        totalErrors++;
      }

      // KaTeX syntax validation
      totalErrors += testKatex(q.question, id, 'question');
      if (q.options) {
        q.options.forEach((opt, oi) => {
          totalErrors += testKatex(opt, id, `option[${oi}]`);
        });
      }
      totalErrors += testKatex(q.solution, id, 'solution');
    });
  }

  console.log('\n--- Validation Summary ---');
  console.log(`Total questions checked: ${totalQuestions}`);
  console.log(`Unique questions: ${seenTexts.size}`);
  console.log(`Total errors: ${totalErrors}`);

  if (totalErrors === 0 && totalQuestions === 201) {
    console.log('\n🎉 ALL 201 QUESTIONS PASSED VALIDATION WITH ZERO ERRORS!');
  } else {
    console.error('\n❌ VALIDATION FAILED! Please fix errors before proceeding.');
    process.exit(1);
  }
}

main();
