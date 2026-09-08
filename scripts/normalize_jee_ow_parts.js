const fs = require('fs');
const path = require('path');

const parts = [
  { file: 'data_jee_ow_part1.js', subtopic: 'Wave motion' },
  { file: 'data_jee_ow_part2.js', subtopic: 'Superposition of waves' },
  { file: 'data_jee_ow_part3.js', subtopic: 'Standing waves in strings and organ pipes' },
  { file: 'data_jee_ow_part4.js', subtopic: 'Beats' },
  { file: 'data_jee_ow_part5.js', subtopic: 'Simple Harmonic Motion (SHM)' },
  { file: 'data_jee_ow_part6.js', subtopic: 'Simple Harmonic Motion (SHM)' },
  { file: 'data_jee_ow_part7.js', subtopic: 'Simple Harmonic Motion (SHM)' },
  { file: 'data_jee_ow_part8.js', subtopic: 'Simple Harmonic Motion (SHM)' }
];

let grandTotal = 0;

for (const p of parts) {
  const filePath = path.join(__dirname, p.file);
  const data = require(filePath);

  const normalized = data.map(q => {
    let t = q.type;
    let qt = q.questionType;

    if (t === 'ASSERTION_REASON' || t === 'Assertion-Reason') {
      t = 'ASSERTION_REASON';
      qt = 'Assertion-Reason';
    } else if (t === 'MCQ' || t === 'Multiple Choice') {
      t = 'MCQ';
      qt = 'MCQ (Multiple Choice Question)';
    } else if (t === 'NUMERICAL' || t === 'Numerical') {
      t = 'NUMERICAL';
      qt = 'Numerical';
    }

    return {
      question: q.question,
      options: q.options || [],
      correctAnswer: q.correctAnswer,
      numericalAnswer: (t === 'NUMERICAL') ? q.correctAnswer : undefined,
      explanation: q.explanation,
      type: t,
      questionType: qt,
      subtopic: p.subtopic,
      subTopic: p.subtopic,
      chapter: 'Oscillations and Waves',
      subject: 'Physics',
      marks: 4,
      negativeMarks: 1,
      source: 'JEE Main Question Bank'
    };
  });

  fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(normalized, null, 2) + ';\n');
  console.log(`Normalized ${p.file}: ${normalized.length} items`);
  grandTotal += normalized.length;
}

console.log(`\nAll 8 parts normalized! Total questions: ${grandTotal}`);
