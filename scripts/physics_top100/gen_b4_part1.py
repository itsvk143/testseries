import json

questions = []

def add_q(ch, sub, q_text, opts, ans_idx, exp_text):
    questions.append({
        "chapter": ch,
        "subtopic": sub,
        "subTopic": sub,
        "topic": ch,
        "subject": "Physics",
        "examType": "JEE Mains",
        "exam": "JEE Main",
        "type": "MCQ",
        "questionType": "MCQ (Multiple Choice Question)",
        "difficulty": "Difficult",
        "targetAudience": "Top 100 Students",
        "source": "JEE Mains Top 100 Analysis",
        "marks": 4,
        "negativeMarks": 1,
        "question": q_text,
        "options": opts,
        "correctAnswer": ans_idx,
        "correctOption": ans_idx,
        "explanation": exp_text,
        "solution": exp_text
    })

# ==========================================
# CHAPTER 16: Optics (9 subtopics * 5 = 45 questions)
# ==========================================

# Subtopic 1: Reflection/refraction
add_q(
    "Optics", "Reflection/refraction",
    "A ray of light traveling in air is incident on a glass plate of refractive index $\\mu = \\sqrt{3}$. If the reflected and refracted rays are mutually perpendicular, what is the angle of incidence?",
    [
        "$60^\\circ$",
        "$30^\\circ$",
        "$45^\\circ$",
        "$75^\\circ$"
    ],
    0,
    "When reflected and refracted rays are mutually perpendicular, the angle of incidence is Brewster's angle: $i_p + r = 90^\\circ \\implies r = 90^\\circ - i_p$. By Snell's law: $1 \\cdot \\sin i_p = \\mu \\sin(90^\\circ - i_p) = \\mu \\cos i_p \\implies \\tan i_p = \\mu$. Given $\\mu = \\sqrt{3}$: $i_p = \\tan^{-1}(\\sqrt{3}) = 60^\\circ$."
)

add_q(
    "Optics", "Reflection/refraction",
    "A point source of light is placed at the bottom of a water tank of depth $h = \\sqrt{7}\\text{ m}$. If the refractive index of water is $\\mu = 4/3$, what is the radius of the circular illuminated disk formed on the surface of the water?",
    [
        "$3.0\\text{ m}$",
        "$2.5\\text{ m}$",
        "$4.0\\text{ m}$",
        "$3.5\\text{ m}$"
    ],
    0,
    "Light emerges into air only for angles of incidence less than or equal to critical angle $\\theta_c$, where $\\sin\\theta_c = 1/\\mu = 3/4$. From right triangle geometry, $\\tan\\theta_c = \\frac{\\sin\\theta_c}{\\sqrt{1 - \\sin^2\\theta_c}} = \\frac{3/4}{\\sqrt{1 - 9/16}} = \\frac{3/4}{\\sqrt{7}/4} = \\frac{3}{\\sqrt{7}}$. The radius of the disk is $R = h \\tan\\theta_c = \\sqrt{7} \\times \\frac{3}{\\sqrt{7}} = 3.0\\text{ m}$."
)

add_q(
    "Optics", "Reflection/refraction",
    "A vessel contains two immiscible liquids of refractive indices $\\mu_1 = 1.4$ and $\\mu_2 = 1.6$ and thicknesses $d_1 = 14\\text{ cm}$ and $d_2 = 16\\text{ cm}$ respectively. What is the apparent depth of the bottom of the vessel when viewed from directly above?",
    [
        "$20\\text{ cm}$",
        "$22\\text{ cm}$",
        "$18\\text{ cm}$",
        "$24\\text{ cm}$"
    ],
    0,
    "The apparent depth for multiple horizontal layers of liquids viewed at near-normal incidence is $d_{app} = \\sum \\frac{d_i}{\\mu_i} = \\frac{d_1}{\\mu_1} + \\frac{d_2}{\\mu_2} = \\frac{14}{1.4} + \\frac{16}{1.6} = 10 + 10 = 20\\text{ cm}$."
)

add_q(
    "Optics", "Reflection/refraction",
    "A ray of light enters a rectangular glass block of refractive index $\\mu$ at an angle of incidence $i$. The thickness of the block is $t$. The lateral shift $x$ of the emergent ray is:",
    [
        "$\\frac{t \\sin(i - r)}{\\cos r}$",
        "$\\frac{t \\cos(i - r)}{\\sin r}$",
        "$t \\sin(i - r)$",
        "$\\frac{t \\sin i}{\\mu}$"
    ],
    0,
    "From geometry of refraction through a plane parallel slab: length of path inside the slab is $A B = \\frac{t}{\\cos r}$. The perpendicular lateral displacement is $x = A B \\sin(i - r) = \\frac{t \\sin(i - r)}{\\cos r}$."
)

add_q(
    "Optics", "Reflection/refraction",
    "Fermat's principle of least time states that the actual path taken by a light ray between two points is one that:",
    [
        "Takes an optical path length that is stationary (extremum) with respect to neighboring variations",
        "Always minimizes physical geometric distance",
        "Always travels in a straight line regardless of the medium",
        "Maintains constant wavelength"
    ],
    0,
    "Fermat's principle states that the optical path taken by light between two points is stationary (an extremum, usually a minimum) with respect to small variations of the path: $\\delta \\int n(s) ds = 0$. Snell's law of refraction and the law of reflection are direct mathematical consequences of this variational principle."
)

# Subtopic 2: Lens formula
add_q(
    "Optics", "Lens formula",
    "A biconvex thin lens made of glass ($\\mu_g = 1.5$) has radii of curvature $R_1 = 20\\text{ cm}$ and $R_2 = 30\\text{ cm}$. What is its focal length when immersed in water ($\\mu_w = 4/3$)?",
    [
        "$96\\text{ cm}$",
        "$48\\text{ cm}$",
        "$24\\text{ cm}$",
        "$120\\text{ cm}$"
    ],
    0,
    "In air, lens maker's formula gives $\\frac{1}{f_{air}} = (\\mu_g - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = (1.5 - 1)\\left(\\frac{1}{20} - \\left(-\\frac{1}{30}\\right)\\right) = 0.5 \\times \\left(\\frac{5}{60}\\right) = \\frac{1}{24} \\implies f_{air} = 24\\text{ cm}$. When immersed in water: $\\frac{1}{f_w} = \\left(\\frac{\\mu_g}{\\mu_w} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = \\left(\\frac{1.5}{4/3} - 1\\right)\\left(\\frac{5}{60}\\right) = \\left(\\frac{9}{8} - 1\\right)\\left(\\frac{1}{12}\\right) = \\frac{1}{8} \\times \\frac{1}{12} = \\frac{1}{96} \\implies f_w = 96\\text{ cm}$."
)

add_q(
    "Optics", "Lens formula",
    "In the displacement method using a convex lens, two sharp images of an illuminated object are formed on a fixed screen separated from the object by distance $D = 100\\text{ cm}$. If the displacement between the two lens positions is $d = 20\\text{ cm}$, what is the focal length of the lens?",
    [
        "$24\\text{ cm}$",
        "$25\\text{ cm}$",
        "$20\\text{ cm}$",
        "$21\\text{ cm}$"
    ],
    0,
    "In the displacement method: $f = \\frac{D^2 - d^2}{4 D} = \\frac{100^2 - 20^2}{4(100)} = \\frac{10000 - 400}{400} = \\frac{9600}{400} = 24\\text{ cm}$."
)

add_q(
    "Optics", "Lens formula",
    "If $I_1$ and $I_2$ are the heights of the two sharp real images formed in the displacement method, what is the actual height $O$ of the object?",
    [
        "$O = \\sqrt{I_1 I_2}$",
        "$O = \\frac{I_1 + I_2}{2}$",
        "$O = \\frac{2 I_1 I_2}{I_1 + I_2}$",
        "$O = \\frac{I_1^2}{I_2}$"
    ],
    0,
    "Magnification for the first position is $m_1 = \\frac{I_1}{O} = \\frac{v}{u}$. For the conjugate second position, object and image distances are swapped: $m_2 = \\frac{I_2}{O} = \\frac{u}{v} = \\frac{1}{m_1}$. Multiplying both magnifications gives $m_1 m_2 = \\frac{I_1 I_2}{O^2} = 1 \\implies O = \\sqrt{I_1 I_2}$."
)

add_q(
    "Optics", "Lens formula",
    "A equiconvex lens of focal length $f$ is cut symmetrically into two identical plano-convex lenses along a plane perpendicular to its principal axis. What is the focal length of each half?",
    [
        "$2 f$",
        "$f$",
        "$f / 2$",
        "$4 f$"
    ],
    0,
    "Original lens: $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R} - \\left(-\\frac{1}{R}\\right)\\right) = \\frac{2(\\mu - 1)}{R}$. For each plano-convex half: $R_1 = R, R_2 = \\infty$, so $\\frac{1}{f'} = (\\mu - 1)\\left(\\frac{1}{R} - \\frac{1}{\\infty}\\right) = \\frac{\\mu - 1}{R} = \\frac{1}{2 f} \\implies f' = 2 f$."
)

add_q(
    "Optics", "Lens formula",
    "If the same lens of focal length $f$ is sliced along its principal axis into two semicircular halves, what is the focal length of each half?",
    [
        "$f$",
        "$2 f$",
        "$f / 2$",
        "$4 f$"
    ],
    0,
    "Cutting the lens along the principal axis does not change the radii of curvature ($R_1, R_2$) nor the refractive index $\\mu$. Therefore, the focal length of each half remains strictly $f$. The only difference is that each half collects half as much light, reducing image intensity by $50\\%$."
)

# Subtopic 3: Optical instruments (microscope, telescope)
add_q(
    "Optics", "Optical instruments (microscope, telescope)",
    "An astronomical telescope has an objective lens of focal length $f_o = 100\\text{ cm}$ and an eyepiece of focal length $f_e = 5\\text{ cm}$. In normal adjustment (image at infinity), what are its magnifying power and the tube length?",
    [
        "$m = 20, L = 105\\text{ cm}$",
        "$m = 20, L = 95\\text{ cm}$",
        "$m = 25, L = 105\\text{ cm}$",
        "$m = 100, L = 105\\text{ cm}$"
    ],
    0,
    "In normal adjustment for an astronomical telescope: magnifying power is $m = \\frac{f_o}{f_e} = \\frac{100}{5} = 20$. The tube length is $L = f_o + f_e = 100 + 5 = 105\\text{ cm}$."
)

add_q(
    "Optics", "Optical instruments (microscope, telescope)",
    "In a compound microscope, the focal lengths of the objective and eyepiece are $f_o = 1.0\\text{ cm}$ and $f_e = 2.5\\text{ cm}$ respectively. An object is placed at $u_o = 1.1\\text{ cm}$ from the objective. If the final image is formed at the near point ($D = 25\\text{ cm}$), what is the total magnifying power?",
    [
        "$110$",
        "$100$",
        "$125$",
        "$90$"
    ],
    0,
    "For the objective: $\\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o} \\implies \\frac{1}{v_o} - \\frac{1}{-1.1} = 1 \\implies \\frac{1}{v_o} = 1 - \\frac{10}{11} = \\frac{1}{11} \\implies v_o = 11\\text{ cm}$. Objective magnification is $m_o = \\frac{v_o}{|u_o|} = \\frac{11}{1.1} = 10$. Eyepiece magnification at the near point is $m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{2.5} = 1 + 10 = 11$. Total magnifying power is $M = m_o \\times m_e = 10 \\times 11 = 110$."
)

