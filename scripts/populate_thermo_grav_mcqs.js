/**
 * scripts/populate_thermo_grav_mcqs.js
 * 
 * Synchronizes 45 MCQs per topic for:
 * - "Thermodynamics" (4 subtopics = 180 MCQs)
 * - "Gravitation" (6 subtopics = 270 MCQs)
 * Total = 450 MCQs
 * 
 * Updates:
 * - src/data/thermodynamics_180.json
 * - src/data/gravitation_270.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const THERMO_SUBTOPICS = [
  "Thermal equilibrium",
  "Laws of thermodynamics (zeroth, first, second)",
  "Isothermal and adiabatic processes",
  "Work done in thermodynamic processes"
];

const GRAV_SUBTOPICS = [
  "Kepler's laws",
  "Newton's law of gravitation",
  "Gravitational potential energy",
  "Escape velocity",
  "Acceleration due to gravity (variation with height, depth, latitude)",
  "Orbital velocity and satellite motion"
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
  console.log('=== POPULATING THERMODYNAMICS & GRAVITATION 45 MCQS PER TOPIC ===');

  // Load batches
  const tb1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'thermo_grav', 'thermo_batch1.json'), 'utf8'));
  const tb2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'thermo_grav', 'thermo_batch2.json'), 'utf8'));
  const gb1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'thermo_grav', 'grav_batch1.json'), 'utf8'));
  const gb2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'thermo_grav', 'grav_batch2.json'), 'utf8'));
  const gb3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'thermo_grav', 'grav_batch3.json'), 'utf8'));

  console.log(`Loaded batches: tb1(${tb1.length}), tb2(${tb2.length}), gb1(${gb1.length}), gb2(${gb2.length}), gb3(${gb3.length})`);

  const rawThermo = [...tb1, ...tb2];
  const rawGrav = [...gb1, ...gb2, ...gb3];

  const thermoGrouped = {};
  for (const st of THERMO_SUBTOPICS) {
    const rawQs = rawThermo.filter(q => q.subtopic === st || q.subTopic === st);
    thermoGrouped[st] = balanceOptions(rawQs, "Thermodynamics");
    console.log(`  Thermodynamics -> "${st}": ${thermoGrouped[st].length} balanced questions`);
  }

  const gravGrouped = {};
  for (const st of GRAV_SUBTOPICS) {
    const rawQs = rawGrav.filter(q => q.subtopic === st || q.subTopic === st);
    gravGrouped[st] = balanceOptions(rawQs, "Gravitation");
    console.log(`  Gravitation -> "${st}": ${gravGrouped[st].length} balanced questions`);
  }

  // 1. Write dedicated master JSON files
  const thermoMasterData = {
    Physics: {
      "Thermodynamics": thermoGrouped
    }
  };
  const thermoMasterPath = path.join(__dirname, '..', 'src', 'data', 'thermodynamics_180.json');
  fs.writeFileSync(thermoMasterPath, JSON.stringify(thermoMasterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${thermoMasterPath}`);

  const gravMasterData = {
    Physics: {
      "Gravitation": gravGrouped
    }
  };
  const gravMasterPath = path.join(__dirname, '..', 'src', 'data', 'gravitation_270.json');
  fs.writeFileSync(gravMasterPath, JSON.stringify(gravMasterData, null, 2), 'utf8');
  console.log(`✅ Written master file: ${gravMasterPath}`);

  // 2. Update local questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Thermodynamics"] = thermoGrouped;
  jeemData["Gravitation"] = gravGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Written JEE Mains chapter JSON: ${jeemPath}`);

  // 3. Update local questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Thermodynamics"] = thermoGrouped;
  neetData["Gravitation"] = gravGrouped;
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

  const thermoQuestionIds = {};
  const gravQuestionIds = {};

  // Sync Thermodynamics questions to questionBank
  console.log('\n--- Syncing Thermodynamics to questionBank ---');
  for (const st of THERMO_SUBTOPICS) {
    thermoQuestionIds[st] = [];
    const qList = thermoGrouped[st];
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
        chapter: "Thermodynamics",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Thermodynamics",
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
      thermoQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // Sync Gravitation questions to questionBank
  console.log('\n--- Syncing Gravitation to questionBank ---');
  for (const st of GRAV_SUBTOPICS) {
    gravQuestionIds[st] = [];
    const qList = gravGrouped[st];
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
        chapter: "Gravitation",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Gravitation",
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
      gravQuestionIds[st].push(docId);
    }
    console.log(`  Synced 45 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const subtopicAliases = {
    // Thermodynamics
    "Thermal equilibrium": [
      "Thermal-equilibrium",
      "thermal-equilibrium",
      "Thermal-Equilibrium"
    ],
    "Laws of thermodynamics (zeroth, first, second)": [
      "Laws-of-thermodynamics-(zeroth,-first,-second)",
      "laws-of-thermodynamics-(zeroth,-first,-second)",
      "Laws-of-thermodynamics-(zeroth-first-second)",
      "laws-of-thermodynamics",
      "Laws-of-thermodynamics"
    ],
    "Isothermal and adiabatic processes": [
      "Isothermal-and-adiabatic-processes",
      "isothermal-and-adiabatic-processes",
      "Isothermal-and-Adiabatic-Processes"
    ],
    "Work done in thermodynamic processes": [
      "Work-done-in-thermodynamic-processes",
      "work-done-in-thermodynamic-processes",
      "Work-Done-in-Thermodynamic-Processes"
    ],

    // Gravitation
    "Kepler's laws": [
      "Kepler's-laws",
      "kepler's-laws",
      "Keplers-laws",
      "keplers-laws",
      "Kepler’s-laws"
    ],
    "Newton's law of gravitation": [
      "Newton's-law-of-gravitation",
      "newton's-law-of-gravitation",
      "Newtons-law-of-gravitation",
      "newtons-law-of-gravitation",
      "Newton’s-law-of-gravitation",
      "newton’s-law-of-gravitation"
    ],
    "Gravitational potential energy": [
      "Gravitational-potential-energy",
      "gravitational-potential-energy",
      "Gravitational-Potential-Energy"
    ],
    "Escape velocity": [
      "Escape-velocity",
      "escape-velocity",
      "Escape-Velocity"
    ],
    "Acceleration due to gravity (variation with height, depth, latitude)": [
      "Acceleration-due-to-gravity-(variation-with-height,-depth,-latitude)",
      "acceleration-due-to-gravity-(variation-with-height,-depth,-latitude)",
      "Acceleration-due-to-gravity-(variation-with-height-depth-latitude)",
      "Acceleration-due-to-gravity",
      "acceleration-due-to-gravity"
    ],
    "Orbital velocity and satellite motion": [
      "Orbital-velocity-and-satellite-motion",
      "orbital-velocity-and-satellite-motion",
      "Orbital-Velocity-and-Satellite-Motion"
    ]
  };

  // Upsert Subtopic tests for Thermodynamics
  for (const st of THERMO_SUBTOPICS) {
    const qIds = thermoQuestionIds[st];
    const aliases = subtopicAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Thermodynamics',
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
    console.log(`  ✅ Upserted test papers for Thermodynamics: "${st}" (45 questions)`);
  }

  // Upsert Subtopic tests for Gravitation
  for (const st of GRAV_SUBTOPICS) {
    const qIds = gravQuestionIds[st];
    const aliases = subtopicAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Gravitation',
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
    console.log(`  ✅ Upserted test papers for Gravitation: "${st}" (45 questions)`);
  }

  // 6. Update Chapter Test Papers (25 balanced questions)
  console.log('\n--- Updating Chapter Test Papers ---');

  // Thermodynamics: 7 from subtopic 0, 6 from subtopics 1, 2, 3 (total 25)
  const thermoChapterQIds = [
    ...thermoQuestionIds[THERMO_SUBTOPICS[0]].slice(0, 7),
    ...thermoQuestionIds[THERMO_SUBTOPICS[1]].slice(0, 6),
    ...thermoQuestionIds[THERMO_SUBTOPICS[2]].slice(0, 6),
    ...thermoQuestionIds[THERMO_SUBTOPICS[3]].slice(0, 6)
  ];

  const thermoChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Thermodynamics-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Thermodynamics', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Thermodynamics-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Thermodynamics-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Thermodynamics', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Thermodynamics-All-Test', exam: 'NEET' }
  ];

  for (const item of thermoChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Thermodynamics',
          subject: 'Physics',
          chapter: 'Thermodynamics',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: thermoChapterQIds.length,
          duration: 60,
          totalMarks: thermoChapterQIds.length * 4,
          questionIds: thermoChapterQIds,
          questions: thermoChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Thermodynamics Chapter Tests (${thermoChapterQIds.length} balanced questions)`);

  // Gravitation: 5 from subtopic 0, 4 from subtopics 1, 2, 3, 4, 5 (total 25)
  const gravChapterQIds = [
    ...gravQuestionIds[GRAV_SUBTOPICS[0]].slice(0, 5),
    ...gravQuestionIds[GRAV_SUBTOPICS[1]].slice(0, 4),
    ...gravQuestionIds[GRAV_SUBTOPICS[2]].slice(0, 4),
    ...gravQuestionIds[GRAV_SUBTOPICS[3]].slice(0, 4),
    ...gravQuestionIds[GRAV_SUBTOPICS[4]].slice(0, 4),
    ...gravQuestionIds[GRAV_SUBTOPICS[5]].slice(0, 4)
  ];

  const gravChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Gravitation-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Gravitation', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Gravitation-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Gravitation-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Gravitation', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Gravitation-All-Test', exam: 'NEET' }
  ];

  for (const item of gravChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Gravitation',
          subject: 'Physics',
          chapter: 'Gravitation',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: gravChapterQIds.length,
          duration: 60,
          totalMarks: gravChapterQIds.length * 4,
          questionIds: gravChapterQIds,
          questions: gravChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Gravitation Chapter Tests (${gravChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
