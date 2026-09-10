// scripts/replace_bogus_limits.js
// Executes in-place replacement and repair for all 170 Limits, Continuity & Differentiability questions,
// standardizes marks, and reconstructs 1 chapter test paper and 2 subtopic test papers.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineLimits } = require('./repaired_genuine_limits.js');
const { subtopic1Questions } = require('./data_jee_limits_subtopic1.js');
const { subtopic2Questions } = require('./data_jee_limits_subtopic2.js');
const { subtopic3Questions } = require('./data_jee_limits_subtopic3.js');
const { subtopic4Questions } = require('./data_jee_limits_subtopic4.js');
const { subtopic5Questions } = require('./data_jee_limits_subtopic5.js');

const CHAPTER_NAME = 'Limits, Continuity & Differentiability';

const SUBTOPICS_DATA = [
  { name: 'Continuity of functions at a point and in an interval', questions: subtopic1Questions },
  { name: 'Derivative as a rate of change', questions: subtopic2Questions },
  { name: 'Differentiability and differentiation rules', questions: subtopic3Questions },
  { name: "L'Hospital rule", questions: subtopic4Questions },
  { name: 'Standard limits and evaluation of indeterminate forms', questions: subtopic5Questions }
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB.');

  // 1. Repair Genuine Questions (20 questions)
  console.log('\n--- 1. Repairing Genuine Questions in Database ---');
  let genuineRepairedCount = 0;
  for (const [idStr, patch] of Object.entries(repairedGenuineLimits)) {
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
  console.log(`Repaired ${genuineRepairedCount} / 20 genuine questions.`);

  // 2. In-place Replacement of Bogus Generator Questions (150 questions: 30 per subtopic)
  console.log('\n--- 2. Replacing 150 Bogus Generator Questions In-Place ---');
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
      const newQ = st.questions[i];

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

  // 3. Standardize Marks Across ALL 170 Questions
  console.log('\n--- 3. Standardizing Marking Scheme ---');
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
  console.log('\n--- 4. Reconstructing Test Papers ---');

  // A. Chapter Test Paper: 6a9e2844c527cd38431011b8
  const chapterTestId = new ObjectId('6a9e2844c527cd38431011b8');
  // Select 20 MCQs (4 from each subtopic: 2 genuine/replaced MCQ + 2 AR)
  const chapterMCQs = [];
  const chapterNUMs = [];

  for (const st of SUBTOPICS_DATA) {
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: st.name,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(4).project({ _id: 1 }).toArray();

    const nums = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: st.name,
      type: 'NUMERICAL'
    }).limit(1).project({ _id: 1 }).toArray();

    chapterMCQs.push(...mcqs.map(q => q._id));
    chapterNUMs.push(...nums.map(q => q._id));
  }

  const chapterPaperQuestions = [...chapterMCQs, ...chapterNUMs];
  await db.collection('testPapers').updateOne(
    { _id: chapterTestId },
    {
      $set: {
        title: 'Limits, Continuity & Differentiability',
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
  console.log(`Reconstructed Chapter Test (${chapterTestId}): 20 MCQs + 5 NUMs = ${chapterPaperQuestions.length} total questions.`);

  // B. Subtopic Test 1: L'Hospital rule (6a9e2888c527cd3843101335)
  const lhopitalTestId = new ObjectId('6a9e2888c527cd3843101335');
  const lhopitalMCQs = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: "L'Hospital rule",
    type: { $in: ['MCQ', 'ASSERTION_REASON'] }
  }).limit(20).project({ _id: 1 }).toArray();

  const lhopitalNUMs = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: "L'Hospital rule",
    type: 'NUMERICAL'
  }).limit(5).project({ _id: 1 }).toArray();

  const lhopitalQuestions = [...lhopitalMCQs.map(q => q._id), ...lhopitalNUMs.map(q => q._id)];
  await db.collection('testPapers').updateOne(
    { _id: lhopitalTestId },
    {
      $set: {
        title: "L'Hospital rule",
        exam: 'JEE Main',
        subject: 'Mathematics',
        chapter: CHAPTER_NAME,
        subTopic: "L'Hospital rule",
        duration: 60,
        totalMarks: 100,
        standardQuestionsCount: 25,
        questions: lhopitalQuestions,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Subtopic Test L'Hospital rule (${lhopitalTestId}): 20 MCQs + 5 NUMs = ${lhopitalQuestions.length} total questions.`);

  // C. Subtopic Test 2: derivative as a rate of change (6a9e2888c527cd3843101336)
  const rateTestId = new ObjectId('6a9e2888c527cd3843101336');
  const rateMCQs = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Derivative as a rate of change',
    type: { $in: ['MCQ', 'ASSERTION_REASON'] }
  }).limit(20).project({ _id: 1 }).toArray();

  const rateNUMs = await db.collection('questionBank').find({
    chapter: CHAPTER_NAME,
    subTopic: 'Derivative as a rate of change',
    type: 'NUMERICAL'
  }).limit(5).project({ _id: 1 }).toArray();

  const rateQuestions = [...rateMCQs.map(q => q._id), ...rateNUMs.map(q => q._id)];
  await db.collection('testPapers').updateOne(
    { _id: rateTestId },
    {
      $set: {
        title: 'derivative as a rate of change',
        exam: 'JEE Main',
        subject: 'Mathematics',
        chapter: CHAPTER_NAME,
        subTopic: 'Derivative as a rate of change',
        duration: 60,
        totalMarks: 100,
        standardQuestionsCount: 25,
        questions: rateQuestions,
        updatedAt: new Date()
      }
    }
  );
  console.log(`Reconstructed Subtopic Test derivative as a rate of change (${rateTestId}): 20 MCQs + 5 NUMs = ${rateQuestions.length} total questions.`);

  await client.close();
  console.log('\nAll operations completed successfully.');
}

main().catch(err => {
  console.error('Fatal error executing replace_bogus_limits:', err);
  process.exit(1);
});
