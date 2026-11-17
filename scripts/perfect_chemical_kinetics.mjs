import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const test = await db.collection('testPapers').findOne({ testId: 'neet-CHAPTER-Chemistry-Chemical-Kinetics-12' });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection('questionBank').find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

const updates = [
  {
    idx: 4, // Q4
    question: `For the reaction $\\mathrm{2A + B \\longrightarrow C + D}$, the following kinetic data were obtained:\n\n| Exp. | $[A]$ ($\\text{mol L}^{-1}$) | $[B]$ ($\\text{mol L}^{-1}$) | Initial rate of formation of $D$ ($\\text{mol L}^{-1}\\text{min}^{-1}$) |\n| :--- | :--- | :--- | :--- |\n| I | 0.1 | 0.1 | $6.0 \\times 10^{-3}$ |\n| II | 0.3 | 0.2 | $7.2 \\times 10^{-2}$ |\n| III | 0.3 | 0.4 | $2.88 \\times 10^{-1}$ |\n| IV | 0.4 | 0.1 | $2.40 \\times 10^{-2}$ |\n\nThe rate law for the reaction is:`
  },
  {
    idx: 8, // Q8
    question: `For the reaction $\\mathrm{2NO(g) + Cl_2(g) \\longrightarrow 2NOCl(g)}$, the mechanism proposed is: \n\nStep I: $\\mathrm{NO(g) + Cl_2(g) \\rightleftharpoons NOCl_2(g)}$ (Fast, equilibrium constant $K_c$) \n\nStep II: $\\mathrm{NOCl_2(g) + NO(g) \\xrightarrow{k_2} 2NOCl(g)}$ (Slow) \n\nThe observed rate constant $k_{\\text{obs}}$ is equal to:`,
    options: ['$k_2 K_c$', '$\\frac{k_2}{K_c}$', '$k_2 K_c^2$', '$\\frac{K_c}{k_2}$']
  },
  {
    idx: 10, // Q10
    question: `In the thermal decomposition of acetaldehyde: $\\mathrm{CH_3CHO(g) \\longrightarrow CH_4(g) + CO(g)}$, the rate is proportional to $[\\mathrm{CH_3CHO}]^{3/2}$. If the pressure is expressed in bar and time in minutes, the units of rate and rate constant respectively are:`
  },
  {
    idx: 18, // Q18
    question: `A first-order gas-phase reaction $\\mathrm{A(g) \\longrightarrow 2B(g) + C(g)}$ starts with pure $\\mathrm{A}$ at an initial pressure $P_i$. After time $t$, the total pressure of the system is $P_t$. The correct expression for the rate constant $k$ is:`
  },
  {
    idx: 19, // Q19
    question: `Consider the thermal decomposition of azoisopropane to hexane and nitrogen at $543\\text{ K}$: \n\n$\\mathrm{(CH_3)_2CHN=NCH(CH_3)_2(g) \\longrightarrow N_2(g) + C_6H_{14}(g)}$. \n\nIf the initial pressure is $35.0\\text{ mm Hg}$ and after $360\\text{ s}$ the total pressure is $54.0\\text{ mm Hg}$, the rate constant $k$ is given by:`,
    options: [
      '$k = \\frac{2.303}{360} \\log \\left( \\frac{35}{19} \\right)$',
      '$k = \\frac{2.303}{360} \\log \\left( \\frac{35}{16} \\right)$',
      '$k = \\frac{2.303}{360} \\log \\left( \\frac{54}{35} \\right)$',
      '$k = \\frac{2.303}{360} \\log \\left( \\frac{35}{54} \\right)$'
    ]
  },
  {
    idx: 23, // Q23
    question: `The rate constant of a first-order reaction is $6.93 \\times 10^{-3} \\text{ min}^{-1}$. Starting with $10\\text{ g}$ of the reactant, the rate of reaction after 200 minutes will be:`,
    options: [
      '$6.93 \\times 10^{-3} \\text{ g min}^{-1}$',
      '$1.7325 \\times 10^{-2} \\text{ g min}^{-1}$',
      '$3.465 \\times 10^{-2} \\text{ g min}^{-1}$',
      '$6.93 \\times 10^{-2} \\text{ g min}^{-1}$'
    ]
  },
  {
    idx: 26, // Q26
    question: `During the hydrolysis of $0.01\\text{ M}$ ethyl acetate with $10\\text{ M}$ water in the presence of dilute HCl:\n$$\\mathrm{CH_3COOC_2H_5 + H_2O \\xrightarrow{H^+} CH_3COOH + C_2H_5OH}$$\nIf the true second-order rate constant is $k = 2.0 \\times 10^{-4} \\text{ L mol}^{-1}\\text{s}^{-1}$, the pseudo-first-order rate constant $k'$ is:`,
    options: [
      '$2.0 \\times 10^{-3} \\text{ s}^{-1}$',
      '$2.0 \\times 10^{-6} \\text{ s}^{-1}$',
      '$2.0 \\times 10^{-2} \\text{ s}^{-1}$',
      '$5.0 \\times 10^{-3} \\text{ s}^{-1}$'
    ]
  },
  {
    idx: 28, // Q28
    options: [
      '$\\ln\\left(\\frac{[A]_0}{[A]}\\right)$ is plotted against $t$, with slope $= k[B]_0$',
      '$\\ln\\left(\\frac{[A]}{[A]_0}\\right)$ is plotted against $t$, with slope $= k[B]_0$',
      '$\\frac{1}{[A]}$ is plotted against $t$, with slope $= k[B]_0$',
      '$[A]$ is plotted against $t$, with slope $= -k[B]_0$'
    ]
  },
  {
    idx: 29, // Q29
    question: `According to the Arrhenius equation, $k = A e^{-E_a / RT}$, the slope and y-intercept of the straight-line plot between $\\log_{10} k$ (on y-axis) and $1/T$ (on x-axis) are respectively:`,
    options: [
      '$-\\frac{E_a}{R}$ and $\\ln A$',
      '$-\\frac{E_a}{2.303 R}$ and $\\log_{10} A$',
      '$-\\frac{2.303 R}{E_a}$ and $\\log_{10} A$',
      '$\\frac{E_a}{2.303 R}$ and $-\\log_{10} A$'
    ]
  },
  {
    idx: 30, // Q30
    options: [
      '$55.3\\text{ kJ mol}^{-1}$',
      '$27.6\\text{ kJ mol}^{-1}$',
      '$110.6\\text{ kJ mol}^{-1}$',
      '$13.8\\text{ kJ mol}^{-1}$'
    ]
  },
  {
    idx: 32, // Q32
    question: `The rate constants $k_1$ and $k_2$ for two different reactions are $10^{16} e^{-2000/T}$ and $10^{15} e^{-1000/T}$, respectively. The temperature at which $k_1 = k_2$ is:`,
    options: [
      '$1000\\text{ K}$',
      '$\\frac{2000}{2.303}\\text{ K}$',
      '$\\frac{1000}{2.303}\\text{ K}$',
      '$2000\\text{ K}$'
    ]
  },
  {
    idx: 33, // Q33
    question: `For a reversible endothermic reaction $\\mathrm{A \\rightleftharpoons B}$, the enthalpy of reaction is $\\Delta H = +40\\text{ kJ mol}^{-1}$. If the activation energy of the backward reaction ($E_{a,b}$) is $65\\text{ kJ mol}^{-1}$, then the activation energy of the forward reaction ($E_{a,f}$) is:`,
    options: [
      '$25\\text{ kJ mol}^{-1}$',
      '$105\\text{ kJ mol}^{-1}$',
      '$40\\text{ kJ mol}^{-1}$',
      '$65\\text{ kJ mol}^{-1}$'
    ]
  },
  {
    idx: 34, // Q34
    question: `A reaction has an activation energy of $57.44\\text{ kJ mol}^{-1}$ in the absence of a catalyst. In the presence of a catalyst at $300\\text{ K}$, the activation energy is lowered to $45.95\\text{ kJ mol}^{-1}$. Assuming the pre-exponential factor $A$ remains unchanged, the rate of the catalyzed reaction compared to the uncatalyzed reaction increases by a factor of: ($R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)`
  },
  {
    idx: 35, // Q35
    options: [
      'Activation energy of the forward reaction',
      'Activation energy of the backward reaction',
      'Rate constants of both forward and backward reactions',
      'Gibbs free energy change ($\\Delta G$) and equilibrium constant ($K_{\\text{eq}}$)'
    ]
  },
  {
    idx: 37, // Q37
    question: `The decomposition of a hydrocarbon follows the equation $k = (4.5 \\times 10^{11}\\text{ s}^{-1}) e^{-28000\\text{ K}/T}$. What is the value of activation energy $E_a$?`,
    options: [
      '$232.79\\text{ kJ mol}^{-1}$',
      '$28.0\\text{ kJ mol}^{-1}$',
      '$116.4\\text{ kJ mol}^{-1}$',
      '$465.5\\text{ kJ mol}^{-1}$'
    ]
  },
  {
    idx: 38, // Q38
    options: [
      'Zero',
      '$E_a$',
      '$A$ (Arrhenius pre-exponential factor)',
      '$\\infty$'
    ]
  },
  {
    idx: 43, // Q43
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A first-order reaction never reaches 100% completion in finite time.\nReason (R): The concentration of the reactant decreases exponentially with time according to $[R] = [R]_0 e^{-kt}$.`
  },
  {
    idx: 45, // Q45
    question: `Match List-I with List-II for a general reaction $\\mathrm{R \\longrightarrow P}$:\n\n| List-I | List-II |\n| :--- | :--- |\n| (A) Zero-order reaction | (I) $t_{1/2} \\propto [R]_0^{-1}$ |\n| (B) First-order reaction | (II) $t_{1/2} \\propto [R]_0^0$ |\n| (C) Second-order reaction | (III) $t_{1/2} \\propto [R]_0^1$ |\n| (D) Pseudo-first-order reaction | (IV) $\\text{Rate} = k'[\\mathrm{R}]$ where $k' = k[\\text{Excess reactant}]$ |\n\nChoose the correct answer from the options given below:`
  }
];

console.log(`Applying precision updates to ${updates.length} questions...`);

for (const up of updates) {
  const qId = test.questions[up.idx - 1];
  const q = map.get(qId.toString());
  if (!q) {
    console.warn(`Question at index ${up.idx} not found!`);
    continue;
  }

  const setFields = { updatedAt: new Date() };
  if (up.question) {
    setFields.question = up.question;
    setFields.text = up.question;
  }
  if (up.options) {
    setFields.options = up.options;
  }

  await db.collection('questionBank').updateOne(
    { _id: q._id },
    { $set: setFields }
  );
  console.log(`Updated Q${up.idx} (ID: ${q._id})`);
}

console.log('Chemical Kinetics precision update complete!');
await client.close();
