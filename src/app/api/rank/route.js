import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function POST(request) {
    try {
        // Require authentication — prevents anonymous score manipulation
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
        }

        const { testId } = await request.json();

        if (!testId) {
            return NextResponse.json({ error: 'Missing testId' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const collection = db.collection('testResults');

        const userEmail = session.user.email.toLowerCase();

        // Look up the student's actual score from the database, NOT from client input
        const userResult = await collection.findOne(
            { testId, userEmail },
            { projection: { score: 1 }, sort: { attemptedAt: -1 } }
        );

        if (!userResult) {
            return NextResponse.json({ error: 'No result found for this test.' }, { status: 404 });
        }

        const score = userResult.score;

        // Global Rank (All attempts)
        const betterGlobalCount = await collection.countDocuments({
            testId: testId,
            score: { $gt: score }
        });
        const totalGlobalStudents = await collection.countDocuments({
            testId: testId
        });

        // Live Rank (Only isLiveAttempt: true)
        const betterLiveCount = await collection.countDocuments({
            testId: testId,
            isLiveAttempt: true,
            score: { $gt: score }
        });
        const totalLiveStudents = await collection.countDocuments({
            testId: testId,
            isLiveAttempt: true
        });

        return NextResponse.json({
            rank: betterGlobalCount + 1, // Legacy support
            totalStudents: totalGlobalStudents,
            globalRank: betterGlobalCount + 1,
            totalGlobalStudents,
            liveRank: betterLiveCount + 1,
            totalLiveStudents
        });

    } catch (error) {
        console.error('Error calculating rank:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
