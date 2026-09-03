const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { formatQuestionToCentralized } = require('../src/lib/questionFormatter.js');

// Dynamically load full syllabus (80 chapters, 552 subtopics) from centralized admin config
const adminFile = fs.readFileSync(path.join(__dirname, '../src/app/admin/page.js'), 'utf8');
const part = adminFile.slice(adminFile.indexOf('export const STATIC_CHAPTER_MAP'), adminFile.indexOf('export default function'));
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = eval('(function() { ' + part.replace(/export const/g, 'var') + '; return { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS }; })()');

const SYLLABUS = {};
for (const subject of Object.keys(STATIC_CHAPTER_MAP)) {
    SYLLABUS[subject] = {};
    for (const chapter of STATIC_CHAPTER_MAP[subject]) {
        SYLLABUS[subject][chapter] = CHAPTER_SUBTOPICS[chapter] || [];
    }
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

const schema = {
    type: 'ARRAY',
    items: {
        type: 'OBJECT',
        properties: {
            question: { type: 'STRING' },
            options: {
                type: 'ARRAY',
                items: { type: 'STRING' }
            },
            correctAnswer: { type: 'INTEGER' },
            explanation: { type: 'STRING' }
        },
        required: ['question', 'options', 'correctAnswer', 'explanation']
    }
};

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateQuestionsForTopic(subject, chapter, subtopic, count = 10, retries = 5) {
    const isMathOrPhysics = subject === 'Physics' || subject === 'Mathematics';
    const isBio = subject === 'Botany' || subject === 'Zoology';

    const prompt = `Generate exactly ${count} authentic, exam-level multiple choice questions for:
Subject: ${subject}
Chapter: ${chapter}
Subtopic: ${subtopic}

Requirements:
- Exactly 4 options for each question (strings).
- correctAnswer MUST be an integer: 0 for Option A, 1 for Option B, 2 for Option C, 3 for Option D.
- Clear, concise explanation (1-2 sentences).
${isMathOrPhysics ? '- Include realistic numerical values and formulas. Math expressions in LaTeX enclosed in $$...$$ like $$\\frac{v^2}{2g}$$, $$\\theta$$, $$\\sqrt{x}$$.' : ''}
${isBio ? '- High-order thinking application questions (HOTs), clinical/experimental observations.' : ''}
- All backslashes for LaTeX MUST be double-escaped (e.g. \\\\frac, \\\\times, \\\\sin).
- Return valid JSON matching schema.`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(GEMINI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: AbortSignal.timeout(60000),
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: 'application/json',
                        responseSchema: schema,
                        temperature: 0.7
                    }
                })
            });

            if (res.status === 429) {
                const waitTime = Math.pow(2, attempt) * 2000;
                console.warn(`⏳ Rate limited (429) on ${subtopic}. Waiting ${waitTime / 1000}s (Attempt ${attempt}/${retries})...`);
                await sleep(waitTime);
                continue;
            }

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`HTTP ${res.status}: ${errText}`);
            }

            const data = await res.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            const parsed = JSON.parse(text);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
            throw new Error('Empty array returned');
        } catch (err) {
            if (attempt === retries) throw err;
            const waitTime = attempt * 2000;
            console.warn(`⚠️ Error on ${subtopic}: ${err.message}. Retrying in ${waitTime / 1000}s...`);
            await sleep(waitTime);
        }
    }
    return [];
}

async function main() {
    if (!GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY is not defined in .env.local');
        process.exit(1);
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    const initialCount = await qBank.countDocuments();
    console.log(`📊 Initial questions in questionBank: ${initialCount}`);

    // Flatten all topics
    const allTasks = [];
    for (const [subject, chapters] of Object.entries(SYLLABUS)) {
        for (const [chapter, subtopics] of Object.entries(chapters)) {
            for (const subtopic of subtopics) {
                allTasks.push({ subject, chapter, subtopic });
            }
        }
    }

    console.log(`📋 Total topics to process: ${allTasks.length}`);

    let processedCount = 0;
    let addedCount = 0;
    const TARGET_PER_TOPIC = 10;
    const CONCURRENCY = 4; // 4 concurrent topics at a time

    for (let i = 0; i < allTasks.length; i += CONCURRENCY) {
        const batch = allTasks.slice(i, i + CONCURRENCY);

        await Promise.all(batch.map(async (task) => {
            const { subject, chapter, subtopic } = task;

            // Check how many questions exist for this exact subtopic
            const existingCount = await qBank.countDocuments({
                subject,
                chapter,
                $or: [{ subTopic: subtopic }, { subtopic: subtopic }]
            });

            if (existingCount >= TARGET_PER_TOPIC) {
                processedCount++;
                console.log(`[${processedCount}/${allTasks.length}] ⏭️  ${subject} > ${chapter} > ${subtopic} already has ${existingCount} questions.`);
                return;
            }

            const needed = TARGET_PER_TOPIC - existingCount;
            console.log(`[${processedCount + 1}/${allTasks.length}] 🤖 Generating ${needed} questions for ${subject} > ${chapter} > ${subtopic}...`);

            try {
                const generated = await generateQuestionsForTopic(subject, chapter, subtopic, needed);
                if (generated && generated.length > 0) {
                    const docsToInsert = generated.map(q => {
                        return formatQuestionToCentralized({
                            subject,
                            chapter,
                            subTopic: subtopic,
                            topic: chapter,
                            type: 'MCQ',
                            question: q.question,
                            options: q.options,
                            correctAnswer: q.correctAnswer,
                            explanation: q.explanation,
                            difficulty: 'Medium',
                            class: 'Class 12'
                        });
                    });

                    const insertRes = await qBank.insertMany(docsToInsert);
                    addedCount += insertRes.insertedCount;
                    processedCount++;
                    console.log(`[${processedCount}/${allTasks.length}] ✅ Inserted ${insertRes.insertedCount} questions for "${subtopic}" (Total added so far: ${addedCount})`);
                }
            } catch (err) {
                console.error(`❌ Failed generating questions for ${subject} > ${chapter} > ${subtopic}:`, err.message);
                processedCount++;
            }
        }));

        // Modest delay between batches to stay well clear of rate limits
        await sleep(1000);
    }

    const finalCount = await qBank.countDocuments();
    console.log('\n🎉 ====================================================');
    console.log(`🎉 COMPLETED! Total questions added in this run: ${addedCount}`);
    console.log(`📊 Final questionBank total documents: ${finalCount}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
