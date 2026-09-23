'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

function FailedContent() {
    const searchParams = useSearchParams();
    const reason = searchParams.get('reason') || 'The transaction could not be processed or was cancelled.';

    return (
        <div style={{
            maxWidth: '560px',
            margin: '4rem auto',
            padding: '2.5rem',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(239, 68, 68, 0.15)',
            textAlign: 'center',
            backdropFilter: 'blur(16px)'
        }}>
            {/* Warning Icon */}
            <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.18)',
                border: '2px solid #ef4444',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                margin: '0 auto 1.5rem auto'
            }}>
                ✕
            </div>

            <div style={{
                color: '#f87171',
                fontSize: '0.85rem',
                fontWeight: '800',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
            }}>
                Transaction Unsuccessful
            </div>

            <h1 style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#ffffff',
                margin: '0 0 0.75rem 0'
            }}>
                PAYMENT NOT COMPLETED
            </h1>

            <p style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
            }}>
                Your Razorpay payment could not be completed. No money was deducted from your account. If amount was debited, it will be automatically refunded by your bank within 3–5 working days.
            </p>

            <div style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '10px',
                padding: '12px 16px',
                color: '#94a3b8',
                fontSize: '0.85rem',
                marginBottom: '2rem',
                textAlign: 'left'
            }}>
                <span style={{ color: '#fca5a5', fontWeight: 'bold' }}>Notice: </span>
                {reason}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                    href="/payment"
                    style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                        color: '#ffffff',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontWeight: '700',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        display: 'block',
                        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)'
                    }}
                >
                    TRY PAYMENT AGAIN
                </Link>

                <Link
                    href="/dashboard"
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
                    GO TO DASHBOARD
                </Link>
            </div>
        </div>
    );
}

export default function PaymentFailedPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#090d16', color: '#f1f5f9' }}>
            <Navbar />
            <Suspense fallback={
                <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#94a3b8' }}>
                    Loading...
                </div>
            }>
                <FailedContent />
            </Suspense>
        </div>
    );
}
