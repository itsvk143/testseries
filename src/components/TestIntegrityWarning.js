'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function TestIntegrityWarning({
    isActive = false,
    testId,
    testAttemptId,
    onViolationCountChange,
    onViolationsChange
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const [isExpired, setIsExpired] = useState(false);
    const [violationCount, setViolationCount] = useState(0);
    const [violations, setViolations] = useState([]);

    // Internal tracking refs to prevent duplicate firing and stale closures
    const activeIncidentRef = useRef(null);
    const countdownIntervalRef = useRef(null);
    const debounceTimeoutRef = useRef(null);
    const violationCountRef = useRef(0);
    const violationsRef = useRef([]);

    // Sync refs with state
    useEffect(() => {
        violationCountRef.current = violationCount;
    }, [violationCount]);

    useEffect(() => {
        violationsRef.current = violations;
    }, [violations]);

    // Cleanup countdown timer helper
    const clearCountdown = useCallback(() => {
        if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
            countdownIntervalRef.current = null;
        }
    }, []);

    // Handle student leaving the test window (Section 1 & 7)
    const handleWindowLeave = useCallback(() => {
        if (!isActive) return;

        // Clear any pending debounce check
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        // Debounce by 250ms to protect against momentary OS micro-focus shifts (Section 17)
        debounceTimeoutRef.current = setTimeout(() => {
            // Check if student is genuinely inactive
            const isHidden = typeof document !== 'undefined' && document.visibilityState === 'hidden';
            const isBlurred = typeof document !== 'undefined' && !document.hasFocus();

            if (!isHidden && !isBlurred) {
                return; // Focus restored before debounce fired
            }

            // Section 7: If an incident is already active, ignore subsequent blur/visibility events
            if (activeIncidentRef.current) {
                return;
            }

            const now = new Date();
            const localViolationId = `viol_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

            const incident = {
                id: localViolationId,
                serverViolationId: null,
                startedAt: now.toISOString(),
                returnedAt: null,
                durationSeconds: null,
                warningDurationSeconds: 30,
                violationType: 'TEST_WINDOW_LEFT',
                createdAt: now.toISOString()
            };

            activeIncidentRef.current = incident;

            // Increment violation count (Section 9)
            const newCount = violationCountRef.current + 1;
            setViolationCount(newCount);
            if (onViolationCountChange) onViolationCountChange(newCount);

            const newViolations = [...violationsRef.current, incident];
            setViolations(newViolations);
            if (onViolationsChange) onViolationsChange(newViolations);

            // Setup 30-second warning countdown (Section 3 & 4)
            setCountdown(30);
            setIsExpired(false);
            setIsModalOpen(true);

            clearCountdown();
            countdownIntervalRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearCountdown();
                        setIsExpired(true);
                        // CRITICAL: NEVER submit the test! (Section 4, 6, 12)
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Asynchronously log to server (Section 8, 21, 22)
            if (testId) {
                fetch('/api/test-violations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'LOG_START',
                        testId,
                        testAttemptId,
                        violationType: 'TEST_WINDOW_LEFT',
                        startedAt: incident.startedAt,
                        warningDurationSeconds: 30
                    })
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data?.violationId && activeIncidentRef.current) {
                            activeIncidentRef.current.serverViolationId = data.violationId;
                        }
                    })
                    .catch((err) => {
                        console.warn('Could not log violation start:', err);
                    });
            }
        }, 250);
    }, [isActive, testId, testAttemptId, onViolationCountChange, onViolationsChange, clearCountdown]);

    // Handle student returning to the test window (Section 1, 5, 6)
    const handleWindowReturn = useCallback(() => {
        if (!isActive) return;

        // Clear debounce if returning during debounce window
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
            debounceTimeoutRef.current = null;
        }

        const incident = activeIncidentRef.current;
        if (!incident) return; // No open incident

        // Only process return once per incident
        if (!incident.returnedAt) {
            const now = new Date();
            const returnIso = now.toISOString();
            const startDate = new Date(incident.startedAt);
            const durationSec = Math.max(0, Math.round((now.getTime() - startDate.getTime()) / 1000));

            incident.returnedAt = returnIso;
            incident.durationSeconds = durationSec;

            // Update local violations log
            const updatedViolations = violationsRef.current.map((v) =>
                v.id === incident.id ? { ...v, returnedAt: returnIso, durationSeconds: durationSec } : v
            );
            setViolations(updatedViolations);
            if (onViolationsChange) onViolationsChange(updatedViolations);

            // Log return to server (Section 8, 22)
            if (testId) {
                fetch('/api/test-violations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'LOG_RETURN',
                        testId,
                        testAttemptId,
                        violationId: incident.serverViolationId || incident.id,
                        returnedAt: returnIso,
                        durationSeconds: durationSec
                    })
                }).catch((err) => {
                    console.warn('Could not log violation return:', err);
                });
            }
        }
    }, [isActive, testId, testAttemptId, onViolationsChange]);

    // Close the warning modal when student clicks RETURN TO TEST (Section 3, 5, 6)
    const handleReturnToTest = () => {
        // Ensure return time is recorded if not already
        handleWindowReturn();
        clearCountdown();
        activeIncidentRef.current = null; // Clear active incident so future departures can be tracked
        setIsModalOpen(false);
        setIsExpired(false);
    };

    // Attach visibilitychange, blur, focus event listeners during active test (Section 1 & 2)
    useEffect(() => {
        if (!isActive) {
            clearCountdown();
            setIsModalOpen(false);
            activeIncidentRef.current = null;
            return;
        }

        const onVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                handleWindowLeave();
            } else if (document.visibilityState === 'visible') {
                handleWindowReturn();
            }
        };

        const onBlur = () => {
            handleWindowLeave();
        };

        const onFocus = () => {
            handleWindowReturn();
        };

        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('blur', onBlur);
        window.addEventListener('focus', onFocus);

        return () => {
            document.removeEventListener('visibilitychange', onVisibilityChange);
            window.removeEventListener('blur', onBlur);
            window.removeEventListener('focus', onFocus);
            if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
            clearCountdown();
        };
    }, [isActive, handleWindowLeave, handleWindowReturn, clearCountdown]);

    if (!isModalOpen) return null;

    return (
        <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="warning-modal-title"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(2, 6, 23, 0.88)',
                backdropFilter: 'blur(8px)',
                padding: '20px',
                animation: 'fadeIn 0.2s ease-out'
            }}
        >
            <div
                style={{
                    maxWidth: '480px',
                    width: '100%',
                    backgroundColor: '#0f172a',
                    border: isExpired
                        ? '2px solid rgba(239, 68, 68, 0.7)'
                        : '2px solid rgba(245, 158, 11, 0.7)',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    boxShadow: isExpired
                        ? '0 0 40px rgba(239, 68, 68, 0.35)'
                        : '0 0 40px rgba(245, 158, 11, 0.35)',
                    textAlign: 'center',
                    color: '#f8fafc',
                    fontFamily: 'inherit'
                }}
            >
                {/* Warning Icon Badge */}
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        margin: '0 auto 16px',
                        borderRadius: '50%',
                        backgroundColor: isExpired
                            ? 'rgba(239, 68, 68, 0.15)'
                            : 'rgba(245, 158, 11, 0.15)',
                        border: isExpired
                            ? '1px solid rgba(239, 68, 68, 0.4)'
                            : '1px solid rgba(245, 158, 11, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                    }}
                >
                    {isExpired ? '🚨' : '⚠️'}
                </div>

                {/* Section 3 & 4: Exact Heading */}
                <h2
                    id="warning-modal-title"
                    style={{
                        margin: '0 0 10px 0',
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        letterSpacing: '-0.3px',
                        color: isExpired ? '#fca5a5' : '#fde047'
                    }}
                >
                    {isExpired ? 'WARNING STILL ACTIVE' : 'WARNING — RETURN TO TEST'}
                </h2>

                {/* Section 3 & 4: Body */}
                <p
                    style={{
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        color: '#e2e8f0',
                        margin: '0 0 16px 0'
                    }}
                >
                    {isExpired ? (
                        <>
                            <strong>Please return to the test window.</strong>
                        </>
                    ) : (
                        <>
                            <strong>You have left the test window.</strong>
                            <br />
                            Please return to the test immediately.
                        </>
                    )}
                </p>

                {/* Section 3 & 4: Countdown Box */}
                {!isExpired ? (
                    <div
                        style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            borderRadius: '12px',
                            padding: '16px 12px',
                            marginBottom: '20px'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '0.85rem',
                                color: '#94a3b8',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 600
                            }}
                        >
                            Warning expires in:
                        </div>
                        <div
                            style={{
                                fontSize: '3rem',
                                fontWeight: 900,
                                color: countdown <= 10 ? '#ef4444' : '#fbbf24',
                                lineHeight: 1.1,
                                margin: '6px 0'
                            }}
                        >
                            {countdown}
                        </div>
                        <div
                            style={{
                                fontSize: '0.85rem',
                                color: '#cbd5e1',
                                fontWeight: 700
                            }}
                        >
                            seconds
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.35)',
                            borderRadius: '12px',
                            padding: '14px 12px',
                            marginBottom: '20px'
                        }}
                    >
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#fca5a5', fontWeight: 700 }}>
                            Warning expired (0s)
                        </p>
                    </div>
                )}

                {/* Section 3, 4, 12: Clear Assurance that test is NOT submitted */}
                <div
                    style={{
                        fontSize: '0.88rem',
                        color: '#34d399',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        marginBottom: '22px',
                        lineHeight: 1.4
                    }}
                >
                    {isExpired ? (
                        <strong>Your test has NOT been submitted.</strong>
                    ) : (
                        <>Your test will <strong>NOT be submitted automatically</strong>.</>
                    )}
                </div>

                {/* Section 3: Exact Button */}
                <button
                    type="button"
                    onClick={handleReturnToTest}
                    autoFocus
                    style={{
                        width: '100%',
                        padding: '14px 20px',
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        background: isExpired
                            ? 'linear-gradient(135deg, #f87171, #ef4444)'
                            : 'linear-gradient(135deg, #fde047, #f59e0b)',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                        transition: 'transform 0.15s ease, filter 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                >
                    RETURN TO TEST
                </button>
            </div>
        </div>
    );
}
