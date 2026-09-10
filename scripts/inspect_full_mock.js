const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectFullMock() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const mock1 = await db.collection('testPapers').findOne({ testId: 'neet-MOCK-1' });
    const qIds = mock1.questions.map(q => new ObjectId(typeof q === 'string' ? q : (q._id || q)));
    const questions = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(questions.map(q => [q._id.toString(), q]));

    const breakdown = [];
    mock1.questions.forEach((q, idx) => {
        const idStr = (typeof q === 'string' ? q : (q._id || q)).toString();
        const doc = qMap.get(idStr);
        if (!doc) return;
        const rawType = (doc.type || doc.questionType || '').toUpperCase().trim();
        let normType = 'MCQ';
        if (rawType === 'NUMERICAL' || rawType === 'NUMERIC' || rawType === 'INTEGER') normType = 'NUMERICAL';
        else if (rawType.includes('ASSERTION') || rawType === 'AR') normType = 'ASSERTION_REASON';

        breakdown.push({
            qNum: idx + 1,
            subject: doc.subject,
            chapter: doc.chapter,
            type: normType
        });
    });

    // Count by subject
    const subjectCounts = {};
    for (const b of breakdown) {
        subjectCounts[b.subject] = subjectCounts[b.subject] || { total: 0, MCQ: 0, NUMERICAL: 0, ASSERTION_REASON: 0 };
        subjectCounts[b.subject].total++;
        subjectCounts[b.subject][b.type]++;
    }

    console.log("Subject breakdown in neet-MOCK-1:");
    console.log(subjectCounts);

    const arQuestions = breakdown.filter(b => b.type === 'ASSERTION_REASON');
    console.log("AR questions in neet-MOCK-1 positions:", arQuestions);

    await client.close();
}

inspectFullMock().catch(console.error);
