import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { calculate732DayExpiry } from '@/lib/authorization';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { identifier } = body;

        if (!identifier || typeof identifier !== 'string' || !identifier.trim()) {
            return Response.json({ error: 'Please provide a valid email, student code, order ID, or payment ID.' }, { status: 400 });
        }

        const queryTerm = identifier.trim();
        const queryTermEscaped = queryTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const client = await clientPromise;
        const db = client.db('testseries');

        // 1. Search in payments collection
        const payment = await db.collection('payments').findOne({
            $or: [
                { email: { $regex: new RegExp(`^${queryTermEscaped}$`, 'i') } },
                { razorpayOrderId: queryTerm },
                { razorpayPaymentId: queryTerm },
                { paymentId: queryTerm },
                { studentCode: queryTerm }
            ]
        }, { sort: { createdAt: -1 } });

        // 2. Search in users collection
        let user = await db.collection('users').findOne({
            $or: [
                { email: { $regex: new RegExp(`^${queryTermEscaped}$`, 'i') } },
                { studentCode: queryTerm }
            ]
        });

        // If neither found, cannot restore
        if (!payment && !user) {
            return Response.json({
                error: `No student or payment record found matching "${queryTerm}".`
            }, { status: 404 });
        }

        const studentEmail = (user?.email || payment?.email || '').toLowerCase().trim();
        const startDate = new Date();
        const expiryDate = calculate732DayExpiry(startDate);

        const fullApprovals = {
            mock: true,
            live: true,
            subject: true,
            chapter: true,
            subtopic: true
        };

        if (user) {
            // Restore existing user account
            await db.collection('users').updateOne(
                { _id: user._id },
                {
                    $set: {
                        paymentStatus: 'CONFIRMED',
                        accountStatus: 'ACTIVE',
                        isApproved: true,
                        approvals: fullApprovals,
                        authorizationStartDate: startDate.toISOString(),
                        authorizationExpiryDate: expiryDate.toISOString(),
                        paymentConfirmedAt: payment?.paidAt || startDate,
                        approvedAt: startDate,
                        approvedBy: session.user.email,
                        hasPaidAccess: true,
                        paidExam: payment?.exam || user.exam || 'NEET',
                        updatedAt: startDate
                    },
                    $push: {
                        authorizationHistory: {
                            action: 'ADMIN_ACCOUNT_RESTORE',
                            admin: session.user.email,
                            paymentId: payment?.razorpayPaymentId || payment?._id?.toString() || 'MANUAL',
                            timestamp: startDate,
                            note: 'Student account restored and 732-day access granted by admin.'
                        }
                    }
                }
            );

            // Clean up any stale or orphaned accounts with this user's ID
            await db.collection('accounts').deleteMany({
                userId: user._id,
                provider: { $ne: 'google' }
            });

            // Re-link payment record if one exists
            if (payment) {
                await db.collection('payments').updateMany(
                    { email: { $regex: new RegExp(`^${studentEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } },
                    { $set: { studentId: user._id, studentCode: user.studentCode, updatedAt: startDate } }
                );
            }

            return Response.json({
                success: true,
                message: `Student account for ${studentEmail} restored with active 732-day test access.`,
                user: {
                    ...user,
                    paymentStatus: 'CONFIRMED',
                    accountStatus: 'ACTIVE',
                    isApproved: true,
                    authorizationExpiryDate: expiryDate.toISOString()
                }
            });
        } else {
            // User was deleted, but payment exists! Recreate student user record.
            const counter = await db.collection('counters').findOneAndUpdate(
                { _id: 'studentCode' },
                { $inc: { seq: 1 } },
                { returnDocument: 'after', upsert: true }
            );
            const seq = counter?.seq ?? 1;
            const studentCode = `S${String(seq).padStart(10, '0')}`;

            const newUserDoc = {
                name: payment.studentName || 'Student',
                email: studentEmail,
                studentCode,
                createdAt: startDate,
                paymentStatus: 'CONFIRMED',
                accountStatus: 'ACTIVE',
                isApproved: true,
                approvals: fullApprovals,
                authorizationStartDate: startDate.toISOString(),
                authorizationExpiryDate: expiryDate.toISOString(),
                paymentConfirmedAt: payment.paidAt || startDate,
                approvedAt: startDate,
                approvedBy: session.user.email,
                hasPaidAccess: true,
                paidExam: payment.exam || 'NEET',
                exam: payment.exam || 'NEET',
                examPreparingFor: payment.exam || 'NEET',
                mobileNo: payment.mobile || '',
                authorizationHistory: [{
                    action: 'ADMIN_ACCOUNT_RECREATED_FROM_PAYMENT',
                    admin: session.user.email,
                    paymentId: payment.razorpayPaymentId || payment._id?.toString(),
                    orderId: payment.razorpayOrderId,
                    timestamp: startDate,
                    note: 'Student account recreated from verified payment history by admin.'
                }]
            };

            const insertResult = await db.collection('users').insertOne(newUserDoc);
            const createdUserId = insertResult.insertedId;

            // Re-link payment record
            await db.collection('payments').updateMany(
                { email: { $regex: new RegExp(`^${studentEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } },
                { $set: { studentId: createdUserId, studentCode, updatedAt: startDate } }
            );

            return Response.json({
                success: true,
                message: `Student account for ${studentEmail} successfully recreated with full test access. Student can now log in via Google.`,
                user: {
                    _id: createdUserId.toString(),
                    ...newUserDoc
                }
            });
        }
    } catch (error) {
        console.error('Failed to restore student account:', error);
        return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
