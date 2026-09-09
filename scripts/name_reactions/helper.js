/**
 * scripts/name_reactions/helper.js
 * Helper utilities for generating authentic JEE Main Organic Chemistry MCQs
 */

const { ObjectId } = require('mongodb');

function createMCQ({
  q,
  correct,
  distractors,
  exp,
  subTopic,
  difficulty = "Medium",
  cognitiveLevel = "Application",
  index = 0
}) {
  if (!distractors || distractors.length < 3) {
    throw new Error(`Question must have at least 3 distractors: ${q}`);
  }

  // Shuffle or rotate options so correct answer is balanced across indices 0, 1, 2, 3
  const targetIndex = index % 4;
  const options = [];
  let distractorPtr = 0;

  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) {
      options.push(correct);
    } else {
      options.push(distractors[distractorPtr++]);
    }
  }

  return {
    _id: new ObjectId(),
    question: q.trim(),
    options: options.map(opt => opt.trim()),
    correctAnswer: targetIndex,
    correctOption: targetIndex,
    explanation: exp.trim(),
    subject: "Chemistry",
    chapter: "Organic Name Reactions",
    topic: "Organic Name Reactions",
    subTopic: subTopic,
    subtopic: subTopic,
    difficulty: difficulty,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    cognitiveLevel: cognitiveLevel,
    targetExams: ["JEE Main", "NEET", "BITSAT"],
    exam: "JEE Main / NEET / BITSAT",
    source: "JEE Main PYQ 2015-2024 & NCERT Exemplar",
    marks: 4,
    negativeMarks: 1,
    status: "Active",
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

module.exports = {
  createMCQ
};
