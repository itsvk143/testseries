import json
import os

# Subtopics:
# 4. Lens formula (45 MCQs)
# 5. Optical instruments (microscope, telescope) (45 MCQs)
# 6. Interference (45 MCQs)

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
# 4. Lens formula (45 MCQs)
# ==========================================

lens_formula_data = [
    (
        "A biconvex lens of glass ($\\mu = 1.5$) has radii of curvature $20\\text{ cm}$ and $30\\text{ cm}$. Its focal length in air is:",
        ["$+24\\text{ cm}$", "$+12\\text{ cm}$", "$+50\\text{ cm}$", "$+10\\text{ cm}$"],
        0,
        "By the lens maker's formula: $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$. With $R_1 = +20\\text{ cm}$ and $R_2 = -30\\text{ cm}$: $\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{20} - \\left(-\\frac{1}{30}\\right)\\right) = 0.5\\left(\\frac{3 + 2}{60}\\right) = 0.5 \\times \\frac{5}{60} = \\frac{2.5}{60} = \\frac{1}{24} \\implies f = +24\\text{ cm}$."
    ),
    (
        "The minimum distance between a real object and its real image formed by a thin convex lens of focal length $f$ is:",
        ["$4f$", "$2f$", "$f$", "$f / 2$"],
        0,
        "Let object distance be $u$ and image distance be $v$. The total distance between object and screen is $D = u + v$. By lens formula, $v = \\frac{u f}{u - f}$. Thus $D = u + \\frac{u f}{u - f} = \\frac{u^2}{u - f}$. Setting $\\frac{dD}{du} = 0$ gives $u = 2f$, which yields $v = 2f$ and minimum distance $D_{\\text{min}} = 2f + 2f = 4f$."
    ),
    (
        "A convex lens of glass ($\\mu_g = 1.5$) has a focal length of $20\\text{ cm}$ in air. When immersed completely in water ($\\mu_w = 4/3$), its focal length will be:",
        ["$+80\\text{ cm}$", "$+40\\text{ cm}$", "$+10\\text{ cm}$", "$-80\\text{ cm}$"],
        0,
        "Using the ratio of focal lengths: $\\frac{f_w}{f_a} = \\frac{\\mu_g - 1}{\\frac{\\mu_g}{\\mu_w} - 1} = \\frac{1.5 - 1}{\\frac{1.5}{4/3} - 1} = \\frac{0.5}{\\frac{9}{8} - 1} = \\frac{0.5}{1/8} = 4$. Therefore, $f_w = 4 f_a = 4 \\times 20 = +80\\text{ cm}$."
    ),
    (
        "A convex lens of glass ($\\mu_g = 1.5$) is placed in a liquid of refractive index $\\mu_l = 1.6$. The lens will behave as a:",
        ["Diverging (concave) lens of increased focal length", "Converging (convex) lens of increased focal length", "Converging lens of same focal length", "Plane glass plate"],
        0,
        "When a lens is immersed in a medium having refractive index higher than its own ($\\mu_l > \\mu_g$), the term $\\left(\\frac{\\mu_g}{\\mu_l} - 1\\right)$ becomes negative. Consequently, the focal length reverses sign, turning the converging lens into a diverging lens."
    ),
    (
        "A convex lens of glass ($\\mu_g = 1.5$) is placed in a liquid of refractive index $\\mu_l = 1.5$. The lens will:",
        ["Disappear and have infinite focal length", "Have zero focal length", "Become a mirror", "Have focal length $10\\text{ cm}$"],
        0,
        "When $\\mu_l = \\mu_g$, $\\frac{1}{f} = \\left(\\frac{\\mu_g}{\\mu_l} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = (1 - 1)\\left(\\dots\\right) = 0 \\implies f = \\infty$. Light rays suffer no refraction at the liquid-lens boundaries, and the lens becomes invisible."
    ),
    (
        "An equiconvex lens has radius of curvature $R$ and refractive index $\\mu = 1.5$. Its focal length in air is:",
        ["$R$", "$R / 2$", "$2R$", "$R / 3$"],
        0,
        "$\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{R} - \\left(-\\frac{1}{R}\\right)\\right) = 0.5 \\times \\frac{2}{R} = \\frac{1}{R} \\implies f = R$."
    ),
    (
        "A plano-convex lens of refractive index $\\mu = 1.5$ has radius of curvature of its curved surface $R = 20\\text{ cm}$. Its focal length in air is:",
        ["$+40\\text{ cm}$", "$+20\\text{ cm}$", "$+10\\text{ cm}$", "$-40\\text{ cm}$"],
        0,
        "For a plano-convex lens, $R_1 = +20\\text{ cm}$ and $R_2 = \\infty$. $\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{20} - \\frac{1}{\\infty}\\right) = 0.5 \\times \\frac{1}{20} = \\frac{1}{40} \\implies f = +40\\text{ cm}$."
    ),
    (
        "A convex lens forms a real, inverted image of the same size as the object when the object is placed at a distance of:",
        ["$2f$", "$f$", "Between $f$ and $2f$", "Beyond $2f$"],
        0,
        "By the lens formula, when $u = -2f$, $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{-2f} = \\frac{1}{2f} \\implies v = +2f$. The magnification is $m = \\frac{v}{u} = \\frac{+2f}{-2f} = -1$ (real, inverted, same size)."
    ),
    (
        "An object is placed at a distance of $15\\text{ cm}$ from a convex lens of focal length $10\\text{ cm}$. The image is formed at:",
        ["$+30\\text{ cm}$ behind the lens", "$-30\\text{ cm}$ in front of the lens", "$+20\\text{ cm}$ behind the lens", "$+15\\text{ cm}$ behind the lens"],
        0,
        "$u = -15\\text{ cm}$, $f = +10\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30} \\implies v = +30\\text{ cm}$ (real, inverted, magnified)."
    ),
    (
        "An object is placed at $10\\text{ cm}$ in front of a concave lens of focal length $15\\text{ cm}$. The position and magnification of the image are:",
        ["$v = -6\\text{ cm}, m = +0.6$", "$v = -30\\text{ cm}, m = +3$", "$v = +6\\text{ cm}, m = -0.6$", "$v = -10\\text{ cm}, m = +1$"],
        0,
        "For a concave lens, $f = -15\\text{ cm}$ and $u = -10\\text{ cm}$. $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = -\\frac{1}{15} - \\frac{1}{10} = \\frac{-2 - 3}{30} = -\\frac{5}{30} = -\\frac{1}{6} \\implies v = -6\\text{ cm}$. Magnification is $m = \\frac{v}{u} = \\frac{-6}{-10} = +0.6$ (virtual, erect, diminished)."
    ),
    (
        "A thin convex lens of focal length $f$ produces a virtual image $n$ times magnified. The object distance $u$ is:",
        ["$\\frac{(n - 1)}{n} f$", "$\\frac{(n + 1)}{n} f$", "$\\frac{n}{(n - 1)} f$", "$(n - 1) f$"],
        0,
        "For a virtual image formed by a convex lens, magnification is positive: $m = +n$. Using $m = \\frac{f}{f + u}$, we have $n = \\frac{f}{f + u} \\implies n f + n u = f \\implies n u = f(1 - n) \\implies u = -\\frac{(n - 1)}{n} f$. The distance is $\\frac{n-1}{n}f$."
    ),
    (
        "A thin convex lens of focal length $f$ produces a real image $m$ times magnified. The object distance is:",
        ["$\\frac{m + 1}{m} f$", "$\\frac{m - 1}{m} f$", "$(m + 1) f$", "$\\frac{f}{m}$"],
        0,
        "For a real image formed by a convex lens, magnification is negative: $-m = \\frac{f}{f + u} \\implies -m f - m u = f \\implies -m u = f(1 + m) \\implies |u| = \\frac{m + 1}{m} f$."
    ),
    (
        "The formula for refraction at a single spherical surface separating two media of refractive indices $\\mu_1$ and $\\mu_2$ is:",
        ["$\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$", "$\\frac{\\mu_1}{v} - \\frac{\\mu_2}{u} = \\frac{\\mu_2 - \\mu_1}{R}$", "$\\frac{\\mu_2}{v} + \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$", "$\\frac{1}{v} - \\frac{1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$"],
        0,
        "By Snell's law applied to paraxial rays at a curved interface of radius $R$, the fundamental refraction formula is $\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$, where light travels from medium 1 into medium 2."
    ),
    (
        "A small air bubble is trapped inside a glass sphere of radius $10\\text{ cm}$ ($\\mu = 1.5$) at a distance of $4\\text{ cm}$ from the surface. The apparent depth of the bubble when viewed normally from the nearest surface is:",
        ["$3.0\\text{ cm}$", "$2.67\\text{ cm}$", "$4.0\\text{ cm}$", "$6.0\\text{ cm}$"],
        0,
        "Light travels from glass ($\\mu_1 = 1.5$) to air ($\\mu_2 = 1.0$). $u = -4\\text{ cm}$, center of curvature is in glass so $R = -10\\text{ cm}$. Applying $\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$: $\\frac{1}{v} - \\frac{1.5}{-4} = \\frac{1.0 - 1.5}{-10} \\implies \\frac{1}{v} + \\frac{1.5}{4} = \\frac{-0.5}{-10} = \\frac{1}{20} \\implies \\frac{1}{v} = \\frac{1}{20} - \\frac{3}{8} = \\frac{2 - 15}{40} = -\\frac{13}{40} \\implies v = -\\frac{40}{13} \\approx -3.08\\text{ cm} \\approx -3.0\\text{ cm}$."
    ),
    (
        "A convex lens is dipped in a liquid whose refractive index is equal to the refractive index of the lens. Then its focal length will be:",
        ["Infinite", "Zero", "Unchanged", "Halved"],
        0,
        "When the refractive index of the liquid matches that of the lens material, no light bending occurs at the boundaries: $\\frac{1}{f} = 0 \\implies f = \\infty$."
    ),
    (
        "If a lens of focal length $f$ is painted black over half of its aperture (semicircular half), the image formed by the lens will have:",
        ["Full size but half the intensity", "Half the size and full intensity", "Half the size and half the intensity", "No image will be formed"],
        0,
        "Every portion of a lens forms a complete image of the entire object. Blocking half the aperture reduces the total light energy admitted by half, so the image is formed in full at the same location with its brightness (intensity) halved."
    ),
    (
        "An object is placed at a distance $u$ in front of a convex lens of focal length $f$. If a real image is formed at distance $v$, the graph between $v$ and $u$ is a:",
        ["Rectangular hyperbola", "Straight line with positive slope", "Straight line with negative slope", "Circle"],
        0,
        "From $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, as $u$ varies from $-\\infty$ to $-f$, $v$ increases asymptotically from $f$ to $+\\infty$, which is a branch of a rectangular hyperbola."
    ),
    (
        "In the displacement method using a convex lens, the two positions of the lens for sharp images on the screen are conjugate. If the magnifications in the two positions are $m_1$ and $m_2$, then:",
        ["$m_1 \\times m_2 = 1$", "$m_1 + m_2 = 1$", "$m_1 - m_2 = 1$", "$m_1 / m_2 = 1$"],
        0,
        "In conjugate positions, object and image distances are interchanged: $v_1 = u_2$ and $u_1 = v_2$. Magnifications are $m_1 = v_1/u_1$ and $m_2 = v_2/u_2 = u_1/v_1$. Thus $m_1 m_2 = \\frac{v_1}{u_1} \\times \\frac{u_1}{v_1} = 1$."
    ),
    (
        "In the displacement method, if the distance between object and screen is $D$ and the separation between the two lens positions is $d$, the focal length is:",
        ["$\\frac{D^2 - d^2}{4D}$", "$\\frac{D^2 + d^2}{4D}$", "$\\frac{D^2 - d^2}{2D}$", "$\\frac{4D}{D^2 - d^2}$"],
        0,
        "Let the two positions be $u_1$ and $u_2$. Then $u_1 + v_1 = D$ and $v_1 - u_1 = d$. Solving gives $u_1 = \\frac{D - d}{2}$ and $v_1 = \\frac{D + d}{2}$. Substituting into the lens formula: $\\frac{1}{f} = \\frac{1}{v_1} - \\frac{1}{-u_1} = \\frac{2}{D + d} + \\frac{2}{D - d} = \\frac{2(2D)}{D^2 - d^2} = \\frac{4D}{D^2 - d^2} \\implies f = \\frac{D^2 - d^2}{4D}$."
    ),
    (
        "If an equiconcave lens of glass ($\\mu = 1.5$) has radius of curvature $R = 30\\text{ cm}$, its focal length in air is:",
        ["$-30\\text{ cm}$", "$-15\\text{ cm}$", "$+30\\text{ cm}$", "$-60\\text{ cm}$"],
        0,
        "For an equiconcave lens, $R_1 = -30\\text{ cm}$ and $R_2 = +30\\text{ cm}$. $\\frac{1}{f} = (1.5 - 1)\\left(-\\frac{1}{30} - \\frac{1}{30}\\right) = 0.5 \\times \\left(-\\frac{2}{30}\\right) = -\\frac{1}{30} \\implies f = -30\\text{ cm}$."
    ),
    (
        "A convex lens of focal length $f$ is used to form an image on a screen. If the upper half of the lens is covered with black paper, which of the following statements is true?",
        ["The complete image will still be formed, but with reduced brightness", "The upper half of the image will vanish", "The lower half of the image will vanish", "Focal length will become $2f$"],
        0,
        "Each part of the lens receives light from all points of the object and focuses them to form the entire image. Covering the top half reduces the total light transmitted by $50\\%$, leaving the full image intact with diminished brightness."
    ),
    (
        "A diverging lens of focal length $f = -20\\text{ cm}$ produces an image of an object that is one-third the size of the object ($m = +1/3$). The distance of the object from the lens is:",
        ["$40\\text{ cm}$", "$20\\text{ cm}$", "$60\\text{ cm}$", "$10\\text{ cm}$"],
        0,
        "For a concave lens, $m = \\frac{f}{f + u} \\implies \\frac{1}{3} = \\frac{-20}{-20 + u} \\implies -20 + u = -60 \\implies u = -40\\text{ cm}$. Thus object distance is $40\\text{ cm}$."
    ),
    (
        "A biconvex lens has radii of curvature of magnitude $20\\text{ cm}$ each. If its focal length is $20\\text{ cm}$, the refractive index of the lens material is:",
        ["$1.5$", "$1.6$", "$1.4$", "$1.33$"],
        0,
        "$\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R} - \\left(-\\frac{1}{R}\\right)\\right) = (\\mu - 1)\\frac{2}{R}$. Given $f = 20\\text{ cm}$ and $R = 20\\text{ cm}$: $\\frac{1}{20} = (\\mu - 1)\\frac{2}{20} \\implies 1 = 2(\\mu - 1) \\implies \\mu - 1 = 0.5 \\implies \\mu = 1.5$."
    ),
    (
        "If a lens has a power of $+2.5\\text{ D}$, its focal length is:",
        ["$+40\\text{ cm}$", "$+25\\text{ cm}$", "$+50\\text{ cm}$", "$-40\\text{ cm}$"],
        0,
        "$f = \\frac{1}{P} = \\frac{1}{2.5}\\text{ m} = 0.4\\text{ m} = +40\\text{ cm}$."
    ),
    (
        "A converging beam of light forms an image on a screen. When a convex lens is placed between the screen and the source at a distance of $20\\text{ cm}$ from the screen, the image shifts $10\\text{ cm}$ closer to the lens. The focal length of the lens is:",
        ["$+6.67\\text{ cm}$", "$+20\\text{ cm}$", "$+10\\text{ cm}$", "$+15\\text{ cm}$"],
        0,
        "Without the lens, rays converge at $20\\text{ cm}$ behind the lens (virtual object at $u = +20\\text{ cm}$). With the lens, the rays converge $10\\text{ cm}$ closer, so $v = +10\\text{ cm}$. By the lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{10} - \\frac{1}{20} = \\frac{1}{20} \\implies f = +20\\text{ cm}$."
    ),
    (
        "A convex lens of focal length $10\\text{ cm}$ is placed in contact with a concave lens of focal length $15\\text{ cm}$. The power of the combination is:",
        ["$+3.33\\text{ D}$", "$-3.33\\text{ D}$", "$+10\\text{ D}$", "$-5\\text{ D}$"],
        0,
        "$P_1 = \\frac{100}{10} = +10\\text{ D}$, $P_2 = \\frac{100}{-15} = -6.67\\text{ D}$. Net power is $P = P_1 + P_2 = +10 - 6.67 = +3.33\\text{ D}$."
    ),
    (
        "An object is placed at $20\\text{ cm}$ in front of an equiconvex lens of focal length $15\\text{ cm}$. If the lens is cut along its diameter into two halves and one half is removed, the image will be:",
        ["Formed at the same position ($v = +60\\text{ cm}$) with half the intensity", "Formed at $v = +30\\text{ cm}$", "Formed at $v = +120\\text{ cm}$", "Not formed at all"],
        0,
        "Removing one semicircular half does not change the focal length of the remaining half ($f = 15\\text{ cm}$). Thus the image position remains unchanged at $v = +60\\text{ cm}$, but the intensity is halved because the aperture area is halved."
    ),
    (
        "A plano-convex lens when silvered on its plane surface behaves like a concave mirror of focal length $30\\text{ cm}$. The focal length of the lens itself is:",
        ["$60\\text{ cm}$", "$30\\text{ cm}$", "$15\\text{ cm}$", "$120\\text{ cm}$"],
        0,
        "The effective power is $P = 2 P_l + P_m$. For a plane silvered surface, $P_m = 0$, so $P = 2 P_l \\implies \\frac{1}{F} = \\frac{2}{f_l} \\implies f_l = 2 F = 2 \\times 30 = 60\\text{ cm}$."
    ),
    (
        "A point source is placed at the center of a glass sphere of radius $R$ and refractive index $\\mu$. The virtual image of the source is formed at:",
        ["The center itself", "Infinity", "Distance $R/\\mu$ from surface", "Surface of the sphere"],
        0,
        "Because the light rays emanate radially from the center of the sphere, they strike the spherical surface normally at every point ($i = 0^\\circ$). They pass through into the outer medium undeviated ($r = 0^\\circ$). Therefore, they appear to originate from the center itself."
    ),
    (
        "Chromatic aberration in a lens occurs because:",
        ["Refractive index of lens material varies with wavelength", "Lens surfaces are spherical and not parabolic", "The aperture is too large", "Light speed is infinite in vacuum"],
        0,
        "Dispersion causes the refractive index of glass to be greater for violet light than for red light ($\\mu_V > \\mu_R$). By the lens maker's formula, the focal length for violet is shorter than for red ($f_V < f_R$), causing different colors to focus at different points along the axis."
    ),
    (
        "An achromatic doublet consists of two lenses in contact of focal lengths $f_1$ and $f_2$ made of materials with dispersive powers $\\omega_1$ and $\\omega_2$. The condition for achromatism is:",
        ["$\\frac{\\omega_1}{f_1} + \\frac{\\omega_2}{f_2} = 0$", "$\\omega_1 f_1 + \\omega_2 f_2 = 0$", "$\\frac{\\omega_1}{f_2} + \\frac{\\omega_2}{f_1} = 0$", "$\\omega_1 + \\omega_2 = 0$"],
        0,
        "For an achromatic combination of two lenses in contact, the total focal length must be identical for two chosen wavelengths, which requires $\\frac{\\omega_1}{f_1} + \\frac{\\omega_2}{f_2} = 0$ (one lens must be convex and the other concave)."
    ),
    (
        "A thin convex lens of focal length $f$ is cut into two equal halves by a plane perpendicular to the principal axis. The two halves are then joined with their curved surfaces in contact. The focal length of the combination is:",
        ["$f$", "$2f$", "$f / 2$", "$4f$"],
        0,
        "Each plano-convex half has focal length $f' = 2f$. Placing them in contact gives an equivalent focal length $\\frac{1}{F} = \\frac{1}{2f} + \\frac{1}{2f} = \\frac{1}{f} \\implies F = f$."
    ),
    (
        "A convex lens forms an image of a real object on a screen. If the upper half of the lens is covered with an opaque paper, what happens to the image?",
        ["The brightness of the image is reduced to half, but the full image is still formed", "The upper half of the image disappears", "The lower half of the image disappears", "The size of the image is halved"],
        0,
        "Light from every point on the object passes through every portion of the lens. Covering the top half halves the light transmitted without cropping any part of the image."
    ),
    (
        "A real image formed by a thin convex lens is 4 times the size of the object. If the focal length of the lens is $20\\text{ cm}$, the distance of the object from the lens is:",
        ["$25\\text{ cm}$", "$15\\text{ cm}$", "$30\\text{ cm}$", "$20\\text{ cm}$"],
        0,
        "For a real image, $m = -4$. $m = \\frac{f}{f + u} \\implies -4 = \\frac{20}{20 + u} \\implies -80 - 4u = 20 \\implies -4u = 100 \\implies u = -25\\text{ cm}$."
    ),
    (
        "An object is placed at a distance of $f/2$ from a convex lens of focal length $f$. The image formed is:",
        ["Virtual, erect, and at distance $f$ in front of the lens", "Real, inverted, and at distance $f$ behind the lens", "Real, magnified at distance $2f$", "At infinity"],
        0,
        "$u = -f/2$. $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{f} - \\frac{2}{f} = -\\frac{1}{f} \\implies v = -f$. Magnification is $m = \\frac{v}{u} = \\frac{-f}{-f/2} = +2$ (virtual, erect, magnified)."
    ),
    (
        "A luminous object is placed at distance $d$ from a screen. A convex lens is moved between them. If $d < 4f$, then:",
        ["No real image can be formed on the screen for any position of the lens", "Two real images are formed", "One real image is formed", "Infinite images are formed"],
        0,
        "For a convex lens to project a real image on a screen, the distance between object and screen must satisfy $D \\ge 4f$. If $d < 4f$, the roots for the lens position are imaginary, so no real image can be focused on the screen."
    ),
    (
        "A glass slab of thickness $3\\text{ cm}$ and refractive index $1.5$ is placed between a convex lens and its real image. The image will shift by:",
        ["$1\\text{ cm}$ away from the lens", "$1\\text{ cm}$ towards the lens", "$2\\text{ cm}$ away from the lens", "$0.5\\text{ cm}$ towards the lens"],
        0,
        "A glass slab produces a lateral apparent shift in the direction of light travel: $\\Delta s = t\\left(1 - \\frac{1}{\\mu}\\right) = 3\\left(1 - \\frac{1}{1.5}\\right) = 3\\left(1 - \\frac{2}{3}\\right) = 1\\text{ cm}$. Since light travels away from the lens towards the image, the image shifts $1\\text{ cm}$ further away from the lens."
    ),
    (
        "An air bubble inside water acts as a:",
        ["Diverging (concave) lens", "Converging (convex) lens", "Plane glass plate", "Concave mirror"],
        0,
        "The air bubble is bounded by convex surfaces, but its internal refractive index ($\\mu_{\\text{air}} = 1.0$) is less than the surrounding water ($\\mu_{\\text{water}} = 1.33$). Because $\\mu_g < \\mu_m$, the lens maker's formula gives a negative focal length, making it act as a diverging lens."
    ),
    (
        "A convex lens of focal length $f = 10\\text{ cm}$ has an object placed at $u = -20\\text{ cm}$. The object begins moving towards the lens at $2\\text{ cm/s}$. The speed of the image at this instant is:",
        ["$2\\text{ cm/s}$ moving away from the lens", "$4\\text{ cm/s}$ moving away from the lens", "$1\\text{ cm/s}$ moving towards the lens", "$2\\text{ cm/s}$ moving towards the lens"],
        0,
        "At $u = -20\\text{ cm} = -2f$, $v = +20\\text{ cm}$, so magnification is $m = -1$. The velocity of the image is $v_I = m^2 v_O = (-1)^2 (2\\text{ cm/s}) = 2\\text{ cm/s}$, directed away from the lens (in the direction of light travel)."
    ),
    (
        "A biconcave lens of focal length $f$ is cut along its principal axis into two identical halves. The focal length of each half is:",
        ["$f$", "$2f$", "$f / 2$", "$-f$"],
        0,
        "Cutting a lens along its principal axis preserves the curvature radii of both faces. Therefore, each half has the exact same focal length $f$ as the parent lens."
    ),
    (
        "The focal lengths of the objective and eyepiece of a microscope are $f_o$ and $f_e$. For high magnification:",
        ["Both $f_o$ and $f_e$ should be small", "Both $f_o$ and $f_e$ should be large", "$f_o$ should be large and $f_e$ small", "$f_o$ should be small and $f_e$ large"],
        0,
        "Magnification of a compound microscope is $m \\approx \\frac{L}{f_o}\\frac{D}{f_e}$. To achieve large magnification $m$, both focal lengths $f_o$ and $f_e$ must be as small as possible."
    ),
    (
        "A convex lens of power $+4\\text{ D}$ and a concave lens of power $-2\\text{ D}$ are cemented together. The focal length of the combination is:",
        ["$+50\\text{ cm}$", "$+25\\text{ cm}$", "$-50\\text{ cm}$", "$+20\\text{ cm}$"],
        0,
        "Total power is $P = +4 - 2 = +2\\text{ D}$. The focal length is $F = \\frac{100}{P} = \\frac{100}{2} = +50\\text{ cm}$."
    ),
    (
        "The radius of curvature of the curved face of a plano-convex lens is $15\\text{ cm}$. Its refractive index is $1.5$. Its power is:",
        ["$+3.33\\text{ D}$", "$+6.67\\text{ D}$", "$+2.5\\text{ D}$", "$-3.33\\text{ D}$"],
        0,
        "$\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{0.15}\\right) = 0.5 \\times \\frac{1}{0.15} = \\frac{1}{0.30}\\text{ m}^{-1} = +3.33\\text{ D}$."
    ),
    (
        "If a lens is made of two different materials of refractive indices $\\mu_1$ and $\\mu_2$ in upper and lower halves, how many images of a single point object will be formed?",
        ["Two images", "One image", "Infinite images", "Zero"],
        0,
        "Each half has a different refractive index, so it possesses a different focal length ($f_1 \\ne f_2$). By the lens formula, each half focuses rays from the point object at a different axial position, producing two distinct images."
    ),
    (
        "A glass lens is placed in a medium. If light rays passing through the lens suffer no deviation at all, then:",
        ["The refractive index of the medium equals the refractive index of the lens", "The lens is very thin", "The medium is vacuum", "The lens is a cylinder"],
        0,
        "When the refractive index of the lens matches that of the surrounding medium ($\\mu_{\\text{lens}} = \\mu_{\\text{medium}}$), the relative refractive index is unity. No refraction occurs at the interfaces, and rays pass through straight without deviation."
    )
]

