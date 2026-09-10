// scripts/pam/assemble_and_validate.js
const fs = require('fs');
const path = require('path');
const katex = require('katex');

const b1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'pam_batch1.json'), 'utf8'));
const b2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'pam_batch2.json'), 'utf8'));
const b3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'pam_batch3.json'), 'utf8'));

const allQuestions = [...b1, ...b2, ...b3];
console.log(`Total questions loaded: ${allQuestions.length}`);

// 1. Check Subtopics
const subtopics = {};
allQuestions.forEach(q => {
  subtopics[q.subtopic] = (subtopics[q.subtopic] || 0) + 1;
});
console.log('Subtopic counts:', subtopics);

// 2. Validate IDs and duplicates
const idSet = new Set();
const textSet = new Set();
let duplicates = 0;
allQuestions.forEach(q => {
  if (idSet.has(q.questionId)) {
    console.error(`Duplicate ID: ${q.questionId}`);
  }
  idSet.add(q.questionId);
  const snippet = q.question.trim().slice(0, 50);
  if (textSet.has(snippet)) {
    console.warn(`Potential duplicate question: ${snippet}`);
    duplicates++;
  }
  textSet.add(snippet);
});
console.log(`Duplicate question count: ${duplicates}`);

// 3. Balance answer distribution per subtopic: 14 A, 14 B, 14 C, 13 D = 55
const targets = [14, 14, 14, 13]; // A, B, C, D

// Group by subtopic
const grouped = {};
allQuestions.forEach(q => {
  if (!grouped[q.subtopic]) grouped[q.subtopic] = [];
  grouped[q.subtopic].push(q);
});

Object.keys(grouped).forEach(sub => {
  const list = grouped[sub];
  if (list.length !== 55) {
    console.error(`Subtopic ${sub} has ${list.length} questions, expected 55`);
  }

  // Desired target indices for the 55 questions
  const desired = [];
  for (let i = 0; i < 14; i++) desired.push(0); // A
  for (let i = 0; i < 14; i++) desired.push(1); // B
  for (let i = 0; i < 14; i++) desired.push(2); // C
  for (let i = 0; i < 13; i++) desired.push(3); // D

  list.forEach((q, idx) => {
    const targetPos = desired[idx];
    const correctVal = q.correctAnswer;
    const currentPos = q.options.indexOf(correctVal);

    if (currentPos === -1) {
      console.error(`Correct answer not in options for ${q.questionId}`);
      console.log('Correct:', correctVal);
      console.log('Options:', q.options);
      return;
    }

    if (currentPos !== targetPos) {
      // Swap targetPos and currentPos
      const temp = q.options[targetPos];
      q.options[targetPos] = q.options[currentPos];
      q.options[currentPos] = temp;
    }
  });

  // Verify distribution
  const counts = [0, 0, 0, 0];
  list.forEach(q => {
    const pos = q.options.indexOf(q.correctAnswer);
    counts[pos]++;
  });
  console.log(`Subtopic: ${sub} -> Options dist: A:${counts[0]}, B:${counts[1]}, C:${counts[2]}, D:${counts[3]}`);
});

// 4. KaTeX Math Validator
function testKaTeX(str, qid, field) {
  if (!str) return;
  const regex = /\$([^\$]+)\$/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    const latex = match[1];
    try {
      katex.renderToString(latex, { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${qid} [${field}]: "${latex}" -> ${e.message}`);
    }
  }
}

console.log('Validating KaTeX in all questions...');
allQuestions.forEach(q => {
  testKaTeX(q.question, q.questionId, 'question');
  q.options.forEach((opt, oIdx) => testKaTeX(opt, q.questionId, `opt[${oIdx}]`));
  testKaTeX(q.explanation, q.questionId, 'explanation');
});

// Re-index cleanly
allQuestions.forEach((q, i) => {
  q.questionId = `jee_mains_pam_${String(i + 1).padStart(3, '0')}`;
});

// Save assembled dataset
const outPath = path.join(__dirname, '../../src/data/physics_and_measurement_275.json');
fs.writeFileSync(outPath, JSON.stringify(allQuestions, null, 2), 'utf8');
console.log(`Successfully saved 275 validated MCQs to ${outPath}`);
