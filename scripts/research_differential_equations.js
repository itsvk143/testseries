const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');
  const tPapers = db.collection('testPapers');

  console.log('Connected to DB:', db.databaseName);

  // 1. Find matching chapter names in questionBank
  const chapters = await qBank.distinct('chapter', {
    chapter: { $regex: /differential/i }
  });
  console.log('\nMatching chapters:', chapters);

  for (const ch of chapters) {
    const total = await qBank.countDocuments({ chapter: ch });
    const mathTotal = await qBank.countDocuments({ chapter: ch, subject: 'Mathematics' });
    const class12Total = await qBank.countDocuments({ chapter: ch, class: 'Class 12' });
    const genuine = await qBank.countDocuments({ chapter: ch, source: 'Question Bank' });
    const generator = total - genuine;

    console.log(`\nChapter "${ch}":`);
    console.log(`  Total docs: ${total}`);
    console.log(`  Mathematics: ${mathTotal}, Class 12: ${class12Total}`);
    console.log(`  Genuine (source: 'Question Bank'): ${genuine}`);
    console.log(`  Generator / other: ${generator}`);

    // Subtopics
    for (const field of ['subTopic', 'topic']) {
      const distinctVals = await qBank.distinct(field, { chapter: ch });
      console.log(`  Distinct ${field} (${distinctVals.length}):`, distinctVals);
    }

    // Breakdown per subTopic
    const subTopics = await qBank.distinct('subTopic', { chapter: ch });
    for (const st of subTopics) {
      const stTotal = await qBank.countDocuments({ chapter: ch, subTopic: st });
      const stGen = await qBank.countDocuments({ chapter: ch, subTopic: st, source: 'Question Bank' });
      const stGenTypes = await qBank.distinct('type', { chapter: ch, subTopic: st, source: 'Question Bank' });
      const stBogusTypes = await qBank.distinct('type', { chapter: ch, subTopic: st, source: { $ne: 'Question Bank' } });
      console.log(`    Subtopic "${st}": total=${stTotal}, genuine=${stGen} (${stGenTypes.join('/')}), bogus=${stTotal - stGen} (${stBogusTypes.join('/')})`);
    }

    // Inspect sample genuine questions
    const sampleGen = await qBank.find({ chapter: ch, source: 'Question Bank' }).limit(3).toArray();
    console.log(`\n  Sample Genuine Questions:`);
    sampleGen.forEach((g, i) => {
      console.log(`    [${i+1}] ID: ${g._id}, subTopic: "${g.subTopic}", type: ${g.type}`);
      console.log(`        Q: ${g.question?.substring(0, 100)}...`);
      console.log(`        Options: ${JSON.stringify(g.options)}`);
      console.log(`        Answer: ${g.correctAnswer}`);
    });

    // Inspect sample bogus questions
    const sampleBogus = await qBank.find({ chapter: ch, source: { $ne: 'Question Bank' } }).limit(3).toArray();
    console.log(`\n  Sample Generator Questions:`);
    sampleBogus.forEach((b, i) => {
      console.log(`    [${i+1}] ID: ${b._id}, subTopic: "${b.subTopic}", type: ${b.type}`);
      console.log(`        Q: ${b.question?.substring(0, 100)}...`);
      console.log(`        Answer: ${b.correctAnswer}`);
    });
  }

  // 2. Find matching test papers
  console.log('\n--- Checking Test Papers ---');
  const matchingTests = await tPapers.find({
    $or: [
      { chapter: { $regex: /differential/i } },
      { title: { $regex: /differential/i } },
      { name: { $regex: /differential/i } }
    ]
  }).toArray();

  console.log(`Matching testPapers found: ${matchingTests.length}`);
  matchingTests.forEach(tp => {
    console.log(`  _id: ${tp._id}, title: "${tp.title || tp.name}", chapter: "${tp.chapter}", subtopic: "${tp.subtopic}", qCount: ${tp.questions?.length}`);
  });

  // Also check subtopic tests matching the subtopics of Differential Equations
  const subTopics = await qBank.distinct('subTopic', { chapter: { $regex: /differential/i } });
  for (const st of subTopics) {
    const stTests = await tPapers.find({
      $or: [
        { subtopic: st },
        { title: st },
        { name: st },
        { title: { $regex: new RegExp(st.replace(/[()]/g, ''), 'i') } }
      ]
    }).toArray();
    stTests.forEach(tp => {
      console.log(`  [ST Match] _id: ${tp._id}, title: "${tp.title || tp.name}", subtopic: "${tp.subtopic}", qCount: ${tp.questions?.length}`);
    });
  }

  await client.close();
}

run().catch(console.error);
