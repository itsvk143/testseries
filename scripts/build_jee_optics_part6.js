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

const subTopic = "Diffraction";
const chapter = "Optics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Diffraction
const arData = [
  {
    a: "Diffraction of sound waves is much more commonly noticed in everyday life than diffraction of light waves.",
    r: "The wavelength of audible sound ($0.02\\text{ m}$ to $17\\text{ m}$) is comparable to the size of everyday obstacles like doors and windows, whereas visible light wavelengths ($400-700\\text{ nm}$) are negligibly small compared to macroscopic objects.",
    ans: 0,
    exp: "Diffraction is pronounced only when the obstacle or aperture size is comparable to the wavelength of the wave ($a \\sim \\lambda$). Since sound waves have macroscopic wavelengths, they bend easily around corners. (R) correctly explains (A)."
  },
  {
    a: "The central maximum in a single-slit Fraunhofer diffraction pattern is twice as wide as any of the secondary maxima.",
    r: "The first minima on either side of the center occur at angles $\\theta = \\pm \\frac{\\lambda}{a}$, making the angular width of the central maximum $\\frac{2\\lambda}{a}$, while secondary maxima have angular width $\\frac{\\lambda}{a}$.",
    ans: 0,
    exp: "Minima occur at $a\\sin\\theta = m\\lambda$. The central maximum extends between $m = -1$ and $m = +1$, spanning $\\Delta\\theta_0 = \\frac{2\\lambda}{a}$. Consecutive secondary minima are separated by $\\Delta\\theta = \\frac{\\lambda}{a}$. (R) correctly explains (A)."
  },
  {
    a: "The intensity of secondary maxima in single-slit diffraction decreases rapidly with increasing order.",
    r: "At the secondary maxima, secondary wavelets from only an odd fractional part of the wavefront (such as $1/3, 1/5, 1/7$) interfere constructively, while the remaining parts cancel each other out.",
    ans: 0,
    exp: "For the first secondary maximum, the slit is divided into 3 equal zones; wavelets from two zones cancel out, leaving only $1/3$ of the amplitude, giving intensity $\\approx I_0/22$. For the second, only $1/5$ remains, giving $\\approx I_0/61$. (R) correctly explains (A)."
  },
  {
    a: "Ray optics is a valid limiting case of wave optics over distances much smaller than the Fresnel distance.",
    r: "The Fresnel distance $Z_F = \\frac{a^2}{\\lambda}$ defines the propagation distance over which the spreading of a beam due to diffraction equals the size of the aperture $a$.",
    ans: 0,
    exp: "Diffraction divergence angle is $\\theta \\sim \\frac{\\lambda}{a}$. The diffraction spread over distance $z$ is $z\\theta = \\frac{z\\lambda}{a}$. Setting $\\frac{z\\lambda}{a} = a$ yields the Fresnel distance $Z_F = \\frac{a^2}{\\lambda}$. For $z \\ll Z_F$, diffraction spreading is negligible and ray optics holds. (R) correctly explains (A)."
  },
  {
    a: "If the width of a single slit is doubled, the linear width of the central diffraction maximum is halved.",
    r: "The linear width of the central maximum on a screen at distance $D$ is $\\beta_0 = \\frac{2\\lambda D}{a}$, which is inversely proportional to the slit width $a$.",
    ans: 0,
    exp: "Since $\\beta_0 = \\frac{2\\lambda D}{a}$, doubling $a$ halves the angular and linear spread of the central maximum. (R) correctly explains (A)."
  },
  {
    a: "According to Rayleigh's criterion, two point sources are just resolved by a circular aperture when the central maximum of one airy diffraction pattern falls on the first minimum of the other.",
    r: "The angular separation between the two point sources must be at least $\\theta = \\frac{1.22\\lambda}{a}$, where $a$ is the diameter of the circular aperture.",
    ans: 0,
    exp: "This is the precise statement of Lord Rayleigh's criterion for circular apertures: the dip between the two peaks drops to about $81\\%$ of the maximum, permitting visual resolution. (R) correctly explains (A)."
  },
  {
    a: "In Fraunhofer diffraction by a single slit, the central point on the screen is always a position of maximum intensity.",
    r: "Secondary wavelets arriving at the central point from all points of the slit have zero path difference and interfere in phase.",
    ans: 0,
    exp: "Along the normal to the slit ($\\theta = 0$), the path difference for wavelets from all parts of the wavefront is zero, producing constructive interference and a bright central peak. (R) correctly explains (A)."
  },
  {
    a: "If a single slit diffraction experiment is immersed in water, the width of the central maximum decreases.",
    r: "The wavelength of light in water decreases to $\\lambda' = \\frac{\\lambda}{\\mu}$, and the width of the central maximum is directly proportional to wavelength.",
    ans: 0,
    exp: "Linear width $\\beta_0 = \\frac{2\\lambda D}{a}$. In water, $\\lambda$ decreases by a factor of $1.33$, so the diffraction pattern shrinks. (R) correctly explains (A)."
  },
  {
    a: "A diffraction grating with more lines per millimeter produces greater angular dispersion.",
    r: "The angular dispersion of a grating is $\\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}$, which is inversely proportional to the grating element $d = \\frac{1}{N}$.",
    ans: 0,
    exp: "Higher lines per millimeter $N$ means a smaller grating spacing $d$. Because dispersion is inversely proportional to $d$, the spectral lines spread out over wider angles. (R) correctly explains (A)."
  },
  {
    a: "In a single-slit diffraction pattern, no light reaches the screen at an angle $\\theta$ such that $a \\sin\\theta = \\lambda$.",
    r: "The slit can be divided into two equal halves such that every wavelet from the upper half is exactly cancelled by a wavelet with a path difference of $\\frac{\\lambda}{2}$ from the corresponding point in the lower half.",
    ans: 0,
    exp: "Pairwise cancellation of wavelets between corresponding points separated by $a/2$ with phase difference $\\pi$ yields identically zero resultant amplitude at $a\\sin\\theta = \\lambda$. (R) correctly explains (A)."
  },
  {
    a: "Coloured fringes can be seen when viewing a distant street lamp through a fine cloth umbrella.",
    r: "The regularly spaced fine threads of the cloth act as a two-dimensional diffraction grating, dispersing white light into a 2D diffraction pattern.",
    ans: 0,
    exp: "The weave of an umbrella comprises orthogonal arrays of micro-apertures that form a transmission grating, diffracting white light into a colourful grid pattern. (R) correctly explains (A)."
  },
  {
    a: "Radio telescopes are built with much larger dish diameters than optical telescopes.",
    r: "Radio waves have wavelengths millions of times longer than visible light, requiring enormous apertures to achieve acceptable angular resolution.",
    ans: 0,
    exp: "Limit of resolution is $\\Delta\\theta \\approx \\frac{\\lambda}{a}$. To overcome the huge wavelength of radio waves (meters to centimeters), $a$ must be very large (or synthesised via interferometry). (R) correctly explains (A)."
  },
  {
    a: "When white light is incident on a diffraction grating, the central maximum is white, while the higher-order spectra are coloured.",
    r: "At the central maximum ($\\theta = 0$), all wavelengths have zero path difference and arrive in phase, whereas for higher orders ($m \\ge 1$), different wavelengths diffract at different angles according to $d\\sin\\theta = m\\lambda$.",
    ans: 0,
    exp: "For $m = 0$, $d\\sin 0 = 0$ for all wavelengths, so all colours recombine to yield white light. For $m \\ge 1$, $\\sin\\theta \\propto \\lambda$, spreading into a continuous spectrum with violet closest to center. (R) correctly explains (A)."
  },
  {
    a: "The maximum number of orders observable with a diffraction grating is finite.",
    r: "The sine of any real diffraction angle cannot exceed unity ($\\sin\\theta \\le 1$), so the maximum order satisfies $m_{max} \\le \\frac{d}{\\lambda}$.",
    ans: 0,
    exp: "Since $\\sin\\theta = \\frac{m\\lambda}{d} \\le 1$, the maximum observable diffraction order is $m_{max} = \\lfloor d/\\lambda \\rfloor$. (R) correctly explains (A)."
  },
  {
    a: "Diffraction fringes differ fundamentally from interference fringes.",
    r: "Interference fringes are formed by the superposition of light from distinct discrete coherent sources, whereas diffraction fringes arise from the interference of secondary wavelets from a continuous wavefront.",
    ans: 0,
    exp: "Young's double slit combines waves from two discrete slits (equal widths, uniform peaks), whereas diffraction integrates wavelets across a continuous open aperture (varying intensity). (R) correctly explains (A)."
  },
  {
    a: "In single-slit diffraction, the condition for the $m^{\\text{th}}$ secondary maximum is approximately $a \\sin\\theta = (2m + 1)\\frac{\\lambda}{2}$.",
    r: "At these angles, the slit can be divided into $(2m + 1)$ equal strips, of which $2m$ strips cancel each other in pairs, leaving the wavelets from the last strip uncancelled.",
    ans: 0,
    exp: "Dividing into an odd number of half-wave zones leaves exactly one zone's wavelets to produce an uncancelled net amplitude at the screen. (R) correctly explains (A)."
  },
  {
    a: "The resolving power of a diffraction grating is directly proportional to the total number of lines ruled on the grating.",
    r: "The chromatic resolving power of a grating in order $m$ is given by $R = \\frac{\\lambda}{\\Delta\\lambda} = m N_{total}$.",
    ans: 0,
    exp: "A greater total number of illuminated slits $N_{total}$ produces sharper principal maxima, permitting the separation of closer spectral wavelengths ($R = m N$). (R) correctly explains (A)."
  },
  {
    a: "If the slit width $a$ is much larger than the wavelength $\\lambda$ ($a \\gg \\lambda$), diffraction effects become undetectable.",
    r: "The angular spread of the central maximum $\\Delta\\theta = \\frac{2\\lambda}{a}$ approaches zero when $a \\gg \\lambda$, and the light beam propagates along straight geometrical rays.",
    ans: 0,
    exp: "When $a \\gg \\lambda$, the bending angle is virtually zero, and light forms sharp geometric shadows, matching classical ray optics. (R) correctly explains (A)."
  },
  {
    a: "An obstacle of circular shape produces a bright spot at the center of its geometric shadow on a distant screen.",
    r: "Secondary wavelets arriving from the circular boundary of the obstacle have identical path lengths to the center of the shadow and interfere constructively (Poisson-Arago spot).",
    ans: 0,
    exp: "Due to circular symmetry, all wavelets from the circular perimeter travel the exact same distance to the central axis, arriving in phase to produce the celebrated Poisson spot. (R) correctly explains (A)."
  },
  {
    a: "Diffraction occurs with all types of waves, including mechanical waves, electromagnetic waves, and matter waves.",
    r: "Diffraction is a universal wave phenomenon that arises whenever any wave encounters an obstacle or aperture that restricts part of its wavefront.",
    ans: 0,
    exp: "Water waves, sound waves, light, X-rays, electrons, and neutrons all exhibit diffraction when interacting with structures comparable in size to their de Broglie or physical wavelengths. (R) correctly explains (A)."
  },
  {
    a: "In a single slit diffraction experiment, if monochromatic red light is replaced with monochromatic violet light, the diffraction pattern contracts.",
    r: "The wavelength of violet light is shorter than that of red light ($\\lambda_V < \\lambda_R$), and the angular width of the diffraction pattern is directly proportional to wavelength.",
    ans: 0,
    exp: "Because $\\theta \\propto \\lambda$, shorter wavelength produces narrower diffraction bands, compressing the entire fringe system toward the center. (R) correctly explains (A)."
  },
  {
    a: "A CD or DVD disc reflects rainbow colours when illuminated with white light.",
    r: "The microscopically fine spiral tracks of pits and lands on the disc surface act as a reflective diffraction grating.",
    ans: 0,
    exp: "Track pitch on a CD is $\\approx 1.6\\ \\mu\\text{m}$ (comparable to visible light wavelengths), diffracting different colours of white light at different angles. (R) correctly explains (A)."
  },
  {
    a: "Diffraction patterns cannot be observed using a wide slit illuminated by ordinary sunlight.",
    r: "Sunlight is spatially and temporally incoherent, and a wide slit allows multiple independent wavelets from different source points to wash out the diffraction fringe contrast.",
    ans: 0,
    exp: "Observing clear diffraction requires a coherent wavefront illuminating a narrow slit ($a \\sim \\lambda$). A broad slit illuminated by sunlight washes out the fringe visibility. (R) correctly explains (A)."
  },
  {
    a: "In a diffraction grating, certain spectral orders may be missing from the pattern.",
    r: "A missing order occurs when the angle for a grating principal maximum coincides with the angle for a single-slit diffraction minimum: $(a + b)\\sin\\theta = m\\lambda$ and $a\\sin\\theta = p\\lambda$.",
    ans: 0,
    exp: "When the single-slit envelope has zero intensity at that angle, the grating interference peak is completely suppressed, resulting in an absent order with $m = p\\frac{a+b}{a}$. (R) correctly explains (A)."
  },
  {
    a: "The width of the central maximum in a single-slit diffraction pattern is independent of the wavelength of light.",
    r: "The position of diffraction minima is determined solely by the geometry of the aperture.",
    ans: 3,
    exp: "(A) is false because $\\beta_0 = \\frac{2\\lambda D}{a}$, which is directly proportional to $\\lambda$. (R) is also false because the condition $a\\sin\\theta = m\\lambda$ explicitly depends on $\\lambda$."
  },
  {
    a: "Babinet's principle states that the diffraction pattern produced by an opaque obstacle is identical to that produced by a complementary aperture of the same shape and size, except for the forward beam.",
    r: "The sum of the electromagnetic wave fields transmitted through complementary screens equals the unobstructed incident wave field.",
    ans: 0,
    exp: "By superposition, $\\mathbf{E}_1 + \\mathbf{E}_2 = \\mathbf{E}_0$. Everywhere outside the unperturbed forward beam ($\\mathbf{E}_0 = 0$), $\\mathbf{E}_1 = -\\mathbf{E}_2$, so intensities $I_1 = |\\mathbf{E}_1|^2 = |-\\mathbf{E}_2|^2 = I_2$ are identical. (R) correctly explains (A)."
  }
];

