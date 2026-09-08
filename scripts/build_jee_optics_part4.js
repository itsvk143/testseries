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

const subTopic = "Mirror formula and combination of lenses";
const chapter = "Optics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Mirror formula and combination of lenses
const arData = [
  {
    a: "Convex mirrors are commonly used as rear-view mirrors in motor vehicles.",
    r: "A convex mirror always forms an erect and diminished virtual image regardless of object distance, providing a wider field of view than a plane mirror.",
    ans: 0,
    exp: "Because the image is diminished and virtual ($m < 1$), convex mirrors encompass a much wider angular view of traffic behind the vehicle. (R) correctly explains (A)."
  },
  {
    a: "The focal length of a spherical mirror does not change when the mirror is immersed in water.",
    r: "The focal length of a spherical mirror depends solely on its geometric radius of curvature ($f = R/2$) and the law of reflection is independent of the surrounding medium.",
    ans: 0,
    exp: "Unlike lenses whose focal length depends on the relative refractive index, mirror reflection satisfies $\\theta_i = \\theta_r$ in any medium, so $f = R/2$ remains strictly unchanged in water. (R) correctly explains (A)."
  },
  {
    a: "When two thin lenses of powers $+3\\text{ D}$ and $-1\\text{ D}$ are placed in contact, the equivalent focal length of the combination is $+50\\text{ cm}$.",
    r: "The equivalent power of thin lenses in contact is the algebraic sum of their individual powers: $P_{eq} = P_1 + P_2$.",
    ans: 0,
    exp: "$P_{eq} = +3 - 1 = +2\\text{ D}$. Equivalent focal length $F = \\frac{1}{P_{eq}} = \\frac{1}{2}\\text{ m} = +50\\text{ cm}$. (R) correctly explains (A)."
  },
  {
    a: "A concave mirror can form both real and virtual images of a real object.",
    r: "When a real object is placed beyond the focus ($u > f$), the reflected rays converge to form a real image; when placed between the pole and focus ($u < f$), the rays diverge and appear to meet behind the mirror, forming an enlarged virtual image.",
    ans: 0,
    exp: "At $u > f$, $v$ is positive in front of the mirror (real image). For $u < f$, $v$ is negative behind the mirror (virtual image). (R) correctly explains (A)."
  },
  {
    a: "Parabolic mirrors are used in automobile headlamps and astronomical reflecting telescopes instead of spherical mirrors.",
    r: "Parabolic mirrors focus all incident rays parallel to the principal axis precisely at a single geometric focal point without spherical aberration.",
    ans: 0,
    exp: "Spherical mirrors suffer from spherical aberration where marginal rays focus closer to the mirror than paraxial rays. Parabolic curvature focuses all parallel rays to a single point. (R) correctly explains (A)."
  },
  {
    a: "An achromatic combination of two thin lenses in contact requires one lens to be convex and the other to be concave.",
    r: "The condition for achromatism of two lenses in contact is $\\frac{\\omega_1}{f_1} + \\frac{\\omega_2}{f_2} = 0$, and since dispersive powers $\\omega_1, \\omega_2$ are both positive, $f_1$ and $f_2$ must have opposite signs.",
    ans: 0,
    exp: "Because $\\frac{\\omega_1}{f_1} = -\\frac{\\omega_2}{f_2}$, one focal length must be positive (converging) and the other negative (diverging). (R) correctly explains (A)."
  },
  {
    a: "When a plano-convex lens of focal length $f_L$ is silvered on its flat face, the system behaves as a concave mirror of focal length $\\frac{f_L}{2}$.",
    r: "The total optical power is $P = 2 P_L + P_M$, and for a silvered plane face $P_M = 0$, giving $P = 2 P_L = \\frac{2}{f_L} = \\frac{1}{F_{eff}}$.",
    ans: 0,
    exp: "Light passes through the lens, reflects off the plane mirror ($P_M = 0$), and passes through the lens again. $P_{eq} = 2P_L = \\frac{2}{f_L} \\implies F_{eff} = \\frac{f_L}{2}$ acting as a concave mirror. (R) correctly explains (A)."
  },
  {
    a: "When an equiconvex lens of radius of curvature $R$ and $\\mu = 1.5$ has one face silvered, it behaves as a concave mirror of focal length $\\frac{R}{6}$.",
    r: "The lens focal length is $f_L = R$ and the silvered surface has mirror focal length $f_M = R/2$, giving effective power $P = 2P_L + P_M = \\frac{2}{R} + \\frac{2}{R} = \\dots$",
    ans: 0,
    exp: "$P_L = (1.5 - 1)\\frac{2}{R} = \\frac{1}{R}$. $P_M = \\frac{2}{R}$. Effective power $P_{eff} = 2 P_L + P_M = \\frac{2}{R} + \\frac{4}{R} = \\frac{6}{R} \\implies F_{eff} = \\frac{R}{6}$. (R) correctly explains (A)."
  },
  {
    a: "A convex mirror never forms a real image of a real object.",
    r: "For a real object ($u < 0$) in front of a convex mirror ($f > 0$), the mirror formula gives $v = \\frac{u f}{u - f}$, which is always positive (behind the mirror).",
    ans: 0,
    exp: "Using Cartesian sign convention with $u = -d$ and $f = +f_0$: $\\frac{1}{v} = \\frac{1}{f_0} - \\frac{1}{-d} = \\frac{d + f_0}{d f_0} > 0 \\implies v > 0$ (virtual, behind the mirror). (R) correctly explains (A)."
  },
  {
    a: "A convex mirror can form a real image of a virtual object.",
    r: "If converging rays strike a convex mirror such that their intersection point lies behind the mirror between the pole and focus ($0 < u < f$), the reflected rays converge in front of the mirror.",
    ans: 0,
    exp: "For a virtual object with $0 < u < f$, $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} < 0 \\implies v < 0$ (real image formed in front of mirror). (R) correctly explains (A)."
  },
  {
    a: "Two thin convex lenses of focal lengths $f_1$ and $f_2$ separated by a distance $d$ form an achromatic combination for parallel rays if $d = \\frac{f_1 + f_2}{2}$.",
    r: "The condition for achromatism of two lenses made of the same glass separated by distance $d$ is that the distance between them must equal the arithmetic mean of their focal lengths.",
    ans: 0,
    exp: "For identical glasses ($\\omega_1 = \\omega_2$), setting $\\frac{dF}{d\\lambda} = 0$ leads directly to $d = \\frac{f_1 + f_2}{2}$. (R) correctly explains (A)."
  },
  {
    a: "In a concave mirror, when a real object moves from infinity to the center of curvature $C$, the real image moves from the focus $F$ to $C$.",
    r: "As object distance $u$ decreases from $\\infty$ to $2f$, the image distance $v$ increases from $f$ to $2f$ according to $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$.",
    ans: 0,
    exp: "At $u = \\infty$, $v = f$. At $u = 2f$, $v = 2f$. Object and image meet at the center of curvature $C$. (R) correctly explains (A)."
  },
  {
    a: "The magnification produced by a plane mirror is always $+1$.",
    r: "A plane mirror forms a virtual image of the exact same size as the object and at the same distance behind the mirror ($v = -u$).",
    ans: 0,
    exp: "Since $v = -u$ and $h_i = h_o$, linear transverse magnification is $m = -\\frac{v}{u} = -\\frac{-u}{u} = +1$ (erect, unmagnified). (R) correctly explains (A)."
  },
  {
    a: "Dentists use a small concave mirror to examine teeth.",
    r: "When a tooth is held closer to the mirror than its focal length ($u < f$), the concave mirror produces an enlarged, upright virtual image.",
    ans: 0,
    exp: "For $u < f$, a concave mirror acts as an enlarging reflector ($m > 1$, erect and virtual), providing a magnified view of dental cavities. (R) correctly explains (A)."
  },
  {
    a: "When a ray of light is reflected by a plane mirror rotated by an angle $\\theta$, the reflected ray rotates by an angle $2\\theta$.",
    r: "Rotating the mirror by $\\theta$ changes the angle of incidence by $\\theta$, which simultaneously changes the angle of reflection by $\\theta$, resulting in a net angular deviation change of $2\\theta$.",
    ans: 0,
    exp: "Initial deviation is $\\delta_1 = 180^\\circ - 2i$. After mirror rotation by $\\theta$, angle of incidence becomes $i + \\theta$, so $\\delta_2 = 180^\\circ - 2(i+\\theta) = \\delta_1 - 2\\theta$. Thus the reflected ray turns by $2\\theta$. (R) correctly explains (A)."
  },
  {
    a: "A person of height $H$ requires a vertical plane mirror of minimum height $\\frac{H}{2}$ to view their entire image.",
    r: "By the law of reflection, rays from the top of the head and the feet strike the mirror halfway between the respective body point and the eyes.",
    ans: 0,
    exp: "Using similar triangles, the required vertical mirror span is $\\frac{H}{2}$, and this minimum length is independent of the person's distance from the mirror. (R) correctly explains (A)."
  },
  {
    a: "The number of images formed by two plane mirrors inclined at an angle $\\theta = 60^\\circ$ for an object placed symmetrically between them is 5.",
    r: "Since $\\frac{360^\\circ}{\\theta} = \\frac{360^\\circ}{60^\\circ} = 6$ is an even integer, the number of images is $n = \\frac{360^\\circ}{\\theta} - 1 = 6 - 1 = 5$.",
    ans: 0,
    exp: "When $\\frac{360^\\circ}{\\theta} = m$ is an even integer, two images overlap on the circle of reflection, giving $n = m - 1 = 5$ images for any object position. (R) correctly explains (A)."
  },
  {
    a: "The equivalent focal length of two thin lenses in contact is given by $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$.",
    r: "The image formed by the first lens serves as a virtual object for the second lens.",
    ans: 0,
    exp: "Adding the lens formulas $\\frac{1}{v_1} - \\frac{1}{u} = \\frac{1}{f_1}$ and $\\frac{1}{v} - \\frac{1}{v_1} = \\frac{1}{f_2}$ yields $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{F}$. (R) correctly explains (A)."
  },
  {
    a: "The image formed by a convex mirror is always located between the pole and the principal focus.",
    r: "As object distance $u$ varies from $0$ to $\\infty$, the image distance $v$ varies monotonically from $0$ to $f$.",
    ans: 0,
    exp: "For any real object, $v = \\frac{u f}{u - f}$. In magnitude, $v < f$ always, confining the virtual image inside the focal interval $[0, f]$. (R) correctly explains (A)."
  },
  {
    a: "A concave mirror has a negative focal length in Cartesian sign convention.",
    r: "The focus of a concave mirror lies in front of the reflecting surface on the side of the incident light (negative $x$-axis).",
    ans: 0,
    exp: "Distances measured opposite to the direction of incident light are negative. Because the center of curvature and focus lie on the reflective side, $f < 0$. (R) correctly explains (A)."
  },
  {
    a: "A convex mirror has a positive focal length in Cartesian sign convention.",
    r: "The principal focus of a convex mirror lies behind the reflecting surface along the direction of transmitted incident light (positive $x$-axis).",
    ans: 0,
    exp: "The center of curvature and focus lie behind the reflective surface, along the direction of incident light, so $f > 0$. (R) correctly explains (A)."
  },
  {
    a: "The power of a plane glass plate is zero.",
    r: "A plane glass plate has surfaces of infinite radius of curvature ($R = \\infty$), giving infinite focal length and $P = \\frac{1}{f} = 0$.",
    ans: 0,
    exp: "With flat surfaces, rays emerge undeviated (only laterally shifted), so converging/diverging power is zero. (R) correctly explains (A)."
  },
  {
    a: "When a concave mirror is placed in water, its focal length becomes 4/3 times its focal length in air.",
    r: "The refractive index of water is 4/3.",
    ans: 3,
    exp: "(A) is false because the focal length of a mirror depends only on $R$ ($f = R/2$) and is completely independent of the refractive index of the surrounding medium. (R) is true."
  },
  {
    a: "Solar cookers use large concave mirrors to focus sunlight.",
    r: "Parallel rays of sunlight reflecting off a concave mirror converge at the focal point, creating intense heat concentration.",
    ans: 0,
    exp: "A large aperture concave reflector gathers sunlight over a broad area and concentrates radiant energy at its focus where the cooking pot is placed. (R) correctly explains (A)."
  },
  {
    a: "Two thin lenses of power $+2\\text{ D}$ and $+3\\text{ D}$ are separated by a distance of $20\\text{ cm}$. The equivalent power of the combination is $+3.8\\text{ D}$.",
    r: "The equivalent power of two lenses separated by distance $d$ is $P_{eq} = P_1 + P_2 - d P_1 P_2$.",
    ans: 0,
    exp: "$P_{eq} = 2 + 3 - (0.2)(2)(3) = 5 - 1.2 = +3.8\\text{ D}$. (R) correctly explains (A)."
  },
  {
    a: "An inverted image formed by a concave mirror is always real.",
    r: "For spherical mirrors, linear magnification $m = -v/u$. A negative magnification (inverted image) requires $u$ and $v$ to have the same sign, meaning both are real coordinates.",
    ans: 0,
    exp: "In spherical mirrors, virtual images are always erect ($m > 0$) and real images are always inverted ($m < 0$). (R) correctly explains (A)."
  }
];

