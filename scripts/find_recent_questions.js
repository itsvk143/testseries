import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://cvksir07_db_user:ATBjy2o1jObXxqff@testseries.vll987v.mongodb.net/testseries?appName=testseries";

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('testseries');
        const collection = db.collection('questions');

        // Fetch the 5 most recently added questions (assuming _id is an ObjectId which is time-sortable)
        const recentQuestions = await collection.find().sort({ _id: -1 }).limit(5).toArray();

        console.log(`Found ${recentQuestions.length} recent questions.`);
        if (recentQuestions.length > 0) {
            console.log(JSON.stringify(recentQuestions, null, 2));
        }
    } finally {
        await client.close();
    }
}

main().catch(console.error);
