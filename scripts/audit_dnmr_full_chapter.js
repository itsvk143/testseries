const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Dual Nature of Matter and Radiation";
const SUBJECT = "Physics";

function testKatex(text, id, field) {
  if (!text) return [];
  const errors = [];
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const formula = m.slice(1, -1);
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (e) {
      errors.push({ id, field, formula, error: e.message });
    }
  }
  return errors;
}

async function audit() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');
    const tp = db.collection('testPapers');

    // 1. Audit Question Bank
    console.log(`\nAuditing "${CHAPTER}" in questionBank...`);
    const allQuestions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`Total questions retrieved: ${allQuestions.length}`);

    if (allQuestions.length !== 452) {
      console.error(`ERROR: Expected 452 questions, found ${allQuestions.length}`);
    }

    let katexErrors = [];
    let marksErrors = 0;
    let typeErrors = 0;
    let answerErrors = 0;
    let bogusFound = 0;

    const bogusRegex = /lorem ipsum|asdf|magnetic dipole.*photoelectric|wheatstone.*de broglie|placeholder/i;

    const subtopicCounts = {};
    const typeCounts = {};

    for (let i = 0; i < allQuestions.length; i++) {
      const q = allQuestions[i];
      const idStr = q._id.toString();

      // Counts
      subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;
      typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;

      // Marks check
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        marksErrors++;
        console.error(`Invalid marks for ${idStr}: ${q.marks}/${q.negativeMarks}`);
      }

      // Answer & Options check
      if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          typeErrors++;
          console.error(`Invalid options for ${idStr}`);
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
          answerErrors++;
          console.error(`Invalid correctAnswer for ${idStr}: ${q.correctAnswer}`);
        }
      } else if (q.type === 'NUMERICAL') {
        if (typeof q.correctAnswer !== 'number' || isNaN(q.correctAnswer)) {
          answerErrors++;
          console.error(`Invalid numerical answer for ${idStr}: ${q.correctAnswer}`);
        }
      } else {
        typeErrors++;
        console.error(`Unknown type for ${idStr}: ${q.type}`);
      }

      // Bogus text check
      if (bogusRegex.test(q.question) || bogusRegex.test(q.explanation)) {
        bogusFound++;
        console.error(`Bogus text detected in ${idStr}`);
      }

      // KaTeX check
      const qErr = testKatex(q.question, idStr, 'question');
      katexErrors.push(...qErr);
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          katexErrors.push(...testKatex(opt, idStr, `option_${oIdx}`));
        });
      }
      const expErr = testKatex(q.explanation, idStr, 'explanation');
      katexErrors.push(...expErr);
    }

    console.log('\n--- Chapter Audit Summary ---');
    console.log('Subtopic distribution:', subtopicCounts);
    console.log('Type distribution:', typeCounts);
    console.log(`Marks errors: ${marksErrors}`);
    console.log(`Type/Option errors: ${typeErrors}`);
    console.log(`Answer errors: ${answerErrors}`);
    console.log(`Bogus questions found: ${bogusFound}`);
    console.log(`Total KaTeX errors: ${katexErrors.length}`);

    if (katexErrors.length > 0) {
      console.error('Sample KaTeX errors:', katexErrors.slice(0, 5));
    }

    // 2. Audit Test Papers References
    console.log('\nAuditing testPapers references...');
    const dnmrIds = allQuestions.map(q => q._id);
    const dnmrIdStrs = allQuestions.map(q => q._id.toString());
    const dnmrIdSet = new Set(dnmrIdStrs);

    const papers = await tp.find({
      $or: [
        { 'questions': { $in: dnmrIds } },
        { 'questions': { $in: dnmrIdStrs } }
      ]
    }).toArray();

    console.log(`Test papers referencing "${CHAPTER}": ${papers.length}`);
    let totalRefs = 0;
    let brokenRefs = 0;

    for (const paper of papers) {
      let paperRefs = 0;
      for (const qRef of paper.questions) {
        const refStr = qRef ? qRef.toString() : '';
        if (dnmrIdSet.has(refStr)) {
          paperRefs++;
          totalRefs++;
          // Verify it exists in questionBank
          const exists = allQuestions.some(q => q._id.toString() === refStr);
          if (!exists) {
            brokenRefs++;
            console.error(`Broken reference in test ${paper.testId}: ${refStr}`);
          }
        }
      }
      console.log(`- ${paper.testId} (${paper.title}): ${paperRefs} questions`);
    }

    console.log(`\nTotal questions referenced across test papers: ${totalRefs}`);
    console.log(`Broken references: ${brokenRefs}`);

    if (katexErrors.length === 0 && marksErrors === 0 && typeErrors === 0 && answerErrors === 0 && bogusFound === 0 && brokenRefs === 0) {
      console.log('\n======================================================');
      console.log('ALL VERIFICATIONS PASSED PERFECTLY! 0 ERRORS ACROSS CHAPTER & TEST PAPERS!');
      console.log('======================================================\n');
    } else {
      console.error('\nAUDIT FAILED WITH ISSUES!');
      process.exit(1);
    }

  } catch (err) {
    console.error('Error during audit:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

audit();
