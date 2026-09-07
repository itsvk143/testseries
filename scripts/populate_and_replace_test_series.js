/**
 * populate_and_replace_test_series.js
 * 
 * Objectives:
 * 1. Synchronize all NEET tests (MOCK, PYQ, SUBJECT, CHAPTER, SUBTOPIC) into MongoDB `testPapers`.
 * 2. Incorporate all 1,860 newly generated Top 100 AIR advanced NEET questions.
 * 3. Replace all Easy (and lower-ranked Medium) questions with the new advanced questions.
 * 4. Strictly enforce standard question limits:
 *    - Subtopic tests: 45 questions (or test.questionsCount, e.g. 25 if explicitly specified). Never exceed!
 *    - Chapter tests: 45 questions. Never exceed!
 *    - Subject tests: 45 questions. Never exceed!
 *    - Mock / PYQ tests: 180 questions (45 Physics, 45 Chemistry, 45 Botany, 45 Zoology). Never exceed!
 * 5. In the legacy `questions` collection, replace any question marked `difficulty: 'Easy'` with
 *    corresponding advanced questions.
 */

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const { neetTests, neetChapters } = require('../src/data/exams/neet.js');

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function main() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("❌ MONGODB_URI missing in .env.local");
        process.exit(1);
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('testseries');
    const qBank = db.collection('questionBank');
    const testPapers = db.collection('testPapers');
    const legacyQuestions = db.collection('questions');

    console.log("🚀 Connected to MongoDB.");

    // 1. Index all 1,860 new advanced questions by subject, chapter, and subTopic
    console.log("📥 Loading new advanced questions from questionBank...");
    const newGenQuestions = await qBank.find({
        source: 'NEET 10-Year Advanced Pattern Generator'
    }).toArray();
    console.log(`Found ${newGenQuestions.length} newly generated Top 100 AIR questions.`);

    // Build lookup maps for fast topic/chapter matching
    const newGenBySubTopic = new Map();
    const newGenByChapter = new Map();
    const newGenBySubject = {
        Physics: [],
        Chemistry: [],
        Botany: [],
        Zoology: []
    };

    for (const q of newGenQuestions) {
        if (newGenBySubject[q.subject]) {
            newGenBySubject[q.subject].push(q);
        }
        
        const subKey = `${q.subject}:::${(q.subTopic || '').toLowerCase().trim()}`;
        if (!newGenBySubTopic.has(subKey)) newGenBySubTopic.set(subKey, []);
        newGenBySubTopic.get(subKey).push(q);

        const chapKey = `${q.subject}:::${(q.chapter || '').toLowerCase().trim()}`;
        if (!newGenByChapter.has(chapKey)) newGenByChapter.set(chapKey, []);
        newGenByChapter.get(chapKey).push(q);
    }

    console.log(`Indexed new questions across 4 subjects.`);

    // 2. Identify and replace Easy questions in the legacy `questions` collection
    console.log("\n🧹 Scanning legacy `questions` collection for 'Easy' questions...");
    const easyLegacy = await legacyQuestions.find({ difficulty: 'Easy' }).toArray();
    console.log(`Found ${easyLegacy.length} questions marked 'Easy' in legacy collection.`);

    let replacedLegacyCount = 0;
    for (let i = 0; i < easyLegacy.length; i++) {
        const eq = easyLegacy[i];
        // Pick an advanced question from the same subject/chapter if possible
        const subj = eq.subject || 'Chemistry';
        const chap = (eq.chapter || '').toLowerCase().trim();
        const pool = newGenByChapter.get(`${subj}:::${chap}`) || newGenBySubject[subj] || newGenQuestions;
        const replacement = pool[i % pool.length];

        if (replacement) {
            await legacyQuestions.updateOne(
                { _id: eq._id },
                {
                    $set: {
                        text: replacement.question,
                        options: (replacement.options || []).map((opt, idx) => ({
                            id: String.fromCharCode(97 + idx),
                            text: typeof opt === 'string' ? opt : opt.text
                        })),
                        correctOption: String.fromCharCode(97 + (replacement.correctAnswer || 0)),
                        correctAnswer: replacement.correctAnswer || 0,
                        explanation: replacement.explanation || '',
                        difficulty: 'Difficult',
                        questionType: replacement.questionType || 'MCQ (Multiple Choice Question)',
                        type: replacement.type || 'MCQ',
                        source: 'NEET 10-Year Advanced Pattern Generator',
                        updatedAt: new Date()
                    }
                }
            );
            replacedLegacyCount++;
        }
    }
    console.log(`✅ Replaced ${replacedLegacyCount} Easy questions in legacy 'questions' collection with Difficult Top 100 questions.`);

    // 3. Process all NEET tests
    console.log(`\n📋 Processing NEET tests from test definition (${neetTests.length} tests)...`);

    let updatedTestCount = 0;
    let createdTestCount = 0;
    let totalQuestionsTrimmed = 0;

    for (const test of neetTests) {
        const testId = test.id;
        const testType = test.type || (testId.includes('MOCK') ? 'MOCK' : testId.includes('PYQ') ? 'PYQ' : testId.includes('SUBJECT') ? 'SUBJECT' : testId.includes('CHAPTER') ? 'CHAPTER' : testId.includes('SUBTOPIC') ? 'SUBTOPIC' : 'OTHER');
        
        // Standard question capacity
        let standardCount = test.questionsCount;
        if (!standardCount) {
            if (testType === 'MOCK' || testType === 'PYQ' || testType === 'LIVE' || testType === 'PART') standardCount = 180;
            else if (testType === 'SUBJECT' || testType === 'CHAPTER' || testType === 'SUBTOPIC') standardCount = 45;
            else standardCount = 45;
        }

        const existingTestPaper = await testPapers.findOne({ testId });

        // Resolve existing question documents to inspect difficulty
        let currentQIds = existingTestPaper?.questions || [];
        let currentQs = [];
        if (currentQIds.length > 0) {
            currentQs = await qBank.find({ _id: { $in: currentQIds } }).toArray();
        }

        // Filter out any question that is Easy
        let validQs = currentQs.filter(q => q.difficulty !== 'Easy');

        // Subject & Chapter determination
        const rawSubject = test.subject && test.subject !== 'Mixed' ? test.subject : null;
        const testChapter = test.chapter || '';
        const testTitle = test.title || '';

        let candidateAdvancedQs = [];

        if (testType === 'SUBTOPIC') {
            // Find advanced questions matching subtopic or title
            const cleanTitle = testTitle.toLowerCase().trim();
            for (const [key, qs] of newGenBySubTopic.entries()) {
                const [, sub] = key.split(':::');
                if (cleanTitle.includes(sub) || sub.includes(cleanTitle)) {
                    candidateAdvancedQs.push(...qs);
                }
            }
            // If none matched subtopic directly, fallback to chapter
            if (candidateAdvancedQs.length === 0 && testChapter) {
                const chapKey = `${rawSubject || 'Physics'}:::${testChapter.toLowerCase().trim()}`;
                candidateAdvancedQs = newGenByChapter.get(chapKey) || [];
            }
        } else if (testType === 'CHAPTER') {
            const chapName = (testChapter || testTitle).toLowerCase().trim();
            const chapKey = `${rawSubject || 'Chemistry'}:::${chapName}`;
            candidateAdvancedQs = newGenByChapter.get(chapKey) || [];
            if (candidateAdvancedQs.length === 0) {
                // Try fuzzy chapter matching
                for (const [k, qs] of newGenByChapter.entries()) {
                    if (k.toLowerCase().includes(chapName) || chapName.includes(k.split(':::')[1] || '')) {
                        candidateAdvancedQs.push(...qs);
                    }
                }
            }
        } else if (testType === 'SUBJECT') {
            if (rawSubject && newGenBySubject[rawSubject]) {
                candidateAdvancedQs = newGenBySubject[rawSubject];
            }
        } else if (testType === 'MOCK' || testType === 'PYQ' || testType === 'PART' || testType === 'LIVE') {
            // Full mock requires 45 Physics, 45 Chemistry, 45 Botany, 45 Zoology
            // We will balance candidate advanced questions across all 4 subjects
            candidateAdvancedQs = newGenQuestions;
        }

        // Deduplicate candidate advanced questions against each other
        const uniqueAdvMap = new Map();
        for (const q of candidateAdvancedQs) {
            uniqueAdvMap.set(q._id.toString(), q);
        }
        candidateAdvancedQs = Array.from(uniqueAdvMap.values());

        // Now, assemble the questions for this test:
        // Prioritize:
        // 1. Candidate Advanced Questions (Top 100 AIR, Difficult)
        // 2. Existing valid questions from the test that are Difficult
        // 3. Existing valid questions from the test that are Medium (only if needed to reach standard count)
        // 4. If still under standard count, fetch additional Difficult/Medium questions from qBank matching query

        let assembledQIds = [];

        if (testType === 'MOCK' || testType === 'PYQ' || testType === 'PART' || testType === 'LIVE') {
            // Must have 45 Physics, 45 Chemistry, 45 Botany, 45 Zoology = 180 questions
            const subjects = ['Physics', 'Chemistry', 'Botany', 'Zoology'];
            const targetPerSubj = Math.floor(standardCount / 4);

            for (const subj of subjects) {
                const advSubj = newGenBySubject[subj] || [];
                const existingSubj = validQs.filter(q => q.subject === subj);
                const existingDiff = existingSubj.filter(q => q.difficulty === 'Difficult');
                const existingMed = existingSubj.filter(q => q.difficulty === 'Medium');

                const subjQIds = new Set();
                
                // Add advanced questions first
                for (const q of advSubj) {
                    if (subjQIds.size >= targetPerSubj) break;
                    subjQIds.add(q._id.toString());
                }

                // Add existing Difficult
                for (const q of existingDiff) {
                    if (subjQIds.size >= targetPerSubj) break;
                    subjQIds.add(q._id.toString());
                }

                // Add existing Medium
                for (const q of existingMed) {
                    if (subjQIds.size >= targetPerSubj) break;
                    subjQIds.add(q._id.toString());
                }

                // If still not enough, fetch from qBank
                if (subjQIds.size < targetPerSubj) {
                    const extra = await qBank.find({
                        subject: subj,
                        _id: { $nin: Array.from(subjQIds).map(id => new ObjectId(id)) }
                    }).sort({ difficulty: -1 }).limit(targetPerSubj - subjQIds.size).toArray();
                    for (const q of extra) {
                        subjQIds.add(q._id.toString());
                    }
                }

                assembledQIds.push(...Array.from(subjQIds));
            }
        } else {
            // Single-subject / Chapter / Subtopic tests
            const qIdSet = new Set();

            // 1. Inject candidate advanced questions first!
            for (const q of candidateAdvancedQs) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 2. Add existing Difficult questions from this test
            const existingDiff = validQs.filter(q => q.difficulty === 'Difficult');
            for (const q of existingDiff) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 3. Add existing Medium questions from this test (replacing Easy)
            const existingMed = validQs.filter(q => q.difficulty === 'Medium');
            for (const q of existingMed) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 4. If still under standardCount, query matching questions from qBank
            if (qIdSet.size < standardCount) {
                let query = {};
                if (rawSubject) query.subject = rawSubject;
                if (testChapter) {
                    query.chapter = { $regex: new RegExp(escapeRegex(testChapter), 'i') };
                }
                const needed = standardCount - qIdSet.size;
                const extra = await qBank.find({
                    ...query,
                    _id: { $nin: Array.from(qIdSet).map(id => new ObjectId(id)) },
                    difficulty: { $ne: 'Easy' }
                }).sort({ difficulty: -1, _id: -1 }).limit(needed).toArray();

                for (const q of extra) {
                    if (qIdSet.size >= standardCount) break;
                    qIdSet.add(q._id.toString());
                }

                // If still needed (e.g. strict chapter query had too few), broaden to subject
                if (qIdSet.size < standardCount && rawSubject) {
                    const extraSubj = await qBank.find({
                        subject: rawSubject,
                        _id: { $nin: Array.from(qIdSet).map(id => new ObjectId(id)) },
                        difficulty: { $ne: 'Easy' }
                    }).sort({ difficulty: -1, _id: -1 }).limit(standardCount - qIdSet.size).toArray();

                    for (const q of extraSubj) {
                        if (qIdSet.size >= standardCount) break;
                        qIdSet.add(q._id.toString());
                    }
                }
            }

            assembledQIds = Array.from(qIdSet);
        }

        // STRICT ENFORCEMENT: If assembled questions exceed standard count, trim to standard count
        if (assembledQIds.length > standardCount) {
            totalQuestionsTrimmed += (assembledQIds.length - standardCount);
            assembledQIds = assembledQIds.slice(0, standardCount);
        }

        // Convert string IDs back to ObjectIds
        const finalQuestionObjectIds = assembledQIds.map(id => new ObjectId(id));

        const testTitleFull = test.title || testId.replace(/-/g, ' ');
        const testSubject = test.subject || (rawSubject || 'Mixed');
        const duration = test.duration || (standardCount === 180 ? 180 : 60);
        const totalMarks = test.totalMarks || (standardCount === 180 ? 720 : 180);

        if (existingTestPaper) {
            await testPapers.updateOne(
                { _id: existingTestPaper._id },
                {
                    $set: {
                        questions: finalQuestionObjectIds,
                        standardQuestionsCount: standardCount,
                        updatedAt: new Date()
                    }
                }
            );
            updatedTestCount++;
        } else {
            await testPapers.insertOne({
                testId,
                title: testTitleFull,
                exam: 'NEET',
                subject: testSubject,
                duration,
                totalMarks,
                standardQuestionsCount: standardCount,
                questions: finalQuestionObjectIds,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            createdTestCount++;
        }
    }

    console.log(`\n🎉 Test series population complete!`);
    console.log(`- Tests updated: ${updatedTestCount}`);
    console.log(`- Tests created: ${createdTestCount}`);
    console.log(`- Total NEET tests now in testPapers: ${updatedTestCount + createdTestCount}`);
    console.log(`- Excess questions trimmed to maintain strict standard limit: ${totalQuestionsTrimmed}`);

    await client.close();
}

main().catch(err => {
    console.error("FATAL Error in test series population:", err);
    process.exit(1);
});
