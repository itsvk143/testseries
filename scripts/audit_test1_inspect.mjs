import { MongoClient } from 'mongodb';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
let uri = '';
envFile.split('\n').forEach(line => {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/['"]/g, '');
  }
});

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const paper = await db.collection('testPapers').findOne({ testId: 'neet-SUBTOPIC-Physics-Graphical-analysis-of-motion-(x-t,-v-t-graphs)' });
const qs = await db.collection('questionBank').find({ _id: { $in: paper.questions } }).toArray();

for (let i = 0; i < paper.questions.length; i++) {
  const q = qs.find(x => x._id.toString() === paper.questions[i].toString());
  console.log(`Q${i+1} [${q?._id}]: ${q?.question}`);
  console.log(`   Correct: ${q?.correctAnswer} (${q?.correctOption})`);
  console.log(`   Options: ${JSON.stringify(q?.options)}`);
  console.log(`   Explanation: ${q?.explanation}\n`);
}

await client.close();
