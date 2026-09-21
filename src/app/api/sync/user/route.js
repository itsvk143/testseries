import clientPromise from '@/lib/mongodb';
import { normalizeToCanonicalExam, getCanonicalExamDisplay } from '@/lib/authorization';

export async function POST(request) {
    try {
        // Validate API Key
        const authHeader = request.headers.get('authorization');
        const expectedAuth = `Bearer ${process.env.SYNC_API_KEY}`;
        
        if (!process.env.SYNC_API_KEY || authHeader !== expectedAuth) {
            return Response.json({ error: 'Unauthorized payload' }, { status: 401 });
        }

        const body = await request.json();
        const { email, name, mobileNo, schoolName, coachingName, city, state, studentClass, profileCompleted } = body;
        const rawExam = body.exam || body.examPreparingFor || '';
        const canonicalExam = normalizeToCanonicalExam(rawExam);
        const examDisplay = getCanonicalExamDisplay(canonicalExam);

        if (!email || !name) {
            return Response.json({ error: 'Email and Name are missing' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const userEmail = email.toLowerCase();

        // Use findOneAndUpdate to atomically update or insert the user coming from teachingcommunity.in
        const result = await db.collection('users').findOneAndUpdate(
            { email: { $regex: new RegExp(`^${userEmail}$`, 'i') } },
            {
                $set: {
                    name,
                    email: userEmail,
                    mobileNo: mobileNo || '',
                    schoolName: schoolName || '',
                    coachingName: coachingName || '',
                    city: city || '',
                    state: state || '',
                    exam: canonicalExam || '',
                    examPreparingFor: examDisplay || '',
                    studentClass: studentClass || '',
                    profileCompleted: typeof profileCompleted === 'boolean' ? profileCompleted : !!(mobileNo && city && state),
                    lastSyncedAt: new Date(),
                },
                $setOnInsert: {
                    createdAt: new Date(),
                    paymentStatus: 'PENDING',
                    accountStatus: 'PENDING_APPROVAL',
                    authorizationStartDate: null,
                    authorizationExpiryDate: null,
                    paymentConfirmedAt: null,
                    approvedAt: null,
                    approvedBy: null,
                    authorizationHistory: [],
                    isApproved: false,
                    approvals: { mock: false, live: false, subject: false, chapter: false, subtopic: false }
                }
            },
            {
                upsert: true,
                returnDocument: 'after'
            }
        );

        console.log('✅ Synchronized user from external platform:', userEmail);

        return Response.json({
            success: true,
            message: 'User synchronized successfully',
            user: { email: userEmail, synced: true }
        });
    } catch (error) {
        console.error('❌ Error in sync user API:', error);
        return Response.json({ error: 'Failed to synchronize user: ' + error.message }, { status: 500 });
    }
}
