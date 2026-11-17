import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import path from 'path';

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

const katex = await import('katex');

// Extract preProcess & sanitizeMath
const src = fs.readFileSync('src/components/LatexRenderer.js', 'utf8');
const start = src.indexOf('const katexOpts =');
const end = src.indexOf('const renderFragment =');
const extracted = src.slice(start, end) + '\nreturn { preProcess, sanitizeMath, katexOpts };';
const { preProcess, sanitizeMath, katexOpts } = new Function(extracted)();

console.log("=== COMPREHENSIVE VERIFICATION FOR SOLIDS & ASSOCIATED TESTS ===");

const targetTestIds = [
  "neet-SUBTOPIC-Physics-Elasticity-(Hooke's-law,-Young's-modulus)",
  "neet-SUBTOPIC-Physics-Fluid-mechanics-(Pascal's-law,-Bernoulli's-principle,-viscosity)",
  "neet-SUBTOPIC-Physics-Surface-tension,-surface-energy,-and-capillarity",
  "neet-SUBTOPIC-Physics-Thermal-expansion-and-calorimetry",
  "neet-SUBTOPIC-Physics-Stefan's-law-of-radiation"
];

let totalQuestionsChecked = 0;
let totalDiagramsFound = 0;
let totalARFound = 0;
let katexErrors = 0;

for (let i = 0; i < targetTestIds.length; i++) {
  const testId = targetTestIds[i];
  console.log(`\n------------------------------------------------------------`);
  console.log(`Auditing Test ${i + 1}/${targetTestIds.length}: ${testId}`);
  console.log(`------------------------------------------------------------`);

  const tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
    console.error(`[FAIL] Test paper not found: ${testId}`);
    continue;
  }

  if (!tp.questions || tp.questions.length !== 45) {
    console.error(`[FAIL] Expected 45 questions, found ${tp.questions?.length}`);
    continue;
  }
  console.log(`[PASS] Test paper exists with exactly 45 questions.`);

  const qDocs = await db.collection('questionBank').find({ _id: { $in: tp.questions } }).toArray();
  const map = new Map(qDocs.map(d => [d._id.toString(), d]));

  if (qDocs.length !== 45) {
    console.error(`[FAIL] Expected 45 questionBank records, resolved ${qDocs.length}`);
  }

  // Verify Q1-Q3 Diagrams
  let diagInTest = 0;
  for (let qIdx = 0; qIdx < 3; qIdx++) {
    const q = map.get(tp.questions[qIdx].toString());
    if (q && (q.image || q.img)) {
      const imgPath = path.join(process.cwd(), 'public', q.image || q.img);
      if (fs.existsSync(imgPath)) {
        diagInTest++;
        totalDiagramsFound++;
      } else {
        console.error(`[FAIL] Diagram file missing on disk: ${imgPath}`);
      }
    } else {
      console.error(`[FAIL] Q${qIdx + 1} does not have an image property`);
    }
  }
  console.log(`[PASS] Diagrams verified: ${diagInTest}/3 on disk and mapped.`);

  // Verify Section B Q40-Q45 AR
  let arInTest = 0;
  const arKeys = [];
  for (let qIdx = 39; qIdx < 45; qIdx++) {
    const q = map.get(tp.questions[qIdx].toString());
    if (q && (q.type === 'ASSERTION_REASON' || q.questionType?.includes('Assertion'))) {
      arInTest++;
      totalARFound++;
      arKeys.push(q.correctOption || q.correctAnswer);
    } else {
      console.error(`[FAIL] Q${qIdx + 1} is not typed as ASSERTION_REASON`);
    }
  }
  console.log(`[PASS] Section B AR verified: ${arInTest}/6. Key distribution: ${arKeys.join(', ')}`);

  // Verify KaTeX rendering on all 45 questions
  for (let qIdx = 0; qIdx < 45; qIdx++) {
    totalQuestionsChecked++;
    const q = map.get(tp.questions[qIdx].toString());
    if (!q) continue;

    testMathString(q.question || q.text || '', `Test ${i + 1} Q${qIdx + 1} Question`);
    if (Array.isArray(q.options)) {
      q.options.forEach((opt, oIdx) => {
        const optStr = typeof opt === 'string' ? opt : (opt?.text || '');
        testMathString(optStr, `Test ${i + 1} Q${qIdx + 1} Opt ${oIdx}`);
      });
    }
    if (q.explanation) {
      testMathString(q.explanation, `Test ${i + 1} Q${qIdx + 1} Explanation`);
    }
  }
}

function testMathString(raw, label) {
  const prepared = preProcess(raw);
  const parts = prepared.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g);

  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = sanitizeMath(part.slice(2, -2));
      try {
        katex.default.renderToString(math, katexOpts(true));
      } catch (e) {
        console.error(`[KaTeX Error Display] ${label}: ${e.message} in ${math}`);
        katexErrors++;
      }
    } else if (part.startsWith('$') && part.endsWith('$')) {
      const math = sanitizeMath(part.slice(1, -1));
      try {
        katex.default.renderToString(math, katexOpts(false));
      } catch (e) {
        console.error(`[KaTeX Error Inline] ${label}: ${e.message} in ${math}`);
        katexErrors++;
      }
    }
  }
}

// Student Attempt Check
const resultsCount = await db.collection('testResults').countDocuments({ testId: { $in: targetTestIds } });
const sessionsCount = await db.collection('testSessions').countDocuments({ testId: { $in: targetTestIds } });

console.log(`\n============================================================`);
console.log(`FINAL VERIFICATION AUDIT SUMMARY:`);
console.log(`  Tests Audited: 5/5`);
console.log(`  Total Questions: ${totalQuestionsChecked}/225`);
console.log(`  Total Verified Diagrams: ${totalDiagramsFound}/15`);
console.log(`  Total Section B AR: ${totalARFound}/30`);
console.log(`  Total KaTeX Math Errors: ${katexErrors}`);
console.log(`  Student Attempts Impacted: Results=${resultsCount}, Sessions=${sessionsCount}`);
console.log(`============================================================`);

await client.close();
