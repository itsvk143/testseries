'use client';

import { useState, useEffect } from 'react';
import {
    ACTIVE_TEST_CATEGORIES,
    SOLUTION_REVIEW_CATEGORIES,
    CATEGORY_GROUPS,
    REPORT_STATUSES
} from '@/lib/reportConstants';

export default function QuestionReportModal({
    isOpen,
    onClose,
    question,
    testId,
    testTitle,
    attemptId,
    exam,
    isReview = false,
    existingReport = null,
    onReportSubmitted
}) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            setError('');
            setSuccessMessage('');
            if (existingReport) {
                setSelectedCategories(existingReport.categories || []);
                setDescription(existingReport.description || '');
            } else {
                setSelectedCategories([]);
                setDescription('');
            }
        }
    }, [isOpen, existingReport, question?.id, question?._id]);

    if (!isOpen || !question) return null;

    const toggleCategory = (cat) => {
        setError('');
        if (selectedCategories.includes(cat)) {
            setSelectedCategories(selectedCategories.filter(c => c !== cat));
        } else {
            setSelectedCategories([...selectedCategories, cat]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedCategories.length === 0) {
            setError('Please select at least one issue category.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const reportSource = isReview ? 'SOLUTION_REVIEW' : 'ACTIVE_TEST';
            const payload = {
                questionId: question._id || question.id,
                testId: testId || 'standalone',
                testTitle: testTitle || testId || '',
                attemptId: attemptId || '',
                exam: exam || 'NEET',
                subject: question.subject || '',
                chapter: question.chapter || '',
                topic: question.topic || question.chapter || '',
                subTopic: question.subTopic || '',
                reportSource,
                categories: selectedCategories,
                description: description.trim(),
                questionSnapshot: {
                    question: question.text || question.question || '',
                    image: question.image || '',
                    options: question.options || [],
                    correctOption: question.correctOption || '',
                    correctAnswer: question.correctAnswer,
                    explanation: question.explanation || '',
                    type: question.type || 'MCQ',
                    difficulty: question.difficulty || 'Medium'
                }
            };

            const res = await fetch('/api/reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit report.');
            }

            setSuccessMessage(data.message || 'Report submitted successfully!');
            if (onReportSubmitted) {
                onReportSubmitted(data.report || { ...payload, reportId: data.reportId });
            }

            setTimeout(() => {
                onClose();
            }, 1200);

        } catch (err) {
            console.error('Error reporting question:', err);
            setError(err.message || 'Network error while submitting report.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const categoriesList = isReview ? SOLUTION_REVIEW_CATEGORIES : ACTIVE_TEST_CATEGORIES;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 10, 24, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
        }}>
            <div style={{
                background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '560px',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(124, 58, 237, 0.25)',
                color: '#fff',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '18px 24px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(0, 0, 0, 0.25)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            fontSize: '1.1rem'
                        }}>
                            🚩
                        </span>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
                                Report This Question
                            </h3>
                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                {question.subject ? `${question.subject} • ` : ''}Question {question.id || ''}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        disabled={isSubmitting}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#94a3b8',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            padding: '4px 8px',
                            lineHeight: 1,
                            borderRadius: '6px'
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Body Content */}
                <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
                    {/* Notice */}
                    <div style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.25)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        marginBottom: '18px',
                        fontSize: '0.82rem',
                        color: '#c4b5fd',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span>ℹ️</span>
                        <span>
                            {!isReview
                                ? 'Reporting will NOT pause your timer, reset your answer, or affect your score.'
                                : 'Our academic and subject-matter experts review all reported question issues.'}
                        </span>
                    </div>

                    {/* Existing Report Indicator */}
                    {existingReport && (
                        <div style={{
                            background: 'rgba(234, 179, 8, 0.1)',
                            border: '1px solid rgba(234, 179, 8, 0.3)',
                            borderRadius: '10px',
                            padding: '10px 14px',
                            marginBottom: '18px',
                            fontSize: '0.85rem',
                            color: '#fef08a'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: '600' }}>✓ You previously reported this question</span>
                                <span style={{
                                    fontSize: '0.75rem',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    background: REPORT_STATUSES[existingReport.status]?.badgeBg || 'rgba(59, 130, 246, 0.2)',
                                    color: REPORT_STATUSES[existingReport.status]?.badgeColor || '#60a5fa',
                                    border: `1px solid ${REPORT_STATUSES[existingReport.status]?.border || 'rgba(59, 130, 246, 0.4)'}`,
                                    fontWeight: '700'
                                }}>
                                    {REPORT_STATUSES[existingReport.status]?.label || existingReport.status}
                                </span>
                            </div>
                            <div style={{ fontSize: '0.78rem', marginTop: '4px', color: '#cbd5e1' }}>
                                You can update your selected categories or notes below.
                            </div>
                        </div>
                    )}

                    {/* Category Selection */}
                    <div style={{ marginBottom: '18px' }}>
                        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '8px' }}>
                            Select Issue Category: <span style={{ color: '#ef4444' }}>*</span>
                        </label>

                        {!isReview ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {categoriesList.map(cat => {
                                    const isSelected = selectedCategories.includes(cat);
                                    return (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => toggleCategory(cat)}
                                            style={{
                                                padding: '8px 14px',
                                                borderRadius: '8px',
                                                border: isSelected ? '1px solid #8b5cf6' : '1px solid rgba(255, 255, 255, 0.12)',
                                                background: isSelected ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(79, 70, 229, 0.4))' : 'rgba(255, 255, 255, 0.04)',
                                                color: isSelected ? '#ffffff' : '#cbd5e1',
                                                fontSize: '0.84rem',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                transition: 'all 0.15s ease',
                                                boxShadow: isSelected ? '0 0 10px rgba(139, 92, 246, 0.3)' : 'none'
                                            }}
                                        >
                                            <span style={{ fontSize: '0.8rem' }}>{isSelected ? '✓' : '+'}</span>
                                            {cat}
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {Object.entries(CATEGORY_GROUPS).map(([groupKey, group]) => (
                                    <div key={groupKey} style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                        <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                                            {group.label}
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {group.items.map(cat => {
                                                const isSelected = selectedCategories.includes(cat);
                                                return (
                                                    <button
                                                        key={cat}
                                                        type="button"
                                                        onClick={() => toggleCategory(cat)}
                                                        style={{
                                                            padding: '6px 12px',
                                                            borderRadius: '7px',
                                                            border: isSelected ? '1px solid #8b5cf6' : '1px solid rgba(255, 255, 255, 0.1)',
                                                            background: isSelected ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.45), rgba(79, 70, 229, 0.45))' : 'rgba(255, 255, 255, 0.03)',
                                                            color: isSelected ? '#ffffff' : '#cbd5e1',
                                                            fontSize: '0.8rem',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '5px',
                                                            transition: 'all 0.15s ease'
                                                        }}
                                                    >
                                                        <span>{isSelected ? '✓' : '+'}</span>
                                                        {cat}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Optional Description */}
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '6px' }}>
                            Additional Details <span style={{ color: '#94a3b8', fontWeight: '400' }}>(Optional)</span>:
                        </label>
                        <textarea
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Explain the error or provide your reasoning..."
                            style={{
                                width: '100%',
                                background: 'rgba(15, 23, 42, 0.7)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '10px',
                                color: '#fff',
                                padding: '10px 14px',
                                fontSize: '0.88rem',
                                outline: 'none',
                                resize: 'vertical',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Error / Success Feedback */}
                    {error && (
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            color: '#fca5a5',
                            fontSize: '0.84rem',
                            marginBottom: '14px'
                        }}>
                            ⚠️ {error}
                        </div>
                    )}

                    {successMessage && (
                        <div style={{
                            background: 'rgba(34, 197, 94, 0.15)',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            color: '#86efac',
                            fontSize: '0.84rem',
                            marginBottom: '14px'
                        }}>
                            ✓ {successMessage}
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div style={{
                    padding: '14px 24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '12px',
                    background: 'rgba(0, 0, 0, 0.25)'
                }}>
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                        style={{
                            padding: '9px 18px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            background: 'transparent',
                            color: '#cbd5e1',
                            fontSize: '0.88rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting || selectedCategories.length === 0}
                        style={{
                            padding: '9px 22px',
                            borderRadius: '8px',
                            border: 'none',
                            background: selectedCategories.length === 0
                                ? 'rgba(124, 58, 237, 0.3)'
                                : 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            fontWeight: '700',
                            cursor: selectedCategories.length === 0 || isSubmitting ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: selectedCategories.length > 0 ? '0 2px 10px rgba(124, 58, 237, 0.4)' : 'none',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <span style={{
                                    display: 'inline-block',
                                    width: '12px',
                                    height: '12px',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    borderTopColor: '#fff',
                                    borderRadius: '50%',
                                    animation: 'spin 0.8s linear infinite'
                                }} />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <span>🚩</span>
                                {existingReport ? 'Update Report' : 'Submit Report'}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
