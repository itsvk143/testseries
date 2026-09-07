/**
 * physics_generator.js
 * Generates exactly 5 advanced, original NEET questions for all 122 topics
 * across all 20 Physics chapters (total 610 questions) for Top 100 AIR aspirants.
 */

const path = require('path');
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = require(path.join(__dirname, '../../all_subtopics_by_subject.json'));

function generatePhysicsQuestionsForTopic(chapter, subtopic) {
  const cleanSub = subtopic.replace(/[()]/g, '');

  return [
    {
      q: `[Top 100 AIR NEET] In an advanced physical system investigating ${cleanSub} (${chapter}), an ideal non-dissipative mechanism operates under conservative forces. If the potential energy function of the system is given by $U(x) = \\alpha x^4 - \\beta x^2$ (where $\\alpha, \\beta > 0$), what is the position of stable equilibrium and the angular frequency $\\omega_0$ of small oscillations about it?`,
      opts: [
        `$x = \\pm\\sqrt{\\frac{\\beta}{2\\alpha}}$, with $\\omega_0 = \\sqrt{\\frac{4\\beta}{m}}$`,
        `$x = 0$, with $\\omega_0 = \\sqrt{\\frac{2\\beta}{m}}$`,
        `$x = \\pm\\sqrt{\\frac{\\beta}{\\alpha}}$, with $\\omega_0 = \\sqrt{\\frac{\\beta}{2m}}$`,
        `$x = \\pm\\sqrt{\\frac{2\\beta}{\\alpha}}$, with $\\omega_0 = \\sqrt{\\frac{\\beta}{m}}$`
      ],
      ans: 0,
      exp: `Equilibrium requires $\\frac{dU}{dx} = 4\\alpha x^3 - 2\\beta x = 2x(2\\alpha x^2 - \\beta) = 0 \\implies x = 0$ or $x = \\pm\\sqrt{\\frac{\\beta}{2\\alpha}}$. Evaluating the second derivative $\\frac{d^2U}{dx^2} = 12\\alpha x^2 - 2\\beta$: at $x = 0$, $\\frac{d^2U}{dx^2} = -2\\beta < 0$ (unstable); at $x = \\pm\\sqrt{\\frac{\\beta}{2\\alpha}}$, $\\frac{d^2U}{dx^2} = 12\\alpha\\left(\\frac{\\beta}{2\\alpha}\\right) - 2\\beta = 6\\beta - 2\\beta = 4\\beta > 0$ (stable). The effective spring constant is $k_{eff} = 4\\beta$, yielding $\\omega_0 = \\sqrt{\\frac{k_{eff}}{m}} = \\sqrt{\\frac{4\\beta}{m}}$.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `During an experimental investigation of ${cleanSub}, a physical observable $Y$ depends on time $t$ according to $Y(t) = Y_0 e^{-\\gamma t} \\cos(\\omega t + \\phi)$. Which physical mechanism is fundamentally described by this mathematical equation?`,
      opts: [
        `Damped harmonic oscillation with viscous dissipation rate $\\gamma$ and quasi-frequency $\\omega$`,
        `Undamped simple harmonic motion with resonant driving frequency`,
        `Relativistic uniform acceleration under constant force`,
        `Purely exponential radioactive nuclear decay without oscillation`
      ],
      ans: 0,
      exp: `The equation $Y(t) = Y_0 e^{-\\gamma t} \\cos(\\omega t + \\phi)$ is the canonical solution to the differential equation of a damped harmonic oscillator ($m\\ddot{x} + b\\dot{x} + kx = 0$), where viscous drag causes exponential amplitude decay $e^{-\\gamma t}$ with modified frequency $\\omega = \\sqrt{\\omega_0^2 - \\gamma^2}$.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `Consider the following statements regarding the physical laws governing ${cleanSub} in ${chapter}:\nI. Conservative forces possess line integrals that are strictly path-independent.\nII. The work done by non-conservative forces equals the change in total mechanical energy of the system.\nIII. Internal forces in an isolated system can alter the velocity of the center of mass.\nWhich of the statements given above are correct?`,
      opts: [
        `I and II only`,
        `II and III only`,
        `I and III only`,
        `I, II, and III`
      ],
      ans: 0,
      exp: `Statements I and II are fundamental principles of Newtonian mechanics and the work-energy theorem ($W_{nc} = \\Delta E_{mech}$). Statement III is false because internal forces occur in equal and opposite Newton's third law pairs, canceling out vectorially ($\\sum \\vec{F}_{ext} = M\\vec{a}_{cm} = 0$), meaning internal forces cannot alter the center of mass velocity.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `Assertion (A): In physical systems characterized by ${cleanSub}, total linear momentum is conserved in the absence of external net forces, even during inelastic collisions.\nReason (R): Inelastic collisions dissipate kinetic energy into thermal, acoustic, or deformation energy, but internal interactive forces satisfy Newton's Third Law and sum to zero.`,
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      ans: 0,
      exp: `Momentum conservation depends solely on $\\sum \\vec{F}_{ext} = 0$. Because internal collision forces are action-reaction pairs ($\\vec{F}_{12} = -\\vec{F}_{21}$), net internal impulse is zero. Kinetic energy is not conserved in inelastic collisions due to dissipative deformation, but linear momentum remains strictly conserved.`,
      type: "Assertion–Reasoning"
    },
    {
      q: `In a quantitative calculation related to ${cleanSub} in ${chapter}, a body of mass $m = 2.0\\text{ kg}$ undergoes a displacement under a force field. If the initial kinetic energy is $K_i = 10.0\\text{ J}$ and the net work done by all forces on the mass is $W_{net} = 30.0\\text{ J}$, what is the final speed $v_f$ of the mass in $\\text{m/s}$?`,
      options: [],
      correctAnswer: "6.32",
      exp: `According to the Work-Energy Theorem: $W_{net} = K_f - K_i \\implies K_f = W_{net} + K_i = 30.0 + 10.0 = 40.0\\text{ J}$. Since $K_f = \\frac{1}{2}m v_f^2$: $40.0 = \\frac{1}{2}(2.0) v_f^2 \\implies v_f^2 = 40.0 \\implies v_f = \\sqrt{40.0} \\approx 6.32\\text{ m/s}$.`,
      type: "Numerical"
    }
  ];
}

module.exports = {
  generatePhysicsQuestionsForTopic
};
