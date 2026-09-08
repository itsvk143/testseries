const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');
const katex = require('katex');

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI not found in .env.local");
  process.exit(1);
}

function testKatex(str, label, errCollection) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      errCollection.push({ label, snippet: match[1], error: e.message });
    }
  }
}

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // 1. Fetch all questions in the chapter
    const filter = { subject: "Zoology", chapter: "Biology and Human Welfare" };
    const allQuestions = await qb.find(filter).toArray();
    console.log(`\n========================================`);
    console.log(`TOTAL QUESTIONS IN CHAPTER: ${allQuestions.length}`);
    console.log(`========================================`);

    const subtopicCounts = {};
    const typeCounts = {};
    const marksAudit = { correctMarks: 0, incorrectMarks: 0 };
    const katexErrors = [];

    allQuestions.forEach((q, idx) => {
      // Subtopic tracking
      subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

      // Type tracking
      typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;

      // Marks validation
      if (q.marks === 4 && q.negativeMarks === 1) {
        marksAudit.correctMarks++;
      } else {
        marksAudit.incorrectMarks++;
      }

      // KaTeX audit
      const qLoc = `Q${idx + 1} (${q._id})`;
      testKatex(q.question, `${qLoc} question`, katexErrors);
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => testKatex(opt, `${qLoc} opt${oIdx + 1}`, katexErrors));
      }
      testKatex(q.explanation, `${qLoc} explanation`, katexErrors);
    });

    console.log("\n--- Subtopics Breakdown ---");
    Object.keys(subtopicCounts).sort().forEach(st => {
      console.log(`  "${st}": ${subtopicCounts[st]}`);
    });

    console.log("\n--- Question Types Breakdown ---");
    Object.keys(typeCounts).sort().forEach(t => {
      console.log(`  ${t}: ${typeCounts[t]}`);
    });

    console.log("\n--- Marks Audit ---");
    console.log(`  Correct (+4, -1): ${marksAudit.correctMarks}`);
    console.log(`  Incorrect marks: ${marksAudit.incorrectMarks}`);

    console.log("\n--- KaTeX Audit ---");
    console.log(`  Total KaTeX Errors: ${katexErrors.length}`);
    if (katexErrors.length > 0) {
      console.error("KaTeX error samples:", katexErrors.slice(0, 5));
    }

    // 2. Audit Test Papers referencing this chapter
    console.log("\n--- Auditing Test Papers Referencing This Chapter ---");
    const questionIdSet = new Set(allQuestions.map(q => q._id.toString()));

    const allTestPapers = await tp.find({}).toArray();
    let referencingPapersCount = 0;
    let totalQuestionsReferenced = 0;
    let missingReferences = 0;

    for (const paper of allTestPapers) {
      const pQuestions = paper.questions || [];
      const matchingIds = pQuestions.filter(qid => {
        const idStr = qid.toString();
        return questionIdSet.has(idStr);
      });

      if (matchingIds.length > 0) {
        referencingPapersCount++;
        totalQuestionsReferenced += matchingIds.length;

        // Check if any referenced questions don't exist in questionBank
        for (const qid of matchingIds) {
          const exists = await qb.findOne({ _id: new ObjectId(qid) });
          if (!exists) {
            missingReferences++;
            console.error(`Broken reference: Test Paper "${paper.title}" (${paper._id}) references non-existent Question ${qid}`);
          }
        }

        console.log(`  Test Paper: "${paper.title}" (ID: ${paper._id}) - References: ${matchingIds.length}/${pQuestions.length} questions from this chapter.`);
      }
    }

    console.log("\n==========================================");
    console.log(`TEST PAPERS AUDIT RESULT:`);
    console.log(`  Total Test Papers Referencing Chapter: ${referencingPapersCount}`);
    console.log(`  Total Questions Referenced in Papers: ${totalQuestionsReferenced}`);
    console.log(`  Missing / Broken References: ${missingReferences}`);
    console.log("==========================================");

    if (allQuestions.length === 1490 && marksAudit.incorrectMarks === 0 && katexErrors.length === 0 && missingReferences === 0) {
      console.log("\nALL VERIFICATIONS PASSED WITH 100% SUCCESS!");
    } else {
      console.error("\nAUDIT COMPLETED WITH ISSUES!");
      process.exit(1);
    }

  } catch (err) {
    console.error("Audit error:", err);
    process.exit(1);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

main();
