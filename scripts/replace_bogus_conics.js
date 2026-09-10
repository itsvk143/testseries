// scripts/replace_bogus_conics.js
// Executes in-place replacement and repair for all 210 Conic Sections questions,
// standardizes marks, and reconstructs 1 chapter test paper and 2 subtopic test papers.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineConics } = require('./repaired_genuine_conics.js');

const sub1Raw = require('./data_jee_conics_subtopic1.js');
const sub2Raw = require('./data_jee_conics_subtopic2.js');
const sub3Raw = require('./data_jee_conics_subtopic3.js');
const sub4Raw = require('./data_jee_conics_subtopic4.js');
const sub5Raw = require('./data_jee_conics_subtopic5.js');
const sub6Raw = require('./data_jee_conics_subtopic6.js');

const sub1 = sub1Raw.subtopic1Questions || sub1Raw;
const sub2 = sub2Raw.subtopic2Questions || sub2Raw;
const sub3 = sub3Raw.subtopic3Questions || sub3Raw;
const sub4 = sub4Raw.subtopic4Questions || sub4Raw;
const sub5 = sub5Raw.subtopic5Questions || sub5Raw;
const sub6 = sub6Raw.subtopic6Questions || sub6Raw;

const CHAPTER_NAME = 'Conic Sections (Parabola, Ellipse, Hyperbola)';

const SUBTOPICS_DATA = [
  { name: 'Directrix and focus equations', questions: sub1 },
  { name: 'Ellipse equations', questions: sub2 },
  { name: 'Focal properties and eccentricity of conics', questions: sub3 },
  { name: 'Hyperbola equations', questions: sub4 },
  { name: 'Rectangular hyperbola and asymptotes', questions: sub5 },
  { name: 'Standard forms of parabola', questions: sub6 }
];

