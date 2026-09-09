/**
 * scripts/populate_kinematics_45_mcqs.js
 * 
 * Synchronizes 45 authentic JEE Mains MCQs for each of the 6 Kinematics topics (270 total).
 * 
 * Updates:
 * 1. src/data/kinematics_270.json
 * 2. src/data/questionsjeem/chapter_physics.json
 * 3. src/data/questionsneet/chapter_physics.json
 * 4. MongoDB questionBank collection (inserts/upserts 270 high-yield MCQs)
 * 5. MongoDB testPapers collection (seeds 6 JEE Main + 6 NEET subtopic tests, plus chapter tests)
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const SUBTOPICS = [
  "Graphical analysis of motion (x-t, v-t graphs)",
  "Motion in a straight line/plane",
  "Projectile motion",
  "Relative velocity",
  "Uniform circular motion",
  "Uniformly accelerated motion and equations"
];

const OPTION_LETTERS = ['a', 'b', 'c', 'd'];

function slugify(text) {
  return text.replace(/[\s/]+/g, '-');
}

async function main() {
  console.log('=== POPULATING KINEMATICS 45 MCQS PER TOPIC ===\n');

  // 1. Load the 2 batches
  const b1Path = path.join(__dirname, 'kinematics', 'kinematics_batch1.json');
  const b2Path = path.join(__dirname, 'kinematics', 'kinematics_batch2.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const allQuestions = [...b1, ...b2];

  console.log(`Loaded ${allQuestions.length} total questions (Batch 1: ${b1.length}, Batch 2: ${b2.length})`);

  const questionsBySubtopic = {};
  for (const q of allQuestions) {
    const st = q.subTopic;
    if (!questionsBySubtopic[st]) {
      questionsBySubtopic[st] = [];
    }
    questionsBySubtopic[st].push(q);
  }

  for (const st of SUBTOPICS) {
    const count = questionsBySubtopic[st]?.length || 0;
    console.log(`  "${st}": ${count} questions`);
    if (count !== 45) {
      throw new Error(`Subtopic "${st}" does not have exactly 45 questions! Got ${count}`);
    }
  }

  // 2. Build local JSON datasets
  console.log('\n--- Writing local JSON files ---');
  const kinematicsMap = {};
  for (const st of SUBTOPICS) {
    const qs = questionsBySubtopic[st];
    kinematicsMap[st] = qs.map((q, idx) => ({
      id: idx + 1,
      subTopic: st,
      difficulty: q.difficulty || (idx < 12 ? 'Easy' : (idx < 35 ? 'Medium' : 'Hard')),
      question: q.question,
      options: q.options.map((optText, optIdx) => ({
        id: OPTION_LETTERS[optIdx],
        text: optText
      })),
      correctOption: OPTION_LETTERS[q.correctAnswer],
      explanation: q.explanation
    }));
  }

  // 2a. src/data/kinematics_270.json
  const file270Path = path.join(process.cwd(), 'src', 'data', 'kinematics_270.json');
  fs.writeFileSync(file270Path, JSON.stringify({ Physics: { Kinematics: kinematicsMap } }, null, 2), 'utf8');
  console.log(`✅ Written: ${file270Path}`);

  // 2b. src/data/questionsjeem/chapter_physics.json
  const fileJeemPath = path.join(process.cwd(), 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let currentJeem = {};
  if (fs.existsSync(fileJeemPath)) {
    try {
      const raw = fs.readFileSync(fileJeemPath, 'utf8').trim();
      if (raw && raw !== '{}') currentJeem = JSON.parse(raw);
    } catch (e) {}
  }
  currentJeem["Kinematics"] = kinematicsMap;
  fs.writeFileSync(fileJeemPath, JSON.stringify(currentJeem, null, 2), 'utf8');
  console.log(`✅ Written: ${fileJeemPath}`);

  // 2c. src/data/questionsneet/chapter_physics.json
  const fileNeetPath = path.join(process.cwd(), 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let currentNeet = {};
  if (fs.existsSync(fileNeetPath)) {
    try {
      const raw = fs.readFileSync(fileNeetPath, 'utf8').trim();
      if (raw && raw !== '{}') currentNeet = JSON.parse(raw);
    } catch (e) {}
  }
  currentNeet["Kinematics"] = kinematicsMap;
  fs.writeFileSync(fileNeetPath, JSON.stringify(currentNeet, null, 2), 'utf8');
  console.log(`✅ Written: ${fileNeetPath}`);

  // 3. Connect to MongoDB Atlas
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI in environment!");

  console.log('\n--- Connecting to MongoDB Atlas ---');
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qbCol = db.collection('questionBank');
  const tpCol = db.collection('testPapers');

  const subtopicQuestionIds = {};
  const allInsertedIds = [];

  for (const st of SUBTOPICS) {
    console.log(`\nProcessing subtopic: "${st}"`);
    subtopicQuestionIds[st] = [];
    const questionsList = questionsBySubtopic[st];

    for (let i = 0; i < questionsList.length; i++) {
      const q = questionsList[i];
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty || (i < 12 ? 'Easy' : (i < 35 ? 'Medium' : 'Hard')),
        subTopic: st,
        chapter: "Kinematics",
        subject: "Physics",
        type: "MCQ",
        questionType: "MCQ",
        marks: 4,
        negativeMarks: 1,
        source: "JEE Main PYQ 2015-2024 & NCERT Exemplar",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Check if exact same question already exists in questionBank
      const existing = await qbCol.findOne({
        chapter: "Kinematics",
        subTopic: st,
        question: q.question
      });

      let docId;
      if (existing) {
        await qbCol.updateOne(
          { _id: existing._id },
          { $set: doc }
        );
        docId = existing._id;
      } else {
        const res = await qbCol.insertOne(doc);
        docId = res.insertedId;
      }

      subtopicQuestionIds[st].push(docId);
      allInsertedIds.push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 4. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');
  for (const st of SUBTOPICS) {
    const qIds = subtopicQuestionIds[st];
    const slug = slugify(st);

    const jeeTestId = `jee-mains-SUBTOPIC-Physics-${slug}`;
    const neetTestId = `neet-SUBTOPIC-Physics-${slug}`;

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Kinematics',
      subTopic: st,
      type: 'SUBTOPIC',
      totalQuestions: 45,
      duration: 60,
      totalMarks: 180,
      questionIds: qIds,
      updatedAt: new Date()
    };

    // Upsert JEE Main Subtopic Test
    await tpCol.updateOne(
      { testId: jeeTestId },
      {
        $set: {
          ...testPaperBase,
          testId: jeeTestId,
          exam: 'JEE Main'
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log(`  ✅ Upserted ${jeeTestId} (45 questions)`);

    // Upsert NEET Subtopic Test
    await tpCol.updateOne(
      { testId: neetTestId },
      {
        $set: {
          ...testPaperBase,
          testId: neetTestId,
          exam: 'NEET'
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log(`  ✅ Upserted ${neetTestId} (45 questions)`);
  }

  // 5. Update / Seed Chapter Test Papers (25 balanced questions across all 6 subtopics)
  console.log('\n--- Updating Chapter Test Papers ---');
  const chapterQIds = [];
  // Pick 4 questions from subtopics 0-3 and 4-5 from subtopics 4-5 (total 25 questions)
  SUBTOPICS.forEach((st, idx) => {
    const countToPick = (idx === 4) ? 5 : 4; // 4 + 4 + 4 + 4 + 5 + 4 = 25
    const picked = subtopicQuestionIds[st].slice(0, countToPick);
    chapterQIds.push(...picked);
  });

  const jeeChapterTestId = 'jee-mains-CHAPTER-Physics-Kinematics-11';
  const neetChapterTestId = 'neet-CHAPTER-Physics-Kinematics-11';

  await tpCol.updateOne(
    { testId: jeeChapterTestId },
    {
      $set: {
        testId: jeeChapterTestId,
        title: 'Kinematics',
        subject: 'Physics',
        chapter: 'Kinematics',
        type: 'CHAPTER',
        exam: 'JEE Main',
        totalQuestions: 25,
        duration: 60,
        totalMarks: 100,
        questionIds: chapterQIds,
        updatedAt: new Date()
      },
      $setOnInsert: { createdAt: new Date() }
    },
    { upsert: true }
  );
  console.log(`✅ Upserted ${jeeChapterTestId} with ${chapterQIds.length} balanced questions`);

  await tpCol.updateOne(
    { testId: neetChapterTestId },
    {
      $set: {
        testId: neetChapterTestId,
        title: 'Kinematics',
        subject: 'Physics',
        chapter: 'Kinematics',
        type: 'CHAPTER',
        exam: 'NEET',
        totalQuestions: 25,
        duration: 60,
        totalMarks: 100,
        questionIds: chapterQIds,
        updatedAt: new Date()
      },
      $setOnInsert: { createdAt: new Date() }
    },
    { upsert: true }
  );
  console.log(`✅ Upserted ${neetChapterTestId} with ${chapterQIds.length} balanced questions`);

  await client.close();
  console.log('\n=== COMPLETED KINEMATICS POPULATION SUCCESSFULLY ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