// 7 Authentic MCQ questions for Diffraction
const mcqData = [
  {
    q: "In a Fraunhofer diffraction pattern due to a single slit of width $0.2\\text{ mm}$, monochromatic light of wavelength $600\\text{ nm}$ is used. If the screen is placed at a distance of $2.0\\text{ m}$ from the slit, the linear width of the central maximum is:",
    opts: [
      "12 mm",
      "6 mm",
      "24 mm",
      "3 mm"
    ],
    ans: 0,
    exp: "Width of central maximum $\\beta_0 = \\frac{2\\lambda D}{a} = \\frac{2 \\times (600 \\times 10^{-9}) \\times 2.0}{0.2 \\times 10^{-3}} = \\frac{2400 \\times 10^{-9}}{0.2 \\times 10^{-3}} = 12 \\times 10^{-3}\\text{ m} = 12\\text{ mm}$."
  },
  {
    q: "A parallel beam of monochromatic light of wavelength $500\\text{ nm}$ falls normally on a narrow slit of width $0.1\\text{ mm}$. The angular spread of the central maximum in degrees is (taking $\\pi = 3.14$):",
    opts: [
      "$0.57^\\circ$",
      "$0.29^\\circ$",
      "$1.15^\\circ$",
      "$0.15^\\circ$"
    ],
    ans: 0,
    exp: "Angular spread $2\\theta = \\frac{2\\lambda}{a} = \\frac{2 \\times (500 \\times 10^{-9})}{0.1 \\times 10^{-3}} = 10^{-2}\\text{ rad}$. In degrees: $10^{-2} \\times \\frac{180}{\\pi} = \\frac{1.8}{3.14} \\approx 0.573^\\circ$."
  },
  {
    q: "Light of wavelength $600\\text{ nm}$ is incident on a slit of width $a$. If the first minimum falls at an angle $\\theta = 30^\\circ$, the slit width $a$ is:",
    opts: [
      "$1.2\\ \\mu\\text{m}$",
      "$0.6\\ \\mu\\text{m}$",
      "$2.4\\ \\mu\\text{m}$",
      "$1.8\\ \\mu\\text{m}$"
    ],
    ans: 0,
    exp: "First minimum condition: $a \\sin\\theta = \\lambda \\implies a \\sin(30^\\circ) = 600\\text{ nm} \\implies a (0.5) = 600\\text{ nm} \\implies a = 1200\\text{ nm} = 1.2\\ \\mu\\text{m}$."
  },
  {
    q: "For what distance is ray optics a good approximation when an aperture of $4\\text{ mm}$ is illuminated by light of wavelength $400\\text{ nm}$?",
    opts: [
      "40 m",
      "20 m",
      "80 m",
      "10 m"
    ],
    ans: 0,
    exp: "Fresnel distance $Z_F = \\frac{a^2}{\\lambda} = \\frac{(4 \\times 10^{-3})^2}{400 \\times 10^{-9}} = \\frac{16 \\times 10^{-6}}{4 \\times 10^{-7}} = 40\\text{ m}$. For $z \\ll 40\\text{ m}$, ray optics is a valid approximation."
  },
  {
    q: "In a single slit diffraction experiment, the first diffraction minimum for light of wavelength $\\lambda_1 = 660\\text{ nm}$ coincides with the first secondary maximum of light of wavelength $\\lambda_2$. The value of $\\lambda_2$ is:",
    opts: [
      "440 nm",
      "330 nm",
      "550 nm",
      "880 nm"
    ],
    ans: 0,
    exp: "First minimum for $\\lambda_1$: $a\\sin\\theta = \\lambda_1$. First secondary maximum for $\\lambda_2$: $a\\sin\\theta = \\frac{3}{2}\\lambda_2$. Equating the two gives $\\lambda_1 = \\frac{3}{2}\\lambda_2 \\implies \\lambda_2 = \\frac{2}{3}\\lambda_1 = \\frac{2}{3}(660\\text{ nm}) = 440\\text{ nm}$."
  },
  {
    q: "A diffraction grating has 5000 lines per centimeter. What is the maximum order of the visible spectrum (taking $\\lambda = 500\\text{ nm}$) that can be observed?",
    opts: [
      "4",
      "3",
      "5",
      "2"
    ],
    ans: 0,
    exp: "Grating element $d = \\frac{1}{5000\\text{ cm}^{-1}} = \\frac{10^{-2}\\text{ m}}{5000} = 2 \\times 10^{-6}\\text{ m} = 2000\\text{ nm}$. Maximum order $m_{max} \\le \\frac{d}{\\lambda} = \\frac{2000}{500} = 4$."
  },
  {
    q: "In a single-slit diffraction pattern, the ratio of the intensity of the first secondary maximum to the central maximum is approximately:",
    opts: [
      "$\\frac{4}{9\\pi^2} \\approx \\frac{1}{22}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{4}{25\\pi^2} \\approx \\frac{1}{61}$"
    ],
    ans: 0,
    exp: "The intensity distribution is $I = I_0 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$. For the first secondary maximum, $\\beta \\approx \\frac{3\\pi}{2}$, so $I_1 = I_0 \\left(\\frac{\\sin(3\\pi/2)}{3\\pi/2}\\right)^2 = I_0 \\left(\\frac{-1}{3\\pi/2}\\right)^2 = \\frac{4}{9\\pi^2} I_0 \\approx \\frac{I_0}{22.2}$."
  }
];

