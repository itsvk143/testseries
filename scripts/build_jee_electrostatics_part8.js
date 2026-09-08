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

const subTopic = "Gauss's law";
const chapter = "Electrostatics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR Questions on Gauss's Law
const arData = [
  {
    a: "The total electric flux through any closed Gaussian surface depends solely on the net charge enclosed within that surface.",
    r: "Gauss's law states that $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{enclosed}}{\\varepsilon_0}$, which is completely independent of charges situated outside the Gaussian surface.",
    ans: 0,
    exp: "By Gauss's law, any field line originating from an external charge that enters the closed surface must also exit it, contributing zero net flux. Only enclosed charges yield a non-zero net flux. (R) correctly explains (A)."
  },
  {
    a: "Although charges outside a closed Gaussian surface do not contribute to the total net electric flux, they do contribute to the electric field at individual points on the surface.",
    r: "The electric field $\\vec{E}$ in the integral $\\oint \\vec{E}\\cdot d\\vec{A}$ represents the total resultant electric field produced by all charges present in the universe, both inside and outside the surface.",
    ans: 0,
    exp: "In $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}$, the integrand $\\vec{E}$ is the net vector field due to all charges, while the integrated scalar flux over the whole boundary isolates $Q_{enc}$. (R) correctly explains (A)."
  },
  {
    a: "The electric flux through one face of a cube when a point charge $q$ is placed at its geometric center is $\\frac{q}{6\\varepsilon_0}$.",
    r: "By cubic symmetry, the total flux $\\frac{q}{\\varepsilon_0}$ is distributed equally across all six identical square faces of the cube.",
    ans: 0,
    exp: "Because all 6 faces are equidistant and symmetrically placed relative to the central charge, $\\Phi_{face} = \\frac{1}{6}\\Phi_{total} = \\frac{q}{6\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "When a point charge $q$ is placed at one corner of a cube, the total electric flux emerging through that cube is $\\frac{q}{8\\varepsilon_0}$.",
    r: "Eight identical cubes sharing the common corner are required to completely enclose the charge $q$ symmetrically.",
    ans: 0,
    exp: "By constructing 8 identical adjacent cubes meeting at the corner, the charge is placed at the center of the composite larger cube of flux $\\frac{q}{\\varepsilon_0}$. Each small cube receives $\\frac{1}{8}\\frac{q}{\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "When a point charge $q$ is placed at the corner of a cube, the electric flux through each of the three adjacent faces meeting at that corner is zero.",
    r: "For the three faces meeting at the corner, the electric field lines lie parallel to the plane of each face, making $\\vec{E} \\perp \\hat{n}$, so $\\vec{E}\\cdot d\\vec{A} = 0$.",
    ans: 0,
    exp: "Electric field vectors radiating from the corner graze across the adjacent surfaces without penetrating them, so $\\Phi = 0$ for all three adjoining faces. (R) correctly explains (A)."
  },
  {
    a: "The electric field inside a uniformly charged thin spherical shell of radius $R$ is zero everywhere.",
    r: "A concentric spherical Gaussian surface of radius $r < R$ inside the shell encloses zero net electric charge: $Q_{enc} = 0$, giving $\\oint \\vec{E}\\cdot d\\vec{A} = 0 \\implies E = 0$.",
    ans: 0,
    exp: "Since all charge resides on the outer surface of the shell, any internal Gaussian sphere has $Q_{enc} = 0$, so $E(r) = 0$ for all $r < R$. (R) correctly explains (A)."
  },
  {
    a: "The electric field outside a uniformly charged spherical shell at distance $r > R$ is identical to that of a point charge of the same total charge placed at the center.",
    r: "Applying Gauss's law to a sphere of radius $r > R$ gives $E(4\\pi r^2) = \\frac{Q}{\\varepsilon_0} \\implies E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{r^2}$.",
    ans: 0,
    exp: "Spherical symmetry guarantees that the external field behaves as though all charge $Q$ were concentrated at the center: $E = \\frac{kQ}{r^2}$. (R) correctly explains (A)."
  },
  {
    a: "Inside a uniformly charged non-conducting solid sphere of radius $R$ and total charge $Q$, the electric field increases linearly with distance from the center: $E(r) \\propto r$.",
    r: "A Gaussian sphere of radius $r < R$ encloses a charge $Q_{enc} = Q\\left(\\frac{r^3}{R^3}\\right)$, and Gauss's law yields $E(4\\pi r^2) = \\frac{Q r^3}{\\varepsilon_0 R^3} \\implies E(r) = \\frac{Q r}{4\\pi\\varepsilon_0 R^3}$.",
    ans: 0,
    exp: "The enclosed charge grows with volume as $r^3$, while surface area grows as $r^2$, resulting in $E(r) = \\frac{kQr}{R^3} \\propto r$. (R) correctly explains (A)."
  },
  {
    a: "The electric field inside a spherical cavity carved inside a uniformly charged solid sphere with charge density $\\rho$ is uniform.",
    r: "The electric field at any point inside the cavity is the vector difference of the field due to the entire solid sphere $\\vec{E}_1 = \\frac{\\rho}{3\\varepsilon_0}\\vec{r}_1$ and the field due to the removed cavity sphere $\\vec{E}_2 = \\frac{\\rho}{3\\varepsilon_0}\\vec{r}_2$, yielding $\\vec{E}_{cavity} = \\frac{\\rho}{3\\varepsilon_0}(\\vec{r}_1 - \\vec{r}_2) = \\frac{\\rho}{3\\varepsilon_0}\\vec{a}$.",
    ans: 0,
    exp: "Because $\\vec{r}_1 - \\vec{r}_2 = \\vec{a}$ (the constant vector connecting the center of the sphere to the center of the cavity), $\\vec{E} = \\frac{\\rho}{3\\varepsilon_0}\\vec{a}$ is constant in both magnitude and direction everywhere within the cavity. (R) correctly explains (A)."
  },
  {
    a: "Gauss's law is an immediate consequence of the inverse-square nature of Coulomb's law.",
    r: "The solid angle subtended by any closed surface at an interior point is $4\\pi\\text{ steradians}$, which cancels the $r^2$ dependence in the denominator of Coulomb's law.",
    ans: 0,
    exp: "Flux element is $d\\Phi = \\frac{kq}{r^2} dA\\cos\\theta = kq\\, d\\Omega$. Integrating over the full sphere gives $\\Phi = kq(4\\pi) = \\frac{q}{4\\pi\\varepsilon_0}(4\\pi) = \\frac{q}{\\varepsilon_0}$. If Coulomb's law were not inverse-square, Gauss's law would fail. (R) correctly explains (A)."
  },
  {
    a: "If a closed Gaussian surface encloses zero net charge, the electric field must be zero everywhere on the surface.",
    r: "Gauss's law states that $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{enclosed}}{\\varepsilon_0}$.",
    ans: 3,
    exp: "Assertion is false: when an external charge is placed near a closed surface, $Q_{enc} = 0$ so net flux is zero, but the electric field $\\vec{E}$ on the surface is definitely non-zero. Reason is true."
  },
  {
    a: "Gauss's law cannot be used to calculate the electric field of an electric dipole.",
    r: "Gauss's law is always physically valid, but for low-symmetry charge distributions like a dipole, $\\vec{E}$ cannot be factored out of the surface integral $\\oint \\vec{E}\\cdot d\\vec{A}$.",
    ans: 0,
    exp: "Gauss's law remains true, but without spherical, cylindrical, or planar symmetry, it does not provide a practical algebraic shortcut to find $\\vec{E}$. (R) correctly explains (A)."
  },
  {
    a: "The electric flux through a hemispherical surface of radius $R$ with a point charge $q$ placed at its open circular base center is $\\frac{q}{2\\varepsilon_0}$.",
    r: "A full sphere centered at the charge would enclose the charge completely with flux $\\frac{q}{\\varepsilon_0}$, and by symmetry the hemisphere intercepts exactly half of that flux.",
    ans: 0,
    exp: "Because the charge lies on the plane of the base, half of the radially outward field lines cross the upper curved hemisphere, giving $\\Phi = \\frac{q}{2\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "If the radius of a Gaussian sphere enclosing a point charge is doubled, the electric flux through the sphere remains unchanged.",
    r: "The electric field decreases by a factor of 4 ($E \\propto 1/r^2$) while the surface area increases by a factor of 4 ($A = 4\\pi r^2$), leaving the product $EA$ invariant.",
    ans: 0,
    exp: "By Gauss's law, flux depends strictly on enclosed charge $\\Phi = Q_{enc}/\\varepsilon_0$, independent of the radius of the Gaussian surface. (R) correctly explains (A)."
  },
  {
    a: "The electric field due to an infinite cylinder of uniform charge density $\\rho$ and radius $R$ at a point inside ($r < R$) is $E(r) = \\frac{\\rho r}{2\\varepsilon_0}$.",
    r: "Applying Gauss's law to a coaxial cylinder of radius $r < R$ and length $L$ yields $E(2\\pi r L) = \\frac{\\rho (\\pi r^2 L)}{\\varepsilon_0} \\implies E = \\frac{\\rho r}{2\\varepsilon_0}$.",
    ans: 0,
    exp: "Gaussian cylindrical surface has curved area $2\\pi r L$ and enclosed charge $\\rho \\pi r^2 L$, directly yielding $E = \\frac{\\rho r}{2\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "A point charge $q$ is placed at distance $d$ directly above the center of a square plate of side $2d$. The electric flux through the square is $\\frac{q}{6\\varepsilon_0}$.",
    r: "The square plate forms one of the six faces of a symmetric cube of side $2d$ centered at the charge.",
    ans: 0,
    exp: "Constructing a cube of side $2d$ with the charge at its center, the plate is exactly one face of the cube. Total flux through the cube is $\\frac{q}{\\varepsilon_0}$, so the flux through the plate is $\\frac{q}{6\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "The divergence of the electrostatic field $\\vec{\\nabla}\\cdot\\vec{E}$ at a point in vacuum free of charges is zero.",
    r: "The differential form of Gauss's law is $\\vec{\\nabla}\\cdot\\vec{E} = \\frac{\\rho}{\\varepsilon_0}$, which evaluates to zero where volume charge density $\\rho = 0$.",
    ans: 0,
    exp: "In charge-free space, $\\rho = 0$, so Maxwell's first equation reduces to $\\vec{\\nabla}\\cdot\\vec{E} = 0$. (R) correctly explains (A)."
  },
  {
    a: "If a conductor carries an excess net charge $Q$, all the excess charge must reside exclusively on its outer surface in electrostatic equilibrium.",
    r: "Inside the conducting material $\\vec{E} = 0$, so any Gaussian surface drawn entirely within the conducting material encloses zero net charge by Gauss's law.",
    ans: 0,
    exp: "Because $\\vec{E} = 0$ everywhere inside the bulk of a conductor, $\\oint \\vec{E}\\cdot d\\vec{A} = 0 \\implies Q_{enc} = 0$. Hence no net charge can reside in the interior. (R) correctly explains (A)."
  },
  {
    a: "The electric field just outside the surface of a charged conductor is twice as large as the electric field near an infinite non-conducting sheet carrying the same surface charge density $\\sigma$.",
    r: "For a conducting surface, all field lines emerge outward on one side because the interior field is zero ($E = \\frac{\\sigma}{\\varepsilon_0}$), whereas for a thin non-conducting sheet, field lines emerge symmetrically from both sides ($E = \\frac{\\sigma}{2\\varepsilon_0}$).",
    ans: 0,
    exp: "A non-conducting sheet sends flux through two faces ($2EA = \\frac{\\sigma A}{\\varepsilon_0} \\implies E = \\frac{\\sigma}{2\\varepsilon_0}$), while a conductor has zero internal flux ($EA = \\frac{\\sigma A}{\\varepsilon_0} \\implies E = \\frac{\\sigma}{\\varepsilon_0}$). (R) explains (A)."
  },
  {
    a: "A spherical Gaussian surface encloses a point charge. If the charge is shifted away from the center to an eccentric point, the total electric flux through the surface changes.",
    r: "Gauss's law states that total flux depends only on the magnitude of the enclosed charge, not on its position within the surface.",
    ans: 3,
    exp: "Assertion is false: as long as the charge remains inside the boundary, total flux $\\Phi = \\frac{q}{\\varepsilon_0}$ is invariant (though local field values on the surface change). Reason is true."
  },
  {
    a: "Electric flux through a closed surface can be negative.",
    r: "If the net charge enclosed within the surface is negative ($Q_{enc} < 0$), more electric field lines enter the surface than leave it, making $\\oint \\vec{E}\\cdot d\\vec{A} < 0$.",
    ans: 0,
    exp: "Field lines ending on negative interior charges point opposite to the outward surface normal, giving negative net flux. (R) correctly explains (A)."
  },
  {
    a: "The electric field on the surface of a uniformly charged conducting sphere of radius $R$ and charge $Q$ is discontinuous.",
    r: "The electric field drops abruptly from $E = \\frac{kQ}{R^2} = \\frac{\\sigma}{\\varepsilon_0}$ just outside the surface to $E = 0$ just inside the surface.",
    ans: 0,
    exp: "The presence of a surface charge density $\\sigma$ causes a step discontinuity in the normal component of the electric field: $\\Delta E_n = \\frac{\\sigma}{\\varepsilon_0}$. (R) correctly explains (A)."
  },
  {
    a: "The electric flux through a cube of side $a$ placed in a uniform electric field $\\vec{E} = E_0\\hat{i}$ is zero.",
    r: "The electric field lines entering the left face of the cube emerge completely through the right face, and no charge is enclosed within the cube.",
    ans: 0,
    exp: "$\\Phi_{in} = -E_0 a^2$ and $\\Phi_{out} = +E_0 a^2$, giving net flux $\\Phi = 0$, consistent with $Q_{enc} = 0$. (R) correctly explains (A)."
  },
  {
    a: "In applying Gauss's law, the chosen Gaussian surface must be a physical boundary made of a real material.",
    r: "A Gaussian surface is a purely hypothetical mathematical surface chosen for convenience to evaluate flux.",
    ans: 3,
    exp: "Assertion is false: a Gaussian surface is completely imaginary and need not correspond to any physical material boundary. Reason is true."
  },
  {
    a: "The total electric flux emerging from an isolated charge of $q = 8.854\\mu\\text{C}$ in vacuum is $10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$.",
    r: "By Gauss's law, $\\Phi = \\frac{q}{\\varepsilon_0} = \\frac{8.854 \\times 10^{-6}\\text{ C}}{8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)} = 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$.",
    ans: 0,
    exp: "Evaluating $\\frac{q}{\\varepsilon_0}$ yields exactly $10^6\\text{ V}\\cdot\\text{m}$. (R) correctly explains (A)."
  },
  {
    a: "Gauss's law cannot be applied to calculate the electric field inside a non-spherical charged body without high symmetry.",
    r: "Gauss's law is valid for any closed surface regardless of shape or charge symmetry, but determining $\\vec{E}$ requires geometric symmetry where $E$ is constant over the integration surface.",
    ans: 0,
    exp: "Gauss's law is universally true, but without symmetry, $\\vec{E}$ cannot be isolated from the surface integral. (R) correctly explains (A)."
  }
];

