import crypto from 'crypto';
import { MANDATORY_CHECK_KEYS, MANDATORY_CHECK_LABELS } from './testAuditConstants.js';
export { MANDATORY_CHECK_KEYS, MANDATORY_CHECK_LABELS };

/**
 * Computes SHA-256 hash of question content to detect future alterations.
 */
export function computeQuestionContentHash(q) {
    if (!q || typeof q !== 'object') return '';
    const text = String(q.question || q.text || '').trim();
    const options = Array.isArray(q.options)
        ? q.options.map(o => (typeof o === 'string' ? o : o.text || o.value || '')).join('|')
        : '';
    const answer = String(q.correctOption ?? q.correctAnswer ?? q.answer ?? '').trim();
    const explanation = String(q.explanation || q.solution || '').trim();
    const difficulty = String(q.difficulty || '').trim();

    const raw = `${text}###${options}###${answer}###${explanation}###${difficulty}`;
    return crypto.createHash('sha256').update(raw).digest('hex').slice(0, 16);
}

/**
 * Validates an externally generated Antigravity Audit Report before saving.
 * 
 * @param {Object} report - Raw imported JSON report
 * @param {import('mongodb').Db} db - MongoDB database instance
 * @returns {Promise<{ valid: boolean, errors: Array<string>, warnings: Array<string>, normalizedReport: Object }>}
 */