add_q(
    "Optics", "Optical instruments (microscope, telescope)",
    "What is the primary advantage of a reflecting telescope (Cassegrain / Newtonian) over a refracting telescope?",
    [
        "Complete absence of chromatic aberration and easier mechanical support for large mirrors",
        "Higher magnification with smaller aperture",
        "Elimination of spherical aberration completely",
        "No diffraction limits"
    ],
    0,
    "Mirrors reflect all wavelengths according to the law of reflection independent of wavelength, thereby completely eliminating chromatic aberration. Furthermore, huge parabolic mirrors can be supported over their entire back surface, unlike heavy glass lenses which can only be supported along their rims."
)

add_q(
    "Optics", "Optical instruments (microscope, telescope)",
    "The resolving power of an astronomical telescope with objective aperture diameter $D$ observing light of wavelength $\\lambda$ is given by:",
    [
        "$\\frac{D}{1.22 \\lambda}$",
        "$\\frac{1.22 \\lambda}{D}$",
        "$\\frac{D}{\\lambda}$",
        "$\\frac{2.44 \\lambda}{D}$"
    ],
    0,
    "According to Rayleigh's criterion, the limit of angular resolution of a circular aperture is $\\Delta \\theta = \\frac{1.22 \\lambda}{D}$. Resolving power is the reciprocal of the limit of resolution: $R.P. = \\frac{1}{\\Delta \\theta} = \\frac{D}{1.22 \\lambda}$."
)

add_q(
    "Optics", "Optical instruments (microscope, telescope)",
    "To increase the resolving power of a compound microscope, one should:",
    [
        "Use oil immersion objective with high refractive index and shorter wavelength ultraviolet light",
        "Increase the focal length of the objective lens",
        "Use red light with longer wavelength",
        "Decrease the numerical aperture"
    ],
    0,
    "The limit of resolution of a microscope is $d_{\\min} = \\frac{1.22 \\lambda}{2 \\mu \\sin\\beta} = \\frac{1.22 \\lambda}{2 N.A.}$. Resolving power $R.P. = \\frac{2 \\mu \\sin\\beta}{1.22 \\lambda}$ is increased by decreasing wavelength $\\lambda$ (e.g. UV light or electron microscopy) and increasing the numerical aperture $\\mu \\sin\\beta$ using an oil immersion medium (higher $\\mu$)."
)

# Subtopic 4: Interference
add_q(
    "Optics", "Interference",
    "Two coherent monochromatic light waves of intensities $I$ and $4I$ interfere at a point. If the phase difference between them is $\\pi/3$, what is the resultant intensity?",
    [
        "$7 I$",
        "$5 I$",
        "$3 I$",
        "$9 I$"
    ],
    0,
    "Resultant intensity is $I_{res} = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$. Substituting $I_1 = I, I_2 = 4I, \\phi = \\pi/3$ ($60^\\circ$): $I_{res} = I + 4I + 2\\sqrt{I \\cdot 4I}\\cos(60^\\circ) = 5I + 2(2I)\\left(\\frac{1}{2}\\right) = 5I + 2I = 7I$."
)

add_q(
    "Optics", "Interference",
    "Light reflected from a thin oil film on water exhibits brilliant colors due to:",
    [
        "Constructive and destructive interference of light waves reflected from the top and bottom surfaces of the film",
        "Dispersion of light inside the oil",
        "Total internal reflection inside the oil droplets",
        "Diffraction at microscopic irregularities"
    ],
    0,
    "Colors in thin films arise from optical path difference $\\Delta = 2 \\mu t \\cos r \\pm \\frac{\\lambda}{2}$ between waves reflected from the front and rear interfaces of the film, leading to constructive interference for specific wavelengths depending on film thickness and viewing angle."
)

add_q(
    "Optics", "Interference",
    "In Newton's rings experiment by reflection, why is the central spot dark?",
    [
        "Due to an extra phase change of $\\pi$ (path change of $\\lambda/2$) upon reflection at the denser glass boundary",
        "Due to zero thickness of the air film causing total absorption",
        "Due to refraction into the lower plate",
        "Due to circular polarization"
    ],
    0,
    "At the point of contact, film thickness is $t = 0$. The ray reflected from the lower curved lens surface suffers no phase shift (reflection from rarer air), while the ray reflected from the flat glass plate suffers a $\\pi$ phase shift (path shift of $\\lambda/2$) because it reflects from a denser medium. Thus, effective path difference at center is $\\Delta = \\lambda/2$, causing destructive interference (dark central spot)."
)

add_q(
    "Optics", "Interference",
    "Two independent monochromatic light sources (such as two identical sodium vapor lamps) do NOT produce a steady interference pattern because:",
    [
        "Their phase difference varies randomly and rapidly with time ($10^8\\text{ times per second}$)",
        "They emit light with different speeds",
        "Their wavelengths cannot be identical",
        "Their amplitudes cancel completely"
    ],
    0,
    "Two independent sources emit light through uncoordinated spontaneous emissions of individual atoms in wave packets of duration $\\sim 10^{-8}\\text{ s}$. The phase difference between them fluctuates randomly billions of times per second, so only the time-averaged intensity $\\langle I \\rangle = I_1 + I_2$ is observed."
)

add_q(
    "Optics", "Interference",
    "In a Lloyd's single mirror interference experiment, the fringe system formed on the screen has:",
    [
        "A central dark fringe",
        "A central bright fringe",
        "Circular fringes",
        "No fringes at all"
    ],
    0,
    "In Lloyd's mirror, one coherent beam comes directly from the source and the other comes after grazing reflection from a denser glass mirror. The reflection introduces an abrupt phase shift of $\\pi$ (path difference $\\lambda/2$), so the central zero-geometric-path fringe is dark instead of bright."
)

# Subtopic 5: Diffraction
add_q(
    "Optics", "Diffraction",
    "In a single-slit Fraunhofer diffraction pattern, the width of the slit is $a$. The angular half-width of the central diffraction maximum for light of wavelength $\\lambda$ is:",
    [
        "$\\frac{\\lambda}{a}$",
        "$\\frac{2\\lambda}{a}$",
        "$\\frac{\\lambda}{2a}$",
        "$\\frac{1.22\\lambda}{a}$"
    ],
    0,
    "The first minimum in single-slit diffraction occurs at $a \\sin\\theta = \\lambda \\implies \\theta \\approx \\frac{\\lambda}{a}$. The angular half-width of the central maximum (from center $\\theta = 0$ to first minimum) is $\\theta = \\frac{\\lambda}{a}$. The total angular width from first minimum on one side to the other is $\\frac{2\\lambda}{a}$."
)

add_q(
    "Optics", "Diffraction",
    "What is the ratio of intensities of the central maximum, first secondary maximum, and second secondary maximum in single-slit Fraunhofer diffraction?",
    [
        "$1 : \\frac{4}{9\\pi^2} : \\frac{4}{25\\pi^2} \\approx 1 : \\frac{1}{22} : \\frac{1}{61}$",
        "$1 : \\frac{1}{4} : \\frac{1}{9}$",
        "$1 : \\frac{1}{2} : \\frac{1}{4}$",
        "$1 : \\frac{1}{9} : \\frac{1}{25}$"
    ],
    0,
    "The intensity is $I(\\beta) = I_0 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$. Secondary maxima occur approximately at $\\beta = \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\dots$ The intensity ratio is $I_0 : I_0 \\left(\\frac{1}{3\\pi/2}\\right)^2 : I_0 \\left(\\frac{1}{5\\pi/2}\\right)^2 = 1 : \\frac{4}{9\\pi^2} : \\frac{4}{25\\pi^2} \\approx 1 : 0.045 : 0.016$."
)

add_q(
    "Optics", "Diffraction",
    "The Fresnel distance $Z_F$ beyond which ray optics ceases to be valid and diffraction spreading becomes significant is given by:",
    [
        "$\\frac{a^2}{\\lambda}$",
        "$\\frac{a}{\\lambda}$",
        "$\\frac{\\lambda}{a^2}$",
        "$\\frac{a^2}{2\\lambda}$"
    ],
    0,
    "Diffraction spreading angle is $\\theta \\approx \\frac{\\lambda}{a}$. Over distance $Z$, beam spreads by $w_{diff} \\approx Z \\theta = \\frac{Z \\lambda}{a}$. Ray optics is valid as long as this spreading is smaller than the aperture size $a$: $\\frac{Z \\lambda}{a} \\approx a \\implies Z_F = \\frac{a^2}{\\lambda}$."
)

add_q(
    "Optics", "Diffraction",
    "A parallel beam of monochromatic light of wavelength $500\\text{ nm}$ is incident on a narrow slit of width $0.1\\text{ mm}$. The screen is placed at $D = 1.0\\text{ m}$. What is the linear width of the central diffraction maximum on the screen?",
    [
        "$10\\text{ mm}$",
        "$5\\text{ mm}$",
        "$2\\text{ mm}$",
        "$1\\text{ mm}$"
    ],
    0,
    "Linear width of central maximum is $W = 2 \\left(\\frac{\\lambda D}{a}\\right) = 2 \\times \\frac{(500 \\times 10^{-9}\\text{ m}) \\times 1.0\\text{ m}}{1.0 \\times 10^{-4}\\text{ m}} = 2 \\times 5 \\times 10^{-3}\\text{ m} = 10 \\times 10^{-3}\\text{ m} = 10\\text{ mm}$."
)

add_q(
    "Optics", "Diffraction",
    "In a diffraction grating having $N$ lines per unit length, the principal maxima for light of wavelength $\\lambda$ at normal incidence are given by the grating equation:",
    [
        "$(a + b) \\sin\\theta = m \\lambda$",
        "$a \\sin\\theta = m \\lambda$",
        "$(a + b) \\sin\\theta = (2m+1)\\frac{\\lambda}{2}$",
        "$(a + b) \\cos\\theta = m \\lambda$"
    ],
    0,
    "For a diffraction grating with grating element $d = a + b$ (where $a$ is slit width and $b$ is opaque spacing), the condition for constructive interference of waves from adjacent slits (principal maxima) is $d \\sin\\theta = (a + b)\\sin\\theta = m \\lambda$ for integer order $m = 0, \\pm 1, \\pm 2, \\dots$"
)

# Subtopic 6: Young's double-slit experiment
add_q(
    "Optics", "Young's double-slit experiment",
    "In a Young's double-slit experiment, when a thin mica sheet of thickness $t$ and refractive index $\\mu$ is placed in front of one of the slits, the entire fringe pattern shifts by distance $y_0$. What is $y_0$?",
    [
        "$\\frac{D}{d} (\\mu - 1) t$",
        "$\\frac{d}{D} (\\mu - 1) t$",
        "$\\frac{D}{d} \\mu t$",
        "$\\frac{D}{2d} (\\mu - 1) t$"
    ],
    0,
    "Introducing the mica sheet introduces an extra optical path difference $\\Delta x = (\\mu - 1) t$. The central bright fringe shifts to the position where total optical path difference vanishes: $\\frac{y_0 d}{D} = (\\mu - 1) t \\implies y_0 = \\frac{D}{d} (\\mu - 1) t$."
)

