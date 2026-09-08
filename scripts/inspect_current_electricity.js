require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function inspectSampleQuestions() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const sample = await db.collection('questionBank').find({
    chapter: 'Current Electricity',
    subject: 'Physics'
  }).limit(30).toArray();

  sample.forEach((q, i) => {
    console.log(`\n[${i+1}] ID: ${q._id} | Subtopic: ${q.subTopic} | Source: ${q.source} | Type: ${q.questionType || q.type}`);
    console.log(`Q: ${q.question.slice(0, 150)}`);
    console.log(`Opts: ${JSON.stringify(q.options?.slice(0, 2))}`);
    console.log(`Ans: ${q.correctAnswer}`);
    console.log(`Exp: ${q.explanation?.slice(0, 150)}`);
  });

  // Also check generator questions specifically in each subtopic
  const subtopics = await db.collection('questionBank').distinct('subTopic', { chapter: 'Current Electricity' });
  for (const s of subtopics) {
    const gen = await db.collection('questionBank').findOne({
      chapter: 'Current Electricity',
      subTopic: s,
      source: { $ne: 'Question Bank' }
    });
    if (gen) {
      console.log(`\n--- Generator Sample for "${s}" ---`);
      console.log(`Q: ${gen.question}`);
      console.log(`Ans: ${gen.correctAnswer}`);
      console.log(`Exp: ${gen.explanation?.slice(0, 200)}`);
    }
  }

  await client.close();
}

inspectSampleQuestions().catch(console.error);
