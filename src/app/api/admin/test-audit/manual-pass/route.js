import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { testId, questionId, passed } = body;

        if (!testId || !questionId) {
            return Response.json({ success: false, error: 'testId and questionId are required.' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        // 1. Fetch testPaper to know total questions
        const testPaper = await db.collection('testPapers').findOne({ testId });
        const totalQuestions = Array.isArray(testPaper?.questions) ? testPaper.questions.length : (testPaper?.totalQuestions || 0);

        // 2. Fetch or initialize testAuditState
        let auditState = await db.collection('testAuditStates').findOne({ testId });
        let passedList = auditState?.manualPassedQuestions || [];

        // Update or add the question
        const existingIdx = passedList.findIndex(p => String(p.questionId) === String(questionId));
        const updatedEntry = {
            questionId: String(questionId),
            passed: Boolean(passed),
            updatedAt: new Date(),
            updatedBy: session.user.email || 'admin'
        };

        if (existingIdx >= 0) {
            passedList[existingIdx] = updatedEntry;
        } else {
            passedList.push(updatedEntry);
        }

        // Calculate progress
        const manualPassedCount = passedList.filter(p => p.passed === true).length;
        const auditProgress = totalQuestions > 0 ? Number(((manualPassedCount / totalQuestions) * 100).toFixed(1)) : 0;

        // If unchecking a question drops verification below 100%, invalidate approval
        let adminApproval = auditState?.adminApproval || { isApproved: false };
        if (!passed && adminApproval.isApproved) {
            adminApproval = {
                isApproved: false,
                revokedAt: new Date(),
                revocationReason: `Question ID ${questionId} marked unverified.`
            };
        }

        // Save updated state
        await db.collection('testAuditStates').updateOne(
            { testId },
            {
                $set: {
                    testId,
                    manualPassedQuestions: passedList,
                    adminApproval,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        return Response.json({
            success: true,
            questionId,
            passed: Boolean(passed),
            manualPassedCount,
            manualPendingCount: Math.max(0, totalQuestions - manualPassedCount),
            auditProgress,
            isApproved: adminApproval.isApproved
        });
    } catch (error) {
        console.error('Error updating manual passed status:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
