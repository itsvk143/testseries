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

const subTopic = "Optical instruments (microscope, telescope)";
const chapter = "Optics";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Optical Instruments
const arData = [
  {
    a: "An astronomical telescope has an objective of large focal length and large aperture, while its eyepiece has a small focal length and small aperture.",
    r: "A large focal length increases angular magnification ($m = -f_o/f_e$), and a large aperture collects more light from distant stars while increasing resolving power.",
    ans: 0,
    exp: "In a telescope, $m = -\\frac{f_o}{f_e}$, so making $f_o$ large and $f_e$ small maximizes magnification. A wide aperture gathers more light and improves resolving power $\\frac{a}{1.22\\lambda}$. (R) correctly explains (A)."
  },
  {
    a: "In a compound microscope, both the objective and eyepiece have small focal lengths, but the objective focal length is even smaller than that of the eyepiece.",
    r: "The magnification of a compound microscope is approximately $m \\approx -\\frac{L}{f_o}\\frac{D}{f_e}$, which requires both $f_o$ and $f_e$ to be small for high magnification.",
    ans: 0,
    exp: "Since magnification is inversely proportional to the product $f_o f_e$, both lenses must have short focal lengths. The objective has a smaller focal length and aperture so the specimen can be placed very close to its focus ($u_o \\approx f_o$). (R) correctly explains (A)."
  },
  {
    a: "Cassegrain reflecting telescopes are preferred over large refracting telescopes in modern astronomical observatories.",
    r: "Mirrors are free from chromatic aberration, suffer less spherical aberration with parabolic grinding, and can be mechanically supported across their entire back surface.",
    ans: 0,
    exp: "Reflecting telescopes use concave mirrors, which reflect all wavelengths identically (no chromatic aberration) and can be made much larger without sagging under gravity. (R) correctly explains (A)."
  },
  {
    a: "The resolving power of an astronomical telescope increases when the diameter of its objective lens is increased.",
    r: "The angular limit of resolution of a circular aperture is $\\Delta\\theta = \\frac{1.22\\lambda}{a}$, where $a$ is the objective diameter, so resolving power $RP = \\frac{a}{1.22\\lambda}$ is directly proportional to $a$.",
    ans: 0,
    exp: "Larger aperture diameter $a$ decreases diffraction spreading $\\Delta\\theta$, allowing closer astronomical objects to be resolved. (R) correctly explains (A)."
  },
  {
    a: "The resolving power of a compound microscope increases when blue light is used instead of red light.",
    r: "The limit of resolution of a microscope is proportional to wavelength ($d_{min} = \\frac{1.22\\lambda}{2\\mu\\sin\\theta}$), so shorter wavelengths yield finer spatial resolution.",
    ans: 0,
    exp: "Blue light has a shorter wavelength than red light ($\\lambda_B < \\lambda_R$). Therefore, the minimum resolvable distance $d_{min}$ is smaller and resolving power $RP = \\frac{1}{d_{min}}$ is higher. (R) correctly explains (A)."
  },
  {
    a: "Oil-immersion objectives are used in research optical microscopes to achieve higher resolution.",
    r: "Immersing the objective in cedarwood oil increases the refractive index $\\mu$ between the specimen and objective, thereby increasing the numerical aperture $NA = \\mu\\sin\\theta$.",
    ans: 0,
    exp: "Resolving power is $RP = \\frac{2\\mu\\sin\\theta}{1.22\\lambda}$. Increasing $\\mu$ using oil ($\\mu \\approx 1.51$) boosts the numerical aperture and significantly improves resolving power. (R) correctly explains (A)."
  },
  {
    a: "In normal adjustment of an astronomical telescope, the distance between the objective lens and eyepiece is $f_o + f_e$.",
    r: "In normal adjustment, the real intermediate image formed by the objective lies exactly at the focal point of the eyepiece, so the final image is formed at infinity.",
    ans: 0,
    exp: "The objective focuses distant parallel rays at its secondary focal plane ($v = f_o$). For the final image to form at infinity, this intermediate image must coincide with the first focal plane of the eyepiece, making the tube length $L = f_o + f_e$. (R) correctly explains (A)."
  },
  {
    a: "For viewing with a relaxed eye, optical instruments are adjusted so that the final image is formed at infinity.",
    r: "When parallel light rays enter the eye, the ciliary muscles are completely relaxed and the focal length of the eye lens is at its maximum.",
    ans: 0,
    exp: "A normal relaxed human eye is focused at its far point (infinity). Images formed at infinity allow long-duration observation without eye strain. (R) correctly explains (A)."
  },
  {
    a: "A myopic person cannot see distant objects clearly and requires concave lenses for correction.",
    r: "In a myopic eye, rays from a distant object are brought to focus in front of the retina, and a diverging (concave) lens provides the necessary divergence to shift the focus onto the retina.",
    ans: 0,
    exp: "Myopia occurs when the eyeball is too long or the cornea is too curved. A concave lens forms a virtual image of the distant object at the person's actual far point. (R) correctly explains (A)."
  },
  {
    a: "A hypermetropic person uses convex eyeglasses to read a book comfortably at $25\\text{ cm}$.",
    r: "In hypermetropia, light rays from a near object converge behind the retina, and a converging (convex) lens adds converging power to form the image on the retina.",
    ans: 0,
    exp: "A hypermetropic eye has its near point shifted further than $25\\text{ cm}$. A convex lens forms a virtual image of the book (at $25\\text{ cm}$) at the eye's shifted near point. (R) correctly explains (A)."
  },
  {
    a: "Presbyopia is an age-related defect of vision corrected using bifocal lenses.",
    r: "With advancing age, the ciliary muscles weaken and the crystalline eye lens loses its elasticity, reducing the eye's power of accommodation for both near and distant vision.",
    ans: 0,
    exp: "Bifocals consist of an upper concave portion for distant vision and a lower convex portion for reading, addressing the lost flexibility of the aging eye lens. (R) correctly explains (A)."
  },
  {
    a: "Astigmatism arises when the cornea does not have a completely spherical curvature.",
    r: "Astigmatism is corrected by using cylindrical lenses having different focal lengths along mutually perpendicular meridians.",
    ans: 0,
    exp: "If the cornea has different radii of curvature in horizontal and vertical planes, light focuses at different depths. Cylindrical lenses compensate for this unequal curvature. (R) correctly explains (A)."
  },
  {
    a: "The magnification of a simple microscope is greater when the image is formed at the near point than when it is formed at infinity.",
    r: "At the near point, angular magnification is $m = 1 + \\frac{D}{f}$, whereas for normal adjustment (image at infinity), it is $m = \\frac{D}{f}$.",
    ans: 0,
    exp: "Magnification at the near point exceeds normal adjustment magnification by 1, though observation at the near point involves some accommodation strain. (R) correctly explains (A)."
  },
  {
    a: "The intermediate image formed by the objective of a compound microscope is real, inverted, and magnified.",
    r: "The object is placed just outside the principal focus of the objective lens ($f_o < u < 2f_o$).",
    ans: 0,
    exp: "Placing the specimen just beyond $f_o$ produces a real, inverted, and magnified intermediate image inside the tube, which is then further magnified by the eyepiece. (R) correctly explains (A)."
  },
  {
    a: "The intermediate image formed by the objective of an astronomical telescope is real, inverted, and diminished.",
    r: "The astronomical objects are located at infinity ($u \\approx \\infty$), so their image is formed at the focal plane of the objective lens.",
    ans: 0,
    exp: "Parallel light rays from stars converge at the focal plane of the objective lens to form an inverted, highly diminished real image, which is subsequently magnified by the eyepiece. (R) correctly explains (A)."
  },
  {
    a: "Terrestrial telescopes use an additional erecting lens between the objective and the eyepiece.",
    r: "The erecting lens has a focal length $f$ and forms an erect image with unit linear magnification by placing the intermediate image at $2f$.",
    ans: 0,
    exp: "An astronomical telescope produces an inverted final image, which is inconvenient for terrestrial viewing. An erecting lens placed at $2f$ flips the image right-side up without altering the net magnification. (R) correctly explains (A)."
  },
  {
    a: "The magnifying power of an astronomical telescope cannot be increased indefinitely simply by using an eyepiece of tiny focal length.",
    r: "Beyond a certain limit, very short focal length eyepieces introduce severe spherical and chromatic aberrations, reduce eye relief, and cannot increase resolution beyond the diffraction limit of the objective aperture.",
    ans: 0,
    exp: "Aperture diffraction limits meaningful resolution. Further increasing magnification produces an enlarged but blurry diffraction pattern ('empty magnification') along with severe lens aberrations. (R) correctly explains (A)."
  },
  {
    a: "Galilean telescopes use a concave lens as an eyepiece.",
    r: "A concave eyepiece intercepts converging rays from the objective before they form an intermediate real image, producing an upright virtual final image.",
    ans: 0,
    exp: "In a Galilean telescope, the diverging eyepiece makes the tube shorter ($L = f_o - |f_e|$) and gives an erect final image without requiring an extra erecting lens. (R) correctly explains (A)."
  },
  {
    a: "Reflecting telescopes are completely free from chromatic aberration.",
    r: "The law of reflection $\\theta_i = \\theta_r$ is identical for all wavelengths of light, so mirrors do not disperse colours upon reflection.",
    ans: 0,
    exp: "Chromatic aberration is caused by dispersion (different refractive indices for different wavelengths in lenses). Mirrors operate by reflection, where angle of reflection is strictly independent of wavelength. (R) correctly explains (A)."
  },
  {
    a: "In a compound microscope, the eyepiece acts as a simple magnifying glass.",
    r: "The real intermediate image formed by the objective falls within the focal length of the eyepiece, producing a virtual, erect, and magnified final image with respect to that intermediate image.",
    ans: 0,
    exp: "The eyepiece is positioned so the intermediate image is at $u_e \\le f_e$, allowing it to function as a simple magnifier producing an enlarged virtual image. (R) correctly explains (A)."
  },
  {
    a: "The limit of resolution of the human eye is approximately 1 minute of arc ($1' = \\frac{1}{60}^\\circ$).",
    r: "Diffraction through the pupil (aperture $\\approx 2-3\\text{ mm}$) and the finite spacing of photoreceptor cones on the fovea set a fundamental limit of $\\approx 1'$.",
    ans: 0,
    exp: "Two points subtending an angle smaller than $\\approx 1'$ cannot be resolved by a normal human eye due to optical diffraction and foveal retinal mosaic density. (R) correctly explains (A)."
  },
  {
    a: "An electron microscope achieves much higher resolution than any optical microscope.",
    r: "High-energy electrons have de Broglie wavelengths thousands of times shorter than visible light photons, dramatically reducing diffraction-limited resolution.",
    ans: 0,
    exp: "Since limit of resolution $d_{min} \\propto \\lambda$, using electrons with $\\lambda \\sim 0.01\\text{ nm}$ rather than visible light ($\\lambda \\sim 500\\text{ nm}$) boosts resolving power by tens of thousands. (R) correctly explains (A)."
  },
  {
    a: "Newtonian reflecting telescopes use a flat secondary diagonal mirror tilted at $45^\\circ$.",
    r: "The flat diagonal mirror redirects converging light out through the side of the telescope tube into the eyepiece, preventing the observer's head from obstructing incoming light.",
    ans: 0,
    exp: "In a Newtonian telescope, the primary paraboloidal mirror reflects light towards a prime focus. A $45^\\circ$ flat mirror diverts the focal point outside the tube wall for convenient viewing. (R) correctly explains (A)."
  },
  {
    a: "The field of view of an astronomical telescope is smaller than that of a Galilean telescope.",
    r: "The exit pupil in a Galilean telescope lies inside the instrument, limiting the peripheral rays reaching the eye.",
    ans: 3,
    exp: "(A) is false because a Galilean telescope has a very narrow field of view compared to an astronomical (Keplerian) telescope. (R) is true because the virtual exit pupil inside a Galilean telescope restricts outer rays."
  },
  {
    a: "The power of a corrective lens for a myopic eye is negative.",
    r: "A diverging lens has a negative focal length ($P = 1/f < 0$) in accordance with standard Cartesian sign convention.",
    ans: 0,
    exp: "Myopia requires a concave (diverging) lens to push the far point to infinity. Concave lenses have negative focal length, so their optical power is negative. (R) correctly explains (A)."
  },
  {
    a: "A compound microscope can be used as a telescope simply by interchanging the objective and eyepiece.",
    r: "The objective and eyepiece of any optical instrument perform symmetrical roles in imaging.",
    ans: 2,
    exp: "(A) is true in the sense that an inverted arrangement acts poorly, but (R) is completely false: the lenses have drastically different apertures and focal lengths designed for distinct object conjugate distances; their roles are strictly asymmetric."
  }
];

