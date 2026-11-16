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

const test = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

for (let i = 39; i < 45; i++) {
  const q = map.get(test.questions[i].toString());
  console.log(`\n--- Q${i + 1} ---`);
  console.log("Question:\n" + q?.question);
}

await client.close();
