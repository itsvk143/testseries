import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { name, mobileNo, schoolName, coachingName, city, state, examPreparingFor, studentClass } = body;

        // Validate required fields (schoolName and coachingName are OPTIONAL)
        if (!name || !mobileNo || !city || !state || !examPreparingFor || !studentClass) {
            return Response.json({ error: 'Name, mobile, class, exam, state and city are required' }, { status: 400 });
        }

        // Validate mobile number format
        if (!/^[0-9]{10}$/.test(mobileNo)) {
            return Response.json({ error: 'Invalid mobile number format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const userEmail = session.user.email.toLowerCase(); // Normalize email

        // Use findOneAndUpdate to atomically update or insert
        // querying with case-insensitive regex just to be safe if stored differently
        const result = await db.collection('users').findOneAndUpdate(
            { email: { $regex: new RegExp(`^${userEmail}$`, 'i') } },
            {
                        $set: {
                    name,
                    mobileNo,
                    schoolName: schoolName || '',
                    coachingName: coachingName || '',
                    city,
                    state,
                    examPreparingFor,
                    studentClass,
                    profileCompleted: true,
                    profileCompletedAt: new Date(),
                    email: userEmail
                },
                $setOnInsert: {
                    createdAt: new Date()
                }
            },
            {
                upsert: true,
                returnDocument: 'after'
            }
        );

        console.log('✅ Profile updated/created for:', userEmail);

        // --- Push sync to teachingcommunity.in ---
        if (process.env.TEACHING_COMMUNITY_SYNC_URL && process.env.SYNC_API_KEY) {
            try {
                // Fire and forget, or await. We use fire and forget to not block the user response if teachingcommunity is slow
                fetch(process.env.TEACHING_COMMUNITY_SYNC_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.SYNC_API_KEY}`
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        name,
                        mobileNo,
                        schoolName: schoolName || '',
                        coachingName: coachingName || '',
                        city,
                        state,
                        examPreparingFor,
                        studentClass,
                        profileCompleted: true
                    })
                }).then(res => {
                    if (!res.ok) {
                        console.error('❌ Failed to sync to teachingcommunity.in:', res.statusText);
                    } else {
                        console.log('✅ Successfully synced to teachingcommunity.in for:', userEmail);
                    }
                }).catch(err => {
                    console.error('❌ Error hitting sync API:', err);
                });
            } catch (syncError) {
                console.error('❌ Synchronous error calling sync API:', syncError);
            }
        }

        return Response.json({
            success: true,
            message: 'Profile updated successfully',
            profileCompleted: true,
            isApproved: !!result?.isApproved,
            user: result
        });
    } catch (error) {
        console.error('❌ Error updating profile:', error);
        return Response.json({ error: 'Failed to update profile: ' + error.message }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const userEmail = session.user.email.toLowerCase();

        // Try exact match first, then case-insensitive
        let user = await db.collection('users').findOne({ email: userEmail });

        if (!user) {
            // Fallback to case-insensitive search
            user = await db.collection('users').findOne({ email: { $regex: new RegExp(`^${userEmail}$`, 'i') } });
        }

        if (!user) {
            console.log('⚠️ User not found in DB:', userEmail);
            // Return a default structure so client doesn't break
            return Response.json({
                profileCompleted: false,
                isApproved: true,
                approvals: { mock: true, live: false, pyq: true, subject: false, chapter: false, subtopic: false },
                email: userEmail
            });
        }

        // Check if required fields exist to consider profile "completed"
        const isProfileActuallyCompleted = user.profileCompleted &&
            user.name &&
            user.examPreparingFor;

        // Default full approvals if not set
        const defaultApprovals = { mock: true, live: false, pyq: true, subject: false, chapter: false, subtopic: false };
        const approvals = user.approvals || defaultApprovals;

        return Response.json({
            ...user,
            profileCompleted: !!isProfileActuallyCompleted,
            isApproved: !!user.isApproved,
            approvals
        });
    } catch (error) {
        console.error('❌ Error fetching profile:', error);
        return Response.json({ error: 'Failed to fetch profile: ' + error.message }, { status: 500 });
    }
}
