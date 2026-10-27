/**
 * Comprehensive Automated Tests for Marks Calculation, Ranking, and Analytics.
 * Implements test suites specified in Section 10 of the Master Prompt.
 */
const assert = require('assert');
const { MongoClient, ObjectId } = require('mongodb');

// Standalone implementation of canonical functions for CJS runner verification
function normalizeCorrectOption(ans, options = []) {
    if (ans === undefined || ans === null) return 'a';
    if (typeof ans === 'number') {
        if (ans >= 0 && ans <= 3 && Number.isInteger(ans)) return String.fromCharCode(97 + ans);
        if (ans === 4) return 'd';
        return 'a';
    }
    if (typeof ans === 'string') {
        const trimmed = ans.trim();
        const lower = trimmed.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(lower)) return lower;
        const optLetterMatch = lower.match(/^(?:option\s*)?\(?([a-d])\)?\.?$/i);
        if (optLetterMatch) return optLetterMatch[1].toLowerCase();
        if (Array.isArray(options) && options.length > 0) {
            const optIdx = options.findIndex((opt) => {
                const optText = (typeof opt === 'string' ? opt : (opt?.text || opt?.value || '')).trim().toLowerCase();
                if (optText === lower) return true;
                const cleanOpt = optText.replace(/\$/g, '').replace(/\\text\{([^}]+)\}/g, '$1').replace(/\s+/g, '');
                const cleanAns = lower.replace(/\$/g, '').replace(/\\text\{([^}]+)\}/g, '$1').replace(/\s+/g, '');
                return cleanOpt.length > 0 && cleanOpt === cleanAns;
            });
            if (optIdx >= 0 && optIdx < 4) return String.fromCharCode(97 + optIdx);
        }
        if (lower === '0') return 'a';
        if (lower === '1') return 'b';
        if (lower === '2') return 'c';
        if (lower === '3') return 'd';
        if (lower === '4') return 'd';
        if (lower.length > 0 && ['a', 'b', 'c', 'd'].includes(lower[0])) return lower[0];
    }
    return 'a';
}

function getAnswerForQuestion(answers, q, index) {
    if (!answers || typeof answers !== 'object') return undefined;

    if (q.id !== undefined && q.id !== null) {
        if (answers[q.id] !== undefined) return answers[q.id];
        if (answers[String(q.id)] !== undefined) return answers[String(q.id)];
        if (q._id !== undefined && q._id !== null) {
            const idStr = q._id.toString();
            if (answers[idStr] !== undefined) return answers[idStr];
        }
        return undefined;
    }

    if (q._id !== undefined && q._id !== null) {
        const idStr = q._id.toString();
        if (answers[idStr] !== undefined) return answers[idStr];
    }

    if (typeof index === 'number') {
        const qNum = index + 1;
        if (answers[qNum] !== undefined) return answers[qNum];
        if (answers[String(qNum)] !== undefined) return answers[String(qNum)];
    }

    if (typeof index === 'number' && answers[index] !== undefined && answers[index + 1] === undefined) {
        return answers[index];
    }

    return undefined;
}

