import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import {
    getQuestionReportsCollection,
    generateReportId,
    validateCategories
} from '@/lib/questionReportModel';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Authentication required to report questions.' }, { status: 401 });
        }

        const studentEmail = session.user.email.toLowerCase();
        const studentName = session.user.name || 'Student';

        const body = await request.json();
        const {
            questionId,
            testId,
            testTitle = '',
            attemptId = '',
            exam = '',
            subject = '',
            chapter = '',
            topic = '',
            subTopic = '',
            reportSource = 'ACTIVE_TEST',
            categories = [],
            description = '',
            questionSnapshot = {}
        } = body;

        if (!questionId) {
            return Response.json({ error: 'Question ID is required.' }, { status: 400 });
        }

        // Validate source enum
        if (!['ACTIVE_TEST', 'SOLUTION_REVIEW'].includes(reportSource)) {
            return Response.json({ error: 'Invalid reportSource.' }, { status: 400 });
        }

        // Validate categories
        const validation = validateCategories(categories, reportSource);
        if (!validation.valid) {
            return Response.json({ error: validation.error }, { status: 400 });
        }

        const { col, db } = await getQuestionReportsCollection();

        // Attempt to fetch fresh authoritative question metadata from questionBank if questionId is valid ObjectId
        let resolvedSubject = subject;
        let resolvedChapter = chapter;
        let resolvedTopic = topic;
        let resolvedSubTopic = subTopic;
        let cleanSnapshot = { ...questionSnapshot };

        if (ObjectId.isValid(questionId) && String(questionId).length === 24) {
            try {
                const qDoc = await db.collection('questionBank').findOne({ _id: new ObjectId(questionId) });
                if (qDoc) {
                    resolvedSubject = qDoc.subject || resolvedSubject;
                    resolvedChapter = qDoc.chapter || resolvedChapter;
                    resolvedTopic = qDoc.topic || resolvedTopic;
                    resolvedSubTopic = qDoc.subTopic || resolvedSubTopic;

                    cleanSnapshot = {
                        question: qDoc.question || cleanSnapshot.question || '',
                        image: qDoc.image || cleanSnapshot.image || '',
                        options: qDoc.options || cleanSnapshot.options || [],
                        correctOption: qDoc.correctOption || cleanSnapshot.correctOption || '',
                        correctAnswer: qDoc.correctAnswer !== undefined ? qDoc.correctAnswer : cleanSnapshot.correctAnswer,
                        explanation: qDoc.explanation || cleanSnapshot.explanation || '',
                        difficulty: qDoc.difficulty || cleanSnapshot.difficulty || 'Medium',
                        type: qDoc.type || qDoc.questionType || cleanSnapshot.type || 'MCQ'
                    };
                }
            } catch (err) {
                console.warn('[reports] Could not lookup question in questionBank:', err);
            }
        }

        // Sanitize snapshot if reported from an ACTIVE_TEST:
        // NEVER expose correctAnswer or explanation during an active test
        if (reportSource === 'ACTIVE_TEST') {
            // Keep question statement and options only for snapshot
            cleanSnapshot = {
                question: cleanSnapshot.question || '',
                image: cleanSnapshot.image || '',
                options: cleanSnapshot.options || [],
                difficulty: cleanSnapshot.difficulty || 'Medium',
                type: cleanSnapshot.type || 'MCQ'
            };
        }

        // Check if report already exists for this (studentEmail, questionId, testId, reportSource)
        const filter = {
            studentEmail,
            questionId: String(questionId),
            testId: String(testId || 'standalone'),
            reportSource
        };

        const existing = await col.findOne(filter);

        if (existing) {
            // Update existing report with new categories and description
            const now = new Date();
            const updated = await col.findOneAndUpdate(
                filter,
                {
                    $set: {
                        categories,
                        description: description ? description.trim() : existing.description,
                        isQualityFeedback: validation.isQualityFeedback,
                        updatedAt: now
                    },
                    $push: {
                        actionHistory: {
                            action: 'STUDENT_UPDATED',
                            fromStatus: existing.status,
                            toStatus: existing.status,
                            performedBy: studentEmail,
                            timestamp: now,
                            notes: `Student updated categories to: ${categories.join(', ')}`
                        }
                    }
                },
                { returnDocument: 'after' }
            );

            return Response.json({
                success: true,
                message: 'Your report details have been updated.',
                reportId: existing.reportId,
                isExisting: true,
                report: updated
            });
        }

        // Create a new report
        const newReportId = generateReportId();
        const now = new Date();

        const newDoc = {
            reportId: newReportId,
            questionId: String(questionId),
            studentEmail,
            studentName,
            studentId: session.user.id || '',
            testId: String(testId || 'standalone'),
            testTitle: testTitle || String(testId || 'Test'),
            attemptId: String(attemptId || ''),
            exam: exam || 'NEET',
            subject: resolvedSubject || 'General',
            chapter: resolvedChapter || 'General',
            topic: resolvedTopic || resolvedChapter || 'General',
            subTopic: resolvedSubTopic || '',
            reportSource,
            categories,
            description: description ? description.trim() : '',
            isQualityFeedback: validation.isQualityFeedback,
            status: 'NEW',
            questionSnapshot: cleanSnapshot,
            adminNotes: '',
            resolutionNotes: '',
            questionCorrected: false,
            reviewedBy: '',
            reviewedAt: null,
            resolvedAt: null,
            actionHistory: [
                {
                    action: 'SUBMITTED',
                    fromStatus: null,
                    toStatus: 'NEW',
                    performedBy: studentEmail,
                    timestamp: now,
                    notes: `Report submitted via ${reportSource === 'ACTIVE_TEST' ? 'Active Test' : 'Solution Review'}`
                }
            ],
            createdAt: now,
            updatedAt: now
        };

        await col.insertOne(newDoc);

        return Response.json({
            success: true,
            message: 'Report submitted successfully. Our academic team will investigate.',
            reportId: newReportId,
            isExisting: false,
            report: newDoc
        }, { status: 201 });

    } catch (error) {
        console.error('[POST /api/reports] Error:', error);
        return Response.json({ error: 'Internal server error while saving report.' }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const studentEmail = session.user.email.toLowerCase();
        const { searchParams } = new URL(request.url);
        const testId = searchParams.get('testId');
        const questionId = searchParams.get('questionId');

        const { col } = await getQuestionReportsCollection();

        const query = { studentEmail };
        if (testId) query.testId = String(testId);
        if (questionId) query.questionId = String(questionId);

        const reports = await col.find(query, {
            projection: {
                reportId: 1,
                questionId: 1,
                testId: 1,
                reportSource: 1,
                categories: 1,
                description: 1,
                status: 1,
                createdAt: 1,
                updatedAt: 1
            }
        }).sort({ createdAt: -1 }).toArray();

        return Response.json({ reports });
    } catch (error) {
        console.error('[GET /api/reports] Error:', error);
        return Response.json({ error: 'Failed to fetch reports.' }, { status: 500 });
    }
}
