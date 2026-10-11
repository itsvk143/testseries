import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import { getQuestionReportsCollection, isUserAdmin } from '@/lib/questionReportModel';

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
            questionCorrected
        } = body;

        const { col } = await getQuestionReportsCollection();

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

        if (status && status !== existing.status) {
            const validStatuses = ['NEW', 'UNDER_REVIEW', 'CONFIRMED_ERROR', 'RESOLVED', 'DISMISSED'];
            if (!validStatuses.includes(status)) {
                return Response.json({ error: `Invalid status: ${status}` }, { status: 400 });
            }
            updateFields.status = status;
            actionDescription = `STATUS_CHANGED_TO_${status}`;

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
            notes: resolutionNotes || adminNotes || `Status updated to ${status || existing.status}`
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
            message: 'Report updated successfully.',
            report: result
        });

    } catch (error) {
        console.error('[PATCH /api/admin/reports/[id]] Error:', error);
        return Response.json({ error: 'Failed to update report.' }, { status: 500 });
    }
}
