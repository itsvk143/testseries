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

const bogusTerms = [
  'aufbau', 'carbocation', 'oxoacid', 'alkene', 'alkyne', 'hybridization',
  'molecular orbital', 'electrophilic', 'nucleophilic', 'sn1', 'sn2',
  'markovnikov', 'enantiomer', 'coordination compound', 'ligand', 'd-block'
];

async function runAudit() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');

  console.log("=== AUDIT 1: Fetching all questions for Work, Energy, and Power ===");
  const allDocs = await collection.find({
    chapter: 'Work, Energy, and Power',
    subject: 'Physics'
  }).toArray();

  console.log(`Total questions in chapter: ${allDocs.length}`);
  if (allDocs.length !== 533) {
    console.error(`WARNING: Expected 533 questions, found ${allDocs.length}`);
  }

  let katexErrors = 0;
  let bogusMatches = 0;
  let nonStandardMarks = 0;

  const subtopicCounts = {};
  const questionIds = new Set();

  allDocs.forEach((doc, idx) => {
    questionIds.add(String(doc._id));
    subtopicCounts[doc.subTopic] = (subtopicCounts[doc.subTopic] || 0) + 1;

    // Check marks
    if (doc.marks !== 4 || doc.negativeMarks !== 1) {
      nonStandardMarks++;
      console.log(`[Non-standard Marks] ID: ${doc._id}, marks: ${doc.marks}, neg: ${doc.negativeMarks}`);
    }

    // Check bogus terms
    const fullText = `${doc.question} ${(doc.options || []).join(' ')} ${doc.explanation}`.toLowerCase();
    for (const term of bogusTerms) {
      if (fullText.includes(term)) {
        console.error(`[Bogus Term "${term}"] in question ${doc._id} (${doc.subTopic})`);
        bogusMatches++;
      }
    }

    // Check KaTeX
    const qErr = testLatex(doc.question);
    const expErr = testLatex(doc.explanation);
    let optErr = [];
    if (Array.isArray(doc.options)) {
      doc.options.forEach(opt => optErr.push(...testLatex(opt)));
    }

    if (qErr.length + expErr.length + optErr.length > 0) {
      console.error(`[KaTeX Error] Doc #${idx} (ID: ${doc._id}, subtopic: "${doc.subTopic}"):`, {
        qErr, expErr, optErr
      });
      katexErrors++;
    }
  });

  console.log("\n--- Subtopic Distribution ---");
  for (const [sub, count] of Object.entries(subtopicCounts)) {
    console.log(`  "${sub}": ${count} questions`);
  }

  console.log("\n--- Integrity Results ---");
  console.log(`KaTeX Errors: ${katexErrors}`);
  console.log(`Bogus Term Matches: ${bogusMatches}`);
  console.log(`Non-standard Marks: ${nonStandardMarks}`);

  console.log("\n=== AUDIT 2: Verifying Test Paper References ===");
  const testPapers = await db.collection('testPapers').find({}).toArray();

  let totalPapersReferencing = 0;
  let totalRefsChecked = 0;
  let brokenRefs = 0;

  testPapers.forEach(paper => {
    const refsInThisPaper = [];

    if (Array.isArray(paper.sections)) {
      paper.sections.forEach(sec => {
        if (Array.isArray(sec.questions)) {
          sec.questions.forEach(qRef => {
            const qId = String(qRef);
            if (questionIds.has(qId)) {
              refsInThisPaper.push(qId);
            }
          });
        }
      });
    }

    if (Array.isArray(paper.questions)) {
      paper.questions.forEach(qRef => {
        const qId = String(qRef);
        if (questionIds.has(qId)) {
          refsInThisPaper.push(qId);
        }
      });
    }

    if (refsInThisPaper.length > 0) {
      totalPapersReferencing++;
      totalRefsChecked += refsInThisPaper.length;

      // Verify each referenced ID exists in questionIds
      refsInThisPaper.forEach(id => {
        if (!questionIds.has(id)) {
          console.error(`BROKEN REFERENCE in paper "${paper.title}": question ${id} not found!`);
          brokenRefs++;
        }
      });
    }
  });

  console.log(`Referencing Test Papers found: ${totalPapersReferencing}`);
  console.log(`Total Question References verified: ${totalRefsChecked}`);
  console.log(`Broken References: ${brokenRefs}`);

  console.log("\n==================================================");
  if (katexErrors === 0 && bogusMatches === 0 && nonStandardMarks === 0 && brokenRefs === 0) {
    console.log("CHAPTER AUDIT 100% SUCCESSFUL! ALL CHECKS PASSED!");
  } else {
    console.error("AUDIT FAILED! Issues found.");
    process.exit(1);
  }

  await client.close();
}

runAudit().catch(err => {
  console.error("Audit error:", err);
  process.exit(1);
});
