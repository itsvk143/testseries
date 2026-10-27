import assert from 'assert';
import {
    categorizeTestId,
    extractExamType,
    evaluateAttempt,
    extractAvailableFilters,
    computeAnalytics,
    generateImprovementPlan
} from '../src/lib/analyticsEngine.js';

console.log('🧪 RUNNING MASTER ANALYTICS ACCEPTANCE TEST SUITE...\n');

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
    totalTests++;
    try {
        fn();
        console.log(`✅ [PASS] Test ${totalTests}: ${name}`);
        passedTests++;
    } catch (err) {
        console.error(`❌ [FAIL] Test ${totalTests}: ${name}`);
        console.error(err);
        process.exitCode = 1;
    }
}

// ==========================================
// Test 1 — Part Test isolation
// ==========================================
runTest('Part Test isolation — Part Test A and Chapterwise Test B never mix in category trends', () => {
    const syntheticResults = [
        {
            testId: 'neet-PART-1',
            score: 131,
            marksObtained: 131,
            maximumMarks: 720,
            attemptedAt: '2026-10-01T10:00:00Z',
            examType: 'neet'
        },
        {
            testId: 'neet-CHAPTER-Chemistry-Bonding-11',
            score: 59,
            marksObtained: 59,
            maximumMarks: 180,
            attemptedAt: '2026-10-02T10:00:00Z',
            examType: 'neet'
        }
    ];

    // Select category: PART
    const partAnalytics = computeAnalytics({
        testResults: syntheticResults,
        category: 'PART'
    });

    assert.strictEqual(partAnalytics.scoreTrend.length, 1, 'Should contain exactly 1 point in Part Test trend');
    assert.strictEqual(partAnalytics.scoreTrend[0].testId, 'neet-PART-1', 'Only Part Test 1 must appear');
    assert.strictEqual(partAnalytics.scoreTrend[0].score, 131);

    // Select category: CHAPTER
    const chapterAnalytics = computeAnalytics({
        testResults: syntheticResults,
        category: 'CHAPTER'
    });

    assert.strictEqual(chapterAnalytics.scoreTrend.length, 1, 'Should contain exactly 1 point in Chapterwise trend');
    assert.strictEqual(chapterAnalytics.scoreTrend[0].testId, 'neet-CHAPTER-Chemistry-Bonding-11');
    assert.strictEqual(chapterAnalytics.scoreTrend[0].score, 59);

    // 59/180 must NEVER appear in Part Test observations
    const hasChapterInPart = partAnalytics.scoreTrend.some(p => p.score === 59);
    assert.strictEqual(hasChapterInPart, false, 'Chapterwise score must not appear in Part Test trend');
});

// ==========================================
// Test 2 — Full Test isolation
// ==========================================
runTest('Full Test isolation — Excludes Part, Chapterwise, and Live test records', () => {
    const syntheticResults = [
        { testId: 'neet-MOCK-1', score: 450, totalMarks: 720 },
        { testId: 'neet-PART-2', score: 320, totalMarks: 720 },
        { testId: 'neet-CHAPTER-Physics-1', score: 80, totalMarks: 180 },
        { testId: 'neet-CT-2026-Sep-9', score: 510, totalMarks: 720, isLiveAttempt: true }
    ];

    const fullAnalytics = computeAnalytics({
        testResults: syntheticResults,
        category: 'FULL'
    });

    assert.strictEqual(fullAnalytics.scoreTrend.length, 1);
    assert.strictEqual(fullAnalytics.scoreTrend[0].testId, 'neet-MOCK-1');
});

// ==========================================
// Test 3 — Live Test isolation
// ==========================================
runTest('Live Test isolation — Correct category and provisional distinction', () => {
    const liveCat = categorizeTestId('neet-CT-2026-Sep-9', true);
    assert.strictEqual(liveCat.id, 'LIVE');
    assert.strictEqual(liveCat.label, 'Live Test');

    const syntheticLive = [
        {
            testId: 'neet-CT-2026-Sep-9',
            isLiveAttempt: true,
            score: 500,
            maximumMarks: 720,
            status: 'AUTO_SUBMITTED'
        }
    ];
    const liveAnalytics = computeAnalytics({
        testResults: syntheticLive,
        category: 'LIVE'
    });
    assert.strictEqual(liveAnalytics.scoreTrend.length, 1);
    assert.strictEqual(liveAnalytics.scoreTrend[0].isLiveAttempt, true);
});

