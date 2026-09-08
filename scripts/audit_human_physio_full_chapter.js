// scripts/audit_human_physio_full_chapter.js
// Comprehensive audit of all 2,041 questions in Human Physiology (Zoology)
// and all referencing test papers.

const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const katex = require('katex');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const BOGUS_KEYWORDS = [
  'carnot',
  'ideal gas',
  'restoring force',
  'spring constant',
  'governing variables',
  'thermodynamic cycle',
  'indicator diagram',
  'damping constant',
  'viscous drag'
];

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI not found");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // 1. Fetch all questions in Human Physiology
    const allQuestions = await qb.find({
      subject: "Zoology",
      chapter: "Human Physiology"
    }).toArray();

    console.log(`\nTotal questions in chapter "Human Physiology" (Zoology): ${allQuestions.length}`);

    if (allQuestions.length !== 2041) {
      console.error(`ERROR: Expected 2,041 questions, found ${allQuestions.length}!`);
    }

    // 2. Validate KaTeX and check for bogus content
    let katexErrors = 0;
    let bogusFound = 0;
    let invalidMarks = 0;
    let invalidOptions = 0;

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
        }
      }
    }

    const subtopicCounts = {};

    allQuestions.forEach((q, idx) => {
      const label = `Q${idx + 1} (${q._id})`;
      subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

      if (q.marks !== 4 || q.negativeMarks !== 1) {
        invalidMarks++;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        invalidOptions++;
      }

      // Check bogus keywords
      const fullText = (q.question + " " + q.options.join(" ") + " " + (q.explanation || "")).toLowerCase();
      for (const kw of BOGUS_KEYWORDS) {
        if (fullText.includes(kw)) {
          console.error(`Bogus keyword "${kw}" found in ${label}!`);
          bogusFound++;
        }
      }

      testKatex(q.question, `${label} question`);
      (q.options || []).forEach((opt, oIdx) => testKatex(opt, `${label} opt${oIdx + 1}`));
      testKatex(q.explanation, `${label} explanation`);
    });

    console.log("\nSubtopic distribution:");
    Object.keys(subtopicCounts).sort().forEach(st => {
      console.log(`  - ${st}: ${subtopicCounts[st]}`);
    });

    console.log(`\nValidation Metrics:`);
    console.log(`- KaTeX Errors: ${katexErrors}`);
    console.log(`- Bogus Keywords Found: ${bogusFound}`);
    console.log(`- Invalid Marks (not 4/-1): ${invalidMarks}`);
    console.log(`- Invalid Options (not array of 4): ${invalidOptions}`);

    // 3. Test Paper Reference Audit
    console.log("\n--- Checking Referencing Test Papers ---");
    const questionIdSet = new Set(allQuestions.map(q => q._id.toString()));

    const allPapers = await tp.find({}).toArray();
    let referencingPapers = 0;
    let brokenRefs = 0;

    for (const paper of allPapers) {
      let qIds = [];
      if (Array.isArray(paper.questions)) {
        qIds = paper.questions.map(q => (q && q._id ? q._id : (q && q.questionId ? q.questionId : q))).map(id => id ? id.toString() : '');
      } else if (Array.isArray(paper.sections)) {
        for (const sec of paper.sections) {
          if (Array.isArray(sec.questions)) {
            const ids = sec.questions.map(q => (q && q._id ? q._id : (q && q.questionId ? q.questionId : q))).map(id => id ? id.toString() : '');
            qIds.push(...ids);
          }
        }
      }
      const matched = qIds.filter(id => questionIdSet.has(id));
      if (matched.length > 0) {
        referencingPapers++;
        // Verify every matched ID actually exists in the database
        const missingInDb = [];
        for (const mid of matched) {
          const doc = await qb.findOne({ _id: new ObjectId(mid) });
          if (!doc) {
            missingInDb.push(mid);
            brokenRefs++;
          }
        }
        console.log(`Paper "${paper.title || paper.name}" (${paper._id}): ${matched.length} questions from Human Physiology. Missing: ${missingInDb.length}`);
      }
    }

    console.log(`\nTest Paper Summary:`);
    console.log(`- Total Referencing Test Papers: ${referencingPapers}`);
    console.log(`- Broken Question References: ${brokenRefs}`);

    console.log("\n==================================");
    if (katexErrors === 0 && bogusFound === 0 && invalidMarks === 0 && brokenRefs === 0) {
      console.log("CHAPTER AUDIT PASSED WITH 100% PERFECT INTEGRITY!");
    } else {
      console.error("CHAPTER AUDIT FOUND ISSUES!");
      process.exit(1);
    }
    console.log("==================================");

  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

main().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
