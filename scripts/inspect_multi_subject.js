const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectMultiSubjectTests() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const neetTests = await db.collection('testPapers').find({
        $or: [
            { exam: { $regex: /^neet$/i } },
            { testId: { $regex: /^neet/i } }
        ]
    }).toArray();

    let singleSubjCount = 0;
    let multiSubjCount = 0;
    const multiSubjWithNumericals = [];

    for (const tp of neetTests) {
        const isSingle = tp.testId.includes("SUBJECT") || tp.testId.includes("CHAPTER") || tp.testId.includes("SUBTOPIC") || (tp.subject && tp.subject !== "Mixed" && tp.subject !== "All");
        if (isSingle) {
            singleSubjCount++;
        } else {
            multiSubjCount++;
            multiSubjWithNumericals.push(tp.testId);
        }
    }

    console.log(`Single subject tests: ${singleSubjCount}, Multi subject tests: ${multiSubjCount}`);
    console.log("Sample multi-subject tests:", multiSubjWithNumericals.slice(0, 10));

    await client.close();
}

inspectMultiSubjectTests().catch(console.error);
