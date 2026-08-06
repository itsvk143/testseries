'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import { neetTests } from '../../data/exams/neet';
import { jeeMainsTests } from '../../data/exams/jeeMains';
import { neetChapters } from '../../data/exams/neet';
import { jeeMainsChapters } from '../../data/exams/jeeMains';
import { bitsatTests, bitsatChapters } from '../../data/exams/bitsat';

import dynamic from 'next/dynamic';
const LatexRenderer = dynamic(() => import('../../components/LatexRenderer'), { ssr: false });
import TestManager from './TestManager';
import TestMappingPanel from './TestMappingPanel';
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
    const [uploadMode, setUploadMode] = useState('single'); // 'single' | 'ai' | 'bulk' | 'latex'
    const [bulkJson, setBulkJson] = useState('');
    const [bulkError, setBulkError] = useState('');
    const [latexInput, setLatexInput] = useState('');
    const [latexError, setLatexError] = useState('');
    const [latexPreview, setLatexPreview] = useState(null); // converted questions array
    const [showLatexJson, setShowLatexJson] = useState(false);
    const [detectedFormat, setDetectedFormat] = useState('');
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
    const [globalQuestions, setGlobalQuestions] = useState([]);
    const [loadingGlobal, setLoadingGlobal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchSubject, setSearchSubject] = useState('ALL');
    const [stats, setStats] = useState({});
    const [loadingStats, setLoadingStats] = useState(false);
    const [explorerSubject, setExplorerSubject] = useState('');
    const [explorerChapter, setExplorerChapter] = useState('');
    const [explorerQuestions, setExplorerQuestions] = useState([]);
    const [loadingExplorerQs, setLoadingExplorerQs] = useState(false);
    const [filterSubject, setFilterSubject] = useState('ALL');
    const [filterChapter, setFilterChapter] = useState('ALL');
    const globalSubjects = ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology'];
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
                ...bitsatTests
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
                bitsat: ['Physics', 'Chemistry', 'Mathematics'],
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

    useEffect(() => {
        if (activeTab === 'questionBank') {
            setSelectedTestId('global');
        } else if (activeTab === 'questions') {
            if (selectedTestId === 'global' || !selectedTestId) {
                if (filteredTests.length > 0) {
                    setSelectedTestId(filteredTests[0].id);
                } else {
                    setSelectedTestId('');
                }
            }
        }
    }, [activeTab, filteredTests]);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const subjectQuery = filterSubject !== 'ALL' ? `&subject=${filterSubject}` : '';
            const chapterQuery = filterChapter !== 'ALL' ? `&chapter=${filterChapter}` : '';
            const res = await fetch(`/api/questions?testId=${selectedTestId}${subjectQuery}${chapterQuery}`);
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

    const fetchGlobalQuestions = async () => {
        setLoadingGlobal(true);
        try {
            const res = await fetch('/api/questions?testId=global');
            const data = await res.json();
            setGlobalQuestions(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingGlobal(false);
        }
    };

    const handleToggleLink = async (q, isLinked) => {
        try {
            const res = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: selectedTestId,
                    action: isLinked ? 'UNLINK_QUESTION' : 'LINK_QUESTIONS',
                    ...(isLinked ? { questionId: q._id } : { questionIds: [q._id] })
                })
            });
            if (!res.ok) throw new Error('Action failed');
            fetchQuestions(); // Refresh test's questions
        } catch (err) {
            alert('Error toggling link: ' + err.message);
        }
    };

    const fetchStats = async () => {
        setLoadingStats(true);
        try {
            const res = await fetch('/api/admin/question-stats');
            const data = await res.json();
            if (res.ok) {
                setStats(data);
            }
        } catch (err) {
            console.error('Failed to fetch stats:', err);
        } finally {
            setLoadingStats(false);
        }
    };

    const fetchExplorerQuestions = async (sub, ch) => {
        setLoadingExplorerQs(true);
        try {
            let url;
            if (ch === '__uncategorized__') {
                // Fetch questions with no chapter for this subject
                url = `/api/questions?testId=global&subject=${sub}&chapter=__empty__`;
            } else {
                url = `/api/questions?testId=global&subject=${sub}&chapter=${encodeURIComponent(ch)}`;
            }
            const res = await fetch(url);
            const data = await res.json();
            setExplorerQuestions(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Failed to fetch explorer questions:', err);
            setExplorerQuestions([]);
        } finally {
            setLoadingExplorerQs(false);
        }
    };

    // Fetch stats on mount so chapter dropdown in edit form is always populated
    useEffect(() => {
        fetchStats();
    }, []);

    useEffect(() => {
        if (activeTab === 'explorer') {
            fetchStats();
            setExplorerSubject('Physics');
            setExplorerChapter('');
        }
    }, [activeTab]);

    useEffect(() => {
        if (selectedTestId === 'global') {
            fetchQuestions();
        }
    }, [filterSubject, filterChapter, selectedTestId]);

    useEffect(() => {
        if (activeTab === 'explorer' && explorerSubject && explorerChapter) {
            fetchExplorerQuestions(explorerSubject, explorerChapter);
        } else {
            setExplorerQuestions([]);
        }
    }, [explorerSubject, explorerChapter, activeTab]);

    useEffect(() => {
        if (activeTab === 'explorer' && !explorerSubject) {
            setExplorerSubject('Physics');
        }
    }, [activeTab]);

    useEffect(() => {
        if (uploadMode === 'link') {
            fetchGlobalQuestions();
        }
    }, [uploadMode]);

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
            ...(formData.type === 'NUMERICAL' ? {
                correctOption: formData.correctOption,
                options: []
            } : {
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

    const handleDelete = async (q) => {
        if (!confirm('Are you sure you want to delete this question?')) return;

        await fetch('/api/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: selectedTestId,
                question: { id: q.id, _id: q._id },
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
                {/* Header */}
                <div className={styles.headerSection}>
                    <div className={styles.titleGroup}>
                        <h1 className={styles.title}>Admin Control Center</h1>
                        <span className={styles.adminBadge}>Admin Mode</span>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className={styles.tabs}>
                    <button 
                        className={`${styles.tab} ${activeTab === 'questions' ? styles.activeTab : ''}`}
                        onClick={() => {
                            setActiveTab('questions');
                            setSelectedTestId('global');
                        }}
                    >
                        <span>📝</span> Manage Questions
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === 'explorer' ? styles.activeTab : ''}`}
                        onClick={() => {
                            setActiveTab('explorer');
                        }}
                    >
                        <span>🔍</span> Question Bank Explorer
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === 'tests' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('tests')}
                    >
                        <span>⚙️</span> Manage Tests & Dates
                    </button>
                    <button 
                        className={`${styles.tab} ${activeTab === 'mapping' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('mapping')}
                    >
                        <span>🗺️</span> Test Mapping
                    </button>
                </div>
 
                {activeTab === 'tests' && (
                    <div className={styles.controls}>
                        <select
                            value={selectedExam}
                            onChange={(e) => { 
                                setSelectedExam(e.target.value); 
                            }}
                            className={styles.select}
                        >
                            <option value="neet">NEET</option>
                            <option value="jee-mains">JEE Mains</option>
                                                        <option value="bitsat">BITSAT</option>
                        </select>
                    </div>
                )}

                {activeTab === 'mapping' ? (
                    <TestMappingPanel
                        allTests={[
                            ...neetTests,
                            ...jeeMainsTests,
                            ...bitsatTests
                        ]}
                    />
                ) : activeTab === 'tests' ? (
                    <TestManager 
                        selectedExam={selectedExam} 
                        availableTests={availableTests} 
                        autoCreate={shouldAutoCreate}
                        onAutoCreateHandled={() => setShouldAutoCreate(false)}
                    />
                ) : activeTab === 'explorer' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '30px', marginTop: '20px' }}>
                        {/* Left Side: Subject list and Chapter list */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Subject selector tabs */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '16px' }}>
                                <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem', color: '#818cf8', fontWeight: 'bold' }}>Subjects</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {globalSubjects.map(sub => {
                                        const subData = stats[sub] || {};
                                        // _total from API = ALL questions for this subject
                                        const totalCount = subData._total || 0;

                                        return (
                                            <button
                                                key={sub}
                                                onClick={() => { setExplorerSubject(sub); setExplorerChapter(''); }}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    background: explorerSubject === sub ? 'rgba(99,102,241,0.15)' : 'transparent',
                                                    border: `1px solid ${explorerSubject === sub ? 'rgba(99,102,241,0.4)' : 'transparent'}`,
                                                    color: explorerSubject === sub ? 'white' : '#94a3b8',
                                                    padding: '10px 14px',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    fontSize: '0.9rem',
                                                    fontWeight: explorerSubject === sub ? 'bold' : 'normal',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                <span>{sub}</span>
                                                <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '12px', color: '#cbd5e1' }}>
                                                    {totalCount}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Chapter list */}
                            {explorerSubject && (
                                <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '16px' }}>
                                    <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem', color: '#14b8a6', fontWeight: 'bold' }}>Topics in {explorerSubject}</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '450px', overflowY: 'auto' }}>
                                        {(() => {
                                            const subData = stats[explorerSubject] || {};
                                            const uncategorizedCount = subData._uncategorized || 0;
                                            // Build chapter list from DB stats — skip meta keys
                                            const chapterEntries = Object.entries(subData)
                                                .filter(([k]) => !k.startsWith('_'))
                                                .sort((a, b) => b[1] - a[1]); // sort by count desc

                                            if (chapterEntries.length === 0 && uncategorizedCount === 0) {
                                                return <p style={{ color: '#64748b', fontSize: '0.85rem' }}>No questions found for this subject.</p>;
                                            }

                                            const chapterButtons = chapterEntries.map(([ch, count]) => (
                                                <button
                                                    key={ch}
                                                    onClick={() => setExplorerChapter(ch)}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        background: explorerChapter === ch ? 'rgba(20,184,166,0.15)' : 'transparent',
                                                        border: `1px solid ${explorerChapter === ch ? 'rgba(20,184,166,0.4)' : 'transparent'}`,
                                                        color: explorerChapter === ch ? 'white' : '#cbd5e1',
                                                        padding: '8px 12px',
                                                        borderRadius: '8px',
                                                        cursor: 'pointer',
                                                        textAlign: 'left',
                                                        fontSize: '0.8rem',
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    <span style={{ flex: 1, marginRight: '10px', whiteSpace: 'normal', lineHeight: '1.3' }}>{ch}</span>
                                                    <span style={{ fontSize: '0.7rem', background: 'rgba(20,184,166,0.2)', border: '1px solid #14b8a644', padding: '1px 6px', borderRadius: '10px', color: '#14b8a6', fontWeight: 'bold' }}>
                                                        {count}
                                                    </span>
                                                </button>
                                            ));

                                            // Append Uncategorized row if any
                                            if (uncategorizedCount > 0) {
                                                chapterButtons.push(
                                                    <button
                                                        key="__uncategorized__"
                                                        onClick={() => setExplorerChapter('__uncategorized__')}
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            background: explorerChapter === '__uncategorized__' ? 'rgba(100,116,139,0.15)' : 'transparent',
                                                            border: `1px solid ${explorerChapter === '__uncategorized__' ? 'rgba(100,116,139,0.4)' : 'transparent'}`,
                                                            color: '#64748b',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                            cursor: 'pointer',
                                                            textAlign: 'left',
                                                            fontSize: '0.8rem',
                                                            transition: 'all 0.2s',
                                                            marginTop: '4px',
                                                            borderTop: '1px solid rgba(255,255,255,0.06)'
                                                        }}
                                                    >
                                                        <span style={{ flex: 1, marginRight: '10px', fontStyle: 'italic' }}>Uncategorized</span>
                                                        <span style={{ fontSize: '0.7rem', background: 'rgba(100,116,139,0.2)', padding: '1px 6px', borderRadius: '10px', color: '#94a3b8', fontWeight: 'bold' }}>
                                                            {uncategorizedCount}
                                                        </span>
                                                    </button>
                                                );
                                            }

                                            return chapterButtons;
                                        })()}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Side: Questions list for selected subject + chapter */}
                        <div style={{ flex: 1 }}>
                            {explorerChapter ? (
                                <div style={{ background: 'rgba(255,255,255,0.01)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                                        <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#14b8a6', fontWeight: 'bold' }}>
                                            {explorerChapter === '__uncategorized__' ? 'Uncategorized Questions' : explorerChapter} <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 'normal' }}>({explorerQuestions.length} Questions)</span>
                                        </h2>
                                    </div>

                                    {loadingExplorerQs ? (
                                        <p style={{ color: '#94a3b8' }}>Loading questions...</p>
                                    ) : explorerQuestions.length === 0 ? (
                                        <p style={{ color: '#64748b', textAlign: 'center', padding: '40px' }}>No questions found in database under this topic.</p>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            {explorerQuestions.map((q, idx) => (
                                                <div key={q._id || q.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                                        <span style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 'bold' }}>
                                                            Question #{idx + 1} <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 'normal', marginLeft: '6px' }}>(ID: {q._id})</span>
                                                        </span>
                                                        <div style={{ display: 'flex', gap: '10px' }}>
                                                            <button 
                                                                onClick={() => {
                                                                    setEditingQuestion(q);
                                                                    setFormData({
                                                                        type: q.type || 'MCQ',
                                                                        text: q.text,
                                                                        image: q.image || '',
                                                                        subject: q.subject,
                                                                        chapter: q.chapter || '',
                                                                        subtopic: q.subtopic || '',
                                                                        correctOption: q.correctOption || 'a',
                                                                        optionA: q.options?.[0]?.text || '',
                                                                        optionAImage: q.options?.[0]?.image || '',
                                                                        optionB: q.options?.[1]?.text || '',
                                                                        optionBImage: q.options?.[1]?.image || '',
                                                                        optionC: q.options?.[2]?.text || '',
                                                                        optionCImage: q.options?.[2]?.image || '',
                                                                        optionD: q.options?.[3]?.text || '',
                                                                        optionDImage: q.options?.[3]?.image || '',
                                                                    });
                                                                    setActiveTab('questions');
                                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                }} 
                                                                style={{ background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem', cursor: 'pointer' }}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button 
                                                                onClick={async () => {
                                                                    if (confirm('Are you sure you want to delete this question?')) {
                                                                        await fetch('/api/questions', {
                                                                            method: 'POST',
                                                                            headers: { 'Content-Type': 'application/json' },
                                                                            body: JSON.stringify({
                                                                                testId: 'global',
                                                                                question: { id: q.id, _id: q._id },
                                                                                action: 'DELETE'
                                                                            })
                                                                        });
                                                                        fetchExplorerQuestions(explorerSubject, explorerChapter);
                                                                        fetchStats();
                                                                    }
                                                                }} 
                                                                style={{ background: 'transparent', border: '1px solid #ef444466', color: '#ef4444', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem', cursor: 'pointer' }}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div style={{ color: 'white', lineHeight: '1.4', fontSize: '0.9rem', marginBottom: '10px' }}>
                                                        <LatexRenderer text={q.text} />
                                                    </div>
                                                    {q.type !== 'SUBJECTIVE' && q.options && (
                                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' }}>
                                                            {q.options.map(opt => (
                                                                <span key={opt.id} style={{ fontSize: '0.8rem', color: opt.id === q.correctOption ? '#10b981' : '#cbd5e1', fontWeight: opt.id === q.correctOption ? 'bold' : 'normal' }}>
                                                                    ({opt.id.toUpperCase()}) <LatexRenderer text={opt.text} />
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', background: 'rgba(255,255,255,0.01)', borderRadius: '14px', border: '1px dashed rgba(255,255,255,0.1)', padding: '40px', color: '#64748b' }}>
                                    <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔍</span>
                                    <p style={{ margin: 0 }}>Select a subject and chapter/topic to view all questions.</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                  <>
                <div className={styles.editor}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                        <h2 className={styles.subtitle}>{editingQuestion ? `Edit Question #${editingQuestion.id}` : 'Add New Question(s)'}</h2>
                        {!editingQuestion && (
                            <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px', flexWrap: 'wrap' }}>
                                <button 
                                    onClick={() => setUploadMode('single')}
                                    style={{
                                        background: uploadMode === 'single' ? '#4f46e5' : 'transparent',
                                        color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: uploadMode === 'single' ? 'bold' : 'normal'
                                    }}
                                >Single Entry</button>
                                <button 
                                    onClick={() => { setUploadMode('ai'); setAiPreview(null); }}
                                    style={{
                                        background: uploadMode === 'ai' ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'transparent',
                                        color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold'
                                    }}
                                >🤖 AI Generate</button>
                                <button 
                                    onClick={() => setUploadMode('bulk')}
                                    style={{
                                        background: uploadMode === 'bulk' ? '#10b981' : 'transparent',
                                        color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: uploadMode === 'bulk' ? 'bold' : 'normal'
                                    }}
                                >Bulk JSON Upload</button>
                                <button
                                    onClick={() => setUploadMode('latex')}
                                    style={{
                                        background: uploadMode === 'latex' ? '#f59e0b' : 'transparent',
                                        color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: uploadMode === 'latex' ? 'bold' : 'normal'
                                    }}
                                >📄 LaTeX Upload</button>
                                {selectedTestId !== 'global' && (
                                    <button 
                                        onClick={() => setUploadMode('link')}
                                        style={{
                                            background: uploadMode === 'link' ? '#14b8a6' : 'transparent',
                                            color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: uploadMode === 'link' ? 'bold' : 'normal'
                                        }}
                                    >🔗 Link from Bank</button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* ── Inline AI Generate Panel ── */}
                    {uploadMode === 'ai' ? (
                        <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', padding: '18px' }}>
                            <p style={{ margin: '0 0 12px', color: '#a5b4fc', fontWeight: '700', fontSize: '0.95rem' }}>🤖 Gemini AI — Generate &amp; Save to: <span style={{ color: 'white' }}>{filteredTests.find(t => t.id === selectedTestId)?.title || selectedTestId}</span></p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                                {/* Subject dropdown */}
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Subject
                                    <select value={aiForm.subject} onChange={e => setAiForm(f => ({ ...f, subject: e.target.value }))} style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '7px 10px', color: 'white', fontSize: '14px' }}>
                                        <option value="">Any / All</option>
                                        {globalSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </label>
                                {/* Chapter multi-select dropdown */}
                                {(() => {
                                    // Merge all chapters from all exams for subject
                                    let chapters = [];
                                    if (aiForm.subject) {
                                        const allChapterData = { neet: neetChapters, 'jee-mains': jeeMainsChapters, bitsat: bitsatChapters };
                                        Object.values(allChapterData).forEach(examData => {
                                            if (examData[aiForm.subject]) {
                                                const subjectChapters = examData[aiForm.subject];
                                                if (aiForm.classGrade && subjectChapters[aiForm.classGrade]) {
                                                    chapters.push(...subjectChapters[aiForm.classGrade]);
                                                } else {
                                                    chapters.push(...Object.values(subjectChapters).flat());
                                                }
                                            }
                                        });
                                        chapters = [...new Set(chapters)].sort((a, b) => a.localeCompare(b));
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
                                            {q.explanation && (
                                                <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '6px' }}>
                                                    <strong>Explanation:</strong> {q.explanation}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : uploadMode === 'latex' ? (
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
                                    {globalSubjects.map(s => <option key={s} value={s}>{s}</option>)}
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
                    ) : uploadMode === 'bulk' ? (
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
                                        {globalSubjects.map(s => <option key={s} value={s}>{s}</option>)}
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
                    ) : uploadMode === 'link' ? (
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ margin: '0 0 12px', color: '#14b8a6', fontWeight: '700', fontSize: '0.95rem' }}>🔗 Link Existing Questions to: <span style={{ color: 'white' }}>{filteredTests.find(t => t.id === selectedTestId)?.title || selectedTestId}</span></p>
                            
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                                <input
                                    type="text"
                                    placeholder="Search by text..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', color: 'white', fontSize: '14px', minWidth: '200px' }}
                                />
                                <select
                                    value={searchSubject}
                                    onChange={e => setSearchSubject(e.target.value)}
                                    style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', color: 'white', fontSize: '14px' }}
                                >
                                    <option value="ALL">All Subjects</option>
                                    {globalSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                                <button 
                                    onClick={fetchGlobalQuestions}
                                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }}
                                >
                                    🔄 Refresh Bank
                                </button>
                            </div>

                            {loadingGlobal ? (
                                <p style={{ color: 'var(--text-muted)' }}>Loading Central Bank...</p>
                            ) : (
                                <div style={{ maxHeight: '450px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {(() => {
                                        const filtered = globalQuestions.filter(q => {
                                            if (searchSubject !== 'ALL' && q.subject !== searchSubject) return false;
                                            if (searchTerm.trim()) {
                                                const term = searchTerm.toLowerCase();
                                                const matchesText = q.text?.toLowerCase().includes(term);
                                                const matchesChapter = q.chapter?.toLowerCase().includes(term);
                                                if (!matchesText && !matchesChapter) return false;
                                            }
                                            return true;
                                        });

                                        if (filtered.length === 0) {
                                            return <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>No matching questions found in Central Bank.</p>;
                                        }

                                        return filtered.map((q) => {
                                            const isLinked = questions.some(tq => tq._id === q._id);
                                            return (
                                                <div key={q._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px 16px' }}>
                                                    <div style={{ flex: 1, fontSize: '0.85rem' }}>
                                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '6px', fontSize: '0.75rem' }}>
                                                            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>#{q.id}</span>
                                                            <span style={{ color: 'var(--accent)', background: 'rgba(99,102,241,0.15)', padding: '1px 6px', borderRadius: '4px' }}>{q.subject}</span>
                                                            {q.chapter && <span style={{ color: '#a5b4fc', background: 'rgba(255,255,255,0.05)', padding: '1px 6px', borderRadius: '4px' }}>{q.chapter}</span>}
                                                            <span style={{ color: q.type === 'SUBJECTIVE' ? '#f59e0b' : '#34d399', fontWeight: 'bold' }}>{q.type}</span>
                                                        </div>
                                                        <div style={{ color: 'white', lineHeight: '1.4' }}>
                                                            <LatexRenderer text={q.text} />
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleToggleLink(q, isLinked)}
                                                        style={{
                                                            background: isLinked ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)',
                                                            border: `1px solid ${isLinked ? '#ef4444' : '#10b981'}`,
                                                            color: isLinked ? '#ef4444' : '#10b981',
                                                            borderRadius: '6px',
                                                            padding: '6px 14px',
                                                            fontWeight: 'bold',
                                                            fontSize: '0.8rem',
                                                            cursor: 'pointer',
                                                            whiteSpace: 'nowrap',
                                                            alignSelf: 'center',
                                                            transition: 'all 0.2s'
                                                        }}
                                                    >
                                                        {isLinked ? '❌ Unlink' : '➕ Link to Test'}
                                                    </button>
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            )}
                        </div>
                    ) : (
                    <div className={styles.formGrid}>
                        {/* Jump to Question # */}
                        <div className={styles.col2}>
                            <label>Question Type
                                <select
                                    value={formData.type || 'MCQ'}
                                    onChange={e => {
                                        const newType = e.target.value;
                                        let updated = { ...formData, type: newType };
                                        if (newType === 'ASSERTION_REASON' && (!formData.optionA || formData.optionA.trim() === '')) {
                                            updated.optionA = "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).";
                                            updated.optionB = "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).";
                                            updated.optionC = "Assertion (A) is true but Reason (R) is false.";
                                            updated.optionD = "Assertion (A) is false but Reason (R) is true.";
                                        }
                                        setFormData(updated);
                                    }}
                                    className={styles.input}
                                >
                                    <option value="MCQ">Multiple Choice (MCQ)</option>
                                    <option value="NUMERICAL">Numerical Value</option>
                                    <option value="ASSERTION_REASON">Assertion & Reasoning</option>
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
                                    {globalSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </label>
                            <label>Chapter / Topic
                                {(() => {
                                    // Full static chapter map covering all subjects across all exams
                                    const staticChapterMap = {
                                        Physics: [
                                            // Class 11
                                            "Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power",
                                            "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics",
                                            "Kinetic Theory of Gases", "Oscillations and Waves",
                                            // Class 12
                                            "Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism",
                                            "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves",
                                            "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei",
                                            "Electronic Devices", "Experimental Skills"
                                        ],
                                        Chemistry: [
                                            // Class 11
                                            "Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding and Molecular Structure",
                                            "Chemical Thermodynamics", "Solutions", "Equilibrium", "Redox Reactions and Electrochemistry",
                                            "Chemical Kinetics", "Classification of Elements and Periodicity in Properties", "P-Block Elements",
                                            // Class 12
                                            "d and f- Block Elements", "Co-ordination Compounds", "Purification and Characterisation of Organic Compounds",
                                            "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens",
                                            "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen",
                                            "Biomolecules", "Principles Related to Practical Chemistry"
                                        ],
                                        Mathematics: [
                                            // Class 11
                                            "Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations",
                                            "Binomial Theorem", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)",
                                            "Trigonometric Identities",
                                            // Class 12
                                            "Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives",
                                            "Integrals", "Differential Equations", "Areas", "Vectors", "3D Geometry",
                                            "Inverse Trigonometric Functions", "Probability", "Statistics"
                                        ],
                                        Botany: [
                                            "Diversity in Living World", "Plant Physiology", "Cell Structure and Function",
                                            "Genetics and Evolution", "Ecology and Environment"
                                        ],
                                        Zoology: [
                                            "Structural Organisation in Animals and Plants", "Human Physiology",
                                            "Reproduction", "Biology and Human Welfare", "Biotechnology and Its Applications"
                                        ]
                                    };

                                    // Always start with the full static chapter list for the selected subject
                                    const staticChapters = staticChapterMap[formData.subject] || [];

                                    // Merge with any chapters already in DB stats (so newly added chapters also appear)
                                    const dbChapters = (stats && stats[formData.subject])
                                        ? Object.keys(stats[formData.subject]).filter(k => !k.startsWith('_'))
                                        : [];

                                    // Combine & deduplicate, sorted alphabetically
                                    const allChapters = [...new Set([...staticChapters, ...dbChapters])].sort((a, b) => a.localeCompare(b));

                                    return allChapters.length > 0 ? (
                                        <select
                                            value={formData.chapter}
                                            onChange={e => setFormData({ ...formData, chapter: e.target.value })}
                                            className={styles.input}
                                        >
                                            <option value="">— Select Chapter —</option>
                                            {allChapters.map(ch => <option key={ch} value={ch}>{ch}</option>)}
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
                            {formData.type === 'NUMERICAL' ? (
                                <label style={{ flex: 1, paddingRight: '1rem' }}>Correct Numerical Value / Answer
                                    <input
                                        type="text"
                                        value={formData.correctOption}
                                        onChange={e => setFormData({ ...formData, correctOption: e.target.value })}
                                        className={styles.input}
                                        placeholder="e.g. 5.25 or 10"
                                    />
                                </label>
                            ) : (
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
                                    onClick={() => { if (confirm(`Delete Question #${editingQuestion.id}?`)) { handleDelete(editingQuestion); resetForm(); } }}
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

                        {formData.type !== 'NUMERICAL' && (
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                            <h2 className={styles.subtitle} style={{ margin: 0 }}>Existing Questions ({questions.length})</h2>
                            
                            {/* Subject Filter */}
                            <select
                                value={filterSubject}
                                onChange={e => { setFilterSubject(e.target.value); setFilterChapter('ALL'); setCurrentPage(1); }}
                                className={styles.select}
                                style={{ margin: 0, padding: '6px 12px', fontSize: '0.85rem' }}
                            >
                                <option value="ALL">All Subjects</option>
                                {globalSubjects.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>

                            {/* Chapter Filter */}
                            {filterSubject !== 'ALL' && (
                                <select
                                    value={filterChapter}
                                    onChange={e => { setFilterChapter(e.target.value); setCurrentPage(1); }}
                                    className={styles.select}
                                    style={{ margin: 0, padding: '6px 12px', fontSize: '0.85rem' }}
                                >
                                    <option value="ALL">All Chapters</option>
                                    {(() => {
                                        const staticChapterMap = {
                                            Physics: [
                                                "Physics and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power",
                                                "Rotational Motion", "Gravitation", "Properties of Solids and Liquids", "Thermodynamics",
                                                "Kinetic Theory of Gases", "Oscillations and Waves",
                                                "Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism",
                                                "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves",
                                                "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills"
                                            ],
                                            Chemistry: [
                                                "Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding and Molecular Structure",
                                                "Chemical Thermodynamics", "Solutions", "Equilibrium", "Redox Reactions and Electrochemistry",
                                                "Chemical Kinetics", "Classification of Elements and Periodicity in Properties", "P-Block Elements",
                                                "d and f- Block Elements", "Co-ordination Compounds", "Purification and Characterisation of Organic Compounds",
                                                "Some Basic Principles of Organic Chemistry", "Hydrocarbons", "Organic Compounds Containing Halogens",
                                                "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry"
                                            ],
                                            Mathematics: [
                                                "Complex Numbers", "Quadratic Equations", "Sequences & Series", "Permutations & Combinations",
                                                "Binomial Theorem", "Straight Lines", "Circles", "Conic Sections (Parabola, Ellipse, Hyperbola)", "Trigonometric Identities",
                                                "Matrices & Determinants", "Limits, Continuity & Differentiability", "Application of Derivatives",
                                                "Integrals", "Differential Equations", "Areas", "Vectors", "3D Geometry", "Inverse Trigonometric Functions", "Probability", "Statistics"
                                            ],
                                            Botany: ["Diversity in Living World", "Plant Physiology", "Cell Structure and Function", "Genetics and Evolution", "Ecology and Environment"],
                                            Zoology: ["Structural Organisation in Animals and Plants", "Human Physiology", "Reproduction", "Biology and Human Welfare", "Biotechnology and Its Applications"]
                                        };
                                        const dbChapters = (stats && stats[filterSubject]) ? Object.keys(stats[filterSubject]).filter(k => !k.startsWith('_')) : [];
                                        const uniqueChapters = [...new Set([...(staticChapterMap[filterSubject] || []), ...dbChapters])].sort((a, b) => a.localeCompare(b));
                                        return uniqueChapters.map(ch => (
                                            <option key={ch} value={ch}>{ch}</option>
                                        ));
                                    })()}
                                </select>
                            )}
                        </div>
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
                                        <span style={{ 
                                            fontSize: '0.75rem', 
                                            padding: '3px 8px', 
                                            background: q.type === 'NUMERICAL' ? '#8b5cf6' : q.type === 'ASSERTION_REASON' ? '#f59e0b' : '#3b82f6', 
                                            color: 'white', 
                                            borderRadius: '6px', 
                                            fontWeight: 'bold' 
                                        }}>
                                            {q.type === 'ASSERTION_REASON' ? 'ASSERTION & REASON' : (q.type || 'MCQ')}
                                        </span>
                                        <div className={styles.qActions}>
                                            <button onClick={() => handleEdit(q)} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(q)} className={styles.deleteBtn}>Delete</button>
                                        </div>
                                    </div>
                                    <div className={styles.qText}>
                                        <LatexRenderer text={q.text} />
                                        {q.image && <img src={q.image} alt="Q" style={{ maxHeight: '100px', display: 'block', marginTop: '10px' }} />}
                                    </div>
                                    {q.type === 'NUMERICAL' ? (
                                        <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '6px' }}>
                                            Correct Answer: {q.correctOption}
                                        </div>
                                    ) : (
                                        q.options && (
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
                                        )
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