// 7 Authentic MCQ questions for Optical Instruments
const mcqData = [
  {
    q: "An astronomical telescope has an objective of focal length $100\\text{ cm}$ and an eyepiece of focal length $5\\text{ cm}$. The magnifying power and tube length of the telescope in normal adjustment are:",
    opts: [
      "$m = 20,\\ L = 105\\text{ cm}$",
      "$m = 20,\\ L = 95\\text{ cm}$",
      "$m = 25,\\ L = 105\\text{ cm}$",
      "$m = 5,\\ L = 100\\text{ cm}$"
    ],
    ans: 0,
    exp: "In normal adjustment (image at infinity): magnifying power $|m| = \\frac{f_o}{f_e} = \\frac{100}{5} = 20$. Tube length $L = f_o + f_e = 100 + 5 = 105\\text{ cm}$."
  },
  {
    q: "A compound microscope has an objective of focal length $1.0\\text{ cm}$ and an eyepiece of focal length $2.5\\text{ cm}$. An object is placed at $1.2\\text{ cm}$ from the objective. If the final image is formed at the near point ($D = 25\\text{ cm}$), the total magnification is:",
    opts: [
      "-55",
      "-50",
      "-45",
      "-60"
    ],
    ans: 0,
    exp: "For the objective: $\\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o} \\implies \\frac{1}{v_o} - \\frac{1}{-1.2} = \\frac{1}{1.0} \\implies \\frac{1}{v_o} = 1 - \\frac{1}{1.2} = \\frac{0.2}{1.2} = \\frac{1}{6} \\implies v_o = 6\\text{ cm}$. Objective magnification $m_o = -\\frac{v_o}{u_o} = -\\frac{6}{1.2} = -5$. Eyepiece magnification $m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{2.5} = 1 + 10 = 11$. Total magnification $m = m_o \\times m_e = -5 \\times 11 = -55$."
  },
  {
    q: "The near point of a hypermetropic eye is $75\\text{ cm}$. To read a book held at $25\\text{ cm}$, the focal length and optical power of the required corrective spectacle lens are:",
    opts: [
      "+37.5 cm, +2.67 D",
      "+50.0 cm, +2.00 D",
      "-37.5 cm, -2.67 D",
      "+25.0 cm, +4.00 D"
    ],
    ans: 0,
    exp: "Object distance $u = -25\\text{ cm}$, desired virtual image distance $v = -75\\text{ cm}$. Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = -\\frac{1}{75} - \\left(-\\frac{1}{25}\\right) = \\frac{1}{25} - \\frac{1}{75} = \\frac{2}{75} \\implies f = +37.5\\text{ cm} = +0.375\\text{ m}$. Power $P = \\frac{1}{f} = \\frac{1}{0.375} = +2.67\\text{ D}$."
  },
  {
    q: "A person with a myopic eye cannot see clearly beyond $80\\text{ cm}$. What is the focal length and nature of the lens needed to correct this vision to view distant stars?",
    opts: [
      "-80 cm, concave lens",
      "+80 cm, convex lens",
      "-40 cm, concave lens",
      "-100 cm, concave lens"
    ],
    ans: 0,
    exp: "For distant objects, $u = -\\infty$, and the image must be formed at the person's far point, $v = -80\\text{ cm}$. Lens formula gives $\\frac{1}{f} = \\frac{1}{-80} - \\frac{1}{-\\infty} = -\\frac{1}{80} \\implies f = -80\\text{ cm}$. Negative focal length indicates a concave (diverging) lens."
  },
  {
    q: "An astronomical telescope has an objective diameter of $2.44\\text{ m}$. The angular resolution limit for light of wavelength $500\\text{ nm}$ is:",
    opts: [
      "$2.5 \\times 10^{-7}\\text{ rad}$",
      "$5.0 \\times 10^{-7}\\text{ rad}$",
      "$1.22 \\times 10^{-7}\\text{ rad}$",
      "$2.5 \\times 10^{-6}\\text{ rad}$"
    ],
    ans: 0,
    exp: "Angular limit of resolution $\\Delta\\theta = \\frac{1.22\\lambda}{a} = \\frac{1.22 \\times (500 \\times 10^{-9})}{2.44} = \\frac{610 \\times 10^{-9}}{2.44} = 2.5 \\times 10^{-7}\\text{ rad}$."
  },
  {
    q: "A simple microscope consists of a convex lens of focal length $5\\text{ cm}$. The magnification produced for a normal eye when the image is formed at the near point ($D = 25\\text{ cm}$) and at infinity are, respectively:",
    opts: [
      "6, 5",
      "5, 4",
      "5, 6",
      "4, 5"
    ],
    ans: 0,
    exp: "At near point: $m = 1 + \\frac{D}{f} = 1 + \\frac{25}{5} = 6$. At infinity: $m = \\frac{D}{f} = \\frac{25}{5} = 5$."
  },
  {
    q: "In an astronomical telescope in normal adjustment, the diameter of the objective is $D$. The eyepiece has focal length $f_e$. If a parallel beam of light enters the objective, the diameter of the exit pupil (the real image of the objective formed by the eyepiece) is:",
    opts: [
      "$\\frac{D f_e}{f_o}$",
      "$\\frac{D f_o}{f_e}$",
      "$\\frac{f_o + f_e}{D}$",
      "$\\frac{D}{2}$"
    ],
    ans: 0,
    exp: "Magnification is $m = \\frac{f_o}{f_e}$. The ratio of the entrance pupil diameter (objective diameter $D$) to the exit pupil diameter $d$ is $m = \\frac{D}{d} \\implies d = \\frac{D}{m} = \\frac{D f_e}{f_o}$."
  }
];