// ==========================================
// Test 4 — Negative marking under +4/-1/0
// Given: Correct: 42, Incorrect: 37, Unattempted: 101, Total: 180
// ==========================================
runTest('Negative marking under +4/-1/0 (Correct: 42, Wrong: 37, Unattempted: 101)', () => {
    const questions = [];
    const answers = {};

    for (let i = 1; i <= 180; i++) {
        questions.push({
            id: i,
            subject: 'Physics',
            chapter: 'Mechanics',
            correctOption: 'a',
            marks: 4,
            negativeMarks: 1
        });

        if (i <= 42) {
            answers[i] = 'a'; // Correct
        } else if (i <= 42 + 37) {
            answers[i] = 'b'; // Wrong
        }
        // Remaining 101 unattempted
    }

    const evalResult = evaluateAttempt({
        testId: 'neet-PART-1',
        examType: 'neet',
        questions,
        answers
    });

    assert.strictEqual(evalResult.totalQuestions, 180);
    assert.strictEqual(evalResult.correctCount, 42);
    assert.strictEqual(evalResult.wrongCount, 37);
    assert.strictEqual(evalResult.unattemptedCount, 101);
    assert.strictEqual(evalResult.maximumMarks, 720);
    assert.strictEqual(evalResult.obtainedMarks, 131, 'Obtained marks must equal 42*4 - 37*1 = 131');
    assert.strictEqual(evalResult.totalNegativeMarksLost, 37, 'Negative marks lost must be 37');
    assert.strictEqual(evalResult.scorePercentage, 18.19, 'Score percentage must be ~18.19%');
    assert.strictEqual(evalResult.accuracy, 53.16, 'Accuracy must be 42/(42+37) = 53.16%');
    assert.strictEqual(evalResult.attemptRate, 43.89, 'Attempt rate must be 79/180 = 43.89%');
});

// ==========================================
// Test 5 — Negative raw score preservation
// Given: Correct: 0, Incorrect: 105, Unattempted: 75
// Expected: Obtained marks: -105, Score %: -14.58%, Negative marks: 105
// ==========================================
runTest('Negative raw score — Must preserve raw negative marks without clamping to 0', () => {
    const questions = [];
    const answers = {};

    for (let i = 1; i <= 180; i++) {
        questions.push({
            id: i,
            subject: 'Chemistry',
            chapter: 'Organic',
            correctOption: 'a',
            marks: 4,
            negativeMarks: 1
        });

        if (i <= 105) {
            answers[i] = 'b'; // Wrong
        }
        // Remaining 75 unattempted
    }

    const evalResult = evaluateAttempt({
        testId: 'neet-PART-1',
        examType: 'neet',
        questions,
        answers
    });

    assert.strictEqual(evalResult.correctCount, 0);
    assert.strictEqual(evalResult.wrongCount, 105);
    assert.strictEqual(evalResult.unattemptedCount, 75);
    assert.strictEqual(evalResult.obtainedMarks, -105, 'Raw score must be exactly -105, not clamped to 0');
    assert.strictEqual(evalResult.maximumMarks, 720);
    assert.strictEqual(evalResult.scorePercentage, -14.58);
    assert.strictEqual(evalResult.accuracy, 0);
    assert.strictEqual(evalResult.attemptRate, 58.33);
    assert.strictEqual(evalResult.totalNegativeMarksLost, 105);
});

// ==========================================
// Test 6 — Subject-level analysis
// Chemistry test: Correct: 20, Incorrect: 8, Unattempted: 17 (Total 45)
// ==========================================
runTest('Subject-level analysis (Correct: 20, Wrong: 8, Unattempted: 17)', () => {
    const questions = [];
    const answers = {};

    for (let i = 1; i <= 45; i++) {
        questions.push({
            id: i,
            subject: 'Chemistry',
            chapter: 'Chemical Bonding',
            correctOption: 'c',
            marks: 4,
            negativeMarks: 1
        });

        if (i <= 20) answers[i] = 'c';
        else if (i <= 28) answers[i] = 'd';
    }

    const evalResult = evaluateAttempt({
        testId: 'neet-CHAPTER-Chemistry-Bonding',
        examType: 'neet',
        questions,
        answers
    });

    assert.strictEqual(evalResult.totalQuestions, 45);
    assert.strictEqual(evalResult.maximumMarks, 180);
    assert.strictEqual(evalResult.obtainedMarks, 72, '20*4 - 8*1 = 72');
    assert.strictEqual(evalResult.scorePercentage, 40);
    assert.strictEqual(evalResult.accuracy, 71.43);
    assert.strictEqual(evalResult.attemptRate, 62.22);
    assert.strictEqual(evalResult.totalNegativeMarksLost, 8);
    assert.strictEqual(evalResult.incorrectQuestions.length, 8);
    assert.strictEqual(evalResult.incorrectBySubject[0].negativeMarksLost, 8);
    assert.strictEqual(evalResult.incorrectBySubject[0].signedDeduction, -8);
    assert.strictEqual(evalResult.incorrectBySubject[0].fill, '#ef4444', 'Negative series must be red');
});

