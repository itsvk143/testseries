import crypto from 'crypto';
import { ObjectId } from 'mongodb';
import { calculate732DayExpiry, logAdminAudit } from './authorization.js';
import { getRazorpayClient } from './paymentConfig.js';

/**
 * Valid canonical paymentStatus values.
 */
export const CANONICAL_PAYMENT_STATUSES = [
    'CREATED',
    'COUPON_VALIDATED',
    'ORDER_CREATED',
    'PAYMENT_PENDING',
    'PAYMENT_VERIFICATION',
    'PAID',
    'FAILED',
    'CANCELLED',
    'VERIFICATION_FAILED',
    'REFUNDED'
];

/**
 * Logs a payment status transition in the payment's audit history.
 */
export async function recordPaymentStatusTransition(db, { paymentId, razorpayOrderId, prevStatus, newStatus, reason = '', meta = {} }) {
    if (!paymentId && !razorpayOrderId) return;

    const query = paymentId
        ? (ObjectId.isValid(paymentId) ? { _id: new ObjectId(paymentId) } : { _id: paymentId })
        : { razorpayOrderId };

    const now = new Date();
    const historyEntry = {
        previousStatus: prevStatus || null,
        newStatus,
        timestamp: now,
        reason: reason || `Transitioned to ${newStatus}`,
        meta
    };

    try {
        await db.collection('payments').updateOne(
            query,
            {
                $set: {
                    paymentStatus: newStatus,
                    updatedAt: now
                },
                $push: {
                    statusHistory: historyEntry
                }
            }
        );
    } catch (err) {
        console.error('Failed to log payment status transition:', err);
    }
}

/**
 * Cryptographically verifies Razorpay payment signature from client checkout.
 * Uses HMAC SHA-256 with RAZORPAY_KEY_SECRET.
 */
export function verifyPaymentSignature({ orderId, paymentId, signature }) {
    if (!orderId || !paymentId || !signature) {
        return false;
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
        console.error('❌ RAZORPAY_KEY_SECRET is not configured for signature verification');
        return false;
    }

    try {
        const body = `${orderId}|${paymentId}`;
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body)
            .digest('hex');

        // Constant-time string comparison to prevent timing attacks
        const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
        const signatureBuffer = Buffer.from(signature, 'utf8');

        if (expectedBuffer.length !== signatureBuffer.length) {
            return false;
        }

        return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
    } catch (err) {
        console.error('Signature verification error:', err);
        return false;
    }
}

/**
 * Cryptographically verifies Razorpay webhook signature.
 * Uses HMAC SHA-256 with RAZORPAY_WEBHOOK_SECRET.
 */
export function verifyWebhookSignature({ rawBody, signature }) {
    if (!rawBody || !signature) {
        return false;
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) {
        console.error('❌ RAZORPAY_WEBHOOK_SECRET is not configured for webhook verification');
        return false;
    }

    try {
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(rawBody)
            .digest('hex');

        const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
        const signatureBuffer = Buffer.from(signature, 'utf8');

        if (expectedBuffer.length !== signatureBuffer.length) {
            return false;
        }

        return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
    } catch (err) {
        console.error('Webhook signature verification error:', err);
        return false;
    }
}

/**
 * Automatically activates 732-day full access for a student upon verified payment.
 * Requires paymentStatus === 'PAID' and amountVerified === true.
 */
