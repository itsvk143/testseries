'use client';
import { useState, useEffect, use, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../../components/Navbar';
import { getTestById, getQuestionsForTest } from '../../../../data/testService';
import styles from './page.module.css';
import LatexRenderer from '../../../../components/LatexRenderer';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function TestPage({ params }) {
    console.log("TestPage: Component rendering");
    const unwrappedParams = use(params);
    const { exam, testId } = unwrappedParams;
    console.log("TestPage: Params resolved:", exam, testId);

    const { data: session, status } = useSession();
    const router = useRouter();

    const [test, setTest] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedForReview, setMarkedForReview] = useState({});
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [expandedPalette, setExpandedPalette] = useState({});
    const [viewMode, setViewMode] = useState('TEST'); // TEST, ANALYSIS, REVIEW
    const [hasStarted, setHasStarted] = useState(false);
    const [timeSpent, setTimeSpent] = useState({}); // { questionId: seconds }
    const [rank, setRank] = useState('N/A');
    const [totalRankStudents, setTotalRankStudents] = useState(0);
    const [liveRank, setLiveRank] = useState('N/A');
    const [totalLiveStudents, setTotalLiveStudents] = useState(0);
    const [isLiveAttempt, setIsLiveAttempt] = useState(false);
    const startTimeRef = useRef(null);

    // Authentication check - redirect if not logged in or if admin
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin?callbackUrl=' + encodeURIComponent(window.location.pathname));
        }
        // Admins should see the admin test view, not take the test
        if (status === 'authenticated' && session?.user?.isAdmin) {
            router.push(`/admin/test-preview?testId=${testId}&exam=${exam}`);
        }
    }, [status, session, router, testId, exam]);

    // Check profile completion and load existing result
    useEffect(() => {
        const checkProfileAndResult = async () => {
            if (status === 'authenticated') {
                try {
                    // Check profile
                    const res = await fetch('/api/user/profile');
                    const data = await res.json();
                    if (!data.profileCompleted) {
                        alert('Please complete your profile first to start the test.');
                        localStorage.removeItem('profileSkipped');
                        router.push('/dashboard');
                        return;
                    }
                    
                    // Granular per-type access check (unless user is admin)
                    if (!session?.user?.isAdmin) {
                        const defaultApprovals = { mock: true, live: true, pyq: true, subject: true, chapter: true };
                        const approvals = data.approvals || defaultApprovals;

                        // Determine test type from testId pattern
                        const testIdUpper = testId.toUpperCase();
                        let requiredKey = null;
                        if (testIdUpper.includes('-LIVE-'))     requiredKey = 'live';
                        else if (testIdUpper.includes('-PYQ-')) requiredKey = 'pyq';
                        else if (testIdUpper.includes('-CHAPTER-')) requiredKey = 'chapter';
                        else if (testIdUpper.includes('-SUBJECT-')) requiredKey = 'subject';
                        else if (testIdUpper.includes('-MOCK-')) requiredKey = 'mock';

                        if (requiredKey && !approvals[requiredKey]) {
                            const typeLabels = { mock: 'Mock Tests', live: 'Live Tests', pyq: 'PYQ Tests', subject: 'Subject-wise Tests', chapter: 'Chapter-wise Tests' };
                            alert(`You do not have access to ${typeLabels[requiredKey]}. Please contact your administrator.`);
                            router.push('/dashboard');
                            return;
                        }

                        // Fallback: if no approvals object at all, treat new users as fully approved
                    }

                    // Check for existing test result
                    const resultRes = await fetch(`/api/test-results?testId=${testId}`);
                    const resultData = await resultRes.json();
                    if (resultData && resultData.length > 0) {
                        const lastAttempt = resultData[0];
                        console.log("Found existing attempt:", lastAttempt);

                        // CRITICAL: Use the questions snapshot from the attempt
                        const attemptQuestions = lastAttempt.questions || getQuestionsForTest(testId);

                        // Re-calculate score using the CORRECT questions snapshot
                        let calculatedScore = 0;
                        if (attemptQuestions && lastAttempt.answers) {
                            attemptQuestions.forEach(q => {
                                if (lastAttempt.answers[q.id] === q.correctOption) {
                                    calculatedScore += 4;
                                } else if (lastAttempt.answers[q.id]) {
                                    calculatedScore -= 1;
                                }
                            });
                        }

                        // Update State with Snapshot Data
                        setQuestions(attemptQuestions); // Override default load
                        setAnswers(lastAttempt.answers || {});
                        setScore(calculatedScore);
                        setTimeSpent(lastAttempt.timeSpent || {});
                        setSubmitted(true);
                        setHasStarted(true);
                        setIsLiveAttempt(lastAttempt.isLiveAttempt || false);
                        setViewMode('ANALYSIS');

                        // Fetch Rank with re-calculated score
                        try {
                            const rankRes = await fetch('/api/rank', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ testId: testId, score: calculatedScore })
                            });
                            if (rankRes.ok) {
                                const rankData = await rankRes.json();
                                setRank(rankData.globalRank || rankData.rank);
                                setTotalRankStudents(rankData.totalGlobalStudents || rankData.totalStudents);
                                setLiveRank(rankData.liveRank);
                                setTotalLiveStudents(rankData.totalLiveStudents);
                            }
                        } catch (e) {
                            console.error("Error fetching rank:", e);
                        }
                    }
                } catch (error) {
                    console.error('Error checking profile or result:', error);
                }
            }
        };

        if (status === 'authenticated') {
            checkProfileAndResult();
        }
    }, [status, router, testId]);

    // Load test metadata
    useEffect(() => {
        console.log("TestPage: useEffect for test loading triggered");
        const testData = getTestById(testId);
        console.log("TestPage: Test data received:", testData);
        if (testData) {
            setTest(testData);
            setTimeLeft(testData.duration * 60); // convert minutes to seconds
        }
    }, [testId]);

    // Load questions
    useEffect(() => {
        console.log("TestPage: useEffect for questions loading triggered");
        const questionsData = getQuestionsForTest(testId);
        console.log("TestPage: Questions count:", questionsData?.length);
        setQuestions(questionsData || []);

        // Auto-expand first subject in palette
        if (questionsData && questionsData.length > 0) {
            const firstSubject = questionsData[0].subject;
            setExpandedPalette({ [firstSubject]: true });
        }
    }, [testId]);

    // Timer countdown
    useEffect(() => {
        if (!hasStarted || submitted || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [hasStarted, submitted, timeLeft]);

    // Track time per question
    useEffect(() => {
        if (!hasStarted || submitted) return;

        startTimeRef.current = Date.now();

        return () => {
            if (startTimeRef.current) {
                const end = Date.now();
                const diff = (end - startTimeRef.current) / 1000;
                const qId = questions[currentQuestionIndex]?.id;
                if (qId) {
                    setTimeSpent(prev => ({
                        ...prev,
                        [qId]: (prev[qId] || 0) + diff
                    }));
                }
            }
        };
    }, [currentQuestionIndex, hasStarted, submitted, questions]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const togglePalette = (subject) => {
        setExpandedPalette(prev => ({
            ...prev,
            [subject]: !prev[subject]
        }));
    };

    const handleOptionSelect = (questionId, optionId) => {
        if (submitted) return; // Don't allow changes after submission
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionId
        }));
    };

    const handleSubmit = async () => {
        // Calculate final time for current question before processing results
        let finalTimeSpent = { ...timeSpent };
        if (startTimeRef.current) {
            const end = Date.now();
            const diff = (end - startTimeRef.current) / 1000;
            const qId = questions[currentQuestionIndex]?.id;
            if (qId) {
                finalTimeSpent[qId] = (finalTimeSpent[qId] || 0) + diff;
            }
        }
        setTimeSpent(finalTimeSpent);

        let calculatedScore = 0;
        let correctCount = 0;
        let incorrectCount = 0;
        let unattemptedCount = 0;

        questions.forEach(q => {
            if (!answers[q.id]) {
                unattemptedCount++;
            } else if (answers[q.id] === q.correctOption) {
                calculatedScore += 4;
                correctCount++;
            } else {
                calculatedScore -= 1;
                incorrectCount++;
            }
        });

        // Calculate subject-wise stats
        const subjectStats = {};
        questions.forEach(q => {
            if (!subjectStats[q.subject]) subjectStats[q.subject] = { subject: q.subject, total: 0, attempted: 0, correct: 0, score: 0, time: 0 };
            const s = subjectStats[q.subject];
            s.total++;
            s.time += (finalTimeSpent[q.id] || 0);
            if (answers[q.id]) {
                s.attempted++;
                if (answers[q.id] === q.correctOption) {
                    s.correct++;
                    s.score += 4;
                } else {
                    s.score -= 1;
                }
            }
        });

        // Check if within Live Window
        let finalIsLiveAttempt = false;
        if (test.type === 'LIVE') {
            const now = new Date();
            const start = new Date(test.liveStart);
            const end = new Date(test.liveEnd);
            finalIsLiveAttempt = now >= start && now <= end;
        }
        setIsLiveAttempt(finalIsLiveAttempt);

        setScore(calculatedScore);
        setSubmitted(true);
        setViewMode('ANALYSIS');

        // Save result to database
        try {
            const initialTime = test.duration * 60;
            const timeTaken = initialTime - timeLeft;

            // Check if within Live Window
            let isLiveAttempt = true;
            if (test.type === 'LIVE') {
                const now = new Date();
                const start = new Date(test.liveStart);
                const end = new Date(test.liveEnd);
                isLiveAttempt = now >= start && now <= end;
            }

            await fetch('/api/test-results', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: testId,
                    examType: exam,
                    score: calculatedScore,
                    totalMarks: test.totalMarks,
                    answers: answers,
                    questions: questions,
                    timeTaken: timeTaken,
                    subjectStats: subjectStats,
                    timeSpent: finalTimeSpent,
                    isLiveAttempt: isLiveAttempt
                })
            });

            // Fetch Rank immediately after submission
            try {
                const rankRes = await fetch('/api/rank', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ testId: testId, score: calculatedScore })
                });
                if (rankRes.ok) {
                    const rankData = await rankRes.json();
                    setRank(rankData.globalRank || rankData.rank);
                    setTotalRankStudents(rankData.totalGlobalStudents || rankData.totalStudents);
                    setLiveRank(rankData.liveRank);
                    setTotalLiveStudents(rankData.totalLiveStudents);
                }
            } catch (e) {
                console.error("Error fetching rank:", e);
            }
        } catch (error) {
            console.error('Error saving test result:', error);
        }
    };

    // ... existing formatTime

    if (!test || questions.length === 0) return <div className={styles.loading}>Loading Test...</div>;

    if (!hasStarted) {
        return <InstructionView exam={exam} onStart={() => setHasStarted(true)} onBack={() => router.back()} test={test} />;
    }

    if (viewMode === 'ANALYSIS') {
        const totalQuestions = questions.length;
        const attempted = Object.keys(answers).length;
        const accuracy = attempted > 0 ? Math.round((questions.filter(q => answers[q.id] === q.correctOption).length / attempted) * 100) : 0;

        // Calculate subject-wise analysis
        const subjectStats = {};
        questions.forEach(q => {
            if (!subjectStats[q.subject]) subjectStats[q.subject] = {
                subject: q.subject,
                total: 0,
                attempted: 0,
                correct: 0,
                score: 0,
                time: 0,
                correctTime: 0,
                incorrectTime: 0
            };
            const s = subjectStats[q.subject];
            const t = timeSpent[q.id] || 0;
            s.total++;
            s.time += t;
            if (answers[q.id]) {
                s.attempted++;
                if (answers[q.id] === q.correctOption) {
                    s.correct++;
                    s.score += 4;
                    s.correctTime += t;
                } else {
                    s.score -= 1;
                    s.incorrectTime += t;
                }
            }
        });

        // Prepare Graph Data
        const subjectGraphData = Object.values(subjectStats).map(s => {
            const totalMarks = s.total * 4;
            return {
                subject: s.subject,
                score: s.score,
                totalMarks: totalMarks,
                fullMarkObj: s
            };
        });

        return (
            <div className={styles.container} style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>Test Analysis</h1>
                
                {test.type === 'LIVE' && !isLiveAttempt && (
                    <div style={{ 
                        background: 'rgba(239, 68, 68, 0.1)', 
                        border: '1px solid #ef4444', 
                        color: '#ef4444', 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>
                        <strong>Note:</strong> You missed the official live performance window. This result is for your practice.
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
                    <div className={styles.card} style={{ textAlign: 'center', padding: '1.5rem', background: '#1e293b', borderRadius: '12px' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>SCORE</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb' }}>{score} <span style={{ fontSize: '1rem', color: '#aaa' }}>/ {test.totalMarks}</span></div>
                    </div>
                    <div className={styles.card} style={{ textAlign: 'center', padding: '1.5rem', background: '#1e293b', borderRadius: '12px' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>ACCURACY</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e' }}>{accuracy}%</div>
                    </div>
                    <div className={styles.card} style={{ textAlign: 'center', padding: '1.5rem', background: '#1e293b', borderRadius: '12px' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>ATTEMPTED</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>{attempted} <span style={{ fontSize: '1rem', color: '#aaa' }}>/ {totalQuestions}</span></div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
                    {/* Rank Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                        padding: '24px',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 20px rgba(79, 70, 229, 0.3)'
                    }}>
                        <h3 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '10px' }}>Your Ranking</h3>
                        <div style={{ display: 'flex', gap: '40px', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fff' }}>
                                    {rank} <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>/ {totalRankStudents}</span>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Global Rank</p>
                            </div>
                            {totalLiveStudents > 0 && (
                                <div>
                                    <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fbbf24' }}>
                                        {liveRank} <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>/ {totalLiveStudents}</span>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Live Window Rank</p>
                                </div>
                            )}
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', textAlign: 'center', fontSize: '0.85rem' }}>
                            {totalLiveStudents > 0 ? "Live Rank is calculated against original window participants only." : "Global Rank includes all students who took this test."}
                        </p>
                    </div>

                    {/* Subject Graph */}
                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
                        <h3 style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '1.1rem' }}>Subject Performance (Score)</h3>
                        <div style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={subjectGraphData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis dataKey="subject" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                        content={({ active, payload, label }) => {
                                            if (active && payload && payload.length) {
                                                const data = payload[0].payload;
                                                return (
                                                    <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '10px', borderRadius: '4px', color: '#fff' }}>
                                                        <p style={{ fontWeight: 'bold' }}>{label}</p>
                                                        <p>Score: <span style={{ color: data.score > 0 ? '#10b981' : '#ef4444' }}>{data.score}</span> / {data.totalMarks}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <Bar dataKey="score" fill="#94a3b8" radius={[4, 4, 0, 0]}>
                                        {subjectGraphData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.score > 0 ? '#10b981' : entry.score < 0 ? '#ef4444' : '#94a3b8'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>Subject-wise Performance</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155' }}>
                                    <th style={{ padding: '10px' }}>Subject</th>
                                    <th style={{ padding: '10px' }}>Score</th>
                                    <th style={{ padding: '10px' }}>Attempted</th>
                                    <th style={{ padding: '10px' }}>Correct</th>
                                    <th style={{ padding: '10px' }}>Incorrect</th>
                                    <th style={{ padding: '10px' }}>Unattempted</th>
                                    <th style={{ padding: '10px' }}>Accuracy</th>
                                    <th style={{ padding: '10px' }}>Time Taken</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(subjectStats).map(([subj, items]) => (
                                    <tr key={subj} style={{ borderBottom: '1px solid #334155' }}>
                                        <td style={{ padding: '15px 10px' }}>{subj}</td>
                                        <td style={{ padding: '15px 10px', fontWeight: 'bold', color: items.score > 0 ? '#22c55e' : (items.score < 0 ? '#ef4444' : '#fff') }}>{items.score}</td>
                                        <td style={{ padding: '15px 10px' }}>{items.attempted} / {items.total}</td>
                                        <td style={{ padding: '15px 10px', color: '#22c55e' }}>{items.correct}</td>
                                        <td style={{ padding: '15px 10px', color: '#ef4444' }}>{items.attempted - items.correct}</td>
                                        <td style={{ padding: '15px 10px', color: '#94a3b8' }}>{items.total - items.attempted}</td>
                                        <td style={{ padding: '15px 10px' }}>{items.attempted > 0 ? Math.round((items.correct / items.attempted) * 100) : 0}%</td>
                                        <td style={{ padding: '15px 10px' }}>{formatTime(Math.round(items.time || 0))}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Time Analysis Table */}
                <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>Time Analysis</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155' }}>
                                    <th style={{ padding: '10px' }}>Type</th>
                                    <th style={{ padding: '10px' }}>Questions</th>
                                    <th style={{ padding: '10px' }}>Total Time</th>
                                    <th style={{ padding: '10px' }}>Avg Time/Q</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(() => {
                                    let correctTime = 0, incorrectTime = 0, unattemptedTime = 0;
                                    let correctCount = 0, incorrectCount = 0, unattemptedCount = 0;

                                    questions.forEach(q => {
                                        const t = timeSpent[q.id] || 0;
                                        if (!answers[q.id]) {
                                            unattemptedCount++;
                                            unattemptedTime += t;
                                        } else if (answers[q.id] === q.correctOption) {
                                            correctCount++;
                                            correctTime += t;
                                        } else {
                                            incorrectCount++;
                                            incorrectTime += t;
                                        }
                                    });

                                    const rows = [
                                        { label: 'Correct', count: correctCount, time: correctTime, color: '#22c55e' },
                                        { label: 'Incorrect', count: incorrectCount, time: incorrectTime, color: '#ef4444' },
                                        { label: 'Unattempted', count: unattemptedCount, time: unattemptedTime, color: '#94a3b8' }
                                    ];

                                    return rows.map(row => (
                                        <tr key={row.label} style={{ borderBottom: '1px solid #334155' }}>
                                            <td style={{ padding: '15px 10px', color: row.color, fontWeight: 'bold' }}>{row.label}</td>
                                            <td style={{ padding: '15px 10px' }}>{row.count}</td>
                                            <td style={{ padding: '15px 10px' }}>{formatTime(Math.round(row.time))}</td>
                                            <td style={{ padding: '15px 10px' }}>{row.count > 0 ? formatTime(Math.round(row.time / row.count)) : '00:00:00'}</td>
                                        </tr>
                                    ));
                                })()}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Subject-wise Time Analysis Table */}
                <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>Subject-wise Time Analysis</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155' }}>
                                    <th style={{ padding: '10px' }}>Subject</th>
                                    <th style={{ padding: '10px' }}>Total Time</th>
                                    <th style={{ padding: '10px' }}>Time on Correct</th>
                                    <th style={{ padding: '10px' }}>Time on Incorrect</th>
                                    <th style={{ padding: '10px' }}>Avg Time/Q</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(subjectStats).map(([subj, items]) => (
                                    <tr key={subj} style={{ borderBottom: '1px solid #334155' }}>
                                        <td style={{ padding: '15px 10px' }}>{subj}</td>
                                        <td style={{ padding: '15px 10px' }}>{formatTime(Math.round(items.time || 0))}</td>
                                        <td style={{ padding: '15px 10px', color: '#22c55e' }}>{formatTime(Math.round(items.correctTime || 0))}</td>
                                        <td style={{ padding: '15px 10px', color: '#ef4444' }}>{formatTime(Math.round(items.incorrectTime || 0))}</td>
                                        <td style={{ padding: '15px 10px' }}>{items.attempted > 0 ? formatTime(Math.round(items.time / items.attempted)) : '00:00:00'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => setViewMode('REVIEW')}
                        className={styles.submitBtn}
                        style={{ background: '#2563eb' }}
                    >
                        Review Solutions
                    </button>
                    <button
                        onClick={() => window.location.href = `/test-series/${exam}`}
                        className={styles.submitBtn}
                        style={{ background: '#334155' }}
                    >
                        Back to Test Series
                    </button>
                </div>
            </div>
        );
    }

    // Check profile completion status


    // Show loading while checking authentication
    if (status === 'loading') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', color: 'var(--foreground)' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐</div>
                    <div style={{ fontSize: '1.2rem' }}>Checking authentication...</div>
                </div>
            </div>
        );
    }


    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className={styles.container}>
            <div className={styles.testHeader}>
                <div>
                    {/* If Review Mode, show simple Header */}
                    <h2>{test.title} {viewMode === 'REVIEW' && <span style={{ fontSize: '0.8em', color: '#fbbf24' }}>(Review Mode)</span>}</h2>
                    <span className={styles.examTag}>{exam.toUpperCase()}</span>
                </div>
                {!submitted && <div className={styles.timer}>Time Left: {formatTime(timeLeft)}</div>}
                {submitted && viewMode === 'REVIEW' && (
                    <button
                        onClick={() => setViewMode('ANALYSIS')}
                        style={{ padding: '5px 10px', background: '#334155', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}
                    >
                        Back to Analysis
                    </button>
                )}
                {/* Score is shown in Analysis page now, header score optional */}
            </div>

            <div className={styles.content}>
                {/* ... existing sidebar and question area logic ... */}
                <div className={styles.sidebar}>
                    <h3>Question Palette</h3>
                    <div className={styles.paletteContainer}>
                        {[...new Set(questions.map(q => q.subject))].map(subject => {
                            const subjectQuestions = questions.filter(q => q.subject === subject);
                            const isOpen = expandedPalette[subject];

                            return (
                                <div key={subject} style={{ marginBottom: '10px' }}>
                                    <div
                                        onClick={() => togglePalette(subject)}
                                        style={{
                                            padding: '8px',
                                            background: 'rgba(255,255,255,0.05)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            borderRadius: '4px',
                                            marginBottom: '5px'
                                        }}
                                    >
                                        <strong>{subject}</strong>
                                        <span>{isOpen ? '▲' : '▼'}</span>
                                    </div>

                                    {isOpen && (
                                        <div className={styles.paletteGrid}>
                                            {subjectQuestions.map((q) => {
                                                const globalIndex = questions.findIndex(quest => quest.id === q.id);
                                                return (
                                                    <button
                                                        key={q.id}
                                                        onClick={() => setCurrentQuestionIndex(globalIndex)}
                                                        className={`${styles.paletteBtn} ${currentQuestionIndex === globalIndex ? styles.active : ''}`}
                                                        style={{
                                                            backgroundColor: submitted
                                                                ? (answers[q.id] === q.correctOption ? '#22c55e' : (answers[q.id] ? '#ef4444' : 'rgba(255,255,255,0.1)'))
                                                                : (
                                                                    currentQuestionIndex === globalIndex ? '#2563eb' :
                                                                        (markedForReview[q.id] ? '#7c3aed' : (answers[q.id] ? '#22c55e' : 'rgba(255,255,255,0.1)'))
                                                                ),
                                                            position: 'relative',
                                                            border: currentQuestionIndex === globalIndex ? '2px solid white' : 'none'
                                                        }}
                                                    >
                                                        {globalIndex + 1}
                                                        {markedForReview[q.id] && answers[q.id] && (
                                                            <span style={{
                                                                position: 'absolute', bottom: '2px', right: '2px', width: '6px', height: '6px',
                                                                borderRadius: '50%', background: '#22c55e', border: '1px solid white'
                                                            }} />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    {!submitted && (
                        <button className={styles.submitBtn} onClick={handleSubmit}>Submit Test</button>
                    )}
                    {submitted && (
                        <button className={styles.submitBtn} onClick={() => window.location.href = `/test-series/${exam}`}>Back to List</button>
                    )}
                </div>

                <div className={styles.questionArea}>
                    <div className={styles.questionHeader}>
                        <span>Question {currentQuestionIndex + 1}</span>
                        <span className={styles.subjectTag}>{currentQuestion.subject}</span>
                    </div>

                    <div className={styles.questionText}>
                        <LatexRenderer text={currentQuestion.text} />
                        {currentQuestion.image && <img src={currentQuestion.image} alt="Question Diagram" style={{ maxWidth: '100%', marginTop: '1rem', borderRadius: '8px' }} />}
                    </div>

                    <div className={styles.options}>
                        {currentQuestion.options.map(opt => (
                            <div
                                key={opt.id}
                                className={`${styles.option} 
                  ${answers[currentQuestion.id] === opt.id ? styles.selected : ''}
                  ${submitted && opt.id === currentQuestion.correctOption ? styles.correctOption : ''}
                  ${submitted && answers[currentQuestion.id] === opt.id && opt.id !== currentQuestion.correctOption ? styles.wrongOption : ''}
                `}
                                onClick={() => handleOptionSelect(currentQuestion.id, opt.id)}
                            >
                                <span className={styles.optionKey}>{opt.id.toUpperCase()}</span>
                                <div style={{ width: '100%' }}>
                                    <span><LatexRenderer text={opt.text} /></span>
                                    {opt.image && <img src={opt.image} alt="Option" style={{ maxWidth: '100px', display: 'block', marginTop: '0.5rem', borderRadius: '4px' }} />}
                                </div>
                            </div>
                        ))}
                    </div>

                    {submitted && (
                        <div className={styles.explanation}>
                            <h4>Explanation:</h4>
                            <p><LatexRenderer text={currentQuestion.explanation} /></p>
                        </div>
                    )}

                    <div className={styles.navigation} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                        <button
                            className={`${styles.navBtn} ${styles.secondary}`}
                            disabled={currentQuestionIndex === 0}
                            onClick={() => setCurrentQuestionIndex(curr => curr - 1)}
                            style={{
                                background: 'transparent',
                                border: '1px solid #ddd',
                                color: '#fff',
                                opacity: currentQuestionIndex === 0 ? 0.5 : 1,
                                cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
                            }}
                        >
                            Previous
                        </button>
                        <button
                            className={`${styles.navBtn} ${styles.secondary}`} // Assuming secondary style exists or fallback to default
                            onClick={() => {
                                const qId = currentQuestion.id;
                                const newAnswers = { ...answers };
                                delete newAnswers[qId];
                                setAnswers(newAnswers);
                            }}
                            style={{ background: 'transparent', border: '1px solid #ddd', color: '#fff' }}
                        >
                            Clear Response
                        </button>
                        <button
                            className={styles.navBtn}
                            onClick={() => {
                                const qId = currentQuestion.id;
                                setMarkedForReview(prev => {
                                    const next = { ...prev };
                                    if (next[qId]) delete next[qId];
                                    else next[qId] = true;
                                    return next;
                                });
                                // Optional: Move to next
                                if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(curr => curr + 1);
                            }}
                            style={{ background: '#7c3aed', color: 'white' }}
                        >
                            Mark for Review & Next
                        </button>
                        <button
                            className={styles.navBtn}
                            style={{ background: '#2563eb', flex: 1 }}
                            onClick={() => {
                                // Save logic is implicitly handled by state, just move next
                                // "Save" implies confirming the answer.
                                // We can remove "Mark for Review" status if "Save" is clicked?
                                // Usually "Save & Next" means "I am done with this".
                                if (markedForReview[currentQuestion.id]) {
                                    // Optional: Auto-unmark on explicit save? 
                                    // NTA logic: Answered & Marked is VALID for evaluation.
                                    // So we don't necessarily unmark.
                                }
                                if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(curr => curr + 1);
                            }}
                        >
                            Save & Next
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

const InstructionView = ({ exam, onStart, onBack, test }) => {
    const isNeet = exam.toLowerCase().includes('neet');
    const isJeeMains = exam.toLowerCase().includes('jee-mains');
    const isJeeAdv = exam.toLowerCase().includes('jee-advance');

    return (
        <div className={styles.container} style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <button
                    onClick={onBack}
                    style={{
                        padding: '0.5rem 1rem',
                        background: 'transparent',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        color: '#cbd5e1',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    ← Back
                </button>
                <button
                    onClick={onStart}
                    className={styles.submitBtn}
                    style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}
                >
                    Start Test
                </button>
            </div>

            <h1 className={styles.title} style={{ marginBottom: '1rem' }}>General Instructions</h1>
            <h3 style={{ color: '#aaa', marginBottom: '2rem' }}>{test.title}</h3>

            <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', lineHeight: '1.8' }}>
                <p><strong>Total Duration:</strong> {test.duration} Minutes</p>
                <p><strong>Total Questions:</strong> {test.questionsCount}</p>
                <p><strong>Total Marks:</strong> {test.totalMarks}</p>
                <br />

                {/* Show Syllabus for Part Tests */}
                {test.syllabus && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>Syllabus Covered:</h4>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                            {Object.entries(test.syllabus).map(([subject, chapters]) => (
                                <div key={subject} style={{ marginBottom: '0.5rem' }}>
                                    <strong style={{ color: '#94a3b8' }}>{subject}:</strong> <span style={{ color: '#fff' }}>{chapters.join(', ')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isNeet && (
                    <>
                        <h4>NEET Exam Instructions:</h4>
                        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>The test contains 180 questions: Physics (45), Chemistry (45), Botany (45), Zoology (45).</li>
                            <li>Each question carries 4 marks.</li>
                            <li>For each incorrect answer, 1 mark will be deducted.</li>
                            <li>Unattempted questions will be awarded 0 marks.</li>
                            <li>You can navigate to any question using the Question Palette.</li>
                        </ul>
                    </>
                )}

                {isJeeMains && (
                    <>
                        <h4>JEE Mains Exam Instructions:</h4>
                        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>The test contains 75 questions: Physics (25), Chemistry (25), Mathematics (25).</li>
                            <li>Each subject has two sections: Section A (MCQ) and Section B (Numerical).</li>
                            <li>Section A carries 4 marks for correct answer and -1 for wrong answer.</li>
                            <li>Section B usually has no negative marking (check specific paper rules).</li>
                            <li>Use the palette to switch between questions.</li>
                        </ul>
                    </>
                )}

                {isJeeAdv && (
                    <>
                        <h4>JEE Advanced Exam Instructions:</h4>
                        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>The paper pattern changes every year. Please check specific question instructions carefully.</li>
                            <li>Marking scheme may include partial marking, negative marking, or zero negative marking.</li>
                            <li>Subjects: Physics, Chemistry, Mathematics.</li>
                            <li>Ensure you save your answer before moving to the next question.</li>
                        </ul>
                    </>
                )}

                {!isNeet && !isJeeMains && !isJeeAdv && (
                    <>
                        <h4>General Instructions:</h4>
                        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>All questions are compulsory unless specified otherwise.</li>
                            <li>Use the question palette on the right to navigate.</li>
                            <li>Click 'Submit Test' only when you have finished completely.</li>
                        </ul>
                    </>
                )}

                <br />
                <p style={{ color: '#fbbf24' }}><strong>Note:</strong> Once you click "Start Test", the timer will begin immediately.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={onStart}
                    className={styles.submitBtn}
                    style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                >
                    I have read the instructions. Start Test
                </button>
            </div>
        </div>
    );
};
