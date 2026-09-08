module.exports = [
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a rigid body depends not only on its mass and geometry, but also on the chosen axis of rotation.\\nReason: Moment of inertia is defined as $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of each mass element from the rotation axis, which varies with different axes.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because $I = \\int r^2 dm$, changing the axis changes the perpendicular distances $r$ of all mass particles from that axis. Hence, the same body has different moments of inertia about different axes. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For a given mass and outer radius, a hollow cylinder has a greater moment of inertia about its central axis than a solid cylinder.\\nReason: In a hollow cylinder, all the mass is concentrated at the maximum outer radius $R$, whereas in a solid cylinder, the mass is distributed continuously from the axis ($r = 0$) to the outer rim ($r = R$).",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a thin hollow cylinder, $I = M R^2$, whereas for a solid cylinder, $I = \\frac{1}{2}M R^2$. Concentrating mass farther from the rotation axis yields a larger value of $\\int r^2 dm$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The radius of gyration of a body depends on the location and orientation of the axis of rotation.\\nReason: Radius of gyration is defined by $k = \\sqrt{\\frac{I}{M}}$, and since moment of inertia $I$ depends on the axis of rotation, $k$ also varies with the axis.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Radius of gyration $k$ represents the effective distance from the axis at which the entire mass could be concentrated to have the same moment of inertia. As $I$ changes with the axis, $k$ changes accordingly. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If two solid spheres of the same material have radii in the ratio $1:2$, their moments of inertia about their diameters are in the ratio $1:32$.\\nReason: For uniform spheres of the same density $\\rho$, mass scales as $M \\propto R^3$, so moment of inertia $I = \\frac{2}{5}M R^2 \\propto R^5$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Since density is constant, $M = \\frac{4}{3}\\pi R^3 \\rho \\propto R^3$. Then $I = \\frac{2}{5}M R^2 \\propto R^3 \\times R^2 = R^5$. Therefore, $\\frac{I_1}{I_2} = \\left(\\frac{R_1}{R_2}\\right)^5 = \\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular ring of mass $M$ and radius $R$ about its symmetry axis is greater than that of a uniform circular disc of the same mass and radius.\\nReason: In the ring, all mass is located at distance $R$ giving $I_{\\text{ring}} = M R^2$, whereas in the disc, mass is distributed over the area, giving $I_{\\text{disc}} = \\frac{1}{2}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because all the mass in the ring is at distance $R$, $\\int r^2 dm = R^2 \\int dm = M R^2$. For the disc, averaging $r^2$ over the area gives $\\frac{1}{2}R^2$, so $I_{\\text{disc}} = \\frac{1}{2}M R^2 < M R^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: A flywheel is designed with a heavy rim supported by light spokes rather than as a uniform flat disc of the same mass and radius.\\nReason: Concentrating mass at the outer rim maximizes the moment of inertia for a given total mass, maximizing energy storage capacity per unit mass ($K = \\frac{1}{2}I\\omega^2$).",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The primary function of a flywheel is to smooth out fluctuations in engine speed by storing kinetic energy $E = \\frac{1}{2}I\\omega^2$. Placing most of the metal in the outer rim maximizes $I$ without increasing overall engine weight. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform solid right circular cone of mass $M$ and base radius $R$ about its central axis of symmetry is $\\frac{3}{10}M R^2$.\\nReason: Slicing the cone into elemental discs perpendicular to the axis and integrating their moments of inertia $\\frac{1}{2}(dm)r^2$ from apex to base yields $\\frac{3}{10}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a cone of height $h$ and base radius $R$, a slice at distance $z$ from apex has radius $r = R(z/h)$ and mass $dm = \\rho \\pi r^2 dz = \\rho \\pi R^2 (z/h)^2 dz$. The slice moment of inertia is $dI = \\frac{1}{2}(dm)r^2 = \\frac{1}{2}\\rho \\pi R^4 (z/h)^4 dz$. Integrating from $0$ to $h$ gives $I = \\frac{1}{10}\\rho \\pi R^4 h = \\frac{3}{10}\\left(\\frac{1}{3}\\pi R^2 h \\rho\\right)R^2 = \\frac{3}{10}M R^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform hollow right circular cone of mass $M$ and base radius $R$ about its central axis is $\\frac{1}{2}M R^2$.\\nReason: Slicing the hollow cone into thin rings of radius $r$ and integrating $r^2 dm$ over the slant surface area yields $I = \\frac{1}{2}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a hollow cone without base, elemental rings at distance $z$ from apex have radius $r = R(z/h)$ and area $dA = 2\\pi r ds \\propto z dz$. Integrating $r^2 dA \\propto z^3 dz$ yields $\\frac{1}{4}$ factor, and dividing by total area proportional to $\\frac{1}{2}$ yields $\\frac{1/4}{1/2}M R^2 = \\frac{1}{2}M R^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The radius of gyration of a uniform solid sphere about its diameter is $\\sqrt{\\frac{2}{5}}R \\approx 0.632 R$, whereas for a thin spherical shell it is $\\sqrt{\\frac{2}{3}}R \\approx 0.816 R$.\\nReason: Mass in a spherical shell is distributed exclusively on the outer surface, whereas in a solid sphere mass is distributed throughout the interior volume closer to the axis.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "$k_{\\text{solid}} = \\sqrt{I_{\\text{solid}}/M} = \\sqrt{2/5}R \\approx 0.632 R$. $k_{\\text{shell}} = \\sqrt{I_{\\text{shell}}/M} = \\sqrt{2/3}R \\approx 0.816 R$. Because mass in the shell is concentrated farther from the axis, its radius of gyration is larger. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: Moment of inertia is not a vector quantity, nor is it a simple scalar in three dimensions; it is a second-rank tensor.\\nReason: In three dimensions, the angular momentum vector $\\vec{L}$ and angular velocity vector $\\vec{\\omega}$ are not necessarily parallel ($L_i = \\sum_j I_{ij}\\omega_j$).",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because an asymmetric body rotated about an arbitrary axis can experience torque perpendicular to $\\vec{\\omega}$, the relationship between $\\vec{L}$ and $\\vec{\\omega}$ is governed by the moment of inertia tensor $\\mathbf{I}$, a symmetric $3 \\times 3$ matrix (second-rank tensor). Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If a uniform circular disc has a concentric circular hole cut out (an annular disc with inner radius $R_1$ and outer radius $R_2$ and total mass $M$), its moment of inertia about its central axis is $\\frac{1}{2}M(R_1^2 + R_2^2)$.\\nReason: Area is $\\pi(R_2^2 - R_1^2)$, and integrating $r^2 (2\\pi r dr)$ from $R_1$ to $R_2$ gives $\\frac{\\pi}{2}(R_2^4 - R_1^4) = \\frac{1}{2}\\pi(R_2^2 - R_1^2)(R_2^2 + R_1^2) = \\frac{1}{2}M(R_1^2 + R_2^2)$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The surface mass density is $\\sigma = \\frac{M}{\\pi(R_2^2 - R_1^2)}$. The moment of inertia is $I = \\int_{R_1}^{R_2} r^2 (2\\pi r \\sigma dr) = 2\\pi \\sigma \\left[\\frac{r^4}{4}\\right]_{R_1}^{R_2} = \\frac{\\pi \\sigma}{2}(R_2^4 - R_1^4) = \\frac{1}{2}M(R_1^2 + R_2^2)$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If a uniform wire of mass $M$ and length $L$ is bent into an equilateral triangle, its moment of inertia about an axis through its center perpendicular to its plane is $\\frac{1}{18}M L^2$.\\nReason: Each side of the triangle has mass $M/3$ and length $L/3$, and the distance from the center to each side is $d = \\frac{L}{6\\sqrt{3}}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "Each of the 3 sides has mass $m = M/3$ and length $l = L/3$. Center to midpoint of a side is $d = \\frac{l}{2\\sqrt{3}} = \\frac{L/3}{2\\sqrt{3}} = \\frac{L}{6\\sqrt{3}}$. Moment of inertia of one side about center is $I_1 = \\frac{1}{12}m l^2 + m d^2 = \\frac{1}{12}\\left(\\frac{M}{3}\\right)\\left(\\frac{L}{3}\\right)^2 + \\left(\\frac{M}{3}\\right)\\left(\\frac{L^2}{108}\\right) = \\frac{M L^2}{324} + \\frac{M L^2}{324} = \\frac{2 M L^2}{324} = \\frac{M L^2}{162}$. For all 3 sides: $I = 3 I_1 = \\frac{3 M L^2}{162} = \\frac{M L^2}{54} \\neq \\frac{M L^2}{18}$. Wait! Assertion says $\\frac{1}{18}M L^2$, which is false! Thus Assertion is false but Reason is true.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular wire bent into a circle of radius $R$ is larger than when the same wire is bent into a square about their respective central transverse axes.\\nReason: Bending into a circle distributes all the wire elements at the maximum uniform distance $R = L/(2\\pi)$ from the center, maximizing $\\int r^2 dm$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a wire of length $L$: bent into a circle, $R = \\frac{L}{2\\pi} \\implies I = M R^2 = \\frac{M L^2}{4\\pi^2} \\approx 0.0253 M L^2$. Bent into a square of side $a = L/4$, $I = \\frac{1}{12}M(L/4)^2 = \\frac{M L^2}{192} \\approx 0.0052 M L^2$ (or about center $I = \\frac{M L^2}{24} \\approx 0.0416 ML^2$). Wait, for a square frame of 4 sides of length $L/4$: $I = 4[\\frac{1}{12}(M/4)(L/4)^2 + (M/4)(L/8)^2] = 4[\\frac{ML^2}{768} + \\frac{ML^2}{256}] = 4[\\frac{4ML^2}{768}] = \\frac{ML^2}{48} \\approx 0.0208 ML^2 < 0.0253 ML^2$. Indeed $I_{\\text{circle}} > I_{\\text{square}}$! Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The dimensions of radius of gyration are $[\\text{M}^0 \\text{L}^1 \\text{T}^0]$ and its SI unit is meter ($\\text{m}$).\\nReason: Radius of gyration $k = \\sqrt{I/M}$, and since $I$ has dimensions $[\\text{M L}^2]$ and mass has $[\\text{M}]$, $[k] = \\sqrt{[\\text{M L}^2]/[\\text{M}]} = [\\text{L}]$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The radius of gyration is a geometric length measuring mass dispersion around an axis. Its dimensions are length $[\\text{L}]$ and its SI unit is the meter. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If the angular velocity of a rotating body is doubled, its moment of inertia remains unchanged.\\nReason: Moment of inertia depends solely on the distribution of mass relative to the axis of rotation and is completely independent of the state of motion or angular velocity $\\omega$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Just as linear mass $m$ is an intrinsic property independent of linear speed $v$ (in classical mechanics), moment of inertia $I = \\sum m_i r_i^2$ is an intrinsic structural property independent of angular speed $\\omega$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: A circular disc and a solid sphere of equal mass and equal radius have different moments of inertia about their respective central axes of symmetry.\\nReason: A circular disc has $I = \\frac{1}{2}M R^2$, whereas a solid sphere has $I = \\frac{2}{5}M R^2$, because a solid sphere has more mass distributed closer to its central diameter axis.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "In a solid sphere, mass is distributed spherically in three dimensions, placing a greater fraction of its mass at smaller perpendicular distances from any diameter axis than in a flat circular disc of radius $R$. Thus $I_{\\text{sphere}} = 0.4 M R^2 < I_{\\text{disc}} = 0.5 M R^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform thin rod about an axis along its length passing through its center is practically zero.\\nReason: The radius of an ideal thin rod is infinitesimally small ($r \\to 0$), so the perpendicular distance of every mass element from the longitudinal axis is negligible, making $\\int r^2 dm \\to 0$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For an idealized one-dimensional thin rod of radius $r_0 \\ll L$, the moment of inertia about its own length is $I = \\frac{1}{2}M r_0^2 \\approx 0$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For an elliptical lamina of mass $M$ with semi-major axis $a$ and semi-minor axis $b$, the moment of inertia about its central normal axis is $\\frac{1}{4}M(a^2 + b^2)$.\\nReason: In the plane of the ellipse, $I_x = \\frac{1}{4}M b^2$ and $I_y = \\frac{1}{4}M a^2$, so by the perpendicular axis theorem $I_z = I_x + I_y = \\frac{1}{4}M(a^2 + b^2)$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "By scaling from a circular disc ($I = \\frac{1}{4}MR^2$), an elliptical plate has in-plane principal moments $I_x = \\frac{1}{4}M b^2$ (along major axis $a$) and $I_y = \\frac{1}{4}M a^2$ (along minor axis $b$). Applying the perpendicular axis theorem gives $I_z = \\frac{1}{4}M(a^2 + b^2)$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The radius of gyration of a uniform circular ring about a diameter is $\\frac{R}{\\sqrt{2}}$.\\nReason: The moment of inertia of a ring about a diameter is $I = \\frac{1}{2}M R^2$, so setting $M k^2 = \\frac{1}{2}M R^2$ gives $k = \\frac{R}{\\sqrt{2}}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "By the perpendicular axis theorem, $I_{\\text{dia}} = \\frac{1}{2}MR^2$. Setting $Mk^2 = \\frac{1}{2}MR^2$ gives $k = R/\\sqrt{2}$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: Two cylinders of identical mass and identical external dimensions, one solid and one hollow, can be distinguished by rolling them down an incline.\\nReason: The solid cylinder has a smaller radius of gyration ($k^2/R^2 = 1/2$) than the hollow cylinder ($k^2/R^2 = 1$), giving it a greater linear acceleration down the incline ($a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$).",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Linear acceleration down an incline is $a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$. For a solid cylinder, $a = \\frac{2}{3}g\\sin\\theta \\approx 0.67 g\\sin\\theta$. For a hollow cylinder, $a = \\frac{1}{2}g\\sin\\theta = 0.50 g\\sin\\theta$. The solid cylinder always accelerates faster and reaches the bottom first. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If a thin sheet of metal is rolled up tightly into a solid cylinder of radius $R$, its moment of inertia about the cylinder axis is $\\frac{1}{2}M R^2$.\\nReason: The mass of the sheet is now distributed uniformly throughout the cross-sectional area of the cylinder of radius $R$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Rolling the flat sheet tightly forms a solid cylinder of uniform cross-section and radius $R$. The moment of inertia of a solid cylinder about its longitudinal symmetry axis is $I = \\frac{1}{2}M R^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a solid cylinder of mass $M$, radius $R$, and length $L$ about its longitudinal axis is independent of its length $L$.\\nReason: Every slice of the cylinder has the same mass distribution relative to the longitudinal axis regardless of its position along length $L$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a longitudinal axis, the perpendicular distance $r$ of any mass element depends only on its cylindrical radius coordinate $r$, completely independent of its axial position $z$. Thus $I = \\frac{1}{2}MR^2$, which depends only on total mass $M$ and radius $R$, not on length $L$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a body about an axis is always positive and non-zero for any physical non-point mass.\\nReason: In $I = \\sum m_i r_i^2$, every mass $m_i$ is strictly positive and the square of perpendicular distance $r_i^2$ is non-negative, and for an extended body not all $r_i$ can be zero.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because mass is positive and distances are real numbers, $m_i r_i^2 \\ge 0$. For any finite extended body, at least some mass must lie off the axis, making the sum strictly positive ($I > 0$). Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: A circular disc of mass $M$ and radius $R$ is cut into two equal semicircular pieces. The moment of inertia of each semicircular piece about the original axis through the center perpendicular to the plane is $\\frac{1}{4}M R^2$.\\nReason: Each semicircular piece has mass $M/2$ and retains the exact same radial distance distribution from the center as in the original disc, so $I = \\frac{1}{2}(M/2)R^2 = \\frac{1}{4}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because moment of inertia is an additive scalar for fixed axes: $I_{\\text{half}} = \\int_{\\text{half}} r^2 dm = \\frac{1}{2}\\int_{\\text{full}} r^2 dm = \\frac{1}{2}\\left(\\frac{1}{2}MR^2\\right) = \\frac{1}{4}MR^2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of an equilateral triangular lamina of mass $M$ and side $a$ about one of its altitudes in its plane is $\\frac{1}{24}M a^2$.\\nReason: In the plane of an equilateral triangle, moments of inertia about all coplanar axes passing through the centroid are equal.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "For an equilateral triangle, $I_z = \\frac{1}{12}Ma^2$. By the perpendicular axis theorem, since $I_x = I_y$, each in-plane axis through the centroid has $I = I_z/2 = \\frac{1}{24}Ma^2$. An altitude passing through the centroid therefore has $I = \\frac{1}{24}Ma^2$. Both statements are true facts, but Reason does not show the algebraic calculation of Assertion. Thus Option B.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The radius of gyration of a solid sphere about its diameter is independent of its mass and density.\\nReason: For a solid sphere, $I = \\frac{2}{5}M R^2$, so $k = \\sqrt{I/M} = \\sqrt{\\frac{2}{5}}R$, which depends only on the geometric radius $R$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Radius of gyration $k$ is an intrinsic geometric property of the shape and size of the body. For any uniform solid sphere, $k = \\sqrt{2/5}R$, which does not depend on mass $M$ or density $\\rho$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The ratio of moments of inertia of a uniform circular ring of mass $M$ and radius $R$ about its central axis to that of a uniform solid sphere of the same mass $M$ and radius $R$ about its diameter is:",
    "options": [
      "$5:2$",
      "$2:5$",
      "$5:1$",
      "$3:2$"
    ],
    "correctAnswer": 0,
    "explanation": "For the ring about its central axis: $I_{\\text{ring}} = M R^2$. For the solid sphere about its diameter: $I_{\\text{sphere}} = \\frac{2}{5}M R^2$. The ratio is $\\frac{I_{\\text{ring}}}{I_{\\text{sphere}}} = \\frac{M R^2}{\\frac{2}{5}M R^2} = \\frac{5}{2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The radius of gyration of a solid cone of base radius $R$ and height $h$ about its vertical central axis of symmetry is:",
    "options": [
      "$\\sqrt{\\frac{3}{10}}R$",
      "$\\sqrt{\\frac{3}{5}}R$",
      "$\\frac{R}{\\sqrt{2}}$",
      "$\\sqrt{\\frac{1}{10}}R$"
    ],
    "correctAnswer": 0,
    "explanation": "The moment of inertia of a solid cone about its central axis is $I = \\frac{3}{10}M R^2$. Setting $M k^2 = \\frac{3}{10}M R^2$ gives $k = \\sqrt{\\frac{3}{10}}R$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "An annular disc of mass $M$ has inner radius $R_1 = 3\\,\\text{cm}$ and outer radius $R_2 = 5\\,\\text{cm}$. What is its radius of gyration about its central transverse axis?",
    "options": [
      "$\\sqrt{17}\\,\\text{cm}$",
      "$\\sqrt{34}\\,\\text{cm}$",
      "$4\\,\\text{cm}$",
      "$\\sqrt{8}\\,\\text{cm}$"
    ],
    "correctAnswer": 0,
    "explanation": "Moment of inertia is $I = \\frac{1}{2}M(R_1^2 + R_2^2)$. Radius of gyration is $k = \\sqrt{\\frac{R_1^2 + R_2^2}{2}} = \\sqrt{\\frac{3^2 + 5^2}{2}} = \\sqrt{\\frac{9 + 25}{2}} = \\sqrt{\\frac{34}{2}} = \\sqrt{17}\\,\\text{cm}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "A thin wire of mass $M$ and length $L$ is bent in the form of a semicircle of radius $R = L/\\pi$. What is its moment of inertia about the axis passing through its center perpendicular to its plane?",
    "options": [
      "$\\frac{M L^2}{\\pi^2}$",
      "$\\frac{M L^2}{2\\pi^2}$",
      "$\\frac{2 M L^2}{\\pi^2}$",
      "$\\frac{M L^2}{4\\pi^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "Every mass element of the semicircular wire is at distance $R$ from the center of the semicircle. Thus $I = \\int R^2 dm = M R^2$. Since $L = \\pi R \\implies R = L/\\pi$, we get $I = M\\left(\\frac{L}{\\pi}\\right)^2 = \\frac{M L^2}{\\pi^2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "Four solid spheres each of mass $M$ and radius $R$ are placed with their centers at the four corners of a square of side $a$. What is the moment of inertia of the system about one of the sides of the square?",
    "options": [
      "$\\frac{8}{5}M R^2 + 2 M a^2$",
      "$\\frac{8}{5}M R^2 + 4 M a^2$",
      "$\\frac{4}{5}M R^2 + 2 M a^2$",
      "$\\frac{8}{5}M R^2 + M a^2$"
    ],
    "correctAnswer": 0,
    "explanation": "Let the side lie on the $x$-axis containing sphere 1 and sphere 2. For these two spheres on the axis, $d = 0$, so each contributes $I_{\\text{dia}} = \\frac{2}{5}MR^2$. For the other two spheres (sphere 3 and sphere 4), their centers are at perpendicular distance $d = a$ from the axis. By parallel axis theorem, each contributes $\\frac{2}{5}MR^2 + Ma^2$. Total moment of inertia is $I = 2\\left(\\frac{2}{5}MR^2\\right) + 2\\left(\\frac{2}{5}MR^2 + Ma^2\\right) = \\frac{8}{5}MR^2 + 2Ma^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The moment of inertia of a uniform circular disc of radius $R$ and mass $M$ about an axis passing through its edge and in its plane is:",
    "options": [
      "$\\frac{5}{4}M R^2$",
      "$\\frac{3}{2}M R^2$",
      "$\\frac{7}{4}M R^2$",
      "$\\frac{1}{2}M R^2$"
    ],
    "correctAnswer": 0,
    "explanation": "An axis passing through the edge in the plane of the disc is a tangent in the plane. A diameter parallel to this tangent has $I_{\\text{dia}} = \\frac{1}{4}MR^2$. The distance from the diameter to the tangent is $R$. By parallel axis theorem: $I = \\frac{1}{4}MR^2 + MR^2 = \\frac{5}{4}MR^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "A uniform rod of mass $M$ and length $L$ has moment of inertia $I_1$ about an end perpendicular to its length, and $I_2$ about its center perpendicular to its length. The value of $I_1 - I_2$ is:",
    "options": [
      "$\\frac{1}{4}M L^2$",
      "$\\frac{1}{12}M L^2$",
      "$\\frac{1}{3}M L^2$",
      "$\\frac{1}{6}M L^2$"
    ],
    "correctAnswer": 0,
    "explanation": "$I_1 = \\frac{1}{3}M L^2$ and $I_2 = \\frac{1}{12}M L^2$. Then $I_1 - I_2 = \\left(\\frac{1}{3} - \\frac{1}{12}\\right)M L^2 = \\frac{4 - 1}{12}M L^2 = \\frac{3}{12}M L^2 = \\frac{1}{4}M L^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "NUMERICAL",
    "question": "A solid sphere of mass $5\\,\\text{kg}$ and radius $0.2\\,\\text{m}$ has moment of inertia about its diameter equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is the value of $I$?",
    "correctAnswer": 0.08,
    "explanation": "$I = \\frac{2}{5}M R^2 = \\frac{2}{5}(5)(0.2)^2 = 2(0.04) = 0.08\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin spherical shell of mass $3\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia about its diameter equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.5,
    "explanation": "$I = \\frac{2}{3}M R^2 = \\frac{2}{3}(3)(0.5)^2 = 2(0.25) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid cylinder of mass $10\\,\\text{kg}$ and radius $0.4\\,\\text{m}$ has moment of inertia about its main longitudinal axis equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.8,
    "explanation": "$I = \\frac{1}{2}M R^2 = \\frac{1}{2}(10)(0.4)^2 = 5(0.16) = 0.8\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A hollow thin cylinder of mass $4\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia about its central axis equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 1,
    "explanation": "$I = M R^2 = 4(0.5)^2 = 4(0.25) = 1.0\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid cone of mass $20\\,\\text{kg}$ and base radius $0.3\\,\\text{m}$ has moment of inertia about its central axis of symmetry equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.54,
    "explanation": "$I = \\frac{3}{10}M R^2 = \\frac{3}{10}(20)(0.3)^2 = 6(0.09) = 0.54\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "What is the radius of gyration in centimeters of a uniform thin rod of length $60\\,\\text{cm}$ about an axis perpendicular to the rod through its center of mass (take $\\sqrt{3} \\approx 1.732$)? Round to two decimal places.",
    "correctAnswer": 17.32,
    "explanation": "$k = \\frac{L}{\\sqrt{12}} = \\frac{L}{2\\sqrt{3}} = \\frac{60}{2\\sqrt{3}} = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3} \\approx 10(1.732) = 17.32\\,\\text{cm}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "What is the radius of gyration in centimeters of the rod in the previous problem about an axis perpendicular to the rod through one of its ends (take $\\sqrt{3} \\approx 1.732$)? Round to two decimal places.",
    "correctAnswer": 34.64,
    "explanation": "$k = \\frac{L}{\\sqrt{3}} = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3} \\approx 20(1.732) = 34.64\\,\\text{cm}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A circular disc of mass $2\\,\\text{kg}$ and radius $0.4\\,\\text{m}$ has moment of inertia $I$ about an axis perpendicular to the disc through its center. What is $I$ in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 0.16,
    "explanation": "$I = \\frac{1}{2}M R^2 = \\frac{1}{2}(2)(0.4)^2 = 1(0.16) = 0.16\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A circular ring of mass $3\\,\\text{kg}$ and radius $0.4\\,\\text{m}$ has moment of inertia about its diameter equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.24,
    "explanation": "$I_{\\text{dia}} = \\frac{1}{2}M R^2 = \\frac{1}{2}(3)(0.4)^2 = 1.5(0.16) = 0.24\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform square plate of mass $12\\,\\text{kg}$ and side $2\\,\\text{m}$ has moment of inertia about an axis through its center perpendicular to the plate equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 8,
    "explanation": "$I = \\frac{1}{12}M(a^2 + a^2) = \\frac{1}{6}M a^2 = \\frac{1}{6}(12)(2^2) = 2(4) = 8\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "An annular ring has mass $4\\,\\text{kg}$, inner radius $0.2\\,\\text{m}$, and outer radius $0.4\\,\\text{m}$. What is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about its central transverse axis?",
    "correctAnswer": 0.4,
    "explanation": "$I = \\frac{1}{2}M(R_1^2 + R_2^2) = \\frac{1}{2}(4)(0.2^2 + 0.4^2) = 2(0.04 + 0.16) = 2(0.20) = 0.40\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "Two solid spheres $A$ and $B$ are made of the same material. The radius of sphere $B$ is 3 times that of sphere $A$. What is the ratio of their moments of inertia about their diameters, $I_B / I_A$?",
    "correctAnswer": 243,
    "explanation": "For the same density, $I \\propto R^5$. Thus $\\frac{I_B}{I_A} = \\left(\\frac{R_B}{R_A}\\right)^5 = 3^5 = 243$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform thin rod of mass $4\\,\\text{kg}$ and length $3\\,\\text{m}$ has moment of inertia about its center of mass equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 3,
    "explanation": "$I_{cm} = \\frac{1}{12}M L^2 = \\frac{1}{12}(4)(3^2) = \\frac{36}{12} = 3\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A hollow sphere of mass $M$ and radius $R$ has radius of gyration $k = c R$ about its diameter. What is the value of $c$ (take $\\sqrt{2/3} \\approx 0.82$)? Round to two decimal places.",
    "correctAnswer": 0.82,
    "explanation": "$k = \\sqrt{\\frac{2}{3}}R \\approx 0.816 R \\approx 0.82 R$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid sphere of mass $M$ and radius $R$ has radius of gyration $k = c R$ about its diameter. What is the value of $c$ (take $\\sqrt{0.4} \\approx 0.63$)? Round to two decimal places.",
    "correctAnswer": 0.63,
    "explanation": "$k = \\sqrt{\\frac{2}{5}}R = \\sqrt{0.4}R \\approx 0.632 R \\approx 0.63 R$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform rectangular lamina has mass $6\\,\\text{kg}$, length $a = 0.8\\,\\text{m}$, and breadth $b = 0.6\\,\\text{m}$. What is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis passing through its center parallel to its length?",
    "correctAnswer": 0.18,
    "explanation": "Parallel to side $a$, distance from axis is coordinate $y$ spanning $-b/2$ to $+b/2$. Thus $I = \\frac{1}{12}M b^2 = \\frac{1}{12}(6)(0.6^2) = 0.5(0.36) = 0.18\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "For the rectangular lamina in the previous problem, what is the moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis passing through its center parallel to its breadth?",
    "correctAnswer": 0.32,
    "explanation": "$I = \\frac{1}{12}M a^2 = \\frac{1}{12}(6)(0.8^2) = 0.5(0.64) = 0.32\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin uniform disc of mass $8\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia $I$ about a diameter. What is $I$ in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 0.5,
    "explanation": "$I_{\\text{dia}} = \\frac{1}{4}M R^2 = \\frac{1}{4}(8)(0.5)^2 = 2(0.25) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform thin ring of mass $5\\,\\text{kg}$ and radius $0.2\\,\\text{m}$ has moment of inertia about its central axis equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.2,
    "explanation": "$I = M R^2 = 5(0.2)^2 = 5(0.04) = 0.2\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform circular disc of radius $R = 1\\,\\text{m}$ has mass $12\\,\\text{kg}$. A concentric hole of radius $0.5\\,\\text{m}$ is cut out. What is the mass in kilograms of the remaining annular disc?",
    "correctAnswer": 9,
    "explanation": "Area of original disc is $\\pi(1)^2 = \\pi$. Area of cut hole is $\\pi(0.5)^2 = 0.25\\pi$. Fraction of area remaining is $1 - 0.25 = 0.75$. Mass of remaining disc is $0.75 \\times 12 = 9\\,\\text{kg}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "For the annular disc in the previous problem of mass $9\\,\\text{kg}$, inner radius $0.5\\,\\text{m}$, and outer radius $1.0\\,\\text{m}$, what is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about its central axis?",
    "correctAnswer": 5.63,
    "explanation": "$I = \\frac{1}{2}M(R_1^2 + R_2^2) = \\frac{1}{2}(9)(0.5^2 + 1.0^2) = 4.5(0.25 + 1.0) = 4.5(1.25) = 5.625 \\approx 5.63\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin circular ring of mass $M$ and radius $R$ is cut into four equal quarters. What is the moment of inertia of one quarter about the central axis passing through the original center of the ring in units of $M R^2$?",
    "correctAnswer": 0.25,
    "explanation": "Each quarter has mass $M/4$ and all its particles are still at distance $R$ from the center: $I = \\int r^2 dm = R^2(M/4) = 0.25 M R^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "The moment of inertia of a solid hemisphere of mass $M$ and radius $R = 0.5\\,\\text{m}$ about its axis of symmetry is $I = \\frac{2}{5}M R^2$. If $M = 10\\,\\text{kg}$, what is $I$ in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 1,
    "explanation": "By symmetry, completing the other hemisphere doubles both mass and moment of inertia, leaving the ratio $\\frac{I}{M} = \\frac{2}{5}R^2$ identical to a complete solid sphere. Thus $I = \\frac{2}{5}(10)(0.5^2) = 4(0.25) = 1.0\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform hollow cone of mass $6\\,\\text{kg}$ and base radius $0.4\\,\\text{m}$ has moment of inertia about its central axis equal to $I\\,\\text{kg}\\cdot\\text{m}^2$. What is $I$?",
    "correctAnswer": 0.48,
    "explanation": "$I = \\frac{1}{2}M R^2 = \\frac{1}{2}(6)(0.4)^2 = 3(0.16) = 0.48\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "The ratio of the radius of gyration of a circular disc about its diameter to that about its central transverse axis is $1/\\sqrt{n}$. What is the integer $n$?",
    "correctAnswer": 2,
    "explanation": "$k_{\\text{dia}} = R/2$ and $k_z = R/\\sqrt{2}$. The ratio is $\\frac{k_{\\text{dia}}}{k_z} = \\frac{R/2}{R/\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. Thus $n = 2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform rod of length $L = 2\\,\\text{m}$ and mass $M = 3\\,\\text{kg}$ is bent into an 'L' shape with arms of $1\\,\\text{m}$ each. What is the moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis perpendicular to the plane passing through the corner?",
    "correctAnswer": 1,
    "explanation": "Each arm has mass $m = 1.5\\,\\text{kg}$ and length $l = 1\\,\\text{m}$. Each arm is pivoted at one of its ends at the corner. Moment of inertia of one arm is $I_1 = \\frac{1}{3}m l^2 = \\frac{1}{3}(1.5)(1^2) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$. Total moment of inertia is $I = 2 \\times 0.5 = 1.0\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform circular disc has radius $10\\,\\text{cm}$. What is its radius of gyration in centimeters about a tangent in its plane (take $\\sqrt{5} \\approx 2.236$)?",
    "correctAnswer": 11.18,
    "explanation": "$k = \\sqrt{\\frac{5}{4}}R = \\frac{\\sqrt{5}}{2}R = \\frac{2.236}{2}(10) = 11.18\\,\\text{cm}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid sphere has mass $2.5\\,\\text{kg}$ and radius $0.4\\,\\text{m}$. What is its moment of inertia about its diameter in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 0.16,
    "explanation": "$I = \\frac{2}{5}M R^2 = \\frac{2}{5}(2.5)(0.4^2) = 1(0.16) = 0.16\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin rectangular plate of mass $4\\,\\text{kg}$ has length $0.6\\,\\text{m}$ and width $0.8\\,\\text{m}$. What is the radius of gyration in meters about an axis perpendicular to the plate through its center (take $\\sqrt{1/12} \\approx 0.2887$)? Round to two decimal places.",
    "correctAnswer": 0.29,
    "explanation": "$k = \\sqrt{\\frac{a^2 + b^2}{12}} = \\sqrt{\\frac{0.6^2 + 0.8^2}{12}} = \\sqrt{\\frac{0.36 + 0.64}{12}} = \\sqrt{\\frac{1.0}{12}} \\approx 0.2887 \\approx 0.29\\,\\text{m}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin uniform rod has mass $M$ and length $L$. At what distance $x$ from the center of mass in terms of $L$ is the moment of inertia about a transverse axis equal to twice its moment of inertia about the center of mass (round to two decimal places)?",
    "correctAnswer": 0.29,
    "explanation": "$I = I_{cm} + M x^2 = 2 I_{cm} \\implies M x^2 = I_{cm} = \\frac{1}{12}M L^2 \\implies x^2 = \\frac{L^2}{12} \\implies x = \\frac{L}{\\sqrt{12}} \\approx 0.2887 L \\approx 0.29 L$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Moment of inertia",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  }
];
