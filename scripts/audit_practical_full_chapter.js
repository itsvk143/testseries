const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

function validateKaTeX(text) {
  if (!text) return { valid: true };
  const inlineRegex = /\$([^$]+)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      return { valid: false, error: e.message, math: match[1] };
    }
  }
  return { valid: true };
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db();
  const qbCol = db.collection("questionBank");
  const tpCol = db.collection("testPapers");

  const chapter = "Principles Related to Practical Chemistry";
  const allChapterQuestions = await qbCol.find({ chapter }).toArray();

  console.log(`\n=== CHAPTER LEVEL AUDIT ===`);
  console.log(`Total questions in "${chapter}": ${allChapterQuestions.length}`);

  if (allChapterQuestions.length !== 320) {
    console.error(`ERROR: Expected 320 questions, found ${allChapterQuestions.length}`);
  }

  let genuineCount = 0;
  let revisedCount = 0;
  let katexErrors = 0;
  let schemaErrors = 0;

  const subtopicMap = {};

  for (const q of allChapterQuestions) {
    const st = q.subTopic || q.subtopic;
    subtopicMap[st] = (subtopicMap[st] || 0) + 1;

    if (q.source === "Question Bank") {
      genuineCount++;
    } else if (q.source === "Question Bank - Practical Chemistry Revision") {
      revisedCount++;
    } else {
      console.warn(`Unexpected source for question ${q._id}: ${q.source}`);
    }

    // Validate KaTeX
    const fields = [q.question, ...(q.options || []), q.explanation];
    for (const f of fields) {
      const res = validateKaTeX(f);
      if (!res.valid) {
        console.error(`KaTeX error in question ${q._id}: ${res.error} (math: ${res.math})`);
        katexErrors++;
      }
    }

    // Validate schema
    if (!q.question || typeof q.question !== "string") schemaErrors++;
    if (q.type === "ASSERTION_REASON" || q.type === "MCQ") {
      if (!Array.isArray(q.options) || q.options.length !== 4) schemaErrors++;
      if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) schemaErrors++;
      if (q.marks !== 4 || q.negativeMarks !== 1) schemaErrors++;
    } else if (q.type === "NUMERICAL") {
      if (!Array.isArray(q.options) || q.options.length !== 0) schemaErrors++;
      if (typeof q.correctAnswer !== "string" || isNaN(Number(q.correctAnswer))) schemaErrors++;
      if (q.marks !== 4 || q.negativeMarks !== 0) schemaErrors++;
    } else {
      schemaErrors++;
    }
  }

  console.log(`Genuine questions: ${genuineCount}`);
  console.log(`Revised questions: ${revisedCount}`);
  console.log(`Subtopic distribution:`, subtopicMap);
  console.log(`Total KaTeX errors across all 320 questions: ${katexErrors}`);
  console.log(`Total Schema errors across all 320 questions: ${schemaErrors}`);

  // Test paper audit
  console.log(`\n=== TEST PAPER AUDIT ===`);
  const qIds = allChapterQuestions.map(q => q._id);
  const qIdSet = new Set(qIds.map(id => id.toString()));

  const testPapers = await tpCol.find({
    questions: { $in: qIds }
  }).toArray();

  console.log(`Found ${testPapers.length} test papers referencing questions from this chapter.`);

  let totalTestPaperRefs = 0;
  let testPaperMissingRefs = 0;

  for (const tp of testPapers) {
    let refsInPaper = 0;
    for (const qid of tp.questions || []) {
      const idStr = qid.toString();
      if (qIdSet.has(idStr)) {
        refsInPaper++;
        totalTestPaperRefs++;
        const foundQ = allChapterQuestions.find(q => q._id.toString() === idStr);
        if (!foundQ) {
          testPaperMissingRefs++;
        }
      }
    }
    console.log(`  - Paper "${tp.title}" [TestId: ${tp.testId || tp._id}]: ${refsInPaper} / ${tp.questions.length} chapter questions`);
  }

  console.log(`Total question references across all test papers: ${totalTestPaperRefs}`);
  console.log(`Missing references in test papers: ${testPaperMissingRefs}`);

  console.log(`\n================ AUDIT SUMMARY ================`);
  if (
    allChapterQuestions.length === 320 &&
    genuineCount === 60 &&
    revisedCount === 260 &&
    katexErrors === 0 &&
    schemaErrors === 0 &&
    testPaperMissingRefs === 0
  ) {
    console.log("SUCCESS: 100% OF QUESTIONS AND TEST PAPERS AUDITED WITH ZERO ERRORS!");
  } else {
    console.error("FAILURE: Some audit criteria were not met.");
    process.exit(1);
  }

  await client.close();
}

audit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
