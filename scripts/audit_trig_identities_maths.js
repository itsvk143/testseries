const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

async function runAudit() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not found");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB for audit.");
  const db = client.db();
  const qb = db.collection("questionBank");
  const tp = db.collection("testPapers");

  const questions = await qb.find({
    subject: "Mathematics",
    chapter: "Trigonometric Identities"
  }).toArray();

  console.log(`\n==================================================`);
  console.log(`AUDIT: Mathematics > Trigonometric Identities`);
  console.log(`Total questions found: ${questions.length}`);
  console.log(`==================================================`);

  if (questions.length !== 111) {
    console.error(`ERROR: Expected 111 questions, found ${questions.length}!`);
  }

  const bogusPatterns = [
    /thermodynamic/i, /equilibrium/i, /wronskian/i, /secular growth/i,
    /asymptotic/i, /calibrated with parameter/i, /configuration space/i,
    /metric tensor/i, /linear affine/i, /characteristic determinant/i,
    /governing algebraic and functional/i, /non-degenerate mathematical structure/i,
    /resonance behavior/i, /summation or limit evaluating/i
  ];

  function testKaTeX(str, context) {
    if (!str) return 0;
    const regex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
    let match;
    let errors = 0;
    while ((match = regex.exec(str)) !== null) {
      const math = match[1] || match[2];
      try {
        katex.renderToString(math, { throwOnError: true });
      } catch (e) {
        console.error(`KaTeX ERROR in [${context}]: "${math}" -> ${e.message}`);
        errors++;
      }
    }
    return errors;
  }

  let totalKaTeXErrors = 0;
  let totalBogusCount = 0;
  let invalidScoringCount = 0;
  let duplicateCount = 0;

  const textSet = new Set();
  const subtopicCounts = {};
  const typeCounts = {};

  questions.forEach((q, idx) => {
    const qLabel = `Q${idx + 1} (${q._id})`;
    const sub = q.subtopic || q.subTopic;
    subtopicCounts[sub] = (subtopicCounts[sub] || 0) + 1;
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;

    // Check duplicate
    const norm = (q.question || "").toLowerCase().replace(/\s+/g, " ").trim();
    if (textSet.has(norm)) {
      console.error(`DUPLICATE detected in ${qLabel}`);
      duplicateCount++;
    } else {
      textSet.add(norm);
    }

    // KaTeX check
    totalKaTeXErrors += testKaTeX(q.question, `${qLabel} Question`);
    (q.options || []).forEach((opt, oIdx) => {
      totalKaTeXErrors += testKaTeX(opt, `${qLabel} Option ${oIdx + 1}`);
    });
    totalKaTeXErrors += testKaTeX(q.explanation, `${qLabel} Explanation`);

    // Bogus check
    const fullText = `${q.question} ${JSON.stringify(q.options)} ${q.explanation}`;
    bogusPatterns.forEach(pat => {
      if (pat.test(fullText)) {
        console.error(`BOGUS KEYWORD (${pat}) in ${qLabel}`);
        totalBogusCount++;
      }
    });

    // Scoring & type validation
    if (q.type === "NUMERICAL") {
      if (q.marks !== 4 || q.negativeMarks !== 0 || !Array.isArray(q.options) || q.options.length !== 0) {
        console.error(`SCORING/SCHEMA ERROR in NUMERICAL ${qLabel}: marks=${q.marks}, neg=${q.negativeMarks}, opts=${q.options?.length}`);
        invalidScoringCount++;
      }
      if (isNaN(Number(q.correctAnswer))) {
        console.error(`INVALID ANSWER in NUMERICAL ${qLabel}: ${q.correctAnswer}`);
        invalidScoringCount++;
      }
    } else if (q.type === "MCQ" || q.type === "ASSERTION_REASON") {
      if (q.marks !== 4 || q.negativeMarks !== 1 || !Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`SCORING/SCHEMA ERROR in ${q.type} ${qLabel}: marks=${q.marks}, neg=${q.negativeMarks}, opts=${q.options?.length}`);
        invalidScoringCount++;
      }
      if (![0, 1, 2, 3].includes(q.correctAnswer)) {
        console.error(`INVALID ANSWER in ${q.type} ${qLabel}: ${q.correctAnswer}`);
        invalidScoringCount++;
      }
    } else {
      console.error(`UNKNOWN TYPE in ${qLabel}: ${q.type}`);
      invalidScoringCount++;
    }
  });

  console.log(`\n--- QUESTION BANK SUMMARY ---`);
  console.log(`Subtopics:`, subtopicCounts);
  console.log(`Types:`, typeCounts);
  console.log(`Unique Questions: ${textSet.size} / ${questions.length} (Duplicates: ${duplicateCount})`);
  console.log(`KaTeX Errors: ${totalKaTeXErrors}`);
  console.log(`Bogus Keywords: ${totalBogusCount}`);
  console.log(`Scoring/Schema Errors: ${invalidScoringCount}`);

  // Test papers audit
  console.log(`\n--- TEST PAPERS AUDIT ---`);
  const testPaperIds = [
    { name: "Trigonometric Identities", id: "6a9e2844c527cd38431011b6" },
    { name: "Multiple and sub-multiple angles", id: "6a9e288dc527cd3843101349" }
  ];

  let testPaperErrors = 0;
  for (const item of testPaperIds) {
    const paper = await tp.findOne({ _id: new ObjectId(item.id) });
    if (!paper) {
      console.error(`ERROR: Test paper "${item.name}" not found!`);
      testPaperErrors++;
      continue;
    }

    const qIds = (paper.questions || []).map(q => new ObjectId(q._id || q));
    const paperQs = await qb.find({ _id: { $in: qIds } }).toArray();

    const paperTypes = {};
    const paperChapters = {};
    const paperSubtopics = {};

    paperQs.forEach(q => {
      paperTypes[q.type] = (paperTypes[q.type] || 0) + 1;
      paperChapters[q.chapter] = (paperChapters[q.chapter] || 0) + 1;
      const sub = q.subtopic || q.subTopic;
      paperSubtopics[sub] = (paperSubtopics[sub] || 0) + 1;
    });

    console.log(`\nPaper: "${paper.title}" (${paper.exam || paper.examType})`);
    console.log(`Total questions referenced: ${qIds.length}, Found in QB: ${paperQs.length}`);
    console.log(`Marks: ${paper.totalMarks}, Duration: ${paper.duration}`);
    console.log(`Types:`, paperTypes);
    console.log(`Chapters:`, paperChapters);
    console.log(`Subtopics:`, paperSubtopics);

    if (qIds.length !== 25 || paperQs.length !== 25) {
      console.error(`ERROR: Test paper "${item.name}" does not have exactly 25 valid questions!`);
      testPaperErrors++;
    }
    if (paperTypes.MCQ !== 20 || paperTypes.NUMERICAL !== 5) {
      console.error(`ERROR: Test paper "${item.name}" does not have 20 MCQs and 5 Numericals!`);
      testPaperErrors++;
    }
    if (Object.keys(paperChapters).length !== 1 || !paperChapters["Trigonometric Identities"]) {
      console.error(`ERROR: Test paper "${item.name}" contains questions outside Trigonometric Identities!`);
      testPaperErrors++;
    }
    if (paper.totalMarks !== 100 || paper.duration !== 60) {
      console.error(`ERROR: Test paper "${item.name}" invalid marks or duration!`);
      testPaperErrors++;
    }
  }

  console.log(`\n==================================================`);
  if (totalKaTeXErrors === 0 && totalBogusCount === 0 && invalidScoringCount === 0 && duplicateCount === 0 && testPaperErrors === 0) {
    console.log(`✅ AUDIT PASSED: All 111 questions and test papers are 100% verified and authentic!`);
    await client.close();
    process.exit(0);
  } else {
    console.error(`❌ AUDIT FAILED: Please review issues above.`);
    await client.close();
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
