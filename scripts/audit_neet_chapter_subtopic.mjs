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
const { generateNeetTests, neetChapters } = sandbox.module.exports;

async function auditNeet() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('No MONGODB_URI in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('Connected to MongoDB.');

  const allNeetTests = generateNeetTests(2026);
  const chapterTestsT1 = allNeetTests.filter(t => t.type === 'CHAPTER' && t.testNum === 1);
  const chapterTestsT2 = allNeetTests.filter(t => t.type === 'CHAPTER' && t.testNum === 2);
  const subtopicTests = allNeetTests.filter(t => t.type === 'SUBTOPIC');

  console.log(`Found in NEET definition:`);
  console.log(`- Chapter Test 1: ${chapterTestsT1.length}`);
  console.log(`- Chapter Test 2: ${chapterTestsT2.length}`);
  console.log(`- Subtopic Tests: ${subtopicTests.length}`);

  async function checkGroup(groupName, tests, expectedCount = 45) {
    console.log(`\n--- Auditing ${groupName} (Target: ${expectedCount} Qs) ---`);
    let fullCount = 0;
    let partialCount = 0;
    let missingOrZero = 0;
    const deficient = [];

    for (const t of tests) {
      const paper = await tPapers.findOne({ testId: t.id });
      const qIds = paper?.questions || [];
      const assignedCount = qIds.length;

      if (assignedCount === expectedCount) {
        fullCount++;
      } else if (assignedCount > 0) {
        partialCount++;
        deficient.push({
          id: t.id,
          title: t.title,
          subject: t.subject,
          chapter: t.chapter,
          assigned: assignedCount,
          shortage: expectedCount - assignedCount
        });
      } else {
        missingOrZero++;
        deficient.push({
          id: t.id,
          title: t.title,
          subject: t.subject,
          chapter: t.chapter,
          assigned: 0,
          shortage: expectedCount
        });
      }
    }

    console.log(`Total ${groupName}: ${tests.length}`);
    console.log(`- Exactly ${expectedCount} questions: ${fullCount}`);
    console.log(`- Partial (>0, <${expectedCount}): ${partialCount}`);
    console.log(`- Missing or 0 questions: ${missingOrZero}`);
    return deficient;
  }

  const defT1 = await checkGroup('NEET Chapter Test 1', chapterTestsT1, 45);
  const defT2 = await checkGroup('NEET Chapter Test 2', chapterTestsT2, 45);
  const defSub = await checkGroup('NEET Subtopic Tests', subtopicTests, 45);

  if (defT1.length > 0) {
    console.log(`\nDeficient Chapter Test 1 list (${defT1.length}):`, defT1.slice(0, 10));
  }
  if (defT2.length > 0) {
    console.log(`\nDeficient Chapter Test 2 list (${defT2.length}):`, defT2.slice(0, 10));
  }
  if (defSub.length > 0) {
    console.log(`\nDeficient Subtopic Tests list (${defSub.length}):`, defSub.slice(0, 15));
  }

  await client.close();
}

auditNeet().catch(console.error);
