const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const subtopics = [
  { name: "Amines", data: require("./data_nitrogen_part1.js") },
  { name: "Basicity of amines (gas phase vs aqueous phase)", data: require("./data_nitrogen_part2.js") },
  { name: "Coupling reactions and synthetic uses of diazonium salts", data: require("./data_nitrogen_part3.js") },
  { name: "Cyanides", data: require("./data_nitrogen_part4.js") },
  { name: "Diazonium salts", data: require("./data_nitrogen_part5.js") },
  { name: "Gabriel phthalimide synthesis and Hoffmann bromamide degradation", data: require("./data_nitrogen_part6.js") },
  { name: "Isocyanides", data: require("./data_nitrogen_part7.js") }
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");
  const col = db.collection("questionBank");

  const chapter = "Organic Compounds Containing Nitrogen";
  console.log(`Starting replacement of bogus questions in '${chapter}'...`);

  let totalReplaced = 0;
  const bulkOps = [];

  for (let sIdx = 0; sIdx < subtopics.length; sIdx++) {
    const { name: stName, data: newQuestions } = subtopics[sIdx];
    console.log(`\nProcessing Subtopic ${sIdx + 1}: "${stName}" (${newQuestions.length} new Qs)...`);

    const bogusDocs = await col.find({
      chapter,
      $or: [{ subTopic: stName }, { subtopic: stName }],
      source: { $ne: "Question Bank" }
    }).sort({ type: 1, _id: 1 }).toArray();

    if (bogusDocs.length !== newQuestions.length) {
      throw new Error(`Count mismatch for "${stName}": found ${bogusDocs.length} in DB, expected ${newQuestions.length}`);
    }

    for (let i = 0; i < bogusDocs.length; i++) {
      const doc = bogusDocs[i];
      const newQ = newQuestions[i];

      if (doc.type !== newQ.type) {
        throw new Error(`Type mismatch for "${stName}" at index ${i}: DB has ${doc.type}, new has ${newQ.type}`);
      }

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: newQ.question,
              options: newQ.options,
              correctAnswer: newQ.correctAnswer,
              explanation: newQ.explanation,
              type: newQ.type,
              chapter: "Organic Compounds Containing Nitrogen",
              topic: "Organic Compounds Containing Nitrogen",
              subTopic: stName,
              subtopic: stName,
              source: "NCERT & NEET/JEE Authenticated Question Bank",
              status: "Active",
              marks: 4,
              negativeMarks: newQ.type === "NUMERICAL" ? 0 : 1,
              exam: "JEE Main / NEET / BITSAT",
              targetExams: ["JEE Main", "NEET", "BITSAT"],
              cognitiveLevel: newQ.type === "ASSERTION_REASON" ? "Analysis & Critical Thinking" : "Application",
              updatedAt: new Date()
            }
          }
        }
      });
      totalReplaced++;
    }
  }

  console.log(`\nExecuting bulkWrite for ${bulkOps.length} questions...`);
  const result = await col.bulkWrite(bulkOps);
  console.log(`BulkWrite complete! Modified count: ${result.modifiedCount}, Matched count: ${result.matchedCount}`);
  console.log(`Total questions replaced in DB: ${totalReplaced}`);

  await client.close();
  console.log("Database connection closed.");
}

main().catch(console.error);
