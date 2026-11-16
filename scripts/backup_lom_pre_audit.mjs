import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";
import path from "path";

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

const testIds = [
  "neet-SUBTOPIC-Physics-Newton's-laws",
  "neet-SUBTOPIC-Physics-Impulse",
  "neet-SUBTOPIC-Physics-Conservation-of-momentum",
  "neet-SUBTOPIC-Physics-Friction",
  "neet-SUBTOPIC-Physics-Banking-of-roads",
  "neet-SUBTOPIC-Physics-Connected-motion-and-pulley-problems",
  "neet-SUBTOPIC-Physics-Equilibrium-of-concurrent-forces"
];

console.log("Fetching test papers for backup...");
const papers = await db.collection("testPapers").find({ testId: { $in: testIds } }).toArray();
console.log(`Found ${papers.length} / 7 test papers.`);

const allQIds = [];
papers.forEach(p => {
  (p.questions || []).forEach(q => {
    const rawId = typeof q === 'string' ? q : (q._id || q.questionId || q.id);
    if (rawId) {
      try { allQIds.push(new ObjectId(rawId)); } catch(e) { allQIds.push(rawId); }
    }
  });
});

console.log(`Fetching ${allQIds.length} questions from questionBank...`);
const questions = await db.collection("questionBank").find({ _id: { $in: allQIds } }).toArray();
console.log(`Fetched ${questions.length} questions.`);

// File backup
const backupDir = path.join(process.cwd(), "backups");
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}
const backupPath = path.join(backupDir, "pre_audit_laws_of_motion_20261116.json");
fs.writeFileSync(backupPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  testPapers: papers,
  questions: questions
}, null, 2), "utf8");
console.log(`Saved file backup to: ${backupPath}`);

// MongoDB collections backup
const tpColl = "backup_pre_audit_lom_20261116_testPapers";
const qColl = "backup_pre_audit_lom_20261116_questions";

await db.collection(tpColl).deleteMany({});
if (papers.length > 0) {
  await db.collection(tpColl).insertMany(papers);
}
console.log(`Backed up ${papers.length} test papers to collection: ${tpColl}`);

await db.collection(qColl).deleteMany({});
if (questions.length > 0) {
  await db.collection(qColl).insertMany(questions);
}
console.log(`Backed up ${questions.length} questions to collection: ${qColl}`);

await client.close();
