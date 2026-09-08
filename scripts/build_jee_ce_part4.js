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
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}\nText: ${text}`);
    }
  }
}

const subTopic = "Internal resistance of a cell and EMF";
const chapter = "Current Electricity";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Internal resistance of a cell and EMF
const arData = [
  {
    a: "The terminal potential difference across a discharging cell is always less than its electromotive force (EMF).",
    r: "When current $I$ flows out of the positive terminal, an internal potential drop $I r$ occurs across the electrolyte resistance: $V = E - I r$.",
    ans: 0,
    exp: "Because of internal resistance $r$, current $I$ drawn from the cell produces an internal voltage drop $Ir$, resulting in terminal voltage $V = E - I r < E$. (R) correctly explains (A)."
  },
  {
    a: "During the charging of a secondary cell, the terminal potential difference across the cell is greater than its EMF.",
    r: "When charging, current is forced into the positive terminal by an external charger, making $V = E + I r$.",
    ans: 0,
    exp: "In charging mode, current enters the positive terminal; reversing the current direction transforms the terminal equation into $V = E + I r > E$. (R) correctly explains (A)."
  },
  {
    a: "The electromotive force (EMF) of a cell is not a mechanical force, but rather potential energy per unit charge.",
    r: "EMF is defined as the work done by non-electrostatic chemical forces in moving a unit positive charge completely around a closed circuit: $\\mathcal{E} = \\frac{dW}{dq}$.",
    ans: 0,
    exp: "Despite the historical term 'force', EMF has dimensions of electric potential (Joules per Coulomb or Volts). (R) correctly explains (A)."
  },
  {
    a: "On open circuit, the terminal potential difference of a cell is exactly equal to its EMF.",
    r: "When no current is drawn from the cell ($I = 0$), the internal ohmic drop $I r$ vanishes: $V = E - (0)r = E$.",
    ans: 0,
    exp: "With zero current, no voltage is dropped across the internal resistance, so measured terminal voltage matches open-circuit EMF. (R) correctly explains (A)."
  },
  {
    a: "The internal resistance of a cell increases with time as the cell is used.",
    r: "During discharge, electrochemical reactions deplete active ions, form resistive deposits on electrodes (polarization), and alter electrolyte concentration.",
    ans: 0,
    exp: "Electrolyte depletion, buildup of hydrogen gas or reaction products on electrodes, and degradation of plate surfaces cause internal resistance to rise progressively. (R) correctly explains (A)."
  },
  {
    a: "The internal resistance of a primary cell decreases when the temperature of the electrolyte is increased.",
    r: "Higher temperature increases the kinetic energy and mobility of ions in the liquid electrolyte, reducing viscous drag on ion migration.",
    ans: 0,
    exp: "Unlike metals whose resistance increases with temperature, electrolytic resistance decreases because elevated thermal energy enhances ionic dissociation and ionic mobility. (R) correctly explains (A)."
  },
  {
    a: "When two identical cells of EMF $E$ and internal resistance $r$ are connected in parallel, the equivalent EMF is still $E$.",
    r: "Identical cells in parallel maintain the same potential difference across the common busbars as a single cell.",
    ans: 0,
    exp: "From $E_{\\text{eq}} = \\frac{E/r + E/r}{1/r + 1/r} = \\frac{2E/r}{2/r} = E$. The parallel combination maintains the single-cell EMF while halving the internal resistance to $r/2$. (R) correctly explains (A)."
  },
  {
    a: "If $n$ identical cells each of EMF $E$ and internal resistance $r$ are connected in series, the short-circuit current is the same as that of a single cell.",
    r: "Total EMF becomes $n E$ and total internal resistance becomes $n r$, so $I_{\\text{sc}} = \\frac{n E}{n r} = \\frac{E}{r}$.",
    ans: 0,
    exp: "Both EMF and internal resistance scale by $n$, so their ratio $\\frac{nE}{nr} = \\frac{E}{r}$ remains identical to that of a single cell. (R) correctly explains (A)."
  },
  {
    a: "To obtain maximum current through a low external resistance $R$, cells should be connected in parallel.",
    r: "When $R \\ll r$, parallel grouping reduces the total internal resistance to $r/m$, so current $I \\approx \\frac{E}{R + r/m} \\approx \\frac{m E}{r}$.",
    ans: 0,
    exp: "When the load resistance is small compared to internal resistance, connecting cells in parallel significantly diminishes source impedance and maximizes delivered current. (R) correctly explains (A)."
  },
  {
    a: "To obtain maximum current through a very high external resistance $R$, cells should be connected in series.",
    r: "When $R \\gg r$, series grouping increases the effective EMF to $n E$ without significantly affecting the total circuit resistance ($n r \\ll R$).",
    ans: 0,
    exp: "When load resistance $R$ dominates, $I = \\frac{n E}{R + n r} \\approx \\frac{n E}{R}$, which is $n$ times the current from a single cell. (R) correctly explains (A)."
  },
  {
    a: "In a mixed grouping of $N = m \\times n$ identical cells, maximum current is delivered to an external load when $R = \\frac{n r}{m}$.",
    r: "Maximum power and maximum current occur when the external load resistance matches the total internal resistance of the cell matrix.",
    ans: 0,
    exp: "By the maximum power transfer theorem, current $I = \\frac{n E}{R + nr/m}$ is maximized when $R = \\frac{nr}{m}$. (R) correctly explains (A)."
  },
  {
    a: "If out of $n$ identical cells connected in series to an external resistance, $m$ cells are connected with reversed polarity, the net EMF becomes $(n - 2m)E$.",
    r: "Each reversed cell not only cancels the EMF of one correctly connected cell, but also subtracts its own EMF from the total forward sum.",
    ans: 0,
    exp: "Forward cells contribute $(n - m)E$ and reversed cells oppose with $-m E$, giving net EMF $E_{\\text{net}} = (n - m)E - m E = (n - 2m)E$. (R) correctly explains (A)."
  },
  {
    a: "Reversing the polarity of $m$ cells in a series combination of $n$ cells does not reduce the total internal resistance.",
    r: "Internal resistance is an ohmic property of the physical electrolyte and plates, independent of the orientation of cell terminals.",
    ans: 0,
    exp: "Ohmic resistance is a positive scalar and always adds in series ($r_{\\text{total}} = n r$), irrespective of polarity orientation. (R) correctly explains (A)."
  },
  {
    a: "The slope of the $V$ versus $I$ graph for a discharging cell equals the negative of its internal resistance ($-r$).",
    r: "The terminal potential difference equation $V = E - I r$ is a linear relation with intercept $E$ and slope $-r$.",
    ans: 0,
    exp: "Plotting $V$ on the y-axis against $I$ on the x-axis gives a straight line $y = c - mx$ with slope $\\frac{dV}{dI} = -r$ and y-intercept $E$. (R) correctly explains (A)."
  },
  {
    a: "The x-intercept of the $V-I$ graph of a discharging cell represents the short-circuit current.",
    r: "At the x-axis, the terminal voltage is zero ($V = 0$), so the current drawn is $I_{\\text{sc}} = \\frac{E}{r}$.",
    ans: 0,
    exp: "Setting $V = 0$ in $V = E - I r$ gives $I = \\frac{E}{r} = I_{\\text{sc}}$, which is the x-intercept. (R) correctly explains (A)."
  },
  {
    a: "A potentiometer measures the EMF of a cell more accurately than any ordinary voltmeter.",
    r: "A potentiometer operates at the null point where zero current is drawn from the test cell, measuring the true open-circuit EMF without loading.",
    ans: 0,
    exp: "Because $I = 0$ at balance, no internal voltage drop occurs ($I r = 0$), avoiding the loading error that plagues voltmeters of finite resistance. (R) correctly explains (A)."
  },
  {
    a: "Connecting two cells of unequal EMFs in parallel without an external load causes an internal circulating current.",
    r: "The difference in EMFs creates a net driving voltage that drives current around the local closed loop formed by the two cells.",
    ans: 0,
    exp: "With no external load, the net EMF around the loop is $E_1 - E_2$. A circulating loop current $I_{\\text{circ}} = \\frac{E_1 - E_2}{r_1 + r_2}$ flows, discharging the stronger cell and charging the weaker cell. (R) correctly explains (A)."
  },
  {
    a: "When a cell is short-circuited, its terminal potential difference drops to zero.",
    r: "A short circuit connects the cell terminals with a zero-resistance wire ($R = 0$), so $V = I R = I(0) = 0$.",
    ans: 0,
    exp: "Terminal voltage is $V = I R$. When external resistance $R = 0$, $V = 0$, and the entire EMF drops across the internal resistance ($Ir = E$). (R) correctly explains (A)."
  },
  {
    a: "A battery of EMF $E$ with zero internal resistance maintains a constant terminal voltage $E$ regardless of the load current drawn.",
    r: "With $r = 0$, the internal voltage drop $I r$ is identically zero for all values of current: $V = E - I(0) = E$.",
    ans: 0,
    exp: "An ideal voltage source has $r = 0$, producing a perfectly horizontal $V-I$ line with constant voltage $V = E$. (R) correctly explains (A)."
  },
  {
    a: "Increasing the surface area of electrodes immersed in an electrolyte reduces the internal resistance of a cell.",
    r: "The resistance of an electrolyte path varies inversely with the effective cross-sectional area of ion flow ($r \\propto \\frac{1}{A}$).",
    ans: 0,
    exp: "Larger electrode area provides a wider path for ionic current through the solution, thereby lowering the internal resistance. (R) correctly explains (A)."
  },
  {
    a: "Decreasing the distance between electrodes in a chemical cell reduces its internal resistance.",
    r: "Internal resistance is directly proportional to the separation distance between the plates ($r \\propto d$).",
    ans: 0,
    exp: "The conduction path through the electrolyte is shorter, directly reducing the internal ohmic resistance. (R) correctly explains (A)."
  },
  {
    a: "A cell can never deliver an electric current greater than its short-circuit current $\\frac{E}{r}$.",
    r: "Total circuit resistance is $R + r$; since external load $R \\ge 0$, current $I = \\frac{E}{R + r} \\le \\frac{E}{r}$.",
    ans: 0,
    exp: "Because $R \\ge 0$, the denominator $R + r \\ge r$, which caps the maximum achievable current at $\\frac{E}{r}$. (R) correctly explains (A)."
  },
  {
    a: "In parallel combination of two non-identical cells, the equivalent EMF lies strictly between the EMFs of the individual cells.",
    r: "The equivalent EMF is a weighted average of individual EMFs: $E_{\\text{eq}} = \\frac{E_1/r_1 + E_2/r_2}{1/r_1 + 1/r_2}$.",
    ans: 0,
    exp: "Since $E_{\\text{eq}} = \\frac{E_1 r_2 + E_2 r_1}{r_1 + r_2}$ is a convex linear combination, $E_1 < E_{\\text{eq}} < E_2$ (assuming $E_1 < E_2$). (R) correctly explains (A)."
  },
  {
    a: "When a lead-acid accumulator is fully charged, the specific gravity of its electrolyte increases.",
    r: "During charging, sulfuric acid is regenerated at the electrodes according to the reversible chemical reaction, increasing acid concentration in the solution.",
    ans: 0,
    exp: "Sulfuric acid ($H_2SO_4$) is produced back into the solution during charging, raising the density/specific gravity of the electrolyte from $\\approx 1.18$ to $\\approx 1.28$. (R) correctly explains (A)."
  },
  {
    a: "A voltmeter of finite resistance connected across a battery with non-zero internal resistance measures less than the true EMF.",
    r: "The voltmeter draws a non-zero current $I = \\frac{E}{R_V + r}$, causing an internal drop $I r$ so that $V = E - I r < E$.",
    ans: 0,
    exp: "Because the voltmeter resistance $R_V$ is finite, a small current flows, dropping voltage across $r$ and under-measuring EMF. (R) correctly explains (A)."
  },
  {
    a: "The electromotive force of a cell depends on the physical dimensions of the container.",
    r: "Internal resistance of a cell depends on the size of the container and separation of plates.",
    ans: 3,
    exp: "EMF depends solely on the chemical nature of the electrodes and the electrolyte (standard reduction potentials), completely independent of physical dimensions or cell size. Assertion is false, Reason is true. (D)."
  }
];

// 7 MCQ questions for Internal resistance of a cell and EMF
const mcqData = [
  {
    q: "A cell of EMF $E$ and internal resistance $r$ is connected across a variable external resistor $R$. When $R = 2\\,\\Omega$, the current is $1\\text{ A}$. When $R = 5\\,\\Omega$, the current is $0.5\\text{ A}$. The values of EMF $E$ and internal resistance $r$ are:",
    opts: [
      "$E = 3\\text{ V}, r = 1\\,\\Omega$",
      "$E = 4\\text{ V}, r = 2\\,\\Omega$",
      "$E = 6\\text{ V}, r = 1\\,\\Omega$",
      "$E = 5\\text{ V}, r = 3\\,\\Omega$"
    ],
    ans: 0,
    exp: "We have $E = I(R + r)$. Case 1: $E = 1(2 + r) = 2 + r$. Case 2: $E = 0.5(5 + r) = 2.5 + 0.5r$. Equating both: $2 + r = 2.5 + 0.5r \\implies 0.5r = 0.5 \\implies r = 1\\,\\Omega$. Then $E = 2 + 1 = 3\\text{ V}$."
  },
  {
    q: "Two cells of EMFs $E_1 = 6\\text{ V}$ and $E_2 = 3\\text{ V}$ with internal resistances $r_1 = 1\\,\\Omega$ and $r_2 = 2\\,\\Omega$ are connected in parallel with their positive terminals together. The equivalent EMF of the combination is:",
    opts: [
      "$3.0\\text{ V}$",
      "$4.5\\text{ V}$",
      "$5.0\\text{ V}$",
      "$5.5\\text{ V}$"
    ],
    ans: 2,
    exp: "$E_{\\text{eq}} = \\frac{E_1/r_1 + E_2/r_2}{1/r_1 + 1/r_2} = \\frac{6/1 + 3/2}{1/1 + 1/2} = \\frac{6 + 1.5}{1.5} = \\frac{7.5}{1.5} = 5.0\\text{ V}$."
  },
  {
    q: "A battery of $12$ identical cells connected in series is used to send current through an external resistor. Two of the cells are accidentally connected in reverse polarity. The percentage decrease in the net EMF of the battery is:",
    opts: [
      "$16.7\\%$",
      "$25\\%$",
      "$33.3\\%$",
      "$50\\%$"
    ],
    ans: 2,
    exp: "Initial EMF is $E_i = 12E$. When $2$ cells are reversed, net EMF becomes $E_f = (12 - 2 \\times 2)E = 8E$. Percentage decrease is $\\frac{12E - 8E}{12E} \\times 100\\% = \\frac{4}{12} \\times 100\\% = 33.3\\%$."
  },
  {
    q: "A secondary cell of EMF $2\\text{ V}$ and internal resistance $0.5\\,\\Omega$ is being charged by a DC supply of $12\\text{ V}$ using a series limiting resistor of $4.5\\,\\Omega$. The terminal potential difference across the cell during charging is:",
    opts: [
      "$2.0\\text{ V}$",
      "$2.5\\text{ V}$",
      "$3.0\\text{ V}$",
      "$4.0\\text{ V}$"
    ],
    ans: 2,
    exp: "Total circuit resistance is $R + r = 4.5 + 0.5 = 5\\,\\Omega$. Net driving voltage is $V_{\\text{supply}} - E = 12 - 2 = 10\\text{ V}$. Charging current is $I = \\frac{10}{5} = 2\\text{ A}$. Terminal potential difference during charging is $V = E + I r = 2 + (2)(0.5) = 2 + 1 = 3.0\\text{ V}$."
  },
  {
    q: "A battery has open-circuit voltage of $10\\text{ V}$. When a resistor of $9\\,\\Omega$ is connected across its terminals, the terminal voltage drops to $9\\text{ V}$. The internal resistance of the battery is:",
    opts: [
      "$0.5\\,\\Omega$",
      "$1.0\\,\\Omega$",
      "$1.5\\,\\Omega$",
      "$2.0\\,\\Omega$"
    ],
    ans: 1,
    exp: "$r = \\left(\\frac{E}{V} - 1\\right)R = \\left(\\frac{10}{9} - 1\\right) \\times 9 = \\frac{1}{9} \\times 9 = 1.0\\,\\Omega$."
  },
  {
    q: "To get the maximum current through a resistance of $2.5\\,\\Omega$ using $20$ cells each of internal resistance $0.5\\,\\Omega$, the cells should be arranged in:",
    opts: [
      "$20$ cells in series in $1$ row",
      "$10$ cells in series in $2$ parallel rows",
      "$5$ cells in series in $4$ parallel rows",
      "$4$ cells in series in $5$ parallel rows"
    ],
    ans: 1,
    exp: "Condition for maximum current in mixed grouping is $R = \\frac{n r}{m}$. Given $m n = 20$ and $r = 0.5\\,\\Omega$, we have $2.5 = \\frac{n(0.5)}{m} \\implies \\frac{n}{m} = 5 \\implies n = 5m$. Substituting into $m n = 20$ gives $5m^2 = 20 \\implies m^2 = 4 \\implies m = 2$ rows, with $n = 5(2) = 10$ cells per row."
  },
  {
    q: "In an experiment with a cell, terminal voltage $V$ is plotted against current $I$. The graph is a straight line having intercept on the voltage axis of $1.5\\text{ V}$ and slope of $-0.5\\,\\Omega$. The short-circuit current of this cell is:",
    opts: [
      "$0.75\\text{ A}$",
      "$1.5\\text{ A}$",
      "$3.0\\text{ A}$",
      "$6.0\\text{ A}$"
    ],
    ans: 2,
    exp: "From $V = E - I r$, y-intercept is $E = 1.5\\text{ V}$ and slope magnitude is $r = 0.5\\,\\Omega$. The short-circuit current is $I_{\\text{sc}} = \\frac{E}{r} = \\frac{1.5}{0.5} = 3.0\\text{ A}$."
  }
];

// 20 Numerical questions for Internal resistance of a cell and EMF
const numData = [
  {
    q: "A cell of EMF $6\\text{ V}$ is connected to an external resistor of $5\\,\\Omega$. If the current in the circuit is $1\\text{ A}$, the internal resistance of the cell in Ohms is:",
    ans: 1,
    exp: "$E = I(R + r) \\implies 6 = 1(5 + r) \\implies r = 6 - 5 = 1\\,\\Omega$."
  },
  {
    q: "A battery of EMF $24\\text{ V}$ and internal resistance $4\\,\\Omega$ is connected across a variable resistor $R$. The maximum power in Watts that can be transferred to the resistor is:",
    ans: 36,
    exp: "$P_{\\text{max}} = \\frac{E^2}{4r} = \\frac{24^2}{4 \\times 4} = \\frac{576}{16} = 36\\text{ W}$."
  },
  {
    q: "A cell has an open-circuit voltage of $12\\text{ V}$. When a current of $2\\text{ A}$ is drawn from it, the terminal voltage drops to $10\\text{ V}$. The internal resistance in Ohms is:",
    ans: 1,
    exp: "$V = E - I r \\implies 10 = 12 - 2r \\implies 2r = 2 \\implies r = 1\\,\\Omega$."
  },
  {
    q: "Four cells, each of EMF $2\\text{ V}$ and internal resistance $0.5\\,\\Omega$, are connected in series to an external resistance of $6\\,\\Omega$. The current flowing in the circuit in Amperes is:",
    ans: 1,
    exp: "Total EMF is $E_{\\text{net}} = 4 \\times 2 = 8\\text{ V}$. Total internal resistance is $r_{\\text{net}} = 4 \\times 0.5 = 2\\,\\Omega$. Current is $I = \\frac{8}{6 + 2} = \\frac{8}{8} = 1\\text{ A}$."
  },
  {
    q: "Ten identical cells of EMF $1.5\\text{ V}$ and internal resistance $1\\,\\Omega$ each are connected in series. Two cells are connected in reverse. The net EMF of the combination in Volts is:",
    ans: 9,
    exp: "$E_{\\text{net}} = (n - 2m)E = (10 - 2 \\times 2)(1.5) = (10 - 4)(1.5) = 6 \\times 1.5 = 9\\text{ V}$."
  },
  {
    q: "A battery of $4$ cells in parallel, each of EMF $2\\text{ V}$ and internal resistance $2\\,\\Omega$, is connected across a $1.5\\,\\Omega$ load. The current drawn by the load in Amperes is:",
    ans: 1,
    exp: "Equivalent EMF is $E_{\\text{eq}} = 2\\text{ V}$. Equivalent internal resistance is $r_{\\text{eq}} = \\frac{2}{4} = 0.5\\,\\Omega$. Current is $I = \\frac{2}{1.5 + 0.5} = \\frac{2}{2} = 1\\text{ A}$."
  },
  {
    q: "A cell delivers a current of $2\\text{ A}$ through a $2\\,\\Omega$ resistor and a current of $1\\text{ A}$ through a $5\\,\\Omega$ resistor. The EMF of the cell in Volts is:",
    ans: 6,
    exp: "$E = 2(2 + r) = 4 + 2r$, and $E = 1(5 + r) = 5 + r$. Equating them: $4 + 2r = 5 + r \\implies r = 1\\,\\Omega$. Then $E = 5 + 1 = 6\\text{ V}$."
  },
  {
    q: "A battery of EMF $20\\text{ V}$ has internal resistance $2\\,\\Omega$. When its terminals are short-circuited, the current in Amperes is:",
    ans: 10,
    exp: "$I_{\\text{sc}} = \\frac{E}{r} = \\frac{20}{2} = 10\\text{ A}$."
  },
  {
    q: "Two cells of EMF $10\\text{ V}$ and $4\\text{ V}$ with internal resistances $2\\,\\Omega$ and $1\\,\\Omega$ are connected in parallel with opposing polarities. The short-circuit current of the combination in Amperes is:",
    ans: 2,
    exp: "Net loop EMF is $E_1 - E_2 = 10 - 4 = 6\\text{ V}$. Total internal loop resistance is $2 + 1 = 3\\,\\Omega$. Current is $I = \\frac{6}{3} = 2\\text{ A}$."
  },
  {
    q: "A storage battery is charged at a rate of $4\\text{ A}$ from a $14\\text{ V}$ source. If the battery EMF is $12\\text{ V}$ and its internal resistance is $0.5\\,\\Omega$, the terminal potential difference across the battery during charging in Volts is:",
    ans: 14,
    exp: "$V = E + I r = 12 + 4(0.5) = 12 + 2 = 14\\text{ V}$."
  },
  {
    q: "A battery delivers power to a $4\\,\\Omega$ load and a $9\\,\\Omega$ load at the exact same rate. The internal resistance of the battery in Ohms is:",
    ans: 6,
    exp: "Power is equal in two loads $R_1$ and $R_2$ when $r = \\sqrt{R_1 R_2}$. Thus $r = \\sqrt{4 \\times 9} = \\sqrt{36} = 6\\,\\Omega$."
  },
  {
    q: "A cell of EMF $4\\text{ V}$ has an internal resistance of $1\\,\\Omega$. The percentage of total electrical power generated that is lost as internal heat when an external load of $3\\,\\Omega$ is connected is:",
    ans: 25,
    exp: "Fraction of power lost internally is $\\frac{I^2 r}{I^2(R + r)} = \\frac{r}{R + r} = \\frac{1}{3 + 1} = \\frac{1}{4} = 25\\%$."
  },
  {
    q: "A cell having an EMF of $1.5\\text{ V}$ gives a current of $0.15\\text{ A}$ through an external resistance of $9\\,\\Omega$. The internal resistance in Ohms is:",
    ans: 1,
    exp: "$1.5 = 0.15(9 + r) \\implies 9 + r = \\frac{1.5}{0.15} = 10 \\implies r = 1\\,\\Omega$."
  },
  {
    q: "In an arrangement of $36$ identical cells each of internal resistance $1\\,\\Omega$, the cells are arranged in $m$ parallel rows each with $n$ cells in series. If the external resistance is $4\\,\\Omega$, the number of rows $m$ for maximum current is:",
    ans: 3,
    exp: "Condition for maximum current is $R = \\frac{n r}{m} \\implies 4 = \\frac{n(1)}{m} \\implies n = 4m$. Also $m n = 36 \\implies m(4m) = 36 \\implies 4m^2 = 36 \\implies m^2 = 9 \\implies m = 3$."
  },
  {
    q: "A cell of EMF $8\\text{ V}$ and internal resistance $2\\,\\Omega$ is connected to a load of $6\\,\\Omega$. The terminal potential difference across the cell in Volts is:",
    ans: 6,
    exp: "Current is $I = \\frac{8}{6 + 2} = 1\\text{ A}$. Terminal voltage is $V = I R = 1 \\times 6 = 6\\text{ V}$."
  },
  {
    q: "Two cells of EMF $4\\text{ V}$ and $2\\text{ V}$ with internal resistances of $1\\,\\Omega$ each are connected in parallel with similar polarities. The equivalent internal resistance of the combination in Ohms is:",
    ans: 0.5,
    exp: "$r_{\\text{eq}} = \\frac{r_1 r_2}{r_1 + r_2} = \\frac{1 \\times 1}{1 + 1} = 0.5\\,\\Omega$."
  },
  {
    q: "A battery of EMF $15\\text{ V}$ has internal resistance $3\\,\\Omega$. If the load resistance is $12\\,\\Omega$, the current in Amperes is:",
    ans: 1,
    exp: "$I = \\frac{E}{R + r} = \\frac{15}{12 + 3} = \\frac{15}{15} = 1\\text{ A}$."
  },
  {
    q: "A set of $8$ identical cells each of EMF $1.5\\text{ V}$ are connected in series. If $1$ cell is connected in reverse, the net EMF of the battery in Volts is:",
    ans: 9,
    exp: "$E_{\\text{net}} = (8 - 2 \\times 1)(1.5) = 6 \\times 1.5 = 9\\text{ V}$."
  },
  {
    q: "A cell connected across a $4\\,\\Omega$ resistor maintains a terminal potential difference of $2\\text{ V}$. If the internal resistance is $2\\,\\Omega$, the EMF of the cell in Volts is:",
    ans: 3,
    exp: "Current is $I = \\frac{V}{R} = \\frac{2}{4} = 0.5\\text{ A}$. EMF is $E = V + I r = 2 + 0.5(2) = 2 + 1 = 3\\text{ V}$."
  },
  {
    q: "A car battery of EMF $12\\text{ V}$ and internal resistance $0.05\\,\\Omega$ supplies current to a starter motor of resistance $0.15\\,\\Omega$. The current drawn by the motor in Amperes is:",
    ans: 60,
    exp: "$I = \\frac{E}{R + r} = \\frac{12}{0.15 + 0.05} = \\frac{12}{0.20} = 60\\text{ A}$."
  }
];

const part4Questions = [];

arData.forEach(item => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part4Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "Assertion-Reason",
    questionType: "Assertion-Reason",
    subtopic: subTopic,
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

  part4Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "Multiple Choice",
    questionType: "MCQ (Multiple Choice Question)",
    subtopic: subTopic,
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

  part4Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "Numerical",
    questionType: "Numerical",
    subtopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 4 generated: ${part4Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_ce_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
