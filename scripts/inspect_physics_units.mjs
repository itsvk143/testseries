import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const subtopicTests = await db.collection('testPapers').find({
    testId: /^neet-SUBTOPIC-Physics/i,
    $or: [
      { chapter: /Units & Measurements/i },
      { chapter: /Physics and Measurement/i }
    ],
    questions: { $exists: true }
  }).toArray();

  const grouped = {};
  for (const t of subtopicTests) {
    const key = t.subtopic || t.title;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({ testId: t.testId, count: t.questions?.length, status: t.status, isLive: t.isLive });
  }

  for (const [sub, list] of Object.entries(grouped)) {
    console.log(`Subtopic: "${sub}" (${list.length} test IDs)`);
    list.forEach(l => console.log(`  - ${l.testId}: ${l.count} qs | status: ${l.status} | isLive: ${l.isLive}`));
  }

  // Also check chapter tests
  const chapterTests = await db.collection('testPapers').find({
    testId: /^neet-CHAPTER-Physics/i,
    $or: [
      { chapter: /Units & Measurements/i },
      { chapter: /Physics and Measurement/i }
    ]
  }).toArray();

  console.log('\nChapter Tests:');
  chapterTests.forEach(c => console.log(`  - ${c.testId}: ${c.questions?.length} qs | status: ${c.status} | isLive: ${c.isLive}`));

  await client.close();
}

run();
