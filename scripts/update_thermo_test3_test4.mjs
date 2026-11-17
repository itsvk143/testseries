import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const env = fs.readFileSync('.env.local', 'utf8');
let uri = '';
for (const line of env.split('\n')) {
  if (line.startsWith('MONGODB_URI=')) {
    uri = line.replace('MONGODB_URI=', '').trim().replace(/^['"]|['"]$/g, '');
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db('testseries');

console.log("=== UPDATING THERMODYNAMICS TESTS 3 AND 4 ===");

const AR_OPTIONS = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A).",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
  "(A) is true but (R) is false.",
  "(A) is false but (R) is true."
];

// =========================================================================
// TEST 3: ISOTHERMAL AND ADIABATIC PROCESSES
// =========================================================================
const test3DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-TH-IA-001",
    question: "An ideal gas expands from a common initial state $A(P_1, V_1, T_1)$ to a final volume $V_2$ along two alternative paths on a P-V indicator diagram: Path $AB$ is isothermal at temperature $T_1$, and Path $AC$ is adiabatic, as shown. At the final volume $V_2$, which curve lies higher and which process yields the greater mechanical work done by the gas?",
    options: [
      "The isothermal curve lies above the adiabatic curve, and the work done during isothermal expansion is greater ($W_{\\text{iso}} > W_{\\text{ad}}$)",
      "The adiabatic curve lies above the isothermal curve, and $W_{\\text{ad}} > W_{\\text{iso}}$",
      "Both curves terminate at the same point because work depends only on initial and final volume",
      "The adiabatic curve is flatter because its slope is $\\frac{1}{\\gamma}\\left(-\\frac{P}{V}\\right)$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/thermo/test3_q1_isothermal_vs_adiabatic_expansion.svg",
    explanation: "1. The slope of an isothermal curve is $\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$.\n2. The slope of an adiabatic curve is $\\left(\\frac{dP}{dV}\\right)_{\\text{ad}} = -\\gamma \\frac{P}{V}$.\nSince the adiabatic index $\\gamma = C_p/C_v > 1$, the adiabatic curve is $\\gamma$ times steeper and falls off more rapidly during expansion. Consequently, the isothermal curve lies above the adiabatic curve for any volume $V_2 > V_1$. Because the area under the P-V curve represents work done, $W_{\\text{iso}} = \\int_{V_1}^{V_2} P_{\\text{iso}} dV > \\int_{V_1}^{V_2} P_{\\text{ad}} dV = W_{\\text{ad}}$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-TH-IA-002",
    question: "The diagram depicts four fundamental thermodynamic processes starting from a common initial state $(P_0, V_0)$ on a P-V diagram: 1. Isochoric, 2. Isobaric, 3. Isothermal, and 4. Adiabatic. Which of the following lists the processes in correct descending order of mechanical work done by the gas during expansion to a given volume $V > V_0$?",
    options: [
      "$\\text{Isochoric} > \\text{Isobaric} > \\text{Isothermal} > \\text{Adiabatic}$",
      "$\\text{Isobaric} > \\text{Isothermal} > \\text{Adiabatic} > \\text{Isochoric (zero)}$",
      "$\\text{Adiabatic} > \\text{Isothermal} > \\text{Isobaric} > \\text{Isochoric}$",
      "$\\text{Isothermal} > \\text{Isobaric} > \\text{Adiabatic} > \\text{Isochoric}$"
    ],
    correctOption: "b",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test3_q2_four_processes_pv_comparison.svg",
    explanation: "Work done during expansion is represented by the area under the P-V curve from $V_0$ to $V$:\n1. Isobaric: Pressure remains at maximum $P_0$, enclosing the largest rectangular area: $W = P_0(V - V_0)$.\n2. Isothermal: Pressure drops along $P = P_0 V_0 / V$, enclosing the second largest area.\n3. Adiabatic: Pressure drops even more steeply along $P = P_0 V_0^\\gamma / V^\\gamma$, enclosing a smaller area than isothermal.\n4. Isochoric: There is no volume change ($dV = 0$), so the area under the vertical line is strictly zero ($W = 0$).\nTherefore: $W_{\\text{isobaric}} > W_{\\text{isothermal}} > W_{\\text{adiabatic}} > W_{\\text{isochoric}} = 0$."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-TH-IA-003",
    question: "A sample of a monoatomic ideal gas ($\\gamma = 5/3$) undergoes a reversible adiabatic compression from initial state $(P_1, V_1, T_1)$ to final state $(P_2, V_2, T_2)$ such that its volume is compressed to one-eighth of its initial value ($V_2 = V_1 / 8$), as shown. What is the ratio of its final absolute temperature to its initial absolute temperature ($T_2 / T_1$)?",
    options: [
      "$2$",
      "$8$",
      "$4$",
      "$16$"
    ],
    correctOption: "c",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test3_q3_adiabatic_compression_tv_curve.svg",
    explanation: "For a reversible adiabatic process of an ideal gas, the temperature-volume relation is:\n$$T V^{\\gamma - 1} = \\text{constant} \\implies T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$$\n$$\\frac{T_2}{T_1} = \\left( \\frac{V_1}{V_2} \\right)^{\\gamma - 1}$$\nGiven $V_1 / V_2 = 8$ and $\\gamma = 5/3$, the exponent is $\\gamma - 1 = 5/3 - 1 = 2/3$:\n$$\\frac{T_2}{T_1} = (8)^{2/3} = (2^3)^{2/3} = 2^2 = 4$$\nThus, the absolute temperature quadruples ($T_2 = 4 T_1$) due to the work done on the gas during adiabatic compression."
  }
];

const test3ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-TH-IA-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): On a P-V indicator diagram, the magnitude of the slope of an adiabatic curve at any state point is $\\gamma$ times the magnitude of the slope of an isothermal curve passing through that same point.\nReason (R): For an ideal gas, differentiation yields $\\left(\\frac{dP}{dV}\\right)_{\\text{adiabatic}} = -\\gamma \\frac{P}{V}$ and $\\left(\\frac{dP}{dV}\\right)_{\\text{isothermal}} = -\\frac{P}{V}$; since the adiabatic exponent is $\\gamma = C_p/C_v > 1$, the adiabatic curve is always steeper.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "For an isothermal process, $P V = \\text{constant} \\implies P dV + V dP = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$. For an adiabatic process, $P V^\\gamma = \\text{constant} \\implies V^\\gamma dP + \\gamma P V^{\\gamma-1} dV = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{\\text{ad}} = -\\gamma \\frac{P}{V} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$. Because $\\gamma > 1$ for all real gases, the adiabatic slope magnitude is strictly greater. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-TH-IA-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas undergoes a reversible adiabatic expansion, the gas cools and its internal energy decreases.\nReason (R): In an isothermal expansion of an ideal gas from volume $V_1$ to $V_2$, the mechanical work performed by $n$ moles of gas is $W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion is true: in an adiabatic expansion, $Q = 0$, so by the First Law $\\Delta U = -W$. Since expansion work is positive ($W > 0$), $\\Delta U < 0$, which causes temperature to decrease ($n C_v \\Delta T < 0$). Reason is also true: the expression $W = n R T \\ln(V_2/V_1)$ correctly gives isothermal work. However, the formula for isothermal work does not explain why an adiabatic expansion cools. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-TH-IA-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas undergoes a quasi-static isothermal compression, heat must be continuously removed from the gas to keep its temperature constant.\nReason (R): The mechanical work done on the gas during compression is zero because pressure continuously increases.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion is true: during isothermal compression, work is done on the gas ($W_{\\text{by}} < 0$). Since $\\Delta T = 0 \\implies \\Delta U = 0$, the First Law gives $Q = \\Delta U + W = W < 0$, meaning heat equal to the compression work must be removed into a heat reservoir. Reason is false because substantial work is done on the gas during compression ($W_{\\text{on}} = -n R T \\ln(V_2/V_1) > 0$). Thus, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-TH-IA-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): In an isochoric heating process, an ideal gas performs positive mechanical work equal to $P \\Delta V$.\nReason (R): In an isochoric process, the volume of the system remains constant ($dV = 0$), so the work done is strictly zero ($W = \\int P dV = 0$) and all added heat goes directly into increasing internal energy ($\\Delta Q = \\Delta U$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion is false: by definition, an isochoric process has constant volume ($\\Delta V = 0$), so no boundary work is performed ($W = 0$). Reason is true: since $dV = 0$, $W = \\int P dV = 0$, and the First Law simplifies to $\\Delta Q = \\Delta U = n C_v \\Delta T$. Thus, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-TH-IA-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an over-inflated automobile tire suddenly bursts, the air rapidly rushing out feels noticeably cool to the touch.\nReason (R): A sudden blowout occurs so rapidly that heat exchange with the surrounding environment is negligible ($Q \\approx 0$, adiabatic expansion); the expanding air does mechanical work at the expense of its own internal energy ($W = -\\Delta U > 0$), resulting in a drop in temperature ($\\Delta T < 0$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "A sudden rupture is a classic adiabatic process because it takes place too quickly for heat to transfer across boundaries ($Q = 0$). As high-pressure air rushes out into the lower-pressure atmosphere, it expands and does positive work on the surrounding air ($W > 0$). By the First Law, $\\Delta U = -W < 0$, which lowers molecular kinetic energy and temperature ($T_2 < T_1$). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-TH-IA-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For an ideal gas undergoing a reversible adiabatic process between temperatures $T_1$ and $T_2$, the work done by the gas is given by $W = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$.\nReason (R): The ratio of molar heat capacities for a diatomic ideal gas with non-vibrating rigid molecules at moderate temperature is $\\gamma = \\frac{C_p}{C_v} = \\frac{7/2 R}{5/2 R} = \\frac{7}{5} = 1.4$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion is true: for an adiabatic process, $W = -\\Delta U = -n C_v (T_2 - T_1) = n C_v (T_1 - T_2)$. Since $C_v = \\frac{R}{\\gamma - 1}$, this gives $W = \\frac{n R (T_1 - T_2)}{\\gamma - 1} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$. Reason is also true: a rigid diatomic gas has 5 degrees of freedom (3 translational, 2 rotational), giving $C_v = 5/2 R$ and $C_p = 7/2 R \\implies \\gamma = 7/5 = 1.4$. However, the specific value for diatomic gas does not explain the general adiabatic work formula. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  }
];

