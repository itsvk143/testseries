require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');

  const docs = await collection.find({
    chapter: 'Optics',
    subject: 'Physics'
  }).toArray();

  console.log(`Total Optics questions: ${docs.length}`);

  const subtopicMap = {};
  for (const doc of docs) {
    const sub = doc.subTopic || doc.subtopic || 'UNKNOWN';
    if (!subtopicMap[sub]) {
      subtopicMap[sub] = { total: 0, ar: 0, mcq: 0, num: 0, qb: 0, gen: 0 };
    }
    subtopicMap[sub].total++;
    if (doc.type === 'ASSERTION_REASON') subtopicMap[sub].ar++;
    else if (doc.type === 'MCQ') subtopicMap[sub].mcq++;
    else if (doc.type === 'NUMERICAL') subtopicMap[sub].num++;

    if (doc.source === 'Question Bank') subtopicMap[sub].qb++;
    else subtopicMap[sub].gen++;
  }

  console.table(subtopicMap);

  // Check test paper references
  const testPapers = await db.collection('testPapers').find({}).toArray();
  const docIdSet = new Set(docs.map(d => d._id.toString()));
  let referencedCount = 0;
  const paperUsage = {};

  for (const paper of testPapers) {
    let paperMatched = 0;
    const qList = [];
    if (Array.isArray(paper.questions)) qList.push(...paper.questions);
    if (Array.isArray(paper.sections)) {
      for (const sec of paper.sections) {
        if (Array.isArray(sec.questions)) qList.push(...sec.questions);
      }
    }
    for (const q of qList) {
      const qid = (q && q._id ? q._id : q).toString();
      if (docIdSet.has(qid)) {
        referencedCount++;
        paperMatched++;
      }
    }
    if (paperMatched > 0) {
      paperUsage[paper.title || paper.testId || paper._id.toString()] = paperMatched;
    }
  }

  console.log(`Total references in testPapers: ${referencedCount}`);
  console.log('Referencing papers:', paperUsage);

  await client.close();
}

run().catch(console.error);
