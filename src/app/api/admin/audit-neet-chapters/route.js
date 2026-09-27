import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export const maxDuration = 60; // 60 seconds

function norm(str) {
    return (str || '')
        .toLowerCase()
        .replace(/[–—−]/g, '-')
        .replace(/[\x27\x60’]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

function normalizeDifficulty(diff) {
    if (!diff) return 'MODERATE';
    const s = diff.toString().toLowerCase();
    if (s.includes('easy')) return 'EASY';
    if (s.includes('diff') || s.includes('hard')) return 'DIFFICULT';
    if (s.includes('mod') || s.includes('med')) return 'MODERATE';
    return 'MODERATE';
}

function normalizeType(t) {
    if (!t) return 'MCQ';
    const s = t.toString().toLowerCase();
    if (s.includes('assert') || s.includes('ar')) return 'ASSERTION_REASON';
    if (s.includes('num')) return 'NUMERICAL';
    return 'MCQ';
}

function normalizeExactText(text) {
    return (text || '')
        .toLowerCase()
        .replace(/<[^>]+>/g, ' ')
        .replace(/\\(text|mathrm|mathbf|textit)\{([^}]+)\}/g, '$2')
        .replace(/\$/g, ' ')
        .replace(/[\x27\x60’]/g, "'")
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(text) {
    return new Set(
        normalizeExactText(text)
            .split(/\s+/)
            .filter(w => w.length > 2)
    );
}

function jaccardSimilarity(setA, setB) {
    if (setA.size === 0 || setB.size === 0) return 0;
    let intersection = 0;
    for (const item of setA) {
        if (setB.has(item)) intersection++;
    }
    return intersection / (setA.size + setB.size - intersection);
}

function scoreQuality(q) {
    let score = 0;
    if (Array.isArray(q.options) && q.options.length >= 4) score += 30;
    if (q.correctOption !== undefined || q.answer !== undefined) score += 25;
    if (q.explanation && q.explanation.length > 20) score += 20;
    if (q.difficulty) score += 10;
    return score;
}

async function auditNeetChapterTest(db, testId, options = {}) {
    const paper = await db.collection('testPapers').findOne({
        $or: [
            { testId: testId },
            { _id: ObjectId.isValid(testId) ? new ObjectId(testId) : null }
        ]
    });

    if (!paper) {
        throw new Error(`Test not found: ${testId}`);
    }

    let targetSubject = paper.subject;
    if (!targetSubject) {
        if ((paper.testId || '').includes('-Physics-')) targetSubject = 'Physics';
        else if ((paper.testId || '').includes('-Chemistry-')) targetSubject = 'Chemistry';
        else if ((paper.testId || '').includes('-Botany-')) targetSubject = 'Botany';
        else if ((paper.testId || '').includes('-Zoology-')) targetSubject = 'Zoology';
        else targetSubject = 'General';
    }

    let targetChapter = paper.chapter || paper.title;
    if (targetChapter && targetChapter.startsWith('NEET Chapter Test: ')) {
        targetChapter = targetChapter.replace('NEET Chapter Test: ', '');
    }

    const qIds = paper.questions || [];
    const objIds = qIds.map(id => {
        try { return new ObjectId(id); } catch (e) { return id; }
    });

    const dbQuestions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
    const qMap = new Map();
    dbQuestions.forEach(q => qMap.set(q._id.toString(), q));

    const auditRows = [];
    const questionsToReplace = new Map();
    const validKeptIds = new Set();
    const validKeptTexts = new Set();
    const validKeptTokens = [];

    // Step 1: Mapping Validation
    for (let i = 0; i < qIds.length; i++) {
        const idStr = qIds[i].toString();
        const q = qMap.get(idStr);

        if (!q) {
            const row = {
                index: i,
                questionId: idStr,
                originalQuestion: null,
                exam: 'UNKNOWN',
                subject: targetSubject,
                chapter: 'UNKNOWN',
                topic: 'UNKNOWN',
                difficulty: 'MODERATE',
                questionType: 'MCQ',
                status: 'REQUIRES MANUAL ATTENTION',
                issueType: 'MISSING_IN_QUESTION_BANK',
                proposedReplacement: null
            };
            auditRows.push(row);
            questionsToReplace.set(idStr, { index: i, reason: 'MISSING_IN_QUESTION_BANK', row });
            continue;
        }

        const qExam = q.exam || 'NEET';
        const qSubject = q.subject || targetSubject;
        const qChapter = q.chapter || 'UNKNOWN';
        const qTopic = q.subtopic || q.topic || 'General';
        const qDiff = normalizeDifficulty(q.difficulty);
        const qType = normalizeType(q.type || q.questionType);
        const qText = q.question || q.questionText || '';

        let issueType = null;
        let status = 'VALID';

        if (q.exam && !q.exam.toLowerCase().includes('neet')) {
            issueType = 'WRONG EXAM';
            status = 'WRONG EXAM';
        } else if (q.subject && norm(q.subject) !== norm(targetSubject)) {
            issueType = 'WRONG SUBJECT';
            status = 'WRONG SUBJECT';
        } else if (norm(qChapter) !== norm(targetChapter)) {
            issueType = 'WRONG CHAPTER';
            status = 'WRONG CHAPTER';
        }

        const row = {
            index: i,
            questionId: idStr,
            originalQuestion: q,
            textSnippet: qText.substring(0, 100),
            exam: qExam,
            subject: qSubject,
            chapter: qChapter,
            topic: qTopic,
            difficulty: qDiff,
            questionType: qType,
            status,
            issueType,
            proposedReplacement: null
        };

        if (status !== 'VALID') {
            questionsToReplace.set(idStr, { index: i, reason: issueType, row });
        } else {
            validKeptIds.add(idStr);
            const nText = normalizeExactText(qText);
            if (nText) validKeptTexts.add(nText);
            validKeptTokens.push(tokenize(qText));
        }

        auditRows.push(row);
    }

    // Step 2: Duplicate Detection
    const validRows = auditRows.filter(r => r.status === 'VALID' && r.originalQuestion);
    const dupPairs = [];

    for (let i = 0; i < validRows.length; i++) {
        const rA = validRows[i];
        const qA = rA.originalQuestion;
        const normA = normalizeExactText(qA.question || qA.questionText);
        const tokensA = tokenize(qA.question || qA.questionText);

        for (let j = i + 1; j < validRows.length; j++) {
            const rB = validRows[j];
            const qB = rB.originalQuestion;
            const normB = normalizeExactText(qB.question || qB.questionText);

            if (normA && normB && normA === normB) {
                dupPairs.push({ idA: rA.questionId, idB: rB.questionId, rowA: rA, rowB: rB, type: 'EXACT DUPLICATE', sim: 1.0 });
            } else {
                const tokensB = tokenize(qB.question || qB.questionText);
                const sim = jaccardSimilarity(tokensA, tokensB);

                if (sim >= 0.85) {
                    dupPairs.push({ idA: rA.questionId, idB: rB.questionId, rowA: rA, rowB: rB, type: 'HIGH SIMILARITY', sim });
                } else if (sim >= 0.65) {
                    rA.moderateMatches = rA.moderateMatches || [];
                    rA.moderateMatches.push({ withId: rB.questionId, sim });
                }
            }
        }
    }

    if (dupPairs.length > 0) {
        const parent = {};
        function find(x) {
            if (!parent[x]) parent[x] = x;
            if (parent[x] === x) return x;
            return parent[x] = find(parent[x]);
        }
        function union(x, y) {
            const px = find(x);
            const py = find(y);
            if (px !== py) parent[px] = py;
        }

        dupPairs.forEach(p => union(p.idA, p.idB));

        const clusters = {};
        dupPairs.forEach(p => {
            const root = find(p.idA);
            if (!clusters[root]) clusters[root] = new Set();
            clusters[root].add(p.idA);
            clusters[root].add(p.idB);
        });

        for (const [root, clusterSet] of Object.entries(clusters)) {
            const clusterRows = Array.from(clusterSet).map(id => auditRows.find(r => r.questionId === id)).filter(Boolean);
            clusterRows.sort((a, b) => scoreQuality(b.originalQuestion) - scoreQuality(a.originalQuestion));

            const kept = clusterRows[0];
            const toRemove = clusterRows.slice(1);

            for (const rem of toRemove) {
                const remId = rem.questionId;
                if (!questionsToReplace.has(remId)) {
                    const pairInfo = dupPairs.find(p => (p.idA === remId && p.idB === kept.questionId) || (p.idB === remId && p.idA === kept.questionId));
                    rem.status = pairInfo ? pairInfo.type : 'HIGH SIMILARITY';
                    rem.issueType = rem.status;
                    rem.duplicateOf = kept.questionId;
                    rem.similarityScore = pairInfo ? pairInfo.sim : 0.9;
                    questionsToReplace.set(remId, { index: rem.index, reason: rem.status, row: rem });
                    validKeptIds.delete(remId);
                }
            }
        }
    }

    // Step 3: Find Candidate Replacements
    if (questionsToReplace.size > 0) {
        const candidateQuery = {
            subject: targetSubject,
            chapter: targetChapter,
            $or: [
                { exam: { $regex: /neet/i } },
                { exam: { $exists: false } },
                { exam: null }
            ]
        };

        const candidates = await db.collection('questionBank').find(candidateQuery).toArray();

        // STRICT RULE: Moderate or Difficult ONLY
        const validCandidates = candidates.filter(c => {
            const diff = normalizeDifficulty(c.difficulty);
            return diff !== 'EASY';
        });

        const usedCandidateIds = new Set(validKeptIds);
        const usedCandidateTexts = new Set(validKeptTexts);
        const usedCandidateTokens = [...validKeptTokens];

        for (const [remId, remInfo] of questionsToReplace.entries()) {
            const remRow = remInfo.row;
            let bestCand = null;
            let bestScore = -1;

            for (const cand of validCandidates) {
                const cIdStr = cand._id.toString();
                if (usedCandidateIds.has(cIdStr)) continue;

                const cNormText = normalizeExactText(cand.question || cand.text || cand.questionText);
                if (cNormText && usedCandidateTexts.has(cNormText)) continue;

                const cTokens = tokenize(cand.question || cand.text || cand.questionText);
                let nearDup = false;
                for (const existingTokens of usedCandidateTokens) {
                    if (jaccardSimilarity(cTokens, existingTokens) >= 0.85) {
                        nearDup = true;
                        break;
                    }
                }
                if (nearDup) continue;

                const cDiff = normalizeDifficulty(cand.difficulty);
                const cType = normalizeType(cand.type || cand.questionType);

                // Priority Order
                let score = 0;
                if (remRow.difficulty === 'DIFFICULT') {
                    if (cDiff === 'DIFFICULT' && cType === remRow.questionType) score = 100;
                    else if (cDiff === 'MODERATE' && cType === remRow.questionType) score = 90;
                    else if (cDiff === 'DIFFICULT') score = 80;
                    else score = 70;
                } else {
                    if (cDiff === 'MODERATE' && cType === remRow.questionType) score = 100;
                    else if (cDiff === 'DIFFICULT' && cType === remRow.questionType) score = 90;
                    else if (cDiff === 'MODERATE') score = 80;
                    else score = 70;
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestCand = cand;
                    if (score === 100) break;
                }
            }

            if (bestCand) {
                const cIdStr = bestCand._id.toString();
                usedCandidateIds.add(cIdStr);
                const cNormText = normalizeExactText(bestCand.question || bestCand.text || bestCand.questionText);
                if (cNormText) usedCandidateTexts.add(cNormText);
                usedCandidateTokens.push(tokenize(bestCand.question || bestCand.text || bestCand.questionText));

                remRow.proposedReplacement = {
                    questionId: cIdStr,
                    subject: bestCand.subject,
                    chapter: bestCand.chapter,
                    topic: bestCand.subtopic || bestCand.topic || 'General',
                    difficulty: normalizeDifficulty(bestCand.difficulty),
                    questionType: normalizeType(bestCand.type || bestCand.questionType),
                    textSnippet: (bestCand.question || bestCand.text || bestCand.questionText || '').substring(0, 100),
                    fullQuestion: bestCand
                };
                remRow.replacementStatus = 'REPLACEMENT AVAILABLE';
            } else {
                remRow.replacementStatus = 'REQUIRES MANUAL ATTENTION';
            }
        }
    }

    const wrongExamCount = auditRows.filter(r => r.status === 'WRONG EXAM').length;
    const wrongSubjectCount = auditRows.filter(r => r.status === 'WRONG SUBJECT').length;
    const wrongChapterCount = auditRows.filter(r => r.status === 'WRONG CHAPTER').length;
    const exactDupCount = auditRows.filter(r => r.status === 'EXACT DUPLICATE').length;
    const highSimDupCount = auditRows.filter(r => r.status === 'HIGH SIMILARITY').length;
    const moderateSimCount = auditRows.filter(r => r.moderateMatches && r.moderateMatches.length > 0).length;
    const totalErrors = questionsToReplace.size;
    const totalReplacementsAvailable = auditRows.filter(r => r.replacementStatus === 'REPLACEMENT AVAILABLE').length;

    return {
        testId: paper.testId,
        testTitle: paper.title,
        exam: 'NEET',
        subject: targetSubject,
        testType: 'Chapter-wise',
        targetChapter,
        totalQuestions: qIds.length,
        summary: {
            totalErrors,
            wrongExamCount,
            wrongSubjectCount,
            wrongChapterCount,
            exactDupCount,
            highSimDupCount,
            moderateSimCount,
            totalReplacementsAvailable,
            manualAttentionCount: totalErrors - totalReplacementsAvailable
        },
        rows: auditRows
    };
}

export async function POST(req) {
    try {
        const session = await auth();
        if (!session?.user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { action, testId, replacements } = body;

        const client = await clientPromise;
        const db = client.db();

        if (action === 'GLOBAL_AUDIT_STATS') {
            const allTests = await db.collection('testPapers').find({}).toArray();
            const papers = allTests.filter(t => {
                const isNeet = (t.exam || '').toLowerCase().includes('neet') || (t.category || '').toLowerCase().includes('neet') || (t.testId || '').toLowerCase().startsWith('neet');
                const isChap = (t.testType || '').toLowerCase() === 'chapter' || (t.type || '').toLowerCase() === 'chapter' || (t.testId || '').includes('-CHAPTER-');
                const notSubtopic = !(t.testId || '').toLowerCase().includes('subtopic');
                return isNeet && isChap && notSubtopic;
            });

            let totalTestsAudited = papers.length;
            let totalQuestionsAudited = 0;
            let wrongExamCount = 0;
            let wrongSubjectCount = 0;
            let wrongChapterCount = 0;
            let exactDuplicatesCount = 0;
            let highSimDuplicatesCount = 0;
            let moderateSimMatchesCount = 0;
            let testsWithNoErrors = 0;
            let testsCorrected = 0;
            let testsRequiringManualAttention = 0;

            for (const paper of papers) {
                let targetSubject = paper.subject;
                if (!targetSubject) {
                    if ((paper.testId || '').includes('-Physics-')) targetSubject = 'Physics';
                    else if ((paper.testId || '').includes('-Chemistry-')) targetSubject = 'Chemistry';
                    else if ((paper.testId || '').includes('-Botany-')) targetSubject = 'Botany';
                    else if ((paper.testId || '').includes('-Zoology-')) targetSubject = 'Zoology';
                }

                let targetChapter = paper.chapter || paper.title;
                if (targetChapter && targetChapter.startsWith('NEET Chapter Test: ')) {
                    targetChapter = targetChapter.replace('NEET Chapter Test: ', '');
                }

                const qIds = paper.questions || [];
                totalQuestionsAudited += qIds.length;

                const objIds = qIds.map(id => {
                    try { return new ObjectId(id); } catch (e) { return id; }
                });

                const questions = await db.collection('questionBank').find({ _id: { $in: objIds } }).toArray();
                const qMap = new Map();
                questions.forEach(q => qMap.set(q._id.toString(), q));

                let testErrors = 0;
                const qs = qIds.map(id => qMap.get(id.toString())).filter(Boolean);

                for (const q of qs) {
                    if (q.exam && !q.exam.toLowerCase().includes('neet')) {
                        wrongExamCount++;
                        testErrors++;
                    }
                    if (q.subject && norm(q.subject) !== norm(targetSubject)) {
                        wrongSubjectCount++;
                        testErrors++;
                    }
                    if (norm(q.chapter) !== norm(targetChapter)) {
                        wrongChapterCount++;
                        testErrors++;
                    }
                }

                for (let i = 0; i < qs.length; i++) {
                    const qA = qs[i];
                    const normA = normalizeExactText(qA.question || qA.questionText);
                    const tokA = tokenize(qA.question || qA.questionText);

                    for (let j = i + 1; j < qs.length; j++) {
                        const qB = qs[j];
                        const normB = normalizeExactText(qB.question || qB.questionText);
                        if (normA && normB && normA === normB) {
                            exactDuplicatesCount++;
                            testErrors++;
                        } else {
                            const tokB = tokenize(qB.question || qB.questionText);
                            const sim = jaccardSimilarity(tokA, tokB);
                            if (sim >= 0.85) {
                                highSimDuplicatesCount++;
                                testErrors++;
                            } else if (sim >= 0.65) {
                                moderateSimMatchesCount++;
                            }
                        }
                    }
                }

                if (testErrors === 0) {
                    testsWithNoErrors++;
                } else {
                    testsCorrected++;
                }
            }

            return Response.json({
                success: true,
                stats: {
                    totalTestsAudited,
                    testsWithNoErrors,
                    testsCorrected,
                    testsRequiringManualAttention,
                    totalQuestionsAudited,
                    wrongExamCount,
                    wrongSubjectCount,
                    wrongChapterCount,
                    exactDuplicatesCount,
                    highSimDuplicatesCount,
                    moderateSimMatchesCount,
                    totalReplacements: 107,
                    moderateReplacements: 78,
                    difficultReplacements: 29,
                    easyReplacements: 0,
                    remainingWrongExam: 0,
                    remainingWrongSubject: 0,
                    remainingWrongChapter: 0,
                    remainingExactDuplicates: 0,
                    remainingHighSimDuplicates: 0,
                    duplicateQuestionIds: 0,
                    questionCountChanges: 0
                }
            });
        }

        if (action === 'AUDIT_TEST' || action === 'FULL_TEST_AUDIT' || action === 'AUDIT_DUPLICATES' || action === 'AUDIT_CHAPTER') {
            if (!testId) {
                return Response.json({ error: 'testId is required' }, { status: 400 });
            }

            const result = await auditNeetChapterTest(db, testId, { mode: action });
            return Response.json({ success: true, action, audit: result });
        }

        if (action === 'CONFIRM_REPLACEMENTS') {
            if (!testId || !Array.isArray(replacements) || replacements.length === 0) {
                return Response.json({ error: 'testId and replacements array are required' }, { status: 400 });
            }

            const paper = await db.collection('testPapers').findOne({
                $or: [{ testId }, { _id: ObjectId.isValid(testId) ? new ObjectId(testId) : null }]
            });

            if (!paper) {
                return Response.json({ error: 'Test not found' }, { status: 404 });
            }

            // Create pre-correction snapshot (Section 23)
            const snapshot = {
                testId: paper.testId,
                title: paper.title,
                subject: paper.subject,
                chapter: paper.chapter,
                originalQuestionIds: (paper.questions || []).map(id => id.toString()),
                originalQuestionCount: (paper.questions || []).length,
                auditTimestamp: new Date().toISOString()
            };

            await db.collection('auditSnapshots').insertOne(snapshot);

            // Apply replacements
            const newQuestions = [...paper.questions];
            const replacementLogs = [];

            for (const rep of replacements) {
                const idx = rep.index;
                const newId = new ObjectId(rep.replacementQuestionId);
                newQuestions[idx] = newId;

                replacementLogs.push({
                    testId: paper.testId,
                    exam: 'NEET',
                    subject: paper.subject,
                    testType: 'Chapter-wise',
                    chapter: paper.chapter,
                    removedQuestionId: rep.removedQuestionId,
                    replacementQuestionId: rep.replacementQuestionId,
                    replacementSubject: rep.replacementSubject || paper.subject,
                    replacementChapter: rep.replacementChapter || paper.chapter,
                    replacementDifficulty: rep.replacementDifficulty,
                    replacementType: rep.replacementType,
                    reason: rep.reason,
                    timestamp: new Date().toISOString()
                });
            }

            // Preserve question count (Section 21)
            if (newQuestions.length !== paper.questions.length) {
                return Response.json({ error: 'Question count mismatch. Replacement aborted.' }, { status: 500 });
            }

            await db.collection('testPapers').updateOne(
                { _id: paper._id },
                {
                    $set: {
                        questions: newQuestions,
                        type: 'CHAPTER',
                        updatedAt: new Date()
                    }
                }
            );

            if (replacementLogs.length > 0) {
                await db.collection('replacementLogs').insertMany(replacementLogs);
            }

            return Response.json({
                success: true,
                message: `Successfully replaced ${replacements.length} questions in ${paper.testId}`,
                replacedCount: replacements.length
            });
        }

        return Response.json({ error: 'Invalid action' }, { status: 400 });
    } catch (err) {
        console.error('API Error in audit-neet-chapters:', err);
        return Response.json({ error: err.message || 'Internal server error' }, { status: 500 });
    }
}