// 7 Generator MCQs on Gauss's Law
const mcqData = [
  {
    q: "A point charge $q$ is placed at the center of a cube of side $L$. The electric flux emerging through any one of the six faces of the cube is:",
    opts: [
      "$\\frac{q}{6\\varepsilon_0}$",
      "$\\frac{q}{\\varepsilon_0}$",
      "$\\frac{q}{24\\varepsilon_0}$",
      "$\\frac{q}{8\\varepsilon_0}$"
    ],
    ans: 0,
    exp: "Total flux through the cube is $\\Phi = \\frac{q}{\\varepsilon_0}$. By cubic symmetry, all 6 faces receive identical flux, so $\\Phi_{face} = \\frac{q}{6\\varepsilon_0}$."
  },
  {
    q: "A point charge $q$ is placed at one corner of a cube. What is the electric flux through each of the three faces that DO NOT touch this corner?",
    opts: [
      "$\\frac{q}{24\\varepsilon_0}$",
      "$\\frac{q}{8\\varepsilon_0}$",
      "$\\frac{q}{6\\varepsilon_0}$",
      "$\\frac{q}{12\\varepsilon_0}$"
    ],
    ans: 0,
    exp: "Total flux through the cube is $\\frac{q}{8\\varepsilon_0}$. The 3 faces meeting at the corner have zero flux because field lines are parallel to them. The remaining flux $\\frac{q}{8\\varepsilon_0}$ is divided equally among the 3 opposite faces: $\\frac{1}{3}\\left(\\frac{q}{8\\varepsilon_0}\\right) = \\frac{q}{24\\varepsilon_0}$."
  },
  {
    q: "A charge $q$ is placed at the center of the open circular base of a hemisphere of radius $R$. The electric flux through the curved surface of the hemisphere is:",
    opts: [
      "$\\frac{q}{2\\varepsilon_0}$",
      "$\\frac{q}{\\varepsilon_0}$",
      "$\\frac{q}{4\\varepsilon_0}$",
      "Zero"
    ],
    ans: 0,
    exp: "Completing the hemisphere to a full sphere gives total flux $\\frac{q}{\\varepsilon_0}$. By symmetry, half the field lines pass through the curved surface of the hemisphere, giving $\\Phi = \\frac{q}{2\\varepsilon_0}$."
  },
  {
    q: "A spherical shell of radius $R$ carries a uniform surface charge density $\\sigma$. The electric field at a radial distance $r < R$ inside the shell is:",
    opts: ["Zero", "$\\frac{\\sigma}{\\varepsilon_0}$", "$\\frac{\\sigma}{2\\varepsilon_0}$", "$\\frac{\\sigma r}{\\varepsilon_0 R}$"],
    ans: 0,
    exp: "A Gaussian surface inside the shell encloses zero net charge, so $E(4\\pi r^2) = 0 \\implies E = 0$ everywhere inside the shell."
  },
  {
    q: "A non-conducting solid sphere of radius $R$ has a uniform volume charge density $\\rho$. The electric field at a distance $r$ from the center (where $r < R$) is:",
    opts: [
      "$\\frac{\\rho r}{3\\varepsilon_0}$",
      "$\\frac{\\rho r}{\\varepsilon_0}$",
      "$\\frac{\\rho R^3}{3\\varepsilon_0 r^2}$",
      "$\\frac{\\rho r^2}{3\\varepsilon_0 R}$"
    ],
    ans: 0,
    exp: "Enclosed charge is $Q_{enc} = \\rho\\left(\\frac{4}{3}\\pi r^3\\right)$. By Gauss's law: $E(4\\pi r^2) = \\frac{Q_{enc}}{\\varepsilon_0} = \\frac{4\\pi \\rho r^3}{3\\varepsilon_0} \\implies E = \\frac{\\rho r}{3\\varepsilon_0}$."
  },
  {
    q: "A cylinder of radius $R$ and length $L$ is placed in a uniform electric field $\\vec{E}$ parallel to the cylinder axis. The total electric flux through the entire surface of the cylinder is:",
    opts: ["Zero", "$2\\pi R^2 E$", "$\\pi R^2 E$", "$2\\pi R L E$"],
    ans: 0,
    exp: "Flux entering the left flat face is $-E(\\pi R^2)$. Flux exiting the right flat face is $+E(\\pi R^2)$. Flux through the curved surface is zero as $\\vec{E} \\parallel$ curved surface. Total flux is $-E\\pi R^2 + E\\pi R^2 = 0$."
  },
  {
    q: "Inside a solid sphere of uniform charge density $\\rho$, a spherical cavity of radius $R'$ is excavated. The electric field inside the cavity is:",
    opts: [
      "Uniform and non-zero",
      "Zero everywhere",
      "Radial and proportional to distance from cavity center",
      "Inversely proportional to distance from cavity center"
    ],
    ans: 0,
    exp: "By superposition, $\\vec{E} = \\vec{E}_{full} - \\vec{E}_{removed} = \\frac{\\rho}{3\\varepsilon_0}\\vec{r}_1 - \\frac{\\rho}{3\\varepsilon_0}\\vec{r}_2 = \\frac{\\rho}{3\\varepsilon_0}(\\vec{r}_1 - \\vec{r}_2) = \\frac{\\rho}{3\\varepsilon_0}\\vec{a}$, which is strictly uniform in both magnitude and direction."
  }
];

