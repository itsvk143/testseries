import { normalizeToCanonicalExam } from '@/lib/authorization';

export const EXAM_SUBJECTS = {
    NEET: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    JEE_MAIN: ['Physics', 'Chemistry', 'Mathematics'],
    BITSAT: ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology']
};

export const SUBJECT_ICONS = {
    Physics: '⚡',
    Chemistry: '🧪',
    Mathematics: '📐',
    Botany: '🌿',
    Zoology: '🦁',
    Biology: '🧬'
};

/**
 * Validates if the student has paid access to take polls.
 */
export function isPaidStudent(user) {
    if (!user) return false;
    if (user.role === 'admin' || user.isAdmin) return true;
    return user.paymentStatus === 'CONFIRMED';
}

/**
 * Returns the list of authorized subjects for a student's canonical exam.
 */
export function getAuthorizedSubjects(userExam) {
    const canonical = normalizeToCanonicalExam(userExam);
    return EXAM_SUBJECTS[canonical] || [];
}

/**
 * Builds MongoDB match query for exam + subject in questionBank.
 */
export function buildQuestionQuery(userExam, subject) {
    const canonical = normalizeToCanonicalExam(userExam);
    const subRegex = new RegExp(`^${subject}$`, 'i');

    if (canonical === 'NEET') {
        return {
            subject: subRegex,
            $or: [
                { exam: /neet/i },
                { targetExams: { $in: [/^neet$/i] } }
            ]
        };
    }

    if (canonical === 'JEE_MAIN') {
        return {
            subject: subRegex,
            $or: [
                { exam: /jee/i },
                { targetExams: { $in: [/^jee/i] } }
            ]
        };
    }

    if (canonical === 'BITSAT') {
        // BITSAT students have access to Physics, Chemistry, Mathematics, Botany, Zoology.
        // In questionBank, Physics, Chemistry, Mathematics have explicit BITSAT entries.
        // Biology is available under Biology in BITSAT or Botany/Zoology.
        if (/^botany$/i.test(subject)) {
            return {
                $or: [
                    { subject: /^botany$/i },
                    { subject: /^biology$/i, chapter: { $in: ['Plant Physiology', 'Reproduction in Plants', 'Diversity in Living World', 'Cell Structure and Function', 'Ecology and Environment', 'Genetics and Evolution', 'Biology and Human Welfare'] } }
                ]
            };
        }
        if (/^zoology$/i.test(subject)) {
            return {
                $or: [
                    { subject: /^zoology$/i },
                    { subject: /^biology$/i, chapter: { $in: ['Human Physiology', 'Reproduction', 'Diversity in Living World', 'Cell Structure and Function', 'Ecology and Environment', 'Genetics and Evolution', 'Biology and Human Welfare'] } }
                ]
            };
        }

        return {
            subject: subRegex,
            $or: [
                { exam: /bitsat/i },
                { targetExams: { $in: [/^bitsat$/i] } }
            ]
        };
    }

    return { subject: subRegex };
}
