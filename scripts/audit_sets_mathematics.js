// scripts/audit_sets_mathematics.js
// Rigorous Post-Flight Audit for Sets, Relations, and Functions in MongoDB

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

function testKatex(text, id, field) {
  if (!text) return 0;
  let errors = 0;
  const regex = /\$\$([\s\S]*?)\$\$|\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      console.error(`❌ KaTeX Error in ${id} (${field}): "${math}" -> ${err.message}`);
      errors++;
    }
  }
  return errors;
}

async function audit() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log('====================================================');
  console.log('AUDIT: Sets, Relations, and Functions (QuestionBank & TestPapers)');
  console.log('====================================================\n');

  const qb = db.collection('questionBank');
  const tp = db.collection('testPapers');

  const questions = await qb.find({ chapter: 'Sets, Relations, and Functions' }).toArray();
  console.log(`Total questions found in questionBank: ${questions.length} (Expected: 201)`);

  let errors = 0;
  const seenTexts = new Set();
  const bogusKeywords = ['calorimeter', 'carnot', 'thermodynamic', 'resistor', 'capacitor', 'isothermal', 'adiabatic', 'momentum'];

  for (const q of questions) {
    const id = q._id.toString();

    // 1. Text checks
    const qText = q.question || q.questionText || '';
    if (!qText.trim()) {
      console.error(`❌ Empty question text: ${id}`);
      errors++;
    }

    const solText = q.solution || q.explanation || '';
    if (!solText.trim() || solText === 'undefined') {
      console.error(`❌ Invalid or missing solution: ${id}`);
      errors++;
    }

    // 2. Bogus keywords
    const lowerQ = (qText + ' ' + solText).toLowerCase();
    for (const kw of bogusKeywords) {
      if (lowerQ.includes(kw)) {
        console.error(`❌ Bogus keyword "${kw}" found in question: ${id}`);
        errors++;
      }
    }

    // 3. Duplicate check
    const norm = qText.trim().replace(/\s+/g, ' ');
    if (seenTexts.has(norm)) {
      console.error(`❌ Duplicate question in DB: "${norm.slice(0, 60)}..." (${id})`);
      errors++;
    }
    seenTexts.add(norm);

    // 4. Options & Types
    if (q.type === 'single_choice' || q.type === 'assertion_reason') {
      if (!q.options || q.options.length !== 4) {
        console.error(`❌ MCQ/AR must have 4 options: ${id}, has ${q.options?.length}`);
        errors++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`❌ Incorrect scoring for MCQ/AR ${id}: ${q.marks}/${q.negativeMarks}`);
        errors++;
      }
    } else if (q.type === 'numerical') {
      if (q.options && q.options.length !== 0) {
        console.error(`❌ Numerical must have 0 options: ${id}, has ${q.options.length}`);
        errors++;
      }
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        console.error(`❌ Incorrect scoring for Numerical ${id}: ${q.marks}/${q.negativeMarks}`);
        errors++;
      }
    }

    // 5. KaTeX validation
    errors += testKatex(qText, id, 'question');
    if (q.options) {
      q.options.forEach((opt, oi) => {
        errors += testKatex(opt, id, `option[${oi}]`);
      });
    }
    errors += testKatex(solText, id, 'solution');
  }

  console.log(`\nQuestionBank Audit complete: ${errors} errors detected.`);

  // Audit Test Papers
  console.log('\n--- Auditing Test Papers ---');
  const paperIds = [
    '6a9e2843c527cd38431011ad',
    '6a9e2883c527cd3843101320',
    '6a9e2883c527cd3843101321',
    '6a9e2883c527cd3843101322',
    '6a9e2884c527cd3843101323'
  ];

  let tpErrors = 0;
  for (const pid of paperIds) {
    const paper = await tp.findOne({ _id: new ObjectId(pid) });
    if (!paper) {
      console.error(`❌ Paper ${pid} not found!`);
      tpErrors++;
      continue;
    }

    console.log(`Paper ${pid} ("${paper.title}"):`);
    console.log(`  Total Questions: ${paper.questions?.length} (Field: ${paper.totalQuestions})`);
    console.log(`  Total Marks: ${paper.totalMarks} | Duration: ${paper.duration} min`);

    if (paper.questions?.length !== 25 || paper.totalQuestions !== 25) {
      console.error(`  ❌ Paper does not have 25 questions!`);
      tpErrors++;
    }
    if (paper.totalMarks !== 100) {
      console.error(`  ❌ Total marks is not 100!`);
      tpErrors++;
    }

    const mcqCount = paper.questions.filter(q => q.type === 'single_choice' || q.type === 'assertion_reason').length;
    const numCount = paper.questions.filter(q => q.type === 'numerical').length;
    console.log(`  Distribution: ${mcqCount} MCQ/AR, ${numCount} Numerical`);

    if (mcqCount !== 20 || numCount !== 5) {
      console.error(`  ❌ Invalid paper distribution: expected 20 MCQ/AR + 5 NUM, got ${mcqCount} MCQ + ${numCount} NUM`);
      tpErrors++;
    }
  }

  console.log(`\nTest Papers Audit complete: ${tpErrors} errors detected.`);

  await client.close();

  if (errors === 0 && tpErrors === 0 && questions.length === 201) {
    console.log('\n🌟 SETS, RELATIONS, AND FUNCTIONS AUDIT PASSED 100% CLEAN! 🌟');
  } else {
    console.error('\n❌ AUDIT FAILED WITH ISSUES!');
    process.exit(1);
  }
}

audit().catch(err => {
  console.error('Audit fatal error:', err);
  process.exit(1);
});
