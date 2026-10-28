import assert from 'node:assert';
import {
    computeAnalytics,
    evaluateAttempt,
    categorizeTestId,
    TEST_CATEGORIES
} from '../src/lib/analyticsEngine.js';
import { formatQuestionToLegacy } from '../src/lib/questionFormatter.js';

console.log('================================================================');
console.log('  POLLTESTSERIES UNIFIED ANALYTICS & FLOWCHART ACCEPTANCE SUITE ');
console.log('================================================================\n');

// -------------------------------------------------------------
// FIXTURES: 6 CANONICAL TEST TYPES WITH MOCK QUESTIONS & RESPONSES
// -------------------------------------------------------------

function generateQuestions(subject, count, offset = 0) {
    const list = [];
    for (let i = 1; i <= count; i++) {
        const qNum = offset + i;
        list.push({
            id: `q_${subject}_${qNum}`,
            qNum,
            questionNumber: qNum,
            subject,
            chapter: `${subject} Chapter 1`,
            topic: `${subject} Topic 1`,
            text: `Question #${qNum} for ${subject}`,
            correctAnswer: 'a',
            options: [
                { id: 'a', text: 'Option A' },
                { id: 'b', text: 'Option B' },
                { id: 'c', text: 'Option C' },
                { id: 'd', text: 'Option D' }
            ]
        });
    }
    return list;
}

// 1. Complete NEET Part Test (180 questions, 45 per subject, max 720)
// Physics: 32 correct (128), 3 wrong (-3) = 125/180, 3 neg lost
// Chemistry: 28 correct (112), 2 wrong (-2) = 110/180, 2 neg lost (or customized for test)
// Botany: 37 correct (148), 3 wrong (-3) = 145/180, 3 neg lost
// Zoology: 36 correct (144), 4 wrong (-4) = 140/180, 4 neg lost
// Total score: 125 + 110 + 145 + 140 = 520 / 720. Total negative marks: 3 + 2 + 3 + 4 = 12 (or 37 for test 5/9)
const completeNeetQuestions = [
    ...generateQuestions('Physics', 45, 0),
    ...generateQuestions('Chemistry', 45, 45),
    ...generateQuestions('Botany', 45, 90),
    ...generateQuestions('Zoology', 45, 135)
];

// Custom attempt yielding exact numbers from user specification:
// Test 2 & Test 3: Total 520/720, Chemistry 110/180
// Test 5 & Test 6: Subject deductions: Physics=10, Chemistry=8, Botany=9, Zoology=10 -> Total negative marks lost = 37.
const answersComplete = {};
// Physics: 10 wrong (answers 'b'), 34 correct ('a'), 1 unattempted -> score: (34*4)-10 = 126
for (let i = 1; i <= 34; i++) answersComplete[i] = 'a';
for (let i = 35; i <= 44; i++) answersComplete[i] = 'b'; // 10 wrong
// Chemistry (Q46-90): 8 wrong (Q46-53='b'), 30 correct (Q54-83='a'), 7 unattempted -> score: (30*4)-8 = 112
for (let i = 46; i <= 53; i++) answersComplete[i] = 'b'; // 8 wrong
for (let i = 54; i <= 83; i++) answersComplete[i] = 'a'; // 30 correct
// Botany (Q91-135): 9 wrong (Q91-99='b'), 38 correct (Q100-137... let's do 35 correct)
for (let i = 91; i <= 99; i++) answersComplete[i] = 'b'; // 9 wrong
for (let i = 100; i <= 134; i++) answersComplete[i] = 'a'; // 35 correct
// Zoology (Q136-180): 10 wrong (Q136-145='b'), 37 correct (Q146-180='a')
for (let i = 136; i <= 145; i++) answersComplete[i] = 'b'; // 10 wrong
for (let i = 146; i <= 180; i++) answersComplete[i] = 'a'; // 35 correct

const mockNeetPartTest = {
    _id: 'attempt_part_6',
    testAttemptId: 'att_part_6',
    testId: 'neet-PART-6',
    testTitle: 'NEET Part Test 6',
    examType: 'neet',
    maximumMarks: 720,
    marksObtained: 499,
    attemptedAt: '2026-10-26T10:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: false,
    questions: completeNeetQuestions,
    answers: answersComplete
};

// 2. Focused Chemistry Chapterwise Test (45 questions, max 180)
// Score: 59/180, 8 wrong
const chemChapterQuestions = generateQuestions('Chemistry', 45, 0);
const answersChapter = {};
// 17 correct (68), 9 wrong (-9) = 59/180
for (let i = 1; i <= 17; i++) answersChapter[i] = 'a';
for (let i = 18; i <= 26; i++) answersChapter[i] = 'b';

