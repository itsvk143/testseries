import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import path from 'path';

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

const targetTestIds = [
  "neet-SUBTOPIC-Physics-Kepler-s-laws",
  "neet-SUBTOPIC-Physics-Newton-s-law-of-gravitation",
  "neet-SUBTOPIC-Physics-Gravitational-potential-energy",
  "neet-SUBTOPIC-Physics-Escape-velocity",
  "neet-SUBTOPIC-Physics-Acceleration-due-to-gravity-(variation-with-height,-depth,-latitude)",
  "neet-SUBTOPIC-Physics-Orbital-velocity-and-satellite-motion"
];

console.log("=== STEP 1: PRE-AUDIT DISCOVERY & BACKUP FOR GRAVITATION ===");

// 1. Check student attempts
const testResultsCount = await db.collection('testResults').countDocuments({ testId: { $in: targetTestIds } });
const testSessionsCount = await db.collection('testSessions').countDocuments({ testId: { $in: targetTestIds } });
console.log(`Student attempt records: testResults=${testResultsCount}, testSessions=${testSessionsCount}`);

// 2. Fetch testPapers
const testPapers = await db.collection('testPapers').find({ testId: { $in: targetTestIds } }).toArray();
console.log(`Found ${testPapers.length} testPapers in MongoDB`);

const allQuestionIds = [];
for (const tp of testPapers) {
  console.log(`- ${tp.testId}: title="${tp.title}", questions=${tp.questions?.length || 0}`);
  if (tp.questions) {
    for (const q of tp.questions) {
      if (q) {
        if (typeof q === 'string' && ObjectId.isValid(q)) allQuestionIds.push(new ObjectId(q));
        else if (q._bsontype === 'ObjectID' || q instanceof ObjectId) allQuestionIds.push(q);
        else if (typeof q === 'object' && (q._id || q.questionId || q.id)) {
          const rawId = q._id || q.questionId || q.id;
          if (ObjectId.isValid(rawId)) allQuestionIds.push(new ObjectId(rawId));
        }
      }
    }
  }
}

console.log(`Total question IDs referenced: ${allQuestionIds.length}`);

// 3. Fetch questions from questionBank
const questions = await db.collection('questionBank').find({ _id: { $in: allQuestionIds } }).toArray();
console.log(`Found ${questions.length} questions in questionBank`);

// 4. Save to JSON backup file
const backupDir = path.join(process.cwd(), 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
const backupPath = path.join(backupDir, 'pre_audit_gravitation_20261117.json');
fs.writeFileSync(backupPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  testPapers,
  questions
}, null, 2));
console.log(`Saved JSON backup to ${backupPath}`);

// 5. Save to MongoDB backup collections
await db.collection('backup_pre_audit_gravitation_20261117_testPapers').deleteMany({});
if (testPapers.length > 0) {
  await db.collection('backup_pre_audit_gravitation_20261117_testPapers').insertMany(testPapers);
}
await db.collection('backup_pre_audit_gravitation_20261117_questions').deleteMany({});
if (questions.length > 0) {
  await db.collection('backup_pre_audit_gravitation_20261117_questions').insertMany(questions);
}
console.log("MongoDB backup collections created successfully.");

await client.close();
console.log("Discovery & Backup completed.");