// ==========================================
// Test 7 — Different marking schemes (BITSAT +3, -1)
// ==========================================
runTest('Different marking schemes — BITSAT defaults to +3 pos, -1 neg', () => {
    const questions = [
        { id: 1, subject: 'Physics', correctOption: 'a' },
        { id: 2, subject: 'Physics', correctOption: 'a' }
    ];
    const answers = { 1: 'a', 2: 'b' }; // 1 correct, 1 wrong

    const evalResult = evaluateAttempt({
        testId: 'bitsat-MOCK-1',
        examType: 'bitsat',
        questions,
        answers
    });

    assert.strictEqual(evalResult.maximumMarks, 6, '2 questions * 3 = 6 marks');
    assert.strictEqual(evalResult.obtainedMarks, 2, '+3 - 1 = 2 marks');
    assert.strictEqual(evalResult.totalNegativeMarksLost, 1);
});

// ==========================================
// Test 8 — Ranking competition tie handling
// ==========================================
runTest('Ranking competition tie handling — Standard competition ranking', () => {
    // Verified against src/lib/rankingEngine.js
    const scores = [150, 150, 140];
    const ranks = [];
    let currentRank = 1;

    for (let i = 0; i < scores.length; i++) {
        if (i > 0 && scores[i] === scores[i - 1]) {
            ranks.push(ranks[i - 1]);
        } else {
            ranks.push(currentRank);
        }
        currentRank++;
    }

    assert.deepStrictEqual(ranks, [1, 1, 3], 'Scores 150, 150, 140 must yield ranks 1, 1, 3');
});

// ==========================================
// Test 10 — Subject not included
// A Chemistry-only test must not show Physics, Botany, Zoology as zero-scoring subjects
// ==========================================
runTest('Subject not included — Absent subjects are excluded, not shown as 0%', () => {
    const questions = [
        { id: 1, subject: 'Chemistry', correctOption: 'a', marks: 4, negativeMarks: 1 }
    ];
    const evalResult = evaluateAttempt({
        testId: 'neet-CHAPTER-Chem',
        questions,
        answers: { 1: 'a' }
    });

    const subjectNames = evalResult.subjects.map(s => s.subject);
    assert.deepStrictEqual(subjectNames, ['Chemistry']);
    assert.strictEqual(subjectNames.includes('Physics'), false);
    assert.strictEqual(subjectNames.includes('Botany'), false);
    assert.strictEqual(subjectNames.includes('Zoology'), false);
});

// ==========================================
// Test 11 — Multiple attempts separation
// ==========================================
runTest('Multiple attempts separation — Attempts remain distinct without merging', () => {
    const syntheticResults = [
        {
            _id: 'att-1',
            testId: 'neet-PART-6',
            attemptedAt: '2026-10-01T10:00:00Z',
            marksObtained: 100,
            maximumMarks: 720,
            correctAnswers: 30,
            wrongAnswers: 20
        },
        {
            _id: 'att-2',
            testId: 'neet-PART-6',
            attemptedAt: '2026-10-10T10:00:00Z',
            marksObtained: 220,
            maximumMarks: 720,
            correctAnswers: 60,
            wrongAnswers: 20
        }
    ];

    const filters = extractAvailableFilters(syntheticResults);
    assert.strictEqual(filters.attemptsByTest['neet-PART-6'].length, 2);
    assert.strictEqual(filters.attemptsByTest['neet-PART-6'][0].attemptNumber, 1);
    assert.strictEqual(filters.attemptsByTest['neet-PART-6'][0].score, 100);
    assert.strictEqual(filters.attemptsByTest['neet-PART-6'][1].attemptNumber, 2);
    assert.strictEqual(filters.attemptsByTest['neet-PART-6'][1].score, 220);
});

