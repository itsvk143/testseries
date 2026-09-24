import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';

// Default approvals - all test types approved by default
export const DEFAULT_APPROVALS = {
    live: true,
    mock: true,
    subject: true,
    chapter: true,
    subtopic: true,
};

export async function POST(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        const body = await request.json();
        const { approvals, isApproved: explicitApproved } = body;

        let updateData = {};
        if (approvals && typeof approvals === 'object') {
            const isApproved = ['live', 'mock', 'subject', 'chapter', 'subtopic'].every(k => approvals[k] === true);
            updateData = { approvals, isApproved };
        } else if (typeof explicitApproved === 'boolean') {
            const newApprovals = {
                live: explicitApproved,
                mock: explicitApproved,
                subject: explicitApproved,
                chapter: explicitApproved,
                subtopic: explicitApproved,
            };
            updateData = { approvals: newApprovals, isApproved: explicitApproved };
        } else {
            return Response.json({ error: 'Invalid approvals object' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // If fully approved, also activate the account with authorization dates
        if (updateData.isApproved) {
            const existingUser = await db.collection('users').findOne(
                { _id: new ObjectId(id) },
                { projection: { authorizationExpiryDate: 1, authorizationStartDate: 1, paymentStatus: 1 } }
            );

            if (!existingUser?.authorizationExpiryDate) {
                const startDate = new Date();
                const expiryDate = new Date(startDate.getTime() + (732 * 24 * 60 * 60 * 1000));
                updateData.accountStatus = 'ACTIVE';
                updateData.authorizationStartDate = startDate.toISOString();
                updateData.authorizationExpiryDate = expiryDate.toISOString();
                updateData.approvedAt = startDate;
            } else {
                updateData.accountStatus = 'ACTIVE';
            }
        }

        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        return Response.json({ success: true, ...updateData });
    } catch (error) {
        console.error('Failed to update user approval:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
