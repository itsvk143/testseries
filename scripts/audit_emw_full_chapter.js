require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
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
      katex.renderToString(span.math.trim(), {
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

  console.log("Connected to MongoDB testseries database.");

  const allDocs = await collection.find({ chapter: "Electromagnetic Waves" }).toArray();
  console.log(`\n=== 1. CHAPTER OVERVIEW ===`);
  console.log(`Total questions found in "Electromagnetic Waves": ${allDocs.length} (expected 261)`);

  const subtopicCounts = {};
  const typeCounts = {};
  let totalKaTeXErrors = 0;
  let totalBogusTerms = 0;
  let totalMarksErrors = 0;
  let totalAnswerErrors = 0;

  const suspiciousTerms = [
    'complex physical configuration',
    'experimental apparatus set up to investigate',
    'generalized coordinate',
    'damped oscillator equation',
    'dimensional scaling and boundary constraints in',
    'calibrated detector records a flux parameter',
    'applying an external constraint causes a shift',
    'meter bridge',
    'simple pendulum',
    'stunt pilot',
    'vertical circle',
    'inelastic collision',
    'rotational motion',
    'moment of inertia',
    'reagent undergoing'
  ];

  for (const doc of allDocs) {
    const st = doc.subTopic || doc.subtopic || "Unknown";
    subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;
    const tp = doc.type || doc.questionType;
    typeCounts[tp] = (typeCounts[tp] || 0) + 1;

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

  console.log(`\n=== 3. JEE MAINS CHAPTER TEST VERIFICATION ===`);
  const jeeChapTest = await testPapersColl.findOne({ testId: 'jee-mains-CHAPTER-Physics-Electromagnetic-Waves-12' });
  console.log(`JEE Main Chapter Test: "${jeeChapTest.title}" (${jeeChapTest.testId})`);
  console.log(`Total questions in test: ${jeeChapTest.questions.length}`);

  const testDocIds = jeeChapTest.questions.map(id => id.toString());
  const testDocs = await collection.find({ _id: { $in: testDocIds.map(id => new ObjectId(id)) } }).toArray();

  const chapCount = {};
  const testTypeCount = {};
  testDocs.forEach(q => {
    chapCount[q.chapter] = (chapCount[q.chapter] || 0) + 1;
    testTypeCount[q.type] = (testTypeCount[q.type] || 0) + 1;
  });

  console.log("Chapter distribution in JEE Main Chapter Test:", chapCount);
  console.log("Type distribution in JEE Main Chapter Test:", testTypeCount);

  let testFlaws = 0;
  if (jeeChapTest.questions.length !== 25) {
    console.error(`❌ Expected 25 questions in test, got ${jeeChapTest.questions.length}`);
    testFlaws++;
  }
  if (chapCount["Electromagnetic Waves"] !== 25) {
    console.error(`❌ Expected all 25 questions from Electromagnetic Waves, got:`, chapCount);
    testFlaws++;
  }
  if (testTypeCount["MCQ"] !== 20 || testTypeCount["NUMERICAL"] !== 5) {
    console.error(`❌ Expected 20 MCQs and 5 Numericals, got:`, testTypeCount);
    testFlaws++;
  }

  console.log(`\n=== 4. TEST PAPER REFERENTIAL INTEGRITY ===`);
  const emwDocIds = new Set(allDocs.map(d => String(d._id)));
  const allPapers = await testPapersColl.find({}).toArray();

  let totalPapersReferencing = 0;
  let totalReferencedQuestions = 0;
  let brokenReferences = 0;

  for (const paper of allPapers) {
    const qIds = (paper.questions || []).map(q => typeof q === 'string' ? q : String(q.questionId || q._id || q));
    const emwRefs = qIds.filter(id => emwDocIds.has(id));

    if (emwRefs.length > 0) {
      totalPapersReferencing++;
      totalReferencedQuestions += emwRefs.length;

      for (const refId of emwRefs) {
        if (!emwDocIds.has(refId)) {
          console.error(`Broken reference in paper "${paper.title}" (${paper._id}): ${refId}`);
          brokenReferences++;
        }
      }
    }
  }

  console.log(`Total test papers referencing Electromagnetic Waves: ${totalPapersReferencing}`);
  console.log(`Total question references across test papers: ${totalReferencedQuestions}`);
  console.log(`Broken references: ${brokenReferences}`);

  if (
    allDocs.length === 261 &&
    totalKaTeXErrors === 0 &&
    totalBogusTerms === 0 &&
    totalMarksErrors === 0 &&
    totalAnswerErrors === 0 &&
    testFlaws === 0 &&
    brokenReferences === 0
  ) {
    console.log(`\n>>> CHAPTER AUDIT PASSED 100%! ALL 261 QUESTIONS AND TEST PAPERS IN PERFECT STATE! <<<`);
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
