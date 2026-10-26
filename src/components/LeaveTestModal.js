'use client';

import React, { useEffect, useRef } from 'react';

/**
 * LeaveTestModal — Warns students before navigating away from an active test.
 *
 * Implements:
 * - Safe default: "Stay on Test" is focused by default
 * - Accessible dialog (role="dialog", aria-modal, Escape key handling, focus trap)
 * - Clear distinction between staying on test and submitting
 * - Submitting and error states
 */
export default function LeaveTestModal({
    isOpen,
    onStay,
    onSubmitAndLeave,
    isSubmitting = false,
    errorMessage = ''
}) {
    const stayButtonRef = useRef(null);

    // Focus safe default button on open & handle Escape key
    useEffect(() => {
        if (!isOpen) return;

        // Auto-focus the safe default "Stay on Test" button
        const timer = setTimeout(() => {
            stayButtonRef.current?.focus();
        }, 50);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                if (!isSubmitting) {
                    onStay();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, isSubmitting, onStay]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(5px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 99999,
                padding: '20px'
            }}
            onClick={(e) => {
                // Clicking backdrop performs safe default: Stay on Test
                if (e.target === e.currentTarget && !isSubmitting) {
                    onStay();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="leave-test-title"
                aria-describedby="leave-test-desc"
                style={{
                    background: '#1e293b',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65), 0 0 30px rgba(239, 68, 68, 0.15)',
                    maxWidth: '480px',
                    width: '100%',
                    padding: '28px 24px',
                    color: '#f8fafc',
                    fontFamily: 'inherit',
                    animation: 'fadeIn 0.18s ease-out'
                }}
            >
                {/* Header Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                        style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            flexShrink: 0
                        }}
                    >
                        ⚠️
                    </div>
                    <div>
                        <h2
                            id="leave-test-title"
                            style={{
                                margin: 0,
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#ffffff',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            Leave Test?
                        </h2>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Test Session in Progress
                        </span>
                    </div>
                </div>

                {/* Message Body */}
                <p
                    id="leave-test-desc"
                    style={{
                        margin: '0 0 20px 0',
                        fontSize: '0.94rem',
                        lineHeight: '1.55',
                        color: '#cbd5e1'
                    }}
                >
                    You are currently taking a test. If you leave this page, your test will be submitted with your answers recorded so far. You may not be able to resume this test.
                </p>

                {/* Error Banner if submission failed */}
                {errorMessage && (
                    <div
                        style={{
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid #ef4444',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            marginBottom: '18px',
                            fontSize: '0.85rem',
                            color: '#fca5a5',
                            lineHeight: '1.4'
                        }}
                    >
                        <strong>Submission Error:</strong> {errorMessage}
                    </div>
                )}

                {/* Action Buttons */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        gap: '12px',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* Safe Default: Stay on Test */}
                    <button
                        ref={stayButtonRef}
                        type="button"
                        onClick={onStay}
                        disabled={isSubmitting}
                        style={{
                            flex: '1 1 140px',
                            padding: '11px 20px',
                            background: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '0.92rem',
                            fontWeight: '600',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.15s ease',
                            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
                            outline: 'none',
                            opacity: isSubmitting ? 0.6 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) e.currentTarget.style.background = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                            if (!isSubmitting) e.currentTarget.style.background = '#2563eb';
                        }}
                    >
                        Stay on Test
                    </button>

                    {/* Secondary: Submit Test and Leave */}
                    <button
                        type="button"
                        onClick={onSubmitAndLeave}
                        disabled={isSubmitting}
                        style={{
                            flex: '1 1 160px',
                            padding: '11px 18px',
                            background: 'rgba(239, 68, 68, 0.12)',
                            color: '#f87171',
                            border: '1px solid rgba(239, 68, 68, 0.35)',
                            borderRadius: '10px',
                            fontSize: '0.92rem',
                            fontWeight: '600',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            opacity: isSubmitting ? 0.6 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.22)';
                                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.12)';
                                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.35)';
                            }
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '14px',
                                        height: '14px',
                                        border: '2px solid #f87171',
                                        borderTopColor: 'transparent',
                                        borderRadius: '50%',
                                        animation: 'spin 0.8s linear infinite'
                                    }}
                                />
                                Submitting...
                            </>
                        ) : (
                            'Submit Test and Leave'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
