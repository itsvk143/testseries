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
    
    // Normalize Correct Option (handle 'a', 'A', '1', 0)
    let correctOption = q.correctOption || q.answer || q.correct_answer || 'a';
    if (typeof correctOption === 'string') {
        correctOption = correctOption.toLowerCase();
        if (correctOption === 'option a' || correctOption === '1') correctOption = 'a';
        if (correctOption === 'option b' || correctOption === '2') correctOption = 'b';
        if (correctOption === 'option c' || correctOption === '3') correctOption = 'c';
        if (correctOption === 'option d' || correctOption === '4') correctOption = 'd';
    } else if (typeof correctOption === 'number') {
        const mapping = { 0: 'a', 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
        correctOption = mapping[correctOption] || 'a';
    }

    // Normalize Options
    let options = [];
    if (Array.isArray(q.options)) {
        if (typeof q.options[0] === 'string') {
            // Array of strings: ["opt1", "opt2", "opt3", "opt4"]
            options = q.options.map((opt, i) => ({
                id: String.fromCharCode(97 + i),
                text: autoFormatText(opt)
            }));
        } else {
            // Array of objects: [{id: 'a', text: '...'}, ...]
            options = q.options.map(opt => ({
                id: (opt.id || opt.key || 'a').toLowerCase(),
                text: autoFormatText(opt.text || opt.value || ''),
                image: opt.image || opt.img || ''
            }));
        }
    } else if (typeof q.options === 'object' && q.options !== null) {
        // Object: { a: "...", b: "..." }
        options = Object.entries(q.options).map(([key, val]) => ({
            id: key.toLowerCase(),
            text: autoFormatText(typeof val === 'string' ? val : (val.text || ''))
        }));
    }

    // Ensure we have 4 options
    while (options.length < 4) {
        options.push({ id: String.fromCharCode(97 + options.length), text: 'N/A' });
    }

    return {
        id: q.id || undefined,
        text: autoFormatText(text),
        image: q.image || q.img || '',
        subject: subject,
        correctOption: correctOption[0], // just in case it's 'option a'
        explanation: autoFormatText(explanation),
        options: options.slice(0, 4)
    };
};
