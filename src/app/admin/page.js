'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import { neetTests } from '../../data/exams/neet';
import { jeeMainsTests } from '../../data/exams/jeeMains';
import { jeeAdvanceTests } from '../../data/exams/jeeAdvanced';
import { neetChapters } from '../../data/exams/neet';
import { jeeMainsChapters } from '../../data/exams/jeeMains';
import { jeeAdvancedChapters } from '../../data/exams/jeeAdvanced';
import { class9Tests } from '../../data/exams/class9';
import { class10Tests } from '../../data/exams/class10';

import dynamic from 'next/dynamic';
const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });
import TestManager from './TestManager'; 
import { normalizeQuestion } from '../../lib/questionFormatter';

export default function AdminPanel() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('questions'); // 'questions' | 'tests'
    const [selectedExam, setSelectedExam] = useState('neet');
    const [selectedTestType, setSelectedTestType] = useState('ALL');
    const [selectedSubject, setSelectedSubject] = useState('ALL');
    const [selectedChapterFilter, setSelectedChapterFilter] = useState('ALL');
    const [selectedTestId, setSelectedTestId] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState(null); // null = add mode
    const [uploadMode, setUploadMode] = useState('single'); // 'single' | 'bulk' | 'latex'
    const [bulkJson, setBulkJson] = useState('');
    const [bulkError, setBulkError] = useState('');
    const [latexInput, setLatexInput] = useState('');
    const [latexError, setLatexError] = useState('');
    const [latexPreview, setLatexPreview] = useState(null); // converted questions array
    const [showLatexJson, setShowLatexJson] = useState(false);
    const [detectedFormat, setDetectedFormat] = useState('');
    const [showAIPanel, setShowAIPanel] = useState(false);
    const [aiForm, setAiForm] = useState({ subject: '', chapter: '', subtopic: '', classGrade: '', count: selectedExam === 'neet' ? 45 : 25, difficulty: 'Mixed' });

    useEffect(() => {
        setAiForm(prev => ({ ...prev, count: selectedExam === 'neet' ? 45 : 25 }));
    }, [selectedExam]);
    const [selectedChapters, setSelectedChapters] = useState([]);
    const [chapterDropdownOpen, setChapterDropdownOpen] = useState(false);
    const [aiGenerating, setAiGenerating] = useState(false);
    const [aiPreview, setAiPreview] = useState(null);
    const [aiSaving, setAiSaving] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [shouldAutoCreate, setShouldAutoCreate] = useState(false);
    const questionsPerPage = 50;

    const [formData, setFormData] = useState({
        type: 'MCQ',
        text: '',
        image: '',
        subject: 'Physics',
        chapter: '',
        subtopic: '',
        correctOption: 'a',
        explanation: '',
        optionA: '',
        optionAImage: '',
        optionB: '',
        optionBImage: '',
        optionC: '',
        optionCImage: '',
        optionD: '',
        optionDImage: ''
    });

    const availableTests = [
        ...neetTests,
        ...jeeMainsTests,
        ...jeeAdvanceTests,
        ...class9Tests,
        ...class10Tests,

    ].filter(t => t.category === selectedExam);

    const filteredTests = availableTests.filter(t => {
        if (selectedTestType !== 'ALL' && t.type !== selectedTestType) return false;
        if (selectedSubject !== 'ALL' && t.subject !== selectedSubject) return false;
        if (selectedChapterFilter !== 'ALL' && t.chapter !== selectedChapterFilter) return false;
        return true;
    });

    // Derive available subjects from the currently-visible test type
    const subjectsByExam = {
        neet: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
        'jee-mains': ['Physics', 'Chemistry', 'Mathematics'],
        'jee-advance': ['Physics', 'Chemistry', 'Mathematics'],
        'class-9': ['Science', 'Mathematics', 'Social Science', 'English', 'NTSE', 'NSO', 'IMO', 'NSTSE'],
        'class-10': ['Science', 'Mathematics', 'Social Science', 'English', 'NTSE', 'NSO', 'IMO', 'NSTSE'],

    };
    const availableSubjects = subjectsByExam[selectedExam] || [];

    // Admin authentication check
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        } else if (status === 'authenticated' && !session?.user?.isAdmin) {
            router.push('/dashboard');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (filteredTests.length > 0 && !selectedTestId) {
            setSelectedTestId(filteredTests[0].id);
        }
    }, [selectedExam, selectedTestType, filteredTests, selectedTestId]);

    useEffect(() => {
        if (selectedTestId) {
            setCurrentPage(1);
            fetchQuestions();
            
            // Sync form subject with top selection if it's a specific subject
            if (selectedSubject !== 'ALL') {
                setFormData(prev => ({ ...prev, subject: selectedSubject }));
                setAiForm(prev => ({ ...prev, subject: selectedSubject }));
            } else if (availableSubjects.length > 0 && !availableSubjects.includes(formData.subject)) {
                // If current form subject is invalid for new exam, pick first available
                setFormData(prev => ({ ...prev, subject: availableSubjects[0] }));
                setAiForm(prev => ({ ...prev, subject: availableSubjects[0] }));
            }
        }
    }, [selectedTestId, selectedSubject, selectedExam]);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/questions?testId=${selectedTestId}`);
            const data = await res.json();
            if (!res.ok) {
                console.error('Failed to fetch questions:', data);
                setQuestions([]);
                return;
            }
            setQuestions(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
            setQuestions([]);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });
            const result = await res.json();
            if (result.success) {
                setFormData(prev => ({ ...prev, [field]: result.url }));
            } else {
                alert('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    const handleSave = async () => {
        const questionPayload = {
            id: editingQuestion ? editingQuestion.id : undefined,
            type: formData.type || 'MCQ',
            text: formData.text,
            image: formData.image,
            subject: formData.subject,
            chapter: formData.chapter,
            subtopic: formData.subtopic,
            explanation: formData.explanation,
            ...(formData.type === 'SUBJECTIVE' ? {} : {
                correctOption: formData.correctOption,
                options: [
                    { id: 'a', text: formData.optionA, image: formData.optionAImage },
                    { id: 'b', text: formData.optionB, image: formData.optionBImage },
                    { id: 'c', text: formData.optionC, image: formData.optionCImage },
                    { id: 'd', text: formData.optionD, image: formData.optionDImage },
                ]
            })
        };

        const action = editingQuestion ? 'EDIT' : 'ADD';

        await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: selectedTestId,
                question: questionPayload,
                action
            })
        });

        setEditingQuestion(null);
        resetForm();
        fetchQuestions();
    };

    const handleBulkUpload = async () => {
        setBulkError('');
        try {
            if (!bulkJson.trim()) {
                throw new Error("JSON input is empty.");
            }
            
            const parsedData = JSON.parse(bulkJson);
            
            if (!Array.isArray(parsedData)) {
                throw new Error("Expected a JSON array of questions.");
            }
            
            if (parsedData.length === 0) {
                throw new Error("JSON array is empty.");
            }

            // Basic validation and NORMALIZATION
            const normalizedData = parsedData.map((q, idx) => {
                try {
                    // Inject selected subject if the question doesn't have one
                    const questionObj = {
                        ...q,
                        subject: q.subject || formData.subject
                    };
                    return normalizeQuestion(questionObj);
                } catch (err) {
                    throw new Error(`Error formatting question at index ${idx}: ${err.message}`);
                }
            });

            await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: selectedTestId,
                    question: normalizedData,
                    action: 'ADD_BULK'
                })
            });

            setBulkJson('');
            setUploadMode('single');
            alert(`Successfully added ${parsedData.length} questions!`);
            fetchQuestions();

        } catch (e) {
            setBulkError(e.message);
        }
    };

    const handleFileUploadBulk = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setBulkJson(event.target.result);
        };
        reader.readAsText(file);
    };

    // ── LaTeX helpers ──────────────────────────────────────────

    /** Strip common LaTeX formatting commands, preserve math delimiters */
    function cleanLatexText(text) {
        return text
            .replace(/\\textbf\{([^}]*)\}/g, '$1')
            .replace(/\\textit\{([^}]*)\}/g, '$1')
            .replace(/\\emph\{([^}]*)\}/g, '$1')
            .replace(/\\underline\{([^}]*)\}/g, '$1')
            .replace(/\\underline\{\\hspace\{[^}]*\}\}/g, '_____')
            .replace(/\\hspace\{[^}]*\}/g, ' ')
            .replace(/\\vspace\{[^}]*\}/g, '')
            .replace(/\\noindent\b/g, '')
            .replace(/\\\\\s*/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    /** Extract answer key from anywhere in the text.
     *  Supports: "1. A", "1) B", "1-C", "1: D", "1 A", "01. (b)",
     *            "ANSWERS: 1-A 2-C", "Ans. B" (inline per-question)
     */
    function extractAnswerMap(text) {
        const map = {};
        // Match: optional 'Q'/'Ans' prefix, number, separator, letter (optionally in parens)
        const pattern = /(?:^|[\s,;])\s*(?:[Qq]\.?\s*)?(\d{1,3})\s*[.)\-:\s]\s*\(?([A-Da-d])\)?/gm;
        let m;
        while ((m = pattern.exec(text)) !== null) {
            const num = parseInt(m[1], 10);
            if (!map[num]) map[num] = m[2].toLowerCase();
        }
        // Also match compact form: "1A 2C 3B" or "1.A 2.C"
        const compact = /\b(\d{1,3})\.?([A-Da-d])\b/g;
        while ((m = compact.exec(text)) !== null) {
            const num = parseInt(m[1], 10);
            if (!map[num]) map[num] = m[2].toLowerCase();
        }
        return map;
    }

    /**
     * STRATEGY 1 – enumerate / \item style
     * Each question is an \item before a \begin{enumerate} block.
     * Options are \item lines inside that block.
     */
    function parseEnumerateStyle(normalized, defaultSubject, answerMap) {
        const questions = [];
        const blocks = normalized.split(/\\end\{enumerate\}/);
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            if (!block.trim()) continue;
            const enumMatch = block.match(/(\\begin\{enumerate\}(?:\[[^\]]*\])?)/);
            if (!enumMatch) continue;
            const enumStart = block.indexOf(enumMatch[0]);
            const beforeEnum = block.substring(0, enumStart);
            const afterEnum = block.substring(enumStart + enumMatch[0].length);
            const itemParts = beforeEnum.split('\\item');
            if (itemParts.length < 2) continue;
            const questionText = cleanLatexText(itemParts[itemParts.length - 1]);
            if (!questionText) continue;
            const rawOptions = afterEnum.split('\\item').slice(1);
            if (rawOptions.length < 2) continue;
            const optionIds = ['a', 'b', 'c', 'd'];
            const options = rawOptions.slice(0, 4).map((optText, idx) => ({
                id: optionIds[idx],
                text: cleanLatexText(optText)
            }));
            const qNumber = questions.length + 1;
            questions.push({
                subject: defaultSubject,
                text: questionText,
                options,
                correctOption: answerMap[qNumber] || 'a',
                explanation: ''
            });
        }
        return questions;
    }

    /**
     * STRATEGY 2 – Numbered questions with (A)/(B)/(C)/(D) options.
     * Supports:
     *   "1. Question text..."  or  "Q1. ..."  or  "1) ..."
     *   followed by (A)/(B)/(C)/(D) or A) B) C) D) options.
     * Answer key at end: "1-B", "1. B", "ANSWERS: 1-A 2-C"
     */
    function parseNumberedStyle(normalized, defaultSubject, answerMap) {
        const questions = [];
        // Split into lines for processing
        const lines = normalized.split('\n').map(l => l.trim()).filter(Boolean);

        // Detect answer-key section — stop collecting questions there
        const answerKeyLineIdx = lines.findIndex(l =>
            /^(?:answer[s]?\s*key|answer[s]?\s*:|ans\.?\s*key)/i.test(l)
        );
        const questionLines = answerKeyLineIdx >= 0 ? lines.slice(0, answerKeyLineIdx) : lines;

        // Group lines into question blocks
        // A question starts with a line matching: 1. / Q1. / Q.1 / 1)
        const qStartRegex = /^(?:Q\.?\s*)?(\d{1,3})[.)\s]\s+\S/;
        // An option line: (A) ... or A. ... or A) ...
        const optRegex = /^\(?([A-Da-d])[.)\s]\s*(.*)/i;

        let currentQ = null;
        let qNum = 0;

        const flush = () => {
            if (!currentQ || !currentQ.text) return;
            while (currentQ.options.length < 4) {
                currentQ.options.push({ id: String.fromCharCode(97 + currentQ.options.length), text: 'N/A' });
            }
            // Check for inline answer at end of question text: "...Ans: B" or "[Ans. (C)]"
            const inlineAns = currentQ.text.match(/(?:ans\.?|answer:?)\s*\(?([A-Da-d])\)?\s*$/i);
            if (inlineAns) {
                currentQ.correctOption = inlineAns[1].toLowerCase();
                currentQ.text = currentQ.text.replace(/[\[(]?(?:ans\.?|answer:?)\s*\(?[A-Da-d]\)?[\]).]?\s*$/i, '').trim();
            }
            questions.push(currentQ);
            currentQ = null;
        };

        for (const line of questionLines) {
            // Skip LaTeX preamble / document structure lines
            if (/^\\(?:documentclass|usepackage|begin\{document\}|end\{document\}|maketitle|pagestyle|geometry|setlength|renewcommand|newcommand)/.test(line)) continue;

            const qMatch = line.match(/^(?:Q\.?\s*)?(\d{1,3})[.)\s]\s+(.+)/);
            if (qMatch) {
                flush();
                qNum = parseInt(qMatch[1], 10);
                currentQ = {
                    subject: defaultSubject,
                    text: cleanLatexText(qMatch[2]),
                    options: [],
                    correctOption: answerMap[qNum] || 'a',
                    explanation: ''
                };
                continue;
            }

            if (currentQ) {
                const optMatch = line.match(/^\(?([A-Da-d])[.)\s]\s*(.*)/i);
                if (optMatch) {
                    currentQ.options.push({
                        id: optMatch[1].toLowerCase(),
                        text: cleanLatexText(optMatch[2])
                    });
                    continue;
                }
                // Continuation of question text (no option detected yet)
                if (currentQ.options.length === 0 && line && !optRegex.test(line)) {
                    currentQ.text += ' ' + cleanLatexText(line);
                }
            }
        }
        flush();

        // Backfill correctOption from answerMap (may have been populated after question blocks)
        questions.forEach((q, i) => {
            const num = i + 1;
            if (answerMap[num]) q.correctOption = answerMap[num];
        });

        return questions.filter(q => q.options.length >= 2);
    }

    /**
     * STRATEGY 3 – \question / \choice MCQ environment.
     * Common in LaTeX exam class (exam.cls).
     */
    function parseQuestionChoiceStyle(normalized, defaultSubject, answerMap) {
        const questions = [];
        // Split on \question
        const blocks = normalized.split(/\\question\s*/);
        for (let i = 1; i < blocks.length; i++) {
            const block = blocks[i].trim();
            if (!block) continue;
            // Split off choices
            const choiceSplit = block.split(/\\choice\s*/);
            if (choiceSplit.length < 3) continue; // need at least 2 choices
            const questionText = cleanLatexText(choiceSplit[0]);
            if (!questionText) continue;
            const optionIds = ['a', 'b', 'c', 'd'];
            const options = choiceSplit.slice(1, 5).map((c, idx) => ({
                id: optionIds[idx],
                text: cleanLatexText(c.split('\n')[0])
            }));
            const qNumber = questions.length + 1;
            questions.push({
                subject: defaultSubject,
                text: questionText,
                options,
                correctOption: answerMap[qNumber] || 'a',
                explanation: ''
            });
        }
        return questions;
    }

    /** Master parser — tries all strategies, returns most questions */
    function parseLatexToQuestions(latex, defaultSubject) {
        const normalized = latex.replace(/\r\n/g, '\n');

        // Extract answer map globally
        const answerMap = extractAnswerMap(normalized);

        // Try all three strategies
        const results = [
            { name: 'enumerate style (\\item + \\begin{enumerate})', questions: parseEnumerateStyle(normalized, defaultSubject, answerMap) },
            { name: 'numbered style (1. Q ... (A)(B)(C)(D))', questions: parseNumberedStyle(normalized, defaultSubject, answerMap) },
            { name: '\\question / \\choice MCQ style', questions: parseQuestionChoiceStyle(normalized, defaultSubject, answerMap) },
        ];

        // Pick the strategy with the most valid questions
        const best = results.reduce((a, b) => a.questions.length >= b.questions.length ? a : b);
        return { questions: best.questions, answerMap, detectedFormat: best.name };
    }

    const handleLatexConvert = () => {
        setLatexError('');
        setLatexPreview(null);
        setDetectedFormat('');
        setShowLatexJson(false);
        if (!latexInput.trim()) {
            setLatexError('LaTeX input is empty.');
            return;
        }
        try {
            const { questions, answerMap, detectedFormat: fmt } = parseLatexToQuestions(latexInput, formData.subject);
            if (questions.length === 0) {
                setLatexError(
                    'No questions found. The parser tried 3 formats but could not find valid question blocks.\n\n' +
                    'Supported formats:\n' +
                    '• enumerate: \\item Question \\begin{enumerate} \\item Opt... \\end{enumerate}\n' +
                    '• numbered: 1. Question\\n(A) Opt A\\n(B) Opt B ... + ANSWER KEY\n' +
                    '• MCQ class: \\question ... \\choice A \\choice B\n\n' +
                    'Tip: Click "📋 Sample" to see a working template.'
                );
                return;
            }
            setLatexPreview(questions);
            setDetectedFormat(fmt);
        } catch (e) {
            setLatexError('Parsing error: ' + e.message);
        }
    };

    const handleLatexUpload = async () => {
        if (!latexPreview || latexPreview.length === 0) return;
        setBulkError('');
        try {
            const normalizedData = latexPreview.map((q, idx) => {
                try { return normalizeQuestion(q); }
                catch (err) { throw new Error(`Error at question ${idx + 1}: ${err.message}`); }
            });
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ testId: selectedTestId, question: normalizedData, action: 'ADD_BULK' })
            });
            if (!res.ok) throw new Error('Upload failed');
            setLatexInput('');
            setLatexPreview(null);
            setUploadMode('single');
            alert(`✅ Successfully added ${normalizedData.length} questions!`);
            fetchQuestions();
        } catch (e) {
            setBulkError(e.message);
        }
    };

    const handleLatexFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setLatexInput(ev.target.result);
        reader.readAsText(file);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this question?')) return;

        await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: selectedTestId,
                question: { id },
                action: 'DELETE'
            })
        });
        fetchQuestions();
    };

    const handleEdit = (q) => {
        setEditingQuestion(q);
        setFormData({
            type: q.type || 'MCQ',
            text: q.text,
            image: q.image || '',
            subject: q.subject,
            chapter: q.chapter || '',
            subtopic: q.subtopic || '',
            correctOption: q.correctOption || 'a',
            explanation: q.explanation || '',
            optionA: q.options?.find(o => o.id === 'a')?.text || '',
            optionAImage: q.options?.find(o => o.id === 'a')?.image || '',
            optionB: q.options?.find(o => o.id === 'b')?.text || '',
            optionBImage: q.options?.find(o => o.id === 'b')?.image || '',
            optionC: q.options?.find(o => o.id === 'c')?.text || '',
            optionCImage: q.options?.find(o => o.id === 'c')?.image || '',
            optionD: q.options?.find(o => o.id === 'd')?.text || '',
            optionDImage: q.options?.find(o => o.id === 'd')?.image || '',
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditingQuestion(null);
        setFormData({
            type: 'MCQ',
            text: '',
            image: '',
            subject: selectedSubject !== 'ALL' ? selectedSubject : (availableSubjects[0] || 'Physics'),
            chapter: '',
            subtopic: '',
            correctOption: 'a',
            explanation: '',
            optionA: '',
            optionAImage: '',
            optionB: '',
            optionBImage: '',
            optionC: '',
            optionCImage: '',
            optionD: '',
            optionDImage: ''
        });
    };

    // Show loading while checking authentication
    if (status === 'loading') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0e27', color: 'white' }}>
                <div>Loading...</div>
            </div>
        );
    }

    // Don't render if not admin
    if (!session?.user?.isAdmin) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Admin Panel</h1>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <button 
                        className={`${styles.tab} ${activeTab === 'questions' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('questions')}
                    >
                        Manage Questions
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === 'tests' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('tests')}
                    >
                        Manage Tests & Dates
                    </button>
                </div>

                <div className={styles.controls}>
                    <select
                        value={selectedExam}
                        onChange={(e) => { setSelectedExam(e.target.value); setSelectedTestType('ALL'); setSelectedTestId(''); }}
                        className={styles.select}
                    >
                        <option value="neet">NEET</option>
                        <option value="jee-mains">JEE Mains</option>
                        <option value="jee-advance">JEE Advance</option>
                        <option value="class-9">Class 9</option>
                        <option value="class-10">Class 10</option>

                    </select>

                    {activeTab === 'questions' && (
                        <>
                            <select
                                value={selectedTestType}
                                onChange={(e) => { setSelectedTestType(e.target.value); setSelectedSubject('ALL'); setSelectedChapterFilter('ALL'); setSelectedTestId(''); }}
                                className={styles.select}
                            >
                                <option value="ALL">All Categories</option>
                                <option value="MOCK">Full Tests</option>
                                <option value="PYQ">Previous Year (PYQ)</option>
                                <option value="SUBJECT">Subject Tests</option>
                                <option value="CHAPTER">Chapter Tests</option>
                                <option value="SUBTOPIC">Topicwise Tests</option>
                                <option value="PART">Part Tests</option>
                                <option value="LIVE">Cumulative / Sunday Tests</option>
                            </select>

                            {/* Subject filter — shown when test type supports subject filtering */}
                            {['ALL', 'SUBJECT', 'CHAPTER', 'SUBTOPIC'].includes(selectedTestType) && (
                                <select
                                    value={selectedSubject}
                                    onChange={(e) => { setSelectedSubject(e.target.value); setSelectedChapterFilter('ALL'); setSelectedTestId(''); }}
                                    className={styles.select}
                                >
                                    <option value="ALL">All Subjects</option>
                                    {availableSubjects.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            )}

                            {/* Chapter filter — shown when test type supports chapter filtering */}
                            {['CHAPTER', 'SUBTOPIC'].includes(selectedTestType) && selectedSubject !== 'ALL' && (
                                <select
                                    value={selectedChapterFilter}
                                    onChange={(e) => { setSelectedChapterFilter(e.target.value); setSelectedTestId(''); }}
                                    className={styles.select}
                                >
                                    <option value="ALL">All Chapters</option>
                                    {(() => {
                                        // Retrieve unique chapters directly from the active tests to prevent naming mismatches
                                        const chaptersForSubject = availableTests
                                            .filter(t => t.type === selectedTestType && t.subject === selectedSubject && t.chapter)
                                            .map(t => t.chapter);
                                        
                                        const uniqueChapters = [...new Set(chaptersForSubject)].sort((a, b) => a.localeCompare(b));
                                        
                                        return uniqueChapters.map(ch => (
                                            <option key={ch} value={ch}>{ch}</option>
                                        ));
                                    })()}
                                </select>
                            )}

                            <select
                                value={selectedTestId}
                                onChange={(e) => setSelectedTestId(e.target.value)}
                                className={styles.select}
                            >
                                {filteredTests.map(t => (
                                    <option key={t.id} value={t.id}>{t.title}</option>
                                ))}
                            </select>

                            <button
                                onClick={() => {
                                    setShouldAutoCreate(true);
                                    setActiveTab('tests');
                                }}
                                style={{
                                    background: 'rgba(16,185,129,0.15)',
                                    border: '1px solid #10b981',
                                    color: '#10b981',
                                    borderRadius: '8px',
                                    padding: '8px 14px',
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                <span style={{ fontSize: '1.1rem' }}>+</span> Create Test
                            </button>
                        </>
                    )}
                </div>

                {activeTab === 'tests' ? (
                    <TestManager 
                        selectedExam={selectedExam} 
                        availableTests={availableTests} 
                        autoCreate={shouldAutoCreate}
                        onAutoCreateHandled={() => setShouldAutoCreate(false)}
                    />
                ) : (
                  <>
                <div className={styles.editor}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                        <h2 className={styles.subtitle}>{editingQuestion ? `Edit Question #${editingQuestion.id}` : 'Add New Question(s)'}</h2>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {/* AI Generate button — always visible */}
                            <button
                                onClick={() => { setShowAIPanel(p => !p); setAiPreview(null); }}
                                style={{
                                    background: showAIPanel ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.15)',
                                    border: '1px solid rgba(99,102,241,0.5)',
                                    color: '#a5b4fc',
                                    borderRadius: '8px',
                                    padding: '6px 14px',
                                    cursor: 'pointer',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                }}
                            >
                                🤖 AI Generate
                            </button>
                            {!editingQuestion && (
                                <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px' }}>
                                    <button 
                                        onClick={() => setUploadMode('single')}
                                        style={{
                                            background: uploadMode === 'single' ? '#4f46e5' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer'
                                        }}
                                    >Single Entry</button>
                                    <button 
                                        onClick={() => setUploadMode('bulk')}
                                        style={{
                                            background: uploadMode === 'bulk' ? '#10b981' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer'
                                        }}
                                    >Bulk JSON Upload</button>
                                    <button
                                        onClick={() => setUploadMode('latex')}
                                        style={{
                                            background: uploadMode === 'latex' ? '#f59e0b' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer'
                                        }}
                                    >📄 LaTeX Upload</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Inline AI Generate Panel ── */}
                    {showAIPanel && (
                        <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '18px', marginBottom: '20px' }}>
                            <p style={{ margin: '0 0 12px', color: '#a5b4fc', fontWeight: '700', fontSize: '0.95rem' }}>🤖 Gemini AI — Generate &amp; Save to: <span style={{ color: 'white' }}>{filteredTests.find(t => t.id === selectedTestId)?.title || selectedTestId}</span></p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                                {/* Subject dropdown */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Subject
                                    <select value={aiForm.subject} onChange={e => setAiForm(f => ({ ...f, subject: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="">Any / All</option>
                                        {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </label>
                                {/* Chapter multi-select dropdown */}
                                {(() => {
                                    const allChapterData = { neet: neetChapters, 'jee-mains': jeeMainsChapters, 'jee-advance': jeeAdvancedChapters };
                                    const subjectChapters = allChapterData[selectedExam]?.[aiForm.subject] || {};
                                    // Merge class-filtered or all chapters
                                    let chapters = [];
                                    if (aiForm.classGrade && subjectChapters[aiForm.classGrade]) {
                                        chapters = subjectChapters[aiForm.classGrade];
                                    } else {
                                        chapters = Object.values(subjectChapters).flat();
                                    }
                                    const toggleChapter = (ch) => {
                                        setSelectedChapters(prev =>
                                            prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]
                                        );
                                    };
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', gridColumn: chapters.length > 0 ? 'span 2' : 'span 1' }}>
                                            Chapter / Topic
                                            {chapters.length === 0 ? (
                                                <input
                                                    type="text"
                                                    value={aiForm.chapter}
                                                    onChange={e => setAiForm(f => ({ ...f, chapter: e.target.value }))}
                                                    placeholder="e.g. Kinematics (select a subject first)"
                                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                                />
                                            ) : (
                                                <div style={{ position: 'relative' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setChapterDropdownOpen(p => !p)}
                                                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: selectedChapters.length ? 'white' : '#64748b', fontSize: '14px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                                    >
                                                        <span>{selectedChapters.length ? `${selectedChapters.length} chapter${selectedChapters.length > 1 ? 's' : ''} selected` : 'Select chapters…'}</span>
                                                        <span>{chapterDropdownOpen ? '▲' : '▼'}</span>
                                                    </button>
                                                    {chapterDropdownOpen && (
                                                        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 99, background: '#0f172a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', maxHeight: '220px', overflowY: 'auto', marginTop: '4px', padding: '6px' }}>
                                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: '#a5b4fc', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '4px' }}>
                                                                <input type="checkbox"
                                                                    checked={selectedChapters.length === chapters.length}
                                                                    onChange={() => setSelectedChapters(selectedChapters.length === chapters.length ? [] : [...chapters])}
                                                                /> Select All
                                                            </label>
                                                            {chapters.map(ch => (
                                                                <label key={ch} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 8px', borderRadius: '6px', cursor: 'pointer', color: selectedChapters.includes(ch) ? 'white' : '#94a3b8', background: selectedChapters.includes(ch) ? 'rgba(99,102,241,0.15)' : 'transparent' }}>
                                                                    <input type="checkbox" checked={selectedChapters.includes(ch)} onChange={() => toggleChapter(ch)} />
                                                                    {ch}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {selectedChapters.length > 0 && (
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                                                            {selectedChapters.map(ch => (
                                                                <span key={ch} style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '20px', padding: '2px 10px', fontSize: '0.75rem', color: '#a5b4fc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                                    {ch}
                                                                    <button onClick={() => toggleChapter(ch)} style={{ background: 'none', border: 'none', color: '#a5b4fc', cursor: 'pointer', padding: 0, lineHeight: 1 }}>×</button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                                {/* Difficulty dropdown */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Difficulty
                                    <select value={aiForm.difficulty} onChange={e => setAiForm(f => ({ ...f, difficulty: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="Mixed">Mixed</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </label>
                                {/* Class Grade */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Class Grade
                                    <select value={aiForm.classGrade} onChange={e => setAiForm(f => ({ ...f, classGrade: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="">Any</option>
                                        <option value="11">Class 11</option>
                                        <option value="12">Class 12</option>
                                    </select>
                                </label>
                                {/* Subtopic dropdown (AI) */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Subtopic (Optional)
                                    {(() => {
                                        let availableAiSubtopics = [];
                                        if (selectedChapters.length > 0) {
                                            availableAiSubtopics = [...new Set(
                                                availableTests
                                                    .filter(t => t.type === 'SUBTOPIC' && t.subject === aiForm.subject && selectedChapters.includes(t.chapter))
                                                    .map(t => t.title)
                                            )];
                                        }
                                        if (availableAiSubtopics.length === 0) {
                                            availableAiSubtopics = [...new Set(
                                                availableTests
                                                    .filter(t => t.type === 'SUBTOPIC' && t.subject === aiForm.subject)
                                                    .map(t => t.title)
                                            )];
                                        }

                                        return availableAiSubtopics.length > 0 ? (
                                            <select
                                                value={aiForm.subtopic}
                                                onChange={e => setAiForm(f => ({ ...f, subtopic: e.target.value }))}
                                                style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                            >
                                                <option value="">— Any / Full Chapter —</option>
                                                {availableAiSubtopics.map(sub => (
                                                    <option key={sub} value={sub}>{sub}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                value={aiForm.subtopic}
                                                onChange={e => setAiForm(f => ({ ...f, subtopic: e.target.value }))}
                                                placeholder="e.g. Bohr's Model"
                                                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                            />
                                        );
                                    })()}
                                </label>
                                {/* Count */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    No. of Questions
                                    <input
                                        type="number" min={1} max={50}
                                        value={aiForm.count}
                                        onChange={e => setAiForm(f => ({ ...f, count: e.target.value }))}
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}
                                    />
                                </label>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: aiPreview ? '16px' : 0 }}>
                                <button
                                    onClick={async () => {
                                        setAiGenerating(true); setAiPreview(null);
                                        try {
                                            const res = await fetch('/api/admin/ai-questions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ exam: selectedExam, subject: aiForm.subject, chapter: selectedChapters.length ? selectedChapters.join(', ') : aiForm.chapter, subtopic: aiForm.subtopic, classGrade: aiForm.classGrade, difficulty: aiForm.difficulty, count: Number(aiForm.count), saveToDb: false }) });
                                            const data = await res.json();
                                            if (!res.ok) throw new Error(data.error || 'Unknown error');
                                            setAiPreview(data.questions);
                                        } catch(e) { alert('AI Error: ' + e.message); }
                                        finally { setAiGenerating(false); }
                                    }}
                                    disabled={aiGenerating}
                                    style={{ background: aiGenerating ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 18px', fontWeight: '700', cursor: aiGenerating ? 'not-allowed' : 'pointer' }}
                                >
                                    {aiGenerating ? '⏳ Generating...' : '✨ Generate'}
                                </button>
                                {aiPreview && (
                                    <button
                                        onClick={async () => {
                                            if (!selectedTestId) { alert('Select a test first'); return; }
                                            setAiSaving(true);
                                            try {
                                                const normalizedData = aiPreview.map((q, idx) => {
                                                    try { return normalizeQuestion(q); }
                                                    catch (err) { throw new Error(`Error at AI question ${idx + 1}: ${err.message}`); }
                                                });
                                                const res = await fetch('/api/questions', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({ testId: selectedTestId, question: normalizedData, action: 'ADD_BULK' })
                                                });
                                                if (!res.ok) throw new Error('Database upload failed');
                                                alert(`✅ Successfully saved ${normalizedData.length} AI questions!`);
                                                setAiPreview(null);
                                                fetchQuestions();
                                            } catch(e) { alert('Save Error: ' + e.message); }
                                            finally { setAiSaving(false); }
                                        }}
                                        disabled={aiSaving}
                                        style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px', padding: '8px 18px', fontWeight: '700', cursor: aiSaving ? 'not-allowed' : 'pointer' }}
                                    >
                                        {aiSaving ? 'Saving...' : `💾 Save ${aiPreview?.length} Questions`}
                                    </button>
                                )}
                                {aiPreview && <button onClick={() => setAiPreview(null)} style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer' }}>Discard</button>}
                            </div>
                            {/* Preview list */}
                            {aiPreview && (
                                <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                                    {aiPreview.map((q, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px 14px', border: '1px solid rgba(255,255,255,0.07)', fontSize: '0.85rem' }}>
                                            <span style={{ color: '#818cf8', fontWeight: '700', marginRight: '8px' }}>Q{i+1}.</span>
                                            <span style={{ color: 'white' }}>{q.text}</span>
                                            <div style={{ marginTop: '6px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                {q.options?.map(o => (
                                                    <span key={o.id} style={{ fontSize: '0.8rem', color: o.id === q.correctOption ? '#34d399' : '#64748b', fontWeight: o.id === q.correctOption ? 700 : 400 }}>
                                                        ({o.id}) {o.text} {o.id === q.correctOption ? '✓' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {!showAIPanel && uploadMode === 'latex' ? (
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(245,158,11,0.3)' }}>
                            {/* Header row */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                                <label style={{ fontSize: '0.95rem', color: '#fbbf24', fontWeight: '700' }}>📄 LaTeX → JSON Converter</label>
                                <select
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    className={styles.input}
                                    style={{ width: '160px', margin: 0, padding: '6px 10px' }}
                                >
                                    {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                                {/* Sample template button */}
                                <button
                                    onClick={() => {
                                        setLatexInput(
`% ── Format 2: Numbered style (most common) ──────────────────────────
% Paste your questions below. Answer key goes at the END.

1. The SI unit of electric charge is:
(A) Ampere
(B) Coulomb
(C) Volt
(D) Ohm

2. Speed of light in vacuum is approximately:
(A) $3 \\times 10^6$ m/s
(B) $3 \\times 10^8$ m/s
(C) $3 \\times 10^{10}$ m/s
(D) $3 \\times 10^{4}$ m/s

3. Which of the following is a vector quantity?
(A) Speed
(B) Temperature
(C) Velocity
(D) Mass

ANSWER KEY
1-B  2-B  3-C`);
                                        setLatexError('');
                                        setLatexPreview(null);
                                        setDetectedFormat('');
                                    }}
                                    style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.4)', color: '#fbbf24', borderRadius: '7px', padding: '5px 13px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: '600' }}
                                >
                                    📋 Sample
                                </button>
                                <input type="file" accept=".tex,.txt" onChange={handleLatexFileUpload} style={{ fontSize: '0.85rem', color: '#cbd5e1' }} />
                            </div>

                            {/* Format guide */}
                            <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', fontSize: '0.82rem', color: '#94a3b8' }}>
                                <strong style={{ color: '#fbbf24' }}>3 Supported Formats — auto-detected:</strong>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '8px', marginTop: '8px' }}>
                                    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '8px 10px' }}>
                                        <div style={{ color: '#c084fc', fontWeight: '700', marginBottom: '4px' }}>① enumerate style</div>
                                        <code style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'pre' }}>{`\\item Question\n\\begin{enumerate}\n\\item Opt A\n\\end{enumerate}\n...\n1. A  2. C`}</code>
                                    </div>
                                    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '8px 10px' }}>
                                        <div style={{ color: '#34d399', fontWeight: '700', marginBottom: '4px' }}>② numbered style</div>
                                        <code style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'pre' }}>{`1. Question text\n(A) Option A\n(B) Option B\n...\nANSWER KEY\n1-A  2-C`}</code>
                                    </div>
                                    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '8px 10px' }}>
                                        <div style={{ color: '#60a5fa', fontWeight: '700', marginBottom: '4px' }}>③ MCQ class style</div>
                                        <code style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'pre' }}>{`\\question Text\n\\choice A \\choice B\n\\choice C \\choice D\nAnswer: A`}</code>
                                    </div>
                                </div>
                                <div style={{ marginTop: '8px', color: '#64748b' }}>
                                    💡 LaTeX math works everywhere: <code>$x^2$</code> or <code>{"$$\\frac{a}{b}$$"}</code> — rendered via KaTeX.
                                    Answer key can be at the end as <code>1-A 2-B</code> or <code>ANSWER KEY\n1. A\n2. C</code>
                                </div>
                            </div>

                            <textarea
                                className={styles.textarea}
                                rows={14}
                                value={latexInput}
                                onChange={e => { setLatexInput(e.target.value); setLatexError(''); setLatexPreview(null); setDetectedFormat(''); }}
                                placeholder={'Paste your LaTeX questions here, or click "📋 Sample" above to see a working example.'}
                                style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: '#0f172a' }}
                            />

                            {latexError && (
                                <div style={{ color: '#ef4444', marginTop: '10px', padding: '12px', background: 'rgba(239,68,68,0.1)', borderRadius: '6px', fontSize: '0.85rem', whiteSpace: 'pre-wrap' }}>
                                    {latexError}
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <button
                                    onClick={handleLatexConvert}
                                    style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: 'white', border: 'none', borderRadius: '8px', padding: '9px 20px', fontWeight: '700', cursor: 'pointer' }}
                                >
                                    ⚡ Convert to JSON
                                </button>
                                {latexPreview && (
                                    <button
                                        onClick={handleLatexUpload}
                                        style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px', padding: '9px 20px', fontWeight: '700', cursor: 'pointer' }}
                                    >
                                        💾 Save {latexPreview.length} Question{latexPreview.length !== 1 ? 's' : ''} to DB
                                    </button>
                                )}
                                {latexPreview && (
                                    <button
                                        onClick={() => setShowLatexJson(p => !p)}
                                        style={{ background: showLatexJson ? 'rgba(99,102,241,0.25)' : 'transparent', border: '1px solid rgba(99,102,241,0.5)', color: '#a5b4fc', borderRadius: '8px', padding: '9px 14px', cursor: 'pointer', fontSize: '0.85rem' }}
                                    >
                                        {showLatexJson ? '🙈 Hide JSON' : '{ } View JSON'}
                                    </button>
                                )}
                                {latexPreview && (
                                    <button onClick={() => { setLatexPreview(null); setDetectedFormat(''); setShowLatexJson(false); }} style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '8px', padding: '9px 14px', cursor: 'pointer' }}>Discard</button>
                                )}
                            </div>

                            {latexPreview && (
                                <div style={{ marginTop: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                                        <p style={{ color: '#a3e635', fontSize: '0.85rem', margin: 0 }}>✅ Parsed <strong>{latexPreview.length}</strong> question{latexPreview.length !== 1 ? 's' : ''}</p>
                                        {detectedFormat && (
                                            <span style={{ fontSize: '0.75rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc', borderRadius: '20px', padding: '2px 10px' }}>
                                                Detected: {detectedFormat}
                                            </span>
                                        )}
                                    </div>

                                    {/* JSON raw output */}
                                    {showLatexJson && (
                                        <div style={{ marginBottom: '12px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Converted JSON — copy &amp; inspect</span>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText(JSON.stringify(latexPreview, null, 2))}
                                                    style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#94a3b8', borderRadius: '6px', padding: '3px 10px', cursor: 'pointer' }}
                                                >📋 Copy</button>
                                            </div>
                                            <textarea
                                                readOnly
                                                value={JSON.stringify(latexPreview, null, 2)}
                                                rows={10}
                                                style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.78rem', background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '8px', padding: '10px', color: '#a5b4fc', resize: 'vertical', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                    )}

                                    {/* Rendered preview */}
                                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '8px' }}>Review below before saving (LaTeX math rendered via KaTeX):</p>
                                    <div style={{ maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {latexPreview.map((q, i) => (
                                            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px 14px', border: `1px solid ${q.options.length < 2 ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.07)'}`, fontSize: '0.85rem' }}>
                                                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                                    <span style={{ color: '#818cf8', fontWeight: '700', whiteSpace: 'nowrap', marginTop: '2px' }}>Q{i + 1}.</span>
                                                    <span style={{ flex: 1 }}><LatexRenderer text={q.text} /></span>
                                                    <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '700', whiteSpace: 'nowrap', background: 'rgba(52,211,153,0.1)', borderRadius: '4px', padding: '2px 7px' }}>Ans: {q.correctOption.toUpperCase()}</span>
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px' }}>
                                                    {q.options.map(o => (
                                                        <span key={o.id} style={{ fontSize: '0.8rem', color: o.id === q.correctOption ? '#34d399' : '#64748b', fontWeight: o.id === q.correctOption ? 700 : 400, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                            <span style={{ background: o.id === q.correctOption ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center' }}>{o.id.toUpperCase()}</span>
                                                            <LatexRenderer text={o.text} />
                                                            {o.id === q.correctOption && <span style={{ color: '#34d399' }}>✓</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                                {q.options.length < 2 && (
                                                    <div style={{ color: '#f87171', fontSize: '0.75rem', marginTop: '6px' }}>⚠️ Less than 2 options detected — check your LaTeX format</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {bulkError && <div style={{ color: '#ef4444', marginTop: '10px', fontSize: '0.9rem' }}>{bulkError}</div>}
                        </div>
                    ) : !showAIPanel && uploadMode === 'bulk' ? (
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Apply Subject to All Questions:</label>
                                    <select
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        className={styles.input}
                                        style={{ width: '200px', margin: 0 }}
                                    >
                                        {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '10px' }}>
                                    Paste a JSON array of questions or upload a <code>.json</code> file.
                                </p>
                                <input 
                                    type="file" 
                                    accept=".json" 
                                    onChange={handleFileUploadBulk} 
                                    style={{ fontSize: '0.9rem', color: '#cbd5e1' }}
                                />
                            </div>
                            
                            {bulkError && <div style={{ color: '#ef4444', marginBottom: '10px', fontSize: '0.9rem', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px' }}>{bulkError}</div>}
                            
                            <textarea
                                className={styles.textarea}
                                rows={15}
                                value={bulkJson}
                                onChange={e => { setBulkJson(e.target.value); setBulkError(''); }}
                                placeholder="[{ &quot;subject&quot;: &quot;Physics&quot;, &quot;text&quot;: &quot;...&quot;, &quot;correctOption&quot;: &quot;a&quot;, &quot;options&quot;: [{ &quot;id&quot;: &quot;a&quot;, &quot;text&quot;: &quot;...&quot; }] }]"
                                style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#0f172a' }}
                            />
                            
                            <div className={styles.actions} style={{ marginTop: '20px' }}>
                                <button className={styles.saveBtn} style={{ background: '#10b981' }} onClick={handleBulkUpload}>
                                    Upload Bulk Questions
                                </button>
                            </div>
                        </div>
                    ) : (
                    <div className={styles.formGrid}>
                        {/* Jump to Question # */}
                        <div className={styles.col2}>
                            <label>Question Type
                                <select
                                    value={formData.type || 'MCQ'}
                                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                                    className={styles.input}
                                >
                                    <option value="MCQ">Multiple Choice (MCQ)</option>
                                    <option value="SUBJECTIVE">Subjective / Theory</option>
                                </select>
                            </label>
                            <label>Question No.
                                <select
                                    value={editingQuestion?.id || ''}
                                    onChange={e => {
                                        const qId = Number(e.target.value);
                                        if (!qId) { resetForm(); return; }
                                        const found = questions.find(q => q.id === qId);
                                        if (found) handleEdit(found);
                                    }}
                                    className={styles.input}
                                >
                                    <option value="">— Add New Question —</option>
                                    {questions.map(q => (
                                        <option key={q.id} value={q.id}>
                                            #{q.id} [{q.subject}] {q.text?.slice(0, 50)}{q.text?.length > 50 ? '…' : ''}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        
                        <div className={styles.col2}>
                            <label>Subject
                                <select
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value, chapter: '', subtopic: '' })}
                                    className={styles.input}
                                >
                                    {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </label>
                            <label>Chapter / Topic
                                {(() => {
                                    const allChapterData = { neet: neetChapters, 'jee-mains': jeeMainsChapters, 'jee-advance': jeeAdvancedChapters };
                                    const subjectChapters = allChapterData[selectedExam]?.[formData.subject] || {};
                                    const chapters = Object.values(subjectChapters).flat();

                                    return chapters.length > 0 ? (
                                        <select
                                            value={formData.chapter}
                                            onChange={e => setFormData({ ...formData, chapter: e.target.value })}
                                            className={styles.input}
                                        >
                                            <option value="">— Select Chapter —</option>
                                            {chapters.map(ch => <option key={ch} value={ch}>{ch}</option>)}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            value={formData.chapter}
                                            onChange={e => setFormData({ ...formData, chapter: e.target.value })}
                                            className={styles.input}
                                            placeholder="Enter Chapter Name"
                                        />
                                    );
                                })()}
                            </label>
                        </div>
                        
                        {(selectedTestType === 'SUBTOPIC' || filteredTests.find(t => t.id === selectedTestId)?.type === 'SUBTOPIC') && (
                            <div className={styles.col1} style={{ marginBottom: '1rem' }}>
                                <label>Specific Subtopic (for Topic-wise Tests)
                                    {(() => {
                                        let availableSubtopics = [...new Set(
                                            availableTests
                                                .filter(t => t.type === 'SUBTOPIC' && t.subject === formData.subject && t.chapter === formData.chapter)
                                                .map(t => t.title)
                                        )];
                                        if (availableSubtopics.length === 0) {
                                            availableSubtopics = [...new Set(
                                                availableTests
                                                    .filter(t => t.type === 'SUBTOPIC' && t.subject === formData.subject)
                                                    .map(t => t.title)
                                            )];
                                        }
                                        return availableSubtopics.length > 0 ? (
                                            <select
                                                value={formData.subtopic}
                                                onChange={e => setFormData({ ...formData, subtopic: e.target.value })}
                                                className={styles.input}
                                            >
                                                <option value="">— Select Subtopic / Topic —</option>
                                                {availableSubtopics.map(sub => (
                                                    <option key={sub} value={sub}>{sub}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                value={formData.subtopic}
                                                onChange={e => setFormData({ ...formData, subtopic: e.target.value })}
                                                className={styles.input}
                                                placeholder="e.g. Bohr's Model, Kinematics in 1D, etc."
                                            />
                                        );
                                    })()}
                                </label>
                            </div>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
                            {formData.type !== 'SUBJECTIVE' && (
                                <label style={{ flex: 1, paddingRight: '1rem' }}>Correct Option
                                    <select
                                        value={formData.correctOption}
                                        onChange={e => setFormData({ ...formData, correctOption: e.target.value })}
                                        className={styles.input}
                                    >
                                        <option value="a">Option A</option>
                                        <option value="b">Option B</option>
                                        <option value="c">Option C</option>
                                        <option value="d">Option D</option>
                                    </select>
                                </label>
                            )}
                            {editingQuestion && (
                                <button
                                    onClick={() => { if (confirm(`Delete Question #${editingQuestion.id}?`)) { handleDelete(editingQuestion.id); resetForm(); } }}
                                    style={{ marginLeft: '16px', marginTop: '20px', background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontWeight: '700', whiteSpace: 'nowrap' }}
                                >
                                    🗑 Delete Q#{editingQuestion.id}
                                </button>
                            )}
                        </div>

                        <label>Question Text (Supports LaTeX: $math$ or $$math$$)
                            <textarea
                                className={styles.textarea}
                                rows={3}
                                value={formData.text}
                                onChange={e => setFormData({ ...formData, text: e.target.value })}
                                placeholder="Enter question. Use $x^2$ for inline math."
                            />
                            <div style={{ marginTop: '10px' }}>
                                <small>Attach Image (Optional): </small>
                                <input type="file" onChange={(e) => handleFileUpload(e, 'image')} accept="image/*" />
                                {formData.image && <img src={formData.image} alt="Preview" style={{ maxHeight: '100px', display: 'block', marginTop: '5px' }} />}
                            </div>
                            {formData.text && <div className={styles.preview}><small>Preview:</small> <LatexRenderer text={formData.text} /></div>}
                        </label>

                        {formData.type !== 'SUBJECTIVE' && (
                            <div className={styles.col2}>
                                <div>
                                    <input className={styles.input} placeholder="Option A" value={formData.optionA} onChange={e => setFormData({ ...formData, optionA: e.target.value })} />
                                    <input type="file" onChange={(e) => handleFileUpload(e, 'optionAImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                    {formData.optionAImage && <img src={formData.optionAImage} alt="Opt A" style={{ maxHeight: '50px', display: 'block' }} />}
                                    {formData.optionA && <div className={styles.previewSmall}><LatexRenderer text={formData.optionA} /></div>}
                                </div>
                                <div>
                                    <input className={styles.input} placeholder="Option B" value={formData.optionB} onChange={e => setFormData({ ...formData, optionB: e.target.value })} />
                                    <input type="file" onChange={(e) => handleFileUpload(e, 'optionBImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                    {formData.optionBImage && <img src={formData.optionBImage} alt="Opt B" style={{ maxHeight: '50px', display: 'block' }} />}
                                    {formData.optionB && <div className={styles.previewSmall}><LatexRenderer text={formData.optionB} /></div>}
                                </div>
                                <div>
                                    <input className={styles.input} placeholder="Option C" value={formData.optionC} onChange={e => setFormData({ ...formData, optionC: e.target.value })} />
                                    <input type="file" onChange={(e) => handleFileUpload(e, 'optionCImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                    {formData.optionCImage && <img src={formData.optionCImage} alt="Opt C" style={{ maxHeight: '50px', display: 'block' }} />}
                                    {formData.optionC && <div className={styles.previewSmall}><LatexRenderer text={formData.optionC} /></div>}
                                </div>
                                <div>
                                    <input className={styles.input} placeholder="Option D" value={formData.optionD} onChange={e => setFormData({ ...formData, optionD: e.target.value })} />
                                    <input type="file" onChange={(e) => handleFileUpload(e, 'optionDImage')} accept="image/*" style={{ fontSize: '0.8rem', marginTop: '5px' }} />
                                    {formData.optionDImage && <img src={formData.optionDImage} alt="Opt D" style={{ maxHeight: '50px', display: 'block' }} />}
                                    {formData.optionD && <div className={styles.previewSmall}><LatexRenderer text={formData.optionD} /></div>}
                                </div>
                            </div>
                        )}

                        <label>Explanation
                            <textarea
                                className={styles.textarea}
                                rows={2}
                                value={formData.explanation}
                                onChange={e => setFormData({ ...formData, explanation: e.target.value })}
                                placeholder="Explain the solution..."
                            />
                            {formData.explanation && <div className={styles.preview}><small>Preview:</small> <LatexRenderer text={formData.explanation} /></div>}
                        </label>

                        <div className={styles.actions}>
                            <button className={styles.saveBtn} onClick={handleSave}>
                                {editingQuestion ? 'Update Question' : 'Add Question'}
                            </button>
                            {editingQuestion && <button className={styles.cancelBtn} onClick={resetForm}>Cancel</button>}
                        </div>
                    </div>
                    )}
                </div>

                <div className={styles.list}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
                        <h2 className={styles.subtitle} style={{ margin: 0 }}>Existing Questions ({questions.length})</h2>
                        {questions.length > questionsPerPage && (
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
                                >
                                    &lt; Prev
                                </button>
                                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                                    Range: {(currentPage - 1) * questionsPerPage + 1} - {Math.min(currentPage * questionsPerPage, questions.length)}
                                </span>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(questions.length / questionsPerPage), p + 1))}
                                    disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
                                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: currentPage === Math.ceil(questions.length / questionsPerPage) ? 'not-allowed' : 'pointer', opacity: currentPage === Math.ceil(questions.length / questionsPerPage) ? 0.5 : 1 }}
                                >
                                    Next &gt;
                                </button>
                            </div>
                        )}
                    </div>
                    {loading ? <p>Loading...</p> : (
                        questions.length === 0 ? <p className={styles.empty}>No custom questions added yet. (Mock data will be used mostly)</p> :
                            questions.slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage).map(q => (
                                <div key={q.id} className={styles.questionItem}>
                                    <div className={styles.qHeader}>
                                        <span className={styles.qId}>#{q.id}</span>
                                        <span className={styles.qSubject}>{q.subject}</span>
                                        <span style={{ fontSize: '0.75rem', padding: '2px 6px', background: q.type === 'SUBJECTIVE' ? '#f59e0b' : '#3b82f6', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>{q.type || 'MCQ'}</span>
                                        <div className={styles.qActions}>
                                            <button onClick={() => handleEdit(q)} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(q.id)} className={styles.deleteBtn}>Delete</button>
                                        </div>
                                    </div>
                                    <div className={styles.qText}>
                                        <LatexRenderer text={q.text} />
                                        {q.image && <img src={q.image} alt="Q" style={{ maxHeight: '100px', display: 'block', marginTop: '10px' }} />}
                                    </div>
                                    {q.type !== 'SUBJECTIVE' && q.options && (
                                        <div className={styles.qOptions}>
                                            <span className={q.correctOption === 'a' ? styles.correct : ''}>
                                                A: <LatexRenderer text={q.options[0]?.text || ""} />
                                                {q.options[0]?.image && <img src={q.options[0]?.image} alt="Opt A" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'b' ? styles.correct : ''}>
                                            B: <LatexRenderer text={q.options[1]?.text || ""} />
                                            {q.options[1]?.image && <img src={q.options[1]?.image} alt="Opt B" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'c' ? styles.correct : ''}>
                                            C: <LatexRenderer text={q.options[2]?.text || ""} />
                                            {q.options[2]?.image && <img src={q.options[2]?.image} alt="Opt C" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                        <span className={q.correctOption === 'd' ? styles.correct : ''}>
                                            D: <LatexRenderer text={q.options[3]?.text || ""} />
                                            {q.options[3]?.image && <img src={q.options[3]?.image} alt="Opt D" style={{ maxHeight: '40px', display: 'block' }} />}
                                        </span>
                                    </div>
                                    )}
                                </div>
                            ))
                    )}
                </div>
                  </>
                )}

            </div>
        </div>
    );
}
