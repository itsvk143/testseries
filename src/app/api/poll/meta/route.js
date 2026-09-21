import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { isPaidStudent, getAuthorizedSubjects, buildQuestionQuery, SUBJECT_ICONS } from '@/lib/pollService';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        const isAdmin = user.role === 'admin' || user.isAdmin;
        const hasPaidAccess = isPaidStudent(user);
        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor) || 'NEET';
        const authorizedSubjects = getAuthorizedSubjects(canonicalExam);

        if (!hasPaidAccess && !isAdmin) {
            return Response.json({
                hasPaidAccess: false,
                exam: canonicalExam,
                subjects: authorizedSubjects,
                message: 'Poll Practice is available only for students enrolled in a paid test series.'
            });
        }

        const url = new URL(request.url);
        const requestedSubject = url.searchParams.get('subject');

        // Fetch completed poll records for this student to mark completion
        const completions = await db.collection('pollCompletions').find({
            userEmail: session.user.email,
            exam: canonicalExam
        }).toArray();

        // Create a quick lookup set of "subject:chapter:pollNumber"
        const completedSet = new Set(completions.map(c => `${c.subject.toLowerCase()}:${c.chapter.toLowerCase()}:${c.pollNumber}`));

        if (requestedSubject) {
            // Validate subject is authorized for student
            const matchedSubject = authorizedSubjects.find(s => s.toLowerCase() === requestedSubject.toLowerCase());
            if (!matchedSubject) {
                return Response.json({ error: 'Subject not authorized for your enrolled exam.' }, { status: 403 });
            }

            const query = buildQuestionQuery(canonicalExam, matchedSubject);
            
            // Group by chapter
            const chaptersAggregation = await db.collection('questionBank').aggregate([
                { $match: { ...query, chapter: { $exists: true, $nin: ['', null] } } },
                { $group: { _id: '$chapter', totalQuestions: { $sum: 1 } } },
                { $sort: { _id: 1 } }
            ]).toArray();

            const chapters = chaptersAggregation.map(ch => {
                const totalQuestions = ch.totalQuestions;
                const totalPolls = Math.floor(totalQuestions / 20);
                const chapterName = ch._id;

                // Build polls array
                const polls = [];
                for (let i = 1; i <= totalPolls; i++) {
                    const isCompleted = completedSet.has(`${matchedSubject.toLowerCase()}:${chapterName.toLowerCase()}:${i}`);
                    polls.push({
                        pollNumber: i,
                        startQ: (i - 1) * 20 + 1,
                        endQ: i * 20,
                        completed: isCompleted
                    });
                }

                return {
                    chapter: chapterName,
                    totalQuestions,
                    totalPolls,
                    hasPolls: totalPolls > 0,
                    polls
                };
            });

            return Response.json({
                hasPaidAccess: true,
                exam: canonicalExam,
                subject: matchedSubject,
                chapters
            });
        }

        // Otherwise, return top-level subjects with overall completed counts
        const subjectCards = authorizedSubjects.map(sub => {
            const completedCount = completions.filter(c => c.subject.toLowerCase() === sub.toLowerCase()).length;
            return {
                name: sub,
                icon: SUBJECT_ICONS[sub] || '📚',
                completedPolls: completedCount
            };
        });

        return Response.json({
            hasPaidAccess: true,
            exam: canonicalExam,
            subjects: subjectCards
        });

    } catch (error) {
        console.error('Error fetching poll meta:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
