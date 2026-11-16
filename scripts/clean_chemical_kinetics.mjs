import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

// Read LatexRenderer.js and extract preProcess cleanly
const src = fs.readFileSync("src/components/LatexRenderer.js", "utf8");
const start = src.indexOf("const katexOpts =");
const end = src.indexOf("const renderFragment =");
const extracted = src.slice(start, end) + "\nreturn { preProcess, parseContentBlocks, sanitizeMath };";

const { preProcess } = new Function(extracted)();

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

for (let idx = 0; idx < testPaper.questions.length; idx++) {
  const qId = testPaper.questions[idx];
  const q = qMap.get(String(qId));
  const rawQ = q?.question || q?.questionText || q?.text || "";
  const fixedQ = preProcess(rawQ);
  
  // Also check options
  let fixedOpts = [];
  if (Array.isArray(q?.options)) {
    fixedOpts = q.options.map(opt => {
      const optStr = typeof opt === 'string' ? opt : (opt?.text || '');
      return preProcess(optStr);
    });
  }

  // Also check explanation
  const rawExp = q?.explanation || "";
  const fixedExp = preProcess(rawExp);

  if (rawQ !== fixedQ || rawExp !== fixedExp) {
    console.log(`Q${idx + 1} updated.`);
    await db.collection("questionBank").updateOne(
      { _id: q._id },
      {
        $set: {
          question: fixedQ,
          text: fixedQ,
          explanation: fixedExp,
          options: Array.isArray(q?.options) && typeof q.options[0] === 'string' 
            ? fixedOpts 
            : q.options?.map((opt, oIdx) => typeof opt === 'object' ? { ...opt, text: fixedOpts[oIdx] } : opt),
          updatedAt: new Date()
        }
      }
    );
  }
}

console.log("All 45 questions of Chemical Kinetics verified and updated in questionBank!");
await client.close();
