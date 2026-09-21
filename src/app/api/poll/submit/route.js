import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { isPaidStudent, getAuthorizedSubjects, buildQuestionQuery } from '@/lib/pollService';
import { canonicalizeLatex } from '@/lib/questionFormatter';

function normalizeCorrectOption(ans) {
    if (typeof ans === 'string') {
        const lower = ans.trim().toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(lower)) return lower;
        if (lower === '1') return 'a';
        if (lower === '2') return 'b';
        if (lower === '3') return 'c';
        if (lower === '4') return 'd';
    }
    if (typeof ans === 'number') {
        const mapping = { 0: 'a', 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
        return mapping[ans] || 'a';
    }
    return 'a';
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required' }, { status: 401 });
        }

        const body = await request.json();
        const { subject, chapter, pollNumber, answers = {}, timeTakenSeconds = 0 } = body;

        if (!subject || !chapter || !pollNumber) {
            return Response.json({ error: 'Missing required submission fields' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        const adminEmails = (process.env.ADMIN_EMAILS || 'itsvikash143@gmail.com,cvksir07@gmail.com').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        const userEmail = (user.email || session.user.email || '').toLowerCase();
        const isAdmin = session.user?.isAdmin || user.role === 'admin' || user.isAdmin || adminEmails.includes(userEmail);
        if (!isPaidStudent(user, session) && !isAdmin) {
            return Response.json({
                error: 'Poll Practice is available only for students enrolled in a paid test series.'
            }, { status: 403 });
        }

        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor) || 'NEET';
        const authorizedSubjects = isAdmin
            ? ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology']
            : getAuthorizedSubjects(canonicalExam);
        const matchedSubject = authorizedSubjects.find(s => s.toLowerCase() === subject.toLowerCase());

        if (!matchedSubject) {
            return Response.json({ error: 'Subject not authorized.' }, { status: 403 });
        }

        let examForQuery = canonicalExam;
        if (isAdmin) {
            if (/mathematics/i.test(matchedSubject)) examForQuery = 'JEE_MAIN';
            else if (/botany|zoology/i.test(matchedSubject)) examForQuery = 'NEET';
        }

        const query = buildQuestionQuery(examForQuery, matchedSubject);
        const fullQuery = {
            ...query,
            chapter: { $regex: `^${chapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' }
        };

        const skipCount = (pollNumber - 1) * 20;

        // Fetch the exact 20 questions with answers and explanations
        const rawQuestions = await db.collection('questionBank')
            .find(fullQuery)
            .sort({ _id: 1 })
            .skip(skipCount)
            .limit(20)
            .toArray();

        if (rawQuestions.length < 20) {
            return Response.json({ error: 'Poll is incomplete or questions could not be retrieved.' }, { status: 400 });
        }

        let attempted = 0;
        let correct = 0;
        let wrong = 0;
        let unattempted = 0;

        const questionsWithAnalysis = rawQuestions.map((q, idx) => {
            const qId = q._id.toString();
            const rawStudentAns = answers[qId] || null;
            const studentAns = rawStudentAns ? rawStudentAns.toLowerCase() : null;
            const correctOpt = normalizeCorrectOption(q.correctAnswer ?? q.correctOption ?? q.answer);

            let result = 'Unattempted';
            let marks = 0;

            if (studentAns) {
                attempted++;
                if (studentAns === correctOpt) {
                    correct++;
                    marks = 4;
                    result = 'Correct';
                } else {
                    wrong++;
                    marks = 0;
                    result = 'Wrong';
                }
            } else {
                unattempted++;
                marks = 0;
                result = 'Unattempted';
            }

            // Options formatting
            let options = [];
            if (Array.isArray(q.options)) {
                options = q.options.map((opt, oIdx) => ({
                    id: String.fromCharCode(97 + oIdx),
                    label: String.fromCharCode(65 + oIdx),
                    text: canonicalizeLatex(typeof opt === 'string' ? opt : (opt?.text || opt?.value || ''))
                }));
            } else if (typeof q.options === 'object' && q.options !== null) {
                options = Object.entries(q.options).map(([k, val], oIdx) => ({
                    id: String.fromCharCode(97 + oIdx),
                    label: String.fromCharCode(65 + oIdx),
                    text: canonicalizeLatex(typeof val === 'string' ? val : (val?.text || ''))
                }));
            }

            while (options.length < 4) {
                const id = String.fromCharCode(97 + options.length);
                options.push({ id, label: id.toUpperCase(), text: 'N/A' });
            }

            return {
                id: qId,
                index: idx + 1,
                questionNumber: skipCount + idx + 1,
                text: canonicalizeLatex(q.question || q.text || ''),
                image: q.image || q.img || '',
                options,
                studentAnswer: studentAns ? studentAns.toUpperCase() : '—',
                correctAnswer: correctOpt.toUpperCase(),
                result,
                marks,
                explanation: canonicalizeLatex(q.explanation || 'No explanation provided for this question.')
            };
        });

        const marksObtained = correct * 4;
        const maxMarks = 80;
        const accuracy = attempted > 0 ? Number(((correct / attempted) * 100).toFixed(2)) : 0;

        // Format time taken
        const mins = Math.floor(timeTakenSeconds / 60);
        const secs = timeTakenSeconds % 60;
        const timeTakenFormatted = `${mins} min ${secs} sec`;

        // -------------------------------------------------------------
        // STRICT RULE #22 & #26:
        // Do NOT persist marks, answers, accuracy, or performance data!
        // ONLY upsert a minimal, lightweight completion record:
        // { userEmail, exam, subject, chapter, pollNumber, completedAt }
        // -------------------------------------------------------------
        await db.collection('pollCompletions').updateOne(
            {
                userEmail: session.user.email,
                exam: canonicalExam,
                subject: matchedSubject,
                chapter,
                pollNumber
            },
            {
                $set: {
                    userEmail: session.user.email,
                    exam: canonicalExam,
                    subject: matchedSubject,
                    chapter,
                    pollNumber,
                    completedAt: new Date()
                }
            },
            { upsert: true }
        );

        return Response.json({
            success: true,
            summary: {
                totalQuestions: 20,
                attempted,
                correct,
                wrong,
                unattempted,
                marksObtained,
                maxMarks,
                accuracy,
                timeTakenFormatted,
                timeTakenSeconds
            },
            questionsWithAnalysis
        });

    } catch (error) {
        console.error('Error submitting poll:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
