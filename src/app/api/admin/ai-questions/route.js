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
        : 'Hard difficulty (JEE/NEET advanced level)';

    const subjectLower = (subject || '').toLowerCase();

    // ── Detect subject category for specialized rules ─────────────────────
    const isNumerical = subjectLower.includes('physics') ||
        subjectLower.includes('mathematics') || subjectLower.includes('maths') ||
        subjectLower.includes('math') || subjectLower.includes('physical chemistry') ||
        subjectLower.includes('physical chem');

    const isBiology = subjectLower.includes('botany') || subjectLower.includes('zoology') ||
        subjectLower.includes('biology') || subjectLower.includes('bio');

    const isChemistry = subjectLower.includes('chemistry') && !isNumerical;

    // ── Subject-specific instruction block ───────────────────────────────
    let subjectRules = '';

    if (isNumerical) {
        subjectRules = `
SUBJECT-SPECIFIC RULES (${subject} — NUMERICAL & CONCEPTUAL):
- MANDATORY: At least 90% of questions MUST be numerical/calculation-based. Only 1 out of every 10 questions may be purely theoretical.
- Numerical questions MUST require multi-step reasoning and calculation — NOT simple formula substitution.
- Questions must test DEEP CONCEPTUAL UNDERSTANDING. The student must understand WHY the formula works, not just plug in values.
- Avoid trivial "find the value of X" questions. Instead: "Given scenario A and B, what happens to X when Y changes and why?"
- Use real-world physical situations, non-standard setups, or combined-concept problems.
- For Physics: prefer questions combining 2+ chapters (e.g. motion + thermodynamics, optics + wave).
- For Maths: include problems requiring proof-insight, geometry-algebra mix, or tricky substitutions.
- For Physical Chemistry: prefer electro-chemistry, thermodynamics, and kinetics numericals.
- Options must be numerical values with units (if applicable) using $$ LaTeX $$.
- Difficulty: Aim for JEE Advanced / NEET rank-1 level.`;

    } else if (isBiology) {
        subjectRules = `
SUBJECT-SPECIFIC RULES (${subject} — HIGH ORDER THINKING):
- MANDATORY: ALL questions must be High Order Thinking (HOT) — NO rote memorization or definition-recall questions.
- Questions must require APPLICATION, ANALYSIS, or EVALUATION (Bloom's Taxonomy levels 4-6).
- Good HOT question types:
  * "What would happen if [biological condition] changed?" (application)
  * "Why does organism X use mechanism Y instead of Z?" (analysis)
  * "A scientist observes [unusual finding] — what does this suggest?" (inference)
  * "Which structure/process is LEAST affected if [gene/enzyme] is absent?" (evaluation)
  * Case-based: provide a clinical/ecological scenario, ask for the conclusion.
- AVOID: "Which of the following is the function of X?", "Identify the correct statement about Y."
- Include questions on exceptions, evolutionary trade-offs, experimental design, or cross-chapter links.
- Difficulty: Aim for NEET AIQ-50 / Olympiad level.`;

    } else if (isChemistry) {
        subjectRules = `
SUBJECT-SPECIFIC RULES (${subject} — CONCEPTUAL CHEMISTRY):
- Mix: 60% reaction-mechanism/application questions, 40% numerical (stoichiometry, equilibrium, kinetics).
- Reaction questions must test WHY products form — not just WHAT the products are.
- Include questions about exceptions to rules, unusual reagents, or competing reaction pathways.
- Avoid simple IUPAC naming or basic periodic table fact questions.
- Difficulty: NEET/JEE Main advanced level.`;

    } else {
        subjectRules = `
SUBJECT-SPECIFIC RULES:
- Ask questions that require reasoning and multi-step thinking, not rote recall.
- Prefer application-level and analysis-level questions (Bloom's Taxonomy 4-5).`;
    }

    return `You are an expert ${examLabel} educator and question designer. Generate exactly ${count} high-quality MCQs for ${examLabel} ${testType || 'test'}.

Topic: ${topicLabel}
${classLabel ? `Class: ${classLabel}` : ''}
${subject ? `Subject: ${subject}` : ''}
${chapter ? `Chapter: ${chapter}` : ''}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficultyLabel}
${subjectRules}

GENERAL REQUIREMENTS:
- Each question must have exactly 4 options (a, b, c, d).
- Include a concise but informative explanation (2 sentences MAX) showing the key reasoning step.
- Questions must be accurate, unambiguous, and unique — no repeated concepts across the batch.
- STRICT LaTeX RULES (must follow exactly or the display will break):
  * Wrap ALL math in $$...$$ delimiters. Example: $$\\\\frac{hG}{c^3}$$
  * ALWAYS use curly braces for LaTeX arguments, NEVER parentheses. CORRECT: $$\\\\sqrt{\\\\frac{hG}{c^3}}$$ WRONG: $$\\\\sqrt(\\\\frac{hG}{c^3})$$
  * JSON escape: double-escape ALL backslashes: use \\\\\\\\frac not \\\\frac, \\\\\\\\sqrt not \\\\sqrt, \\\\\\\\times not \\\\times
  * Every math expression, value, or unit must be in $$: write $$9.8\\ m/s^2$$ not "9.8 m/s²"
- HIGH ENTROPY SEED [${Math.random().toString(36).substr(2, 9)}]: Every question must be on a DIFFERENT sub-concept. No two questions should test the same idea.
- CRITICAL: Ensure JSON array is completely and perfectly closed.

Respond ONLY with a valid JSON array. No extra text, no markdown, no code fences.
Format:
[
  {
    "subject": "${subject || examLabel}",
    "text": "Question text with $$math$$ where needed?",
    "options": [
      {"id": "a", "text": "$$value_a$$"},
      {"id": "b", "text": "$$value_b$$"},
      {"id": "c", "text": "$$value_c$$"},
      {"id": "d", "text": "$$value_d$$"}
    ],
    "correctOption": "b",
    "explanation": "Key reasoning in 1-2 sentences.",
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
