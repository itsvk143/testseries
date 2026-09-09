const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function inspectNeetTests() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('Missing MONGODB_URI in .env.local');
        process.exit(1);
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    console.log('Connected to MongoDB.');

    // Find all NEET tests
    const neetTests = await db.collection('testPapers').find({
        $or: [
            { exam: { $regex: /^neet$/i } },
            { testId: { $regex: /^neet/i } }
        ]
    }).toArray();

    console.log(`Found ${neetTests.length} NEET test papers.`);

    // Collect all question IDs
    const allQIdSet = new Set();
    for (const t of neetTests) {
        if (!t.questions) continue;
        for (const q of t.questions) {
            if (!q) continue;
            const strId = (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
            allQIdSet.add(strId);
        }
    }

    console.log(`Total unique question IDs across all NEET tests: ${allQIdSet.size}`);

    // Query in batches of 10,000 IDs
    const allQIdArr = Array.from(allQIdSet).map(id => {
        try { return new ObjectId(id); } catch (e) { return id; }
    });

    const qMap = new Map();
    const batchSize = 10000;
    for (let i = 0; i < allQIdArr.length; i += batchSize) {
        const batch = allQIdArr.slice(i, i + batchSize);
        const docs = await db.collection('questionBank').find(
            { _id: { $in: batch } },
            { projection: { _id: 1, type: 1, questionType: 1, chapter: 1, subject: 1, subtopic: 1, subTopic: 1 } }
        ).toArray();

        for (const doc of docs) {
            qMap.set(doc._id.toString(), doc);
        }
    }

    console.log(`Loaded ${qMap.size} questions from questionBank.`);

    let testsWithNumerical = 0;
    let testsWithMoreThan6AR = 0;
    let testsWithARNotAtEnd = 0;
    let totalNumericalCount = 0;
    let totalARCount = 0;
    let totalMCQCount = 0;

    const testsNeedingFix = [];

    for (const test of neetTests) {
        if (!test.questions || test.questions.length === 0) continue;

        const qIds = test.questions.map(q => {
            if (!q) return null;
            return (typeof q === 'string') ? q : (q._id ? q._id.toString() : q.toString());
        }).filter(Boolean);

        let numericalCount = 0;
        let arCount = 0;
        let mcqCount = 0;
        const typesInOrder = [];

        for (const id of qIds) {
            const q = qMap.get(id);
            if (!q) {
                // If question doc missing, treat as unknown/mcq
                typesInOrder.push('UNKNOWN');
                continue;
            }
            const rawType = (q.type || q.questionType || '').toUpperCase().trim();
            if (rawType === 'NUMERICAL' || rawType === 'NUMERIC' || rawType === 'INTEGER') {
                numericalCount++;
                typesInOrder.push('NUMERICAL');
            } else if (rawType.includes('ASSERTION') || rawType === 'AR') {
                arCount++;
                typesInOrder.push('ASSERTION_REASON');
            } else {
                mcqCount++;
                typesInOrder.push('MCQ');
            }
        }

        totalNumericalCount += numericalCount;
        totalARCount += arCount;
        totalMCQCount += mcqCount;

        // Check if AR questions are strictly at the end
        let hasSeenNonARAfterAR = false;
        let seenAR = false;
        for (const t of typesInOrder) {
            if (t === 'ASSERTION_REASON') {
                seenAR = true;
            } else if (seenAR && t !== 'ASSERTION_REASON') {
                hasSeenNonARAfterAR = true;
                break;
            }
        }

        const hasNumerical = numericalCount > 0;
        const moreThan6AR = arCount > 6;
        const arNotAtEnd = hasSeenNonARAfterAR;

        if (hasNumerical) testsWithNumerical++;
        if (moreThan6AR) testsWithMoreThan6AR++;
        if (arNotAtEnd) testsWithARNotAtEnd++;

        if (hasNumerical || moreThan6AR || arNotAtEnd) {
            testsNeedingFix.push({
                testId: test.testId,
                title: test.title,
                subject: test.subject,
                chapter: test.chapter,
                totalQuestions: test.questions.length,
                numericalCount,
                arCount,
                mcqCount,
                hasSeenNonARAfterAR,
                typesInOrder
            });
        }
    }

    console.log('\n================ SUMMARY ================');
    console.log(`Total NEET tests examined: ${neetTests.length}`);
    console.log(`Total MCQs across NEET tests: ${totalMCQCount}`);
    console.log(`Total Assertion-Reason across NEET tests: ${totalARCount}`);
    console.log(`Total Numericals across NEET tests: ${totalNumericalCount}`);
    console.log(`-----------------------------------------`);
    console.log(`Tests with Numerical questions: ${testsWithNumerical}`);
    console.log(`Tests with > 6 Assertion-Reason questions: ${testsWithMoreThan6AR}`);
    console.log(`Tests where AR questions are NOT at the end: ${testsWithARNotAtEnd}`);
    console.log(`Total tests requiring fix/reordering: ${testsNeedingFix.length}`);
    console.log('=========================================\n');

    if (testsNeedingFix.length > 0) {
        console.log('Breakdown of first 10 tests needing changes:');
        for (const t of testsNeedingFix.slice(0, 10)) {
            console.log(`- [${t.testId}] "${t.title}": Numericals: ${t.numericalCount}, AR: ${t.arCount}, MCQ: ${t.mcqCount}, AR not at end: ${t.hasSeenNonARAfterAR}`);
        }
    }

    await client.close();
}

inspectNeetTests().catch(console.error);
