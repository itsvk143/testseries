const { MongoClient } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function validateLatex(text) {
  if (!text) return [];
  const errors = [];
  const regex = /\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push({ math: match[1], error: e.message });
    }
  }
  return errors;
}

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db();
  const col = db.collection("questionBank");

  const chapter = "Organic Compounds Containing Oxygen";
  const allDocs = await col.find({ chapter }).toArray();

  console.log(`Total questions in '${chapter}': ${allDocs.length} (Expected: 570)`);

  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const replaced = allDocs.filter(d => d.source === "NCERT & NEET/JEE Authenticated Question Bank");
  const other = allDocs.filter(d => d.source !== "Question Bank" && d.source !== "NCERT & NEET/JEE Authenticated Question Bank");

  console.log(`  Genuine original Qs: ${genuine.length} (Expected: 100)`);
  console.log(`  Replaced authenticated Qs: ${replaced.length} (Expected: 470)`);
  console.log(`  Other / Unreplaced bogus Qs: ${other.length} (Expected: 0)`);

  let katexErrors = 0;
  let arFormatErrors = 0;
  let optionErrors = 0;
  let answerErrors = 0;

  for (const doc of allDocs) {
    // KaTeX check
    const qErrs = validateLatex(doc.question);
    if (qErrs.length > 0) {
      console.log(`KaTeX error in question ${doc._id}:`, qErrs);
      katexErrors += qErrs.length;
    }
    if (doc.options) {
      doc.options.forEach((opt, idx) => {
        const oErrs = validateLatex(opt);
        if (oErrs.length > 0) {
          console.log(`KaTeX error in option[${idx}] of ${doc._id}:`, oErrs);
          katexErrors += oErrs.length;
        }
      });
    }
    const expErrs = validateLatex(doc.explanation);
    if (expErrs.length > 0) {
      console.log(`KaTeX error in explanation of ${doc._id}:`, expErrs);
      katexErrors += expErrs.length;
    }

    // AR format check
    if (doc.type === "ASSERTION_REASON" || doc.questionType === "Assertion–Reasoning") {
      const lines = (doc.question || "").split("\n");
      if (lines.length !== 3) {
        console.log(`AR format error: not 3 lines in ${doc._id}: ${lines.length} lines`);
        arFormatErrors++;
      } else {
        if (lines[0] !== "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).") {
          console.log(`AR line 1 invalid in ${doc._id}: ${lines[0]}`);
          arFormatErrors++;
        }
        if (!lines[1].startsWith("Assertion (A): ")) {
          console.log(`AR line 2 invalid in ${doc._id}: ${lines[1]}`);
          arFormatErrors++;
        }
        if (!lines[2].startsWith("Reason (R): ")) {
          console.log(`AR line 3 invalid in ${doc._id}: ${lines[2]}`);
          arFormatErrors++;
        }
      }

      if (!Array.isArray(doc.options) || doc.options.length !== 4) {
        console.log(`AR option count error in ${doc._id}`);
        optionErrors++;
      } else {
        for (let i = 0; i < 4; i++) {
          if (doc.options[i] !== STANDARD_AR_OPTIONS[i]) {
            console.log(`AR option[${i}] non-standard in ${doc._id}`);
            optionErrors++;
          }
        }
      }
      if (![0, 1, 2, 3].includes(doc.correctAnswer)) {
        console.log(`AR answer invalid in ${doc._id}: ${doc.correctAnswer}`);
        answerErrors++;
      }
    }

    // MCQ check
    if (doc.type === "MCQ") {
      if (!Array.isArray(doc.options) || doc.options.length !== 4) {
        console.log(`MCQ options error in ${doc._id}`);
        optionErrors++;
      }
      if (![0, 1, 2, 3].includes(doc.correctAnswer)) {
        console.log(`MCQ answer invalid in ${doc._id}: ${doc.correctAnswer}`);
        answerErrors++;
      }
    }

    // NUM check
    if (doc.type === "NUMERICAL") {
      if (!Array.isArray(doc.options) || doc.options.length !== 0) {
        console.log(`NUM options should be [] in ${doc._id}`);
        optionErrors++;
      }
      if (typeof doc.correctAnswer !== "string" || isNaN(parseInt(doc.correctAnswer, 10))) {
        console.log(`NUM answer invalid in ${doc._id}: ${doc.correctAnswer}`);
        answerErrors++;
      }
    }
  }

  console.log("\n========================================");
  console.log("Audit Summary:");
  console.log(`  KaTeX Errors: ${katexErrors}`);
  console.log(`  AR Format Errors: ${arFormatErrors}`);
  console.log(`  Option Errors: ${optionErrors}`);
  console.log(`  Answer Errors: ${answerErrors}`);
  console.log("========================================");

  if (katexErrors === 0 && arFormatErrors === 0 && optionErrors === 0 && answerErrors === 0 && other.length === 0) {
    console.log("\nFULL CHAPTER AUDIT PASSED WITH 100% EXCELLENCE!");
  } else {
    console.error("\nAudit completed with issues!");
    process.exit(1);
  }

  await client.close();
  console.log("Database connection closed.");
}

main().catch(console.error);
