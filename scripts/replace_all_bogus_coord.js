require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

const part1 = require("./data_coord_part1.js");
const part2 = require("./data_coord_part2.js");
const part3 = require("./data_coord_part3.js");
const part4 = require("./data_coord_part4.js");
const part5 = require("./data_coord_part5.js");
const part6 = require("./data_coord_part6.js");
const part7 = require("./data_coord_part7.js");

const allNewQuestions = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7
];

const subtopics = [
  "Werner's theory",
  "IUPAC nomenclature",
  "Isomerism",
  "Valence bond theory (VBT)",
  "Crystal field theory (CFT) and orbital splitting",
  "Bonding in coordination compounds",
  "Stability and biological importance of coordination compounds"
];

async function replaceAll() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas.");

    let totalUpdated = 0;

    for (const stName of subtopics) {
      console.log(`\nProcessing subtopic: "${stName}"`);

      const bogusARs = await col
        .find({
          chapter: "Co-ordination Compounds",
          subTopic: stName,
          source: { $ne: "Question Bank" },
          $or: [
            { type: "ASSERTION_REASON" },
            { questionType: { $regex: /assertion/i } }
          ]
        })
        .sort({ _id: 1 })
        .toArray();

      const bogusMCQs = await col
        .find({
          chapter: "Co-ordination Compounds",
          subTopic: stName,
          source: { $ne: "Question Bank" },
          type: "MCQ",
          questionType: { $not: { $regex: /assertion/i } }
        })
        .sort({ _id: 1 })
        .toArray();

      const bogusNUMs = await col
        .find({
          chapter: "Co-ordination Compounds",
          subTopic: stName,
          source: { $ne: "Question Bank" },
          $or: [
            { type: "NUMERICAL" },
            { questionType: { $regex: /numerical/i } }
          ]
        })
        .sort({ _id: 1 })
        .toArray();

      const subtopicNewQs = allNewQuestions.filter(q => q.subTopic === stName);
      const isARType = q => (q.questionType || q.type || "").toUpperCase().includes("ASSERTION");
      const isNUMType = q => (q.questionType || q.type || "").toUpperCase().includes("NUMERICAL");
      const isMCQType = q => !isARType(q) && !isNUMType(q);

      const newARs = subtopicNewQs.filter(isARType);
      const newMCQs = subtopicNewQs.filter(isMCQType);
      const newNUMs = subtopicNewQs.filter(isNUMType);

      console.log(`  Bogus in DB: AR=${bogusARs.length}, MCQ=${bogusMCQs.length}, NUM=${bogusNUMs.length}`);
      console.log(`  New prepared: AR=${newARs.length}, MCQ=${newMCQs.length}, NUM=${newNUMs.length}`);

      if (
        bogusARs.length !== newARs.length ||
        bogusMCQs.length !== newMCQs.length ||
        bogusNUMs.length !== newNUMs.length
      ) {
        throw new Error(`Count mismatch in subtopic "${stName}"!`);
      }

      const bulkOps = [];

      // Map ARs
      bogusARs.forEach((doc, idx) => {
        const newQ = newARs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: "Assertion-Reason",
                type: "ASSERTION_REASON",
                subject: "Chemistry",
                chapter: "Co-ordination Compounds",
                topic: "Co-ordination Compounds",
                subTopic: stName,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      // Map MCQs
      bogusMCQs.forEach((doc, idx) => {
        const newQ = newMCQs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: "MCQ (Multiple Choice Question)",
                type: "MCQ",
                subject: "Chemistry",
                chapter: "Co-ordination Compounds",
                topic: "Co-ordination Compounds",
                subTopic: stName,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      // Map NUMs
      bogusNUMs.forEach((doc, idx) => {
        const newQ = newNUMs[idx];
        bulkOps.push({
          updateOne: {
            filter: { _id: doc._id },
            update: {
              $set: {
                question: newQ.question,
                options: newQ.options,
                correctAnswer: newQ.correctAnswer,
                correctOption: newQ.correctOption,
                explanation: newQ.explanation,
                difficulty: newQ.difficulty,
                questionType: "Numerical Value Question",
                type: "NUMERICAL",
                subject: "Chemistry",
                chapter: "Co-ordination Compounds",
                topic: "Co-ordination Compounds",
                subTopic: stName,
                targetExams: newQ.targetExams,
                source: "NCERT & NEET/JEE Authenticated Question Bank",
                marks: newQ.marks,
                negativeMarks: newQ.negativeMarks,
                cognitiveLevel: newQ.cognitiveLevel,
                updatedAt: new Date()
              }
            }
          }
        });
      });

      if (bulkOps.length > 0) {
        const result = await col.bulkWrite(bulkOps);
        console.log(`  Successfully updated ${result.modifiedCount} questions for "${stName}".`);
        totalUpdated += result.modifiedCount;
      }
    }

    console.log(`\n========================================`);
    console.log(`Total questions successfully updated: ${totalUpdated} (Expected: 579)`);
    console.log(`========================================\n`);

  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

replaceAll().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
