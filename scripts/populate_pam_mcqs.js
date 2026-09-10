/**
 * scripts/populate_pam_mcqs.js
 * 
 * Synchronizes 55 MCQs per topic for "Physics and Measurement" (5 subtopics = 275 MCQs).
 * 
 * Updates:
 * - src/data/physics_and_measurement_275.json
 * - src/data/questionsjeem/chapter_physics.json
 * - src/data/questionsneet/chapter_physics.json
 * - MongoDB Atlas questionBank
 * - MongoDB Atlas testPapers
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const PAM_SUBTOPICS = [
  "Units and dimensions",
  "Error analysis",
  "Significant figures",
  "Dimensional analysis and applications",
  "Least count and precision"
];

function slugify(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/[^\w\-()']+/g, '');
}

async function main() {
  console.log('=== POPULATING PHYSICS AND MEASUREMENT 55 MCQS PER TOPIC ===');

  const jsonPath = path.join(__dirname, '..', 'src', 'data', 'physics_and_measurement_275.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Master dataset not found at ${jsonPath}`);
  }

  const rawQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Loaded ${rawQuestions.length} questions from ${jsonPath}`);

  if (rawQuestions.length !== 275) {
    throw new Error(`Expected exactly 275 questions, found ${rawQuestions.length}`);
  }

  // Group by subtopic and format for local question json stores
  const pamGrouped = {};
  for (const st of PAM_SUBTOPICS) {
    const list = rawQuestions.filter(q => q.subtopic === st || q.subTopic === st);
    if (list.length !== 55) {
      throw new Error(`Subtopic "${st}" has ${list.length} questions, expected 55`);
    }

    pamGrouped[st] = list.map(q => {
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
        chapter: "Physics and Measurement",
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
  jeemData["Physics and Measurement"] = pamGrouped;
  fs.writeFileSync(jeemPath, JSON.stringify(jeemData, null, 2), 'utf8');
  console.log(`✅ Updated JEE Mains chapter JSON: ${jeemPath}`);

  // 2. Update src/data/questionsneet/chapter_physics.json
  const neetPath = path.join(__dirname, '..', 'src', 'data', 'questionsneet', 'chapter_physics.json');
  let neetData = {};
  if (fs.existsSync(neetPath)) {
    neetData = JSON.parse(fs.readFileSync(neetPath, 'utf8'));
  }
  neetData["Physics and Measurement"] = pamGrouped;
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

  const pamQuestionIds = {};

  // 4. Sync questions to questionBank
  console.log('\n--- Syncing Physics and Measurement to questionBank ---');
  for (const st of PAM_SUBTOPICS) {
    pamQuestionIds[st] = [];
    const qList = pamGrouped[st];
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
        chapter: "Physics and Measurement",
        subtopic: st,
        subTopic: st,
        subject: "Physics",
        examType: "JEE Mains",
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const existing = await qbCol.findOne({
        chapter: "Physics and Measurement",
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
      pamQuestionIds[st].push(docId);
    }
    console.log(`  Synced 55 questions in questionBank for "${st}"`);
  }

  // 5. Update / Seed Subtopic Test Papers
  console.log('\n--- Seeding / Updating Subtopic Test Papers in testPapers ---');

  const pamAliases = {
    "Units and dimensions": [
      "Units-and-dimensions",
      "units-and-dimensions",
      "Units-And-Dimensions",
      "Units-and-Dimensions"
    ],
    "Error analysis": [
      "Error-analysis",
      "error-analysis",
      "Error-Analysis"
    ],
    "Significant figures": [
      "Significant-figures",
      "significant-figures",
      "Significant-Figures"
    ],
    "Dimensional analysis and applications": [
      "Dimensional-analysis-and-applications",
      "dimensional-analysis-and-applications",
      "Dimensional-Analysis-and-Applications",
      "Dimensional-Analysis-And-Applications"
    ],
    "Least count and precision": [
      "Least-count-and-precision",
      "least-count-and-precision",
      "Least-Count-and-Precision",
      "Least-Count-And-Precision"
    ]
  };

  for (const st of PAM_SUBTOPICS) {
    const qIds = pamQuestionIds[st];
    const aliases = pamAliases[st] || [slugify(st)];

    const testPaperBase = {
      title: st,
      subject: 'Physics',
      chapter: 'Physics and Measurement',
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

  const pamChapterQIds = [];
  PAM_SUBTOPICS.forEach(st => {
    pamChapterQIds.push(...pamQuestionIds[st].slice(0, 5));
  });

  const pamChapterTestIds = [
    { id: 'jee-mains-CHAPTER-Physics-Physics-and-Measurement-11', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Physics-and-Measurement', exam: 'JEE Main' },
    { id: 'jee-mains-CHAPTER-Physics-Physics-and-Measurement-All-Test', exam: 'JEE Main' },
    { id: 'neet-CHAPTER-Physics-Physics-and-Measurement-11', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Physics-and-Measurement', exam: 'NEET' },
    { id: 'neet-CHAPTER-Physics-Physics-and-Measurement-All-Test', exam: 'NEET' }
  ];

  for (const item of pamChapterTestIds) {
    await tpCol.updateOne(
      { testId: item.id },
      {
        $set: {
          testId: item.id,
          title: 'Physics and Measurement',
          subject: 'Physics',
          chapter: 'Physics and Measurement',
          type: 'CHAPTER',
          exam: item.exam,
          totalQuestions: pamChapterQIds.length,
          duration: 60,
          totalMarks: pamChapterQIds.length * 4,
          questionIds: pamChapterQIds,
          questions: pamChapterQIds,
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
  }
  console.log(`✅ Upserted Physics and Measurement Chapter Tests (${pamChapterQIds.length} balanced questions)`);

  await client.close();
  console.log('\n=== COMPLETED POPULATION & SYNC SUCCESSFULLY ===');
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
