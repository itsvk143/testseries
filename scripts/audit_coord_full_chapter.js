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

async function auditChapter() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    console.log("Connected to MongoDB Atlas.");

    const allQs = await col.find({ chapter: "Co-ordination Compounds" }).toArray();
    console.log(`Total questions in 'Co-ordination Compounds': ${allQs.length} (Expected: 698)`);

    const genuine = allQs.filter(q => q.source === "Question Bank");
    const replaced = allQs.filter(q => q.source === "NCERT & NEET/JEE Authenticated Question Bank");
    const others = allQs.filter(q => q.source !== "Question Bank" && q.source !== "NCERT & NEET/JEE Authenticated Question Bank");

    console.log(`  Genuine original Qs: ${genuine.length} (Expected: 119)`);
    console.log(`  Replaced authenticated Qs: ${replaced.length} (Expected: 579)`);
    console.log(`  Other / Unreplaced bogus Qs: ${others.length} (Expected: 0)`);

    let katexErrors = 0;
    let arFormatErrors = 0;
    let optionErrors = 0;
    let answerErrors = 0;

    allQs.forEach((q, idx) => {
      const ctx = `Q[${idx}] (_id: ${q._id}, subTopic: "${q.subTopic}")`;

      // KaTeX audit
      try {
        checkKatex(q.question, `${ctx}.question`);
        if (Array.isArray(q.options)) {
          q.options.forEach((opt, oIdx) => checkKatex(opt, `${ctx}.options[${oIdx}]`));
        }
        checkKatex(q.explanation, `${ctx}.explanation`);
      } catch (err) {
        console.error(`  [KaTeX Error] ${err.message}`);
        katexErrors++;
      }

      // AR 3-line audit
      const isAR = (q.type === "ASSERTION_REASON") || (q.questionType && q.questionType.toLowerCase().includes("assertion"));
      if (isAR) {
        const lines = q.question.split("\n");
        if (lines.length !== 3) {
          console.error(`  [AR Format Error] ${ctx} has ${lines.length} lines instead of 3`);
          arFormatErrors++;
        } else {
          if (!lines[0].startsWith("Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).")) {
            console.error(`  [AR Format Error] ${ctx} line 1 invalid prompt`);
            arFormatErrors++;
          }
          if (!lines[1].startsWith("Assertion (A): ")) {
            console.error(`  [AR Format Error] ${ctx} line 2 does not start with 'Assertion (A): '`);
            arFormatErrors++;
          }
          if (!lines[2].startsWith("Reason (R): ")) {
            console.error(`  [AR Format Error] ${ctx} line 3 does not start with 'Reason (R): '`);
            arFormatErrors++;
          }
        }
      }

      // Option & Answer audit
      if (q.type === "MCQ" || (q.questionType && q.questionType.includes("MCQ"))) {
        if (!q.options || q.options.length !== 4) {
          console.error(`  [Option Error] ${ctx} MCQ does not have 4 options`);
          optionErrors++;
        }
        if (q.correctOption !== undefined && q.options && q.correctAnswer !== q.options[q.correctOption]) {
          console.error(`  [Answer Error] ${ctx} correctAnswer !== options[correctOption]`);
          answerErrors++;
        }
      }

      if (q.type === "NUMERICAL") {
        if (isNaN(Number(q.correctAnswer))) {
          console.error(`  [Answer Error] ${ctx} NUM answer is NaN: "${q.correctAnswer}"`);
          answerErrors++;
        }
      }
    });

    console.log(`\n========================================`);
    console.log(`Audit Summary:`);
    console.log(`  KaTeX Errors: ${katexErrors}`);
    console.log(`  AR Format Errors: ${arFormatErrors}`);
    console.log(`  Option Errors: ${optionErrors}`);
    console.log(`  Answer Errors: ${answerErrors}`);
    console.log(`========================================\n`);

    if (katexErrors > 0 || arFormatErrors > 0 || optionErrors > 0 || answerErrors > 0 || others.length > 0) {
      console.error("AUDIT FAILED!");
      process.exit(1);
    } else {
      console.log("FULL CHAPTER AUDIT PASSED WITH 100% EXCELLENCE!");
    }

  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

auditChapter().catch(err => {
  console.error("Audit failed:", err);
  process.exit(1);
});
