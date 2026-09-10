require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const katex = require('katex');

function testMath(text, id, field) {
  if (!text) return 0;
  const regex = /\$([^\$]+)\$/g;
  let match;
  let errors = 0;
  while ((match = regex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (err) {
      console.error(`[KaTeX Error] doc ${id} in field ${field}: math="${match[1]}" -> ${err.message}`);
      errors++;
    }
  }
  return errors;
}

async function audit() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB for Gravitation Comprehensive Audit");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  const allQuestions = await qb.find({ chapter: "Gravitation" }).toArray();
  console.log(`\n=== 1. QUESTION BANK AUDIT ===`);
  console.log(`Total questions in 'Gravitation': ${allQuestions.length}`);

  let totalKatexErrors = 0;
  let bogusMatches = 0;
  let invalidStructure = 0;

  const typeCounts = {};
  const subtopicCounts = {};

  const bogusRegex = /Le Chatelier|dynamic equilibrium|damped harmonic oscillation|quality factor is Q|resonant circuit|viscous dissipation rate|3D cartesian coordinates/i;

  for (const q of allQuestions) {
    const qId = q._id.toString();

    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

    // Check bogus patterns
    const qText = (q.question || "") + " " + (q.explanation || "");
    if (bogusRegex.test(qText)) {
      console.error(`[Bogus Keyword Found] doc ${qId}: ${q.question.slice(0, 80)}`);
      bogusMatches++;
    }

    // Check KaTeX
    totalKatexErrors += testMath(q.question, qId, 'question');
    if (q.options) {
      q.options.forEach((opt, idx) => {
        totalKatexErrors += testMath(opt, qId, `option[${idx}]`);
      });
    }
    totalKatexErrors += testMath(q.explanation, qId, 'explanation');

    // Check structure
    if (q.type === 'NUMERICAL') {
      if (!q.correctAnswer || typeof q.correctAnswer !== 'string') {
        console.error(`[Invalid NUMERICAL] doc ${qId} missing string correctAnswer`);
        invalidStructure++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        console.error(`[Invalid Marks NUMERICAL] doc ${qId} marks=${q.marks}, neg=${q.negativeMarks}`);
        invalidStructure++;
      }
    } else if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`[Invalid Options] doc ${qId} has ${q.options ? q.options.length : 0} options`);
        invalidStructure++;
      }
      if (q.correctOptionIndex === undefined || q.correctOptionIndex === null || q.correctOptionIndex < 0 || q.correctOptionIndex > 3) {
        console.error(`[Invalid Option Index] doc ${qId} correctOptionIndex=${q.correctOptionIndex}`);
        invalidStructure++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`[Invalid Marks MCQ/AR] doc ${qId} marks=${q.marks}, neg=${q.negativeMarks}`);
        invalidStructure++;
      }
    } else {
      console.error(`[Unknown Type] doc ${qId} type=${q.type}`);
      invalidStructure++;
    }
  }

  console.log("\nType Breakdown:", typeCounts);
  console.log("\nSubtopic Breakdown:", subtopicCounts);
  console.log(`\nAudit Results for Question Bank:`);
  console.log(`- Total Questions Checked: ${allQuestions.length}`);
  console.log(`- Bogus / Synthetic Questions Remaining: ${bogusMatches}`);
  console.log(`- KaTeX Errors: ${totalKatexErrors}`);
  console.log(`- Structural / Marks Issues: ${invalidStructure}`);

  console.log(`\n=== 2. TEST PAPERS AUDIT ===`);
  const testsToVerify = [
    { testId: "jee-mains-CHAPTER-Physics-Gravitation-11", expectedLen: 25 },
    { testId: "jee-mains-SUBTOPIC-Physics-Newton’s-law-of-gravitation", expectedLen: 25 },
    { testId: "jee-mains-SUBTOPIC-Physics-gravitational-potential-energy", expectedLen: 25 },
    { testId: "jee-mains-SUBTOPIC-Physics-Kepler's-laws", expectedLen: 25 },
    { testId: "jee-mains-SUBTOPIC-Physics-escape-velocity", expectedLen: 25 },
    { testId: "neet-CHAPTER-Physics-Gravitation-11", expectedLen: 45 },
    { testId: "neet-SUBTOPIC-Physics-Newton’s-law-of-gravitation", expectedLen: 43 },
    { testId: "neet-SUBTOPIC-Physics-gravitational-potential-energy", expectedLen: 43 },
    { testId: "neet-SUBTOPIC-Physics-Kepler's-laws", expectedLen: 44 },
    { testId: "neet-SUBTOPIC-Physics-escape-velocity", expectedLen: 43 }
  ];

  let testPaperErrors = 0;
  for (const t of testsToVerify) {
    const doc = await tp.findOne({ testId: t.testId });
    if (!doc) {
      console.error(`[Missing Test] ${t.testId} not found in testPapers!`);
      testPaperErrors++;
      continue;
    }

    const qCount = doc.questions ? doc.questions.length : 0;
    if (qCount !== t.expectedLen) {
      console.error(`[Length Mismatch] ${t.testId}: expected ${t.expectedLen}, found ${qCount}`);
      testPaperErrors++;
    }

    let mcqCount = 0;
    let arCount = 0;
    let numCount = 0;
    let missingCount = 0;

    for (const qId of doc.questions) {
      const qDoc = await qb.findOne({ _id: qId });
      if (!qDoc) {
        missingCount++;
      } else {
        if (qDoc.type === 'MCQ') mcqCount++;
        else if (qDoc.type === 'ASSERTION_REASON') arCount++;
        else if (qDoc.type === 'NUMERICAL') numCount++;
      }
    }

    if (missingCount > 0) {
      console.error(`[Broken Reference] ${t.testId} has ${missingCount} broken question IDs!`);
      testPaperErrors++;
    }

    const isNeet = t.testId.startsWith("neet");
    if (isNeet && numCount > 0) {
      console.error(`[NEET Has Numericals] ${t.testId} has ${numCount} numerical questions!`);
      testPaperErrors++;
    }

    console.log(`✓ ${t.testId}: ${qCount} Qs (MCQ: ${mcqCount}, AR: ${arCount}, NUM: ${numCount}) [Marks: ${doc.totalMarks}, Duration: ${doc.duration}m]`);
  }

  console.log(`\nTest Paper Audit Summary: ${testPaperErrors} errors detected.`);

  await client.close();

  if (bogusMatches === 0 && totalKatexErrors === 0 && invalidStructure === 0 && testPaperErrors === 0) {
    console.log("\n🎉 ALL AUDITS PASSED PERFECTLY! 100% CLEAN AND VERIFIED.");
  } else {
    console.error("\n❌ AUDIT FAILED WITH ISSUES.");
    process.exit(1);
  }
}

audit().catch(err => {
  console.error("Error during audit:", err);
  process.exit(1);
});
