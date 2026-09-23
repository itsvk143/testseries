import Razorpay from 'razorpay';
import { normalizeToCanonicalExam } from './authorization.js';

/**
 * Product catalog for TestSeries.
 * Prices are strictly controlled by the server in INR.
 * Amounts can be customized via environment variables:
 * - PAYMENT_AMOUNT_NEET (default 999)
 * - PAYMENT_AMOUNT_JEE (default 999)
 * - PAYMENT_AMOUNT_BITSAT (default 999)
 */
export const PAYMENT_PRODUCTS = {
    NEET: {
        id: 'testseries_neet_2026',
        name: 'NEET Test Series (2026 Edition)',
        exam: 'NEET',
        examDisplay: 'NEET',
        amount: Number(process.env.PAYMENT_AMOUNT_NEET) || 999,
        currency: 'INR',
        durationDays: 732,
        description: 'Complete NEET Mock Tests, Subject-wise, Chapter-wise, Topic-wise & Poll Practice with Instant Analysis and 732-Day Full Access.',
        features: [
            'All Full-Length NEET Mock Tests (10+ Tests & PYQs)',
            'Subject-wise Tests (Physics, Chemistry, Botany, Zoology)',
            'Chapter-wise Practice & Topic-wise Mastery',
            'Full Access to Chapter Poll Practice',
            'Instant NTA-Pattern Score Analysis & Solution Reviews',
            '732-Day Continuous Student License'
        ]
    },
    JEE_MAIN: {
        id: 'testseries_jee_mains_2026',
        name: 'JEE Mains Test Series (2026 Edition)',
        exam: 'JEE_MAIN',
        examDisplay: 'JEE Mains',
        amount: Number(process.env.PAYMENT_AMOUNT_JEE) || 999,
        currency: 'INR',
        durationDays: 732,
        description: 'Full Length JEE Mains Mocks, Chapter Practice, PYQs & Real-time Ranking with 732-Day Full Access.',
        features: [
            'All Full-Length JEE Mains Mock Tests & PYQs',
            'Subject-wise Tests (Physics, Chemistry, Mathematics)',
            'Chapter-wise Practice & Subtopic Drills',
            'Full Access to Chapter Poll Practice',
            'Instant NTA-Pattern Score Analysis & Leaderboards',
            '732-Day Continuous Student License'
        ]
    },
    BITSAT: {
        id: 'testseries_bitsat_2026',
        name: 'BITSAT Test Series (2026 Edition)',
        exam: 'BITSAT',
        examDisplay: 'BITSAT',
        amount: Number(process.env.PAYMENT_AMOUNT_BITSAT) || 999,
        currency: 'INR',
        durationDays: 732,
        description: 'BITSAT 24-Test Blueprint, Speed Mocks, Math/Bio Full Papers & Chapter Polls with 732-Day Full Access.',
        features: [
            '24-Test Blueprint Compliant Full-Length Mocks',
            'Physics, Chemistry, Math, English & Logical Reasoning',
            'Subject-wise Tests & Speed Accuracy Drills',
            'Full Access to Chapter Poll Practice (All 5 Subjects)',
            'Instant Score Calculation (+3 / -1) & Review',
            '732-Day Continuous Student License'
        ]
    }
};

/**
 * Returns the official product object for a student's assigned exam.
 * Returns null if the exam is invalid or unsupported.
 */
export function getProductForExam(rawExam) {
    const canonical = normalizeToCanonicalExam(rawExam);
    if (!canonical || !PAYMENT_PRODUCTS[canonical]) {
        return null;
    }
    return { ...PAYMENT_PRODUCTS[canonical] };
}

/**
 * Instantiates the Razorpay server client using environment variables.
 * Throws a clear descriptive error if credentials are not configured.
 */
export function getRazorpayClient() {
    const key_id = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
        throw new Error(
            'Razorpay credentials are not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your environment.'
        );
    }

    return new Razorpay({
        key_id,
        key_secret
    });
}
