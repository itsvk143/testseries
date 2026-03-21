import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';

// Default approvals - all test types approved by default
export const DEFAULT_APPROVALS = {
    mock: true,
    live: true,
    pyq: true,
    subject: true,
    chapter: true,
};

export async function POST(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        const body = await request.json();
        const { approvals } = body;

        // Validate that approvals is an object with boolean values
        if (!approvals || typeof approvals !== 'object') {
            return Response.json({ error: 'Invalid approvals object' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Compute isApproved = true only if ALL test types are approved
        const isApproved = Object.values(approvals).every(v => v === true);

        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(id) },
            { $set: { approvals, isApproved } }
        );

        if (result.matchedCount === 0) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        return Response.json({ success: true, approvals, isApproved });
    } catch (error) {
        console.error('Failed to update user approval:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
