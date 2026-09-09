/**
 * scripts/populate_optics_45_mcqs.js
 * 
 * Synchronizes 45 authentic JEE Mains MCQs for each of the 9 Optics topics (405 total).
 * 
 * Updates:
 * 1. src/data/optics_405.json
 * 2. src/data/questionsjeem/chapter_physics.json
 * 3. src/data/questionsneet/chapter_physics.json
 * 4. MongoDB questionBank collection (inserts/upserts 405 high-yield MCQs)
 * 5. MongoDB testPapers collection (seeds 9 JEE Main + 9 NEET subtopic tests, plus chapter tests)
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const CHAPTER_NAME = "Optics";

const SUBTOPICS = [
  "Reflection/refraction",
  "Total internal reflection and prisms",
  "Mirror formula and combination of lenses",
  "Lens formula",
  "Optical instruments (microscope, telescope)",
  "Interference",
  "Young's double-slit experiment",
  "Diffraction",
  "Polarization of light (Brewster's law)"
];

const OPTION_LETTERS = ['a', 'b', 'c', 'd'];

function slugify(text) {
  return text.replace(/[\s/]+/g, '-');
}

async function main() {
  console.log('=== POPULATING OPTICS 45 MCQS PER TOPIC ===\n');

  // 1. Load the 3 batches
  const b1Path = path.join(__dirname, 'optics', 'optics_batch1.json');
  const b2Path = path.join(__dirname, 'optics', 'optics_batch2.json');
  const b3Path = path.join(__dirname, 'optics', 'optics_batch3.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(b3Path, 'utf8'));
  const allQuestions = [...b1, ...b2, ...b3];

  console.log(`Loaded ${allQuestions.length} total questions (Batch 1: ${b1.length}, Batch 2: ${b2.length}, Batch 3: ${b3.length})`);

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
  const opticsMap = {};
  for (const st of SUBTOPICS) {
    const qs = questionsBySubtopic[st];
    opticsMap[st] = qs.map((q, idx) => ({
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

  // 2a. src/data/optics_405.json
  const file405Path = path.join(process.cwd(), 'src', 'data', 'optics_405.json');
  fs.writeFileSync(file405Path, JSON.stringify({ Physics: { [CHAPTER_NAME]: opticsMap } }, null, 2), 'utf8');
  console.log(`✅ Written: ${file405Path}`);

  // 2b. src/data/questionsjeem/chapter_physics.json
  const fileJeemPath = path.join(process.cwd(), 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let currentJeem = {};
  if (fs.existsSync(fileJeemPath)) {
    try {
      const raw = fs.readFileSync(fileJeemPath, 'utf8').trim();
      if (raw && raw !== '{}') currentJeem = JSON.parse(raw);
    } catch (e) {}
  }
  currentJeem[CHAPTER_NAME] = opticsMap;
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
  currentNeet[CHAPTER_NAME] = opticsMap;
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
        chapter: CHAPTER_NAME,
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
        chapter: CHAPTER_NAME,
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
  
  // Define alias IDs for each subtopic to match existing frontend keys
  const aliases = {
    "Reflection/refraction": [
      "Reflection/refraction",
      "Reflection-refraction"
    ],
    "Total internal reflection and prisms": [
      "Total-internal-reflection-and-prisms"
    ],
    "Mirror formula and combination of lenses": [
      "Mirror-formula-and-combination-of-lenses"
    ],
    "Lens formula": [
      "Lens-formula",
      "lens-formula"
    ],
    "Optical instruments (microscope, telescope)": [
      "Optical-instruments-(microscope,-telescope)",
      "optical-instruments"
    ],
    "Interference": [
      "Interference",
      "interference"
    ],
    "Young's double-slit experiment": [
      "Young's-double-slit-experiment",
      "Youngs-double-slit-experiment"
    ],
    "Diffraction": [
      "Diffraction",
      "diffraction"
    ],
    "Polarization of light (Brewster's law)": [
      "Polarization-of-light-(Brewster's-law)",
      "Polarization-of-light-(Brewsters-law)"
    ]
  };

  for (const st of SUBTOPICS) {
    const qIds = subtopicQuestionIds[st];
    const subAliases = aliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: CHAPTER_NAME,
      subTopic: st,
      type: 'SUBTOPIC',
      totalQuestions: 45,
      duration: 60,
      totalMarks: 180,
      questionIds: qIds,
      updatedAt: new Date()
    };

    for (const alias of subAliases) {
      const jeeTestId = `jee-mains-SUBTOPIC-Physics-${alias}`;
      const neetTestId = `neet-SUBTOPIC-Physics-${alias}`;

      // Upsert JEE Main Subtopic Tests
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

      // Upsert NEET Subtopic Tests
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
  }

  // 5. Update / Seed Chapter Test Papers (25 balanced questions across all 9 subtopics)
  console.log('\n--- Updating Chapter Test Papers ---');
  const chapterQIds = [];
  // 9 subtopics: pick 3 from first 7 subtopics (21) and 2 from last 2 subtopics (4) => exactly 25 questions!
  SUBTOPICS.forEach((st, idx) => {
    const countToPick = (idx < 7) ? 3 : 2;
    const picked = subtopicQuestionIds[st].slice(0, countToPick);
    chapterQIds.push(...picked);
  });

  const jeeChapterTestId = 'jee-mains-CHAPTER-Physics-Optics-12';
  const neetChapterTestId = 'neet-CHAPTER-Physics-Optics-12';

  await tpCol.updateOne(
    { testId: jeeChapterTestId },
    {
      $set: {
        testId: jeeChapterTestId,
        title: CHAPTER_NAME,
        subject: 'Physics',
        chapter: CHAPTER_NAME,
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
        title: CHAPTER_NAME,
        subject: 'Physics',
        chapter: CHAPTER_NAME,
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
  console.log('\n=== COMPLETED OPTICS POPULATION SUCCESSFULLY ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
