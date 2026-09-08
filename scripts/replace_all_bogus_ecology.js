// scripts/replace_all_bogus_ecology.js
// In-place replacement of all 1,260 bogus questions in Botany -> Ecology and Environment
// Preserving exact MongoDB _ids so all 11 referencing test papers remain 100% intact.
// Also standardizes marks (4) and negativeMarks (1) for all 41 genuine questions.

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');

const EXPECTED_SUBTOPICS = [
  'Biodiversity & Conservation',
  'Ecological pyramids',
  'Ecological succession and nutrient cycling (carbon and phosphorus)',
  'Ecosystem Structure',
  'In-situ and ex-situ conservation methods',
  'Organisms and Populations',
  'Population interactions (mutualism, competition, predation, parasitism)'
];

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI not found in environment!");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const qb = db.collection("questionBank");

  // Step 1: Standardize genuine questions
  console.log("\n--- Step 1: Standardizing Genuine Questions ---");
  const genuineResult = await qb.updateMany(
    { subject: "Botany", chapter: "Ecology and Environment", source: "Question Bank" },
    { $set: { marks: 4, negativeMarks: 1, updatedAt: new Date() } }
  );
  console.log(`Genuine questions matched: ${genuineResult.matchedCount}, modified: ${genuineResult.modifiedCount}`);

  // Step 2: In-place replacement for all 7 subtopics
  console.log("\n--- Step 2: In-Place Replacement of 1,260 Bogus Questions ---");
  let totalReplaced = 0;

  for (let i = 1; i <= 7; i++) {
    const subtopic = EXPECTED_SUBTOPICS[i - 1];
    const data = require(`./data_botany_ecology_part${i}.js`);
    console.log(`\nProcessing Part ${i}: "${subtopic}" (New questions: ${data.length})`);

    // Fetch existing bogus questions sorted strictly by type (AR first, MCQ second) then _id
    const existingDocs = await qb.find({
      subject: "Botany",
      chapter: "Ecology and Environment",
      subTopic: subtopic,
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`Found ${existingDocs.length} existing bogus questions in DB for "${subtopic}".`);

    if (existingDocs.length !== 180 || data.length !== 180) {
      throw new Error(`Count mismatch for "${subtopic}": DB has ${existingDocs.length}, data has ${data.length}`);
    }

    const bulkOps = [];
    for (let idx = 0; idx < 180; idx++) {
      const doc = existingDocs[idx];
      const rep = data[idx];

      // Type consistency check
      if (doc.type !== rep.type) {
        throw new Error(`Type mismatch at index ${idx}: DB has ${doc.type}, replacement has ${rep.type}`);
      }

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
              marks: rep.marks,
              negativeMarks: rep.negativeMarks,
              updatedAt: new Date()
            }
          }
        }
      });
    }

    const bulkRes = await qb.bulkWrite(bulkOps);
    console.log(`Part ${i} bulkWrite: matched ${bulkRes.matchedCount}, modified ${bulkRes.modifiedCount}`);
    totalReplaced += bulkRes.modifiedCount;
  }

  console.log(`\n================================`);
  console.log(`Total bogus questions successfully updated in-place: ${totalReplaced} / 1260`);

  await client.close();
  console.log("MongoDB connection closed.");
}

run().catch(err => {
  console.error("Replacement script failed:", err);
  process.exit(1);
});
