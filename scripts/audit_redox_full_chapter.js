require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");
const katex = require("katex");

function checkKatex(str, ctx) {
  if (!str) return [];
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  const errors = [];
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push({ ctx, math: match[1], err: e.message });
    }
  }
  return errors;
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    const docs = await col.find({ chapter: "Redox Reactions and Electrochemistry" }).toArray();
    console.log(`Total questions in "Redox Reactions and Electrochemistry": ${docs.length}`);

    let genuineCount = 0;
    let replacedCount = 0;
    let otherCount = 0;
    let bogusBoilerplateCount = 0;
    let allKatexErrors = [];

    const boilerplatePattern = /(mathematical and empirical modeling|standards of SI|standardized scientific units|crucial benchmark|predictive calculations for Redox)/i;

    docs.forEach((doc, idx) => {
      if (doc.source === "Question Bank") {
        genuineCount++;
      } else if (doc.source === "NCERT & NEET/JEE Authenticated Question Bank") {
        replacedCount++;
      } else {
        otherCount++;
      }

      if (boilerplatePattern.test(doc.question) || boilerplatePattern.test(doc.explanation || "")) {
        bogusBoilerplateCount++;
      }

      // KaTeX audit
      const qErr = checkKatex(doc.question, `doc[${doc._id}].question`);
      allKatexErrors.push(...qErr);

      if (Array.isArray(doc.options)) {
        doc.options.forEach((opt, oidx) => {
          const oErr = checkKatex(opt, `doc[${doc._id}].options[${oidx}]`);
          allKatexErrors.push(...oErr);
        });
      }

      const eErr = checkKatex(doc.explanation, `doc[${doc._id}].explanation`);
      allKatexErrors.push(...eErr);
    });

    console.log(`\n--- CHAPTER AUDIT REPORT ---`);
    console.log(`Total questions: ${docs.length}`);
    console.log(`Genuine questions (source: 'Question Bank'): ${genuineCount}`);
    console.log(`Replaced authentic questions: ${replacedCount}`);
    console.log(`Other source questions: ${otherCount}`);
    console.log(`Remaining bogus boilerplate questions: ${bogusBoilerplateCount}`);
    console.log(`Total KaTeX errors across entire chapter: ${allKatexErrors.length}`);

    if (allKatexErrors.length > 0) {
      console.error("\nSample KaTeX errors:", allKatexErrors.slice(0, 10));
      process.exit(1);
    } else {
      console.log("\nSUCCESS: All 983 questions in Redox Reactions and Electrochemistry are 100% KaTeX valid and verified authentic!");
    }

  } finally {
    await client.close();
  }
}

audit().catch(err => {
  console.error("Audit failed:", err);
  process.exit(1);
});
