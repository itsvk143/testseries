/**
 * scripts/populate_math_top100.js
 * 
 * Synchronizes 5 difficult MCQs per subtopic for TOP 100 STUDENTS
 * based on analysis of the last 10 years of JEE Mains across all 21 chapters of Mathematics.
 * Total: 21 chapters x 119 subtopics = 595 MCQs.
 * 
 * Target collections:
 * - MongoDB Atlas questionBank
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

async function populateMathTop100() {
  console.log('=== POPULATING TOP 100 MATHEMATICS QUESTIONS (595 MCQs) ===');

  const mathDataPath = path.join(__dirname, '..', 'src', 'data', 'questionsjeem', 'chapter_mathematics.json');
  if (!fs.existsSync(mathDataPath)) {
    throw new Error(`File not found: ${mathDataPath}`);
  }

  const mathData = JSON.parse(fs.readFileSync(mathDataPath, 'utf8'));
  const chapters = Object.keys(mathData);
  console.log(`Found ${chapters.length} chapters in chapter_mathematics.json`);

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI not found in environment.');
    process.exit(1);
  }

  console.log('\nConnecting to MongoDB Atlas...');
  const client = new MongoClient(uri);
  await client.connect();
  console.log('✅ Connected to MongoDB Atlas.');

  const db = client.db();
  const qbCol = db.collection('questionBank');

  let totalUpserted = 0;
  let totalSubtopics = 0;

  for (const chapter of chapters) {
    const subtopics = Object.keys(mathData[chapter]);
    console.log(`\nProcessing Chapter: [${chapter}] (${subtopics.length} subtopics)...`);

    for (const subtopic of subtopics) {
      totalSubtopics++;
      const questions = mathData[chapter][subtopic];

      for (const q of questions) {
        const filter = {
          subject: 'Mathematics',
          chapter: chapter,
          subTopic: subtopic,
          question: q.question
        };

        const updateDoc = {
          $set: {
            type: 'MCQ',
            questionType: 'MCQ (Multiple Choice Question)',
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            correctOption: q.correctAnswer,
            explanation: q.explanation,
            solution: q.explanation,
            marks: 4,
            negativeMarks: 1,
            difficulty: 'Difficult',
            chapter: chapter,
            subtopic: subtopic,
            subTopic: subtopic,
            topic: chapter,
            subject: 'Mathematics',
            examType: 'JEE Mains',
            exam: 'JEE Main',
            targetAudience: 'Top 100 Students',
            source: 'JEE Mains Top 100 Analysis',
            updatedAt: new Date()
          },
          $setOnInsert: {
            createdAt: new Date()
          }
        };

        await qbCol.updateOne(filter, updateDoc, { upsert: true });
        totalUpserted++;
      }
    }
  }

  console.log('\n======================================================');
  console.log(`✅ Successfully synced all questions to MongoDB Atlas!`);
  console.log(`   Chapters processed: ${chapters.length}`);
  console.log(`   Subtopics processed: ${totalSubtopics}`);
  console.log(`   Total questions upserted: ${totalUpserted}`);
  console.log('======================================================');

  await client.close();
}

populateMathTop100().catch(err => {
  console.error('❌ Error during population:', err);
  process.exit(1);
});
