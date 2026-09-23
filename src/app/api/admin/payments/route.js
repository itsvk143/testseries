import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { normalizeToCanonicalExam } from '@/lib/authorization';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const { searchParams } = new URL(request.url);
        const search = (searchParams.get('search') || '').trim();
        const examFilter = searchParams.get('exam') || '';
        const statusFilter = searchParams.get('status') || '';
        const dateFrom = searchParams.get('dateFrom');
        const dateTo = searchParams.get('dateTo');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '25', 10)));
        const skip = (page - 1) * limit;

        const query = {};

        // Search text
        if (search) {
            const regex = new RegExp(search, 'i');
            query.$or = [
                { studentName: regex },
                { studentCode: regex },
                { email: regex },
                { mobile: regex },
                { razorpayOrderId: regex },
                { razorpayPaymentId: regex }
            ];
        }

        // Exam filter
        if (examFilter && examFilter !== 'ALL') {
            const canonical = normalizeToCanonicalExam(examFilter);
            if (canonical) {
                query.exam = canonical;
            }
        }

        // Status filter
        if (statusFilter && statusFilter !== 'ALL') {
            query.status = statusFilter.toLowerCase();
        }

        // Date range filter
        if (dateFrom || dateTo) {
            query.createdAt = {};
            if (dateFrom) {
                query.createdAt.$gte = new Date(dateFrom);
            }
            if (dateTo) {
                const end = new Date(dateTo);
                end.setHours(23, 59, 59, 999);
                query.createdAt.$lte = end;
            }
        }

        // Fetch payments with pagination
        const [payments, totalCount, aggregateStats] = await Promise.all([
            db.collection('payments')
                .find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .toArray(),
            db.collection('payments').countDocuments(query),
            db.collection('payments').aggregate([
                {
                    $group: {
                        _id: null,
                        total: { $sum: 1 },
                        paidCount: {
                            $sum: { $cond: [{ $eq: ['$status', 'paid'] }, 1, 0] }
                        },
                        pendingCount: {
                            $sum: {
                                $cond: [
                                    { $in: ['$status', ['created', 'pending']] },
                                    1,
                                    0
                                ]
                            }
                        },
                        failedCount: {
                            $sum: { $cond: [{ $eq: ['$status', 'failed'] }, 1, 0] }
                        },
                        refundedCount: {
                            $sum: { $cond: [{ $eq: ['$status', 'refunded'] }, 1, 0] }
                        },
                        totalRevenue: {
                            $sum: {
                                $cond: [
                                    { $eq: ['$status', 'paid'] },
                                    '$amount',
                                    0
                                ]
                            }
                        }
                    }
                }
            ]).toArray()
        ]);

        const stats = aggregateStats[0] || {
            total: 0,
            paidCount: 0,
            pendingCount: 0,
            failedCount: 0,
            refundedCount: 0,
            totalRevenue: 0
        };

        return Response.json({
            payments,
            pagination: {
                total: totalCount,
                page,
                limit,
                totalPages: Math.ceil(totalCount / limit) || 1
            },
            metrics: {
                totalPayments: stats.total,
                successfulPayments: stats.paidCount,
                pendingPayments: stats.pendingCount,
                failedPayments: stats.failedCount,
                refundedPayments: stats.refundedCount,
                totalRevenue: stats.totalRevenue
            }
        });
    } catch (error) {
        console.error('Failed to fetch admin payments:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
