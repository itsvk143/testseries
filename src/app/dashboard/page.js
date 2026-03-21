'use client';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import ProfileCompletion from '../../components/ProfileCompletion';
import AdminUserList from '../../components/AdminUserList';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Cell
} from 'recharts';
import styles from './dashboard.module.css';

export default function Dashboard() {
    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const { data: session, status } = useSession();
    const router = useRouter();
    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showProfileCompletion, setShowProfileCompletion] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [editLoading, setEditLoading] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [stats, setStats] = useState({
        totalTests: 0,
        averageScore: 0,
        bestScore: 0,
        totalTimeTaken: 0,
        rank: 'N/A',
        liveRank: 'N/A'
    });
    const [graphData, setGraphData] = useState({
        history: [],
        subjects: []
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        }
    }, [status, router]);

    const [profileSkipped, setProfileSkipped] = useState(false);

    // Load skip state from localStorage on mount
    useEffect(() => {
        const skipped = localStorage.getItem('profileSkipped') === 'true';
        setProfileSkipped(skipped);
    }, []);

    useEffect(() => {
        if (session?.user) {
            fetchUserProfile();
            fetchTestResults();
        }
    }, [session]);

    const fetchUserProfile = async () => {
        try {
            const res = await fetch('/api/user/profile');
            if (res.ok) {
                const data = await res.json();
                if (data.profileCompleted) {
                    setUserProfile(data);
                    setEditForm({
                        name: data.name || '',
                        mobileNo: data.mobileNo || '',
                        schoolName: data.schoolName || '',
                        coachingName: data.coachingName || '',
                        city: data.city || '',
                        state: data.state || '',
                        examPreparingFor: data.examPreparingFor || '',
                    });
                } else {
                    setUserProfile(null);
                }
                const skipped = localStorage.getItem('profileSkipped') === 'true';
                if (!data.profileCompleted && !skipped) {
                    setShowProfileCompletion(true);
                }
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const fetchTestResults = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/test-results');
            const data = await res.json();
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


                // Calculate Real Rank
                let rankDisplay = 'N/A';
                try {
                    const rankRes = await fetch('/api/rank', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ testId: bestTestId, score: bestScore })
                    });
                    if (rankRes.ok) {
                        const rankData = await rankRes.json();
                        rankDisplay = `${rankData.rank} / ${rankData.totalStudents}`;
                    }
                } catch (e) {
                    console.error('Failed to fetch rank:', e);
                }

                setStats({
                    totalTests,
                    averageScore,
                    bestScore,
                    totalTimeTaken,
                    bestTestId,
                    bestTestExam,
                    rank: `${rankData.globalRank || rankData.rank} / ${rankData.totalGlobalStudents || rankData.totalStudents}`,
                    liveRank: (rankData.totalLiveStudents > 0) ? `${rankData.liveRank} / ${rankData.totalLiveStudents}` : 'N/A'
                });

                // Prepare Graph Data
                // 1. Score History (Reverse for chronological order)
                const historyGraph = [...data].reverse().map(r => ({
                    name: r.testId,
                    score: r.score,
                    date: new Date(r.attemptedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
                }));

                // 2. Subject Performance
                const subjectAgg = {};
                data.forEach(r => {
                    if (r.subjectStats) {
                        Object.entries(r.subjectStats).forEach(([subj, stat]) => {
                            if (!subjectAgg[subj]) subjectAgg[subj] = { subject: subj, score: 0, total: 0 };
                            subjectAgg[subj].score += stat.score;
                            subjectAgg[subj].total += (stat.total * 4); // Assuming 4 marks per q
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
        } catch (error) {
            console.error('Error fetching results:', error);
        } finally {
            setLoading(false);
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading your dashboard...</p>
            </div>
        );
    }

    if (!session) return null;

    const STATE_CITIES = {
        'Andhra Pradesh': ['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Tirupati','Rajahmundry','Kakinada','Kadapa','Anantapur','Other'],
        'Arunachal Pradesh': ['Itanagar','Naharlagun','Pasighat','Other'],
        'Assam': ['Guwahati','Silchar','Dibrugarh','Jorhat','Nagaon','Tinsukia','Tezpur','Other'],
        'Bihar': ['Patna','Gaya','Bhagalpur','Muzaffarpur','Purnia','Darbhanga','Bihar Sharif','Arrah','Begusarai','Chhapra','Other'],
        'Chhattisgarh': ['Raipur','Bhilai','Bilaspur','Durg','Korba','Rajnandgaon','Jagdalpur','Other'],
        'Goa': ['Panaji','Margao','Vasco da Gama','Mapusa','Ponda','Other'],
        'Gujarat': ['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Gandhinagar','Junagadh','Anand','Nadiad','Other'],
        'Haryana': ['Gurugram','Faridabad','Panipat','Ambala','Yamunanagar','Rohtak','Hisar','Karnal','Sonipat','Panchkula','Other'],
        'Himachal Pradesh': ['Shimla','Manali','Dharamshala','Kangra','Mandi','Solan','Other'],
        'Jharkhand': ['Ranchi','Jamshedpur','Dhanbad','Bokaro','Deoghar','Hazaribagh','Other'],
        'Karnataka': ['Bengaluru','Mysuru','Hubballi','Mangaluru','Belagavi','Davanagere','Ballari','Vijayapura','Shivamogga','Tumakuru','Other'],
        'Kerala': ['Thiruvananthapuram','Kochi','Kozhikode','Thrissur','Kollam','Kannur','Alappuzha','Palakkad','Malappuram','Other'],
        'Madhya Pradesh': ['Bhopal','Indore','Jabalpur','Gwalior','Ujjain','Sagar','Dewas','Satna','Ratlam','Rewa','Other'],
        'Maharashtra': ['Mumbai','Pune','Nagpur','Nashik','Aurangabad','Solapur','Amravati','Kalyan','Mira-Bhayandar','Navi Mumbai','Thane','Kolhapur','Other'],
        'Manipur': ['Imphal','Thoubal','Churachandpur','Other'],
        'Meghalaya': ['Shillong','Tura','Jowai','Other'],
        'Mizoram': ['Aizawl','Lunglei','Champhai','Other'],
        'Nagaland': ['Kohima','Dimapur','Mokokchung','Other'],
        'Odisha': ['Bhubaneswar','Cuttack','Rourkela','Berhampur','Sambalpur','Puri','Balasore','Bhadrak','Other'],
        'Punjab': ['Ludhiana','Amritsar','Jalandhar','Patiala','Bathinda','Mohali','Pathankot','Hoshiarpur','Other'],
        'Rajasthan': ['Jaipur','Jodhpur','Kota','Bikaner','Ajmer','Udaipur','Bharatpur','Alwar','Sikar','Sri Ganganagar','Other'],
        'Sikkim': ['Gangtok','Namchi','Jorethang','Other'],
        'Tamil Nadu': ['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Tirunelveli','Vellore','Erode','Thoothukudi','Tiruppur','Other'],
        'Telangana': ['Hyderabad','Warangal','Nizamabad','Khammam','Karimnagar','Ramagundam','Nalgonda','Other'],
        'Tripura': ['Agartala','Udaipur','Dharmanagar','Other'],
        'Uttar Pradesh': ['Lucknow','Kanpur','Agra','Varanasi','Meerut','Prayagraj','Ghaziabad','Noida','Bareilly','Aligarh','Moradabad','Gorakhpur','Mathura','Firozabad','Other'],
        'Uttarakhand': ['Dehradun','Haridwar','Roorkee','Rishikesh','Haldwani','Nainital','Mussoorie','Other'],
        'West Bengal': ['Kolkata','Asansol','Siliguri','Durgapur','Bardhaman','Malda','Baharampur','Kharagpur','Other'],
        'Andaman and Nicobar Islands': ['Port Blair','Other'],
        'Chandigarh': ['Chandigarh','Other'],
        'Dadra and Nagar Haveli and Daman and Diu': ['Daman','Diu','Silvassa','Other'],
        'Delhi': ['New Delhi','Dwarka','Rohini','Janakpuri','Laxmi Nagar','Karol Bagh','Preet Vihar','Saket','Other'],
        'Jammu and Kashmir': ['Srinagar','Jammu','Anantnag','Baramulla','Sopore','Other'],
        'Ladakh': ['Leh','Kargil','Other'],
        'Lakshadweep': ['Kavaratti','Other'],
        'Puducherry': ['Puducherry','Karaikal','Mahé','Yanam','Other'],
    };
    const STATES = Object.keys(STATE_CITIES).sort();
    const availableCities = editForm.state ? (STATE_CITIES[editForm.state] || []) : [];

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        if (name === 'state') {
            setEditForm(prev => ({ ...prev, state: value, city: '' }));
        } else {
            setEditForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (!editForm.name || !editForm.mobileNo || !editForm.examPreparingFor || !editForm.state || !editForm.city) {
            alert('Name, mobile, exam, state and city are required.');
            return;
        }
        setEditLoading(true);
        try {
            const res = await fetch('/api/user/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm),
            });
            const data = await res.json();
            if (res.ok) {
                setShowEditProfile(false);
                fetchUserProfile();
            } else {
                alert(data.error || 'Failed to update profile.');
            }
        } catch {
            alert('An error occurred.');
        } finally {
            setEditLoading(false);
        }
    };

    const inputStyle = {
        width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: 'white',
        fontSize: '0.9rem', boxSizing: 'border-box',
    };
    const labelStyle = { display: 'block', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '5px', fontWeight: '600' };

    return (
        <div className={styles.container}>
            <Navbar />

            {session?.user?.isAdmin ? (
                <div className={styles.wrapper}>
                    <AdminUserList />
                </div>
            ) : (
                <>
                    {/* Profile Completion Modal */}
            {showProfileCompletion && (
                <ProfileCompletion
                    user={session.user}
                    onComplete={() => {
                        setShowProfileCompletion(false);
                        setProfileSkipped(true);
                        localStorage.setItem('profileSkipped', 'true'); // Persist skip state
                        fetchUserProfile(); // Refresh profile data
                    }}
                />
            )}

            <div className={styles.wrapper}>
                {/* Unified Profile & Welcome Card */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '24px',
                    marginBottom: '24px'
                }}>
                    {/* Welcome Header Part */}
                    <div style={{ marginBottom: userProfile?.profileCompleted ? '24px' : '0' }}>
                        <h1 className={styles.welcomeText} style={{ margin: 0, fontSize: '1.8rem' }}>
                            Welcome back, <span style={{ color: '#818cf8' }}>{session.user.name?.split(' ')[0]}</span>! 👋
                        </h1>
                        <p className={styles.email} style={{ margin: '4px 0 0 0', opacity: 0.7 }}>{session.user.email}</p>
                    </div>

                            {/* Profile Details Part */}
                    {userProfile?.profileCompleted && (
                        <>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }}></div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📋</span>
                                    <h2 style={{ margin: 0, color: '#a78bfa', fontSize: '18px', fontWeight: '600' }}>
                                        Student Profile
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setShowEditProfile(true)}
                                    style={{
                                        background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
                                        color: '#c4b5fd', padding: '7px 16px', borderRadius: '10px', cursor: 'pointer',
                                        fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    ✏️ Edit Profile
                                </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Full Name</span>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.name}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Mobile Number</span>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.mobileNo}</span>
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
                                        {userProfile.examPreparingFor}
                                    </span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>School</span>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.schoolName}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Coaching</span>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.coachingName}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Location</span>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{userProfile.city}, {userProfile.state}</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Edit Profile Modal */}
                {showEditProfile && (
                    <div style={{
                        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
                    }}>
                        <div style={{
                            background: '#1e293b', borderRadius: '20px', padding: '32px',
                            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
                            border: '1px solid rgba(255,255,255,0.1)', position: 'relative',
                        }}>
                            <button onClick={() => setShowEditProfile(false)} style={{
                                position: 'absolute', top: '16px', right: '16px',
                                background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
                                width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer',
                                fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>✕</button>
                            <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#a78bfa' }}>✏️ Edit Profile</h2>
                            <form onSubmit={handleEditSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label style={labelStyle}>Full Name *</label>
                                    <input name="name" value={editForm.name} onChange={handleEditChange} style={inputStyle} placeholder="Full name" required />
                                </div>
                                <div>
                                    <label style={labelStyle}>Mobile Number *</label>
                                    <input name="mobileNo" value={editForm.mobileNo} onChange={handleEditChange} style={inputStyle} placeholder="10-digit number" maxLength={10} required />
                                </div>
                                <div>
                                    <label style={labelStyle}>Exam Preparing For *</label>
                                    <select name="examPreparingFor" value={editForm.examPreparingFor} onChange={handleEditChange} style={inputStyle} required>
                                        <option value="">Select exam</option>
                                        <option value="NEET">NEET</option>
                                        <option value="JEE Mains">JEE Mains</option>
                                        <option value="JEE Advanced">JEE Advanced</option>
                                        <option value="Both JEE & NEET">Both JEE &amp; NEET</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>School Name (optional)</label>
                                    <input name="schoolName" value={editForm.schoolName} onChange={handleEditChange} style={inputStyle} placeholder="School name" />
                                </div>
                                <div>
                                    <label style={labelStyle}>Coaching Name (optional)</label>
                                    <input name="coachingName" value={editForm.coachingName} onChange={handleEditChange} style={inputStyle} placeholder="Coaching institute" />
                                </div>
                                <div>
                                    <label style={labelStyle}>State *</label>
                                    <select name="state" value={editForm.state} onChange={handleEditChange} style={inputStyle} required>
                                        <option value="">Select state</option>
                                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>City *</label>
                                    <select name="city" value={editForm.city} onChange={handleEditChange}
                                        style={{ ...inputStyle, opacity: editForm.state ? 1 : 0.5 }}
                                        disabled={!editForm.state} required>
                                        <option value="">{editForm.state ? 'Select city' : 'Select state first'}</option>
                                        {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
                                    <button type="submit" disabled={editLoading} style={{
                                        width: '100%', padding: '14px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem',
                                        fontWeight: '700', cursor: editLoading ? 'not-allowed' : 'pointer', opacity: editLoading ? 0.6 : 1,
                                    }}>
                                        {editLoading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Stats Overview */}
                <div className={styles.statsGrid}>
                    <div
                        className={styles.statCard}
                        onClick={() => document.getElementById('test-history')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.statIcon}>📝</div>
                        <div className={styles.statValue}>{stats.totalTests}</div>
                        <div className={styles.statLabel}>Tests Taken</div>
                    </div>
                    <div
                        className={styles.statCard}
                        onClick={() => {
                            if (stats.bestTestId && stats.bestTestExam) {
                                let examPath = stats.bestTestExam.toLowerCase();
                                if (examPath === 'jee mains') examPath = 'jee-mains';
                                else if (examPath === 'jee advanced') examPath = 'jee-advance';
                                router.push(`/test-series/${examPath}/${stats.bestTestId}`);
                            }
                        }}
                        style={{ cursor: stats.bestTestId ? 'pointer' : 'default' }}
                    >
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

                {/* Quick Actions */}
                <div className={styles.quickActions}>
                    <h2>Quick Actions</h2>
                    <div className={styles.actionGrid}>


                        {(() => {
                            // Determine exam path based on profile
                            let examPath = 'neet';
                            const exam = userProfile?.examPreparingFor;
                            if (exam === 'JEE Mains') examPath = 'jee-mains';
                            else if (exam === 'JEE Advanced') examPath = 'jee-advance';
                            else if (exam === 'Both JEE & NEET') examPath = 'neet'; // Default to NEET for now

                            return (
                                <>
                                    <a href={`/test-series/${examPath}?tab=mock`} className={styles.actionCard}>
                                        <span className={styles.actionIcon}>📝</span>
                                        <span className={styles.actionTitle}>Mock Tests</span>
                                    </a>
                                    <a href={`/test-series/${examPath}?tab=pyq`} className={styles.actionCard}>
                                        <span className={styles.actionIcon}>📚</span>
                                        <span className={styles.actionTitle}>PYQ</span>
                                    </a>
                                    <a href={`/test-series/${examPath}?tab=chapter`} className={styles.actionCard}>
                                        <span className={styles.actionIcon}>📑</span>
                                        <span className={styles.actionTitle}>Chapterwise</span>
                                    </a>
                                    <a href={`/test-series/${examPath}?tab=subject`} className={styles.actionCard}>
                                        <span className={styles.actionIcon}>📖</span>
                                        <span className={styles.actionTitle}>Subjectwise</span>
                                    </a>
                                </>
                            );
                        })()}

                        {session.user.isAdmin && (
                            <a href="/admin" className={styles.actionCard + ' ' + styles.adminCard}>
                                <span className={styles.actionIcon}>⚙️</span>
                                <span className={styles.actionTitle}>Admin Panel</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Test History */}
                <div id="test-history" className={styles.historySection}>
                    <h2>Recent Test History</h2>
                    {testResults.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p className={styles.emptyIcon}>📚</p>
                            <p className={styles.emptyText}>No tests taken yet!</p>
                            <p className={styles.emptySubtext}>Start your journey by taking a practice test</p>
                            <a href="/test-series/neet" className={styles.startBtn}>Browse Tests</a>
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
                                    <div
                                        key={result._id || index}
                                        className={styles.historyItem}
                                        onClick={() => {
                                            let examPath = result.examType?.toLowerCase() || 'neet';
                                            if (examPath === 'jee mains') examPath = 'jee-mains';
                                            else if (examPath === 'jee advanced') examPath = 'jee-advance';
                                            router.push(`/test-series/${examPath}/${result.testId}`);
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className={styles.historyLeft}>
                                            <div className={styles.historyExam}>{result.examType?.toUpperCase()}</div>
                                            <div className={styles.historyTest}>{result.testId}</div>
                                            <div className={styles.historyDate}>{date}</div>
                                        </div>
                                        <div className={styles.historyStats}>
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel}>Global Rank</span>
                                                <span className={styles.historyStatValue}>
                                                    #{result.globalRank || result.rank} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>/ {result.totalGlobalStudents || result.totalStudents}</span>
                                                </span>
                                            </div>
                                            {result.totalLiveStudents > 0 && (
                                                <div className={styles.historyStat}>
                                                    <span className={styles.historyStatLabel} style={{ color: '#fbbf24' }}>Live Rank</span>
                                                    <span className={styles.historyStatValue} style={{ color: '#fbbf24' }}>
                                                        #{result.liveRank} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>/ {result.totalLiveStudents}</span>
                                                    </span>
                                                </div>
                                            )}
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
                                            <div className={styles.historyStat}>
                                                <span className={styles.historyStatLabel} style={{ color: '#94a3b8' }}>Unattempted</span>
                                                <span className={styles.historyStatValue} style={{ color: '#94a3b8' }}>
                                                    {result.totalQuestions - Object.keys(result.answers || {}).length}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.historyRight}>
                                            <div className={`${styles.performanceBadge} ${percentage >= 75 ? styles.excellent : percentage >= 50 ? styles.good : styles.needsWork}`}>
                                                {percentage >= 75 ? '🏆 Excellent' : percentage >= 50 ? '👍 Good' : '💪 Keep Practicing'}
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
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Performance Analytics</h2>

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

                            {/* Estimated Rank Card */}
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
                                <h3 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '10px' }}>Estimated Performance</h3>
                                <div style={{ display: 'flex', gap: '30px', textAlign: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fff' }}>
                                            #{stats.rank.split(' / ')[0]} <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>/ {stats.rank.split(' / ')[1]}</span>
                                        </div>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Global Rank</p>
                                    </div>
                                    {stats.liveRank !== 'N/A' && (
                                        <div>
                                            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fbbf24' }}>
                                                #{stats.liveRank.split(' / ')[0]} <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>/ {stats.liveRank.split(' / ')[1]}</span>
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Live Rank</p>
                                        </div>
                                    )}
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '15px', textAlign: 'center', fontSize: '0.85rem' }}>
                                    Based on your best performance ({stats.bestTestId})
                                </p>
                            </div>

                        </div>
                    </div>
                )}
                </div>
                </>
            )}
        </div>
    );
}
