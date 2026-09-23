import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { processRazorpayRefund } from '@/lib/paymentService';

export async function POST(request, { params }) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        const body = await request.json().catch(() => ({}));
        const { reason } = body;

        const client = await clientPromise;
        const db = client.db('testseries');

        const refundResult = await processRazorpayRefund({
            db,
            paymentDbId: id,
            reason: reason || 'Admin initiated refund',
            adminEmail: session.user.email
        });

        return Response.json({
            success: true,
            message: 'Refund successfully initiated through Razorpay.',
            refund: refundResult
        });
    } catch (error) {
        console.error('Failed to process refund:', error);
        return Response.json({
            error: 'REFUND_FAILED',
            message: error.message || 'Refund processing failed.'
        }, { status: 500 });
    }
}
