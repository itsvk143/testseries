const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkSingleSubjectDist() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const singleTests = await db.collection('testPapers').find({
        $or: [
            { testId: { $regex: /^neet-(CHAPTER|SUBTOPIC|SUBJECT)/i } },
            { exam: { $regex: /^neet$/i }, testId: { $not: { $regex: /^neet-(MOCK|PYQ|CT)/i } } }
        ]
    }).toArray();

    console.log(`Found ${singleTests.length} single-subject NEET tests.`);

    const allQIds = [];
    singleTests.forEach(t => {
        (t.questions || []).forEach(q => {
            const s = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            allQIds.push(new ObjectId(s));
        });
    });

    const qDocs = await db.collection('questionBank').find(
        { _id: { $in: allQIds } },
        { projection: { _id: 1, subject: 1, chapter: 1, type: 1, questionType: 1 } }
    ).toArray();
    const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

    const arCounts = {};
    const numCounts = {};
    let testsWithARNotAtEnd = 0;

    for (const t of singleTests) {
        let arTotal = 0;
        let numTotal = 0;
        const types = [];

        for (const q of t.questions || []) {
            const s = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            const doc = qMap.get(s);
            if (!doc) continue;
            const typ = (doc.type || doc.questionType || '').toUpperCase();
            if (typ.includes('ASSERTION') || typ === 'AR') {
                arTotal++;
                types.push('AR');
            } else if (typ === 'NUMERICAL' || typ === 'NUMERIC' || typ === 'INTEGER') {
                numTotal++;
                types.push('NUM');
            } else {
                types.push('MCQ');
            }
        }

        arCounts[arTotal] = (arCounts[arTotal] || 0) + 1;
        numCounts[numTotal] = (numCounts[numTotal] || 0) + 1;

        // Check if all AR questions are strictly at the end
        const expectedSlice = types.slice(types.length - arTotal);
        const prefixSlice = types.slice(0, types.length - arTotal);
        if (prefixSlice.includes('AR')) {
            testsWithARNotAtEnd++;
        }
    }

    console.log("AR count distribution across single-subject tests:", arCounts);
    console.log("Numerical count distribution across single-subject tests:", numCounts);
    console.log(`Tests where AR questions are NOT at the end: ${testsWithARNotAtEnd}`);

    await client.close();
}

checkSingleSubjectDist().catch(console.error);
