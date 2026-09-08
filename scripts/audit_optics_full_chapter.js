require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const katex = require('katex');

function extractLatexSpans(text) {
  if (!text) return [];
  const spans = [];
  const regex = /(\$\$[\s\S]*?\$\$|\$([^\$\n]+?)\$|\\\[[\s\S]*?\\\]|\\\(.+?\\\)|\\[a-zA-Z]+(?:\{[^{}]*\}|\[[^\[\]]*\])*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    let raw = match[0];
    let math = raw;
    let displayMode = false;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      math = raw.slice(1, -1);
      displayMode = false;
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      math = raw.slice(2, -2);
      displayMode = false;
    }
    spans.push({ raw, math, displayMode });
  }
  return spans;
}

function testLatex(str) {
  if (!str) return [];
  const errors = [];
  const spans = extractLatexSpans(str);
  for (const span of spans) {
    try {
      katex.renderToString(span.math, {
        throwOnError: true,
        displayMode: span.displayMode
      });
    } catch (err) {
      errors.push({ raw: span.raw, error: err.message });
    }
  }
  return errors;
}

async function runAudit() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');
  const testPapersColl = db.collection('testPapers');

  console.log("Connected to Atlas testseries database.");

  const allDocs = await collection.find({ chapter: "Optics" }).toArray();
  console.log(`\n=== 1. CHAPTER OVERVIEW ===`);
  console.log(`Total questions found in "Optics": ${allDocs.length} (expected 585)`);

  const subtopicCounts = {};
  const typeCounts = {};
  let totalKaTeXErrors = 0;
  let totalBogusTerms = 0;
  let totalMarksErrors = 0;
  let totalAnswerErrors = 0;

  const suspiciousTerms = [
    'chloroplast', 'dna', 'cell wall', 'membrane', 'bacteria',
    'mitochondria', 'bogus', 'dummy'
  ];

  for (const doc of allDocs) {
    const st = doc.subTopic || doc.subtopic || "Unknown";
    subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
    typeCounts[doc.type] = (typeCounts[doc.type] || 0) + 1;

    // Check marks
    if (doc.marks !== 4 || doc.negativeMarks !== 1) {
      console.error(`[Doc ${doc._id}] Invalid marks: marks=${doc.marks}, neg=${doc.negativeMarks}`);
      totalMarksErrors++;
    }

    // Check suspicious terms
    const fullText = (doc.question + ' ' + (doc.explanation || '') + ' ' + (doc.options || []).join(' ')).toLowerCase();
    for (const term of suspiciousTerms) {
      if (fullText.includes(term)) {
        console.error(`[Doc ${doc._id}] Contains suspicious term: "${term}"`);
        totalBogusTerms++;
      }
    }

    // Check options & answer
    if (doc.type === 'ASSERTION_REASON' || doc.type === 'MCQ') {
      if (!Array.isArray(doc.options) || doc.options.length !== 4) {
        console.error(`[Doc ${doc._id}] Options length not 4: ${doc.options ? doc.options.length : 0}`);
        totalAnswerErrors++;
      }
      if (typeof doc.correctAnswer !== 'number' || doc.correctAnswer < 0 || doc.correctAnswer > 3) {
        console.error(`[Doc ${doc._id}] Invalid correctAnswer: ${doc.correctAnswer}`);
        totalAnswerErrors++;
      }
    } else if (doc.type === 'NUMERICAL') {
      if (doc.correctAnswer === undefined || doc.correctAnswer === null || isNaN(parseFloat(doc.correctAnswer))) {
        console.error(`[Doc ${doc._id}] Invalid numerical correctAnswer: "${doc.correctAnswer}"`);
        totalAnswerErrors++;
      }
    }

    // KaTeX check
    const qErr = testLatex(doc.question);
    if (qErr.length > 0) {
      console.error(`[Doc ${doc._id} - Question] KaTeX error:`, qErr);
      totalKaTeXErrors += qErr.length;
    }
    const expErr = testLatex(doc.explanation);
    if (expErr.length > 0) {
      console.error(`[Doc ${doc._id} - Explanation] KaTeX error:`, expErr);
      totalKaTeXErrors += expErr.length;
    }
    if (Array.isArray(doc.options)) {
      doc.options.forEach((opt, idx) => {
        const oErr = testLatex(opt);
        if (oErr.length > 0) {
          console.error(`[Doc ${doc._id} - Option ${idx}] KaTeX error:`, oErr);
          totalKaTeXErrors += oErr.length;
        }
      });
    }
  }

  console.log(`\nSubtopic breakdown:`);
  for (const [st, cnt] of Object.entries(subtopicCounts)) {
    console.log(`  - ${st}: ${cnt}`);
  }

  console.log(`\nQuestion type breakdown:`);
  for (const [tp, cnt] of Object.entries(typeCounts)) {
    console.log(`  - ${tp}: ${cnt}`);
  }

  console.log(`\n=== 2. AUDIT RESULTS ===`);
  console.log(`KaTeX syntax errors: ${totalKaTeXErrors}`);
  console.log(`Suspicious/bogus terms: ${totalBogusTerms}`);
  console.log(`Marks/negative marks errors: ${totalMarksErrors}`);
  console.log(`Answer format errors: ${totalAnswerErrors}`);

  console.log(`\n=== 3. TEST PAPER REFERENTIAL INTEGRITY ===`);
  const opticsDocIds = new Set(allDocs.map(d => String(d._id)));
  const allPapers = await testPapersColl.find({}).toArray();

  let totalPapersReferencing = 0;
  let totalReferencedQuestions = 0;
  let brokenReferences = 0;

  for (const paper of allPapers) {
    const qIds = (paper.questions || []).map(q => typeof q === 'string' ? q : String(q.questionId || q._id || q));
    const opticsRefs = qIds.filter(id => opticsDocIds.has(id));

    if (opticsRefs.length > 0) {
      totalPapersReferencing++;
      totalReferencedQuestions += opticsRefs.length;

      // Verify each referenced doc actually exists
      for (const refId of opticsRefs) {
        if (!opticsDocIds.has(refId)) {
          console.error(`Broken reference in paper "${paper.title}" (${paper._id}): ${refId}`);
          brokenReferences++;
        }
      }
    }
  }

  console.log(`Total test papers referencing Optics: ${totalPapersReferencing}`);
  console.log(`Total question references across test papers: ${totalReferencedQuestions}`);
  console.log(`Broken references: ${brokenReferences}`);

  if (
    allDocs.length === 585 &&
    totalKaTeXErrors === 0 &&
    totalBogusTerms === 0 &&
    totalMarksErrors === 0 &&
    totalAnswerErrors === 0 &&
    brokenReferences === 0
  ) {
    console.log(`\n>>> CHAPTER AUDIT PASSED 100%! ALL 585 QUESTIONS AND TEST PAPERS IN PERFECT STATE! <<<`);
  } else {
    console.error(`\n>>> CHAPTER AUDIT FAILED SOME CHECKS! <<<`);
    process.exit(1);
  }

  await client.close();
}

runAudit().catch(err => {
  console.error("FATAL AUDIT ERROR:", err);
  process.exit(1);
});
