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
        const q = await db.collection('questions').findOne({ testId, id: qId });

        if (!q) return Response.json({ error: 'Question not found' });

        // Show char codes for each option text to detect hidden chars
        const debug = q.options?.map(opt => ({
            id: opt.id,
            text: opt.text,
            charCodes: [...(opt.text || '')].map(c => ({ ch: c, code: c.charCodeAt(0) }))
        }));

        return Response.json({ id: q.id, text: q.text, options: debug });
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

        const result = await db.collection('questions').updateOne(
            { testId, id },
            { $set: { options } }
        );

        return Response.json({ success: true, matched: result.matchedCount, modified: result.modifiedCount });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
