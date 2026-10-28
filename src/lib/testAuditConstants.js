/**
 * Mandatory 9-Point Audit Checks definition
 * Client-safe constants for Test Audit System
 */
export const MANDATORY_CHECK_KEYS = [
    'questionCorrect',
    'allOptionsValid',
    'allOptionsAvailable',
    'answerAvailable',
    'answerCorrect',
    'explanationPresent',
    'explanationCorrect',
    'explanationMatchesAnswer',
    'difficultyCorrect'
];

export const MANDATORY_CHECK_LABELS = {
    questionCorrect: '1. Question Correct & Unambiguous',
    allOptionsValid: '2. All Four Options Valid as Choices',
    allOptionsAvailable: '3. All Four Options Available & Non-Empty',
    answerAvailable: '4. Answer Key Available',
    answerCorrect: '5. Answer Key Correct (vs Derived)',
    explanationPresent: '6. Explanation Present',
    explanationCorrect: '7. Explanation Scientifically Correct',
    explanationMatchesAnswer: '8. Explanation Matches Stored Answer',
    difficultyCorrect: '9. Difficulty Level Appropriate'
};
