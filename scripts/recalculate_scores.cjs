/**
 * Script to audit and safely recalculate legacy testResults in MongoDB.
 * Preserves audit metadata (previousScore, correctedAt).
 */
const { MongoClient, ObjectId } = require('mongodb');

function normalizeCorrectOption(ans, options = []) {
    if (ans === undefined || ans === null) return 'a';
    if (typeof ans === 'number') {
        if (ans >= 0 && ans <= 3 && Number.isInteger(ans)) {
            return String.fromCharCode(97 + ans);
        }
        if (ans === 4) return 'd';
        return 'a';
    }
    if (typeof ans === 'string') {
        const trimmed = ans.trim();
        const lower = trimmed.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(lower)) return lower;
        const optLetterMatch = lower.match(/^(?:option\s*)?\(?([a-d])\)?\.?$/i);
        if (optLetterMatch) return optLetterMatch[1].toLowerCase();
        if (Array.isArray(options) && options.length > 0) {
            const optIdx = options.findIndex((opt) => {
                const optText = (typeof opt === 'string' ? opt : (opt?.text || opt?.value || '')).trim().toLowerCase();
                if (optText === lower) return true;
                const cleanOpt = optText.replace(/\$/g, '').replace(/\\text\{([^}]+)\}/g, '$1').replace(/\s+/g, '');
                const cleanAns = lower.replace(/\$/g, '').replace(/\\text\{([^}]+)\}/g, '$1').replace(/\s+/g, '');
                return cleanOpt.length > 0 && cleanOpt === cleanAns;
            });
            if (optIdx >= 0 && optIdx < 4) {
                return String.fromCharCode(97 + optIdx);
            }
        }
        if (lower === '0') return 'a';
        if (lower === '1') return 'b';
        if (lower === '2') return 'c';
        if (lower === '3') return 'd';
        if (lower === '4') return 'd';
        if (lower.length > 0 && ['a', 'b', 'c', 'd'].includes(lower[0])) {
            return lower[0];
        }
    }
    return 'a';
}

function getAnswerForQuestion(answers, q, index) {
    if (!answers || typeof answers !== 'object') return undefined;

    // 1. Explicit question ID on question object (numeric or string)
    if (q.id !== undefined && q.id !== null) {
        if (answers[q.id] !== undefined) return answers[q.id];
        if (answers[String(q.id)] !== undefined) return answers[String(q.id)];
        if (q._id !== undefined && q._id !== null) {
            const idStr = q._id.toString();
            if (answers[idStr] !== undefined) return answers[idStr];
        }
        return undefined;
    }

    // 2. MongoDB ObjectId (string or ObjectId)
    if (q._id !== undefined && q._id !== null) {
        const idStr = q._id.toString();
        if (answers[idStr] !== undefined) return answers[idStr];
    }

    // 3. 1-based index (fallback only if q.id was not already present)
    if (typeof index === 'number') {
        const qNum = index + 1;
        if (answers[qNum] !== undefined) return answers[qNum];
        if (answers[String(qNum)] !== undefined) return answers[String(qNum)];
    }

    // 4. 0-based index fallback
    if (typeof index === 'number' && answers[index] !== undefined && answers[index + 1] === undefined) {
        return answers[index];
    }

    return undefined;
}

