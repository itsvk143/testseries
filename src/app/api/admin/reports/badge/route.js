import { auth } from '@/lib/auth';
import { getQuestionReportsCollection, isUserAdmin } from '@/lib/questionReportModel';

export async function GET() {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ count: 0 });
        }

        const { col } = await getQuestionReportsCollection();
        const count = await col.countDocuments({
            status: { $in: ['NEW', 'UNDER_REVIEW'] }
        });

        return Response.json({ count });
    } catch (error) {
        console.error('[GET /api/admin/reports/badge] Error:', error);
        return Response.json({ count: 0 }, { status: 500 });
    }
}
