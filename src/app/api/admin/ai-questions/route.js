import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

// Edge runtime allows up to 30s timeout on Vercel Free tier, much better for AI requests
export const runtime = 'edge';
export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

function buildPrompt({ exam, subject, chapter, subtopic, classGrade, count, testType, difficulty }) {
    const examLabel = exam?.toUpperCase() || 'NEET';
    const classLabel = classGrade ? `Class ${classGrade}` : '';
    const topicLabel = subtopic || chapter || subject || `${examLabel} syllabus`;
    const difficultyLabel = difficulty && difficulty !== 'Mixed'
        ? `${difficulty} difficulty`
        : 'a mix of Easy, Medium, and Hard difficulties';

    return `You are an expert ${examLabel} educator. Generate exactly ${count} high-quality multiple choice questions (MCQs) for ${examLabel} ${testType || 'test'}.

Topic: ${topicLabel}
${classLabel ? `Class: ${classLabel}` : ''}
${subject ? `Subject: ${subject}` : ''}
${chapter ? `Chapter: ${chapter}` : ''}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficultyLabel}

Requirements:
- Questions must be ${examLabel}-standard (competitive exam level) with ${difficultyLabel}
- Each question must have exactly 4 options (a, b, c, d). Keep options under 5 words if possible.
- Include a very concise explanation (MAX 1 SHORT SENTENCE) for the correct answer to save space.
- Questions must be accurate, factual, and unambiguous.
- Use LaTeX notation for formulas (wrap in $$...$$).
- CRITICAL: You must ensure the JSON array is completely closed. If you cannot fit ${count} questions, output as many as you can and perfectly close the JSON array.

Respond ONLY with a valid JSON array. No extra text, no markdown, no code fences.
Format:
[
  {
    "subject": "${subject || examLabel}",
    "text": "Question text here?",
    "options": [
      {"id": "a", "text": "Option A"},
      {"id": "b", "text": "Option B"},
      {"id": "c", "text": "Option C"},
      {"id": "d", "text": "Option D"}
    ],
    "correctOption": "b",
    "explanation": "Detailed explanation here.",
    "chapter": "${chapter || ''}",
    "subtopic": "${subtopic || ''}"
  }
]`;
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { testId, exam, subject, chapter, subtopic, classGrade, testType, difficulty, saveToDb = false } = body;
        // Cap count to avoid Vercel function timeout on large prompts (max 50 for full subject tests)
        const count = Math.min(Number(body.count) || 10, 50);

        if (!exam) {
            return Response.json({ error: 'exam is required' }, { status: 400 });
        }

        if (!GEMINI_API_KEY) {
            return Response.json({ error: 'Gemini API key not configured' }, { status: 500 });
        }

        const prompt = buildPrompt({ exam, subject, chapter, subtopic, classGrade, count, testType, difficulty });

        // Call Gemini API
        const geminiRes = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 8192,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!geminiRes.ok) {
            const errText = await geminiRes.text();
            console.error('Gemini API error:', errText);
            let errDetails = errText;
            try { errDetails = JSON.parse(errText)?.error?.message || errText; } catch {}
            return Response.json({ error: `Gemini API call failed: ${errDetails}` }, { status: 502 });
        }

        const geminiData = await geminiRes.json();
        const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

        let questions;
        try {
            const cleaned = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            questions = JSON.parse(cleaned);
            if (!Array.isArray(questions)) throw new Error('Not an array');
        } catch (parseErr) {
            console.error('Failed to parse Gemini response:', rawText);
            
            // Try to salvage truncated JSON array
            try {
                let salvaged = rawText.substring(0, rawText.lastIndexOf('}') + 1) + ']';
                questions = JSON.parse(salvaged);
                if (!Array.isArray(questions)) throw new Error('Still invalid');
            } catch (fallbackErr) {
                return Response.json({ error: 'Failed to parse AI response. Try requesting 20 questions at a time instead of 50.', raw: rawText }, { status: 422 });
            }
        }

        // If saveToDb is true and testId is provided, save questions to MongoDB
        if (saveToDb && testId) {
            const client = await clientPromise;
            const db = client.db('testseries');
            const collection = db.collection('questions');

            // Get current max ID for this test
            const existing = await collection.find({ testId }).sort({ id: -1 }).limit(1).toArray();
            let maxId = existing.length > 0 ? (existing[0].id || 0) : 0;

            const toInsert = questions.map(q => {
                maxId++;
                return { ...q, id: maxId, testId };
            });

            await collection.insertMany(toInsert);
            return Response.json({ success: true, count: toInsert.length, questions: toInsert });
        }

        // Otherwise just return the generated questions for preview
        return Response.json({ success: true, count: questions.length, questions });

    } catch (error) {
        console.error('AI Questions API error:', error);
        return Response.json({ error: 'Internal Server Error: ' + error.message }, { status: 500 });
    }
}
