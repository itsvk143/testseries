const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Combination of capacitors and energy stored";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Combination of Capacitors and Energy Stored
const arData = [
  {
    a: "When capacitors are connected in series, the charge residing on each capacitor is identical.",
    r: "In a series combination, the interior plates and connecting wires are electrically isolated, so charge appears on adjacent plates solely by electrostatic induction.",
    ans: 0,
    exp: "Because the intermediate plates form isolated conductors with zero net initial charge, acquiring $+Q$ on one plate induces $-Q$ on the facing plate, conserving charge such that $Q_1 = Q_2 = \\dots = Q$. (R) correctly explains (A)."
  },
  {
    a: "The equivalent capacitance of a series combination of two unequal capacitors is always strictly less than the capacitance of either individual capacitor.",
    r: "In a series combination, the reciprocals of individual capacitances add up: $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$, making $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2} < \\min(C_1, C_2)$.",
    ans: 0,
    exp: "Because $\\frac{1}{C_{eq}} > \\frac{1}{C_1}$ and $\\frac{1}{C_{eq}} > \\frac{1}{C_2}$, the equivalent capacitance is always less than the smallest capacitor in the series group. (R) correctly explains (A)."
  },
  {
    a: "When capacitors are connected in parallel, the potential difference across each capacitor is the same.",
    r: "All positive plates of the parallel capacitors are connected to a common node and all negative plates are connected to another common node.",
    ans: 0,
    exp: "Being connected across the exact same two common electrical nodes, the potential difference across every parallel branch is identical: $V_1 = V_2 = V$. (R) correctly explains (A)."
  },
  {
    a: "The equivalent capacitance of two capacitors connected in parallel is the simple sum of their individual capacitances: $C_{eq} = C_1 + C_2$.",
    r: "The total charge supplied by the source equals the sum of the charges on individual capacitors: $Q = Q_1 + Q_2 = C_1 V + C_2 V = (C_1 + C_2)V$.",
    ans: 0,
    exp: "Dividing total charge $Q$ by the common potential difference $V$ yields $C_{eq} = \\frac{Q}{V} = C_1 + C_2$. (R) correctly explains (A)."
  },
  {
    a: "When two charged capacitors of capacitances $C_1$ and $C_2$ charged to potentials $V_1$ and $V_2$ are connected in parallel, the common potential is $V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$.",
    r: "By the law of conservation of electric charge, the total initial charge before connection equals the total final charge after connection.",
    ans: 0,
    exp: "Total initial charge is $Q = C_1 V_1 + C_2 V_2$. After connection, $Q = (C_1 + C_2)V_c$. Hence $V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$. (R) correctly explains (A)."
  },
  {
    a: "When two charged capacitors are connected in parallel, there is an unavoidable loss of electrostatic energy given by $\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2$.",
    r: "The missing electrostatic energy is dissipated as heat in the connecting wires due to finite resistance and as electromagnetic radiation during the transient redistribution of charge.",
    ans: 0,
    exp: "Subtracting final stored energy from initial stored energy gives $\\Delta U = U_i - U_f = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2 \\ge 0$. This energy is dissipated as Joule heat and EM radiation. (R) correctly explains (A)."
  },
  {
    a: "The loss of energy upon connecting two charged capacitors in parallel is zero if and only if their initial potentials are identical ($V_1 = V_2$).",
    r: "When $V_1 = V_2$, no potential difference exists between the capacitors, so no transient current flows and no charge redistribution takes place.",
    ans: 0,
    exp: "From $\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2$, setting $V_1 = V_2$ yields $\\Delta U = 0$ as no charge flows. (R) explains (A)."
  },
  {
    a: "In a series combination of two capacitors $C_1$ and $C_2$, the voltage across $C_1$ is $V_1 = \\left(\\frac{C_2}{C_1 + C_2}\\right)V$, where $V$ is total applied voltage.",
    r: "In a series circuit, $Q = C_1 V_1 = C_2 V_2$, meaning the potential difference across a capacitor is inversely proportional to its capacitance.",
    ans: 0,
    exp: "Since $Q = C_1 V_1 = C_{eq}V = \\left(\\frac{C_1 C_2}{C_1 + C_2}\\right)V$, dividing by $C_1$ gives $V_1 = \\left(\\frac{C_2}{C_1 + C_2}\\right)V$. (R) correctly explains (A)."
  },
  {
    a: "In a balanced Wheatstone bridge network composed of five capacitors, no charge flows through the central bridge capacitor.",
    r: "For a balanced bridge satisfying $\\frac{C_1}{C_2} = \\frac{C_3}{C_4}$, the potential at the two junctions of the central branch is identical, producing zero potential difference across it.",
    ans: 0,
    exp: "Because $V_A = V_B$, the potential difference across the bridge capacitor is $\\Delta V = 0$, so it stores zero charge and can be removed without altering the circuit equivalent capacitance. (R) correctly explains (A)."
  },
  {
    a: "The total electrostatic energy stored in a combination of capacitors is always equal to the sum of the energies stored in individual capacitors, whether they are connected in series or in parallel.",
    r: "Energy is a scalar quantity and total electrostatic field energy in space is the volume integral of energy density $\\int \\frac{1}{2}\\varepsilon_0 E^2\\, dV$.",
    ans: 0,
    exp: "For series: $\\sum \\frac{Q^2}{2C_i} = \\frac{Q^2}{2}\\sum \\frac{1}{C_i} = \\frac{Q^2}{2C_{eq}}$. For parallel: $\\sum \\frac{1}{2}C_i V^2 = \\frac{1}{2}(\\sum C_i)V^2 = \\frac{1}{2}C_{eq}V^2$. Thus total energy is strictly additive in all configurations. (R) correctly explains (A)."
  },
  {
    a: "When two identical capacitors of capacitance $C$ are connected in series, the equivalent capacitance is $C/2$.",
    r: "For $n$ identical capacitors in series, the equivalent capacitance is given by $C_{eq} = \\frac{C}{n}$.",
    ans: 0,
    exp: "For $n = 2$, $C_{eq} = \\frac{C \\times C}{C + C} = \\frac{C}{2}$. (R) correctly explains (A)."
  },
  {
    a: "When two identical capacitors of capacitance $C$ are connected in parallel, the equivalent capacitance is $2C$.",
    r: "For $n$ identical capacitors connected in parallel, the equivalent capacitance is given by $C_{eq} = nC$.",
    ans: 0,
    exp: "For $n = 2$, $C_{eq} = C + C = 2C$. (R) correctly explains (A)."
  },
  {
    a: "If $n$ identical capacitors each of capacitance $C$ are connected in series across a voltage $V$, the energy stored in the combination is $\\frac{1}{2n}CV^2$.",
    r: "The equivalent capacitance of $n$ identical capacitors in series is $C_{eq} = \\frac{C}{n}$, so $U = \\frac{1}{2}C_{eq}V^2 = \\frac{1}{2}\\left(\\frac{C}{n}\\right)V^2$.",
    ans: 0,
    exp: "$U = \\frac{1}{2}C_{eq}V^2 = \\frac{1}{2}\\frac{C}{n}V^2 = \\frac{CV^2}{2n}$. (R) correctly explains (A)."
  },
  {
    a: "If $n$ identical capacitors each of capacitance $C$ are connected in parallel across a voltage $V$, the total energy stored is $\\frac{n}{2}CV^2$.",
    r: "The equivalent capacitance is $C_{eq} = nC$, so $U = \\frac{1}{2}C_{eq}V^2 = \\frac{1}{2}(nC)V^2 = \\frac{n}{2}CV^2$.",
    ans: 0,
    exp: "Each capacitor stores $\\frac{1}{2}CV^2$, so $n$ parallel capacitors store $n \\times \\frac{1}{2}CV^2 = \\frac{n}{2}CV^2$. (R) correctly explains (A)."
  },
  {
    a: "The ratio of equivalent capacitance in parallel to that in series for $n$ identical capacitors is $n^2$.",
    r: "$C_{parallel} = nC$ and $C_{series} = \\frac{C}{n}$, so $\\frac{C_{parallel}}{C_{series}} = \\frac{nC}{C/n} = n^2$.",
    ans: 0,
    exp: "$\\frac{C_p}{C_s} = \\frac{nC}{C/n} = n^2$. (R) correctly explains (A)."
  },
  {
    a: "When a charged capacitor is connected in parallel with an identical uncharged capacitor, the final energy of the system is half of the initial energy.",
    r: "The common potential becomes $V_c = \\frac{V_0}{2}$, and total final energy is $U_f = \\frac{1}{2}(2C)\\left(\\frac{V_0}{2}\\right)^2 = \\frac{1}{4}CV_0^2 = \\frac{U_i}{2}$.",
    ans: 0,
    exp: "Initial energy is $U_i = \\frac{1}{2}CV_0^2$. After connection, $C_{eq} = 2C$ and $V_c = V_0/2$, so $U_f = \\frac{1}{2}(2C)(V_0/2)^2 = \\frac{1}{4}CV_0^2 = \\frac{1}{2}U_i$. The remaining $50\\%$ is dissipated as heat. (R) explains (A)."
  },
  {
    a: "Connecting capacitors in series increases the effective dielectric breakdown voltage of the combination.",
    r: "The total applied voltage is distributed across the series capacitors ($V = V_1 + V_2 + \\dots$), so each individual capacitor experiences only a fraction of the total applied voltage.",
    ans: 0,
    exp: "Because voltage divides across series elements, the maximum operating voltage of the combination is the sum of the breakdown voltages (for matched capacitors), preventing dielectric breakdown. (R) correctly explains (A)."
  },
  {
    a: "Connecting capacitors in parallel increases the total charge storage capacity at a given operating voltage.",
    r: "In parallel, equivalent capacitance increases ($C_{eq} = \\sum C_i$), and total charge stored at fixed voltage $V$ is $Q = C_{eq}V$.",
    ans: 0,
    exp: "Because $C_{eq}$ increases, the bank can store a vastly larger total charge $Q = C_{eq}V$ without exceeding the voltage rating of any individual capacitor. (R) correctly explains (A)."
  },
  {
    a: "In an infinite ladder network of capacitors where each rung has a series capacitor $C_1$ and a shunt capacitor $C_2$, the equivalent capacitance satisfies a quadratic equation.",
    r: "Adding one more repeating unit to an infinite ladder network leaves its equivalent capacitance unchanged: $C_{eq} = C_1 + \\frac{C_2 C_{eq}}{C_2 + C_{eq}}$.",
    ans: 0,
    exp: "Because an infinite chain minus one unit is still identical to the infinite chain, $C_{eq}$ can be found by self-consistency, yielding a quadratic equation for $C_{eq}$. (R) correctly explains (A)."
  },
  {
    a: "When three capacitors of capacitances $1\\mu\\text{F}, 2\\mu\\text{F}, 3\\mu\\text{F}$ are connected in series, the capacitor with $1\\mu\\text{F}$ stores the maximum energy.",
    r: "In a series connection, charge $Q$ is identical for all capacitors, so stored energy $U = \\frac{Q^2}{2C}$ is inversely proportional to capacitance.",
    ans: 0,
    exp: "Because $Q$ is constant, $U \\propto \\frac{1}{C}$. The smallest capacitor ($1\\mu\\text{F}$) has the largest energy: $U_1 : U_2 : U_3 = 1 : \\frac{1}{2} : \\frac{1}{3} = 6 : 3 : 2$. (R) correctly explains (A)."
  },
  {
    a: "When three capacitors of capacitances $1\\mu\\text{F}, 2\\mu\\text{F}, 3\\mu\\text{F}$ are connected in parallel, the capacitor with $3\\mu\\text{F}$ stores the maximum energy.",
    r: "In a parallel connection, potential difference $V$ is identical for all capacitors, so stored energy $U = \\frac{1}{2}CV^2$ is directly proportional to capacitance.",
    ans: 0,
    exp: "Because $V$ is constant, $U \\propto C$. The largest capacitor ($3\\mu\\text{F}$) stores the greatest energy: $U_1 : U_2 : U_3 = 1 : 2 : 3$. (R) correctly explains (A)."
  },
  {
    a: "If two charged capacitors are connected with opposite polarities (positive plate of one to negative plate of the other), the common potential is $V_c = \\frac{|C_1 V_1 - C_2 V_2|}{C_1 + C_2}$.",
    r: "Connecting opposite polarities causes partial cancellation of charge, making the net conserved charge $Q_{net} = |Q_1 - Q_2| = |C_1 V_1 - C_2 V_2|$.",
    ans: 0,
    exp: "By charge conservation with opposing signs, $Q_{net} = |C_1 V_1 - C_2 V_2|$. The total capacitance remains $(C_1 + C_2)$, giving $V_c = \\frac{|C_1 V_1 - C_2 V_2|}{C_1 + C_2}$. (R) explains (A)."
  },
  {
    a: "The equivalent capacitance of any combination of capacitors depends on the applied voltage.",
    r: "Capacitance of a linear capacitor is a purely geometric and material constant independent of voltage and charge.",
    ans: 3,
    exp: "Assertion is false: equivalent capacitance is an intrinsic property determined solely by geometry, dielectric materials, and topology of connection, independent of applied voltage. Reason is true."
  },
  {
    a: "A system of $N$ parallel conducting plates separated by identical distance $d$ with alternate plates connected together forms $(N - 1)$ parallel capacitors in parallel.",
    r: "Each adjacent pair of oppositely charged plates forms an independent parallel plate capacitor of capacitance $C_0 = \\frac{\\varepsilon_0 A}{d}$, and all $(N - 1)$ such units share common potential terminals.",
    ans: 0,
    exp: "With $N$ interleaved plates, there are $(N - 1)$ spaces between them, each acting as a parallel capacitor, resulting in $C_{eq} = (N - 1)\\frac{\\varepsilon_0 A}{d}$. (R) correctly explains (A)."
  },
  {
    a: "The energy stored in a capacitor combination is conserved during the sharing of charges without any heat dissipation.",
    r: "Charge is conserved during any redistribution of charge between capacitors.",
    ans: 3,
    exp: "Assertion is false: electrostatic energy is NOT conserved during charge redistribution; Joule heating in the connecting wires always causes an energy loss $\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2$. Reason is true: charge is strictly conserved."
  },
  {
    a: "Two capacitors $C_1$ and $C_2$ ($C_1 > C_2$) are charged to the same potential $V$ and then connected in parallel. The energy loss is zero.",
    r: "Energy loss during parallel connection is $\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2$, which vanishes when $V_1 = V_2 = V$.",
    ans: 0,
    exp: "Since both capacitors are already at the same potential $V$, no potential gradient exists to drive current between them, meaning zero heat loss ($\\Delta U = 0$). (R) correctly explains (A)."
  }
];