add_q(
    "Optics", "Young's double-slit experiment",
    "In YDSE with slit separation $d$ and screen distance $D$, the angular fringe width is $\\beta_\\theta = 0.20^\\circ$ in air. If the entire apparatus is immersed in water ($\\mu = 4/3$), what is the new angular fringe width?",
    [
        "$0.15^\\circ$",
        "$0.20^\\circ$",
        "$0.27^\\circ$",
        "$0.10^\\circ$"
    ],
    0,
    "Angular fringe width is $\\beta_\\theta = \\frac{\\lambda}{d}$. In water, wavelength decreases to $\\lambda' = \\frac{\\lambda}{\\mu}$. Therefore, $\\beta_\\theta' = \\frac{\\beta_\\theta}{\\mu} = \\frac{0.20^\\circ}{4/3} = 0.20^\\circ \\times \\frac{3}{4} = 0.15^\\circ$."
)

add_q(
    "Optics", "Young's double-slit experiment",
    "If one of the two slits in a YDSE is covered with an opaque shield so that only one slit remains open, what is observed on the screen?",
    [
        "The interference fringes disappear and a single-slit diffraction pattern is observed",
        "Uniform dark screen",
        "Twice as many interference fringes",
        "Sharp point of light"
    ],
    0,
    "Interference requires coherent superposition of waves originating from two separate apertures. When one slit is blocked, double-slit interference fringes disappear completely, leaving behind the smooth intensity distribution of a single-slit diffraction pattern."
)

add_q(
    "Optics", "Young's double-slit experiment",
    "In YDSE using white light, the central fringe is:",
    [
        "White, bordered by reddish fringes on outer edges and violet on inner edges",
        "Completely dark",
        "Monochromatic red",
        "Monochromatic violet"
    ],
    0,
    "At the geometric center $y = 0$, the path difference is zero for all wavelengths of white light simultaneously ($\\Delta x = 0$). All colors interfere constructively, forming a bright white central fringe. Away from center, fringe widths $\\beta = \\frac{\\lambda D}{d}$ differ for different colors, so the violet fringes appear first and red fringes appear farthest out."
)

add_q(
    "Optics", "Young's double-slit experiment",
    "In YDSE, the intensity at the central maximum is $I_0$. What is the intensity at a point on the screen where the path difference is $\\lambda/6$?",
    [
        "$\\frac{3}{4} I_0$",
        "$\\frac{1}{2} I_0$",
        "$\\frac{1}{4} I_0$",
        "$\\frac{\\sqrt{3}}{2} I_0$"
    ],
    0,
    "Path difference $\\Delta x = \\lambda/6$ corresponds to phase difference $\\phi = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{6}\\right) = \\frac{\\pi}{3} = 60^\\circ$. The intensity is $I = I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right) = I_0 \\cos^2(30^\\circ) = I_0 \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4} I_0$."
)

# Subtopic 7: Total internal reflection and prisms
add_q(
    "Optics", "Total internal reflection and prisms",
    "For an equilateral glass prism of refractive index $\\mu = \\sqrt{3}$, what is the angle of minimum deviation $\\delta_{\\min}$?",
    [
        "$60^\\circ$",
        "$30^\\circ$",
        "$45^\\circ$",
        "$90^\\circ$"
    ],
    0,
    "For an equilateral prism, $A = 60^\\circ$. The prism formula is $\\mu = \\frac{\\sin\\left(\\frac{A + \\delta_{\\min}}{2}\\right)}{\\sin(A/2)}$. Substituting: $\\sqrt{3} = \\frac{\\sin\\left(\\frac{60^\\circ + \\delta_{\\min}}{2}\\right)}{\\sin 30^\\circ} = \\frac{\\sin(30^\\circ + \\delta_{\\min}/2)}{1/2} \\implies \\sin(30^\\circ + \\delta_{\\min}/2) = \\frac{\\sqrt{3}}{2} \\implies 30^\\circ + \\frac{\\delta_{\\min}}{2} = 60^\\circ \\implies \\frac{\\delta_{\\min}}{2} = 30^\\circ \\implies \\delta_{\\min} = 60^\\circ$."
)

add_q(
    "Optics", "Total internal reflection and prisms",
    "An optical fiber consists of a cylindrical core of refractive index $\\mu_1$ surrounded by a cladding of refractive index $\\mu_2$ ($\\mu_1 > \\mu_2$). What is the numerical aperture (NA) of the fiber for light entering from air?",
    [
        "$\\sqrt{\\mu_1^2 - \\mu_2^2}$",
        "$\\mu_1 - \\mu_2$",
        "$\\sqrt{\\mu_1^2 + \\mu_2^2}$",
        "$\\frac{\\mu_1}{\\mu_2}$"
    ],
    0,
    "For total internal reflection at the core-cladding boundary: $\\sin\\theta_c = \\mu_2 / \\mu_1$. At the air-core entrance face: $\\sin i_{\\max} = \\mu_1 \\sin(90^\\circ - \\theta_c) = \\mu_1 \\cos\\theta_c = \\mu_1 \\sqrt{1 - \\sin^2\\theta_c} = \\mu_1 \\sqrt{1 - \\frac{\\mu_2^2}{\\mu_1^2}} = \\sqrt{\\mu_1^2 - \\mu_2^2}$. The numerical aperture is $NA = \\sin i_{\\max} = \\sqrt{\\mu_1^2 - \\mu_2^2}$."
)

add_q(
    "Optics", "Total internal reflection and prisms",
    "A ray of light is incident normally on one face of a right-angled isosceles prism made of crown glass ($\\mu = 1.5$). What happens at the hypotenuse face inside the prism?",
    [
        "Total internal reflection occurs because the angle of incidence ($45^\\circ$) exceeds the critical angle ($41.8^\\circ$)",
        "The ray refracts out at $90^\\circ$",
        "The ray is absorbed completely",
        "Partial reflection and partial transmission occur equally"
    ],
    0,
    "Critical angle for glass with $\\mu = 1.5$ is $\\theta_c = \\sin^{-1}(1/1.5) = \\sin^{-1}(2/3) \\approx 41.8^\\circ$. At the hypotenuse face, the angle of incidence is $45^\\circ$. Since $45^\\circ > 41.8^\\circ$, total internal reflection occurs, turning the ray through $90^\\circ$ (Porro prism)."
)

add_q(
    "Optics", "Total internal reflection and prisms",
    "What is the condition for achromatism of two thin prisms of refracting angles $A_1$ and $A_2$ with dispersive powers $\\omega_1$ and $\\omega_2$ combined to produce deviation without dispersion?",
    [
        "$\\omega_1 \\delta_1 + \\omega_2 \\delta_2 = 0$",
        "$\\delta_1 = \\delta_2$",
        "$\\omega_1 = \\omega_2$",
        "$\\omega_1 A_1 = \\omega_2 A_2$"
    ],
    0,
    "Angular dispersion of a thin prism is $\\theta = \\omega \\delta = (\\mu_v - \\mu_r)A$. For the combination to produce zero net dispersion: $\\theta_1 + \\theta_2 = 0 \\implies \\omega_1 \\delta_1 + \\omega_2 \\delta_2 = 0$, where $\\delta = (\\mu - 1)A$."
)

add_q(
    "Optics", "Total internal reflection and prisms",
    "A ray of light passes through a prism of angle $A$ such that the angle of incidence equals the angle of emergence ($i = e = \\frac{3}{4} A$). What is the angle of deviation $\\delta$?",
    [
        "$A/2$",
        "$A$",
        "$2 A$",
        "$A/4$"
    ],
    0,
    "For any prism: $i + e = A + \\delta$. With $i = e = \\frac{3}{4} A$: $\\frac{3}{4} A + \\frac{3}{4} A = A + \\delta \\implies \\frac{3}{2} A = A + \\delta \\implies \\delta = \\frac{1}{2} A$."
)

# Subtopic 8: Mirror formula and combination of lenses
add_q(
    "Optics", "Mirror formula and combination of lenses",
    "An object is placed at distance $u = 30\\text{ cm}$ in front of a concave mirror of focal length $f = 20\\text{ cm}$. What is the nature and magnification of the image?",
    [
        "Real, inverted, magnification $m = -2$",
        "Virtual, erect, magnification $m = +2$",
        "Real, inverted, magnification $m = -0.5$",
        "Real, erect, magnification $m = -1$"
    ],
    0,
    "Using Cartesian sign convention: $u = -30\\text{ cm}, f = -20\\text{ cm}$. Mirror formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = -\\frac{1}{20} - \\left(-\\frac{1}{30}\\right) = -\\frac{1}{20} + \\frac{1}{30} = -\\frac{1}{60} \\implies v = -60\\text{ cm}$. Magnification is $m = -\\frac{v}{u} = -\\frac{-60}{-30} = -2$. The negative sign indicates a real, inverted image with twice the height of the object."
)

add_q(
    "Optics", "Mirror formula and combination of lenses",
    "Two thin convex lenses of focal lengths $f_1 = 20\\text{ cm}$ and $f_2 = 30\\text{ cm}$ are placed in contact coaxially. What is the power and equivalent focal length of the combination?",
    [
        "$P = +8.33\\text{ D}, F = +12\\text{ cm}$",
        "$P = +5.0\\text{ D}, F = +20\\text{ cm}$",
        "$P = +10\\text{ D}, F = +10\\text{ cm}$",
        "$P = +6.67\\text{ D}, F = +15\\text{ cm}$"
    ],
    0,
    "Equivalent focal length of two thin lenses in contact is $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} + \\frac{1}{30} = \\frac{5}{60} = \\frac{1}{12} \\implies F = +12\\text{ cm} = +0.12\\text{ m}$. Total power is $P = \\frac{1}{F(\\text{m})} = \\frac{1}{0.12} = +8.33\\text{ D}$."
)

add_q(
    "Optics", "Mirror formula and combination of lenses",
    "A convex lens of focal length $f = 20\\text{ cm}$ made of glass ($\\mu = 1.5$) has its back curved surface silvered to act as a mirror. What is the effective focal length of the silvered lens system?",
    [
        "$-5\\text{ cm}$ (acts as concave mirror)",
        "$+5\\text{ cm}$ (acts as convex mirror)",
        "$-10\\text{ cm}$",
        "$+10\\text{ cm}$"
    ],
    0,
    "Power of silvered lens system is $P = 2 P_L + P_M$. For equiconvex lens: $f_L = 20\\text{ cm} \\implies R = 20\\text{ cm}$. When back surface is silvered, mirror focal length is $f_M = -R/2 = -10\\text{ cm}$. Then $P = 2 \\left(\\frac{1}{f_L}\\right) + \\left(-\\frac{1}{f_M}\\right) = 2 \\left(\\frac{1}{20}\\right) + \\left(-\\frac{1}{-10}\\right) = \\frac{1}{10} + \\frac{1}{10} = \\frac{2}{10} = \\frac{1}{5}\\text{ cm}^{-1}$. Effective focal length is $F = -\\frac{1}{P} = -5\\text{ cm}$, behaving as a concave mirror of focal length $5\\text{ cm}$."
)

