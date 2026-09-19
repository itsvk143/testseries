import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Try to find user
        const user = await db.collection('users').findOne({ email: session.user.email });

        return Response.json({
            searchEmail: session.user.email,
            userFound: !!user,
            user: user || null,
            sessionUser: session.user
        });
    } catch (error) {
        console.error('❌ Error in debug:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
