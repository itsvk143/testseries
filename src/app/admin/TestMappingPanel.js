'use client';
import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });

// ── Full static chapter map ─────────────────────────────────────────────────
const STATIC_CHAPTERS = {
    Physics: [
        "Physics and Measurement","Kinematics","Laws of Motion","Work, Energy, and Power",
        "Rotational Motion","Gravitation","Properties of Solids and Liquids","Thermodynamics",
        "Kinetic Theory of Gases","Oscillations and Waves","Electrostatics","Current Electricity",
        "Magnetic Effects of Current and Magnetism","Electromagnetic Induction and Alternating Currents",
        "Electromagnetic Waves","Optics","Dual Nature of Matter and Radiation","Atoms and Nuclei",
        "Electronic Devices","Experimental Skills"
    ],
    Chemistry: [
        "Some Basic Concepts in Chemistry","Atomic Structure","Chemical Bonding and Molecular Structure",
        "Chemical Thermodynamics","Solutions","Equilibrium","Redox Reactions and Electrochemistry",
        "Chemical Kinetics","Classification of Elements and Periodicity in Properties","P-Block Elements",
        "d and f- Block Elements","Co-ordination Compounds","Purification and Characterisation of Organic Compounds",
        "Some Basic Principles of Organic Chemistry","Hydrocarbons","Organic Compounds Containing Halogens",
        "Organic Compounds Containing Oxygen","Organic Compounds Containing Nitrogen",
        "Biomolecules","Principles Related to Practical Chemistry"
    ],
    Mathematics: [
        "Complex Numbers","Quadratic Equations","Sequences & Series","Permutations & Combinations",
        "Binomial Theorem","Straight Lines","Circles","Conic Sections (Parabola, Ellipse, Hyperbola)",
        "Trigonometric Identities","Matrices & Determinants","Limits, Continuity & Differentiability",
        "Application of Derivatives","Integrals","Differential Equations","Areas","Vectors",
        "3D Geometry","Inverse Trigonometric Functions","Probability","Statistics"
    ],
    Botany: [
        "Diversity in Living World","Plant Physiology","Cell Structure and Function",
        "Genetics and Evolution","Ecology and Environment"
    ],
    Zoology: [
        "Structural Organisation in Animals and Plants","Human Physiology","Reproduction",
        "Biology and Human Welfare","Biotechnology and Its Applications"
    ]
};

const SUBJECTS = ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology'];

const TYPE_COLORS = {
    MCQ: '#3b82f6',
    NUMERICAL: '#8b5cf6',
    ASSERTION_REASON: '#f59e0b',
};

const TYPE_LABEL = { MCQ: 'MCQ', NUMERICAL: 'Numerical', ASSERTION_REASON: 'Assertion & Reason' };

// ── Helper badge ─────────────────────────────────────────────────────────────
function TypeBadge({ type }) {
    const t = type || 'MCQ';
    return (
        <span style={{
            fontSize: '0.7rem', padding: '2px 7px', borderRadius: '5px',
            background: TYPE_COLORS[t] || '#475569', color: 'white', fontWeight: 700,
        }}>
            {TYPE_LABEL[t] || t}
        </span>
    );
}

