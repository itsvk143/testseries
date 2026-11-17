import fs from "fs";
import { MongoClient } from "mongodb";

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

const tests = await db.collection("testPapers").find({
  $or: [
    { chapter: { $regex: /work|energy|power/i } },
    { title: { $regex: /work|energy|power|collision/i } },
    { testId: { $regex: /work|energy|power|collision/i } }
  ]
}).toArray();

console.log("Matching tests count:", tests.length);
tests.forEach(t => {
  console.log(`- testId: ${t.testId} | title: ${t.title} | chapter: ${t.chapter} | questions: ${t.questions?.length}`);
});

await client.close();
