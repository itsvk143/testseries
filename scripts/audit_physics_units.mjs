import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const testIds = [
    'neet-SUBTOPIC-Physics-Units-and-dimensions',
    'neet-SUBTOPIC-Physics-Error-analysis',
    'neet-SUBTOPIC-Physics-Least-count-and-precision',
    'neet-SUBTOPIC-Physics-Significant-figures',
    'neet-SUBTOPIC-Physics-Dimensional-analysis-and-applications',
    'neet-CHAPTER-Physics-Units-&-Measurements-11'
  ];

  for (const tid of testIds) {
    const paper = await db.collection('testPapers').findOne({ testId: tid });
    if (!paper || !paper.questions) {
      console.log(`Test ${tid}: NOT FOUND OR NO QUESTIONS`);
      continue;
    }
    const qIds = paper.questions.map(id => new ObjectId(id));
    const docs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0, undefined: 0 };
    const missingCommercialId = docs.filter(d => !d.commercialId).length;
    const diffDist = {};
    docs.forEach(d => {
      const ca = d.correctAnswer;
      dist[ca !== undefined ? ca : 'undefined'] = (dist[ca !== undefined ? ca : 'undefined'] || 0) + 1;
      diffDist[d.difficulty] = (diffDist[d.difficulty] || 0) + 1;
    });
    console.log(`\nTest: ${tid} (${docs.length}/${paper.questions.length} resolved in QB)`);
    console.log(`  Option Distribution:`, dist);
    console.log(`  Difficulty Distribution:`, diffDist);
    console.log(`  Missing commercialId: ${missingCommercialId}`);
  }

  await client.close();
}

run();
