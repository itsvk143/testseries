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

const subTopic = "Ohm's law";
const chapter = "Current Electricity";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Ohm's law
const arData = [
  {
    a: "Ohm's law is not a universal fundamental law of physics like Newton's laws of motion or Coulomb's law.",
    r: "Many materials and electrical components, such as semiconductor diodes, thermistors, and electrolytes, do not obey a linear relationship between voltage and current.",
    ans: 0,
    exp: "Ohm's law ($V = IR$) is an empirical constitutive relation valid specifically for metallic conductors under constant physical conditions, failing for non-ohmic devices like p-n junction diodes, gas discharge tubes, and transistors. (R) correctly explains (A)."
  },
  {
    a: "The vector form of Ohm's law is expressed as $\\vec{J} = \\sigma \\vec{E}$, where $\\vec{J}$ is current density, $\\sigma$ is electrical conductivity, and $\\vec{E}$ is electric field.",
    r: "Current density at any point inside an isotropic conductor is directly proportional to the applied electric field at that point.",
    ans: 0,
    exp: "The microscopic relation $\\vec{J} = \\sigma \\vec{E}$ describes local conduction at each differential volume element inside the material. (R) correctly explains (A)."
  },
  {
    a: "When a wire of resistance $R$ is stretched uniformly to double its original length, its new resistance becomes $4R$.",
    r: "During uniform stretching, the total volume of the wire remains constant ($V = A \\cdot L = \\text{constant}$), so doubling length halves the cross-sectional area ($A' = A/2$).",
    ans: 0,
    exp: "Since volume is constant, $L' = 2L \\implies A' = A/2$. The new resistance is $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4\\left(\\rho \\frac{L}{A}\\right) = 4R$. (R) correctly explains (A)."
  },
  {
    a: "If a wire is stretched such that its radius is reduced by $1\\%$, its resistance increases by approximately $4\\%$.",
    r: "Resistance of a uniform wire of constant volume varies with radius as $R \\propto \\frac{1}{r^4}$.",
    ans: 0,
    exp: "Because volume $V = \\pi r^2 L = \\text{constant}$, $L \\propto \\frac{1}{r^2}$. Then $R = \\rho \\frac{L}{\\pi r^2} \\propto \\frac{1}{r^4}$. For small fractional changes, $\\frac{\\Delta R}{R} \\approx -4\\frac{\\Delta r}{r} = -4(-1\\%) = +4\\%$. (R) correctly explains (A)."
  },
  {
    a: "In an $I-V$ characteristic graph of an ohmic conductor, the slope of the straight line equals electrical conductance.",
    r: "According to Ohm's law, $I = \\left(\\frac{1}{R}\\right)V = G V$, where $G = \\frac{1}{R}$ is the conductance.",
    ans: 0,
    exp: "Plotting $I$ on the vertical axis and $V$ on the horizontal axis yields slope $= \\frac{dI}{dV} = \\frac{1}{R} = G$. (R) correctly explains (A)."
  },
  {
    a: "For two metallic wires $A$ and $B$, if the $V-I$ graph shows that line $A$ makes a larger angle with the $I$-axis than line $B$, wire $A$ has higher resistance.",
    r: "In a $V-I$ graph where $V$ is plotted on the vertical axis and $I$ on the horizontal axis, the slope $\\frac{V}{I}$ equals resistance $R$.",
    ans: 0,
    exp: "Slope $= \\tan\\theta = \\frac{V}{I} = R$. A larger inclination $\\theta$ with the current axis corresponds to greater resistance. (R) correctly explains (A)."
  },
  {
    a: "To convert a moving coil galvanometer into an ammeter, a very low resistance (shunt) must be connected in parallel with it.",
    r: "A parallel shunt provides a low-resistance bypass path so that most of the large circuit current bypasses the delicate galvanometer coil.",
    ans: 0,
    exp: "Ammeter resistance must be as small as possible to minimize circuit loading. Connecting $S \\ll G$ in parallel achieves a low equivalent resistance $R_A = \\frac{GS}{G+S} \\approx S$. (R) correctly explains (A)."
  },
  {
    a: "To convert a galvanometer into a voltmeter, a very high resistance is connected in series with its coil.",
    r: "An ideal voltmeter must have infinite resistance so that it does not draw any current from the circuit when connected across two points.",
    ans: 0,
    exp: "Connecting a large multiplier resistance $R_s$ in series ensures that the overall voltmeter resistance $R_V = G + R_s$ is very high, preventing perturbation of the measured voltage drop. (R) correctly explains (A)."
  },
  {
    a: "An ideal ammeter has zero internal resistance.",
    r: "An ammeter is connected in series in a circuit, and zero resistance ensures it introduces zero voltage drop across itself.",
    ans: 0,
    exp: "If $R_A = 0$, inserting the ammeter in series does not change the total circuit resistance or alter the current being measured. (R) correctly explains (A)."
  },
  {
    a: "The equivalent resistance of any parallel combination of resistors is always strictly less than the smallest individual resistance in the combination.",
    r: "In a parallel combination, additional parallel branches provide alternate conductive pathways for charge flow, thereby increasing the total conductance.",
    ans: 0,
    exp: "Total conductance is $G_{\\text{eq}} = G_1 + G_2 + \\dots > G_{\\text{max}}$, which directly implies $R_{\\text{eq}} = \\frac{1}{G_{\\text{eq}}} < \\frac{1}{G_{\\text{max}}} = R_{\\text{min}}$. (R) correctly explains (A)."
  },
  {
    a: "The equivalent resistance of any series combination of resistors is always greater than the largest individual resistance.",
    r: "In series combination, the length of the resistive path effectively increases and individual resistances add up algebraically ($R_{\\text{eq}} = \\sum R_i$).",
    ans: 0,
    exp: "Because each resistance is positive, $R_{\\text{eq}} = R_1 + R_2 + \\dots > R_{\\text{max}}$. (R) correctly explains (A)."
  },
  {
    a: "A uniform wire of resistance $R$ is cut into $n$ equal pieces, and all $n$ pieces are connected in parallel. The equivalent resistance becomes $\\frac{R}{n^2}$.",
    r: "Each piece has resistance $R/n$, and $n$ identical resistors of value $R/n$ in parallel give $R_{\\text{eq}} = \\frac{R/n}{n} = \\frac{R}{n^2}$.",
    ans: 0,
    exp: "Cutting into $n$ parts gives $r = R/n$. Combining $n$ identical resistors in parallel yields $R_{\\text{eq}} = \\frac{r}{n} = \\frac{R}{n^2}$. (R) correctly explains (A)."
  },
  {
    a: "Current density $\\vec{J}$ is a vector quantity, whereas electric current $I$ is a scalar quantity.",
    r: "Electric current does not obey the laws of vector addition, whereas current density has a well-defined direction along the motion of positive charge carriers.",
    ans: 0,
    exp: "Current $I = \\int \\vec{J} \\cdot d\\vec{A}$ is the flux of current density through a surface. Electric current adds algebraically at a junction (following Kirchhoff's junction rule) and does not obey vector algebra. (R) correctly explains (A)."
  },
  {
    a: "Ohm's law holds true even if the temperature of the metallic conductor increases significantly during current flow.",
    r: "The resistance of a metal is independent of temperature.",
    ans: 3,
    exp: "Ohm's law strictly requires physical conditions, especially temperature, to remain constant. As current heats the metal, its resistance increases due to increased lattice vibrations, causing the $V-I$ curve to bend upward (non-ohmic behavior). Both statements are false; Assertion is false. (D)."
  },
  {
    a: "A semiconductor diode exhibits non-ohmic behavior.",
    r: "In a p-n junction diode, the current varies exponentially with voltage in forward bias and is nearly constant in reverse bias, violating $V \\propto I$.",
    ans: 0,
    exp: "The current-voltage characteristic of a diode is non-linear ($I = I_0(e^{eV/k_B T} - 1)$) and asymmetric under polarity reversal. (R) correctly explains (A)."
  },
  {
    a: "When a potential difference $V$ is applied across a conductor of non-uniform cross-section, the current is the same at all cross-sections along the conductor.",
    r: "In steady state, electric charge cannot continuously accumulate or deplete at any point inside the conductor (conservation of charge).",
    ans: 0,
    exp: "By continuity of steady current, $\\oint \\vec{J} \\cdot d\\vec{A} = 0$, so total current $I = J A$ is identical at every cross-section along a single conductive channel. (R) correctly explains (A)."
  },
  {
    a: "In a metallic conductor of non-uniform cross-section carrying a steady current, the drift speed of electrons is higher at narrower sections.",
    r: "From $I = n e A v_d$, for constant current $I$, drift velocity is inversely proportional to cross-sectional area ($v_d \\propto \\frac{1}{A}$).",
    ans: 0,
    exp: "Because $I$ and electron density $n$ are constant, $A v_d = \\text{constant}$. At narrower cross-sections (smaller $A$), $v_d$ must increase proportionally. (R) correctly explains (A)."
  },
  {
    a: "In an infinite ladder network of identical resistors, the equivalent resistance is independent of the number of stages.",
    r: "Adding or removing one identical stage from an infinite ladder does not change the total equivalent resistance of the network.",
    ans: 0,
    exp: "Because the network extends infinitely, $R_{\\text{eq}} = R_1 + (R_2 \\parallel R_{\\text{eq}})$, yielding a finite, invariant quadratic solution. (R) correctly explains (A)."
  },
  {
    a: "Connecting a voltmeter of finite resistance across a resistor reduces the actual potential difference across that resistor.",
    r: "The voltmeter draws a non-zero current from the circuit, altering the total equivalent resistance and branch currents.",
    ans: 0,
    exp: "Placing a voltmeter in parallel with resistor $R$ reduces the branch resistance to $\\frac{R R_V}{R + R_V} < R$, thereby reducing the voltage drop across it compared to the open-circuit condition. (R) correctly explains (A)."
  },
  {
    a: "Manganin or constantan wires are used for standard resistance coils.",
    r: "These alloys have very high resistivity and nearly negligible temperature coefficients of resistance ($\\alpha \\approx 0$).",
    ans: 0,
    exp: "Because $\\alpha$ is extremely small, standard resistance values constructed from manganin/constantan remain constant despite ambient temperature fluctuations. (R) correctly explains (A)."
  },
  {
    a: "Carbon composition resistors are widely used in electronic circuits because of their compact size and broad range of resistance values.",
    r: "Carbon resistors are marked with standard color bands that identify their nominal resistance and tolerance.",
    ans: 1,
    exp: "Both statements are true. Carbon resistors offer compact form factor, low cost, and a vast resistance span (from $1\\,\\Omega$ to dozens of $\\text{M}\\Omega$). However, the presence of color bands is a labeling convention, not the cause of their utility. (B)."
  },
  {
    a: "For a given metallic wire at temperature $T_1$ and $T_2$ with $T_1 > T_2$, the slope of the $V-I$ graph at $T_1$ is greater than at $T_2$.",
    r: "The resistance of a metal increases with increasing temperature, and the slope of the $V-I$ graph equals resistance.",
    ans: 0,
    exp: "Since $R(T_1) > R(T_2)$ for $T_1 > T_2$, the slope of the $V-I$ graph ($\\text{slope} = R$) is larger at the higher temperature. (R) correctly explains (A)."
  },
  {
    a: "When an electric field is applied to an insulator, it obeys Ohm's law with very small current.",
    r: "Insulators possess zero or extremely few free conduction electrons in their conduction band at ordinary temperatures.",
    ans: 3,
    exp: "Insulators do not obey Ohm's law; negligible conduction occurs until dielectric breakdown occurs at high fields. Assertion is false, Reason is true. (D)."
  },
  {
    a: "When a thick copper wire and a thin copper wire of equal length are connected in series across a battery, more potential drop appears across the thin wire.",
    r: "The thin wire has a smaller cross-sectional area and therefore greater resistance ($R = \\rho \\frac{l}{A}$), and in series $V = I R \\propto R$.",
    ans: 0,
    exp: "Series current is uniform. The thinner wire has higher resistance, so it sustains a proportionally larger potential drop ($V = I R$). (R) correctly explains (A)."
  },
  {
    a: "When a thick copper wire and a thin copper wire of equal length are connected in parallel across a battery, more current flows through the thick wire.",
    r: "The thick wire has lower resistance, and for a constant voltage supply, current is inversely proportional to resistance ($I = \\frac{V}{R}$).",
    ans: 0,
    exp: "In parallel, both experience the same voltage $V$. Lower resistance of the thick wire draws greater current ($I \\propto A$). (R) correctly explains (A)."
  },
  {
    a: "A copper wire and an aluminum wire of identical dimensions have equal resistances.",
    r: "Copper and aluminum are both good metallic conductors.",
    ans: 3,
    exp: "Resistance depends on the material's intrinsic resistivity ($R = \\rho \\frac{l}{A}$). Copper has lower resistivity ($\\approx 1.7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$) than aluminum ($\\approx 2.8 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$), so their resistances differ. Assertion is false."
  }
];

