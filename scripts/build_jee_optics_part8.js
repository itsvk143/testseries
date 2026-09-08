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

const subTopic = "Polarization of light (Brewster's law)";
const chapter = "Optics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Polarization
const arData = [
  {
    a: "Light waves can be polarized, but sound waves cannot be polarized.",
    r: "Polarization is an exclusive property of transverse waves in which vibrations occur perpendicular to the direction of propagation, whereas sound waves in air are longitudinal.",
    ans: 0,
    exp: "In longitudinal sound waves, molecular oscillations are parallel to the direction of propagation, which exhibits complete cylindrical symmetry about the propagation axis and cannot be polarized. (R) correctly explains (A)."
  },
  {
    a: "When unpolarized light is incident at Brewster's angle on a transparent dielectric medium, the reflected light is completely plane polarized.",
    r: "At Brewster's angle, the reflected and refracted rays are mutually perpendicular ($i_p + r_p = 90^\\circ$), so electrons vibrating parallel to the refracted ray cannot radiate transverse waves in the direction of reflection.",
    ans: 0,
    exp: "Electric dipoles induced in the medium oscillate along the direction of the refracted electric field. Since dipoles radiate zero energy along their axis of oscillation, the $p$-polarized component cannot be reflected. (R) correctly explains (A)."
  },
  {
    a: "According to Brewster's law, the polarizing angle $i_p$ satisfies $\\tan i_p = \\mu$.",
    r: "At the polarizing angle, the angle of refraction is $r_p = 90^\\circ - i_p$, and applying Snell's law gives $\\frac{\\sin i_p}{\\sin(90^\\circ - i_p)} = \\frac{\\sin i_p}{\\cos i_p} = \\tan i_p = \\mu$.",
    ans: 0,
    exp: "By Snell's law $\\mu = \\frac{\\sin i_p}{\\sin r_p}$. Substituting $r_p = 90^\\circ - i_p$ gives $\\mu = \\frac{\\sin i_p}{\\cos i_p} = \\tan i_p$. (R) correctly explains (A)."
  },
  {
    a: "When completely unpolarized light of intensity $I_0$ passes through an ideal Polaroid sheet, the transmitted intensity is exactly $\\frac{I_0}{2}$.",
    r: "The time average of $\\cos^2\\theta$ for random orientations $\\theta$ of the electric field vector uniformly distributed over $0$ to $2\\pi$ is $\\frac{1}{2}$.",
    ans: 0,
    exp: "Unpolarized light consists of equal components along any two orthogonal axes. The Polaroid transmits only the component parallel to its transmission axis: $\\langle I \\rangle = I_0 \\langle \\cos^2\\theta \\rangle = I_0 \\left(\\frac{1}{2}\\right) = \\frac{I_0}{2}$. (R) correctly explains (A)."
  },
  {
    a: "According to Malus's law, the intensity of polarized light transmitted by an analyzer is $I = I_0 \\cos^2\\theta$.",
    r: "Only the component of the electric field vector parallel to the transmission axis of the analyzer ($E = E_0 \\cos\\theta$) is transmitted, and intensity is proportional to the square of the electric field amplitude.",
    ans: 0,
    exp: "The transmitted amplitude is $E = E_0 \\cos\\theta$. Since $I \\propto E^2$, the transmitted intensity is $I = I_0 \\cos^2\\theta$. (R) correctly explains (A)."
  },
  {
    a: "No light is transmitted through two Polaroids oriented with their transmission axes crossed at $90^\\circ$.",
    r: "When the angle between the transmission axes is $\\theta = 90^\\circ$, $\\cos(90^\\circ) = 0$, so according to Malus's law the transmitted intensity is $I = I_0 \\cos^2(90^\\circ) = 0$.",
    ans: 0,
    exp: "The second Polaroid (analyzer) completely absorbs the electric field vibrations produced by the first polarizer since they are perpendicular to its transmission axis. (R) correctly explains (A)."
  },
  {
    a: "When a third Polaroid is placed between two crossed Polaroids at an angle of $45^\\circ$, light is transmitted through the entire system.",
    r: "The intermediate Polaroid resolves the linearly polarized light from the first Polaroid into a component along its own axis, which now has a non-zero component along the axis of the third Polaroid.",
    ans: 0,
    exp: "After the first Polaroid, intensity is $I_1 = I_0/2$. After the second (at $45^\\circ$), $I_2 = I_1\\cos^2(45^\\circ) = I_1/2$. After the third (at $45^\\circ$ to the second), $I_3 = I_2\\cos^2(45^\\circ) = I_1/4 = I_0/8 > 0$. (R) correctly explains (A)."
  },
  {
    a: "Sunlight scattered by air molecules viewed at an angle of $90^\\circ$ to the incident beam is completely linearly polarized.",
    r: "Rayleigh scattering induces dipole oscillations perpendicular to the incident ray, and looking at $90^\\circ$ selects only the transverse vibration component parallel to the viewer's horizon.",
    ans: 0,
    exp: "Because the dipole cannot radiate along its axis of vibration, the scattered light viewed at right angles to the solar direction has electric field vibrations confined exclusively perpendicular to the scattering plane. (R) correctly explains (A)."
  },
  {
    a: "Polaroid sunglasses reduce glare from horizontal surfaces like wet roads and lakes much better than tinted glasses.",
    r: "Light reflected from horizontal surfaces is predominantly horizontally polarized, and Polaroid sunglasses have vertical transmission axes that block this glare.",
    ans: 0,
    exp: "Reflected glare from horizontal surfaces is polarized parallel to the surface (horizontal). The vertical transmission axis of sunglasses absorbs this horizontally polarized glare. (R) correctly explains (A)."
  },
  {
    a: "A Nicol prism produces plane-polarized light using the phenomenon of double refraction and total internal reflection.",
    r: "In a calcite crystal, the ordinary ray has a higher refractive index than Canada balsam, allowing the ordinary ray to be totally internally reflected at the balsam layer and absorbed by blackened sides.",
    ans: 0,
    exp: "For calcite, $\\mu_o = 1.658$ and $\\mu_e = 1.486$, while Canada balsam has $\\mu = 1.55$. The $O$-ray encounters a rarer medium at the balsam interface and undergoes TIR, leaving only the $E$-ray transmitted. (R) correctly explains (A)."
  },
  {
    a: "In a birefringent crystal, the ordinary ray obeys Snell's law, but the extraordinary ray does not obey Snell's law in general.",
    r: "The speed of the ordinary ray is identical in all directions (spherical wavefront), whereas the speed of the extraordinary ray depends on the direction of propagation relative to the optic axis (ellipsoidal wavefront).",
    ans: 0,
    exp: "For the $O$-ray, the refractive index $\\mu_o$ is constant, yielding spherical wavefronts. For the $E$-ray, refractive index $\\mu_e(\\theta)$ varies with angle to the optic axis, giving ellipsoidal wavefronts. (R) correctly explains (A)."
  },
  {
    a: "Along the optic axis of a uniaxial birefringent crystal, the ordinary ray and extraordinary ray travel with identical speeds.",
    r: "The optic axis is a direction of special crystallographic symmetry along which the crystal exhibits isotropic optical properties.",
    ans: 0,
    exp: "Along the optic axis, light experiences no birefringence: $v_o = v_e$ and no double refraction occurs. (R) correctly explains (A)."
  },
  {
    a: "Polarized light can be produced by reflection, refraction, scattering, selective absorption (dichroism), and double refraction.",
    r: "All these methods isolate or preferentially transmit electric field vibrations along a single plane perpendicular to the direction of propagation.",
    ans: 0,
    exp: "These five optical techniques are the standard physical mechanisms for transforming unpolarized radiation into linearly polarized light. (R) correctly explains (A)."
  },
  {
    a: "Tourmaline crystals exhibit the phenomenon of dichroism.",
    r: "A tourmaline crystal strongly absorbs the ordinary ray by selective absorption while transmitting the extraordinary ray with minimal attenuation.",
    ans: 0,
    exp: "Dichroism is the property of anisotropic absorption. Tourmaline absorbs the $O$-ray over a short thickness, transmitting linearly polarized $E$-ray light. (R) correctly explains (A)."
  },
  {
    a: "Liquid crystal displays (LCDs) rely on the controlled rotation of the plane of polarization of light.",
    r: "An applied electric field untwists the nematic liquid crystal molecules, altering their ability to rotate the plane of polarization of light between crossed polarizers.",
    ans: 0,
    exp: "Without voltage, the twisted nematic layer rotates polarization by $90^\\circ$, letting light pass through crossed polarizers (bright pixel). Applying voltage aligns molecules along the field, blocking transmission (dark pixel). (R) correctly explains (A)."
  },
  {
    a: "The Brewster angle for a glass plate of refractive index $1.5$ in air is approximately $56.3^\\circ$.",
    r: "Brewster's angle is given by $i_p = \\tan^{-1}(\\mu) = \\tan^{-1}(1.5) \\approx 56.3^\\circ$.",
    ans: 0,
    exp: "$\\tan i_p = 1.5 \\implies i_p = \\arctan(1.5) \\approx 56.31^\\circ$. (R) correctly explains (A)."
  },
  {
    a: "A pile of glass plates is used to produce partially plane-polarized transmitted light.",
    r: "At each Brewster-angle interface, a fraction of the $s$-polarized component is reflected, leaving the transmitted beam increasingly enriched in the $p$-polarized component.",
    ans: 0,
    exp: "By stacking 15-20 thin microscope slides at Brewster's angle, successive surface reflections progressively remove the perpendicular component, producing nearly pure linearly polarized transmitted light. (R) correctly explains (A)."
  },
  {
    a: "Optically active substances rotate the plane of polarization of linearly polarized light passing through them.",
    r: "An optically active medium has chiral molecular structures that have different refractive indices for right-circularly polarized and left-circularly polarized components of light.",
    ans: 0,
    exp: "Linearly polarized light is the superposition of equal right- and left-circular components. Different phase velocities ($v_R \\neq v_L$) introduce a phase shift that rotates the resultant plane of linear polarization. (R) correctly explains (A)."
  },
  {
    a: "Sugar solutions are widely analyzed using polarimeters in sugar factories.",
    r: "The angle of rotation of linearly polarized light is directly proportional to the concentration of the sugar solution: $\\theta = S \\cdot l \\cdot c$.",
    ans: 0,
    exp: "Biot's law of optical activity $\\theta = [\\alpha] l c$ allows quantitative measurement of sugar concentration $c$ from the observed rotation angle $\\theta$. (R) correctly explains (A)."
  },
  {
    a: "Circularly polarized light produces a constant transmitted intensity when viewed through a rotating linear polarizer.",
    r: "The electric field vector of circularly polarized light has constant magnitude and rotates uniformly in a circle at the optical frequency.",
    ans: 0,
    exp: "Because the electric field has equal amplitudes along all transverse axes ($E_x = E_0\\cos\\omega t, E_y = E_0\\sin\\omega t$), rotating an analyzer gives $\\langle I \\rangle = \\frac{1}{2} E_0^2 = \\text{constant}$. (R) correctly explains (A)."
  },
  {
    a: "Elliptically polarized light can be converted into circularly polarized light using a quarter-wave plate.",
    r: "A quarter-wave plate introduces a phase difference of $\\frac{\\pi}{2}$ radians between mutually perpendicular ordinary and extraordinary rays.",
    ans: 1,
    exp: "Both (A) and (R) are true statements. However, transforming arbitrary elliptical polarization into circular polarization requires orienting the waveplate axes relative to the ellipse axes to adjust amplitude and phase simultaneously; (R) describes the waveplate property but is not the complete explanation. (B) is correct."
  },
  {
    a: "Brewster's angle for water ($\\mu = 1.33$) in air is approximately $53^\\circ$.",
    r: "$\\tan i_p = \\mu = 1.333 \\implies i_p = \\tan^{-1}(4/3) \\approx 53.13^\\circ$.",
    ans: 0,
    exp: "Using $\\tan i_p = 4/3 \\implies i_p \\approx 53.1^\\circ \\approx 53^\\circ$. (R) correctly explains (A)."
  },
  {
    a: "Sound waves can be polarized using a pair of crossed acoustic slit grids.",
    r: "Sound waves in air are transverse pressure waves.",
    ans: 3,
    exp: "(A) is false because sound waves in fluids cannot be polarized under any circumstances. (R) is false because sound waves in air are longitudinal waves, not transverse."
  },
  {
    a: "The human eye cannot distinguish between unpolarized light and plane-polarized light without an optical analyzer.",
    r: "The photoreceptors on the human retina are generally insensitive to the vibration direction of the electric field vector.",
    ans: 0,
    exp: "Human vision registers only total irradiance; except for the very subtle phenomenon of Haidinger's brush, the human eye cannot perceive polarization without polarizing filters. (R) correctly explains (A)."
  },
  {
    a: "The Brewster angle depends on the wavelength of light used.",
    r: "The refractive index of a transparent medium varies with wavelength according to Cauchy's dispersion formula, and $\\tan i_p = \\mu(\\lambda)$.",
    ans: 0,
    exp: "Because $\\mu_V > \\mu_R$, the polarizing angle for violet light is slightly greater than that for red light ($i_{p,V} > i_{p,R}$). (R) correctly explains (A)."
  },
  {
    a: "In double refraction, a single incident unpolarized ray is split into two refracted rays having mutually perpendicular polarizations.",
    r: "The anisotropic crystalline structure of a birefringent material provides different electric polarizabilities along different crystal axes.",
    ans: 0,
    exp: "Anisotropic susceptibility tensors cause the two orthogonal polarization components to experience different effective dielectric constants and propagate along separate refracted directions. (R) correctly explains (A)."
  }
];

