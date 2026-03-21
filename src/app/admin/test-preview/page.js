'use client';
import { useState, useEffect, use } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { getTestById, getQuestionsForTest } from '@/data/testService';

export default function AdminTestPreviewPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = searchParams.get('testId');
    const exam = searchParams.get('exam');

    const [test, setTest] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [activeSubject, setActiveSubject] = useState('All');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        }
        if (status === 'authenticated' && !session?.user?.isAdmin) {
            router.push('/dashboard');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (testId) {
            const foundTest = getTestById(testId);
            setTest(foundTest);
            const q = getQuestionsForTest(testId);
            setQuestions(q);
            if (q.length > 0) setActiveSubject('All');
        }
    }, [testId]);

    if (status === 'loading') return null;
    if (!session?.user?.isAdmin) return null;

    const subjects = ['All', ...new Set(questions.map(q => q.subject))];
    const filteredQ = activeSubject === 'All' ? questions : questions.filter(q => q.subject === activeSubject);

    const testIdUpper = (testId || '').toUpperCase();
    let testType = '';
    if (testIdUpper.includes('-LIVE-')) testType = '🔴 Live Test';
    else if (testIdUpper.includes('-PYQ-')) testType = '📚 PYQ Test';
    else if (testIdUpper.includes('-CHAPTER-')) testType = '📖 Chapter Test';
    else if (testIdUpper.includes('-SUBJECT-')) testType = '🔬 Subject Test';
    else if (testIdUpper.includes('-MOCK-')) testType = '📝 Mock Test';
    else testType = '📋 Test';

    return (
        <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white' }}>
            <Navbar />
            <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>

                {/* Header */}
                <button
                    onClick={() => router.push(`/test-series/${exam || 'neet'}`)}
                    style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#94a3b8', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' }}
                >
                    ← Back to {(exam || 'neet').toUpperCase()} Tests
                </button>

                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <span style={{ background: 'rgba(139,92,246,0.2)', color: '#c4b5fd', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', display: 'inline-block', marginBottom: '8px' }}>
                                {testType}
                            </span>
                            <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '800' }}>{testId}</h1>
                            <p style={{ margin: '8px 0 0', color: '#94a3b8' }}>
                                {questions.length} questions • {subjects.filter(s => s !== 'All').length} subjects
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                            <span style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>
                                👁 Admin Preview Mode
                            </span>
                            <span style={{ color: '#64748b', fontSize: '0.8rem' }}>You are not taking this test</span>
                        </div>
                    </div>

                    {/* Subject tabs */}
                    {subjects.length > 1 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                            {subjects.map(s => (
                                <button
                                    key={s}
                                    onClick={() => setActiveSubject(s)}
                                    style={{
                                        padding: '6px 16px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600',
                                        background: activeSubject === s ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.05)',
                                        color: activeSubject === s ? '#c4b5fd' : '#94a3b8',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {s} {s !== 'All' && `(${questions.filter(q => q.subject === s).length})`}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Question List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {filteredQ.map((q, idx) => (
                        <div
                            key={q.id}
                            style={{
                                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.2s',
                            }}
                        >
                            {/* Question Header */}
                            <div
                                onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                                style={{ padding: '16px 20px', cursor: 'pointer', display: 'flex', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between' }}
                            >
                                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', flex: 1 }}>
                                    <span style={{ background: 'rgba(139,92,246,0.2)', color: '#c4b5fd', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '800', flexShrink: 0 }}>
                                        {idx + 1}
                                    </span>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', marginBottom: '6px', display: 'inline-block' }}>
                                            {q.subject}
                                        </span>
                                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#e2e8f0' }}>
                                            {q.text}
                                        </p>
                                    </div>
                                </div>
                                <span style={{ color: '#64748b', fontSize: '1.2rem', flexShrink: 0 }}>
                                    {expandedQuestion === q.id ? '▲' : '▼'}
                                </span>
                            </div>

                            {/* Expanded details */}
                            {expandedQuestion === q.id && (
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 20px', paddingLeft: '78px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                                        {q.options?.map(opt => (
                                            <div
                                                key={opt.id}
                                                style={{
                                                    padding: '10px 14px', borderRadius: '10px',
                                                    background: opt.id === q.correctOption ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
                                                    border: `1px solid ${opt.id === q.correctOption ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.08)'}`,
                                                    color: opt.id === q.correctOption ? '#10b981' : '#cbd5e1',
                                                    fontSize: '0.9rem',
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                }}
                                            >
                                                <span style={{ fontWeight: '800', opacity: 0.6, textTransform: 'uppercase' }}>{opt.id}.</span>
                                                {opt.text}
                                                {opt.id === q.correctOption && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: 'rgba(16,185,129,0.3)', padding: '2px 8px', borderRadius: '10px' }}>✓ Correct</span>}
                                            </div>
                                        ))}
                                    </div>
                                    {q.explanation && (
                                        <div style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '10px', padding: '12px 16px' }}>
                                            <span style={{ color: '#a78bfa', fontWeight: '700', fontSize: '0.85rem' }}>💡 Explanation: </span>
                                            <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{q.explanation}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredQ.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                        <p>No questions found for this test.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
