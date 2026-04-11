import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

// ── AI Generate Panel ──────────────────────────────────────────────────────
function AIGeneratePanel({ selectedTest, selectedExam, onSaved }) {
    const [aiForm, setAiForm] = useState({
        subject: selectedTest?.subject || '',
        chapter: '',
        classGrade: selectedTest?.classGrade || '',
        count: 10,
    });
    const [generating, setGenerating] = useState(false);
    const [preview, setPreview] = useState(null); // array of questions
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        setGenerating(true);
        setError('');
        setPreview(null);
        try {
            const res = await fetch('/api/admin/ai-questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    exam: selectedExam,
                    subject: aiForm.subject,
                    chapter: aiForm.chapter,
                    classGrade: aiForm.classGrade,
                    count: Number(aiForm.count),
                    testType: selectedTest?.type,
                    saveToDb: false, // preview first
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Generation failed');
            setPreview(data.questions);
        } catch (e) {
            setError(e.message);
        } finally {
            setGenerating(false);
        }
    };

    const handleSave = async () => {
        if (!selectedTest?.id) { alert('Select a test first'); return; }
        setSaving(true);
        try {
            const res = await fetch('/api/admin/ai-questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: selectedTest.id,
                    exam: selectedExam,
                    subject: aiForm.subject,
                    chapter: aiForm.chapter,
                    classGrade: aiForm.classGrade,
                    count: preview.length,
                    testType: selectedTest?.type,
                    saveToDb: true,
                    // Pass the already-generated questions by regenerating
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Save failed');
            alert(`✅ ${data.count} questions saved to "${selectedTest.title}"!`);
            setPreview(null);
            onSaved?.();
        } catch (e) {
            alert('Error: ' + e.message);
        } finally {
            setSaving(false);
        }
    };

    const inputStyle = {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        padding: '8px 12px',
        color: 'white',
        fontSize: '14px',
        width: '100%',
    };

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.5rem' }}>🤖</span>
                <h3 style={{ margin: 0, color: '#a5b4fc', fontSize: '1.1rem', fontWeight: '700' }}>
                    Generate Questions with Gemini AI
                </h3>
                {selectedTest?.id && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '20px' }}>
                        → {selectedTest.title}
                    </span>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Subject</span>
                    <input
                        value={aiForm.subject}
                        onChange={e => setAiForm(f => ({ ...f, subject: e.target.value }))}
                        placeholder="e.g. Physics"
                        style={inputStyle}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Chapter / Topic</span>
                    <input
                        value={aiForm.chapter}
                        onChange={e => setAiForm(f => ({ ...f, chapter: e.target.value }))}
                        placeholder="e.g. Kinematics"
                        style={inputStyle}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Class Grade</span>
                    <select value={aiForm.classGrade} onChange={e => setAiForm(f => ({ ...f, classGrade: e.target.value }))} style={inputStyle}>
                        <option value="">Any</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                    </select>
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>No. of Questions</span>
                    <input
                        type="number" min="1" max="50"
                        value={aiForm.count}
                        onChange={e => setAiForm(f => ({ ...f, count: e.target.value }))}
                        style={inputStyle}
                    />
                </label>
            </div>

            <button
                onClick={handleGenerate}
                disabled={generating}
                style={{
                    background: generating ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontWeight: '700',
                    cursor: generating ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.95rem',
                }}
            >
                {generating ? (
                    <><span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span> Generating...</>
                ) : '✨ Generate Questions'}
            </button>

            {error && (
                <div style={{ marginTop: '12px', color: '#f87171', background: 'rgba(239,68,68,0.1)', borderRadius: '8px', padding: '10px 14px', fontSize: '0.9rem' }}>
                    ❌ {error}
                </div>
            )}

            {/* Preview */}
            {preview && (
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <h4 style={{ margin: 0, color: '#34d399', fontSize: '1rem' }}>
                            ✅ {preview.length} questions generated — Preview
                        </h4>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={() => setPreview(null)}
                                style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer' }}
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving || !selectedTest?.id}
                                title={!selectedTest?.id ? 'Select a test by clicking Edit on it first' : ''}
                                style={{
                                    background: saving ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.2)',
                                    border: '1px solid #10b981',
                                    color: '#10b981',
                                    borderRadius: '6px',
                                    padding: '6px 16px',
                                    cursor: (saving || !selectedTest?.id) ? 'not-allowed' : 'pointer',
                                    fontWeight: '700',
                                    opacity: !selectedTest?.id ? 0.5 : 1,
                                }}
                            >
                                {saving ? 'Saving...' : `💾 Save to "${selectedTest?.title || 'Test'}"`}
                            </button>
                        </div>
                    </div>
                    <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {preview.map((q, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#818cf8', marginRight: '8px' }}>Q{i + 1}.</span>
                                    {q.text}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '6px' }}>
                                    {q.options?.map(opt => (
                                        <span key={opt.id} style={{
                                            fontSize: '0.82rem',
                                            color: opt.id === q.correctOption ? '#34d399' : '#94a3b8',
                                            background: opt.id === q.correctOption ? 'rgba(52,211,153,0.1)' : 'transparent',
                                            borderRadius: '4px',
                                            padding: '2px 6px',
                                            fontWeight: opt.id === q.correctOption ? '700' : '400',
                                        }}>
                                            ({opt.id}) {opt.text} {opt.id === q.correctOption ? '✓' : ''}
                                        </span>
                                    ))}
                                </div>
                                {q.explanation && (
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px', marginTop: '4px' }}>
                                        💡 {q.explanation}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Main TestManager ───────────────────────────────────────────────────────
export default function TestManager({ selectedExam, availableTests, autoCreate, onAutoCreateHandled }) {
    const [customTests, setCustomTests] = useState({});
    const [editingTest, setEditingTest] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedForAI, setSelectedForAI] = useState(null); // test selected for AI generation
    const [showAIPanel, setShowAIPanel] = useState(false);

    const [testForm, setTestForm] = useState({
        id: '',
        title: '',
        type: 'MOCK',
        subject: '',
        chapter: '',
        description: '',
        liveStart: '',
        liveEnd: '',
    });

    useEffect(() => {
        fetchCustomTests();
    }, []);

    // Bridge for auto-create signal from parent
    useEffect(() => {
        if (autoCreate) {
            handleCreateNew();
            onAutoCreateHandled?.();
        }
    }, [autoCreate]);

    const fetchCustomTests = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/tests');
            const data = await res.json();
            setCustomTests(data);
        } catch (err) {
            console.error('Failed to fetch custom tests', err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (test) => {
        setEditingTest(test);
        
        let startIso = test.liveStart ? new Date(test.liveStart).toISOString().slice(0, 16) : '';
        let endIso = test.liveEnd ? new Date(test.liveEnd).toISOString().slice(0, 16) : '';

        setTestForm({
            id: test.id,
            title: test.title || '',
            type: test.type || 'MOCK',
            subject: test.subject || '',
            chapter: test.chapter || '',
            description: test.description || '',
            liveStart: startIso,
            liveEnd: endIso,
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreateNew = () => {
        setEditingTest({ isNew: true });
        setTestForm({
            id: `${selectedExam}-CUSTOM-${Date.now()}`,
            title: '',
            type: 'MOCK',
            subject: '',
            chapter: '',
            description: '',
            liveStart: '',
            liveEnd: '',
            category: selectedExam,
            year: new Date().getFullYear(),
            duration: 180,
            totalMarks: selectedExam === 'neet' ? 720 : 300,
            questionsCount: selectedExam === 'neet' ? 180 : 75,
        });
    };

    const handleSave = async () => {
        const payload = { ...editingTest, ...testForm };
        
        if (payload.type === 'LIVE') {
            payload.liveStart = new Date(testForm.liveStart).toISOString();
            payload.liveEnd = new Date(testForm.liveEnd).toISOString();
        }

        try {
            await fetch('/api/tests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'SAVE', test: payload })
            });
            setEditingTest(null);
            fetchCustomTests();
            alert('Test saved successfully');
        } catch (err) {
            alert('Failed to save test');
        }
    };

    const handleDelete = async (testId) => {
        if (!confirm(`Are you sure you want to delete test "${testId}"? This will only remove custom overrides and newly created tests.`)) return;
        
        try {
            const res = await fetch('/api/tests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'DELETE', test: { id: testId } })
            });
            if (res.ok) {
                fetchCustomTests();
                alert('Test removed successfully');
            } else {
                throw new Error('Failed to delete');
            }
        } catch (err) {
            alert('Error deleting test');
        }
    };

    const mergedTests = availableTests.map(staticTest => {
        return customTests[staticTest.id] ? { ...staticTest, ...customTests[staticTest.id], isEdited: true } : staticTest;
    });

    const purelyCustomTests = Object.values(customTests).filter(ct => ct.category === selectedExam && !availableTests.find(st => st.id === ct.id));
    const finalTestsList = [...mergedTests, ...purelyCustomTests];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                <h2 className={styles.subtitle}>
                    {editingTest ? (editingTest.isNew ? 'Create New Test' : `Edit Test: ${editingTest.id}`) : `Manage ${selectedExam?.toUpperCase()} Tests`}
                </h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => setShowAIPanel(p => !p)}
                        style={{
                            background: showAIPanel ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.15)',
                            border: '1px solid rgba(99,102,241,0.5)',
                            color: '#a5b4fc',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                    >
                        🤖 {showAIPanel ? 'Hide AI Generator' : 'AI Generate Questions'}
                    </button>
                    {!editingTest && (
                        <button className={styles.saveBtn} onClick={handleCreateNew} style={{ maxWidth: '200px' }}>
                            + Create New Test
                        </button>
                    )}
                </div>
            </div>

            {/* AI Panel */}
            {showAIPanel && (
                <AIGeneratePanel
                    selectedTest={selectedForAI}
                    selectedExam={selectedExam}
                    onSaved={fetchCustomTests}
                />
            )}

            {editingTest && (
                <div className={styles.editor} style={{ marginBottom: '2rem' }}>
                    <div className={styles.formGrid}>
                        {editingTest.isNew && (
                            <label>Test ID (Unique Identifier)
                                <input className={styles.input} value={testForm.id} onChange={e => setTestForm({...testForm, id: e.target.value})} />
                            </label>
                        )}
                        
                        <div className={styles.col2}>
                            <label>Test Title
                                <input className={styles.input} value={testForm.title} onChange={e => setTestForm({...testForm, title: e.target.value})} placeholder="e.g. Weekly Major Test 1" />
                            </label>
                            <label>Test Type
                                <select className={styles.input} value={testForm.type} onChange={e => setTestForm({...testForm, type: e.target.value})}>
                                    <option value="MOCK">Full Test</option>
                                    <option value="LIVE">Cumulative Test</option>
                                    <option value="PART">Part Test</option>
                                    <option value="PYQ">PYQ Paper</option>
                                    <option value="SUBJECT">Subject Test</option>
                                    <option value="CHAPTER">Chapter Test</option>
                                    <option value="SUBTOPIC">Topicwise Test</option>
                                </select>
                            </label>
                        </div>

                        {(testForm.type === 'SUBJECT' || testForm.type === 'CHAPTER' || testForm.type === 'SUBTOPIC') && (
                            <div className={styles.col2}>
                                <label>Subject
                                    <input className={styles.input} value={testForm.subject} onChange={e => setTestForm({...testForm, subject: e.target.value})} placeholder="e.g. Physics" />
                                </label>
                                {(testForm.type === 'CHAPTER' || testForm.type === 'SUBTOPIC') && (
                                    <label>Chapter Name
                                        <input className={styles.input} value={testForm.chapter || ''} onChange={e => setTestForm({...testForm, chapter: e.target.value})} placeholder="e.g. Kinematics" />
                                    </label>
                                )}
                            </div>
                        )}

                        {testForm.type === 'LIVE' && (
                            <div className={styles.col2}>
                                <label>Live Start Date & Time
                                    <input type="datetime-local" className={styles.input} value={testForm.liveStart} onChange={e => setTestForm({...testForm, liveStart: e.target.value})} />
                                </label>
                                <label>Live End Date & Time
                                    <input type="datetime-local" className={styles.input} value={testForm.liveEnd} onChange={e => setTestForm({...testForm, liveEnd: e.target.value})} />
                                </label>
                            </div>
                        )}

                        <label>Description / Syllabus
                            <textarea className={styles.textarea} rows={4} value={testForm.description} onChange={e => setTestForm({...testForm, description: e.target.value})} placeholder="Enter test description or detailed syllabus here..." />
                        </label>

                        <div className={styles.actions}>
                            <button className={styles.saveBtn} onClick={handleSave}>Save Test Details</button>
                            <button className={styles.cancelBtn} onClick={() => setEditingTest(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.list}>
               {loading ? <p>Loading tests...</p> : (
                   <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginTop: '1rem' }}>
                       <thead>
                           <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                               <th style={{ padding: '10px' }}>ID</th>
                               <th style={{ padding: '10px' }}>Title</th>
                               <th style={{ padding: '10px' }}>Type</th>
                               <th style={{ padding: '10px' }}>Status</th>
                               <th style={{ padding: '10px' }}>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {finalTestsList.map(test => (
                               <tr key={test.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                   <td style={{ padding: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>{test.id}</td>
                                   <td style={{ padding: '10px', fontWeight: '500' }}>{test.title}</td>
                                   <td style={{ padding: '10px' }}><span style={{ background: 'var(--surface-hover)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{test.type}</span></td>
                                   <td style={{ padding: '10px' }}>
                                        {test.isEdited && <span style={{ color: '#f59e0b', fontSize: '0.8rem', border: '1px solid #f59e0b', padding: '2px 6px', borderRadius: '4px' }}>Edited</span>}
                                        {(!test.isEdited && !test.isCustom) && <span style={{ color: '#10b981', fontSize: '0.8rem' }}>Default</span>}
                                        {(!test.isEdited && test.isCustom) && <span style={{ color: '#8b5cf6', fontSize: '0.8rem', border: '1px solid #8b5cf6', padding: '2px 6px', borderRadius: '4px' }}>Custom</span>}
                                   </td>
                                   <td style={{ padding: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                       <button onClick={() => handleEdit(test)} className={styles.editBtn}>Edit</button>
                                       <button
                                           onClick={() => {
                                               setSelectedForAI(test);
                                               setShowAIPanel(true);
                                               window.scrollTo({ top: 0, behavior: 'smooth' });
                                           }}
                                           style={{
                                               background: 'rgba(99,102,241,0.15)',
                                               border: '1px solid rgba(99,102,241,0.4)',
                                               color: '#a5b4fc',
                                               borderRadius: '6px',
                                               padding: '5px 10px',
                                               cursor: 'pointer',
                                               fontSize: '0.8rem',
                                               fontWeight: '600',
                                           }}
                                       >
                                           🤖 AI
                                       </button>
                                       {(test.isEdited || test.isCustom) && (
                                            <button 
                                                onClick={() => handleDelete(test.id)} 
                                                className={styles.deleteBtn}
                                                style={{ padding: '5px 10px', fontSize: '0.8rem' }}
                                            >
                                                Delete
                                            </button>
                                        )}
                                   </td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               )}
            </div>
        </div>
    );
}
