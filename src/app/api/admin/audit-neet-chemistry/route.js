import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export const maxDuration = 60; // 60 seconds

function norm(str) {
    return (str || '')
        .toLowerCase()
        .replace(/[–—−]/g, '-')
        .replace(/[\x27\x60’]/g, "'")
        .replace(/\b(in|of|and|the|elements|to)\b/g, ' ')
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

const CHAPTER_SYNONYMS = {
    [norm('Some Basic Concepts of Chemistry')]: 'Some Basic Concepts in Chemistry',
    [norm('Some Basic Concepts in Chemistry')]: 'Some Basic Concepts in Chemistry',
    [norm('Structure of Atom')]: 'Atomic Structure',
    [norm('Atomic Structure')]: 'Atomic Structure',
    [norm('Chemical Bonding and Molecular Structure')]: 'Chemical Bonding and Molecular Structure',
    [norm('Chemical Bonding')]: 'Chemical Bonding and Molecular Structure',
    [norm('Thermodynamics')]: 'Chemical Thermodynamics',
    [norm('Chemical Thermodynamics')]: 'Chemical Thermodynamics',
    [norm('Solutions')]: 'Solutions',
    [norm('Equilibrium')]: 'Equilibrium',
    [norm('Redox Reactions')]: 'Redox Reactions and Electrochemistry',
    [norm('Electrochemistry')]: 'Redox Reactions and Electrochemistry',
    [norm('Redox Reactions and Electrochemistry')]: 'Redox Reactions and Electrochemistry',
    [norm('Chemical Kinetics')]: 'Chemical Kinetics',
    [norm('Classification of Elements and Periodicity')]: 'Classification of Elements and Periodicity in Properties',
    [norm('Classification of Elements and Periodicity in Properties')]: 'Classification of Elements and Periodicity in Properties',
    [norm('The p-Block Elements')]: 'P-Block Elements',
    [norm('P-Block Elements')]: 'P-Block Elements',
    [norm('p-Block Elements')]: 'P-Block Elements',
    [norm('d- and f-Block Elements')]: 'd and f- Block Elements',
    [norm('d and f- Block Elements')]: 'd and f- Block Elements',
    [norm('Coordination Compounds')]: 'Co-ordination Compounds',
    [norm('Co-ordination Compounds')]: 'Co-ordination Compounds',
    [norm('Purification and Characterisation of Organic Compounds')]: 'Purification and Characterisation of Organic Compounds',
    [norm('Organic Chemistry – Some Basic Principles and Techniques')]: 'Some Basic Principles of Organic Chemistry',
    [norm('Some Basic Principles of Organic Chemistry')]: 'Some Basic Principles of Organic Chemistry',
    [norm('Organic Reaction Mechanism')]: 'Organic Reaction Mechanism',
    [norm('Hydrocarbons')]: 'Hydrocarbons',
    [norm('Haloalkanes and Haloarenes')]: 'Organic Compounds Containing Halogens',
    [norm('Organic Compounds Containing Halogens')]: 'Organic Compounds Containing Halogens',
    [norm('Alcohols, Phenols and Ethers')]: 'Organic Compounds Containing Oxygen',
    [norm('Aldehydes, Ketones and Carboxylic Acids')]: 'Organic Compounds Containing Oxygen',
    [norm('Organic Compounds Containing Oxygen')]: 'Organic Compounds Containing Oxygen',
    [norm('Amines')]: 'Organic Compounds Containing Nitrogen',
    [norm('Organic Compounds Containing Nitrogen')]: 'Organic Compounds Containing Nitrogen',
    [norm('Biomolecules')]: 'Biomolecules',
    [norm('Principles Related to Practical Chemistry')]: 'Principles Related to Practical Chemistry',
    [norm('Organic Name Reactions')]: 'Organic Name Reactions'
};

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

function normalizeText(text) {
    return (text || '')
        .toLowerCase()
        .replace(/\$/g, ' ')
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(text) {
    return new Set(
        (text || '')
            .toLowerCase()
            .replace(/\$/g, ' ')
            .replace(/[^a-z0-9]/g, ' ')
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

export async function POST(request) {
    try {
        const session = await auth();
        if (!session || session.user?.role !== 'admin') {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
        }

        const body = await request.json();
        const { action = 'AUDIT_TEST', testId, chapter, topic, replacements = [] } = body;

        const client = await clientPromise;
        const db = client.db('testseries');

        // 1. GLOBAL AUDIT STATS
        if (action === 'GLOBAL_AUDIT_STATS') {
            const allChem = await db.collection('questionBank').countDocuments({
                subject: { $regex: /^chemistry$/i }
            });
            const topicTests = await db.collection('testPapers').find({
                exam: 'NEET',
                subject: 'Chemistry',
                $or: [{ type: 'SUBTOPIC' }, { testId: /-SUBTOPIC-/ }]
            }).toArray();

            return Response.json({
                success: true,
                totalTests: topicTests.length,
                totalQuestionsInBank: allChem,
                exam: 'NEET',
                subject: 'Chemistry',
                testType: 'Topic-wise'
            });
        }

        // 2. AUDIT A TEST (Selected Test, Duplicate Audit, Chapter Audit, Topic Audit, Full Test Audit)
        if (['AUDIT_TEST', 'AUDIT_DUPLICATES', 'AUDIT_CHAPTER', 'AUDIT_TOPIC', 'FULL_TEST_AUDIT', 'PREVIEW_REPLACEMENTS'].includes(action)) {
            let filter = {
                exam: 'NEET',
                subject: 'Chemistry',
                $or: [{ type: 'SUBTOPIC' }, { testId: /-SUBTOPIC-/ }]
            };

            if (action === 'AUDIT_CHAPTER' && chapter) {
                filter.chapter = chapter;
            } else if (action === 'AUDIT_TOPIC' && topic) {
                filter.$or = [{ subtopic: topic }, { title: topic }];
            } else if (testId && action !== 'FULL_TEST_AUDIT') {
                filter = { testId };
            }

            const tests = await db.collection('testPapers').find(filter).toArray();
            if (tests.length === 0) {
                return Response.json({ error: 'No matching NEET Chemistry Topic-wise tests found.' }, { status: 404 });
            }

            // Load candidate pool for Chemistry
            const allChemQuestions = await db.collection('questionBank').find({
                subject: { $regex: /^chemistry$/i }
            }).toArray();
            const qMap = new Map(allChemQuestions.map(q => [q._id.toString(), q]));

            const testResults = [];
            let totalAudited = 0;
            let totalValid = 0;
            let totalWrongExam = 0;
            let totalWrongSubject = 0;
            let totalWrongChapter = 0;
            let totalWrongTopic = 0;
            let totalExactDups = 0;
            let totalHighSimDups = 0;
            let totalModSimReviews = 0;
            const proposedReplacements = [];

            for (const t of tests) {
                const targetChapter = t.chapter || '';
                const targetTopic = t.subtopic || t.title || '';
                const targetChapNorm = norm(targetChapter);
                const targetTopNorm = norm(targetTopic);

                const qIds = t.questions || [];
                totalAudited += qIds.length;

                const seenIds = new Set();
                const seenTexts = new Set();
                const seenTokens = [];

                let tWrongChap = 0;
                let tWrongTop = 0;
                let tDups = 0;
                let tValid = 0;

                const issuesInTest = [];

                for (let i = 0; i < qIds.length; i++) {
                    const qIdStr = qIds[i].toString();
                    const q = qMap.get(qIdStr);

                    if (!q) {
                        tWrongChap++;
                        totalWrongChapter++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'MISSING_IN_DB',
                            description: 'Question ID not found in Question Bank',
                            diff: 'MODERATE',
                            type: 'MCQ'
                        });
                        continue;
                    }

                    // Exam check
                    if (q.exam && !q.exam.toLowerCase().includes('neet') && !q.exam.toLowerCase().includes('all')) {
                        totalWrongExam++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'WRONG_EXAM',
                            currentExam: q.exam,
                            requiredExam: 'NEET',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Subject check
                    if (!norm(q.subject).includes('chemistry')) {
                        totalWrongSubject++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'WRONG_SUBJECT',
                            currentSubject: q.subject,
                            requiredSubject: 'Chemistry',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Chapter check
                    const qChapNorm = norm(q.chapter);
                    const isChapMatch = qChapNorm === targetChapNorm || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === targetChapNorm;
                    if (!isChapMatch) {
                        tWrongChap++;
                        totalWrongChapter++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'WRONG_CHAPTER',
                            currentChapter: q.chapter,
                            requiredChapter: targetChapter,
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Topic check (Topic MUST match; Subtopic NOT required to match!)
                    const qTopNorm = norm(q.subTopic || q.subtopic || q.topic || '');
                    const isTopicMatch = qTopNorm === targetTopNorm || qTopNorm.includes(targetTopNorm) || targetTopNorm.includes(qTopNorm);
                    if (!isTopicMatch) {
                        tWrongTop++;
                        totalWrongTopic++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'WRONG_TOPIC',
                            currentTopic: q.subTopic || q.subtopic || q.topic,
                            requiredTopic: targetTopic,
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Duplicate ID check
                    if (seenIds.has(qIdStr)) {
                        tDups++;
                        totalExactDups++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'EXACT_DUPLICATE_ID',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Duplicate Text check
                    const nText = normalizeText(q.question || q.text);
                    if (nText && seenTexts.has(nText) && nText.length > 20) {
                        tDups++;
                        totalExactDups++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'EXACT_DUPLICATE_TEXT',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // High Similarity Duplicate check (>= 0.85)
                    const tokens = tokenize(q.question || q.text);
                    let isHighSim = false;
                    for (const exTokens of seenTokens) {
                        const sim = jaccardSimilarity(tokens, exTokens);
                        if (sim >= 0.85) {
                            isHighSim = true;
                            break;
                        } else if (sim >= 0.65) {
                            totalModSimReviews++;
                        }
                    }

                    if (isHighSim) {
                        tDups++;
                        totalHighSimDups++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'HIGH_SIMILARITY_DUPLICATE',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Kept valid
                    tValid++;
                    totalValid++;
                    seenIds.add(qIdStr);
                    if (nText) seenTexts.add(nText);
                    seenTokens.push(tokens);
                }

                // Find candidate replacements for issues
                const candidatePool = allChemQuestions.filter(cand => {
                    if (cand.exam && !cand.exam.toLowerCase().includes('neet') && !cand.exam.toLowerCase().includes('all')) return false;

                    const cChap = norm(cand.chapter);
                    const isCChapMatch = cChap === targetChapNorm || norm(CHAPTER_SYNONYMS[cChap] || cChap) === targetChapNorm;
                    if (!isCChapMatch) return false;

                    const cTop = norm(cand.subTopic || cand.subtopic || cand.topic || '');
                    const isCTopMatch = cTop === targetTopNorm || cTop.includes(targetTopNorm) || targetTopNorm.includes(cTop);
                    if (!isCTopMatch) return false;

                    const diff = normalizeDifficulty(cand.difficulty);
                    if (diff === 'EASY') return false; // STRICT: NEVER EASY

                    return true;
                });

                for (const item of issuesInTest) {
                    let bestCand = null;
                    let bestScore = -1;

                    for (const cand of candidatePool) {
                        const cId = cand._id.toString();
                        if (seenIds.has(cId)) continue;

                        const cText = normalizeText(cand.question || cand.text);
                        if (cText && seenTexts.has(cText) && cText.length > 20) continue;

                        const cTokens = tokenize(cand.question || cand.text);
                        let isDup = false;
                        for (const exTokens of seenTokens) {
                            if (jaccardSimilarity(cTokens, exTokens) >= 0.85) {
                                isDup = true;
                                break;
                            }
                        }
                        if (isDup) continue;

                        const cDiff = normalizeDifficulty(cand.difficulty);
                        const cType = normalizeType(cand.type);

                        let score = 0;
                        if (item.diff === 'DIFFICULT') {
                            if (cDiff === 'DIFFICULT' && cType === item.type) score = 100;
                            else if (cDiff === 'MODERATE' && cType === item.type) score = 90;
                            else if (cDiff === 'DIFFICULT') score = 80;
                            else score = 70;
                        } else {
                            if (cDiff === 'MODERATE' && cType === item.type) score = 100;
                            else if (cDiff === 'DIFFICULT' && cType === item.type) score = 90;
                            else if (cDiff === 'MODERATE') score = 80;
                            else score = 70;
                        }

                        if (score > bestScore) {
                            bestScore = score;
                            bestCand = cand;
                        }
                    }

                    if (bestCand) {
                        const candIdStr = bestCand._id.toString();
                        seenIds.add(candIdStr);
                        const bText = normalizeText(bestCand.question || bestCand.text);
                        if (bText) seenTexts.add(bText);
                        seenTokens.push(tokenize(bestCand.question || bestCand.text));

                        proposedReplacements.push({
                            testId: t.testId,
                            testTitle: t.title || t.name,
                            chapter: targetChapter,
                            topic: targetTopic,
                            removedQuestionId: item.questionId,
                            removedIndex: item.index,
                            issue: item.issue,
                            removedDifficulty: item.diff,
                            removedType: item.type,
                            replacementQuestionId: candIdStr,
                            replacementChapter: bestCand.chapter,
                            replacementTopic: bestCand.subTopic || bestCand.subtopic || targetTopic,
                            replacementDifficulty: normalizeDifficulty(bestCand.difficulty),
                            replacementType: normalizeType(bestCand.type),
                            replacementTextPreview: (bestCand.question || bestCand.text || '').substring(0, 100)
                        });
                    }
                }

                testResults.push({
                    testId: t.testId,
                    title: t.title || t.name,
                    chapter: targetChapter,
                    topic: targetTopic,
                    questions: qIds.length,
                    validQuestions: tValid,
                    wrongChapter: tWrongChap,
                    wrongTopic: tWrongTop,
                    duplicates: tDups,
                    issuesCount: issuesInTest.length,
                    status: issuesInTest.length === 0 ? 'PASS' : 'ISSUES_FOUND'
                });
            }

            return Response.json({
                success: true,
                action,
                summary: {
                    totalTests: tests.length,
                    totalQuestionsAudited: totalAudited,
                    validQuestions: totalValid,
                    wrongExamQuestions: totalWrongExam,
                    wrongSubjectQuestions: totalWrongSubject,
                    wrongChapterQuestions: totalWrongChapter,
                    wrongTopicQuestions: totalWrongTopic,
                    exactDuplicates: totalExactDups,
                    highSimilarityDuplicates: totalHighSimDups,
                    moderateSimilarityReviews: totalModSimReviews,
                    proposedReplacementsCount: proposedReplacements.length
                },
                testResults,
                proposedReplacements
            });
        }

        // 3. APPLY REPLACEMENTS (Confirm & Replace)
        if (action === 'APPLY_REPLACEMENTS') {
            if (!Array.isArray(replacements) || replacements.length === 0) {
                return Response.json({ error: 'No confirmed replacements provided.' }, { status: 400 });
            }

            // Group replacements by testId
            const repByTest = new Map();
            for (const r of replacements) {
                if (!repByTest.has(r.testId)) repByTest.set(r.testId, []);
                repByTest.get(r.testId).push(r);
            }

            const allLogs = [];
            let appliedCount = 0;

            for (const [tId, reps] of repByTest.entries()) {
                const test = await db.collection('testPapers').findOne({ testId: tId });
                if (!test) continue;

                const newQuestions = [...test.questions];
                for (const r of reps) {
                    if (r.removedIndex >= 0 && r.removedIndex < newQuestions.length) {
                        try {
                            newQuestions[r.removedIndex] = new ObjectId(r.replacementQuestionId);
                        } catch (e) {
                            newQuestions[r.removedIndex] = r.replacementQuestionId;
                        }
                        appliedCount++;

                        allLogs.push({
                            testId: tId,
                            exam: 'NEET',
                            subject: 'Chemistry',
                            testType: 'Topic-wise',
                            chapter: test.chapter,
                            topic: test.subtopic || test.title,
                            removedQuestionId: r.removedQuestionId,
                            replacementQuestionId: r.replacementQuestionId,
                            removedDifficulty: r.removedDifficulty,
                            replacementDifficulty: r.replacementDifficulty,
                            questionType: r.replacementType || 'MCQ',
                            reason: r.issue || 'AUDIT_CORRECTION',
                            timestamp: new Date().toISOString()
                        });
                    }
                }

                // Preserve exact question count check
                if (newQuestions.length === test.questions.length) {
                    await db.collection('testPapers').updateOne(
                        { _id: test._id },
                        {
                            $set: {
                                questions: newQuestions,
                                updatedAt: new Date()
                            }
                        }
                    );
                }
            }

            if (allLogs.length > 0) {
                await db.collection('replacementLogs').insertMany(allLogs);
            }

            return Response.json({
                success: true,
                message: `Successfully replaced ${appliedCount} confirmed questions across ${repByTest.size} tests.`,
                appliedCount,
                testsUpdated: repByTest.size
            });
        }

        return Response.json({ error: `Unknown action: ${action}` }, { status: 400 });
    } catch (err) {
        console.error('Chemistry audit route error:', err);
        return Response.json({ error: err.message || 'Internal server error' }, { status: 500 });
    }
}
