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

const subTopic = "Conservation of mechanical energy";
const chapter = "Work, Energy, and Power";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Conservation of mechanical energy
const arData = [
  {
    a: "Total mechanical energy of an isolated system remains constant if all internal forces are conservative and external forces do no work.",
    r: "The work done by conservative forces equals the negative of the change in potential energy ($W_{\\text{cons}} = -\\Delta U$), leading to $\\Delta K + \\Delta U = 0$.",
    ans: 0,
    exp: "From the work-energy theorem, $W_{\\text{net}} = \\Delta K$. When only conservative forces do work, $W_{\\text{cons}} = -\\Delta U$, so $\\Delta K + \\Delta U = 0 \\implies \\Delta(K + U) = 0$. (R) correctly explains (A)."
  },
  {
    a: "When a body falls freely under gravity in a vacuum, its mechanical energy is conserved at every point of its motion.",
    r: "Gravitational force is a conservative force, and air resistance is absent in a vacuum.",
    ans: 0,
    exp: "Because gravity is conservative and there are no dissipative forces, potential energy lost converts directly into kinetic energy gained ($mgh + \\frac{1}{2}mv^2 = \\text{constant}$). (R) correctly explains (A)."
  },
  {
    a: "A mass attached to an ideal horizontal spring executing simple harmonic motion has constant total mechanical energy.",
    r: "The restoring force $F = -kx$ is a conservative force.",
    ans: 0,
    exp: "For an ideal spring-mass system on a frictionless surface, the only horizontal force is the conservative spring force, so $E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ is strictly conserved. (R) correctly explains (A)."
  },
  {
    a: "When a mass $m$ is gently placed on a vertical spring of constant $k$, the maximum compression produced is $\\frac{2mg}{k}$.",
    r: "At the point of maximum compression, the kinetic energy of the mass is zero, and the loss in gravitational potential energy equals the gain in spring potential energy.",
    ans: 0,
    exp: "By conservation of mechanical energy: $mg x_{\\text{max}} = \\frac{1}{2}k x_{\\text{max}}^2 \\implies x_{\\text{max}} = \\frac{2mg}{k}$. (Note that equilibrium compression is $\\frac{mg}{k}$, and the mass oscillates about it). (R) correctly explains (A)."
  },
  {
    a: "Mechanical energy is not conserved when a block slides down a rough inclined plane.",
    r: "Friction is a non-conservative dissipative force that converts mechanical energy into thermal energy.",
    ans: 0,
    exp: "The presence of friction does negative work ($W_{\\text{friction}} < 0$), decreasing the total mechanical energy ($E_f - E_i = W_{\\text{nc}} < 0$). (R) correctly explains (A)."
  },
  {
    a: "A particle moving in a potential well $U(x)$ cannot enter regions where $U(x) > E$, where $E$ is its total mechanical energy.",
    r: "Kinetic energy $K = E - U(x)$ must be greater than or equal to zero for physical classical motion.",
    ans: 0,
    exp: "Since $K = \\frac{1}{2}mv^2 \\ge 0$, we have $E - U(x) \\ge 0 \\implies U(x) \\le E$. The points where $U(x) = E$ are turning points where $v = 0$. (R) correctly explains (A)."
  },
  {
    a: "When a block slides down a smooth curved track of any shape from height $h$, its speed at the bottom depends only on $h$ and not on the profile of the track.",
    r: "The normal force exerted by the frictionless track is always perpendicular to instantaneous displacement and does zero work.",
    ans: 0,
    exp: "Because $\\vec{N} \\perp d\\vec{r}$, $W_N = 0$. Gravity is path-independent, so $\\Delta K = mgh \\implies v = \\sqrt{2gh}$ regardless of track geometry. (R) correctly explains (A)."
  },
  {
    a: "The mechanical energy of a simple pendulum swinging in air gradually decreases with time.",
    r: "Air drag and viscous damping continuously do negative non-conservative work on the swinging pendulum bob.",
    ans: 0,
    exp: "Viscous resistive forces oppose the motion ($\\vec{F}_{\\text{drag}} \\cdot d\\vec{r} < 0$), dissipating mechanical energy into heat and dampening oscillations. (R) correctly explains (A)."
  },
  {
    a: "In an Atwood machine with a frictionless massless pulley and light string, the total mechanical energy of the two-block system is conserved.",
    r: "Tension in the connecting string does no net work on the two-block system as a whole.",
    ans: 0,
    exp: "Tension does $+T d$ work on the ascending mass and $-T d$ work on the descending mass, summing to zero net internal work ($W_{\\text{tension, net}} = 0$). Gravity is the only active work-doing force, so mechanical energy is conserved. (R) correctly explains (A)."
  },
  {
    a: "When a bomb at rest explodes into several fragments, the total mechanical kinetic energy increases.",
    r: "Internal chemical potential energy stored in explosive bonds is released and converted into kinetic energy of the fragments.",
    ans: 0,
    exp: "Total mechanical kinetic energy is not conserved because non-mechanical chemical potential energy is converted into kinetic energy. (R) correctly explains (A)."
  },
  {
    a: "In uniform circular motion on a horizontal surface, kinetic energy and potential energy both remain constant.",
    r: "The speed of the particle is constant and its height above the ground is constant.",
    ans: 0,
    exp: "Uniform circular motion has constant speed $v \\implies K = \\text{constant}$, and horizontal plane implies uniform elevation $h \\implies U = \\text{constant}$. Total mechanical energy remains constant. (R) correctly explains (A)."
  },
  {
    a: "For a body thrown vertically upwards, a plot of total mechanical energy versus height is a horizontal straight line.",
    r: "In the absence of non-conservative forces, total mechanical energy is independent of position and time.",
    ans: 0,
    exp: "Total mechanical energy $E = K + U = \\text{constant}$ at all heights $h$, yielding a flat horizontal line in an $E$ vs $h$ graph. (R) correctly explains (A)."
  },
  {
    a: "For a body in free fall, the plot of kinetic energy versus height is a straight line with a negative slope.",
    r: "From conservation of mechanical energy, $K(h) = E_{\\text{total}} - mgh$, which is linear in $h$ with slope $-mg$.",
    ans: 0,
    exp: "Since $K + mgh = E$, $K = E - mgh$, which is an equation of a straight line $y = c - mx$ with slope $-mg$. (R) correctly explains (A)."
  },
  {
    a: "When an external non-conservative force acts on a system, the work done by it equals the change in total mechanical energy.",
    r: "The generalized work-energy theorem states $W_{\\text{nc}} = \\Delta E_{\\text{mech}} = \\Delta K + \\Delta U$.",
    ans: 0,
    exp: "From $W_{\\text{total}} = W_{\\text{cons}} + W_{\\text{nc}} = \\Delta K$, using $W_{\\text{cons}} = -\\Delta U$ gives $W_{\\text{nc}} = \\Delta K + \\Delta U = \\Delta E$. (R) correctly explains (A)."
  },
  {
    a: "A mass suspended from a vertical spring is pulled down by distance $A$ from its equilibrium position and released. Its speed is maximum at the equilibrium position.",
    r: "At the equilibrium position, the net force on the mass is zero, so potential energy of the spring-gravity system is at a minimum.",
    ans: 0,
    exp: "The effective potential energy is $U_{\\text{eff}} = \\frac{1}{2}ky^2$ where $y$ is measured from the equilibrium point. At $y = 0$, $U_{\\text{eff}}$ is minimum, which maximizes kinetic energy and speed. (R) correctly explains (A)."
  },
  {
    a: "If internal forces are conservative, the total mechanical energy of an isolated system is conserved even if the bodies collide elastically.",
    r: "In an elastic collision, deformation is fully reversible and governed by conservative elastic forces.",
    ans: 0,
    exp: "Elastic collision forces are conservative internal interactions; no mechanical energy is permanently converted into thermal energy. (R) correctly explains (A)."
  },
  {
    a: "A ball thrown at an angle $\\theta$ to the horizontal with speed $u$ reaches the ground with speed $u$ (neglecting air resistance).",
    r: "The vertical displacement of the projectile between launch and landing is zero, so change in gravitational potential energy is zero.",
    ans: 0,
    exp: "By conservation of mechanical energy: $\\frac{1}{2}m v_f^2 = \\frac{1}{2}m u^2 - mg\\Delta y$. Since $\\Delta y = 0$, $v_f = u$. (R) correctly explains (A)."
  },
  {
    a: "The kinetic energy of a planet orbiting the Sun is maximum at perihelion (closest approach).",
    r: "Total mechanical energy of the planet-Sun system is conserved, and gravitational potential energy $U = -\\frac{GMm}{r}$ is at its most negative (minimum) at perihelion.",
    ans: 0,
    exp: "Since $E = K + U = \\text{constant}$, when $r$ is smallest, $U$ is most negative (minimum), so $K = E - U$ reaches its maximum value. (R) correctly explains (A)."
  },
  {
    a: "When a block slides down a smooth wedge that is free to slide on a frictionless horizontal floor, the mechanical energy of the (block + wedge) system is conserved.",
    r: "All contact forces are normal to the surfaces and internal to the system, with zero friction anywhere.",
    ans: 0,
    exp: "No non-conservative forces act on the system; the normal force between block and wedge transfers mechanical energy between them without dissipation. (R) correctly explains (A)."
  },
  {
    a: "A mass released from rest from a height $h$ compresses a spring of stiffness $k$ by $x$. The value of $x$ does not depend on the mass of the spring.",
    r: "An ideal spring is assumed to be massless, having no kinetic energy of its own.",
    ans: 0,
    exp: "In the standard idealization, springs are massless, so all kinetic energy resides entirely in the block. (R) correctly explains (A)."
  },
  {
    a: "Mechanical energy is conserved during the flow of an ideal non-viscous, incompressible fluid along a streamline.",
    r: "Bernoulli's equation is a statement of the conservation of mechanical energy per unit volume for ideal fluid flow.",
    ans: 0,
    exp: "Bernoulli's theorem states $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$, which directly represents mechanical energy conservation in fluid dynamics. (R) correctly explains (A)."
  },
  {
    a: "If two bodies are connected by a taut inextensible string over a fixed pulley, the sum of their kinetic energies equals the net loss of potential energy of the system.",
    r: "The work done by string tension on the connected system is identically zero.",
    ans: 0,
    exp: "Because the string is inextensible, one mass displaces by $+x$ while the other displaces by $-x$. Net work done by tension is $T x - T x = 0$, so $\\Delta K_{\\text{system}} = -\\Delta U_{\\text{system}}$. (R) correctly explains (A)."
  },
  {
    a: "The kinetic energy of a body can be greater than its total mechanical energy.",
    r: "Potential energy can have negative values, allowing $K = E - U > E$.",
    ans: 0,
    exp: "If $U < 0$ (such as in an attractive gravitational or electrostatic potential well), $K = E - U = E + |U| > E$. (R) correctly explains (A)."
  },
  {
    a: "A particle subjected to a force $\\vec{F} = (y\\hat{i} + x\\hat{j})$ has conserved mechanical energy.",
    r: "The curl of the force field $\\vec{\\nabla} \\times \\vec{F}$ is zero, meaning the force is conservative.",
    ans: 0,
    exp: "Here $\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y} = \\frac{\\partial(x)}{\\partial x} - \\frac{\\partial(y)}{\\partial y} = 1 - 1 = 0$. Hence the force is conservative ($U = -xy$), and mechanical energy is conserved. (R) correctly explains (A)."
  },
  {
    a: "Mechanical energy is conserved when a stone is dropped into water and reaches terminal velocity.",
    r: "The viscous buoyant force does conservative work on the stone.",
    ans: 3,
    exp: "Viscous resistance is a non-conservative dissipative force that converts mechanical energy into heat in the fluid. Hence mechanical energy is NOT conserved. Assertion is false."
  },
  {
    a: "When a block of mass $m$ is dropped onto a vertical spring from height $h$, maximum velocity of the block occurs when the spring compression is $x = \\frac{mg}{k}$.",
    r: "Maximum velocity occurs when acceleration is zero ($a = 0$), which occurs at the equilibrium position where the upward spring force balances gravity.",
    ans: 0,
    exp: "Acceleration is $a = g - \\frac{kx}{m}$. Velocity increases as long as $a > 0$. At $kx = mg \\implies x = \\frac{mg}{k}$, acceleration is zero and velocity reaches its maximum value. (R) correctly explains (A)."
  }
];

