'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const LatexRenderer = dynamic(() => import('@/components/LatexRenderer'), {
    ssr: false,
    loading: () => <span style={{ opacity: 0.6 }}>Loading content...</span>
});

function PollTestContent() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();

    const subject = searchParams.get('subject');
    const chapter = searchParams.get('chapter');
    const pollNumber = parseInt(searchParams.get('poll') || '1', 10);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pollData, setPollData] = useState(null);

    // Test Taking State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { [qId]: 'a'|'b'|'c'|'d' }
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Result State
    const [resultData, setResultData] = useState(null);

    const timerRef = useRef(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
            return;
        }

        if (status === 'authenticated') {
            if (!subject || !chapter) {
                setError('Missing subject or chapter parameter.');
                setLoading(false);
                return;
            }
            loadQuestions();
        }
    }, [status, subject, chapter, pollNumber]);

    // Timer countdown
    useEffect(() => {
        if (!pollData || resultData || timeLeft <= 0) return;

        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    handleAutoSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [pollData, resultData]);

    const loadQuestions = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/poll/questions?subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(chapter)}&poll=${pollNumber}`);
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Failed to load questions.');
            } else {
                setPollData(data);
            }
        } catch (err) {
            setError('An error occurred while loading the poll questions.');
        } finally {
            setLoading(false);
        }
    };

    const handleSelectOption = (optionId) => {
        if (resultData) return; // Readonly if already submitted
        const qId = pollData.questions[currentIndex].id;
        setAnswers(prev => ({
            ...prev,
            [qId]: optionId
        }));
    };

    const handleClearOption = () => {
        if (resultData) return;
        const qId = pollData.questions[currentIndex].id;
        setAnswers(prev => {
            const updated = { ...prev };
            delete updated[qId];
            return updated;
        });
    };

    const handleAutoSubmit = async () => {
        if (submitting || resultData) return;
        submitPoll(true);
    };

    const submitPoll = async (isAuto = false) => {
        setSubmitting(true);
        clearInterval(timerRef.current);

        const timeTakenSeconds = 1800 - timeLeft;

        try {
            const res = await fetch('/api/poll/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subject,
                    chapter,
                    pollNumber,
                    answers,
                    timeTakenSeconds
                })
            });

            const data = await res.json();
            if (res.ok) {
                setResultData(data);
                setShowSubmitModal(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert(data.error || 'Submission failed. Please try again.');
            }
        } catch (err) {
            console.error('Error submitting poll:', err);
            alert('An unexpected error occurred while submitting.');
        } finally {
            setSubmitting(false);
        }
    };

    const formatTimer = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <Navbar />
                <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#94a3b8' }}>
                    <div className={styles.spinner} />
                    <p>Loading Poll {pollNumber} for {chapter}...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <Navbar />
                <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚠️</div>
                    <h2 style={{ color: '#f87171', marginBottom: '1rem' }}>Unable to Open Poll</h2>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>{error}</p>
                    <Link href="/poll" className={styles.primaryActionBtn}>
                        &larr; Back to Poll Practice
                    </Link>
                </div>
            </div>
        );
    }

    const currentQ = pollData?.questions?.[currentIndex];
    const answeredCount = Object.keys(answers).length;
    const unattemptedCount = (pollData?.questions?.length || 20) - answeredCount;

    // ==========================================================
    // 1. RESULT VIEW (Rendered immediately after submission)
    // ==========================================================
    if (resultData) {
        const { summary, questionsWithAnalysis } = resultData;

        return (
            <div className={styles.container}>
                <Navbar />

                <div style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.5rem' }}>
                    {/* Header Summary Banner */}
                    <div className={styles.resultHeader}>
                        <div className={styles.pollBadge}>
                            {subject} • {chapter}
                        </div>
                        <h1 className={styles.resultTitle}>Poll {pollNumber} Result</h1>
                        <p className={styles.resultSubtitle}>
                            Completed in {summary.timeTakenFormatted} • Standard +4 / 0 Marking Scheme
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal}>{summary.totalQuestions}</div>
                                <div className={styles.statCardLabel}>Total Questions</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal} style={{ color: '#818cf8' }}>
                                    {summary.attempted}
                                </div>
                                <div className={styles.statCardLabel}>Attempted</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal} style={{ color: '#34d399' }}>
                                    {summary.correct}
                                </div>
                                <div className={styles.statCardLabel}>Correct</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal} style={{ color: '#f87171' }}>
                                    {summary.wrong}
                                </div>
                                <div className={styles.statCardLabel}>Wrong</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal} style={{ color: '#94a3b8' }}>
                                    {summary.unattempted}
                                </div>
                                <div className={styles.statCardLabel}>Unattempted</div>
                            </div>
                            <div className={styles.statCard} style={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}>
                                <div className={styles.statCardVal} style={{ color: '#c084fc' }}>
                                    {summary.marksObtained} / {summary.maxMarks}
                                </div>
                                <div className={styles.statCardLabel}>Marks Obtained</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statCardVal} style={{ color: '#38bdf8' }}>
                                    {summary.accuracy}%
                                </div>
                                <div className={styles.statCardLabel}>Accuracy</div>
                            </div>
                        </div>

                        <div className={styles.resultButtons}>
                            <Link href="/poll" className={styles.primaryActionBtn}>
                                ⚡ Take Another Poll
                            </Link>
                            <Link href="/dashboard" className={styles.secondaryActionBtn}>
                                📊 Back to Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Question-Wise Analysis Table */}
                    <h2 className={styles.sectionTitle}>Question Analysis</h2>
                    <div className={styles.analysisTableCard}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Q.No.</th>
                                    <th>Your Answer</th>
                                    <th>Correct Answer</th>
                                    <th>Result</th>
                                    <th style={{ textAlign: 'right' }}>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questionsWithAnalysis.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ fontWeight: '700' }}>#{item.index}</td>
                                        <td style={{ fontWeight: '700' }}>{item.studentAnswer}</td>
                                        <td style={{ fontWeight: '700', color: '#34d399' }}>{item.correctAnswer}</td>
                                        <td>
                                            {item.result === 'Correct' && <span className={styles.correctTag}>✓ Correct</span>}
                                            {item.result === 'Wrong' && <span className={styles.wrongTag}>✗ Wrong</span>}
                                            {item.result === 'Unattempted' && <span className={styles.unattemptedTag}>— Unattempted</span>}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: '700' }}>
                                            {item.marks > 0 ? `+${item.marks}` : '0'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Detailed Question & Explanation Review */}
                    <h2 className={styles.sectionTitle}>Answer & Explanation Review</h2>
                    <div className={styles.reviewList}>
                        {questionsWithAnalysis.map((item) => (
                            <div key={item.id} className={styles.reviewCard}>
                                <div className={styles.reviewCardHeader}>
                                    <span className={styles.reviewQNumber}>Question {item.index} of 20</span>
                                    <div>
                                        {item.result === 'Correct' && <span className={styles.correctTag}>✓ Correct (+4 Marks)</span>}
                                        {item.result === 'Wrong' && <span className={styles.wrongTag}>✗ Wrong (0 Marks)</span>}
                                        {item.result === 'Unattempted' && <span className={styles.unattemptedTag}>— Unattempted (0 Marks)</span>}
                                    </div>
                                </div>

                                <div style={{ fontSize: '1.05rem', color: '#f1f5f9', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                                    <LatexRenderer text={item.text} />
                                </div>

                                {item.image && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <img src={item.image} alt="Question Diagram" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                                    </div>
                                )}

                                <div className={styles.reviewOptions}>
                                    {item.options.map(opt => {
                                        const isCorrect = opt.id.toUpperCase() === item.correctAnswer;
                                        const isStudentChoice = opt.id.toUpperCase() === item.studentAnswer;

                                        let optClass = styles.reviewOption;
                                        if (isCorrect) optClass += ` ${styles.reviewOptionCorrect}`;
                                        else if (isStudentChoice && !isCorrect) optClass += ` ${styles.reviewOptionWrongStudent}`;

                                        return (
                                            <div key={opt.id} className={optClass}>
                                                <span style={{ fontWeight: '700', width: '24px' }}>{opt.label}.</span>
                                                <div style={{ flex: 1 }}>
                                                    <LatexRenderer text={opt.text} />
                                                </div>
                                                {isCorrect && <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: '700' }}>✓ Correct Option</span>}
                                                {isStudentChoice && !isCorrect && <span style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: '700' }}>Your Choice</span>}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className={styles.explanationBox}>
                                    <div className={styles.explanationTitle}>💡 Explanation</div>
                                    <div className={styles.explanationText}>
                                        <LatexRenderer text={item.explanation} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/poll" className={styles.primaryActionBtn}>
                            ⚡ Return to Poll Practice
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // ==========================================================
    // 2. TEST TAKING VIEW
    // ==========================================================
    return (
        <div className={styles.container}>
            {/* Top Control Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarInner}>
                    <div className={styles.testInfo}>
                        <span className={styles.pollBadge}>{subject} • POLL {pollNumber}</span>
                        <span className={styles.chapterTitle}>{chapter}</span>
                    </div>

                    <div className={`${styles.timerBox} ${timeLeft < 300 ? styles.timerWarning : ''}`}>
                        <span>⏱️</span>
                        <span>{formatTimer(timeLeft)}</span>
                    </div>

                    <button
                        onClick={() => setShowSubmitModal(true)}
                        className={styles.submitBtn}
                    >
                        Submit Poll
                    </button>
                </div>
            </div>

            <div className={styles.mainLayout}>
                {/* Question Panel */}
                <div className={styles.questionPanel}>
                    <div className={styles.questionMeta}>
                        <span className={styles.qIndexBadge}>
                            Question {currentIndex + 1} of {pollData.questions.length}
                        </span>
                        <span className={styles.markingBadge}>+4 Marks / No Negative</span>
                    </div>

                    <div className={styles.questionBody}>
                        <LatexRenderer text={currentQ.text} />
                        {currentQ.image && (
                            <div style={{ marginTop: '1rem' }}>
                                <img src={currentQ.image} alt="Question Visual" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                            </div>
                        )}
                    </div>

                    <div className={styles.optionsGrid}>
                        {currentQ.options.map((opt) => {
                            const isSelected = answers[currentQ.id] === opt.id;
                            return (
                                <div
                                    key={opt.id}
                                    className={`${styles.optionCard} ${isSelected ? styles.optionCardSelected : ''}`}
                                    onClick={() => handleSelectOption(opt.id)}
                                >
                                    <div className={styles.optionLabel}>{opt.label}</div>
                                    <div className={styles.optionText}>
                                        <LatexRenderer text={opt.text} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.navActions}>
                        <button
                            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentIndex === 0}
                            className={styles.prevBtn}
                        >
                            &larr; Previous
                        </button>

                        {answers[currentQ.id] && (
                            <button onClick={handleClearOption} className={styles.clearBtn}>
                                Clear Selection
                            </button>
                        )}

                        <button
                            onClick={() => setCurrentIndex(prev => Math.min(pollData.questions.length - 1, prev + 1))}
                            disabled={currentIndex === pollData.questions.length - 1}
                            className={styles.nextBtn}
                        >
                            Next &rarr;
                        </button>
                    </div>
                </div>

                {/* Sidebar Question Palette */}
                <div className={styles.sidebar}>
                    <div className={styles.palettePanel}>
                        <h3 className={styles.paletteTitle}>Question Palette</h3>
                        <div className={styles.paletteGrid}>
                            {pollData.questions.map((q, idx) => {
                                const isAnswered = !!answers[q.id];
                                const isCurrent = currentIndex === idx;

                                let itemClass = styles.paletteItem;
                                if (isAnswered) itemClass += ` ${styles.paletteItemAnswered}`;
                                if (isCurrent) itemClass += ` ${styles.paletteItemCurrent}`;

                                return (
                                    <div
                                        key={q.id}
                                        className={itemClass}
                                        onClick={() => setCurrentIndex(idx)}
                                    >
                                        {idx + 1}
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.paletteLegend}>
                            <div className={styles.legendItem}>
                                <div className={styles.legendDot} style={{ background: '#34d399' }} />
                                <span>Answered ({answeredCount})</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={styles.legendDot} style={{ background: '#64748b' }} />
                                <span>Unanswered ({unattemptedCount})</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={styles.legendDot} style={{ border: '2px solid #a855f7' }} />
                                <span>Current Question</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Confirmation Modal */}
            {showSubmitModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>Submit Poll?</h3>
                        <div className={styles.modalStats}>
                            <div className={styles.modalStatItem}>
                                <span className={styles.modalStatVal} style={{ color: '#34d399' }}>{answeredCount}</span>
                                <span className={styles.modalStatLabel}>Attempted</span>
                            </div>
                            <div className={styles.modalStatItem}>
                                <span className={styles.modalStatVal} style={{ color: '#94a3b8' }}>{unattemptedCount}</span>
                                <span className={styles.modalStatLabel}>Unattempted</span>
                            </div>
                            <div className={styles.modalStatItem}>
                                <span className={styles.modalStatVal} style={{ color: '#c084fc' }}>{formatTimer(timeLeft)}</span>
                                <span className={styles.modalStatLabel}>Time Left</span>
                            </div>
                        </div>

                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Are you sure you want to submit this Poll? You will immediately see your result and answers with explanations.
                        </p>

                        <div className={styles.modalActions}>
                            <button
                                onClick={() => setShowSubmitModal(false)}
                                disabled={submitting}
                                className={styles.modalCancelBtn}
                            >
                                Continue Test
                            </button>
                            <button
                                onClick={() => submitPoll(false)}
                                disabled={submitting}
                                className={styles.modalConfirmBtn}
                            >
                                {submitting ? 'Submitting...' : 'Confirm Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function PollTestPage() {
    return (
        <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>Loading poll...</div>}>
            <PollTestContent />
        </Suspense>
    );
}
