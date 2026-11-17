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

for (const testId of targetTests) {
  const tp = await db.collection("testPapers").findOne({ testId });
  console.log(`\n================ ${testId} ================`);
  if (!tp) {
    console.log("NOT FOUND in testPapers!");
    // check case-insensitive
    const alt = await db.collection("testPapers").find({ testId: new RegExp(`^${testId}$`, 'i') }).toArray();
    console.log("Alt matches:", alt.map(a => `${a.testId} (qCount: ${a.questions?.length})`));
  } else {
    console.log(`Title: ${tp.title} | Chapter: ${tp.chapter} | Subject: ${tp.subject}`);
    console.log(`Questions count: ${tp.questions?.length}`);
    if (tp.questions?.length > 0) {
      const firstId = tp.questions[0];
      const q = await db.collection("questionBank").findOne({
        _id: ObjectId.isValid(firstId) && String(firstId).length === 24 ? new ObjectId(firstId) : firstId
      });
      console.log(`First Q: ${q?.question?.slice(0, 80)}...`);
    }
  }
}

await client.close();