add_q(
    "Optics", "Mirror formula and combination of lenses",
    "Two thin lenses of focal lengths $f_1$ and $f_2$ separated by distance $d$ satisfy the condition for achromatism if:",
    [
        "$d = \\frac{f_1 + f_2}{2}$",
        "$d = f_1 + f_2$",
        "$d = \\sqrt{f_1 f_2}$",
        "$d = f_1 - f_2$"
    ],
    0,
    "When two lenses of the same material are separated by distance $d$, chromatic aberration is eliminated if their separation equals the arithmetic mean of their focal lengths: $d = \\frac{f_1 + f_2}{2}$ (Huygens eyepiece design)."
)

add_q(
    "Optics", "Mirror formula and combination of lenses",
    "A convex mirror of focal length $f$ produces an image of size $\\frac{1}{n}$-th of the object. What is the distance of the object from the mirror?",
    [
        "$(n - 1) f$",
        "$(n + 1) f$",
        "$\\frac{f}{n - 1}$",
        "$\\frac{f}{n + 1}$"
    ],
    0,
    "For a convex mirror, magnification is positive: $m = +\\frac{1}{n} = \\frac{f}{f - u}$. Rearranging: $f - u = n f \\implies -u = n f - f = (n - 1) f \\implies u = -(n - 1) f$. Distance of object is $(n - 1) f$."
)

# Subtopic 9: Polarization of light (Brewster's law)
add_q(
    "Optics", "Polarization of light (Brewster's law)",
    "According to Brewster's law, when unpolarized light is incident at Brewster's angle $i_p$ on a dielectric boundary of refractive index $\\mu$, which of the following occurs?",
    [
        "The reflected light is completely linearly polarized with electric field perpendicular to the plane of incidence, and $\\tan i_p = \\mu$",
        "The refracted light is completely polarized",
        "The reflected light is circularly polarized",
        "$\\sin i_p = \\mu$"
    ],
    0,
    "Brewster's law states that $\\tan i_p = \\mu$. At this polarizing angle of incidence, the reflected ray and refracted ray are at $90^\\circ$ to each other. The reflected beam is $100\\%$ linearly polarized with its electric field vector vibrating perpendicular to the plane of incidence (parallel to the reflecting surface)."
)

add_q(
    "Optics", "Polarization of light (Brewster's law)",
    "According to Malus's law, when completely linearly polarized light of intensity $I_0$ passes through an analyzer whose transmission axis is inclined at angle $\\theta$ to the polarization axis, the transmitted intensity is:",
    [
        "$I = I_0 \\cos^2\\theta$",
        "$I = I_0 \\cos\\theta$",
        "$I = I_0 \\sin^2\\theta$",
        "$I = \\frac{1}{2} I_0 \\cos^2\\theta$"
    ],
    0,
    "Malus's law states that the transmitted intensity is proportional to the square of the transmitted amplitude component $E = E_0 \\cos\\theta$: $I = I_0 \\cos^2\\theta$."
)

add_q(
    "Optics", "Polarization of light (Brewster's law)",
    "Unpolarized light of intensity $I_0$ passes through two polarizers $P_1$ and $P_2$ whose axes are crossed at $90^\\circ$ (zero transmitted intensity). A third polarizer $P_3$ with axis at $45^\\circ$ to both is inserted between them. What is the final transmitted intensity?",
    [
        "$I_0 / 8$",
        "$I_0 / 4$",
        "$I_0 / 16$",
        "$0$"
    ],
    0,
    "After $P_1$, unpolarized light becomes linearly polarized with intensity $I_1 = I_0 / 2$. After $P_3$ at $45^\\circ$, intensity is $I_2 = I_1 \\cos^2(45^\\circ) = \\frac{I_0}{2} \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{I_0}{4}$. After $P_2$ (which is at $45^\\circ$ relative to $P_3$), intensity is $I_3 = I_2 \\cos^2(45^\\circ) = \\frac{I_0}{4} \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{I_0}{8}$."
)

add_q(
    "Optics", "Polarization of light (Brewster's law)",
    "A quarter-wave plate ($\\lambda/4$) introduces a phase difference of $\\pi/2$ between the ordinary and extraordinary rays. What is its minimum physical thickness $d$ for light of wavelength $\\lambda$?",
    [
        "$\\frac{\\lambda}{4 |\\mu_o - \\mu_e|}$",
        "$\\frac{\\lambda}{2 |\\mu_o - \\mu_e|}$",
        "$\\frac{\\lambda}{|\\mu_o - \\mu_e|}$",
        "$\\frac{\\lambda}{4 (\\mu_o + \\mu_e)}$"
    ],
    0,
    "Path difference introduced by a birefringent plate of thickness $d$ is $\\Delta = d |\\mu_o - \\mu_e|$. For a quarter-wave plate, the path difference must be $\\lambda / 4$: $d |\\mu_o - \\mu_e| = \\frac{\\lambda}{4} \\implies d = \\frac{\\lambda}{4 |\\mu_o - \\mu_e|}$."
)

add_q(
    "Optics", "Polarization of light (Brewster's law)",
    "When unpolarized sunlight is scattered by air molecules in the Earth's atmosphere (Rayleigh scattering), the scattered light viewed at $90^\\circ$ to the incident sunbeam is:",
    [
        "Completely linearly polarized",
        "Completely unpolarized",
        "Circularly polarized",
        "Elliptically polarized"
    ],
    0,
    "Unpolarized sunlight induces electric dipole oscillations in air molecules in the plane perpendicular to the incident ray. An observer viewing at $90^\\circ$ to the solar beam sees only the dipole oscillations perpendicular to the scattering plane, making the scattered light $100\\%$ linearly polarized."
)

# ==========================================
# CHAPTER 17: Dual Nature of Matter and Radiation (5 subtopics * 5 = 25 questions)
# ==========================================

# Subtopic 1: Photoelectric effect
add_q(
    "Dual Nature of Matter and Radiation", "Photoelectric effect",
    "In a photoelectric experiment, when the frequency of incident radiation is doubled, the maximum kinetic energy of the emitted photoelectrons:",
    [
        "More than doubles",
        "Exactly doubles",
        "Remains unchanged",
        "Increases by less than double"
    ],
    0,
    "By Einstein's equation: $K_{\\max, 1} = h \\nu - \\Phi$. When frequency is doubled ($2\\nu$): $K_{\\max, 2} = 2 h \\nu - \\Phi = 2(h \\nu - \\Phi) + \\Phi = 2 K_{\\max, 1} + \\Phi$. Since work function $\\Phi > 0$, we have $K_{\\max, 2} > 2 K_{\\max, 1}$, so maximum kinetic energy more than doubles."
)

add_q(
    "Dual Nature of Matter and Radiation", "Photoelectric effect",
    "Which experimental observation in the photoelectric effect directly contradicts the classical wave theory of light?",
    [
        "Instantaneous emission of electrons without measurable time lag ($< 10^{-9}\\text{ s}$) even at extremely low light intensities",
        "Photoelectric current increases with light intensity",
        "Photoelectrons have a distribution of kinetic energies",
        "Different metals have different work functions"
    ],
    0,
    "Classical wave theory predicts that energy is spread uniformly across the wavefront, so at low intensities, an electron would need hours or days to accumulate sufficient energy to escape. Experiments show emission is instantaneous ($< 10^{-9}\\text{ s}$), demonstrating localized photon-electron collisions."
)

add_q(
    "Dual Nature of Matter and Radiation", "Photoelectric effect",
    "In a photoelectric setup, the stopping potential $V_0$ is plotted against the frequency $\\nu$ of incident light. The slope of this straight-line graph is:",
    [
        "$h / e$",
        "$h$",
        "$e / h$",
        "$h e$"
    ],
    0,
    "From $e V_0 = h \\nu - \\Phi \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi}{e}$. Comparing with $y = m x + c$, the slope of the line is $m = \\frac{h}{e}$, which is a universal constant independent of the target metal."
)

add_q(
    "Dual Nature of Matter and Radiation", "Photoelectric effect",
    "The threshold wavelength for photoelectric emission from a metal surface is $\\lambda_0 = 6000\\text{ \\AA}$. What is the stopping potential when irradiated with light of wavelength $\\lambda = 4000\\text{ \\AA}$? (Take $h c \\approx 12400\\text{ eV}\\cdot\\text{\\AA}$)",
    [
        "$1.03\\text{ V}$",
        "$2.07\\text{ V}$",
        "$3.10\\text{ V}$",
        "$0.52\\text{ V}$"
    ],
    0,
    "Work function is $\\Phi = \\frac{h c}{\\lambda_0} = \\frac{12400}{6000} \\approx 2.07\\text{ eV}$. Photon energy is $E = \\frac{h c}{\\lambda} = \\frac{12400}{4000} = 3.10\\text{ eV}$. Maximum kinetic energy is $K_{\\max} = E - \\Phi = 3.10 - 2.07 = 1.03\\text{ eV}$. Stopping potential is $V_0 = \\frac{K_{\\max}}{e} = 1.03\\text{ V}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Photoelectric effect",
    "When a point source of light is moved from distance $d = 1\\text{ m}$ to $d = 2\\text{ m}$ from a photocell, the saturation photoelectric current and the stopping potential change as:",
    [
        "Saturation current decreases to one-fourth, stopping potential remains unchanged",
        "Both decrease to one-fourth",
        "Saturation current halves, stopping potential halves",
        "Both remain unchanged"
    ],
    0,
    "Light intensity follows the inverse square law: $I \\propto 1/d^2$. Moving from $1\\text{ m}$ to $2\\text{ m}$ reduces intensity to $(1/2)^2 = 1/4$, so the number of photons per second and saturation current decrease to one-fourth. Stopping potential depends only on photon frequency $\\nu$ ($e V_0 = h \\nu - \\Phi$), which is unchanged, so stopping potential remains constant."
)

# Subtopic 2: de Broglie wavelength
add_q(
    "Dual Nature of Matter and Radiation", "de Broglie wavelength",
    "What is the de Broglie wavelength of an electron accelerated from rest through a potential difference $V$ (in volts)?",
    [
        "$\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$",
        "$\\lambda = \\frac{0.286}{\\sqrt{V}}\\text{ nm}$",
        "$\\lambda = \\frac{1.227}{V}\\text{ nm}$",
        "$\\lambda = \\frac{12.27}{V}\\text{ nm}$"
    ],
    0,
    "de Broglie wavelength is $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2 m e V}}$. Substituting $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m = 9.109 \\times 10^{-31}\\text{ kg}$, $e = 1.602 \\times 10^{-19}\\text{ C}$: $\\lambda = \\frac{1.227 \\times 10^{-9}}{\\sqrt{V}}\\text{ m} = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "de Broglie wavelength",
    "A thermal neutron has kinetic energy $K = \\frac{3}{2} k_B T$ at room temperature $T = 300\\text{ K}$. What is the order of magnitude of its de Broglie wavelength?",
    [
        "$1.8\\text{ \\AA} \\sim 10^{-10}\\text{ m}$ (comparable to crystal lattice spacing)",
        "$10^{-15}\\text{ m}$",
        "$10^{-6}\\text{ m}$",
        "$10^{-3}\\text{ m}$"
    ],
    0,
    "For mass of neutron $m_n = 1.675 \\times 10^{-27}\\text{ kg}$, $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$, $T = 300\\text{ K}$: $p = \\sqrt{3 m_n k_B T} \\approx 3.7 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$. Then $\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{3.7 \\times 10^{-24}} \\approx 1.8 \\times 10^{-10}\\text{ m} = 1.8\\text{ \\AA}$. Because this matches atomic spacings in crystal lattices, thermal neutron diffraction is widely used for crystal structure determination."
)

