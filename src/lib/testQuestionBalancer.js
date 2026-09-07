import { ObjectId } from 'mongodb';

export const isAR = (q) => {
    if (!q) return false;
    const t = (q.questionType || q.type || '').toString().toUpperCase();
    return t.includes('ASSERTION') || t.includes('AR') || (q.assertion && q.assertion.trim().length > 0);
};

export const toValidObjectId = (id) => {
    if (!id) return null;
    const s = (typeof id === 'object' && id._id) ? id._id.toString() : id.toString();
    return ObjectId.isValid(s) ? new ObjectId(s) : null;
};

/**
 * Interleaves non-AR and AR questions evenly so no two AR questions are consecutive.
 */
export function interleaveQuestions(nonAR, ar) {
    if (!ar || ar.length === 0) return [...(nonAR || [])];
    if (!nonAR || nonAR.length === 0) return [...ar];

    const total = nonAR.length + ar.length;
    const numAR = ar.length;
    const interval = Math.max(2, Math.floor(total / (numAR + 1)));

    const arPositions = new Set();
    let nextPos = interval - 1;
    for (let i = 0; i < numAR; i++) {
        while (nextPos < total && arPositions.has(nextPos)) {
            nextPos++;
        }
        if (nextPos < total) {
            arPositions.add(nextPos);
        }
        nextPos += interval;
    }

    const result = [];
    let nonArIdx = 0;
    let arIdx = 0;

    for (let i = 0; i < total; i++) {
        if (arPositions.has(i) && arIdx < ar.length) {
            if (result.length > 0 && isAR(result[result.length - 1])) {
                if (nonArIdx < nonAR.length) {
                    result.push(nonAR[nonArIdx++]);
                }
            }
            result.push(ar[arIdx++]);
        } else if (nonArIdx < nonAR.length) {
            result.push(nonAR[nonArIdx++]);
        } else if (arIdx < ar.length) {
            if (result.length > 0 && isAR(result[result.length - 1])) {
                if (nonArIdx < nonAR.length) {
                    result.push(nonAR[nonArIdx++]);
                }
            }
            result.push(ar[arIdx++]);
        }
    }

    while (nonArIdx < nonAR.length) result.push(nonAR[nonArIdx++]);
    while (arIdx < ar.length) {
        if (result.length > 0 && isAR(result[result.length - 1])) {
            result.splice(result.length - 1, 0, ar[arIdx++]);
        } else {
            result.push(ar[arIdx++]);
        }
    }

    return result;
}

/**
 * Enforces:
 * 1. For JEE: Maximum 5 AR questions, placed consecutively at the end.
 * 2. For NEET: Maximum 6 AR questions, interleaved non-consecutively.
 * 3. Excess AR questions replaced with matching topic/subject MCQs.
 *
 * @param {Array} questions - Array of question objects from questionBank
 * @param {Object} db - MongoDB database instance (optional, for fetching replacement MCQs)
 * @param {String} testId - Test identifier
 * @param {String} exam - Exam name ('NEET', 'JEE Main', etc.)
 * @returns {Promise<{ balancedQuestions: Array, wasModified: boolean }>}
 */
