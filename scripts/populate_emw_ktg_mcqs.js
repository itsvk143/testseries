/**
 * scripts/populate_emw_ktg_mcqs.js
 * 
 * Synchronizes 55 MCQs per topic for:
 * 1. "Electromagnetic Waves" (4 subtopics = 220 MCQs)
 * 2. "Kinetic Theory of Gases" (5 subtopics = 275 MCQs)
 * Total = 495 MCQs
 * 
 * Updates:
 * - src/data/electromagnetic_waves_220.json
 * - src/data/kinetic_theory_275.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const EMW_SUBTOPICS = [
  "Displacement current",
  "EM spectrum",
  "Transverse nature of EM waves",
  "Energy density and Poynting vector"
];

const KTG_SUBTOPICS = [
  "Equation of state",
  "Kinetic interpretation of temperature",
  "Degrees of freedom",
  "Law of equipartition of energy",
  "Mean free path and molecular speeds (rms, average, most probable)"
];

function slugify(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^\w\-()']+/g, '');
}

/**
 * Rebalances a list of questions so that correctAnswer indices
 * are exactly distributed: 14 A, 14 B, 14 C, 13 D for 55 questions.
 */
function balanceOptions(questions, chapter, subtopic) {
  if (questions.length !== 55) {
    throw new Error(`Expected 55 questions for ${chapter} - ${subtopic}, but got ${questions.length}`);
  }

  const targetDistribution = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 14 A
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 14 B
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, // 14 C
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3     // 13 D
  ];

  const currentByAnswer = { 0: [], 1: [], 2: [], 3: [] };
  questions.forEach((q, idx) => {
    currentByAnswer[q.correctAnswer].push({ q, idx });
  });

  const balanced = new Array(55);
  const unassignedSlots = [];

  for (let i = 0; i < 55; i++) {
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
  if (counts[0] !== 14 || counts[1] !== 14 || counts[2] !== 14 || counts[3] !== 13) {
    throw new Error(`Balancing failed for ${chapter} - ${subtopic}! Got distribution: ${counts.join(', ')}`);
  }

  return balanced.map(q => {
    return {
      question: q.question,
      options: q.options,
      explanation: q.explanation,
      type: "MCQ",
      questionType: "MCQ (Multiple Choice Question)",
      marks: 4,
      negativeMarks: 1,
      difficulty: q.difficulty || "Medium",
      chapter: chapter,
      subtopic: q.subtopic,
      subTopic: q.subtopic,
      subject: "Physics",
      examType: "JEE Mains",
      correctAnswer: q.correctAnswer
    };
  });
}

