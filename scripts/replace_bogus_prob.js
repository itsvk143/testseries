// scripts/replace_bogus_prob.js
// In-place database update for Probability (Class 12, Mathematics)
// 1. Updates 41 genuine questions with vetted LaTeX, correct keys, and clean explanations.
// 2. Replaces 210 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test papers:
//    - 6a9e2845c527cd38431011c0 ("Probability" Chapter Test)
//    - 6a9e288ec527cd384310134e ("Conditional probability" Subtopic Test)
//    - 6a9e288ec527cd3843101351 ("probability distribution" Subtopic Test)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineProb } = require('./repaired_genuine_prob');
const { subtopic1Questions } = require('./data_jee_prob_subtopic1');
const { subtopic2Questions } = require('./data_jee_prob_subtopic2');
const { subtopic3Questions } = require('./data_jee_prob_subtopic3');
const { subtopic4Questions } = require('./data_jee_prob_subtopic4');
const { subtopic5Questions } = require('./data_jee_prob_subtopic5');
const { subtopic6Questions } = require('./data_jee_prob_subtopic6');
const { subtopic7Questions } = require('./data_jee_prob_subtopic7');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log('✅ Connected to MongoDB');

  const db = client.db();
  const qb = db.collection('questionBank');

  // STEP 1: Update 41 genuine questions
  console.log('\n--- Step 1: Updating 41 genuine questions ---');
  let genuineUpdated = 0;
  for (const q of repairedGenuineProb) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 12',
        subject: 'Mathematics',
        chapter: 'Probability',
        topic: 'Probability',
        subtopic: q.subtopic,
        subTopic: q.subtopic,
        question: q.question,
        options: q.options,
        correctOption: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        solution: q.explanation || q.solution,
        explanation: q.explanation || q.solution,
        type: q.type || 'single_choice',
        questionType: q.type === 'assertion_reason' ? 'Assertion–Reasoning' : 'MCQ (Multiple Choice Question)',
        marks: 4,
        negativeMarks: 1,
        difficulty: q.difficulty || 'medium',
        source: 'Question Bank',
        updatedAt: new Date()
      }
    };
    const res = await qb.updateOne({ _id: docId }, updateDoc);
    if (res.matchedCount > 0) genuineUpdated++;
  }
  console.log(`Updated ${genuineUpdated}/41 genuine questions.`);

  // STEP 2: Update 210 generator questions in-place by subtopic
  console.log('\n--- Step 2: Replacing 210 bogus generator questions in-place ---');
  const genuineIds = repairedGenuineProb.map(q => new ObjectId(q._id));

  const subtopicMap = [
    { name: "Bayes' theorem", questions: subtopic1Questions },
    { name: 'Conditional probability', questions: subtopic2Questions },
    { name: 'Geometric probability and odds', questions: subtopic3Questions },
    { name: 'Independent events', questions: subtopic4Questions },
    { name: 'Probability distribution', questions: subtopic5Questions },
    { name: 'Random variables, expectation, and variance', questions: subtopic6Questions },
    { name: 'Total probability theorem', questions: subtopic7Questions }
  ];

  let totalGeneratorUpdated = 0;

  for (const group of subtopicMap) {
    const docs = await qb.find({
      chapter: 'Probability',
      _id: { $nin: genuineIds },
      $or: [{ subtopic: group.name }, { subTopic: group.name }]
    }).sort({ _id: 1 }).toArray();

    console.log(`Found ${docs.length} docs for subtopic "${group.name}". Matching with ${group.questions.length} questions...`);

    if (docs.length !== group.questions.length) {
      throw new Error(`Count mismatch for ${group.name}: found ${docs.length} docs, but have ${group.questions.length} questions`);
    }

    for (let i = 0; i < docs.length; i++) {
      const doc = docs[i];
      const q = group.questions[i];

      let questionType = 'MCQ (Multiple Choice Question)';
      if (q.type === 'assertion_reason') questionType = 'Assertion–Reasoning';
      if (q.type === 'numerical') questionType = 'Numerical';

      const updateDoc = {
        $set: {
          class: 'Class 12',
          subject: 'Mathematics',
          chapter: 'Probability',
          topic: 'Probability',
          subtopic: group.name,
          subTopic: group.name,
          question: q.question,
          options: q.options || [],
          correctOption: q.correctOption !== undefined ? q.correctOption : null,
          correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
          solution: q.solution,
          explanation: q.solution,
          type: q.type,
          questionType: questionType,
          marks: q.marks,
          negativeMarks: q.negativeMarks,
          difficulty: q.difficulty || 'medium',
          source: 'JEE Main Previous Years',
          updatedAt: new Date()
        }
      };

      await qb.updateOne({ _id: doc._id }, updateDoc);
      totalGeneratorUpdated++;
    }
  }

  console.log(`Updated ${totalGeneratorUpdated}/210 generator questions in-place.`);

  // STEP 3: Reconstruct Test Papers
  console.log('\n--- Step 3: Reconstructing Test Papers in testPapers collection ---');
  const testPaperCol = db.collection('testPapers');

  // 1. Chapter Test: 6a9e2845c527cd38431011c0 ("Probability")
  const chapMcqs = await qb.find({
    chapter: 'Probability',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const chapNums = await qb.find({
    chapter: 'Probability',
    type: 'numerical'
  }).limit(5).toArray();

  const chapQuestions = [
    ...chapMcqs.map(d => d._id),
    ...chapNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2845c527cd38431011c0') },
    {
      $set: {
        questions: chapQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Chapter Test 6a9e2845c527cd38431011c0 ("Probability") with 20 MCQs + 5 Numericals.');

  // 2. Subtopic Test: 6a9e288ec527cd384310134e ("Conditional probability")
  const cpMcqs = await qb.find({
    chapter: 'Probability',
    subtopic: 'Conditional probability',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const cpNums = await qb.find({
    chapter: 'Probability',
    subtopic: 'Conditional probability',
    type: 'numerical'
  }).limit(5).toArray();

  const cpQuestions = [
    ...cpMcqs.map(d => d._id),
    ...cpNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e288ec527cd384310134e') },
    {
      $set: {
        questions: cpQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e288ec527cd384310134e ("Conditional probability") with 20 MCQs + 5 Numericals.');

  // 3. Subtopic Test: 6a9e288ec527cd3843101351 ("probability distribution")
  const pdMcqs = await qb.find({
    chapter: 'Probability',
    subtopic: 'Probability distribution',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const pdNums = await qb.find({
    chapter: 'Probability',
    subtopic: 'Probability distribution',
    type: 'numerical'
  }).limit(5).toArray();

  const pdQuestions = [
    ...pdMcqs.map(d => d._id),
    ...pdNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e288ec527cd3843101351') },
    {
      $set: {
        questions: pdQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e288ec527cd3843101351 ("probability distribution") with 20 MCQs + 5 Numericals.');

  await client.close();
  console.log('\n🎉 ALL DATABASE OPERATIONS COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('❌ Error updating database:', err);
  process.exit(1);
});
