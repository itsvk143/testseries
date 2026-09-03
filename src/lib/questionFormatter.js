/**
 * Utility to normalize and auto-format questions from messy JSON inputs.
 */

export const autoFormatText = (text) => {
    if (!text) return '';
    let formatted = text.trim();

    // Auto-wrap common LaTeX patterns if not already wrapped
    // 1. Chemical formulas: H2O, CO2, H2SO4, KMnO4
    // This regex looks for common chemical patterns that are NOT inside $ or $$
    const chemRegex = /\b([A-Z][a-z]?\d+|\d+[A-Z][a-z]?|[A-Z][a-z]?\d+[A-Z][a-z]?)\b/g;
    // Simple version for H2O etc.
    formatted = formatted.replace(/\b(H2O|CO2|H2SO4|O2|N2|Cl2|NaCl|HCl|NaOH)\b(?![^$]*\$)/g, '$$$1$$');

    // 2. Simple math: x^2, t^2, sqrt(x)
    formatted = formatted.replace(/(\w+\^\d+)(?![^$]*\$)/g, '$$$1$$');
    
    // 3. Greek letters: alpha, beta, gamma, theta, pi
    const greekLetters = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega'];
    greekLetters.forEach(letter => {
        const regex = new RegExp(`\\\\?(${letter})\\b(?![^$]*\\$)`, 'gi');
        formatted = formatted.replace(regex, '$$\\$1$$');
    });

    return formatted;
};

export const normalizeQuestion = (q) => {
    // Map synonyms
    const text = q.text || q.question || q.desc || q.title || '';
    const subject = q.subject || q.category || 'Physics';
    const explanation = q.explanation || q.solution || q.desc_exp || '';
    
    // Normalize question type
    const rawType = (q.type || q.questionType || 'MCQ').toString().toUpperCase();
    const isNumerical = rawType === 'NUMERICAL' || rawType === 'NUMERIC';
    const isSubjective = rawType === 'SUBJECTIVE';
    const isAssertion = rawType.includes('ASSERTION') || rawType === 'AR';
    const type = isNumerical ? 'NUMERICAL' : isSubjective ? 'SUBJECTIVE' : isAssertion ? 'ASSERTION_REASON' : 'MCQ';

    // Normalize Correct Option
    let correctOption = q.correctOption ?? q.correctAnswer ?? q.answer ?? q.correct_answer ?? '';
    if (isNumerical) {
        correctOption = String(correctOption).trim();
    } else {
        if (typeof correctOption === 'string') {
            correctOption = correctOption.toLowerCase().trim();
            if (correctOption === 'option a' || correctOption === '1') correctOption = 'a';
            if (correctOption === 'option b' || correctOption === '2') correctOption = 'b';
            if (correctOption === 'option c' || correctOption === '3') correctOption = 'c';
            if (correctOption === 'option d' || correctOption === '4') correctOption = 'd';
            correctOption = correctOption[0] || 'a';
        } else if (typeof correctOption === 'number') {
            const mapping = { 0: 'a', 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
            correctOption = mapping[correctOption] || 'a';
        } else {
            correctOption = 'a';
        }
    }

    // Normalize Options
    let options = [];
    if (!isNumerical && !isSubjective) {
        if (Array.isArray(q.options)) {
            if (typeof q.options[0] === 'string') {
                options = q.options.map((opt, i) => ({
                    id: String.fromCharCode(97 + i),
                    text: autoFormatText(opt),
                    image: ''
                }));
            } else {
                options = q.options.map((opt, i) => ({
                    id: (opt.id || opt.key || String.fromCharCode(97 + i)).toLowerCase(),
                    text: autoFormatText(opt.text || opt.value || ''),
                    image: opt.image || opt.img || ''
                }));
            }
        } else if (typeof q.options === 'object' && q.options !== null) {
            options = Object.entries(q.options).map(([key, val]) => ({
                id: key.toLowerCase(),
                text: autoFormatText(typeof val === 'string' ? val : (val.text || '')),
                image: typeof val === 'object' && val !== null ? (val.image || val.img || '') : ''
            }));
        }

        // Ensure we have at least 4 options for MCQ
        while (options.length < 4) {
            options.push({ id: String.fromCharCode(97 + options.length), text: 'N/A', image: '' });
        }
    }

    const chapter = q.chapter || '';
    const subtopic = q.subtopic || q.subTopic || '';

    return {
        id: q.id || undefined,
        _id: q._id || undefined,
        type,
        text: autoFormatText(text),
        image: q.image || q.img || '',
        subject,
        chapter,
        subtopic,
        subTopic: subtopic,
        topic: q.topic || chapter,
        difficulty: q.difficulty || 'Medium',
        marks: q.marks ?? 4,
        negativeMarks: q.negativeMarks ?? 1,
        class: q.class || q.classGrade || 'Class 12',
        options: isNumerical || isSubjective ? [] : options.slice(0, 4),
        correctOption,
        explanation: autoFormatText(explanation)
    };
};

export const formatQuestionToLegacy = (q, index = 1) => {
    if (!q) return null;

    const rawType = (q.questionType || q.type || 'MCQ').toString().toUpperCase();
    const isNumerical = rawType === 'NUMERICAL' || rawType === 'NUMERIC';
    const isAssertion = rawType.includes('ASSERTION') || rawType === 'AR';
    const isSubjective = rawType.includes('SUBJECTIVE');
    const legacyType = isNumerical ? 'NUMERICAL' : isAssertion ? 'ASSERTION_REASON' : isSubjective ? 'SUBJECTIVE' : 'MCQ';

    let legacyOptions = [];
    if (!isNumerical && Array.isArray(q.options)) {
        legacyOptions = q.options.map((opt, i) => {
            if (typeof opt === 'object' && opt !== null) {
                return {
                    id: opt.id || String.fromCharCode(97 + i),
                    text: opt.text || '',
                    image: opt.image || opt.img || ''
                };
            }
            return {
                id: String.fromCharCode(97 + i),
                text: opt,
                image: ''
            };
        });
    }

    let correctOption = 'a';
    if (isNumerical) {
        correctOption = String(q.correctAnswer ?? q.correctOption ?? '').trim();
    } else if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < 4) {
        correctOption = String.fromCharCode(97 + q.correctAnswer);
    } else if (typeof q.correctOption === 'string') {
        correctOption = q.correctOption;
    }

    return {
        _id: q._id?.toString(),
        id: q.id || index,
        type: legacyType,
        text: q.question || q.text || '',
        image: q.image || '',
        options: legacyOptions,
        correctOption,
        explanation: q.explanation || '',
        subject: q.subject || 'Physics',
        chapter: q.chapter || '',
        topic: q.topic || q.chapter || '',
        subTopic: q.subTopic || q.subtopic || '',
        difficulty: q.difficulty || 'Medium',
        marks: q.marks ?? 4,
        negativeMarks: q.negativeMarks ?? 1,
        class: q.class || 'Class 12',
        audited: q.audited || false,
        auditedAt: q.auditedAt || null
    };
};

