import clientPromise from '@/lib/mongodb';
import { ensureCouponAndPaymentIndexes, ensureDefaultCoupons } from '@/lib/couponService';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('testseries');
        await ensureCouponAndPaymentIndexes(db);
        await ensureDefaultCoupons(db);

        const activeCoupons = await db.collection('teacherCoupons')
            .find({ status: 'Active' })
            .sort({ createdAt: -1 })
            .toArray();

        const coupons = activeCoupons.map((c) => ({
            couponCode: c.couponCode,
            teacherName: c.teacherName,
            discountAmount: 100,
            description: `Flat ₹100 Discount by ${c.teacherName}`
        }));

        // Always ensure VIKASH10 is in the list
        if (!coupons.some((c) => (c.couponCode || '').toUpperCase() === 'VIKASH10')) {
            coupons.unshift({
                couponCode: 'VIKASH10',
                teacherName: 'Vikash Kumar',
                discountAmount: 100,
                description: 'Flat ₹100 Discount by Vikash Kumar'
            });
        }

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
