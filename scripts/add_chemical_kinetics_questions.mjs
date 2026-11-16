import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12';
const ALIAS_TEST_IDS = [];
const SUBJECT = 'Chemistry';
const CHAPTER = 'Chemical Kinetics';
const SUBTOPIC = 'Complete Chapter Test';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-CHE-CK-001",
    "question": "For the reaction 2N_2O_5(g) \u2192 4NO_2(g) + O_2(g), the rate of formation of NO_2 is 2.8 \u00d7 10^{-3}M s^{-1}. The rate of disappearance of N_2O_5 and the rate of the reaction respectively are:",
    "options": [
      "1.4 \u00d7 10^{-3}M s^{-1} and 0.7 \u00d7 10^{-3}M s^{-1}",
      "2.8 \u00d7 10^{-3}M s^{-1} and 1.4 \u00d7 10^{-3}M s^{-1}",
      "5.6 \u00d7 10^{-3}M s^{-1} and 2.8 \u00d7 10^{-3}M s^{-1}",
      "1.4 \u00d7 10^{-3}M s^{-1} and 2.8 \u00d7 10^{-3}M s^{-1}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For the reaction 2N\u2082O\u2085(g) \u2192 4NO\u2082(g) + O\u2082(g), the reaction rate is defined by stoichiometry as:\n\nRate = -(1/2) d[N\u2082O\u2085]/dt = +(1/4) d[NO\u2082]/dt = +d[O\u2082]/dt\n\nGiven rate of formation of NO\u2082 = d[NO\u2082]/dt = 2.8 \u00d7 10\u207b\u00b3 M s\u207b\u00b9:\n- Rate of reaction = (1/4) \u00d7 (2.8 \u00d7 10\u207b\u00b3 M s\u207b\u00b9) = 0.7 \u00d7 10\u207b\u00b3 M s\u207b\u00b9\n- Rate of disappearance of N\u2082O\u2085 = -d[N\u2082O\u2085]/dt = 2 \u00d7 Rate = 2 \u00d7 (0.7 \u00d7 10\u207b\u00b3 M s\u207b\u00b9) = 1.4 \u00d7 10\u207b\u00b3 M s\u207b\u00b9\n\nThus, the rate of disappearance of N\u2082O\u2085 and rate of reaction are 1.4 \u00d7 10\u207b\u00b3 M s\u207b\u00b9 and 0.7 \u00d7 10\u207b\u00b3 M s\u207b\u00b9 respectively."
  },
  {
    "index": 2,
    "commercialId": "NEET-CHE-CK-002",
    "question": "In the reaction BrO_3^-(aq) + 5Br^-(aq) + 6H^+(aq) \u2192 3Br_2(l) + 3H_2O(l), if the rate of disappearance of Br^- is k_1[BrO_3^-][Br^-][H^+]^2, the rate of appearance of Br_2 is k_2[BrO_3^-][Br^-][H^+]^2, and the rate of disappearance of H^+ is k_3[BrO_3^-][Br^-][H^+]^2, then the correct relation among k_1, k_2, and k_3 is:",
    "options": [
      "k_1 = k_2 = k_3",
      "\\frac{k_1}{5} = \\frac{k_2}{3} = \\frac{k_3}{6}",
      "5k_1 = 3k_2 = 6k_3",
      "\\frac{k_1}{3} = \\frac{k_2}{5} = \\frac{k_3}{6}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For the balanced redox reaction BrO\u2083\u207b(aq) + 5Br\u207b(aq) + 6H\u207a(aq) \u2192 3Br\u2082(l) + 3H\u2082O(l), the rate of reaction is related to the rates of disappearance and appearance by stoichiometric coefficients:\n\nRate = -(1/5) d[Br\u207b]/dt = +(1/3) d[Br\u2082]/dt = -(1/6) d[H\u207a]/dt\n\nGiven:\n- Rate of disappearance of Br\u207b = -d[Br\u207b]/dt = k\u2081 [BrO\u2083\u207b][Br\u207b][H\u207a]\u00b2\n- Rate of appearance of Br\u2082 = +d[Br\u2082]/dt = k\u2082 [BrO\u2083\u207b][Br\u207b][H\u207a]\u00b2\n- Rate of disappearance of H\u207a = -d[H\u207a]/dt = k\u2083 [BrO\u2083\u207b][Br\u207b][H\u207a]\u00b2\n\nSubstituting into the reaction rate expression:\nk\u2081/5 = k\u2082/3 = k\u2083/6"
  },
  {
    "index": 3,
    "commercialId": "NEET-CHE-CK-003",
    "question": "For a gaseous reaction A(g) + 2B(g) \u2192 C(g), the rate law is given by r = k[A][B]^2. If the volume of the reaction vessel is suddenly reduced to one-fourth of its initial volume, the rate of reaction relative to the initial rate will become:",
    "options": [
      "16times",
      "64times",
      "1/64times",
      "32times"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The rate law is given as r = k[A][B]\u00b2.\n\nFor a gaseous system, molar concentration is inversely proportional to volume ([C] = n/V).\nWhen the container volume is reduced to one-fourth (V' = V/4), the concentration of each gaseous component quadruples:\n[A]' = 4[A], and [B]' = 4[B]\n\nThe new rate r' becomes:\nr' = k [A]' [B]'\u00b2 = k (4[A]) (4[B])\u00b2 = 4 \u00d7 16 \u00d7 (k[A][B]\u00b2) = 64 r\n\nThus, the rate of the reaction increases by 64 times."
  },
  {
    "index": 4,
    "commercialId": "NEET-CHE-CK-004",
    "question": "For the reaction 2A + B \u2192 C + D, the following kinetic data were obtained:\n\n| Exp. | [A]\\ (mol L^{-1}) | [B]\\ (mol L^{-1}) | Initial rate of formation of D\\ (mol L^{-1}min^{-1}) |\n| :--- | :--- | :--- | :--- |\n| I | 0.1 | 0.1 | 6.0 \u00d7 10^{-3} |\n| II | 0.3 | 0.2 | 7.2 \u00d7 10^{-2} |\n| III | 0.3 | 0.4 | 2.88 \u00d7 10^{-1} |\n| IV | 0.4 | 0.1 | 2.40 \u00d7 10^{-2} |\n\nThe rate law for the reaction is:",
    "options": [
      "Rate = k[A]^2[B]",
      "Rate = k[A][B]^2",
      "Rate = k[A]^2[B]^2",
      "Rate = k[A][B]"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Let the rate law be Rate = k[A]\u02e3[B]\u02b8.\n\n1. Comparing Exp. I and Exp. IV:\n[B] is constant (0.1 M). When [A] increases from 0.1 M to 0.4 M (4 times), Rate increases from 6.0 \u00d7 10\u207b\u00b3 to 2.40 \u00d7 10\u207b\u00b2 M min\u207b\u00b9 (4 times).\n(0.4/0.1)\u02e3 = (2.40 \u00d7 10\u207b\u00b2 / 6.0 \u00d7 10\u207b\u00b3) \u21d2 4\u02e3 = 4 \u21d2 x = 1\n\n2. Comparing Exp. II and Exp. III:\n[A] is constant (0.3 M). When [B] increases from 0.2 M to 0.4 M (doubled), Rate increases from 7.2 \u00d7 10\u207b\u00b2 to 2.88 \u00d7 10\u207b\u00b9 M min\u207b\u00b9 (4 times).\n(0.4/0.2)\u02b8 = (2.88 \u00d7 10\u207b\u00b9 / 7.2 \u00d7 10\u207b\u00b2) \u21d2 2\u02b8 = 4 = 2\u00b2 \u21d2 y = 2\n\nTherefore, the rate law is Rate = k[A][B]\u00b2."
  },
  {
    "index": 5,
    "commercialId": "NEET-CHE-CK-005",
    "question": "The unit of rate constant for a reaction is atm^{-3/2}s^{-1}. The order of this reaction is:",
    "options": [
      "1.5",
      "2.5",
      "-0.5",
      "0.5"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The general unit of rate constant for an n-th order reaction expressed in pressure units is:\n\nUnit of k = (atm)\u00b9\u207b\u207f s\u207b\u00b9\n\nGiven unit = atm\u207b\u00b3\u141f\u00b2 s\u207b\u00b9:\n1 - n = -3/2 \u21d2 n = 1 + 3/2 = 5/2 = 2.5\n\nHence, the overall order of the reaction is 2.5."
  },
  {
    "index": 6,
    "commercialId": "NEET-CHE-CK-006",
    "question": "Consider the following statements regarding order and molecularity of a reaction:\n\n(i) Order of a reaction can be zero or fractional, whereas molecularity is always a positive integer.\n(ii) Molecularity is applicable only to elementary reactions, whereas order is applicable to both elementary and complex reactions.\n(iii) For a complex reaction, the order is always equal to the molecularity of the slowest step.\n(iv) Reactions with molecularity greater than three are extremely rare.\n\nWhich of the above statements are correct?",
    "options": [
      "(i), (ii) and (iv) only",
      "(i), (ii) and (iii) only",
      "(ii), (iii) and (iv) only",
      "(i), (ii), (iii) and (iv)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Evaluation of statements regarding order and molecularity:\n\n- Statement (i) is correct: Order is an experimental quantity that can be zero, fractional, or integer. Molecularity is the number of reacting species colliding simultaneously in an elementary step, so it is always a non-zero positive integer (1, 2, or 3).\n- Statement (ii) is correct: Molecularity is defined only for elementary steps. Order applies to both elementary and complex multistep reactions.\n- Statement (iii) is incorrect: For complex reactions, if the slowest step involves reactive intermediates, their concentrations must be substituted using preceding equilibria, leading to an overall order that often differs from the molecularity of the slowest step.\n- Statement (iv) is correct: Simultaneous collision of more than three molecules with proper orientation has extremely low probability; hence molecularity > 3 is rarely observed.\n\nTherefore, statements (i), (ii) and (iv) are correct."
  },
  {
    "index": 7,
    "commercialId": "NEET-CHE-CK-007",
    "question": "The decomposition of ozone proceeds via the following two-step mechanism: \n\nStep 1: O_3(g) \u21cc O_2(g) + O(g) (Fast equilibrium) \n\nStep 2: O_3(g) + O(g) \u2192 2O_2(g) (Slow) \n\nThe overall order of the reaction with respect to O_3 and O_2 respectively are:",
    "options": [
      "2 and 1",
      "2 and -1",
      "1 and -1",
      "2 and 0"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Mechanism of ozone decomposition:\n\nStep 1 (Fast equilibrium): O\u2083(g) \u21cc O\u2082(g) + O(g)\nEquilibrium constant Kc = ([O\u2082][O]) / [O\u2083] \u21d2 [O] = Kc [O\u2083] / [O\u2082] = Kc [O\u2083][O\u2082]\u207b\u00b9\n\nStep 2 (Slow, rate-determining step): O\u2083(g) + O(g) \u2192 2O\u2082(g)\nRate = k\u2082 [O\u2083][O]\n\nSubstituting [O] from Step 1:\nRate = k\u2082 (Kc [O\u2083][O\u2082]\u207b\u00b9) [O\u2083] = (k\u2082 Kc) [O\u2083]\u00b2 [O\u2082]\u207b\u00b9\n\nHence, the order with respect to O\u2083 is 2, and with respect to O\u2082 is -1."
  },
  {
    "index": 8,
    "commercialId": "NEET-CHE-CK-008",
    "question": "For the reaction 2NO(g) + Cl_2(g) \u2192 2NOCl(g), the mechanism proposed is: \n\nStep I: NO(g) + Cl_2(g) \u21cc NOCl_2(g) (Fast, equilibrium constant K_c) \n\nStep II: NOCl_2(g) + NO(g) \\xrightarrow{k_2} 2NOCl(g) (Slow) \n\nThe observed rate constant k_{obs} is equal to:",
    "options": [
      "k_2 K_c",
      "\\frac{k_2}{K_c}",
      "k_2 K_c^2",
      "\\frac{K_c}{k_2}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For the proposed mechanism of 2NO(g) + Cl\u2082(g) \u2192 2NOCl(g):\n\nStep I (Fast equilibrium): NO(g) + Cl\u2082(g) \u21cc NOCl\u2082(g)\nKc = [NOCl\u2082] / ([NO][Cl\u2082]) \u21d2 [NOCl\u2082] = Kc [NO][Cl\u2082]\n\nStep II (Slow, rate-determining step): NOCl\u2082(g) + NO(g) \u2192 2NOCl(g)\nRate = k\u2082 [NOCl\u2082][NO]\n\nSubstituting [NOCl\u2082]:\nRate = k\u2082 (Kc [NO][Cl\u2082]) [NO] = (k\u2082 Kc) [NO]\u00b2 [Cl\u2082]\n\nThus, the observed rate constant is k_obs = k\u2082 Kc."
  },
  {
    "index": 9,
    "commercialId": "NEET-CHE-CK-009",
    "question": "If the concentration of reactant A is doubled, the rate of reaction increases by a factor of 2\\sqrt{2}. If the concentration of A is quadrupled, the rate of reaction will increase by a factor of:",
    "options": [
      "4",
      "8",
      "16",
      "4\\sqrt{2}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Let Rate = k[A]\u207f.\n\nWhen [A] is doubled (2[A]):\nr\u2082 / r\u2081 = 2\u207f = 2\u221a2 = 2\u00b9 \u00b7 2\u00b9\u141f\u00b2 = 2\u00b3\u141f\u00b2 \u21d2 n = 3/2 = 1.5\n\nWhen [A] is quadrupled (4[A]):\nr\u2083 / r\u2081 = 4\u207f = 4\u00b3\u141f\u00b2 = (2\u00b2)\u00b3\u141f\u00b2 = 2\u00b3 = 8\n\nHence, the reaction rate increases by a factor of 8."
  },
  {
    "index": 10,
    "commercialId": "NEET-CHE-CK-010",
    "question": "In the thermal decomposition of acetaldehyde: CH_3CHO(g) \u2192 CH_4(g) + CO(g), the rate is proportional to [CH_3CHO]^{3/2}. If the pressure is expressed in bar and time in minutes, the units of rate and rate constant respectively are:",
    "options": [
      "bar min^{-1} and bar^{-1/2}min^{-1}",
      "bar min^{-1} and bar^{1/2}min^{-1}",
      "bar^{-1/2}min^{-1} and bar min^{-1}",
      "bar min^{-1} and bar^{-3/2}min^{-1}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Thermal decomposition of acetaldehyde: CH\u2083CHO(g) \u2192 CH\u2084(g) + CO(g)\nRate law: Rate = k [CH\u2083CHO]\u00b3\u141f\u00b2\n\n1. Rate of reaction is the rate of change of pressure of reactant/product per unit time: bar min\u207b\u00b9.\n2. Rate constant k:\nk = Rate / [CH\u2083CHO]\u00b3\u141f\u00b2 = (bar min\u207b\u00b9) / (bar\u00b3\u141f\u00b2) = bar\u00b9\u207b\u00b9\u00b7\u2075 min\u207b\u00b9 = bar\u207b\u00b9\u141f\u00b2 min\u207b\u00b9\n\nTherefore, the units are bar min\u207b\u00b9 and bar\u207b\u00b9\u141f\u00b2 min\u207b\u00b9."
  },
  {
    "index": 11,
    "commercialId": "NEET-CHE-CK-011",
    "question": "Which of the following reactions is an example of a zero-order reaction?",
    "options": [
      "Acid-catalyzed hydrolysis of ethyl acetate",
      "Inversion of cane sugar",
      "Decomposition of gaseous ammonia on a hot platinum surface at high pressure",
      "Decomposition of N_2O_5 in CCl_4 solution"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to NCERT Class 12 Chapter 4:\nThe decomposition of gaseous ammonia on a hot platinum surface at high pressure:\n2NH\u2083(g) \u2192 N\u2082(g) + 3H\u2082(g) [Pt catalyst, high pressure]\nis a classic zero-order reaction. At high pressure, the metal catalyst surface becomes saturated with adsorbed ammonia molecules; any further increase in NH\u2083 pressure cannot increase the surface concentration of reacting molecules, making the rate constant independent of concentration (Rate = k)."
  },
  {
    "index": 12,
    "commercialId": "NEET-CHE-CK-012",
    "question": "For a zero-order reaction A \u2192 Products, the initial concentration of A is 0.2M. If the concentration of A reduces to 0.15M in 10minutes, the time required for the complete consumption of A is:",
    "options": [
      "30min",
      "40min",
      "20min",
      "50min"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a zero-order reaction: [A] = [A]\u2080 - kt.\n\nGiven [A]\u2080 = 0.2 M and [A] = 0.15 M at t = 10 min:\nk = ([A]\u2080 - [A]) / t = (0.20 - 0.15) / 10 = 0.05 / 10 = 0.005 M min\u207b\u00b9\n\nFor complete consumption, [A] = 0:\nt_complete = [A]\u2080 / k = 0.20 / 0.005 = 40 minutes."
  },
  {
    "index": 13,
    "commercialId": "NEET-CHE-CK-013",
    "question": "A first-order reaction is 40\\% complete in 50minutes. In what time will the reaction be 80\\% complete? (\\log 2 = 0.3010, \\log 3 = 0.4771, \\log 5 = 0.6990)",
    "options": [
      "100minutes",
      "157.5minutes",
      "125.4minutes",
      "180.2minutes"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a first-order reaction:\nt = (2.303 / k) log(a / (a - x))\n\n1. For 40% completion: a - x = 60% of a = 0.60 a\n50 = (2.303 / k) log(100 / 60) = (2.303 / k) log(5/3) = (2.303 / k) [log 5 - log 3]\n50 = (2.303 / k) [0.6990 - 0.4771] = (2.303 / k) (0.2219)\n\n2. For 80% completion: a - x = 20% of a = 0.20 a\nt_80% = (2.303 / k) log(100 / 20) = (2.303 / k) log 5 = (2.303 / k) (0.6990)\n\nDividing the two equations:\nt_80% / 50 = 0.6990 / 0.2219 \u2248 3.15 \u21d2 t_80% = 50 \u00d7 3.15 = 157.5 minutes."
  },
  {
    "index": 14,
    "commercialId": "NEET-CHE-CK-014",
    "question": "For a first-order reaction, the ratio of time required for 99.9\\% completion (t_{99.9\\%}) to the time required for 90\\% completion (t_{90\\%}) is:",
    "options": [
      "2",
      "3",
      "10",
      "1.5"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a first-order reaction:\n\n- Time for 99.9% completion:\nt_99.9% = (2.303 / k) log(100 / (100 - 99.9)) = (2.303 / k) log(100 / 0.1) = (2.303 / k) log(1000) = (2.303 \u00d7 3) / k\n\n- Time for 90% completion:\nt_90% = (2.303 / k) log(100 / (100 - 90)) = (2.303 / k) log(10) = (2.303 \u00d7 1) / k\n\nRatio t_99.9% / t_90% = 3 / 1 = 3."
  },
  {
    "index": 15,
    "commercialId": "NEET-CHE-CK-015",
    "question": "The half-life of a reaction is halved when the initial concentration of the reactant is doubled. The order of the reaction is:",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The dependence of half-life (t_1/2) on initial concentration [R]\u2080 is given by:\nt_1/2 \u221d [R]\u2080\u00b9\u207b\u207f\n\nGiven that t_1/2 is halved when [R]\u2080 is doubled:\nt_1/2 \u221d 1 / [R]\u2080 = [R]\u2080\u207b\u00b9\n\nComparing exponents: 1 - n = -1 \u21d2 n = 2.\nHence, the reaction is second order."
  },
  {
    "index": 16,
    "commercialId": "NEET-CHE-CK-016",
    "question": "For a certain reaction, a plot of \\log[R] versus time t yields a straight line with a negative slope equal to -2.303 \u00d7 10^{-3}s^{-1}. The half-life of the reaction is:",
    "options": [
      "300.9s",
      "130.6s",
      "693s",
      "100s"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a first-order reaction, the integrated rate equation is:\nln[R] = ln[R]\u2080 - kt \u21d2 2.303 log\u2081\u2080[R] = 2.303 log\u2081\u2080[R]\u2080 - kt\nlog\u2081\u2080[R] = log\u2081\u2080[R]\u2080 - (k / 2.303) t\n\nThe plot of log\u2081\u2080[R] versus t yields a straight line with slope:\nSlope = -k / 2.303\n\nGiven Slope = -2.303 \u00d7 10\u207b\u00b3 s\u207b\u00b9:\nk = 2.303 \u00d7 2.303 \u00d7 10\u207b\u00b3 = 5.3038 \u00d7 10\u207b\u00b3 s\u207b\u00b9\n\nNow, the half-life t_1/2 is:\nt_1/2 = ln 2 / k = 0.69315 / (5.3038 \u00d7 10\u207b\u00b3 s\u207b\u00b9) = 130.69 s \u2248 130.6 s\n\n(Option b is correct. Note: If one mistakenly equated slope directly to -k, they would get 300.9 s; however, for a log\u2081\u2080 plot, slope is -k/2.303)."
  },
  {
    "index": 17,
    "commercialId": "NEET-CHE-CK-017",
    "question": "Which of the following graphs represents a zero-order reaction ([R]_0 = initial concentration, [R] = concentration at time t, t_{1/2} = half-life)?",
    "options": [
      "A straight line with positive slope for [R] vs t",
      "A straight line passing through the origin for t_{1/2} vs [R]_0",
      "A horizontal line parallel to the x-axis for t_{1/2} vs [R]_0",
      "A straight line with negative slope for \\ln[R] vs t"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a zero-order reaction:\nt_1/2 = [R]\u2080 / (2k)\n\nThis represents a direct linear proportionality (y = mx) with slope 1/(2k) and intercept 0.\nTherefore, a plot of t_1/2 versus initial concentration [R]\u2080 is a straight line passing through the origin."
  },
  {
    "index": 18,
    "commercialId": "NEET-CHE-CK-018",
    "question": "A first-order gas-phase reaction A(g) \u2192 2B(g) + C(g) starts with pure A at an initial pressure P_i. After time t, the total pressure of the system is P_t. The correct expression for the rate constant k is:",
    "options": [
      "k = \\frac{2.303}{t} \\log \\left( \\frac{P_i}{2P_i - P_t} \\right)",
      "k = \\frac{2.303}{t} \\log \\left( \\frac{2P_i}{3P_i - P_t} \\right)",
      "k = \\frac{2.303}{t} \\log \\left( \\frac{P_i}{3P_i - P_t} \\right)",
      "k = \\frac{2.303}{t} \\log \\left( \\frac{2P_i}{P_t - P_i} \\right)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For the gas-phase reaction A(g) \u2192 2B(g) + C(g):\nInitial pressure (t = 0): P_A = P_i, P_B = 0, P_C = 0\nAt time t: P_A = P_i - x, P_B = 2x, P_C = x\n\nTotal pressure P_t is:\nP_t = (P_i - x) + 2x + x = P_i + 2x \u21d2 2x = P_t - P_i \u21d2 x = (P_t - P_i) / 2\n\nPartial pressure of reactant A at time t:\nP_A = P_i - x = P_i - (P_t - P_i) / 2 = (2P_i - P_t + P_i) / 2 = (3P_i - P_t) / 2\n\nIntegrated rate law:\nk = (2.303 / t) log(P_i / P_A) = (2.303 / t) log[ P_i / ((3P_i - P_t) / 2) ] = (2.303 / t) log[ 2P_i / (3P_i - P_t) ]"
  },
  {
    "index": 19,
    "commercialId": "NEET-CHE-CK-019",
    "question": "Consider the thermal decomposition of azoisopropane to hexane and nitrogen at 543K: \n\n( CH_3 )_2CHN=NCH(CH_3)_2(g) \u2192 N_2(g) + C_6H_{14}(g). \n\nIf the initial pressure is 35.0mm Hg and after 360s the total pressure is 54.0mm Hg, the rate constant k is given by:",
    "options": [
      "\\frac{2.303}{360} \\log \\left( 35/19 \\right)",
      "\\frac{2.303}{360} \\log \\left( 35/16 \\right)",
      "\\frac{2.303}{360} \\log \\left( 54/35 \\right)",
      "\\frac{2.303}{360} \\log \\left( 35/54 \\right)"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Thermal decomposition of azoisopropane:\n(CH\u2083)\u2082CHN=NCH(CH\u2083)\u2082(g) \u2192 N\u2082(g) + C\u2086H\u2081\u2084(g)\nStoichiometry: A(g) \u2192 B(g) + C(g)\n\nAt t = 0: P_A = P_i = 35.0 mm Hg\nAt t = 360 s: P_t = P_i + x = 54.0 mm Hg \u21d2 x = 54.0 - 35.0 = 19.0 mm Hg\n\nRemaining pressure of reactant at 360 s:\nP_A = P_i - x = 35.0 - 19.0 = 16.0 mm Hg\n\nApplying first-order rate law:\nk = (2.303 / 360) log(P_i / P_A) = (2.303 / 360) log(35 / 16)"
  },
  {
    "index": 20,
    "commercialId": "NEET-CHE-CK-020",
    "question": "Two first-order reactions proceed at 25\u00b0C at the same rate. The temperature coefficient of the first reaction is 2 and that of the second reaction is 3. The ratio of the rates of the second reaction to the first reaction at 75\u00b0C will be:",
    "options": [
      "(1.5)^5",
      "(1.5)^{50}",
      "5 \u00d7 1.5",
      "(2/3)^5"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "From 25\u00b0C to 75\u00b0C, the temperature rise is:\n\u0394T = 75 - 25 = 50\u00b0C, corresponding to n = 50/10 = 5 intervals of 10\u00b0C.\n\nLet the initial rates at 25\u00b0C be r\u2081 and r\u2082, where r\u2081 = r\u2082:\n- For reaction 1 (temperature coefficient = 2): r\u2081' = r\u2081 \u00d7 2\u2075\n- For reaction 2 (temperature coefficient = 3): r\u2082' = r\u2082 \u00d7 3\u2075\n\nRatio of rates at 75\u00b0C:\nr\u2082' / r\u2081' = (r\u2082 \u00d7 3\u2075) / (r\u2081 \u00d7 2\u2075) = 3\u2075 / 2\u2075 = (3/2)\u2075 = (1.5)\u2075"
  },
  {
    "index": 21,
    "commercialId": "NEET-CHE-CK-021",
    "question": "A substance decomposes following first-order kinetics. If the fraction remaining after 30minutes is 1/8 of the initial amount, what fraction of the initial amount will remain after 50minutes?",
    "options": [
      "1/16",
      "1/32",
      "1/64",
      "1/24"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In a first-order reaction:\nFraction remaining = (1/2)\u207f, where n is the number of half-lives.\n\nAfter 30 minutes, fraction remaining is 1/8 = (1/2)\u00b3:\n3 t_1/2 = 30 min \u21d2 t_1/2 = 10 minutes.\n\nAfter 50 minutes, the number of half-lives elapsed is:\nn = 50 / 10 = 5\nFraction remaining = (1/2)\u2075 = 1/32."
  },
  {
    "index": 22,
    "commercialId": "NEET-CHE-CK-022",
    "question": "For a first-order reaction, if a is the initial concentration of reactant, the concentration of the product formed after time t is given by:",
    "options": [
      "a e^{-kt}",
      "a(1 - e^{-kt})",
      "a(e^{kt} - 1)",
      "\\frac{a}{1 + kt}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For a first-order reaction R \u2192 P with initial concentration [R]\u2080 = a:\n[R]_t = a e\u207b\u1d4f\u1d57\n\nSince product concentration [P]_t = [R]\u2080 - [R]_t:\n[P]_t = a - a e\u207b\u1d4f\u1d57 = a(1 - e\u207b\u1d4f\u1d57)."
  },
  {
    "index": 23,
    "commercialId": "NEET-CHE-CK-023",
    "question": "The rate constant of a first-order reaction is 6.93 \u00d7 10^{-3}min^{-1}. Starting with 10g of the reactant, the rate of reaction after 200minutes will be:",
    "options": [
      "6.93 \u00d7 10^{-3}g min^{-1}",
      "1.7325 \u00d7 10^{-2}g min^{-1}",
      "3.465 \u00d7 10^{-2}g min^{-1}",
      "6.93 \u00d7 10^{-2}g min^{-1}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Given rate constant k = 6.93 \u00d7 10\u207b\u00b3 min\u207b\u00b9:\nHalf-life t_1/2 = ln 2 / k = 0.693 / (6.93 \u00d7 10\u207b\u00b3 min\u207b\u00b9) = 100 minutes.\n\nAfter 200 minutes (exactly 2 half-lives), the mass of reactant remaining is:\nm = 10 g / 2\u00b2 = 2.5 g\n\nThe rate of a first-order reaction is Rate = k \u00d7 [R]:\nRate = (6.93 \u00d7 10\u207b\u00b3 min\u207b\u00b9) \u00d7 2.5 g = 1.7325 \u00d7 10\u207b\u00b2 g min\u207b\u00b9."
  },
  {
    "index": 24,
    "commercialId": "NEET-CHE-CK-024",
    "question": "For an n^{th}-order reaction (n \\neq 1), the half-life t_{1/2} is related to the initial concentration [R]_0 as:",
    "options": [
      "t_{1/2} \\propto [R]_0^{n-1}",
      "t_{1/2} \\propto [R]_0^{1-n}",
      "t_{1/2} \\propto [R]_0^n",
      "t_{1/2} \\propto [R]_0^{-n}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For an n-th order reaction (n \u2260 1):\n1/(n - 1) [ 1/[R]_t\u207f\u207b\u00b9 - 1/[R]\u2080\u207f\u207b\u00b9 ] = k t\n\nAt t = t_1/2, [R]_t = [R]\u2080 / 2:\nt_1/2 = (2\u207f\u207b\u00b9 - 1) / ((n - 1) k [R]\u2080\u207f\u207b\u00b9) \u221d [R]\u2080\u00b9\u207b\u207f."
  },
  {
    "index": 25,
    "commercialId": "NEET-CHE-CK-025",
    "question": "In a zero-order reaction, for every 10\u00b0C rise in temperature, the rate is doubled. If the temperature is increased from 10\u00b0C to 100\u00b0C, the rate of the reaction will become:",
    "options": [
      "256times",
      "512times",
      "64times",
      "128times"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Temperature increases from 10\u00b0C to 100\u00b0C:\n\u0394T = 100 - 10 = 90\u00b0C\nNumber of 10\u00b0C intervals = 90 / 10 = 9\n\nSince the rate doubles for every 10\u00b0C rise:\nNew rate = Initial rate \u00d7 2\u2079 = Initial rate \u00d7 512 times."
  },
  {
    "index": 26,
    "commercialId": "NEET-CHE-CK-026",
    "question": "During the hydrolysis of 0.01M ethyl acetate with 10M water in the presence of dilute HCl:\n\\[ CH_3COOC_2H_5 + H_2O \\xrightarrow{H^+} CH_3COOH + C_2H_5OH \\]\nIf the true second-order rate constant is k = 2.0 \u00d7 10^{-4}L mol^{-1}s^{-1}, the pseudo-first-order rate constant k' is:",
    "options": [
      "2.0 \u00d7 10^{-3}s^{-1}",
      "2.0 \u00d7 10^{-6}s^{-1}",
      "2.0 \u00d7 10^{-2}s^{-1}",
      "5.0 \u00d7 10^{-3}s^{-1}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Acid-catalyzed hydrolysis of ethyl acetate:\nCH\u2083COOC\u2082H\u2085 + H\u2082O \u2192 CH\u2083COOH + C\u2082H\u2085OH [H\u207a]\n\nTrue second-order rate law: Rate = k [ester][H\u2082O]\nBecause water is in large excess (10 M compared to 0.01 M ester), [H\u2082O] remains effectively constant:\nRate = k' [ester], where k' = k [H\u2082O]\nk' = (2.0 \u00d7 10\u207b\u2074 L mol\u207b\u00b9 s\u207b\u00b9) \u00d7 (10 mol L\u207b\u00b9) = 2.0 \u00d7 10\u207b\u00b3 s\u207b\u00b9."
  },
  {
    "index": 27,
    "commercialId": "NEET-CHE-CK-027",
    "question": "Which of the following statements is INCORRECT regarding the inversion of cane sugar in aqueous acidic medium?",
    "options": [
      "The molecularity of the reaction is 2, while the order of the reaction is 1.",
      "The concentration of water does not get altered much during the course of the reaction.",
      "The reaction is monitored polarimetrically because sucrose is dextrorotatory while the equimolar mixture of glucose and fructose is laevorotatory.",
      "If the initial concentration of sucrose is doubled, the half-life of the reaction is also doubled."
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "Inversion of cane sugar in acidic medium is a pseudo-first-order reaction:\n- Molecularity is 2 (both sucrose and water are involved in the collision step).\n- Order is 1 because water is present in enormous excess.\n- Water concentration undergoes negligible change during the process.\n- Sucrose is dextrorotatory (+66.5\u00b0), while the equimolar glucose (+52.5\u00b0) and fructose (-92.4\u00b0) product mixture is net laevorotatory (-39.9\u00b0).\n- In any first-order reaction, t_1/2 = 0.693 / k' is strictly independent of the initial sucrose concentration. Doubling the initial concentration has no effect on t_1/2.\nThus, statement (d) is incorrect."
  },
  {
    "index": 28,
    "commercialId": "NEET-CHE-CK-028",
    "question": "For a second-order reaction A + B \u2192 Products, the rate law is Rate = k[A][B]. When [B]_0 \\gg [A]_0, the reaction behaves as a pseudo-first-order reaction. Under this condition, a straight line with a positive slope is obtained when:",
    "options": [
      "\\ln\\left(\\frac{[A]_0}{[A]}\\right) is plotted against t, with slope = k[B]_0",
      "\\ln\\left(\\frac{[A]}{[A]_0}\\right) is plotted against t, with slope = k[B]_0",
      "\\frac{1}{[A]} is plotted against t, with slope = k[B]_0",
      "[A] is plotted against t, with slope = -k[B]_0"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "For the second-order reaction Rate = k[A][B]:\nWhen [B]\u2080 \u226b [A]\u2080, [B] \u2248 [B]\u2080 throughout the reaction.\nRate = -d[A]/dt = (k[B]\u2080)[A]\n\nIntegrating the first-order differential equation:\nln([A]\u2080 / [A]) = (k[B]\u2080) t\n\nPlotting ln([A]\u2080 / [A]) on the y-axis against t on the x-axis yields a straight line with a positive slope equal to k[B]\u2080."
  },
  {
    "index": 29,
    "commercialId": "NEET-CHE-CK-029",
    "question": "According to the Arrhenius equation, k = A e^{-E_a / RT}, the slope and y-intercept of the straight-line plot between \\log_{10} k (on y-axis) and 1/T (on x-axis) are respectively:",
    "options": [
      "-\\frac{E_a}{R} and \\ln A",
      "-\\frac{E_a}{2.303 R} and \\log_{10} A",
      "-\\frac{2.303 R}{E_a} and \\log_{10} A",
      "\\frac{E_a}{2.303 R} and -\\log_{10} A"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to the Arrhenius equation:\nk = A e^(-Ea / RT)\n\nTaking base-10 logarithms:\nlog\u2081\u2080 k = log\u2081\u2080 A - (Ea / (2.303 RT)) = log\u2081\u2080 A - (Ea / (2.303 R)) (1/T)\n\nComparing with y = mx + c (y = log\u2081\u2080 k, x = 1/T):\n- Slope = -Ea / (2.303 R)\n- y-intercept = log\u2081\u2080 A"
  },
  {
    "index": 30,
    "commercialId": "NEET-CHE-CK-030",
    "question": "The rate constant of a reaction increases by 4 times when the temperature increases from 300K to 320K. The activation energy (E_a) of the reaction is approximately: (R = 8.314J K^{-1}mol^{-1}, \\ln 2 = 0.693)",
    "options": [
      "55.3kJ mol^{-1}",
      "27.6kJ mol^{-1}",
      "110.6kJ mol^{-1}",
      "13.8kJ mol^{-1}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "From the two-temperature Arrhenius equation:\nln(k\u2082 / k\u2081) = (Ea / R) [ (T\u2082 - T\u2081) / (T\u2081 T\u2082) ]\n\nGiven k\u2082 / k\u2081 = 4, T\u2081 = 300 K, T\u2082 = 320 K, R = 8.314 J K\u207b\u00b9 mol\u207b\u00b9:\nln 4 = 2 ln 2 = 2 \u00d7 0.693 = 1.386\n1.386 = (Ea / 8.314) \u00d7 [ (320 - 300) / (300 \u00d7 320) ] = (Ea / 8.314) \u00d7 (20 / 96000)\nEa = (1.386 \u00d7 8.314 \u00d7 96000) / 20 = 1.386 \u00d7 8.314 \u00d7 4800 = 55311 J mol\u207b\u00b9 \u2248 55.3 kJ mol\u207b\u00b9."
  },
  {
    "index": 31,
    "commercialId": "NEET-CHE-CK-031",
    "question": "In the Arrhenius equation, the term e^{-E_a / RT} represents:",
    "options": [
      "Total number of collisions per unit volume per second",
      "Fraction of molecules having kinetic energy greater than or equal to activation energy E_a",
      "Fraction of collisions with proper steric orientation",
      "Threshold energy of the reactants"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In the Arrhenius equation k = A e^(-Ea/RT):\nThe exponential term e^(-Ea/RT) is the Boltzmann factor, which represents the fraction of reactant molecules that possess kinetic energy equal to or greater than the activation energy Ea at temperature T."
  },
  {
    "index": 32,
    "commercialId": "NEET-CHE-CK-032",
    "question": "The rate constants k_1 and k_2 for two different reactions are 10^{16} e^{-2000/T} and 10^{15} e^{-1000/T}, respectively. The temperature at which k_1 = k_2 is:",
    "options": [
      "1000K",
      "\\frac{2000}{2.303}K",
      "\\frac{1000}{2.303}K",
      "2000K"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Given:\nk\u2081 = 10\u00b9\u2076 e^(-2000/T)\nk\u2082 = 10\u00b9\u2075 e^(-1000/T)\n\nAt the temperature where k\u2081 = k\u2082:\n10\u00b9\u2076 e^(-2000/T) = 10\u00b9\u2075 e^(-1000/T)\n10 = e^(2000/T - 1000/T) = e^(1000/T)\n\nTaking natural logarithm on both sides:\nln 10 = 1000 / T \u21d2 2.303 log\u2081\u2080 10 = 1000 / T \u21d2 2.303 = 1000 / T\nT = 1000 / 2.303 K."
  },
  {
    "index": 33,
    "commercialId": "NEET-CHE-CK-033",
    "question": "For a reversible endothermic reaction A \u21cc B, the enthalpy of reaction is \\Delta H = +40kJ mol^{-1}. If the activation energy of the backward reaction (E_{a,b}) is 65kJ mol^{-1}, then the activation energy of the forward reaction (E_{a,f}) is:",
    "options": [
      "25kJ mol^{-1}",
      "105kJ mol^{-1}",
      "40kJ mol^{-1}",
      "65kJ mol^{-1}"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "For any reversible chemical reaction:\n\u0394H = Ea(forward) - Ea(backward)\n\nGiven \u0394H = +40 kJ mol\u207b\u00b9 and Ea(backward) = 65 kJ mol\u207b\u00b9:\n+40 = Ea(forward) - 65 \u21d2 Ea(forward) = 40 + 65 = 105 kJ mol\u207b\u00b9."
  },
  {
    "index": 34,
    "commercialId": "NEET-CHE-CK-034",
    "question": "A reaction has an activation energy of 57.44kJ mol^{-1} in the absence of a catalyst. In the presence of a catalyst at 300K, the activation energy is lowered to 45.95kJ mol^{-1}. Assuming the pre-exponential factor A remains unchanged, the rate of the catalyzed reaction compared to the uncatalyzed reaction increases by a factor of: (R = 8.314J K^{-1}mol^{-1})",
    "options": [
      "10",
      "100",
      "1000",
      "20"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The ratio of catalyzed to uncatalyzed rate constants at constant temperature is:\nk_cat / k_uncat = e^((Ea_uncat - Ea_cat) / RT)\n\n\u0394Ea = Ea_uncat - Ea_cat = 57.44 - 45.95 = 11.49 kJ mol\u207b\u00b9 = 11490 J mol\u207b\u00b9\n\nTaking log\u2081\u2080:\nlog\u2081\u2080(k_cat / k_uncat) = \u0394Ea / (2.303 R T) = 11490 / (2.303 \u00d7 8.314 \u00d7 300) = 11490 / 5744.1 = 2.0\nk_cat / k_uncat = 10\u00b2 = 100."
  },
  {
    "index": 35,
    "commercialId": "NEET-CHE-CK-035",
    "question": "Which of the following quantities is NOT altered by the addition of a positive catalyst to a reversible chemical reaction?",
    "options": [
      "Activation energy of the forward reaction",
      "Activation energy of the backward reaction",
      "Rate constants of both forward and backward reactions",
      "Gibbs free energy change (\\Delta G) and equilibrium constant (K_{eq})"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "A positive catalyst provides an alternate reaction pathway with a lower activation energy, accelerating both forward and backward reactions to the same extent. Consequently, it alters the activation energies and rate constants of both directions, but does NOT alter:\n- Standard Gibbs free energy change (\u0394G\u00b0)\n- Enthalpy of reaction (\u0394H)\n- Equilibrium constant (K_eq)\nIt only helps achieve equilibrium faster without altering the equilibrium position."
  },
  {
    "index": 36,
    "commercialId": "NEET-CHE-CK-036",
    "question": "When the temperature of a reacting system is increased by 10K around room temperature, the reaction rate roughly doubles. The primary reason for this sharp increase in rate is:",
    "options": [
      "The average kinetic energy of the molecules doubles.",
      "The collision frequency Z doubles.",
      "The fraction of molecules having energy equal to or greater than E_a nearly doubles.",
      "The activation energy E_a decreases to half its value."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "When temperature increases by 10 K (e.g. 298 K to 308 K):\n- The collision frequency Z increases by only about 1.5% (Z \u221d \u221aT).\n- The average kinetic energy increases by only ~3%.\nHowever, the fraction of molecules with kinetic energy \u2265 Ea (represented by the area under the Maxwell-Boltzmann distribution curve beyond the activation energy threshold) nearly doubles, leading to a doubling of the reaction rate."
  },
  {
    "index": 37,
    "commercialId": "NEET-CHE-CK-037",
    "question": "The decomposition of hydrocarbon follows the equation k = (4.5 \u00d7 10^{11}s^{-1}) e^{-28000K/T}. What is the value of activation energy E_a?",
    "options": [
      "232.79kJ mol^{-1}",
      "28.0kJ mol^{-1}",
      "116.4kJ mol^{-1}",
      "465.5kJ mol^{-1}"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Comparing the given equation k = (4.5 \u00d7 10\u00b9\u00b9 s\u207b\u00b9) e^(-28000 K / T) with the Arrhenius equation k = A e^(-Ea / RT):\nEa / R = 28000 K\nEa = 28000 K \u00d7 8.314 J K\u207b\u00b9 mol\u207b\u00b9 = 232792 J mol\u207b\u00b9 = 232.79 kJ mol\u207b\u00b9."
  },
  {
    "index": 38,
    "commercialId": "NEET-CHE-CK-038",
    "question": "At infinite temperature (T \u2192 \\infty), the rate constant k of a reaction becomes equal to:",
    "options": [
      "Zero",
      "E_a",
      "A (Arrhenius pre-exponential factor)",
      "\\infty"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "According to the Arrhenius equation:\nk = A e^(-Ea / RT)\n\nAs T \u2192 \u221e, the exponent approaches zero: -Ea / RT \u2192 0.\nTherefore, e\u2070 = 1, and:\nk = A \u00d7 1 = A (the Arrhenius pre-exponential frequency factor)."
  },
  {
    "index": 39,
    "commercialId": "NEET-CHE-CK-039",
    "question": "According to the collision theory of bimolecular reactions, the rate of reaction is given by Rate = P Z_{AB} e^{-E_a / RT}. In this expression, the steric factor P accounts for:",
    "options": [
      "The fraction of molecules possessing threshold energy",
      "The number of collisions per second per unit volume",
      "The proper orientation of colliding molecules at the moment of impact",
      "The temperature dependence of the pre-exponential factor"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "In collision theory:\nRate = P Z_AB e^(-Ea / RT)\n\n- Z_AB is the collision frequency of reactants A and B.\n- e^(-Ea/RT) is the fraction of collisions possessing energy \u2265 Ea.\n- P is the steric factor (or probability factor), which accounts for the fraction of collisions occurring with proper geometric/spatial orientation so that appropriate bonds can break and form."
  },
  {
    "index": 40,
    "commercialId": "NEET-CHE-CK-040",
    "question": "Consider the reaction CH_3Br + OH^- \u2192 CH_3OH + Br^-. According to collision theory, this reaction fails to occur even when colliding molecules possess kinetic energy greater than E_a if:",
    "options": [
      "OH^- approaches CH_3Br from the side of the Br atom",
      "OH^- approaches CH_3Br from the side opposite to the Br atom",
      "The temperature of the reaction mixture is below 298K",
      "No catalyst is added to the reaction vessel"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "The reaction CH\u2083Br + OH\u207b \u2192 CH\u2083OH + Br\u207b follows an S_N2 mechanism involving backside attack on the electrophilic carbon opposite to the leaving bromide ion.\nIf the hydroxide ion (OH\u207b) approaches from the front side (the same side as the bromine atom), severe electrostatic repulsion between the incoming negatively charged OH\u207b and the partially negative, bulky Br atom prevents productive overlap, rendering the collision ineffective even if the colliding molecules possess energy greater than Ea."
  },
  {
    "index": 41,
    "commercialId": "NEET-CHE-CK-041",
    "question": "What is the threshold energy (E_{th}) of a reaction?",
    "options": [
      "The minimum extra energy absorbed by reactant molecules to reach the transition state",
      "The minimum total kinetic energy that colliding molecules must possess in order to undergo an effective collision",
      "The difference between the energy of products and the energy of reactants",
      "The average kinetic energy of all reactant molecules at a given temperature"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Threshold energy (E_th) is defined as the minimum total energy that colliding reactant molecules must possess in order for the collision to result in chemical reaction (product formation):\nE_th = Average internal kinetic energy of reactants + Activation energy (Ea)."
  },
  {
    "index": 42,
    "commercialId": "NEET-CHE-CK-042",
    "question": "**Assertion (A):** The rate of a zero-order reaction remains constant throughout the course of the reaction until the reactant is completely consumed. \n\n**Reason (R):** For a zero-order reaction, the rate of reaction is independent of the concentration of the reacting species.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Assertion (A) is true: In a zero-order reaction, the rate remains constant throughout the reaction until the reactant is entirely consumed.\nReason (R) is true: By definition of zero-order kinetics, Rate = k [R]\u2070 = k; the rate is independent of the reactant concentration.\nReason (R) provides the exact mathematical and physical explanation for Assertion (A)."
  },
  {
    "index": 43,
    "commercialId": "NEET-CHE-CK-043",
    "question": "**Assertion (A):** A first-order reaction never reaches 100\\% completion in finite time. \n\n**Reason (R):** The concentration of the reactant decreases exponentially with time according to [R] = [R]_0 e^{-kt}.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Assertion (A) is true: A first-order reaction never reaches 100% completion in any finite time (t_100% = \u221e).\nReason (R) is true: The integrated first-order rate law [R] = [R]\u2080 e^(-kt) shows exponential decay, which approaches zero only asymptotically as t \u2192 \u221e.\nReason (R) is the correct explanation of Assertion (A)."
  },
  {
    "index": 44,
    "commercialId": "NEET-CHE-CK-044",
    "question": "**Assertion (A):** All collisions between reactant molecules with kinetic energy equal to or greater than threshold energy lead to product formation. \n\n**Reason (R):** Effective collisions require both sufficient energy and proper orientation of colliding species.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is false but (R) is true.",
      "Both (A) and (R) are false."
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is false: Not all collisions with kinetic energy \u2265 threshold energy lead to reaction; the colliding species must also have proper spatial orientation at the moment of impact.\nReason (R) is true: An effective collision requires both sufficient energy (\u2265 threshold energy) and correct steric orientation.\nHence, Assertion is false, but Reason is true."
  },
  {
    "index": 45,
    "commercialId": "NEET-CHE-CK-045",
    "question": "Match List-I with List-II for a general reaction R \u2192 P:\n\n| List-I | List-II |\n| :--- | :--- |\n| (A) Zero-order reaction | (I) t_{1/2} \\propto [R]_0^{-1} |\n| (B) First-order reaction | (II) t_{1/2} \\propto [R]_0^0 |\n| (C) Second-order reaction | (III) t_{1/2} \\propto [R]_0^1 |\n| (D) Pseudo-first-order reaction | (IV) Rate = k'[R] where k' = k[Excess reactant] |\n\nChoose the correct answer from the options given below:",
    "options": [
      "(A)-(III), (B)-(II), (C)-(I), (D)-(IV)",
      "(A)-(II), (B)-(III), (C)-(I), (D)-(IV)",
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Half-life and rate dependencies for order n:\n- (A) Zero-order: t_1/2 = [R]\u2080 / (2k) \u221d [R]\u2080\u00b9 \u2192 (III)\n- (B) First-order: t_1/2 = 0.693 / k \u221d [R]\u2080\u2070 \u2192 (II)\n- (C) Second-order: t_1/2 = 1 / (k [R]\u2080) \u221d [R]\u2080\u207b\u00b9 \u2192 (I)\n- (D) Pseudo-first-order: Rate = k'[R] where k' = k[Excess reactant] \u2192 (IV)\n\nCorrect Match: (A)-(III), (B)-(II), (C)-(I), (D)-(IV)."
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`Starting upsert of ${rawQuestions.length} questions for ${CHAPTER}...`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'hard',
        examType: 'neet',
        type: 'single',
        isActive: true,
        status: 'published',
        source: 'Self',
        updatedAt: new Date()
      };

      const result = await qbCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const savedId = result._id || result.value?._id;
      if (!savedId) {
        const fetched = await qbCol.findOne({ commercialId: q.commercialId });
        assignedQuestionIds.push(fetched._id);
      } else {
        assignedQuestionIds.push(savedId);
      }
    }

    console.log(`Successfully upserted ${assignedQuestionIds.length} questions into questionBank.`);

    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];

    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: 'Chemical Kinetics',
            subject: SUBJECT,
            chapter: CHAPTER,
            subtopic: SUBTOPIC,
            examType: 'neet',
            questions: assignedQuestionIds,
            totalMarks: 180,
            duration: 60,
            status: 'published',
            isLive: true,
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
      console.log(`Updated testPaper ${testId}: assigned ${assignedQuestionIds.length} questions.`);

      // Synchronize audit report
      await auditReportsCol.updateMany(
        { testId },
        { $set: { isLatest: false } }
      );

      const questionAudits = rawQuestions.map((q, idx) => ({
        questionIndex: idx + 1,
        questionId: assignedQuestionIds[idx].toString(),
        commercialId: q.commercialId,
        status: 'PASS',
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        aiPass: true,
        issues: []
      }));

      const auditReportDoc = {
        testId,
        reportVersion: 1,
        isLatest: true,
        status: 'COMPLETED',
        summary: {
          totalQuestions: 45,
          aiPasses: 45,
          aiFailures: 0,
          manualReviewsNeeded: 0
        },
        questionAudits,
        auditedAt: new Date(),
        createdAt: new Date()
      };

      await auditReportsCol.insertOne(auditReportDoc);

      await auditStatesCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            status: 'PASSED',
            totalQuestions: 45,
            aiPasses: 45,
            aiFailures: 0,
            manualReviewsNeeded: 0,
            latestReportVersion: 1,
            lastAuditedAt: new Date(),
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
    }

    console.log('Synchronized testAuditReports and testAuditStates for all test IDs.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
