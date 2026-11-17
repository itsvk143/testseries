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
const db = client.db();

const targetIds = [
  'neet-SUBTOPIC-Physics-Center-of-mass',
  'neet-SUBTOPIC-Physics-Torque',
  'neet-SUBTOPIC-Physics-Moment-of-inertia',
  'neet-SUBTOPIC-Physics-Theorems-of-parallel-and-perpendicular-axes',
  'neet-SUBTOPIC-Physics-Angular-momentum-conservation',
  'neet-SUBTOPIC-Physics-Rolling-motion'
];

console.log('Inspecting current state of 6 Rotational Motion subtopic tests...\n');

for (const testId of targetIds) {
  const test = await db.collection('testPapers').findOne({ testId });
  const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
  const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
  const qMap = new Map();
  qDocs.forEach(q => qMap.set(q._id.toString(), q));

  let diagramCount = 0;
  let arCount = 0;

  for (let idx = 0; idx < test.questions.length; idx++) {
    const qId = test.questions[idx];
    const q = qMap.get(qId.toString());
    if (!q) continue;

    if (q.image || q.img) diagramCount++;
    if (idx >= 39 && idx <= 44) {
      if (q.type === 'ASSERTION_REASON' || q.questionType?.includes('Assertion') || q.question?.includes('Assertion (A):')) {
        arCount++;
      }
    }
  }

  console.log(`Test: ${testId}`);
  console.log(`  Title: ${test.title}`);
  console.log(`  Questions: ${test.questions.length}`);
  console.log(`  Existing Diagrams: ${diagramCount}`);
  console.log(`  Existing Section B (AR) (Q40-45): ${arCount}/6`);
  console.log('---------------------------------------------------------');
}

// Check student attempts
const resultsCount = await db.collection('testResults').countDocuments({ testId: { $in: targetIds } });
const sessionsCount = await db.collection('testSessions').countDocuments({ testId: { $in: targetIds } });
console.log(`Student attempts in testResults: ${resultsCount}`);
console.log(`Student attempts in testSessions: ${sessionsCount}`);

await client.close();
