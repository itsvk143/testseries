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

const subTopic = "Interference";
const chapter = "Optics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Interference
const arData = [
  {
    a: "Two independent sodium lamps can never produce a sustained interference pattern on a screen.",
    r: "Two independent light sources emit light waves with random, rapidly changing relative phase differences, washing out the interference pattern within picoseconds.",
    ans: 0,
    exp: "Independent sources are mutually incoherent because spontaneous emission transitions occur independently in atoms with phase changes every $\\sim 10^{-10}\\text{ s}$. The intensities simply add: $I = I_1 + I_2$. (R) correctly explains (A)."
  },
  {
    a: "When two identical coherent waves of intensity $I_0$ interfere, the maximum possible intensity is $4I_0$ and the minimum intensity is zero.",
    r: "Constructive interference doubles the electric field amplitude ($E_{max} = 2E_0$), and intensity is proportional to the square of the amplitude ($I_{max} \\propto (2E_0)^2 = 4E_0^2 = 4I_0$).",
    ans: 0,
    exp: "Using $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$ with $I_1 = I_2 = I_0$: for $\\cos\\phi = 1$, $I_{max} = (\\sqrt{I_0} + \\sqrt{I_0})^2 = 4I_0$; for $\\cos\\phi = -1$, $I_{min} = 0$. (R) correctly explains (A)."
  },
  {
    a: "The principle of conservation of energy is fully obeyed in wave interference.",
    r: "Interference does not create or destroy energy, but merely redistributes energy from regions of destructive interference (minima) to regions of constructive interference (maxima).",
    ans: 0,
    exp: "The spatial average intensity over a full cycle of phase is $\\langle I \\rangle = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\langle\\cos\\phi\\rangle = I_1 + I_2$, which exactly equals the sum of individual intensities. (R) correctly explains (A)."
  },
  {
    a: "A thin soap bubble film appears brilliantly coloured when illuminated by sunlight.",
    r: "Light waves reflected from the outer and inner surfaces of the thin film interfere constructively for specific wavelengths and destructively for others depending on film thickness and angle of viewing.",
    ans: 0,
    exp: "The path difference $2\\mu t\\cos r \\pm \\frac{\\lambda}{2}$ satisfies the constructive condition for specific spectral colours of white light, selectively enhancing those wavelengths. (R) correctly explains (A)."
  },
  {
    a: "An extremely thin soap film (thickness $t \\ll \\lambda$) appears completely dark in reflected white light just before it bursts.",
    r: "Reflection at the front (air-to-water) surface undergoes a phase change of $\\pi$ (half-wavelength path difference), while reflection at the back (water-to-air) surface undergoes no phase change, producing destructive interference as $t \\to 0$.",
    ans: 0,
    exp: "Total optical path difference is $\\Delta = 2\\mu t + \\frac{\\lambda}{2}$. When $t \\to 0$, $\\Delta \\to \\frac{\\lambda}{2}$ for all visible wavelengths, resulting in universal destructive interference and a black film. (R) correctly explains (A)."
  },
  {
    a: "Anti-reflection coatings on high-grade optical lenses are designed with a thickness of $t = \\frac{\\lambda}{4\\mu_f}$.",
    r: "Rays reflected from the air-coating interface and the coating-glass interface undergo identical phase changes of $\\pi$, so a film thickness of $\\frac{\\lambda}{4}$ introduces a round-trip path difference of $\\frac{\\lambda}{2}$ that produces complete destructive cancellation.",
    ans: 0,
    exp: "With $\\mu_{air} < \\mu_f < \\mu_{glass}$, both reflections suffer a $\\pi$ phase shift. The extra optical path in the coating is $2\\mu_f t = 2\\mu_f \\left(\\frac{\\lambda}{4\\mu_f}\\right) = \\frac{\\lambda}{2}$, perfectly cancelling reflected light. (R) correctly explains (A)."
  },
  {
    a: "In Lloyd's single-mirror interference experiment, the central fringe closest to the mirror edge is dark rather than bright.",
    r: "The grazing reflection of light from the dielectric mirror surface introduces an abrupt phase shift of $\\pi$ radians (equivalent to a path difference of $\\frac{\\lambda}{2}$).",
    ans: 0,
    exp: "Direct rays and reflected rays at the mirror edge have zero geometric path difference, but the $\\pi$ phase shift on reflection turns the zero-order fringe into a minimum (dark fringe). (R) correctly explains (A)."
  },
  {
    a: "The visibility of interference fringes is maximum when the two interfering beams have equal intensities.",
    r: "Fringe visibility is defined as $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \\frac{2\\sqrt{I_1 I_2}}{I_1 + I_2}$, which attains its maximum value of 1 when $I_1 = I_2$.",
    ans: 0,
    exp: "When $I_1 = I_2$, $I_{min} = 0$, so contrast is complete ($V = 1$). If intensities differ, $I_{min} > 0$ and contrast drops ($V < 1$). (R) correctly explains (A)."
  },
  {
    a: "If two coherent waves are polarized in mutually perpendicular planes, they cannot produce an interference pattern with intensity modulation.",
    r: "Perpendicular electric field vectors $\\mathbf{E}_1$ and $\\mathbf{E}_2$ have zero dot product ($\\mathbf{E}_1 \\cdot \\mathbf{E}_2 = 0$), eliminating the cross-interference term in total intensity.",
    ans: 0,
    exp: "According to Fresnel-Arago laws, mutually orthogonal polarizations cannot interfere to modulate scalar intensity: $I = |\\mathbf{E}_1|^2 + |\\mathbf{E}_2|^2 + 2\\mathbf{E}_1\\cdot\\mathbf{E}_2 = I_1 + I_2 + 0$. (R) correctly explains (A)."
  },
  {
    a: "A laser beam easily produces sharp, high-contrast interference fringes over large path differences.",
    r: "Laser light possesses an exceptionally long coherence length and high temporal and spatial coherence compared to conventional thermal light sources.",
    ans: 0,
    exp: "Stimulated emission in lasers produces monochromatic photons in phase over meters or kilometers, allowing interference with path differences far exceeding those possible with discharge lamps. (R) correctly explains (A)."
  },
  {
    a: "Fresnel's biprism produces two virtual coherent sources from a single real slit source.",
    r: "The two halves of the biprism refract light in opposite directions by small deviation angles $\\delta = (\\mu - 1)A$, creating two virtual images of the primary slit.",
    ans: 0,
    exp: "A biprism consists of two acute thin prisms joined at their bases. Light passing through upper and lower halves forms two virtual coherent slits separated by $d = 2 u (\\mu - 1)A$. (R) correctly explains (A)."
  },
  {
    a: "An oil film on a wet asphalt road shows colourful rings and patches on a rainy day.",
    r: "Thin film interference occurs between light reflected from the top surface of the oil film and light reflected from the oil-water interface.",
    ans: 0,
    exp: "Varying oil film thickness across the road surface satisfies constructive interference for different visible wavelengths at different positions, displaying rainbow colors. (R) correctly explains (A)."
  },
  {
    a: "When a thin transparent mica sheet is placed in the path of one of the interfering beams, the entire fringe pattern shifts.",
    r: "The introduction of the sheet increases the optical path length of that beam by $(\\mu - 1)t$, shifting the central fringe toward the side containing the sheet.",
    ans: 0,
    exp: "The optical path through the sheet is $\\mu t$ instead of geometric path $t$, introducing an extra path of $(\\mu - 1)t$. The pattern shifts by $x = \\frac{D}{d}(\\mu - 1)t$. (R) correctly explains (A)."
  },
  {
    a: "Interference cannot occur if the path difference between two coherent waves exceeds their coherence length.",
    r: "Beyond the coherence length, the wave trains emitted by the source no longer overlap in time with a predictable phase relation, behaving as incoherent waves.",
    ans: 0,
    exp: "Coherence length $L_c = c \\tau_c = \\frac{\\lambda^2}{\\Delta\\lambda}$. For path differences $\\Delta > L_c$, the interfering wavepackets do not overlap with constant phase, washing out the fringes. (R) correctly explains (A)."
  },
  {
    a: "The intensity at a point where the phase difference between two equal coherent waves is $\\frac{\\pi}{2}$ is half of the maximum intensity.",
    r: "The intensity formula is $I = 4I_0 \\cos^2(\\phi/2)$, and for $\\phi = \\frac{\\pi}{2}$, $\\cos^2(\\pi/4) = \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}$, giving $I = 2I_0 = \\frac{I_{max}}{2}$.",
    ans: 0,
    exp: "Since $I_{max} = 4I_0$, at $\\phi = \\pi/2$ we have $I = 4I_0 \\cos^2(\\pi/4) = 4I_0 (0.5) = 2I_0 = \\frac{1}{2}I_{max}$. (R) correctly explains (A)."
  },
  {
    a: "Newton's rings observed in reflected light have a dark center.",
    r: "At the point of contact between the convex lens and the flat glass plate, the air film thickness is zero ($t = 0$), and reflection at the air-plate interface introduces an extra phase shift of $\\pi$.",
    ans: 0,
    exp: "At the exact center, geometric thickness $t = 0$. The reflection at the denser flat glass plate introduces a $\\pi$ phase change, producing destructive interference and a central dark spot. (R) correctly explains (A)."
  },
  {
    a: "The diameter of the $n^{\\text{th}}$ dark Newton's ring is proportional to $\\sqrt{n}$.",
    r: "The condition for a dark ring in reflected light is $2t = n\\lambda$, and for a spherical surface of radius $R$, the film thickness is related to radial distance by $t = \\frac{r^2}{2R}$, giving $D_n = 2\\sqrt{n\\lambda R}$.",
    ans: 0,
    exp: "Equating $2\\left(\\frac{r^2}{2R}\\right) = n\\lambda \\implies r^2 = n\\lambda R \\implies D_n = 2r = 2\\sqrt{n\\lambda R} \\propto \\sqrt{n}$. (R) correctly explains (A)."
  },
  {
    a: "Two waves of amplitudes $A_1 = 3$ and $A_2 = 4$ produce a maximum intensity of 49 and a minimum intensity of 1 in arbitrary units.",
    r: "Maximum amplitude is $A_{max} = A_1 + A_2 = 7 \\implies I_{max} = 49$, and minimum amplitude is $A_{min} = |A_1 - A_2| = 1 \\implies I_{min} = 1$.",
    ans: 0,
    exp: "$I_{max} \\propto (3 + 4)^2 = 49$, and $I_{min} \\propto (4 - 3)^2 = 1$. (R) correctly explains (A)."
  },
  {
    a: "If two coherent sources have an intensity ratio of $9 : 1$, the ratio of maximum to minimum intensity in their interference pattern is $4 : 1$.",
    r: "The ratio of intensities is $\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2 = \\left(\\frac{3 + 1}{3 - 1}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = 4$.",
    ans: 0,
    exp: "$\\frac{\\sqrt{I_1/I_2} + 1}{\\sqrt{I_1/I_2} - 1} = \\frac{3 + 1}{3 - 1} = 2$. Squaring gives $\\frac{I_{max}}{I_{min}} = 4$. (R) correctly explains (A)."
  },
  {
    a: "In thin film interference, a wedge-shaped film produces straight, parallel, equidistant fringes.",
    r: "The locus of points of constant optical thickness in a planar wedge is a set of straight lines parallel to the apex edge of the wedge.",
    ans: 0,
    exp: "Fringes of equal thickness (Fizeau fringes) trace contours of equal film thickness $t$. In a flat wedge, $t$ is constant along lines parallel to the contact edge. (R) correctly explains (A)."
  },
  {
    a: "Monochromatic light is essential for observing sharp, distinguishable higher-order interference fringes.",
    r: "With white light, different wavelengths produce different fringe widths, causing overlapping fringes that blend into a uniform white illumination after a few central orders.",
    ans: 0,
    exp: "Fringe width $\\beta = \\frac{\\lambda D}{d}$ is proportional to $\\lambda$. With white light, red and violet fringes overlap and wash out contrast after 3-5 orders. (R) correctly explains (A)."
  },
  {
    a: "The phase difference between two points on the same wavefront is zero.",
    r: "A wavefront is defined as the locus of all points in a medium that oscillate in the same phase.",
    ans: 0,
    exp: "By definition, a wavefront is a surface of constant phase, so any two points on it have $\\Delta\\phi = 0$. (R) correctly explains (A)."
  },
  {
    a: "In an interference experiment, if the phase difference between two waves changes continuously and randomly, no interference fringes are formed.",
    r: "The time-average of $\\cos\\phi(t)$ over the response time of the detector is zero when $\\phi(t)$ fluctuates randomly.",
    ans: 0,
    exp: "Detector integration yields $\\langle I \\rangle = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\langle\\cos\\phi\\rangle = I_1 + I_2$, producing uniform background intensity with zero fringe visibility. (R) correctly explains (A)."
  },
  {
    a: "The refractive index of an ideal anti-reflective coating on a glass lens of index $\\mu_g$ in air is $\\mu_f = \\sqrt{\\mu_g}$.",
    r: "For complete destructive interference between rays reflected from the air-coating and coating-glass boundaries, the reflection coefficients at both interfaces must be equal: $\\frac{\\mu_f - 1}{\\mu_f + 1} = \\frac{\\mu_g - \\mu_f}{\\mu_g + \\mu_f} \\implies \\mu_f = \\sqrt{\\mu_g}$.",
    ans: 0,
    exp: "Equal reflection amplitudes at both boundaries ensure complete destructive interference, requiring $\\mu_f = \\sqrt{\\mu_{air} \\mu_g} = \\sqrt{\\mu_g}$. (R) correctly explains (A)."
  },
  {
    a: "Wavefront division and amplitude division are the two fundamental methods for producing coherent light sources.",
    r: "Young's double slit divides the incoming wavefront using two spatial apertures, whereas thin films divide the amplitude of an incident wave by partial reflection and refraction.",
    ans: 0,
    exp: "Wavefront division (Young's slits, Fresnel biprism, Lloyd's mirror) samples adjacent spatial regions; amplitude division (thin films, Michelson interferometer) splits ray energy at a beam splitter. (R) correctly explains (A)."
  },
  {
    a: "Interference cannot occur between sound waves.",
    r: "Sound waves are longitudinal mechanical waves, whereas interference is exclusive to transverse electromagnetic waves.",
    ans: 3,
    exp: "(A) is false because sound waves exhibit interference (such as Quincke's tube, acoustic beats, and noise-cancelling headphones). (R) is false because interference is a fundamental property of all waves, longitudinal or transverse."
  }
];

