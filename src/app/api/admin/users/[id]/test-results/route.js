import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function GET(request, { params }) {
    try {
        const session = await auth();
        
        // Authorization Check
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;

        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
             return Response.json({ error: 'Invalid User ID format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        // Fetch user email to query test results
        const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
        
        if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        const results = await db.collection('testResults')
            .find({ userEmail: user.email })
            .sort({ attemptedAt: -1 })
            .toArray();

        // Calculate rank and populate test integrity violations for each result
        const resultsWithRank = await Promise.all(results.map(async (result) => {
            const betterScores = await db.collection('testResults').countDocuments({
                testId: result.testId,
                score: { $gt: result.score }
            });
            const totalStudents = await db.collection('testResults').countDocuments({
                testId: result.testId
            });

            let violations = result.violations || [];
            let violationCount = result.violationCount ?? violations.length;

            if ((!violations || violations.length === 0) && (result.testAttemptId || result.testId)) {
                try {
                    const orFilters = [];
                    if (result.testAttemptId) orFilters.push({ testAttemptId: result.testAttemptId });
                    if (result.testId && user.email) orFilters.push({ userEmail: user.email, testId: result.testId });

                    if (orFilters.length > 0) {
                        const dbViolations = await db.collection('testViolations')
                            .find({ $or: orFilters })
                            .sort({ startedAt: 1 })
                            .toArray();
                        if (dbViolations.length > 0) {
                            violations = dbViolations;
                            violationCount = dbViolations.length;
                        }
                    }
                } catch (e) {
                    console.warn('Error fetching fallback test violations:', e);
                }
            }

            return {
                ...result,
                rank: betterScores + 1,
                totalStudents,
                violationCount,
                violations
            };
        }));

        return Response.json(resultsWithRank);
    } catch (error) {
        console.error('Failed to fetch admin user test results:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
