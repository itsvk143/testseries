import clientPromise from '@/lib/mongodb';
import { neetTests } from '@/data/exams/neet';
import { jeeMainsTests } from '@/data/exams/jeeMains';
import { cuetTests } from '@/data/exams/cuet';
import { bitsatTests } from '@/data/exams/bitsat';
import { getQuestionsForTest } from '@/data/testService';
import { formatQuestionToCentralized } from '@/lib/questionFormatter';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const allTests = [
            ...neetTests,
            ...jeeMainsTests,
            ...cuetTests,
            ...bitsatTests
        ];

        let initializedCount = 0;
        let skippedCount = 0;

        for (const test of allTests) {
            const testId = test.id;
            const existing = await db.collection('testPapers').findOne({ testId });
            if (existing) {
                // If it exists but has questions, make sure the questions have chapters updated
                const testChapter = test.chapter || '';
                if (testChapter) {
                    await db.collection('questionBank').updateMany(
                        { _id: { $in: existing.questions || [] }, chapter: '' },
                        { $set: { chapter: testChapter, topic: testChapter } }
                    );
                }
                skippedCount++;
                continue;
            }

            const fbQs = getQuestionsForTest(testId) || [];
            const testChapter = test.chapter || '';
            const questionIds = [];

            for (const q of fbQs) {
                const centralQ = formatQuestionToCentralized(q);
                if ((!centralQ.chapter || centralQ.chapter === '') && testChapter) {
                    centralQ.chapter = testChapter;
                    centralQ.topic = testChapter;
                }
                if (testId.includes('SUBTOPIC') && test.title) {
                    centralQ.subTopic = test.title;
                }

                // De-duplicate
                let existingQ = await db.collection('questionBank').findOne({
                    subject: centralQ.subject,
                    question: centralQ.question
                });
                if (existingQ) {
                    questionIds.push(existingQ._id);
                } else {
                    const res = await db.collection('questionBank').insertOne(centralQ);
                    questionIds.push(res.insertedId);
                }
            }

            // Create test paper metadata
            const exam = testId.startsWith('neet') ? 'NEET' : testId.startsWith('jee-mains') ? 'JEE Main' : testId.startsWith('jee-advance') ? 'JEE Advanced' : 'Other';
            const subject = test.subject || (testId.includes('Physics') ? 'Physics' : testId.includes('Chemistry') ? 'Chemistry' : testId.includes('Mathematics') ? 'Mathematics' : 'Mixed');
            const title = test.title || testId.replace(/-/g, ' ');
            const duration = test.duration || (testId.includes('SUBJECT') || testId.includes('CHAPTER') ? 60 : 180);
            const totalMarks = test.totalMarks || (exam === 'NEET' ? (duration === 60 ? 180 : 720) : (duration === 60 ? 100 : 300));

            await db.collection('testPapers').insertOne({
                testId,
                title,
                exam,
                subject,
                duration,
                totalMarks,
                questions: questionIds,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            initializedCount++;
        }

        return Response.json({ success: true, initializedCount, skippedCount });
    } catch (error) {
        console.error('Initialize all tests API error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
