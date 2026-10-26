import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam, getCanonicalExamDisplay, CANONICAL_EXAMS, logAdminAudit } from '@/lib/authorization';

export async function GET(request, { params }) {
    try {
        const session = await auth();
        
        // Authorization Check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;

        // Check if id is a valid 24-character hexadecimal ObjectId
        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return Response.json({ error: 'Invalid User ID format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Fetch user from db — try by ObjectId first
        let user = await db.collection('users').findOne({ _id: new ObjectId(id) }, {
            projection: {
                name: 1,
                email: 1,
                image: 1,
                role: 1,
                createdAt: 1,
                profileCompleted: 1,
                mobileNo: 1,
                schoolName: 1,
                coachingName: 1,
                city: 1,
                state: 1,
                exam: 1,
                examPreparingFor: 1,
                isApproved: 1,
                approvals: 1,
                paymentStatus: 1,
                accountStatus: 1,
                authorizationStartDate: 1,
                authorizationExpiryDate: 1,
            }
        });

        // If not found by ID, this user may have been created before the DB migration.
        // The admin user list now returns users by email-based profile documents.
        // Try to find the admin user list entry to get the email, then look up by email.
        if (!user) {
            // Return a not-found instead of crashing
            return Response.json({ error: 'User not found. They may need to sign in again after the recent database update.' }, { status: 404 });
        }

        return Response.json({
            ...user,
            _id: user._id.toString()
        });
    } catch (error) {
        console.error('Failed to fetch admin user detail:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;

        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return Response.json({ error: 'Invalid User ID format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const objectId = new ObjectId(id);

        // Prevent admins from deleting themselves or other admins
        const userToDelete = await db.collection('users').findOne({ _id: objectId });

        if (!userToDelete) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        if (userToDelete.role === 'admin' || userToDelete.email === session.user.email) {
            return Response.json({ error: 'Cannot delete admin accounts.' }, { status: 403 });
        }

        const rawEmail = (userToDelete.email || '').trim();
        const emailRegex = rawEmail ? new RegExp(`^${rawEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') : null;

        const orUserFilters = [];
        if (emailRegex) {
            orUserFilters.push({ userEmail: emailRegex });
            orUserFilters.push({ email: emailRegex });
        }
        orUserFilters.push({ userId: objectId });
        orUserFilters.push({ userId: objectId.toString() });

        // Build payments filter
        const paymentFilters = [...orUserFilters, { studentId: objectId }];
        if (userToDelete.studentCode) {
            paymentFilters.push({ studentCode: userToDelete.studentCode });
        }

        // 1. Delete user document from users collection
        await db.collection('users').deleteOne({ _id: objectId });

        // 2. Completely remove all student-specific data from all collections for this student only
        await Promise.all([
            // NextAuth OAuth accounts & active sessions
            db.collection('accounts').deleteMany({
                $or: [{ userId: objectId }, { userId: objectId.toString() }]
            }).catch(e => console.warn('accounts cleanup error:', e)),

            db.collection('sessions').deleteMany({
                $or: [{ userId: objectId }, { userId: objectId.toString() }]
            }).catch(e => console.warn('sessions cleanup error:', e)),

            // Test results, test attempts, active test sessions, and integrity violations
            db.collection('testResults').deleteMany({
                $or: orUserFilters
            }).catch(e => console.warn('testResults cleanup error:', e)),

            db.collection('testSessions').deleteMany({
                $or: orUserFilters
            }).catch(e => console.warn('testSessions cleanup error:', e)),

            db.collection('testViolations').deleteMany({
                $or: orUserFilters
            }).catch(e => console.warn('testViolations cleanup error:', e)),

            // Payment records for this student only
            db.collection('payments').deleteMany({
                $or: paymentFilters
            }).catch(e => console.warn('payments cleanup error:', e)),

            // Poll completions
            db.collection('pollCompletions').deleteMany({
                $or: orUserFilters
            }).catch(e => console.warn('pollCompletions cleanup error:', e)),

            // Question issue reports submitted by this student
            db.collection('questionReports').deleteMany({
                $or: [
                    ...orUserFilters,
                    ...(emailRegex ? [{ reportedByEmail: emailRegex }] : [])
                ]
            }).catch(e => console.warn('questionReports cleanup error:', e)),

            // Contact messages submitted by this student
            ...(emailRegex ? [
                db.collection('contactMessages').deleteMany({ email: emailRegex })
                    .catch(e => console.warn('contactMessages cleanup error:', e))
            ] : [])
        ]);

        // Record audit trail of complete deletion
        await logAdminAudit(db, {
            action: 'DELETE_STUDENT_COMPLETE',
            studentId: objectId.toString(),
            adminId: session.user.email,
            prevStatus: userToDelete.accountStatus || 'ACTIVE',
            newStatus: 'DELETED',
            details: {
                studentEmail: userToDelete.email,
                studentName: userToDelete.name,
                message: 'All student data completely removed from MongoDB database for this student only.'
            }
        });

        return Response.json({
            success: true,
            message: `Student '${userToDelete.name || userToDelete.email}' and all associated records completely deleted from MongoDB database.`
        });
    } catch (error) {
        console.error('Failed to delete user:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;

        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return Response.json({ error: 'Invalid User ID format' }, { status: 400 });
        }

        const body = await request.json();

        // Whitelist only editable fields to prevent mass-assignment
        const allowedFields = ['name', 'mobileNo', 'examPreparingFor', 'exam', 'studentClass', 'schoolName', 'coachingName', 'city', 'state', 'paymentStatus', 'accountStatus'];
        const updateFields = {};
        for (const field of allowedFields) {
            if (body[field] !== undefined) {
                updateFields[field] = body[field];
            }
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        if (updateFields.paymentStatus === 'CONFIRMED' || updateFields.paymentStatus === 'PAID') {
            updateFields.paymentStatus = 'CONFIRMED';
            updateFields.accountStatus = 'ACTIVE';
            const existingUser = await db.collection('users').findOne({ _id: new ObjectId(id) });
            if (!existingUser?.authorizationExpiryDate) {
                const startDate = new Date();
                const expiryDate = new Date(startDate.getTime() + (732 * 24 * 60 * 60 * 1000));
                updateFields.authorizationStartDate = startDate.toISOString();
                updateFields.authorizationExpiryDate = expiryDate.toISOString();
            }
        } else if (updateFields.paymentStatus === 'NOT PAID' || updateFields.paymentStatus === 'REJECTED') {
            updateFields.paymentStatus = 'REJECTED';
        } else if (updateFields.paymentStatus === 'PENDING') {
            updateFields.paymentStatus = 'PENDING';
        }

        if (updateFields.exam || updateFields.examPreparingFor) {
            const raw = updateFields.exam || updateFields.examPreparingFor;
            const canonical = normalizeToCanonicalExam(raw);
            if (canonical && CANONICAL_EXAMS.includes(canonical)) {
                updateFields.exam = canonical;
                updateFields.examPreparingFor = getCanonicalExamDisplay(canonical);
            } else {
                delete updateFields.exam;
                delete updateFields.examPreparingFor;
            }
        }

        if (Object.keys(updateFields).length === 0) {
            return Response.json({ error: 'No valid fields to update' }, { status: 400 });
        }

        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        return Response.json({ success: true, updated: updateFields });
    } catch (error) {
        console.error('Failed to update user:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