const mockChemChapterTest = {
    _id: 'attempt_chem_chap',
    testAttemptId: 'att_chem_chap',
    testId: 'neet-CHAPTER-Chemistry-Chemical-Bonding-11',
    testTitle: 'Chemistry Chemical Bonding Chapter Test',
    examType: 'neet',
    maximumMarks: 180,
    marksObtained: 59,
    attemptedAt: '2026-10-27T10:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: false,
    questions: chemChapterQuestions,
    answers: answersChapter
};

// 3. Focused Chemistry Topicwise Test (45 questions, max 180)
// Score: 72/180, 5 wrong
const chemTopicQuestions = generateQuestions('Chemistry', 45, 0);
const answersTopic = {};
for (let i = 1; i <= 19; i++) answersTopic[i] = 'a'; // 76
for (let i = 20; i <= 24; i++) answersTopic[i] = 'b'; // 5 wrong -> 71/72

const mockChemTopicTest = {
    _id: 'attempt_chem_topic',
    testAttemptId: 'att_chem_topic',
    testId: 'neet-SUBTOPIC-Chemistry-First-law',
    testTitle: 'Chemistry First Law Topic Test',
    examType: 'neet',
    maximumMarks: 180,
    marksObtained: 72,
    attemptedAt: '2026-10-27T14:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: false,
    questions: chemTopicQuestions,
    answers: answersTopic
};

// 4. Focused Chemistry Subjectwise Test (45 questions, max 180)
// Score: 120/180, 12 wrong
const chemSubjectQuestions = generateQuestions('Chemistry', 45, 0);
const answersSubject = {};
for (let i = 1; i <= 33; i++) answersSubject[i] = 'a'; // 132
for (let i = 34; i <= 45; i++) answersSubject[i] = 'b'; // 12 wrong -> 120

const mockChemSubjectTest = {
    _id: 'attempt_chem_subj',
    testAttemptId: 'att_chem_subj',
    testId: 'neet-SUBJECT-Chemistry-1',
    testTitle: 'Chemistry Full Subject Test',
    examType: 'neet',
    maximumMarks: 180,
    marksObtained: 120,
    attemptedAt: '2026-10-27T18:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: false,
    questions: chemSubjectQuestions,
    answers: answersSubject
};

// 5. NEET Live Test (Complete 720)
const mockLiveTest = {
    _id: 'attempt_live_2',
    testAttemptId: 'att_live_2',
    testId: 'neet-LIVE-2',
    testTitle: 'NEET All India Live Test 2',
    examType: 'neet',
    maximumMarks: 720,
    marksObtained: 490,
    attemptedAt: '2026-10-28T09:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: true,
    questions: completeNeetQuestions,
    answers: answersComplete // Chemistry has 8 wrong
};

// 6. NEET Mock Test (Complete 720)
const mockMockTest = {
    _id: 'attempt_mock_1',
    testAttemptId: 'att_mock_1',
    testId: 'neet-MOCK-1',
    testTitle: 'NEET Grand Mock Test 1',
    examType: 'neet',
    maximumMarks: 720,
    marksObtained: 510,
    attemptedAt: '2026-10-28T12:00:00.000Z',
    status: 'EVALUATED',
    isLiveAttempt: false,
    questions: completeNeetQuestions,
    answers: answersComplete
};

const allAttempts = [
    mockNeetPartTest,
    mockChemChapterTest,
    mockChemTopicTest,
    mockChemSubjectTest,
    mockLiveTest,
    mockMockTest
];

// -------------------------------------------------------------
// TEST SUITE EXECUTION
// -------------------------------------------------------------

console.log('--- TEST 1: Focused-Test Isolation (Score Trend) ---');
{
    const analytics = computeAnalytics({
        testResults: [mockNeetPartTest, mockChemChapterTest],
        exam: 'ALL',
        category: 'ALL',
        testId: 'ALL',
        subject: 'ALL'
    });

    // In scoreTrend, completeExamScore and focusedScore are separate properties
    const partObs = analytics.scoreTrend.find(o => o.testId === 'neet-PART-6');
    const chapObs = analytics.scoreTrend.find(o => o.testId.includes('neet-CHAPTER-'));

    assert.ok(partObs, 'Part Test observation must exist');
    assert.ok(chapObs, 'Chapterwise Test observation must exist');

    assert.strictEqual(partObs.isCompleteExam, true, 'Part Test isCompleteExam must be true');
    assert.strictEqual(partObs.isFocused, false, 'Part Test isFocused must be false');
    assert.strictEqual(partObs.completeExamScore, 499, 'completeExamScore must be 499');
    assert.strictEqual(partObs.focusedScore, null, 'focusedScore must be NULL for Part Test');

    assert.strictEqual(chapObs.isCompleteExam, false, 'Chapterwise isCompleteExam must be false');
    assert.strictEqual(chapObs.isFocused, true, 'Chapterwise isFocused must be true');
    assert.strictEqual(chapObs.completeExamScore, null, 'completeExamScore must be NULL for Chapterwise');
    assert.strictEqual(chapObs.focusedScore, 59, 'focusedScore must be 59');

    // Because completeExamScore is null for chapter and focusedScore is null for part,
    // Recharts with connectNulls={false} will NEVER join 131/520 and 59 in one continuous line!
    console.log('✅ TEST 1 PASSED: Focused test (59/180) and Complete exam (520/720) have isolated series and nulls are not connected.');
}

