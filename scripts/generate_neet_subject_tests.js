const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Load Syllabus from admin config (STATIC_CHAPTER_MAP matches neetSyllabus exactly)
const adminFile = fs.readFileSync(path.join(__dirname, '../src/app/admin/page.js'), 'utf8');
const part = adminFile.slice(adminFile.indexOf('export const STATIC_CHAPTER_MAP'), adminFile.indexOf('export default function'));
const { STATIC_CHAPTER_MAP } = eval('(function() { ' + part.replace(/export const/g, 'var') + '; return { STATIC_CHAPTER_MAP }; })()');

// We need to split chapters into Class 11 and Class 12. 
// Assuming roughly first half is 11, second half is 12 (or we can just hardcode the split if needed).
// Actually, looking at chapters.js, Physics 11 has 14 chapters, Physics 12 has 14.
// Let's use a dynamic approximation: first half of array is 11, second half is 12.
const getClassChapters = (subjectChapters) => {
    const mid = Math.ceil(subjectChapters.length / 2);
    return {
        '11': subjectChapters.slice(0, mid),
        '12': subjectChapters.slice(mid)
    };
};

const chunkArray = (array, numChunks) => {
    const result = [];
    const baseSize = Math.floor(array.length / numChunks);
    let remainder = array.length % numChunks;
    let offset = 0;
    
    for (let i = 0; i < numChunks; i++) {
        const size = baseSize + (remainder > 0 ? 1 : 0);
        result.push(array.slice(offset, offset + size));
        offset += size;
        remainder--;
    }
    return result;
};

const generate24Tests = (subjectName, allSubjectChapters) => {
    const tests = [];
    const classes = getClassChapters(allSubjectChapters);
    const class11 = classes['11'];
    const class12 = classes['12'];

    // Tests 1-5: Class 11 Partial Revision
    const class11Chunks = chunkArray(class11, 5);
    class11Chunks.forEach((chunk, i) => {
        tests.push({
            id: `neet-SUBJECT-${subjectName}-11-REV-${i + 1}`,
            title: `${subjectName} Test ${i + 1}`,
            subject: subjectName,
            chapters: chunk,
        });
    });

    // Test 6: Class 11 Full Revision
    tests.push({
        id: `neet-SUBJECT-${subjectName}-11-REV-FULL`,
        title: `${subjectName} Test 6`,
        subject: subjectName,
        chapters: class11,
    });

    // Tests 7-12: Class 11 Full Mocks
    for (let i = 1; i <= 6; i++) {
        tests.push({
            id: `neet-SUBJECT-${subjectName}-11-MOCK-${i}`,
            title: `${subjectName} Test ${6 + i}`,
            subject: subjectName,
            chapters: class11,
        });
    }

    // Tests 13-17: Class 12 Partial Revision
    const class12Chunks = chunkArray(class12, 5);
    class12Chunks.forEach((chunk, i) => {
        tests.push({
            id: `neet-SUBJECT-${subjectName}-12-REV-${i + 1}`,
            title: `${subjectName} Test ${12 + i + 1}`,
            subject: subjectName,
            chapters: chunk,
        });
    });

    // Test 18: Class 12 Full Revision
    tests.push({
        id: `neet-SUBJECT-${subjectName}-12-REV-FULL`,
        title: `${subjectName} Test 18`,
        subject: subjectName,
        chapters: class12,
    });

    // Tests 19-24: Class 12 Full Mocks
    for (let i = 1; i <= 6; i++) {
        tests.push({
            id: `neet-SUBJECT-${subjectName}-12-MOCK-${i}`,
            title: `${subjectName} Test ${18 + i}`,
            subject: subjectName,
            chapters: class12,
        });
    }

    return tests;
};

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

        // Helper to fetch random questions for a list of chapters
        async function fetchQuestions(subject, chapters, type, difficulty, limit) {
            // Because some chapters might be stored with slightly different capitalization or spaces,
            // we use regex matching for safety, just like the frontend API route does.
            const chapterRegexes = chapters.map(c => new RegExp(c.replace(/[-_]/g, ' ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim(), 'i'));

            if (type === 'ASSERTION_REASON') {
                const finalQuery = {
                    $and: [
                        { subject },
                        { chapter: { $in: chapterRegexes } },
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
                        { chapter: { $in: chapterRegexes } },
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
            const allSubjectChapters = STATIC_CHAPTER_MAP[subject];
            const subjectTests = generate24Tests(subject, allSubjectChapters);

            for (const test of subjectTests) {
                console.log(`Processing ${test.id} (${test.title}). Chapters: ${test.chapters.length}`);

                // Section A: 39 MCQs
                const mcqEasy = await fetchQuestions(test.subject, test.chapters, 'MCQ', 'Easy', 10);
                const mcqMod = await fetchQuestions(test.subject, test.chapters, 'MCQ', 'Medium', 24);
                const mcqHard = await fetchQuestions(test.subject, test.chapters, 'MCQ', 'Hard', 5);

                // Section B: 6 A-R (at least 2 difficult)
                const arHard = await fetchQuestions(test.subject, test.chapters, 'ASSERTION_REASON', 'Hard', 2);
                const remainingArCount = 6 - arHard.length;
                
                const arMedium = await fetchQuestions(test.subject, test.chapters, 'ASSERTION_REASON', 'Medium', remainingArCount);
                const arEasy = await fetchQuestions(test.subject, test.chapters, 'ASSERTION_REASON', 'Easy', remainingArCount - arMedium.length);

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
                    console.log(`  [WARNING] Not enough questions for ${test.id}. Found ${ids.length}/45.`);
                }

                if (ids.length > 0) {
                    await testPapers.updateOne(
                        { testId: test.id },
                        {
                            $set: {
                                testId: test.id,
                                title: test.title,
                                exam: 'NEET',
                                subject: test.subject,
                                duration: 60,
                                totalMarks: 180,
                                questionsCount: 45,
                                difficulty: 'Mixed',
                                syllabus: { [test.subject]: test.chapters },
                                questions: ids,
                                updatedAt: new Date()
                            },
                            $setOnInsert: {
                                createdAt: new Date()
                            }
                        },
                        { upsert: true }
                    );
                    console.log(`  Saved test ${test.id} with ${ids.length} questions.`);
                    totalTestsCreated++;
                }
            }
        }
        
        console.log(`\nDone! Processed and created/updated ${totalTestsCreated} Subjectwise Tests.`);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
