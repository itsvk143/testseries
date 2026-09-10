/**
 * scripts/populate_physics_top100.js
 * 
 * Synchronizes 5 difficult MCQs per subtopic for TOP 100 STUDENTS
 * based on analysis of the last 10 years of JEE Mains across all 20 chapters of Physics.
 * Total: 20 chapters x 122 subtopics = 610 MCQs.
 * 
 * Target collections:
 * - MongoDB Atlas questionBank
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

async function populatePhysicsTop100() {
  console.log('=== POPULATING TOP 100 PHYSICS QUESTIONS (610 MCQs) ===');

  const physicsDataPath = path.join(__dirname, '..', 'src', 'data', 'physics_top100_610.json');
  if (!fs.existsSync(physicsDataPath)) {
    throw new Error(`File not found: ${physicsDataPath}`);
  }

  const questions = JSON.parse(fs.readFileSync(physicsDataPath, 'utf8'));
  console.log(`Loaded ${questions.length} questions from ${physicsDataPath}`);

  if (questions.length !== 610) {
    throw new Error(`Expected 610 questions, found ${questions.length}`);
  }

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
  const chaptersSet = new Set();
  const subtopicsSet = new Set();

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    chaptersSet.add(q.chapter);
    subtopicsSet.add(`${q.chapter}::${q.subtopic}`);

    const filter = {
      subject: 'Physics',
      chapter: q.chapter,
      subTopic: q.subtopic,
      question: q.question
    };

    const updateDoc = {
      $set: {
        type: 'MCQ',
        questionType: 'MCQ (Multiple Choice Question)',
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        solution: q.solution,
        marks: 4,
        negativeMarks: 1,
        difficulty: 'Difficult',
        chapter: q.chapter,
        subtopic: q.subtopic,
        subTopic: q.subtopic,
        topic: q.chapter,
        subject: 'Physics',
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

    if (totalUpserted % 50 === 0 || totalUpserted === questions.length) {
      console.log(`Progress: ${totalUpserted} / ${questions.length} questions upserted...`);
    }
  }

  // Count in MongoDB
  const countInDb = await qbCol.countDocuments({
    subject: 'Physics',
    targetAudience: 'Top 100 Students',
    difficulty: 'Difficult'
  });

  console.log('\n======================================================');
  console.log(`✅ Successfully synced all questions to MongoDB Atlas!`);
  console.log(`   Chapters covered: ${chaptersSet.size}`);
  console.log(`   Subtopics covered: ${subtopicsSet.size}`);
  console.log(`   Total questions upserted: ${totalUpserted}`);
  console.log(`   Verified count in questionBank (Top 100 Difficult Physics): ${countInDb}`);
  console.log('======================================================');

  await client.close();
}

populatePhysicsTop100().catch(err => {
  console.error('❌ Error during population:', err);
  process.exit(1);
});