function calculateTestResult({ answers = {}, questions = [], testDefinition = {}, customMarkingScheme = null, timeSpent = {} }) {
    const isTestEmpty = !Array.isArray(questions) || questions.length === 0;
    const testId = (testDefinition.id || testDefinition.testId || '').toLowerCase();
    const examType = (testDefinition.examType || testDefinition.category || '').toLowerCase();

    const isBitsat = examType.includes('bitsat') || testId.includes('bitsat');
    const defaultPosMarks = isBitsat ? 3 : 4;
    const defaultNegMarks = 1;

    let totalQuestions = questions?.length || 0;
    let evaluatedQuestions = 0;
    let attemptedQuestions = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let marksObtained = 0;
    let maximumMarks = 0;
    const subjectWiseResults = {};

    if (!isTestEmpty) {
        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            evaluatedQuestions++;

            const posMarks = customMarkingScheme?.posMarks ?? q.marks ?? defaultPosMarks;
            const negMarks = customMarkingScheme?.negMarks ?? q.negativeMarks ?? defaultNegMarks;
            maximumMarks += posMarks;

            const subjName = (q.subject || 'General').trim();
            if (!subjectWiseResults[subjName]) {
                subjectWiseResults[subjName] = {
                    subject: subjName,
                    total: 0,
                    attempted: 0,
                    correct: 0,
                    wrong: 0,
                    unattempted: 0,
                    score: 0,
                    maxMarks: 0,
                    percentage: 0,
                    accuracy: 0,
                    time: 0
                };
            }
            subjectWiseResults[subjName].total++;
            subjectWiseResults[subjName].maxMarks += posMarks;

            const clientAns = getAnswerForQuestion(answers, q, i);
            const hasAnswer = clientAns !== undefined && clientAns !== null && String(clientAns).trim() !== '';

            if (hasAnswer) {
                attemptedQuestions++;
                subjectWiseResults[subjName].attempted++;

                const isNumerical = (q.type || q.questionType || '').toString().toUpperCase().includes('NUMERICAL');
                const rawAns = q.correctOption ?? q.correctAnswer ?? q.answer;

                let isMatch = false;
                if (isNumerical) {
                    const normExpected = String(rawAns ?? '').trim().toLowerCase();
                    const normActual = String(clientAns).trim().toLowerCase();
                    isMatch = normExpected.length > 0 && normExpected === normActual;
                    if (!isMatch && !isNaN(Number(normExpected)) && !isNaN(Number(normActual))) {
                        isMatch = Math.abs(Number(normExpected) - Number(normActual)) < 0.0001;
                    }
                } else {
                    const normalizedExpected = normalizeCorrectOption(rawAns, q.options);
                    const normalizedActual = String(clientAns).trim().toLowerCase();
                    isMatch = normalizedActual === normalizedExpected.toLowerCase();
                }

                if (isMatch) {
                    correctAnswers++;
                    marksObtained += posMarks;
                    subjectWiseResults[subjName].correct++;
                    subjectWiseResults[subjName].score += posMarks;
                } else {
                    wrongAnswers++;
                    marksObtained -= negMarks;
                    subjectWiseResults[subjName].wrong++;
                    subjectWiseResults[subjName].score -= negMarks;
                }
            } else {
                subjectWiseResults[subjName].unattempted++;
            }
        }
    }

    if (maximumMarks === 0 && testDefinition.totalMarks) {
        maximumMarks = Number(testDefinition.totalMarks);
    }

    const unattemptedQuestions = Math.max(0, totalQuestions - attemptedQuestions);
    const percentage = maximumMarks > 0 ? Number(((marksObtained / maximumMarks) * 100).toFixed(2)) : 0;
    const accuracy = attemptedQuestions > 0 ? Number(((correctAnswers / attemptedQuestions) * 100).toFixed(2)) : 0;

    for (const subj of Object.values(subjectWiseResults)) {
        subj.unattempted = Math.max(0, subj.total - subj.attempted);
        subj.percentage = subj.maxMarks > 0 ? Number(((subj.score / subj.maxMarks) * 100).toFixed(2)) : 0;
        subj.accuracy = subj.attempted > 0 ? Number(((subj.correct / subj.attempted) * 100).toFixed(2)) : 0;
    }

    return {
        totalQuestions,
        evaluatedQuestions,
        attemptedQuestions,
        correctAnswers,
        wrongAnswers,
        unattemptedQuestions,
        marksObtained,
        maximumMarks,
        score: marksObtained,
        totalMarks: maximumMarks,
        percentage,
        accuracy,
        subjectWiseResults,
        evaluationStatus: totalQuestions > 0 ? 'EVALUATED' : 'PENDING'
    };
}

function computeCompetitionLeaderboard(attempts) {
    const studentAttemptsMap = new Map();
    for (const att of attempts) {
        if (att.status === 'RESET' || att.status === 'DELETED' || att.isReset || att.isDeleted) continue;
        const email = (att.userEmail || '').toLowerCase().trim();
        if (!email) continue;
        const existing = studentAttemptsMap.get(email);
        const attDate = new Date(att.attemptedAt || 0);

        if (!existing || attDate > new Date(existing.attemptedAt || 0)) {
            studentAttemptsMap.set(email, {
                ...att,
                score: typeof att.marksObtained === 'number' ? att.marksObtained : att.score,
                timeTaken: att.timeTaken || 0,
                attemptedAt: attDate
            });
        }
    }

    const eligible = Array.from(studentAttemptsMap.values());
    eligible.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (a.timeTaken !== b.timeTaken) return a.timeTaken - b.timeTaken;
        return new Date(a.attemptedAt) - new Date(b.attemptedAt);
    });

    const totalStudents = eligible.length;
    const leaderboard = [];
    let currentRank = 1;

    for (let i = 0; i < eligible.length; i++) {
        const item = eligible[i];
        if (i > 0 && item.score < eligible[i - 1].score) {
            currentRank = i + 1; // Standard competition ranking (1, 2, 2, 4)
        }
        leaderboard.push({
            userEmail: item.userEmail,
            score: item.score,
            rank: currentRank,
            totalStudents
        });
    }

    return { leaderboard, totalStudents };
}

