const { MongoClient } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

function testLatex(text, location) {
  if (!text) return true;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+?)\$/g;
  let match;
  let ok = true;
  while ((match = regex.exec(text)) !== null) {
    const expr = match[1] || match[2];
    try {
      katex.renderToString(expr, { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX ERROR at [${location}]: "${expr}" -> ${e.message}`);
      ok = false;
    }
  }
  return { valid: ok };
}

const BOGUS_PATTERNS = [
  /crystal field/i,
  /spectrochemical/i,
  /coordination entity/i,
  /standard electrode potential/i,
  /fail to hold true/i,
  /heat capacity/i,
  /internal energy/i,
  /carnot/i,
  /reversible adiabatic/i,
  /measurement uncertainty/i,
  /least count/i,
  /vernier/i,
  /screw gauge/i
];

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("testseries");
  const col = db.collection("questionBank");
  const testPapersCol = db.collection("testPapers");

  const chapter = "Organic Compounds Containing Nitrogen";
  console.log(`Auditing all questions for chapter: "${chapter}"...`);

  const allQuestions = await col.find({ chapter }).toArray();
  console.log(`Total questions found in DB: ${allQuestions.length}`);

  let katexErrors = 0;
  let bogusMatches = 0;
  let schemaErrors = 0;

  const subtopicCounts = {};
  const typeCounts = {};

  for (const q of allQuestions) {
    const st = q.subTopic || q.subtopic || "Unknown";
    subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    const loc = `ID: ${q._id} | ${st} | ${q.type}`;

    if (!testLatex(q.question, `${loc} -> question`).valid) katexErrors++;
    if (!testLatex(q.explanation, `${loc} -> explanation`).valid) katexErrors++;
    if (q.options && q.options.length > 0) {
      q.options.forEach((opt, idx) => {
        if (!testLatex(opt, `${loc} -> option ${idx}`).valid) katexErrors++;
      });
    }

    // Check for bogus patterns
    for (const pat of BOGUS_PATTERNS) {
      if (pat.test(q.question) || pat.test(q.explanation || "")) {
        console.error(`Bogus pattern detected at [${loc}]: ${pat}`);
        bogusMatches++;
      }
    }

    // Schema validation
    if (q.type === "ASSERTION_REASON" || q.type === "MCQ") {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`Invalid options array at [${loc}]`);
        schemaErrors++;
      }
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "") {
        console.error(`Missing correctAnswer at [${loc}]`);
        schemaErrors++;
      }
      if (q.negativeMarks !== 1) {
        console.error(`Incorrect negativeMarks for ${q.type} at [${loc}]: got ${q.negativeMarks}`);
        schemaErrors++;
      }
    } else if (q.type === "NUMERICAL") {
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "") {
        console.error(`Missing correctAnswer for NUMERICAL at [${loc}]`);
        schemaErrors++;
      }
      if (q.negativeMarks !== 0) {
        console.error(`Incorrect negativeMarks for NUMERICAL at [${loc}]: got ${q.negativeMarks}`);
        schemaErrors++;
      }
    }
  }

  console.log("\n--- SUBTOPIC DISTRIBUTION ---");
  for (const [st, cnt] of Object.entries(subtopicCounts)) {
    console.log(`- ${st}: ${cnt} questions`);
  }

  console.log("\n--- QUESTION TYPE DISTRIBUTION ---");
  for (const [tp, cnt] of Object.entries(typeCounts)) {
    console.log(`- ${tp}: ${cnt} questions`);
  }

  console.log("\n--- AUDIT RESULTS ---");
  console.log(`Total questions checked: ${allQuestions.length}`);
  console.log(`KaTeX formatting errors: ${katexErrors}`);
  console.log(`Bogus / irrelevant text matches: ${bogusMatches}`);
  console.log(`Schema / structural errors: ${schemaErrors}`);

  // Also audit test papers referencing this chapter
  console.log("\n--- TEST PAPERS VALIDATION ---");
  const nitrogenPapers = await testPapersCol.find({
    $or: [
      { id: /nitrogen/i },
      { title: /nitrogen/i },
      { chapter: /Organic Compounds Containing Nitrogen/i }
    ]
  }).toArray();

  console.log(`Found ${nitrogenPapers.length} relevant test papers directly matching nitrogen criteria:`);
  for (const p of nitrogenPapers) {
    console.log(`\nPaper: ${p.id || p._id} | Title: "${p.title}" | Exam: ${p.exam || "N/A"} | Q count: ${p.questions ? p.questions.length : 0}`);
    if (p.questions && p.questions.length > 0) {
      const qIds = p.questions;
      const resolved = await col.find({ _id: { $in: qIds } }).toArray();
      console.log(`  -> Successfully resolved ${resolved.length}/${qIds.length} questions from questionBank.`);
      
      // Print first 3 questions as sample check
      console.log(`  Sample Questions:`);
      resolved.slice(0, 3).forEach((rq, rIdx) => {
        console.log(`   [${rIdx + 1}] (${rq.type}) ${rq.question.substring(0, 80)}...`);
      });
    }
  }

  // Also verify all 17 referencing test papers
  const allPaperIds = allQuestions.map(q => q._id);
  const referencingPapers = await testPapersCol.find({
    questions: { $in: allPaperIds }
  }).toArray();

  console.log(`\nFound ${referencingPapers.length} test papers in DB referencing any question in this chapter.`);
  let allResolved = true;
  for (const rp of referencingPapers) {
    const qIds = rp.questions || [];
    const countInBank = await col.countDocuments({ _id: { $in: qIds } });
    if (countInBank !== qIds.length) {
      console.error(`Paper ${rp._id} ("${rp.title}") missing resolved questions: ${countInBank}/${qIds.length}`);
      allResolved = false;
    }
  }
  if (allResolved) {
    console.log(`All ${referencingPapers.length} referencing test papers have 100% resolved questions!`);
  }

  await client.close();
  console.log("\nDatabase connection closed.");
}

audit().catch(console.error);
