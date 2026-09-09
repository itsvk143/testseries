/**
 * scripts/migrate_testpapers_objectids.js
 * 
 * Normalizes all testPapers in MongoDB so that testPaper.questions
 * contains clean ObjectId instances rather than string IDs or embedded objects.
 */

const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function migrate() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('Missing MONGODB_URI in .env.local');
        process.exit(1);
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    console.log('Connected to MongoDB.');

    const allPapers = await db.collection('testPapers').find({}).toArray();
    console.log(`Found ${allPapers.length} total testPapers.`);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const paper of allPapers) {
        if (!paper.questions || paper.questions.length === 0) {
            skippedCount++;
            continue;
        }

        let needsUpdate = false;
        const normalizedIds = [];

        for (const item of paper.questions) {
            if (!item) continue;

            if (typeof item === 'string') {
                if (ObjectId.isValid(item) && item.length === 24) {
                    normalizedIds.push(new ObjectId(item));
                    needsUpdate = true;
                }
            } else if (item._bsontype === 'ObjectID' || item instanceof ObjectId) {
                normalizedIds.push(item);
            } else if (typeof item === 'object') {
                const rawId = item.questionId || item._id || item.id;
                if (rawId && ObjectId.isValid(rawId)) {
                    normalizedIds.push(typeof rawId === 'string' ? new ObjectId(rawId) : rawId);
                    needsUpdate = true;
                }
            }
        }

        if (needsUpdate && normalizedIds.length > 0) {
            await db.collection('testPapers').updateOne(
                { _id: paper._id },
                { $set: { questions: normalizedIds, updatedAt: new Date() } }
            );
            updatedCount++;
            console.log(`Updated [${paper.testId}]: converted ${normalizedIds.length} question references to ObjectIds.`);
        } else {
            skippedCount++;
        }
    }

    console.log(`\nMigration completed!`);
    console.log(`- Updated: ${updatedCount} testPapers`);
    console.log(`- Unchanged: ${skippedCount} testPapers`);

    await client.close();
}

migrate().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
