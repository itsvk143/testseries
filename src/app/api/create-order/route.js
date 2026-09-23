import { getRazorpayClient } from '@/lib/paymentConfig';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    try {
        let body = {};
        try {
            body = await request.json();
        } catch (e) {
            body = {};
        }

        const session = await auth().catch(() => null);

        // Get amount from body or default to 999 INR (99900 paise)
        let amount = body.amount !== undefined ? Number(body.amount) : 99900;
        const currency = body.currency || 'INR';
        const receipt = body.receipt || `rcpt_${Date.now()}`.slice(0, 40);

        // Validation: minimum amount 100 paise (₹1.00)
        if (isNaN(amount) || amount < 100) {
            return Response.json({
                error: 'INVALID_AMOUNT',
                message: 'Amount must be at least 100 paise (₹1.00).'
            }, { status: 400 });
        }

        const razorpay = getRazorpayClient();
        const options = {
            amount: Math.round(amount),
            currency,
            receipt,
            notes: {
                userEmail: session?.user?.email || body.email || 'guest',
                source: 'Standard Checkout API'
            }
        };

        const order = await razorpay.orders.create(options);

        if (!order?.id) {
            return Response.json({
                error: 'ORDER_CREATION_FAILED',
                message: 'Failed to create order with Razorpay.'
            }, { status: 500 });
        }

        // Save order to payments collection if DB available
        try {
            const client = await clientPromise;
            const db = client.db('testseries');
            await db.collection('payments').insertOne({
                paymentId: order.id,
                email: session?.user?.email || body.email || '',
                studentName: session?.user?.name || body.name || 'Student',
                amount: Math.round(amount) / 100,
                currency,
                razorpayOrderId: order.id,
                status: 'created',
                receipt,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        } catch (dbErr) {
            console.warn('DB recording note:', dbErr.message);
        }

        const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

        return Response.json({
            success: true,
            order_id: order.id,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key_id: keyId,
            keyId
        });
    } catch (error) {
        console.error('Error in /api/create-order:', error);
        return Response.json({
            error: 'ORDER_CREATION_FAILED',
            message: error.message || 'Error communicating with Razorpay API.'
        }, { status: 500 });
    }
}
