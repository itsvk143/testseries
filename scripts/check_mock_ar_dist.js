const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkAllMockAR() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const mockTests = await db.collection('testPapers').find({
        testId: { $regex: /^neet-(MOCK|PYQ|CT)/i }
    }).toArray();

    console.log(`Found ${mockTests.length} MOCK/PYQ/CT tests.`);

    // Check 10 of them
    const allQIds = [];
    mockTests.forEach(t => {
        (t.questions || []).forEach(q => {
            const s = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            allQIds.push(new ObjectId(s));
        });
    });

    const qDocs = await db.collection('questionBank').find(
        { _id: { $in: allQIds } },
        { projection: { _id: 1, subject: 1, type: 1, questionType: 1 } }
    ).toArray();
    const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

    let totalTests = 0;
    let arCountsPerTest = {};

    for (const t of mockTests) {
        totalTests++;
        let arTotal = 0;
        let numTotal = 0;
        let mcqTotal = 0;

        for (const q of t.questions || []) {
            const s = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            const doc = qMap.get(s);
            if (!doc) continue;
            const typ = (doc.type || doc.questionType || '').toUpperCase();
            if (typ.includes('ASSERTION') || typ === 'AR') arTotal++;
            else if (typ === 'NUMERICAL' || typ === 'NUMERIC' || typ === 'INTEGER') numTotal++;
            else mcqTotal++;
        }

        arCountsPerTest[arTotal] = (arCountsPerTest[arTotal] || 0) + 1;
    }

    console.log("Distribution of total AR questions across MOCK/PYQ/CT tests:", arCountsPerTest);

    await client.close();
}

checkAllMockAR().catch(console.error);