add_q(
    "Dual Nature of Matter and Radiation", "de Broglie wavelength",
    "A photon and an electron have the exact same wavelength $\\lambda$. What is the ratio of the kinetic energy of the electron $K_e$ to the energy of the photon $E_{ph}$?",
    [
        "$\\frac{h}{2 m c \\lambda}$",
        "$\\frac{2 m c \\lambda}{h}$",
        "$\\frac{h c}{\\lambda}$",
        "$1$"
    ],
    0,
    "For the photon: $E_{ph} = \\frac{h c}{\\lambda}$. For the electron: momentum is $p = \\frac{h}{\\lambda}$, so non-relativistic kinetic energy is $K_e = \\frac{p^2}{2 m} = \\frac{h^2}{2 m \\lambda^2}$. The ratio is $\\frac{K_e}{E_{ph}} = \\frac{h^2 / (2 m \\lambda^2)}{h c / \\lambda} = \\frac{h}{2 m c \\lambda} = \\frac{v_e}{2 c}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "de Broglie wavelength",
    "An alpha particle ($m_\\alpha = 4 m_p, q_\\alpha = 2 e$) and a proton ($m_p, q_p = e$) are accelerated through the same potential difference $V$. What is the ratio of their de Broglie wavelengths $\\lambda_p / \\lambda_\\alpha$?",
    [
        "$\\sqrt{8} = 2\\sqrt{2}$",
        "$2$",
        "$4$",
        "$\\sqrt{2}$"
    ],
    0,
    "Formula is $\\lambda = \\frac{h}{\\sqrt{2 m q V}} \\propto \\frac{1}{\\sqrt{m q}}$. The ratio is $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{4 \\times 2}{1 \\times 1}} = \\sqrt{8} = 2\\sqrt{2}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "de Broglie wavelength",
    "If the momentum of a particle is increased by $100\\%$, the percentage decrease in its de Broglie wavelength is:",
    [
        "$50\\%$",
        "$100\\%$",
        "$75\\%$",
        "$25\\%$"
    ],
    0,
    "New momentum is $p' = 2 p$. New de Broglie wavelength is $\\lambda' = \\frac{h}{p'} = \\frac{h}{2 p} = \\frac{\\lambda}{2}$. The percentage decrease is $\\frac{\\lambda - \\lambda'}{\\lambda} \\times 100\\% = \\left(1 - \\frac{1}{2}\\right) \\times 100\\% = 50\\%$."
)

# Subtopic 3: Bohr's model
add_q(
    "Dual Nature of Matter and Radiation", "Bohr's model",
    "In Bohr's model of the hydrogen atom, the orbital radius $r_n$ and orbital velocity $v_n$ of the electron scale with principal quantum number $n$ as:",
    [
        "$r_n \\propto n^2$ and $v_n \\propto 1/n$",
        "$r_n \\propto n$ and $v_n \\propto 1/n^2$",
        "$r_n \\propto n^2$ and $v_n \\propto n$",
        "$r_n \\propto 1/n$ and $v_n \\propto n^2$"
    ],
    0,
    "Bohr's quantization postulate is $m v r = \\frac{n h}{2\\pi}$. Electrostatic force provides centripetal acceleration: $\\frac{m v^2}{r} = \\frac{e^2}{4\\pi \\varepsilon_0 r^2}$. Solving these two equations gives $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m e^2} \\propto n^2$, and $v_n = \\frac{e^2}{2 \\varepsilon_0 h n} \\propto \\frac{1}{n}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Bohr's model",
    "What is the orbital magnetic dipole moment $\\mu_n$ of the electron in the $n$-th Bohr orbit of hydrogen in terms of the Bohr magneton $\\mu_B = \\frac{e \\hbar}{2 m}$?",
    [
        "$\\mu_n = n \\mu_B$",
        "$\\mu_n = n^2 \\mu_B$",
        "$\\mu_n = \\frac{\\mu_B}{n}$",
        "$\\mu_n = \\mu_B$"
    ],
    0,
    "Magnetic dipole moment is $\\mu = I A = \\left(\\frac{e}{T}\\right)(\\pi r^2) = \\frac{e v}{2\\pi r}(\\pi r^2) = \\frac{e v r}{2} = \\frac{e L}{2 m}$. Since orbital angular momentum is quantized as $L = n \\hbar$: $\\mu_n = \\frac{e (n \\hbar)}{2 m} = n \\left(\\frac{e \\hbar}{2 m}\\right) = n \\mu_B$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Bohr's model",
    "de Broglie's hypothesis explains Bohr's angular momentum quantization postulate $m v r = \\frac{n h}{2\\pi}$ by requiring that:",
    [
        "The circumference of the electron's orbit must equal an integral number of de Broglie wavelengths ($2\\pi r = n \\lambda$)",
        "The radius of the orbit must equal $n \\lambda$",
        "The area of the orbit must equal $n \\lambda^2$",
        "The photon emitted must have wavelength $\\lambda$"
    ],
    0,
    "For an electron wave orbiting a nucleus to form a stable, non-destructive standing wave, the orbit circumference must be an integral multiple of its de Broglie wavelength: $2\\pi r = n \\lambda = n \\left(\\frac{h}{p}\\right) = n \\left(\\frac{h}{m v}\\right) \\implies m v r = \\frac{n h}{2\\pi} = n \\hbar$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Bohr's model",
    "In a hydrogen-like atom of atomic number $Z$, the transition from $n = 2$ to $n = 1$ emits a photon of energy $40.8\\text{ eV}$. What is the atomic number $Z$?",
    [
        "$Z = 2$ ($He^+$)",
        "$Z = 3$ ($Li^{2+}$)",
        "$Z = 1$ ($H$)",
        "$Z = 4$ ($Be^{3+}$)"
    ],
    0,
    "Energy of transition in hydrogen-like atom is $\\Delta E = 13.6 Z^2 \\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = 13.6 Z^2 \\left(\\frac{3}{4}\\right) = 10.2 Z^2\\text{ eV}$. Given $\\Delta E = 40.8\\text{ eV}$: $10.2 Z^2 = 40.8 \\implies Z^2 = 4 \\implies Z = 2$. The ion is singly ionized helium ($He^+$)."
)

add_q(
    "Dual Nature of Matter and Radiation", "Bohr's model",
    "According to Bohr's correspondence principle, quantum mechanical predictions must converge to classical physics predictions in the limit of:",
    [
        "Very large quantum numbers ($n \\to \\infty$)",
        "Ground state ($n = 1$)",
        "Absolute zero temperature ($T \\to 0$)",
        "Zero Planck constant ($h \\to \\infty$)"
    ],
    0,
    "Bohr's correspondence principle states that quantum mechanics reproduces classical physics in the limit of large quantum numbers ($n \\to \\infty$). For example, the orbital transition frequency $\\nu_{rad} = \\frac{E_{n+1} - E_n}{h}$ approaches the classical orbital revolution frequency $f_{orb} = \\frac{v}{2\\pi r}$ when $n \\gg 1$."
)

# Subtopic 4: Wave-particle duality
add_q(
    "Dual Nature of Matter and Radiation", "Wave-particle duality",
    "The Davisson-Germer experiment conclusively confirmed the wave nature of electrons by observing:",
    [
        "Constructive Bragg diffraction of reflected electrons from the crystal planes of a nickel target",
        "Continuous absorption of electrons by nickel",
        "Photoelectric emission of secondary electrons",
        "Pair production"
    ],
    0,
    "In 1927, Clinton Davisson and Lester Germer scattered slow electrons ($54\\text{ eV}$) from a nickel single crystal and observed a pronounced diffraction peak at scattering angle $\\phi = 50^\\circ$, matching Bragg's diffraction law $2 d \\sin\\theta = \\lambda$ for the calculated de Broglie wavelength ($1.66\\text{ \\AA}$)."
)

add_q(
    "Dual Nature of Matter and Radiation", "Wave-particle duality",
    "According to Heisenberg's uncertainty principle, the product of uncertainties in position and momentum for a particle is fundamentally bounded by:",
    [
        "$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$",
        "$\\Delta x \\cdot \\Delta p_x = 0$",
        "$\\Delta x \\cdot \\Delta p_x \\le \\hbar$",
        "$\\Delta x \\cdot \\Delta p_x \\ge h^2$"
    ],
    0,
    "Heisenberg's uncertainty principle, derived rigorously from the non-commutative operator algebra $[\\hat{x}, \\hat{p}_x] = i \\hbar$, establishes the fundamental quantum limit $\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Wave-particle duality",
    "Why does an electron not collapse into the atomic nucleus despite strong electrostatic Coulomb attraction?",
    [
        "Confining an electron within a nuclear radius ($10^{-15}\\text{ m}$) would demand enormous zero-point momentum and kinetic energy ($> 100\\text{ MeV}$) by the uncertainty principle",
        "The strong nuclear force repels electrons",
        "Electrons have no charge inside the nucleus",
        "Centrifugal force is infinite"
    ],
    0,
    "If an electron were confined inside a nucleus of size $\\Delta x \\sim 10^{-14}-10^{-15}\\text{ m}$, the uncertainty principle would require $\\Delta p \\ge \\frac{\\hbar}{\\Delta x} \\sim 10^{-20}\\text{ kg}\\cdot\\text{m/s}$, giving relativistic kinetic energy $K \\approx p c > 20-100\\text{ MeV}$, which vastly exceeds the electrostatic binding well ($\\sim -1\\text{ MeV}$). Thus quantum confinement prevents nuclear collapse."
)

add_q(
    "Dual Nature of Matter and Radiation", "Wave-particle duality",
    "In Compton scattering, a photon of wavelength $\\lambda$ collides with a stationary electron. The Compton wavelength shift $\\Delta \\lambda$ at scattering angle $\\theta$ is:",
    [
        "$\\Delta \\lambda = \\frac{h}{m_e c} (1 - \\cos\\theta)$",
        "$\\Delta \\lambda = \\frac{h}{m_e c} (1 + \\cos\\theta)$",
        "$\\Delta \\lambda = \\frac{h}{2 m_e c} \\sin\\theta$",
        "$\\Delta \\lambda = \\frac{h c}{m_e} (1 - \\cos\\theta)$"
    ],
    0,
    "Applying relativistic energy and momentum conservation to the elastic photon-electron collision yields the Compton shift formula $\\Delta \\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\lambda_C (1 - \\cos\\theta)$, where $\\lambda_C = 0.0243\\text{ \\AA}$ is the Compton wavelength."
)

