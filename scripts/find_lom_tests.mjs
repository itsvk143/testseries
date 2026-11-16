import { MongoClient } from "mongodb";
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

const subtopics = [
  "Newton's laws",
  "Impulse",
  "Conservation of momentum",
  "Friction",
  "Banking of roads",
  "Connected motion and pulley problems",
  "Equilibrium of concurrent forces"
];

for (const st of subtopics) {
  const clean = st.replace(/'/, ".*").replace(/\s+/g, ".*");
  const papers = await db.collection("testPapers").find({
    $or: [
      { title: { $regex: new RegExp(clean, "i") } },
      { subtopic: { $regex: new RegExp(clean, "i") } },
      { testId: { $regex: new RegExp(clean, "i") } }
    ],
    testId: { $regex: /^neet/i }
  }).toArray();
  console.log(`\nSubtopic: "${st}"`);
  papers.forEach(p => {
    console.log(`  -> ID: ${p.testId} | Title: "${p.title}" | Chapter: "${p.chapter}" | Qs: ${p.questions?.length}`);
  });
}

// Also check student attempts on any of these tests!
console.log("\n--- Checking student attempt history ---");
for (const st of subtopics) {
  const clean = st.replace(/'/, ".*").replace(/\s+/g, ".*");
  const papers = await db.collection("testPapers").find({
    $or: [
      { title: { $regex: new RegExp(clean, "i") } },
      { subtopic: { $regex: new RegExp(clean, "i") } },
      { testId: { $regex: new RegExp(clean, "i") } }
    ],
    testId: { $regex: /^neet/i }
  }).toArray();
  for (const p of papers) {
    const attempts = await db.collection("testResults").countDocuments({ testId: p.testId });
    const sessions = await db.collection("testSessions").countDocuments({ testId: p.testId });
    if (attempts > 0 || sessions > 0) {
      console.log(`⚠️ ATTEMPTS FOUND for ${p.testId}: results=${attempts}, sessions=${sessions}`);
    } else {
      console.log(`✅ 0 attempts for ${p.testId}`);
    }
  }
}

await client.close();
