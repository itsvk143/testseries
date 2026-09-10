// scripts/inspect_sets_relations_functions.js
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function inspect() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qb = db.collection('questionBank');

  const total = await qb.countDocuments({
    $or: [
      { chapter: 'Sets, Relations, and Functions' },
      { chapter: 'Sets, Relations and Functions' },
      { chapter: { $regex: 'sets', $options: 'i' } }
    ]
  });
  console.log('Total Sets, Relations, and Functions docs:', total);

  // Group by chapter exact name
  const chapGroup = await qb.aggregate([
    { $match: { $or: [{ chapter: { $regex: 'sets', $options: 'i' } }, { chapter: { $regex: 'relation', $options: 'i' } }] } },
    { $group: { _id: '$chapter', count: { $sum: 1 } } }
  ]).toArray();
  console.log('Chapter names:', chapGroup);

  // Subtopics breakdown
  const subGroup = await qb.aggregate([
    { $match: { chapter: 'Sets, Relations, and Functions' } },
    { $group: { _id: { subtopic: '$subtopic', subTopic: '$subTopic' }, count: { $sum: 1 } } }
  ]).toArray();
  console.log('\nSubtopics distribution:');
  console.dir(subGroup, { depth: null });

  // Sources
  const sourceGroup = await qb.aggregate([
    { $match: { chapter: 'Sets, Relations, and Functions' } },
    { $group: { _id: '$source', count: { $sum: 1 } } }
  ]).toArray();
  console.log('\nSources:', sourceGroup);

  // Test papers related to Sets, Relations, and Functions
  const tests = await db.collection('testPapers').find({
    $or: [
      { title: { $regex: 'sets', $options: 'i' } },
      { title: { $regex: 'relation', $options: 'i' } },
      { title: { $regex: 'function', $options: 'i' } },
      { chapter: 'Sets, Relations, and Functions' }
    ]
  }).toArray();
  console.log(`\nTest papers found: ${tests.length}`);
  tests.forEach(t => console.log(t._id.toString(), '|', t.title, '| subject:', t.subject, '| questions:', t.questions?.length));

  await client.close();
}

inspect().catch(console.error);