add_q(
    "Dual Nature of Matter and Radiation", "Wave-particle duality",
    "In a single-photon double-slit experiment where photons are fired one by one at intervals of several seconds, what is recorded on the detector over time?",
    [
        "Individual localized dots accumulate over time to build the statistical double-slit wave interference pattern",
        "Two separate single bands behind the slits",
        "A uniform grey blur without any fringe structure",
        "Photons split into halves at the slits"
    ],
    0,
    "Each photon arrives as an indivisible particle (localized single detection dot on the CCD/film). However, the probability distribution governing where each photon lands is dictated by the wave interference of its probability amplitude wave passing through both slits, gradually revealing the full interference fringe pattern."
)

# Subtopic 5: Einstein's photoelectric equation and work function
add_q(
    "Dual Nature of Matter and Radiation", "Einstein's photoelectric equation and work function",
    "Einstein received the 1921 Nobel Prize in Physics specifically for:",
    [
        "His discovery of the law of the photoelectric effect",
        "The Special Theory of Relativity",
        "The General Theory of Relativity",
        "Bose-Einstein Condensation"
    ],
    0,
    "The Nobel Prize in Physics 1921 was awarded to Albert Einstein 'for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect' ($E = h \\nu = K_{\\max} + \\Phi$)."
)

add_q(
    "Dual Nature of Matter and Radiation", "Einstein's photoelectric equation and work function",
    "The work function of cesium is $\\Phi = 2.14\\text{ eV}$. What is its threshold frequency $\\nu_0$? (Take $h = 4.136 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}$)",
    [
        "$5.17 \\times 10^{14}\\text{ Hz}$",
        "$2.58 \\times 10^{14}\\text{ Hz}$",
        "$1.03 \\times 10^{15}\\text{ Hz}$",
        "$6.24 \\times 10^{14}\\text{ Hz}$"
    ],
    0,
    "Threshold frequency is $\\nu_0 = \\frac{\\Phi}{h} = \\frac{2.14\\text{ eV}}{4.136 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}} \\approx 5.17 \\times 10^{14}\\text{ Hz}$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Einstein's photoelectric equation and work function",
    "Monochromatic light of frequency $\\nu = 1.5 \\nu_0$ is incident on a photocathode. If the frequency is halved and intensity is doubled, what will be the photoelectric current?",
    [
        "Zero",
        "Doubled",
        "Halved",
        "Quadrupled"
    ],
    0,
    "When the frequency is halved: $\\nu' = \\frac{1.5 \\nu_0}{2} = 0.75 \\nu_0 < \\nu_0$. Because the new incident frequency is strictly below the threshold frequency $\\nu_0$, no photoelectrons can be emitted regardless of how large the light intensity is. Therefore, photoelectric current is zero."
)

add_q(
    "Dual Nature of Matter and Radiation", "Einstein's photoelectric equation and work function",
    "When a metallic surface is illuminated with light of wavelength $\\lambda$, the stopping potential is $3 V_0$. When illuminated with wavelength $2\\lambda$, the stopping potential is $V_0$. What is the threshold wavelength $\\lambda_0$ for this metal?",
    [
        "$4\\lambda$",
        "$3\\lambda$",
        "$5\\lambda$",
        "$6\\lambda$"
    ],
    0,
    "From Einstein's photoelectric equation: (1) $3 e V_0 = \\frac{h c}{\\lambda} - \\Phi$; (2) $e V_0 = \\frac{h c}{2\\lambda} - \\Phi$. Multiplying (2) by 3: $3 e V_0 = \\frac{3 h c}{2\\lambda} - 3\\Phi$. Equating to (1): $\\frac{h c}{\\lambda} - \\Phi = \\frac{3 h c}{2\\lambda} - 3\\Phi \\implies 2\\Phi = \\frac{3 h c}{2\\lambda} - \\frac{h c}{\\lambda} = \\frac{h c}{2\\lambda} \\implies \\Phi = \\frac{h c}{4\\lambda}$. Since $\\Phi = \\frac{h c}{\\lambda_0}$, we have $\\lambda_0 = 4\\lambda$."
)

add_q(
    "Dual Nature of Matter and Radiation", "Einstein's photoelectric equation and work function",
    "A photon of energy $E$ knocks out a photoelectron with maximum speed $v$. If the photon energy is increased to $2 E$, the new maximum speed $v'$ of photoelectrons will be:",
    [
        "$v' > \\sqrt{2} v$",
        "$v' = \\sqrt{2} v$",
        "$v' = 2 v$",
        "$v' < \\sqrt{2} v$"
    ],
    0,
    "Initially: $\\frac{1}{2} m v^2 = E - \\Phi$. When energy is $2E$: $\\frac{1}{2} m (v')^2 = 2 E - \\Phi = 2(E - \\Phi) + \\Phi = 2\\left(\\frac{1}{2} m v^2\\right) + \\Phi = m v^2 + \\Phi$. Since $\\Phi > 0$, $(v')^2 > 2 v^2 \\implies v' > \\sqrt{2} v$."
)

# ==========================================
# CHAPTER 18: Atoms and Nuclei (7 subtopics * 5 = 35 questions)
# ==========================================

# Subtopic 1: Atomic models
add_q(
    "Atoms and Nuclei", "Atomic models",
    "In Thomson's 'plum pudding' model of the atom, electrons were assumed to:",
    [
        "Be embedded uniformly in a continuous sphere of positive charge",
        "Orbit around a dense massive nucleus",
        "Form standing waves around the nucleus",
        "Exist in quantized energy states"
    ],
    0,
    "J.J. Thomson's model (1898) envisioned the atom as a solid sphere of positive charge of atomic dimensions with negatively charged electrons embedded throughout like plums in a pudding."
)

add_q(
    "Atoms and Nuclei", "Atomic models",
    "Rutherford's alpha scattering experiment led to which revolutionary conclusion?",
    [
        "Almost all the mass and positive charge of the atom is concentrated in an extraordinarily small central nucleus ($10^{-15}\\text{ m}$)",
        "Electrons have wave properties",
        "Energy levels in atoms are quantized",
        "Photons have momentum"
    ],
    0,
    "Because a small fraction (about 1 in 8000) of alpha particles were deflected through large angles ($> 90^\\circ$), Rutherford deduced that the positive charge and nearly all atomic mass must be concentrated in an ultra-dense central core (nucleus) of radius $\\sim 10^{-14}\\text{ m}$."
)

add_q(
    "Atoms and Nuclei", "Atomic models",
    "What was the catastrophic instability of Rutherford's nuclear model according to classical electrodynamics?",
    [
        "Accelerating orbiting electrons must continuously radiate electromagnetic energy and spiral into the nucleus in $\\sim 10^{-10}\\text{ s}$",
        "Nuclear positive charges should instantly repel each other",
        "Electrons would undergo radioactive decay",
        "Gravity would pull electrons out of the atom"
    ],
    0,
    "According to classical Maxwellian electrodynamics, any accelerated charge radiates electromagnetic power at rate $P = \\frac{2 e^2 a^2}{3 c^3}$ (Larmor formula). An orbiting electron accelerates centripetally, so it would continuously lose energy and spiral into the nucleus within approximately $10^{-10}\\text{ s}$, predicting that stable atoms could not exist."
)

add_q(
    "Atoms and Nuclei", "Atomic models",
    "Sommerfeld's extension of Bohr's model introduced:",
    [
        "Elliptical electron orbits and relativistic mass corrections to explain the fine structure of spectral lines",
        "Quantum spin of electrons",
        "Nuclear fission",
        "Quark structure of nucleons"
    ],
    0,
    "Arnold Sommerfeld generalized Bohr's circular orbits to elliptical orbits with azimuthal quantum numbers and incorporated relativistic velocity variations of the orbital electron, successfully explaining the fine-structure splitting of hydrogen spectral lines."
)

add_q(
    "Atoms and Nuclei", "Atomic models",
    "The distance of closest approach $r_0$ of an alpha particle of mass $m$, charge $2e$, and initial kinetic energy $K$ head-on colliding with a gold nucleus ($Z = 79$) is:",
    [
        "$\\frac{2 Z e^2}{4\\pi \\varepsilon_0 K}$",
        "$\\frac{Z e^2}{4\\pi \\varepsilon_0 K}$",
        "$\\frac{4 Z e^2}{4\\pi \\varepsilon_0 K}$",
        "$\\frac{Z e^2}{2\\pi \\varepsilon_0 K^2}$"
    ],
    0,
    "At distance of closest approach in a head-on collision, all initial kinetic energy $K$ is converted into electrostatic potential energy: $K = \\frac{1}{4\\pi \\varepsilon_0} \\frac{(2 e)(Z e)}{r_0} = \\frac{2 Z e^2}{4\\pi \\varepsilon_0 r_0} \\implies r_0 = \\frac{2 Z e^2}{4\\pi \\varepsilon_0 K}$."
)

# Subtopic 2: Nuclear reactions
add_q(
    "Atoms and Nuclei", "Nuclear reactions",
    "In the nuclear reaction $^{14}_7\\text{N} + ^4_2\\text{He} \\to ^{17}_8\\text{O} + X$, what is particle $X$?",
    [
        "Proton ($^1_1\\text{H}$)",
        "Neutron ($^1_0\\text{n}$)",
        "Deuteron ($^2_1\\text{H}$)",
        "Positron ($^0_{+1}\\text{e}$)"
    ],
    0,
    "Applying conservation of atomic number $Z$: $7 + 2 = 8 + Z_X \\implies Z_X = 1$. Applying conservation of mass number $A$: $14 + 4 = 17 + A_X \\implies A_X = 1$. The particle with $Z = 1, A = 1$ is a proton ($^1_1\\text{p}$ or $^1_1\\text{H}$)."
)

add_q(
    "Atoms and Nuclei", "Nuclear reactions",
    "The $Q$-value of a nuclear reaction $A + B \\to C + D$ in terms of rest masses $m_A, m_B, m_C, m_D$ is:",
    [
        "$Q = (m_A + m_B - m_C - m_D) c^2$",
        "$Q = (m_C + m_D - m_A - m_B) c^2$",
        "$Q = (m_A + m_C - m_B - m_D) c^2$",
        "$Q = (m_A + m_B + m_C + m_D) c^2$"
    ],
    0,
    "The $Q$-value represents the net kinetic energy released: $Q = K_f - K_i = (m_i - m_f) c^2 = (m_A + m_B - m_C - m_D) c^2$. If $Q > 0$, the reaction is exoergic; if $Q < 0$, it is endoergic."
)

add_q(
    "Atoms and Nuclei", "Nuclear reactions",
    "In beta-minus ($\\beta^-$) decay of a neutron: $\\text{n} \\to \\text{p} + \\text{e}^- + \\bar{\\nu}_e$, the antineutrino $\\bar{\\nu}_e$ was postulated by Wolfgang Pauli to ensure:",
    [
        "Conservation of energy, linear momentum, and angular momentum (spin)",
        "Conservation of electric charge only",
        "Conservation of mass number only",
        "Gravitational balance"
    ],
    0,
    "In $\\beta^-$ decay, the emitted electron exhibited a continuous energy spectrum up to an endpoint, seemingly violating energy conservation. Furthermore, all three initial/final particles ($\text{n, p, e}^-$) are fermions of spin $1/2$, violating spin angular momentum conservation ($1/2 \\neq 1/2 \\pm 1/2$). Pauli postulated an elusive neutral spin-$1/2$ particle (the neutrino/antineutrino) to conserve energy, momentum, and angular momentum."
)

