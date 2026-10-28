import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';

export async function GET(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const search = (searchParams.get('search') || '').trim();
        const examFilter = searchParams.get('exam') || 'ALL';
        const typeFilter = searchParams.get('type') || 'ALL';
        const subjectFilter = searchParams.get('subject') || 'ALL';
        const auditStatusFilter = searchParams.get('auditStatus') || 'ALL';
        const approvalFilter = searchParams.get('approval') || 'ALL';
        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.max(1, Math.min(100, parseInt(searchParams.get('limit') || '25', 10)));
        const sortBy = searchParams.get('sortBy') || 'testId';
        const sortOrder = searchParams.get('sortOrder') === 'desc' ? -1 : 1;

        const client = await clientPromise;
        const db = client.db();

        // 1. Build Base Match Filter for testPapers
        const matchQuery = {};

        if (search) {
            const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
            matchQuery.$or = [
                { testId: regex },
                { title: regex },
                { subject: regex }
            ];
        }

        if (examFilter !== 'ALL') {
            matchQuery.$or = [
                { exam: new RegExp(`^${examFilter}$`, 'i') },
                { testId: new RegExp(`^${examFilter}`, 'i') }
            ];
        }

        if (subjectFilter !== 'ALL') {
            matchQuery.subject = new RegExp(`^${subjectFilter}$`, 'i');
        }

        // 2. Fetch all testPapers matching criteria
        const allMatchingTests = await db.collection('testPapers')
            .find(matchQuery, {
                projection: {
                    testId: 1,
                    title: 1,
                    exam: 1,
                    subject: 1,
                    category: 1,
                    duration: 1,
                    totalMarks: 1,
                    questions: 1,
                    totalQuestions: 1
                }
            })
            .toArray();

        // 3. Batch retrieve latest audit reports and manual audit states
        const testIds = allMatchingTests.map(t => t.testId);

        const [latestReports, auditStates] = await Promise.all([
            db.collection('testAuditReports')
                .find({ testId: { $in: testIds }, isLatest: true }, {
                    projection: {
                        testId: 1,
                        reportVersion: 1,
                        auditDate: 1,
                        importedAt: 1,
                        auditStatus: 1,
                        summary: 1
                    }
                })
                .toArray(),
            db.collection('testAuditStates')
                .find({ testId: { $in: testIds } })
                .toArray()
        ]);

        const reportsMap = new Map();
        latestReports.forEach(r => reportsMap.set(r.testId, r));

        const statesMap = new Map();
        auditStates.forEach(s => statesMap.set(s.testId, s));

        // 4. Enrich tests with report status and verification metrics
        const enrichedTests = allMatchingTests.map(tp => {
            const latestRep = reportsMap.get(tp.testId) || null;
            const auditState = statesMap.get(tp.testId) || null;

            const totalQuestions = Array.isArray(tp.questions) ? tp.questions.length : (tp.totalQuestions || 0);

            // Manual Passed questions count
            const passedQuestionsList = auditState?.manualPassedQuestions || [];
            const manualPassed = passedQuestionsList.filter(p => p.passed === true).length;
            const manualPending = Math.max(0, totalQuestions - manualPassed);
            const auditProgress = totalQuestions > 0 ? Number(((manualPassed / totalQuestions) * 100).toFixed(1)) : 0;

            const isApproved = Boolean(auditState?.adminApproval?.isApproved);

            // Categorize test type
            const tidUpper = (tp.testId || '').toUpperCase();
            let testType = 'Other';
            if (tidUpper.includes('-PART-')) testType = 'Part Test';
            else if (tidUpper.includes('-MOCK-') || tidUpper.includes('-FULL-')) testType = 'Full Test';
            else if (tidUpper.includes('-CHAPTER-')) testType = 'Chapterwise';
            else if (tidUpper.includes('-SUBTOPIC-') || tidUpper.includes('-TOPIC-')) testType = 'Topicwise';
            else if (tidUpper.includes('-SUBJECT-')) testType = 'Subjectwise';
            else if (tidUpper.includes('-PYQ-')) testType = 'PYQ';
            else if (tidUpper.includes('-CT-') || tidUpper.includes('-LIVE-')) testType = 'Live Test';

            // Exam Category
            const exam = tp.exam || (tp.testId?.startsWith('neet') ? 'NEET' : tp.testId?.startsWith('jee') ? 'JEE Main' : 'BITSAT');

            return {
                testId: tp.testId,
                title: tp.title || tp.testId,
                exam,
                testType,
                subject: tp.subject || 'Mixed',
                totalQuestions,
                hasReport: Boolean(latestRep),
                latestReportId: latestRep?._id ? String(latestRep._id) : null,
                reportVersion: latestRep?.reportVersion || null,
                latestAuditDate: latestRep?.auditDate || null,
                importedAt: latestRep?.importedAt || null,
                aiAuditStatus: latestRep?.auditStatus || 'Not Audited',
                aiErrors: latestRep?.summary?.aiFailures || 0,
                aiWarnings: latestRep?.summary?.aiWarnings || 0,
                manualPassed,
                manualPending,
                auditProgress,
                isApproved,
                adminApproval: isApproved ? 'Approved' : 'Not Approved',
                adminApprovalDetails: auditState?.adminApproval || null
            };
        });

        // 5. Apply In-Memory Filters (Audit Status, Approval, Test Type)
        let filteredTests = enrichedTests;

        if (typeFilter !== 'ALL') {
            filteredTests = filteredTests.filter(t => t.testType.toLowerCase() === typeFilter.toLowerCase());
        }

        if (auditStatusFilter !== 'ALL') {
            filteredTests = filteredTests.filter(t => {
                if (auditStatusFilter === 'Not Audited') return !t.hasReport;
                if (auditStatusFilter === 'Saved') return t.hasReport;
                return t.aiAuditStatus.toLowerCase() === auditStatusFilter.toLowerCase();
            });
        }

        if (approvalFilter !== 'ALL') {
            const reqApproved = approvalFilter === 'Approved';
            filteredTests = filteredTests.filter(t => t.isApproved === reqApproved);
        }

        // 6. Sorting
        filteredTests.sort((a, b) => {
            let valA = a[sortBy] ?? '';
            let valB = b[sortBy] ?? '';
            if (typeof valA === 'string') valA = valA.toLowerCase();
            if (typeof valB === 'string') valB = valB.toLowerCase();
            if (valA < valB) return -1 * sortOrder;
            if (valA > valB) return 1 * sortOrder;
            return 0;
        });

        // 7. Pagination
        const totalMatches = filteredTests.length;
        const totalPages = Math.ceil(totalMatches / limit) || 1;
        const paginatedTests = filteredTests.slice((page - 1) * limit, page * limit);

        // 8. 6 Summary KPI Cards across all database test records
        const [totalDbTests, totalReportsCount, approvedCount] = await Promise.all([
            db.collection('testPapers').countDocuments({}),
            db.collection('testAuditReports').distinct('testId'),
            db.collection('testAuditStates').countDocuments({ 'adminApproval.isApproved': true })
        ]);

        // Aggregate AI errors & manual audit status from latest reports
        const allLatestReports = await db.collection('testAuditReports')
            .find({ isLatest: true }, { projection: { testId: 1, 'summary.aiFailures': 1, auditStatus: 1 } })
            .toArray();

        let testsWithAiErrors = 0;
        allLatestReports.forEach(r => {
            if ((r.summary?.aiFailures || 0) > 0 || r.auditStatus === 'Issues Found') {
                testsWithAiErrors++;
            }
        });

        // Global database counts for tests awaiting manual audit vs manually passed
        let testsAwaitingManual = 0;
        let testsManuallyPassed = 0;
        const allReportedTestIds = allLatestReports.map(r => r.testId);

        if (allReportedTestIds.length > 0) {
            const [reportTestPapers, reportAuditStates] = await Promise.all([
                db.collection('testPapers')
                    .find({ testId: { $in: allReportedTestIds } }, { projection: { testId: 1, questions: 1, totalQuestions: 1 } })
                    .toArray(),
                db.collection('testAuditStates')
                    .find({ testId: { $in: allReportedTestIds } }, { projection: { testId: 1, manualPassedQuestions: 1 } })
                    .toArray()
            ]);

            const tpQMap = new Map();
            reportTestPapers.forEach(tp => {
                const qCount = Array.isArray(tp.questions) ? tp.questions.length : (tp.totalQuestions || 0);
                tpQMap.set(tp.testId, qCount);
            });

            const stateMap = new Map();
            reportAuditStates.forEach(s => {
                const passedCnt = (s.manualPassedQuestions || []).filter(p => p.passed === true).length;
                stateMap.set(s.testId, passedCnt);
            });

            allReportedTestIds.forEach(tid => {
                const totalQ = tpQMap.get(tid) || 0;
                const passedQ = stateMap.get(tid) || 0;
                if (totalQ > 0 && passedQ >= totalQ) {
                    testsManuallyPassed++;
                } else {
                    testsAwaitingManual++;
                }
            });
        }

        const kpis = {
            totalTests: totalDbTests,
            testsWithSavedReports: totalReportsCount.length,
            testsWithAiErrors,
            testsAwaitingManualAudit: testsAwaitingManual,
            testsManuallyPassed,
            testsApprovedByAdmin: approvedCount
        };

        return Response.json({
            success: true,
            kpis,
            tests: paginatedTests,
            pagination: {
                page,
                limit,
                totalMatches,
                totalPages
            }
        });
    } catch (error) {
        console.error('Error fetching test audit directory:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