// =========================================================================
// TEST 4: WORK DONE IN THERMODYNAMIC PROCESSES
// =========================================================================
const test4DiagramQs = [
  {
    index: 0,
    commercialId: "NEET-PHY-TH-WD-001",
    question: "An ideal gas is taken through a closed elliptical cyclic process in a clockwise direction on a P-V indicator diagram, as shown. The volume ranges between $V_1 = 2.0\\text{ m}^3$ and $V_2 = 6.0\\text{ m}^3$, and the pressure ranges between $P_1 = 20\\text{ kPa}$ and $P_2 = 60\\text{ kPa}$. What is the net mechanical work done by the gas during one complete cycle?",
    options: [
      "$40\\pi\\text{ kJ}$",
      "$80\\pi\\text{ kJ}$",
      "$20\\pi\\text{ kJ}$",
      "$-40\\pi\\text{ kJ}$"
    ],
    correctOption: "a",
    difficulty: "Easy",
    image: "/images/diagrams/thermo/test4_q1_cyclic_process_pv_ellipse.svg",
    explanation: "For any closed cycle on a P-V diagram, the net work done is the enclosed area:\n1. For an ellipse, the semi-axes are:\n$$a = \\frac{V_2 - V_1}{2} = \\frac{6.0 - 2.0}{2} = 2.0\\text{ m}^3$$\n$$b = \\frac{P_2 - P_1}{2} = \\frac{60 - 20}{2} = 20\\text{ kPa} = 20 \\times 10^3\\text{ N m}^{-2}$$\n2. The area of the ellipse is:\n$$W_{\\text{net}} = \\pi \\cdot a \\cdot b = \\pi \\times 2.0\\text{ m}^3 \\times (20 \\times 10^3\\text{ N m}^{-2}) = 40\\pi \\times 10^3\\text{ J} = 40\\pi\\text{ kJ}$$\nBecause the cycle is traversed in a clockwise direction, expansion work exceeds compression work, so $W_{\\text{net}} = +40\\pi\\text{ kJ}$."
  },
  {
    index: 1,
    commercialId: "NEET-PHY-TH-WD-002",
    question: "A thermodynamic system executes a right-angled triangular cyclic process $A \\to B \\to C \\to A$ in a clockwise direction on a P-V indicator diagram, as shown. The vertices are $A(P_1, V_1)$, $B(P_2, V_1)$, and $C(P_1, V_2)$, where $P_1 = 100\\text{ kPa}$, $P_2 = 300\\text{ kPa}$, $V_1 = 1.0\\text{ m}^3$, and $V_2 = 3.0\\text{ m}^3$. What is the net work done by the gas during one complete cycle?",
    options: [
      "$400\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$100\\text{ kJ}$",
      "$-200\\text{ kJ}$"
    ],
    correctOption: "b",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test4_q2_triangular_cycle_work.svg",
    explanation: "The net work done during a cyclic process on a P-V diagram is the enclosed area:\n1. The enclosed area is a right-angled triangle with base $\\Delta V = V_2 - V_1$ and height $\\Delta P = P_2 - P_1$:\n$$\\text{Base } = V_2 - V_1 = 3.0 - 1.0 = 2.0\\text{ m}^3$$\n$$\\text{Height } = P_2 - P_1 = (300 - 100)\\text{ kPa} = 200\\text{ kPa} = 200 \\times 10^3\\text{ N m}^{-2}$$\n2. The area is:\n$$W_{\\text{net}} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 2.0\\text{ m}^3 \\times 200\\text{ kPa} = 200\\text{ kJ}$$\nSince the cycle is clockwise, the net work done is positive ($+200\\text{ kJ}$)."
  },
  {
    index: 2,
    commercialId: "NEET-PHY-TH-WD-003",
    question: "A gas is transferred from initial state $i(P_i, V_i)$ to final state $f(P_f, V_f)$ along three different reversible paths on a P-V indicator diagram: Path 1 (via $A$, $i \\to A \\to f$), Path 2 (direct linear diagonal path $i \\to f$), and Path 3 (via $B$, $i \\to B \\to f$), as shown. Which of the following statements correctly compares the mechanical work done $W$ and the change in internal energy $\\Delta U$ among the three paths?",
    options: [
      "$W_1 = W_2 = W_3$ and $\\Delta U_1 > \\Delta U_2 > \\Delta U_3$",
      "$W_1 < W_2 < W_3$ and $\\Delta U_1 = \\Delta U_2 = \\Delta U_3$",
      "$W_1 > W_2 > W_3$ and $\\Delta U_1 = \\Delta U_2 = \\Delta U_3$",
      "$W_1 > W_2 > W_3$ and $\\Delta U_1 > \\Delta U_2 > \\Delta U_3$"
    ],
    correctOption: "c",
    difficulty: "Medium",
    image: "/images/diagrams/thermo/test4_q3_three_paths_work_comparison.svg",
    explanation: "1. Work done is the area under the P-V curve: Path 1 (via top corner $A$) encloses the largest area, Path 2 encloses an intermediate trapezoidal area, and Path 3 (via bottom corner $B$) encloses the smallest area. Therefore: $W_1 > W_2 > W_3$.\n2. Internal energy $U$ is a thermodynamic state function depending solely on state coordinates ($P, V, T$). Since all three paths start at the identical state $i$ and end at the identical state $f$, the change in internal energy is identical for all three paths: $\\Delta U_1 = \\Delta U_2 = \\Delta U_3 = U_f - U_i$."
  }
];

