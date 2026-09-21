import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { getAuthorizedSubjects, SUBJECT_ICONS } from '@/lib/pollService';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor) || 'NEET';
        const authorizedSubjects = getAuthorizedSubjects(canonicalExam);

        // Fetch completions for this user
        const completions = await db.collection('pollCompletions').find({
            userEmail: session.user.email,
            exam: canonicalExam
        }).toArray();

        // Calculate unique count per subject
        const stats = authorizedSubjects.map(sub => {
            const count = completions.filter(c => c.subject.toLowerCase() === sub.toLowerCase()).length;
            return {
                subject: sub,
                icon: SUBJECT_ICONS[sub] || '📚',
                completed: count
            };
        });

        return Response.json({
            exam: canonicalExam,
            stats
        });

    } catch (error) {
        console.error('Error fetching poll stats:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
