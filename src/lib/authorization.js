/**
 * Central Authorization & Access Control Service
 * Supports NEET, JEE Main, and BITSAT.
 * Enforces strict 732-day authorization period upon payment confirmation.
 */

export const AUTHORIZATION_DAYS = 732;
export const CANONICAL_EXAMS = ['NEET', 'JEE_MAIN', 'BITSAT'];

/**
 * Validates and converts any exam identifier to strict canonical enum:
 * 'NEET' | 'JEE_MAIN' | 'BITSAT'. Returns '' if invalid.
 * Strictly rejects arrays, JEE Advanced, and combined options.
 */
export function normalizeToCanonicalExam(exam) {
    if (!exam || Array.isArray(exam)) return '';
    const str = String(exam).trim();
    const upper = str.toUpperCase().replace(/[\s-]+/g, '_');

    // Explicitly reject forbidden multi-exam or unsupported values
    if (upper.includes('ADVANCE') || upper.includes('BOTH') || upper.includes('ALL') || upper.includes('+') || upper.includes('&')) {
        return '';
    }

    if (upper === 'NEET') return 'NEET';
    if (upper === 'JEE_MAIN' || upper === 'JEE_MAINS' || upper === 'JEEM' || upper === 'JEE') return 'JEE_MAIN';
    if (upper === 'BITSAT') return 'BITSAT';
    return '';
}

export function canonicalToExamSlug(canonicalExam) {
    if (canonicalExam === 'NEET') return 'neet';
    if (canonicalExam === 'JEE_MAIN') return 'jee-mains';
    if (canonicalExam === 'BITSAT') return 'bitsat';
    return '';
}

export function examSlugToCanonical(slug) {
    if (!slug) return '';
    const s = String(slug).trim().toLowerCase();
    if (s === 'neet') return 'NEET';
    if (s === 'jee-mains' || s === 'jee-main' || s === 'jeem') return 'JEE_MAIN';
    if (s === 'bitsat') return 'BITSAT';
    return '';
}

export function getCanonicalExamDisplay(canonicalExam) {
    if (canonicalExam === 'NEET') return 'NEET';
    if (canonicalExam === 'JEE_MAIN') return 'JEE MAIN';
    if (canonicalExam === 'BITSAT') return 'BITSAT';
    return canonicalExam || '';
}

/**
 * Calculates exact calendar expiry timestamp 732 days from given start date.
 */
export function calculate732DayExpiry(startDate = new Date()) {
    const start = new Date(startDate);
    return new Date(start.getTime() + AUTHORIZATION_DAYS * 24 * 60 * 60 * 1000);
}

export function extractTestExam(testId = '', testObject = null, examSlug = '') {
    const id = String(testId || testObject?.id || testObject?.testId || '').trim().toLowerCase();
    if (id.startsWith('neet') || id.includes('neet-') || id.includes('-neet')) return 'NEET';
    if (id.startsWith('jee-mains') || id.startsWith('jee-main') || id.startsWith('jeem') || id.includes('jee-mains') || id.includes('jeem-')) return 'JEE_MAIN';
    if (id.startsWith('bitsat') || id.includes('bitsat-') || id.includes('-bitsat')) return 'BITSAT';

    if (testObject?.exam) {
        const canonical = normalizeToCanonicalExam(testObject.exam);
        if (canonical) return canonical;
    }

    if (examSlug) {
        const fromSlug = examSlugToCanonical(examSlug) || normalizeToCanonicalExam(examSlug);
        if (fromSlug) return fromSlug;
    }

    return '';
}

/**
 * Normalizes exam names for access checking.
 */
export function normalizeExam(exam) {
    if (!exam) return '';
    const s = exam.toString().trim().toLowerCase();
    if (s.includes('neet')) return 'neet';
    if (s.includes('jee')) return 'jee-mains';
    if (s.includes('bitsat')) return 'bitsat';
    return s;
}

/**
 * Checks overall student authorization status.
 * Evaluates paymentStatus, accountStatus, and 732-day calendar expiry.
 * Admins are permanently exempt.
 */
export function checkStudentAuthorization(user) {
    if (!user) {
        return {
            authorized: false,
            reason: 'UNAUTHENTICATED',
            status: 'UNAUTHENTICATED',
            message: 'You must be signed in to access test papers.'
        };
    }

    const adminEmails = (process.env.ADMIN_EMAILS || '')
        .split(',')
        .map(e => e.trim().toLowerCase())
        .filter(Boolean);

    const isAdmin = user.role === 'admin' ||
        user.isAdmin === true ||
        (user.email && adminEmails.includes(user.email.toLowerCase()));

    if (isAdmin) {
        return {
            authorized: true,
            isAdmin: true,
            status: 'ACTIVE',
            daysRemaining: Infinity,
            message: 'Admin access granted.'
        };
    }

    // Check account suspension
    if (user.accountStatus === 'SUSPENDED') {
        return {
            authorized: false,
            reason: 'SUSPENDED',
            status: 'SUSPENDED',
            message: 'Your account has been suspended. Please contact the administrator.'
        };
    }

    // Check payment status
    if (user.paymentStatus !== 'CONFIRMED') {
        const isRejected = user.paymentStatus === 'REJECTED';
        return {
            authorized: false,
            reason: isRejected ? 'PAYMENT_REJECTED' : 'PAYMENT_PENDING',
            status: isRejected ? 'REJECTED' : 'PENDING_APPROVAL',
            message: isRejected
                ? 'Your payment was rejected. Please complete payment to activate test access.'
                : 'Your payment is awaiting confirmation by the administrator. Test access will be activated after payment confirmation and approval.'
        };
    }

    // Check admin approval and authorization dates
    if (user.accountStatus === 'PENDING_APPROVAL' || !user.authorizationExpiryDate) {
        return {
            authorized: false,
            reason: 'APPROVAL_PENDING',
            status: 'PENDING_APPROVAL',
            message: 'Your account is awaiting administrator authorization.'
        };
    }

    // Check actual calendar 732-day expiry against server time
    const now = Date.now();
    const expiryTime = new Date(user.authorizationExpiryDate).getTime();

    if (isNaN(expiryTime) || now > expiryTime) {
        return {
            authorized: false,
            reason: 'EXPIRED',
            status: 'EXPIRED',
            daysRemaining: 0,
            authorizationStartDate: user.authorizationStartDate,
            authorizationExpiryDate: user.authorizationExpiryDate,
            message: 'Your 732-day test authorization has expired. Please complete renewal/payment to regain test access.'
        };
    }

    const msRemaining = expiryTime - now;
    const daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));
    const isExpiringSoon = daysRemaining <= 30;

    return {
        authorized: true,
        isAdmin: false,
        status: isExpiringSoon ? 'EXPIRING_SOON' : 'ACTIVE',
        daysRemaining,
        authorizationStartDate: user.authorizationStartDate,
        authorizationExpiryDate: user.authorizationExpiryDate,
        message: 'Test access authorized.'
    };
}

