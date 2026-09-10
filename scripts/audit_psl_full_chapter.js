const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

const EXPECTED_SUBTOPICS = [
  "Elasticity (Hooke's law, Young's modulus)",
  "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)",
  "Surface tension, surface energy, and capillarity",
  "Thermal expansion and calorimetry",
  "Stefan's law of radiation"
];

function testLatex(str, desc) {
  if (!str) return [];
  const errors = [];
  const regex = /\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errors.push({ desc, math: match[1], error: e.message });
    }
  }
  return errors;
}

async function runAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  console.log("==================================================");
  console.log("  PROPERTIES OF SOLIDS AND LIQUIDS - FULL AUDIT   ");
  console.log("==================================================\n");

  const questions = await db.collection("questionBank").find({
    chapter: "Properties of Solids and Liquids",
    subject: "Physics"
  }).toArray();

  console.log(`Total questions found in QuestionBank: ${questions.length}`);

  let katexErrors = [];
  let bogusKeywordsFound = 0;
  let invalidMarks = 0;
  let invalidOptions = 0;
  let invalidAnswer = 0;
  const subtopicCounts = {};
  const typeCounts = {};
  const sourceCounts = {};

  const bogusRegex = /lorem ipsum|synthetic|placeholder|test question|sample question|as per pattern/i;

  questions.forEach(q => {
    // subtopic count
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    sourceCounts[q.source] = (sourceCounts[q.source] || 0) + 1;

    // KaTeX check
    katexErrors.push(...testLatex(q.question, `Q[${q._id}] question`));
    katexErrors.push(...testLatex(q.explanation, `Q[${q._id}] explanation`));
    if (q.options && Array.isArray(q.options)) {
      q.options.forEach((opt, idx) => {
        katexErrors.push(...testLatex(opt, `Q[${q._id}] opt[${idx}]`));
      });
    }

    // Bogus check
    if (bogusRegex.test(q.question) || bogusRegex.test(q.explanation)) {
      bogusKeywordsFound++;
      console.warn(`Bogus content found in Q[${q._id}]: ${q.question.slice(0, 60)}...`);
    }

    // Marks check
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      invalidMarks++;
    }

    // Options check
    if (q.type === "MCQ" || q.type === "ASSERTION_REASON") {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        invalidOptions++;
      }
      if (typeof q.correctAnswer !== "number" || q.correctAnswer < 0 || q.correctAnswer > 3) {
        invalidAnswer++;
      }
    } else if (q.type === "NUMERICAL") {
      if (q.correctAnswer === undefined || q.correctAnswer === null || q.correctAnswer === "") {
        invalidAnswer++;
      }
    }
  });

  console.log("\n--- Subtopic Distribution ---");
  for (const st of EXPECTED_SUBTOPICS) {
    console.log(`  ${st}: ${subtopicCounts[st] || 0}`);
  }

  console.log("\n--- Question Type Distribution ---");
  console.log(typeCounts);

  console.log("\n--- Source Distribution ---");
  console.log(sourceCounts);

  console.log("\n--- Quality & Validation Checks ---");
  console.log(`KaTeX Errors: ${katexErrors.length}`);
  if (katexErrors.length > 0) {
    console.log("Sample KaTeX errors:", katexErrors.slice(0, 5));
  }
  console.log(`Bogus Keywords: ${bogusKeywordsFound}`);
  console.log(`Invalid Marks (marks != 4 or neg != 1): ${invalidMarks}`);
  console.log(`Invalid Options: ${invalidOptions}`);
  console.log(`Invalid Answers: ${invalidAnswer}`);

  console.log("\n--- Test Papers Validation ---");
  const testIds = [
    "jee-mains-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11",
    "jee-mains-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus)",
    "jee-mains-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity)",
    "neet-CHAPTER-Physics-Properties-of-Solids-and-Liquids-11",
    "neet-SUBTOPIC-Physics-Elasticity-(Hooke’s-law,-Young’s-modulus)",
    "neet-SUBTOPIC-Physics-fluid-mechanics-(Pascal’s-law,-Bernoulli’s-principle,-viscosity)"
  ];

  for (const tid of testIds) {
    const test = await db.collection("testPapers").findOne({ testId: tid });
    if (!test) {
      console.warn(`Test paper ${tid} NOT FOUND!`);
      continue;
    }
    const qIds = (test.questions || []).map(id => typeof id === "string" ? new ObjectId(id) : id);
    const resolvedDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
    const resolvedMap = new Map(resolvedDocs.map(d => [d._id.toString(), d]));

    const missingIds = qIds.filter(id => !resolvedMap.has(id.toString()));
    const nonChapterDocs = resolvedDocs.filter(d => d.chapter !== "Properties of Solids and Liquids");

    const testTypeCounts = {};
    const testSubtopicCounts = {};
    resolvedDocs.forEach(d => {
      testTypeCounts[d.type] = (testTypeCounts[d.type] || 0) + 1;
      testSubtopicCounts[d.subTopic] = (testSubtopicCounts[d.subTopic] || 0) + 1;
    });

    console.log(`\nTest [${tid}]:`);
    console.log(`  Total Questions: ${qIds.length} (resolved: ${resolvedDocs.length}, missing: ${missingIds.length})`);
    console.log(`  Chapter purity: ${resolvedDocs.length - nonChapterDocs.length}/${resolvedDocs.length} in "Properties of Solids and Liquids"`);
    console.log(`  Types:`, testTypeCounts);
    console.log(`  Subtopics:`, testSubtopicCounts);
  }

  await client.close();
  console.log("\n==================================================");
  console.log("                 AUDIT COMPLETE                   ");
  console.log("==================================================");
}

runAudit().catch(console.error);
