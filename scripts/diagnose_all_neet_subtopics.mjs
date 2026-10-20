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

import { getCanonicalChapter } from '../src/lib/chapterMapping.cjs';

async function diagnose() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  const allNeetTests = generateNeetTests(2026);
  const subtopicTests = allNeetTests.filter(t => t.type === 'SUBTOPIC');

  console.log(`Analyzing ${subtopicTests.length} NEET subtopic tests...`);

  const results = [];
  let zeroMatch = 0;
  let lessThan45 = 0;
  let ge45 = 0;

  for (const t of subtopicTests) {
    const rawSub = (t.title || '').trim();
    const rawChap = (t.chapter || '').trim();
    const mapping = getCanonicalChapter(t.subject, rawChap);
    const canonChap = mapping.chapter || rawChap;

    const subRegex = new RegExp(rawSub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');
    const chapRegex = new RegExp(rawChap.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');
    const canonRegex = new RegExp(canonChap.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\b(and|&)\\b/gi, '(and|&)'), 'i');

    // Query 1: Direct subtopic match
    const subMatchCount = await qBank.countDocuments({
      subject: t.subject,
      $or: [
        { subTopic: subRegex },
        { topic: subRegex }
      ]
    });

    // Query 2: Chapter match
    const chapMatchCount = await qBank.countDocuments({
      subject: t.subject,
      $or: [
        { chapter: chapRegex },
        { chapter: canonRegex }
      ]
    });

    if (subMatchCount >= 45) {
      ge45++;
    } else if (subMatchCount + chapMatchCount >= 45) {
      lessThan45++;
      results.push({
        id: t.id,
        title: t.title,
        subject: t.subject,
        chapter: t.chapter,
        subMatchCount,
        chapMatchCount,
        status: 'Can be fulfilled with chapter pool'
      });
    } else {
      zeroMatch++;
      results.push({
        id: t.id,
        title: t.title,
        subject: t.subject,
        chapter: t.chapter,
        subMatchCount,
        chapMatchCount,
        status: 'SHORTAGE'
      });
    }
  }

  console.log(`\nDirect subtopic >= 45: ${ge45}`);
  console.log(`Direct subtopic < 45 but chapter pool >= 45: ${lessThan45}`);
  console.log(`Total shortage (both < 45): ${zeroMatch}`);
  if (zeroMatch > 0) {
    console.log('Shortage tests:', results.filter(r => r.status === 'SHORTAGE'));
  }

  await client.close();
}

diagnose().catch(console.error);
