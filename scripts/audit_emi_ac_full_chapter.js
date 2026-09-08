const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const katex = require('katex');
dotenv.config({ path: '.env.local' });

function checkKaTeX(text, context) {
  if (!text) return [];
  const errors = [];
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      errors.push({ context, math: m[1], err: err.message });
    }
  }
  return errors;
}

const bogusTerms = [
  'Carnot',
  'isothermal',
  'adiabatic',
  'heat engine',
  'refrigerator',
  'monatomic gas',
  'diatomic gas',
  'molar heat capacity',
  'magnitude of the 3D vector',
  'cross product of the vectors',
  'dot product of the vectors'
];

async function auditEmiAcFullChapter() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not set");

  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB Atlas for Live Chapter Audit.");

  const db = client.db("testseries");
  const col = db.collection("questionBank");

  const docs = await col.find({
    chapter: "Electromagnetic Induction and Alternating Currents",
    subject: "Physics"
  }).toArray();

  console.log(`\n=== 1. CHAPTER CENSUS ===`);
  console.log(`Total questions found in DB: ${docs.length} (Expected: 589)`);

  const subtopicMap = {};
  let totalKatexErrors = 0;
  let totalBogusFound = 0;
  let nonStandardMarks = 0;

  for (const doc of docs) {
    const st = doc.subTopic || doc.subtopic || 'UNKNOWN';
    if (!subtopicMap[st]) {
      subtopicMap[st] = { total: 0, ar: 0, mcq: 0, num: 0, qb: 0, gen: 0 };
    }
    subtopicMap[st].total++;
    if (doc.type === 'ASSERTION_REASON') subtopicMap[st].ar++;
    else if (doc.type === 'MCQ') subtopicMap[st].mcq++;
    else if (doc.type === 'NUMERICAL') subtopicMap[st].num++;

    if (doc.source === 'Question Bank') subtopicMap[st].qb++;
    else subtopicMap[st].gen++;

    // Check Marks
    if (doc.marks !== 4 || doc.negativeMarks !== 1) {
      nonStandardMarks++;
    }

    // Check KaTeX
    const qErr = checkKaTeX(doc.question, `${doc._id} question`);
    const expErr = checkKaTeX(doc.explanation, `${doc._id} explanation`);
    const optErr = (doc.options || []).flatMap((o, idx) => checkKaTeX(o, `${doc._id} opt[${idx}]`));
    const allErr = [...qErr, ...expErr, ...optErr];
    if (allErr.length > 0) {
      totalKatexErrors += allErr.length;
      console.error(`KaTeX error in doc ${doc._id}:`, allErr);
    }

    // Check Bogus terms
    const fullText = `${doc.question} ${(doc.options || []).join(' ')} ${doc.explanation}`.toLowerCase();
    for (const term of bogusTerms) {
      if (fullText.includes(term.toLowerCase())) {
        console.error(`Bogus term "${term}" found in doc ${doc._id}`);
        totalBogusFound++;
      }
    }
  }

  console.table(subtopicMap);
  console.log(`Non-standard marks count: ${nonStandardMarks} (Expected: 0)`);
  console.log(`Total KaTeX errors: ${totalKatexErrors} (Expected: 0)`);
  console.log(`Total Bogus terms found: ${totalBogusFound} (Expected: 0)`);

  // Check test paper references
  console.log(`\n=== 2. TEST PAPER INTEGRITY CHECK ===`);
  const testPapers = await db.collection('testPapers').find({}).toArray();
  const docIdSet = new Set(docs.map(d => d._id.toString()));
  let referencedCount = 0;
  const paperUsage = {};

  for (const paper of testPapers) {
    let paperMatched = 0;
    const qList = [];
    if (Array.isArray(paper.questions)) {
      qList.push(...paper.questions);
    }
    if (Array.isArray(paper.sections)) {
      for (const sec of paper.sections) {
        if (Array.isArray(sec.questions)) {
          qList.push(...sec.questions);
        }
      }
    }
    for (const q of qList) {
      const qid = (q && q._id ? q._id : q).toString();
      if (docIdSet.has(qid)) {
        referencedCount++;
        paperMatched++;
      }
    }
    if (paperMatched > 0) {
      paperUsage[paper.title || paper.testId || paper._id.toString()] = paperMatched;
    }
  }

  console.log(`Total questions referenced across testPapers: ${referencedCount} (Expected: 151)`);
  console.log(`Referencing papers count: ${Object.keys(paperUsage).length}`);
  console.log(`Paper breakdown:`, paperUsage);

  await client.close();

  console.log(`\n=== AUDIT SUMMARY ===`);
  if (docs.length === 589 && totalKatexErrors === 0 && totalBogusFound === 0 && nonStandardMarks === 0 && referencedCount === 151) {
    console.log(`ALL 589 QUESTIONS AND REFERENCING PAPERS ARE 100% VERIFIED AND PRISTINE!`);
  } else {
    console.error(`AUDIT FOUND DISCREPANCIES!`);
    process.exit(1);
  }
}

auditEmiAcFullChapter().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
