/**
 * remove_duplicate_questions.js
 * Scans the entire MongoDB database for duplicate questions in `questionBank`.
 * Preserves the canonical copy (prioritizing IDs linked in `testPapers`),
 * updates any test paper references if needed, and removes excess duplicate records.
 */

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');
    const tPapers = db.collection('testPapers');

    console.log('🚀 Connected to MongoDB.');

    // 1. Fetch all question IDs referenced in test papers
    const testPapers = await tPapers.find({}).toArray();
    const referencedInTests = new Set();
    testPapers.forEach(tp => {
        (tp.questions || []).forEach(qid => {
            if (qid) referencedInTests.add(qid.toString());
        });
    });
    console.log(`📋 Found ${referencedInTests.size} question IDs linked in test papers.`);

    // 2. Aggregate duplicate clusters by normalized lowercase question text
    const duplicateClusters = await qBank.aggregate([
        {
            $project: {
                cleanText: { $trim: { input: { $toLower: "$question" } } },
                question: 1,
                subject: 1,
                chapter: 1,
                subTopic: 1,
                createdAt: 1
            }
        },
        {
            $group: {
                _id: "$cleanText",
                count: { $sum: 1 },
                docs: {
                    $push: {
                        _id: "$_id",
                        subject: "$subject",
                        chapter: "$chapter",
                        subTopic: "$subTopic",
                        createdAt: "$createdAt"
                    }
                }
            }
        },
        {
            $match: {
                count: { $gt: 1 }
            }
        },
        {
            $sort: { count: -1 }
        }
    ]).toArray();

    console.log(`🔍 Discovered ${duplicateClusters.length} duplicate clusters in questionBank.`);

    let totalRemoved = 0;
    const idsToDelete = [];
    const idRemap = new Map(); // deletedId -> keptId

    for (const cluster of duplicateClusters) {
        const docs = cluster.docs;

        // Sort docs to pick the primary (kept) document:
        // Priority 1: Document already linked in a test paper
        // Priority 2: Document with non-empty subTopic
        // Priority 3: Earliest createdAt
        docs.sort((a, b) => {
            const aLinked = referencedInTests.has(a._id.toString()) ? 1 : 0;
            const bLinked = referencedInTests.has(b._id.toString()) ? 1 : 0;
            if (bLinked !== aLinked) return bLinked - aLinked;

            const aSub = (a.subTopic && a.subTopic.trim() !== '') ? 1 : 0;
            const bSub = (b.subTopic && b.subTopic.trim() !== '') ? 1 : 0;
            if (bSub !== aSub) return bSub - aSub;

            const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return aTime - bTime;
        });

        const keptDoc = docs[0];
        const duplicatesToRemove = docs.slice(1);

        for (const dup of duplicatesToRemove) {
            idsToDelete.push(dup._id);
            idRemap.set(dup._id.toString(), keptDoc._id);
            totalRemoved++;
        }
    }

    console.log(`🗑️ Removing ${idsToDelete.length} duplicate questions...`);

    // 3. Batch delete duplicate IDs
    if (idsToDelete.length > 0) {
        const deleteRes = await qBank.deleteMany({ _id: { $in: idsToDelete } });
        console.log(`✅ Deleted ${deleteRes.deletedCount} duplicate questions from questionBank.`);
    }

    // 4. Update any test papers if a deleted ID was linked
    let testPapersUpdated = 0;
    for (const tp of testPapers) {
        let modified = false;
        const newQuestions = (tp.questions || []).map(qid => {
            const strId = qid ? qid.toString() : '';
            if (idRemap.has(strId)) {
                modified = true;
                return idRemap.get(strId);
            }
            return qid;
        });

        if (modified) {
            // Deduplicate questions inside the test paper itself if any
            const uniqueQuestions = [];
            const seen = new Set();
            for (const q of newQuestions) {
                const s = q.toString();
                if (!seen.has(s)) {
                    seen.add(s);
                    uniqueQuestions.push(q);
                }
            }

            await tPapers.updateOne(
                { _id: tp._id },
                { $set: { questions: uniqueQuestions, updatedAt: new Date() } }
            );
            testPapersUpdated++;
        }
    }
    console.log(`🔄 Updated ${testPapersUpdated} test papers to preserve references.`);

    // 5. Final Verification
    const finalTotal = await qBank.countDocuments();
    const remainingDuplicates = await qBank.aggregate([
        {
            $project: {
                cleanText: { $trim: { input: { $toLower: "$question" } } }
            }
        },
        {
            $group: {
                _id: "$cleanText",
                count: { $sum: 1 }
            }
        },
        {
            $match: {
                count: { $gt: 1 }
            }
        }
    ]).toArray();

    console.log('\n🎉 ====================================================');
    console.log(`🎉 DUPLICATE REMOVAL COMPLETE!`);
    console.log(`📊 Total Duplicate Questions Removed: ${totalRemoved}`);
    console.log(`📊 Final Unique Questions in Database: ${finalTotal}`);
    console.log(`📊 Remaining Duplicates in Database: ${remainingDuplicates.length}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
