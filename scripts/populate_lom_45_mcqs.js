/**
 * scripts/populate_lom_45_mcqs.js
 * 
 * Synchronizes 45 MCQs per topic for "Laws of Motion" (7 subtopics = 315 MCQs).
 * 
 * Updates:
 * - src/data/lom_315.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const LOM_SUBTOPICS = [
  "Newton's laws",
  "Impulse",
  "Conservation of momentum",
  "Friction",
  "Banking of roads",
  "Connected motion and pulley problems",
  "Equilibrium of concurrent forces"
];

function slugify(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^\w\-()']+/g, '');
}

/**
 * Rebalances a list of questions so that correctAnswer indices
 * are exactly distributed: 12 A, 11 B, 11 C, 11 D for 45 questions.
 */
function balanceOptions(questions) {
  if (questions.length !== 45) {
    console.warn(`Warning: Expected 45 questions for balancing, got ${questions.length}`);
    return questions;
  }

  const targetCounts = [12, 11, 11, 11]; // 0: A, 1: B, 2: C, 3: D
  const currentCounts = [0, 0, 0, 0];

  return questions.map((q, idx) => {
    // Choose target slot that still needs questions
    let chosenTarget = -1;
    for (let c = 0; c < 4; c++) {
      const slot = (q.correctAnswer + c) % 4;
      if (currentCounts[slot] < targetCounts[slot]) {
        chosenTarget = slot;
        break;
      }
    }

    if (chosenTarget === -1) {
      chosenTarget = q.correctAnswer;
    }

    currentCounts[chosenTarget]++;

    const shift = (chosenTarget - q.correctAnswer + 4) % 4;
    if (shift === 0) {
      return { ...q };
    }

    // Shift options circularly
    const originalOpts = [...q.options];
    const newOpts = new Array(4);
    for (let i = 0; i < 4; i++) {
      newOpts[(i + shift) % 4] = originalOpts[i];
    }

    return {
      ...q,
      options: newOpts,
      correctAnswer: chosenTarget
    };
  });
}

