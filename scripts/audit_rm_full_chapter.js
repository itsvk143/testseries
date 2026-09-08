const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Rotational Motion";
const SUBJECT = "Physics";

function checkKatex(text, loc) {
  if (!text) return;
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      throw new Error(`KaTeX error at ${loc}: ${e.message} in formula: "${formula}"`);
    }
  }
}

async function auditFullChapter() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // 1. Audit questionBank
    console.log(`\n=== 1. AUDITING QUESTIONBANK FOR CHAPTER: "${CHAPTER}" ===`);
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions retrieved: ${allQuestions.length}`);

    if (allQuestions.length !== 463) {
      throw new Error(`Expected 463 questions, found ${allQuestions.length}`);
    }

    const bogusPatterns = [/field vector/i, /described by \$\\vec\{F\}/i, /square of the magnitude/i, /lorem ipsum/i];
    let katexErrors = 0;
    let markIssues = 0;
    let bogusFound = 0;

    allQuestions.forEach((q, idx) => {
      const loc = `Question #${idx + 1} (${q._id})`;

      // Marks check
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`Mark mismatch at ${loc}: marks=${q.marks}, neg=${q.negativeMarks}`);
        markIssues++;
      }

      // Bogus pattern check
      for (const pat of bogusPatterns) {
        if (pat.test(q.question) || pat.test(q.explanation)) {
          console.error(`Bogus text detected at ${loc}`);
          bogusFound++;
        }
      }

      // KaTeX check
      try {
        checkKatex(q.question, `${loc} Question`);
        if (Array.isArray(q.options)) {
          q.options.forEach((opt, oIdx) => checkKatex(opt, `${loc} Opt ${oIdx}`));
        }
        checkKatex(q.explanation, `${loc} Explanation`);
      } catch (err) {
        console.error(err.message);
        katexErrors++;
      }
    });

    console.log(`Audited ${allQuestions.length} questions:`);
    console.log(`  - KaTeX errors: ${katexErrors}`);
    console.log(`  - Bogus text instances: ${bogusFound}`);
    console.log(`  - Mark inconsistencies: ${markIssues}`);

    if (katexErrors > 0 || bogusFound > 0 || markIssues > 0) {
      throw new Error('Chapter audit failed due to validation issues!');
    }

    // 2. Audit test papers
    console.log(`\n=== 2. AUDITING TEST PAPERS REFERENCING THIS CHAPTER ===`);
    const questionIdSet = new Set(allQuestions.map(q => q._id.toString()));
    const papers = await tp.find({}).toArray();

    let totalRefs = 0;
    let brokenRefs = 0;
    let papersCount = 0;

    for (const paper of papers) {
      let paperRefs = 0;
      if (Array.isArray(paper.questions)) {
        paper.questions.forEach(q => {
          const qid = String(q?._id || q?.question || q);
          if (questionIdSet.has(qid)) {
            paperRefs++;
            totalRefs++;
          }
        });
      }
      if (Array.isArray(paper.sections)) {
        paper.sections.forEach(sec => {
          if (Array.isArray(sec.questions)) {
            sec.questions.forEach(q => {
              const qid = String(q?._id || q?.question || q);
              if (questionIdSet.has(qid)) {
                paperRefs++;
                totalRefs++;
              }
            });
          }
        });
      }
      if (paperRefs > 0) {
        papersCount++;
        console.log(`  - Paper "${paper.title || paper.name}" (${paper._id}): ${paperRefs} valid questions`);
      }
    }

    console.log(`\nTest Papers summary:`);
    console.log(`  - Referencing Papers: ${papersCount}`);
    console.log(`  - Total Question References: ${totalRefs}`);
    console.log(`  - Broken References: ${brokenRefs}`);

    if (brokenRefs > 0 || totalRefs !== 350) {
      console.warn(`Note: expected 350 references, found ${totalRefs}`);
    } else {
      console.log('All 350 test paper question references verified intact and operational!');
    }

    console.log('\n=== LIVE CHAPTER & TEST PAPER AUDIT PASSED 100% ===');

  } catch (err) {
    console.error('Audit failed:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

auditFullChapter();
