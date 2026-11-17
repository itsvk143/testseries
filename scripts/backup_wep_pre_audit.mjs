import fs from "fs";
import { MongoClient, ObjectId } from "mongodb";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const targetTests = [
  "neet-SUBTOPIC-Physics-Work-energy-theorem",
  "neet-SUBTOPIC-Physics-Kinetic/potential-energy",
  "neet-SUBTOPIC-Physics-Conservative-forces-and-potential-energy",
  "neet-SUBTOPIC-Physics-Conservation-of-mechanical-energy",
  "neet-SUBTOPIC-Physics-Vertical-circular-motion",
  "neet-SUBTOPIC-Physics-Power-and-variable-force",
  "neet-SUBTOPIC-Physics-Elastic-and-inelastic-collisions"
];

console.log("Backing up 7 Work, Energy & Power tests...");

const testPapers = await db.collection("testPapers").find({ testId: { $in: targetTests } }).toArray();

const allQuestionIds = [];
testPapers.forEach(tp => {
  if (Array.isArray(tp.questions)) {
    tp.questions.forEach(qId => {
      if (qId) allQuestionIds.push(ObjectId.isValid(qId) && String(qId).length === 24 ? new ObjectId(qId) : qId);
    });
  }
});

const questions = await db.collection("questionBank").find({ _id: { $in: allQuestionIds } }).toArray();

const backupData = {
  timestamp: new Date().toISOString(),
  testCount: testPapers.length,
  questionCount: questions.length,
  testPapers,
  questions
};

if (!fs.existsSync("backups")) {
  fs.mkdirSync("backups", { recursive: true });
}

fs.writeFileSync("backups/pre_audit_work_energy_power_20261116.json", JSON.stringify(backupData, null, 2));
console.log(`Saved backup JSON to backups/pre_audit_work_energy_power_20261116.json (${testPapers.length} tests, ${questions.length} questions).`);

// Also save to MongoDB backup collections
await db.collection("backup_pre_audit_wep_20261116_testPapers").deleteMany({});
await db.collection("backup_pre_audit_wep_20261116_testPapers").insertMany(testPapers);

await db.collection("backup_pre_audit_wep_20261116_questions").deleteMany({});
await db.collection("backup_pre_audit_wep_20261116_questions").insertMany(questions);

console.log("MongoDB backup collections created: backup_pre_audit_wep_20261116_testPapers, backup_pre_audit_wep_20261116_questions");

await client.close();
