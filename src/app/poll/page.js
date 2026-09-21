'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function PollPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [meta, setMeta] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [chaptersData, setChaptersData] = useState(null);
    const [loadingChapters, setLoadingChapters] = useState(false);
    const [chaptersCache, setChaptersCache] = useState({});

    // SWR / Instant initial render: read from sessionStorage immediately
    useEffect(() => {
        try {
            const cached = sessionStorage.getItem('poll_meta_cache');
            if (cached) {
                const parsed = JSON.parse(cached);
                setMeta(parsed);
                setLoading(false);
            }
        } catch (e) {}

        fetchMeta();
    }, []);

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin?callbackUrl=/poll');
        }
    }, [status]);

    const fetchMeta = async () => {
        try {
            const res = await fetch('/api/poll/meta');
            if (res.status === 401) {
                router.push('/auth/signin?callbackUrl=/poll');
                return;
            }
            const data = await res.json();
            if (res.ok) {
                setMeta(data);
                try {
                    sessionStorage.setItem('poll_meta_cache', JSON.stringify(data));
                } catch (e) {}
                // Background preload subject chapter data so clicks are instantaneous
                if (data?.subjects?.length) {
                    data.subjects.forEach((sub, idx) => {
                        setTimeout(() => handlePreloadSubject(sub.name), (idx + 1) * 300);
                    });
                }
            }
        } catch (err) {
            console.error('Failed to load poll meta:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectSubject = async (subjectName) => {
        setSelectedSubject(subjectName);

        // Instant render if in memory cache!
        if (chaptersCache[subjectName]) {
            setChaptersData(chaptersCache[subjectName]);
            return;
        }

        setLoadingChapters(true);
        try {
            const res = await fetch(`/api/poll/meta?subject=${encodeURIComponent(subjectName)}`);
            const data = await res.json();
            setChaptersData(data);
            setChaptersCache(prev => ({ ...prev, [subjectName]: data }));
        } catch (err) {
            console.error('Failed to load subject chapters:', err);
        } finally {
            setLoadingChapters(false);
        }
    };

    const handlePreloadSubject = (subjectName) => {
        if (chaptersCache[subjectName]) return;
        fetch(`/api/poll/meta?subject=${encodeURIComponent(subjectName)}`)
            .then(res => res.json())
            .then(data => {
                if (data?.chapters) {
                    setChaptersCache(prev => ({ ...prev, [subjectName]: data }));
                }
            })
            .catch(() => {});
    };

    const handleBackToSubjects = () => {
        setSelectedSubject(null);
        setChaptersData(null);
        fetchMeta(); // Refresh counts in background
    };

    if ((status === 'loading' || loading) && !meta) {
        return (
            <div className={styles.container}>
                <Navbar />
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner} />
                    <p>Loading Poll Practice...</p>
                </div>
            </div>
        );
    }

    // Access requirement gate: Paid test series required
    if (meta && !meta.hasPaidAccess) {
        return (
            <div className={styles.container}>
                <Navbar />
                <div className={styles.header}>
                    <div className={styles.badge}>🗳️ CHAPTER POLLS</div>
                    <h1 className={styles.title}>Poll Practice</h1>
                    <p className={styles.subtitle}>
                        Short, high-yield chapter-wise practice tests with instant analysis.
                    </p>
                </div>
                <div className={styles.content}>
                    <div className={styles.accessDeniedCard}>
                        <div className={styles.accessDeniedIcon}>🔒</div>
                        <h2 className={styles.accessDeniedTitle}>Access Restricted</h2>
                        <p className={styles.accessDeniedText}>
                            Poll Practice is available only for students enrolled in a paid test series.
                        </p>
                        <Link href="/test-series" className={styles.viewTestSeriesBtn}>
                            View Test Series
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.header}>
                <div className={styles.badge}>
                    ⚡ {meta?.exam || 'TEST'} POLL PRACTICE
                </div>
                <h1 className={styles.title}>Chapter Polls</h1>
                <p className={styles.subtitle}>
                    20 Questions • 30 Minutes • +4 / 0 Marking • Zero Negative Marking
                </p>
                <div className={styles.pollLegend}>
                    <span className={styles.legendItem}>
                        <span className={styles.legendDot} style={{ background: '#ffffff', boxShadow: '0 0 6px rgba(255,255,255,0.4)' }} />
                        <span>White: Standard</span>
                    </span>
                    <span className={styles.legendItem}>
                        <span className={styles.legendDot} style={{ background: '#facc15', boxShadow: '0 0 6px rgba(250,204,21,0.5)' }} />
                        <span style={{ color: '#facc15', fontWeight: '600' }}>Yellow: 20 Assertion–Reasoning</span>
                    </span>
                    <span className={styles.legendItem}>
                        <span className={styles.legendDot} style={{ background: '#fb923c', boxShadow: '0 0 6px rgba(251,146,60,0.5)' }} />
                        <span style={{ color: '#fb923c', fontWeight: '600' }}>Orange: 20 Difficult Level</span>
                    </span>
                </div>
            </div>

            <div className={styles.content}>
                {!selectedSubject ? (
                    /* Step 1: Subject Selection */
                    <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: '#e2e8f0' }}>
                            Select Subject
                        </h2>
                        <div className={styles.subjectGrid}>
                            {meta?.subjects?.map(sub => (
                                <div
                                    key={sub.name}
                                    className={styles.subjectCard}
                                    onClick={() => handleSelectSubject(sub.name)}
                                    onMouseEnter={() => handlePreloadSubject(sub.name)}
                                    onTouchStart={() => handlePreloadSubject(sub.name)}
                                >
                                    <span className={styles.subjectIcon}>{sub.icon}</span>
                                    <span className={styles.subjectName}>{sub.name}</span>
                                    <span className={styles.subjectCompleted}>
                                        {sub.completedPolls} Completed
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Step 2: Chapters & Polls Listing */
                    <div>
                        <div className={styles.subHeader}>
                            <button onClick={handleBackToSubjects} className={styles.backBtn}>
                                &larr; Choose Another Subject
                            </button>
                            <div className={styles.currentSubjectTitle}>
                                <span>{selectedSubject}</span>
                                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>
                                    ({chaptersData?.chapters?.length || 0} Chapters)
                                </span>
                            </div>
                        </div>

                        {loadingChapters ? (
                            <div className={styles.loadingContainer}>
                                <div className={styles.spinner} />
                                <p>Loading chapters for {selectedSubject}...</p>
                            </div>
                        ) : (
                            <div className={styles.chapterList}>
                                {chaptersData?.chapters?.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                                        No chapters found for {selectedSubject}.
                                    </div>
                                ) : (
                                    chaptersData?.chapters?.map(ch => (
                                        <div key={ch.chapter} className={styles.chapterCard}>
                                            <div className={styles.chapterHeader}>
                                                <div className={styles.chapterTitle}>{ch.chapter}</div>
                                                <div className={styles.chapterMeta}>
                                                    {ch.hasPolls ? (
                                                        <span>{ch.totalPolls} {ch.totalPolls === 1 ? 'Poll' : 'Polls'} Available ({ch.totalQuestions} Questions)</span>
                                                    ) : (
                                                        <span>{ch.totalQuestions} Questions</span>
                                                    )}
                                                </div>
                                            </div>

                                            {ch.hasPolls ? (
                                                <div className={styles.pollsGrid}>
                                                    {ch.polls.map(p => {
                                                        let colorClass = '';
                                                        let pollTitle = `Poll ${p.pollNumber}`;
                                                        if (p.colorType === 'yellow') {
                                                            colorClass = styles.pollBtnYellow;
                                                            pollTitle = `Poll ${p.pollNumber} • 20 Assertion–Reasoning Questions`;
                                                        } else if (p.colorType === 'orange') {
                                                            colorClass = styles.pollBtnOrange;
                                                            pollTitle = `Poll ${p.pollNumber} • 20 Difficult-Level Questions`;
                                                        }

                                                        return (
                                                            <Link
                                                                key={p.pollNumber}
                                                                href={`/poll/take?subject=${encodeURIComponent(selectedSubject)}&chapter=${encodeURIComponent(ch.chapter)}&poll=${p.pollNumber}`}
                                                                className={`${styles.pollBtn} ${p.completed ? styles.pollBtnCompleted : ''} ${colorClass}`}
                                                                title={pollTitle}
                                                            >
                                                                <span>Poll {p.pollNumber}</span>
                                                                {p.completed && (
                                                                    <span className={styles.completedCheck}>✓ Completed</span>
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div className={styles.incompleteNotice}>
                                                    {ch.totalQuestions === 0 
                                                        ? 'No Poll is currently available for this chapter.'
                                                        : 'Poll will be available once 20 questions are available for this chapter.'}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