// ── Edit modal ───────────────────────────────────────────────────────────────
function EditModal({ question, onSave, onClose }) {
    const [form, setForm] = useState({
        text: question.text || '',
        subject: question.subject || 'Physics',
        chapter: question.chapter || '',
        subtopic: question.subtopic || question.subTopic || '',
        type: question.type || 'MCQ',
        correctOption: question.correctOption || 'a',
        explanation: question.explanation || '',
        optionA: question.options?.[0]?.text || '',
        optionB: question.options?.[1]?.text || '',
        optionC: question.options?.[2]?.text || '',
        optionD: question.options?.[3]?.text || '',
        numericalAnswer: question.numericalAnswer || '',
        assertion: question.assertion || '',
        reason: question.reason || '',
    });
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        try {
            const payload = {
                testId: 'global',
                action: 'EDIT',
                question: {
                    _id: question._id,
                    id: question.id,
                    type: form.type,
                    text: form.text,
                    subject: form.subject,
                    chapter: form.chapter,
                    subtopic: form.subtopic,
                    correctOption: form.correctOption,
                    explanation: form.explanation,
                    numericalAnswer: form.numericalAnswer,
                    assertion: form.assertion,
                    reason: form.reason,
                    options: [
                        { id: 'a', text: form.optionA },
                        { id: 'b', text: form.optionB },
                        { id: 'c', text: form.optionC },
                        { id: 'd', text: form.optionD },
                    ],
                },
            };
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Save failed');
            onSave();
        } catch (e) {
            alert('Error saving: ' + e.message);
        } finally {
            setSaving(false);
        }
    };

    const inputStyle = {
        background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '8px', padding: '8px 12px', color: 'white', fontSize: '0.9rem',
        width: '100%', boxSizing: 'border-box', outline: 'none',
        transition: 'border-color 0.2s',
    };
    const labelStyle = { display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.8rem', color: '#94a3b8' };

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
            <div style={{
                background: 'linear-gradient(160deg, #1e1b4b 0%, #0f172a 100%)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '18px', padding: '28px', maxWidth: '760px', width: '100%',
                maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#a5b4fc' }}>
                        ✏️ Edit Question <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 400 }}>#{question.id} · {question._id}</span>
                    </h2>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#64748b', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1 }}>✕</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <label style={labelStyle}>Subject
                        <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value, chapter: '' }))} style={inputStyle}>
                            {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </label>
                    <label style={labelStyle}>Chapter
                        <select value={form.chapter} onChange={e => setForm(f => ({ ...f, chapter: e.target.value }))} style={inputStyle}>
                            <option value="">— Select —</option>
                            {(STATIC_CHAPTERS[form.subject] || []).map(ch => <option key={ch}>{ch}</option>)}
                        </select>
                    </label>
                    <label style={labelStyle}>Subtopic
                        <input style={inputStyle} value={form.subtopic} onChange={e => setForm(f => ({ ...f, subtopic: e.target.value }))} placeholder="Optional subtopic" />
                    </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <label style={labelStyle}>Question Type
                        <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} style={inputStyle}>
                            <option value="MCQ">MCQ</option>
                            <option value="NUMERICAL">Numerical</option>
                            <option value="ASSERTION_REASON">Assertion &amp; Reason</option>
                        </select>
                    </label>
                    {form.type === 'MCQ' && (
                        <label style={labelStyle}>Correct Option
                            <select value={form.correctOption} onChange={e => setForm(f => ({ ...f, correctOption: e.target.value }))} style={inputStyle}>
                                {['a', 'b', 'c', 'd'].map(o => <option key={o} value={o}>{o.toUpperCase()}</option>)}
                            </select>
                        </label>
                    )}
                    {form.type === 'NUMERICAL' && (
                        <label style={labelStyle}>Correct Answer
                            <input style={inputStyle} value={form.numericalAnswer} onChange={e => setForm(f => ({ ...f, numericalAnswer: e.target.value }))} placeholder="Numerical answer" />
                        </label>
                    )}
                </div>

                {form.type === 'ASSERTION_REASON' ? (
                    <>
                        <label style={{ ...labelStyle, marginBottom: '12px' }}>Assertion
                            <textarea style={{ ...inputStyle, minHeight: '70px', resize: 'vertical' }} value={form.assertion} onChange={e => setForm(f => ({ ...f, assertion: e.target.value }))} />
                        </label>
                        <label style={{ ...labelStyle, marginBottom: '12px' }}>Reason
                            <textarea style={{ ...inputStyle, minHeight: '70px', resize: 'vertical' }} value={form.reason} onChange={e => setForm(f => ({ ...f, reason: e.target.value }))} />
                        </label>
                    </>
                ) : (
                    <label style={{ ...labelStyle, marginBottom: '12px' }}>Question Text
                        <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} />
                    </label>
                )}

                {form.type === 'MCQ' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                        {['A', 'B', 'C', 'D'].map((ltr, i) => {
                            const key = `option${ltr}`;
                            return (
                                <label key={ltr} style={{ ...labelStyle, borderLeft: `3px solid ${form.correctOption === ltr.toLowerCase() ? '#10b981' : 'transparent'}`, paddingLeft: '8px' }}>
                                    Option {ltr} {form.correctOption === ltr.toLowerCase() && <span style={{ color: '#10b981', fontSize: '0.7rem' }}>✓ Correct</span>}
                                    <input style={inputStyle} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} />
                                </label>
                            );
                        })}
                    </div>
                )}

                <label style={{ ...labelStyle, marginBottom: '18px' }}>Explanation (optional)
                    <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }} value={form.explanation} onChange={e => setForm(f => ({ ...f, explanation: e.target.value }))} />
                </label>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8', padding: '10px 22px', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}>
                        Cancel
                    </button>
                    <button onClick={handleSave} disabled={saving} style={{
                        background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', border: 'none', color: 'white',
                        padding: '10px 26px', borderRadius: '10px', cursor: saving ? 'not-allowed' : 'pointer',
                        fontWeight: 700, opacity: saving ? 0.7 : 1, transition: 'opacity 0.2s'
                    }}>
                        {saving ? 'Saving…' : '💾 Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function TestMappingPanel({ allTests }) {
    // ─ Test selector state ─
    const [examFilter, setExamFilter] = useState('neet');
    const [selectedTestId, setSelectedTestId] = useState('');

    // ─ Mapped questions (right list) ─
    const [mappedQuestions, setMappedQuestions] = useState([]);
    const [loadingMapped, setLoadingMapped] = useState(false);

    // ─ Question picker (left panel) ─
    const [pickerSubject, setPickerSubject] = useState('');
    const [pickerChapter, setPickerChapter] = useState('');
    const [pickerSubtopic, setPickerSubtopic] = useState('');
    const [pickerType, setPickerType] = useState('');
    const [pickerSearch, setPickerSearch] = useState('');
    const [bankQuestions, setBankQuestions] = useState([]);
    const [loadingBank, setLoadingBank] = useState(false);
    const [linkingId, setLinkingId] = useState(null);  // which question is being linked

    // ─ Edit modal ─
    const [editingQ, setEditingQ] = useState(null);

    // ─ Unlink confirm ─
    const [unlinkConfirm, setUnlinkConfirm] = useState(null); // { questionId, _id }

    // Filter tests by exam
    const filteredTests = (allTests || []).filter(t => t.category === examFilter);

    // Auto-select first test when exam changes
    useEffect(() => {
        if (filteredTests.length > 0) {
            setSelectedTestId(filteredTests[0].id);
        } else {
            setSelectedTestId('');
            setMappedQuestions([]);
        }
    }, [examFilter]);

    // Load mapped questions for selected test
    const fetchMappedQuestions = useCallback(async () => {
        if (!selectedTestId) return;
        setLoadingMapped(true);
        try {
            const res = await fetch(`/api/questions?testId=${selectedTestId}`);
            const data = await res.json();
            setMappedQuestions(Array.isArray(data) ? data : []);
        } catch {
            setMappedQuestions([]);
        } finally {
            setLoadingMapped(false);
        }
    }, [selectedTestId]);

    useEffect(() => { fetchMappedQuestions(); }, [fetchMappedQuestions]);

    // Load bank questions when picker filters change
    useEffect(() => {
        if (!pickerSubject) { setBankQuestions([]); return; }
        const fetchBank = async () => {
            setLoadingBank(true);
            try {
                const params = new URLSearchParams({ testId: 'global', subject: pickerSubject });
                if (pickerChapter && pickerChapter !== 'ALL') params.set('chapter', pickerChapter);
                const res = await fetch(`/api/questions?${params}`);
                const data = await res.json();
                setBankQuestions(Array.isArray(data) ? data : []);
            } catch {
                setBankQuestions([]);
            } finally {
                setLoadingBank(false);
            }
        };
        fetchBank();
    }, [pickerSubject, pickerChapter]);

    const availableSubtopics = [...new Set(bankQuestions.map(q => q.subTopic || q.subtopic || '').filter(Boolean))].sort((a,b) => a.localeCompare(b));
    const availableTypes = [...new Set(bankQuestions.map(q => q.type || 'MCQ'))].sort((a,b) => a.localeCompare(b));

    // Derived: filter bank questions by subtopic, search, and type
    const filteredBankQuestions = bankQuestions.filter(q => {
        const matchSubtopic = !pickerSubtopic || (q.subTopic || q.subtopic || '') === pickerSubtopic;
        const matchSearch = !pickerSearch || (q.text || '').toLowerCase().includes(pickerSearch.toLowerCase());
        const matchType = !pickerType || (q.type || 'MCQ') === pickerType;
        return matchSubtopic && matchSearch && matchType;
    });

    // Derive which bank question IDs are already mapped
    const mappedIds = new Set(mappedQuestions.map(q => q._id));

    // ─ Actions ─
    const handleLink = async (q) => {
        if (!selectedTestId) { alert('Please select a test first.'); return; }
        setLinkingId(q._id);
        try {
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ testId: selectedTestId, action: 'LINK_QUESTIONS', questionIds: [q._id] }),
            });
            if (!res.ok) throw new Error('Link failed');
            await fetchMappedQuestions();
        } catch (e) {
            alert('Error: ' + e.message);
        } finally {
            setLinkingId(null);
        }
    };

    const handleUnlink = async (q) => {
        try {
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ testId: selectedTestId, action: 'UNLINK_QUESTION', questionId: q._id }),
            });
            if (!res.ok) throw new Error('Unlink failed');
            setUnlinkConfirm(null);
            await fetchMappedQuestions();
        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    // ─ Shared styles ─
    const card = {
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px', padding: '18px',
    };
    const inputSty = {
        background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px', padding: '7px 12px', color: 'white', fontSize: '0.85rem',
        width: '100%', boxSizing: 'border-box', outline: 'none',
    };
    const sectionTitle = { margin: '0 0 12px', fontSize: '0.95rem', fontWeight: 800, color: '#a5b4fc' };

    return (
        <div style={{ marginTop: '20px' }}>

            {/* ── Top: Test Selector ────────────────────────────────────── */}
            <div style={{ ...card, marginBottom: '20px', display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: '#94a3b8', minWidth: '130px' }}>
                    Exam
                    <select value={examFilter} onChange={e => setExamFilter(e.target.value)} style={inputSty}>
                        <option value="neet">NEET</option>
                        <option value="jee-mains">JEE Mains</option>
                        <option value="bitsat">BITSAT</option>
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: '#94a3b8', flex: 1, minWidth: '220px' }}>
                    Test
                    <select value={selectedTestId} onChange={e => setSelectedTestId(e.target.value)} style={inputSty}>
                        {filteredTests.length === 0 && <option value="">No tests available</option>}
                        {filteredTests.map(t => <option key={t.id} value={t.id}>{t.title || t.id}</option>)}
                    </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
                    {loadingMapped ? (
                        <div style={{ padding: '7px 16px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }}>
                            Loading…
                        </div>
                    ) : (() => {
                        // Compute per-subject counts from mapped questions
                        const subjectCounts = {};
                        mappedQuestions.forEach(q => {
                            const sub = q.subject || 'Other';
                            subjectCounts[sub] = (subjectCounts[sub] || 0) + 1;
                        });

                        const SUBJECT_COLORS = {
                            Physics:     { bg: 'rgba(59,130,246,0.13)',  border: 'rgba(59,130,246,0.35)',  text: '#93c5fd' },
                            Chemistry:   { bg: 'rgba(16,185,129,0.13)',  border: 'rgba(16,185,129,0.35)',  text: '#6ee7b7' },
                            Mathematics: { bg: 'rgba(245,158,11,0.13)',  border: 'rgba(245,158,11,0.35)',  text: '#fcd34d' },
                            Botany:      { bg: 'rgba(34,197,94,0.13)',   border: 'rgba(34,197,94,0.35)',   text: '#86efac' },
                            Zoology:     { bg: 'rgba(168,85,247,0.13)',  border: 'rgba(168,85,247,0.35)',  text: '#d8b4fe' },
                            Other:       { bg: 'rgba(100,116,139,0.13)', border: 'rgba(100,116,139,0.35)', text: '#94a3b8' },
                        };

                        return (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                {/* Total badge */}
                                <div style={{
                                    padding: '6px 14px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem',
                                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)', color: '#34d399',
                                    whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px',
                                }}>
                                    <span style={{ fontSize: '1rem' }}>📊</span>
                                    Total: {mappedQuestions.length}
                                </div>

                                {/* Per-subject badges */}
                                {Object.entries(subjectCounts)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(([sub, count]) => {
                                        const c = SUBJECT_COLORS[sub] || SUBJECT_COLORS.Other;
                                        return (
                                            <div key={sub} style={{
                                                padding: '5px 12px', borderRadius: '7px', fontWeight: 700, fontSize: '0.8rem',
                                                background: c.bg, border: `1px solid ${c.border}`, color: c.text,
                                                whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px',
                                            }}>
                                                <span style={{ opacity: 0.75, fontSize: '0.7rem' }}>{sub}</span>
                                                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{count}</span>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })()}
                </div>
            </div>

            {/* ── Main 2-column grid ─────────────────────────────────────── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '20px' }}>

                {/* ── LEFT: Mapped questions list ──────────────────────── */}
                <div style={card}>
                    <h3 style={{ ...sectionTitle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📋</span> Mapped Questions
                        <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#64748b', marginLeft: 'auto' }}>
                            {selectedTestId ? filteredTests.find(t => t.id === selectedTestId)?.title : '—'}
                        </span>
                    </h3>

                    {loadingMapped ? (
                        <div style={{ textAlign: 'center', color: '#64748b', padding: '40px' }}>Loading…</div>
                    ) : mappedQuestions.length === 0 ? (
                        <div style={{ textAlign: 'center', color: '#64748b', padding: '40px', fontSize: '0.9rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📭</div>
                            No questions mapped to this test yet.<br />
                            <span style={{ fontSize: '0.8rem' }}>Use the picker on the right to link questions.</span>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '640px', overflowY: 'auto', paddingRight: '4px' }}>
                            {mappedQuestions.map((q, idx) => (
                                <div key={q._id || idx} style={{
                                    background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.15)',
                                    borderRadius: '10px', padding: '12px 14px', transition: 'border-color 0.2s',
                                }}>
                                    {/* Header row */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', background: 'rgba(99,102,241,0.12)', padding: '2px 7px', borderRadius: '5px' }}>
                                            #{idx + 1}
                                        </span>
                                        <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>
                                            {q._id ? String(q._id).slice(-8) : '—'}
                                        </span>
                                        {q.subject && (
                                            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#14b8a6', background: 'rgba(20,184,166,0.12)', padding: '2px 7px', borderRadius: '5px' }}>
                                                {q.subject}
                                            </span>
                                        )}
                                        <TypeBadge type={q.type} />
                                        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                                            <button onClick={() => setEditingQ(q)} style={{
                                                background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                                                color: '#818cf8', borderRadius: '6px', padding: '3px 10px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600,
                                            }}>✏️ Edit</button>
                                            <button onClick={() => setUnlinkConfirm(q)} style={{
                                                background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
                                                color: '#f87171', borderRadius: '6px', padding: '3px 10px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600,
                                            }}>🔗 Unlink</button>
                                        </div>
                                    </div>

                                    {/* Chapter/subtopic breadcrumb */}
                                    {(q.chapter || q.subtopic || q.subTopic) && (
                                        <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '6px' }}>
                                            {[q.chapter, q.subtopic || q.subTopic].filter(Boolean).join(' › ')}
                                        </div>
                                    )}

                                    {/* Question text */}
                                    <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, maxHeight: '3.6em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        <LatexRenderer text={q.text || q.assertion || ''} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── RIGHT: Question Picker ─────────────────────────────── */}
                <div style={card}>
                    <h3 style={{ ...sectionTitle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>🔗</span> Link from Question Bank
                    </h3>

                    {/* Cascade filters */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Subject *
                            <select value={pickerSubject} onChange={e => { setPickerSubject(e.target.value); setPickerChapter(''); setPickerSubtopic(''); setPickerType(''); }} style={inputSty}>
                                <option value="">— Select Subject —</option>
                                {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Chapter
                            <select value={pickerChapter} onChange={e => { setPickerChapter(e.target.value); setPickerSubtopic(''); }} style={inputSty} disabled={!pickerSubject}>
                                <option value="">All Chapters</option>
                                {(STATIC_CHAPTERS[pickerSubject] || []).map(ch => <option key={ch}>{ch}</option>)}
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Subtopic
                            <select style={inputSty} value={pickerSubtopic} onChange={e => setPickerSubtopic(e.target.value)} disabled={!pickerSubject}>
                                <option value="">All Subtopics</option>
                                {availableSubtopics.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Type
                            <select style={inputSty} value={pickerType} onChange={e => setPickerType(e.target.value)} disabled={!pickerSubject}>
                                <option value="">All Types</option>
                                {availableTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Search text
                            <input style={inputSty} value={pickerSearch} onChange={e => setPickerSearch(e.target.value)} placeholder="Keyword…" disabled={!pickerSubject} />
                        </div>
                    </div>

                    {/* Results count */}
                    {pickerSubject && (
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '8px' }}>
                            Showing {filteredBankQuestions.length} of {bankQuestions.length} questions
                            {loadingBank && ' · Loading…'}
                        </div>
                    )}

                    {/* Bank question list */}
                    {!pickerSubject ? (
                        <div style={{ textAlign: 'center', color: '#64748b', padding: '50px 20px', fontSize: '0.9rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏦</div>
                            Select a subject to browse the question bank.
                        </div>
                    ) : loadingBank ? (
                        <div style={{ textAlign: 'center', color: '#64748b', padding: '40px' }}>Loading bank…</div>
                    ) : filteredBankQuestions.length === 0 ? (
                        <div style={{ textAlign: 'center', color: '#64748b', padding: '40px', fontSize: '0.85rem' }}>
                            No questions found for these filters.
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '520px', overflowY: 'auto', paddingRight: '4px' }}>
                            {filteredBankQuestions.map((q, idx) => {
                                const alreadyLinked = mappedIds.has(q._id);
                                return (
                                    <div key={q._id || idx} style={{
                                        background: alreadyLinked ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.02)',
                                        border: `1px solid ${alreadyLinked ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.08)'}`,
                                        borderRadius: '10px', padding: '10px 12px',
                                        display: 'flex', gap: '10px', alignItems: 'flex-start',
                                    }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            {/* Meta row */}
                                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '5px', flexWrap: 'wrap' }}>
                                                <span style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>
                                                    #{q._id ? String(q._id).slice(-8) : idx + 1}
                                                </span>
                                                {q.subject && (
                                                    <span style={{ fontSize: '0.68rem', color: '#14b8a6', fontWeight: 600 }}>{q.subject}</span>
                                                )}
                                                <TypeBadge type={q.type} />
                                                {q.chapter && <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{q.chapter}</span>}
                                                {(q.subtopic || q.subTopic) && (
                                                    <span style={{ fontSize: '0.65rem', color: '#475569' }}>· {q.subtopic || q.subTopic}</span>
                                                )}
                                            </div>
                                            <div style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.45, maxHeight: '2.9em', overflow: 'hidden' }}>
                                                <LatexRenderer text={q.text || q.assertion || ''} />
                                            </div>
                                        </div>
                                        <div>
                                            {alreadyLinked ? (
                                                <span style={{
                                                    fontSize: '0.72rem', fontWeight: 700, color: '#34d399',
                                                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                                                    borderRadius: '6px', padding: '4px 10px', whiteSpace: 'nowrap',
                                                }}>✓ Linked</span>
                                            ) : (
                                                <button
                                                    onClick={() => handleLink(q)}
                                                    disabled={linkingId === q._id}
                                                    style={{
                                                        background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                                                        border: 'none', color: 'white',
                                                        borderRadius: '7px', padding: '5px 12px', fontSize: '0.76rem',
                                                        cursor: linkingId === q._id ? 'not-allowed' : 'pointer',
                                                        fontWeight: 700, whiteSpace: 'nowrap',
                                                        opacity: linkingId === q._id ? 0.6 : 1, transition: 'opacity 0.2s',
                                                    }}
                                                >
                                                    {linkingId === q._id ? '…' : '+ Link'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* ── Edit Modal ─────────────────────────────────────────────── */}
            {editingQ && (
                <EditModal
                    question={editingQ}
                    onSave={() => { setEditingQ(null); fetchMappedQuestions(); }}
                    onClose={() => setEditingQ(null)}
                />
            )}

            {/* ── Unlink Confirm Dialog ──────────────────────────────────── */}
            {unlinkConfirm && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        background: '#0f172a', border: '1px solid rgba(239,68,68,0.35)',
                        borderRadius: '16px', padding: '28px 32px', maxWidth: '440px', width: '90%',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    }}>
                        <h3 style={{ margin: '0 0 10px', color: '#f87171', fontWeight: 800 }}>🔗 Unlink Question</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 20px', lineHeight: 1.6 }}>
                            This will <strong style={{ color: '#f8fafc' }}>remove</strong> the question from this test, but it will stay safe in the central question bank and remain on any other tests it's linked to.
                        </p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setUnlinkConfirm(null)} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8', padding: '9px 20px', borderRadius: '9px', cursor: 'pointer', fontWeight: 600 }}>
                                Cancel
                            </button>
                            <button onClick={() => handleUnlink(unlinkConfirm)} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171', padding: '9px 20px', borderRadius: '9px', cursor: 'pointer', fontWeight: 700 }}>
                                Yes, Unlink
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
