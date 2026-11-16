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

const testId = "neet-SUBTOPIC-Physics-Relative-velocity";
const testPaper = await db.collection("testPapers").findOne({ testId });
console.log("Found Test 4:", testPaper?.title, "Total Q:", testPaper?.questions?.length);
console.log("Current Chapter:", testPaper?.chapter);

const qIds = testPaper.questions.map(id => {
  try { return new ObjectId(id); } catch(e) { return id; }
});
const questions = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
const qMap = new Map();
questions.forEach(q => qMap.set(String(q._id), q));

console.log("\nListing sample questions of Test 4:");
testPaper.questions.forEach((id, idx) => {
  const q = qMap.get(String(id));
  const text = q?.question || q?.text || q?.questionText || "";
  const type = q?.type || q?.questionType || "MCQ";
  const hasImg = !!(q?.image || q?.img || q?.diagramAssetUrl);
  if (idx < 5 || idx >= 38 || hasImg) {
    console.log(`Q${idx + 1} [${type}] [img: ${hasImg}]: ${text.slice(0, 90)}...`);
  }
});

await client.close();
