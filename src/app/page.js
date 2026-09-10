import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import { Target, LineChart, BookOpen, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>New</span>
              Updated for NEET & JEE 2026 Syllabus
            </div>
            <h1 className={styles.title}>
              The Ultimate <span className={styles.highlight}>Test Series</span> Platform
            </h1>
            <p className={styles.description}>
              Elevate your preparation for NEET, JEE Mains, and BITSAT with state-of-the-art mock tests, real-time analytics, and comprehensive PYQs.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/test-series/neet" className={styles.primaryButton}>
                Explore NEET <ChevronRight size={18} />
              </Link>
              <Link href="/test-series/jee-mains" className={styles.secondaryButton}>
                Explore JEE Mains
              </Link>
              <Link href="/test-series/bitsat" className={styles.secondaryButton}>
                Explore BITSAT
              </Link>
            </div>
            
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}><CheckCircle2 size={16} className={styles.trustIcon} /> 100% NCERT Based</div>
              <div className={styles.trustItem}><CheckCircle2 size={16} className={styles.trustIcon} /> Real Exam Interface</div>
              <div className={styles.trustItem}><CheckCircle2 size={16} className={styles.trustIcon} /> Detailed Solutions</div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>50,000+</h3>
              <p className={styles.statLabel}>Questions Practiced</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>150+</h3>
              <p className={styles.statLabel}>Full Syllabus Mocks</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>10,000+</h3>
              <p className={styles.statLabel}>Active Aspirants</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>99.9%</h3>
              <p className={styles.statLabel}>Accuracy Rate</p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Platform?</h2>
            <p className={styles.sectionSubtitle}>Everything you need to secure your top rank, built into one seamless experience.</p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Target className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Real NTA Simulator</h3>
              <p className={styles.featureDesc}>Experience the exact interface of the actual exam so you feel completely at home on test day.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <LineChart className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Advanced Analytics</h3>
              <p className={styles.featureDesc}>Get deep insights into your performance with subject-wise time tracking and accuracy heatmaps.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <BookOpen className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Structured Revision</h3>
              <p className={styles.featureDesc}>Follow our carefully curated 24-test revision modules that perfectly align with the latest syllabus.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <ShieldCheck className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Error-Free Content</h3>
              <p className={styles.featureDesc}>Every question is verified by top educators and our expert AI pipelines for maximum reliability.</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>TestSeries</h2>
            <p>Empowering the next generation of top rankers.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Exams</h4>
              <Link href="/test-series/neet">NEET UG</Link>
              <Link href="/test-series/jee-mains">JEE Mains</Link>
              <Link href="/test-series/bitsat">BITSAT</Link>
            </div>
            <div className={styles.linkColumn}>
              <h4>Legal</h4>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} TestSeries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
