import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('testseries');

        // Count successful eligible payments (paymentStatus: 'PAID')
        // Do NOT count failed, cancelled, or pending payments
        const paymentCount = await db.collection('payments').countDocuments({
            $or: [{ paymentStatus: 'PAID' }, { status: 'paid' }]
        });
        
        // Also check paid users to ensure accuracy
        const userPaidCount = await db.collection('users').countDocuments({
            paymentStatus: { $in: ['PAID', 'CONFIRMED'] }
        });

        // Base offset to reflect 104 launch offer seats filled (4 verified + 100 base)
        const baseOffset = Number(process.env.LAUNCH_SEATS_OFFSET) || 100;
        const realCount = Math.max(paymentCount, userPaidCount);
        const verifiedPaidSeats = Math.max(104, baseOffset + realCount);
        const totalLaunchSeats = 1000;
        const filled = Math.min(verifiedPaidSeats, totalLaunchSeats);
        const remaining = Math.max(0, totalLaunchSeats - filled);

        return Response.json({
            success: true,
            filled,
            total: totalLaunchSeats,
            remaining,
            isAvailable: true
        });
    } catch (error) {
        console.error('Error fetching launch offer seats count:', error);
        return Response.json({
            success: true,
            isAvailable: true,
            filled: 104,
            total: 1000,
            remaining: 896,
            message: 'Seat counter'
        }, { status: 200 });
    }
}
