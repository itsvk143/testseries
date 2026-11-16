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

const testPaper = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
const qIds = testPaper.questions.map(id => {
  try { return new ObjectId(id); } catch(e) { return id; }
});
const questions = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
const qMap = new Map();
questions.forEach(q => qMap.set(String(q._id), q));

[0, 1, 2, 3, 12, 13, 18, 23, 25, 28].forEach(idx => {
  const qId = testPaper.questions[idx];
  const q = qMap.get(String(qId));
  const raw = q?.question || q?.questionText || q?.text;
  console.log(`\n================ Q${idx+1} (ID: ${qId}) ================`);
  console.log("QUESTION:\n", raw);
  console.log("EXPLANATION:\n", q?.explanation);
});

await client.close();
