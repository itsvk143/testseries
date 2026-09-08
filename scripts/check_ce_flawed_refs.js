require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

async function checkFlawedRefs() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');

  const flawed = JSON.parse(fs.readFileSync('scripts/flawed_ce_genuine.json'));
  console.log(`Checking test paper references for ${flawed.length} flawed genuine questions:\n`);

  for (const f of flawed) {
    const papers = await db.collection('testPapers').find({
      $or: [
        { 'sections.questions': new ObjectId(f._id) },
        { 'sections.questions': f._id },
        { 'questions': new ObjectId(f._id) },
        { 'questions': f._id }
      ]
    }).project({ title: 1 }).toArray();

    console.log(`ID: ${f._id} (${f.subTopic}) -> ${papers.length} papers: ${papers.map(p => p.title).join(', ')}`);
  }

  await client.close();
}

checkFlawedRefs().catch(console.error);
