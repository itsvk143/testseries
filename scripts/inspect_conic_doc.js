const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  const doc = await qBank.findOne({
    chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)'
  });
  console.log('Sample question document keys:', Object.keys(doc));
  console.log('Sample question doc:', {
    _id: doc._id,
    subject: doc.subject,
    chapter: doc.chapter,
    topic: doc.topic,
    subTopic: doc.subTopic,
    subtopic: doc.subtopic,
    questionType: doc.questionType,
    type: doc.type,
    source: doc.source,
    marks: doc.marks,
    negativeMarks: doc.negativeMarks,
    question: doc.question?.substring(0, 80)
  });

  // Distinct subtopic/topic
  for (const field of ['topic', 'subTopic', 'subtopic']) {
    const vals = await qBank.distinct(field, {
      chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)'
    });
    console.log(`Distinct ${field}:`, vals);
  }

  await client.close();
}

run().catch(console.error);
