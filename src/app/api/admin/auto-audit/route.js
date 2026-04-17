import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export const maxDuration = 60; // 60 seconds

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Audit a single question via Gemini.
 * Returns the audit result or null on failure.
 */
async function auditQuestion(question) {
    // Skip if already has a solid explanation AND was audited — nothing to do.
    if (question.audited && question.explanation && question.explanation.length > 80) {
        return { id: question._id, skipped: true };
    }

    const auditPrompt = `You are a subject matter expert for competitive exams (NEET/JEE). Verify this MCQ.

Question: ${question.text}
Options:
${question.options.map(o => `${o.id}: ${o.text}`).join('\n')}
Declared Correct Option: ${question.correctOption}
Declared Explanation: ${question.explanation || 'None'}

Tasks:
1. Check if the declared correct option is right.
2. If wrong, provide the actual correct option letter (a/b/c/d).
3. If explanation is missing/too short/wrong, write a clear 2-sentence explanation.
4. If explanation is already good, keep it unchanged.

Respond ONLY with valid JSON (no markdown):
{"isCorrect": true, "correctedOption": "b", "explanation": "explanation here"}`;

    try {
        const geminiRes = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: auditPrompt }] }],
                generationConfig: {
                    temperature: 0.1,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!geminiRes.ok) throw new Error(`Gemini ${geminiRes.status}`);

        const geminiData = await geminiRes.json();
        const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const auditResult = JSON.parse(rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim());

        return {
            id: question._id,
            correctedOption: auditResult.correctedOption || question.correctOption,
            explanation: auditResult.explanation || question.explanation,
            wasCorrect: auditResult.isCorrect,
            corrected: question.correctOption !== auditResult.correctedOption
        };
    } catch (err) {
        console.error(`Audit failed for ${question._id}:`, err.message);
        return { id: question._id, error: err.message };
    }
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        if (!GEMINI_API_KEY) {
            return Response.json({ error: 'Gemini API key not configured' }, { status: 500 });
        }

        const body = await request.json();
        // Default batch size: 10 parallel requests per Vercel invocation
        const batchSize = Math.min(body.batchSize || 10, 15);
        const testId = body.testId || null; // null = audit whole DB

        const client = await clientPromise;

        // Try both DBs: the AI questions route writes to 'testseries'; questions route reads from default.
        const dbs = [client.db(), client.db('testseries')];
        let collection = null;
        let unauditedQuestions = [];

        // Build the filter — scope to a specific test if testId is provided
        const baseFilter = testId
            ? { testId, audited: { $ne: true } }
            : { audited: { $ne: true } };

        for (const db of dbs) {
            const col = db.collection('questions');
            const cands = await col.find(baseFilter).limit(batchSize).toArray();

            if (cands.length > 0) {
                collection = col;
                unauditedQuestions = cands;
                break;
            }
        }

        if (!collection || unauditedQuestions.length === 0) {
            // Count total for stats even when finished
            const anyDb = client.db();
            const anyCol = anyDb.collection('questions');
            const totalFilter = testId ? { testId } : {};
            const total = await anyCol.countDocuments(totalFilter);
            return Response.json({ success: true, message: 'All questions have been audited!', processed: 0, finished: true, stats: { remaining: 0, total, progress: 100 } });
        }

        // ⚡ Process ALL questions in the batch IN PARALLEL (not sequentially)
        const auditResults = await Promise.all(unauditedQuestions.map(q => auditQuestion(q)));

        // Write all results back to DB in parallel
        const writeOps = auditResults.map(async (result) => {
            if (!result || result.skipped || result.error) {
                // Still mark as audited even on error to avoid infinite retry loops
                await collection.updateOne(
                    { _id: result.id },
                    { $set: { audited: true, auditedAt: new Date() } }
                );
                return result;
            }

            await collection.updateOne(
                { _id: result.id },
                {
                    $set: {
                        correctOption: result.correctedOption,
                        explanation: result.explanation,
                        audited: true,
                        auditedAt: new Date()
                    }
                }
            );
            return result;
        });

        const results = await Promise.all(writeOps);

        // Progress stats — scoped to testId if provided
        const statsFilter = testId ? { testId } : {};
        const remaining = await collection.countDocuments({ ...statsFilter, audited: { $ne: true } });
        const total = await collection.countDocuments(statsFilter);

        return Response.json({
            success: true,
            processed: results.filter(r => !r?.skipped).length,
            results,
            stats: {
                remaining,
                total,
                progress: Math.round(((total - remaining) / total) * 100)
            }
        });

    } catch (error) {
        console.error('Auto Audit API Error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
