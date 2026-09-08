const katex = require('katex');

function extractLatexSpans(text) {
  if (!text) return [];
  const spans = [];
  const regex = /(\$\$[\s\S]*?\$\$|\$([^\$\n]+?)\$|\\\[[\s\S]*?\\\]|\\\(.+?\\\)|\\[a-zA-Z]+(?:\{[^{}]*\}|\[[^\[\]]*\])*)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    let raw = match[0];
    let math = raw;
    let displayMode = false;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      math = raw.slice(1, -1);
      displayMode = false;
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      math = raw.slice(2, -2);
      displayMode = true;
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      math = raw.slice(2, -2);
      displayMode = false;
    }
    spans.push({ raw, math, displayMode });
  }
  return spans;
}

function testLatex(str) {
  if (!str) return [];
  const errors = [];
  const spans = extractLatexSpans(str);
  for (const span of spans) {
    try {
      katex.renderToString(span.math, {
        throwOnError: true,
        displayMode: span.displayMode
      });
    } catch (err) {
      errors.push({ raw: span.raw, error: err.message });
    }
  }
  return errors;
}

const parts = [
  { file: './data_jee_magnetism_part1.js', name: "Lorentz force", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part2.js', name: "Ampere's law", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part3.js', name: "Force between two parallel currents", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part4.js', name: "Biot-Savart law and applications", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part5.js', name: "Magnetic properties (dia, para, ferromagnetism)", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part6.js', name: "Moving coil galvanometer and conversion to ammeter/voltmeter", expTotal: 53, expAR: 26, expMCQ: 7, expNUM: 20 },
  { file: './data_jee_magnetism_part7.js', name: "Magnetic field calculation", expTotal: 196, expAR: 26, expMCQ: 7, expNUM: 163 },
];

let totalQuestions = 0;
let totalErrors = 0;

const suspiciousTerms = [
  'chloroplast', 'dna', 'cell wall', 'membrane', 'bacteria',
  'mitochondria', 'bogus', 'dummy', 'aufbau', 'carbocation',
  'oxoacid', 'chromatography', 'molality'
];

for (let i = 0; i < parts.length; i++) {
  const p = parts[i];
  const questions = require(p.file);
  console.log(`\nValidating Part ${i + 1}: ${p.name} (${questions.length} items)...`);

  if (questions.length !== p.expTotal) {
    console.error(`ERROR: Expected ${p.expTotal} questions, found ${questions.length}`);
    totalErrors++;
  }

  const arCount = questions.filter(q => q.type === 'ASSERTION_REASON').length;
  const mcqCount = questions.filter(q => q.type === 'MCQ').length;
  const numCount = questions.filter(q => q.type === 'NUMERICAL').length;

  if (arCount !== p.expAR || mcqCount !== p.expMCQ || numCount !== p.expNUM) {
    console.error(`ERROR: Question type mismatch: AR=${arCount} (exp ${p.expAR}), MCQ=${mcqCount} (exp ${p.expMCQ}), NUM=${numCount} (exp ${p.expNUM})`);
    totalErrors++;
  }

  questions.forEach((q, idx) => {
    totalQuestions++;
    // Check marks
    if (q.marks !== 4 || q.negativeMarks !== 1) {
      console.error(`[Part ${i + 1} # ${idx}] Bad marks: marks=${q.marks}, neg=${q.negativeMarks}`);
      totalErrors++;
    }

    // Check bogus phrases
    const fullText = (q.question + ' ' + (q.explanation || '') + ' ' + (q.options || []).join(' ')).toLowerCase();
    for (const term of suspiciousTerms) {
      if (fullText.includes(term)) {
        console.error(`[Part ${i + 1} # ${idx}] Contains suspicious term: "${term}"`);
        totalErrors++;
      }
    }

    // Check options bounds
    if (q.type === 'ASSERTION_REASON' || q.type === 'MCQ') {
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error(`[Part ${i + 1} # ${idx}] Invalid options array length: ${q.options ? q.options.length : 0}`);
        totalErrors++;
      }
      const ans = q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption;
      if (typeof ans !== 'number' || ans < 0 || ans > 3) {
        console.error(`[Part ${i + 1} # ${idx}] Invalid correct answer: ${ans}`);
        totalErrors++;
      }
    }

    if (q.type === 'NUMERICAL') {
      const numVal = q.correctAnswer !== undefined ? q.correctAnswer : q.numericalAnswer;
      if (numVal === undefined || numVal === null || isNaN(parseFloat(numVal))) {
        console.error(`[Part ${i + 1} # ${idx}] Invalid numerical answer: "${numVal}"`);
        totalErrors++;
      }
    }

    // Check KaTeX
    const qErr = testLatex(q.question);
    if (qErr.length > 0) {
      console.error(`[Part ${i + 1} # ${idx} - Question] KaTeX errors:`, qErr);
      totalErrors += qErr.length;
    }

    const expErr = testLatex(q.explanation);
    if (expErr.length > 0) {
      console.error(`[Part ${i + 1} # ${idx} - Explanation] KaTeX errors:`, expErr);
      totalErrors += expErr.length;
    }

    if (Array.isArray(q.options)) {
      q.options.forEach((opt, optIdx) => {
        const optErr = testLatex(opt);
        if (optErr.length > 0) {
          console.error(`[Part ${i + 1} # ${idx} - Opt ${optIdx}] KaTeX errors:`, optErr);
          totalErrors += optErr.length;
        }
      });
    }
  });
}

console.log(`\n===========================================`);
console.log(`Total questions validated: ${totalQuestions} / 514`);
console.log(`Total errors found: ${totalErrors}`);
if (totalErrors === 0) {
  console.log(`ALL 514 QUESTIONS PASSED VALIDATION WITH 0 ERRORS!`);
} else {
  console.error(`FAILED WITH ${totalErrors} ERRORS!`);
  process.exit(1);
}