const test4ARQs = [
  {
    index: 39,
    commercialId: "NEET-PHY-TH-WD-040",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): For any closed cyclic process executed on a P-V indicator diagram, the net mechanical work done by the system is equal to the area enclosed by the cycle, and is positive if the cycle is traversed clockwise.\nReason (R): In a clockwise cycle, the upper expansion path occurs at higher pressure and encloses a larger area under the curve (positive work) than the lower compression path (negative work), yielding a positive net area ($\\oint P dV > 0$).",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Net cyclic work is $\\oint P dV = \\int_{\\text{expansion}} P dV + \\int_{\\text{compression}} P dV$. In a clockwise loop, the expansion curve is above the compression curve ($P_{\\text{exp}} > P_{\\text{comp}}$ at every volume), so the positive area under the expansion curve exceeds the negative area under the compression curve. The net enclosed area is positive work done by the gas. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 40,
    commercialId: "NEET-PHY-TH-WD-041",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The work done by an ideal gas during an isobaric expansion from volume $V_1$ to $V_2$ at constant pressure $P$ can be expressed as $W = P(V_2 - V_1) = n R \\Delta T$.\nReason (R): For an isochoric process of an ideal gas ($V = \\text{constant}$), the molar heat capacity at constant volume is $C_v = \\frac{R}{\\gamma - 1}$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Medium",
    explanation: "Assertion is true: for an isobaric process, $W = \\int P dV = P(V_2 - V_1)$. Using the ideal gas equation $P V_1 = n R T_1$ and $P V_2 = n R T_2$, we have $P(V_2 - V_1) = n R(T_2 - T_1) = n R \\Delta T$. Reason is also true: $C_p - C_v = R$ and $C_p/C_v = \\gamma \\implies C_v = \\frac{R}{\\gamma - 1}$. However, the formula for isochoric heat capacity does not explain the work done in an isobaric expansion. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    index: 41,
    commercialId: "NEET-PHY-TH-WD-042",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The mechanical work done by a thermodynamic system is a path-dependent function, and therefore work cannot be defined as a property of a thermodynamic state.\nReason (R): For any closed cyclic thermodynamic process, the net mechanical work done by the gas over one complete cycle is always identically zero.",
    options: AR_OPTIONS,
    correctOption: "c",
    difficulty: "Hard",
    explanation: "Assertion is true: work $W = \\int P dV$ depends on the exact trajectory taken between two states on a P-V diagram; it is an inexact differential ($\delta W$), not a state function. Reason is false: for a cyclic process, the net work done is the enclosed loop area ($\\oint P dV \\neq 0$), which is positive for clockwise cycles and negative for counter-clockwise cycles. Only state functions (like $U$) have zero cyclic integral. Thus, (A) is true but (R) is false."
  },
  {
    index: 42,
    commercialId: "NEET-PHY-TH-WD-043",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): If an ideal gas undergoes a closed cyclic process traversed in a counter-clockwise direction on a P-V diagram, the net work done by the gas is positive.\nReason (R): In a counter-clockwise cycle, the compression path occurs at higher pressure than the expansion path, resulting in a net negative work done by the gas ($W_{\\text{net}} < 0$).",
    options: AR_OPTIONS,
    correctOption: "d",
    difficulty: "Hard",
    explanation: "Assertion is false: a counter-clockwise cycle corresponds to work done on the system (e.g. a refrigerator or heat pump), so net work done by the gas is negative ($W_{\\text{net}} < 0$). Reason is true: because the top curve is compression (leftward, $W < 0$) and the bottom curve is expansion (rightward, $W > 0$), the negative work exceeds the positive work, giving a net negative area. Thus, (A) is false but (R) is true."
  },
  {
    index: 43,
    commercialId: "NEET-PHY-TH-WD-044",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): The numerical magnitude of the work calculated from the area of a closed P-V cycle is an invariant physical quantity, regardless of whether pressure is measured in $\\text{N m}^{-2}$ and volume in $\\text{m}^3$, or in $\\text{atm}$ and $\\text{liters}$ converted with appropriate conversion factors.\nReason (R): The enclosed area on a P-V diagram represents mechanical energy (work in Joules), which is a scalar physical quantity that is invariant under consistent changes of measurement units.",
    options: AR_OPTIONS,
    correctOption: "a",
    difficulty: "Medium",
    explanation: "Because $1\\text{ liter-atm} = 10^{-3}\\text{ m}^3 \\times 1.01325 \\times 10^5\\text{ N m}^{-2} = 101.325\\text{ J}$, scaling axes by consistent unit factors preserves the true physical energy represented by the area. Work is an invariant scalar quantity of energy transfer. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    index: 44,
    commercialId: "NEET-PHY-TH-WD-045",
    question: "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\n\nAssertion (A): When an ideal gas undergoes free expansion into an evacuated chamber ($P_{\\text{ext}} = 0$), the mechanical work done by the gas is strictly zero.\nReason (R): The work done during a reversible isothermal expansion of $n$ moles of an ideal gas at temperature $T$ from $V_1$ to $V_2$ is given by $W = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)$.",
    options: AR_OPTIONS,
    correctOption: "b",
    difficulty: "Easy",
    explanation: "Assertion is true: thermodynamic work is defined by interaction with surroundings against external pressure: $W = \\int P_{\\text{ext}} dV$. Since $P_{\\text{ext}} = 0$ in a vacuum, no opposing force is overcome and $W = 0$. Reason is also true: for a reversible isothermal expansion, $P = n R T / V$, integrating yields $W = n R T \\ln(V_2/V_1) = 2.303 n R T \\log_{10}(V_2/V_1)$. However, the formula for reversible isothermal work does not explain why free expansion does zero work. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  }
];

