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

async function dumpFlawedBrief() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const genuine = await db.collection('questionBank').find({
    chapter: 'Work, Energy, and Power',
    source: 'Question Bank'
  }).toArray();

  const flawed = [];
  for (const q of genuine) {
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
        qErr: qErr.map(e => e.error + ' | RAW: ' + e.raw),
        expErr: expErr.map(e => e.error + ' | RAW: ' + e.raw.slice(0, 100)),
        optErr: optErr.map(e => e.error + ' | RAW: ' + e.raw)
      });
    }
  }

  console.log(`Flawed count: ${flawed.length}`);
  flawed.forEach((f, i) => {
    console.log(`[${i+1}] ID: ${f.id} | SubTopic: ${f.subTopic}`);
    console.log(`    Q: ${f.question.slice(0, 100)}`);
    console.log(`    Ans: ${f.correctAnswer}`);
    if (f.qErr.length) console.log(`    qErr:`, f.qErr);
    if (f.expErr.length) console.log(`    expErr:`, f.expErr);
    if (f.optErr.length) console.log(`    optErr:`, f.optErr);
  });

  await client.close();
}

dumpFlawedBrief().catch(console.error);
