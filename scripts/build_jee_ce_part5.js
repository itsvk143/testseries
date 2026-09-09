const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const inlineMath = text.match(/\$([^\$]+)\$/g) || [];
  inlineMath.forEach(m => {
    const expr = m.slice(1, -1);
    try {
      katex.renderToString(expr, { throwOnError: true });
    } catch (err) {
      console.error(`KaTeX error in expr: "${expr}"`);
      throw err;
    }
  });
}

const subTopic = "Resistivity";
const chapter = "Current Electricity";
const subject = "Physics";

const arOptions = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)",
  "Assertion (A) is true but Reason (R) is false",
  "Assertion (A) is false but Reason (R) is true"
];

const arData = [
  {
    a: "The resistivity of a metallic conductor increases with an increase in temperature.",
    r: "With the rise in temperature, the frequency of collisions of conduction electrons with lattice ions increases, thereby decreasing the relaxation time $\\tau$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Resistivity of a metal is given by $\\rho = \\frac{m}{n e^2 \\tau}$. As temperature increases, amplitude of lattice vibrations increases, causing more frequent collisions. Thus, the mean relaxation time $\\tau$ decreases, resulting in an increase in resistivity $\\rho$."
  },
  {
    a: "The resistivity of semiconductors decreases exponentially with an increase in temperature.",
    r: "In semiconductors, the increase in conduction electron density $n$ with temperature dominates over the decrease in relaxation time $\\tau$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "For semiconductors, resistivity $\\rho = \\frac{m}{n e^2 \\tau}$. Thermal energy excites covalent bonds, leading to an exponential increase in charge carrier density $n$, which far outweighs the slight reduction in $\\tau$. Hence, $\\rho$ decreases significantly with temperature."
  },
  {
    a: "Manganin and constantan are widely used in making standard resistance coils.",
    r: "Manganin and constantan have high resistivity and a very small temperature coefficient of resistance.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Standard resistance coils require their resistance values to remain practically constant even with temperature variations. Alloys like manganin and constantan possess negligible temperature coefficients of resistance $\\alpha$ and high resistivities."
  },
  {
    a: "When a wire is stretched such that its length increases by $2\\%$, its resistance increases by approximately $4\\%$.",
    r: "For a wire of constant volume, resistance is directly proportional to the square of its length ($R \\propto l^2$).",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Volume $V = A l$ remains constant during stretching. Since $R = \\rho \\frac{l}{A} = \\rho \\frac{l^2}{V}$, we have $R \\propto l^2$. For small fractional changes, $\\frac{\\Delta R}{R} \\approx 2\\frac{\\Delta l}{l} = 2(2\\%) = 4\\%$."
  },
  {
    a: "The resistivity of a conductor depends on its length and cross-sectional area.",
    r: "Resistivity is an intrinsic material property determined by electron density and relaxation time, independent of dimensions.",
    ans: "Assertion (A) is false but Reason (R) is true",
    exp: "Resistivity $\\rho = \\frac{m}{n e^2 \\tau}$ is an intrinsic property of the material and depends only on the nature of the substance and temperature, not on dimensions such as length or cross-sectional area."
  },
  {
    a: "If a wire is stretched to double its initial length, its resistivity remains unchanged.",
    r: "Resistivity depends only on the material and temperature of the conductor, not on its shape or size.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Stretching alters the geometric dimensions (length and area) and thus changes resistance $R$, but the intrinsic resistivity $\\rho$ remains constant at the same temperature."
  },
  {
    a: "The temperature coefficient of resistance is negative for carbon and silicon.",
    r: "Carbon and silicon are semiconductors (or semimetals) where charge carrier concentration increases with rising temperature.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "In semiconductors like silicon and non-metallic forms like carbon, an increase in temperature breaks covalent bonds, liberating more carriers ($n$ increases), so resistance decreases with temperature, giving $\\alpha < 0$."
  },
  {
    a: "Nichrome is commonly chosen as the heating element in electric irons and toasters.",
    r: "Nichrome exhibits high resistivity and high melting point, and does not easily oxidize at high temperatures.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Heating elements require high resistance ($H = I^2 R t$) to generate substantial heat, high melting points to endure glowing temperatures, and strong resistance to oxidation at elevated temperatures. Nichrome fulfills all these requirements."
  },
  {
    a: "The electrical conductivity of an intrinsic semiconductor at absolute zero temperature is zero.",
    r: "At $0\\text{ K}$, all valence electrons are tightly bound in covalent bonds, leaving the conduction band completely vacant.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "At absolute zero ($T = 0\\text{ K}$), no thermal energy is available to promote electrons across the energy bandgap into the conduction band. Hence, carrier density $n = 0$, giving zero conductivity and behaving as a perfect insulator."
  },
  {
    a: "The unit of electrical conductivity is $\\Omega^{-1} \\text{m}^{-1}$ or $\\text{S m}^{-1}$.",
    r: "Conductivity is the reciprocal of resistivity ($\\sigma = \\frac{1}{\\rho}$).",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Conductivity is $\\sigma = \\frac{1}{\\rho}$. Since resistivity has the SI unit $\\Omega\\,\\text{m}$, the SI unit of conductivity is $\\Omega^{-1}\\,\\text{m}^{-1}$, also expressed as Siemens per meter ($\\text{S}\\,\\text{m}^{-1}$)."
  },
  {
    a: "Bending a uniform current-carrying metallic wire into a zigzag shape changes its electrical resistance.",
    r: "The resistance of a conductor is independent of its macroscopic spatial configuration as long as length and cross-sectional area are preserved.",
    ans: "Assertion (A) is false but Reason (R) is true",
    exp: "Resistance depends only on resistivity $\\rho$, total length $l$, and cross-sectional area $A$ ($R = \\rho \\frac{l}{A}$). Bending the wire without stretching or compressing does not alter $l$, $A$, or $\\rho$, so resistance remains unaffected."
  },
  {
    a: "A thick copper wire has lower resistance than a thin copper wire of the exact same length.",
    r: "Resistance of a conductor is inversely proportional to its cross-sectional area ($R \\propto \\frac{1}{A}$).",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Since $R = \\rho \\frac{l}{A}$, for wires of identical material and length, resistance is inversely proportional to area $A$. A thicker wire provides a larger area, offering less obstruction to electron flow, hence lower resistance."
  },
  {
    a: "The resistance of a superconductor drops abruptly to zero below a critical transition temperature $T_c$.",
    r: "At temperatures below $T_c$, electrons form Cooper pairs that move through the crystal lattice without exchanging energy with lattice ions.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Superconductivity is characterized by the sudden disappearance of electrical resistivity below the critical temperature $T_c$, explained by BCS theory through the formation of Cooper pairs undergoing zero scattering."
  },
  {
    a: "When a wire is drawn through a die such that its radius is halved, its new resistance becomes $16$ times its initial resistance.",
    r: "When a wire is drawn, volume remains constant, so $R \\propto \\frac{1}{r^4}$ where $r$ is the wire radius.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Volume $V = \\pi r^2 l = \\text{constant} \\implies l \\propto \\frac{1}{r^2}$. Then $R = \\rho \\frac{l}{A} = \\rho \\frac{l}{\\pi r^2} \\propto \\frac{1}{r^4}$. Halving the radius ($r' = r/2$) yields $R' = R \\times 2^4 = 16R$."
  },
  {
    a: "Connecting two resistors made of different materials in series can produce an equivalent resistance that is independent of temperature.",
    r: "A temperature-independent equivalent resistance is achieved if the two materials have temperature coefficients of opposite signs such that $R_1 \\alpha_1 + R_2 \\alpha_2 = 0$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "For series combination, $R_s(T) = R_1(1 + \\alpha_1 \\Delta T) + R_2(1 + \\alpha_2 \\Delta T) = (R_1 + R_2) + (R_1 \\alpha_1 + R_2 \\alpha_2)\\Delta T$. The net temperature variation vanishes if $R_1 \\alpha_1 + R_2 \\alpha_2 = 0$, requiring one positive coefficient (metal) and one negative (e.g. carbon)."
  },
  {
    a: "The electron mobility $\\mu$ is related to electrical conductivity $\\sigma$ by $\\sigma = n e \\mu$.",
    r: "Drift velocity $v_d$ is proportional to electric field $E$, and mobility is defined as $\\mu = \\frac{v_d}{E}$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Current density $J = n e v_d = n e (\\mu E) = (n e \\mu) E$. Comparing with microscopic Ohm's law $J = \\sigma E$, we get $\\sigma = n e \\mu$. Reason correctly defines mobility and explains the relation."
  },
  {
    a: "If two wires of the same material have their lengths in the ratio $1:2$ and masses in the ratio $2:1$, the ratio of their resistances is $1:8$.",
    r: "For wires of the same material, resistance is proportional to the square of length divided by mass ($R \\propto \\frac{l^2}{m}$).",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Mass $m = d \\cdot A \\cdot l \\implies A = \\frac{m}{d l}$. Thus $R = \\rho \\frac{l}{A} = \\frac{\\rho d l^2}{m} \\propto \\frac{l^2}{m}$. Therefore, $\\frac{R_1}{R_2} = \\left(\\frac{l_1}{l_2}\\right)^2 \\left(\\frac{m_2}{m_1}\\right) = \\left(\\frac{1}{2}\\right)^2 \\left(\\frac{1}{2}\\right) = \\frac{1}{8}$."
  },
  {
    a: "The resistivity of an alloy is generally greater than that of its constituent pure elemental metals.",
    r: "In an alloy, the presence of solute impurity atoms disrupts the periodic crystal potential, increasing the rate of electron scattering.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Alloying introduces atomic disorder and impurity scattering in the lattice, which drastically shortens the electron mean free path and relaxation time $\\tau$, resulting in higher resistivity than the parent pure metals."
  },
  {
    a: "Current density $\\vec{J}$ is a vector quantity, whereas electric current $I$ is a scalar quantity.",
    r: "Current density has a well-defined direction parallel to the net velocity of positive charge carriers at that point, whereas total current does not obey vector addition rules.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Current density is defined as current per unit normal area, $\\vec{J} = n q \\vec{v}_d$, having direction. Total current $I = \\int \\vec{J} \\cdot d\\vec{A}$ is a scalar flux and adds algebraically rather than vectorially."
  },
  {
    a: "Fuse wires are made of an alloy of tin and lead having high resistivity and low melting point.",
    r: "A fuse wire should produce sufficient heat quickly ($H \\propto R$) to melt and break the circuit safely whenever excessive current flows.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "A safety fuse wire must melt rapidly during current overload. High resistivity guarantees significant Joule heating ($P = I^2 R$), while a low melting point ensures the wire breaks before delicate circuit equipment is damaged."
  },
  {
    a: "The resistivity of copper decreases with an increase in temperature.",
    r: "Copper is a metal with a positive temperature coefficient of resistance.",
    ans: "Assertion (A) is false but Reason (R) is true",
    exp: "Copper is a metallic conductor with a positive temperature coefficient of resistance ($\\alpha > 0$). Therefore, its resistivity increases with temperature, not decreases. Assertion is false."
  },
  {
    a: "In a hollow conducting cylinder, the electrical resistance between its inner and outer curved surfaces depends logarithmically on the ratio of radii.",
    r: "The cylindrical equipotential shells have surface area proportional to radius $r$, leading to an integral $\\int \\frac{dr}{r}$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "For radial current flow in a cylindrical shell of length $L$, an elemental shell of radius $r$ and thickness $dr$ has area $A(r) = 2\\pi r L$. Thus $dR = \\frac{\\rho dr}{2\\pi r L}$, yielding $R = \\frac{\\rho}{2\\pi L} \\ln\\left(\\frac{r_2}{r_1}\\right)$."
  },
  {
    a: "The resistance between the opposite faces of a cube of side $a$ made of a material of resistivity $\\rho$ is $\\frac{\\rho}{a}$.",
    r: "For a cube, length $l = a$ and cross-sectional area $A = a^2$, giving $R = \\rho \\frac{a}{a^2} = \\frac{\\rho}{a}$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Resistance between opposite faces is $R = \\rho \\frac{l}{A} = \\rho \\frac{a}{a^2} = \\frac{\\rho}{a}$. Reason correctly shows the substitution and calculation."
  },
  {
    a: "If a wire is stretched such that its cross-sectional area decreases by $1\\%$, its resistance increases by approximately $2\\%$.",
    r: "For constant volume, $R \\propto \\frac{1}{A^2}$, which yields $\\frac{\\Delta R}{R} \\approx -2\\frac{\\Delta A}{A}$.",
    ans: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)",
    exp: "Since $V = A l = \\text{constant}$, $l = V/A$, hence $R = \\rho \\frac{l}{A} = \\frac{\\rho V}{A^2} \\propto A^{-2}$. Differentiating gives $\\frac{\\Delta R}{R} \\approx -2 \\frac{\\Delta A}{A} = -2(-1\\%) = +2\\%$."
  },
  {
    a: "Electric field inside a current-carrying metallic wire of uniform cross-section is zero.",
    r: "A steady current requires a continuous nonzero electric field along the conductor to maintain the drift velocity of free electrons against collisions.",
    ans: "Assertion (A) is false but Reason (R) is true",
    exp: "Electrostatic field inside an isolated conductor in equilibrium is zero. However, in a current-carrying conductor, charges are in continuous non-equilibrium motion; a steady electric field $\\vec{E} = \\rho \\vec{J} \\neq 0$ is maintained by the external power source."
  },
  {
    a: "The resistance of a semiconductor thermometer increases when immersed in hot water.",
    r: "The temperature coefficient of resistance for a semiconductor is negative.",
    ans: "Assertion (A) is false but Reason (R) is true",
    exp: "Semiconductors have a negative temperature coefficient of resistance ($\\alpha < 0$). When placed in hot water, its temperature rises, which decreases its resistance, rather than increasing it. Hence Assertion is false."
  }
];