async function run() {
    const isApply = process.argv.includes('--apply');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('testseries');

    console.log(`[Diagnostic] Starting scan of testResults collection... Mode: ${isApply ? 'APPLY FIXES' : 'DRY RUN'}`);

    const allResults = await db.collection('testResults').find({}).toArray();
    console.log(`[Diagnostic] Total results found: ${allResults.length}`);

    let fixedCount = 0;
    let genuineZeroCount = 0;
    let unchangedCount = 0;

    for (const r of allResults) {
        const testId = r.testId || '';
        const isBitsat = testId.toLowerCase().includes('bitsat') || (r.examType || '').toLowerCase().includes('bitsat');
        const defaultPos = isBitsat ? 3 : 4;
        const defaultNeg = 1;

        let evalQuestions = [];
        if (Array.isArray(r.questions) && r.questions.length > 0) {
            evalQuestions = r.questions;
        } else {
            // Attempt to fetch from testPaper and questionBank
            try {
                const tp = await db.collection('testPapers').findOne({ testId });
                if (tp?.questions?.length > 0) {
                    const objectIds = tp.questions.map(q => {
                        try { return new ObjectId(q.toString()); } catch { return null; }
                    }).filter(Boolean);
                    const qDocs = await db.collection('questionBank').find({ _id: { $in: objectIds } }).toArray();
                    const qMap = new Map();
                    qDocs.forEach(d => qMap.set(d._id.toString(), d));
                    evalQuestions = tp.questions.map((rawId, idx) => {
                        const idStr = rawId.toString();
                        const doc = qMap.get(idStr) || {};
                        return { ...doc, id: idx + 1, _id: idStr };
                    });
                }
            } catch (e) {
                console.warn(`Could not load testPaper for ${testId}:`, e.message);
            }
        }

        const totalQuestions = evalQuestions.length || r.totalQuestions || 0;
        let evaluatedCount = 0;
        let attemptedCount = 0;
        let correctCount = 0;
        let wrongCount = 0;
        let marksObtained = 0;
        let maximumMarks = 0;
        const subjectWise = {};

        const answers = r.answers || {};

        if (evalQuestions.length > 0) {
            for (let i = 0; i < evalQuestions.length; i++) {
                const q = evalQuestions[i];
                evaluatedCount++;

                const posMarks = q.marks ?? defaultPos;
                const negMarks = q.negativeMarks ?? defaultNeg;
                maximumMarks += posMarks;

                const subj = (q.subject || 'General').trim();
                if (!subjectWise[subj]) {
                    subjectWise[subj] = { subject: subj, total: 0, attempted: 0, correct: 0, wrong: 0, unattempted: 0, score: 0, maxMarks: 0 };
                }
                subjectWise[subj].total++;
                subjectWise[subj].maxMarks += posMarks;

                const clientAns = getAnswerForQuestion(answers, q, i);
                const hasAnswer = clientAns !== undefined && clientAns !== null && String(clientAns).trim() !== '';

                if (hasAnswer) {
                    attemptedCount++;
                    subjectWise[subj].attempted++;

                    const isNumerical = (q.type || q.questionType || '').toString().toUpperCase().includes('NUMERICAL');
                    const rawAns = q.correctOption ?? q.correctAnswer ?? q.answer;

                    let isMatch = false;
                    if (isNumerical) {
                        const normExpected = String(rawAns ?? '').trim().toLowerCase();
                        const normActual = String(clientAns).trim().toLowerCase();
                        isMatch = normExpected.length > 0 && normExpected === normActual;
                        if (!isMatch && !isNaN(Number(normExpected)) && !isNaN(Number(normActual))) {
                            isMatch = Math.abs(Number(normExpected) - Number(normActual)) < 0.0001;
                        }
                    } else {
                        const normalizedExpected = normalizeCorrectOption(rawAns, q.options);
                        const normalizedActual = String(clientAns).trim().toLowerCase();
                        isMatch = normalizedActual === normalizedExpected.toLowerCase();
                    }

                    if (isMatch) {
                        correctCount++;
                        marksObtained += posMarks;
                        subjectWise[subj].correct++;
                        subjectWise[subj].score += posMarks;
                    } else {
                        wrongCount++;
                        marksObtained -= negMarks;
                        subjectWise[subj].wrong++;
                        subjectWise[subj].score -= negMarks;
                    }
                } else {
                    subjectWise[subj].unattempted++;
                }
            }
        }

        if (maximumMarks === 0 && r.totalMarks) {
            maximumMarks = Number(r.totalMarks);
        }

        const unattemptedCount = Math.max(0, totalQuestions - attemptedCount);
        const percentage = maximumMarks > 0 ? Number(((marksObtained / maximumMarks) * 100).toFixed(2)) : 0;
        const accuracy = attemptedCount > 0 ? Number(((correctCount / attemptedCount) * 100).toFixed(2)) : 0;

        const needsCorrection = r.score !== marksObtained ||
            r.correctAnswers !== correctCount ||
            r.wrongAnswers !== wrongCount ||
            r.unattemptedQuestions !== unattemptedCount;

        if (needsCorrection) {
            console.log(`[Discrepancy Found] Doc ${r._id} (${r.userEmail} - ${r.testId}):`);
            console.log(`   Stored: score=${r.score}, correct=${r.correctAnswers}, answered=${Object.keys(answers).length}`);
            console.log(`   Re-evaluated: score=${marksObtained}, correct=${correctCount}, wrong=${wrongCount}, unattempted=${unattemptedCount}`);

            if (isApply) {
                const updateFields = {
                    score: marksObtained,
                    marksObtained,
                    totalMarks: maximumMarks || r.totalMarks,
                    maximumMarks: maximumMarks || r.totalMarks,
                    correctAnswers: correctCount,
                    wrongAnswers: wrongCount,
                    unattemptedQuestions: unattemptedCount,
                    totalQuestions: totalQuestions || r.totalQuestions,
                    percentage,
                    accuracy,
                    subjectStats: Object.keys(subjectWise).length > 0 ? subjectWise : (r.subjectStats || {}),
                    evaluationStatus: totalQuestions > 0 ? 'EVALUATED' : 'PENDING',
                    auditCorrection: {
                        previousScore: r.score,
                        previousCorrectAnswers: r.correctAnswers,
                        correctedAt: new Date()
                    }
                };

                await db.collection('testResults').updateOne(
                    { _id: r._id },
                    { $set: updateFields }
                );
            }
            fixedCount++;
        } else {
            if (marksObtained === 0 && attemptedCount === 0) {
                genuineZeroCount++;
            } else {
                unchangedCount++;
            }
        }
    }

    console.log(`\n=== Remediation Summary ===`);
    console.log(`Records needing correction: ${fixedCount}`);
    console.log(`Genuine zero attempts (0 answers submitted): ${genuineZeroCount}`);
    console.log(`Already accurate records: ${unchangedCount}`);
    console.log(`Mode executed: ${isApply ? 'APPLIED CHANGES TO DATABASE' : 'DRY RUN ONLY (no changes made)'}`);

    await client.close();
}

run().catch(console.error);