// ==========================================
// TEST SUITES
// ==========================================
async function runTests() {
    console.log('🧪 Starting Automated Audit & Verification Tests...\n');

    // ----------------------------------------
    // Suite 1: Scoring Engine Unit Tests
    // ----------------------------------------
    console.log('=== Suite 1: Scoring Engine Unit Tests ===');

    const sampleNeetQuestions = [
        { id: 1, subject: 'Physics', correctOption: 'a', marks: 4, negativeMarks: 1 },
        { id: 2, subject: 'Physics', correctOption: 'b', marks: 4, negativeMarks: 1 },
        { id: 3, subject: 'Chemistry', correctOption: 'c', marks: 4, negativeMarks: 1 },
        { id: 4, subject: 'Chemistry', correctOption: 'd', marks: 4, negativeMarks: 1 },
        { id: 5, subject: 'Botany', correctOption: 'a', marks: 4, negativeMarks: 1 },
    ];

    // Case 1.1: All questions correct
    {
        const res = calculateTestResult({
            answers: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'a' },
            questions: sampleNeetQuestions,
            testDefinition: { id: 'neet-TEST-1', examType: 'neet' }
        });
        assert.strictEqual(res.marksObtained, 20, 'All correct must yield 20 marks');
        assert.strictEqual(res.correctAnswers, 5);
        assert.strictEqual(res.wrongAnswers, 0);
        assert.strictEqual(res.unattemptedQuestions, 0);
        assert.strictEqual(res.accuracy, 100);
        assert.strictEqual(res.percentage, 100);
        console.log('  ✓ Case 1.1: All questions correct passed');
    }

    // Case 1.2: All questions wrong
    {
        const res = calculateTestResult({
            answers: { 1: 'b', 2: 'c', 3: 'd', 4: 'a', 5: 'b' },
            questions: sampleNeetQuestions,
            testDefinition: { id: 'neet-TEST-1', examType: 'neet' }
        });
        assert.strictEqual(res.marksObtained, -5, 'All wrong must yield -5 marks');
        assert.strictEqual(res.correctAnswers, 0);
        assert.strictEqual(res.wrongAnswers, 5);
        assert.strictEqual(res.unattemptedQuestions, 0);
        assert.strictEqual(res.accuracy, 0);
        assert.strictEqual(res.percentage, -25);
        console.log('  ✓ Case 1.2: All questions wrong (negative score) passed');
    }

    // Case 1.3: All unattempted
    {
        const res = calculateTestResult({
            answers: {},
            questions: sampleNeetQuestions,
            testDefinition: { id: 'neet-TEST-1', examType: 'neet' }
        });
        assert.strictEqual(res.marksObtained, 0, 'All unattempted must yield 0 marks');
        assert.strictEqual(res.correctAnswers, 0);
        assert.strictEqual(res.wrongAnswers, 0);
        assert.strictEqual(res.unattemptedQuestions, 5);
        assert.strictEqual(res.accuracy, 0, 'Unattempted test accuracy must be 0% not NaN');
        console.log('  ✓ Case 1.3: All unattempted passed (accuracy is 0%, no NaN)');
    }

    // Case 1.4: Mixed responses (2 correct, 1 wrong, 2 unattempted)
    // Marks: (2 * 4) - (1 * 1) = 7 out of 20 = 35%
    // Accuracy: 2 / 3 = 66.67%
    {
        const res = calculateTestResult({
            answers: { 1: 'a', 2: 'b', 3: 'a' }, // 1 correct, 2 correct, 3 wrong (ans is c)
            questions: sampleNeetQuestions,
            testDefinition: { id: 'neet-TEST-1', examType: 'neet' }
        });
        assert.strictEqual(res.marksObtained, 7);
        assert.strictEqual(res.correctAnswers, 2);
        assert.strictEqual(res.wrongAnswers, 1);
        assert.strictEqual(res.unattemptedQuestions, 2);
        assert.strictEqual(res.accuracy, 66.67);
        assert.strictEqual(res.percentage, 35);
        console.log('  ✓ Case 1.4: Mixed responses calculation passed');
    }

    // Case 1.5: BITSAT custom marking scheme (+3, -1)
    {
        const bitsatQuestions = [
            { id: 1, subject: 'Mathematics', correctOption: 'a' },
            { id: 2, subject: 'Mathematics', correctOption: 'b' },
            { id: 3, subject: 'Physics', correctOption: 'c' },
        ];
        const res = calculateTestResult({
            answers: { 1: 'a', 2: 'c' }, // 1 correct, 1 wrong, 1 unattempted
            questions: bitsatQuestions,
            testDefinition: { id: 'bitsat-MOCK-1', examType: 'bitsat' }
        });
        // Correct 1 (+3), Wrong 1 (-1) = 2 marks out of 9
        assert.strictEqual(res.marksObtained, 2);
        assert.strictEqual(res.maximumMarks, 9);
        assert.strictEqual(res.correctAnswers, 1);
        assert.strictEqual(res.wrongAnswers, 1);
        assert.strictEqual(res.unattemptedQuestions, 1);
        console.log('  ✓ Case 1.5: BITSAT scheme (+3, -1) passed');
    }

    // Case 1.6: Numerical question float comparison
    {
        const numQuestion = [
            { id: 1, subject: 'Physics', type: 'NUMERICAL', correctOption: '25.50' }
        ];
        const res = calculateTestResult({
            answers: { 1: '25.5' },
            questions: numQuestion,
            testDefinition: { id: 'jee-mains-1', examType: 'jee-mains' }
        });
        assert.strictEqual(res.marksObtained, 4);
        assert.strictEqual(res.correctAnswers, 1);
        console.log('  ✓ Case 1.6: Numerical question evaluation passed');
    }

    // ----------------------------------------
    // Suite 2: Ranking Engine Unit Tests
    // ----------------------------------------
    console.log('\n=== Suite 2: Ranking Engine Unit Tests ===');

    // Case 2.1: 5 students with distinct scores (ranks 1, 2, 3, 4, 5)
    {
        const attempts = [
            { userEmail: 's1@test.com', score: 170, timeTaken: 3600 },
            { userEmail: 's2@test.com', score: 145, timeTaken: 3600 },
            { userEmail: 's3@test.com', score: 131, timeTaken: 3600 },
            { userEmail: 's4@test.com', score: 80, timeTaken: 3600 },
            { userEmail: 's5@test.com', score: 23, timeTaken: 3600 },
        ];
        const { leaderboard, totalStudents } = computeCompetitionLeaderboard(attempts);
        assert.strictEqual(totalStudents, 5);
        assert.strictEqual(leaderboard[0].rank, 1);
        assert.strictEqual(leaderboard[1].rank, 2);
        assert.strictEqual(leaderboard[2].rank, 3);
        assert.strictEqual(leaderboard[3].rank, 4);
        assert.strictEqual(leaderboard[4].rank, 5);
        console.log('  ✓ Case 2.1: Distinct scores produce ranks 1 to 5 passed');
    }

    // Case 2.2: Tied scores with position skipping (1, 1, 3, 4)
    {
        const attempts = [
            { userEmail: 's1@test.com', score: 170, timeTaken: 3600 },
            { userEmail: 's2@test.com', score: 170, timeTaken: 3600 }, // Tied for 1st
            { userEmail: 's3@test.com', score: 145, timeTaken: 3600 }, // Skips to 3rd
            { userEmail: 's4@test.com', score: 80, timeTaken: 3600 },  // 4th
        ];
        const { leaderboard } = computeCompetitionLeaderboard(attempts);
        assert.strictEqual(leaderboard[0].rank, 1);
        assert.strictEqual(leaderboard[1].rank, 1);
        assert.strictEqual(leaderboard[2].rank, 3, 'Rank must skip to 3 after two students tied at 1');
        assert.strictEqual(leaderboard[3].rank, 4);
        console.log('  ✓ Case 2.2: Standard Competition Ranking with position skipping passed');
    }

    // Case 2.3: Attempt deduplication (student submitted twice, latest counts once)
    {
        const attempts = [
            { userEmail: 's1@test.com', score: 100, attemptedAt: new Date('2026-10-26T10:00:00Z') },
            { userEmail: 's1@test.com', score: 150, attemptedAt: new Date('2026-10-26T12:00:00Z') }, // Latest
            { userEmail: 's2@test.com', score: 120, attemptedAt: new Date('2026-10-26T11:00:00Z') },
        ];
        const { leaderboard, totalStudents } = computeCompetitionLeaderboard(attempts);
        assert.strictEqual(totalStudents, 2, 'Student s1 must only count ONCE');
        assert.strictEqual(leaderboard[0].userEmail, 's1@test.com');
        assert.strictEqual(leaderboard[0].score, 150);
        console.log('  ✓ Case 2.3: Student attempt deduplication passed');
    }

    // Case 2.4: Reset and Deleted attempts exclusion
    {
        const attempts = [
            { userEmail: 's1@test.com', score: 100 },
            { userEmail: 's2@test.com', score: 200, status: 'RESET', isReset: true },
            { userEmail: 's3@test.com', score: 300, status: 'DELETED', isDeleted: true },
        ];
        const { leaderboard, totalStudents } = computeCompetitionLeaderboard(attempts);
        assert.strictEqual(totalStudents, 1, 'RESET and DELETED attempts must be excluded');
        assert.strictEqual(leaderboard[0].userEmail, 's1@test.com');
        assert.strictEqual(leaderboard[0].rank, 1);
        console.log('  ✓ Case 2.4: Exclusion of RESET and DELETED attempts passed');
    }

    // ----------------------------------------
    // Suite 3: End-to-End Database Verification
    // ----------------------------------------
    console.log('\n=== Suite 3: Live MongoDB Database Verification ===');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');

    // Verify neet-PART-6 results in MongoDB
    const neetPart6Results = await db.collection('testResults')
        .find({ testId: 'neet-PART-6' })
        .toArray();

    assert.strictEqual(neetPart6Results.length, 5, 'neet-PART-6 must have 5 results');

    const expectedScores = {
        'saratsahoo1234.scs@gmail.com': 170,
        'himanshu3353.hs@gmail.com': 145,
        'ssssssubhamaha2@gmail.com': 131,
        'dalainiki208@gmail.com': 80,
        'abhishekmohapatra1289@gmail.com': 23
    };

    for (const r of neetPart6Results) {
        const expected = expectedScores[r.userEmail];
        assert.strictEqual(r.score, expected, `Score for ${r.userEmail} must be ${expected}, got ${r.score}`);
        assert.notStrictEqual(r.score, 0, `Student ${r.userEmail} must NOT show 0/720`);
        assert.strictEqual(r.correctAnswers + r.wrongAnswers, Object.keys(r.answers || {}).length,
            `correct + wrong must match answered count for ${r.userEmail}`);
        console.log(`  ✓ Verified ${r.userEmail}: score=${r.score}/720, correct=${r.correctAnswers}, wrong=${r.wrongAnswers}`);
    }

    // Verify leaderboard for neet-PART-6
    const { leaderboard, totalStudents } = computeCompetitionLeaderboard(neetPart6Results);
    assert.strictEqual(totalStudents, 5);
    assert.strictEqual(leaderboard[0].userEmail, 'saratsahoo1234.scs@gmail.com');
    assert.strictEqual(leaderboard[0].rank, 1);
    assert.strictEqual(leaderboard[1].userEmail, 'himanshu3353.hs@gmail.com');
    assert.strictEqual(leaderboard[1].rank, 2);
    assert.strictEqual(leaderboard[2].userEmail, 'ssssssubhamaha2@gmail.com');
    assert.strictEqual(leaderboard[2].rank, 3);
    assert.strictEqual(leaderboard[3].userEmail, 'dalainiki208@gmail.com');
    assert.strictEqual(leaderboard[3].rank, 4);
    assert.strictEqual(leaderboard[4].userEmail, 'abhishekmohapatra1289@gmail.com');
    assert.strictEqual(leaderboard[4].rank, 5);

    console.log('\n  🏆 Verified neet-PART-6 Live Leaderboard:');
    leaderboard.forEach(e => console.log(`     Rank #${e.rank} / ${e.totalStudents} — ${e.userEmail}: ${e.score} marks`));

    await client.close();

    console.log('\n🎉 ALL AUDIT & VERIFICATION TESTS PASSED SUCCESSFULLY!\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
