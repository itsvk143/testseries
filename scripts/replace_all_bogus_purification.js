const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const uri = process.env.MONGODB_URI;

const CHAPTER = "Purification and Characterisation of Organic Compounds";

const SUBTOPICS = [
  { name: "Purification techniques", file: './data_purif_part1.js' },
  { name: "Qualitative analysis", file: './data_purif_part2.js' },
  { name: "Quantitative analysis", file: './data_purif_part3.js' },
  { name: "Chromatography (TLC, column chromatography)", file: './data_purif_part4.js' },
  { name: "Calculations of empirical and molecular formulas", file: './data_purif_part5.js' }
];

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db('testseries');
    const col = db.collection('questionBank');

    // 1. Check current counts
    const totalDocs = await col.countDocuments({ chapter: CHAPTER });
    const genuineDocs = await col.countDocuments({ chapter: CHAPTER, source: 'Question Bank' });
    const bogusDocs = await col.countDocuments({ chapter: CHAPTER, source: { $ne: 'Question Bank' } });

    console.log(`Current chapter documents: Total=${totalDocs}, Genuine=${genuineDocs}, Bogus=${bogusDocs}`);
    if (totalDocs !== 285 || genuineDocs !== 50 || bogusDocs !== 235) {
      throw new Error(`Unexpected initial counts: Total=${totalDocs}, Genuine=${genuineDocs}, Bogus=${bogusDocs}`);
    }

    const bulkOps = [];

    for (let sIdx = 0; sIdx < SUBTOPICS.length; sIdx++) {
      const { name: subTopicName, file } = SUBTOPICS[sIdx];
      const newQuestions = require(file);

      if (newQuestions.length !== 47) {
        throw new Error(`Expected 47 questions for ${subTopicName}, got ${newQuestions.length}`);
      }

      // Fetch bogus docs sorted by { type: 1, _id: 1 }
      // This guarantees ASSERTION_REASON (26), then MCQ (8), then NUMERICAL (13)
      const docs = await col.find({
        chapter: CHAPTER,
        subTopic: subTopicName,
        source: { $ne: 'Question Bank' }
      }).sort({ type: 1, _id: 1 }).toArray();

      console.log(`Subtopic: "${subTopicName}" -> Found ${docs.length} bogus documents in DB.`);
      if (docs.length !== 47) {
        throw new Error(`Expected 47 bogus docs for ${subTopicName}, found ${docs.length}`);
      }

      for (let i = 0; i < 47; i++) {
        const dbDoc = docs[i];
        const newQ = newQuestions[i];

        if (dbDoc.type !== newQ.type) {
          throw new Error(`Type mismatch at index ${i} for ${subTopicName}: DB has ${dbDoc.type}, authored has ${newQ.type}`);
        }

        bulkOps.push({
          updateOne: {
            filter: { _id: dbDoc._id },
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
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                source: 'JEE Main Chapter Standard'
              }
            }
          }
        });
      }
    }

    console.log(`Prepared ${bulkOps.length} updates for bogus questions.`);

    // 2. Standardize 50 genuine questions
    const genuineList = await col.find({ chapter: CHAPTER, source: 'Question Bank' }).toArray();
    console.log(`Standardizing ${genuineList.length} genuine questions...`);
    for (const g of genuineList) {
      bulkOps.push({
        updateOne: {
          filter: { _id: g._id },
          update: {
            $set: {
              marks: 4,
              negativeMarks: 1
            }
          }
        }
      });
    }

    console.log(`Total bulk operations to execute: ${bulkOps.length}`);

    // Execute bulkWrite
    const result = await col.bulkWrite(bulkOps, { ordered: true });
    console.log("BulkWrite completed successfully!");
    console.log(`Matched count: ${result.matchedCount}`);
    console.log(`Modified count: ${result.modifiedCount}`);

  } catch (err) {
    console.error("Error during replacement:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main();
