'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

// Dynamically load the official Razorpay Checkout SDK
function loadRazorpayScript() {
    return new Promise((resolve) => {
        if (typeof window !== 'undefined' && window.Razorpay) {
            resolve(true);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export default function PaymentPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin?callbackUrl=/payment');
            return;
        }

        if (status === 'authenticated') {
            fetchPaymentDetails();
            loadRazorpayScript();
        }
    }, [status]);

    const fetchPaymentDetails = async () => {
        try {
            setLoading(true);
            setErrorMsg('');
            const res = await fetch('/api/payment/details');
            const data = await res.json();

            if (!res.ok) {
                if (data.error === 'EXAM_NOT_SELECTED') {
                    setErrorMsg(data.message || 'Please complete your registration and select your exam.');
                } else {
                    setErrorMsg(data.message || data.error || 'Failed to load payment information.');
                }
                return;
            }

            setDetails(data);
        } catch (err) {
            console.error('Error loading payment details:', err);
            setErrorMsg('Network error. Unable to load payment information. Please refresh.');
        } finally {
            setLoading(false);
        }
    };

    const handlePayNow = async () => {
        try {
            setProcessing(true);
            setErrorMsg('');

            const scriptLoaded = await loadRazorpayScript();
            if (!scriptLoaded) {
                setErrorMsg('Failed to load Razorpay payment gateway. Please check your internet connection.');
                setProcessing(false);
                return;
            }

            // Step 1: Create order on server
            const orderRes = await fetch('/api/payment/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            const orderData = await orderRes.json();

            if (!orderRes.ok) {
                if (orderData.alreadyPaid) {
                    router.push('/dashboard');
                    return;
                }
                setErrorMsg(orderData.message || 'Unable to initiate Razorpay order.');
                setProcessing(false);
                return;
            }

            const { orderId, amount, currency, keyId, student, product } = orderData;

            if (!keyId) {
                setErrorMsg('Payment gateway configuration error: Public Key ID is missing. Please contact administrator.');
                setProcessing(false);
                return;
            }

            // Step 2: Configure Razorpay Checkout options
            const options = {
                key: keyId,
                amount: amount,
                currency: currency || 'INR',
                name: 'TestSeries',
                description: product?.name || 'Test Series Full Access',
                order_id: orderId,
                prefill: {
                    name: student?.name || '',
                    email: student?.email || '',
                    contact: student?.mobile || ''
                },
                theme: {
                    color: '#7c3aed',
                    backdrop_color: 'rgba(9, 13, 22, 0.85)'
                },
                modal: {
                    ondismiss: () => {
                        console.log('Razorpay modal closed by student');
                        setProcessing(false);
                    }
                },
                handler: async function (response) {
                    // Step 3: Server-side cryptographic signature verification
                    try {
                        const verifyRes = await fetch('/api/payment/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature
                            })
                        });

                        const verifyData = await verifyRes.json();

                        if (verifyRes.ok && verifyData.success) {
                            // Redirect to dedicated Success page with params
                            const queryParams = new URLSearchParams({
                                paymentId: verifyData.paymentId || response.razorpay_payment_id,
                                orderId: verifyData.orderId || response.razorpay_order_id,
                                amount: verifyData.amount || details.product.amount,
                                exam: verifyData.exam || details.product.examDisplay,
                                productName: verifyData.productName || details.product.name,
                                studentName: verifyData.studentName || details.student.name,
                                studentCode: verifyData.studentCode || details.student.studentCode
                            });
                            router.push(`/payment/success?${queryParams.toString()}`);
                        } else {
                            const errMessage = verifyData.message || 'Signature verification failed.';
                            router.push(`/payment/failed?reason=${encodeURIComponent(errMessage)}&orderId=${orderId}`);
                        }
                    } catch (verifyErr) {
                        console.error('Error during payment verification:', verifyErr);
                        router.push(`/payment/failed?reason=${encodeURIComponent('Network error during verification')}&orderId=${orderId}`);
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (resp) {
                console.error('Razorpay payment failed:', resp.error);
                const reason = resp.error?.description || 'Payment failed';
                router.push(`/payment/failed?reason=${encodeURIComponent(reason)}&orderId=${orderId}`);
            });

            rzp.open();
        } catch (err) {
            console.error('Failed to launch Razorpay checkout:', err);
            setErrorMsg(err.message || 'Unexpected payment error occurred.');
            setProcessing(false);
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className={styles.container}>
                <Navbar />
                <div className={styles.loadingBox}>
                    <div className={styles.spinner} />
                    <p style={{ color: '#94a3b8' }}>Loading secure payment portal...</p>
                </div>
            </div>
        );
    }

    if (!details) {
        return (
            <div className={styles.container}>
                <Navbar />
                <main className={styles.main}>
                    <div className={styles.errorBanner}>
                        <span>⚠️</span>
                        <span>{errorMsg || 'Unable to load payment details.'}</span>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link href="/dashboard" className={styles.dashBtn}>
                            Return to Dashboard
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    const { student, product, isPaid } = details;

    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.headerSection}>
                    <div className={styles.badge}>
                        🔒 SECURE RAZORPAY GATEWAY
                    </div>
                    <h1 className={styles.title}>Complete Your Enrollment</h1>
                    <p className={styles.subtitle}>
                        Activate immediate 732-day full access to official NTA-pattern mock tests, topic-wise assessments, and chapter poll practice.
                    </p>
                </div>

                {isPaid && (
                    <div className={styles.alreadyPaidBanner}>
                        <h2>✅ Test Access Already Active!</h2>
                        <p>
                            Your account is fully authorized for <strong>{product.name}</strong>. No further payment is required.
                        </p>
                        <Link href="/dashboard" className={styles.dashBtn}>
                            Go to Dashboard &amp; Start Practice
                        </Link>
                    </div>
                )}

                {errorMsg && (
                    <div className={styles.errorBanner}>
                        <span>⚠️</span>
                        <span>{errorMsg}</span>
                    </div>
                )}

                <div className={styles.cardGrid}>
                    {/* Panel 1: Student Details (Read-only, auto-filled) */}
                    <div className={styles.panel}>
                        <h2 className={styles.panelTitle}>
                            <span>👤</span> Student Details
                        </h2>
                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Student Name</span>
                                <div className={styles.fieldValue}>{student.name || 'Student'}</div>
                            </div>

                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Email Address</span>
                                <div className={styles.fieldValue}>{student.email}</div>
                            </div>

                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Mobile Number</span>
                                <div className={styles.fieldValue}>{student.mobile || 'Not Provided'}</div>
                            </div>

                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Student Code</span>
                                <div className={styles.fieldValueMonospace}>{student.studentCode || 'Pending Assignment'}</div>
                            </div>

                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Target Exam</span>
                                <div>
                                    <span className={styles.examBadge}>{student.examDisplay}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel 2: Order Summary (Strictly server-determined) */}
                    <div className={styles.panel}>
                        <h2 className={styles.panelTitle}>
                            <span>📦</span> Order Summary
                        </h2>

                        <div className={styles.productName}>{product.name}</div>
                        <p className={styles.productDesc}>{product.description}</p>

                        <ul className={styles.featureList}>
                            {product.features?.map((feat, idx) => (
                                <li key={idx} className={styles.featureItem}>
                                    <span className={styles.featureCheck}>✓</span>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.priceBox}>
                            <div>
                                <div className={styles.priceLabel}>Total Payable Amount</div>
                                <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '2px' }}>
                                    Inclusive of all taxes
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className={styles.priceValue}>
                                    ₹{product.amount}
                                    <span className={styles.pricePeriod}>/ 732 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                {!isPaid && (
                    <div className={styles.actionSection}>
                        <button
                            type="button"
                            className={styles.payButton}
                            onClick={handlePayNow}
                            disabled={processing}
                        >
                            {processing ? (
                                <>
                                    <span className={styles.spinner} style={{ width: '20px', height: '20px', margin: 0 }} />
                                    <span>Connecting to Razorpay...</span>
                                </>
                            ) : (
                                <>
                                    <span>🔒</span>
                                    <span>PAY SECURELY WITH RAZORPAY (₹{product.amount})</span>
                                </>
                            )}
                        </button>

                        <div className={styles.trustBadges}>
                            <div className={styles.trustItem}>
                                <span>⚡</span>
                                <span>Instant Access Activation</span>
                            </div>
                            <div className={styles.trustItem}>
                                <span>🛡️</span>
                                <span>256-Bit SSL Encrypted</span>
                            </div>
                            <div className={styles.trustItem}>
                                <span>💳</span>
                                <span>Powered by Razorpay</span>
                            </div>
                            <div className={styles.trustItem}>
                                <span>🚫</span>
                                <span>No Manual Approval Needed</span>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