// Helper to update test
async function updateTest(testId, slugAliases, title, diagramQs, arQs) {
  console.log(`\n======================================================`);
  console.log(`Processing Test: ${testId} (${title})`);
  console.log(`======================================================`);

  let tp = await db.collection('testPapers').findOne({ testId });
  if (!tp) {
    for (const alias of slugAliases) {
      tp = await db.collection('testPapers').findOne({ testId: alias });
      if (tp) break;
    }
  }

  let existingQuestionIds = [];
  if (tp && tp.questions) {
    existingQuestionIds = tp.questions.map(q => {
      const raw = typeof q === 'string' ? q : (q._id || q.questionId || q.id);
      return ObjectId.isValid(raw) ? new ObjectId(raw) : raw;
    });
  }

  const existingDocs = await db.collection('questionBank').find({ _id: { $in: existingQuestionIds.filter(id => id instanceof ObjectId) } }).toArray();
  const existingMap = new Map(existingDocs.map(d => [d._id.toString(), d]));

  const finalQuestionIds = [];

  for (let idx = 0; idx < 45; idx++) {
    const diagDef = diagramQs.find(d => d.index === idx);
    const arDef = arQs.find(a => a.index === idx);

    if (diagDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: diagDef.commercialId,
            question: diagDef.question,
            options: diagDef.options,
            correctAnswer: diagDef.correctOption,
            correctOption: diagDef.correctOption,
            explanation: diagDef.explanation,
            difficulty: diagDef.difficulty,
            image: diagDef.image,
            img: diagDef.image,
            subject: 'Physics',
            chapter: 'Thermodynamics',
            subTopic: title,
            subtopic: title,
            type: 'MCQ',
            questionType: 'MCQ (Multiple Choice Question)',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} DIAGRAM question set: ${diagDef.image} (ans=${diagDef.correctOption})`);
    } else if (arDef) {
      const existingId = existingQuestionIds[idx];
      let docId = existingId instanceof ObjectId ? existingId : new ObjectId();
      await db.collection('questionBank').updateOne(
        { _id: docId },
        {
          $set: {
            commercialId: arDef.commercialId,
            question: arDef.question,
            options: arDef.options,
            correctAnswer: arDef.correctOption,
            correctOption: arDef.correctOption,
            explanation: arDef.explanation,
            difficulty: arDef.difficulty,
            image: '',
            img: '',
            subject: 'Physics',
            chapter: 'Thermodynamics',
            subTopic: title,
            subtopic: title,
            type: 'ASSERTION_REASON',
            questionType: 'Assertion–Reasoning',
            classGrade: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );
      finalQuestionIds.push(docId);
      console.log(`Q${idx + 1} Section B AR question set: ans=${arDef.correctOption} (diff=${arDef.difficulty})`);
    } else {
      const existingId = existingQuestionIds[idx];
      if (existingId instanceof ObjectId && existingMap.has(existingId.toString())) {
        const curDoc = existingMap.get(existingId.toString());
        await db.collection('questionBank').updateOne(
          { _id: curDoc._id },
          {
            $set: {
              subject: 'Physics',
              chapter: 'Thermodynamics',
              subTopic: title,
              subtopic: title,
              type: 'MCQ',
              questionType: 'MCQ (Multiple Choice Question)',
              classGrade: 'Class 11',
              marks: 4,
              negativeMarks: 1,
              updatedAt: new Date()
            }
          }
        );
        finalQuestionIds.push(curDoc._id);
      } else {
        const newDoc = {
          subject: 'Physics',
          chapter: 'Thermodynamics',
          subTopic: title,
          subtopic: title,
          type: 'MCQ',
          questionType: 'MCQ (Multiple Choice Question)',
          classGrade: 'Class 11',
          marks: 4,
          negativeMarks: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        const ins = await db.collection('questionBank').insertOne(newDoc);
        finalQuestionIds.push(ins.insertedId);
      }
    }
  }

  // Update primary testPaper
  await db.collection('testPapers').updateOne(
    { testId },
    {
      $set: {
        testId,
        title,
        chapter: 'Thermodynamics',
        canonicalChapter: 'Thermodynamics',
        subject: 'Physics',
        exam: 'NEET',
        examType: 'NEET',
        classGrade: 'Class 11',
        standardQuestionsCount: 45,
        questionsCount: 45,
        duration: 60,
        totalMarks: 180,
        questions: finalQuestionIds,
        updatedAt: new Date()
      }
    },
    { upsert: true }
  );
  console.log(`Synced primary testPaper ${testId} with 45 questions.`);

  for (const alias of slugAliases) {
    const aliasDoc = await db.collection('testPapers').findOne({ testId: alias });
    if (aliasDoc) {
      await db.collection('testPapers').updateOne(
        { _id: aliasDoc._id },
        {
          $set: {
            title,
            chapter: 'Thermodynamics',
            canonicalChapter: 'Thermodynamics',
            subject: 'Physics',
            exam: 'NEET',
            examType: 'NEET',
            classGrade: 'Class 11',
            standardQuestionsCount: 45,
            questionsCount: 45,
            duration: 60,
            totalMarks: 180,
            questions: finalQuestionIds,
            updatedAt: new Date()
          }
        }
      );
      console.log(`Synced alias testPaper ${alias} with 45 questions.`);
    }
  }
}

// Execute Test 3 & 4
await updateTest(
  "neet-SUBTOPIC-Physics-Isothermal-and-adiabatic-processes",
  [
    "neet-SUBTOPIC-Physics-Isothermal-and-Adiabatic-Processes",
    "neet-SUBTOPIC-Physics-isothermal-and-adiabatic-processes",
    "neet-SUBTOPIC-Isothermal-and-adiabatic-processes",
    "neet-SUBTOPIC-Physics-Isothermal-and-adiabatic-processes-All-Test",
    "neet-SUBTOPIC-Physics-Isothermal-and-Adiabatic-Processes-All-Test",
    "neet-SUBTOPIC-Physics-isothermal-and-adiabatic-processes-All-Test"
  ],
  "Isothermal and adiabatic processes",
  test3DiagramQs,
  test3ARQs
);

await updateTest(
  "neet-SUBTOPIC-Physics-Work-done-in-thermodynamic-processes",
  [
    "neet-SUBTOPIC-Physics-Work-Done-in-Thermodynamic-Processes",
    "neet-SUBTOPIC-Physics-work-done-in-thermodynamic-processes",
    "neet-SUBTOPIC-Work-done-in-thermodynamic-processes",
    "neet-SUBTOPIC-Physics-Work-done-in-thermodynamic-processes-All-Test",
    "neet-SUBTOPIC-Physics-Work-Done-in-Thermodynamic-Processes-All-Test",
    "neet-SUBTOPIC-Physics-work-done-in-thermodynamic-processes-All-Test"
  ],
  "Work done in thermodynamic processes",
  test4DiagramQs,
  test4ARQs
);

console.log("\nTests 3 and 4 successfully updated!");
await client.close();