export async function activateStudentTestAccess({ db, studentEmail, paymentRecord }) {
    // Strictly verify canonical payment status and amount verification
    if (paymentRecord.paymentStatus !== 'PAID' || !paymentRecord.amountVerified) {
        throw new Error(`Cannot activate student test access: payment status '${paymentRecord.paymentStatus}' is not verified PAID.`);
    }

    const emailNormalized = studentEmail.toLowerCase().trim();
    const startDate = new Date();
    const expiryDate = calculate732DayExpiry(startDate);

    const fullApprovals = {
        mock: true,
        live: true,
        subject: true,
        chapter: true,
        subtopic: true
    };

    const updateFields = {
        paymentStatus: 'PAID',
        accountStatus: 'ACTIVE',
        isApproved: true,
        approvals: fullApprovals,
        authorizationStartDate: startDate.toISOString(),
        authorizationExpiryDate: expiryDate.toISOString(),
        paymentConfirmedAt: startDate,
        hasPaidAccess: true,
        paidExam: paymentRecord.exam,
        updatedAt: startDate
    };

    const result = await db.collection('users').findOneAndUpdate(
        { email: { $regex: new RegExp(`^${emailNormalized}$`, 'i') } },
        {
            $set: updateFields,
            $push: {
                authorizationHistory: {
                    action: 'AUTO_ACTIVATED_RAZORPAY_PAYMENT',
                    paymentId: paymentRecord.razorpayPaymentId || paymentRecord._id?.toString(),
                    orderId: paymentRecord.razorpayOrderId,
                    amount: paymentRecord.finalAmount || paymentRecord.amount,
                    originalAmount: paymentRecord.originalAmount || paymentRecord.amount,
                    discountAmount: paymentRecord.discountAmount || 0,
                    couponCode: paymentRecord.couponCode || null,
                    teacherName: paymentRecord.teacherName || null,
                    exam: paymentRecord.exam,
                    timestamp: startDate,
                    startDate: startDate.toISOString(),
                    expiryDate: expiryDate.toISOString(),
                    note: 'Automated 732-day test access activated via verified Razorpay payment.'
                }
            }
        },
        { returnDocument: 'after' }
    );

    // Audit log
    await logAdminAudit(db, {
        action: 'PAYMENT_AUTO_ACTIVATION',
        studentId: result?._id || paymentRecord.studentId,
        adminId: 'SYSTEM_RAZORPAY',
        prevStatus: 'PENDING',
        newStatus: 'ACTIVE',
        details: {
            paymentId: paymentRecord.razorpayPaymentId,
            orderId: paymentRecord.razorpayOrderId,
            amount: paymentRecord.finalAmount || paymentRecord.amount,
            couponCode: paymentRecord.couponCode,
            teacherName: paymentRecord.teacherName,
            exam: paymentRecord.exam,
            expiryDate: expiryDate.toISOString()
        }
    });

    return result;
}

/**
 * Processes refund for a verified payment via Razorpay Refund API.
 */
export async function processRazorpayRefund({ db, paymentDbId, reason, adminEmail }) {
    const payment = await db.collection('payments').findOne({ _id: new ObjectId(paymentDbId) });
    if (!payment) {
        throw new Error('Payment record not found.');
    }

    const currentStatus = payment.paymentStatus || (payment.status === 'paid' ? 'PAID' : payment.status);
    if (currentStatus !== 'PAID') {
        throw new Error(`Cannot refund payment with status '${currentStatus}'. Only verified 'PAID' transactions can be refunded.`);
    }

    if (!payment.razorpayPaymentId) {
        throw new Error('Payment record is missing Razorpay Payment ID.');
    }

    const razorpay = getRazorpayClient();
    const refundResponse = await razorpay.payments.refund(payment.razorpayPaymentId, {
        notes: {
            reason: reason || 'Admin initiated refund',
            refundedBy: adminEmail || 'Admin'
        }
    });

    const now = new Date();
    await db.collection('payments').updateOne(
        { _id: new ObjectId(paymentDbId) },
        {
            $set: {
                paymentStatus: 'REFUNDED',
                status: 'refunded', // legacy mirror
                refundId: refundResponse.id,
                refundAmount: (refundResponse.amount || ((payment.finalAmount || payment.amount) * 100)) / 100,
                refundReason: reason || 'Admin refund',
                refundedAt: now,
                refundedBy: adminEmail,
                updatedAt: now
            },
            $push: {
                statusHistory: {
                    previousStatus: currentStatus,
                    newStatus: 'REFUNDED',
                    timestamp: now,
                    reason: reason || 'Admin initiated refund',
                    refundId: refundResponse.id
                }
            }
        }
    );

    // Revoke user test access upon refund
    if (payment.email) {
        await db.collection('users').updateOne(
            { email: { $regex: new RegExp(`^${payment.email.toLowerCase().trim()}$`, 'i') } },
            {
                $set: {
                    paymentStatus: 'REJECTED',
                    accountStatus: 'SUSPENDED',
                    isApproved: false,
                    hasPaidAccess: false,
                    updatedAt: now
                },
                $push: {
                    authorizationHistory: {
                        action: 'PAYMENT_REFUNDED',
                        paymentId: payment.razorpayPaymentId,
                        refundId: refundResponse.id,
                        timestamp: now,
                        note: `Access suspended due to refund: ${reason || 'Admin refund'}`
                    }
                }
            }
        );
    }

    return refundResponse;
}
