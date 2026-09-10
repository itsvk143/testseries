const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkQuestionBank() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    // Check available question types across questionBank
    const typeAgg = await db.collection('questionBank').aggregate([
        {
            $group: {
                _id: {
                    type: { $ifNull: ["$type", "$questionType"] },
                    exam: "$exam"
                },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    console.log("QuestionBank distribution by type & exam:");
    console.log(typeAgg);

    // Let's also check distinct subjects and chapters for NEET questions
    const neetQB = await db.collection('questionBank').aggregate([
        {
            $match: {
                $or: [
                    { exam: { $regex: /^neet$/i } },
                    { exam: { $exists: false } },
                    { exam: null }
                ]
            }
        },
        {
            $group: {
                _id: {
                    subject: "$subject",
                    type: { $toUpper: { $ifNull: ["$type", "$questionType"] } }
                },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    console.log("\nNEET / unassigned questionBank counts by subject & type:");
    console.log(neetQB);

    await client.close();
}

checkQuestionBank().catch(console.error);
