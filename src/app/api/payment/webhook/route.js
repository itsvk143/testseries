import clientPromise from '@/lib/mongodb';
import { verifyWebhookSignature, activateStudentTestAccess } from '@/lib/paymentService';

export async function POST(request) {
    try {
        const signature = request.headers.get('x-razorpay-signature');
        if (!signature) {
            console.warn('⚠️ Webhook received without x-razorpay-signature header');
            return Response.json({ error: 'Signature header missing' }, { status: 400 });
        }

        const rawBody = await request.text();

        // Cryptographically verify webhook signature
        const isValid = verifyWebhookSignature({ rawBody, signature });
        if (!isValid) {
            console.error('❌ Invalid Razorpay webhook signature');
            return Response.json({ error: 'Invalid webhook signature' }, { status: 400 });
        }

        const eventData = JSON.parse(rawBody);
        const event = eventData.event;
        const payload = eventData.payload;

        console.log(`🔔 Razorpay Webhook Event Received: ${event}`);

        const client = await clientPromise;
        const db = client.db('testseries');
        const now = new Date();

        if (event === 'payment.captured' || event === 'order.paid') {
            const paymentObj = payload.payment?.entity;
            const orderId = paymentObj?.order_id || payload.order?.entity?.id;
            const paymentId = paymentObj?.id;

            if (!orderId && !paymentId) {
                return Response.json({ status: 'ignored_no_identifiers' }, { status: 200 });
            }

            // Find payment in database
            const payment = await db.collection('payments').findOne({
                $or: [
                    { razorpayOrderId: orderId },
                    { razorpayPaymentId: paymentId }
                ]
            });

            if (payment) {
                // Idempotency: if already marked PAID and amountVerified, return 200 immediately
                if (payment.paymentStatus === 'PAID' && payment.amountVerified) {
                    console.log(`ℹ️ Webhook: Payment ${paymentId} already marked as PAID and verified.`);
                    return Response.json({ status: 'already_processed' }, { status: 200 });
                }

                // Amount Verification
                const expectedAmountInPaise = Math.round((payment.finalAmount || payment.amount) * 100);
                const actualAmountInPaise = paymentObj?.amount;

                if (actualAmountInPaise && Number(actualAmountInPaise) !== expectedAmountInPaise) {
                    console.error(`🚨 Webhook Amount mismatch! Expected ${expectedAmountInPaise} paise, received ${actualAmountInPaise} paise.`);
                    await db.collection('payments').updateOne(
                        { _id: payment._id },
                        {
                            $set: {
                                paymentStatus: 'VERIFICATION_FAILED',
                                status: 'failed',
                                amountVerified: false,
                                failureReason: `Webhook amount mismatch: expected ${expectedAmountInPaise}, received ${actualAmountInPaise}`,
                                updatedAt: now
                            }
                        }
                    );
                    return Response.json({ status: 'verification_failed_amount_mismatch' }, { status: 200 });
                }

                // Update to PAID
                await db.collection('payments').updateOne(
                    { _id: payment._id },
                    {
                        $set: {
                            paymentStatus: 'PAID',
                            status: 'paid', // legacy mirror
                            amountVerified: true,
                            paymentVerifiedAt: now,
                            razorpayPaymentId: paymentId,
                            paidAt: now,
                            updatedAt: now,
                            webhookProcessedAt: now
                        },
                        $push: {
                            statusHistory: {
                                previousStatus: payment.paymentStatus || 'PAYMENT_PENDING',
                                newStatus: 'PAID',
                                timestamp: now,
                                reason: `Razorpay webhook confirmed event: ${event}`,
                                razorpayPaymentId: paymentId
                            }
                        }
                    }
                );

                // Activate access for the student
                if (payment.email) {
                    await activateStudentTestAccess({
                        db,
                        studentEmail: payment.email,
                        paymentRecord: {
                            ...payment,
                            paymentStatus: 'PAID',
                            amountVerified: true,
                            razorpayPaymentId: paymentId
                        }
                    });
                }
            } else {
                console.warn(`⚠️ Webhook: No prior order found for order ${orderId} / payment ${paymentId}`);
            }
        } else if (event === 'payment.failed') {
            const paymentObj = payload.payment?.entity;
            const orderId = paymentObj?.order_id;
            const paymentId = paymentObj?.id;

            if (orderId) {
                const payment = await db.collection('payments').findOne({ razorpayOrderId: orderId });
                if (payment && payment.paymentStatus !== 'PAID') {
                    await db.collection('payments').updateOne(
                        { razorpayOrderId: orderId },
                        {
                            $set: {
                                paymentStatus: 'FAILED',
                                status: 'failed',
                                razorpayPaymentId: paymentId,
                                failureReason: paymentObj?.error_description || 'Payment failed at gateway',
                                errorCode: paymentObj?.error_code || null,
                                updatedAt: now
                            },
                            $push: {
                                statusHistory: {
                                    previousStatus: payment.paymentStatus || 'PAYMENT_PENDING',
                                    newStatus: 'FAILED',
                                    timestamp: now,
                                    reason: paymentObj?.error_description || 'Razorpay webhook payment.failed'
                                }
                            }
                        }
                    );
                }
            }
        }

        return Response.json({ received: true, event });
    } catch (error) {
        console.error('Webhook processing error:', error);
        return Response.json({ error: 'Webhook handler error' }, { status: 500 });
    }
}
