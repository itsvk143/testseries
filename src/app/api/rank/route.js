import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
    try {
        const { testId, score } = await request.json();

        if (!testId || score === undefined) {
            return NextResponse.json({ error: 'Missing testId or score' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');
        const collection = db.collection('testResults');

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