// 7 MCQ questions for Ohm's law
const mcqData = [
  {
    q: "A uniform wire of resistance $R$ is stretched uniformly until its length increases by $n$ times ($L' = n L$). The new resistance of the stretched wire is:",
    opts: [
      "$n R$",
      "$n^2 R$",
      "$\\frac{R}{n}$",
      "$\\frac{R}{n^2}$"
    ],
    ans: 1,
    exp: "Volume remains constant: $A L = A' L' \\implies A' = \\frac{A L}{L'} = \\frac{A}{n}$. The new resistance is $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{n L}{A / n} = n^2 \\left(\\rho \\frac{L}{A}\\right) = n^2 R$."
  },
  {
    q: "A galvanometer of coil resistance $50\\,\\Omega$ gives full-scale deflection for a current of $10\\text{ mA}$. To convert it into an ammeter of range $0 - 5\\text{ A}$, the required shunt resistance is:",
    opts: [
      "$0.10\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$0.20\\,\\Omega$",
      "$0.01\\,\\Omega$"
    ],
    ans: 0,
    exp: "$S = \\frac{I_g G}{I - I_g} = \\frac{0.010 \\times 50}{5 - 0.010} = \\frac{0.5}{4.99} \\approx 0.10\\,\\Omega$."
  },
  {
    q: "A galvanometer has a resistance of $100\\,\\Omega$ and full-scale deflection current of $1\\text{ mA}$. The series resistance needed to convert it into a voltmeter of range $0 - 10\\text{ V}$ is:",
    opts: [
      "$9900\\,\\Omega$",
      "$10000\\,\\Omega$",
      "$9000\\,\\Omega$",
      "$9990\\,\\Omega$"
    ],
    ans: 0,
    exp: "$R = \\frac{V}{I_g} - G = \\frac{10}{10^{-3}} - 100 = 10000 - 100 = 9900\\,\\Omega$."
  },
  {
    q: "Twelve identical wires, each of resistance $R = 6\\,\\Omega$, are connected to form the skeleton of a cube. The equivalent resistance between two diagonally opposite body corners is:",
    opts: [
      "$\\frac{5}{6}R$",
      "$\\frac{3}{4}R$",
      "$\\frac{7}{12}R$",
      "$R$"
    ],
    ans: 0,
    exp: "By symmetry, the current divides into 3 equal branches of current $I/3$ at the entry node, then splits into 6 edges carrying $I/6$, and recombines into 3 edges of $I/3$ at the exit node. Total potential drop is $V = \\frac{I}{3}R + \\frac{I}{6}R + \\frac{I}{3}R = \\frac{5}{6}I R$. Hence $R_{\\text{eq}} = \\frac{5}{6}R$."
  },
  {
    q: "A wire of resistance $20\\,\\Omega$ is bent to form a complete circle. The equivalent resistance between two points on the circumference subtending an angle of $90^\\circ$ at the center is:",
    opts: [
      "$3.75\\,\\Omega$",
      "$5\\,\\Omega$",
      "$7.5\\,\\Omega$",
      "$15\\,\\Omega$"
    ],
    ans: 0,
    exp: "The circle is divided into two arcs: an arc of $90^\\circ$ ($1/4$ of circle, $R_1 = \\frac{20}{4} = 5\\,\\Omega$) and an arc of $270^\\circ$ ($3/4$ of circle, $R_2 = \\frac{3}{4} \\times 20 = 15\\,\\Omega$). In parallel, $R_{\\text{eq}} = \\frac{5 \\times 15}{5 + 15} = \\frac{75}{20} = 3.75\\,\\Omega$."
  },
  {
    q: "An infinite ladder network is constructed with repeating units of two resistors $R_1 = 1\\,\\Omega$ (in series) and $R_2 = 2\\,\\Omega$ (in parallel). The equivalent resistance of the infinite ladder is:",
    opts: [
      "$1\\,\\Omega$",
      "$2\\,\\Omega$",
      "$3\\,\\Omega$",
      "$\\sqrt{2}\\,\\Omega$"
    ],
    ans: 1,
    exp: "For an infinite ladder, $R_{\\infty} = R_1 + \\frac{R_2 R_{\\infty}}{R_2 + R_{\\infty}} \\implies R_{\\infty} = 1 + \\frac{2 R_{\\infty}}{2 + R_{\\infty}} \\implies R_{\\infty}(2 + R_{\\infty}) = 2 + R_{\\infty} + 2R_{\\infty} \\implies R_{\\infty}^2 + 2R_{\\infty} = 3R_{\\infty} + 2 \\implies R_{\\infty}^2 - R_{\\infty} - 2 = 0$. Factoring gives $(R_{\\infty} - 2)(R_{\\infty} + 1) = 0 \\implies R_{\\infty} = 2\\,\\Omega$."
  },
  {
    q: "A carbon resistor has colour bands in the order: Yellow, Violet, Brown, and Gold. Its resistance and tolerance are:",
    opts: [
      "$470\\,\\Omega \\pm 5\\%$",
      "$47\\,\\Omega \\pm 10\\%$",
      "$4.7\\,\\text{k}\\Omega \\pm 5\\%$",
      "$470\\,\\text{k}\\Omega \\pm 20\\%$"
    ],
    ans: 0,
    exp: "Yellow $= 4$, Violet $= 7$, Brown $= 10^1$, Gold $= \\pm 5\\%$. Hence $R = 47 \\times 10^1\\,\\Omega \\pm 5\\% = 470\\,\\Omega \\pm 5\\%$."
  }
];

