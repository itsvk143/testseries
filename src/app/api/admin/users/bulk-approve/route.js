import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { userIds, approvals, category } = body;

        if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
            return Response.json({ error: 'Invalid or empty userIds array' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Prepare the update object
        let updateQuery = {};

        if (category) {
            // Granular update: only update the specific category in the approvals object
            updateQuery = { $set: { [`approvals.${category}`]: true } };
            // Note: We don't easily recalculate isApproved here without fetching users first, 
            // but we can set it to true if we know it's now full access. 
            // For simplicity in bulk, we'll just update the category.
        } else if (approvals) {
            // Bulk full approval
            const isApproved = Object.values(approvals).every(v => v === true);
            updateQuery = { $set: { approvals, isApproved } };
        } else {
            return Response.json({ error: 'Missing approvals or category' }, { status: 400 });
        }

        // Convert string IDs to ObjectIds
        const objectIds = userIds.map(id => new ObjectId(id));

        const result = await db.collection('users').updateMany(
            { _id: { $in: objectIds } },
            updateQuery
        );

        return Response.json({ 
            success: true, 
            matchedCount: result.matchedCount, 
            modifiedCount: result.modifiedCount 
        });
    } catch (error) {
        console.error('Failed to bulk update user approvals:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
