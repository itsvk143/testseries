const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectMocksAndFull() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const fullTests = await db.collection('testPapers').find({
        $or: [
            { testId: { $regex: /^neet-(MOCK|PYQ|CT)/i } },
            { exam: { $regex: /^neet$/i }, questions: { $size: 180 } }
        ]
    }).toArray();

    console.log(`Found ${fullTests.length} NEET Full/Mock/PYQ/CT test papers.`);

    // Sample 5
    const qIds = [];
    for (const t of fullTests.slice(0, 5)) {
        for (const q of t.questions) {
            qIds.push(new ObjectId(typeof q === 'string' ? q : (q._id || q)));
        }
    }

    const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
    const qMap = new Map(qDocs.map(q => [q._id.toString(), q]));

    for (const t of fullTests.slice(0, 5)) {
        let arCount = 0;
        let numCount = 0;
        let mcqCount = 0;
        const subjBreakdown = {};

        for (const q of t.questions) {
            const idStr = (typeof q === 'string' ? q : (q._id || q)).toString();
            const doc = qMap.get(idStr);
            if (!doc) continue;
            const subj = doc.subject || 'Unknown';
            subjBreakdown[subj] = subjBreakdown[subj] || { mcq: 0, ar: 0, num: 0 };

            const type = (doc.type || doc.questionType || '').toUpperCase();
            if (type.includes('ASSERTION') || type === 'AR') {
                arCount++;
                subjBreakdown[subj].ar++;
            } else if (type === 'NUMERICAL' || type === 'NUMERIC' || type === 'INTEGER') {
                numCount++;
                subjBreakdown[subj].num++;
            } else {
                mcqCount++;
                subjBreakdown[subj].mcq++;
            }
        }
        console.log(`[${t.testId}] "${t.title}": Total ${t.questions.length}, MCQ: ${mcqCount}, AR: ${arCount}, Num: ${numCount}`);
        console.log(`  By subject:`, subjBreakdown);
    }

    await client.close();
}

inspectMocksAndFull().catch(console.error);
