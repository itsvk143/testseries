/**
 * reportConstants.js
 * 
 * Standardized category taxonomies, status enums, and helper definitions
 * for the Question Reporting System.
 */

export const ACTIVE_TEST_CATEGORIES = [
    'Typing error in question',
    'Typing error in option',
    'Incorrect question',
    'Incorrect option',
    'Invalid question',
    'Out of syllabus'
];

export const SOLUTION_REVIEW_CATEGORIES = [
    // A. Question and option errors
    'Typing error in question',
    'Typing error in option',
    'Incorrect question',
    'Incorrect option',
    'Invalid question',
    'Out of syllabus',
    // B. Answer and explanation errors
    'Incorrect answer',
    'Incorrect explanation',
    'Answer and explanation not matching',
    // C. Difficulty and quality feedback
    'Very easy question',
    'Very difficult question'
];

export const CATEGORY_GROUPS = {
    QUESTION_ERRORS: {
        label: 'Question & Option Issues',
        items: [
            'Typing error in question',
            'Typing error in option',
            'Incorrect question',
            'Incorrect option',
            'Invalid question',
            'Out of syllabus'
        ]
    },
    ANSWER_ERRORS: {
        label: 'Answer & Explanation Issues',
        items: [
            'Incorrect answer',
            'Incorrect explanation',
            'Answer and explanation not matching'
        ]
    },
    QUALITY_FEEDBACK: {
        label: 'Difficulty & Quality Feedback',
        items: [
            'Very easy question',
            'Very difficult question'
        ]
    }
};

export const REPORT_STATUSES = {
    NEW: {
        key: 'NEW',
        value: 'NEW',
        label: 'New',
        badgeBg: 'rgba(59, 130, 246, 0.15)',
        badgeColor: '#60a5fa',
        border: 'rgba(59, 130, 246, 0.3)'
    },
    UNDER_REVIEW: {
        key: 'UNDER_REVIEW',
        value: 'UNDER_REVIEW',
        label: 'Under Review',
        badgeBg: 'rgba(234, 179, 8, 0.15)',
        badgeColor: '#facc15',
        border: 'rgba(234, 179, 8, 0.3)'
    },
    CONFIRMED_ERROR: {
        key: 'CONFIRMED_ERROR',
        value: 'CONFIRMED_ERROR',
        label: 'Confirmed Error',
        badgeBg: 'rgba(239, 68, 68, 0.15)',
        badgeColor: '#f87171',
        border: 'rgba(239, 68, 68, 0.3)'
    },
    RESOLVED: {
        key: 'RESOLVED',
        value: 'RESOLVED',
        label: 'Resolved',
        badgeBg: 'rgba(34, 197, 94, 0.15)',
        badgeColor: '#4ade80',
        border: 'rgba(34, 197, 94, 0.3)'
    },
    DISMISSED: {
        key: 'DISMISSED',
        value: 'DISMISSED',
        label: 'Dismissed',
        badgeBg: 'rgba(148, 163, 184, 0.15)',
        badgeColor: '#94a3b8',
        border: 'rgba(148, 163, 184, 0.3)'
    }
};

export const REPORT_SOURCES = {
    ACTIVE_TEST: 'ACTIVE_TEST',
    SOLUTION_REVIEW: 'SOLUTION_REVIEW'
};
