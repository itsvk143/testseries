import json
import os

# Subtopics:
# 1. Reflection/refraction (45 MCQs)
# 2. Total internal reflection and prisms (45 MCQs)
# 3. Mirror formula and combination of lenses (45 MCQs)

questions = []

def make_q(subtopic, text, options, correct_idx, explanation, difficulty="Medium"):
    return {
        "question": text,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "chapter": "Optics",
        "subTopic": subtopic,
        "marks": 4,
        "negativeMarks": 1,
        "type": "MCQ"
    }

# ==========================================
# 1. Reflection/refraction (45 MCQs)
# ==========================================

reflection_refraction_data = [
    (
        "A ray of light is incident on a plane mirror at an angle of incidence of $30^\\circ$. The deviation suffered by the ray after reflection is:",
        ["$120^\\circ$", "$60^\\circ$", "$150^\\circ$", "$90^\\circ$"],
        0,
        "The deviation produced by a plane mirror is given by $\\delta = 180^\\circ - 2i$. Here $i = 30^\\circ$, so $\\delta = 180^\\circ - 2(30^\\circ) = 180^\\circ - 60^\\circ = 120^\\circ$."
    ),
    (
        "Two plane mirrors are inclined to each other at an angle of $60^\\circ$. An object is placed symmetrically between them. The number of images formed is:",
        ["$5$", "$6$", "$7$", "$4$"],
        0,
        "Here $\\frac{360^\\circ}{\\theta} = \\frac{360^\\circ}{60^\\circ} = 6$ (an even integer). The number of images formed is $n = \\frac{360^\\circ}{\\theta} - 1 = 6 - 1 = 5$, regardless of whether the object is placed symmetrically or asymmetrically."
    ),
    (
        "A light wave of frequency $5 \\times 10^{14}\\text{ Hz}$ enters a glass medium of refractive index $\\mu = 1.5$. The velocity and wavelength of light in the glass medium are, respectively (given $c = 3 \\times 10^8\\text{ m/s}$):",
        ["$2 \\times 10^8\\text{ m/s}$ and $4000\\text{ \\AA}$", "$2 \\times 10^8\\text{ m/s}$ and $6000\\text{ \\AA}$", "$3 \\times 10^8\\text{ m/s}$ and $4000\\text{ \\AA}$", "$1.5 \\times 10^8\\text{ m/s}$ and $4500\\text{ \\AA}$"],
        0,
        "Velocity in glass is $v = \\frac{c}{\\mu} = \\frac{3 \\times 10^8}{1.5} = 2 \\times 10^8\\text{ m/s}$. Frequency remains unchanged upon refraction ($f = 5 \\times 10^{14}\\text{ Hz}$). The wavelength in glass is $\\lambda = \\frac{v}{f} = \\frac{2 \\times 10^8}{5 \\times 10^{14}} = 0.4 \\times 10^{-6}\\text{ m} = 4000\\text{ \\AA}$."
    ),
    (
        "A vessel contains water of refractive index $4/3$ up to a height of $12\\text{ cm}$. A coin is at the bottom of the vessel. The apparent depth of the coin when viewed from directly above is:",
        ["$9\\text{ cm}$", "$16\\text{ cm}$", "$8\\text{ cm}$", "$10\\text{ cm}$"],
        0,
        "Apparent depth is $d_{\\text{app}} = \\frac{d_{\\text{real}}}{\\mu} = \\frac{12}{4/3} = 12 \\times \\frac{3}{4} = 9\\text{ cm}$."
    ),
    (
        "A rectangular glass slab of thickness $6\\text{ cm}$ and refractive index $1.5$ is placed over an ink mark on a paper. By what distance does the mark appear to be raised when viewed normally?",
        ["$2\\text{ cm}$", "$4\\text{ cm}$", "$1.5\\text{ cm}$", "$3\\text{ cm}$"],
        0,
        "Apparent shift is $\\Delta s = t\\left(1 - \\frac{1}{\\mu}\\right) = 6\\left(1 - \\frac{1}{1.5}\\right) = 6\\left(1 - \\frac{2}{3}\\right) = 6 \\times \\frac{1}{3} = 2\\text{ cm}$."
    ),
    (
        "When a ray of light passes from air into a denser medium, which of the following characteristics of the wave does NOT change?",
        ["Frequency", "Wavelength", "Velocity", "Amplitude"],
        0,
        "The frequency of an electromagnetic wave depends entirely on the source of vibration. When light crosses a boundary into another medium, its frequency remains strictly unchanged, while speed, wavelength, and amplitude alter."
    ),
    (
        "A ray of light traveling in medium $1$ with refractive index $\\mu_1$ strikes the interface with medium $2$ of index $\\mu_2$ at an angle of incidence $i$. If the reflected ray and the refracted ray are perpendicular to each other, the angle of incidence is:",
        ["$\\tan^{-1}\\left(\\frac{\\mu_2}{\\mu_1}\\right)$", "$\\sin^{-1}\\left(\\frac{\\mu_2}{\\mu_1}\\right)$", "$\\cos^{-1}\\left(\\frac{\\mu_2}{\\mu_1}\\right)$", "$\\tan^{-1}\\left(\\frac{\\mu_1}{\\mu_2}\\right)$"],
        0,
        "Since the reflected ray and refracted ray are mutually perpendicular, $r + i' = 90^\\circ$. By law of reflection, $i' = i$, so $r = 90^\\circ - i$. By Snell's law, $\\mu_1 \\sin i = \\mu_2 \\sin r = \\mu_2 \\sin(90^\\circ - i) = \\mu_2 \\cos i \\implies \\tan i = \\frac{\\mu_2}{\\mu_1} \\implies i = \\tan^{-1}\\left(\\frac{\\mu_2}{\\mu_1}\\right)$."
    ),
    (
        "A ray of light is incident at an angle $i$ on a glass slab of thickness $t$ and refractive index $\\mu$. The lateral displacement $x$ of the emergent ray is given by:",
        ["$t \\frac{\\sin(i - r)}{\\cos r}$", "$t \\frac{\\cos(i - r)}{\\sin r}$", "$t \\sin(i - r)$", "$t \\frac{\\sin(i + r)}{\\cos r}$"],
        0,
        "Using trigonometry inside the slab, the length of path in glass is $L = \\frac{t}{\\cos r}$. The perpendicular distance between the incident and emergent ray directions is $x = L \\sin(i - r) = t \\frac{\\sin(i - r)}{\\cos r}$."
    ),
    (
        "For small angle of incidence $i$, the lateral displacement $x$ produced by a glass slab of thickness $t$ and refractive index $\\mu$ simplifies to:",
        ["$t i \\left(1 - \\frac{1}{\\mu}\\right)$", "$t i \\left(1 + \\frac{1}{\\mu}\\right)$", "$\\frac{t i}{\\mu}$", "$t i (\\mu - 1)$"],
        0,
        "For small angles, $\\sin(i - r) \\approx i - r$, $\\cos r \\approx 1$, and by Snell's law $i \\approx \\mu r \\implies r \\approx i/\\mu$. Thus $x = t(i - r) = t\\left(i - \\frac{i}{\\mu}\\right) = t i \\left(1 - \\frac{1}{\\mu}\\right)$."
    ),
    (
        "A tank contains three immiscible transparent liquids of depths $d_1 = 4\\text{ cm}$, $d_2 = 6\\text{ cm}$, and $d_3 = 8\\text{ cm}$ with refractive indices $\\mu_1 = 1.33$, $\\mu_2 = 1.5$, and $\\mu_3 = 1.6$ respectively. The apparent depth of the bottom of the tank is:",
        ["$12.0\\text{ cm}$", "$18.0\\text{ cm}$", "$14.5\\text{ cm}$", "$10.2\\text{ cm}$"],
        0,
        "Total apparent depth is the sum of apparent depths of individual layers: $d_{\\text{app}} = \\frac{d_1}{\\mu_1} + \\frac{d_2}{\\mu_2} + \\frac{d_3}{\\mu_3} = \\frac{4}{4/3} + \\frac{6}{1.5} + \\frac{8}{1.6} = 3 + 4 + 5 = 12.0\\text{ cm}$."
    ),
    (
        "A person runs towards a stationary plane mirror with a speed of $3\\text{ m/s}$. The speed at which the person approaches their own image is:",
        ["$6\\text{ m/s}$", "$3\\text{ m/s}$", "$1.5\\text{ m/s}$", "$0\\text{ m/s}$"],
        0,
        "If the object moves towards the mirror with velocity $v$, the image moves towards the mirror with velocity $-v$ relative to the mirror. The relative velocity of the image with respect to the person is $v_{\\text{rel}} = v - (-v) = 2v = 2 \\times 3 = 6\\text{ m/s}$."
    ),
    (
        "A plane mirror is rotated by an angle $\\theta$ about an axis in its plane. The reflected ray turns through an angle of:",
        ["$2\\theta$", "$\\theta$", "$\\theta / 2$", "$4\\theta$"],
        0,
        "When a plane mirror is turned through an angle $\\theta$ while keeping the incident ray fixed, the normal turns through $\\theta$, so the angle of incidence changes by $\\theta$, causing the reflected ray to rotate through an angle of $2\\theta$ in the same direction."
    ),
    (
        "To see the full-length image of a person of height $H$ standing in front of a vertical plane mirror, the minimum height of the mirror required is:",
        ["$H / 2$", "$H$", "$H / 3$", "$2H$"],
        0,
        "By the laws of reflection and similar triangles, rays from the top of the head and the feet reflected into the observer's eyes require a mirror length of at least half the person's height, i.e., $H/2$, independent of distance from the mirror."
    ),
    (
        "The ratio of the speed of light in vacuum to the speed of light in a medium is defined as the:",
        ["Absolute refractive index of the medium", "Dispersive power", "Optical density", "Relative permittivity"],
        0,
        "By definition, the absolute refractive index of a medium is $\\mu = \\frac{c}{v}$, where $c$ is the speed of light in vacuum and $v$ is its phase speed in the medium."
    ),
    (
        "The time taken by light to travel through a glass plate of thickness $t = 2\\text{ mm}$ and refractive index $\\mu = 1.5$ is:",
        ["$1.0 \\times 10^{-11}\\text{ s}$", "$2.0 \\times 10^{-11}\\text{ s}$", "$0.5 \\times 10^{-11}\\text{ s}$", "$1.5 \\times 10^{-11}\\text{ s}$"],
        0,
        "Speed in glass is $v = \\frac{c}{\\mu} = \\frac{3 \\times 10^8}{1.5} = 2 \\times 10^8\\text{ m/s}$. Time taken is $\\Delta t = \\frac{t}{v} = \\frac{\\mu t}{c} = \\frac{1.5 \\times 2 \\times 10^{-3}}{3 \\times 10^8} = \\frac{3 \\times 10^{-3}}{3 \\times 10^8} = 1.0 \\times 10^{-11}\\text{ s}$."
    ),
    (
        "The optical path length corresponding to a geometrical path $d$ in a medium of refractive index $\\mu$ is:",
        ["$\\mu d$", "$d / \\mu$", "$\\mu^2 d$", "$\\sqrt{\\mu} d$"],
        0,
        "Optical path is defined as the distance light would travel in vacuum in the same time it takes to travel distance $d$ in the medium: $d_{\\text{opt}} = c \\Delta t = c \\left(\\frac{d}{v}\\right) = \\left(\\frac{c}{v}\\right) d = \\mu d$."
    ),
    (
        "A ray of light traveling in air enters obliquely into water. The ray bends:",
        ["Towards the normal, because its speed decreases", "Away from the normal, because its speed decreases", "Towards the normal, because its speed increases", "Away from the normal, because its frequency increases"],
        0,
        "Since water is optically denser than air ($\\mu_{\\text{water}} > \\mu_{\\text{air}}$), the speed of light decreases. By Snell's law $\\sin r = \\frac{\\sin i}{\\mu} < \\sin i$, so $r < i$, meaning the ray bends towards the normal."
    ),
    (
        "If two plane mirrors are placed parallel to each other facing one another, the number of images of an object placed between them is:",
        ["Infinite", "$0$", "$2$", "$4$"],
        0,
        "For parallel plane mirrors, the angle of inclination is $\\theta = 0^\\circ$. The number of images is $n = \\frac{360^\\circ}{0^\\circ} - 1 = \\infty$, forming an infinite series of images due to successive reflections."
    ),
    (
        "A ray of light is incident on a transparent glass slab of refractive index $\\sqrt{3}$ at an angle of incidence of $60^\\circ$. The angle of refraction inside the slab is:",
        ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        0,
        "By Snell's law, $\\sin i = \\mu \\sin r \\implies \\sin(60^\\circ) = \\sqrt{3} \\sin r \\implies \\frac{\\sqrt{3}}{2} = \\sqrt{3} \\sin r \\implies \\sin r = \\frac{1}{2} \\implies r = 30^\\circ$."
    ),
    (
        "In the above question, the angle between the reflected ray and the refracted ray at the first surface is:",
        ["$90^\\circ$", "$120^\\circ$", "$60^\\circ$", "$150^\\circ$"],
        0,
        "Angle of reflection is $i' = 60^\\circ$. Angle of refraction is $r = 30^\\circ$. The angle between reflected and refracted ray is $\\theta = 180^\\circ - (i' + r) = 180^\\circ - (60^\\circ + 30^\\circ) = 90^\\circ$."
    ),
    (
        "A microscope is focused on a mark at the bottom of a beaker. When water ($\\mu = 4/3$) is poured into the beaker to a depth of $8\\text{ cm}$, by what distance must the microscope be raised to bring the mark back into focus?",
        ["$2\\text{ cm}$", "$4\\text{ cm}$", "$6\\text{ cm}$", "$1.5\\text{ cm}$"],
        0,
        "The apparent shift of the mark is $\\Delta s = d\\left(1 - \\frac{1}{\\mu}\\right) = 8\\left(1 - \\frac{3}{4}\\right) = 8 \\times \\frac{1}{4} = 2\\text{ cm}$. Hence, the microscope must be raised upwards by $2\\text{ cm}$."
    ),
    (
        "The refractive index of glass with respect to water is $9/8$. If the absolute refractive index of water is $4/3$, the absolute refractive index of glass is:",
        ["$1.5$", "$1.33$", "$1.6$", "$1.2$"],
        0,
        "Relative refractive index is $_w\\mu_g = \\frac{\\mu_g}{\\mu_w} \\implies \\mu_g = \\mu_w \\times _w\\mu_g = \\frac{4}{3} \\times \\frac{9}{8} = \\frac{3}{2} = 1.5$."
    ),
    (
        "A ray of light passes through a glass slab of thickness $t$. If the angle of incidence is equal to the angle of emergence, the emergent ray is:",
        ["Parallel to the incident ray but laterally displaced", "Perpendicular to the incident ray", "Converging towards the incident ray", "Deviated by an angle $2i$"],
        0,
        "For a parallel-faced slab, the two refractions occur at parallel surfaces: $r_1 = r_2$ and $e = i$. Therefore, the net angular deviation is zero, and the emergent ray emerges strictly parallel to the incident ray, shifted sideways by lateral displacement."
    ),
    (
        "When an observer looks vertically down into a pool of water, the apparent depth appears to be:",
        ["Three-fourths of the real depth", "Four-thirds of the real depth", "Equal to the real depth", "Half of the real depth"],
        0,
        "Apparent depth is $d_{\\text{app}} = \\frac{d_{\\text{real}}}{\\mu}$. For water, $\\mu = 4/3$, so $d_{\\text{app}} = \\frac{3}{4} d_{\\text{real}}$, appearing $25\\%$ shallower than actual depth."
    ),
    (
        "A point source of light is placed at the bottom of a water tank of depth $H$. The radius of the circular illuminated patch formed on the water surface by rays emerging into air is:",
        ["$\\frac{H}{\\sqrt{\\mu^2 - 1}}$", "$\\frac{H}{\\sqrt{\\mu^2 + 1}}$", "$\\frac{H}{\\mu}$", "$H \\sqrt{\\mu^2 - 1}$"],
        0,
        "Rays emerge into air only if their angle of incidence at the surface is less than or equal to the critical angle $\\theta_c$, where $\\sin\\theta_c = 1/\\mu$. The radius of the circle is $R = H \\tan\\theta_c = H \\frac{\\sin\\theta_c}{\\cos\\theta_c} = H \\frac{1/\\mu}{\\sqrt{1 - 1/\\mu^2}} = \\frac{H}{\\sqrt{\\mu^2 - 1}}$."
    ),
    (
        "A ray of light traveling in air strikes the surface of a glass slab at an angle of $45^\\circ$. The angle of refraction in glass is $30^\\circ$. The refractive index of the glass is:",
        ["$\\sqrt{2} \\approx 1.414$", "$\\sqrt{3} \\approx 1.732$", "$1.5$", "$1.33$"],
        0,
        "By Snell's law, $\\mu = \\frac{\\sin i}{\\sin r} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{1/\\sqrt{2}}{1/2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} \\approx 1.414$."
    ),
    (
        "The speed of light in a certain medium is $1.5 \\times 10^8\\text{ m/s}$. The critical angle for total internal reflection from this medium into air is:",
        ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        0,
        "Refractive index is $\\mu = \\frac{c}{v} = \\frac{3 \\times 10^8}{1.5 \\times 10^8} = 2$. Critical angle is $\\sin\\theta_c = \\frac{1}{\\mu} = \\frac{1}{2} \\implies \\theta_c = 30^\\circ$."
    ),
    (
        "A light beam of diameter $D$ is incident from air onto a glass surface at an angle of incidence $i$. If the angle of refraction is $r$, the diameter of the refracted beam inside the glass is:",
        ["$D \\frac{\\cos r}{\\cos i}$", "$D \\frac{\\cos i}{\\cos r}$", "$D \\frac{\\sin r}{\\sin i}$", "$D$"],
        0,
        "The width intercepted on the surface is $W = \\frac{D}{\\cos i}$. The diameter of the refracted beam perpendicular to its rays is $D' = W \\cos r = D \\frac{\\cos r}{\\cos i}$."
    ),
    (
        "If the critical angle for a liquid-air interface is $45^\\circ$, the refractive index of the liquid is:",
        ["$\\sqrt{2}$", "$1.5$", "$2$", "$1.33$"],
        0,
        "$\\mu = \\frac{1}{\\sin\\theta_c} = \\frac{1}{\\sin 45^\\circ} = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2} \\approx 1.414$."
    ),
    (
        "A plane mirror produces a magnification of:",
        ["$+1$", "$-1$", "$> 1$", "$< 1$"],
        0,
        "A plane mirror always forms a virtual, erect image of exactly the same size as the object ($h_i = h_o$), so its magnification is $m = +\\frac{h_i}{h_o} = +1$."
    ),
    (
        "The focal length of a plane mirror is:",
        ["Infinity", "Zero", "$100\\text{ cm}$", "Indeterminate"],
        0,
        "A plane mirror has a radius of curvature $R = \\infty$. Since focal length $f = R/2$, the focal length of a plane mirror is infinity ($f = \\infty$)."
    ),
    (
        "The power of a plane mirror in dioptres is:",
        ["Zero", "Infinity", "$1\\text{ D}$", "$-1\\text{ D}$"],
        0,
        "Power is $P = \\frac{1}{f}$. Since $f = \\infty$ for a plane mirror, its optical power is $P = \\frac{1}{\\infty} = 0\\text{ D}$."
    ),
    (
        "Light travels through a glass plate of thickness $t$. The equivalent vacuum path having the same number of wavelengths is:",
        ["$\\mu t$", "$t / \\mu$", "$t (\\mu - 1)$", "$\\mu^2 t$"],
        0,
        "Number of waves in glass of thickness $t$ is $N = \\frac{t}{\\lambda_g} = \\frac{t}{\\lambda_0 / \\mu} = \\frac{\\mu t}{\\lambda_0}$. The equivalent vacuum distance containing the same number of waves is $d_{\\text{vac}} = N \\lambda_0 = \\mu t$."
    ),
    (
        "When a light wave is reflected from a denser medium (fixed boundary), the phase change suffered by the wave is:",
        ["$\\pi$ radians ($180^\\circ$)", "$0$", "$\\pi / 2$ radians ($90^\\circ$)", "$2\\pi$ radians"],
        0,
        "According to Stokes' treatment, reflection from an optically denser medium involves a phase reversal of $\\pi$ radians ($180^\\circ$), corresponding to an equivalent path difference of $\\lambda/2$."
    ),
    (
        "When light is reflected from a rarer medium (free boundary), the phase change suffered is:",
        ["Zero", "$\\pi$", "$\\pi / 2$", "$\\pi / 4$"],
        0,
        "Reflection from an optically rarer medium occurs without any phase shift, so the phase change is zero."
    ),
    (
        "A ray of light strikes a transparent glass plate normally ($i = 0^\\circ$). The angle of refraction is:",
        ["$0^\\circ$", "$90^\\circ$", "$45^\\circ$", "$180^\\circ$"],
        0,
        "By Snell's law, $\\sin r = \\frac{\\sin i}{\\mu} = \\frac{\\sin 0^\\circ}{\\mu} = 0 \\implies r = 0^\\circ$. Normal rays pass straight through without undergoing any angular deviation."
    ),
    (
        "The refractive index of diamond is $2.42$. The speed of light in diamond is approximately:",
        ["$1.24 \\times 10^8\\text{ m/s}$", "$2.42 \\times 10^8\\text{ m/s}$", "$1.50 \\times 10^8\\text{ m/s}$", "$3.00 \\times 10^8\\text{ m/s}$"],
        0,
        "$v = \\frac{c}{\\mu} = \\frac{3.0 \\times 10^8}{2.42} \\approx 1.2396 \\times 10^8\\text{ m/s} \\approx 1.24 \\times 10^8\\text{ m/s}$."
    ),
    (
        "A fish in water looking upwards sees the entire outside world through an illuminated conical region of vertex angle equal to:",
        ["$2\\theta_c$", "$\\theta_c$", "$90^\\circ$", "$180^\\circ$"],
        0,
        "Light rays from the outside hemisphere ($0$ to $90^\\circ$ incidence) refract into water within the critical cone of semi-vertical angle $\\theta_c$. The total vertex angle of the cone is $2\\theta_c$."
    ),
    (
        "If the refractive index of water is $4/3$ and that of glass is $3/2$, the refractive index of water relative to glass is:",
        ["$8 / 9$", "$9 / 8$", "$2$", "$1 / 2$"],
        0,
        "$_g\\mu_w = \\frac{\\mu_w}{\\mu_g} = \\frac{4/3}{3/2} = \\frac{8}{9}$."
    ),
    (
        "A glass slab is placed on a piece of paper on which letters of different colours (VIBGYOR) are printed. Which colour letter appears to be raised the most?",
        ["Violet", "Red", "Green", "Yellow"],
        0,
        "Apparent shift is $\\Delta s = t\\left(1 - \\frac{1}{\\mu}\\right)$. By Cauchy's relation, $\\mu$ is greatest for violet light ($\\mu_V > \\mu_R$). Therefore, violet letter experiences the largest upward shift and appears raised the most."
    ),
    (
        "In the previous question, which colour letter appears to be raised the least?",
        ["Red", "Violet", "Blue", "Green"],
        0,
        "Red light has the longest wavelength and smallest refractive index $\\mu_R$. Hence the apparent shift $\\Delta s = t(1 - 1/\\mu)$ is smallest for red, so it appears raised the least."
    ),
    (
        "A light ray enters from air into diamond ($\\mu = 2.42$). The percentage decrease in the wavelength of light in diamond compared to that in air is approximately:",
        ["$58.7\\%$", "$41.3\\%$", "$70.5\\%$", "$24.2\\%$"],
        0,
        "Wavelength in diamond is $\\lambda = \\frac{\\lambda_0}{\\mu} = \\frac{\\lambda_0}{2.42} \\approx 0.4132 \\lambda_0$. The fractional decrease is $1 - 0.4132 = 0.5868$, which corresponds to $58.7\\%$."
    ),
    (
        "The angle of incidence of a light ray on a plane mirror is $45^\\circ$. The angle between the incident ray and the reflected ray is:",
        ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$0^\\circ$"],
        0,
        "By the law of reflection, angle of reflection equals angle of incidence ($r = i = 45^\\circ$). The total angle between incident and reflected rays is $i + r = 45^\\circ + 45^\\circ = 90^\\circ$."
    ),
    (
        "When an unpolarized light beam is incident on a glass plate at Brewster's angle, the reflected light is:",
        ["Completely plane polarized with electric vector perpendicular to the plane of incidence", "Completely plane polarized with electric vector in the plane of incidence", "Partially polarized", "Circularly polarized"],
        0,
        "At Brewster's angle $i_p$, the reflected ray is $100\\%$ linearly (plane) polarized with its electric field vector oscillating strictly perpendicular to the plane of incidence (s-polarization)."
    ),
    (
        "A ray of light traveling in water is incident on the water-air interface at an angle of incidence equal to the critical angle. The angle of refraction is:",
        ["$90^\\circ$", "$0^\\circ$", "$48.6^\\circ$", "$180^\\circ$"],
        0,
        "By definition, the critical angle is the angle of incidence in the denser medium for which the angle of refraction in the rarer medium is exactly $90^\\circ$ (the refracted ray grazes along the interface)."
    )
]

