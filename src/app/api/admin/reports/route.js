import { auth } from '@/lib/auth';
import { getQuestionReportsCollection, isUserAdmin } from '@/lib/questionReportModel';

export async function GET(request) {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
        const skip = (page - 1) * limit;

        const status = searchParams.get('status');
        const category = searchParams.get('category');
        const subject = searchParams.get('subject');
        const chapter = searchParams.get('chapter');
        const exam = searchParams.get('exam');
        const reportSource = searchParams.get('reportSource');
        const search = (searchParams.get('q') || '').trim();
        const dateFrom = searchParams.get('dateFrom');
        const dateTo = searchParams.get('dateTo');

        const { col } = await getQuestionReportsCollection();

        // Build search/filter query
        const query = {};

        if (status && status !== 'ALL') {
            query.status = status;
        }

        if (category && category !== 'ALL') {
            query.categories = category;
        }

        if (subject && subject !== 'ALL') {
            query.subject = { $regex: new RegExp(`^${subject}$`, 'i') };
        }

        if (chapter && chapter !== 'ALL') {
            query.chapter = { $regex: new RegExp(`^${chapter}$`, 'i') };
        }

        if (exam && exam !== 'ALL') {
            query.exam = { $regex: new RegExp(`^${exam}$`, 'i') };
        }

        if (reportSource && reportSource !== 'ALL') {
            query.reportSource = reportSource;
        }

        if (dateFrom || dateTo) {
            query.createdAt = {};
            if (dateFrom) query.createdAt.$gte = new Date(dateFrom);
            if (dateTo) query.createdAt.$lte = new Date(new Date(dateTo).setHours(23, 59, 59, 999));
        }

        if (search) {
            query.$or = [
                { reportId: { $regex: search, $options: 'i' } },
                { questionId: { $regex: search, $options: 'i' } },
                { testId: { $regex: search, $options: 'i' } },
                { studentEmail: { $regex: search, $options: 'i' } },
                { studentName: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { 'questionSnapshot.question': { $regex: search, $options: 'i' } },
                { chapter: { $regex: search, $options: 'i' } },
                { topic: { $regex: search, $options: 'i' } }
            ];
        }

        // Stats aggregation across all reports (independent of current filters)
        const statsPipeline = [
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ];
        const statusCounts = await col.aggregate(statsPipeline).toArray();
        const stats = {
            total: 0,
            newCount: 0,
            underReview: 0,
            confirmedError: 0,
            resolved: 0,
            dismissed: 0,
            unresolvedCount: 0
        };

        for (const item of statusCounts) {
            stats.total += item.count;
            if (item._id === 'NEW') stats.newCount = item.count;
            else if (item._id === 'UNDER_REVIEW') stats.underReview = item.count;
            else if (item._id === 'CONFIRMED_ERROR') stats.confirmedError = item.count;
            else if (item._id === 'RESOLVED') stats.resolved = item.count;
            else if (item._id === 'DISMISSED') stats.dismissed = item.count;
        }
        stats.unresolvedCount = stats.newCount + stats.underReview;

        // Count filtered results
        const totalFiltered = await col.countDocuments(query);
        const totalPages = Math.ceil(totalFiltered / limit) || 1;

        // Fetch reports
        const reports = await col.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .toArray();

        // Count how many reports exist for each distinct questionId in this batch
        const questionIds = Array.from(new Set(reports.map(r => r.questionId)));
        const questionCountsMap = {};
        if (questionIds.length > 0) {
            const countPerQ = await col.aggregate([
                { $match: { questionId: { $in: questionIds } } },
                { $group: { _id: '$questionId', total: { $sum: 1 } } }
            ]).toArray();
            for (const c of countPerQ) {
                questionCountsMap[c._id] = c.total;
            }
        }

        // Enrich reports with questionReportsCount
        const enrichedReports = reports.map(r => ({
            ...r,
            questionReportsCount: questionCountsMap[r.questionId] || 1
        }));

        return Response.json({
            reports: enrichedReports,
            pagination: {
                page,
                limit,
                total: totalFiltered,
                totalPages
            },
            stats
        });

    } catch (error) {
        console.error('[GET /api/admin/reports] Error:', error);
        return Response.json({ error: 'Failed to fetch admin reports list.' }, { status: 500 });
    }
}
