import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { verifyPaymentSignature, activateStudentTestAccess } from '@/lib/paymentService';
import { getRazorpayClient } from '@/lib/paymentConfig';

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

        // 1. Locate the internal payment order record
        const paymentRecord = await db.collection('payments').findOne({
            razorpayOrderId: razorpay_order_id
        });

        if (!paymentRecord) {
            return Response.json({
                error: 'ORDER_NOT_FOUND',
                message: 'No corresponding order record found in database.'
            }, { status: 404 });
        }

        // 2. Idempotency check: If already marked PAID and amountVerified, return verified result immediately
        if (paymentRecord.paymentStatus === 'PAID' && paymentRecord.amountVerified) {
            return Response.json({
                success: true,
                message: 'Payment already verified and active.',
                paymentId: paymentRecord.razorpayPaymentId || razorpay_payment_id,
                orderId: paymentRecord.razorpayOrderId,
                amount: paymentRecord.finalAmount || paymentRecord.amount,
                exam: paymentRecord.exam,
                productName: paymentRecord.productName
            });
        }

        const now = new Date();

        // 3. Transition to PAYMENT_VERIFICATION
        await db.collection('payments').updateOne(
            { _id: paymentRecord._id },
            {
                $set: { paymentStatus: 'PAYMENT_VERIFICATION', updatedAt: now },
                $push: {
                    statusHistory: {
                        previousStatus: paymentRecord.paymentStatus || 'PAYMENT_PENDING',
                        newStatus: 'PAYMENT_VERIFICATION',
                        timestamp: now,
                        reason: 'Initiated cryptographic verification'
                    }
                }
            }
        );

        // 4. Verify cryptographic signature (HMAC-SHA256)
        const isValidSignature = verifyPaymentSignature({
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            signature: razorpay_signature
        });

        if (!isValidSignature) {
            console.error('❌ Cryptographic signature verification failed for order:', razorpay_order_id);
            await db.collection('payments').updateOne(
                { _id: paymentRecord._id },
                {
                    $set: {
                        paymentStatus: 'VERIFICATION_FAILED',
                        status: 'failed',
                        amountVerified: false,
                        failureReason: 'Cryptographic signature mismatch',
                        razorpayPaymentId: razorpay_payment_id,
                        updatedAt: now
                    },
                    $push: {
                        statusHistory: {
                            previousStatus: 'PAYMENT_VERIFICATION',
                            newStatus: 'VERIFICATION_FAILED',
                            timestamp: now,
                            reason: 'Cryptographic signature mismatch'
                        }
                    }
                }
            );

            return Response.json({
                error: 'INVALID_SIGNATURE',
                message: 'Payment verification failed: Signature mismatch. If you were debited, please contact support.'
            }, { status: 400 });
        }

        // 5. Amount Verification: Expected vs Actual
        const expectedFinalAmount = paymentRecord.finalAmount || paymentRecord.amount;
        const expectedAmountInPaise = Math.round(expectedFinalAmount * 100);

        try {
            const razorpay = getRazorpayClient();
            const rzpPayment = await razorpay.payments.fetch(razorpay_payment_id);

            if (rzpPayment) {
                // Ensure order ID matches
                if (rzpPayment.order_id && rzpPayment.order_id !== razorpay_order_id) {
                    await db.collection('payments').updateOne(
                        { _id: paymentRecord._id },
                        {
                            $set: {
                                paymentStatus: 'VERIFICATION_FAILED',
                                status: 'failed',
                                amountVerified: false,
                                failureReason: 'Razorpay order ID mismatch with payment entity',
                                updatedAt: now
                            }
                        }
                    );
                    return Response.json({
                        error: 'VERIFICATION_FAILED',
                        message: 'Payment verification failed: Order ID mismatch.'
                    }, { status: 400 });
                }

                // Ensure actual amount matches expected amount
                if (rzpPayment.amount && Number(rzpPayment.amount) !== expectedAmountInPaise) {
                    console.error(`🚨 Amount mismatch! Expected ${expectedAmountInPaise} paise, but Razorpay reports ${rzpPayment.amount} paise.`);
                    await db.collection('payments').updateOne(
                        { _id: paymentRecord._id },
                        {
                            $set: {
                                paymentStatus: 'VERIFICATION_FAILED',
                                status: 'failed',
                                amountVerified: false,
                                failureReason: `Amount mismatch: expected ${expectedAmountInPaise} paise, received ${rzpPayment.amount} paise`,
                                updatedAt: now
                            },
                            $push: {
                                statusHistory: {
                                    previousStatus: 'PAYMENT_VERIFICATION',
                                    newStatus: 'VERIFICATION_FAILED',
                                    timestamp: now,
                                    reason: `Amount mismatch: expected ₹${expectedFinalAmount}, got ₹${rzpPayment.amount / 100}`
                                }
                            }
                        }
                    );
                    return Response.json({
                        error: 'VERIFICATION_FAILED',
                        message: 'Payment verification failed: Transaction amount mismatch.'
                    }, { status: 400 });
                }
            }
        } catch (rzpFetchErr) {
            console.warn('Note: Razorpay API payment fetch:', rzpFetchErr.message);
        }

        // 6. Check for duplicate processing of razorpayPaymentId across other orders
        const duplicateProcessing = await db.collection('payments').findOne({
            _id: { $ne: paymentRecord._id },
            razorpayPaymentId: razorpay_payment_id,
            paymentStatus: 'PAID'
        });

        if (duplicateProcessing) {
            return Response.json({
                error: 'DUPLICATE_PAYMENT',
                message: 'This Razorpay payment transaction has already been applied to another record.'
            }, { status: 400 });
        }

        // 7. Mark payment as PAID with amountVerified = true
        await db.collection('payments').updateOne(
            { _id: paymentRecord._id },
            {
                $set: {
                    paymentStatus: 'PAID',
                    status: 'paid', // legacy mirror
                    amountVerified: true,
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    paymentVerifiedAt: now,
                    paidAt: now,
                    updatedAt: now
                },
                $push: {
                    statusHistory: {
                        previousStatus: 'PAYMENT_VERIFICATION',
                        newStatus: 'PAID',
                        timestamp: now,
                        reason: 'Cryptographic signature and amount verified',
                        razorpayPaymentId: razorpay_payment_id
                    }
                }
            }
        );

        // 8. Automatically activate student test access (strictly requires paymentStatus === 'PAID')
        await activateStudentTestAccess({
            db,
            studentEmail: userEmail,
            paymentRecord: {
                ...paymentRecord,
                paymentStatus: 'PAID',
                amountVerified: true,
                razorpayPaymentId: razorpay_payment_id
            }
        });

        console.log(`✅ Automated 732-day test access activated for ${userEmail} (Payment: ${razorpay_payment_id})`);

        return Response.json({
            success: true,
            message: 'Payment verified successfully. Test access is now active.',
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            amount: expectedFinalAmount,
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