// 7 MCQ questions for Conservation of mechanical energy
const mcqData = [
  {
    q: "A block of mass $m = 1\\text{ kg}$ is dropped from a height of $h = 0.4\\text{ m}$ onto a vertical spring of stiffness $k = 400\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, the maximum compression $x$ of the spring is:",
    opts: [
      "$0.05\\text{ m}$",
      "$0.1\\text{ m}$",
      "$0.15\\text{ m}$",
      "$0.2\\text{ m}$"
    ],
    ans: 3, // Let's solve: mg(h + x) = 0.5 * k * x^2
    // 10(0.4 + x) = 200 x^2 -> 4 + 10x = 200 x^2 -> 200 x^2 - 10x - 4 = 0 -> 100 x^2 - 5x - 2 = 0.
    // D = 25 - 4(100)(-2) = 25 + 800 = 825 (not a perfect square).
    // Let's adjust parameters so D is a perfect square!
    // 200 x^2 - 10x - 10h = 0.
    // If x = 0.2 m: 0.5 * 400 * 0.04 = 8 J.
    // mg(h + x) = 10(h + 0.2) = 8 -> 10h + 2 = 8 -> 10h = 6 -> h = 0.6 m!
    // Let's check: 10(0.6 + 0.2) = 8 J. 0.5 * 400 * 0.04 = 8 J. Matches x = 0.2 m!
    q: "A block of mass $m = 1\\text{ kg}$ is dropped from a height $h = 0.6\\text{ m}$ onto a vertical spring of stiffness $k = 400\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, the maximum compression $x$ of the spring is:",
    opts: [
      "$0.1\\text{ m}$",
      "$0.2\\text{ m}$",
      "$0.3\\text{ m}$",
      "$0.4\\text{ m}$"
    ],
    ans: 1,
    exp: "By conservation of mechanical energy: $mg(h + x) = \\frac{1}{2}kx^2$. Substituting values: $10(0.6 + x) = 200 x^2 \\implies 6 + 10x = 200x^2 \\implies 200x^2 - 10x - 6 = 0 \\implies 100x^2 - 5x - 3 = 0$. Factoring: $(20x - 3)(5x + 1) = 0 \\implies x = 0.15\\text{ m}$. Wait, let's recheck: if x = 0.2 m, 100(0.04) - 5(0.2) - 3 = 4 - 1 - 3 = 0! Yes! $(5x - 1)(20x + 3) = 100x^2 + 15x - 20x - 3 = 100x^2 - 5x - 3 = 0$. Thus $5x - 1 = 0 \\implies x = 0.2\\text{ m}$."
  },
  {
    q: "A particle of mass $m$ moves along the x-axis under a potential energy $U(x) = 20 + (x - 2)^2$ (in Joules). If the total mechanical energy of the particle is $E = 36\\text{ J}$, the maximum speed of the particle in terms of $m$ is:",
    opts: [
      "$\\sqrt{\\frac{16}{m}}$",
      "$\\sqrt{\\frac{32}{m}}$",
      "$\\sqrt{\\frac{48}{m}}$",
      "$\\sqrt{\\frac{64}{m}}$"
    ],
    ans: 1,
    exp: "Minimum potential energy occurs at $x = 2\\text{ m}$, where $U_{\\text{min}} = 20\\text{ J}$. Maximum kinetic energy is $K_{\\text{max}} = E - U_{\\text{min}} = 36 - 20 = 16\\text{ J}$. Therefore $\\frac{1}{2}m v_{\\text{max}}^2 = 16 \\implies v_{\\text{max}} = \\sqrt{\\frac{32}{m}}$."
  },
  {
    q: "A block of mass $m$ slides from rest down a frictionless track that ends in a horizontal spring of stiffness $k$. If the initial vertical height is $h$, the maximum compression $x$ of the spring is:",
    opts: [
      "$\\sqrt{\\frac{mgh}{k}}$",
      "$\\sqrt{\\frac{2mgh}{k}}$",
      "$\\frac{mgh}{k}$",
      "$\\frac{2mgh}{k}$"
    ],
    ans: 1,
    exp: "Since the track and horizontal surface are frictionless, the initial gravitational potential energy is fully converted into elastic potential energy of the compressed spring: $mgh = \\frac{1}{2}kx^2 \\implies x = \\sqrt{\\frac{2mgh}{k}}$."
  },
  {
    q: "A simple pendulum of bob mass $m$ and string length $L$ is displaced by an angle $\\theta_0$ from the vertical and released from rest. The kinetic energy of the bob at the lowest point is:",
    opts: [
      "$mgL\\sin\\theta_0$",
      "$mgL\\cos\\theta_0$",
      "$mgL(1 - \\cos\\theta_0)$",
      "$mgL(1 - \\sin\\theta_0)$"
    ],
    ans: 2,
    exp: "The vertical distance descended by the bob is $h = L - L\\cos\\theta_0 = L(1 - \\cos\\theta_0)$. By conservation of mechanical energy, the kinetic energy at the bottom equals the loss in potential energy: $K = mgh = mgL(1 - \\cos\\theta_0)$."
  },
  {
    q: "A block of mass $2\\text{ kg}$ is pressed against a horizontal spring of force constant $k = 800\\text{ N/m}$, compressing it by $0.1\\text{ m}$. When released on a frictionless surface, the speed of the block as it separates from the spring is:",
    opts: [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$"
    ],
    ans: 1,
    exp: "Conservation of energy: $\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\implies v = x\\sqrt{\\frac{k}{m}} = 0.1\\sqrt{\\frac{800}{2}} = 0.1\\sqrt{400} = 0.1 \\times 20 = 2\\text{ m/s}$."
  },
  {
    q: "A bullet of mass $m$ moving horizontally with velocity $v$ penetrates a wooden block of mass $M$ resting on a smooth surface and gets embedded. The fraction of initial mechanical energy lost is:",
    opts: [
      "$\\frac{m}{M+m}$",
      "$\\frac{M}{M+m}$",
      "$\\frac{M}{m}$",
      "$\\frac{m}{M}$"
    ],
    ans: 1,
    exp: "Initial kinetic energy is $K_i = \\frac{1}{2}mv^2$. Final kinetic energy is $K_f = \\frac{1}{2}(M+m)V^2 = \\frac{1}{2}(M+m)\\left(\\frac{mv}{M+m}\\right)^2 = \\frac{m}{M+m}K_i$. Fraction lost is $\\frac{K_i - K_f}{K_i} = 1 - \\frac{m}{M+m} = \\frac{M}{M+m}$."
  },
  {
    q: "A bead of mass $m$ slides down a smooth vertical wire bent in the shape of a parabola $y = c x^2$ under gravity ($g$). If released from rest at height $y = H$, its speed at the origin $(0, 0)$ is:",
    opts: [
      "$\\sqrt{gH}$",
      "$\\sqrt{2gH}$",
      "$2\\sqrt{gH}$",
      "$\\sqrt{\\frac{gH}{c}}$"
    ],
    ans: 1,
    exp: "Since the wire is frictionless, the constraint force does zero work. Mechanical energy is conserved: $mgH = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gH}$."
  }
];

