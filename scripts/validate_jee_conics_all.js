const katex = require('katex');

const { repairedGenuineConics } = require('./repaired_genuine_conics.js');
const sub1Raw = require('./data_jee_conics_subtopic1.js');
const sub2Raw = require('./data_jee_conics_subtopic2.js');
const sub3Raw = require('./data_jee_conics_subtopic3.js');
const sub4Raw = require('./data_jee_conics_subtopic4.js');
const sub5Raw = require('./data_jee_conics_subtopic5.js');
const sub6Raw = require('./data_jee_conics_subtopic6.js');

const sub1 = sub1Raw.subtopic1Questions || sub1Raw;
const sub2 = sub2Raw.subtopic2Questions || sub2Raw;
const sub3 = sub3Raw.subtopic3Questions || sub3Raw;
const sub4 = sub4Raw.subtopic4Questions || sub4Raw;
const sub5 = sub5Raw.subtopic5Questions || sub5Raw;
const sub6 = sub6Raw.subtopic6Questions || sub6Raw;

// Convert repaired genuine conics
const genuineArray = Object.entries(repairedGenuineConics).map(([id, q]) => {
  return {
    _id: id,
    type: 'MCQ',
    questionType: 'MCQ',
    question: q.question,
    options: q.options,
    correctAnswer: typeof q.correctAnswer === 'number' ? q.options[q.correctAnswer] : q.correctAnswer,
    explanation: q.explanation,
    marks: 4,
    negativeMarks: 1,
    isGenuine: true
  };
});

// Normalize helper
function normalizeQuestion(q, label) {
  let type = q.type || q.questionType;
  if (type === 'MCQ (Multiple Choice Question)' || type === 'MCQ' || type === 'SINGLE') {
    type = 'MCQ';
  } else if (type === 'ASSERTION_REASON' || type === 'AR' || type === 'Assertion-Reason Question') {
    type = 'AR';
  } else if (type === 'NUMERICAL' || type === 'NUM' || type === 'Numerical Value Question') {
    type = 'NUM';
  }

  let correctAnswer = q.correctAnswer;
  if ((type === 'MCQ' || type === 'AR') && typeof correctAnswer === 'number') {
    if (!q.options || !q.options[correctAnswer]) {
      throw new Error(`${label}: Numeric correctAnswer index ${correctAnswer} out of range in options: ${JSON.stringify(q.options)}`);
    }
    correctAnswer = q.options[correctAnswer];
  } else if (type === 'NUM') {
    correctAnswer = String(correctAnswer);
  }

  return {
    ...q,
    type,
    questionType: type,
    correctAnswer,
    marks: 4,
    negativeMarks: type === 'NUM' ? 0 : 1
  };
}

const allDatasets = [
  { name: 'repaired_genuine_conics', data: genuineArray.map((q, i) => normalizeQuestion(q, `Genuine Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic1', data: sub1.map((q, i) => normalizeQuestion(q, `Subtopic 1 Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic2', data: sub2.map((q, i) => normalizeQuestion(q, `Subtopic 2 Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic3', data: sub3.map((q, i) => normalizeQuestion(q, `Subtopic 3 Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic4', data: sub4.map((q, i) => normalizeQuestion(q, `Subtopic 4 Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic5', data: sub5.map((q, i) => normalizeQuestion(q, `Subtopic 5 Q${i+1}`)), expectedCount: 30 },
  { name: 'data_jee_conics_subtopic6', data: sub6.map((q, i) => normalizeQuestion(q, `Subtopic 6 Q${i+1}`)), expectedCount: 30 },
];

function testLatexInText(text, label) {
  if (!text || typeof text !== 'string') return;
  const regex = /\$([^$]+)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const latex = match[1];
    try {
      katex.renderToString(latex, { throwOnError: true, displayMode: false });
    } catch (err) {
      console.error(`[LaTeX ERROR] ${label}:`);
      console.error(`  Expression: $${latex}$`);
      console.error(`  Error: ${err.message}`);
      throw err;
    }
  }
}

const bogusKeywords = [
  'thermodynamic', 'macroscopic', 'partition', 'entropy', 'joule', 'kelvin',
  'heat engine', 'carnot', 'ideal gas', 'isothermal', 'adiabatic', 'molar heat',
  'system is partitioned', 'reference scale'
];

let totalQuestions = 0;
const questionTexts = new Set();

for (const ds of allDatasets) {
  console.log(`Checking ${ds.name} (count: ${ds.data.length})...`);
  if (ds.data.length !== ds.expectedCount) {
    throw new Error(`${ds.name} expected ${ds.expectedCount} questions but found ${ds.data.length}`);
  }

  ds.data.forEach((q, idx) => {
    totalQuestions++;
    const label = `${ds.name} Q${idx + 1}`;

    // 1. Text validations
    if (!q.question || q.question.trim().length === 0) {
      throw new Error(`${label}: Empty question text`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      throw new Error(`${label}: Empty explanation`);
    }

    // Check for bogus keywords
    const lowerQ = q.question.toLowerCase();
    for (const kw of bogusKeywords) {
      if (lowerQ.includes(kw)) {
        throw new Error(`${label} contains bogus keyword: "${kw}"`);
      }
    }

    // Duplicate check
    const normQ = q.question.replace(/\s+/g, ' ').trim();
    if (questionTexts.has(normQ)) {
      throw new Error(`${label} duplicate question text across datasets: "${normQ.substring(0, 60)}..."`);
    }
    questionTexts.add(normQ);

    // 2. Type & Marks
    if (q.type === 'MCQ' || q.type === 'AR') {
      if (q.marks !== 4 || q.negativeMarks !== 1) {
        throw new Error(`${label}: Invalid marking for ${q.type}: marks=${q.marks}, neg=${q.negativeMarks}`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`${label}: Options must be array of 4 items`);
      }
      if (!q.options.includes(q.correctAnswer)) {
        throw new Error(`${label}: correctAnswer "${q.correctAnswer}" not in options [${q.options.join(', ')}]`);
      }
      q.options.forEach((opt, optIdx) => {
        testLatexInText(opt, `${label} Option ${optIdx + 1}`);
      });
    } else if (q.type === 'NUM') {
      if (q.marks !== 4 || q.negativeMarks !== 0) {
        throw new Error(`${label}: Invalid marking for NUM: marks=${q.marks}, neg=${q.negativeMarks}`);
      }
      if (typeof q.correctAnswer !== 'string' || isNaN(Number(q.correctAnswer))) {
        throw new Error(`${label}: NUM correctAnswer must be numeric string, got: "${q.correctAnswer}"`);
      }
    } else {
      throw new Error(`${label}: Unknown questionType: ${q.type}`);
    }

    // 3. KaTeX test on question and explanation
    testLatexInText(q.question, `${label} Question`);
    testLatexInText(q.explanation, `${label} Explanation`);
  });
}

console.log(`\n======================================================`);
console.log(`SUCCESS! All ${totalQuestions} questions across 7 datasets validated cleanly!`);
console.log(`- 30 Repaired Genuine Questions: VALID`);
console.log(`- 180 Authentic JEE Mains Subtopic Questions: VALID`);
console.log(`- KaTeX (throwOnError: true): 0 errors`);
console.log(`- Duplicate question texts: 0`);
console.log(`- Bogus keywords: 0`);
console.log(`======================================================\n`);