// 20 Authentic Numerical questions for Diffraction
const numData = [
  {
    q: "In a single slit diffraction experiment, a slit of width $0.1\\text{ mm}$ is illuminated by light of wavelength $500\\text{ nm}$. If the screen is placed at a distance of $1\\text{ m}$, the width of the central maximum in millimeters is:",
    ans: 10,
    exp: "$\\beta_0 = \\frac{2\\lambda D}{a} = \\frac{2 \\times (500 \\times 10^{-9}) \\times 1}{0.1 \\times 10^{-3}} = \\frac{10^{-6}}{10^{-4}} = 10^{-2}\\text{ m} = 10\\text{ mm}$."
  },
  {
    q: "A circular aperture of diameter $2.44\\text{ mm}$ is illuminated by light of wavelength $600\\text{ nm}$. The angular limit of resolution in microradians is:",
    ans: 300,
    exp: "$\\theta = \\frac{1.22\\lambda}{a} = \\frac{1.22 \\times (600 \\times 10^{-9})}{2.44 \\times 10^{-3}} = \\frac{732 \\times 10^{-9}}{2.44 \\times 10^{-3}} = 300 \\times 10^{-6}\\text{ rad} = 300\\ \\mu\\text{rad}$."
  },
  {
    q: "The Fresnel distance for an aperture of width $2\\text{ mm}$ illuminated by light of wavelength $500\\text{ nm}$ in meters is:",
    ans: 8,
    exp: "$Z_F = \\frac{a^2}{\\lambda} = \\frac{(2 \\times 10^{-3})^2}{500 \\times 10^{-9}} = \\frac{4 \\times 10^{-6}}{5 \\times 10^{-7}} = 8\\text{ m}$."
  },
  {
    q: "A slit of width $0.24\\text{ mm}$ is illuminated by light of wavelength $600\\text{ nm}$. The angle of diffraction for the first minimum in milliradians is:",
    ans: 2.5,
    exp: "$\\sin\\theta \\approx \\theta = \\frac{\\lambda}{a} = \\frac{600 \\times 10^{-9}}{0.24 \\times 10^{-3}} = 2.5 \\times 10^{-3}\\text{ rad} = 2.5\\text{ mrad}$."
  },
  {
    q: "A diffraction grating has 4000 lines per centimeter. The grating element $d$ in micrometers is:",
    ans: 2.5,
    exp: "$d = \\frac{1}{4000\\text{ cm}^{-1}} = \\frac{10^4\\ \\mu\\text{m}}{4000} = 2.5\\ \\mu\\text{m}$."
  },
  {
    q: "In a single slit diffraction experiment, the distance between the first minimum on the left and the first minimum on the right of the central peak is $8\\text{ mm}$. If the screen is at $2\\text{ m}$ and $\\lambda = 500\\text{ nm}$, the slit width in millimeters is:",
    ans: 0.25,
    exp: "$\\beta_0 = \\frac{2\\lambda D}{a} \\implies 8 \\times 10^{-3} = \\frac{2 \\times (500 \\times 10^{-9}) \\times 2}{a} = \\frac{2 \\times 10^{-6}}{a} \\implies a = \\frac{2 \\times 10^{-6}}{8 \\times 10^{-3}} = 0.25 \\times 10^{-3}\\text{ m} = 0.25\\text{ mm}$."
  },
  {
    q: "A parallel beam of light of wavelength $600\\text{ nm}$ falls on a single slit. The first minimum is observed at an angle of $30^\\circ$. The slit width in micrometers is:",
    ans: 1.2,
    exp: "$a = \\frac{\\lambda}{\\sin 30^\\circ} = \\frac{600\\text{ nm}}{0.5} = 1200\\text{ nm} = 1.2\\ \\mu\\text{m}$."
  },
  {
    q: "A grating has 2500 lines per centimeter. For light of wavelength $500\\text{ nm}$, the maximum possible order of diffraction is:",
    ans: 8,
    exp: "$d = \\frac{10^{-2}}{2500} = 4 \\times 10^{-6}\\text{ m} = 4000\\text{ nm}$. $m_{max} = \\frac{d}{\\lambda} = \\frac{4000}{500} = 8$."
  },
  {
    q: "Light of wavelength $500\\text{ nm}$ is incident on a slit of width $0.1\\text{ mm}$. The angular width of the central maximum in milliradians is:",
    ans: 10,
    exp: "$2\\theta = \\frac{2\\lambda}{a} = \\frac{2 \\times 500 \\times 10^{-9}}{0.1 \\times 10^{-3}} = 10^{-2}\\text{ rad} = 10\\text{ mrad}$."
  },
  {
    q: "In a single slit diffraction pattern, the linear width of the central maximum is $4\\text{ mm}$. What is the linear width of the second secondary maximum on the same screen in millimeters?",
    ans: 2,
    exp: "Secondary maxima have width $\\beta = \\frac{\\lambda D}{a} = \\frac{\\beta_0}{2} = \\frac{4}{2} = 2\\text{ mm}$."
  },
  {
    q: "A telescope with objective aperture diameter of $10\\text{ cm}$ is illuminated with light of $\\lambda = 610\\text{ nm}$. The angular resolution limit in microradians is (taking $1.22 \\times 610 = 744.2$):",
    ans: 7.44, // 1.22 * 610e-9 / 0.1 = 7.442e-6 rad = 7.44 urad
    exp: "$\\theta = \\frac{1.22\\lambda}{a} = \\frac{1.22 \\times 610 \\times 10^{-9}}{0.10} = 7.442 \\times 10^{-6}\\text{ rad} \\approx 7.44\\ \\mu\\text{rad}$."
  },
  {
    q: "The first diffraction minimum for light of wavelength $500\\text{ nm}$ occurs at $30^\\circ$. What is the angle in degrees for the second minimum?",
    ans: 90,
    exp: "$a\\sin(30^\\circ) = \\lambda \\implies a(0.5) = \\lambda \\implies a = 2\\lambda$. For $m = 2$: $a\\sin\\theta_2 = 2\\lambda \\implies (2\\lambda)\\sin\\theta_2 = 2\\lambda \\implies \\sin\\theta_2 = 1 \\implies \\theta_2 = 90^\\circ$."
  },
  {
    q: "An aperture of $3\\text{ mm}$ has light of $\\lambda = 600\\text{ nm}$ incident on it. The distance up to which ray optics remains valid in meters is:",
    ans: 15,
    exp: "$Z_F = \\frac{a^2}{\\lambda} = \\frac{(3 \\times 10^{-3})^2}{600 \\times 10^{-9}} = \\frac{9 \\times 10^{-6}}{6 \\times 10^{-7}} = 15\\text{ m}$."
  },
  {
    q: "A diffraction grating has 500 lines per millimeter. For normal incidence of light of wavelength $500\\text{ nm}$, the diffraction angle for the first-order spectrum in degrees is:",
    ans: 14.5, // sin(theta) = 500e-9 / (1e-3/500) = 500e-9 / 2e-6 = 0.25 => theta = 14.48 deg approx 14.5 deg.
    exp: "$d = \\frac{10^{-3}}{500} = 2 \\times 10^{-6}\\text{ m}$. $\\sin\\theta = \\frac{\\lambda}{d} = \\frac{500 \\times 10^{-9}}{2 \\times 10^{-6}} = 0.25 \\implies \\theta = \\arcsin(0.25) \\approx 14.48^\\circ \\approx 14.5^\\circ$."
  },
  {
    q: "In a single slit experiment, if the slit width is $0.5\\text{ mm}$ and light of $\\lambda = 500\\text{ nm}$ is used, the angular half-width of the central maximum in milliradians is:",
    ans: 1,
    exp: "$\\theta_1 = \\frac{\\lambda}{a} = \\frac{500 \\times 10^{-9}}{0.5 \\times 10^{-3}} = 10^{-3}\\text{ rad} = 1\\text{ mrad}$."
  },
  {
    q: "A diffraction grating has 6000 lines per centimeter. For yellow light of wavelength $600\\text{ nm}$, the maximum observable order is:",
    ans: 2,
    exp: "$d = \\frac{10^{-2}}{6000} = \\frac{1}{6} \\times 10^{-4}\\text{ m} = 1666.7\\text{ nm}$. $m_{max} = \\lfloor 1666.7 / 600 \\rfloor = 2$."
  },
  {
    q: "The linear width of the central maximum on a screen $1.5\\text{ m}$ away from a single slit is $3\\text{ mm}$. If the wavelength of light is $500\\text{ nm}$, the slit width in millimeters is:",
    ans: 0.5,
    exp: "$\\beta_0 = \\frac{2\\lambda D}{a} \\implies 3 \\times 10^{-3} = \\frac{2 \\times (500 \\times 10^{-9}) \\times 1.5}{a} = \\frac{1.5 \\times 10^{-6}}{a} \\implies a = 0.5 \\times 10^{-3}\\text{ m} = 0.5\\text{ mm}$."
  },
  {
    q: "The first secondary maximum in single-slit diffraction occurs at an angle where $a\\sin\\theta = \\frac{3}{2}\\lambda$. If $a = 1500\\text{ nm}$ and $\\lambda = 500\\text{ nm}$, the value of $\\sin\\theta$ is:",
    ans: 0.5,
    exp: "$\\sin\\theta = \\frac{3\\lambda}{2a} = \\frac{3 \\times 500}{2 \\times 1500} = \\frac{1500}{3000} = 0.5$."
  },
  {
    q: "A camera lens of diameter $3\\text{ cm}$ captures light of wavelength $500\\text{ nm}$. The angular resolution limit in microradians is (rounded to one decimal place):",
    ans: 20.3,
    exp: "$\\theta = \\frac{1.22\\lambda}{a} = \\frac{1.22 \\times (500 \\times 10^{-9})}{0.03} = \\frac{610 \\times 10^{-9}}{0.03} \\approx 2.033 \\times 10^{-5}\\text{ rad} = 20.3\\ \\mu\\text{rad}$."
  },
  {
    q: "An aperture of size $a = 1\\text{ mm}$ is illuminated by light with $\\lambda = 500\\text{ nm}$. The Fresnel distance in meters is:",
    ans: 2,
    exp: "$Z_F = \\frac{a^2}{\\lambda} = \\frac{(10^{-3})^2}{500 \\times 10^{-9}} = \\frac{10^{-6}}{5 \\times 10^{-7}} = 2\\text{ m}$."
  }
];

const part6Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part6Questions.push({
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

  part6Questions.push({
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

  part6Questions.push({
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

console.log(`Part 6 generated: ${part6Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_optics_part6.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part6Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
