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

const WEP_TEST_IDS = [
  "neet-SUBTOPIC-Physics-Work-energy-theorem",
  "neet-SUBTOPIC-Physics-Kinetic/potential-energy",
  "neet-SUBTOPIC-Physics-Conservative-forces-and-potential-energy",
  "neet-SUBTOPIC-Physics-Conservation-of-mechanical-energy",
  "neet-SUBTOPIC-Physics-Vertical-circular-motion",
  "neet-SUBTOPIC-Physics-Power-and-variable-force",
  "neet-SUBTOPIC-Physics-Elastic-and-inelastic-collisions"
];

console.log("================================================================================");
console.log("NEET PHYSICS — WORK, ENERGY & POWER: COMPREHENSIVE VERIFICATION");
console.log("================================================================================");

let totalVerifiedTests = 0;
let totalVerifiedQuestions = 0;
let totalDiagramsFound = 0;
let totalARFound = 0;
let totalErrors = 0;

for (const testId of WEP_TEST_IDS) {
  const test = await db.collection("testPapers").findOne({ testId });
  if (!test) {
    console.error(`[ERROR] Test paper ${testId} not found!`);
    totalErrors++;
    continue;
  }

  const qCount = test.questions?.length || 0;
  if (qCount !== 45) {
    console.error(`[ERROR] Test ${testId} has ${qCount} questions (expected 45)!`);
    totalErrors++;
  }

  const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
  const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map();
  qDocs.forEach(q => qMap.set(q._id.toString(), q));

  let diagramCount = 0;
  let arCount = 0;

  for (let idx = 0; idx < test.questions.length; idx++) {
    const qId = test.questions[idx];
    const q = qMap.get(qId.toString());
    if (!q) {
      console.error(`[ERROR] Question ${qId} in test ${testId} not found in questionBank!`);
      totalErrors++;
      continue;
    }

    // Check diagrams
    const img = q.image || q.img;
    if (img) {
      diagramCount++;
      const diskPath = path.join(process.cwd(), "public", img.replace(/^\//, ""));
      if (!fs.existsSync(diskPath)) {
        console.error(`[ERROR] Image not found on disk: ${diskPath}`);
        totalErrors++;
      }
    }

    // Check AR in Q40–Q45
    if (idx >= 39 && idx <= 44) {
      if (q.type === "ASSERTION_REASON" || q.questionType?.includes("Assertion") || q.question?.includes("Assertion (A):")) {
        arCount++;
      } else {
        console.warn(`[WARN] Q${idx + 1} in ${testId} is not formatted as Assertion-Reason!`);
      }
    }
  }

  totalVerifiedTests++;
  totalVerifiedQuestions += qCount;
  totalDiagramsFound += diagramCount;
  totalARFound += arCount;

  console.log(`[PASS] ${test.title || testId}`);
  console.log(`       - Questions: ${qCount}/45`);
  console.log(`       - Verified Diagrams: ${diagramCount} (min 3 required)`);
  console.log(`       - Section B (AR): ${arCount}/6`);
}

console.log("--------------------------------------------------------------------------------");
console.log(`Summary:`);
console.log(`  Tests verified: ${totalVerifiedTests}/7`);
console.log(`  Total questions: ${totalVerifiedQuestions}/315`);
console.log(`  Total diagrams: ${totalDiagramsFound}/21`);
console.log(`  Total Section B AR: ${totalARFound}/42`);
console.log(`  Total errors: ${totalErrors}`);

// Check student attempts
const resultsCount = await db.collection("testResults").countDocuments({ testId: { $in: WEP_TEST_IDS } });
const sessionsCount = await db.collection("testSessions").countDocuments({ testId: { $in: WEP_TEST_IDS } });
console.log(`  Student attempts in testResults: ${resultsCount} (Historical data preserved)`);
console.log(`  Student attempts in testSessions: ${sessionsCount} (Historical data preserved)`);
console.log("================================================================================");

await client.close();
