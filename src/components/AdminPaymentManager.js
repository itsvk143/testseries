'use client';
import { useState, useEffect } from 'react';
import styles from './AdminPaymentManager.module.css';

export default function AdminPaymentManager() {
    const [activeTab, setActiveTab] = useState('transactions'); // 'transactions' | 'coupons'

    // ==========================================
    // 1. Transactions State
    // ==========================================
    const [payments, setPayments] = useState([]);
    const [metrics, setMetrics] = useState({
        totalPayments: 0,
        successfulPayments: 0,
        pendingPayments: 0,
        failedPayments: 0,
        refundedPayments: 0,
        totalRevenue: 0
    });
    const [pagination, setPagination] = useState({ page: 1, limit: 25, total: 0, totalPages: 1 });
    const [loadingPayments, setLoadingPayments] = useState(true);

    // Filters for transactions
    const [search, setSearch] = useState('');
    const [examFilter, setExamFilter] = useState('ALL');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    // Detail Modal & Refund State
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [refunding, setRefunding] = useState(false);

    // ==========================================
    // 2. Teacher Coupons State
    // ==========================================
    const [coupons, setCoupons] = useState([]);
    const [couponMetrics, setCouponMetrics] = useState({
        totalTeachers: 0,
        activeCoupons: 0,
        totalReferredStudents: 0,
        successfulReferralPayments: 0,
        referralRevenue: 0
    });
    const [loadingCoupons, setLoadingCoupons] = useState(false);
    const [couponSearch, setCouponSearch] = useState('');
    const [couponStatusFilter, setCouponStatusFilter] = useState('ALL');

    // Add / Edit Coupon Modal State
    const [couponModalOpen, setCouponModalOpen] = useState(false);
    const [editingCoupon, setEditingCoupon] = useState(null); // null for new, object for edit
    const [couponForm, setCouponForm] = useState({ teacherName: '', couponCode: '', status: 'Active' });
    const [couponFormSaving, setCouponFormSaving] = useState(false);
    const [couponFormError, setCouponFormError] = useState('');

    useEffect(() => {
        if (activeTab === 'transactions') {
            fetchPayments(1);
        } else if (activeTab === 'coupons') {
            fetchCoupons();
        }
    }, [activeTab, examFilter, statusFilter, dateFrom, dateTo, couponStatusFilter]);

    // ==========================================
    // Fetch Payments
    // ==========================================
    const fetchPayments = async (page = 1) => {
        try {
            setLoadingPayments(true);
            const params = new URLSearchParams({
                page: String(page),
                limit: '25',
                search,
                exam: examFilter,
                status: statusFilter
            });
            if (dateFrom) params.append('dateFrom', dateFrom);
            if (dateTo) params.append('dateTo', dateTo);

            const res = await fetch(`/api/admin/payments?${params.toString()}`);
            const data = await res.json();

            if (res.ok) {
                setPayments(data.payments || []);
                setMetrics(data.metrics || {});
                setPagination(data.pagination || { page, limit: 25, total: 0, totalPages: 1 });
            }
        } catch (err) {
            console.error('Failed to load admin payments:', err);
        } finally {
            setLoadingPayments(false);
        }
    };

    // ==========================================
    // Fetch Teacher Coupons
    // ==========================================
    const fetchCoupons = async () => {
        try {
            setLoadingCoupons(true);
            const params = new URLSearchParams();
            if (couponSearch) params.append('search', couponSearch);
            if (couponStatusFilter !== 'ALL') params.append('status', couponStatusFilter);

            const res = await fetch(`/api/admin/teacher-coupons?${params.toString()}`);
            const data = await res.json();

            if (res.ok) {
                setCoupons(data.coupons || []);
                setCouponMetrics(data.metrics || {});
            }
        } catch (err) {
            console.error('Failed to load teacher coupons:', err);
        } finally {
            setLoadingCoupons(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchPayments(1);
    };

    const handleReset = () => {
        setSearch('');
        setExamFilter('ALL');
        setStatusFilter('ALL');
        setDateFrom('');
        setDateTo('');
        fetchPayments(1);
    };

    const handleInitiateRefund = async (paymentId) => {
        const confirmMsg = 'Are you sure you want to refund this payment via Razorpay? This will immediately revoke the student\'s test access.';
        if (!window.confirm(confirmMsg)) return;

        const reason = window.prompt('Enter reason for refund (optional):', 'Requested by student') || 'Admin refund';

        try {
            setRefunding(true);
            const res = await fetch(`/api/admin/payments/${paymentId}/refund`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reason })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                alert('Refund successfully initiated via Razorpay!');
                setSelectedPayment(null);
                fetchPayments(pagination.page);
            } else {
                alert(`Refund failed: ${data.message || data.error}`);
            }
        } catch (err) {
            console.error('Refund request failed:', err);
            alert('Network error while processing refund.');
        } finally {
            setRefunding(false);
        }
    };

    // ==========================================
    // Teacher Coupon Handlers
    // ==========================================
    const handleOpenAddCoupon = () => {
        setEditingCoupon(null);
        setCouponForm({ teacherName: '', couponCode: '', status: 'Active' });
        setCouponFormError('');
        setCouponModalOpen(true);
    };

    const handleOpenEditCoupon = (coupon) => {
        setEditingCoupon(coupon);
        setCouponForm({
            teacherName: coupon.teacherName,
            couponCode: coupon.couponCode,
            status: coupon.status
        });
        setCouponFormError('');
        setCouponModalOpen(true);
    };

    const handleSaveCoupon = async (e) => {
        e.preventDefault();
        const teacherName = (couponForm.teacherName || '').trim();
        const couponCode = (couponForm.couponCode || '').trim().toUpperCase();

        if (!teacherName) {
            setCouponFormError('Teacher Name is required.');
            return;
        }

        if (!couponCode) {
            setCouponFormError('Coupon Code is required.');
            return;
        }

        try {
            setCouponFormSaving(true);
            setCouponFormError('');

            const url = editingCoupon
                ? `/api/admin/teacher-coupons/${editingCoupon._id}`
                : '/api/admin/teacher-coupons';
            const method = editingCoupon ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    teacherName,
                    couponCode,
                    status: couponForm.status
                })
            });

            const data = await res.json();

            if (res.ok) {
                setCouponModalOpen(false);
                fetchCoupons();
            } else {
                setCouponFormError(data.error || 'Failed to save coupon.');
            }
        } catch (err) {
            console.error('Error saving teacher coupon:', err);
            setCouponFormError('Network error while saving coupon.');
        } finally {
            setCouponFormSaving(false);
        }
    };

    const handleToggleCouponStatus = async (coupon) => {
        const nextStatus = coupon.status === 'Active' ? 'Inactive' : 'Active';
        try {
            const res = await fetch(`/api/admin/teacher-coupons/${coupon._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: nextStatus })
            });

            if (res.ok) {
                fetchCoupons();
            } else {
                const data = await res.json();
                alert(`Failed to update status: ${data.error}`);
            }
        } catch (err) {
            console.error('Toggle status error:', err);
            alert('Network error while updating status.');
        }
    };

    const handleDeleteCoupon = async (coupon) => {
        if (!window.confirm(`Are you sure you want to delete coupon ${coupon.couponCode} (${coupon.teacherName})?`)) {
            return;
        }

        try {
            const res = await fetch(`/api/admin/teacher-coupons/${coupon._id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                fetchCoupons();
            } else {
                const data = await res.json();
                alert(`Failed to delete coupon: ${data.error}`);
            }
        } catch (err) {
            console.error('Delete coupon error:', err);
            alert('Network error while deleting coupon.');
        }
    };

    // Helper for canonical paymentStatus badge style
    const getCanonicalStatusClass = (status) => {
        switch (status) {
            case 'PAID':
                return styles.statusPaid;
            case 'PAYMENT_PENDING':
            case 'ORDER_CREATED':
            case 'CREATED':
            case 'COUPON_VALIDATED':
                return styles.statusPending;
            case 'PAYMENT_VERIFICATION':
                return styles.statusVerification;
            case 'VERIFICATION_FAILED':
            case 'FAILED':
            case 'CANCELLED':
                return styles.statusFailed;
            case 'REFUNDED':
                return styles.statusRefunded;
            default:
                return styles.statusPending;
        }
    };

    return (
        <div className={styles.container}>
            {/* Navigation Tabs */}
            <div className={styles.dashboardTabs}>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'transactions' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('transactions')}
                >
                    💳 Payment Transactions
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'coupons' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('coupons')}
                >
                    🏷️ Teacher Coupons
                </button>
            </div>

            {/* ========================================================
                TAB 1: TRANSACTIONS
            ======================================================== */}
            {activeTab === 'transactions' && (
                <>
                    {/* 1. Metrics Cards */}
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Total Revenue</span>
                            <span className={`${styles.metricValue} ${styles.metricRevenue}`}>
                                ₹{metrics.totalRevenue?.toLocaleString('en-IN') || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Total Transactions</span>
                            <span className={styles.metricValue}>{metrics.totalPayments || 0}</span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Successful (PAID)</span>
                            <span className={`${styles.metricValue} ${styles.metricPaid}`}>
                                {metrics.successfulPayments || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Pending / In Progress</span>
                            <span className={`${styles.metricValue} ${styles.metricPending}`}>
                                {metrics.pendingPayments || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Failed / Cancelled</span>
                            <span className={`${styles.metricValue} ${styles.metricFailed}`}>
                                {metrics.failedPayments || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Refunded</span>
                            <span className={`${styles.metricValue} ${styles.metricRefunded}`}>
                                {metrics.refundedPayments || 0}
                            </span>
                        </div>
                    </div>

                    {/* 2. Controls, Search & Filters */}
                    <div className={styles.controlsPanel}>
                        <form onSubmit={handleSearchSubmit} className={styles.searchBox}>
                            <input
                                type="text"
                                placeholder="Search student, code, email, teacher, or coupon..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className={styles.searchInput}
                            />
                        </form>

                        <div className={styles.filterGroup}>
                            <select
                                value={examFilter}
                                onChange={(e) => setExamFilter(e.target.value)}
                                className={styles.selectInput}
                            >
                                <option value="ALL">All Exams</option>
                                <option value="NEET">NEET</option>
                                <option value="JEE_MAIN">JEE Mains</option>
                                <option value="BITSAT">BITSAT</option>
                            </select>

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className={styles.selectInput}
                            >
                                <option value="ALL">All Statuses</option>
                                <option value="PAID">PAID</option>
                                <option value="ORDER_CREATED">ORDER_CREATED</option>
                                <option value="PAYMENT_PENDING">PAYMENT_PENDING</option>
                                <option value="PAYMENT_VERIFICATION">PAYMENT_VERIFICATION</option>
                                <option value="VERIFICATION_FAILED">VERIFICATION_FAILED</option>
                                <option value="FAILED">FAILED</option>
                                <option value="CANCELLED">CANCELLED</option>
                                <option value="REFUNDED">REFUNDED</option>
                            </select>

                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                                className={styles.dateInput}
                                title="From Date"
                            />

                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                                className={styles.dateInput}
                                title="To Date"
                            />

                            <button
                                type="button"
                                onClick={handleReset}
                                className={styles.resetBtn}
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* 3. Payments Table (Section 19 & 53 Requirements) */}
                    <div className={styles.tableCard}>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Student</th>
                                        <th className={styles.th}>Exam</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Original Amount</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Discount</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Final Amount</th>
                                        <th className={styles.th}>Payment Status</th>
                                        <th className={styles.th}>Teacher</th>
                                        <th className={styles.th}>Coupon</th>
                                        <th className={styles.th}>Date</th>
                                        <th className={styles.th}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loadingPayments ? (
                                        <tr>
                                            <td colSpan="10" style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                                                Loading payments...
                                            </td>
                                        </tr>
                                    ) : payments.length === 0 ? (
                                        <tr>
                                            <td colSpan="10" className={styles.emptyState}>
                                                No payment records found matching your filters.
                                            </td>
                                        </tr>
                                    ) : (
                                        payments.map((p) => (
                                            <tr key={p._id} className={styles.tr}>
                                                <td className={styles.td}>
                                                    <div className={styles.studentName}>{p.studentName || 'Student'}</div>
                                                    <span className={styles.studentCode}>{p.studentCode || 'N/A'}</span>
                                                </td>
                                                <td className={styles.td}>
                                                    <span style={{ fontWeight: '600', color: '#38bdf8' }}>{p.exam}</span>
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right', color: '#94a3b8' }}>
                                                    ₹{p.originalAmount?.toLocaleString('en-IN') || 1099}
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right', color: p.discountAmount > 0 ? '#34d399' : '#94a3b8' }}>
                                                    {p.discountAmount > 0 ? `₹${p.discountAmount}` : '₹0'}
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right' }}>
                                                    <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>
                                                        ₹{p.finalAmount?.toLocaleString('en-IN') || p.amount || 1099}
                                                    </strong>
                                                </td>
                                                <td className={styles.td}>
                                                    <span className={`${styles.statusBadge} ${getCanonicalStatusClass(p.paymentStatus)}`}>
                                                        {p.paymentStatus}
                                                    </span>
                                                </td>
                                                <td className={styles.td}>
                                                    {p.teacherName ? (
                                                        <span style={{ color: '#e2e8f0', fontWeight: '500' }}>{p.teacherName}</span>
                                                    ) : (
                                                        <span style={{ color: '#64748b' }}>—</span>
                                                    )}
                                                </td>
                                                <td className={styles.td}>
                                                    {p.couponCode ? (
                                                        <span style={{ fontFamily: 'monospace', color: '#c4b5fd', fontWeight: '700' }}>
                                                            {p.couponCode}
                                                        </span>
                                                    ) : (
                                                        <span style={{ color: '#64748b' }}>—</span>
                                                    )}
                                                </td>
                                                <td className={styles.td} style={{ fontSize: '0.8rem' }}>
                                                    {new Date(p.createdAt).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td className={styles.td}>
                                                    <button
                                                        type="button"
                                                        className={styles.actionBtn}
                                                        onClick={() => setSelectedPayment(p)}
                                                    >
                                                        Details
                                                    </button>

                                                    {p.paymentStatus === 'PAID' && (
                                                        <button
                                                            type="button"
                                                            className={styles.refundBtn}
                                                            onClick={() => handleInitiateRefund(p._id)}
                                                            disabled={refunding}
                                                        >
                                                            Refund
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <div className={styles.pagination}>
                                <span>
                                    Showing Page {pagination.page} of {pagination.totalPages} ({pagination.total} records)
                                </span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        type="button"
                                        className={styles.pageBtn}
                                        onClick={() => fetchPayments(pagination.page - 1)}
                                        disabled={pagination.page <= 1}
                                    >
                                        &larr; Prev
                                    </button>
                                    <button
                                        type="button"
                                        className={styles.pageBtn}
                                        onClick={() => fetchPayments(pagination.page + 1)}
                                        disabled={pagination.page >= pagination.totalPages}
                                    >
                                        Next &rarr;
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* ========================================================
                TAB 2: TEACHER COUPONS (Section 2, 3, 5, 56 Requirements)
            ======================================================== */}
            {activeTab === 'coupons' && (
                <>
                    {/* 1. Admin Summary Cards (Section 56 Requirement) */}
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Total Teachers</span>
                            <span className={styles.metricValue}>{couponMetrics.totalTeachers || 0}</span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Active Coupons</span>
                            <span className={`${styles.metricValue} ${styles.metricPaid}`}>
                                {couponMetrics.activeCoupons || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Total Referred Students</span>
                            <span className={`${styles.metricValue} ${styles.metricRevenue}`}>
                                {couponMetrics.totalReferredStudents || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Successful Referral Payments</span>
                            <span className={`${styles.metricValue} ${styles.metricPaid}`}>
                                {couponMetrics.successfulReferralPayments || 0}
                            </span>
                        </div>

                        <div className={styles.metricCard}>
                            <span className={styles.metricLabel}>Referral Revenue</span>
                            <span className={`${styles.metricValue} ${styles.metricRevenue}`}>
                                ₹{couponMetrics.referralRevenue?.toLocaleString('en-IN') || 0}
                            </span>
                        </div>
                    </div>

                    {/* 2. Controls & Add Coupon Button */}
                    <div className={styles.couponHeaderSection}>
                        <h2 className={styles.sectionHeading}>
                            <span>🏷️</span> Teacher Referral Coupons
                        </h2>
                        <button
                            type="button"
                            className={styles.addCouponBtn}
                            onClick={handleOpenAddCoupon}
                        >
                            <span>+</span> Add Teacher Coupon
                        </button>
                    </div>

                    <div className={styles.controlsPanel}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                placeholder="Search by teacher name or coupon code..."
                                value={couponSearch}
                                onChange={(e) => setCouponSearch(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>

                        <div className={styles.filterGroup}>
                            <select
                                value={couponStatusFilter}
                                onChange={(e) => setCouponStatusFilter(e.target.value)}
                                className={styles.selectInput}
                            >
                                <option value="ALL">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>

                            <button
                                type="button"
                                onClick={() => { setCouponSearch(''); setCouponStatusFilter('ALL'); fetchCoupons(); }}
                                className={styles.resetBtn}
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* 3. Teacher Coupons Management Table (Section 5 Requirement) */}
                    <div className={styles.tableCard}>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Teacher Name</th>
                                        <th className={styles.th}>Coupon Code</th>
                                        <th className={styles.th}>Status</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Referred Students</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Successful Payments</th>
                                        <th className={styles.th} style={{ textAlign: 'right' }}>Revenue</th>
                                        <th className={styles.th}>Created Date</th>
                                        <th className={styles.th}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loadingCoupons ? (
                                        <tr>
                                            <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                                                Loading teacher coupons...
                                            </td>
                                        </tr>
                                    ) : coupons.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className={styles.emptyState}>
                                                No teacher coupons found. Click "+ Add Teacher Coupon" to create one.
                                            </td>
                                        </tr>
                                    ) : (
                                        coupons.map((c) => (
                                            <tr key={c._id} className={styles.tr}>
                                                <td className={styles.td}>
                                                    <strong style={{ color: '#f8fafc' }}>{c.teacherName}</strong>
                                                </td>
                                                <td className={styles.td}>
                                                    <span style={{ fontFamily: 'monospace', fontWeight: '800', color: '#a78bfa', fontSize: '0.92rem' }}>
                                                        {c.couponCode}
                                                    </span>
                                                </td>
                                                <td className={styles.td}>
                                                    <span className={`${styles.statusBadge} ${c.status === 'Active' ? styles.statusActive : styles.statusInactive}`}>
                                                        {c.status}
                                                    </span>
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right' }}>
                                                    {c.referredStudents || 0}
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right' }}>
                                                    {c.successfulPayments || 0}
                                                </td>
                                                <td className={styles.td} style={{ textAlign: 'right' }}>
                                                    <strong style={{ color: '#38bdf8' }}>
                                                        ₹{(c.revenue || 0).toLocaleString('en-IN')}
                                                    </strong>
                                                </td>
                                                <td className={styles.td} style={{ fontSize: '0.8rem' }}>
                                                    {new Date(c.createdAt).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td className={styles.td}>
                                                    <button
                                                        type="button"
                                                        className={styles.actionBtn}
                                                        onClick={() => handleOpenEditCoupon(c)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className={styles.toggleBtn}
                                                        onClick={() => handleToggleCouponStatus(c)}
                                                    >
                                                        {c.status === 'Active' ? 'Deactivate' : 'Activate'}
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className={styles.deleteBtn}
                                                        onClick={() => handleDeleteCoupon(c)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* ========================================================
                MODAL 1: ADD / EDIT TEACHER COUPON
            ======================================================== */}
            {couponModalOpen && (
                <div className={styles.modalBackdrop} onClick={() => setCouponModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                {editingCoupon ? 'Edit Teacher Coupon' : 'Add Teacher Coupon'}
                            </h3>
                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={() => setCouponModalOpen(false)}
                            >
                                &times;
                            </button>
                        </div>

                        {couponFormError && (
                            <div className={styles.formError} style={{ marginBottom: '1rem' }}>
                                <span>⚠️</span>
                                <span>{couponFormError}</span>
                            </div>
                        )}

                        <form onSubmit={handleSaveCoupon} className={styles.modalForm}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Teacher Name *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Vikash Kumar"
                                    value={couponForm.teacherName}
                                    onChange={(e) => setCouponForm({ ...couponForm, teacherName: e.target.value })}
                                    className={styles.formInput}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Coupon Code *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. VIKASH10"
                                    value={couponForm.couponCode}
                                    onChange={(e) => setCouponForm({ ...couponForm, couponCode: e.target.value.toUpperCase().trim() })}
                                    className={styles.formInput}
                                    style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Status</label>
                                <select
                                    value={couponForm.status}
                                    onChange={(e) => setCouponForm({ ...couponForm, status: e.target.value })}
                                    className={styles.formSelect}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            <div className={styles.formActions}>
                                <button
                                    type="button"
                                    className={styles.cancelBtn}
                                    onClick={() => setCouponModalOpen(false)}
                                    disabled={couponFormSaving}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={styles.saveBtn}
                                    disabled={couponFormSaving}
                                >
                                    {couponFormSaving ? 'Saving...' : editingCoupon ? 'Update Coupon' : 'Create Coupon'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ========================================================
                MODAL 2: PAYMENT TRANSACTION DETAILS
            ======================================================== */}
            {selectedPayment && (
                <div className={styles.modalBackdrop} onClick={() => setSelectedPayment(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Payment Transaction Details</h3>
                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={() => setSelectedPayment(null)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Database Record ID:</span>
                            <span className={styles.detailValue} style={{ fontFamily: 'monospace' }}>
                                {selectedPayment._id}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Student Name:</span>
                            <span className={styles.detailValue}>{selectedPayment.studentName}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Student Code:</span>
                            <span className={styles.detailValue} style={{ fontFamily: 'monospace', color: '#c4b5fd' }}>
                                {selectedPayment.studentCode || 'N/A'}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Email:</span>
                            <span className={styles.detailValue}>{selectedPayment.email}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Mobile:</span>
                            <span className={styles.detailValue}>{selectedPayment.mobile || '—'}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Registered Exam:</span>
                            <span className={styles.detailValue} style={{ color: '#38bdf8' }}>
                                {selectedPayment.exam}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Product:</span>
                            <span className={styles.detailValue}>{selectedPayment.productName}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Original Amount:</span>
                            <span className={styles.detailValue}>
                                ₹{selectedPayment.originalAmount?.toLocaleString('en-IN') || 1099}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Referral Discount:</span>
                            <span className={styles.detailValue} style={{ color: selectedPayment.discountAmount > 0 ? '#34d399' : '#94a3b8' }}>
                                {selectedPayment.discountAmount > 0 ? `-₹${selectedPayment.discountAmount}` : '₹0'}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Final Paid Amount:</span>
                            <span className={styles.detailValue} style={{ color: '#34d399', fontWeight: '800' }}>
                                ₹{selectedPayment.finalAmount?.toLocaleString('en-IN') || selectedPayment.amount} {selectedPayment.currency || 'INR'}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Canonical Payment Status:</span>
                            <span className={`${styles.statusBadge} ${getCanonicalStatusClass(selectedPayment.paymentStatus)}`}>
                                {selectedPayment.paymentStatus}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Amount Cryptographically Verified:</span>
                            <span className={styles.detailValue} style={{ color: selectedPayment.amountVerified ? '#34d399' : '#f87171' }}>
                                {selectedPayment.amountVerified ? 'YES (Verified)' : 'NO (Unverified)'}
                            </span>
                        </div>

                        {selectedPayment.teacherName && (
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Referring Teacher:</span>
                                <span className={styles.detailValue} style={{ color: '#f8fafc', fontWeight: '600' }}>
                                    {selectedPayment.teacherName}
                                </span>
                            </div>
                        )}

                        {selectedPayment.couponCode && (
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Referral Coupon Code:</span>
                                <span className={styles.detailValue} style={{ fontFamily: 'monospace', color: '#c4b5fd', fontWeight: '700' }}>
                                    {selectedPayment.couponCode}
                                </span>
                            </div>
                        )}

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Razorpay Order ID:</span>
                            <span className={styles.detailValue} style={{ fontFamily: 'monospace' }}>
                                {selectedPayment.razorpayOrderId}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Razorpay Payment ID:</span>
                            <span className={styles.detailValue} style={{ fontFamily: 'monospace' }}>
                                {selectedPayment.razorpayPaymentId || '—'}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Receipt Number:</span>
                            <span className={styles.detailValue} style={{ fontFamily: 'monospace' }}>
                                {selectedPayment.receipt || '—'}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Created At:</span>
                            <span className={styles.detailValue}>
                                {new Date(selectedPayment.createdAt).toLocaleString('en-IN')}
                            </span>
                        </div>

                        {selectedPayment.paidAt && (
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Paid At:</span>
                                <span className={styles.detailValue}>
                                    {new Date(selectedPayment.paidAt).toLocaleString('en-IN')}
                                </span>
                            </div>
                        )}

                        {selectedPayment.failureReason && (
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Failure Reason:</span>
                                <span className={styles.detailValue} style={{ color: '#f87171' }}>
                                    {selectedPayment.failureReason}
                                </span>
                            </div>
                        )}

                        {selectedPayment.refundId && (
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Refund ID:</span>
                                <span className={styles.detailValue} style={{ fontFamily: 'monospace' }}>
                                    {selectedPayment.refundId}
                                </span>
                            </div>
                        )}

                        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            {selectedPayment.paymentStatus === 'PAID' && (
                                <button
                                    type="button"
                                    className={styles.refundBtn}
                                    onClick={() => handleInitiateRefund(selectedPayment._id)}
                                    disabled={refunding}
                                >
                                    Initiate Official Refund
                                </button>
                            )}
                            <button
                                type="button"
                                className={styles.cancelBtn}
                                onClick={() => setSelectedPayment(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
