import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function GET(request) {
    try {
        const session = await auth();
        
        // Authorization Check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Fetch all users from the NextAuth collection
        // Exclude the provider secrets and emails Verified tokens
        const users = await db.collection('users').find({}, {
            projection: {
                name: 1,
                email: 1,
                image: 1,
                role: 1,
                createdAt: 1,
                profileCompletedAt: 1,
                isApproved: 1,
                approvals: 1,
                examPreparingFor: 1,
                state: 1,
                city: 1,
                schoolName: 1,
                coachingName: 1,
                mobileNo: 1,
            }
        }).toArray();

        // Optionally fetch related test results to aggregate stats
        const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());

        const usersWithStats = await Promise.all(users.map(async (user) => {
            const resultsCount = await db.collection('testResults').countDocuments({ userEmail: user.email });
            const isAdmin = user.role === 'admin' || adminEmails.includes(user.email?.toLowerCase());
            return {
                ...user,
                _id: user._id.toString(),
                testsTaken: resultsCount,
                isAdmin,
            };
        }));

        return Response.json(usersWithStats);
    } catch (error) {
        console.error('Failed to fetch admin users:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