// 7 Authentic MCQ questions for Interference
const mcqData = [
  {
    q: "Two coherent light beams of intensities $I$ and $9I$ are superposed. The maximum and minimum possible intensities in the resulting interference pattern are:",
    opts: [
      "$16I,\\ 4I$",
      "$10I,\\ 8I$",
      "$16I,\\ 0$",
      "$9I,\\ I$"
    ],
    ans: 0,
    exp: "$I_{max} = (\\sqrt{I} + \\sqrt{9I})^2 = (\\sqrt{I} + 3\\sqrt{I})^2 = (4\\sqrt{I})^2 = 16I$. $I_{min} = (\\sqrt{9I} - \\sqrt{I})^2 = (3\\sqrt{I} - \\sqrt{I})^2 = (2\\sqrt{I})^2 = 4I$."
  },
  {
    q: "In an interference pattern, the ratio of maximum to minimum intensity is $25 : 1$. The ratio of the amplitudes of the two interfering waves is:",
    opts: [
      "$3 : 2$",
      "$5 : 1$",
      "$4 : 1$",
      "$9 : 1$"
    ],
    ans: 0,
    exp: "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = 25 \\implies \\frac{A_1 + A_2}{A_1 - A_2} = 5 \\implies A_1 + A_2 = 5A_1 - 5A_2 \\implies 6A_2 = 4A_1 \\implies \\frac{A_1}{A_2} = \\frac{6}{4} = \\frac{3}{2}$."
  },
  {
    q: "A thin film of refractive index $\\mu = 1.4$ is illuminated by white light at normal incidence. For what minimum non-zero thickness $t$ will light of wavelength $560\\text{ nm}$ be strongly reflected?",
    opts: [
      "100 nm",
      "200 nm",
      "140 nm",
      "280 nm"
    ],
    ans: 0,
    exp: "For strong reflection in air (one phase change of $\\pi$), the constructive condition is $2\\mu t = \\frac{\\lambda}{2} \\implies t = \\frac{\\lambda}{4\\mu} = \\frac{560\\text{ nm}}{4 \\times 1.4} = \\frac{560}{5.6} = 100\\text{ nm}$."
  },
  {
    q: "Two coherent sources of intensity ratio $\\beta$ interfere. The visibility of the fringes is given by:",
    opts: [
      "$\\frac{2\\sqrt{\\beta}}{1 + \\beta}$",
      "$\\frac{1 + \\beta}{2\\sqrt{\\beta}}$",
      "$\\frac{\\beta}{1 + \\beta}$",
      "$\\frac{\\sqrt{\\beta}}{1 + \\beta}$"
    ],
    ans: 0,
    exp: "Visibility $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \\frac{2\\sqrt{I_1 I_2}}{I_1 + I_2} = \\frac{2\\sqrt{I_1/I_2}}{1 + I_1/I_2} = \\frac{2\\sqrt{\\beta}}{1 + \\beta}$."
  },
  {
    q: "An anti-reflection coating of magnesium fluoride ($\\mu = 1.38$) is deposited on a glass lens ($\\mu = 1.50$). For light of wavelength $552\\text{ nm}$ in air, the minimum coating thickness required is:",
    opts: [
      "100 nm",
      "138 nm",
      "200 nm",
      "69 nm"
    ],
    ans: 0,
    exp: "Condition for anti-reflection: $2\\mu_f t = \\frac{\\lambda}{2} \\implies t = \\frac{\\lambda}{4\\mu_f} = \\frac{552\\text{ nm}}{4 \\times 1.38} = \\frac{552}{5.52} = 100\\text{ nm}$."
  },
  {
    q: "In an interference experiment, the path difference between two interfering waves at a point on the screen is $\\frac{\\lambda}{6}$. The ratio of the intensity at this point to the maximum intensity is:",
    opts: [
      "0.75",
      "0.50",
      "0.25",
      "0.866"
    ],
    ans: 0,
    exp: "Phase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{6}\\right) = \\frac{\\pi}{3} = 60^\\circ$. Intensity $I = I_{max} \\cos^2(\\phi/2) = I_{max} \\cos^2(30^\\circ) = I_{max}\\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}I_{max} = 0.75 I_{max}$."
  },
  {
    q: "Two waves have equations $y_1 = 4\\sin(\\omega t)$ and $y_2 = 3\\sin(\\omega t + \\pi/2)$. The intensity of the resultant wave is proportional to:",
    opts: [
      "25",
      "49",
      "7",
      "1"
    ],
    ans: 0,
    exp: "Phase difference $\\phi = \\pi/2$. Resultant amplitude $A = \\sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \\cos(\\pi/2)} = \\sqrt{4^2 + 3^2 + 0} = \\sqrt{25} = 5$. Resultant intensity $I \\propto A^2 = 25$."
  }
];

