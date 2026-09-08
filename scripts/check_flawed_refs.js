require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

async function checkRefs() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const flawedIds = [
    '6a98e398910bb37b0e557f1c',
    '6a98e398910bb37b0e557f20',
    '6a98fa34b89acd4c6047d134',
    '6a98fa34b89acd4c6047d131',
    '6a98fa34b89acd4c6047d12d',
    '6a98fa34b89acd4c6047d132',
    '6a98fa34b89acd4c6047d130',
    '6a98fa34b89acd4c6047d12c'
  ];

  for (const idStr of flawedIds) {
    const papers = await db.collection('testPapers').find({
      $or: [
        { 'sections.questions': new ObjectId(idStr) },
        { 'sections.questions': idStr },
        { 'questions': new ObjectId(idStr) },
        { 'questions': idStr }
      ]
    }).project({ title: 1 }).toArray();

    console.log(`ID ${idStr}: referenced in ${papers.length} papers: ${papers.map(p => p.title).join(', ')}`);
  }

  await client.close();
}

checkRefs().catch(console.error);
