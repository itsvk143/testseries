import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam, getCanonicalExamDisplay, CANONICAL_EXAMS } from '@/lib/authorization';

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
        const userToDelete = await db.collection('users').findOne({ _id: objectId }, { projection: { role: 1, email: 1 } });

        if (!userToDelete) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        if (userToDelete.role === 'admin' || userToDelete.email === session.user.email) {
            return Response.json({ error: 'Cannot delete admin accounts.' }, { status: 403 });
        }

        // Delete user and their related data — testResults are keyed by email, not userId
        await db.collection('users').deleteOne({ _id: objectId });
        await db.collection('testResults').deleteMany({ userEmail: userToDelete.email?.toLowerCase() });
        await db.collection('payments').deleteMany({ email: userToDelete.email?.toLowerCase() });

        // Remove sessions associated with the user
        await db.collection('sessions').deleteMany({ userId: objectId });

        return Response.json({ success: true, message: 'User and their test data deleted successfully.' });
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

