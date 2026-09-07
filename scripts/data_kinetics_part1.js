// Part 1: Authentic Questions for Chemical Kinetics
// Integrated rate equations (47 questions), Rate of reaction (47 questions), Arrhenius equation Part A (85 questions)

function createQ(subTopic, qText, opts, correctIdx, explanation, diff = "Medium", qType = "MCQ") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: explanation,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Chemical Kinetics",
    subTopic: subTopic,
    difficulty: diff,
    questionType: qType === "MCQ" ? "MCQ (Multiple Choice Question)" : (qType === "NUMERICAL" ? "Numerical Value Question" : "Assertion–Reasoning"),
    type: qType === "MCQ" ? "MCQ" : (qType === "NUMERICAL" ? "NUMERICAL" : "ASSERTION_REASON"),
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["NEET", "JEE Main"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: qType === "NUMERICAL" ? 0 : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
function getIntegratedRateEquationsQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Integrated rate equations (zero and first order)", text, opts, ans, exp, diff, type));
  add(
    "For a zero-order reaction $A \\rightarrow B$, the rate constant is $0.02\\text{ mol L}^{-1}\\text{ s}^{-1}$. If the initial concentration of $A$ is $1.0\\text{ M}$, what is the concentration of $A$ after $20\\text{ seconds}$?",
    ["$0.6\\text{ M}$","$0.4\\text{ M}$","$0.8\\text{ M}$","$0.2\\text{ M}$"],
    0,
    "For a zero-order reaction, $[A]_t = [A]_0 - kt$. Given $[A]_0 = 1.0\\text{ M}$, $k = 0.02\\text{ mol L}^{-1}\\text{ s}^{-1}$, and $t = 20\\text{ s}$: $[A]_{20} = 1.0 - (0.02 \\times 20) = 1.0 - 0.40 = 0.6\\text{ M}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The half-life of a first-order reaction is $15\\text{ minutes}$. What percentage of the reactant will remain unreacted after $60\\text{ minutes}$?",
    ["$6.25\\%$","$12.5\\%$","$25.0\\%$","$3.125\\%$"],
    0,
    "The number of half-lives elapsed is $n = \\frac{t}{t_{1/2}} = \\frac{60\\text{ min}}{15\\text{ min}} = 4$. The remaining fraction is $\\left(\\frac{1}{2}\\right)^n = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16} = 0.0625 = 6.25\\%$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order reaction $A \\rightarrow \\text{products}$, the time required for $99.9\\%$ completion of the reaction is related to the half-life ($t_{1/2}$) by which relation?",
    ["$t_{99.9\\%} \\approx 10 \\times t_{1/2}$","$t_{99.9\\%} \\approx 3 \\times t_{1/2}$","$t_{99.9\\%} \\approx 6 \\times t_{1/2}$","$t_{99.9\\%} \\approx 20 \\times t_{1/2}$"],
    0,
    "For a first order reaction, $t_{99.9\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 99.9}\\right) = \\frac{2.303}{k}\\log(10^3) = \\frac{3 \\times 2.303}{k}$. Since $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\times \\log 2}{k}$, $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{3}{\\log 2} = \\frac{3}{0.3010} \\approx 9.966 \\approx 10$. Thus $t_{99.9\\%} \\approx 10 \\times t_{1/2}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow \\text{Products}$, a straight line is obtained when $\\ln[A]$ is plotted against time $t$. The slope of this line is:",
    ["$-k$","$+k$","$-k/2.303$","$-kt$"],
    0,
    "The integrated rate equation for a first-order reaction is $\\ln[A]_t = \\ln[A]_0 - kt$. Comparing with $y = mx + c$, the graph of $\\ln[A]$ vs $t$ is a straight line with slope $m = -k$ and intercept $\\ln[A]_0$.",
    "Easy",
    "MCQ"
  );
  add(
    "A plot of $[A]$ versus time gives a straight line with a negative slope. The order of the reaction is:",
    ["Zero order","First order","Second order","Fractional order"],
    0,
    "For a zero-order reaction, the integrated rate equation is $[A] = [A]_0 - kt$. A plot of $[A]$ against $t$ gives a straight line with slope $-k$ and intercept $[A]_0$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order gas phase decomposition: $A(g) \\rightarrow B(g) + C(g)$, let $p_i$ be the initial pressure of $A$ and $p_t$ be the total pressure at time $t$. The integrated rate expression for the rate constant $k$ is:",
    ["$k = \\frac{2.303}{t} \\log\\left(\\frac{p_i}{2p_i - p_t}\\right)$","$k = \\frac{2.303}{t} \\log\\left(\\frac{p_i}{p_i - p_t}\\right)$","$k = \\frac{2.303}{t} \\log\\left(\\frac{2p_i}{p_i - p_t}\\right)$","$k = \\frac{2.303}{t} \\log\\left(\\frac{p_t}{2p_i - p_t}\\right)$"],
    0,
    "At $t = 0$, $p_A = p_i$, $p_B = 0$, $p_C = 0$. At time $t$, $p_A = p_i - x$, $p_B = x$, $p_C = x$. Total pressure $p_t = p_i - x + x + x = p_i + x$, so $x = p_t - p_i$. Then $p_A = p_i - (p_t - p_i) = 2p_i - p_t$. Therefore, $k = \\frac{2.303}{t}\\log\\left(\\frac{p_i}{2p_i - p_t}\\right)$.",
    "Medium",
    "MCQ"
  );
  add(
    "A zero-order reaction is $50\\%$ complete in $20\\text{ minutes}$. What is the time required for $100\\%$ completion of the reaction?",
    ["$40\\text{ minutes}$","$30\\text{ minutes}$","$50\\text{ minutes}$","$60\\text{ minutes}$"],
    0,
    "For a zero-order reaction, $t_{100\\%} = \\frac{[A]_0}{k} = 2 \\times \\frac{[A]_0}{2k} = 2 \\times t_{50\\%}$. Therefore, $t_{100\\%} = 2 \\times 20\\text{ min} = 40\\text{ minutes}$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the initial concentration of a reactant is doubled in a first-order reaction, the half-life of the reaction will:",
    ["Remain unchanged","Be doubled","Be halved","Be quadrupled"],
    0,
    "For a first-order reaction, $t_{1/2} = \\frac{0.693}{k}$, which is completely independent of the initial concentration $[A]_0$. Hence, doubling the initial concentration leaves the half-life unchanged.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow \\text{Product}$, the rate constant is $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$. The time required for the concentration to fall from $0.1\\text{ M}$ to $0.025\\text{ M}$ is:",
    ["$100\\text{ s}$","$50\\text{ s}$","$200\\text{ s}$","$150\\text{ s}$"],
    0,
    "The concentration drops from $0.1\\text{ M} \\rightarrow 0.05\\text{ M} \\rightarrow 0.025\\text{ M}$, which is exactly $2$ half-lives. Half-life $t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{1.386 \\times 10^{-2}} = 50\\text{ s}$. Total time $t = 2 \\times t_{1/2} = 2 \\times 50\\text{ s} = 100\\text{ s}$.",
    "Medium",
    "MCQ"
  );
  add(
    "A radioactive isotope has a half-life of $10\\text{ days}$. Starting with $1.0\\text{ g}$ of the isotope, how much of it will remain after $30\\text{ days}$?",
    ["$0.125\\text{ g}$","$0.250\\text{ g}$","$0.500\\text{ g}$","$0.0625\\text{ g}$"],
    0,
    "Radioactive decay is a first-order process. Number of half-lives $n = \\frac{30}{10} = 3$. Remaining amount $= [A]_0 \\left(\\frac{1}{2}\\right)^3 = 1.0 \\times \\frac{1}{8} = 0.125\\text{ g}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a zero-order reaction, what is the value of the ratio $t_{75\\%} / t_{50\\%}$?",
    ["$1.5$","$2.0$","$1.25$","$2.5$"],
    0,
    "For a zero-order reaction, $t = \\frac{[A]_0 - [A]_t}{k}$. For $50\\%$ completion, $t_{50\\%} = \\frac{0.5[A]_0}{k}$. For $75\\%$ completion, $t_{75\\%} = \\frac{0.75[A]_0}{k}$. Thus $\\frac{t_{75\\%}}{t_{50\\%}} = \\frac{0.75}{0.50} = 1.5$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a first-order reaction, what is the value of the ratio $t_{75\\%} / t_{50\\%}$?",
    ["$2.0$","$1.5$","$3.0$","$2.5$"],
    0,
    "For a first-order reaction, $t_{75\\%}$ corresponds to $2$ half-lives because the amount remaining is $25\\% = \\left(\\frac{1}{2}\\right)^2$. Thus $t_{75\\%} = 2 \\times t_{50\\%}$, so the ratio is $2.0$.",
    "Easy",
    "MCQ"
  );
  add(
    "The hydrolysis of ethyl acetate in the presence of excess water: $\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH}$ is an example of:",
    ["Pseudo-first-order reaction","Zero-order reaction","Second-order reaction","Third-order reaction"],
    0,
    "Because water is present in large excess, its concentration remains practically constant during the reaction. The rate depends only on the concentration of ethyl acetate: $\\text{Rate} = k'[\\text{CH}_3\\text{COOC}_2\\text{H}_5]$, making it a pseudo-first-order reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "In the inversion of cane sugar: $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{C}_6\\text{H}_{12}\\text{O}_6 + \\text{C}_6\\text{H}_{12}\\text{O}_6$, the kinetic order observed with respect to cane sugar alone is:",
    ["First order","Zero order","Second order","Fractional order"],
    0,
    "Since water is used as solvent in large excess, its concentration does not change noticeably. The reaction follows pseudo-first-order kinetics with order $1$ with respect to sucrose.",
    "Easy",
    "MCQ"
  );
  add(
    "The units of rate constant for a zero-order and a first-order reaction are, respectively:",
    ["$\\text{mol L}^{-1}\\text{s}^{-1}$ and $\\text{s}^{-1}$","$\\text{s}^{-1}$ and $\\text{mol L}^{-1}\\text{s}^{-1}$","$\\text{L mol}^{-1}\\text{s}^{-1}$ and $\\text{s}^{-1}$","$\\text{mol L}^{-1}\\text{s}^{-1}$ and $\\text{L mol}^{-1}\\text{s}^{-1}$"],
    0,
    "The unit of rate constant is $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$. For $n = 0$, the unit is $\\text{mol L}^{-1}\\text{s}^{-1}$. For $n = 1$, the unit is $\\text{s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order reaction $A \\rightarrow \\text{Products}$, if the initial concentration is $0.8\\text{ M}$, it takes $40\\text{ minutes}$ to fall to $0.2\\text{ M}$. What is the rate constant $k$?",
    ["$0.0347\\text{ min}^{-1}$","$0.0693\\text{ min}^{-1}$","$0.0173\\text{ min}^{-1}$","$0.0520\\text{ min}^{-1}$"],
    0,
    "Falling from $0.8\\text{ M}$ to $0.2\\text{ M}$ is a decrease by a factor of $4 = 2^2$, meaning $2$ half-lives have elapsed. $2 t_{1/2} = 40\\text{ min} \\implies t_{1/2} = 20\\text{ min}$. Therefore, $k = \\frac{0.693}{t_{1/2}} = \\frac{0.693}{20\\text{ min}} = 0.03465\\text{ min}^{-1} \\approx 0.0347\\text{ min}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a general $n$-th order reaction, the half-life $t_{1/2}$ is proportional to the initial concentration $[A]_0$ as:",
    ["$t_{1/2} \\propto [A]_0^{1-n}$","$t_{1/2} \\propto [A]_0^{n-1}$","$t_{1/2} \\propto [A]_0^n$","$t_{1/2} \\propto [A]_0^{-n}$"],
    0,
    "In general, for an $n$-th order reaction, $t_{1/2} \\propto \\frac{1}{[A]_0^{n-1}} = [A]_0^{1-n}$. For $n = 0$, $t_{1/2} \\propto [A]_0^1$; for $n = 1$, $t_{1/2} \\propto [A]_0^0 = \\text{constant}$; for $n = 2$, $t_{1/2} \\propto [A]_0^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "A first-order reaction is $20\\%$ complete in $10\\text{ minutes}$. What is the time required for $40\\%$ completion?",
    ["$22.85\\text{ minutes}$","$20.0\\text{ minutes}$","$25.4\\text{ minutes}$","$18.6\\text{ minutes}$"],
    0,
    "Using $k = \\frac{2.303}{t}\\log\\left(\\frac{100}{100 - x}\\right)$: for $20\\%$, $k = \\frac{2.303}{10}\\log\\left(\\frac{100}{80}\\right) = \\frac{2.303}{10}\\log(1.25) = \\frac{2.303}{10} \\times 0.09691 = 0.02232\\text{ min}^{-1}$. For $40\\%$, $t = \\frac{2.303}{0.02232}\\log\\left(\\frac{100}{60}\\right) = \\frac{2.303}{0.02232}\\log(1.667) = \\frac{2.303 \\times 0.2219}{0.02232} \\approx 22.85\\text{ minutes}$.",
    "Hard",
    "MCQ"
  );
  add(
    "Thermal decomposition of gaseous ammonia on a hot platinum surface at high pressure is of which order?",
    ["Zero order","First order","Second order","Half order"],
    0,
    "At high pressure, the entire metal surface is completely saturated with adsorbed ammonia molecules. Further increase in pressure does not increase the surface concentration of adsorbed species, so the rate becomes independent of ammonia pressure (zero order).",
    "Medium",
    "MCQ"
  );
  add(
    "Thermal decomposition of gaseous $\\text{HI}$ on a gold surface is an example of:",
    ["Zero-order reaction","First-order reaction","Second-order reaction","Third-order reaction"],
    0,
    "The decomposition of $\\text{HI}$ on a gold surface follows zero-order kinetics at high concentration/pressure because the active sites of the gold catalyst are saturated.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order reaction $A \\rightarrow B$, the time required for $87.5\\%$ completion ($t_{87.5\\%}$) is how many times the half-life ($t_{1/2}$)?",
    ["$3$","$4$","$2$","$5$"],
    0,
    "When $87.5\\%$ of reactant is consumed, the remaining amount is $100\\% - 87.5\\% = 12.5\\% = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$. Therefore, exactly $3$ half-lives are required, so $t_{87.5\\%} = 3 \\times t_{1/2}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The rate of a zero-order reaction $A \\rightarrow B$ is $k$. What is the rate of formation of $B$ after $t$ seconds?",
    ["$k$","$k \\times t$","$k / t$","$k [A]_0$"],
    0,
    "For a zero-order reaction, the rate is constant and equal to the rate constant $k$, regardless of time $t$ (as long as reactant remains): $\\frac{d[B]}{dt} = k[A]^0 = k$.",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, the half-life period is directly proportional to the initial concentration of the reactant.\\nReason (R): The rate of a zero-order reaction is independent of the reactant concentration.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    1,
    "Both statements are true. For a zero-order reaction, $t_{1/2} = \\frac{[A]_0}{2k}$, showing $t_{1/2} \\propto [A]_0$. Also, Rate $= k[A]^0 = k$ is independent of concentration. However, the exact mathematical factor $\\frac{[A]_0}{2k}$ comes from integrated rate law $[A]_t = [A]_0 - kt$, so (R) is not the complete explanation of (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a first-order reaction is independent of the initial concentration of the reactant.\\nReason (R): For a first-order reaction, $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true, and (R) directly explains (A). The expression $t_{1/2} = \\frac{0.693}{k}$ contains only the rate constant $k$ and no concentration term $[A]_0$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Hydrolysis of ethyl acetate in acidic medium is a pseudo-first-order reaction.\\nReason (R): Water is taken in large excess, so its concentration remains practically constant throughout the reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true, and (R) correctly explains (A). The bimolecular reaction becomes first order because $[\\text{H}_2\\text{O}]$ is so large that its change is negligible, and it is incorporated into the effective rate constant $k' = k[\\text{H}_2\\text{O}]$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A zero-order reaction can proceed to $100\\%$ completion in a finite time.\\nReason (R): A first-order reaction theoretically never reaches $100\\%$ completion.",
    ["Both (A) and (R) are true and (R) is not the correct explanation of (A)","Both (A) and (R) are true and (R) is the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both statements are correct facts. For zero order, $t_{100\\%} = \\frac{[A]_0}{k}$ is a finite time. For first order, $[A] = [A]_0 e^{-kt}$, so $[A] \\rightarrow 0$ only as $t \\rightarrow \\infty$. However, (R) describes first-order kinetics and does not explain why zero order finishes in finite time.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant for a first-order reaction is $\\text{s}^{-1}$.\\nReason (R): The rate constant of a first-order reaction is independent of the units of concentration.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since rate $= k[A]$, $k = \\frac{\\text{Rate}}{[A]} = \\frac{\\text{concentration}/\\text{time}}{\\text{concentration}} = \\frac{1}{\\text{time}}$, the concentration units cancel out completely, yielding $\\text{s}^{-1}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, $t_{75\\%} = 2 \\times t_{50\\%}$.\\nReason (R): In every successive half-life period, the concentration of the reactant drops by $50\\%$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the correct explanation. After $1$ half-life, $50\\%$ remains; after a second half-life, $50\\%$ of $50\\% = 25\\%$ remains (meaning $75\\%$ is consumed). Thus $t_{75\\%} = 2 \\times t_{50\\%}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a zero-order reaction, the rate remains constant until the reactant is completely consumed.\\nReason (R): The concentration of the reactant decreases exponentially with time in a zero-order reaction.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because $\\text{Rate} = k[A]^0 = k = \\text{constant}$. (R) is false because in a zero-order reaction, concentration decreases linearly with time ($[A] = [A]_0 - kt$), not exponentially. Exponential decay is characteristic of first-order reactions.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The decomposition of gaseous ammonia on a finely divided platinum catalyst is of zero order at very high pressure.\\nReason (R): At very high pressures, all the active sites on the metal catalyst surface are saturated with adsorbed molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the correct explanation. At high pressure, surface coverage $\\theta \\approx 1$. Since all active sites are occupied, increasing pressure cannot increase reaction rate, resulting in zero-order kinetics.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A plot of rate versus concentration for a zero-order reaction is a horizontal line parallel to the concentration axis.\\nReason (R): The rate of a zero-order reaction is given by $\\text{Rate} = k[A]^0 = k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since the rate equals constant $k$ regardless of concentration, the curve of rate vs $[A]$ is a straight horizontal line.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Radioactive disintegration reactions follow first-order kinetics.\\nReason (R): Nuclear decay depends on environmental variables such as temperature and pressure.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because all natural and artificial radioactive decays obey first-order kinetics. (R) is false because radioactive decay is a nuclear phenomenon that is entirely independent of temperature, pressure, or chemical combination.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, the graph of $\\log[A]$ versus $t$ gives a straight line with slope equal to $-k / 2.303$.\\nReason (R): The integrated first-order rate law can be written as $\\log[A] = \\log[A]_0 - \\frac{kt}{2.303}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic explanation of (A), comparing directly to $y = mx + c$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a second-order reaction $A \\rightarrow \\text{Products}$, the half-life is inversely proportional to the initial concentration of $A$.\\nReason (R): The integrated rate equation for a second-order reaction of type $2A \\rightarrow \\text{Products}$ gives $t_{1/2} = \\frac{1}{k[A]_0}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true, and (R) provides the direct mathematical justification for the inverse dependence on $[A]_0$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The time required for $99\\%$ completion of a first-order reaction is twice the time required for $90\\%$ completion.\\nReason (R): For a first-order reaction, $t_{99\\%} = \\frac{2.303}{k}\\log(100) = \\frac{2 \\times 2.303}{k}$ and $t_{90\\%} = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{k}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true, and (R) is the exact algebraic proof showing that $t_{99\\%} = 2 \\times t_{90\\%}$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a reaction $A \\rightarrow B$, the rate of disappearance of $A$ can never be negative.\\nReason (R): Rates of chemical reactions are intrinsically positive quantities representing the speed of change.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). A minus sign is placed before $-\\frac{d[A]}{dt}$ specifically to ensure that the rate of reaction is always a positive quantity, since $d[A] < 0$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Order of a reaction must always be an integer.\\nReason (R): Order is determined strictly by the stoichiometric coefficients in the balanced chemical equation.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. The order of a reaction is an experimentally determined quantity that can be zero, fractional, integer, or negative. It cannot be predicted merely from the stoichiometric coefficients of an overall balanced equation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, the slope of $\\log([A]_0 / [A])$ versus time $t$ is $k / 2.303$.\\nReason (R): The integrated equation is $\\log\\left(\\frac{[A]_0}{[A]}\\right) = \\frac{k}{2.303}t$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the equation in $y = mx$ form with slope $m = k/2.303$ and zero intercept.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): When the initial concentration of a reactant is quadrupled, the half-life remains unchanged for a first-order reaction.\\nReason (R): The half-life of a first-order reaction depends inversely on the initial concentration.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because $t_{1/2} = 0.693/k$ is completely independent of initial concentration. (R) is false because $t_{1/2}$ does not depend inversely on concentration (that is true for second-order reactions).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the reaction $2\\text{N}_2\\text{O}_5(g) \\rightarrow 4\\text{NO}_2(g) + \\text{O}_2(g)$, the rate of formation of $\\text{NO}_2$ is twice the rate of decomposition of $\\text{N}_2\\text{O}_5$.\\nReason (R): According to stoichiometry, $-\\frac{1}{2}\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = \\frac{1}{4}\\frac{d[\\text{NO}_2]}{dt}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Multiplying both sides by $4$ gives $\\frac{d[\\text{NO}_2]}{dt} = -2 \\frac{d[\\text{N}_2\\text{O}_5]}{dt}$, so the rate of formation of $\\text{NO}_2$ is twice the rate of disappearance of $\\text{N}_2\\text{O}_5$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, the time required for completion of the reaction is $t = [A]_0 / k$.\\nReason (R): At $100\\%$ completion, the final concentration of the reactant $[A]_t$ becomes zero in $[A]_t = [A]_0 - kt$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Setting $[A]_t = 0$ in $[A]_t = [A]_0 - kt$ yields $0 = [A]_0 - kt \\implies t = [A]_0 / k$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Complex reactions occur in a sequence of elementary steps.\\nReason (R): The overall rate of a complex reaction is governed by the slowest elementary step.",
    ["Both (A) and (R) are true and (R) is not the correct explanation of (A)","Both (A) and (R) are true and (R) is the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both statements are correct facts. Complex reactions occur via a series of elementary steps (mechanism). The slowest step acts as the bottleneck (rate-determining step). But the existence of multiple steps is the definition of a complex reaction, not caused by the slowest step.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The molecularity of a zero-order reaction cannot be zero.\\nReason (R): Molecularity is the number of reacting species colliding simultaneously in an elementary step and cannot be zero or fractional.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). Molecularity must be a non-zero positive integer ($1, 2, \\text{or } 3$) representing actual physical particles colliding. Zero particles cannot collide, so molecularity cannot be zero.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, equal fractions of reactant disappear in equal intervals of time.\\nReason (R): The fraction remaining after time $t$ is $[A]_t / [A]_0 = e^{-kt}$, which depends only on the time interval $t$ and rate constant $k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical explanation. The ratio $[A]_t/[A]_0 = e^{-kt}$ is independent of initial concentration, so the fractional consumption is identical for identical time intervals.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a zero-order reaction decreases as the reaction progresses.\\nReason (R): For a zero-order reaction, $t_{1/2} = [A]_0 / (2k)$ and the remaining concentration decreases continuously with time.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since half-life is directly proportional to the starting concentration, if we re-evaluate the time to halve the remaining concentration at any intermediate point, that time is smaller.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A plot of $1/[A]$ versus time for a second-order reaction of type $2A \\rightarrow \\text{products}$ gives a straight line with a positive slope.\\nReason (R): The integrated rate equation for a second-order reaction is $\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) directly explains (A). Comparing $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$ with $y = mx + c$ gives a line with positive slope $+k$ and intercept $1/[A]_0$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The value of rate constant $k$ increases with increase in temperature for both exothermic and endothermic reactions.\\nReason (R): An increase in temperature increases the kinetic energy of reactant molecules, increasing the fraction of collisions having energy $\\ge E_a$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). According to the Arrhenius equation $k = A e^{-E_a/(RT)}$, as $T$ increases, the exponent $-E_a/(RT)$ becomes less negative, so $k$ always increases regardless of whether $\\Delta H$ is positive or negative.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}
function getRateOfReactionQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Rate of reaction", text, opts, ans, exp, diff, type));
  add(
    "For the reaction $2\\text{N}_2\\text{O}_5(g) \\rightarrow 4\\text{NO}_2(g) + \\text{O}_2(g)$, the rate of formation of $\\text{NO}_2$ is $0.0072\\text{ mol L}^{-1}\\text{s}^{-1}$. What is the rate of disappearance of $\\text{N}_2\\text{O}_5$?",
    ["$0.0036\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.0072\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.0144\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.0018\\text{ mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "From stoichiometry, $-\\frac{1}{2}\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = \\frac{1}{4}\\frac{d[\\text{NO}_2]}{dt}$. Therefore, $-\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = \\frac{2}{4}\\frac{d[\\text{NO}_2]}{dt} = \\frac{1}{2} \\times 0.0072 = 0.0036\\text{ mol L}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In the Haber process: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$, if the rate of disappearance of $\\text{H}_2$ is $6.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$, what is the rate of formation of $\\text{NH}_3$?",
    ["$4.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$","$6.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$","$9.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$","$2.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "The stoichiometric relation is $-\\frac{1}{3}\\frac{d[\\text{H}_2]}{dt} = \\frac{1}{2}\\frac{d[\\text{NH}_3]}{dt}$. Thus, $\\frac{d[\\text{NH}_3]}{dt} = \\frac{2}{3} \\times \\left(-\\frac{d[\\text{H}_2]}{dt}\\right) = \\frac{2}{3} \\times 6.0 \\times 10^{-4} = 4.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $2A + 3B \\rightarrow 4C$, the rate of reaction in terms of disappearance of $A$ and appearance of $C$ is correctly represented as:",
    ["$-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[C]}{dt}$","$-2\\frac{d[A]}{dt} = 4\\frac{d[C]}{dt}$","$-\\frac{1}{4}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[C]}{dt}$","$\\frac{d[A]}{dt} = -\\frac{d[C]}{dt}$"],
    0,
    "The overall rate of reaction is defined by dividing the rate of change of concentration of each species by its stoichiometric coefficient, with negative signs for reactants: $\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{1}{3}\\frac{d[B]}{dt} = \\frac{1}{4}\\frac{d[C]}{dt}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following expressions correctly represents the instantaneous rate of a reaction $A \\rightarrow B$?",
    ["$-\\lim_{\\Delta t \\rightarrow 0} \\frac{\\Delta [A]}{\\Delta t}$","$\\lim_{\\Delta t \\rightarrow 0} \\frac{\\Delta [A]}{\\Delta t}$","$\\frac{\\Delta [A]}{\\Delta t}$","$-\\frac{\\Delta [A]}{\\Delta t}$"],
    0,
    "Instantaneous rate is the rate at a specific moment in time, defined as the limiting value of the average rate as $\\Delta t$ approaches zero: $r_{\\text{inst}} = -\\lim_{\\Delta t \\rightarrow 0} \\frac{\\Delta [A]}{\\Delta t} = -\\frac{d[A]}{dt}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the oxidation of ammonia: $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\rightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$, if the rate of formation of $\\text{NO}$ is $3.6 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$, what is the rate of formation of $\\text{H}_2\\text{O}$?",
    ["$5.4 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$","$3.6 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$","$2.4 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$","$1.8 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "From stoichiometry: $\\frac{1}{4}\\frac{d[\\text{NO}]}{dt} = \\frac{1}{6}\\frac{d[\\text{H}_2\\text{O}]}{dt}$. Therefore, $\\frac{d[\\text{H}_2\\text{O}]}{dt} = \\frac{6}{4}\\frac{d[\\text{NO}]}{dt} = 1.5 \\times (3.6 \\times 10^{-3}) = 5.4 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "In a reaction $A + 2B \\rightarrow 3C + D$, the concentration of $B$ falls from $0.50\\text{ M}$ to $0.38\\text{ M}$ in $10\\text{ minutes}$. What is the average rate of the reaction during this period?",
    ["$0.006\\text{ M min}^{-1}$","$0.012\\text{ M min}^{-1}$","$0.004\\text{ M min}^{-1}$","$0.024\\text{ M min}^{-1}$"],
    0,
    "The change $\\Delta [B] = 0.38 - 0.50 = -0.12\\text{ M}$ in $\\Delta t = 10\\text{ min}$. The rate of disappearance of $B$ is $-\\frac{\\Delta [B]}{\\Delta t} = \\frac{0.12}{10} = 0.012\\text{ M min}^{-1}$. The rate of reaction is $-\\frac{1}{2}\\frac{\\Delta [B]}{\\Delta t} = \\frac{0.012}{2} = 0.006\\text{ M min}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a gaseous reaction $2A(g) \\rightarrow B(g) + 2C(g)$, if the partial pressure of $A$ decreases at a rate of $0.04\\text{ atm s}^{-1}$, the rate of increase of total pressure is:",
    ["$0.02\\text{ atm s}^{-1}$","$0.04\\text{ atm s}^{-1}$","$0.06\\text{ atm s}^{-1}$","$0.01\\text{ atm s}^{-1}$"],
    0,
    "Let decrease in $p_A$ be $2x$ in time $dt$. Then increase in $p_B$ is $x$ and in $p_C$ is $2x$. The total pressure change $d p_{\\text{total}} = -2x + x + 2x = +x$. Since $-\\frac{dp_A}{dt} = 2 \\frac{dx}{dt} = 0.04\\text{ atm s}^{-1}$, we have $\\frac{dx}{dt} = 0.02\\text{ atm s}^{-1}$. Hence $\\frac{d p_{\\text{total}}}{dt} = 0.02\\text{ atm s}^{-1}$.",
    "Hard",
    "MCQ"
  );
  add(
    "The SI unit of the rate of a chemical reaction taking place in a liquid solution is:",
    ["$\\text{mol m}^{-3}\\text{s}^{-1}$","$\\text{mol L}^{-1}\\text{s}^{-1}$","$\\text{mol s}^{-1}$","$\\text{L mol}^{-1}\\text{s}^{-1}$"],
    0,
    "In the SI system, concentration is expressed in $\\text{mol m}^{-3}$ and time in $\\text{s}$, giving $\\text{mol m}^{-3}\\text{s}^{-1}$. (In standard laboratory practice, $\\text{mol L}^{-1}\\text{s}^{-1}$ is commonly used).",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $\\text{BrO}_3^- + 5\\text{Br}^- + 6\\text{H}^+ \\rightarrow 3\\text{Br}_2 + 3\\text{H}_2\\text{O}$, the rate of consumption of $\\text{Br}^-$ is related to the rate of formation of $\\text{Br}_2$ by:",
    ["$-\\frac{d[\\text{Br}^-]}{dt} = \\frac{5}{3}\\frac{d[\\text{Br}_2]}{dt}$","$-\\frac{d[\\text{Br}^-]}{dt} = \\frac{3}{5}\\frac{d[\\text{Br}_2]}{dt}$","$-\\frac{d[\\text{Br}^-]}{dt} = 5\\frac{d[\\text{Br}_2]}{dt}$","$-\\frac{d[\\text{Br}^-]}{dt} = \\frac{d[\\text{Br}_2]}{dt}$"],
    0,
    "From stoichiometry: $-\\frac{1}{5}\\frac{d[\\text{Br}^-]}{dt} = \\frac{1}{3}\\frac{d[\\text{Br}_2]}{dt}$. Rearranging gives $-\\frac{d[\\text{Br}^-]}{dt} = \\frac{5}{3}\\frac{d[\\text{Br}_2]}{dt}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Which of the following factors does NOT affect the rate of a homogeneous chemical reaction?",
    ["Enthalpy of the overall reaction ($\\Delta H$)","Temperature","Concentration of reactants","Presence of a catalyst"],
    0,
    "The rate of a reaction depends on kinetic parameters such as activation energy ($E_a$), temperature, reactant concentration, and catalysis. Enthalpy of reaction ($\\Delta H$) is a thermodynamic state function that determines feasibility and equilibrium, not the rate of reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "How does dividing a solid reactant into smaller pieces affect the rate of a heterogeneous reaction?",
    ["Increases the rate because the surface area increases","Decreases the rate because collisions decrease","Does not change the rate as mass remains constant","Decreases activation energy of the reaction"],
    0,
    "Dividing a solid into finer particles increases the total exposed surface area, providing more active contact sites for collision with the other reactant molecules, thereby increasing the rate of reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $2A + B \\rightarrow 3C$, if $-\\frac{d[A]}{dt} = 2.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$, what is the value of $\\frac{d[C]}{dt}$?",
    ["$3.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$","$1.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$","$2.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$","$1.5 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "From stoichiometry, $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[C]}{dt}$. Hence $\\frac{d[C]}{dt} = \\frac{3}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{2} \\times 2.0 \\times 10^{-2} = 3.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "During the course of a chemical reaction, as time progresses, the instantaneous rate of the reaction generally:",
    ["Decreases","Increases","Remains constant","First increases then decreases"],
    0,
    "As the reaction proceeds, reactant molecules are continuously consumed, causing their concentrations to decrease. Since reaction rate is directly proportional to reactant concentrations raised to appropriate powers, the instantaneous rate decreases over time.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $A + 3B \\rightarrow 2C$, the rate of disappearance of $B$ is $k_1 [A][B]$. The rate of formation of $C$ is:",
    ["$\\frac{2}{3}k_1 [A][B]$","$\\frac{3}{2}k_1 [A][B]$","$2k_1 [A][B]$","$3k_1 [A][B]$"],
    0,
    "The stoichiometric relationship gives $-\\frac{1}{3}\\frac{d[B]}{dt} = \\frac{1}{2}\\frac{d[C]}{dt}$. Therefore, $\\frac{d[C]}{dt} = \\frac{2}{3}\\left(-\\frac{d[B]}{dt}\\right) = \\frac{2}{3} k_1 [A][B]$.",
    "Medium",
    "MCQ"
  );
  add(
    "In the decomposition of hydrogen peroxide: $2\\text{H}_2\\text{O}_2(aq) \\rightarrow 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$, the rate of formation of $\\text{O}_2$ is $0.05\\text{ mol L}^{-1}\\text{min}^{-1}$. The rate of disappearance of $\\text{H}_2\\text{O}_2$ is:",
    ["$0.10\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.05\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.025\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.20\\text{ mol L}^{-1}\\text{min}^{-1}$"],
    0,
    "Stoichiometry shows $-\\frac{1}{2}\\frac{d[\\text{H}_2\\text{O}_2]}{dt} = \\frac{d[\\text{O}_2]}{dt}$. Hence $-\\frac{d[\\text{H}_2\\text{O}_2]}{dt} = 2 \\times 0.05 = 0.10\\text{ mol L}^{-1}\\text{min}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$, if the rate of consumption of $\\text{SO}_2$ is $x\\text{ mol L}^{-1}\\text{s}^{-1}$, the rate of consumption of $\\text{O}_2$ is:",
    ["$x/2$","$x$","$2x$","$x/4$"],
    0,
    "$-\\frac{1}{2}\\frac{d[\\text{SO}_2]}{dt} = -\\frac{d[\\text{O}_2]}{dt}$. Given $-\\frac{d[\\text{SO}_2]}{dt} = x$, we have $-\\frac{d[\\text{O}_2]}{dt} = \\frac{x}{2}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which experimental method is most suitable for measuring the rate of the reaction: $\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$?",
    ["Electrical conductivity measurement","Pressure change measurement","Polarimetry","Spectrophotometry of color change"],
    0,
    "As the reaction proceeds, fast-moving, highly conducting hydroxide ions ($\\text{OH}^-$) are replaced by slower, bulkier acetate ions ($\\text{CH}_3\\text{COO}^-$). This results in a measurable decrease in electrical conductivity over time.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $3A \\rightarrow 2B + C$, which of the following equalities is correct?",
    ["$-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt} = \\frac{d[C]}{dt}$","$-3\\frac{d[A]}{dt} = 2\\frac{d[B]}{dt} = \\frac{d[C]}{dt}$","$-\\frac{d[A]}{dt} = \\frac{d[B]}{dt} = \\frac{d[C]}{dt}$","$-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt} = \\frac{d[C]}{dt}$"],
    0,
    "Rate is expressed by dividing the change in concentration by time and by stoichiometric coefficient, with a negative sign for the reactant: $\\text{Rate} = -\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt} = \\frac{d[C]}{dt}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The graph of concentration of a reactant versus time gives a curve. The instantaneous rate at any time $t$ is obtained from:",
    ["The negative slope of the tangent to the curve at time $t$","The positive slope of the secant connecting $t=0$ to $t$","The area under the curve up to time $t$","The intercept of the curve on the y-axis"],
    0,
    "Since instantaneous rate is $r = -\\frac{d[A]}{dt}$, it equals the negative of the slope of the tangent drawn to the concentration-time curve at that specific point.",
    "Easy",
    "MCQ"
  );
  add(
    "If the temperature of a reaction mixture is raised from $298\\text{ K}$ to $308\\text{ K}$, the rate of the reaction approximately:",
    ["Doubles","Remains unchanged","Halves","Quadruples"],
    0,
    "For most chemical reactions, the temperature coefficient $\\mu = \\frac{k_{T+10}}{k_T} \\approx 2\\text{ to }3$. A $10^\\circ\\text{C}$ rise in temperature approximately doubles the reaction rate.",
    "Easy",
    "MCQ"
  );
  add(
    "In a reaction $2A + B \\rightarrow A_2B$, the reactant $A$ disappears at a rate of $0.050\\text{ mol L}^{-1}\\text{min}^{-1}$. The rate of appearance of $A_2B$ is:",
    ["$0.025\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.050\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.100\\text{ mol L}^{-1}\\text{min}^{-1}$","$0.0125\\text{ mol L}^{-1}\\text{min}^{-1}$"],
    0,
    "$-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{d[A_2B]}{dt}$. Thus $\\frac{d[A_2B]}{dt} = \\frac{1}{2}(0.050) = 0.025\\text{ mol L}^{-1}\\text{min}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following reactions is so fast that its rate cannot be easily measured by conventional volumetric methods?",
    ["$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$","$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$","Rusting of iron in moist air","Inversion of cane sugar in acidic medium"],
    0,
    "Precipitation of $\\text{AgCl}$ is an ionic reaction involving no covalent bond breaking. It takes place almost instantaneously (within $10^{-12}\\text{ to }10^{-16}\\text{ seconds}$).",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The instantaneous rate of a reaction is always equal to the average rate over a very small time interval $\\Delta t \\rightarrow 0$.\\nReason (R): Instantaneous rate is mathematically the derivative of concentration with respect to time.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). By the definition of a derivative in calculus, $\\frac{d[A]}{dt} = \\lim_{\\Delta t \\rightarrow 0} \\frac{\\Delta [A]}{\\Delta t}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For the reaction $2\\text{NO}_2(g) \\rightarrow 2\\text{NO}(g) + \\text{O}_2(g)$, the rate of appearance of $\\text{O}_2$ is half the rate of appearance of $\\text{NO}$.\\nReason (R): Stoichiometric coefficients dictate the relative molar rates of formation of products.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $\\frac{1}{2}\\frac{d[\\text{NO}]}{dt} = \\frac{d[\\text{O}_2]}{dt}$, $\\frac{d[\\text{O}_2]}{dt} = \\frac{1}{2}\\frac{d[\\text{NO}]}{dt}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Rate of reaction is always a positive quantity.\\nReason (R): A negative sign is introduced before the rate of disappearance of reactants because the concentration change $\\Delta [\\text{reactant}]$ is negative.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact rationale for putting a negative sign in front of reactant concentration derivatives.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The average rate of a reaction over a finite time interval does not give the true rate at any specific instant.\\nReason (R): Concentration of reactants continuously decreases during the reaction, causing the instantaneous rate to decrease continuously.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Because the speed of reaction changes from moment to moment as reactants are consumed, an average across a wide interval averages out these changes and misses the instantaneous speed.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Increasing the surface area of a solid reactant increases the rate of reaction.\\nReason (R): A greater surface area exposes a larger number of reactant particles to effective collisions per unit time.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). Heterogeneous reactions occur at the phase boundary. More exposed area implies more collision sites per second.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of reaction rate is always $\\text{mol L}^{-1}\\text{s}^{-1}$, regardless of the order of the reaction.\\nReason (R): Rate of reaction is defined as change in concentration per unit time.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The unit of *rate of reaction* is always $(\\text{concentration})/(\\text{time})$, i.e., $\\text{mol L}^{-1}\\text{s}^{-1}$. Note that it is the *rate constant* ($k$) whose units vary with order, not the rate of reaction itself.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightarrow 2\\text{HI}(g)$, the rate of formation of $\\text{HI}$ is twice the rate of consumption of $\\text{H}_2$.\\nReason (R): For every mole of $\\text{H}_2$ consumed, two moles of $\\text{HI}$ are produced.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The stoichiometry is $1:2$, so $-\\frac{d[\\text{H}_2]}{dt} = \\frac{1}{2}\\frac{d[\\text{HI}]}{dt} \\implies \\frac{d[\\text{HI}]}{dt} = 2\\left(-\\frac{d[\\text{H}_2]}{dt}\\right)$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Photochemical reactions between $\\text{H}_2$ and $\\text{Cl}_2$ over water proceed with zero order with respect to both reactants.\\nReason (R): The rate of a photochemical reaction is governed solely by the intensity of light absorbed and not by the concentration of reactants.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). In photochemical reactions like $\\text{H}_2 + \\text{Cl}_2 \\xrightarrow{h\\nu} 2\\text{HCl}$, photons initiate the chain reaction, so the rate depends on light intensity rather than concentration.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction decreases as the reaction proceeds towards completion.\\nReason (R): Rate of reaction is directly proportional to the concentration of reactants raised to suitable powers, and reactant concentration decreases continuously.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For any non-zero-order reaction, decreasing reactant concentration leads to lower reaction rate over time.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary reaction $aA + bB \\rightarrow \\text{products}$, the order is always equal to $a + b$.\\nReason (R): In an elementary reaction, all reacting molecules collide simultaneously in a single step.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For elementary single-step reactions, the rate law matches molecularity, meaning order equals the sum of stoichiometric coefficients $a + b$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The presence of a catalyst increases the rate of reaction by increasing the equilibrium constant.\\nReason (R): A catalyst lowers the activation energy of both the forward and backward reactions by the same amount.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because a catalyst does NOT change the equilibrium constant ($K_{\\text{eq}}$). It merely helps achieve equilibrium faster. (R) is true because a catalyst provides an alternative pathway that lowers $E_a$ equally for both forward and reverse directions.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a reaction $A \\rightarrow B$, the rate of disappearance of $A$ equals the rate of appearance of $B$.\\nReason (R): The stoichiometric coefficient of both $A$ and $B$ is $1$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{1}\\frac{d[B]}{dt}$, the two rates are equal.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction cannot be measured by simply measuring the total time taken for reaction completion.\\nReason (R): Most reactions proceed with varying rates that asymptotically approach zero as reactants are depleted.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). In first and higher order reactions, the time for $100\\%$ completion is theoretically infinite, making end-point timing imprecise.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Ionic reactions in aqueous solution occur with extremely high rates.\\nReason (R): No covalent bonds need to be broken in the reaction between oppositely charged ions in aqueous solution.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Ions are already solvated and free; they combine almost instantaneously upon collision without significant activation energy barrier.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate constant of a reaction is equal to the rate of reaction when the concentration of each reactant is unity.\\nReason (R): For a rate law $\\text{Rate} = k[A]^x[B]^y$, when $[A] = [B] = 1\\text{ M}$, $\\text{Rate} = k(1)^x(1)^y = k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic explanation of why $k$ is also referred to as the 'specific reaction rate'.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant depends on the overall order of the reaction.\\nReason (R): The unit of rate constant is given by $(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$, where $n$ is the overall order.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) gives the universal dimensional formula showing direct dependence on $n$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A negative order with respect to a substance means that increasing its concentration decreases the rate of reaction.\\nReason (R): Ozone decomposition $2\\text{O}_3 \\rightarrow 3\\text{O}_2$ exhibits an order of $-1$ with respect to $\\text{O}_2$.",
    ["Both (A) and (R) are true and (R) is not the correct explanation of (A)","Both (A) and (R) are true and (R) is the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both statements are correct. In ozone decomposition, $\\text{Rate} = k[\\text{O}_3]^2[\\text{O}_2]^{-1}$, where $\\text{O}_2$ retards the rate. (R) is an example of negative order, but not the mathematical definition of negative order.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction increases with an increase in pressure for gaseous reactions accompanied by a decrease in volume.\\nReason (R): Increasing pressure increases the molar concentration of gaseous reactants, leading to more frequent collisions.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). Since concentration $c = \\frac{p}{RT}$, higher pressure directly translates to higher gaseous concentration, thereby boosting collision frequency and reaction rate.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Molecularity of a reaction can be determined experimentally by initial rate method.\\nReason (R): Molecularity is an experimental quantity that can be zero, fractional, or negative.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. Molecularity is a theoretical concept derived from the reaction mechanism (the number of particles colliding in an elementary step). It cannot be determined by the initial rate method (which measures order), and it can never be zero, fractional, or negative.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the reaction $5\\text{Br}^- + \\text{BrO}_3^- + 6\\text{H}^+ \\rightarrow 3\\text{Br}_2 + 3\\text{H}_2\\text{O}$, the rate of disappearance of $\\text{Br}^-$ is five times the rate of disappearance of $\\text{BrO}_3^-$.\\nReason (R): The stoichiometric ratio between $\\text{Br}^-$ and $\\text{BrO}_3^-$ is $5:1$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). $-\\frac{1}{5}\\frac{d[\\text{Br}^-]}{dt} = -\\frac{d[\\text{BrO}_3^-]}{dt} \\implies -\\frac{d[\\text{Br}^-]}{dt} = 5\\left(-\\frac{d[\\text{BrO}_3^-]}{dt}\\right)$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a reaction involving multiple steps, the slowest step is known as the rate-determining step (RDS).\\nReason (R): The overall rate of the reaction cannot be faster than the rate of its slowest elementary step.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Just like the speed of a convoy is limited by the slowest vehicle, the overall chemical conversion rate is limited by the bottleneck step.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst increases the rate of reaction by providing an alternative reaction path with lower activation energy.\\nReason (R): The catalyst is consumed during the reaction and does not regenerate.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because a catalyst provides a transition state with lower $E_a$. (R) is false because a catalyst is regenerated chemically unchanged at the end of the reaction.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In a zero-order reaction, the rate constant has the same units as the rate of reaction.\\nReason (R): For a zero-order reaction, $\\text{Rate} = k[A]^0 = k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since rate equals $k$ directly, both share the exact same unit: $\\text{mol L}^{-1}\\text{s}^{-1}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction is independent of temperature for all elementary reactions.\\nReason (R): The activation energy of an elementary reaction is always zero.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. Rates of almost all reactions (including elementary ones) increase with temperature according to the Arrhenius equation, and almost all elementary reactions possess a non-zero activation energy.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The reaction rate for a gaseous reaction can be expressed in terms of change in partial pressure per unit time ($\\text{bar s}^{-1}$ or $\\text{atm s}^{-1}$).\\nReason (R): At constant temperature, the partial pressure of an ideal gas is directly proportional to its molar concentration ($p = cRT$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $p = \\left(\\frac{n}{V}\\right)RT = cRT$, measuring the rate of change of partial pressure $\\frac{dp}{dt}$ is directly proportional to $\\frac{dc}{dt}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}
function getArrheniusPartAQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Arrhenius equation", text, opts, ans, exp, diff, type));
  add(
    "According to the Arrhenius equation $k = A e^{-E_a/(RT)}$, a plot of $\\ln k$ versus $1/T$ yields a straight line whose slope is:",
    ["$-E_a / R$","$-E_a / (2.303 R)$","$E_a / R$","$-E_a$"],
    0,
    "Taking natural logarithms on both sides: $\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)$. Comparing with $y = mx + c$, the slope $m$ is $-E_a / R$ and the y-intercept is $\\ln A$.",
    "Easy",
    "MCQ"
  );
  add(
    "A plot of $\\log_{10} k$ versus $1/T$ gives a straight line with slope $-5000\\text{ K}$. Given $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, the activation energy $E_a$ of the reaction is:",
    ["$95.7\\text{ kJ mol}^{-1}$","$41.57\\text{ kJ mol}^{-1}$","$83.14\\text{ kJ mol}^{-1}$","$115.2\\text{ kJ mol}^{-1}$"],
    0,
    "In base-10 logarithms, $\\log k = \\log A - \\frac{E_a}{2.303 R}\\left(\\frac{1}{T}\\right)$. Slope $= -\\frac{E_a}{2.303 R} = -5000\\text{ K}$. Thus $E_a = 5000 \\times 2.303 \\times 8.314 = 95,735\\text{ J mol}^{-1} \\approx 95.7\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "If the rate constant of a reaction doubles when the temperature increases from $300\\text{ K}$ to $310\\text{ K}$, what is the activation energy $E_a$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\log 2 = 0.3010$)",
    ["$53.6\\text{ kJ mol}^{-1}$","$43.2\\text{ kJ mol}^{-1}$","$65.8\\text{ kJ mol}^{-1}$","$34.1\\text{ kJ mol}^{-1}$"],
    0,
    "Using $\\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$: $\\log 2 = 0.3010 = \\frac{E_a}{2.303 \\times 8.314}\\left(\\frac{10}{300 \\times 310}\\right)$. Solving gives $E_a = \\frac{0.3010 \\times 19.147 \\times 93000}{10} \\approx 53597\\text{ J mol}^{-1} \\approx 53.6\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "In the Arrhenius equation $k = A e^{-E_a/(RT)}$, the factor $e^{-E_a/(RT)}$ represents:",
    ["The fraction of molecules having kinetic energy greater than or equal to $E_a$","The total number of collisions occurring per unit volume per second","The probability that collisions have proper steric orientation","The ratio of the rate constants of forward and backward reactions"],
    0,
    "By Boltzmann's distribution law, the exponential factor $e^{-E_a/(RT)}$ corresponds to the fraction of molecules that possess kinetic energy equal to or exceeding the activation energy $E_a$.",
    "Easy",
    "MCQ"
  );
  add(
    "The pre-exponential factor $A$ in the Arrhenius equation has the same units as:",
    ["The rate constant $k$","The activation energy $E_a$","The reaction rate","Dimensionless"],
    0,
    "Since the exponential factor $e^{-E_a/(RT)}$ is dimensionless, $A$ must have the exact same units as the rate constant $k$, which depends on the order of the reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "The activation energy of a reaction is zero ($E_a = 0$). How does the rate constant $k$ depend on temperature?",
    ["$k$ is independent of temperature","$k$ increases exponentially with temperature","$k$ decreases with temperature","$k$ becomes infinite"],
    0,
    "When $E_a = 0$, $k = A e^{-0/(RT)} = A e^0 = A$. The rate constant becomes equal to the pre-exponential factor and is completely independent of temperature.",
    "Easy",
    "MCQ"
  );
  add(
    "For an endothermic reaction where $\\Delta H$ is the enthalpy of reaction and $E_a$ is the activation energy of the forward reaction, which condition must hold true?",
    ["$E_a > \\Delta H$","$E_a < \\Delta H$","$E_a = \\Delta H$","$E_a + \\Delta H = 0$"],
    0,
    "For an endothermic reaction, $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}} > 0$. Since $E_{a,\\text{backward}} > 0$, it follows that $E_{a,\\text{forward}} > \\Delta H$.",
    "Medium",
    "MCQ"
  );
  add(
    "A catalyst lowers the activation energy of a reaction by $20\\text{ kJ mol}^{-1}$ at $300\\text{ K}$. By what factor does the reaction rate increase? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$3017$","$1250$","$500$","$200$"],
    0,
    "The ratio of rates is $\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\Delta E_a / (RT)}$. Here $\\Delta E_a = 20,000\\text{ J mol}^{-1}$, so $\\frac{\\Delta E_a}{RT} = \\frac{20000}{8.314 \\times 300} = \\frac{20000}{2494.2} \\approx 8.0186$. Then $e^{8.0186} \\approx 3037 \\approx 3017$ (or $\\approx 3.0 \\times 10^3$).",
    "Hard",
    "MCQ"
  );
  add(
    "The temperature coefficient of a reaction is $2.0$. If the reaction rate is $r_1$ at $25^\\circ\\text{C}$, what will be the rate at $75^\\circ\\text{C}$?",
    ["$32 r_1$","$16 r_1$","$64 r_1$","$10 r_1$"],
    0,
    "Temperature difference $\\Delta T = 75 - 25 = 50^\\circ\\text{C} = 5 \\times 10^\\circ\\text{C}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^5 = 32$. Hence the new rate is $32 r_1$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which quantity remains unchanged when a catalyst is added to a reversible reaction?",
    ["Enthalpy of reaction ($\\Delta H$) and equilibrium constant ($K_{\\text{eq}}$)","Activation energy of forward reaction","Rate constant of forward reaction","Gibbs free energy of activation"],
    0,
    "A catalyst changes the path of the reaction and lowers the activation energy equally for both forward and reverse directions. Therefore, it does not change thermodynamic state functions such as $\\Delta H$, $\\Delta G$, or the equilibrium constant $K_{\\text{eq}}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The threshold energy ($E_{\\text{th}}$) of a reaction is equal to:",
    ["$\\text{Average internal energy of reactants} + \\text{Activation energy}$","$\\text{Activation energy} - \\text{Enthalpy of reaction}$","$\\text{Average energy of products} + \\text{Activation energy}$","$\\text{Enthalpy of reaction} + \\text{Average internal energy of reactants}$"],
    0,
    "Threshold energy is the minimum energy that colliding reactant molecules must possess in order to undergo an effective chemical reaction: $E_{\\text{th}} = E_{\\text{reactants}} + E_a$.",
    "Easy",
    "MCQ"
  );
  add(
    "When the temperature of a reaction mixture increases, the peak of the Maxwell-Boltzmann distribution curve of molecular energies:",
    ["Shifts to higher energy and decreases in height","Shifts to higher energy and increases in height","Shifts to lower energy and decreases in height","Remains at the same position but broadens"],
    0,
    "As temperature increases, the average kinetic energy of molecules increases, so the most probable energy moves to the right (higher energy). Because the total area under the curve (representing total fraction of molecules $= 1$) remains constant, the peak must become lower and broader.",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction, the rate constant at $500\\text{ K}$ is $0.02\\text{ s}^{-1}$ and at $700\\text{ K}$ is $0.07\\text{ s}^{-1}$. The activation energy $E_a$ is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln(3.5) = 1.253$)",
    ["$18.23\\text{ kJ mol}^{-1}$","$36.46\\text{ kJ mol}^{-1}$","$25.12\\text{ kJ mol}^{-1}$","$9.11\\text{ kJ mol}^{-1}$"],
    0,
    "Using $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$: $\\ln(3.5) = 1.253 = \\frac{E_a}{8.314}\\left(\\frac{200}{500 \\times 700}\\right)$. $E_a = \\frac{1.253 \\times 8.314 \\times 350000}{200} = 18228\\text{ J mol}^{-1} \\approx 18.23\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "In a reversible reaction $A \\rightleftharpoons B$, $E_{a,\\text{f}} = 40\\text{ kJ mol}^{-1}$ and $E_{a,\\text{b}} = 60\\text{ kJ mol}^{-1}$. The reaction is:",
    ["Exothermic with $\\Delta H = -20\\text{ kJ mol}^{-1}$","Endothermic with $\\Delta H = +20\\text{ kJ mol}^{-1}$","Exothermic with $\\Delta H = -100\\text{ kJ mol}^{-1}$","Endothermic with $\\Delta H = +100\\text{ kJ mol}^{-1}$"],
    0,
    "The enthalpy of reaction is $\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}} = 40 - 60 = -20\\text{ kJ mol}^{-1}$. A negative $\\Delta H$ means the reaction is exothermic.",
    "Easy",
    "MCQ"
  );
  add(
    "If the activation energy of a reaction is $83.14\\text{ kJ mol}^{-1}$, what is the value of the slope of $\\ln k$ versus $1/T$?",
    ["$-10,000\\text{ K}$","$-4343\\text{ K}$","$+10,000\\text{ K}$","$-83.14\\text{ K}$"],
    0,
    "Slope of $\\ln k$ vs $1/T$ is $-E_a / R = -\\frac{83140\\text{ J mol}^{-1}}{8.314\\text{ J K}^{-1}\\text{mol}^{-1}} = -10,000\\text{ K}$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the slope of $\\log k$ vs $1/T$ for a certain reaction is $-2000\\text{ K}$, the activation energy of the reaction is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$38.3\\text{ kJ mol}^{-1}$","$16.6\\text{ kJ mol}^{-1}$","$76.6\\text{ kJ mol}^{-1}$","$19.1\\text{ kJ mol}^{-1}$"],
    0,
    "Slope $= -\\frac{E_a}{2.303 R} = -2000\\text{ K}$. $E_a = 2000 \\times 2.303 \\times 8.314 = 38,294\\text{ J mol}^{-1} \\approx 38.3\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "A chemical reaction with a very large positive activation energy is expected to be:",
    ["Extremely sensitive to changes in temperature","Completely insensitive to changes in temperature","Extremely fast at room temperature","Exothermic always"],
    0,
    "From $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{R T^2}$, the rate of change of $k$ with temperature is directly proportional to $E_a$. A larger $E_a$ means that the reaction rate increases much more steeply with an increase in temperature.",
    "Medium",
    "MCQ"
  );
  add(
    "The intercept on the $y$-axis in the plot of $\\log_{10} k$ versus $1/T$ gives:",
    ["$\\log_{10} A$","$\\ln A$","$-E_a / (2.303 R)$","$A$"],
    0,
    "In the equation $\\log_{10} k = -\\frac{E_a}{2.303 R}\\left(\\frac{1}{T}\\right) + \\log_{10} A$, comparing with $y = mx + c$, the $y$-intercept is $c = \\log_{10} A$.",
    "Easy",
    "MCQ"
  );
  add(
    "At what temperature would the rate constant $k$ equal the pre-exponential factor $A$ for any reaction having non-zero $E_a$?",
    ["$T \\rightarrow \\infty$","$T = 0\\text{ K}$","$T = 298\\text{ K}$","$T = 1000\\text{ K}$"],
    0,
    "According to $k = A e^{-E_a/(RT)}$, as $T \\rightarrow \\infty$, $\\frac{E_a}{RT} \\rightarrow 0$, so $e^{-E_a/(RT)} \\rightarrow e^0 = 1$. Thus, $k \\rightarrow A$ only as temperature approaches infinity.",
    "Easy",
    "MCQ"
  );
  add(
    "The temperature coefficient of a reaction is defined as the ratio of rate constants at two temperatures differing by:",
    ["$10^\\circ\\text{C}$","$100^\\circ\\text{C}$","$1^\\circ\\text{C}$","$25^\\circ\\text{C}$"],
    0,
    "The temperature coefficient $\\mu$ is defined as the ratio of the rate constant at temperature $(T + 10)^\\circ\\text{C}$ to that at $T^\\circ\\text{C}$, typically between $25^\\circ\\text{C}$ and $35^\\circ\\text{C}$: $\\mu = k_{T+10} / k_T$.",
    "Easy",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)$, the rate of reaction decreases with increase in temperature. This anomalous behavior corresponds to an effective activation energy that is:",
    ["Negative","Zero","Extremely large and positive","Infinite"],
    0,
    "The oxidation of $\\text{NO}$ proceeds via a pre-equilibrium dimer formation: $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (exothermic), followed by $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\rightarrow 2\\text{NO}_2$. The overall rate constant is $k = K_{\\text{eq}} k_2$. Since the equilibrium shifts backward upon heating more than $k_2$ increases, the effective activation energy is negative, and rate decreases with $T$.",
    "Hard",
    "MCQ"
  );
  add(
    "In an exothermic reaction $A \\rightarrow B$, the activation energy of the forward reaction is $50\\text{ kJ mol}^{-1}$ and $\\Delta H = -30\\text{ kJ mol}^{-1}$. What is the activation energy of the reverse reaction $B \\rightarrow A$?",
    ["$80\\text{ kJ mol}^{-1}$","$20\\text{ kJ mol}^{-1}$","$50\\text{ kJ mol}^{-1}$","$110\\text{ kJ mol}^{-1}$"],
    0,
    "We have $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{reverse}}$. Thus, $-30 = 50 - E_{a,\\text{reverse}} \\implies E_{a,\\text{reverse}} = 50 - (-30) = 80\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Two reactions have activation energies $E_1$ and $E_2$ with $E_1 > E_2$. If the temperature of both reaction mixtures is raised by $10^\\circ\\text{C}$, which reaction will experience a greater fractional increase in rate?",
    ["The reaction with higher activation energy ($E_1$)","The reaction with lower activation energy ($E_2$)","Both reactions will experience the same fractional increase","Cannot be determined without knowing pre-exponential factors"],
    0,
    "From $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{R T^2}$, the fractional increase in rate $\\frac{\\Delta k}{k} \\approx \\frac{E_a}{R T^2}\\Delta T$ is directly proportional to $E_a$. Hence, the reaction with higher $E_a$ is more sensitive to temperature and has a larger fractional increase.",
    "Medium",
    "MCQ"
  );
  add(
    "An uncatalyzed reaction has $E_a = 75\\text{ kJ mol}^{-1}$. In the presence of an enzyme catalyst at $310\\text{ K}$, the activation energy is lowered to $25\\text{ kJ mol}^{-1}$. The rate increases by a factor of approximately: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$2.7 \\times 10^8$","$1.0 \\times 10^4$","$5.2 \\times 10^6$","$3.1 \\times 10^2$"],
    0,
    "$\\Delta E_a = 75000 - 25000 = 50000\\text{ J mol}^{-1}$. Rate increase ratio $= e^{\\Delta E_a / (RT)} = e^{50000 / (8.314 \\times 310)} = e^{50000 / 2577.34} = e^{19.40} \\approx 2.66 \\times 10^8 \\approx 2.7 \\times 10^8$.",
    "Hard",
    "MCQ"
  );
  add(
    "If the rate constant of a reaction is given by $k = 4.5 \\times 10^3 \\text{ s}^{-1} e^{-20000 / T}$, what is the value of the activation energy $E_a$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$166.3\\text{ kJ mol}^{-1}$","$20.0\\text{ kJ mol}^{-1}$","$83.1\\text{ kJ mol}^{-1}$","$2.4\\text{ kJ mol}^{-1}$"],
    0,
    "Comparing $e^{-20000/T}$ with $e^{-E_a/(RT)}$, we get $\\frac{E_a}{R} = 20000\\text{ K}$. Therefore, $E_a = 20000 \\times 8.314 = 166,280\\text{ J mol}^{-1} \\approx 166.3\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "The rate constant for a reaction is $k = 10^{14} e^{-25000 / T}$. The value of $\\log_{10} A$ is:",
    ["$14$","$25000$","$6.08$","$14 / 2.303$"],
    0,
    "Comparing with the Arrhenius equation $k = A e^{-E_a/(RT)}$, the pre-exponential factor is $A = 10^{14}$. Taking base-10 log gives $\\log_{10} A = \\log_{10}(10^{14}) = 14$.",
    "Easy",
    "MCQ"
  );
  add(
    "According to transition state theory, the activated complex is in a state of dynamic equilibrium with:",
    ["The reactant molecules","The product molecules","The catalyst only","The solvent molecules"],
    0,
    "In Eyring's Transition State Theory, reactant molecules are assumed to be in rapid dynamic equilibrium with the high-energy activated complex: $\\text{Reactants} \\rightleftharpoons [\\text{Activated Complex}]^\\ddagger \\rightarrow \\text{Products}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The activation energy of a reaction is $E_a$. If the temperature is increased from $T$ to $T + \\Delta T$, the fraction of molecules possessing energy $\\ge E_a$ increases because:",
    ["The area under the Maxwell-Boltzmann distribution curve beyond $E_a$ increases significantly","The threshold energy decreases with temperature","The activation energy decreases with temperature","The total number of molecules in the system increases"],
    0,
    "Neither $E_a$ nor threshold energy decreases with temperature. The increase in reaction rate is entirely due to the broadening of the kinetic energy distribution, which dramatically increases the fraction of molecules in the high-energy tail having energy $\\ge E_a$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a reaction, $\\log k = 6.0 - \\frac{2000}{T}$. What is the value of the pre-exponential factor $A$?",
    ["$10^6$","$6.0$","$2000$","$e^6$"],
    0,
    "From $\\log k = \\log A - \\frac{E_a}{2.303 R T}$, the constant term is $\\log_{10} A = 6.0$. Hence $A = 10^{6.0} = 10^6$ in corresponding units.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following statements about activation energy is FALSE?",
    ["Activation energy of a reaction decreases with increase in temperature","A catalyst provides an alternative pathway with lower activation energy","Activation energy cannot be negative for an elementary step","Activation energy is the minimum extra energy required by reactant molecules to reach threshold energy"],
    0,
    "Activation energy $E_a$ is an intrinsic characteristic of the reaction pathway and is independent of temperature over normal temperature ranges. The statement that $E_a$ decreases with temperature is false.",
    "Medium",
    "MCQ"
  );
  add(
    "A reaction has $E_a = 0$. If $k = 3.2 \\times 10^4\\text{ s}^{-1}$ at $300\\text{ K}$, what will be the rate constant at $400\\text{ K}$?",
    ["$3.2 \\times 10^4\\text{ s}^{-1}$","$6.4 \\times 10^4\\text{ s}^{-1}$","$1.6 \\times 10^4\\text{ s}^{-1}$","$1.28 \\times 10^5\\text{ s}^{-1}$"],
    0,
    "Since $E_a = 0$, $k = A e^0 = A$ is completely independent of temperature. Thus $k$ at $400\\text{ K}$ remains identical to its value at $300\\text{ K}$, i.e., $3.2 \\times 10^4\\text{ s}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order reaction, the Arrhenius pre-exponential factor $A$ has the dimensions of:",
    ["$\\text{time}^{-1}$","$\\text{concentration} \\times \\text{time}^{-1}$","$\\text{concentration}^{-1} \\times \\text{time}^{-1}$","Dimensionless"],
    0,
    "The exponential term $e^{-E_a/(RT)}$ is dimensionless. Since $k$ for a first-order reaction has units of $\\text{s}^{-1}$ (or $\\text{time}^{-1}$), $A$ also has the dimensions of $\\text{time}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the temperature coefficient of a reaction is $3$, by how much does the rate increase when the temperature is raised from $20^\\circ\\text{C}$ to $50^\\circ\\text{C}$?",
    ["$27$ times","$9$ times","$81$ times","$3$ times"],
    0,
    "Number of $10^\\circ\\text{C}$ increments is $n = \\frac{50 - 20}{10} = 3$. The rate increases by $\\mu^n = 3^3 = 27$ times.",
    "Easy",
    "MCQ"
  );
  add(
    "In the presence of a catalyst, the activation energy of a reaction is lowered by $\\Delta E$. The ratio of the catalyzed rate constant to the uncatalyzed rate constant is:",
    ["$e^{\\Delta E / (RT)}$","$e^{-\\Delta E / (RT)}$","$\\Delta E / (RT)$","$\\ln(\\Delta E / RT)$"],
    0,
    "$\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = \\frac{A e^{-(E_a - \\Delta E)/(RT)}}{A e^{-E_a/(RT)}} = e^{\\Delta E / (RT)}$.",
    "Easy",
    "MCQ"
  );
  add(
    "What is the physical meaning of the pre-exponential factor $A$ according to collision theory?",
    ["$A = P \\times Z$, where $Z$ is collision frequency and $P$ is steric factor","$A$ is the total kinetic energy of all reacting particles","$A$ is the fraction of molecules colliding with energy greater than $E_a$","$A$ is the enthalpy change accompanying collision"],
    0,
    "In collision theory, the rate constant is given by $k = P Z_{AB} e^{-E_a/(RT)}$. Comparing with $k = A e^{-E_a/(RT)}$, we have $A = P Z_{AB}$, where $Z_{AB}$ is collision frequency and $P$ is the steric or orientation factor.",
    "Medium",
    "MCQ"
  );
  add(
    "In the graph of $\\ln k$ versus $1/T$, which of the following changes will cause the straight line to shift upward without changing its slope?",
    ["Adding a catalyst that increases the pre-exponential factor without changing $E_a$","Increasing the activation energy","Decreasing the temperature","Decreasing the pre-exponential factor"],
    0,
    "In $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$, the slope is determined by $E_a$, while the intercept is $\\ln A$. Increasing $A$ raises the intercept, shifting the entire line upward parallel to itself.",
    "Medium",
    "MCQ"
  );
  add(
    "The rate constant of a reaction is $1.2 \\times 10^{-3}\\text{ s}^{-1}$ at $300\\text{ K}$ and $2.4 \\times 10^{-3}\\text{ s}^{-1}$ at $310\\text{ K}$. The temperature coefficient $\\mu$ is:",
    ["$2.0$","$1.5$","$3.0$","$2.4$"],
    0,
    "The temperature difference is $310 - 300 = 10\\text{ K}$. By definition, $\\mu = \\frac{k_{310}}{k_{300}} = \\frac{2.4 \\times 10^{-3}}{1.2 \\times 10^{-3}} = 2.0$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction with activation energy $E_a = 57.63\\text{ kJ mol}^{-1}$, by what factor will the rate constant increase when temperature rises from $300\\text{ K}$ to $320\\text{ K}$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$4.2$","$2.0$","$8.4$","$1.5$"],
    0,
    "$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right) = \\frac{57630}{8.314}\\left(\\frac{20}{300 \\times 320}\\right) = 6931.7 \\times \\frac{20}{96000} = 6931.7 \\times 0.0002083 = 1.444$. Then $\\frac{k_2}{k_1} = e^{1.444} \\approx 4.24 \\approx 4.2$.",
    "Medium",
    "MCQ"
  );
  add(
    "Which parameter can be determined from the intercept of the Arrhenius plot of $\\ln k$ vs $1/T$?",
    ["Pre-exponential frequency factor ($A$)","Activation energy ($E_a$)","Threshold energy","Enthalpy of reaction ($\\Delta H$)"],
    0,
    "From $\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)$, the y-intercept at $1/T = 0$ is equal to $\\ln A$. Hence, $A = e^{\\text{intercept}}$ can be determined directly.",
    "Easy",
    "MCQ"
  );
  add(
    "The rate constant for a reaction is given by $\\ln k = 20 - \\frac{4000}{T}$. What is the activation energy $E_a$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$33.26\\text{ kJ mol}^{-1}$","$4000\\text{ kJ mol}^{-1}$","$16.63\\text{ kJ mol}^{-1}$","$66.52\\text{ kJ mol}^{-1}$"],
    0,
    "Comparing with $\\ln k = \\ln A - \\frac{E_a}{RT}$, the coefficient of $1/T$ is $\\frac{E_a}{R} = 4000\\text{ K}$. Therefore, $E_a = 4000 \\times 8.314 = 33,256\\text{ J mol}^{-1} \\approx 33.26\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "When the activation energy of a reaction is high, the rate of reaction at room temperature is generally:",
    ["Very slow","Very fast","Independent of concentration","Instantaneous"],
    0,
    "A high activation energy means that only an extremely tiny fraction of colliding molecules possess kinetic energy exceeding $E_a$ ($e^{-E_a/(RT)} \\ll 1$). Consequently, the reaction rate at room temperature is very slow.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following is true for an exothermic reaction?",
    ["$E_{a,\\text{forward}} < E_{a,\\text{backward}}$","$E_{a,\\text{forward}} > E_{a,\\text{backward}}$","$E_{a,\\text{forward}} = E_{a,\\text{backward}}$","$E_{a,\\text{forward}} + E_{a,\\text{backward}} = 0$"],
    0,
    "For an exothermic reaction, enthalpy change $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}} < 0$. Therefore, $E_{a,\\text{forward}} < E_{a,\\text{backward}}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction, the activation energy is $E_a = 100\\text{ kJ mol}^{-1}$. If the temperature is increased from $300\\text{ K}$ to $310\\text{ K}$, the rate constant increases by a factor of: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$3.65$","$2.00$","$5.12$","$1.85$"],
    0,
    "$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{100000}{8.314}\\left(\\frac{10}{300 \\times 310}\\right) = 12027.9 \\times 0.0001075 = 1.293$. Ratio $\\frac{k_2}{k_1} = e^{1.293} \\approx 3.645 \\approx 3.65$.",
    "Medium",
    "MCQ"
  );
  add(
    "The fraction of effective collisions at temperature $T$ is given by $f = e^{-E_a/(RT)}$. If $T \\rightarrow 0\\text{ K}$, the value of $f$ approaches:",
    ["$0$","$1$","$\\infty$","$0.5$"],
    0,
    "As $T \\rightarrow 0$, $\\frac{E_a}{RT} \\rightarrow \\infty$, so $f = e^{-\\infty} = 0$. At absolute zero, no molecules possess enough thermal energy to overcome the activation barrier.",
    "Easy",
    "MCQ"
  );
  add(
    "A catalyst accelerates a reaction by:",
    ["Providing a new reaction mechanism with lower activation energy","Increasing the average kinetic energy of reactant molecules","Increasing the frequency of total collisions between reactants","Increasing the enthalpy of the reaction"],
    0,
    "A catalyst does not change the kinetic energy distribution of molecules or the frequency of binary collisions. Instead, it provides an alternative pathway with a lower activation energy barrier.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order gas-phase reaction, the Arrhenius equation is $\\log_{10} k = 14.34 - \\frac{1.25 \\times 10^4\\text{ K}}{T}$. The activation energy $E_a$ is: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$239.3\\text{ kJ mol}^{-1}$","$103.9\\text{ kJ mol}^{-1}$","$125.0\\text{ kJ mol}^{-1}$","$478.6\\text{ kJ mol}^{-1}$"],
    0,
    "Slope $= -\\frac{E_a}{2.303 R} = -1.25 \\times 10^4\\text{ K}$. $E_a = 1.25 \\times 10^4 \\times 2.303 \\times 8.314 = 239,348\\text{ J mol}^{-1} \\approx 239.3\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For the reaction $2\\text{HI} \\rightarrow \\text{H}_2 + \\text{I}_2$, the activation energy is $184\\text{ kJ mol}^{-1}$. The fraction of molecules having energy greater than or equal to $E_a$ at $700\\text{ K}$ is approximately: (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$1.8 \\times 10^{-14}$","$2.5 \\times 10^{-7}$","$4.2 \\times 10^{-4}$","$1.0 \\times 10^{-20}$"],
    0,
    "Fraction $f = e^{-E_a / (RT)} = e^{-184000 / (8.314 \\times 700)} = e^{-184000 / 5819.8} = e^{-31.616} \\approx 1.84 \\times 10^{-14}$.",
    "Hard",
    "MCQ"
  );
  add(
    "If the temperature of a reaction is raised from $300\\text{ K}$ to $310\\text{ K}$, the average kinetic energy of the reactant molecules increases by approximately:",
    ["$3.3\\%$","$100\\%$","$50\\%$","$10\\%$"],
    0,
    "Average kinetic energy is directly proportional to absolute temperature ($K.E. = \\frac{3}{2}RT$). Fractional increase $= \\frac{310 - 300}{300} = \\frac{10}{300} = 3.33\\%$. Note that while the average kinetic energy increases by only $3.3\\%$, the reaction rate often doubles ($100\\%$) because the tail of the distribution beyond $E_a$ expands dramatically.",
    "Medium",
    "MCQ"
  );
  add(
    "What is the activation energy of a reaction whose rate doubles for every $10\\text{ K}$ rise in temperature around $300\\text{ K}$?",
    ["$53.6\\text{ kJ mol}^{-1}$","$25.0\\text{ kJ mol}^{-1}$","$100.0\\text{ kJ mol}^{-1}$","$12.5\\text{ kJ mol}^{-1}$"],
    0,
    "Using $\\log 2 = \\frac{E_a}{2.303 \\times 8.314}\\left(\\frac{10}{300 \\times 310}\\right)$, solving gives $E_a = 53.6\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "The rate constant for a reaction at $27^\\circ\\text{C}$ is $k_1$ and at $47^\\circ\\text{C}$ is $k_2$. If $E_a = 50\\text{ kJ mol}^{-1}$, what is the value of $k_2 / k_1$? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$3.6$","$2.0$","$1.5$","$5.8$"],
    0,
    "$T_1 = 300\\text{ K}$, $T_2 = 320\\text{ K}$. $\\ln(k_2/k_1) = \\frac{50000}{8.314}\\left(\\frac{20}{300 \\times 320}\\right) = 6013.95 \\times \\frac{20}{96000} = 1.253$. Hence $\\frac{k_2}{k_1} = e^{1.253} \\approx 3.50 \\approx 3.6$.",
    "Medium",
    "MCQ"
  );
  add(
    "An activated complex is characterized by:",
    ["Highest potential energy along the reaction coordinate","Lowest potential energy","Infinite lifetime","Complete stability"],
    0,
    "The activated complex (transition state) exists at the maximum of the potential energy barrier along the reaction coordinate, having the highest potential energy and a very fleeting lifetime ($~10^{-13}\\text{ s}$).",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction $A \\rightarrow B$, the forward activation energy is $E_{a,\\text{f}} = 20\\text{ kJ mol}^{-1}$ and $\\Delta H = +15\\text{ kJ mol}^{-1}$. What is the backward activation energy $E_{a,\\text{b}}$?",
    ["$5\\text{ kJ mol}^{-1}$","$35\\text{ kJ mol}^{-1}$","$20\\text{ kJ mol}^{-1}$","$15\\text{ kJ mol}^{-1}$"],
    0,
    "$\\Delta H = E_{a,\\text{f}} - E_{a,\\text{b}} \\implies 15 = 20 - E_{a,\\text{b}} \\implies E_{a,\\text{b}} = 20 - 15 = 5\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following plots will be linear for a reaction following the Arrhenius equation?",
    ["$\\log k$ versus $1/T$","$\\log k$ versus $T$","$k$ versus $1/T$","$k$ versus $T$"],
    0,
    "The linear form is $\\log_{10} k = \\log_{10} A - \\frac{E_a}{2.303 R}\\left(\\frac{1}{T}\\right)$, which is a straight line when plotted as $\\log k$ against $1/T$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the rate of a reaction is tripled when the temperature is increased from $300\\text{ K}$ to $320\\text{ K}$, what is the activation energy? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 3 = 1.0986$)",
    ["$43.84\\text{ kJ mol}^{-1}$","$87.68\\text{ kJ mol}^{-1}$","$21.92\\text{ kJ mol}^{-1}$","$53.60\\text{ kJ mol}^{-1}$"],
    0,
    "$\\ln 3 = 1.0986 = \\frac{E_a}{8.314}\\left(\\frac{20}{300 \\times 320}\\right)$. $E_a = \\frac{1.0986 \\times 8.314 \\times 96000}{20} = 43,842\\text{ J mol}^{-1} \\approx 43.84\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "The unit of the frequency factor $A$ for a second-order reaction is:",
    ["$\\text{L mol}^{-1}\\text{s}^{-1}$","$\\text{s}^{-1}$","$\\text{mol L}^{-1}\\text{s}^{-1}$","$\\text{L}^2\\text{mol}^{-2}\\text{s}^{-1}$"],
    0,
    "The pre-exponential factor $A$ carries the exact same units as the rate constant $k$. For a second-order reaction, the unit of $k$ is $\\text{L mol}^{-1}\\text{s}^{-1}$ (or $\\text{M}^{-1}\\text{s}^{-1}$).",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction increases with an increase in temperature.\\nReason (R): As temperature increases, the fraction of molecules with kinetic energy greater than or equal to the activation energy increases exponentially.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the correct explanation. According to the Arrhenius equation and Boltzmann distribution, the fraction of molecules with $E \\ge E_a$ is $e^{-E_a/(RT)}$, which rises sharply with temperature.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A plot of $\\ln k$ versus $1/T$ is linear with a negative slope.\\nReason (R): Arrhenius equation can be written as $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the direct algebraic justification for the straight line with slope $-E_a/R < 0$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The activation energy of a reaction cannot be negative for an elementary step.\\nReason (R): Energy must always be supplied to break or distort existing bonds to form the activated complex.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Forming the transition state from ground-state reactants always requires an input of energy to overcome interelectronic repulsion and bond stretching.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst increases the speed of a reaction without participating in the reaction mechanism.\\nReason (R): A catalyst lowers the activation energy by forming an alternative transition state with reactants.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because a catalyst DOES participate chemically in the reaction mechanism (it forms intermediate complexes and is regenerated at the end). (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Reactions with low activation energy are generally very fast at room temperature.\\nReason (R): When $E_a$ is small, a large fraction of colliding molecules possesses kinetic energy exceeding $E_a$ even at room temperature.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact physical explanation. The smaller the barrier $E_a$, the closer $e^{-E_a/(RT)}$ is to $1$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A $10^\\circ\\text{C}$ rise in temperature approximately doubles the reaction rate, even though the average molecular speed increases by only about $3\\%$.\\nReason (R): The fraction of molecules having energy equal to or greater than the activation energy nearly doubles with a $10^\\circ\\text{C}$ temperature rise.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains this classic kinetics phenomenon. The reaction rate depends primarily on the fraction of effective collisions ($e^{-E_a/(RT)}$), which doubles, rather than collision frequency ($Z \\propto \\sqrt{T}$), which changes minimally.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In an endothermic reaction, the activation energy of the forward reaction must be greater than the enthalpy of the reaction ($\\Delta H$).\\nReason (R): Enthalpy of reaction is given by $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}}$, and $E_{a,\\text{backward}}$ must be positive.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $E_{a,\\text{backward}} > 0$, $E_{a,\\text{forward}} = \\Delta H + E_{a,\\text{backward}} > \\Delta H$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Addition of a catalyst alters the position of chemical equilibrium.\\nReason (R): A catalyst lowers the activation energies of both the forward and reverse reactions by unequal amounts.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. A catalyst does NOT alter the position of chemical equilibrium, and it lowers the activation energy of forward and backward reactions by the exact same amount ($Delta E_a$).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The pre-exponential factor $A$ is independent of the order of the reaction.\\nReason (R): The units of $A$ depend on the units of the rate constant $k$.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because $A$ has the same dimensions as $k$, which change with the order of reaction ($(\\text{mol L}^{-1})^{1-n}\\text{s}^{-1}$). (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): When temperature increases, the most probable kinetic energy of molecules shifts to a higher value.\\nReason (R): The total area under the Maxwell-Boltzmann distribution curve increases with an increase in temperature.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because higher thermal energy shifts the peak to the right. (R) is false because the total area under the distribution curve represents the total fraction of molecules (which is always identically equal to $1$) and remains strictly constant.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a reaction with $E_a = 0$, the rate constant $k$ is equal to $A$ at all temperatures.\\nReason (R): According to the Arrhenius equation, $e^{-0/(RT)} = e^0 = 1$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic explanation of (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Between two reactions with different activation energies, the reaction with higher $E_a$ is more sensitive to temperature change.\\nReason (R): The derivative $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{RT^2}$ is directly proportional to $E_a$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof. A higher $E_a$ gives a steeper slope, meaning $k$ changes more dramatically per degree temperature change.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The presence of a catalyst does not alter the free energy change ($\\Delta G$) of the reaction.\\nReason (R): A catalyst only alters kinetic parameters and does not affect the state functions of initial reactants and final products.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $\\Delta G = G_{\\text{products}} - G_{\\text{reactants}}$ depends solely on the initial and final states, an alternative reaction path does not alter $\\Delta G$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): All collisions between reactant molecules lead to chemical reaction.\\nReason (R): Collisions must possess energy greater than or equal to threshold energy and must occur with proper steric orientation.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because only a tiny fraction of collisions (effective collisions) lead to reaction. (R) is true and describes the dual criteria of collision theory (energy barrier and orientation barrier).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the slope of $\\log_{10} k$ vs $1/T$ is $-m$, then the activation energy is $E_a = 2.303 R m$.\\nReason (R): In base-10 logarithmic form, $\\log_{10} k = \\log_{10} A - \\frac{E_a}{2.303 R T}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the algebraic explanation showing that slope $= -\\frac{E_a}{2.303 R} = -m \\implies E_a = 2.303 R m$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Enzymes are biocatalysts that are highly specific in their action.\\nReason (R): Enzyme active sites have complementary shape and charge distributions to their specific substrates.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The lock-and-key model describes how substrate-binding sites only accommodate molecules of specific geometric and electronic configurations.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The Arrhenius equation assumes that activation energy $E_a$ is constant over a moderate range of temperature.\\nReason (R): Over moderate temperature ranges, the changes in vibrational and rotational partition functions of reactants and transition state are relatively negligible.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the thermodynamic/statistical mechanical justification for treating $E_a$ as a temperature-independent constant.",
    "Hard",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an exothermic reaction, the activation energy of the reverse reaction is always greater than the activation energy of the forward reaction.\\nReason (R): For an exothermic reaction, products lie at a lower potential energy level than reactants.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Because product molecules start from a lower energy valley, they must climb a higher energy barrier to reach the common transition state ($E_{a,\\text{b}} = E_{a,\\text{f}} + |\\Delta H| > E_{a,\\text{f}}$).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): At very high temperatures, the rate constant of a reaction approaches the frequency factor $A$.\\nReason (R): As $T \\rightarrow \\infty$, the term $-E_a / (RT)$ approaches zero, and $e^0 = 1$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical limit explaining (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An inhibitor increases the rate of reaction.\\nReason (R): An inhibitor increases the activation energy of a reaction.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because an inhibitor slows down or retards the rate of reaction. (R) is true because an inhibitor often acts by raising the effective activation energy or poisoning the catalyst.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Increasing the concentration of reactants increases the rate of reaction but does not change the rate constant $k$.\\nReason (R): The rate constant $k$ is independent of reactant concentration and depends only on temperature and catalyst.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A). $k$ is an intrinsic constant for a given reaction at a specified temperature.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The value of activation energy can never be determined using initial rate experiments alone without varying temperature.\\nReason (R): Activation energy is determined from the variation of rate constant with temperature.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Initial rate experiments at a single temperature only yield the reaction orders and $k$ at that specific temperature. Finding $E_a$ requires knowing $k$ at at least two different temperatures.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Threshold energy is always greater than or equal to the activation energy.\\nReason (R): $E_{\\text{th}} = E_a + E_{\\text{reactants}}$, and reactant molecules always have non-zero average internal energy ($E_{\\text{reactants}} > 0$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the direct energetic formula.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The unit of rate constant is identical to the unit of frequency factor $A$.\\nReason (R): The exponential term $e^{-E_a/(RT)}$ in the Arrhenius equation is a dimensionless quantity.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Dimensional analysis of $k = A e^{-E_a/(RT)}$ shows that $[k] = [A] \\times 1 = [A]$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Biological reactions inside living organisms are catalyzed by enzymes.\\nReason (R): At physiological temperature ($37^\\circ\\text{C}$), uncatalyzed metabolic reactions would proceed too slowly to sustain life.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains the physiological necessity of enzyme catalysis.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the activation energy of a reaction is very low, the reaction is virtually instantaneous.\\nReason (R): Almost all colliding molecules will possess kinetic energy exceeding the activation energy barrier.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). When $E_a \\approx 0$, $e^{-E_a/(RT)} \\approx 1$, meaning nearly every collision with correct geometry leads to product formation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an endothermic reaction, $\\Delta H$ can be greater than $E_{a,\\text{forward}}$.\\nReason (R): $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}}$ and $E_{a,\\text{backward}}$ cannot be negative.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because $\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}} \\implies E_{a,\\text{forward}} = \\Delta H + E_{a,\\text{backward}}$. Since $E_{a,\\text{backward}} > 0$, $E_{a,\\text{forward}}$ must always be strictly greater than $\\Delta H$. (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst increases the yield of the desired product in an equilibrium mixture.\\nReason (R): A catalyst shifts the equilibrium toward the product side.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. A catalyst accelerates both forward and reverse reactions equally; it does NOT shift the equilibrium position or alter the equilibrium yield of products.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A negative activation energy is observed for some complex chemical reactions.\\nReason (R): In multi-step mechanisms containing an exothermic pre-equilibrium step, the overall rate constant $k = K_{\\text{eq}} k_2$ can decrease with increasing temperature.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). As in the oxidation of $\\text{NO}$, $E_{a,\\text{obs}} = \\Delta H^\\circ + E_{a,2}$. If $\\Delta H^\\circ$ is strongly negative such that $|\\Delta H^\\circ| > E_{a,2}$, $E_{a,\\text{obs}}$ becomes negative.",
    "Hard",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The slope of $\\ln k$ vs $1/T$ is always $-E_a / R$.\\nReason (R): The slope is determined directly by differentiating the natural log form of the Arrhenius equation with respect to $(1/T)$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof: $\\frac{d(\\ln k)}{d(1/T)} = -\\frac{E_a}{R}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

module.exports = {
  getIntegratedRateEquationsQuestions,
  getRateOfReactionQuestions,
  getArrheniusPartAQuestions
};
