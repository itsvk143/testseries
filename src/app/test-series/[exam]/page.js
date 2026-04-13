'use client';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navbar from '../../../components/Navbar';
import TestCard from '../../../components/TestCard';
import { neetTests } from '../../../data/exams/neet';
import { jeeMainsTests } from '../../../data/exams/jeeMains';
import { jeeAdvanceTests } from '../../../data/exams/jeeAdvanced';
import { class9Tests } from '../../../data/exams/class9';
import { class10Tests } from '../../../data/exams/class10';
import { board10Tests } from '../../../data/exams/board10';
import { board12Tests } from '../../../data/exams/board12';
import styles from './page.module.css';
import { Suspense, use, useEffect, useState } from 'react';

function ExamPageContent({ params }) {
    const unwrappedParams = use(params);
    const { exam } = unwrappedParams;
    const isBoardPage = exam === 'board-10' || exam === 'board-12';

    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab');
    // Fix #6 — get session once at parent level, pass to TestCard as prop
    const { data: session } = useSession();

    const [tests, setTests] = useState([]);
    const [loadingTests, setLoadingTests] = useState(true);
    const [userStudentClass, setUserStudentClass] = useState(null);

    // Fetch user profile with sessionStorage cache (Fix #4)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Use cached profile if available
                const cached = sessionStorage.getItem('userProfile');
                if (cached) {
                    const data = JSON.parse(cached);
                    setUserStudentClass(data.studentClass || null);
                    return;
                }
                const res = await fetch('/api/user/profile');
                if (res.ok) {
                    const data = await res.json();
                    sessionStorage.setItem('userProfile', JSON.stringify(data));
                    setUserStudentClass(data.studentClass || null);
                }
            } catch {}
        };
        fetchProfile();
    }, []);

    // Compute which classGrades this student is allowed to see
    // Class 11       → only '11'
    // Class 12 / 12 Passed → '11', '12', 'All Test'
    // Class 9/10 / not set → everything ('All Test', '11', '12')
    const allowedGrades = (() => {
        if (userStudentClass === 'Class 11') return new Set(['11', 'All Test']);
        if (userStudentClass === 'Class 12' || userStudentClass === '12 Passed') return new Set(['11', '12', 'All Test']);
        return null; // no restriction
    })();

    useEffect(() => {
        let baseTests = [];
        if (exam === 'neet') baseTests = neetTests;
        else if (exam === 'jee-mains') baseTests = jeeMainsTests;
        else if (exam === 'jee-advance') baseTests = jeeAdvanceTests;
        else if (exam === 'class-9') baseTests = class9Tests;
        else if (exam === 'class-10') baseTests = class10Tests;
        else if (exam === 'board-10') baseTests = board10Tests;
        else if (exam === 'board-12') baseTests = board12Tests;
        
        // Fetch custom modifications
        const fetchCustomAndMerge = async () => {
             try {
                const res = await fetch('/api/tests');
                const customData = await res.json();
                
                // Merge base tests with overrides
                const mergedTests = baseTests.map(test => {
                    return customData[test.id] ? { ...test, ...customData[test.id] } : test;
                });
                
                // Append any purely custom tests
                const purelyCustomTests = Object.values(customData).filter(ct => ct.category === exam && !baseTests.find(st => st.id === ct.id));
                
                setTests([...mergedTests, ...purelyCustomTests]);
             } catch (err) {
                console.error('Failed to merge custom tests', err);
                setTests(baseTests); // fallback
             } finally {
                setLoadingTests(false);
             }
        };

        fetchCustomAndMerge();
    }, [exam]);

    // Tab-based navigation
    const [activeTab, setActiveTab] = useState(initialTab || 'mock');
    const [activeClass, setActiveClass] = useState('All Test');

    useEffect(() => {
        if (initialTab) {
            setActiveTab(initialTab);
        }
    }, [initialTab]);

    const mockTests = tests.filter(t => t.type === 'MOCK');
    const pyqTests = tests.filter(t => t.type === 'PYQ');
    const partTests = tests.filter(t => t.type === 'PART' || (t.type === 'LIVE' && t.id.includes('SUNDAY')));
    const subjectTests = tests.filter(t => t.type === 'SUBJECT');
    const chapterTests = tests.filter(t => t.type === 'CHAPTER');
    const subtopicTests = tests.filter(t => t.type === 'SUBTOPIC');
    const [expandedSubjects, setExpandedSubjects] = useState({});
    const [expandedChapters, setExpandedChapters] = useState({});
    const [expandedSubtopics, setExpandedSubtopics] = useState({});
    const [expandedSubtopicChapters, setExpandedSubtopicChapters] = useState({});
    const [liveSections, setLiveSections] = useState({ upcoming: false, ended: false });
    const [partSections, setPartSections] = useState({ upcoming: false, ended: false });

    // Grouping Live Tests by Month/Status
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const isCurrentMonth = (dateStr) => {
        if (!dateStr) return false;
        const d = new Date(dateStr);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    };

    const liveTests = tests.filter(t => t.type === 'LIVE' && !t.id.includes('SUNDAY'));
    
    const monthLive = liveTests.filter(t => isCurrentMonth(t.liveStart))
        .sort((a, b) => new Date(a.liveStart) - new Date(b.liveStart));

    const otherEndedLive = liveTests.filter(t => !isCurrentMonth(t.liveStart) && new Date(t.liveEnd) < now)
        .sort((a, b) => new Date(b.liveEnd) - new Date(a.liveEnd));

    const otherUpcomingLive = liveTests.filter(t => !isCurrentMonth(t.liveStart) && new Date(t.liveStart) > now)
        .sort((a, b) => new Date(a.liveStart) - new Date(b.liveStart));

    // Filtering logic for active class AND allowed grades
    const filterByClass = (testList) => {
        let filtered = testList;
        // Apply class restriction based on student's class
        if (allowedGrades) {
            filtered = filtered.filter(t => allowedGrades.has(t.classGrade || 'All Test'));
        }
        // Apply user-selected class toggle (only if not restricted to a single grade)
        if (activeClass !== 'All Test') {
            filtered = filtered.filter(t => t.classGrade === activeClass || t.classGrade === 'All Test' || !t.classGrade);
        }
        return filtered;
    };

    const currentMockTests = filterByClass(mockTests);
    const currentPyqTests = filterByClass(pyqTests);
    const currentPartTests = filterByClass(partTests);
    const currentSubjectTests = filterByClass(subjectTests);
    const currentChapterTests = filterByClass(chapterTests);
    const currentSubtopicTests = filterByClass(subtopicTests);
    const currentLiveTests = monthLive; // Main visible section

    // Grouping Part Tests by Month/Status
    const monthPart = currentPartTests.filter(t => isCurrentMonth(t.liveStart) || !t.liveStart)
        .sort((a, b) => new Date(a.liveStart || 0) - new Date(b.liveStart || 0));

    const otherEndedPart = currentPartTests.filter(t => t.liveEnd && !isCurrentMonth(t.liveStart) && new Date(t.liveEnd) < now)
        .sort((a, b) => new Date(b.liveEnd) - new Date(a.liveEnd));

    const otherUpcomingPart = currentPartTests.filter(t => t.liveStart && !isCurrentMonth(t.liveStart) && new Date(t.liveStart) > now)
        .sort((a, b) => new Date(a.liveStart) - new Date(b.liveStart));

    const toggleSubjectHeaderStyle = {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
    };

    const isClass9 = exam === 'class-9';
    const isClass10 = exam === 'class-10';
    const isBoard10 = exam === 'board-10';
    const isBoard12 = exam === 'board-12';
    const isClassPage = isClass9 || isClass10 || isBoard10 || isBoard12;
    
    useEffect(() => {
        if (isClassPage && (!initialTab || ['mock', 'pyq', 'part', 'subject', 'chapter', 'live'].includes(initialTab))) {
            setActiveTab(isBoard10 || isBoard12 ? (isBoard12 ? 'physics' : 'maths') : 'ntse');
        } else if (initialTab) {
            setActiveTab(initialTab);
        }
    }, [initialTab, isClassPage, isBoard10, isBoard12]);
    
    const class9Tabs = [
        { id: 'ntse', label: 'NTSE', icon: '🏆' },
        { id: 'nso', label: 'NSO', icon: '🔬' },
        { id: 'imo', label: 'IMO', icon: '🧮' },
        { id: 'nstse', label: 'NSTSE', icon: '🌟' }
    ];
    
    const class10Tabs = [
        { id: 'ntse', label: 'NTSE', icon: '🏆' },
        { id: 'nso', label: 'NSO', icon: '🔬' },
        { id: 'imo', label: 'IMO', icon: '🧮' },
        { id: 'nstse', label: 'NSTSE', icon: '🌟' }
    ];

    const board10Tabs = [
        { id: 'maths', label: 'Maths', icon: '🧮' },
        { id: 'science', label: 'Science', icon: '🔬' },
        { id: 'social', label: 'Social Science', icon: '🌍' },
        { id: 'english', label: 'English', icon: '📚' },
        { id: 'hindi', label: 'Hindi', icon: '📖' },
    ];

    const board12Tabs = [
        { id: 'physics', label: 'Physics', icon: '⚡' },
        { id: 'chemistry', label: 'Chemistry', icon: '🧪' },
        { id: 'maths', label: 'Maths', icon: '🧮' },
        { id: 'biology', label: 'Biology', icon: '🌿' },
        { id: 'english', label: 'English', icon: '📚' }
    ];
    
    const currentTabs = isClass9 ? class9Tabs : isClass10 ? class10Tabs : isBoard10 ? board10Tabs : isBoard12 ? board12Tabs : [];

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.header}>
                <h1 className={styles.title}>{exam?.replace('-', ' ').toUpperCase()} Series</h1>
                <p className={styles.subtitle}>Practice with curated full tests and PYQ.</p>
            </div>

            {/* Horizontal Tab Navigation */}
            <div className={styles.tabContainer}>
                {!isClassPage ? (
                    <>
                        {liveTests.length > 0 && (
                            <button
                                className={`${styles.tab} ${activeTab === 'live' ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab('live')}
                            >
                                <span className={styles.tabIcon}>🔴</span>
                                <span className={styles.tabText}>Cumulative Tests</span>
                                <span className={styles.tabCount}>({liveTests.length})</span>
                            </button>
                        )}
                        <button
                            className={`${styles.tab} ${activeTab === 'part' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('part')}
                        >
                            <span className={styles.tabIcon}>🧩</span>
                            <span className={styles.tabText}>Part Tests</span>
                            <span className={styles.tabCount}>({partTests.length})</span>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'mock' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('mock')}
                        >
                            <span className={styles.tabIcon}>📝</span>
                            <span className={styles.tabText}>Full Tests</span>
                            <span className={styles.tabCount}>({mockTests.length})</span>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'pyq' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('pyq')}
                        >
                            <span className={styles.tabIcon}>📚</span>
                            <span className={styles.tabText}>PYQ</span>
                            <span className={styles.tabCount}>({pyqTests.length})</span>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'subject' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('subject')}
                        >
                            <span className={styles.tabIcon}>📖</span>
                            <span className={styles.tabText}>Subjectwise Tests</span>
                            <span className={styles.tabCount}>({subjectTests.length})</span>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'chapter' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('chapter')}
                        >
                            <span className={styles.tabIcon}>📑</span>
                            <span className={styles.tabText}>Chapterwise Tests</span>
                            <span className={styles.tabCount}>({chapterTests.length})</span>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'subtopic' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('subtopic')}
                        >
                            <span className={styles.tabIcon}>🔍</span>
                            <span className={styles.tabText}>Subtopic Tests</span>
                            <span className={styles.tabCount}>({subtopicTests.length})</span>
                        </button>
                    </>
                ) : (
                    currentTabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className={styles.tabIcon}>{tab.icon}</span>
                            <span className={styles.tabText}>{tab.label}</span>
                            <span className={styles.tabCount}>
                                ({tests.filter(t => t.subject?.toUpperCase() === tab.label.toUpperCase() || t.title?.toUpperCase().includes(tab.label.toUpperCase())).length})
                            </span>
                        </button>
                    ))
                )}
            </div>

            <div className={styles.content}>
                {/* Class Toggle - Don't show for Live tests tab or Class Custom Pages */}
                {!isClassPage && !['mock', 'pyq', 'subtopic'].includes(activeTab) && (
                    <div className={styles.classToggleContainer}>
                        {/* Show All Test button only if student sees multiple grades */}
                        {(!allowedGrades || allowedGrades.size > 1) && (
                            <button 
                                className={`${styles.classToggleBtn} ${activeClass === 'All Test' ? styles.classToggleBtnActive : ''}`}
                                onClick={() => setActiveClass('All Test')}
                            >
                                All Test
                            </button>
                        )}
                        {/* Show Class 11 button */}
                        {(!allowedGrades || allowedGrades.has('11')) && (
                            <button 
                                className={`${styles.classToggleBtn} ${activeClass === '11' ? styles.classToggleBtnActive : ''}`}
                                onClick={() => setActiveClass('11')}
                            >
                                Class 11
                            </button>
                        )}
                        {/* Show Class 12 button only if student is Class 12 or above */}
                        {(!allowedGrades || allowedGrades.has('12')) && (
                            <button 
                                className={`${styles.classToggleBtn} ${activeClass === '12' ? styles.classToggleBtnActive : ''}`}
                                onClick={() => setActiveClass('12')}
                            >
                                Class 12
                            </button>
                        )}
                    </div>
                )}

                {loadingTests && <div style={{ textAlign: 'center', padding: '2rem' }}>Loading exams...</div>}

                {/* Class Specific Tab Content */}
                {isClassPage && !loadingTests && (
                    <div className={isBoardPage ? styles.list : styles.grid}>
                        {(() => {
                            const currentTabLabel = currentTabs.find(t => t.id === activeTab)?.label.toUpperCase();
                            const specificTests = filterByClass(tests).filter(t => 
                                t.subject?.toUpperCase() === currentTabLabel || 
                                t.title?.toUpperCase().includes(currentTabLabel || '')
                            );
                            
                            return specificTests.length > 0 ? (
                                specificTests.map(test => (
                                    <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                ))
                            ) : (
                                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                    No {currentTabLabel} tests available yet.
                                </div>
                            );
                        })()}
                    </div>
                )}
                
                {/* Standard Tab Content (Non-Class Pages) */}
                {!isClassPage && !loadingTests && activeTab === 'live' && (
                    <div style={{ marginTop: '1.5rem' }}>
                        {/* Ended Section (Other Months) */}
                        {otherEndedLive.length > 0 && (
                            <div style={{ marginBottom: '2rem' }}>
                                <div 
                                    className="glass-panel"
                                    onClick={() => setLiveSections(prev => ({ ...prev, ended: !prev.ended }))}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: '4px solid #ef4444',
                                        background: 'rgba(239, 68, 68, 0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="roadmap-dot" style={{ background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>
                                            Ended Cumulative Tests 
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: '400' }}>
                                                ({otherEndedLive.length} tests)
                                            </span>
                                        </h3>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{liveSections.ended ? '▲' : '▼'}</span>
                                </div>
                                {liveSections.ended && (
                                    <div className={isBoardPage ? styles.list : styles.grid} style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
                                        {otherEndedLive.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Current Month Section */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div 
                                className="glass-panel"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid var(--success)',
                                    background: 'rgba(34, 197, 94, 0.05)',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="roadmap-dot" style={{ background: 'var(--success)', boxShadow: '0 0 10px var(--success)' }} />
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>
                                        Tests of {now.toLocaleString('default', { month: 'long' })} {currentYear}
                                        <span style={{ fontSize: '0.8rem', color: 'var(--success)', marginLeft: '0.75rem', fontWeight: '500' }}>
                                            • ACTIVE PHASE
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className={isBoardPage ? styles.list : styles.grid}>
                                {monthLive.length > 0 ? (
                                    monthLive.map(test => (
                                        <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                    ))
                                ) : (
                                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                                        No cumulative tests scheduled for this month.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Upcoming Section (Other Months) */}
                        {otherUpcomingLive.length > 0 && (
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div 
                                    className="glass-panel"
                                    onClick={() => setLiveSections(prev => ({ ...prev, upcoming: !prev.upcoming }))}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: '4px solid #3b82f6',
                                        background: 'rgba(59, 130, 246, 0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="roadmap-dot" style={{ background: '#3b82f6', boxShadow: '0 0 10px #3b82f6' }} />
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>
                                            Upcoming Cumulative Tests 
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: '400' }}>
                                                ({otherUpcomingLive.length} tests)
                                            </span>
                                        </h3>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{liveSections.upcoming ? '▲' : '▼'}</span>
                                </div>
                                {liveSections.upcoming && (
                                    <div className={isBoardPage ? styles.list : styles.grid} style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
                                        {otherUpcomingLive.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Mock Tests Tab Content */}
                {activeTab === 'mock' && (
                    <div className={isBoardPage ? styles.list : styles.grid}>
                        {currentMockTests.length > 0 ? (
                            currentMockTests.map(test => (
                                <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                No Class {activeClass} Full Tests available yet.
                            </div>
                        )}
                    </div>
                )}

                {/* PYQ Tab Content */}
                {activeTab === 'pyq' && (
                    <div className={isBoardPage ? styles.list : styles.grid}>
                        {currentPyqTests.length > 0 ? (
                            currentPyqTests.map(test => (
                                <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                No Class {activeClass} PYQ available yet.
                            </div>
                        )}
                    </div>
                )}

                {/* Part Tests Tab Content */}
                {!loadingTests && activeTab === 'part' && (
                    <div style={{ marginTop: '1.5rem' }}>
                        {/* Ended Section (Other Months) */}
                        {otherEndedPart.length > 0 && (
                            <div style={{ marginBottom: '2rem' }}>
                                <div 
                                    className="glass-panel"
                                    onClick={() => setPartSections(prev => ({ ...prev, ended: !prev.ended }))}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: '4px solid #ef4444',
                                        background: 'rgba(239, 68, 68, 0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="roadmap-dot" style={{ background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>
                                            Ended Part Tests 
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: '400' }}>
                                                ({otherEndedPart.length} tests)
                                            </span>
                                        </h3>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{partSections.ended ? '▲' : '▼'}</span>
                                </div>
                                {partSections.ended && (
                                    <div className={isBoardPage ? styles.list : styles.grid} style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
                                        {otherEndedPart.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Current Month Section */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div 
                                className="glass-panel"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid var(--success)',
                                    background: 'rgba(34, 197, 94, 0.05)',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div className="roadmap-dot" style={{ background: 'var(--success)', boxShadow: '0 0 10px var(--success)' }} />
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>
                                        Tests of {now.toLocaleString('default', { month: 'long' })} {currentYear}
                                        <span style={{ fontSize: '0.8rem', color: 'var(--success)', marginLeft: '0.75rem', fontWeight: '500' }}>
                                            • ACTIVE
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className={isBoardPage ? styles.list : styles.grid}>
                                {monthPart.length > 0 ? (
                                    monthPart.map(test => (
                                        <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                    ))
                                ) : (
                                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                                        No part tests scheduled for this month.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Upcoming Section (Other Months) */}
                        {otherUpcomingPart.length > 0 && (
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div 
                                    className="glass-panel"
                                    onClick={() => setPartSections(prev => ({ ...prev, upcoming: !prev.upcoming }))}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: '4px solid #3b82f6',
                                        background: 'rgba(59, 130, 246, 0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="roadmap-dot" style={{ background: '#3b82f6', boxShadow: '0 0 10px #3b82f6' }} />
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>
                                            Upcoming Part Tests 
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: '400' }}>
                                                ({otherUpcomingPart.length} tests)
                                            </span>
                                        </h3>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{partSections.upcoming ? '▲' : '▼'}</span>
                                </div>
                                {partSections.upcoming && (
                                    <div className={isBoardPage ? styles.list : styles.grid} style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
                                        {otherUpcomingPart.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Subjectwise Tests Tab Content */}
                {activeTab === 'subject' && (
                    <div style={{ marginTop: '1.5rem' }}>
                        {(() => {
                            const subjects = [...new Set(currentSubjectTests.map(t => t.subject).filter(Boolean))];
                            return subjects.map((subject, sIdx) => {
                                const subjectSpecificTests = currentSubjectTests.filter(t => t.subject === subject);
                                const isExpanded = expandedSubjects[subject] ?? (sIdx === 0);

                                return (
                                    <div key={subject} style={{ marginBottom: '2rem' }}>
                                        <div
                                            onClick={() => setExpandedSubjects(prev => ({ ...prev, [subject]: !isExpanded }))}
                                            className="glass-panel"
                                            style={{
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem 1.25rem',
                                                borderRadius: '12px',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ 
                                                    background: 'var(--primary)', 
                                                    width: '4px', 
                                                    height: '24px', 
                                                    borderRadius: '2px',
                                                    boxShadow: '0 0 10px var(--primary)'
                                                }} />
                                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>
                                                    {subject}
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '400', marginLeft: '0.75rem' }}>
                                                        ({subjectSpecificTests.length} tests)
                                                    </span>
                                                </h3>
                                            </div>
                                            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>{isExpanded ? '−' : '+'}</span>
                                        </div>

                                        {isExpanded && (
                                            <div className={isBoardPage ? styles.list : styles.grid} style={{ marginTop: '1.5rem' }}>
                                                {subjectSpecificTests.map(test => (
                                                    <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            });
                        })()}
                    </div>
                )}

                {/* Chapterwise Tests Tab Content */}
                {activeTab === 'chapter' && (
                    <div style={{ marginTop: '1.5rem', position: 'relative' }}>
                        {(() => {
                            const subjects = [...new Set(currentChapterTests.map(t => t.subject).filter(Boolean))];
                            return subjects.map((subject, sIdx) => {
                                const subjectSpecificTests = currentChapterTests.filter(t => t.subject === subject);
                                const isSubjectExpanded = expandedChapters[subject] ?? (sIdx === 0);
                                const chaptersInSubject = [...new Set(subjectSpecificTests.map(t => t.chapter).filter(Boolean))];

                                return (
                                    <div key={subject} style={{ marginBottom: '2rem', position: 'relative' }}>
                                        {/* Level 1: Subject Header (Premium Glass) */}
                                        <div
                                            onClick={() => setExpandedChapters(prev => ({ ...prev, [subject]: !isSubjectExpanded }))}
                                            className="glass-panel"
                                            style={{
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem 1.25rem',
                                                borderRadius: '12px',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ 
                                                    background: 'var(--primary)', 
                                                    width: '4px', 
                                                    height: '24px', 
                                                    borderRadius: '2px',
                                                    boxShadow: '0 0 10px var(--primary)'
                                                }} />
                                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>
                                                    {subject}
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '400', marginLeft: '0.75rem' }}>
                                                        ({subjectSpecificTests.length} tests)
                                                    </span>
                                                </h3>
                                            </div>
                                            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>{isSubjectExpanded ? '−' : '+'}</span>
                                        </div>

                                        {isSubjectExpanded && (
                                            <div style={{ paddingTop: '0.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                                                {/* Vertical Connection Line */}
                                                <div className="roadmap-line" style={{ left: '0.9rem' }} />

                                                {chaptersInSubject.map((chapter) => {
                                                    const chapterTests = subjectSpecificTests.filter(t => t.chapter === chapter);
                                                    return (
                                                        <div key={chapter} style={{ marginBottom: '2rem', position: 'relative' }}>
                                                            {/* Chapter Connection Dot */}
                                                            <div className="chapter-dot" style={{ left: '-1.85rem' }} />

                                                            {/* Level 2: Chapter Title */}
                                                            <div style={{ marginBottom: '1.25rem' }}>
                                                                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
                                                                    {chapter}
                                                                    <span style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: '400', marginLeft: '0.5rem' }}>
                                                                        • {chapterTests.length} tests
                                                                    </span>
                                                                </h4>
                                                            </div>

                                                            {/* Level 3: Test Grid */}
                                                            <div className={isBoardPage ? styles.list : styles.grid} style={{ gap: '1.25rem' }}>
                                                                {chapterTests.map(test => (
                                                                    <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            });
                        })()}
                    </div>
                )}

                {activeTab === 'subtopic' && (
                    <div style={{ marginTop: '1.5rem', position: 'relative' }}>
                        {(() => {
                            const subjectList = [...new Set(currentSubtopicTests.map(t => t.subject).filter(Boolean))];
                            return subjectList.map((subject, sIdx) => {
                                const subjectSpecificTests = currentSubtopicTests.filter(t => t.subject === subject);
                                // Default first subject to expanded
                                const isSubjectExpanded = expandedSubtopics[subject] ?? (sIdx === 0);
                                const chaptersInSubject = [...new Set(subjectSpecificTests.map(t => t.chapter).filter(Boolean))];

                                return (
                                    <div key={subject} style={{ marginBottom: '2rem', position: 'relative' }}>
                                        {/* Level 1: Subject Header (Premium Glass) */}
                                        <div
                                            onClick={() => setExpandedSubtopics(prev => ({ ...prev, [subject]: !isSubjectExpanded }))}
                                            className="glass-panel"
                                            style={{
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem 1.25rem',
                                                borderRadius: '12px',
                                                marginBottom: '1rem'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ 
                                                    background: 'var(--primary)', 
                                                    width: '4px', 
                                                    height: '24px', 
                                                    borderRadius: '2px',
                                                    boxShadow: '0 0 10px var(--primary)'
                                                }} />
                                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', margin: 0, letterSpacing: '-0.02em' }}>
                                                    {subject}
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '400', marginLeft: '0.75rem', opacity: 0.7 }}>
                                                        {subjectSpecificTests.length} conceptual tests
                                                    </span>
                                                </h3>
                                            </div>
                                            <div style={{ 
                                                width: '32px', 
                                                height: '32px', 
                                                borderRadius: '50%', 
                                                background: 'rgba(255,255,255,0.05)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                transition: 'transform 0.3s'
                                            }}>
                                                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{isSubjectExpanded ? '−' : '+'}</span>
                                            </div>
                                        </div>

                                        {isSubjectExpanded && (
                                            <div style={{ paddingTop: '0.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                                                {/* Vertical Connection Line */}
                                                <div className="roadmap-line" style={{ left: '0.9rem' }} />

                                                {chaptersInSubject.length > 0 ? (
                                                    chaptersInSubject.map((chapter, cIdx) => {
                                                        const chapterTests = subjectSpecificTests.filter(t => t.chapter === chapter);
                                                        const chapterKey = `${subject}-${chapter}`;
                                                        const isChapterExpanded = expandedSubtopicChapters[chapterKey] !== false;

                                                        return (
                                                            <div key={chapter} style={{ marginBottom: '2rem', position: 'relative' }}>
                                                                {/* Chapter Connection Dot */}
                                                                <div className="chapter-dot" style={{ left: '-1.85rem' }} />

                                                                {/* Level 2: Chapter Header */}
                                                                <div 
                                                                    onClick={() => setExpandedSubtopicChapters(prev => ({ ...prev, [chapterKey]: !isChapterExpanded }))}
                                                                    style={{
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '0.75rem',
                                                                        marginBottom: '1.25rem'
                                                                    }}
                                                                >
                                                                    <h4 style={{ 
                                                                        fontSize: '1.1rem', 
                                                                        fontWeight: '600', 
                                                                        margin: 0, 
                                                                        color: isChapterExpanded ? 'var(--foreground)' : 'var(--text-muted)',
                                                                        transition: 'color 0.2s'
                                                                    }}>
                                                                        {chapter}
                                                                        <span style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: '400', marginLeft: '0.5rem' }}>
                                                                            • {chapterTests.length} tests
                                                                        </span>
                                                                    </h4>
                                                                    <span style={{ fontSize: '0.7rem', opacity: 0.4 }}>{isChapterExpanded ? '▼' : '▶'}</span>
                                                                </div>

                                                                {/* Level 3: Test Grid */}
                                                                {isChapterExpanded && (
                                                                    <div className={isBoardPage ? styles.list : styles.grid} style={{ gap: '1.25rem' }}>
                                                                        {chapterTests.map(test => (
                                                                            <TestCard key={test.id} test={test} exam={exam} session={session} layout={isBoardPage ? "list" : "card"} />
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                                                        No subtopics available for this subject.
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            });
                        })()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ExamPage({ params }) {
    return (
        <Suspense fallback={<div className={styles.container} style={{ textAlign: 'center', padding: '50px', color: 'white' }}>Loading test series...</div>}>
            <ExamPageContent params={params} />
        </Suspense>
    );
}
