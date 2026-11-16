import fs from "fs";
import { MongoClient, ObjectId } from "mongodb";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

// Extract canonicalizeLatex from src/lib/questionFormatter.js
const qfSrc = fs.readFileSync("src/lib/questionFormatter.js", "utf8");
const cStart = qfSrc.indexOf("const cmdsWithBraces");
const cEnd = qfSrc.indexOf("export const formatQuestionToCentralized");
const cFn = qfSrc.slice(cStart, cEnd)
  .replace(/export const /g, "const ")
  .replace(/export function /g, "function ") + "\nreturn { canonicalizeLatex };";

const { canonicalizeLatex } = new Function(cFn)();

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const test = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

[0, 1, 2, 3, 12, 13, 18, 25, 27, 28].forEach(idx => {
  const id = test.questions[idx];
  const q = map.get(id.toString());
  const raw = q?.question || "";
  const canonical = canonicalizeLatex(raw);
  console.log(`\n================ Q${idx + 1} ================`);
  console.log("Raw from DB:     ", raw.slice(0, 80));
  console.log("After canonical: ", canonical.slice(0, 80));
  if (raw !== canonical) {
    console.log("DIFFERENCE DETECTED!");
    console.log("RAW FULL:      ", raw);
    console.log("CANONICAL FULL:", canonical);
  } else {
    console.log("MATCH! No corruption.");
  }
});

await client.close();
