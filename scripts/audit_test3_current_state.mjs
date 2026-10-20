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

function isGenuineAR(q) {
  if (!q) return false;
  if (!Array.isArray(q.options) || q.options.length < 4) return false;
  
  const rawQ = q.question || q.text || '';
  const hasARFields = Boolean(q.assertion && q.reason);
  const hasARText = /Assertion/i.test(rawQ) && /Reason/i.test(rawQ);
  if (!hasARFields && !hasARText) return false;

  const ansIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer :
                 typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex :
                 typeof q.answer === 'number' ? q.answer :
                 typeof q.correctOption === 'string' ? ['a','b','c','d'].indexOf(q.correctOption.toLowerCase()) :
                 typeof q.answer === 'string' && /^[a-d]$/i.test(q.answer) ? ['a','b','c','d'].indexOf(q.answer.toLowerCase()) : -1;
  if (ansIdx < 0 || ansIdx > 3) return false;

  return true;
}

async function runAudit() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('No MONGODB_URI in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const tPapers = db.collection('testPapers');
  const qBank = db.collection('questionBank');

  console.log('Connected to MongoDB.');

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

  console.log(`Total chapters to audit: ${allChapters.length}`);

  let test3Audited = 0;
  let test3With20Qs = 0;
  let test3WithNonAR = 0;
  let totalNonARFoundInTest3 = 0;
  let test3WithDuplicates = 0;
  const chaptersWithShortage = [];

  for (const ch of allChapters) {
    const test3Id = `${ch.category}-CHAPTER-${ch.subject}-${ch.chapter.replace(/\s+/g, '-')}-${ch.classGrade}-TEST-3`;
    const paper = await tPapers.findOne({ testId: test3Id });

    if (!paper) {
      console.log(`⚠️ Missing paper for ${test3Id}`);
      continue;
    }
    test3Audited++;

    const qIds = paper.questions || [];
    if (new Set(qIds.map(id => id.toString())).size !== qIds.length) {
      test3WithDuplicates++;
      console.log(`⚠️ Duplicate question ID within Test 3 in ${test3Id}`);
    }

    // Fetch the actual questions
    const questions = await qBank.find({
      _id: { $in: qIds.map(id => typeof id === 'string' ? ObjectId.createFromHexString(id) : id) }
    }).toArray();

    let genuineARCount = 0;
    let nonARCount = 0;
    for (const q of questions) {
      if (isGenuineAR(q)) {
        genuineARCount++;
      } else {
        nonARCount++;
      }
    }

    if (nonARCount > 0) {
      test3WithNonAR++;
      totalNonARFoundInTest3 += nonARCount;
      console.log(`❌ ${test3Id} has ${nonARCount} non-AR questions! (Genuine AR: ${genuineARCount}, Total: ${qIds.length})`);
    }

    if (genuineARCount === 20 && qIds.length === 20) {
      test3With20Qs++;
    } else {
      chaptersWithShortage.push({
        testId: test3Id,
        chapter: ch.chapter,
        subject: ch.subject,
        exam: ch.exam,
        classGrade: ch.classGrade,
        assigned: qIds.length,
        genuineARCount
      });
    }
  }

  console.log('\n--- Test 3 Current Audit Summary ---');
  console.log(`Total Test 3 audited: ${test3Audited}`);
  console.log(`Test 3 with exactly 20 genuine AR questions: ${test3With20Qs}`);
  console.log(`Test 3 containing non-AR questions: ${test3WithNonAR}`);
  console.log(`Total non-AR questions across all Test 3: ${totalNonARFoundInTest3}`);
  console.log(`Test 3 with duplicate IDs: ${test3WithDuplicates}`);
  console.log(`Chapters with shortage or non-20 count: ${chaptersWithShortage.length}`);
  if (chaptersWithShortage.length > 0) {
    console.log('Shortage Details:', chaptersWithShortage);
  }

  await client.close();
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
