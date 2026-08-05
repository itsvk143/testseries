import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { formatQuestionToLegacy } from '@/lib/questionFormatter';

// Debug: shows raw option text for a specific question in the database
export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const testId = searchParams.get('testId') || 'neet-CHAPTER-Physics-Physics-and-Measurement-11';

        const client = await clientPromise;
        const db = client.db();

        const testPaper = await db.collection('testPapers').findOne({ testId });
        if (!testPaper || !testPaper.questions) {
            return Response.json({ error: 'Test paper not found' });
        }

        const questionIds = testPaper.questions;
        const questions = await db.collection('questionBank')
            .find({ _id: { $in: questionIds } })
            .toArray();

        // Sort questions to maintain original order and map to legacy format
        const questionsMap = new Map(questions.map(q => [q._id.toString(), q]));
        const orderedQuestions = questionIds
            .map((id, index) => {
                const q = questionsMap.get(id.toString());
                if (!q) return null;
                return formatQuestionToLegacy(q, index + 1);
            })
            .filter(Boolean);

        // Return raw option text so we can see exactly what's stored
        const result = orderedQuestions.map(q => ({
            id: q.id,
            text: (q.text || '').substring(0, 80),
            options: q.options?.map(o => ({ id: o.id, rawText: o.text }))
        }));

        return Response.json({ total: orderedQuestions.length, testId, questions: result });

    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}

// Fix: directly update option text and question text in questionBank
export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection('questionBank');

        let fixed = 0;
        const allQuestions = await collection.find({}).toArray();

        for (const q of allQuestions) {
            if (!q.options || !Array.isArray(q.options)) continue;

            let needsUpdate = false;
            const newOptions = q.options.map(opt => {
                if (typeof opt !== 'string') return opt;

                let text = opt;

                // Fix 1: \command(expr) → \command{expr}
                const cmds = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit';
                const re = new RegExp(`\\\\(${cmds})\\(([^)]+)\\)`, 'g');
                text = text.replace(re, (m, cmd, content) => `\\${cmd}{${content}}`);

                // Fix 2: No $ at all, starts with LaTeX command → wrap in $$
                if (!text.includes('$') && /^\\[a-zA-Z]/.test(text.trim())) {
                    text = `$$${text.trim()}$$`;
                }

                if (text !== opt) {
                    needsUpdate = true;
                    return text;
                }
                return opt;
            });

            // Also fix question text
            let newQuestionText = q.question || '';
            const cmdsQ = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit';
            const reQ = new RegExp(`\\\\(${cmdsQ})\\(([^)]+)\\)`, 'g');
            const fixedText = newQuestionText.replace(reQ, (m, cmd, content) => `\\${cmd}{${content}}`);
            
            if (fixedText !== newQuestionText) {
                needsUpdate = true;
                newQuestionText = fixedText;
            }

            if (needsUpdate) {
                await collection.updateOne(
                    { _id: q._id },
                    { $set: { options: newOptions, question: newQuestionText, updatedAt: new Date() } }
                );
                fixed++;
            }
        }

        return Response.json({ success: true, message: `Fixed ${fixed} questions in the centralized Question Bank`, fixed });

    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
