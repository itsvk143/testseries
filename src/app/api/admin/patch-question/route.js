import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

// Targeted patch: directly inspect char codes and replace specific option text
export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const testId = searchParams.get('testId') || 'neet-CHAPTER-Physics-Physics-and-Measurement-11';
        const qId = parseInt(searchParams.get('id') || '43');

        const client = await clientPromise;
        const db = client.db();

        const testPaper = await db.collection('testPapers').findOne({ testId });
        if (!testPaper || !testPaper.questions) {
            return Response.json({ error: 'Test paper not found' });
        }

        const questionObjectId = testPaper.questions[qId - 1];
        if (!questionObjectId) {
            return Response.json({ error: 'Question not found in test' });
        }

        const q = await db.collection('questionBank').findOne({ _id: questionObjectId });
        if (!q) return Response.json({ error: 'Question not found in database' });

        // Map options back to legacy format to inspect char codes
        const legacyOptions = Array.isArray(q.options)
            ? q.options.map((opt, i) => ({
                id: String.fromCharCode(97 + i),
                text: opt
              }))
            : [];

        // Show char codes for each option text to detect hidden chars
        const debug = legacyOptions.map(opt => ({
            id: opt.id,
            text: opt.text,
            charCodes: [...(opt.text || '')].map(c => ({ ch: c, code: c.charCodeAt(0) }))
        }));

        return Response.json({ id: qId, text: q.question, options: debug });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}

// Patch: directly write clean LaTeX for a specific question's options
export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const { testId, id, options } = await request.json();

        const client = await clientPromise;
        const db = client.db();

        const testPaper = await db.collection('testPapers').findOne({ testId });
        if (!testPaper || !testPaper.questions) {
            return Response.json({ error: 'Test paper not found' }, { status: 404 });
        }

        const questionObjectId = testPaper.questions[id - 1];
        if (!questionObjectId) {
            return Response.json({ error: 'Question not found in test' }, { status: 404 });
        }

        // Map options objects to string array
        let centralOptions = [];
        if (Array.isArray(options)) {
            centralOptions = options.map(opt => typeof opt === 'string' ? opt : opt.text || '');
        }

        const result = await db.collection('questionBank').updateOne(
            { _id: questionObjectId },
            { $set: { options: centralOptions, updatedAt: new Date() } }
        );

        return Response.json({ success: true, matched: result.matchedCount, modified: result.modifiedCount });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
