import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { isPaidStudent, getAuthorizedSubjects, buildQuestionQuery } from '@/lib/pollService';
import { canonicalizeLatex } from '@/lib/questionFormatter';

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
        if (!isPaidStudent(user) && !isAdmin) {
            return Response.json({
                error: 'Poll Practice is available only for students enrolled in a paid test series.'
            }, { status: 403 });
        }

        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor) || 'NEET';
        const authorizedSubjects = getAuthorizedSubjects(canonicalExam);

        const url = new URL(request.url);
        const subject = url.searchParams.get('subject');
        const chapter = url.searchParams.get('chapter');
        const pollNumber = parseInt(url.searchParams.get('poll') || '1', 10);

        if (!subject || !chapter || isNaN(pollNumber) || pollNumber < 1) {
            return Response.json({ error: 'Invalid parameters. Subject, chapter, and poll number are required.' }, { status: 400 });
        }

        // Validate subject authorization
        const matchedSubject = authorizedSubjects.find(s => s.toLowerCase() === subject.toLowerCase());
        if (!matchedSubject) {
            return Response.json({ error: `Subject ${subject} is not authorized for your enrolled exam (${canonicalExam}).` }, { status: 403 });
        }

        const query = buildQuestionQuery(canonicalExam, matchedSubject);
        const fullQuery = {
            ...query,
            chapter: { $regex: `^${chapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' }
        };

        const skipCount = (pollNumber - 1) * 20;

        // Fetch questions deterministically sorted by _id
        const rawQuestions = await db.collection('questionBank')
            .find(fullQuery)
            .sort({ _id: 1 })
            .skip(skipCount)
            .limit(20)
            .toArray();

        // Incomplete polls rule: only full 20 questions can form a poll
        if (rawQuestions.length < 20) {
            return Response.json({
                error: `Poll ${pollNumber} is incomplete or does not exist. A poll requires exactly 20 questions.`
            }, { status: 404 });
        }

        // Format questions for student (STRIP correctAnswer and explanation for test-taking integrity)
        const sanitizedQuestions = rawQuestions.map((q, idx) => {
            const qText = canonicalizeLatex(q.question || q.text || '');
            let options = [];

            if (Array.isArray(q.options)) {
                options = q.options.map((opt, oIdx) => {
                    const id = String.fromCharCode(97 + oIdx);
                    const text = typeof opt === 'string' ? opt : (opt?.text || opt?.value || '');
                    return {
                        id,
                        label: id.toUpperCase(),
                        text: canonicalizeLatex(text)
                    };
                });
            } else if (typeof q.options === 'object' && q.options !== null) {
                options = Object.entries(q.options).map(([key, val], oIdx) => ({
                    id: String.fromCharCode(97 + oIdx),
                    label: String.fromCharCode(65 + oIdx),
                    text: canonicalizeLatex(typeof val === 'string' ? val : (val?.text || ''))
                }));
            }

            // Ensure 4 options
            while (options.length < 4) {
                const id = String.fromCharCode(97 + options.length);
                options.push({ id, label: id.toUpperCase(), text: 'N/A' });
            }

            return {
                id: q._id.toString(),
                index: idx + 1,
                questionNumber: skipCount + idx + 1,
                text: qText,
                image: q.image || q.img || '',
                options
            };
        });

        return Response.json({
            exam: canonicalExam,
            subject: matchedSubject,
            chapter,
            pollNumber,
            totalQuestions: 20,
            timeLimitMinutes: 30,
            questions: sanitizedQuestions
        });

    } catch (error) {
        console.error('Error loading poll questions:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
