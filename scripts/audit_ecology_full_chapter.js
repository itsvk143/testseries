// scripts/audit_ecology_full_chapter.js
// Comprehensive audit of all questions in Botany -> Ecology and Environment
// and all 11 referencing test papers.

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB Atlas.");

  const db = client.db("testseries");
  const qb = db.collection("questionBank");
  const tp = db.collection("testPapers");

  console.log("\n--- Step 1: Auditing Entire Question Bank for Ecology and Environment ---");
  const allQuestions = await qb.find({ subject: "Botany", chapter: "Ecology and Environment" }).toArray();
  console.log(`Total questions retrieved: ${allQuestions.length} (Expected: 1301)`);

  let totalErrors = 0;
  let katexErrors = 0;

  function testKatex(str, label) {
    if (!str) return;
    const mathRegex = /\$([^\$]+)\$/g;
    let match;
    while ((match = mathRegex.exec(str)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (e) {
        console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
        katexErrors++;
        totalErrors++;
      }
    }
  }

  const subtopicCounts = {};
  const bogusRegex = /(derivative of|d\/dx|\bintegral of\b|\blimit as\b|\bpolynomial\b|governing variables|minimizing free energy|restoring force)/i;

  allQuestions.forEach((q, idx) => {
    const label = `Q[${q._id}] (idx ${idx + 1})`;
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

    // Schema checks
    if (!q.question || typeof q.question !== 'string') {
      console.error(`${label}: invalid question`);
      totalErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`${label}: invalid options length (${q.options ? q.options.length : 'none'})`);
      totalErrors++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`${label}: invalid correctAnswer (${q.correctAnswer})`);
      totalErrors++;
    }
    if (!q.explanation || typeof q.explanation !== 'string') {
      console.error(`${label}: invalid explanation`);
      totalErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`${label}: invalid marks/neg (${q.marks}/${q.negativeMarks})`);
      totalErrors++;
    }
    if (bogusRegex.test(q.question) || bogusRegex.test(q.explanation)) {
      console.error(`${label}: Contains bogus calculus/math pattern!`);
      totalErrors++;
    }

    // KaTeX validation
    testKatex(q.question, `${label} question`);
    if (Array.isArray(q.options)) {
      q.options.forEach((opt, oIdx) => testKatex(opt, `${label} opt${oIdx + 1}`));
    }
    testKatex(q.explanation, `${label} explanation`);
  });

  console.log("\nSubtopic Breakdown:");
  for (const [st, cnt] of Object.entries(subtopicCounts)) {
    console.log(` - ${st}: ${cnt}`);
  }

  console.log(`\nKaTeX errors: ${katexErrors}`);
  console.log(`Total question bank errors: ${totalErrors}`);

  console.log("\n--- Step 2: Auditing All Referencing Test Papers ---");
  const testPapers = await tp.find({
    $or: [
      { "sections.questions.questionId": { $in: allQuestions.map(q => q._id) } },
      { "sections.questions.question": { $in: allQuestions.map(q => q._id) } },
      { "questions": { $in: allQuestions.map(q => q._id) } },
      { title: { $regex: /Ecology|Environment|Organisms and Populations|Ecosystem Structure|Biodiversity/i } }
    ]
  }).toArray();

  console.log(`Found ${testPapers.length} test papers referencing this chapter.`);

  let brokenRefs = 0;
  for (const paper of testPapers) {
    const qIds = [];

    if (Array.isArray(paper.sections)) {
      paper.sections.forEach(sec => {
        if (Array.isArray(sec.questions)) {
          sec.questions.forEach(sq => {
            const id = sq.questionId || sq.question || sq._id;
            if (id) qIds.push(new ObjectId(id.toString()));
          });
        }
      });
    }
    if (Array.isArray(paper.questions)) {
      paper.questions.forEach(q => {
        const id = q.questionId || q.question || q._id || q;
        if (id) qIds.push(new ObjectId(id.toString()));
      });
    }

    // Batch query to verify existence rapidly
    const existing = await qb.find({ _id: { $in: qIds } }).toArray();
    const existingIdSet = new Set(existing.map(d => d._id.toString()));

    let paperBroken = 0;
    qIds.forEach(qid => {
      if (!existingIdSet.has(qid.toString())) {
        console.error(`Paper "${paper.title}" [${paper._id}] broken reference: ${qid}`);
        paperBroken++;
        brokenRefs++;
      }
    });

    console.log(`Paper: "${paper.title}" -> ${existing.length} valid question references verified (${paperBroken} broken).`);
  }

  console.log(`\nBroken test paper references: ${brokenRefs}`);

  console.log("\n====================================");
  if (totalErrors === 0 && brokenRefs === 0 && allQuestions.length === 1301) {
    console.log("FINAL RESULT: ALL 1,301 QUESTIONS AND ALL TEST PAPERS ARE 100% HEALTHY AND VERIFIED!");
  } else {
    console.error("FINAL RESULT: AUDIT FAILED WITH ISSUES!");
    process.exit(1);
  }

  await client.close();
}

audit().catch(err => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
