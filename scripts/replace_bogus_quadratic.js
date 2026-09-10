// scripts/replace_bogus_quadratic.js
// In-place database update for Quadratic Equations (Class 11, Mathematics)
// 1. Updates 61 genuine questions with vetted LaTeX, correct keys, and clean solutions.
// 2. Replaces 240 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test papers:
//    - 6a9e2843c527cd38431011af ("Quadratic Equations" Chapter Test)
//    - 6a9e2885c527cd3843101327 ("roots of quadratic equations" Subtopic Test)
//    - 6a9e2885c527cd3843101328 ("relations between roots and coefficients" Subtopic Test)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineQuadratic } = require('./repaired_genuine_quadratic');
const { subtopic1Questions } = require('./data_jee_quad_subtopic1');
const { subtopic2Questions } = require('./data_jee_quad_subtopic2');
const { subtopic3Questions } = require('./data_jee_quad_subtopic3');
const { subtopic4Questions } = require('./data_jee_quad_subtopic4');
const { subtopic5Questions } = require('./data_jee_quad_subtopic5');
const { subtopic6Questions } = require('./data_jee_quad_subtopic6');
const { subtopic7Questions } = require('./data_jee_quad_subtopic7');
const { subtopic8Questions } = require('./data_jee_quad_subtopic8');

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

  // STEP 1: Update 61 genuine questions
  console.log('\n--- Step 1: Updating 61 genuine questions ---');
  let genuineUpdated = 0;
  for (const q of repairedGenuineQuadratic) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 11',
        subject: 'Mathematics',
        chapter: 'Quadratic Equations',
        topic: 'Quadratic Equations',
        subtopic: q.subtopic || 'General',
        subTopic: q.subtopic || 'General',
        question: q.question,
        options: q.options || [],
        correctOption: q.correctOption !== undefined ? q.correctOption : null,
        correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        solution: q.solution,
        explanation: q.solution,
        type: q.type || 'single_choice',
        questionType: q.type === 'assertion_reason'
          ? 'Assertion–Reasoning'
          : q.type === 'numerical'
          ? 'Numerical'
          : 'MCQ (Multiple Choice Question)',
        marks: q.marks || 4,
        negativeMarks: q.negativeMarks !== undefined ? q.negativeMarks : (q.type === 'numerical' ? 0 : 1),
        difficulty: q.difficulty || 'medium',
        source: 'Question Bank',
        updatedAt: new Date()
      }
    };
    const res = await qb.updateOne({ _id: docId }, updateDoc);
    if (res.matchedCount > 0) genuineUpdated++;
  }
  console.log(`Updated ${genuineUpdated}/61 genuine questions.`);

  // STEP 2: Update 240 generator questions in-place by subTopic
  console.log('\n--- Step 2: Replacing 240 bogus generator questions in-place ---');
  const genuineIds = repairedGenuineQuadratic.map(q => new ObjectId(q._id));

  const subtopicMap = [
    { name: 'Nature of roots', questions: subtopic1Questions },
    { name: 'Discriminant', questions: subtopic2Questions },
    { name: 'Sum and product of roots', questions: subtopic3Questions },
    { name: 'Quadratic inequalities', questions: subtopic4Questions },
    { name: 'Roots of polynomial', questions: subtopic5Questions },
    { name: 'Common roots of two quadratic equations', questions: subtopic6Questions },
    { name: 'Location of roots', questions: subtopic7Questions },
    { name: 'Maximum and minimum values of quadratic expressions', questions: subtopic8Questions }
  ];

  let totalGeneratorUpdated = 0;

  for (const group of subtopicMap) {
    const docs = await qb.find({
      chapter: 'Quadratic Equations',
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
          class: 'Class 11',
          subject: 'Mathematics',
          chapter: 'Quadratic Equations',
          topic: 'Quadratic Equations',
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

  console.log(`Updated ${totalGeneratorUpdated}/240 generator questions in-place.`);

  // STEP 3: Reconstruct Test Papers
  console.log('\n--- Step 3: Reconstructing Test Papers in testPapers collection ---');
  const testPaperCol = db.collection('testPapers');

  // 1. Chapter Test: 6a9e2843c527cd38431011af ("Quadratic Equations")
  const chapMcqs = await qb.find({
    chapter: 'Quadratic Equations',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const chapNums = await qb.find({
    chapter: 'Quadratic Equations',
    type: 'numerical'
  }).limit(5).toArray();

  const chapQuestions = [
    ...chapMcqs.map(d => d._id),
    ...chapNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2843c527cd38431011af') },
    {
      $set: {
        chapter: 'Quadratic Equations',
        subject: 'Mathematics',
        questions: chapQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Chapter Test 6a9e2843c527cd38431011af ("Quadratic Equations") with 20 MCQs + 5 Numericals.');

  // 2. Subtopic Test: 6a9e2885c527cd3843101327 ("roots of quadratic equations")
  const sub1Mcqs = await qb.find({
    chapter: 'Quadratic Equations',
    subtopic: { $in: ['Nature of roots', 'Discriminant', 'Roots of polynomial', 'Location of roots'] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const sub1Nums = await qb.find({
    chapter: 'Quadratic Equations',
    subtopic: { $in: ['Nature of roots', 'Discriminant', 'Roots of polynomial', 'Location of roots'] },
    type: 'numerical'
  }).limit(5).toArray();

  const sub1Questions = [
    ...sub1Mcqs.map(d => d._id),
    ...sub1Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2885c527cd3843101327') },
    {
      $set: {
        chapter: 'Quadratic Equations',
        subject: 'Mathematics',
        subTopic: 'roots of quadratic equations',
        questions: sub1Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2885c527cd3843101327 ("roots of quadratic equations") with 20 MCQs + 5 Numericals.');

  // 3. Subtopic Test: 6a9e2885c527cd3843101328 ("relations between roots and coefficients")
  const sub2Mcqs = await qb.find({
    chapter: 'Quadratic Equations',
    subtopic: { $in: ['Sum and product of roots', 'Common roots of two quadratic equations', 'Maximum and minimum values of quadratic expressions', 'Quadratic inequalities'] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const sub2Nums = await qb.find({
    chapter: 'Quadratic Equations',
    subtopic: { $in: ['Sum and product of roots', 'Common roots of two quadratic equations', 'Maximum and minimum values of quadratic expressions', 'Quadratic inequalities'] },
    type: 'numerical'
  }).limit(5).toArray();

  const sub2Questions = [
    ...sub2Mcqs.map(d => d._id),
    ...sub2Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2885c527cd3843101328') },
    {
      $set: {
        chapter: 'Quadratic Equations',
        subject: 'Mathematics',
        subTopic: 'relations between roots and coefficients',
        questions: sub2Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2885c527cd3843101328 ("relations between roots and coefficients") with 20 MCQs + 5 Numericals.');

  await client.close();
  console.log('\n🎉 Successfully updated all 301 questions and 3 test papers for Quadratic Equations in MongoDB!');
}

main().catch(err => {
  console.error('❌ Error during update:', err);
  process.exit(1);
});
