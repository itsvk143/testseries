const { MongoClient } = require('./node_modules/mongodb');
const fs = require('fs');
require('./node_modules/dotenv').config({ path: '/Users/laxmikumari/Desktop/web/project going on /testseries/.env.local' });

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
        
        // Find the right test in tests collection
        const tests = await db.collection('tests').find({ 
            subject: 'Chemistry', 
            type: 'CHAPTER',
            category: 'neet',
            title: { $regex: /Some Basic Concepts in Chemistry/i }
        }).toArray();
        
        if (tests.length === 0) {
            console.log("Could not find test in tests collection. Will try using computed ID.");
        } else {
            console.log("Found test:", tests[0].id, tests[0].title);
        }
        
        const testId = tests.length > 0 ? tests[0].id : "neet_chapter_chemistry_some_basic_concepts_in_chemistry";
        
        const qData = JSON.parse(fs.readFileSync('/Users/laxmikumari/Desktop/web/project going on /testseries/src/data/questionsneet/chemistry_some_basic_concepts.json', 'utf8'));

        console.log(`Inserting ${qData.length} questions into testId: ${testId}`);

        const collection = db.collection('questions');
        // Get max existing ID for this test
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
