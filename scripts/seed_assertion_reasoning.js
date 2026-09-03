/**
 * seed_assertion_reasoning.js
 * Generates 25 high-quality Assertion-Reasoning questions per subtopic across all chapters
 * strictly aligned with NEET and JEE Mains 2026 syllabus.
 * 
 * Usage:
 *   node scripts/seed_assertion_reasoning.js [--key=YOUR_GEMINI_KEY] [--limit=NUM]
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Load 2026 syllabus from admin/page.js
const adminFile = fs.readFileSync(path.join(__dirname, '../src/app/admin/page.js'), 'utf8');
const part = adminFile.slice(adminFile.indexOf('export const STATIC_CHAPTER_MAP'), adminFile.indexOf('export default function'));
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = eval('(function() { ' + part.replace(/export const/g, 'var') + '; return { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS }; })()');

// Parse CLI flags
const args = process.argv.slice(2);
let customKey = null;
let limitTopics = null;
for (const arg of args) {
    if (arg.startsWith('--key=')) customKey = arg.replace('--key=', '').trim();
    if (arg.startsWith('--limit=')) limitTopics = parseInt(arg.replace('--limit=', '').trim(), 10);
}

const GEMINI_API_KEY = customKey || process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

const STANDARD_AR_OPTIONS = [
    "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
    "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
    "Assertion (A) is true but Reason (R) is false.",
    "Assertion (A) is false but Reason (R) is true."
];

const arSchema = {
    type: 'ARRAY',
    items: {
        type: 'OBJECT',
        properties: {
            assertion: { type: 'STRING', description: 'Crisp statement for Assertion (A)' },
            reason: { type: 'STRING', description: 'Crisp statement for Reason (R)' },
            correctAnswer: {
                type: 'INTEGER',
                description: '0 if Both true & R explains A; 1 if Both true & R does not explain A; 2 if A is true & R is false; 3 if A is false & R is true'
            },
            explanation: { type: 'STRING', description: 'Detailed step-by-step scientific justification' }
        },
        required: ['assertion', 'reason', 'correctAnswer', 'explanation']
    }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateARBatch(subject, chapter, subtopic, count = 13, retries = 3) {
    const isMathOrPhysics = subject === 'Physics' || subject === 'Mathematics';
    const isBio = subject === 'Botany' || subject === 'Zoology';

    const prompt = `Generate exactly ${count} distinct, authentic Assertion-Reasoning questions for NEET / JEE Mains 2026:
Subject: ${subject}
Chapter: ${chapter}
Subtopic: ${subtopic}
Class: 11 or 12 appropriate

Requirements:
- assertion: Clear Assertion statement labeled (A).
- reason: Clear Reason statement labeled (R).
- correctAnswer: Integer 0, 1, 2, or 3 adhering to standard NTA key:
    0: Both (A) and (R) are true and (R) is correct explanation of (A)
    1: Both (A) and (R) are true but (R) is NOT correct explanation of (A)
    2: (A) is true but (R) is false
    3: (A) is false but (R) is true
- Provide a balanced mix across answer choices 0, 1, 2, and 3.
${isMathOrPhysics ? '- Incorporate accurate physical principles and mathematical relations in LaTeX ($$...$$).' : ''}
${isBio ? '- Ground in authentic NCERT biology facts, physiological mechanisms, and genetics.' : ''}
- Return ONLY valid JSON array matching the schema.`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(GEMINI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: AbortSignal.timeout(45000),
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: 'application/json',
                        responseSchema: arSchema,
                        temperature: 0.7
                    }
                })
            });

            if (res.status === 429) {
                const text = await res.text();
                if (text.includes('spending cap')) {
                    throw new Error('SPEND_CAP_REACHED: ' + text);
                }
                const waitTime = Math.pow(2, attempt) * 2000;
                console.warn(`⏳ Rate limit on ${subtopic}. Waiting ${waitTime / 1000}s...`);
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
            if (err.message.includes('SPEND_CAP_REACHED')) throw err;
            if (attempt >= retries) throw err;
            await sleep(attempt * 1500);
        }
    }
    return [];
}

async function main() {
    if (!GEMINI_API_KEY) {
        console.error('❌ Please specify GEMINI_API_KEY in .env.local or pass --key=YOUR_KEY');
        process.exit(1);
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    const initialARCount = await qBank.countDocuments({ type: 'ASSERTION_REASON' });
    console.log(`📊 Initial Assertion-Reason questions in DB: ${initialARCount}`);

    // Flatten all topics
    let allTasks = [];
    for (const [subject, chapters] of Object.entries(STATIC_CHAPTER_MAP)) {
        for (const chapter of chapters) {
            const subtopics = CHAPTER_SUBTOPICS[chapter] || [];
            for (const subtopic of subtopics) {
                allTasks.push({ subject, chapter, subtopic });
            }
        }
    }

    if (limitTopics) {
        allTasks = allTasks.slice(0, limitTopics);
    }

    console.log(`📋 Total 2026 topics to process for Assertion-Reason: ${allTasks.length}`);

    const TARGET_PER_TOPIC = 25;
    const CONCURRENCY = 3;
    let taskIndex = 0;
    let processedCount = 0;
    let addedCount = 0;

    async function worker(workerId) {
        while (taskIndex < allTasks.length) {
            const currentIdx = taskIndex++;
            if (currentIdx >= allTasks.length) break;
            const { subject, chapter, subtopic } = allTasks[currentIdx];

            // Check existing A/R questions for this subtopic
            const existingCount = await qBank.countDocuments({
                subject,
                chapter,
                subTopic: subtopic,
                type: 'ASSERTION_REASON'
            });

            if (existingCount >= TARGET_PER_TOPIC) {
                processedCount++;
                console.log(`[${processedCount}/${allTasks.length}] ⏭️  ${subject} > ${chapter} > ${subtopic} already has ${existingCount} A/R questions.`);
                continue;
            }

            const needed = TARGET_PER_TOPIC - existingCount;
            console.log(`[${processedCount + 1}/${allTasks.length}] (W${workerId}) 🤖 Generating ${needed} A/R questions for ${subject} > ${chapter} > ${subtopic}...`);

            // Generate in chunks of up to 13 to avoid token truncation
            let generatedTotal = [];
            try {
                const firstBatchSize = Math.min(13, needed);
                const batch1 = await generateARBatch(subject, chapter, subtopic, firstBatchSize);
                generatedTotal.push(...batch1);

                if (needed > 13 && batch1.length > 0) {
                    const secondBatchSize = needed - batch1.length;
                    const batch2 = await generateARBatch(subject, chapter, subtopic, secondBatchSize);
                    generatedTotal.push(...batch2);
                }

                if (generatedTotal.length > 0) {
                    const docsToInsert = generatedTotal.map(q => {
                        const questionText = `Assertion (A): ${q.assertion}\nReason (R): ${q.reason}`;
                        const ansIdx = (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3) ? q.correctAnswer : 0;
                        return {
                            type: 'ASSERTION_REASON',
                            question: questionText,
                            options: [...STANDARD_AR_OPTIONS],
                            correctAnswer: ansIdx,
                            explanation: q.explanation || `Assertion (A) and Reason (R) analysis: Option ${String.fromCharCode(65 + ansIdx)} is correct.`,
                            subject,
                            chapter,
                            topic: chapter,
                            subTopic: subtopic,
                            difficulty: 'Medium',
                            class: 'Class 12',
                            createdAt: new Date(),
                            updatedAt: new Date()
                        };
                    });

                    const insertRes = await qBank.insertMany(docsToInsert);
                    addedCount += insertRes.insertedCount;
                    processedCount++;
                    console.log(`[${processedCount}/${allTasks.length}] (W${workerId}) ✅ Inserted ${insertRes.insertedCount} A/R questions for "${subtopic}" (Total added: ${addedCount})`);
                }
            } catch (err) {
                if (err.message.includes('SPEND_CAP_REACHED')) {
                    console.error(`\n🚨 CRITICAL: Google AI Studio monthly spend cap reached!`);
                    console.error(`Please visit https://ai.studio/spend to raise spend cap or pass --key=YOUR_NEW_KEY`);
                    process.exit(2);
                }
                console.error(`(W${workerId}) ❌ Error on ${subject} > ${chapter} > ${subtopic}:`, err.message);
                processedCount++;
            }

            await sleep(500);
        }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));

    const finalAR = await qBank.countDocuments({ type: 'ASSERTION_REASON' });
    console.log('\n🎉 ====================================================');
    console.log(`🎉 COMPLETED! Total A/R questions added in this run: ${addedCount}`);
    console.log(`📊 Final questionBank A/R total: ${finalAR}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
