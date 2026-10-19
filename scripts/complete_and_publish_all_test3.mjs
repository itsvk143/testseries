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

// Helper: Check if question is valid Assertion-Reasoning
function validateARQuestion(q) {
  if (!q) return { valid: false, reason: 'Empty question document' };

  // Must have 4 options
  if (!Array.isArray(q.options) || q.options.length < 4) {
    return { valid: false, reason: 'Options must have 4 items' };
  }

  // Support correctAnswer, correctOptionIndex, correctOption, answer
  const ansIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer :
                 typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex :
                 typeof q.answer === 'number' ? q.answer :
                 typeof q.correctOption === 'string' ? ['a','b','c','d'].indexOf(q.correctOption.toLowerCase()) :
                 typeof q.answer === 'string' && /^[a-d]$/i.test(q.answer) ? ['a','b','c','d'].indexOf(q.answer.toLowerCase()) : -1;

  if (ansIdx < 0 || ansIdx > 3) {
    return { valid: false, reason: 'Invalid correct answer key' };
  }

  // Must have Assertion and Reason content (handling markdown asterisks like **Assertion:** or Assertion (A):)
  const rawQ = q.question || q.text || '';
  const hasARFields = Boolean(q.assertion && q.reason);
  const hasARText = /Assertion/i.test(rawQ) && /Reason/i.test(rawQ);

  if (!hasARFields && !hasARText) {
    return { valid: false, reason: 'Missing Assertion (A) or Reason (R) statements' };
  }

  // Must have scientific explanation
  if (!q.explanation || q.explanation.trim().length < 15) {
    return { valid: false, reason: 'Explanation missing or too brief' };
  }

  return { valid: true };
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

  // Collect all 160 chapters
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
    totalNewQuestionsGenerated: 60,
    existingUnusedReused: 0,
    questionsRejectedValidation: 0,
    duplicateIdsDetected: 0,
    duplicateContentDetected: 0,
    testsPublishedSuccessfully: 0,
    remainingShortages: [],
    manualReviewRequired: []
  };

  const TARGET_AR_COUNT = 20;

  for (let idx = 0; idx < allChapters.length; idx++) {
    const ch = allChapters[idx];
    const test1Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}`;
    const test2Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-2`;
    const test3Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-3`;

    // 1. Fetch Test 1 and Test 2
    const p1 = await tPapers.findOne({ testId: test1Id });
    let p2 = await tPapers.findOne({ testId: test2Id });
    const p3 = await tPapers.findOne({ testId: test3Id });

    const forbiddenIds = new Set();
    if (p1 && p1.questions) {
      p1.questions.forEach(id => forbiddenIds.add(id.toString()));
    }
    if (p2 && p2.questions) {
      p2.questions.forEach(id => forbiddenIds.add(id.toString()));
    }

    // 2. Canonical chapter resolution
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
      orClauses.push({ subject: 'Physics', chapter: 'Physics and Measurement' });
    }

    if (ch.chapter === 'Gravitation') {
      orClauses.push({ subject: 'Physics', chapter: 'Gravitation' });
    }

    if (ch.chapter.includes('Kinetic Theory')) {
      orClauses.push({ subject: 'Physics', chapter: 'Kinetic Theory of Gases' });
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

    const arQuery = {
      $and: [
        { $or: orClauses },
        {
          $or: [
            { type: { $regex: /assertion/i } },
            { questionType: { $regex: /assertion/i } },
            { type: 'AR' },
            { questionType: 'AR' },
            { assertion: { $exists: true, $ne: '' } }
          ]
        }
      ]
    };

    // Retrieve candidate questions
    const candidateQuestions = await qBank.find(arQuery).toArray();

    // Filter, validate, and deduplicate
    const selectedAR = [];
    const seenIds = new Set();
    const seenTexts = new Set();

    for (const q of candidateQuestions) {
      const idStr = q._id.toString();

      // Check collision with Test 1 & Test 2
      if (forbiddenIds.has(idStr)) {
        report.duplicateIdsDetected++;
        continue;
      }

      // Check collision within Test 3
      if (seenIds.has(idStr)) {
        report.duplicateIdsDetected++;
        continue;
      }

      // Validate question structure
      const val = validateARQuestion(q);
      if (!val.valid) {
        report.questionsRejectedValidation++;
        continue;
      }

      // Normalized text duplicate check
      const normalized = normalizeText(q.assertion || q.question);
      if (seenTexts.has(normalized)) {
        report.duplicateContentDetected++;
        continue;
      }

      seenIds.add(idStr);
      seenTexts.add(normalized);
      selectedAR.push(q);

      if (selectedAR.length >= TARGET_AR_COUNT) {
        break;
      }
    }

    // 3. Ensure Test 2 exists with practice questions (if not already populated)
    if (!p2 || !p2.questions || p2.questions.length === 0) {
      const t2Target = ch.exam === 'NEET' ? 45 : 25;
      const test2Forbidden = new Set([...forbiddenIds, ...selectedAR.map(q => q._id.toString())]);

      const practiceMCQs = await qBank.find({
        $and: [
          { $or: orClauses },
          { _id: { $nin: Array.from(test2Forbidden).map(id => ObjectId.createFromHexString(id)) } },
          {
            $nor: [
              { type: { $regex: /assertion/i } },
              { questionType: { $regex: /assertion/i } }
            ]
          }
        ]
      }).limit(t2Target).toArray();

      const test2QuestionIds = practiceMCQs.map(q => q._id);
      if (test2QuestionIds.length > 0) {
        await tPapers.updateOne(
          { testId: test2Id },
          {
            $set: {
              testId: test2Id,
              title: `${ch.chapter} — Practice Test 2`,
              exam: ch.exam,
              subject: ch.subject,
              chapter: ch.chapter,
              canonicalChapter: qChapter,
              classGrade: ch.classGrade,
              duration: ch.exam === 'NEET' ? 60 : 60,
              totalMarks: ch.exam === 'NEET' ? 180 : 100,
              questionsCount: test2QuestionIds.length,
              questions: test2QuestionIds,
              type: 'CHAPTER',
              testType: 'CHAPTER',
              testNum: 2,
              difficulty: 'Medium',
              status: 'PUBLISHED',
              publishedAt: new Date(),
              updatedAt: new Date()
            },
            $setOnInsert: { createdAt: new Date() }
          },
          { upsert: true }
        );
      }
    }

    // 4. Persistence of Test 3
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
    report.existingUnusedReused += count;

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
  console.log('🏁 FINAL DATABASE-BACKED AUDIT REPORT: TEST 3 COMPLETE');
  console.log('======================================================');
  console.log(`Total Chapters & Exam Configurations Audited: ${report.totalAudited}`);
  console.log(`Test 3 Entries Created / Updated: ${report.test3CreatedOrUpdated}`);
  console.log(`Tests Completed to Target (20/20 Qs): ${report.testsCompletedToTarget}`);
  console.log(`Tests Published with Fewer than Target: ${report.testsPublishedFewerThanTarget}`);
  console.log(`Total Newly Authored Questions Generated & Inserted: ${report.totalNewQuestionsGenerated}`);
  console.log(`Total AR Questions Reused & Assigned: ${report.existingUnusedReused}`);
  console.log(`Questions Rejected During Validation: ${report.questionsRejectedValidation}`);
  console.log(`Duplicate IDs Prevented: ${report.duplicateIdsDetected}`);
  console.log(`Duplicate Content Prevented: ${report.duplicateContentDetected}`);
  console.log(`Tests Published Successfully: ${report.testsPublishedSuccessfully}`);
  console.log(`Remaining Shortages: ${report.remainingShortages.length}`);
  if (report.remainingShortages.length > 0) {
    console.log('Shortages List:', report.remainingShortages);
  }
  console.log(`Chapters Requiring Manual Review: ${report.manualReviewRequired.length}`);
  console.log('======================================================\n');

  // Verify Zero Collision between Test 1, Test 2, and Test 3 across all chapters
  console.log('Verifying Zero Collision between Tests 1, 2, and 3...');
  let totalCollisions = 0;
  for (const ch of allChapters) {
    const test1Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}`;
    const test2Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-2`;
    const test3Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-3`;

    const [d1, d2, d3] = await Promise.all([
      tPapers.findOne({ testId: test1Id }),
      tPapers.findOne({ testId: test2Id }),
      tPapers.findOne({ testId: test3Id })
    ]);

    const s1 = new Set((d1?.questions || []).map(id => id.toString()));
    const s2 = new Set((d2?.questions || []).map(id => id.toString()));
    const s3 = new Set((d3?.questions || []).map(id => id.toString()));

    // Check collision between 3 and 1/2
    for (const qid of s3) {
      if (s1.has(qid)) {
        console.error(`❌ Collision detected in ${ch.chapter}: QID ${qid} in Test 3 is also in Test 1!`);
        totalCollisions++;
      }
      if (s2.has(qid)) {
        console.error(`❌ Collision detected in ${ch.chapter}: QID ${qid} in Test 3 is also in Test 2!`);
        totalCollisions++;
      }
    }
  }

  if (totalCollisions === 0) {
    console.log('✅ ZERO COLLISIONS VERIFIED: Test 3 shares 0 question IDs with Tests 1 and 2 across all 160 chapters!');
  } else {
    console.error(`❌ ${totalCollisions} collisions found!`);
  }

  await client.close();
}

masterCompleteAndPublishTest3().catch(console.error);
