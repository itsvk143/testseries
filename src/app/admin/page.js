'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import { neetTests } from '../../data/exams/neet';
import { jeeMainsTests } from '../../data/exams/jeeMains';
import { jeeAdvanceTests } from '../../data/exams/jeeAdvanced';
import LatexRenderer from '../../components/LatexRenderer';
import TestManager from './TestManager'; 
import { normalizeQuestion } from '../../lib/questionFormatter';

export default function AdminPanel() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('questions'); // 'questions' | 'tests'
    const [selectedExam, setSelectedExam] = useState('neet');
    const [selectedTestId, setSelectedTestId] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState(null); // null = add mode
    const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'bulk'
    const [bulkJson, setBulkJson] = useState('');
    const [bulkError, setBulkError] = useState('');

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

    // Admin authentication check
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        } else if (status === 'authenticated' && !session?.user?.isAdmin) {
            router.push('/dashboard');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (availableTests.length > 0 && !selectedTestId) {
            setSelectedTestId(availableTests[0].id);
        }
    }, [selectedExam, availableTests, selectedTestId]);

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
                    return normalizeQuestion(q);
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
                        onChange={(e) => { setSelectedExam(e.target.value); setSelectedTestId(''); }}
                        className={styles.select}
                    >
                        <option value="neet">NEET</option>
                        <option value="jee-mains">JEE Mains</option>
                        <option value="jee-advance">JEE Advance</option>
                    </select>

                    {activeTab === 'questions' && (
                        <select
                            value={selectedTestId}
                            onChange={(e) => setSelectedTestId(e.target.value)}
                            className={styles.select}
                        >
                            {availableTests.map(t => (
                                <option key={t.id} value={t.id}>{t.title}</option>
                            ))}
                        </select>
                    )}
                </div>

                {activeTab === 'tests' ? (
                    <TestManager selectedExam={selectedExam} availableTests={availableTests} />
                ) : (
                  <>
                <div className={styles.editor}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 className={styles.subtitle}>{editingQuestion ? `Edit Question #${editingQuestion.id}` : 'Add New Question(s)'}</h2>
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

                    {uploadMode === 'bulk' ? (
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ marginBottom: '15px' }}>
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
                        <div className={styles.col2}>
                            <label>Subject
                                <select
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    className={styles.input}
                                >
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                    <option>Biology</option>
                                    <option>Mathematics</option>
                                </select>
                            </label>
                            <label>Correct Option
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
