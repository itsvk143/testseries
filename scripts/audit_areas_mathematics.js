const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set!");
  process.exit(1);
}

const BOGUS_PATTERNS = [
  /field vector/i,
  /equilibrium shift in/i,
  /thermodynamic\/mechanistic/i,
  /metric tensor/i,
  /asymptotic behavior in area/i,
  /governing algebraic and functional conditions/i,
  /non-degenerate mathematical structure/i,
  /cross-harmonic oscillations/i,
  /calibrated with parameter values/i
];

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("=== COMPREHENSIVE AUDIT: Areas (Mathematics) ===\n");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // 1. Fetch all documents
  const allDocs = await qb.find({ subject: /math/i, chapter: "Areas" }).toArray();
  console.log(`1. Total Documents Found: ${allDocs.length} (Expected: 142)`);
  if (allDocs.length !== 142) {
    console.error("❌ Document count mismatch!");
  } else {
    console.log("✅ Total count matches exactly 142.");
  }

  // 2. Breakdown by source
  const genuine = allDocs.filter(d => d.source === "Question Bank");
  const replaced = allDocs.filter(d => d.source !== "Question Bank");
  console.log(`\n2. Breakdown by Source:
  - Genuine (Question Bank): ${genuine.length} (Expected: 22)
  - Replaced (JEE Mains PYQ): ${replaced.length} (Expected: 120)`);

  // 3. Subtopic breakdown
  console.log(`\n3. Subtopic Breakdown:`);
  const subtopics = [
    "Area under a curve",
    "Area between two curves",
    "Area bounded by parabolas, circles, and lines",
    "Symmetrical areas and piecewise integrations"
  ];

  for (const st of subtopics) {
    const docs = allDocs.filter(d => (d.subTopic || d.subtopic) === st);
    const mcqs = docs.filter(d => d.type === "MCQ");
    const ars = docs.filter(d => d.type === "ASSERTION_REASON");
    const nums = docs.filter(d => d.type === "NUMERICAL");
    console.log(`  - "${st}": Total=${docs.length}, MCQ=${mcqs.length}, AR=${ars.length}, NUM=${nums.length}`);
  }

  // 4. Check for bogus terms
  console.log(`\n4. Scanning for Bogus/Out-of-Syllabus Terms...`);
  let bogusMatches = 0;
  for (const doc of allDocs) {
    const textToScan = [
      doc.question,
      doc.explanation || "",
      doc.solution || "",
      ...(doc.options || [])
    ].join(" ");

    for (const pattern of BOGUS_PATTERNS) {
      if (pattern.test(textToScan)) {
        console.error(`❌ Bogus pattern match [${pattern}] in question ${doc._id}: "${doc.question.slice(0, 80)}"`);
        bogusMatches++;
      }
    }
  }
  if (bogusMatches === 0) {
    console.log("✅ 0 bogus/boilerplate terms found across all 142 questions!");
  } else {
    console.error(`❌ Found ${bogusMatches} bogus occurrences!`);
  }

  // 5. KaTeX Verification
  console.log(`\n5. KaTeX Syntax Verification across all 142 questions...`);
  let katexErrors = 0;
  function verifyKatex(str, docId, field) {
    if (!str) return;
    const regex = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
      const math = match[1] || match[2];
      try {
        katex.renderToString(math, { throwOnError: true });
      } catch (e) {
        console.error(`❌ KaTeX error in ${docId} [${field}]: math="${math}" -> ${e.message}`);
        katexErrors++;
      }
    }
  }

  for (const doc of allDocs) {
    verifyKatex(doc.question, doc._id, "question");
    verifyKatex(doc.explanation, doc._id, "explanation");
    verifyKatex(doc.solution, doc._id, "solution");
    if (doc.options) {
      doc.options.forEach((opt, idx) => verifyKatex(opt, doc._id, `options[${idx}]`));
    }
  }

  if (katexErrors === 0) {
    console.log("✅ 0 KaTeX syntax errors found across all 142 questions!");
  } else {
    console.error(`❌ Total KaTeX errors: ${katexErrors}`);
  }

  // 6. Duplicate check
  console.log(`\n6. Duplicate Question Content Verification...`);
  const seenTexts = new Map();
  let duplicates = 0;
  for (const doc of allDocs) {
    const normalized = doc.question
      .toLowerCase()
      .replace(/given below are two statements[^\n]*/g, "")
      .replace(/assertion a:?/g, "")
      .replace(/reason r:?/g, "")
      .replace(/[^a-z0-9]/g, "")
      .trim();

    if (seenTexts.has(normalized)) {
      console.warn(`⚠️ Possible duplicate: ${doc._id} matches ${seenTexts.get(normalized)}`);
      duplicates++;
    } else {
      seenTexts.set(normalized, doc._id);
    }
  }
  if (duplicates === 0) {
    console.log("✅ 0 duplicate questions found!");
  } else {
    console.log(`Found ${duplicates} duplicate warnings.`);
  }

  // 7. Scoring and Marks Verification
  console.log(`\n7. Scoring and Marks Verification...`);
  let scoringErrors = 0;
  for (const doc of allDocs) {
    if (doc.type === "NUMERICAL") {
      if (doc.marks !== 4 || doc.negativeMarks !== 0) {
        console.error(`❌ Invalid numerical marks in ${doc._id}: +${doc.marks}/-${doc.negativeMarks}`);
        scoringErrors++;
      }
    } else {
      if (doc.marks !== 4 || doc.negativeMarks !== 1) {
        console.error(`❌ Invalid MCQ/AR marks in ${doc._id}: +${doc.marks}/-${doc.negativeMarks}`);
        scoringErrors++;
      }
    }
  }
  if (scoringErrors === 0) {
    console.log("✅ All 142 questions have standard scoring: +4/-1 for MCQ/AR and +4/0 for NUMERICAL!");
  } else {
    console.error(`❌ Found ${scoringErrors} scoring discrepancies!`);
  }

  // 8. Test Papers Audit
  console.log(`\n8. Test Papers Audit...`);
  const test = await tp.findOne({ testId: "jee-mains-CHAPTER-Mathematics-Areas-12" });

  let testErrors = 0;
  if (!test) {
    console.error("❌ Test paper jee-mains-CHAPTER-Mathematics-Areas-12 not found!");
    testErrors++;
  } else {
    const docIdSet = new Set(allDocs.map(d => d._id.toString()));
    const missing = test.questions.filter(id => !docIdSet.has(id.toString()));
    const qDocs = allDocs.filter(d => test.questions.includes(d._id.toString()));
    const typeCounts = {};
    qDocs.forEach(q => { typeCounts[q.type] = (typeCounts[q.type] || 0) + 1; });

    console.log(`- Test: ${test.testId}`);
    console.log(`  Title: "${test.title}", Exam: "${test.exam || 'N/A'}"`);
    console.log(`  Questions Count: ${test.questions.length}, Marks: ${test.totalMarks}, Duration: ${test.duration}m`);
    console.log(`  Types breakdown:`, typeCounts);

    if (missing.length > 0) {
      console.error(`  ❌ Test has foreign/missing question IDs: ${missing.length}`);
      testErrors++;
    } else {
      console.log(`  ✅ All 25 question IDs belong 100% to Mathematics > Areas in questionBank.`);
    }

    if (test.questions.length !== 25) {
      console.error(`  ❌ JEE Main test must have 25 questions, got ${test.questions.length}`);
      testErrors++;
    }
    if (typeCounts.NUMERICAL !== 5) {
      console.error(`  ❌ JEE Main test must have exactly 5 NUMERICAL questions, got ${typeCounts.NUMERICAL}`);
      testErrors++;
    }
    if ((typeCounts.MCQ || 0) + (typeCounts.ASSERTION_REASON || 0) !== 20) {
      console.error(`  ❌ JEE Main test Section A must have exactly 20 questions, got ${typeCounts.MCQ + typeCounts.ASSERTION_REASON}`);
      testErrors++;
    }
  }

  if (testErrors === 0) {
    console.log("\n✅ Test paper verified with 100% valid structure, standard format, and zero foreign/broken links!");
  } else {
    console.error(`\n❌ Found ${testErrors} test paper issues!`);
  }

  console.log("\n=== AUDIT FINISHED ===");
  await client.close();
}

main().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
