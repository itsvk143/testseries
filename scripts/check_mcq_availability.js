const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkMCQAvailability() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const mcqByChapter = await db.collection('questionBank').aggregate([
        {
            $match: {
                $nor: [
                    { type: { $regex: /assertion/i } },
                    { questionType: { $regex: /assertion/i } },
                    { type: 'AR' },
                    { questionType: 'AR' },
                    { type: { $regex: /numeric|integer/i } },
                    { questionType: { $regex: /numeric|integer/i } }
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

    console.log(`Found ${mcqByChapter.length} chapters with MCQ questions.`);
    const chaptersWithLessThan40 = mcqByChapter.filter(c => c.count < 40);
    console.log(`Chapters with < 40 MCQ questions: ${chaptersWithLessThan40.length}`);
    if (chaptersWithLessThan40.length > 0) {
        console.log("Sample chapters with < 40 MCQ:", chaptersWithLessThan40.slice(0, 10));
    }

    await client.close();
}

checkMCQAvailability().catch(console.error);
