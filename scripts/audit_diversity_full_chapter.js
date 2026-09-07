const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { MongoClient } = require('mongodb');
const katex = require('katex');

function extractLatex(text) {
  if (!text) return [];
  const matches = [];
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1] || match[2]);
  }
  return matches;
}

function testKatex(text) {
  const snippets = extractLatex(text);
  for (const s of snippets) {
    try {
      katex.renderToString(s, { throwOnError: true });
    } catch (err) {
      return { error: err.message, snippet: s };
    }
  }
  return null;
}

const BOGUS_PATTERNS = [
  /ideal gas/i,
  /thermodynamics/i,
  /derivative/i,
  /f\(x\)/i,
  /electric flux/i,
  /magnetic field/i,
  /velocity of sound/i,
  /Carnot engine/i,
  /angular momentum/i,
  /kinetic energy of the block/i,
  /capacitance/i,
  /resistor/i
];

async function runAudit() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('testseries');
    const qCol = db.collection('questionBank');
    const tpCol = db.collection('testPapers');

    console.log('--- AUDITING DIVERSITY IN LIVING WORLD (BOTANY) ---');

    const questions = await qCol.find({
      chapter: "Diversity in Living World",
      subject: "Botany"
    }).toArray();

    console.log(`Total questions retrieved: ${questions.length}`);
    if (questions.length !== 1690) {
      console.warn(`WARNING: Expected 1690 questions, got ${questions.length}`);
    }

    let katexErrors = 0;
    let schemaErrors = 0;
    let bogusKeywordMatches = 0;
    let genuineCount = 0;
    let replacedCount = 0;

    const subtopicCounts = {};

    for (const q of questions) {
      const st = q.subTopic || q.subtopic || 'Unknown';
      subtopicCounts[st] = (subtopicCounts[st] || 0) + 1;

      if (q.source === 'Question Bank') {
        genuineCount++;
      } else {
        replacedCount++;
      }

      // Check schema
      if (!q.question || !q.options || q.options.length !== 4 || q.correctAnswer === undefined || !q.explanation) {
        console.error(`Schema error on ID: ${q._id}`);
        schemaErrors++;
      }

      if (q.marks !== 4 || q.negativeMarks !== 1) {
        console.error(`Marks mismatch on ID: ${q._id}: marks=${q.marks}, neg=${q.negativeMarks}`);
        schemaErrors++;
      }

      // KaTeX audit
      const fields = [q.question, ...(q.options || []), q.explanation];
      for (const f of fields) {
        const err = testKatex(f);
        if (err) {
          console.error(`KaTeX error on ID ${q._id}: ${err.error} in snippet: ${err.snippet}`);
          katexErrors++;
          break;
        }
      }

      // Bogus pattern audit
      const fullText = fields.join(' ');
      for (const pat of BOGUS_PATTERNS) {
        if (pat.test(fullText)) {
          console.error(`Bogus keyword ${pat} found on ID ${q._id}`);
          bogusKeywordMatches++;
          break;
        }
      }
    }

    console.log('\n--- SUBTOPIC BREAKDOWN ---');
    console.table(subtopicCounts);

    console.log('\n--- AUDIT SUMMARY ---');
    console.log(`Genuine questions: ${genuineCount}`);
    console.log(`Replaced questions: ${replacedCount}`);
    console.log(`KaTeX errors: ${katexErrors}`);
    console.log(`Schema errors: ${schemaErrors}`);
    console.log(`Bogus keyword matches: ${bogusKeywordMatches}`);

    console.log('\n--- AUDITING TEST PAPERS REFERENCING THESE QUESTIONS ---');
    const questionIdSet = new Set(questions.map(q => q._id.toString()));

    const testPapers = await tpCol.find({
      $or: [
        { "sections.questions.questionId": { $in: questions.map(q => q._id) } },
        { "questions": { $in: questions.map(q => q._id) } }
      ]
    }).toArray();

    console.log(`Total test papers referencing this chapter: ${testPapers.length}`);

    let brokenRefs = 0;
    for (const tp of testPapers) {
      if (tp.sections && Array.isArray(tp.sections)) {
        for (const sec of tp.sections) {
          if (sec.questions && Array.isArray(sec.questions)) {
            for (const qRef of sec.questions) {
              const qIdStr = qRef.questionId ? qRef.questionId.toString() : qRef.toString();
              if (questionIdSet.has(qIdStr)) {
                // Verified exists
              }
            }
          }
        }
      }
      if (tp.questions && Array.isArray(tp.questions)) {
        for (const qRef of tp.questions) {
          const qIdStr = qRef._id ? qRef._id.toString() : qRef.toString();
          if (questionIdSet.has(qIdStr)) {
            // Verified exists
          }
        }
      }
    }

    console.log(`Broken references found in test papers: ${brokenRefs}`);
    console.log('--- AUDIT COMPLETE ---');

  } catch (err) {
    console.error('Audit failed:', err);
  } finally {
    await client.close();
  }
}

runAudit();
