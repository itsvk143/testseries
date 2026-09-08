const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

function validateKatexInText(text, context) {
  if (!text || typeof text !== 'string') return;
  const inlineRegex = /\$([^\$]+?)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    const math = match[1].trim();
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      throw new Error(`[KaTeX Error in ${context}] Math: "${math}" -> ${err.message}`);
    }
  }
}

async function audit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  console.log('=== FULL CHAPTER AUDIT: BOTANY -> CELL STRUCTURE AND FUNCTION ===\n');

  const questions = await db.collection('questionBank').find({
    subject: 'Botany',
    chapter: 'Cell Structure and Function'
  }).toArray();

  console.log(`Total questions fetched from DB: ${questions.length}`);
  if (questions.length !== 1490) {
    throw new Error(`Expected 1490 questions, found ${questions.length}`);
  }

  const bogusKeywords = [
    'functional reserve capacity',
    'clinical evaluation',
    'impaired receptor sensitivity',
    'standard SI or standardized scientific units',
    'slope of the characteristic curve',
    'violate the principle of energy conservation',
    'Regarding Metabolic pathway regulation',
    'Regarding Developmental differentiation',
    'Regarding Evolutionary adaptation',
    'Regarding Signaling cascades and receptor-ligand',
    'Regarding Genetic control, transcriptional regulation',
    'In a cytogenetic and physiological study of',
    'During experimental perturbation of',
    'asymptotic analysis is standard in physics'
  ];

  const subtopicMap = {};
  let totalKaTeXErrors = 0;
  let bogusMatches = 0;
  let schemaErrors = 0;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const sub = q.subTopic || 'Unknown';
    if (!subtopicMap[sub]) {
      subtopicMap[sub] = { total: 0, ar: 0, mcq: 0 };
    }
    subtopicMap[sub].total++;
    if (q.type === 'ASSERTION_REASON') subtopicMap[sub].ar++;
    else if (q.type === 'MCQ') subtopicMap[sub].mcq++;

    // Check bogus phrases
    const fullText = `${q.question} ${q.options ? q.options.join(' ') : ''} ${q.explanation || ''}`.toLowerCase();
    for (const kw of bogusKeywords) {
      if (fullText.includes(kw.toLowerCase())) {
        console.error(`[Bogus Keyword Found] Q#${i + 1} (${q._id}): contains "${kw}"`);
        bogusMatches++;
      }
    }

    // Schema validation
    if (!q.question || typeof q.question !== 'string' || q.question.trim().length < 15) {
      console.error(`[Schema Error] Q#${i + 1} (${q._id}): Question text too short or invalid`);
      schemaErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[Schema Error] Q#${i + 1} (${q._id}): options array invalid length (${q.options?.length})`);
      schemaErrors++;
    } else {
      const ansIdx = Number(q.correctAnswer);
      if (isNaN(ansIdx) || ansIdx < 0 || ansIdx > 3 || !q.options[ansIdx]) {
        console.error(`[Schema Error] Q#${i + 1} (${q._id}): correctAnswer "${q.correctAnswer}" is not a valid option index (0..3)`);
        schemaErrors++;
      }
    }
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length < 20) {
      console.error(`[Schema Error] Q#${i + 1} (${q._id}): explanation too short or missing`);
      schemaErrors++;
    }
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`[Schema Error] Q#${i + 1} (${q._id}): invalid marks (${q.marks}, ${q.negativeMarks})`);
      schemaErrors++;
    }

    // KaTeX validation
    try {
      validateKatexInText(q.question, `Q#${i + 1} Question`);
      if (q.options) {
        q.options.forEach((opt, oIdx) => validateKatexInText(opt, `Q#${i + 1} Opt#${oIdx + 1}`));
      }
      validateKatexInText(q.explanation, `Q#${i + 1} Explanation`);
    } catch (err) {
      console.error(err.message);
      totalKaTeXErrors++;
    }
  }

  console.log('\n--- Subtopic Breakdown ---');
  for (const [sub, counts] of Object.entries(subtopicMap)) {
    console.log(`Subtopic: "${sub}"`);
    console.log(`  Total: ${counts.total}, AR: ${counts.ar}, MCQ: ${counts.mcq}`);
  }

  console.log('\n--- Integrity Metrics ---');
  console.log(`Total Bogus Keyword Matches: ${bogusMatches}`);
  console.log(`Total Schema Errors: ${schemaErrors}`);
  console.log(`Total KaTeX Render Errors: ${totalKaTeXErrors}`);

  if (bogusMatches > 0 || schemaErrors > 0 || totalKaTeXErrors > 0) {
    throw new Error('Integrity validation failed!');
  }

  console.log('\n--- Checking Test Papers Referencing Cell Structure and Function ---');
  const cellIdSet = new Set(questions.map(q => q._id.toString()));
  const testPapers = await db.collection('testPapers').find().toArray();

  let papersReferencingCell = 0;
  let totalCellRefs = 0;
  let brokenRefs = 0;

  for (const paper of testPapers) {
    const qIds = paper.questions || [];
    let countInPaper = 0;
    for (const qId of qIds) {
      const qStr = qId.toString();
      if (cellIdSet.has(qStr)) {
        countInPaper++;
        totalCellRefs++;
      }
    }
    if (countInPaper > 0) {
      papersReferencingCell++;
      const fetchedQs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
      if (fetchedQs.length !== qIds.length) {
        console.error(`[Broken Reference] Paper "${paper.title}" (${paper._id}) expects ${qIds.length} questions, found ${fetchedQs.length}`);
        brokenRefs++;
      } else {
        console.log(`✓ Paper "${paper.title}" (${paper._id}): ${countInPaper} Cell questions resolved (${fetchedQs.length}/${qIds.length} total)`);
      }
    }
  }

  console.log(`\nTotal Test Papers with Cell questions: ${papersReferencingCell}`);
  console.log(`Total Cell references in test papers: ${totalCellRefs}`);
  console.log(`Broken references found: ${brokenRefs}`);

  if (brokenRefs > 0) {
    throw new Error('Broken test paper references detected!');
  }

  console.log('\n🎉 ALL CELL STRUCTURE AND FUNCTION AUDIT CHECKS PASSED PERFECTLY!');
  await client.close();
}

audit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
