import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

const primaryTestIds = [
  "neet-SUBTOPIC-Physics-Thermal-equilibrium",
  "neet-SUBTOPIC-Physics-Laws-of-thermodynamics-(zeroth,-first,-second)",
  "neet-SUBTOPIC-Physics-Isothermal-and-adiabatic-processes",
  "neet-SUBTOPIC-Physics-Work-done-in-thermodynamic-processes"
];

console.log("=== PHASE 1: PRE-AUDIT DISCOVERY FOR THERMODYNAMICS ===");

// 1. Check student attempts
const resultsCount = await db.collection('testResults').countDocuments({ testId: { $in: primaryTestIds } });
const sessionsCount = await db.collection('testSessions').countDocuments({ testId: { $in: primaryTestIds } });
console.log(`Student attempt records: testResults=${resultsCount}, testSessions=${sessionsCount}`);

// 2. Inspect each test paper
for (let i = 0; i < primaryTestIds.length; i++) {
  const tid = primaryTestIds[i];
  console.log(`\n--- Test ${i + 1}: ${tid} ---`);
  const tp = await db.collection('testPapers').findOne({ testId: tid });
  if (!tp) {
    console.log("Not found by exact testId! Searching case-insensitively...");
    const alt = await db.collection('testPapers').findOne({ testId: new RegExp(`^${tid}$`, 'i') });
    console.log("Found alt:", alt?.testId);
    continue;
  }

  console.log(`Title: ${tp.title}, Chapter: ${tp.chapter}, Subject: ${tp.subject}`);
  console.log(`Questions array length: ${tp.questions?.length}`);

  if (tp.questions && tp.questions.length > 0) {
    const qIds = tp.questions.map(id => typeof id === 'string' && ObjectId.isValid(id) ? new ObjectId(id) : id);
    const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds.filter(id => id instanceof ObjectId) } }).toArray();
    console.log(`Resolved questionBank docs: ${qDocs.length}/${tp.questions.length}`);

    // Check diagrams
    const diagrams = qDocs.filter(q => q.image || q.img);
    console.log(`Diagram questions: ${diagrams.length}`);
    if (diagrams.length > 0) {
      console.log(`  Sample diagram: ${diagrams[0].image || diagrams[0].img}`);
    }

    // Check Section B AR questions
    const arQs = qDocs.filter(q => q.type === 'ASSERTION_REASON' || q.questionType?.includes('Assertion'));
    console.log(`Assertion-Reason questions: ${arQs.length}`);
    if (arQs.length > 0) {
      console.log(`  AR keys: ${arQs.map(q => q.correctOption || q.correctAnswer).join(', ')}`);
    }

    // Sample question 1
    if (qDocs.length > 0) {
      console.log(`  Q1 text: ${JSON.stringify((qDocs[0].question || qDocs[0].text)?.slice(0, 80))}`);
    }
  }
}

await client.close();
