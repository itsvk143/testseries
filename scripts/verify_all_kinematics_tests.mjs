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
  "neet-SUBTOPIC-Physics-Graphical-analysis-of-motion-(x-t,-v-t-graphs)",
  "neet-SUBTOPIC-Physics-Motion-in-a-straight-line/plane",
  "neet-SUBTOPIC-Physics-Projectile-motion",
  "neet-SUBTOPIC-Physics-Relative-velocity",
  "neet-SUBTOPIC-Physics-Uniform-circular-motion",
  "neet-SUBTOPIC-Physics-Uniformly-accelerated-motion-and-equations"
];

console.log("================ KINEMATICS AUDIT VERIFICATION ================\n");

let allPassed = true;
const summary = [];

for (let i = 0; i < testIds.length; i++) {
  const testId = testIds[i];
  const paper = await db.collection("testPapers").findOne({ testId });
  if (!paper) {
    console.error(`ERROR: Test paper not found: ${testId}`);
    allPassed = false;
    continue;
  }

  const qIds = paper.questions.map(id => {
    try { return new ObjectId(id); } catch(e) { return id; }
  });
  const questions = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map();
  questions.forEach(q => qMap.set(String(q._id), q));

  let diagramCount = 0;
  const diagramFiles = [];
  let assertionCount = 0;
  const keyDist = {};

  paper.questions.forEach((id, idx) => {
    const q = qMap.get(String(id));
    if (!q) {
      console.error(`ERROR: Question ID ${id} not found in questionBank!`);
      allPassed = false;
      return;
    }

    const img = q.image || q.img || q.diagramAssetUrl;
    if (img) {
      diagramCount++;
      diagramFiles.push({ qNum: idx + 1, path: img });
      // Verify file exists on disk
      const fullPath = path.join(process.cwd(), "public", img.replace(/^\//, ""));
      if (!fs.existsSync(fullPath)) {
        console.error(`ERROR: Diagram asset missing on disk: ${fullPath}`);
        allPassed = false;
      }
    }

    const type = (q.type || q.questionType || "").toUpperCase();
    if (idx >= 39 && (type.includes("ASSERTION") || type.includes("AR") || (q.text || "").includes("Assertion (A)"))) {
      assertionCount++;
    }

    const key = (q.correctOption || q.correctAnswer || "").toLowerCase();
    keyDist[key] = (keyDist[key] || 0) + 1;
  });

  const testStatus = {
    testNum: i + 1,
    title: paper.title,
    chapter: paper.chapter,
    totalQ: paper.questions.length,
    diagramCount,
    diagrams: diagramFiles.map(d => `Q${d.qNum}: ${d.path.split('/').pop()}`),
    sectionB_AR_Count: assertionCount,
    passed: paper.questions.length === 45 && diagramCount >= 3 && assertionCount === 6
  };

  if (!testStatus.passed) allPassed = false;
  summary.push(testStatus);

  console.log(`Test ${i + 1}: ${paper.title}`);
  console.log(`- Chapter: ${paper.chapter}`);
  console.log(`- Total Questions: ${paper.questions.length} / 45`);
  console.log(`- Diagram Questions: ${diagramCount} (Req: >= 3) -> ${testStatus.diagrams.join(", ")}`);
  console.log(`- Section B (AR Questions Q40-Q45): ${assertionCount} / 6`);
  console.log(`- Status: ${testStatus.passed ? "✅ PASSED" : "❌ FAILED"}\n`);
}

console.log(`OVERALL AUDIT STATUS: ${allPassed ? "✅ ALL 6 TESTS VERIFIED & FULLY COMPLIANT" : "❌ AUDIT FAILED"}`);
await client.close();
