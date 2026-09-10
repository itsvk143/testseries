// scripts/replace_bogus_sets.js
// In-place database update for Sets, Relations, and Functions (Class 12, Mathematics)
// 1. Updates 51 genuine questions with vetted LaTeX, correct keys, and clean solutions.
// 2. Replaces 150 bogus generator questions with authentic JEE Main questions in-place.
// 3. Reconstructs test papers:
//    - 6a9e2843c527cd38431011ad ("Sets, Relations, and Functions" Chapter Test)
//    - 6a9e2883c527cd3843101320 ("Types of relations" Subtopic Test)
//    - 6a9e2883c527cd3843101321 ("equivalence relations" Subtopic Test)
//    - 6a9e2883c527cd3843101322 ("domain, codomain, range" Subtopic Test)
//    - 6a9e2884c527cd3843101323 ("composition of functions" Subtopic Test)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const { repairedGenuineSets } = require('./repaired_genuine_sets');
const { subtopic1Questions } = require('./data_jee_sets_subtopic1');
const { subtopic2Questions } = require('./data_jee_sets_subtopic2');
const { subtopic3Questions } = require('./data_jee_sets_subtopic3');
const { subtopic4Questions } = require('./data_jee_sets_subtopic4');
const { subtopic5Questions } = require('./data_jee_sets_subtopic5');

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

  // STEP 1: Update 51 genuine questions
  console.log('\n--- Step 1: Updating 51 genuine questions ---');
  let genuineUpdated = 0;
  for (const q of repairedGenuineSets) {
    const docId = new ObjectId(q._id);
    const updateDoc = {
      $set: {
        class: 'Class 12',
        subject: 'Mathematics',
        chapter: 'Sets, Relations, and Functions',
        topic: 'Sets, Relations, and Functions',
        subtopic: q.subtopic,
        subTopic: q.subtopic,
        question: q.question,
        questionText: q.question,
        options: q.options || [],
        correctOption: q.correctOption,
        correctAnswer: q.correctAnswer,
        solution: q.solution,
        explanation: q.solution,
        type: q.type || 'single_choice',
        questionType: 'MCQ (Multiple Choice Question)',
        marks: 4,
        negativeMarks: 1,
        difficulty: q.difficulty || 'medium',
        status: 'Active'
      }
    };

    const res = await qb.updateOne({ _id: docId }, updateDoc);
    if (res.matchedCount > 0) {
      genuineUpdated++;
    } else {
      console.warn(`⚠️ Genuine document ${q._id} not found in DB`);
    }
  }
  console.log(`✅ Genuine questions updated: ${genuineUpdated}/${repairedGenuineSets.length}`);

  // STEP 2: Update 150 bogus generator questions in-place by subtopic
  console.log('\n--- Step 2: Updating 150 bogus generator questions in-place ---');
  const subtopicMap = [
    {
      subtopicName: 'Sets, subsets, power set, and Venn diagrams',
      questions: subtopic1Questions
    },
    {
      subtopicName: 'Set operations (union, intersection, difference, complement)',
      questions: subtopic2Questions
    },
    {
      subtopicName: 'Types of relations (reflexive, symmetric, transitive, equivalence)',
      questions: subtopic3Questions
    },
    {
      subtopicName: 'Functions (domain, codomain, range)',
      questions: subtopic4Questions
    },
    {
      subtopicName: 'Types of functions (one-one, onto, composite, invertible)',
      questions: subtopic5Questions
    }
  ];

  const updatedSubtopicDocs = {};

  for (const item of subtopicMap) {
    const { subtopicName, questions } = item;
    const filter = {
      chapter: 'Sets, Relations, and Functions',
      source: { $ne: 'Question Bank' },
      $or: [{ subTopic: subtopicName }, { subtopic: subtopicName }]
    };

    const existingDocs = await qb.find(filter).toArray();
    console.log(`Subtopic "${subtopicName}": found ${existingDocs.length} generator documents (need ${questions.length})`);

    if (existingDocs.length !== questions.length) {
      console.error(`❌ Mismatch for subtopic "${subtopicName}": found ${existingDocs.length}, expected ${questions.length}`);
      process.exit(1);
    }

    updatedSubtopicDocs[subtopicName] = [];

    for (let i = 0; i < existingDocs.length; i++) {
      const doc = existingDocs[i];
      const q = questions[i];

      const questionType = q.type === 'assertion_reason'
        ? 'Assertion–Reasoning'
        : q.type === 'numerical'
        ? 'Numerical'
        : 'MCQ (Multiple Choice Question)';

      const updateDoc = {
        $set: {
          class: 'Class 12',
          subject: 'Mathematics',
          chapter: 'Sets, Relations, and Functions',
          topic: 'Sets, Relations, and Functions',
          subtopic: subtopicName,
          subTopic: subtopicName,
          question: q.question,
          questionText: q.question,
          options: q.options || [],
          correctOption: q.correctOption !== undefined ? q.correctOption : null,
          correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
          solution: q.solution,
          explanation: q.solution,
          type: q.type,
          questionType: questionType,
          marks: 4,
          negativeMarks: q.type === 'numerical' ? 0 : 1,
          difficulty: q.difficulty || 'medium',
          status: 'Active'
        }
      };

      await qb.updateOne({ _id: doc._id }, updateDoc);

      updatedSubtopicDocs[subtopicName].push({
        _id: doc._id,
        question: q.question,
        questionText: q.question,
        options: q.options || [],
        correctOption: q.correctOption !== undefined ? q.correctOption : null,
        correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption,
        solution: q.solution,
        explanation: q.solution,
        type: q.type,
        questionType: questionType,
        marks: 4,
        negativeMarks: q.type === 'numerical' ? 0 : 1,
        difficulty: q.difficulty || 'medium'
      });
    }
    console.log(`  ✅ Successfully updated 30 questions in-place for "${subtopicName}"`);
  }

  // STEP 3: Reconstruct Test Papers
  console.log('\n--- Step 3: Reconstructing 5 Test Papers ---');
  const tpCol = db.collection('testPapers');

  function buildPaperQuestions(selected) {
    return selected.map((q, idx) => ({
      questionId: q._id,
      order: idx + 1,
      marks: q.marks,
      negativeMarks: q.negativeMarks,
      question: q.question,
      questionText: q.question,
      options: q.options,
      correctOption: q.correctOption,
      correctAnswer: q.correctAnswer,
      solution: q.solution,
      explanation: q.solution,
      type: q.type,
      questionType: q.questionType,
      difficulty: q.difficulty
    }));
  }

  // Paper 1: Chapter Test "Sets, Relations, and Functions" (6a9e2843c527cd38431011ad)
  // Balanced across 5 subtopics: 4 MCQ/AR + 1 NUM from each of the 5 subtopics = 20 MCQ/AR + 5 NUM
  const chapterTestQuestions = [];
  for (const item of subtopicMap) {
    const list = updatedSubtopicDocs[item.subtopicName];
    // Q0-Q19 are MCQ/AR, Q20-Q29 are Numerical
    chapterTestQuestions.push(...list.slice(0, 4)); // 4 MCQ/AR
  }
  for (const item of subtopicMap) {
    const list = updatedSubtopicDocs[item.subtopicName];
    chapterTestQuestions.push(list[20]); // 1 Numerical
  }

  await tpCol.updateOne(
    { _id: new ObjectId('6a9e2843c527cd38431011ad') },
    {
      $set: {
        title: 'Sets, Relations, and Functions',
        chapter: 'Sets, Relations, and Functions',
        subject: 'Mathematics',
        class: 'Class 12',
        totalQuestions: 25,
        totalMarks: 100,
        duration: 60,
        questions: buildPaperQuestions(chapterTestQuestions)
      }
    }
  );
  console.log('✅ Paper 1 (6a9e2843c527cd38431011ad) reconstructed: 20 MCQ/AR + 5 NUM');

  // Paper 2: "Types of relations" Subtopic Test (6a9e2883c527cd3843101320)
  // 20 MCQ/AR + 5 NUM from Subtopic 3
  const sub3List = updatedSubtopicDocs['Types of relations (reflexive, symmetric, transitive, equivalence)'];
  const p2Questions = [
    ...sub3List.slice(0, 20), // 20 MCQ/AR
    ...sub3List.slice(20, 25) // 5 NUM
  ];

  await tpCol.updateOne(
    { _id: new ObjectId('6a9e2883c527cd3843101320') },
    {
      $set: {
        title: 'Types of relations',
        chapter: 'Sets, Relations, and Functions',
        subject: 'Mathematics',
        class: 'Class 12',
        totalQuestions: 25,
        totalMarks: 100,
        duration: 60,
        questions: buildPaperQuestions(p2Questions)
      }
    }
  );
  console.log('✅ Paper 2 (6a9e2883c527cd3843101320) reconstructed: 20 MCQ/AR + 5 NUM');

  // Paper 3: "equivalence relations" Subtopic Test (6a9e2883c527cd3843101321)
  // Another selection: 10 genuine questions on relations + 10 MCQ/AR from Subtopic 3 + 5 NUM (slice 25-30)
  const genuineRelations = repairedGenuineSets
    .filter(q => q.subtopic === 'Types of relations (reflexive, symmetric, transitive, equivalence)')
    .map(q => ({
      _id: new ObjectId(q._id),
      question: q.question,
      questionText: q.question,
      options: q.options,
      correctOption: q.correctOption,
      correctAnswer: q.correctAnswer,
      solution: q.solution,
      explanation: q.solution,
      type: q.type,
      questionType: 'MCQ (Multiple Choice Question)',
      marks: 4,
      negativeMarks: 1,
      difficulty: q.difficulty
    }));

  const p3Questions = [
    ...genuineRelations, // 10 genuine MCQs
    ...sub3List.slice(5, 15), // 10 MCQ/AR
    ...sub3List.slice(25, 30) // 5 NUM
  ];

  await tpCol.updateOne(
    { _id: new ObjectId('6a9e2883c527cd3843101321') },
    {
      $set: {
        title: 'equivalence relations',
        chapter: 'Sets, Relations, and Functions',
        subject: 'Mathematics',
        class: 'Class 12',
        totalQuestions: 25,
        totalMarks: 100,
        duration: 60,
        questions: buildPaperQuestions(p3Questions)
      }
    }
  );
  console.log('✅ Paper 3 (6a9e2883c527cd3843101321) reconstructed: 20 MCQ/AR + 5 NUM');

  // Paper 4: "domain, codomain, range" Subtopic Test (6a9e2883c527cd3843101322)
  // 20 MCQ/AR + 5 NUM from Subtopic 4
  const sub4List = updatedSubtopicDocs['Functions (domain, codomain, range)'];
  const p4Questions = [
    ...sub4List.slice(0, 20), // 20 MCQ/AR
    ...sub4List.slice(20, 25) // 5 NUM
  ];

  await tpCol.updateOne(
    { _id: new ObjectId('6a9e2883c527cd3843101322') },
    {
      $set: {
        title: 'domain, codomain, range',
        chapter: 'Sets, Relations, and Functions',
        subject: 'Mathematics',
        class: 'Class 12',
        totalQuestions: 25,
        totalMarks: 100,
        duration: 60,
        questions: buildPaperQuestions(p4Questions)
      }
    }
  );
  console.log('✅ Paper 4 (6a9e2883c527cd3843101322) reconstructed: 20 MCQ/AR + 5 NUM');

  // Paper 5: "composition of functions" Subtopic Test (6a9e2884c527cd3843101323)
  // 20 MCQ/AR + 5 NUM from Subtopic 5
  const sub5List = updatedSubtopicDocs['Types of functions (one-one, onto, composite, invertible)'];
  const p5Questions = [
    ...sub5List.slice(0, 20), // 20 MCQ/AR
    ...sub5List.slice(20, 25) // 5 NUM
  ];

  await tpCol.updateOne(
    { _id: new ObjectId('6a9e2884c527cd3843101323') },
    {
      $set: {
        title: 'composition of functions',
        chapter: 'Sets, Relations, and Functions',
        subject: 'Mathematics',
        class: 'Class 12',
        totalQuestions: 25,
        totalMarks: 100,
        duration: 60,
        questions: buildPaperQuestions(p5Questions)
      }
    }
  );
  console.log('✅ Paper 5 (6a9e2884c527cd3843101323) reconstructed: 20 MCQ/AR + 5 NUM');

  await client.close();
  console.log('\n🎉 ALL DATABASE UPDATES COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Fatal error during update:', err);
  process.exit(1);
});
