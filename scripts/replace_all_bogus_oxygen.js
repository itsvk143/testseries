const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const subtopics = [
  { name: "Alcohols", data: require("./data_oxygen_part1.js") },
  { name: "Lucas test and oxidation of alcohols", data: require("./data_oxygen_part2.js") },
  { name: "Phenols", data: require("./data_oxygen_part3.js") },
  { name: "Reimer-Tiemann and Kolbe's reactions of phenols", data: require("./data_oxygen_part4.js") },
  { name: "Ethers", data: require("./data_oxygen_part5.js") },
  { name: "Aldehydes", data: require("./data_oxygen_part6.js") },
  { name: "Ketones", data: require("./data_oxygen_part7.js") },
  { name: "Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)", data: require("./data_oxygen_part8.js") },
  { name: "Carboxylic acids", data: require("./data_oxygen_part9.js") },
  { name: "Acidic nature and reactions of carboxylic acids", data: require("./data_oxygen_part10.js") }
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const col = db.collection("questionBank");

  const chapter = "Organic Compounds Containing Oxygen";
  console.log(`Starting replacement of bogus questions in '${chapter}'...`);

  let totalReplaced = 0;
  const bulkOps = [];

  for (let sIdx = 0; sIdx < subtopics.length; sIdx++) {
    const { name: stName, data: newQuestions } = subtopics[sIdx];
    console.log(`\nProcessing Subtopic ${sIdx + 1}: "${stName}" (${newQuestions.length} new Qs)...`);

    const bogusDocs = await col.find({
      chapter,
      subTopic: stName,
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
              chapter: "Organic Compounds Containing Oxygen",
              topic: "Organic Compounds Containing Oxygen",
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
