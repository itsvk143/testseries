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
const db = client.db("testseries");

const test = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
const qDocs = await db.collection("questionBank").find({ _id: { $in: test.questions.map(id => new ObjectId(id)) } }).toArray();
const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

const results = await db.collection("testResults").find({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" }).toArray();

console.log(`Found ${results.length} testResults to update for Chemical Kinetics.`);

for (const r of results) {
  if (!Array.isArray(r.questions)) continue;

  const updatedQuestions = r.questions.map((snapQ, idx) => {
    const snapId = (snapQ._id || snapQ.id || "").toString();
    const liveQ = qMap.get(snapId) || qDocs[idx];
    if (!liveQ) return snapQ;

    return {
      ...snapQ,
      text: liveQ.question || liveQ.text,
      question: liveQ.question || liveQ.text,
      options: liveQ.options.map((opt, optIdx) => {
        const optText = typeof opt === 'string' ? opt : (opt.text || opt.value || '');
        const optId = String.fromCharCode(97 + optIdx);
        return {
          id: optId,
          text: optText,
          image: ''
        };
      }),
      explanation: liveQ.explanation || snapQ.explanation,
      correctOption: liveQ.correctOption || snapQ.correctOption,
      correctAnswer: liveQ.correctAnswer !== undefined ? liveQ.correctAnswer : snapQ.correctAnswer
    };
  });

  await db.collection("testResults").updateOne(
    { _id: r._id },
    { $set: { questions: updatedQuestions } }
  );
  console.log(`Updated testResult ${r._id} for user ${r.userEmail}`);
}

console.log("All testResults snapshots for Chemical Kinetics synchronized with live questionBank!");
await client.close();
