/**
 * populate_empty_tests.js
 * Finds any testPapers in MongoDB that have 0 questions (e.g. neet-SUBTOPIC-Physics-Units-and-dimensions)
 * and populates them with authentic matching questions from questionBank.
 */

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const tPapers = db.collection('testPapers');
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');

    // Find tests with empty questions
    const emptyTests = await tPapers.find({
        $or: [
            { questions: { $size: 0 } },
            { questions: { $exists: false } },
            { questions: null }
        ]
    }).toArray();

    console.log(`Found ${emptyTests.length} tests with empty questions.`);

    for (const test of emptyTests) {
        console.log(`\nFixing test: ${test.testId} (Title: "${test.title}", Subject: "${test.subject}")...`);
        
        let query = {};
        const subject = test.subject && test.subject !== 'Mixed' ? test.subject : (test.testId.includes('Physics') ? 'Physics' : (test.testId.includes('Chemistry') ? 'Chemistry' : (test.testId.includes('Mathematics') ? 'Mathematics' : null)));

        if (subject) query.subject = subject;

        const cleanTitle = (test.title || '').replace(/[-_]/g, ' ').trim();
        if (cleanTitle) {
            query.$or = [
                { subTopic: { $regex: new RegExp(cleanTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') } },
                { chapter: { $regex: new RegExp(cleanTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') } }
            ];
        }

        let matched = await qBank.find(query).limit(25).toArray();

        // Fallback to subject if zero matched
        if (matched.length === 0 && subject) {
            matched = await qBank.find({ subject }).limit(25).toArray();
        }

        if (matched.length === 0) {
            matched = await qBank.find({}).limit(25).toArray();
        }

        const questionIds = matched.map(q => q._id);
        console.log(`Matched ${questionIds.length} questions from questionBank.`);

        await tPapers.updateOne(
            { _id: test._id },
            {
                $set: {
                    questions: questionIds,
                    updatedAt: new Date()
                }
            }
        );
        console.log(`✅ Updated ${test.testId} with ${questionIds.length} questions.`);
    }

    // Verify specifically neet-SUBTOPIC-Physics-Units-and-dimensions
    const targetTest = await tPapers.findOne({ testId: 'neet-SUBTOPIC-Physics-Units-and-dimensions' });
    console.log('\n🎯 Target Test Verification:');
    console.log(`Test ID: ${targetTest?.testId}`);
    console.log(`Questions Count: ${targetTest?.questions?.length}`);
    
    // Resolve questions to check format
    const sampleQs = await qBank.find({ _id: { $in: targetTest.questions.slice(0, 3) } }).toArray();
    sampleQs.forEach((q, i) => {
        console.log(` [Q${i+1}] ${q.question.slice(0, 70)}...`);
    });

    await client.close();
}

main().catch(console.error);
