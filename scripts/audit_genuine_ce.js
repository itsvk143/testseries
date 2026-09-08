require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const katex = require('katex');

function extractLatexSpans(text) {
  if (!text) return [];
  const spans = [];
  const regex = /(\$\$[\s\S]*?\$\$|\$([^\$\n]+?)\$|\\\[[\s\S]*?\\\]|\\\(.+?\\\)|\\[a-zA-Z]+(?:\{[^{}]*\}|\[[^\[\]]*\])*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    let raw = match[0];
    let math = raw;
    let displayMode = false;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      math = raw.slice(1, -1);
      displayMode = false;
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      math = raw.slice(2, -2);
      displayMode = false;
    }
    spans.push({ raw, math, displayMode });
  }
  return spans;
}

function testLatex(str) {
  if (!str) return [];
  const errors = [];
  const spans = extractLatexSpans(str);
  for (const span of spans) {
    try {
      katex.renderToString(span.math, {
        throwOnError: true,
        displayMode: span.displayMode
      });
    } catch (err) {
      errors.push({ raw: span.raw, error: err.message });
    }
  }
  return errors;
}

async function auditGenuineCE() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const genuine = await db.collection('questionBank').find({
    chapter: 'Current Electricity',
    source: 'Question Bank'
  }).toArray();

  console.log(`Total genuine questions: ${genuine.length}`);

  const flawed = [];
  genuine.forEach(q => {
    const qErr = testLatex(q.question);
    const expErr = testLatex(q.explanation);
    let optErr = [];
    if (Array.isArray(q.options)) {
      q.options.forEach(opt => optErr.push(...testLatex(opt)));
    }

    if (qErr.length + expErr.length + optErr.length > 0) {
      flawed.push({
        id: String(q._id),
        subTopic: q.subTopic,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        qErr, expErr, optErr
      });
    }
  });

  console.log(`Flawed genuine questions count: ${flawed.length}`);
  flawed.forEach((f, i) => {
    console.log(`\n[${i+1}] ID: ${f.id} | Subtopic: "${f.subTopic}"`);
    console.log(`  Q: ${f.question}`);
    console.log(`  Opts: ${JSON.stringify(f.options)}`);
    console.log(`  Ans: ${f.correctAnswer}`);
    console.log(`  Exp: ${f.explanation?.slice(0, 300)}`);
    if (f.qErr.length) console.log(`  qErr:`, f.qErr);
    if (f.expErr.length) console.log(`  expErr:`, f.expErr);
    if (f.optErr.length) console.log(`  optErr:`, f.optErr);
  });

  // Also check marks and negativeMarks
  let nonStandardMarks = 0;
  genuine.forEach(q => {
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      nonStandardMarks++;
    }
  });
  console.log(`\nGenuine questions with non-standard marks (+4/-1): ${nonStandardMarks} / ${genuine.length}`);

  await client.close();
}

auditGenuineCE().catch(console.error);
