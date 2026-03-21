import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            The Ultimate <span className={styles.highlight}>Test Series</span> Platform
          </h1>
          <p className={styles.description}>
            Prepare for NEET, JEE Mains, and JEE Advanced with our premium mock tests and previous year question papers.
            Real-time analysis, comprehensive solutions, and more.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/test-series/neet" className={styles.primaryButton}>
              Explore NEET
            </Link>
            <Link href="/test-series/jee-mains" className={styles.secondaryButton}>
              Explore JEE Mains
            </Link>
            <Link href="/test-series/jee-advance" className={styles.secondaryButton}>
              Explore JEE Advance
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
