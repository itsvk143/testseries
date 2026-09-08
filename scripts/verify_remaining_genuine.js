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

async function verifyAllGenuineExcept8() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const flawedIds = new Set([
    '6a98e398910bb37b0e557f1c',
    '6a98e398910bb37b0e557f20',
    '6a98fa34b89acd4c6047d134',
    '6a98fa34b89acd4c6047d131',
    '6a98fa34b89acd4c6047d12d',
    '6a98fa34b89acd4c6047d132',
    '6a98fa34b89acd4c6047d130',
    '6a98fa34b89acd4c6047d12c'
  ]);

  const genuine = await db.collection('questionBank').find({
    chapter: 'Work, Energy, and Power',
    source: 'Question Bank'
  }).toArray();

  let errorCount = 0;
  for (const q of genuine) {
    if (flawedIds.has(String(q._id))) continue;
    const qErr = testLatex(q.question);
    const expErr = testLatex(q.explanation);
    let optErr = [];
    if (Array.isArray(q.options)) {
      q.options.forEach(opt => optErr.push(...testLatex(opt)));
    }
    if (qErr.length + expErr.length + optErr.length > 0) {
      console.log(`Unexpected error in genuine question ${q._id}:`, { qErr, expErr, optErr });
      errorCount++;
    }
  }

  console.log(`Other 53 genuine questions checked. Errors found: ${errorCount}`);
  await client.close();
}

verifyAllGenuineExcept8().catch(console.error);
