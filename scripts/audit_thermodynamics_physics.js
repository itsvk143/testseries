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

const BOGUS_KEYWORDS = [
  "bronsted", "lewis acid", "lewis base", "cannizzaro", "aldol", "markovnikov",
  "anti-markovnikov", "grignard", "carbanion", "carbocation", "sn1", "sn2",
  "chirality", "enantiomer", "rate constant k", "order of reaction", "pseudo first order",
  "electrophile", "nucleophile", "solvation energy", "lattice enthalpy", "hydration energy"
];

function testLatex(str, id, errList) {
  if (!str) return;
  const regex = /\$([^$]+)\$/g;
  let m;
  while ((m = regex.exec(str)) !== null) {
    try {
      katex.renderToString(m[1], { throwOnError: true });
    } catch (e) {
      errList.push({ id, formula: m[1], error: e.message });
    }
  }
}

async function runAudit() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB for Comprehensive Audit\n");

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  // 1. Fetch Physics Thermodynamics questions
  const physThermo = await qb.find({ subject: "Physics", chapter: "Thermodynamics" }).toArray();
  console.log(`[1] Total Physics Thermodynamics questions: ${physThermo.length} (Expected: 433)`);

  // 2. Check Chemistry Thermodynamics was untouched
  const chemThermo = await qb.find({ subject: "Chemistry", chapter: { $regex: /thermo/i } }).toArray();
  console.log(`[2] Chemistry Thermodynamics questions count: ${chemThermo.length}`);

  // 3. Subtopic breakdown
  const subtopicCounts = physThermo.reduce((acc, d) => {
    const st = d.subTopic || d.subtopic;
    acc[st] = (acc[st] || 0) + 1;
    return acc;
  }, {});
  console.log(`[3] Subtopic distribution:`, subtopicCounts);

  // 4. Question Type breakdown
  const typeCounts = physThermo.reduce((acc, d) => {
    const t = d.type || d.questionType;
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});
  console.log(`[4] Type distribution:`, typeCounts);

  // 5. KaTeX and Bogus Keywords Audit
  const katexErrors = [];
  const bogusFound = [];
  let schemaIssues = 0;

  physThermo.forEach((d, idx) => {
    const id = d._id.toString();

    // KaTeX check
    testLatex(d.question, `${id}_q`, katexErrors);
    testLatex(d.explanation, `${id}_exp`, katexErrors);
    testLatex(d.solution, `${id}_sol`, katexErrors);
    if (d.options && Array.isArray(d.options)) {
      d.options.forEach((opt, oi) => testLatex(opt, `${id}_opt${oi}`, katexErrors));
    }

    // Bogus keywords check
    const textToCheck = `${d.question} ${d.explanation || ""} ${d.solution || ""} ${(d.options || []).join(" ")}`.toLowerCase();
    for (const kw of BOGUS_KEYWORDS) {
      if (textToCheck.includes(kw)) {
        bogusFound.push({ id, keyword: kw });
      }
    }

    // Schema verification
    if (!d.question || d.correctAnswer === undefined || d.correctAnswer === null || d.correctAnswer === "" || !d.type) {
      schemaIssues++;
    }
    if ((d.type === "MCQ" || d.type === "ASSERTION_REASON") && (!d.options || d.options.length < 4)) {
      schemaIssues++;
    }
    if (d.marks !== 4) {
      schemaIssues++;
    }
    if (d.type === "NUMERICAL" && d.negativeMarks !== 0) {
      schemaIssues++;
    }
    if ((d.type === "MCQ" || d.type === "ASSERTION_REASON") && d.negativeMarks !== 1) {
      schemaIssues++;
    }
  });

  console.log(`\n[5] Quality Checks:
  - KaTeX Errors: ${katexErrors.length}
  - Bogus Keywords Found: ${bogusFound.length}
  - Schema Issues: ${schemaIssues}`);

  if (katexErrors.length > 0) {
    console.error("Sample KaTeX errors:", katexErrors.slice(0, 5));
  }
  if (bogusFound.length > 0) {
    console.error("Bogus questions found:", bogusFound);
  }

  // 6. Test Papers Audit
  console.log(`\n[6] Test Papers Validation:`);
  const testPaperIds = [
    "jee-mains-CHAPTER-Physics-Thermodynamics-11",
    "jee-mains-SUBTOPIC-Physics-Thermal-equilibrium",
    "jee-mains-SUBTOPIC-Physics-laws-of-thermodynamics",
    "jee-mains-SUBTOPIC-Physics-isothermal-and-adiabatic-processes",
    "neet-CHAPTER-Physics-Thermodynamics-11",
    "neet-SUBTOPIC-Physics-Thermal-equilibrium",
    "neet-SUBTOPIC-Physics-laws-of-thermodynamics",
    "neet-SUBTOPIC-Physics-isothermal-and-adiabatic-processes"
  ];

  const docMap = new Map(physThermo.map(d => [d._id.toString(), d]));
  let testPaperErrors = 0;

  for (const tid of testPaperIds) {
    const paper = await tp.findOne({ testId: tid });
    if (!paper) {
      console.error(`Missing test paper: ${tid}`);
      testPaperErrors++;
      continue;
    }

    const qList = paper.questions || [];
    let brokenRefs = 0;
    let numInNeet = 0;

    qList.forEach(qid => {
      const qDoc = docMap.get(qid.toString());
      if (!qDoc) {
        brokenRefs++;
      } else {
        if (paper.exam === "NEET" && (qDoc.type === "NUMERICAL" || qDoc.questionType === "NUMERICAL")) {
          numInNeet++;
        }
      }
    });

    console.log(`- ${tid}:
      Total Questions: ${qList.length}
      Broken References: ${brokenRefs}
      Numerical in NEET: ${numInNeet}
      Total Marks: ${paper.totalMarks}
      Duration: ${paper.duration}`);

    if (brokenRefs > 0 || numInNeet > 0) {
      testPaperErrors++;
    }
  }

  await client.close();

  if (physThermo.length === 433 && katexErrors.length === 0 && bogusFound.length === 0 && schemaIssues === 0 && testPaperErrors === 0) {
    console.log("\n>>> ALL CHECKS PASSED PERFECTLY! <<<");
  } else {
    console.error("\n>>> AUDIT FAILED SOME CHECKS <<<");
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