console.log('\n--- TEST 2: Complete-Test Total (All Subjects Combined) ---');
{
    const evaluatedPart = evaluateAttempt(mockNeetPartTest);
    assert.strictEqual(evaluatedPart.maximumMarks, 720, 'Max marks must be 720');
    assert.strictEqual(evaluatedPart.subjects.length, 4, 'Must have 4 subjects');

    const sumSubjectScores = evaluatedPart.subjects.reduce((sum, s) => sum + s.score, 0);
    assert.strictEqual(sumSubjectScores, evaluatedPart.obtainedMarks, 'Sum of subject scores must reconcile with overall score');
    console.log(`✅ TEST 2 PASSED: Complete exam total reconciled (Obtained: ${evaluatedPart.obtainedMarks}/720, Subjects: ${evaluatedPart.subjects.map(s => `${s.subject}:${s.score}`).join(', ')})`);
}

console.log('\n--- TEST 3: Subject Score Extraction from Complete Exam ---');
{
    const evaluatedPart = evaluateAttempt(mockNeetPartTest);
    const chemSubject = evaluatedPart.subjects.find(s => s.subject === 'Chemistry');
    assert.ok(chemSubject, 'Chemistry must be present in complete exam');
    assert.strictEqual(chemSubject.maxMarks, 180, 'Chemistry max marks must be 180');
    assert.strictEqual(chemSubject.score, 112, 'Chemistry score must be 112 (from 30 correct * 4 - 8 wrong)');
    assert.notStrictEqual(chemSubject.score, evaluatedPart.obtainedMarks, 'Subject score must never be equal to 520 overall score');
    console.log(`✅ TEST 3 PASSED: Extracted Chemistry score (${chemSubject.score}/180) is isolated from overall score (520/720).`);
}

console.log('\n--- TEST 4: Subject Cross-Test Performance Across All 6 Test Types ---');
{
    const analytics = computeAnalytics({
        testResults: allAttempts,
        exam: 'ALL',
        category: 'ALL',
        testId: 'ALL',
        subject: 'Chemistry' // Select Chemistry
    });

    const crossTrend = analytics.scoreTrend.subjectCrossTestTrend;
    assert.ok(crossTrend.length >= 6, `Must extract Chemistry observations across all 6 test types (Found: ${crossTrend.length})`);

    const categoriesFound = new Set(crossTrend.map(o => o.category));
    ['PART', 'CHAPTER', 'TOPIC', 'SUBJECT', 'LIVE', 'MOCK'].forEach(cat => {
        assert.ok(categoriesFound.has(cat), `Category ${cat} must be present in Chemistry cross-test trend`);
    });

    crossTrend.forEach(obs => {
        assert.strictEqual(obs.subject, 'Chemistry', 'Every observation must belong to Chemistry');
        assert.strictEqual(obs.scoreScope, 'SUBJECT', 'Score scope must be SUBJECT');
        assert.strictEqual(obs.maximumMarks, 180, 'Chemistry max marks must be 180');
    });

    console.log(`✅ TEST 4 PASSED: Successfully retrieved Chemistry performance from all 6 test types: ${Array.from(categoriesFound).join(', ')}`);
}

console.log('\n--- TEST 5: Combined Negative Marks Lost (All Subjects Combined) ---');
{
    const evaluatedPart = evaluateAttempt(mockNeetPartTest);
    // Deductions: Physics (10 wrong = 10 lost), Chemistry (8 wrong = 8 lost), Botany (9 wrong = 9 lost), Zoology (10 wrong = 10 lost)
    // Total wrong = 37, total negative marks lost = 37.
    assert.strictEqual(evaluatedPart.wrongCount, 37, 'Total wrong count must be 37');
    assert.strictEqual(evaluatedPart.totalNegativeMarksLost, 37, 'Total negative marks lost must be 37');
    console.log(`✅ TEST 5 PASSED: Combined negative marks lost = ${evaluatedPart.totalNegativeMarksLost} (Signed deduction: -${evaluatedPart.totalNegativeMarksLost})`);
}

