const katex = require("katex");
require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

const s1 = require("./data_jee_binomial_subtopic1.js");
const s2 = require("./data_jee_binomial_subtopic2.js");
const s3 = require("./data_jee_binomial_subtopic3.js");
const s4 = require("./data_jee_binomial_subtopic4.js");
const s5 = require("./data_jee_binomial_subtopic5.js");
const repaired = require("./repaired_genuine_binomial.js");

function testKaTeX(str, loc) {
  if (!str) return [];
  const errors = [];
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push(`KaTeX Error at ${loc}: "${match[1]}" -> ${e.message}`);
    }
  }
  return errors;
}

async function validate() {
  console.log("=== PRE-FLIGHT VALIDATION: BINOMIAL THEOREM ===");
  const allSubtopics = [
    { name: "General term", data: s1 },
    { name: "Middle term", data: s2 },
    { name: "Coefficient estimation", data: s3 },
    { name: "Binomial identities", data: s4 },
    { name: "Sum of binomial coefficients and series", data: s5 }
  ];

  let totalReplacements = 0;
  let errorCount = 0;
  const questionSet = new Map();

  for (const st of allSubtopics) {
    console.log(`\nChecking subtopic: ${st.name} (${st.data.length} questions)...`);
    if (st.data.length !== 30) {
      console.error(`ERROR: Expected 30 questions, found ${st.data.length}`);
      errorCount++;
    }

    let mcqCount = 0;
    let arCount = 0;
    let numCount = 0;

    st.data.forEach((q, idx) => {
      totalReplacements++;
      const loc = `${st.name} Q${idx + 1} (${q.type})`;

      // Duplicate check
      const qKey = q.question.trim().toLowerCase();
      if (questionSet.has(qKey)) {
        console.error(`DUPLICATE QUESTION: ${loc} duplicates ${questionSet.get(qKey)}`);
        errorCount++;
      } else {
        questionSet.set(qKey, loc);
      }

      // Type count
      if (q.type === "Numerical") numCount++;
      else if (q.question.startsWith("Assertion (A):")) arCount++;
      else mcqCount++;

      // KaTeX check
      const qErrors = testKaTeX(q.question, `${loc} question`);
      const expErrors = testKaTeX(q.explanation, `${loc} explanation`);
      const optErrors = [];
      (q.options || []).forEach((opt, oi) => {
        optErrors.push(...testKaTeX(opt, `${loc} opt[${oi}]`));
      });

      const allK = [...qErrors, ...expErrors, ...optErrors];
      if (allK.length > 0) {
        allK.forEach(err => console.error(err));
        errorCount++;
      }

      // Options & Correct Answer Check
      if (q.type === "Numerical") {
        if (q.options && q.options.length !== 0) {
          console.error(`ERROR: Numerical should have empty options, got ${q.options.length} at ${loc}`);
          errorCount++;
        }
        if (typeof q.correctAnswer !== "number" && typeof q.correctAnswer !== "string") {
          console.error(`ERROR: Invalid numerical answer at ${loc}: ${q.correctAnswer}`);
          errorCount++;
        }
        if (q.negativeMarks !== 0) {
          console.error(`ERROR: Numerical negativeMarks must be 0 at ${loc}`);
          errorCount++;
        }
      } else {
        if (!q.options || q.options.length !== 4) {
          console.error(`ERROR: Expected 4 options, got ${q.options?.length} at ${loc}`);
          errorCount++;
        }
        if (q.correctAnswer < 0 || q.correctAnswer > 3) {
          console.error(`ERROR: Invalid correctAnswer index ${q.correctAnswer} at ${loc}`);
          errorCount++;
        }
        if (q.negativeMarks !== 1) {
          console.error(`ERROR: MCQ/AR negativeMarks must be 1 at ${loc}`);
          errorCount++;
        }
      }

      if (q.marks !== 4) {
        console.error(`ERROR: Marks must be 4 at ${loc}`);
        errorCount++;
      }
    });

    console.log(`Subtopic breakdown: ${mcqCount} MCQ, ${arCount} AR, ${numCount} NUM`);
  }

  // Check genuine questions from DB
  console.log("\n--- Checking Genuine Questions from DB ---");
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const genuineDocs = await db.collection("questionBank").find({
    subject: /math/i,
    chapter: /binomial/i,
    source: "Question Bank"
  }).toArray();

  console.log(`Found ${genuineDocs.length} genuine questions in DB.`);
  genuineDocs.forEach((doc, idx) => {
    const idStr = doc._id.toString();
    const rep = repaired[idStr];
    const qText = rep?.question || doc.question || doc.questionText;
    const opts = rep?.options || doc.options;
    const ans = rep ? rep.correctAnswer : doc.correctAnswer;
    const expl = rep?.explanation || doc.explanation;

    const loc = `Genuine Q${idx + 1} (${idStr})`;

    // Check KaTeX
    const qErrors = testKaTeX(qText, `${loc} question`);
    const expErrors = testKaTeX(expl, `${loc} explanation`);
    const optErrors = [];
    (opts || []).forEach((opt, oi) => {
      optErrors.push(...testKaTeX(opt, `${loc} opt[${oi}]`));
    });

    const allK = [...qErrors, ...expErrors, ...optErrors];
    if (allK.length > 0) {
      allK.forEach(err => console.error(err));
      errorCount++;
    }

    if (!opts || opts.length !== 4) {
      console.error(`ERROR: Genuine Q options count is ${opts?.length} at ${loc}`);
      errorCount++;
    }

    if (ans < 0 || ans > 3) {
      console.error(`ERROR: Genuine Q invalid correctAnswer ${ans} at ${loc}`);
      errorCount++;
    }

    const qKey = qText.trim().toLowerCase();
    if (questionSet.has(qKey)) {
      console.error(`DUPLICATE: Genuine ${loc} matches replacement ${questionSet.get(qKey)}`);
      errorCount++;
    } else {
      questionSet.set(qKey, loc);
    }
  });

  await client.close();

  console.log("\n==========================================");
  console.log(`Total replacements checked: ${totalReplacements}`);
  console.log(`Total genuine checked: ${genuineDocs.length}`);
  console.log(`Total chapter questions: ${totalReplacements + genuineDocs.length}`);
  console.log(`Total validation errors: ${errorCount}`);
  console.log("==========================================");

  if (errorCount > 0) {
    process.exit(1);
  } else {
    console.log("SUCCESS: 0 KaTeX errors, 0 duplicates, all criteria met!");
  }
}

validate().catch(err => {
  console.error(err);
  process.exit(1);
});
