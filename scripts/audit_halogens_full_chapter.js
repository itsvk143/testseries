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
  return ok;
}

const BOGUS_PATTERNS = [
  /crystal field/i,
  /spectrochemical/i,
  /coordination entity/i,
  /E\^\\circ/i,
  /standard electrode potential/i,
  /fail to hold true/i,
  /advanced pattern generator/i
];

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const col = db.collection("questionBank");
  const testPapersCol = db.collection("testPapers");

  const chapter = "Organic Compounds Containing Halogens";
  console.log(`Auditing all questions for chapter: "${chapter}"...`);

  const allQuestions = await col.find({ chapter }).toArray();
  console.log(`Total questions found in DB: ${allQuestions.length}`);

  let katexErrors = 0;
  let bogusMatches = 0;
  let schemaErrors = 0;

  const subtopicCounts = {};

  for (const q of allQuestions) {
    const st = q.subTopic || q.subtopic || "Unknown";
    subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
    const loc = `ID: ${q._id} | ${st} | ${q.type}`;

    if (!testLatex(q.question, `${loc} -> question`)) katexErrors++;
    if (!testLatex(q.explanation, `${loc} -> explanation`)) katexErrors++;
    if (q.options && q.options.length > 0) {
      q.options.forEach((opt, idx) => {
        if (!testLatex(opt, `${loc} -> option ${idx}`)) katexErrors++;
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
    } else if (q.type === "NUMERICAL") {
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "") {
        console.error(`Missing correctAnswer for NUMERICAL at [${loc}]`);
        schemaErrors++;
      }
    }
  }

  console.log("\n--- SUBTOPIC DISTRIBUTION ---");
  for (const [st, cnt] of Object.entries(subtopicCounts)) {
    console.log(`- ${st}: ${cnt} questions`);
  }

  console.log("\n--- AUDIT RESULTS ---");
  console.log(`Total questions checked: ${allQuestions.length}`);
  console.log(`KaTeX formatting errors: ${katexErrors}`);
  console.log(`Bogus / irrelevant text matches: ${bogusMatches}`);
  console.log(`Schema / structural errors: ${schemaErrors}`);

  // Also audit test papers
  console.log("\n--- TEST PAPERS VALIDATION ---");
  const halogenPapers = await testPapersCol.find({
    $or: [
      { id: /halogens/i },
      { title: /halogens/i },
      { chapter: /Organic Compounds Containing Halogens/i }
    ]
  }).toArray();

  console.log(`Found ${halogenPapers.length} relevant test papers in testPapers collection:`);
  for (const p of halogenPapers) {
    console.log(`Paper: ${p.id || p._id} | Title: "${p.title}" | Q count in paper: ${p.questions ? p.questions.length : 0}`);
    if (p.questions && p.questions.length > 0) {
      const qIds = p.questions;
      const resolved = await col.find({ _id: { $in: qIds } }).toArray();
      console.log(`  -> Successfully resolved ${resolved.length}/${qIds.length} questions from questionBank.`);
    }
  }

  await client.close();
}

audit().catch(console.error);
