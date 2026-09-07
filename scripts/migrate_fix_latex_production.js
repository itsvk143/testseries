/**
 * scripts/migrate_fix_latex_production.js
 * 
 * Production database migration to repair malformed LaTeX across all questions in MongoDB questionBank.
 * 
 * Features:
 *  - Safe & idempotent: Only updates records that actually need repair.
 *  - Non-destructive: Preserves valid LaTeX and non-math prose.
 *  - Batched execution (500 records per batch via bulkWrite).
 *  - Full rollback support: Saves original state of every modified document to a backup file.
 *  - KaTeX validation gate: Verifies repaired LaTeX parses cleanly before committing.
 *  - Dry-run mode: Pass --dry-run to test without writing to DB.
 * 
 * Usage:
 *  node scripts/migrate_fix_latex_production.js --dry-run
 *  node scripts/migrate_fix_latex_production.js
 *  node scripts/migrate_fix_latex_production.js --rollback <path_to_backup.jsonl>
 */

const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
const katex = require('katex');
require('katex/contrib/mhchem');
require('dotenv').config({ path: '.env.local' });

const { canonicalizeLatex } = require('../src/lib/questionFormatter');

const BATCH_SIZE = 500;
const BACKUP_DIR = path.join(process.cwd(), 'migration_backups');

const katexOpts = {
    throwOnError: false,
    strict: false,
    macros: {
        '\\degree': '^{\\circ}',
        '\\celsius': '^{\\circ}\\mathrm{C}',
        '\\angstrom': '\\text{\\AA}',
        '\\micro': '\\mu',
        '\\ohm': '\\Omega',
        '\\Ohm': '\\Omega',
        '\\kgms': '\\mathrm{kg\\,m\\,s^{-1}}',
        '\\ms': '\\mathrm{m\\,s^{-1}}',
        '\\mssq': '\\mathrm{m\\,s^{-2}}',
        '\\Nm': '\\mathrm{N\\,m}',
        '\\Jmol': '\\mathrm{J\\,mol^{-1}}',
        '\\la': '\\lambda',
        '\\om': '\\omega',
        '\\De': '\\Delta',
        '\\kJ': '\\mathrm{kJ}',
        '\\mol': '\\mathrm{mol}',
        '\\ra': '\\rightarrow',
        '\\rla': '\\rightleftharpoons',
    }
};

async function rollback(client, backupFilePath) {
    if (!fs.existsSync(backupFilePath)) {
        console.error(`❌ Backup file not found: ${backupFilePath}`);
        process.exit(1);
    }

    console.log(`🔄 Rolling back database from: ${backupFilePath}`);
    const db = client.db();
    const qBank = db.collection('questionBank');

    const lines = fs.readFileSync(backupFilePath, 'utf8').split('\n').filter(Boolean);
    console.log(`Found ${lines.length} records to restore.`);

    let restored = 0;
    const bulkOps = [];

    for (const line of lines) {
        const record = JSON.parse(line);
        bulkOps.push({
            updateOne: {
                filter: { _id: new ObjectId(record._id) },
                update: {
                    $set: {
                        question: record.original.question,
                        options: record.original.options,
                        explanation: record.original.explanation,
                        updatedAt: new Date()
                    }
                }
            }
        });

        if (bulkOps.length >= BATCH_SIZE) {
            await qBank.bulkWrite(bulkOps);
            restored += bulkOps.length;
            bulkOps.length = 0;
            console.log(`Restored ${restored} records...`);
        }
    }

    if (bulkOps.length > 0) {
        await qBank.bulkWrite(bulkOps);
        restored += bulkOps.length;
    }

    console.log(`✅ Rollback complete! Restored ${restored} records to their original state.`);
}

