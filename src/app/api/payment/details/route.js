import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { getProductForExam } from '@/lib/paymentConfig';
import { normalizeToCanonicalExam, getCanonicalExamDisplay } from '@/lib/authorization';

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const userEmail = session.user.email.toLowerCase().trim();

        const user = await db.collection('users').findOne({
            email: { $regex: new RegExp(`^${userEmail}$`, 'i') }
        });

        if (!user) {
            return Response.json({ error: 'User account not found.' }, { status: 404 });
        }

        // Student's registered exam
        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor);
        if (!canonicalExam) {
            return Response.json({
                error: 'EXAM_NOT_SELECTED',
                message: 'Please complete your student profile and select your target exam before proceeding to payment.',
                redirectTo: '/dashboard'
            }, { status: 400 });
        }

        const product = getProductForExam(canonicalExam);
        if (!product) {
            return Response.json({
                error: 'PRODUCT_NOT_FOUND',
                message: `No test series package found for exam: ${getCanonicalExamDisplay(canonicalExam)}`
            }, { status: 404 });
        }

        const isPaid = user.paymentStatus === 'CONFIRMED' || user.paymentStatus === 'PAID';
        const razorpayKeyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';

        return Response.json({
            student: {
                id: user._id.toString(),
                name: user.name || session.user.name || '',
                email: user.email || userEmail,
                mobile: user.mobileNo || user.phone || '',
                studentCode: user.studentCode || session.user.studentCode || '',
                exam: canonicalExam,
                examDisplay: getCanonicalExamDisplay(canonicalExam),
                profileCompleted: !!user.profileCompleted
            },
            product,
            isPaid,
            paymentStatus: user.paymentStatus || 'PENDING',
            accountStatus: user.accountStatus || 'PENDING_APPROVAL',
            razorpayKeyId
        });
    } catch (error) {
        console.error('Failed to get payment details:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
