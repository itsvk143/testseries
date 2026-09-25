import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import { SOCIAL_LINKS } from '@/lib/socialConfig';
import { FileText, CheckCircle2, Shield, AlertTriangle, Scale, Clock, RefreshCw } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | Poll Test Series',
    description: 'Terms and Conditions governing enrollment, 732-day continuous licenses, testing modules, and platform fair use on Poll Test Series.',
    keywords: ['Poll Test Series Terms', 'Test series terms of service', 'Student agreement', '732-day license policy']
};

export default function TermsOfServicePage() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.pill}>TERMS &amp; CONDITIONS</div>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <div className={styles.lastUpdated}>
                        Last Updated: September 2026 • Effective Date: January 1, 2026
                    </div>
                </header>

                <div className={styles.docContent}>
                    {/* SECTION 1 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>1</span>
                            Agreement &amp; Acceptance
                        </h2>
                        <p className={styles.paragraph}>
                            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (the student or legal guardian) and <strong>Poll Test Series</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) regarding your use of the <strong>polltest.in</strong> platform, student dashboard, examination engine, and related services.
                        </p>
                        <p className={styles.paragraph}>
                            By creating an account, completing enrollment via Razorpay, or attempting any test on the platform, you agree to comply with and be bound by these Terms.
                        </p>
                    </section>

                    {/* SECTION 2 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>2</span>
                            732-Day Continuous Student License
                        </h2>
                        <p className={styles.paragraph}>
                            Upon successful payment of the one-time enrollment fee for your selected examination (NEET, JEE Mains, or BITSAT), Poll Test Series grants you a personal, non-exclusive, non-transferable license valid for exactly <strong>732 continuous calendar days</strong> (2 full academic years).
                        </p>
                        <div className={styles.highlightBox}>
                            <strong>Single-Student Access Rule:</strong> Your enrollment and assigned Student Code are strictly tied to one individual. Account sharing, credential distribution, or concurrent test attempts from multiple locations will result in automatic session termination and potential account suspension.
                        </div>
                    </section>

                    {/* SECTION 3 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>3</span>
                            Testing Progression &amp; Module Structure
                        </h2>
                        <p className={styles.paragraph}>
                            Our testing architecture is structured systematically around the pedagogical sequence:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Subtopic Tests:</strong> Focused, concept-specific drill tests targeting granular weaknesses.</li>
                            <li className={styles.listItem}><strong>Chapterwise Tests:</strong> Comprehensive chapter-level assessments covering full theory and numericals.</li>
                            <li className={styles.listItem}><strong>Subjectwise Tests:</strong> 24-test revision modules for Physics, Chemistry, Mathematics/Biology.</li>
                            <li className={styles.listItem}><strong>Chapter Poll Tests:</strong> High-speed interactive topic challenges to train instinct and elimination skills.</li>
                            <li className={styles.listItem}><strong>Live Tests:</strong> Real-time proctored scheduled examinations with national peer percentiles.</li>
                            <li className={styles.listItem}><strong>Full Mock Tests:</strong> Official NTA/BITSAT blueprint simulations replicating test duration and marking schemes.</li>
                        </ul>
                    </section>

                    {/* SECTION 4 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>4</span>
                            Fees, Payments &amp; Razorpay Processing
                        </h2>
                        <p className={styles.paragraph}>
                            All fees are listed in Indian Rupees (INR) and are payable securely through Razorpay. Access to the paid testing modules is activated automatically upon payment confirmation.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Refund Policy:</strong> Given the instantaneous digital activation of our proprietary question bank and answer keys, refunds are evaluated on a case-by-case basis (e.g., duplicate accidental transactions) within 48 hours of payment upon contacting our support helpline.
                        </p>
                    </section>

                    {/* SECTION 5 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>5</span>
                            Intellectual Property &amp; Anti-Piracy
                        </h2>
                        <p className={styles.paragraph}>
                            All test questions, mathematical diagrams, step-by-step LaTeX explanations, software interfaces, and performance analytics are the exclusive intellectual property of Poll Test Series.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>You may not scrape, copy, re-upload, distribute, or publish our questions or solutions on external channels, websites, or social media groups.</li>
                            <li className={styles.listItem}>Commercial resale or unauthorized reproduction of any test materials is strictly prohibited and subject to legal prosecution under the Indian Copyright Act.</li>
                        </ul>
                    </section>

                    {/* SECTION 6 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>6</span>
                            Fair Use &amp; Exam Integrity
                        </h2>
                        <p className={styles.paragraph}>
                            Students are expected to uphold academic integrity. The use of automated scripts, browser scraping extensions, question-lookup bots, or artificial score inflation tools is strictly monitored by our integrity filters. Accounts found manipulating leaderboards or test timings will be permanently disqualified from rankings.
                        </p>
                    </section>

                    {/* SECTION 7 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>7</span>
                            Disclaimers &amp; Educational Purpose
                        </h2>
                        <p className={styles.paragraph}>
                            Poll Test Series is an independent, premium test preparation platform designed to help students simulate national competitive examinations (NEET, JEE Mains, BITSAT). We are not directly affiliated with NTA (National Testing Agency) or BITS Pilani. All mock test blueprints are designed following public syllabus notifications and PYQ patterns.
                        </p>
                    </section>

                    {/* SECTION 8 */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionNumber}>8</span>
                            Governing Law &amp; Support Contact
                        </h2>
                        <p className={styles.paragraph}>
                            These Terms are governed by and construed in accordance with the laws of India. For any questions, dispute resolutions, or clarifications:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Helpline:</strong> +91 {SOCIAL_LINKS.PHONE_NUMBER}</li>
                            <li className={styles.listItem}><strong>WhatsApp Support:</strong> +91 {SOCIAL_LINKS.PHONE_NUMBER}</li>
                            <li className={styles.listItem}><strong>Direct Desk:</strong> <Link href="/contact" style={{ color: '#818cf8', textDecoration: 'underline' }}>Contact Form</Link></li>
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
