// scripts/audit_conics_mathematics.js
// Exhaustive post-replacement audit for Conic Sections (Parabola, Ellipse, Hyperbola) (Mathematics, Class 12)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

const CHAPTER_NAME = 'Conic Sections (Parabola, Ellipse, Hyperbola)';

function testLatex(text, label) {
  if (!text || typeof text !== 'string') return;
  const regex = /\$([^$]+)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const expr = m[1];
    try {
      katex.renderToString(expr, { throwOnError: true, displayMode: false });
    } catch (err) {
      throw new Error(`[KaTeX Error] ${label}: $${expr}$ -> ${err.message}`);
    }
  }
}

const BOGUS_KEYWORDS = [
  'thermodynamic', 'macroscopic', 'partition', 'entropy', 'joule', 'kelvin',
  'heat engine', 'carnot', 'ideal gas', 'isothermal', 'adiabatic', 'molar heat',
  'system is partitioned', 'reference scale'
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log(`Connected to database: ${db.databaseName}`);

  const qBank = db.collection('questionBank');
  const tPapers = db.collection('testPapers');

  console.log('\n================================================================');
  console.log(`  AUDITING: ${CHAPTER_NAME}`);
  console.log('================================================================');

  // 1. QuestionBank Counts
  const totalCount = await qBank.countDocuments({ chapter: CHAPTER_NAME });
  console.log(`Total questions in chapter: ${totalCount}`);
  if (totalCount !== 210) {
    throw new Error(`Expected exactly 210 questions, found ${totalCount}`);
  }

  const genuineCount = await qBank.countDocuments({ chapter: CHAPTER_NAME, source: 'Question Bank' });
  const replacedCount = await qBank.countDocuments({
    chapter: CHAPTER_NAME,
    source: 'JEE Main 10-Year Advanced Pattern Generator'
  });
  console.log(`Genuine questions: ${genuineCount} (expected 30)`);
  console.log(`Replaced generator questions: ${replacedCount} (expected 180)`);
  if (genuineCount !== 30 || replacedCount !== 180) {
    throw new Error(`Counts mismatch: genuine=${genuineCount}, replaced=${replacedCount}`);
  }

  // 2. Subtopic Breakdown
  const subtopics = await qBank.distinct('subTopic', { chapter: CHAPTER_NAME });
  console.log('\nSubtopic breakdown:');
  for (const st of subtopics) {
    const count = await qBank.countDocuments({ chapter: CHAPTER_NAME, subTopic: st });
    console.log(`  - "${st}": ${count} questions`);
  }

  // 3. Question Validation (KaTeX, Bogus Keywords, Scoring, Answer Integrity)
  console.log('\nVerifying all 210 questions for KaTeX, Bogus Keywords, Marking, and Content...');
  const questions = await qBank.find({ chapter: CHAPTER_NAME }).toArray();
  const seenTexts = new Set();
  let latexCheckedCount = 0;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const label = `Question ${i + 1} [ID: ${q._id}]`;

    // Duplicate check
    const norm = q.question.replace(/\s+/g, ' ').trim();
    if (seenTexts.has(norm)) {
      throw new Error(`${label}: Duplicate question content found: "${norm.substring(0, 50)}..."`);
    }
    seenTexts.add(norm);

    // Bogus keywords check
    const lower = (q.question + ' ' + (q.explanation || '')).toLowerCase();
    for (const kw of BOGUS_KEYWORDS) {
      if (lower.includes(kw)) {
        throw new Error(`${label}: Contains bogus generator keyword "${kw}"`);
      }
    }

    // Marking scheme check
    if (q.type === 'MCQ' || q.type === 'ASSERTION_REASON') {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        throw new Error(`${label}: Invalid MCQ/AR marks: +${q.marks}/-${q.negativeMarks}`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`${label}: Invalid options count: ${q.options?.length}`);
      }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        throw new Error(`${label}: Invalid MCQ/AR correctAnswer index: ${q.correctAnswer}`);
      }
      q.options.forEach((opt, optIdx) => testLatex(opt, `${label} Option ${optIdx}`));
    } else if (q.type === 'NUMERICAL') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        throw new Error(`${label}: Invalid NUM marks: +${q.marks}/-${q.negativeMarks}`);
      }
      if (typeof q.correctAnswer !== 'string' || isNaN(Number(q.correctAnswer))) {
        throw new Error(`${label}: Invalid NUM correctAnswer: ${q.correctAnswer}`);
      }
    } else {
      throw new Error(`${label}: Unrecognized question type "${q.type}"`);
    }

    // KaTeX validation on question and explanation
    testLatex(q.question, `${label} question`);
    testLatex(q.explanation, `${label} explanation`);
    latexCheckedCount++;
  }
  console.log(`KaTeX and integrity verified on all ${latexCheckedCount} questions! (0 errors)`);

  // 4. Test Paper Audit
  console.log('\n================================================================');
  console.log('  AUDITING TEST PAPERS');
  console.log('================================================================');

  const testPapersToCheck = [
    { id: '6a9e2844c527cd38431011b5', name: 'Chapter: Conic Sections' },
    { id: '6a9e288ac527cd3843101340', name: 'Subtopic: Standard forms' },
    { id: '6a9e288bc527cd3843101341', name: 'Subtopic: directrix and focus' }
  ];

  for (const tConfig of testPapersToCheck) {
    const tp = await tPapers.findOne({ _id: new ObjectId(tConfig.id) });
    if (!tp) {
      throw new Error(`Test paper not found: ${tConfig.id}`);
    }

    console.log(`\nTest Paper: "${tp.title || tp.name}" (${tConfig.name})`);
    console.log(`  _id: ${tp._id}`);
    console.log(`  Subject: ${tp.subject}, Chapter: ${tp.chapter}`);
    console.log(`  Duration: ${tp.duration} mins, Total Marks: ${tp.totalMarks}`);
    console.log(`  Questions Count: ${tp.questions?.length}`);

    if (tp.questions.length !== 25) {
      throw new Error(`Test paper ${tp._id} has ${tp.questions.length} questions, expected 25`);
    }

    // Verify each question belongs strictly to Conic Sections
    const qIds = tp.questions.map(q => q.questionId || q._id || q);
    const docs = await qBank.find({ _id: { $in: qIds } }).toArray();
    const docMap = new Map(docs.map(d => [d._id.toString(), d]));

    let mcqCount = 0;
    let numCount = 0;
    let foreignCount = 0;

    for (const qid of qIds) {
      const doc = docMap.get(qid.toString());
      if (!doc) {
        throw new Error(`Question ${qid} in test paper not found in questionBank!`);
      }
      if (doc.chapter !== CHAPTER_NAME) {
        foreignCount++;
        console.error(`  [FOREIGN QUESTION] ID: ${qid}, Chapter: ${doc.chapter}`);
      }
      if (doc.type === 'MCQ' || doc.type === 'ASSERTION_REASON') {
        mcqCount++;
      } else if (doc.type === 'NUMERICAL') {
        numCount++;
      }
    }

    console.log(`  Breakdown: ${mcqCount} MCQs/AR + ${numCount} NUMs`);
    console.log(`  Foreign Questions: ${foreignCount}`);

    if (foreignCount > 0) {
      throw new Error(`Test paper ${tp._id} contains ${foreignCount} foreign questions!`);
    }
    if (mcqCount !== 20 || numCount !== 5) {
      throw new Error(`Test paper ${tp._id} structure mismatch: ${mcqCount} MCQ / ${numCount} NUM (expected 20/5)`);
    }
  }

  console.log('\n================================================================');
  console.log('  ALL AUDITS PASSED WITH 100% PERFECTION!');
  console.log('================================================================\n');

  await client.close();
}

main().catch(err => {
  console.error('\nAudit Failed:', err);
  process.exit(1);
});
