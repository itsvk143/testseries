/**
 * generate_jee_mains_top100_questions.js
 * Generates and directly inserts 5 advanced, original JEE Main questions
 * for every topic of every chapter across Physics, Chemistry, and Mathematics
 * into MongoDB `questionBank` for Top 100 AIR rankers (300-360 marks band).
 * 
 * Allowed Question Types: MCQ (Multiple Choice Question) and Numerical.
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const { generateMathsQuestionsForTopic } = require('./jee_generators/maths_generator.js');
const { generateJeePhysicsQuestionsForTopic } = require('./jee_generators/jee_physics_generator.js');
const { generateJeeChemistryQuestionsForTopic } = require('./jee_generators/jee_chemistry_generator.js');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ No MONGODB_URI found in .env.local");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const qBankCol = db.collection('questionBank');

  console.log(`🚀 Connected to database: ${db.databaseName}`);
  console.log("⚙️ Initializing Top 100 AIR JEE Main Question Generator Engine...");

  // 1. Build duplicate prevention index
  console.log("🔍 Building duplicate detection index from existing questionBank...");
  const existingCursor = qBankCol.find({}, { projection: { subject: 1, subTopic: 1, question: 1 } });
  const existingSet = new Set();
  while (await existingCursor.hasNext()) {
    const d = await existingCursor.next();
    if (d.question && d.subject) {
      const sub = (d.subTopic || '').toLowerCase().trim();
      const qSnippet = d.question.trim().toLowerCase().slice(0, 80);
      existingSet.add(`${d.subject.toLowerCase()}::${sub}::${qSnippet}`);
    }
  }
  console.log(`✅ Loaded ${existingSet.size} signatures into duplicate prevention cache.`);

  // 2. Initialize serial commercialId counters
  const counters = {
    'Mathematics': 3800,
    'Physics': 8850,
    'Chemistry': 10700
  };

  const idPrefix = {
    'Mathematics': 'JEE-MAT',
    'Physics': 'COM-PHY',
    'Chemistry': 'COM-CHE'
  };

  // 3. Load syllabus topics
  const topicsPath = path.join(__dirname, '../jee_topics_by_subject.json');
  const syllabus = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

  const subjects = ['Mathematics', 'Physics', 'Chemistry'];
  let totalInserted = 0;
  let totalGenerated = 0;
  let skippedDuplicates = 0;

  for (const subject of subjects) {
    const subjectChapters = syllabus[subject] || {};
    const chaptersList = Object.keys(subjectChapters);

    console.log(`\n📘 Processing Subject: ${subject} (${chaptersList.length} chapters)...`);
    let subjectInserted = 0;

    for (let cIdx = 0; cIdx < chaptersList.length; cIdx++) {
      const chapter = chaptersList[cIdx];
      const subTopics = subjectChapters[chapter] || [];
      const batchDocs = [];

      for (let sIdx = 0; sIdx < subTopics.length; sIdx++) {
        const subTopic = subTopics[sIdx];
        let rawQuestions = [];

        if (subject === 'Mathematics') {
          rawQuestions = generateMathsQuestionsForTopic(chapter, subTopic, sIdx);
        } else if (subject === 'Physics') {
          rawQuestions = generateJeePhysicsQuestionsForTopic(chapter, subTopic, sIdx);
        } else if (subject === 'Chemistry') {
          rawQuestions = generateJeeChemistryQuestionsForTopic(chapter, subTopic, sIdx);
        }

        for (let qIdx = 0; qIdx < rawQuestions.length; qIdx++) {
          totalGenerated++;
          const q = rawQuestions[qIdx];
          
          // Deduplication check
          const subLower = (subTopic || '').toLowerCase().trim();
          const qSnippet = q.question.trim().toLowerCase().slice(0, 80);
          const sig = `${subject.toLowerCase()}::${subLower}::${qSnippet}`;

          if (existingSet.has(sig)) {
            skippedDuplicates++;
            continue;
          }
          existingSet.add(sig);

          // Assign sequential commercial ID
          const currentCount = counters[subject]++;
          const commercialId = `${idPrefix[subject]}-${String(currentCount).padStart(5, '0')}`;

          const doc = {
            question: q.question,
            options: q.options || [],
            correctAnswer: q.correctAnswer,
            correctOption: q.correctOption !== undefined ? q.correctOption : q.correctAnswer,
            explanation: q.explanation,
            subject: subject,
            chapter: chapter,
            topic: chapter,
            subTopic: subTopic,
            difficulty: "Difficult",
            questionType: q.questionType,
            type: q.type,
            cognitiveLevel: q.cognitiveLevel || "Analysis & Critical Thinking",
            targetExams: ["JEE Main", "JEE Advanced", "BITSAT"],
            source: "JEE Main 10-Year Advanced Pattern Generator",
            commercialId: commercialId,
            marks: 4,
            negativeMarks: q.type === "NUMERICAL" ? 1 : 1, // Standard JEE Main
            createdAt: new Date(),
            updatedAt: new Date()
          };

          batchDocs.push(doc);
        }
      }

      if (batchDocs.length > 0) {
        await qBankCol.insertMany(batchDocs);
        subjectInserted += batchDocs.length;
        totalInserted += batchDocs.length;
      }
      process.stdout.write(`  [${subject}] Chapter ${cIdx + 1}/${chaptersList.length}: ${chapter} (+${batchDocs.length} questions)\r`);
    }
    console.log(`\n✅ Finished ${subject}: Inserted ${subjectInserted} advanced questions.`);
  }

  console.log(`\n======================================================`);
  console.log(`🎉 GENERATION & INGESTION COMPLETE!`);
  console.log(`- Total Questions Generated: ${totalGenerated}`);
  console.log(`- Total Questions Inserted:  ${totalInserted}`);
  console.log(`- Skipped Duplicates:        ${skippedDuplicates}`);
  console.log(`- Total in questionBank:     ${await qBankCol.countDocuments()}`);
  console.log(`======================================================`);

  await client.close();
}

main().catch(err => {
  console.error("FATAL Error in generation:", err);
  process.exit(1);
});
