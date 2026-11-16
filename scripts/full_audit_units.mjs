import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function fullAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const targetTests = [
    { id: 'neet-CHAPTER-Physics-Units-&-Measurements-11', type: 'Chapter' },
    { id: 'neet-SUBTOPIC-Physics-Units-and-dimensions', type: 'Subtopic', name: 'Units and dimensions' },
    { id: 'neet-SUBTOPIC-Physics-Dimensional-analysis-and-applications', type: 'Subtopic', name: 'Dimensional analysis and applications' },
    { id: 'neet-SUBTOPIC-Physics-Error-analysis', type: 'Subtopic', name: 'Error analysis' },
    { id: 'neet-SUBTOPIC-Physics-Significant-figures', type: 'Subtopic', name: 'Significant figures' },
    { id: 'neet-SUBTOPIC-Physics-Least-count-and-precision', type: 'Subtopic', name: 'Least count and precision' }
  ];

  console.log('====================================================');
  console.log('   NEET PHYSICS AUDIT: UNITS & MEASUREMENTS        ');
  console.log('====================================================\n');

  const allAuditedQuestionIds = new Set();
  const duplicateTracker = new Map(); // text hash -> [testIds]
  let totalAudited = 0;
  let totalInvalid = 0;
  let totalMissingAnswer = 0;
  let totalShortExplanation = 0;
  let totalMissingOptions = 0;

  for (const t of targetTests) {
    const paper = await db.collection('testPapers').findOne({ testId: t.id });
    if (!paper || !paper.questions) {
      console.log(`[!] Paper ${t.id} NOT FOUND or has no questions.`);
      continue;
    }

    const qIds = paper.questions.map(id => new ObjectId(id));
    const questions = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();

    console.log(`--- Test: ${t.id} (${paper.title}) ---`);
    console.log(`Assigned Questions: ${paper.questions.length} | Resolved in QB: ${questions.length}`);

    let testInvalid = 0;
    const optionCounts = { 0: 0, 1: 0, 2: 0, 3: 0, undefined: 0 };

    questions.forEach((q, idx) => {
      totalAudited++;
      allAuditedQuestionIds.add(q._id.toString());

      // Track duplicates
      const simplifiedText = (q.question || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 100);
      if (duplicateTracker.has(simplifiedText)) {
        duplicateTracker.get(simplifiedText).push({ testId: t.id, qId: q._id.toString(), commercialId: q.commercialId });
      } else {
        duplicateTracker.set(simplifiedText, [{ testId: t.id, qId: q._id.toString(), commercialId: q.commercialId }]);
      }

      // Check issues
      const issues = [];
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer < 0 || q.correctAnswer > 3) {
        issues.push('MISSING_OR_INVALID_ANSWER');
        totalMissingAnswer++;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        issues.push('INVALID_OPTIONS_COUNT');
        totalMissingOptions++;
      }
      if (!q.explanation || q.explanation.length < 20) {
        issues.push('INSUFFICIENT_EXPLANATION');
        totalShortExplanation++;
      }
      if (!q.question || q.question.length < 15) {
        issues.push('INVALID_QUESTION_TEXT');
      }

      const ca = q.correctAnswer !== undefined ? q.correctAnswer : 'undefined';
      optionCounts[ca] = (optionCounts[ca] || 0) + 1;

      if (issues.length > 0) {
        testInvalid++;
        totalInvalid++;
      }
    });

    console.log(`  Issues count in test: ${testInvalid} / ${questions.length}`);
    console.log(`  Option Distribution:`, optionCounts);
    console.log(`----------------------------------------------------\n`);
  }

  // Find duplicates across tests
  let duplicateCount = 0;
  for (const [text, occurrences] of duplicateTracker.entries()) {
    if (occurrences.length > 1) {
      duplicateCount += (occurrences.length - 1);
    }
  }

  console.log('====================================================');
  console.log('   AUDIT SUMMARY FOR UNITS & MEASUREMENTS          ');
  console.log('====================================================');
  console.log(`Total Question Instances Audited: ${totalAudited}`);
  console.log(`Unique Questions Audited: ${allAuditedQuestionIds.size}`);
  console.log(`Total Invalid Questions (missing key / malformed): ${totalInvalid}`);
  console.log(`Total Missing Answers: ${totalMissingAnswer}`);
  console.log(`Total Insufficient Explanations: ${totalShortExplanation}`);
  console.log(`Duplicate Instances: ${duplicateCount}`);
  console.log('====================================================\n');

  await client.close();
}

fullAudit();
