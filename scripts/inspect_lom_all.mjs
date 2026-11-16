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

const testIds = [
  { num: 1, id: "neet-SUBTOPIC-Physics-Newton's-laws", title: "Newton's Laws" },
  { num: 2, id: "neet-SUBTOPIC-Physics-Impulse", title: "Impulse" },
  { num: 3, id: "neet-SUBTOPIC-Physics-Conservation-of-momentum", title: "Conservation of Momentum" },
  { num: 4, id: "neet-SUBTOPIC-Physics-Friction", title: "Friction" },
  { num: 5, id: "neet-SUBTOPIC-Physics-Banking-of-roads", title: "Banking of Roads" },
  { num: 6, id: "neet-SUBTOPIC-Physics-Connected-motion-and-pulley-problems", title: "Connected Motion and Pulley Problems" },
  { num: 7, id: "neet-SUBTOPIC-Physics-Equilibrium-of-concurrent-forces", title: "Equilibrium of Concurrent Forces" }
];

for (const t of testIds) {
  const paper = await db.collection("testPapers").findOne({ testId: t.id });
  const qIds = (paper?.questions || []).map(id => {
    try { return new ObjectId(id); } catch(e) { return id; }
  });
  const questions = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map();
  questions.forEach(q => qMap.set(String(q._id), q));

  let diagramCount = 0;
  let arCount = 0;
  const types = {};

  (paper?.questions || []).forEach((id, idx) => {
    const q = qMap.get(String(id));
    if (!q) return;
    const hasImg = !!(q.image || q.img || q.diagramAssetUrl);
    if (hasImg) diagramCount++;
    const type = (q.type || q.questionType || "MCQ").toUpperCase();
    types[type] = (types[type] || 0) + 1;
    if (idx >= 39 && (type.includes("ASSERTION") || type.includes("AR") || (q.text || "").includes("Assertion (A)"))) {
      arCount++;
    }
  });

  console.log(`\nTest ${t.num}: ${t.title} (${t.id})`);
  console.log(`- Questions: ${paper?.questions?.length || 0}`);
  console.log(`- Types:`, types);
  console.log(`- Existing Diagrams: ${diagramCount}`);
  console.log(`- Section B AR Questions (Q40-Q45): ${arCount} / 6`);
}

await client.close();
