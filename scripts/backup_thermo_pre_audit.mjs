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
  "neet-SUBTOPIC-Physics-Thermal-equilibrium",
  "neet-SUBTOPIC-Physics-Laws-of-thermodynamics-(zeroth,-first,-second)",
  "neet-SUBTOPIC-Physics-Isothermal-and-adiabatic-processes",
  "neet-SUBTOPIC-Physics-Work-done-in-thermodynamic-processes"
];

console.log("=== STEP 1: PRE-AUDIT BACKUP FOR THERMODYNAMICS (4 TESTS) ===");

// 1. Fetch test papers
const testPapers = await db.collection('testPapers').find({ testId: { $in: targetTestIds } }).toArray();
console.log(`Found ${testPapers.length} target test papers in testPapers collection.`);

// 2. Fetch all questions
const allQIds = [];
for (const tp of testPapers) {
  if (tp.questions) {
    for (const q of tp.questions) {
      if (q) {
        allQIds.push(typeof q === 'string' && ObjectId.isValid(q) ? new ObjectId(q) : q);
      }
    }
  }
}

const questions = await db.collection('questionBank').find({ _id: { $in: allQIds.filter(id => id instanceof ObjectId) } }).toArray();
console.log(`Resolved ${questions.length} questions from questionBank.`);

// 3. Save to disk backup
const backupData = {
  timestamp: new Date().toISOString(),
  testIds: targetTestIds,
  testPapers,
  questions
};

if (!fs.existsSync('backups')) {
  fs.mkdirSync('backups', { recursive: true });
}

const backupFilePath = 'backups/pre_audit_thermodynamics_20261117.json';
fs.writeFileSync(backupFilePath, JSON.stringify(backupData, null, 2), 'utf8');
console.log(`Backup saved to ${backupFilePath} (${(fs.statSync(backupFilePath).size / 1024).toFixed(1)} KB)`);

// 4. Save to MongoDB backup collections
const backupCollTP = 'backup_pre_audit_thermo_20261117_testPapers';
const backupCollQ = 'backup_pre_audit_thermo_20261117_questions';

await db.collection(backupCollTP).deleteMany({});
if (testPapers.length > 0) {
  await db.collection(backupCollTP).insertMany(testPapers);
  console.log(`Saved ${testPapers.length} test papers to ${backupCollTP}`);
}

await db.collection(backupCollQ).deleteMany({});
if (questions.length > 0) {
  await db.collection(backupCollQ).insertMany(questions);
  console.log(`Saved ${questions.length} questions to ${backupCollQ}`);
}

await client.close();
console.log("Backup completed successfully!");
