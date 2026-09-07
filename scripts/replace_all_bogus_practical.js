const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI not found in .env.local");
  process.exit(1);
}

const subtopicsConfig = [
  { file: "data_practical_part1.js", subtopic: "Detection of elements", count: 47 },
  { file: "data_practical_part2.js", subtopic: "Preparation of compounds", count: 47 },
  { file: "data_practical_part3.js", subtopic: "Purification methods", count: 47 },
  { file: "data_practical_part4.js", subtopic: "Qualitative analysis", count: 25 },
  { file: "data_practical_part5.js", subtopic: "Salt analysis (cation and anion systematic detection)", count: 47 },
  { file: "data_practical_part6.js", subtopic: "Volumetric titration (acid-base and redox titration)", count: 47 }
];

async function main() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const col = db.collection("questionBank");

  let totalReplaced = 0;
  const allOps = [];

  for (const cfg of subtopicsConfig) {
    const data = require(path.join(__dirname, cfg.file));
    if (data.length !== cfg.count) {
      throw new Error(`Data length mismatch for ${cfg.subtopic}: got ${data.length}, expected ${cfg.count}`);
    }

    const bogusDocs = await col.find({
      chapter: "Principles Related to Practical Chemistry",
      subTopic: cfg.subtopic,
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    console.log(`Subtopic "${cfg.subtopic}": found ${bogusDocs.length} bogus docs, data has ${data.length} Qs`);

    if (bogusDocs.length !== data.length) {
      throw new Error(`DB bogus count mismatch for ${cfg.subtopic}: DB has ${bogusDocs.length}, data has ${data.length}`);
    }

    for (let i = 0; i < bogusDocs.length; i++) {
      const bDoc = bogusDocs[i];
      const nDoc = data[i];

      if (bDoc.type !== nDoc.type) {
        throw new Error(`Type mismatch at index ${i} in ${cfg.subtopic}: DB is ${bDoc.type}, new is ${nDoc.type}`);
      }

      allOps.push({
        updateOne: {
          filter: { _id: bDoc._id },
          update: {
            $set: {
              question: nDoc.question,
              options: nDoc.options,
              correctAnswer: nDoc.correctAnswer,
              explanation: nDoc.explanation,
              type: nDoc.type,
              questionType: nDoc.questionType,
              marks: 4,
              negativeMarks: nDoc.negativeMarks,
              chapter: "Principles Related to Practical Chemistry",
              subTopic: cfg.subtopic,
              source: "Question Bank - Practical Chemistry Revision",
              updatedAt: new Date()
            }
          }
        }
      });
      totalReplaced++;
    }
  }

  console.log(`Prepared ${allOps.length} bulk update operations for bogus questions.`);

  if (allOps.length !== 260) {
    throw new Error(`Expected exactly 260 operations, got ${allOps.length}`);
  }

  const bulkResult = await col.bulkWrite(allOps);
  console.log(`Bulk write executed: matched ${bulkResult.matchedCount}, modified ${bulkResult.modifiedCount}`);

  // Standardize genuine questions (marks: 4, negativeMarks: 1 for MCQ/AR, 0 for Numerical)
  const genuineMCQResult = await col.updateMany(
    {
      chapter: "Principles Related to Practical Chemistry",
      source: "Question Bank",
      type: { $in: ["MCQ", "ASSERTION_REASON"] }
    },
    {
      $set: { marks: 4, negativeMarks: 1, updatedAt: new Date() }
    }
  );
  console.log(`Standardized genuine MCQ/AR: matched ${genuineMCQResult.matchedCount}, modified ${genuineMCQResult.modifiedCount}`);

  const genuineNumResult = await col.updateMany(
    {
      chapter: "Principles Related to Practical Chemistry",
      source: "Question Bank",
      type: "NUMERICAL"
    },
    {
      $set: { marks: 4, negativeMarks: 0, updatedAt: new Date() }
    }
  );
  console.log(`Standardized genuine Numerical: matched ${genuineNumResult.matchedCount}, modified ${genuineNumResult.modifiedCount}`);

  console.log("Replacement and standardization completed successfully!");
  await client.close();
}

main().catch(err => {
  console.error("Error executing replacement:", err);
  process.exit(1);
});
