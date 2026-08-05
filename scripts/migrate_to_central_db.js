const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function run() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("❌ No MONGODB_URI found in .env.local");
        process.exit(1);
    }

    console.log("🔄 Connecting to MongoDB...");
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(); // uses default DB from URI (e.g. testseries)

        console.log(`✅ Connected to database: ${db.databaseName}`);

        // --- BACKUP OLD QUESTIONS ---
        const legacyCollectionName = 'questions';
        const backupCollectionName = 'questions_backup';
        
        const legacyQuestionsCount = await db.collection(legacyCollectionName).countDocuments();
        if (legacyQuestionsCount === 0) {
            console.log("ℹ️ No questions found in legacy 'questions' collection. Nothing to migrate.");
            return;
        }

        console.log(`📦 Found ${legacyQuestionsCount} questions in legacy 'questions' collection.`);
        console.log(`🔄 Backing up legacy questions to '${backupCollectionName}'...`);
        
        // Drop backup collection if it exists
        try {
            await db.collection(backupCollectionName).drop();
        } catch (e) {
            // Ignore if it doesn't exist
        }

        // Copy all documents to backup
        const allLegacyQuestions = await db.collection(legacyCollectionName).find({}).toArray();
        await db.collection(backupCollectionName).insertMany(
            allLegacyQuestions.map(q => {
                const { _id, ...rest } = q;
                return { _id, ...rest };
            })
        );
        console.log(`✅ Backup created successfully with ${allLegacyQuestions.length} documents.`);

        // --- PREPARE MIGRATION collections ---
        const qBankCol = db.collection('questionBank');
        const testPapersCol = db.collection('testPapers');

        // Clean up target collections if starting fresh (optional, let's keep it safe but clean)
        console.log("🧹 Initializing 'questionBank' and 'testPapers' collections...");
        try { await qBankCol.deleteMany({}); } catch(e) {}
        try { await testPapersCol.deleteMany({}); } catch(e) {}

        // Set up index on questionBank for unique question constraint or easy lookup
        await qBankCol.createIndex({ subject: 1, question: 1 });
        await testPapersCol.createIndex({ testId: 1 }, { unique: true });

        // --- PROCESS QUESTIONS AND DE-DUPLICATE ---
        console.log("🧠 Processing and de-duplicating questions...");
        
        const questionKeyToIdMap = new Map(); // key -> ObjectId
        const testIdToQuestionIdsMap = new Map(); // testId -> array of ObjectIds

        let duplicateCount = 0;
        let insertedCount = 0;

        for (const q of allLegacyQuestions) {
            const testId = q.testId || 'unknown-test';

            // Normalize text/question
            const questionText = (q.text || q.question || '').trim();
            const subject = (q.subject || 'Physics').trim();

            // Extract Options as strings
            let options = [];
            if (Array.isArray(q.options)) {
                options = q.options.map(opt => {
                    if (typeof opt === 'string') return opt.trim();
                    return (opt.text || opt.value || '').trim();
                });
            }

            // De-duplication key
            const optionsKey = options.join('||').toLowerCase();
            const uniqueKey = `${subject.toLowerCase()}::${questionText.toLowerCase()}::${optionsKey}`;

            let questionObjectId;

            if (questionKeyToIdMap.has(uniqueKey)) {
                questionObjectId = questionKeyToIdMap.get(uniqueKey);
                duplicateCount++;
            } else {
                questionObjectId = new ObjectId();
                questionKeyToIdMap.set(uniqueKey, questionObjectId);

                // Map correctAnswer
                let correctAnswer = 0;
                if (typeof q.correctAnswer === 'number') {
                    correctAnswer = q.correctAnswer;
                } else if (typeof q.correctOption === 'string') {
                    const mapping = { a: 0, b: 1, c: 2, d: 3 };
                    correctAnswer = mapping[q.correctOption.toLowerCase()] ?? 0;
                }

                // Determine Class Grade
                let classGrade = 'Class 12';
                const testIdLower = testId.toLowerCase();
                if (testIdLower.includes('board10') || testIdLower.includes('class10')) {
                    classGrade = 'Class 10';
                } else if (testIdLower.includes('class9')) {
                    classGrade = 'Class 9';
                } else if (testIdLower.includes('-11') || testIdLower.includes('11-')) {
                    classGrade = 'Class 11';
                } else if (q.classGrade) {
                    classGrade = q.classGrade.startsWith('Class') ? q.classGrade : `Class ${q.classGrade}`;
                }

                let qType = q.type || q.questionType || 'MCQ';
                if (qType.toLowerCase().includes('assertion') || qType.toLowerCase() === 'ar') {
                    qType = 'Assertion Reasoning';
                } else if (qType.toLowerCase().includes('subjective')) {
                    qType = 'SUBJECTIVE';
                } else {
                    qType = 'MCQ';
                }

                const questionDoc = {
                    _id: questionObjectId,
                    subject: subject,
                    class: classGrade,
                    chapter: q.chapter || '',
                    topic: q.topic || q.chapter || '',
                    subTopic: q.subTopic || '',
                    questionType: qType,
                    difficulty: q.difficulty || 'Medium',
                    question: questionText,
                    options: options,
                    correctAnswer: correctAnswer,
                    explanation: q.explanation || '',
                    tags: q.tags || [subject, q.chapter].filter(Boolean),
                    source: q.source || 'Question Bank',
                    status: q.status || 'Active',
                    createdAt: q.createdAt ? new Date(q.createdAt) : new Date(),
                    updatedAt: new Date()
                };

                await qBankCol.insertOne(questionDoc);
                insertedCount++;
            }

            // Map question to testId
            if (!testIdToQuestionIdsMap.has(testId)) {
                testIdToQuestionIdsMap.set(testId, []);
            }
            testIdToQuestionIdsMap.get(testId).push(questionObjectId);
        }

        console.log(`✅ Finished inserting questions.`);
        console.log(`📊 Question Migration Stats:`);
        console.log(`   - Unique questions inserted: ${insertedCount}`);
        console.log(`   - Duplicate questions re-referenced: ${duplicateCount}`);

        // --- CREATE TEST PAPERS ---
        console.log("📋 Creating Test Paper references...");

        // Load custom tests if file exists to fetch metadata
        let customTests = {};
        try {
            const customTestsPath = path.join(__dirname, '../src/data/tests/custom_tests.json');
            if (fs.existsSync(customTestsPath)) {
                customTests = JSON.parse(fs.readFileSync(customTestsPath, 'utf8'));
            }
        } catch (e) {
            console.warn("⚠️ Could not load custom_tests.json", e.message);
        }

        let testPapersCount = 0;

        for (const [testId, questionIds] of testIdToQuestionIdsMap.entries()) {
            // Find metadata from custom tests or parse from testId
            const customMeta = customTests[testId] || {};
            
            // Build metadata
            const title = customMeta.title || testId.replace(/-/g, ' ');
            const exam = customMeta.category?.toUpperCase() || (testId.startsWith('neet') ? 'NEET' : testId.startsWith('jee-mains') ? 'JEE Main' : testId.startsWith('jee-advance') ? 'JEE Advanced' : 'Other');
            const subject = customMeta.subject || (testId.includes('Physics') ? 'Physics' : testId.includes('Chemistry') ? 'Chemistry' : testId.includes('Mathematics') ? 'Mathematics' : 'Mixed');
            const duration = customMeta.duration || (testId.includes('SUBJECT') || testId.includes('CHAPTER') ? 60 : 180);
            const totalMarks = customMeta.totalMarks || (exam === 'NEET' ? (duration === 60 ? 180 : 720) : (duration === 60 ? 100 : 300));

            const testDoc = {
                testId: testId,
                title: title,
                exam: exam,
                subject: subject,
                duration: duration,
                totalMarks: totalMarks,
                questions: questionIds,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            await testPapersCol.insertOne(testDoc);
            testPapersCount++;
        }

        console.log(`✅ Test Paper references created: ${testPapersCount}`);
        console.log("🎉 Migration completed successfully!");

    } catch (error) {
        console.error("❌ Error running migration:", error);
    } finally {
        await client.close();
        console.log("🔌 Database connection closed.");
    }
}

run();
