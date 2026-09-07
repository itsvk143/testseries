// Part 4: Authentic Questions for Chemical Kinetics - Rate of a chemical reaction
// MCQs (4 questions), Numericals (270 questions)

function createMCQ(qText, opts, correctIdx, exp, diff = "Medium") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: exp,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Chemical Kinetics",
    subTopic: "Rate of a chemical reaction",
    difficulty: diff,
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["NEET", "JEE Main"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function createNumerical(qText, ans, exp, diff = "Medium") {
  return {
    question: qText,
    options: [],
    correctAnswer: ans,
    explanation: exp,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Chemical Kinetics",
    subTopic: "Rate of a chemical reaction",
    difficulty: diff,
    questionType: "Numerical Value Question",
    type: "NUMERICAL",
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["JEE Main", "NEET"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function getRateOfChemicalReactionQuestions() {
  const q = [];
  q.push(createMCQ(
    "For the reaction $2\\text{A} + 3\\text{B} \\rightarrow 4\\text{C} + \\text{D}$, if the rate of formation of $\\text{C}$ is $0.08\\text{ mol L}^{-1}\\text{s}^{-1}$, what is the rate of disappearance of $\\text{B}$?",
    ["$0.06\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.08\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.12\\text{ mol L}^{-1}\\text{s}^{-1}$","$0.04\\text{ mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "From the stoichiometry of the reaction: $-\\frac{1}{3}\\frac{d[\\text{B}]}{dt} = \\frac{1}{4}\\frac{d[\\text{C}]}{dt}$. Therefore, $-\\frac{d[\\text{B}]}{dt} = \\frac{3}{4}\\frac{d[\\text{C}]}{dt} = \\frac{3}{4} \\times 0.08 = 0.06\\text{ mol L}^{-1}\\text{s}^{-1}$.",
    "Easy"
  ));
  q.push(createMCQ(
    "In the decomposition of gaseous $\\text{N}_2\\text{O}_5$: $2\\text{N}_2\\text{O}_5(g) \\rightarrow 4\\text{NO}_2(g) + \\text{O}_2(g)$, the rate of disappearance of $\\text{N}_2\\text{O}_5$ is $k_1[\\text{N}_2\\text{O}_5]$, the rate of formation of $\\text{NO}_2$ is $k_2[\\text{N}_2\\text{O}_5]$, and the rate of formation of $\\text{O}_2$ is $k_3[\\text{N}_2\\text{O}_5]$. What is the relation between $k_1, k_2$, and $k_3$?",
    ["$2k_1 = k_2 = 4k_3$","$k_1 = 2k_2 = 4k_3$","$k_1 = k_2 = k_3$","$4k_1 = 2k_2 = k_3$"],
    0,
    "The overall rate of reaction is $\\text{Rate} = -\\frac{1}{2}\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = \\frac{1}{4}\\frac{d[\\text{NO}_2]}{dt} = \\frac{d[\\text{O}_2]}{dt}$. Substituting the given expressions: $\\frac{1}{2} k_1 [\\text{N}_2\\text{O}_5] = \\frac{1}{4} k_2 [\\text{N}_2\\text{O}_5] = k_3 [\\text{N}_2\\text{O}_5]$. Multiplying by $4$ gives $2k_1 = k_2 = 4k_3$.",
    "Medium"
  ));
  q.push(createMCQ(
    "For the reaction $\\text{A}(g) + 2\\text{B}(g) \\rightarrow 3\\text{C}(g)$, if the partial pressure of $\\text{A}$ decreases at a rate of $0.05\\text{ bar s}^{-1}$, the rate of increase of the partial pressure of $\\text{C}$ is:",
    ["$0.15\\text{ bar s}^{-1}$","$0.05\\text{ bar s}^{-1}$","$0.10\\text{ bar s}^{-1}$","$0.025\\text{ bar s}^{-1}$"],
    0,
    "Stoichiometry gives $-\\frac{dp_A}{dt} = \\frac{1}{3}\\frac{dp_C}{dt}$. Thus $\\frac{dp_C}{dt} = 3 \\times \\left(-\\frac{dp_A}{dt}\\right) = 3 \\times 0.05 = 0.15\\text{ bar s}^{-1}$.",
    "Easy"
  ));
  q.push(createMCQ(
    "During the reaction $2\\text{X} \\rightarrow \\text{Y} + 3\\text{Z}$, the concentration of $\\text{X}$ decreases from $0.60\\text{ M}$ to $0.40\\text{ M}$ in $20\\text{ minutes}$. What is the average rate of formation of $\\text{Z}$ during this time?",
    ["$0.015\\text{ M min}^{-1}$","$0.010\\text{ M min}^{-1}$","$0.030\\text{ M min}^{-1}$","$0.005\\text{ M min}^{-1}$"],
    0,
    "Rate of disappearance of $\\text{X}$ is $-\\frac{\\Delta[\\text{X}]}{\\Delta t} = \\frac{0.60 - 0.40}{20} = \\frac{0.20}{20} = 0.010\\text{ M min}^{-1}$. From stoichiometry, $-\\frac{1}{2}\\frac{\\Delta[\\text{X}]}{\\Delta t} = \\frac{1}{3}\\frac{\\Delta[\\text{Z}]}{\\Delta t}$, so $\\frac{\\Delta[\\text{Z}]}{\\Delta t} = \\frac{3}{2}(0.010) = 0.015\\text{ M min}^{-1}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $10\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "30",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 10 = 30\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $20\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "80",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 20 = 80\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $30\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "60",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 30 = 60\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $40\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "120",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 40 = 120\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $50\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "200",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 50 = 200\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $60\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "120",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 60 = 120\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $70\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "210",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 70 = 210\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $80\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "320",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 80 = 320\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $90\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "180",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 90 = 180\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $100\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "300",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 100 = 300\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $110\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "440",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 110 = 440\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $120\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "240",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 120 = 240\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $130\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "390",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 130 = 390\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $140\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "560",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 140 = 560\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $150\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "300",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 150 = 300\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $160\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "480",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 160 = 480\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $170\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "680",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 170 = 680\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $180\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "360",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 180 = 360\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $190\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "570",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 190 = 570\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $200\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "800",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 200 = 800\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $210\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "420",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 210 = 420\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $220\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "660",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 220 = 660\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $230\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "920",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 230 = 920\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $240\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "480",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 240 = 480\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $250\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "750",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 250 = 750\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $260\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1040",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 260 = 1040\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $270\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "540",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 270 = 540\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $280\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "840",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 280 = 840\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $290\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1160",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 290 = 1160\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $300\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "600",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 300 = 600\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $310\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "930",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 310 = 930\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $320\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1280",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 320 = 1280\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $330\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "660",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 330 = 660\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $340\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "1020",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 340 = 1020\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $350\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1400",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 350 = 1400\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $360\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "720",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 360 = 720\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $370\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "1110",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 370 = 1110\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $380\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1520",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 380 = 1520\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $390\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "780",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 390 = 780\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $400\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "1200",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 400 = 1200\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $410\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1640",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 410 = 1640\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $420\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "840",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 420 = 840\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $430\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $87.5\\%$ complete?",
    "1290",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $87.5\\%$ completion, the remaining fraction is $12.5\\% = (1/2)^3$, requiring exactly $3$ half-lives. Total time $t = 3 \\times t_{1/2} = 3 \\times 430 = 1290\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $440\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $93.75\\%$ complete?",
    "1760",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $93.75\\%$ completion, the remaining fraction is $6.25\\% = (1/2)^4$, requiring exactly $4$ half-lives. Total time $t = 4 \\times t_{1/2} = 4 \\times 440 = 1760\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A first-order reaction has a half-life of $450\\text{ minutes}$. What is the time (in minutes) required for the reaction to be $75\\%$ complete?",
    "900",
    "For a first-order reaction, each half-life reduces the unreacted fraction by $50\\%$. To reach $75\\%$ completion, the remaining fraction is $25\\% = (1/2)^2$, requiring exactly $2$ half-lives. Total time $t = 2 \\times t_{1/2} = 2 \\times 450 = 900\\text{ minutes}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $0.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "10",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{0.2}{0.02} = 10\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $0.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "13",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{0.4}{0.03} = 13\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $0.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "15",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{0.6}{0.04} = 15\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $0.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "16",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{0.8}{0.05} = 16\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $1.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "100",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{1.0}{0.01} = 100\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $1.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "60",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{1.2}{0.02} = 60\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $1.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "47",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{1.4}{0.03} = 47\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $1.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "40",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{1.6}{0.04} = 40\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $1.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "36",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{1.8}{0.05} = 36\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $2.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "200",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{2.0}{0.01} = 200\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $2.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "110",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{2.2}{0.02} = 110\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $2.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "80",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{2.4}{0.03} = 80\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $2.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "65",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{2.6}{0.04} = 65\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $2.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "56",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{2.8}{0.05} = 56\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $3.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "300",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{3.0}{0.01} = 300\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $3.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "160",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{3.2}{0.02} = 160\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $3.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "113",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{3.4}{0.03} = 113\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $3.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "90",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{3.6}{0.04} = 90\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $3.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "76",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{3.8}{0.05} = 76\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $4.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "400",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{4.0}{0.01} = 400\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $4.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "210",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{4.2}{0.02} = 210\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $4.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "147",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{4.4}{0.03} = 147\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $4.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "115",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{4.6}{0.04} = 115\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $4.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "96",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{4.8}{0.05} = 96\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $5.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "500",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{5.0}{0.01} = 500\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $5.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "260",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{5.2}{0.02} = 260\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $5.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "180",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{5.4}{0.03} = 180\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $5.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "140",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{5.6}{0.04} = 140\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $5.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "116",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{5.8}{0.05} = 116\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $6.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "600",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{6.0}{0.01} = 600\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $6.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "310",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{6.2}{0.02} = 310\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $6.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "213",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{6.4}{0.03} = 213\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $6.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "165",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{6.6}{0.04} = 165\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $6.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "136",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{6.8}{0.05} = 136\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $7.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "700",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{7.0}{0.01} = 700\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $7.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "360",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{7.2}{0.02} = 360\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $7.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "247",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{7.4}{0.03} = 247\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $7.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "190",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{7.6}{0.04} = 190\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $7.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "156",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{7.8}{0.05} = 156\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $8.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "800",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{8.0}{0.01} = 800\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $8.2\\text{ mol L}^{-1}$ and rate constant $k = 0.02\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "410",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{8.2}{0.02} = 410\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $8.4\\text{ mol L}^{-1}$ and rate constant $k = 0.03\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "280",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{8.4}{0.03} = 280\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $8.6\\text{ mol L}^{-1}$ and rate constant $k = 0.04\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "215",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{8.6}{0.04} = 215\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $8.8\\text{ mol L}^{-1}$ and rate constant $k = 0.05\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "176",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{8.8}{0.05} = 176\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "A zero-order reaction has an initial reactant concentration of $9.0\\text{ mol L}^{-1}$ and rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$. Determine the time (in seconds) required for complete ($100\\%$) consumption of the reactant.",
    "900",
    "For a zero-order reaction, the integrated rate equation is $[A]_t = [A]_0 - kt$. At $100\\%$ completion, $[A]_t = 0 \\implies t_{100\\%} = \\frac{[A]_0}{k} = \\frac{9.0}{0.01} = 900\\text{ seconds}$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $330\\text{ K}$, by what factor will the rate of the reaction increase?",
    "8",
    "The temperature rise is $\\Delta T = 330 - 300 = 30\\text{ K} = 3 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{3} = 8$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $340\\text{ K}$, by what factor will the rate of the reaction increase?",
    "81",
    "The temperature rise is $\\Delta T = 340 - 300 = 40\\text{ K} = 4 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{4} = 81$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $2$. If the reaction temperature is raised from $300\\text{ K}$ to $310\\text{ K}$, by what factor will the rate of the reaction increase?",
    "2",
    "The temperature rise is $\\Delta T = 310 - 300 = 10\\text{ K} = 1 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 2^{1} = 2$.",
    "Easy"
  ));
  q.push(createNumerical(
    "The temperature coefficient of a reaction is $3$. If the reaction temperature is raised from $300\\text{ K}$ to $320\\text{ K}$, by what factor will the rate of the reaction increase?",
    "9",
    "The temperature rise is $\\Delta T = 320 - 300 = 20\\text{ K} = 2 \\times 10\\text{ K}$. The rate increases by a factor of $\\mu^{\\Delta T / 10} = 3^{2} = 9$.",
    "Easy"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.060 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.120 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.050\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "150",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.050 = 0.150\\text{ mol L}^{-1}\\text{s}^{-1} = 150 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 150$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "240",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.120 = 0.240\\text{ mol L}^{-1}\\text{s}^{-1} = 240 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 240$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "40",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.060 = 0.040\\text{ mol L}^{-1}\\text{s}^{-1} = 40 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 40$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.030\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "90",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.030 = 0.090\\text{ mol L}^{-1}\\text{s}^{-1} = 90 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 90$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.080\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "160",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.080 = 0.160\\text{ mol L}^{-1}\\text{s}^{-1} = 160 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 160$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.150\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "100",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.150 = 0.100\\text{ mol L}^{-1}\\text{s}^{-1} = 100 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 100$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "180",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.060 = 0.180\\text{ mol L}^{-1}\\text{s}^{-1} = 180 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 180$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.040 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.090\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.090 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.040 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.100\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "200",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.100 = 0.200\\text{ mol L}^{-1}\\text{s}^{-1} = 200 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 200$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.180\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.180 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.020\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.020 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.060 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.120 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.050\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "150",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.050 = 0.150\\text{ mol L}^{-1}\\text{s}^{-1} = 150 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 150$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "240",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.120 = 0.240\\text{ mol L}^{-1}\\text{s}^{-1} = 240 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 240$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "40",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.060 = 0.040\\text{ mol L}^{-1}\\text{s}^{-1} = 40 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 40$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.030\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "90",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.030 = 0.090\\text{ mol L}^{-1}\\text{s}^{-1} = 90 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 90$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.080\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "160",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.080 = 0.160\\text{ mol L}^{-1}\\text{s}^{-1} = 160 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 160$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.150\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "100",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.150 = 0.100\\text{ mol L}^{-1}\\text{s}^{-1} = 100 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 100$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "180",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.060 = 0.180\\text{ mol L}^{-1}\\text{s}^{-1} = 180 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 180$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.040 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.090\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.090 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.040 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.100\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "200",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.100 = 0.200\\text{ mol L}^{-1}\\text{s}^{-1} = 200 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 200$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.180\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.180 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.020\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.020 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.060 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.120 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.050\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "150",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.050 = 0.150\\text{ mol L}^{-1}\\text{s}^{-1} = 150 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 150$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.120\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "240",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.120 = 0.240\\text{ mol L}^{-1}\\text{s}^{-1} = 240 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 240$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "40",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.060 = 0.040\\text{ mol L}^{-1}\\text{s}^{-1} = 40 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 40$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.030\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "90",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.030 = 0.090\\text{ mol L}^{-1}\\text{s}^{-1} = 90 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 90$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.080\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "160",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.080 = 0.160\\text{ mol L}^{-1}\\text{s}^{-1} = 160 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 160$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.150\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "100",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.150 = 0.100\\text{ mol L}^{-1}\\text{s}^{-1} = 100 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 100$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.060\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "180",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.060 = 0.180\\text{ mol L}^{-1}\\text{s}^{-1} = 180 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 180$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "80",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.040 = 0.080\\text{ mol L}^{-1}\\text{s}^{-1} = 80 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 80$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.090\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.090 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.040\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.040 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $2A \\rightarrow 4B$, the rate of disappearance of $A$ is $0.100\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "200",
    "From stoichiometry: $-\\frac{1}{2}\\frac{d[A]}{dt} = \\frac{1}{4}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{4}{2}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{4}{2} \\times 0.100 = 0.200\\text{ mol L}^{-1}\\text{s}^{-1} = 200 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 200$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $3A \\rightarrow 2B$, the rate of disappearance of $A$ is $0.180\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "120",
    "From stoichiometry: $-\\frac{1}{3}\\frac{d[A]}{dt} = \\frac{1}{2}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{2}{3}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{2}{3} \\times 0.180 = 0.120\\text{ mol L}^{-1}\\text{s}^{-1} = 120 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 120$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For the reaction $1A \\rightarrow 3B$, the rate of disappearance of $A$ is $0.020\\text{ mol L}^{-1}\\text{s}^{-1}$. The rate of appearance of $B$ is $x \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Find the value of $x$.",
    "60",
    "From stoichiometry: $-\\frac{1}{1}\\frac{d[A]}{dt} = \\frac{1}{3}\\frac{d[B]}{dt}$. Therefore, $\\frac{d[B]}{dt} = \\frac{3}{1}\\left(-\\frac{d[A]}{dt}\\right) = \\frac{3}{1} \\times 0.020 = 0.060\\text{ mol L}^{-1}\\text{s}^{-1} = 60 \\times 10^{-3}\\text{ mol L}^{-1}\\text{s}^{-1}$. Hence $x = 60$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.2} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "22",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.3} = \\frac{1}{0.045} \\approx 22\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "12",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.4} = \\frac{1}{0.080} \\approx 12\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "40",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.5} = \\frac{1}{0.025} \\approx 40\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "100",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.1} = \\frac{1}{0.010} \\approx 100\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "33",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.2} = \\frac{1}{0.030} \\approx 33\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "17",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.3} = \\frac{1}{0.060} \\approx 17\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.4} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "20",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.5} = \\frac{1}{0.050} \\approx 20\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "67",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.1} = \\frac{1}{0.015} \\approx 67\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "25",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.2} = \\frac{1}{0.040} \\approx 25\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "67",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.3} = \\frac{1}{0.015} \\approx 67\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "25",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.4} = \\frac{1}{0.040} \\approx 25\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "13",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.5} = \\frac{1}{0.075} \\approx 13\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.1} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "100",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.2} = \\frac{1}{0.010} \\approx 100\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "33",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.3} = \\frac{1}{0.030} \\approx 33\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "17",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.4} = \\frac{1}{0.060} \\approx 17\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "10",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.5} = \\frac{1}{0.100} \\approx 10\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "200",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.1} = \\frac{1}{0.005} \\approx 200\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.2} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "22",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.3} = \\frac{1}{0.045} \\approx 22\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "12",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.4} = \\frac{1}{0.080} \\approx 12\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "40",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.5} = \\frac{1}{0.025} \\approx 40\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "100",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.1} = \\frac{1}{0.010} \\approx 100\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "33",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.2} = \\frac{1}{0.030} \\approx 33\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "17",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.3} = \\frac{1}{0.060} \\approx 17\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.4} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "20",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.5} = \\frac{1}{0.050} \\approx 20\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "67",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.1} = \\frac{1}{0.015} \\approx 67\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "25",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.2} = \\frac{1}{0.040} \\approx 25\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "67",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.3} = \\frac{1}{0.015} \\approx 67\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "25",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.4} = \\frac{1}{0.040} \\approx 25\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "13",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.5} = \\frac{1}{0.075} \\approx 13\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.1} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "100",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.2} = \\frac{1}{0.010} \\approx 100\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "33",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.3} = \\frac{1}{0.030} \\approx 33\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "17",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.4} = \\frac{1}{0.060} \\approx 17\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "10",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.5} = \\frac{1}{0.100} \\approx 10\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "200",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.1} = \\frac{1}{0.005} \\approx 200\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.2\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "50",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.2} = \\frac{1}{0.020} \\approx 50\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.3\\text{ M}$ and the rate constant is $k = 0.15\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "22",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.15 \\times 0.3} = \\frac{1}{0.045} \\approx 22\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.4\\text{ M}$ and the rate constant is $k = 0.20\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "12",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.20 \\times 0.4} = \\frac{1}{0.080} \\approx 12\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.5\\text{ M}$ and the rate constant is $k = 0.05\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "40",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.05 \\times 0.5} = \\frac{1}{0.025} \\approx 40\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "For a second-order reaction of type $2A \\rightarrow \\text{Products}$, the initial concentration is $[A]_0 = 0.1\\text{ M}$ and the rate constant is $k = 0.10\\text{ L mol}^{-1}\\text{s}^{-1}$. Calculate the half-life of the reaction in seconds (rounded to the nearest integer).",
    "100",
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$. Substituting the values: $t_{1/2} = \\frac{1}{0.10 \\times 0.1} = \\frac{1}{0.010} \\approx 100\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0020\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "1152",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0020} \\approx 1152\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0030\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "768",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0030} \\approx 768\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0040\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "576",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0040} \\approx 576\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0050\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "461",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0050} \\approx 461\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0060\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "384",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0060} \\approx 384\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0070\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "329",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0070} \\approx 329\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0080\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "288",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0080} \\approx 288\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0090\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "256",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0090} \\approx 256\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0010\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "2303",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0010} \\approx 2303\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0020\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "1152",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0020} \\approx 1152\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0030\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "768",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0030} \\approx 768\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0040\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "576",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0040} \\approx 576\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0050\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "461",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0050} \\approx 461\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0060\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "384",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0060} \\approx 384\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0070\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "329",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0070} \\approx 329\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0080\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "288",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0080} \\approx 288\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0090\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "256",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0090} \\approx 256\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0010\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "2303",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0010} \\approx 2303\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0020\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "1152",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0020} \\approx 1152\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0030\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "768",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0030} \\approx 768\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0040\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "576",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0040} \\approx 576\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0050\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "461",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0050} \\approx 461\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0060\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "384",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0060} \\approx 384\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0070\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "329",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0070} \\approx 329\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0080\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "288",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0080} \\approx 288\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0090\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "256",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0090} \\approx 256\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0010\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "2303",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0010} \\approx 2303\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0020\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "1152",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0020} \\approx 1152\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0030\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "768",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0030} \\approx 768\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0040\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "576",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0040} \\approx 576\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0050\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "461",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0050} \\approx 461\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0060\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "384",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0060} \\approx 384\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0070\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "329",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0070} \\approx 329\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0080\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "288",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0080} \\approx 288\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0090\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "256",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0090} \\approx 256\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0010\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "2303",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0010} \\approx 2303\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0020\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "1152",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0020} \\approx 1152\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0030\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "768",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0030} \\approx 768\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0040\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "576",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0040} \\approx 576\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0050\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "461",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0050} \\approx 461\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0060\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "384",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0060} \\approx 384\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0070\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "329",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0070} \\approx 329\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0080\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "288",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0080} \\approx 288\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0090\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "256",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0090} \\approx 256\\text{ seconds}$.",
    "Medium"
  ));
  q.push(createNumerical(
    "A first-order decomposition reaction has a rate constant of $k = 0.0010\\text{ s}^{-1}$. Calculate the time (in seconds) required for $90\\%$ of the reactant to decompose (rounded to the nearest integer).",
    "2303",
    "For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{0.0010} \\approx 2303\\text{ seconds}$.",
    "Medium"
  ));
  return q;
}

module.exports = {
  getRateOfChemicalReactionQuestions
};
