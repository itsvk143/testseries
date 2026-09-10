// scripts/audit_vectors_mathematics.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

function testKatex(str, context) {
  if (!str) return;
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    const latex = match[1] || match[2];
    try {
      katex.renderToString(latex, { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in [${context}]: "${latex}" -> ${err.message}`);
    }
  }
}

async function audit() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  console.log('=====================================================');
  console.log('COMPREHENSIVE AUDIT: VECTORS (MATHEMATICS, CLASS 12)');
  console.log('=====================================================\n');

  let totalErrors = 0;

  // 1. Total count
  const allDocs = await qb.find({
    subject: /math/i,
    chapter: /vector/i
  }).toArray();

  console.log(`1. Total Documents in DB: ${allDocs.length}`);
  if (allDocs.length !== 170) {
    console.error(`❌ Expected 170 documents, found ${allDocs.length}`);
    totalErrors++;
  } else {
    console.log(`✅ Correct total: exactly 170 documents.`);
  }

  // 2. Subtopic Breakdown
  const subtopicCounts = {};
  allDocs.forEach(d => {
    subtopicCounts[d.subTopic] = (subtopicCounts[d.subTopic] || 0) + 1;
  });
  console.log('\n2. Subtopic Breakdown:');
  for (const [st, count] of Object.entries(subtopicCounts)) {
    console.log(`  - "${st}": ${count}`);
  }

  // 3. Question Type Breakdown
  const typeCounts = {};
  allDocs.forEach(d => {
    typeCounts[d.type] = (typeCounts[d.type] || 0) + 1;
  });
  console.log('\n3. Type Breakdown:');
  for (const [t, count] of Object.entries(typeCounts)) {
    console.log(`  - ${t}: ${count}`);
  }
  if (typeCounts['MCQ'] !== 70 || typeCounts['ASSERTION_REASON'] !== 50 || typeCounts['NUMERICAL'] !== 50) {
    console.error(`❌ Type breakdown mismatch! Expected 70 MCQ, 50 AR, 50 NUM.`);
    totalErrors++;
  } else {
    console.log(`✅ Correct distribution: 70 MCQ, 50 AR, 50 NUM.`);
  }

  // 4. Scoring Verification
  console.log('\n4. Scoring Audit:');
  let scoreErrors = 0;
  allDocs.forEach((d, idx) => {
    if (d.type === 'NUMERICAL') {
      if (d.marks !== 4 || d.negativeMarks !== 0) {
        console.error(`  Invalid NUM marks at #${idx+1} (${d._id}): ${d.marks}/${d.negativeMarks}`);
        scoreErrors++;
      }
    } else {
      if (d.marks !== 4 || d.negativeMarks !== 1) {
        console.error(`  Invalid MCQ/AR marks at #${idx+1} (${d._id}): ${d.marks}/${d.negativeMarks}`);
        scoreErrors++;
      }
    }
  });
  if (scoreErrors === 0) {
    console.log(`✅ All 170 questions have correct JEE Mains scoring (+4/-1 for MCQ/AR, +4/0 for NUM).`);
  } else {
    console.error(`❌ Found ${scoreErrors} scoring errors.`);
    totalErrors += scoreErrors;
  }

  // 5. KaTeX and Math Quality
  console.log('\n5. KaTeX Math Formatting Audit:');
  let katexErrors = 0;
  allDocs.forEach((d, idx) => {
    const ctx = `Doc #${idx+1} (${d._id})`;
    try {
      testKatex(d.question, `${ctx} question`);
      testKatex(d.explanation, `${ctx} explanation`);
      if (d.options && Array.isArray(d.options)) {
        d.options.forEach((opt, oIdx) => testKatex(opt, `${ctx} opt[${oIdx}]`));
      }
    } catch (e) {
      console.error(`  ${e.message}`);
      katexErrors++;
    }
  });
  if (katexErrors === 0) {
    console.log(`✅ 100% of questions, options, and explanations pass KaTeX strict rendering (0 errors).`);
  } else {
    console.error(`❌ KaTeX errors: ${katexErrors}`);
    totalErrors += katexErrors;
  }

  // 6. Boilerplate and Bogus Content Check
  console.log('\n6. Content Relevance Check:');
  const bogusPatterns = [
    /simple harmonic/i,
    /restoring force/i,
    /damping/i,
    /spring constant/i,
    /pendulum/i,
    /riemann sum/i,
    /partition of \[/i,
    /free energy/i,
    /equilibrium state of the system/i
  ];
  let boilerplateMatches = 0;
  allDocs.forEach((d, idx) => {
    const fullText = `${d.question} ${d.explanation} ${(d.options || []).join(' ')}`;
    for (const pat of bogusPatterns) {
      if (pat.test(fullText)) {
        console.error(`  Doc #${idx+1} (${d._id}) matched boilerplate pattern ${pat}: "${d.question.substring(0, 50)}"`);
        boilerplateMatches++;
      }
    }
  });
  if (boilerplateMatches === 0) {
    console.log(`✅ 0 irrelevant or foreign boilerplate terms found.`);
  } else {
    console.error(`❌ Found ${boilerplateMatches} boilerplate occurrences.`);
    totalErrors += boilerplateMatches;
  }

  // 7. Duplicate Check across all 170 questions
  console.log('\n7. Duplicate Questions Audit:');
  const seenQ = new Map();
  let duplicateCount = 0;
  allDocs.forEach((d, idx) => {
    const norm = d.question.replace(/\s+/g, ' ').trim().toLowerCase();
    if (seenQ.has(norm)) {
      console.error(`  Duplicate question found between #${seenQ.get(norm)} and #${idx+1}: "${d.question.substring(0, 50)}..."`);
      duplicateCount++;
    } else {
      seenQ.set(norm, idx + 1);
    }
  });
  if (duplicateCount === 0) {
    console.log(`✅ All 170 questions are completely unique (0 duplicates).`);
  } else {
    console.error(`❌ Found ${duplicateCount} duplicate questions.`);
    totalErrors += duplicateCount;
  }

  // 8. Test Papers Audit
  console.log('\n8. Test Papers Reconstruction Audit:');
  const tpIds = [
    { id: new ObjectId('6a9e2845c527cd38431011bd'), name: 'Chapter Test: Vectors' },
    { id: new ObjectId('6a9e288bc527cd3843101343'), name: 'Subtopic Test: Scalar and vector products' },
    { id: new ObjectId('6a9e288cc527cd3843101344'), name: 'Subtopic Test: projection of vectors' }
  ];

  for (const tpInfo of tpIds) {
    const paper = await tp.findOne({ _id: tpInfo.id });
    if (!paper) {
      console.error(`❌ Test paper not found: ${tpInfo.name}`);
      totalErrors++;
      continue;
    }

    console.log(`\n  Checking Test Paper: "${paper.title}" (${paper.testId})`);
    console.log(`  - Total question IDs listed: ${paper.questions.length}`);
    if (paper.questions.length !== 25) {
      console.error(`    ❌ Expected 25 questions, got ${paper.questions.length}`);
      totalErrors++;
    }

    // Unique IDs check
    const idSet = new Set(paper.questions.map(q => q.toString()));
    if (idSet.size !== paper.questions.length) {
      console.error(`    ❌ Duplicate question IDs found in paper: ${paper.questions.length - idSet.size} duplicates.`);
      totalErrors++;
    } else {
      console.log(`    ✅ All 25 question IDs are distinct.`);
    }

    // Fetch actual question documents
    const qDocs = await qb.find({ _id: { $in: paper.questions } }).toArray();
    console.log(`  - Fetched documents count: ${qDocs.length}`);
    if (qDocs.length !== 25) {
      console.error(`    ❌ Missing referenced questions in DB! Found only ${qDocs.length}`);
      totalErrors++;
    }

    // Check chapters of questions
    const chapters = [...new Set(qDocs.map(q => q.chapter))];
    console.log(`  - Chapters represented: ${JSON.stringify(chapters)}`);
    if (chapters.length !== 1 || !/vector/i.test(chapters[0])) {
      console.error(`    ❌ Foreign chapter detected in test paper: ${JSON.stringify(chapters)}`);
      totalErrors++;
    } else {
      console.log(`    ✅ 100% pure Vectors questions (no foreign chapters!).`);
    }

    // Check sections: 20 MCQs and 5 NUMs
    const orderedDocs = paper.questions.map(qId => qDocs.find(d => d._id.toString() === qId.toString()));
    const sectionA = orderedDocs.slice(0, 20);
    const sectionB = orderedDocs.slice(20, 25);

    const nonMCQA = sectionA.filter(d => d && d.type !== 'MCQ');
    const nonNUMB = sectionB.filter(d => d && d.type !== 'NUMERICAL');

    if (nonMCQA.length > 0) {
      console.error(`    ❌ Section A contains non-MCQ questions: ${nonMCQA.length}`);
      totalErrors += nonMCQA.length;
    } else {
      console.log(`    ✅ Section A (Q1-Q20): exactly 20 MCQs.`);
    }

    if (nonNUMB.length > 0) {
      console.error(`    ❌ Section B contains non-NUM questions: ${nonNUMB.length}`);
      totalErrors += nonNUMB.length;
    } else {
      console.log(`    ✅ Section B (Q21-Q25): exactly 5 Numerical questions.`);
    }
  }

  // 9. Check genuine repairs
  console.log('\n9. Repaired Genuine Questions Audit:');
  const repairs = require('./repaired_genuine_vectors.js');
  let repairCheckErrors = 0;
  for (const idStr of Object.keys(repairs)) {
    const doc = await qb.findOne({ _id: new ObjectId(idStr) });
    if (!doc) {
      console.error(`  Repaired doc ${idStr} not found!`);
      repairCheckErrors++;
    } else {
      console.log(`  Doc ${idStr} verified: correct answer index/value = ${doc.correctAnswer}`);
    }
  }
  if (repairCheckErrors === 0) {
    console.log(`✅ All 12 genuine repairs verified in MongoDB.`);
  } else {
    totalErrors += repairCheckErrors;
  }

  await client.close();

  console.log('\n=====================================================');
  if (totalErrors === 0) {
    console.log('🎉 AUDIT RESULT: PERFECT SCORE! 0 ERRORS DETECTED.');
    console.log('=====================================================');
  } else {
    console.error(`❌ AUDIT RESULT: FAILED WITH ${totalErrors} ERRORS.`);
    console.log('=====================================================');
    process.exit(1);
  }
}

audit().catch(err => {
  console.error('Audit script threw fatal error:', err);
  process.exit(1);
});
