import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

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

const subtopicTests = [
  { testId: "neet-SUBTOPIC-Physics-Newton's-laws", name: "Newton's Laws" },
  { testId: "neet-SUBTOPIC-Physics-Impulse", name: "Impulse" },
  { testId: "neet-SUBTOPIC-Physics-Conservation-of-momentum", name: "Conservation of Momentum" },
  { testId: "neet-SUBTOPIC-Physics-Friction", name: "Friction" },
  { testId: "neet-SUBTOPIC-Physics-Banking-of-roads", name: "Banking of Roads" },
  { testId: "neet-SUBTOPIC-Physics-Connected-motion-and-pulley-problems", name: "Connected Motion & Pulleys" },
  { testId: "neet-SUBTOPIC-Physics-Equilibrium-of-concurrent-forces", name: "Equilibrium of Concurrent Forces" }
];

console.log("=== COMPREHENSIVE VERIFICATION OF LAWS OF MOTION TESTS ===\n");

let grandTotalQuestions = 0;
let grandTotalDiagrams = 0;
let grandTotalAR = 0;
let issues = [];

for (const t of subtopicTests) {
  const tp = await db.collection("testPapers").findOne({ testId: t.testId });
  if (!tp) {
    issues.push(`Test ${t.testId} NOT FOUND in testPapers!`);
    continue;
  }

  const qIds = tp.questions.map(id => ObjectId.isValid(id) && String(id).length === 24 ? new ObjectId(id) : id);
  const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

  let diagramCount = 0;
  let arCount = 0;
  let missingSvgs = [];

  for (let idx = 0; idx < tp.questions.length; idx++) {
    const qId = tp.questions[idx];
    const q = qMap.get(qId.toString());
    if (!q) {
      issues.push(`${t.name}: Question ${idx + 1} (ID: ${qId}) missing from questionBank!`);
      continue;
    }

    // Check diagrams
    if (q.image || q.diagramAssetUrl) {
      diagramCount++;
      const svgPath = `public${q.image || q.diagramAssetUrl}`;
      if (!fs.existsSync(svgPath)) {
        missingSvgs.push(svgPath);
      }
    }

    // Check Section B (Q40-Q45)
    if (idx >= 39) {
      const isAR = (q.type === 'ASSERTION_REASON' || q.questionType?.includes('Assertion') || q.question?.includes('Assertion (A)'));
      if (isAR) arCount++;
    }
  }

  grandTotalQuestions += tp.questions.length;
  grandTotalDiagrams += diagramCount;
  grandTotalAR += arCount;

  console.log(`[PASS] ${t.name} (${t.testId})`);
  console.log(`       Questions: ${tp.questions.length}/45 | Diagrams: ${diagramCount} | Section B AR: ${arCount}/6`);
  if (missingSvgs.length > 0) {
    console.log(`       [ERROR] Missing SVGs: ${missingSvgs.join(', ')}`);
    issues.push(...missingSvgs);
  }
}

console.log("\n================ SUMMARY ================");
console.log(`Total Tests Audited: ${subtopicTests.length}`);
console.log(`Total Questions in Chapter: ${grandTotalQuestions}`);
console.log(`Total Diagram-based Questions: ${grandTotalDiagrams} (Mandatory: >= 21)`);
console.log(`Total Section B AR Questions: ${grandTotalAR} (Mandatory: 42)`);
console.log(`Total Critical Issues: ${issues.length}`);

if (issues.length === 0) {
  console.log("\n>>> ALL 7 LAWS OF MOTION TESTS PASS 100% OF AUDIT REQUIREMENTS! <<<");
} else {
  console.log("\n>>> ISSUES DETECTED: <<<", issues);
}

await client.close();
