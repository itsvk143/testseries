import clientPromise from '@/lib/mongodb';
import { findTeacherCoupon, normalizeCouponCode } from '@/lib/couponService';
import { auth } from '@/lib/auth';

export async function POST(request) {
    try {
        const session = await auth().catch(() => null);
        const body = await request.json().catch(() => ({}));
        const rawCoupon = body.couponCode || '';
        const normalized = normalizeCouponCode(rawCoupon);

        if (!normalized) {
            return Response.json({
                valid: false,
                error: 'Please enter a coupon code.',
                originalAmount: 1099,
                discountAmount: 0,
                finalAmount: 1099
            }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const coupon = await findTeacherCoupon(db, normalized);

        if (!coupon) {
            return Response.json({
                valid: false,
                error: 'Invalid teacher coupon code.',
                originalAmount: 1099,
                discountAmount: 0,
                finalAmount: 1099
            }, { status: 400 });
        }

        if (coupon.status !== 'Active') {
            return Response.json({
                valid: false,
                error: 'This referral coupon is currently inactive. Please check the coupon code and try again.',
                originalAmount: 1099,
                discountAmount: 0,
                finalAmount: 1099
            }, { status: 400 });
        }

        return Response.json({
            valid: true,
            couponCode: coupon.couponCode,
            teacherName: coupon.teacherName,
            teacherReferralId: coupon._id.toString(),
            originalAmount: 1099,
            discountAmount: 100,
            finalAmount: 999
        });
    } catch (error) {
        console.error('Error validating coupon:', error);
        return Response.json({
            valid: false,
            error: 'Server error while validating coupon.',
            originalAmount: 1099,
            discountAmount: 0,
            finalAmount: 1099
        }, { status: 500 });
    }
}
