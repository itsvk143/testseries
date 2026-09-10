import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://cvksir07_db_user:ATBjy2o1jObXxqff@testseries.vll987v.mongodb.net/testseries?appName=testseries";

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('testseries');
        const collection = db.collection('questions');

        // Search for DBMS questions (either subject is DBMS, or question text contains DBMS)
        const dbmsQuestions = await collection.find({
            $or: [
                { subject: { $regex: /dbms|database/i } },
                { question: { $regex: /dbms|database|sql|mongodb/i } },
                { topic: { $regex: /dbms|database/i } },
                { chapter: { $regex: /dbms|database/i } }
            ]
        }).limit(10).toArray();

        console.log(`Found ${dbmsQuestions.length} DBMS-related questions.`);
        if (dbmsQuestions.length > 0) {
            console.log(JSON.stringify(dbmsQuestions, null, 2));
        }
    } finally {
        await client.close();
    }
}

main().catch(console.error);
