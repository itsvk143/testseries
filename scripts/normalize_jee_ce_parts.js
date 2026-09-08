const fs = require('fs');
const path = require('path');

const parts = [
  { file: 'data_jee_ce_part1.js', subtopic: 'Electrical energy and power' },
  { file: 'data_jee_ce_part2.js', subtopic: "Ohm's law" },
  { file: 'data_jee_ce_part3.js', subtopic: 'Wheatstone bridge' },
  { file: 'data_jee_ce_part4.js', subtopic: 'Internal resistance of a cell and EMF' },
  { file: 'data_jee_ce_part5.js', subtopic: 'Resistivity' },
  { file: 'data_jee_ce_part6.js', subtopic: "Kirchhoff's laws" },
  { file: 'data_jee_ce_part7.js', subtopic: 'Drift velocity and mobility' },
  { file: 'data_jee_ce_part8.js', subtopic: 'Meter bridge' }
];

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
      chapter: 'Current Electricity',
      subject: 'Physics',
      marks: 4,
      negativeMarks: 1,
      source: 'JEE Main Question Bank'
    };
  });

  fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(normalized, null, 2) + ';\n');
  console.log(`Normalized ${p.file}: ${normalized.length} items`);
}

console.log('All 8 parts normalized!');
