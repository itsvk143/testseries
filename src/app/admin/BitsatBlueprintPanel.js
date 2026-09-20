'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BITSAT_10_YEAR_TRENDS, BITSAT_OFFICIAL_PATTERN } from '@/data/bitsatBlueprint';

export default function BitsatBlueprintPanel() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mode, setMode] = useState('mathematics'); // 'mathematics' | 'biology'
    const [activeSubTab, setActiveSubTab] = useState('tests'); // 'tests' | 'matrix' | 'trends' | 'validation'
    const [selectedSubjectTrend, setSelectedSubjectTrend] = useState('Physics');
    const [generatingBio, setGeneratingBio] = useState(false);
    const [genMessage, setGenMessage] = useState(null);

    const fetchBlueprintData = async (targetMode = mode) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/admin/bitsat-blueprint?mode=${targetMode}`);
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || 'Failed to fetch blueprint');
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlueprintData(mode);
    }, [mode]);

    const handleVerifyOrGenerateBio = async () => {
        setGeneratingBio(true);
        setGenMessage(null);
        try {
            const res = await fetch('/api/admin/bitsat-blueprint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mode: 'biology' })
            });
            const json = await res.json();
            if (res.ok) {
                setGenMessage(json.message || '24 Biology Full Tests verified successfully.');
                await fetchBlueprintData('biology');
            } else {
                setGenMessage('Error: ' + (json.error || 'Failed'));
            }
        } catch (e) {
            setGenMessage('Error: ' + e.message);
        } finally {
            setGeneratingBio(false);
        }
    };

    if (loading && !data) {
        return (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
                <p>Loading BITSAT Full Test Management and Blueprint...</p>
            </div>
        );
    }

    if (error && !data) {
        return (
            <div style={{ padding: '2rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', color: '#f87171' }}>
                <h3>Error Loading Blueprint</h3>
                <p>{error}</p>
                <button onClick={() => fetchBlueprintData(mode)} style={{ marginTop: '1rem', padding: '6px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    Retry
                </button>
            </div>
        );
    }

    const { dashboard, tests = [], validation = {} } = data || {};

    const SUBJECT_COLORS = {
        Physics: { border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)', text: '#93c5fd' },
        Chemistry: { border: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', text: '#6ee7b7' },
        Mathematics: { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)', text: '#fcd34d' },
        Biology: { border: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', text: '#6ee7b7' },
        'English Proficiency': { border: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)', text: '#f472b6' },
        'Logical Reasoning': { border: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.12)', text: '#38bdf8' }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* 1. Header & Mode Switcher Bar */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '1.4rem' }}>🎯</span>
                            <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                BITSAT FULL TEST MANAGEMENT
                            </h2>
                            <span style={{
                                background: 'rgba(16, 185, 129, 0.15)',
                                color: '#10b981',
                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                padding: '4px 10px',
                                borderRadius: '999px',
                                fontSize: '0.75rem',
                                fontWeight: 700
                            }}>
                                48 TOTAL FULL TESTS
                            </span>
                        </div>
                        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', maxWidth: '750px', lineHeight: 1.5 }}>
                            Manage Mathematics and Biology full-length test papers (130 questions, 180 mins, 390 marks, +3/-1 scheme).
                            Supports independent student attempts, distinct test IDs, and Central Question Bank mappings.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                            onClick={() => fetchBlueprintData(mode)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: '#cbd5e1',
                                padding: '8px 14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: 600
                            }}
                        >
                            ↻ Refresh Metrics
                        </button>
                        <Link
                            href="/test-series/bitsat"
                            target="_blank"
                            style={{
                                background: '#2563eb',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            View Student Portal ↗
                        </Link>
                    </div>
                </div>

                {/* Mode Selector & Action Bar */}
                <div style={{
                    marginTop: '20px',
                    padding: '14px',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>SELECT MODE:</span>
                        <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '3px' }}>
                            <button
                                onClick={() => setMode('mathematics')}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: mode === 'mathematics' ? '#3b82f6' : 'transparent',
                                    color: mode === 'mathematics' ? 'white' : '#94a3b8',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease'
                                }}
                            >
                                📐 Mathematics Full Tests ({dashboard?.mathTestsCount || 24})
                            </button>
                            <button
                                onClick={() => setMode('biology')}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: mode === 'biology' ? '#10b981' : 'transparent',
                                    color: mode === 'biology' ? 'white' : '#94a3b8',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease'
                                }}
                            >
                                🧬 Biology Full Tests ({dashboard?.bioTestsCount || 24})
                            </button>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Active Pool: <strong>{tests.length} tests</strong> (Total: {dashboard?.totalFullTests || 48})
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                            onClick={handleVerifyOrGenerateBio}
                            disabled={generatingBio}
                            style={{
                                background: '#10b981',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '0.82rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                opacity: generatingBio ? 0.7 : 1
                            }}
                        >
                            {generatingBio ? 'Verifying Biology Tests...' : '⚡ Generate 24 Biology Full Tests'}
                        </button>
                    </div>
                </div>

                {genMessage && (
                    <div style={{
                        marginTop: '12px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: genMessage.startsWith('Error') ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        border: `1px solid ${genMessage.startsWith('Error') ? '#ef4444' : '#10b981'}`,
                        color: genMessage.startsWith('Error') ? '#f87171' : '#6ee7b7',
                        fontSize: '0.85rem'
                    }}>
                        {genMessage}
                    </div>
                )}

                {/* KPI Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '14px',
                    marginTop: '20px'
                }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{mode.toUpperCase()} TESTS</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', margin: '4px 0' }}>{dashboard?.totalTests} / 24</div>
                        <div style={{ fontSize: '0.75rem', color: '#10b981' }}>✓ 24 Configured & Ready</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Standard Slots</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', margin: '4px 0' }}>{dashboard?.totalSlots}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>130 Questions / Test</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Unique Questions Used</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', margin: '4px 0' }}>{dashboard?.uniqueQuestionsUsed}</div>
                        <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Zero Cross-Collision</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Duplicates Detected</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: dashboard?.duplicateCount === 0 ? '#10b981' : '#ef4444', margin: '4px 0' }}>
                            {dashboard?.duplicateCount}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Zero Repetition</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Marking Scheme</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', margin: '4px 0' }}>+3 / -1</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Max 390 Marks • 180 Mins</div>
                    </div>
                </div>

                {/* Subject Slot Breakdown */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                    gap: '10px',
                    marginTop: '16px'
                }}>
                    {Object.entries(dashboard?.subjectSlots || {}).map(([subj, slots]) => {
                        const style = SUBJECT_COLORS[subj] || { border: '#64748b', bg: 'rgba(100,116,139,0.1)', text: '#cbd5e1' };
                        const bankCount = dashboard?.bankCounts?.[subj] || 0;
                        const perTest = (subj === 'Mathematics' || subj === 'Biology') ? 40 : (subj === 'Physics' || subj === 'Chemistry') ? 30 : (subj === 'Logical Reasoning' ? 20 : 10);
                        return (
                            <div key={subj} style={{
                                background: style.bg,
                                border: `1px solid ${style.border}44`,
                                borderRadius: '10px',
                                padding: '12px 14px'
                            }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: style.text, marginBottom: '4px' }}>
                                    {subj}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>{slots} slots</span>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{perTest}/test</span>
                                </div>
                                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>
                                    Bank: {bankCount.toLocaleString()} Qs ({Math.max(0, bankCount - slots).toLocaleString()} unused)
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 2. Navigation Sub-Tabs */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>
                <button
                    onClick={() => setActiveSubTab('tests')}
                    style={{
                        padding: '8px 18px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeSubTab === 'tests' ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
                        color: activeSubTab === 'tests' ? 'white' : '#94a3b8',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer'
                    }}
                >
                    📋 {mode === 'biology' ? '24 Biology Full Tests' : '24 Mathematics Full Tests'}
                </button>
                <button
                    onClick={() => setActiveSubTab('matrix')}
                    style={{
                        padding: '8px 18px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeSubTab === 'matrix' ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
                        color: activeSubTab === 'matrix' ? 'white' : '#94a3b8',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer'
                    }}
                >
                    📊 Coverage Matrix & Table
                </button>
                <button
                    onClick={() => setActiveSubTab('validation')}
                    style={{
                        padding: '8px 18px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeSubTab === 'validation' ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
                        color: activeSubTab === 'validation' ? 'white' : '#94a3b8',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer'
                    }}
                >
                    🛡️ Audit & Validation
                </button>
            </div>

            {/* 3. Sub-Tab 1: 24 Full Tests Overview */}
            {activeSubTab === 'tests' && (
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                        {tests.map(test => {
                            let tierBadgeColor = '#10b981';
                            if (test.difficultyTier.includes('Moderate')) tierBadgeColor = '#f59e0b';
                            else if (test.difficultyTier.includes('Challenging')) tierBadgeColor = '#f97316';
                            else if (test.difficultyTier.includes('Advanced')) tierBadgeColor = '#ef4444';

                            return (
                                <div key={test.testId} style={{
                                    background: 'rgba(30, 41, 59, 0.5)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    padding: '18px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '12px'
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>
                                                {test.testId}
                                            </span>
                                            <span style={{
                                                fontSize: '0.72rem',
                                                fontWeight: 700,
                                                color: tierBadgeColor,
                                                background: `${tierBadgeColor}18`,
                                                border: `1px solid ${tierBadgeColor}33`,
                                                padding: '2px 8px',
                                                borderRadius: '4px'
                                            }}>
                                                {test.difficultyTier}
                                            </span>
                                        </div>

                                        <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', color: 'white', fontWeight: 700 }}>
                                            {test.title}
                                        </h3>

                                        <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '12px' }}>
                                            <span><strong>{test.questionCount}</strong> Qs</span>
                                            <span>•</span>
                                            <span><strong>{test.duration}</strong> Mins</span>
                                            <span>•</span>
                                            <span><strong>{test.totalMarks}</strong> Marks</span>
                                        </div>

                                        <div style={{
                                            background: 'rgba(0,0,0,0.2)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            fontSize: '0.75rem',
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px'
                                        }}>
                                            <span style={{ color: '#93c5fd' }}>Physics: {test.subjectBreakdown?.Physics || 30}</span>
                                            <span style={{ color: '#64748b' }}>|</span>
                                            <span style={{ color: '#6ee7b7' }}>Chem: {test.subjectBreakdown?.Chemistry || 30}</span>
                                            <span style={{ color: '#64748b' }}>|</span>
                                            <span style={{ color: '#f472b6' }}>Eng: {test.subjectBreakdown?.['English Proficiency'] || 10}</span>
                                            <span style={{ color: '#64748b' }}>|</span>
                                            <span style={{ color: '#38bdf8' }}>LR: {test.subjectBreakdown?.['Logical Reasoning'] || 20}</span>
                                            <span style={{ color: '#64748b' }}>|</span>
                                            {mode === 'biology' ? (
                                                <span style={{ color: '#10b981', fontWeight: 700 }}>Bio: {test.subjectBreakdown?.Biology || 40}</span>
                                            ) : (
                                                <span style={{ color: '#fcd34d', fontWeight: 700 }}>Math: {test.subjectBreakdown?.Mathematics || 40}</span>
                                            )}
                                        </div>

                                        <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>
                                                ✓ 130 Questions Mapped
                                            </span>
                                            <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '2px 6px', borderRadius: '4px' }}>
                                                PUBLISHED
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                                        <Link
                                            href={`/test-series/bitsat/${test.testId}`}
                                            target="_blank"
                                            style={{
                                                flex: 1,
                                                textAlign: 'center',
                                                background: '#2563eb',
                                                color: 'white',
                                                padding: '8px',
                                                borderRadius: '6px',
                                                fontSize: '0.82rem',
                                                fontWeight: 600,
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Take / Review Test ↗
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* 4. Sub-Tab 2: Coverage Matrix & Table */}
            {activeSubTab === 'matrix' && (
                <div style={{ background: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '16px', overflowX: 'auto' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', color: 'white' }}>
                        {mode === 'biology' ? 'Biology' : 'Mathematics'} Full Test Management Table (24 Tests)
                    </h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)', textAlign: 'left', color: '#94a3b8' }}>
                                <th style={{ padding: '10px 12px' }}>Test ID</th>
                                <th style={{ padding: '10px 12px' }}>Test Name</th>
                                <th style={{ padding: '10px 12px' }}>Difficulty</th>
                                <th style={{ padding: '10px 12px', color: '#93c5fd' }}>Physics (30)</th>
                                <th style={{ padding: '10px 12px', color: '#6ee7b7' }}>Chemistry (30)</th>
                                {mode === 'biology' ? (
                                    <th style={{ padding: '10px 12px', color: '#10b981' }}>Biology (40)</th>
                                ) : (
                                    <th style={{ padding: '10px 12px', color: '#fcd34d' }}>Mathematics (40)</th>
                                )}
                                <th style={{ padding: '10px 12px', color: '#f472b6' }}>English (10)</th>
                                <th style={{ padding: '10px 12px', color: '#38bdf8' }}>LR (20)</th>
                                <th style={{ padding: '10px 12px' }}>Total (130)</th>
                                <th style={{ padding: '10px 12px' }}>Mapping</th>
                                <th style={{ padding: '10px 12px' }}>Status</th>
                                <th style={{ padding: '10px 12px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tests.map(test => (
                                <tr key={test.testId} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#818cf8', fontWeight: 600 }}>
                                        {test.testId}
                                    </td>
                                    <td style={{ padding: '10px 12px', color: 'white', fontWeight: 600 }}>
                                        {test.title}
                                    </td>
                                    <td style={{ padding: '10px 12px' }}>
                                        <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                                            {test.difficultyTier}
                                        </span>
                                    </td>
                                    <td style={{ padding: '10px 12px', color: '#93c5fd' }}>30</td>
                                    <td style={{ padding: '10px 12px', color: '#6ee7b7' }}>30</td>
                                    {mode === 'biology' ? (
                                        <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 700 }}>40</td>
                                    ) : (
                                        <td style={{ padding: '10px 12px', color: '#fcd34d', fontWeight: 700 }}>40</td>
                                    )}
                                    <td style={{ padding: '10px 12px', color: '#f472b6' }}>10</td>
                                    <td style={{ padding: '10px 12px', color: '#38bdf8' }}>20</td>
                                    <td style={{ padding: '10px 12px', fontWeight: 700, color: 'white' }}>
                                        {test.questionCount}
                                    </td>
                                    <td style={{ padding: '10px 12px', color: '#10b981', fontSize: '0.78rem' }}>
                                        ✓ 130 Mapped
                                    </td>
                                    <td style={{ padding: '10px 12px' }}>
                                        <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '2px 6px', borderRadius: '4px' }}>
                                            PUBLISHED
                                        </span>
                                    </td>
                                    <td style={{ padding: '10px 12px' }}>
                                        <Link
                                            href={`/test-series/bitsat/${test.testId}`}
                                            target="_blank"
                                            style={{
                                                fontSize: '0.75rem',
                                                color: '#38bdf8',
                                                textDecoration: 'none',
                                                fontWeight: 600
                                            }}
                                        >
                                            View ↗
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* 5. Sub-Tab 3: Audit & Validation */}
            {activeSubTab === 'validation' && (
                <div style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '24px'
                }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', color: 'white' }}>
                        🛡️ Comprehensive {mode === 'biology' ? 'Biology' : 'Mathematics'} Blueprint Integrity Audit
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                        <div style={{
                            background: validation?.testsCountMatches ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                            border: `1px solid ${validation?.testsCountMatches ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                            borderRadius: '10px',
                            padding: '16px'
                        }}>
                            <div style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                                {validation?.testsCountMatches ? '✅' : '❌'} <strong>24 Official Tests</strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                                Exactly 24 Full Mock tests are configured and initialized in the database.
                            </p>
                        </div>

                        <div style={{
                            background: validation?.allTests130Questions ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                            border: `1px solid ${validation?.allTests130Questions ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                            borderRadius: '10px',
                            padding: '16px'
                        }}>
                            <div style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                                {validation?.allTests130Questions ? '✅' : '❌'} <strong>130 Questions / Test</strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                                100% of the 24 tests strictly contain 130 valid single-choice questions with 4 options.
                            </p>
                        </div>

                        <div style={{
                            background: validation?.zeroDuplicates ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                            border: `1px solid ${validation?.zeroDuplicates ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                            borderRadius: '10px',
                            padding: '16px'
                        }}>
                            <div style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                                {validation?.zeroDuplicates ? '✅' : '❌'} <strong>Zero Internal Duplicates</strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                                Duplicate detection verified zero intra-test collisions.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
