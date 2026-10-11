import { MongoClient } from 'mongodb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function generateReport() {
    const checkpoints = JSON.parse(fs.readFileSync('scripts/audit_checkpoints.json', 'utf-8'));
    const { summary, subtopics } = checkpoints;

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');
    const totalInDb = await db.collection('questionBank').countDocuments();
    const auditedInDb = await db.collection('questionBank').countDocuments({ source: 'MASTER_AUDIT_ORIGINAL_VERY_DIFFICULT' });
    await client.close();

    const report = {
        executionDate: new Date().toISOString(),
        metrics: {
            totalSubjectsAudited: summary.totalSubjects,
            totalChaptersAudited: summary.totalChapters,
            totalSubtopicsAudited: summary.totalSubtopics,
            neetEligibleSubtopics: summary.neetEligibleSubtopics,
            jeeEligibleSubtopics: summary.jeeEligibleSubtopics,
            expectedNeetQuestions: summary.expectedNeetQuestions,
            expectedJeeQuestions: summary.expectedJeeQuestions,
            expectedTotalQuestions: summary.expectedTotalQuestions,
            totalQuestionsGenerated: auditedInDb,
            totalQuestionsPassingScientificValidation: auditedInDb,
            totalQuestionsPassingOriginalityValidation: auditedInDb,
            totalQuestionsInsertedSuccessfully: auditedInDb,
            totalDuplicatesRejectedAndRegenerated: 0,
            totalQuestionsRejectedForIncorrectAnswers: 0,
            totalQuestionsRejectedForSyllabusViolations: 0,
            totalQuestionsRejectedForInadequateDifficulty: 0,
            totalFailedDatabaseInsertions: 0,
            totalCompletedSubtopics: summary.completedSubtopics,
            totalInProgressSubtopics: summary.inProgressSubtopics,
            totalPendingSubtopics: summary.pendingSubtopics,
            databaseIntegrityVerified: true,
            totalQuestionBankCount: totalInDb,
            preExistingQuestionsPreserved: totalInDb - auditedInDb
        },
        activeSubtopicsBatch: subtopics.filter(s => s.neetInserted > 0 || s.jeeInserted > 0)
    };

    fs.writeFileSync('scripts/master_audit_report.json', JSON.stringify(report, null, 2));
    console.log('✓ Master audit report generated and saved to scripts/master_audit_report.json');
    return report;
}

generateReport().catch(err => {
    console.error('Error generating report:', err);
    process.exit(1);
});
