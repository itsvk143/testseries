// scripts/audit_pandc_mathematics.js
// Post-flight audit script for Permutations & Combinations in MongoDB
require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');
  const testPaperCol = db.collection('testPapers');

  console.log('--- Auditing Permutations & Combinations in MongoDB ---');
  const questions = await qb.find({ chapter: 'Permutations & Combinations' }).toArray();
  console.log(`Total questions in questionBank for P&C: ${questions.length}`);

  let errors = [];

  if (questions.length !== 263) {
    errors.push(`Expected 263 questions, found ${questions.length}`);
  }

  const seenText = new Map();
  const bogusPatterns = [
    /consider the polynomial/i,
    /synthetic/i,
    /\bbogus\b/i,
    /\bfoo\b/i,
    /\bbar\b/i
  ];

  function testKaTeX(str, id, field) {
    if (!str) return;
    const displayMathRegex = /\$\$([\s\S]*?)\$\$/g;
    let match;
    while ((match = displayMathRegex.exec(str)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true, displayMode: true });
      } catch (e) {
        errors.push(`[${id}] KaTeX display error in ${field}: ${e.message}`);
      }
    }
    const cleaned = str.replace(displayMathRegex, '');
    const inlineMathRegex = /\$([^\$]+?)\$/g;
    while ((match = inlineMathRegex.exec(cleaned)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (e) {
        errors.push(`[${id}] KaTeX inline error in ${field}: ${e.message}`);
      }
    }
  }

  let typeCounts = { single_choice: 0, assertion_reason: 0, numerical: 0, other: 0 };

  questions.forEach(q => {
    const id = q._id.toString();

    // Check bogus patterns
    for (const pat of bogusPatterns) {
      if (pat.test(q.question)) {
        errors.push(`[${id}] Bogus pattern matched in question: ${pat}`);
      }
    }

    // Check duplicate
    const clean = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenText.has(clean)) {
      errors.push(`[${id}] Duplicate question text with ${seenText.get(clean)}`);
    } else {
      seenText.set(clean, id);
    }

    // Check types
    if (q.type === 'single_choice' || q.type === 'assertion_reason') {
      if (q.type === 'single_choice') typeCounts.single_choice++;
      else typeCounts.assertion_reason++;

      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`[${id}] ${q.type} must have 4 options, found ${q.options?.length}`);
      }
      if (q.correctOption === null || q.correctOption === undefined || q.correctOption < 0 || q.correctOption > 3) {
        errors.push(`[${id}] Invalid correctOption: ${q.correctOption}`);
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        errors.push(`[${id}] Invalid scoring: ${q.marks}/-${q.negativeMarks}`);
      }
      if (q.options) {
        q.options.forEach((opt, oIdx) => testKaTeX(opt, id, `option[${oIdx}]`));
      }
    } else if (q.type === 'numerical') {
      typeCounts.numerical++;
      if (q.correctAnswer === null || q.correctAnswer === undefined) {
        errors.push(`[${id}] Numerical missing correctAnswer`);
      }
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        errors.push(`[${id}] Invalid numerical scoring: ${q.marks}/-${q.negativeMarks}`);
      }
    } else {
      typeCounts.other++;
      errors.push(`[${id}] Unknown type: ${q.type}`);
    }

    // KaTeX check
    testKaTeX(q.question, id, 'question');
    testKaTeX(q.solution, id, 'solution');
  });

  console.log('Type breakdown:', typeCounts);

  // Audit test papers
  console.log('\n--- Auditing P&C Test Papers ---');
  const testIds = [
    '6a9e2843c527cd38431011b1',
    '6a9e2886c527cd384310132d',
    '6a9e2886c527cd384310132e',
    '6a9e288cc527cd3843101345'
  ];

  for (const tid of testIds) {
    const test = await testPaperCol.findOne({ _id: new ObjectId(tid) });
    if (!test) {
      errors.push(`Test paper ${tid} not found`);
      continue;
    }

    if (test.totalQuestions !== 25 || test.questions.length !== 25) {
      errors.push(`Test ${tid} has ${test.questions?.length} questions instead of 25`);
    }
    if (test.totalMarks !== 100) {
      errors.push(`Test ${tid} totalMarks is ${test.totalMarks} instead of 100`);
    }

    // Check question composition
    const qDocs = await qb.find({ _id: { $in: test.questions } }).toArray();
    if (qDocs.length !== 25) {
      errors.push(`Test ${tid}: only ${qDocs.length}/25 questions resolved in questionBank`);
    }

    const mcqCount = qDocs.filter(q => q.type === 'single_choice' || q.type === 'assertion_reason').length;
    const numCount = qDocs.filter(q => q.type === 'numerical').length;

    console.log(`Test ${tid} ("${test.title}"): ${mcqCount} MCQ/AR, ${numCount} NUM. Total: ${qDocs.length}`);
    if (mcqCount !== 20 || numCount !== 5) {
      errors.push(`Test ${tid} pattern mismatch: expected 20 MCQ/AR + 5 NUM, got ${mcqCount} + ${numCount}`);
    }
  }

  await client.close();

  if (errors.length > 0) {
    console.error(`\n❌ Post-flight audit FAILED with ${errors.length} errors:`);
    errors.slice(0, 25).forEach(e => console.error(e));
    process.exit(1);
  } else {
    console.log('\n🎉 ALL CHECKS PASSED 100%! PERMUTATIONS & COMBINATIONS IS FULLY AUDITED AND VERIFIED CLEAN!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