// 20 Numerical questions for Conservation of mechanical energy
const numData = [
  {
    q: "A body of mass $2\\text{ kg}$ is dropped from a height of $45\\text{ m}$. Taking $g = 10\\text{ m/s}^2$ and neglecting air resistance, the speed of the body when it reaches the ground in $\\text{m/s}$ is:",
    ans: 30,
    exp: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 45} = \\sqrt{900} = 30\\text{ m/s}$."
  },
  {
    q: "A spring of stiffness $k = 200\\text{ N/m}$ is compressed by $0.2\\text{ m}$. The kinetic energy acquired by a block of mass $1\\text{ kg}$ when released from this spring on a smooth horizontal table in Joules is:",
    ans: 4,
    exp: "$K = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.2)^2 = 100 \\times 0.04 = 4\\text{ J}$."
  },
  {
    q: "A pendulum bob of mass $0.5\\text{ kg}$ is released from a height of $1.8\\text{ m}$ above its lowest point. Taking $g = 10\\text{ m/s}^2$, the speed of the bob at the lowest point in $\\text{m/s}$ is:",
    ans: 6,
    exp: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 1.8} = \\sqrt{36} = 6\\text{ m/s}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ moves under a conservative force with potential energy $U(x) = x^2 - 4x + 7$ (in Joules). If its total mechanical energy is $12\\text{ J}$, its maximum kinetic energy in Joules is:",
    ans: 9,
    exp: "Minimum potential energy is at $x = 2\\text{ m}$, where $U_{\\text{min}} = 2^2 - 4(2) + 7 = 4 - 8 + 7 = 3\\text{ J}$. Maximum kinetic energy is $K_{\\text{max}} = E - U_{\\text{min}} = 12 - 3 = 9\\text{ J}$."
  },
  {
    q: "A block of mass $2\\text{ kg}$ moving at $4\\text{ m/s}$ on a smooth surface collides with an uncompressed horizontal spring of stiffness $k = 32\\text{ N/m}$. The maximum compression of the spring in meters is:",
    ans: 1,
    exp: "$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 \\implies x = v\\sqrt{\\frac{m}{k}} = 4\\sqrt{\\frac{2}{32}} = 4\\sqrt{\\frac{1}{16}} = 4 \\times \\frac{1}{4} = 1\\text{ m}$."
  },
  {
    q: "A ball of mass $0.1\\text{ kg}$ is projected upwards with velocity $20\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, its potential energy in Joules at the maximum height (taking ground as zero reference) is:",
    ans: 20,
    exp: "At maximum height, all initial kinetic energy is converted into potential energy: $U = K_i = \\frac{1}{2}mv^2 = \\frac{1}{2}(0.1)(20^2) = 0.05 \\times 400 = 20\\text{ J}$."
  },
  {
    q: "A particle of mass $0.5\\text{ kg}$ falls from rest from height $h = 5\\text{ m}$ onto a vertical spring of constant $k = 100\\text{ N/m}$. If the maximum compression is $x$, and taking $g = 10\\text{ m/s}^2$, the compression $x$ in meters is:",
    // mg(h + x) = 0.5 * 100 * x^2 -> 5(5 + x) = 50 x^2 -> 25 + 5x = 50 x^2 -> 10 x^2 - x - 5 = 0 (not clean).
    // Let's make: h = 0 m (placed gently or dropped from spring equilibrium):
    // If dropped from height h: let 0.5 * k * x^2 - mgx - mgh = 0.
    // If k = 200, m = 1 kg, g = 10: 100 x^2 - 10x - 10h = 0 -> 10 x^2 - x - h = 0.
    // If x = 0.5 m: 10(0.25) - 0.5 = 2.5 - 0.5 = 2 -> h = 2 m!
    q: "A block of mass $1\\text{ kg}$ is dropped from a height of $2\\text{ m}$ above the uncompressed top of a vertical spring of stiffness $k = 200\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, the maximum compression of the spring in centimeters is:",
    ans: 50,
    exp: "By energy conservation: $mg(h + x) = \\frac{1}{2}kx^2 \\implies 10(2 + x) = 100x^2 \\implies 10x^2 - x - 2 = 0$. Factoring gives $(2x - 1)(5x + 2) = 0 \\implies x = 0.5\\text{ m} = 50\\text{ cm}$."
  },
  {
    q: "A particle moves in a force field where $U(x) = 4x^2 - 16x$ Joules. If the particle is released from rest at $x = 0$, the maximum position $x$ in meters reached by the particle is:",
    ans: 4,
    exp: "At $x = 0$, $E = U(0) = 0\\text{ J}$. At turning points, $K = 0 \\implies U(x) = E \\implies 4x^2 - 16x = 0 \\implies 4x(x - 4) = 0$. The particle moves between $x = 0$ and $x = 4\\text{ m}$."
  },
  {
    q: "A body of mass $4\\text{ kg}$ is attached to a vertical spring. When released from rest from the uncompressed state, the maximum elongation of the spring is $0.2\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, the force constant of the spring in $\\text{N/m}$ is:",
    ans: 400,
    exp: "Maximum elongation is $x_{\\text{max}} = \\frac{2mg}{k} \\implies 0.2 = \\frac{2 \\times 4 \\times 10}{k} = \\frac{80}{k} \\implies k = \\frac{80}{0.2} = 400\\text{ N/m}$."
  },
  {
    q: "A cart of mass $50\\text{ kg}$ moving at $10\\text{ m/s}$ along a smooth horizontal track enters an inclined ramp. Taking $g = 10\\text{ m/s}^2$, the maximum vertical height in meters reached by the cart before sliding back is:",
    ans: 5,
    exp: "By conservation of energy: $\\frac{1}{2}mv^2 = mgh \\implies h = \\frac{v^2}{2g} = \\frac{10^2}{2 \\times 10} = \\frac{100}{20} = 5\\text{ m}$."
  },
  {
    q: "A simple pendulum of length $1.25\\text{ m}$ has a bob of mass $0.2\\text{ kg}$. If given a horizontal velocity of $5\\text{ m/s}$ at the bottom, taking $g = 10\\text{ m/s}^2$, the height in meters to which the bob rises before momentarily stopping is:",
    ans: 1.25,
    exp: "$h = \\frac{v^2}{2g} = \\frac{5^2}{2 \\times 10} = \\frac{25}{20} = 1.25\\text{ m}$."
  },
  {
    q: "Two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ are connected by a light string passing over a frictionless pulley. If the system is released from rest, taking $g = 10\\text{ m/s}^2$, the total kinetic energy of the system in Joules after $m_1$ falls through a distance of $2\\text{ m}$ is:",
    ans: 40,
    exp: "When $m_1$ falls by $h = 2\\text{ m}$, $m_2$ rises by $h = 2\\text{ m}$. Loss in potential energy is $\\Delta U = m_1 gh - m_2 gh = (3 - 1)(10)(2) = 2 \\times 20 = 40\\text{ J}$. By energy conservation, total kinetic energy is $K = 40\\text{ J}$."
  },
  {
    q: "A block of mass $1\\text{ kg}$ slides down a smooth curved incline from height $h = 5\\text{ m}$ and compresses a horizontal spring of stiffness $k = 1000\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, the maximum compression of the spring in meters is:",
    // mgh = 1 * 10 * 5 = 50 J. 0.5 * 1000 * x^2 = 500 x^2 = 50 -> x^2 = 0.1 (not clean).
    // If mgh = 50 J, k = 100 N/m: 50 x^2 = 50 -> x = 1 m!
    q: "A block of mass $1\\text{ kg}$ slides down a smooth curved incline from height $h = 5\\text{ m}$ and compresses a horizontal spring of stiffness $k = 100\\text{ N/m}$. Taking $g = 10\\text{ m/s}^2$, the maximum compression of the spring in meters is:",
    ans: 1,
    exp: "$mgh = \\frac{1}{2}kx^2 \\implies 1 \\times 10 \\times 5 = \\frac{1}{2}(100)x^2 \\implies 50 = 50x^2 \\implies x = 1\\text{ m}$."
  },
  {
    q: "A particle of mass $2\\text{ kg}$ moves along the x-axis with potential energy $U(x) = 5x^2$ Joules. If its total energy is $40\\text{ J}$, the distance between its two turning points in meters is:",
    ans: 5.65, // 5x^2 = 40 -> x^2 = 8 -> x = 2*sqrt(2). Not integer.
    // Let's make U(x) = 10 x^2, E = 40 J -> 10 x^2 = 40 -> x = +- 2. Distance = 4 m!
    q: "A particle of mass $2\\text{ kg}$ moves along the x-axis with potential energy $U(x) = 10x^2$ Joules. If its total mechanical energy is $40\\text{ J}$, the distance between its turning points in meters is:",
    ans: 4,
    exp: "Turning points occur where $U(x) = E \\implies 10x^2 = 40 \\implies x^2 = 4 \\implies x = \\pm 2\\text{ m}$. The distance between turning points is $2 - (-2) = 4\\text{ m}$."
  },
  {
    q: "A vertical spring of constant $k = 500\\text{ N/m}$ is compressed by $0.2\\text{ m}$. A ball of mass $0.5\\text{ kg}$ is placed on it and released. Taking $g = 10\\text{ m/s}^2$, the maximum height above the release point reached by the ball in meters is:",
    ans: 2,
    exp: "Initial spring energy is $E = \\frac{1}{2}kx^2 = \\frac{1}{2}(500)(0.2)^2 = 250 \\times 0.04 = 10\\text{ J}$. At maximum height, $mgh = 10 \\implies 0.5 \\times 10 \\times h = 10 \\implies 5h = 10 \\implies h = 2\\text{ m}$."
  },
  {
    q: "A block of mass $2\\text{ kg}$ is released from rest on a smooth inclined plane of angle $30^\\circ$. Taking $g = 10\\text{ m/s}^2$, its kinetic energy in Joules after sliding a distance of $4\\text{ m}$ along the plane is:",
    ans: 40,
    exp: "Vertical height fallen is $h = s\\sin 30^\\circ = 4 \\times 0.5 = 2\\text{ m}$. By conservation of energy, $K = mgh = 2 \\times 10 \\times 2 = 40\\text{ J}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ is projected horizontally from the top of a tower of height $20\\text{ m}$ with speed $15\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, its kinetic energy upon hitting the ground in Joules is:",
    // K_i = 0.5 * 1 * 225 = 112.5 J. mgh = 1 * 10 * 20 = 200 J -> 312.5 (not integer).
    // Let mass = 2 kg: K_i = 0.5 * 2 * 225 = 225 J. mgh = 2 * 10 * 20 = 400 J -> K_f = 625 J!
    q: "A particle of mass $2\\text{ kg}$ is projected horizontally from the top of a tower of height $20\\text{ m}$ with speed $15\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, its kinetic energy upon striking the ground in Joules is:",
    ans: 625,
    exp: "By conservation of mechanical energy: $K_f = K_i + mgh = \\frac{1}{2}(2)(15^2) + 2(10)(20) = 225 + 400 = 625\\text{ J}$."
  },
  {
    q: "A mass of $3\\text{ kg}$ attached to a spring of stiffness $k = 300\\text{ N/m}$ is oscillating horizontally. If its speed at the equilibrium position is $2\\text{ m/s}$, the amplitude of oscillation in meters is:",
    // 0.5 * k * A^2 = 0.5 * m * v^2 -> 300 A^2 = 3 * 4 = 12 -> A^2 = 12/300 = 4/100 -> A = 2/10 = 0.2 m.
    // In cm: 20 cm!
    q: "A body of mass $3\\text{ kg}$ attached to a spring of stiffness $k = 300\\text{ N/m}$ oscillates horizontally on a smooth floor. If its maximum speed is $2\\text{ m/s}$, the amplitude of oscillation in centimeters is:",
    ans: 20,
    exp: "$\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2 \\implies A = v_{\\text{max}}\\sqrt{\\frac{m}{k}} = 2\\sqrt{\\frac{3}{300}} = 2\\sqrt{\\frac{1}{100}} = 0.2\\text{ m} = 20\\text{ cm}$."
  },
  {
    q: "A block of mass $0.5\\text{ kg}$ is released from a height of $8\\text{ m}$ on a frictionless curved track. Taking $g = 10\\text{ m/s}^2$, the speed of the block in $\\text{m/s}$ when its height becomes $3.5\\text{ m}$ is:",
    // Delta h = 8 - 3.5 = 4.5 m. v = sqrt(2 * 10 * 4.5) = sqrt(90) (not integer).
    // Let Delta h = 5 m -> h = 3 m!
    q: "A block of mass $0.5\\text{ kg}$ is released from rest from a height of $8\\text{ m}$ on a frictionless curved track. Taking $g = 10\\text{ m/s}^2$, the speed of the block in $\\text{m/s}$ when it reaches a height of $3\\text{ m}$ is:",
    ans: 10,
    exp: "Vertical drop is $\\Delta h = 8 - 3 = 5\\text{ m}$. Speed is $v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\text{ m/s}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ moves in a potential field $U(x) = 25 - x^2$ Joules for $|x| \\le 5\\text{ m}$, and $U(x) = 0$ for $|x| > 5\\text{ m}$. The minimum mechanical energy in Joules required for a particle starting from $x = 5\\text{ m}$ to pass over the potential barrier at the origin is:",
    ans: 25,
    exp: "The maximum of the potential barrier occurs at $x = 0$, where $U_{\\text{max}} = 25\\text{ J}$. To cross this barrier, the total mechanical energy must be at least $E_{\\text{min}} = U_{\\text{max}} = 25\\text{ J}$."
  }
];

const part4Questions = [];

arData.forEach((item, idx) => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part4Questions.push({
    question: qText,
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

const outPath = path.join(__dirname, 'data_jee_wep_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
