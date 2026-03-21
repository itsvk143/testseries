'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminUserList.module.css';

const DEFAULT_APPROVALS = { mock: true, live: true, pyq: true, subject: true, chapter: true };

const TEST_TYPES = [
    { key: 'mock',    label: 'Mock',    icon: '📝' },
    { key: 'live',    label: 'Live',    icon: '🔴' },
    { key: 'pyq',     label: 'PYQ',     icon: '📚' },
    { key: 'subject', label: 'Subject', icon: '🔬' },
    { key: 'chapter', label: 'Chapter', icon: '📖' },
];


export default function AdminUserList() {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
    const [updatingUser, setUpdatingUser] = useState(null);
    const [deletingUser, setDeletingUser] = useState(null);
    const [bulkUpdating, setBulkUpdating] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        exam: '',
        yearJoined: '',
        role: '',
        state: '',
        city: '',
        school: '',
        coaching: '',
        approvalStatus: '',
        liveApproval: '',
        subjectApproval: '',
        chapterApproval: '',
        mockApproval: '',
        pyqApproval: '',
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/admin/users');
                if (!response.ok) throw new Error(await response.text());
                const data = await response.json();
                // Ensure every user has full approvals with defaults
                const normalized = data.map(u => ({
                    ...u,
                    approvals: { ...DEFAULT_APPROVALS, ...(u.approvals || {}) }
                }));
                setUsers(normalized);
            } catch (err) {
                setError(err.message || 'Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleSort = (key) => {
        let direction = 'desc';
        if (sortConfig.key === key && sortConfig.direction === 'desc') direction = 'asc';
        setSortConfig({ key, direction });
    };

    const saveApprovals = async (userId, newApprovals) => {
        setUpdatingUser(userId);
        try {
            const res = await fetch(`/api/admin/users/${userId}/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ approvals: newApprovals })
            });
            if (!res.ok) throw new Error('Failed to update');
        } catch (error) {
            console.error('Error saving approvals:', error);
            alert('Failed to update permissions. Reverting...');
            // Revert
            const response = await fetch('/api/admin/users');
            const data = await response.json();
            setUsers(data.map(u => ({ ...u, approvals: { ...DEFAULT_APPROVALS, ...(u.approvals || {}) } })));
        } finally {
            setUpdatingUser(null);
        }
    };

    const handleTypeToggle = (e, userId, typeKey, currentApprovals) => {
        e.stopPropagation();
        const newApprovals = { ...currentApprovals, [typeKey]: !currentApprovals[typeKey] };
        // Optimistic update
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, approvals: newApprovals } : u));
        saveApprovals(userId, newApprovals);
    };

    const handleApproveAll = (e, userId) => {
        e.stopPropagation();
        const all = { ...DEFAULT_APPROVALS };
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, approvals: all } : u));
        saveApprovals(userId, all);
    };

    const handleRevokeAll = (e, userId) => {
        e.stopPropagation();
        const none = { mock: false, live: false, pyq: false, subject: false, chapter: false };
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, approvals: none } : u));
        saveApprovals(userId, none);
    };

    const handleDeleteUser = async (e, userId, userName) => {
        e.stopPropagation();
        if (!confirm(`Are you sure you want to permanently delete "${userName || 'this user'}"?\nThis will also delete all their test results and cannot be undone.`)) return;

        setDeletingUser(userId);
        try {
            const res = await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' });
            const data = await res.json();
            if (!res.ok) {
                alert(data.error || 'Failed to delete user.');
                return;
            }
            // Remove from local state
            setUsers(prev => prev.filter(u => u._id !== userId));
        } catch (err) {
            console.error('Delete failed:', err);
            alert('An error occurred while deleting the user.');
        } finally {
            setDeletingUser(null);
          }
    };
 
    const handleBulkApprove = async (mode = 'full') => {
        const studentIds = filteredAndSortedUsers
            .filter(u => !(u.isAdmin || u.role === 'admin'))
            .map(u => u._id);
 
        if (studentIds.length === 0) {
            alert('No students found in the filtered list to approve.');
            return;
        }
 
        let confirmMsg = `Are you sure you want to approve all ${studentIds.length} students in the current filtered list for FULL access?`;
        let payload = { userIds: studentIds, approvals: DEFAULT_APPROVALS };
 
        if (mode !== 'full') {
            confirmMsg = `Are you sure you want to approve ${mode.toUpperCase()} access for all ${studentIds.length} filtered students?`;
            payload = { userIds: studentIds, category: mode };
        }
 
        if (!confirm(confirmMsg)) return;
 
        setBulkUpdating(true);
        try {
            const res = await fetch('/api/admin/users/bulk-approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
 
            if (!res.ok) throw new Error('Bulk update failed');
 
            // Optimistic update of local state
            setUsers(prev => prev.map(u => {
                if (!studentIds.includes(u._id)) return u;
                
                const newApprovals = mode === 'full' 
                    ? { ...DEFAULT_APPROVALS } 
                    : { ...u.approvals, [mode]: true };
                
                const isApproved = Object.values(newApprovals).every(v => v === true);
                return { ...u, approvals: newApprovals, isApproved };
            }));
            
            alert(`Successfully updated ${studentIds.length} students.`);
        } catch (err) {
            console.error('Bulk approval failed:', err);
            alert('Failed to perform bulk approval.');
        } finally {
            setBulkUpdating(false);
        }
    };

    const activeFilterCount = Object.values(filters).filter(v => v !== '').length;

    const filteredAndSortedUsers = useMemo(() => {
        if (!users.length) return [];
        let filtered = users.filter((user) => {
            // Text search
            const s = searchTerm.toLowerCase();
            if (s && 
                !user.name?.toLowerCase().includes(s) && 
                !user.email?.toLowerCase().includes(s) &&
                !user.mobileNo?.toLowerCase().includes(s)
            ) return false;

            // Exam filter
            if (filters.exam && user.examPreparingFor !== filters.exam) return false;

            // Role filter
            if (filters.role) {
                const isAdmin = user.isAdmin || user.role === 'admin';
                if (filters.role === 'admin' && !isAdmin) return false;
                if (filters.role === 'student' && isAdmin) return false;
            }

            // Year joined filter
            if (filters.yearJoined) {
                const dateVal = user.createdAt || user.profileCompletedAt;
                const year = dateVal ? new Date(dateVal).getFullYear().toString() : '';
                if (year !== filters.yearJoined) return false;
            }

            // State filter
            if (filters.state && !user.state?.toLowerCase().includes(filters.state.toLowerCase())) return false;

            // City filter
            if (filters.city && !user.city?.toLowerCase().includes(filters.city.toLowerCase())) return false;

            // School filter
            if (filters.school && !user.schoolName?.toLowerCase().includes(filters.school.toLowerCase())) return false;

            // Coaching filter
            if (filters.coaching && !user.coachingName?.toLowerCase().includes(filters.coaching.toLowerCase())) return false;

            // Approval Status filter (Overall)
            if (filters.approvalStatus) {
                const isAdmin = user.isAdmin || user.role === 'admin';
                if (isAdmin) {
                    if (filters.approvalStatus === 'not_approved') return false;
                } else {
                    const approvals = user.approvals || DEFAULT_APPROVALS;
                    const approvedCount = Object.values(approvals).filter(Boolean).length;
                    const totalCount = Object.keys(DEFAULT_APPROVALS).length;

                    if (filters.approvalStatus === 'approved' && approvedCount < totalCount) return false;
                    if (filters.approvalStatus === 'partial' && (approvedCount === 0 || approvedCount === totalCount)) return false;
                    if (filters.approvalStatus === 'not_approved' && approvedCount > 0) return false;
                }
            }

            // Granular Approval Filters
            const approvals = user.approvals || DEFAULT_APPROVALS;
            const isAdmin = user.isAdmin || user.role === 'admin';

            if (filters.liveApproval) {
                const hasLive = isAdmin || !!approvals.live;
                if (filters.liveApproval === 'yes' && !hasLive) return false;
                if (filters.liveApproval === 'no' && hasLive) return false;
            }

            if (filters.subjectApproval) {
                const hasSubject = isAdmin || !!approvals.subject;
                if (filters.subjectApproval === 'yes' && !hasSubject) return false;
                if (filters.subjectApproval === 'no' && hasSubject) return false;
            }

            if (filters.chapterApproval) {
                const hasChapter = isAdmin || !!approvals.chapter;
                if (filters.chapterApproval === 'yes' && !hasChapter) return false;
                if (filters.chapterApproval === 'no' && hasChapter) return false;
            }

            if (filters.mockApproval) {
                const hasMock = isAdmin || !!approvals.mock;
                if (filters.mockApproval === 'yes' && !hasMock) return false;
                if (filters.mockApproval === 'no' && hasMock) return false;
            }

            if (filters.pyqApproval) {
                const hasPyq = isAdmin || !!approvals.pyq;
                if (filters.pyqApproval === 'yes' && !hasPyq) return false;
                if (filters.pyqApproval === 'no' && hasPyq) return false;
            }

            return true;
        });

        filtered.sort((a, b) => {
            let valA = a[sortConfig.key] ?? '';
            let valB = b[sortConfig.key] ?? '';
            if (sortConfig.key === 'createdAt') {
                valA = new Date(valA).getTime() || 0;
                valB = new Date(valB).getTime() || 0;
                return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
            }
            if (typeof valA === 'number') return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
            valA = valA.toString().toLowerCase();
            valB = valB.toString().toLowerCase();
            if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return filtered;
    }, [users, searchTerm, sortConfig, filters]);

    if (loading) return <div className={styles.loading}>Loading Platform Users...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    const formatDate = (dateString, fallback) => {
        const d = new Date(dateString || fallback);
        if (!dateString && !fallback) return 'N/A';
        if (isNaN(d.getTime())) return 'N/A';
        return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    // Build unique option lists for dropdowns from the loaded users
    const uniqueExams  = [...new Set(users.map(u => u.examPreparingFor).filter(Boolean))].sort();
    const uniqueStates = [...new Set(users.map(u => u.state).filter(Boolean))].sort();
    const uniqueCities = [...new Set(users.map(u => u.city).filter(Boolean))].sort();
    const uniqueYears  = [...new Set(users.map(u => {
        const d = u.createdAt || u.profileCompletedAt;
        return d ? new Date(d).getFullYear().toString() : null;
    }).filter(Boolean))].sort().reverse();

    const setFilter = (key, val) => setFilters(prev => ({ ...prev, [key]: val }));
    const resetFilters = () => setFilters({ 
        exam: '', yearJoined: '', role: '', state: '', city: '', school: '', coaching: '', 
        approvalStatus: '', liveApproval: '', subjectApproval: '', chapterApproval: '',
        mockApproval: '', pyqApproval: ''
    });

    const selStyle = {
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
        color: 'white', borderRadius: '10px', padding: '8px 12px', fontSize: '0.85rem', minWidth: '130px',
    };
    const txtStyle = {
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
        color: 'white', borderRadius: '10px', padding: '8px 12px', fontSize: '0.85rem', minWidth: '130px',
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>User Directory</h2>
                    <p className={styles.subtitle}>
                        {filteredAndSortedUsers.length} of {users.length} account{users.length !== 1 ? 's' : ''}
                        {(searchTerm || activeFilterCount > 0) ? ' (filtered)' : ' registered'}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Search name or email..."
                        className={styles.search}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={() => setShowFilters(f => !f)}
                        style={{
                            padding: '9px 16px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700',
                            fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.2)',
                            background: showFilters ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.07)',
                            color: showFilters ? '#c4b5fd' : '#94a3b8', transition: 'all 0.2s',
                            position: 'relative',
                        }}
                    >
                        🔍 Filters {activeFilterCount > 0 && (
                            <span style={{
                                position: 'absolute', top: '-8px', right: '-8px', background: '#7c3aed',
                                color: 'white', borderRadius: '50%', width: '18px', height: '18px',
                                fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800',
                            }}>{activeFilterCount}</span>
                         )}
                     </button>
                     {filteredAndSortedUsers.length > 0 && (
                         <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
                             <button
                                 onClick={() => handleBulkApprove('full')}
                                 disabled={bulkUpdating}
                                 style={{
                                     padding: '9px 16px', borderRadius: '10px', cursor: bulkUpdating ? 'not-allowed' : 'pointer', 
                                     fontWeight: '700', fontSize: '0.85rem', border: '1px solid rgba(16,185,129,0.4)',
                                     background: 'rgba(16,185,129,0.15)', color: '#10b981', transition: 'all 0.2s',
                                     opacity: bulkUpdating ? 0.6 : 1, display: 'flex', alignItems: 'center', gap: '6px'
                                 }}
                             >
                                 {bulkUpdating ? '⌛...' : '✅ Full Approve'}
                             </button>
 
                             <select 
                                 onChange={(e) => {
                                     if (e.target.value) {
                                         handleBulkApprove(e.target.value);
                                         e.target.value = '';
                                     }
                                 }}
                                 disabled={bulkUpdating}
                                 style={{
                                     padding: '9px 12px', borderRadius: '10px', cursor: 'pointer',
                                     background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                                     color: 'white', fontSize: '0.85rem', fontWeight: '600'
                                 }}
                             >
                                 <option value="">Bulk Category...</option>
                                 <option value="live">🔴 Approve Live</option>
                                 <option value="chapter">📖 Approve Chapter</option>
                                 <option value="subject">🔬 Approve Subject</option>
                                 <option value="pyq">📚 Approve PYQ</option>
                                 <option value="mock">📝 Approve Mock</option>
                             </select>
                         </div>
                     )}
                 </div>
             </div>

            {/* Advanced Filter Panel */}
            {showFilters && (
                <div style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px', padding: '20px 24px', marginBottom: '16px',
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' }}>
                        {/* Exam */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>EXAM</label>
                            <select value={filters.exam} onChange={e => setFilter('exam', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                {uniqueExams.map(x => <option key={x} value={x}>{x}</option>)}
                            </select>
                        </div>
                        {/* Role */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>ROLE</label>
                            <select value={filters.role} onChange={e => setFilter('role', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                        {/* Year Joined */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>YEAR JOINED</label>
                            <select value={filters.yearJoined} onChange={e => setFilter('yearJoined', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                {uniqueYears.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>
                        {/* State */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>STATE</label>
                            <select value={filters.state} onChange={e => setFilter('state', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                {uniqueStates.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        {/* City */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>CITY</label>
                            <select value={filters.city} onChange={e => setFilter('city', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        {/* School */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>SCHOOL</label>
                            <input
                                type="text" value={filters.school} placeholder="School name..."
                                onChange={e => setFilter('school', e.target.value)} style={txtStyle}
                            />
                        </div>
                        {/* Overall Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>OVERALL APP.</label>
                            <select value={filters.approvalStatus} onChange={e => setFilter('approvalStatus', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="approved">Full Access</option>
                                <option value="partial">Partial</option>
                                <option value="not_approved">No Access</option>
                            </select>
                        </div>
                        {/* Live Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>LIVE APP.</label>
                            <select value={filters.liveApproval} onChange={e => setFilter('liveApproval', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="yes">Approved</option>
                                <option value="no">Pending</option>
                            </select>
                        </div>
                        {/* Subject Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>SUBJECT APP.</label>
                            <select value={filters.subjectApproval} onChange={e => setFilter('subjectApproval', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="yes">Approved</option>
                                <option value="no">Pending</option>
                            </select>
                        </div>
                        {/* Chapter Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>CHAPTER APP.</label>
                            <select value={filters.chapterApproval} onChange={e => setFilter('chapterApproval', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="yes">Approved</option>
                                <option value="no">Pending</option>
                            </select>
                        </div>
                        {/* Mock Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>MOCK APP.</label>
                            <select value={filters.mockApproval} onChange={e => setFilter('mockApproval', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="yes">Approved</option>
                                <option value="no">Pending</option>
                            </select>
                        </div>
                        {/* PYQ Approval */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>PYQ APP.</label>
                            <select value={filters.pyqApproval} onChange={e => setFilter('pyqApproval', e.target.value)} style={selStyle}>
                                <option value="">All</option>
                                <option value="yes">Approved</option>
                                <option value="no">Pending</option>
                            </select>
                        </div>
                        {/* Coaching */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '700' }}>COACHING</label>
                            <input
                                type="text" value={filters.coaching} placeholder="Coaching name..."
                                onChange={e => setFilter('coaching', e.target.value)} style={txtStyle}
                            />
                        </div>
                        {/* Reset */}
                        {activeFilterCount > 0 && (
                            <button
                                onClick={resetFilters}
                                style={{
                                    padding: '8px 16px', borderRadius: '10px', cursor: 'pointer',
                                    background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.35)',
                                    color: '#ef4444', fontWeight: '700', fontSize: '0.85rem', alignSelf: 'flex-end',
                                }}
                            >
                                ✕ Reset Filters
                            </button>
                        )}
                    </div>
                </div>
            )}

            {filteredAndSortedUsers.length === 0 ? (
                <div className={styles.empty}>No users found.</div>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('name')}>
                                    User {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th onClick={() => handleSort('role')}>
                                    Role {sortConfig.key === 'role' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th onClick={() => handleSort('examPreparingFor')}>
                                    Exam {sortConfig.key === 'examPreparingFor' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th onClick={() => handleSort('testsTaken')}>
                                    Tests {sortConfig.key === 'testsTaken' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th style={{ minWidth: '380px' }}>
                                    Test Access Permissions
                                </th>
                                <th onClick={() => handleSort('createdAt')}>
                                    Joined {sortConfig.key === 'createdAt' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAndSortedUsers.map((user) => {
                                const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';
                                const isAdmin = user.role === 'admin' || user.isAdmin;
                                const approvals = user.approvals || DEFAULT_APPROVALS;
                                const allApproved = Object.values(approvals).every(v => v === true);
                                const isUpdating = updatingUser === user._id;
                                const isDeleting = deletingUser === user._id;

                                return (
                                    <tr
                                        key={user._id}
                                        onClick={() => router.push(`/admin/user/${user._id}`)}
                                        style={{ cursor: 'pointer', opacity: (isUpdating || isDeleting) ? 0.6 : 1, transition: 'opacity 0.2s' }}
                                    >
                                        <td>
                                            <div className={styles.userCell}>
                                                <div className={styles.avatar}>
                                                    {user.image ? <img src={user.image} alt="User Avatar" className={styles.avatarImg} /> : initial}
                                                </div>
                                                <div className={styles.userDetails}>
                                                    <span className={styles.userName}>{user.name || 'Unknown'}</span>
                                                    <span className={styles.userEmail}>{user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.badge} ${isAdmin ? styles.badgeAdmin : styles.badgeUser}`}>
                                                {isAdmin ? 'Admin' : 'Student'}
                                            </span>
                                        </td>
                                        <td>
                                            {user.examPreparingFor ? (
                                                <span style={{
                                                    background: 'rgba(139, 92, 246, 0.15)',
                                                    color: '#c4b5fd',
                                                    padding: '3px 10px',
                                                    borderRadius: '10px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '700',
                                                    border: '1px solid rgba(139,92,246,0.3)',
                                                    whiteSpace: 'nowrap',
                                                }}>{user.examPreparingFor}</span>
                                            ) : (
                                                <span style={{ color: '#64748b', fontSize: '0.8rem' }}>—</span>
                                            )}
                                        </td>
                                        <td>
                                            <span className={styles.statPill}>{user.testsTaken || 0}</span>
                                        </td>
                                        <td>
                                            {isAdmin ? (
                                                <span style={{ color: '#818cf8', fontSize: '0.85rem', fontStyle: 'italic' }}>
                                                    Full access (Admin)
                                                </span>
                                            ) : (
                                                <div
                                                    onClick={(e) => e.stopPropagation()}
                                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                                >
                                                    {/* Per-type checkboxes */}
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                                                        {TEST_TYPES.map(({ key, label, icon }) => (
                                                            <label
                                                                key={key}
                                                                onClick={(e) => handleTypeToggle(e, user._id, key, approvals)}
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '5px',
                                                                    padding: '4px 10px',
                                                                    borderRadius: '20px',
                                                                    background: approvals[key] ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
                                                                    border: `1px solid ${approvals[key] ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`,
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.2s',
                                                                    userSelect: 'none',
                                                                    fontSize: '0.8rem',
                                                                    fontWeight: '600',
                                                                    color: approvals[key] ? '#10b981' : '#ef4444',
                                                                }}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!!approvals[key]}
                                                                    readOnly
                                                                    style={{ accentColor: approvals[key] ? '#10b981' : '#ef4444', cursor: 'pointer', width: '13px', height: '13px' }}
                                                                />
                                                                {icon} {label}
                                                            </label>
                                                        ))}
                                                    </div>

                                                    {/* Action buttons */}
                                                    <div style={{ display: 'flex', gap: '6px' }}>
                                                        <button
                                                            onClick={(e) => handleApproveAll(e, user._id)}
                                                            disabled={allApproved || isUpdating}
                                                            style={{
                                                                fontSize: '0.75rem',
                                                                padding: '3px 10px',
                                                                borderRadius: '12px',
                                                                border: '1px solid rgba(16,185,129,0.4)',
                                                                background: 'rgba(16,185,129,0.1)',
                                                                color: '#10b981',
                                                                cursor: allApproved ? 'not-allowed' : 'pointer',
                                                                opacity: allApproved ? 0.5 : 1,
                                                                transition: 'all 0.2s',
                                                                fontWeight: '600',
                                                            }}
                                                        >
                                                            ✅ Approve All
                                                        </button>
                                                        <button
                                                            onClick={(e) => handleRevokeAll(e, user._id)}
                                                            disabled={isUpdating}
                                                            style={{
                                                                fontSize: '0.75rem',
                                                                padding: '3px 10px',
                                                                borderRadius: '12px',
                                                                border: '1px solid rgba(239,68,68,0.4)',
                                                                background: 'rgba(239,68,68,0.1)',
                                                                color: '#ef4444',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s',
                                                                fontWeight: '600',
                                                            }}
                                                        >
                                                            🚫 Revoke All
                                                        </button>
                                                        {isUpdating && (
                                                            <span style={{ fontSize: '0.75rem', color: '#94a3b8', alignSelf: 'center' }}>Saving...</span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                        <td>{formatDate(user.createdAt, user.profileCompletedAt)}</td>
                                        <td onClick={(e) => e.stopPropagation()}>
                                            {!isAdmin && (
                                                <button
                                                    onClick={(e) => handleDeleteUser(e, user._id, user.name)}
                                                    disabled={isDeleting}
                                                    title="Delete student"
                                                    style={{
                                                        background: 'rgba(239, 68, 68, 0.1)',
                                                        border: '1px solid rgba(239,68,68,0.4)',
                                                        color: '#ef4444',
                                                        padding: '5px 10px',
                                                        borderRadius: '8px',
                                                        cursor: isDeleting ? 'not-allowed' : 'pointer',
                                                        fontSize: '1rem',
                                                        opacity: isDeleting ? 0.5 : 1,
                                                        transition: 'all 0.2s',
                                                    }}
                                                >
                                                    {isDeleting ? '...' : '🗑️'}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
