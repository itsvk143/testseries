import { computeAnalytics } from '../src/lib/analyticsEngine.js';
import assert from 'assert';

console.log('🧪 Starting Verification Suite for Exactly Four Summary Cards...\n');

// -------------------------------------------------------------
// Test 1: Empty Test Results Handling
// -------------------------------------------------------------
console.log('▶ Test 1: Empty Test Results Scope');
const emptyAnalytics = computeAnalytics({ testResults: [] });
const summaryEmpty = emptyAnalytics.summary;

assert.strictEqual(summaryEmpty.testsTaken, 0, 'testsTaken should be 0');
assert.strictEqual(summaryEmpty.bestScoreDetails.displayScore, 'N/A', 'bestScore should be N/A');
assert.strictEqual(summaryEmpty.latestScoreDetails.displayScore, 'N/A', 'latestScore should be N/A');
assert.strictEqual(summaryEmpty.bestRankAllTests.rank, 'N/A', 'bestRank should be N/A');
assert.strictEqual(summaryEmpty.bestRankAllTests.rankDisplay, 'N/A', 'bestRankDisplay should be N/A');
console.log('  ✔ Empty results properly display N/A and 0 without crashing or inventing data.');

// -------------------------------------------------------------
// Test 2: Card 1 — Tests Taken & Attempt Deduplication
// -------------------------------------------------------------
console.log('\n▶ Test 2: Card 1 — Tests Taken & Attempt Deduplication');
const mockAttempts = [
    {
        _id: 'att-1',
        testId: 'neet-MOCK-1',
        examType: 'neet',
        score: 550,
        maximumMarks: 720,
        totalMarks: 720,
        attemptedAt: '2026-10-10T10:00:00Z',
        status: 'SUBMITTED',
        rank: 5,
        totalStudents: 100,
        testTitle: 'NEET Full Mock 1'
    },
    // Duplicate record of att-1
    {
        _id: 'att-1',
        testId: 'neet-MOCK-1',
        examType: 'neet',
        score: 550,
        maximumMarks: 720,
        totalMarks: 720,
        attemptedAt: '2026-10-10T10:00:00Z',
        status: 'SUBMITTED',
        rank: 5,
        totalStudents: 100,
        testTitle: 'NEET Full Mock 1'
    },
    // Reset attempt (must be excluded)
    {
        _id: 'att-reset',
        testId: 'neet-MOCK-1',
        examType: 'neet',
        score: 200,
        maximumMarks: 720,
        status: 'RESET',
        isReset: true,
        rank: 99
    },
    // Deleted attempt (must be excluded)
    {
        _id: 'att-del',
        testId: 'neet-MOCK-1',
        examType: 'neet',
        score: 100,
        maximumMarks: 720,
        status: 'DELETED',
        isDeleted: true,
        rank: 150
    },
    // Part Test (Different max marks: 180)
    {
        _id: 'att-part-1',
        testId: 'neet-PART-1',
        examType: 'neet',
        score: 170, // 170 / 180 = 94.4%
        maximumMarks: 180,
        totalMarks: 180,
        attemptedAt: '2026-10-15T10:00:00Z',
        status: 'SUBMITTED',
        rank: 2,
        totalStudents: 80,
        testTitle: 'NEET Part Test 1'
    },
    // JEE Main Test (Different category and exam: 300 marks)
    {
        _id: 'att-jee-1',
        testId: 'jee-MOCK-1',
        examType: 'jee-mains',
        score: 260, // 260 / 300 = 86.7%
        maximumMarks: 300,
        totalMarks: 300,
        attemptedAt: '2026-10-20T10:00:00Z',
        status: 'SUBMITTED',
        rank: 1, // Best rank #1
        totalStudents: 245,
        testTitle: 'JEE Main Full Test 1'
    }
];

const analyticsAll = computeAnalytics({ testResults: mockAttempts });
assert.strictEqual(analyticsAll.summary.testsTaken, 3, 'Should have exactly 3 deduplicated, active attempts');
console.log('  ✔ Deduplication and exclusion of reset/deleted attempts verified (3 active attempts).');

// -------------------------------------------------------------
// Test 3: Card 2 — Best Score with Different Maximum Marks
// -------------------------------------------------------------
console.log('\n▶ Test 3: Card 2 — Best Score Across Mixed Maximum Marks');
// In analyticsAll, we have:
// att-1: 550/720 = 76.4%
// att-part-1: 170/180 = 94.4%
// att-jee-1: 260/300 = 86.7%
// Raw 550 is larger than 170, but 170/180 (94.4%) is mathematically the best performance!
const bestDetails = analyticsAll.summary.bestScoreDetails;
assert.strictEqual(bestDetails.score, 170, 'Best score should be 170 based on highest percentage');
assert.strictEqual(bestDetails.maximumMarks, 180, 'Max marks of best attempt should be 180');
assert.strictEqual(bestDetails.percentage, 94.4, 'Best percentage should be 94.4%');
assert.strictEqual(bestDetails.testTitle, 'NEET Part Test 1');
console.log(`  ✔ Correctly selected best score: ${bestDetails.displayScore} (${bestDetails.displaySub}).`);