// 7 Generator MCQs on Combination of Capacitors and Energy Stored
const mcqData = [
  {
    q: "Two capacitors $C_1 = 3\\mu\\text{F}$ and $C_2 = 6\\mu\\text{F}$ are connected in series across a $180\\text{ V}$ DC source. The potential difference across the $3\\mu\\text{F}$ capacitor is:",
    opts: ["$120\\text{ V}$", "$60\\text{ V}$", "$90\\text{ V}$", "$180\\text{ V}$"],
    ans: 0,
    exp: "Equivalent capacitance is $C_{eq} = \\frac{3 \\times 6}{3 + 6} = 2\\mu\\text{F}$. Charge is $Q = C_{eq}V = 2\\mu\\text{F} \\times 180\\text{ V} = 360\\mu\\text{C}$. Voltage across $C_1$ is $V_1 = \\frac{Q}{C_1} = \\frac{360\\mu\\text{C}}{3\\mu\\text{F}} = 120\\text{ V}$."
  },
  {
    q: "A $2\\mu\\text{F}$ capacitor is charged to $100\\text{ V}$ and then disconnected from the battery. It is then connected in parallel with an uncharged $8\\mu\\text{F}$ capacitor. The common potential of the combination is:",
    opts: ["$20\\text{ V}$", "$25\\text{ V}$", "$50\\text{ V}$", "$10\\text{ V}$"],
    ans: 0,
    exp: "$V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2} = \\frac{2\\mu\\text{F} \\times 100\\text{ V} + 0}{2\\mu\\text{F} + 8\\mu\\text{F}} = \\frac{200\\mu\\text{C}}{10\\mu\\text{F}} = 20\\text{ V}$."
  },
  {
    q: "In the previous question, the electrostatic energy lost during the process of charge sharing is:",
    opts: ["$8\\text{ mJ}$", "$10\\text{ mJ}$", "$2\\text{ mJ}$", "$4\\text{ mJ}$"],
    ans: 0,
    exp: "$\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}(V_1 - V_2)^2 = \\frac{1}{2}\\frac{2 \\times 8}{2 + 8} \\times 10^{-6} \\times (100 - 0)^2 = \\frac{1}{2}\\left(\\frac{16}{10}\\right) \\times 10^{-6} \\times 10^4 = 0.8 \\times 10^{-2}\\text{ J} = 8\\text{ mJ}$."
  },
  {
    q: "Three capacitors of capacitances $2\\mu\\text{F}, 3\\mu\\text{F},$ and $6\\mu\\text{F}$ are connected in series. The equivalent capacitance of the combination is:",
    opts: ["$1\\mu\\text{F}$", "$11\\mu\\text{F}$", "$0.5\\mu\\text{F}$", "$2\\mu\\text{F}$"],
    ans: 0,
    exp: "$\\frac{1}{C_{eq}} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1\\mu\\text{F}^{-1} \\implies C_{eq} = 1\\mu\\text{F}$."
  },
  {
    q: "Four identical capacitors each of capacitance $C$ are connected as shown in a bridge network. If a fifth capacitor of capacitance $2C$ is connected between the bridge diagonals, the equivalent capacitance between the input terminals is:",
    opts: ["$C$", "$2C$", "$4C$", "$C/2$"],
    ans: 0,
    exp: "The bridge is symmetrical with all four branch capacitors equal to $C$, satisfying $\\frac{C}{C} = \\frac{C}{C} = 1$. The bridge is balanced, so no charge flows through the central $2C$ capacitor. The circuit reduces to two parallel branches of two series capacitors: $C_{eq} = \\frac{C}{2} + \\frac{C}{2} = C$."
  },
  {
    q: "A capacitor of $10\\mu\\text{F}$ charged to $50\\text{ V}$ is connected across another capacitor of $10\\mu\\text{F}$ charged to $100\\text{ V}$ with like plates connected together. The common potential is:",
    opts: ["$75\\text{ V}$", "$50\\text{ V}$", "$150\\text{ V}$", "$25\\text{ V}$"],
    ans: 0,
    exp: "$V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2} = \\frac{10(50) + 10(100)}{10 + 10} = \\frac{500 + 1000}{20} = \\frac{1500}{20} = 75\\text{ V}$."
  },
  {
    q: "A system of 5 parallel conducting plates of equal area $A$ are placed with uniform separation $d$. Alternate plates are connected together to form a capacitor bank. The equivalent capacitance is:",
    opts: ["$4\\frac{\\varepsilon_0 A}{d}$", "$5\\frac{\\varepsilon_0 A}{d}$", "$2\\frac{\\varepsilon_0 A}{d}$", "$\\frac{\\varepsilon_0 A}{4d}$"],
    ans: 0,
    exp: "With $N = 5$ interleaved plates, there are $N - 1 = 4$ identical parallel plate capacitors connected in parallel: $C_{eq} = (N - 1)\\frac{\\varepsilon_0 A}{d} = 4\\frac{\\varepsilon_0 A}{d}$."
  }
];

