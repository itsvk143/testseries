const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function deepCheck() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const subjs = await db.collection('questionBank').distinct('subject', { chapter: 'Cell Structure and Function' });
  console.log('Subjects for Cell Structure and Function:', subjs);

  const breakdown = await db.collection('questionBank').aggregate([
    { $match: { chapter: 'Cell Structure and Function' } },
    { $group: {
        _id: { subject: '$subject', subTopic: '$subTopic', type: '$type' },
        count: { $sum: 1 }
      }
    },
    { $sort: { '_id.subTopic': 1, '_id.type': 1 } }
  ]).toArray();

  console.log('\n--- Breakdown by subTopic and type ---');
  let total = 0;
  breakdown.forEach(b => {
    console.log(`${b._id.subject} | "${b._id.subTopic}" | ${b._id.type} : ${b.count}`);
    total += b.count;
  });
  console.log('\nTotal questions in chapter:', total);

  // Check test papers mentioning Cell
  const testPapers = await db.collection('testPapers').find({
    $or: [
      { title: { $regex: /cell/i } },
      { chapter: { $regex: /cell/i } }
    ]
  }).toArray();
  console.log('\n--- Test Papers directly mentioning Cell ---');
  testPapers.forEach(p => {
    console.log(`Paper: "${p.title}" (_id: ${p._id}), subject: ${p.subject}, questions count: ${p.questions?.length}`);
  });

  // Check sources of questions
  const sources = await db.collection('questionBank').aggregate([
    { $match: { chapter: 'Cell Structure and Function' } },
    { $group: { _id: '$source', count: { $sum: 1 } } }
  ]).toArray();
  console.log('\n--- Sources ---', sources);

  await client.close();
}
deepCheck();
