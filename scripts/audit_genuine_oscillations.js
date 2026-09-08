const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Oscillations and Waves";
const SUBJECT = "Physics";

function checkMath(text) {
  if (!text) return [];
  const errs = [];
  const matches = text.match(/\$([^$]+)\$/g) || [];
  for (const m of matches) {
    const f = m.slice(1, -1);
    try {
      katex.renderToString(f, { throwOnError: true });
    } catch (e) {
      errs.push({ raw: m, error: e.message });
    }
  }
  return errs;
}

async function auditGenuine() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const genuine = await qb.find({ chapter: CHAPTER, subject: SUBJECT, source: 'Question Bank' }).toArray();
    console.log(`Found ${genuine.length} genuine questions.`);

    let cleanCount = 0;
    const flawed = [];

    genuine.forEach((q, idx) => {
      const qErr = checkMath(q.question);
      const expErr = checkMath(q.explanation);
      let optErr = [];
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          const oErrs = checkMath(opt);
          if (oErrs.length) optErr.push({ optIdx, errors: oErrs });
        });
      }

      const hasError = qErr.length > 0 || expErr.length > 0 || optErr.length > 0;
      if (hasError) {
        flawed.push({
          _id: q._id.toString(),
          subTopic: q.subTopic,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          qErr,
          optErr,
          expErr,
          marks: q.marks,
          negativeMarks: q.negativeMarks
        });
      } else {
        cleanCount++;
      }
    });

    console.log(`Genuine audit results: ${cleanCount} clean, ${flawed.length} flawed with KaTeX issues.`);
    if (flawed.length > 0) {
      console.log('\nFlawed genuine sample:');
      flawed.slice(0, 5).forEach(f => {
        console.log(`\nID: ${f._id} (${f.subTopic})`);
        if (f.qErr.length) console.log('  qErr:', f.qErr);
        if (f.optErr.length) console.log('  optErr:', f.optErr);
        if (f.expErr.length) console.log('  expErr:', f.expErr);
      });
    }

    // Check marks on genuine
    const marksUnset = genuine.filter(q => q.marks === undefined || q.marks === null);
    console.log(`\nGenuine questions with unset marks: ${marksUnset.length} / ${genuine.length}`);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

auditGenuine();
