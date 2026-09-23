'use client';
import { useState, useEffect } from 'react';
import styles from './AdminPaymentManager.module.css';

export default function AdminPaymentManager() {
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
    const [loading, setLoading] = useState(true);

    // Filters
    const [search, setSearch] = useState('');
    const [examFilter, setExamFilter] = useState('ALL');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    // Detail Modal & Refund State
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [refunding, setRefunding] = useState(false);
    const [refundError, setRefundError] = useState('');

    useEffect(() => {
        fetchPayments(1);
    }, [examFilter, statusFilter, dateFrom, dateTo]);

    const fetchPayments = async (page = 1) => {
        try {
            setLoading(true);
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
            setLoading(false);
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
            setRefundError('');
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

    const getStatusClass = (status) => {
        switch (status) {
            case 'paid':
                return styles.statusPaid;
            case 'created':
            case 'pending':
                return styles.statusPending;
            case 'failed':
                return styles.statusFailed;
            case 'refunded':
                return styles.statusRefunded;
            default:
                return styles.statusPending;
        }
    };

    return (
        <div className={styles.container}>
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
                    <span className={styles.metricLabel}>Successful (Paid)</span>
                    <span className={`${styles.metricValue} ${styles.metricPaid}`}>
                        {metrics.successfulPayments || 0}
                    </span>
                </div>

                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Pending / Created</span>
                    <span className={`${styles.metricValue} ${styles.metricPending}`}>
                        {metrics.pendingPayments || 0}
                    </span>
                </div>

                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Failed Payments</span>
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
                        placeholder="Search student, code, mobile, email, or order ID..."
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
                        <option value="PAID">Paid</option>
                        <option value="CREATED">Created / Pending</option>
                        <option value="FAILED">Failed</option>
                        <option value="REFUNDED">Refunded</option>
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

            {/* 3. Payments Table */}
            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Student</th>
                                <th className={styles.th}>Contact Info</th>
                                <th className={styles.th}>Exam / Product</th>
                                <th className={styles.th}>Amount</th>
                                <th className={styles.th}>Razorpay Order ID</th>
                                <th className={styles.th}>Payment ID</th>
                                <th className={styles.th}>Status</th>
                                <th className={styles.th}>Date</th>
                                <th className={styles.th}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="9" style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                                        Loading payments...
                                    </td>
                                </tr>
                            ) : payments.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className={styles.emptyState}>
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
                                            <div>{p.mobile || '—'}</div>
                                            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{p.email}</div>
                                        </td>
                                        <td className={styles.td}>
                                            <span style={{ fontWeight: '600', color: '#38bdf8' }}>{p.exam}</span>
                                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{p.productName}</div>
                                        </td>
                                        <td className={styles.td}>
                                            <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>₹{p.amount}</strong>
                                        </td>
                                        <td className={styles.td} style={{ fontFamily: 'monospace', fontSize: '0.78rem' }}>
                                            {p.razorpayOrderId || '—'}
                                        </td>
                                        <td className={styles.td} style={{ fontFamily: 'monospace', fontSize: '0.78rem' }}>
                                            {p.razorpayPaymentId || '—'}
                                        </td>
                                        <td className={styles.td}>
                                            <span className={`${styles.statusBadge} ${getStatusClass(p.status)}`}>
                                                {p.status}
                                            </span>
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

                                            {p.status === 'paid' && (
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

            {/* 4. Complete Payment Details Modal */}
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
                            <span className={styles.detailLabel}>Amount:</span>
                            <span className={styles.detailValue} style={{ color: '#34d399', fontWeight: '800' }}>
                                ₹{selectedPayment.amount} {selectedPayment.currency}
                            </span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Payment Status:</span>
                            <span className={`${styles.statusBadge} ${getStatusClass(selectedPayment.status)}`}>
                                {selectedPayment.status}
                            </span>
                        </div>

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
                            {selectedPayment.status === 'paid' && (
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
                                className={styles.resetBtn}
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
