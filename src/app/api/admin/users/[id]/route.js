import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

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
                examPreparingFor: 1,
                isApproved: 1,
                approvals: 1,
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

        // Delete user and their related data
        await db.collection('users').deleteOne({ _id: objectId });
        await db.collection('testResults').deleteMany({ userId: id });

        // Remove sessions associated with the user
        await db.collection('sessions').deleteMany({ userId: objectId });

        return Response.json({ success: true, message: 'User and their test data deleted successfully.' });
    } catch (error) {
        console.error('Failed to delete user:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
