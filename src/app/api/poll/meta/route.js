import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { normalizeToCanonicalExam } from '@/lib/authorization';
import { isPaidStudent, getAuthorizedSubjects, buildQuestionQuery, SUBJECT_ICONS } from '@/lib/pollService';

// In-memory cache for computed chapter polls metadata (5 minutes TTL)
const metaCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000;

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

        const adminEmails = (process.env.ADMIN_EMAILS || 'itsvikash143@gmail.com,cvksir07@gmail.com').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        const userEmail = (user.email || session.user.email || '').toLowerCase();
        const isAdmin = session.user?.isAdmin || user.role === 'admin' || user.isAdmin || adminEmails.includes(userEmail);
        const hasPaidAccess = isAdmin || isPaidStudent(user, session);
        const canonicalExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor) || 'NEET';
        const authorizedSubjects = isAdmin
            ? ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology']
            : getAuthorizedSubjects(canonicalExam);

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

            let examForQuery = canonicalExam;
            if (isAdmin) {
                if (/mathematics/i.test(matchedSubject)) examForQuery = 'JEE_MAIN';
                else if (/botany|zoology/i.test(matchedSubject)) examForQuery = 'NEET';
            }

            const cacheKey = `${examForQuery}:${matchedSubject.toLowerCase()}`;
            let cachedSubjectData = metaCache.get(cacheKey);

            if (!cachedSubjectData || Date.now() - cachedSubjectData.timestamp > CACHE_TTL_MS) {
                // Check persistent MongoDB cache first for instant sub-10ms response
                const dbCache = await db.collection('pollMetadataCache').findOne({ _id: cacheKey });

                if (dbCache?.chapters?.length > 0) {
                    cachedSubjectData = {
                        timestamp: Date.now(),
                        chapters: dbCache.chapters
                    };
                    metaCache.set(cacheKey, cachedSubjectData);
                } else {
                    const query = buildQuestionQuery(examForQuery, matchedSubject);

                    // Fetch questions deterministically sorted by _id to match test-taking order
                    const questions = await db.collection('questionBank').find(
                        { ...query, chapter: { $exists: true, $nin: ['', null] } },
                        { projection: { chapter: 1, type: 1, questionType: 1, difficulty: 1, level: 1 } }
                    ).sort({ _id: 1 }).toArray();

                // Group by chapter
                const byChapter = {};
                for (const q of questions) {
                    const ch = (q.chapter || '').trim();
                    if (!ch) continue;
                    if (!byChapter[ch]) byChapter[ch] = [];
                    byChapter[ch].push(q);
                }

                // Sort chapter names alphabetically
                const sortedChapterNames = Object.keys(byChapter).sort((a, b) => a.localeCompare(b));

                const chaptersList = sortedChapterNames.map(chapterName => {
                    const qs = byChapter[chapterName];
                    const totalQuestions = qs.length;
                    const totalPolls = Math.floor(totalQuestions / 20);

                    const polls = [];
                    for (let i = 1; i <= totalPolls; i++) {
                        const slice = qs.slice((i - 1) * 20, i * 20);

                        // Rule 1: All 20 questions are Assertion-Reasoning
                        const isAllAR = slice.length === 20 && slice.every(q => 
                            /assertion/i.test(q.type || '') || /assertion/i.test(q.questionType || '')
                        );

                        // Rule 2: All 20 questions are Difficult level
                        const isAllDiff = slice.length === 20 && slice.every(q => 
                            /difficult|hard/i.test(q.difficulty || '') || /difficult|hard/i.test(q.level || '')
                        );

                        // Rule 3: Priority if both are true -> Yellow (Assertion-Reasoning) has priority
                        let colorType = 'default';
                        if (isAllAR) {
                            colorType = 'yellow';
                        } else if (isAllDiff) {
                            colorType = 'orange';
                        }

                        polls.push({
                            pollNumber: i,
                            startQ: (i - 1) * 20 + 1,
                            endQ: i * 20,
                            colorType
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

                    cachedSubjectData = {
                        timestamp: Date.now(),
                        chapters: chaptersList
                    };
                    metaCache.set(cacheKey, cachedSubjectData);

                    // Persist to MongoDB cache for future instances
                    db.collection('pollMetadataCache').updateOne(
                        { _id: cacheKey },
                        { $set: { chapters: chaptersList, updatedAt: new Date() } },
                        { upsert: true }
                    ).catch(() => {});
                }
            }

            // Attach student-specific completion status
            const chapters = cachedSubjectData.chapters.map(ch => ({
                ...ch,
                polls: ch.polls.map(p => ({
                    ...p,
                    completed: completedSet.has(`${matchedSubject.toLowerCase()}:${ch.chapter.toLowerCase()}:${p.pollNumber}`)
                }))
            }));

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
