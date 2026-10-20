import fs from 'fs';
import vm from 'vm';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Load syllabus
const code = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ') + '; module.exports = { neetSyllabus, jeeMainsSyllabus };';
const sandbox = { module: { exports: {} } };
vm.runInNewContext(code, sandbox);
const { neetSyllabus, jeeMainsSyllabus } = sandbox.module.exports;

import { getCanonicalChapter } from '../src/lib/chapterMapping.cjs';

// Helper: Normalize text for duplicate content check
function normalizeText(txt) {
  if (!txt) return '';
  return txt.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper: Strict Validation for genuine Assertion-Reasoning Question
function validateARQuestion(q) {
  if (!q) return { valid: false, reason: 'Empty question document' };

  // Must have 4 options
  if (!Array.isArray(q.options) || q.options.length < 4) {
    return { valid: false, reason: 'Options must have at least 4 items' };
  }

  // Answer key validation (0..3 or a..d)
  const ansIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer :
                 typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex :
                 typeof q.answer === 'number' ? q.answer :
                 typeof q.correctOption === 'string' ? ['a','b','c','d'].indexOf(q.correctOption.toLowerCase()) :
                 typeof q.answer === 'string' && /^[a-d]$/i.test(q.answer) ? ['a','b','c','d'].indexOf(q.answer.toLowerCase()) : -1;

  if (ansIdx < 0 || ansIdx > 3) {
    return { valid: false, reason: 'Invalid or missing correct answer key' };
  }

  // STRICT: Must have Assertion (A) and Reason (R) in question body or fields
  const rawQ = q.question || q.text || '';
  const hasARFields = Boolean(q.assertion && q.reason);
  const hasARText = /Assertion/i.test(rawQ) && /Reason/i.test(rawQ);

  if (!hasARFields && !hasARText) {
    return { valid: false, reason: 'Missing Assertion (A) or Reason (R) statements' };
  }

  // Must have scientific explanation
  if (!q.explanation || q.explanation.trim().length < 10) {
    return { valid: false, reason: 'Explanation missing or too brief' };
  }

  return { valid: true, ansIdx };
}

function getChapterQueryClauses(ch) {
  const mapping = getCanonicalChapter(ch.subject, ch.chapter);
  const qSubject = mapping.subject || ch.subject;
  const qChapter = mapping.chapter || ch.chapter;
  const fbSubject = mapping.fallbackSubject;
  const fbChapter = mapping.fallbackChapter;

  const nameRegex = new RegExp(ch.chapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(in|of|and|&)\\b/gi, '(in|of|and|&)'), 'i');
  const canonRegex = new RegExp(qChapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(in|of|and|&)\\b/gi, '(in|of|and|&)'), 'i');

  const orClauses = [
    { subject: qSubject, chapter: canonRegex },
    { subject: ch.subject, chapter: nameRegex },
    { subject: ch.subject, subTopic: nameRegex },
    { subject: ch.subject, topic: nameRegex }
  ];

  if (ch.chapter.includes('Units') || ch.chapter.includes('Measurement')) {
    orClauses.push({ subject: 'Physics', chapter: /Units.*Measurement/i });
    orClauses.push({ subject: 'Physics', chapter: 'Physics and Measurement' });
    orClauses.push({ subject: 'Physics', chapter: 'Units and Measurements' });
    orClauses.push({ subject: 'Physics', chapter: 'Units & Measurements' });
    orClauses.push({ subject: 'Physics', subTopic: /Units.*Measurement/i });
  }

  if (ch.chapter === 'Gravitation') {
    orClauses.push({ subject: 'Physics', chapter: 'Gravitation' });
  }

  if (ch.chapter.includes('Kinetic Theory')) {
    orClauses.push({ subject: 'Physics', chapter: 'Kinetic Theory of Gases' });
  }

  if (ch.chapter.includes('Structure of Atom') || ch.chapter.includes('Atomic Structure')) {
    orClauses.push({ subject: 'Chemistry', chapter: /Structure of Atom/i });
    orClauses.push({ subject: 'Chemistry', chapter: /Atomic Structure/i });
    orClauses.push({ subject: 'Chemistry', subTopic: /Structure of Atom/i });
  }

  if (ch.subject === 'Mathematics' && (ch.chapter.includes('Sets') || ch.chapter.includes('Relations') || ch.chapter.includes('Linear Inequalities'))) {
    orClauses.push({ subject: 'Mathematics', chapter: 'Sets, Relations, and Functions' });
  }

  if (ch.subject === 'Mathematics' && (ch.chapter.includes('Three Dimensional') || ch.chapter.includes('3D'))) {
    orClauses.push({ subject: 'Mathematics', chapter: '3D Geometry' });
  }

  if (ch.subject === 'Mathematics' && ch.chapter.includes('Application of Integrals')) {
    orClauses.push({ subject: 'Mathematics', chapter: 'Areas' });
  }

  if (ch.chapter.includes('Alcohol') || ch.chapter.includes('Phenol') || ch.chapter.includes('Ether')) {
    orClauses.push({
      subject: 'Chemistry',
      chapter: 'Organic Compounds Containing Oxygen',
      subTopic: { $in: ['Alcohols', 'Phenols', 'Ethers', 'Lucas test and oxidation of alcohols', "Reimer-Tiemann and Kolbe's reactions of phenols"] }
    });
  }

  if (ch.chapter.includes('Excretory')) {
    orClauses.push({
      subject: 'Zoology',
      chapter: 'Human Physiology',
      subTopic: { $regex: /excretory/i }
    });
  }

  if (ch.chapter.includes('Locomotion')) {
    orClauses.push({
      subject: 'Zoology',
      chapter: 'Human Physiology',
      subTopic: { $regex: /locomotion/i }
    });
  }

  if (fbChapter) {
    const fbRegex = new RegExp(fbChapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    orClauses.push({
      subject: fbSubject || qSubject,
      chapter: fbRegex,
      $or: [
        { subTopic: nameRegex },
        { topic: nameRegex },
        { subTopic: canonRegex }
      ]
    });
  }

  return { orClauses, qSubject, qChapter };
}

