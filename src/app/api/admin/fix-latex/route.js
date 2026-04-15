import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

// One-time utility: fix specific questions with corrupted LaTeX option text
export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const collection = db.collection('questions');

        let fixed = 0;
        const updates = [];

        // Strategy: find ALL questions where any option text contains \sqrt( or other
        // invalid \command( patterns (parentheses instead of curly braces)
        // and also where options have no $ delimiters at all but contain LaTeX commands
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
                const fixed1 = text.replace(re, (m, cmd, content) => `\\${cmd}{${content}}`);

                // Fix 2: No $ at all, starts with \command → wrap in $$
                let fixed2 = fixed1;
                if (!fixed2.includes('$') && /^\\[a-zA-Z]/.test(fixed2.trim())) {
                    fixed2 = `$$${fixed2.trim()}$$`;
                }

                // Fix 3: Orphaned trailing $ → add opening $
                const fixed3 = fixed2.replace(/(^|[^$])(\\[a-zA-Z]+(?:\{[^$]*?\})+)\$(?!\$)/g, (match, pre, expr) => {
                    return `${pre}$$${expr}$$`;
                });

                if (fixed3 !== opt.text) {
                    needsUpdate = true;
                    return { ...opt, text: fixed3 };
                }
                return opt;
            });

            // Also fix question text itself
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
                updates.push({ id: q._id, testId: q.testId, preview: (q.text || '').substring(0, 60) });
            }
        }

        return Response.json({
            success: true,
            message: `Fixed ${fixed} questions with corrupted LaTeX formatting`,
            fixed,
            updates: updates.slice(0, 20) // show first 20
        });

    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
