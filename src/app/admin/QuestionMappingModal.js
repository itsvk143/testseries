'use client';
import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });

export const normalizeDifficulty = (diff) => {
    if (!diff) return 'MODERATE';
    const s = String(diff).trim().toUpperCase();
    if (s.includes('EASY')) return 'EASY';
    if (s.includes('HARD') || s.includes('DIFF')) return 'DIFFICULT';
    return 'MODERATE';
};

export default function QuestionMappingModal({
    question,
    allTests = [],
    loadingTests = false,
    onClose,
    onLink,
    onUnlink,
    onUpdateDifficulty
}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedExam, setSelectedExam] = useState('ALL');
    const [actionLoading, setActionLoading] = useState(false);
    const [actionMessage, setActionMessage] = useState('');

    if (!question) return null;

    const assignedTestIds = useMemo(() => {
        return new Set((question.assignedTests || []).map(t => t.testId));
    }, [question.assignedTests]);

    const filteredTests = useMemo(() => {
        let list = allTests || [];
        if (selectedExam !== 'ALL') {
            const ex = selectedExam.toLowerCase();
            list = list.filter(t => (t.exam || '').toLowerCase().includes(ex) || (t.testId || '').toLowerCase().startsWith(ex));
        }
        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            list = list.filter(t =>
                (t.title || '').toLowerCase().includes(q) ||
                (t.testId || '').toLowerCase().includes(q) ||
                (t.subject || '').toLowerCase().includes(q)
            );
        }
        return list;
    }, [allTests, selectedExam, searchQuery]);

    const handleAssign = async (test) => {
        setActionLoading(true);
        setActionMessage(`Mapping to "${test.title}"...`);
        try {
            await onLink(test);
            setActionMessage(`✓ Successfully mapped to "${test.title}"`);
            setTimeout(() => setActionMessage(''), 2500);
        } catch (err) {
            setActionMessage(`Failed: ${err.message}`);
        } finally {
            setActionLoading(false);
        }
    };

    const handleRemove = async (testId, testTitle) => {
        setActionLoading(true);
        setActionMessage(`Unlinking from "${testTitle}"...`);
        try {
            await onUnlink(testId, testTitle);
            setActionMessage(`✓ Unlinked from "${testTitle}"`);
            setTimeout(() => setActionMessage(''), 2500);
        } catch (err) {
            setActionMessage(`Failed: ${err.message}`);
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                background: 'linear-gradient(165deg, #181b34 0%, #0f1225 100%)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '750px',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.15)',
                overflow: 'hidden'
            }}>
                {/* Modal Header */}
                <div style={{
                    padding: '18px 24px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.02)'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '1.25rem' }}>🗺️</span>
                            <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#f8fafc', fontWeight: 'bold' }}>
                                Manage Test Mappings
                            </h3>
                            <span style={{
                                fontSize: '0.7rem',
                                background: 'rgba(99, 102, 241, 0.2)',
                                color: '#a5b4fc',
                                border: '1px solid rgba(99, 102, 241, 0.4)',
                                padding: '2px 8px',
                                borderRadius: '6px'
                            }}>
                                ID: {question._id}
                            </span>
                        </div>
                        <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#94a3b8' }}>
                            Assign this Central Question Bank question to specific test papers or remove existing links.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            color: '#cbd5e1',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* Question Preview Box */}
                <div style={{
                    padding: '14px 24px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                                {question.subject || 'General'}
                            </span>
                            {question.chapter && (
                                <span style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: '500' }}>
                                    {question.chapter}
                                </span>
                            )}
                            {question.subTopic && (
                                <span style={{ fontSize: '0.72rem', background: 'rgba(20,184,166,0.15)', color: '#2dd4bf', padding: '2px 8px', borderRadius: '4px', fontWeight: '500' }}>
                                    🏷️ {question.subTopic}
                                </span>
                            )}
                            <span style={{ fontSize: '0.72rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                                {question.type || 'MCQ'}
                            </span>
                            <span style={{
                                fontSize: '0.72rem',
                                fontWeight: 'bold',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: normalizeDifficulty(question.difficulty) === 'EASY' ? 'rgba(16,185,129,0.2)' : normalizeDifficulty(question.difficulty) === 'DIFFICULT' ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)',
                                color: normalizeDifficulty(question.difficulty) === 'EASY' ? '#34d399' : normalizeDifficulty(question.difficulty) === 'DIFFICULT' ? '#f87171' : '#fbbf24',
                                border: `1px solid ${normalizeDifficulty(question.difficulty) === 'EASY' ? '#10b981' : normalizeDifficulty(question.difficulty) === 'DIFFICULT' ? '#ef4444' : '#f59e0b'}55`
                            }}>
                                {normalizeDifficulty(question.difficulty) === 'EASY' ? '🟢 EASY' : normalizeDifficulty(question.difficulty) === 'DIFFICULT' ? '🔴 DIFFICULT' : '🟡 MODERATE'}
                            </span>
                        </div>

                        {onUpdateDifficulty && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Set Level:</span>
                                <select
                                    value={normalizeDifficulty(question.difficulty)}
                                    onChange={(e) => onUpdateDifficulty(question._id, e.target.value)}
                                    style={{
                                        background: 'rgba(15, 23, 42, 0.9)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: '#f8fafc',
                                        fontSize: '0.72rem',
                                        padding: '2px 6px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="EASY">🟢 EASY</option>
                                    <option value="MODERATE">🟡 MODERATE</option>
                                    <option value="DIFFICULT">🔴 DIFFICULT</option>
                                </select>
                            </div>
                        )}
                    </div>
                    <div style={{
                        fontSize: '0.84rem',
                        color: '#e2e8f0',
                        maxHeight: '60px',
                        overflowY: 'auto',
                        lineHeight: '1.4'
                    }}>
                        <LatexRenderer text={question.text?.slice(0, 240) + (question.text?.length > 240 ? '...' : '')} />
                    </div>
                </div>

                {/* Status Message / Notification */}
                {actionMessage && (
                    <div style={{
                        padding: '8px 24px',
                        background: actionMessage.includes('Failed') ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                        color: actionMessage.includes('Failed') ? '#fca5a5' : '#6ee7b7',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span>{actionMessage.includes('Failed') ? '⚠️' : '✓'}</span>
                        <span>{actionMessage}</span>
                    </div>
                )}

                {/* Modal Body */}
                <div style={{ padding: '18px 24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {/* Currently Assigned Tests Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Currently Tagged in ({question.assignedTests?.length || 0} Tests):
                            </span>
                        </div>
                        {(!question.assignedTests || question.assignedTests.length === 0) ? (
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px dashed rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#64748b',
                                fontSize: '0.82rem',
                                textAlign: 'center'
                            }}>
                                ⚪ This question is currently not assigned to any test paper. Select a test below to map it.
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(15, 23, 42, 0.5)' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ background: 'rgba(30, 41, 59, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <th style={{ padding: '8px 12px', color: '#94a3b8', fontWeight: 600 }}>Test</th>
                                            <th style={{ padding: '8px 10px', color: '#94a3b8', fontWeight: 600 }}>Exam</th>
                                            <th style={{ padding: '8px 10px', color: '#94a3b8', fontWeight: 600 }}>Type</th>
                                            <th style={{ padding: '8px 10px', color: '#94a3b8', fontWeight: 600 }}>Question Level</th>
                                            <th style={{ padding: '8px 10px', color: '#94a3b8', fontWeight: 600, textAlign: 'right' }}>Position</th>
                                            <th style={{ padding: '8px 10px', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {question.assignedTests.map((t, i) => {
                                            const examColor = t.exam?.includes('NEET') ? '#10b981' : t.exam?.includes('JEE') ? '#3b82f6' : '#8b5cf6';
                                            const qLevel = normalizeDifficulty(question.difficulty);
                                            const levelColor = qLevel === 'EASY' ? '#34d399' : qLevel === 'DIFFICULT' ? '#f87171' : '#fbbf24';
                                            const levelBg = qLevel === 'EASY' ? 'rgba(16,185,129,0.18)' : qLevel === 'DIFFICULT' ? 'rgba(239,68,68,0.18)' : 'rgba(245,158,11,0.18)';
                                            const testType = t.type || (
                                                t.testId?.includes('PART') ? 'Part Test' :
                                                (t.testId?.includes('FULL') || t.testId?.includes('MOCK')) ? 'Full Test' :
                                                t.testId?.includes('CHAPTER') ? 'Chapter' :
                                                t.testId?.includes('SUBTOPIC') ? 'Subtopic' : 'Test'
                                            );

                                            return (
                                                <tr key={t.testId || i} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.03)' }}>
                                                    <td style={{ padding: '8px 12px', color: '#f1f5f9', fontWeight: 500 }}>
                                                        {t.title || t.testId}
                                                    </td>
                                                    <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                                                        <span style={{
                                                            fontSize: '0.66rem',
                                                            fontWeight: 'bold',
                                                            color: examColor,
                                                            background: `${examColor}20`,
                                                            padding: '2px 6px',
                                                            borderRadius: '4px'
                                                        }}>
                                                            {t.exam || 'TEST'}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: '8px 10px', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                                                        {testType}
                                                    </td>
                                                    <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                                                        <span style={{
                                                            fontSize: '0.68rem',
                                                            fontWeight: 'bold',
                                                            padding: '2px 6px',
                                                            borderRadius: '4px',
                                                            background: levelBg,
                                                            color: levelColor,
                                                            border: `1px solid ${levelColor}44`
                                                        }}>
                                                            {qLevel}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: '8px 10px', textAlign: 'right', fontWeight: 'bold', color: '#38bdf8', whiteSpace: 'nowrap' }}>
                                                        {t.position ? `Q${t.position}` : '—'}
                                                    </td>
                                                    <td style={{ padding: '8px 10px', textAlign: 'center' }}>
                                                        <button
                                                            disabled={actionLoading}
                                                            onClick={() => handleRemove(t.testId, t.title)}
                                                            title="Unlink from this test"
                                                            style={{
                                                                background: 'rgba(239, 68, 68, 0.15)',
                                                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                                                color: '#f87171',
                                                                borderRadius: '4px',
                                                                padding: '3px 8px',
                                                                fontSize: '0.7rem',
                                                                cursor: actionLoading ? 'not-allowed' : 'pointer'
                                                            }}
                                                        >
                                                            ✕ Unlink
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Available Tests Search & Assign Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                🔍 Search &amp; Assign to Test:
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                {filteredTests.length} tests found
                            </span>
                        </div>

                        {/* Search & Exam Filter Row */}
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
                                <input
                                    type="text"
                                    placeholder="Search test by name, subject, or ID..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        boxSizing: 'border-box',
                                        padding: '8px 12px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        borderRadius: '8px',
                                        color: 'white',
                                        fontSize: '0.85rem'
                                    }}
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        style={{
                                            position: 'absolute',
                                            right: '8px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#94a3b8',
                                            cursor: 'pointer'
                                        }}
                                    >✕</button>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '4px' }}>
                                {['ALL', 'NEET', 'JEE', 'BITSAT'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedExam(cat)}
                                        style={{
                                            padding: '6px 12px',
                                            borderRadius: '8px',
                                            border: `1px solid ${selectedExam === cat ? '#6366f1' : 'rgba(255, 255, 255, 0.08)'}`,
                                            background: selectedExam === cat ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.02)',
                                            color: selectedExam === cat ? '#a5b4fc' : '#94a3b8',
                                            fontSize: '0.75rem',
                                            fontWeight: selectedExam === cat ? 'bold' : 'normal',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tests List Scrollbox */}
                        <div style={{
                            maxHeight: '260px',
                            overflowY: 'auto',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '10px',
                            background: 'rgba(15, 23, 42, 0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            divideY: '1px solid rgba(255, 255, 255, 0.04)'
                        }}>
                            {loadingTests ? (
                                <div style={{ padding: '30px', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
                                    Loading test database...
                                </div>
                            ) : filteredTests.length === 0 ? (
                                <div style={{ padding: '30px', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                                    No tests match the query.
                                </div>
                            ) : (
                                filteredTests.slice(0, 100).map(test => {
                                    const isAssigned = assignedTestIds.has(test.testId);
                                    const examColor = test.exam?.includes('NEET') ? '#10b981' : test.exam?.includes('JEE') ? '#3b82f6' : '#8b5cf6';
                                    return (
                                        <div
                                            key={test.testId}
                                            style={{
                                                padding: '10px 14px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '12px',
                                                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                                                background: isAssigned ? 'rgba(16, 185, 129, 0.04)' : 'transparent',
                                                transition: 'background 0.15s'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                                                <span style={{
                                                    fontSize: '0.65rem',
                                                    fontWeight: 'bold',
                                                    color: examColor,
                                                    background: `${examColor}18`,
                                                    border: `1px solid ${examColor}33`,
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    flexShrink: 0
                                                }}>
                                                    {test.exam || 'TEST'}
                                                </span>
                                                <div style={{ minWidth: 0 }}>
                                                    <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        {test.title}
                                                    </div>
                                                    <div style={{ fontSize: '0.68rem', color: '#64748b', display: 'flex', gap: '8px', marginTop: '1px' }}>
                                                        <span>ID: {test.testId}</span>
                                                        {test.subject && <span>• {test.subject}</span>}
                                                        {typeof test.questionsCount === 'number' && (
                                                            <span>• {test.questionsCount} Qs</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {isAssigned ? (
                                                <span style={{
                                                    fontSize: '0.72rem',
                                                    color: '#34d399',
                                                    background: 'rgba(16, 185, 129, 0.15)',
                                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                                    padding: '3px 8px',
                                                    borderRadius: '6px',
                                                    fontWeight: '600',
                                                    flexShrink: 0
                                                }}>
                                                    ✓ Already Tagged
                                                </span>
                                            ) : (
                                                <button
                                                    disabled={actionLoading}
                                                    onClick={() => handleAssign(test)}
                                                    style={{
                                                        background: 'linear-gradient(135deg, #4f46e5, #4338ca)',
                                                        border: '1px solid #6366f1',
                                                        color: 'white',
                                                        borderRadius: '6px',
                                                        padding: '4px 10px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        cursor: actionLoading ? 'not-allowed' : 'pointer',
                                                        flexShrink: 0,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px'
                                                    }}
                                                >
                                                    <span>➕</span> Assign
                                                </button>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div style={{
                    padding: '14px 24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    background: 'rgba(255, 255, 255, 0.02)'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: 'white',
                            padding: '6px 18px',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
