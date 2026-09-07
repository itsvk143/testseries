// Part 2: Quantum mechanical model, Quantum numbers, Orbital shapes
// Each subtopic contains 48 rigorous, JEE Mains/NEET aligned questions with clean KaTeX and detailed explanations.

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Atomic Structure",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getQuantumMechanicalQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Quantum mechanical model", text, opts, ans, exp, diff, type));

  add(
    "In the time-independent Schrödinger equation $\\hat{H}\\psi = E\\psi$, the symbol $\\hat{H}$ represents the:",
    ["Hamiltonian operator corresponding to total energy", "Hermitian operator corresponding to potential energy", "Laplacian operator corresponding to kinetic energy", "Angular momentum operator"],
    0,
    "$\\hat{H}$ is the Hamiltonian operator representing the sum of kinetic and potential energy operators: $\\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla^2 + V(\\mathbf{r})$.",
    "Easy"
  );
  add(
    "The physical significance of the wave function $\\psi$ itself in quantum mechanics is that:",
    ["It has no direct physical meaning by itself", "Its amplitude represents the exact electron charge density", "It gives the exact position and trajectory of the electron", "It represents the classical electromagnetic wave electric field"],
    0,
    "$\\psi$ is a probability amplitude which can be complex or negative; it has no direct physical meaning. Only $|\\psi|^2$ has physical significance as probability density.",
    "Easy"
  );
  add(
    "According to Max Born's probabilistic interpretation, the probability of finding an electron in an infinitesimal volume element $dV$ around a point $(x, y, z)$ is given by:",
    ["$|\\psi|^2 dV$", "$\\psi dV$", "$\\frac{1}{|\\psi|^2} dV$", "$\\nabla^2 \\psi dV$"],
    0,
    "The Born interpretation states that probability $dP = |\\psi|^2 dV = \\psi^* \\psi dV$.",
    "Easy"
  );
  add(
    "The number of radial nodes for any hydrogenic orbital is given by the formula:",
    ["$n - l - 1$", "$l$", "$n - 1$", "$n + l$"],
    0,
    "The number of radial nodes (where radial wave function $R(r) = 0$) is $n - l - 1$.",
    "Easy"
  );
  add(
    "The number of angular nodes (nodal planes/cones) for an orbital depends exclusively on:",
    ["Azimuthal quantum number $l$", "Principal quantum number $n$", "Magnetic quantum number $m_l$", "Difference $(n - l)$"],
    0,
    "The number of angular nodes is equal to the azimuthal quantum number $l$.",
    "Easy"
  );
  add(
    "The total number of nodes (radial + angular) in any orbital with quantum numbers $n$ and $l$ is:",
    ["$n - 1$", "$n - l - 1$", "$l + 1$", "$2n - 1$"],
    0,
    "Total nodes = Radial nodes + Angular nodes = $(n - l - 1) + l = n - 1$.",
    "Easy"
  );
  add(
    "How many radial nodes and angular nodes does a $3p$ orbital have?",
    ["1 radial node, 1 angular node", "2 radial nodes, 0 angular nodes", "0 radial nodes, 2 angular nodes", "1 radial node, 2 angular nodes"],
    0,
    "For $3p$: $n = 3, l = 1$. Radial nodes = $n - l - 1 = 3 - 1 - 1 = 1$. Angular nodes = $l = 1$.",
    "Easy"
  );
  add(
    "How many radial nodes are present in a $4d$ orbital?",
    ["1", "2", "3", "0"],
    0,
    "For $4d$: $n = 4, l = 2$. Radial nodes = $n - l - 1 = 4 - 2 - 1 = 1$.",
    "Easy"
  );
  add(
    "For a $5f$ orbital, the total number of nodes, radial nodes, and angular nodes respectively are:",
    ["4, 1, 3", "4, 2, 2", "5, 1, 4", "3, 0, 3"],
    0,
    "For $5f$: $n = 5, l = 3$. Total nodes = $n - 1 = 4$. Angular nodes = $l = 3$. Radial nodes = $n - l - 1 = 5 - 3 - 1 = 1$.",
    "Easy"
  );
  add(
    "At the atomic nucleus ($r = 0$), the radial wave function $R(r)$ is non-zero for:",
    ["Only $s$-orbitals", "Only $p$-orbitals", "All orbitals ($s, p, d, f$)", "Only $d$ and $f$-orbitals"],
    0,
    "Because $R(r) \\propto r^l$ near $r = 0$, for $l = 0$ ($s$-orbitals), $r^0 = 1$ so $R(0) \\neq 0$. For all other orbitals ($l > 0$), $R(0) = 0$.",
    "Medium"
  );
  add(
    "The radial probability distribution function $4\\pi r^2 R^2(r)$ for any atomic orbital at the nucleus ($r = 0$) is always equal to:",
    ["Zero", "Maximum", "Infinity", "Dependent on the principal quantum number $n$"],
    0,
    "Because of the factor $r^2$, at $r = 0$, $4\\pi (0)^2 R^2(0) = 0$ for all orbitals, including $s$-orbitals.",
    "Medium"
  );
  add(
    "For a hydrogen atom in the $1s$ ground state, the radius at which the radial probability density $4\\pi r^2 R^2(r)$ is maximum is:",
    ["$a_0$ (Bohr radius, $0.529\\text{ \\AA}$)", "$2a_0$", "$a_0 / 2$", "$0$"],
    0,
    "For $1s$, $P(r) = 4\\pi r^2 \\left(2 a_0^{-3/2} e^{-r/a_0}\\right)^2 \\propto r^2 e^{-2r/a_0}$. Setting $\\frac{dP}{dr} = 0 \\implies 2r - \\frac{2r^2}{a_0} = 0 \\implies r = a_0$.",
    "Medium"
  );
  add(
    "For a $2s$ electron of hydrogen atom, the distance $r$ from the nucleus where the radial node occurs is:",
    ["$2a_0$", "$a_0$", "$4a_0$", "$0.529a_0$"],
    0,
    "For $2s$, $R_{2s}(r) \\propto \\left(2 - \\frac{r}{a_0}\\right) e^{-r/2a_0}$. Setting $R_{2s}(r) = 0 \\implies 2 - \\frac{r}{a_0} = 0 \\implies r = 2a_0$.",
    "Medium"
  );
  add(
    "The number of peaks (maxima) in the radial probability distribution function $4\\pi r^2 R^2(r)$ for an orbital is given by:",
    ["$n - l$", "$n - l - 1$", "$n$", "$l + 1$"],
    0,
    "Between each radial node there is a peak, plus one after the last node. Thus, number of radial peaks = Radial nodes $+ 1 = (n - l - 1) + 1 = n - l$.",
    "Medium"
  );
  add(
    "The radial probability distribution curve for a $3s$ orbital shows:",
    ["3 peaks and 2 radial nodes", "2 peaks and 1 radial node", "3 peaks and 3 radial nodes", "1 peak and 2 radial nodes"],
    0,
    "For $3s$: $n = 3, l = 0$. Number of radial nodes = $n - l - 1 = 3 - 0 - 1 = 2$. Number of radial peaks = $n - l = 3 - 0 = 3$.",
    "Easy"
  );
  add(
    "The radial probability distribution curve for a $3p$ orbital shows:",
    ["2 peaks and 1 radial node", "3 peaks and 2 radial nodes", "1 peak and 1 radial node", "2 peaks and 0 radial nodes"],
    0,
    "For $3p$: $n = 3, l = 1$. Radial nodes = $3 - 1 - 1 = 1$. Radial peaks = $n - l = 3 - 1 = 2$.",
    "Easy"
  );
  add(
    "Which of the following orbitals has NO radial node?",
    ["$1s, 2p, 3d, 4f$", "$2s, 3p, 4d, 5f$", "$3s, 3p, 3d$", "$1s, 2s, 3s$"],
    0,
    "Radial nodes = $n - l - 1$. For $1s$ ($1-0-1=0$), $2p$ ($2-1-1=0$), $3d$ ($3-2-1=0$), $4f$ ($4-3-1=0$), all have zero radial nodes.",
    "Medium"
  );
  add(
    "For a given principal quantum number $n$, which subshell has the greatest penetration power near the nucleus?",
    ["$s$", "$p$", "$d$", "$f$"],
    0,
    "Due to non-zero electron density at the nucleus and inner radial maxima, $s$-orbitals penetrate closest to the nucleus, followed by $p > d > f$.",
    "Easy"
  );
  add(
    "In a single-electron species (like $\\text{H}, \\text{He}^+, \\text{Li}^{2+}$), the energy of an orbital depends ONLY on:",
    ["Principal quantum number $n$", "Both $n$ and $l$", "Quantum numbers $n, l, m_l$", "Only azimuthal quantum number $l$"],
    0,
    "For single-electron systems, electrostatic potential is purely central (Coulombic), so energy depends solely on $n$: $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$. All subshells in a given $n$ are degenerate.",
    "Medium"
  );
  add(
    "Which of the following sets of orbitals are degenerate in an isolated neutral Hydrogen atom?",
    ["$3s, 3p_x, 3p_y, 3p_z, 3d_{xy}$", "$2s$ and $3s$", "$3s$ and $3p$ only", "$2p$ and $3p$"],
    0,
    "In hydrogen, all subshells with the same principal quantum number $n$ have identical energy. Thus all nine orbitals of $n = 3$ ($3s, 3p, 3d$) are strictly degenerate.",
    "Medium"
  );
  add(
    "In multi-electron atoms, the degeneracy of subshells with the same principal quantum number $n$ is lifted due to:",
    ["Electron-electron repulsion and shielding effects", "Nuclear spin interactions", "Relativistic mass increase", "Gravitational force within the atom"],
    0,
    "In multi-electron atoms, inner electrons shield the nuclear charge, causing subshell energies to depend on both $n$ and $l$ (penetration and shielding).",
    "Easy"
  );
  add(
    "The normalization condition for a wave function $\\psi$ over all space is expressed mathematically as:",
    ["$\\int_{-\\infty}^{+\\infty} |\\psi|^2 d\\tau = 1$", "$\\int_{-\\infty}^{+\\infty} \\psi d\\tau = 1$", "$\\int_{-\\infty}^{+\\infty} |\\psi|^2 d\\tau = 0$", "$\\frac{d\\psi}{d\\tau} = 1$"],
    0,
    "Normalization ensures that the total probability of finding the particle anywhere in all space is exactly 1 (100% certainty).",
    "Easy"
  );
  add(
    "Two wave functions $\\psi_i$ and $\\psi_j$ are said to be orthogonal if:",
    ["$\\int \\psi_i^* \\psi_j d\\tau = 0$ (for $i \\neq j$)", "$\\int \\psi_i^* \\psi_j d\\tau = 1$", "$\\psi_i + \\psi_j = 0$", "$\\psi_i / \\psi_j = \\text{constant}$"],
    0,
    "Orthogonality between distinct eigenstate wave functions means their overlap integral over all space is zero: $\\int \\psi_i^* \\psi_j d\\tau = 0$ ($i \\neq j$).",
    "Easy"
  );
  add(
    "An acceptable (well-behaved) quantum mechanical wave function $\\psi$ must satisfy all the following boundary conditions EXCEPT:",
    ["It must be an even function of spatial coordinates", "It must be single-valued everywhere", "It must be continuous and have continuous first derivatives", "It must be square-integrable (finite over all space)"],
    0,
    "A wave function does not need to be symmetric (even); it can be odd (e.g. $p$-orbitals are antisymmetric with respect to inversion). However, it must be single-valued, continuous, and square-integrable.",
    "Medium"
  );
  add(
    "The angular wave function $Y(\\theta, \\phi)$ of an atomic orbital is independent of which quantum number?",
    ["Principal quantum number $n$", "Azimuthal quantum number $l$", "Magnetic quantum number $m_l$", "Both $l$ and $m_l$"],
    0,
    "The Schrödinger equation separates into $R_{n,l}(r) \\cdot Y_{l,m_l}(\\theta, \\phi)$. The angular part $Y$ depends only on $l$ and $m_l$, and is completely independent of $n$.",
    "Medium"
  );
  add(
    "The radial wave function $R(r)$ of an atomic orbital depends on:",
    ["Both $n$ and $l$", "Only $n$", "Only $l$", "Quantum numbers $n, l, m_l$"],
    0,
    "The radial wave function $R_{n,l}(r)$ depends strictly on principal quantum number $n$ and azimuthal quantum number $l$.",
    "Easy"
  );
  add(
    "A boundary surface diagram enclosing a constant value of $|\\psi|^2$ for an orbital is conventionally chosen to enclose what probability of finding the electron?",
    ["$90\\%$", "$50\\%$", "$100\\%$", "$99.9\\%$"],
    0,
    "Because an orbital asymptotically extends to infinity, a $100\\%$ boundary surface cannot be drawn. A boundary surface enclosing $90\\%$ probability density is conventionally defined.",
    "Easy"
  );
  add(
    "For the $2p_z$ orbital, the angular wave function depends on the spherical polar angle $\\theta$ as:",
    ["$\\cos\\theta$", "$\\sin\\theta$", "$\\sin^2\\theta$", "Independent of $\\theta$"],
    0,
    "For $2p_z$, the angular part is proportional to $\\cos\\theta$ (since $z = r\\cos\\theta$). The $xy$ plane corresponds to $\\theta = 90^\\circ$ where $\\cos 90^\\circ = 0$, forming the nodal plane.",
    "Medium"
  );
  add(
    "For which hydrogen orbital does the radial wave function satisfy $R(r) \\propto \\left(6 - 6\\sigma + \\sigma^2\\right) e^{-\\sigma/2}$ where $\\sigma = \\frac{2Zr}{3a_0}$?",
    ["$3s$", "$3p$", "$3d$", "$4s$"],
    0,
    "A quadratic polynomial in $r$ indicates 2 radial roots (2 radial nodes). Since $l = 0$ for $s$-orbitals, $n - l - 1 = n - 0 - 1 = 2 \\implies n = 3$. Hence it corresponds to $3s$.",
    "Hard"
  );
  add(
    "For an orbital with radial wave function $R(r) \\propto r \\left(4 - \\frac{Zr}{a_0}\\right) e^{-Zr/2a_0}$, the orbital is:",
    ["$3p$", "$2p$", "$3s$", "$2s$"],
    0,
    "The pre-factor $r^1$ indicates $l = 1$ ($p$-orbital). The linear term $(4 - Zr/a_0)$ indicates 1 radial node. Total radial nodes = $n - l - 1 = 1 \\implies n - 1 - 1 = 1 \\implies n = 3$. Hence $3p$.",
    "Hard"
  );
  add(
    "For an orbital whose radial wave function is $R(r) \\propto r^2 e^{-Zr/3a_0}$, what is the orbital?",
    ["$3d$", "$3p$", "$3s$", "$4d$"],
    0,
    "The factor $r^2$ indicates $l = 2$ ($d$-orbital). There is no polynomial in $r$, meaning 0 radial nodes: $n - l - 1 = 0 \\implies n - 2 - 1 = 0 \\implies n = 3$. Thus it is $3d$.",
    "Medium"
  );
  add(
    "What is the angular node for the $p_x$ orbital?",
    ["The $yz$ plane ($x = 0$)", "The $xy$ plane ($z = 0$)", "The $xz$ plane ($y = 0$)", "A conical surface at $45^\\circ$"],
    0,
    "For $p_x$, the wave function depends on $x$. When $x = 0$ (the $yz$ plane), $\\psi = 0$. Thus the $yz$ plane is the nodal plane.",
    "Easy"
  );
  add(
    "What is the angular node for the $p_y$ orbital?",
    ["The $xz$ plane ($y = 0$)", "The $yz$ plane ($x = 0$)", "The $xy$ plane ($z = 0$)", "The spherical shell at $r = a_0$"],
    0,
    "For $p_y$, the nodal plane is where $y = 0$, which is the $xz$ plane.",
    "Easy"
  );
  add(
    "What is the angular node for the $p_z$ orbital?",
    ["The $xy$ plane ($z = 0$)", "The $yz$ plane ($x = 0$)", "The $xz$ plane ($y = 0$)", "A sphere of radius $a_0$"],
    0,
    "For $p_z$, $\\psi \\propto z$. When $z = 0$ (the $xy$ plane), the wave function is zero.",
    "Easy"
  );
  add(
    "Which of the following orbitals has zero angular nodes and zero radial nodes?",
    ["$1s$", "$2s$", "$2p$", "$3d$"],
    0,
    "For $1s$: $n = 1, l = 0$. Radial nodes = $1 - 0 - 1 = 0$; Angular nodes = $l = 0$. Total nodes = 0.",
    "Easy"
  );
  add(
    "Which orbital has 1 radial node and 2 angular nodes?",
    ["$4d$", "$3d$", "$4p$", "$5f$"],
    0,
    "Angular nodes = $l = 2$ ($d$-orbital). Radial nodes = $n - l - 1 = n - 2 - 1 = 1 \\implies n = 4$. Thus $4d$.",
    "Easy"
  );
  add(
    "The probability density $|\\psi|^2$ at any point in space:",
    ["Must always be real and non-negative", "Can be imaginary", "Can be negative", "Is always zero"],
    0,
    "By definition, $|\\psi|^2 = \\psi^* \\psi \\ge 0$, which is always a real, non-negative quantity representing probability per unit volume.",
    "Easy"
  );
  add(
    "The Laplacian operator $\\nabla^2$ in Cartesian coordinates is:",
    ["$\\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$", "$\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial y} + \\frac{\\partial}{\\partial z}$", "$\\frac{\\partial^2}{\\partial x^2} \\cdot \\frac{\\partial^2}{\\partial y^2} \\cdot \\frac{\\partial^2}{\\partial z^2}$", "$\\left(\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial y} + \\frac{\\partial}{\\partial z}\\right)^2$"],
    0,
    "The Laplacian operator is the sum of second partial derivatives: $\\nabla^2 = \\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$.",
    "Easy"
  );
  add(
    "When solving the Schrödinger equation for the hydrogen atom, which quantum number arises directly from the radial equation?",
    ["Principal quantum number $n$", "Magnetic quantum number $m_l$", "Spin quantum number $s$", "None of the above"],
    0,
    "The boundary conditions on the radial equation give rise to the principal quantum number $n$ (and quantization of energy). $l$ and $m_l$ arise from the angular equations.",
    "Medium"
  );
  add(
    "Which quantum number does NOT originate from the solution of Schrödinger wave equation for the hydrogen atom?",
    ["Spin quantum number ($m_s$)", "Principal quantum number ($n$)", "Azimuthal quantum number ($l$)", "Magnetic quantum number ($m_l$)"],
    0,
    "The Schrödinger equation is a non-relativistic equation that accounts for $n, l, m_l$. Electron spin ($m_s$) was introduced phenomenologically by Uhlenbeck and Goudsmit and later derived from Dirac's relativistic quantum theory.",
    "Easy"
  );
  add(
    "The number of nodal planes in a $d_{xy}$ orbital is:",
    ["2", "1", "0", "3"],
    0,
    "The angular nodes of $d_{xy}$ orbital are the two mutually perpendicular planes: the $xz$ plane ($y = 0$) and the $yz$ plane ($x = 0$).",
    "Easy"
  );
  add(
    "The nodal surfaces of the $d_{z^2}$ orbital are:",
    ["Two conical surfaces", "Two perpendicular planes", "One spherical surface and one plane", "Three planes"],
    0,
    "The $d_{z^2}$ orbital has two conical nodal surfaces having their vertices at the nucleus and symmetrical about the $z$-axis at $\\theta = \\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ$.",
    "Medium"
  );
  add(
    "For the $3s$ orbital of hydrogen atom, at what distance $r$ from the nucleus is the probability of finding the electron maximum (principal maximum)?",
    ["$\\approx 13a_0$", "$a_0$", "$3a_0$", "$9a_0$"],
    0,
    "For $3s$, the radial probability distribution has three peaks, with the outermost (principal) peak occurring at approximately $13a_0$.",
    "Hard"
  );
  add(
    "An electron is in an orbital with $n = 4$ and has 2 radial nodes. The value of orbital angular momentum is:",
    ["$\\sqrt{2}\\hbar$", "$\\sqrt{6}\\hbar$", "$0$", "$\\sqrt{12}\\hbar$"],
    0,
    "Radial nodes = $n - l - 1 = 4 - l - 1 = 2 \\implies l = 1$ ($p$-orbital). Orbital angular momentum = $\\sqrt{l(l+1)}\\hbar = \\sqrt{1(2)}\\hbar = \\sqrt{2}\\hbar$.",
    "Medium"
  );
  add(
    "Assertion (A): $1s$ orbital has maximum electron density at the nucleus, yet the radial probability of finding the electron at the nucleus is zero.\nReason (R): Electron density is $|\\psi|^2$, whereas radial probability is $4\\pi r^2 |\\psi|^2$, which vanishes at $r = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "At $r = 0$, $|\\psi|^2$ is maximum. But the volume of a spherical shell of radius $r = 0$ is zero because $dV = 4\\pi r^2 dr = 0$. Thus $P(r) = 4\\pi (0)^2 |\\psi|^2 = 0$. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In a hydrogen atom, $3s, 3p,$ and $3d$ orbitals all have the same energy.\nReason (R): For any single-electron system, energy depends only on the principal quantum number $n$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "In hydrogen, electron-electron repulsions are absent, so energy depends strictly on $n$. Both (A) and (R) are true, and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The radial distribution function $4\\pi r^2 R^2(r)$ gives the probability of finding the electron at a distance $r$ from the nucleus regardless of direction.\nReason (R): Integration of the angular part of the wave function over all angles $\\theta$ and $\\phi$ equals unity.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Integrating $|\\psi|^2 dV = R^2(r) |Y|^2 r^2 \\sin\\theta dr d\\theta d\\phi$ over all $\\theta$ and $\\phi$ gives $R^2(r) r^2 dr \\int |Y|^2 d\\Omega = 4\\pi r^2 R^2 dr$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): For a $2p$ orbital, the nodal plane passes through the nucleus.\nReason (R): The wave function of a $p$-orbital has opposite signs (phases) in the two lobes separated by the nodal plane.",
    ["Both (A) and (R) are true, and (R) is not the correct explanation of (A)", "Both (A) and (R) are true, and (R) is the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Both statements are independently true facts regarding $p$-orbitals: the angular nodal plane passes through the nucleus (where $r=0$), and the two lobes have opposite algebraic signs (+ and -). However, having opposite signs across a node is a general property of wave functions, not the explanation of passing through the origin.",
    "Medium",
    "ASSERTION_REASON"
  );

  return q;
}

function getQuantumNumbersQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Quantum numbers", text, opts, ans, exp, diff, type));

  add(
    "The principal quantum number $n$ primarily determines which characteristics of an electron orbital?",
    ["The size of the orbital and its principal energy level", "The shape and orbital angular momentum", "The spatial orientation in a magnetic field", "The electron spin direction"],
    0,
    "$n$ defines the principal electron shell, determining the size of the orbital and the main energy level in hydrogenic species.",
    "Easy"
  );
  add(
    "For a given principal quantum number $n$, the permissible values of azimuthal quantum number $l$ range from:",
    ["$0$ to $n - 1$", "$1$ to $n$", "$-l$ to $+l$", "$0$ to $2n - 1$"],
    0,
    "For a shell $n$, $l$ takes all integer values from $0$ up to $n - 1$, giving $n$ subshells.",
    "Easy"
  );
  add(
    "The orbital angular momentum of an electron in an orbital with azimuthal quantum number $l$ is given by:",
    ["$\\sqrt{l(l+1)}\\frac{h}{2\\pi}$", "$l \\frac{h}{2\\pi}$", "$\\sqrt{l(l-1)}\\frac{h}{2\\pi}$", "$\\frac{l(l+1)h}{2\\pi}$"],
    0,
    "In quantum mechanics, orbital angular momentum is $L = \\sqrt{l(l+1)}\\hbar = \\sqrt{l(l+1)}\\frac{h}{2\\pi}$.",
    "Easy"
  );
  add(
    "What is the orbital angular momentum of an electron in any $s$-orbital ($l = 0$)?",
    ["$0$", "$\\frac{h}{2\\pi}$", "$\\frac{h}{4\\pi}$", "$\\sqrt{2}\\frac{h}{2\\pi}$"],
    0,
    "For any $s$-orbital ($1s, 2s, 3s$, etc.), $l = 0$, so $L = \\sqrt{0(0+1)}\\hbar = 0$.",
    "Easy"
  );
  add(
    "The orbital angular momentum of an electron in a $2p$ orbital is:",
    ["$\\sqrt{2}\\frac{h}{2\\pi}$", "$\\sqrt{6}\\frac{h}{2\\pi}$", "$\\frac{h}{2\\pi}$", "$0$"],
    0,
    "For a $p$-orbital, $l = 1$. $L = \\sqrt{1(1+1)}\\hbar = \\sqrt{2}\\hbar = \\sqrt{2}\\frac{h}{2\\pi}$.",
    "Easy"
  );
  add(
    "The orbital angular momentum of an electron in a $3d$ orbital is:",
    ["$\\sqrt{6}\\frac{h}{2\\pi}$", "$\\sqrt{2}\\frac{h}{2\\pi}$", "$\\sqrt{12}\\frac{h}{2\\pi}$", "$2\\frac{h}{2\\pi}$"],
    0,
    "For a $d$-orbital, $l = 2$. $L = \\sqrt{2(2+1)}\\hbar = \\sqrt{6}\\frac{h}{2\\pi}$.",
    "Easy"
  );
  add(
    "The orbital angular momentum of an electron in a $4f$ orbital is:",
    ["$\\sqrt{12}\\frac{h}{2\\pi}$", "$\\sqrt{6}\\frac{h}{2\\pi}$", "$\\sqrt{20}\\frac{h}{2\\pi}$", "$3\\frac{h}{2\\pi}$"],
    0,
    "For an $f$-orbital, $l = 3$. $L = \\sqrt{3(3+1)}\\hbar = \\sqrt{12}\\hbar = 2\\sqrt{3}\\frac{h}{2\\pi}$.",
    "Easy"
  );
  add(
    "For a given azimuthal quantum number $l$, the number of possible values of the magnetic quantum number $m_l$ is:",
    ["$2l + 1$", "$l + 1$", "$2l - 1$", "$n^2$"],
    0,
    "$m_l$ takes values from $-l$ through $0$ to $+l$, giving $(2l + 1)$ orientations/orbitals in that subshell.",
    "Easy"
  );
  add(
    "The total number of orbitals in a shell with principal quantum number $n$ is:",
    ["$n^2$", "$2n^2$", "$2n + 1$", "$n(n+1)$"],
    0,
    "Total orbitals = $\\sum_{l=0}^{n-1} (2l+1) = n^2$.",
    "Easy"
  );
  add(
    "The maximum number of electrons that can be accommodated in a principal shell of quantum number $n$ is:",
    ["$2n^2$", "$n^2$", "$2n + 1$", "$4n + 2$"],
    0,
    "Since each orbital can hold at most 2 electrons with opposite spins, the maximum capacity is $2 \\times n^2 = 2n^2$.",
    "Easy"
  );
  add(
    "The maximum number of electrons that can be accommodated in a subshell with azimuthal quantum number $l$ is:",
    ["$2(2l + 1)$", "$2l + 1$", "$4l + 1$", "$2n^2$"],
    0,
    "A subshell has $(2l + 1)$ orbitals, each holding up to 2 electrons, giving $2(2l + 1) = 4l + 2$ electrons.",
    "Easy"
  );
  add(
    "Which of the following sets of quantum numbers $(n, l, m_l, m_s)$ is NOT permissible?",
    ["$n = 3, l = 3, m_l = 0, m_s = +1/2$", "$n = 3, l = 2, m_l = -1, m_s = -1/2$", "$n = 4, l = 0, m_l = 0, m_s = +1/2$", "$n = 2, l = 1, m_l = -1, m_s = -1/2$"],
    0,
    "The azimuthal quantum number $l$ must satisfy $0 \\le l \\le n - 1$. For $n = 3$, $l$ can only be $0, 1, 2$. Thus $l = 3$ is forbidden.",
    "Easy"
  );
  add(
    "Which set of quantum numbers represents the highest energy orbital in a multi-electron atom?",
    ["$n = 4, l = 2, m_l = -1, m_s = +1/2$", "$n = 5, l = 0, m_l = 0, m_s = +1/2$", "$n = 4, l = 1, m_l = 0, m_s = -1/2$", "$n = 3, l = 2, m_l = +2, m_s = -1/2$"],
    0,
    "By the $(n + l)$ rule: for $4d$ ($n=4, l=2$), $n+l = 6$. For $5s$ ($n=5, l=0$), $n+l = 5$. For $4p$ ($n=4, l=1$), $n+l = 5$. For $3d$ ($n=3, l=2$), $n+l = 5$. Highest $(n+l)$ is 6 ($4d$).",
    "Easy"
  );
  add(
    "Arrange the following orbitals in increasing order of energy in a multi-electron atom: (I) $n=4, l=1$, (II) $n=4, l=0$, (III) $n=3, l=2$, (IV) $n=3, l=1$:",
    ["IV < II < III < I", "II < IV < III < I", "IV < III < II < I", "II < IV < I < III"],
    0,
    "Values of $(n+l)$: IV ($3p$): $3+1 = 4$; II ($4s$): $4+0 = 4$ (higher $n$ than $3p$ so higher energy); III ($3d$): $3+2 = 5$; I ($4p$): $4+1 = 5$ (higher $n$ than $3d$). Order: IV < II < III < I.",
    "Medium"
  );
  add(
    "What is the maximum number of electrons in an atom that can have the quantum numbers $n = 4$ and $m_s = +1/2$?",
    ["16", "32", "8", "4"],
    0,
    "For $n = 4$, total number of orbitals is $n^2 = 4^2 = 16$. Each orbital contains exactly one electron with $m_s = +1/2$. Thus, 16 electrons.",
    "Medium"
  );
  add(
    "What is the maximum number of electrons that can be associated with the quantum numbers $n = 3, l = 1, m_l = -1$?",
    ["2", "6", "10", "1"],
    0,
    "The three quantum numbers $n = 3, l = 1, m_l = -1$ specify a single unique orbital ($3p_{-1}$). Any single orbital can hold at most 2 electrons (with $m_s = \\pm 1/2$).",
    "Easy"
  );
  add(
    "What is the maximum number of electrons in an atom that can have the quantum numbers $n = 4, l = 2$?",
    ["10", "14", "6", "2"],
    0,
    "$n = 4, l = 2$ corresponds to the $4d$ subshell. A $d$ subshell consists of 5 orbitals, accommodating a maximum of $5 \\times 2 = 10$ electrons.",
    "Easy"
  );
  add(
    "The spin angular momentum $S$ of an electron is given by:",
    ["$\\sqrt{s(s+1)}\\frac{h}{2\\pi} = \\frac{\\sqrt{3}}{2}\\frac{h}{2\\pi}$", "$s\\frac{h}{2\\pi} = \\frac{1}{2}\\frac{h}{2\\pi}$", "$\\sqrt{s(s-1)}\\frac{h}{2\\pi}$", "$\\frac{3}{4}\\frac{h}{2\\pi}$"],
    0,
    "For an electron $s = 1/2$. $S = \\sqrt{s(s+1)}\\hbar = \\sqrt{\\frac{1}{2}\\left(\\frac{3}{2}\\right)}\\hbar = \\frac{\\sqrt{3}}{2}\\hbar = \\frac{\\sqrt{3}}{2}\\frac{h}{2\\pi}$.",
    "Medium"
  );
  add(
    "The spin-only magnetic moment $\\mu_s$ of an ion containing $n$ unpaired electrons is given by the formula:",
    ["$\\sqrt{n(n+2)}\\text{ BM}$", "$\\sqrt{n(n+1)}\\text{ BM}$", "$n(n+2)\\text{ BM}$", "$\\sqrt{2n(n+1)}\\text{ BM}$"],
    0,
    "The spin-only formula is $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$ (Bohr Magnetons), where $1\\text{ BM} = \\frac{eh}{4\\pi m_e}$.",
    "Easy"
  );
  add(
    "An ion $\\text{Fe}^{3+}$ ($Z = 26$) has a spin-only magnetic moment of approximately:",
    ["$5.92\\text{ BM}$", "$4.90\\text{ BM}$", "$3.87\\text{ BM}$", "$1.73\\text{ BM}$"],
    0,
    "$\\text{Fe}$ is $[\\text{Ar}] 3d^6 4s^2$. $\\text{Fe}^{3+}$ is $[\\text{Ar}] 3d^5$, which has $n = 5$ unpaired electrons. $\\mu_s = \\sqrt{5(5+2)} = \\sqrt{35} \\approx 5.92\\text{ BM}$.",
    "Easy"
  );
  add(
    "An ion of a $3d$ transition metal has a spin-only magnetic moment of $3.87\\text{ BM}$. The number of unpaired electrons in this ion is:",
    ["3", "2", "4", "5"],
    0,
    "$\\mu = \\sqrt{n(n+2)} = 3.87 \\implies n(n+2) = 15 \\implies n = 3$.",
    "Easy"
  );
  add(
    "Which of the following ions is diamagnetic (zero unpaired electrons)?",
    ["$\\text{Zn}^{2+}$", "$\\text{Cu}^{2+}$", "$\\text{Fe}^{2+}$", "$\\text{Ni}^{2+}$"],
    0,
    "$\\text{Zn}^{2+}$ ($Z = 30$) has electronic configuration $[\\text{Ar}] 3d^{10}$. All $d$ orbitals are completely filled, leaving 0 unpaired electrons, making it diamagnetic.",
    "Easy"
  );
  add(
    "For the azimuthal quantum number $l = 3$, the magnetic quantum number $m_l$ CANNOT have the value:",
    ["$+4$", "$-3$", "$0$", "$+2$"],
    0,
    "For $l = 3$, $m_l$ can only take integer values from $-3$ to $+3$. Thus $+4$ is forbidden.",
    "Easy"
  );
  add(
    "Which quantum number designates the spatial orientation of an electron's orbital relative to an external coordinate frame?",
    ["Magnetic quantum number $m_l$", "Principal quantum number $n$", "Azimuthal quantum number $l$", "Spin quantum number $m_s$"],
    0,
    "The magnetic quantum number $m_l$ determines the spatial orientation of the orbital in space relative to a set of coordinate axes.",
    "Easy"
  );
  add(
    "How many electrons in an atom can have the quantum numbers $n = 4, l = 3, m_l = 0$?",
    ["2", "6", "14", "1"],
    0,
    "The three quantum numbers define one single orbital ($4f_0$), which can hold at most 2 electrons with opposite spins ($m_s = \\pm 1/2$).",
    "Easy"
  );
  add(
    "The value of $l$ for $s, p, d, f$ subshells are respectively:",
    ["$0, 1, 2, 3$", "$1, 2, 3, 4$", "$0, 1, 3, 5$", "$0, 2, 4, 6$"],
    0,
    "By spectroscopic convention: $s \\implies l = 0$, $p \\implies l = 1$, $d \\implies l = 2$, $f \\implies l = 3$.",
    "Easy"
  );
  add(
    "Which of the following statements about quantum numbers is INCORRECT?",
    ["The value of $m_l$ can be greater than $l$", "Principal quantum number $n$ can have any positive integer value from $1$ to $\\infty$", "Azimuthal quantum number defines the shape of the orbital", "Spin quantum number has two values: $+1/2$ and $-1/2$"],
    0,
    "The magnetic quantum number $m_l$ is restricted to $-l \\le m_l \\le +l$, so $|m_l|$ can never exceed $l$.",
    "Easy"
  );
  add(
    "The total number of magnetic quantum number values for the shell $n = 4$ is:",
    ["16", "32", "8", "4"],
    0,
    "Total values of $m_l$ in shell $n$ is equal to the total number of orbitals in the shell, which is $n^2 = 4^2 = 16$.",
    "Medium"
  );
  add(
    "In an atom, the maximum number of electrons having $n + l = 4$ is:",
    ["8", "6", "18", "10"],
    0,
    "Combinations for $n + l = 4$:\n1. $n = 4, l = 0$ ($4s$): 2 electrons\n2. $n = 3, l = 1$ ($3p$): 6 electrons\nTotal electrons = $2 + 6 = 8$.",
    "Medium"
  );
  add(
    "In an atom, the maximum number of electrons having $n + l = 5$ is:",
    ["18", "10", "14", "8"],
    0,
    "Possible subshells with $n + l = 5$:\n- $5s$ ($n=5, l=0$): 2 electrons\n- $4p$ ($n=4, l=1$): 6 electrons\n- $3d$ ($n=3, l=2$): 10 electrons\nTotal = $2 + 6 + 10 = 18$ electrons.",
    "Medium"
  );
  add(
    "Which subshell does NOT exist according to quantum mechanical rules?",
    ["$2d$", "$3f$", "$1p$", "All of these"],
    0,
    "For $n = 2$, $l \\le 1$ so $2d$ ($l=2$) cannot exist. For $n = 3$, $l \\le 2$ so $3f$ ($l=3$) cannot exist. For $n = 1$, $l = 0$ so $1p$ ($l=1$) cannot exist. All three are non-existent.",
    "Easy"
  );
  add(
    "An electron has spin quantum number $s = 1/2$ and magnetic spin quantum number $m_s = +1/2$. This represents:",
    ["One of the two allowed orientations of electron spin angular momentum", "The electron rotating clockwise in orbit", "The charge of the electron", "The orbital velocity of the electron"],
    0,
    "Electron spin is intrinsic angular momentum. The projection along the $z$-axis is $S_z = m_s \\hbar = +\\frac{1}{2}\\hbar$, representing one of two quantized spin projections.",
    "Easy"
  );
  add(
    "The splitting of spectral lines in an external magnetic field is known as the:",
    ["Zeeman effect", "Stark effect", "Compton effect", "Raman effect"],
    0,
    "The splitting of spectral lines into multiple components in a magnetic field is the Zeeman effect, explained by the magnetic quantum number $m_l$.",
    "Easy"
  );
  add(
    "The splitting of spectral lines under the influence of an external electric field is known as the:",
    ["Stark effect", "Zeeman effect", "Tyndall effect", "Doppler effect"],
    0,
    "The splitting of atomic spectral lines in an applied static electric field is called the Stark effect.",
    "Easy"
  );
  add(
    "Which of the following quantum numbers is related to the gyromagnetic ratio of the electron?",
    ["Spin quantum number $s$", "Principal quantum number $n$", "Azimuthal quantum number $l$", "Magnetic quantum number $m_l$"],
    0,
    "The electron spin $g$-factor ($g_e \\approx 2$) relates the spin magnetic dipole moment to spin angular momentum via the gyromagnetic ratio $\\gamma = -g_e \\frac{e}{2m_e}$.",
    "Medium"
  );
  add(
    "For the set of quantum numbers: $n = 4, l = 1, m_l = 0$, how many electrons can be present with clockwise spin ($m_s = +1/2$)?",
    ["1", "2", "3", "0"],
    0,
    "The quantum numbers specify one orbital ($4p_z$). A specific orbital can contain only 1 electron with $m_s = +1/2$ (the other must have $m_s = -1/2$).",
    "Easy"
  );
  add(
    "If $l = 2$, how many degenerate orbitals exist in an isolated atom in the absence of an external field?",
    ["5", "3", "7", "10"],
    0,
    "For $l = 2$, there are $2l + 1 = 2(2) + 1 = 5$ degenerate $d$-orbitals ($d_{xy}, d_{yz}, d_{zx}, d_{x^2-y^2}, d_{z^2}$).",
    "Easy"
  );
  add(
    "Two electrons occupying the same orbital are distinguished by their:",
    ["Spin quantum number ($m_s$)", "Principal quantum number ($n$)", "Azimuthal quantum number ($l$)", "Magnetic quantum number ($m_l$)"],
    0,
    "Electrons in the same orbital share identical $n, l, m_l$. By Pauli's exclusion principle, they must differ in their spin quantum number $m_s$ ($+1/2$ and $-1/2$).",
    "Easy"
  );
  add(
    "The maximum number of electrons in a subshell is given by:",
    ["$4l + 2$", "$2l + 1$", "$2n^2$", "$l(l+1)$"],
    0,
    "Number of orbitals in subshell = $2l + 1$. Each orbital holds 2 electrons, so max electrons = $2(2l+1) = 4l + 2$.",
    "Easy"
  );
  add(
    "How many electrons in a copper atom ($Z = 29$, $[\\text{Ar}] 3d^{10} 4s^1$) have the magnetic quantum number $m_l = 0$?",
    ["13", "14", "11", "7"],
    0,
    "Orbitals with $m_l = 0$:\n- $1s$: 2 electrons\n- $2s$: 2 electrons\n- $2p$: 2 electrons\n- $3s$: 2 electrons\n- $3p$: 2 electrons\n- $3d$: 2 electrons\n- $4s$: 1 electron\nTotal = $2 + 2 + 2 + 2 + 2 + 2 + 1 = 13$ electrons.",
    "Hard"
  );
  add(
    "How many electrons in a chromium atom ($Z = 24$, $[\\text{Ar}] 3d^5 4s^1$) have the azimuthal quantum number $l = 1$?",
    ["12", "6", "18", "10"],
    0,
    "$l = 1$ corresponds to $p$-orbitals. In Cr ($1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1$), $p$-electrons are in $2p^6$ and $3p^6$, giving $6 + 6 = 12$ electrons.",
    "Medium"
  );
  add(
    "What is the maximum number of electrons in an atom that can have the quantum numbers $n = 3, m_l = +1$?",
    ["4", "6", "2", "8"],
    0,
    "In $n = 3$, possible $l$ values are $0, 1, 2$:\n- $l = 0$ ($3s$): $m_l = 0$ (no $m_l = +1$)\n- $l = 1$ ($3p$): one orbital with $m_l = +1$ (2 electrons)\n- $l = 2$ ($3d$): one orbital with $m_l = +1$ (2 electrons)\nTotal electrons = $2 + 2 = 4$.",
    "Medium"
  );
  add(
    "Which orbital has the quantum numbers $n = 5, l = 3, m_l = -2$?",
    ["$5f$", "$5d$", "$5p$", "$5g$"],
    0,
    "$n = 5$ and $l = 3$ designates an $f$ subshell in the 5th shell, which is a $5f$ orbital.",
    "Easy"
  );
  add(
    "An electron in a $3d$ orbital can have which of the following values of $m_l$?",
    ["$-2, -1, 0, +1, +2$", "$0, 1, 2, 3$", "$-1, 0, +1$", "$-3, -2, -1, 0, +1, +2, +3$"],
    0,
    "For a $d$ orbital, $l = 2$. Permitted values of $m_l$ are all integers from $-2$ to $+2$: $-2, -1, 0, +1, +2$.",
    "Easy"
  );
  add(
    "Assertion (A): Orbital angular momentum of an electron in a $4s$ orbital is zero.\nReason (R): For any $s$-orbital, the azimuthal quantum number $l$ is zero, and $L = \\sqrt{l(l+1)}\\hbar$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For any $s$ electron, $l = 0$, so $L = \\sqrt{0(1)}\\hbar = 0$. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): An orbital cannot accommodate more than two electrons.\nReason (R): Two electrons in the same orbital must have opposite spins according to Pauli's exclusion principle.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Since an orbital has unique $n, l, m_l$, and $m_s$ has only two possible values ($+1/2, -1/2$), an orbital can hold at most two electrons. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The energy of $3d$ orbital in a multielectron atom is higher than that of $4s$ orbital.\nReason (R): According to Aufbau rule, $(n+l)$ for $3d$ is 5, whereas for $4s$ it is 4.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For $3d$, $n+l = 3+2 = 5$. For $4s$, $n+l = 4+0 = 4$. Lower $(n+l)$ corresponds to lower energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In the presence of a magnetic field, the five $d$-orbitals split into different energy states.\nReason (R): Different $d$-orbitals have different spatial orientations corresponding to different magnetic quantum numbers $m_l$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "External magnetic field breaks the spatial degeneracy of orbitals having different $m_l$ values (Zeeman effect). Both are true and (R) is the correct explanation.",
    "Medium",
    "ASSERTION_REASON"
  );

  return q;
}

function getOrbitalShapesQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Orbital shapes", text, opts, ans, exp, diff, type));

  add(
    "The spatial shape of all $s$-orbitals is:",
    ["Spherically symmetric", "Dumbbell shaped", "Double dumbbell shaped", "Cloverleaf shaped"],
    0,
    "All $s$-orbitals ($l = 0$) are spherically symmetric because their wave function has no angular dependence.",
    "Easy"
  );
  add(
    "The shape of a $p$-orbital is described as:",
    ["Dumbbell shaped", "Spherical", "Double dumbbell shaped", "Toroidal"],
    0,
    "A $p$-orbital ($l = 1$) consists of two lobes on opposite sides of the nucleus separated by a nodal plane, forming a dumbbell shape.",
    "Easy"
  );
  add(
    "How many degenerate $p$-orbitals exist in a subshell, and what are their spatial designations?",
    ["3 orbitals: $p_x, p_y, p_z$", "5 orbitals: $p_{xy}, p_{yz}, p_{zx}, p_{x^2}, p_{y^2}$", "2 orbitals: $p_x, p_y$", "4 orbitals: $p_1, p_2, p_3, p_4$"],
    0,
    "The $p$ subshell has $2(1)+1 = 3$ orbitals oriented along the Cartesian axes: $p_x, p_y,$ and $p_z$.",
    "Easy"
  );
  add(
    "The nodal plane for the $p_z$ orbital lies in the:",
    ["$xy$ plane", "$yz$ plane", "$xz$ plane", "None of these"],
    0,
    "For $p_z$, electron density is distributed along the $z$-axis, and probability density is zero in the $xy$ plane ($z = 0$).",
    "Easy"
  );
  add(
    "Which of the following $d$-orbitals has electron density concentrated along the coordinate axes rather than between them?",
    ["$d_{x^2-y^2}$ and $d_{z^2}$", "$d_{xy}$ and $d_{yz}$", "$d_{yz}$ and $d_{zx}$", "$d_{xy}, d_{yz}, d_{zx}$"],
    0,
    "The $e_g$ orbitals ($d_{x^2-y^2}$ and $d_{z^2}$) have their lobes directly along the coordinate axes, while $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{zx}$) have lobes directed between the axes at $45^\\circ$.",
    "Medium"
  );
  add(
    "The lobes of the $d_{xy}$ orbital lie:",
    ["In the $xy$ plane, bisecting the $x$ and $y$ axes at $45^\\circ$", "Directly along the $x$ and $y$ axes", "In the $yz$ plane, bisecting the axes", "Directly along the $z$ axis"],
    0,
    "The $d_{xy}$ orbital has four lobes lying in the $xy$ plane directed between the $x$ and $y$ axes at $45^\\circ$.",
    "Easy"
  );
  add(
    "The nodal planes of the $d_{xy}$ orbital are:",
    ["The $xz$ plane ($y = 0$) and $yz$ plane ($x = 0$)", "The $xy$ plane and $yz$ plane", "Two planes at $45^\\circ$ to the $x$ and $y$ axes", "Conical surfaces"],
    0,
    "For $d_{xy} \\propto xy$, $\\psi = 0$ whenever $x = 0$ ($yz$ plane) or $y = 0$ ($xz$ plane). Thus, its nodal planes are the $xz$ and $yz$ planes.",
    "Medium"
  );
  add(
    "The nodal planes of the $d_{x^2-y^2}$ orbital are:",
    ["Two planes at $45^\\circ$ to the $x$ and $y$ axes ($x = y$ and $x = -y$)", "The $xz$ plane and $yz$ plane", "The $xy$ plane and $z$-axis", "Conical surfaces"],
    0,
    "For $d_{x^2-y^2} \\propto (x^2 - y^2)$, $\\psi = 0$ when $x^2 = y^2 \\implies x = \\pm y$. These represent two planes passing through the $z$-axis bisecting the $x$ and $y$ axes at $45^\\circ$.",
    "Medium"
  );
  add(
    "Which $d$-orbital does NOT have planar nodal surfaces, but instead possesses two conical nodal surfaces?",
    ["$d_{z^2}$", "$d_{x^2-y^2}$", "$d_{xy}$", "$d_{zx}$"],
    0,
    "The $d_{z^2}$ orbital consists of two large lobes along the $z$-axis and a donut-shaped ring of electron density in the $xy$ plane. It has two conical nodal surfaces.",
    "Easy"
  );
  add(
    "What is the mathematical condition for the conical nodes of the $d_{z^2}$ orbital ($3\\cos^2\\theta - 1 = 0$)?",
    ["$\\theta = \\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ$", "$\\theta = 45^\\circ$", "$\\theta = 90^\\circ$", "$\\theta = 30^\\circ$"],
    0,
    "The angular part of $d_{z^2}$ is proportional to $3\\cos^2\\theta - 1$. Setting this to zero gives $\\cos\\theta = \\pm 1/\\sqrt{3} \\implies \\theta \\approx 54.7^\\circ$ and $125.3^\\circ$, defining two cones.",
    "Hard"
  );
  add(
    "How many planar angular nodes does the $d_{z^2}$ orbital have?",
    ["Zero", "One", "Two", "Three"],
    0,
    "The $d_{z^2}$ orbital has zero planar nodes. Its two angular nodes are conical nodal surfaces.",
    "Medium"
  );
  add(
    "The signs (+ and -) written on the lobes of atomic orbital diagrams represent:",
    ["The algebraic sign (phase) of the wave function $\\psi$", "Positive and negative electrical charges", "Protons and electrons respectively", "Spin up ($+1/2$) and spin down ($-1/2$) states"],
    0,
    "The +/- signs represent the mathematical sign (phase) of the wave function $\\psi$ in that region of space, not electrical charges.",
    "Easy"
  );
  add(
    "In which of the following orbitals is the probability of finding the electron zero in the $xy$ plane?",
    ["$p_z, d_{xz}, d_{yz}$", "$p_x, p_y, d_{xy}$", "$d_{z^2}, s, p_z$", "$d_{x^2-y^2}, s$"],
    0,
    "The $xy$ plane corresponds to $z = 0$. Any orbital whose wave function is proportional to $z$ ($p_z \\propto z$, $d_{xz} \\propto xz$, $d_{yz} \\propto yz$) vanishes when $z = 0$.",
    "Medium"
  );
  add(
    "For which orbital is the electron probability density independent of both polar angles $\\theta$ and $\\phi$?",
    ["$s$-orbital", "$p_z$-orbital", "$d_{z^2}$-orbital", "$d_{xy}$-orbital"],
    0,
    "An $s$-orbital ($l = 0$) has an angular wave function $Y_{0,0} = \\frac{1}{\\sqrt{4\\pi}}$, which is completely independent of $\\theta$ and $\\phi$ (spherical symmetry).",
    "Easy"
  );
  add(
    "How many lobes do the $d_{xy}, d_{yz}, d_{zx},$ and $d_{x^2-y^2}$ orbitals each have?",
    ["4 lobes", "2 lobes", "6 lobes", "8 lobes"],
    0,
    "Each of these four $d$-orbitals has four lobes of electron density arranged in a cloverleaf pattern.",
    "Easy"
  );
  add(
    "The shape of an $f$-orbital is characterized by:",
    ["Eight-lobed complex shape or dumbbell with double donut ring", "Dumbbell shape", "Spherical shape", "Four-lobed cloverleaf"],
    0,
    "$f$-orbitals ($l = 3$) have complex shapes with up to eight lobes (e.g., $f_{xyz}$) or two lobes with two toroids, possessing 3 angular nodes.",
    "Easy"
  );
  add(
    "How many degenerate $f$-orbitals are present in an $f$-subshell?",
    ["7", "5", "3", "14"],
    0,
    "For $l = 3$, the number of orbitals is $2l + 1 = 2(3) + 1 = 7$.",
    "Easy"
  );
  add(
    "A nodal surface (node) is defined as a region where:",
    ["The probability density $|\\psi|^2$ of finding the electron is zero", "The probability density is maximum", "The potential energy of the electron is zero", "The kinetic energy is infinite"],
    0,
    "A node is a surface where the wave function passes through zero ($\\psi = 0$), so the probability density $|\\psi|^2 = 0$.",
    "Easy"
  );
  add(
    "What is the total number of nodal planes in a $3d_{yz}$ orbital?",
    ["2", "1", "0", "3"],
    0,
    "For $d_{yz}$, the nodal planes are the $xy$ plane ($z = 0$) and the $xz$ plane ($y = 0$). Total nodal planes = 2.",
    "Easy"
  );
  add(
    "Which orbital has a spherical node (radial node)?",
    ["$2s$", "$1s$", "$2p$", "$3d$"],
    0,
    "Radial nodes = $n - l - 1$. For $2s$: $2 - 0 - 1 = 1$ spherical node. For $1s, 2p, 3d$, radial nodes = 0.",
    "Easy"
  );
  add(
    "A spherical node is also called a:",
    ["Radial node", "Angular node", "Conical node", "Planar node"],
    0,
    "Radial nodes occur at fixed values of distance $r$ from the nucleus, forming concentric spherical shells where $\\psi = 0$.",
    "Easy"
  );
  add(
    "How many spherical (radial) nodes and how many nodal planes does a $4p_x$ orbital have?",
    ["2 radial nodes, 1 nodal plane", "1 radial node, 2 nodal planes", "3 radial nodes, 0 nodal planes", "2 radial nodes, 2 nodal planes"],
    0,
    "For $4p_x$: $n = 4, l = 1$. Radial nodes = $n - l - 1 = 4 - 1 - 1 = 2$. Angular nodes (nodal planes) = $l = 1$ (the $yz$ plane).",
    "Medium"
  );
  add(
    "Which of the following orbitals has two radial nodes and two angular nodes?",
    ["$5d$", "$4d$", "$5p$", "$4f$"],
    0,
    "Angular nodes = $l = 2$ ($d$-orbital). Radial nodes = $n - l - 1 = 2 \\implies n - 2 - 1 = 2 \\implies n = 5$. Thus, $5d$.",
    "Medium"
  );
  add(
    "The donut-shaped electron density ring of the $d_{z^2}$ orbital lies in which plane?",
    ["$xy$ plane", "$yz$ plane", "$xz$ plane", "At an angle of $45^\\circ$ to the $z$-axis"],
    0,
    "The $d_{z^2}$ orbital consists of two vertical lobes along the $z$-axis and a toroidal ring in the equatorial $xy$ plane ($z = 0$).",
    "Easy"
  );
  add(
    "The boundary surface diagram of an orbital represents a surface of:",
    ["Constant probability density $|\\psi|^2$", "Constant radial distance $r$", "Zero electron density", "Constant kinetic energy"],
    0,
    "Boundary surface diagrams connect points having the same constant value of $|\\psi|^2$, enclosing a region of high probability (usually $\\approx 90\\%$).",
    "Easy"
  );
  add(
    "Which of the following orbitals has lobes pointing along the diagonals between axes in the $xz$ plane?",
    ["$d_{zx}$", "$d_{xy}$", "$d_{yz}$", "$d_{x^2-y^2}$"],
    0,
    "The $d_{zx}$ orbital has its four lobes in the $xz$ plane pointing between the $x$ and $z$ axes at $45^\\circ$.",
    "Easy"
  );
  add(
    "Which pair of orbitals has nodal planes coincident with the coordinate planes $xy, yz,$ or $zx$?",
    ["$d_{xy}$ and $p_z$", "$d_{x^2-y^2}$ and $p_x$", "$d_{z^2}$ and $s$", "$d_{x^2-y^2}$ and $d_{z^2}$"],
    0,
    "For $d_{xy}$, nodal planes are $xz$ and $yz$. For $p_z$, nodal plane is $xy$. All of these are coordinate planes.",
    "Medium"
  );
  add(
    "As the principal quantum number $n$ increases for an $s$-orbital ($1s \\to 2s \\to 3s$):",
    ["The size of the orbital increases and it has more radial nodes", "The orbital becomes non-spherical", "The electron density at the nucleus becomes zero", "The number of angular nodes increases"],
    0,
    "Higher $n$ corresponds to larger average radius ($r \\propto n^2$) and more radial nodes ($n - 1$). The orbital remains spherically symmetric.",
    "Easy"
  );
  add(
    "The two lobes of a $p$-orbital have:",
    ["Opposite signs of wave function $\\psi$", "Same signs of wave function $\\psi$", "Different electric charges", "Opposite spins of electrons"],
    0,
    "The two lobes of a $p$-orbital are separated by a nodal plane where $\\psi = 0$; the wave function is positive on one side and negative on the other.",
    "Easy"
  );
  add(
    "In a $d_{xy}$ orbital, adjacent lobes have:",
    ["Opposite signs (+ and -)", "The same sign (+ and +)", "No sign", "Imaginary phase"],
    0,
    "Because $d_{xy} \\propto xy$: in the 1st quadrant ($x>0, y>0$) $\\psi > 0$; in the 2nd quadrant ($x<0, y>0$) $\\psi < 0$. Thus adjacent lobes alternate signs (+, -, +, -).",
    "Medium"
  );
  add(
    "Which orbital does NOT possess a nodal plane?",
    ["$s$-orbital and $d_{z^2}$ orbital", "$p_x$ orbital", "$d_{xy}$ orbital", "$d_{x^2-y^2}$ orbital"],
    0,
    "$s$-orbitals have zero angular nodes, and $d_{z^2}$ has two conical nodes (not planes). Neither has any planar nodal surfaces.",
    "Medium"
  );
  add(
    "What is the total number of nodes (radial + angular) in a $3d$ orbital?",
    ["2", "3", "1", "0"],
    0,
    "Total nodes = $n - 1 = 3 - 1 = 2$. (Radial nodes = $3 - 2 - 1 = 0$; Angular nodes = $l = 2$).",
    "Easy"
  );
  add(
    "What is the total number of nodes in a $4s$ orbital?",
    ["3", "4", "2", "1"],
    0,
    "Total nodes = $n - 1 = 4 - 1 = 3$. (All 3 are radial nodes since $l = 0$).",
    "Easy"
  );
  add(
    "What is the total number of nodes in a $2p$ orbital?",
    ["1", "2", "0", "3"],
    0,
    "Total nodes = $n - 1 = 2 - 1 = 1$. (This is the 1 angular nodal plane; radial nodes = 0).",
    "Easy"
  );
  add(
    "For an electron in a $d_{x^2-y^2}$ orbital, the probability of finding the electron along the $z$-axis is:",
    ["Zero", "Maximum", "Half of maximum", "Dependent on distance $r$"],
    0,
    "The $d_{x^2-y^2}$ orbital lies entirely in the $xy$ plane. Along the $z$-axis ($x = 0, y = 0$), the wave function is strictly zero.",
    "Easy"
  );
  add(
    "For an electron in a $p_z$ orbital, the probability density is maximum along the:",
    ["$z$-axis", "$x$-axis", "$y$-axis", "Line $x = y = z$"],
    0,
    "The lobes of the $p_z$ orbital are centered along the $z$-axis, where $|\\psi|^2$ reaches its maximum angular concentration.",
    "Easy"
  );
  add(
    "Which of the following orbitals has a shape with cloverleaf symmetry?",
    ["$d_{xy}$", "$p_x$", "$s$", "$d_{z^2}$"],
    0,
    "The four-lobed $d_{xy}, d_{yz}, d_{zx},$ and $d_{x^2-y^2}$ orbitals are commonly described as having a cloverleaf shape.",
    "Easy"
  );
  add(
    "The angle between the two nodal planes of a $d_{xy}$ orbital is:",
    ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$60^\\circ$"],
    0,
    "The nodal planes are the $xz$ plane and $yz$ plane, which are mutually perpendicular ($90^\\circ$).",
    "Easy"
  );
  add(
    "The angle between the two nodal planes of a $d_{x^2-y^2}$ orbital is:",
    ["$90^\\circ$", "$45^\\circ$", "$120^\\circ$", "$60^\\circ$"],
    0,
    "The nodal planes are $y = x$ and $y = -x$. The slopes are $m_1 = 1$ and $m_2 = -1$. Since $m_1 m_2 = -1$, they are mutually perpendicular ($90^\\circ$).",
    "Medium"
  );
  add(
    "An orbital has 2 angular nodes and 0 radial nodes. Its shape is:",
    ["Double dumbbell / cloverleaf ($3d$)", "Dumbbell ($2p$)", "Spherical ($1s$)", "Complex eight-lobed ($4f$)"],
    0,
    "Angular nodes = $l = 2$ ($d$-orbital). Radial nodes = $n - l - 1 = 0 \\implies n = 3$. This is a $3d$ orbital with a double dumbbell / cloverleaf shape.",
    "Easy"
  );
  add(
    "How many radial nodes does a $2s$ orbital have?",
    ["1", "0", "2", "3"],
    0,
    "For $2s$: $n = 2, l = 0$. Radial nodes = $n - l - 1 = 2 - 0 - 1 = 1$.",
    "Easy"
  );
  add(
    "How many radial nodes does a $4s$ orbital have?",
    ["3", "2", "1", "4"],
    0,
    "For $4s$: $n = 4, l = 0$. Radial nodes = $n - l - 1 = 4 - 0 - 1 = 3$.",
    "Easy"
  );
  add(
    "How many radial nodes does a $3d$ orbital have?",
    ["0", "1", "2", "3"],
    0,
    "For $3d$: $n = 3, l = 2$. Radial nodes = $n - l - 1 = 3 - 2 - 1 = 0$.",
    "Easy"
  );
  add(
    "How many radial nodes does a $4f$ orbital have?",
    ["0", "1", "2", "3"],
    0,
    "For $4f$: $n = 4, l = 3$. Radial nodes = $n - l - 1 = 4 - 3 - 1 = 0$.",
    "Easy"
  );
  add(
    "Assertion (A): $s$-orbitals are non-directional while $p$-orbitals are directional.\nReason (R): Electron density in an $s$-orbital is uniform in all directions, whereas in a $p$-orbital it is concentrated along a particular Cartesian axis.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Spherical symmetry means no preferred orientation in space (non-directional). In contrast, $p_x, p_y, p_z$ have lobes oriented along specific axes. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The $d_{z^2}$ orbital has zero planar nodes.\nReason (R): Its nodal surfaces are two conical surfaces symmetrical about the $z$-axis.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Unlike the other four $d$-orbitals which have two nodal planes, $d_{z^2}$ has two nodal cones given by $3\\cos^2\\theta - 1 = 0$. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The probability of finding an electron in a $p_x$ orbital is zero in the $yz$ plane.\nReason (R): The $yz$ plane is the nodal plane for the $p_x$ orbital where $\\psi = 0$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "The wave function of $p_x$ has $x$ in its numerator. On the $yz$ plane, $x = 0$, making $\\psi = 0$ and probability density zero. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): A $2p$ orbital has no radial nodes, while a $3p$ orbital has one radial node.\nReason (R): Radial nodes are calculated as $n - l - 1$, which equals 0 for $2p$ and 1 for $3p$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For $2p$: $n - l - 1 = 2 - 1 - 1 = 0$. For $3p$: $3 - 1 - 1 = 1$. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getQuantumMechanicalQuestions,
  getQuantumNumbersQuestions,
  getOrbitalShapesQuestions
};
