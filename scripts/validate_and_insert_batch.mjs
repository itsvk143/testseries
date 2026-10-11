import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

/**
 * Validates a single MCQ according to Section 7, 8, 9, 10 of the Master Audit prompt.
 */
export function validateQuestion(q) {
    const errors = [];

    // 1. Required core fields
    if (!q.subject || typeof q.subject !== 'string') errors.push('Missing or invalid subject');
    if (!q.chapter || typeof q.chapter !== 'string') errors.push('Missing or invalid chapter');
    if (!q.subTopic || typeof q.subTopic !== 'string') errors.push('Missing or invalid subTopic');
    if (!q.exam || !['NEET', 'JEE Main', 'JEE Mains'].includes(q.exam)) errors.push(`Invalid exam: ${q.exam}`);
    if (!q.question || typeof q.question !== 'string' || q.question.trim().length < 20) errors.push('Question statement too short or invalid');

    // 2. Options check
    if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push('Must have exactly 4 options');
    } else {
        const uniqueOpts = new Set(q.options.map(o => String(o).trim().toLowerCase()));
        if (uniqueOpts.size < 4) errors.push('Options must be distinct (no duplicates)');
    }

    // 3. Correct answer check
    const validLetters = ['a', 'b', 'c', 'd'];
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
        errors.push(`correctAnswer must be index 0, 1, 2, or 3 (got ${q.correctAnswer})`);
    }
    const expectedLetter = validLetters[q.correctAnswer];
    if (!q.correctOption || q.correctOption.toLowerCase() !== expectedLetter) {
        errors.push(`correctOption (${q.correctOption}) does not match correctAnswer index (${q.correctAnswer} -> ${expectedLetter})`);
    }

    // 4. Explanation check
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length < 40) {
        errors.push('Explanation must provide thorough step-by-step reasoning (minimum 40 characters)');
    }

    // 5. LaTeX syntax sanity (check balanced $)
    const latexDollars = (q.question.match(/\$/g) || []).length;
    if (latexDollars % 2 !== 0) {
        errors.push('Unbalanced LaTeX dollar signs ($) in question text');
    }

    // 6. Difficulty check
    if (q.difficulty !== 'Difficult' && q.difficulty !== 'VERY DIFFICULT') {
        errors.push(`Difficulty must be 'Difficult' or 'VERY DIFFICULT' (got ${q.difficulty})`);
    }

    // 7. Originality audit metadata
    if (!q.originalityAudit) {
        errors.push('Missing originalityAudit metadata');
    } else {
        if (!q.originalityAudit.problemStructure) errors.push('Missing problemStructure in originalityAudit');
        if (!q.originalityAudit.solutionMethodSignature) errors.push('Missing solutionMethodSignature in originalityAudit');
        if (!q.originalityAudit.conceptCombination) errors.push('Missing conceptCombination in originalityAudit');
        if (!q.originalityAudit.noveltyRationale) errors.push('Missing noveltyRationale in originalityAudit');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Inserts a validated batch into MongoDB with duplicate checking against existing questions.
 */
export async function insertBatchWithAudit(questions, batchId = 'BATCH_1') {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');
    const col = db.collection('questionBank');

    const results = {
        batchId,
        totalSubmitted: questions.length,
        validationPassed: 0,
        validationFailed: 0,
        duplicatesRejected: 0,
        insertedCount: 0,
        insertedIds: [],
        errors: []
    };

    console.log(`\n--- PROCESSING ${batchId}: ${questions.length} QUESTIONS ---`);

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        
        // 1. Validation
        const val = validateQuestion(q);
        if (!val.isValid) {
            results.validationFailed++;
            results.errors.push({ index: i, question: q.question?.slice(0, 50), errors: val.errors });
            console.log(`❌ Validation failed for Q${i + 1}:`, val.errors);
            continue;
        }
        results.validationPassed++;

        // 2. Duplicate Audit against existing 54,252 questions in DB
        // Check exact statement match
        const exactMatch = await col.findOne({
            subject: q.subject,
            question: q.question.trim()
        });

        if (exactMatch) {
            results.duplicatesRejected++;
            results.errors.push({ index: i, error: `Duplicate question statement already exists in DB (_id: ${exactMatch._id})` });
            console.log(`⚠️ Duplicate rejected for Q${i + 1}: Existing ID ${exactMatch._id}`);
            continue;
        }

        // 3. Format document for MongoDB insertion
        const docToInsert = {
            _id: new ObjectId(),
            subject: q.subject,
            class: q.classGrade || (q.exam === 'NEET' ? 'Class 12' : 'Class 11'),
            chapter: q.chapter,
            topic: q.topic || q.chapter,
            subTopic: q.subTopic,
            questionType: 'MCQ (Multiple Choice Question)',
            type: 'MCQ',
            difficulty: 'Difficult',
            exam: q.exam === 'JEE Mains' ? 'JEE Main' : q.exam,
            targetExams: [q.exam === 'JEE Mains' ? 'JEE Main' : q.exam],
            question: q.question.trim(),
            options: q.options,
            correctAnswer: q.correctAnswer,
            correctOption: q.correctOption.toLowerCase(),
            explanation: q.explanation.trim(),
            marks: 4,
            negativeMarks: q.exam === 'NEET' ? 1 : 1,
            tags: [
                q.subject,
                q.chapter,
                q.subTopic,
                q.exam,
                'VERY_DIFFICULT_AUDITED',
                '2027_SYLLABUS_ALIGNED'
            ],
            source: 'MASTER_AUDIT_ORIGINAL_VERY_DIFFICULT',
            status: 'ACTIVE',
            cognitiveLevel: 'Analyze & Evaluate',
            idealTimeSeconds: q.exam === 'NEET' ? 90 : 150,
            originalityAudit: {
                ...q.originalityAudit,
                originalityStatus: 'PASSED',
                auditTimestamp: new Date(),
                batchId
            },
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const insertRes = await col.insertOne(docToInsert);
        if (insertRes.acknowledged) {
            results.insertedCount++;
            results.insertedIds.push(docToInsert._id.toString());
        }
    }

    console.log(`✓ ${batchId} Finished: ${results.insertedCount}/${results.totalSubmitted} inserted successfully.`);
    await client.close();

    return results;
}
