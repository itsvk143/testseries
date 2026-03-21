import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function TestManager({ selectedExam, availableTests }) {
    const [customTests, setCustomTests] = useState({});
    const [editingTest, setEditingTest] = useState(null);
    const [loading, setLoading] = useState(false);

    const [testForm, setTestForm] = useState({
        id: '',
        title: '',
        type: 'MOCK',
        subject: '',
        description: '',
        liveStart: '',
        liveEnd: '',
    });

    useEffect(() => {
        fetchCustomTests();
    }, []);

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
        // Prepare payload
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

    // Merge static tests with custom tests for display
    const mergedTests = availableTests.map(staticTest => {
        return customTests[staticTest.id] ? { ...staticTest, ...customTests[staticTest.id], isEdited: true } : staticTest;
    });

    // Add any fully custom tests that aren't in the static list
    const purelyCustomTests = Object.values(customTests).filter(ct => ct.category === selectedExam && !availableTests.find(st => st.id === ct.id));
    const finalTestsList = [...mergedTests, ...purelyCustomTests];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 className={styles.subtitle}>{editingTest ? (editingTest.isNew ? 'Create New Test' : `Edit Test: ${editingTest.id}`) : `Manage ${selectedExam.toUpperCase()} Tests`}</h2>
                 {!editingTest && (
                     <button className={styles.saveBtn} onClick={handleCreateNew} style={{ maxWidth: '200px' }}>
                         + Create New Test
                     </button>
                 )}
            </div>

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
                                    <option value="MOCK">Mock Test</option>
                                    <option value="LIVE">Live Test</option>
                                    <option value="PART">Part Test</option>
                                    <option value="SUBJECT">Subject Test</option>
                                    <option value="CHAPTER">Chapter Test</option>
                                </select>
                            </label>
                        </div>

                        {(testForm.type === 'SUBJECT' || testForm.type === 'CHAPTER') && (
                             <label>Subject
                                 <input className={styles.input} value={testForm.subject} onChange={e => setTestForm({...testForm, subject: e.target.value})} placeholder="e.g. Physics" />
                             </label>
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
                                   <td style={{ padding: '10px' }}>
                                       <button onClick={() => handleEdit(test)} className={styles.editBtn}>Edit</button>
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
