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
import {
    normalizeToCanonicalExam,
    getCanonicalExamDisplay,
    CANONICAL_EXAMS
} from '@/lib/authorization';

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
    const [editMode, setEditMode] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [saving, setSaving] = useState(false);

    // Controlled [Change Exam] state
    const [showChangeExamModal, setShowChangeExamModal] = useState(false);
    const [selectedNewExam, setSelectedNewExam] = useState('');
    const [changeExamReason, setChangeExamReason] = useState('');
    const [changingExam, setChangingExam] = useState(false);

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

    const handleSaveEdit = async () => {
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/users/${userId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm)
            });
            if (res.ok) {
                setUserProfile(prev => ({ ...prev, ...editForm }));
                setEditMode(false);
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to save changes');
            }
        } catch (e) {
            alert('An error occurred while saving.');
        } finally {
            setSaving(false);
        }
    };

    const handleChangeExam = async (e) => {
        e.preventDefault();
        if (!selectedNewExam) {
            alert('Please select an exam (NEET, JEE MAIN, or BITSAT).');
            return;
        }
        setChangingExam(true);
        try {
            const res = await fetch(`/api/admin/users/${userId}/change-exam`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    newExam: selectedNewExam,
                    reason: changeExamReason
                })
            });
            const data = await res.json();
            if (res.ok) {
                setUserProfile(prev => ({
                    ...prev,
                    exam: data.exam,
                    examPreparingFor: data.examPreparingFor
                }));
                setShowChangeExamModal(false);
                setSelectedNewExam('');
                setChangeExamReason('');
                alert(`Student's exam successfully changed to ${data.examPreparingFor}.`);
            } else {
                alert(data.error || 'Failed to change student exam.');
            }
        } catch (err) {
            alert('An error occurred while changing exam.');
        } finally {
            setChangingExam(false);
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
                                <span
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        marginLeft: '10px',
                                        background: userProfile.role === 'admin' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                                        color: userProfile.role === 'admin' ? '#a78bfa' : '#34d399',
                                        border: `1px solid ${userProfile.role === 'admin' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`,
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        verticalAlign: 'middle'
                                    }}
                                    title={userProfile.role === 'admin' ? 'Admin' : 'Student'}
                                >
                                    {userProfile.role === 'admin' ? 'A' : 'S'}
                                </span>
                            </h1>
                            <p className={styles.email} style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.7)' }}>{userProfile.email}</p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                Joined: {(() => {
                                    const d = new Date(userProfile.createdAt || userProfile.profileCompletedAt);
                                    return isNaN(d.getTime()) ? 'N/A' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
                                })()}
                            </p>
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
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
                            <button
                                onClick={() => {
                                    setSelectedNewExam(normalizeToCanonicalExam(userProfile.exam || userProfile.examPreparingFor) || 'NEET');
                                    setShowChangeExamModal(true);
                                }}
                                disabled={actionLoading || userProfile.role === 'admin'}
                                style={{
                                    background: 'rgba(245, 158, 11, 0.15)',
                                    color: '#fbbf24',
                                    border: '1px solid rgba(245, 158, 11, 0.4)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    cursor: (actionLoading || userProfile.role === 'admin') ? 'not-allowed' : 'pointer',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                🔄 Change Exam
                            </button>
                            <button
                                onClick={() => {
                                    setEditForm({
                                        name: userProfile.name || '',
                                        mobileNo: userProfile.mobileNo || '',
                                        studentClass: userProfile.studentClass || '',
                                        schoolName: userProfile.schoolName || '',
                                        coachingName: userProfile.coachingName || '',
                                        city: userProfile.city || '',
                                        state: userProfile.state || '',
                                        paymentStatus: userProfile.paymentStatus || 'PENDING',
                                    });
                                    setEditMode(e => !e);
                                }}
                                style={{
                                    background: editMode ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.2)',
                                    color: editMode ? '#94a3b8' : '#818cf8',
                                    border: `1px solid ${editMode ? '#475569' : '#6366f1'}`,
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                }}
                            >
                                {editMode ? '✕ Cancel Edit' : '✏️ Edit Profile'}
                            </button>
                            {userProfile.role === 'admin' && <small style={{ display: 'block', textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem' }}>Admins bypass approval</small>}
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.5rem' }}>📋</span>
                        <h2 style={{ margin: 0, color: '#a78bfa', fontSize: '18px', fontWeight: '600' }}>
                            Profile Data
                        </h2>
                    </div>

                    {editMode ? (
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                                {[
                                    { label: 'Full Name', key: 'name', type: 'text' },
                                    { label: 'Mobile Number', key: 'mobileNo', type: 'text' },
                                    { label: 'School', key: 'schoolName', type: 'text' },
                                    { label: 'Coaching', key: 'coachingName', type: 'text' },
                                    { label: 'City', key: 'city', type: 'text' },
                                    { label: 'State', key: 'state', type: 'text' },
                                ].map(({ label, key }) => (
                                    <label key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{label}</span>
                                        <input
                                            value={editForm[key] || ''}
                                            onChange={e => setEditForm(f => ({ ...f, [key]: e.target.value }))}
                                            style={{
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                borderRadius: '8px',
                                                padding: '8px 12px',
                                                color: 'white',
                                                fontSize: '14px',
                                                outline: 'none',
                                            }}
                                        />
                                    </label>
                                ))}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Class</span>
                                    <select
                                        value={editForm.studentClass || ''}
                                        onChange={e => setEditForm(f => ({ ...f, studentClass: e.target.value }))}
                                        style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', color: 'white', fontSize: '14px' }}
                                    >
                                        <option value="">Select</option>
                                        <option>Class 9</option>
                                        <option>Class 10</option>
                                        <option>Class 11</option>
                                        <option>Class 12</option>
                                        <option>12 Passed</option>
                                    </select>
                                </label>
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Payment Status</span>
                                    <select
                                        value={(editForm.paymentStatus === 'CONFIRMED' || editForm.paymentStatus === 'PAID') ? 'CONFIRMED' : (editForm.paymentStatus === 'REJECTED' || editForm.paymentStatus === 'NOT PAID') ? 'REJECTED' : 'PENDING'}
                                        onChange={e => setEditForm(f => ({ ...f, paymentStatus: e.target.value }))}
                                        style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', color: 'white', fontSize: '14px' }}
                                    >
                                        <option value="CONFIRMED">PAID</option>
                                        <option value="PENDING">PENDING</option>
                                        <option value="REJECTED">NOT PAID</option>
                                    </select>
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Enrolled Exam</span>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        color: '#c4b5fd',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <span>{getCanonicalExamDisplay(normalizeToCanonicalExam(userProfile.exam || userProfile.examPreparingFor)) || 'Not Set'}</span>
                                        <span style={{ fontSize: '0.75rem', color: '#fbbf24' }}>🔒 Use [Change Exam]</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleSaveEdit}
                                disabled={saving}
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '10px 28px',
                                    fontWeight: '700',
                                    cursor: saving ? 'not-allowed' : 'pointer',
                                    opacity: saving ? 0.7 : 1,
                                }}
                            >
                                {saving ? 'Saving...' : '💾 Save Changes'}
                            </button>
                        </div>
                    ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Mobile Number</span>
                            <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.mobileNo || 'N/A'}</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Class</span>
                            <span style={{ color: '#fbbf24', fontSize: '14px', fontWeight: '600', background: 'rgba(251,191,36,0.1)', padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>
                                {userProfile.studentClass || 'N/A'}
                            </span>
                        </div>
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Assigned Exam</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{
                                    color: '#c4b5fd',
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    background: 'rgba(124, 58, 237, 0.25)',
                                    border: '1px solid rgba(124, 58, 237, 0.4)',
                                    padding: '4px 12px',
                                    borderRadius: '8px',
                                    display: 'inline-block',
                                    letterSpacing: '0.5px'
                                }}>
                                    {getCanonicalExamDisplay(normalizeToCanonicalExam(userProfile.exam || userProfile.examPreparingFor)) || 'NOT SET'}
                                </span>
                                <button
                                    onClick={() => {
                                        setSelectedNewExam(normalizeToCanonicalExam(userProfile.exam || userProfile.examPreparingFor) || 'NEET');
                                        setShowChangeExamModal(true);
                                    }}
                                    style={{
                                        background: 'rgba(245, 158, 11, 0.15)',
                                        color: '#fbbf24',
                                        border: '1px solid rgba(245, 158, 11, 0.35)',
                                        borderRadius: '6px',
                                        padding: '4px 10px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        cursor: 'pointer'
                                    }}
                                >
                                    🔄 Change
                                </button>
                            </div>
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
                        <div>
                            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Payment Status</span>
                            {userProfile.role === 'admin' ? (
                                <span style={{ color: '#818cf8', fontWeight: 'bold', fontSize: '14px' }}>Exempt (Admin)</span>
                            ) : (() => {
                                const isPaid = userProfile.paymentStatus === 'CONFIRMED' || userProfile.paymentStatus === 'PAID';
                                const isRejected = userProfile.paymentStatus === 'REJECTED' || userProfile.paymentStatus === 'NOT PAID';
                                return (
                                    <span style={{
                                        color: isPaid ? '#10b981' : isRejected ? '#ef4444' : '#f59e0b',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        background: isPaid ? 'rgba(16, 185, 129, 0.15)' : isRejected ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                                        border: `1px solid ${isPaid ? 'rgba(16, 185, 129, 0.3)' : isRejected ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                                        padding: '4px 12px',
                                        borderRadius: '8px',
                                        display: 'inline-block'
                                    }}>
                                        {isPaid ? 'PAID' : isRejected ? 'NOT PAID' : 'PENDING'}
                                    </span>
                                );
                            })()}
                        </div>
                    </div>
                    )}
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

            {/* Controlled Admin [Change Exam] Modal */}
            {showChangeExamModal && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1100,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
                }}>
                    <div style={{
                        background: '#1e293b', borderRadius: '18px', padding: '30px',
                        width: '100%', maxWidth: '520px', border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)', position: 'relative'
                    }}>
                        <button
                            onClick={() => setShowChangeExamModal(false)}
                            style={{
                                position: 'absolute', top: '16px', right: '16px',
                                background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
                                width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer',
                                fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >✕</button>

                        <h2 style={{ marginTop: 0, marginBottom: '8px', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.3rem' }}>
                            <span>⚠️</span> Change Student Exam
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>
                            Student: <strong style={{ color: 'white' }}>{userProfile.name}</strong> ({userProfile.email})
                        </p>

                        <div style={{
                            background: 'rgba(245, 158, 11, 0.1)',
                            border: '1px solid rgba(245, 158, 11, 0.35)',
                            borderRadius: '10px',
                            padding: '14px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ color: '#fbbf24', fontWeight: '700', fontSize: '0.9rem', marginBottom: '4px' }}>
                                Confirmation Warning
                            </div>
                            <div style={{ color: '#fef3c7', fontSize: '0.85rem', lineHeight: '1.5', fontStyle: 'italic' }}>
                                &ldquo;Changing the student&apos;s exam will change which test series this student can access.&rdquo;
                            </div>
                        </div>

                        <form onSubmit={handleChangeExam}>
                            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>
                                SELECT NEW EXAM (ONE EXAM ONLY):
                            </label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                                {[
                                    { id: 'NEET', label: 'NEET' },
                                    { id: 'JEE_MAIN', label: 'JEE MAIN' },
                                    { id: 'BITSAT', label: 'BITSAT' }
                                ].map(opt => {
                                    const isChecked = selectedNewExam === opt.id;
                                    return (
                                        <label
                                            key={opt.id}
                                            style={{
                                                border: `2px solid ${isChecked ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
                                                background: isChecked ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.03)',
                                                borderRadius: '10px',
                                                padding: '12px 10px',
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="newExamRadio"
                                                value={opt.id}
                                                checked={isChecked}
                                                onChange={() => setSelectedNewExam(opt.id)}
                                                style={{ accentColor: '#f59e0b', width: '16px', height: '16px' }}
                                            />
                                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: isChecked ? '#fbbf24' : 'white' }}>
                                                {opt.label}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>

                            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '6px' }}>
                                Reason for Change (Recorded in Admin Audit Log):
                            </label>
                            <input
                                type="text"
                                value={changeExamReason}
                                onChange={e => setChangeExamReason(e.target.value)}
                                placeholder="e.g. Student selected wrong exam during registration"
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    marginBottom: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />

                            <div style={{
                                fontSize: '0.75rem',
                                color: '#94a3b8',
                                lineHeight: '1.4',
                                marginBottom: '20px',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                paddingTop: '12px'
                            }}>
                                🔒 <strong>Preservation:</strong> Changing the exam will <strong>NOT</strong> delete test results, test attempts, or student history. Access boundary will immediately apply to the newly selected exam.
                            </div>

                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => setShowChangeExamModal(false)}
                                    style={{
                                        background: 'rgba(255,255,255,0.08)',
                                        color: '#e2e8f0',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '10px 18px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={changingExam || !selectedNewExam}
                                    style={{
                                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                        color: '#0f172a',
                                        border: 'none',
                                        padding: '10px 22px',
                                        borderRadius: '8px',
                                        cursor: (changingExam || !selectedNewExam) ? 'not-allowed' : 'pointer',
                                        fontWeight: '800',
                                        fontSize: '0.85rem',
                                        opacity: (changingExam || !selectedNewExam) ? 0.6 : 1
                                    }}
                                >
                                    {changingExam ? 'Updating...' : 'Confirm & Change Exam'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
