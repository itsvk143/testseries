'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import { neetTests } from '../../data/exams/neet';
import { jeeMainsTests } from '../../data/exams/jeeMains';
import { jeeAdvanceTests } from '../../data/exams/jeeAdvanced';
import { neetChapters } from '../../data/exams/neet';
import { jeeMainsChapters } from '../../data/exams/jeeMains';
import { jeeAdvancedChapters } from '../../data/exams/jeeAdvanced';
import LatexRenderer from '../../components/LatexRenderer';
import TestManager from './TestManager'; 
import { normalizeQuestion } from '../../lib/questionFormatter';

export default function AdminPanel() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('questions'); // 'questions' | 'tests'
    const [selectedExam, setSelectedExam] = useState('neet');
    const [selectedTestType, setSelectedTestType] = useState('ALL');
    const [selectedSubject, setSelectedSubject] = useState('ALL');
    const [selectedTestId, setSelectedTestId] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState(null); // null = add mode
    const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'
    const [bulkJson, setBulkJson] = useState('');
    const [bulkError, setBulkError] = useState('');
    const [showAIPanel, setShowAIPanel] = useState(false);
    const [aiForm, setAiForm] = useState({ subject: '', chapter: '', classGrade: '', count: 10, difficulty: 'Mixed' });
    const [selectedChapters, setSelectedChapters] = useState([]);
    const [chapterDropdownOpen, setChapterDropdownOpen] = useState(false);
    const [aiGenerating, setAiGenerating] = useState(false);
    const [aiPreview, setAiPreview] = useState(null);
    const [aiSaving, setAiSaving] = useState(false);

    const [formData, setFormData] = useState({
        text: '',
        image: '',
        subject: 'Physics',
        correctOption: 'a',
        explanation: '',
        optionA: '',
        optionAImage: '',
        optionB: '',
        optionBImage: '',
        optionC: '',
        optionCImage: '',
        optionD: '',
        optionDImage: ''
    });

    const availableTests = [
        ...neetTests,
        ...jeeMainsTests,
        ...jeeAdvanceTests
    ].filter(t => t.category === selectedExam);

    const filteredTests = availableTests.filter(t => {
        if (selectedTestType !== 'ALL' && t.type !== selectedTestType) return false;
        if (selectedSubject !== 'ALL' && t.subject !== selectedSubject) return false;
        return true;
    });

    // Derive available subjects from the currently-visible test type
    const subjectsByExam = {
        neet: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
        'jee-mains': ['Physics', 'Chemistry', 'Mathematics'],
        'jee-advance': ['Physics', 'Chemistry', 'Mathematics'],
    };
    const availableSubjects = subjectsByExam[selectedExam] || [];

    // Admin authentication check
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        } else if (status === 'authenticated' && !session?.user?.isAdmin) {
            router.push('/dashboard');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (filteredTests.length > 0 && !selectedTestId) {
            setSelectedTestId(filteredTests[0].id);
        }
    }, [selectedExam, selectedTestType, filteredTests, selectedTestId]);

    useEffect(() => {
        if (selectedTestId) {
            fetchQuestions();
        }
    }, [selectedTestId]);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/questions?testId=${selectedTestId}`);
            const data = await res.json();
            setQuestions(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });
            const result = await res.json();
            if (result.success) {
                setFormData(prev => ({ ...prev, [field]: result.url }));
            } else {
                alert('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    const handleSave = async () => {
        const questionPayload = {
            id: editingQuestion ? editingQuestion.id : undefined,
            text: formData.text,
            image: formData.image,
            subject: formData.subject,
            correctOption: formData.correctOption,
            explanation: formData.explanation,
            options: [
                { id: 'a', text: formData.optionA, image: formData.optionAImage },
                { id: 'b', text: formData.optionB, image: formData.optionBImage },
                { id: 'c', text: formData.optionC, image: formData.optionCImage },
                { id: 'd', text: formData.optionD, image: formData.optionDImage },
            ]
        };

        const action = editingQuestion ? 'EDIT' : 'ADD';

        await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: selectedTestId,
                question: questionPayload,
                action
            })
        });

        setEditingQuestion(null);
        resetForm();
        fetchQuestions();
    };

    const handleBulkUpload = async () => {
        setBulkError('');
        try {
            if (!bulkJson.trim()) {
                throw new Error("JSON input is empty.");
            }
            
            const parsedData = JSON.parse(bulkJson);
            
            if (!Array.isArray(parsedData)) {
                throw new Error("Expected a JSON array of questions.");
            }
            
            if (parsedData.length === 0) {
                throw new Error("JSON array is empty.");
            }

            // Basic validation and NORMALIZATION
            const normalizedData = parsedData.map((q, idx) => {
                try {
                    // Inject selected subject if the question doesn't have one
                    const questionObj = {
                        ...q,
                        subject: q.subject || formData.subject
                    };
                    return normalizeQuestion(questionObj);
                } catch (err) {
                    throw new Error(`Error formatting question at index ${idx}: ${err.message}`);
                }
            });

            await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: selectedTestId,
                    question: normalizedData,
                    action: 'ADD_BULK'
                })
            });

            setBulkJson('');
            setUploadMode('single');
            alert(`Successfully added ${parsedData.length} questions!`);
            fetchQuestions();

        } catch (e) {
            setBulkError(e.message);
        }
    };

    const handleFileUploadBulk = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setBulkJson(event.target.result);
        };
        reader.readAsText(file);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this question?')) return;

        await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: selectedTestId,
                question: { id },
                action: 'DELETE'
            })
        });
        fetchQuestions();
    };

    const handleEdit = (q) => {
        setEditingQuestion(q);
        setFormData({
            text: q.text,
            image: q.image || '',
            subject: q.subject,
            correctOption: q.correctOption,
            explanation: q.explanation || '',
            optionA: q.options.find(o => o.id === 'a')?.text || '',
            optionAImage: q.options.find(o => o.id === 'a')?.image || '',
            optionB: q.options.find(o => o.id === 'b')?.text || '',
            optionBImage: q.options.find(o => o.id === 'b')?.image || '',
            optionC: q.options.find(o => o.id === 'c')?.text || '',
            optionCImage: q.options.find(o => o.id === 'c')?.image || '',
            optionD: q.options.find(o => o.id === 'd')?.text || '',
            optionDImage: q.options.find(o => o.id === 'd')?.image || '',
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditingQuestion(null);
        setFormData({
            text: '',
            image: '',
            subject: 'Physics',
            correctOption: 'a',
            explanation: '',
            optionA: '',
            optionAImage: '',
            optionB: '',
            optionBImage: '',
            optionC: '',
            optionCImage: '',
            optionD: '',
            optionDImage: ''
        });
    };

    // Show loading while checking authentication
    if (status === 'loading') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0e27', color: 'white' }}>
                <div>Loading...</div>
            </div>
        );
    }

    // Don't render if not admin
    if (!session?.user?.isAdmin) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Admin Panel</h1>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <button 
                        className={`${styles.tab} ${activeTab === 'questions' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('questions')}
                    >
                        Manage Questions
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === 'tests' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('tests')}
                    >
                        Manage Tests & Dates
                    </button>
                </div>

                <div className={styles.controls}>
                    <select
                        value={selectedExam}
                        onChange={(e) => { setSelectedExam(e.target.value); setSelectedTestType('ALL'); setSelectedTestId(''); }}
                        className={styles.select}
                    >
                        <option value="neet">NEET</option>
                        <option value="jee-mains">JEE Mains</option>
                        <option value="jee-advance">JEE Advance</option>
                    </select>

                    {activeTab === 'questions' && (
                        <>
                            <select
                                value={selectedTestType}
                                onChange={(e) => { setSelectedTestType(e.target.value); setSelectedSubject('ALL'); setSelectedTestId(''); }}
                                className={styles.select}
                            >
                                <option value="ALL">All Categories</option>
                                <option value="MOCK">Mock Tests</option>
                                <option value="PYQ">Previous Year (PYQ)</option>
                                <option value="SUBJECT">Subject Tests</option>
                                <option value="CHAPTER">Chapter Tests</option>
                                <option value="PART">Part Tests</option>
                                <option value="LIVE">Live / Sunday Tests</option>
                            </select>

                            {/* Subject filter — shown when test type supports subject filtering */}
                            {['ALL', 'SUBJECT', 'CHAPTER'].includes(selectedTestType) && (
                                <select
                                    value={selectedSubject}
                                    onChange={(e) => { setSelectedSubject(e.target.value); setSelectedTestId(''); }}
                                    className={styles.select}
                                >
                                    <option value="ALL">All Subjects</option>
                                    {availableSubjects.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            )}

                            <select
                                value={selectedTestId}
                                onChange={(e) => setSelectedTestId(e.target.value)}
                                className={styles.select}
                            >
                                {filteredTests.map(t => (
                                    <option key={t.id} value={t.id}>{t.title}</option>
                                ))}
                            </select>
                        </>
                    )}
                </div>

                {activeTab === 'tests' ? (
                    <TestManager selectedExam={selectedExam} availableTests={availableTests} />
                ) : (
                  <>
                <div className={styles.editor}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                        <h2 className={styles.subtitle}>{editingQuestion ? `Edit Question #${editingQuestion.id}` : 'Add New Question(s)'}</h2>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {/* AI Generate button — always visible */}
                            <button
                                onClick={() => { setShowAIPanel(p => !p); setAiPreview(null); }}
                                style={{
                                    background: showAIPanel ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.15)',
                                    border: '1px solid rgba(99,102,241,0.5)',
                                    color: '#a5b4fc',
                                    borderRadius: '8px',
                                    padding: '6px 14px',
                                    cursor: 'pointer',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                }}
                            >
                                🤖 AI Generate
                            </button>
                            {!editingQuestion && (
                                <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px' }}>
                                    <button 
                                        onClick={() => setUploadMode('single')}
                                        style={{
                                            background: uploadMode === 'single' ? '#4f46e5' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer'
                                        }}
                                    >Single Entry</button>
                                    <button 
                                        onClick={() => setUploadMode('bulk')}
                                        style={{
                                            background: uploadMode === 'bulk' ? '#10b981' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer'
                                        }}
                                    >Bulk JSON Upload</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Inline AI Generate Panel ── */}
                    {showAIPanel && (
                        <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '18px', marginBottom: '20px' }}>
                            <p style={{ margin: '0 0 12px', color: '#a5b4fc', fontWeight: '700', fontSize: '0.95rem' }}>🤖 Gemini AI — Generate &amp; Save to: <span style={{ color: 'white' }}>{filteredTests.find(t => t.id === selectedTestId)?.title || selectedTestId}</span></p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                                {/* Subject dropdown */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Subject
                                    <select value={aiForm.subject} onChange={e => setAiForm(f => ({ ...f, subject: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="">Any / All</option>
                                        {(selectedExam === 'neet'
                                            ? ['Physics', 'Chemistry', 'Botany', 'Zoology']
                                            : ['Physics', 'Chemistry', 'Mathematics']
                                        ).map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </label>
                                {/* Chapter multi-select dropdown */}
                                {(() => {
                                    const allChapterData = { neet: neetChapters, 'jee-mains': jeeMainsChapters, 'jee-advance': jeeAdvancedChapters };
                                    const subjectChapters = allChapterData[selectedExam]?.[aiForm.subject] || {};
                                    // Merge class-filtered or all chapters
                                    let chapters = [];
                                    if (aiForm.classGrade && subjectChapters[aiForm.classGrade]) {
                                        chapters = subjectChapters[aiForm.classGrade];
                                    } else {
                                        chapters = Object.values(subjectChapters).flat();
                                    }
                                    const toggleChapter = (ch) => {
                                        setSelectedChapters(prev =>
                                            prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]
                                        );
                                    };
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', gridColumn: chapters.length > 0 ? 'span 2' : 'span 1' }}>
                                            Chapter / Topic
                                            {chapters.length === 0 ? (
                                                <input
                                                    type="text"
                                                    value={aiForm.chapter}
                                                    onChange={e => setAiForm(f => ({ ...f, chapter: e.target.value }))}
                                                    placeholder="e.g. Kinematics (select a subject first)"
                                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                                />
                                            ) : (
                                                <div style={{ position: 'relative' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setChapterDropdownOpen(p => !p)}
                                                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: selectedChapters.length ? 'white' : '#64748b', fontSize: '14px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                                    >
                                                        <span>{selectedChapters.length ? `${selectedChapters.length} chapter${selectedChapters.length > 1 ? 's' : ''} selected` : 'Select chapters…'}</span>
                                                        <span>{chapterDropdownOpen ? '▲' : '▼'}</span>
                                                    </button>
                                                    {chapterDropdownOpen && (
                                                        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 99, background: '#0f172a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', maxHeight: '220px', overflowY: 'auto', marginTop: '4px', padding: '6px' }}>
                                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: '#a5b4fc', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '4px' }}>
                                                                <input type="checkbox"
                                                                    checked={selectedChapters.length === chapters.length}
                                                                    onChange={() => setSelectedChapters(selectedChapters.length === chapters.length ? [] : [...chapters])}
                                                                /> Select All
                                                            </label>
                                                            {chapters.map(ch => (
                                                                <label key={ch} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: selectedChapters.includes(ch) ? 'white' : '#94a3b8', background: selectedChapters.includes(ch) ? 'rgba(99,102,241,0.15)' : 'transparent' }}>
                                                                    <input type="checkbox" checked={selectedChapters.includes(ch)} onChange={() => toggleChapter(ch)} />
                                                                    {ch}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {selectedChapters.length > 0 && (
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                                                            {selectedChapters.map(ch => (
                                                                <span key={ch} style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.75rem', color: '#a5b4fc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                                    {ch}
                                                                    <button onClick={() => toggleChapter(ch)} style={{ background: 'none', border: 'none', color: '#a5b4fc', cursor: 'pointer', padding: 0, lineHeight: 1 }}>×</button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                                {/* Difficulty dropdown */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Difficulty
                                    <select value={aiForm.difficulty} onChange={e => setAiForm(f => ({ ...f, difficulty: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="Mixed">Mixed</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </label>
                                {/* Class Grade */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Class Grade
                                    <select value={aiForm.classGrade} onChange={e => setAiForm(f => ({ ...f, classGrade: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="">Any</option>
                                        <option value="11">Class 11</option>
                                        <option value="12">Class 12</option>
                                    </select>
                                </label>
                                {/* Count */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    No. of Questions
                                    <input
                                        type="number" min={1} max={50}
                                        value={aiForm.count}
                                        onChange={e => setAiForm(f => ({ ...f, count: e.target.value }))}
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                    />
                                </label>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: aiPreview ? '16px' : 0 }}>
                                <button
                                    onClick={async () => {
                                        setAiGenerating(true); setAiPreview(null);
                                        try {
                                            const res = await fetch('/api/admin/ai-questions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ exam: selectedExam, subject: aiForm.subject, chapter: selectedChapters.length ? selectedChapters.join(', ') : aiForm.chapter, classGrade: aiForm.classGrade, difficulty: aiForm.difficulty, count: Number(aiForm.count), saveToDb: false }) });
                                            const data = await res.json();
                                            if (!res.ok) throw new Error(data.error);
                                            setAiPreview(data.questions);
                                        } catch(e) { alert('AI Error: ' + e.message); }
                                        finally { setAiGenerating(false); }
                                    }}
                                    disabled={aiGenerating}
                                    style={{ background: aiGenerating ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 18px', fontWeight: '700', cursor: aiGenerating ? 'not-allowed' : 'pointer' }}
                                >
                                    {aiGenerating ? '⏳ Generating...' : '✨ Generate'}
                                </button>
                                {aiPreview && (
                                    <button
                                        onClick={async () => {
                                            if (!selectedTestId) { alert('Select a test first'); return; }
                                            setAiSaving(true);
                                            try {
                                                const res = await fetch('/api/admin/ai-questions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ testId: selectedTestId, exam: selectedExam, subject: aiForm.subject, chapter: selectedChapters.length ? selectedChapters.join(', ') : aiForm.chapter, classGrade: aiForm.classGrade, difficulty: aiForm.difficulty, count: Number(aiForm.count), saveToDb: true }) });
                                                const data = await res.json();
                                                if (!res.ok) throw new Error(data.error);
                                                alert(`✅ ${data.count} questions saved!`);
                                                setAiPreview(null);
                                                fetchQuestions();
                                            } catch(e) { alert('Save Error: ' + e.message); }
                                            finally { setAiSaving(false); }
                                        }}
                                        disabled={aiSaving}
                                        style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px', padding: '8px 18px', fontWeight: '700', cursor: aiSaving ? 'not-allowed' : 'pointer' }}
                                    >
                                        {aiSaving ? 'Saving...' : `💾 Save ${aiPreview?.length} Questions`}
                                    </button>
                                )}
                                {aiPreview && <button onClick={() => setAiPreview(null)} style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer' }}>Discard</button>}
                            </div>
                            {/* Preview list */}
                            {aiPreview && (
                                <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                                    {aiPreview.map((q, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px 14px', border: '1px solid rgba(255,255,255,0.07)', fontSize: '0.85rem' }}>
                                            <span style={{ color: '#818cf8', fontWeight: '700', marginRight: '8px' }}>Q{i+1}.</span>
                                            <span style={{ color: 'white' }}>{q.text}</span>
                                            <div style={{ marginTop: '6px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                {q.options?.map(o => (
                                                    <span key={o.id} style={{ fontSize: '0.8rem', color: o.id === q.correctOption ? '#34d399' : '#64748b', fontWeight: o.id === q.correctOption ? 700 : 400 }}>
                                                        ({o.id}) {o.text} {o.id === q.correctOption ? '✓' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {uploadMode === 'bulk' ? (
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Apply Subject to All Questions:</label>
                                    <select
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        className={styles.input}
                                        style={{ width: '200px', margin: 0 }}
                                    >
                                        <option>Physics</option>
                                        <option>Chemistry</option>
                                        <option>Botany</option>
                                        <option>Zoology</option>
                                        <option>Mathematics</option>
                                    </select>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '10px' }}>
                                    Paste a JSON array of questions or upload a <code>.json</code> file.
                                </p>
                                <input 
                                    type="file" 
                                    accept=".json" 
                                    onChange={handleFileUploadBulk} 
                                    style={{ fontSize: '0.9rem', color: '#cbd5e1' }}
                                />
                            </div>
                            
                            {bulkError && <div style={{ color: '#ef4444', marginBottom: '10px', fontSize: '0.9rem', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px' }}>{bulkError}</div>}
                            
                            <textarea
                                className={styles.textarea}
                                rows={15}
                                value={bulkJson}
                                onChange={e => { setBulkJson(e.target.value); setBulkError(''); }}
                                placeholder="[{ &quot;subject&quot;: &quot;Physics&quot;, &quot;text&quot;: &quot;...&quot;, &quot;correctOption&quot;: &quot;a&quot;, &quot;options&quot;: [{ &quot;id&quot;: &quot;a&quot;, &quot;text&quot;: &quot;...&quot; }] }]"
                                style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#0f172a' }}
                            />
                            
                            <div className={styles.actions} style={{ marginTop: '20px' }}>
                                <button className={styles.saveBtn} style={{ background: '#10b981' }} onClick={handleBulkUpload}>
                                    Upload Bulk Questions
                                </button>
                            </div>
                        </div>
                    ) : (
                    <div className={styles.formGrid}>
                        {/* Jump to Question # */}
                        <div className={styles.col2}>
                            <label>Question No.
                                <select
                                    value={editingQuestion?.id || ''}
                                    onChange={e => {
                                        const qId = Number(e.target.value);
                                        if (!qId) { resetForm(); return; }
                                        const found = questions.find(q => q.id === qId);
                                        if (found) handleEdit(found);
                                    }}
                                    className={styles.input}
                                >
                                    <option value="">— Add New Question —</option>
                                    {questions.map(q => (
                                        <option key={q.id} value={q.id}>
                                            #{q.id} [{q.subject}] {q.text?.slice(0, 50)}{q.text?.length > 50 ? '…' : ''}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>Subject
                                <select
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    className={styles.input}
                                >
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                    <option>Botany</option>
                                    <option>Zoology</option>
                                    <option>Mathematics</option>
                                </select>
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <label style={{ flex: 1 }}>Correct Option
                                <select
                                    value={formData.correctOption}
                                    onChange={e => setFormData({ ...formData, correctOption: e.target.value })}
                                    className={styles.input}
                                >
                                    <option value="a">Option A</option>
                                    <option value="b">Option B</option>
                                    <option value="c">Option C</option>
                                    <option value="d">Option D</option>
                                </select>
                            </label>
                            {editingQuestion && (
                                <button
                                    onClick={() => { if (confirm(`Delete Question #${editingQuestion.id}?`)) { handleDelete(editingQuestion.id); resetForm(); } }}
                                    style={{ marginLeft: '16px', marginTop: '20px', background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontWeight: '700', whiteSpace: 'nowrap' }}
                                >
                                    🗑 Delete Q#{editingQuestion.id}
                                </button>
                            )}
                        </div>

                        <label>Question Text (Supports LaTeX: $math$ or $$math$$)
                            <textarea
                                className={styles.textarea}
                                rows={3}
                                value={formData.text}
                                onChange={e => setFormData({ ...formData, text: e.target.value })}
                                placeholder="Enter question. Use $x^2$ for inline math."
                            />
                            <div style={{ marginTop: '10px' }}>
                                <small>Attach Image (Optional): </small>
                                <input type="file" onChange={(e) => handleFileUpload(e, 'image')} accept="image/*" />
                                {formData.image && <img src={formData.image} alt="Preview" style={{ maxHeight: '100px', display: 'block', marginTop: '5px' }} />}
                            </div>
                            {formData.text && <div className={styles.preview}><small>Preview:</small> <LatexRenderer text={formData.text} /></div>}
                        </label>

                        <div className={styles.col2}>
                            <div>
                                <input className={styles.input} placeholder="Option A" value={formData.optionA} onChange={e => setFormData({ ...formData, optionA: e.target.value })} />
                                <input type="file" onChange={(e) => handleFileUpload(e, 'optionAImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                {formData.optionAImage && <img src={formData.optionAImage} alt="Opt A" style={{ maxHeight: '50px', display: 'block' }} />}
                                {formData.optionA && <div className={styles.previewSmall}><LatexRenderer text={formData.optionA} /></div>}
                            </div>
                            <div>
                                <input className={styles.input} placeholder="Option B" value={formData.optionB} onChange={e => setFormData({ ...formData, optionB: e.target.value })} />
                                <input type="file" onChange={(e) => handleFileUpload(e, 'optionBImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                {formData.optionBImage && <img src={formData.optionBImage} alt="Opt B" style={{ maxHeight: '50px', display: 'block' }} />}
                                {formData.optionB && <div className={styles.previewSmall}><LatexRenderer text={formData.optionB} /></div>}
                            </div>
                            <div>
                                <input className={styles.input} placeholder="Option C" value={formData.optionC} onChange={e => setFormData({ ...formData, optionC: e.target.value })} />
                                <input type="file" onChange={(e) => handleFileUpload(e, 'optionCImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                {formData.optionCImage && <img src={formData.optionCImage} alt="Opt C" style={{ maxHeight: '50px', display: 'block' }} />}
                                {formData.optionC && <div className={styles.previewSmall}><LatexRenderer text={formData.optionC} /></div>}
                            </div>
                            <div>
                                <input className={styles.input} placeholder="Option D" value={formData.optionD} onChange={e => setFormData({ ...formData, optionD: e.target.value })} />
                                <input type="file" onChange={(e) => handleFileUpload(e, 'optionDImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                {formData.optionDImage && <img src={formData.optionDImage} alt="Opt D" style={{ maxHeight: '50px', display: 'block' }} />}
                                {formData.optionD && <div className={styles.previewSmall}><LatexRenderer text={formData.optionD} /></div>}
                            </div>
                        </div>

                        <label>Explanation
                            <textarea
                                className={styles.textarea}
                                rows={2}
                                value={formData.explanation}
                                onChange={e => setFormData({ ...formData, explanation: e.target.value })}
                                placeholder="Explain the solution..."
                            />
                            {formData.explanation && <div className={styles.preview}><small>Preview:</small> <LatexRenderer text={formData.explanation} /></div>}
                        </label>

                        <div className={styles.actions}>
                            <button className={styles.saveBtn} onClick={handleSave}>
                                {editingQuestion ? 'Update Question' : 'Add Question'}
                            </button>
                            {editingQuestion && <button className={styles.cancelBtn} onClick={resetForm}>Cancel</button>}
                        </div>
                    </div>
                    )}
                </div>

                <div className={styles.list}>
                    <h2 className={styles.subtitle}>Existing Questions ({questions.length})</h2>
                    {loading ? <p>Loading...</p> : (
                        questions.length === 0 ? <p className={styles.empty}>No custom questions added yet. (Mock data will be used mostly)</p> :
                            questions.map(q => (
                                <div key={q.id} className={styles.questionItem}>
                                    <div className={styles.qHeader}>
                                        <span className={styles.qId}>#{q.id}</span>
                                        <span className={styles.qSubject}>{q.subject}</span>
                                        <div className={styles.qActions}>
                                            <button onClick={() => handleEdit(q)} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(q.id)} className={styles.deleteBtn}>Delete</button>
                                        </div>
                                    </div>
                                    <div className={styles.qText}>
                                        <LatexRenderer text={q.text} />
                                        {q.image && <img src={q.image} alt="Q" style={{ maxHeight: '100px', display: 'block', marginTop: '10px' }} />}
                                    </div>
                                    <div className={styles.qOptions}>
                                        <span className={q.correctOption === 'a' ? styles.correct : ''}>
                                            A: <LatexRenderer text={q.options[0].text} />
                                            {q.options[0].image && <img src={q.options[0].image} alt="Opt A" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'b' ? styles.correct : ''}>
                                            B: <LatexRenderer text={q.options[1].text} />
                                            {q.options[1].image && <img src={q.options[1].image} alt="Opt B" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'c' ? styles.correct : ''}>
                                            C: <LatexRenderer text={q.options[2].text} />
                                            {q.options[2].image && <img src={q.options[2].image} alt="Opt C" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'd' ? styles.correct : ''}>
                                            D: <LatexRenderer text={q.options[3].text} />
                                            {q.options[3].image && <img src={q.options[3].image} alt="Opt D" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
                  </>
                )}

            </div>
        </div>
    );
}
