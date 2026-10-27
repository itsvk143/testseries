'use client';

import React, { useState, useMemo } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    BarChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell
} from 'recharts';
import { computeAnalytics } from '@/lib/analyticsEngine';
import LatexRenderer from '@/components/LatexRenderer';
import styles from './AnalyticsDashboard.module.css';

/**
 * PollTestSeries Complete Analytics & Student Performance Improvement System
 * Shared canonical implementation used by both Admin Panel and Student Dashboard.
 */
export default function AnalyticsDashboard({
    testResults = [],
    userId = null,
    userEmail = '',
    isAdmin = false,
    onAction = null
}) {
    // Filter State
    const [selectedExam, setSelectedExam] = useState('ALL');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [selectedTestId, setSelectedTestId] = useState('ALL');
    const [selectedSubject, setSelectedSubject] = useState('ALL');
    const [selectedAttemptId, setSelectedAttemptId] = useState(null);
    const [compareAttemptId, setCompareAttemptId] = useState(null);

    // Active Tab State
    const [activeTab, setActiveTab] = useState('OVERVIEW');

    // Interactive Question List State
    const [questionSearch, setQuestionSearch] = useState('');
    const [questionStatusFilter, setQuestionStatusFilter] = useState('ALL');
    const [inspectingQuestion, setInspectingQuestion] = useState(null);

    // Server-fetched authoritative analytics
    const [serverAnalytics, setServerAnalytics] = useState(null);
    const [isServerLoading, setIsServerLoading] = useState(false);

    // Local instant preview computation
    const localAnalytics = useMemo(() => {
        return computeAnalytics({
            testResults,
            exam: selectedExam,
            category: selectedCategory,
            testId: selectedTestId,
            subject: selectedSubject,
            attemptId: selectedAttemptId,
            compareAttemptId
        });
    }, [testResults, selectedExam, selectedCategory, selectedTestId, selectedSubject, selectedAttemptId, compareAttemptId]);

    // Reactive server hydration from /api/analytics
    React.useEffect(() => {
        let isMounted = true;
        const fetchServerAnalytics = async () => {
            try {
                setIsServerLoading(true);
                const params = new URLSearchParams();
                if (userId) params.set('userId', userId);
                if (userEmail) params.set('userEmail', userEmail);
                if (selectedExam !== 'ALL') params.set('exam', selectedExam);
                if (selectedCategory !== 'ALL') params.set('category', selectedCategory);
                if (selectedTestId !== 'ALL') params.set('testId', selectedTestId);
                if (selectedSubject !== 'ALL') params.set('subject', selectedSubject);
                if (selectedAttemptId) params.set('attemptId', selectedAttemptId);
                if (compareAttemptId) params.set('compareAttemptId', compareAttemptId);

                const res = await fetch(`/api/analytics?${params.toString()}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data?.success && data?.analytics && isMounted) {
                        setServerAnalytics(data.analytics);
                    }
                }
            } catch (err) {
                console.warn('Analytics server fetch error:', err);
            } finally {
                if (isMounted) setIsServerLoading(false);
            }
        };

        fetchServerAnalytics();
        return () => { isMounted = false; };
    }, [userId, userEmail, selectedExam, selectedCategory, selectedTestId, selectedSubject, selectedAttemptId, compareAttemptId]);

    // Use authoritative server analytics if available, otherwise local instant preview
    const analytics = serverAnalytics || localAnalytics;

    const {
        summary,
        availableFilters,
        activeScope,
        scoreTrend,
        selectedAttempt,
        improvementPlan,
        comparison,
        dataQualityWarnings
    } = analytics;

    // Filter Change Handlers (with strict dependency management)
    const handleExamChange = (e) => {
        const newExam = e.target.value;
        setSelectedExam(newExam);
        setSelectedCategory('ALL');
        setSelectedTestId('ALL');
        setSelectedSubject('ALL');
        setSelectedAttemptId(null);
        setCompareAttemptId(null);
    };

    const handleCategoryChange = (e) => {
        const newCat = e.target.value;
        setSelectedCategory(newCat);
        setSelectedTestId('ALL');
        setSelectedSubject('ALL');
        setSelectedAttemptId(null);
        setCompareAttemptId(null);
    };

    const handleTestChange = (e) => {
        const newTest = e.target.value;
        setSelectedTestId(newTest);
        setSelectedSubject('ALL');
        setSelectedAttemptId(null);
        setCompareAttemptId(null);
    };

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const handleAttemptChange = (e) => {
        const val = e.target.value;
        setSelectedAttemptId(val === 'LATEST' ? null : val);
    };

    const handleResetFilters = () => {
        setSelectedExam('ALL');
        setSelectedCategory('ALL');
        setSelectedTestId('ALL');
        setSelectedSubject('ALL');
        setSelectedAttemptId(null);
        setCompareAttemptId(null);
    };

    // Filtered Tests for the selected exam and category
    const availableTests = useMemo(() => {
        if (!availableFilters?.testsByScope) return [];
        let list = [];
        if (selectedExam !== 'ALL' && selectedCategory !== 'ALL') {
            const key = `${selectedExam}__${selectedCategory}`;
            list = availableFilters.testsByScope[key] || [];
        } else {
            // Aggregate all tests matching selected constraints
            Object.entries(availableFilters.testsByScope).forEach(([key, tests]) => {
                const [ex, cat] = key.split('__');
                if (selectedExam !== 'ALL' && ex !== selectedExam) return;
                if (selectedCategory !== 'ALL' && cat !== selectedCategory) return;
                list.push(...tests);
            });
        }
        // Deduplicate tests
        const seen = new Set();
        return list.filter(t => {
            if (seen.has(t.testId)) return false;
            seen.add(t.testId);
            return true;
        });
    }, [availableFilters, selectedExam, selectedCategory]);

    // Available categories for selected exam
    const availableCategories = useMemo(() => {
        if (!availableFilters?.categoriesByExam) return [];
        if (selectedExam !== 'ALL') {
            return availableFilters.categoriesByExam[selectedExam] || [];
        }
        // Combined across all exams
        const catMap = new Map();
        Object.values(availableFilters.categoriesByExam).forEach(cats => {
            cats.forEach(c => catMap.set(c.id, c.label));
        });
        return Array.from(catMap.entries()).map(([id, label]) => ({ id, label }));
    }, [availableFilters, selectedExam]);

    // Available subjects for selected test
    const availableSubjects = useMemo(() => {
        if (selectedTestId !== 'ALL' && availableFilters?.subjectsByTest?.[selectedTestId]) {
            return availableFilters.subjectsByTest[selectedTestId];
        }
        // If "ALL Tests" selected, aggregate unique subjects across attempts
        const subSet = new Set();
        (testResults || []).forEach(r => {
            if (Array.isArray(r.questions)) {
                r.questions.forEach(q => q.subject && subSet.add(q.subject.trim()));
            } else if (r.subjectStats) {
                Object.keys(r.subjectStats).forEach(s => subSet.add(s.trim()));
            }
        });
        return Array.from(subSet);
    }, [availableFilters, selectedTestId, testResults]);

    // Available attempts for selected test
    const availableAttempts = useMemo(() => {
        if (selectedTestId !== 'ALL' && availableFilters?.attemptsByTest?.[selectedTestId]) {
            return availableFilters.attemptsByTest[selectedTestId];
        }
        return [];
    }, [availableFilters, selectedTestId]);

    // Filter questions in Interactive Question List
    const filteredQuestionsList = useMemo(() => {
        if (!selectedAttempt?.questions) return [];
        return selectedAttempt.questions.filter(q => {
            if (questionStatusFilter !== 'ALL' && q.status !== questionStatusFilter) return false;
            if (questionSearch.trim()) {
                const term = questionSearch.toLowerCase().trim();
                const qNumMatch = String(q.qNum).includes(term);
                const subjMatch = q.subject?.toLowerCase().includes(term);
                const chapMatch = q.chapter?.toLowerCase().includes(term);
                const textMatch = q.text?.toLowerCase().includes(term);
                if (!qNumMatch && !subjMatch && !chapMatch && !textMatch) return false;
            }
            return true;
        });
    }, [selectedAttempt, questionStatusFilter, questionSearch]);

    // Fallback when no records exist
    if (!testResults || testResults.length === 0) {
        return (
            <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📊</div>
                <h3>No Completed Test Analytics Found</h3>
                <p>Complete your first test attempt to unlock detailed performance graphs, negative marking audits, and personalized improvement plans.</p>
            </div>
        );
    }

    return (
        <div className={styles.analyticsContainer}>
            {/* Header & Scope Banner */}
            <div className={styles.headerSection}>
                <div className={styles.titleRow}>
                    <h2 className={styles.title}>
                        <span>📈</span>
                        <span>{isAdmin ? 'Student Test Analytics & Audit' : 'My Performance Analytics'}</span>
                    </h2>
                    <div className={styles.scopeBadge}>
                        <span>🎯 Active Scope:</span>
                        <span>{activeScope.exam}</span>
                        <span>•</span>
                        <span>{activeScope.category}</span>
                        <span>•</span>
                        <span>{activeScope.testId}</span>
                        <span>•</span>
                        <span>{activeScope.subject}</span>
                        {selectedTestId !== 'ALL' && (
                            <>
                                <span>•</span>
                                <span>{selectedAttempt ? `Attempt ${availableAttempts.find(a => a.attemptId === selectedAttempt.attemptId)?.attemptNumber || 1}` : 'Latest'}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Section A: Dependent Analytics Filter Panel */}
            <div className={styles.filterPanel}>
                <div className={styles.filterHeader}>
                    <div className={styles.filterTitle}>
                        <span>🔍</span>
                        <span>Analytics Filter Panel</span>
                    </div>
                    <button onClick={handleResetFilters} className={styles.resetButton} title="Reset all filters to default">
                        ↺ Reset Filters
                    </button>
                </div>

                <div className={styles.filterGrid}>
                    {/* Filter A: Examination */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Examination</label>
                        <select value={selectedExam} onChange={handleExamChange} className={styles.filterSelect}>
                            <option value="ALL">All Examinations</option>
                            {availableFilters?.exams?.map(ex => (
                                <option key={ex.id} value={ex.id}>{ex.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filter B: Test Category */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Test Category</label>
                        <select value={selectedCategory} onChange={handleCategoryChange} className={styles.filterSelect}>
                            <option value="ALL">All Categories</option>
                            {availableCategories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filter C: Select Test */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Select Test</label>
                        <select value={selectedTestId} onChange={handleTestChange} className={styles.filterSelect}>
                            <option value="ALL">All Tests ({availableTests.length})</option>
                            {availableTests.map(t => (
                                <option key={t.testId} value={t.testId}>{t.title || t.testId}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filter D: Select Subject */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Select Subject</label>
                        <select value={selectedSubject} onChange={handleSubjectChange} className={styles.filterSelect}>
                            <option value="ALL">All Subjects</option>
                            {availableSubjects.map(subj => (
                                <option key={subj} value={subj}>{subj}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filter E: Select Attempt */}
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Select Attempt</label>
                        <select
                            value={selectedAttemptId || 'LATEST'}
                            onChange={handleAttemptChange}
                            disabled={selectedTestId === 'ALL' || availableAttempts.length === 0}
                            className={styles.filterSelect}
                        >
                            <option value="LATEST">
                                {availableAttempts.length > 0 ? `Latest Submitted Attempt (Att. ${availableAttempts.length})` : 'Latest Attempt'}
                            </option>
                            {availableAttempts.map(att => (
                                <option key={att.attemptId} value={att.attemptId}>
                                    Attempt {att.attemptNumber} — {att.score}/{att.totalMarks} ({att.percentage}%) [{new Date(att.date).toLocaleDateString()}]
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Admin Data Quality Alerts Banner */}
            {isAdmin && dataQualityWarnings && dataQualityWarnings.length > 0 && (
                <div className={styles.auditBox}>
                    <div className={styles.auditTitle}>
                        <span>⚠️</span>
                        <span>Data Quality Audit Warnings ({dataQualityWarnings.length})</span>
                    </div>
                    {dataQualityWarnings.map((warn, i) => (
                        <li key={i} className={styles.auditItem}>{warn}</li>
                    ))}
                </div>
            )}

            {/* Section B: 14 KPI Summary Cards */}
            <div className={styles.kpiGrid}>
                {/* 1. Tests Taken */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Tests Taken</span>
                        <span className={styles.kpiIcon}>📝</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.testsTaken}</div>
                    <span className={styles.kpiSub}>Matching scope</span>
                </div>

                {/* 2. Unique Tests */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Unique Tests</span>
                        <span className={styles.kpiIcon}>📚</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.uniqueTests}</div>
                    <span className={styles.kpiSub}>Distinct papers</span>
                </div>

                {/* 3. Best Score */}
                <div className={`${styles.kpiCard} ${styles.kpiCardSuccess}`}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Best Score</span>
                        <span className={styles.kpiIcon}>⭐</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.bestScore}</div>
                    <span className={styles.kpiSub}>Highest obtained</span>
                </div>

                {/* 4. Latest Score */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Latest Score</span>
                        <span className={styles.kpiIcon}>🎯</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.latestScore}</div>
                    <span className={styles.kpiSub}>Most recent</span>
                </div>

                {/* 5. Average Score */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Avg Score</span>
                        <span className={styles.kpiIcon}>📊</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.averageScore}</div>
                    <span className={styles.kpiSub}>{summary.averageScorePercentage}% avg</span>
                </div>

                {/* 6. Total Correct */}
                <div className={`${styles.kpiCard} ${styles.kpiCardSuccess}`}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Total Correct</span>
                        <span className={styles.kpiIcon}>✅</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.totalCorrect}</div>
                    <span className={styles.kpiSub}>Questions</span>
                </div>

                {/* 7. Total Incorrect */}
                <div className={`${styles.kpiCard} ${styles.kpiCardNegative}`}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Total Wrong</span>
                        <span className={styles.kpiIcon}>❌</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.totalWrong}</div>
                    <span className={styles.kpiSub}>Questions</span>
                </div>

                {/* 8. Total Unattempted */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Unattempted</span>
                        <span className={styles.kpiIcon}>⚪</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.totalUnattempted}</div>
                    <span className={styles.kpiSub}>Questions</span>
                </div>

                {/* 9. Average Accuracy */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Accuracy</span>
                        <span className={styles.kpiIcon}>🎯</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.averageAccuracy}%</div>
                    <span className={styles.kpiSub}>Correct / Answered</span>
                </div>

                {/* 10. Attempt Rate */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Attempt Rate</span>
                        <span className={styles.kpiIcon}>⚡</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.averageAttemptRate}%</div>
                    <span className={styles.kpiSub}>Answered / Total</span>
                </div>

                {/* 11. Total Negative Marks Lost (MANDATORY RED) */}
                <div className={`${styles.kpiCard} ${styles.kpiCardNegative}`}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Negative Marks</span>
                        <span className={styles.kpiIcon}>🛑</span>
                    </div>
                    <div className={styles.kpiValue}>-{summary.totalNegativeMarksLost}</div>
                    <span className={styles.kpiSub}>Marks lost to penalties</span>
                </div>

                {/* 12. Total Time */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiHeader}>
                        <span className={styles.kpiLabel}>Total Time</span>
                        <span className={styles.kpiIcon}>⏱️</span>
                    </div>
                    <div className={styles.kpiValue}>{summary.totalTimeFormatted}</div>
                    <span className={styles.kpiSub}>Time invested</span>
                </div>

                {/* 13. Student Rank (if single test selected) */}
                {selectedAttempt && (
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiHeader}>
                            <span className={styles.kpiLabel}>Rank in Test</span>
                            <span className={styles.kpiIcon}>🏆</span>
                        </div>
                        <div className={styles.kpiValue} style={{ color: '#fbbf24' }}>
                            {selectedAttempt.rank !== 'N/A' ? `#${selectedAttempt.rank}` : 'N/A'}
                        </div>
                        <span className={styles.kpiSub}>
                            {selectedAttempt.totalStudents > 0 ? `Out of ${selectedAttempt.totalStudents} students` : 'Standard competition'}
                        </span>
                    </div>
                )}
            </div>

            {/* Navigation Tabs Bar */}
            <div className={styles.tabsBar}>
                <button
                    onClick={() => setActiveTab('OVERVIEW')}
                    className={`${styles.tabButton} ${activeTab === 'OVERVIEW' ? styles.tabActive : ''}`}
                >
                    <span>📈</span> Score Trend
                </button>
                <button
                    onClick={() => setActiveTab('SUBJECTS')}
                    className={`${styles.tabButton} ${activeTab === 'SUBJECTS' ? styles.tabActive : ''}`}
                >
                    <span>🧪</span> Subject Performance
                </button>
                <button
                    onClick={() => setActiveTab('INCORRECT')}
                    className={`${styles.tabButton} ${activeTab === 'INCORRECT' ? styles.tabActive : ''}`}
                >
                    <span>❌</span> Incorrect Questions
                    {selectedAttempt?.incorrectQuestions?.length > 0 && (
                        <span className={styles.tabBadge}>{selectedAttempt.incorrectQuestions.length}</span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('NEGATIVE')}
                    className={`${styles.tabButton} ${activeTab === 'NEGATIVE' ? styles.tabActive : ''}`}
                >
                    <span>🛑</span> Negative Marking (Red)
                </button>
                <button
                    onClick={() => setActiveTab('CHAPTERS')}
                    className={`${styles.tabButton} ${activeTab === 'CHAPTERS' ? styles.tabActive : ''}`}
                >
                    <span>📑</span> Chapter & Topic Breakdown
                </button>
                <button
                    onClick={() => setActiveTab('COMPARE')}
                    className={`${styles.tabButton} ${activeTab === 'COMPARE' ? styles.tabActive : ''}`}
                >
                    <span>⚖️</span> Compare Attempts
                </button>
                <button
                    onClick={() => setActiveTab('IMPROVEMENT')}
                    className={`${styles.tabButton} ${activeTab === 'IMPROVEMENT' ? styles.tabActive : ''}`}
                >
                    <span>🚀</span> My Improvement Plan
                </button>
                {isAdmin && (
                    <button
                        onClick={() => setActiveTab('AUDIT')}
                        className={`${styles.tabButton} ${activeTab === 'AUDIT' ? styles.tabActive : ''}`}
                    >
                        <span>🛡️</span> Admin Question Audit
                    </button>
                )}
            </div>

            {/* TAB 1: OVERVIEW & CATEGORY-ISOLATED SCORE TREND */}
            {activeTab === 'OVERVIEW' && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardTitle}>
                                <span>📈</span>
                                <span>Score Trend & Progress Tracking</span>
                            </div>
                            <div className={styles.cardSubtitle}>
                                Strictly scoped to eligible {selectedCategory !== 'ALL' ? activeScope.category : 'active test'} attempts. Never mixes Part Tests with Chapterwise Tests.
                            </div>
                        </div>
                    </div>

                    {scoreTrend.length > 0 ? (
                        <div className={styles.chartContainer}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={scoreTrend}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis dataKey="date" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                const d = payload[0].payload;
                                                return (
                                                    <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                                                        <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{d.date} • {d.categoryLabel}</p>
                                                        <p style={{ fontWeight: 'bold', margin: '4px 0' }}>{d.testTitle}</p>
                                                        <p style={{ color: '#818cf8', fontWeight: 'bold' }}>
                                                            Score: {d.score} / {d.maximumMarks} ({d.percentage}%)
                                                        </p>
                                                        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Attempt #{d.attemptIndex}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        name="Obtained Marks"
                                        stroke="#8b5cf6"
                                        strokeWidth={3}
                                        dot={{ r: 5, fill: '#8b5cf6' }}
                                        activeDot={{ r: 7 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>No eligible score trend points found for this filter.</div>
                    )}
                </div>
            )}

            {/* TAB 2: SUBJECT-WISE PERFORMANCE */}
            {activeTab === 'SUBJECTS' && (
                <div>
                    {selectedAttempt?.subjects?.length > 0 ? (
                        <div className={styles.gridTwo}>
                            {/* Graph A: Subject Score vs Max Marks */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>
                                        <span>📊</span>
                                        <span>Graph A: Obtained vs Maximum Marks</span>
                                    </div>
                                </div>
                                <div className={styles.chartContainer}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={selectedAttempt.subjects}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="subject" stroke="#94a3b8" />
                                            <YAxis stroke="#94a3b8" />
                                            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                            <Legend />
                                            <Bar dataKey="score" name="Marks Obtained" fill="#6366f1" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="maxMarks" name="Maximum Marks" fill="#334155" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Graph B: Correct vs Incorrect vs Unattempted */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>
                                        <span>🎯</span>
                                        <span>Graph B: Correct / Wrong / Unattempted</span>
                                    </div>
                                </div>
                                <div className={styles.chartContainer}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={selectedAttempt.subjects}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="subject" stroke="#94a3b8" />
                                            <YAxis stroke="#94a3b8" />
                                            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                            <Legend />
                                            <Bar dataKey="correct" name="Correct" fill="#10b981" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="wrong" name="Incorrect" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="unattempted" name="Unattempted" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Graph C: Subject Accuracy & Attempt Rate */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>
                                        <span>⚡</span>
                                        <span>Graph C: Accuracy (%) & Attempt Rate (%)</span>
                                    </div>
                                </div>
                                <div className={styles.chartContainer}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={selectedAttempt.subjects}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="subject" stroke="#94a3b8" />
                                            <YAxis domain={[0, 100]} stroke="#94a3b8" />
                                            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                            <Legend />
                                            <Bar dataKey="accuracy" name="Accuracy (%)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="attemptRate" name="Attempt Rate (%)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Graph E: Subject Time Analysis */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>
                                        <span>⏱️</span>
                                        <span>Graph E: Subject Time Investment (Seconds)</span>
                                    </div>
                                </div>
                                <div className={styles.chartContainer}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={selectedAttempt.subjects}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                            <XAxis dataKey="subject" stroke="#94a3b8" />
                                            <YAxis stroke="#94a3b8" />
                                            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                            <Legend />
                                            <Bar dataKey="timeSpent" name="Total Time (s)" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="avgTimePerQ" name="Avg Time/Q (s)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>No subject breakdown records found for this scope.</div>
                    )}
                </div>
            )}

            {/* TAB 3: DEDICATED INCORRECT QUESTIONS */}
            {activeTab === 'INCORRECT' && (
                <div>
                    <div className={styles.gridTwo} style={{ marginBottom: '1.5rem' }}>
                        {/* Incorrect Questions by Subject */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>
                                    <span>❌</span>
                                    <span>Incorrect Questions by Subject</span>
                                </div>
                            </div>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={selectedAttempt?.incorrectBySubject || []}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                        <XAxis dataKey="subject" stroke="#94a3b8" />
                                        <YAxis stroke="#94a3b8" />
                                        <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                        <Bar dataKey="count" name="Incorrect Count" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Incorrect Questions by Chapter */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>
                                    <span>📑</span>
                                    <span>Incorrect Questions by Chapter (Top 8)</span>
                                </div>
                            </div>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={(selectedAttempt?.incorrectByChapter || []).slice(0, 8)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                        <XAxis dataKey="chapter" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                                        <YAxis stroke="#94a3b8" />
                                        <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', borderRadius: '8px' }} />
                                        <Bar dataKey="count" name="Incorrect Count" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Question List Table */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.cardTitle}>
                                    <span>🔎</span>
                                    <span>Interactive Question Inspector ({filteredQuestionsList.length} Questions)</span>
                                </div>
                                <div className={styles.cardSubtitle}>
                                    Click any question row to inspect the complete question, recorded answer, correct answer key, and solution.
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <input
                                    type="text"
                                    placeholder="Search by Q#, Subject, Chapter..."
                                    value={questionSearch}
                                    onChange={(e) => setQuestionSearch(e.target.value)}
                                    className={styles.filterSelect}
                                    style={{ minWidth: '220px' }}
                                />
                                <select
                                    value={questionStatusFilter}
                                    onChange={(e) => setQuestionStatusFilter(e.target.value)}
                                    className={styles.filterSelect}
                                >
                                    <option value="ALL">All Statuses</option>
                                    <option value="INCORRECT">Incorrect Only (❌)</option>
                                    <option value="CORRECT">Correct Only (✅)</option>
                                    <option value="UNATTEMPTED">Unattempted Only (⚪)</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Q#</th>
                                        <th>Subject</th>
                                        <th>Chapter</th>
                                        <th>Your Answer</th>
                                        <th>Correct Key</th>
                                        <th>Status</th>
                                        <th>Marks</th>
                                        <th>Penalty</th>
                                        <th>Solution</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredQuestionsList.map((q) => (
                                        <tr
                                            key={q.qNum}
                                            onClick={() => setInspectingQuestion(q)}
                                            className={styles.questionRow}
                                        >
                                            <td style={{ fontWeight: 'bold' }}>#{q.qNum}</td>
                                            <td>{q.subject}</td>
                                            <td>{q.chapter}</td>
                                            <td style={{ fontWeight: 600 }}>{q.studentAnswer || '—'}</td>
                                            <td style={{ color: '#34d399', fontWeight: 600 }}>{q.correctAnswer}</td>
                                            <td>
                                                {q.status === 'CORRECT' ? (
                                                    <span className={styles.badgeCorrect}>CORRECT</span>
                                                ) : q.status === 'INCORRECT' ? (
                                                    <span className={styles.badgeIncorrect}>INCORRECT</span>
                                                ) : (
                                                    <span className={styles.badgeUnattempted}>UNATTEMPTED</span>
                                                )}
                                            </td>
                                            <td className={q.marksAwarded > 0 ? styles.positiveText : q.marksAwarded < 0 ? styles.negativeText : ''}>
                                                {q.marksAwarded > 0 ? `+${q.marksAwarded}` : q.marksAwarded}
                                            </td>
                                            <td className={q.negativeMarksLost > 0 ? styles.negativeText : ''}>
                                                {q.negativeMarksLost > 0 ? `-${q.negativeMarksLost}` : '0'}
                                            </td>
                                            <td>{q.hasSolution ? '✅ Available' : '⚠️ Missing'}</td>
                                            <td>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setInspectingQuestion(q);
                                                    }}
                                                    className={styles.planButton}
                                                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                                                >
                                                    👁️ Review
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredQuestionsList.length === 0 && (
                                        <tr>
                                            <td colSpan={10} style={{ textAlign: 'center', padding: '30px' }}>
                                                No questions matching the selected filter.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 4: DEDICATED NEGATIVE MARKING (MANDATORY RED) */}
            {activeTab === 'NEGATIVE' && (
                <div>
                    <div className={styles.gridTwo}>
                        {/* Graph A & B: Negative Marks Lost by Subject */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <div className={styles.cardTitle}>
                                        <span style={{ color: '#ef4444' }}>🛑</span>
                                        <span>Graph B: Negative Marks Lost by Subject</span>
                                    </div>
                                    <div className={styles.cardSubtitle}>
                                        MANDATORY RED: Deductions incurred from incorrect answers in each subject.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={selectedAttempt?.subjects || []}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                        <XAxis dataKey="subject" stroke="#94a3b8" />
                                        <YAxis stroke="#94a3b8" />
                                        <Tooltip
                                            formatter={(value) => [`-${value} marks lost`, 'Negative Deduction']}
                                            contentStyle={{ background: '#0f172a', border: '1px solid #ef4444', color: '#fff', borderRadius: '8px' }}
                                        />
                                        <Bar dataKey="negativeMarksLost" name="Negative Marks Lost" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Graph C: Negative Marks Lost by Chapter */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <div className={styles.cardTitle}>
                                        <span style={{ color: '#ef4444' }}>🛑</span>
                                        <span>Graph C: Negative Marks Lost by Chapter (Top 8)</span>
                                    </div>
                                    <div className={styles.cardSubtitle}>
                                        Chapters where incorrect answers caused score penalties.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={(selectedAttempt?.chapters || []).filter(c => c.negativeMarksLost > 0).slice(0, 8)}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                        <XAxis dataKey="chapter" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                                        <YAxis stroke="#94a3b8" />
                                        <Tooltip
                                            formatter={(value) => [`-${value} marks lost`, 'Negative Deduction']}
                                            contentStyle={{ background: '#0f172a', border: '1px solid #ef4444', color: '#fff', borderRadius: '8px' }}
                                        />
                                        <Bar dataKey="negativeMarksLost" name="Marks Lost" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Negative Marking Reconciled Summary */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}>
                                <span>📋</span>
                                <span>Negative Marking Mathematical Audit</span>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                            <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>TOTAL WRONG ANSWERS</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ef4444' }}>{selectedAttempt?.wrongCount || 0}</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Response count</div>
                            </div>
                            <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #ef4444' }}>
                                <div style={{ fontSize: '0.8rem', color: '#fca5a5' }}>TOTAL SCORE DEDUCTION</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ef4444' }}>-{selectedAttempt?.totalNegativeMarksLost || 0} Marks</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Direct penalty</div>
                            </div>
                            <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>GROSS SCORE BEFORE PENALTY</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>
                                    +{(selectedAttempt?.correctCount || 0) * (selectedAttempt?.examType === 'bitsat' ? 3 : 4)} Marks
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>From correct answers</div>
                            </div>
                            <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>FINAL NET OBTAINED SCORE</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#818cf8' }}>
                                    {selectedAttempt?.obtainedMarks || 0} / {selectedAttempt?.maximumMarks || 0}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>After penalty</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 5: CHAPTER & TOPIC BREAKDOWN */}
            {activeTab === 'CHAPTERS' && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardTitle}>
                                <span>📑</span>
                                <span>Chapter-Wise Performance Breakdown</span>
                            </div>
                            <div className={styles.cardSubtitle}>
                                Performance metrics calculated across every chapter evaluated in the selected scope.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Chapter</th>
                                    <th>Total Qs</th>
                                    <th>Correct</th>
                                    <th>Wrong</th>
                                    <th>Unattempted</th>
                                    <th>Score</th>
                                    <th>Max</th>
                                    <th>Percentage</th>
                                    <th>Accuracy</th>
                                    <th>Negative Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(selectedAttempt?.chapters || []).map((c, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 'bold' }}>{c.subject}</td>
                                        <td>{c.chapter}</td>
                                        <td>{c.total}</td>
                                        <td style={{ color: '#10b981', fontWeight: 600 }}>{c.correct}</td>
                                        <td style={{ color: '#ef4444', fontWeight: 600 }}>{c.wrong}</td>
                                        <td style={{ color: '#94a3b8' }}>{c.unattempted}</td>
                                        <td style={{ fontWeight: 700 }}>{c.score}</td>
                                        <td>{c.maxMarks}</td>
                                        <td>{c.percentage}%</td>
                                        <td style={{ color: c.accuracy >= 75 ? '#10b981' : c.accuracy >= 50 ? '#f59e0b' : '#ef4444', fontWeight: 600 }}>
                                            {c.accuracy}%
                                        </td>
                                        <td className={c.negativeMarksLost > 0 ? styles.negativeText : ''}>
                                            {c.negativeMarksLost > 0 ? `-${c.negativeMarksLost}` : '0'}
                                        </td>
                                    </tr>
                                ))}
                                {(!selectedAttempt?.chapters || selectedAttempt.chapters.length === 0) && (
                                    <tr>
                                        <td colSpan={11} style={{ textAlign: 'center', padding: '30px' }}>
                                            No chapterwise metadata found for this test.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB 6: COMPARE ATTEMPTS */}
            {activeTab === 'COMPARE' && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardTitle}>
                                <span>⚖️</span>
                                <span>Compare Attempts Side-by-Side</span>
                            </div>
                            <div className={styles.cardSubtitle}>
                                Select another attempt to evaluate progress, score changes, and accuracy improvements.
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <label className={styles.filterLabel}>Compare With:</label>
                            <select
                                value={compareAttemptId || ''}
                                onChange={(e) => setCompareAttemptId(e.target.value || null)}
                                className={styles.filterSelect}
                            >
                                <option value="">Select Attempt to Compare...</option>
                                {availableAttempts
                                    .filter(a => a.attemptId !== selectedAttempt?.attemptId)
                                    .map(att => (
                                        <option key={att.attemptId} value={att.attemptId}>
                                            Attempt {att.attemptNumber} ({att.score}/{att.totalMarks} — {new Date(att.date).toLocaleDateString()})
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    {comparison ? (
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Metric</th>
                                        <th>Attempt A (Current)</th>
                                        <th>Attempt B (Baseline)</th>
                                        <th>Difference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Test Score</td>
                                        <td style={{ fontWeight: 700 }}>{comparison.attemptA.score} / {comparison.attemptA.maxMarks}</td>
                                        <td>{comparison.attemptB.score} / {comparison.attemptB.maxMarks}</td>
                                        <td className={comparison.diff.score >= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.score >= 0 ? `+${comparison.diff.score}` : comparison.diff.score}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Score Percentage</td>
                                        <td>{comparison.attemptA.percentage}%</td>
                                        <td>{comparison.attemptB.percentage}%</td>
                                        <td className={comparison.diff.percentage >= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.percentage >= 0 ? `+${comparison.diff.percentage}%` : `${comparison.diff.percentage}%`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Accuracy</td>
                                        <td>{comparison.attemptA.accuracy}%</td>
                                        <td>{comparison.attemptB.accuracy}%</td>
                                        <td className={comparison.diff.accuracy >= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.accuracy >= 0 ? `+${comparison.diff.accuracy}%` : `${comparison.diff.accuracy}%`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Negative Marks Lost</td>
                                        <td className={styles.negativeText}>-{comparison.attemptA.negativeMarks}</td>
                                        <td className={styles.negativeText}>-{comparison.attemptB.negativeMarks}</td>
                                        <td className={comparison.diff.negativeMarks <= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.negativeMarks <= 0 ? `${comparison.diff.negativeMarks} (Improved)` : `+${comparison.diff.negativeMarks} (Worse)`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Correct Answers</td>
                                        <td>{comparison.attemptA.correct}</td>
                                        <td>{comparison.attemptB.correct}</td>
                                        <td className={comparison.diff.correct >= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.correct >= 0 ? `+${comparison.diff.correct}` : comparison.diff.correct}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Incorrect Answers</td>
                                        <td>{comparison.attemptA.wrong}</td>
                                        <td>{comparison.attemptB.wrong}</td>
                                        <td className={comparison.diff.wrong <= 0 ? styles.positiveText : styles.negativeText}>
                                            {comparison.diff.wrong <= 0 ? `${comparison.diff.wrong} (Better)` : `+${comparison.diff.wrong} (Higher)`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: 600 }}>Duration</td>
                                        <td>{comparison.attemptA.duration}</td>
                                        <td>{comparison.attemptB.duration}</td>
                                        <td>—</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            Select a second attempt from the dropdown above to view an immediate side-by-side performance delta.
                        </div>
                    )}
                </div>
            )}

            {/* TAB 7: PERSONALIZED STUDENT IMPROVEMENT PLAN */}
            {activeTab === 'IMPROVEMENT' && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardTitle}>
                                <span>🚀</span>
                                <span>Personalized Performance Improvement Plan</span>
                            </div>
                            <div className={styles.cardSubtitle}>
                                Evidence-based recommendations generated from student error patterns, negative marking, and accuracy benchmarks.
                            </div>
                        </div>
                    </div>

                    <div className={styles.planGrid}>
                        {improvementPlan.map((plan) => (
                            <div
                                key={plan.priority}
                                className={`${styles.planCard} ${plan.priority === 1 ? styles.planCardPriority1 : plan.priority === 2 ? styles.planCardPriority2 : ''}`}
                            >
                                <div>
                                    <div className={styles.planHeader}>
                                        <span className={styles.planPriorityBadge}>Priority #{plan.priority}</span>
                                    </div>
                                    <div className={styles.planTitle}>{plan.title}</div>
                                    <p className={styles.planReason}>{plan.reason}</p>
                                </div>

                                <div className={styles.planEvidence}>
                                    <strong>Evidence:</strong> {plan.evidence}
                                </div>

                                <div className={styles.planAction}>
                                    <strong>Action:</strong> {plan.recommendedAction}
                                </div>

                                <button
                                    onClick={() => {
                                        if (plan.actionType === 'REVIEW_QUESTIONS') {
                                            setActiveTab('INCORRECT');
                                            if (plan.payload?.chapter) {
                                                setQuestionSearch(plan.payload.chapter);
                                            }
                                        } else if (plan.actionType === 'FILTER_SUBJECT' && plan.payload?.subject) {
                                            setSelectedSubject(plan.payload.subject);
                                            setActiveTab('SUBJECTS');
                                        } else {
                                            setActiveTab('INCORRECT');
                                        }
                                    }}
                                    className={styles.planButton}
                                >
                                    <span>👉</span> Take Action
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB 8: ADMIN QUESTION AUDIT */}
            {isAdmin && activeTab === 'AUDIT' && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardTitle}>
                                <span>🛡️</span>
                                <span>Admin Assessment & Question Audit</span>
                            </div>
                            <div className={styles.cardSubtitle}>
                                Inspect test integrity, question key validations, solution completeness, and calculation consistency.
                            </div>
                        </div>
                    </div>

                    {dataQualityWarnings && dataQualityWarnings.length > 0 ? (
                        <div className={styles.auditBox} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.auditTitle}>
                                <span>⚠️</span> Inconsistencies Detected in Selected Scope
                            </div>
                            {dataQualityWarnings.map((warn, i) => (
                                <li key={i} className={styles.auditItem}>{warn}</li>
                            ))}
                        </div>
                    ) : (
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '16px', borderRadius: '12px', color: '#34d399', marginBottom: '1.5rem' }}>
                            ✅ All questions, answer keys, solutions, and marking schemes in this attempt pass authoritative data-integrity checks.
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>AUTHORITATIVE EVALUATION STATUS</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399', marginTop: '4px' }}>
                                {selectedAttempt?.status || 'EVALUATED'}
                            </div>
                        </div>
                        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>TAB SWITCHING VIOLATIONS</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: (selectedAttempt?.violationCount || 0) > 0 ? '#f59e0b' : '#34d399', marginTop: '4px' }}>
                                🛡️ {selectedAttempt?.violationCount || 0} Events Logged
                            </div>
                        </div>
                        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>QUESTIONS WITH MISSING SOLUTIONS</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>
                                {(selectedAttempt?.questions || []).filter(q => !q.hasSolution).length} Questions
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* INTERACTIVE QUESTION INSPECTION MODAL */}
            {inspectingQuestion && (
                <div className={styles.modalBackdrop} onClick={() => setInspectingQuestion(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setInspectingQuestion(null)}>✕</button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>Question #{inspectingQuestion.qNum}</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>({inspectingQuestion.subject} • {inspectingQuestion.chapter})</span>
                            {inspectingQuestion.status === 'CORRECT' ? (
                                <span className={styles.badgeCorrect}>CORRECT (+{inspectingQuestion.marksAwarded})</span>
                            ) : inspectingQuestion.status === 'INCORRECT' ? (
                                <span className={styles.badgeIncorrect}>INCORRECT (-{inspectingQuestion.negativeMarksLost})</span>
                            ) : (
                                <span className={styles.badgeUnattempted}>UNATTEMPTED (0)</span>
                            )}
                        </div>

                        {/* Question Text with KaTeX LaTeX */}
                        <div style={{ background: '#0f172a', padding: '18px', borderRadius: '12px', border: '1px solid #334155', marginBottom: '18px', fontSize: '1rem', lineHeight: 1.6 }}>
                            <LatexRenderer text={inspectingQuestion.text} />
                            {inspectingQuestion.image && (
                                <div style={{ marginTop: '12px' }}>
                                    <img
                                        src={inspectingQuestion.image}
                                        alt={`Question #${inspectingQuestion.qNum}`}
                                        style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Options List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                            {(inspectingQuestion.options || []).map((opt, idx) => {
                                const optKey = opt.id || String.fromCharCode(97 + idx);
                                const isStudentPick = String(inspectingQuestion.studentAnswer).toLowerCase() === String(optKey).toLowerCase();
                                const isCorrectPick = String(inspectingQuestion.correctAnswer).toLowerCase() === String(optKey).toLowerCase();

                                let borderStyle = '#334155';
                                let bgStyle = '#0f172a';
                                if (isCorrectPick) {
                                    borderStyle = '#10b981';
                                    bgStyle = 'rgba(16, 185, 129, 0.1)';
                                } else if (isStudentPick && !isCorrectPick) {
                                    borderStyle = '#ef4444';
                                    bgStyle = 'rgba(239, 68, 68, 0.1)';
                                }

                                return (
                                    <div
                                        key={optKey}
                                        style={{
                                            border: `1px solid ${borderStyle}`,
                                            background: bgStyle,
                                            padding: '12px 14px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        <span style={{
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            background: isCorrectPick ? '#10b981' : isStudentPick ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                                            color: '#fff'
                                        }}>
                                            {String(optKey).toUpperCase()}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <LatexRenderer text={opt.text || (typeof opt === 'string' ? opt : '')} />
                                        </div>
                                        {isCorrectPick && <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.8rem' }}>✓ Correct Key</span>}
                                        {isStudentPick && !isCorrectPick && <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.8rem' }}>✗ Your Choice</span>}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Step-by-Step Solution & Explanation */}
                        <div style={{ background: '#0f172a', border: '1px solid #6366f1', borderRadius: '12px', padding: '18px' }}>
                            <div style={{ color: '#a5b4fc', fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>💡</span>
                                <span>Step-by-Step Solution & Explanation:</span>
                            </div>
                            {inspectingQuestion.explanation ? (
                                <div style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                                    <LatexRenderer text={inspectingQuestion.explanation} />
                                </div>
                            ) : (
                                <p style={{ color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>
                                    No detailed written explanation is on file for this question.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