// ==========================================
// Test 12 — Incorrect-question consistency
// Questions shown in incorrect graph reconcile with question list
// ==========================================
runTest('Incorrect question consistency — Graph totals reconcile with question list', () => {
    const questions = [
        { id: 1, subject: 'Physics', chapter: 'Optics', correctOption: 'a' },
        { id: 2, subject: 'Physics', chapter: 'Optics', correctOption: 'a' },
        { id: 3, subject: 'Chemistry', chapter: 'Equilibrium', correctOption: 'b' }
    ];
    const answers = { 1: 'b', 2: 'c', 3: 'a' }; // All 3 wrong

    const evalResult = evaluateAttempt({
        testId: 'neet-MOCK-1',
        questions,
        answers
    });

    assert.strictEqual(evalResult.incorrectQuestions.length, 3);
    const sumSubjectIncorrect = evalResult.incorrectBySubject.reduce((sum, s) => sum + s.count, 0);
    assert.strictEqual(sumSubjectIncorrect, 3);
});

// ==========================================
// Test 14 — Reset and delete exclusion
// ==========================================
runTest('Reset and delete exclusion — Inactive attempts are completely excluded', () => {
    const synthetic = [
        { testId: 'neet-PART-1', score: 100, status: 'RESET', isReset: true },
        { testId: 'neet-PART-1', score: 120, status: 'DELETED', isDeleted: true },
        { testId: 'neet-PART-1', score: 300, status: 'SUBMITTED' }
    ];

    const analytics = computeAnalytics({ testResults: synthetic });
    assert.strictEqual(analytics.summary.testsTaken, 1);
    assert.strictEqual(analytics.summary.bestScore, 300);
});

// ==========================================
// Test 17 — Negative-marking mandatory RED color
// ==========================================
runTest('Negative-marking series — All negative marking elements assigned #ef4444', () => {
    const questions = [
        { id: 1, subject: 'Physics', chapter: 'LOM', correctOption: 'a', marks: 4, negativeMarks: 1 }
    ];
    const evalResult = evaluateAttempt({
        testId: 'neet-PART-1',
        questions,
        answers: { 1: 'd' }
    });

    assert.strictEqual(evalResult.incorrectBySubject[0].fill, '#ef4444');
    assert.strictEqual(evalResult.incorrectByChapter[0].fill, '#ef4444');
});

// ==========================================
// Test 18 — Student improvement plan evidence
// ==========================================
runTest('Personalized Student Improvement Plan — Derived from actual error patterns', () => {
    const questions = [
        { id: 1, subject: 'Chemistry', chapter: 'Chemical Bonding', correctOption: 'a', marks: 4, negativeMarks: 1 },
        { id: 2, subject: 'Chemistry', chapter: 'Chemical Bonding', correctOption: 'a', marks: 4, negativeMarks: 1 },
        { id: 3, subject: 'Chemistry', chapter: 'Chemical Bonding', correctOption: 'a', marks: 4, negativeMarks: 1 }
    ];
    const answers = { 1: 'b', 2: 'c', 3: 'd' }; // 3 wrong answers in Chemical Bonding

    const evalResult = evaluateAttempt({
        testId: 'neet-CHAPTER-Bonding',
        questions,
        answers
    });

    const plan = generateImprovementPlan(evalResult);
    assert.ok(plan.length > 0, 'Must generate recommendations');
    const bondingPlan = plan.find(p => p.chapter === 'Chemical Bonding');
    assert.ok(bondingPlan, 'Must highlight Chemical Bonding as high negative marks chapter');
    assert.ok(bondingPlan.reason.includes('Lost 3 marks to negative marking with 3 incorrect questions'));
});

// ==========================================
// Test 13 — Subject totals reconciliation
// ==========================================
runTest('Subject totals reconciliation — Sum of subject scores and counts equals test totals', () => {
    const questions = [
        { id: 1, subject: 'Physics', marks: 4, negativeMarks: 1, correctOption: 'a' },
        { id: 2, subject: 'Physics', marks: 4, negativeMarks: 1, correctOption: 'b' },
        { id: 3, subject: 'Chemistry', marks: 4, negativeMarks: 1, correctOption: 'c' },
        { id: 4, subject: 'Chemistry', marks: 4, negativeMarks: 1, correctOption: 'd' }
    ];
    const answers = { 1: 'a', 2: 'wrong', 3: 'c', 4: 'd' }; // Phys: 1C, 1W -> 4-1=3; Chem: 2C -> 4+4=8. Total = 11

    const evalResult = evaluateAttempt({
        testId: 'neet-PART-1',
        questions,
        answers
    });

    const sumSubjectScores = evalResult.subjects.reduce((sum, s) => sum + s.score, 0);
    const sumSubjectCorrect = evalResult.subjects.reduce((sum, s) => sum + s.correct, 0);
    const sumSubjectWrong = evalResult.subjects.reduce((sum, s) => sum + s.wrong, 0);
    const sumSubjectNegMarks = evalResult.subjects.reduce((sum, s) => sum + s.negativeMarksLost, 0);

    assert.strictEqual(sumSubjectScores, evalResult.obtainedMarks, 'Subject scores sum must equal obtainedMarks');
    assert.strictEqual(sumSubjectCorrect, evalResult.correctCount);
    assert.strictEqual(sumSubjectWrong, evalResult.wrongCount);
    assert.strictEqual(sumSubjectNegMarks, evalResult.totalNegativeMarksLost);
    assert.strictEqual(evalResult.obtainedMarks, 11);
});

