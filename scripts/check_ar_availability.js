const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkARAvailability() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    // Group questionBank by subject and chapter for AR questions
    const arByChapter = await db.collection('questionBank').aggregate([
        {
            $match: {
                $or: [
                    { type: { $regex: /assertion/i } },
                    { questionType: { $regex: /assertion/i } },
                    { type: 'AR' },
                    { questionType: 'AR' }
                ]
            }
        },
        {
            $group: {
                _id: { subject: "$subject", chapter: "$chapter" },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    console.log(`Found ${arByChapter.length} chapters with AR questions.`);
    const chaptersWithLessThan6 = arByChapter.filter(c => c.count < 6);
    console.log(`Chapters with < 6 AR questions: ${chaptersWithLessThan6.length}`);
    if (chaptersWithLessThan6.length > 0) {
        console.log("Sample chapters with < 6 AR:", chaptersWithLessThan6.slice(0, 10));
    }

    await client.close();
}

checkARAvailability().catch(console.error);
