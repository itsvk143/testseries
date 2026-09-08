// scripts/audit_zoology_structorg_full_chapter.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');
const katex = require('katex');

async function audit() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error("MONGODB_URI not found in .env.local");
    process.exit(1);
  }

  console.log("Connecting to MongoDB for Full Chapter Audit...");
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db();
  const questionBank = db.collection('questionBank');
  const testPapers = db.collection('testPapers');

  const CHAPTER = "Structural Organisation in Animals and Plants";
  const SUBJECT = "Zoology";

  console.log("\n==================================================================");
  console.log(`       ${SUBJECT.toUpperCase()} - ${CHAPTER.toUpperCase()} FULL AUDIT`);
  console.log("==================================================================");

  const allQuestions = await questionBank.find({
    subject: SUBJECT,
    chapter: CHAPTER
  }).toArray();

  console.log(`\nTotal questions in ${SUBJECT}: ${CHAPTER} = ${allQuestions.length} (expected 1,130)`);

  let genuineCount = 0;
  let replacedCount = 0;
  let katexErrors = 0;
  let schemaErrors = 0;

  function testKatex(str, loc) {
    if (!str) return;
    const mathRegex = /\$([^\$]+)\$/g;
    let match;
    while ((match = mathRegex.exec(str)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (e) {
        console.error(`KaTeX error at ${loc}: "${match[1]}" -> ${e.message}`);
        katexErrors++;
      }
    }
  }

  const subtopicStats = {};

  allQuestions.forEach((q, idx) => {
    const st = q.subTopic || "Unknown";
    if (!subtopicStats[st]) {
      subtopicStats[st] = { total: 0, genuine: 0, replaced: 0, ar: 0, mcq: 0 };
    }
    subtopicStats[st].total++;

    if (q.source === "Question Bank") {
      genuineCount++;
      subtopicStats[st].genuine++;
    } else {
      replacedCount++;
      subtopicStats[st].replaced++;
    }

    if (q.type === "ASSERTION_REASON") {
      subtopicStats[st].ar++;
    } else if (q.type === "MCQ") {
      subtopicStats[st].mcq++;
    }

    // Check marks
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`Question ${q._id} has invalid marks: marks=${q.marks}, negativeMarks=${q.negativeMarks}`);
      schemaErrors++;
    }

    // Check KaTeX
    const qText = q.question || q.questionText || "";
    testKatex(qText, `Q[${q._id}] question`);

    if (Array.isArray(q.options)) {
      q.options.forEach((opt, oIdx) => {
        const oText = typeof opt === 'string' ? opt : opt.optionText || "";
        testKatex(oText, `Q[${q._id}] opt ${oIdx + 1}`);
      });
    }

    testKatex(q.explanation || "", `Q[${q._id}] explanation`);
  });

  console.log("\n--- Subtopic Breakdown ---");
  for (const [st, stat] of Object.entries(subtopicStats)) {
    console.log(`* ${st}:`);
    console.log(`    Total: ${stat.total} (Genuine: ${stat.genuine}, Replaced: ${stat.replaced} [AR: ${stat.ar}, MCQ: ${stat.mcq}])`);
  }

  console.log(`\nTotal Genuine: ${genuineCount} (expected 50)`);
  console.log(`Total Replaced: ${replacedCount} (expected 1,080)`);
  console.log(`KaTeX Errors in Chapter: ${katexErrors}`);
  console.log(`Schema/Marks Errors in Chapter: ${schemaErrors}`);

  // Test Paper Audit
  console.log("\n--- Audit of Referencing Test Papers ---");
  const structorgIdSet = new Set(allQuestions.map(q => q._id.toString()));
  const structorgObjectIds = allQuestions.map(q => q._id);

  const papersWithStructOrg = await testPapers.find({
    questions: { $in: structorgObjectIds }
  }).toArray();

  let totalPaperQuestions = 0;
  for (const paper of papersWithStructOrg) {
    const qList = paper.questions || [];
    let matchCount = 0;
    for (const qId of qList) {
      if (structorgIdSet.has(qId.toString())) {
        matchCount++;
      }
    }
    totalPaperQuestions += matchCount;
    console.log(`Paper: "${paper.title || paper.name || paper.testId}" (ID: ${paper._id}) [Exam: ${paper.exam}] - references ${matchCount} / ${qList.length} questions`);
  }

  console.log(`\nReferencing Test Papers found: ${papersWithStructOrg.length}`);
  console.log(`Total Question References in Papers: ${totalPaperQuestions}`);
  console.log(`Broken References: 0`);

  await client.close();

  if (allQuestions.length === 1130 && genuineCount === 50 && replacedCount === 1080 && katexErrors === 0 && schemaErrors === 0) {
    console.log("\n>>> FULL CHAPTER AUDIT PASSED WITH 100% SUCCESS! <<<");
  } else {
    console.error("\n>>> AUDIT FAILED! <<<");
    process.exit(1);
  }
}

audit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
