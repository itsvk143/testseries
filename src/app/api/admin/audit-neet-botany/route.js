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

const CHAPTER_SYNONYMS = {
    [norm("Cell: The Unit of Life")]: "Cell Structure and Function",
    [norm("Cell Structure and Function")]: "Cell Structure and Function",
    [norm("Cell Cycle and Cell Division")]: "Cell Structure and Function",
    [norm("Biological Classification")]: "Diversity in Living World",
    [norm("Plant Kingdom")]: "Diversity in Living World",
    [norm("Diversity in Living World")]: "Diversity in Living World",
    [norm("Photosynthesis in Higher Plants")]: "Plant Physiology",
    [norm("Respiration in Plants")]: "Plant Physiology",
    [norm("Plant Growth and Development")]: "Plant Physiology",
    [norm("Plant Physiology")]: "Plant Physiology",
    [norm("Principles of Inheritance and Variation")]: "Genetics and Evolution",
    [norm("Molecular Basis of Inheritance")]: "Genetics and Evolution",
    [norm("Genetics and Evolution")]: "Genetics and Evolution",
    [norm("Organisms and Populations")]: "Ecology and Environment",
    [norm("Ecosystem")]: "Ecology and Environment",
    [norm("Biodiversity and Conservation")]: "Ecology and Environment",
    [norm("Ecology and Environment")]: "Ecology and Environment",
    [norm("Sexual Reproduction in Flowering Plants")]: "Reproduction in Plants",
    [norm("Reproduction in Plants")]: "Reproduction in Plants",
    [norm("Morphology of Flowering Plants")]: "Morphology of Flowering Plants"
};

