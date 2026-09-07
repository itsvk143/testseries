/**
 * populate_and_replace_jee_test_series.js
 * 
 * Objectives:
 * 1. Synchronize all 552 JEE Main tests (MOCK, PYQ, SUBJECT, CHAPTER, SUBTOPIC, LIVE) into MongoDB `testPapers`.
 * 2. Incorporate all 2,050 newly generated Top 100 AIR advanced JEE Main questions.
 * 3. Replace all Easy (and lower-ranked Medium) questions with the new advanced questions.
 * 4. Strictly enforce standard question limits:
 *    - Subtopic tests: 25 questions. Never exceed!
 *    - Chapter tests: 25 questions. Never exceed!
 *    - Subject tests: 25 questions. Never exceed!
 *    - Mock / PYQ / Live tests: 75 questions (25 Physics, 25 Chemistry, 25 Mathematics). Never exceed!
 * 5. In the legacy `questions` collection, replace any question marked `difficulty: 'Easy'` for JEE tests.
 */

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const { jeeMainsTests } = require('../src/data/exams/jeeMains.js');

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

    // 1. Index all 2,050 new advanced questions by subject, chapter, and subTopic
    console.log("📥 Loading new advanced questions from questionBank...");
    const newGenQuestions = await qBank.find({
        source: 'JEE Main 10-Year Advanced Pattern Generator'
    }).toArray();
    console.log(`Found ${newGenQuestions.length} newly generated Top 100 AIR JEE Main questions.`);

    const newGenBySubTopic = new Map();
    const newGenByChapter = new Map();
    const newGenBySubject = {
        Mathematics: [],
        Physics: [],
        Chemistry: []
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

    console.log(`Indexed new questions across Mathematics, Physics, and Chemistry.`);

    // 2. Identify and replace Easy questions in the legacy `questions` collection for JEE tests
    console.log("\n🧹 Scanning legacy `questions` collection for 'Easy' questions in JEE...");
    const easyLegacy = await legacyQuestions.find({ 
        difficulty: 'Easy',
        testId: /^jee-mains/
    }).toArray();
    console.log(`Found ${easyLegacy.length} questions marked 'Easy' in legacy collection for JEE.`);

    let replacedLegacyCount = 0;
    for (let i = 0; i < easyLegacy.length; i++) {
        const eq = easyLegacy[i];
        const subj = eq.subject || 'Mathematics';
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
                        source: 'JEE Main 10-Year Advanced Pattern Generator',
                        updatedAt: new Date()
                    }
                }
            );
            replacedLegacyCount++;
        }
    }
    console.log(`✅ Replaced ${replacedLegacyCount} Easy questions in legacy 'questions' collection.`);

    // 3. Process all 552 JEE Main tests
    console.log(`\n📋 Processing JEE Main tests from test definition (${jeeMainsTests.length} tests)...`);

    let updatedTestCount = 0;
    let createdTestCount = 0;
    let totalQuestionsTrimmed = 0;

    for (const test of jeeMainsTests) {
        const testId = test.id;
        const testType = test.type || (testId.includes('MOCK') ? 'MOCK' : testId.includes('PYQ') ? 'PYQ' : testId.includes('SUBJECT') ? 'SUBJECT' : testId.includes('CHAPTER') ? 'CHAPTER' : testId.includes('SUBTOPIC') ? 'SUBTOPIC' : 'OTHER');
        
        // Standard question capacity for JEE Main
        let standardCount = test.questionsCount;
        if (!standardCount) {
            if (testType === 'MOCK' || testType === 'PYQ' || testType === 'LIVE' || testType === 'PART') standardCount = 75;
            else if (testType === 'SUBJECT' || testType === 'CHAPTER' || testType === 'SUBTOPIC') standardCount = 25;
            else standardCount = 25;
        }

        const existingTestPaper = await testPapers.findOne({ testId });

        let currentQIds = existingTestPaper?.questions || [];
        let currentQs = [];
        if (currentQIds.length > 0) {
            currentQs = await qBank.find({ _id: { $in: currentQIds } }).toArray();
        }

        // Filter out any Easy question
        let validQs = currentQs.filter(q => q.difficulty !== 'Easy');

        const rawSubject = test.subject && test.subject !== 'Mixed' ? test.subject : null;
        const testChapter = test.chapter || '';
        const testTitle = test.title || '';

        let candidateAdvancedQs = [];

        if (testType === 'SUBTOPIC') {
            const cleanTitle = testTitle.toLowerCase().trim();
            for (const [key, qs] of newGenBySubTopic.entries()) {
                const [, sub] = key.split(':::');
                if (cleanTitle.includes(sub) || sub.includes(cleanTitle)) {
                    candidateAdvancedQs.push(...qs);
                }
            }
            if (candidateAdvancedQs.length === 0 && testChapter) {
                const chapKey = `${rawSubject || 'Mathematics'}:::${testChapter.toLowerCase().trim()}`;
                candidateAdvancedQs = newGenByChapter.get(chapKey) || [];
            }
        } else if (testType === 'CHAPTER') {
            const chapName = (testChapter || testTitle).toLowerCase().trim();
            const chapKey = `${rawSubject || 'Mathematics'}:::${chapName}`;
            candidateAdvancedQs = newGenByChapter.get(chapKey) || [];
            if (candidateAdvancedQs.length === 0) {
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
            candidateAdvancedQs = newGenQuestions;
        }

        const uniqueAdvMap = new Map();
        for (const q of candidateAdvancedQs) {
            uniqueAdvMap.set(q._id.toString(), q);
        }
        candidateAdvancedQs = Array.from(uniqueAdvMap.values());

        let assembledQIds = [];

        if (testType === 'MOCK' || testType === 'PYQ' || testType === 'PART' || testType === 'LIVE') {
            // Must have 25 Physics, 25 Chemistry, 25 Mathematics = 75 questions
            const subjects = ['Physics', 'Chemistry', 'Mathematics'];
            const targetPerSubj = Math.floor(standardCount / 3); // 25 each

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

                // Fallback to qBank if needed
                if (subjQIds.size < targetPerSubj) {
                    const extra = await qBank.find({
                        subject: subj,
                        _id: { $nin: Array.from(subjQIds).map(id => new ObjectId(id)) },
                        difficulty: { $ne: 'Easy' }
                    }).sort({ difficulty: -1, _id: -1 }).limit(targetPerSubj - subjQIds.size).toArray();
                    for (const q of extra) {
                        subjQIds.add(q._id.toString());
                    }
                }

                assembledQIds.push(...Array.from(subjQIds));
            }
        } else {
            // Single-subject / Chapter / Subtopic tests (standardCount = 25)
            const qIdSet = new Set();

            // 1. Inject candidate advanced questions first
            for (const q of candidateAdvancedQs) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 2. Add existing Difficult questions
            const existingDiff = validQs.filter(q => q.difficulty === 'Difficult');
            for (const q of existingDiff) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 3. Add existing Medium questions
            const existingMed = validQs.filter(q => q.difficulty === 'Medium');
            for (const q of existingMed) {
                if (qIdSet.size >= standardCount) break;
                qIdSet.add(q._id.toString());
            }

            // 4. Fallback to qBank query if still under standardCount
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

        // STRICT ENFORCEMENT: Never exceed standard count (25 for topic/chapter/subject, 75 for mock)
        if (assembledQIds.length > standardCount) {
            totalQuestionsTrimmed += (assembledQIds.length - standardCount);
            assembledQIds = assembledQIds.slice(0, standardCount);
        }

        const finalQuestionObjectIds = assembledQIds.map(id => new ObjectId(id));
        const testTitleFull = test.title || testId.replace(/-/g, ' ');
        const testSubject = test.subject || (rawSubject || 'Mixed');
        const duration = test.duration || (standardCount === 75 ? 180 : 60);
        const totalMarks = test.totalMarks || (standardCount === 75 ? 300 : 100);

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
                exam: 'JEE Main',
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

    console.log(`\n🎉 JEE Main Test series population complete!`);
    console.log(`- Tests updated: ${updatedTestCount}`);
    console.log(`- Tests created: ${createdTestCount}`);
    console.log(`- Total JEE Main tests now in testPapers: ${updatedTestCount + createdTestCount}`);
    console.log(`- Excess questions trimmed to maintain strict standard limit: ${totalQuestionsTrimmed}`);

    await client.close();
}

main().catch(err => {
    console.error("FATAL Error in test series population:", err);
    process.exit(1);
});
