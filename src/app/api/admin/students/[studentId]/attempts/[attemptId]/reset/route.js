import { auth } from '@/lib/auth';
import { resetTestAttempt } from '@/lib/testAttemptService';

export async function POST(request, { params }) {
    try {
        const session = await auth();

        // Admin authorization check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { studentId, attemptId } = await params;
        const body = await request.json().catch(() => ({}));
        const reason = body?.reason || '';

        const result = await resetTestAttempt({
            studentId,
            attemptId,
            adminEmail: session.user.email,
            reason
        });

        return Response.json(result, { status: result.status });
    } catch (error) {
        console.error('Error in reset test attempt route:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
