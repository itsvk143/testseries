import fs from 'fs';
import vm from 'vm';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Load syllabus, utils, and jeeMains.js via vm
const utilsCode = fs.readFileSync('./src/data/utils.js', 'utf8').replace(/export const /g, 'var ').replace(/export default /g, 'var defaultExport = ');
const chaptersCode = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ');
const jeeCode = fs.readFileSync('./src/data/exams/jeeMains.js', 'utf8')
  .replace(/import .*/g, '')
  .replace(/export const /g, 'var ')
  .replace(/export default /g, 'var defaultExport = ');

const sandbox = { module: { exports: {} }, console, Math, Date, Array, Object };
vm.runInNewContext(chaptersCode + '\n' + utilsCode + '\n' + jeeCode + '\nmodule.exports = { generateJeeMainsTests, jeeMainsChapters };', sandbox);
const { generateJeeMainsTests } = sandbox.module.exports;

import { getCanonicalChapter } from '../src/lib/chapterMapping.cjs';

async function assignAndAuditAllJee() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('No MONGODB_URI in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('🚀 Connected to MongoDB.');

  const allJeeTests = generateJeeMainsTests(2026);
  const chapterTestsT1 = allJeeTests.filter(t => t.type === 'CHAPTER' && t.testNum === 1);
  const chapterTestsT2 = allJeeTests.filter(t => t.type === 'CHAPTER' && t.testNum === 2);
  const subtopicTests = allJeeTests.filter(t => t.type === 'SUBTOPIC');

  console.log(`Auditing & assigning JEE Main tests:`);
  console.log(`- Chapter Test 1: ${chapterTestsT1.length}`);
  console.log(`- Chapter Test 2: ${chapterTestsT2.length}`);
  console.log(`- Subtopic Tests: ${subtopicTests.length}`);

  const TARGET_COUNT = 25;

  // 1. Audit Chapter Test 1 & 2
  console.log('\n========================================');
  console.log('PHASE 1: VERIFYING CHAPTER TEST 1 & 2');
  console.log('========================================');

  let t1Deficient = 0;
  for (const t of chapterTestsT1) {
    const paper = await tPapers.findOne({ testId: t.id });
    if (!paper || (paper.questions || []).length !== TARGET_COUNT) t1Deficient++;
  }
  console.log(`Chapter Test 1: ${chapterTestsT1.length - t1Deficient}/${chapterTestsT1.length} already have exactly 25 questions.`);

  let t2Deficient = 0;
  for (const t of chapterTestsT2) {
    const paper = await tPapers.findOne({ testId: t.id });
    if (!paper || (paper.questions || []).length !== TARGET_COUNT) t2Deficient++;
  }
  console.log(`Chapter Test 2: ${chapterTestsT2.length - t2Deficient}/${chapterTestsT2.length} already have exactly 25 questions.`);

  // 2. Audit and Fix Subtopic Tests
  console.log('\n========================================');
  console.log('PHASE 2: AUDITING & FIXING SUBTOPIC TESTS');
  console.log('========================================');

  let subFixed = 0;
  let subAlreadyFull = 0;

  for (let i = 0; i < subtopicTests.length; i++) {
    const t = subtopicTests[i];
    let paper = await tPapers.findOne({ testId: t.id });
    const currentQuestions = paper?.questions || [];

    if (currentQuestions.length === TARGET_COUNT) {
      subAlreadyFull++;
      continue;
    }

    const rawSub = (t.title || '').trim();
    const rawChap = (t.chapter || '').trim();
    const mapping = getCanonicalChapter(t.subject, rawChap);
    const qSubject = mapping.subject || t.subject;
    const qChapter = mapping.chapter || rawChap;

    const subRegex = new RegExp(rawSub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');
    const chapRegex = new RegExp(rawChap.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');
    const canonRegex = new RegExp(qChapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');

    const selectedIds = new Set(currentQuestions.map(id => id.toString()));

    // Step A: Fetch questions matching exact subTopic
    if (selectedIds.size < TARGET_COUNT) {
      const subQs = await qBank.find({
        subject: t.subject,
        _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) },
        $or: [
          { subTopic: subRegex },
          { topic: subRegex }
        ]
      }).limit(TARGET_COUNT - selectedIds.size).toArray();

      for (const q of subQs) selectedIds.add(q._id.toString());
    }

    // Step B: Top up from chapter pool
    if (selectedIds.size < TARGET_COUNT) {
      const chapClauses = [
        { subject: qSubject, chapter: canonRegex },
        { subject: t.subject, chapter: chapRegex },
        { subject: t.subject, subTopic: chapRegex }
      ];

      // Add common JEE chapter aliases
      if (rawChap.includes('Units') || rawChap.includes('Measurement')) {
        chapClauses.push({ subject: 'Physics', chapter: /Physics and Measurement/i });
        chapClauses.push({ subject: 'Physics', chapter: /Units.*Measurement/i });
      }
      if (rawChap.includes('Straight Line') || rawChap.includes('Plane')) {
        chapClauses.push({ subject: 'Physics', chapter: /Kinematics/i });
      }
      if (rawChap.includes('Work, Energy')) {
        chapClauses.push({ subject: 'Physics', chapter: /Work, Energy, and Power/i });
        chapClauses.push({ subject: 'Physics', chapter: /Work, Energy & Power/i });
      }
      if (rawChap.includes('Kinetic Theory')) {
        chapClauses.push({ subject: 'Physics', chapter: /Kinetic Theory of Gases/i });
      }
      if (rawChap.includes('Thermodynamics')) {
        chapClauses.push({ subject: t.subject, chapter: /Chemical Thermodynamics/i });
      }
      if (rawChap.includes('Alcohol') || rawChap.includes('Phenol') || rawChap.includes('Ether')) {
        chapClauses.push({ subject: 'Chemistry', chapter: /Organic Compounds Containing Oxygen/i });
      }
      if (rawChap.includes('Haloalkane')) {
        chapClauses.push({ subject: 'Chemistry', chapter: /Organic Compounds Containing Halogens/i });
      }
      if (t.subject === 'Mathematics') {
        if (rawChap.includes('Sets') || rawChap.includes('Relations')) {
          chapClauses.push({ subject: 'Mathematics', chapter: /Sets, Relations, and Functions/i });
        }
        if (rawChap.includes('Three Dimensional') || rawChap.includes('3D')) {
          chapClauses.push({ subject: 'Mathematics', chapter: /3D Geometry/i });
        }
        if (rawChap.includes('Integrals')) {
          chapClauses.push({ subject: 'Mathematics', chapter: /Integral Calculus/i });
          chapClauses.push({ subject: 'Mathematics', chapter: /Areas/i });
        }
        if (rawChap.includes('Differential Equations')) {
          chapClauses.push({ subject: 'Mathematics', chapter: /Differential Equations/i });
        }
      }

      const chapQs = await qBank.find({
        $or: chapClauses,
        _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) }
      }).limit(TARGET_COUNT - selectedIds.size).toArray();

      for (const q of chapQs) selectedIds.add(q._id.toString());
    }

    const finalIds = Array.from(selectedIds).slice(0, TARGET_COUNT).map(id => ObjectId.createFromHexString(id));

    await tPapers.updateOne(
      { testId: t.id },
      {
        $set: {
          testId: t.id,
          title: t.title,
          exam: 'JEE Main',
          subject: t.subject,
          chapter: t.chapter,
          canonicalChapter: qChapter,
          classGrade: t.classGrade || 'All Test',
          duration: 60,
          totalMarks: 100,
          questionsCount: finalIds.length,
          targetQuestionsCount: TARGET_COUNT,
          questions: finalIds,
          type: 'SUBTOPIC',
          testType: 'SUBTOPIC',
          difficulty: 'Medium',
          status: 'PUBLISHED',
          publishedAt: new Date(),
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );

    await qBank.updateMany(
      { _id: { $in: finalIds } },
      { $addToSet: { usedInTests: t.id } }
    );

    subFixed++;

    if ((i + 1) % 25 === 0 || i === subtopicTests.length - 1) {
      console.log(`Subtopic Progress: ${i + 1}/${subtopicTests.length} (Current test: ${t.id} -> ${finalIds.length}/25 Qs)`);
    }
  }

  console.log(`Subtopic tests processing complete. Fixed/Updated: ${subFixed}, Already full: ${subAlreadyFull}`);

  // 3. Comprehensive Global Post-Audit
  console.log('\n======================================================');
  console.log('🏁 FINAL POST-AUDIT: ALL JEE MAIN CHAPTERWISE & SUBTOPIC');
  console.log('======================================================');

  async function verifyGroup(name, list) {
    let perfect = 0;
    let defective = [];
    let duplicateErrors = 0;

    for (const t of list) {
      const paper = await tPapers.findOne({ testId: t.id });
      const qIds = paper?.questions || [];

      // Check duplicates within the paper
      const idSet = new Set(qIds.map(id => id.toString()));
      if (idSet.size !== qIds.length) {
        duplicateErrors++;
      }

      if (qIds.length === TARGET_COUNT) {
        perfect++;
      } else {
        defective.push({ id: t.id, count: qIds.length });
      }
    }

    console.log(`${name}:`);
    console.log(`- Total Tested: ${list.length}`);
    console.log(`- Exactly ${TARGET_COUNT} Questions: ${perfect} / ${list.length}`);
    console.log(`- Duplicate IDs within test: ${duplicateErrors}`);
    if (defective.length > 0) {
      console.error(`- Defective papers (${defective.length}):`, defective);
    } else {
      console.log(`- Status: ✅ 100% PERFECT!`);
    }
  }

  await verifyGroup('JEE Main Chapter Test 1', chapterTestsT1);
  await verifyGroup('JEE Main Chapter Test 2', chapterTestsT2);
  await verifyGroup('JEE Main Subtopic Tests', subtopicTests);

  console.log('======================================================\n');

  await client.close();
}

assignAndAuditAllJee().catch(err => {
  console.error(err);
  process.exit(1);
});