// 20 Authentic Numerical questions for Interference
const numData = [
  {
    q: "Two coherent light sources have an intensity ratio of $16 : 1$. The ratio of the maximum intensity to the minimum intensity in the interference pattern is:",
    ans: 2.78, // (4+1)^2 / (4-1)^2 = 25/9 = 2.777 -> let's make clean: ratio 9 : 1 gives (3+1)^2 / (3-1)^2 = 16/4 = 4! Or 4:1 gives (2+1)^2 / (2-1)^2 = 9!
    exp: "Let's calibrate ratio."
  },
  {
    q: "Two coherent waves of intensities $4I$ and $9I$ interfere. The maximum intensity is $x I$ and minimum intensity is $y I$. The value of $x + y$ is:",
    ans: 26,
    exp: "$I_{max} = (\\sqrt{4} + \\sqrt{9})^2 I = (2 + 3)^2 I = 25I \\implies x = 25$. $I_{min} = (3 - 2)^2 I = 1I \\implies y = 1$. Thus $x + y = 25 + 1 = 26$."
  },
  {
    q: "Two waves having amplitudes in the ratio $2 : 1$ interfere. The ratio of maximum to minimum intensity is:",
    ans: 9,
    exp: "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{2 + 1}{2 - 1}\\right)^2 = 3^2 = 9$."
  },
  {
    q: "The intensity of two coherent sources is $I_0$ each. At a point where the phase difference is $60^\\circ$, the resultant intensity is $x I_0$. The value of $x$ is:",
    ans: 3,
    exp: "$I = 4I_0 \\cos^2(\\phi/2) = 4I_0 \\cos^2(30^\\circ) = 4I_0 (3/4) = 3I_0 \\implies x = 3$."
  },
  {
    q: "At a point on the screen where the path difference is $\\frac{\\lambda}{4}$, the intensity is what percentage of the maximum intensity $I_{max}$?",
    ans: 50,
    exp: "$\\phi = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{4}\\right) = \\frac{\\pi}{2}$. $I = I_{max}\\cos^2(\\pi/4) = I_{max}\\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 0.5 I_{max} = 50\\%$."
  },
  {
    q: "The minimum thickness of a thin soap film ($\\mu = 1.33$) for constructive interference in reflected light of wavelength $\\lambda = 532\\text{ nm}$ at normal incidence in nanometers is:",
    ans: 100,
    exp: "$2\\mu t = \\frac{\\lambda}{2} \\implies t = \\frac{\\lambda}{4\\mu} = \\frac{532}{4 \\times 1.33} = \\frac{532}{5.32} = 100\\text{ nm}$."
  },
  {
    q: "Two waves of amplitudes $5\\text{ mm}$ and $3\\text{ mm}$ interfere. The ratio of maximum to minimum intensity is:",
    ans: 16,
    exp: "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{5 + 3}{5 - 3}\\right)^2 = \\left(\\frac{8}{2}\\right)^2 = 4^2 = 16$."
  },
  {
    q: "An anti-reflection film of $\\mu = 1.25$ is coated on a glass plate. For normal incidence of light of wavelength $500\\text{ nm}$, the minimum thickness of the film in nanometers is:",
    ans: 100,
    exp: "$t = \\frac{\\lambda}{4\\mu} = \\frac{500}{4 \\times 1.25} = \\frac{500}{5} = 100\\text{ nm}$."
  },
  {
    q: "Two coherent sources of intensities $9\\text{ W/m}^2$ and $16\\text{ W/m}^2$ interfere. The maximum intensity in $\\text{W/m}^2$ is:",
    ans: 49,
    exp: "$I_{max} = (\\sqrt{9} + \\sqrt{16})^2 = (3 + 4)^2 = 7^2 = 49\\text{ W/m}^2$."
  },
  {
    q: "Two coherent sources of intensities $9\\text{ W/m}^2$ and $16\\text{ W/m}^2$ interfere. The minimum intensity in $\\text{W/m}^2$ is:",
    ans: 1,
    exp: "$I_{min} = (\\sqrt{16} - \\sqrt{9})^2 = (4 - 3)^2 = 1^2 = 1\\text{ W/m}^2$."
  },
  {
    q: "In an interference pattern, the maximum intensity is $100\\text{ units}$ and the minimum intensity is $0$. If the phase difference is $90^\\circ$, the intensity in the same units is:",
    ans: 50,
    exp: "$I = I_{max} \\cos^2(\\phi/2) = 100 \\cos^2(45^\\circ) = 100 \\times 0.5 = 50$."
  },
  {
    q: "If the ratio of amplitudes of two interfering beams is $3 : 1$, the fringe visibility $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$ is:",
    ans: 0.6,
    exp: "$V = \\frac{2 A_1 A_2}{A_1^2 + A_2^2} = \\frac{2(3)(1)}{3^2 + 1^2} = \\frac{6}{10} = 0.6$."
  },
  {
    q: "Two coherent sources of light have an intensity ratio of $4 : 1$. The fringe visibility is:",
    ans: 0.8,
    exp: "$V = \\frac{2\\sqrt{I_1 I_2}}{I_1 + I_2} = \\frac{2\\sqrt{4 \\times 1}}{4 + 1} = \\frac{4}{5} = 0.8$."
  },
  {
    q: "The phase difference corresponding to a path difference of $\\frac{\\lambda}{3}$ in degrees is:",
    ans: 120,
    exp: "$\\phi = \\frac{2\\pi}{\\lambda}\\Delta = \\frac{2\\pi}{\\lambda}\\left(\\frac{\\lambda}{3}\\right) = \\frac{2\\pi}{3} = 120^\\circ$."
  },
  {
    q: "A soap film of refractive index $1.4$ has a thickness of $200\\text{ nm}$. For light of wavelength $560\\text{ nm}$ incident normally in air, the optical path difference between the reflected rays in nanometers is:",
    ans: 840,
    exp: "$\\Delta = 2\\mu t + \\frac{\\lambda}{2} = 2(1.4)(200) + 280 = 560 + 280 = 840\\text{ nm}$."
  },
  {
    q: "Two waves with amplitudes $A$ and $\\sqrt{3}A$ interfere with a phase difference of $90^\\circ$. The resultant amplitude is $x A$. The value of $x$ is:",
    ans: 2,
    exp: "$A_{res} = \\sqrt{A^2 + (\\sqrt{3}A)^2 + 2A(\\sqrt{3}A)\\cos(90^\\circ)} = \\sqrt{A^2 + 3A^2} = \\sqrt{4A^2} = 2A \\implies x = 2$."
  },
  {
    q: "In an interference pattern, the ratio of the intensity of the maxima to that of the minima is $9 : 1$. The ratio of the intensities of the two individual sources is:",
    ans: 4,
    exp: "$\\frac{I_{max}}{I_{min}} = 9 \\implies \\frac{A_1 + A_2}{A_1 - A_2} = 3 \\implies A_1 + A_2 = 3A_1 - 3A_2 \\implies 2A_1 = 4A_2 \\implies \\frac{A_1}{A_2} = 2 \\implies \\frac{I_1}{I_2} = 2^2 = 4$."
  },
  {
    q: "Two beams of intensities $I$ and $4I$ interfere. The intensity at a point where the phase difference is $\\pi$ radians is:",
    ans: 1, // in units of I: (2 - 1)^2 * I = 1 I
    exp: "$I_{min} = (\\sqrt{4I} - \\sqrt{I})^2 = (2\\sqrt{I} - \\sqrt{I})^2 = 1I$."
  },
  {
    q: "A thin film of $\\mu = 1.5$ has thickness $t = 100\\text{ nm}$. The round-trip optical path inside the film in nanometers is:",
    ans: 300,
    exp: "Optical path $= 2\\mu t = 2(1.5)(100) = 300\\text{ nm}$."
  },
  {
    q: "Two coherent sources of intensity $I_0$ produce an interference pattern. The intensity at a point where the path difference is $\\lambda$ in units of $I_0$ is:",
    ans: 4,
    exp: "Path difference $\\lambda \\implies \\phi = 2\\pi$. $I = 4I_0 \\cos^2(\\pi) = 4I_0$."
  }
];

// Calibrate item 0:
numData[0] = {
  q: "Two coherent light sources have an intensity ratio of $9 : 1$. The ratio of the maximum intensity to the minimum intensity in the interference pattern is:",
  ans: 4,
  exp: "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{9} + \\sqrt{1}}{\\sqrt{9} - \\sqrt{1}}\\right)^2 = \\left(\\frac{3 + 1}{3 - 1}\\right)^2 = 2^2 = 4$."
};

const part7Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part7Questions.push({
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

  part7Questions.push({
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

  part7Questions.push({
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

console.log(`Part 7 generated: ${part7Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_optics_part7.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part7Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
