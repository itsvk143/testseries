import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const testPapers = await db.collection('testPapers')
            .find({}, { projection: { testId: 1, title: 1, exam: 1, subject: 1, questions: 1 } })
            .sort({ title: 1 })
            .toArray();

        const tests = testPapers.map(tp => ({
            testId: tp.testId,
            title: tp.title || tp.testId,
            exam: tp.exam || (tp.testId?.startsWith('neet') ? 'NEET' : tp.testId?.startsWith('jee') ? 'JEE Main' : 'BITSAT'),
            subject: tp.subject || '',
            questionsCount: Array.isArray(tp.questions) ? tp.questions.length : 0
        }));

        return Response.json({ success: true, tests });
    } catch (error) {
        console.error('Error fetching tests list:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
