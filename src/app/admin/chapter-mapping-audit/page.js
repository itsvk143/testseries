'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

// ── Constants ────────────────────────────────────────────────────────────────

const SUBJECTS = ['ALL', 'Botany', 'Zoology', 'Physics', 'Chemistry'];
const CHAPTERS = ['ALL', 'Plant Kingdom', 'Biological Classification'];
const STATUSES = ['ALL', 'CORRECT', 'INCORRECT', 'NEEDS_REVIEW', 'MISSING'];
const STATUS_COLORS = {
  CORRECT: '#22c55e',
  INCORRECT: '#ef4444',
  NEEDS_REVIEW: '#f59e0b',
  MISSING: '#8b5cf6',
};
const CONFIDENCE_COLORS = {
  high: '#22c55e',   // ≥ 85
  medium: '#f59e0b', // 60–84
  low: '#ef4444',    // < 60
};

function confidenceColor(c) {
  if (c >= 85) return CONFIDENCE_COLORS.high;
  if (c >= 60) return CONFIDENCE_COLORS.medium;
  return CONFIDENCE_COLORS.low;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: '#1a2236',
      border: `1px solid ${color || '#2d3748'}`,
      borderRadius: 10,
      padding: '16px 20px',
      minWidth: 150,
    }}>
      <div style={{ color: '#94a3b8', fontSize: 12, marginBottom: 4 }}>{label}</div>
      <div style={{ color: color || '#f1f5f9', fontSize: 28, fontWeight: 700 }}>{value ?? '—'}</div>
    </div>
  );
}

