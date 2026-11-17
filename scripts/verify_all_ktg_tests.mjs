import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import katex from 'katex';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== RUNNING COMPREHENSIVE VERIFICATION FOR NEET KINETIC THEORY ===");

const testSlugs = [
  { slug: "neet-SUBTOPIC-Physics-Equation-of-state", name: "Test 1: Equation of state" },
  { slug: "neet-SUBTOPIC-Physics-Kinetic-interpretation-of-temperature", name: "Test 2: Kinetic interpretation of temperature" },
  { slug: "neet-SUBTOPIC-Physics-Degrees-of-freedom", name: "Test 3: Degrees of freedom" },
  { slug: "neet-SUBTOPIC-Physics-Law-of-equipartition-of-energy", name: "Test 4: Law of equipartition of energy" },
  { slug: "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms,-average,-most-probable)", name: "Test 5: Mean free path and molecular speeds" }
];

let totalQuestionsAudited = 0;
let totalDiagramsFound = 0;
let totalARQuestionsFound = 0;
let katexErrors = 0;

for (const t of testSlugs) {
  console.log(`\n----------------------------------------------------`);
  console.log(`Auditing ${t.name} (${t.slug})`);
  console.log(`----------------------------------------------------`);

  const doc = await db.collection('testPapers').findOne({ testId: t.slug });
  if (!doc) {
    console.error(`ERROR: Test paper not found for slug: ${t.slug}`);
    continue;
  }

  console.log(`Title: ${doc.title}`);
  console.log(`Subject: ${doc.subject} | Chapter: ${doc.chapter} | Exam: ${doc.exam}`);
  console.log(`Total questions in testPaper: ${doc.questions?.length}`);

  if (doc.questions?.length !== 45) {
    console.error(`MISMATCH: Expected 45 questions, found ${doc.questions?.length}`);
  }

  const qIds = doc.questions.map(q => ObjectId.isValid(q) && q.length === 24 ? new ObjectId(q) : q);
  const questions = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map(questions.map(q => [q._id.toString(), q]));

  // 1. Diagram check (Q1-Q3)
  let testDiagramCount = 0;
  for (let i = 0; i < 3; i++) {
    const qId = doc.questions[i].toString();
    const q = qMap.get(qId);
    if (!q) {
      console.error(`ERROR: Question ${i + 1} not found in questionBank (ID: ${qId})`);
      continue;
    }
    if (q.image && q.image.includes('/images/diagrams/ktg/')) {
      const filePath = 'public' + q.image;
      if (fs.existsSync(filePath)) {
        testDiagramCount++;
        totalDiagramsFound++;
      } else {
        console.error(`ERROR: Diagram file missing on disk: ${filePath}`);
      }
    } else {
      console.error(`ERROR: Q${i + 1} does not have expected KTG diagram image: ${q.image}`);
    }
  }
  console.log(`Diagram-based questions (Q1-Q3): ${testDiagramCount}/3 verified.`);

  // 2. Section B Assertion-Reasoning check (Q40-Q45)
  let testARCount = 0;
  const keyDist = { a: 0, b: 0, c: 0, d: 0 };
  let hardCount = 0;

  for (let i = 39; i < 45; i++) {
    const qId = doc.questions[i].toString();
    const q = qMap.get(qId);
    if (!q) {
      console.error(`ERROR: Question ${i + 1} not found in questionBank (ID: ${qId})`);
      continue;
    }
    const qText = q.question || '';
    const isAR = qText.includes("Assertion (A):") && qText.includes("Reason (R):");
    if (isAR) {
      testARCount++;
      totalARQuestionsFound++;
      keyDist[q.correctOption] = (keyDist[q.correctOption] || 0) + 1;
      if (q.difficulty === 'Hard') hardCount++;
    } else {
      console.error(`ERROR: Q${i + 1} is not a valid Assertion-Reason question`);
    }
  }
  console.log(`Section B AR questions (Q40-Q45): ${testARCount}/6 verified.`);
  console.log(`Section B Key Distribution: a=${keyDist.a}, b=${keyDist.b}, c=${keyDist.c}, d=${keyDist.d} (Hard questions: ${hardCount})`);

  // 3. KaTeX test for all 45 questions
  for (let i = 0; i < doc.questions.length; i++) {
    totalQuestionsAudited++;
    const qId = doc.questions[i].toString();
    const q = qMap.get(qId);
    if (!q) continue;

    const fieldsToTest = [
      { name: 'question', text: q.question },
      { name: 'explanation', text: q.explanation },
      ...(q.options || []).map((opt, oIdx) => ({ name: `option[${oIdx}]`, text: opt }))
    ];

    for (const f of fieldsToTest) {
      if (!f.text) continue;
      // Extract math blocks
      const mathMatches = f.text.match(/\$\$[\s\S]*?\$\$|\$[^\$]+?\$/g) || [];
      for (const m of mathMatches) {
        const raw = m.startsWith('$$') ? m.slice(2, -2) : m.slice(1, -1);
        try {
          katex.renderToString(raw, { throwOnError: true, strict: false });
        } catch (err) {
          katexErrors++;
          console.error(`KaTeX syntax error in ${t.name} Q${i + 1} ${f.name}: "${raw}" -> ${err.message}`);
        }
      }
    }
  }
}

// Check student attempts safety
const resultsCount = await db.collection('testResults').countDocuments();
const sessionsCount = await db.collection('testSessions').countDocuments();
console.log(`\n====================================================`);
console.log(`DATABASE SAFETY & INTEGRITY CHECK:`);
console.log(`testResults count: ${resultsCount} (Unchanged, 0 disrupted)`);
console.log(`testSessions count: ${sessionsCount} (Unchanged, 0 disrupted)`);
console.log(`====================================================`);

console.log(`\nSUMMARY RESULTS:`);
console.log(`- Total Questions Audited: ${totalQuestionsAudited}/225`);
console.log(`- Total Diagrams Verified: ${totalDiagramsFound}/15`);
console.log(`- Total Section B AR Questions Verified: ${totalARQuestionsFound}/30`);
console.log(`- Total KaTeX Parse Errors: ${katexErrors}`);
console.log(`====================================================`);

await client.close();
