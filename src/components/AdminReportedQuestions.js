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

    // Open detailed investigation modal
    const openInvestigation = async (reportId) => {
        setSelectedReportId(reportId);
        setIsInvestigating(true);
        setActionMessage({ text: '', type: '' });
        try {
            const res = await fetch(`/api/admin/reports/${reportId}`);
            if (!res.ok) throw new Error('Failed to fetch report details.');
            const data = await res.json();
            setInvestigationData(data);
            setAdminNotesInput(data.report?.adminNotes || '');
            setResolutionNotesInput(data.report?.resolutionNotes || '');
            setQuestionCorrectedInput(Boolean(data.report?.questionCorrected));
        } catch (err) {
            console.error('Error opening investigation:', err);
            setActionMessage({ text: 'Failed to load investigation details.', type: 'error' });
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
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', color: '#fff', padding: '0 8px' }}>
            {/* Page Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)',
                padding: '24px 28px',
                borderRadius: '16px',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)'
                    }}>
                        🚩
                    </div>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1.45rem', fontWeight: '800', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Reported Questions Management
                        </h1>
                        <p style={{ margin: '4px 0 0 0', fontSize: '0.86rem', color: '#94a3b8' }}>
                            Investigate, verify, and resolve question issues flagged by students during tests and reviews.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                        onClick={() => fetchReports(pagination.page)}
                        disabled={isLoading}
                        style={{
                            padding: '9px 18px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            color: '#e2e8f0',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <span>🔄</span> {isLoading ? 'Refreshing...' : 'Refresh'}
                    </button>
                </div>
            </div>

            {/* Dashboard Summary Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '14px',
                marginBottom: '24px'
            }}>
                {[
                    { label: 'Total Reports', count: stats.total, color: '#c084fc', bg: 'rgba(192, 132, 252, 0.1)', border: 'rgba(192, 132, 252, 0.25)', filter: 'ALL' },
                    { label: 'New Reports', count: stats.newCount, color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.25)', filter: 'NEW' },
                    { label: 'Under Review', count: stats.underReview, color: '#facc15', bg: 'rgba(250, 204, 21, 0.1)', border: 'rgba(250, 204, 21, 0.25)', filter: 'UNDER_REVIEW' },
                    { label: 'Confirmed Errors', count: stats.confirmedError, color: '#f87171', bg: 'rgba(248, 113, 113, 0.1)', border: 'rgba(248, 113, 113, 0.25)', filter: 'CONFIRMED_ERROR' },
                    { label: 'Resolved Reports', count: stats.resolved, color: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.25)', filter: 'RESOLVED' },
                    { label: 'Dismissed Reports', count: stats.dismissed, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', border: 'rgba(148, 163, 184, 0.25)', filter: 'DISMISSED' },
                ].map(card => {
                    const isCardActive = statusFilter === card.filter;
                    return (
                        <div
                            key={card.label}
                            onClick={() => setStatusFilter(card.filter)}
                            style={{
                                background: card.bg,
                                border: isCardActive ? `2px solid ${card.color}` : `1px solid ${card.border}`,
                                borderRadius: '14px',
                                padding: '16px 18px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: isCardActive ? 'translateY(-2px)' : 'none',
                                boxShadow: isCardActive ? `0 6px 20px rgba(0, 0, 0, 0.4), 0 0 12px ${card.bg}` : 'none'
                            }}
                        >
                            <div style={{ fontSize: '0.8rem', fontWeight: '600', color: card.color, marginBottom: '6px' }}>
                                {card.label}
                            </div>
                            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em' }}>
                                {card.count}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Filter and Search Bar */}
            <div style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '18px 20px',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
            }}>
                {/* Search Row */}
                <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '10px', width: '100%' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by Report ID, Question ID, Student Name, Email, or Question text..."
                            style={{
                                width: '100%',
                                background: 'rgba(0, 0, 0, 0.35)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '10px',
                                padding: '11px 16px',
                                color: '#fff',
                                fontSize: '0.9rem',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '11px 22px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                            border: 'none',
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            cursor: 'pointer'
                        }}
                    >
                        Search
                    </button>
                    {(searchQuery || statusFilter !== 'ALL' || subjectFilter !== 'ALL' || examFilter !== 'ALL' || sourceFilter !== 'ALL' || categoryFilter !== 'ALL') && (
                        <button
                            type="button"
                            onClick={handleResetFilters}
                            style={{
                                padding: '11px 18px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: '#94a3b8',
                                fontSize: '0.86rem',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Reset
                        </button>
                    )}
                </form>

                {/* Dropdowns Row */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {/* Status Dropdown */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Statuses</option>
                        <option value="NEW">New</option>
                        <option value="UNDER_REVIEW">Under Review</option>
                        <option value="CONFIRMED_ERROR">Confirmed Error</option>
                        <option value="RESOLVED">Resolved</option>
                        <option value="DISMISSED">Dismissed</option>
                    </select>

                    {/* Subject Dropdown */}
                    <select
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Subjects</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Botany">Botany</option>
                        <option value="Zoology">Zoology</option>
                    </select>

                    {/* Exam Dropdown */}
                    <select
                        value={examFilter}
                        onChange={(e) => setExamFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Exams</option>
                        <option value="NEET">NEET</option>
                        <option value="JEE Main">JEE Main</option>
                        <option value="BITSAT">BITSAT</option>
                    </select>

                    {/* Source Dropdown */}
                    <select
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                        style={filterSelectStyle}
                    >
                        <option value="ALL">All Sources</option>
                        <option value="ACTIVE_TEST">Active Test</option>
                        <option value="SOLUTION_REVIEW">Solution Review</option>
                    </select>

                    {/* Category Dropdown */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        style={{ ...filterSelectStyle, maxWidth: '240px' }}
                    >
                        <option value="ALL">All Categories</option>
                        {SOLUTION_REVIEW_CATEGORIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Reports Data Table */}
            <div style={{
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)'
            }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
                        <thead>
                            <tr style={{
                                background: 'rgba(30, 27, 75, 0.6)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#c4b5fd',
                                textTransform: 'uppercase',
                                fontSize: '0.74rem',
                                letterSpacing: '0.05em'
                            }}>
                                <th style={{ padding: '14px 16px' }}>Report ID</th>
                                <th style={{ padding: '14px 16px' }}>Question Preview</th>
                                <th style={{ padding: '14px 16px' }}>Subject & Chapter</th>
                                <th style={{ padding: '14px 16px' }}>Categories</th>
                                <th style={{ padding: '14px 16px' }}>Reported By</th>
                                <th style={{ padding: '14px 16px' }}>Source</th>
                                <th style={{ padding: '14px 16px' }}>Status</th>
                                <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={8} style={{ padding: '48px', textAlign: 'center', color: '#94a3b8' }}>
                                        <div style={{ display: 'inline-block', width: '24px', height: '24px', border: '3px solid rgba(255,255,255,0.2)', borderTopColor: '#a78bfa', borderRadius: '50%', animation: 'spin 0.8s linear infinite', marginBottom: '8px' }} />
                                        <div>Loading reported questions...</div>
                                    </td>
                                </tr>
                            ) : reports.length === 0 ? (
                                <tr>
                                    <td colSpan={8} style={{ padding: '64px', textAlign: 'center', color: '#94a3b8' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎉</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#e2e8f0' }}>No reported questions found.</div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                                            {statusFilter !== 'ALL' || searchQuery ? 'Try adjusting your search filters.' : 'All student reports have been addressed.'}
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                reports.map(r => {
                                    const statusCfg = REPORT_STATUSES[r.status] || REPORT_STATUSES.NEW;
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
                                                <button
                                                    onClick={() => openInvestigation(r.reportId)}
                                                    style={{
                                                        padding: '6px 14px',
                                                        borderRadius: '8px',
                                                        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(79, 70, 229, 0.3))',
                                                        border: '1px solid rgba(139, 92, 246, 0.4)',
                                                        color: '#e2e8f0',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.15s ease'
                                                    }}
                                                >
                                                    Investigate
                                                </button>
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
                        padding: '16px 20px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(0, 0, 0, 0.2)'
                    }}>
                        <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                            Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} reports
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={() => fetchReports(pagination.page - 1)}
                                disabled={pagination.page <= 1 || isLoading}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    color: pagination.page <= 1 ? '#475569' : '#e2e8f0',
                                    fontSize: '0.84rem',
                                    cursor: pagination.page <= 1 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Previous
                            </button>
                            <span style={{ padding: '6px 12px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                                Page {pagination.page} of {pagination.totalPages}
                            </span>
                            <button
                                onClick={() => fetchReports(pagination.page + 1)}
                                disabled={pagination.page >= pagination.totalPages || isLoading}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    color: pagination.page >= pagination.totalPages ? '#475569' : '#e2e8f0',
                                    fontSize: '0.84rem',
                                    cursor: pagination.page >= pagination.totalPages ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Detailed Investigation Modal / Drawer */}
            {isInvestigating && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(3, 7, 18, 0.88)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 99999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        background: 'linear-gradient(145deg, #0b1120 0%, #171333 100%)',
                        border: '1px solid rgba(139, 92, 246, 0.35)',
                        borderRadius: '20px',
                        width: '100%',
                        maxWidth: '1100px',
                        maxHeight: '92vh',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(124, 58, 237, 0.25)',
                        overflow: 'hidden'
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '18px 24px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'rgba(0, 0, 0, 0.3)'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800' }}>
                                        Investigation: {investigationData?.report?.reportId || selectedReportId}
                                    </h2>
                                    {investigationData?.report && (
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '2px 10px',
                                            borderRadius: '12px',
                                            background: REPORT_STATUSES[investigationData.report.status]?.badgeBg,
                                            color: REPORT_STATUSES[investigationData.report.status]?.badgeColor,
                                            border: `1px solid ${REPORT_STATUSES[investigationData.report.status]?.border}`,
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
                                onClick={() => { setIsInvestigating(false); setInvestigationData(null); }}
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
                            {/* Column 1: Full Question Information */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                <div style={{
                                    background: 'rgba(15, 23, 42, 0.7)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '14px',
                                    padding: '20px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                                        <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#a78bfa', textTransform: 'uppercase' }}>
                                            Full Question Content
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
                                                            background: 'rgba(239, 68, 68, 0.15)',
                                                            color: '#fca5a5',
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

                                    {/* Action Buttons */}
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

const textareaStyle = {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.35)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '8px 12px',
    color: '#fff',
    fontSize: '0.84rem',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box'
};