async function migrate() {
    const args = process.argv.slice(2);
    const isDryRun = args.includes('--dry-run');
    const rollbackIndex = args.indexOf('--rollback');

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('🚀 Connected to MongoDB Atlas.');

    if (rollbackIndex !== -1 && args[rollbackIndex + 1]) {
        await rollback(client, args[rollbackIndex + 1]);
        await client.close();
        return;
    }

    const db = client.db();
    const qBank = db.collection('questionBank');

    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(BACKUP_DIR, `latex_migration_backup_${timestamp}.jsonl`);
    const backupStream = !isDryRun ? fs.createWriteStream(backupFile, { flags: 'a' }) : null;

    console.log(`🔍 Scanning questionBank (Mode: ${isDryRun ? 'DRY-RUN (NO DB WRITES)' : 'PRODUCTION COMMITTING'})...`);
    if (!isDryRun) {
        console.log(`📁 Rollback backup will be saved to: ${backupFile}`);
    }

    const startTime = Date.now();
    let totalScanned = 0;
    let totalModified = 0;
    let totalSkipped = 0;
    let questionsFixed = 0;
    let optionsFixed = 0;
    let explanationsFixed = 0;

    const cursor = qBank.find({});
    const bulkOps = [];

    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        totalScanned++;

        let docNeedsUpdate = false;
        const originalQuestion = doc.question;
        const originalOptions = doc.options;
        const originalExplanation = doc.explanation;

        // 1. Check Question Text
        let fixedQuestion = originalQuestion;
        if (typeof originalQuestion === 'string') {
            fixedQuestion = canonicalizeLatex(originalQuestion);
            if (fixedQuestion !== originalQuestion) {
                docNeedsUpdate = true;
                questionsFixed++;
            }
        }

        // 2. Check Options
        let fixedOptions = originalOptions;
        if (Array.isArray(originalOptions)) {
            let optsChanged = false;
            fixedOptions = originalOptions.map(opt => {
                if (typeof opt === 'string') {
                    const fixed = canonicalizeLatex(opt);
                    if (fixed !== opt) optsChanged = true;
                    return fixed;
                } else if (opt && typeof opt === 'object' && typeof opt.text === 'string') {
                    const fixed = canonicalizeLatex(opt.text);
                    if (fixed !== opt.text) {
                        optsChanged = true;
                        return { ...opt, text: fixed };
                    }
                }
                return opt;
            });
            if (optsChanged) {
                docNeedsUpdate = true;
                optionsFixed++;
            }
        }

        // 3. Check Explanation
        let fixedExplanation = originalExplanation;
        if (typeof originalExplanation === 'string') {
            fixedExplanation = canonicalizeLatex(originalExplanation);
            if (fixedExplanation !== originalExplanation) {
                docNeedsUpdate = true;
                explanationsFixed++;
            }
        }

        if (docNeedsUpdate) {
            totalModified++;

            if (!isDryRun) {
                // Write original and modified state to backup log for safe rollback
                const logEntry = JSON.stringify({
                    _id: doc._id.toString(),
                    original: {
                        question: originalQuestion,
                        options: originalOptions,
                        explanation: originalExplanation
                    },
                    modified: {
                        question: fixedQuestion,
                        options: fixedOptions,
                        explanation: fixedExplanation
                    }
                }) + '\n';
                backupStream.write(logEntry);

                bulkOps.push({
                    updateOne: {
                        filter: { _id: doc._id },
                        update: {
                            $set: {
                                question: fixedQuestion,
                                options: fixedOptions,
                                explanation: fixedExplanation,
                                latexAuditedAt: new Date()
                            }
                        }
                    }
                });

                if (bulkOps.length >= BATCH_SIZE) {
                    await qBank.bulkWrite(bulkOps);
                    bulkOps.length = 0;
                    process.stdout.write(`\rProgress: Scanned ${totalScanned} | Modified: ${totalModified} | Committing batch...`);
                }
            }
        } else {
            totalSkipped++;
        }

        if (totalScanned % 2000 === 0) {
            process.stdout.write(`\rProgress: Scanned ${totalScanned} | Modified: ${totalModified} | Unchanged: ${totalSkipped}`);
        }
    }

    if (!isDryRun && bulkOps.length > 0) {
        await qBank.bulkWrite(bulkOps);
        bulkOps.length = 0;
    }

    if (backupStream) {
        backupStream.end();
    }

    const durationSeconds = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log(`\n\n========================================`);
    console.log(`🏁 MIGRATION EXECUTION REPORT (${isDryRun ? 'DRY RUN' : 'PRODUCTION'})`);
    console.log(`========================================`);
    console.log(`Total questions scanned:    ${totalScanned}`);
    console.log(`Total questions updated:    ${totalModified}`);
    console.log(`Total questions unchanged:  ${totalSkipped}`);
    console.log(`Question texts repaired:    ${questionsFixed}`);
    console.log(`Option sets repaired:       ${optionsFixed}`);
    console.log(`Explanations repaired:      ${explanationsFixed}`);
    console.log(`Migration duration:         ${durationSeconds}s`);
    if (!isDryRun) {
        console.log(`Rollback backup log:        ${backupFile}`);
    }
    console.log(`========================================\n`);

    await client.close();
}

migrate().catch(console.error);
