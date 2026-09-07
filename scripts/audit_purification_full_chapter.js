const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const katex = require('katex');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const CHAPTER = "Purification and Characterisation of Organic Compounds";

async function runAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log("Connected to MongoDB for Final Audit\n");
    const db = client.db('testseries');
    const qCol = db.collection('questionBank');
    const tCol = db.collection('testPapers');

    const allQuestions = await qCol.find({ chapter: CHAPTER }).toArray();
    console.log(`Total questions in chapter "${CHAPTER}": ${allQuestions.length}`);

    let katexErrors = 0;
    let schemaErrors = 0;
    let bogusKeywordMatches = 0;

    const bogusRegex = /Bernoulli|Navier|Reynolds|Mach|Carnot|Kelvin|entropy|viscosity|friction|\blens\b|optics|Doppler|damping|Hooke|gravitation|dielectric|Coulomb|Faraday's law of induction/i;

    function testKaTeX(str, loc) {
      if (!str) return;
      const mathRegex = /\$([^\$]+)\$/g;
      let match;
      while ((match = mathRegex.exec(str)) !== null) {
        try {
          katex.renderToString(match[1], { throwOnError: true });
        } catch (e) {
          console.error(`KaTeX Error in ${loc}: "${match[1]}" -> ${e.message}`);
          katexErrors++;
        }
      }
    }

    const subtopicStats = {};

    for (let i = 0; i < allQuestions.length; i++) {
      const q = allQuestions[i];
      const loc = `Q${i + 1} [ID: ${q._id}, Subtopic: ${q.subTopic}]`;

      // Track stats
      const st = q.subTopic || "Unknown";
      if (!subtopicStats[st]) {
        subtopicStats[st] = { total: 0, ar: 0, mcq: 0, num: 0, genuine: 0, updated: 0 };
      }
      subtopicStats[st].total++;
      if (q.type === 'ASSERTION_REASON') subtopicStats[st].ar++;
      else if (q.type === 'MCQ') subtopicStats[st].mcq++;
      else if (q.type === 'NUMERICAL') subtopicStats[st].num++;

      if (q.source === 'Question Bank') subtopicStats[st].genuine++;
      else subtopicStats[st].updated++;

      // Bogus check
      const fullText = `${q.question} ${q.options ? q.options.join(' ') : ''} ${q.explanation || ''}`;
      if (bogusRegex.test(fullText)) {
        console.error(`Bogus keyword detected in ${loc}!`);
        bogusKeywordMatches++;
      }

      // Schema check
      if (!q.question || q.question.trim() === '') {
        console.error(`Missing question text in ${loc}`);
        schemaErrors++;
      }
      if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          console.error(`Options invalid in ${loc}: length = ${q.options ? q.options.length : 0}`);
          schemaErrors++;
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
          console.error(`correctAnswer invalid in ${loc}: ${q.correctAnswer}`);
          schemaErrors++;
        }
        if (q.marks !== 4 || q.negativeMarks !== 1) {
          console.error(`Marks invalid in ${loc}: marks=${q.marks}, neg=${q.negativeMarks}`);
          schemaErrors++;
        }
      } else if (q.type === 'NUMERICAL') {
        if (!Array.isArray(q.options) || q.options.length !== 0) {
          console.error(`Options invalid for NUM in ${loc}`);
          schemaErrors++;
        }
        if (typeof q.correctAnswer !== 'string' || q.correctAnswer.trim() === '') {
          console.error(`correctAnswer invalid for NUM in ${loc}: ${q.correctAnswer}`);
          schemaErrors++;
        }
        if (q.marks !== 4 || q.negativeMarks !== 0) {
          console.error(`Marks invalid for NUM in ${loc}: marks=${q.marks}, neg=${q.negativeMarks}`);
          schemaErrors++;
        }
      }

      // KaTeX check
      testKaTeX(q.question, `${loc} question`);
      if (q.options) {
        q.options.forEach((opt, oIdx) => testKaTeX(opt, `${loc} opt[${oIdx}]`));
      }
      testKaTeX(q.explanation, `${loc} explanation`);
    }

    console.log("\n================ SUBTOPIC BREAKDOWN ================");
    for (const [name, stats] of Object.entries(subtopicStats)) {
      console.log(`Subtopic: "${name}"`);
      console.log(`  Total: ${stats.total} | Genuine: ${stats.genuine} | Updated: ${stats.updated}`);
      console.log(`  AR: ${stats.ar} | MCQ: ${stats.mcq} | NUM: ${stats.num}`);
    }

    console.log("\n================ QUALITY AUDIT RESULTS ================");
    console.log(`Total questions analyzed: ${allQuestions.length}`);
    console.log(`KaTeX rendering errors: ${katexErrors}`);
    console.log(`Schema / structure errors: ${schemaErrors}`);
    console.log(`Bogus keyword matches: ${bogusKeywordMatches}`);

    // Test Papers Audit
    console.log("\n================ AUDITING REFERENCING TEST PAPERS ================");
    const testPapers = await tCol.find({
      $or: [
        { chapter: CHAPTER },
        { "questions.chapter": CHAPTER },
        { title: new RegExp("Purification and Characterisation of Organic Compounds", "i") }
      ]
    }).toArray();

    console.log(`Found ${testPapers.length} referencing test papers.`);
    let brokenRefs = 0;
    let totalQuestionsInTests = 0;

    for (const tp of testPapers) {
      console.log(`\nTesting Paper: "${tp.title || tp.testId}" (ID: ${tp._id}, Total Qs in paper: ${tp.questions ? tp.questions.length : 0})`);
      if (!tp.questions || tp.questions.length === 0) continue;

      for (let j = 0; j < tp.questions.length; j++) {
        const qRef = tp.questions[j];
        totalQuestionsInTests++;
        const refId = (qRef && qRef._id) ? qRef._id.toString() : (qRef ? qRef.toString() : null);
        if (!refId) continue;
        const exists = allQuestions.find(q => q._id.toString() === refId);
        if (!exists) {
          // Check if it's from another chapter or missing
          const docInDb = await qCol.findOne({ _id: new ObjectId(refId) });
          if (!docInDb) {
            console.error(`  Broken reference in test ${tp.title}: Question ${refId} not found in questionBank!`);
            brokenRefs++;
          }
        }
      }
    }

    console.log(`\nTotal questions across referencing test papers checked: ${totalQuestionsInTests}`);
    console.log(`Broken references found: ${brokenRefs}`);

    if (katexErrors === 0 && schemaErrors === 0 && bogusKeywordMatches === 0 && brokenRefs === 0) {
      console.log("\n>>> FULL AUDIT PASSED WITH 100% EXCELLENCE! <<<");
    } else {
      console.error("\n>>> AUDIT FAILED! Review issues above. <<<");
      process.exit(1);
    }

  } catch (err) {
    console.error("Audit error:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

runAudit();
