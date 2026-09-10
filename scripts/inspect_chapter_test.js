const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectChapterTest() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const t = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Physics-Current-Electricity-12' });
    const qIds = t.questions.map(q => new ObjectId(typeof q === 'string' ? q : (q._id || q)));
    const questions = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(questions.map(q => [q._id.toString(), q]));

    t.questions.forEach((q, idx) => {
        const idStr = (typeof q === 'string' ? q : (q._id || q)).toString();
        const doc = qMap.get(idStr);
        const type = (doc?.type || doc?.questionType || '').toUpperCase();
        console.log(`Q${idx + 1}: ${type} | ${doc?.chapter} | ${doc?.subtopic || doc?.subTopic}`);
    });

    await client.close();
}

inspectChapterTest().catch(console.error);
