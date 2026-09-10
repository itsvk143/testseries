// scripts/repaired_genuine_integrals.js
// 40 Repaired and Sanitized Genuine Questions for Integrals (Class 12, Mathematics)

const repairedGenuineIntegrals = [
  // --- 1 to 10: Definite integrals ---
  {
    _id: "6a98e947910bb37b0e55878b",
    question: "Evaluate the definite integral: $\\int_{0}^{1} (x^2 + 2x + 1) dx$",
    options: [
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{7}{3}$",
      "$\\frac{8}{3}$"
    ],
    correctAnswer: 2,
    explanation: "The antiderivative of $x^2 + 2x + 1$ is $\\frac{x^3}{3} + x^2 + x$. Evaluating from $0$ to $1$: $\\left(\\frac{1}{3} + 1 + 1\\right) - 0 = \\frac{7}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e55878c",
    question: "What is the area under the curve $y = \\sin(x)$ from $x = 0$ to $x = \\pi$?",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$\\pi$"
    ],
    correctAnswer: 2,
    explanation: "The area under the non-negative curve $y = \\sin x$ on $[0, \\pi]$ is $\\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = -\\cos\\pi - (-\\cos 0) = -(-1) - (-1) = 2$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e55878d",
    question: "Calculate the definite integral: $\\int_{1}^{e} \\frac{1}{x} dx$",
    options: [
      "$0$",
      "$1$",
      "$e$",
      "$e - 1$"
    ],
    correctAnswer: 1,
    explanation: "The antiderivative of $\\frac{1}{x}$ on $[1, e]$ is $\\ln x$. Evaluating from $1$ to $e$: $\\ln(e) - \\ln(1) = 1 - 0 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e55878e",
    question: "Evaluate: $\\int_{-1}^{1} x^3 dx$",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "The function $f(x) = x^3$ is an odd function since $f(-x) = (-x)^3 = -x^3 = -f(x)$. The integral of any odd function over a symmetric interval $[-a, a]$ is $0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e55878f",
    question: "Find the value of $\\int_{0}^{\\frac{\\pi}{2}} \\cos(x) dx$",
    options: [
      "$0$",
      "$1$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{4}$"
    ],
    correctAnswer: 1,
    explanation: "The antiderivative of $\\cos x$ is $\\sin x$. Evaluating from $0$ to $\\frac{\\pi}{2}$: $\\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e558790",
    question: "What is the value of $\\int_{2}^{4} (2x + 3) dx$?",
    options: [
      "$10$",
      "$14$",
      "$18$",
      "$20$"
    ],
    correctAnswer: 2,
    explanation: "The antiderivative is $x^2 + 3x$. Evaluating from $2$ to $4$: $(4^2 + 3(4)) - (2^2 + 3(2)) = (16 + 12) - (4 + 6) = 28 - 10 = 18$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e558791",
    question: "Evaluate the definite integral: $\\int_{0}^{1} e^x dx$",
    options: [
      "$e$",
      "$e - 1$",
      "$1$",
      "$0$"
    ],
    correctAnswer: 1,
    explanation: "The antiderivative of $e^x$ is $e^x$. Evaluating from $0$ to $1$: $e^1 - e^0 = e - 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e558792",
    question: "Calculate $\\int_{0}^{2} x^2 dx$",
    options: [
      "$\\frac{7}{3}$",
      "$8$",
      "$\\frac{8}{3}$",
      "$4$"
    ],
    correctAnswer: 2,
    explanation: "The antiderivative of $x^2$ is $\\frac{x^3}{3}$. Evaluating from $0$ to $2$: $\\frac{2^3}{3} - 0 = \\frac{8}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e558793",
    question: "What is the value of $\\int_{1}^{3} \\frac{1}{x} dx$?",
    options: [
      "$\\ln(3)$",
      "$\\ln(2)$",
      "$\\ln(3) - \\ln(2)$",
      "$3 \\ln(3)$"
    ],
    correctAnswer: 0,
    explanation: "The antiderivative of $\\frac{1}{x}$ is $\\ln|x|$. Evaluating from $1$ to $3$: $\\ln(3) - \\ln(1) = \\ln(3) - 0 = \\ln(3)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e947910bb37b0e558794",
    question: "Evaluate $\\int_{0}^{\\pi} \\sin(2x) dx$",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: 0,
    explanation: "The antiderivative of $\\sin(2x)$ is $-\\frac{1}{2}\\cos(2x)$. Evaluating from $0$ to $\\pi$: $-\\frac{1}{2}(\\cos(2\\pi) - \\cos(0)) = -\\frac{1}{2}(1 - 1) = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Definite integrals",
    difficulty: "easy"
  },

  // --- 11 to 20: Fundamental theorem of calculus ---
  {
    _id: "6a98e948910bb37b0e558795",
    question: "If $F(x) = \\int_{a}^{x} f(t) dt$, where $f$ is continuous on $[a, b]$, what is $F'(x)$ according to the Fundamental Theorem of Calculus?",
    options: [
      "$f(x)$",
      "$f(a)$",
      "$\\int_{a}^{x} f'(t) dt$",
      "$x f(x) - a f(a)$"
    ],
    correctAnswer: 0,
    explanation: "By the First Fundamental Theorem of Calculus, if $f$ is continuous on $[a, b]$, then $F(x) = \\int_a^x f(t) dt$ is differentiable on $(a, b)$ and $F'(x) = f(x)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e558796",
    question: "Evaluate the definite integral: $\\int_{1}^{3} (2x + 1) dx$",
    options: [
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    correctAnswer: 2,
    explanation: "Antiderivative is $x^2 + x$. Evaluating from $1$ to $3$: $(3^2 + 3) - (1^2 + 1) = 12 - 2 = 10$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e558797",
    question: "Let $g(x) = \\int_{0}^{x} \\sin(t^2) dt$. Find $g'(x)$.",
    options: [
      "$2x \\cos(x^2)$",
      "$\\sin(x^2)$",
      "$-\\cos(x^2)$",
      "$x^2 \\sin(x)$"
    ],
    correctAnswer: 1,
    explanation: "By the Fundamental Theorem of Calculus Part 1, $\\frac{d}{dx}\\left(\\int_0^x f(t) dt\\right) = f(x)$. Here $f(t) = \\sin(t^2)$, so $g'(x) = \\sin(x^2)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e558798",
    question: "What is the value of the definite integral $\\int_{0}^{\\pi/2} \\cos(x) dx$ using the Fundamental Theorem of Calculus?",
    options: [
      "$0$",
      "$1$",
      "$-1$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: 1,
    explanation: "The antiderivative of $\\cos x$ is $\\sin x$. Evaluating from $0$ to $\\pi/2$: $\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e558799",
    question: "If $H(x) = \\int_{x}^{b} f(t) dt$, where $f$ is continuous, what is $H'(x)$?",
    options: [
      "$f(x)$",
      "$f(b)$",
      "$-f(x)$",
      "$0$"
    ],
    correctAnswer: 2,
    explanation: "We can write $H(x) = -\\int_b^x f(t) dt$. Differentiating with respect to $x$ gives $H'(x) = -\\frac{d}{dx}\\int_b^x f(t) dt = -f(x)$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e55879a",
    question: "Evaluate $\\int_{e}^{e^2} \\frac{1}{x} dx$",
    options: [
      "$1$",
      "$e$",
      "$e^2$",
      "$e^2 - e$"
    ],
    correctAnswer: 0,
    explanation: "Antiderivative of $\\frac{1}{x}$ is $\\ln|x|$. Evaluating from $e$ to $e^2$: $\\ln(e^2) - \\ln(e) = 2 - 1 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e55879b",
    question: "Consider the function $K(x) = \\int_{1}^{x^2} \\sqrt{t} dt$ for $x > 0$. What is $K'(x)$?",
    options: [
      "$x^2 \\sqrt{x}$",
      "$2x^2$",
      "$2x \\sqrt{x}$",
      "$\\sqrt{x^2}$"
    ],
    correctAnswer: 1,
    explanation: "Using Leibniz's rule: $K'(x) = \\sqrt{x^2} \\cdot \\frac{d}{dx}(x^2) = x \\cdot (2x) = 2x^2$ for $x > 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e55879c",
    question: "Find the value of $\\int_{0}^{4} x^3 dx$",
    options: [
      "$16$",
      "$64$",
      "$256$",
      "$128$"
    ],
    correctAnswer: 1,
    explanation: "Antiderivative is $\\frac{x^4}{4}$. Evaluating from $0$ to $4$: $\\frac{4^4}{4} - 0 = 4^3 = 64$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e55879d",
    question: "Let $M(x) = \\int_{x^2}^{5} \\frac{1}{t} dt$ for $x > 0$. What is $M'(x)$?",
    options: [
      "$-\\frac{1}{x^2}$",
      "$\\frac{1}{5}$",
      "$-\\frac{2}{x}$",
      "$-\\frac{2}{x^3}$"
    ],
    correctAnswer: 2,
    explanation: "Rewrite $M(x) = -\\int_5^{x^2} \\frac{1}{t} dt$. Differentiating: $M'(x) = -\\left(\\frac{1}{x^2}\\right) \\cdot \\frac{d}{dx}(x^2) = -\\frac{1}{x^2} \\cdot 2x = -\\frac{2}{x}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },
  {
    _id: "6a98e948910bb37b0e55879e",
    question: "Evaluate $\\int_{-1}^{1} x dx$",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "The integrand $f(x) = x$ is an odd function integrated over $[-1, 1]$, so $\\left[\\frac{x^2}{2}\\right]_{-1}^1 = \\frac{1}{2} - \\frac{1}{2} = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Fundamental theorem of calculus",
    difficulty: "easy"
  },

  // --- 21 to 30: Integration by parts ---
  {
    _id: "6a98e94b910bb37b0e55879f",
    question: "Evaluate the indefinite integral: $\\int x \\sin(x) dx$",
    options: [
      "$x \\cos(x) - \\sin(x) + C$",
      "$x \\sin(x) + \\cos(x) + C$",
      "$-x \\cos(x) + \\sin(x) + C$",
      "$-x \\sin(x) - \\cos(x) + C$"
    ],
    correctAnswer: 2,
    explanation: "Using integration by parts with $u = x$ and $dv = \\sin(x) dx$, we have $du = dx$ and $v = -\\cos(x)$. Then $\\int x \\sin(x) dx = -x\\cos(x) - \\int (-\\cos(x)) dx = -x\\cos(x) + \\sin(x) + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "easy"
  },
  {
    _id: "6a98e94b910bb37b0e5587a0",
    question: "What is the result of the integral: $\\int e^x \\cos(x) dx$?",
    options: [
      "$\\frac{1}{2} e^x (\\sin(x) + \\cos(x)) + C$",
      "$e^x \\sin(x) + C$",
      "$e^x \\cos(x) + C$",
      "$\\frac{1}{2} e^x (\\sin(x) - \\cos(x)) + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int e^x \\cos(x) dx$. Integrating by parts with $u = \\cos(x), dv = e^x dx$: $I = e^x \\cos(x) + \\int e^x \\sin(x) dx$. Integrating again: $\\int e^x \\sin(x) dx = e^x \\sin(x) - \\int e^x \\cos(x) dx = e^x \\sin(x) - I$. Thus $2I = e^x(\\sin x + \\cos x) \\implies I = \\frac{1}{2}e^x(\\sin x + \\cos x) + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },
  {
    _id: "6a98e94b910bb37b0e5587a1",
    question: "Evaluate $\\int \\ln(x) dx$ using integration by parts.",
    options: [
      "$x \\ln(x) - x + C$",
      "$x \\ln(x) + x + C$",
      "$\\frac{1}{x} \\ln(x) - x + C$",
      "$x \\ln(x) + \\frac{1}{x} + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $u = \\ln(x)$ and $dv = dx$. Then $du = \\frac{1}{x}dx$ and $v = x$. Thus $\\int \\ln(x) dx = x\\ln(x) - \\int x \\cdot \\frac{1}{x} dx = x\\ln(x) - x + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "easy"
  },
  {
    _id: "6a98e94b910bb37b0e5587a2",
    question: "Find the integral of $x^2 e^x$ with respect to $x$.",
    options: [
      "$(x^2 - 2x + 2)e^x + C$",
      "$(x^2 + 2x + 2)e^x + C$",
      "$(x^2 - 2x)e^x + C$",
      "$(x^2 + 2x)e^x + C$"
    ],
    correctAnswer: 0,
    explanation: "Using tabular integration by parts: derivatives of $x^2$ are $2x, 2, 0$; integrals of $e^x$ are $e^x, e^x, e^x$. The result is $x^2 e^x - 2x e^x + 2e^x + C = (x^2 - 2x + 2)e^x + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "easy"
  },
  {
    _id: "6a98e94b910bb37b0e5587a3",
    question: "Evaluate the definite integral $\\int_{0}^{\\pi/2} x \\cos(x) dx$",
    options: [
      "$\\frac{\\pi}{2} - 1$",
      "$\\frac{\\pi}{2} + 1$",
      "$1 - \\frac{\\pi}{2}$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "By parts, $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x)$. Evaluating from $0$ to $\\pi/2$: $(\\frac{\\pi}{2}\\sin(\\frac{\\pi}{2}) + \\cos(\\frac{\\pi}{2})) - (0 + \\cos(0)) = (\\frac{\\pi}{2}(1) + 0) - (1) = \\frac{\\pi}{2} - 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "easy"
  },
  {
    _id: "6a98e94b910bb37b0e5587a4",
    question: "What is $\\int \\sec^3(x) dx$?",
    options: [
      "$\\frac{1}{2} (\\sec(x)\\tan(x) + \\ln|\\sec(x) + \\tan(x)|) + C$",
      "$\\sec(x)\\tan(x) + \\ln|\\sec(x) + \\tan(x)| + C$",
      "$\\frac{1}{2} (\\sec(x)\\tan(x) - \\ln|\\sec(x) + \\tan(x)|) + C$",
      "$\\frac{1}{2} \\ln|\\sec(x) + \\tan(x)| + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $I = \\int \\sec^3 x dx = \\int \\sec x \\sec^2 x dx$. Integrate by parts with $u = \\sec x, dv = \\sec^2 x dx$: $I = \\sec x\\tan x - \\int \\sec x\\tan^2 x dx = \\sec x\\tan x - \\int \\sec x(\\sec^2 x - 1) dx = \\sec x\\tan x - I + \\ln|\\sec x + \\tan x|$. Hence $2I = \\sec x\\tan x + \\ln|\\sec x + \\tan x| \\implies I = \\frac{1}{2}(\\sec x\\tan x + \\ln|\\sec x + \\tan x|) + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },
  {
    _id: "6a98e94b910bb37b0e5587a5",
    question: "Evaluate $\\int x^3 e^{x^2} dx$",
    options: [
      "$\\frac{1}{2} (x^2 - 1) e^{x^2} + C$",
      "$\\frac{1}{2} (x^2 + 1) e^{x^2} + C$",
      "$x^2 e^{x^2} + C$",
      "$e^{x^2} + C$"
    ],
    correctAnswer: 0,
    explanation: "Substitute $t = x^2$, so $dt = 2x dx$. The integral becomes $\\frac{1}{2} \\int t e^t dt$. Integrating by parts gives $\\frac{1}{2} (t e^t - e^t) + C = \\frac{1}{2}(x^2 - 1)e^{x^2} + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },
  {
    _id: "6a98e94b910bb37b0e5587a6",
    question: "Find the integral of $(2x + 1)\\sin(3x) dx$",
    options: [
      "$-\\frac{2x+1}{3}\\cos(3x) + \\frac{2}{9}\\sin(3x) + C$",
      "$-\\frac{2x+1}{3}\\cos(3x) - \\frac{2}{9}\\sin(3x) + C$",
      "$\\frac{2x+1}{3}\\cos(3x) + \\frac{2}{9}\\sin(3x) + C$",
      "$\\frac{2x+1}{3}\\cos(3x) - \\frac{2}{9}\\sin(3x) + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $u = 2x+1, dv = \\sin(3x) dx$. Then $du = 2dx, v = -\\frac{1}{3}\\cos(3x)$. Thus $\\int (2x+1)\\sin(3x) dx = -\\frac{2x+1}{3}\\cos(3x) - \\int -\\frac{2}{3}\\cos(3x) dx = -\\frac{2x+1}{3}\\cos(3x) + \\frac{2}{9}\\sin(3x) + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },
  {
    _id: "6a98e94b910bb37b0e5587a7",
    question: "Evaluate $\\int x \\arctan(x) dx$",
    options: [
      "$\\frac{x^2 + 1}{2}\\arctan(x) - \\frac{1}{2}x + C$",
      "$\\frac{x^2}{2}\\arctan(x) + \\frac{1}{2}x + C$",
      "$\\frac{x^2 - 1}{2}\\arctan(x) + \\frac{1}{2}x + C$",
      "$x \\arctan(x) - \\frac{x^2}{2} + C$"
    ],
    correctAnswer: 0,
    explanation: "Let $u = \\arctan(x), dv = x dx$. Then $du = \\frac{1}{1+x^2}dx, v = \\frac{x^2}{2}$. Thus $\\int x\\arctan(x) dx = \\frac{x^2}{2}\\arctan(x) - \\frac{1}{2}\\int \\frac{x^2}{1+x^2} dx = \\frac{x^2}{2}\\arctan(x) - \\frac{1}{2}\\int \\left(1 - \\frac{1}{1+x^2}\\right) dx = \\frac{x^2}{2}\\arctan(x) - \\frac{1}{2}x + \\frac{1}{2}\\arctan(x) + C = \\frac{x^2+1}{2}\\arctan(x) - \\frac{1}{2}x + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },
  {
    _id: "6a98e94b910bb37b0e5587a8",
    question: "Compute the integral: $\\int (x^2 + 1) e^{-x} dx$",
    options: [
      "$-(x^2 + 2x + 3)e^{-x} + C$",
      "$-(x^2 - 2x + 3)e^{-x} + C$",
      "$(x^2 + 2x + 3)e^{-x} + C$",
      "$-(x^2 + 2x - 3)e^{-x} + C$"
    ],
    correctAnswer: 0,
    explanation: "Using tabular integration: derivatives of $x^2+1$ are $2x, 2, 0$; integrals of $e^{-x}$ are $-e^{-x}, e^{-x}, -e^{-x}$. The result is $(x^2+1)(-e^{-x}) - (2x)(e^{-x}) + (2)(-e^{-x}) + C = -e^{-x}(x^2+1 + 2x + 2) + C = -(x^2 + 2x + 3)e^{-x} + C$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Integration by parts",
    difficulty: "medium"
  },

  // --- 31 to 40: Properties of definite integrals ---
  {
    _id: "6a98e951910bb37b0e5587b3",
    question: "What is the value of the definite integral $\\int_0^1 x^2 dx$?",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_0^1 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b4",
    question: "Evaluate the definite integral $\\int_{-1}^1 x^3 dx$.",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "Since $f(x) = x^3$ is an odd function, $\\int_{-a}^a f(x) dx = 0$. Hence $\\int_{-1}^1 x^3 dx = 0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b5",
    question: "If $\\int_2^5 f(x) dx = 10$ and $\\int_2^8 f(x) dx = 17$, what is $\\int_5^8 f(x) dx$?",
    options: [
      "$7$",
      "$10$",
      "$17$",
      "$27$"
    ],
    correctAnswer: 0,
    explanation: "Using the interval additivity property $\\int_2^8 f(x) dx = \\int_2^5 f(x) dx + \\int_5^8 f(x) dx$, we have $17 = 10 + \\int_5^8 f(x) dx \\implies \\int_5^8 f(x) dx = 7$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b6",
    question: "What is the value of $\\int_0^{\\pi/2} \\sin(x) dx$?",
    options: [
      "$1$",
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_0^{\\pi/2} \\sin(x) dx = [-\\cos x]_0^{\\pi/2} = -\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b7",
    question: "Evaluate $\\int_1^e \\frac{1}{x} dx$.",
    options: [
      "$1$",
      "$e$",
      "$0$",
      "$\\ln(e)$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_1^e \\frac{1}{x} dx = [\\ln x]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b8",
    question: "What is the value of $\\int_3^3 (x^2 + 5x - 2) dx$?",
    options: [
      "$0$",
      "$10$",
      "$5$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "For any integrable function $f$, $\\int_a^a f(x) dx = 0$. Therefore, the integral is $0$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587b9",
    question: "If $\\int_a^b f(x) dx = K$, what is $\\int_b^a f(x) dx$?",
    options: [
      "$-K$",
      "$K$",
      "$\\frac{1}{K}$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "By the reversal property of limits, $\\int_b^a f(x) dx = -\\int_a^b f(x) dx = -K$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587ba",
    question: "What is the value of $\\int_0^2 5 dx$?",
    options: [
      "$10$",
      "$5$",
      "$2$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_a^b c dx = c(b - a)$. Here, $\\int_0^2 5 dx = 5(2 - 0) = 10$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587bb",
    question: "Evaluate $\\int_0^1 (2x + 3) dx$.",
    options: [
      "$4$",
      "$3$",
      "$5$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_0^1 (2x + 3) dx = [x^2 + 3x]_0^1 = (1 + 3) - 0 = 4$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  },
  {
    _id: "6a98e951910bb37b0e5587bc",
    question: "What is the value of $\\int_1^4 \\sqrt{x} dx$?",
    options: [
      "$\\frac{14}{3}$",
      "$\\frac{7}{2}$",
      "$4$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "$\\int_1^4 x^{1/2} dx = \\left[\\frac{2}{3}x^{3/2}\\right]_1^4 = \\frac{2}{3}(4^{3/2} - 1^{3/2}) = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$.",
    type: "single_choice",
    marks: 4,
    negativeMarks: 1,
    subtopic: "Properties of definite integrals",
    difficulty: "easy"
  }
];

module.exports = { repairedGenuineIntegrals };