// 7 Authentic MCQ questions for Polarization
const mcqData = [
  {
    q: "Unpolarized light of intensity $I_0$ is incident on a system of two ideal polarizers whose transmission axes are inclined at $60^\\circ$ to each other. The intensity of light transmitted by the system is:",
    opts: [
      "$\\frac{I_0}{8}$",
      "$\\frac{I_0}{4}$",
      "$\\frac{I_0}{2}$",
      "$\\frac{3I_0}{8}$"
    ],
    ans: 0,
    exp: "Intensity after the first polarizer is $I_1 = \\frac{I_0}{2}$. By Malus's law, intensity after the second polarizer is $I_2 = I_1 \\cos^2(60^\\circ) = \\left(\\frac{I_0}{2}\\right)\\left(\\frac{1}{2}\\right)^2 = \\frac{I_0}{8}$."
  },
  {
    q: "A ray of light is incident on the surface of a glass plate of refractive index $1.732$ ($\\sqrt{3}$). If the reflected ray is completely plane polarized, the angle of refraction in degrees is:",
    opts: [
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    ans: 0,
    exp: "By Brewster's law, $\\tan i_p = \\mu = \\sqrt{3} \\implies i_p = 60^\\circ$. The reflected and refracted rays are perpendicular: $i_p + r_p = 90^\\circ \\implies r_p = 90^\\circ - 60^\\circ = 30^\\circ$."
  },
  {
    q: "Two polaroids $P_1$ and $P_2$ are placed with their transmission axes mutually perpendicular. A third polaroid $P_3$ is placed between them with its transmission axis making an angle of $45^\\circ$ with that of $P_1$. If unpolarized light of intensity $I_0$ is incident on $P_1$, the transmitted intensity is:",
    opts: [
      "$\\frac{I_0}{8}$",
      "$\\frac{I_0}{16}$",
      "$\\frac{I_0}{4}$",
      "0"
    ],
    ans: 0,
    exp: "After $P_1$: $I_1 = \\frac{I_0}{2}$. After $P_3$ (at $45^\\circ$ to $P_1$): $I_2 = I_1\\cos^2(45^\\circ) = \\frac{I_0}{2} \\times \\frac{1}{2} = \\frac{I_0}{4}$. Angle between $P_3$ and $P_2$ is $90^\\circ - 45^\\circ = 45^\\circ$. After $P_2$: $I_3 = I_2\\cos^2(45^\\circ) = \\frac{I_0}{4} \\times \\frac{1}{2} = \\frac{I_0}{8}$."
  },
  {
    q: "The polarizing angle for a transparent medium is $45^\\circ$. The critical angle for total internal reflection for the same medium in air is:",
    opts: [
      "$90^\\circ$ (or no TIR)",
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$"
    ],
    ans: 0,
    exp: "By Brewster's law: $\\mu = \\tan i_p = \\tan(45^\\circ) = 1$. If $\\mu = 1$, the medium is optically identical to air, $\\sin\\theta_c = \\frac{1}{\\mu} = 1 \\implies \\theta_c = 90^\\circ$."
  },
  {
    q: "The polarizing angle for water is $53^\\circ$. If light is incident from water on a submerged glass plate, the reflected light is completely polarized when the angle of incidence in water is:",
    opts: [
      "$48.4^\\circ$",
      "$53.0^\\circ$",
      "$56.3^\\circ$",
      "$37.0^\\circ$"
    ],
    ans: 0,
    exp: "$\\mu_w = \\tan(53^\\circ) = \\frac{4}{3}$. For glass $\\mu_g = 1.5$. Relative index is $\\mu_{rel} = \\frac{\\mu_g}{\\mu_w} = \\frac{1.5}{4/3} = \\frac{9}{8} = 1.125$. $\\tan i_p = 1.125 \\implies i_p = \\arctan(1.125) \\approx 48.37^\\circ \\approx 48.4^\\circ$."
  },
  {
    q: "Linearly polarized light of intensity $I_0$ passes through an analyzer whose transmission axis makes an angle of $30^\\circ$ with the plane of vibration of light. The transmitted intensity is:",
    opts: [
      "$0.75 I_0$",
      "$0.50 I_0$",
      "$0.25 I_0$",
      "$0.866 I_0$"
    ],
    ans: 0,
    exp: "By Malus's law, $I = I_0 \\cos^2(30^\\circ) = I_0 \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4} I_0 = 0.75 I_0$."
  },
  {
    q: "A sugar solution in a tube of length $20\\text{ cm}$ produces an optical rotation of $+13^\\circ$. If the specific rotation of sugar is $+65^\\circ\\text{ dm}^{-1}\\text{ (g/cm}^3)^{-1}$, the concentration of the sugar solution is:",
    opts: [
      "$0.10\\text{ g/cm}^3$",
      "$0.05\\text{ g/cm}^3$",
      "$0.20\\text{ g/cm}^3$",
      "$0.13\\text{ g/cm}^3$"
    ],
    ans: 0,
    exp: "Tube length $l = 20\\text{ cm} = 2\\text{ dm}$. Specific rotation formula: $\\theta = S \\cdot l \\cdot c \\implies 13 = 65 \\times 2 \\times c = 130 c \\implies c = \\frac{13}{130} = 0.10\\text{ g/cm}^3$."
  }
];

// 20 Authentic Numerical questions for Polarization
const numData = [
  {
    q: "The refractive index of a transparent medium is $\\sqrt{3} \\approx 1.732$. The polarizing angle (Brewster's angle) in degrees is:",
    ans: 60,
    exp: "$\\tan i_p = \\mu = \\sqrt{3} \\implies i_p = 60^\\circ$."
  },
  {
    q: "The polarizing angle for a material is $45^\\circ$. The refractive index of the material is:",
    ans: 1,
    exp: "$\\mu = \\tan i_p = \\tan 45^\\circ = 1$."
  },
  {
    q: "Unpolarized light of intensity $32\\text{ W/m}^2$ passes through a polarizer and then an analyzer tilted at $60^\\circ$ to the polarizer. The transmitted intensity in $\\text{W/m}^2$ is:",
    ans: 4,
    exp: "$I_1 = \\frac{32}{2} = 16\\text{ W/m}^2$. $I_2 = I_1 \\cos^2(60^\\circ) = 16 \\times (0.5)^2 = 16 \\times 0.25 = 4\\text{ W/m}^2$."
  },
  {
    q: "Two polaroids are oriented with their transmission axes at an angle $\\theta$. If the transmitted intensity of unpolarized light of intensity $I_0$ is $\\frac{I_0}{8}$, the angle $\\theta$ in degrees is:",
    ans: 60,
    exp: "$I = \\frac{I_0}{2}\\cos^2\\theta = \\frac{I_0}{8} \\implies \\cos^2\\theta = \\frac{1}{4} \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$."
  },
  {
    q: "The critical angle for a medium is $30^\\circ$. The polarizing angle of the medium in degrees (taking $\\tan(63.43^\\circ) = 2$) is (rounded to nearest integer):",
    ans: 63,
    exp: "$\\mu = \\frac{1}{\\sin 30^\\circ} = 2$. $\\tan i_p = \\mu = 2 \\implies i_p = \\arctan(2) \\approx 63.43^\\circ \\approx 63^\\circ$."
  },
  {
    q: "Two crossed polarizers block all light. A third polarizer is inserted between them at an angle of $45^\\circ$ to both. If incident unpolarized light has intensity $160\\text{ W/m}^2$, the transmitted intensity in $\\text{W/m}^2$ is:",
    ans: 20,
    exp: "$I_{out} = \\frac{I_0}{8} = \\frac{160}{8} = 20\\text{ W/m}^2$."
  },
  {
    q: "A beam of plane-polarized light falls on an analyzer. If the transmitted intensity is $25\\%$ of the incident intensity, the angle between the transmission axis of the analyzer and the polarization axis in degrees is:",
    ans: 60,
    exp: "$I = I_0 \\cos^2\\theta = 0.25 I_0 \\implies \\cos\\theta = 0.5 \\implies \\theta = 60^\\circ$."
  },
  {
    q: "If the Brewster angle for a glass plate is $57^\\circ$, the angle of refraction inside the glass in degrees is:",
    ans: 33,
    exp: "$r_p = 90^\\circ - i_p = 90^\\circ - 57^\\circ = 33^\\circ$."
  },
  {
    q: "A $20\\text{ cm}$ long polarimeter tube containing a sugar solution of concentration $0.05\\text{ g/cm}^3$ produces an optical rotation of $6.5^\\circ$. The specific rotation of the sugar in $\\text{deg}/(\\text{dm}\\cdot\\text{g/cm}^3)$ is:",
    ans: 65,
    exp: "$l = 2\\text{ dm}, c = 0.05\\text{ g/cm}^3$. $S = \\frac{\\theta}{l \\cdot c} = \\frac{6.5}{2 \\times 0.05} = \\frac{6.5}{0.1} = 65$."
  },
  {
    q: "An unpolarized beam of light of intensity $64\\text{ W/m}^2$ passes through three successive polaroids. The first and second have their axes at $30^\\circ$, and the third is at $60^\\circ$ to the second. The final transmitted intensity in $\\text{W/m}^2$ is:",
    ans: 6,
    exp: "$I_1 = 32\\text{ W/m}^2$. $I_2 = 32 \\cos^2(30^\\circ) = 32(3/4) = 24\\text{ W/m}^2$. $I_3 = 24 \\cos^2(60^\\circ) = 24(1/4) = 6\\text{ W/m}^2$."
  },
  {
    q: "The angle of incidence on a water surface ($\\mu = 4/3$) at which reflected light is completely plane-polarized in degrees (taking $\\arctan(1.333) = 53.1^\\circ$) is (rounded to nearest integer):",
    ans: 53,
    exp: "$i_p = \\arctan(4/3) \\approx 53.13^\\circ \\approx 53^\\circ$."
  },
  {
    q: "The critical angle of a medium is $45^\\circ$. The Brewster polarizing angle of the medium in degrees (taking $\\tan(54.7^\\circ) = \\sqrt{2} \\approx 1.414$) is (rounded to nearest integer):",
    ans: 55,
    exp: "$\\mu = \\frac{1}{\\sin 45^\\circ} = \\sqrt{2}$. $\\tan i_p = \\sqrt{2} \\approx 1.414 \\implies i_p \\approx 54.7^\\circ \\approx 55^\\circ$."
  },
  {
    q: "A light beam of intensity $I_0$ passes through two polarizers. If the angle between their axes is $45^\\circ$, the percentage of incident unpolarized light transmitted is:",
    ans: 25,
    exp: "$\\frac{I}{I_0} = \\frac{1}{2}\\cos^2(45^\\circ) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 25\\%$."
  },
  {
    q: "When light is reflected from a glass slab of refractive index $1.5$ at the Brewster angle, the angle between the reflected and refracted rays in degrees is:",
    ans: 90,
    exp: "At the Brewster angle, the reflected and refracted rays are always mutually perpendicular: $90^\\circ$."
  },
  {
    q: "Plane polarized light of intensity $I_0$ passes through an analyzer whose axis is at $30^\\circ$ to the polarization plane. The fraction of intensity transmitted is $x$. The value of $100 x$ is:",
    ans: 75,
    exp: "$\\frac{I}{I_0} = \\cos^2(30^\\circ) = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4} = 0.75 \\implies 100 x = 75$."
  },
  {
    q: "A tube of sugar solution of length $1\\text{ dm}$ and concentration $0.2\\text{ g/cm}^3$ produces a rotation of $13^\\circ$. The specific rotation of the sugar in degrees is:",
    ans: 65,
    exp: "$S = \\frac{\\theta}{l c} = \\frac{13}{1 \\times 0.2} = 65$."
  },
  {
    q: "Two polaroids are aligned with parallel transmission axes ($\\theta = 0$). One polaroid is rotated by $90^\\circ$. The transmitted intensity drops from $I_{max}$ to:",
    ans: 0,
    exp: "At $\\theta = 90^\\circ$, $\\cos(90^\\circ) = 0 \\implies I = 0$."
  },
  {
    q: "Unpolarized light of intensity $80\\text{ W/m}^2$ falls on a single ideal polarizer. The transmitted intensity in $\\text{W/m}^2$ is:",
    ans: 40,
    exp: "$I = \\frac{I_0}{2} = \\frac{80}{2} = 40\\text{ W/m}^2$."
  },
  {
    q: "The polarizing angle for a material is $60^\\circ$. The speed of light in this material in $\\text{m/s}$ is $v = x \\times 10^8\\text{ m/s}$. Taking $c = 3 \\times 10^8\\text{ m/s}$ and $\\sqrt{3} = 1.732$, the value of $x$ (rounded to two decimal places) is:",
    ans: 1.73,
    exp: "$\\mu = \\tan(60^\\circ) = \\sqrt{3}$. Speed $v = \\frac{c}{\\sqrt{3}} = \\frac{3 \\times 10^8}{1.732} = 1.732 \\times 10^8\\text{ m/s} \\implies x \\approx 1.73$."
  },
  {
    q: "A ray incident at Brewster's angle on a glass plate has an angle of refraction of $35^\\circ$. The polarizing angle of incidence in degrees is:",
    ans: 55,
    exp: "$i_p + r_p = 90^\\circ \\implies i_p = 90^\\circ - 35^\\circ = 55^\\circ$."
  }
];

const part8Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part8Questions.push({
    question: `Assertion (A): ${item.a}\nReason (R): ${item.r}`,
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

const outPath = path.join(__dirname, 'data_jee_optics_part8.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part8Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