add_q(
    "Atoms and Nuclei", "Nuclear reactions",
    "In alpha decay $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\text{He}$, if the $Q$-value of the decay is $4.27\\text{ MeV}$, what is the kinetic energy of the emitted alpha particle?",
    [
        "$\\frac{234}{238} Q \\approx 4.20\\text{ MeV}$",
        "$\\frac{4}{238} Q \\approx 0.07\\text{ MeV}$",
        "$Q = 4.27\\text{ MeV}$",
        "$\\frac{1}{2} Q \\approx 2.14\\text{ MeV}$"
    ],
    0,
    "From rest, linear momentum is conserved: $p_\\alpha = p_{Th}$. Kinetic energy is $K = \\frac{p^2}{2m}$, so $\\frac{K_\\alpha}{K_{Th}} = \\frac{m_{Th}}{m_\\alpha} = \\frac{234}{4}$. Since $K_\\alpha + K_{Th} = Q$: $K_\\alpha = \\frac{m_{Th}}{m_{Th} + m_\\alpha} Q = \\frac{234}{238} \\times 4.27\\text{ MeV} \\approx 4.20\\text{ MeV}$."
)

add_q(
    "Atoms and Nuclei", "Nuclear reactions",
    "The threshold kinetic energy $K_{th}$ of a projectile of mass $m$ striking a stationary target of mass $M$ to initiate an endoergic nuclear reaction of reaction energy $-Q$ ($Q > 0$) is:",
    [
        "$K_{th} = Q \\left(1 + \\frac{m}{M}\\right)$",
        "$K_{th} = Q$",
        "$K_{th} = Q \\left(1 - \\frac{m}{M}\\right)$",
        "$K_{th} = Q \\frac{M}{m}$"
    ],
    0,
    "Due to conservation of momentum in the center-of-mass frame, some kinetic energy must remain as motion of the center of mass. Available energy for the reaction in the CM frame is $E_{cm} = \\frac{M}{m + M} K$. Setting $E_{cm} \\ge Q$ gives $K_{th} = Q \\frac{m + M}{M} = Q \\left(1 + \\frac{m}{M}\\right)$."
)

# Subtopic 3: Binding energy
add_q(
    "Atoms and Nuclei", "Binding energy",
    "The binding energy per nucleon curve peaks around mass number $A \\approx 56-62$ ($^{56}\\text{Fe}, ^{62}\\text{Ni}$) with a value of approximately:",
    [
        "$8.8\\text{ MeV/nucleon}$",
        "$1.1\\text{ MeV/nucleon}$",
        "$15.5\\text{ MeV/nucleon}$",
        "$0.5\\text{ MeV/nucleon}$"
    ],
    0,
    "The binding energy per nucleon curve rises rapidly for light nuclei, reaches a broad plateau around $8.5\\text{ MeV}$, and peaks at $^{62}\\text{Ni}$ ($8.79\\text{ MeV/nucleon}$) and $^{56}\\text{Fe}$ ($8.75\\text{ MeV/nucleon}$) before gently decreasing to $\\approx 7.6\\text{ MeV/nucleon}$ for heavy nuclei like uranium due to Coulomb repulsion."
)

add_q(
    "Atoms and Nuclei", "Binding energy",
    "Why do both nuclear fission of heavy nuclei ($A \\sim 240$) and nuclear fusion of light nuclei ($A \\le 4$) release massive amounts of energy?",
    [
        "Both processes produce daughter nuclei with higher binding energy per nucleon than the parent reactants",
        "Both destroy all nucleons into pure photons",
        "Both violate mass conservation",
        "Both produce lighter electrons"
    ],
    0,
    "In any nuclear process, energy is released if the final products have greater total binding energy (are more tightly bound) than the initial reactants. Moving up the binding energy per nucleon curve—either from the light end via fusion or from the heavy end via fission—yields products closer to the peak ($A \\sim 60$), releasing the difference as kinetic energy and gamma photons."
)

add_q(
    "Atoms and Nuclei", "Binding energy",
    "The mass of a deuteron nucleus ($^2_1\\text{H}$) is $2.01355\\text{ u}$. The masses of a free proton and free neutron are $m_p = 1.00728\\text{ u}$ and $m_n = 1.00866\\text{ u}$. What is the binding energy of the deuteron? (Take $1\\text{ u} \\approx 931.5\\text{ MeV}$)",
    [
        "$2.22\\text{ MeV}$",
        "$1.11\\text{ MeV}$",
        "$4.44\\text{ MeV}$",
        "$0.51\\text{ MeV}$"
    ],
    0,
    "Mass defect is $\\Delta m = (m_p + m_n) - m_d = (1.00728 + 1.00866) - 2.01355 = 2.01594 - 2.01355 = 0.00239\\text{ u}$. Binding energy is $B = \\Delta m \\times 931.5\\text{ MeV} = 0.00239 \\times 931.5 \\approx 2.226\\text{ MeV} \\approx 2.22\\text{ MeV}$."
)

add_q(
    "Atoms and Nuclei", "Binding energy",
    "The Weizsäcker semi-empirical mass formula models the binding energy of a nucleus based on the:",
    [
        "Liquid drop model",
        "Shell model",
        "Fermi gas model",
        "Quark-gluon plasma"
    ],
    0,
    "The Bethe-Weizsäcker formula treats the nucleus like an incompressible charged liquid drop with volume, surface, Coulomb, asymmetry, and pairing energy terms: $B(A, Z) = a_v A - a_s A^{2/3} - a_c \\frac{Z(Z-1)}{A^{1/3}} - a_a \\frac{(A - 2Z)^2}{A} + \\delta(A,Z)$."
)

add_q(
    "Atoms and Nuclei", "Binding energy",
    "If a nucleus of mass number $A_0 = 240$ with binding energy per nucleon $7.6\\text{ MeV}$ splits into two equal fragments of mass number $A = 120$ each with binding energy per nucleon $8.5\\text{ MeV}$, the total energy released is:",
    [
        "$216\\text{ MeV}$",
        "$108\\text{ MeV}$",
        "$432\\text{ MeV}$",
        "$54\\text{ MeV}$"
    ],
    0,
    "Initial total binding energy is $B_i = 240 \\times 7.6\\text{ MeV} = 1824\\text{ MeV}$. Final total binding energy is $B_f = 240 \\times 8.5\\text{ MeV} = 2040\\text{ MeV}$. Energy released is $Q = B_f - B_i = 2040 - 1824 = 216\\text{ MeV}$."
)

# Subtopic 4: Nuclear fission and fusion
add_q(
    "Atoms and Nuclei", "Nuclear fission and fusion",
    "In a nuclear reactor, heavy water ($D_2 O$) or high-purity graphite is used as a moderator primarily to:",
    [
        "Slow down fast fission neutrons to thermal energies without absorbing them",
        "Absorb excess neutrons to shut down the reactor",
        "Cool the reactor core",
        "Shield against gamma radiation"
    ],
    0,
    "Fission neutrons are born fast ($E \\sim 2\\text{ MeV}$). Uranium-235 has a vastly higher fission cross-section for slow thermal neutrons ($E \\sim 0.025\\text{ eV}$). A moderator consists of light nuclei that efficiently degrade neutron kinetic energy via elastic collisions with minimal neutron capture absorption."
)

add_q(
    "Atoms and Nuclei", "Nuclear fission and fusion",
    "Control rods in a nuclear power reactor are made of materials like Cadmium or Boron because they possess:",
    [
        "Extremely high thermal neutron capture absorption cross-sections",
        "Low melting points",
        "High electrical conductivity",
        "Low atomic density"
    ],
    0,
    "Cadmium ($^{113}\\text{Cd}$) and Boron ($^{10}\\text{B}$) have very large capture cross-sections for thermal neutrons. Inserting control rods absorbs neutrons and reduces the multiplication factor $k < 1$, while withdrawing them increases neutron multiplication to maintain criticality ($k = 1$)."
)

add_q(
    "Atoms and Nuclei", "Nuclear fission and fusion",
    "The primary energy generation cycle powering the Sun is the:",
    [
        "Proton-proton (p-p) chain fusion reaction",
        "Carbon-Nitrogen-Oxygen (CNO) cycle exclusively",
        "Uranium-235 fission chain reaction",
        "Triple-alpha process only"
    ],
    0,
    "In low-mass main sequence stars like the Sun (core temperature $T \\sim 1.5 \\times 10^7\\text{ K}$), the proton-proton (p-p) chain fusion cycle accounts for approximately $99\\%$ of total solar luminosity, converting four protons into one $^4\\text{He}$ nucleus with release of $\\approx 26.7\\text{ MeV}$."
)

add_q(
    "Atoms and Nuclei", "Nuclear fission and fusion",
    "What is the main obstacle preventing practical magnetic confinement nuclear fusion power on Earth?",
    [
        "Overcoming the mutual Coulomb electrostatic repulsion between positively charged nuclei, requiring temperatures $\\sim 10^8\\text{ K}$ and Lawson criterion confinement",
        "Lack of deuterium and tritium fuel on Earth",
        "Fusion produces excessive radioactive ash",
        "Fusion neutrons cannot be produced"
    ],
    0,
    "Positively charged nuclei experience strong Coulomb electrostatic repulsion. To bring nuclei close enough ($\\sim 10^{-15}\\text{ m}$) for the attractive strong nuclear force to take over, the plasma must be heated to temperatures above $10^8\\text{ K}$ and confined long enough at high density (Lawson criterion $n \\tau_E \\ge 10^{20}\\text{ s/m}^3$)."
)

add_q(
    "Atoms and Nuclei", "Nuclear fission and fusion",
    "In a nuclear fission of $^{235}_{92}\\text{U}$ by a thermal neutron, on average how many prompt neutrons are released per fission event?",
    [
        "$2.5$",
        "$1.0$",
        "$5.0$",
        "$10$"
    ],
    0,
    "Each thermal neutron fission of $^{235}\\text{U}$ produces on average $\\approx 2.47 \\approx 2.5$ prompt neutrons, which enables the continuation of a sustained, self-propagating nuclear chain reaction."
)

# Subtopic 5: Rutherford's scattering and Bohr's quantization
add_q(
    "Atoms and Nuclei", "Rutherford's scattering and Bohr's quantization",
    "In Rutherford's alpha scattering experiment, the differential scattering cross-section $\\frac{d\\sigma}{d\\Omega}$ (or number of particles scattered at angle $\\theta$) is proportional to:",
    [
        "$\\frac{1}{\\sin^4(\\theta/2)}$",
        "$\\frac{1}{\\sin^2(\\theta/2)}$",
        "$\\frac{1}{\\cos^4(\\theta/2)}$",
        "$\\frac{1}{\\sin(\\theta/2)}$"
    ],
    0,
    "The celebrated Rutherford scattering formula is $\\frac{d\\sigma}{d\\Omega} = \\left(\\frac{1}{4\\pi \\varepsilon_0} \\frac{z Z e^2}{4 K}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)} \\propto \\frac{1}{\\sin^4(\\theta/2)}$."
)