export async function balanceTestQuestions(questions, db = null, testId = null, exam = null) {
    if (!questions || questions.length === 0) {
        return { balancedQuestions: [], wasModified: false };
    }

    const tid = (testId || '').toLowerCase();
    const ex = (exam || '').toLowerCase();
    const isJEE = tid.startsWith('jee') || ex.includes('jee');

    const maxTotalAR = isJEE ? 5 : 6;
    const totalAR = questions.filter(isAR).length;

    let arAtEnd = true;
    if (totalAR > 0) {
        const lastSlice = questions.slice(questions.length - totalAR);
        const allLastAreAR = lastSlice.every(isAR);
        const anyBeforeAreAR = questions.slice(0, questions.length - totalAR).some(isAR);
        arAtEnd = allLastAreAR && !anyBeforeAreAR;
    }

    // If test series already strictly conforms (AR <= max quota and all AR at the end), return immediately
    if (totalAR <= maxTotalAR && arAtEnd) {
        return { balancedQuestions: questions, wasModified: false };
    }

    // Group questions by subject
    const subjects = [];
    const bySubj = new Map();
    for (const q of questions) {
        const s = q.subject || 'Other';
        if (!bySubj.has(s)) {
            subjects.push(s);
            bySubj.set(s, []);
        }
        bySubj.get(s).push(q);
    }

    const arToKeepTotal = Math.min(totalAR, maxTotalAR);

    // Calculate quotas per subject
    const subjQuotas = new Map();
    let remainingQuota = arToKeepTotal;
    const numSubjs = subjects.length;
    const baseQuota = Math.floor(arToKeepTotal / numSubjs);

    for (const s of subjects) {
        const sAR = bySubj.get(s).filter(isAR).length;
        const q = Math.min(sAR, baseQuota);
        subjQuotas.set(s, q);
        remainingQuota -= q;
    }
    for (const s of subjects) {
        if (remainingQuota <= 0) break;
        const sAR = bySubj.get(s).filter(isAR).length;
        const cur = subjQuotas.get(s) || 0;
        if (sAR > cur) {
            subjQuotas.set(s, cur + 1);
            remainingQuota--;
        }
    }

    const usedIds = new Set(
        questions
            .map(q => (q._id ? q._id.toString() : q.id ? q.id.toString() : ''))
            .filter(Boolean)
    );

    const balancedFinal = [];

    for (const s of subjects) {
        const sQs = bySubj.get(s);
        const sAR = sQs.filter(isAR);
        const sNonAR = sQs.filter(q => !isAR(q));

        const quota = subjQuotas.get(s) || 0;
        const keptAR = sAR.slice(0, quota);
        const excessAR = sAR.slice(quota);
        const excessCount = excessAR.length;

        let replacements = [];
        if (excessCount > 0 && db) {
            // Find topic identifiers from the excess AR questions
            const topics = [...new Set(excessAR.map(q => q.subTopic || q.chapter || q.topic).filter(Boolean))];
            const filterIds = [...usedIds].map(toValidObjectId).filter(Boolean);

            const topicFilter = topics.length > 0 ? {
                $or: [
                    { subTopic: { $in: topics } },
                    { chapter: { $in: topics } },
                    { topic: { $in: topics } }
                ]
            } : {};

            try {
                const candidates = await db.collection('questionBank').find({
                    _id: { $nin: filterIds },
                    subject: s,
                    ...topicFilter,
                    $nor: [
                        { questionType: { $regex: /assertion|ar/i } },
                        { type: { $regex: /assertion|ar/i } }
                    ]
                }).limit(excessCount).toArray();

                candidates.forEach(c => {
                    replacements.push(c);
                    usedIds.add(c._id.toString());
                });

                // If not enough candidate MCQs in exact topics, fallback to subject-level MCQs
                if (replacements.length < excessCount) {
                    const needed = excessCount - replacements.length;
                    const fallbackFilterIds = [...usedIds].map(toValidObjectId).filter(Boolean);
                    const fallbackCandidates = await db.collection('questionBank').find({
                        _id: { $nin: fallbackFilterIds },
                        subject: s,
                        $nor: [
                            { questionType: { $regex: /assertion|ar/i } },
                            { type: { $regex: /assertion|ar/i } }
                        ]
                    }).limit(needed).toArray();

                    fallbackCandidates.forEach(c => {
                        replacements.push(c);
                        usedIds.add(c._id.toString());
                    });
                }
            } catch (err) {
                console.error('Error fetching MCQ replacement candidates:', err);
            }
        }

        const mergedNonAR = [...sNonAR, ...replacements];
        // Put all Assertion-Reasoning questions in consecutive series AT THE END
        const balancedSubj = [...mergedNonAR, ...keptAR];
        balancedFinal.push(...balancedSubj);
    }

    // If replacements were unavailable, ensure total count doesn't shrink unnecessarily
    if (balancedFinal.length < questions.length) {
        const finalIds = new Set(balancedFinal.map(q => (q._id ? q._id.toString() : q.id ? q.id.toString() : '')).filter(Boolean));
        for (const orig of questions) {
            const oId = orig._id ? orig._id.toString() : orig.id ? orig.id.toString() : '';
            if (oId && !finalIds.has(oId)) {
                balancedFinal.push(orig);
                finalIds.add(oId);
                if (balancedFinal.length >= questions.length) break;
            }
        }
    }

    return { balancedQuestions: balancedFinal, wasModified: true };
}