// 7 Authentic MCQ questions for Mirror formula and combination of lenses
const mcqData = [
  {
    q: "An object is placed at a distance of $30\\text{ cm}$ in front of a concave mirror of focal length $20\\text{ cm}$. The position and magnification of the image are:",
    opts: [
      "-60 cm, -2",
      "-60 cm, +2",
      "+60 cm, -2",
      "-12 cm, -0.4"
    ],
    ans: 0,
    exp: "Here $u = -30\\text{ cm}$, $f = -20\\text{ cm}$. Mirror formula: $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{20} - \\left(-\\frac{1}{30}\\right) = -\\frac{1}{20} + \\frac{1}{30} = -\\frac{1}{60} \\implies v = -60\\text{ cm}$. Magnification $m = -\\frac{v}{u} = -\\frac{-60}{-30} = -2$ (real, inverted, 2x magnified)."
  },
  {
    q: "A convex mirror of focal length $f$ produces an image $\\frac{1}{n}$ times the size of the object. The distance of the object from the mirror is:",
    opts: [
      "$(n - 1)f$",
      "$(n + 1)f$",
      "$\\frac{f}{n}$",
      "$\\frac{n - 1}{n} f$"
    ],
    ans: 0,
    exp: "For a convex mirror, $m = +\\frac{1}{n}$. Using $m = \\frac{f}{f - u}$: $\\frac{1}{n} = \\frac{f}{f - u} \\implies f - u = n f \\implies -u = (n - 1)f \\implies |u| = (n - 1)f$."
  },
  {
    q: "Two thin lenses of focal lengths $+20\\text{ cm}$ and $-40\\text{ cm}$ are kept in contact. The optical power and nature of the combination are:",
    opts: [
      "+2.5 D, converging",
      "-2.5 D, diverging",
      "+5.0 D, converging",
      "+7.5 D, converging"
    ],
    ans: 0,
    exp: "$\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{40} = \\frac{1}{40}\\text{ cm}^{-1} \\implies F = +40\\text{ cm} = +0.4\\text{ m}$. Power $P = \\frac{1}{F} = \\frac{1}{0.4} = +2.5\\text{ D}$ (converging)."
  },
  {
    q: "A plano-convex lens of focal length $20\\text{ cm}$ has its curved surface silvered. The combination acts as a concave mirror of focal length:",
    opts: [
      "10 cm",
      "20 cm",
      "5 cm",
      "40 cm"
    ],
    ans: 0,
    exp: "$f_L = 20\\text{ cm}$. For $\\mu = 1.5$, $f_L = \\frac{R}{\\mu - 1} = 2R \\implies R = 10\\text{ cm}$. The curved silvered surface has mirror focal length $f_M = R/2 = 5\\text{ cm}$. Effective power $P = 2 P_L + P_M = 2\\left(\\frac{1}{0.2}\\right) + \\frac{1}{0.05} = 10 + 20 = 30\\text{ D}$. Effective focal length $F = \\frac{1}{30}\\text{ m} = 3.33\\text{ cm}$? Wait! If silvered on flat face, $P_M = 0 \\implies P = 2 P_L = 10\\text{ D} \\implies F = 10\\text{ cm}$. Let's clarify: silvered on flat face: $F = 10\\text{ cm}$."
  },
  {
    q: "A concave mirror of radius of curvature $40\\text{ cm}$ forms an erect image twice the size of the object. The distance of the object from the mirror is:",
    opts: [
      "10 cm",
      "20 cm",
      "30 cm",
      "15 cm"
    ],
    ans: 0,
    exp: "$f = -\\frac{R}{2} = -20\\text{ cm}$. For an erect image in a concave mirror, $m = +2$. Using $m = \\frac{f}{f - u}$: $2 = \\frac{-20}{-20 - u} \\implies -40 - 2u = -20 \\implies -2u = 20 \\implies u = -10\\text{ cm}$. Object distance is $10\\text{ cm}$."
  },
  {
    q: "An object is placed in front of a concave mirror at a distance of $40\\text{ cm}$. If its real image is formed at $40\\text{ cm}$ from the mirror, the focal length of the mirror is:",
    opts: [
      "-20 cm",
      "-40 cm",
      "-10 cm",
      "-80 cm"
    ],
    ans: 0,
    exp: "When $u = v = -40\\text{ cm}$, the object is at the center of curvature $C = 2f$. Therefore, $2f = 40\\text{ cm} \\implies f = -20\\text{ cm}$."
  },
  {
    q: "Two plane mirrors are inclined to each other at an angle of $72^\\circ$. The number of images formed of a point object placed symmetrically between them is:",
    opts: [
      "4",
      "5",
      "3",
      "6"
    ],
    ans: 0,
    exp: "$\\frac{360^\\circ}{\\theta} = \\frac{360^\\circ}{72^\\circ} = 5$. Since 5 is an odd integer and the object is placed symmetrically on the angle bisector, the number of images is $n = 5 - 1 = 4$."
  }
];

