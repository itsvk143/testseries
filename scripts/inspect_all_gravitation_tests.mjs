import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let uri = env.split("\n").find(l => l.startsWith("MONGODB_URI=")).replace("MONGODB_URI=", "").trim().replace(/^["\x27]|["\x27]$/g, "");
const client = new MongoClient(uri);
await client.connect();
const db = client.db("testseries");

const targetTests = [
  "neet-SUBTOPIC-Physics-Kepler's-laws",
  "neet-SUBTOPIC-Physics-Newton's-law-of-gravitation",
  "neet-SUBTOPIC-Physics-Gravitational-potential-energy",
  "neet-SUBTOPIC-Physics-Escape-velocity",
  "neet-SUBTOPIC-Physics-Acceleration-due-to-gravity-(variation-with-height,-depth,-latitude)",
  "neet-SUBTOPIC-Physics-Orbital-velocity-and-satellite-motion"
];

console.log("=== INSPECTING ALL 6 GRAVITATION TESTS ===");

for (const testId of targetTests) {
  const tp = await db.collection("testPapers").findOne({ testId });
  console.log(`\n--------------------------------------------------`);
  console.log(`Test: ${testId}`);
  if (!tp) {
    console.log("NOT FOUND IN testPapers!");
    continue;
  }
  console.log(`Title: ${tp.title}`);
  console.log(`Questions count: ${tp.questions?.length}`);

  const qIds = tp.questions.map(q => new ObjectId(typeof q === "string" ? q : q._id || q));
  const docs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
  const docMap = new Map(docs.map(d => [d._id.toString(), d]));

  let diagramCount = 0;
  let arCount = 0;
  let missingCount = 0;

  for (let i = 0; i < tp.questions.length; i++) {
    const rawId = tp.questions[i];
    const idStr = (typeof rawId === "string" ? rawId : (rawId._id || rawId)).toString();
    const doc = docMap.get(idStr);
    if (!doc) {
      missingCount++;
      continue;
    }
    if (doc.image || doc.img) diagramCount++;
    const isAR = doc.type === "ASSERTION_REASON" || doc.questionType?.includes("Assertion") || /Assertion\s*\(A\)/i.test(doc.question);
    if (isAR) arCount++;
  }

  console.log(`Loaded from questionBank: ${docs.length}/${tp.questions.length}`);
  console.log(`Diagram questions: ${diagramCount}`);
  console.log(`Assertion-Reason questions: ${arCount}`);
  console.log(`Missing questions: ${missingCount}`);

  // Sample Q1 and Q40
  if (tp.questions.length >= 40) {
    const q1Doc = docMap.get((tp.questions[0]).toString());
    const q40Doc = docMap.get((tp.questions[39]).toString());
    console.log(`Q1: ${q1Doc?.question?.slice(0, 80)}...`);
    console.log(`Q40: ${q40Doc?.question?.slice(0, 80)}...`);
  }
}

await client.close();
