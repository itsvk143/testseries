import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import path from 'path';

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error('ERROR: MONGODB_URI is not set in environment!');
    process.exit(1);
}

const isLive = process.argv.includes('--apply');

async function migrate() {
    console.log('Connecting to MongoDB...');
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    console.log(`Connected to database: ${db.databaseName}`);
    console.log(`Execution Mode: ${isLive ? 'LIVE (Applying changes)' : 'DRY RUN (Inspection & simulation only)'}`);

    const report = {
        timestamp: new Date().toISOString(),
        mode: isLive ? 'LIVE' : 'DRY_RUN',
        questionBankUpdates: {
            biomoleculesToZoology: 0,
            microbesToBotany: 0,
            inheritanceToBotany: 0,
            biotechToZoology: 0
        },
        testPaperUpdates: {
            subjectCorrections: 0,
            excludedFlagged: 0
        },
        details: []
    };

    // =========================================================================
    // 1. QUESTION BANK AUDIT & CORRECTION
    // =========================================================================
    console.log('\n--- 1. Auditing questionBank Subject Allocations ---');

    // 1.1 Biomolecules in Botany -> Zoology
    const biomoleculesQuery = {
        subject: 'Botany',
        $or: [
            { chapter: { $regex: /biomolecule/i } },
            { subTopic: { $regex: /biomolecule/i } },
            { topic: { $regex: /biomolecule/i } }
        ]
    };
    const bioQs = await db.collection('questionBank').find(biomoleculesQuery).toArray();
    report.questionBankUpdates.biomoleculesToZoology = bioQs.length;
    console.log(`Found ${bioQs.length} Biomolecules questions marked as Botany.`);
    if (isLive && bioQs.length > 0) {
        const res = await db.collection('questionBank').updateMany(biomoleculesQuery, {
            $set: {
                subject: 'Zoology',
                chapter: 'Biomolecules',
                updatedAt: new Date()
            }
        });
        console.log(`-> Updated ${res.modifiedCount} Biomolecules questions to subject: 'Zoology', chapter: 'Biomolecules'.`);
    }

    // 1.2 Microbes in Human Welfare in Zoology -> Botany
    const microbesQuery = {
        subject: 'Zoology',
        $or: [
            { chapter: { $regex: /microbe/i } },
            { subTopic: { $regex: /microbe/i } },
            { topic: { $regex: /microbe/i } }
        ]
    };
    const micQs = await db.collection('questionBank').find(microbesQuery).toArray();
    report.questionBankUpdates.microbesToBotany = micQs.length;
    console.log(`Found ${micQs.length} Microbes in Human Welfare questions marked as Zoology.`);
    if (isLive && micQs.length > 0) {
        const res = await db.collection('questionBank').updateMany(microbesQuery, {
            $set: {
                subject: 'Botany',
                chapter: 'Microbes in Human Welfare',
                updatedAt: new Date()
            }
        });
        console.log(`-> Updated ${res.modifiedCount} Microbes questions to subject: 'Botany', chapter: 'Microbes in Human Welfare'.`);
    }

    // 1.3 Principles of Inheritance in Zoology -> Botany
    const inheritanceQuery = {
        subject: 'Zoology',
        $or: [
            { chapter: { $regex: /principles of inheritance|inheritance and variation/i } },
            { subTopic: { $regex: /principles of inheritance|inheritance and variation|mendelian genetics/i } }
        ]
    };
    const inhQs = await db.collection('questionBank').find(inheritanceQuery).toArray();
    report.questionBankUpdates.inheritanceToBotany = inhQs.length;
    console.log(`Found ${inhQs.length} Principles of Inheritance questions marked as Zoology.`);
    if (isLive && inhQs.length > 0) {
        const res = await db.collection('questionBank').updateMany(inheritanceQuery, {
            $set: {
                subject: 'Botany',
                chapter: 'Principles of Inheritance and Variation',
                updatedAt: new Date()
            }
        });
        console.log(`-> Updated ${res.modifiedCount} Inheritance questions to subject: 'Botany'.`);
    }

    // 1.4 Biotechnology in Botany -> Zoology
    const biotechQuery = {
        subject: 'Botany',
        $or: [
            { chapter: { $regex: /biotechnology/i } },
            { subTopic: { $regex: /biotechnology/i } }
        ]
    };
    const btQs = await db.collection('questionBank').find(biotechQuery).toArray();
    report.questionBankUpdates.biotechToZoology = btQs.length;
    console.log(`Found ${btQs.length} Biotechnology questions marked as Botany.`);
    if (isLive && btQs.length > 0) {
        const res = await db.collection('questionBank').updateMany(biotechQuery, {
            $set: {
                subject: 'Zoology',
                updatedAt: new Date()
            }
        });
        console.log(`-> Updated ${res.modifiedCount} Biotechnology questions to subject: 'Zoology'.`);
    }

    // =========================================================================
    // 2. TESTPAPERS AUDIT & CORRECTION
    // =========================================================================
    console.log('\n--- 2. Auditing testPapers Subject Allocations & Exclusions ---');

    // 2.1 Reallocate Biomolecules tests in Botany to Zoology
    const bioTests = await db.collection('testPapers').find({
        testId: /^neet-/i,
        subject: 'Botany',
        chapter: { $regex: /biomolecule/i }
    }).toArray();
    console.log(`Found ${bioTests.length} Biomolecules tests marked as Botany.`);
    if (isLive && bioTests.length > 0) {
        for (const t of bioTests) {
            await db.collection('testPapers').updateOne(
                { _id: t._id },
                { $set: { subject: 'Zoology', updatedAt: new Date() } }
            );
            report.testPaperUpdates.subjectCorrections++;
        }
        console.log(`-> Reallocated ${bioTests.length} Biomolecules tests to Zoology.`);
    }

    // 2.2 Reallocate Biotechnology tests in Botany to Zoology
    const btTests = await db.collection('testPapers').find({
        testId: /^neet-/i,
        subject: 'Botany',
        chapter: { $regex: /biotechnology/i }
    }).toArray();
    console.log(`Found ${btTests.length} Biotechnology tests marked as Botany.`);
    if (isLive && btTests.length > 0) {
        for (const t of btTests) {
            await db.collection('testPapers').updateOne(
                { _id: t._id },
                { $set: { subject: 'Zoology', updatedAt: new Date() } }
            );
            report.testPaperUpdates.subjectCorrections++;
        }
        console.log(`-> Reallocated ${btTests.length} Biotechnology tests to Zoology.`);
    }

    // 2.3 Reallocate Principles of Inheritance tests in Zoology to Botany
    const inhTests = await db.collection('testPapers').find({
        testId: /^neet-/i,
        subject: 'Zoology',
        chapter: { $regex: /principles of inheritance|inheritance and variation/i }
    }).toArray();
    console.log(`Found ${inhTests.length} Principles of Inheritance tests marked as Zoology.`);
    if (isLive && inhTests.length > 0) {
        for (const t of inhTests) {
            await db.collection('testPapers').updateOne(
                { _id: t._id },
                { $set: { subject: 'Botany', updatedAt: new Date() } }
            );
            report.testPaperUpdates.subjectCorrections++;
        }
        console.log(`-> Reallocated ${inhTests.length} Inheritance tests to Botany.`);
    }

    // 2.4 Reallocate Microbes tests in Zoology to Botany
    const micTests = await db.collection('testPapers').find({
        testId: /^neet-/i,
        subject: 'Zoology',
        chapter: { $regex: /microbes in human welfare|microbes/i }
    }).toArray();
    console.log(`Found ${micTests.length} Microbes tests marked as Zoology.`);
    if (isLive && micTests.length > 0) {
        for (const t of micTests) {
            await db.collection('testPapers').updateOne(
                { _id: t._id },
                { $set: { subject: 'Botany', updatedAt: new Date() } }
            );
            report.testPaperUpdates.subjectCorrections++;
        }
        console.log(`-> Reallocated ${micTests.length} Microbes tests to Botany.`);
    }

    // 2.5 Flag Excluded Chapter Tests in testPapers
    const excludedRegex = /digestion and absorption|transport in plants|reproduction in organisms|mineral nutrition|environmental issues/i;
    const excludedTests = await db.collection('testPapers').find({
        testId: /^neet-/i,
        chapter: { $regex: excludedRegex }
    }).toArray();
    console.log(`Found ${excludedTests.length} tests belonging to excluded chapters in testPapers.`);
    report.testPaperUpdates.excludedFlagged = excludedTests.length;
    if (isLive && excludedTests.length > 0) {
        for (const t of excludedTests) {
            await db.collection('testPapers').updateOne(
                { _id: t._id },
                {
                    $set: {
                        isActive: false,
                        isExcluded: true,
                        syllabusStatus: 'EXCLUDED',
                        updatedAt: new Date()
                    }
                }
            );
        }
        console.log(`-> Flagged ${excludedTests.length} tests as syllabusStatus: 'EXCLUDED' and isActive: false (preserving records).`);
    }

    // Save report file
    const reportPath = path.join(process.cwd(), 'scripts', `neet_chapter_hierarchy_migration_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nAudit & Migration Report written to: ${reportPath}`);

    await client.close();
    console.log('\nMigration complete.');
}

migrate().catch(err => {
    console.error('Fatal migration error:', err);
    process.exit(1);
});

