/**
 * scripts/populate_psl_mcqs.js
 * 
 * Synchronizes 55 MCQs per topic for "Properties of Solids and Liquids" (5 subtopics = 275 MCQs).
 * 
 * Updates:
 * - src/data/properties_solids_liquids_275.json (verified & assembled)
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const PSL_SUBTOPICS = [
  "Elasticity (Hooke's law, Young's modulus)",
  "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
  "Surface tension, surface energy, and capillarity",
  "Thermal expansion and calorimetry",
  "Stefan's law of radiation"
];

function slugify(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^\w\-()']+/g, '');
}

async function main() {
  console.log('=== POPULATING PROPERTIES OF SOLIDS AND LIQUIDS 55 MCQS PER TOPIC ===');

  const jsonPath = path.join(__dirname, '..', 'src', 'data', 'properties_solids_liquids_275.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Master dataset not found at ${jsonPath}`);
  }

  const rawQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Loaded ${rawQuestions.length} questions from ${jsonPath}`);

  if (rawQuestions.length !== 275) {
    throw new Error(`Expected exactly 275 questions, found ${rawQuestions.length}`);
  }

  // Group by subtopic and format for local question json stores
  const pslGrouped = {};
  for (const st of PSL_SUBTOPICS) {
    const list = rawQuestions.filter(q => q.subtopic === st || q.subTopic === st);
    if (list.length !== 55) {
      throw new Error(`Subtopic "${st}" has ${list.length} questions, expected 55`);
    }

    pslGrouped[st] = list.map(q => {
      const targetIndex = q.options.indexOf(q.correctAnswer);
      if (targetIndex === -1) {
        throw new Error(`Correct answer "${q.correctAnswer}" not in options for ${q.questionId}`);
      }
      return {
        question: q.question,
        options: q.options,
        explanation: q.explanation,
        type: "MCQ",
        questionType: "MCQ (Multiple Choice Question)",
        marks: 4,
        negativeMarks: 1,
        difficulty: q.difficulty || "Medium",
        chapter: "Properties of Solids and Liquids",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        correctAnswer: targetIndex
      };
    });
    console.log(`Grouped "${st}": 55 questions`);
  }

  // 1. Update src/data/questionsjeem/chapter_physics.json
  const jeemPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_physics.json');
  let jeemData = {};
  if (fs.existsSync(jeemPath)) {
    jeemData = JSON.parse(fs.readFileSync(jeemPath, 'utf8'));
  }
  jeemData["Properties of Solids and Liquids"] = pslGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Updated JEE Mains chapter JSON: ${jeemPath}`);

  // 2. Update src/data/questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Properties of Solids and Liquids"] = pslGrouped;
  fs.writeFileSync(neetPath, JSON.stringify(neetData, null, 2), 'utf8');
  console.log(`✅ Updated NEET chapter JSON: ${neetPath}`);

  // 3. Connect to MongoDB Atlas
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

  const pslQuestionIds = {};

  // 4. Sync questions to questionBank
  console.log('\n--- Syncing Properties of Solids and Liquids to questionBank ---');
  for (const st of PSL_SUBTOPICS) {
    pslQuestionIds[st] = [];
    const qList = pslGrouped[st];
    for (const q of qList) {
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer, // number: 0, 1, 2, 3
        explanation: q.explanation,
        type: "MCQ",
        questionType: "MCQ (Multiple Choice Question)",
        marks: 4,
        negativeMarks: 1,
        difficulty: q.difficulty || "Medium",
        chapter: "Properties of Solids and Liquids",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Properties of Solids and Liquids",
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
      pslQuestionIds[st].push(docId);
    }
    console.log(`  Synced 55 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const pslAliases = {
    "Elasticity (Hooke's law, Young's modulus)": [
      "Elasticity-(Hooke's-law,-Young's-modulus)",
      "elasticity-(hooke's-law,-young's-modulus)",
      "Elasticity-(Hooke's-law-Young's-modulus)",
      "elasticity-(hooke's-law-young's-modulus)",
      "Elasticity-(Hookes-law-Youngs-modulus)",
      "elasticity-(hookes-law-youngs-modulus)",
      "Elasticity-Hookes-law-Youngs-modulus",
      "Elasticity-(Hooke’s-law,-Young’s-modulus)",
      "elasticity-(hooke’s-law,-young’s-modulus)",
      "Elasticity-(Hooke’s-law-Young’s-modulus)",
      "elasticity-(hooke’s-law-young’s-modulus)"
    ],
    "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)": [
      "Fluid-mechanics-(Pascal's-law,-Bernoulli's-principle,-viscosity)",
      "fluid-mechanics-(pascal's-law,-bernoulli's-principle,-viscosity)",
      "Fluid-mechanics-(Pascal's-law-Bernoulli's-principle-viscosity)",
      "fluid-mechanics-(pascal's-law-bernoulli's-principle-viscosity)",
      "Fluid-mechanics-(Pascals-law-Bernoullis-principle-viscosity)",
      "fluid-mechanics-(pascals-law-bernoullis-principle-viscosity)",
      "Fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity)",
      "fluid-mechanics-(pascal’s-law,-bernoulli’s-principle,-viscosity)",
      "Fluid-mechanics-(Pascal’s-law-Bernoulli’s-principle-viscosity)",
      "fluid-mechanics-(pascal’s-law-bernoulli’s-principle-viscosity)",
      "fluid-mechanics-Pascal’s-law-Bernoulli’s-principle-viscosity"
    ],
    "Surface tension, surface energy, and capillarity": [
      "Surface-tension,-surface-energy,-and-capillarity",
      "surface-tension,-surface-energy,-and-capillarity",
      "Surface-tension-surface-energy-and-capillarity",
      "surface-tension-surface-energy-and-capillarity",
      "Surface-Tension-Surface-Energy-and-Capillarity"
    ],
    "Thermal expansion and calorimetry": [
      "Thermal-expansion-and-calorimetry",
      "thermal-expansion-and-calorimetry",
      "Thermal-Expansion-and-Calorimetry"
    ],
    "Stefan's law of radiation": [
      "Stefan's-law-of-radiation",
      "stefan's-law-of-radiation",
      "Stefans-law-of-radiation",
      "stefans-law-of-radiation",
      "Stefan’s-law-of-radiation",
      "stefan’s-law-of-radiation",
      "Stefan's-Law-of-Radiation"
    ]
  };

  for (const st of PSL_SUBTOPICS) {
    const qIds = pslQuestionIds[st];
    const aliases = pslAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Properties of Solids and Liquids',
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
    console.log(`  ✅ Upserted test papers for "${st}" (55 questions)`);
  }

  // 6. Update Chapter Test Papers (25 balanced questions: 5 from each of the 5 subtopics)
  console.log('\n--- Updating Chapter Test Papers ---');

  const pslChapterQIds = [];
  PSL_SUBTOPICS.forEach(st => {
    pslChapterQIds.push(...pslQuestionIds[st].slice(0, 5));
  });

  const pslChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids-All-Test', exam: 'NEET' }
  ];

  for (const item of pslChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Properties of Solids and Liquids',
          subject: 'Physics',
          chapter: 'Properties of Solids and Liquids',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: pslChapterQIds.length,
          duration: 60,
          totalMarks: pslChapterQIds.length * 4,
          questionIds: pslChapterQIds,
          questions: pslChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Properties of Solids and Liquids Chapter Tests (${pslChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
