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

const testPaper = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
console.log("First 3 questions in testPapers:", testPaper.questions.slice(0, 3));
console.log("Type of first question:", typeof testPaper.questions[0], testPaper.questions[0]?.constructor?.name);

const qById = await db.collection("questionBank").findOne({ _id: testPaper.questions[0] });
console.log("Find with exact item:", !!qById);

try {
  const qByObjectId = await db.collection("questionBank").findOne({ _id: new ObjectId(testPaper.questions[0]) });
  console.log("Find with new ObjectId:", !!qByObjectId);
} catch (e) {
  console.log("Error creating new ObjectId:", e.message);
}

const qByStr = await db.collection("questionBank").findOne({ _id: String(testPaper.questions[0]) });
console.log("Find with String:", !!qByStr);

const anyQ = await db.collection("questionBank").findOne({ chapter: /Chemical Kinetics/i });
console.log("Any question in Chemical Kinetics:", anyQ?._id, typeof anyQ?._id, anyQ?._id?.constructor?.name);

await client.close();
