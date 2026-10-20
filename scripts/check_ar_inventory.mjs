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

export function normalizeText(txt) {
  if (!txt) return '';
  return txt.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function validateARQuestion(q) {
  if (!q) return { valid: false, reason: 'Empty question document' };

  if (!Array.isArray(q.options) || q.options.length < 4) {
    return { valid: false, reason: 'Options must have at least 4 items' };
  }

  const ansIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer :
                 typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex :
                 typeof q.answer === 'number' ? q.answer :
                 typeof q.correctOption === 'string' ? ['a','b','c','d'].indexOf(q.correctOption.toLowerCase()) :
                 typeof q.answer === 'string' && /^[a-d]$/i.test(q.answer) ? ['a','b','c','d'].indexOf(q.answer.toLowerCase()) : -1;

  if (ansIdx < 0 || ansIdx > 3) {
    return { valid: false, reason: 'Invalid or missing correct answer key' };
  }

  const rawQ = q.question || q.text || '';
  const hasARFields = Boolean(q.assertion && q.reason);
  const hasARText = /Assertion/i.test(rawQ) && /Reason/i.test(rawQ);

  if (!hasARFields && !hasARText) {
    return { valid: false, reason: 'Missing Assertion (A) or Reason (R) statements' };
  }

  if (!q.explanation || q.explanation.trim().length < 10) {
    return { valid: false, reason: 'Explanation missing or too brief' };
  }

  return { valid: true, ansIdx };
}

export function getChapterClauses(ch) {
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
    orClauses.push({ subject: 'Physics', chapter: 'Units and Measurements' });
    orClauses.push({ subject: 'Physics', chapter: 'Units & Measurements' });
  }

  if (ch.chapter === 'Gravitation') {
    orClauses.push({ subject: 'Physics', chapter: 'Gravitation' });
  }

  if (ch.chapter.includes('Kinetic Theory')) {
    orClauses.push({ subject: 'Physics', chapter: 'Kinetic Theory of Gases' });
  }

  if (ch.chapter.includes('Structure of Atom') || ch.chapter.includes('Atomic Structure')) {
    orClauses.push({ subject: 'Chemistry', chapter: 'Atomic Structure' });
    orClauses.push({ subject: 'Chemistry', chapter: 'Structure of Atom' });
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

async function checkShortages() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

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

  console.log(`Checking AR pool across ${allChapters.length} chapters (without cross-test exclusion)...`);

  const shortages = [];
  let totalPoolSufficient = 0;

  for (const ch of allChapters) {
    const { orClauses } = getChapterClauses(ch);

    const query = {
      $and: [
        { $or: orClauses },
        {
          $or: [
            { type: { $regex: /assertion/i } },
            { questionType: { $regex: /assertion/i } },
            { type: 'AR' },
            { questionType: 'AR' },
            { assertion: { $exists: true, $ne: '' } },
            { question: { $regex: /assertion/i } }
          ]
        }
      ]
    };

    const candidates = await qBank.find(query).toArray();
    const validAR = [];
    const seenTexts = new Set();
    const seenIds = new Set();

    for (const q of candidates) {
      const idStr = q._id.toString();
      if (seenIds.has(idStr)) continue;

      const val = validateARQuestion(q);
      if (!val.valid) continue;

      const norm = normalizeText(q.assertion || q.question);
      if (seenTexts.has(norm)) continue;

      seenIds.add(idStr);
      seenTexts.add(norm);
      validAR.push(q);
    }

    if (validAR.length >= 20) {
      totalPoolSufficient++;
    } else {
      shortages.push({
        exam: ch.exam,
        subject: ch.subject,
        chapter: ch.chapter,
        classGrade: ch.classGrade,
        available: validAR.length,
        shortage: 20 - validAR.length
      });
    }
  }

  console.log(`\nResults:`);
  console.log(`Sufficient (>= 20 AR questions available): ${totalPoolSufficient} / ${allChapters.length}`);
  console.log(`Shortages (< 20 AR questions available): ${shortages.length}`);
  if (shortages.length > 0) {
    console.log('Shortages breakdown:', JSON.stringify(shortages, null, 2));
  }

  await client.close();
}

if (process.argv[1]?.endsWith('check_ar_inventory.mjs')) {
  checkShortages().catch(console.error);
}