function normalizeItem(q) {
  let type = q.type || q.questionType;
  let qType = 'MCQ (Multiple Choice Question)';
  let marks = 4;
  let negativeMarks = 1;
  let options = q.options || [];
  let correctAnswer = q.correctAnswer;

  if (type === 'MCQ' || type === 'MCQ (Multiple Choice Question)' || type === 'SINGLE') {
    type = 'MCQ';
    qType = 'MCQ (Multiple Choice Question)';
    if (typeof correctAnswer === 'string') {
      correctAnswer = options.indexOf(correctAnswer);
    }
  } else if (type === 'AR' || type === 'ASSERTION_REASON' || type === 'Assertion-Reason Question') {
    type = 'ASSERTION_REASON';
    qType = 'Assertion-Reason Question';
    if (typeof correctAnswer === 'string') {
      correctAnswer = options.indexOf(correctAnswer);
    }
  } else if (type === 'NUM' || type === 'NUMERICAL' || type === 'Numerical Value Question') {
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

  // 1. Repair Genuine Questions (30 questions)
  console.log('\n--- 1. Repairing 30 Genuine Questions In-Place ---');
  let genuineRepairedCount = 0;
  for (const [idStr, patch] of Object.entries(repairedGenuineConics)) {
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
  console.log(`Repaired ${genuineRepairedCount} / 30 genuine questions.`);

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

  // 3. Standardize Marks Across ALL 210 Questions
  console.log('\n--- 3. Standardizing Marking Scheme Across QuestionBank ---');
  const mcqUpdate = await db.collection('questionBank').updateMany(
    { chapter: CHAPTER_NAME, type: { $in: ['MCQ', 'ASSERTION_REASON'] } },
    { $set: { marks: 4, negativeMarks: 1 } }
  );
  const numUpdate = await db.collection('questionBank').updateMany(
    { chapter: CHAPTER_NAME, type: 'NUMERICAL' },
    { $set: { marks: 4, negativeMarks: 0 } }
  );
  console.log(`Standardized marking: ${mcqUpdate.modifiedCount} MCQ/AR, ${numUpdate.modifiedCount} NUM.`);

  // 4. Reconstruct Test Papers
  console.log('\n--- 4. Reconstructing Test Papers in testPapers ---');

  // A. Chapter Test Paper: 6a9e2844c527cd38431011b5
  console.log('Reconstructing Chapter Test Paper (6a9e2844c527cd38431011b5)...');
  const chapterTestId = new ObjectId('6a9e2844c527cd38431011b5');
  const chapterMCQs = [];
  const chapterNUMs = [];

  // Pick 3-4 MCQs and 1 NUM from each of the 6 subtopics (total 20 MCQs + 5 NUMs = 25)
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

  const chapterPaperQuestions = [...chapterMCQs, ...chapterNUMs];
  await db.collection('testPapers').updateOne(
    { _id: chapterTestId },
    {
      $set: {
        title: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
        exam: 'JEE Main',
        subject: 'Mathematics',
        chapter: CHAPTER_NAME,
        duration: 60,
        totalMarks: 100,
        standardQuestionsCount: 25,
        questions: chapterPaperQuestions,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Chapter Test Paper reconstructed: ${chapterMCQs.length} MCQs + ${chapterNUMs.length} NUMs = ${chapterPaperQuestions.length} questions.`);

  // B. Subtopic Test 1: Standard forms of parabolas, ellipses, and hyperbolas (6a9e288ac527cd3843101340)
  console.log('\nReconstructing Subtopic Test 1: Standard forms (6a9e288ac527cd3843101340)...');
  const sub1TestId = new ObjectId('6a9e288ac527cd3843101340');
  const sub1TargetSubtopics = [
    'Standard forms of parabola',
    'Ellipse equations',
    'Hyperbola equations'
  ];
  const sub1MCQs = [];
  const sub1NUMs = [];

  // Quotas: 7, 7, 6 for MCQs (20), 2, 2, 1 for NUMs (5)
  const sub1McqQuotas = [7, 7, 6];
  const sub1NumQuotas = [2, 2, 1];

  for (let i = 0; i < sub1TargetSubtopics.length; i++) {
    const sName = sub1TargetSubtopics[i];
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: sName,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(sub1McqQuotas[i]).project({ _id: 1 }).toArray();
    sub1MCQs.push(...mcqs.map(q => q._id));

    const nums = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: sName,
      type: 'NUMERICAL'
    }).limit(sub1NumQuotas[i]).project({ _id: 1 }).toArray();
    sub1NUMs.push(...nums.map(q => q._id));
  }

  const sub1Questions = [...sub1MCQs, ...sub1NUMs];
  await db.collection('testPapers').updateOne(
    { _id: sub1TestId },
    {
      $set: {
        title: 'Standard forms of parabolas, ellipses, and hyperbolas',
        exam: 'JEE Main',
        subject: 'Mathematics',
        chapter: CHAPTER_NAME,
        subtopic: 'Standard forms of parabolas, ellipses, and hyperbolas',
        duration: 60,
        totalMarks: 100,
        standardQuestionsCount: 25,
        questions: sub1Questions,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Subtopic Test 1 reconstructed: ${sub1MCQs.length} MCQs + ${sub1NUMs.length} NUMs = ${sub1Questions.length} questions (0 foreign questions).`);

  // C. Subtopic Test 2: directrix and focus (6a9e288bc527cd3843101341)
  console.log('\nReconstructing Subtopic Test 2: directrix and focus (6a9e288bc527cd3843101341)...');
  const sub2TestId = new ObjectId('6a9e288bc527cd3843101341');
  const sub2TargetSubtopics = [
    'Directrix and focus equations',
    'Focal properties and eccentricity of conics'
  ];
  const sub2MCQs = [];
  const sub2NUMs = [];

  // Quotas: 10, 10 for MCQs (20), 3, 2 for NUMs (5)
  const sub2McqQuotas = [10, 10];
  const sub2NumQuotas = [3, 2];

  for (let i = 0; i < sub2TargetSubtopics.length; i++) {
    const sName = sub2TargetSubtopics[i];
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: sName,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(sub2McqQuotas[i]).project({ _id: 1 }).toArray();
    sub2MCQs.push(...mcqs.map(q => q._id));

    const nums = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: sName,
      type: 'NUMERICAL'
    }).limit(sub2NumQuotas[i]).project({ _id: 1 }).toArray();
    sub2NUMs.push(...nums.map(q => q._id));
  }

  const sub2Questions = [...sub2MCQs, ...sub2NUMs];
  await db.collection('testPapers').updateOne(
    { _id: sub2TestId },
    {
      $set: {
        title: 'directrix and focus',
        exam: 'JEE Main',
        subject: 'Mathematics',
        chapter: CHAPTER_NAME,
        subtopic: 'directrix and focus',
        duration: 60,
        totalMarks: 100,
        standardQuestionsCount: 25,
        questions: sub2Questions,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Subtopic Test 2 reconstructed: ${sub2MCQs.length} MCQs + ${sub2NUMs.length} NUMs = ${sub2Questions.length} questions (0 foreign questions).`);

  await client.close();
  console.log('\nAll operations completed successfully.');
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
