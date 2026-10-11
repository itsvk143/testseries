import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';
import { ACTIVE_TEST_CATEGORIES, SOLUTION_REVIEW_CATEGORIES, REPORT_STATUSES } from './reportConstants';

let indexesInitialized = false;

/**
 * Ensures MongoDB indexes for the questionReports collection.
 */
export async function getQuestionReportsCollection() {
    const client = await clientPromise;
    const db = client.db('testseries');
    const col = db.collection('questionReports');

    if (!indexesInitialized) {
        try {
            await col.createIndex({ questionId: 1 });
            await col.createIndex(
                { studentEmail: 1, questionId: 1, testId: 1, reportSource: 1 },
                { unique: true }
            );
            await col.createIndex({ status: 1 });
            await col.createIndex({ createdAt: -1 });
            await col.createIndex({ reportId: 1 }, { unique: true });
            await col.createIndex({ subject: 1, chapter: 1 });
            await col.createIndex({ exam: 1 });
            indexesInitialized = true;
        } catch (err) {
            console.error('[questionReports] Index initialization error:', err);
        }
    }

    return { col, db };
}

/**
 * Generates a clean, readable, unique report ID: REP-YYYYMMDD-XXXX
 */
export function generateReportId() {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `REP-${dateStr}-${rand}`;
}

/**
 * Validates selected categories based on reporting source.
 */
export function validateCategories(categories, reportSource) {
    if (!Array.isArray(categories) || categories.length === 0) {
        return { valid: false, error: 'At least one issue category must be selected.' };
    }

    const isSourceActive = String(reportSource || '').toUpperCase().includes('ACTIVE');
    const allowed = isSourceActive
        ? ACTIVE_TEST_CATEGORIES
        : SOLUTION_REVIEW_CATEGORIES;

    for (const cat of categories) {
        if (!allowed.includes(cat)) {
            return { valid: false, error: `Invalid category: "${cat}" for source ${reportSource}` };
        }
    }

    const isQualityFeedback = categories.every(
        c => c === 'Very easy question' || c === 'Very difficult question'
    );

    return { valid: true, isQualityFeedback };
}

/**
 * Checks if the user is an authorized admin based on session data.
 */
export function isUserAdmin(session) {
    if (!session?.user?.email) return false;
    const email = session.user.email.toLowerCase();
    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    return session?.user?.isAdmin === true || session?.user?.role === 'admin' || adminEmails.includes(email);
}
