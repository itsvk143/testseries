import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';

export default function TestSeriesHome() {
    const categories = [
        {
            id: 'neet',
            title: 'NEET',
            desc: 'National Eligibility cum Entrance Test. Practice with 10+ Mocks & 10 Years PYQs.',
            color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
        },
        {
            id: 'jee-mains',
            title: 'JEE Mains',
            desc: 'Joint Entrance Examination Main. Ace your prep with our comprehensive test series.',
            color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
        },
        {
            id: 'jee-advance',
            title: 'JEE Advance',
            desc: 'The toughest engineering entrance exam. Challenge yourself with advanced level problems.',
            color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            id: 'cuet',
            title: 'CUET',
            desc: 'Common University Entrance Test. High quality mocks for central universities admission.',
            color: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
        },
        {
            id: 'bitsat',
            title: 'BITSAT',
            desc: 'Birla Institute of Technology and Science Admission Test. Mocks with English & Logical Reasoning.',
            color: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
        }
    ];

    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.heroTitle}>Master Your Exams</h1>
                <p className={styles.heroSubtitle}>Premium Test Series for India's Top Competitive Exams</p>

                <div className={styles.grid}>
                    {categories.map(cat => (
                        <Link href={`/test-series/${cat.id}`} key={cat.id} className={styles.card} style={{ background: cat.color }}>
                            <h2>{cat.title}</h2>
                            <p>{cat.desc}</p>
                            <div className={styles.arrow}>→</div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
