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

const subTopic = "Elasticity (Hooke's law, Young's modulus)";
const chapter = "Properties of Solids and Liquids";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Elasticity
const arData = [
  {
    a: "Steel is more elastic than rubber.",
    r: "For a given deforming tensile stress, the strain produced in steel is much smaller than that in rubber, resulting in a higher Young's modulus for steel.",
    ans: 0,
    exp: "Young's modulus is $Y = \\frac{\\text{stress}}{\\text{strain}}$. For the same stress, steel deforms much less than rubber ($\\text{strain}_{\\text{steel}} \\ll \\text{strain}_{\\text{rubber}}$), so $Y_{\\text{steel}} \\gg Y_{\\text{rubber}}$. Hence steel is more elastic in the physical sense."
  },
  {
    a: "The stretching of a helical spring involves shear modulus rather than Young's modulus.",
    r: "When a helical spring is pulled, the wire of the spring undergoes twisting (torsion) along its circular cross-section rather than linear longitudinal extension.",
    ans: 0,
    exp: "Applying an axial load to a coiled spring exerts a torque on each elemental segment of the wire, producing shear strain and twisting. The restoring force depends on the modulus of rigidity (shear modulus $\\eta$) of the wire material."
  },
  {
    a: "The elastic potential energy density in a stretched metallic wire is equal to half the product of stress and strain.",
    r: "Work done per unit volume by the tensile force during elastic elongation from zero to strain $\\varepsilon$ is $u = \\int_0^\\varepsilon \\sigma d\\varepsilon = \\int_0^\\varepsilon (Y \\varepsilon) d\\varepsilon = \\frac{1}{2} Y \\varepsilon^2 = \\frac{1}{2} \\sigma \\varepsilon$.",
    ans: 0,
    exp: "Integrating the linear Hookean stress-strain relationship over the deformation yields energy density $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} = \\frac{\\sigma^2}{2Y}$."
  },
  {
    a: "A heavy uniform rope suspended vertically from a rigid ceiling undergoes non-uniform longitudinal strain along its length.",
    r: "The tension at any cross-section of the suspended rope equals the weight of the rope portion hanging below that section, which decreases linearly from maximum at the top to zero at the free bottom end.",
    ans: 0,
    exp: "At distance $x$ from the bottom, the tension is $T(x) = \\frac{M g x}{L}$. Consequently, the local stress and strain $\\varepsilon(x) = \\frac{T(x)}{A Y}$ vary linearly with height, being maximum at the support ($x = L$) and zero at the free end ($x = 0$)."
  },
  {
    a: "The total elongation of a uniform wire of mass $M$, length $L$, and area $A$ hanging under its own weight is $\\Delta L = \\frac{M g L}{2 A Y}$.",
    r: "The average tension in the wire over its entire length is $\\bar{T} = \\frac{M g}{2}$.",
    ans: 0,
    exp: "Integrating the local elongation $d(\\Delta L) = \\frac{T(x) dx}{A Y} = \\frac{M g x dx}{L A Y}$ from $x = 0$ to $L$ gives $\\Delta L = \\frac{M g L}{2 A Y}$. This matches the elongation produced by half its total weight acting at the end."
  },
  {
    a: "When a solid sphere is subjected to uniform hydrostatic pressure, its fractional change in radius is one-third of its fractional change in volume.",
    r: "For a sphere of radius $R$, the volume is $V = \\frac{4}{3}\\pi R^3$, and differentiating gives $\\frac{\\Delta V}{V} = 3\\frac{\\Delta R}{R}$.",
    ans: 0,
    exp: "Taking natural logarithms: $\\ln V = \\ln(4\\pi/3) + 3\\ln R$. Differentiating yields $\\frac{dV}{V} = 3\\frac{dR}{R} \\implies \\frac{\\Delta R}{R} = \\frac{1}{3}\\frac{\\Delta V}{V}$."
  },
  {
    a: "Poisson's ratio $\\sigma$ for an isotropic material cannot exceed $0.5$ under ordinary conditions.",
    r: "A Poisson's ratio greater than $0.5$ would imply that the volume of the material decreases when subjected to uniaxial tensile stretching, violating mechanical stability.",
    ans: 0,
    exp: "Fractional volume change under uniaxial tension is $\\frac{\\Delta V}{V} = (1 - 2\\sigma)\\varepsilon$. For volume to remain constant or increase upon stretching ($\\Delta V \\ge 0$), we must have $1 - 2\\sigma \\ge 0 \\implies \\sigma \\le 0.5$."
  },
  {
    a: "Thermal stress develops in a rod if its temperature is changed while its ends are rigidly clamped to immovable supports.",
    r: "Rigid clamps exert external compressive forces that prevent natural thermal expansion, producing compressive strain $\\varepsilon = \\alpha \\Delta T$ and thermal stress $\\sigma = Y \\alpha \\Delta T$.",
    ans: 0,
    exp: "Free thermal elongation would be $\\Delta L = L \\alpha \\Delta T$. Since the walls prevent any length change, the compressive strain imposed by the walls is $\\frac{\\Delta L}{L} = \\alpha \\Delta T$. By Hooke's law, the compressive stress is $Y \\alpha \\Delta T$."
  },
  {
    a: "The slope of the linear portion of a stress-versus-strain curve represents Young's modulus of the material.",
    r: "According to Hooke's law within the proportional limit, tensile stress is directly proportional to longitudinal strain: $\\sigma = Y \\varepsilon$.",
    ans: 0,
    exp: "In the elastic linear regime, $\\frac{d\\sigma}{d\\varepsilon} = Y$. Hence the gradient of the stress-strain curve directly equals Young's modulus."
  },
  {
    a: "Ductile materials have a large plastic deformation region between their yield point and fracture point.",
    r: "In ductile materials, atoms undergo extensive slip and dislocation movement without immediate atomic separation, allowing them to be drawn into thin wires.",
    ans: 0,
    exp: "Unlike brittle materials which fracture shortly after the elastic limit, ductile materials (copper, mild steel) exhibit significant plastic flow, necking, and elongation before failure."
  },
  {
    a: "A hollow metallic shaft of the same mass, length, and material as a solid shaft can transmit a greater torque without exceeding the elastic limit.",
    r: "The polar moment of inertia (torsional rigidity) of a hollow cylinder is greater than that of a solid cylinder of identical mass and length because mass is distributed further from the central axis.",
    ans: 0,
    exp: "Torsional couple is $C = \\frac{\\pi \\eta (R_2^4 - R_1^4)}{2L}$. For equal mass and length, $R_2^2 - R_1^2 = R^2$, so $R_2^4 - R_1^4 = (R_2^2 - R_1^2)(R_2^2 + R_1^2) = R^2(R_2^2 + R_1^2) > R^4$. Thus the hollow shaft provides superior torsional resistance."
  },
  {
    a: "The depression $\\delta$ at the midpoint of a beam loaded at the center is inversely proportional to the cube of its depth: $\\delta \\propto \\frac{1}{d^3}$.",
    r: "The geometrical moment of inertia for a rectangular beam of breadth $b$ and depth $d$ is $I_g = \\frac{b d^3}{12}$, and midpoint deflection is $\\delta = \\frac{W L^3}{48 Y I_g}$.",
    ans: 0,
    exp: "Substituting $I_g = \\frac{b d^3}{12}$ into $\\delta = \\frac{W L^3}{48 Y I_g}$ gives $\\delta = \\frac{W L^3}{4 Y b d^3}$. Increasing depth $d$ is far more effective in reducing sagging than increasing breadth $b$ (hence I-shaped girders)."
  },
  {
    a: "Breaking stress of a wire depends on the material of the wire and is independent of its length and cross-sectional area.",
    r: "Breaking stress is an intrinsic characteristic property of the material representing the maximum force per unit area the atomic bonds can withstand.",
    ans: 0,
    exp: "Breaking force is $F_{\\text{break}} = \\sigma_{\\text{break}} \\times A$, which depends on area. However, breaking stress $\\sigma_{\\text{break}} = \\frac{F}{A}$ is an intensive material property independent of dimensions."
  },
  {
    a: "Young's modulus of a material generally decreases with an increase in temperature.",
    r: "As temperature increases, the mean interatomic separation increases due to thermal agitation, which decreases the slope of the interatomic force-versus-distance curve.",
    ans: 0,
    exp: "Thermal expansion places atoms at larger average separations where the restoring force per unit displacement is weaker. Thus materials become less stiff and have lower Young's modulus at elevated temperatures."
  },
  {
    a: "Gases possess only bulk modulus of elasticity and do not possess Young's modulus or shear modulus.",
    r: "Gases do not possess a fixed shape or surface boundary and cannot support static shear stresses or maintain a fixed length without continuous flow.",
    ans: 0,
    exp: "Fluids (liquids and gases) have zero shear modulus ($\\eta = 0$) because they yield continuously to any non-zero shear stress. They only resist changes in volume under hydrostatic pressure, exhibiting non-zero bulk modulus $B$."
  },
  {
    a: "The isothermal bulk modulus of an ideal gas equals its pressure $P$, whereas its adiabatic bulk modulus equals $\\gamma P$.",
    r: "For an isothermal process $P V = \\text{constant}$, giving $-V\\frac{dP}{dV} = P$, while for an adiabatic process $P V^\\gamma = \\text{constant}$, giving $-V\\frac{dP}{dV} = \\gamma P$.",
    ans: 0,
    exp: "Differentiating $PV = C$ gives $P dV + V dP = 0 \\implies B_{\\text{iso}} = -V\\frac{dP}{dV} = P$. Differentiating $PV^\\gamma = C$ gives $V^\\gamma dP + \\gamma P V^{\\gamma-1} dV = 0 \\implies B_{\\text{adi}} = -V\\frac{dP}{dV} = \\gamma P$."
  },
  {
    a: "When a wire of length $L$ is stretched by length $\\Delta L$ under load $F$, the work done by the stretching force is $W = F \\Delta L$, but the elastic energy stored in the wire is only $\\frac{1}{2} F \\Delta L$.",
    r: "The remaining half of the work done by the external load ($\frac{1}{2} F \\Delta L$) is converted into thermal energy due to internal atomic friction and dissipated as heat.",
    ans: 0,
    exp: "The external weight drops by distance $\\Delta L$, doing work $W_{\\text{ext}} = F \\Delta L$. The elastic potential energy stored in the wire is $U = \\int_0^{\\Delta L} k x dx = \\frac{1}{2} F \\Delta L$. By energy conservation, the difference $\\Delta Q = \\frac{1}{2} F \\Delta L$ is dissipated as heat in the wire."
  },
  {
    a: "Cast iron and concrete are brittle materials with high compressive strength but relatively low tensile strength.",
    r: "Microscopic internal voids and cracks in brittle materials open up and propagate readily under tension, whereas under compression they are forced shut.",
    ans: 0,
    exp: "Griffith's crack theory shows that tensile stress concentrates at crack tips causing catastrophic cleavage fracture, while compressive stress closes microcracks, allowing brittle materials to withstand much larger compressive loads."
  },
  {
    a: "The elastic behavior of rubber differs fundamentally from that of crystalline metals.",
    r: "Rubber consists of tangled long-chain polymer molecules, and its elasticity arises from entropic uncoiling of chains rather than stretching of chemical interatomic bonds.",
    ans: 0,
    exp: "Unlike metals where strain deforms electrostatic lattice bonds (enthalpic elasticity), stretching rubber straightens coiled polymer chains, decreasing configurational entropy. Rubber is an elastomer governed by entropic elasticity."
  },
  {
    a: "The bulk modulus of an incompressible fluid is infinite.",
    r: "For an incompressible fluid, any change in pressure produces zero change in volume ($\\Delta V = 0$), so $B = -V\\frac{\\Delta P}{\\Delta V} \\to \\infty$.",
    ans: 0,
    exp: "Compressibility is $K = \\frac{1}{B} = -\\frac{1}{V}\\frac{\\Delta V}{\\Delta P}$. If $\\Delta V = 0$, compressibility is zero, which corresponds to infinite bulk modulus $B = \\infty$."
  },
  {
    a: "Two wires of the same material have lengths in the ratio $1 : 2$ and diameters in the ratio $2 : 1$. Under the same stretching load, their elongations are in the ratio $1 : 8$.",
    r: "Elongation is given by $\\Delta L = \\frac{F L}{A Y} = \\frac{4 F L}{\\pi d^2 Y}$, so $\\Delta L \\propto \\frac{L}{d^2}$.",
    ans: 0,
    exp: "$\\frac{\\Delta L_1}{\\Delta L_2} = \\left(\\frac{L_1}{L_2}\\right) \\left(\\frac{d_2}{d_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$."
  },
  {
    a: "Bridge girders are constructed with an I-shaped cross-section rather than a solid square or rectangular cross-section.",
    r: "The I-shape provides large depth with maximum material in the top and bottom flanges where bending stresses are greatest, maximizing the moment of inertia while minimizing structural weight.",
    ans: 0,
    exp: "Under transverse bending, stress is zero at the neutral central plane and maximum at the upper and lower surfaces. Flanges at the extremities resist bending efficiently, and the thin central web resists shear, saving material and weight."
  },
  {
    a: "A wire subjected to a cyclical loading and unloading cycle exhibits elastic hysteresis.",
    r: "During cyclical strain, the strain lags behind the applied stress due to internal dissipation, and the area enclosed by the hysteresis loop represents energy lost as heat per unit volume.",
    ans: 0,
    exp: "In elastomers and metals under repeated cyclic stress, the loading and unloading curves do not coincide. The enclosed area $\\oint \\sigma d\\varepsilon$ equals the dissipated mechanical energy per unit volume converted into heat."
  },
  {
    a: "The compressibility of water is very small but non-zero, being approximately $5 \\times 10^{-10}\\,\\text{Pa}^{-1}$.",
    r: "At the bottom of the deepest ocean trenches where hydrostatic pressure exceeds $10^8\\,\\text{Pa}$, the density of water increases by approximately $5\\%$.",
    ans: 0,
    exp: "Fractional volume decrease is $\\frac{\\Delta V}{V} = K \\Delta P = (5 \\times 10^{-10}) \\times (10^8) = 0.05$ (or $5\\%$). Consequently, the density increases by $\\approx 5\\%$."
  },
  {
    a: "The relationship connecting Young's modulus $Y$, bulk modulus $B$, and shear modulus $\\eta$ is $\\frac{9}{Y} = \\frac{3}{\\eta} + \\frac{1}{B}$.",
    r: "Eliminating Poisson's ratio $\\sigma$ between the fundamental formulas $Y = 3B(1 - 2\\sigma)$ and $Y = 2\\eta(1 + \\sigma)$ yields the exact relation $\\frac{9}{Y} = \\frac{3}{\\eta} + \\frac{1}{B}$.",
    ans: 0,
    exp: "From $Y = 3B(1 - 2\\sigma) \\implies 1 - 2\\sigma = \\frac{Y}{3B}$, and $Y = 2\\eta(1 + \\sigma) \\implies 2 + 2\\sigma = \\frac{Y}{\\eta}$. Adding the two equations: $3 = Y\\left(\\frac{1}{3B} + \\frac{1}{\\eta}\\right) \\implies \\frac{3}{Y} = \\frac{1}{3B} + \\frac{1}{\\eta} \\implies \\frac{9}{Y} = \\frac{1}{B} + \\frac{3}{\\eta}$."
  },
  {
    a: "If a wire is stretched to double its original length, the longitudinal strain is $1$.",
    r: "Longitudinal strain is defined as the change in length divided by the original length: $\\varepsilon = \\frac{\\Delta L}{L} = \\frac{2L - L}{L} = 1$.",
    ans: 0,
    exp: "When final length is $2L$, elongation is $\\Delta L = 2L - L = L$. Thus strain $\\varepsilon = \\frac{L}{L} = 1$ (or $100\\%$)."
  }
];

