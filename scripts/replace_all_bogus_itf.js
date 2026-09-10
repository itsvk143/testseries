// scripts/replace_all_bogus_itf.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

const s1 = require('./data_jee_itf_subtopic1.js');
const s2 = require('./data_jee_itf_subtopic2.js');
const s3 = require('./data_jee_itf_subtopic3.js');
const s4 = require('./data_jee_itf_subtopic4.js');
const s5 = require('./data_jee_itf_subtopic5.js');
const repairs = require('./repaired_genuine_itf.js');

const subtopicsData = [
  { name: 'Domain and range of inverse trigonometric functions', data: s1 },
  { name: 'Principal values', data: s2 },
  { name: 'Properties of inverse trig functions', data: s3 },
  { name: 'Sum and difference formulas for inverse trig functions', data: s4 },
  { name: 'Equations involving inverse trig functions', data: s5 }
];

function normalizeQuestion(raw, subtopicName, idx) {
  let type, questionType, negativeMarks, correctAnswer, options;

  if (idx < 10) {
    type = 'MCQ';
    questionType = 'MCQ (Multiple Choice Question)';
    negativeMarks = 1;
    correctAnswer = (raw.correctAnswer !== undefined) ? raw.correctAnswer : raw.correctOption;
    options = raw.options;
  } else if (idx < 20) {
    type = 'ASSERTION_REASON';
    questionType = 'Assertion–Reasoning';
    negativeMarks = 1;
    correctAnswer = (raw.correctAnswer !== undefined) ? raw.correctAnswer : raw.correctOption;
    options = raw.options;
  } else {
    type = 'NUMERICAL';
    questionType = 'Numerical';
    negativeMarks = 0;
    correctAnswer = (raw.correctAnswer !== undefined) ? raw.correctAnswer : raw.correctOption;
    options = [];
  }

  return {
    subject: 'Mathematics',
    class: 'Class 12',
    chapter: 'Inverse Trigonometric Functions',
    topic: 'Inverse Trigonometric Functions',
    subTopic: subtopicName,
    difficulty: raw.difficulty || 'Medium',
    type,
    questionType,
    marks: 4,
    negativeMarks,
    question: raw.question,
    options,
    correctAnswer,
    explanation: raw.explanation,
    source: 'JEE Main 10-Year Advanced Pattern Generator',
    updatedAt: new Date()
  };
}

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  console.log('--- STEP 1: In-place Replacement of 150 Bogus Generator Questions ---');

  for (const st of subtopicsData) {
    const bogusDocs = await qb.find({
      chapter: /inverse/i,
      source: { $ne: 'Question Bank' },
      subTopic: st.name
    }).sort({ _id: 1 }).toArray();

    console.log(`Subtopic "${st.name}": found ${bogusDocs.length} bogus documents in DB.`);
    if (bogusDocs.length !== 30) {
      throw new Error(`Expected 30 bogus docs for "${st.name}", found ${bogusDocs.length}`);
    }

    for (let i = 0; i < 30; i++) {
      const docId = bogusDocs[i]._id;
      const normalized = normalizeQuestion(st.data[i], st.name, i);

      await qb.updateOne(
        { _id: docId },
        {
          $set: {
            subject: normalized.subject,
            class: normalized.class,
            chapter: normalized.chapter,
            topic: normalized.topic,
            subTopic: normalized.subTopic,
            difficulty: normalized.difficulty,
            type: normalized.type,
            questionType: normalized.questionType,
            marks: normalized.marks,
            negativeMarks: normalized.negativeMarks,
            question: normalized.question,
            options: normalized.options,
            correctAnswer: normalized.correctAnswer,
            explanation: normalized.explanation,
            source: normalized.source,
            updatedAt: normalized.updatedAt
          },
          $unset: {
            correctOption: '',
            subtopic: ''
          }
        }
      );
    }
    console.log(`  Updated all 30 documents for "${st.name}".`);
  }

  console.log('\n--- STEP 2: Applying Mathematical Repairs to Genuine Questions ---');
  let repairCount = 0;
  for (const [idStr, patch] of Object.entries(repairs)) {
    const res = await qb.updateOne(
      { _id: new ObjectId(idStr) },
      {
        $set: {
          ...patch,
          updatedAt: new Date()
        }
      }
    );
    if (res.matchedCount > 0) {
      repairCount++;
      console.log(`  Repaired genuine doc ${idStr}`);
    } else {
      console.warn(`  Genuine doc ${idStr} not matched!`);
    }
  }
  console.log(`Applied repairs to ${repairCount} genuine questions.`);

  console.log('\n--- STEP 3: Standardising Marking Scheme across all 180 questions ---');
  const marksResMCQ = await qb.updateMany(
    { chapter: /inverse/i, type: { $in: ['MCQ', 'ASSERTION_REASON'] } },
    { $set: { marks: 4, negativeMarks: 1, updatedAt: new Date() } }
  );
  const marksResNUM = await qb.updateMany(
    { chapter: /inverse/i, type: 'NUMERICAL' },
    { $set: { marks: 4, negativeMarks: 0, updatedAt: new Date() } }
  );
  console.log(`Updated marks: ${marksResMCQ.modifiedCount} MCQ/AR, ${marksResNUM.modifiedCount} NUM.`);

  console.log('\n--- STEP 4: Reconstructing Test Papers with 20 MCQs + 5 NUMs ---');
  const chapterTestId = new ObjectId('6a9e2845c527cd38431011bf');
  const subtopicTestId = new ObjectId('6a9e288dc527cd384310134a');

  // Fetch all 180 ITF questions
  const allItfDocs = await qb.find({ chapter: /inverse/i }).toArray();
  console.log(`Total ITF documents in DB: ${allItfDocs.length}`);

  const mcqDocs = allItfDocs.filter(d => d.type === 'MCQ');
  const numDocs = allItfDocs.filter(d => d.type === 'NUMERICAL');
  console.log(`Available MCQ docs: ${mcqDocs.length}, Available NUM docs: ${numDocs.length}`);

  // Construct Test 1 (Chapter Test): 20 MCQs + 5 NUMs
  const test1Questions = [
    ...mcqDocs.slice(0, 20).map(d => d._id),
    ...numDocs.slice(0, 5).map(d => d._id)
  ];

  // Construct Test 2 (Subtopic Test): 20 different MCQs + 5 different NUMs
  const test2Questions = [
    ...mcqDocs.slice(20, 40).map(d => d._id),
    ...numDocs.slice(5, 10).map(d => d._id)
  ];

  await tp.updateOne(
    { _id: chapterTestId },
    {
      $set: {
        questions: test1Questions,
        totalMarks: 100,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Chapter Test (${chapterTestId}) with ${test1Questions.length} pure ITF questions.`);

  await tp.updateOne(
    { _id: subtopicTestId },
    {
      $set: {
        questions: test2Questions,
        totalMarks: 100,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Subtopic Test (${subtopicTestId}) with ${test2Questions.length} pure ITF questions (purged all Statistics questions).`);

  await client.close();
  console.log('\n✅ ALL REPLACEMENTS, REPAIRS, AND RECONSTRUCTIONS COMPLETED SUCCESSFULLY!');
}

run().catch(err => {
  console.error('FAILED:', err);
  process.exit(1);
});
