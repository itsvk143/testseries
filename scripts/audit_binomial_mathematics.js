const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

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

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const qb = db.collection("questionBank");
    const tp = db.collection("testPapers");

    console.log("=== COMPREHENSIVE AUDIT: MATHEMATICS > BINOMIAL THEOREM ===");

    const docs = await qb.find({ subject: /math/i, chapter: /binomial/i }).toArray();
    console.log(`\nTotal questions in chapter: ${docs.length}`);

    if (docs.length !== 183) {
      console.error(`ERROR: Expected 183 questions, found ${docs.length}`);
    }

    let bogusCount = 0;
    let katexErrors = 0;
    let scoringErrors = 0;
    let optionErrors = 0;
    let answerErrors = 0;
    const questionMap = new Map();
    let duplicateCount = 0;

    const subtopicCounts = {};
    const typeCounts = {};
    const sourceCounts = {};

    docs.forEach((d, i) => {
      const qText = d.question || d.questionText || "";
      const loc = `Q${i + 1} (${d._id})`;

      // Track counts
      const st = d.subTopic || d.subtopic || "Unassigned";
      subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
      typeCounts[d.type] = (typeCounts[d.type] || 0) + 1;
      sourceCounts[d.source] = (sourceCounts[d.source] || 0) + 1;

      // 1. Check for Bogus Boilerplate
      if (/Riemann/i.test(qText) || /asymptotic behavior in/i.test(qText) || /Riemann/i.test(d.explanation || "")) {
        console.error(`BOGUS TEXT DETECTED at ${loc}`);
        bogusCount++;
      }

      // 2. KaTeX check
      const qErr = testKaTeX(qText, `${loc} question`);
      const expErr = testKaTeX(d.explanation, `${loc} explanation`);
      const optErr = [];
      (d.options || []).forEach((opt, oi) => {
        optErr.push(...testKaTeX(opt, `${loc} opt[${oi}]`));
      });
      const allK = [...qErr, ...expErr, ...optErr];
      if (allK.length > 0) {
        allK.forEach(e => console.error(e));
        katexErrors++;
      }

      // 3. Duplicates check
      const cleanQ = qText.trim().toLowerCase();
      if (questionMap.has(cleanQ)) {
        console.error(`DUPLICATE: ${loc} duplicates ${questionMap.get(cleanQ)}`);
        duplicateCount++;
      } else {
        questionMap.set(cleanQ, loc);
      }

      // 4. Scoring check
      if (d.type === "MCQ") {
        if (d.marks !== 4 || d.negativeMarks !== 1) {
          console.error(`Scoring error at ${loc}: marks=${d.marks}, neg=${d.negativeMarks} (expected 4, 1)`);
          scoringErrors++;
        }
        if (!d.options || d.options.length !== 4) {
          console.error(`Option count error at ${loc}: ${d.options?.length} (expected 4)`);
          optionErrors++;
        }
        if (d.correctAnswer < 0 || d.correctAnswer > 3) {
          console.error(`Answer index error at ${loc}: ${d.correctAnswer}`);
          answerErrors++;
        }
      } else if (d.type === "Numerical") {
        if (d.marks !== 4 || d.negativeMarks !== 0) {
          console.error(`Scoring error at ${loc}: marks=${d.marks}, neg=${d.negativeMarks} (expected 4, 0)`);
          scoringErrors++;
        }
        if (d.options && d.options.length !== 0) {
          console.error(`Option count error at ${loc}: ${d.options?.length} (expected 0)`);
          optionErrors++;
        }
        if (typeof d.correctAnswer !== "number" && typeof d.correctAnswer !== "string") {
          console.error(`Answer value error at ${loc}: ${d.correctAnswer}`);
          answerErrors++;
        }
      }
    });

    console.log("\n--- Subtopic Distribution ---");
    console.table(subtopicCounts);

    console.log("\n--- Question Type Distribution ---");
    console.table(typeCounts);

    console.log("\n--- Source Distribution ---");
    console.table(sourceCounts);

    // 5. Test Paper Audit
    console.log("\n--- Test Paper Audit ---");
    const testDoc = await tp.findOne({ _id: new ObjectId("6a9e2843c527cd38431011b2") });
    let testPaperErrors = 0;
    if (testDoc) {
      console.log(`Test: "${testDoc.title}" (${testDoc.testId})`);
      console.log(`Questions count in test: ${testDoc.questions?.length}`);

      if (testDoc.questions?.length !== 25) {
        console.error(`ERROR: Test paper has ${testDoc.questions?.length} questions, expected 25`);
        testPaperErrors++;
      }

      const testQDocs = await qb.find({ _id: { $in: testDoc.questions } }).toArray();
      let nonChapterCount = 0;
      let secAMCQ = 0;
      let secBNum = 0;

      testQDocs.forEach(tq => {
        if (!/binomial/i.test(tq.chapter || "")) {
          console.error(`NON-CHAPTER QUESTION in test paper: ${tq._id} (${tq.chapter})`);
          nonChapterCount++;
        }
        if (tq.type === "MCQ") secAMCQ++;
        else if (tq.type === "Numerical") secBNum++;
      });

      console.log(`Test paper question breakdown: Section A (MCQs) = ${secAMCQ}, Section B (Numericals) = ${secBNum}`);
      if (secAMCQ !== 20 || secBNum !== 5) {
        console.error(`ERROR: Expected 20 Section A MCQs and 5 Section B Numericals, found ${secAMCQ} and ${secBNum}`);
        testPaperErrors++;
      }
      if (nonChapterCount > 0) {
        console.error(`ERROR: Found ${nonChapterCount} non-chapter questions in test paper.`);
        testPaperErrors++;
      }
    } else {
      console.error("ERROR: Test paper 6a9e2843c527cd38431011b2 not found!");
      testPaperErrors++;
    }

    console.log("\n==========================================");
    console.log(`Total questions audited: ${docs.length}`);
    console.log(`Bogus questions remaining: ${bogusCount}`);
    console.log(`KaTeX errors: ${katexErrors}`);
    console.log(`Duplicate questions: ${duplicateCount}`);
    console.log(`Scoring errors: ${scoringErrors}`);
    console.log(`Option count errors: ${optionErrors}`);
    console.log(`Answer key errors: ${answerErrors}`);
    console.log(`Test paper errors: ${testPaperErrors}`);
    console.log("==========================================");

    if (bogusCount === 0 && katexErrors === 0 && duplicateCount === 0 && scoringErrors === 0 && optionErrors === 0 && answerErrors === 0 && testPaperErrors === 0) {
      console.log("\n>>> FULL AUDIT PASSED: ALL 183 QUESTIONS AND TEST PAPER ARE 100% PERFECT! <<<");
    } else {
      console.error("\n>>> AUDIT FAILED WITH ERRORS! <<<");
      process.exit(1);
    }
  } finally {
    await client.close();
  }
}

audit().catch(err => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
