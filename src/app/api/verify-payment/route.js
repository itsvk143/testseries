import crypto from 'crypto';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { activateStudentTestAccess } from '@/lib/paymentService';

export async function POST(request) {
    try {
        const body = await request.json().catch(() => ({}));
        const orderId = body.razorpay_order_id || body.order_id;
        const paymentId = body.razorpay_payment_id || body.payment_id;
        const signature = body.razorpay_signature || body.signature;

        if (!orderId || !paymentId || !signature) {
            return Response.json({
                error: 'MISSING_FIELDS',
                message: 'Missing required parameters: razorpay_order_id, razorpay_payment_id, razorpay_signature.'
            }, { status: 400 });
        }

        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) {
            return Response.json({
                error: 'SERVER_CONFIG_ERROR',
                message: 'Razorpay secret key is not configured on the server.'
            }, { status: 500 });
        }

        // HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(`${orderId}|${paymentId}`)
            .digest('hex');

        const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
        const signatureBuffer = Buffer.from(signature, 'utf8');

        const isMatch = (expectedBuffer.length === signatureBuffer.length) &&
            crypto.timingSafeEqual(expectedBuffer, signatureBuffer);

        if (!isMatch) {
            console.error('❌ Signature mismatch for order:', orderId);
            return Response.json({
                success: false,
                error: 'INVALID_SIGNATURE',
                message: 'Cryptographic signature mismatch. Payment not verified.'
            }, { status: 400 });
        }

        // Database updates & student access activation
        try {
            const client = await clientPromise;
            const db = client.db('testseries');
            const now = new Date();

            const paymentRecord = await db.collection('payments').findOne({
                $or: [{ razorpayOrderId: orderId }, { paymentId: orderId }]
            });

            if (paymentRecord) {
                await db.collection('payments').updateOne(
                    { _id: paymentRecord._id },
                    {
                        $set: {
                            status: 'paid',
                            razorpayPaymentId: paymentId,
                            razorpaySignature: signature,
                            paidAt: now,
                            updatedAt: now
                        }
                    }
                );

                const session = await auth().catch(() => null);
                const studentEmail = session?.user?.email || paymentRecord.email;

                if (studentEmail) {
                    await activateStudentTestAccess({
                        db,
                        studentEmail,
                        paymentRecord: {
                            ...paymentRecord,
                            razorpayPaymentId: paymentId
                        }
                    });
                }
            }
        } catch (dbErr) {
            console.warn('DB update note in verify-payment:', dbErr.message);
        }

        return Response.json({
            success: true,
            message: 'Payment signature verified successfully.',
            order_id: orderId,
            payment_id: paymentId
        });
    } catch (error) {
        console.error('Error in /api/verify-payment:', error);
        return Response.json({
            error: 'VERIFICATION_FAILED',
            message: error.message || 'Server error during payment verification.'
        }, { status: 500 });
    }
}