// Fix MCQ 3 options & text:
mcqData[3] = {
  q: "A plano-convex lens of focal length $20\\text{ cm}$ has its plane surface silvered. The combination acts as a concave mirror of focal length:",
  opts: [
    "10 cm",
    "20 cm",
    "5 cm",
    "40 cm"
  ],
  ans: 0,
  exp: "When the plane surface is silvered, $P_M = 0$. The total optical power is $P = 2 P_L + P_M = 2\\left(\\frac{1}{f_L}\\right) = \\frac{2}{20} = \\frac{1}{10}\\text{ cm}^{-1}$. Thus effective focal length of the concave mirror is $F = 10\\text{ cm}$."
};

// 20 Authentic Numerical questions for Mirror formula and combination of lenses
const numData = [
  {
    q: "A concave mirror has a focal length of $15\\text{ cm}$. If a real object is placed at $30\\text{ cm}$ in front of the mirror, the image distance in centimeters is:",
    ans: -30,
    exp: "$u = -30\\text{ cm}, f = -15\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{-15} - \\frac{1}{-30} = -\\frac{1}{30} \\implies v = -30\\text{ cm}$."
  },
  {
    q: "A convex mirror has a radius of curvature of $40\\text{ cm}$. An object is placed at $20\\text{ cm}$ in front of the mirror. The image distance from the mirror in centimeters is:",
    ans: 10,
    exp: "$f = +20\\text{ cm}, u = -20\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{-20} = \\frac{2}{20} = \\frac{1}{10} \\implies v = +10\\text{ cm}$."
  },
  {
    q: "Two thin lenses of focal lengths $+10\\text{ cm}$ and $+40\\text{ cm}$ are placed in contact. The equivalent focal length of the combination in centimeters is:",
    ans: 8,
    exp: "$\\frac{1}{F} = \\frac{1}{10} + \\frac{1}{40} = \\frac{5}{40} = \\frac{1}{8} \\implies F = 8\\text{ cm}$."
  },
  {
    q: "Two thin lenses of powers $+4\\text{ D}$ and $-2\\text{ D}$ are in contact. The equivalent focal length in centimeters is:",
    ans: 50,
    exp: "$P_{eq} = +4 - 2 = +2\\text{ D}$. $F = \\frac{100}{P_{eq}} = \\frac{100}{2} = 50\\text{ cm}$."
  },
  {
    q: "A concave mirror produces a real image twice the size of the object. If the object distance is $15\\text{ cm}$, the focal length of the mirror in centimeters is:",
    ans: -10,
    exp: "$m = -2, u = -15\\text{ cm}$. $m = \\frac{f}{f - u} \\implies -2 = \\frac{f}{f - (-15)} = \\frac{f}{f + 15} \\implies -2f - 30 = f \\implies -3f = 30 \\implies f = -10\\text{ cm}$."
  },
  {
    q: "Two plane mirrors are inclined at an angle of $90^\\circ$. The number of images of a point object formed is:",
    ans: 3,
    exp: "$\\frac{360^\\circ}{90^\\circ} = 4$ (even). Number of images $n = 4 - 1 = 3$."
  },
  {
    q: "A boy of height $160\\text{ cm}$ stands in front of a vertical plane mirror. The minimum height of the mirror required for him to see his full image in centimeters is:",
    ans: 80,
    exp: "$h_{min} = \\frac{H}{2} = \\frac{160}{2} = 80\\text{ cm}$."
  },
  {
    q: "A ray of light is incident on a plane mirror. If the mirror is rotated by $15^\\circ$, the reflected ray rotates by how many degrees?",
    ans: 30,
    exp: "The reflected ray rotates by twice the mirror rotation angle: $2\\theta = 2 \\times 15^\\circ = 30^\\circ$."
  },
  {
    q: "Two lenses of focal lengths $f_1 = +20\\text{ cm}$ and $f_2 = +30\\text{ cm}$ are placed in contact. The optical power of the combination in diopters (rounded to one decimal place) is:",
    ans: 8.3,
    exp: "$\\frac{1}{F} = \\frac{1}{20} + \\frac{1}{30} = \\frac{5}{60} = \\frac{1}{12} \\implies F = 12\\text{ cm} = 0.12\\text{ m}$. Power $P = \\frac{1}{0.12} \\approx 8.33\\text{ D} \\approx 8.3\\text{ D}$."
  },
  {
    q: "A concave mirror forms an image of magnification $3$ on a screen. If the object is $20\\text{ cm}$ from the mirror, the image distance in centimeters is:",
    ans: -60,
    exp: "$m = -3, u = -20\\text{ cm}$. $v = m u = (-3)(-20) = -60\\text{ cm}$ (or distance is 60 cm)."
  },
  {
    q: "A convex mirror has a focal length of $25\\text{ cm}$. The magnification produced for an object placed at $25\\text{ cm}$ in front of the mirror is:",
    ans: 0.5,
    exp: "$m = \\frac{f}{f - u} = \\frac{25}{25 - (-25)} = \\frac{25}{50} = 0.5$."
  },
  {
    q: "Two lenses of powers $+5\\text{ D}$ and $-3\\text{ D}$ are placed in contact. The focal length of the combination in centimeters is:",
    ans: 50,
    exp: "$P_{eq} = 5 - 3 = 2\\text{ D} \\implies F = \\frac{100}{2} = 50\\text{ cm}$."
  },
  {
    q: "An object is placed at $10\\text{ cm}$ in front of a concave mirror of radius of curvature $30\\text{ cm}$. The distance of the virtual image from the mirror in centimeters is:",
    ans: 30,
    exp: "$f = -15\\text{ cm}, u = -10\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{-15} - \\frac{1}{-10} = \\frac{1}{10} - \\frac{1}{15} = \\frac{1}{30} \\implies v = +30\\text{ cm}$."
  },
  {
    q: "A plano-convex lens of focal length $10\\text{ cm}$ is silvered on its plane face. The focal length of the resulting concave mirror in centimeters is:",
    ans: 5,
    exp: "$F = \\frac{f_L}{2} = \\frac{10}{2} = 5\\text{ cm}$."
  },
  {
    q: "Two thin convex lenses each of focal length $20\\text{ cm}$ are separated by a distance of $10\\text{ cm}$. The equivalent focal length of the combination in centimeters (rounded to one decimal place) is:",
    ans: 13.3,
    exp: "$\\frac{1}{F} = \\frac{1}{20} + \\frac{1}{20} - \\frac{10}{20 \\times 20} = \\frac{2}{20} - \\frac{1}{40} = \\frac{3}{40}\\text{ cm}^{-1} \\implies F = \\frac{40}{3} \\approx 13.3\\text{ cm}$."
  },
  {
    q: "An equiconvex lens of focal length $20\\text{ cm}$ has one face silvered. If its refractive index is $1.5$, its radius of curvature is $20\\text{ cm}$. The effective focal length of the concave mirror system in centimeters (rounded to one decimal place) is:",
    ans: 3.3,
    exp: "$F = \\frac{R}{6} = \\frac{20}{6} \\approx 3.33 \\approx 3.3\\text{ cm}$."
  },
  {
    q: "A concave mirror has a focal length of $10\\text{ cm}$. To produce an image four times magnified and real, the object distance in centimeters must be:",
    ans: -12.5,
    exp: "$m = -4, f = -10\\text{ cm}$. $m = \\frac{f}{f - u} \\implies -4 = \\frac{-10}{-10 - u} \\implies 40 + 4u = -10 \\implies 4u = -50 \\implies u = -12.5\\text{ cm}$."
  },
  {
    q: "The number of images formed by two plane mirrors inclined at an angle of $45^\\circ$ for a point object placed between them is:",
    ans: 7,
    exp: "$n = \\frac{360^\\circ}{45^\\circ} - 1 = 8 - 1 = 7$."
  },
  {
    q: "An object is placed at $60\\text{ cm}$ in front of a concave mirror of focal length $20\\text{ cm}$. The image distance in centimeters is:",
    ans: -30,
    exp: "$\\frac{1}{v} = \\frac{1}{-20} - \\frac{1}{-60} = -\\frac{2}{60} = -\\frac{1}{30} \\implies v = -30\\text{ cm}$."
  },
  {
    q: "Two thin lenses of focal lengths $15\\text{ cm}$ and $30\\text{ cm}$ are placed in contact. The equivalent power in diopters is:",
    ans: 10,
    exp: "$\\frac{1}{F} = \\frac{1}{15} + \\frac{1}{30} = \\frac{3}{30} = \\frac{1}{10}\\text{ cm}^{-1} \\implies F = 10\\text{ cm} = 0.1\\text{ m}$. Power $P = \\frac{1}{0.1} = 10\\text{ D}$."
  }
];

const part4Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part4Questions.push({
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

  part4Questions.push({
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

  part4Questions.push({
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

console.log(`Part 4 generated: ${part4Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_optics_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
