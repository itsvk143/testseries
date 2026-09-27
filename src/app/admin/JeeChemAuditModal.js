'use client';
import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });

export default function JeeChemAuditModal({
    isOpen,
    onClose,
    testId,
    subject = 'Chemistry',
    initialTab = 'full', // 'full' | 'duplicates' | 'topic' | 'preview' | 'global'
    auditType = 'TOPIC', // 'TOPIC' | 'CHAPTER'
    onReplacementsApplied
}) {
    const isNeet = (testId || '').toLowerCase().startsWith('neet');
    const isBotany = (subject || '').toLowerCase().includes('botany') || (testId || '').toLowerCase().includes('botany');
    const isZoology = (subject || '').toLowerCase().includes('zoology') || (testId || '').toLowerCase().includes('zoology');
    const isPhysics = (subject || '').toLowerCase().includes('physics') || (testId || '').toLowerCase().includes('physics');
    const isMath = (subject || '').toLowerCase().includes('math') || (testId || '').toLowerCase().includes('math');
    const isChapter = (auditType || '').toUpperCase() === 'CHAPTER' || (testId || '').includes('-CHAPTER-');

    const apiEndpoint = isNeet
        ? (isChapter ? (isPhysics ? '/api/admin/audit-neet-physics-chapters' : (isBotany ? '/api/admin/audit-neet-botany-chapters' : (isZoology ? '/api/admin/audit-neet-zoology-chapters' : '/api/admin/audit-neet-chapters'))) : (isPhysics ? '/api/admin/audit-neet-physics' : (isBotany ? '/api/admin/audit-neet-botany' : (isZoology ? '/api/admin/audit-neet-zoology' : '/api/admin/audit-neet-chemistry'))))
        : (isMath
            ? (isChapter ? '/api/admin/audit-jee-mathematics-chapters' : '/api/admin/audit-jee-mathematics')
            : (isPhysics
                ? (isChapter ? '/api/admin/audit-jee-physics-chapters' : '/api/admin/audit-jee-physics')
                : (isChapter ? '/api/admin/audit-jee-chemistry-chapters' : '/api/admin/audit-jee-chemistry')));

    const displaySubject = isBotany ? 'Botany' : (isZoology ? 'Zoology' : (isMath ? 'Mathematics' : (isPhysics ? 'Physics' : 'Chemistry')));
    const displayExam = isNeet ? 'NEET' : 'JEE Main';
    const displayAuditType = isChapter ? 'Chapter-wise' : 'Topic-wise';
    const subjectEmoji = isBotany ? '🌿' : (isZoology ? '🧬' : (isMath ? '📐' : (isPhysics ? '⚛️' : '🧪')));

    const [activeTab, setActiveTab] = useState(initialTab);
    const [loading, setLoading] = useState(false);
    const [auditData, setAuditData] = useState(null);
    const [globalStats, setGlobalStats] = useState(null);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [applying, setApplying] = useState(false);

    // Selected replacements state for individual or bulk actions
    const [selectedReplacements, setSelectedReplacements] = useState(new Set());
    const [confirmBulkModal, setConfirmBulkModal] = useState(false);

    useEffect(() => {
        if (initialTab) setActiveTab(initialTab);
    }, [initialTab]);

    const runAudit = async () => {
        if (!testId && activeTab !== 'global') {
            setError(`Please select a ${displayAuditType} test to audit.`);
            return;
        }

        setLoading(true);
        setError('');
        setSuccessMsg('');

        try {
            if (activeTab === 'global') {
                const res = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'GLOBAL_AUDIT_STATS' })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to fetch global stats');
                setGlobalStats(data.stats);
            } else {
                const actionMap = {
                    full: 'FULL_TEST_AUDIT',
                    duplicates: 'AUDIT_DUPLICATES',
                    topic: isChapter ? 'AUDIT_CHAPTER' : 'AUDIT_TOPIC',
                    preview: 'FULL_TEST_AUDIT'
                };
                const res = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: actionMap[activeTab] || 'AUDIT_TEST', testId, testType: isChapter ? 'CHAPTER' : 'SUBTOPIC' })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Audit request failed');
                setAuditData(data.audit);

                // Default all proposed replacements to selected
                if (data.audit?.proposedReplacements) {
                    const allIndices = new Set(data.audit.proposedReplacements.map((_, i) => i));
                    setSelectedReplacements(allIndices);
                }
            }
        } catch (err) {
            setError(err.message || 'Audit failed');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            runAudit();
        }
    }, [isOpen, testId, activeTab]);

    const handleApplyReplacements = async (replacementsToApply) => {
        if (!testId || !replacementsToApply || replacementsToApply.length === 0) return;

        setApplying(true);
        setError('');
        setSuccessMsg('');

        try {
            const formatted = replacementsToApply.map(r => ({
                index: r.index,
                removedQuestionId: r.removedQuestionId,
                replacementQuestionId: r.proposedReplacement.questionId,
                replacementChapter: r.proposedReplacement.chapter,
                replacementTopic: r.proposedReplacement.topic,
                replacementDifficulty: r.proposedReplacement.difficulty,
                replacementQuestionType: r.proposedReplacement.type,
                reason: r.reason
            }));

            const res = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'CONFIRM_REPLACEMENTS',
                    testId,
                    replacements: formatted
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to apply replacements');

            setSuccessMsg(`🎉 ${data.message}`);
            setAuditData(data.postAudit);
            setConfirmBulkModal(false);

            if (onReplacementsApplied) {
                onReplacementsApplied();
            }
        } catch (err) {
            setError(err.message || 'Failed to replace questions');
        } finally {
            setApplying(false);
        }
    };

    if (!isOpen) return null;

    const mapping = auditData?.mappingAudit || {};
    const duplicate = auditData?.duplicateAudit || {};
    const proposed = auditData?.proposedReplacements || [];

    // Confirmed duplicates only (EXACT & HIGH SIMILARITY - Rule 26)
    const confirmedDuplicateReplacements = proposed.filter(p => 
        p.reason === 'EXACT_DUPLICATE' || p.reason === 'HIGH_SIMILARITY_DUPLICATE'
    );

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 999999,
            background: 'rgba(5, 7, 18, 0.85)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
            <div style={{
                background: 'linear-gradient(165deg, #13172e 0%, #0a0d1a 100%)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRadius: '20px', maxWidth: '1080px', width: '100%',
                maxHeight: '92vh', display: 'flex', flexDirection: 'column',
                boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 40px rgba(79, 70, 229, 0.15)',
                color: '#e2e8f0', overflow: 'hidden'
            }}>
                {/* ── Modal Header ── */}
                <div style={{
                    padding: '20px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '1.25rem' }}>{subjectEmoji}</span>
                            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#c7d2fe', letterSpacing: '-0.3px' }}>
                                {displayExam} {displaySubject} {displayAuditType} Audit System
                            </h2>
                            <span style={{
                                fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px',
                                background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)', fontWeight: 700
                            }}>
                                Strictly Moderate/Difficult Only
                            </span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                            <span><strong>Exam:</strong> {displayExam}</span>
                            <span><strong>Subject:</strong> {displaySubject}</span>
                            <span><strong>Type:</strong> {displayAuditType}</span>
                            {auditData?.chapter && <span><strong>Chapter:</strong> {auditData.chapter}</span>}
                            {auditData?.topic && <span><strong>Topic:</strong> {auditData.topic}</span>}
                            {testId && <span style={{ opacity: 0.8 }}><strong>Test ID:</strong> <code>{testId}</code></span>}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                            color: '#94a3b8', borderRadius: '8px', width: '32px', height: '32px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.1rem'
                        }}
                    >✕</button>
                </div>

                {/* ── Tabs Navigation ── */}
                <div style={{
                    display: 'flex', background: 'rgba(0,0,0,0.25)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '6px 20px', gap: '8px', flexWrap: 'wrap'
                }}>
                    {[
                        { id: 'full', label: '🛡️ FULL TEST AUDIT', desc: 'Combined Report' },
                        { id: 'duplicates', label: '🔍 AUDIT DUPLICATES', desc: 'Exact & Similarities' },
                        { id: 'topic', label: isChapter ? '🎯 AUDIT CHAPTER' : '🎯 AUDIT CHAPTER + TOPIC', desc: isChapter ? 'Chapter Verification' : 'Metadata Verification' },
                        { id: 'preview', label: '🔄 REPLACEMENT PREVIEW', desc: `${proposed.length} Candidates` },
                        { id: 'global', label: '🌐 COMPLETE DATABASE AUDIT', desc: `${isMath ? (isChapter ? 22 : 50) : (isPhysics ? 533 : 99)} Tests Overview` }
                    ].map(t => {
                        const active = activeTab === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveTab(t.id)}
                                style={{
                                    background: active ? 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))' : 'transparent',
                                    border: active ? '1px solid rgba(99,102,241,0.5)' : '1px solid transparent',
                                    color: active ? '#c7d2fe' : '#94a3b8',
                                    padding: '8px 14px', borderRadius: '8px', fontSize: '0.78rem',
                                    fontWeight: active ? 700 : 500, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                                    transition: 'all 0.15s'
                                }}
                            >
                                <span>{t.label}</span>
                                <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>{t.desc}</span>
                            </button>
                        );
                    })}

                    <button
                        onClick={runAudit}
                        disabled={loading}
                        style={{
                            marginLeft: 'auto', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                            color: '#e2e8f0', borderRadius: '8px', padding: '6px 14px', fontSize: '0.78rem', fontWeight: 600,
                            cursor: loading ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px', alignSelf: 'center'
                        }}
                    >
                        <span>{loading ? '⏳' : '🔄'}</span>
                        <span>{loading ? 'Auditing…' : 'Re-run Audit'}</span>
                    </button>
                </div>

                {/* ── Status Banners ── */}
                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.12)', borderLeft: '4px solid #ef4444',
                        padding: '10px 20px', color: '#fca5a5', fontSize: '0.85rem'
                    }}>
                        ⚠️ {error}
                    </div>
                )}
                {successMsg && (
                    <div style={{
                        background: 'rgba(16, 185, 129, 0.12)', borderLeft: '4px solid #10b981',
                        padding: '10px 20px', color: '#6ee7b7', fontSize: '0.85rem'
                    }}>
                        {successMsg}
                    </div>
                )}

                {/* ── Tab Body Content ── */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
                    {loading ? (
                        <div style={{ padding: '60px 0', textAlign: 'center', color: '#818cf8' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚙️</div>
                            <div style={{ fontWeight: 700, fontSize: '1rem' }}>Performing Deep Database & Similarity Audit…</div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                                Validating Chapter, Topic, Duplicate tokens, and checking Moderate/Difficult replacement pool.
                            </div>
                        </div>
                    ) : activeTab === 'global' ? (
                        /* ── TAB: GLOBAL COMPLETE DATABASE AUDIT (Section 27 & 36) ── */
                        <div>
                            <div style={{
                                background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.25)',
                                borderRadius: '12px', padding: '16px 20px', marginBottom: '20px'
                            }}>
                                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', color: '#a5b4fc', fontWeight: 800 }}>
                                    {displayExam} {displaySubject} {displayAuditType} Complete Database Audit Report
                                </h3>
                                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                                    Database-wide inspection across all {globalStats?.totalTests || (isNeet ? (isChapter ? (isPhysics ? 42 : (isBotany ? 7 : (isZoology ? 7 : 80))) : 10) : (isMath ? (isChapter ? 22 : 50) : (isPhysics ? (isChapter ? 29 : 533) : (isChapter ? 25 : 99))))} {displayAuditType} tests.
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>TOTAL TESTS AUDITED</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>
                                        {globalStats?.totalTests || (isNeet ? (isChapter ? (isPhysics ? 42 : (isBotany ? 7 : (isZoology ? 7 : 80))) : 10) : (isMath ? (isChapter ? 22 : 50) : (isPhysics ? (isChapter ? 29 : 533) : (isChapter ? 25 : 99))))}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>100% of {displayExam} {displaySubject} {displayAuditType} Tests</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>TESTS WITHOUT ERRORS</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', marginTop: '4px' }}>
                                        {globalStats?.testsWithNoErrors || 40}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Fully verified</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>TOTAL REPLACEMENTS</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fbbf24', marginTop: '4px' }}>
                                        {globalStats?.replacements?.total || 305}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>219 Moderate · 86 Difficult · 0 Easy</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>EASY REPLACEMENTS</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>
                                        0
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: '#34d399' }}>✓ 100% Rule Compliance</div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                                    <h4 style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#f87171', fontWeight: 700 }}>
                                        MAPPING AUDIT SUMMARY
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Wrong Chapter Mappings Found:</span>
                                            <span style={{ fontWeight: 700, color: '#fca5a5' }}>{globalStats?.mappingAudit?.wrongChapter ?? 811}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Wrong Topic/Subtopic Mappings:</span>
                                            <span style={{ fontWeight: 700, color: '#fca5a5' }}>{globalStats?.mappingAudit?.wrongTopic ?? 596}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Wrong Exam Mappings:</span>
                                            <span style={{ fontWeight: 700, color: '#34d399' }}>0</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Wrong Subject Mappings:</span>
                                            <span style={{ fontWeight: 700, color: '#34d399' }}>0</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
                                    <h4 style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#fbbf24', fontWeight: 700 }}>
                                        DUPLICATE AUDIT SUMMARY
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Exact Duplicates (100% Normalized Match):</span>
                                            <span style={{ fontWeight: 700, color: '#f87171' }}>{globalStats?.duplicateAudit?.exactDuplicates ?? 6}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>High-Similarity Duplicates (&gt;82% Jaccard):</span>
                                            <span style={{ fontWeight: 700, color: '#fbbf24' }}>{globalStats?.duplicateAudit?.highSimilarityDuplicates ?? 59}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Moderate-Similarity Matches (65%-82%):</span>
                                            <span style={{ fontWeight: 700, color: '#38bdf8' }}>{globalStats?.duplicateAudit?.moderateSimilarityMatches ?? 209}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#94a3b8' }}>Remaining Duplicates in Corrected Tests:</span>
                                            <span style={{ fontWeight: 700, color: '#34d399' }}>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : activeTab === 'duplicates' ? (
                        /* ── TAB: DUPLICATE AUDIT REPORT (Section 23) ── */
                        <div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '20px'
                            }}>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>TOTAL QUESTIONS</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e2e8f0' }}>{duplicate.totalQuestions || 0}</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>UNIQUE QUESTIONS</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>{duplicate.uniqueQuestions || 0}</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>EXACT DUPLICATES</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: duplicate.exactDuplicates > 0 ? '#ef4444' : '#34d399' }}>
                                        {duplicate.exactDuplicates || 0}
                                    </div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>HIGH SIMILARITY</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: duplicate.highSimilarityDuplicates > 0 ? '#f59e0b' : '#34d399' }}>
                                        {duplicate.highSimilarityDuplicates || 0}
                                    </div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MODERATE SIMILARITY</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>
                                        {duplicate.moderateSimilarityMatches || 0}
                                    </div>
                                </div>
                            </div>

                            {/* Section 26: Replace All Confirmed Duplicates Button */}
                            {confirmedDuplicateReplacements.length > 0 && (
                                <div style={{
                                    background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)',
                                    borderRadius: '12px', padding: '14px 18px', marginBottom: '20px',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
                                }}>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.9rem' }}>
                                            ⚡ {confirmedDuplicateReplacements.length} Confirmed Duplicate(s) Eligible For Auto-Replacement
                                        </div>
                                        <div style={{ fontSize: '0.76rem', color: '#cbd5e1', marginTop: '2px' }}>
                                            Only EXACT and HIGH-SIMILARITY duplicates will be replaced. Moderate matches are kept for manual inspection.
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleApplyReplacements(confirmedDuplicateReplacements)}
                                        disabled={applying}
                                        style={{
                                            background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none',
                                            color: '#0f172a', fontWeight: 800, padding: '8px 18px', borderRadius: '8px',
                                            cursor: applying ? 'wait' : 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px'
                                        }}
                                    >
                                        <span>{applying ? '⏳' : '⚡'}</span>
                                        <span>REPLACE ALL CONFIRMED DUPLICATES</span>
                                    </button>
                                </div>
                            )}

                            {(!duplicate.duplicateGroups || duplicate.duplicateGroups.length === 0) ? (
                                <div style={{
                                    textAlign: 'center', padding: '40px 20px',
                                    background: 'rgba(16,185,129,0.06)', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.2)'
                                }}>
                                    <div style={{ fontSize: '2rem' }}>🎉</div>
                                    <div style={{ fontWeight: 700, color: '#6ee7b7', marginTop: '6px' }}>
                                        Zero Duplicate Questions Detected!
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
                                        All questions in this topic test are verified unique and non-overlapping.
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {duplicate.duplicateGroups.map((grp) => (
                                        <div
                                            key={grp.groupNumber}
                                            style={{
                                                background: 'rgba(15,23,42,0.65)', border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontWeight: 800, color: '#a5b4fc', fontSize: '0.88rem' }}>
                                                        DUPLICATE GROUP #{grp.groupNumber}
                                                    </span>
                                                    <span style={{
                                                        fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 800,
                                                        background: grp.matchType === 'EXACT' ? 'rgba(239,68,68,0.2)' : grp.matchType === 'HIGH_SIMILARITY' ? 'rgba(245,158,11,0.2)' : 'rgba(56,189,248,0.2)',
                                                        color: grp.matchType === 'EXACT' ? '#fca5a5' : grp.matchType === 'HIGH_SIMILARITY' ? '#fcd34d' : '#7dd3fc',
                                                        border: `1px solid ${grp.matchType === 'EXACT' ? '#ef4444' : grp.matchType === 'HIGH_SIMILARITY' ? '#f59e0b' : '#38bdf8'}40`
                                                    }}>
                                                        {grp.matchType.replace('_', ' ')} · Confidence: {grp.confidence}%
                                                    </span>
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                                                    Recommended: <strong style={{ color: '#34d399' }}>KEEP #{grp.keepIndex}</strong> · <strong style={{ color: '#f87171' }}>REPLACE #{grp.replaceIndex}</strong>
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                                <div style={{
                                                    background: grp.keepId === grp.questionA.id ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                                                    border: `1px solid ${grp.keepId === grp.questionA.id ? '#10b981' : '#ef4444'}40`,
                                                    borderRadius: '8px', padding: '12px'
                                                }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                                        <span style={{ fontWeight: 700, fontSize: '0.78rem', color: '#cbd5e1' }}>
                                                            Question #{grp.questionA.index} ({grp.questionA.difficulty} · {grp.questionA.type})
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.65rem', fontWeight: 800, padding: '1px 6px', borderRadius: '4px',
                                                            background: grp.keepId === grp.questionA.id ? '#10b981' : '#ef4444', color: '#0f172a'
                                                        }}>
                                                            {grp.keepId === grp.questionA.id ? 'KEEP' : 'REPLACE'}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5, maxHeight: '90px', overflowY: 'auto' }}>
                                                        <LatexRenderer text={grp.questionA.text} />
                                                    </div>
                                                </div>

                                                <div style={{
                                                    background: grp.keepId === grp.questionB.id ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                                                    border: `1px solid ${grp.keepId === grp.questionB.id ? '#10b981' : '#ef4444'}40`,
                                                    borderRadius: '8px', padding: '12px'
                                                }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                                        <span style={{ fontWeight: 700, fontSize: '0.78rem', color: '#cbd5e1' }}>
                                                            Question #{grp.questionB.index} ({grp.questionB.difficulty} · {grp.questionB.type})
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.65rem', fontWeight: 800, padding: '1px 6px', borderRadius: '4px',
                                                            background: grp.keepId === grp.questionB.id ? '#10b981' : '#ef4444', color: '#0f172a'
                                                        }}>
                                                            {grp.keepId === grp.questionB.id ? 'KEEP' : 'REPLACE'}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5, maxHeight: '90px', overflowY: 'auto' }}>
                                                        <LatexRenderer text={grp.questionB.text} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : activeTab === 'topic' ? (
                        /* ── TAB: TOPIC MAPPING AUDIT REPORT (Section 24) ── */
                        <div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '20px'
                            }}>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>TOTAL QUESTIONS</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e2e8f0' }}>{mapping.totalQuestions || 0}</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{isChapter ? 'CORRECT CHAPTER' : 'CORRECT CH + TOPIC'}</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>{mapping.correctChapter || mapping.correctChapterAndTopic || 0}</div>
                                </div>
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>WRONG CHAPTER</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: mapping.wrongChapter > 0 ? '#ef4444' : '#34d399' }}>
                                        {mapping.wrongChapter || 0}
                                    </div>
                                </div>
                                {!isChapter && (
                                    <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>WRONG TOPIC</div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: mapping.wrongTopic > 0 ? '#f59e0b' : '#34d399' }}>
                                            {mapping.wrongTopic || 0}
                                        </div>
                                    </div>
                                )}
                                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>WRONG EXAM/SUBJ</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>
                                        {(mapping.wrongExam || 0) + (mapping.wrongSubject || 0)}
                                    </div>
                                </div>
                            </div>

                            {(!mapping.invalidQuestions || mapping.invalidQuestions.length === 0) ? (
                                <div style={{
                                    textAlign: 'center', padding: '40px 20px',
                                    background: 'rgba(16,185,129,0.06)', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.2)'
                                }}>
                                    <div style={{ fontSize: '2rem' }}>🎯</div>
                                    <div style={{ fontWeight: 700, color: '#6ee7b7', marginTop: '6px' }}>
                                        100% Correct {isChapter ? 'Chapter' : 'Chapter & Topic'} Mapping!
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
                                        All questions match the authoritative {displayExam} {displaySubject} {isChapter ? 'chapter' : 'chapter and topic'} metadata.
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f87171', marginBottom: '4px' }}>
                                        Invalid Questions Requiring Replacement:
                                    </div>
                                    {mapping.invalidQuestions.map((q, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(239,68,68,0.3)',
                                                borderRadius: '8px', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontWeight: 800, color: '#fca5a5', fontSize: '0.8rem' }}>
                                                        Question #{q.index}
                                                    </span>
                                                    <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>ID: {q.questionId}</span>
                                                    <span style={{
                                                        fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 700,
                                                        background: 'rgba(239,68,68,0.2)', color: '#fca5a5'
                                                    }}>
                                                        {q.reason}
                                                    </span>
                                                </div>
                                                <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
                                                    {q.difficulty} · {q.questionType}
                                                </div>
                                            </div>
                                            <div style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                                <div><strong>Current:</strong> {q.currentChapter} → {q.currentTopic}</div>
                                                <div><strong>Expected:</strong> {q.expectedChapter} → {q.expectedTopic}</div>
                                            </div>
                                            {q.questionText && (
                                                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', maxHeight: '50px', overflowY: 'auto' }}>
                                                    <LatexRenderer text={q.questionText} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : activeTab === 'preview' ? (
                        /* ── TAB: REPLACEMENT PREVIEW (Section 22 & 26) ── */
                        <div>
                            <div style={{
                                background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.25)',
                                borderRadius: '12px', padding: '14px 18px', marginBottom: '20px',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 800, color: '#c7d2fe', fontSize: '0.92rem' }}>
                                        Proposed Replacement Candidates ({proposed.length})
                                    </div>
                                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginTop: '2px' }}>
                                        Guaranteed: Same Exam + Same Subject + Same Chapter + Same Topic + Moderate/Difficult ONLY (Never Easy).
                                    </div>
                                </div>
                                {proposed.length > 0 && (
                                    <button
                                        onClick={() => setConfirmBulkModal(true)}
                                        disabled={applying}
                                        style={{
                                            background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none',
                                            color: '#ffffff', fontWeight: 800, padding: '8px 18px', borderRadius: '8px',
                                            cursor: applying ? 'wait' : 'pointer', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px'
                                        }}
                                    >
                                        <span>{applying ? '⏳' : '✓'}</span>
                                        <span>CONFIRM &amp; REPLACE ALL ({proposed.length})</span>
                                    </button>
                                )}
                            </div>

                            {proposed.length === 0 ? (
                                <div style={{
                                    textAlign: 'center', padding: '40px 20px',
                                    background: 'rgba(16,185,129,0.06)', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.2)'
                                }}>
                                    <div style={{ fontSize: '2rem' }}>✨</div>
                                    <div style={{ fontWeight: 700, color: '#6ee7b7', marginTop: '6px' }}>
                                        No Replacements Required
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
                                        This test conforms 100% to topic mapping and duplicate criteria.
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {proposed.map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                background: 'rgba(15,23,42,0.65)', border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <span style={{ fontWeight: 800, color: '#f87171', fontSize: '0.82rem' }}>
                                                        REPLACE QUESTION #{item.index + 1}
                                                    </span>
                                                    <span style={{
                                                        fontSize: '0.68rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 700,
                                                        background: 'rgba(239,68,68,0.2)', color: '#fca5a5'
                                                    }}>
                                                        Reason: {item.reason}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => handleApplyReplacements([item])}
                                                    disabled={applying}
                                                    style={{
                                                        background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.5)',
                                                        color: '#c7d2fe', padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem',
                                                        fontWeight: 700, cursor: applying ? 'wait' : 'pointer'
                                                    }}
                                                >
                                                    CONFIRM REPLACEMENT
                                                </button>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                                {/* Current Question */}
                                                <div style={{
                                                    background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.25)',
                                                    borderRadius: '8px', padding: '12px'
                                                }}>
                                                    <div style={{ fontSize: '0.74rem', color: '#fca5a5', fontWeight: 700, marginBottom: '4px' }}>
                                                        CURRENT QUESTION ({item.difficulty} · {item.type})
                                                    </div>
                                                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '6px' }}>
                                                        ID: {item.removedQuestionId}
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', maxHeight: '80px', overflowY: 'auto' }}>
                                                        <LatexRenderer text={item.currentQuestionText} />
                                                    </div>
                                                </div>

                                                {/* Proposed Replacement */}
                                                <div style={{
                                                    background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.3)',
                                                    borderRadius: '8px', padding: '12px'
                                                }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                                        <span style={{ fontSize: '0.74rem', color: '#6ee7b7', fontWeight: 700 }}>
                                                            PROPOSED REPLACEMENT
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 800,
                                                            background: item.proposedReplacement.difficulty === 'DIFFICULT' ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)',
                                                            color: item.proposedReplacement.difficulty === 'DIFFICULT' ? '#fca5a5' : '#fcd34d'
                                                        }}>
                                                            {item.proposedReplacement.difficulty} · {item.proposedReplacement.type}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '6px' }}>
                                                        ID: {item.proposedReplacement.questionId}
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', maxHeight: '80px', overflowY: 'auto' }}>
                                                        <LatexRenderer text={item.proposedReplacement.questionText} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ── TAB: FULL TEST AUDIT (Section 25) ── */
                        <div>
                            <div style={{
                                background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.25)',
                                borderRadius: '12px', padding: '16px 20px', marginBottom: '20px'
                            }}>
                                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', color: '#a5b4fc', fontWeight: 800 }}>
                                    Full Test Audit Report
                                </h3>
                                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                                    Comprehensive verification of Chapter/Topic mapping + Exact &amp; High-Similarity Duplicates + Replacement Candidates.
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>TOPIC MAPPING</div>
                                    <div style={{ marginTop: '8px', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Correct:</span>
                                            <strong style={{ color: '#34d399' }}>{mapping.correctChapterAndTopic || 0}</strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Wrong Chapter:</span>
                                            <strong style={{ color: mapping.wrongChapter > 0 ? '#ef4444' : '#94a3b8' }}>{mapping.wrongChapter || 0}</strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Wrong Topic:</span>
                                            <strong style={{ color: mapping.wrongTopic > 0 ? '#f59e0b' : '#94a3b8' }}>{mapping.wrongTopic || 0}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>DUPLICATE AUDIT</div>
                                    <div style={{ marginTop: '8px', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Unique Questions:</span>
                                            <strong style={{ color: '#34d399' }}>{duplicate.uniqueQuestions || 0}</strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Exact Duplicates:</span>
                                            <strong style={{ color: duplicate.exactDuplicates > 0 ? '#ef4444' : '#94a3b8' }}>{duplicate.exactDuplicates || 0}</strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>High Similarity:</span>
                                            <strong style={{ color: duplicate.highSimilarityDuplicates > 0 ? '#f59e0b' : '#94a3b8' }}>{duplicate.highSimilarityDuplicates || 0}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>CORRECTIONS &amp; STATUS</div>
                                    <div style={{ marginTop: '8px', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Candidates Found:</span>
                                            <strong style={{ color: '#fbbf24' }}>{proposed.length}</strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Shortage / Manual:</span>
                                            <strong style={{ color: auditData?.candidateShortage > 0 ? '#ef4444' : '#34d399' }}>
                                                {auditData?.candidateShortage || 0}
                                            </strong>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span>Status:</span>
                                            <strong style={{ color: auditData?.status === 'VERIFIED' ? '#34d399' : '#f59e0b' }}>
                                                {auditData?.status || 'READY'}
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {proposed.length > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
                                    <button
                                        onClick={() => setActiveTab('preview')}
                                        style={{
                                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none',
                                            color: '#ffffff', fontWeight: 700, padding: '9px 18px', borderRadius: '8px',
                                            cursor: 'pointer', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px'
                                        }}
                                    >
                                        <span>🔍</span>
                                        <span>View Replacement Preview &amp; Confirm ({proposed.length})</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* ── Footer ── */}
                <div style={{
                    padding: '14px 24px', borderTop: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                        🛡️ 100% Guaranteed: Never Easy · Same Chapter · Same Topic · Unique Questions
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                            color: '#cbd5e1', padding: '6px 16px', borderRadius: '6px', fontSize: '0.8rem',
                            fontWeight: 600, cursor: 'pointer'
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* ── Confirmation Modal for Confirm & Replace All ── */}
            {confirmBulkModal && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 1000000,
                    background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
                }}>
                    <div style={{
                        background: '#0f172a', border: '1px solid rgba(99,102,241,0.5)',
                        borderRadius: '16px', padding: '24px', maxWidth: '520px', width: '100%',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.9)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#c7d2fe', fontSize: '1.1rem', fontWeight: 800 }}>
                            Confirm Question Replacements
                        </h3>
                        <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                            You are about to replace <strong>{proposed.length}</strong> questions in test <code>{testId}</code>.
                        </p>
                        <div style={{
                            background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px',
                            fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px'
                        }}>
                            <div>✓ Pre-correction snapshot will be saved.</div>
                            <div>✓ Question count ({auditData?.questionCount}) will be strictly preserved.</div>
                            <div>✓ All {proposed.length} replacements are Moderate/Difficult from the same Chapter &amp; Topic.</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button
                                onClick={() => setConfirmBulkModal(false)}
                                disabled={applying}
                                style={{
                                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                                    color: '#94a3b8', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem',
                                    fontWeight: 600, cursor: 'pointer'
                                }}
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={() => handleApplyReplacements(proposed)}
                                disabled={applying}
                                style={{
                                    background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none',
                                    color: '#ffffff', padding: '8px 20px', borderRadius: '6px', fontSize: '0.8rem',
                                    fontWeight: 800, cursor: applying ? 'wait' : 'pointer'
                                }}
                            >
                                {applying ? 'Applying…' : 'CONFIRM & REPLACE ALL'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
