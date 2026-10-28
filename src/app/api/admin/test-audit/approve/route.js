import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { testId, isApproved } = body;

        if (!testId) {
            return Response.json({ success: false, error: 'testId is required.' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        const testPaper = await db.collection('testPapers').findOne({ testId });
        if (!testPaper) {
            return Response.json({ success: false, error: 'Test not found.' }, { status: 404 });
        }

        const totalQuestions = Array.isArray(testPaper.questions) ? testPaper.questions.length : (testPaper.totalQuestions || 0);

        if (isApproved) {
            // Verify that all questions requiring verification are manually passed
            const auditState = await db.collection('testAuditStates').findOne({ testId });
            const passedList = auditState?.manualPassedQuestions || [];
            const manualPassedCount = passedList.filter(p => p.passed === true).length;

            if (totalQuestions === 0 || manualPassedCount < totalQuestions) {
                return Response.json({
                    success: false,
                    error: `Cannot grant Admin Approval: only ${manualPassedCount} of ${totalQuestions} questions have been manually passed. All questions must be verified before approval.`
                }, { status: 400 });
            }

            const adminApproval = {
                isApproved: true,
                approvedBy: session.user.email || 'admin',
                approvedAt: new Date()
            };

            await db.collection('testAuditStates').updateOne(
                { testId },
                { $set: { testId, adminApproval, updatedAt: new Date() } },
                { upsert: true }
            );

            return Response.json({
                success: true,
                message: `Test "${testId}" successfully approved by ${adminApproval.approvedBy}.`,
                adminApproval
            });
        } else {
            // Revoke approval
            const adminApproval = {
                isApproved: false,
                revokedBy: session.user.email || 'admin',
                revokedAt: new Date()
            };

            await db.collection('testAuditStates').updateOne(
                { testId },
                { $set: { testId, adminApproval, updatedAt: new Date() } },
                { upsert: true }
            );

            return Response.json({
                success: true,
                message: `Admin Approval for test "${testId}" was revoked.`,
                adminApproval
            });
        }
    } catch (error) {
        console.error('Error updating test approval:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
