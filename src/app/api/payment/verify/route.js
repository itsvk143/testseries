import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { verifyPaymentSignature, activateStudentTestAccess } from '@/lib/paymentService';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
        }

        const body = await request.json();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return Response.json({
                error: 'MISSING_PAYMENT_DETAILS',
                message: 'Incomplete Razorpay verification payload.'
            }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const userEmail = session.user.email.toLowerCase().trim();

        // Find existing payment order record
        const paymentRecord = await db.collection('payments').findOne({
            razorpayOrderId: razorpay_order_id
        });

        if (!paymentRecord) {
            return Response.json({
                error: 'ORDER_NOT_FOUND',
                message: 'No corresponding order record found in database.'
            }, { status: 404 });
        }

        // Verify cryptographic signature
        const isValidSignature = verifyPaymentSignature({
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            signature: razorpay_signature
        });

        const now = new Date();

        if (!isValidSignature) {
            console.error('❌ Cryptographic signature verification failed for order:', razorpay_order_id);
            await db.collection('payments').updateOne(
                { _id: paymentRecord._id },
                {
                    $set: {
                        status: 'failed',
                        failureReason: 'Cryptographic signature mismatch',
                        razorpayPaymentId: razorpay_payment_id,
                        updatedAt: now
                    }
                }
            );

            return Response.json({
                error: 'INVALID_SIGNATURE',
                message: 'Payment verification failed: Signature mismatch. If you were debited, please contact support.'
            }, { status: 400 });
        }

        // Idempotency: If already marked paid, return success directly
        if (paymentRecord.status === 'paid') {
            return Response.json({
                success: true,
                message: 'Payment already verified and active.',
                paymentId: paymentRecord.razorpayPaymentId,
                orderId: paymentRecord.razorpayOrderId,
                amount: paymentRecord.amount,
                exam: paymentRecord.exam,
                productName: paymentRecord.productName
            });
        }

        // Mark payment as paid
        await db.collection('payments').updateOne(
            { _id: paymentRecord._id },
            {
                $set: {
                    status: 'paid',
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    paidAt: now,
                    updatedAt: now
                }
            }
        );

        // Automatically activate student test access (NO admin approval required!)
        await activateStudentTestAccess({
            db,
            studentEmail: userEmail,
            paymentRecord: {
                ...paymentRecord,
                razorpayPaymentId: razorpay_payment_id
            }
        });

        console.log(`✅ Automated 732-day test access activated for ${userEmail} (Payment: ${razorpay_payment_id})`);

        return Response.json({
            success: true,
            message: 'Payment verified successfully. Test access is now active.',
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            amount: paymentRecord.amount,
            exam: paymentRecord.exam,
            productName: paymentRecord.productName,
            studentName: paymentRecord.studentName,
            studentCode: paymentRecord.studentCode
        });
    } catch (error) {
        console.error('Payment verification failed:', error);
        return Response.json({
            error: 'VERIFICATION_ERROR',
            message: error.message || 'Payment verification encountered an unexpected error.'
        }, { status: 500 });
    }
}
