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
  { id: "neet-SUBTOPIC-Physics-Work-energy-theorem", title: "Work-Energy Theorem" },
  { id: "neet-SUBTOPIC-Physics-Kinetic/potential-energy", title: "Kinetic/Potential Energy" },
  { id: "neet-SUBTOPIC-Physics-Conservative-forces-and-potential-energy", title: "Conservative Forces and Potential Energy" },
  { id: "neet-SUBTOPIC-Physics-Conservation-of-mechanical-energy", title: "Conservation of Mechanical Energy" },
  { id: "neet-SUBTOPIC-Physics-Vertical-circular-motion", title: "Vertical Circular Motion" },
  { id: "neet-SUBTOPIC-Physics-Power-and-variable-force", title: "Power and Variable Force" },
  { id: "neet-SUBTOPIC-Physics-Elastic-and-inelastic-collisions", title: "Elastic and Inelastic Collisions" }
];

console.log("=== CURRENT STATE AUDIT OF WORK, ENERGY & POWER TESTS ===\n");

for (const t of targetTests) {
  const tp = await db.collection("testPapers").findOne({ testId: t.id });
  if (!tp) continue;

  const qIds = tp.questions.map(id => ObjectId.isValid(id) && String(id).length === 24 ? new ObjectId(id) : id);
  const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

  let diagramCount = 0;
  let arCount = 0;
  let q40to45Types = [];

  tp.questions.forEach((qId, idx) => {
    const q = qMap.get(qId.toString());
    if (q) {
      if (q.image || q.img || q.diagramAssetUrl) diagramCount++;
      const isAR = (q.type === 'ASSERTION_REASON' || q.questionType?.includes('Assertion') || q.question?.includes('Assertion (A)'));
      if (isAR) arCount++;
      if (idx >= 39) {
        q40to45Types.push(`Q${idx+1}: ${q.type || q.questionType || 'MCQ'}${isAR ? ' (AR)' : ''}`);
      }
    }
  });

  console.log(`Test: ${t.title} (${t.id})`);
  console.log(`  Questions: ${tp.questions.length} | Diagrams: ${diagramCount} | Total AR: ${arCount}`);
  console.log(`  Q40-Q45 Breakdown: ${q40to45Types.join(', ')}`);
}

await client.close();