async function main() {
  console.log('=== POPULATING ELECTROMAGNETIC WAVES & KINETIC THEORY OF GASES (55 MCQs/Topic) ===');

  // Load EMW batches
  const emwB1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'emw_ktg', 'emw_batch1.json'), 'utf8'));
  const emwB2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'emw_ktg', 'emw_batch2.json'), 'utf8'));
  const emwAll = [...emwB1, ...emwB2];
  console.log(`Loaded EMW questions: ${emwAll.length}`);

  // Load KTG batches
  const ktgB1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'emw_ktg', 'ktg_batch1.json'), 'utf8'));
  const ktgB2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'emw_ktg', 'ktg_batch2.json'), 'utf8'));
  const ktgB3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'emw_ktg', 'ktg_batch3.json'), 'utf8'));
  const ktgAll = [...ktgB1, ...ktgB2, ...ktgB3];
  console.log(`Loaded KTG questions: ${ktgAll.length}`);

  // Group and balance EMW
  const emwGrouped = {};
  for (const st of EMW_SUBTOPICS) {
    const rawQs = emwAll.filter(q => q.subtopic === st || q.subTopic === st);
    emwGrouped[st] = balanceOptions(rawQs, "Electromagnetic Waves", st);
    console.log(`  EMW -> "${st}": ${emwGrouped[st].length} balanced questions`);
  }

  // Group and balance KTG
  const ktgGrouped = {};
  for (const st of KTG_SUBTOPICS) {
    const rawQs = ktgAll.filter(q => q.subtopic === st || q.subTopic === st);
    ktgGrouped[st] = balanceOptions(rawQs, "Kinetic Theory of Gases", st);
    console.log(`  KTG -> "${st}": ${ktgGrouped[st].length} balanced questions`);
  }

  // 1. Write master JSON files
  const emwMasterData = {
    Physics: {
      "Electromagnetic Waves": emwGrouped
    }
  };
  const emwMasterPath = path.join(__dirname, '..', 'src', 'data', 'electromagnetic_waves_220.json');
  fs.writeFileSync(emwMasterPath, JSON.stringify(emwMasterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${emwMasterPath}`);

  const ktgMasterData = {
    Physics: {
      "Kinetic Theory of Gases": ktgGrouped
    }
  };
  const ktgMasterPath = path.join(__dirname, '..', 'src', 'data', 'kinetic_theory_275.json');
  fs.writeFileSync(ktgMasterPath, JSON.stringify(ktgMasterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${ktgMasterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Electromagnetic Waves"] = emwGrouped;
  jeemData["Kinetic Theory of Gases"] = ktgGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Electromagnetic Waves"] = emwGrouped;
  neetData["Kinetic Theory of Gases"] = ktgGrouped;
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

  const emwQuestionIds = {};
  const ktgQuestionIds = {};

  // Sync EMW questions to questionBank
  console.log('\n--- Syncing Electromagnetic Waves to questionBank ---');
  for (const st of EMW_SUBTOPICS) {
    emwQuestionIds[st] = [];
    const qList = emwGrouped[st];
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
        chapter: "Electromagnetic Waves",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Electromagnetic Waves",
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
      emwQuestionIds[st].push(docId);
    }
    console.log(`  Synced 55 questions in questionBank for EMW: "${st}"`);
  }

  // Sync KTG questions to questionBank
  console.log('\n--- Syncing Kinetic Theory of Gases to questionBank ---');
  for (const st of KTG_SUBTOPICS) {
    ktgQuestionIds[st] = [];
    const qList = ktgGrouped[st];
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
        chapter: "Kinetic Theory of Gases",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Kinetic Theory of Gases",
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
      ktgQuestionIds[st].push(docId);
    }
    console.log(`  Synced 55 questions in questionBank for KTG: "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const emwSubtopicAliases = {
    "Displacement current": [
      "Displacement-current",
      "displacement-current",
      "Displacement-Current"
    ],
    "EM spectrum": [
      "EM-spectrum",
      "em-spectrum",
      "EM-Spectrum"
    ],
    "Transverse nature of EM waves": [
      "Transverse-nature-of-EM-waves",
      "transverse-nature-of-EM-waves",
      "transverse-nature-of-em-waves",
      "Transverse-Nature-of-EM-Waves"
    ],
    "Energy density and Poynting vector": [
      "Energy-density-and-Poynting-vector",
      "energy-density-and-poynting-vector",
      "Energy-Density-and-Poynting-Vector"
    ]
  };

  const ktgSubtopicAliases = {
    "Equation of state": [
      "Equation-of-state",
      "equation-of-state",
      "Equation-of-State"
    ],
    "Kinetic interpretation of temperature": [
      "Kinetic-interpretation-of-temperature",
      "kinetic-interpretation-of-temperature",
      "Kinetic-Interpretation-of-Temperature"
    ],
    "Degrees of freedom": [
      "Degrees-of-freedom",
      "degrees-of-freedom",
      "Degrees-of-Freedom"
    ],
    "Law of equipartition of energy": [
      "Law-of-equipartition-of-energy",
      "law-of-equipartition-of-energy",
      "Law-of-Equipartition-of-Energy"
    ],
    "Mean free path and molecular speeds (rms, average, most probable)": [
      "Mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
      "mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
      "Mean-free-path-and-molecular-speeds-rms-average-most-probable",
      "mean-free-path-and-molecular-speeds-rms-average-most-probable",
      "Mean-free-path-and-molecular-speeds"
    ]
  };

  // Upsert EMW subtopic tests
  for (const st of EMW_SUBTOPICS) {
    const qIds = emwQuestionIds[st];
    const aliases = emwSubtopicAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Electromagnetic Waves',
      subTopic: st,
      type: 'SUBTOPIC',
      totalQuestions: 55,
      duration: 60,
      totalMarks: 220,
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
    console.log(`  ✅ Upserted test papers for EMW: "${st}" (55 questions)`);
  }

  // Upsert KTG subtopic tests
  for (const st of KTG_SUBTOPICS) {
    const qIds = ktgQuestionIds[st];
    const aliases = ktgSubtopicAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Kinetic Theory of Gases',
      subTopic: st,
      type: 'SUBTOPIC',
      totalQuestions: 55,
      duration: 60,
      totalMarks: 220,
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
    console.log(`  ✅ Upserted test papers for KTG: "${st}" (55 questions)`);
  }

  // 6. Update Chapter Test Papers
  console.log('\n--- Updating Chapter Test Papers ---');

  // EMW Chapter test: 25 balanced questions (7 from subtopic 0, 6 from subtopic 1, 6 from subtopic 2, 6 from subtopic 3)
  const emwChapterQIds = [
    ...emwQuestionIds[EMW_SUBTOPICS[0]].slice(0, 7),
    ...emwQuestionIds[EMW_SUBTOPICS[1]].slice(0, 6),
    ...emwQuestionIds[EMW_SUBTOPICS[2]].slice(0, 6),
    ...emwQuestionIds[EMW_SUBTOPICS[3]].slice(0, 6)
  ];

  const emwChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-12', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Electromagnetic-Waves-12', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Electromagnetic-Waves', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Electromagnetic-Waves-All-Test', exam: 'NEET' }
  ];

  for (const item of emwChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Electromagnetic Waves',
          subject: 'Physics',
          chapter: 'Electromagnetic Waves',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: emwChapterQIds.length,
          duration: 60,
          totalMarks: emwChapterQIds.length * 4,
          questionIds: emwChapterQIds,
          questions: emwChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Electromagnetic Waves Chapter Tests (${emwChapterQIds.length} balanced questions)`);

  // KTG Chapter test: 25 balanced questions (5 from each of the 5 subtopics)
  const ktgChapterQIds = [
    ...ktgQuestionIds[KTG_SUBTOPICS[0]].slice(0, 5),
    ...ktgQuestionIds[KTG_SUBTOPICS[1]].slice(0, 5),
    ...ktgQuestionIds[KTG_SUBTOPICS[2]].slice(0, 5),
    ...ktgQuestionIds[KTG_SUBTOPICS[3]].slice(0, 5),
    ...ktgQuestionIds[KTG_SUBTOPICS[4]].slice(0, 5)
  ];

  const ktgChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Kinetic-Theory-of-Gases-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Kinetic-Theory-of-Gases', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Kinetic-Theory-of-Gases-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Kinetic-Theory-of-Gases-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Kinetic-Theory-of-Gases', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Kinetic-Theory-of-Gases-All-Test', exam: 'NEET' }
  ];

  for (const item of ktgChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Kinetic Theory of Gases',
          subject: 'Physics',
          chapter: 'Kinetic Theory of Gases',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: ktgChapterQIds.length,
          duration: 60,
          totalMarks: ktgChapterQIds.length * 4,
          questionIds: ktgChapterQIds,
          questions: ktgChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Kinetic Theory of Gases Chapter Tests (${ktgChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
