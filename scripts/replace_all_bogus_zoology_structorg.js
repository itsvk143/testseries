// scripts/replace_all_bogus_zoology_structorg.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');

const SUBTOPICS = [
  { name: "Anatomy of flowering plants", part: 1 },
  { name: "Animal tissues", part: 2 },
  { name: "Cockroach anatomy and morphology", part: 3 },
  { name: "Epithelial, connective, muscular, and neural tissues in animals", part: 4 },
  { name: "Frog morphology and anatomy", part: 5 },
  { name: "Morphology of flowering plants", part: 6 }
];

async function main() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error("MONGODB_URI not found in .env.local");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  console.log("Connected successfully.");

  const db = client.db();
  const questionBank = db.collection('questionBank');

  const CHAPTER = "Structural Organisation in Animals and Plants";
  const SUBJECT = "Zoology";

  // Step 1: Standardize 50 genuine questions
  console.log("\n--- Step 1: Standardizing genuine questions ---");
  const genuineFilter = {
    subject: SUBJECT,
    chapter: CHAPTER,
    source: "Question Bank"
  };
  const genuineCount = await questionBank.countDocuments(genuineFilter);
  console.log(`Found ${genuineCount} genuine questions in ${SUBJECT} - ${CHAPTER}.`);
  if (genuineCount !== 50) {
    console.warn(`Expected 50 genuine questions, found ${genuineCount}`);
  }

  const genuineUpdateResult = await questionBank.updateMany(genuineFilter, {
    $set: {
      marks: 4,
      negativeMarks: 1
    }
  });
  console.log(`Updated ${genuineUpdateResult.modifiedCount} genuine questions to marks: 4, negativeMarks: 1.`);

  // Step 2: Replace bogus questions for all 6 subtopics
  console.log("\n--- Step 2: In-place replacement of 1,080 bogus questions ---");
  let totalReplaced = 0;

  for (const st of SUBTOPICS) {
    console.log(`\nProcessing Subtopic ${st.part}/6: "${st.name}"...`);

    // Fetch existing bogus questions sorted by type: 1 (ASSERTION_REASON first), _id: 1
    const filter = {
      subject: SUBJECT,
      chapter: CHAPTER,
      subTopic: st.name,
      source: { $ne: "Question Bank" }
    };

    const existingBogus = await questionBank.find(filter).sort({ type: 1, _id: 1 }).toArray();
    console.log(`Found ${existingBogus.length} existing bogus questions.`);

    if (existingBogus.length !== 180) {
      throw new Error(`Expected 180 bogus questions for "${st.name}", found ${existingBogus.length}! Aborting.`);
    }

    // Verify first 26 are ASSERTION_REASON and remaining 154 are MCQ
    const arExisting = existingBogus.filter(q => q.type === "ASSERTION_REASON");
    const mcqExisting = existingBogus.filter(q => q.type === "MCQ");
    console.log(`Existing breakdown: ${arExisting.length} AR, ${mcqExisting.length} MCQ.`);

    if (arExisting.length !== 26 || mcqExisting.length !== 154) {
      throw new Error(`Type breakdown mismatch in existing docs! AR: ${arExisting.length}, MCQ: ${mcqExisting.length}`);
    }

    // Load replacement data
    const dataPath = path.join(__dirname, `data_zoology_structorg_part${st.part}.js`);
    const replacementData = require(dataPath);
    if (!Array.isArray(replacementData) || replacementData.length !== 180) {
      throw new Error(`Replacement data for part ${st.part} is invalid or has length ${replacementData.length}`);
    }

    // Build bulkWrite operations
    const bulkOps = existingBogus.map((existingDoc, i) => {
      const rep = replacementData[i];
      return {
        updateOne: {
          filter: { _id: existingDoc._id },
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
              difficulty: "Medium",
              status: "Active"
            }
          }
        }
      };
    });

    console.log(`Executing bulkWrite for ${bulkOps.length} questions...`);
    const res = await questionBank.bulkWrite(bulkOps, { ordered: true });
    console.log(`bulkWrite completed: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
    totalReplaced += res.modifiedCount;
  }

  console.log(`\n=== IN-PLACE REPLACEMENT FINISHED ===`);
  console.log(`Total questions replaced: ${totalReplaced} / 1080`);

  await client.close();
  console.log("Disconnected from MongoDB.");
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
