/**
 * scripts/populate_atoms_nuclei_mcqs.js
 * 
 * Synchronizes 45 MCQs per topic for:
 * "Atoms and Nuclei" (7 subtopics = 315 MCQs)
 * 
 * Updates:
 * - src/data/atoms_nuclei_315.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const AN_SUBTOPICS = [
  "Atomic models",
  "Rutherford's scattering and Bohr's quantization",
  "Hydrogen spectrum and Rydberg formula",
  "Mass defect and nuclear force",
  "Binding energy",
  "Nuclear reactions",
  "Nuclear fission and fusion"
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
function balanceOptions(questions, chapter) {
  if (questions.length !== 45) {
    throw new Error(`Expected 45 questions for ${chapter} - ${questions[0]?.subtopic}, but got ${questions.length}`);
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
  console.log('=== POPULATING ATOMS AND NUCLEI 45 MCQS PER TOPIC ===');

  // Load batches
  const b1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'atoms_nuclei', 'an_batch1.json'), 'utf8'));
  const b2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'atoms_nuclei', 'an_batch2.json'), 'utf8'));
  const b3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'atoms_nuclei', 'an_batch3.json'), 'utf8'));
  const b4 = JSON.parse(fs.readFileSync(path.join(__dirname, 'atoms_nuclei', 'an_batch4.json'), 'utf8'));

  console.log(`Loaded batches: b1(${b1.length}), b2(${b2.length}), b3(${b3.length}), b4(${b4.length})`);

  const rawAll = [...b1, ...b2, ...b3, ...b4];

  const anGrouped = {};
  for (const st of AN_SUBTOPICS) {
    const rawQs = rawAll.filter(q => q.subtopic === st || q.subTopic === st);
    anGrouped[st] = balanceOptions(rawQs, "Atoms and Nuclei");
    console.log(`  Atoms and Nuclei -> "${st}": ${anGrouped[st].length} balanced questions`);
  }

  // 1. Write dedicated master JSON file
  const anMasterData = {
    Physics: {
      "Atoms and Nuclei": anGrouped
    }
  };
  const anMasterPath = path.join(__dirname, '..', 'src', 'data', 'atoms_nuclei_315.json');
  fs.writeFileSync(anMasterPath, JSON.stringify(anMasterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${anMasterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Atoms and Nuclei"] = anGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Atoms and Nuclei"] = anGrouped;
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

  const anQuestionIds = {};

  // Sync Atoms and Nuclei questions to questionBank
  console.log('\n--- Syncing Atoms and Nuclei to questionBank ---');
  for (const st of AN_SUBTOPICS) {
    anQuestionIds[st] = [];
    const qList = anGrouped[st];
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
        chapter: "Atoms and Nuclei",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Atoms and Nuclei",
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
      anQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const subtopicAliases = {
    "Atomic models": [
      "Atomic-models",
      "atomic-models",
      "Atomic-Models"
    ],
    "Rutherford's scattering and Bohr's quantization": [
      "Rutherford's-scattering-and-Bohr's-quantization",
      "rutherford's-scattering-and-bohr's-quantization",
      "Rutherfords-scattering-and-Bohrs-quantization",
      "rutherfords-scattering-and-bohrs-quantization",
      "Rutherford’s-scattering-and-Bohr’s-quantization"
    ],
    "Hydrogen spectrum and Rydberg formula": [
      "Hydrogen-spectrum-and-Rydberg-formula",
      "hydrogen-spectrum-and-rydberg-formula",
      "Hydrogen-Spectrum-and-Rydberg-Formula"
    ],
    "Mass defect and nuclear force": [
      "Mass-defect-and-nuclear-force",
      "mass-defect-and-nuclear-force",
      "Mass-Defect-and-Nuclear-Force"
    ],
    "Binding energy": [
      "Binding-energy",
      "binding-energy",
      "Binding-Energy"
    ],
    "Nuclear reactions": [
      "Nuclear-reactions",
      "nuclear-reactions",
      "Nuclear-Reactions"
    ],
    "Nuclear fission and fusion": [
      "Nuclear-fission-and-fusion",
      "nuclear-fission-and-fusion",
      "Nuclear-Fission-and-Fusion"
    ]
  };

  for (const st of AN_SUBTOPICS) {
    const qIds = anQuestionIds[st];
    const aliases = subtopicAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Atoms and Nuclei',
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
    console.log(`  ✅ Upserted test papers for Atoms and Nuclei: "${st}" (45 questions)`);
  }

  // 6. Update Chapter Test Papers (25 balanced questions: 4 from subtopics 0..3, 3 from subtopics 4..6)
  console.log('\n--- Updating Chapter Test Papers ---');

  const anChapterQIds = [
    ...anQuestionIds[AN_SUBTOPICS[0]].slice(0, 4),
    ...anQuestionIds[AN_SUBTOPICS[1]].slice(0, 4),
    ...anQuestionIds[AN_SUBTOPICS[2]].slice(0, 4),
    ...anQuestionIds[AN_SUBTOPICS[3]].slice(0, 4),
    ...anQuestionIds[AN_SUBTOPICS[4]].slice(0, 3),
    ...anQuestionIds[AN_SUBTOPICS[5]].slice(0, 3),
    ...anQuestionIds[AN_SUBTOPICS[6]].slice(0, 3)
  ];

  const anChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Atoms-and-Nuclei-12', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Atoms-and-Nuclei', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Atoms-and-Nuclei-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Atoms-and-Nuclei-12', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Atoms-and-Nuclei', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Atoms-and-Nuclei-All-Test', exam: 'NEET' }
  ];

  for (const item of anChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Atoms and Nuclei',
          subject: 'Physics',
          chapter: 'Atoms and Nuclei',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: anChapterQIds.length,
          duration: 60,
          totalMarks: anChapterQIds.length * 4,
          questionIds: anChapterQIds,
          questions: anChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Atoms and Nuclei Chapter Tests (${anChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
