import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

// Debug: shows raw option text for a specific question in the SAME DB the test player reads from
export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const testId = searchParams.get('testId') || 'neet-CHAPTER-Physics-Physics-and-Measurement-11';

        // Use the SAME db() call as the questions route (default db, no name)
        const client = await clientPromise;
        const db = client.db(); // <-- same as questions route
        const collection = db.collection('questions');

        const questions = await collection.find({ testId }).sort({ id: 1 }).toArray();

        // Return raw option text so we can see exactly what's stored
        const result = questions.map(q => ({
            id: q.id,
            text: (q.text || '').substring(0, 80),
            options: q.options?.map(o => ({ id: o.id, rawText: o.text }))
        }));

        return Response.json({ total: questions.length, testId, questions: result });

    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}

// Fix: directly update option text using the SAME default db the questions route uses
export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db(); // <-- same as questions route
        const collection = db.collection('questions');

        let fixed = 0;
        const allQuestions = await collection.find({}).toArray();

        for (const q of allQuestions) {
            if (!q.options || !Array.isArray(q.options)) continue;

            let needsUpdate = false;
            const newOptions = q.options.map(opt => {
                if (!opt.text) return opt;

                let text = opt.text;

                // Fix 1: \command(expr) → \command{expr}
                const cmds = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit';
                const re = new RegExp(`\\\\(${cmds})\\(([^)]+)\\)`, 'g');
                text = text.replace(re, (m, cmd, content) => `\\${cmd}{${content}}`);

                // Fix 2: No $ at all, starts with LaTeX command → wrap in $$
                if (!text.includes('$') && /^\\[a-zA-Z]/.test(text.trim())) {
                    text = `$$${text.trim()}$$`;
                }

                if (text !== opt.text) {
                    needsUpdate = true;
                    return { ...opt, text };
                }
                return opt;
            });

            // Also fix question text
            let newText = q.text || '';
            const cmdsQ = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit';
            const reQ = new RegExp(`\\\\(${cmdsQ})\\(([^)]+)\\)`, 'g');
            const fixedText = newText.replace(reQ, (m, cmd, content) => `\\${cmd}{${content}}`);
            if (fixedText !== newText) {
                needsUpdate = true;
                newText = fixedText;
            }

            if (needsUpdate) {
                await collection.updateOne(
                    { _id: q._id },
                    { $set: { options: newOptions, text: newText } }
                );
                fixed++;
            }
        }

        return Response.json({ success: true, message: `Fixed ${fixed} questions in the default DB`, fixed });

    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
