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

console.log('Backing up 6 Rotational Motion subtopic tests...');

const testPapers = await db.collection('testPapers').find({ testId: { $in: targetIds } }).toArray();
const allQIds = [];
testPapers.forEach(t => {
  if (Array.isArray(t.questions)) {
    t.questions.forEach(qId => {
      if (qId) {
        allQIds.push(ObjectId.isValid(qId) && qId.length === 24 ? new ObjectId(qId) : qId);
      }
    });
  }
});

const questions = await db.collection('questionBank').find({ _id: { $in: allQIds } }).toArray();

const backupData = {
  timestamp: new Date().toISOString(),
  targetIds,
  testPapers,
  questions
};

const backupFilePath = 'backups/pre_audit_rotational_motion_20261117.json';
fs.writeFileSync(backupFilePath, JSON.stringify(backupData, null, 2));
console.log(`Saved backup file to ${backupFilePath} (${testPapers.length} tests, ${questions.length} questions).`);

// Save to backup collections in MongoDB as well
const dateStr = '20261117';
await db.collection(`backup_pre_audit_rotational_motion_${dateStr}_testPapers`).deleteMany({});
await db.collection(`backup_pre_audit_rotational_motion_${dateStr}_testPapers`).insertMany(testPapers);

await db.collection(`backup_pre_audit_rotational_motion_${dateStr}_questions`).deleteMany({});
await db.collection(`backup_pre_audit_rotational_motion_${dateStr}_questions`).insertMany(questions);

console.log(`Saved backup collections in MongoDB:`);
console.log(` - backup_pre_audit_rotational_motion_${dateStr}_testPapers (${testPapers.length})`);
console.log(` - backup_pre_audit_rotational_motion_${dateStr}_questions (${questions.length})`);

await client.close();
