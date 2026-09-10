const fs = require('fs');
const katex = require('katex');

const files = [
  'scripts/emw_ktg/emw_batch1.json',
  'scripts/emw_ktg/emw_batch2.json',
  'scripts/emw_ktg/ktg_batch1.json',
  'scripts/emw_ktg/ktg_batch2.json',
  'scripts/emw_ktg/ktg_batch3.json'
];

let allQuestions = [];
files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  allQuestions = allQuestions.concat(data);
});

console.log('Total questions:', allQuestions.length);

let errors = 0;

function checkMath(text, label) {
  if (!text) return;
  // Check unmatched single $ (excluding $$)
  // First extract $$...$$
  let remaining = text;
  const displayBlocks = [];
  remaining = remaining.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
    displayBlocks.push(p1);
    return ' DISPLAY_MATH ';
  });

  // Now display blocks
  for (const block of displayBlocks) {
    try {
      katex.renderToString(block, { displayMode: true, throwOnError: true });
    } catch (e) {
      console.error(`[DISPLAY MATH ERROR] ${label}: ${e.message}\nContent: ${block}`);
      errors++;
    }
  }

  // Now inline math $...$
  const inlineBlocks = [];
  remaining = remaining.replace(/\$([^\$]+?)\$/g, (match, p1) => {
    inlineBlocks.push(p1);
    return ' INLINE_MATH ';
  });

  for (const block of inlineBlocks) {
    try {
      katex.renderToString(block, { displayMode: false, throwOnError: true });
    } catch (e) {
      console.error(`[INLINE MATH ERROR] ${label}: ${e.message}\nContent: ${block}`);
      errors++;
    }
  }

  // Check if any leftover $ remains
  if (remaining.includes('$')) {
    console.error(`[UNMATCHED $] ${label}: ${remaining}`);
    errors++;
  }
}

// Check duplicates
const seen = new Set();
let duplicates = 0;

allQuestions.forEach((q, idx) => {
  const qKey = q.question.trim().toLowerCase();
  if (seen.has(qKey)) {
    console.error(`[DUPLICATE QUESTION] Q${idx}: ${q.question.slice(0, 60)}...`);
    duplicates++;
  }
  seen.add(qKey);

  checkMath(q.question, `Q${idx} question`);
  q.options.forEach((opt, oIdx) => checkMath(opt, `Q${idx} opt ${oIdx}`));
  checkMath(q.explanation, `Q${idx} explanation`);
});

console.log(`Validation finished. KaTeX/Syntax Errors: ${errors}, Duplicates: ${duplicates}`);
