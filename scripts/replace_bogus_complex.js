// scripts/replace_bogus_complex.js
// In-place database update for Complex Numbers (Class 12, Mathematics)
// 1. Updates 70 genuine questions with vetted LaTeX and solutions.
// 2. Replaces 180 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test paper 6a9e2843c527cd38431011ae with 20 MCQs + 5 Numerical questions.

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineComplex } = require('./repaired_genuine_complex');
const { subtopic1Questions } = require('./data_jee_complex_subtopic1');
const { subtopic2Questions } = require('./data_jee_complex_subtopic2');
const { subtopic3Questions } = require('./data_jee_complex_subtopic3');
const { subtopic4Questions } = require('./data_jee_complex_subtopic4');
const { subtopic5Questions } = require('./data_jee_complex_subtopic5');
const { subtopic6Questions } = require('./data_jee_complex_subtopic6');

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

  // STEP 1: Update 70 genuine questions
  console.log('\n--- Step 1: Updating 70 genuine questions ---');
  let genuineUpdated = 0;
  for (const q of repairedGenuineComplex) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 12',
        subject: 'Mathematics',
        chapter: 'Complex Numbers',
        topic: 'Complex Numbers',
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
  console.log(`Updated ${genuineUpdated}/70 genuine questions.`);

  // STEP 2: Update 180 generator questions in-place by subtopic
  console.log('\n--- Step 2: Replacing 180 bogus generator questions in-place ---');
  const genuineIds = repairedGenuineComplex.map(q => new ObjectId(q._id));

  const subtopicMap = [
    { name: 'Argand plane', questions: subtopic1Questions },
    { name: "Euler's form and rotation of complex numbers", questions: subtopic2Questions },
    { name: 'Geometry in complex plane (circle, line equations)', questions: subtopic3Questions },
    { name: 'Modulus and argument', questions: subtopic4Questions },
    { name: 'Square roots', questions: subtopic5Questions },
    { name: 'Triangle inequality', questions: subtopic6Questions }
  ];

  let totalGeneratorUpdated = 0;

  for (const group of subtopicMap) {
    const docs = await qb.find({
      chapter: 'Complex Numbers',
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
          chapter: 'Complex Numbers',
          topic: 'Complex Numbers',
          subtopic: group.name,
          subTopic: group.name,
          question: q.question,
          options: q.options || [],
          correctOption: q.correctOption !== undefined ? q.correctOption : null,
          correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
          solution: q.solution || q.explanation,
          explanation: q.solution || q.explanation,
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

  console.log(`Updated ${totalGeneratorUpdated}/180 generator questions in-place.`);

  // STEP 3: Reconstruct Test Paper 6a9e2843c527cd38431011ae
  console.log('\n--- Step 3: Reconstructing Test Paper 6a9e2843c527cd38431011ae ---');
  const testPaperCol = db.collection('testPapers');
  const testPaper = await testPaperCol.findOne({ _id: new ObjectId('6a9e2843c527cd38431011ae') });

  if (testPaper) {
    // Select 20 MCQs and 5 Numerical questions across the 6 subtopics
    const mcqDocs = await qb.find({
      chapter: 'Complex Numbers',
      type: { $in: ['single_choice', 'assertion_reason'] }
    }).limit(20).toArray();

    const numDocs = await qb.find({
      chapter: 'Complex Numbers',
      type: 'numerical'
    }).limit(5).toArray();

    console.log(`Selected ${mcqDocs.length} MCQs and ${numDocs.length} Numerical questions for test paper.`);
    const selectedQuestionIds = [
      ...mcqDocs.map(d => d._id.toString()),
      ...numDocs.map(d => d._id.toString())
    ];

    await testPaperCol.updateOne(
      { _id: new ObjectId('6a9e2843c527cd38431011ae') },
      {
        $set: {
          questions: selectedQuestionIds,
          totalQuestions: 25,
          standardQuestionsCount: 25,
          totalMarks: 100,
          duration: 60,
          updatedAt: new Date()
        }
      }
    );
    console.log('✅ Successfully reconstructed Test Paper 6a9e2843c527cd38431011ae with 25 authentic questions (100 marks, 60 mins).');
  } else {
    console.warn('⚠️ Test paper 6a9e2843c527cd38431011ae not found.');
  }

  await client.close();
  console.log('\n🎉 ALL DATABASE OPERATIONS COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('❌ Error updating database:', err);
  process.exit(1);
});
