import clientPromise from '@/lib/mongodb';
import { ensureCouponAndPaymentIndexes, ensureDefaultCoupons } from '@/lib/couponService';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('testseries');
        await ensureCouponAndPaymentIndexes(db);
        await ensureDefaultCoupons(db);

        // Fetch only active VIKASH10
        const vikashCoupon = await db.collection('teacherCoupons').findOne({
            couponCode: { $regex: new RegExp('^VIKASH10$', 'i') },
            status: 'Active'
        });

        const coupons = [
            {
                couponCode: vikashCoupon?.couponCode || 'VIKASH10',
                teacherName: vikashCoupon?.teacherName || 'Vikash Kumar',
                discountAmount: 100,
                description: `Flat ₹100 Discount by ${vikashCoupon?.teacherName || 'Vikash Kumar'}`
            }
        ];

        return Response.json({
            success: true,
            coupons
        });
    } catch (error) {
        console.error('Error fetching available coupons:', error);
        return Response.json({
            success: true,
            coupons: [
                {
                    couponCode: 'VIKASH10',
                    teacherName: 'Vikash Kumar',
                    discountAmount: 100,
                    description: 'Flat ₹100 Discount by Vikash Kumar'
                }
            ]
        });
    }
}
