'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './TestCard.module.css';

// Fix #6 — session passed as prop instead of calling useSession() per card
const TestCard = ({ test, exam, session, layout = 'card' }) => {
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

    const isPT = test.id.includes('-SUNDAY-') || test.type === 'PART';
    const isCT = test.type === 'LIVE' && !isPT;
    const isSpecial = isPT || isCT;

    // Determine badge style
    let badgeClass = styles.badgeMock;
    if (test.type === 'PYQ') badgeClass = styles.badgePyq;
    if (isSpecial) badgeClass = ''; // Use inline style below

    return (
        <div className={`${styles.card} ${layout === 'list' ? styles.listView : ''}`}>
            <div className={layout === 'list' ? styles.mainInfo : ''}>
                <div className={styles.header}>
                    <span className={`${styles.badge} ${badgeClass}`} style={isSpecial ? { background: 'rgba(220, 38, 38, 0.1)', color: '#ef4444' } : {}}>
                        {isSpecial ? `${isPT ? 'PT' : 'CT'}${liveStatus ? ' • ' + liveStatus : ''}` : (test.type === 'MOCK' ? 'FULL' : test.type)}
                    </span>
                    <span className={styles.year}>
                        {test.year}{test.classGrade && test.classGrade !== 'All Test' ? ` • Class ${test.classGrade}` : ''}
                    </span>
                </div>
                <h3 className={styles.title}>{test.title}</h3>
                {test.description && (
                    <p className={styles.description} style={{ whiteSpace: 'pre-line', marginBottom: test.syllabus ? '0.75rem' : '0' }}>
                        {test.description}
                    </p>
                )}
                {test.syllabus && (
                    <div className={styles.description}>
                        <p style={{ marginBottom: '0.35rem', fontWeight: '600', fontSize: '0.8rem', color: 'var(--primary)' }}>
                            {test.type === 'SUBJECT' ? 'Chapters Covered:' : 'Part Syllabus Test covering:'}
                        </p>
                        {Object.entries(test.syllabus).map(([subject, chapters]) => (
                            <div key={subject} style={{ marginBottom: '0.25rem', fontSize: '0.82rem' }}>
                                {test.type !== 'SUBJECT' && <strong>{subject}: </strong>}
                                {chapters.join(', ')}.
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.meta}>
                    <span>{test.questionsCount === 'Subjective' ? 'Subjective' : `${test.questionsCount} Qs`}</span>
                    <span>•</span>
                    <span>{test.duration} Mins</span>
                    <span>•</span>
                    <span>{test.totalMarks} Marks</span>
                </div>
                {test.difficulty && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: '500' }}>
                        Difficulty: {test.difficulty === 'Mixed' ? 'Mixed (Easy + Medium + Hard)' : test.difficulty}
                    </div>
                )}
            </div>

            <div className={layout === 'list' ? styles.actionBlock : ''}>
            {isLive && liveStatus === 'UPCOMING' ? (
                <button disabled className={styles.button} style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed', background: 'var(--surface)' }}>
                    Starts: {formatDate(liveStart)}
                </button>
            ) : isLive && liveStatus === 'ENDED' ? (
                session ? (
                    <Link href={`/test-series/${exam}/${test.id}`} className={styles.button} style={{ width: '100%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Attempt
                    </Link>
                ) : (
                    <button onClick={handleClick} className={styles.button} style={{ width: '100%', background: '#334155' }}>
                        🔐 Sign In
                    </button>
                )
            ) : session ? (
                <Link href={`/test-series/${exam}/${test.id}`} className={styles.button} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isLive ? `🔴 Start ${isPT ? 'PT' : 'CT'} Test` : 'Start Test'}
                </Link>
            ) : (
                <button onClick={handleClick} className={styles.button} style={{ width: '100%' }}>
                    🔐 Sign In
                </button>
            )}
            </div>
        </div>
    );
};

export default TestCard;
