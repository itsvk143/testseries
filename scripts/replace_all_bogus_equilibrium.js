const { MongoClient } = require('mongodb');
const katex = require('katex');
require('dotenv').config({ path: '.env.local' });

const p1 = require('./data_equilibrium_part1.js');
const p2 = require('./data_equilibrium_part2.js');
const p3 = require('./data_equilibrium_part3.js');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to MongoDB Atlas');

  const db = client.db();
  const col = db.collection('questionBank');

  // Mapping subtopic names to questions
  const replacementMap = {
    'Chemical equilibrium': [
      ...p1.getChemicalEquilibriumPartAQuestions(),
      ...p2.getChemicalEquilibriumPartBQuestions()
    ],
    'Law of chemical equilibrium and equilibrium constants (Kp, Kc)': p1.getLawOfEquilibriumQuestions(),
    "Le Chatelier's principle": p1.getLeChatelierPrincipleQuestions(),
    'Ionic equilibrium': p2.getIonicEquilibriumQuestions(),
    'pH': p2.getPHQuestions(),
    'Hydrolysis of salts and acid-base concepts (Arrhenius, Bronsted, Lewis)': p3.getSaltHydrolysisAndAcidBaseQuestions(),
    'Buffer solutions': p3.getBufferSolutionsQuestions(),
    'Solubility product (Ksp) and common ion effect': p3.getSolubilityProductQuestions()
  };

  console.log('\n--- Checking Replacement Counts ---');
  let totalReplacements = 0;
  for (const [st, qs] of Object.entries(replacementMap)) {
    console.log(`  "${st}": ${qs.length} replacement questions`);
    totalReplacements += qs.length;
  }
  console.log(`Total replacement questions: ${totalReplacements}`);

  const bulkOps = [];
  let matchedTotal = 0;

  for (const [subTopic, questions] of Object.entries(replacementMap)) {
    const bogusDocs = await col.find({
      chapter: 'Equilibrium',
      subTopic: subTopic,
      source: { $ne: 'Question Bank' }
    }).sort({ _id: 1 }).toArray();

    console.log(`\nSubTopic: "${subTopic}"`);
    console.log(`  DB Bogus Docs count: ${bogusDocs.length}`);
    console.log(`  Replacement Questions count: ${questions.length}`);

    if (bogusDocs.length !== questions.length) {
      console.error(`MISMATCH in counts for "${subTopic}"! Aborting!`);
      await client.close();
      process.exit(1);
    }

    bogusDocs.forEach((doc, idx) => {
      const q = questions[idx];
      const qType = q.type || 'MCQ';
      const questionType = qType === 'ASSERTION_REASON' ? 'Assertion Reason' : 'MCQ (Multiple Choice Question)';
      const difficulty = q.difficulty || 'Medium';

      bulkOps.push({
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              question: q.question,
              options: q.options,
              correctAnswer: q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer,
              explanation: q.explanation,
              difficulty: difficulty,
              questionType: questionType,
              type: qType,
              cognitiveLevel: difficulty === 'Hard' ? 'Analysis' : 'Application',
              exam: 'JEE Main / NEET / BITSAT',
              targetExams: ['JEE Main', 'NEET', 'BITSAT'],
              commercialReady: true,
              status: 'Active',
              updatedAt: new Date()
            }
          }
        }
      });
    });

    matchedTotal += bogusDocs.length;
  }

  console.log(`\nExecuting bulkWrite for ${bulkOps.length} updates in-place...`);
  const res = await col.bulkWrite(bulkOps);
  console.log(`bulkWrite completed! Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}`);

  // Verification
  console.log('\n--- Auditing Equilibrium Questions in DB ---');
  const allDocs = await col.find({ chapter: 'Equilibrium' }).toArray();
  console.log(`Total Equilibrium docs in DB: ${allDocs.length}`);

  let bogusRemaining = 0;
  let katexErrors = 0;

  allDocs.forEach((doc, idx) => {
    const isBogus = doc.source !== 'Question Bank' &&
      (!doc.explanation || doc.explanation.includes('detailed solution') || doc.question.includes('is a fundamental principle') || doc.question.includes('is a key concept'));
    if (isBogus) bogusRemaining++;

    const textToTest = [doc.question, ...(doc.options || []), doc.explanation || ''].join(' ');
    const regex = /\$([^$]+)\$/g;
    let match;
    while ((match = regex.exec(textToTest)) !== null) {
      try {
        katex.renderToString(match[1], { throwOnError: true });
      } catch (e) {
        katexErrors++;
        console.error(`KaTeX error in Doc ID ${doc._id} (${doc.subTopic}): ${e.message}`);
      }
    }
  });

  console.log(`Remaining bogus questions: ${bogusRemaining}`);
  console.log(`Total KaTeX errors across all ${allDocs.length} questions: ${katexErrors}`);

  await client.close();
  console.log('MongoDB connection closed.');

  if (bogusRemaining === 0 && katexErrors === 0) {
    console.log('\nSUCCESS! All Equilibrium bogus questions successfully replaced in-place with 0 errors.');
  } else {
    console.error('\nFAILURE! Audit failed.');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
