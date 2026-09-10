const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function analyzeTestsWithNumericals() {
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

    // Cache questions
    const allQIdSet = new Set();
    for (const t of neetTests) {
        if (!t.questions) continue;
        for (const q of t.questions) {
            if (!q) continue;
            const strId = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            allQIdSet.add(strId);
        }
    }

    const allQIdArr = Array.from(allQIdSet).map(id => new ObjectId(id));
    const qMap = new Map();
    const batchSize = 10000;
    for (let i = 0; i < allQIdArr.length; i += batchSize) {
        const batch = allQIdArr.slice(i, i + batchSize);
        const docs = await db.collection('questionBank').find(
            { _id: { $in: batch } },
            { projection: { _id: 1, type: 1, questionType: 1, chapter: 1, subject: 1, subtopic: 1, subTopic: 1 } }
        ).toArray();
        for (const doc of docs) qMap.set(doc._id.toString(), doc);
    }

    const categories = {};

    for (const test of neetTests) {
        if (!test.questions) continue;
        let numCount = 0;
        let arCount = 0;
        let mcqCount = 0;

        for (const qId of test.questions) {
            const strId = (typeof qId === 'string') ? qId : (qId._id ? qId._id.toString() : qId.toString());
            const q = qMap.get(strId);
            if (!q) continue;
            const rawType = (q.type || q.questionType || '').toUpperCase().trim();
            if (rawType === 'NUMERICAL' || rawType === 'NUMERIC' || rawType === 'INTEGER') {
                numCount++;
            } else if (rawType.includes('ASSERTION') || rawType === 'AR') {
                arCount++;
            } else {
                mcqCount++;
            }
        }

        if (numCount > 0) {
            let cat = 'OTHER';
            if (test.testId.includes('MOCK')) cat = 'MOCK';
            else if (test.testId.includes('PYQ')) cat = 'PYQ';
            else if (test.testId.includes('SUBTOPIC')) cat = 'SUBTOPIC';
            else if (test.testId.includes('CHAPTER')) cat = 'CHAPTER';
            else if (test.testId.includes('SUBJECT')) cat = 'SUBJECT';

            categories[cat] = categories[cat] || { count: 0, totalNumericals: 0, sample: [] };
            categories[cat].count++;
            categories[cat].totalNumericals += numCount;
            if (categories[cat].sample.length < 3) {
                categories[cat].sample.push({
                    testId: test.testId,
                    subject: test.subject,
                    chapter: test.chapter,
                    numCount,
                    arCount,
                    mcqCount,
                    total: test.questions.length
                });
            }
        }
    }

    console.log("Categories of tests containing numericals:");
    console.log(JSON.stringify(categories, null, 2));

    await client.close();
}

analyzeTestsWithNumericals().catch(console.error);
