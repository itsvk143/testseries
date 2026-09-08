const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const SUBTOPIC_CONFIG = [
  { part: 1, subTopic: "Prokaryotic and eukaryotic cell ultrastructure" },
  { part: 2, subTopic: "Cell membrane and fluid mosaic model" },
  { part: 3, subTopic: "Cell organelles" },
  { part: 4, subTopic: "Biomolecules" },
  { part: 5, subTopic: "Cell cycle regulation and checkpoints" },
  { part: 6, subTopic: "Cell life & division" },
  { part: 7, subTopic: "Mitosis" },
  { part: 8, subTopic: "Meiosis" }
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    const db = client.db("testseries");
    const qb = db.collection("questionBank");

    let totalUpdated = 0;
    let totalQBStandardized = 0;

    for (const cfg of SUBTOPIC_CONFIG) {
      const partNum = cfg.part;
      const subtopic = cfg.subTopic;
      const dataFile = path.join(__dirname, `data_botany_cell_part${partNum}.js`);
      const replacementList = require(dataFile);

      console.log(`\n=== Processing Part ${partNum}: "${subtopic}" ===`);
      console.log(`Replacement items: ${replacementList.length} (26 AR + 154 MCQ)`);

      // Fetch existing documents sorted by type: 1, _id: 1
      const existingDocs = await qb.find({
        subject: "Botany",
        chapter: "Cell Structure and Function",
        subTopic: subtopic
      }).sort({ type: 1, _id: 1 }).toArray();

      console.log(`Found ${existingDocs.length} existing documents in DB for subtopic.`);

      const existingAR = existingDocs.filter(d => d.type === 'ASSERTION_REASON');
      const existingGenMCQ = existingDocs.filter(d => d.type === 'MCQ' && d.source !== 'Question Bank');
      const existingQB = existingDocs.filter(d => d.source === 'Question Bank');

      console.log(`  Existing AR: ${existingAR.length}, Gen MCQ: ${existingGenMCQ.length}, QB MCQ: ${existingQB.length}`);

      if (existingAR.length !== 26) {
        throw new Error(`Expected 26 AR for "${subtopic}", found ${existingAR.length}`);
      }
      if (existingGenMCQ.length !== 154) {
        throw new Error(`Expected 154 Gen MCQ for "${subtopic}", found ${existingGenMCQ.length}`);
      }

      const repAR = replacementList.slice(0, 26);
      const repMCQ = replacementList.slice(26, 180);

      const bulkOps = [];

      // 1. Update ARs
      for (let j = 0; j < 26; j++) {
        const doc = existingAR[j];
        const rep = repAR[j];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                chapter: rep.chapter,
                subject: rep.subject,
                marks: 4,
                negativeMarks: 1,
                source: rep.source,
                updatedAt: new Date()
              }
            }
          }
        });
      }

      // 2. Update Generator MCQs
      for (let j = 0; j < 154; j++) {
        const doc = existingGenMCQ[j];
        const rep = repMCQ[j];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: rep.question,
                options: rep.options,
                correctAnswer: rep.correctAnswer,
                explanation: rep.explanation,
                type: rep.type,
                questionType: rep.questionType,
                subTopic: rep.subTopic,
                chapter: rep.chapter,
                subject: rep.subject,
                marks: 4,
                negativeMarks: 1,
                source: rep.source,
                updatedAt: new Date()
              }
            }
          }
        });
      }

      // 3. Standardize QB MCQs
      for (const qbDoc of existingQB) {
        bulkOps.push({
          updateOne: {
            filter: { _id: qbDoc._id },
            update: {
              $set: {
                marks: 4,
                negativeMarks: 1,
                updatedAt: new Date()
              }
            }
          }
        });
      }

      const res = await qb.bulkWrite(bulkOps);
      console.log(`Part ${partNum} bulkWrite complete: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
      totalUpdated += (26 + 154);
      totalQBStandardized += existingQB.length;
    }

    console.log("\n==============================================");
    console.log(`Total generator questions replaced in DB: ${totalUpdated}`);
    console.log(`Total genuine QB questions standardized: ${totalQBStandardized}`);
    console.log(`Total questions in chapter: ${totalUpdated + totalQBStandardized}`);
    console.log("==============================================");

    // Verify test paper references
    console.log("\nVerifying test paper references...");
    const testPapersCol = db.collection("testPapers");
    const testTitles = [
      "Cell Structure and Function",
      "Cell Life & Division",
      "Biomolecules"
    ];

    for (const title of testTitles) {
      const paper = await testPapersCol.findOne({ title: title, subject: "Botany" });
      if (paper) {
        const qCount = paper.questions.length;
        const resolved = await qb.find({ _id: { $in: paper.questions } }).toArray();
        console.log(`Test Paper "${paper.title}" (${paper._id}): ${resolved.length} / ${qCount} questions resolved.`);
        console.log(`  Sample Q1: ${resolved[0].question.slice(0, 70)}...`);
        console.log(`  Sample Ans: ${resolved[0].options[resolved[0].correctAnswer]}`);
      } else {
        console.log(`Test Paper "${title}" not found by title.`);
      }
    }

  } finally {
    await client.close();
    console.log("\nMongoDB connection closed.");
  }
}

replaceAll().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
