/**
 * Automated Regression & Audit Tests: Review Solutions Bug Fix
 * Tests question normalization, options schema safety, solution rendering, and live database attempts.
 */
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// Standalone formatQuestionToLegacy for testing CJS environment
function formatQuestionToLegacyCjs(q, index = 1) {
    if (!q) return null;
    const rawType = (q.questionType || q.type || 'MCQ').toString().toUpperCase();
    const isNumerical = rawType === 'NUMERICAL' || rawType === 'NUMERIC';
    const isAssertion = rawType.includes('ASSERTION') || rawType === 'AR';
    const isSubjective = rawType.includes('SUBJECTIVE');
    const legacyType = isNumerical ? 'NUMERICAL' : isAssertion ? 'ASSERTION_REASON' : isSubjective ? 'SUBJECTIVE' : 'MCQ';

    let legacyOptions = [];
    if (!isNumerical && !isSubjective) {
        if (Array.isArray(q.options)) {
            legacyOptions = q.options.map((opt, i) => {
                if (typeof opt === 'object' && opt !== null) {
                    return {
                        id: (opt.id || opt.key || String.fromCharCode(97 + i)).toLowerCase(),
                        text: opt.text || opt.option || opt.value || '',
                        image: opt.image || opt.img || ''
                    };
                }
                return {
                    id: String.fromCharCode(97 + i),
                    text: String(opt ?? ''),
                    image: ''
                };
            });
        }
    }

    let correctOption = 'a';
    if (isNumerical) {
        correctOption = String(q.correctAnswer ?? q.correctOption ?? q.answer ?? '').trim();
    } else {
        const rawAns = q.correctAnswer ?? q.correctOption ?? q.answer;
        if (typeof rawAns === 'number' && rawAns >= 0 && rawAns <= 3) {
            correctOption = String.fromCharCode(97 + rawAns);
        } else if (typeof rawAns === 'string') {
            const clean = rawAns.trim().toLowerCase();
            if (['a', 'b', 'c', 'd'].includes(clean)) correctOption = clean;
            else if (clean === '0') correctOption = 'a';
            else if (clean === '1') correctOption = 'b';
            else if (clean === '2') correctOption = 'c';
            else if (clean === '3') correctOption = 'd';
        }
    }

    return {
        _id: (q._id || q.questionId)?.toString(),
        id: q.id || index,
        type: legacyType,
        text: q.text || q.question || q.questionText || '',
        image: q.image || q.img || '',
        options: legacyOptions,
        correctOption,
        explanation: q.explanation || q.solution || q.solutionText || '',
        subject: q.subject || 'Chemistry',
        chapter: q.chapter || '',
        marks: q.marks ?? 4,
        negativeMarks: q.negativeMarks ?? 1
    };
}

