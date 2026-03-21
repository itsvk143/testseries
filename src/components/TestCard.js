'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './TestCard.module.css';

const TestCard = ({ test, exam }) => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleClick = (e) => {
        if (!session) {
            e.preventDefault();
            router.push('/auth/signin?callbackUrl=' + encodeURIComponent(`/test-series/${exam}/${test.id}`));
        }
    };

    const isLive = test.type === 'LIVE';
    const now = new Date();
    const liveStart = isLive ? new Date(test.liveStart) : null;
    const liveEnd = isLive ? new Date(test.liveEnd) : null;
    
    let liveStatus = null; // 'UPCOMING', 'ACTIVE', 'ENDED'
    if (isLive) {
        if (now < liveStart) liveStatus = 'UPCOMING';
        else if (now >= liveStart && now <= liveEnd) liveStatus = 'ACTIVE';
        else liveStatus = 'ENDED';
    }

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    };

    // Determine badge style
    let badgeClass = styles.badgeMock;
    if (test.type === 'PYQ') badgeClass = styles.badgePyq;
    if (test.type === 'LIVE') badgeClass = ''; // Inline style for live

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={`${styles.badge} ${badgeClass}`} style={isLive ? { background: 'rgba(220, 38, 38, 0.1)', color: '#ef4444' } : {}}>
                    {isLive ? `LIVE • ${liveStatus}` : test.type}
                </span>
                <span className={styles.year}>{test.year}</span>
            </div>
            <h3 className={styles.title}>{test.title}</h3>
            {test.syllabus ? (
                <div className={styles.description}>
                    <p style={{ marginBottom: '0.5rem' }}>Part Syllabus Test covering:</p>
                    {Object.entries(test.syllabus).map(([subject, chapters]) => (
                        <div key={subject} style={{ marginBottom: '0.25rem' }}>
                            <strong>{subject}:</strong> {chapters.join(', ')}.
                        </div>
                    ))}
                </div>
            ) : (
                <p className={styles.description} style={{ whiteSpace: 'pre-line' }}>{test.description}</p>
            )}
            <div className={styles.meta}>
                <span>{test.questionsCount} Qs</span>
                <span>•</span>
                <span>{test.duration} Mins</span>
                <span>•</span>
                <span>{test.totalMarks} Marks</span>
            </div>
            {isLive && liveStatus === 'UPCOMING' ? (
                <button disabled className={styles.button} style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed', background: 'var(--surface)' }}>
                    Starts: {formatDate(liveStart)}
                </button>
            ) : isLive && liveStatus === 'ENDED' ? (
                session ? (
                    <Link href={`/test-series/${exam}/${test.id}`} className={styles.button} style={{ width: '100%', background: '#334155' }}>
                        Attempt (Past Window)
                    </Link>
                ) : (
                    <button onClick={handleClick} className={styles.button} style={{ width: '100%', background: '#334155' }}>
                        🔐 Sign In to Attempt
                    </button>
                )
            ) : session ? (
                <Link href={`/test-series/${exam}/${test.id}`} className={styles.button}>
                    {isLive ? '🔴 Start Live Test' : 'Start Test'}
                </Link>
            ) : (
                <button onClick={handleClick} className={styles.button} style={{ width: '100%' }}>
                    🔐 Sign In to Start {isLive ? 'Live Test ' : ''}
                </button>
            )}
        </div>
    );
};

export default TestCard;
