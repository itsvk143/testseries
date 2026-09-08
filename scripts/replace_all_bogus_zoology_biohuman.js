const { MongoClient } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI not found in .env.local");
  process.exit(1);
}

const SUBTOPICS = [
  "Bacterial, viral, protozoan, and fungal diseases in humans",
  "Cancer",
  "Common diseases",
  "Drug abuse",
  "Immunity",
  "Innate and acquired immunity, vaccination, and AIDS",
  "Microbes in human welfare",
  "Microbes in sewage treatment, biogas production, and biocontrol"
];

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    // 1. Standardize 50 Genuine Questions
    console.log("\n--- Standardizing Genuine Questions ---");
    const genuineFilter = {
      subject: "Zoology",
      chapter: "Biology and Human Welfare",
      source: "Question Bank"
    };
    const genuineCount = await qb.countDocuments(genuineFilter);
    console.log(`Found ${genuineCount} genuine questions in Zoology - Biology and Human Welfare.`);

    if (genuineCount !== 50) {
      console.warn(`WARNING: Expected 50 genuine questions, found ${genuineCount}!`);
    }

    const genuineUpdateResult = await qb.updateMany(genuineFilter, {
      $set: {
        marks: 4,
        negativeMarks: 1,
        updatedAt: new Date()
      }
    });
    console.log(`Updated ${genuineUpdateResult.modifiedCount} genuine questions with marks: 4, negativeMarks: 1.`);

    // 2. In-Place Replacement of 1,440 Bogus Questions across 8 Subtopics
    console.log("\n--- Replacing Bogus Questions in 8 Subtopics ---");
    let totalReplaced = 0;

    for (let part = 1; part <= 8; part++) {
      const subtopic = SUBTOPICS[part - 1];
      const dataFile = path.join(__dirname, `data_zoology_biohuman_part${part}.js`);
      const newQuestions = require(dataFile);

      console.log(`\nProcessing Part ${part}: "${subtopic}"...`);
      console.log(`  New questions dataset length: ${newQuestions.length}`);

      const bogusFilter = {
        subject: "Zoology",
        chapter: "Biology and Human Welfare",
        subTopic: subtopic,
        source: { $ne: "Question Bank" }
      };

      const existingBogusDocs = await qb.find(bogusFilter)
        .sort({ type: 1, _id: 1 })
        .toArray();

      console.log(`  Found ${existingBogusDocs.length} existing bogus questions in DB.`);

      if (existingBogusDocs.length !== 180) {
        console.error(`  ERROR: Expected exactly 180 bogus questions for "${subtopic}", found ${existingBogusDocs.length}! Aborting.`);
        process.exit(1);
      }

      if (newQuestions.length !== 180) {
        console.error(`  ERROR: Expected exactly 180 new questions for "${subtopic}", got ${newQuestions.length}! Aborting.`);
        process.exit(1);
      }

      // Verify types match 1-to-1
      const arBogusCount = existingBogusDocs.filter(d => d.type === 'ASSERTION_REASON').length;
      const mcqBogusCount = existingBogusDocs.filter(d => d.type === 'MCQ').length;
      const arNewCount = newQuestions.filter(d => d.type === 'ASSERTION_REASON').length;
      const mcqNewCount = newQuestions.filter(d => d.type === 'MCQ').length;

      console.log(`  DB types: ${arBogusCount} AR, ${mcqBogusCount} MCQ | New types: ${arNewCount} AR, ${mcqNewCount} MCQ`);

      if (arBogusCount !== 26 || mcqBogusCount !== 154 || arNewCount !== 26 || mcqNewCount !== 154) {
        console.error(`  ERROR: Type mismatch in "${subtopic}"! Aborting.`);
        process.exit(1);
      }

      const bulkOps = existingBogusDocs.map((doc, idx) => {
        const newQ = newQuestions[idx];
        return {
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                explanation: newQ.explanation,
                type: newQ.type,
                questionType: newQ.questionType,
                subTopic: newQ.subTopic,
                chapter: newQ.chapter,
                subject: newQ.subject,
                marks: 4,
                negativeMarks: 1,
                updatedAt: new Date()
              }
            }
          }
        };
      });

      const bulkResult = await qb.bulkWrite(bulkOps);
      console.log(`  Successfully replaced ${bulkResult.modifiedCount} questions for Part ${part}.`);
      totalReplaced += bulkResult.modifiedCount;
    }

    console.log("\n==========================================");
    console.log(`ALL REPLACEMENTS COMPLETED SUCCESSFULLY!`);
    console.log(`Total Genuine Standardized: ${genuineUpdateResult.matchedCount}`);
    console.log(`Total Bogus Questions Replaced In-Place: ${totalReplaced}`);
    console.log("==========================================");

  } catch (err) {
    console.error("Fatal error during replacement:", err);
    process.exit(1);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

main();