export const formatQuestionToCentralized = (q) => {
    if (!q) return null;

    const rawType = (q.type || q.questionType || 'MCQ').toString().toUpperCase();
    const isNumerical = rawType === 'NUMERICAL' || rawType === 'NUMERIC';
    const isAssertion = rawType.includes('ASSERTION') || rawType === 'AR';
    const isSubjective = rawType.includes('SUBJECTIVE');

    let qType = 'MCQ';
    if (isNumerical) {
        qType = 'NUMERICAL';
    } else if (isAssertion) {
        qType = 'Assertion Reasoning';
    } else if (isSubjective) {
        qType = 'SUBJECTIVE';
    }

    let centralOptions = [];
    if (!isNumerical && Array.isArray(q.options)) {
        centralOptions = q.options.map(opt => {
            if (typeof opt === 'object' && opt !== null) {
                // Keep image if present
                if (opt.image || opt.img) {
                    return { text: opt.text || '', image: opt.image || opt.img };
                }
                return opt.text || '';
            }
            return typeof opt === 'string' ? opt : '';
        });
    }

    let correctAnswer = 0;
    if (isNumerical) {
        correctAnswer = String(q.correctAnswer ?? q.correctOption ?? q.numericalAnswer ?? '').trim();
    } else if (typeof q.correctAnswer === 'number') {
        correctAnswer = q.correctAnswer;
    } else if (typeof q.correctOption === 'string') {
        const mapping = { a: 0, b: 1, c: 2, d: 3 };
        correctAnswer = mapping[q.correctOption.toLowerCase()] ?? 0;
    }

    let classGrade = q.class || (q.classGrade ? (q.classGrade.startsWith('Class') ? q.classGrade : `Class ${q.classGrade}`) : 'Class 12');

    return {
        subject: q.subject || 'Physics',
        class: classGrade,
        chapter: q.chapter || '',
        topic: q.topic || q.chapter || '',
        subTopic: q.subTopic || q.subtopic || '',
        questionType: qType,
        difficulty: q.difficulty || 'Medium',
        question: q.text || q.question || '',
        image: q.image || '',
        options: centralOptions,
        correctAnswer,
        explanation: q.explanation || '',
        tags: q.tags || [q.subject, q.chapter].filter(Boolean),
        source: q.source || 'Question Bank',
        status: q.status || 'Active',
        createdAt: q.createdAt ? new Date(q.createdAt) : new Date(),
        updatedAt: new Date()
    };
};
