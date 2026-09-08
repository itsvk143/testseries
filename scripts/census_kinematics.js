const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function census() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  console.log('=== CENSUS: KINEMATICS IN QUESTIONBANK ===\n');

  // Check subjects where chapter matches /kinematics/i
  const distinctChapters = await db.collection('questionBank').distinct('chapter');
  const kinChapters = distinctChapters.filter(c => /kinematics/i.test(c));
  console.log('Distinct chapters matching /kinematics/i:', kinChapters);

  // Group by subject, chapter, subTopic, type, source
  const breakdown = await db.collection('questionBank').aggregate([
    { $match: { chapter: { $in: kinChapters } } },
    { $group: {
        _id: { subject: '$subject', chapter: '$chapter', subTopic: '$subTopic', type: '$type', source: '$source' },
        count: { $sum: 1 },
        sample: { $first: '$question' }
      }
    },
    { $sort: { '_id.subject': 1, '_id.chapter': 1, '_id.subTopic': 1, '_id.type': 1 } }
  ]).toArray();

  console.log('\n--- Breakdown ---');
  let total = 0;
  breakdown.forEach(b => {
    console.log(`${b._id.subject} | ${b._id.chapter} | "${b._id.subTopic}" | ${b._id.type} | source: ${b._id.source} => ${b.count}`);
    console.log('  Sample: ' + (b.sample ? b.sample.slice(0, 100) : 'EMPTY') + '...\n');
    total += b.count;
  });
  console.log(`Total Kinematics questions in DB: ${total}`);

  // Test papers referencing Kinematics
  const testPapers = await db.collection('testPapers').find().toArray();
  const kinQuestions = await db.collection('questionBank').find({
    chapter: { $in: kinChapters }
  }, { projection: { _id: 1, chapter: 1, subTopic: 1 } }).toArray();
  const kinIdSet = new Set(kinQuestions.map(q => q._id.toString()));

  console.log('\n--- Test Papers Referencing Kinematics ---');
  let paperMatchCount = 0;
  let totalRefs = 0;

  testPapers.forEach(p => {
    const qIds = p.questions || [];
    let countInPaper = 0;
    qIds.forEach(id => {
      if (kinIdSet.has(id.toString())) {
        countInPaper++;
        totalRefs++;
      }
    });
    if (countInPaper > 0) {
      paperMatchCount++;
      console.log(`- "${p.title}" (_id: ${p._id}, subject: ${p.subject}): ${countInPaper} / ${qIds.length} Qs`);
    }
  });

  console.log(`\nTotal test papers referencing Kinematics: ${paperMatchCount}`);
  console.log(`Total Kinematics question references in test papers: ${totalRefs}`);

  await client.close();
}

census().catch(err => {
  console.error(err);
  process.exit(1);
});
