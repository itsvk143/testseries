// scripts/audit_prob_mathematics.js
// Comprehensive audit of Probability questions and test papers in MongoDB

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
  const matches = [];
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1] || match[2]);
  }
  return matches;
}

function testKatex(latex) {
  try {
    katex.renderToString(latex, { throwOnError: true });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI missing');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log('✅ Connected to MongoDB');

  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  console.log('\n=== AUDIT 1: Total Document Count & Chapter Integrity ===');
  const totalProb = await qb.countDocuments({ chapter: 'Probability' });
  console.log(`Total Probability questions: ${totalProb} (Expected: 251)`);
  if (totalProb !== 251) throw new Error(`Unexpected document count: ${totalProb}`);

  const bySubtopic = await qb.aggregate([
    { $match: { chapter: 'Probability' } },
    { $group: { _id: '$subtopic', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).toArray();
  console.log('Subtopic distribution:', bySubtopic);

  console.log('\n=== AUDIT 2: Bogus Content & Irrelevance Scan ===');
  const bogusKeywords = [
    'thermodynamic', 'carnot', 'gibbs', 'isothermal', 'adiabatic', 'enthalpy',
    'entropy', 'ideal gas', 'free energy', 'activation energy', 'arrhenius',
    'standard state', 'molar heat', 'equilibrium constant', 'redox'
  ];

  const allProbDocs = await qb.find({ chapter: 'Probability' }).toArray();
  let bogusMatches = 0;
  for (const doc of allProbDocs) {
    const fullText = (doc.question + ' ' + (doc.options || []).join(' ') + ' ' + (doc.solution || '')).toLowerCase();
    for (const kw of bogusKeywords) {
      if (fullText.includes(kw)) {
        console.error(`🚨 Bogus keyword "${kw}" found in doc ${doc._id}: ${doc.question.slice(0, 60)}...`);
        bogusMatches++;
      }
    }
  }
  console.log(`Bogus keyword matches: ${bogusMatches} (Expected: 0)`);
  if (bogusMatches > 0) throw new Error('Bogus keywords detected!');

  console.log('\n=== AUDIT 3: Duplicate Question Texts ===');
  const questionMap = new Map();
  let dupCount = 0;
  for (const doc of allProbDocs) {
    const norm = doc.question.trim().replace(/\s+/g, ' ');
    if (questionMap.has(norm)) {
      console.error(`🚨 Duplicate found between ${doc._id} and ${questionMap.get(norm)}: ${norm.slice(0, 60)}...`);
      dupCount++;
    } else {
      questionMap.set(norm, doc._id);
    }
  }
  console.log(`Duplicate question count: ${dupCount} (Expected: 0)`);
  if (dupCount > 0) throw new Error('Duplicates found!');

  console.log('\n=== AUDIT 4: Schema & Scoring Compliance ===');
  let schemaErrors = 0;
  for (const doc of allProbDocs) {
    if (!doc.question || typeof doc.question !== 'string') {
      console.error(`Invalid question in ${doc._id}`);
      schemaErrors++;
    }
    if (doc.type === 'single_choice' || doc.type === 'assertion_reason') {
      if (!Array.isArray(doc.options) || doc.options.length !== 4) {
        console.error(`Invalid options length (${doc.options?.length}) in ${doc._id}`);
        schemaErrors++;
      }
      if (doc.correctOption === null || doc.correctOption === undefined || doc.correctOption < 0 || doc.correctOption > 3) {
        console.error(`Invalid correctOption (${doc.correctOption}) in ${doc._id}`);
        schemaErrors++;
      }
      if (doc.marks !== 4 || doc.negativeMarks !== 1) {
        console.error(`Invalid marks (${doc.marks}, -${doc.negativeMarks}) in MCQ ${doc._id}`);
        schemaErrors++;
      }
    } else if (doc.type === 'numerical') {
      if (doc.correctAnswer === null || doc.correctAnswer === undefined || isNaN(Number(doc.correctAnswer))) {
        console.error(`Invalid correctAnswer (${doc.correctAnswer}) in numerical ${doc._id}`);
        schemaErrors++;
      }
      if (doc.marks !== 4 || doc.negativeMarks !== 0) {
        console.error(`Invalid marks (${doc.marks}, -${doc.negativeMarks}) in NUM ${doc._id}`);
        schemaErrors++;
      }
    } else {
      console.error(`Unknown type "${doc.type}" in ${doc._id}`);
      schemaErrors++;
    }
    if (!doc.solution || typeof doc.solution !== 'string' || doc.solution.trim().length < 10) {
      console.error(`Missing or short solution in ${doc._id}`);
      schemaErrors++;
    }
  }
  console.log(`Schema / Scoring errors: ${schemaErrors} (Expected: 0)`);
  if (schemaErrors > 0) throw new Error('Schema errors detected!');

  console.log('\n=== AUDIT 5: Strict KaTeX Syntax Validation ===');
  let katexErrors = 0;
  for (const doc of allProbDocs) {
    const textsToCheck = [doc.question, ...(doc.options || []), doc.solution];
    for (const text of textsToCheck) {
      const snippets = extractLatex(text);
      for (const snippet of snippets) {
        const res = testKatex(snippet);
        if (!res.ok) {
          console.error(`🚨 KaTeX error in doc ${doc._id}: "${res.error}"\nSnippet: ${snippet}`);
          katexErrors++;
        }
      }
    }
  }
  console.log(`KaTeX errors: ${katexErrors} (Expected: 0)`);
  if (katexErrors > 0) throw new Error('KaTeX errors detected!');

  console.log('\n=== AUDIT 6: Test Papers Integrity Check ===');
  const testPaperIds = [
    '6a9e2845c527cd38431011c0',
    '6a9e288ec527cd384310134e',
    '6a9e288ec527cd3843101351'
  ];

  for (const tId of testPaperIds) {
    const paper = await tp.findOne({ _id: new ObjectId(tId) });
    if (!paper) {
      console.error(`🚨 Test paper not found: ${tId}`);
      continue;
    }
    console.log(`Checking "${paper.title}" (${paper._id}):`);
    console.log(`  Total marks: ${paper.totalMarks}, Duration: ${paper.duration}, Total questions: ${paper.questions.length}`);
    if (paper.questions.length !== 25) throw new Error(`Test paper ${tId} does not have 25 questions`);

    const qDocs = await qb.find({ _id: { $in: paper.questions } }).toArray();
    if (qDocs.length !== 25) throw new Error(`Test paper ${tId} has missing question references in questionBank`);

    const mcqCount = qDocs.filter(d => d.type === 'single_choice' || d.type === 'assertion_reason').length;
    const numCount = qDocs.filter(d => d.type === 'numerical').length;
    console.log(`  Composition: ${mcqCount} MCQs/AR + ${numCount} Numericals`);
    if (mcqCount !== 20 || numCount !== 5) {
      throw new Error(`Test paper ${tId} composition mismatch: expected 20 MCQ + 5 NUM, got ${mcqCount} MCQ + ${numCount} NUM`);
    }

    // Verify all questions belong to Probability
    const nonProb = qDocs.filter(d => d.chapter !== 'Probability');
    if (nonProb.length > 0) {
      throw new Error(`Test paper ${tId} contains non-Probability questions!`);
    }
    console.log(`  ✅ All 25 questions belong to chapter "Probability".`);
  }

  await client.close();
  console.log('\n🌟 ALL 6 POST-FLIGHT AUDIT CHECKS PASSED WITH ZERO ERRORS! 🌟');
}

main().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
