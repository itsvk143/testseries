import { MongoClient } from 'mongodb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function updateCheckpoints() {
    console.log('=== UPDATING AUDIT & BATCH CHECKPOINTS ===\n');

    const inventory = JSON.parse(fs.readFileSync('scripts/subtopics_inventory.json', 'utf-8'));

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');
    const col = db.collection('questionBank');

    // Aggregate all new audited questions by (subject, chapter, subTopic, exam)
    const auditedQuestions = await col.aggregate([
        {
            $match: { source: 'MASTER_AUDIT_ORIGINAL_VERY_DIFFICULT' }
        },
        {
            $group: {
                _id: {
                    subject: '$subject',
                    chapter: '$chapter',
                    subTopic: '$subTopic',
                    exam: '$exam'
                },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    const auditMap = new Map();
    for (const item of auditedQuestions) {
        if (!item._id.subject || !item._id.chapter || !item._id.subTopic || !item._id.exam) continue;
        const key = `${item._id.subject.toLowerCase()}|${item._id.chapter.toLowerCase()}|${item._id.subTopic.toLowerCase()}|${item._id.exam.toLowerCase()}`;
        auditMap.set(key, item.count);
    }

    let completedSubtopics = 0;
    let inProgressSubtopics = 0;
    let pendingSubtopics = 0;
    let totalAuditedInserted = 0;

    const checkpointData = inventory.map(item => {
        const neetKey = `${item.subject.toLowerCase()}|${item.chapter.toLowerCase()}|${item.subtopic.toLowerCase()}|neet`;
        const jeeKey = `${item.subject.toLowerCase()}|${item.chapter.toLowerCase()}|${item.subtopic.toLowerCase()}|jee main`;

        const neetCount = auditMap.get(neetKey) || 0;
        const jeeCount = auditMap.get(jeeKey) || 0;

        totalAuditedInserted += neetCount + jeeCount;

        const isNeetComplete = !item.neetEligible || neetCount >= 5;
        const isJeeComplete = !item.jeeEligible || jeeCount >= 5;

        let status = 'PENDING';
        if (isNeetComplete && isJeeComplete && (item.neetEligible || item.jeeEligible)) {
            status = 'COMPLETED';
            completedSubtopics++;
        } else if (neetCount > 0 || jeeCount > 0) {
            status = 'IN_PROGRESS';
            inProgressSubtopics++;
        } else {
            pendingSubtopics++;
        }

        return {
            ...item,
            neetInserted: neetCount,
            jeeInserted: jeeCount,
            status
        };
    });

    const summary = {
        totalSubjects: 6,
        totalChapters: 82,
        totalSubtopics: inventory.length,
        neetEligibleSubtopics: inventory.filter(x => x.neetEligible).length,
        jeeEligibleSubtopics: inventory.filter(x => x.jeeEligible).length,
        expectedNeetQuestions: inventory.filter(x => x.neetEligible).length * 5,
        expectedJeeQuestions: inventory.filter(x => x.jeeEligible).length * 5,
        expectedTotalQuestions: inventory.filter(x => x.neetEligible).length * 5 + inventory.filter(x => x.jeeEligible).length * 5,
        totalAuditedInserted,
        completedSubtopics,
        inProgressSubtopics,
        pendingSubtopics,
        lastCheckpointAt: new Date()
    };

    fs.writeFileSync('scripts/audit_checkpoints.json', JSON.stringify({ summary, subtopics: checkpointData }, null, 2));

    console.log('--- CHECKPOINT SUMMARY ---');
    console.log(`Total Target Subtopics: ${summary.totalSubtopics}`);
    console.log(`Total Audited & Inserted Questions So Far: ${summary.totalAuditedInserted}`);
    console.log(`Subtopics In Progress: ${summary.inProgressSubtopics}`);
    console.log(`Subtopics Pending: ${summary.pendingSubtopics}`);
    console.log(`Subtopics Completed: ${summary.completedSubtopics}`);
    console.log('\n✓ Updated scripts/audit_checkpoints.json');

    await client.close();
    return summary;
}

updateCheckpoints().catch(err => {
    console.error('Error updating checkpoints:', err);
    process.exit(1);
});
