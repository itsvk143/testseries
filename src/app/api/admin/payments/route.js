import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { ensureCouponAndPaymentIndexes } from '@/lib/couponService';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        await ensureCouponAndPaymentIndexes(db);

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
                { razorpayPaymentId: regex },
                { teacherName: regex },
                { couponCode: regex }
            ];
        }

        // Exam filter
        if (examFilter && examFilter !== 'ALL') {
            const canonical = normalizeToCanonicalExam(examFilter);
            if (canonical) {
                query.exam = canonical;
            }
        }

        // Status filter supporting canonical paymentStatus and legacy status
        if (statusFilter && statusFilter !== 'ALL') {
            const upperStatus = statusFilter.toUpperCase();
            if (upperStatus === 'PAID') {
                query.$or = [{ paymentStatus: 'PAID' }, { status: 'paid' }];
            } else if (upperStatus === 'FAILED') {
                query.$or = [{ paymentStatus: { $in: ['FAILED', 'VERIFICATION_FAILED', 'CANCELLED'] } }, { status: 'failed' }];
            } else if (upperStatus === 'REFUNDED') {
                query.$or = [{ paymentStatus: 'REFUNDED' }, { status: 'refunded' }];
            } else if (upperStatus === 'PENDING' || upperStatus === 'CREATED') {
                query.$or = [
                    { paymentStatus: { $in: ['CREATED', 'COUPON_VALIDATED', 'ORDER_CREATED', 'PAYMENT_PENDING', 'PAYMENT_VERIFICATION'] } },
                    { status: { $in: ['created', 'pending'] } }
                ];
            } else {
                query.paymentStatus = upperStatus;
            }
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
        const [rawPayments, totalCount, aggregateStats] = await Promise.all([
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
                            $sum: {
                                $cond: [
                                    { $or: [{ $eq: ['$paymentStatus', 'PAID'] }, { $eq: ['$status', 'paid'] }] },
                                    1,
                                    0
                                ]
                            }
                        },
                        pendingCount: {
                            $sum: {
                                $cond: [
                                    {
                                        $or: [
                                            { $in: ['$paymentStatus', ['CREATED', 'COUPON_VALIDATED', 'ORDER_CREATED', 'PAYMENT_PENDING', 'PAYMENT_VERIFICATION']] },
                                            { $in: ['$status', ['created', 'pending']] }
                                        ]
                                    },
                                    1,
                                    0
                                ]
                            }
                        },
                        failedCount: {
                            $sum: {
                                $cond: [
                                    {
                                        $or: [
                                            { $in: ['$paymentStatus', ['FAILED', 'VERIFICATION_FAILED', 'CANCELLED']] },
                                            { $eq: ['$status', 'failed'] }
                                        ]
                                    },
                                    1,
                                    0
                                ]
                            }
                        },
                        refundedCount: {
                            $sum: {
                                $cond: [
                                    { $or: [{ $eq: ['$paymentStatus', 'REFUNDED'] }, { $eq: ['$status', 'refunded'] }] },
                                    1,
                                    0
                                ]
                            }
                        },
                        totalRevenue: {
                            $sum: {
                                $cond: [
                                    { $or: [{ $eq: ['$paymentStatus', 'PAID'] }, { $eq: ['$status', 'paid'] }] },
                                    { $ifNull: ['$finalAmount', '$amount'] },
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

        // Normalize each payment to expose canonical paymentStatus and pricing fields
        const payments = rawPayments.map((p) => {
            const canonicalStatus = p.paymentStatus || (
                p.status === 'paid' ? 'PAID' :
                p.status === 'failed' ? 'FAILED' :
                p.status === 'refunded' ? 'REFUNDED' :
                p.status === 'pending' ? 'PAYMENT_PENDING' :
                'CREATED'
            );

            return {
                ...p,
                _id: p._id.toString(),
                paymentStatus: canonicalStatus,
                originalAmount: p.originalAmount !== undefined ? p.originalAmount : (p.amount || 1099),
                discountAmount: p.discountAmount !== undefined ? p.discountAmount : 0,
                finalAmount: p.finalAmount !== undefined ? p.finalAmount : (p.amount || 1099),
                teacherName: p.teacherName || null,
                couponCode: p.couponCode || null,
                amountVerified: p.amountVerified !== undefined ? p.amountVerified : (canonicalStatus === 'PAID')
            };
        });

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
