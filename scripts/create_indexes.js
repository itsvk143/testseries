/**
 * scripts/create_indexes.js
 *
 * Fix #3 — Creates MongoDB indexes for frequently queried fields.
 * Run once: node scripts/create_indexes.js
 *
 * Indexes created:
 *   questions     → { testId }                            (all question lookups)
 *   testResults   → { userEmail }                         (dashboard load)
 *   testResults   → { testId, score }                     (rank calculation)
 *   testResults   → { testId, isLiveAttempt, score }      (live rank)
 *   users         → { email }  unique                     (profile lookup)
 */

require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error('❌ MONGODB_URI not set in .env.local');
    process.exit(1);
}

async function createIndexes() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('testseries');
        console.log('✅ Connected to MongoDB — creating indexes...\n');

        // ── questions collection ──────────────────────────────────────────────
        const questions = db.collection('questions');

        await questions.createIndex({ testId: 1 }, { background: true });
        console.log('✅ questions: { testId: 1 }');

        await questions.createIndex({ testId: 1, id: 1 }, { background: true });
        console.log('✅ questions: { testId: 1, id: 1 }');

        // ── testResults collection ────────────────────────────────────────────
        const testResults = db.collection('testResults');

        await testResults.createIndex({ userEmail: 1 }, { background: true });
        console.log('✅ testResults: { userEmail: 1 }');

        await testResults.createIndex({ testId: 1, score: 1 }, { background: true });
        console.log('✅ testResults: { testId: 1, score: 1 }');

        await testResults.createIndex(
            { testId: 1, isLiveAttempt: 1, score: 1 },
            { background: true }
        );
        console.log('✅ testResults: { testId: 1, isLiveAttempt: 1, score: 1 }');

        await testResults.createIndex({ userEmail: 1, testId: 1 }, { background: true });
        console.log('✅ testResults: { userEmail: 1, testId: 1 }');

        // Automatic deletion of test results after 800 days
        await testResults.createIndex(
            { attemptedAt: 1 },
            { expireAfterSeconds: 69120000, background: true }
        );
        console.log('✅ testResults: { attemptedAt: 1 } (TTL: 800 days)');

        // ── users collection ──────────────────────────────────────────────────
        const users = db.collection('users');

        // email is used for all profile lookups — make it unique
        await users.createIndex(
            { email: 1 },
            { unique: true, collation: { locale: 'en', strength: 2 }, background: true }
        );
        console.log('✅ users: { email: 1 } (unique, case-insensitive)');

        // 800 days = 800 * 24 * 60 * 60 = 69,120,000 seconds
        await users.createIndex(
            { createdAt: 1 },
            { 
                expireAfterSeconds: 69120000, 
                background: true,
                partialFilterExpression: { 
                    isAdmin: { $ne: true },
                    role: { $ne: 'admin' }
                }
            }
        );
        console.log('✅ users: { createdAt: 1 } (TTL: 800 days, excludes admins)');

        console.log('\n🎉 All indexes created successfully!');
        console.log('   Your queries will now be significantly faster at scale.');
    } catch (err) {
        if (err.code === 11000 || err.codeName === 'IndexOptionsConflict') {
            console.warn('⚠️  Some indexes already exist (that\'s fine, skipping).');
        } else {
            throw err;
        }
    } finally {
        await client.close();
    }
}

createIndexes().catch(err => {
    console.error('❌ Failed to create indexes:', err);
    process.exit(1);
});
