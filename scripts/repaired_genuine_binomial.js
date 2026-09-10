// Repaired genuine questions from Question Bank with incorrect answer keys, bad options, or formatting errors
module.exports = {
  "6a98e7ac910bb37b0e558654": {
    question: "Find the 5th term in the expansion of $(a+b)^8$",
    options: [
      "$^8C_4 a^4 b^4$",
      "$^8C_5 a^3 b^5$",
      "$^8C_3 a^5 b^3$",
      "$^8C_4 a^5 b^3$"
    ],
    correctAnswer: 0,
    explanation: "In the expansion of $(a+b)^8$, the general term is $T_{r+1} = {^8C_r} a^{8-r} b^r$. For the 5th term, $r+1 = 5 \\implies r = 4$. Thus, $T_5 = {^8C_4} a^{8-4} b^4 = {^8C_4} a^4 b^4$."
  },
  "6a98fb39b89acd4c6047d4ff": {
    question: "Find the coefficient of $x^5$ in the expansion of $(2x - 3)^7$",
    options: [
      "$6048$",
      "$-6048$",
      "$15120$",
      "$-15120$"
    ],
    correctAnswer: 0,
    explanation: "The general term in the expansion of $(2x - 3)^7$ is $T_{r+1} = \\binom{7}{r} (2x)^{7-r} (-3)^r$. We require the term containing $x^5$, so $7-r=5 \\implies r=2$. Therefore, $T_3 = \\binom{7}{2} (2x)^5 (-3)^2 = 21 \\times 32 x^5 \\times 9 = 6048 x^5$. Thus, the coefficient of $x^5$ is $6048$."
  },
  "6a98e7ff910bb37b0e558667": {
    question: "Find the coefficient of $x^5$ in the expansion of $(2x - 3)^8$",
    options: [
      "$-48384$",
      "$48384$",
      "$-108864$",
      "$108864$"
    ],
    correctAnswer: 0,
    explanation: "The general term in $(2x - 3)^8$ is $T_{r+1} = \\binom{8}{r} (2x)^{8-r} (-3)^r$. For $x^5$, we have $8-r=5 \\implies r=3$. Thus, the term is $\\binom{8}{3} (2x)^5 (-3)^3 = 56 \\times 32 x^5 \\times (-27) = -48384 x^5$. The coefficient is $-48384$."
  },
  "6a98e7b8910bb37b0e558660": {
    question: "Find the middle term in the expansion of $(2x - \\frac{1}{x})^{10}$",
    options: [
      "$-8064$",
      "$8064$",
      "$-4032$",
      "$4032$"
    ],
    correctAnswer: 0,
    explanation: "The expansion of $(2x - \\frac{1}{x})^{10}$ contains $10+1=11$ terms. The middle term is the $\\frac{10}{2}+1 = 6^{\\text{th}}$ term ($r=5$). $$T_6 = \\binom{10}{5} (2x)^5 \\left(-\\frac{1}{x}\\right)^5 = 252 \\times 32 x^5 \\times \\left(-\\frac{1}{x^5}\\right) = -8064$$."
  },
  "6a98e7b8910bb37b0e558663": {
    question: "One of the middle terms in the expansion of $(x - \\frac{1}{x})^{9}$ is:",
    options: [
      "$126x$",
      "$-126x$",
      "$126$",
      "$-126$"
    ],
    correctAnswer: 0,
    explanation: "In the expansion of $(x - \\frac{1}{x})^9$, there are $9+1=10$ terms, so the middle terms are the $5^{\\text{th}}$ and $6^{\\text{th}}$ terms ($r=4$ and $r=5$). For $r=4$: $$T_5 = \\binom{9}{4} x^{9-4} \\left(-\\frac{1}{x}\\right)^4 = 126 x^5 \\times \\frac{1}{x^4} = 126x$$. For $r=5$: $$T_6 = \\binom{9}{5} x^{9-5} \\left(-\\frac{1}{x}\\right)^5 = 126 x^4 \\times \\left(-\\frac{1}{x^5}\\right) = -\\frac{126}{x}$$. Hence, one of the middle terms is $126x$."
  },
  "6a98e7b8910bb37b0e558664": {
    question: "One of the middle terms in the expansion of $(x^3 - 2y)^7$ is:",
    options: [
      "$560x^9y^4$",
      "$280x^9y^4$",
      "$-560x^{12}y^3$",
      "$420x^9y^4$"
    ],
    correctAnswer: 0,
    explanation: "Since the index $n=7$ is odd, there are $8$ terms, giving two middle terms: the $4^{\\text{th}}$ ($r=3$) and $5^{\\text{th}}$ ($r=4$) terms. For $r=4$: $$T_5 = \\binom{7}{4} (x^3)^{7-4} (-2y)^4 = 35 (x^3)^3 (16 y^4) = 560 x^9 y^4$$. For $r=3$: $$T_4 = \\binom{7}{3} (x^3)^{4} (-2y)^3 = 35 x^{12} (-8y^3) = -280 x^{12} y^3$$. Therefore, $560x^9y^4$ is one of the middle terms."
  },
  "6a98e807910bb37b0e558671": {
    question: "What is the value of ${^nC_r} + {^nC_{r+1}}$?",
    options: [
      "${^{n+1}C_r}$",
      "${^{n+1}C_{r+1}}$",
      "${^nC_{r+2}}$",
      "${^{n+2}C_{r+1}}$"
    ],
    correctAnswer: 1,
    explanation: "By Pascal's identity, ${^nC_r} + {^nC_{r+1}} = {^{n+1}C_{r+1}}$."
  }
};