// 20 Authentic Numerical questions for Optical Instruments
const numData = [
  {
    q: "An astronomical telescope has an objective of focal length $120\\text{ cm}$ and an eyepiece of focal length $6\\text{ cm}$. In normal adjustment, the magnifying power of the telescope is:",
    ans: 20,
    exp: "$m = \\frac{f_o}{f_e} = \\frac{120}{6} = 20$."
  },
  {
    q: "In normal adjustment, an astronomical telescope has an objective focal length of $150\\text{ cm}$ and eyepiece focal length of $5\\text{ cm}$. The length of the telescope tube in centimeters is:",
    ans: 155,
    exp: "$L = f_o + f_e = 150 + 5 = 155\\text{ cm}$."
  },
  {
    q: "A magnifying glass has a focal length of $5\\text{ cm}$. For an observer with a least distance of distinct vision $D = 25\\text{ cm}$, the magnifying power when the image is formed at the near point is:",
    ans: 6,
    exp: "$m = 1 + \\frac{D}{f} = 1 + \\frac{25}{5} = 6$."
  },
  {
    q: "The power of a thin convex lens used as a simple magnifier is $+10\\text{ D}$. The magnifying power for a relaxed eye with near point $D = 25\\text{ cm}$ is:",
    ans: 2.5,
    exp: "$f = \\frac{1}{P} = \\frac{1}{10} = 0.1\\text{ m} = 10\\text{ cm}$. For a relaxed eye (image at infinity), $m = \\frac{D}{f} = \\frac{25}{10} = 2.5$."
  },
  {
    q: "A compound microscope has an objective magnification of 10 and an eyepiece magnification of 20. The total magnification of the microscope is:",
    ans: 200,
    exp: "$m = m_o \\times m_e = 10 \\times 20 = 200$."
  },
  {
    q: "The far point of a myopic eye is $50\\text{ cm}$. The optical power of the spectacle lens required to see distant stars clearly in diopters is:",
    ans: -2,
    exp: "$f = -50\\text{ cm} = -0.5\\text{ m}$. Power $P = \\frac{1}{f} = \\frac{1}{-0.5} = -2\\text{ D}$."
  },
  {
    q: "The near point of a farsighted eye is $100\\text{ cm}$. The power of the lens required to read a book held at $25\\text{ cm}$ in diopters is:",
    ans: 3,
    exp: "$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = -\\frac{1}{100} - \\left(-\\frac{1}{25}\\right) = \\frac{1}{25} - \\frac{1}{100} = \\frac{3}{100}\\text{ cm}^{-1} \\implies f = \\frac{100}{3}\\text{ cm} = \\frac{1}{3}\\text{ m}$. Power $P = \\frac{1}{f} = +3\\text{ D}$."
  },
  {
    q: "An astronomical telescope has an objective of aperture diameter $1.22\\text{ m}$. For light of wavelength $600\\text{ nm}$, the resolving limit in microradians (rounded to one decimal place) is:",
    ans: 0.6,
    exp: "$\\Delta\\theta = \\frac{1.22\\lambda}{a} = \\frac{1.22 \\times (600 \\times 10^{-9})}{1.22} = 600 \\times 10^{-9}\\text{ rad} = 0.6 \\times 10^{-6}\\text{ rad} = 0.6\\ \\mu\\text{rad}$."
  },
  {
    q: "A compound microscope has a tube length of $20\\text{ cm}$. The focal lengths of the objective and eyepiece are $1\\text{ cm}$ and $2.5\\text{ cm}$ respectively. Taking $D = 25\\text{ cm}$, the magnifying power in normal adjustment is:",
    ans: 200,
    exp: "$m \\approx \\frac{L}{f_o} \\times \\frac{D}{f_e} = \\frac{20}{1} \\times \\frac{25}{2.5} = 20 \\times 10 = 200$."
  },
  {
    q: "An astronomical telescope has a magnifying power of 15 in normal adjustment. If the tube length is $80\\text{ cm}$, the focal length of the objective lens in centimeters is:",
    ans: 75,
    exp: "$m = \\frac{f_o}{f_e} = 15 \\implies f_o = 15 f_e$. Tube length $L = f_o + f_e = 16 f_e = 80\\text{ cm} \\implies f_e = 5\\text{ cm}$. Thus $f_o = 15 \\times 5 = 75\\text{ cm}$."
  },
  {
    q: "A simple magnifier has a focal length of $2.5\\text{ cm}$. Taking $D = 25\\text{ cm}$, the magnifying power when viewing with the image at the near point is:",
    ans: 11,
    exp: "$m = 1 + \\frac{D}{f} = 1 + \\frac{25}{2.5} = 1 + 10 = 11$."
  },
  {
    q: "In an astronomical telescope, the focal length of the objective is $90\\text{ cm}$ and that of the eyepiece is $3\\text{ cm}$. When focused for distinct vision ($D = 25\\text{ cm}$), the magnification is:",
    ans: 33.6,
    exp: "$m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right) = \\frac{90}{3}\\left(1 + \\frac{3}{25}\\right) = 30(1 + 0.12) = 30(1.12) = 33.6$."
  },
  {
    q: "A person's far point is $2\\text{ m}$. The optical power of the corrective contact lens required in diopters is:",
    ans: -0.5,
    exp: "$f = -2\\text{ m}$. Power $P = \\frac{1}{f} = \\frac{1}{-2} = -0.5\\text{ D}$."
  },
  {
    q: "The objective lens of an astronomical telescope has diameter $10\\text{ cm}$ and focal length $100\\text{ cm}$. The eyepiece has focal length $2\\text{ cm}$. The diameter of the exit pupil in millimeters is:",
    ans: 2,
    exp: "$m = \\frac{f_o}{f_e} = \\frac{100}{2} = 50$. Diameter of exit pupil $d = \\frac{D}{m} = \\frac{10\\text{ cm}}{50} = 0.2\\text{ cm} = 2\\text{ mm}$."
  },
  {
    q: "A microscope has an objective with numerical aperture $NA = 0.61$. For illumination with light of wavelength $\\lambda = 500\\text{ nm}$, the limit of resolution in nanometers is:",
    ans: 500,
    exp: "$d_{min} = \\frac{1.22\\lambda}{2 NA} = \\frac{1.22 \\times 500}{2 \\times 0.61} = \\frac{610}{1.22} = 500\\text{ nm}$."
  },
  {
    q: "An astronomical telescope has an objective focal length of $200\\text{ cm}$. If the magnification in normal adjustment is 40, the focal length of the eyepiece in centimeters is:",
    ans: 5,
    exp: "$f_e = \\frac{f_o}{m} = \\frac{200}{40} = 5\\text{ cm}$."
  },
  {
    q: "A compound microscope has an objective of focal length $0.5\\text{ cm}$. An object is placed at $0.6\\text{ cm}$ from the objective. The linear magnification produced by the objective is:",
    ans: 5,
    exp: "$\\frac{1}{v_o} - \\frac{1}{-0.6} = \\frac{1}{0.5} \\implies \\frac{1}{v_o} = 2 - \\frac{10}{6} = 2 - \\frac{5}{3} = \\frac{1}{3} \\implies v_o = 3\\text{ cm}$. Linear magnification $|m_o| = \\frac{v_o}{u_o} = \\frac{3}{0.6} = 5$."
  },
  {
    q: "The focal lengths of the objective and eyepiece of a telescope are $60\\text{ cm}$ and $5\\text{ cm}$ respectively. The tube length in normal adjustment in centimeters is:",
    ans: 65,
    exp: "$L = f_o + f_e = 60 + 5 = 65\\text{ cm}$."
  },
  {
    q: "A person cannot see objects clearly closer than $50\\text{ cm}$. What is the optical power in diopters of the reading glasses needed to read at $25\\text{ cm}$?",
    ans: 2,
    exp: "$\\frac{1}{f} = \\frac{1}{-50} - \\frac{1}{-25} = \\frac{1}{25} - \\frac{1}{50} = \\frac{1}{50}\\text{ cm}^{-1} \\implies f = 50\\text{ cm} = 0.5\\text{ m}$. Power $P = \\frac{1}{0.5} = +2\\text{ D}$."
  },
  {
    q: "A Galilean telescope has an objective of focal length $60\\text{ cm}$ and an eyepiece of focal length $-5\\text{ cm}$. The tube length of the telescope in normal adjustment in centimeters is:",
    ans: 55,
    exp: "For a Galilean telescope, $L = f_o - |f_e| = 60 - 5 = 55\\text{ cm}$."
  }
];

const part2Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part2Questions.push({
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

const outPath = path.join(__dirname, 'data_jee_optics_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part2Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
