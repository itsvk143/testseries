/**
 * scripts/populate_ow_rm_45_mcqs.js
 * 
 * Synchronizes 45 MCQs per topic for both:
 * 1. "Oscillations and Waves" (5 subtopics = 225 MCQs)
 * 2. "Rotational Motion" (6 subtopics = 270 MCQs)
 * Total = 495 MCQs
 * 
 * Updates:
 * - src/data/ow_rm_495.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const OW_SUBTOPICS = [
  "Simple Harmonic Motion (SHM)",
  "Wave motion",
  "Superposition of waves",
  "Standing waves in strings and organ pipes",
  "Beats"
];

const RM_SUBTOPICS = [
  "Center of mass",
  "Torque",
  "Moment of inertia",
  "Theorems of parallel and perpendicular axes",
  "Angular momentum conservation",
  "Rolling motion"
];

function slugify(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^\w\-()]+/g, '');
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
  console.log('=== POPULATING OSCILLATIONS & WAVES AND ROTATIONAL MOTION 45 MCQS PER TOPIC ===');

  const b1Path = path.join(__dirname, 'ow_rm', 'ow_batch1.json');
  const b2Path = path.join(__dirname, 'ow_rm', 'ow_batch2.json');
  const b3Path = path.join(__dirname, 'ow_rm', 'ow_batch3.json');
  const r1Path = path.join(__dirname, 'ow_rm', 'rm_batch1.json');
  const r2Path = path.join(__dirname, 'ow_rm', 'rm_batch2.json');
  const r3Path = path.join(__dirname, 'ow_rm', 'rm_batch3.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(b3Path, 'utf8'));
  const r1 = JSON.parse(fs.readFileSync(r1Path, 'utf8'));
  const r2 = JSON.parse(fs.readFileSync(r2Path, 'utf8'));
  const r3 = JSON.parse(fs.readFileSync(r3Path, 'utf8'));

  console.log(`Loaded batches: OW(${b1.length}, ${b2.length}, ${b3.length}), RM(${r1.length}, ${r2.length}, ${r3.length})`);

  const rawOW = [...b1, ...b2, ...b3];
  const rawRM = [...r1, ...r2, ...r3];

  const owGrouped = {};
  for (const st of OW_SUBTOPICS) {
    const rawQs = rawOW.filter(q => q.subtopic === st || q.subTopic === st);
    owGrouped[st] = balanceOptions(rawQs);
  }

  const rmGrouped = {};
  for (const st of RM_SUBTOPICS) {
    const rawQs = rawRM.filter(q => q.subtopic === st || q.subTopic === st);
    rmGrouped[st] = balanceOptions(rawQs);
  }

  // 1. Write dedicated master JSON file
  const masterData = {
    Physics: {
      "Oscillations and Waves": owGrouped,
      "Rotational Motion": rmGrouped
    }
  };

  const masterPath = path.join(__dirname, '..', 'src', 'data', 'ow_rm_495.json');
  fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${masterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Oscillations and Waves"] = owGrouped;
  jeemData["Rotational Motion"] = rmGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Oscillations and Waves"] = owGrouped;
  neetData["Rotational Motion"] = rmGrouped;
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

  const owQuestionIds = {};
  const rmQuestionIds = {};

  // Sync OW
  console.log('\n--- Syncing Oscillations and Waves to questionBank ---');
  for (const st of OW_SUBTOPICS) {
    owQuestionIds[st] = [];
    const qList = owGrouped[st];
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
        chapter: "Oscillations and Waves",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Oscillations and Waves",
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
      owQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // Sync RM
  console.log('\n--- Syncing Rotational Motion to questionBank ---');
  for (const st of RM_SUBTOPICS) {
    rmQuestionIds[st] = [];
    const qList = rmGrouped[st];
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
        chapter: "Rotational Motion",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Rotational Motion",
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
      rmQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const owAliases = {
    "Simple Harmonic Motion (SHM)": [
      "Simple-Harmonic-Motion-(SHM)",
      "simple-harmonic-motion-(shm)",
      "Simple-Harmonic-Motion",
      "simple-harmonic-motion",
      "SHM",
      "shm"
    ],
    "Wave motion": [
      "Wave-motion",
      "wave-motion"
    ],
    "Superposition of waves": [
      "Superposition-of-waves",
      "superposition-of-waves",
      "superposition",
      "Superposition"
    ],
    "Standing waves in strings and organ pipes": [
      "Standing-waves-in-strings-and-organ-pipes",
      "standing-waves-in-strings-and-organ-pipes"
    ],
    "Beats": [
      "Beats",
      "beats"
    ]
  };

  const rmAliases = {
    "Center of mass": [
      "Center-of-mass",
      "center-of-mass"
    ],
    "Torque": [
      "Torque",
      "torque"
    ],
    "Moment of inertia": [
      "Moment-of-inertia",
      "moment-of-inertia"
    ],
    "Theorems of parallel and perpendicular axes": [
      "Theorems-of-parallel-and-perpendicular-axes",
      "theorems-of-parallel-and-perpendicular-axes"
    ],
    "Angular momentum conservation": [
      "Angular-momentum-conservation",
      "angular-momentum-conservation"
    ],
    "Rolling motion": [
      "Rolling-motion",
      "rolling-motion"
    ]
  };

  // Upsert OW Subtopic testPapers
  for (const st of OW_SUBTOPICS) {
    const qIds = owQuestionIds[st];
    const aliases = owAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Oscillations and Waves',
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
    console.log(`  ✅ Upserted OW test papers for "${st}" (45 questions)`);
  }

  // Upsert RM Subtopic testPapers
  for (const st of RM_SUBTOPICS) {
    const qIds = rmQuestionIds[st];
    const aliases = rmAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Rotational Motion',
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
    console.log(`  ✅ Upserted RM test papers for "${st}" (45 questions)`);
  }

  // 6. Update Chapter Test Papers (25 balanced questions each)
  console.log('\n--- Updating Chapter Test Papers ---');

  // OW Chapter Test (5 questions from each of the 5 subtopics = 25 questions)
  const owChapterQIds = [];
  for (const st of OW_SUBTOPICS) {
    owChapterQIds.push(...owQuestionIds[st].slice(0, 5));
  }

  const owChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Oscillations-and-Waves-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Oscillations-and-Waves', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Oscillations-and-Waves-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Oscillations-and-Waves-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Oscillations-and-Waves', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Oscillations-and-Waves-All-Test', exam: 'NEET' }
  ];

  for (const item of owChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Oscillations and Waves',
          subject: 'Physics',
          chapter: 'Oscillations and Waves',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: owChapterQIds.length,
          duration: 60,
          totalMarks: owChapterQIds.length * 4,
          questionIds: owChapterQIds,
          questions: owChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted OW Chapter Tests (${owChapterQIds.length} balanced questions)`);

  // RM Chapter Test (4 from 5 subtopics + 5 from 1 subtopic = 25 questions)
  const rmChapterQIds = [];
  RM_SUBTOPICS.forEach((st, idx) => {
    const take = idx === 0 ? 5 : 4;
    rmChapterQIds.push(...rmQuestionIds[st].slice(0, take));
  });

  const rmChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Rotational-Motion-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Rotational-Motion', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Rotational-Motion-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Rotational-Motion-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Rotational-Motion', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Rotational-Motion-All-Test', exam: 'NEET' }
  ];

  for (const item of rmChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Rotational Motion',
          subject: 'Physics',
          chapter: 'Rotational Motion',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: rmChapterQIds.length,
          duration: 60,
          totalMarks: rmChapterQIds.length * 4,
          questionIds: rmChapterQIds,
          questions: rmChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted RM Chapter Tests (${rmChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
