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

async function findFlawedGenuine() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const genuine = await db.collection('questionBank').find({
    chapter: 'Work, Energy, and Power',
    source: 'Question Bank'
  }).toArray();

  console.log('Total genuine questions:', genuine.length);
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
        explanation: q.explanation,
        errors: { qErr, expErr, optErr }
      });
    }
  }

  console.log('Flawed genuine count:', flawed.length);
  flawed.forEach((f, i) => {
    console.log(`\n--- [${i + 1}] ID: ${f.id} | SubTopic: ${f.subTopic} ---`);
    console.log(`Question: ${f.question}`);
    if (f.errors.qErr.length) console.log(`Question KaTeX errors:`, f.errors.qErr);
    if (f.errors.expErr.length) console.log(`Explanation KaTeX errors:`, f.errors.expErr);
    if (f.errors.optErr.length) console.log(`Option KaTeX errors:`, f.errors.optErr);
  });

  await client.close();
}

findFlawedGenuine().catch(console.error);
