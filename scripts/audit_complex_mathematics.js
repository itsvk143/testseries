// scripts/audit_complex_mathematics.js
// Comprehensive Post-Flight Verification and Audit for Complex Numbers in MongoDB

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

function validateKaTeX(text, context) {
  if (!text || typeof text !== 'string') return;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      console.error(`❌ KaTeX Error in ${context}: "${math}"`);
      console.error(err.message);
      throw err;
    }
  }
}

async function audit() {
  console.log('=== STARTING POST-FLIGHT AUDIT FOR COMPLEX NUMBERS ===\n');

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');

  // 1. Total Count Verification
  const allDocs = await qb.find({
    subject: 'Mathematics',
    chapter: 'Complex Numbers'
  }).toArray();

  console.log(`1. Total Documents: ${allDocs.length} (Expected: 250)`);
  if (allDocs.length !== 250) {
    throw new Error(`Total count mismatch: got ${allDocs.length}, expected 250`);
  }

  // 2. Subtopic Breakdown
  const subtopicCounts = {};
  for (const doc of allDocs) {
    const st = doc.subtopic || doc.subTopic;
    subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
  }
  console.log('\n2. Subtopic Distribution:');
  for (const [st, count] of Object.entries(subtopicCounts)) {
    console.log(`   - ${st}: ${count}`);
  }

  const expectedCounts = {
    'Argand plane': 39,
    "Euler's form and rotation of complex numbers": 41,
    'Geometry in complex plane (circle, line equations)': 40,
    'Modulus and argument': 50,
    'Square roots': 40,
    'Triangle inequality': 40
  };

  for (const [st, expected] of Object.entries(expectedCounts)) {
    if (subtopicCounts[st] !== expected) {
      throw new Error(`Subtopic count mismatch for "${st}": got ${subtopicCounts[st]}, expected ${expected}`);
    }
  }

  // 3. Bogus Keywords Check
  const bogusKeywords = [
    'thermodynamic', 'ideal gas', 'heat engine', 'carnot', 'isothermal',
    'adiabatic', 'entropy', 'resistor', 'voltage', 'kinetic energy'
  ];
  console.log('\n3. Bogus Physics/Thermodynamics Keywords Check:');
  let bogusFound = 0;
  for (const doc of allDocs) {
    const fullText = `${doc.question} ${(doc.options || []).join(' ')} ${doc.solution || ''} ${doc.explanation || ''}`.toLowerCase();
    for (const kw of bogusKeywords) {
      if (fullText.includes(kw)) {
        console.error(`   Found bogus keyword "${kw}" in doc ${doc._id}`);
        bogusFound++;
      }
    }
  }
  console.log(`   Bogus occurrences found: ${bogusFound} (Expected: 0)`);
  if (bogusFound > 0) throw new Error('Bogus generator questions still exist!');

  // 4. Duplicate Question Check
  console.log('\n4. Question Text Uniqueness:');
  const seen = new Set();
  let duplicates = 0;
  for (const doc of allDocs) {
    const qNorm = doc.question.trim().replace(/\s+/g, ' ');
    if (seen.has(qNorm)) {
      console.error(`   Duplicate found: "${qNorm.slice(0, 50)}..." (ID: ${doc._id})`);
      duplicates++;
    }
    seen.add(qNorm);
  }
  console.log(`   Duplicate questions: ${duplicates} (Expected: 0)`);
  if (duplicates > 0) throw new Error('Duplicate questions detected!');

  // 5. Scoring & Schema Verification
  console.log('\n5. Scoring & Marking Schemes Verification:');
  let scoringErrors = 0;
  for (const doc of allDocs) {
    if (doc.type === 'single_choice' || doc.type === 'assertion_reason') {
      if (doc.marks !== 4 || doc.negativeMarks !== 1) scoringErrors++;
      if (!Array.isArray(doc.options) || doc.options.length !== 4) scoringErrors++;
    } else if (doc.type === 'numerical') {
      if (doc.marks !== 4 || doc.negativeMarks !== 0) scoringErrors++;
      if (!doc.correctAnswer || typeof doc.correctAnswer !== 'string') scoringErrors++;
    }
  }
  console.log(`   Scoring/schema errors: ${scoringErrors} (Expected: 0)`);
  if (scoringErrors > 0) throw new Error('Scoring errors detected!');

  // 6. KaTeX Strict Compliance
  console.log('\n6. KaTeX Strict Syntax Validation (throwOnError: true):');
  let katexErrors = 0;
  for (let i = 0; i < allDocs.length; i++) {
    const doc = allDocs[i];
    const ctx = `Doc ${doc._id} (index ${i})`;
    try {
      validateKaTeX(doc.question, `${ctx} Question`);
      if (doc.options) {
        doc.options.forEach((opt, oIdx) => validateKaTeX(opt, `${ctx} Opt ${oIdx}`));
      }
      validateKaTeX(doc.solution, `${ctx} Solution`);
    } catch (err) {
      katexErrors++;
    }
  }
  console.log(`   KaTeX parse errors: ${katexErrors} (Expected: 0)`);
  if (katexErrors > 0) throw new Error('KaTeX syntax errors detected!');

  // 7. Test Paper Verification
  console.log('\n7. Test Paper 6a9e2843c527cd38431011ae Verification:');
  const tp = await db.collection('testPapers').findOne({ _id: new ObjectId('6a9e2843c527cd38431011ae') });
  if (!tp) throw new Error('Test paper not found!');
  console.log(`   Title: "${tp.title}", Subject: "${tp.subject}", Duration: ${tp.duration} mins, Marks: ${tp.totalMarks}`);
  console.log(`   Question count: ${tp.questions.length}`);
  
  const tpIds = tp.questions.map(id => new ObjectId(id));
  const tpQuestions = await qb.find({ _id: { $in: tpIds } }).toArray();
  console.log(`   Found in questionBank: ${tpQuestions.length}/25`);

  let tpMcq = 0, tpNum = 0, nonComplex = 0;
  for (const q of tpQuestions) {
    if (q.chapter !== 'Complex Numbers') nonComplex++;
    if (q.type === 'single_choice' || q.type === 'assertion_reason') tpMcq++;
    if (q.type === 'numerical') tpNum++;
  }
  console.log(`   Test Paper Breakdown: ${tpMcq} MCQs, ${tpNum} Numericals, ${nonComplex} Non-Complex`);
  if (tpQuestions.length !== 25 || tpMcq !== 20 || tpNum !== 5 || nonComplex !== 0) {
    throw new Error('Test paper structure does not meet standard JEE Mains requirements!');
  }

  await client.close();
  console.log('\n======================================================');
  console.log('🌟 ALL 7 AUDIT CRITERIA PASSED WITH 100% PERFECTION! 🌟');
  console.log('======================================================');
}

audit().catch(err => {
  console.error('❌ Audit failed:', err);
  process.exit(1);
});
