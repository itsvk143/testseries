// scripts/replace_bogus_matrices.js
// In-place database update for Matrices & Determinants (Class 12, Mathematics)
// 1. Updates 41 genuine questions with vetted LaTeX, correct keys, and clean explanations.
// 2. Replaces 210 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test papers:
//    - 6a9e2844c527cd38431011b7 ("Matrices & Determinants" Chapter Test)
//    - 6a9e2885c527cd3843101329 ("Types of matrices" Subtopic Test)
//    - 6a9e2886c527cd384310132b ("solution of linear equations using matrix inversion or Cramer’s Rule" Subtopic Test)
//    - 6a9e96b8a28520078f5cc930 ("jee mains CHAPTER Mathematics Matrices 12" Chapter Test)
//    - 6a9e288ec527cd3843101350 ("Bayes' theorem" Subtopic Test cleanup)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineMatrices } = require('./repaired_genuine_matrices');
const { subtopic1Questions } = require('./data_jee_matrices_subtopic1');
const { subtopic2Questions } = require('./data_jee_matrices_subtopic2');
const { subtopic3Questions } = require('./data_jee_matrices_subtopic3');
const { subtopic4Questions } = require('./data_jee_matrices_subtopic4');
const { subtopic5Questions } = require('./data_jee_matrices_subtopic5');
const { subtopic6Questions } = require('./data_jee_matrices_subtopic6');
const { subtopic7Questions } = require('./data_jee_matrices_subtopic7');

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
  for (const q of repairedGenuineMatrices) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 12',
        subject: 'Mathematics',
        chapter: 'Matrices & Determinants',
        topic: 'Matrices & Determinants',
        subtopic: q.subtopic,
        subTopic: q.subtopic,
        question: q.question,
        options: q.options,
        correctOption: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        solution: q.solution,
        explanation: q.solution,
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
  const genuineIds = repairedGenuineMatrices.map(q => new ObjectId(q._id));

  const subtopicMap = [
    { name: 'Types of matrices', questions: subtopic1Questions },
    { name: 'Orthogonal, symmetric, and skew-symmetric matrices', questions: subtopic2Questions },
    { name: 'Properties of determinants', questions: subtopic3Questions },
    { name: 'Adjoint and inverse', questions: subtopic4Questions },
    { name: 'System of linear equations (consistency and rank)', questions: subtopic5Questions },
    { name: "Cramer's rule", questions: subtopic6Questions },
    { name: 'Solution of linear equations', questions: subtopic7Questions }
  ];

  let totalGeneratorUpdated = 0;

  for (const group of subtopicMap) {
    const docs = await qb.find({
      chapter: 'Matrices & Determinants',
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
          chapter: 'Matrices & Determinants',
          topic: 'Matrices & Determinants',
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

  // 1. Chapter Test: 6a9e2844c527cd38431011b7 ("Matrices & Determinants")
  const chapMcqs = await qb.find({
    chapter: 'Matrices & Determinants',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const chapNums = await qb.find({
    chapter: 'Matrices & Determinants',
    type: 'numerical'
  }).limit(5).toArray();

  const chapQuestions = [
    ...chapMcqs.map(d => d._id),
    ...chapNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2844c527cd38431011b7') },
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
  console.log('✅ Reconstructed Chapter Test 6a9e2844c527cd38431011b7 ("Matrices & Determinants") with 20 MCQs + 5 Numericals.');

  // 2. Subtopic Test: 6a9e2885c527cd3843101329 ("Types of matrices")
  const tmMcqs = await qb.find({
    chapter: 'Matrices & Determinants',
    subtopic: 'Types of matrices',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const tmNums = await qb.find({
    chapter: 'Matrices & Determinants',
    subtopic: 'Types of matrices',
    type: 'numerical'
  }).limit(5).toArray();

  const tmQuestions = [
    ...tmMcqs.map(d => d._id),
    ...tmNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2885c527cd3843101329') },
    {
      $set: {
        questions: tmQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2885c527cd3843101329 ("Types of matrices") with 20 MCQs + 5 Numericals.');

  // 3. Subtopic Test: 6a9e2886c527cd384310132b ("solution of linear equations using matrix inversion or Cramer’s Rule")
  const leMcqs = await qb.find({
    chapter: 'Matrices & Determinants',
    subtopic: { $in: ['Solution of linear equations', "Cramer's rule"] },
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const leNums = await qb.find({
    chapter: 'Matrices & Determinants',
    subtopic: { $in: ['Solution of linear equations', "Cramer's rule"] },
    type: 'numerical'
  }).limit(5).toArray();

  const leQuestions = [
    ...leMcqs.map(d => d._id),
    ...leNums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e2886c527cd384310132b') },
    {
      $set: {
        questions: leQuestions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Subtopic Test 6a9e2886c527cd384310132b ("solution of linear equations using matrix inversion or Cramer’s Rule") with 20 MCQs + 5 Numericals.');

  // 4. Chapter Test: 6a9e96b8a28520078f5cc930 ("jee mains CHAPTER Mathematics Matrices 12")
  const chap2Mcqs = await qb.find({
    chapter: 'Matrices & Determinants',
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).skip(20).limit(20).toArray();

  const chap2Nums = await qb.find({
    chapter: 'Matrices & Determinants',
    type: 'numerical'
  }).skip(5).limit(5).toArray();

  const chap2Questions = [
    ...chap2Mcqs.map(d => d._id),
    ...chap2Nums.map(d => d._id)
  ];

  await testPaperCol.updateOne(
    { _id: new ObjectId('6a9e96b8a28520078f5cc930') },
    {
      $set: {
        questions: chap2Questions,
        totalQuestions: 25,
        standardQuestionsCount: 25,
        totalMarks: 100,
        duration: 60,
        updatedAt: new Date()
      }
    }
  );
  console.log('✅ Reconstructed Chapter Test 6a9e96b8a28520078f5cc930 ("jee mains CHAPTER Mathematics Matrices 12") with 20 MCQs + 5 Numericals.');

  // 5. Bonus Cleanup: 6a9e288ec527cd3843101350 ("Bayes' theorem" Subtopic Test in Probability)
  const btMcqs = await qb.find({
    chapter: 'Probability',
    subtopic: "Bayes' theorem",
    type: { $in: ['single_choice', 'assertion_reason'] }
  }).limit(20).toArray();

  const btNums = await qb.find({
    chapter: 'Probability',
    subtopic: "Bayes' theorem",
    type: 'numerical'
  }).limit(5).toArray();

  const btQuestions = [
    ...btMcqs.map(d => d._id),
    ...btNums.map(d => d._id)
  ];

  if (btQuestions.length === 25) {
    await testPaperCol.updateOne(
      { _id: new ObjectId('6a9e288ec527cd3843101350') },
      {
        $set: {
          questions: btQuestions,
          totalQuestions: 25,
          standardQuestionsCount: 25,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log('✅ Cleaned up Subtopic Test 6a9e288ec527cd3843101350 ("Bayes\' theorem") with 20 MCQs + 5 Numericals from Bayes\' theorem.');
  }

  await client.close();
  console.log('\n🎉 ALL DATABASE OPERATIONS COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('❌ Error updating database:', err);
  process.exit(1);
});