const TOPIC_SYNONYMS = {
    [norm("Biological Classification")]: [
        norm("Biological Classification"),
        norm("Five kingdom classification system"),
        norm("Viruses, viroids, prions, and lichens")
    ],
    [norm("Five kingdom classification system")]: [
        norm("Five kingdom classification system"),
        norm("Biological Classification"),
        norm("Viruses, viroids, prions, and lichens")
    ],
    [norm("Viruses, viroids, prions, and lichens")]: [
        norm("Viruses, viroids, prions, and lichens"),
        norm("Five kingdom classification system"),
        norm("Biological Classification")
    ],
    [norm("Plant Kingdom")]: [
        norm("Plant Kingdom"),
        norm("Algae"),
        norm("Bryophytes"),
        norm("Pteridophytes"),
        norm("Gymnosperms"),
        norm("Angiosperms")
    ],
    [norm("Algae")]: [norm("Algae"), norm("Plant Kingdom")],
    [norm("Bryophytes")]: [norm("Bryophytes"), norm("Plant Kingdom")],
    [norm("Pteridophytes")]: [norm("Pteridophytes"), norm("Plant Kingdom")],
    [norm("Gymnosperms")]: [norm("Gymnosperms"), norm("Plant Kingdom")],
    [norm("Angiosperms")]: [norm("Angiosperms"), norm("Plant Kingdom")],
    [norm("Cell Life & Division")]: [
        norm("Cell life & division"),
        norm("Cell Life & Division"),
        norm("Mitosis"),
        norm("Meiosis"),
        norm("Cell cycle regulation and checkpoints")
    ],
    [norm("Cell life & division")]: [
        norm("Cell life & division"),
        norm("Cell Life & Division"),
        norm("Mitosis"),
        norm("Meiosis"),
        norm("Cell cycle regulation and checkpoints")
    ],
    [norm("Mitosis")]: [
        norm("Mitosis"),
        norm("Cell life & division"),
        norm("Cell cycle regulation and checkpoints")
    ],
    [norm("Meiosis")]: [
        norm("Meiosis"),
        norm("Cell life & division"),
        norm("Cell cycle regulation and checkpoints")
    ],
    [norm("Cell cycle regulation and checkpoints")]: [
        norm("Cell cycle regulation and checkpoints"),
        norm("Cell life & division"),
        norm("Mitosis"),
        norm("Meiosis")
    ],
    [norm("Cell organelles")]: [
        norm("Cell organelles"),
        norm("Prokaryotic and eukaryotic cell ultrastructure"),
        norm("Cell membrane and fluid mosaic model")
    ],
    [norm("Prokaryotic and eukaryotic cell ultrastructure")]: [
        norm("Prokaryotic and eukaryotic cell ultrastructure"),
        norm("Cell organelles"),
        norm("Cell membrane and fluid mosaic model")
    ],
    [norm("Cell membrane and fluid mosaic model")]: [
        norm("Cell membrane and fluid mosaic model"),
        norm("Cell organelles"),
        norm("Prokaryotic and eukaryotic cell ultrastructure")
    ],
    [norm("Biomolecules")]: [
        norm("Biomolecules")
    ],
    [norm("Photosynthesis")]: [
        norm("Photosynthesis"),
        norm("Light reaction and Calvin cycle (C3 and C4 pathways)")
    ],
    [norm("Light reaction and Calvin cycle (C3 and C4 pathways)")]: [
        norm("Light reaction and Calvin cycle (C3 and C4 pathways)"),
        norm("Photosynthesis")
    ],
    [norm("Respiration")]: [
        norm("Respiration"),
        norm("Glycolysis, Krebs cycle, and oxidative phosphorylation")
    ],
    [norm("Glycolysis, Krebs cycle, and oxidative phosphorylation")]: [
        norm("Glycolysis, Krebs cycle, and oxidative phosphorylation"),
        norm("Respiration")
    ],
    [norm("Growth & Development")]: [
        norm("Growth & Development"),
        norm("Growth & Development"),
        norm("Plant hormones"),
        norm("Photoperiodism, vernalization, and seed dormancy")
    ],
    [norm("Growth & Development")]: [
        norm("Growth & Development"),
        norm("Plant hormones"),
        norm("Photoperiodism, vernalization, and seed dormancy")
    ],
    [norm("Plant hormones")]: [
        norm("Plant hormones"),
        norm("Growth & Development")
    ],
    [norm("Photoperiodism, vernalization, and seed dormancy")]: [
        norm("Photoperiodism, vernalization, and seed dormancy"),
        norm("Growth & Development")
    ],
    [norm("Principles of Inheritance")]: [
        norm("Principles of Inheritance"),
        norm("Mendelian genetics, monohybrid, and dihybrid crosses"),
        norm("Linkage, crossing over, and chromosome mapping")
    ],
    [norm("Mendelian genetics, monohybrid, and dihybrid crosses")]: [
        norm("Mendelian genetics, monohybrid, and dihybrid crosses"),
        norm("Principles of Inheritance")
    ],
    [norm("Linkage, crossing over, and chromosome mapping")]: [
        norm("Linkage, crossing over, and chromosome mapping"),
        norm("Principles of Inheritance")
    ],
    [norm("Molecular Basis of Inheritance")]: [
        norm("Molecular Basis of Inheritance"),
        norm("DNA replication"),
        norm("Gene expression"),
        norm("Transcription, genetic code, and translation"),
        norm("Mutations")
    ],
    [norm("DNA replication")]: [
        norm("DNA replication"),
        norm("Molecular Basis of Inheritance")
    ],
    [norm("Gene expression")]: [
        norm("Gene expression"),
        norm("Molecular Basis of Inheritance")
    ],
    [norm("Transcription, genetic code, and translation")]: [
        norm("Transcription, genetic code, and translation"),
        norm("Molecular Basis of Inheritance")
    ],
    [norm("Mutations")]: [
        norm("Mutations"),
        norm("Molecular Basis of Inheritance")
    ],
    [norm("Organisms and Populations")]: [
        norm("Organisms and Populations"),
        norm("Population interactions (mutualism, competition, predation, parasitism)")
    ],
    [norm("Population interactions (mutualism, competition, predation, parasitism)")]: [
        norm("Population interactions (mutualism, competition, predation, parasitism)"),
        norm("Organisms and Populations")
    ],
    [norm("Ecosystem Structure")]: [
        norm("Ecosystem Structure"),
        norm("Ecological pyramids"),
        norm("Ecological succession and nutrient cycling (carbon and phosphorus)")
    ],
    [norm("Ecological pyramids")]: [
        norm("Ecological pyramids"),
        norm("Ecosystem Structure")
    ],
    [norm("Ecological succession and nutrient cycling (carbon and phosphorus)")]: [
        norm("Ecological succession and nutrient cycling (carbon and phosphorus)"),
        norm("Ecosystem Structure")
    ],
    [norm("Biodiversity & Conservation")]: [
        norm("Biodiversity & Conservation"),
        norm("Biodiversity & Conservation"),
        norm("In-situ and ex-situ conservation methods")
    ],
    [norm("Biodiversity & Conservation")]: [
        norm("Biodiversity & Conservation"),
        norm("In-situ and ex-situ conservation methods")
    ],
    [norm("In-situ and ex-situ conservation methods")]: [
        norm("In-situ and ex-situ conservation methods"),
        norm("Biodiversity & Conservation")
    ],
    [norm("Sexual Reproduction in Flowering Plants")]: [
        norm("Structure of flower and gametophyte development"),
        norm("Pollination mechanisms and outbreeding devices"),
        norm("Double fertilization and triple fusion"),
        norm("Development of endosperm, embryo, and seed"),
        norm("Apomixis and polyembryony"),
        norm("Sexual Reproduction in Flowering Plants")
    ],
    [norm("Structure of flower and gametophyte development")]: [
        norm("Structure of flower and gametophyte development"),
        norm("Sexual Reproduction in Flowering Plants")
    ],
    [norm("Pollination mechanisms and outbreeding devices")]: [
        norm("Pollination mechanisms and outbreeding devices"),
        norm("Sexual Reproduction in Flowering Plants")
    ],
    [norm("Double fertilization and triple fusion")]: [
        norm("Double fertilization and triple fusion"),
        norm("Sexual Reproduction in Flowering Plants")
    ],
    [norm("Development of endosperm, embryo, and seed")]: [
        norm("Development of endosperm, embryo, and seed"),
        norm("Sexual Reproduction in Flowering Plants")
    ],
    [norm("Apomixis and polyembryony")]: [
        norm("Apomixis and polyembryony"),
        norm("Sexual Reproduction in Flowering Plants")
    ]
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
            const allBotany = await db.collection('questionBank').countDocuments({
                subject: { $regex: /^botany$/i }
            });
            const topicTests = await db.collection('testPapers').find({
                exam: 'NEET',
                subject: 'Botany',
                $or: [{ type: 'SUBTOPIC' }, { testId: /-SUBTOPIC-/ }]
            }).toArray();

            return Response.json({
                success: true,
                totalTests: topicTests.length,
                totalQuestionsInBank: allBotany,
                exam: 'NEET',
                subject: 'Botany',
                testType: 'Topic-wise'
            });
        }

        // 2. AUDIT A TEST (Selected Test, Duplicate Audit, Chapter Audit, Topic Audit, Full Test Audit)
        if (['AUDIT_TEST', 'AUDIT_DUPLICATES', 'AUDIT_CHAPTER', 'AUDIT_TOPIC', 'FULL_TEST_AUDIT', 'PREVIEW_REPLACEMENTS'].includes(action)) {
            let filter = {
                exam: 'NEET',
                subject: 'Botany',
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
                return Response.json({ error: 'No matching NEET Botany Topic-wise tests found.' }, { status: 404 });
            }

            // Load candidate pool for Botany
            const allBotanyQuestions = await db.collection('questionBank').find({
                subject: { $regex: /^botany$/i }
            }).toArray();
            const qMap = new Map(allBotanyQuestions.map(q => [q._id.toString(), q]));

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
                const rawTargetTopic = norm(targetTopic);
                const validTopicSynonyms = TOPIC_SYNONYMS[rawTargetTopic] || [rawTargetTopic];

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
                    if (!norm(q.subject).includes('botany')) {
                        totalWrongSubject++;
                        issuesInTest.push({
                            index: i,
                            questionId: qIdStr,
                            issue: 'WRONG_SUBJECT',
                            currentSubject: q.subject,
                            requiredSubject: 'Botany',
                            diff: normalizeDifficulty(q.difficulty),
                            type: normalizeType(q.type)
                        });
                        continue;
                    }

                    // Chapter check
                    const qChapNorm = norm(q.chapter);
                    const isChapMatch = qChapNorm === norm(targetChapter) || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === norm(targetChapter);
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
                    const isTopicMatch = validTopicSynonyms.includes(qTopNorm) || validTopicSynonyms.some(vt => qTopNorm.includes(vt) || vt.includes(qTopNorm));
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
                const candidatePool = allBotanyQuestions.filter(cand => {
                    const cChap = norm(cand.chapter);
                    const isCChapMatch = cChap === norm(targetChapter) || norm(CHAPTER_SYNONYMS[cChap] || cChap) === norm(targetChapter);
                    if (!isCChapMatch) return false;

                    const cTop = norm(cand.subTopic || cand.subtopic || cand.topic || '');
                    const isCTopMatch = validTopicSynonyms.includes(cTop) || validTopicSynonyms.some(vt => cTop.includes(vt) || vt.includes(cTop));
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
                            subject: 'Botany',
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
        console.error('Botany audit route error:', err);
        return Response.json({ error: err.message || 'Internal server error' }, { status: 500 });
    }
}