for i, item in enumerate(lens_formula_data):
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
    
    questions.append(make_q("Lens formula", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 5. Optical instruments (microscope, telescope) (45 MCQs)
# ==========================================

optical_instruments_data = [
    (
        "A simple microscope consists of a convex lens of focal length $5\\text{ cm}$. The magnifying power for an image formed at the near point ($D = 25\\text{ cm}$) is:",
        ["$6$", "$5$", "$4$", "$7$"],
        0,
        "For a simple microscope with the final image at the near point, $m = 1 + \\frac{D}{f} = 1 + \\frac{25}{5} = 1 + 5 = 6$."
    ),
    (
        "In the previous question, the magnifying power when the image is formed at infinity (normal adjustment) is:",
        ["$5$", "$6$", "$4$", "$2.5$"],
        0,
        "For normal adjustment (relaxed eye, image at infinity), $m = \\frac{D}{f} = \\frac{25}{5} = 5$."
    ),
    (
        "An astronomical telescope has an objective of focal length $100\\text{ cm}$ and an eyepiece of focal length $5\\text{ cm}$. The magnifying power in normal adjustment is:",
        ["$20$", "$500$", "$25$", "$105$"],
        0,
        "In normal adjustment, the magnifying power of an astronomical telescope is $m = \\frac{f_o}{f_e} = \\frac{100}{5} = 20$."
    ),
    (
        "The tube length of the telescope in the previous question in normal adjustment is:",
        ["$105\\text{ cm}$", "$95\\text{ cm}$", "$100\\text{ cm}$", "$500\\text{ cm}$"],
        0,
        "In normal adjustment, the tube length is $L = f_o + f_e = 100 + 5 = 105\\text{ cm}$."
    ),
    (
        "An astronomical telescope in normal adjustment has a magnifying power of 10 and length of the telescope tube is $110\\text{ cm}$. The focal lengths of the objective and eyepiece are:",
        ["$f_o = 100\\text{ cm}, f_e = 10\\text{ cm}$", "$f_o = 110\\text{ cm}, f_e = 11\\text{ cm}$", "$f_o = 90\\text{ cm}, f_e = 20\\text{ cm}$", "$f_o = 105\\text{ cm}, f_e = 5\\text{ cm}$"],
        0,
        "$m = \\frac{f_o}{f_e} = 10 \\implies f_o = 10 f_e$. Tube length is $L = f_o + f_e = 10 f_e + f_e = 11 f_e = 110\\text{ cm} \\implies f_e = 10\\text{ cm}$, and $f_o = 100\\text{ cm}$."
    ),
    (
        "In a compound microscope, the intermediate image formed by the objective lens is:",
        ["Real, inverted, and magnified", "Virtual, erect, and magnified", "Real, erect, and diminished", "Virtual, inverted, and diminished"],
        0,
        "The object is placed just beyond the principal focus of the objective ($f_o < u_o < 2f_o$). The objective forms a real, inverted, and magnified intermediate image inside the focal length of the eyepiece."
    ),
    (
        "The final image formed by a compound microscope with respect to the original object is:",
        ["Virtual, inverted, and magnified", "Real, erect, and magnified", "Virtual, erect, and diminished", "Real, inverted, and magnified"],
        0,
        "The intermediate real inverted image acts as an object for the eyepiece, which produces an erect virtual image relative to the intermediate image. Therefore, relative to the original object, the final image is virtual, inverted, and highly magnified."
    ),
    (
        "The objective lens of an astronomical telescope has a large focal length and a large aperture because:",
        ["Large aperture increases light-gathering power and resolving power, while large $f_o$ increases magnification", "It reduces spherical aberration", "Large aperture reduces chromatic aberration", "It decreases the tube length"],
        0,
        "A large aperture allows the objective to gather more light from distant faint celestial bodies and provides higher resolving power ($\\text{RP} = \\frac{D}{1.22\\lambda}$). A large $f_o$ yields greater angular magnification ($m = f_o/f_e$)."
    ),
    (
        "The resolving power of an astronomical telescope with objective diameter $D$ for light of wavelength $\\lambda$ is:",
        ["$\\frac{D}{1.22 \\lambda}$", "$\\frac{1.22 \\lambda}{D}$", "$\\frac{1.22 D}{\\lambda}$", "$\\frac{\\lambda}{D}$"],
        0,
        "The limit of resolution (angular separation) is $\\Delta\\theta = \\frac{1.22 \\lambda}{D}$. The resolving power is the reciprocal of the limit of resolution: $\\text{RP} = \\frac{1}{\\Delta\\theta} = \\frac{D}{1.22 \\lambda}$."
    ),
    (
        "The resolving power of a microscope can be increased by:",
        ["Using ultraviolet light and an oil-immersion objective", "Using red light and a small aperture", "Using longer wavelength light", "Decreasing the refractive index of the immersion oil"],
        0,
        "The resolving power of a microscope is $\\text{RP} = \\frac{2\\mu\\sin\\beta}{\\lambda}$. Decreasing $\\lambda$ (using shorter wavelength UV light) and increasing $\\mu$ (using cedar-wood oil immersion with $\\mu \\approx 1.5$) both significantly increase resolving power."
    ),
    (
        "Reflecting telescopes (such as the Cassegrain telescope) are preferred over refracting telescopes in modern astronomy because:",
        ["Mirrors have no chromatic aberration and can be mechanically supported across their entire back surface", "Mirrors have higher dispersive power", "Reflecting telescopes have inverted images", "Lenses are cheaper to manufacture in huge sizes"],
        0,
        "Large lenses suffer from severe chromatic aberration and sag under their own heavy weight because they can only be held at their rims. Parabolic mirrors have zero chromatic aberration, no spherical aberration, and can be supported from behind."
    ),
    (
        "A compound microscope has an objective of focal length $1.0\\text{ cm}$ and an eyepiece of focal length $2.5\\text{ cm}$. An object is placed at $1.2\\text{ cm}$ from the objective. If the final image is formed at the near point ($D = 25\\text{ cm}$), the magnification is:",
        ["$55$", "$50$", "$60$", "$45$"],
        0,
        "For objective: $\\frac{1}{v_o} = \\frac{1}{f_o} + \\frac{1}{u_o} = \\frac{1}{1.0} - \\frac{1}{1.2} = 1 - \\frac{5}{6} = \\frac{1}{6} \\implies v_o = 6.0\\text{ cm}$. Magnification of objective is $m_o = \\left|\\frac{v_o}{u_o}\\right| = \\frac{6.0}{1.2} = 5$. Magnification of eyepiece at near point is $m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{2.5} = 1 + 10 = 11$. Total magnification is $m = m_o \\times m_e = 5 \\times 11 = 55$."
    ),
    (
        "The magnifying power of an astronomical telescope in near point adjustment ($D = 25\\text{ cm}$) is given by:",
        ["$\\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$", "$\\frac{f_o}{f_e}\\left(1 + \\frac{D}{f_e}\\right)$", "$\\frac{f_e}{f_o}\\left(1 + \\frac{f_e}{D}\\right)$", "$\\frac{f_o}{f_e}$"],
        0,
        "For near point adjustment where the final image is formed at $D$, the angular magnification of an astronomical telescope is $m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$."
    ),
    (
        "A telescope has an objective of diameter $254\\text{ cm}$ (100 inches). The limit of resolution for light of wavelength $\\lambda = 6000\\text{ \\AA}$ is approximately:",
        ["$2.88 \\times 10^{-7}\\text{ rad}$", "$1.22 \\times 10^{-6}\\text{ rad}$", "$5.76 \\times 10^{-7}\\text{ rad}$", "$1.44 \\times 10^{-6}\\text{ rad}$"],
        0,
        "$\\Delta\\theta = \\frac{1.22\\lambda}{D} = \\frac{1.22 \\times 6 \\times 10^{-7}}{2.54} = \\frac{7.32 \\times 10^{-7}}{2.54} \\approx 2.88 \\times 10^{-7}\\text{ rad}$."
    ),
    (
        "In a Galilean telescope, the eyepiece is a:",
        ["Diverging (concave) lens", "Converging (convex) lens", "Plane mirror", "Parabolic mirror"],
        0,
        "A Galilean telescope uses a converging objective lens and a diverging (concave) eyepiece lens. This yields an erect final image with a shorter tube length ($L = f_o - f_e$)."
    ),
    (
        "A terrestrial telescope uses an erecting lens (inverting lens) of focal length $f$ between the objective and the eyepiece. The addition of the erecting lens increases the tube length of the telescope by:",
        ["$4f$", "$2f$", "$f$", "$8f$"],
        0,
        "To invert the image without changing its size ($m = -1$), the intermediate image must be placed at $2f$ from the erecting lens, and its image is formed at $2f$ behind it. Thus the distance added to the tube length is $2f + 2f = 4f$."
    ),
    (
        "If the focal length of the objective of a telescope is increased while keeping the eyepiece unchanged:",
        ["Magnifying power increases and tube length increases", "Magnifying power decreases and tube length decreases", "Magnifying power increases and tube length decreases", "Magnifying power remains unchanged"],
        0,
        "Magnifying power is $m = f_o / f_e$ and tube length is $L = f_o + f_e$. Increasing $f_o$ directly increases both the magnifying power and the tube length."
    ),
    (
        "A compound microscope has an objective of focal length $f_o = 4\\text{ mm}$ and eyepiece of focal length $f_e = 25\\text{ mm}$. If the tube length is $16\\text{ cm}$, the magnifying power for normal adjustment is:",
        ["$400$", "$200$", "$100$", "$800$"],
        0,
        "In normal adjustment, $m \\approx \\frac{L}{f_o} \\times \\frac{D}{f_e} = \\frac{160\\text{ mm}}{4\\text{ mm}} \\times \\frac{250\\text{ mm}}{25\\text{ mm}} = 40 \\times 10 = 400$."
    ),
    (
        "Why is an oil immersion objective lens used in high-power microscopes?",
        ["Cedar-wood oil increases the numerical aperture ($NA = \\mu \\sin\\beta$), thereby increasing resolving power", "Oil reduces the focal length of the eyepiece", "Oil eliminates all reflections", "Oil protects the specimen from drying out only"],
        0,
        "By placing cedar-wood oil ($\\mu \\approx 1.515$, matching glass) between the coverslip and the objective lens, light rays do not undergo total internal reflection or wide refraction away from the lens. The numerical aperture $\\mu\\sin\\beta$ increases, significantly boosting the resolving power."
    ),
    (
        "The eye lens of the human eye forms an image on the retina that is:",
        ["Real and inverted", "Virtual and erect", "Virtual and inverted", "Real and erect"],
        0,
        "The eye lens is a converging lens system that casts a real, inverted, and diminished optical image of external objects onto the photosensitive retina, which the brain subsequently interprets as erect."
    ),
    (
        "A person suffering from myopia (near-sightedness) cannot see distant objects clearly. This defect is corrected by using a:",
        ["Concave (diverging) lens", "Convex (converging) lens", "Cylindrical lens", "Bifocal lens"],
        0,
        "In myopia, light rays from a distant object converge in front of the retina. A concave lens diverges the rays slightly before they enter the eye, shifting the focal point back onto the retina."
    ),
    (
        "A person suffering from hypermetropia (far-sightedness) is prescribed spectacles with:",
        ["Convex (converging) lenses", "Concave (diverging) lenses", "Cylindrical lenses", "Plane glass"],
        0,
        "In hypermetropia, light rays from a nearby object converge behind the retina. A convex lens provides extra convergence, shifting the image forward onto the retina."
    ),
    (
        "Astigmatism in the human eye arises from unequal curvature of the cornea in different planes. It is corrected using:",
        ["Cylindrical lenses", "Spherical convex lenses", "Spherical concave lenses", "Contact lenses only"],
        0,
        "Astigmatism occurs when the cornea is non-spherical (e.g. curved more vertically than horizontally). A cylindrical lens has power in only one meridian, compensating for the directional asymmetry of the cornea."
    ),
    (
        "Presbyopia is an age-related vision defect caused by the gradual weakening of the ciliary muscles and diminishing flexibility of the eye lens. It is commonly corrected by:",
        ["Bifocal lenses (upper part concave for distance, lower part convex for reading)", "Monofocal concave lenses", "Cylindrical lenses", "Tinted lenses"],
        0,
        "Presbyopia affects accommodation for both near and distant vision. Bifocal spectacles, with a concave upper portion for distance viewing and a convex lower portion for near reading, are standardly prescribed."
    ),
    (
        "The least distance of distinct vision ($D$) for a normal human adult eye is approximately:",
        ["$25\\text{ cm}$", "$50\\text{ cm}$", "$10\\text{ cm}$", "Infinity"],
        0,
        "The near point of a healthy young adult human eye without strain is standardly taken as $D = 25\\text{ cm}$."
    ),
    (
        "The far point of a normal human eye is at:",
        ["Infinity", "$25\\text{ cm}$", "$100\\text{ m}$", "$1\\text{ km}$"],
        0,
        "A normal relaxed human eye can focus parallel rays from celestial objects (stars, sun) onto the retina, so its far point is at infinity."
    ),
    (
        "An astronomical telescope has an angular magnification of $-25$ in normal adjustment. If the length of the tube is $104\\text{ cm}$, the focal length of the objective is:",
        ["$100\\text{ cm}$", "$104\\text{ cm}$", "$96\\text{ cm}$", "$4\\text{ cm}$"],
        0,
        "$m = f_o / f_e = 25 \\implies f_o = 25 f_e$. $L = f_o + f_e = 26 f_e = 104\\text{ cm} \\implies f_e = 4\\text{ cm}$. Therefore, $f_o = 25 \\times 4 = 100\\text{ cm}$."
    ),
    (
        "The aperture of the objective lens of an astronomical telescope is doubled. Its resolving power will:",
        ["Double", "Be halved", "Quadruple", "Remain unchanged"],
        0,
        "Resolving power of a telescope is $\\text{RP} = \\frac{D}{1.22\\lambda}$. Since $\\text{RP} \\propto D$, doubling the aperture diameter $D$ doubles the resolving power."
    ),
    (
        "In the previous question, the light-gathering power of the telescope objective will:",
        ["Increase by 4 times", "Double", "Remain unchanged", "Increase by 8 times"],
        0,
        "Light-gathering power is proportional to the area of the objective lens: $\\text{Area} = \\frac{\\pi D^2}{4} \\propto D^2$. Doubling the diameter increases the light-gathering area by a factor of $2^2 = 4$."
    ),
    (
        "A Cassegrain reflecting telescope uses:",
        ["A large primary concave parabolic mirror and a secondary convex hyperbolic mirror", "Two concave spherical mirrors", "A large convex primary mirror", "A large objective lens and a plane mirror"],
        0,
        "In a Cassegrain telescope, incoming light reflects from a large primary concave parabolic mirror, converges toward a secondary small convex mirror, and is reflected back through a central hole in the primary mirror to the eyepiece."
    ),
    (
        "The final image formed by an astronomical telescope in normal adjustment is located at:",
        ["Infinity", "Near point ($D = 25\\text{ cm}$)", "The objective focus", "The eyepiece center"],
        0,
        "In normal adjustment, rays emerging from the eyepiece are parallel to each other, so the final virtual image is formed at infinity, allowing the observer's eye muscles to remain completely relaxed."
    ),
    (
        "If the objective of a telescope is covered by half with an opaque cloth, the image of a distant star will:",
        ["Be seen complete, but with its brightness reduced to half", "Show only the right half of the star", "Disappear completely", "Have double magnification"],
        0,
        "Light from the distant object covers the entire lens surface. Covering half the aperture reduces the gathered light flux by $50\\%$, so the image remains completely visible with halved intensity."
    ),
    (
        "An astronomical telescope is used to view a $100\\text{ m}$ tall tower at a distance of $3\\text{ km}$. If $f_o = 140\\text{ cm}$ and $f_e = 5\\text{ cm}$, the height of the intermediate image formed by the objective is:",
        ["$4.67\\text{ cm}$", "$2.33\\text{ cm}$", "$9.34\\text{ cm}$", "$1.40\\text{ cm}$"],
        0,
        "Angle subtended by tower at objective is $\\theta = \\frac{h}{d} = \\frac{100\\text{ m}}{3000\\text{ m}} = \\frac{1}{30}\\text{ rad}$. The height of the image formed at the focus of the objective is $h_i = f_o \\theta = 140\\text{ cm} \\times \\frac{1}{30} = \\frac{14}{3}\\text{ cm} \\approx 4.67\\text{ cm}$."
    ),
    (
        "The magnifying power of a compound microscope can be increased by:",
        ["Decreasing the focal lengths of both objective and eyepiece", "Increasing the focal lengths of both lenses", "Increasing the focal length of the objective only", "Decreasing the tube length"],
        0,
        "Since $m \\approx \\frac{L}{f_o} \\times \\frac{D}{f_e}$, magnifying power is inversely proportional to both $f_o$ and $f_e$. Decreasing both focal lengths increases total magnification."
    ),
    (
        "The separation between the objective and eyepiece of a compound microscope is $L$. If the magnification of the objective is $m_o$ and that of the eyepiece is $m_e$, the total magnification is:",
        ["$m_o \\times m_e$", "$m_o + m_e$", "$\\frac{m_o + m_e}{2}$", "$\\sqrt{m_o m_e}$"],
        0,
        "Magnification in a multi-stage optical system is multiplicative: the intermediate image formed by the first stage is further magnified by the second stage, giving $m = m_1 \\times m_2 = m_o \\times m_e$."
    ),
    (
        "A simple magnifying glass of focal length $f = 10\\text{ cm}$ is used by a person with normal near point $D = 25\\text{ cm}$. The range of magnifying power accessible by adjusting object position is:",
        ["$2.5$ to $3.5$", "$1.5$ to $2.5$", "$3.0$ to $4.0$", "$2.0$ to $3.0$"],
        0,
        "For image at infinity: $m_{\\text{min}} = \\frac{D}{f} = \\frac{25}{10} = 2.5$. For image at the near point: $m_{\\text{max}} = 1 + \\frac{D}{f} = 1 + 2.5 = 3.5$. The magnifying power ranges continuously from $2.5$ to $3.5$."
    ),
    (
        "The diameter of the pupil of a human eye is approximately $2\\text{ mm}$. For light of wavelength $500\\text{ nm}$, the minimum angular separation of two distant point sources that can be resolved by the unaided eye is approximately:",
        ["$3.05 \\times 10^{-4}\\text{ rad}$ (about $1\\text{ minute of arc}$)", "$1.22 \\times 10^{-3}\\text{ rad}$", "$6.10 \\times 10^{-5}\\text{ rad}$", "$1.52 \\times 10^{-4}\\text{ rad}$"],
        0,
        "$\\Delta\\theta = \\frac{1.22\\lambda}{D} = \\frac{1.22 \\times (500 \\times 10^{-9})}{2 \\times 10^{-3}} = \\frac{6.1 \\times 10^{-7}}{2 \\times 10^{-3}} = 3.05 \\times 10^{-4}\\text{ rad} \\approx 1.05'$, which corresponds to about 1 arcminute."
    ),
    (
        "In an astronomical telescope, the focal length of the objective is $60\\text{ cm}$ and that of the eyepiece is $3\\text{ cm}$. The length of the tube for viewing distant objects with image at infinity is:",
        ["$63\\text{ cm}$", "$57\\text{ cm}$", "$20\\text{ cm}$", "$180\\text{ cm}$"],
        0,
        "In normal adjustment, tube length is $L = f_o + f_e = 60 + 3 = 63\\text{ cm}$."
    ),
    (
        "The magnification produced by an astronomical telescope for a relaxed eye is $5$. If the distance between the lenses is $36\\text{ cm}$, the focal length of the objective is:",
        ["$30\\text{ cm}$", "$6\\text{ cm}$", "$36\\text{ cm}$", "$24\\text{ cm}$"],
        0,
        "$m = f_o / f_e = 5 \\implies f_o = 5 f_e$. $L = f_o + f_e = 6 f_e = 36\\text{ cm} \\implies f_e = 6\\text{ cm}$. Therefore, $f_o = 5 \\times 6 = 30\\text{ cm}$."
    ),
    (
        "Which of the following optical instruments always produces an erect virtual image of an object for normal viewing?",
        ["Galilean telescope and terrestrial telescope", "Astronomical telescope", "Compound microscope", "Newtonian reflector without prism"],
        0,
        "A Galilean telescope (with diverging eyepiece) and a terrestrial telescope (with erecting lens) are designed specifically for observing land targets, producing erect virtual images."
    ),
    (
        "A compound microscope has magnification $m = 30$. The focal length of the eyepiece is $5\\text{ cm}$ and image is formed at near point ($D = 25\\text{ cm}$). The magnification produced by the objective is:",
        ["$5$", "$6$", "$25$", "$150$"],
        0,
        "Eyepiece magnification is $m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{5} = 6$. Total magnification is $m = m_o \\times m_e \\implies 30 = m_o \\times 6 \\implies m_o = 5$."
    ),
    (
        "When the length of a microscope tube is increased, its magnifying power:",
        ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
        0,
        "Since $m \\approx \\frac{L}{f_o} \\frac{D}{f_e}$, magnifying power is directly proportional to tube length $L$. Increasing $L$ increases the magnifying power."
    ),
    (
        "When the length of a telescope tube is increased (in near point adjustment compared to normal adjustment):",
        ["Magnifying power increases", "Magnifying power decreases", "Image brightness increases", "Resolving power decreases"],
        0,
        "In near point adjustment, $m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right) > \\frac{f_o}{f_e}$, so the magnification is greater than in normal adjustment."
    ),
    (
        "The eye piece of an astronomical telescope has focal length $f_e = 10\\text{ cm}$. To have a magnifying power of 10 in normal adjustment, the distance between objective and eye piece should be:",
        ["$110\\text{ cm}$", "$100\\text{ cm}$", "$90\\text{ cm}$", "$10\\text{ cm}$"],
        0,
        "$m = f_o / f_e = 10 \\implies f_o = 10 \\times 10 = 100\\text{ cm}$. Distance between lenses is $L = f_o + f_e = 100 + 10 = 110\\text{ cm}$."
    ),
    (
        "In which of the following instruments is the field of view maximum?",
        ["Telescope with smaller magnification", "Telescope with highest magnification", "Compound microscope with oil immersion", "Electron microscope"],
        0,
        "Field of view is inversely proportional to magnification: lower magnification provides a wider angular field of view, making it easier to locate objects."
    )
]

for i, item in enumerate(optical_instruments_data):
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
    
    questions.append(make_q("Optical instruments (microscope, telescope)", item[0], new_opts, target_idx, item[3]))

# ==========================================
# 6. Interference (45 MCQs)
# ==========================================

interference_data = [
    (
        "Two coherent monochromatic light beams of intensities $I$ and $4I$ are superposed. The maximum and minimum possible intensities in the resulting interference pattern are:",
        ["$9I$ and $I$", "$5I$ and $3I$", "$16I$ and $I$", "$25I$ and $9I$"],
        0,
        "Maximum intensity is $I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2 = (\\sqrt{I} + \\sqrt{4I})^2 = (\\sqrt{I} + 2\\sqrt{I})^2 = (3\\sqrt{I})^2 = 9I$. Minimum intensity is $I_{\\text{min}} = (\\sqrt{I_2} - \\sqrt{I_1})^2 = (2\\sqrt{I} - \\sqrt{I})^2 = (\\sqrt{I})^2 = I$."
    ),
    (
        "The contrast or visibility of fringes in an interference pattern is defined as $V = \\frac{I_{\\text{max}} - I_{\\text{min}}}{I_{\\text{max}} + I_{\\text{min}}}$. When two interfering waves have equal amplitudes ($I_1 = I_2$), the fringe visibility is:",
        ["$1$ (maximum contrast)", "$0$", "$0.5$", "$\\infty$"],
        0,
        "When $I_1 = I_2 = I_0$, $I_{\\text{max}} = 4I_0$ and $I_{\\text{min}} = 0$. Fringe visibility is $V = \\frac{4I_0 - 0}{4I_0 + 0} = 1$, providing perfect contrast (completely dark minima and bright maxima)."
    ),
    (
        "Two light sources are said to be coherent if they emit light waves having:",
        ["Constant or zero phase difference", "Same intensity only", "Same speed only", "Same direction of propagation only"],
        0,
        "Two sources are strictly coherent if they emit light waves of the same frequency and wavelength with a constant (time-independent) phase difference."
    ),
    (
        "Why can two independent light bulbs never produce sustained observable interference?",
        ["They emit light with random and rapidly changing phase differences on the order of $10^{-8}\\text{ s}$", "Their wavelengths are completely different", "Their intensities are not equal", "Light from incandescent bulbs does not travel in straight lines"],
        0,
        "Light emission in independent thermal sources occurs by spontaneous emission of photons from millions of atoms independently. The phase of emission changes randomly every $\\sim 10^{-8}\\text{ s}$, washing out the interference pattern into a uniform average intensity."
    ),
    (
        "The phase difference $\\phi$ between two coherent waves having a path difference $\\Delta x$ in a medium of wavelength $\\lambda$ is:",
        ["$\\frac{2\\pi}{\\lambda} \\Delta x$", "$\\frac{\\pi}{\\lambda} \\Delta x$", "$\\frac{\\lambda}{2\\pi} \\Delta x$", "$2\\pi \\lambda \\Delta x$"],
        0,
        "A full wave of wavelength $\\lambda$ corresponds to a phase difference of $2\\pi$ radians. Therefore, for a path difference $\\Delta x$, the phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$."
    ),
    (
        "In an interference pattern, the condition for constructive interference (bright fringe) in terms of path difference $\\Delta x$ is ($n = 0, 1, 2, \\dots$):",
        ["$\\Delta x = n \\lambda$", "$\\Delta x = (2n + 1) \\frac{\\lambda}{2}$", "$\\Delta x = (n + 1) \\lambda$", "$\\Delta x = \\frac{n \\lambda}{2}$"],
        0,
        "Constructive interference occurs when waves arrive in phase, corresponding to phase differences $\\phi = 2n\\pi$, which corresponds to path differences $\\Delta x = n \\lambda$."
    ),
    (
        "The condition for destructive interference (dark fringe) in terms of path difference $\\Delta x$ is ($n = 1, 2, 3, \\dots$):",
        ["$\\Delta x = (2n - 1) \\frac{\\lambda}{2}$", "$\\Delta x = n \\lambda$", "$\\Delta x = 2n \\lambda$", "$\\Delta x = (n - 1) \\lambda$"],
        0,
        "Destructive interference occurs when waves arrive exactly out of phase ($\\phi = (2n - 1)\\pi$), which corresponds to an odd multiple of half-wavelengths: $\\Delta x = (2n - 1) \\frac{\\lambda}{2}$."
    ),
    (
        "Two coherent waves each of intensity $I_0$ superpose with a phase difference $\\phi$. The resultant intensity is given by:",
        ["$4 I_0 \\cos^2(\\phi / 2)$", "$2 I_0 \\cos(\\phi)$", "$4 I_0 \\sin^2(\\phi / 2)$", "$I_0 \\cos^2(\\phi)$"],
        0,
        "$I = I_0 + I_0 + 2\\sqrt{I_0 I_0} \\cos\\phi = 2I_0(1 + \\cos\\phi) = 2I_0\\left(2\\cos^2(\\phi/2)\\right) = 4 I_0 \\cos^2(\\phi/2)$."
    ),
    (
        "In the previous question, the average intensity over a full cycle of phase differences is:",
        ["$2 I_0$", "$4 I_0$", "$I_0$", "Zero"],
        0,
        "The average of $\\cos^2(\\phi/2)$ over a cycle is $1/2$. Thus $I_{\\text{avg}} = 4 I_0 \\times \\frac{1}{2} = 2 I_0$, which equals the sum of the individual intensities ($I_1 + I_2$), showing that energy is simply redistributed and conserved."
    ),
    (
        "In an interference pattern, the ratio of maximum to minimum intensity is $25 : 1$. The ratio of the amplitudes of the two interfering waves is:",
        ["$3 : 2$", "$5 : 1$", "$25 : 1$", "$9 : 4$"],
        0,
        "$\\frac{I_{\\text{max}}}{I_{\\text{min}}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\frac{25}{1} \\implies \\frac{A_1 + A_2}{A_1 - A_2} = 5 \\implies A_1 + A_2 = 5A_1 - 5A_2 \\implies 6A_2 = 4A_1 \\implies \\frac{A_1}{A_2} = \\frac{6}{4} = \\frac{3}{2}$."
    ),
    (
        "In the previous question, the ratio of the intensities of the two individual waves $I_1 / I_2$ is:",
        ["$9 / 4$", "$5 / 1$", "$25 / 1$", "$3 / 2$"],
        0,
        "Since intensity is proportional to the square of amplitude: $\\frac{I_1}{I_2} = \\left(\\frac{A_1}{A_2}\\right)^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$."
    ),
    (
        "The brilliant colors seen in thin soap bubbles and thin oil films on water when illuminated by white light are caused by:",
        ["Interference of light waves reflected from the top and bottom surfaces of the thin film", "Dispersion of light by prism action", "Diffraction of light by microscopic droplets", "Polarization by scattering"],
        0,
        "Light reflects from both the top and bottom surfaces of the thin film. For a specific wavelength, the path difference satisfies the condition for constructive interference, intensifying that colour in the reflected light, while other wavelengths interfere destructively."
    ),
    (
        "For normal incidence on a thin film of refractive index $\\mu$ and thickness $t$ surrounded by air, the condition for constructive interference in reflected light is:",
        ["$2\\mu t = \\left(n + \\frac{1}{2}\\right)\\lambda$", "$2\\mu t = n\\lambda$", "$2\\mu t = (2n + 1)\\lambda$", "$\\mu t = n\\lambda$"],
        0,
        "Reflection at the top surface (air to film, rarer to denser) introduces an abrupt phase shift of $\\pi$ (equivalent to path difference $\\lambda/2$), while reflection at the bottom surface (film to air) introduces zero phase shift. Total effective path difference is $\\Delta = 2\\mu t + \\lambda/2$. For constructive interference: $2\\mu t + \\lambda/2 = m\\lambda \\implies 2\\mu t = (m - 1/2)\\lambda = (n + 1/2)\\lambda$."
    ),
    (
        "For the same thin film in reflected light, the condition for destructive interference is:",
        ["$2\\mu t = n\\lambda$", "$2\\mu t = (n + 1/2)\\lambda$", "$2\\mu t = (2n + 1)\\lambda/4$", "$\\mu t = n\\lambda/2$"],
        0,
        "For destructive interference, effective path difference must be an odd multiple of $\\lambda/2$: $2\\mu t + \\lambda/2 = (2n + 1)\\frac{\\lambda}{2} \\implies 2\\mu t = n\\lambda$."
    ),
    (
        "A soap bubble appears completely black just before it bursts because:",
        ["Its thickness becomes much less than the wavelength of light ($t \\ll \\lambda$), so the path difference is nearly $\\lambda/2$ (destructive interference for all visible wavelengths)", "The bubble becomes completely transparent and reflects zero light", "Light is totally absorbed by soap molecules", "The refractive index drops to zero"],
        0,
        "When the film drains to a thickness $t \\ll \\lambda$, the optical path difference $2\\mu t \\to 0$. The net path difference between the two reflected rays is solely the phase change $\\lambda/2$ at the top surface, producing destructive interference for all wavelengths in reflected light, making it appear dark/black."
    ),
    (
        "According to Huygens' principle, each point on a primary wavefront acts as a source of:",
        ["Secondary spherical wavelets that spread out in all forward directions with the speed of the wave", "Longitudinal sound waves", "Plane waves traveling backward", "Electrons"],
        0,
        "Huygens' principle states that every point on a wavefront serves as a point source of secondary spherical wavelets that propagate outward with the speed of light in the medium; the envelope tangent to these wavelets gives the new wavefront at a later time."
    ),
    (
        "A plane wavefront is incident on a thin convex lens. The emergent wavefront is:",
        ["Spherical converging towards the focus", "Spherical diverging from the focus", "Plane wavefront", "Cylindrical wavefront"],
        0,
        "A convex lens delays the central portion of a plane wavefront more than its edges (since light travels slower in glass than in air). The emergent wavefront curves into a spherical wavefront that converges to the principal focus."
    ),
    (
        "A point source of light situated in an isotropic medium emits wavefronts that are:",
        ["Spherical", "Cylindrical", "Plane", "Elliptical"],
        0,
        "In an isotropic medium where speed of light is the same in all directions, the locus of points oscillating in the same phase from a point source is a sphere."
    ),
    (
        "A linear slit source of light emits wavefronts that are:",
        ["Cylindrical", "Spherical", "Plane", "Conical"],
        0,
        "For a line source (narrow slit), wavelets spread out symmetrically in three dimensions, forming coaxial cylindrical wavefronts."
    ),
    (
        "At an extremely large distance from any light source, a small portion of a spherical or cylindrical wavefront can be approximated as a:",
        ["Plane wavefront", "Spherical wavefront", "Hyperbolic wavefront", "Cylindrical wavefront"],
        0,
        "As the radius of curvature approaches infinity ($R \\to \\infty$), any finite portion of a spherical or cylindrical wavefront flattens out into a plane wavefront."
    ),
    (
        "In an interference experiment, the path difference between two interfering waves at a point on the screen is $\\frac{11}{4}\\lambda$. The phase difference between the waves at this point is:",
        ["$\\frac{11\\pi}{2}$ radians", "$11\\pi$ radians", "$\\frac{11\\pi}{4}$ radians", "$22\\pi$ radians"],
        0,
        "$\\phi = \\frac{2\\pi}{\\lambda} \\Delta x = \\frac{2\\pi}{\\lambda} \\left(\\frac{11}{4}\\lambda\\right) = \\frac{11\\pi}{2}$ radians."
    ),
    (
        "In the previous question, the intensity at that point (for two waves of equal intensity $I_0$) is:",
        ["$2 I_0$", "$4 I_0$", "Zero", "$I_0$"],
        0,
        "$I = 4 I_0 \\cos^2(\\phi/2) = 4 I_0 \\cos^2\\left(\\frac{11\\pi}{4}\\right) = 4 I_0 \\cos^2\\left(3\\pi - \\frac{\\pi}{4}\\right) = 4 I_0 \\left(-\\frac{1}{\\sqrt{2}}\\right)^2 = 4 I_0 \\times \\frac{1}{2} = 2 I_0$."
    ),
    (
        "If the path difference between two interfering waves is $\\lambda / 6$, the ratio of the intensity at this point to the maximum intensity is:",
        ["$3 / 4$", "$1 / 2$", "$1 / 4$", "$3 / 2$"],
        0,
        "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{6}\\right) = \\frac{\\pi}{3} = 60^\\circ$. The intensity is $I = I_{\\text{max}} \\cos^2(\\phi/2) = I_{\\text{max}} \\cos^2(30^\\circ) = I_{\\text{max}} \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4} I_{\\text{max}}$."
    ),
    (
        "If the path difference between two interfering waves is $\\lambda / 3$, the ratio of the intensity at this point to the maximum intensity is:",
        ["$1 / 4$", "$3 / 4$", "$1 / 2$", "$1 / 8$"],
        0,
        "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{3}\\right) = \\frac{2\\pi}{3} = 120^\\circ$. Intensity is $I = I_{\\text{max}} \\cos^2(60^\\circ) = I_{\\text{max}} \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} I_{\\text{max}}$."
    ),
    (
        "Two coherent sources with intensity ratio $\\alpha = I_1 / I_2$ produce interference fringes. The value of $\\frac{I_{\\text{max}} - I_{\\text{min}}}{I_{\\text{max}} + I_{\\text{min}}}$ is:",
        ["$\\frac{2\\sqrt{\\alpha}}{\\alpha + 1}$", "$\\frac{\\sqrt{\\alpha}}{\\alpha + 1}$", "$\\frac{2\\alpha}{\\alpha + 1}$", "$\\frac{\\alpha - 1}{\\alpha + 1}$"],
        0,
        "$I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2 = I_1 + I_2 + 2\\sqrt{I_1 I_2}$. $I_{\\text{min}} = I_1 + I_2 - 2\\sqrt{I_1 I_2}$. Thus $\\frac{I_{\\text{max}} - I_{\\text{min}}}{I_{\\text{max}} + I_{\\text{min}}} = \\frac{4\\sqrt{I_1 I_2}}{2(I_1 + I_2)} = \\frac{2\\sqrt{I_1/I_2}}{I_1/I_2 + 1} = \\frac{2\\sqrt{\\alpha}}{\\alpha + 1}$."
    ),
    (
        "In a Lloyd's mirror interference experiment, the central fringe is:",
        ["Dark, because reflection from the mirror introduces an extra $\\pi$ phase shift", "Bright", "Colored", "Invisible"],
        0,
        "In Lloyd's single-mirror interference, one interfering beam comes directly from the slit and the second beam undergoes grazing reflection from the mirror. Reflection at the mirror surface introduces an extra $\\pi$ phase change (path difference $\\lambda/2$), so the central fringe is dark."
    ),
    (
        "Fresnel's biprism produces two coherent virtual sources by:",
        ["Division of wavefront", "Division of amplitude", "Polarization", "Total internal reflection"],
        0,
        "A Fresnel biprism consists of two acute prisms joined at their bases. Light from a single slit is refracted into two beams, dividing the wavefront into two separate virtual coherent sources."
    ),
    (
        "Newton's rings are formed by interference through:",
        ["Division of amplitude in an air film between a plano-convex lens and a flat glass plate", "Division of wavefront", "Diffraction through a circular aperture", "Polarization of light"],
        0,
        "Newton's rings are interference fringes produced by division of amplitude within the variable-thickness wedge-shaped air film formed between a spherical lens surface and a plane glass plate."
    ),
    (
        "In Newton's rings experiment in reflected light, the center of the ring pattern is:",
        ["Dark", "Bright", "Red", "Yellow"],
        0,
        "At the central point of contact, the air film thickness is zero ($t = 0$). The ray reflected from the bottom surface (air to glass) undergoes a $\\pi$ phase shift while the ray reflected from the lens (glass to air) does not. The destructive interference makes the center completely dark."
    ),
    (
        "In Newton's rings experiment in transmitted light, the center of the ring pattern is:",
        ["Bright", "Dark", "Blue", "Absent"],
        0,
        "In transmitted light, both interfering rays suffer an even number of reflections (or zero), so there is no relative phase shift. At the point of contact ($t = 0$), the waves arrive in phase, producing a bright central fringe."
    ),
    (
        "The diameters of dark rings in Newton's rings (in reflected light) are proportional to:",
        ["$\\sqrt{n}$ ($n = 1, 2, 3, \\dots$)", "$n$", "$n^2$", "$\\sqrt{2n - 1}$"],
        0,
        "The condition for dark rings is $2t = n\\lambda$. For a spherical surface of radius $R$, $t \\approx \\frac{r_n^2}{2R} \\implies 2\\left(\\frac{r_n^2}{2R}\\right) = n\\lambda \\implies r_n^2 = n R \\lambda \\implies D_n = 2r_n = 2\\sqrt{n R \\lambda} \\propto \\sqrt{n}$."
    ),
    (
        "The diameters of bright rings in Newton's rings are proportional to:",
        ["$\\sqrt{2n - 1}$", "$\\sqrt{n}$", "$n$", "$2n - 1$"],
        0,
        "The condition for bright rings is $2t = \\left(n - \\frac{1}{2}\\right)\\lambda = \\frac{2n - 1}{2}\\lambda$. Thus $\\frac{r_n^2}{R} = \\frac{2n - 1}{2}\\lambda \\implies D_n \\propto \\sqrt{2n - 1}$."
    ),
    (
        "If a liquid of refractive index $\\mu$ is introduced between the lens and the glass plate in Newton's rings experiment, the diameter of the rings will:",
        ["Decrease by a factor of $\\sqrt{\\mu}$", "Increase by a factor of $\\sqrt{\\mu}$", "Increase by a factor of $\\mu$", "Remain unchanged"],
        0,
        "With liquid of index $\\mu$, the condition for dark rings becomes $2\\mu t = n\\lambda \\implies r_n^2 = \\frac{n R \\lambda}{\\mu} \\implies D_n = \\frac{D_{n,\\text{air}}}{\\sqrt{\\mu}}$. Because $\\mu > 1$, the ring diameters shrink by $\\sqrt{\\mu}$."
    ),
    (
        "Does interference violate the principle of conservation of energy?",
        ["No, energy is merely redistributed from minima (where it is zero) to maxima (where it is $4I_0$)", "Yes, because intensity increases to $4I_0$", "Yes, because destructive interference destroys energy", "No, because only light is involved"],
        0,
        "Interference does not create or destroy energy. Total energy across the pattern is simply redistributed: energy missing from destructive dark regions appears concentrated at constructive bright regions, and average intensity equals the sum of separate intensities."
    ),
    (
        "Two waves with intensities $9\\text{ W/m}^2$ and $4\\text{ W/m}^2$ interfere. The intensity at a point where the phase difference is $\\pi / 2$ is:",
        ["$13\\text{ W/m}^2$", "$25\\text{ W/m}^2$", "$1\\text{ W/m}^2$", "$5\\text{ W/m}^2$"],
        0,
        "$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$. For $\\phi = \\pi/2$, $\\cos(\\pi/2) = 0$, so $I = I_1 + I_2 = 9 + 4 = 13\\text{ W/m}^2$."
    ),
    (
        "Coherent sources can be obtained by:",
        ["Division of wavefront or division of amplitude from a single parent source", "Using two identical independent lasers", "Using two incandescent bulbs of equal wattage", "Using sodium vapor lamps side by side"],
        0,
        "True coherence requires that the interfering beams originate from the same primary wavefront (e.g. Young's slits, biprism) or through division of amplitude (e.g. thin films, beam splitters)."
    ),
    (
        "The coherence length of a laser is much longer than that of a conventional lamp because:",
        ["Laser light has an extremely narrow spectral bandwidth (highly monochromatic)", "Lasers have higher power", "Laser beams are parallel", "Laser light is polarized"],
        0,
        "Coherence length is $L_c = \\frac{c}{\\Delta\\nu}$. Because lasers have exceptionally small frequency spread $\\Delta\\nu$, their coherence length is kilometers long compared to millimeters or micrometers for incandescent light."
    ),
    (
        "Two light waves having identical intensity $I_0$ interfere at a point where path difference is $\\lambda / 4$. The intensity at this point is:",
        ["$2 I_0$", "$I_0$", "$4 I_0$", "Zero"],
        0,
        "Phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{4}\\right) = \\frac{\\pi}{2}$. Resultant intensity is $I = 4 I_0 \\cos^2(\\pi/4) = 4 I_0 \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 4 I_0 \\times \\frac{1}{2} = 2 I_0$."
    ),
    (
        "In an interference pattern, if the two slits have unequal widths such that the ratio of intensities is $4 : 1$, the ratio $I_{\\text{max}} / I_{\\text{min}}$ is:",
        ["$9 : 1$", "$25 : 1$", "$5 : 1$", "$16 : 1$"],
        0,
        "$I_{\\text{max}} = (\\sqrt{4} + \\sqrt{1})^2 = (2 + 1)^2 = 9$. $I_{\\text{min}} = (\\sqrt{4} - \\sqrt{1})^2 = (2 - 1)^2 = 1$. Thus $I_{\\text{max}} / I_{\\text{min}} = 9 : 1$."
    ),
    (
        "If white light is used in a thin film interference experiment, the film will appear:",
        ["Coloured, with different colours reflected at different angles and film thicknesses", "Completely dark", "Pure white everywhere", "Uniformly yellow"],
        0,
        "Because each visible wavelength satisfies the constructive condition at different film thicknesses and viewing angles, white light illumination produces a brilliant multicolored spectrum across the film."
    ),
    (
        "A non-reflecting coating on a camera lens (bloomed lens) consists of a thin film of $\\text{MgF}_2$ ($\\mu = 1.38$) on glass ($\\mu = 1.5$). The minimum thickness required to eliminate reflection of light of wavelength $552\\text{ nm}$ is:",
        ["$100\\text{ nm}$", "$200\\text{ nm}$", "$138\\text{ nm}$", "$55.2\\text{ nm}$"],
        0,
        "Here $\\mu_{\\text{air}} < \\mu_{\\text{film}} < \\mu_{\\text{glass}}$ ($1.0 < 1.38 < 1.5$). Light reflects from a denser medium at BOTH the air-film and film-glass interfaces, so both reflections suffer a $\\pi$ phase shift. Destructive interference requires $2\\mu t = \\frac{\\lambda}{2} \\implies t = \\frac{\\lambda}{4\\mu} = \\frac{552\\text{ nm}}{4 \\times 1.38} = \\frac{552}{5.52} = 100\\text{ nm}$."
    ),
    (
        "The phenomenon of interference of light proves that light:",
        ["Possesses a wave nature", "Consists of discrete corpuscles", "Has zero mass", "Is an uncharged particle"],
        0,
        "Interference and diffraction can only be explained by the superposition principle of waves, providing decisive evidence for the wave theory of light."
    ),
    (
        "Two interfering beams have amplitudes in the ratio $2 : 1$. The ratio of the maximum intensity to minimum intensity is:",
        ["$9 : 1$", "$3 : 1$", "$4 : 1$", "$5 : 1$"],
        0,
        "$\\frac{I_{\\text{max}}}{I_{\\text{min}}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{2 + 1}{2 - 1}\\right)^2 = 3^2 = 9$ (or $9 : 1$)."
    ),
    (
        "If two waves $y_1 = a \\sin(\\omega t)$ and $y_2 = a \\sin(\\omega t + \\pi)$ interfere, the resultant amplitude is:",
        ["Zero", "$2a$", "$a$", "$\\sqrt{2}a$"],
        0,
        "The phase difference is $\\phi = \\pi$. The resultant amplitude is $A = \\sqrt{a^2 + a^2 + 2 a^2 \\cos\\pi} = \\sqrt{2a^2 - 2a^2} = 0$ (complete destructive interference)."
    ),
    (
        "An interference pattern is formed by two coherent sources. If the distance between the sources is increased, the fringes will:",
        ["Move closer together (fringe width decreases)", "Move farther apart (fringe width increases)", "Disappear completely", "Remain unchanged"],
        0,
        "Fringe width is inversely proportional to source separation: $\\beta = \\frac{\\lambda D}{d}$. As $d$ increases, $\\beta$ decreases, so fringes become more closely packed."
    )
]

for i, item in enumerate(interference_data):
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
    
    questions.append(make_q("Interference", item[0], new_opts, target_idx, item[3]))

output_path = os.path.join(os.path.dirname(__file__), "optics_batch2.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} MCQs for batch 2 saved to {output_path}")