/**
 * Checks test access for a specific test and exam.
 * Combines Student Authorization + Strict Single Exam Match + Test Category Permission.
 */
export function checkTestAccess(user, testIdOrTest, examHint = '') {
    const authStatus = checkStudentAuthorization(user);
    if (!authStatus.authorized) {
        return authStatus;
    }

    // Admins have unrestricted access to all tests
    if (authStatus.isAdmin) {
        return { allowed: true, isAdmin: true };
    }

    const testId = typeof testIdOrTest === 'string' ? testIdOrTest : (testIdOrTest?.id || testIdOrTest?.testId || '');
    const testObject = typeof testIdOrTest === 'object' ? testIdOrTest : null;
    const testIdUpper = testId.toUpperCase();

    // 1. Identify test exam in canonical form
    const testExam = extractTestExam(testId, testObject, examHint);

    // 2. Verify student's ONE assigned exam
    const studentExam = normalizeToCanonicalExam(user.exam || user.examPreparingFor);

    if (!studentExam) {
        return {
            allowed: false,
            reason: 'EXAM_NOT_ASSIGNED',
            message: 'Please complete your student registration and select your exam.'
        };
    }

    // Critical rule: ONE STUDENT = ONE EXAM. STUDENT EXAM must equal TEST EXAM.
    if (testExam && studentExam !== testExam) {
        return {
            allowed: false,
            reason: 'EXAM_MISMATCH',
            studentExam,
            testExam,
            message: `ACCESS DENIED: Your account is registered for ${getCanonicalExamDisplay(studentExam)}. You cannot access ${getCanonicalExamDisplay(testExam)} tests.`
        };
    }

    // 3. Identify test category / permission key
    // Permitted categories: mock, live, subject, chapter, subtopic
    let requiredKey = 'mock';
    if (testIdUpper.includes('-LIVE-') || testIdUpper.includes('-SUNDAY-') || testIdOrTest?.type === 'LIVE' || testIdOrTest?.type === 'PART') {
        requiredKey = 'live';
    } else if (testIdUpper.includes('-SUBJECT-') || testIdOrTest?.type === 'SUBJECT') {
        requiredKey = 'subject';
    } else if (testIdUpper.includes('-CHAPTER-') || testIdOrTest?.type === 'CHAPTER') {
        requiredKey = 'chapter';
    } else if (testIdUpper.includes('-SUBTOPIC-') || testIdOrTest?.type === 'SUBTOPIC') {
        requiredKey = 'subtopic';
    } else if (testIdUpper.includes('-MOCK-') || testIdOrTest?.type === 'MOCK') {
        requiredKey = 'mock';
    }

    // 4. Check permissions (supports exam-specific approvals or flat approvals)
    const approvals = user.approvals || {};
    let hasPermission = false;

    if (testExam && approvals[testExam] && typeof approvals[testExam] === 'object') {
        hasPermission = !!approvals[testExam][requiredKey];
    } else {
        hasPermission = !!approvals[requiredKey];
    }

    if (!hasPermission) {
        const categoryLabels = {
            mock: 'Full Tests',
            live: 'Cumulative / Live Tests',
            subject: 'Subject-wise Tests',
            chapter: 'Chapter-wise Tests',
            subtopic: 'Topic-wise Tests'
        };
        return {
            allowed: false,
            reason: 'PERMISSION_DENIED',
            category: requiredKey,
            message: `You do not have access to ${categoryLabels[requiredKey] || requiredKey.toUpperCase()}. Please contact your administrator to grant access.`
        };
    }

    return {
        allowed: true,
        category: requiredKey,
        daysRemaining: authStatus.daysRemaining,
        authorizationExpiryDate: authStatus.authorizationExpiryDate
    };
}

/**
 * Records an audit log entry in the database.
 */
export async function logAdminAudit(db, { action, studentId, adminId, prevStatus = null, newStatus = null, details = {} }) {
    try {
        await db.collection('auditLogs').insertOne({
            action,
            studentId: studentId?.toString() || null,
            adminId: adminId?.toString() || null,
            prevStatus,
            newStatus,
            details,
            timestamp: new Date()
        });
    } catch (err) {
        console.error('Failed to write audit log:', err);
    }
}
