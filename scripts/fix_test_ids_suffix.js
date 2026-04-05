const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function run() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('testseries');
        const qCol = db.collection('questions');

        // Fix the previously updated testIds to include the '-11' classGrade suffix.
        const id1_old = "neet-CHAPTER-Chemistry-Some-Basic-Concepts-in-Chemistry";
        const id1_new = "neet-CHAPTER-Chemistry-Some-Basic-Concepts-in-Chemistry-11";
        
        const res1 = await qCol.updateMany(
            { testId: id1_old },
            { $set: { testId: id1_new } }
        );
        console.log(`Updated ${res1.modifiedCount} questions for 'Some Basic Concepts in Chemistry' to ID: ${id1_new}`);

        const id2_old = "neet-CHAPTER-Chemistry-Solutions";
        const id2_new = "neet-CHAPTER-Chemistry-Solutions-11";
        const res2 = await qCol.updateMany(
            { testId: id2_old },
            { $set: { testId: id2_new } }
        );
        console.log(`Updated ${res2.modifiedCount} questions for 'Solutions' to ID: ${id2_new}`);

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await client.close();
    }
}

run();
