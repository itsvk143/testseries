// scripts/replace_all_bogus_reproduction.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');

const subtopicFiles = [
  { subTopic: "Structure of flower and gametophyte development", file: './data_botany_repro_part1.js' },
  { subTopic: "Pollination mechanisms and outbreeding devices", file: './data_botany_repro_part2.js' },
  { subTopic: "Double fertilization and triple fusion", file: './data_botany_repro_part3.js' },
  { subTopic: "Development of endosperm, embryo, and seed", file: './data_botany_repro_part4.js' },
  { subTopic: "Apomixis and polyembryony", file: './data_botany_repro_part5.js' }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qCol = db.collection('questionBank');

    console.log("=== EXECUTING IN-PLACE REPLACEMENT FOR REPRODUCTION IN PLANTS (BOTANY) ===");

    let totalUpdated = 0;

    for (const item of subtopicFiles) {
      console.log(`\nProcessing subtopic: "${item.subTopic}"...`);
      const newData = require(item.file);
      if (newData.length !== 180) {
        throw new Error(`Invalid data length for ${item.subTopic}: ${newData.length}`);
      }

      // Fetch existing documents sorted by type: 1, _id: 1
      const existingDocs = await qCol.find({
        subject: "Botany",
        chapter: "Reproduction in Plants",
        subTopic: item.subTopic
      }).sort({ type: 1, _id: 1 }).toArray();

      console.log(`  Found ${existingDocs.length} existing documents in DB`);
      if (existingDocs.length !== 180) {
        throw new Error(`Unexpected DB doc count for ${item.subTopic}: ${existingDocs.length}`);
      }

      const bulkOps = [];

      for (let i = 0; i < 180; i++) {
        const oldDoc = existingDocs[i];
        const newQ = newData[i];

        // Sanity check types match
        if (oldDoc.type !== newQ.type) {
          throw new Error(`Type mismatch at index ${i} in ${item.subTopic}: old ${oldDoc.type} vs new ${newQ.type}`);
        }

        bulkOps.push({
          updateOne: {
            filter: { _id: oldDoc._id },
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
                class: "Class 12",
                exam: "NEET",
                targetExams: ["NEET"],
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                source: "NEET Botany Chapter Standard",
                commercialReady: true,
                status: "Active",
                updatedAt: new Date()
              }
            }
          }
        });
      }

      const res = await qCol.bulkWrite(bulkOps);
      console.log(`  Subtopic updated: matched=${res.matchedCount}, modified=${res.modifiedCount}`);
      totalUpdated += res.modifiedCount;
    }

    console.log(`\n================ REPLACEMENT COMPLETE ================`);
    console.log(`Total questions updated in-place: ${totalUpdated} / 900`);

  } catch (err) {
    console.error("Replacement failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

replaceAll();