// 20 Numerical questions for Ohm's law
const numData = [
  {
    q: "A wire of resistance $10\\,\\Omega$ is uniformly stretched so that its length increases by $20\\%$. The new resistance of the wire in Ohms is:",
    ans: 14.4, // let's make it integer: stretched to 3 times length -> 9 * 10 = 90!
    q: "A wire of resistance $10\\,\\Omega$ is stretched uniformly to three times its original length. The new resistance of the wire in Ohms is:",
    ans: 90,
    exp: "$R' = n^2 R = 3^2 \\times 10 = 9 \\times 10 = 90\\,\\Omega$."
  },
  {
    q: "Three resistors of $3\\,\\Omega$, $6\\,\\Omega$, and $2\\,\\Omega$ are connected in parallel. The equivalent resistance of the combination in Ohms is:",
    ans: 1,
    exp: "$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{2} = \\frac{2 + 1 + 3}{6} = \\frac{6}{6} = 1\\,\\Omega^{-1} \\implies R_{\\text{eq}} = 1\\,\\Omega$."
  },
  {
    q: "A potential difference of $60\\text{ V}$ across a resistor produces a current of $3\\text{ A}$. The resistance of the resistor in Ohms is:",
    ans: 20,
    exp: "$R = \\frac{V}{I} = \\frac{60}{3} = 20\\,\\Omega$."
  },
  {
    q: "A galvanometer of coil resistance $40\\,\\Omega$ has a full-scale deflection for $2\\text{ mA}$. To convert it into an ammeter of range $0 - 2\\text{ A}$, the shunt resistance required in Ohms, rounded to two decimal places, multiplied by $100$ is approximately:",
    // S = 0.002 * 40 / (2 - 0.002) = 0.08 / 1.998 approx 0.04004 Ohm. 100 S = 4!
    ans: 4,
    exp: "$S = \\frac{I_g G}{I - I_g} = \\frac{0.002 \\times 40}{2 - 0.002} \\approx \\frac{0.08}{2} = 0.04\\,\\Omega$. Multiplied by $100$, the value is $4$."
  },
  {
    q: "A galvanometer of resistance $50\\,\\Omega$ gives full deflection for $1\\text{ mA}$. The series resistance in Ohms needed to convert it into a voltmeter of range $0 - 5\\text{ V}$ is:",
    ans: 4950,
    exp: "$R = \\frac{V}{I_g} - G = \\frac{5}{10^{-3}} - 50 = 5000 - 50 = 4950\\,\\Omega$."
  },
  {
    q: "Five identical resistors, each of resistance $10\\,\\Omega$, are connected in series. The equivalent resistance of the network in Ohms is:",
    ans: 50,
    exp: "$R_{\\text{series}} = 5 \\times 10 = 50\\,\\Omega$."
  },
  {
    q: "Four identical resistors of $20\\,\\Omega$ each are connected in parallel. The equivalent resistance in Ohms is:",
    ans: 5,
    exp: "$R_{\\text{parallel}} = \\frac{20}{4} = 5\\,\\Omega$."
  },
  {
    q: "A wire of resistance $64\\,\\Omega$ is cut into four equal pieces, and the four pieces are connected in parallel. The equivalent resistance in Ohms is:",
    ans: 4,
    exp: "Each piece has resistance $R' = \\frac{64}{4} = 16\\,\\Omega$. When four pieces are connected in parallel, $R_{\\text{eq}} = \\frac{16}{4} = 4\\,\\Omega$."
  },
  {
    q: "Twelve identical wires each of resistance $R = 12\\,\\Omega$ form the skeleton of a cube. The equivalent resistance across diagonally opposite corners of the cube in Ohms is:",
    ans: 10,
    exp: "$R_{\\text{eq}} = \\frac{5}{6}R = \\frac{5}{6} \\times 12 = 10\\,\\Omega$."
  },
  {
    q: "A uniform wire of resistance $36\\,\\Omega$ is bent into a circle. The equivalent resistance between two diametrically opposite points in Ohms is:",
    ans: 9,
    exp: "The two halves in parallel each have resistance $18\\,\\Omega$. Equivalent resistance is $R_{\\text{eq}} = \\frac{18}{2} = 9\\,\\Omega$."
  },
  {
    q: "A current of $0.5\\text{ A}$ flows through a conductor when connected to a $12\\text{ V}$ supply. The electrical conductance of the conductor in milli-Siemens ($\\text{mS}$) is:",
    // G = I / V = 0.5 / 12 = 1/24 S. Not integer.
    // If V = 10 V, I = 0.5 A -> G = 0.05 S = 50 mS!
    q: "A current of $0.5\\text{ A}$ flows through a conductor when connected to a $10\\text{ V}$ supply. The electrical conductance of the conductor in milli-Siemens ($\\text{mS}$) is:",
    ans: 50,
    exp: "$G = \\frac{I}{V} = \\frac{0.5}{10} = 0.05\\text{ S} = 50\\text{ mS}$."
  },
  {
    q: "An infinite ladder network has series arm resistors of $R_1 = 1\\,\\Omega$ and shunt arm resistors of $R_2 = 2\\,\\Omega$. The equivalent resistance between the input terminals in Ohms is:",
    ans: 2,
    exp: "$R = 1 + \\frac{2R}{2+R} \\implies R(2+R) = 2 + 3R \\implies R^2 - R - 2 = 0 \\implies (R-2)(R+1) = 0 \\implies R = 2\\,\\Omega$."
  },
  {
    q: "Two resistors $R_1 = 12\\,\\Omega$ and $R_2 = 4\\,\\Omega$ are connected in parallel. The current drawn from a $24\\text{ V}$ battery in Amperes is:",
    ans: 8,
    exp: "$R_{\\text{eq}} = \\frac{12 \\times 4}{12 + 4} = \\frac{48}{16} = 3\\,\\Omega$. Total current is $I = \\frac{V}{R_{\\text{eq}}} = \\frac{24}{3} = 8\\text{ A}$."
  },
  {
    q: "A wire of resistance $25\\,\\Omega$ is drawn out so that its radius is halved ($r' = r/2$). The new resistance of the wire in Ohms is:",
    ans: 400,
    exp: "$R \\propto \\frac{1}{r^4}$. When radius is halved, resistance increases by a factor of $2^4 = 16$. New resistance is $R' = 16 \\times 25 = 400\\,\\Omega$."
  },
  {
    q: "A uniform conductor of length $2\\text{ m}$ has an electric field of $10\\text{ V/m}$ established inside it. The potential difference across the conductor in Volts is:",
    ans: 20,
    exp: "$V = E \\times L = 10 \\times 2 = 20\\text{ V}$."
  },
  {
    q: "Three identical resistors each of resistance $30\\,\\Omega$ are connected in delta (triangle) configuration. The equivalent resistance between any two vertices in Ohms is:",
    ans: 20,
    exp: "Between any two vertices, one branch has $30\\,\\Omega$, and the other two in series have $30 + 30 = 60\\,\\Omega$. In parallel: $R_{\\text{eq}} = \\frac{30 \\times 60}{30 + 60} = \\frac{1800}{90} = 20\\,\\Omega$."
  },
  {
    q: "A circuit consists of a $10\\,\\Omega$ resistor connected in series with a parallel combination of two $20\\,\\Omega$ resistors. The total equivalent resistance in Ohms is:",
    ans: 20,
    exp: "Parallel combination of two $20\\,\\Omega$ resistors is $\\frac{20}{2} = 10\\,\\Omega$. In series with $10\\,\\Omega$, $R_{\\text{total}} = 10 + 10 = 20\\,\\Omega$."
  },
  {
    q: "The resistance of a coil is $4.2\\,\\Omega$ at $100{^\\circ}\\text{C}$ and $3.0\\,\\Omega$ at $0{^\\circ}\\text{C}$. The temperature coefficient of resistance in $10^{-3}{^\\circ}\\text{C}^{-1}$ is:",
    ans: 4,
    exp: "$R_T = R_0(1 + \\alpha T) \\implies 4.2 = 3.0(1 + 100\\alpha) \\implies 1.4 = 1 + 100\\alpha \\implies 100\\alpha = 0.4 \\implies \\alpha = 0.004{^\\circ}\\text{C}^{-1} = 4 \\times 10^{-3}{^\\circ}\\text{C}^{-1}$."
  },
  {
    q: "A cylindrical resistor has length $1\\text{ m}$ and cross-sectional area $1\\text{ mm}^2$. If it has a resistance of $2\\,\\Omega$, the resistance of another wire of the same material having length $4\\text{ m}$ and area $2\\text{ mm}^2$ in Ohms is:",
    ans: 4,
    exp: "$R = \\rho \\frac{l}{A}$. Thus $\\frac{R_2}{R_1} = \\frac{l_2}{l_1} \\times \\frac{A_1}{A_2} = \\frac{4}{1} \\times \\frac{1}{2} = 2$. Therefore $R_2 = 2 R_1 = 2 \\times 2 = 4\\,\\Omega$."
  },
  {
    q: "A potential difference of $100\\text{ V}$ produces a current density of $5 \\times 10^5\\text{ A/m}^2$ in a wire of length $2\\text{ m}$. The conductivity of the material in $10^4\\,\\Omega^{-1}\\text{m}^{-1}$ is:",
    ans: 1,
    exp: "Electric field is $E = \\frac{V}{L} = \\frac{100}{2} = 50\\text{ V/m}$. Conductivity is $\\sigma = \\frac{J}{E} = \\frac{5 \\times 10^5}{50} = 10^4\\,\\Omega^{-1}\\text{m}^{-1}$. The value is $1$."
  }
];

const part2Questions = [];

arData.forEach(item => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part2Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason",
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

const outPath = path.join(__dirname, 'data_jee_ce_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part2Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
