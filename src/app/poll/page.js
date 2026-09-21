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

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin?callbackUrl=/poll');
            return;
        }

        if (status === 'authenticated') {
            fetchMeta();
        }
    }, [status]);

    const fetchMeta = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/poll/meta');
            const data = await res.json();
            setMeta(data);
        } catch (err) {
            console.error('Failed to load poll meta:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectSubject = async (subjectName) => {
        setSelectedSubject(subjectName);
        setLoadingChapters(true);
        try {
            const res = await fetch(`/api/poll/meta?subject=${encodeURIComponent(subjectName)}`);
            const data = await res.json();
            setChaptersData(data);
        } catch (err) {
            console.error('Failed to load subject chapters:', err);
        } finally {
            setLoadingChapters(false);
        }
    };

    const handleBackToSubjects = () => {
        setSelectedSubject(null);
        setChaptersData(null);
        fetchMeta(); // Refresh counts
    };

    if (status === 'loading' || loading) {
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
                                                    {ch.polls.map(p => (
                                                        <Link
                                                            key={p.pollNumber}
                                                            href={`/poll/take?subject=${encodeURIComponent(selectedSubject)}&chapter=${encodeURIComponent(ch.chapter)}&poll=${p.pollNumber}`}
                                                            className={`${styles.pollBtn} ${p.completed ? styles.pollBtnCompleted : ''}`}
                                                        >
                                                            <span>Poll {p.pollNumber}</span>
                                                            {p.completed && (
                                                                <span className={styles.completedCheck}>✓ Completed</span>
                                                            )}
                                                        </Link>
                                                    ))}
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
