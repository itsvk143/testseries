const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const isDryRun = process.argv.includes('--dry-run');

function normalizeStr(str) {
    if (!str) return '';
    return str.toString().trim().toLowerCase().replace(/[-_]/g, ' ');
}

function getQuestionType(doc) {
    if (!doc) return 'MCQ';
    const t = (doc.type || doc.questionType || '').toUpperCase().trim();
    if (t === 'NUMERICAL' || t === 'NUMERIC' || t === 'INTEGER') return 'NUMERICAL';
    if (t.includes('ASSERTION') || t === 'AR') return 'ASSERTION_REASON';
    return 'MCQ';
}

function toValidObjectId(id) {
    if (!id) return null;
    const s = (typeof id === 'object' && id._id) ? id._id.toString() : id.toString();
    return ObjectId.isValid(s) ? new ObjectId(s) : null;
}

async function main() {
    console.log(`=== Enforce NEET MCQ & AR Rules (Dry Run: ${isDryRun}) ===`);
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('Missing MONGODB_URI in .env.local');
        process.exit(1);
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    console.log('Connected to MongoDB.');

    // 1. Fetch all NEET test papers
    const neetTests = await db.collection('testPapers').find({
        $or: [
            { exam: { $regex: /^neet$/i } },
            { testId: { $regex: /^neet/i } }
        ]
    }).toArray();
    console.log(`Found ${neetTests.length} NEET test papers.`);

    // 2. Load all questions from questionBank to build memory index
    console.log('Loading all questionBank questions into memory index...');
    const allQB = await db.collection('questionBank').find(
        {},
        {
            projection: {
                _id: 1,
                subject: 1,
                chapter: 1,
                subtopic: 1,
                subTopic: 1,
                type: 1,
                questionType: 1
            }
        }
    ).toArray();
    console.log(`Loaded ${allQB.length} total questions from questionBank.`);

    const qMap = new Map();
    const mcqPoolBySubtopic = new Map();
    const mcqPoolByChapter = new Map();
    const mcqPoolBySubject = new Map();

    const arPoolBySubtopic = new Map();
    const arPoolByChapter = new Map();
    const arPoolBySubject = new Map();

    for (const q of allQB) {
        const idStr = q._id.toString();
        qMap.set(idStr, q);

        const type = getQuestionType(q);
        if (type === 'NUMERICAL') continue; // Don't use numericals for replacement!

        const subj = normalizeStr(q.subject);
        const chap = normalizeStr(q.chapter);
        const sub = normalizeStr(q.subtopic || q.subTopic);

        const targetPoolBySub = type === 'ASSERTION_REASON' ? arPoolBySubtopic : mcqPoolBySubtopic;
        const targetPoolByChap = type === 'ASSERTION_REASON' ? arPoolByChapter : mcqPoolByChapter;
        const targetPoolBySubj = type === 'ASSERTION_REASON' ? arPoolBySubject : mcqPoolBySubject;

        if (subj && chap && sub) {
            const key = `${subj}|${chap}|${sub}`;
            if (!targetPoolBySub.has(key)) targetPoolBySub.set(key, []);
            targetPoolBySub.get(key).push(q._id);
        }
        if (subj && chap) {
            const key = `${subj}|${chap}`;
            if (!targetPoolByChap.has(key)) targetPoolByChap.set(key, []);
            targetPoolByChap.get(key).push(q._id);
        }
        if (subj) {
            const key = subj;
            if (!targetPoolBySubj.has(key)) targetPoolBySubj.set(key, []);
            targetPoolBySubj.get(key).push(q._id);
        }
    }

    function findReplacement(type, subject, chapter, subtopic, usedSet) {
        const subj = normalizeStr(subject);
        const chap = normalizeStr(chapter);
        const sub = normalizeStr(subtopic);

        const poolBySub = type === 'ASSERTION_REASON' ? arPoolBySubtopic : mcqPoolBySubtopic;
        const poolByChap = type === 'ASSERTION_REASON' ? arPoolByChapter : mcqPoolByChapter;
        const poolBySubj = type === 'ASSERTION_REASON' ? arPoolBySubject : mcqPoolBySubject;

        // Try exact subtopic
        if (subj && chap && sub) {
            const candidates = poolBySub.get(`${subj}|${chap}|${sub}`) || [];
            for (const c of candidates) {
                const s = c.toString();
                if (!usedSet.has(s)) {
                    usedSet.add(s);
                    return c;
                }
            }
        }

        // Try chapter
        if (subj && chap) {
            const candidates = poolByChap.get(`${subj}|${chap}`) || [];
            for (const c of candidates) {
                const s = c.toString();
                if (!usedSet.has(s)) {
                    usedSet.add(s);
                    return c;
                }
            }
        }

        // Try subject
        if (subj) {
            const candidates = poolBySubj.get(subj) || [];
            for (const c of candidates) {
                const s = c.toString();
                if (!usedSet.has(s)) {
                    usedSet.add(s);
                    return c;
                }
            }
        }

        // If AR wasn't found, fallback to MCQ
        if (type === 'ASSERTION_REASON') {
            return findReplacement('MCQ', subject, chapter, subtopic, usedSet);
        }

        return null;
    }

    let modifiedTestsCount = 0;
    let totalNumericalsReplaced = 0;
    let totalExcessARReplaced = 0;
    let totalReorderedCount = 0;

    const bulkOps = [];

    for (const test of neetTests) {
        const rawQs = test.questions || [];
        if (rawQs.length === 0) continue;

        const resolved = rawQs.map(q => {
            const objId = toValidObjectId(q);
            const idStr = objId ? objId.toString() : '';
            return {
                raw: objId || q,
                idStr: idStr,
                doc: qMap.get(idStr) || null
            };
        });

        const isMultiSubject = test.testId.includes('MOCK') ||
                               test.testId.includes('PYQ') ||
                               test.testId.includes('CT') ||
                               test.subject === 'Mixed' ||
                               test.subject === 'All' ||
                               rawQs.length > 60;

        const usedInTest = new Set(resolved.map(r => r.idStr).filter(Boolean));
        let changed = false;

        if (!isMultiSubject) {
            // SINGLE SUBJECT TEST (usually 45 questions)
            const fallbackSubj = test.subject || resolved[0]?.doc?.subject || 'Physics';
            const fallbackChap = test.chapter || resolved[0]?.doc?.chapter || '';

            const currentMCQs = [];
            const currentARs = [];
            const currentNumericals = [];

            for (const item of resolved) {
                const typ = getQuestionType(item.doc);
                if (typ === 'NUMERICAL') {
                    currentNumericals.push(item);
                } else if (typ === 'ASSERTION_REASON') {
                    currentARs.push(item);
                } else {
                    currentMCQs.push(item);
                }
            }

            let finalARs = [];
            let excessARs = [];

            if (currentARs.length > 6) {
                finalARs = currentARs.slice(0, 6);
                excessARs = currentARs.slice(6);
            } else {
                finalARs = [...currentARs];
            }

            const finalMCQs = [...currentMCQs];

            // If we have numericals, can we promote some to AR up to 6?
            let numericalsToReplaceWithAR = Math.min(6 - finalARs.length, currentNumericals.length);
            // Replace excess ARs with MCQs
            for (const ear of excessARs) {
                const subj = ear.doc?.subject || fallbackSubj;
                const chap = ear.doc?.chapter || fallbackChap;
                const sub = ear.doc?.subtopic || ear.doc?.subTopic || '';
                const rep = findReplacement('MCQ', subj, chap, sub, usedInTest);
                if (rep) {
                    finalMCQs.push({ raw: rep, idStr: rep.toString(), doc: qMap.get(rep.toString()) });
                    totalExcessARReplaced++;
                    changed = true;
                } else {
                    finalMCQs.push(ear); // keep if no candidate
                }
            }

            // Replace numericals
            for (let i = 0; i < currentNumericals.length; i++) {
                const numItem = currentNumericals[i];
                const subj = numItem.doc?.subject || fallbackSubj;
                const chap = numItem.doc?.chapter || fallbackChap;
                const sub = numItem.doc?.subtopic || numItem.doc?.subTopic || '';

                if (i < numericalsToReplaceWithAR) {
                    // Try replacing with AR
                    const repAR = findReplacement('ASSERTION_REASON', subj, chap, sub, usedInTest);
                    if (repAR) {
                        const repDoc = qMap.get(repAR.toString());
                        const repType = getQuestionType(repDoc);
                        if (repType === 'ASSERTION_REASON') {
                            finalARs.push({ raw: repAR, idStr: repAR.toString(), doc: repDoc });
                        } else {
                            finalMCQs.push({ raw: repAR, idStr: repAR.toString(), doc: repDoc });
                        }
                        totalNumericalsReplaced++;
                        changed = true;
                    } else {
                        // Fallback to MCQ
                        const repMCQ = findReplacement('MCQ', subj, chap, sub, usedInTest);
                        if (repMCQ) {
                            finalMCQs.push({ raw: repMCQ, idStr: repMCQ.toString(), doc: qMap.get(repMCQ.toString()) });
                            totalNumericalsReplaced++;
                            changed = true;
                        }
                    }
                } else {
                    // Replace with MCQ
                    const repMCQ = findReplacement('MCQ', subj, chap, sub, usedInTest);
                    if (repMCQ) {
                        finalMCQs.push({ raw: repMCQ, idStr: repMCQ.toString(), doc: qMap.get(repMCQ.toString()) });
                        totalNumericalsReplaced++;
                        changed = true;
                    }
                }
            }

            // Assemble new question list: all MCQs first, all ARs at the end
            const newResolved = [...finalMCQs, ...finalARs];
            const newRawList = newResolved.map(r => toValidObjectId(r.raw) || r.raw);

            // Check if order changed or items changed
            const isDifferent = rawQs.length !== newRawList.length ||
                rawQs.some((q, idx) => {
                    const oldStr = toValidObjectId(q)?.toString();
                    const newStr = toValidObjectId(newRawList[idx])?.toString();
                    return oldStr !== newStr;
                });

            if (isDifferent || changed) {
                modifiedTestsCount++;
                totalReorderedCount++;
                bulkOps.push({
                    updateOne: {
                        filter: { _id: test._id },
                        update: { $set: { questions: newRawList, updatedAt: new Date() } }
                    }
                });
            }
        } else {
            // MULTI-SUBJECT TEST (e.g. 180 questions)
            // Group questions into subject sections preserving their order
            const subjectSections = [];
            let currentSection = null;

            for (const item of resolved) {
                const subj = item.doc?.subject || 'Unknown';
                if (!currentSection || currentSection.subject !== subj) {
                    currentSection = { subject: subj, items: [] };
                    subjectSections.push(currentSection);
                }
                currentSection.items.push(item);
            }

            let multiChanged = false;
            const finalMultiQs = [];

            for (const sec of subjectSections) {
                const secMCQs = [];
                const secARs = [];
                const secNumericals = [];

                for (const item of sec.items) {
                    const typ = getQuestionType(item.doc);
                    if (typ === 'NUMERICAL') secNumericals.push(item);
                    else if (typ === 'ASSERTION_REASON') secARs.push(item);
                    else secMCQs.push(item);
                }

                // Replace numericals with MCQs from same subject
                for (const numItem of secNumericals) {
                    const subj = numItem.doc?.subject || sec.subject;
                    const chap = numItem.doc?.chapter || '';
                    const sub = numItem.doc?.subtopic || numItem.doc?.subTopic || '';
                    const rep = findReplacement('MCQ', subj, chap, sub, usedInTest);
                    if (rep) {
                        secMCQs.push({ raw: rep, idStr: rep.toString(), doc: qMap.get(rep.toString()) });
                        totalNumericalsReplaced++;
                        multiChanged = true;
                    } else {
                        console.warn(`Could not find MCQ replacement for ${numItem.idStr} in ${test.testId}`);
                    }
                }

                // Within this subject section, MCQs first, ARs at the end
                finalMultiQs.push(...secMCQs, ...secARs);
            }

            const newRawList = finalMultiQs.map(r => toValidObjectId(r.raw) || r.raw);
            const isDifferent = rawQs.length !== newRawList.length ||
                rawQs.some((q, idx) => {
                    const oldStr = toValidObjectId(q)?.toString();
                    const newStr = toValidObjectId(newRawList[idx])?.toString();
                    return oldStr !== newStr;
                });

            if (isDifferent || multiChanged) {
                modifiedTestsCount++;
                totalReorderedCount++;
                bulkOps.push({
                    updateOne: {
                        filter: { _id: test._id },
                        update: { $set: { questions: newRawList, updatedAt: new Date() } }
                    }
                });
            }
        }
    }

    console.log('\n=== SUMMARY OF MIGRATION ACTIONS ===');
    console.log(`Total NEET tests to update: ${modifiedTestsCount} of ${neetTests.length}`);
    console.log(`Total Numerical questions replaced: ${totalNumericalsReplaced}`);
    console.log(`Total Excess AR questions replaced with MCQ: ${totalExcessARReplaced}`);
    console.log(`Total Tests with questions reordered (AR at end): ${totalReorderedCount}`);
    console.log(`Bulk operations queued: ${bulkOps.length}`);

    if (!isDryRun && bulkOps.length > 0) {
        console.log('\nExecuting bulkWrite to MongoDB...');
        const batchSize = 100;
        for (let i = 0; i < bulkOps.length; i += batchSize) {
            const chunk = bulkOps.slice(i, i + batchSize);
            const res = await db.collection('testPapers').bulkWrite(chunk, { ordered: false });
            console.log(`Written batch ${i / batchSize + 1}: modified ${res.modifiedCount} docs`);
        }
        console.log('✅ Bulk update complete!');
    } else if (isDryRun) {
        console.log('DRY RUN MODE: No changes written to database.');
    }

    await client.close();
}

main().catch(console.error);