const mcqData = [
  {
    q: "A uniform wire of resistance $R$ is stretched without changing its mass so that its length increases to $n$ times its original length. The new resistance of the wire is:",
    opts: [
      "$n^2 R$",
      "$n R$",
      "$\\frac{R}{n}$",
      "$\\frac{R}{n^2}$"
    ],
    ans: "$n^2 R$",
    exp: "Volume $V = A l$ remains constant during stretching. When $l' = n l$, the new area is $A' = A/n$. Therefore, new resistance $R' = \\rho \\frac{l'}{A'} = \\rho \\frac{n l}{A/n} = n^2 \\rho \\frac{l}{A} = n^2 R$."
  },
  {
    q: "The resistance of a platinum resistance thermometer is $2.00\\,\\Omega$ at $0^\\circ\\text{C}$ and $2.80\\,\\Omega$ at $100^\\circ\\text{C}$. The temperature when its resistance is $2.48\\,\\Omega$ is:",
    opts: [
      "$60^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$",
      "$70^\\circ\\text{C}$"
    ],
    ans: "$60^\\circ\\text{C}$",
    exp: "Using $R_T = R_0(1 + \\alpha T)$, we have $\\alpha = \\frac{R_{100} - R_0}{100 R_0} = \\frac{2.80 - 2.00}{2.00 \\times 100} = 0.004\\,^\\circ\\text{C}^{-1}$. Then for $R_T = 2.48\\,\\Omega$: $T = \\frac{R_T - R_0}{R_0 \\alpha} = \\frac{2.48 - 2.00}{2.00 \\times 0.004} = \\frac{0.48}{0.008} = 60^\\circ\\text{C}$."
  },
  {
    q: "Three copper wires have lengths in the ratio $1:3:5$ and masses in the ratio $5:3:1$. The ratio of their electrical resistances is:",
    opts: [
      "$1 : 15 : 125$",
      "$1 : 5 : 25$",
      "$5 : 3 : 1$",
      "$1 : 9 : 25$"
    ],
    ans: "$1 : 15 : 125$",
    exp: "Resistance is given by $R = \\rho \\frac{l}{A} = \\rho \\frac{l^2 d}{m} \\propto \\frac{l^2}{m}$. Thus $R_1 : R_2 : R_3 = \\frac{1^2}{5} : \\frac{3^2}{3} : \\frac{5^2}{1} = \\frac{1}{5} : 3 : 25 = 1 : 15 : 125$."
  },
  {
    q: "A cylindrical metal rod of length $L$ and radius $r$ has resistance $R$. It is recast into a rod of length $2L$. Assuming density remains constant, the new resistance is:",
    opts: [
      "$4R$",
      "$2R$",
      "$8R$",
      "$\\frac{R}{4}$"
    ],
    ans: "$4R$",
    exp: "Recasting preserves volume $V = A L$. If length doubles ($L' = 2L$), the area is halved ($A' = A/2$). The new resistance is $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4\\rho \\frac{L}{A} = 4R$."
  },
  {
    q: "A carbon resistor of resistance $47\\,\\text{k}\\Omega \\pm 10\\%$ has color bands in the sequence:",
    opts: [
      "Yellow - Violet - Orange - Silver",
      "Yellow - Violet - Yellow - Silver",
      "Violet - Yellow - Orange - Gold",
      "Yellow - Violet - Red - Silver"
    ],
    ans: "Yellow - Violet - Orange - Silver",
    exp: "The value is $47 \\times 10^3\\,\\Omega \\pm 10\\%$. First digit 4 is Yellow, second digit 7 is Violet, decimal multiplier $10^3$ is Orange, and tolerance $\\pm 10\\%$ is Silver."
  },
  {
    q: "A copper wire of cross-sectional area $A$ carries a steady current $I$. If the number density of free electrons is $n$, the magnitude of electric field inside the wire (resistivity $\\rho$) is:",
    opts: [
      "$\\frac{\\rho I}{A}$",
      "$\\frac{I}{\\rho A}$",
      "$\\frac{\\rho A}{I}$",
      "$\\rho I A$"
    ],
    ans: "$\\frac{\\rho I}{A}$",
    exp: "By microscopic Ohm's law, $J = \\sigma E = \\frac{E}{\\rho} \\implies E = \\rho J$. Since current density $J = \\frac{I}{A}$, we obtain $E = \\frac{\\rho I}{A}$."
  },
  {
    q: "Two metallic wires $A$ and $B$ of the same material have lengths in the ratio $1:2$ and diameters in the ratio $2:1$. If they are connected in series across a battery, the ratio of potential differences across them ($V_A : V_B$) is:",
    opts: [
      "$1 : 8$",
      "$1 : 4$",
      "$1 : 2$",
      "$8 : 1$"
    ],
    ans: "$1 : 8$",
    exp: "Since the wires are in series, the same current $I$ flows through both, so $V_A/V_B = R_A/R_B$. Resistance is $R = \\rho \\frac{l}{\\pi (d/2)^2} \\propto \\frac{l}{d^2}$. Therefore, $\\frac{R_A}{R_B} = \\left(\\frac{l_A}{l_B}\\right)\\left(\\frac{d_B}{d_A}\\right)^2 = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{8}$, giving $V_A : V_B = 1 : 8$."
  }
];

