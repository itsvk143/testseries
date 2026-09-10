const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectSampleNumericals() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const mock1 = await db.collection('testPapers').findOne({ testId: 'neet-MOCK-1' });
    console.log(`Examining ${mock1.testId}, title: ${mock1.title}, total questions: ${mock1.questions.length}`);

    const qIds = mock1.questions.map(q => new ObjectId(typeof q === 'string' ? q : (q._id || q)));
    const questions = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(questions.map(q => [q._id.toString(), q]));

    const numericalPositions = [];
    mock1.questions.forEach((q, idx) => {
        const idStr = (typeof q === 'string' ? q : (q._id || q)).toString();
        const doc = qMap.get(idStr);
        if (!doc) return;
        const type = (doc.type || doc.questionType || '').toUpperCase();
        if (type === 'NUMERICAL' || type === 'NUMERIC' || type === 'INTEGER') {
            numericalPositions.push({
                index: idx + 1,
                id: idStr,
                subject: doc.subject,
                chapter: doc.chapter,
                subtopic: doc.subtopic || doc.subTopic,
                type: doc.type,
                questionType: doc.questionType,
                question: (doc.question || doc.text || '').substring(0, 60)
            });
        }
    });

    console.log(`Found ${numericalPositions.length} numerical questions in neet-MOCK-1:`);
    console.log(JSON.stringify(numericalPositions, null, 2));

    await client.close();
}

inspectSampleNumericals().catch(console.error);
