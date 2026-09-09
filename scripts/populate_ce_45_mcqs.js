/**
 * scripts/populate_ce_45_mcqs.js
 * 
 * Synchronizes 45 authentic JEE Mains MCQs for each of the 8 Current Electricity topics (360 total).
 * 
 * Subtopics:
 * 1. Drift velocity and mobility
 * 2. Ohm's law
 * 3. Resistivity
 * 4. Electrical energy and power
 * 5. Internal resistance of a cell and EMF
 * 6. Kirchhoff's laws
 * 7. Wheatstone bridge
 * 8. Meter bridge
 * 
 * Updates:
 * 1. src/data/ce_360.json
 * 2. src/data/questionsjeem/chapter_physics.json
 * 3. src/data/questionsneet/chapter_physics.json
 * 4. MongoDB questionBank collection (inserts/upserts 360 high-yield MCQs)
 * 5. MongoDB testPapers collection (seeds 8 JEE Main + 8 NEET subtopic tests, plus chapter tests)
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const CHAPTER_NAME = "Current Electricity";

const SUBTOPICS = [
  "Drift velocity and mobility",
  "Ohm's law",
  "Resistivity",
  "Electrical energy and power",
  "Internal resistance of a cell and EMF",
  "Kirchhoff's laws",
  "Wheatstone bridge",
  "Meter bridge"
];

const OPTION_LETTERS = ['a', 'b', 'c', 'd'];

function slugify(text) {
  return text.replace(/[\s/]+/g, '-');
}

async function main() {
  console.log('=== POPULATING CURRENT ELECTRICITY 45 MCQS PER TOPIC ===\n');

  // 1. Load the 4 batches
  const b1Path = path.join(__dirname, 'ce', 'ce_batch1.json');
  const b2Path = path.join(__dirname, 'ce', 'ce_batch2.json');
  const b3Path = path.join(__dirname, 'ce', 'ce_batch3.json');
  const b4Path = path.join(__dirname, 'ce', 'ce_batch4.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(b3Path, 'utf8'));
  const b4 = JSON.parse(fs.readFileSync(b4Path, 'utf8'));
  const allRawQuestions = [...b1, ...b2, ...b3, ...b4];

  console.log(`Loaded ${allRawQuestions.length} total raw questions (B1: ${b1.length}, B2: ${b2.length}, B3: ${b3.length}, B4: ${b4.length})`);

  const rawBySubtopic = {};
  for (const q of allRawQuestions) {
    const st = q.subTopic;
    if (!rawBySubtopic[st]) {
      rawBySubtopic[st] = [];
    }
    rawBySubtopic[st].push(q);
  }

  // Balance and normalize each subtopic
  const questionsBySubtopic = {};
  for (const st of SUBTOPICS) {
    const rawList = rawBySubtopic[st];
    if (!rawList || rawList.length !== 45) {
      throw new Error(`Subtopic "${st}" does not have exactly 45 questions! Got ${rawList ? rawList.length : 0}`);
    }

    questionsBySubtopic[st] = rawList.map((q, i) => {
      const targetIdx = i % 4; // exact 12 of 0, 11 of 1, 11 of 2, 11 of 3
      const origCorrect = q.correctOptionIndex !== undefined ? q.correctOptionIndex : q.correctAnswer;
      const correctText = q.options[origCorrect];
      const otherOpts = q.options.filter((_, idx) => idx !== origCorrect);

      const newOptions = [];
      let otherPtr = 0;
      for (let pos = 0; pos < 4; pos++) {
        if (pos === targetIdx) {
          newOptions.push(correctText);
        } else {
          newOptions.push(otherOpts[otherPtr++]);
        }
      }

      return {
        question: q.question,
        options: newOptions,
        correctAnswer: targetIdx,
        correctOptionIndex: targetIdx,
        explanation: q.explanation,
        difficulty: q.difficulty || (i < 12 ? 'Easy' : (i < 35 ? 'Medium' : 'Hard')),
        subTopic: st,
        chapter: CHAPTER_NAME,
        marks: 4,
        negativeMarks: 1,
        type: "MCQ"
      };
    });

    console.log(`  "${st}": 45 questions (Options balanced: 0:12, 1:11, 2:11, 3:11)`);
  }

  // 2. Build local JSON datasets
  console.log('\n--- Writing local JSON files ---');
  const ceMap = {};
  for (const st of SUBTOPICS) {
    const qs = questionsBySubtopic[st];
    ceMap[st] = qs.map((q, idx) => ({
      id: idx + 1,
      subTopic: st,
      difficulty: q.difficulty,
      question: q.question,
      options: q.options.map((optText, optIdx) => ({
        id: OPTION_LETTERS[optIdx],
        text: optText
      })),
      correctOption: OPTION_LETTERS[q.correctAnswer],
      explanation: q.explanation
    }));
  }

  // 2a. src/data/ce_360.json
  const file360Path = path.join(process.cwd(), 'src', 'data', 'ce_360.json');
  fs.writeFileSync(file360Path, JSON.stringify({ Physics: { [CHAPTER_NAME]: ceMap } }, null, 2), 'utf8');
  console.log(`✅ Written: ${file360Path}`);

  // 2b. src/data/questionsjeem/chapter_physics.json
  const fileJeemPath = path.join(process.cwd(), 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let currentJeem = {};
  if (fs.existsSync(fileJeemPath)) {
    try {
      const raw = fs.readFileSync(fileJeemPath, 'utf8').trim();
      if (raw && raw !== '{}') currentJeem = JSON.parse(raw);
    } catch (e) {}
  }
  currentJeem[CHAPTER_NAME] = ceMap;
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
  currentNeet[CHAPTER_NAME] = ceMap;
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
        difficulty: q.difficulty,
        subTopic: st,
        chapter: CHAPTER_NAME,
        subject: "Physics",
        type: "MCQ",
        questionType: "MCQ",
        marks: 4,
        negativeMarks: 1,
        source: "JEE Main PYQ 2015-2025",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Check if question exists in questionBank
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
  
  // Define alias IDs for each subtopic to match potential frontend keys
  const aliases = {
    "Drift velocity and mobility": [
      "Drift-velocity-and-mobility",
      "drift-velocity-and-mobility"
    ],
    "Ohm's law": [
      "Ohm's-law",
      "Ohms-law",
      "ohm's-law",
      "ohms-law",
      "Ohm's-law-All-Test",
      "ohms-law-All-Test"
    ],
    "Resistivity": [
      "Resistivity",
      "resistivity",
      "resistivity-All-Test",
      "Resistivity-All-Test"
    ],
    "Electrical energy and power": [
      "Electrical-energy-and-power",
      "electrical-energy-and-power"
    ],
    "Internal resistance of a cell and EMF": [
      "Internal-resistance-of-a-cell-and-EMF",
      "internal-resistance-of-a-cell-and-emf"
    ],
    "Kirchhoff's laws": [
      "Kirchhoff's-laws",
      "Kirchhoffs-laws",
      "kirchhoff's-laws",
      "kirchhoffs-laws",
      "Kirchhoff's-laws-All-Test",
      "kirchhoffs-laws-All-Test"
    ],
    "Wheatstone bridge": [
      "Wheatstone-bridge",
      "wheatstone-bridge",
      "Wheatstone-bridge-All-Test",
      "wheatstone-bridge-All-Test"
    ],
    "Meter bridge": [
      "Meter-bridge",
      "meter-bridge"
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

  // Also populate the old potentiometer test paper if it exists
  const meterBridgeQIds = subtopicQuestionIds["Meter bridge"];
  const potAliases = ["potentiometer-All-Test", "Potentiometer-All-Test", "potentiometer"];
  for (const pAlias of potAliases) {
    const pJeeTestId = `jee-mains-SUBTOPIC-Physics-${pAlias}`;
    const pNeetTestId = `neet-SUBTOPIC-Physics-${pAlias}`;
    await tpCol.updateOne(
      { testId: pJeeTestId },
      {
        $set: {
          title: "Meter bridge / Electrical measurements",
          subject: 'Physics',
          chapter: CHAPTER_NAME,
          subTopic: "Meter bridge",
          type: 'SUBTOPIC',
          exam: 'JEE Main',
          totalQuestions: 45,
          duration: 60,
          totalMarks: 180,
          questionIds: meterBridgeQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    await tpCol.updateOne(
      { testId: pNeetTestId },
      {
        $set: {
          title: "Meter bridge / Electrical measurements",
          subject: 'Physics',
          chapter: CHAPTER_NAME,
          subTopic: "Meter bridge",
          type: 'SUBTOPIC',
          exam: 'NEET',
          totalQuestions: 45,
          duration: 60,
          totalMarks: 180,
          questionIds: meterBridgeQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }

  // 5. Update / Seed Chapter Test Papers (25 balanced questions across all 8 subtopics)
  console.log('\n--- Updating Chapter Test Papers ---');
  const chapterQIds = [];
  // 8 subtopics: pick 4 from subtopic 0, and 3 each from the other 7 subtopics => 4 + 7*3 = 25 questions!
  SUBTOPICS.forEach((st, idx) => {
    const countToPick = (idx === 0) ? 4 : 3;
    const picked = subtopicQuestionIds[st].slice(0, countToPick);
    chapterQIds.push(...picked);
  });

  const jeeChapterTestId = 'jee-mains-CHAPTER-Physics-Current-Electricity-12';
  const neetChapterTestId = 'neet-CHAPTER-Physics-Current-Electricity-12';

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

  // Verification in MongoDB
  const totalInDb = await qbCol.countDocuments({ chapter: CHAPTER_NAME });
  console.log(`\n🎉 Total "${CHAPTER_NAME}" questions in MongoDB questionBank: ${totalInDb}`);

  await client.close();
  console.log('\n=== COMPLETED CURRENT ELECTRICITY POPULATION SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
