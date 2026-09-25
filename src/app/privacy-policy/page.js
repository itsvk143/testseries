import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import { SOCIAL_LINKS } from '@/lib/socialConfig';
import { ShieldCheck, Lock, Eye, Database, CreditCard, UserCheck, Bell, HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | Poll Test Series',
    description: 'Privacy Policy for Poll Test Series explaining how student data, test analytics, and payment details are collected, protected, and processed.',
    keywords: ['Poll Test Series Privacy Policy', 'student privacy', 'test data protection', 'Razorpay payment privacy']
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.pill}>LEGAL &amp; COMPLIANCE</div>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <div className={styles.lastUpdated}>
                        Last Updated: September 2026 • Effective Date: January 1, 2026
                    </div>
                </header>

                <div className={styles.docContent}>
                    {/* SECTION 1 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>1</span>
                            Introduction &amp; Scope
                        </h2>
                        <p className={styles.paragraph}>
                            Welcome to <strong>Poll Test Series</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to safeguarding the privacy and data security of every student, parent, and educator using our competitive exam testing platform.
                        </p>
                        <p className={styles.paragraph}>
                            This Privacy Policy details the types of personal data we collect when you visit <strong>polltest.in</strong>, enroll in our NEET, JEE Mains, or BITSAT test series, attempt tests, and interact with our analytics engine. By accessing or using our platform, you acknowledge that you have read and agreed to the practices outlined in this policy.
                        </p>
                    </section>

                    {/* SECTION 2 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>2</span>
                            Information We Collect
                        </h2>
                        <p className={styles.paragraph}>
                            To deliver tailored testing simulations and track student progress, we collect:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>Personal Identification:</strong> Name, email address, mobile/WhatsApp number, target competitive examination (NEET, JEE Mains, or BITSAT), class/grade level, and unique Student Code.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Testing &amp; Performance Telemetry:</strong> Questions answered, selected options, time spent per question, test completion timestamps, accuracy heatmaps, subjectwise scoring, and live rank leaderboards.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Payment Transaction Records:</strong> Order IDs, Razorpay transaction signatures, payment status, and enrollment validity timestamps.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Technical &amp; Log Data:</strong> IP address, browser type, device information, and session cookies required for authentication and test persistence.
                            </li>
                        </ul>
                    </section>

                    {/* SECTION 3 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>3</span>
                            How We Use Your Information
                        </h2>
                        <p className={styles.paragraph}>
                            All collected data is strictly utilized to provide educational testing and academic services:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Enforcing continuous 732-day access licenses for enrolled exam packages.</li>
                            <li className={styles.listItem}>Computing real-time test percentiles, subject rankings, and personalized weakness analytics.</li>
                            <li className={styles.listItem}>Conducting scheduled Live Tests, Sunday Full-Syllabus Mock Tests, and daily Chapter Polls.</li>
                            <li className={styles.listItem}>Providing customer support via WhatsApp, phone, and email for test-related inquiries.</li>
                            <li className={styles.listItem}>Preventing fraudulent test attempts, bot interactions, and unauthorized account sharing.</li>
                        </ul>
                    </section>

                    {/* SECTION 4 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>4</span>
                            Payment Security &amp; Razorpay Integration
                        </h2>
                        <p className={styles.paragraph}>
                            Online payments on Poll Test Series are processed securely through <strong>Razorpay</strong>, India&rsquo;s leading RBI-authorized and PCI-DSS Level 1 compliant payment gateway.
                        </p>
                        <div className={styles.highlightBox}>
                            <strong>Security Assurance:</strong> Poll Test Series never stores or has access to your full credit card numbers, debit card PINs, CVV, or net banking passwords. All sensitive payment transactions occur encrypted under 256-bit SSL encryption directly on Razorpay&rsquo;s secure servers.
                        </div>
                    </section>

                    {/* SECTION 5 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>5</span>
                            Data Retention &amp; Student Rights
                        </h2>
                        <p className={styles.paragraph}>
                            We retain student test performance metrics, attempt history, and scores for the duration of your active enrollment (732 days) to enable continuous revision and comparative growth tracking.
                        </p>
                        <p className={styles.paragraph}>
                            You retain the right to:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Review and update your profile information in your student dashboard.</li>
                            <li className={styles.listItem}>Request a complete copy of your test performance records.</li>
                            <li className={styles.listItem}>Request account deletion and removal of personal identifiers upon completing your competitive exam cycle.</li>
                        </ul>
                    </section>

                    {/* SECTION 6 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>6</span>
                            Third-Party Disclosures
                        </h2>
                        <p className={styles.paragraph}>
                            We do not sell, rent, or trade student personal data or contact details to third-party marketing agencies or coaching institutions. Information is shared only with trusted infrastructure providers (such as cloud hosting and Razorpay payment services) necessary for operating the test series platform.
                        </p>
                    </section>

                    {/* SECTION 7 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>7</span>
                            Grievance Officer &amp; Contact Information
                        </h2>
                        <p className={styles.paragraph}>
                            If you have questions, feedback, or data privacy concerns regarding this policy, please reach out to our grievance desk:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Platform:</strong> Poll Test Series</li>
                            <li className={styles.listItem}><strong>Helpline / WhatsApp:</strong> +91 {SOCIAL_LINKS.PHONE_NUMBER}</li>
                            <li className={styles.listItem}><strong>Support Desk:</strong> <Link href="/contact" style={{ color: '#818cf8', textDecoration: 'underline' }}>Visit Contact Page</Link></li>
                        </ul>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerText}>
                        &copy; {new Date().getFullYear()} Poll Test Series. All rights reserved. Quality Tests for Quality Students.
                    </div>
                    <div className={styles.footerLinks}>
                        <Link href="/" className={styles.footerLink}>Home</Link>
                        <Link href="/about" className={styles.footerLink}>About</Link>
                        <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
                        <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
                        <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
