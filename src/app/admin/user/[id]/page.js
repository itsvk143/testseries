'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import Navbar from '@/components/Navbar';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell
} from 'recharts';
import styles from '@/app/dashboard/dashboard.module.css';

export default function AdminUserDetail({ params }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const unwrappedParams = use(params);
    const { id: userId } = unwrappedParams;

    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const [stats, setStats] = useState({
        totalTests: 0,
        averageScore: 0,
        bestScore: 0,
        totalTimeTaken: 0,
        rank: 'N/A'
    });
    const [graphData, setGraphData] = useState({
        history: [],
        subjects: []
    });
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        } else if (status === 'authenticated' && !session?.user?.isAdmin) {
            router.push('/dashboard');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (session?.user?.isAdmin && userId) {
            fetchUserData();
        }
    }, [session, userId]);

    const fetchUserData = async () => {
        setLoading(true);
        try {
            // Fetch User Profile specifically using Admin route
            const profileRes = await fetch(`/api/admin/users/${userId}`);
            if (profileRes.ok) {
                const profileData = await profileRes.json();
                setUserProfile(profileData);
            } else {
                // If profile not found in DB (e.g., mock users like 'Astro Vikash' without real DB records)
                console.warn(`Profile ${userId} not found.`);
                setUserProfile({ name: 'Unknown Data Record', email: 'N/A', role: 'student' });
            }

            // Fetch User Test Results specifically using Admin route
            const resultsRes = await fetch(`/api/admin/users/${userId}/test-results`);
            if (resultsRes.ok) {
                const data = await resultsRes.json();
                setTestResults(data);

                // Calculate stats
                if (data.length > 0) {
                    const totalTests = data.length;
                    const averageScore = Math.round(data.reduce((sum, r) => sum + r.score, 0) / totalTests);

                    // Find best result
                    const bestResult = data.reduce((prev, current) => (prev.score > current.score) ? prev : current);
                    const bestScore = bestResult.score;
                    const bestTestId = bestResult.testId;
                    const bestTestExam = bestResult.examType;
                    const totalTimeTaken = data.reduce((sum, r) => sum + (r.timeTaken || 0), 0);

                    setStats({
                        totalTests,
                        averageScore,
                        bestScore,
                        totalTimeTaken,
                        bestTestId,
                        bestTestExam,
                        rank: bestResult.rank ? `${bestResult.rank} / ${bestResult.totalStudents}` : 'N/A'
                    });

                    // Prepare Graph Data
                    const historyGraph = [...data].reverse().map(r => ({
                        name: r.testId,
                        score: r.score,
                        date: new Date(r.attemptedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
                    }));

                    const subjectAgg = {};
                    data.forEach(r => {
                        if (r.subjectStats) {
                            Object.entries(r.subjectStats).forEach(([subj, stat]) => {
                                if (!subjectAgg[subj]) subjectAgg[subj] = { subject: subj, score: 0, total: 0 };
                                subjectAgg[subj].score += stat.score;
                                subjectAgg[subj].total += (stat.total * 4); 
                            });
                        }
                    });

                    const subjectGraph = Object.values(subjectAgg).map(s => ({
                        subject: s.subject,
                        score: s.score,
                        percentage: Math.round((s.score / s.total) * 100) || 0
                    }));

                    setGraphData({
                        history: historyGraph,
                        subjects: subjectGraph
                    });
                }
            } else {
                 console.warn(`Test results for ${userId} not found.`);
            }
        } catch (error) {
            console.error('Error fetching admin user detail data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading user details...</p>
            </div>
        );
    }

    if (!session?.user?.isAdmin || !userProfile) {
        return <div className={styles.error}>User not found or access denied.</div>;
    }

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return `${hrs}h ${mins}m`;
    };

    const handleToggleApproval = async () => {
        if (!userProfile) return;
        
        setActionLoading(true);
        const newStatus = !userProfile.isApproved;
        
        try {
            const res = await fetch(`/api/admin/users/${userId}/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isApproved: newStatus })
            });
            
            if (res.ok) {
                // Update local state without full refetch
                setUserProfile(prev => ({ ...prev, isApproved: newStatus }));
            } else {
                alert('Failed to update user approval status');
            }
        } catch (error) {
            console.error('Error toggling approval:', error);
            alert('An error occurred while updating the status.');
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.wrapper}>
                
                <button 
                    onClick={() => router.push('/dashboard')}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem'
                    }}
                >
                    &larr; Back to Directory
                </button>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '24px',
                    marginBottom: '24px'
                }}>
                    <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: userProfile.image ? `url(${userProfile.image}) center/cover` : '#818cf8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {!userProfile.image && (userProfile.name ? userProfile.name.charAt(0).toUpperCase() : '?')}
                        </div>
                        <div>
                            <h1 className={styles.welcomeText} style={{ margin: 0, fontSize: '1.8rem', color: 'white' }}>
                                {userProfile.name || 'Unknown User'}
                                {userProfile.role === 'admin' && <span style={{fontSize: '0.8rem', marginLeft: '10px', background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', padding: '4px 8px', borderRadius: '12px', verticalAlign: 'middle'}}>ADMIN</span>}
                            </h1>
                            <p className={styles.email} style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.7)' }}>{userProfile.email}</p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                Joined: {(() => {
                                    const d = new Date(userProfile.createdAt || userProfile.profileCompletedAt);
                                    return isNaN(d.getTime()) ? 'N/A' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
                                })()}
                            </p>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <button 
                                onClick={handleToggleApproval}
                                disabled={actionLoading || userProfile.role === 'admin'}
                                style={{
                                    background: userProfile.isApproved ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                                    color: userProfile.isApproved ? '#ef4444' : '#10b981',
                                    border: `1px solid ${userProfile.isApproved ? '#ef4444' : '#10b981'}`,
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    cursor: (actionLoading || userProfile.role === 'admin') ? 'not-allowed' : 'pointer',
                                    fontWeight: '600',
                                    opacity: (actionLoading || userProfile.role === 'admin') ? 0.5 : 1,
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                {actionLoading ? 'Updating...' : (userProfile.isApproved ? '🚫 Revoke Test Access' : '✅ Approve for Tests')}
                            </button>
                            {userProfile.role === 'admin' && <small style={{ display: 'block', textAlign: 'center', marginTop: '4px', color: '#94a3b8', fontSize: '0.75rem' }}>Admins bypass approval</small>}
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.5rem' }}>📋</span>
                        <h2 style={{ margin: 0, color: '#a78bfa', fontSize: '18px', fontWeight: '600' }}>
                            Profile Data
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Mobile Number</span>
                            <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.mobileNo || 'N/A'}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Preparing For</span>
                            <span style={{
                                color: '#c4b5fd',
                                fontSize: '14px',
                                fontWeight: '600',
                                background: 'rgba(124, 58, 237, 0.2)',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                display: 'inline-block'
                            }}>
                                {userProfile.examPreparingFor || 'N/A'}
                            </span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>School</span>
                            <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.schoolName || 'N/A'}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Coaching</span>
                            <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.coachingName || 'N/A'}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Location</span>
                            <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>
                                {userProfile.city && userProfile.state ? `${userProfile.city}, ${userProfile.state}` : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>📝</div>
                        <div className={styles.statValue}>{stats.totalTests}</div>
                        <div className={styles.statLabel}>Tests Taken</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>⭐</div>
                        <div className={styles.statValue}>{stats.bestScore}</div>
                        <div className={styles.statLabel}>Best Score</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>📊</div>
                        <div className={styles.statValue}>{stats.averageScore}</div>
                        <div className={styles.statLabel}>Average Score</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>⏱️</div>
                        <div className={styles.statValue}>{formatTime(stats.totalTimeTaken)}</div>
                        <div className={styles.statLabel}>Total Time</div>
                    </div>
                </div>

                {/* Test History */}
                <div className={styles.historySection} style={{ marginTop: '30px' }}>
                    <h2>Test History</h2>
                    {testResults.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p className={styles.emptyIcon}>📚</p>
                            <p className={styles.emptyText}>No tests taken yet by this user.</p>
                        </div>
                    ) : (
                        <div className={styles.historyList}>
                            {testResults.map((result, index) => {
                                const percentage = Math.round((result.score / result.totalMarks) * 100);
                                const date = new Date(result.attemptedAt).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                });

                                return (
                                    <div key={result._id || index} className={styles.historyItem}>
                                        <div className={styles.historyLeft}>
                                            <div className={styles.historyExam}>{result.examType?.toUpperCase()}</div>
                                            <div className={styles.historyTest}>{result.testId}</div>
                                            <div className={styles.historyDate}>{date}</div>
                                        </div>
                                        <div className={styles.historyStats}>
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel}>Rank</span>
                                                <span className={styles.historyStatValue}>
                                                    #{result.rank} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>/ {result.totalStudents}</span>
                                                </span>
                                            </div>
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel}>Score</span>
                                                <span className={styles.historyStatValue}>{result.score}/{result.totalMarks}</span>
                                            </div>
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel} style={{ color: '#22c55e' }}>Correct</span>
                                                <span className={styles.historyStatValue} style={{ color: '#22c55e' }}>{result.correctAnswers}</span>
                                            </div>
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel} style={{ color: '#ef4444' }}>Wrong</span>
                                                <span className={styles.historyStatValue} style={{ color: '#ef4444' }}>
                                                    {Object.keys(result.answers || {}).length - result.correctAnswers}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.historyRight}>
                                            <div className={`${styles.performanceBadge} ${percentage >= 75 ? styles.excellent : percentage >= 50 ? styles.good : styles.needsWork}`}>
                                                {percentage}%
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Performance Analytics */}
                {testResults.length > 0 && (
                    <div className={styles.analyticsSection} style={{ marginTop: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Analytics Overview</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                            {/* Score Trend */}
                            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
                                <h3 style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '1.1rem' }}>Score Trend</h3>
                                <div style={{ height: '300px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={graphData.history}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="name" stroke="#94a3b8" />
                                            <YAxis stroke="#94a3b8" />
                                            <Tooltip
                                                content={({ active, payload, label }) => {
                                                    if (active && payload && payload.length) {
                                                        const data = payload[0].payload;
                                                        return (
                                                            <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '10px', borderRadius: '4px', color: '#fff' }}>
                                                                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{data.date}</p>
                                                                <p style={{ fontWeight: 'bold' }}>{label}</p>
                                                                <p style={{ color: '#8b5cf6' }}>Score: {data.score}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Subject Performance */}
                            <div style={{ background: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid #334155' }}>
                                <h3 style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '1.1rem' }}>Subject Performance (%)</h3>
                                <div style={{ height: '300px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={graphData.subjects}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="subject" stroke="#94a3b8" />
                                            <YAxis stroke="#94a3b8" />
                                            <Tooltip
                                                contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                            />
                                            <Bar dataKey="percentage" fill="#10b981" radius={[4, 4, 0, 0]}>
                                                {graphData.subjects.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.percentage >= 75 ? '#10b981' : entry.percentage >= 50 ? '#f59e0b' : '#ef4444'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
