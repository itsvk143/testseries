/**
 * scripts/populate_dual_nature_45_mcqs.js
 * 
 * Synchronizes 45 MCQs per topic for "Dual Nature of Matter and Radiation" (5 subtopics = 225 MCQs).
 * 
 * Updates:
 * - src/data/dual_nature_225.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const DNMR_SUBTOPICS = [
  "Photoelectric effect",
  "de Broglie wavelength",
  "Bohr's model",
  "Wave-particle duality",
  "Einstein's photoelectric equation and work function"
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
    throw new Error(`Expected 45 questions, but got ${questions.length}`);
  }

  const targetDistribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                              2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                              3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

  const currentByAnswer = { 0: [], 1: [], 2: [], 3: [] };
  questions.forEach((q, idx) => {
    currentByAnswer[q.correctAnswer].push({ q, idx });
  });

  const balanced = new Array(45);
  const unassignedSlots = [];

  for (let i = 0; i < 45; i++) {
    const targetAns = targetDistribution[i];
    if (currentByAnswer[targetAns].length > 0) {
      const item = currentByAnswer[targetAns].shift();
      balanced[i] = item.q;
    } else {
      unassignedSlots.push({ index: i, targetAns });
    }
  }

  const remainingQuestions = [];
  for (let a = 0; a <= 3; a++) {
    while (currentByAnswer[a].length > 0) {
      remainingQuestions.push(currentByAnswer[a].shift().q);
    }
  }

  for (let k = 0; k < unassignedSlots.length; k++) {
    const slot = unassignedSlots[k];
    const qToSwap = remainingQuestions[k];
    const origAnswer = qToSwap.correctAnswer;
    const targetAnswer = slot.targetAns;

    const newOptions = [...qToSwap.options];
    const correctText = newOptions[origAnswer];
    const targetText = newOptions[targetAnswer];

    newOptions[targetAnswer] = correctText;
    newOptions[origAnswer] = targetText;

    balanced[slot.index] = {
      ...qToSwap,
      options: newOptions,
      correctAnswer: targetAnswer
    };
  }

  const counts = [0, 0, 0, 0];
  balanced.forEach(q => counts[q.correctAnswer]++);
  if (counts[0] !== 12 || counts[1] !== 11 || counts[2] !== 11 || counts[3] !== 11) {
    throw new Error(`Balancing failed! Got distribution: ${counts.join(', ')}`);
  }

  return balanced.map(q => {
    let chosenTarget = q.correctAnswer;
    return {
      question: q.question,
      options: q.options,
      explanation: q.explanation,
      type: "MCQ",
      questionType: "MCQ (Multiple Choice Question)",
      marks: 4,
      negativeMarks: 1,
      difficulty: q.difficulty || "Medium",
      chapter: "Dual Nature of Matter and Radiation",
      subtopic: q.subtopic,
      subTopic: q.subtopic,
      subject: "Physics",
      examType: "JEE Mains",
      correctAnswer: chosenTarget
    };
  });
}

async function main() {
  console.log('=== POPULATING DUAL NATURE OF MATTER AND RADIATION 45 MCQS PER TOPIC ===');

  const b1Path = path.join(__dirname, 'dnmr', 'dnmr_batch1.json');
  const b2Path = path.join(__dirname, 'dnmr', 'dnmr_batch2.json');
  const b3Path = path.join(__dirname, 'dnmr', 'dnmr_batch3.json');

  const b1 = JSON.parse(fs.readFileSync(b1Path, 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(b2Path, 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(b3Path, 'utf8'));

  console.log(`Loaded batches: b1(${b1.length}), b2(${b2.length}), b3(${b3.length})`);

  const rawAll = [...b1, ...b2, ...b3];

  const dnmrGrouped = {};
  for (const st of DNMR_SUBTOPICS) {
    const rawQs = rawAll.filter(q => q.subtopic === st || q.subTopic === st);
    dnmrGrouped[st] = balanceOptions(rawQs);
  }

  // 1. Write dedicated master JSON file
  const masterData = {
    Physics: {
      "Dual Nature of Matter and Radiation": dnmrGrouped
    }
  };

  const masterPath = path.join(__dirname, '..', 'src', 'data', 'dual_nature_225.json');
  fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${masterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Dual Nature of Matter and Radiation"] = dnmrGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Dual Nature of Matter and Radiation"] = dnmrGrouped;
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

  const dnmrQuestionIds = {};

  // Sync Dual Nature of Matter and Radiation questions to questionBank
  console.log('\n--- Syncing Dual Nature of Matter and Radiation to questionBank ---');
  for (const st of DNMR_SUBTOPICS) {
    dnmrQuestionIds[st] = [];
    const qList = dnmrGrouped[st];
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
        chapter: "Dual Nature of Matter and Radiation",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Dual Nature of Matter and Radiation",
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
      dnmrQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const dnmrAliases = {
    "Photoelectric effect": [
      "Photoelectric-effect",
      "photoelectric-effect",
      "Photoelectric-Effect"
    ],
    "de Broglie wavelength": [
      "de-Broglie-wavelength",
      "de-broglie-wavelength",
      "de-Broglie-Wavelength"
    ],
    "Bohr's model": [
      "Bohr's-model",
      "bohr's-model",
      "Bohrs-model",
      "bohrs-model",
      "Bohr’s-model"
    ],
    "Wave-particle duality": [
      "Wave-particle-duality",
      "wave-particle-duality",
      "Wave-Particle-Duality"
    ],
    "Einstein's photoelectric equation and work function": [
      "Einstein's-photoelectric-equation-and-work-function",
      "einstein's-photoelectric-equation-and-work-function",
      "Einsteins-photoelectric-equation-and-work-function",
      "einsteins-photoelectric-equation-and-work-function",
      "Einstein’s-photoelectric-equation-and-work-function"
    ]
  };

  for (const st of DNMR_SUBTOPICS) {
    const qIds = dnmrQuestionIds[st];
    const aliases = dnmrAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Dual Nature of Matter and Radiation',
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

  // 6. Update Chapter Test Papers (25 balanced questions: 5 from each of the 5 subtopics)
  console.log('\n--- Updating Chapter Test Papers ---');

  const dnmrChapterQIds = [];
  DNMR_SUBTOPICS.forEach(st => {
    dnmrChapterQIds.push(...dnmrQuestionIds[st].slice(0, 5));
  });

  const dnmrChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation-12', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation-12', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Dual-Nature-of-Matter-and-Radiation-All-Test', exam: 'NEET' }
  ];

  for (const item of dnmrChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Dual Nature of Matter and Radiation',
          subject: 'Physics',
          chapter: 'Dual Nature of Matter and Radiation',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: dnmrChapterQIds.length,
          duration: 60,
          totalMarks: dnmrChapterQIds.length * 4,
          questionIds: dnmrChapterQIds,
          questions: dnmrChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Dual Nature of Matter and Radiation Chapter Tests (${dnmrChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