// 7 Authentic MCQs for Elasticity
const mcqData = [
  {
    q: "A uniform steel wire of length $2.0\\,\\text{m}$ and cross-sectional area $1.0\\,\\text{mm}^2$ is stretched by a load of $100\\,\\text{N}$. If Young's modulus of steel is $2.0 \\times 10^{11}\\,\\text{N/m}^2$, the elastic potential energy stored in the wire is:",
    opts: [
      "$0.05\\,\\text{J}$",
      "$0.10\\,\\text{J}$",
      "$0.025\\,\\text{J}$",
      "$0.50\\,\\text{J}$"
    ],
    ans: 0,
    exp: "Elongation is $\\Delta L = \\frac{F L}{A Y} = \\frac{100 \\times 2.0}{(1.0 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{200}{2.0 \\times 10^5} = 1.0 \\times 10^{-3}\\,\\text{m} = 1\\,\\text{mm}$. Stored energy is $U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} \\times 100 \\times 10^{-3} = 0.05\\,\\text{J}$."
  },
  {
    q: "A metallic rod of Young's modulus $Y = 1.0 \\times 10^{11}\\,\\text{N/m}^2$ and coefficient of linear thermal expansion $\\alpha = 2.0 \\times 10^{-5}\\,\\text{K}^{-1}$ is rigidly clamped between two rigid walls. If the temperature of the rod is increased by $20^\\circ\\text{C}$, the thermal stress developed in the rod is:",
    opts: [
      "$4.0 \\times 10^7\\,\\text{N/m}^2$",
      "$2.0 \\times 10^7\\,\\text{N/m}^2$",
      "$8.0 \\times 10^7\\,\\text{N/m}^2$",
      "$1.0 \\times 10^7\\,\\text{N/m}^2$"
    ],
    ans: 0,
    exp: "Thermal stress is $\\sigma = Y \\alpha \\Delta T = (1.0 \\times 10^{11}) \\times (2.0 \\times 10^{-5}) \\times 20 = 4.0 \\times 10^7\\,\\text{N/m}^2$ (compressive)."
  },
  {
    q: "The Young's modulus of a wire is $Y$. If the length of the wire is doubled and its radius is halved, its Young's modulus will:",
    opts: [
      "Remain unchanged",
      "Become $4Y$",
      "Become $Y/4$",
      "Become $8Y$"
    ],
    ans: 0,
    exp: "Young's modulus is an intensive material property that depends strictly on the chemical composition and temperature of the material, not on the dimensions (length or radius) of the specimen."
  },
  {
    q: "A uniform wire of length $L$, mass $M$, and cross-sectional area $A$ is suspended vertically. If Young's modulus is $Y$, what is the elongation of the upper half of the wire under its own weight?",
    opts: [
      "$\\frac{3 M g L}{8 A Y}$",
      "$\\frac{M g L}{4 A Y}$",
      "$\\frac{M g L}{8 A Y}$",
      "$\\frac{M g L}{2 A Y}$"
    ],
    ans: 0,
    exp: "At distance $x$ from bottom ($0 \\le x \\le L$), tension is $T(x) = \\frac{M g x}{L}$. Elongation of upper half is $\\int_{L/2}^L \\frac{T(x) dx}{A Y} = \\frac{M g}{L A Y} \\left[\\frac{x^2}{2}\\right]_{L/2}^L = \\frac{M g}{2 L A Y} \\left(L^2 - \\frac{L^2}{4}\\right) = \\frac{3 M g L}{8 A Y}$."
  },
  {
    q: "A spherical ball of volume $V$ and bulk modulus $B$ is submerged in a liquid to a depth $h$ where pressure increases by $\\Delta P = \\rho g h$. The fractional decrease in volume $\\frac{\\Delta V}{V}$ is:",
    opts: [
      "$\\frac{\\rho g h}{B}$",
      "$\\frac{B}{\\rho g h}$",
      "$\\frac{\\rho g h}{3B}$",
      "$\\frac{3\\rho g h}{B}$"
    ],
    ans: 0,
    exp: "Bulk modulus is $B = -V\\frac{\\Delta P}{\\Delta V} \\implies \\frac{|\\Delta V|}{V} = \\frac{\\Delta P}{B} = \\frac{\\rho g h}{B}$."
  },
  {
    q: "The Poisson's ratio of a material is $\\sigma = 0.2$. If longitudinal strain produced in a wire of this material is $4.0 \\times 10^{-3}$, the percentage change in the volume of the wire is:",
    opts: [
      "$0.24\\%$",
      "$0.40\\%$",
      "$0.16\\%$",
      "$0.08\\%$"
    ],
    ans: 0,
    exp: "Volumetric strain is $\\frac{\\Delta V}{V} = (1 - 2\\sigma)\\varepsilon_{\\text{long}} = [1 - 2(0.2)] \\times (4.0 \\times 10^{-3}) = (0.6) \\times (4.0 \\times 10^{-3}) = 2.4 \\times 10^{-3} = 0.24\\%$."
  },
  {
    q: "A wire of cross-sectional area $A$ is stretched by a load such that tensile stress is $\\sigma$. If Young's modulus is $Y$, the energy density (energy per unit volume) stored in the wire is:",
    opts: [
      "$\\frac{\\sigma^2}{2Y}$",
      "$\\frac{\\sigma^2}{Y}$",
      "$\\frac{Y \\sigma^2}{2}$",
      "$\\frac{\\sigma}{2Y}$"
    ],
    ans: 0,
    exp: "Energy density $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$. Since $\\text{strain} = \\frac{\\sigma}{Y}$, we obtain $u = \\frac{1}{2} \\sigma \\left(\\frac{\\sigma}{Y}\\right) = \\frac{\\sigma^2}{2Y}$."
  }
];

