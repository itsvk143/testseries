// Subtopic 1: Logic gates (53 Questions: 7 MCQ, 20 NUMERICAL, 26 ASSERTION_REASON)
module.exports = [
  // --- MCQs (7 questions) ---
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "Which of the following combinations of gates represents an AND gate using only NAND gates?",
    options: [
      "A single NAND gate followed by an inverter (NOT gate made from NAND)",
      "Two NAND gates with their inputs tied together",
      "Three NAND gates connected such that two act as inverters feeding a third NAND gate",
      "Four NAND gates connected in a bridge configuration"
    ],
    correctAnswer: 0,
    explanation: "A NAND gate produces $\\overline{A \\cdot B}$. Inverting its output using a NOT gate (which can be formed by joining both inputs of a NAND gate) gives $\\overline{\\overline{A \\cdot B}} = A \\cdot B$, which is the AND operation. Thus, an AND gate requires 2 NAND gates.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "The Boolean expression $Y = \\overline{\\overline{A} + \\overline{B}}$ is equivalent to which logic operation?",
    options: ["$A + B$ (OR gate)", "$A \\cdot B$ (AND gate)", "$\\overline{A \\cdot B}$ (NAND gate)", "$A \\oplus B$ (XOR gate)"],
    correctAnswer: 1,
    explanation: "Using De Morgan's theorem:\n$$\\overline{\\overline{A} + \\overline{B}} = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}} = A \\cdot B$$\nThis is the standard Boolean expression for an AND gate.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "The minimum number of 2-input NAND gates required to construct an OR gate is:",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 1,
    explanation: "By De Morgan's theorem, $A + B = \\overline{\\overline{A} \\cdot \\overline{B}}$.\nTo implement this:\n1. Use one NAND gate as an inverter for input $A$ to produce $\\overline{A}$.\n2. Use a second NAND gate as an inverter for input $B$ to produce $\\overline{B}$.\n3. Feed $\\overline{A}$ and $\\overline{B}$ into a third NAND gate to produce $\\overline{\\overline{A} \\cdot \\overline{B}} = A + B$.\nHence, exactly $3$ NAND gates are required.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "For a two-input logic gate, if the output is $1$ only when both inputs are equal (i.e., $A=B=0$ or $A=B=1$), the gate is:",
    options: ["XOR gate", "XNOR gate", "NAND gate", "NOR gate"],
    correctAnswer: 1,
    explanation: "An Exclusive-NOR (XNOR) gate produces an output $Y = A \\odot B = A B + \\overline{A}\\,\\overline{B}$.\n- When $A=0, B=0$, $Y = 1$.\n- When $A=1, B=1$, $Y = 1$.\n- When $A=1, B=0$ or $A=0, B=1$, $Y = 0$.\nHence, the XNOR gate outputs $1$ when the inputs are identical.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "According to De Morgan's second theorem, the complement of a product of variables is equal to:",
    options: [
      "The product of the complements of the variables",
      "The sum of the complements of the variables",
      "The complement of the sum of the variables",
      "The dual of the sum of the variables"
    ],
    correctAnswer: 1,
    explanation: "De Morgan's second theorem states that $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$, meaning the complement of a product (NAND operation) is equal to the sum of the complements.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "If a NOR gate has inputs $A$ and $B$ where $A = 0$ and $B$ is connected to an alternating digital clock pulse of frequency $f$, the output $Y$ is:",
    options: ["Always $0$", "Always $1$", "Inverted clock pulse of frequency $f$", "Square pulse of frequency $2f$"],
    correctAnswer: 2,
    explanation: "For a NOR gate, $Y = \\overline{A + B}$. When $A = 0$:\n$$Y = \\overline{0 + B} = \\overline{B}$$\nThus, the output is simply the logical complement (inverted waveform) of input $B$, oscillating at the same frequency $f$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "MCQ",
    subtopic: "Logic gates",
    question: "The Boolean expression for the output of a logic circuit that produces $1$ if and only if an odd number of its inputs are $1$ (for two inputs) is:",
    options: ["$Y = A B + \\overline{A}\\,\\overline{B}$", "$Y = A\\,\\overline{B} + \\overline{A} B$", "$Y = \\overline{A + B}$", "$Y = \\overline{A \\cdot B}$"],
    correctAnswer: 1,
    explanation: "The XOR operation outputs $1$ when exactly one of the two inputs is $1$. The Boolean algebraic form is $Y = A \\oplus B = A\\,\\overline{B} + \\overline{A} B$.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },

  // --- NUMERICAL Questions (20 questions) ---
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "The minimum number of 2-input NAND gates required to design a 2-input XOR gate is:",
    options: [],
    correctAnswer: 4,
    explanation: "A standard 2-input XOR gate ($Y = A\\overline{B} + \\overline{A}B$) can be implemented using exactly $4$ two-input NAND gates:\n1. $G_1 = \\overline{A \\cdot B}$\n2. $G_2 = \\overline{A \\cdot G_1}$\n3. $G_3 = \\overline{B \\cdot G_1}$\n4. $G_4 = \\overline{G_2 \\cdot G_3} = A\\overline{B} + \\overline{A}B$.\nThus, the minimum number is $4$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "The minimum number of 2-input NOR gates required to design a 2-input XOR gate is:",
    options: [],
    correctAnswer: 5,
    explanation: "To implement an XOR gate using only NOR gates:\n$A \\oplus B = (A + B) \\cdot (\\overline{A} + \\overline{B}) = \\overline{\\overline{A + B} + \\overline{\\overline{A} + \\overline{B}}}$.\nThis requires $5$ NOR gates.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Hard"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NAND gates required to implement a standard 2-input OR gate.",
    options: [],
    correctAnswer: 3,
    explanation: "By De Morgan's Law, $A + B = \\overline{\\overline{A} \\cdot \\overline{B}}$.\n- Invert $A$ with $1$ NAND gate: $\\overline{A}$\n- Invert $B$ with $1$ NAND gate: $\\overline{B}$\n- Combine $\\overline{A}$ and $\\overline{B}$ with $1$ NAND gate: $\\overline{\\overline{A} \\cdot \\overline{B}} = A + B$.\nTotal number of NAND gates required is $3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NOR gates required to implement a standard 2-input AND gate.",
    options: [],
    correctAnswer: 3,
    explanation: "By De Morgan's Law, $A \\cdot B = \\overline{\\overline{A} + \\overline{B}}$.\n- Invert $A$ using $1$ NOR gate: $\\overline{A}$\n- Invert $B$ using $1$ NOR gate: $\\overline{B}$\n- Combine $\\overline{A}$ and $\\overline{B}$ using $1$ NOR gate: $\\overline{\\overline{A} + \\overline{B}} = A \\cdot B$.\nTotal number of NOR gates required is $3$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "The minimum number of 2-input NAND gates required to design an XNOR gate is:",
    options: [],
    correctAnswer: 5,
    explanation: "An XNOR gate is the complement of an XOR gate. Since an XOR gate requires $4$ NAND gates, appending one more NAND gate as an inverter gives $4 + 1 = 5$ NAND gates.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "For a digital circuit with $4$ independent binary input variables, find the total number of distinct input combinations in its complete truth table.",
    options: [],
    correctAnswer: 16,
    explanation: "For $n$ binary variables, each variable can independently take $2$ states ($0$ or $1$).\nTotal number of combinations $= 2^n = 2^4 = 16$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "In a digital logic circuit, the output is given by $Y = (A + B) \\cdot \\overline{C}$. If $A = 1, B = 0,$ and $C = 0$, find the binary output value $Y$.",
    options: [],
    correctAnswer: 1,
    explanation: "Substituting $A = 1, B = 0, C = 0$:\n$$A + B = 1 + 0 = 1$$\n$$\\overline{C} = \\overline{0} = 1$$\n$$Y = 1 \\cdot 1 = 1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "The Boolean expression of a circuit is $Y = \\overline{A \\cdot B} + C$. For inputs $A = 1, B = 1,$ and $C = 0$, find the binary value of the output $Y$.",
    options: [],
    correctAnswer: 0,
    explanation: "Substituting $A = 1, B = 1, C = 0$:\n$$A \\cdot B = 1 \\cdot 1 = 1 \\implies \\overline{A \\cdot B} = 0$$\n$$Y = 0 + 0 = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "A ring oscillator is constructed by connecting $5$ identical inverters in a closed loop. If the propagation delay of each inverter is $4\\text{ ns}$, find the period of oscillation of the generated square wave in nanoseconds.",
    options: [],
    correctAnswer: 40,
    explanation: "For a ring oscillator with $N$ inverters (where $N$ is odd), the period of oscillation is:\n$$T = 2 \\times N \\times t_{pd}$$\nHere $N = 5$ and $t_{pd} = 4\\text{ ns}$:\n$$T = 2 \\times 5 \\times 4 = 40\\text{ ns}.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Medium"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "From the set of standard logic gates {AND, OR, NOT, NAND, NOR, XOR, XNOR}, how many are universally classified as universal logic gates?",
    options: [],
    correctAnswer: 2,
    explanation: "Only the NAND gate and the NOR gate are universal gates because any basic Boolean function (AND, OR, NOT) can be implemented using only NAND gates or only NOR gates. Hence, the count is $2$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "A 3-input NAND gate has binary inputs $A = 1, B = 1,$ and $C = 0$. Find the output $Y$.",
    options: [],
    correctAnswer: 1,
    explanation: "For a 3-input NAND gate:\n$$Y = \\overline{A \\cdot B \\cdot C} = \\overline{1 \\cdot 1 \\cdot 0} = \\overline{0} = 1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "A 3-input NOR gate has binary inputs $A = 0, B = 0,$ and $C = 0$. Find the output $Y$.",
    options: [],
    correctAnswer: 1,
    explanation: "For a 3-input NOR gate:\n$$Y = \\overline{A + B + C} = \\overline{0 + 0 + 0} = \\overline{0} = 1.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "In a 2-input XOR gate, input $A = 1$ and the measured output is $Y = 0$. Find the binary value of input $B$.",
    options: [],
    correctAnswer: 1,
    explanation: "For an XOR gate, $Y = A \\oplus B$. When $A = 1$:\n$$Y = 1 \\oplus B = \\overline{B}$$\nSince $Y = 0$, we have $\\overline{B} = 0 \\implies B = 1$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "In a 2-input XNOR gate, input $A = 0$ and the output is $Y = 1$. Find the binary value of input $B$.",
    options: [],
    correctAnswer: 0,
    explanation: "For an XNOR gate, $Y = 1$ when both inputs are identical. Since $A = 0$, $B$ must also be $0$.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "For a logic circuit with output $Y = \\overline{A \\cdot \\overline{B}}$, if $A = 1$ and $B = 0$, find the binary output $Y$.",
    options: [],
    correctAnswer: 0,
    explanation: "Given $A = 1, B = 0$:\n$$\\overline{B} = 1$$\n$$A \\cdot \\overline{B} = 1 \\cdot 1 = 1$$\n$$Y = \\overline{1} = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NAND gates required to implement a NOT gate.",
    options: [],
    correctAnswer: 1,
    explanation: "By tying both inputs of a 2-input NAND gate together:\n$$Y = \\overline{A \\cdot A} = \\overline{A}$$\nThus, exactly $1$ NAND gate is required.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NAND gates required to implement an AND gate.",
    options: [],
    correctAnswer: 2,
    explanation: "First NAND gate produces $\\overline{A \\cdot B}$. Feeding this output into a second NAND gate configured as an inverter gives $\\overline{\\overline{A \\cdot B}} = A \\cdot B$. Exactly $2$ gates are required.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NOR gates required to implement an OR gate.",
    options: [],
    correctAnswer: 2,
    explanation: "First NOR gate produces $\\overline{A + B}$. Second NOR gate inverts it to produce $\\overline{\\overline{A + B}} = A + B$. Exactly $2$ gates are required.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "Find the minimum number of 2-input NOR gates required to implement a NOT gate.",
    options: [],
    correctAnswer: 1,
    explanation: "Connecting both inputs of a NOR gate together yields $Y = \\overline{A + A} = \\overline{A}$. Exactly $1$ NOR gate is required.",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },
  {
    type: "NUMERICAL",
    subtopic: "Logic gates",
    question: "For a 2-input logic circuit with $Y = A \\cdot B + \\overline{A} \\cdot \\overline{B}$, evaluate $Y$ when $A = 1$ and $B = 0$.",
    options: [],
    correctAnswer: 0,
    explanation: "Substitute $A = 1, B = 0$:\n$$A \\cdot B = 1 \\cdot 0 = 0$$\n$$\\overline{A} \\cdot \\overline{B} = 0 \\cdot 1 = 0$$\n$$Y = 0 + 0 = 0.$$",
    marks: 4,
    negativeMarks: 0,
    difficulty: "Easy"
  },

  // --- ASSERTION_REASON Questions (26 questions) ---
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): NAND gate is called a universal logic gate.\nReason (R): Any basic logic gate like AND, OR, or NOT can be constructed using only NAND gates.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "A universal gate is defined as one that can implement all Boolean operations (AND, OR, NOT) without needing any other type of gate. NAND satisfies this criterion completely. Thus, both (A) and (R) are true and (R) is the correct explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A NOR gate can be converted into a NOT gate by tying its two inputs together.\nReason (R): For a NOR gate with both inputs tied to $A$, the output is $Y = \\overline{A + A} = \\overline{A}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By Boolean idempotence, $A + A = A$. Therefore, $\\overline{A + A} = \\overline{A}$, which performs the inversion function. Both statements are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The output of an XOR gate is HIGH ($1$) when its two inputs are different.\nReason (R): The Boolean equation for a 2-input XOR gate is $Y = A\\,\\overline{B} + \\overline{A}\\,B$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "When $A \\ne B$, one input is $1$ and the other is $0$, making either $A\\overline{B} = 1$ or $\\overline{A}B = 1$, so $Y = 1$. When $A = B$, $Y = 0$. Thus both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An odd number of inverters connected in a closed ring configuration cannot achieve a stable DC output state.\nReason (R): The net feedback in a ring of an odd number of inverters is negative, causing continuous oscillation between logic levels.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "If the input to an odd-inverter chain is $0$, the output after passing through the chain is $1$, which feeds back to make the input $1$, subsequently switching the output to $0$. This produces continuous oscillation (ring oscillator). Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The output of a 2-input NAND gate is LOW ($0$) only when both inputs are HIGH ($1$).\nReason (R): A NAND gate is logically equivalent to an AND gate followed by a NOT gate.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "An AND gate outputs $1$ only when both inputs are $1$. Inverting this output via a NOT gate yields $0$ when both inputs are $1$, and $1$ for all other input combinations. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An Exclusive-NOR (XNOR) gate can be used as an equality detector for two digital bits.\nReason (R): The output of an XNOR gate is $1$ if and only if both of its inputs are equal ($A = B$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The XNOR gate outputs $1$ for $(0, 0)$ and $(1, 1)$, and $0$ otherwise. Hence, an output of $1$ indicates that the two input bits are identical, acting as a 1-bit comparator or equality detector. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): De Morgan's theorem states that $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.\nReason (R): The complement of a logical sum of two Boolean variables is equal to the logical product of their individual complements.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Assertion (A) is the mathematical expression of De Morgan's first theorem, and Reason (R) is its exact verbal definition. Both are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In digital circuits, a NOT gate cannot be constructed using only two transistors in CMOS technology.\nReason (R): A standard CMOS inverter requires one p-channel MOSFET and one n-channel MOSFET.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is false but (R) is true",
      "(A) is true but (R) is false"
    ],
    correctAnswer: 2,
    explanation: "Assertion (A) is false because a standard CMOS inverter is indeed constructed using exactly two complementary MOSFETs (one PMOS pull-up and one NMOS pull-down). Reason (R) is true. Hence (A) is false but (R) is true.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The expression $A + \\overline{A} B$ simplifies to $A + B$.\nReason (R): By the distributive law of Boolean algebra, $A + \\overline{A} B = (A + \\overline{A})(A + B)$, and $A + \\overline{A} = 1$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Using the second distributive law: $A + \\overline{A}B = (A + \\overline{A})(A + B) = 1 \\cdot (A + B) = A + B$. Both (A) and (R) are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A 2-input XOR gate can be used as a controlled inverter (programmable NOT gate).\nReason (R): When one input of an XOR gate is held at logic $1$, the output is the complement of the other input.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "For an XOR gate, $Y = A \\oplus B$. If $A = 1$, $Y = 1 \\oplus B = \\overline{B}$ (inverts $B$). If $A = 0$, $Y = 0 \\oplus B = B$ (passes $B$ unchanged). Thus, $A$ acts as a control line. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Connecting all inputs of a multi-input NAND gate together produces an inverter.\nReason (R): For an $n$-input NAND gate with all inputs connected to $A$, the output is $Y = \\overline{A \\cdot A \\cdot \\dots \\cdot A} = \\overline{A}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By Boolean idempotence of AND, $A \\cdot A \\cdots A = A$. Hence $\\overline{A \\cdots A} = \\overline{A}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Boolean identity $A \\cdot (A + B) = A$ is known as the absorption law.\nReason (R): Expanding $A \\cdot (A + B) = A \\cdot A + A \\cdot B = A + A \\cdot B = A \\cdot (1 + B) = A \\cdot 1 = A$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The derivation in (R) rigorously proves the absorption law in (A). Both are true and (R) correctly explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The propagation delay of a logic gate sets the upper limit on its operating frequency.\nReason (R): If the clock period is less than the propagation delay, the gate output cannot settle to its valid logic state before the next transition.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Propagation delay is the finite time required for the output to respond to an input transition. Operating above the frequency $1/(2 t_{pd})$ leads to signal corruption. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In positive logic convention, a higher voltage level represents logic $1$ and a lower voltage level represents logic $0$.\nReason (R): In negative logic convention, a higher voltage level represents logic $0$ and a lower voltage level represents logic $1$.",
    options: [
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Both statements correctly define the industry-standard positive logic and negative logic conventions, but (R) is the definition of negative logic rather than the physical cause/explanation of positive logic. Hence both are true but (R) is not the explanation.",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A positive logic AND gate behaves as a negative logic OR gate.\nReason (R): Replacing high voltage with logic $0$ and low voltage with logic $1$ converts the truth table of an AND gate into that of an OR gate by duality.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Under negative logic, 0 and 1 are interchanged, which transforms an AND operation ($Y = A \\cdot B$) into an OR operation ($Y = A + B$) via De Morgan duality. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Hard"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A NOR gate can be constructed using only 4 NAND gates.\nReason (R): The Boolean relation for NOR is $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$, and each inversion requires 1 NAND gate while combining them requires 2 NAND gates.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "To realize $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ with NAND gates: Gate 1 gives $\\overline{A}$, Gate 2 gives $\\overline{B}$, Gate 3 gives $\\overline{\\overline{A} \\cdot \\overline{B}} = A + B$, and Gate 4 inverts it to get $\\overline{A + B}$. Exactly 4 NAND gates are used. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For an XOR gate, $A \\oplus 0 = A$ and $A \\oplus 1 = \\overline{A}$.\nReason (R): Substituting into $A \\oplus B = A\\,\\overline{B} + \\overline{A}\\,B$ gives $A\\,\\overline{0} + \\overline{A}\\,0 = A \\cdot 1 + 0 = A$, and $A\\,\\overline{1} + \\overline{A}\\,1 = 0 + \\overline{A} = \\overline{A}$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Reason (R) shows the direct algebraic substitution proving Assertion (A). Both are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): For any Boolean variable $A$, $A \\cdot \\overline{A} = 0$.\nReason (R): If $A = 1$, then $\\overline{A} = 0$, making the product $1 \\cdot 0 = 0$; and if $A = 0$, then $\\overline{A} = 1$, making the product $0 \\cdot 1 = 0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the law of complementarity for the AND operation. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The output of an OR gate is LOW ($0$) only when all of its inputs are LOW ($0$).\nReason (R): In an OR gate, the output represents the logical sum ($Y = A + B$), which is $0$ only when every term in the sum is $0$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "By definition, an OR gate performs logical addition. If any input is 1, the sum is 1. Thus $Y = 0$ if and only if all inputs are 0. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Boolean expression $(A + B)(A + C)$ simplifies to $A + B C$.\nReason (R): Expanding $(A + B)(A + C) = A \\cdot A + A \\cdot C + B \\cdot A + B \\cdot C = A(1 + C + B) + B C = A \\cdot 1 + B C = A + B C$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "This is the second distributive law of Boolean algebra. The proof in (R) directly explains the identity in (A). Both are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Two inverters connected in series perform the identity operation $Y = A$.\nReason (R): Double inversion of any Boolean variable restores its original value (i.e., $\\overline{\\overline{A}} = A$).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "The first inverter produces $\\overline{A}$, and the second produces $\\overline{\\overline{A}} = A$. This buffer circuit restores the original signal. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): An XOR gate is associative, i.e., $(A \\oplus B) \\oplus C = A \\oplus (B \\oplus C)$.\nReason (R): The output of an $n$-input XOR gate is $1$ if and only if an odd number of inputs are $1$, regardless of grouping.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "XOR represents addition modulo 2, which is associative. The output evaluates to 1 when the sum of 1s is odd. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In a logic circuit, fan-out refers to the maximum number of digital inputs that can be reliably driven by a single gate output.\nReason (R): Exceeding the fan-out limit causes excessive current draw, degrading the output voltage levels outside valid logic ranges.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Fan-out specifies the loading capability of an output. Connecting more gates than rated draws or sources too much current, dropping the voltage below $V_{OH}$ or raising it above $V_{OL}$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Boolean function $Y = A B + A \\overline{B}$ is independent of input variable $B$.\nReason (R): Factoring gives $Y = A(B + \\overline{B}) = A \\cdot 1 = A$.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "Since $B + \\overline{B} = 1$, the expression reduces to $A$, proving that $Y$ is completely independent of $B$. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Easy"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The noise margin of a digital logic circuit determines its immunity to spurious electrical noise.\nReason (R): Noise margin is defined as the voltage difference between the guaranteed output voltage level and the minimum required input threshold voltage.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 0,
    explanation: "High noise margin ($N_{MH} = V_{OH} - V_{IH}$ and $N_{ML} = V_{IL} - V_{OL}$) ensures that noise spikes added to the signal do not cause accidental logic state flips. Both (A) and (R) are true and (R) explains (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  },
  {
    type: "ASSERTION_REASON",
    subtopic: "Logic gates",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The dual of a Boolean expression is obtained by interchanging AND and OR operators and interchanging $0$ and $1$.\nReason (R): According to the principle of duality, if a Boolean equation is valid, its dual equation is also necessarily valid.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctAnswer: 1,
    explanation: "Both statements are true: (A) states the algorithm for finding the dual, and (R) states the principle of duality itself. However, (R) does not explain how the dual is formed. Hence both are true but (R) is not the explanation of (A).",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium"
  }
];
