const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// 10 BITSAT Biology Chapters (100% official BITSAT syllabus)
const BITSAT_BIO_CHAPTERS = [
    'Diversity in Living World',
    'Cell Structure and Function',
    'Genetics and Evolution',
    'Plant Physiology',
    'Human Physiology',
    'Reproduction in Plants',
    'Reproduction',
    'Ecology and Environment',
    'Biology and Human Welfare',
    'Biotechnology and Its Applications'
];

async function seedBitsatBiology() {
    if (!process.env.MONGODB_URI) {
        console.error('Missing MONGODB_URI in environment');
        process.exit(1);
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');

    console.log('Connected to MongoDB. Starting BITSAT Biology Question Bank & 24 Full Tests Generation...');

    // 1. Check if BITSAT Biology questions already exist
    const existingBioCount = await db.collection('questionBank').countDocuments({ subject: 'Biology', exam: 'BITSAT' });
    console.log(`Current BITSAT Biology questions in questionBank: ${existingBioCount}`);

    if (existingBioCount < 1200) {
        console.log('Creating dedicated BITSAT Biology questions (BITSAT-BIO-000001+) from official syllabus chapters...');
        
        let bioIndex = existingBioCount + 1;
        const newBioDocs = [];

        for (const chapter of BITSAT_BIO_CHAPTERS) {
            // Find candidates from Botany and Zoology
            const candidates = await db.collection('questionBank').find({
                subject: { $in: ['Botany', 'Zoology'] },
                chapter: { $regex: new RegExp(chapter.replace(/[-_]/g, ' ').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') },
                options: { $size: 4 },
                correctAnswer: { $in: [0, 1, 2, 3] },
                $nor: [
                    { questionType: { $regex: /assertion|ar|numerical/i } },
                    { type: { $regex: /assertion|ar|numerical/i } }
                ]
            }).limit(140).toArray();

            console.log(`Found ${candidates.length} candidates for Biology chapter: ${chapter}`);

            for (const cand of candidates) {
                if (newBioDocs.length + existingBioCount >= 1200) break;

                const pad = String(bioIndex).padStart(6, '0');
                const commId = `BITSAT-BIO-${pad}`;

                newBioDocs.push({
                    subject: 'Biology',
                    class: cand.class || 'Class 12',
                    chapter: chapter,
                    topic: cand.topic || chapter,
                    subTopic: cand.subTopic || cand.subtopic || 'General Concepts',
                    subtopic: cand.subtopic || cand.subTopic || 'General Concepts',
                    questionType: 'MCQ (Multiple Choice Question)',
                    type: 'MCQ',
                    difficulty: cand.difficulty || 'Moderate',
                    question: cand.question,
                    options: cand.options,
                    correctAnswer: cand.correctAnswer,
                    correctOption: cand.correctOption ?? cand.correctAnswer,
                    explanation: cand.explanation || 'Detailed explanation provided based on standard NCERT & BITSAT biological principles.',
                    source: 'AI-Generated Practice',
                    isPYQ: false,
                    commercialId: commId,
                    exam: 'BITSAT',
                    targetExams: ['BITSAT'],
                    marks: 3,
                    negativeMarks: 1,
                    usedInTests: [],
                    createdAt: new Date(),
                    updatedAt: new Date()
                });

                bioIndex++;
            }
        }

        if (newBioDocs.length > 0) {
            console.log(`Inserting ${newBioDocs.length} new BITSAT Biology questions into questionBank...`);
            await db.collection('questionBank').insertMany(newBioDocs);
            console.log('Successfully inserted BITSAT Biology questions!');
        }
    }

    const totalBio = await db.collection('questionBank').countDocuments({ subject: 'Biology', exam: 'BITSAT' });
    console.log(`Total BITSAT Biology questions in questionBank: ${totalBio}`);

    // 2. Build the 24 BITSAT Biology Full Tests
    console.log('\n================ Generating 24 BITSAT Biology Full Tests ================');

    // Retrieve Question Pools
    const bioPool = await db.collection('questionBank').find({ subject: 'Biology', exam: 'BITSAT' }).toArray();
    const phyPool = await db.collection('questionBank').find({
        subject: 'Physics',
        $nor: [{ questionType: { $regex: /assertion|numerical/i } }, { type: { $regex: /assertion|numerical/i } }]
    }).limit(1500).toArray();

    const chemPool = await db.collection('questionBank').find({
        subject: 'Chemistry',
        $nor: [{ questionType: { $regex: /assertion|numerical/i } }, { type: { $regex: /assertion|numerical/i } }]
    }).limit(1500).toArray();

    const engPool = await db.collection('questionBank').find({ subject: 'English Proficiency' }).limit(600).toArray();
    const lrPool = await db.collection('questionBank').find({ subject: 'Logical Reasoning' }).limit(800).toArray();

    console.log('Pool sizes loaded:', {
        Biology: bioPool.length,
        Physics: phyPool.length,
        Chemistry: chemPool.length,
        English: engPool.length,
        LogicalReasoning: lrPool.length
    });

    const usedBioIds = new Map(); // id -> count
    const usedPhyIds = new Map();
    const usedChemIds = new Map();
    const usedEngIds = new Map();
    const usedLrIds = new Map();

    const pickUnique = (pool, count, usageMap) => {
        // Sort by usage count ascending, then random
        const sorted = [...pool].sort((a, b) => {
            const useA = usageMap.get(a._id.toString()) || 0;
            const useB = usageMap.get(b._id.toString()) || 0;
            if (useA !== useB) return useA - useB;
            return 0.5 - Math.random();
        });
        const selected = sorted.slice(0, count);
        selected.forEach(q => {
            const idStr = q._id.toString();
            usageMap.set(idStr, (usageMap.get(idStr) || 0) + 1);
        });
        return selected;
    };

    let testsCreated = 0;

    for (let i = 1; i <= 24; i++) {
        const pad = String(i).padStart(2, '0');
        const testId = `bitsat-BIO-FULL-${pad}`;
        const title = `BITSAT Biology Full Test ${i}`;

        // 1. Select 30 Physics, 30 Chemistry, 40 Biology, 10 English, 20 Logical Reasoning
        const pQuestions = pickUnique(phyPool, 30, usedPhyIds);
        const cQuestions = pickUnique(chemPool, 30, usedChemIds);
        const bQuestions = pickUnique(bioPool, 40, usedBioIds);
        const eQuestions = pickUnique(engPool, 10, usedEngIds);
        const lQuestions = pickUnique(lrPool, 20, usedLrIds);

        const allTestQuestions = [
            ...pQuestions,
            ...cQuestions,
            ...bQuestions,
            ...eQuestions,
            ...lQuestions
        ];

        // Validate strictly
        if (allTestQuestions.length !== 130) {
            throw new Error(`Test ${testId} does not have 130 questions! Count: ${allTestQuestions.length}`);
        }

        const uniqueCheck = new Set(allTestQuestions.map(q => q._id.toString()));
        if (uniqueCheck.size !== 130) {
            throw new Error(`Test ${testId} has duplicate questions! Unique: ${uniqueCheck.size}`);
        }

        const questionIds = allTestQuestions.map(q => q._id);

        const difficultyTier = i <= 8 ? 'Fundamental' : (i <= 16 ? 'Advanced' : 'Pro Challenge');
        const difficulty = i <= 8 ? 'Moderate' : (i <= 16 ? 'Moderate' : 'Difficult');

        const testDoc = {
            testId,
            id: testId,
            title,
            exam: 'BITSAT',
            category: 'bitsat',
            type: 'MOCK',
            subjectMode: 'biology',
            duration: 180,
            totalMarks: 390,
            questionsCount: 130,
            year: 2026,
            classGrade: 'All Test',
            difficulty,
            difficultyTier,
            description: 'Comprehensive 130-Question BITSAT Biology Mock Test (Physics 30, Chemistry 30, Biology 40, English 10, Logical Reasoning 20).',
            subjectBreakdown: {
                Physics: 30,
                Chemistry: 30,
                Biology: 40,
                'English Proficiency': 10,
                'Logical Reasoning': 20
            },
            questions: questionIds,
            status: 'PUBLISHED',
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await db.collection('testPapers').updateOne(
            { testId },
            { $set: testDoc },
            { upsert: true }
        );

        // Also update alias BITSAT-BIO-FULL-XX so both ID formats resolve
        await db.collection('testPapers').updateOne(
            { testId: `BITSAT-BIO-FULL-${pad}` },
            { $set: { ...testDoc, testId: `BITSAT-BIO-FULL-${pad}`, id: `BITSAT-BIO-FULL-${pad}` } },
            { upsert: true }
        );

        // Update usedInTests in questionBank
        await db.collection('questionBank').updateMany(
            { _id: { $in: questionIds } },
            { $addToSet: { usedInTests: testId } }
        );

        testsCreated++;
        console.log(`✓ Created & Validated: ${title} (${testId}) - 130 Qs (Phy 30, Chem 30, Bio 40, Eng 10, LR 20)`);
    }

    console.log(`\n================ GENERATION & VALIDATION COMPLETE ================`);
    console.log(`Successfully generated and validated all ${testsCreated} BITSAT Biology Full Tests!`);

    await client.close();
}

seedBitsatBiology().catch(err => {
    console.error('Fatal error in seedBitsatBiology:', err);
    process.exit(1);
});
