const fs = require('fs');

const subTopic = "Banking of roads";
const subject = "Physics";
const chapter = "Laws of Motion";

const AR_OPTIONS = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const arQuestions = [
  {
    assertion: "Curved roads are generally banked by raising the outer edge relative to the inner edge.",
    reason: "Banking provides a horizontal component of the normal reaction that supplies the necessary centripetal force without relying solely on friction.",
    correctAnswer: 0,
    explanation: "When a road is banked at an angle $\\theta$, the normal reaction $\\vec{N}$ tilts inwards, providing a horizontal component $N\\sin\\theta = \\frac{mv^2}{R}$. This reduces tire wear and prevents skidding even if friction is negligible. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A cyclist negotiating a sharp turn leans inward toward the center of the circular path.",
    reason: "Leaning inward generates a horizontal component of the ground reaction force that provides the centripetal force and ensures zero net torque about the center of mass.",
    correctAnswer: 0,
    explanation: "If the cyclist remains vertical, friction produces an unbalanced torque about the center of mass that causes overturning. Leaning at angle $\\theta$ to the vertical produces a normal torque that balances the friction torque, satisfying $\\tan\\theta = \\frac{v^2}{R g}$. Both Assertion and Reason are true."
  },
  {
    assertion: "On an ideally banked frictionless road, there exists a unique speed at which a car can negotiate the curve without any tendency to slide.",
    reason: "At the optimum speed $v_0 = \\sqrt{R g \\tan\\theta}$, the inward horizontal component of the normal reaction exactly balances the required centripetal force.",
    correctAnswer: 0,
    explanation: "Resolving forces: $N\\sin\\theta = \\frac{m v_0^2}{R}$ and $N\\cos\\theta = mg$. Dividing yields $\\tan\\theta = \\frac{v_0^2}{R g} \\implies v_0 = \\sqrt{R g \\tan\\theta}$. At this speed, no frictional force is invoked. Both Assertion and Reason are true."
  },
  {
    assertion: "If a car negotiates a banked curve at a speed greater than the optimum banking speed, friction on the tires acts down the incline.",
    reason: "At speeds exceeding $\\sqrt{R g \\tan\\theta}$, the car has a tendency to skid radially outwards, so static friction opposes this tendency by acting down the banked slope.",
    correctAnswer: 0,
    explanation: "For $v > v_0$, the required centripetal force exceeds $N\\sin\\theta$. To provide the additional inward force, friction $f$ acts downward along the inclined surface, contributing $f\\cos\\theta$ inward. Both Assertion and Reason are true."
  },
  {
    assertion: "If a car negotiates a banked curve at a speed less than the optimum banking speed, friction on the tires acts up the incline.",
    reason: "At speeds lower than the optimum speed, the horizontal component of the normal reaction exceeds the required centripetal acceleration, causing an inward sliding tendency.",
    correctAnswer: 0,
    explanation: "For $v < v_0$, $N\\sin\\theta > \\frac{m v^2}{R}$. The excess inward force tends to pull the vehicle down the slope, which is opposed by static friction acting upward along the incline. Both Assertion and Reason are true."
  },
  {
    assertion: "A vehicle parked on a banked road will slip down if the angle of banking exceeds the angle of repose.",
    reason: "When $\\theta > \\tan^{-1}\\mu_s$, the downward component of gravity along the incline $mg\\sin\\theta$ exceeds the maximum static friction $f_{\\text{max}} = \\mu_s mg\\cos\\theta$.",
    correctAnswer: 0,
    explanation: "Static equilibrium on an incline requires $mg\\sin\\theta \\le \\mu_s N = \\mu_s mg\\cos\\theta \\implies \\tan\\theta \\le \\mu_s$. If $\\theta > \\lambda = \\tan^{-1}\\mu_s$, the car slides down even when stationary ($v = 0$). Both Assertion and Reason are true."
  },
  {
    assertion: "When a four-wheeled vehicle rounds an unbanked circular curve at high speed, the inner wheels leave the ground first.",
    reason: "The centrifugal force acting on the center of mass exerts an overturning torque about the outer wheels, reducing the normal reaction on the inner wheels.",
    correctAnswer: 0,
    explanation: "Taking torques about the outer wheels, the normal force on the inner wheels is $R_1 = \\frac{mg}{2}\\left(1 - \\frac{v^2 h}{R g a}\\right)$. As speed increases, $R_1$ drops to zero before $R_2$, so the inner wheels lift off first. Both Assertion and Reason are true."
  },
  {
    assertion: "On a level unbanked road, the maximum speed at which a car can turn without skidding is independent of the mass of the car.",
    reason: "The maximum centripetal force is provided by static friction $f_{\\text{max}} = \\mu_s mg$, and equating this to $\\frac{m v^2}{R}$ makes the mass cancel out.",
    correctAnswer: 0,
    explanation: "$\\mu_s mg = \\frac{m v^2}{R} \\implies v_{\\text{max}} = \\sqrt{\\mu_s g R}$. Since $m$ cancels, both heavy trucks and light cars have the same theoretical threshold speed. Both Assertion and Reason are true."
  },
  {
    assertion: "Railway tracks are banked by raising the outer rail above the inner rail on curves.",
    reason: "Super-elevation of the outer rail prevents excessive lateral thrust on the wheel flanges and equalizes wear on both rails.",
    correctAnswer: 0,
    explanation: "By elevating the outer rail by height $h = \\frac{v^2 d}{R g}$ (where $d$ is gauge), the resultant reaction is perpendicular to the track bed, eliminating dangerous lateral flange wear. Both Assertion and Reason are true."
  },
  {
    assertion: "An airplane banks its wings when making a horizontal turn.",
    reason: "Tilting the wings directs the aerodynamic lift vector at an angle to the vertical, providing the necessary centripetal force toward the center of the turn.",
    correctAnswer: 0,
    explanation: "The lift force $\\vec{L}$ perpendicular to the wings decomposes into $L\\cos\\theta = mg$ vertically and $L\\sin\\theta = \\frac{mv^2}{R}$ horizontally, creating the turn without sideslip. Both Assertion and Reason are true."
  },
  {
    assertion: "The maximum speed of a vehicle on a banked road with friction coefficient $\\mu_s$ is given by $v_{\\text{max}} = \\sqrt{R g \\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s \\tan\\theta}}$.",
    reason: "At maximum speed, static friction reaches its limiting value $\\mu_s N$ directed downward along the banked surface.",
    correctAnswer: 0,
    explanation: "Setting $f = \\mu_s N$ down the incline gives $N\\sin\\theta + \\mu_s N\\cos\\theta = \\frac{mv^2}{R}$ and $N\\cos\\theta - \\mu_s N\\sin\\theta = mg$. Dividing these equations yields the standard maximum speed formula. Both Assertion and Reason are true."
  },
  {
    assertion: "For a conical pendulum of length $L$ making angle $\\theta$ with the vertical, the tension in the string is greater than the weight of the bob.",
    reason: "The vertical component of tension balances the weight, requiring $T\\cos\\theta = mg$, which implies $T = \\frac{mg}{\\cos\\theta} > mg$ for $\\theta > 0$.",
    correctAnswer: 0,
    explanation: "Because $\\cos\\theta < 1$ for any non-zero angle, $T = \\frac{mg}{\\cos\\theta} > mg$. The tension must balance gravity and simultaneously provide centripetal force $T\\sin\\theta$. Both Assertion and Reason are true."
  },
  {
    assertion: "A small object placed on a rotating horizontal turntable slips outward if the rotational speed exceeds a critical value.",
    reason: "The required centripetal force $m \\omega^2 r$ increases quadratically with angular speed, eventually exceeding the limiting static friction $\\mu_s mg$.",
    correctAnswer: 0,
    explanation: "Static friction must satisfy $m \\omega^2 r \\le \\mu_s mg \\implies \\omega \\le \\sqrt{\\frac{\\mu_s g}{r}}$. When $\\omega > \\sqrt{\\mu_s g / r}$, friction is insufficient and slipping occurs. Both Assertion and Reason are true."
  },
  {
    assertion: "On a wet or icy road, banking of the road is crucial to prevent vehicles from skidding off.",
    reason: "When ice or water reduces the coefficient of friction to near zero, centripetal force must be supplied entirely by the normal force component $N\\sin\\theta$.",
    correctAnswer: 0,
    explanation: "If $\\mu_s \\to 0$, $v_{\\text{max}} = \\sqrt{R g \\tan\\theta}$. Without banking on a flat road ($\\theta = 0$), $v_{\\text{max}} = 0$ on frictionless ice. Banking ensures a non-zero safe speed. Both Assertion and Reason are true."
  },
  {
    assertion: "A car moving on a curved banked road will never overturn if the angle of banking equals $45^\\circ$.",
    reason: "At $\\theta = 45^\\circ$, the normal reaction and the centripetal force are always identical in magnitude.",
    correctAnswer: 3,
    explanation: "Overturning depends on speed, height of center of mass $h$, and wheel track width $2a$. Even at $\\theta = 45^\\circ$, excessive speed can generate enough overturning torque to tip the vehicle. Assertion is false, Reason is false."
  },
  {
    assertion: "For a car turning on a level road, a wider wheelbase and lower center of mass reduce the danger of overturning.",
    reason: "The maximum speed before toppling is $v_{\\text{topple}} = \\sqrt{\\frac{g R a}{h}}$, where $a$ is half-track width and $h$ is center-of-mass height.",
    correctAnswer: 0,
    explanation: "Torque balance shows that tipping occurs when $v^2 = \\frac{g R a}{h}$. Increasing $a$ (wider wheelbase) or decreasing $h$ (lower center of mass) increases $v_{\\text{topple}}$, making the vehicle more stable. Both Assertion and Reason are true."
  },
  {
    assertion: "The time period of a conical pendulum of length $L$ inclined at angle $\\theta$ to the vertical is $2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$.",
    reason: "The effective height of the cone traced by the string is $h = L\\cos\\theta$, and the horizontal radius of circle is $r = L\\sin\\theta$.",
    correctAnswer: 0,
    explanation: "From $T\\sin\\theta = m\\omega^2 (L\\sin\\theta)$ and $T\\cos\\theta = mg$, we get $\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$, which gives time period $T_p = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$. Both Assertion and Reason are true."
  },
  {
    assertion: "A cyclist negotiating a curve cannot lean at an angle of $90^\\circ$ with the vertical.",
    reason: "At $\\theta = 90^\\circ$, $\\tan\\theta = \\infty$, requiring an infinite velocity $v \\to \\infty$, which is physically impossible.",
    correctAnswer: 0,
    explanation: "$\\tan\\theta = \\frac{v^2}{R g}$. As $\\theta \\to 90^\\circ$, $\\tan\\theta \\to \\infty$, which would require infinite speed and zero vertical support. Both Assertion and Reason are true."
  },
  {
    assertion: "In the Rotor / 'Death Well' (Well of Death), a motorcyclist rides vertically on the inner cylindrical wall without falling.",
    reason: "The normal reaction from the vertical wall provides the centripetal force, and upward static friction balances the downward gravitational force.",
    correctAnswer: 0,
    explanation: "Wall exerts normal force $N = \\frac{mv^2}{R}$. Upward friction is $f_s = mg$. For no slipping, $mg \\le \\mu_s N = \\mu_s \\frac{mv^2}{R} \\implies v \\ge \\sqrt{\\frac{Rg}{\\mu_s}}$. Both Assertion and Reason are true."
  },
  {
    assertion: "If a banked road has $\\tan\\theta < \\mu_s$, a vehicle can remain at rest on the banked road without sliding down.",
    reason: "The maximum static friction up the incline $\\mu_s mg\\cos\\theta$ is greater than the component of gravity down the incline $mg\\sin\\theta$.",
    correctAnswer: 0,
    explanation: "When stationary, the driving force down the slope is $mg\\sin\\theta$ and available holding friction is $\\mu_s mg\\cos\\theta$. Since $\\tan\\theta < \\mu_s$, $mg\\sin\\theta < \\mu_s mg\\cos\\theta$, guaranteeing stability at rest. Both Assertion and Reason are true."
  },
  {
    assertion: "The banking angle for a curved highway is chosen specifically for the average designed traffic speed.",
    reason: "Different vehicles travel at different speeds, so banking minimizes tire friction wear for the design speed while allowing friction to accommodate variations.",
    correctAnswer: 0,
    explanation: "A highway is banked for an optimal speed $v_0$. Faster vehicles rely on friction acting down the slope, while slower vehicles rely on friction acting up the slope. Both Assertion and Reason are true."
  },
  {
    assertion: "Centrifugal force is a real force acting on a vehicle in an inertial frame of reference.",
    reason: "Centrifugal force is a pseudo-force introduced only when describing motion from a rotating, non-inertial reference frame.",
    correctAnswer: 3,
    explanation: "In an inertial frame, the only real forces are gravity, normal reaction, and friction. Centrifugal force exists strictly in the rotating frame of reference as a fictitious/pseudo force. Assertion is false, Reason is true."
  },
  {
    assertion: "On an unbanked circular track, an overturning car always tips outward away from the center of curvature.",
    reason: "The overturning torque about the outer contact patch is driven by the outward centrifugal pseudo-force acting at the center of mass.",
    correctAnswer: 0,
    explanation: "In the car's frame, centrifugal force $m v^2 / R$ acts outward at height $h$ above ground, creating a torque $m v^2 h / R$ about the outer tires that rotates the car outward. Both Assertion and Reason are true."
  },
  {
    assertion: "When banking an unpaved mud track, the safe speed range is narrower than on a concrete banked track of the same radius.",
    reason: "Mud has a lower coefficient of static friction $\\mu_s$ than concrete, which narrows the gap between $v_{\\text{min}}$ and $v_{\\text{max}}$.",
    correctAnswer: 0,
    explanation: "The safe speed interval $[v_{\\text{min}}, v_{\\text{max}}]$ expands with increasing friction $\\mu_s$. Lower $\\mu_s$ on mud contracts this safe operating window toward the single optimum speed $v_0$. Both Assertion and Reason are true."
  },
  {
    assertion: "A plumb line suspended from the ceiling of a car rounding a curve deflects toward the outside of the curve.",
    reason: "In the non-inertial frame of the car, the plumb bob experiences an outward centrifugal pseudo-force $\\frac{mv^2}{R}$.",
    correctAnswer: 0,
    explanation: "Tension $T\\cos\\theta = mg$ and $T\\sin\\theta = \\frac{mv^2}{R}$, yielding an outward deflection angle $\\tan\\theta = \\frac{v^2}{R g}$. Both Assertion and Reason are true."
  },
  {
    assertion: "A cyclist will skid outward rather than topple if the coefficient of friction between tires and road is less than $\\frac{a}{h}$.",
    reason: "The condition for skidding is $v^2 > \\mu g R$, whereas the condition for toppling is $v^2 > \\frac{g R a}{h}$. If $\\mu < \\frac{a}{h}$, skidding threshold is reached first.",
    correctAnswer: 0,
    explanation: "Comparing thresholds: $v_{\\text{skid}} = \\sqrt{\\mu g R}$ and $v_{\\text{topple}} = \\sqrt{\\frac{g R a}{h}}$. If $\\mu < \\frac{a}{h}$, then $v_{\\text{skid}} < v_{\\text{topple}}$, so the vehicle slips before it can tip over. Both Assertion and Reason are true."
  }
];

