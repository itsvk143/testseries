import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const paper = await db.collection('testPapers').findOne({ testId: 'neet-SUBTOPIC-Physics-Error-analysis' });
  const qIds = paper.questions.slice(0, 5).map(id => typeof id === 'string' ? new ObjectId(id) : id);
  const docs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
  docs.forEach((d, i) => {
    console.log(`Q${i+1}:`, {
      commercialId: d.commercialId,
      question: d.question,
      options: d.options,
      correctAnswer: d.correctAnswer,
      correctOption: d.correctOption,
      explanation: d.explanation?.substring(0, 100)
    });
  });

  await client.close();
}
run();
