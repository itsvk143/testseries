import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { auth } from '@/lib/auth';
import { computeQuestionContentHash } from '@/lib/testAuditEngine';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const testId = (searchParams.get('testId') || '').trim();
        const reportId = searchParams.get('reportId');
        const historyOnly = searchParams.get('history') === 'true';

        if (!testId) {
            return Response.json({ success: false, error: 'testId query parameter is required.' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        // 1. If History Requested: return list of all reports for this test
        if (historyOnly) {
            const historyList = await db.collection('testAuditReports')
                .find({ testId }, {
                    projection: {
                        _id: 1,
                        testId: 1,
                        reportVersion: 1,
                        isLatest: 1,
                        auditDate: 1,
                        importedAt: 1,
                        importedBy: 1,
                        auditStatus: 1,
                        summary: 1
                    }
                })
                .sort({ reportVersion: -1 })
                .toArray();

            return Response.json({
                success: true,
                testId,
                history: historyList.map(h => ({
                    ...h,
                    _id: h._id.toString()
                }))
            });
        }

        // 2. Fetch specific or latest report
        let reportQuery = { testId, isLatest: true };
        if (reportId && /^[0-9a-fA-F]{24}$/.test(reportId)) {
            reportQuery = { _id: new ObjectId(reportId) };
        }

        const report = await db.collection('testAuditReports').findOne(reportQuery);
        if (!report) {
            return Response.json({ success: false, error: 'No audit report found for this test.' }, { status: 404 });
        }

        // 3. Fetch manual verification and approval states
        const auditState = await db.collection('testAuditStates').findOne({ testId });
        const passedMap = new Map();
        (auditState?.manualPassedQuestions || []).forEach(p => {
            passedMap.set(String(p.questionId), p);
        });

        // 4. Check for changed / stale questions by comparing current questionBank hash
        const questionIds = (report.questions || [])
            .map(q => q.questionId)
            .filter(id => id && /^[0-9a-fA-F]{24}$/.test(id))
            .map(id => new ObjectId(id));

        let currentQuestionsMap = new Map();
        if (questionIds.length > 0) {
            const currentQuestions = await db.collection('questionBank')
                .find({ _id: { $in: questionIds } })
                .toArray();
            currentQuestions.forEach(doc => {
                currentQuestionsMap.set(doc._id.toString(), doc);
            });
        }

        // 5. Enrich each question in the report with current manual verification & staleness detection
        const enrichedQuestions = (report.questions || []).map(q => {
            const manualRecord = passedMap.get(String(q.questionId));
            const isManuallyPassed = Boolean(manualRecord?.passed);

            // Staleness check
            const currentDoc = currentQuestionsMap.get(String(q.questionId));
            let isStale = false;
            let currentContent = null;

            if (currentDoc) {
                const currentHash = computeQuestionContentHash(currentDoc);
                if (q.contentHash && currentHash && q.contentHash !== currentHash) {
                    isStale = true;
                }
                currentContent = {
                    text: currentDoc.question || currentDoc.text,
                    options: currentDoc.options,
                    correctAnswer: currentDoc.correctOption ?? currentDoc.correctAnswer,
                    explanation: currentDoc.explanation,
                    difficulty: currentDoc.difficulty
                };
            }

            return {
                ...q,
                isManuallyPassed,
                manualUpdatedAt: manualRecord?.updatedAt || null,
                manualUpdatedBy: manualRecord?.updatedBy || null,
                isStale,
                currentContent
            };
        });

        return Response.json({
            success: true,
            report: {
                ...report,
                _id: report._id.toString(),
                questions: enrichedQuestions,
                adminApproval: auditState?.adminApproval || { isApproved: false }
            }
        });
    } catch (error) {
        console.error('Error fetching audit report:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const { testId, reportId, mode } = body;

        if (!testId) {
            return Response.json({ success: false, error: 'testId is required.' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        if (mode === 'SELECTED') {
            if (!reportId || !/^[0-9a-fA-F]{24}$/.test(reportId)) {
                return Response.json({ success: false, error: 'Valid reportId required for SELECTED deletion.' }, { status: 400 });
            }

            const reportToDelete = await db.collection('testAuditReports').findOne({ _id: new ObjectId(reportId), testId });
            if (!reportToDelete) {
                return Response.json({ success: false, error: 'Report not found.' }, { status: 404 });
            }

            // Delete the single report
            await db.collection('testAuditReports').deleteOne({ _id: new ObjectId(reportId) });

            // If deleted report was latest, promote the previous highest version to isLatest: true
            if (reportToDelete.isLatest) {
                const nextLatest = await db.collection('testAuditReports')
                    .find({ testId })
                    .sort({ reportVersion: -1 })
                    .limit(1)
                    .toArray();

                if (nextLatest.length > 0) {
                    await db.collection('testAuditReports').updateOne(
                        { _id: nextLatest[0]._id },
                        { $set: { isLatest: true } }
                    );
                }
            }

            return Response.json({
                success: true,
                message: `Audit report version ${reportToDelete.reportVersion} deleted successfully.`
            });
        } else if (mode === 'ALL') {
            // Delete ALL audit reports for this test
            const deleteResult = await db.collection('testAuditReports').deleteMany({ testId });

            // Clear manual Passed records and approval status for this test
            await db.collection('testAuditStates').deleteOne({ testId });

            return Response.json({
                success: true,
                message: `All ${deleteResult.deletedCount} audit reports and manual verification records for test "${testId}" were deleted.`
            });
        } else {
            return Response.json({ success: false, error: 'Invalid deletion mode. Must be "SELECTED" or "ALL".' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error deleting audit report:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
