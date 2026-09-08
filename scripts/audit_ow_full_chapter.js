const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

function testKatex(text, loc) {
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

async function runAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas for Chapter Audit.');
    const db = client.db('testseries');

    const questions = await db.collection('questionBank').find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`\n================ CHAPTER AUDIT: ${CHAPTER} (${SUBJECT}) ================`);
    console.log(`Total questions retrieved: ${questions.length}`);

    let katexErrors = 0;
    let schemaErrors = 0;
    let marksErrors = 0;
    let bogusKeywordErrors = 0;

    const subtopicCounts = {};
    const questionIdMap = new Map();

    const bogusRegex = /\b(dummy|sample question|lorem ipsum|placeholder|test question)\b/i;

    questions.forEach((q, idx) => {
      const qIdStr = q._id.toString();
      questionIdMap.set(qIdStr, q);

      subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

      // Check marks
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        marksErrors++;
        console.error(`Marks error in Q ${qIdStr} (marks: ${q.marks}, neg: ${q.negativeMarks})`);
      }

      // Check bogus text
      if (bogusRegex.test(q.question) || bogusRegex.test(q.explanation)) {
        bogusKeywordErrors++;
        console.error(`Bogus text detected in Q ${qIdStr}`);
      }

      // Check schema
      if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          schemaErrors++;
          console.error(`Options length mismatch in Q ${qIdStr}`);
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
          schemaErrors++;
          console.error(`Invalid correctAnswer in Q ${qIdStr}: ${q.correctAnswer}`);
        }
      } else if (q.type === 'NUMERICAL') {
        if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
          schemaErrors++;
          console.error(`Invalid numerical correctAnswer in Q ${qIdStr}: ${q.correctAnswer}`);
        }
      }

      // Check KaTeX
      try {
        testKatex(q.question, `Q[${idx}] ${qIdStr} Question`);
        if (q.options && Array.isArray(q.options)) {
          q.options.forEach((opt, optIdx) => testKatex(opt, `Q[${idx}] ${qIdStr} Option ${optIdx}`));
        }
        testKatex(q.explanation, `Q[${idx}] ${qIdStr} Explanation`);
      } catch (err) {
        katexErrors++;
        console.error(err.message);
      }
    });

    console.log('\nSubtopic Distribution:');
    for (const [st, count] of Object.entries(subtopicCounts)) {
      console.log(`  - ${st}: ${count} questions`);
    }

    console.log('\nValidation Summary:');
    console.log(`  - KaTeX Errors: ${katexErrors}`);
    console.log(`  - Schema Errors: ${schemaErrors}`);
    console.log(`  - Marks Errors: ${marksErrors}`);
    console.log(`  - Bogus Text Errors: ${bogusKeywordErrors}`);

    // Verify test paper references
    console.log('\n--- VERIFYING TEST PAPER INTEGRITY ---');
    const allTestPapers = await db.collection('testPapers').find({}).toArray();
    let referencingPapersCount = 0;
    let totalReferences = 0;
    let brokenReferences = 0;

    for (const paper of allTestPapers) {
      let countInThisPaper = 0;
      if (Array.isArray(paper.sections)) {
        for (const section of paper.sections) {
          if (Array.isArray(section.questions)) {
            for (const qRef of section.questions) {
              const qIdStr = String(qRef?._id || qRef?.question || qRef);
              if (questionIdMap.has(qIdStr)) {
                countInThisPaper++;
                const doc = questionIdMap.get(qIdStr);
                if (!doc || !doc.question) {
                  brokenReferences++;
                  console.error(`Broken question data for ref ${qIdStr} in paper ${paper.title}`);
                }
              }
            }
          }
        }
      }
      if (Array.isArray(paper.questions)) {
        for (const qRef of paper.questions) {
          const qIdStr = String(qRef?._id || qRef?.question || qRef);
          if (questionIdMap.has(qIdStr)) {
            countInThisPaper++;
            const doc = questionIdMap.get(qIdStr);
            if (!doc || !doc.question) {
              brokenReferences++;
              console.error(`Broken question data for ref ${qIdStr} in paper ${paper.title}`);
            }
          }
        }
      }

      if (countInThisPaper > 0) {
        referencingPapersCount++;
        totalReferences += countInThisPaper;
      }
    }

    console.log(`Referencing Test Papers: ${referencingPapersCount}`);
    console.log(`Total Question References: ${totalReferences}`);
    console.log(`Broken References: ${brokenReferences}`);

    if (katexErrors === 0 && schemaErrors === 0 && marksErrors === 0 && bogusKeywordErrors === 0 && brokenReferences === 0) {
      console.log('\n>>> CHAPTER AUDIT 100% PASSED! PERFECT HEALTH! <<<');
    } else {
      console.error('\n>>> CHAPTER AUDIT FAILED SOME CHECKS <<<');
      process.exit(1);
    }

  } catch (err) {
    console.error('Audit execution failed:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

runAudit();
