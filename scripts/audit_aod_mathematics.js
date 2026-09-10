// scripts/audit_aod_mathematics.js
// Comprehensive post-flight audit script for Application of Derivatives in questionBank & testPapers.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

const CHAPTER_NAME = 'Application of Derivatives';

const BOGUS_KEYWORDS = [
  'thermodynamics',
  'macroscopic reference scale',
  'laboratory SI units',
  'energy conservation',
  'microscopic equilibrium',
  'temperature gradient'
];

function checkLatex(text, context, errors) {
  if (!text) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true, displayMode: false });
    } catch (e) {
      errors.push(`[LaTeX Error in ${context}] "${match[1]}" -> ${e.message}`);
    }
  }
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB database:', db.databaseName);

  const errors = [];
  const warnings = [];

  // 1. Audit QuestionBank
  console.log('\n--- 1. Auditing QuestionBank for Application of Derivatives ---');
  const questions = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME
  }).toArray();

  console.log(`Total questions found in QuestionBank: ${questions.length}`);
  if (questions.length !== 221) {
    errors.push(`Expected exactly 221 questions, but found ${questions.length}`);
  }

  const subtopicCounts = {};
  const seenTexts = new Map();

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const prefix = `[Q#${i + 1} | _id: ${q._id}]`;

    // Subtopic count
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

    // Metadata checks
    if (q.subject !== 'Mathematics') errors.push(`${prefix} subject is "${q.subject}" (expected "Mathematics")`);
    if (q.class !== 'Class 12') errors.push(`${prefix} class is "${q.class}" (expected "Class 12")`);
    if (q.chapter !== CHAPTER_NAME) errors.push(`${prefix} chapter is "${q.chapter}"`);

    // Duplicate check
    const qText = q.question || q.questionText || '';
    const norm = qText.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenTexts.has(norm)) {
      errors.push(`${prefix} Duplicate question text with ${seenTexts.get(norm)}: "${qText.substring(0, 50)}..."`);
    } else {
      seenTexts.set(norm, prefix);
    }

    // Bogus keywords check
    for (const kw of BOGUS_KEYWORDS) {
      if (qText.toLowerCase().includes(kw) || (q.explanation && q.explanation.toLowerCase().includes(kw))) {
        errors.push(`${prefix} Contains bogus generator keyword "${kw}"`);
      }
    }

    // Type & Marks check
    if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        errors.push(`${prefix} Invalid marks for ${q.type}: +${q.marks}/-${q.negativeMarks} (expected +4/-1)`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`${prefix} Options array missing or length !== 4`);
      } else {
        q.options.forEach((opt, oIdx) => {
          checkLatex(opt, `${prefix} Option ${oIdx + 1}`, errors);
        });
      }
      if (![0, 1, 2, 3, '0', '1', '2', '3'].includes(q.correctAnswer)) {
        errors.push(`${prefix} Invalid correctAnswer index: ${q.correctAnswer}`);
      }
    } else if (q.type === 'NUMERICAL') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        errors.push(`${prefix} Invalid marks for numerical: +${q.marks}/-${q.negativeMarks} (expected +4/0)`);
      }
      if (q.correctAnswer === undefined || q.correctAnswer === null || isNaN(Number(q.correctAnswer))) {
        errors.push(`${prefix} Invalid numerical answer: ${q.correctAnswer}`);
      }
    } else {
      errors.push(`${prefix} Unknown question type: ${q.type}`);
    }

    // KaTeX check
    checkLatex(qText, `${prefix} question`, errors);
    checkLatex(q.explanation, `${prefix} explanation`, errors);
  }

  console.log('\nSubtopic distribution in QuestionBank:');
  for (const [st, count] of Object.entries(subtopicCounts)) {
    console.log(`  - ${st}: ${count}`);
  }

  // 2. Audit Test Paper (6a9e2844c527cd38431011b9)
  console.log('\n--- 2. Auditing Test Paper in testPapers ---');
  const testPaperId = '6a9e2844c527cd38431011b9';

  const paper = await db.collection('testPapers').findOne({ _id: new ObjectId(testPaperId) });
  if (!paper) {
    errors.push(`Test paper ${testPaperId} not found!`);
  } else {
    console.log(`\nAudit for Test Paper "${paper.title}" (${testPaperId}):`);
    console.log(`  - Total Questions: ${paper.questions?.length}`);
    console.log(`  - Total Marks: ${paper.totalMarks}`);

    if (paper.questions?.length !== 25) {
      errors.push(`Test paper "${paper.title}" does not have 25 questions (has ${paper.questions?.length})`);
    }
    if (paper.totalMarks !== 100) {
      errors.push(`Test paper "${paper.title}" totalMarks is ${paper.totalMarks} (expected 100)`);
    }

    // Check individual questions in test paper
    const qDocs = await db.collection('questionBank').find({
      _id: { $in: paper.questions.map(id => new ObjectId(id)) }
    }).toArray();

    if (qDocs.length !== 25) {
      errors.push(`Test paper "${paper.title}" has missing question references in questionBank (${qDocs.length}/25 found)`);
    }

    let mcqCount = 0;
    let numCount = 0;
    for (const q of qDocs) {
      if (q.chapter !== CHAPTER_NAME) {
        errors.push(`Test paper "${paper.title}" contains foreign question from chapter "${q.chapter}" (_id: ${q._id})`);
      }
      if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') mcqCount++;
      if (q.type === 'NUMERICAL') numCount++;
    }

    console.log(`  - Section Breakdown: ${mcqCount} MCQs/ARs (Section A), ${numCount} NUMERICALs (Section B)`);
    if (mcqCount !== 20 || numCount !== 5) {
      warnings.push(`Test paper "${paper.title}" section split is ${mcqCount} MCQs and ${numCount} NUMs (ideal is 20/5)`);
    }
  }

  // Summary
  console.log('\n================ AUDIT SUMMARY ================');
  console.log(`Total Errors: ${errors.length}`);
  console.log(`Total Warnings: ${warnings.length}`);

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    warnings.forEach(w => console.log('  ⚠️  ' + w));
  }

  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(e => console.log('  ❌ ' + e));
    await client.close();
    process.exit(1);
  } else {
    console.log('\n>>> AUDIT PASSED WITH 0 ERRORS! Chapter Application of Derivatives is 100% verified and pristine. <<<');
    await client.close();
    process.exit(0);
  }
}

audit().catch(err => {
  console.error('Fatal Error during audit:', err);
  process.exit(1);
});
