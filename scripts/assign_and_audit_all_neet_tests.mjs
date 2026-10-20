import fs from 'fs';
import vm from 'vm';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Load syllabus, utils, and neet.js via vm
const utilsCode = fs.readFileSync('./src/data/utils.js', 'utf8').replace(/export const /g, 'var ').replace(/export default /g, 'var defaultExport = ');
const chaptersCode = fs.readFileSync('./src/data/chapters.js', 'utf8').replace(/export const /g, 'var ');
const neetCode = fs.readFileSync('./src/data/exams/neet.js', 'utf8')
  .replace(/import .*/g, '')
  .replace(/export const /g, 'var ')
  .replace(/export default /g, 'var defaultExport = ');

const sandbox = { module: { exports: {} }, console, Math, Date, Array, Object };
vm.runInNewContext(chaptersCode + '\n' + utilsCode + '\n' + neetCode + '\nmodule.exports = { generateNeetTests, neetChapters };', sandbox);
const { generateNeetTests } = sandbox.module.exports;

import { getCanonicalChapter } from '../src/lib/chapterMapping.cjs';

async function assignAndAuditAllNeet() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('No MONGODB_URI in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('🚀 Connected to MongoDB.');

  const allNeetTests = generateNeetTests(2026);
  const chapterTestsT1 = allNeetTests.filter(t => t.type === 'CHAPTER' && t.testNum === 1);
  const chapterTestsT2 = allNeetTests.filter(t => t.type === 'CHAPTER' && t.testNum === 2);
  const subtopicTests = allNeetTests.filter(t => t.type === 'SUBTOPIC');

  console.log(`Auditing & assigning NEET tests:`);
  console.log(`- Chapter Test 1: ${chapterTestsT1.length}`);
  console.log(`- Chapter Test 2: ${chapterTestsT2.length}`);
  console.log(`- Subtopic Tests: ${subtopicTests.length}`);

  const TARGET_COUNT = 45;

  // 1. Audit and Fix Chapter Test 2
  console.log('\n========================================');
  console.log('PHASE 1: AUDITING & FIXING CHAPTER TEST 2');
  console.log('========================================');

  let t2Fixed = 0;
  for (const t of chapterTestsT2) {
    let paper = await tPapers.findOne({ testId: t.id });
    const currentQuestions = paper?.questions || [];

    if (currentQuestions.length < TARGET_COUNT) {
      console.log(`Fixing Chapter Test 2: ${t.id} (Current: ${currentQuestions.length}/${TARGET_COUNT})`);

      const mapping = getCanonicalChapter(t.subject, t.chapter);
      const qSubject = mapping.subject || t.subject;
      const qChapter = mapping.chapter || t.chapter;

      const chapRegex = new RegExp(t.chapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');
      const canonRegex = new RegExp(qChapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');

      const primaryQuery = {
        $or: [
          { subject: qSubject, chapter: canonRegex },
          { subject: t.subject, chapter: chapRegex },
          { subject: t.subject, subTopic: chapRegex }
        ]
      };

      // 5 Easy, 40 Difficult/Medium
      const selectedIds = new Set(currentQuestions.map(id => id.toString()));

      // 1. Fetch Easy questions
      const easyQs = await qBank.find({
        ...primaryQuery,
        _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) },
        difficulty: { $regex: /^easy$/i }
      }).limit(5).toArray();

      for (const q of easyQs) selectedIds.add(q._id.toString());

      // 2. Fetch Hard / Difficult questions
      const hardQs = await qBank.find({
        ...primaryQuery,
        _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) },
        difficulty: { $regex: /difficult|hard/i }
      }).limit(TARGET_COUNT - selectedIds.size).toArray();

      for (const q of hardQs) selectedIds.add(q._id.toString());

      // 3. Top up with Medium questions
      if (selectedIds.size < TARGET_COUNT) {
        const medQs = await qBank.find({
          ...primaryQuery,
          _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) },
          difficulty: { $regex: /medium|moderate/i }
        }).limit(TARGET_COUNT - selectedIds.size).toArray();

        for (const q of medQs) selectedIds.add(q._id.toString());
      }

      // 4. Top up with any remaining questions from chapter
      if (selectedIds.size < TARGET_COUNT) {
        const anyQs = await qBank.find({
          ...primaryQuery,
          _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) }
        }).limit(TARGET_COUNT - selectedIds.size).toArray();

        for (const q of anyQs) selectedIds.add(q._id.toString());
      }

      // 5. Fallback chapter enrichment if still < TARGET_COUNT (e.g. Diversity in Living World for Morphology)
      if (selectedIds.size < TARGET_COUNT) {
        let fbSubject = qSubject;
        let fbChapter = null;

        if (t.chapter.includes('Morphology') || t.chapter.includes('Classification')) {
          fbChapter = 'Diversity in Living World';
        } else if (t.chapter.includes('Locomotion') || t.chapter.includes('Excretory')) {
          fbChapter = 'Human Physiology';
        } else if (t.chapter.includes('Biotechnology')) {
          fbChapter = 'Biotechnology and Its Applications';
        }

        if (fbChapter) {
          const fbQs = await qBank.find({
            subject: { $in: [t.subject, 'Biology', 'Botany', 'Zoology'] },
            chapter: fbChapter,
            _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) }
          }).limit(TARGET_COUNT - selectedIds.size).toArray();

          for (const q of fbQs) selectedIds.add(q._id.toString());
        }
      }

      const finalIds = Array.from(selectedIds).slice(0, TARGET_COUNT).map(id => ObjectId.createFromHexString(id));

      await tPapers.updateOne(
        { testId: t.id },
        {
          $set: {
            testId: t.id,
            title: t.title,
            exam: 'NEET',
            subject: t.subject,
            chapter: t.chapter,
            canonicalChapter: qChapter,
            classGrade: t.classGrade,
            duration: 60,
            totalMarks: 180,
            questionsCount: finalIds.length,
            targetQuestionsCount: TARGET_COUNT,
            questions: finalIds,
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

      await qBank.updateMany(
        { _id: { $in: finalIds } },
        { $addToSet: { usedInTests: t.id } }
      );

      console.log(`✅ ${t.id} successfully updated with ${finalIds.length} questions.`);
      t2Fixed++;
    }
  }

  console.log(`Chapter Test 2 audit & fix complete. Tests fixed: ${t2Fixed}`);

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

    // Step B: If still short, fetch from broader chapter pool
    if (selectedIds.size < TARGET_COUNT) {
      const chapQs = await qBank.find({
        $or: [
          { subject: qSubject, chapter: canonRegex },
          { subject: t.subject, chapter: chapRegex },
          { subject: t.subject, subTopic: chapRegex }
        ],
        _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) }
      }).limit(TARGET_COUNT - selectedIds.size).toArray();

      for (const q of chapQs) selectedIds.add(q._id.toString());
    }

    // Step C: Fallbacks for Biology/Physiology if needed
    if (selectedIds.size < TARGET_COUNT) {
      if (t.subject === 'Zoology' || t.subject === 'Botany') {
        const bioQs = await qBank.find({
          subject: { $in: ['Biology', 'Botany', 'Zoology'] },
          $or: [
            { chapter: chapRegex },
            { chapter: canonRegex },
            { subTopic: subRegex }
          ],
          _id: { $nin: Array.from(selectedIds).map(id => ObjectId.createFromHexString(id)) }
        }).limit(TARGET_COUNT - selectedIds.size).toArray();

        for (const q of bioQs) selectedIds.add(q._id.toString());
      }
    }

    const finalIds = Array.from(selectedIds).slice(0, TARGET_COUNT).map(id => ObjectId.createFromHexString(id));

    await tPapers.updateOne(
      { testId: t.id },
      {
        $set: {
          testId: t.id,
          title: t.title,
          exam: 'NEET',
          subject: t.subject,
          chapter: t.chapter,
          canonicalChapter: qChapter,
          classGrade: t.classGrade || 'All Test',
          duration: 60,
          totalMarks: 180,
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
      console.log(`Subtopic Progress: ${i + 1}/${subtopicTests.length} (Current test: ${t.id} -> ${finalIds.length}/45 Qs)`);
    }
  }

  console.log(`Subtopic tests processing complete. Fixed/Updated: ${subFixed}, Already full: ${subAlreadyFull}`);

  // 3. Comprehensive Global Post-Audit
  console.log('\n======================================================');
  console.log('🏁 FINAL POST-AUDIT: ALL NEET CHAPTERWISE & SUBTOPIC');
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

      if (qIds.length === 45) {
        perfect++;
      } else {
        defective.push({ id: t.id, count: qIds.length });
      }
    }

    console.log(`${name}:`);
    console.log(`- Total Tested: ${list.length}`);
    console.log(`- Exactly 45 Questions: ${perfect} / ${list.length}`);
    console.log(`- Duplicate IDs within test: ${duplicateErrors}`);
    if (defective.length > 0) {
      console.error(`- Defective papers (${defective.length}):`, defective);
    } else {
      console.log(`- Status: ✅ 100% PERFECT!`);
    }
  }

  await verifyGroup('NEET Chapter Test 1', chapterTestsT1);
  await verifyGroup('NEET Chapter Test 2', chapterTestsT2);
  await verifyGroup('NEET Subtopic Tests', subtopicTests);

  console.log('======================================================\n');

  await client.close();
}

assignAndAuditAllNeet().catch(err => {
  console.error(err);
  process.exit(1);
});
