import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import { formatQuestionToLegacy } from '../src/lib/questionFormatter.js';

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

const testPaper = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12' });
const objectIds = testPaper.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const dbQuestions = await db.collection('questionBank').find({ _id: { $in: objectIds } }).toArray();

const qMap = new Map();
dbQuestions.forEach(q => qMap.set(q._id.toString(), q));

const legacyList = testPaper.questions.map((id, index) => {
  const q = qMap.get(id.toString());
  return formatQuestionToLegacy(q, index + 1);
});

[0, 1, 2, 3, 12, 13, 18, 25, 27, 28].forEach(idx => {
  const leg = legacyList[idx];
  console.log(`\n================ Q${idx + 1} ================`);
  console.log('Legacy text:', leg?.text);
});

await client.close();
