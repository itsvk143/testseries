import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('testseries');

        // Count successful eligible payments (status: 'paid')
        // Do NOT count failed, cancelled, or pending payments
        const paymentCount = await db.collection('payments').countDocuments({ status: 'paid' });
        
        // Also check paid users to ensure accuracy
        const userPaidCount = await db.collection('users').countDocuments({
            paymentStatus: { $in: ['PAID', 'CONFIRMED'] }
        });

        // Use the actual verified count of paid enrollments, capped at 1,000 for launch offer
        const verifiedPaidSeats = Math.max(paymentCount, userPaidCount);
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
            success: false,
            isAvailable: false,
            total: 1000,
            message: 'Seat counter currently unavailable'
        }, { status: 200 }); // return 200 with fallback flag so frontend gracefully adapts
    }
}
