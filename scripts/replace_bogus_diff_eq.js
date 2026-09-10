// scripts/replace_bogus_diff_eq.js
// Executes in-place replacement and repair for all 220 Differential Equations questions,
// standardizes marks, and reconstructs 1 chapter test paper and 2 subtopic test papers.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineDiffEq } = require('./repaired_genuine_diff_eq.js');

const sub1 = require('./data_jee_diff_eq_subtopic1.js');
const sub2 = require('./data_jee_diff_eq_subtopic2.js');
const sub3 = require('./data_jee_diff_eq_subtopic3.js');
const sub4 = require('./data_jee_diff_eq_subtopic4.js');
const sub5 = require('./data_jee_diff_eq_subtopic5.js');
const sub6 = require('./data_jee_diff_eq_subtopic6.js');

const CHAPTER_NAME = 'Differential Equations';

const SUBTOPICS_DATA = [
  { name: 'Exact differential equations and integrating factors', questions: sub1 },
  { name: 'Formation of differential equations', questions: sub2 },
  { name: 'Homogeneous equations', questions: sub3 },
  { name: 'Linear differential equations', questions: sub4 },
  { name: 'Order and degree', questions: sub5 },
  { name: 'Separation of variables', questions: sub6 }
];

function normalizeItem(q) {
  let type = q.type || q.questionType || 'MCQ';
  let qType = 'MCQ (Multiple Choice Question)';
  let marks = 4;
  let negativeMarks = 1;
  let options = q.options || [];
  let correctAnswer = q.correctAnswer;

  if (type === 'MCQ' || type === 'MCQ (Multiple Choice Question)' || type === 'SINGLE' || type === 'multiple_choice') {
    type = 'MCQ';
    qType = 'MCQ (Multiple Choice Question)';
    if (typeof correctAnswer === 'string' && options.length > 0) {
      const idx = options.indexOf(correctAnswer);
      if (idx !== -1) correctAnswer = idx;
    }
  } else if (type === 'AR' || type === 'ASSERTION_REASON' || type === 'Assertion-Reason Question' || type === 'Assertion-Reason' || type === 'assertion_reason') {
    type = 'ASSERTION_REASON';
    qType = 'Assertion-Reason Question';
    if (typeof correctAnswer === 'string' && options.length > 0) {
      const idx = options.indexOf(correctAnswer);
      if (idx !== -1) correctAnswer = idx;
    }
  } else if (type === 'NUM' || type === 'NUMERICAL' || type === 'Numerical Value Question' || type === 'numerical') {
    type = 'NUMERICAL';
    qType = 'Numerical Value Question';
    negativeMarks = 0;
    options = [];
    correctAnswer = String(correctAnswer);
  }

  return {
    question: q.question,
    options,
    correctAnswer,
    explanation: q.explanation,
    type,
    questionType: qType,
    difficulty: q.difficulty || 'Medium',
    marks,
    negativeMarks
  };
}

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB database:', db.databaseName);

  // 1. Repair Genuine Questions (40 questions)
  console.log('\n--- 1. Repairing 40 Genuine Questions In-Place ---');
  let genuineRepairedCount = 0;
  for (const [idStr, patch] of Object.entries(repairedGenuineDiffEq)) {
    const res = await db.collection('questionBank').updateOne(
      { _id: new ObjectId(idStr) },
      {
        $set: {
          question: patch.question,
          options: patch.options,
          correctAnswer: patch.correctAnswer,
          explanation: patch.explanation,
          marks: 4,
          negativeMarks: 1,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
          subject: 'Mathematics',
          class: 'Class 12',
          chapter: CHAPTER_NAME,
          topic: CHAPTER_NAME,
          exam: 'JEE Main',
          updatedAt: new Date()
        }
      }
    );
    if (res.matchedCount === 1) genuineRepairedCount++;
  }
  console.log(`Repaired ${genuineRepairedCount} / 40 genuine questions.`);

  // 2. In-place Replacement of Bogus Generator Questions (180 questions: 30 per subtopic)
  console.log('\n--- 2. Replacing 180 Bogus Generator Questions In-Place ---');
  let totalReplaced = 0;

  for (const st of SUBTOPICS_DATA) {
    console.log(`Processing subtopic: "${st.name}"...`);
    const bogusDocs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: st.name,
      source: { $ne: 'Question Bank' }
    }).sort({ _id: 1 }).toArray();

    if (bogusDocs.length !== 30) {
      throw new Error(`Expected 30 bogus documents for "${st.name}", found ${bogusDocs.length}`);
    }

    for (let i = 0; i < 30; i++) {
      const targetDoc = bogusDocs[i];
      const newQ = normalizeItem(st.questions[i]);

      await db.collection('questionBank').updateOne(
        { _id: targetDoc._id },
        {
          $set: {
            question: newQ.question,
            options: newQ.options,
            correctAnswer: newQ.correctAnswer,
            explanation: newQ.explanation,
            type: newQ.type,
            questionType: newQ.questionType,
            difficulty: newQ.difficulty,
            marks: newQ.marks,
            negativeMarks: newQ.negativeMarks,
            subject: 'Mathematics',
            class: 'Class 12',
            chapter: CHAPTER_NAME,
            topic: CHAPTER_NAME,
            subTopic: st.name,
            source: 'JEE Main 10-Year Advanced Pattern Generator',
            exam: 'JEE Main',
            updatedAt: new Date()
          }
        }
      );
      totalReplaced++;
    }
  }
  console.log(`Successfully replaced ${totalReplaced} bogus generator questions.`);

  // 3. Standardize Marks and Class Across ALL 220 Questions
  console.log('\n--- 3. Standardizing Marking Scheme & Class Across QuestionBank ---');
  const classUpdate = await db.collection('questionBank').updateMany(
    { chapter: CHAPTER_NAME },
    { $set: { class: 'Class 12' } }
  );
  const mcqUpdate = await db.collection('questionBank').updateMany(
    { chapter: CHAPTER_NAME, type: { $in: ['MCQ', 'ASSERTION_REASON'] } },
    { $set: { marks: 4, negativeMarks: 1 } }
  );
  const numUpdate = await db.collection('questionBank').updateMany(
    { chapter: CHAPTER_NAME, type: 'NUMERICAL' },
    { $set: { marks: 4, negativeMarks: 0 } }
  );
  console.log(`Standardized class for ${classUpdate.modifiedCount} questions.`);
  console.log(`Standardized marking: ${mcqUpdate.modifiedCount} MCQ/AR, ${numUpdate.modifiedCount} NUM.`);

  // 4. Reconstruct Test Papers
  console.log('\n--- 4. Reconstructing Test Papers in testPapers ---');

  // A. Chapter Test Paper: 6a9e2845c527cd38431011bb
  console.log('Reconstructing Chapter Test Paper (6a9e2845c527cd38431011bb)...');
  const chapterTestId = new ObjectId('6a9e2845c527cd38431011bb');
  const chapterMCQs = [];
  const chapterNUMs = [];

  // 20 MCQs from across the 6 subtopics (4, 4, 3, 3, 3, 3)
  const mcqQuotas = [4, 4, 3, 3, 3, 3]; // sum = 20
  const numQuotas = [1, 1, 1, 1, 1, 0]; // sum = 5

  for (let sIdx = 0; sIdx < SUBTOPICS_DATA.length; sIdx++) {
    const st = SUBTOPICS_DATA[sIdx];
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: st.name,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(mcqQuotas[sIdx]).project({ _id: 1 }).toArray();

    chapterMCQs.push(...mcqs.map(q => q._id));

    if (numQuotas[sIdx] > 0) {
      const nums = await db.collection('questionBank').find({
        chapter: CHAPTER_NAME,
        subTopic: st.name,
        type: 'NUMERICAL'
      }).limit(numQuotas[sIdx]).project({ _id: 1 }).toArray();

      chapterNUMs.push(...nums.map(q => q._id));
    }
  }

  const allChapterQuestions = [...chapterMCQs, ...chapterNUMs];
  console.log(`Chapter Test Paper questions selected: ${allChapterQuestions.length} (${chapterMCQs.length} MCQs, ${chapterNUMs.length} NUMs)`);

  await db.collection('testPapers').updateOne(
    { _id: chapterTestId },
    {
      $set: {
        questions: allChapterQuestions,
        totalMarks: 100,
        updatedAt: new Date()
      }
    }
  );
  console.log('Chapter test paper updated successfully.');

  // B. Subtopic Test 1: Order and degree (6a9e288ac527cd384310133b)
  console.log('\nReconstructing Subtopic Test Paper (6a9e288ac527cd384310133b: Order and degree)...');
  const sub1TestId = new ObjectId('6a9e288ac527cd384310133b');
  const sub1TargetTopics = ['Order and degree', 'Formation of differential equations'];
  const sub1MCQs = [];
  const sub1NUMs = [];

  for (const t of sub1TargetTopics) {
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: t,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(10).project({ _id: 1 }).toArray();
    sub1MCQs.push(...mcqs.map(q => q._id));
  }

  const numsOD = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Order and degree',
    type: 'NUMERICAL'
  }).limit(3).project({ _id: 1 }).toArray();
  sub1NUMs.push(...numsOD.map(q => q._id));

  const numsForm = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Formation of differential equations',
    type: 'NUMERICAL'
  }).limit(2).project({ _id: 1 }).toArray();
  sub1NUMs.push(...numsForm.map(q => q._id));

  const allSub1Questions = [...sub1MCQs, ...sub1NUMs];
  console.log(`Subtopic Test 1 questions selected: ${allSub1Questions.length} (${sub1MCQs.length} MCQs, ${sub1NUMs.length} NUMs)`);

  await db.collection('testPapers').updateOne(
    { _id: sub1TestId },
    {
      $set: {
        questions: allSub1Questions,
        totalMarks: 100,
        updatedAt: new Date()
      }
    }
  );
  console.log('Subtopic Test 1 updated successfully.');

  // C. Subtopic Test 2: Separation of variables & Linear form (6a9e288ac527cd384310133c)
  console.log('\nReconstructing Subtopic Test Paper (6a9e288ac527cd384310133c: separation of variables and linear form)...');
  const sub2TestId = new ObjectId('6a9e288ac527cd384310133c');
  const sub2TargetTopics = ['Separation of variables', 'Linear differential equations'];
  const sub2MCQs = [];
  const sub2NUMs = [];

  for (const t of sub2TargetTopics) {
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: t,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(10).project({ _id: 1 }).toArray();
    sub2MCQs.push(...mcqs.map(q => q._id));
  }

  const numsSep = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Separation of variables',
    type: 'NUMERICAL'
  }).limit(3).project({ _id: 1 }).toArray();
  sub2NUMs.push(...numsSep.map(q => q._id));

  const numsLin = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Linear differential equations',
    type: 'NUMERICAL'
  }).limit(2).project({ _id: 1 }).toArray();
  sub2NUMs.push(...numsLin.map(q => q._id));

  const allSub2Questions = [...sub2MCQs, ...sub2NUMs];
  console.log(`Subtopic Test 2 questions selected: ${allSub2Questions.length} (${sub2MCQs.length} MCQs, ${sub2NUMs.length} NUMs)`);

  await db.collection('testPapers').updateOne(
    { _id: sub2TestId },
    {
      $set: {
        questions: allSub2Questions,
        totalMarks: 100,
        updatedAt: new Date()
      }
    }
  );
  console.log('Subtopic Test 2 updated successfully.');

  console.log('\n--- ALL OPERATIONS COMPLETED SUCCESSFULLY! ---');
  await client.close();
}

main().catch(err => {
  console.error('Fatal Error during execution:', err);
  process.exit(1);
});
