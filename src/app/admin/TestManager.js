import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { neetChapters, neetTests } from '../../data/exams/neet';
import { jeeMainsChapters, jeeMainsTests } from '../../data/exams/jeeMains';
import { jeeAdvancedChapters, jeeAdvanceTests } from '../../data/exams/jeeAdvanced';

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
    const [managingQuestionsTest, setManagingQuestionsTest] = useState(null); 

    // Filters
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('ALL');
    const [filterSubject, setFilterSubject] = useState('ALL');


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
            classGrade: 'All Test',
        });
    };

    const handleSave = async () => {
        const payload = { ...editingTest, ...testForm };
        const isNewTest = editingTest.isNew;
        
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
            
            if (isNewTest) {
                alert('Test created successfully! Auto-opening Question Manager...');
                setManagingQuestionsTest({ ...payload, isCustom: true });
            } else {
                alert('Test saved successfully');
            }
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
    let finalTestsList = [...mergedTests, ...purelyCustomTests];

    // Apply Filters
    if (filterCategory !== 'ALL') {
        finalTestsList = finalTestsList.filter(t => t.type === filterCategory);
    }
    if (filterSubject !== 'ALL') {
        finalTestsList = finalTestsList.filter(t => (t.subject || '').toLowerCase() === filterSubject.toLowerCase());
    }
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        finalTestsList = finalTestsList.filter(t => 
            t.title.toLowerCase().includes(query) || t.id.toLowerCase().includes(query)
        );
    }

    if (managingQuestionsTest) {
        return (
            <QuestionManager
                test={managingQuestionsTest}
                onBack={() => setManagingQuestionsTest(null)}
            />
        );
    }

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
                            <label>Class / Grade
                                <select className={styles.input} value={testForm.classGrade || 'All Test'} onChange={e => setTestForm({...testForm, classGrade: e.target.value})}>
                                    <option value="All Test">All Classes</option>
                                    <option value="11">Class 11</option>
                                    <option value="12">Class 12</option>
                                    <option value="Dropper">Dropper</option>
                                </select>
                            </label>
                        </div>

                        {(testForm.type === 'SUBJECT' || testForm.type === 'CHAPTER' || testForm.type === 'SUBTOPIC') && (
                            <div className={styles.col2}>
                                <label>Subject
                                    <select 
                                        className={styles.input} 
                                        value={testForm.subject} 
                                        onChange={e => setTestForm({...testForm, subject: e.target.value, chapter: ''})}
                                    >
                                        <option value="">— Select Subject —</option>
                                        {(selectedExam === 'neet' || selectedExam === 'jee-mains' || selectedExam === 'jee-advance') ? (
                                            <>
                                                <option value="Physics">Physics</option>
                                                <option value="Chemistry">Chemistry</option>
                                                {selectedExam === 'neet' ? (
                                                    <>
                                                        <option value="Botany">Botany</option>
                                                        <option value="Zoology">Zoology</option>
                                                    </>
                                                ) : <option value="Mathematics">Mathematics</option>}
                                            </>
                                        ) : (
                                            <>
                                                <option value="Science">Science</option>
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Social Science">Social Science</option>
                                                <option value="English">English</option>
                                                <option value="NTSE">NTSE</option>
                                                <option value="NSO">NSO</option>
                                                <option value="IMO">IMO</option>
                                                <option value="NSTSE">NSTSE</option>
                                            </>
                                        )}
                                    </select>
                                </label>
                                {(testForm.type === 'CHAPTER' || testForm.type === 'SUBTOPIC') && (
                                    <label>Chapter Name
                                        {(() => {
                                            const allChapterData = { neet: neetChapters, 'jee-mains': jeeMainsChapters, 'jee-advance': jeeAdvancedChapters };
                                            const subjectChapters = allChapterData[selectedExam]?.[testForm.subject] || {};
                                            const chapters = Object.values(subjectChapters).flat();

                                            return chapters.length > 0 ? (
                                                <select
                                                    className={styles.input}
                                                    value={testForm.chapter}
                                                    onChange={e => setTestForm({...testForm, chapter: e.target.value})}
                                                >
                                                    <option value="">— Select Chapter —</option>
                                                    {chapters.map(ch => <option key={ch} value={ch}>{ch}</option>)}
                                                </select>
                                            ) : (
                                                <input 
                                                    className={styles.input} 
                                                    value={testForm.chapter || ''} 
                                                    onChange={e => setTestForm({...testForm, chapter: e.target.value})} 
                                                    placeholder="e.g. Kinematics" 
                                                />
                                            );
                                        })()}
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

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem', marginBottom: '0.5rem', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <input 
                    type="text" 
                    placeholder="🔍 Search Test Title or ID..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{ flex: '1', minWidth: '200px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', padding: '8px 12px', fontSize: '0.9rem' }}
                />
                <select 
                    value={filterCategory} 
                    onChange={e => setFilterCategory(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', padding: '8px 12px', fontSize: '0.9rem' }}
                >
                    <option value="ALL">All Categories</option>
                    <option value="MOCK">Full Tests (Mock)</option>
                    <option value="LIVE">Cumulative (Live)</option>
                    <option value="PYQ">Previous Year (PYQ)</option>
                    <option value="SUBJECT">Subject-wise</option>
                    <option value="CHAPTER">Chapter-wise</option>
                    <option value="SUBTOPIC">Topic-wise</option>
                </select>
                <select 
                    value={filterSubject} 
                    onChange={e => setFilterSubject(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', padding: '8px 12px', fontSize: '0.9rem' }}
                >
                    <option value="ALL">All Subjects</option>
                    {selectedExam === 'neet' ? (
                        <>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="botany">Botany</option>
                            <option value="zoology">Zoology</option>
                        </>
                    ) : (
                        <>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="mathematics">Mathematics</option>
                        </>
                    )}
                </select>
            </div>

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
                                            onClick={() => setManagingQuestionsTest(test)}
                                            style={{
                                                background: 'rgba(52,211,153,0.15)',
                                                border: '1px solid rgba(52,211,153,0.4)',
                                                color: '#34d399',
                                                borderRadius: '6px',
                                                padding: '5px 10px',
                                                cursor: 'pointer',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                            }}
                                        >
                                            📝 Questions
                                        </button>
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

// ── Question Manager ────────────────────────────────────────────────────────
function QuestionManager({ test, onBack }) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingQ, setEditingQ] = useState(null); // Question object being edited or 'new'
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, [test.id]);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/questions?testId=${test.id}`);
            const data = await res.json();
            setQuestions(Array.isArray(data) ? data : []);
        } catch (e) {
            console.error('Fetch questions failed', e);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (q) => {
        setEditingQ(JSON.parse(JSON.stringify(q))); // Deep copy
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddNew = () => {
        setEditingQ({
            id: null, // Will be assigned by backend
            text: '',
            options: [
                { id: '1', text: '' },
                { id: '2', text: '' },
                { id: '3', text: '' },
                { id: '4', text: '' },
            ],
            correctOption: '1',
            explanation: '',
            subject: test.subject || '',
            chapter: test.chapter || '',
            difficulty: 'Medium',
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSave = async () => {
        if (!editingQ.text.trim()) { alert('Question text is required'); return; }
        if (editingQ.options.some(o => !o.text.trim())) { alert('All options must have text'); return; }

        setSaving(true);
        try {
            const action = editingQ.id ? 'EDIT' : 'ADD';
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: test.id,
                    action,
                    question: editingQ
                })
            });
            if (!res.ok) throw new Error('Save failed');
            
            setEditingQ(null);
            fetchQuestions();
        } catch (e) {
            alert('Error saving: ' + e.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (qId) => {
        if (!confirm('Are you sure you want to delete this question?')) return;
        try {
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: test.id,
                    action: 'DELETE',
                    question: { id: qId }
                })
            });
            if (res.ok) fetchQuestions();
        } catch (e) {
            alert('Delete failed');
        }
    };

    const inputStyle = {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        padding: '10px 14px',
        color: 'white',
        fontSize: '0.9rem',
        width: '100%',
        marginTop: '6px',
    };

    return (
        <div style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid rgba(255,255,255,0.1)', pb: '15px' }}>
                <button 
                  onClick={onBack}
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  ← Back to List
                </button>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#818cf8' }}>
                    Managing Questions: <span style={{ color: 'white' }}>{test.title}</span>
                </h3>
                <button 
                    onClick={handleAddNew}
                    style={{ marginLeft: 'auto', background: 'rgba(124,58,237,0.2)', border: '1px solid #7c3aed', color: '#c4b5fd', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    + Add New Question
                </button>
            </div>

            {/* Editor Area */}
            {editingQ && (
                <div style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(139,92,246,0.3)', 
                    borderRadius: '14px', padding: '24px', marginBottom: '30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h4 style={{ margin: '0 0 20px 0', color: '#c4b5fd' }}>{editingQ.id ? 'Edit Question' : 'Add New Question'}</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <label>
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Question Text (Supports LaTeX between $ ... $)</span>
                            <textarea 
                                style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} 
                                value={editingQ.text} 
                                onChange={e => setEditingQ({...editingQ, text: e.target.value})}
                            />
                        </label>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            {editingQ.options.map((opt, idx) => (
                                <div key={idx} style={{ position: 'relative' }}>
                                    <span style={{ fontSize: '0.75rem', position: 'absolute', top: '-10px', left: '10px', background: '#1e293b', padding: '0 5px', color: '#94a3b8' }}>Option {opt.id}</span>
                                    <input 
                                        style={inputStyle} 
                                        value={opt.text} 
                                        onChange={e => {
                                            const newOps = [...editingQ.options];
                                            newOps[idx].text = e.target.value;
                                            setEditingQ({...editingQ, options: newOps});
                                        }}
                                    />
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
                                        <input 
                                            type="radio" 
                                            checked={editingQ.correctOption === opt.id}
                                            onChange={() => setEditingQ({...editingQ, correctOption: opt.id})}
                                        />
                                        Correct Answer
                                    </label>
                                </div>
                            ))}
                        </div>

                        <label>
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Explanation (Optional)</span>
                            <textarea 
                                style={{ ...inputStyle, minHeight: '60px' }} 
                                value={editingQ.explanation || ''} 
                                onChange={e => setEditingQ({...editingQ, explanation: e.target.value})}
                            />
                        </label>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                            <button 
                                onClick={handleSave}
                                disabled={saving}
                                style={{ background: '#7c3aed', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', flex: 1 }}
                            >
                                {saving ? 'Saving...' : 'Save Question'}
                            </button>
                            <button 
                                onClick={() => setEditingQ(null)}
                                style={{ background: 'transparent', color: '#94a3b8', border: '1px solid #475569', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', flex: 1 }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* List Table */}
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                {loading ? <p style={{ padding: '20px', textAlign: 'center' }}>Loading questions...</p> : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <th style={{ padding: '15px' }}>#</th>
                                <th style={{ padding: '15px' }}>Question</th>
                                <th style={{ padding: '15px' }}>Answer</th>
                                <th style={{ padding: '15px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.length === 0 ? (
                                <tr><td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No questions found for this test. Use AI or Add manually.</td></tr>
                            ) : (
                                questions.map((q, i) => (
                                    <tr key={q.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                        <td style={{ padding: '15px', color: '#64748b', fontSize: '0.9rem' }}>{q.id}</td>
                                        <td style={{ padding: '15px', maxWidth: '400px' }}>
                                            <div style={{ fontWeight: '500', marginBottom: '5px', fontSize: '0.95rem' }}>{q.text}</div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                                {q.options?.map(opt => (
                                                    <span key={opt.id} style={{ fontSize: '0.75rem', color: opt.id === q.correctOption ? '#10b981' : '#64748b', fontWeight: opt.id === q.correctOption ? 'bold' : 'normal' }}>
                                                        ({opt.id}) {opt.text}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td style={{ padding: '15px' }}>
                                            <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                Option {q.correctOption}
                                            </span>
                                        </td>
                                        <td style={{ padding: '15px' }}>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button onClick={() => handleEdit(q)} style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.8rem', cursor: 'pointer' }}>Edit</button>
                                                <button onClick={() => handleDelete(q.id)} style={{ background: 'transparent', border: '1px solid #ef444466', color: '#ef4444', borderRadius: '6px', padding: '4px 10px', fontSize: '0.8rem', cursor: 'pointer' }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