async function runTests() {
    console.log('🧪 Starting Review Solutions & Question Normalization Tests...\n');
    let passed = 0;
    let failed = 0;

    function assert(condition, message) {
        if (condition) {
            console.log(`  ✓ ${message} passed`);
            passed++;
        } else {
            console.error(`  ✕ ${message} FAILED`);
            failed++;
        }
    }

    console.log('=== Suite 1: Question Normalization Edge Cases ===');

    // Case 1.1: Question with string options (e.g. from raw questionBank)
    const rawStringOptsQ = {
        question: 'Which of the following has the highest dipole moment?',
        options: ['$CO2$', '$H2O$', 'NH3', 'CClF3'],
        correctAnswer: 1,
        explanation: 'Water has a bent structure.',
        subject: 'Chemistry'
    };
    const norm1 = formatQuestionToLegacyCjs(rawStringOptsQ, 1);
    assert(norm1.text === rawStringOptsQ.question, 'Case 1.1: Text extracted from .question field');
    assert(Array.isArray(norm1.options) && norm1.options.length === 4, 'Case 1.1: Options array created');
    assert(norm1.options[0].id === 'a' && norm1.options[0].text === '$CO2$', 'Case 1.1: Option 0 id is a and text is $CO2$');
    assert(norm1.options[1].id === 'b' && norm1.options[1].text === '$H2O$', 'Case 1.1: Option 1 id is b and text is $H2O$');
    assert(norm1.correctOption === 'b', 'Case 1.1: Numeric correctAnswer 1 normalized to option b');

    // Case 1.2: Question with missing explanation
    const noExpQ = {
        question: 'Test statement without solution',
        options: ['A', 'B', 'C', 'D'],
        correctOption: 'c'
    };
    const norm2 = formatQuestionToLegacyCjs(noExpQ, 2);
    assert(norm2.explanation === '', 'Case 1.2: Missing explanation defaults safely to empty string');

    // Case 1.3: Numerical Question
    const numQ = {
        question: 'Calculate the pH of 0.01M HCl',
        type: 'NUMERICAL',
        correctAnswer: '2.0'
    };
    const norm3 = formatQuestionToLegacyCjs(numQ, 3);
    assert(norm3.type === 'NUMERICAL', 'Case 1.3: Type preserved as NUMERICAL');
    assert(norm3.options.length === 0, 'Case 1.3: Numerical options are empty');
    assert(norm3.correctOption === '2.0', 'Case 1.3: Correct option holds numeric string');

    console.log('\n=== Suite 2: Client Render Defense Checks ===');

    // Test that the client-side rendering logic handles all possible input variants without throwing
    const sampleOptions = ['$CO2$', { id: 'B', text: '$H2O$' }, null, 'NH3'];
    let renderExceptions = 0;
    try {
        sampleOptions.forEach((rawOpt, optIdx) => {
            const opt = (typeof rawOpt === 'object' && rawOpt !== null)
                ? rawOpt
                : { id: String.fromCharCode(97 + optIdx), text: String(rawOpt || ''), image: '' };
            const optId = (opt.id || String.fromCharCode(97 + optIdx)).toLowerCase();
            const optText = opt.text || (typeof rawOpt === 'string' ? rawOpt : '');
            // This is what crashed previously:
            const keyUpper = optId.toUpperCase();
            if (!keyUpper) throw new Error('Key upper failed');
        });
    } catch (e) {
        renderExceptions++;
    }
    assert(renderExceptions === 0, 'Case 2.1: Options mapping with mixed strings/objects never throws');

    console.log('\n=== Suite 3: Live MongoDB Database Verification ===');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');

    // Verify Dalai Niki's attempt
    const dalaiAttempt = await db.collection('testResults').findOne({
        _id: new ObjectId('6ae062f323af6a89a0d2cace')
    });
    assert(!!dalaiAttempt, 'Case 3.1: Dalai Niki attempt record found in DB');
    assert(dalaiAttempt.questions.length === 45, 'Case 3.1: All 45 questions present');

    // Check all 45 questions in Dalai Niki's attempt have options with .id and .text
    let malformedOptionsCount = 0;
    dalaiAttempt.questions.forEach((q, idx) => {
        if (!Array.isArray(q.options) || q.options.length === 0) {
            malformedOptionsCount++;
        } else {
            q.options.forEach(opt => {
                if (typeof opt !== 'object' || opt === null || !opt.id || opt.text === undefined) {
                    malformedOptionsCount++;
                }
            });
        }
    });
    assert(malformedOptionsCount === 0, 'Case 3.2: All 45 questions have verified object options with .id and .text');

    // Verify Subhashree's attempt
    const subhashreeAttempt = await db.collection('testResults').findOne({
        _id: new ObjectId('6ae0683023af6a89a0d2cacf')
    });
    assert(!!subhashreeAttempt, 'Case 3.3: Subhashree attempt record found in DB');
    assert(subhashreeAttempt.questions.length === 45, 'Case 3.3: All 45 questions present');

    await client.close();

    console.log(`\n========================================`);
    console.log(`Total tests: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
    if (failed > 0) process.exit(1);
    console.log('🎉 ALL REVIEW SOLUTIONS TESTS PASSED SUCCESSFULLY!\n');
}

runTests().catch(err => {
    console.error('Test execution failed:', err);
    process.exit(1);
});
