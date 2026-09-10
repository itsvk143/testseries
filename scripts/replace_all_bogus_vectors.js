// scripts/replace_all_bogus_vectors.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

const s1 = require('./data_jee_vectors_subtopic1.js');
const s2 = require('./data_jee_vectors_subtopic2.js');
const s3 = require('./data_jee_vectors_subtopic3.js');
const s4 = require('./data_jee_vectors_subtopic4.js');
const s5 = require('./data_jee_vectors_subtopic5.js');
const repairs = require('./repaired_genuine_vectors.js');

const subtopicsData = [
  { name: 'Vector addition and unit vectors', data: s1 },
  { name: 'Section formula and projection of vectors', data: s2 },
  { name: 'Collinearity and coplanarity of vectors', data: s3 },
  { name: 'Position vectors', data: s4 },
  { name: 'Scalar and vector products', data: s5 }
];

function normalizeQuestion(raw, subtopicName, idx) {
  let type, questionType, negativeMarks, correctAnswer, options;

  if (idx < 10) {
    type = 'MCQ';
    questionType = 'MCQ (Multiple Choice Question)';
    negativeMarks = 1;
    correctAnswer = raw.correctAnswer;
    options = raw.options;
  } else if (idx < 20) {
    type = 'ASSERTION_REASON';
    questionType = 'Assertion–Reasoning';
    negativeMarks = 1;
    correctAnswer = raw.correctAnswer;
    options = raw.options;
  } else {
    type = 'NUMERICAL';
    questionType = 'Numerical';
    negativeMarks = 0;
    correctAnswer = raw.correctAnswer;
    options = [];
  }

  return {
    subject: 'Mathematics',
    class: 'Class 12',
    chapter: 'Vectors',
    topic: 'Vectors',
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
      chapter: /vector/i,
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

  console.log('\n--- STEP 3: Standardising Marking Scheme across all 170 questions ---');
  const marksResMCQ = await qb.updateMany(
    { chapter: /vector/i, type: { $in: ['MCQ', 'ASSERTION_REASON'] } },
    { $set: { marks: 4, negativeMarks: 1, updatedAt: new Date() } }
  );
  const marksResNUM = await qb.updateMany(
    { chapter: /vector/i, type: 'NUMERICAL' },
    { $set: { marks: 4, negativeMarks: 0, updatedAt: new Date() } }
  );
  console.log(`Updated marks: ${marksResMCQ.modifiedCount} MCQ/AR, ${marksResNUM.modifiedCount} NUM.`);

  console.log('\n--- STEP 4: Reconstructing Test Papers with 20 MCQs + 5 NUMs ---');
  const chapterTestId = new ObjectId('6a9e2845c527cd38431011bd');
  const subtopicScalarTestId = new ObjectId('6a9e288bc527cd3843101343');
  const subtopicProjTestId = new ObjectId('6a9e288cc527cd3843101344');

  // Fetch all 170 Vectors questions
  const allVectorsDocs = await qb.find({ chapter: /vector/i }).toArray();
  console.log(`Total Vectors documents in DB: ${allVectorsDocs.length}`);

  const mcqDocs = allVectorsDocs.filter(d => d.type === 'MCQ');
  const numDocs = allVectorsDocs.filter(d => d.type === 'NUMERICAL');
  console.log(`Available MCQ docs: ${mcqDocs.length}, Available NUM docs: ${numDocs.length}`);

  // Test 1: Chapter Test (20 MCQs + 5 NUMs)
  // Distribute across subtopics: indices 0..19 of MCQs, 0..4 of NUMs
  const test1Questions = [
    ...mcqDocs.slice(0, 20).map(d => d._id),
    ...numDocs.slice(0, 5).map(d => d._id)
  ];

  // Test 2: Subtopic Test (Scalar and vector products): 20 MCQs from Scalar and vector products + 5 NUMs
  const scalarMCQs = allVectorsDocs.filter(d => d.type === 'MCQ' && d.subTopic === 'Scalar and vector products');
  const scalarNUMs = allVectorsDocs.filter(d => d.type === 'NUMERICAL' && d.subTopic === 'Scalar and vector products');
  console.log(`Scalar subtopic: ${scalarMCQs.length} MCQs, ${scalarNUMs.length} NUMs.`);
  const test2Questions = [
    ...scalarMCQs.slice(0, 20).map(d => d._id),
    ...scalarNUMs.slice(0, 5).map(d => d._id)
  ];

  // Test 3: Subtopic Test (projection of vectors): 20 MCQs + 5 NUMs
  // 10 MCQs from Section formula & projection + 5 from Position vectors + 5 from Vector addition
  const projMCQs = allVectorsDocs.filter(d => d.type === 'MCQ' && d.subTopic === 'Section formula and projection of vectors');
  const posMCQs = allVectorsDocs.filter(d => d.type === 'MCQ' && d.subTopic === 'Position vectors');
  const addMCQs = allVectorsDocs.filter(d => d.type === 'MCQ' && d.subTopic === 'Vector addition and unit vectors');
  const projNUMs = allVectorsDocs.filter(d => d.type === 'NUMERICAL' && d.subTopic === 'Section formula and projection of vectors');

  const test3MCQs = [
    ...projMCQs.slice(0, 10),
    ...posMCQs.slice(0, 5),
    ...addMCQs.slice(0, 5)
  ];
  const test3Questions = [
    ...test3MCQs.map(d => d._id),
    ...projNUMs.slice(0, 5).map(d => d._id)
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
  console.log(`Reconstructed Chapter Test (${chapterTestId}) with ${test1Questions.length} pure Vectors questions.`);

  await tp.updateOne(
    { _id: subtopicScalarTestId },
    {
      $set: {
        questions: test2Questions,
        totalMarks: 100,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Scalar and Vector Products Test (${subtopicScalarTestId}) with ${test2Questions.length} pure questions (purged 12 Statistics questions).`);

  await tp.updateOne(
    { _id: subtopicProjTestId },
    {
      $set: {
        questions: test3Questions,
        totalMarks: 100,
        standardQuestionsCount: 25,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Projection of Vectors Test (${subtopicProjTestId}) with ${test3Questions.length} pure questions (purged 20 Statistics questions).`);

  await client.close();
  console.log('\n✅ ALL REPLACEMENTS, REPAIRS, AND RECONSTRUCTIONS COMPLETED SUCCESSFULLY!');
}

run().catch(err => {
  console.error('FAILED:', err);
  process.exit(1);
});
