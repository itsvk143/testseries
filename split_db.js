const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('questions');

    // Find tests with exactly 90 questions (or close)
    const pipeline = [
      { $group: { _id: "$testId", count: { $sum: 1 } } },
      { $match: { count: { $gte: 90 } } }
    ];
    
    const results = await collection.aggregate(pipeline).toArray();
    console.log("Tests with >90 questions:", results);

  } finally {
    await client.close();
  }
}
run();
