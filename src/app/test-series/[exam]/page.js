'use client';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import TestCard from '../../../components/TestCard';
import { neetTests } from '../../../data/exams/neet';
import { jeeMainsTests } from '../../../data/exams/jeeMains';
import { jeeAdvanceTests } from '../../../data/exams/jeeAdvanced';
import styles from './page.module.css';
import { use, useEffect, useState } from 'react';

export default function ExamPage({ params }) {
    // Unwrapping params using React.use()
    const unwrappedParams = use(params);
    const { exam } = unwrappedParams;

    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab');

    const [tests, setTests] = useState([]);
    const [loadingTests, setLoadingTests] = useState(true);

    useEffect(() => {
        let baseTests = [];
        if (exam === 'neet') baseTests = neetTests;
        else if (exam === 'jee-mains') baseTests = jeeMainsTests;
        else if (exam === 'jee-advance') baseTests = jeeAdvanceTests;
        
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
    const [expandedSubjects, setExpandedSubjects] = useState({});
    const [expandedChapters, setExpandedChapters] = useState({});
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

    const liveTests = tests.filter(t => t.type === 'LIVE');
    
    const monthLive = liveTests.filter(t => isCurrentMonth(t.liveStart))
        .sort((a, b) => new Date(a.liveStart) - new Date(b.liveStart));

    const otherEndedLive = liveTests.filter(t => !isCurrentMonth(t.liveStart) && new Date(t.liveEnd) < now)
        .sort((a, b) => new Date(b.liveEnd) - new Date(a.liveEnd));

    const otherUpcomingLive = liveTests.filter(t => !isCurrentMonth(t.liveStart) && new Date(t.liveStart) > now)
        .sort((a, b) => new Date(a.liveStart) - new Date(b.liveStart));

    // Filtering logic for active class
    const filterByClass = (testList) => {
        if (activeClass === 'All Test') return testList;
        return testList.filter(t => t.classGrade === activeClass);
    };

    const currentMockTests = filterByClass(mockTests);
    const currentPyqTests = filterByClass(pyqTests);
    const currentPartTests = filterByClass(partTests);
    const currentSubjectTests = filterByClass(subjectTests);
    const currentChapterTests = filterByClass(chapterTests);
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

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.header}>
                <h1 className={styles.title}>{exam?.replace('-', ' ').toUpperCase()} Series</h1>
                <p className={styles.subtitle}>Practice with curated mock tests and previous year papers.</p>
            </div>

            {/* Horizontal Tab Navigation */}
            <div className={styles.tabContainer}>
                {liveTests.length > 0 && (
                    <button
                        className={`${styles.tab} ${activeTab === 'live' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('live')}
                    >
                        <span className={styles.tabIcon}>🔴</span>
                        <span className={styles.tabText}>Live Tests</span>
                        <span className={styles.tabCount}>({liveTests.length})</span>
                    </button>
                )}
                <button
                    className={`${styles.tab} ${activeTab === 'mock' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('mock')}
                >
                    <span className={styles.tabIcon}>📝</span>
                    <span className={styles.tabText}>Mock Tests</span>
                    <span className={styles.tabCount}>({mockTests.length})</span>
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'pyq' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('pyq')}
                >
                    <span className={styles.tabIcon}>📚</span>
                    <span className={styles.tabText}>Previous Year Papers</span>
                    <span className={styles.tabCount}>({pyqTests.length})</span>
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'part' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('part')}
                >
                    <span className={styles.tabIcon}>🧩</span>
                    <span className={styles.tabText}>Part Tests</span>
                    <span className={styles.tabCount}>({partTests.length})</span>
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
            </div>

            <div className={styles.content}>
                {/* Class Toggle - Don't show for Live tests tab */}
                {activeTab !== 'live' && (
                    <div className={styles.classToggleContainer}>
                        <button 
                            className={`${styles.classToggleBtn} ${activeClass === 'All Test' ? styles.classToggleBtnActive : ''}`}
                            onClick={() => setActiveClass('All Test')}
                        >
                            All Test
                        </button>
                        <button 
                            className={`${styles.classToggleBtn} ${activeClass === '11' ? styles.classToggleBtnActive : ''}`}
                            onClick={() => setActiveClass('11')}
                        >
                            Class 11
                        </button>
                        <button 
                            className={`${styles.classToggleBtn} ${activeClass === '12' ? styles.classToggleBtnActive : ''}`}
                            onClick={() => setActiveClass('12')}
                        >
                            Class 12
                        </button>
                    </div>
                )}

                {loadingTests && <div style={{ textAlign: 'center', padding: '2rem' }}>Loading exams...</div>}
                
                {/* Live Tests Tab Content */}
                {!loadingTests && activeTab === 'live' && (
                    <div className={styles.liveContainer}>
                        {/* Ended Section (Other Months) */}
                        {otherEndedLive.length > 0 && (
                            <div className={styles.liveSection}>
                                <button 
                                    className={styles.collapsibleHeader}
                                    onClick={() => setLiveSections(prev => ({ ...prev, ended: !prev.ended }))}
                                >
                                    <div className={styles.headerTitle}>
                                        <span className={styles.dot} style={{ background: '#ef4444' }}></span>
                                        Ended Live Tests ({otherEndedLive.length})
                                    </div>
                                    <span className={styles.chevron}>{liveSections.ended ? '▲' : '▼'}</span>
                                </button>
                                {liveSections.ended && (
                                    <div className={styles.grid} style={{ marginTop: '1.5rem' }}>
                                        {otherEndedLive.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Current Month Section */}
                        <div className={styles.liveSection}>
                            <h2 className={styles.sectionTitle}>
                                Tests of {now.toLocaleString('default', { month: 'long' })} {currentYear}
                            </h2>
                            <div className={styles.grid}>
                                {monthLive.length > 0 ? (
                                    monthLive.map(test => (
                                        <TestCard key={test.id} test={test} exam={exam} />
                                    ))
                                ) : (
                                    <p className={styles.emptyText}>No live tests scheduled for this month.</p>
                                )}
                            </div>
                        </div>

                        {/* Upcoming Section (Other Months) */}
                        {otherUpcomingLive.length > 0 && (
                            <div className={styles.liveSection}>
                                <button 
                                    className={styles.collapsibleHeader}
                                    onClick={() => setLiveSections(prev => ({ ...prev, upcoming: !prev.upcoming }))}
                                >
                                    <div className={styles.headerTitle}>
                                        <span className={styles.dot} style={{ background: '#3b82f6' }}></span>
                                        Upcoming Live Tests ({otherUpcomingLive.length})
                                    </div>
                                    <span className={styles.chevron}>{liveSections.upcoming ? '▲' : '▼'}</span>
                                </button>
                                {liveSections.upcoming && (
                                    <div className={styles.grid} style={{ marginTop: '1.5rem' }}>
                                        {otherUpcomingLive.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Mock Tests Tab Content */}
                {activeTab === 'mock' && (
                    <div className={styles.grid}>
                        {currentMockTests.length > 0 ? (
                            currentMockTests.map(test => (
                                <TestCard key={test.id} test={test} exam={exam} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                No Class {activeClass} Mock Tests available yet.
                            </div>
                        )}
                    </div>
                )}

                {/* Previous Year Papers Tab Content */}
                {activeTab === 'pyq' && (
                    <div className={styles.grid}>
                        {currentPyqTests.length > 0 ? (
                            currentPyqTests.map(test => (
                                <TestCard key={test.id} test={test} exam={exam} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                No Class {activeClass} Previous Year Papers available yet.
                            </div>
                        )}
                    </div>
                )}

                {/* Part Tests Tab Content */}
                {!loadingTests && activeTab === 'part' && (
                    <div className={styles.liveContainer}>
                        {/* Ended Section (Other Months) */}
                        {otherEndedPart.length > 0 && (
                            <div className={styles.liveSection}>
                                <button 
                                    className={styles.collapsibleHeader}
                                    onClick={() => setPartSections(prev => ({ ...prev, ended: !prev.ended }))}
                                >
                                    <div className={styles.headerTitle}>
                                        <span className={styles.dot} style={{ background: '#ef4444' }}></span>
                                        Ended Part Tests ({otherEndedPart.length})
                                    </div>
                                    <span className={styles.chevron}>{partSections.ended ? '▲' : '▼'}</span>
                                </button>
                                {partSections.ended && (
                                    <div className={styles.grid} style={{ marginTop: '1.5rem' }}>
                                        {otherEndedPart.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Current Month Section */}
                        <div className={styles.liveSection}>
                            <h2 className={styles.sectionTitle}>
                                Tests of {now.toLocaleString('default', { month: 'long' })} {currentYear}
                            </h2>
                            <div className={styles.grid}>
                                {monthPart.length > 0 ? (
                                    monthPart.map(test => (
                                        <TestCard key={test.id} test={test} exam={exam} />
                                    ))
                                ) : (
                                    <p className={styles.emptyText}>No part tests scheduled for this month.</p>
                                )}
                            </div>
                        </div>

                        {/* Upcoming Section (Other Months) */}
                        {otherUpcomingPart.length > 0 && (
                            <div className={styles.liveSection}>
                                <button 
                                    className={styles.collapsibleHeader}
                                    onClick={() => setPartSections(prev => ({ ...prev, upcoming: !prev.upcoming }))}
                                >
                                    <div className={styles.headerTitle}>
                                        <span className={styles.dot} style={{ background: '#3b82f6' }}></span>
                                        Upcoming Part Tests ({otherUpcomingPart.length})
                                    </div>
                                    <span className={styles.chevron}>{partSections.upcoming ? '▲' : '▼'}</span>
                                </button>
                                {partSections.upcoming && (
                                    <div className={styles.grid} style={{ marginTop: '1.5rem' }}>
                                        {otherUpcomingPart.map(test => (
                                            <TestCard key={test.id} test={test} exam={exam} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Subjectwise Tests Tab Content */}
                {activeTab === 'subject' && (
                    <div style={{ marginTop: '1rem' }}>
                        {[...new Set(currentSubjectTests.map(t => t.subject).filter(Boolean))].map(subject => {
                            const subjectSpecificTests = currentSubjectTests.filter(t => t.subject === subject);
                            const isExpanded = expandedSubjects[subject] !== false; // Default Open

                            return (
                                <div key={subject} style={{ marginBottom: '2rem' }}>
                                    <div
                                        onClick={() => setExpandedSubjects(prev => ({ ...prev, [subject]: !isExpanded }))}
                                        style={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '1rem',
                                            padding: '0.75rem 1rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--foreground)' }}>{subject} ({subjectSpecificTests.length})</h3>
                                        <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{isExpanded ? '▲' : '▼'}</span>
                                    </div>

                                    {isExpanded && (
                                        <div className={styles.grid}>
                                            {subjectSpecificTests.map(test => (
                                                <TestCard key={test.id} test={test} exam={exam} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Chapterwise Tests Tab Content */}
                {activeTab === 'chapter' && (
                    <div style={{ marginTop: '1rem' }}>
                        {[...new Set(currentChapterTests.map(t => t.subject).filter(Boolean))].map(subject => {
                            const subjectSpecificTests = currentChapterTests.filter(t => t.subject === subject);
                            const isExpanded = expandedChapters[subject] !== false;

                            return (
                                <div key={subject} style={{ marginBottom: '2rem' }}>
                                    <div
                                        onClick={() => setExpandedChapters(prev => ({ ...prev, [subject]: !isExpanded }))}
                                        style={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '1rem',
                                            padding: '0.75rem 1rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--foreground)' }}>{subject} ({subjectSpecificTests.length})</h3>
                                        <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{isExpanded ? '▲' : '▼'}</span>
                                    </div>

                                    {isExpanded && (
                                        <div className={styles.grid}>
                                            {subjectSpecificTests.length > 0 ? (
                                                subjectSpecificTests.map(test => (
                                                    <TestCard key={test.id} test={test} exam={exam} />
                                                ))
                                            ) : (
                                                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                                    No Class {activeClass} Chapters for {subject}.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
