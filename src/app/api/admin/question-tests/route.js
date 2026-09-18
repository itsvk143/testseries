import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const questionId = searchParams.get('questionId');

        if (!questionId) {
            return Response.json({ success: false, error: 'questionId is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        let qObjId;
        if (ObjectId.isValid(questionId)) {
            qObjId = new ObjectId(questionId);
        }

        const query = qObjId 
            ? { questions: { $in: [qObjId, questionId] } }
            : { questions: questionId };

        const matchedTests = await db.collection('testPapers').find(
            query,
            { projection: { testId: 1, title: 1, exam: 1, subject: 1, type: 1, questions: 1 } }
        ).sort({ title: 1 }).toArray();

        const qIdStr = questionId.toString();
        const tests = matchedTests.map(tp => {
            let position = null;
            if (Array.isArray(tp.questions)) {
                const idx = tp.questions.findIndex(item => {
                    if (!item) return false;
                    const s = (typeof item === 'string' || item._bsontype === 'ObjectID' || item instanceof ObjectId)
                        ? item.toString()
                        : (item._id || item.questionId || item).toString();
                    return s === qIdStr;
                });
                if (idx !== -1) position = idx + 1;
            }

            const testType = tp.type || (
                tp.testId?.includes('PART') ? 'Part Test' :
                (tp.testId?.includes('FULL') || tp.testId?.includes('MOCK')) ? 'Full Test' :
                tp.testId?.includes('CHAPTER') ? 'Chapter Test' :
                tp.testId?.includes('SUBTOPIC') ? 'Subtopic Test' :
                tp.testId?.includes('PYQ') ? 'PYQ Test' : 'Test Paper'
            );

            return {
                testId: tp.testId,
                title: tp.title || tp.testId,
                exam: tp.exam || (tp.testId?.startsWith('neet') ? 'NEET' : tp.testId?.startsWith('jee') ? 'JEE Main' : 'BITSAT'),
                subject: tp.subject || '',
                type: testType,
                position
            };
        });

        return Response.json({ success: true, tests });
    } catch (error) {
        console.error('Error fetching question tests:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
