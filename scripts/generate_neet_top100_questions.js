/**
 * generate_neet_top100_questions.js
 * Generates and directly inserts 5 new, advanced NEET questions for all 372 topics
 * across Physics, Chemistry, Botany, and Zoology (1,860 total questions)
 * into MongoDB questionBank for Top 100 AIR NEET aspirants.
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = require('../all_subtopics_by_subject.json');
const { generateBotanyQuestionsForTopic } = require('./neet_generators/botany_generator.js');
const { generateZoologyQuestionsForTopic } = require('./neet_generators/zoology_generator.js');
const { generateChemistryQuestionsForTopic } = require('./neet_generators/chemistry_generator.js');
const { generatePhysicsQuestionsForTopic } = require('./neet_generators/physics_generator.js');

let chapClassMap = {};
try {
  chapClassMap = JSON.parse(fs.readFileSync(path.join(__dirname, '../chap_class_map.json'), 'utf8'));
} catch (e) {
  chapClassMap = {};
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ No MONGODB_URI found in .env.local");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBankCol = db.collection('questionBank');

  console.log(`🚀 Connected to database: ${db.databaseName}`);
  console.log("⚙️ Initializing Top 100 AIR NEET Question Generator Engine...");

  // 1. Build de-duplication lookup of existing questions
  console.log("🔍 Building duplicate detection index from existing questionBank...");
  const existingCursor = qBankCol.find({}, { projection: { subject: 1, question: 1 } });
  const existingSet = new Set();
  while (await existingCursor.hasNext()) {
    const d = await existingCursor.next();
    if (d.question && d.subject) {
      const key = `${d.subject.toLowerCase()}::${d.question.trim().toLowerCase().slice(0, 80)}`;
      existingSet.add(key);
    }
  }
  console.log(`✅ Loaded ${existingSet.size} signatures into duplicate prevention cache.`);

  // 2. Initialize serial commercialId counters
  const counters = {
    'COM-PHY': 8230,
    'COM-CHE': 9900,
    'NEET-BOT': 7955,
    'NEET-ZOO': 17133
  };

  // Check actual max counter in database
  for (const prefix of Object.keys(counters)) {
    const lastDoc = await qBankCol.find({ commercialId: { $regex: new RegExp('^' + prefix + '-') } })
      .sort({ commercialId: -1 })
      .limit(1)
      .toArray();
    if (lastDoc.length > 0 && lastDoc[0].commercialId) {
      const numStr = lastDoc[0].commercialId.split('-').pop();
      const num = parseInt(numStr, 10);
      if (!isNaN(num) && num >= counters[prefix]) {
        counters[prefix] = num + 1;
      }
    }
  }
  console.log("📊 Starting commercialId counters:", counters);

  // 3. Generate questions for all subjects
  const subjectConfigs = [
    {
      subject: 'Botany',
      chapters: STATIC_CHAPTER_MAP.Botany,
      generator: generateBotanyQuestionsForTopic,
      prefix: 'NEET-BOT',
      exam: 'NEET',
      targetExams: ['NEET'],
      idealTime: 60
    },
    {
      subject: 'Zoology',
      chapters: STATIC_CHAPTER_MAP.Zoology,
      generator: generateZoologyQuestionsForTopic,
      prefix: 'NEET-ZOO',
      exam: 'NEET',
      targetExams: ['NEET'],
      idealTime: 60
    },
    {
      subject: 'Chemistry',
      chapters: STATIC_CHAPTER_MAP.Chemistry,
      generator: generateChemistryQuestionsForTopic,
      prefix: 'COM-CHE',
      exam: 'JEE Main / NEET / BITSAT',
      targetExams: ['NEET', 'JEE Main', 'BITSAT'],
      idealTime: 90
    },
    {
      subject: 'Physics',
      chapters: STATIC_CHAPTER_MAP.Physics,
      generator: generatePhysicsQuestionsForTopic,
      prefix: 'COM-PHY',
      exam: 'JEE Main / NEET / BITSAT',
      targetExams: ['NEET', 'JEE Main', 'BITSAT'],
      idealTime: 90
    }
  ];

  let totalInserted = 0;
  let totalSkippedDup = 0;
  const bulkOps = [];
  const subjectStats = { Botany: 0, Zoology: 0, Chemistry: 0, Physics: 0 };

  for (const config of subjectConfigs) {
    const { subject, chapters, generator, prefix, exam, targetExams, idealTime } = config;
    console.log(`\n📚 Processing ${subject} (${chapters.length} chapters)...`);

    for (const chapter of chapters) {
      const subtopics = CHAPTER_SUBTOPICS[chapter] || [];
      const classGrade = chapClassMap[chapter] || 'Class 12';

      for (const subtopic of subtopics) {
        const questions = generator(chapter, subtopic);

        for (const rawQ of questions) {
          const qText = rawQ.q.trim();
          const dupKey = `${subject.toLowerCase()}::${qText.toLowerCase().slice(0, 80)}`;

          if (existingSet.has(dupKey)) {
            totalSkippedDup++;
            continue;
          }
          existingSet.add(dupKey);

          const qType = rawQ.type || 'MCQ (Multiple Choice Question)';
          let legType = 'MCQ';
          let cognitiveLevel = 'Synthesis & Evaluation';
          let qIdealTime = idealTime;

          if (qType === 'Numerical') {
            legType = 'NUMERICAL';
            cognitiveLevel = 'Problem Solving & Calculation';
            qIdealTime = 120;
          } else if (qType === 'Assertion–Reasoning') {
            legType = 'ASSERTION_REASON';
            cognitiveLevel = 'Analysis & Critical Thinking';
          }

          const qidCode = `${prefix}-${String(counters[prefix]++).padStart(5, '0')}`;

          const doc = {
            _id: new ObjectId(),
            subject,
            class: classGrade,
            chapter,
            topic: chapter,
            subTopic: subtopic,
            question: qText,
            options: rawQ.opts || rawQ.options || [],
            correctAnswer: rawQ.ans !== undefined ? rawQ.ans : (rawQ.correctAnswer !== undefined ? rawQ.correctAnswer : 0),
            explanation: rawQ.exp || rawQ.explanation || '',
            questionType: qType,
            type: legType,
            difficulty: 'Difficult',
            cognitiveLevel,
            exam,
            targetExams,
            commercialId: qidCode,
            commercialReady: true,
            idealTimeSeconds: qIdealTime,
            tags: [subject, chapter, subtopic, 'NEET', 'Top100AIR'],
            source: 'NEET 10-Year Advanced Pattern Generator',
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date()
          };

          bulkOps.push({ insertOne: { document: doc } });
          totalInserted++;
          subjectStats[subject]++;

          if (bulkOps.length >= 500) {
            await qBankCol.bulkWrite(bulkOps);
            bulkOps.length = 0;
            process.stdout.write(`  Inserted ${totalInserted} questions so far...\r`);
          }
        }
      }
    }
  }

  if (bulkOps.length > 0) {
    await qBankCol.bulkWrite(bulkOps);
  }

  console.log(`\n\n🎉 Insertion Complete!`);
  console.log(`   - Total newly added questions: ${totalInserted}`);
  console.log(`   - Duplicate collisions prevented: ${totalSkippedDup}`);
  console.log(`   - Breakdown by subject:`, subjectStats);

  // Verification queries
  const finalTotal = await qBankCol.countDocuments();
  console.log(`\n📊 Final total questions in questionBank: ${finalTotal}`);

  const top100Count = await qBankCol.countDocuments({ source: 'NEET 10-Year Advanced Pattern Generator' });
  console.log(`   - Top 100 AIR NEET questions in DB: ${top100Count}`);

  await client.close();
}

main().catch(err => {
  console.error("❌ Generation error:", err);
  process.exit(1);
});