// 20 Authentic Numerical Questions on Combination of Capacitors
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Equivalent capacitance of two capacitors in series C_eq = C1*C2 / (C1+C2)
for (let i = 1; i <= 5; i++) {
  const C1 = 2 * i;
  const C2 = 2 * i;
  const Ceq = i;
  addNumerical(
    `Two identical capacitors of capacitance $C_1 = C_2 = ${C1}\\mu\\text{F}$ are connected in series. Find the equivalent capacitance $C_{eq}$ (in $\\mu\\text{F}$).`,
    Ceq,
    `$C_{eq} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{${C1} \\times ${C2}}{${C1 + C2}} = \\frac{${C1 * C2}}{${2 * C1}} = ${Ceq}\\mu\\text{F}$.`
  );
}

// 2. Equivalent capacitance of two capacitors in parallel C_eq = C1 + C2
for (let i = 1; i <= 5; i++) {
  const C1 = 4 * i;
  const C2 = 6 * i;
  const Ceq = 10 * i;
  addNumerical(
    `Two capacitors of capacitances $C_1 = ${C1}\\mu\\text{F}$ and $C_2 = ${C2}\\mu\\text{F}$ are connected in parallel. Determine the equivalent capacitance $C_{eq}$ (in $\\mu\\text{F}$) of the combination.`,
    Ceq,
    `$C_{eq} = C_1 + C_2 = ${C1}\\mu\\text{F} + ${C2}\\mu\\text{F} = ${Ceq}\\mu\\text{F}$.`
  );
}

