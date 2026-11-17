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

const tp = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12' });
if (!tp) {
  console.log('No test paper found for neet-CHAPTER-Chemistry-Chemical-Kinetics-12');
  process.exit(0);
}

console.log('tp.title:', tp.title);
console.log('tp.questions length:', tp.questions?.length);
if (tp.questions?.length > 0) {
  console.log('tp.questions[0] type:', typeof tp.questions[0]);
  if (typeof tp.questions[0] === 'object' && tp.questions[0] !== null) {
    console.log('tp.questions[0] is embedded object! Keys:', Object.keys(tp.questions[0]));
  } else {
    console.log('tp.questions[0] is ID:', tp.questions[0]);
  }
}

const indices = [0, 1, 3, 12, 13, 17, 18, 23, 25, 27, 28];
for (const idx of indices) {
  if (tp.questions && tp.questions[idx]) {
    const q = tp.questions[idx];
    console.log(`\n================== Q${idx + 1} ==================`);
    const isEmbedded = typeof q === 'object' && q !== null && q.question;
    const qId = isEmbedded ? (q._id || q.questionId || q.id) : q;
    console.log('isEmbedded:', !!isEmbedded, 'qId:', qId);
    if (isEmbedded) {
      console.log('EMBEDDED TEXT:', q.question);
    }
    if (qId) {
      const doc = await db.collection('questionBank').findOne({ _id: typeof qId === 'string' ? new ObjectId(qId) : qId });
      console.log('QB TEXT:', doc?.question);
    }
  }
}

await client.close();
