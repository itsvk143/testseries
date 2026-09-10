const { MongoClient } = require("mongodb");
const katex = require("katex");
require("dotenv").config({ path: ".env.local" });

function extractLatex(text) {
  if (!text || typeof text !== "string") return [];
  const matches = [];
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(text)) !== null) {
    const expr = match[1] || match[2];
    if (expr && expr.trim()) {
      matches.push(expr.trim());
    }
  }
  return matches;
}

const BOGUS_PATTERNS = [
  /thermodynamic/i,
  /equilibrium shift/i,
  /metric tensor/i,
  /asymptotic behavior/i,
  /riemann sum/i,
  /entropy/i,
  /adiabatic/i,
  /carnot/i,
  /ideal gas/i,
  /calorimet/i,
  /consider the summation or limit/i
];

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const qb = db.collection("questionBank");
    const tp = db.collection("testPapers");

    console.log("=== COMPREHENSIVE AUDIT: 3D GEOMETRY MATHEMATICS ===");
    const docs = await qb.find({ subject: /math/i, chapter: /3d geometry/i }).toArray();
    console.log(`Total documents found: ${docs.length}`);

    if (docs.length !== 158) {
      console.error(`ERROR: Expected 158 documents, got ${docs.length}`);
    }

    let bogusCount = 0;
    let katexErrors = 0;
    let scoringErrors = 0;
    let duplicates = 0;
    const seenTexts = new Map();
    const subtopicDist = {};
    const typeDist = {};

    docs.forEach((q, idx) => {
      const st = q.subTopic || "MISSING";
      subtopicDist[st] = (subtopicDist[st] || 0) + 1;
      const t = q.type || q.questionType;
      typeDist[t] = (typeDist[t] || 0) + 1;

      // 1. Check for Bogus Content
      const fullText = `${q.question} ${q.explanation} ${(q.options || []).join(" ")}`;
      for (const pattern of BOGUS_PATTERNS) {
        if (pattern.test(fullText)) {
          console.error(`  [#${idx} - ${q._id}] Bogus keyword match: ${pattern} in "${q.subTopic}"`);
          bogusCount++;
          break;
        }
      }

      // 2. Duplicate Check
      const normalized = q.question
        .toLowerCase()
        .replace(/given below are two statements[^\n]*/g, "")
        .replace(/assertion a:?/g, "")
        .replace(/reason r:?/g, "")
        .replace(/[^a-z0-9]/g, "")
        .trim();

      if (seenTexts.has(normalized)) {
        console.warn(`  ⚠️ Duplicate: [#${idx} - ${q._id}] matches [${seenTexts.get(normalized)}]`);
        duplicates++;
      } else {
        seenTexts.set(normalized, `#${idx} - ${q._id}`);
      }

      // 3. Scoring Check
      if (q.type === "NUMERICAL") {
        if (q.marks !== 4 || q.negativeMarks !== 0) {
          console.error(`  [#${idx} - ${q._id}] Bad NUM scoring: marks=${q.marks}, neg=${q.negativeMarks}`);
          scoringErrors++;
        }
      } else {
        if (q.marks !== 4 || q.negativeMarks !== 1) {
          console.error(`  [#${idx} - ${q._id}] Bad MCQ/AR scoring: marks=${q.marks}, neg=${q.negativeMarks}`);
          scoringErrors++;
        }
      }

      // 4. KaTeX Check
      const snippets = [
        ...extractLatex(q.question),
        ...extractLatex(q.explanation),
        ...(q.options ? q.options.flatMap(extractLatex) : [])
      ];

      for (const math of snippets) {
        try {
          katex.renderToString(math, { throwOnError: true });
        } catch (err) {
          console.error(`  [#${idx} - ${q._id}] KaTeX Error: "$${math}$" -> ${err.message}`);
          katexErrors++;
        }
      }
    });

    console.log("\nSubtopic Breakdown:", JSON.stringify(subtopicDist, null, 2));
    console.log("Question Type Breakdown:", JSON.stringify(typeDist, null, 2));
    console.log("\n--- Integrity Results ---");
    console.log(`Bogus boilerplate questions detected: ${bogusCount}`);
    console.log(`KaTeX parsing errors: ${katexErrors}`);
    console.log(`Scoring discrepancies: ${scoringErrors}`);
    console.log(`Duplicate questions: ${duplicates}`);

    // Test Paper Audits
    console.log("\n--- Test Paper Audits ---");
    const testIds = [
      "jee-mains-CHAPTER-Mathematics-3D-Geometry-12",
      "jee-mains-SUBTOPIC-Mathematics-Direction-cosines-and-ratios",
      "jee-mains-SUBTOPIC-Mathematics-angle-between-two-lines"
    ];

    const bankMap = new Map(docs.map(d => [d._id.toString(), d]));

    for (const tid of testIds) {
      const paper = await tp.findOne({ testId: tid });
      if (!paper) {
        console.error(`Test paper ${tid} not found!`);
        continue;
      }
      console.log(`\nPaper: ${paper.testId} (Total: ${paper.questions?.length})`);
      let pureCount = 0;
      let foreignCount = 0;
      let numCount = 0;
      let mcqCount = 0;

      for (const qid of paper.questions || []) {
        const doc = bankMap.get(qid.toString());
        if (doc) {
          pureCount++;
          if (doc.type === "NUMERICAL") numCount++;
          else mcqCount++;
        } else {
          foreignCount++;
        }
      }

      console.log(`  Pure 3D Geometry questions: ${pureCount} / ${paper.questions?.length}`);
      console.log(`  Foreign questions: ${foreignCount}`);
      console.log(`  Section A (MCQ/AR): ${mcqCount}, Section B (NUMERICAL): ${numCount}`);
      if (foreignCount > 0) {
        console.error(`  ERROR: Paper contains ${foreignCount} foreign questions!`);
      }
    }

    console.log("\n=======================================================");
    if (bogusCount === 0 && katexErrors === 0 && scoringErrors === 0 && duplicates === 0) {
      console.log("✅ AUDIT PASSED: Chapter 3D Geometry is 100% verified and pristine!");
    } else {
      console.error("❌ AUDIT FAILED: Please fix reported issues.");
      process.exit(1);
    }
    console.log("=======================================================\n");

  } finally {
    await client.close();
  }
}

audit().catch(err => {
  console.error("Audit run error:", err);
  process.exit(1);
});
