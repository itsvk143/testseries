import { ObjectId } from 'mongodb';

/**
 * Normalizes coupon code to uppercase and trims whitespace.
 */
export function normalizeCouponCode(code) {
    if (!code || typeof code !== 'string') return '';
    return code.trim().toUpperCase();
}

/**
 * Ensures required indexes on teacherCoupons and payments collections.
 */
export async function ensureCouponAndPaymentIndexes(db) {
    try {
        await db.collection('teacherCoupons').createIndex(
            { couponCode: 1 },
            { unique: true, collation: { locale: 'en', strength: 2 } }
        );
        await db.collection('payments').createIndex({ razorpayOrderId: 1 }, { unique: true, sparse: true });
        await db.collection('payments').createIndex({ paymentStatus: 1 });
        await db.collection('payments').createIndex({ couponCode: 1 });
    } catch (err) {
        // Silently catch if index already exists with different options
        console.warn('Index verification note:', err.message);
    }
}

/**
 * Finds a teacher coupon by coupon code (case-insensitive).
 */
export async function findTeacherCoupon(db, couponCode) {
    const normalized = normalizeCouponCode(couponCode);
    if (!normalized) return null;

    return await db.collection('teacherCoupons').findOne({
        couponCode: { $regex: new RegExp(`^${normalized}$`, 'i') }
    });
}

/**
 * Resolves coupon validity, referral metadata, and pricing.
 * Strictly calculates originalAmount, discountAmount (flat ₹100), and finalAmount on server.
 * Implements fallback to VIKASH10 if and only if referral is missing AND VIKASH10 is Active in DB.
 * Never hardcodes teacher name. Never overrides an explicitly entered valid coupon.
 */
export async function resolveCouponAndPricing({ db, couponCode, baseAmount = 1099 }) {
    const normalizedCode = normalizeCouponCode(couponCode);

    // Scenario A: Student explicitly entered a coupon code
    if (normalizedCode) {
        const coupon = await findTeacherCoupon(db, normalizedCode);

        if (!coupon) {
            return {
                valid: false,
                error: 'Invalid teacher coupon code.',
                originalAmount: baseAmount,
                discountAmount: 0,
                finalAmount: baseAmount,
                referral: null
            };
        }

        if (coupon.status !== 'Active') {
            return {
                valid: false,
                error: 'This referral coupon is currently inactive. Please check the coupon code and try again.',
                originalAmount: baseAmount,
                discountAmount: 0,
                finalAmount: baseAmount,
                referral: null
            };
        }

        // Coupon is valid and active: Flat ₹100 discount
        return {
            valid: true,
            originalAmount: baseAmount,
            discountAmount: 100,
            finalAmount: Math.max(0, baseAmount - 100),
            referral: {
                couponCode: coupon.couponCode,
                teacherName: coupon.teacherName,
                teacherReferralId: coupon._id.toString()
            }
        };
    }

    // Scenario B: Referral is missing (null, empty, or not provided)
    // Check database for active fallback coupon: VIKASH10
    const fallbackCoupon = await findTeacherCoupon(db, 'VIKASH10');

    if (fallbackCoupon && fallbackCoupon.status === 'Active') {
        return {
            valid: true,
            isFallback: true,
            originalAmount: baseAmount,
            discountAmount: 100,
            finalAmount: Math.max(0, baseAmount - 100),
            referral: {
                couponCode: fallbackCoupon.couponCode,
                teacherName: fallbackCoupon.teacherName,
                teacherReferralId: fallbackCoupon._id.toString()
            }
        };
    }

    // No fallback active or found: standard pricing
    return {
        valid: true,
        originalAmount: baseAmount,
        discountAmount: 0,
        finalAmount: baseAmount,
        referral: null
    };
}
