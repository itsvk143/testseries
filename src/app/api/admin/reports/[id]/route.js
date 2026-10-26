import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import { getQuestionReportsCollection, isUserAdmin } from '@/lib/questionReportModel';
import { canonicalizeLatex } from '@/lib/questionFormatter';
import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        const { col, db } = await getQuestionReportsCollection();

        const query = ObjectId.isValid(id) && String(id).length === 24
            ? { $or: [{ _id: new ObjectId(id) }, { reportId: id }] }
            : { reportId: id };

        const report = await col.findOne(query);
        if (!report) {
            return Response.json({ error: 'Report not found.' }, { status: 404 });
        }

        // Fetch live authoritative question from questionBank if questionId is an ObjectId
        let currentQuestion = null;
        if (ObjectId.isValid(report.questionId) && String(report.questionId).length === 24) {
            try {
                currentQuestion = await db.collection('questionBank').findOne({ _id: new ObjectId(report.questionId) });
            } catch (err) {
                console.warn('[reports/[id]] questionBank lookup failed:', err);
            }
        }

        // Fallback search by string id or questionId
        if (!currentQuestion && report.questionId) {
            try {
                currentQuestion = await db.collection('questionBank').findOne({
                    $or: [
                        { id: report.questionId },
                        { questionId: report.questionId }
                    ]
                });
            } catch (err) {
                console.warn('[reports/[id]] questionBank fallback lookup failed:', err);
            }
        }

        // Fetch other reports for the same question
        const siblingReports = await col.find({
            questionId: report.questionId,
            reportId: { $ne: report.reportId }
        }).sort({ createdAt: -1 }).toArray();

        return Response.json({
            report,
            currentQuestion,
            siblingReports,
            totalQuestionReports: siblingReports.length + 1
        });

    } catch (error) {
        console.error('[GET /api/admin/reports/[id]] Error:', error);
        return Response.json({ error: 'Failed to fetch report details.' }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const adminEmail = session.user.email.toLowerCase();
        const { id } = await params;
        const body = await request.json();

        const {
            status,
            adminNotes,
            resolutionNotes,
            questionCorrected,
            editQuestionData
        } = body;

        const { col, db } = await getQuestionReportsCollection();

        const query = ObjectId.isValid(id) && String(id).length === 24
            ? { $or: [{ _id: new ObjectId(id) }, { reportId: id }] }
            : { reportId: id };

        const existing = await col.findOne(query);
        if (!existing) {
            return Response.json({ error: 'Report not found.' }, { status: 404 });
        }

        const now = new Date();
        const updateFields = {
            updatedAt: now
        };

        let actionDescription = 'ADMIN_UPDATE';
        let updatedQuestion = null;

        // 1. If editQuestionData is provided, update questionBank and questionSnapshot
        if (editQuestionData) {
            const qText = editQuestionData.question !== undefined ? canonicalizeLatex(editQuestionData.question) : undefined;
            const qExplanation = editQuestionData.explanation !== undefined ? canonicalizeLatex(editQuestionData.explanation) : undefined;
            const qImage = editQuestionData.image !== undefined ? editQuestionData.image : undefined;

            let qOptions = undefined;
            if (Array.isArray(editQuestionData.options)) {
                qOptions = editQuestionData.options.map(opt => {
                    if (typeof opt === 'object' && opt !== null) {
                        return {
                            text: canonicalizeLatex(opt.text || ''),
                            ...(opt.image ? { image: opt.image } : {})
                        };
                    }
                    return canonicalizeLatex(String(opt || ''));
                });
            }

            let qCorrectOption = editQuestionData.correctOption !== undefined ? String(editQuestionData.correctOption).trim().toLowerCase() : undefined;
            let qCorrectAnswer = editQuestionData.correctAnswer;

            if (qCorrectOption && ['a', 'b', 'c', 'd'].includes(qCorrectOption)) {
                const optMap = { a: 0, b: 1, c: 2, d: 3 };
                if (qCorrectAnswer === undefined) {
                    qCorrectAnswer = optMap[qCorrectOption];
                }
            } else if (typeof qCorrectAnswer === 'number' && qCorrectAnswer >= 0 && qCorrectAnswer <= 3) {
                if (!qCorrectOption) {
                    qCorrectOption = String.fromCharCode(97 + qCorrectAnswer);
                }
            }

            const qSet = {
                updatedAt: now
            };
            if (qText !== undefined) qSet.question = qText;
            if (qOptions !== undefined) qSet.options = qOptions;
            if (qCorrectOption !== undefined) qSet.correctOption = qCorrectOption;
            if (qCorrectAnswer !== undefined) qSet.correctAnswer = qCorrectAnswer;
            if (qExplanation !== undefined) qSet.explanation = qExplanation;
            if (qImage !== undefined) qSet.image = qImage;

            // Target questionBank document
            let qFilter = null;
            if (ObjectId.isValid(existing.questionId) && String(existing.questionId).length === 24) {
                qFilter = { _id: new ObjectId(existing.questionId) };
            } else if (existing.questionId) {
                qFilter = { $or: [{ id: existing.questionId }, { questionId: existing.questionId }] };
            }

            if (qFilter) {
                await db.collection('questionBank').updateOne(qFilter, { $set: qSet });
                updatedQuestion = await db.collection('questionBank').findOne(qFilter);
            }

            // Sync with report questionSnapshot
            if (qText !== undefined) updateFields['questionSnapshot.question'] = qText;
            if (qOptions !== undefined) updateFields['questionSnapshot.options'] = qOptions;
            if (qCorrectOption !== undefined) updateFields['questionSnapshot.correctOption'] = qCorrectOption;
            if (qCorrectAnswer !== undefined) updateFields['questionSnapshot.correctAnswer'] = qCorrectAnswer;
            if (qExplanation !== undefined) updateFields['questionSnapshot.explanation'] = qExplanation;
            if (qImage !== undefined) updateFields['questionSnapshot.image'] = qImage;

            updateFields.questionCorrected = true;
            actionDescription = 'QUESTION_CONTENT_AND_KEY_EDITED';
        }

        // 2. Status change handling
        if (status && status !== existing.status) {
            const validStatuses = ['NEW', 'UNDER_REVIEW', 'CONFIRMED_ERROR', 'RESOLVED', 'DISMISSED'];
            if (!validStatuses.includes(status)) {
                return Response.json({ error: `Invalid status: ${status}` }, { status: 400 });
            }
            updateFields.status = status;
            actionDescription = editQuestionData ? 'QUESTION_EDITED_AND_RESOLVED' : `STATUS_CHANGED_TO_${status}`;

            if (status === 'RESOLVED' || status === 'DISMISSED') {
                updateFields.resolvedAt = now;
            }
        }

        if (adminNotes !== undefined) {
            updateFields.adminNotes = adminNotes;
        }

        if (resolutionNotes !== undefined) {
            updateFields.resolutionNotes = resolutionNotes;
        }

        if (questionCorrected !== undefined) {
            updateFields.questionCorrected = Boolean(questionCorrected);
        }

        updateFields.reviewedBy = adminEmail;
        updateFields.reviewedAt = now;

        const actionEntry = {
            action: actionDescription,
            fromStatus: existing.status,
            toStatus: status || existing.status,
            performedBy: adminEmail,
            timestamp: now,
            notes: resolutionNotes || adminNotes || (editQuestionData ? 'Question text, options, and answer updated.' : `Status updated to ${status || existing.status}`)
        };

        const result = await col.findOneAndUpdate(
            query,
            {
                $set: updateFields,
                $push: { actionHistory: actionEntry }
            },
            { returnDocument: 'after' }
        );

        return Response.json({
            success: true,
            message: editQuestionData
                ? 'Question statement, options, and answer key successfully updated in database.'
                : 'Report updated successfully.',
            report: result,
            updatedQuestion
        });

    } catch (error) {
        console.error('[PATCH /api/admin/reports/[id]] Error:', error);
        return Response.json({ error: 'Failed to update report.' }, { status: 500 });
    }
}
