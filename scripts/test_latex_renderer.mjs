import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

// Read LatexRenderer.js and extract preProcess and parseContentBlocks cleanly
const src = fs.readFileSync("src/components/LatexRenderer.js", "utf8");
const start = src.indexOf("const katexOpts =");
const end = src.indexOf("const renderFragment =");
const extracted = src.slice(start, end) + "\nreturn { preProcess, parseContentBlocks, sanitizeMath };";

const { preProcess, parseContentBlocks, sanitizeMath } = new Function(extracted)();

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

const testIndices = [0, 1, 2, 3, 12, 13, 18, 23, 25, 28];

for (const idx of testIndices) {
  const qId = testPaper.questions[idx];
  const q = qMap.get(String(qId));
  const rawText = q?.question || q?.questionText || q?.text || "";

  console.log(`\n================ Q${idx + 1} (ID: ${qId}) ================`);
  console.log("--- RAW INPUT ---:\n" + rawText);
  
  const blocks = parseContentBlocks(rawText);
  console.log("--- BLOCKS ---:\n", blocks.map(b => b.type));
  if (blocks.some(b => b.type === "table")) {
    console.log("Found table block!", JSON.stringify(blocks.find(b => b.type === "table"), null, 2));
  }

  const processed = preProcess(rawText);
  console.log("--- PREPROCESSED OUTPUT ---:\n" + processed);
}

await client.close();
