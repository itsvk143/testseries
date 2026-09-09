const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  console.log('Connected to MongoDB.');

  const dataPath = path.join(__dirname, 'group2.json');
  const questions = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`Loaded ${questions.length} questions from group2.json`);

  const col = db.collection('questionBank');

  let inserted = 0;
  for (const q of questions) {
    await col.updateOne(
      { questionId: q.questionId },
      { $setOnInsert: q },
      { upsert: true }
    );
    inserted++;
  }

  console.log(`Successfully upserted ${inserted} questions from Group 2 into questionBank!`);
  await client.close();
}

main().catch(console.error);