export async function validateImportedAuditReport(report, db) {
    const errors = [];
    const warnings = [];

    if (!report || typeof report !== 'object') {
        return { valid: false, errors: ['Invalid report payload: must be a JSON object.'], warnings, normalizedReport: null };
    }

    // 1. Validate testId
    const testId = String(report.testId || '').trim();
    if (!testId) {
        errors.push('Missing required field: "testId".');
    }

    let testPaper = null;
    if (testId && db) {
        testPaper = await db.collection('testPapers').findOne({ testId });
        if (!testPaper) {
            errors.push(`Test ID "${testId}" does not match any existing test in the database.`);
        }
    }

    // 2. Validate Questions array
    if (!Array.isArray(report.questions) || report.questions.length === 0) {
        errors.push('Report must contain a non-empty "questions" array.');
    }

    const testQuestionIdsSet = new Set(
        (testPaper?.questions || []).map(q => (typeof q === 'string' ? q : q?.toString?.())).filter(Boolean)
    );

    const normalizedQuestions = [];
    let aiPassCount = 0;
    let aiFailCount = 0;
    let aiWarningCount = 0;
    let manualReviewCount = 0;

    if (Array.isArray(report.questions)) {
        for (let i = 0; i < report.questions.length; i++) {
            const rawQ = report.questions[i];
            const qNum = rawQ.qNum || i + 1;
            const qIdStr = rawQ.questionId ? String(rawQ.questionId).trim() : null;

            if (!qIdStr) {
                warnings.push(`Question #${qNum}: Missing "questionId".`);
            } else if (testQuestionIdsSet.size > 0 && !testQuestionIdsSet.has(qIdStr)) {
                warnings.push(`Question #${qNum} (ID: ${qIdStr}) is not mapped to test "${testId}".`);
            }

            // Validate the 9 mandatory checks
            const checks = rawQ.checks || {};
            const normalizedChecks = {};

            MANDATORY_CHECK_KEYS.forEach(key => {
                const checkData = checks[key];
                if (!checkData) {
                    normalizedChecks[key] = {
                        status: 'Not Recorded',
                        finding: 'Not recorded in this imported report.'
                    };
                    warnings.push(`Question #${qNum}: Check "${key}" is missing (marked as Not Recorded).`);
                } else if (typeof checkData === 'string') {
                    normalizedChecks[key] = {
                        status: ['Pass', 'Fail', 'Warning', 'Manual Review'].includes(checkData) ? checkData : 'Manual Review',
                        finding: checkData
                    };
                } else {
                    normalizedChecks[key] = {
                        status: checkData.status || 'Not Recorded',
                        finding: checkData.finding || checkData.explanation || '',
                        storedAnswer: checkData.storedAnswer,
                        derivedAnswer: checkData.derivedAnswer,
                        assignedDifficulty: checkData.assignedDifficulty
                    };
                }
            });

            // Validate Option Checks (A, B, C, D)
            const rawOptions = rawQ.optionChecks || {};
            const normalizedOptionChecks = {};
            ['A', 'B', 'C', 'D'].forEach(optLetter => {
                const optData = rawOptions[optLetter];
                if (!optData) {
                    normalizedOptionChecks[optLetter] = {
                        available: true,
                        valid: 'Not Recorded',
                        finding: 'Not recorded in this report.'
                    };
                } else {
                    normalizedOptionChecks[optLetter] = {
                        available: optData.available !== false,
                        valid: optData.valid || 'Not Recorded',
                        finding: optData.finding || ''
                    };
                }
            });

            // Overall AI result for this question
            const aiResult = rawQ.aiResult || rawQ.status || (
                Object.values(normalizedChecks).some(c => c.status === 'Fail') ? 'Fail'
                : Object.values(normalizedChecks).some(c => c.status === 'Manual Review') ? 'Manual Review'
                : Object.values(normalizedChecks).some(c => c.status === 'Warning') ? 'Warning'
                : 'Pass'
            );

            if (aiResult === 'Pass') aiPassCount++;
            else if (aiResult === 'Fail') aiFailCount++;
            else if (aiResult === 'Warning') aiWarningCount++;
            else manualReviewCount++;

            normalizedQuestions.push({
                qNum,
                questionId: qIdStr || `q-${qNum}`,
                questionText: rawQ.questionText || rawQ.question || '',
                options: rawQ.options || [],
                storedAnswer: rawQ.storedAnswer ?? rawQ.correctAnswer ?? rawQ.correctOption ?? '',
                derivedAnswer: rawQ.derivedAnswer || normalizedChecks.answerCorrect?.derivedAnswer || '',
                storedExplanation: rawQ.storedExplanation || rawQ.explanation || '',
                difficulty: rawQ.difficulty || 'Medium',
                aiResult,
                checks: normalizedChecks,
                optionChecks: normalizedOptionChecks,
                detailedFindings: rawQ.detailedFindings || rawQ.findings || '',
                suggestedCorrections: rawQ.suggestedCorrections || rawQ.corrections || '',
                contentHash: rawQ.contentHash || computeQuestionContentHash(rawQ)
            });
        }
    }

    // Determine overall audit status
    let auditStatus = 'Completed';
    if (aiFailCount > 0) {
        auditStatus = 'Issues Found';
    } else if (normalizedQuestions.length < (testPaper?.questions?.length || 0)) {
        auditStatus = 'Partial';
    }

    const summary = {
        totalQuestionsExpected: testPaper?.questions?.length || normalizedQuestions.length,
        totalQuestionsProcessed: normalizedQuestions.length,
        aiPasses: aiPassCount,
        aiFailures: aiFailCount,
        aiWarnings: aiWarningCount,
        manualReviewRequired: manualReviewCount + aiFailCount,
        overallFindings: report.summary?.overallFindings || report.overallFindings || (
            aiFailCount > 0
                ? `Audit identified ${aiFailCount} failed checks and ${aiWarningCount} warnings across ${normalizedQuestions.length} questions.`
                : `Audit passed successfully across all ${normalizedQuestions.length} questions.`
        )
    };

    const normalizedReport = {
        testId,
        testTitle: testPaper?.title || report.testTitle || testId,
        exam: testPaper?.exam || report.exam || 'NEET',
        subject: testPaper?.subject || report.subject || 'All',
        auditDate: report.auditDate || new Date().toISOString(),
        auditStatus: report.auditStatus || auditStatus,
        summary,
        questions: normalizedQuestions
    };

    return {
        valid: errors.length === 0,
        errors,
        warnings,
        normalizedReport
    };
}
