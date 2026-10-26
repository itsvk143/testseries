'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { REPORT_STATUSES, REPORT_SOURCES, SOLUTION_REVIEW_CATEGORIES } from '@/lib/reportConstants';

const LatexRenderer = dynamic(() => import('./LatexRenderer'), { ssr: false });

export default function AdminReportedQuestions({ onBadgeUpdate }) {
    const [reports, setReports] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        newCount: 0,
        underReview: 0,
        confirmedError: 0,
        resolved: 0,
        dismissed: 0,
        unresolvedCount: 0
    });
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 15,
        total: 0,
        totalPages: 1
    });

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [subjectFilter, setSubjectFilter] = useState('ALL');
    const [examFilter, setExamFilter] = useState('ALL');
    const [sourceFilter, setSourceFilter] = useState('ALL');
    const [categoryFilter, setCategoryFilter] = useState('ALL');

    // Selected Report for Detailed Investigation
    const [selectedReportId, setSelectedReportId] = useState(null);
    const [investigationData, setInvestigationData] = useState(null);
    const [isInvestigating, setIsInvestigating] = useState(false);
    const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
    const [adminNotesInput, setAdminNotesInput] = useState('');
    const [resolutionNotesInput, setResolutionNotesInput] = useState('');
    const [questionCorrectedInput, setQuestionCorrectedInput] = useState(false);
    const [actionMessage, setActionMessage] = useState({ text: '', type: '' });

    // Question Editing & Error Fixing States
    const [isEditingQuestion, setIsEditingQuestion] = useState(false);
    const [editType, setEditType] = useState('MCQ');
    const [editQuestionText, setEditQuestionText] = useState('');
    const [editOptions, setEditOptions] = useState(['', '', '', '']);
    const [editCorrectOption, setEditCorrectOption] = useState('a');
    const [editCorrectAnswer, setEditCorrectAnswer] = useState('');
    const [editExplanation, setEditExplanation] = useState('');
    const [editImage, setEditImage] = useState('');
    const [editResolveOnSave, setEditResolveOnSave] = useState(true);
    const [editResolutionNotes, setEditResolutionNotes] = useState('');
    const [showLivePreview, setShowLivePreview] = useState(true);
    const [isSavingQuestion, setIsSavingQuestion] = useState(false);

    // Fetch reports list with current filters
    const fetchReports = useCallback(async (page = 1) => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams({
                page: String(page),
                limit: String(pagination.limit),
                status: statusFilter,
                subject: subjectFilter,
                exam: examFilter,
                reportSource: sourceFilter,
                category: categoryFilter,
                q: searchQuery
            });

            const res = await fetch(`/api/admin/reports?${params.toString()}`);
            if (!res.ok) throw new Error('Failed to load reports.');
            const data = await res.json();

            setReports(data.reports || []);
            setStats(data.stats || stats);
            setPagination(data.pagination || pagination);

            if (onBadgeUpdate && data.stats) {
                onBadgeUpdate(data.stats.unresolvedCount);
            }
        } catch (err) {
            console.error('Error fetching admin reports:', err);
        } finally {
            setIsLoading(false);
        }
    }, [pagination.limit, statusFilter, subjectFilter, examFilter, sourceFilter, categoryFilter, searchQuery, onBadgeUpdate]);

    useEffect(() => {
        fetchReports(1);
    }, [statusFilter, subjectFilter, examFilter, sourceFilter, categoryFilter]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchReports(1);
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setStatusFilter('ALL');
        setSubjectFilter('ALL');
        setExamFilter('ALL');
        setSourceFilter('ALL');
        setCategoryFilter('ALL');
    };

    // Initialize edit form from question data
    const startEditingQuestion = (overrideData = null) => {
        const q = overrideData || investigationData?.currentQuestion || investigationData?.report?.questionSnapshot;
        if (!q) return;

        const rawType = (q.type || q.questionType || '').toString().toUpperCase();
        const isNum = rawType.includes('NUMERICAL') || rawType.includes('NUMERIC') || 
            (Array.isArray(q.options) && q.options.length === 0 && q.correctAnswer !== undefined && typeof q.correctAnswer === 'string');

        setEditType(isNum ? 'NUMERICAL' : 'MCQ');
        setEditQuestionText(q.question || q.text || '');
        setEditExplanation(q.explanation || '');
        setEditImage(q.image || '');

        let opts = [];
        if (Array.isArray(q.options) && q.options.length > 0) {
            opts = q.options.map(opt => typeof opt === 'object' && opt !== null ? (opt.text || opt.value || '') : String(opt || ''));
        }
        while (opts.length < 4) {
            opts.push('');
        }
        setEditOptions(opts.slice(0, 4));

        let cOpt = 'a';
        if (q.correctOption) {
            cOpt = String(q.correctOption).trim().toLowerCase();
        } else if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3) {
            cOpt = String.fromCharCode(97 + q.correctAnswer);
        }
        setEditCorrectOption(cOpt);
        setEditCorrectAnswer(q.correctAnswer !== undefined ? String(q.correctAnswer) : '');
        setEditResolveOnSave(true);
        setEditResolutionNotes('Fixed question statement, options, and verified answer key.');
        setIsEditingQuestion(true);
    };

    // Open detailed investigation modal
    const openInvestigation = async (reportId, startInEditMode = false) => {
        setSelectedReportId(reportId);
        setIsInvestigating(true);
        setActionMessage({ text: '', type: '' });
        setIsEditingQuestion(false);
        try {
            const res = await fetch(`/api/admin/reports/${reportId}`);
            if (!res.ok) throw new Error('Failed to fetch report details.');
            const data = await res.json();
            setInvestigationData(data);
            setAdminNotesInput(data.report?.adminNotes || '');
            setResolutionNotesInput(data.report?.resolutionNotes || '');
            setQuestionCorrectedInput(Boolean(data.report?.questionCorrected));

            if (startInEditMode) {
                const targetQ = data.currentQuestion || data.report?.questionSnapshot;
                if (targetQ) {
                    startEditingQuestion(targetQ);
                }
            }
        } catch (err) {
            console.error('Error opening investigation:', err);
            setActionMessage({ text: 'Failed to load investigation details.', type: 'error' });
        }
    };

    // Save edited question, options, and answer key directly
    const handleSaveQuestionFix = async () => {
        if (!selectedReportId) return;
        setIsSavingQuestion(true);
        setActionMessage({ text: '', type: '' });

        try {
            const payload = {
                editQuestionData: {
                    question: editQuestionText,
                    options: editType === 'NUMERICAL' ? [] : editOptions,
                    correctOption: editType === 'NUMERICAL' ? null : editCorrectOption,
                    correctAnswer: editType === 'NUMERICAL' ? editCorrectAnswer : undefined,
                    explanation: editExplanation,
                    image: editImage
                },
                status: editResolveOnSave ? 'RESOLVED' : undefined,
                resolutionNotes: editResolutionNotes || 'Question, options, and answer updated by admin.',
                questionCorrected: true
            };

            const res = await fetch(`/api/admin/reports/${selectedReportId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save question fix.');

            setActionMessage({
                text: '✅ Question statement, options, and answer key updated successfully in Question Bank!',
                type: 'success'
            });

            // Update local state with fresh data
            if (data.report) {
                setInvestigationData(prev => ({
                    ...prev,
                    report: data.report,
                    currentQuestion: data.updatedQuestion || {
                        ...prev.currentQuestion,
                        question: editQuestionText,
                        options: editOptions,
                        correctOption: editCorrectOption,
                        correctAnswer: editType === 'NUMERICAL' ? editCorrectAnswer : ({ a: 0, b: 1, c: 2, d: 3 }[editCorrectOption] ?? 0),
                        explanation: editExplanation,
                        image: editImage
                    }
                }));
            }

            setIsEditingQuestion(false);
            fetchReports(pagination.page);
        } catch (err) {
            console.error('Error saving question fix:', err);
            setActionMessage({ text: `Failed to save: ${err.message}`, type: 'error' });
        } finally {
            setIsSavingQuestion(false);
        }
    };

    // Update report status or notes
    const handleUpdateReport = async (newStatus = null) => {
        if (!selectedReportId) return;
        setIsUpdatingStatus(true);
        setActionMessage({ text: '', type: '' });

        try {
            const payload = {
                adminNotes: adminNotesInput,
                resolutionNotes: resolutionNotesInput,
                questionCorrected: questionCorrectedInput
            };
            if (newStatus) {
                payload.status = newStatus;
            }

            const res = await fetch(`/api/admin/reports/${selectedReportId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update report.');

            setActionMessage({ text: `Report successfully updated${newStatus ? ` to ${newStatus}` : ''}.`, type: 'success' });
            
            // Refresh detailed investigation view
            const refreshed = await fetch(`/api/admin/reports/${selectedReportId}`);
            if (refreshed.ok) {
                const refreshedData = await refreshed.json();
                setInvestigationData(refreshedData);
            }

            // Refresh table list in background
            fetchReports(pagination.page);

        } catch (err) {
            console.error('Error updating report status:', err);
            setActionMessage({ text: err.message || 'Update failed.', type: 'error' });
        } finally {
            setIsUpdatingStatus(false);
        }
    };

    return (
        <div style={{ maxWidth: '1440px', margin: '0 auto', color: '#f8fafc' }}>
            {/* Top Stat Dashboard */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.7) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '24px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                    <div>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', margin: 0, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>🚩</span> Reported Questions Management
                        </h2>
                        <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.88rem' }}>
                            Directly review, inspect student reports, and edit question statements, options, and answer keys to fix errors live.
                        </p>
                    </div>

                    <button
                        onClick={() => fetchReports(pagination.page)}
                        disabled={isLoading}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(124, 58, 237, 0.15)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            padding: '8px 16px',
                            borderRadius: '10px',
                            color: '#c4b5fd',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}
                    >
                        <span>🔄</span> Refresh Reports
                    </button>
                </div>

                {/* Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '14px'
                }}>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>Unresolved</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: stats.unresolvedCount > 0 ? '#f87171' : '#34d399', marginTop: '4px' }}>
                            {stats.unresolvedCount}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>New Reports</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#60a5fa', marginTop: '4px' }}>
                            {stats.newCount}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>Under Review</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#facc15', marginTop: '4px' }}>
                            {stats.underReview}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>Confirmed Error</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f87171', marginTop: '4px' }}>
                            {stats.confirmedError}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.25)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>Resolved</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#4ade80', marginTop: '4px' }}>
                            {stats.resolved}
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '20px'
            }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {/* Search Input */}
                    <form onSubmit={handleSearchSubmit} style={{ flex: '1 1 240px', display: 'flex' }}>
                        <input
                            type="text"
                            placeholder="Search report ID, student email, question ID, or text..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(0, 0, 0, 0.35)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '10px',
                                padding: '9px 14px',
                                color: '#fff',
                                fontSize: '0.85rem',
                                outline: 'none'
                            }}
                        />
                    </form>

                    {/* Status Select */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Statuses</option>
                        {Object.entries(REPORT_STATUSES).map(([key, val]) => (
                            <option key={key} value={key}>{val.label}</option>
                        ))}
                    </select>

                    {/* Subject Select */}
                    <select
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Subjects</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Botany">Botany</option>
                        <option value="Zoology">Zoology</option>
                        <option value="Mathematics">Mathematics</option>
                    </select>

                    {/* Source Select */}
                    <select
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Sources</option>
                        {Object.entries(REPORT_SOURCES).map(([key, val]) => (
                            <option key={key} value={key}>{val.label}</option>
                        ))}
                    </select>

                    {/* Category Select */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Categories</option>
                        {Object.entries(SOLUTION_REVIEW_CATEGORIES).map(([key, val]) => (
                            <option key={key} value={key}>{val.label}</option>
                        ))}
                    </select>

                    {/* Reset Button */}
                    <button
                        onClick={handleResetFilters}
                        style={{
                            padding: '9px 16px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '10px',
                            color: '#cbd5e1',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Reports List Table */}
            <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ background: 'rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#94a3b8' }}>
                                <th style={{ padding: '14px 16px' }}>Report ID</th>
                                <th style={{ padding: '14px 16px' }}>Question Preview</th>
                                <th style={{ padding: '14px 16px' }}>Subject & Chapter</th>
                                <th style={{ padding: '14px 16px' }}>Issue Categories</th>
                                <th style={{ padding: '14px 16px' }}>Reported By</th>
                                <th style={{ padding: '14px 16px' }}>Source</th>
                                <th style={{ padding: '14px 16px' }}>Status</th>
                                <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan="8" style={{ padding: '48px 16px', textAlign: 'center', color: '#94a3b8' }}>
                                        <div>Loading reported questions...</div>
                                    </td>
                                </tr>
                            ) : reports.length === 0 ? (
                                <tr>
                                    <td colSpan="8" style={{ padding: '48px 16px', textAlign: 'center', color: '#94a3b8' }}>
                                        <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#e2e8f0' }}>No reported questions found.</div>
                                        <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>All questions in test series are currently clear!</div>
                                    </td>
                                </tr>
                            ) : (
                                reports.map((r) => {
                                    const statusCfg = REPORT_STATUSES[r.status] || {
                                        label: r.status,
                                        badgeBg: 'rgba(255,255,255,0.1)',
                                        badgeColor: '#fff',
                                        border: 'rgba(255,255,255,0.2)'
                                    };

                                    const previewText = (r.questionSnapshot?.question || '').replace(/\$+/g, '').slice(0, 75);

                                    return (
                                        <tr
                                            key={r._id || r.reportId}
                                            style={{
                                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                                transition: 'background 0.15s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            {/* Report ID */}
                                            <td style={{ padding: '14px 16px', fontWeight: '700', color: '#cbd5e1' }}>
                                                <div style={{ fontSize: '0.82rem' }}>{r.reportId}</div>
                                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                                                    {new Date(r.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>

                                            {/* Question Preview */}
                                            <td style={{ padding: '14px 16px', maxWidth: '280px' }}>
                                                <div style={{
                                                    fontSize: '0.84rem',
                                                    color: '#e2e8f0',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {previewText || 'No preview available'}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                                                    <span style={{ fontSize: '0.7rem', color: '#818cf8', fontFamily: 'monospace' }}>
                                                        ID: {r.questionId?.slice(0, 10)}...
                                                    </span>
                                                    {r.questionReportsCount > 1 && (
                                                        <span style={{
                                                            fontSize: '0.68rem',
                                                            padding: '1px 6px',
                                                            borderRadius: '8px',
                                                            background: 'rgba(239, 68, 68, 0.2)',
                                                            color: '#f87171',
                                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                                            fontWeight: '700'
                                                        }}>
                                                            ⚠️ {r.questionReportsCount} reports
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Subject & Chapter */}
                                            <td style={{ padding: '14px 16px' }}>
                                                <div style={{ fontWeight: '600', color: '#a78bfa' }}>{r.subject}</div>
                                                <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{r.chapter || r.topic}</div>
                                            </td>

                                            {/* Categories */}
                                            <td style={{ padding: '14px 16px' }}>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '220px' }}>
                                                    {(r.categories || []).map(cat => (
                                                        <span
                                                            key={cat}
                                                            style={{
                                                                fontSize: '0.72rem',
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                background: cat.includes('Incorrect') || cat.includes('Invalid')
                                                                    ? 'rgba(239, 68, 68, 0.15)'
                                                                    : 'rgba(124, 58, 237, 0.15)',
                                                                color: cat.includes('Incorrect') || cat.includes('Invalid')
                                                                    ? '#fca5a5'
                                                                    : '#c4b5fd',
                                                                border: '1px solid rgba(255, 255, 255, 0.08)'
                                                            }}
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>

                                            {/* Reported By */}
                                            <td style={{ padding: '14px 16px' }}>
                                                <div style={{ fontWeight: '600', color: '#e2e8f0' }}>{r.studentName}</div>
                                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{r.studentEmail}</div>
                                            </td>

                                            {/* Source */}
                                            <td style={{ padding: '14px 16px' }}>
                                                <span style={{
                                                    fontSize: '0.74rem',
                                                    padding: '3px 8px',
                                                    borderRadius: '6px',
                                                    background: r.reportSource === 'ACTIVE_TEST' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(168, 85, 247, 0.12)',
                                                    color: r.reportSource === 'ACTIVE_TEST' ? '#93c5fd' : '#d8b4fe',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    fontWeight: '600'
                                                }}>
                                                    {r.reportSource === 'ACTIVE_TEST' ? 'Active Test' : 'Review'}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td style={{ padding: '14px 16px' }}>
                                                <span style={{
                                                    fontSize: '0.74rem',
                                                    padding: '3px 10px',
                                                    borderRadius: '12px',
                                                    background: statusCfg.badgeBg,
                                                    color: statusCfg.badgeColor,
                                                    border: `1px solid ${statusCfg.border}`,
                                                    fontWeight: '700',
                                                    display: 'inline-block'
                                                }}>
                                                    {statusCfg.label}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                                    <button
                                                        onClick={() => openInvestigation(r.reportId, true)}
                                                        style={{
                                                            padding: '6px 12px',
                                                            borderRadius: '8px',
                                                            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.25))',
                                                            border: '1px solid rgba(52, 211, 153, 0.45)',
                                                            color: '#6ee7b7',
                                                            fontSize: '0.78rem',
                                                            fontWeight: '700',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '5px'
                                                        }}
                                                        title="Directly edit question statement, options, and answer key"
                                                    >
                                                        <span>✏️</span> Edit / Fix
                                                    </button>
                                                    <button
                                                        onClick={() => openInvestigation(r.reportId, false)}
                                                        style={{
                                                            padding: '6px 14px',
                                                            borderRadius: '8px',
                                                            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(79, 70, 229, 0.3))',
                                                            border: '1px solid rgba(139, 92, 246, 0.4)',
                                                            color: '#e2e8f0',
                                                            fontSize: '0.8rem',
                                                            fontWeight: '700',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        Investigate
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {pagination.totalPages > 1 && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 20px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        background: 'rgba(0, 0, 0, 0.2)',
                        fontSize: '0.82rem',
                        color: '#94a3b8'
                    }}>
                        <div>
                            Showing page {pagination.page} of {pagination.totalPages} ({pagination.total} reports total)
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={() => fetchReports(pagination.page - 1)}
                                disabled={pagination.page <= 1}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                    cursor: pagination.page <= 1 ? 'not-allowed' : 'pointer',
                                    opacity: pagination.page <= 1 ? 0.4 : 1
                                }}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => fetchReports(pagination.page + 1)}
                                disabled={pagination.page >= pagination.totalPages}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                    cursor: pagination.page >= pagination.totalPages ? 'not-allowed' : 'pointer',
                                    opacity: pagination.page >= pagination.totalPages ? 0.4 : 1
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Detailed Investigation & Live Question Editor Modal */}
            {isInvestigating && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        background: '#0f172a',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                        borderRadius: '20px',
                        width: '100%',
                        maxWidth: '1240px',
                        maxHeight: '92vh',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                        overflow: 'hidden'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '18px 24px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'rgba(15, 23, 42, 0.9)'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: '#f8fafc' }}>
                                        Report Investigation: {investigationData?.report?.reportId}
                                    </h3>
                                    {investigationData?.report?.status && (
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '2px 8px',
                                            borderRadius: '6px',
                                            background: REPORT_STATUSES[investigationData.report.status]?.badgeBg,
                                            color: REPORT_STATUSES[investigationData.report.status]?.badgeColor,
                                            fontWeight: '700'
                                        }}>
                                            {REPORT_STATUSES[investigationData.report.status]?.label}
                                        </span>
                                    )}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '3px' }}>
                                    Question ID: <code style={{ color: '#c4b5fd' }}>{investigationData?.report?.questionId}</code> • Test: {investigationData?.report?.testTitle || investigationData?.report?.testId}
                                </div>
                            </div>
                            <button
                                onClick={() => { setIsInvestigating(false); setInvestigationData(null); setIsEditingQuestion(false); }}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#94a3b8',
                                    fontSize: '1.6rem',
                                    cursor: 'pointer',
                                    padding: '4px 8px',
                                    lineHeight: 1
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Body: Two Column Split */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '24px',
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
                            gap: '24px'
                        }}>
                            {/* Column 1: Full Question Information OR Interactive Question Editor */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                {isEditingQuestion ? (
                                    /* Interactive Question & Answer Key Editor */
                                    <div style={{
                                        background: 'rgba(15, 23, 42, 0.85)',
                                        border: '1px solid rgba(52, 211, 153, 0.35)',
                                        borderRadius: '16px',
                                        padding: '22px',
                                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.1)'
                                    }}>
                                        {/* Editor Header */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={{ fontSize: '1.1rem' }}>✏️</span>
                                                <div>
                                                    <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#6ee7b7' }}>
                                                        Edit Question, Options & Answer Key
                                                    </div>
                                                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                                                        Updates Question Bank live for all associated tests
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowLivePreview(prev => !prev)}
                                                    style={{
                                                        padding: '4px 10px',
                                                        borderRadius: '6px',
                                                        background: showLivePreview ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255,255,255,0.06)',
                                                        border: '1px solid rgba(139, 92, 246, 0.4)',
                                                        color: showLivePreview ? '#c4b5fd' : '#94a3b8',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {showLivePreview ? '👁️ Math Preview ON' : '👁️ Preview OFF'}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditingQuestion(false)}
                                                    style={{
                                                        padding: '4px 10px',
                                                        borderRadius: '6px',
                                                        background: 'rgba(255,255,255,0.06)',
                                                        border: '1px solid rgba(255,255,255,0.15)',
                                                        color: '#cbd5e1',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>

                                        {/* Question Type Toggle */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>
                                                Question Type:
                                            </span>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setEditType('MCQ')}
                                                    style={{
                                                        padding: '5px 12px',
                                                        borderRadius: '6px',
                                                        background: editType === 'MCQ' ? 'rgba(124, 58, 237, 0.3)' : 'rgba(255,255,255,0.05)',
                                                        border: `1px solid ${editType === 'MCQ' ? '#a78bfa' : 'rgba(255,255,255,0.1)'}`,
                                                        color: editType === 'MCQ' ? '#fff' : '#94a3b8',
                                                        fontSize: '0.78rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    MCQ (Multiple Choice)
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setEditType('NUMERICAL')}
                                                    style={{
                                                        padding: '5px 12px',
                                                        borderRadius: '6px',
                                                        background: editType === 'NUMERICAL' ? 'rgba(124, 58, 237, 0.3)' : 'rgba(255,255,255,0.05)',
                                                        border: `1px solid ${editType === 'NUMERICAL' ? '#a78bfa' : 'rgba(255,255,255,0.1)'}`,
                                                        color: editType === 'NUMERICAL' ? '#fff' : '#94a3b8',
                                                        fontSize: '0.78rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Numerical Answer
                                                </button>
                                            </div>
                                        </div>

                                        {/* 1. Question Statement */}
                                        <div style={{ marginBottom: '18px' }}>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px' }}>
                                                Question Statement (LaTeX supported: $...$, $$...$$):
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={editQuestionText}
                                                onChange={(e) => setEditQuestionText(e.target.value)}
                                                placeholder="Enter question statement with LaTeX formulas..."
                                                style={textareaStyle}
                                            />
                                            {showLivePreview && (
                                                <div style={{
                                                    marginTop: '8px',
                                                    padding: '10px 14px',
                                                    borderRadius: '8px',
                                                    background: 'rgba(0, 0, 0, 0.35)',
                                                    border: '1px dashed rgba(167, 139, 250, 0.3)',
                                                    fontSize: '0.92rem',
                                                    color: '#f8fafc',
                                                    lineHeight: '1.6'
                                                }}>
                                                    <div style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                                                        Question Live Preview:
                                                    </div>
                                                    <LatexRenderer text={editQuestionText || '(no question text entered)'} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Diagram URL (optional) */}
                                        <div style={{ marginBottom: '18px' }}>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px' }}>
                                                Question Diagram / Image URL (Optional):
                                            </label>
                                            <input
                                                type="text"
                                                value={editImage}
                                                onChange={(e) => setEditImage(e.target.value)}
                                                placeholder="https://... image link or data URL"
                                                style={inputStyle}
                                            />
                                            {editImage && (
                                                <div style={{ marginTop: '8px' }}>
                                                    <img
                                                        src={editImage}
                                                        alt="Diagram Preview"
                                                        style={{ maxHeight: '120px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* 2. Options & Answer Key */}
                                        {editType === 'MCQ' ? (
                                            <div style={{ marginBottom: '20px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: '#cbd5e1' }}>
                                                        Options & Correct Answer Key:
                                                    </label>
                                                    <span style={{ fontSize: '0.74rem', color: '#4ade80' }}>
                                                        Select the green radio button for the correct key
                                                    </span>
                                                </div>

                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                    {editOptions.map((optText, i) => {
                                                        const optLetter = String.fromCharCode(97 + i);
                                                        const isSelectedCorrect = editCorrectOption === optLetter;

                                                        return (
                                                            <div
                                                                key={optLetter}
                                                                style={{
                                                                    padding: '12px',
                                                                    borderRadius: '10px',
                                                                    background: isSelectedCorrect ? 'rgba(34, 197, 94, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                                                                    border: `1px solid ${isSelectedCorrect ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                                                                    transition: 'all 0.15s ease'
                                                                }}
                                                            >
                                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                        <span style={{
                                                                            width: '26px',
                                                                            height: '26px',
                                                                            borderRadius: '50%',
                                                                            background: isSelectedCorrect ? '#22c55e' : 'rgba(255, 255, 255, 0.1)',
                                                                            color: isSelectedCorrect ? '#000' : '#fff',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            fontWeight: '800',
                                                                            fontSize: '0.8rem'
                                                                        }}>
                                                                            {optLetter.toUpperCase()}
                                                                        </span>
                                                                        <span style={{ fontSize: '0.82rem', fontWeight: '600', color: isSelectedCorrect ? '#86efac' : '#e2e8f0' }}>
                                                                            Option {optLetter.toUpperCase()}
                                                                        </span>
                                                                    </div>

                                                                    {/* Correct Key Selector Radio Button */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setEditCorrectOption(optLetter)}
                                                                        style={{
                                                                            padding: '5px 12px',
                                                                            borderRadius: '20px',
                                                                            background: isSelectedCorrect ? 'rgba(34, 197, 94, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                                                                            border: `1px solid ${isSelectedCorrect ? '#22c55e' : 'rgba(255, 255, 255, 0.15)'}`,
                                                                            color: isSelectedCorrect ? '#4ade80' : '#94a3b8',
                                                                            fontSize: '0.78rem',
                                                                            fontWeight: '700',
                                                                            cursor: 'pointer',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '6px'
                                                                        }}
                                                                    >
                                                                        <span>{isSelectedCorrect ? '●' : '○'}</span>
                                                                        {isSelectedCorrect ? '✓ Correct Answer' : 'Set as Correct'}
                                                                    </button>
                                                                </div>

                                                                <input
                                                                    type="text"
                                                                    value={optText}
                                                                    onChange={(e) => {
                                                                        const val = e.target.value;
                                                                        setEditOptions(prev => {
                                                                            const copy = [...prev];
                                                                            copy[i] = val;
                                                                            return copy;
                                                                        });
                                                                    }}
                                                                    placeholder={`Enter Option ${optLetter.toUpperCase()} text (LaTeX: $...$)...`}
                                                                    style={{
                                                                        ...inputStyle,
                                                                        border: isSelectedCorrect ? '1px solid rgba(34, 197, 94, 0.45)' : inputStyle.border
                                                                    }}
                                                                />

                                                                {showLivePreview && (
                                                                    <div style={{
                                                                        marginTop: '6px',
                                                                        padding: '6px 10px',
                                                                        borderRadius: '6px',
                                                                        background: 'rgba(0, 0, 0, 0.25)',
                                                                        border: '1px dashed rgba(255, 255, 255, 0.08)',
                                                                        fontSize: '0.84rem',
                                                                        color: isSelectedCorrect ? '#86efac' : '#cbd5e1'
                                                                    }}>
                                                                        <span style={{ fontSize: '0.7rem', color: '#64748b', marginRight: '6px' }}>Preview:</span>
                                                                        <LatexRenderer text={optText || '(empty option)'} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ) : (
                                            /* Numerical Correct Answer Input */
                                            <div style={{ marginBottom: '20px' }}>
                                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px' }}>
                                                    Correct Numerical Value:
                                                </label>
                                                <input
                                                    type="text"
                                                    value={editCorrectAnswer}
                                                    onChange={(e) => setEditCorrectAnswer(e.target.value)}
                                                    placeholder="e.g. 6, 0.1, 14.5"
                                                    style={inputStyle}
                                                />
                                            </div>
                                        )}

                                        {/* 3. Explanation / Solution */}
                                        <div style={{ marginBottom: '20px' }}>
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '6px' }}>
                                                Step-by-Step Solution / Explanation (LaTeX supported):
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={editExplanation}
                                                onChange={(e) => setEditExplanation(e.target.value)}
                                                placeholder="Enter step-by-step solution / explanation with LaTeX..."
                                                style={textareaStyle}
                                            />
                                            {showLivePreview && (
                                                <div style={{
                                                    marginTop: '8px',
                                                    padding: '10px 14px',
                                                    borderRadius: '8px',
                                                    background: 'rgba(0, 0, 0, 0.35)',
                                                    border: '1px dashed rgba(196, 181, 253, 0.3)',
                                                    fontSize: '0.88rem',
                                                    color: '#cbd5e1',
                                                    lineHeight: '1.6'
                                                }}>
                                                    <div style={{ fontSize: '0.7rem', color: '#c4b5fd', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                                                        Solution Live Preview:
                                                    </div>
                                                    <LatexRenderer text={editExplanation || '(no explanation provided)'} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Save Controls & Resolution Option */}
                                        <div style={{
                                            paddingTop: '16px',
                                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '14px'
                                        }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1', cursor: 'pointer' }}>
                                                <input
                                                    type="checkbox"
                                                    checked={editResolveOnSave}
                                                    onChange={(e) => setEditResolveOnSave(e.target.checked)}
                                                    style={{ width: '16px', height: '16px', accentColor: '#10b981' }}
                                                />
                                                <span>Automatically mark this report as <strong>RESOLVED</strong> upon saving</span>
                                            </label>

                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditingQuestion(false)}
                                                    disabled={isSavingQuestion}
                                                    style={{
                                                        padding: '10px 18px',
                                                        borderRadius: '8px',
                                                        background: 'rgba(255, 255, 255, 0.08)',
                                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                                        color: '#cbd5e1',
                                                        fontSize: '0.84rem',
                                                        fontWeight: '600',
                                                        cursor: isSavingQuestion ? 'not-allowed' : 'pointer'
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleSaveQuestionFix}
                                                    disabled={isSavingQuestion}
                                                    style={{
                                                        padding: '10px 24px',
                                                        borderRadius: '8px',
                                                        background: 'linear-gradient(135deg, #10b981, #059669)',
                                                        border: 'none',
                                                        color: '#ffffff',
                                                        fontSize: '0.88rem',
                                                        fontWeight: '800',
                                                        cursor: isSavingQuestion ? 'not-allowed' : 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
                                                        opacity: isSavingQuestion ? 0.7 : 1
                                                    }}
                                                >
                                                    {isSavingQuestion ? (
                                                        <>
                                                            <span>⏳</span> Saving to Database...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>💾</span> Save & Apply Fix
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Read-Only Question Information View */
                                    <div style={{
                                        background: 'rgba(15, 23, 42, 0.7)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '14px',
                                        padding: '20px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#a78bfa', textTransform: 'uppercase' }}>
                                                    Full Question Content
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => startEditingQuestion()}
                                                    style={{
                                                        padding: '5px 12px',
                                                        borderRadius: '8px',
                                                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.25))',
                                                        border: '1px solid rgba(52, 211, 153, 0.45)',
                                                        color: '#6ee7b7',
                                                        fontSize: '0.78rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '5px'
                                                    }}
                                                >
                                                    <span>✏️</span> Edit Question, Options & Answer
                                                </button>
                                            </div>
                                            <div style={{ display: 'flex', gap: '6px' }}>
                                                <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>
                                                    {investigationData?.report?.subject}
                                                </span>
                                                <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>
                                                    {investigationData?.currentQuestion?.difficulty || investigationData?.report?.questionSnapshot?.difficulty || 'Medium'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Question Text */}
                                        <div style={{ fontSize: '0.98rem', lineHeight: '1.6', color: '#f8fafc', marginBottom: '16px' }}>
                                            <LatexRenderer text={investigationData?.currentQuestion?.question || investigationData?.report?.questionSnapshot?.question || 'No question text found'} />
                                        </div>

                                        {/* Question Diagram */}
                                        {(investigationData?.currentQuestion?.image || investigationData?.report?.questionSnapshot?.image) && (
                                            <div style={{ marginBottom: '16px' }}>
                                                <img
                                                    src={investigationData?.currentQuestion?.image || investigationData?.report?.questionSnapshot?.image}
                                                    alt="Question Diagram"
                                                    style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                                                />
                                            </div>
                                        )}

                                        {/* Options */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                                            <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>
                                                Options & Answer Key:
                                            </div>
                                            {(() => {
                                                const opts = investigationData?.currentQuestion?.options || investigationData?.report?.questionSnapshot?.options || [];
                                                const correctOpt = investigationData?.currentQuestion?.correctOption || investigationData?.report?.questionSnapshot?.correctOption || '';
                                                const correctAnsIdx = investigationData?.currentQuestion?.correctAnswer;

                                                if (!opts || opts.length === 0) {
                                                    return (
                                                        <div style={{
                                                            padding: '10px 14px',
                                                            borderRadius: '8px',
                                                            background: 'rgba(34, 197, 94, 0.1)',
                                                            border: '1px solid rgba(34, 197, 94, 0.3)',
                                                            fontSize: '0.88rem',
                                                            color: '#86efac'
                                                        }}>
                                                            <strong>Numerical Correct Value: </strong>
                                                            <code>{String(correctAnsIdx ?? correctOpt ?? 'N/A')}</code>
                                                        </div>
                                                    );
                                                }

                                                return opts.map((opt, i) => {
                                                    const optLetter = String.fromCharCode(97 + i);
                                                    const isCorrect = String(correctOpt).toLowerCase() === optLetter || correctAnsIdx === i;
                                                    const optText = typeof opt === 'object' && opt !== null ? (opt.text || opt.id) : String(opt);

                                                    return (
                                                        <div
                                                            key={i}
                                                            style={{
                                                                padding: '10px 14px',
                                                                borderRadius: '8px',
                                                                background: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                                                                border: isCorrect ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid rgba(255, 255, 255, 0.07)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '10px'
                                                            }}
                                                        >
                                                            <span style={{
                                                                width: '24px',
                                                                height: '24px',
                                                                borderRadius: '50%',
                                                                background: isCorrect ? '#22c55e' : 'rgba(255, 255, 255, 0.1)',
                                                                color: isCorrect ? '#000' : '#fff',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontWeight: '800',
                                                                fontSize: '0.75rem'
                                                            }}>
                                                                {optLetter.toUpperCase()}
                                                            </span>
                                                            <div style={{ flex: 1, fontSize: '0.9rem' }}>
                                                                <LatexRenderer text={optText} />
                                                            </div>
                                                            {isCorrect && (
                                                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#4ade80' }}>
                                                                    ✓ Correct Key
                                                                </span>
                                                            )}
                                                        </div>
                                                    );
                                                });
                                            })()}
                                        </div>

                                        {/* Explanation */}
                                        <div style={{
                                            background: 'rgba(0, 0, 0, 0.25)',
                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                            borderRadius: '10px',
                                            padding: '14px'
                                        }}>
                                            <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#c4b5fd', textTransform: 'uppercase', marginBottom: '8px' }}>
                                                Stored Solution / Explanation:
                                            </div>
                                            <div style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#cbd5e1' }}>
                                                <LatexRenderer text={investigationData?.currentQuestion?.explanation || investigationData?.report?.questionSnapshot?.explanation || 'No explanation provided'} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Column 2: Report Information & Admin Resolution Controls */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                {/* Student Report Information Card */}
                                <div style={{
                                    background: 'rgba(15, 23, 42, 0.7)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '14px',
                                    padding: '20px'
                                }}>
                                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#f87171', textTransform: 'uppercase', marginBottom: '14px' }}>
                                        Student Report Details
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
                                        <div>
                                            <span style={{ color: '#94a3b8' }}>Student: </span>
                                            <strong style={{ color: '#fff' }}>{investigationData?.report?.studentName}</strong>
                                            <span style={{ color: '#64748b', fontSize: '0.8rem' }}> ({investigationData?.report?.studentEmail})</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#94a3b8' }}>Source: </span>
                                            <span style={{ color: '#cbd5e1', fontWeight: '600' }}>
                                                {investigationData?.report?.reportSource === 'ACTIVE_TEST' ? 'Active Examination' : 'Post-Test Review'}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#94a3b8' }}>Submitted: </span>
                                            <span style={{ color: '#cbd5e1' }}>
                                                {investigationData?.report?.createdAt ? new Date(investigationData.report.createdAt).toLocaleString() : ''}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#94a3b8' }}>Reported Categories:</span>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                                                {(investigationData?.report?.categories || []).map(cat => (
                                                    <span
                                                        key={cat}
                                                        style={{
                                                            fontSize: '0.78rem',
                                                            padding: '4px 10px',
                                                            borderRadius: '6px',
                                                            background: cat.includes('Incorrect') || cat.includes('Invalid')
                                                                ? 'rgba(239, 68, 68, 0.15)'
                                                                : 'rgba(124, 58, 237, 0.15)',
                                                            color: cat.includes('Incorrect') || cat.includes('Invalid')
                                                                ? '#fca5a5'
                                                                : '#c4b5fd',
                                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        🚩 {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {investigationData?.report?.description && (
                                            <div style={{ marginTop: '8px' }}>
                                                <span style={{ color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Student Comment:</span>
                                                <div style={{
                                                    background: 'rgba(0, 0, 0, 0.3)',
                                                    padding: '10px 12px',
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    color: '#fef08a',
                                                    fontSize: '0.85rem',
                                                    fontStyle: 'italic'
                                                }}>
                                                    &ldquo;{investigationData.report.description}&rdquo;
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Question Aggregation Alert */}
                                    {investigationData?.totalQuestionReports > 1 && (
                                        <div style={{
                                            marginTop: '16px',
                                            background: 'rgba(239, 68, 68, 0.12)',
                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                            borderRadius: '8px',
                                            padding: '10px 12px',
                                            fontSize: '0.82rem',
                                            color: '#fca5a5'
                                        }}>
                                            ⚠️ <strong>High Alert:</strong> {investigationData.totalQuestionReports} separate students have reported this exact question!
                                        </div>
                                    )}
                                </div>

                                {/* Administrative Workflow & Actions Card */}
                                <div style={{
                                    background: 'rgba(15, 23, 42, 0.7)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '14px',
                                    padding: '20px'
                                }}>
                                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#60a5fa', textTransform: 'uppercase', marginBottom: '14px' }}>
                                        Workflow & Actions
                                    </div>

                                    {/* Prominent Edit Question Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!isEditingQuestion) {
                                                startEditingQuestion();
                                            } else {
                                                setIsEditingQuestion(false);
                                            }
                                        }}
                                        style={{
                                            width: '100%',
                                            padding: '11px 16px',
                                            borderRadius: '10px',
                                            background: isEditingQuestion
                                                ? 'rgba(255, 255, 255, 0.08)'
                                                : 'linear-gradient(135deg, #10b981, #059669)',
                                            border: isEditingQuestion ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                                            color: '#ffffff',
                                            fontSize: '0.88rem',
                                            fontWeight: '800',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            marginBottom: '16px',
                                            boxShadow: isEditingQuestion ? 'none' : '0 4px 14px rgba(16, 185, 129, 0.35)',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <span>✏️</span> {isEditingQuestion ? 'Exit Question Editor' : 'Edit Question, Options & Answer Key'}
                                    </button>

                                    {/* Feedback message */}
                                    {actionMessage.text && (
                                        <div style={{
                                            padding: '10px 12px',
                                            borderRadius: '8px',
                                            marginBottom: '14px',
                                            fontSize: '0.84rem',
                                            background: actionMessage.type === 'success' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                                            color: actionMessage.type === 'success' ? '#86efac' : '#fca5a5',
                                            border: `1px solid ${actionMessage.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                                        }}>
                                            {actionMessage.text}
                                        </div>
                                    )}

                                    {/* Quick Status Action Buttons */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
                                        <button
                                            onClick={() => handleUpdateReport('UNDER_REVIEW')}
                                            disabled={isUpdatingStatus}
                                            style={{
                                                padding: '9px 12px',
                                                borderRadius: '8px',
                                                background: 'rgba(234, 179, 8, 0.15)',
                                                border: '1px solid rgba(234, 179, 8, 0.4)',
                                                color: '#fef08a',
                                                fontSize: '0.82rem',
                                                fontWeight: '700',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            ⏳ Mark Under Review
                                        </button>
                                        <button
                                            onClick={() => handleUpdateReport('CONFIRMED_ERROR')}
                                            disabled={isUpdatingStatus}
                                            style={{
                                                padding: '9px 12px',
                                                borderRadius: '8px',
                                                background: 'rgba(239, 68, 68, 0.15)',
                                                border: '1px solid rgba(239, 68, 68, 0.4)',
                                                color: '#fca5a5',
                                                fontSize: '0.82rem',
                                                fontWeight: '700',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            ❌ Confirm Error
                                        </button>
                                        <button
                                            onClick={() => handleUpdateReport('RESOLVED')}
                                            disabled={isUpdatingStatus}
                                            style={{
                                                padding: '9px 12px',
                                                borderRadius: '8px',
                                                background: 'rgba(34, 197, 94, 0.15)',
                                                border: '1px solid rgba(34, 197, 94, 0.4)',
                                                color: '#86efac',
                                                fontSize: '0.82rem',
                                                fontWeight: '700',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            ✓ Resolve Report
                                        </button>
                                        <button
                                            onClick={() => handleUpdateReport('DISMISSED')}
                                            disabled={isUpdatingStatus}
                                            style={{
                                                padding: '9px 12px',
                                                borderRadius: '8px',
                                                background: 'rgba(148, 163, 184, 0.15)',
                                                border: '1px solid rgba(148, 163, 184, 0.3)',
                                                color: '#cbd5e1',
                                                fontSize: '0.82rem',
                                                fontWeight: '700',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Dismiss Report
                                        </button>
                                    </div>

                                    {/* Resolution & Question Correction Tracking */}
                                    <div style={{ marginBottom: '14px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1', cursor: 'pointer', marginBottom: '8px' }}>
                                            <input
                                                type="checkbox"
                                                checked={questionCorrectedInput}
                                                onChange={(e) => setQuestionCorrectedInput(e.target.checked)}
                                                style={{ width: '16px', height: '16px', accentColor: '#7c3aed' }}
                                            />
                                            Question has been corrected in Question Bank
                                        </label>

                                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>
                                            Resolution Notes (Visible to admin team):
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={resolutionNotesInput}
                                            onChange={(e) => setResolutionNotesInput(e.target.value)}
                                            placeholder="Explain how the issue was investigated or resolved..."
                                            style={textareaStyle}
                                        />
                                    </div>

                                    {/* Internal Admin Notes */}
                                    <div style={{ marginBottom: '14px' }}>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>
                                            Internal Admin Notes:
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={adminNotesInput}
                                            onChange={(e) => setAdminNotesInput(e.target.value)}
                                            placeholder="Private notes for administrator audit..."
                                            style={textareaStyle}
                                        />
                                    </div>

                                    <button
                                        onClick={() => handleUpdateReport()}
                                        disabled={isUpdatingStatus}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                            border: 'none',
                                            color: '#fff',
                                            fontSize: '0.86rem',
                                            fontWeight: '700',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {isUpdatingStatus ? 'Saving Changes...' : 'Save Notes & Audit State'}
                                    </button>
                                </div>

                                {/* Audit History */}
                                {investigationData?.report?.actionHistory?.length > 0 && (
                                    <div style={{
                                        background: 'rgba(15, 23, 42, 0.7)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '14px',
                                        padding: '16px'
                                    }}>
                                        <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '10px' }}>
                                            Audit History Trail
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem' }}>
                                            {investigationData.report.actionHistory.map((act, i) => (
                                                <div key={i} style={{ borderLeft: '2px solid #8b5cf6', paddingLeft: '10px' }}>
                                                    <div style={{ color: '#e2e8f0', fontWeight: '600' }}>
                                                        {act.action} {act.toStatus ? `→ ${act.toStatus}` : ''}
                                                    </div>
                                                    <div style={{ color: '#64748b', fontSize: '0.72rem' }}>
                                                        By {act.performedBy} on {new Date(act.timestamp).toLocaleString()}
                                                    </div>
                                                    {act.notes && (
                                                        <div style={{ color: '#cbd5e1', fontStyle: 'italic', marginTop: '2px' }}>
                                                            {act.notes}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const filterSelectStyle = {
    background: 'rgba(0, 0, 0, 0.35)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '10px',
    padding: '9px 14px',
    color: '#e2e8f0',
    fontSize: '0.85rem',
    outline: 'none',
    cursor: 'pointer'
};

const inputStyle = {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '9px 12px',
    color: '#fff',
    fontSize: '0.88rem',
    outline: 'none',
    boxSizing: 'border-box'
};

const textareaStyle = {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '10px 12px',
    color: '#fff',
    fontSize: '0.88rem',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    lineHeight: '1.5'
};
