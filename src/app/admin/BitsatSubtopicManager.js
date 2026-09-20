'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import { CHAPTER_SUBTOPICS } from './page';

const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });

const SUBJECTS = [
    'Physics',
    'Chemistry',
    'Mathematics',
    'English Proficiency',
    'Logical Reasoning'
];

export default function BitsatSubtopicManager() {
    const [selectedSubject, setSelectedSubject] = useState('Physics');
    const [selectedChapter, setSelectedChapter] = useState('');
    const [selectedSubtopic, setSelectedSubtopic] = useState('');
    const [questionCount, setQuestionCount] = useState(20);
    const [duration, setDuration] = useState(30);
    const [difficulty, setDifficulty] = useState('Mixed');

    // Data states
    const [tests, setTests] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingAnalytics, setLoadingAnalytics] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [actionMsg, setActionMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Filter & Search
    const [filterSubject, setFilterSubject] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    // Preview modal
    const [previewTestId, setPreviewTestId] = useState(null);
    const [previewQuestions, setPreviewQuestions] = useState([]);
    const [loadingPreview, setLoadingPreview] = useState(false);

    // Derive chapters for selected subject from CHAPTER_SUBTOPICS
    const availableChapters = useMemo(() => {
        // Find keys in CHAPTER_SUBTOPICS matching subject
        // For physics/chemistry/math/english/logical reasoning
        return Object.keys(CHAPTER_SUBTOPICS).filter(ch => {
            if (selectedSubject === 'English Proficiency') {
                return ['Vocabulary', 'Grammar', 'Sentence Skills', 'Reading Comprehension'].includes(ch);
            }
            if (selectedSubject === 'Logical Reasoning') {
                return ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Analytical Reasoning'].includes(ch);
            }
            if (selectedSubject === 'Physics') {
                return ['Physics and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy, and Power', 'Rotational Motion', 'Gravitation', 'Properties of Solids and Liquids', 'Thermodynamics', 'Kinetic Theory of Gases', 'Oscillations and Waves', 'Electrostatics', 'Current Electricity', 'Magnetic Effects of Current and Magnetism', 'Electromagnetic Induction and Alternating Currents', 'Electromagnetic Waves', 'Optics', 'Dual Nature of Matter and Radiation', 'Atoms and Nuclei', 'Electronic Devices'].includes(ch);
            }
            if (selectedSubject === 'Chemistry') {
                return ['Some Basic Concepts of Chemistry', 'Atomic Structure', 'Chemical Bonding and Molecular Structure', 'States of Matter', 'Chemical Thermodynamics', 'Equilibrium', 'Redox Reactions and Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 's-Block & p-Block Elements', 'Co-ordination Compounds', 'Some Basic Principles of Organic Chemistry', 'Hydrocarbons', 'Solid State', 'Solutions', 'Organic Compounds Containing Halogens', 'Organic Compounds Containing Oxygen', 'Aldehydes & Ketones', 'Organic Compounds Containing Nitrogen', 'Biomolecules'].some(c => c.toLowerCase() === ch.toLowerCase());
            }
            if (selectedSubject === 'Mathematics') {
                return ['Complex Numbers', 'Quadratic Equations', 'Sequences & Series', 'Permutations & Combinations', 'Binomial Theorem', 'Trigonometric Identities', 'Straight Lines', 'Circles', 'Conic Sections (Parabola, Ellipse, Hyperbola)', 'Matrices & Determinants', 'Limits, Continuity & Differentiability', 'Application of Derivatives', 'Differential Equations', 'Vectors', '3D Geometry', 'Probability', 'Statistics'].some(m => m.toLowerCase() === ch.toLowerCase());
            }
            return true;
        });
    }, [selectedSubject]);

    // Subtopics for the selected chapter
    const availableSubtopics = useMemo(() => {
        if (!selectedChapter) return [];
        return CHAPTER_SUBTOPICS[selectedChapter] || [];
    }, [selectedChapter]);

    // Set first chapter and subtopic when subject changes
    useEffect(() => {
        if (availableChapters.length > 0) {
            const firstChap = availableChapters[0];
            setSelectedChapter(firstChap);
            const subs = CHAPTER_SUBTOPICS[firstChap] || [];
            if (subs.length > 0) setSelectedSubtopic(subs[0]);
        }
    }, [selectedSubject, availableChapters]);

    // Update subtopic when chapter changes
    useEffect(() => {
        if (selectedChapter) {
            const subs = CHAPTER_SUBTOPICS[selectedChapter] || [];
            if (subs.length > 0 && !subs.includes(selectedSubtopic)) {
                setSelectedSubtopic(subs[0]);
            }
        }
    }, [selectedChapter]);

    // Auto-sync duration with question count
    useEffect(() => {
        const q = Number(questionCount);
        if (q <= 10) setDuration(15);
        else if (q <= 15) setDuration(22);
        else if (q <= 20) setDuration(30);
        else setDuration(38);
    }, [questionCount]);

    // Load all BITSAT subtopic tests
    const fetchTests = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/bitsat-subtopics');
            const data = await res.json();
            if (data.success) {
                setTests(data.tests || []);
            }
        } catch (e) {
            console.error('Error fetching tests:', e);
        } finally {
            setLoading(false);
        }
    };

    // Load inventory analytics for current subtopic
    const fetchAnalytics = async () => {
        if (!selectedSubject || !selectedChapter || !selectedSubtopic) return;
        setLoadingAnalytics(true);
        try {
            const res = await fetch(`/api/admin/bitsat-subtopics?subject=${encodeURIComponent(selectedSubject)}&chapter=${encodeURIComponent(selectedChapter)}&subtopic=${encodeURIComponent(selectedSubtopic)}`);
            const data = await res.json();
            if (data.success) {
                setAnalytics(data.analytics);
            }
        } catch (e) {
            console.error('Error fetching analytics:', e);
        } finally {
            setLoadingAnalytics(false);
        }
    };

    useEffect(() => {
        fetchTests();
    }, []);

    useEffect(() => {
        fetchAnalytics();
    }, [selectedSubject, selectedChapter, selectedSubtopic]);

    // Create / Generate Test
    const handleGenerate = async (action = 'CREATE') => {
        setGenerating(true);
        setErrorMsg('');
        setActionMsg('');
        try {
            const res = await fetch('/api/admin/bitsat-subtopics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action,
                    subject: selectedSubject,
                    chapter: selectedChapter,
                    subtopic: selectedSubtopic,
                    questionsCount: Number(questionCount),
                    duration: Number(duration),
                    difficulty
                })
            });
            const data = await res.json();
            if (!res.ok) {
                if (data.validationErrors) {
                    throw new Error(data.validationErrors.join(' | '));
                }
                throw new Error(data.error || 'Failed to create test');
            }
            setActionMsg(data.message || 'Subtopic test successfully generated!');
            fetchTests();
            fetchAnalytics();
        } catch (e) {
            setErrorMsg(e.message);
        } finally {
            setGenerating(false);
        }
    };

    // Regenerate an existing test
    const handleRegenerate = async (testId) => {
        if (!confirm(`Regenerate questions for '${testId}'? Fresh unused questions will be prioritized.`)) return;
        setLoading(true);
        try {
            const res = await fetch('/api/admin/bitsat-subtopics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'REGENERATE', testId })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Regeneration failed');
            alert(data.message);
            fetchTests();
        } catch (e) {
            alert(e.message);
        } finally {
            setLoading(false);
        }
    };

    // Duplicate Test
    const handleDuplicate = async (test) => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/bitsat-subtopics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'DUPLICATE',
                    subject: test.subject,
                    chapter: test.chapter,
                    subtopic: test.subtopic,
                    questionsCount: test.targetQuestionsCount || 20,
                    duration: test.duration || 30,
                    difficulty: test.difficulty || 'Moderate'
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Duplication failed');
            alert(data.message);
            fetchTests();
        } catch (e) {
            alert(e.message);
        } finally {
            setLoading(false);
        }
    };

    // Delete Test
    const handleDelete = async (testId) => {
        if (!confirm(`Delete test '${testId}'? This will unlink it from student views.`)) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/bitsat-subtopics?testId=${encodeURIComponent(testId)}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Deletion failed');
            fetchTests();
            fetchAnalytics();
        } catch (e) {
            alert(e.message);
        } finally {
            setLoading(false);
        }
    };

    // Preview Test Questions
    const handlePreview = async (testId) => {
        setPreviewTestId(testId);
        setLoadingPreview(true);
        try {
            const res = await fetch(`/api/questions?testId=${encodeURIComponent(testId)}`);
            const data = await res.json();
            setPreviewQuestions(data || []);
        } catch (e) {
            console.error('Failed to load questions:', e);
        } finally {
            setLoadingPreview(false);
        }
    };

    // Filter tests
    const filteredTests = useMemo(() => {
        return tests.filter(t => {
            if (filterSubject !== 'ALL' && t.subject !== filterSubject) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const matchTitle = (t.title || '').toLowerCase().includes(q);
                const matchId = (t.id || '').toLowerCase().includes(q);
                const matchSub = (t.subtopic || '').toLowerCase().includes(q);
                const matchChap = (t.chapter || '').toLowerCase().includes(q);
                if (!matchTitle && !matchId && !matchSub && !matchChap) return false;
            }
            return true;
        });
    }, [tests, filterSubject, searchQuery]);

    return (
        <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto', color: '#f8fafc' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 6px 0', background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        🔖 BITSAT Subtopic Test Manager
                    </h1>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
                        Focused Single-Correct MCQ tests (20 Questions • 30 Mins • 60 Marks • +3/-1/0) mapped directly to Central Question Bank.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        onClick={fetchTests}
                        disabled={loading}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#cbd5e1', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' }}
                    >
                        🔄 Refresh Tests
                    </button>
                    <a
                        href="/test-series/bitsat"
                        target="_blank"
                        rel="noreferrer"
                        style={{ background: '#4f46e5', color: '#fff', padding: '8px 18px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                        🌐 Student BITSAT Page ↗
                    </a>
                </div>
            </div>

            {/* Top Quick Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Subtopic Tests Active</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>{tests.length}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>In MongoDB testPapers</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Questions Pattern</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a78bfa', marginTop: '4px' }}>20 Qs • 60 M</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>+3 correct, -1 negative</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Question Format</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', marginTop: '4px' }}>Single MCQ</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>0 AR, 0 Numerical</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Subjects Supported</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fbbf24', marginTop: '4px' }}>5 Subjects</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>Phy, Chem, Math, Eng, LR</div>
                </div>
            </div>

            {/* Generator Card & Analytics Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                {/* Left: Generator Form */}
                <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
                        <span>⚡</span> Generate or Configure Subtopic Test
                    </h2>

                    {actionMsg && (
                        <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', color: '#4ade80', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '14px' }}>
                            ✓ {actionMsg}
                        </div>
                    )}
                    {errorMsg && (
                        <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#f87171', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '14px' }}>
                            ⚠️ {errorMsg}
                        </div>
                    )}

                    {/* Subject Pills */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>1. Subject</label>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {SUBJECTS.map(subj => (
                                <button
                                    key={subj}
                                    type="button"
                                    onClick={() => setSelectedSubject(subj)}
                                    style={{
                                        background: selectedSubject === subj ? '#4f46e5' : 'rgba(255,255,255,0.05)',
                                        border: `1px solid ${selectedSubject === subj ? '#6366f1' : 'rgba(255,255,255,0.1)'}`,
                                        color: selectedSubject === subj ? '#fff' : '#cbd5e1',
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '0.85rem',
                                        fontWeight: selectedSubject === subj ? 700 : 500
                                    }}
                                >
                                    {subj}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chapter Dropdown */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>2. Chapter</label>
                        <select
                            value={selectedChapter}
                            onChange={(e) => setSelectedChapter(e.target.value)}
                            style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                        >
                            {availableChapters.map(ch => (
                                <option key={ch} value={ch}>{ch}</option>
                            ))}
                        </select>
                    </div>

                    {/* Subtopic Dropdown */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>3. Subtopic</label>
                        <select
                            value={selectedSubtopic}
                            onChange={(e) => setSelectedSubtopic(e.target.value)}
                            style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                        >
                            {availableSubtopics.map(sub => (
                                <option key={sub} value={sub}>{sub}</option>
                            ))}
                        </select>
                    </div>

                    {/* Config Grid: Questions, Duration, Difficulty */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px', fontWeight: 600 }}>Questions</label>
                            <select
                                value={questionCount}
                                onChange={(e) => setQuestionCount(Number(e.target.value))}
                                style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '8px 10px', borderRadius: '8px', fontSize: '0.85rem' }}
                            >
                                <option value={10}>10 Questions</option>
                                <option value={15}>15 Questions</option>
                                <option value={20}>20 Questions (Default)</option>
                                <option value={25}>25 Questions</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px', fontWeight: 600 }}>Duration</label>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '8px 10px', borderRadius: '8px', fontSize: '0.85rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px', fontWeight: 600 }}>Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '8px 10px', borderRadius: '8px', fontSize: '0.85rem' }}
                            >
                                <option value="Mixed">Mixed (5E + 11M + 4D)</option>
                                <option value="Moderate">Moderate-heavy</option>
                                <option value="Difficult">Difficult-heavy</option>
                                <option value="Easy">Easy-heavy</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleGenerate('CREATE')}
                        disabled={generating}
                        style={{
                            width: '100%',
                            background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
                            color: '#fff',
                            border: 'none',
                            padding: '12px 20px',
                            borderRadius: '10px',
                            cursor: generating ? 'not-allowed' : 'pointer',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)'
                        }}
                    >
                        {generating ? '⏳ Validating & Generating Test...' : '🚀 Generate Subtopic Test'}
                    </button>
                </div>

                {/* Right: Subtopic Inventory Analytics */}
                <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #334155', paddingBottom: '12px' }}>
                        <div>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#38bdf8' }}>
                                📊 Subtopic Question Analytics
                            </h2>
                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>
                                {selectedSubject} › {selectedSubtopic || 'Select subtopic'}
                            </div>
                        </div>
                        {loadingAnalytics && <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Refreshing...</span>}
                    </div>

                    {analytics ? (
                        <div>
                            {/* Top Available Badge */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '12px', marginBottom: '16px' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>Total In Question Bank</div>
                                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>{analytics.total} Questions</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.8rem', background: '#22c55e22', color: '#4ade80', border: '1px solid #22c55e44', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                                        {analytics.availableForTest} Available
                                    </span>
                                </div>
                            </div>

                            {/* Difficulty breakdown */}
                            <div style={{ marginBottom: '14px' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Difficulty Distribution:</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                                    <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>🟢 Easy</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{analytics.easy}</div>
                                    </div>
                                    <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>🟡 Moderate</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{analytics.moderate}</div>
                                    </div>
                                    <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#f87171' }}>🔴 Difficult</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{analytics.difficult}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Source Breakdown */}
                            <div style={{ marginBottom: '14px' }}>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Question Source:</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>PYQ / Memory</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{analytics.pyq}</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>AI-Generated</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{analytics.aiPractice}</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Faculty Practice</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{analytics.faculty}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Repetition / Usage Status */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Test Repetition Status:</span>
                                <span style={{ fontSize: '0.85rem', color: analytics.unused >= questionCount ? '#4ade80' : '#fbbf24', fontWeight: 600 }}>
                                    {analytics.unused >= questionCount ? '✓ Fresh Question Set Guaranteed' : '⚠️ Limited Unused Questions (May Recycle)'}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>
                            Select a subtopic to view real-time inventory statistics.
                        </div>
                    )}
                </div>
            </div>

            {/* Test List Section */}
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                            Active BITSAT Subtopic Tests ({filteredTests.length})
                        </h2>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '2px' }}>
                            Students access these tests under the "Subtopic Tests" tab.
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {/* Subject Filter */}
                        <select
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                            style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem' }}
                        >
                            <option value="ALL">All Subjects</option>
                            {SUBJECTS.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search tests..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', minWidth: '200px' }}
                        />
                    </div>
                </div>

                {loading ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>Loading subtopic tests...</div>
                ) : filteredTests.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                        No BITSAT subtopic tests found. Use the generator above to create your first subtopic test!
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                                    <th style={{ padding: '12px 14px' }}>Test Title & ID</th>
                                    <th style={{ padding: '12px 14px' }}>Subject & Chapter</th>
                                    <th style={{ padding: '12px 14px' }}>Questions</th>
                                    <th style={{ padding: '12px 14px' }}>Duration</th>
                                    <th style={{ padding: '12px 14px' }}>Marks</th>
                                    <th style={{ padding: '12px 14px' }}>Difficulty</th>
                                    <th style={{ padding: '12px 14px', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTests.map((test) => (
                                    <tr key={test.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '14px' }}>
                                            <div style={{ fontWeight: 600, color: '#f8fafc' }}>{test.title}</div>
                                            <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>{test.id}</div>
                                        </td>
                                        <td style={{ padding: '14px' }}>
                                            <span style={{ color: '#818cf8', fontWeight: 600 }}>{test.subject}</span>
                                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{test.chapter || '—'}</div>
                                        </td>
                                        <td style={{ padding: '14px' }}>
                                            <span style={{ fontWeight: 700, color: '#38bdf8' }}>{test.questionsCount} Qs</span>
                                        </td>
                                        <td style={{ padding: '14px' }}>{test.duration} min</td>
                                        <td style={{ padding: '14px' }}>
                                            <span style={{ color: '#4ade80', fontWeight: 700 }}>{test.totalMarks} M</span>
                                        </td>
                                        <td style={{ padding: '14px' }}>
                                            <span style={{
                                                padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                                                background: 'rgba(255,255,255,0.08)', color: '#cbd5e1'
                                            }}>
                                                {test.difficulty}
                                            </span>
                                        </td>
                                        <td style={{ padding: '14px', textAlign: 'right' }}>
                                            <div style={{ display: 'inline-flex', gap: '8px' }}>
                                                <button
                                                    onClick={() => handlePreview(test.id)}
                                                    style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}
                                                    title="Preview questions"
                                                >
                                                    👁️ Preview
                                                </button>
                                                <button
                                                    onClick={() => handleRegenerate(test.id)}
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#cbd5e1', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}
                                                    title="Regenerate questions"
                                                >
                                                    🔄 Regenerate
                                                </button>
                                                <button
                                                    onClick={() => handleDuplicate(test)}
                                                    style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}
                                                    title="Duplicate test"
                                                >
                                                    📋 Duplicate
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(test.id)}
                                                    style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}
                                                    title="Delete test"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Questions Preview Modal */}
            {previewTestId && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', width: '100%', maxWidth: '900px', maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                        <div style={{ padding: '18px 24px', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#38bdf8' }}>Question Preview: {previewTestId}</h3>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{previewQuestions.length} Questions Mapped</div>
                            </div>
                            <button
                                onClick={() => setPreviewTestId(null)}
                                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer' }}
                            >
                                ✕
                            </button>
                        </div>
                        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {loadingPreview ? (
                                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>Loading mapped questions...</div>
                            ) : previewQuestions.length === 0 ? (
                                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No questions found for this test paper.</div>
                            ) : (
                                previewQuestions.map((q, idx) => (
                                    <div key={q.id || idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <span style={{ fontWeight: 700, color: '#818cf8', fontSize: '0.85rem' }}>Question #{idx + 1} ({q.commercialId || q.id})</span>
                                            <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', padding: '2px 8px', borderRadius: '4px' }}>
                                                {q.difficulty || 'Moderate'} • {q.source || 'Central Bank'}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: '0.95rem', color: '#f8fafc', marginBottom: '12px' }}>
                                            <LatexRenderer text={q.text || q.question} />
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                                            {(q.options || []).map((opt, oIdx) => {
                                                const optText = typeof opt === 'object' ? opt.text : opt;
                                                const optLabel = typeof opt === 'object' ? opt.id?.toUpperCase() : ['A', 'B', 'C', 'D'][oIdx];
                                                const isCorrect = (q.correctOption === opt.id || q.correctOption === oIdx || q.correctAnswer === oIdx);
                                                return (
                                                    <div
                                                        key={oIdx}
                                                        style={{
                                                            padding: '8px 12px',
                                                            borderRadius: '6px',
                                                            fontSize: '0.85rem',
                                                            background: isCorrect ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.02)',
                                                            border: `1px solid ${isCorrect ? '#22c55e' : 'rgba(255,255,255,0.05)'}`,
                                                            color: isCorrect ? '#4ade80' : '#cbd5e1',
                                                            fontWeight: isCorrect ? 600 : 400
                                                        }}
                                                    >
                                                        <strong>{optLabel}. </strong>
                                                        <LatexRenderer text={optText} />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {q.explanation && (
                                            <div style={{ fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(0,0,0,0.2)', padding: '8px 12px', borderRadius: '6px' }}>
                                                <strong>Explanation: </strong>
                                                <LatexRenderer text={q.explanation} />
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
