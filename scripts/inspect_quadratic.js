// scripts/inspect_quadratic.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function inspect() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');

  const total = await qb.countDocuments({ chapter: 'Quadratic Equations' });
  console.log('Total Quadratic Equations questions:', total);

  const subtopics = await qb.aggregate([
    { $match: { chapter: 'Quadratic Equations' } },
    { $group: { _id: { subtopic: '$subtopic', subTopic: '$subTopic' }, count: { $sum: 1 } } }
  ]).toArray();
  console.log('\nSubtopics distribution:');
  console.dir(subtopics, { depth: null });

  // Separate genuine vs generator
  const allDocs = await qb.find({ chapter: 'Quadratic Equations' }).toArray();
  const generatorDocs = allDocs.filter(d =>
    (d.question && d.question.includes('Consider the polynomial')) ||
    (d.subtopic === undefined && d.subTopic) ||
    (d.source && d.source.includes('Generator'))
  );
  const genuineDocs = allDocs.filter(d => !generatorDocs.some(g => g._id.equals(d._id)));

  console.log(`\nIdentified: ${genuineDocs.length} genuine docs, ${generatorDocs.length} generator docs.`);

  // Test papers
  const tests = await db.collection('testPapers').find({
    $or: [
      { title: { $regex: 'quadratic', $options: 'i' } },
      { chapter: { $regex: 'quadratic', $options: 'i' } }
    ]
  }).toArray();
  console.log('\nTest papers related to Quadratic Equations:');
  tests.forEach(t => console.log(t._id.toString(), '|', t.title, '| questions:', t.questions?.length));

  await client.close();
}

inspect().catch(console.error);
