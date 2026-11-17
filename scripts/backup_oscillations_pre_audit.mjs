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

console.log("=== CREATING PRE-AUDIT BACKUP FOR OSCILLATIONS & WAVES ===");

const allSlugs = [
  // Test 1: Simple Harmonic Motion (SHM)
  "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-(SHM)",
  "neet-SUBTOPIC-Simple-Harmonic-Motion-SHM",
  "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-(SHM)-All-Test",
  "neet-SUBTOPIC-Physics-simple-harmonic-motion-(shm)",
  "neet-SUBTOPIC-Physics-simple-harmonic-motion-(shm)-All-Test",
  "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion",
  "neet-SUBTOPIC-Physics-Simple-Harmonic-Motion-All-Test",
  "neet-SUBTOPIC-Physics-simple-harmonic-motion",
  "neet-SUBTOPIC-Physics-simple-harmonic-motion-All-Test",
  "neet-SUBTOPIC-Physics-SHM",
  "neet-SUBTOPIC-Physics-SHM-All-Test",
  "neet-SUBTOPIC-Physics-shm",
  "neet-SUBTOPIC-Physics-shm-All-Test",

  // Test 2: Wave Motion
  "neet-SUBTOPIC-Physics-Wave-motion",
  "neet-SUBTOPIC-Wave-motion",
  "neet-SUBTOPIC-Physics-wave-motion",
  "neet-SUBTOPIC-Physics-Wave-motion-All-Test",
  "neet-SUBTOPIC-Physics-wave-motion-All-Test",

  // Test 3: Superposition of Waves
  "neet-SUBTOPIC-Physics-Superposition-of-waves",
  "neet-SUBTOPIC-Superposition-of-waves",
  "neet-SUBTOPIC-Physics-superposition",
  "neet-SUBTOPIC-Physics-superposition-All-Test",
  "neet-SUBTOPIC-Physics-Superposition",
  "neet-SUBTOPIC-Physics-Superposition-All-Test",
  "neet-SUBTOPIC-Physics-Superposition-of-waves-All-Test",
  "neet-SUBTOPIC-Physics-superposition-of-waves",
  "neet-SUBTOPIC-Physics-superposition-of-waves-All-Test",

  // Test 4: Standing Waves in Strings and Organ Pipes
  "neet-SUBTOPIC-Physics-Standing-waves-in-strings-and-organ-pipes",
  "neet-SUBTOPIC-Standing-waves-in-strings-and-organ-pipes",
  "neet-SUBTOPIC-Physics-Standing-waves-in-strings-and-organ-pipes-All-Test",
  "neet-SUBTOPIC-Physics-standing-waves-in-strings-and-organ-pipes",
  "neet-SUBTOPIC-Physics-standing-waves-in-strings-and-organ-pipes-All-Test",

  // Test 5: Beats
  "neet-SUBTOPIC-Physics-Beats",
  "neet-SUBTOPIC-Beats",
  "neet-SUBTOPIC-Physics-Beats-All-Test",
  "neet-SUBTOPIC-Physics-beats",
  "neet-SUBTOPIC-Physics-beats-All-Test"
];

const testPapers = await db.collection('testPapers').find({ testId: { $in: allSlugs } }).toArray();
console.log(`Backed up ${testPapers.length} test papers.`);

const allQIdsSet = new Set();
for (const tp of testPapers) {
  if (Array.isArray(tp.questions)) {
    for (const q of tp.questions) {
      allQIdsSet.add(q.toString());
    }
  }
}

const objIds = [...allQIdsSet].map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const questions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
console.log(`Backed up ${questions.length} unique questions from questionBank.`);

const backupData = {
  timestamp: new Date().toISOString(),
  testPapersCount: testPapers.length,
  questionsCount: questions.length,
  testPapers,
  questions
};

const backupPath = 'backups/pre_audit_oscillations_20261117.json';
fs.mkdirSync('backups', { recursive: true });
fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf8');
console.log(`Backup written to ${backupPath} (${(fs.statSync(backupPath).size / 1024).toFixed(1)} KB)`);

// MongoDB backup collections
await db.collection('backup_pre_audit_oscillations_20261117_testPapers').drop().catch(() => {});
await db.collection('backup_pre_audit_oscillations_20261117_questions').drop().catch(() => {});

if (testPapers.length > 0) {
  await db.collection('backup_pre_audit_oscillations_20261117_testPapers').insertMany(testPapers);
}
if (questions.length > 0) {
  await db.collection('backup_pre_audit_oscillations_20261117_questions').insertMany(questions);
}
console.log("MongoDB backup collections created successfully.");

await client.close();
