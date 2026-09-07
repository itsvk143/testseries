// scripts/replace_all_bogus_plant_physio.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');

const subtopicFiles = [
  { subTopic: "Glycolysis, Krebs cycle, and oxidative phosphorylation", file: './data_botany_physio_part1.js' },
  { subTopic: "Growth & Development", file: './data_botany_physio_part2.js' },
  { subTopic: "Light reaction and Calvin cycle (C3 and C4 pathways)", file: './data_botany_physio_part3.js' },
  { subTopic: "Photoperiodism, vernalization, and seed dormancy", file: './data_botany_physio_part4.js' },
  { subTopic: "Photosynthesis", file: './data_botany_physio_part5.js' },
  { subTopic: "Plant hormones", file: './data_botany_physio_part6.js' },
  { subTopic: "Respiration", file: './data_botany_physio_part7.js' }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qCol = db.collection('questionBank');

    console.log("=== STEP 1: STANDARDIZING 41 GENUINE QUESTIONS ===");
    const genRes = await qCol.updateMany(
      {
        subject: "Botany",
        chapter: "Plant Physiology",
        source: "Question Bank"
      },
      {
        $set: {
          marks: 4,
          negativeMarks: 1,
          updatedAt: new Date()
        }
      }
    );
    console.log(`Standardized genuine questions: matched=${genRes.matchedCount}, modified=${genRes.modifiedCount}`);

    console.log("\n=== STEP 2: REPLACING 1,260 BOGUS QUESTIONS IN-PLACE ===");
    let totalReplaced = 0;

    for (const item of subtopicFiles) {
      console.log(`\nProcessing subtopic: "${item.subTopic}"...`);
      const newData = require(item.file);
      if (newData.length !== 180) {
        throw new Error(`Invalid data length for ${item.subTopic}: ${newData.length}`);
      }

      // Fetch existing bogus documents sorted by type: 1, _id: 1
      const existingDocs = await qCol.find({
        subject: "Botany",
        chapter: "Plant Physiology",
        subTopic: item.subTopic,
        source: { $ne: "Question Bank" }
      }).sort({ type: 1, _id: 1 }).toArray();

      console.log(`  Found ${existingDocs.length} existing bogus documents in DB`);
      if (existingDocs.length !== 180) {
        throw new Error(`Unexpected DB doc count for ${item.subTopic}: ${existingDocs.length}`);
      }

      const bulkOps = [];

      for (let i = 0; i < 180; i++) {
        const oldDoc = existingDocs[i];
        const newQ = newData[i];

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
                class: "Class 11",
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
      totalReplaced += res.modifiedCount;
    }

    console.log(`\n================ REPLACEMENT COMPLETE ================`);
    console.log(`Total bogus questions replaced in-place: ${totalReplaced} / 1260`);
    console.log(`Total genuine questions standardized: ${genRes.modifiedCount} / 41`);

  } catch (err) {
    console.error("Replacement failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

replaceAll();
