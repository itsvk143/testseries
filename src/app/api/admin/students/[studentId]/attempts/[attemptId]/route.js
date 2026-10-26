import { auth } from '@/lib/auth';
import { deleteTestAttempt, getAttemptDetails } from '@/lib/testAttemptService';

export async function DELETE(request, { params }) {
    try {
        const session = await auth();

        // Admin authorization check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { studentId, attemptId } = await params;
        const body = await request.json().catch(() => ({}));
        const reason = body?.reason || '';

        const result = await deleteTestAttempt({
            studentId,
            attemptId,
            adminEmail: session.user.email,
            reason
        });

        return Response.json(result, { status: result.status });
    } catch (error) {
        console.error('Error in delete test attempt route:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const session = await auth();

        // Admin authorization check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { studentId, attemptId } = await params;
        const result = await getAttemptDetails({ studentId, attemptId });

        return Response.json(result, { status: result.status });
    } catch (error) {
        console.error('Error in get attempt details route:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
