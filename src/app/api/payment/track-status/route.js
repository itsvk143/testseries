import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { recordPaymentStatusTransition } from '@/lib/paymentService';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json().catch(() => ({}));
        const { orderId, action, reason } = body;

        if (!orderId) {
            return Response.json({ error: 'Order ID is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const payment = await db.collection('payments').findOne({ razorpayOrderId: orderId });
        if (!payment) {
            return Response.json({ error: 'Payment record not found' }, { status: 404 });
        }

        // Never transition an already PAID payment to CANCELLED or FAILED
        if (payment.paymentStatus === 'PAID' || payment.status === 'paid') {
            return Response.json({ status: 'ignored_already_paid' });
        }

        let newStatus = null;
        if (action === 'CHECKOUT_OPENED') {
            newStatus = 'PAYMENT_PENDING';
        } else if (action === 'CHECKOUT_CANCELLED') {
            newStatus = 'CANCELLED';
        } else if (action === 'CHECKOUT_FAILED') {
            newStatus = 'FAILED';
        }

        if (newStatus && payment.paymentStatus !== newStatus) {
            await recordPaymentStatusTransition(db, {
                razorpayOrderId: orderId,
                prevStatus: payment.paymentStatus || 'ORDER_CREATED',
                newStatus,
                reason: reason || `Client event: ${action}`
            });
        }

        return Response.json({ success: true, paymentStatus: newStatus || payment.paymentStatus });
    } catch (err) {
        console.error('Error tracking payment status:', err);
        return Response.json({ error: 'Internal Error' }, { status: 500 });
    }
}
