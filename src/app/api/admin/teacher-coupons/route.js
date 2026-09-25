import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { normalizeCouponCode, ensureCouponAndPaymentIndexes } from '@/lib/couponService';

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
        const statusFilter = searchParams.get('status') || 'ALL';

        const filter = {};
        if (search) {
            const regex = new RegExp(search, 'i');
            filter.$or = [
                { teacherName: regex },
                { couponCode: regex }
            ];
        }

        if (statusFilter && statusFilter !== 'ALL') {
            filter.status = statusFilter;
        }

        const coupons = await db.collection('teacherCoupons')
            .find(filter)
            .sort({ createdAt: -1 })
            .toArray();

        // Calculate statistics per coupon from payments collection (PAID payments only)
        const couponStats = await db.collection('payments').aggregate([
            {
                $match: {
                    $or: [
                        { paymentStatus: 'PAID' },
                        { status: 'paid' } // legacy support
                    ],
                    couponCode: { $ne: null, $exists: true, $nin: ['', null] }
                }
            },
            {
                $group: {
                    _id: { $toUpper: '$couponCode' },
                    successfulPayments: { $sum: 1 },
                    uniqueStudents: { $addToSet: { $ifNull: ['$studentId', '$email'] } },
                    totalRevenue: {
                        $sum: { $ifNull: ['$finalAmount', '$amount'] }
                    }
                }
            }
        ]).toArray();

        const statsMap = new Map();
        for (const stat of couponStats) {
            statsMap.set(stat._id, {
                successfulPayments: stat.successfulPayments || 0,
                referredStudents: stat.uniqueStudents?.length || 0,
                revenue: stat.totalRevenue || 0
            });
        }

        const formattedCoupons = coupons.map((c) => {
            const codeKey = (c.couponCode || '').toUpperCase();
            const stat = statsMap.get(codeKey) || {
                successfulPayments: 0,
                referredStudents: 0,
                revenue: 0
            };

            return {
                _id: c._id.toString(),
                teacherName: c.teacherName,
                couponCode: c.couponCode,
                status: c.status || 'Active',
                referredStudents: stat.referredStudents,
                successfulPayments: stat.successfulPayments,
                revenue: stat.revenue,
                createdAt: c.createdAt || new Date(),
                updatedAt: c.updatedAt || new Date()
            };
        });

        // Global metrics for cards
        const allCoupons = await db.collection('teacherCoupons').find().toArray();
        const activeCount = allCoupons.filter(c => c.status === 'Active').length;
        const uniqueTeacherNames = new Set(allCoupons.map(c => (c.teacherName || '').trim().toLowerCase()).filter(Boolean));

        const globalPaymentStats = await db.collection('payments').aggregate([
            {
                $match: {
                    $or: [
                        { paymentStatus: 'PAID' },
                        { status: 'paid' }
                    ],
                    couponCode: { $ne: null, $exists: true, $nin: ['', null] }
                }
            },
            {
                $group: {
                    _id: null,
                    successfulPayments: { $sum: 1 },
                    uniqueStudents: { $addToSet: { $ifNull: ['$studentId', '$email'] } },
                    totalRevenue: {
                        $sum: { $ifNull: ['$finalAmount', '$amount'] }
                    }
                }
            }
        ]).toArray();

        const gStat = globalPaymentStats[0] || { successfulPayments: 0, uniqueStudents: [], totalRevenue: 0 };

        return Response.json({
            coupons: formattedCoupons,
            metrics: {
                totalTeachers: uniqueTeacherNames.size || allCoupons.length,
                activeCoupons: activeCount,
                totalReferredStudents: gStat.uniqueStudents?.length || 0,
                successfulReferralPayments: gStat.successfulPayments || 0,
                referralRevenue: gStat.totalRevenue || 0
            }
        });
    } catch (error) {
        console.error('Error fetching teacher coupons:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json().catch(() => ({}));
        const teacherName = (body.teacherName || '').trim();
        const rawCoupon = (body.couponCode || '').trim();
        const couponCode = normalizeCouponCode(rawCoupon);
        const status = body.status === 'Inactive' ? 'Inactive' : 'Active';

        if (!teacherName) {
            return Response.json({ error: 'Teacher Name is required.' }, { status: 400 });
        }

        if (!couponCode) {
            return Response.json({ error: 'Coupon Code is required.' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        await ensureCouponAndPaymentIndexes(db);

        // Case-insensitive uniqueness check
        const existing = await db.collection('teacherCoupons').findOne({
            couponCode: { $regex: new RegExp(`^${couponCode}$`, 'i') }
        });

        if (existing) {
            return Response.json({
                error: 'Coupon code already exists. Please use a different coupon code.'
            }, { status: 400 });
        }

        const now = new Date();
        const newCoupon = {
            teacherName,
            couponCode,
            status,
            createdAt: now,
            updatedAt: now
        };

        const result = await db.collection('teacherCoupons').insertOne(newCoupon);

        return Response.json({
            success: true,
            coupon: {
                _id: result.insertedId.toString(),
                ...newCoupon
            }
        });
    } catch (error) {
        console.error('Error creating teacher coupon:', error);
        return Response.json({ error: error.message || 'Failed to create coupon.' }, { status: 500 });
    }
}
