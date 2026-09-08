const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = "Rotational Motion";
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

async function census() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas.');
    const db = client.db('testseries');
    const qb = db.collection('questionBank');

    const questions = await qb.find({ chapter: CHAPTER, subject: SUBJECT }).toArray();
    console.log(`\n=== CENSUS FOR CHAPTER: "${CHAPTER}" (${SUBJECT}) ===`);
    console.log(`Total questions in questionBank: ${questions.length}`);

    const subtopics = {};
    const sources = {};
    const types = {};

    questions.forEach(q => {
      const st = q.subTopic || q.subtopic || 'undefined';
      subtopics[st] = (subtopics[st] || 0) + 1;

      const src = q.source || 'undefined';
      sources[src] = (sources[src] || 0) + 1;

      const t = q.type || q.questionType || 'undefined';
      types[t] = (types[t] || 0) + 1;
    });

    console.log('\nSubtopics distribution:');
    console.dir(subtopics, { depth: null });

    console.log('\nSources distribution:');
    console.dir(sources, { depth: null });

    console.log('\nQuestion types:');
    console.dir(types, { depth: null });

    console.log('\nPer-subtopic breakdown by source & type:');
    for (const sub of Object.keys(subtopics)) {
      const subDocs = questions.filter(q => (q.subTopic || q.subtopic) === sub);
      const genuine = subDocs.filter(q => q.source === 'Question Bank');
      const generator = subDocs.filter(q => q.source !== 'Question Bank');

      const genTypes = {};
      generator.forEach(q => {
        const t = q.type || q.questionType;
        genTypes[t] = (genTypes[t] || 0) + 1;
      });

      const genuineTypes = {};
      genuine.forEach(q => {
        const t = q.type || q.questionType;
        genuineTypes[t] = (genuineTypes[t] || 0) + 1;
      });

      console.log(`- Subtopic: "${sub}" | Total: ${subDocs.length}`);
      console.log(`    Genuine: ${genuine.length} => ${JSON.stringify(genuineTypes)}`);
      console.log(`    Generator: ${generator.length} => ${JSON.stringify(genTypes)}`);
    }

    // Check test paper references
    const allIds = questions.map(q => q._id);
    const testPapers = await db.collection('testPapers').find({}).toArray();
    const qIdSet = new Set(allIds.map(id => String(id)));

    let refCount = 0;
    const referencingPapers = [];

    testPapers.forEach(tp => {
      let countInThisPaper = 0;
      if (Array.isArray(tp.sections)) {
        tp.sections.forEach(sec => {
          if (Array.isArray(sec.questions)) {
            sec.questions.forEach(q => {
              const qId = String(q?._id || q?.question || q);
              if (qIdSet.has(qId)) countInThisPaper++;
            });
          }
        });
      }
      if (Array.isArray(tp.questions)) {
        tp.questions.forEach(q => {
          const qId = String(q?._id || q?.question || q);
          if (qIdSet.has(qId)) countInThisPaper++;
        });
      }
      if (countInThisPaper > 0) {
        refCount += countInThisPaper;
        referencingPapers.push({ title: tp.title, count: countInThisPaper });
      }
    });

    console.log(`\nReferencing Test Papers: ${referencingPapers.length} papers, Total References: ${refCount}`);
    referencingPapers.forEach(p => console.log(`  - "${p.title}": ${p.count} refs`));

    // Sample inspect generator questions
    console.log('\n--- SAMPLE INSPECTION OF GENERATOR QUESTIONS ---');
    const generatorDocs = questions.filter(q => q.source !== 'Question Bank');
    for (let i = 0; i < Math.min(5, generatorDocs.length); i++) {
      const g = generatorDocs[i];
      console.log(`\nSample ${i+1}: ID ${g._id} | subTopic: ${g.subTopic} | type: ${g.type}`);
      console.log(`  Question: ${g.question}`);
      console.log(`  Options: ${JSON.stringify(g.options)}`);
      console.log(`  Explanation: ${g.explanation}`);
    }

    // Audit genuine questions
    const genuineDocs = questions.filter(q => q.source === 'Question Bank');
    console.log(`\n--- AUDIT OF GENUINE QUESTIONS (${genuineDocs.length} items) ---`);
    let cleanGenuine = 0;
    const flawedGenuine = [];

    genuineDocs.forEach((q, idx) => {
      const qErr = checkMath(q.question);
      const expErr = checkMath(q.explanation);
      let optErr = [];
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          const oErrs = checkMath(opt);
          if (oErrs.length) optErr.push({ optIdx, errors: oErrs });
        });
      }

      if (qErr.length > 0 || expErr.length > 0 || optErr.length > 0) {
        flawedGenuine.push({
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
        cleanGenuine++;
      }
    });

    console.log(`Genuine status: ${cleanGenuine} clean, ${flawedGenuine.length} flawed with KaTeX issues.`);
    if (flawedGenuine.length > 0) {
      flawedGenuine.forEach(f => {
        console.log(`\nFlawed ID: ${f._id} (${f.subTopic})`);
        if (f.qErr.length) console.log('  qErr:', f.qErr);
        if (f.optErr.length) console.log('  optErr:', f.optErr);
        if (f.expErr.length) console.log('  expErr:', f.expErr);
      });
    }

  } catch (err) {
    console.error('Census error:', err);
  } finally {
    await client.close();
  }
}

census();
