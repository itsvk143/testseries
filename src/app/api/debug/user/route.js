import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        console.log('🔍 Looking for user with email:', session.user.email);

        // Try to find user
        const user = await db.collection('users').findOne({ email: session.user.email });

        if (user) {
            console.log('✅ Found user:', {
                id: user._id,
                email: user.email,
                name: user.name,
                profileCompleted: user.profileCompleted
            });
        } else {
            console.log('❌ User NOT found. Checking all users...');
            const allUsers = await db.collection('users').find({}).toArray();
            console.log(' Total users in DB:', allUsers.length);
            if (allUsers.length > 0) {
                console.log('📧 Emails in DB:', allUsers.map(u => u.email));
            }
        }

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
