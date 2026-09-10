// scripts/replace_bogus_statistics.js
// Executes in-place replacement and repair for all 199 Statistics questions,
// standardizes marks, and reconstructs 1 chapter test paper and 3 subtopic test papers.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineStatistics } = require('./repaired_genuine_statistics.js');
const { subtopic1Questions } = require('./data_jee_stats_subtopic1.js');
const { subtopic2Questions } = require('./data_jee_stats_subtopic2.js');
const { subtopic3Questions } = require('./data_jee_stats_subtopic3.js');
const { subtopic4Questions } = require('./data_jee_stats_subtopic4.js');
const { subtopic5Questions } = require('./data_jee_stats_subtopic5.js');

const CHAPTER_NAME = 'Statistics';

const SUBTOPICS_DATA = [
  { name: 'Coefficient of variation and grouped frequency distributions', questions: subtopic1Questions },
  { name: 'Mean deviation about mean and median', questions: subtopic2Questions },
  { name: 'Mean, median, mode', questions: subtopic3Questions },
  { name: 'Standard deviation', questions: subtopic4Questions },
  { name: 'Variance', questions: subtopic5Questions }
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB.');

  // 1. Repair Genuine Questions (49 questions)
  console.log('\n--- 1. Repairing Genuine Questions in Database ---');
  let genuineRepairedCount = 0;
  for (const [idStr, patch] of Object.entries(repairedGenuineStatistics)) {
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
  console.log(`Repaired ${genuineRepairedCount} / 49 genuine questions.`);

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

  // 3. Standardize Marks Across ALL 199 Questions
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

  // A. Chapter Test Paper: 6a9e2845c527cd38431011c1
  const chapterTestId = new ObjectId('6a9e2845c527cd38431011c1');
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
        title: 'Statistics',
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
  console.log(`Chapter Test Paper updated: 20 MCQs + 5 NUMs = ${chapterPaperQuestions.length} questions.`);

  // B. Subtopic Test Papers
  const subtopicTestConfigs = [
    {
      paperId: new ObjectId('6a9e288dc527cd384310134b'),
      title: 'Mean, median, mode',
      subTopicName: 'Mean, median, mode'
    },
    {
      paperId: new ObjectId('6a9e288dc527cd384310134c'),
      title: 'standard deviation',
      subTopicName: 'Standard deviation'
    },
    {
      paperId: new ObjectId('6a9e288ec527cd384310134d'),
      title: 'variance',
      subTopicName: 'Variance'
    }
  ];

  for (const cfg of subtopicTestConfigs) {
    const mcqs = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: cfg.subTopicName,
      type: { $in: ['MCQ', 'ASSERTION_REASON'] }
    }).limit(20).project({ _id: 1 }).toArray();

    const nums = await db.collection('questionBank').find({
      chapter: CHAPTER_NAME,
      subTopic: cfg.subTopicName,
      type: 'NUMERICAL'
    }).limit(5).project({ _id: 1 }).toArray();

    const subtopicPaperQuestions = [...mcqs.map(q => q._id), ...nums.map(q => q._id)];

    await db.collection('testPapers').updateOne(
      { _id: cfg.paperId },
      {
        $set: {
          title: cfg.title,
          exam: 'JEE Main',
          subject: 'Mathematics',
          chapter: CHAPTER_NAME,
          duration: 60,
          totalMarks: 100,
          standardQuestionsCount: 25,
          questions: subtopicPaperQuestions,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Subtopic Test Paper "${cfg.title}" updated: ${mcqs.length} MCQs + ${nums.length} NUMs = ${subtopicPaperQuestions.length} questions.`);
  }

  console.log('\nAll updates and test paper reconstructions completed successfully!');
  await client.close();
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
