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
const qDocs = await db.collection('questionBank').find({ _id: { $in: tp.questions } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

let optUnderscore = 0;
let expUnderscore = 0;

for (let i = 0; i < tp.questions.length; i++) {
  const q = map.get(tp.questions[i].toString());
  if (!q) continue;
  if (Array.isArray(q.options)) {
    for (const opt of q.options) {
      const optStr = typeof opt === 'string' ? opt : (opt?.text || '');
      const clean = optStr.replace(/\$\$[\s\S]*?\$\$|\$[\s\S]*?\$/g, '');
      if (clean.includes('_')) {
        console.log(`Q${i+1} option has bare _: ${clean}`);
        optUnderscore++;
      }
    }
  }
  if (q.explanation) {
    const clean = q.explanation.replace(/\$\$[\s\S]*?\$\$|\$[\s\S]*?\$/g, '');
    const matches = clean.match(/\b[a-zA-Z]+_[a-zA-Z0-9]+\b/g);
    if (matches) {
      expUnderscore += matches.length;
    }
  }
}

console.log(`Options with bare underscore: ${optUnderscore}, Explanations with bare variable underscore: ${expUnderscore}`);
await client.close();