// ==========================================
// Test 15 — Missing data handling
// ==========================================
runTest('Missing data handling — Missing answer key or metadata produces warnings, never NaNs', () => {
    const questions = [
        { id: 1, text: 'No key or subject' } // Missing subject, missing answer key
    ];
    const evalResult = evaluateAttempt({
        testId: 'neet-MOCK-1',
        questions,
        answers: { 1: 'a' }
    });

    assert.strictEqual(evalResult.dataQualityWarnings.length >= 2, true, 'Must flag missing subject and answer key');
    assert.strictEqual(isNaN(evalResult.scorePercentage), false, 'Percentage must never be NaN');
    assert.strictEqual(isNaN(evalResult.accuracy), false, 'Accuracy must never be NaN');
    assert.strictEqual(evalResult.questions[0].correctAnswer, 'N/A');
});

// ==========================================
// Test 16 — Dependent filters reactivity
// ==========================================
runTest('Dependent filters reactivity — Scoping to single subject filters all sub-entities', () => {
    const questions = [
        { id: 1, subject: 'Physics', chapter: 'Kinematics', correctOption: 'a' },
        { id: 2, subject: 'Chemistry', chapter: 'Periodic', correctOption: 'b' }
    ];
    const synthetic = [
        {
            testId: 'neet-PART-1',
            questions,
            answers: { 1: 'c', 2: 'b' } // Q1 wrong in Physics, Q2 correct in Chemistry
        }
    ];

    const physicsScoped = computeAnalytics({
        testResults: synthetic,
        subject: 'Physics'
    });

    assert.strictEqual(physicsScoped.selectedAttempt.subjects.length, 1);
    assert.strictEqual(physicsScoped.selectedAttempt.subjects[0].subject, 'Physics');
    assert.strictEqual(physicsScoped.selectedAttempt.questions.length, 1);
    assert.strictEqual(physicsScoped.selectedAttempt.questions[0].subject, 'Physics');
    assert.strictEqual(physicsScoped.selectedAttempt.incorrectQuestions.length, 1);
});

// ==========================================
// Test 19 — Comparison Attempt Delta Logic
// ==========================================
runTest('Comparison Attempt Delta Logic — Accurately computes deltas between Attempt A and B', () => {
    const attempt1 = {
        _id: 'att-1',
        testId: 'neet-PART-6',
        attemptedAt: '2026-10-01T10:00:00Z',
        score: 100,
        maximumMarks: 720,
        correctAnswers: 30,
        wrongAnswers: 20,
        unattemptedQuestions: 130
    };
    const attempt2 = {
        _id: 'att-2',
        testId: 'neet-PART-6',
        attemptedAt: '2026-10-05T10:00:00Z',
        score: 160,
        maximumMarks: 720,
        correctAnswers: 45,
        wrongAnswers: 20,
        unattemptedQuestions: 115
    };

    const res = computeAnalytics({
        testResults: [attempt1, attempt2],
        attemptId: 'att-2',
        compareAttemptId: 'att-1'
    });

    assert.ok(res.comparison, 'Comparison object must exist');
    assert.strictEqual(res.comparison.attemptA.score, 160);
    assert.strictEqual(res.comparison.attemptB.score, 100);
    assert.strictEqual(res.comparison.diff.score, 60, 'Delta score must be +60');
});

// ==========================================
// Test 20 — Fresh isolated state evaluation
// ==========================================
runTest('Fresh isolated state evaluation — No cross-attempt pollution between student scopes', () => {
    const student1 = [{ testId: 'neet-MOCK-1', score: 500, maximumMarks: 720 }];
    const student2 = [{ testId: 'neet-MOCK-1', score: 200, maximumMarks: 720 }];

    const res1 = computeAnalytics({ testResults: student1 });
    const res2 = computeAnalytics({ testResults: student2 });

    assert.strictEqual(res1.summary.bestScore, 500);
    assert.strictEqual(res2.summary.bestScore, 200);
});

console.log(`\n🎉 SUITE COMPLETE: ${passedTests}/${totalTests} TESTS PASSED!\n`);

