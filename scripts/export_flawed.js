require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

async function exportFlawed() {
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
  ].map(id => new ObjectId(id));

  const docs = await db.collection('questionBank').find({ _id: { $in: flawedIds } }).toArray();
  fs.writeFileSync('scripts/flawed_genuine_docs.json', JSON.stringify(docs, null, 2));
  console.log(`Exported ${docs.length} docs to scripts/flawed_genuine_docs.json`);

  await client.close();
}

exportFlawed().catch(console.error);
