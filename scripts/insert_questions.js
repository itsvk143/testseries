const { MongoClient } = require('mongodb');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function run() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("No MongoDB URI found in .env.local");
        return;
    }
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('testseries');
        const testId = "neet_chapter_chemistry_some_basic_concepts_in_chemistry";
        
        const qData = JSON.parse(fs.readFileSync('./src/data/questionsneet/chemistry_some_basic_concepts.json', 'utf8'));

        console.log(`Inserting ${qData.length} questions into testId: ${testId}`);

        const collection = db.collection('questions');
        const existing = await collection.find({ testId }).sort({ id: -1 }).limit(1).toArray();
        let maxId = existing.length > 0 ? (existing[0].id || 0) : 0;

        const toInsert = qData.map(q => {
            maxId++;
            return { ...q, id: maxId, testId };
        });

        const result = await collection.insertMany(toInsert);
        console.log(`Successfully inserted ${result.insertedCount} questions!`);
        
    } catch (e) {
        console.error("Error inserting:", e);
    } finally {
        await client.close();
    }
}

run();