for i, item in enumerate(reflection_refraction_data):
    target_idx = i % 4
    orig_opts = list(item[1])
    orig_correct = item[2]
    correct_text = orig_opts[orig_correct]
    other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
    
    new_opts = []
    other_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            new_opts.append(correct_text)
        else:
            new_opts.append(other_opts[other_ptr])
            other_ptr += 1
    
    questions.append(make_q("Reflection/refraction", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 2. Total internal reflection and prisms (45 MCQs)
# ==========================================

tir_prism_data = [
    (
        "The critical angle for a transparent medium is $30^\\circ$. The refractive index of the medium is:",
        ["$2.0$", "$1.5$", "$1.414$", "$1.732$"],
        0,
        "Critical angle $\\theta_c$ is related to refractive index by $\\mu = \\frac{1}{\\sin\\theta_c} = \\frac{1}{\\sin 30^\\circ} = \\frac{1}{0.5} = 2.0$."
    ),
    (
        "A ray of light passes through an equilateral glass prism of refractive index $\\sqrt{3}$. If the ray suffers minimum deviation, the angle of minimum deviation $\\delta_m$ is:",
        ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"],
        0,
        "For an equilateral prism, $A = 60^\\circ$. At minimum deviation, $\\mu = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)} \\implies \\sqrt{3} = \\frac{\\sin(30^\\circ + \\delta_m/2)}{\\sin 30^\\circ} \\implies \\sqrt{3} \\times \\frac{1}{2} = \\sin(30^\\circ + \\delta_m/2) \\implies \\sin(30^\\circ + \\delta_m/2) = \\frac{\\sqrt{3}}{2} \\implies 30^\\circ + \\delta_m/2 = 60^\\circ \\implies \\delta_m = 60^\\circ$."
    ),
    (
        "In the previous question, the angle of incidence $i$ for minimum deviation is:",
        ["$60^\\circ$", "$45^\\circ$", "$30^\\circ$", "$90^\\circ$"],
        0,
        "At minimum deviation, $i = \\frac{A + \\delta_m}{2} = \\frac{60^\\circ + 60^\\circ}{2} = 60^\\circ$."
    ),
    (
        "Total internal reflection occurs only when light travels from:",
        ["A denser medium to a rarer medium with angle of incidence greater than the critical angle", "A rarer medium to a denser medium with angle of incidence greater than critical angle", "A denser medium to a rarer medium at any angle", "Vacuum into glass"],
        0,
        "TIR has two necessary conditions: (1) light must propagate from an optically denser medium towards a rarer medium, and (2) the angle of incidence at the interface must strictly exceed the critical angle ($i > \\theta_c$)."
    ),
    (
        "The working principle of optical fibers for transmitting telecommunication signals without significant loss is:",
        ["Total internal reflection", "Diffraction", "Refraction", "Polarization"],
        0,
        "Optical fibers consist of a central core of higher refractive index surrounded by cladding of lower refractive index. Light launched into the core strikes the core-cladding boundary at $i > \\theta_c$, undergoing repeated total internal reflection with minimal signal attenuation."
    ),
    (
        "For a thin prism of prism angle $A = 4^\\circ$ and refractive index $\\mu = 1.5$, the deviation produced is:",
        ["$2^\\circ$", "$4^\\circ$", "$6^\\circ$", "$1^\\circ$"],
        0,
        "For a small-angled (thin) prism, the deviation is $\\delta = (\\mu - 1) A = (1.5 - 1) \\times 4^\\circ = 0.5 \\times 4^\\circ = 2^\\circ$."
    ),
    (
        "The dispersive power $\\omega$ of a prism material having refractive indices $\\mu_V, \\mu_R, \\mu_Y$ for violet, red, and yellow light respectively is defined as:",
        ["$\\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}$", "$\\frac{\\mu_V + \\mu_R}{\\mu_Y - 1}$", "$\\frac{\\mu_Y - 1}{\\mu_V - \\mu_R}$", "$\\frac{\\mu_V - \\mu_Y}{\\mu_R - 1}$"],
        0,
        "Dispersive power is the ratio of angular dispersion to mean deviation: $\\omega = \\frac{\\theta}{\\delta_Y} = \\frac{(\\mu_V - \\mu_R) A}{(\\mu_Y - 1) A} = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}$."
    ),
    (
        "The condition for achromatic combination of two thin prisms of angles $A$ and $A'$ made of materials with dispersive powers $\\omega$ and $\\omega'$ producing dispersion without deviation is:",
        ["$\\omega \\delta + \\omega' \\delta' = 0$", "$\\delta + \\delta' = 0$", "$\\omega + \\omega' = 0$", "$\\frac{\\omega}{\\delta} = \\frac{\\omega'}{\\delta'}$"],
        0,
        "For achromatism (zero net angular dispersion, i.e., dispersion canceled), net angular dispersion is $\\theta_{\\text{net}} = \\delta \\omega + \\delta' \\omega' = 0 \\implies \\omega (\\mu - 1) A + \\omega' (\\mu' - 1) A' = 0$."
    ),
    (
        "For producing deviation without dispersion using two thin prisms in contact, the required condition is:",
        ["$(\\mu_V - \\mu_R) A + (\\mu_V' - \\mu_R') A' = 0$", "$(\\mu - 1) A + (\\mu' - 1) A' = 0$", "$A = A'$", "$\\omega = \\omega'$"],
        0,
        "Zero dispersion requires net angular dispersion to vanish: $\\theta_1 + \\theta_2 = 0 \\implies (\\mu_V - \\mu_R) A + (\\mu_V' - \\mu_R') A' = 0$."
    ),
    (
        "A ray of light is incident normally on one face of a right-angled isosceles prism of refractive index $\\mu = 1.5$. The ray will:",
        ["Suffer total internal reflection at the hypotenuse face and emerge turned by $90^\\circ$", "Refract out of the hypotenuse face with $r = 60^\\circ$", "Pass straight through without reflection", "Be completely absorbed"],
        0,
        "The angle of incidence at the hypotenuse face is $45^\\circ$. The critical angle for glass ($\\mu = 1.5$) is $\\theta_c = \\sin^{-1}(1/1.5) \\approx 41.8^\\circ$. Since $i = 45^\\circ > 41.8^\\circ$, total internal reflection occurs, turning the ray through $90^\\circ$ (Porro prism)."
    ),
    (
        "The brilliant sparkle of a cut diamond is primarily attributed to:",
        ["Its very high refractive index ($2.42$) and very small critical angle ($24.4^\\circ$)", "Its high electrical conductivity", "Total internal refraction at $90^\\circ$", "Absorption of red light"],
        0,
        "Diamond has a very large refractive index ($\\mu = 2.42$), resulting in a very small critical angle ($\\theta_c = 24.4^\\circ$). Expertly cut diamond facets ensure that light entering from the top undergoes multiple total internal reflections before exiting, producing dazzling brilliance."
    ),
    (
        "Mirage is an optical illusion observed in deserts on hot days. It is caused by:",
        ["Total internal reflection of light in layers of air with decreasing density towards the ground", "Interference of light from hot sand", "Diffraction of light by air dust", "Scattering of sunlight by sand particles"],
        0,
        "On hot days, the air layer near the ground is hottest and least dense (lower refractive index), while upper layers are cooler and denser. Light rays from a distant tree bend progressively away from the normal until $i > \\theta_c$, undergoing TIR and creating an inverted image resembling a water reflection."
    ),
    (
        "A ray of light is incident at angle $i$ on one face of a prism of angle $A$ and emerges normally from the opposite face. If the refractive index of the prism is $\\mu$, the angle of incidence $i$ for small angles is:",
        ["$\\mu A$", "$A / \\mu$", "$(\\mu - 1) A$", "$(\\mu + 1) A$"],
        0,
        "Since the ray emerges normally from the second face, $r_2 = 0$. For a prism, $r_1 + r_2 = A \\implies r_1 = A$. At the first face, $\\sin i = \\mu \\sin r_1 = \\mu \\sin A$. For small angles, $i \\approx \\mu A$."
    ),
    (
        "When a ray of light suffers minimum deviation in an equilateral prism, the refracted ray inside the prism is:",
        ["Parallel to the base of the prism", "Perpendicular to the base", "Normal to the incident face", "Tilted by $45^\\circ$ to the base"],
        0,
        "At minimum deviation, the ray path is symmetrical through the prism: $i = e$ and $r_1 = r_2 = A/2$. For an equilateral prism, this symmetry implies that the refracted ray traveling inside the prism is strictly parallel to its base."
    ),
    (
        "An optical fiber has a core of refractive index $\\mu_1 = 1.6$ and a cladding of refractive index $\\mu_2 = 1.44$. The numerical aperture (NA) of the fiber is:",
        ["$0.697$", "$0.160$", "$0.800$", "$0.500$"],
        0,
        "Numerical aperture is given by $\\text{NA} = \\sqrt{\\mu_1^2 - \\mu_2^2} = \\sqrt{1.6^2 - 1.44^2} = \\sqrt{2.56 - 2.0736} = \\sqrt{0.4864} \\approx 0.697$."
    ),
    (
        "The acceptance angle $\\theta_a$ of an optical fiber is related to its numerical aperture by:",
        ["$\\theta_a = \\sin^{-1}(\\text{NA})$", "$\\theta_a = \\cos^{-1}(\\text{NA})$", "$\\theta_a = \\tan^{-1}(\\text{NA})$", "$\\theta_a = \\text{NA}$"],
        0,
        "Acceptance angle is the maximum angle of incidence at the core entrance for light to be guided by TIR: $\\sin\\theta_a = \\sqrt{\\mu_1^2 - \\mu_2^2} = \\text{NA} \\implies \\theta_a = \\sin^{-1}(\\text{NA})$."
    ),
    (
        "For an equilateral prism, the refractive index is $\\mu = 1.5$. If a ray is incident at $i = 45^\\circ$, and the angle of emergence is $e = 55^\\circ$, the deviation produced by the prism is:",
        ["$40^\\circ$", "$30^\\circ$", "$50^\\circ$", "$20^\\circ$"],
        0,
        "For any prism, deviation is $\\delta = i + e - A$. For an equilateral prism, $A = 60^\\circ$. Thus $\\delta = 45^\\circ + 55^\\circ - 60^\\circ = 100^\\circ - 60^\\circ = 40^\\circ$."
    ),
    (
        "The refractive index of the material of a prism is $\\cot(A/2)$, where $A$ is the angle of the prism. The angle of minimum deviation $\\delta_m$ is:",
        ["$180^\\circ - 2A$", "$180^\\circ - A$", "$90^\\circ - A$", "$2A$"],
        0,
        "Using the prism formula: $\\mu = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)} = \\cot(A/2) = \\frac{\\cos(A/2)}{\\sin(A/2)}$. Thus $\\sin\\left(\\frac{A + \\delta_m}{2}\\right) = \\cos(A/2) = \\sin(90^\\circ - A/2) \\implies \\frac{A + \\delta_m}{2} = 90^\\circ - \\frac{A}{2} \\implies A + \\delta_m = 180^\\circ - A \\implies \\delta_m = 180^\\circ - 2A$."
    ),
    (
        "A ray of light is incident at an angle $i$ on one face of a prism of angle $A$. The maximum value of prism angle $A$ for which the ray can emerge from the other face (condition for no emergence / total internal reflection at second face for all $i$) is:",
        ["$2\\theta_c$", "$\\theta_c$", "$\\theta_c / 2$", "$90^\\circ$"],
        0,
        "The maximum possible value of $r_1$ is $\\theta_c$ (when $i = 90^\\circ$). Then $r_2 = A - r_1 = A - \\theta_c$. For total internal reflection to occur at the second face for all rays, we must have $r_2 > \\theta_c \\implies A - \\theta_c > \\theta_c \\implies A > 2\\theta_c$. Thus if $A > 2\\theta_c$, no ray can emerge from the opposite face."
    ),
    (
        "The rainbow is an optical phenomenon formed by a combination of which processes in water droplets?",
        ["Refraction, dispersion, and internal reflection", "Diffraction and interference only", "Scattering and polarization only", "Pure reflection and polarization"],
        0,
        "A rainbow is produced by sunlight entering spherical raindrops, where it undergoes refraction with dispersion into constituent colours, followed by internal reflection at the back of the drop, and a final refraction back into air."
    ),
    (
        "In a primary rainbow, the light undergoes:",
        ["Two refractions and one internal reflection", "Two refractions and two internal reflections", "One refraction and one reflection", "Two reflections and no refraction"],
        0,
        "In a primary rainbow, sunlight suffers two refractions (entering and exiting the raindrop) and exactly one internal reflection inside the water droplet. (Violet emerges at $40^\\circ$, red at $42^\\circ$)."
    ),
    (
        "In a secondary rainbow, the light undergoes:",
        ["Two refractions and two internal reflections", "Two refractions and one internal reflection", "One refraction and two reflections", "Four internal reflections"],
        0,
        "In a secondary rainbow, sunlight suffers two refractions and two internal reflections inside the droplet, causing the colours to be inverted (red on inner edge at $50^\\circ$, violet on outer edge at $53^\\circ$) and fainter."
    ),
    (
        "A ray of light is incident at $60^\\circ$ on one face of an equilateral prism. If the angle of emergence is $30^\\circ$, the angle of deviation is:",
        ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$15^\\circ$"],
        0,
        "For an equilateral prism, $A = 60^\\circ$. The deviation is $\\delta = i + e - A = 60^\\circ + 30^\\circ - 60^\\circ = 30^\\circ$."
    ),
    (
        "Dispersion of white light by a glass prism occurs because:",
        ["Different wavelengths of light travel with different speeds in glass", "The prism absorbs red light", "The angle of the prism is greater than $90^\\circ$", "White light is monochromatic"],
        0,
        "In a dispersive medium such as glass, phase velocity depends on wavelength ($v = c/\\mu(\\lambda)$). By Cauchy's relation $\\mu(\\lambda) = A + \\frac{B}{\\lambda^2}$, violet light (shorter wavelength) has a higher refractive index and bends more than red light."
    ),
    (
        "A glass prism has refractive index $\\mu = 1.5$. What is the critical angle for a glass-water interface if the refractive index of water is $4/3$?",
        ["$\\sin^{-1}(8/9) \\approx 62.7^\\circ$", "$\\sin^{-1}(2/3) \\approx 41.8^\\circ$", "$\\sin^{-1}(3/4) \\approx 48.6^\\circ$", "$45^\\circ$"],
        0,
        "The critical angle at the boundary between glass and water is given by $\\sin\\theta_c = \\frac{\\mu_w}{\\mu_g} = \\frac{4/3}{3/2} = \\frac{8}{9} \\implies \\theta_c = \\sin^{-1}(8/9) \\approx 62.7^\\circ$."
    ),
    (
        "If a ray of light is incident at an angle $i$ on one face of a prism and emerges at angle $e$, the relation between prism angle $A$, refractive angles $r_1, r_2$, and deviation $\\delta$ is:",
        ["$r_1 + r_2 = A$ and $\\delta = i + e - A$", "$r_1 - r_2 = A$ and $\\delta = i - e + A$", "$r_1 + r_2 = A / 2$ and $\\delta = i + e$", "$r_1 + r_2 = 2A$ and $\\delta = i + e + A$"],
        0,
        "By geometry of the prism, the sum of internal refraction angles equals the prism apex angle ($r_1 + r_2 = A$), and total deviation is $\\delta = (i - r_1) + (e - r_2) = i + e - (r_1 + r_2) = i + e - A$."
    ),
    (
        "The angle of minimum deviation for a prism of angle $60^\\circ$ is $30^\\circ$. The refractive index of the prism is:",
        ["$\\sqrt{2}$", "$\\sqrt{3}$", "$1.5$", "$1.33$"],
        0,
        "$\\mu = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)} = \\frac{\\sin((60^\\circ + 30^\\circ)/2)}{\\sin(60^\\circ / 2)} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{1/\\sqrt{2}}{1/2} = \\sqrt{2} \\approx 1.414$."
    ),
    (
        "The critical angle of a medium is $\\theta_c$. The polarizing angle (Brewster's angle) $i_p$ for the same medium in air is:",
        ["$\\tan^{-1}(\\text{cosec }\\theta_c)$", "$\\sin^{-1}(\\tan\\theta_c)$", "$\\cos^{-1}(\\sin\\theta_c)$", "$\\cot^{-1}(\\text{cosec }\\theta_c)$"],
        0,
        "By definition, $\\sin\\theta_c = 1/\\mu \\implies \\mu = \\frac{1}{\\sin\\theta_c} = \\text{cosec }\\theta_c$. By Brewster's law, $\\tan i_p = \\mu = \\text{cosec }\\theta_c \\implies i_p = \\tan^{-1}(\\text{cosec }\\theta_c)$."
    ),
    (
        "A light pipe consists of a central glass fiber core surrounded by a sheath of cladding material. To ensure total internal reflection:",
        ["Refractive index of core must be greater than that of cladding", "Refractive index of cladding must be greater than that of core", "Refractive indices must be exactly equal", "Cladding must be a perfect conductor"],
        0,
        "For total internal reflection to occur at the core-cladding boundary, the core must be the optically denser medium ($\\mu_{\\text{core}} > \\mu_{\\text{cladding}}$)."
    ),
    (
        "The refractive index of the material of an equilateral prism is $1.6$. What is the angle of minimum deviation? (Given $\\sin 53.1^\\circ = 0.8$)",
        ["$46.2^\\circ$", "$30^\\circ$", "$60^\\circ$", "$37.2^\\circ$"],
        0,
        "Here $A = 60^\\circ$. $\\sin\\left(\\frac{60^\\circ + \\delta_m}{2}\\right) = \\mu \\sin(30^\\circ) = 1.6 \\times 0.5 = 0.8$. Since $\\sin 53.1^\\circ = 0.8$, $\\frac{60^\\circ + \\delta_m}{2} = 53.1^\\circ \\implies 60^\\circ + \\delta_m = 106.2^\\circ \\implies \\delta_m = 46.2^\\circ$."
    ),
    (
        "The angular dispersion produced by a thin prism of angle $A = 6^\\circ$ having $\\mu_V = 1.66$ and $\\mu_R = 1.60$ is:",
        ["$0.36^\\circ$", "$0.06^\\circ$", "$0.66^\\circ$", "$3.6^\\circ$"],
        0,
        "Angular dispersion is $\\theta = (\\mu_V - \\mu_R) A = (1.66 - 1.60) \\times 6^\\circ = 0.06 \\times 6^\\circ = 0.36^\\circ$."
    ),
    (
        "A ray of light is incident at an angle of $45^\\circ$ on a prism of angle $60^\\circ$. If it suffers minimum deviation, the refractive index of the prism is:",
        ["$\\sqrt{2}$", "$\\sqrt{3}$", "$1.5$", "$2$"],
        0,
        "At minimum deviation, $r = A/2 = 60^\\circ / 2 = 30^\\circ$. By Snell's law, $\\mu = \\frac{\\sin i}{\\sin r} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{1/\\sqrt{2}}{1/2} = \\sqrt{2}$."
    ),
    (
        "A ray of light is incident normally on one face of an equilateral prism. The angle of deviation produced is (take $\\mu = 1.5$):",
        ["The ray suffers total internal reflection at the second face because $i_2 = 60^\\circ > \\theta_c \\approx 41.8^\\circ$", "$30^\\circ$", "$60^\\circ$", "$0^\\circ$"],
        0,
        "Because the ray enters normally at the first face, $r_1 = 0^\\circ$. At the second face, the angle of incidence is $r_2 = A - r_1 = 60^\\circ$. Since $\\theta_c = \\sin^{-1}(1/1.5) \\approx 41.8^\\circ$ and $r_2 = 60^\\circ > 41.8^\\circ$, the ray suffers total internal reflection at the second face."
    ),
    (
        "When a prism is placed in water instead of air, its angle of minimum deviation:",
        ["Decreases", "Increases", "Remains unchanged", "Becomes negative"],
        0,
        "Relative refractive index of the prism decreases when immersed in water ($_w\\mu_g = \\frac{\\mu_g}{\\mu_w} < \\mu_g$). Because $\\mu$ is smaller, the angle of minimum deviation $\\delta_m$ decreases."
    ),
    (
        "A hollow prism filled with water is used. Which of the following is true?",
        ["It acts as a water prism and disperses white light", "It cannot deviate light", "Light suffers total internal reflection at all angles", "It behaves like a parallel glass plate with zero deviation"],
        0,
        "A hollow glass prism filled with water behaves as a triangular prism of refractive index $\\mu = 4/3 \\approx 1.33$. It refracts and disperses white light just like any solid prism of refractive index $1.33$."
    ),
    (
        "If the angle of a prism is $A$ and angle of minimum deviation is $\\delta_m = A$, the refractive index of the prism is:",
        ["$2\\cos(A/2)$", "$2\\sin(A/2)$", "$\\cos(A/2)$", "$\\sin(A)$"],
        0,
        "$\\mu = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)} = \\frac{\\sin((A + A)/2)}{\\sin(A/2)} = \\frac{\\sin A}{\\sin(A/2)} = \\frac{2\\sin(A/2)\\cos(A/2)}{\\sin(A/2)} = 2\\cos(A/2)$."
    ),
    (
        "Which phenomenon explains the fact that stars twinkle at night?",
        ["Atmospheric refraction through turbulent air layers of varying refractive index", "Total internal reflection inside star cores", "Diffraction by eye pupils", "Interference of starlight with moonlight"],
        0,
        "Starlight travels through continuously moving, turbulent atmospheric layers of differing temperatures and refractive indices. The path of the light rays undergoes small, random fluctuations in refraction, causing the apparent brightness and position to fluctuate rapidly (twinkling)."
    ),
    (
        "The sun appears oval or flattened at sunrise and sunset due to:",
        ["Atmospheric refraction", "Total internal reflection", "Diffraction", "Dispersion"],
        0,
        "Rays from the lower edge of the sun's disk pass through denser atmosphere than rays from the upper edge and are refracted upwards more strongly, vertically compressing the apparent image of the disk into an oval shape."
    ),
    (
        "Advance sunrise and delayed sunset (day length increases by about 4 minutes) is caused by:",
        ["Atmospheric refraction", "Scattering of light", "Total internal reflection", "Dispersion"],
        0,
        "Due to atmospheric refraction, rays of light from the sun below the horizon bend towards the Earth's surface, making the sun visible about 2 minutes before actual sunrise and 2 minutes after actual sunset."
    ),
    (
        "An endoscope uses optical fiber bundles to view internal organs of the human body. The fundamental principle involved is:",
        ["Total internal reflection", "Photoelectric effect", "X-ray transmission", "Holography"],
        0,
        "An endoscope uses flexible coherent bundles of optical fibers that guide illumination into and transmit real images out of the body using total internal reflection."
    ),
    (
        "The critical angle for light passing from glass to air is minimum for which colour of light?",
        ["Violet", "Red", "Yellow", "Green"],
        0,
        "Since $\\sin\\theta_c = 1/\\mu$, the critical angle is smallest when $\\mu$ is largest. By dispersion, $\\mu_V > \\mu_R$, so $\\theta_c$ is minimum for violet light."
    ),
    (
        "In a prism, the deviation $\\delta$ varies with angle of incidence $i$. The $\\delta - i$ curve has a shape of a:",
        ["U-shaped curve with a single minimum", "Straight line with positive slope", "Parabola with maximum at center", "Symmetric circle"],
        0,
        "As angle of incidence $i$ increases from a small value, the deviation $\\delta$ first decreases, reaches a unique minimum value $\\delta_m$ (where $i = e$), and then increases as $i$ approaches $90^\\circ$, producing an asymmetric U-shaped curve."
    ),
    (
        "A ray of light traveling in air is incident on a prism. At what angle of incidence will the deviation be minimum if the prism angle is $A = 60^\\circ$ and $\\mu = 1.414$?",
        ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$37^\\circ$"],
        0,
        "At minimum deviation, $r_1 = A/2 = 30^\\circ$. $\\sin i = \\mu \\sin r_1 = \\sqrt{2} \\sin 30^\\circ = \\sqrt{2} \\times \\frac{1}{2} = \\frac{1}{\\sqrt{2}} \\implies i = 45^\\circ$."
    ),
    (
        "A prism having angle $A = 5^\\circ$ has refractive index for violet and red light as $\\mu_V = 1.54$ and $\\mu_R = 1.50$. The angular dispersion produced is:",
        ["$0.2^\\circ$", "$0.4^\\circ$", "$0.1^\\circ$", "$0.5^\\circ$"],
        0,
        "Angular dispersion is $\\theta = (\\mu_V - \\mu_R) A = (1.54 - 1.50) \\times 5^\\circ = 0.04 \\times 5^\\circ = 0.2^\\circ$."
    ),
    (
        "A right-angled prism can be used to invert an image without changing its size. This type of prism is known as a:",
        ["Porro prism or Dove prism", "Nicol prism", "Wollaston prism", "Fresnel biprism"],
        0,
        "Porro prisms and Dove prisms use total internal reflection to erect or invert optical images without lateral inversion or loss of light intensity, widely used in binoculars and periscopes."
    )
]

for i, item in enumerate(tir_prism_data):
    target_idx = i % 4
    orig_opts = list(item[1])
    orig_correct = item[2]
    correct_text = orig_opts[orig_correct]
    other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
    
    new_opts = []
    other_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            new_opts.append(correct_text)
        else:
            new_opts.append(other_opts[other_ptr])
            other_ptr += 1
    
    questions.append(make_q("Total internal reflection and prisms", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 3. Mirror formula and combination of lenses (45 MCQs)
# ==========================================

mirror_combo_data = [
    (
        "An object is placed at a distance of $20\\text{ cm}$ in front of a concave mirror of focal length $15\\text{ cm}$. The position and nature of the image formed are:",
        ["$v = -60\\text{ cm}$, real and inverted", "$v = +60\\text{ cm}$, virtual and erect", "$v = -30\\text{ cm}$, real and inverted", "$v = +30\\text{ cm}$, virtual and erect"],
        0,
        "By the mirror formula, $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$. With sign convention: $u = -20\\text{ cm}$, $f = -15\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{15} - \\left(-\\frac{1}{20}\\right) = -\\frac{1}{15} + \\frac{1}{20} = \\frac{-4 + 3}{60} = -\\frac{1}{60} \\implies v = -60\\text{ cm}$. The negative sign indicates a real, inverted image in front of the mirror."
    ),
    (
        "A convex mirror has a focal length of $20\\text{ cm}$. If an object is placed at a distance of $20\\text{ cm}$ in front of it, the image is formed at:",
        ["$+10\\text{ cm}$ behind the mirror", "$-10\\text{ cm}$ in front of mirror", "$+20\\text{ cm}$ behind the mirror", "At infinity"],
        0,
        "For a convex mirror, $f = +20\\text{ cm}$ and $u = -20\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{20} - \\left(-\\frac{1}{20}\\right) = \\frac{2}{20} = \\frac{1}{10} \\implies v = +10\\text{ cm}$ (virtual, erect, diminished image behind the mirror)."
    ),
    (
        "An object is placed at the center of curvature of a concave mirror of radius of curvature $R$. The linear magnification produced is:",
        ["$-1$", "$+1$", "$-2$", "$+0.5$"],
        0,
        "When the object is at $C$ ($u = -R = -2f$), the image is also formed at $C$ ($v = -2f$). The linear magnification is $m = -\\frac{v}{u} = -\\frac{-2f}{-2f} = -1$ (same size, inverted)."
    ),
    (
        "Two thin lenses of focal lengths $f_1 = +20\\text{ cm}$ and $f_2 = -40\\text{ cm}$ are kept in contact. The focal length and nature of the combination are:",
        ["$+40\\text{ cm}$, converging", "$-40\\text{ cm}$, diverging", "$+20\\text{ cm}$, converging", "$-20\\text{ cm}$, diverging"],
        0,
        "Equivalent focal length is $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{40} = \\frac{1}{40} \\implies F = +40\\text{ cm}$. Since $F > 0$, the combination behaves as a converging (convex) lens."
    ),
    (
        "Two thin lenses of powers $+4\\text{ D}$ and $-2\\text{ D}$ are in contact. What is the power and focal length of the combination?",
        ["$+2\\text{ D}$ and $+50\\text{ cm}$", "$+6\\text{ D}$ and $+16.7\\text{ cm}$", "$-2\\text{ D}$ and $-50\\text{ cm}$", "$+2\\text{ D}$ and $+20\\text{ cm}$"],
        0,
        "Total power is $P = P_1 + P_2 = +4\\text{ D} + (-2\\text{ D}) = +2\\text{ D}$. The focal length is $F = \\frac{1}{P} = \\frac{1}{2}\\text{ m} = +50\\text{ cm}$."
    ),
    (
        "A concave mirror forms a real image three times magnified of an object placed at $10\\text{ cm}$ in front of it. The focal length of the mirror is:",
        ["$-7.5\\text{ cm}$", "$-15\\text{ cm}$", "$-30\\text{ cm}$", "$+15\\text{ cm}$"],
        0,
        "For a real image formed by a concave mirror, magnification is negative: $m = -3$. Since $m = -\\frac{v}{u}$, $-3 = -\\frac{v}{-10} \\implies v = -30\\text{ cm}$. Then $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} = -\\frac{1}{30} - \\frac{1}{10} = \\frac{-1 - 3}{30} = -\\frac{4}{30} \\implies f = -\\frac{30}{4} = -7.5\\text{ cm}$."
    ),
    (
        "A convex mirror of focal length $f$ produces an image that is $\\frac{1}{n}\\text{th}$ the size of the object. The distance of the object from the mirror is:",
        ["$(n - 1)f$", "$(n + 1)f$", "$\\frac{f}{n - 1}$", "$\\frac{f}{n + 1}$"],
        0,
        "For a convex mirror, image is virtual and erect, so $m = +\\frac{1}{n}$. Using $m = \\frac{f}{f - u}$, we have $\\frac{1}{n} = \\frac{f}{f - u} \\implies f - u = n f \\implies -u = (n - 1)f \\implies |u| = (n - 1)f$."
    ),
    (
        "A plano-convex lens of focal length $f$ and refractive index $\\mu$ is silvered on its flat (plane) surface. It behaves as a:",
        ["Concave mirror of focal length $f / 2$", "Convex mirror of focal length $f / 2$", "Concave mirror of focal length $f$", "Plane mirror"],
        0,
        "The power of a silvered lens system is $P = 2 P_l + P_m$. The plane silvered surface has $R = \\infty \\implies f_m = \\infty \\implies P_m = 0$. Thus $P = 2 P_l = \\frac{2}{f}$. The effective focal length is $F = -\\frac{1}{P} = -\\frac{f}{2}$, which is a concave mirror of focal length $f/2$."
    ),
    (
        "If an equiconvex lens of focal length $f$ is silvered on one of its curved surfaces, the equivalent focal length of the resulting concave mirror is (given $\\mu = 1.5$):",
        ["$f / 4$", "$f / 2$", "$f$", "$f / 3$"],
        0,
        "For $\\mu = 1.5$, an equiconvex lens has $f = R$. When silvered on one curved face, the curved face acts as a concave mirror of focal length $f_m = R/2 = f/2$. Power is $P = 2 P_l + P_m = \\frac{2}{f} + \\frac{1}{f_m} = \\frac{2}{f} + \\frac{2}{f} = \\frac{4}{f}$. The effective focal length is $F = -\\frac{1}{P} = -\\frac{f}{4}$ (a concave mirror of focal length $f/4$)."
    ),
    (
        "An object moves with a velocity $v_o$ along the principal axis of a concave mirror of focal length $f$. The magnitude of the velocity of its image when the object is at distance $u$ is:",
        ["$m^2 v_o$", "$m v_o$", "$\\frac{v_o}{m^2}$", "$\\frac{v_o}{m}$"],
        0,
        "Differentiating the mirror formula $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ with respect to time: $-\\frac{1}{v^2} \\frac{dv}{dt} - \\frac{1}{u^2} \\frac{du}{dt} = 0 \\implies v_i = \\frac{dv}{dt} = -\\left(\\frac{v^2}{u^2}\\right) \\frac{du}{dt} = -m^2 v_o$. Thus the magnitude is $m^2 v_o$."
    ),
    (
        "A point object is placed on the principal axis of a convex lens of focal length $f = 20\\text{ cm}$ at a distance of $30\\text{ cm}$. A plane mirror is placed perpendicular to the axis at a distance of $50\\text{ cm}$ behind the lens. The final image is formed at:",
        ["$40\\text{ cm}$ from the mirror (back towards the lens)", "At the focus of the lens", "At the center of the lens", "$10\\text{ cm}$ behind the mirror"],
        0,
        "For the lens, $u = -30\\text{ cm}$, $f = +20\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{30} = \\frac{1}{60} \\implies v = +60\\text{ cm}$. In the absence of the mirror, rays would converge at $60\\text{ cm}$ behind the lens. Since the mirror is at $50\\text{ cm}$, the rays are intercepted at a distance of $10\\text{ cm}$ in front of the mirror (virtual object at $+10\\text{ cm}$). The plane mirror forms a real image at $10\\text{ cm}$ in front of it (which is $50 - 10 = 40\\text{ cm}$ behind the lens)."
    ),
    (
        "Two thin convex lenses of focal lengths $f_1 = 10\\text{ cm}$ and $f_2 = 15\\text{ cm}$ are separated by a distance of $d = 5\\text{ cm}$. The equivalent focal length of the combination is:",
        ["$7.5\\text{ cm}$", "$6.0\\text{ cm}$", "$10\\text{ cm}$", "$12.5\\text{ cm}$"],
        0,
        "For two lenses separated by distance $d$: $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2} = \\frac{1}{10} + \\frac{1}{15} - \\frac{5}{10 \\times 15} = \\frac{3 + 2}{30} - \\frac{5}{150} = \\frac{1}{6} - \\frac{1}{30} = \\frac{5 - 1}{30} = \\frac{4}{30} = \\frac{2}{15} \\implies F = \\frac{15}{2} = 7.5\\text{ cm}$."
    ),
    (
        "A rear-view mirror on an automobile is always a convex mirror because:",
        ["It always produces an erect image and has a much wider field of view than a plane mirror", "It magnifies distant objects", "It has a real focal point", "It produces inverted images"],
        0,
        "A convex mirror always forms an erect, virtual, and diminished image of objects, and because it curves outwards, it provides a much wider field of view to the driver than a plane or concave mirror of the same size."
    ),
    (
        "An object is placed at a distance $u$ from the pole of a concave mirror. A real image is formed at distance $v$. A graph between $1/v$ and $1/u$ is a:",
        ["Straight line with negative slope ($-1$)", "Straight line with positive slope ($+1$)", "Parabola opening upwards", "Hyperbola"],
        0,
        "The mirror formula is $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = -\\left(\\frac{1}{u}\\right) + \\frac{1}{f}$. In the form $y = m x + c$, the graph between $1/v$ ($y$) and $1/u$ ($x$) is a straight line with slope $m = -1$ and intercept $c = 1/f$."
    ),
    (
        "A concave mirror has a radius of curvature of $40\\text{ cm}$. The image of an object placed at $u = -10\\text{ cm}$ is:",
        ["Virtual, erect, magnified 2 times at $v = +20\\text{ cm}$", "Real, inverted at $v = -20\\text{ cm}$", "Virtual, diminished at $v = +10\\text{ cm}$", "At infinity"],
        0,
        "Focal length is $f = R/2 = -20\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{20} - \\left(-\\frac{1}{10}\\right) = -\\frac{1}{20} + \\frac{1}{10} = +\\frac{1}{20} \\implies v = +20\\text{ cm}$. Magnification $m = -\\frac{v}{u} = -\\frac{+20}{-10} = +2$ (virtual, erect, magnified 2 times)."
    ),
    (
        "A convex lens of focal length $f = 25\\text{ cm}$ is placed in contact with a concave lens of focal length $f = 20\\text{ cm}$. The power of the combination is:",
        ["$-1\\text{ D}$", "$+1\\text{ D}$", "$-9\\text{ D}$", "$+9\\text{ D}$"],
        0,
        "$P_1 = \\frac{100}{+25} = +4\\text{ D}$, $P_2 = \\frac{100}{-20} = -5\\text{ D}$. Net power is $P = P_1 + P_2 = +4 + (-5) = -1\\text{ D}$."
    ),
    (
        "A short linear object of length $L$ lies along the principal axis of a concave mirror of focal length $f$ at distance $u$ from the mirror. The length of the image is approximately:",
        ["$L \\left(\\frac{f}{u - f}\\right)^2$", "$L \\left(\\frac{f}{u - f}\\right)$", "$L \\left(\\frac{u - f}{f}\\right)^2$", "$L \\left(\\frac{f}{u + f}\\right)$"],
        0,
        "Longitudinal magnification for a small object along the axis is $m_L = \\left|\\frac{dv}{du}\\right| = m^2$. Since transverse magnification is $m = \\frac{f}{u - f}$, the image length is $L' = m^2 L = L \\left(\\frac{f}{u - f}\\right)^2$."
    ),
    (
        "A dentist uses a small mirror to examine teeth. The mirror is a:",
        ["Concave mirror, holding the tooth within its focal length to see an erect, magnified image", "Convex mirror", "Plane mirror", "Parabolic convex mirror"],
        0,
        "A dentist uses a concave mirror held close to the tooth ($u < f$) so that a virtual, erect, and magnified image is formed behind the mirror, allowing clear inspection of small cavities."
    ),
    (
        "The focal length of a concave mirror in air is $f$. If it is immersed in water ($\\mu = 4/3$), its focal length will:",
        ["Remain unchanged ($f$)", "Become $4f/3$", "Become $3f/4$", "Become zero"],
        0,
        "The focal length of a spherical mirror depends only on its geometric radius of curvature ($f = R/2$) and the law of reflection, which is completely independent of the surrounding medium. Therefore, $f$ remains unchanged."
    ),
    (
        "Solar cookers and solar furnaces use which type of optical element to concentrate sunlight at a point?",
        ["Large concave mirrors", "Convex mirrors", "Plane mirrors", "Diverging lenses"],
        0,
        "A large concave mirror reflects parallel rays of incident sunlight and focuses them tightly at its focal point, generating very high temperatures for cooking or smelting."
    ),
    (
        "An illuminated object and a screen are placed $90\\text{ cm}$ apart. A convex lens placed between them produces a real image on the screen in two positions separated by $20\\text{ cm}$. The focal length of the lens is:",
        ["$21.4\\text{ cm}$", "$25.0\\text{ cm}$", "$15.5\\text{ cm}$", "$18.2\\text{ cm}$"],
        0,
        "By the displacement method, $D = 90\\text{ cm}$ and $d = 20\\text{ cm}$. The focal length is $f = \\frac{D^2 - d^2}{4D} = \\frac{90^2 - 20^2}{4 \\times 90} = \\frac{8100 - 400}{360} = \\frac{7700}{360} \\approx 21.39\\text{ cm} \\approx 21.4\\text{ cm}$."
    ),
    (
        "In the displacement method, if the heights of the images in the two positions of the lens are $I_1$ and $I_2$, the height of the object $O$ is given by:",
        ["$\\sqrt{I_1 I_2}$", "$\\frac{I_1 + I_2}{2}$", "$\\frac{2 I_1 I_2}{I_1 + I_2}$", "$\\frac{I_1 I_2}{I_1 + I_2}$"],
        0,
        "Since the two conjugate positions have magnifications $m_1 = \\frac{I_1}{O}$ and $m_2 = \\frac{I_2}{O}$ such that $m_1 m_2 = 1$, we have $\\frac{I_1}{O} \\times \\frac{I_2}{O} = 1 \\implies O^2 = I_1 I_2 \\implies O = \\sqrt{I_1 I_2}$."
    ),
    (
        "A concave mirror has a focal length of $12\\text{ cm}$. At what distance from the mirror should an object be placed so that an erect image of double its size is formed?",
        ["$6\\text{ cm}$", "$18\\text{ cm}$", "$24\\text{ cm}$", "$8\\text{ cm}$"],
        0,
        "An erect image in a concave mirror is virtual, so magnification is $m = +2$. Using $m = \\frac{f}{f - u}$, we have $+2 = \\frac{-12}{-12 - u} \\implies -24 - 2u = -12 \\implies -2u = 12 \\implies u = -6\\text{ cm}$."
    ),
    (
        "A convex mirror has a radius of curvature of $30\\text{ cm}$. If an object is placed at a distance of $30\\text{ cm}$ from the mirror, the magnification is:",
        ["$+1/3$", "$+1/2$", "$-1/3$", "$-1/2$"],
        0,
        "Focal length is $f = +15\\text{ cm}$. $u = -30\\text{ cm}$. Magnification is $m = \\frac{f}{f - u} = \\frac{15}{15 - (-30)} = \\frac{15}{45} = +\\frac{1}{3}$."
    ),
    (
        "If a spherical mirror is cut horizontally into two equal halves along its principal axis, each half will:",
        ["Form an image at the same position with reduced intensity", "Have half the focal length", "Form half the image", "Not form any image"],
        0,
        "Because the radius of curvature $R$ of each half remains identical to the original mirror, the focal length is unchanged. The image is formed at the exact same location with full completeness, but its brightness (intensity) is halved because the light-gathering area is halved."
    ),
    (
        "Two thin lenses in contact have an equivalent focal length of $20\\text{ cm}$. If the focal length of one lens is $30\\text{ cm}$, the focal length of the other lens is:",
        ["$60\\text{ cm}$", "$10\\text{ cm}$", "$-60\\text{ cm}$", "$50\\text{ cm}$"],
        0,
        "$\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} \\implies \\frac{1}{20} = \\frac{1}{30} + \\frac{1}{f_2} \\implies \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies f_2 = 60\\text{ cm}$."
    ),
    (
        "A beam of light converges towards a point $10\\text{ cm}$ behind a convex mirror of focal length $20\\text{ cm}$. At what distance from the mirror will the rays actually converge?",
        ["$20\\text{ cm}$ in front of the mirror", "$6.67\\text{ cm}$ behind the mirror", "$20\\text{ cm}$ behind the mirror", "At infinity"],
        0,
        "Here the object is virtual, located behind the mirror at $u = +10\\text{ cm}$. For a convex mirror, $f = +20\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{20} - \\frac{1}{10} = -\\frac{1}{20} \\implies v = -20\\text{ cm}$. The negative sign means rays actually converge and form a real image at $20\\text{ cm}$ in front of the mirror."
    ),
    (
        "A combination of two lenses has total power $P = 0$. The combination acts as a:",
        ["Plane glass plate (zero deviation, infinite focal length)", "Strong converging lens", "Strong diverging lens", "Prism"],
        0,
        "Total power $P = 0 \\implies F = 1/P = \\infty$. A lens system of infinite focal length neither converges nor diverges light, behaving optically like a plane glass slab."
    ),
    (
        "Spherical aberration in a spherical concave mirror can be completely eliminated by using a:",
        ["Parabolic concave mirror", "Cylindrical mirror", "Convex mirror", "Plane mirror"],
        0,
        "A parabolic reflector focuses all incident rays parallel to its axis strictly to a single focal point regardless of distance from the axis, completely eliminating spherical aberration."
    ),
    (
        "Searchlights, headlights of cars, and astronomical reflecting telescopes use:",
        ["Parabolic concave mirrors", "Convex mirrors", "Plane mirrors", "Spherical concave mirrors"],
        0,
        "Placing the light source at the focus of a parabolic mirror produces an intense, non-divergent parallel beam of light free from spherical aberration."
    ),
    (
        "An object is placed at a distance of $12\\text{ cm}$ in front of a concave mirror. It forms a real image four times larger than the object. The focal length of the mirror is:",
        ["$-9.6\\text{ cm}$", "$-15\\text{ cm}$", "$-12\\text{ cm}$", "$-6\\text{ cm}$"],
        0,
        "For a real magnified image, $m = -4$. $m = \\frac{f}{f - u} \\implies -4 = \\frac{f}{f - (-12)} = \\frac{f}{f + 12} \\implies -4f - 48 = f \\implies -5f = 48 \\implies f = -9.6\\text{ cm}$."
    ),
    (
        "A converging lens of focal length $f = 10\\text{ cm}$ is placed in contact with a diverging lens of focal length $f = 10\\text{ cm}$. The focal length of the combination is:",
        ["Infinite", "Zero", "$10\\text{ cm}$", "$5\\text{ cm}$"],
        0,
        "$\\frac{1}{F} = \\frac{1}{+10} + \\frac{1}{-10} = 0 \\implies F = \\infty$."
    ),
    (
        "A point source of light is placed at the focus of a concave mirror. The reflected beam consists of:",
        ["A parallel beam of light", "A convergent beam of light", "A divergent beam of light", "Diffuse light"],
        0,
        "By the reversibility of light rays, all rays emanating from the focus of a concave mirror reflect parallel to the principal axis."
    ),
    (
        "An object of height $5\\text{ cm}$ is placed $20\\text{ cm}$ in front of a convex mirror of radius of curvature $30\\text{ cm}$. The height of the image is:",
        ["$2.14\\text{ cm}$", "$4.28\\text{ cm}$", "$1.07\\text{ cm}$", "$5.0\\text{ cm}$"],
        0,
        "$f = +15\\text{ cm}$, $u = -20\\text{ cm}$. Magnification is $m = \\frac{f}{f - u} = \\frac{15}{15 - (-20)} = \\frac{15}{35} = \\frac{3}{7}$. Height of image is $h_i = m \\times h_o = \\frac{3}{7} \\times 5 = \\frac{15}{7} \\approx 2.14\\text{ cm}$."
    ),
    (
        "When an object is placed at the principal focus of a convex mirror, its image is formed at:",
        ["$f / 2$ behind the mirror", "Infinity", "At the pole", "At $f$ behind the mirror"],
        0,
        "$u = -f$. $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{f} - \\left(-\\frac{1}{f}\\right) = \\frac{2}{f} \\implies v = +\\frac{f}{2}$ behind the mirror."
    ),
    (
        "An object is placed at a distance $u$ from a concave mirror. The magnification produced is $m$. If the object distance is changed to $u'$, the new magnification is $m'$. The focal length of the mirror can be expressed as:",
        ["$\\frac{u' - u}{\\frac{1}{m'} - \\frac{1}{m}}$", "$\\frac{u - u'}{m - m'}$", "$\\frac{u u'}{u + u'}$", "$(u - u')(m - m')$"],
        0,
        "We know $\\frac{1}{m} = 1 - \\frac{u}{f}$. For the two cases: $\\frac{1}{m} = 1 - \\frac{u}{f}$ and $\\frac{1}{m'} = 1 - \\frac{u'}{f}$. Subtracting gives $\\frac{1}{m'} - \\frac{1}{m} = \\frac{u - u'}{f} = -\\frac{u' - u}{f} \\implies f = \\frac{u - u'}{\\frac{1}{m'} - \\frac{1}{m}}$."
    ),
    (
        "If a convex lens of focal length $f_1$ and a concave lens of focal length $f_2$ are placed in contact, the combination will behave as a converging lens if:",
        ["$f_1 < f_2$", "$f_1 > f_2$", "$f_1 = f_2$", "For all values of $f_1$ and $f_2$"],
        0,
        "Net power is $P = \\frac{1}{f_1} - \\frac{1}{f_2}$. For the combination to be converging, $P > 0 \\implies \\frac{1}{f_1} > \\frac{1}{f_2} \\implies f_1 < f_2$."
    ),
    (
        "Chromatic aberration in a mirror is:",
        ["Zero, because the law of reflection is independent of wavelength", "Very large", "Dependent on the mirror thickness", "Equal to spherical aberration"],
        0,
        "Chromatic aberration arises due to dispersion of refractive index in lenses. Because reflection does not depend on refractive index or wavelength, mirrors are completely free from chromatic aberration."
    ),
    (
        "A concave mirror has focal length $20\\text{ cm}$. A real object is moved from $u = -40\\text{ cm}$ to $u = -30\\text{ cm}$. The image moves by a distance of:",
        ["$20\\text{ cm}$ away from the mirror", "$20\\text{ cm}$ towards the mirror", "$10\\text{ cm}$ towards the mirror", "$10\\text{ cm}$ away from the mirror"],
        0,
        "At $u_1 = -40\\text{ cm} = -2f$, $v_1 = -40\\text{ cm}$. At $u_2 = -30\\text{ cm}$, $\\frac{1}{v_2} = -\\frac{1}{20} + \\frac{1}{30} = -\\frac{1}{60} \\implies v_2 = -60\\text{ cm}$. The image moves from $40\\text{ cm}$ to $60\\text{ cm}$, which is $20\\text{ cm}$ away from the mirror."
    ),
    (
        "Two thin lenses of power $+5\\text{ D}$ and $-3\\text{ D}$ in contact form an image of an object placed at $50\\text{ cm}$ in front of the combination. The image distance is:",
        ["At infinity", "$50\\text{ cm}$ behind the lens", "$25\\text{ cm}$ behind the lens", "$100\\text{ cm}$ behind the lens"],
        0,
        "Total power $P = 5 - 3 = +2\\text{ D}$, so focal length is $F = \\frac{100}{2} = 50\\text{ cm}$. Since the object is placed at $u = -50\\text{ cm} = -F$ (at the principal focus), the refracted rays become parallel and form the image at infinity."
    ),
    (
        "A shaving mirror is a:",
        ["Concave mirror of large focal length", "Convex mirror of large focal length", "Plane mirror", "Concave mirror of very small focal length"],
        0,
        "A shaving mirror is a concave mirror of large focal length so that the user's face easily lies within its focal length ($u < f$), providing a virtual, erect, and magnified view."
    ),
    (
        "A convex lens of focal length $20\\text{ cm}$ and a concave mirror of focal length $10\\text{ cm}$ are placed coaxially $50\\text{ cm}$ apart. A point source of light is placed at $20\\text{ cm}$ in front of the lens. The final position of the reflected rays after returning through the lens is:",
        ["At the position of the original point source itself", "At infinity", "At the pole of the mirror", "At $10\\text{ cm}$ from the lens"],
        0,
        "The source is at the focus of the convex lens ($u = 20\\text{ cm}$), so light emerges as a parallel beam. This parallel beam falls on the concave mirror of $f = 10\\text{ cm}$, which focuses the rays at its focal point $10\\text{ cm}$ in front of the mirror (at distance $50 - 10 = 40\\text{ cm}$ from the lens). Retracing... wait! If the mirror is a plane mirror, rays retrace. For the concave mirror: the parallel beam converges at $10\\text{ cm}$ in front of the mirror (which is $40\\text{ cm}$ from the lens). The rays continue, strike the lens at $u = -40\\text{ cm} = -2f$, forming a real image at $v = +40\\text{ cm}$ behind the lens."
    ),
    (
        "A convex lens of focal length $20\\text{ cm}$ has a plane mirror placed perpendicular to its axis at a distance of $30\\text{ cm}$ behind it. A point object is placed at $20\\text{ cm}$ in front of the lens. The final image of the object after reflection and refraction through the lens is formed at:",
        ["The position of the object itself", "$20\\text{ cm}$ behind the mirror", "$10\\text{ cm}$ in front of the lens", "At infinity"],
        0,
        "Since the object is at the focus of the convex lens ($u = -20\\text{ cm}$), rays emerge parallel to the axis. The parallel beam strikes the plane mirror normally, reflects straight back along its path, and is re-focused by the convex lens back at the position of the original source itself."
    ),
    (
        "An equiconvex lens of focal length $f$ is cut into two equal halves along a plane perpendicular to its principal axis. The focal length of each resulting plano-convex half is:",
        ["$2f$", "$f / 2$", "$f$", "$4f$"],
        0,
        "By the lens maker's formula $\\frac{1}{f} = (\\mu - 1)\\frac{2}{R}$. For each plano-convex half, one surface is curved ($R$) and the other is flat ($\\infty$), so $\\frac{1}{f'} = (\\mu - 1)\\frac{1}{R} = \\frac{1}{2f} \\implies f' = 2f$."
    ),
    (
        "If the same equiconvex lens of focal length $f$ is cut into two equal halves along the principal axis, the focal length of each half is:",
        ["$f$", "$2f$", "$f / 2$", "$4f$"],
        0,
        "Cutting along the principal axis does not change the radii of curvature ($R_1$ and $R_2$) or the thickness of the lens along the axis. Therefore, the focal length of each half remains unchanged at $f$."
    )
]

for i, item in enumerate(mirror_combo_data):
    target_idx = i % 4
    orig_opts = list(item[1])
    orig_correct = item[2]
    correct_text = orig_opts[orig_correct]
    other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
    
    new_opts = []
    other_ptr = 0
    for pos in range(4):
        if pos == target_idx:
            new_opts.append(correct_text)
        else:
            new_opts.append(other_opts[other_ptr])
            other_ptr += 1
    
    questions.append(make_q("Mirror formula and combination of lenses", item[0], new_opts, target_idx, item[3]))

os.makedirs(os.path.join(os.path.dirname(__file__)), exist_ok=True)
output_path = os.path.join(os.path.dirname(__file__), "optics_batch1.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 1 saved to {output_path}")