async function main() {
  console.log('=== POPULATING LAWS OF MOTION 45 MCQS PER TOPIC ===');

  const b1Path = path.join(__dirname, 'lom', 'lom_batch1.json');
  const b2Path = path.join(__dirname, 'lom', 'lom_batch2.json');
  const b3Path = path.join(__dirname, 'lom', 'lom_batch3.json');
  const b4Path = path.join(__dirname, 'lom', 'lom_batch4.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(b3Path, 'utf8'));
  const b4 = JSON.parse(fs.readFileSync(b4Path, 'utf8'));

  console.log(`Loaded batches: b1(${b1.length}), b2(${b2.length}), b3(${b3.length}), b4(${b4.length})`);

  const rawAll = [...b1, ...b2, ...b3, ...b4];

  const lomGrouped = {};
  for (const st of LOM_SUBTOPICS) {
    const rawQs = rawAll.filter(q => q.subtopic === st || q.subTopic === st);
    lomGrouped[st] = balanceOptions(rawQs);
  }

  // 1. Write dedicated master JSON file
  const masterData = {
    Physics: {
      "Laws of Motion": lomGrouped
    }
  };

  const masterPath = path.join(__dirname, '..', 'src', 'data', 'lom_315.json');
  fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${masterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Laws of Motion"] = lomGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Laws of Motion"] = lomGrouped;
  fs.writeFileSync(neetPath, JSON.stringify(neetData, null, 2), 'utf8');
  console.log(`✅ Written NEET chapter JSON: ${neetPath}`);

  // 4. MongoDB Atlas Sync
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI not set. Skipping DB sync.");
    return;
  }

  console.log('\n--- Connecting to MongoDB Atlas ---');
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qbCol = db.collection('questionBank');
  const tpCol = db.collection('testPapers');

  const lomQuestionIds = {};

  // Sync Laws of Motion questions to questionBank
  console.log('\n--- Syncing Laws of Motion to questionBank ---');
  for (const st of LOM_SUBTOPICS) {
    lomQuestionIds[st] = [];
    const qList = lomGrouped[st];
    for (const q of qList) {
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        type: q.type || "MCQ",
        questionType: q.questionType || "MCQ (Multiple Choice Question)",
        marks: 4,
        negativeMarks: 1,
        difficulty: q.difficulty || "Medium",
        chapter: "Laws of Motion",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Laws of Motion",
        subTopic: st,
        question: q.question
      });

      let docId;
      if (existing) {
        docId = existing._id;
        await qbCol.updateOne({ _id: docId }, { $set: doc });
      } else {
        const res = await qbCol.insertOne(doc);
        docId = res.insertedId;
      }
      lomQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const lomAliases = {
    "Newton's laws": [
      "Newton's-laws",
      "newton's-laws",
      "Newtons-laws",
      "newtons-laws"
    ],
    "Impulse": [
      "Impulse",
      "impulse"
    ],
    "Conservation of momentum": [
      "Conservation-of-momentum",
      "conservation-of-momentum"
    ],
    "Friction": [
      "Friction",
      "friction"
    ],
    "Banking of roads": [
      "Banking-of-roads",
      "banking-of-roads"
    ],
    "Connected motion and pulley problems": [
      "Connected-motion-and-pulley-problems",
      "connected-motion-and-pulley-problems"
    ],
    "Equilibrium of concurrent forces": [
      "Equilibrium-of-concurrent-forces",
      "equilibrium-of-concurrent-forces"
    ]
  };

  for (const st of LOM_SUBTOPICS) {
    const qIds = lomQuestionIds[st];
    const aliases = lomAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Laws of Motion',
      subTopic: st,
      type: 'SUBTOPIC',
      totalQuestions: 45,
      duration: 60,
      totalMarks: 180,
      questionIds: qIds,
      questions: qIds.slice(0, 25),
      updatedAt: new Date()
    };

    for (const alias of aliases) {
      const jeeTestIds = [
        `jee-mains-SUBTOPIC-Physics-${alias}`,
        `jee-mains-SUBTOPIC-Physics-${alias}-All-Test`
      ];
      const neetTestIds = [
        `neet-SUBTOPIC-Physics-${alias}`,
        `neet-SUBTOPIC-Physics-${alias}-All-Test`
      ];

      for (const tid of jeeTestIds) {
        await tpCol.updateOne(
          { testId: tid },
          {
            $set: { ...testPaperBase, testId: tid, exam: 'JEE Main' },
            $setOnInsert: { createdAt: new Date() }
          },
          { upsert: true }
        );
      }

      for (const tid of neetTestIds) {
        await tpCol.updateOne(
          { testId: tid },
          {
            $set: { ...testPaperBase, testId: tid, exam: 'NEET' },
            $setOnInsert: { createdAt: new Date() }
          },
          { upsert: true }
        );
      }
    }
    console.log(`  ✅ Upserted test papers for "${st}" (45 questions)`);
  }

  // 6. Update Chapter Test Papers (25 balanced questions each)
  console.log('\n--- Updating Chapter Test Papers ---');

  // Sample across all 7 subtopics: 4 from 4 subtopics + 3 from 3 subtopics = 25 questions
  const lomChapterQIds = [];
  LOM_SUBTOPICS.forEach((st, idx) => {
    const count = idx < 4 ? 4 : 3;
    lomChapterQIds.push(...lomQuestionIds[st].slice(0, count));
  });

  const lomChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Laws-of-Motion-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Laws-of-Motion', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Laws-of-Motion-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Laws-of-Motion-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Laws-of-Motion', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Laws-of-Motion-All-Test', exam: 'NEET' }
  ];

  for (const item of lomChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Laws of Motion',
          subject: 'Physics',
          chapter: 'Laws of Motion',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: lomChapterQIds.length,
          duration: 60,
          totalMarks: lomChapterQIds.length * 4,
          questionIds: lomChapterQIds,
          questions: lomChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Laws of Motion Chapter Tests (${lomChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
