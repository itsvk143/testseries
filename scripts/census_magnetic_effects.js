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

async function census() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');
  const testPapersColl = db.collection('testPapers');

  const CHAPTER = "Magnetic Effects of Current and Magnetism";
  console.log(`Census for chapter: "${CHAPTER}"\n`);

  const questions = await collection.find({ chapter: CHAPTER }).toArray();
  console.log(`Total questions in chapter: ${questions.length}`);

  const subtopics = {};
  const sources = {};
  const types = {};

  const genuineQuestions = [];
  const generatorQuestions = [];

  for (const q of questions) {
    const st = q.subTopic || q.subtopic || "Unknown";
    subtopics[st] = (subtopics[st] || 0) + 1;
    sources[q.source || "None"] = (sources[q.source || "None"] || 0) + 1;
    types[q.type] = (types[q.type] || 0) + 1;

    if (q.source === 'Question Bank') {
      genuineQuestions.push(q);
    } else {
      generatorQuestions.push(q);
    }
  }

  console.log('\nSubtopics:');
  for (const [st, count] of Object.entries(subtopics)) {
    console.log(`  - ${st}: ${count}`);
  }

  console.log('\nSources:');
  for (const [s, count] of Object.entries(sources)) {
    console.log(`  - ${s}: ${count}`);
  }

  console.log('\nTypes:');
  for (const [t, count] of Object.entries(types)) {
    console.log(`  - ${t}: ${count}`);
  }

  console.log(`\nGenuine QB questions: ${genuineQuestions.length}`);
  console.log(`Generator questions: ${generatorQuestions.length}`);

  // Inspect breakdown per subtopic
  console.log('\n--- Breakdown per Subtopic ---');
  for (const st of Object.keys(subtopics)) {
    const stDocs = questions.filter(q => (q.subTopic || q.subtopic) === st);
    const stGen = stDocs.filter(q => q.source === 'Question Bank');
    const stBogus = stDocs.filter(q => q.source !== 'Question Bank');
    const ar = stDocs.filter(q => q.type === 'ASSERTION_REASON').length;
    const mcq = stDocs.filter(q => q.type === 'MCQ').length;
    const num = stDocs.filter(q => q.type === 'NUMERICAL').length;
    console.log(`Subtopic: "${st}" => Total: ${stDocs.length} | Genuine: ${stGen.length} | Generator: ${stBogus.length} | AR: ${ar}, MCQ: ${mcq}, NUM: ${num}`);
  }

  // Check KaTeX in genuine questions
  console.log('\n--- Checking KaTeX in Genuine Questions ---');
  let genuineKatexErrors = 0;
  for (const q of genuineQuestions) {
    const qErr = testLatex(q.question);
    const expErr = testLatex(q.explanation);
    let optErr = [];
    if (Array.isArray(q.options)) {
      for (const opt of q.options) {
        optErr.push(...testLatex(opt));
      }
    }
    const total = qErr.length + expErr.length + optErr.length;
    if (total > 0) {
      genuineKatexErrors++;
      console.log(`[Genuine Doc ${q._id}] SubTopic: ${q.subTopic} | KaTeX errors:`);
      if (qErr.length) console.log('  Question err:', qErr);
      if (expErr.length) console.log('  Explanation err:', expErr);
      if (optErr.length) console.log('  Options err:', optErr);
    }
  }
  console.log(`Genuine questions with KaTeX errors: ${genuineKatexErrors} / ${genuineQuestions.length}`);

  // Check test papers referencing this chapter
  console.log('\n--- Checking Test Papers Referencing this Chapter ---');
  const questionIds = new Set(questions.map(q => String(q._id)));
  const allPapers = await testPapersColl.find({}).toArray();

  let referencedCount = 0;
  let papersReferencing = 0;

  for (const p of allPapers) {
    const pQids = (p.questions || []).map(q => typeof q === 'string' ? q : String(q.questionId || q._id || q));
    const matched = pQids.filter(id => questionIds.has(id));
    if (matched.length > 0) {
      papersReferencing++;
      referencedCount += matched.length;
      console.log(`  Paper: "${p.title}" (${p._id}) - references: ${matched.length}`);
    }
  }
  console.log(`Total test papers referencing chapter: ${papersReferencing}`);
  console.log(`Total question references across test papers: ${referencedCount}`);

  await client.close();
}

census().catch(err => {
  console.error(err);
  process.exit(1);
});
