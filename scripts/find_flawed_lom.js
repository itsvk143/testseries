const { MongoClient } = require('mongodb');
const katex = require('katex');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
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

async function findFlawed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const qb = client.db('testseries').collection('questionBank');
  const genuine = await qb.find({ chapter: 'Laws of Motion', subject: 'Physics', source: 'Question Bank' }).toArray();

  console.log(`Auditing ${genuine.length} genuine questions...`);
  const flawed = [];

  genuine.forEach(q => {
    let errs = [];
    const qMath = extractLatex(q.question);
    qMath.forEach(m => {
      try { katex.renderToString(m, { throwOnError: true }); }
      catch (e) { errs.push({ field: 'question', math: m, error: e.message }); }
    });

    const expMath = extractLatex(q.explanation);
    expMath.forEach(m => {
      try { katex.renderToString(m, { throwOnError: true }); }
      catch (e) { errs.push({ field: 'explanation', math: m, error: e.message }); }
    });

    (q.options || []).forEach((opt, idx) => {
      const optMath = extractLatex(opt);
      optMath.forEach(m => {
        try { katex.renderToString(m, { throwOnError: true }); }
        catch (e) { errs.push({ field: `option[${idx}]`, math: m, error: e.message }); }
      });
    });

    if (errs.length > 0) {
      flawed.push({
        _id: q._id.toString(),
        subTopic: q.subTopic,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        errors: errs
      });
    }
  });

  console.log(`Found ${flawed.length} flawed genuine questions.`);
  fs.writeFileSync('scripts/flawed_lom_genuine.json', JSON.stringify(flawed, null, 2));
  console.log('Saved to scripts/flawed_lom_genuine.json');
  await client.close();
}

findFlawed();