const numData = [
  {
    q: "A copper wire of resistance $16\\,\\Omega$ is drawn out so that its length becomes twice its original length. What is the new resistance of the wire in $\\Omega$?",
    ans: "64",
    exp: "Since volume is conserved during drawing, $R \\propto l^2$. When length doubles ($l' = 2l$), the resistance becomes $R' = 2^2 \\times R = 4 \\times 16 = 64\\,\\Omega$."
  },
  {
    q: "A wire of resistance $10\\,\\Omega$ is stretched uniformly until its length increases by $20\\%$. Find the percentage increase in its resistance (nearest integer).",
    ans: "44",
    exp: "New length $l' = 1.20\\,l$. Since volume is constant, new resistance is $R' = (1.20)^2 R = 1.44\\,R$. The percentage increase is $\\frac{1.44R - R}{R} \\times 100\\% = 44\\%$."
  },
  {
    q: "The resistance of a metallic conductor is $50\\,\\Omega$ at $20^\\circ\\text{C}$ and $70\\,\\Omega$ at $100^\\circ\\text{C}$. The temperature (in $^\\circ\\text{C}$) at which its resistance becomes $60\\,\\Omega$ is:",
    ans: "60",
    exp: "Using $R(T) = R_{20}[1 + \\alpha (T - 20)]$: $70 = 50[1 + \\alpha(80)] \\implies 50 \\times 80 \\alpha = 20 \\implies \\alpha = \\frac{20}{4000} = 0.005\\,^\\circ\\text{C}^{-1}$. For $R = 60\\,\\Omega$: $60 = 50[1 + 0.005(T - 20)] \\implies 1 + 0.005(T - 20) = 1.2 \\implies 0.005(T - 20) = 0.2 \\implies T - 20 = 40 \\implies T = 60^\\circ\\text{C}$."
  },
  {
    q: "A uniform conductor of length $2\\,\\text{m}$ and uniform cross-sectional area $1\\,\\text{mm}^2$ has a resistance of $0.04\\,\\Omega$. Find its resistivity in units of $10^{-8}\\,\\Omega\\,\\text{m}$.",
    ans: "2",
    exp: "$R = \\rho \\frac{l}{A} \\implies \\rho = \\frac{R A}{l}$. Here $R = 0.04\\,\\Omega$, $A = 10^{-6}\\,\\text{m}^2$, $l = 2\\,\\text{m}$. Thus $\\rho = \\frac{0.04 \\times 10^{-6}}{2} = 2 \\times 10^{-8}\\,\\Omega\\,\\text{m}$. The required integer is 2."
  },
  {
    q: "A wire of resistance $20\\,\\Omega$ is cut into $4$ equal pieces, and these $4$ pieces are connected in parallel. What is the equivalent resistance of the combination in tenths of an ohm (e.g. if $1.25\\,\\Omega$, evaluate $100 \\times R_{eq} = 125$; here find the resistance in $\\Omega$ multiplied by 100)?",
    ans: "125",
    exp: "Each piece has resistance $r = 20/4 = 5\\,\\Omega$. Connected in parallel, $R_{eq} = r/4 = 5/4 = 1.25\\,\\Omega$. Multiplied by 100, the value is 125."
  },
  {
    q: "A metal wire of length $1\\,\\text{m}$ has a diameter of $0.4\\,\\text{mm}$. When a potential difference of $2\\,\\text{V}$ is applied across its ends, the electric field inside the wire is $E$ in $\\text{V/m}$. Find the value of $E$.",
    ans: "2",
    exp: "Electric field in a uniform wire of length $L$ is $E = \\frac{V}{L} = \\frac{2}{1} = 2\\,\\text{V/m}$."
  },
  {
    q: "The resistance of a wire is $5\\,\\Omega$ at $50^\\circ\\text{C}$ and $6\\,\\Omega$ at $100^\\circ\\text{C}$. Find the resistance (in $\\Omega$) of the wire at $0^\\circ\\text{C}$.",
    ans: "4",
    exp: "$R(T) = R_0(1 + \\alpha T)$. Thus $R_0(1 + 50\\alpha) = 5$ and $R_0(1 + 100\\alpha) = 6$. Subtracting gives $50 R_0 \\alpha = 1$. Then $R_0 + 50 R_0 \\alpha = R_0 + 1 = 5 \\implies R_0 = 4\\,\\Omega$."
  },
  {
    q: "When a wire is stretched such that its radius is reduced by $50\\%$, its resistance increases by a factor of $k$. What is the value of $k$?",
    ans: "16",
    exp: "Volume is constant, so $l \\propto 1/r^2$. Thus $R \\propto l/r^2 \\propto 1/r^4$. Since $r' = r/2$, $R' = R \\times (2)^4 = 16R$. Hence $k = 16$."
  },
  {
    q: "A cylindrical wire of radius $1\\,\\text{mm}$ carries a steady current of $3.14\\,\\text{A}$. Find the current density in the wire in units of $10^6\\,\\text{A/m}^2$ (use $\\pi = 3.14$).",
    ans: "1",
    exp: "Area $A = \\pi r^2 = 3.14 \\times (10^{-3})^2 = 3.14 \\times 10^{-6}\\,\\text{m}^2$. Current density $J = \\frac{I}{A} = \\frac{3.14}{3.14 \\times 10^{-6}} = 10^6\\,\\text{A/m}^2 = 1 \\times 10^6\\,\\text{A/m}^2$."
  },
  {
    q: "Two resistors with resistance values $R_1 = 100\\,\\Omega$ and $R_2 = 200\\,\\Omega$ have temperature coefficients of resistance $\\alpha_1 = 0.004\\,^\\circ\\text{C}^{-1}$ and $\\alpha_2 = 0.001\\,^\\circ\\text{C}^{-1}$. Find the effective temperature coefficient of their series combination in units of $10^{-4}\\,^\\circ\\text{C}^{-1}$.",
    ans: "20",
    exp: "For series combination, $R_{eq}\\alpha_{eq} = R_1 \\alpha_1 + R_2 \\alpha_2$. Here $R_{eq} = 100 + 200 = 300\\,\\Omega$. Then $300 \\alpha_{eq} = 100(0.004) + 200(0.001) = 0.4 + 0.2 = 0.6 \\implies \\alpha_{eq} = \\frac{0.6}{300} = 0.002\\,^\\circ\\text{C}^{-1} = 20 \\times 10^{-4}\\,^\\circ\\text{C}^{-1}$."
  },
  {
    q: "A hollow spherical shell of inner radius $a = 10\\,\\text{cm}$ and outer radius $b = 20\\,\\text{cm}$ is made of a conducting material of resistivity $\\rho = 80\\pi\\,\\Omega\\,\\text{m}$. Find the resistance between its inner and outer surfaces in $\\Omega$.",
    ans: "100",
    exp: "Resistance between concentric spherical surfaces is $R = \\frac{\\rho}{4\\pi}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$. Here $a = 0.1\\,\\text{m}$ and $b = 0.2\\,\\text{m}$, so $\\frac{1}{a} - \\frac{1}{b} = 10 - 5 = 5\\,\\text{m}^{-1}$. Thus $R = \\frac{80\\pi}{4\\pi} \\times 5 = 20 \\times 5 = 100\\,\\Omega$."
  },
  {
    q: "A wire of resistance $25\\,\\Omega$ is drawn through a die so that its diameter decreases to half of its original value. What is the new resistance of the wire in $\\Omega$?",
    ans: "400",
    exp: "For a wire drawn through a die, volume $V = A l$ is constant, so $l \\propto 1/d^2$. Resistance $R \\propto l/d^2 \\propto 1/d^4$. When diameter is halved, $R' = R \\times 2^4 = 16 R = 16 \\times 25 = 400\\,\\Omega$."
  },
  {
    q: "A conductor has an electron density of $8 \\times 10^{28}\\,\\text{m}^{-3}$ and relaxation time of $2.5 \\times 10^{-14}\\,\\text{s}$. Given $m = 9.1 \\times 10^{-31}\\,\\text{kg}$ and $e = 1.6 \\times 10^{-19}\\,\\text{C}$, the conductivity of the conductor is approximately $k \\times 10^7\\,\\text{S/m}$. Find $k$ to the nearest integer.",
    ans: "6",
    exp: "Conductivity $\\sigma = \\frac{n e^2 \\tau}{m} = \\frac{8 \\times 10^{28} \\times (1.6 \\times 10^{-19})^2 \\times 2.5 \\times 10^{-14}}{9.1 \\times 10^{-31}} = \\frac{8 \\times 2.56 \\times 10^{-38} \\times 2.5 \\times 10^{14}}{9.1 \\times 10^{-31}} = \\frac{51.2 \\times 10^{-24}}{9.1 \\times 10^{-31}} = 5.63 \\times 10^7 \\approx 6 \\times 10^7\\,\\text{S/m}$."
  },
  {
    q: "A uniform metallic wire of resistance $50\\,\\Omega$ is uniformly stretched so that its length increases by $10\\%$. Find the new resistance of the wire in tenths of an ohm (multiply new resistance by 10, e.g. for $60.5\\,\\Omega$ enter 605; here if $R' = 60.5\\,\\Omega$, find $10 R'$).",
    ans: "605",
    exp: "Since length increases by $10\\%$, $l' = 1.1\\,l$. Volume remains constant, so $R' = (1.1)^2 R = 1.21 \\times 50 = 60.5\\,\\Omega$. Multiplied by 10, the answer is 605."
  },
  {
    q: "The resistance of an incandescent lamp filament is $20\\,\\Omega$ at room temperature $20^\\circ\\text{C}$. When operating at $2020^\\circ\\text{C}$, its resistance is $220\\,\\Omega$. What is the temperature coefficient of resistance in $10^{-3}\\,^\\circ\\text{C}^{-1}$?",
    ans: "5",
    exp: "$R = R_{20}[1 + \\alpha \\Delta T] \\implies 220 = 20[1 + \\alpha(2000)] \\implies 11 = 1 + 2000\\alpha \\implies 2000\\alpha = 10 \\implies \\alpha = \\frac{10}{2000} = 5 \\times 10^{-3}\\,^\\circ\\text{C}^{-1}$."
  },
  {
    q: "A resistor has color bands: Brown, Black, Red, and Gold. What is the nominal value of this resistance in hundreds of ohms (i.e. $R/100$ in $\\Omega$)?",
    ans: "10",
    exp: "Brown = 1, Black = 0, Red = $10^2$. Nominal value = $10 \\times 10^2\\,\\Omega = 1000\\,\\Omega$. In hundreds of ohms, $1000/100 = 10$."
  },
  {
    q: "Two rods of identical dimensions are joined in series. One has resistivity $\\rho_1 = 2 \\times 10^{-7}\\,\\Omega\\,\\text{m}$ and the other has $\\rho_2 = 4 \\times 10^{-7}\\,\\Omega\\,\\text{m}$. Find the effective resistivity of the combination in units of $10^{-7}\\,\\Omega\\,\\text{m}$.",
    ans: "3",
    exp: "For two rods of length $L$ and area $A$ in series, total length is $2L$ and total resistance is $R = R_1 + R_2 = \\rho_1 \\frac{L}{A} + \\rho_2 \\frac{L}{A} = \\rho_{eff}\\frac{2L}{A}$. Thus $\\rho_{eff} = \\frac{\\rho_1 + \\rho_2}{2} = \\frac{2 + 4}{2} \\times 10^{-7} = 3 \\times 10^{-7}\\,\\Omega\\,\\text{m}$."
  },
  {
    q: "Two rods of identical dimensions are joined in parallel. Their resistivities are $\\rho_1 = 3 \\times 10^{-6}\\,\\Omega\\,\\text{m}$ and $\\rho_2 = 6 \\times 10^{-6}\\,\\Omega\\,\\text{m}$. Find the effective resistivity of the combination in units of $10^{-6}\\,\\Omega\\,\\text{m}$.",
    ans: "2",
    exp: "For two rods of length $L$ and area $A$ in parallel, total area is $2A$ and conductance adds: $G = G_1 + G_2 \\implies \\frac{2A}{\\rho_{eff} L} = \\frac{A}{\\rho_1 L} + \\frac{A}{\\rho_2 L} \\implies \\frac{2}{\\rho_{eff}} = \\frac{1}{3} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies \\rho_{eff} = 4 / 2 = 2 \\times 10^{-6}\\,\\Omega\\,\\text{m}$."
  },
  {
    q: "A wire of resistance $9\\,\\Omega$ is uniformly bent into the form of an equilateral triangle. What is the equivalent resistance across any two vertices in $\\Omega$?",
    ans: "2",
    exp: "Each of the three sides has resistance $r = 9/3 = 3\\,\\Omega$. Across any two vertices, one side of $3\\,\\Omega$ is in parallel with the series combination of the other two sides ($3 + 3 = 6\\,\\Omega$). Thus $R_{eq} = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\Omega$."
  },
  {
    q: "A uniform wire of resistance $12\\,\\Omega$ is bent into a circle. The equivalent resistance between two diametrically opposite points on the circle is $R_{eq}$ in $\\Omega$. Find $R_{eq}$.",
    ans: "3",
    exp: "Diametrically opposite points divide the circle into two semicircular halves, each having resistance $12/2 = 6\\,\\Omega$. Since they are in parallel, $R_{eq} = \\frac{6 \\times 6}{6 + 6} = 3\\,\\Omega$."
  }
];

const part5Questions = [];

arData.forEach(item => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part5Questions.push({
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

  part5Questions.push({
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

  part5Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
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

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_ce_part5.js');
const fileContent = `module.exports = ${JSON.stringify(part5Questions, null, 2)};\n`;
fs.writeFileSync(outPath, fileContent);
console.log(`Saved to ${outPath}`);