async function masterCompleteAndPublishTest3() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not found.');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('🚀 Connected to MongoDB.');

  // Collect all 160 chapters across NEET and JEE Main
  const allChapters = [];
  for (const [sub, grades] of Object.entries(neetSyllabus)) {
    for (const [grade, list] of Object.entries(grades)) {
      for (const ch of list) {
        allChapters.push({
          exam: 'NEET',
          category: 'neet',
          subject: sub,
          classGrade: grade,
          chapter: ch
        });
      }
    }
  }

  for (const [sub, grades] of Object.entries(jeeMainsSyllabus)) {
    for (const [grade, list] of Object.entries(grades)) {
      for (const ch of list) {
        allChapters.push({
          exam: 'JEE Main',
          category: 'jee-mains',
          subject: sub,
          classGrade: grade,
          chapter: ch
        });
      }
    }
  }

  console.log(`📋 Total chapters to process: ${allChapters.length}`);

  const report = {
    totalAudited: allChapters.length,
    test3CreatedOrUpdated: 0,
    testsCompletedToTarget: 0,
    testsPublishedFewerThanTarget: 0,
    totalARQuestionsAssigned: 0,
    questionsRejectedValidation: 0,
    duplicateIdsPreventedWithinTest3: 0,
    duplicateContentPreventedWithinTest3: 0,
    crossTestReuseCount: 0,
    testsPublishedSuccessfully: 0,
    remainingShortages: []
  };

  const TARGET_AR_COUNT = 20;

  for (let idx = 0; idx < allChapters.length; idx++) {
    const ch = allChapters[idx];
    const test1Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}`;
    const test2Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-2`;
    const test3Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-3`;

    // Fetch Test 1 and Test 2 (to track cross-test reuse statistics and ensure we NEVER modify them)
    const [p1, p2, p3] = await Promise.all([
      tPapers.findOne({ testId: test1Id }),
      tPapers.findOne({ testId: test2Id }),
      tPapers.findOne({ testId: test3Id })
    ]);

    const test1And2Ids = new Set();
    if (p1 && p1.questions) p1.questions.forEach(id => test1And2Ids.add(id.toString()));
    if (p2 && p2.questions) p2.questions.forEach(id => test1And2Ids.add(id.toString()));

    const { orClauses, qChapter } = getChapterQueryClauses(ch);

    // Retrieve candidate AR questions from questionBank
    // Note: We check type, questionType, assertion field, AND question text
    const arQuery = {
      $and: [
        { $or: orClauses },
        {
          $or: [
            { type: { $regex: /assertion/i } },
            { questionType: { $regex: /assertion/i } },
            { type: 'AR' },
            { questionType: 'AR' },
            { assertion: { $exists: true, $ne: '' } },
            { question: { $regex: /assertion/i } },
            { text: { $regex: /assertion/i } }
          ]
        }
      ]
    };

    const candidateQuestions = await qBank.find(arQuery).toArray();

    // STRICT FILTERING: Only genuine Assertion-Reasoning questions
    // NO cross-test exclusion! A question used in Test 1 or 2 IS eligible for Test 3!
    const selectedAR = [];
    const seenIds = new Set();
    const seenTexts = new Set();

    // If Test 3 already had some genuine AR questions, we prioritize keeping them if valid
    if (p3 && p3.questions && p3.questions.length > 0) {
      const existingQs = await qBank.find({
        _id: { $in: p3.questions.map(id => typeof id === 'string' ? ObjectId.createFromHexString(id) : id) }
      }).toArray();

      for (const q of existingQs) {
        const val = validateARQuestion(q);
        if (!val.valid) continue; // discard any non-AR MCQ that may have leaked in previously

        const idStr = q._id.toString();
        const norm = normalizeText(q.assertion || q.question);
        if (seenIds.has(idStr) || seenTexts.has(norm)) continue;

        seenIds.add(idStr);
        seenTexts.add(norm);
        selectedAR.push(q);
        if (test1And2Ids.has(idStr)) report.crossTestReuseCount++;

        if (selectedAR.length >= TARGET_AR_COUNT) break;
      }
    }

    // Fill up to TARGET_AR_COUNT (20) from candidateQuestions
    for (const q of candidateQuestions) {
      if (selectedAR.length >= TARGET_AR_COUNT) break;

      const idStr = q._id.toString();
      if (seenIds.has(idStr)) {
        report.duplicateIdsPreventedWithinTest3++;
        continue;
      }

      const val = validateARQuestion(q);
      if (!val.valid) {
        report.questionsRejectedValidation++;
        continue;
      }

      const norm = normalizeText(q.assertion || q.question);
      if (seenTexts.has(norm)) {
        report.duplicateContentPreventedWithinTest3++;
        continue;
      }

      seenIds.add(idStr);
      seenTexts.add(norm);
      selectedAR.push(q);
      if (test1And2Ids.has(idStr)) report.crossTestReuseCount++;
    }

    // Persistence of Test 3
    const finalARObjectIds = selectedAR.map(q => q._id);
    const count = finalARObjectIds.length;

    await tPapers.updateOne(
      { testId: test3Id },
      {
        $set: {
          testId: test3Id,
          title: 'Assertion–Reasoning Special Test',
          exam: ch.exam,
          subject: ch.subject,
          chapter: ch.chapter,
          canonicalChapter: qChapter,
          classGrade: ch.classGrade,
          duration: 45,
          totalMarks: 80,
          questionsCount: count,
          targetQuestionsCount: TARGET_AR_COUNT,
          questions: finalARObjectIds,
          type: 'CHAPTER',
          testType: 'CHAPTER',
          testNum: 3,
          isSpecial: true,
          difficulty: 'Hard',
          difficultyTier: 'AR Special',
          status: 'PUBLISHED',
          publishedAt: new Date(),
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );

    // Track usage in questionBank
    await qBank.updateMany(
      { _id: { $in: finalARObjectIds } },
      { $addToSet: { usedInTests: test3Id } }
    );

    report.test3CreatedOrUpdated++;
    report.totalARQuestionsAssigned += count;

    if (count === TARGET_AR_COUNT) {
      report.testsCompletedToTarget++;
      report.testsPublishedSuccessfully++;
    } else {
      report.testsPublishedFewerThanTarget++;
      report.remainingShortages.push({
        testId: test3Id,
        chapter: ch.chapter,
        subject: ch.subject,
        exam: ch.exam,
        count,
        shortage: TARGET_AR_COUNT - count
      });
    }

    if ((idx + 1) % 20 === 0 || idx === allChapters.length - 1) {
      console.log(`Progress: ${idx + 1}/${allChapters.length} chapters completed. (Current Test 3: ${count}/${TARGET_AR_COUNT} for "${ch.chapter}")`);
    }
  }

  console.log('\n======================================================');
  console.log('🏁 FINAL AUDIT & PUBLICATION REPORT: TEST 3 COMPLETE');
  console.log('======================================================');
  console.log(`Total Chapters & Exam Configurations Processed: ${report.totalAudited}`);
  console.log(`Test 3 Entries Created / Updated: ${report.test3CreatedOrUpdated}`);
  console.log(`Tests Completed to Target (20/20 Qs): ${report.testsCompletedToTarget}`);
  console.log(`Tests Published with Fewer than Target: ${report.testsPublishedFewerThanTarget}`);
  console.log(`Total Genuine AR Questions Assigned: ${report.totalARQuestionsAssigned}`);
  console.log(`Cross-Test Reused AR Questions: ${report.crossTestReuseCount}`);
  console.log(`Questions Rejected During Validation (Non-AR / Malformed): ${report.questionsRejectedValidation}`);
  console.log(`Duplicate IDs Prevented Within Test 3: ${report.duplicateIdsPreventedWithinTest3}`);
  console.log(`Duplicate Content Prevented Within Test 3: ${report.duplicateContentPreventedWithinTest3}`);
  console.log(`Tests Published Successfully: ${report.testsPublishedSuccessfully}`);
  console.log(`Remaining Shortages: ${report.remainingShortages.length}`);
  if (report.remainingShortages.length > 0) {
    console.log('Shortages List:', report.remainingShortages);
  }
  console.log('======================================================\n');

  // Strict Validation: Verify that 100% of questions in Test 3 are genuine AR questions
  console.log('🔍 Running Post-Execution Global Audit on all 160 Test 3 Papers...');
  let totalNonARFound = 0;
  let totalDuplicateIdsInTest3 = 0;
  let totalTestedPapers = 0;

  for (const ch of allChapters) {
    const test3Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-3`;
    const paper = await tPapers.findOne({ testId: test3Id });
    if (!paper) {
      console.error(`❌ Paper missing: ${test3Id}`);
      continue;
    }
    totalTestedPapers++;

    const qIds = paper.questions || [];
    const idSet = new Set();
    for (const qid of qIds) {
      const s = qid.toString();
      if (idSet.has(s)) totalDuplicateIdsInTest3++;
      idSet.add(s);
    }

    const questions = await qBank.find({
      _id: { $in: qIds.map(id => typeof id === 'string' ? ObjectId.createFromHexString(id) : id) }
    }).toArray();

    for (const q of questions) {
      const val = validateARQuestion(q);
      if (!val.valid) {
        console.error(`❌ Non-AR Question found in ${test3Id}: ${q._id} (${val.reason})`);
        totalNonARFound++;
      }
    }
  }

  console.log(`\n📋 Post-Execution Audit Results:`);
  console.log(`Total Test 3 Papers Audited: ${totalTestedPapers} / 160`);
  console.log(`Total Non-AR Questions Found in Test 3: ${totalNonARFound}`);
  console.log(`Total Duplicate IDs Within Test 3: ${totalDuplicateIdsInTest3}`);
  if (totalNonARFound === 0 && totalDuplicateIdsInTest3 === 0) {
    console.log('✅ ALL 160 TEST 3 PAPERS CONTAIN 100% GENUINE ASSERTION–REASONING QUESTIONS!');
  } else {
    console.error('⚠️ Audit issues detected!');
  }

  await client.close();
}

masterCompleteAndPublishTest3().catch(err => {
  console.error(err);
  process.exit(1);
});
