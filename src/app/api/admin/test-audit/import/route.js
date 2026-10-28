import clientPromise from '@/lib/mongodb';
import { auth } from '@/lib/auth';
import { validateImportedAuditReport } from '@/lib/testAuditEngine';

export async function POST(request) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const body = await request.json();
        const client = await clientPromise;
        const db = client.db();

        // 1. Validate Report Payload
        const validation = await validateImportedAuditReport(body, db);
        if (!validation.valid) {
            return Response.json({
                success: false,
                error: 'Audit report validation failed.',
                validationErrors: validation.errors,
                warnings: validation.warnings
            }, { status: 400 });
        }

        const { normalizedReport } = validation;
        const testId = normalizedReport.testId;

        // 2. Fetch existing report history for versioning
        const existingReports = await db.collection('testAuditReports')
            .find({ testId })
            .sort({ reportVersion: -1 })
            .toArray();

        const latestVersion = existingReports.length > 0 ? (existingReports[0].reportVersion || 1) : 0;
        const newVersion = latestVersion + 1;

        // 3. Mark previous reports as isLatest: false to preserve complete audit history
        if (existingReports.length > 0) {
            await db.collection('testAuditReports').updateMany(
                { testId },
                { $set: { isLatest: false } }
            );
        }

        // 4. Save New Audit Report
        const reportToInsert = {
            ...normalizedReport,
            reportVersion: newVersion,
            isLatest: true,
            importedAt: new Date(),
            importedBy: session.user.email || 'admin'
        };

        const insertResult = await db.collection('testAuditReports').insertOne(reportToInsert);

        return Response.json({
            success: true,
            message: `Audit report version ${newVersion} for test "${testId}" imported successfully.`,
            reportId: insertResult.insertedId.toString(),
            version: newVersion,
            summary: normalizedReport.summary,
            warnings: validation.warnings
        });
    } catch (error) {
        console.error('Error importing audit report:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
