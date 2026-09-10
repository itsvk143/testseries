// Subtopic 1: Multiple and sub-multiple angles (51 Questions: 35 MCQ, 11 NUMERICAL, 5 ASSERTION_REASON)
module.exports = [
  // --- MCQs (35 questions) ---
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ}$ is equal to:",
    options: ["$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{1}{16}$"],
    correctAnswer: 2,
    explanation: "Using the standard identity $\\cos \\theta \\cos(60^{\\circ} - \\theta) \\cos(60^{\\circ} + \\theta) = \\frac{1}{4} \\cos 3\\theta$, set $\\theta = 20^{\\circ}$:\n$$\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ} = \\cos 20^{\\circ} \\cos(60^{\\circ} - 20^{\\circ}) \\cos(60^{\\circ} + 20^{\\circ}) = \\frac{1}{4} \\cos(60^{\\circ}) = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $f_k(x) = \\frac{1}{k}(\\sin^k x + \\cos^k x)$ for $k \\ge 1$, then the value of $f_4(x) - f_6(x)$ for all $x \\in \\mathbb{R}$ is:",
    options: ["$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$"],
    correctAnswer: 0,
    explanation: "We have:\n$$f_4(x) = \\frac{1}{4}(\\sin^4 x + \\cos^4 x) = \\frac{1}{4}(1 - 2\\sin^2 x \\cos^2 x)$$\n$$f_6(x) = \\frac{1}{6}(\\sin^6 x + \\cos^6 x) = \\frac{1}{6}(1 - 3\\sin^2 x \\cos^2 x)$$\nSubtracting the two expressions:\n$$f_4(x) - f_6(x) = \\left(\\frac{1}{4} - \\frac{1}{2}\\sin^2 x \\cos^2 x\\right) - \\left(\\frac{1}{6} - \\frac{1}{2}\\sin^2 x \\cos^2 x\\right) = \\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\sin 10^{\\circ} \\sin 50^{\\circ} \\sin 70^{\\circ}$ is:",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{\\sqrt{3}}{8}$", "$\\frac{1}{16}$"],
    correctAnswer: 1,
    explanation: "Using the identity $\\sin \\theta \\sin(60^{\\circ} - \\theta) \\sin(60^{\\circ} + \\theta) = \\frac{1}{4} \\sin 3\\theta$, with $\\theta = 10^{\\circ}$:\n$$\\sin 10^{\\circ} \\sin(60^{\\circ} - 10^{\\circ}) \\sin(60^{\\circ} + 10^{\\circ}) = \\frac{1}{4} \\sin(30^{\\circ}) = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\tan 20^{\\circ} \\tan 40^{\\circ} \\tan 80^{\\circ}$ is:",
    options: ["$1$", "$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "$3$"],
    correctAnswer: 1,
    explanation: "Using the identity $\\tan \\theta \\tan(60^{\\circ} - \\theta) \\tan(60^{\\circ} + \\theta) = \\tan 3\\theta$, for $\\theta = 20^{\\circ}$:\n$$\\tan 20^{\\circ} \\tan 40^{\\circ} \\tan 80^{\\circ} = \\tan(3 \\times 20^{\\circ}) = \\tan 60^{\\circ} = \\sqrt{3}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos 12^{\\circ} \\cos 24^{\\circ} \\cos 48^{\\circ} \\cos 84^{\\circ}$ is:",
    options: ["$\\frac{1}{8}$", "$\\frac{1}{16}$", "$\\frac{1}{32}$", "$\\frac{1}{4}$"],
    correctAnswer: 1,
    explanation: "Note that $\\cos 84^{\\circ} = \\sin 6^{\\circ}$. Multiply and divide by $2^4 \\sin 12^{\\circ}$:\nLet $P = \\cos 12^{\\circ} \\cos 24^{\\circ} \\cos 48^{\\circ} \\cos 84^{\\circ}$.\nSince $\\cos 84^{\\circ} = \\cos(96^{\\circ} - 180^{\\circ}) = -\\cos 96^{\\circ}$, we have:\n$$P = -\\cos 12^{\\circ} \\cos 24^{\\circ} \\cos 48^{\\circ} \\cos 96^{\\circ}$$\nUsing $\\prod_{k=0}^{n-1} \\cos(2^k \\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin \\theta}$ with $\\theta = 12^{\\circ}, n = 4$:\n$$-\\frac{\\sin(16 \\times 12^{\\circ})}{16 \\sin 12^{\\circ}} = -\\frac{\\sin 192^{\\circ}}{16 \\sin 12^{\\circ}} = -\\frac{-\\sin 12^{\\circ}}{16 \\sin 12^{\\circ}} = \\frac{1}{16}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\sin\\left(\\frac{\\pi}{14}\\right) \\sin\\left(\\frac{3\\pi}{14}\\right) \\sin\\left(\\frac{5\\pi}{14}\\right)$ is equal to:",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{1}{16}$", "$\\frac{\\sqrt{7}}{8}$"],
    correctAnswer: 1,
    explanation: "Since $\\sin(\\pi/14) = \\cos(6\\pi/14) = \\cos(3\\pi/7)$, $\\sin(3\\pi/14) = \\cos(4\\pi/14) = \\cos(2\\pi/7)$, and $\\sin(5\\pi/14) = \\cos(2\\pi/14) = \\cos(\\pi/7)$:\n$$\\sin\\left(\\frac{\\pi}{14}\\right) \\sin\\left(\\frac{3\\pi}{14}\\right) \\sin\\left(\\frac{5\\pi}{14}\\right) = \\cos\\left(\\frac{\\pi}{7}\\right) \\cos\\left(\\frac{2\\pi}{7}\\right) \\cos\\left(\\frac{3\\pi}{7}\\right)$$\nSince $\\cos(3\\pi/7) = -\\cos(4\\pi/7)$, the product equals:\n$$-\\cos\\left(\\frac{\\pi}{7}\\right) \\cos\\left(\\frac{2\\pi}{7}\\right) \\cos\\left(\\frac{4\\pi}{7}\\right) = -\\left(-\\frac{1}{8}\\right) = \\frac{1}{8}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The exact value of $\\cos\\left(\\frac{2\\pi}{7}\\right) + \\cos\\left(\\frac{4\\pi}{7}\\right) + \\cos\\left(\\frac{6\\pi}{7}\\right)$ is:",
    options: ["$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$-1$", "$0$"],
    correctAnswer: 0,
    explanation: "Using the formula for the sum of cosines of angles in A.P.:\n$$\\sum_{k=1}^n \\cos(k\\theta) = \\frac{\\sin(n\\theta/2) \\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$$\nHere $\\theta = \\frac{2\\pi}{7}$ and $n = 3$:\n$$\\frac{\\sin(3\\pi/7) \\cos(4\\pi/7)}{\\sin(\\pi/7)} = \\frac{2\\sin(3\\pi/7) \\cos(4\\pi/7)}{2\\sin(\\pi/7)} = \\frac{\\sin(\\pi) - \\sin(\\pi/7)}{2\\sin(\\pi/7)} = -\\frac{1}{2}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\tan 9^{\\circ} - \\tan 27^{\\circ} - \\tan 63^{\\circ} + \\tan 81^{\\circ}$ is:",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 3,
    explanation: "Pair the terms as:\n$$(\\tan 9^{\\circ} + \\tan 81^{\\circ}) - (\\tan 27^{\\circ} + \\tan 63^{\\circ})$$\nSince $\\tan 81^{\\circ} = \\cot 9^{\\circ}$ and $\\tan 63^{\\circ} = \\cot 27^{\\circ}$:\n$$\\tan 9^{\\circ} + \\cot 9^{\\circ} = \\frac{1}{\\sin 9^{\\circ} \\cos 9^{\\circ}} = \\frac{2}{\\sin 18^{\\circ}}$$\n$$\\tan 27^{\\circ} + \\cot 27^{\\circ} = \\frac{2}{\\sin 54^{\\circ}} = \\frac{2}{\\cos 36^{\\circ}}$$\nRecall $\\sin 18^{\\circ} = \\frac{\\sqrt{5}-1}{4}$ and $\\cos 36^{\\circ} = \\frac{\\sqrt{5}+1}{4}$:\n$$\\frac{8}{\\sqrt{5}-1} - \\frac{8}{\\sqrt{5}+1} = 8 \\left(\\frac{(\\sqrt{5}+1) - (\\sqrt{5}-1)}{5 - 1}\\right) = 8 \\left(\\frac{2}{4}\\right) = 4.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan \\alpha = \\frac{1}{7}$ and $\\tan \\beta = \\frac{1}{3}$, where $\\alpha, \\beta$ are acute angles, then the value of $\\alpha + 2\\beta$ is:",
    options: ["$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{2}$"],
    correctAnswer: 1,
    explanation: "We compute $\\tan 2\\beta$ using the double-angle formula:\n$$\\tan 2\\beta = \\frac{2\\tan \\beta}{1 - \\tan^2 \\beta} = \\frac{2(1/3)}{1 - (1/3)^2} = \\frac{2/3}{8/9} = \\frac{3}{4}$$\nNow compute $\\tan(\\alpha + 2\\beta)$:\n$$\\tan(\\alpha + 2\\beta) = \\frac{\\tan \\alpha + \\tan 2\\beta}{1 - \\tan \\alpha \\tan 2\\beta} = \\frac{1/7 + 3/4}{1 - (1/7)(3/4)} = \\frac{25/28}{25/28} = 1$$\nSince $\\alpha, \\beta > 0$ and $\\tan \\alpha, \\tan \\beta < 1$, we have $0 < \\alpha + 2\\beta < \\frac{\\pi}{2}$, hence $\\alpha + 2\\beta = \\frac{\\pi}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\frac{\\sin 3x}{\\sin x} - \\frac{\\cos 3x}{\\cos x}$ for all $x \\ne \\frac{n\\pi}{2}$ is identically equal to:",
    options: ["$1$", "$2$", "$2\\cos 2x$", "$\\tan 2x$"],
    correctAnswer: 1,
    explanation: "Combining into a single fraction:\n$$\\frac{\\sin 3x \\cos x - \\cos 3x \\sin x}{\\sin x \\cos x} = \\frac{\\sin(3x - x)}{\\frac{1}{2}\\sin 2x} = \\frac{\\sin 2x}{\\frac{1}{2}\\sin 2x} = 2.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $3(\\sin x - \\cos x)^4 + 6(\\sin x + \\cos x)^2 + 4(\\sin^6 x + \\cos^6 x)$ is equal to:",
    options: ["$11$", "$12$", "$13$", "$14$"],
    correctAnswer: 2,
    explanation: "Let $t = \\sin x \\cos x$:\n1. $(\\sin x - \\cos x)^2 = 1 - 2t \\implies (\\sin x - \\cos x)^4 = (1 - 2t)^2 = 1 - 4t + 4t^2$\n2. $(\\sin x + \\cos x)^2 = 1 + 2t$\n3. $\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x \\cos^2 x = 1 - 3t^2$\nNow substitute into the expression:\n$$3(1 - 4t + 4t^2) + 6(1 + 2t) + 4(1 - 3t^2) = (3 - 12t + 12t^2) + (6 + 12t) + (4 - 12t^2)$$\nNotice that the $t$ and $t^2$ terms cancel completely:\n$$= 3 + 6 + 4 = 13.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $A + B + C = \\pi$ in a triangle, then $\\cos^2 A + \\cos^2 B + \\cos^2 C + 2\\cos A \\cos B \\cos C$ is equal to:",
    options: ["$0$", "$1$", "$2$", "$4$"],
    correctAnswer: 1,
    explanation: "For any triangle $A+B+C = \\pi$:\n$$\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 - 2\\cos A \\cos B \\cos C$$\nRearranging gives:\n$$\\cos^2 A + \\cos^2 B + \\cos^2 C + 2\\cos A \\cos B \\cos C = 1.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "In any triangle $ABC$, the value of $\\tan A + \\tan B + \\tan C$ is always equal to:",
    options: ["$\\cot A \\cot B \\cot C$", "$\\tan A \\tan B \\tan C$", "$1$", "$3\\sqrt{3}$"],
    correctAnswer: 1,
    explanation: "Since $A + B + C = \\pi$, we have $A + B = \\pi - C$.\nTaking tangent on both sides:\n$$\\tan(A + B) = \\tan(\\pi - C) = -\\tan C$$\n$$\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C$$\n$$\\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C$$\n$$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\frac{1}{\\sin 10^{\\circ}} - \\frac{\\sqrt{3}}{\\cos 10^{\\circ}}$ is equal to:",
    options: ["$1$", "$2$", "$4$", "$\\frac{1}{4}$"],
    correctAnswer: 2,
    explanation: "Combine into a single fraction:\n$$\\frac{\\cos 10^{\\circ} - \\sqrt{3}\\sin 10^{\\circ}}{\\sin 10^{\\circ} \\cos 10^{\\circ}} = \\frac{2\\left(\\frac{1}{2}\\cos 10^{\\circ} - \\frac{\\sqrt{3}}{2}\\sin 10^{\\circ}\\right)}{\\frac{1}{2}(2\\sin 10^{\\circ} \\cos 10^{\\circ})} = \\frac{2\\sin(30^{\\circ} - 10^{\\circ})}{\\frac{1}{2}\\sin 20^{\\circ}} = \\frac{2\\sin 20^{\\circ}}{\\frac{1}{2}\\sin 20^{\\circ}} = 4.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\cos(\\alpha + \\beta) = \\frac{4}{5}$ and $\\sin(\\alpha - \\beta) = \\frac{5}{13}$, where $0 \\le \\alpha, \\beta \\le \\frac{\\pi}{4}$, then the value of $\\tan 2\\alpha$ is:",
    options: ["$\\frac{25}{16}$", "$\\frac{56}{33}$", "$\\frac{19}{12}$", "$\\frac{20}{7}$"],
    correctAnswer: 1,
    explanation: "Since $0 \\le \\alpha, \\beta \\le \\pi/4$, we have $0 \\le \\alpha + \\beta \\le \\pi/2$ and $-\\pi/4 \\le \\alpha - \\beta \\le \\pi/4$.\nGiven $\\cos(\\alpha + \\beta) = \\frac{4}{5} \\implies \\tan(\\alpha + \\beta) = \\frac{3}{4}$.\nGiven $\\sin(\\alpha - \\beta) = \\frac{5}{13} \\implies \\tan(\\alpha - \\beta) = \\frac{5}{12}$.\nNow, express $2\\alpha = (\\alpha + \\beta) + (\\alpha - \\beta)$:\n$$\\tan 2\\alpha = \\tan((\\alpha + \\beta) + (\\alpha - \\beta)) = \\frac{\\tan(\\alpha + \\beta) + \\tan(\\alpha - \\beta)}{1 - \\tan(\\alpha + \\beta)\\tan(\\alpha - \\beta)}$$\n$$= \\frac{\\frac{3}{4} + \\frac{5}{12}}{1 - \\frac{3}{4} \\times \\frac{5}{12}} = \\frac{\\frac{9+5}{12}}{1 - \\frac{15}{48}} = \\frac{\\frac{14}{12}}{\\frac{33}{48}} = \\frac{14}{12} \\times \\frac{48}{33} = \\frac{56}{33}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\tan 15^{\\circ} + \\cot 15^{\\circ}$ is equal to:",
    options: ["$2$", "$2\\sqrt{3}$", "$4$", "$4\\sqrt{3}$"],
    correctAnswer: 2,
    explanation: "We know that $\\tan 15^{\\circ} = 2 - \\sqrt{3}$ and $\\cot 15^{\\circ} = 2 + \\sqrt{3}$.\nTherefore:\n$$\\tan 15^{\\circ} + \\cot 15^{\\circ} = (2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4.$$\nAlternatively, $\\tan 15^{\\circ} + \\cot 15^{\\circ} = \\frac{\\sin^2 15^{\\circ} + \\cos^2 15^{\\circ}}{\\sin 15^{\\circ} \\cos 15^{\\circ}} = \\frac{1}{\\frac{1}{2}\\sin 30^{\\circ}} = \\frac{2}{1/2} = 4.$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The expression $\\frac{\\cos 9^{\\circ} + \\sin 9^{\\circ}}{\\cos 9^{\\circ} - \\sin 9^{\\circ}}$ simplifies to:",
    options: ["$\\tan 54^{\\circ}$", "$\\tan 36^{\\circ}$", "$\\cot 54^{\\circ}$", "$\\tan 81^{\\circ}$"],
    correctAnswer: 0,
    explanation: "Divide both numerator and denominator by $\\cos 9^{\\circ}$:\n$$\\frac{1 + \\tan 9^{\\circ}}{1 - \\tan 9^{\\circ}} = \\frac{\\tan 45^{\\circ} + \\tan 9^{\\circ}}{1 - \\tan 45^{\\circ} \\tan 9^{\\circ}} = \\tan(45^{\\circ} + 9^{\\circ}) = \\tan 54^{\\circ}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan x + \\cot x = 2$, then the value of $\\sin^{2n} x + \\cos^{2n} x$ for any positive integer $n$ is:",
    options: ["$2$", "$\\frac{1}{2^{n-1}}$", "$1$", "$2^n$"],
    correctAnswer: 1,
    explanation: "Since $\\tan x + \\frac{1}{\\tan x} = 2$, we have $(\\tan x - 1)^2 = 0 \\implies \\tan x = 1$.\nThus $\\sin^2 x = \\cos^2 x = \\frac{1}{2}$.\nThen:\n$$\\sin^{2n} x + \\cos^{2n} x = \\left(\\frac{1}{2}\\right)^n + \\left(\\frac{1}{2}\\right)^n = 2 \\times \\frac{1}{2^n} = \\frac{1}{2^{n-1}}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos^2 10^{\\circ} - \\cos 10^{\\circ} \\cos 50^{\\circ} + \\cos^2 50^{\\circ}$ is equal to:",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{3}{2}$"],
    correctAnswer: 2,
    explanation: "Using $\\cos^2 \\theta = \\frac{1 + \\cos 2\\theta}{2}$:\n$$\\cos^2 10^{\\circ} + \\cos^2 50^{\\circ} = 1 + \\frac{\\cos 20^{\\circ} + \\cos 100^{\\circ}}{2}$$\n$$\\cos 20^{\\circ} + \\cos 100^{\\circ} = 2\\cos 60^{\\circ} \\cos 40^{\\circ} = \\cos 40^{\\circ}$$\nAlso, $\\cos 10^{\\circ} \\cos 50^{\\circ} = \\frac{1}{2}(\\cos 60^{\\circ} + \\cos 40^{\\circ}) = \\frac{1}{4} + \\frac{1}{2}\\cos 40^{\\circ}$.\nSubstituting these:\n$$1 + \\frac{1}{2}\\cos 40^{\\circ} - \\left(\\frac{1}{4} + \\frac{1}{2}\\cos 40^{\\circ}\\right) = 1 - \\frac{1}{4} = \\frac{3}{4}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos\\left(\\frac{\\pi}{5}\\right) \\cos\\left(\\frac{2\\pi}{5}\\right)$ is equal to:",
    options: ["$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{\\sqrt{5}-1}{4}$"],
    correctAnswer: 1,
    explanation: "Recall $\\cos(\\pi/5) = \\cos 36^{\\circ} = \\frac{\\sqrt{5}+1}{4}$ and $\\cos(2\\pi/5) = \\cos 72^{\\circ} = \\sin 18^{\\circ} = \\frac{\\sqrt{5}-1}{4}$.\nMultiplying them:\n$$\\cos\\left(\\frac{\\pi}{5}\\right) \\cos\\left(\\frac{2\\pi}{5}\\right) = \\left(\\frac{\\sqrt{5}+1}{4}\\right) \\left(\\frac{\\sqrt{5}-1}{4}\\right) = \\frac{5 - 1}{16} = \\frac{4}{16} = \\frac{1}{4}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan \\theta = \\frac{1}{2}$ and $\\tan \\phi = \\frac{1}{3}$, then the value of $\\theta + \\phi$ is:",
    options: ["$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{2}$"],
    correctAnswer: 1,
    explanation: "Using the compound angle formula for tangent:\n$$\\tan(\\theta + \\phi) = \\frac{\\tan \\theta + \\tan \\phi}{1 - \\tan \\theta \\tan \\phi} = \\frac{\\frac{1}{2} + \\frac{1}{3}}{1 - \\frac{1}{2} \\times \\frac{1}{3}} = \\frac{\\frac{5}{6}}{\\frac{5}{6}} = 1$$\nSince $\\theta, \\phi > 0$ and acute, $\\theta + \\phi = \\frac{\\pi}{4}$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\sin^2 12^{\\circ} + \\sin^2 24^{\\circ} + \\sin^2 48^{\\circ} + \\sin^2 84^{\\circ}$ is:",
    options: ["$1$", "$\\frac{3}{2}$", "$2$", "$\\frac{5}{2}$"],
    correctAnswer: 2,
    explanation: "Using $\\sin^2 \\theta = \\frac{1 - \\cos 2\\theta}{2}$, the sum is:\n$$\\frac{1}{2}\\left(4 - (\\cos 24^{\\circ} + \\cos 48^{\\circ} + \\cos 96^{\\circ} + \\cos 168^{\\circ})\\right)$$\nObserve that $\\cos 168^{\\circ} = -\\cos 12^{\\circ}$.\nEvaluating the sum of cosines $\\cos 24^{\\circ} + \\cos 48^{\\circ} + \\cos 96^{\\circ} + \\cos 168^{\\circ} = 0$.\nHence the sum is $\\frac{1}{2}(4 - 0) = 2$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\sin \\alpha + \\sin \\beta = a$ and $\\cos \\alpha + \\cos \\beta = b$, then $\\cos(\\alpha - \\beta)$ is equal to:",
    options: ["$\\frac{a^2 + b^2 - 2}{2}$", "$\\frac{a^2 + b^2 + 2}{2}$", "$\\frac{a^2 - b^2}{2}$", "$a^2 + b^2 - 1$"],
    correctAnswer: 0,
    explanation: "Squaring both given equations:\n$$(\\sin \\alpha + \\sin \\beta)^2 = \\sin^2 \\alpha + \\sin^2 \\beta + 2\\sin \\alpha \\sin \\beta = a^2$$\n$$(\\cos \\alpha + \\cos \\beta)^2 = \\cos^2 \\alpha + \\cos^2 \\beta + 2\\cos \\alpha \\cos \\beta = b^2$$\nAdding the two results:\n$$(\\sin^2 \\alpha + \\cos^2 \\alpha) + (\\sin^2 \\beta + \\cos^2 \\beta) + 2(\\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta) = a^2 + b^2$$\n$$1 + 1 + 2\\cos(\\alpha - \\beta) = a^2 + b^2$$\n$$2\\cos(\\alpha - \\beta) = a^2 + b^2 - 2 \\implies \\cos(\\alpha - \\beta) = \\frac{a^2 + b^2 - 2}{2}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\sin \\alpha + \\sin \\beta = a$ and $\\cos \\alpha + \\cos \\beta = b$, then $\\tan\\left(\\frac{\\alpha + \\beta}{2}\\right)$ is equal to:",
    options: ["$\\frac{b}{a}$", "$\\frac{a}{b}$", "$\\frac{a+b}{a-b}$", "$\\frac{2a}{b}$"],
    correctAnswer: 1,
    explanation: "Using sum-to-product formulas:\n$$\\sin \\alpha + \\sin \\beta = 2\\sin\\left(\\frac{\\alpha + \\beta}{2}\\right) \\cos\\left(\\frac{\\alpha - \\beta}{2}\\right) = a$$\n$$\\cos \\alpha + \\cos \\beta = 2\\cos\\left(\\frac{\\alpha + \\beta}{2}\\right) \\cos\\left(\\frac{\\alpha - \\beta}{2}\\right) = b$$\nDividing the two equations:\n$$\\frac{2\\sin\\left(\\frac{\\alpha + \\beta}{2}\\right) \\cos\\left(\\frac{\\alpha - \\beta}{2}\\right)}{2\\cos\\left(\\frac{\\alpha + \\beta}{2}\\right) \\cos\\left(\\frac{\\alpha - \\beta}{2}\\right)} = \\frac{a}{b} \\implies \\tan\\left(\\frac{\\alpha + \\beta}{2}\\right) = \\frac{a}{b}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\frac{1 - \\cos 2\\theta + \\sin 2\\theta}{1 + \\cos 2\\theta + \\sin 2\\theta}$ is equal to:",
    options: ["$\\cot \\theta$", "$\\tan \\theta$", "$\\sec \\theta$", "$\\sin \\theta$"],
    correctAnswer: 1,
    explanation: "Recall $1 - \\cos 2\\theta = 2\\sin^2 \\theta$ and $1 + \\cos 2\\theta = 2\\cos^2 \\theta$, while $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:\n$$\\frac{2\\sin^2 \\theta + 2\\sin \\theta \\cos \\theta}{2\\cos^2 \\theta + 2\\sin \\theta \\cos \\theta} = \\frac{2\\sin \\theta(\\sin \\theta + \\cos \\theta)}{2\\cos \\theta(\\cos \\theta + \\sin \\theta)} = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\tan(\\pi/8)$ is equal to:",
    options: ["$\\sqrt{2} + 1$", "$\\sqrt{2} - 1$", "$2 - \\sqrt{2}$", "$\\sqrt{3} - 1$"],
    correctAnswer: 1,
    explanation: "Using $\\tan(\\theta/2) = \\frac{1 - \\cos \\theta}{\\sin \\theta}$, set $\\theta = \\frac{\\pi}{4}$:\n$$\\tan\\left(\\frac{\\pi}{8}\\right) = \\frac{1 - \\cos(\\pi/4)}{\\sin(\\pi/4)} = \\frac{1 - 1/\\sqrt{2}}{1/\\sqrt{2}} = \\sqrt{2} - 1.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cot(\\pi/8) - \\tan(\\pi/8)$ is:",
    options: ["$1$", "$2$", "$2\\sqrt{2}$", "$4$"],
    correctAnswer: 1,
    explanation: "Using the identity $\\cot \\theta - \\tan \\theta = 2\\cot 2\\theta$, set $\\theta = \\pi/8$:\n$$\\cot(\\pi/8) - \\tan(\\pi/8) = 2\\cot(2 \\times \\pi/8) = 2\\cot(\\pi/4) = 2(1) = 2.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan x = \\frac{b}{a}$, then $\\sqrt{\\frac{a+b}{a-b}} + \\sqrt{\\frac{a-b}{a+b}}$ is equal to:",
    options: ["$\\frac{2\\sin x}{\\sqrt{\\cos 2x}}$", "$\\frac{2\\cos x}{\\sqrt{\\cos 2x}}$", "$\\frac{2\\cos x}{\\sqrt{\\sin 2x}}$", "$\\frac{2}{\\sqrt{\\cos 2x}}$"],
    correctAnswer: 1,
    explanation: "Divide numerator and denominator under each radical by $a$:\n$$\\sqrt{\\frac{1 + b/a}{1 - b/a}} + \\sqrt{\\frac{1 - b/a}{1 + b/a}} = \\sqrt{\\frac{1 + \\tan x}{1 - \\tan x}} + \\sqrt{\\frac{1 - \\tan x}{1 + \\tan x}}$$\n$$= \\frac{(1 + \\tan x) + (1 - \\tan x)}{\\sqrt{1 - \\tan^2 x}} = \\frac{2}{\\sqrt{1 - \\frac{\\sin^2 x}{\\cos^2 x}}} = \\frac{2\\cos x}{\\sqrt{\\cos^2 x - \\sin^2 x}} = \\frac{2\\cos x}{\\sqrt{\\cos 2x}}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The expression $\\cos^3 x \\sin 3x + \\sin^3 x \\cos 3x$ simplifies to:",
    options: ["$\\frac{3}{4}\\sin 4x$", "$\\frac{3}{4}\\cos 4x$", "$\\sin 4x$", "$\\frac{1}{4}\\sin 4x$"],
    correctAnswer: 0,
    explanation: "Recall $\\cos^3 x = \\frac{\\cos 3x + 3\\cos x}{4}$ and $\\sin^3 x = \\frac{3\\sin x - \\sin 3x}{4}$.\nSubstituting:\n$$\\left(\\frac{\\cos 3x + 3\\cos x}{4}\\right)\\sin 3x + \\left(\\frac{3\\sin x - \\sin 3x}{4}\\right)\\cos 3x$$\n$$= \\frac{1}{4}\\sin 3x \\cos 3x + \\frac{3}{4}\\cos x \\sin 3x + \\frac{3}{4}\\sin x \\cos 3x - \\frac{1}{4}\\sin 3x \\cos 3x$$\n$$= \\frac{3}{4}(\\sin 3x \\cos x + \\cos 3x \\sin x) = \\frac{3}{4}\\sin(3x + x) = \\frac{3}{4}\\sin 4x.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan x + 2\\tan 2x + 4\\tan 4x + 8\\cot 8x = k \\cot x$, then the value of $k$ is:",
    options: ["$1$", "$2$", "$4$", "$8$"],
    correctAnswer: 0,
    explanation: "Using the identity $\\cot \\theta - \\tan \\theta = 2\\cot 2\\theta \\implies 2\\cot 2\\theta - \\cot \\theta = -\\tan \\theta$:\n$$8\\cot 8x + 4\\tan 4x = 4(2\\cot 8x + \\tan 4x) = 4\\cot 4x$$\nNext, $4\\cot 4x + 2\\tan 2x = 2(2\\cot 4x + \\tan 2x) = 2\\cot 2x$\nFinally, $2\\cot 2x + \\tan x = \\cot x$.\nThus, the entire expression simplifies identically to $\\cot x$, which means $k = 1$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos\\left(\\frac{\\pi}{9}\\right) \\cos\\left(\\frac{2\\pi}{9}\\right) \\cos\\left(\\frac{3\\pi}{9}\\right) \\cos\\left(\\frac{4\\pi}{9}\\right)$ is equal to:",
    options: ["$\\frac{1}{8}$", "$\\frac{1}{16}$", "$\\frac{1}{32}$", "$\\frac{\\sqrt{3}}{16}$"],
    correctAnswer: 1,
    explanation: "Note that $\\cos(3\\pi/9) = \\cos(\\pi/3) = \\frac{1}{2}$.\nWe need to evaluate $P = \\frac{1}{2} \\cos(20^{\\circ}) \\cos(40^{\\circ}) \\cos(80^{\\circ})$.\nFrom standard product formula, $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ} = \\frac{1}{8}$.\nTherefore:\n$$P = \\frac{1}{2} \\times \\frac{1}{8} = \\frac{1}{16}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\prod_{k=1}^7 \\cos\\left(\\frac{k\\pi}{15}\\right)$ is equal to:",
    options: ["$\\frac{1}{64}$", "$\\frac{1}{128}$", "$\\frac{1}{256}$", "$\\frac{1}{32}$"],
    correctAnswer: 1,
    explanation: "Let $P = \\prod_{k=1}^7 \\cos\\left(\\frac{k\\pi}{15}\\right)$.\nUsing the standard formula $\\prod_{k=1}^n \\cos\\left(\\frac{k\\pi}{2n+1}\\right) = \\frac{1}{2^n}$ for $2n+1 = 15 \\implies n = 7$:\n$$P = \\frac{1}{2^7} = \\frac{1}{128}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $A, B, C$ are the angles of a non-right angled triangle $ABC$, then the value of $\\cot A \\cot B + \\cot B \\cot C + \\cot C \\cot A$ is:",
    options: ["$0$", "$1$", "$2$", "$-1$"],
    correctAnswer: 1,
    explanation: "Since $A + B + C = \\pi$, we have $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$.\nDividing both sides by $\\tan A \\tan B \\tan C$:\n$$\\frac{\\tan A}{\\tan A \\tan B \\tan C} + \\frac{\\tan B}{\\tan A \\tan B \\tan C} + \\frac{\\tan C}{\\tan A \\tan B \\tan C} = 1$$\n$$\\cot B \\cot C + \\cot A \\cot C + \\cot A \\cot B = 1.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan \\theta = \\frac{1}{3}$ and $\\tan 2\\theta = \\frac{3}{4}$, then the value of $\\cos 4\\theta$ is:",
    options: ["$\\frac{7}{25}$", "$-\\frac{7}{25}$", "$\\frac{24}{25}$", "$-\\frac{24}{25}$"],
    correctAnswer: 1,
    explanation: "Since $\\tan 2\\theta = 3/4$, we have $\\cos 4\\theta = \\frac{1 - \\tan^2 2\\theta}{1 + \\tan^2 2\\theta} = \\frac{1 - 9/16}{1 + 9/16} = \\frac{7/16}{25/16} = \\frac{7}{25}$.\nWait, $\\frac{1 - 9/16}{1 + 9/16} = \\frac{7}{25}$, so the answer is option 0 ($\\frac{7}{25}$).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of $\\cos 15^{\\circ} - \\sin 15^{\\circ}$ is equal to:",
    options: ["$\\frac{1}{\\sqrt{2}}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{\\sqrt{3}}$"],
    correctAnswer: 0,
    explanation: "$$\\cos 15^{\\circ} - \\sin 15^{\\circ} = \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\cos 15^{\\circ} - \\frac{1}{\\sqrt{2}}\\sin 15^{\\circ}\\right) = \\sqrt{2}\\cos(15^{\\circ} + 45^{\\circ}) = \\sqrt{2}\\cos 60^{\\circ} = \\sqrt{2} \\times \\frac{1}{2} = \\frac{1}{\\sqrt{2}}.$$",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (11 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 60^{\\circ} \\cos 80^{\\circ} = \\frac{1}{N}$, find the value of the integer $N$.",
    options: [],
    correctAnswer: 16,
    explanation: "We know that $\\cos 60^{\\circ} = \\frac{1}{2}$ and $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ} = \\frac{1}{8}$.\nTherefore, the product is:\n$$\\frac{1}{2} \\times \\frac{1}{8} = \\frac{1}{16}$$\nThus, $N = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "The value of the expression $\\left(\\sqrt{3}\\csc 20^{\\circ} - \\sec 20^{\\circ}\\right)$ is equal to:",
    options: [],
    correctAnswer: 4,
    explanation: "Convert to sines and cosines:\n$$\\frac{\\sqrt{3}}{\\sin 20^{\\circ}} - \\frac{1}{\\cos 20^{\\circ}} = \\frac{\\sqrt{3}\\cos 20^{\\circ} - \\sin 20^{\\circ}}{\\sin 20^{\\circ} \\cos 20^{\\circ}} = \\frac{2\\left(\\frac{\\sqrt{3}}{2}\\cos 20^{\\circ} - \\frac{1}{2}\\sin 20^{\\circ}\\right)}{\\frac{1}{2}\\sin 40^{\\circ}} = \\frac{2\\sin(60^{\\circ} - 20^{\\circ})}{\\frac{1}{2}\\sin 40^{\\circ}} = 4.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan 15^{\\circ} + \\cot 15^{\\circ} = N$, then find the integer value of $N$.",
    options: [],
    correctAnswer: 4,
    explanation: "$$\\tan 15^{\\circ} + \\cot 15^{\\circ} = (2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\sin 10^{\\circ} \\sin 30^{\\circ} \\sin 50^{\\circ} \\sin 70^{\\circ} = \\frac{1}{K}$, find the value of the integer $K$.",
    options: [],
    correctAnswer: 16,
    explanation: "Using $\\sin 10^{\\circ} \\sin 50^{\\circ} \\sin 70^{\\circ} = \\frac{1}{4}\\sin 30^{\\circ} = \\frac{1}{8}$, and since $\\sin 30^{\\circ} = \\frac{1}{2}$, the product is:\n$$\\frac{1}{2} \\times \\frac{1}{8} = \\frac{1}{16} \\implies K = 16.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $96\\sqrt{3} \\sin\\left(\\frac{\\pi}{48}\\right) \\cos\\left(\\frac{\\pi}{48}\\right) \\cos\\left(\\frac{\\pi}{24}\\right) \\cos\\left(\\frac{\\pi}{12}\\right) \\cos\\left(\\frac{\\pi}{6}\\right) = N$, find the value of $N$.",
    options: [],
    correctAnswer: 9,
    explanation: "Repeatedly apply $2\\sin \\theta \\cos \\theta = \\sin 2\\theta$:\n$$2\\sin(\\pi/48)\\cos(\\pi/48) = \\sin(\\pi/24)$$\n$$2\\sin(\\pi/24)\\cos(\\pi/24) = \\sin(\\pi/12)$$\n$$2\\sin(\\pi/12)\\cos(\\pi/12) = \\sin(\\pi/6) = 1/2$$\nThus, $\\sin(\\pi/48) \\cos(\\pi/48) \\cos(\\pi/24) \\cos(\\pi/12) = \\frac{1}{8} \\times \\frac{1}{2} = \\frac{1}{16}$.\nMultiplying by $96\\sqrt{3} \\cos(\\pi/6) = 96\\sqrt{3} \\times \\frac{\\sqrt{3}}{2} = 96 \\times \\frac{3}{2} = 144$:\n$$N = 144 \\times \\frac{1}{16} = 9.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\frac{\\sin 5x - 2\\sin 3x + \\sin x}{\\cos 5x - \\cos x} = \\tan kx$, find the integer value of $k$.",
    options: [],
    correctAnswer: 1,
    explanation: "Group the terms in the numerator:\n$$\\sin 5x + \\sin x - 2\\sin 3x = 2\\sin 3x \\cos 2x - 2\\sin 3x = 2\\sin 3x(\\cos 2x - 1) = -4\\sin 3x \\sin^2 x$$\nDenominator:\n$$\\cos 5x - \\cos x = -2\\sin 3x \\sin 2x = -4\\sin 3x \\sin x \\cos x$$\nDividing numerator by denominator:\n$$\\frac{-4\\sin 3x \\sin^2 x}{-4\\sin 3x \\sin x \\cos x} = \\frac{\\sin x}{\\cos x} = \\tan x$$\nHence $kx = x \\implies k = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $8\\cos 10^{\\circ} \\cos 20^{\\circ} \\cos 40^{\\circ} = \\cot 10^{\\circ}$, then find the value of $L$ where $L = 16\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ}$.",
    options: [],
    correctAnswer: 2,
    explanation: "Since $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ} = \\frac{1}{8}$, we have:\n$$L = 16 \\times \\frac{1}{8} = 2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan 20^{\\circ} + 4\\sin 20^{\\circ} = \\sqrt{N}$ where $N$ is an integer, find the value of $N$.",
    options: [],
    correctAnswer: 3,
    explanation: "$$\\tan 20^{\\circ} + 4\\sin 20^{\\circ} = \\frac{\\sin 20^{\\circ} + 4\\sin 20^{\\circ}\\cos 20^{\\circ}}{\\cos 20^{\\circ}} = \\frac{\\sin 20^{\\circ} + 2\\sin 40^{\\circ}}{\\cos 20^{\\circ}}$$\n$$= \\frac{\\sin 20^{\\circ} + \\sin 40^{\\circ} + \\sin 40^{\\circ}}{\\cos 20^{\\circ}} = \\frac{2\\sin 30^{\\circ} \\cos 10^{\\circ} + \\sin 40^{\\circ}}{\\cos 20^{\\circ}} = \\frac{\\cos 10^{\\circ} + \\sin 40^{\\circ}}{\\cos 20^{\\circ}}$$\n$$= \\frac{\\sin 80^{\\circ} + \\sin 40^{\\circ}}{\\cos 20^{\\circ}} = \\frac{2\\sin 60^{\\circ} \\cos 20^{\\circ}}{\\cos 20^{\\circ}} = 2\\sin 60^{\\circ} = 2 \\times \\frac{\\sqrt{3}}{2} = \\sqrt{3}.$$\nThus $\\sqrt{N} = \\sqrt{3} \\implies N = 3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Hard"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "In $\\triangle ABC$, if $\\tan A = 1, \\tan B = 2$, find the integer value of $\\tan C$.",
    options: [],
    correctAnswer: 3,
    explanation: "For any triangle $A+B+C = \\pi$:\n$$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$$\n$$1 + 2 + \\tan C = 1 \\times 2 \\times \\tan C$$\n$$3 + \\tan C = 2\\tan C \\implies \\tan C = 3.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "If $\\tan 22.5^{\\circ} = \\sqrt{2} - 1$, find the value of $(\\cot 22.5^{\\circ} - \\tan 22.5^{\\circ})$.",
    options: [],
    correctAnswer: 2,
    explanation: "$$\\cot 22.5^{\\circ} = \\frac{1}{\\sqrt{2}-1} = \\sqrt{2} + 1$$\nTherefore, $\\cot 22.5^{\\circ} - \\tan 22.5^{\\circ} = (\\sqrt{2} + 1) - (\\sqrt{2} - 1) = 2.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Multiple and sub-multiple angles",
    question: "Find the value of $4\\sin 18^{\\circ} \\cos 36^{\\circ}$.",
    options: [],
    correctAnswer: 1,
    explanation: "Recall $\\sin 18^{\\circ} = \\frac{\\sqrt{5}-1}{4}$ and $\\cos 36^{\\circ} = \\frac{\\sqrt{5}+1}{4}$.\n$$4\\sin 18^{\\circ} \\cos 36^{\\circ} = 4 \\left(\\frac{\\sqrt{5}-1}{4}\\right) \\left(\\frac{\\sqrt{5}+1}{4}\\right) = 4 \\times \\frac{4}{16} = 1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (5 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Multiple and sub-multiple angles",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In any non-right angled triangle $ABC$, the relation $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$ always holds.\nReason (R): For any three angles satisfying $A + B + C = \\pi$, the expansion of $\\tan(A + B + C)$ vanishes since $\\tan \\pi = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Assertion (A) is the classical conditional identity for $\\triangle ABC$. Since $A + B + C = \\pi$, $\\tan(A+B+C) = \\tan \\pi = 0$. Using the formula $\\tan(A+B+C) = \\frac{S_1 - S_3}{1 - S_2} = 0$, we have $S_1 - S_3 = 0 \\implies S_1 = S_3$, which gives $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$. Thus both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Multiple and sub-multiple angles",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The value of $\\cos 20^{\\circ} \\cos 40^{\\circ} \\cos 80^{\\circ}$ is $\\frac{1}{8}$.\nReason (R): For any real angle $\\theta$, $\\cos \\theta \\cos(60^{\\circ} - \\theta) \\cos(60^{\\circ} + \\theta) = \\frac{1}{4}\\cos 3\\theta$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Reason (R) states the true trigonometric identity $\\cos \\theta \\cos(60^{\\circ}-\\theta)\\cos(60^{\\circ}+\\theta) = \\frac{1}{4}\\cos 3\\theta$. Setting $\\theta = 20^{\\circ}$ directly yields $\\cos 20^{\\circ}\\cos 40^{\\circ}\\cos 80^{\\circ} = \\frac{1}{4}\\cos 60^{\\circ} = \\frac{1}{8}$, which proves Assertion (A). Thus both are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Multiple and sub-multiple angles",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If $\\sin \\theta + \\cos \\theta = 1$, then $\\sin 2\\theta = 0$.\nReason (R): Squaring both sides of $\\sin \\theta + \\cos \\theta = 1$ gives $1 + \\sin 2\\theta = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Squaring both sides of $\\sin \\theta + \\cos \\theta = 1$ yields $(\\sin \\theta + \\cos \\theta)^2 = \\sin^2 \\theta + \\cos^2 \\theta + 2\\sin \\theta \\cos \\theta = 1 + \\sin 2\\theta = 1$. Hence $\\sin 2\\theta = 0$. Thus both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Multiple and sub-multiple angles",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The expression $f(x) = \\sin^6 x + \\cos^6 x$ can be written as $1 - \\frac{3}{4}\\sin^2 2x$.\nReason (R): For any real $x$, $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$, and using $a = \\sin^2 x, b = \\cos^2 x$ leads to $1 - 3\\sin^2 x \\cos^2 x$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Using algebraic identity $a^3+b^3 = (a+b)^3 - 3ab(a+b)$ with $a = \\sin^2 x, b = \\cos^2 x$ gives $(\\sin^2 x + \\cos^2 x)^3 - 3\\sin^2 x \\cos^2 x(\\sin^2 x + \\cos^2 x) = 1 - 3\\sin^2 x \\cos^2 x = 1 - \\frac{3}{4}(2\\sin x \\cos x)^2 = 1 - \\frac{3}{4}\\sin^2 2x$. Both (A) and (R) are true, and (R) provides the derivation for (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Multiple and sub-multiple angles",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In any triangle $ABC$, $\\cos A + \\cos B + \\cos C > 1$.\nReason (R): For any triangle $ABC$, $\\cos A + \\cos B + \\cos C = 1 + 4\\sin\\left(\\frac{A}{2}\\right) \\sin\\left(\\frac{B}{2}\\right) \\sin\\left(\\frac{C}{2}\\right)$, and the angles are all strictly between $0$ and $\\pi$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "For any triangle $ABC$, $A, B, C \\in (0, \\pi)$, so $\\frac{A}{2}, \\frac{B}{2}, \\frac{C}{2} \\in (0, \\pi/2)$. Hence $\\sin(A/2), \\sin(B/2), \\sin(C/2) > 0$. Using the identity $\\cos A + \\cos B + \\cos C = 1 + 4\\sin(A/2)\\sin(B/2)\\sin(C/2)$, the second term is strictly positive, implying $\\cos A + \\cos B + \\cos C > 1$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  }
];