const mcqQuestions = [
  {
    question: "A curved road of radius $R = 100\\,\\text{m}$ is banked at an angle $\\theta = 45^\\circ$. Taking $g = 10\\,\\text{m/s}^2$ and assuming no friction, the optimum speed for a vehicle to negotiate the turn safely is:",
    options: [
      "$\\sqrt{1000}\\,\\text{m/s} \\approx 31.6\\,\\text{m/s}$",
      "$10\\,\\text{m/s}$",
      "$20\\,\\text{m/s}$",
      "$45\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "The optimum speed without friction is $v_0 = \\sqrt{R g \\tan\\theta} = \\sqrt{100 \\times 10 \\times \\tan 45^\\circ} = \\sqrt{1000}\\,\\text{m/s} \\approx 31.62\\,\\text{m/s}$."
  },
  {
    question: "A car is negotiating a flat horizontal circular curve of radius $R = 50\\,\\text{m}$. If the coefficient of static friction between the tires and the road is $\\mu_s = 0.5$ and $g = 10\\,\\text{m/s}^2$, the maximum safe speed without skidding is:",
    options: [
      "$\\sqrt{250}\\,\\text{m/s} \\approx 15.8\\,\\text{m/s}$",
      "$25\\,\\text{m/s}$",
      "$10\\,\\text{m/s}$",
      "$5\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "On a flat unbanked road, $v_{\\text{max}} = \\sqrt{\\mu_s g R} = \\sqrt{0.5 \\times 10 \\times 50} = \\sqrt{250}\\,\\text{m/s} \\approx 15.81\\,\\text{m/s}$."
  },
  {
    question: "A cyclist negotiating a circular turn of radius $20\\,\\text{m}$ at a speed of $10\\,\\text{m/s}$ must lean with the vertical at an angle $\\theta$ given by (taking $g = 10\\,\\text{m/s}^2$):",
    options: [
      "$\\tan^{-1}(0.5)$",
      "$\\tan^{-1}(1.0)$",
      "$\\tan^{-1}(0.25)$",
      "$\\tan^{-1}(2.0)$"
    ],
    correctAnswer: 0,
    explanation: "The angle with the vertical is given by $\\tan\\theta = \\frac{v^2}{R g} = \\frac{10^2}{20 \\times 10} = \\frac{100}{200} = 0.5$. Thus $\\theta = \\tan^{-1}(0.5)$."
  },
  {
    question: "A circular track of radius $R = 200\\,\\text{m}$ is banked for a design speed of $v = 20\\,\\text{m/s}$. Taking $g = 10\\,\\text{m/s}^2$, the angle of banking $\\theta$ is:",
    options: [
      "$\\tan^{-1}(0.2)$",
      "$\\tan^{-1}(0.1)$",
      "$\\tan^{-1}(0.4)$",
      "$\\tan^{-1}(0.5)$"
    ],
    correctAnswer: 0,
    explanation: "Banking angle formula: $\\tan\\theta = \\frac{v^2}{R g} = \\frac{20^2}{200 \\times 10} = \\frac{400}{2000} = 0.2$. Therefore $\\theta = \\tan^{-1}(0.2)$."
  },
  {
    question: "A conical pendulum has a string of length $L = 1.0\\,\\text{m}$ and makes an angle $\\theta = 60^\\circ$ with the vertical. Taking $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$, its time period of revolution is:",
    options: [
      "$\\sqrt{2}\\pi / \\sqrt{10}\\,\\text{s} \\approx 1.40\\,\\text{s}$",
      "$2.0\\,\\text{s}$",
      "$3.14\\,\\text{s}$",
      "$0.98\\,\\text{s}$"
    ],
    correctAnswer: 0,
    explanation: "Time period $T = 2\\pi \\sqrt{\\frac{L\\cos\\theta}{g}} = 2\\pi \\sqrt{\\frac{1.0 \\times \\cos 60^\\circ}{10}} = 2\\pi \\sqrt{\\frac{0.5}{10}} = 2\\pi \\sqrt{\\frac{1}{20}} = \\frac{2\\pi}{2\\sqrt{5}} = \\frac{\\pi}{\\sqrt{5}} \\approx \\frac{3.1416}{2.236} \\approx 1.40\\,\\text{s}$."
  },
  {
    question: "A railway track has a gauge of $1.0\\,\\text{m}$ and is laid on a curve of radius $R = 500\\,\\text{m}$. If the designed speed of trains is $72\\,\\text{km/h}$ ($20\\,\\text{m/s}$), taking $g = 10\\,\\text{m/s}^2$, the outer rail must be raised above the inner rail by an elevation of:",
    options: [
      "$0.08\\,\\text{m}$",
      "$0.04\\,\\text{m}$",
      "$0.16\\,\\text{m}$",
      "$0.20\\,\\text{m}$"
    ],
    correctAnswer: 0,
    explanation: "Super-elevation $h = \\frac{v^2 d}{R g} = \\frac{20^2 \\times 1.0}{500 \\times 10} = \\frac{400}{5000} = 0.08\\,\\text{m} = 8.0\\,\\text{cm}$."
  },
  {
    question: "A motorcyclist in a vertical cylindrical 'Wall of Death' of radius $R = 4.0\\,\\text{m}$ rides along the horizontal circle. If the coefficient of friction between the wall and the tires is $\\mu_s = 0.4$ and $g = 10\\,\\text{m/s}^2$, the minimum speed to avoid slipping downward is:",
    options: [
      "$10\\,\\text{m/s}$",
      "$5\\,\\text{m/s}$",
      "$15\\,\\text{m/s}$",
      "$20\\,\\text{m/s}$"
    ],
    correctAnswer: 0,
    explanation: "In the rotor: $\\mu_s N \\ge mg \\implies \\mu_s \\frac{m v^2}{R} \\ge mg \\implies v_{\\text{min}} = \\sqrt{\\frac{R g}{\\mu_s}} = \\sqrt{\\frac{4.0 \\times 10}{0.4}} = \\sqrt{\\frac{40}{0.4}} = \\sqrt{100} = 10\\,\\text{m/s}$."
  }
];

const numQuestions = [
  {
    question: "A car rounds an unbanked circular turn of radius $R = 90\\,\\text{m}$. If the coefficient of static friction between the road and tires is $\\mu_s = 0.4$ and $g = 10\\,\\text{m/s}^2$, the maximum safe speed without skidding is (in $\\text{m/s}$, to the nearest integer):",
    correctAnswer: 19,
    explanation: "$v_{\\text{max}} = \\sqrt{\\mu_s g R} = \\sqrt{0.4 \\times 10 \\times 90} = \\sqrt{360} \\approx 18.97\\,\\text{m/s} \\approx 19\\,\\text{m/s}$."
  },
  {
    question: "A road curve of radius $R = 40\\,\\text{m}$ is banked at an angle $\\theta$ such that $\\tan\\theta = 0.25$. Taking $g = 10\\,\\text{m/s}^2$, the optimum speed for which no friction is required is (in $\\text{m/s}$):",
    correctAnswer: 10,
    explanation: "$v_0 = \\sqrt{R g \\tan\\theta} = \\sqrt{40 \\times 10 \\times 0.25} = \\sqrt{100} = 10\\,\\text{m/s}$."
  },
  {
    question: "A cyclist is taking a turn of radius $R = 80\\,\\text{m}$ at a speed of $20\\,\\text{m/s}$. Taking $g = 10\\,\\text{m/s}^2$, the value of $\\tan\\theta$ (where $\\theta$ is the angle of inclination with the vertical) expressed as a percentage is (i.e. $\\tan\\theta \\times 100$):",
    correctAnswer: 50,
    explanation: "$\\tan\\theta = \\frac{v^2}{R g} = \\frac{20^2}{80 \\times 10} = \\frac{400}{800} = 0.5$. In percentage, $0.5 \\times 100 = 50$."
  },
  {
    question: "A coin placed on a horizontal rotating disc at a distance of $0.25\\,\\text{m}$ from the axis of rotation just begins to slip when the angular speed is $\\omega = 4\\,\\text{rad/s}$. Taking $g = 10\\,\\text{m/s}^2$, the coefficient of static friction $\\mu_s$ multiplied by $100$ is:",
    correctAnswer: 40,
    explanation: "At the threshold of slipping: $\\mu_s g = \\omega^2 r \\implies \\mu_s = \\frac{\\omega^2 r}{g} = \\frac{4^2 \\times 0.25}{10} = \\frac{16 \\times 0.25}{10} = \\frac{4}{10} = 0.4$. Multiplying by 100 gives 40."
  },
  {
    question: "A conical pendulum with a bob of mass $0.5\\,\\text{kg}$ revolves in a horizontal circle such that the string makes an angle of $60^\\circ$ with the vertical. Taking $g = 10\\,\\text{m/s}^2$, the tension in the string is (in $\\text{N}$):",
    correctAnswer: 10,
    explanation: "Vertical equilibrium gives $T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos 60^\\circ} = \\frac{0.5 \\times 10}{0.5} = 10\\,\\text{N}$."
  },
  {
    question: "A vehicle of mass $1000\\,\\text{kg}$ travels at a speed of $15\\,\\text{m/s}$ around an unbanked circular curve of radius $75\\,\\text{m}$. The centripetal force required is (in $\\text{N}$):",
    correctAnswer: 3000,
    explanation: "$F_c = \\frac{m v^2}{R} = \\frac{1000 \\times 15^2}{75} = \\frac{1000 \\times 225}{75} = 1000 \\times 3 = 3000\\,\\text{N}$."
  },
  {
    question: "A circular highway curve of radius $R = 250\\,\\text{m}$ is banked at an angle $\\theta = 45^\\circ$. If $g = 10\\,\\text{m/s}^2$, the optimal speed for zero friction is (in $\\text{m/s}$):",
    correctAnswer: 50,
    explanation: "$v = \\sqrt{R g \\tan 45^\\circ} = \\sqrt{250 \\times 10 \\times 1} = \\sqrt{2500} = 50\\,\\text{m/s}$."
  },
  {
    question: "A stuntman drives a motorcycle inside a vertical cylinder of radius $R = 9\\,\\text{m}$ (Wall of Death). The coefficient of friction between tires and wall is $\\mu_s = 0.25$. Taking $g = 10\\,\\text{m/s}^2$, the minimum speed required to avoid falling is (in $\\text{m/s}$):",
    correctAnswer: 19,
    explanation: "$v_{\\text{min}} = \\sqrt{\\frac{R g}{\\mu_s}} = \\sqrt{\\frac{9 \\times 10}{0.25}} = \\sqrt{\\frac{90}{0.25}} = \\sqrt{360} \\approx 18.97\\,\\text{m/s} \\approx 19\\,\\text{m/s}$."
  },
  {
    question: "A four-wheeler with wheel track width $2a = 1.6\\,\\text{m}$ and center of mass height $h = 0.8\\,\\text{m}$ rounds an unbanked curve of radius $R = 20\\,\\text{m}$. Taking $g = 10\\,\\text{m/s}^2$, the maximum speed before it begins to topple is (in $\\text{m/s}$):",
    correctAnswer: 14,
    explanation: "Here $a = 0.8\\,\\text{m}$ and $h = 0.8\\,\\text{m}$. The toppling speed condition is $v = \\sqrt{\\frac{g R a}{h}} = \\sqrt{\\frac{10 \\times 20 \\times 0.8}{0.8}} = \\sqrt{200} \\approx 14.14\\,\\text{m/s} \\approx 14\\,\\text{m/s}$."
  },
  {
    question: "A railway track of gauge $1.5\\,\\text{m}$ is laid along a circular bend of radius $R = 600\\,\\text{m}$. For a design speed of $30\\,\\text{m/s}$ and $g = 10\\,\\text{m/s}^2$, the height by which the outer rail should be elevated is (in $\\text{cm}$):",
    correctAnswer: 23,
    explanation: "$h = \\frac{v^2 d}{R g} = \\frac{30^2 \\times 1.5}{600 \\times 10} = \\frac{900 \\times 1.5}{6000} = \\frac{1350}{6000} = 0.225\\,\\text{m} = 22.5\\,\\text{cm} \\approx 23\\,\\text{cm}$."
  },
  {
    question: "A small body of mass $m$ is suspended by a light string of length $L = 2.5\\,\\text{m}$ and is made to revolve in a horizontal circle as a conical pendulum. If the string makes an angle of $37^\\circ$ with the vertical ($\\cos 37^\\circ = 0.8$), taking $g = 10\\,\\text{m/s}^2$ and $\\pi = 3.14$, its period of revolution is (in $\\text{seconds}$, rounded to nearest integer):",
    correctAnswer: 3,
    explanation: "$T_p = 2\\pi \\sqrt{\\frac{L\\cos 37^\\circ}{g}} = 2\\pi \\sqrt{\\frac{2.5 \\times 0.8}{10}} = 2\\pi \\sqrt{\\frac{2.0}{10}} = 2\\pi \\sqrt{0.2} = 2 \\times 3.1416 \\times 0.4472 = 2.81\\,\\text{s} \\approx 3\\,\\text{s}$."
  },
  {
    question: "A car is moving at $10\\,\\text{m/s}$ on a banked road of radius $R = 20\\,\\text{m}$. The angle of banking is $\\theta = 45^\\circ$. The coefficient of static friction is $\\mu_s = 0.2$. Taking $g = 10\\,\\text{m/s}^2$, since the optimum speed is $v_0 = \\sqrt{20 \\times 10 \\times 1} = 14.14\\,\\text{m/s} > 10\\,\\text{m/s}$, friction acts up the plane. If the mass is $1000\\,\\text{kg}$, the normal force on the car is (in $\\text{N}$, to nearest integer):",
    correctAnswer: 7778,
    explanation: "Let's make this a direct calculation: A car of mass $m = 800\\,\\text{kg}$ travels at the optimum speed $v_0 = \\sqrt{R g \\tan\\theta}$ on a road banked at $\\theta = 30^\\circ$. Taking $g = 10\\,\\text{m/s}^2$, the normal reaction force $N = \\frac{mg}{\\cos 30^\\circ} = \\frac{8000}{\\sqrt{3}/2} = \\frac{16000}{1.732} \\approx 9238\\,\\text{N}$. Better: road banked at $\\theta = 60^\\circ$, then $N = \\frac{mg}{\\cos 60^\\circ} = 2 mg = 2 \\times 800 \\times 10 = 16000\\,\\text{N}$."
  },
  {
    question: "A vehicle rounds an unbanked circular curve of radius $R = 45\\,\\text{m}$ at a speed of $15\\,\\text{m/s}$. Taking $g = 10\\,\\text{m/s}^2$, the minimum coefficient of static friction $\\mu_s$ required to prevent skidding is (multiplied by $100$):",
    correctAnswer: 50,
    explanation: "$\\mu_s \\ge \\frac{v^2}{R g} = \\frac{15^2}{45 \\times 10} = \\frac{225}{450} = 0.5$. Multiplying by 100 gives 50."
  },
  {
    question: "A turn on a highway has a radius of curvature $R = 120\\,\\text{m}$ and is banked at an angle $\\theta = 37^\\circ$ ($\\tan 37^\\circ = 0.75$). Taking $g = 10\\,\\text{m/s}^2$, the rated design speed for zero lateral tire wear is (in $\\text{m/s}$):",
    correctAnswer: 30,
    explanation: "$v = \\sqrt{R g \\tan 37^\\circ} = \\sqrt{120 \\times 10 \\times 0.75} = \\sqrt{900} = 30\\,\\text{m/s}$."
  },
  {
    question: "A bob of mass $0.2\\,\\text{kg}$ attached to a string of length $0.5\\,\\text{m}$ rotates in a horizontal circle as a conical pendulum. If the string makes an angle of $45^\\circ$ with the vertical, taking $g = 10\\,\\text{m/s}^2$ and $\\sqrt{2} = 1.414$, the centripetal force acting on the bob is (in $\\text{N}$):",
    correctAnswer: 2,
    explanation: "Centripetal force $F_c = mg \\tan\\theta = 0.2 \\times 10 \\times \\tan 45^\\circ = 2.0 \\times 1 = 2\\,\\text{N}$."
  },
  {
    question: "A plumb line hangs from the roof of a train that is moving with a constant speed of $20\\,\\text{m/s}$ along a horizontal circular track of radius $40\\,\\text{m}$. Taking $g = 10\\,\\text{m/s}^2$, the angle of deflection $\\theta$ of the plumb line with the vertical satisfies $\\tan\\theta =$:",
    correctAnswer: 1,
    explanation: "$\\tan\\theta = \\frac{v^2}{R g} = \\frac{20^2}{40 \\times 10} = \\frac{400}{400} = 1$."
  },
  {
    question: "A curve of radius $R = 160\\,\\text{m}$ is banked for a speed of $v = 20\\,\\text{m/s}$. Taking $g = 10\\,\\text{m/s}^2$, the value of the banking angle tangent $\\tan\\theta$ multiplied by $100$ is:",
    correctAnswer: 25,
    explanation: "$\\tan\\theta = \\frac{v^2}{R g} = \\frac{20^2}{160 \\times 10} = \\frac{400}{1600} = 0.25$. Multiplying by 100 gives 25."
  },
  {
    question: "A block placed on an inclined turntable at a distance of $0.5\\,\\text{m}$ from the axis rotates with an angular speed $\\omega = 6\\,\\text{rad/s}$. The centripetal acceleration experienced by the block is (in $\\text{m/s}^2$):",
    correctAnswer: 18,
    explanation: "$a_c = \\omega^2 r = 6^2 \\times 0.5 = 36 \\times 0.5 = 18\\,\\text{m/s}^2$."
  },
  {
    question: "An airplane makes a horizontal turn of radius $R = 1000\\,\\text{m}$ at a speed of $100\\,\\text{m/s}$. Taking $g = 10\\,\\text{m/s}^2$, the tangent of its banking angle $\\tan\\theta$ is:",
    correctAnswer: 1,
    explanation: "For an airplane turning without slip: $\\tan\\theta = \\frac{v^2}{R g} = \\frac{100^2}{1000 \\times 10} = \\frac{10000}{10000} = 1$."
  },
  {
    question: "A car is negotiating an unbanked circular curve of radius $R = 64\\,\\text{m}$. If the coefficient of static friction is $\\mu_s = 0.25$ and $g = 10\\,\\text{m/s}^2$, the maximum permissible speed to avoid skidding is (in $\\text{m/s}$):",
    correctAnswer: 13,
    explanation: "$v_{\\text{max}} = \\sqrt{\\mu_s g R} = \\sqrt{0.25 \\times 10 \\times 64} = \\sqrt{160} \\approx 12.65\\,\\text{m/s} \\approx 13\\,\\text{m/s}$."
  }
];

// Clean numQuestions[11] to have clean exact numbers:
numQuestions[11] = {
  question: "A car of mass $m = 800\\,\\text{kg}$ travels at the optimum speed on a road banked at an angle $\\theta = 60^\\circ$ where no lateral friction is needed. Taking $g = 10\\,\\text{m/s}^2$, the normal reaction force exerted by the road on the car is (in $\\text{N}$):",
  correctAnswer: 16000,
  explanation: "At the optimum banking speed, vertical equilibrium gives $N\\cos\\theta = mg \\implies N = \\frac{mg}{\\cos 60^\\circ} = \\frac{800 \\times 10}{0.5} = 16000\\,\\text{N}$."
};

const allQuestions = [];

arQuestions.forEach(q => {
  allQuestions.push({
    question: `Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: ${q.assertion}\nReason R: ${q.reason}\nIn the light of the above statements, choose the correct answer from the options given below:`,
    options: AR_OPTIONS,
    correctAnswer: q.correctAnswer,
    type: "ASSERTION_REASON",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

mcqQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    type: "MCQ",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 1
  });
});

numQuestions.forEach(q => {
  allQuestions.push({
    question: q.question,
    options: [],
    correctAnswer: q.correctAnswer,
    type: "NUMERICAL",
    explanation: q.explanation,
    subject: subject,
    chapter: chapter,
    subTopic: subTopic,
    difficulty: "Medium",
    marks: 4,
    negativeMarks: 0
  });
});

console.log(`Banking of roads generated: ${allQuestions.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);

const outPath = './scripts/data_jee_lom_banking_of_roads.js';
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
