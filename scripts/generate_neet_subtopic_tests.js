const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Load Subtopics from admin config
const adminFile = fs.readFileSync(path.join(__dirname, '../src/app/admin/page.js'), 'utf8');
const part = adminFile.slice(adminFile.indexOf('export const STATIC_CHAPTER_MAP'), adminFile.indexOf('export default function'));
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = eval('(function() { ' + part.replace(/export const/g, 'var') + '; return { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS }; })()');

async function main() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MONGODB_URI is missing in .env.local");
        process.exit(1);
    }

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db();
        console.log('Connected to MongoDB.');

        const qBank = db.collection('questionBank');
        const testPapers = db.collection('testPapers');

        // Helper to fetch random questions
        async function fetchQuestions(subject, subtopic, type, difficulty, limit) {
            const query = {
                subject,
                $or: [{ subTopic: subtopic }, { subtopic: subtopic }],
                difficulty
            };

            if (type === 'ASSERTION_REASON') {
                query.$or = [
                    { questionType: { $regex: /assertion/i } },
                    { type: { $regex: /assertion/i } }
                ];
                // we have an $or above, so we need to combine them with $and
                const finalQuery = {
                    $and: [
                        { subject },
                        { $or: [{ subTopic: subtopic }, { subtopic: subtopic }] },
                        { difficulty },
                        { $or: [{ questionType: { $regex: /assertion/i } }, { type: { $regex: /assertion/i } }] }
                    ]
                };
                return await qBank.aggregate([
                    { $match: finalQuery },
                    { $sample: { size: limit } }
                ]).toArray();
            } else {
                const finalQuery = {
                    $and: [
                        { subject },
                        { $or: [{ subTopic: subtopic }, { subtopic: subtopic }] },
                        { difficulty },
                        { questionType: { $not: { $regex: /assertion/i } }, type: { $not: { $regex: /assertion/i } } }
                    ]
                };
                return await qBank.aggregate([
                    { $match: finalQuery },
                    { $sample: { size: limit } }
                ]).toArray();
            }
        }

        let totalTestsCreated = 0;

        for (const subject of Object.keys(STATIC_CHAPTER_MAP)) {
            for (const chapter of STATIC_CHAPTER_MAP[subject]) {
                const subtopics = CHAPTER_SUBTOPICS[chapter] || [];
                
                for (const subtopic of subtopics) {
                    console.log(`Processing ${subject} -> ${chapter} -> ${subtopic}...`);

                    // Section A: 39 MCQs
                    const mcqEasy = await fetchQuestions(subject, subtopic, 'MCQ', 'Easy', 10);
                    const mcqMod = await fetchQuestions(subject, subtopic, 'MCQ', 'Medium', 24);
                    const mcqHard = await fetchQuestions(subject, subtopic, 'MCQ', 'Hard', 5);

                    // Section B: 6 A-R (at least 2 difficult)
                    const arHard = await fetchQuestions(subject, subtopic, 'ASSERTION_REASON', 'Hard', 2);
                    const remainingArCount = 6 - arHard.length;
                    
                    // We can take easy or medium for the rest
                    const arMedium = await fetchQuestions(subject, subtopic, 'ASSERTION_REASON', 'Medium', remainingArCount);
                    const arEasy = await fetchQuestions(subject, subtopic, 'ASSERTION_REASON', 'Easy', remainingArCount - arMedium.length);

                    const allQuestions = [
                        ...mcqEasy,
                        ...mcqMod,
                        ...mcqHard,
                        ...arHard,
                        ...arMedium,
                        ...arEasy
                    ];

                    const ids = allQuestions.map(q => q._id);

                    console.log(`  Found ${ids.length} questions matching criteria (Target: 45).`);
                    if (ids.length < 45) {
                        console.log(`  [WARNING] Not enough questions for ${subtopic}. Found ${ids.length}/45.`);
                    }

                    if (ids.length > 0) {
                        const testId = `neet-SUBTOPIC-${subtopic.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;
                        
                        await testPapers.updateOne(
                            { testId },
                            {
                                $set: {
                                    testId,
                                    title: subtopic,
                                    exam: 'NEET',
                                    subject: subject,
                                    duration: 60,
                                    totalMarks: 180,
                                    questions: ids,
                                    updatedAt: new Date()
                                },
                                $setOnInsert: {
                                    createdAt: new Date()
                                }
                            },
                            { upsert: true }
                        );
                        console.log(`  Saved test ${testId} with ${ids.length} questions.`);
                        totalTestsCreated++;
                    }
                }
            }
        }
        
        console.log(`\nDone! Processed and created/updated ${totalTestsCreated} Subtopic Tests.`);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
