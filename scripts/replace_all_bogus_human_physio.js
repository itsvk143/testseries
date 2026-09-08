// scripts/replace_all_bogus_human_physio.js
// In-place replacement of 1,980 bogus questions in Human Physiology (Zoology)
// Standardizes 61 genuine questions with marks: 4, negativeMarks: 1.

const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const PARTS = [
  { file: 'data_zoology_physio_part1.js', subTopic: "Body Fluids & Circulation" },
  { file: 'data_zoology_physio_part2.js', subTopic: "Breathing & Exchange of Gases" },
  { file: 'data_zoology_physio_part3.js', subTopic: "Cardiac cycle, ECG, and blood grouping (ABO and Rh)" },
  { file: 'data_zoology_physio_part4.js', subTopic: "Chemical Coordination & Integration" },
  { file: 'data_zoology_physio_part5.js', subTopic: "Conduction of nerve impulse and reflex action" },
  { file: 'data_zoology_physio_part6.js', subTopic: "Endocrine glands and hormones action" },
  { file: 'data_zoology_physio_part7.js', subTopic: "Excretory Products & Elimination" },
  { file: 'data_zoology_physio_part8.js', subTopic: "Locomotion & Movement" },
  { file: 'data_zoology_physio_part9.js', subTopic: "Mechanism of breathing and gas transport (O2-Hb dissociation curve)" },
  { file: 'data_zoology_physio_part10.js', subTopic: "Nephron structure and counter-current mechanism" },
  { file: 'data_zoology_physio_part11.js', subTopic: "Neural Control & Coordination" }
];

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI not found in .env.local");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    // 1. Standardize 61 Genuine Questions
    console.log("\n--- Step 1: Standardize Genuine Questions ---");
    const genuineFilter = {
      subject: "Zoology",
      chapter: "Human Physiology",
      source: "Question Bank"
    };
    const genuineCount = await qb.countDocuments(genuineFilter);
    console.log(`Found ${genuineCount} genuine questions in Human Physiology.`);

    const genuineResult = await qb.updateMany(genuineFilter, {
      $set: {
        marks: 4,
        negativeMarks: 1,
        updatedAt: new Date()
      }
    });
    console.log(`Standardized ${genuineResult.modifiedCount} genuine questions with marks: 4, negativeMarks: 1.`);

    // 2. In-Place Replacement for Bogus Questions Across All 11 Subtopics
    console.log("\n--- Step 2: In-Place Replacement of Bogus Questions ---");
    let grandTotalReplaced = 0;

    for (let i = 0; i < PARTS.length; i++) {
      const part = PARTS[i];
      const data = require(path.join(__dirname, part.file));
      console.log(`\nProcessing Part ${i + 1}/${PARTS.length}: "${part.subTopic}" (${data.length} replacement questions)...`);

      // Find existing bogus questions sorted by { type: 1, _id: 1 }
      // This strictly places ASSERTION_REASON (26) first, then MCQ (154).
      const filter = {
        subject: "Zoology",
        chapter: "Human Physiology",
        subTopic: part.subTopic,
        source: { $ne: "Question Bank" }
      };

      const existingDocs = await qb.find(filter)
        .sort({ type: 1, _id: 1 })
        .toArray();

      console.log(`Found ${existingDocs.length} existing bogus questions in DB.`);

      if (existingDocs.length !== data.length) {
        throw new Error(`Count mismatch in Part ${i + 1} (${part.subTopic})! DB has ${existingDocs.length}, replacement array has ${data.length}`);
      }

      // Check type alignment
      for (let j = 0; j < existingDocs.length; j++) {
        const doc = existingDocs[j];
        const rep = data[j];
        if (doc.type !== rep.type) {
          throw new Error(`Type mismatch at index ${j} in Part ${i + 1}: DB has ${doc.type}, replacement has ${rep.type}`);
        }
      }

      // Prepare bulkWrite operations
      const bulkOps = existingDocs.map((doc, idx) => {
        const rep = data[idx];
        return {
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
                updatedAt: new Date()
              }
            }
          }
        };
      });

      const bulkRes = await qb.bulkWrite(bulkOps);
      console.log(`Part ${i + 1} bulkWrite complete: matched ${bulkRes.matchedCount}, modified ${bulkRes.modifiedCount}`);
      grandTotalReplaced += bulkRes.modifiedCount;
    }

    console.log(`\n================================`);
    console.log(`In-Place Replacement Complete!`);
    console.log(`Total Genuine Standardized: ${genuineCount}`);
    console.log(`Total Bogus Questions Replaced: ${grandTotalReplaced}`);
    console.log(`Total Human Physiology Questions: ${genuineCount + grandTotalReplaced}`);
    console.log(`================================`);

  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

main().catch(err => {
  console.error("Error executing replacement:", err);
  process.exit(1);
});
