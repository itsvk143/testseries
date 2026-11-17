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

console.log("=== CREATING PRE-AUDIT BACKUP FOR KINETIC THEORY ===");

const allSlugs = [
  // Test 1: Equation of state
  "neet-SUBTOPIC-Physics-Equation-of-state",
  "neet-SUBTOPIC-Equation-of-state",
  "neet-SUBTOPIC-Physics-Equation-of-State",
  "neet-SUBTOPIC-Physics-equation-of-state",
  "neet-SUBTOPIC-Physics-Equation-of-state-All-Test",
  "neet-SUBTOPIC-Physics-Equation-of-State-All-Test",
  "neet-SUBTOPIC-Physics-equation-of-state-All-Test",

  // Test 2: Kinetic interpretation of temperature
  "neet-SUBTOPIC-Physics-Kinetic-interpretation-of-temperature",
  "neet-SUBTOPIC-Kinetic-interpretation-of-temperature",
  "neet-SUBTOPIC-Physics-Kinetic-Interpretation-of-Temperature",
  "neet-SUBTOPIC-Physics-kinetic-interpretation-of-temperature",
  "neet-SUBTOPIC-Physics-Kinetic-interpretation-of-temperature-All-Test",
  "neet-SUBTOPIC-Physics-Kinetic-Interpretation-of-Temperature-All-Test",
  "neet-SUBTOPIC-Physics-kinetic-interpretation-of-temperature-All-Test",

  // Test 3: Degrees of freedom
  "neet-SUBTOPIC-Physics-Degrees-of-freedom",
  "neet-SUBTOPIC-Degrees-of-freedom",
  "neet-SUBTOPIC-Physics-Degrees-of-Freedom",
  "neet-SUBTOPIC-Physics-degrees-of-freedom",
  "neet-SUBTOPIC-Physics-Degrees-of-freedom-All-Test",
  "neet-SUBTOPIC-Physics-Degrees-of-Freedom-All-Test",
  "neet-SUBTOPIC-Physics-degrees-of-freedom-All-Test",

  // Test 4: Law of equipartition of energy
  "neet-SUBTOPIC-Physics-Law-of-equipartition-of-energy",
  "neet-SUBTOPIC-Law-of-equipartition-of-energy",
  "neet-SUBTOPIC-Physics-Law-of-Equipartition-of-Energy",
  "neet-SUBTOPIC-Physics-law-of-equipartition-of-energy",
  "neet-SUBTOPIC-Physics-Law-of-equipartition-of-energy-All-Test",
  "neet-SUBTOPIC-Physics-Law-of-Equipartition-of-Energy-All-Test",
  "neet-SUBTOPIC-Physics-law-of-equipartition-of-energy-All-Test",

  // Test 5: Mean free path and molecular speeds
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms,-average,-most-probable)",
  "neet-SUBTOPIC-Mean-free-path-and-molecular-speeds-rms-average-most-probable",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-(rms-average-most-probable)-All-Test",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-All-Test",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-rms-average-most-probable",
  "neet-SUBTOPIC-Physics-Mean-free-path-and-molecular-speeds-rms-average-most-probable-All-Test",
  "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-(rms-average-most-probable)",
  "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-(rms-average-most-probable)-All-Test",
  "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-rms-average-most-probable",
  "neet-SUBTOPIC-Physics-mean-free-path-and-molecular-speeds-rms-average-most-probable-All-Test"
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

const backupPath = 'backups/pre_audit_kinetic_theory_20261117.json';
fs.mkdirSync('backups', { recursive: true });
fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf8');
console.log(`Backup written to ${backupPath} (${(fs.statSync(backupPath).size / 1024).toFixed(1)} KB)`);

// MongoDB backup collections
await db.collection('backup_pre_audit_ktg_20261117_testPapers').drop().catch(() => {});
await db.collection('backup_pre_audit_ktg_20261117_questions').drop().catch(() => {});

if (testPapers.length > 0) {
  await db.collection('backup_pre_audit_ktg_20261117_testPapers').insertMany(testPapers);
}
if (questions.length > 0) {
  await db.collection('backup_pre_audit_ktg_20261117_questions').insertMany(questions);
}
console.log("MongoDB backup collections created successfully.");

await client.close();
