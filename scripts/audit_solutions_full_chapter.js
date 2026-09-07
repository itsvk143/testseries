require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");
const katex = require("katex");

function checkKatex(str, ctx) {
  if (!str) return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error in ${ctx}: "${match[1]}" -> ${e.message}`);
    }
  }
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas.");

    const docs = await col.find({ chapter: "Solutions" }).toArray();
    console.log(`Total questions in "Solutions": ${docs.length}`);

    let genuineCount = 0;
    let replacedCount = 0;
    let otherCount = 0;
    let katexErrors = 0;
    let arFormatErrors = 0;
    let numErrors = 0;
    let mcqErrors = 0;

    const subtopicStats = {};

    docs.forEach((doc, idx) => {
      subtopicStats[doc.subTopic] = (subtopicStats[doc.subTopic] || 0) + 1;

      if (doc.source === "Question Bank") {
        genuineCount++;
      } else if (doc.source === "NCERT & NEET/JEE Authenticated Question Bank") {
        replacedCount++;
      } else {
        otherCount++;
        console.warn(`Unrecognized source at _id ${doc._id}: ${doc.source}`);
      }

      // KaTeX audit
      try {
        checkKatex(doc.question, `doc[${doc._id}].question`);
        (doc.options || []).forEach((opt, oIdx) => {
          checkKatex(opt, `doc[${doc._id}].options[${oIdx}]`);
        });
        checkKatex(doc.explanation, `doc[${doc._id}].explanation`);
      } catch (err) {
        console.error(err.message);
        katexErrors++;
      }

      // Check AR format
      const t = (doc.questionType || doc.type || "").toUpperCase();
      if (t.includes("ASSERTION")) {
        const lines = doc.question.split("\n");
        if (lines.length !== 3) {
          console.error(`AR not 3 lines at _id ${doc._id}: got ${lines.length} lines`);
          arFormatErrors++;
        } else {
          if (!lines[0].startsWith("Given below are two statements")) {
            console.error(`AR Line 1 invalid at _id ${doc._id}: ${lines[0]}`);
            arFormatErrors++;
          }
          if (!lines[1].startsWith("Assertion (A):")) {
            console.error(`AR Line 2 invalid at _id ${doc._id}: ${lines[1]}`);
            arFormatErrors++;
          }
          if (!lines[2].startsWith("Reason (R):")) {
            console.error(`AR Line 3 invalid at _id ${doc._id}: ${lines[2]}`);
            arFormatErrors++;
          }
        }
      }

      // Check Numerical
      if (doc.type === "NUMERICAL") {
        if ((doc.options || []).length !== 0) {
          console.error(`Numerical options not empty at _id ${doc._id}`);
          numErrors++;
        }
        if (doc.negativeMarks !== 0) {
          console.error(`Numerical negativeMarks not 0 at _id ${doc._id}`);
          numErrors++;
        }
      }

      // Check MCQ
      if (doc.type === "MCQ") {
        if (!doc.options || doc.options.length !== 4) {
          console.error(`MCQ options not 4 at _id ${doc._id}`);
          mcqErrors++;
        }
      }
    });

    console.log("\nSubtopic distribution:");
    Object.entries(subtopicStats).forEach(([st, cnt]) => {
      console.log(`  - "${st}": ${cnt}`);
    });

    console.log("\n==============================================");
    console.log(`AUDIT RESULTS FOR "Solutions":`);
    console.log(`- Total Questions: ${docs.length} (Expected: 724)`);
    console.log(`- Genuine Preserved: ${genuineCount} (Expected: 106)`);
    console.log(`- Replaced Authenticated: ${replacedCount} (Expected: 618)`);
    console.log(`- Other/Bogus Remaining: ${otherCount} (Expected: 0)`);
    console.log(`- KaTeX Errors: ${katexErrors} (Expected: 0)`);
    console.log(`- AR 3-Line Format Errors: ${arFormatErrors} (Expected: 0)`);
    console.log(`- Numerical Errors: ${numErrors} (Expected: 0)`);
    console.log(`- MCQ Errors: ${mcqErrors} (Expected: 0)`);
    console.log("==============================================");

    if (
      docs.length === 724 &&
      genuineCount === 106 &&
      replacedCount === 618 &&
      otherCount === 0 &&
      katexErrors === 0 &&
      arFormatErrors === 0 &&
      numErrors === 0 &&
      mcqErrors === 0
    ) {
      console.log("\nALL 724 QUESTIONS IN SOLUTIONS ARE 100% AUDITED AND VERIFIED!");
    } else {
      process.exit(1);
    }
  } finally {
    await client.close();
  }
}

audit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
