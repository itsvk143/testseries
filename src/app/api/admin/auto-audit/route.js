import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export const maxDuration = 60; // 60 seconds

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

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
        const { batchSize = 5 } = body;

        const client = await clientPromise;
        const db = client.db('testseries');
        const collection = db.collection('questions');

        // Fetch questions that haven't been audited yet
        const unauditedQuestions = await collection.find({ audited: { $ne: true } }).limit(batchSize).toArray();

        if (unauditedQuestions.length === 0) {
            return Response.json({ success: true, message: 'No more questions to audit.', processed: 0, finished: true });
        }

        const results = [];

        for (const question of unauditedQuestions) {
            const auditPrompt = `
You are a subject matter expert for competitive exams. I will provide a multiple choice question.
Please verify the correct answer and the explanation.

Question: ${question.text}
Options:
${question.options.map(o => `${o.id}: ${o.text}`).join('\n')}
Declared Correct Option: ${question.correctOption}
Declared Explanation: ${question.explanation || 'None'}

Your Task:
1. Evaluate if the "Declared Correct Option" matches the correct choice among the options provided.
2. If it is wrong, identify the actual "correctedOption" (must be a, b, c, or d).
3. If the "Declared Explanation" is missing (None), very short, or incorrect, generate a clear, high-quality Markdown explanation.
4. If the explanation is already correct and detailed, keep it.

Respond ONLY with a valid JSON object:
{
  "isCorrect": boolean,
  "correctedOption": "a" | "b" | "c" | "d",
  "explanation": "high quality explanation here"
}
`;

            try {
                const geminiRes = await fetch(GEMINI_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: auditPrompt }] }],
                        generationConfig: {
                            temperature: 0.1, // low temperature for precision
                            responseMimeType: "application/json"
                        }
                    })
                });

                if (!geminiRes.ok) throw new Error(`Gemini Error: ${geminiRes.status}`);

                const geminiData = await geminiRes.json();
                const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                const auditResult = JSON.parse(rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim());

                // Update the document in MongoDB
                await collection.updateOne(
                    { _id: question._id },
                    {
                        $set: {
                            correctOption: auditResult.correctedOption,
                            explanation: auditResult.explanation,
                            audited: true,
                            auditedAt: new Date()
                        }
                    }
                );

                results.push({
                    id: question._id,
                    text: question.text.substring(0, 50) + '...',
                    wasCorrect: auditResult.isCorrect,
                    corrected: question.correctOption !== auditResult.correctedOption
                });

            } catch (err) {
                console.error(`Error auditing question ${question._id}:`, err);
                results.push({ id: question._id, error: err.message });
            }
        }

        // Get total progress
        const remaining = await collection.countDocuments({ audited: { $ne: true } });
        const total = await collection.countDocuments();

        return Response.json({
            success: true,
            processed: results.length,
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