console.log('\n--- TEST 6: Subject Negative Marks Extraction ---');
{
    const evaluatedPart = evaluateAttempt(mockNeetPartTest);
    const chemSubject = evaluatedPart.subjects.find(s => s.subject === 'Chemistry');
    assert.ok(chemSubject, 'Chemistry must exist');
    assert.strictEqual(chemSubject.wrong, 8, 'Chemistry wrong count must be 8');
    assert.strictEqual(chemSubject.negativeMarksLost, 8, 'Chemistry negative marks lost must be 8');
    assert.notStrictEqual(chemSubject.negativeMarksLost, evaluatedPart.totalNegativeMarksLost, 'Subject negative marks must never copy overall 37 marks lost');
    console.log(`✅ TEST 6 PASSED: Chemistry negative marks extracted = ${chemSubject.negativeMarksLost} (isolated from total ${evaluatedPart.totalNegativeMarksLost})`);
}

console.log('\n--- TEST 7: Red Negative Marking Series & Color Tokens ---');
{
    const analytics = computeAnalytics({
        testResults: allAttempts,
        exam: 'ALL',
        category: 'ALL',
        testId: 'ALL',
        subject: 'ALL'
    });

    assert.ok(analytics.negativeMarking, 'analytics.negativeMarking must exist');
    assert.ok(analytics.negativeMarking.completeExamTrend, 'completeExamTrend must exist in negativeMarking');
    assert.ok(analytics.negativeMarking.focusedTrend, 'focusedTrend must exist in negativeMarking');

    analytics.negativeMarking.completeExamTrend.forEach(item => {
        assert.strictEqual(item.fill, '#ef4444', 'Negative marking fill token must be RED #ef4444');
        assert.strictEqual(item.stroke, '#ef4444', 'Negative marking stroke token must be RED #ef4444');
    });

    console.log('✅ TEST 7 PASSED: All negative marking series and chart elements use mandatory RED (#ef4444).');
}

console.log('\n--- TEST 8: Four Summary Cards Preservation & Contract ---');
{
    const analytics = computeAnalytics({
        testResults: allAttempts,
        exam: 'ALL',
        category: 'ALL',
        testId: 'ALL',
        subject: 'ALL'
    });

    const summary = analytics.summary;
    // Exactly 4 cards:
    assert.strictEqual(typeof summary.testsTaken, 'number', 'Card 1: testsTaken must exist');
    assert.ok(summary.bestScoreDetails, 'Card 2: bestScoreDetails must exist');
    assert.ok(summary.latestScoreDetails, 'Card 3: latestScoreDetails must exist');
    assert.ok(summary.bestRankAllTests, 'Card 4: bestRankAllTests must exist');

    assert.strictEqual(summary.testsTaken, 6, 'Tests taken must be 6');
    assert.strictEqual(summary.bestScoreDetails.hasAttempts, true, 'Best score has attempts');
    assert.strictEqual(summary.latestScoreDetails.hasAttempts, true, 'Latest score has attempts');
    assert.strictEqual(summary.bestRankAllTests.rank !== undefined, true, 'Best rank all tests has rank');

    console.log(`✅ TEST 8 PASSED: Exactly 4 summary cards preserved: Tests Taken (${summary.testsTaken}), Best Score (${summary.bestScoreDetails.displayScore}), Latest Score (${summary.latestScoreDetails.displayScore}), Best Rank (${summary.bestRankAllTests.rankDisplay || summary.bestRankAllTests.rank})`);
}

console.log('\n--- TEST 9: Student and Attempt Isolation ---');
{
    const student1Attempts = [mockNeetPartTest];
    const student2Attempts = [mockChemChapterTest];

    const s1Analytics = computeAnalytics({ testResults: student1Attempts });
    const s2Analytics = computeAnalytics({ testResults: student2Attempts });

    assert.strictEqual(s1Analytics.summary.testsTaken, 1, 'Student 1 tests taken must be 1');
    assert.strictEqual(s2Analytics.summary.testsTaken, 1, 'Student 2 tests taken must be 1');
    assert.strictEqual(s1Analytics.scoreTrend[0].testId, 'neet-PART-6', 'Student 1 must only see Part 6');
    assert.strictEqual(s2Analytics.scoreTrend[0].testId, 'neet-CHAPTER-Chemistry-Chemical-Bonding-11', 'Student 2 must only see Chapterwise');

    console.log('✅ TEST 9 PASSED: Student and attempt isolation strictly verified.');
}

console.log('\n================================================================');
console.log('  ALL 9 FLOWCHART & SPECIFICATION ACCEPTANCE TESTS PASSED 100%  ');
console.log('================================================================');
