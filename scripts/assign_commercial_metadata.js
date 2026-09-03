/**
 * assign_commercial_metadata.js
 * Psychometric and Assessment Architecture Metadata Engine:
 * Step 1: Assigns accurate Exam eligibility (JEE Main, NEET, BITSAT) and commercial Question IDs
 * across all 39,042 questions in MongoDB questionBank.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    console.log('⚙️ Starting Assessment Architecture & Exam Metadata Assignment (Step 1)...');

    const cursor = qBank.find({}, {
        projection: { _id: 1, subject: 1, chapter: 1, type: 1, difficulty: 1 }
    }).sort({ subject: 1, chapter: 1, _id: 1 });

    const bulkOps = [];
    const counters = {
        NEET_BIO: 1,
        JEE_MAT: 1,
        COMMON_PHY: 1,
        COMMON_CHE: 1
    };

    let totalProcessed = 0;
    const stats = {
        NEET_ONLY: 0,
        JEE_BITSAT_ONLY: 0,
        ALL_THREE: 0
    };

    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        let targetExams = [];
        let primaryExam = '';
        let qidCode = '';

        if (doc.subject === 'Botany' || doc.subject === 'Zoology') {
            // Medical Entrance (Biology)
            targetExams = ['NEET'];
            primaryExam = 'NEET';
            const prefix = doc.subject === 'Botany' ? 'NEET-BOT' : 'NEET-ZOO';
            qidCode = `${prefix}-${String(counters.NEET_BIO++).padStart(5, '0')}`;
            stats.NEET_ONLY++;
        } else if (doc.subject === 'Mathematics') {
            // Engineering Entrance (PCM)
            targetExams = ['JEE Main', 'BITSAT'];
            primaryExam = 'JEE Main';
            qidCode = `JEE-MAT-${String(counters.JEE_MAT++).padStart(5, '0')}`;
            stats.JEE_BITSAT_ONLY++;
        } else if (doc.subject === 'Physics') {
            // Common to Engineering & Medical Entrance
            targetExams = ['JEE Main', 'NEET', 'BITSAT'];
            primaryExam = 'JEE Main / NEET / BITSAT';
            qidCode = `COM-PHY-${String(counters.COMMON_PHY++).padStart(5, '0')}`;
            stats.ALL_THREE++;
        } else if (doc.subject === 'Chemistry') {
            // Common to Engineering & Medical Entrance
            targetExams = ['JEE Main', 'NEET', 'BITSAT'];
            primaryExam = 'JEE Main / NEET / BITSAT';
            qidCode = `COM-CHE-${String(counters.COMMON_CHE++).padStart(5, '0')}`;
            stats.ALL_THREE++;
        }

        // Psychometric cognitive level mapping
        let cognitiveLevel = 'Application';
        if (doc.type === 'ASSERTION_REASON') cognitiveLevel = 'Analysis & Critical Thinking';
        else if (doc.type === 'NUMERICAL') cognitiveLevel = 'Problem Solving & Calculation';
        else if (doc.difficulty === 'Hard') cognitiveLevel = 'Synthesis & Evaluation';
        else if (doc.difficulty === 'Easy') cognitiveLevel = 'Knowledge & Recall';

        // Ideal time allocation based on exam psychometrics
        let idealTimeSeconds = 60; // Standard NEET pacing
        if (targetExams.includes('JEE Main') && doc.type === 'NUMERICAL') idealTimeSeconds = 120;
        else if (targetExams.includes('JEE Main')) idealTimeSeconds = 90;
        else if (targetExams.includes('BITSAT') && !targetExams.includes('NEET')) idealTimeSeconds = 50;

        bulkOps.push({
            updateOne: {
                filter: { _id: doc._id },
                update: {
                    $set: {
                        exam: primaryExam,
                        targetExams: targetExams,
                        commercialId: qidCode,
                        cognitiveLevel: cognitiveLevel,
                        idealTimeSeconds: idealTimeSeconds,
                        commercialReady: true,
                        updatedAt: new Date()
                    }
                }
            }
        });

        totalProcessed++;

        if (bulkOps.length >= 1000) {
            await qBank.bulkWrite(bulkOps);
            bulkOps.length = 0;
            process.stdout.write(`Processed ${totalProcessed} questions...\r`);
        }
    }

    if (bulkOps.length > 0) {
        await qBank.bulkWrite(bulkOps);
    }

    console.log(`\n✅ Completed Step 1 metadata assignment for all ${totalProcessed} questions!`);
    console.log('\n📊 Exam Distribution Summary:');
    console.log(` - NEET Exclusives (Botany & Zoology): ${stats.NEET_ONLY} questions`);
    console.log(` - JEE Main & BITSAT Exclusives (Mathematics): ${stats.JEE_BITSAT_ONLY} questions`);
    console.log(` - Tri-Exam Core (Physics & Chemistry for JEE Main, NEET, BITSAT): ${stats.ALL_THREE} questions`);

    // Verify sample in DB
    const sample = await qBank.find({}).limit(5).toArray();
    console.log('\n🔍 Verification Samples:');
    sample.forEach(s => {
        console.log(`- Commercial ID: ${s.commercialId} | Subject: ${s.subject} | Target Exams: [${s.targetExams.join(', ')}] | Cognitive: ${s.cognitiveLevel}`);
    });

    await client.close();
}

main().catch(console.error);
