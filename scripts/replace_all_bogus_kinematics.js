const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env.local' });

const subTopics = [
  { name: "Graphical analysis of motion (x-t, v-t graphs)", part: "./data_jee_kinematics_part1.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Motion in a straight line/plane", part: "./data_jee_kinematics_part2.js", expectedReplacements: 196, expectedPreserved: 66 },
  { name: "Projectile motion", part: "./data_jee_kinematics_part3.js", expectedReplacements: 196, expectedPreserved: 12 },
  { name: "Relative velocity", part: "./data_jee_kinematics_part4.js", expectedReplacements: 53, expectedPreserved: 10 },
  { name: "Uniform circular motion", part: "./data_jee_kinematics_part5.js", expectedReplacements: 53, expectedPreserved: 11 },
  { name: "Uniformly accelerated motion and equations", part: "./data_jee_kinematics_part6.js", expectedReplacements: 53, expectedPreserved: 13 }
];

async function replaceAllKinematics() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found in environment!");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const col = db.collection("questionBank");

  let totalReplacedCount = 0;
  let totalPreservedStandardized = 0;

  for (const st of subTopics) {
    const data = require(path.join(__dirname, st.part));
    const docs = await col.find({ chapter: "Kinematics", subject: "Physics", subTopic: st.name }).sort({ type: 1, _id: 1 }).toArray();

    const arDocs = docs.filter(d => d.type === "ASSERTION_REASON");
    const mcqDocs = docs.filter(d => d.type === "MCQ");
    const numDocs = docs.filter(d => d.type === "NUMERICAL");

    const preservedMCQ = mcqDocs.filter(d => d.source === "Question Bank");
    const bogusMCQ = mcqDocs.filter(d => d.source !== "Question Bank");

    const toReplace = [...arDocs, ...bogusMCQ, ...numDocs];

    if (toReplace.length !== data.length) {
      throw new Error(`Length mismatch for ${st.name}: toReplace=${toReplace.length}, data=${data.length}`);
    }

    const bulkOps = [];

    // 1. In-place replacement of bogus questions
    for (let i = 0; i < toReplace.length; i++) {
      const oldDoc = toReplace[i];
      const newQ = data[i];

      const setFields = {
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
        source: "JEE Main Question Bank",
        difficulty: oldDoc.difficulty || "Medium",
        updatedAt: new Date()
      };

      const unsetFields = {};
      if (newQ.type === 'NUMERICAL') {
        setFields.numericalAnswer = newQ.numericalAnswer;
      } else {
        unsetFields.numericalAnswer = "";
      }

      const updateOp = { $set: setFields };
      if (Object.keys(unsetFields).length > 0) {
        updateOp.$unset = unsetFields;
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: oldDoc._id },
          update: updateOp
        }
      });
    }

    // 2. Standardize genuine QB MCQs
    for (const doc of preservedMCQ) {
      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
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

    console.log(`Executing bulkWrite for "${st.name}" (${bulkOps.length} ops: ${toReplace.length} replacements, ${preservedMCQ.length} standardizations)...`);
    const res = await col.bulkWrite(bulkOps);
    console.log(`  -> Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}`);

    totalReplacedCount += toReplace.length;
    totalPreservedStandardized += preservedMCQ.length;
  }

  console.log(`\n========================================`);
  console.log(`Replacement & Standardization Complete!`);
  console.log(`Total questions replaced in-place: ${totalReplacedCount}`);
  console.log(`Total genuine questions standardized: ${totalPreservedStandardized}`);
  console.log(`Total Kinematics questions in DB: ${totalReplacedCount + totalPreservedStandardized}`);
  console.log(`========================================\n`);

  await client.close();
}

replaceAllKinematics().catch(err => {
  console.error("Replacement failed:", err);
  process.exit(1);
});
