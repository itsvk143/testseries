// scripts/replace_bogus_pandc.js
// In-place database update for Permutations & Combinations (Class 11, Mathematics)
// 1. Updates 53 genuine questions with vetted LaTeX, correct keys, and clean explanations.
// 2. Replaces 210 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test papers:
//    - 6a9e2843c527cd38431011b1 ("Permutations & Combinations" Chapter Test)
//    - 6a9e2886c527cd384310132d ("linear and circular permutations" Subtopic Test)
//    - 6a9e2886c527cd384310132e ("combinations" Subtopic Test)
//    - 6a9e288cc527cd3843101345 ("linear combination" Subtopic Test)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuinePandC } = require('./repaired_genuine_pandc');
const { subtopic1Questions } = require('./data_jee_pandc_subtopic1');
const { subtopic2Questions } = require('./data_jee_pandc_subtopic2');
const { subtopic3Questions } = require('./data_jee_pandc_subtopic3');
const { subtopic4Questions } = require('./data_jee_pandc_subtopic4');
const { subtopic5Questions } = require('./data_jee_pandc_subtopic5');
const { subtopic6Questions } = require('./data_jee_pandc_subtopic6');
const { subtopic7Questions } = require('./data_jee_pandc_subtopic7');

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

  // STEP 1: Update 53 genuine questions
  console.log('\n--- Step 1: Updating 53 genuine questions ---');
  let genuineUpdated = 0;
  for (const q of repairedGenuinePandC) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 11',
        subject: 'Mathematics',
        chapter: 'Permutations & Combinations',
        topic: 'Permutations & Combinations',
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
  console.log(`Updated ${genuineUpdated}/53 genuine questions.`);

  // STEP 2: Update 210 generator questions in-place by subTopic
  console.log('\n--- Step 2: Replacing 210 bogus generator questions in-place ---');
  const genuineIds = repairedGenuinePandC.map(q => new ObjectId(q._id));

  const subtopicMap = [
    { name: 'Fundamental principles', questions: subtopic1Questions },
    { name: 'Linear permutations', questions: subtopic2Questions },
    { name: 'Circular permutations', questions: subtopic3Questions },
    { name: 'Permutations of objects not all distinct', questions: subtopic4Questions },
    { name: 'Combinations', questions: subtopic5Questions },
    { name: 'Division into groups and distribution', questions: subtopic6Questions },
    { name: 'Derangements and grid/distribution problems', questions: subtopic7Questions }
  ];

  let totalGeneratorUpdated = 0;

  for (const group of subtopicMap) {
    const docs = await qb.find({
      chapter: 'Permutations & Combinations',
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
          chapter: 'Permutations & Combinations',
          topic: 'Permutations & Combinations',
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

  // 1. Chapter Test: 6a9e2843c527cd38431011b1 ("Permutations & Combinations")
  const chapMcqs = await qb.find({
    chapter: 'Permutations & Combinations',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const chapNums = await qb.find({
    chapter: 'Permutations & Combinations',
    type: 'numerical'
  }).limit(5).toArray();

  const chapQuestions = [
    ...chapMcqs.map(d => d._id),
    ...chapNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2843c527cd38431011b1') },
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
  console.log('✅ Reconstructed Chapter Test 6a9e2843c527cd38431011b1 ("Permutations & Combinations") with 20 MCQs + 5 Numericals.');

  // 2. Subtopic Test: 6a9e2886c527cd384310132d ("linear and circular permutations")
  const sub1Mcqs = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Linear permutations', 'Circular permutations'] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const sub1Nums = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Linear permutations', 'Circular permutations'] },
    type: 'numerical'
  }).limit(5).toArray();

  const sub1Questions = [
    ...sub1Mcqs.map(d => d._id),
    ...sub1Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2886c527cd384310132d') },
    {
      $set: {
        questions: sub1Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2886c527cd384310132d ("linear and circular permutations") with 20 MCQs + 5 Numericals.');

  // 3. Subtopic Test: 6a9e2886c527cd384310132e ("combinations")
  const sub2Mcqs = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Combinations', 'Division into groups and distribution'] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const sub2Nums = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Combinations', 'Division into groups and distribution'] },
    type: 'numerical'
  }).limit(5).toArray();

  const sub2Questions = [
    ...sub2Mcqs.map(d => d._id),
    ...sub2Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2886c527cd384310132e') },
    {
      $set: {
        questions: sub2Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2886c527cd384310132e ("combinations") with 20 MCQs + 5 Numericals.');

  // 4. Subtopic Test: 6a9e288cc527cd3843101345 ("linear combination")
  const sub3Mcqs = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Fundamental principles', 'Derangements and grid/distribution problems', 'Permutations of objects not all distinct'] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const sub3Nums = await qb.find({
    chapter: 'Permutations & Combinations',
    subtopic: { $in: ['Fundamental principles', 'Derangements and grid/distribution problems', 'Permutations of objects not all distinct'] },
    type: 'numerical'
  }).limit(5).toArray();

  const sub3Questions = [
    ...sub3Mcqs.map(d => d._id),
    ...sub3Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e288cc527cd3843101345') },
    {
      $set: {
        questions: sub3Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e288cc527cd3843101345 ("linear combination") with 20 MCQs + 5 Numericals.');

  await client.close();
  console.log('\n🎉 Successfully updated all 263 questions and 4 test papers for Permutations & Combinations in MongoDB!');
}

main().catch(err => {
  console.error('❌ Error during update:', err);
  process.exit(1);
});
