/**
 * Canonical Ranking Engine for PollTestSeries.
 * Computes exact test rankings using standard competition ranking (1, 2, 2, 4).
 * Ensures each student contributes only ONCE to a test leaderboard,
 * strictly excluding RESET and DELETED attempts.
 */

/**
 * Computes the authoritative leaderboard for a specific testId.
 * 
 * @param {import('mongodb').Db} db
 * @param {string} testId
 * @param {Object} [options]
 * @param {boolean} [options.liveOnly=false] - Filter only live attempts
 * @returns {Promise<{ leaderboard: Array, totalStudents: number, rankMap: Map<string, { rank: number, totalStudents: number, score: number }> }>}
 */
export async function getTestLeaderboard(db, testId, options = {}) {
    if (!db || !testId) {
        return { leaderboard: [], totalStudents: 0, rankMap: new Map() };
    }

    const { liveOnly = false } = options;

    const matchFilter = {
        testId: testId,
        status: { $nin: ['RESET', 'DELETED'] },
        isReset: { $ne: true },
        isDeleted: { $ne: true }
    };

    if (liveOnly) {
        matchFilter.isLiveAttempt = true;
    }

    // Retrieve all active attempts for this exact test
    const rawAttempts = await db.collection('testResults')
        .find(matchFilter, {
            projection: {
                _id: 1,
                userEmail: 1,
                userName: 1,
                testId: 1,
                score: 1,
                marksObtained: 1,
                timeTaken: 1,
                attemptedAt: 1,
                isLiveAttempt: 1,
                status: 1
            }
        })
        .sort({ attemptedAt: -1 })
        .toArray();

    if (!rawAttempts || rawAttempts.length === 0) {
        return { leaderboard: [], totalStudents: 0, rankMap: new Map() };
    }

    // Deduplicate: Each eligible student contributes only ONCE per test.
    // Pick the student's latest active attempt.
    const studentAttemptsMap = new Map();
    for (const att of rawAttempts) {
        const email = (att.userEmail || '').toLowerCase().trim();
        if (!email) continue;
        const existing = studentAttemptsMap.get(email);
        const attDate = new Date(att.attemptedAt || 0);

        if (!existing || attDate > new Date(existing.attemptedAt || 0)) {
            const finalScore = typeof att.marksObtained === 'number'
                ? att.marksObtained
                : (typeof att.score === 'number' ? att.score : 0);
            studentAttemptsMap.set(email, {
                ...att,
                userEmail: email,
                score: finalScore,
                timeTaken: att.timeTaken || 0,
                attemptedAt: attDate
            });
        }
    }

    const eligibleAttempts = Array.from(studentAttemptsMap.values());
    const totalStudents = eligibleAttempts.length;

    // Sort: Primary by score descending, Secondary by timeTaken ascending (faster completion)
    eligibleAttempts.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        if (a.timeTaken !== b.timeTaken) {
            return a.timeTaken - b.timeTaken;
        }
        return new Date(a.attemptedAt) - new Date(b.attemptedAt);
    });

    // Assign Standard Competition Ranking (1, 2, 2, 4):
    // Equal scores share the same rank, and subsequent rank skips positions.
    const rankMap = new Map();
    const leaderboard = [];

    let currentRank = 1;
    for (let i = 0; i < eligibleAttempts.length; i++) {
        const item = eligibleAttempts[i];
        if (i > 0 && item.score < eligibleAttempts[i - 1].score) {
            // Next rank skips positions to match 1-based index (e.g. index 3 -> rank 4)
            currentRank = i + 1;
        }

        const rankEntry = {
            userEmail: item.userEmail,
            userName: item.userName || 'Student',
            score: item.score,
            timeTaken: item.timeTaken,
            rank: currentRank,
            totalStudents,
            attemptedAt: item.attemptedAt
        };

        leaderboard.push(rankEntry);
        rankMap.set(item.userEmail, rankEntry);
    }

    return { leaderboard, totalStudents, rankMap };
}

/**
 * Calculates global and live ranks for a student in a test.
 * 
 * @param {import('mongodb').Db} db
 * @param {string} testId
 * @param {string} userEmail
 * @param {number} [userScore]
 * @returns {Promise<{ rank: number|string, totalStudents: number, globalRank: number|string, totalGlobalStudents: number, liveRank: number|string, totalLiveStudents: number }>}
 */
export async function calculateStudentRank(db, testId, userEmail, userScore) {
    const email = (userEmail || '').toLowerCase().trim();
    if (!testId || !email) {
        return {
            rank: 'N/A',
            totalStudents: 0,
            globalRank: 'N/A',
            totalGlobalStudents: 0,
            liveRank: 'N/A',
            totalLiveStudents: 0
        };
    }

    const [globalData, liveData] = await Promise.all([
        getTestLeaderboard(db, testId, { liveOnly: false }),
        getTestLeaderboard(db, testId, { liveOnly: true })
    ]);

    const globalEntry = globalData.rankMap.get(email);
    const liveEntry = liveData.rankMap.get(email);

    let globalRank = globalEntry?.rank;
    let liveRank = liveEntry?.rank;

    // If score is provided and student not yet in leaderboard (e.g. preview calculation)
    if (!globalRank && typeof userScore === 'number' && globalData.leaderboard.length > 0) {
        let betterScores = 0;
        for (const item of globalData.leaderboard) {
            if (item.score > userScore) betterScores++;
        }
        globalRank = betterScores + 1;
    }

    const totalGlobal = globalData.totalStudents;
    const totalLive = liveData.totalStudents;

    return {
        rank: globalRank ?? (totalGlobal > 0 ? 1 : 'N/A'),
        totalStudents: totalGlobal,
        globalRank: globalRank ?? (totalGlobal > 0 ? 1 : 'N/A'),
        totalGlobalStudents: totalGlobal,
        liveRank: liveRank ?? (totalLive > 0 ? 1 : 'N/A'),
        totalLiveStudents: totalLive
    };
}