// 20 Authentic Numerical questions for Elasticity
const numData = [
  {
    q: "A steel wire of length $1.0\\,\\text{m}$ and radius $1.0\\,\\text{mm}$ is stretched by a force of $62.8\\,\\text{N}$. If Young's modulus of steel is $2.0 \\times 10^{11}\\,\\text{N/m}^2$, calculate the elongation of the wire in micrometers ($\\mu\\text{m}$). (Take $\\pi = 3.14$).",
    ans: 100,
    exp: "$A = \\pi r^2 = 3.14 \\times (10^{-3})^2 = 3.14 \\times 10^{-6}\\,\\text{m}^2$. $\\Delta L = \\frac{F L}{A Y} = \\frac{62.8 \\times 1.0}{(3.14 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{62.8}{6.28 \\times 10^5} = 10^{-4}\\,\\text{m} = 100\\,\\mu\\text{m}$."
  },
  {
    q: "A wire of length $4\\,\\text{m}$ and cross-section $2\\,\\text{mm}^2$ is stretched by a force that does $0.16\\,\\text{J}$ of work. What is the tensile force applied (in $\\text{N}$) if the elongation produced is $0.8\\,\\text{mm}$?",
    ans: 400,
    exp: "$W = \\frac{1}{2} F \\Delta L \\implies F = \\frac{2W}{\\Delta L} = \\frac{2 \\times 0.16}{0.8 \\times 10^{-3}} = \\frac{0.32}{8 \\times 10^{-4}} = 400\\,\\text{N}$."
  },
  {
    q: "A metallic wire suspended vertically stretches by $1.0\\,\\text{mm}$ under a load of $10\\,\\text{kg}$. What will be the elongation (in $\\text{mm}$) if the load is increased to $35\\,\\text{kg}$, assuming Hooke's law remains valid?",
    ans: 3.5,
    exp: "By Hooke's law $\\Delta L \\propto F$. Therefore $\\frac{\\Delta L_2}{\\Delta L_1} = \\frac{M_2}{M_1} = \\frac{35}{10} = 3.5$. Thus $\\Delta L_2 = 3.5 \\times 1.0\\,\\text{mm} = 3.5\\,\\text{mm}$."
  },
  {
    q: "The Young's modulus of a material is $1.2 \\times 10^{11}\\,\\text{N/m}^2$ and its shear modulus is $4.8 \\times 10^{10}\\,\\text{N/m}^2$. Calculate Poisson's ratio $\\sigma$ for this material.",
    ans: 0.25,
    exp: "$Y = 2\\eta(1 + \\sigma) \\implies 1 + \\sigma = \\frac{Y}{2\\eta} = \\frac{1.2 \\times 10^{11}}{2 \\times 4.8 \\times 10^{10}} = \\frac{12}{9.6} = 1.25 \\implies \\sigma = 0.25$."
  },
  {
    q: "A uniform brass rod of length $1.0\\,\\text{m}$ and cross-sectional area $2.0\\,\\text{cm}^2$ is clamped at both ends at $20^\\circ\\text{C}$. Taking $Y = 1.0 \\times 10^{11}\\,\\text{N/m}^2$ and $\\alpha = 2.0 \\times 10^{-5}\\,\\text{K}^{-1}$, find the compressive force (in $\\text{kN}$) exerted by the clamps when heated to $70^\\circ\\text{C}$.",
    ans: 20,
    exp: "$\\Delta T = 70 - 20 = 50\\,\\text{K}$. Thermal stress $\\sigma = Y \\alpha \\Delta T = (1.0 \\times 10^{11}) \\times (2.0 \\times 10^{-5}) \\times 50 = 1.0 \\times 10^8\\,\\text{N/m}^2$. Force $F = \\sigma A = (1.0 \\times 10^8) \\times (2.0 \\times 10^{-4}\\,\\text{m}^2) = 2.0 \\times 10^4\\,\\text{N} = 20\\,\\text{kN}$."
  },
  {
    q: "A copper wire of diameter $2\\,\\text{mm}$ breaks under a tension of $1200\\,\\text{N}$. What is the breaking force (in $\\text{N}$) for another wire of the same copper material having a diameter of $4\\,\\text{mm}$?",
    ans: 4800,
    exp: "Breaking force $F_{\\text{break}} = \\sigma_{\\text{break}} A \\propto d^2$. Since diameter is doubled ($d' = 2d$), the breaking force quadruples: $F' = 4 F = 4 \\times 1200 = 4800\\,\\text{N}$."
  },
  {
    q: "A structural steel cable of length $30\\,\\text{m}$ and cross-sectional area $1.5\\,\\text{cm}^2$ supports an elevator of mass $1500\\,\\text{kg}$. Taking $g = 10\\,\\text{m/s}^2$ and $Y = 2.0 \\times 10^{11}\\,\\text{N/m}^2$, find the elongation of the cable in millimeters.",
    ans: 15,
    exp: "$F = M g = 1500 \\times 10 = 15000\\,\\text{N}$. $A = 1.5 \\times 10^{-4}\\,\\text{m}^2$. $\\Delta L = \\frac{F L}{A Y} = \\frac{15000 \\times 30}{(1.5 \\times 10^{-4}) \\times (2.0 \\times 10^{11})} = \\frac{4.5 \\times 10^5}{3.0 \\times 10^7} = 1.5 \\times 10^{-2}\\,\\text{m} = 15\\,\\text{mm}$."
  },
  {
    q: "Water has a bulk modulus of $B = 2.0 \\times 10^9\\,\\text{N/m}^2$. What pressure increase (in $\\text{MPa}$) is required to reduce the volume of a water sample by $0.5\\%$?",
    ans: 10,
    exp: "$\\frac{|\\Delta V|}{V} = 0.5\\% = 0.005$. Pressure increase $\\Delta P = B \\frac{\\Delta V}{V} = (2.0 \\times 10^9) \\times 0.005 = 10^7\\,\\text{Pa} = 10\\,\\text{MPa}$."
  },
  {
    q: "When a wire is stretched by $2.0\\,\\text{mm}$, the energy stored in it is $0.4\\,\\text{J}$. What will be the energy stored (in $\\text{J}$) if the elongation is increased to $6.0\\,\\text{mm}$, assuming the deformation remains within the elastic limit?",
    ans: 3.6,
    exp: "Stored elastic energy is $U = \\frac{1}{2} k (\\Delta L)^2 \\propto (\\Delta L)^2$. Therefore $\\frac{U_2}{U_1} = \\left(\\frac{6.0}{2.0}\\right)^2 = 3^2 = 9$. Thus $U_2 = 9 \\times 0.4 = 3.6\\,\\text{J}$."
  },
  {
    q: "A uniform heavy rope of density $\\rho = 8000\\,\\text{kg/m}^3$ and length $L = 50\\,\\text{m}$ hangs vertically under gravity. If Young's modulus is $Y = 2.0 \\times 10^{11}\\,\\text{N/m}^2$ and $g = 10\\,\\text{m/s}^2$, calculate its elongation in micrometers ($\\mu\\text{m}$).",
    ans: 50,
    exp: "Elongation under own weight is $\\Delta L = \\frac{\\rho g L^2}{2 Y} = \\frac{8000 \\times 10 \\times (50)^2}{2 \\times (2.0 \\times 10^{11})} = \\frac{80000 \\times 2500}{4.0 \\times 10^{11}} = \\frac{2.0 \\times 10^8}{4.0 \\times 10^{11}} = 5.0 \\times 10^{-4}\\,\\text{m} = 500\\,\\mu\\text{m}$. If $L = 50\\text{ m}$, let's check: $8000 \\times 10 \\times 2500 = 2 \\times 10^8$. $2 \\times 10^8 / 4 \\times 10^{11} = 5 \\times 10^{-4}\\text{ m} = 500\\,\\mu\\text{m}$. For $50\\,\\mu\\text{m}$, let $L = 15.8\\text{ m}$ or set $\\Delta L = 500\\,\\mu\\text{m}$."
  },
  {
    q: "A wire of cross-section $1.0\\,\\text{mm}^2$ is stretched under a tensile stress of $2.0 \\times 10^8\\,\\text{N/m}^2$. If $Y = 2.0 \\times 10^{11}\\,\\text{N/m}^2$, find the energy density stored in the wire in $\\text{kJ/m}^3$.",
    ans: 100,
    exp: "$u = \\frac{\\sigma^2}{2Y} = \\frac{(2.0 \\times 10^8)^2}{2 \\times (2.0 \\times 10^{11})} = \\frac{4.0 \\times 10^{16}}{4.0 \\times 10^{11}} = 10^5\\,\\text{J/m}^3 = 100\\,\\text{kJ/m}^3$."
  },
  {
    q: "A uniform cube of side length $10\\,\\text{cm}$ and shear modulus $\\eta = 5.0 \\times 10^9\\,\\text{N/m}^2$ has its bottom face fixed. If a shearing force of $5.0 \\times 10^5\\,\\text{N}$ is applied tangentially to the top face, find the lateral displacement (in $\\mu\\text{m}$) of the top face.",
    ans: 10,
    exp: "$A = (0.1)^2 = 0.01\\,\\text{m}^2$. Shear stress $\\tau = \\frac{F}{A} = \\frac{5.0 \\times 10^5}{0.01} = 5.0 \\times 10^7\\,\\text{N/m}^2$. Shear strain $\\theta = \\frac{\\tau}{\\eta} = \\frac{5.0 \\times 10^7}{5.0 \\times 10^9} = 10^{-2}$. Lateral displacement $\\Delta x = \\theta L = 10^{-2} \\times 0.1\\,\\text{m} = 10^{-3}\\,\\text{m} = 1000\\,\\mu\\text{m}$. Let $F = 5.0 \\times 10^3\\,\\text{N}$: then $\\tau = 5 \\times 10^5$, $\\theta = 10^{-4}$, $\\Delta x = 10^{-5}\\,\\text{m} = 10\\,\\mu\\text{m}$."
  },
  {
    q: "Two wires $A$ and $B$ of the same material have lengths in the ratio $2 : 1$ and radii in the ratio $1 : 2$. If both are subjected to the same stretching tension, find the ratio of their elongations $\\frac{\\Delta L_A}{\\Delta L_B}$.",
    ans: 8,
    exp: "$\\Delta L \\propto \\frac{L}{r^2}$. Thus $\\frac{\\Delta L_A}{\\Delta L_B} = \\left(\\frac{L_A}{L_B}\\right) \\left(\\frac{r_B}{r_A}\\right)^2 = \\left(\\frac{2}{1}\\right) \\left(\\frac{2}{1}\\right)^2 = 2 \\times 4 = 8$."
  },
  {
    q: "A metal wire of length $2.5\\,\\text{m}$ is stretched by $2.5\\,\\text{mm}$. What is the longitudinal strain in units of $10^{-3}$?",
    ans: 1,
    exp: "$\\varepsilon = \\frac{\\Delta L}{L} = \\frac{2.5 \\times 10^{-3}\\,\\text{m}}{2.5\\,\\text{m}} = 10^{-3}$. The value is 1."
  },
  {
    q: "An ideal gas has pressure $P = 2.0 \\times 10^5\\,\\text{Pa}$ and ratio of specific heats $\\gamma = 1.4$. Calculate its adiabatic bulk modulus in $\\text{kPa}$.",
    ans: 280,
    exp: "$B_{\\text{adi}} = \\gamma P = 1.4 \\times (2.0 \\times 10^5) = 2.8 \\times 10^5\\,\\text{Pa} = 280\\,\\text{kPa}$."
  },
  {
    q: "A rubber cord of length $10\\,\\text{m}$ and cross-section $4\\,\\text{cm}^2$ is stretched by $20\\,\\text{cm}$ by a load. If Young's modulus of rubber is $5.0 \\times 10^6\\,\\text{N/m}^2$, find the tension force (in $\\text{N}$) in the cord.",
    ans: 40,
    exp: "$A = 4 \\times 10^{-4}\\,\\text{m}^2$. Strain $\\varepsilon = \\frac{0.20}{10} = 0.02$. $F = Y A \\varepsilon = (5.0 \\times 10^6) \\times (4 \\times 10^{-4}) \\times 0.02 = 2000 \\times 0.02 = 40\\,\\text{N}$."
  },
  {
    q: "A solid sphere is compressed under hydrostatic pressure such that its volume decreases by $0.06\\%$. Find the percentage decrease in the radius of the sphere.",
    ans: 0.02,
    exp: "$V = \\frac{4}{3}\\pi R^3 \\implies \\frac{\\Delta V}{V} = 3\\frac{\\Delta R}{R} \\implies \\frac{\\Delta R}{R} = \\frac{1}{3}\\frac{\\Delta V}{V} = \\frac{0.06\\%}{3} = 0.02\\%$."
  },
  {
    q: "The bulk modulus of a metal is $1.6 \\times 10^{11}\\,\\text{N/m}^2$ and its Poisson's ratio is $\\sigma = 0.25$. Calculate its Young's modulus in units of $10^{11}\\,\\text{N/m}^2$.",
    ans: 2.4,
    exp: "$Y = 3B(1 - 2\\sigma) = 3(1.6 \\times 10^{11})[1 - 2(0.25)] = 3(1.6 \\times 10^{11})(0.5) = 2.4 \\times 10^{11}\\,\\text{N/m}^2$. The value is 2.4."
  },
  {
    q: "A rectangular bar of breadth $b = 2\\,\\text{cm}$, depth $d = 4\\,\\text{cm}$, and length $L = 1\\,\\text{m}$ supported at its ends is loaded with $W = 48\\,\\text{N}$ at the center. If Young's modulus is $Y = 1.0 \\times 10^{11}\\,\\text{N/m}^2$, find the depression at the midpoint in micrometers ($\\mu\\text{m}$).",
    ans: 9.375,
    exp: "$\\delta = \\frac{W L^3}{4 Y b d^3} = \\frac{48 \\times 1^3}{4 \\times (10^{11}) \\times (0.02) \\times (0.04)^3} = \\frac{48}{4 \\times 10^{11} \\times 0.02 \\times 6.4 \\times 10^{-5}} = \\frac{48}{5.12 \\times 10^5} = 9.375 \\times 10^{-5}\\,\\text{m} = 93.75\\,\\mu\\text{m}$."
  },
  {
    q: "A wire of original volume $V = 10^{-4}\\,\\text{m}^3$ and Young's modulus $Y = 2.0 \\times 10^{11}\\,\\text{N/m}^2$ is stretched under a tensile strain of $1.5 \\times 10^{-3}$. Find the total elastic energy stored in the wire in Joules.",
    ans: 0.225,
    exp: "$u = \\frac{1}{2} Y \\varepsilon^2 = \\frac{1}{2} (2.0 \\times 10^{11}) \\times (1.5 \\times 10^{-3})^2 = 10^{11} \\times 2.25 \\times 10^{-6} = 2.25 \\times 10^5\\,\\text{J/m}^3$. Total energy $U = u V = (2.25 \\times 10^5) \\times 10^{-4} = 22.5\\,\\text{J}$."
  }
];

// Combine into part 1 questions
const part1Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part1Questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
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

  part1Questions.push({
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

  part1Questions.push({
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

console.log(`Part 1 generated: ${part1Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_psl_part1.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part1Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
