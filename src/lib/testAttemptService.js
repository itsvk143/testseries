import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { logAdminAudit } from '@/lib/authorization';

/**
 * Normalizes an ID into a MongoDB query condition (ObjectId or string).
 */
function toIdQuery(id) {
    if (!id) return null;
    if (typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id)) {
        return new ObjectId(id);
    }
    return id;
}

/**
 * Resolves a student by ID or email.
 */
export async function getStudent(db, studentId) {
    if (!studentId) return null;
    let query = {};
    if (/^[0-9a-fA-F]{24}$/.test(studentId)) {
        query = { _id: new ObjectId(studentId) };
    } else {
        query = { email: { $regex: new RegExp(`^${studentId}$`, 'i') } };
    }
    return await db.collection('users').findOne(query);
}

/**
 * Resolves a test attempt by ID (ObjectId or testAttemptId) and verifies student ownership.
 */
export async function getAttemptForStudent(db, student, attemptId) {
    if (!student || !attemptId) return null;

    const queries = [];
    if (/^[0-9a-fA-F]{24}$/.test(attemptId)) {
        queries.push({ _id: new ObjectId(attemptId) });
    }
    queries.push({ testAttemptId: attemptId });

    const emailRegex = new RegExp(`^${student.email}$`, 'i');

    const attempt = await db.collection('testResults').findOne({
        $and: [
            { $or: queries },
            {
                $or: [
                    { userEmail: { $regex: emailRegex } },
                    { userId: student._id?.toString() }
                ]
            }
        ]
    });

    return attempt;
}

/**
/**
 * Resets a student's test attempt.
 * - Clears accidental attempt from testResults completely so the student can start fresh
 * - Cleans up active testSessions and attempt testViolations
 * - Logs audit trail in auditLogs with prior score and reason
 * - Preserves underlying central questions and test definitions
 */
export async function resetTestAttempt({ studentId, attemptId, adminEmail, reason = '' }) {
    const client = await clientPromise;
    const db = client.db('testseries');

    const student = await getStudent(db, studentId);
    if (!student) {
        return { success: false, status: 404, error: 'Student not found.' };
    }

    const attempt = await getAttemptForStudent(db, student, attemptId);
    if (!attempt) {
        return { success: false, status: 404, error: 'Test attempt not found for this student.' };
    }

    // Record in Audit Log before removing attempt
    await logAdminAudit(db, {
        action: 'RESET_TEST_ATTEMPT',
        studentId: student._id,
        adminId: adminEmail || 'Admin',
        prevStatus: attempt.status || 'SUBMITTED',
        newStatus: 'RESET_CLEARED',
        details: {
            attemptId: attempt._id.toString(),
            testAttemptId: attempt.testAttemptId || null,
            testId: attempt.testId,
            examType: attempt.examType,
            studentEmail: student.email,
            studentName: student.name,
            originalScore: attempt.score,
            totalMarks: attempt.totalMarks,
            reason: reason || 'Accidentally submitted attempt reset by admin'
        }
    });

    // Permanently delete the test attempt from testResults so student can start completely fresh
    await db.collection('testResults').deleteOne({ _id: attempt._id });

    // Clean up any in-progress testSession and testViolations for this test so retake is clean
    const emailRegex = new RegExp(`^${student.email}$`, 'i');
    try {
        await Promise.all([
            db.collection('testSessions').deleteMany({
                userEmail: { $regex: emailRegex },
                testId: attempt.testId
            }),
            db.collection('testViolations').deleteMany({
                $or: [
                    ...(attempt.testAttemptId ? [{ testAttemptId: attempt.testAttemptId }] : []),
                    { userEmail: { $regex: emailRegex }, testId: attempt.testId }
                ]
            })
        ]);
    } catch (e) {
        console.warn('Could not clean up testSession/testViolations for reset attempt:', e);
    }

    return {
        success: true,
        status: 200,
        message: 'Test attempt reset successfully. The attempt has been cleared and the student can attempt the test again.',
        attemptId: attempt._id.toString()
    };
}

/**
 * Permanently deletes a student's test attempt.
 * - Completely removes attempt document from testResults
 * - Cleans up active testSessions and testViolations for this test attempt
 * - Logs audit trail in auditLogs
 * - Central question banks and tests remain completely untouched
 */
export async function deleteTestAttempt({ studentId, attemptId, adminEmail, reason = '' }) {
    const client = await clientPromise;
    const db = client.db('testseries');

    const student = await getStudent(db, studentId);
    if (!student) {
        return { success: false, status: 404, error: 'Student not found.' };
    }

    const attempt = await getAttemptForStudent(db, student, attemptId);
    if (!attempt) {
        return { success: false, status: 404, error: 'Test attempt not found for this student.' };
    }

    // Record in Audit Log before permanently deleting
    await logAdminAudit(db, {
        action: 'DELETE_TEST_ATTEMPT',
        studentId: student._id,
        adminId: adminEmail || 'Admin',
        prevStatus: attempt.status || 'SUBMITTED',
        newStatus: 'PERMANENTLY_DELETED',
        details: {
            attemptId: attempt._id.toString(),
            testAttemptId: attempt.testAttemptId || null,
            testId: attempt.testId,
            examType: attempt.examType,
            studentEmail: student.email,
            studentName: student.name,
            score: attempt.score,
            totalMarks: attempt.totalMarks,
            reason: reason || 'Deleted from student history by admin'
        }
    });

    // Permanently remove attempt from testResults collection
    await db.collection('testResults').deleteOne({ _id: attempt._id });

    // Clean up any lingering testSession or testViolations
    const emailRegex = new RegExp(`^${student.email}$`, 'i');
    try {
        await Promise.all([
            db.collection('testSessions').deleteMany({
                userEmail: { $regex: emailRegex },
                testId: attempt.testId
            }),
            db.collection('testViolations').deleteMany({
                $or: [
                    ...(attempt.testAttemptId ? [{ testAttemptId: attempt.testAttemptId }] : []),
                    { userEmail: { $regex: emailRegex }, testId: attempt.testId }
                ]
            })
        ]);
    } catch (e) {
        console.warn('Could not clean up testSession/testViolations for deleted attempt:', e);
    }

    return {
        success: true,
        status: 200,
        message: 'Test attempt deleted completely from database.',
        attemptId: attempt._id.toString()
    };
}

/**
 * Fetches full attempt details for View Attempt Details modal.
 */
export async function getAttemptDetails({ studentId, attemptId }) {
    const client = await clientPromise;
    const db = client.db('testseries');

    const student = await getStudent(db, studentId);
    if (!student) {
        return { success: false, status: 404, error: 'Student not found.' };
    }

    const attempt = await getAttemptForStudent(db, student, attemptId);
    if (!attempt) {
        return { success: false, status: 404, error: 'Test attempt not found for this student.' };
    }

    // Query audit logs related to this attempt
    let auditRecords = [];
    try {
        auditRecords = await db.collection('auditLogs')
            .find({
                $or: [
                    { 'details.attemptId': attempt._id.toString() },
                    { 'details.testAttemptId': attempt.testAttemptId }
                ]
            })
            .sort({ timestamp: -1 })
            .toArray();
    } catch (e) {
        console.warn('Failed to fetch audit records for attempt:', e);
    }

    return {
        success: true,
        status: 200,
        attempt: {
            ...attempt,
            _id: attempt._id.toString(),
            studentName: student.name,
            studentEmail: student.email,
            auditRecords
        }
    };
}