function Badge({ status }) {
  const color = STATUS_COLORS[status] || '#64748b';
  return (
    <span style={{
      background: color + '22',
      color,
      border: `1px solid ${color}44`,
      borderRadius: 6,
      padding: '2px 8px',
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function ChapterMappingAuditPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [running, setRunning] = useState(false);
  const [rows, setRows] = useState([]);
  const [summary, setSummary] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [auditStatus, setAuditStatus] = useState(null);

  const [filterSubject, setFilterSubject] = useState('ALL');
  const [filterChapter, setFilterChapter] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState(new Set()); // questionId strings
  const [actionMsg, setActionMsg] = useState('');
  const [exportData, setExportData] = useState(null);

  // Redirect if not admin
  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin');
    else if (status === 'authenticated' && !session?.user?.isAdmin) router.push('/dashboard');
  }, [status, session, router]);

  // Load status on mount
  useEffect(() => {
    fetchAuditStatus();
  }, []);

  async function fetchAuditStatus() {
    try {
      const res = await fetch('/api/admin/chapter-mapping-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'GET_AUDIT_STATUS' }),
      });
      const data = await res.json();
      if (data.success) setAuditStatus(data);
    } catch (e) {
      console.error(e);
    }
  }

  const runAudit = useCallback(async (pg = 1) => {
    setRunning(true);
    setActionMsg('');
    try {
      const res = await fetch('/api/admin/chapter-mapping-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'RUN_AUDIT',
          subject: filterSubject !== 'ALL' ? filterSubject : undefined,
          chapter: filterChapter !== 'ALL' ? filterChapter : undefined,
          status: filterStatus !== 'ALL' ? filterStatus : undefined,
          page: pg,
          limit: 50,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setRows(data.rows || []);
        setSummary(data.summary);
        setPagination(data.pagination);
        setPage(pg);
        setSelected(new Set());
      } else {
        setActionMsg(`Error: ${data.error}`);
      }
    } catch (e) {
      setActionMsg(`Error: ${e.message}`);
    } finally {
      setRunning(false);
    }
  }, [filterSubject, filterChapter, filterStatus]);

  async function approveSelected() {
    const toApprove = rows
      .filter(r => selected.has(r.questionId) && r.status === 'INCORRECT')
      .map(r => ({ testId: r.testId, questionId: r.questionId, proposedQuestionId: r.proposedQuestionId }))
      .filter(r => r.proposedQuestionId);

    if (!toApprove.length) {
      setActionMsg('No INCORRECT rows with proposed replacements selected.');
      return;
    }

    setActionMsg('Applying corrections…');
    try {
      const res = await fetch('/api/admin/chapter-mapping-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'BULK_APPROVE', replacements: toApprove }),
      });
      const data = await res.json();
      setActionMsg(data.success ? `✅ ${data.message}` : `Error: ${data.error}`);
      if (data.success) {
        fetchAuditStatus();
        runAudit(page);
      }
    } catch (e) {
      setActionMsg(`Error: ${e.message}`);
    }
  }

  async function rejectSelected() {
    const toReject = rows.filter(r => selected.has(r.questionId));
    if (!toReject.length) { setActionMsg('No rows selected.'); return; }

    setActionMsg('Recording rejections…');
    for (const r of toReject) {
      await fetch('/api/admin/chapter-mapping-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'REJECT',
          testId: r.testId,
          questionId: r.questionId,
          proposedQuestionId: r.proposedQuestionId,
          reason: 'Admin manual rejection',
        }),
      });
    }
    setActionMsg(`✅ Recorded ${toReject.length} rejections.`);
    fetchAuditStatus();
  }

  async function exportReport() {
    setActionMsg('Generating report…');
    try {
      const res = await fetch('/api/admin/chapter-mapping-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'EXPORT_REPORT' }),
      });
      const data = await res.json();
      if (data.success) {
        const blob = new Blob([JSON.stringify(data.report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chapter_mapping_audit_${Date.now()}.json`;
        a.click();
        setActionMsg('✅ Report exported.');
      }
    } catch (e) {
      setActionMsg(`Error: ${e.message}`);
    }
  }

  function toggleSelect(qId) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(rows.map(r => r.questionId)));
  }

  function deselectAll() {
    setSelected(new Set());
  }

  const incorrectSelected = rows.filter(r => selected.has(r.questionId) && r.status === 'INCORRECT').length;

  if (status === 'loading') return null;

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1d', color: '#f1f5f9', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 16px' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
            📋 Question Bank → Chapter Mapping Audit
          </h1>
          <p style={{ color: '#94a3b8', marginTop: 6, fontSize: 14 }}>
            Identify and correct questions incorrectly mapped to NEET/NCERT chapters.
            Focused on Botany — Plant Kingdom vs Biological Classification mis-mappings.
          </p>
        </div>

        {/* ── Status cards ── */}
        {auditStatus && (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <StatCard label="Corrections Applied" value={auditStatus.correctionsMade} color="#22c55e" />
            <StatCard label="Snapshots Taken" value={auditStatus.snapshotsTaken} color="#3b82f6" />
            <StatCard label="Rejections Recorded" value={auditStatus.rejectionsRecorded} color="#f59e0b" />
          </div>
        )}

        {/* ── Filters + Actions ── */}
        <div style={{
          background: '#13192c',
          border: '1px solid #1e293b',
          borderRadius: 12,
          padding: '16px 20px',
          marginBottom: 20,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
        }}>

          {/* Subject filter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ color: '#94a3b8', fontSize: 11 }}>Subject</label>
            <select
              value={filterSubject}
              onChange={e => setFilterSubject(e.target.value)}
              style={{ background: '#1a2236', color: '#f1f5f9', border: '1px solid #2d3748', borderRadius: 6, padding: '6px 12px', fontSize: 13 }}
            >
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Chapter filter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ color: '#94a3b8', fontSize: 11 }}>Chapter</label>
            <select
              value={filterChapter}
              onChange={e => setFilterChapter(e.target.value)}
              style={{ background: '#1a2236', color: '#f1f5f9', border: '1px solid #2d3748', borderRadius: 6, padding: '6px 12px', fontSize: 13 }}
            >
              {CHAPTERS.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Status filter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ color: '#94a3b8', fontSize: 11 }}>Audit Status</label>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              style={{ background: '#1a2236', color: '#f1f5f9', border: '1px solid #2d3748', borderRadius: 6, padding: '6px 12px', fontSize: 13 }}
            >
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div style={{ flexGrow: 1 }} />

          {/* Action buttons */}
          <button
            onClick={() => runAudit(1)}
            disabled={running}
            style={{
              background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 8,
              padding: '8px 20px', fontWeight: 600, cursor: running ? 'not-allowed' : 'pointer',
              opacity: running ? 0.7 : 1, fontSize: 13,
            }}
          >
            {running ? '⏳ Running…' : '🔍 Run AI Chapter Audit'}
          </button>

          <button
            onClick={approveSelected}
            disabled={!incorrectSelected}
            style={{
              background: incorrectSelected ? '#22c55e' : '#374151', color: '#fff', border: 'none',
              borderRadius: 8, padding: '8px 20px', fontWeight: 600,
              cursor: incorrectSelected ? 'pointer' : 'not-allowed', fontSize: 13,
            }}
          >
            ✅ Approve Selected ({incorrectSelected})
          </button>

          <button
            onClick={rejectSelected}
            disabled={!selected.size}
            style={{
              background: selected.size ? '#ef4444' : '#374151', color: '#fff', border: 'none',
              borderRadius: 8, padding: '8px 16px', fontWeight: 600,
              cursor: selected.size ? 'pointer' : 'not-allowed', fontSize: 13,
            }}
          >
            ✗ Reject Selected
          </button>

          <button
            onClick={exportReport}
            style={{
              background: '#7c3aed', color: '#fff', border: 'none',
              borderRadius: 8, padding: '8px 16px', fontWeight: 600,
              cursor: 'pointer', fontSize: 13,
            }}
          >
            📥 Export Audit Report
          </button>
        </div>

        {/* ── Action message ── */}
        {actionMsg && (
          <div style={{
            background: actionMsg.startsWith('✅') ? '#14532d22' : '#7f1d1d22',
            border: `1px solid ${actionMsg.startsWith('✅') ? '#22c55e44' : '#ef444444'}`,
            color: actionMsg.startsWith('✅') ? '#4ade80' : '#f87171',
            borderRadius: 8, padding: '10px 16px', marginBottom: 16, fontSize: 13,
          }}>
            {actionMsg}
          </div>
        )}

        {/* ── Summary ── */}
        {summary && (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
            <StatCard label="Questions Audited" value={summary.totalQuestionsAudited} />
            <StatCard label="Correct Mappings" value={summary.correctMappings} color="#22c55e" />
            <StatCard label="Incorrect Mappings" value={summary.incorrectMappings} color="#ef4444" />
            <StatCard label="Needs Review" value={summary.needsReview} color="#f59e0b" />
            <StatCard label="Audit Rows" value={summary.totalAuditRows} color="#3b82f6" />
          </div>
        )}

        {/* ── Table ── */}
        {rows.length > 0 && (
          <>
            {/* Select controls */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
              <button onClick={selectAll} style={{ background: 'none', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontSize: 12 }}>
                Select All
              </button>
              <button onClick={deselectAll} style={{ background: 'none', color: '#94a3b8', border: '1px solid #2d3748', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontSize: 12 }}>
                Deselect All
              </button>
              <span style={{ color: '#64748b', fontSize: 12 }}>{selected.size} selected</span>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #1e293b' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                <thead>
                  <tr style={{ background: '#13192c', borderBottom: '1px solid #1e293b' }}>
                    {['', 'Question ID', 'Question Preview', 'Subject', 'Test ID', 'Current Chapter', 'Suggested Chapter', 'Current Topic', 'Confidence', 'Status', 'Action'].map(h => (
                      <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr
                      key={row.questionId}
                      style={{
                        borderBottom: '1px solid #1e293b',
                        background: selected.has(row.questionId) ? '#1e293b' : idx % 2 === 0 ? '#0d1424' : '#0a0f1d',
                      }}
                    >
                      {/* Checkbox */}
                      <td style={{ padding: '8px 12px' }}>
                        <input
                          type="checkbox"
                          checked={selected.has(row.questionId)}
                          onChange={() => toggleSelect(row.questionId)}
                          style={{ cursor: 'pointer' }}
                        />
                      </td>

                      {/* Question ID */}
                      <td style={{ padding: '8px 12px', color: '#94a3b8', fontFamily: 'monospace', fontSize: 10 }}>
                        {row.questionId.substring(0, 10)}…
                      </td>

                      {/* Preview */}
                      <td style={{ padding: '8px 12px', color: '#e2e8f0', maxWidth: 280 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={row.questionPreview}>
                          {row.questionPreview || '—'}
                        </div>
                      </td>

                      {/* Subject */}
                      <td style={{ padding: '8px 12px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                        {row.subject}
                      </td>

                      {/* Test ID */}
                      <td style={{ padding: '8px 12px', color: '#60a5fa', fontSize: 10, maxWidth: 200 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={row.testId}>
                          {row.testId}
                        </div>
                      </td>

                      {/* Current Chapter */}
                      <td style={{ padding: '8px 12px', color: '#f1f5f9', whiteSpace: 'nowrap' }}>
                        {row.currentChapter}
                      </td>

                      {/* Suggested Chapter */}
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                        <span style={{
                          color: row.suggestedChapter === row.currentChapter ? '#22c55e' : '#f59e0b',
                          fontWeight: row.suggestedChapter !== row.currentChapter ? 600 : 400,
                        }}>
                          {row.suggestedChapter}
                        </span>
                      </td>

                      {/* Current Topic */}
                      <td style={{ padding: '8px 12px', color: '#94a3b8', maxWidth: 160 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={row.currentTopic}>
                          {row.currentTopic || '—'}
                        </div>
                      </td>

                      {/* Confidence */}
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                        <span style={{ color: confidenceColor(row.confidence), fontWeight: 600 }}>
                          {row.confidence}%
                        </span>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                        <Badge status={row.status} />
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                        {row.status === 'INCORRECT' && (
                          <div style={{ display: 'flex', gap: 4 }}>
                            <button
                              onClick={async () => {
                                if (!row.proposedQuestionId) {
                                  setActionMsg('No proposed replacement available for this row.');
                                  return;
                                }
                                setActionMsg('Approving…');
                                const res = await fetch('/api/admin/chapter-mapping-audit', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({
                                    action: 'APPROVE_FIX',
                                    testId: row.testId,
                                    questionId: row.questionId,
                                    proposedQuestionId: row.proposedQuestionId,
                                  }),
                                });
                                const data = await res.json();
                                setActionMsg(data.success ? `✅ ${data.message}` : `Error: ${data.error}`);
                                if (data.success) { fetchAuditStatus(); runAudit(page); }
                              }}
                              style={{ background: '#22c55e', color: '#fff', border: 'none', borderRadius: 5, padding: '3px 8px', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}
                            >
                              Approve
                            </button>
                            <button
                              onClick={async () => {
                                await fetch('/api/admin/chapter-mapping-audit', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ action: 'REJECT', testId: row.testId, questionId: row.questionId }),
                                });
                                setActionMsg('✅ Rejection recorded.');
                                fetchAuditStatus();
                              }}
                              style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: 5, padding: '3px 8px', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {row.status === 'NEEDS_REVIEW' && (
                          <span style={{ color: '#f59e0b', fontSize: 11 }}>Manual Review</span>
                        )}
                        {row.status === 'CORRECT' && (
                          <span style={{ color: '#22c55e', fontSize: 11 }}>✔ Valid</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination && pagination.pages > 1 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'center', alignItems: 'center' }}>
                <button
                  onClick={() => runAudit(page - 1)}
                  disabled={page <= 1}
                  style={{ background: '#1a2236', color: '#94a3b8', border: '1px solid #2d3748', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}
                >
                  ← Prev
                </button>
                <span style={{ color: '#94a3b8', fontSize: 13 }}>
                  Page {page} of {pagination.pages} ({pagination.total} rows)
                </span>
                <button
                  onClick={() => runAudit(page + 1)}
                  disabled={page >= pagination.pages}
                  style={{ background: '#1a2236', color: '#94a3b8', border: '1px solid #2d3748', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!running && rows.length === 0 && !summary && (
          <div style={{
            background: '#13192c', border: '1px solid #1e293b', borderRadius: 12,
            padding: '48px 24px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ color: '#94a3b8', fontSize: 16 }}>
              Click <strong style={{ color: '#3b82f6' }}>Run AI Chapter Audit</strong> to scan questions for incorrect chapter mappings.
            </div>
            <div style={{ color: '#64748b', fontSize: 13, marginTop: 8 }}>
              This will analyse Botany chapter tests and flag questions mapped to the wrong NCERT chapter.
            </div>
          </div>
        )}

        {/* Running state */}
        {running && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#94a3b8' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            Running chapter mapping audit…
          </div>
        )}

      </main>
    </div>
  );
}