// 20 Authentic Numerical Questions on Gauss's Law
const numData = [];
function addNumerical(q, ans, exp) {
  numData.push({ q, ans, exp });
}

// 1. Flux through cube face when charge is at center: Phi = q / (6 * eps0)
// Let q = 6 * i * 8.854 uC -> Phi = 6*i*8.854e-6 / (6 * 8.854e-12) = i * 10^6 N*m^2/C = i * 10^5 or similar
for (let i = 1; i <= 5; i++) {
  const q_uC = Math.round(6 * i * 8.854 * 100) / 100; // in uC
  const Phi_x10_5 = i * 10; // Phi in units of 10^5 N*m^2/C
  addNumerical(
    `A point charge of $q = ${q_uC}\\mu\\text{C}$ is placed at the center of a cube. Taking $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$, find the electric flux $\\Phi$ through one face of the cube in units of $10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$.`,
    Phi_x10_5,
    `$\\Phi = \\frac{q}{6\\varepsilon_0} = \\frac{${q_uC} \\times 10^{-6}}{6(8.854 \\times 10^{-12})} = ${i} \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C} = ${Phi_x10_5} \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$.`
  );
}

// 2. Flux through hemisphere when charge is at base center: Phi = q / (2 * eps0)
for (let i = 1; i <= 5; i++) {
  const q_uC = Math.round(2 * i * 8.854 * 100) / 100;
  const Phi_x10_5 = i * 10;
  addNumerical(
    `A point charge $q = ${q_uC}\\mu\\text{C}$ is located at the center of the circular base of a hemisphere. Taking $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$, find the electric flux through the curved surface of the hemisphere in units of $10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$.`,
    Phi_x10_5,
    `$\\Phi = \\frac{q}{2\\varepsilon_0} = \\frac{${q_uC} \\times 10^{-6}}{2(8.854 \\times 10^{-12})} = ${i} \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C} = ${Phi_x10_5} \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$.`
  );
}

