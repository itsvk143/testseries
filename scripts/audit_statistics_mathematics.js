// scripts/audit_statistics_mathematics.js
// Exhaustive post-replacement audit for Statistics (Mathematics, Class 12)

require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const katex = require('katex');

function extractLatex(text) {
  if (!text || typeof text !== 'string') return [];
  const formulas = [];
  const blockRegex = /\$\$([\s\S]*?)\$\$/g;
  let match;
  while ((match = blockRegex.exec(text)) !== null) {
    formulas.push({ latex: match[1], displayMode: true });
  }
  const stripped = text.replace(blockRegex, '');
  const inlineRegex = /\$([^\$]+?)\$/g;
  while ((match = inlineRegex.exec(stripped)) !== null) {
    formulas.push({ latex: match[1], displayMode: false });
  }
  return formulas;
}

function validateLatex(text, context) {
  const formulas = extractLatex(text);
  for (const { latex, displayMode } of formulas) {
    try {
      katex.renderToString(latex, { throwOnError: true, displayMode });
    } catch (err) {
      throw new Error(`KaTeX Error in ${context}: "${latex}" -> ${err.message}`);
    }
  }
}

const BOGUS_KEYWORDS = [
  'thermodynamics', 'equilibrium', 'oscillation', 'heat', 'entropy', 'piston',
  'molar', 'catalyst', 'reversible', 'isothermal', 'adiabatic', 'gibbs', 'le chatelier',
  'correlation coefficient', 'regression line', 'line of best fit', 'residual', 'scatter plot'
];

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB.');

  const questions = await db.collection('questionBank').find({
    chapter: 'Statistics'
  }).toArray();

  console.log(`\n=== 1. QUESTION BANK AUDIT ===`);
  console.log(`Total questions found: ${questions.length} (Expected: 199)`);

  let errors = 0;
  const seenTexts = new Map();

  const typeCounts = {};
  const subtopicCounts = {};

  for (const q of questions) {
    const qLabel = `[Doc ${q._id}]`;
    typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    subtopicCounts[q.subTopic] = (subtopicCounts[q.subTopic] || 0) + 1;

    // Check bogus keywords
    const fullText = `${q.question} ${(q.options || []).join(' ')} ${q.explanation || ''}`.toLowerCase();
    for (const kw of BOGUS_KEYWORDS) {
      if (fullText.includes(kw)) {
        console.error(`❌ ${qLabel} contains bogus/off-syllabus keyword "${kw}"`);
        errors++;
      }
    }

    // Check duplicates
    const norm = q.question.trim().replace(/\s+/g, ' ');
    if (seenTexts.has(norm)) {
      console.error(`❌ Duplicate question in ${qLabel}, matches ${seenTexts.get(norm)}`);
      errors++;
    } else {
      seenTexts.set(norm, qLabel);
    }

    // Check marking
    if (q.type === 'NUMERICAL') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        console.error(`❌ ${qLabel} Invalid NUM marking: marks=${q.marks}, neg=${q.negativeMarks}`);
        errors++;
      }
    } else {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`❌ ${qLabel} Invalid ${q.type} marking: marks=${q.marks}, neg=${q.negativeMarks}`);
        errors++;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`❌ ${qLabel} Expected 4 options, got ${q.options ? q.options.length : 0}`);
        errors++;
      }
    }

    // Validate KaTeX
    try {
      validateLatex(q.question, `${qLabel} question`);
      if (q.options) {
        q.options.forEach((opt, idx) => validateLatex(opt, `${qLabel} option[${idx}]`));
      }
      if (q.explanation) {
        validateLatex(q.explanation, `${qLabel} explanation`);
      }
    } catch (err) {
      console.error(`❌ ${err.message}`);
      errors++;
    }
  }

  console.log('Type breakdown:', typeCounts);
  console.log('Subtopic breakdown:', subtopicCounts);
  console.log(`Unique questions: ${seenTexts.size} / ${questions.length}`);

  console.log(`\n=== 2. TEST PAPERS AUDIT ===`);
  const testPaperIds = [
    { id: '6a9e2845c527cd38431011c1', name: 'Chapter: Statistics' },
    { id: '6a9e288dc527cd384310134b', name: 'Subtopic: Mean, median, mode' },
    { id: '6a9e288dc527cd384310134c', name: 'Subtopic: standard deviation' },
    { id: '6a9e288ec527cd384310134d', name: 'Subtopic: variance' }
  ];

  for (const tp of testPaperIds) {
    const paper = await db.collection('testPapers').findOne({ _id: new ObjectId(tp.id) });
    if (!paper) {
      console.error(`❌ Test paper not found: ${tp.name} (${tp.id})`);
      errors++;
      continue;
    }

    console.log(`\nAuditing paper: "${paper.title}" (${tp.name})`);
    console.log(`- Questions count: ${paper.questions.length}`);
    console.log(`- Total marks: ${paper.totalMarks}, Duration: ${paper.duration}`);

    if (paper.questions.length !== 25) {
      console.error(`❌ Expected 25 questions, got ${paper.questions.length}`);
      errors++;
    }

    const paperQDocs = await db.collection('questionBank').find({
      _id: { $in: paper.questions.map(id => new ObjectId(id)) }
    }).toArray();

    const paperQMap = new Map(paperQDocs.map(d => [d._id.toString(), d]));
    let mcqCount = 0;
    let numCount = 0;
    let foreignCount = 0;

    for (const qId of paper.questions) {
      const doc = paperQMap.get(qId.toString());
      if (!doc) {
        console.error(`❌ Referenced question ${qId} not found in questionBank`);
        errors++;
        continue;
      }
      if (doc.chapter !== 'Statistics') {
        console.error(`❌ Foreign question found: ${qId} belongs to ${doc.subject} / ${doc.chapter}`);
        foreignCount++;
        errors++;
      }
      if (doc.type === 'NUMERICAL') numCount++;
      else mcqCount++;
    }

    console.log(`- Composition: ${mcqCount} Section A (MCQ/AR) + ${numCount} Section B (NUM)`);
    console.log(`- Foreign questions: ${foreignCount}`);

    if (mcqCount !== 20 || numCount !== 5) {
      console.error(`❌ Paper ${tp.name} does not match 20 MCQ + 5 NUM pattern!`);
      errors++;
    }
  }

  console.log(`\n========================================`);
  console.log(`TOTAL AUDIT ERRORS: ${errors}`);
  if (errors === 0) {
    console.log('🎉 100% AUDIT SUCCESS! All questions and test papers are in pristine condition!');
  } else {
    console.error('❌ Audit reported errors.');
  }

  await client.close();
  process.exit(errors === 0 ? 0 : 1);
}

main().catch(err => {
  console.error('Fatal error in audit:', err);
  process.exit(1);
});
