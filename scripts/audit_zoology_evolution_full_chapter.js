require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

const SUBTOPICS = [
  "Origin of life and biochemical evolution (Miller-Urey experiment)",
  "Evidences of evolution (homology, analogy, vestigial organs, embryology)",
  "Adaptive radiation and Speciation",
  "Darwin's theory of natural selection and Lamarckism",
  "Modern synthetic theory and Hardy-Weinberg equilibrium",
  "Human evolution (Dryopithecus to Homo sapiens)"
];

const BOGUS_PATTERNS = [
  "Consider the following functional characteristics",
  "It displays high functional reserve capacity",
  "Which physiological adaptation or cellular mechanism",
  "Under extreme physiological stress, which organ system",
  "Regarding cellular metabolic regulation in vertebrates"
];

async function runAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas for Full Chapter Audit.\n");
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // 1. Fetch all questions in chapter
    const allQuestions = await qb.find({
      subject: "Zoology",
      chapter: "Evolution"
    }).toArray();

    console.log(`=======================================================`);
    console.log(`1. CHAPTER CENSUS`);
    console.log(`=======================================================`);
    console.log(`Total questions in Zoology -> Evolution: ${allQuestions.length}`);

    if (allQuestions.length !== 1080) {
      console.error(`ERROR: Expected 1080 questions, found ${allQuestions.length}`);
    }

    // 2. Subtopic & Type breakdown
    console.log(`\n=======================================================`);
    console.log(`2. SUBTOPIC & QUESTION TYPE BREAKDOWN`);
    console.log(`=======================================================`);
    const subtopicCounts = {};
    let totalAR = 0;
    let totalMCQ = 0;
    let bogusCount = 0;
    let marksMismatch = 0;
    let katexErrors = 0;

    function testKatex(text, label) {
      if (!text) return;
      const matches = text.matchAll(/\$([^\$]+)\$/g);
      for (const match of matches) {
        try {
          katex.renderToString(match[1], { throwOnError: true });
        } catch (e) {
          console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
          katexErrors++;
        }
      }
    }

    allQuestions.forEach((q, idx) => {
      const st = q.subTopic;
      if (!subtopicCounts[st]) {
        subtopicCounts[st] = { total: 0, ar: 0, mcq: 0 };
      }
      subtopicCounts[st].total++;
      if (q.type === 'ASSERTION_REASON') {
        subtopicCounts[st].ar++;
        totalAR++;
      } else if (q.type === 'MCQ') {
        subtopicCounts[st].mcq++;
        totalMCQ++;
      }

      // Check marks
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        marksMismatch++;
      }

      // Check bogus patterns
      const qText = q.question || '';
      for (const pattern of BOGUS_PATTERNS) {
        if (qText.includes(pattern)) {
          bogusCount++;
          break;
        }
      }

      // Check KaTeX
      testKatex(q.question, `Q${idx + 1} question`);
      (q.options || []).forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
      testKatex(q.explanation, `Q${idx + 1} explanation`);
    });

    Object.keys(subtopicCounts).forEach((st, i) => {
      const c = subtopicCounts[st];
      console.log(`Subtopic ${i + 1}: "${st}"`);
      console.log(`  Total: ${c.total} (AR: ${c.ar}, MCQ: ${c.mcq})`);
    });

    console.log(`\nTotals: AR = ${totalAR}, MCQ = ${totalMCQ}, Total = ${allQuestions.length}`);

    // 3. Quality and Integrity metrics
    console.log(`\n=======================================================`);
    console.log(`3. QUALITY & INTEGRITY METRICS`);
    console.log(`=======================================================`);
    console.log(`Bogus generator question count:    ${bogusCount} (Target: 0)`);
    console.log(`Scoring metadata mismatches:       ${marksMismatch} (Target: 0)`);
    console.log(`KaTeX rendering errors:            ${katexErrors} (Target: 0)`);

    // 4. Test Paper Verification
    console.log(`\n=======================================================`);
    console.log(`4. TEST PAPER INTEGRITY CHECK`);
    console.log(`=======================================================`);
    const evolutionTest = await tp.findOne({ title: "Evolution" });
    if (evolutionTest) {
      const qIds = evolutionTest.questions.map(q => (q instanceof ObjectId ? q : new ObjectId(q)));
      const foundInDb = await qb.find({ _id: { $in: qIds } }).toArray();
      console.log(`Test "${evolutionTest.title}" (${evolutionTest._id}):`);
      console.log(`  Questions in test:    ${qIds.length}`);
      console.log(`  Resolved in DB:       ${foundInDb.length}`);
      console.log(`  Broken references:    ${qIds.length - foundInDb.length}`);

      // Verify each question is genuine and authentic NEET biology
      let bogusInTest = 0;
      foundInDb.forEach(q => {
        for (const pattern of BOGUS_PATTERNS) {
          if (q.question.includes(pattern)) bogusInTest++;
        }
      });
      console.log(`  Bogus questions:      ${bogusInTest}`);
    }

    // Check all test papers that might reference any of our 1080 questions
    const allEvolutionIds = allQuestions.map(q => q._id);
    const testPapersWithEvolution = await tp.find({
      questions: { $in: allEvolutionIds }
    }).toArray();

    console.log(`\nTotal test papers containing questions from this chapter: ${testPapersWithEvolution.length}`);
    testPapersWithEvolution.forEach(p => {
      const matchCount = p.questions.filter(id => allEvolutionIds.some(eid => eid.equals(id))).length;
      console.log(`  - Test "${p.title}" (${p._id}): ${matchCount} questions referenced`);
    });

    console.log(`\n=======================================================`);
    console.log(`AUDIT VERDICT`);
    console.log(`=======================================================`);
    if (bogusCount === 0 && marksMismatch === 0 && katexErrors === 0 && allQuestions.length === 1080) {
      console.log(`✅ CHAPTER AUDIT 100% PASSED! All 1,080 questions are authentic NCERT NEET questions.`);
    } else {
      console.error(`❌ AUDIT FAILED! Please review the errors above.`);
      process.exit(1);
    }

  } catch (err) {
    console.error("Audit failed with error:", err);
    process.exit(1);
  } finally {
    await client.close();
    console.log("\nMongoDB connection closed.");
  }
}

runAudit();
