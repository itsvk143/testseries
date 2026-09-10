// scripts/data_jee_itf_subtopic5.js
// Subtopic 5: Equations involving inverse trig functions
// 30 Authentic JEE Mains standard questions: 10 MCQs, 10 AR, 10 NUM

const SUBTOPIC = "Equations involving inverse trig functions";
const CHAPTER = "Inverse Trigonometric Functions";

const subtopic5Questions = [
  // ==========================================
  // SECTION A: 10 MULTIPLE CHOICE QUESTIONS (MCQs)
  // ==========================================
  {
    type: "MULTIPLE_CHOICE",
    question: "The number of real solutions of the equation $\\tan^{-1}\\left(\\frac{x-1}{x-2}\\right) + \\tan^{-1}\\left(\\frac{x+1}{x+2}\\right) = \\frac{\\pi}{4}$ is:",
    options: [
      "$2$",
      "$1$",
      "$0$",
      "$4$"
    ],
    correctOption: 0,
    explanation: "Taking tangent on both sides:\n$$\\tan\\left(\\tan^{-1}\\left(\\frac{x-1}{x-2}\\right) + \\tan^{-1}\\left(\\frac{x+1}{x+2}\\right)\\right) = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n$$\\frac{\\frac{x-1}{x-2} + \\frac{x+1}{x+2}}{1 - \\frac{(x-1)(x+1)}{(x-2)(x+2)}} = 1$$\n$$\\frac{(x-1)(x+2) + (x+1)(x-2)}{(x^2-4) - (x^2-1)} = 1$$\n$$\\frac{(x^2+x-2) + (x^2-x-2)}{-3} = 1 \\implies \\frac{2x^2 - 4}{-3} = 1$$\n$$2x^2 - 4 = -3 \\implies 2x^2 = 1 \\implies x^2 = \\frac{1}{2} \\implies x = \\pm \\frac{1}{\\sqrt{2}}$$\nFor both $x = \\frac{1}{\\sqrt{2}}$ and $x = -\\frac{1}{\\sqrt{2}}$, we verify:\nProduct of arguments: $\\frac{x^2-1}{x^2-4} = \\frac{1/2 - 1}{1/2 - 4} = \\frac{-1/2}{-7/2} = \\frac{1}{7} < 1$.\nSince the product is $< 1$, the principal formula without $\\pm \\pi$ holds.\nBoth solutions are valid. Hence there are $2$ real solutions.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The real value of $x$ satisfying the equation $\\tan(\\cos^{-1} x) = \\sin\\left(\\cot^{-1}\\left(\\frac{1}{2}\\right)\\right)$ is:",
    options: [
      "$\\frac{\\sqrt{5}}{3}$",
      "$\\frac{2}{\\sqrt{5}}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{\\sqrt{5}}$"
    ],
    correctOption: 0,
    explanation: "Let $\\cot^{-1}(1/2) = \\theta$. Then $\\cot\\theta = \\frac{1}{2} > 0$, so $\\theta \\in (0, \\pi/2)$.\nThen $\\sin\\theta = \\frac{1}{\\sqrt{1 + \\cot^2\\theta}} = \\frac{1}{\\sqrt{1 + 1/4}} = \\frac{2}{\\sqrt{5}}$.\nThus the RHS is $\\frac{2}{\\sqrt{5}}$.\nFor the LHS, $\\tan(\\cos^{-1} x)$:\nLet $\\cos^{-1} x = \\alpha$, where $x > 0$ since RHS is positive. Then $\\cos\\alpha = x$, so $\\tan\\alpha = \\frac{\\sqrt{1-x^2}}{x}$.\nEquating LHS and RHS:\n$$\\frac{\\sqrt{1-x^2}}{x} = \\frac{2}{\\sqrt{5}}$$\nSquaring both sides:\n$$\\frac{1-x^2}{x^2} = \\frac{4}{5} \\implies 5(1-x^2) = 4x^2 \\implies 9x^2 = 5 \\implies x^2 = \\frac{5}{9}$$\nSince $x > 0$, we get $x = \\frac{\\sqrt{5}}{3}$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The set of all solutions of the inequality $\\sin^{-1} x > \\cos^{-1} x$ is:",
    options: [
      "$\\left(\\frac{1}{\\sqrt{2}}, 1\\right]$",
      "$\\left[\\frac{1}{\\sqrt{2}}, 1\\right]$",
      "$\\left(0, \\frac{1}{\\sqrt{2}}\\right)$",
      "$[-1, 1]$"
    ],
    correctOption: 0,
    explanation: "Both functions are defined for $x \\in [-1, 1]$.\nSubstitute $\\cos^{-1} x = \\frac{\\pi}{2} - \\sin^{-1} x$:\n$$\\sin^{-1} x > \\frac{\\pi}{2} - \\sin^{-1} x \\implies 2\\sin^{-1} x > \\frac{\\pi}{2} \\implies \\sin^{-1} x > \\frac{\\pi}{4}$$\nSince $\\sin x$ is strictly increasing on $[-\\pi/2, \\pi/2]$:\n$$x > \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$$\nRestricting to the domain $[-1, 1]$, we get $x \\in \\left(\\frac{1}{\\sqrt{2}}, 1\\right]$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $\\sin^{-1}(1-x) - 2\\sin^{-1} x = \\frac{\\pi}{2}$, then $x$ is equal to:",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$0, \\frac{1}{2}$",
      "$-1$"
    ],
    correctOption: 0,
    explanation: "Given $\\sin^{-1}(1-x) = \\frac{\\pi}{2} + 2\\sin^{-1} x$.\nTaking sine of both sides:\n$$1 - x = \\sin\\left(\\frac{\\pi}{2} + 2\\sin^{-1} x\\right) = \\cos(2\\sin^{-1} x)$$\nUsing $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$, where $\\theta = \\sin^{-1} x$ (so $\\sin\\theta = x$):\n$$1 - x = 1 - 2x^2 \\implies 2x^2 - x = 0 \\implies x(2x - 1) = 0$$\nThis gives possible solutions $x = 0$ or $x = 1/2$.\nChecking $x = 0$ in the original equation:\n$$\\sin^{-1}(1) - 2\\sin^{-1}(0) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2} \\quad \\text{(Satisfies)}$$\nChecking $x = 1/2$:\n$$\\sin^{-1}(1/2) - 2\\sin^{-1}(1/2) = -\\sin^{-1}(1/2) = -\\frac{\\pi}{6} \\ne \\frac{\\pi}{2} \\quad \\text{(Does NOT satisfy)}$$\nThus, the only valid solution is $x = 0$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The number of real solutions of the equation $\\cos^{-1} x + \\cos^{-1}(2x) = \\pi$ is:",
    options: [
      "$1$",
      "$2$",
      "$0$",
      "Infinitely many"
    ],
    correctOption: 0,
    explanation: "The domain of $x$ requires $x \\in [-1, 1]$ and $2x \\in [-1, 1]$, so $x \\in [-1/2, 1/2]$.\nRearranging:\n$$\\cos^{-1}(2x) = \\pi - \\cos^{-1} x = \\cos^{-1}(-x)$$\nTaking cosine of both sides:\n$$2x = -x \\implies 3x = 0 \\implies x = 0$$\nCheck $x = 0$ in the original equation:\n$$\\cos^{-1}(0) + \\cos^{-1}(0) = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi$$\nThis holds! Thus there is exactly $1$ real solution ($x = 0$).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$, then the real solution is:",
    options: [
      "$\\frac{1}{6}$",
      "$-\\frac{1}{6}$",
      "$-1$",
      "$\\frac{1}{3}$"
    ],
    correctOption: 0,
    explanation: "Taking tangent of both sides:\n$$\\frac{2x + 3x}{1 - (2x)(3x)} = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n$$\\frac{5x}{1 - 6x^2} = 1 \\implies 5x = 1 - 6x^2 \\implies 6x^2 + 5x - 1 = 0$$\n$$(6x - 1)(x + 1) = 0 \\implies x = \\frac{1}{6} \\text{ or } x = -1$$\nCheck $x = -1$:\n$2x = -2 < 0$ and $3x = -3 < 0$, so $\\tan^{-1}(-2) + \\tan^{-1}(-3) < 0$, which cannot equal $\\frac{\\pi}{4} > 0$. Thus $x = -1$ is extraneous.\nCheck $x = 1/6$:\n$2x = 1/3 > 0$, $3x = 1/2 > 0$, product is $(1/3)(1/2) = 1/6 < 1$.\nThen $\\tan^{-1}(1/3) + \\tan^{-1}(1/2) = \\tan^{-1}\\left(\\frac{1/3 + 1/2}{1 - 1/6}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$.\nThus, $x = \\frac{1}{6}$ is the unique valid real solution.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The sum of all values of $x$ satisfying the equation $\\sin^{-1}\\left(\\frac{5}{x}\\right) + \\sin^{-1}\\left(\\frac{12}{x}\\right) = \\frac{\\pi}{2}$ is:",
    options: [
      "$13$",
      "$0$",
      "$-13$",
      "$25$"
    ],
    correctOption: 0,
    explanation: "Given $\\sin^{-1}(5/x) + \\sin^{-1}(12/x) = \\frac{\\pi}{2}$.\nRewrite as:\n$$\\sin^{-1}\\left(\\frac{5}{x}\\right) = \\frac{\\pi}{2} - \\sin^{-1}\\left(\\frac{12}{x}\\right) = \\cos^{-1}\\left(\\frac{12}{x}\\right)$$\nTaking sine on both sides:\n$$\\frac{5}{x} = \\sin\\left(\\cos^{-1}\\left(\\frac{12}{x}\\right)\\right) = \\sqrt{1 - \\left(\\frac{12}{x}\\right)^2}$$\nSquaring both sides (noting $x > 0$ for positive square root):\n$$\\frac{25}{x^2} = 1 - \\frac{144}{x^2} \\implies \\frac{169}{x^2} = 1 \\implies x^2 = 169$$\nSince $5/x > 0$, $x = 13$.\nFor $x = -13$, the LHS would be negative ($-\\pi/2$), which does not equal $\\pi/2$.\nThus the only solution is $x = 13$, and the sum of all values is $13$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The number of real solutions of the equation $\\sin^{-1} x = 2\\tan^{-1} x$ is:",
    options: [
      "$3$",
      "$1$",
      "$2$",
      "$0$"
    ],
    correctOption: 0,
    explanation: "Domain requires $x \\in [-1, 1]$.\nRecall that for $x \\in [-1, 1]$, $2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right)$.\nSo the equation becomes:\n$$\\sin^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right)$$\nTaking sine on both sides:\n$$x = \\frac{2x}{1+x^2} \\implies x\\left(1 - \\frac{2}{1+x^2}\\right) = 0$$\n$$x\\left(\\frac{x^2 - 1}{1+x^2}\\right) = 0 \\implies x(x-1)(x+1) = 0$$\nThis gives $x = -1, 0, 1$.\nAll three lie in $[-1, 1]$.\nCheck:\n- $x = 0$: $\\sin^{-1}(0) = 0 = 2\\tan^{-1}(0)$.\n- $x = 1$: $\\sin^{-1}(1) = \\pi/2$, $2\\tan^{-1}(1) = 2(\\pi/4) = \\pi/2$.\n- $x = -1$: $\\sin^{-1}(-1) = -\\pi/2$, $2\\tan^{-1}(-1) = 2(-\\pi/4) = -\\pi/2$.\nAll $3$ are valid solutions. Hence there are $3$ real solutions.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "If $(\\sin^{-1} x)^2 - 3\\sin^{-1} x + 2 \\le 0$, then $x$ belongs to the interval:",
    options: [
      "$[\\sin 1, 1]$",
      "$[-1, \\sin 1]$",
      "$[\\sin 1, \\sin 2]$",
      "$[0, 1]$"
    ],
    correctOption: 0,
    explanation: "Let $t = \\sin^{-1} x$. The inequality is:\n$$t^2 - 3t + 2 \\le 0 \\implies (t-1)(t-2) \\le 0 \\implies 1 \\le t \\le 2$$\nSo $1 \\le \\sin^{-1} x \\le 2$.\nHowever, the range of the principal branch of $\\sin^{-1} x$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.\nSince $\\frac{\\pi}{2} \\approx 1.5708$, $\\sin^{-1} x$ cannot exceed $\\frac{\\pi}{2}$.\nThus, the valid interval for $t$ is:\n$$1 \\le \\sin^{-1} x \\le \\frac{\\pi}{2}$$\nTaking the sine (which is strictly increasing on $[1, \\pi/2]$):\n$$\\sin 1 \\le x \\le \\sin(\\pi/2) = 1$$\nTherefore, $x \\in [\\sin 1, 1]$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "MULTIPLE_CHOICE",
    question: "The value of $x$ satisfying the equation $\\tan^{-1}(x+1) + \\tan^{-1}(x-1) = \\tan^{-1}\\left(\\frac{8}{31}\\right)$ is:",
    options: [
      "$\\frac{1}{4}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$4$"
    ],
    correctOption: 0,
    explanation: "Taking tangent on both sides:\n$$\\tan(\\tan^{-1}(x+1) + \\tan^{-1}(x-1)) = \\frac{8}{31}$$\n$$\\frac{(x+1) + (x-1)}{1 - (x+1)(x-1)} = \\frac{8}{31} \\implies \\frac{2x}{1 - (x^2-1)} = \\frac{8}{31}$$\n$$\\frac{2x}{2 - x^2} = \\frac{8}{31} \\implies \\frac{x}{2 - x^2} = \\frac{4}{31}$$\n$$31x = 4(2 - x^2) = 8 - 4x^2 \\implies 4x^2 + 31x - 8 = 0$$\n$$(4x - 1)(x + 8) = 0 \\implies x = \\frac{1}{4} \\text{ or } x = -8$$\nIf $x = -8$:\n$x+1 = -7 < 0, x-1 = -9 < 0$. The sum of two negative angles is negative, but $\\tan^{-1}(8/31) > 0$. Thus $x = -8$ is extraneous.\nFor $x = 1/4$:\n$x+1 = 5/4, x-1 = -3/4$. Product is $(5/4)(-3/4) = -15/16 > -1$.\nSo the formula holds directly. Thus $x = \\frac{1}{4}$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },

  // ==========================================
  // SECTION B: 10 ASSERTION-REASON QUESTIONS (AR)
  // ==========================================
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\sin^{-1} x = 2\\sin^{-1} a$ has a solution for $x$ if and only if $a \\in \\left[-\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right]$.\nReason (R): For the equation $\\sin^{-1} x = \\theta$ to have a real solution $x$, $\\theta$ must belong to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Reason (R): The range of the principal branch of $\\sin^{-1} x$ is $[-\\pi/2, \\pi/2]$. Thus $\\sin^{-1} x = \\theta$ has a solution if and only if $\\theta \\in [-\\pi/2, \\pi/2]$. So (R) is true.\nAssertion (A): Here $\\theta = 2\\sin^{-1} a$.\n$$-\\frac{\\pi}{2} \\le 2\\sin^{-1} a \\le \\frac{\\pi}{2} \\implies -\\frac{\\pi}{4} \\le \\sin^{-1} a \\le \\frac{\\pi}{4}$$\nTaking sine on all parts:\n$$-\\frac{1}{\\sqrt{2}} \\le a \\le \\frac{1}{\\sqrt{2}}$$\nThus (A) is true, and (R) is the exact justification for (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\cos^{-1} x - \\sin^{-1} x = 0$ has a unique solution $x = \\frac{1}{\\sqrt{2}}$.\nReason (R): The graphs of $y = \\cos^{-1} x$ and $y = \\sin^{-1} x$ intersect at exactly one point in $[-1, 1]$ where $x = \\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "We have $\\cos^{-1} x - \\sin^{-1} x = 0 \\iff \\cos^{-1} x = \\sin^{-1} x$.\nSubstitute $\\cos^{-1} x = \\frac{\\pi}{2} - \\sin^{-1} x$:\n$$\\frac{\\pi}{2} - \\sin^{-1} x = \\sin^{-1} x \\implies 2\\sin^{-1} x = \\frac{\\pi}{2} \\implies \\sin^{-1} x = \\frac{\\pi}{4} \\implies x = \\frac{1}{\\sqrt{2}}$$\nSince $\\sin^{-1} x$ is strictly increasing and $\\cos^{-1} x$ is strictly decreasing on $[-1, 1]$, their difference is strictly decreasing and can cross zero at most once.\nBoth (A) and (R) are true, and (R) provides the correct graphical and algebraic explanation.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$ has two real roots $x = \\frac{1}{6}$ and $x = -1$.\nReason (R): Taking tangent on both sides of an inverse trigonometric equation may introduce extraneous solutions that violate the branch conditions.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    explanation: "For Assertion (A): As shown earlier, $x = -1$ leads to negative angles whose sum is in $(-\\pi, -\\pi/2)$, which cannot equal $\\pi/4$. Thus $x = -1$ is an extraneous root and NOT a valid solution. Hence Assertion (A) is false.\nReason (R) correctly explains that taking tangent on both sides creates an algebraic equation that can introduce extraneous roots due to loss of branch information. Thus (R) is true.\nSo (A) is false but (R) is true.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The number of solutions of the equation $\\sin^{-1}(x^2 - 2x + 3) = \\frac{\\pi}{2}$ is $1$.\nReason (R): The quadratic $x^2 - 2x + 3 = (x-1)^2 + 2 \\ge 2$ for all real $x$, and the domain of $\\sin^{-1} t$ is $[-1, 1]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    explanation: "Let us check Reason (R): $x^2 - 2x + 3 = (x-1)^2 + 2 \\ge 2 > 1$ for all real $x$. Since the domain of $\\sin^{-1} t$ is $[-1, 1]$, the expression $x^2-2x+3$ can never lie in $[-1, 1]$.\nTherefore, the equation $\\sin^{-1}(x^2 - 2x + 3) = \\frac{\\pi}{2}$ has ZERO real solutions.\nThus Assertion (A) is FALSE, and Reason (R) is TRUE.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The inequality $\\tan^{-1} x > \\cot^{-1} x$ holds for all $x > 1$.\nReason (R): $\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$ for all $x \\in \\mathbb{R}$, and $\\tan^{-1} x$ is a strictly increasing function on $\\mathbb{R}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Substitute $\\cot^{-1} x = \\frac{\\pi}{2} - \\tan^{-1} x$ into the inequality:\n$$\\tan^{-1} x > \\frac{\\pi}{2} - \\tan^{-1} x \\implies 2\\tan^{-1} x > \\frac{\\pi}{2} \\implies \\tan^{-1} x > \\frac{\\pi}{4}$$\nSince $\\tan^{-1} x$ is strictly increasing on $\\mathbb{R}$:\n$$\\tan^{-1} x > \\frac{\\pi}{4} \\iff x > \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\nThus Assertion (A) is true, and Reason (R) is the correct mathematical basis for the deduction.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\sin^{-1} x + \\cos^{-1}(x^2) = \\frac{\\pi}{2}$ has exactly two real solutions.\nReason (R): $\\cos^{-1}(x^2) = \\frac{\\pi}{2} - \\sin^{-1} x = \\cos^{-1} x$, which implies $x^2 = x$ for $x \\in [0, 1]$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Using the identity $\\frac{\\pi}{2} - \\sin^{-1} x = \\cos^{-1} x$ for $x \\in [-1, 1]$:\n$$\\cos^{-1}(x^2) = \\cos^{-1} x$$\nSince $\\cos^{-1}$ is a one-to-one function on $[-1, 1]$, this implies:\n$$x^2 = x \\implies x(x-1) = 0 \\implies x = 0 \\text{ or } x = 1$$\nBoth $0$ and $1$ belong to $[-1, 1]$.\nCheck:\n- For $x=0$: $\\sin^{-1}(0) + \\cos^{-1}(0) = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}$.\n- For $x=1$: $\\sin^{-1}(1) + \\cos^{-1}(1) = \\frac{\\pi}{2} + 0 = \\frac{\\pi}{2}$.\nThus there are exactly two solutions, $x = 0$ and $x = 1$.\nBoth (A) and (R) are true, and (R) is the correct explanation.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $(\\sin^{-1} x)^3 + (\\cos^{-1} x)^3 = \\frac{7\\pi^3}{8}$ has no real solution.\nReason (R): For any $x \\in [-1, 1]$, the maximum value of $(\\sin^{-1} x)^3 + (\\cos^{-1} x)^3$ is $\\frac{7\\pi^3}{8}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 3,
    explanation: "Let $u = \\sin^{-1} x$ and $v = \\cos^{-1} x$. Then $u + v = \\frac{\\pi}{2}$, with $u \\in [-\\pi/2, \\pi/2]$ and $v \\in [0, \\pi]$.\n$$u^3 + v^3 = (u+v)(u^2 - uv + v^2) = \\frac{\\pi}{2}\\left((u+v)^2 - 3uv\\right) = \\frac{\\pi}{2}\\left(\\frac{\\pi^2}{4} - 3u\\left(\\frac{\\pi}{2}-u\\right)\\right)$$\n$$= \\frac{\\pi}{2}\\left(3u^2 - \\frac{3\\pi}{2}u + \\frac{\\pi^2}{4}\\right)$$\nThis is a quadratic in $u$. The maximum occurs at the endpoint $u = -\\pi/2$ (where $x = -1$):\nAt $u = -\\pi/2$, $v = \\pi$:\n$$u^3 + v^3 = \\left(-\\frac{\\pi}{2}\\right)^3 + \\pi^3 = -\\frac{\\pi^3}{8} + \\pi^3 = \\frac{7\\pi^3}{8}$$\nSo at $x = -1$, the value $\\frac{7\\pi^3}{8}$ IS attained!\nTherefore, the equation DOES have a real solution ($x = -1$), so Assertion (A) is FALSE.\nReason (R) correctly identifies that the maximum value is $\\frac{7\\pi^3}{8}$, so (R) is TRUE.\nThus, (A) is false but (R) is true.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "HARD"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\sec^{-1}\\left(\\frac{x}{2}\\right) - \\sec^{-1} x = \\sec^{-1} 2$ has a unique real solution $x = 2\\sqrt{3}$.\nReason (R): For $x \\ge 2$, converting to $\\cos^{-1}$ gives $\\cos^{-1}\\left(\\frac{2}{x}\\right) - \\cos^{-1}\\left(\\frac{1}{x}\\right) = \\cos^{-1}\\left(\\frac{1}{2}\\right)$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    correctOption: 3,
    explanation: "Let us examine Reason (R):\nFor $x \\ge 2$, $\\sec^{-1}(x/2) = \\cos^{-1}(2/x)$ and $\\sec^{-1}(x) = \\cos^{-1}(1/x)$ and $\\sec^{-1}(2) = \\cos^{-1}(1/2)$.\nSince $x/2 < x$ for $x > 0$, we have $2/x > 1/x$, so $\\cos^{-1}(2/x) < \\cos^{-1}(1/x)$.\nHence the LHS $\\cos^{-1}(2/x) - \\cos^{-1}(1/x) < 0$!\nHowever, the RHS is $\\cos^{-1}(1/2) = \\frac{\\pi}{3} > 0$.\nA negative quantity cannot equal a positive quantity!\nFor $x \\le -2$, similar domain considerations show LHS cannot equal $\\pi/3$.\nThus there are NO real solutions at all.\nHence Assertion (A) is false and Reason (R)'s premise leads to no solution. Both (A) and (R) are false.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "HARD"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The number of real roots of the equation $\\tan^{-1}\\sqrt{x(x+1)} + \\sin^{-1}\\sqrt{x^2+x+1} = \\frac{\\pi}{2}$ is $2$.\nReason (R): For the terms to be defined, $x(x+1) \\ge 0$ and $x^2+x+1 \\le 1$, which forces $x^2+x = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "Domain considerations:\n1. For $\\tan^{-1}\\sqrt{x(x+1)}$ to be defined in real numbers, $x(x+1) \\ge 0$, so $x^2 + x \\ge 0$.\n2. For $\\sin^{-1}\\sqrt{x^2+x+1}$ to be defined, the argument must lie in $[0, 1]$, so $0 \\le x^2 + x + 1 \\le 1$, which gives $x^2 + x \\le 0$.\nCombining both inequalities:\n$$x^2 + x \\ge 0 \\quad \\text{and} \\quad x^2 + x \\le 0 \\implies x^2 + x = 0$$\nThis gives $x(x+1) = 0 \\implies x = 0$ or $x = -1$.\nSubstitute $x^2+x = 0$ into the equation:\n$$\\tan^{-1}(0) + \\sin^{-1}(\\sqrt{1}) = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}$$\nBoth $x = 0$ and $x = -1$ satisfy the equation.\nThus there are exactly $2$ real roots, and (R) provides the exact mathematical reasoning for (A).",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "MEDIUM"
  },
  {
    type: "ASSERTION_REASON",
    question: "Given below are two statements:\nAssertion (A): The equation $\\sin^{-1} x + \\sin^{-1}(2x) = \\frac{\\pi}{2}$ has no negative real solution.\nReason (R): For $x < 0$, both $\\sin^{-1} x < 0$ and $\\sin^{-1}(2x) < 0$, so their sum is strictly negative and cannot equal $\\frac{\\pi}{2}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    explanation: "For any $x < 0$, $\\sin^{-1} x \\in [-\\pi/2, 0)$ and $\\sin^{-1}(2x) \\in [-\\pi/2, 0)$.\nTheir sum must be strictly negative:\n$$\\sin^{-1} x + \\sin^{-1}(2x) < 0$$\nSince $\\frac{\\pi}{2} > 0$, no negative number can be a solution.\nThus Assertion (A) is true, and Reason (R) is the correct explanation.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1,
    difficulty: "EASY"
  },

  // ==========================================
  // SECTION C: 10 NUMERICAL QUESTIONS (NUM)
  // ==========================================
  {
    type: "NUMERICAL",
    question: "If $x$ satisfies $\\sin^{-1}\\left(\\frac{x}{5}\\right) + \\csc^{-1}\\left(\\frac{5}{4}\\right) = \\frac{\\pi}{2}$, then the value of $x$ is:",
    correctAnswer: 3,
    explanation: "Note that $\\csc^{-1}(5/4) = \\sin^{-1}(4/5)$.\nSo the equation is:\n$$\\sin^{-1}\\left(\\frac{x}{5}\\right) + \\sin^{-1}\\left(\\frac{4}{5}\\right) = \\frac{\\pi}{2}$$\n$$\\sin^{-1}\\left(\\frac{x}{5}\\right) = \\frac{\\pi}{2} - \\sin^{-1}\\left(\\frac{4}{5}\\right) = \\cos^{-1}\\left(\\frac{4}{5}\\right)$$\nNow $\\cos^{-1}(4/5) = \\sin^{-1}\\left(\\sqrt{1 - (4/5)^2}\\right) = \\sin^{-1}\\left(\\frac{3}{5}\\right)$.\nTherefore:\n$$\\sin^{-1}\\left(\\frac{x}{5}\\right) = \\sin^{-1}\\left(\\frac{3}{5}\\right) \\implies x = 3$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "If the equation $\\sin^{-1} x + \\sin^{-1}(2x) = \\frac{\\pi}{3}$ has a unique positive real solution $x_0$, find the value of $76x_0^2$.",
    correctAnswer: 7,
    explanation: "Rewrite as $\\sin^{-1}(2x) = \\frac{\\pi}{3} - \\sin^{-1} x$.\nTaking sine of both sides:\n$$2x = \\sin\\left(\\frac{\\pi}{3} - \\sin^{-1} x\\right) = \\sin\\frac{\\pi}{3} \\cos(\\sin^{-1} x) - \\cos\\frac{\\pi}{3} \\sin(\\sin^{-1} x)$$\n$$2x = \\frac{\\sqrt{3}}{2}\\sqrt{1-x^2} - \\frac{1}{2}x$$\n$$4x = \\sqrt{3}\\sqrt{1-x^2} - x \\implies 5x = \\sqrt{3}\\sqrt{1-x^2}$$\nSquaring both sides:\n$$25x^2 = 3(1-x^2) = 3 - 3x^2 \\implies 28x^2 = 3$$\nWait! Let's re-calculate:\nWait! If $\\sin^{-1} x + \\sin^{-1} 2x = \\pi/3$:\n$2x = \\frac{\\sqrt{3}}{2}\\sqrt{1-x^2} - \\frac{1}{2}x \\implies \\frac{5}{2}x = \\frac{\\sqrt{3}}{2}\\sqrt{1-x^2} \\implies 5x = \\sqrt{3(1-x^2)}$.\nSquaring: $25x^2 = 3 - 3x^2 \\implies 28x^2 = 3$.\nThen $28x_0^2 = 3$, not $76$.\nWait! Let us check what makes $76x_0^2$:\nIf $\\cos^{-1} x + \\cos^{-1} 2x = 2\\pi/3$ or something?\nLet us frame the question cleanly as: find the value of $28x_0^2$!",
    correctAnswer: 3,
    explanation: "Rewrite as:\n$$\\sin^{-1}(2x) = \\frac{\\pi}{3} - \\sin^{-1} x$$\nTaking sine on both sides:\n$$2x = \\sin\\left(\\frac{\\pi}{3}\\right)\\cos(\\sin^{-1} x) - \\cos\\left(\\frac{\\pi}{3}\\right)\\sin(\\sin^{-1} x)$$\n$$2x = \\frac{\\sqrt{3}}{2}\\sqrt{1-x^2} - \\frac{1}{2}x$$\nMultiply by $2$:\n$$4x = \\sqrt{3}\\sqrt{1-x^2} - x \\implies 5x = \\sqrt{3}\\sqrt{1-x^2}$$\nSquaring both sides:\n$$25x^2 = 3(1-x^2) = 3 - 3x^2$$\n$$28x^2 = 3$$\nSince $x_0 > 0$, $x_0^2 = \\frac{3}{28}$.\nTherefore, $28x_0^2 = 3$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "If the equation $\\tan^{-1}(x-1) + \\tan^{-1} x + \\tan^{-1}(x+1) = \\tan^{-1}(3x)$ has real roots, find the number of distinct real roots.",
    correctAnswer: 3,
    explanation: "Rearrange the equation:\n$$\\tan^{-1}(x-1) + \\tan^{-1}(x+1) = \\tan^{-1}(3x) - \\tan^{-1} x$$\nTaking tangent of both sides:\n$$\\frac{(x-1) + (x+1)}{1 - (x-1)(x+1)} = \\frac{3x - x}{1 + (3x)(x)}$$\n$$\\frac{2x}{1 - (x^2 - 1)} = \\frac{2x}{1 + 3x^2}$$\n$$\\frac{2x}{2 - x^2} = \\frac{2x}{1 + 3x^2}$$\n$$2x \\left[ \\frac{1}{2 - x^2} - \\frac{1}{1 + 3x^2} \\right] = 0$$\nCase 1: $2x = 0 \\implies x = 0$.\nChecking $x = 0$: $\\tan^{-1}(-1) + \\tan^{-1}(0) + \\tan^{-1}(1) = -\\pi/4 + 0 + \\pi/4 = 0 = \\tan^{-1}(0)$. (Valid!)\nCase 2: $\\frac{1}{2 - x^2} = \\frac{1}{1 + 3x^2}$:\n$$1 + 3x^2 = 2 - x^2 \\implies 4x^2 = 1 \\implies x^2 = \\frac{1}{4} \\implies x = \\pm \\frac{1}{2}$$\nCheck $x = 1/2$:\n$(x-1)(x+1) = (1/2-1)(1/2+1) = -3/4 > -1$, so formula applies without $\\pi$.\nBoth $x = 1/2$ and $x = -1/2$ are valid.\nThus there are $3$ distinct real roots: $x = 0, \\frac{1}{2}, -\\frac{1}{2}$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "If $\\cos^{-1} x + \\cos^{-1}(2x) + \\cos^{-1}(3x) = \\pi$, then $x$ satisfies the cubic equation $a x^3 + b x^2 + c x + d = 0$. If $x = 0$ is NOT a solution, find the number of real solutions to this equation.",
    correctAnswer: 1,
    explanation: "Let $f(x) = \\cos^{-1} x + \\cos^{-1}(2x) + \\cos^{-1}(3x)$.\nThe domain of $f(x)$ is defined by $3x \\in [-1, 1]$, so $x \\in [-1/3, 1/3]$.\nSince $\\cos^{-1}$ is strictly decreasing on its domain, $f(x)$ is strictly decreasing on $[-1/3, 1/3]$.\nLet us evaluate $f(x)$ at endpoints:\nAt $x = 0$: $f(0) = \\frac{\\pi}{2} + \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\frac{3\\pi}{2} > \\pi$.\nAt $x = 1/3$:\n$\\cos^{-1}(1/3) + \\cos^{-1}(2/3) + \\cos^{-1}(1) = \\cos^{-1}(1/3) + \\cos^{-1}(2/3) + 0$.\nSince $\\cos^{-1}(1/3) < \\frac{\\pi}{2}$ and $\\cos^{-1}(2/3) < \\frac{\\pi}{2}$, their sum is $< \\pi$.\nBy the Intermediate Value Theorem, since $f(x)$ is continuous and strictly decreasing on $[0, 1/3]$, there is EXACTLY ONE real solution in $(0, 1/3)$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "HARD"
  },
  {
    type: "NUMERICAL",
    question: "If $x_1$ and $x_2$ are the roots of the equation $\\tan^{-1}(x+1) + \\tan^{-1}(x-1) = \\tan^{-1}(2)$, find the value of $x_1^2 + x_2^2$.",
    correctAnswer: 2,
    explanation: "Taking tangent on both sides:\n$$\\frac{(x+1) + (x-1)}{1 - (x+1)(x-1)} = 2$$\n$$\\frac{2x}{2 - x^2} = 2 \\implies \\frac{x}{2 - x^2} = 1$$\n$$x = 2 - x^2 \\implies x^2 + x - 2 = 0$$\n$$(x+2)(x-1) = 0 \\implies x = 1 \\text{ or } x = -2$$\nCheck $x = 1$: $\\tan^{-1}(2) + \\tan^{-1}(0) = \\tan^{-1}(2)$ (Valid!)\nCheck $x = -2$: $\\tan^{-1}(-1) + \\tan^{-1}(-3) < 0$, while $\\tan^{-1}(2) > 0$. Extraneous root!\nWait! If $x = -2$ is extraneous, there is only ONE valid solution: $x_1 = 1$.\nWait! Let's modify the question so all roots of an equation are valid, or ask for $x$ itself!\nLet's ask: If $x_0$ is the real root of $\\tan^{-1}(x+1) + \\tan^{-1}(x-1) = \\tan^{-1}(2)$, find the value of $x_0$.",
    correctAnswer: 1,
    explanation: "Taking tangent on both sides:\n$$\\frac{(x+1) + (x-1)}{1 - (x^2 - 1)} = 2 \\implies \\frac{2x}{2 - x^2} = 2$$\n$$\\frac{x}{2 - x^2} = 1 \\implies x^2 + x - 2 = 0$$\n$$(x-1)(x+2) = 0 \\implies x = 1 \\text{ or } x = -2$$\nTesting $x = -2$:\n$\\tan^{-1}(-1) + \\tan^{-1}(-3)$ is the sum of two negative angles, which is negative, while $\\tan^{-1}(2) > 0$. Hence $x = -2$ is an extraneous root.\nTesting $x = 1$:\n$\\tan^{-1}(2) + \\tan^{-1}(0) = \\tan^{-1}(2)$, which is true.\nThus the unique valid real root is $x_0 = 1$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "Find the number of real solutions of the equation $\\cos(\\tan^{-1} x) = x$.",
    correctAnswer: 1,
    explanation: "For any real $x$, let $\\theta = \\tan^{-1} x \\in (-\\pi/2, \\pi/2)$.\nThen $\\cos\\theta = \\frac{1}{\\sqrt{1+x^2}}$.\nSo the equation becomes:\n$$\\frac{1}{\\sqrt{1+x^2}} = x$$\nSince the LHS is strictly positive for all real $x$, any solution must satisfy $x > 0$.\nSquaring both sides for $x > 0$:\n$$\\frac{1}{1+x^2} = x^2 \\implies x^2(1+x^2) = 1 \\implies x^4 + x^2 - 1 = 0$$\nLet $u = x^2 > 0$:\n$$u^2 + u - 1 = 0 \\implies u = \\frac{-1 + \\sqrt{5}}{2}$$\nSince $u > 0$, $x = \\sqrt{\\frac{\\sqrt{5}-1}{2}}$ is the unique positive root.\nHence, there is exactly $1$ real solution.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "MEDIUM"
  },
  {
    type: "NUMERICAL",
    question: "The number of integer values of $k$ for which the equation $\\sin^{-1} x + \\cos^{-1} x = k\\pi$ has a solution is:",
    correctAnswer: 0,
    explanation: "For all $x \\in [-1, 1]$, we have the fundamental identity:\n$$\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$$\nEquating this to $k\\pi$:\n$$\\frac{\\pi}{2} = k\\pi \\implies k = \\frac{1}{2}$$\nSince $k$ must be an integer, but $1/2$ is not an integer, there are NO integer values of $k$ that satisfy this equation.\nHence the number of integer values is $0$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "If $x = \\frac{1}{5}$, then the value of $\\cos(2\\tan^{-1} x) + \\sin(4\\tan^{-1} x)$ can be written in lowest terms as $\\frac{p}{q}$. Find the value of $q - p$ if we just evaluate $\\cos(2\\tan^{-1}(1/5))$ which is $\\frac{a}{b}$. For $\\cos(2\\tan^{-1}(1/5)) = \\frac{a}{b}$ in lowest terms, find $a + b$.",
    correctAnswer: 35,
    explanation: "Using the formula $\\cos(2\\theta) = \\frac{1-\\tan^2\\theta}{1+\\tan^2\\theta}$ with $\\tan\\theta = \\frac{1}{5}$:\n$$\\cos(2\\tan^{-1}(1/5)) = \\frac{1 - (1/5)^2}{1 + (1/5)^2} = \\frac{1 - 1/25}{1 + 1/25} = \\frac{24/25}{26/25} = \\frac{24}{26} = \\frac{12}{13}$$\nWait, here $a = 12, b = 13$, so $a+b = 25$!\nLet's re-verify: $12/13$ is in lowest terms, and $12 + 13 = 25$.\nLet's set correctAnswer to 25.",
    correctAnswer: 25,
    explanation: "Let $\\theta = \\tan^{-1}(1/5)$, so $\\tan\\theta = \\frac{1}{5}$.\nUsing the double-angle identity for cosine:\n$$\\cos(2\\theta) = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} = \\frac{1 - \\frac{1}{25}}{1 + \\frac{1}{25}} = \\frac{24}{26} = \\frac{12}{13}$$\nHere $a = 12$ and $b = 13$, with $\\gcd(12, 13) = 1$.\nTherefore, $a + b = 12 + 13 = 25$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "If $\\sin^{-1} x + \\sin^{-1} y = \\pi$ where $x, y \\in [-1, 1]$, find the value of $x^2 + y^2$.",
    correctAnswer: 2,
    explanation: "Since the maximum value of $\\sin^{-1} t$ for $t \\in [-1, 1]$ is $\\frac{\\pi}{2}$, the sum $\\sin^{-1} x + \\sin^{-1} y = \\pi$ can only be attained if:\n$$\\sin^{-1} x = \\frac{\\pi}{2} \\quad \\text{and} \\quad \\sin^{-1} y = \\frac{\\pi}{2}$$\nThis forces:\n$$x = 1 \\quad \\text{and} \\quad y = 1$$\nTherefore:\n$$x^2 + y^2 = 1^2 + 1^2 = 2$$",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  },
  {
    type: "NUMERICAL",
    question: "The number of real solutions of the equation $\\tan^{-1}(x) + \\cot^{-1}(x) + \\sin^{-1}(x) + \\cos^{-1}(x) = \\pi$ for $x \\in [-1, 1]$ is:",
    correctAnswer: 0,
    explanation: "Wait! For any $x \\in [-1, 1]$:\n$$\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$$\n$$\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$$\nSumming both identities:\n$$(\\tan^{-1} x + \\cot^{-1} x) + (\\sin^{-1} x + \\cos^{-1} x) = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi$$\nThis holds identically for EVERY $x \\in [-1, 1]$!\nSo there are infinitely many solutions, which is not a single integer for numerical response.\nLet's replace this with an equation that has a finite integer number of solutions or an evaluation!\nConsider: If $\\tan^{-1}(x) = \\cot^{-1}(x)$, find the positive solution $x$. Then $x = 1$.",
    correctAnswer: 1,
    explanation: "For $x > 0$, $\\cot^{-1} x = \\tan^{-1}(1/x)$.\nThe equation $\\tan^{-1} x = \\cot^{-1} x$ becomes:\n$$\\tan^{-1} x = \\tan^{-1}\\left(\\frac{1}{x}\\right) \\implies x = \\frac{1}{x} \\implies x^2 = 1$$\nSince $x > 0$, $x = 1$.\nAlternatively, using $\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$:\n$$2\\tan^{-1} x = \\frac{\\pi}{2} \\implies \\tan^{-1} x = \\frac{\\pi}{4} \\implies x = 1$$\nThus the positive solution is $x = 1$.",
    subtopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0,
    difficulty: "EASY"
  }
];

// Re-adjust question texts in Q2, Q5, Q8, Q10 for consistency:
subtopic5Questions[11].question = "If the equation $\\sin^{-1} x + \\sin^{-1}(2x) = \\frac{\\pi}{3}$ has a unique positive real solution $x_0$, find the value of $28x_0^2$.";
subtopic5Questions[14].question = "If $x_0$ is the real root of $\\tan^{-1}(x+1) + \\tan^{-1}(x-1) = \\tan^{-1}(2)$, find the value of $x_0$.";
subtopic5Questions[17].question = "If $\\cos(2\\tan^{-1}(1/5)) = \\frac{a}{b}$, where $a$ and $b$ are coprime positive integers, find $a + b$.";
subtopic5Questions[19].question = "Find the positive real root of the equation $\\tan^{-1} x = \\cot^{-1} x$.";

module.exports = subtopic5Questions;
