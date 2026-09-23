'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

function SuccessContent() {
    const searchParams = useSearchParams();

    const paymentId = searchParams.get('paymentId') || 'CONFIRMED';
    const amount = searchParams.get('amount') || '999';
    const exam = searchParams.get('exam') || 'Test Series';
    const productName = searchParams.get('productName') || `${exam} Test Series`;
    const studentName = searchParams.get('studentName') || 'Student';
    const studentCode = searchParams.get('studentCode') || '';
    const dateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div style={{
            maxWidth: '600px',
            margin: '3rem auto',
            padding: '2.5rem',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.15)',
            textAlign: 'center',
            backdropFilter: 'blur(16px)'
        }}>
            {/* Success Icon */}
            <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '2px solid #10b981',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                margin: '0 auto 1.5rem auto'
            }}>
                ✓
            </div>

            <div style={{
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: '800',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
            }}>
                Payment Verified Successfully
            </div>

            <h1 style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#ffffff',
                margin: '0 0 0.5rem 0'
            }}>
                Payment Successful
            </h1>

            <p style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                marginBottom: '2rem',
                lineHeight: '1.5'
            }}>
                Your test access is now permanently active for <strong>732 Days</strong>. All mock tests, topic-wise practice, and chapter polls are ready for you.
            </p>

            {/* Receipt Details Card */}
            <div style={{
                background: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '12px',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                    <span style={{ color: '#94a3b8' }}>Student Name:</span>
                    <span style={{ color: '#f8fafc', fontWeight: '700' }}>{studentName}</span>
                </div>

                {studentCode && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                        <span style={{ color: '#94a3b8' }}>Student Code:</span>
                        <span style={{ color: '#c4b5fd', fontFamily: 'monospace', fontWeight: '700' }}>{studentCode}</span>
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                    <span style={{ color: '#94a3b8' }}>Target Exam:</span>
                    <span style={{ color: '#38bdf8', fontWeight: '700' }}>{exam}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                    <span style={{ color: '#94a3b8' }}>Product:</span>
                    <span style={{ color: '#f8fafc', fontWeight: '600' }}>{productName}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                    <span style={{ color: '#94a3b8' }}>Amount Paid:</span>
                    <span style={{ color: '#34d399', fontWeight: '800', fontSize: '1.05rem' }}>₹{amount}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span style={{ color: '#94a3b8' }}>Razorpay Payment ID:</span>
                    <span style={{ color: '#cbd5e1', fontFamily: 'monospace', fontSize: '0.8rem' }}>{paymentId}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span style={{ color: '#94a3b8' }}>Date:</span>
                    <span style={{ color: '#cbd5e1' }}>{dateStr}</span>
                </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                    href="/dashboard"
                    style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: '#ffffff',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontWeight: '700',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        display: 'block',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                    }}
                >
                    GO TO DASHBOARD
                </Link>

                <Link
                    href="/poll"
                    style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        display: 'block'
                    }}
                >
                    Start Poll Practice Now &rarr;
                </Link>
            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#090d16', color: '#f1f5f9' }}>
            <Navbar />
            <Suspense fallback={
                <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#94a3b8' }}>
                    Loading payment confirmation...
                </div>
            }>
                <SuccessContent />
            </Suspense>
        </div>
    );
}