add_q(
    "Atoms and Nuclei", "Rutherford's scattering and Bohr's quantization",
    "The impact parameter $b$ in Rutherford scattering is related to the scattering angle $\\theta$ by:",
    [
        "$b = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\cot(\\theta/2)$",
        "$b = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\tan(\\theta/2)$",
        "$b = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\sin(\\theta/2)$",
        "$b = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\cos(\\theta/2)$"
    ],
    0,
    "The impact parameter $b$ (perpendicular distance of the initial asymptotic velocity vector from the nucleus) is related to scattering angle $\\theta$ by $b = \\frac{1}{4\\pi \\varepsilon_0} \\frac{(2 e)(Z e)}{m v^2} \\cot(\\theta/2) = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\cot(\\theta/2)$."
)

add_q(
    "Atoms and Nuclei", "Rutherford's scattering and Bohr's quantization",
    "According to Bohr's quantization rule, the orbital angular momentum $L$ of an electron in a stationary state is:",
    [
        "$L = \\frac{n h}{2\\pi} = n \\hbar$",
        "$L = \\frac{n h}{4\\pi}$",
        "$L = n^2 \\hbar$",
        "$L = \\sqrt{n(n+1)} \\hbar$"
    ],
    0,
    "Bohr postulated that the angular momentum of an electron orbiting a nucleus can only take discrete values that are integral multiples of reduced Planck's constant: $L = n \\frac{h}{2\\pi} = n \\hbar$, where $n = 1, 2, 3, \\dots$"
)

add_q(
    "Atoms and Nuclei", "Rutherford's scattering and Bohr's quantization",
    "If the impact parameter $b = 0$, what is the scattering angle $\\theta$ of the alpha particle in Rutherford scattering?",
    [
        "$180^\\circ$ (head-on collision, direct rebound)",
        "$90^\\circ$",
        "$0^\\circ$",
        "$45^\\circ$"
    ],
    0,
    "From $b = \\frac{Z e^2}{4\\pi \\varepsilon_0 K} \\cot(\\theta/2)$: when $b = 0$, we have $\\cot(\\theta/2) = 0 \\implies \\theta/2 = 90^\\circ \\implies \\theta = 180^\\circ$. This represents a head-on collision where the alpha particle is reflected straight back along its incident path."
)

add_q(
    "Atoms and Nuclei", "Rutherford's scattering and Bohr's quantization",
    "Wilson-Sommerfeld quantization rule generalizes Bohr's quantization to any periodic coordinate $q$ with conjugate momentum $p$ as:",
    [
        "$\\oint p dq = n h$",
        "$\\oint p dq = n \\hbar$",
        "$\\oint p dq = 0$",
        "$\\oint q dp = \\frac{h}{n}$"
    ],
    0,
    "The Bohr-Sommerfeld action integral quantization rule states that the phase-space contour integral over one complete period of motion is quantized as $\\oint p_i dq_i = n_i h$ (where $n_i$ is an integer)."
)

# Subtopic 6: Hydrogen spectrum and Rydberg formula
add_q(
    "Atoms and Nuclei", "Hydrogen spectrum and Rydberg formula",
    "The Rydberg formula for the wavenumber $\\bar{\\nu} = 1/\\lambda$ of emitted radiation in hydrogen is $\\bar{\\nu} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$. Which series lies entirely in the ultraviolet region of the spectrum?",
    [
        "Lyman series ($n_1 = 1$)",
        "Balmer series ($n_1 = 2$)",
        "Paschen series ($n_1 = 3$)",
        "Brackett series ($n_1 = 4$)"
    ],
    0,
    "The Lyman series corresponds to transitions down to the ground state $n_1 = 1$. The longest wavelength in this series is $\\lambda = \\frac{4}{3 R_H} \\approx 1216\\text{ \\AA}$, and the shortest (series limit) is $\\lambda = \\frac{1}{R_H} \\approx 912\\text{ \\AA}$. Since all wavelengths are $< 4000\\text{ \\AA}$, the Lyman series lies entirely in the ultraviolet region."
)

add_q(
    "Atoms and Nuclei", "Hydrogen spectrum and Rydberg formula",
    "Which hydrogen spectral series has lines that fall in the visible region of the electromagnetic spectrum?",
    [
        "Balmer series ($n_1 = 2$)",
        "Lyman series ($n_1 = 1$)",
        "Paschen series ($n_1 = 3$)",
        "Pfund series ($n_1 = 5$)"
    ],
    0,
    "The Balmer series corresponds to transitions ending at $n_1 = 2$. Its lines ($H_\\alpha = 6563\\text{ \\AA}, H_\\beta = 4861\\text{ \\AA}, H_\\gamma = 4340\\text{ \\AA}, H_\\delta = 4102\\text{ \\AA}$) fall directly within the visible spectrum ($4000-7000\\text{ \\AA}$)."
)

add_q(
    "Atoms and Nuclei", "Hydrogen spectrum and Rydberg formula",
    "What is the ratio of the maximum wavelength $\\lambda_{\\max}$ to the minimum wavelength $\\lambda_{\\min}$ in the Lyman series of hydrogen?",
    [
        "$4 / 3$",
        "$9 / 5$",
        "$4 / 1$",
        "$3 / 2$"
    ],
    0,
    "For Lyman series ($n_1 = 1$): Maximum wavelength occurs for transition from $n_2 = 2$: $\\frac{1}{\\lambda_{\\max}} = R_H \\left(1 - \\frac{1}{4}\\right) = \\frac{3}{4} R_H \\implies \\lambda_{\\max} = \\frac{4}{3 R_H}$. Minimum wavelength (series limit) occurs for $n_2 \\to \\infty$: $\\frac{1}{\\lambda_{\\min}} = R_H (1 - 0) = R_H \\implies \\lambda_{\\min} = \\frac{1}{R_H}$. The ratio is $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4 / (3 R_H)}{1 / R_H} = \\frac{4}{3}$."
)

add_q(
    "Atoms and Nuclei", "Hydrogen spectrum and Rydberg formula",
    "What is the ionization potential of a singly ionized helium ion ($He^+$, $Z = 2$)?",
    [
        "$54.4\\text{ V}$",
        "$13.6\\text{ V}$",
        "$27.2\\text{ V}$",
        "$122.4\\text{ V}$"
    ],
    0,
    "The ground state energy of a hydrogen-like atom of atomic number $Z$ is $E_1 = -13.6 Z^2\\text{ eV}$. For $He^+$, $Z = 2$: $E_1 = -13.6 \\times (2^2) = -13.6 \\times 4 = -54.4\\text{ eV}$. The energy required to remove the electron to infinity (ionization energy) is $+54.4\\text{ eV}$, so the ionization potential is $54.4\\text{ V}$."
)

add_q(
    "Atoms and Nuclei", "Hydrogen spectrum and Rydberg formula",
    "When an electron in hydrogen atom jumps from $n = 4$ to the ground state $n = 1$, how many spectral lines can possibly be emitted?",
    [
        "$6$",
        "$3$",
        "$4$",
        "$10$"
    ],
    0,
    "The maximum number of distinct spectral emission lines possible from an excited state with principal quantum number $n$ is $N = \\frac{n(n - 1)}{2}$. For $n = 4$: $N = \\frac{4 \\times 3}{2} = 6$ lines."
)

# Subtopic 7: Mass defect and nuclear force
add_q(
    "Atoms and Nuclei", "Mass defect and nuclear force",
    "Which of the following is NOT a fundamental property of the strong nuclear force?",
    [
        "It is an inverse-square law force like gravity and electrostatics",
        "It is short-range ($r \\sim 1-2\\text{ fm}$) and exhibits saturation",
        "It is charge-independent (acts equally between p-p, p-n, and n-n)",
        "It is non-central and spin-dependent"
    ],
    0,
    "The strong nuclear force does NOT obey an inverse-square law. It is mediated by meson exchange, described by a Yukawa potential $V(r) = -g^2 \\frac{e^{-\\mu r}}{r}$, dropping exponentially to zero beyond nuclear distances ($r > 2-3\\text{ fm}$), and is strongly repulsive at extremely short distances ($r < 0.5\\text{ fm}$)."
)

add_q(
    "Atoms and Nuclei", "Mass defect and nuclear force",
    "Nuclear density $\\rho_{nuc}$ is virtually independent of the mass number $A$ of the nucleus and has an approximate value of:",
    [
        "$2.3 \\times 10^{17}\\text{ kg/m}^3$",
        "$1.0 \\times 10^3\\text{ kg/m}^3$",
        "$5.5 \\times 10^9\\text{ kg/m}^3$",
        "$3.0 \\times 10^{24}\\text{ kg/m}^3$"
    ],
    0,
    "Nuclear radius scales as $R = R_0 A^{1/3}$ (with $R_0 \\approx 1.2\\text{ fm}$). The volume is $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A$. The nuclear mass is $M \\approx A m_N$. The nuclear density is $\\rho_{nuc} = \\frac{M}{V} = \\frac{A m_N}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{m_N}{\\frac{4}{3}\\pi R_0^3} = \\frac{1.67 \\times 10^{-27}}{\\frac{4}{3}\\pi (1.2 \\times 10^{-15})^3} \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$, which is completely independent of $A$."
)

add_q(
    "Atoms and Nuclei", "Mass defect and nuclear force",
    "The charge independence of nuclear forces was demonstrated by mirror nuclei like $^7_3\\text{Li}$ and $^7_4\\text{Be}$, indicating that:",
    [
        "Strong nuclear interactions between n-n, p-p, and n-p pairs are identical after subtracting Coulomb repulsion",
        "Neutrons have electric charge inside the nucleus",
        "Protons lose charge during nuclear binding",
        "Mass of neutron equals mass of proton exactly"
    ],
    0,
    "Charge independence of the strong nuclear force (isospin symmetry) means that after subtracting the purely electromagnetic Coulomb repulsion between protons, the strong force binding a p-p pair, an n-n pair, and an n-p pair in the same quantum state is identical."
)

add_q(
    "Atoms and Nuclei", "Mass defect and nuclear force",
    "Hideki Yukawa predicted the existence of which particle as the mediator (quantum exchange carrier) of the strong nuclear force between nucleons?",
    [
        "Pi-meson (pion)",
        "Muon",
        "Positron",
        "Gluon"
    ],
    0,
    "In 1935, Hideki Yukawa proposed that the short-range nuclear force ($r_0 \\sim 1.4\\text{ fm}$) is mediated by the exchange of a massive virtual boson, the pion (pi-meson), with mass $m_\\pi \\approx \\frac{\\hbar}{r_0 c} \\approx 140\\text{ MeV}/c^2$."
)

add_q(
    "Atoms and Nuclei", "Mass defect and nuclear force",
    "The phenomenon where each nucleon in a large nucleus interacts only with its immediate nearest neighbors rather than with all nucleons in the nucleus is known as:",
    [
        "Saturation of nuclear forces",
        "Nuclear screening",
        "Asymmetry effect",
        "Pauli exclusion"
    ],
    0,
    "Because the nuclear force has an extremely short range ($1-2\\text{ fm}$), each nucleon can interact only with its closest neighboring nucleons. As a result, the binding energy per nucleon is roughly constant ($8\\text{ MeV}$) rather than growing proportional to $A$, a property known as saturation."
)

with open("scripts/physics_top100/phys_b4_p1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Physics Batch 4 Part 1.")
