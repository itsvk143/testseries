require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");
const katex = require("katex");

function extractMathChunks(text) {
  if (!text) return [];
  const chunks = [];
  const regex = /\$\$([\s\S]+?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    chunks.push(match[1] || match[2]);
  }
  return chunks;
}

function testKatex(mathStr) {
  try {
    katex.renderToString(mathStr, { throwOnError: true, displayMode: false });
    return null;
  } catch (err) {
    return err.message;
  }
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const questionBank = db.collection("questionBank");
  const testPapers = db.collection("testPapers");

  console.log("================ POST-FLIGHT AUDIT: CIRCLES ================");

  // 1. Total count
  const total = await questionBank.countDocuments({ chapter: "Circles", subject: "Mathematics" });
  console.log(`Total questions in questionBank for Circles: ${total}`);
  if (total !== 222) {
    console.error(`ERROR: Expected 222 questions, found ${total}`);
    process.exit(1);
  }

  // 2. Breakdown by subtopic & source
  const subtopicCounts = await questionBank
    .aggregate([
      { $match: { chapter: "Circles", subject: "Mathematics" } },
      { $group: { _id: { subtopic: "$subtopic", source: "$source" }, count: { $sum: 1 } } },
      { $sort: { "_id.subtopic": 1, "_id.source": 1 } }
    ])
    .toArray();

  console.log("\nDistribution by subtopic & source:");
  subtopicCounts.forEach((s) => {
    console.log(` - Subtopic: "${s._id.subtopic}" | Source: "${s._id.source}" -> ${s.count}`);
  });

  // 3. Check for bogus terms
  const bogusKeywords = ["thermodynamic", "macroscopic", "kelvin", "ideal gas", "entropy", "conservation laws in Mathematics provide"];
  let bogusCount = 0;
  for (const kw of bogusKeywords) {
    const found = await questionBank.countDocuments({
      chapter: "Circles",
      subject: "Mathematics",
      $or: [
        { question: { $regex: kw, $options: "i" } },
        { explanation: { $regex: kw, $options: "i" } }
      ]
    });
    if (found > 0) {
      console.error(`ERROR: Found ${found} questions matching bogus keyword "${kw}"`);
      bogusCount += found;
    }
  }
  if (bogusCount === 0) {
    console.log("\n0 bogus / irrelevant keywords found across all 222 questions.");
  } else {
    process.exit(1);
  }

  // 4. Duplicate questions check
  const allDocs = await questionBank.find({ chapter: "Circles", subject: "Mathematics" }).toArray();
  const seenTexts = new Map();
  let duplicates = 0;

  allDocs.forEach((doc, idx) => {
    const norm = doc.question.replace(/\s+/g, " ").trim();
    if (seenTexts.has(norm)) {
      console.error(`ERROR: Duplicate question found between doc ${doc._id} and doc ${seenTexts.get(norm)}: "${norm.substring(0, 60)}..."`);
      duplicates++;
    } else {
      seenTexts.set(norm, doc._id);
    }
  });
  console.log(`Duplicate question count: ${duplicates}`);
  if (duplicates > 0) process.exit(1);

  // 5. KaTeX rendering and marks validation
  let katexErrors = 0;
  let marksErrors = 0;

  allDocs.forEach((doc, idx) => {
    // Scoring check
    if (doc.type === "single_choice" || doc.type === "assertion_reason") {
      if (doc.marks !== 4 || doc.negativeMarks !== 1) {
        console.error(`Scoring error at doc ${doc._id}: ${doc.type} has +${doc.marks}/-${doc.negativeMarks}`);
        marksErrors++;
      }
    } else if (doc.type === "numerical") {
      if (doc.marks !== 4 || doc.negativeMarks !== 0) {
        console.error(`Scoring error at doc ${doc._id}: numerical has +${doc.marks}/-${doc.negativeMarks}`);
        marksErrors++;
      }
    }

    // KaTeX check
    const qMath = extractMathChunks(doc.question);
    for (const m of qMath) {
      const err = testKatex(m);
      if (err) {
        console.error(`KaTeX error in question of doc ${doc._id}: ${err}`);
        katexErrors++;
      }
    }
    if (doc.options) {
      doc.options.forEach((opt) => {
        const optMath = extractMathChunks(opt);
        for (const m of optMath) {
          const err = testKatex(m);
          if (err) {
            console.error(`KaTeX error in option of doc ${doc._id}: ${err}`);
            katexErrors++;
          }
        }
      });
    }
    const expMath = extractMathChunks(doc.explanation);
    for (const m of expMath) {
      const err = testKatex(m);
      if (err) {
        console.error(`KaTeX error in explanation of doc ${doc._id}: ${err}`);
        katexErrors++;
      }
    }
  });

  console.log(`KaTeX errors across all 222 documents: ${katexErrors}`);
  console.log(`Scoring errors across all 222 documents: ${marksErrors}`);
  if (katexErrors > 0 || marksErrors > 0) process.exit(1);

  // 6. Test Paper audit
  console.log("\nAuditing Chapter Test Paper 'Circles' (ID: 6a9e2844c527cd38431011b4)...");
  const testPaper = await testPapers.findOne({ _id: new ObjectId("6a9e2844c527cd38431011b4") });
  if (!testPaper) {
    console.error("Test paper not found!");
    process.exit(1);
  }
  console.log(`Test Paper title: "${testPaper.title}"`);
  console.log(`Total questions in test paper: ${testPaper.questions.length}`);
  console.log(`Total marks: ${testPaper.totalMarks}`);

  const qIds = testPaper.questions.map((q) => q.questionId);
  const referencedDocs = await questionBank.find({ _id: { $in: qIds } }).toArray();
  console.log(`Referenced documents in questionBank: ${referencedDocs.length}`);

  let nonCirclesCount = 0;
  referencedDocs.forEach((d) => {
    if (d.chapter !== "Circles" || d.subject !== "Mathematics") {
      console.error(`Foreign question in test paper: ID ${d._id}, chapter: ${d.chapter}, subject: ${d.subject}`);
      nonCirclesCount++;
    }
  });

  if (nonCirclesCount === 0) {
    console.log("Purity: 100% of test paper questions belong to Circles (0 foreign questions)!");
  } else {
    process.exit(1);
  }

  console.log("\nALL POST-FLIGHT AUDIT CHECKS PASSED WITH FLYING COLORS!");
  await client.close();
}

audit().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
