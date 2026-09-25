'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import { SOCIAL_LINKS } from '@/lib/socialConfig';
import { Phone, MessageCircle, Send, Mail, MapPin, CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        exam: 'NEET',
        subject: 'Enrollment / Access',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit inquiry.');
            }

            setStatus({ loading: false, success: true, error: '' });
            setFormData({
                name: '',
                email: '',
                phone: '',
                exam: 'NEET',
                subject: 'Enrollment / Access',
                message: ''
            });
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.pill}>DIRECT SUPPORT DESK</div>
                    <h1 className={styles.title}>
                        Get in Touch with <span className={styles.highlight}>Poll Test Series</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Have questions about test series enrollment, 732-day license activation, syllabus alignment, or question doubts? Our mentors and technical team are here to assist you.
                    </p>
                </section>

                {/* QUICK CHANNELS */}
                <section className={styles.channelsGrid}>
                    {/* PHONE */}
                    <div className={styles.channelCard}>
                        <div className={styles.channelIconBox} style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                            <Phone size={24} />
                        </div>
                        <h2 className={styles.channelTitle}>Call Us Directly</h2>
                        <div className={styles.channelDetail} style={{ color: '#38bdf8' }}>+91 {SOCIAL_LINKS.PHONE_NUMBER}</div>
                        <p className={styles.channelDesc}>
                            Speak directly with our academic coordinators for admission and program details.
                        </p>
                        <a href={SOCIAL_LINKS.PHONE_TEL} className={`${styles.channelBtn} ${styles.phoneBtn}`}>
                            <Phone size={16} /> CALL NOW
                        </a>
                    </div>

                    {/* WHATSAPP */}
                    <div className={styles.channelCard}>
                        <div className={styles.channelIconBox} style={{ background: 'rgba(34, 197, 94, 0.15)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#4ade80' }}>
                            <MessageCircle size={24} />
                        </div>
                        <h2 className={styles.channelTitle}>WhatsApp Support</h2>
                        <div className={styles.channelDetail} style={{ color: '#4ade80' }}>+91 {SOCIAL_LINKS.PHONE_NUMBER}</div>
                        <p className={styles.channelDesc}>
                            Instant messaging assistance for quick queries, test schedule updates, and payment help.
                        </p>
                        <a href={SOCIAL_LINKS.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${styles.channelBtn} ${styles.whatsappBtn}`}>
                            <MessageCircle size={16} /> CHAT ON WHATSAPP
                        </a>
                    </div>

                    {/* TELEGRAM */}
                    <div className={styles.channelCard}>
                        <div className={styles.channelIconBox} style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#c084fc' }}>
                            <Send size={24} />
                        </div>
                        <h2 className={styles.channelTitle}>Telegram Community</h2>
                        <div className={styles.channelDetail} style={{ color: '#c084fc' }}>Poll Test Series Official</div>
                        <p className={styles.channelDesc}>
                            Join our student channel for daily poll updates, high-yield revision notes, and test releases.
                        </p>
                        <a href={SOCIAL_LINKS.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.channelBtn} ${styles.telegramBtn}`}>
                            <Send size={16} /> JOIN TELEGRAM
                        </a>
                    </div>
                </section>

                {/* CONTACT FORM & INFO */}
                <section className={styles.formSection}>
                    <div className={styles.formInfo}>
                        <div>
                            <h2 className={styles.formInfoTitle}>Send Us a Message</h2>
                            <p className={styles.formInfoDesc}>
                                Fill out the form with your query. A dedicated mentor or technical representative will respond within 24 business hours.
                            </p>

                            <ul className={styles.infoList}>
                                <li className={styles.infoItem}>
                                    <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>Instant access activation issues resolved on priority.</span>
                                </li>
                                <li className={styles.infoItem}>
                                    <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>Subject matter expert resolution for any question ambiguity.</span>
                                </li>
                                <li className={styles.infoItem}>
                                    <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>Guidance on test progression: Subtopic &rarr; Chapter &rarr; Subject &rarr; Poll &rarr; Live &rarr; Mock.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                            <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                Operating Hours
                            </div>
                            <div style={{ fontSize: '0.92rem', color: '#e2e8f0', fontWeight: '500' }}>
                                Monday – Sunday: 9:00 AM – 9:00 PM IST
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.formContainer}>
                        {status.success && (
                            <div className={styles.successAlert}>
                                <CheckCircle2 size={20} />
                                <span>Thank you! Your message has been sent. We will get back to you shortly.</span>
                            </div>
                        )}

                        {status.error && (
                            <div className={styles.errorAlert}>
                                <AlertCircle size={20} />
                                <span>{status.error}</span>
                            </div>
                        )}

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contact-name">Full Name *</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. Rahul Sharma"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contact-email">Email Address *</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@example.com"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contact-phone">Phone / WhatsApp Number</label>
                                <input
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contact-exam">Target Examination</label>
                                <select
                                    id="contact-exam"
                                    name="exam"
                                    value={formData.exam}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="NEET">NEET UG</option>
                                    <option value="JEE_MAIN">JEE Main</option>
                                    <option value="BITSAT">BITSAT</option>
                                    <option value="General">General Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="contact-subject">Topic / Subject</label>
                            <select
                                id="contact-subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="Enrollment / Access">Enrollment &amp; 732-Day License Access</option>
                                <option value="Payment Inquiry">Payment &amp; Razorpay Confirmation</option>
                                <option value="Technical Support">Technical / Interface Issue</option>
                                <option value="Question Doubt">Question Doubt or Explanation Inquiry</option>
                                <option value="Other">Other Feedback</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="contact-message">Your Message *</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Describe your question or issue in detail..."
                                className={styles.textarea}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className={styles.submitBtn}
                        >
                            {status.loading ? 'SENDING MESSAGE...' : 'SEND INQUIRY'} <ArrowRight size={18} />
                        </button>
                    </form>
                </section>

                {/* FAQ QUICK ANSWERS */}
                <section className={styles.faqSection}>
                    <div className={styles.faqHeader}>
                        <div className={styles.pill}>FREQUENT QUESTIONS</div>
                        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3 className={styles.faqQuestion}>How soon is my test series activated after payment?</h3>
                            <p className={styles.faqAnswer}>
                                Test series access is activated instantly by our automated payment webhook upon successful Razorpay verification. You receive full 732-day access immediately.
                            </p>
                        </div>

                        <div className={styles.faqCard}>
                            <h3 className={styles.faqQuestion}>Can I practice on mobile phones and tablets?</h3>
                            <p className={styles.faqAnswer}>
                                Yes. Poll Test Series is fully responsive and optimized for smartphones, tablets, laptops, and desktop computers with complete NTA-simulated interfaces.
                            </p>
                        </div>

                        <div className={styles.faqCard}>
                            <h3 className={styles.faqQuestion}>What if I face an issue during a Live or Mock test?</h3>
                            <p className={styles.faqAnswer}>
                                You can immediately reach out to our WhatsApp helpline at +91 {SOCIAL_LINKS.PHONE_NUMBER}. Our support team monitors live sessions and resolves technical inquiries promptly.
                            </p>
                        </div>

                        <div className={styles.faqCard}>
                            <h3 className={styles.faqQuestion}>Can I review solutions and explanations after submission?</h3>
                            <p className={styles.faqAnswer}>
                                Yes! Every test includes instant detailed step-by-step explanations, time-spent metrics per question, and accuracy analysis in your student dashboard.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
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