// 3. Electric field inside solid sphere E = k * Q * r / R^3 (k = 9e9)
// Let R = 1 m, r = 0.5 m, Q = i uC -> E = 9e9 * i*1e-6 * 0.5 / 1 = 4500 * i V/m
for (let i = 1; i <= 5; i++) {
  const Q_uC = 2 * i;
  const r = 0.5;
  const R = 1.0;
  const E_kVm = 9 * i;
  addNumerical(
    `A non-conducting solid sphere of radius $R = 1.0\\text{ m}$ carries a total charge of $Q = ${Q_uC}\\mu\\text{C}$ distributed uniformly throughout its volume. Calculate the electric field intensity $E$ (in $\\text{kV/m}$) at a radial distance $r = 0.5\\text{ m}$ from the center. (Take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    E_kVm,
    `$E = \\frac{k Q r}{R^3} = \\frac{(9 \\times 10^9)(${Q_uC} \\times 10^{-6})(0.5)}{(1.0)^3} = ${9000 * i}\\text{ V/m} = ${E_kVm}\\text{ kV/m}$.`
  );
}

// 4. Electric field outside conducting sphere E = k * Q / r^2
for (let i = 1; i <= 5; i++) {
  const Q_uC = i;
  const r = 0.3; // r^2 = 0.09 -> E = 9e9 * i*1e-6 / 0.09 = 9000i / 0.09 = 100 * i kV/m
  const E_kVm = 100 * i;
  addNumerical(
    `A conducting sphere of radius $0.1\\text{ m}$ carries a charge of $Q = ${Q_uC}\\mu\\text{C}$. Calculate the electric field $E$ (in $\\text{kV/m}$) at a distance of $r = 0.3\\text{ m}$ from the center of the sphere. (Take $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).`,
    E_kVm,
    `Outside the sphere ($r > R$), $E = \\frac{kQ}{r^2} = \\frac{(9 \\times 10^9)(${Q_uC} \\times 10^{-6})}{(0.3)^2} = \\frac{${9000 * i}}{0.09} = ${100000 * i}\\text{ V/m} = ${E_kVm}\\text{ kV/m}$.`
  );
}

console.log(`Total generated numericals: ${numData.length} (target: 20)`);

// Assemble total 53 questions
const part8Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part8Questions.push({
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

  part8Questions.push({
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

  part8Questions.push({
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

console.log(`Part 8 generated: ${part8Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_electrostatics_part8.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part8Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
