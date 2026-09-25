import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { getProductForExam, getRazorpayClient } from '@/lib/paymentConfig';
import { normalizeToCanonicalExam, getCanonicalExamDisplay } from '@/lib/authorization';
import { resolveCouponAndPricing, ensureCouponAndPaymentIndexes } from '@/lib/couponService';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized. Please sign in to make a payment.' }, { status: 401 });
        }

        const body = await request.json().catch(() => ({}));
        const rawCoupon = body.couponCode || null;

        const client = await clientPromise;
        const db = client.db('testseries');
        await ensureCouponAndPaymentIndexes(db);

        const userEmail = session.user.email.toLowerCase().trim();

        const user = await db.collection('users').findOne({
            email: { $regex: new RegExp(`^${userEmail}$`, 'i') }
        });

        if (!user) {
            return Response.json({ error: 'User account not found.' }, { status: 404 });
        }

        // Validate canonical exam
        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor);
        if (!canonicalExam) {
            return Response.json({
                error: 'EXAM_NOT_CONFIGURED',
                message: 'Please complete your student profile and select your exam before purchasing test access.'
            }, { status: 400 });
        }

        // Validate product on server
        const product = getProductForExam(canonicalExam);
        if (!product) {
            return Response.json({
                error: 'PRODUCT_NOT_FOUND',
                message: `No active test package for ${getCanonicalExamDisplay(canonicalExam)}.`
            }, { status: 404 });
        }

        // Check if user has already paid
        const isPaid = user.paymentStatus === 'CONFIRMED' || user.paymentStatus === 'PAID';
        if (isPaid && user.authorizationExpiryDate && new Date(user.authorizationExpiryDate).getTime() > Date.now()) {
            return Response.json({
                error: 'ALREADY_PAID',
                message: 'Your test access is already active and confirmed! No further payment is required.',
                alreadyPaid: true
            }, { status: 400 });
        }

        // Server-side pricing calculation and coupon validation
        // NEVER trust client-provided amounts or discounts
        const pricing = await resolveCouponAndPricing({
            db,
            couponCode: rawCoupon,
            baseAmount: product.amount // ₹1099 default
        });

        // If client submitted an explicit coupon and it was invalid or inactive, reject order creation
        if (!pricing.valid) {
            return Response.json({
                error: 'INVALID_COUPON',
                message: pricing.error
            }, { status: 400 });
        }

        const { originalAmount, discountAmount, finalAmount, referral } = pricing;

        // Instantiate Razorpay client
        let razorpay;
        try {
            razorpay = getRazorpayClient();
        } catch (clientErr) {
            console.error('Razorpay client initialization failed:', clientErr);
            return Response.json({
                error: 'GATEWAY_CONFIG_ERROR',
                message: clientErr.message || 'Payment gateway configuration is missing or invalid. Please contact administrator.'
            }, { status: 503 });
        }

        // Amount in paise strictly calculated on server (e.g. ₹999 -> 99900 paise, ₹1099 -> 109900 paise)
        const amountInPaise = Math.round(finalAmount * 100);
        const receipt = `rcpt_${user.studentCode || 'stu'}_${Date.now()}`.slice(0, 40);

        const orderOptions = {
            amount: amountInPaise,
            currency: product.currency || 'INR',
            receipt,
            notes: {
                studentEmail: userEmail,
                studentName: user.name || session.user.name || '',
                studentCode: user.studentCode || '',
                exam: canonicalExam,
                productId: product.id,
                productName: product.name,
                couponCode: referral?.couponCode || '',
                teacherName: referral?.teacherName || ''
            }
        };

        const razorpayOrder = await razorpay.orders.create(orderOptions);

        if (!razorpayOrder?.id) {
            throw new Error('Failed to obtain Order ID from Razorpay.');
        }

        const now = new Date();
        const paymentRecord = {
            paymentId: razorpayOrder.id,
            studentId: user._id,
            studentCode: user.studentCode || '',
            studentName: user.name || session.user.name || 'Student',
            email: userEmail,
            mobile: user.mobileNo || user.phone || '',
            exam: canonicalExam,
            productId: product.id,
            productName: product.name,
            originalAmount,
            discountAmount,
            finalAmount,
            amount: finalAmount, // legacy mirror for backwards compatibility
            currency: product.currency || 'INR',
            couponCode: referral?.couponCode || null,
            teacherReferralId: referral?.teacherReferralId || null,
            teacherName: referral?.teacherName || null,
            paymentStatus: 'ORDER_CREATED', // canonical payment lifecycle field
            status: 'created', // legacy mirror
            razorpayOrderId: razorpayOrder.id,
            razorpayPaymentId: null,
            razorpaySignature: null,
            receipt,
            amountVerified: false,
            createdAt: now,
            updatedAt: now,
            statusHistory: [
                {
                    previousStatus: null,
                    newStatus: 'CREATED',
                    timestamp: now,
                    reason: 'Student initiated checkout'
                },
                ...(referral ? [{
                    previousStatus: 'CREATED',
                    newStatus: 'COUPON_VALIDATED',
                    timestamp: now,
                    reason: `Coupon validated: ${referral.couponCode} (${referral.teacherName})`,
                    couponCode: referral.couponCode,
                    teacherName: referral.teacherName
                }] : []),
                {
                    previousStatus: referral ? 'COUPON_VALIDATED' : 'CREATED',
                    newStatus: 'ORDER_CREATED',
                    timestamp: now,
                    reason: `Razorpay order created with amount ₹${finalAmount}`,
                    razorpayOrderId: razorpayOrder.id,
                    amount: finalAmount
                }
            ]
        };

        await db.collection('payments').insertOne(paymentRecord);

        // Update user's last order ID
        if (user.paymentStatus !== 'CONFIRMED' && user.paymentStatus !== 'PAID') {
            await db.collection('users').updateOne(
                { _id: user._id },
                { $set: { lastPaymentOrderId: razorpayOrder.id, updatedAt: now } }
            );
        }

        const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

        return Response.json({
            success: true,
            orderId: razorpayOrder.id,
            amount: amountInPaise,
            originalAmount,
            discountAmount,
            finalAmount,
            currency: product.currency || 'INR',
            keyId,
            product: {
                id: product.id,
                name: product.name,
                exam: canonicalExam,
                amount: finalAmount
            },
            referral,
            student: {
                name: user.name || session.user.name || '',
                email: userEmail,
                mobile: user.mobileNo || user.phone || '',
                studentCode: user.studentCode || ''
            }
        });
    } catch (error) {
        console.error('Failed to create Razorpay order:', error);

        const rawDesc = error.error?.description || error.description || error.message || '';
        let userFriendlyMsg = 'Unable to initiate Razorpay order. Please try again.';

        if (rawDesc.toLowerCase().includes('auth') || error.statusCode === 401) {
            userFriendlyMsg = 'Razorpay Authentication Failed: The API Key ID or Secret is invalid or expired. Please check environment variables.';
        } else if (rawDesc) {
            userFriendlyMsg = `Razorpay Gateway Error: ${rawDesc}`;
        }

        return Response.json({
            error: 'ORDER_CREATION_FAILED',
            message: userFriendlyMsg,
            details: error.error || error.message || null
        }, { status: 500 });
    }
}
