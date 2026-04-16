import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

// Extend Vercel serverless function timeout (requires Pro plan/opt-in)
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
- STRICT LaTeX RULES (must follow exactly or the display will break):
  * Wrap ALL math in $$...$$ delimiters. Example: $$\\frac{hG}{c^3}$$
  * ALWAYS use curly braces for LaTeX arguments, NEVER parentheses. CORRECT: $$\\sqrt{\\frac{hG}{c^3}}$$ WRONG: $$\\sqrt(\\frac{hG}{c^3})$$
  * JSON escape: double-escape ALL backslashes: use \\\\frac not \\frac, \\\\sqrt not \\sqrt, \\\\times not \\times
  * Every math expression must be wrapped in $$, including units like $$m/s^2$$
- HIGH ENTROPY SEED [${Math.random().toString(36).substr(2, 9)}]: Avoid repetitive textbook examples. Dig into abstract sub-concepts across ${topicLabel}.
- CRITICAL: Ensure the JSON array is completely closed.

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
    "explanation": "Brief explanation.",
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

        const MAX_RETRIES = 4;
        let attempt = 0;
        let questions = null;
        let lastRawText = '';

        while (attempt < MAX_RETRIES && !questions) {
            attempt++;
            console.log(`[AI Gen] Attempt ${attempt} / ${MAX_RETRIES} for ${count} questions`);
            
            // Build prompt inside loop to guarantee the Math.random() high-entropy seed regenerates
            const prompt = buildPrompt({ exam, subject, chapter, subtopic, classGrade, count, testType, difficulty });

            // Call Gemini API
            const geminiRes = await fetch(GEMINI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 1.0,  // Slightly raised temperature to force variance on retries
                        maxOutputTokens: 8192,
                        responseMimeType: "application/json"
                    }
                })
            });

            if (!geminiRes.ok) {
                const errText = await geminiRes.text();
                console.error(`Gemini API error on attempt ${attempt}:`, errText);
                lastRawText = errText;
                continue; // Trigger next retry
            }

            const geminiData = await geminiRes.json();
            const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
            lastRawText = rawText;

            try {
                const cleaned = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                questions = JSON.parse(cleaned);
                if (!Array.isArray(questions)) throw new Error('Not an array');
            } catch (parseErr) {
                console.error(`Failed to parse Gemini response on attempt ${attempt}`);
                
                // Try aggressive salvaging for truncated JSON arrays
                try {
                    let salvaged = rawText.substring(0, rawText.lastIndexOf('}') + 1) + ']';
                    questions = JSON.parse(salvaged);
                    if (!Array.isArray(questions)) throw new Error('Still invalid');
                } catch (fallbackErr) {
                    questions = null; // Re-nullify to force loop loop
                }
            }
            
            // If parsed correctly but zero length, retry
            if (questions && questions.length === 0) {
                 questions = null;
            }
        }

        if (!questions) {
            return Response.json({ 
                error: `Failed to parse AI response completely after ${MAX_RETRIES} consecutive automated retries. The AI model is struggling to format ${count} questions perfectly. Try requesting 10-15 questions at a time instead.`, 
                raw: lastRawText 
            }, { status: 422 });
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