// Now filter specifically to NEET Full tests only (uniform 720 marks)
const analyticsNeetFull = computeAnalytics({
    testResults: mockAttempts,
    exam: 'neet',
    category: 'FULL'
});
const bestNeetFull = analyticsNeetFull.summary.bestScoreDetails;
assert.strictEqual(bestNeetFull.score, 550, 'Best score in NEET Full should be 550');
assert.strictEqual(bestNeetFull.maximumMarks, 720, 'Max marks in NEET Full should be 720');
console.log(`  ✔ Uniform max marks evaluated accurately: ${bestNeetFull.displayScore} (${bestNeetFull.displaySub}).`);

// -------------------------------------------------------------
// Test 4: Card 3 — Latest Score Determined Strictly by Timestamp
// -------------------------------------------------------------
console.log('\n▶ Test 4: Card 3 — Latest Score by Authoritative Timestamp');
// Chronologically:
// 2026-10-10: neet-MOCK-1 (550/720)
// 2026-10-15: neet-PART-1 (170/180)
// 2026-10-20: jee-MOCK-1 (260/300) -> Most recent!
const latestAll = analyticsAll.summary.latestScoreDetails;
assert.strictEqual(latestAll.score, 260, 'Latest score should be 260');
assert.strictEqual(latestAll.maximumMarks, 300, 'Latest max marks should be 300');
assert.strictEqual(latestAll.testTitle, 'JEE Main Full Test 1');
console.log(`  ✔ Latest score correctly identified: ${latestAll.displayScore} (${latestAll.displaySub}).`);

// Filter to NEET only (latest NEET attempt was 2026-10-15: neet-PART-1)
const analyticsNeet = computeAnalytics({ testResults: mockAttempts, exam: 'neet' });
const latestNeet = analyticsNeet.summary.latestScoreDetails;
assert.strictEqual(latestNeet.score, 170, 'Latest NEET score should be 170');
assert.strictEqual(latestNeet.testTitle, 'NEET Part Test 1');
console.log(`  ✔ Latest score responds to scope filter: ${latestNeet.displayScore} (${latestNeet.displaySub}).`);

// -------------------------------------------------------------
// Test 5: Card 4 — Best Rank (All Tests) Independence & Tie-Breaking
// -------------------------------------------------------------
console.log('\n▶ Test 5: Card 4 — Best Rank (All Tests) Scope Independence & Tie-Breaking');
// Even when filtering by exam='neet' and category='PART':
// Best Rank (All Tests) MUST remain independent and consider all tests of the student!
// In our mockAttempts, rank #1 was achieved in 'JEE Main Full Test 1' (245 students).
const analyticsFiltered = computeAnalytics({
    testResults: mockAttempts,
    exam: 'neet',
    category: 'PART'
});

const bestRankCard = analyticsFiltered.summary.bestRankAllTests;
assert.strictEqual(bestRankCard.rank, 1, 'Best Rank must be 1 across all tests');
assert.strictEqual(bestRankCard.rankDisplay, '#1');
assert.strictEqual(bestRankCard.testTitle, 'JEE Main Full Test 1');
assert.strictEqual(bestRankCard.totalStudents, 245);
console.log(`  ✔ Card 4 displays: ${bestRankCard.rankDisplay} | Best Rank Achieved | ${bestRankCard.testTitle} · ${bestRankCard.totalStudents} students.`);

// Test tie-breaking: Two tests with rank #1, one submitted more recently
const mockTieAttempts = [
    {
        _id: 'tie-1',
        testId: 'neet-PART-1',
        attemptedAt: '2026-09-01T10:00:00Z',
        rank: 1,
        totalStudents: 150,
        testTitle: 'NEET Part Test 1'
    },
    {
        _id: 'tie-2',
        testId: 'neet-PART-6',
        attemptedAt: '2026-10-01T10:00:00Z', // More recent!
        rank: 1,
        totalStudents: 245,
        testTitle: 'NEET Part Test 6'
    }
];
const analyticsTie = computeAnalytics({ testResults: mockTieAttempts });
assert.strictEqual(analyticsTie.summary.bestRankAllTests.testTitle, 'NEET Part Test 6', 'Tie-break should pick most recent test');
assert.strictEqual(analyticsTie.summary.bestRankAllTests.totalStudents, 245);
console.log('  ✔ Tie-break picks most recent qualifying test as specified.');

// -------------------------------------------------------------
// Test 6: Underlying Analytics & Graphs Data Integrity
// -------------------------------------------------------------
console.log('\n▶ Test 6: Preservation of Underlying Calculations & Charts');
assert(analyticsAll.scoreTrend && analyticsAll.scoreTrend.length === 3, 'Score trend should be preserved');
assert(typeof analyticsAll.summary.averageScore === 'number', 'Average score calculation preserved for charts');
assert(typeof analyticsAll.summary.totalNegativeMarksLost === 'number', 'Negative marks calculation preserved for charts');
assert(typeof analyticsAll.summary.averageAccuracy === 'number', 'Accuracy calculation preserved');
console.log('  ✔ Underlying calculations and charts data fully intact.');

console.log('\n=============================================================');
console.log('🎉 ALL 6 TESTS FOR EXACTLY FOUR SUMMARY CARDS PASSED 100%!');
console.log('=============================================================\n');
