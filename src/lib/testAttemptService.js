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
 * Resets a student's test attempt.
 * - Marks status as 'RESET', isReset: true
 * - Cleans up active testSessions for this student and test
 * - Logs audit trail in auditLogs
 * - Preserves attempt record and central test/questions
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

    if (attempt.isReset || attempt.status === 'RESET') {
        return {
            success: true,
            status: 200,
            message: 'Test attempt is already reset.',
            attemptId: attempt._id.toString()
        };
    }

    const now = new Date();
    const updateResult = await db.collection('testResults').updateOne(
        { _id: attempt._id },
        {
            $set: {
                status: 'RESET',
                isReset: true,
                resetAt: now,
                resetBy: adminEmail || 'Admin',
                resetReason: reason || 'Accidentally submitted attempt reset by admin',
                updatedAt: now
            }
        }
    );

    if (updateResult.modifiedCount === 0 && updateResult.matchedCount === 0) {
        return { success: false, status: 500, error: 'Failed to update test attempt.' };
    }

    // Clean up any in-progress testSession so student can retake fresh
    try {
        await db.collection('testSessions').deleteMany({
            userEmail: { $regex: new RegExp(`^${student.email}$`, 'i') },
            testId: attempt.testId
        });
    } catch (e) {
        console.warn('Could not clean up testSession for reset attempt:', e);
    }

    // Record in Audit Log
    await logAdminAudit(db, {
        action: 'RESET_TEST_ATTEMPT',
        studentId: student._id,
        adminId: adminEmail || 'Admin',
        prevStatus: attempt.status || 'SUBMITTED',
        newStatus: 'RESET',
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

    return {
        success: true,
        status: 200,
        message: 'Test attempt reset successfully. The student can attempt the test again.',
        attemptId: attempt._id.toString()
    };
}

/**
 * Soft-deletes a student's test attempt.
 * - Marks status as 'DELETED', isDeleted: true
 * - Cleans up active testSessions for this student and test
 * - Logs audit trail in auditLogs
 * - Leaves underlying central questions and tests completely untouched
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

    if (attempt.isDeleted || attempt.status === 'DELETED') {
        return {
            success: true,
            status: 200,
            message: 'Test attempt is already deleted.',
            attemptId: attempt._id.toString()
        };
    }

    const now = new Date();
    const updateResult = await db.collection('testResults').updateOne(
        { _id: attempt._id },
        {
            $set: {
                status: 'DELETED',
                isDeleted: true,
                deletedAt: now,
                deletedBy: adminEmail || 'Admin',
                deletionReason: reason || 'Deleted from student history by admin',
                updatedAt: now
            }
        }
    );

    if (updateResult.modifiedCount === 0 && updateResult.matchedCount === 0) {
        return { success: false, status: 500, error: 'Failed to delete test attempt.' };
    }

    // Clean up any testSession
    try {
        await db.collection('testSessions').deleteMany({
            userEmail: { $regex: new RegExp(`^${student.email}$`, 'i') },
            testId: attempt.testId
        });
    } catch (e) {
        console.warn('Could not clean up testSession for deleted attempt:', e);
    }

    // Record in Audit Log
    await logAdminAudit(db, {
        action: 'DELETE_TEST_ATTEMPT',
        studentId: student._id,
        adminId: adminEmail || 'Admin',
        prevStatus: attempt.status || 'SUBMITTED',
        newStatus: 'DELETED',
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

    return {
        success: true,
        status: 200,
        message: 'Test attempt deleted successfully.',
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
