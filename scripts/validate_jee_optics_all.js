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
  { file: './data_jee_optics_part1.js', name: "Total internal reflection and prisms" },
  { file: './data_jee_optics_part2.js', name: "Optical instruments (microscope, telescope)" },
  { file: './data_jee_optics_part3.js', name: "Lens formula" },
  { file: './data_jee_optics_part4.js', name: "Mirror formula and combination of lenses" },
  { file: './data_jee_optics_part5.js', name: "Reflection/refraction" },
  { file: './data_jee_optics_part6.js', name: "Diffraction" },
  { file: './data_jee_optics_part7.js', name: "Interference" },
  { file: './data_jee_optics_part8.js', name: "Polarization of light (Brewster's law)" },
  { file: './data_jee_optics_part9.js', name: "Young's double-slit experiment" },
];

let totalQuestions = 0;
let totalErrors = 0;

for (let i = 0; i < parts.length; i++) {
  const p = parts[i];
  const questions = require(p.file);
  console.log(`\nValidating Part ${i + 1}: ${p.name} (${questions.length} items)...`);

  if (questions.length !== 53) {
    console.error(`ERROR: Expected 53 questions, found ${questions.length}`);
    totalErrors++;
  }

  const arCount = questions.filter(q => q.type === 'ASSERTION_REASON').length;
  const mcqCount = questions.filter(q => q.type === 'MCQ').length;
  const numCount = questions.filter(q => q.type === 'NUMERICAL').length;

  if (arCount !== 26 || mcqCount !== 7 || numCount !== 20) {
    console.error(`ERROR: Question type mismatch: AR=${arCount} (exp 26), MCQ=${mcqCount} (exp 7), NUM=${numCount} (exp 20)`);
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
    const bogusTerms = ['quantum', 'chloroplast', 'dna', 'cell wall', 'membrane', 'bacteria', 'mitochondria', 'bogus'];
    for (const term of bogusTerms) {
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
console.log(`Total questions validated: ${totalQuestions} / 477`);
console.log(`Total errors found: ${totalErrors}`);
if (totalErrors === 0) {
  console.log(`ALL 477 QUESTIONS PASSED VALIDATION WITH 0 ERRORS!`);
} else {
  console.error(`FAILED WITH ${totalErrors} ERRORS!`);
  process.exit(1);
}