// 3. Common potential V_c = (C1*V1) / (C1 + C2) with uncharged C2
for (let i = 1; i <= 5; i++) {
  const C1 = 2;
  const C2 = 2 * i; // C1 + C2 = 2 + 2i
  const V1 = 10 * (C1 + C2); // so Vc = 10 * C1 = 20 V
  const Vc = Math.round((C1 * V1) / (C1 + C2));
  addNumerical(
    `A capacitor $C_1 = ${C1}\\mu\\text{F}$ is charged to $V_1 = ${V1}\\text{ V}$ and then connected in parallel across an uncharged capacitor $C_2 = ${C2}\\mu\\text{F}$. Calculate the resulting common potential $V_c$ (in Volts).`,
    Vc,
    `$V_c = \\frac{C_1 V_1}{C_1 + C_2} = \\frac{${C1} \\times ${V1}}{${C1 + C2}} = ${Vc}\\text{ V}$.`
  );
}

// 4. Energy loss Delta U = 1/2 * C1*C2/(C1+C2) * V1^2 (in microjoules)
for (let i = 1; i <= 5; i++) {
  const C1 = 2; // microfarads
  const C2 = 2; // microfarads -> C1*C2/(C1+C2) = 1 uF
  const V1 = 10 * i; // volts -> Delta U = 1/2 * 1 * V1^2
  const dU = Math.round(0.5 * 1 * V1 * V1);
  addNumerical(
    `A capacitor $C_1 = 2\\mu\\text{F}$ is charged to $V_1 = ${V1}\\text{ V}$ and connected in parallel with an uncharged capacitor $C_2 = 2\\mu\\text{F}$. Find the electrostatic energy loss $\\Delta U$ (in $\\mu\\text{J}$) during the sharing of charges.`,
    dU,
    `$\\Delta U = \\frac{1}{2}\\frac{C_1 C_2}{C_1 + C_2}V_1^2 = \\frac{1}{2}\\left(\\frac{2 \\times 2}{2 + 2}\\right)(${V1})^2 = \\frac{1}{2}(1)(${V1 * V1}) = ${dU}\\mu\\text{J}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part2Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part2Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part2Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part2Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 2 generated: ${part2Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part2Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
