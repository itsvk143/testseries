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

const subTopic = "Power and variable force";
const chapter = "Work, Energy, and Power";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Power and variable force
const arData = [
  {
    a: "The instantaneous power delivered by a force $\\vec{F}$ to a particle moving with velocity $\\vec{v}$ is given by the scalar product $P = \\vec{F} \\cdot \\vec{v}$.",
    r: "Power is defined as the time rate of doing work: $P = \\frac{dW}{dt} = \\frac{\\vec{F} \\cdot d\\vec{r}}{dt} = \\vec{F} \\cdot \\vec{v}$.",
    ans: 0,
    exp: "By definition, work is $dW = \\vec{F} \\cdot d\\vec{r}$. Dividing by $dt$ gives instantaneous power $P = \\frac{dW}{dt} = \\vec{F} \\cdot \\frac{d\\vec{r}}{dt} = \\vec{F} \\cdot \\vec{v}$. (R) correctly explains (A)."
  },
  {
    a: "A body moving under the action of a constant power engine accelerates with velocity proportional to $\\sqrt{t}$.",
    r: "From $P = F v = m v \\frac{dv}{dt}$, integration gives $v^2 = \\frac{2Pt}{m} \\implies v \\propto t^{1/2}$.",
    ans: 0,
    exp: "Separating variables: $v dv = \\frac{P}{m} dt \\implies \\frac{v^2}{2} = \\frac{Pt}{m} \\implies v = \\sqrt{\\frac{2Pt}{m}} \\propto t^{1/2}$. (R) correctly explains (A)."
  },
  {
    a: "For a particle moving in a straight line under a constant power engine, displacement varies with time as $x \\propto t^{3/2}$.",
    r: "Since velocity is $v = \\frac{dx}{dt} \\propto t^{1/2}$, integrating with respect to time yields $x \\propto t^{3/2}$.",
    ans: 0,
    exp: "Integrating $dx = c t^{1/2} dt$ gives $x = \\frac{2}{3}c t^{3/2} \\propto t^{3/2}$. (R) correctly explains (A)."
  },
  {
    a: "For a vehicle propelled by a constant engine power, the accelerating force decreases with time as $F \\propto t^{-1/2}$.",
    r: "Since $P = F v = \\text{constant}$ and $v \\propto t^{1/2}$, the force must be $F = \\frac{P}{v} \\propto t^{-1/2}$.",
    ans: 0,
    exp: "Because power $P$ is constant, as speed increases with time, the required tractive force must diminish inversely: $F = \\frac{P}{v} \\propto \\frac{1}{t^{1/2}} = t^{-1/2}$. (R) correctly explains (A)."
  },
  {
    a: "The area under a Force versus Displacement ($F-x$) graph represents the work done by the force.",
    r: "The work done by a one-dimensional variable force is defined by the definite integral $W = \\int_{x_1}^{x_2} F(x) dx$.",
    ans: 0,
    exp: "The definite integral $\\int F dx$ geometrically corresponds to the area under the curve in a plot of $F$ against $x$. (R) correctly explains (A)."
  },
  {
    a: "The kilowatt-hour ($\\text{kWh}$) is a commercial unit of energy, not of power.",
    r: "A kilowatt-hour is the product of power (in kilowatts) and time (in hours): $1\\text{ kWh} = (1000\\text{ W}) \\times (3600\\text{ s}) = 3.6 \\times 10^6\\text{ J}$.",
    ans: 0,
    exp: "Since energy = power $\\times$ time, $\\text{kW} \\times \\text{h}$ is a unit of energy, equivalent to $3.6\\text{ MJ}$. (R) correctly explains (A)."
  },
  {
    a: "The slope of a Work versus Time ($W-t$) curve represents instantaneous power.",
    r: "Instantaneous power is defined as the time derivative of work done: $P = \\frac{dW}{dt}$.",
    ans: 0,
    exp: "By differential calculus, $\\frac{dW}{dt}$ is the slope of the tangent to the $W-t$ graph, which represents instantaneous power. (R) correctly explains (A)."
  },
  {
    a: "If a pump delivers water through a nozzle of area $A$ with velocity $v$, the rate of work done by the pump to impart kinetic energy to the water is proportional to $v^3$.",
    r: "The mass flow rate of water is $\\frac{dm}{dt} = \\rho A v$, and kinetic energy imparted per unit time is $P = \\frac{1}{2}\\left(\\frac{dm}{dt}\\right)v^2 = \\frac{1}{2}\\rho A v^3$.",
    ans: 0,
    exp: "Rate of kinetic energy imparted is $\\frac{dK}{dt} = \\frac{1}{2}\\left(\\frac{dm}{dt}\\right)v^2 = \\frac{1}{2}(\\rho A v)v^2 = \\frac{1}{2}\\rho A v^3 \\propto v^3$. (R) correctly explains (A)."
  },
  {
    a: "When a force acting on a particle is always perpendicular to its velocity, the power delivered by that force is identically zero.",
    r: "The scalar product of two mutually orthogonal vectors is zero: $\\vec{F} \\cdot \\vec{v} = F v \\cos 90^\\circ = 0$.",
    ans: 0,
    exp: "Because $\\vec{F} \\perp \\vec{v}$, $P = \\vec{F} \\cdot \\vec{v} = 0$, meaning the force does zero work and cannot change the particle's kinetic energy. (R) correctly explains (A)."
  },
  {
    a: "The magnetic force on a moving charged particle delivers zero power at all times.",
    r: "The Lorentz magnetic force $\\vec{F}_m = q(\\vec{v} \\times \\vec{B})$ is perpendicular to the instantaneous velocity $\\vec{v}$.",
    ans: 0,
    exp: "Since $(\\vec{v} \\times \\vec{B}) \\perp \\vec{v}$, we have $P = \\vec{F}_m \\cdot \\vec{v} = q(\\vec{v} \\times \\vec{B}) \\cdot \\vec{v} = 0$. (R) correctly explains (A)."
  },
  {
    a: "To lift water from a well of depth $h$ and discharge it with speed $v$, the total power required is $\\frac{mgh}{t} + \\frac{1}{2}\\frac{mv^2}{t}$.",
    r: "The pump must do work against gravity to raise the potential energy of water and do work to impart kinetic energy to the ejected water.",
    ans: 0,
    exp: "Total energy given to mass $m$ of water in time $t$ is $E = mgh + \\frac{1}{2}mv^2$. The power is $P = \\frac{E}{t} = \\frac{mgh}{t} + \\frac{1}{2}\\frac{mv^2}{t}$. (R) correctly explains (A)."
  },
  {
    a: "A car accelerating uniformly from rest on a level road requires engine power that increases linearly with time.",
    r: "Under uniform acceleration, $v = at$ and the tractive force is constant ($F = ma$), giving $P = F v = m a^2 t \\propto t$.",
    ans: 0,
    exp: "With constant acceleration $a$, velocity is $v = at$. Thus $P = F v = (ma)(at) = m a^2 t \\propto t$. (R) correctly explains (A)."
  },
  {
    a: "When sand is dropped vertically onto a horizontal conveyor belt moving at constant speed $v$ at a rate of $\\frac{dm}{dt}$, the power delivered by the motor to maintain constant belt speed is $\\left(\\frac{dm}{dt}\\right)v^2$.",
    r: "The force needed to accelerate the sand to belt speed is $F = \\left(\\frac{dm}{dt}\\right)v$, so power is $P = F v = \\left(\\frac{dm}{dt}\\right)v^2$.",
    ans: 0,
    exp: "The force exerted by the belt on the incoming sand is $F = \\frac{dp}{dt} = v\\frac{dm}{dt}$. The motor power is $P = Fv = \\left(\\frac{dm}{dt}\\right)v^2$. Half of this power ($\\frac{1}{2}\\frac{dm}{dt}v^2$) appears as kinetic energy of sand, and half is dissipated as frictional heat. (R) correctly explains (A)."
  },
  {
    a: "Under the action of a constant power $P$, a particle's speed varies with distance $x$ as $v \\propto x^{1/3}$.",
    r: "Since $P = m v \\frac{dv}{dt} = m v^2 \\frac{dv}{dx}$, integrating gives $\\frac{v^3}{3} = \\frac{P}{m}x \\implies v \\propto x^{1/3}$.",
    ans: 0,
    exp: "Rewriting acceleration as $v\\frac{dv}{dx}$: $P = Fv = m v^2 \\frac{dv}{dx} \\implies v^2 dv = \\frac{P}{m} dx \\implies \\frac{v^3}{3} = \\frac{Px}{m} \\implies v = \\left(\\frac{3Px}{m}\\right)^{1/3} \\propto x^{1/3}$. (R) correctly explains (A)."
  },
  {
    a: "Work done by a force $\\vec{F} = 3x^2\\hat{i}\\text{ N}$ moving a particle from $x = 0$ to $x = 2\\text{ m}$ is $8\\text{ J}$.",
    r: "The integral of $3x^2 dx$ from $0$ to $2$ is $[x^3]_0^2 = 2^3 - 0 = 8\\text{ J}$.",
    ans: 0,
    exp: "$W = \\int_0^2 3x^2 dx = [x^3]_0^2 = 8 - 0 = 8\\text{ J}$. (R) correctly explains (A)."
  },
  {
    a: "If the instantaneous power delivered to a particle is positive at all times, the speed of the particle must be strictly increasing.",
    r: "According to the work-energy theorem, $P = \\frac{dK}{dt} = m v \\frac{dv}{dt}$. If $P > 0$ and $v > 0$, then $\\frac{dv}{dt} > 0$.",
    ans: 0,
    exp: "Since $P = \\frac{dK}{dt}$, a positive power continuously increases kinetic energy $K = \\frac{1}{2}mv^2$, which strictly increases the speed $v$. (R) correctly explains (A)."
  },
  {
    a: "The average power of an engine can be less than its maximum instantaneous power.",
    r: "Average power is defined over a finite time interval as $P_{\\text{avg}} = \\frac{W_{\\text{total}}}{\\Delta t}$, whereas instantaneous power varies from point to point.",
    ans: 0,
    exp: "If power varies during the cycle, the peak value can substantially exceed the time-averaged value. (R) correctly explains (A)."
  },
  {
    a: "A body of mass $m$ accelerates from rest to speed $v$ in time $t$. If acceleration is uniform, the average power delivered during this time is $\\frac{1}{4}m\\frac{v^2}{t}$.",
    r: "Under uniform acceleration, average speed is $\\frac{v}{2}$ and force is $\\frac{mv}{t}$.",
    ans: 3,
    exp: "Average power is $P_{\\text{avg}} = \\frac{\\Delta K}{\\Delta t} = \\frac{\\frac{1}{2}mv^2}{t} = \\frac{1}{2}m\\frac{v^2}{t}$. The assertion claims $\\frac{1}{4}$, which is false. (D)."
  },
  {
    a: "A variable force $\\vec{F} = (2x\\hat{i} + 3y^2\\hat{j})\\text{ N}$ is a conservative force.",
    r: "The curl $\\vec{\\nabla} \\times \\vec{F}$ is zero because $\\frac{\\partial F_y}{\\partial x} = 0$ and $\\frac{\\partial F_x}{\\partial y} = 0$.",
    ans: 0,
    exp: "Since $\\frac{\\partial F_x}{\\partial y} = 0 = \\frac{\\partial F_y}{\\partial x}$, the force is the negative gradient of a scalar potential $U(x, y) = -(x^2 + y^3)$, meaning $\\vec{F}$ is conservative. (R) correctly explains (A)."
  },
  {
    a: "An engine delivering constant power cannot accelerate an object indefinitely to arbitrary speeds in the presence of air resistance.",
    r: "Aerodynamic drag force increases with speed ($F_{\\text{drag}} \\propto v^2$), causing the net force to drop to zero at terminal velocity where $P = F_{\\text{drag}} v$.",
    ans: 0,
    exp: "Terminal velocity occurs when the power delivered by the engine equals the rate of energy dissipation by drag ($P = c v^3$), capping the top speed. (R) correctly explains (A)."
  },
  {
    a: "Work done by a force depends on the frame of reference.",
    r: "The displacement of a body is a frame-dependent vector quantity ($d\\vec{r}' = d\\vec{r} - \\vec{v}_{\\text{frame}} dt$).",
    ans: 0,
    exp: "Because displacement differs between frames of reference, $W = \\int \\vec{F} \\cdot d\\vec{r}$ also takes different numerical values in different reference frames. (R) correctly explains (A)."
  },
  {
    a: "Power delivered by friction on a block sliding on a rough horizontal surface is always negative in the ground frame.",
    r: "Frictional force opposes the relative motion of sliding surfaces, so $\\vec{f}_k \\cdot \\vec{v} < 0$.",
    ans: 0,
    exp: "In the ground frame, kinetic friction acts in the direction opposite to the block's velocity: $\\vec{f}_k \\cdot \\vec{v} = -f_k v < 0$. (R) correctly explains (A)."
  },
  {
    a: "A machine with an efficiency of $80\\%$ uses $1000\\text{ J}$ of electrical energy to deliver $800\\text{ J}$ of useful mechanical work.",
    r: "Efficiency is defined as the ratio of useful work output to total energy input: $\\eta = \\frac{W_{\\text{out}}}{E_{\\text{in}}} \\times 100\\%$.",
    ans: 0,
    exp: "By definition, $W_{\\text{out}} = \\eta E_{\\text{in}} = 0.80 \\times 1000\\text{ J} = 800\\text{ J}$. The remaining $200\\text{ J}$ is lost to heat. (R) correctly explains (A)."
  },
  {
    a: "The power delivered to a simple pendulum at its extreme position is zero.",
    r: "At the extreme position, the instantaneous velocity of the pendulum bob is zero ($v = 0$).",
    ans: 0,
    exp: "Since $P = \\vec{F} \\cdot \\vec{v}$ and $\\vec{v} = 0$ at the turning points, the power delivered at the extreme position is zero. (R) correctly explains (A)."
  },
  {
    a: "The power delivered by gravity to a projectile is zero at the highest point of its parabolic trajectory.",
    r: "At the highest point, the projectile's velocity is purely horizontal, which is perpendicular to the vertically downward force of gravity.",
    ans: 0,
    exp: "At the apex, $\\vec{v} = u\\cos\\theta \\hat{i}$ and $\\vec{F}_g = -mg\\hat{j}$. Thus $P = \\vec{F}_g \\cdot \\vec{v} = 0$. (R) correctly explains (A)."
  },
  {
    a: "A constant force always delivers constant power to a moving particle.",
    r: "Power is the product of force and velocity ($P = \\vec{F} \\cdot \\vec{v}$), and a constant non-zero net force causes velocity to change continuously.",
    ans: 3,
    exp: "Since a constant force causes acceleration ($v = u + at$), power $P = F(u + at)$ changes linearly with time, and is not constant. Assertion is false, Reason is true. (D)."
  }
];

// 7 MCQ questions for Power and variable force
const mcqData = [
  {
    q: "A force $F = (2 + 3x)\\text{ N}$ acts on a particle of mass $2\\text{ kg}$ along the x-axis. The work done by this force in displacing the particle from $x = 0$ to $x = 4\\text{ m}$ is:",
    opts: [
      "$16\\text{ J}$",
      "$24\\text{ J}$",
      "$32\\text{ J}$",
      "$40\\text{ J}$"
    ],
    ans: 2,
    exp: "$W = \\int_0^4 (2 + 3x) dx = \\left[2x + \\frac{3x^2}{2}\\right]_0^4 = 2(4) + \\frac{3(16)}{2} = 8 + 24 = 32\\text{ J}$."
  },
  {
    q: "A particle of mass $m$ starts from rest and moves under the action of a constant power $P$. The velocity of the particle as a function of time $t$ is:",
    opts: [
      "$\\sqrt{\\frac{Pt}{m}}$",
      "$\\sqrt{\\frac{2Pt}{m}}$",
      "$\\frac{2Pt}{m}$",
      "$\\left(\\frac{Pt}{m}\\right)^2$"
    ],
    ans: 1,
    exp: "Work-energy theorem gives $K(t) - K(0) = W = Pt \\implies \\frac{1}{2}mv^2 = Pt \\implies v = \\sqrt{\\frac{2Pt}{m}}$."
  },
  {
    q: "An electric motor delivers $2\\text{ kW}$ of power to pump water from a well $10\\text{ m}$ deep. If the efficiency of the motor is $80\\%$ and $g = 10\\text{ m/s}^2$, the mass of water lifted per minute is:",
    opts: [
      "$480\\text{ kg}$",
      "$720\\text{ kg}$",
      "$960\\text{ kg}$",
      "$1200\\text{ kg}$"
    ],
    ans: 2,
    exp: "Useful power is $P_{\\text{useful}} = 0.80 \\times 2000\\text{ W} = 1600\\text{ W}$. Work done in one minute ($t = 60\\text{ s}$) is $W = 1600 \\times 60 = 96000\\text{ J}$. Since $W = mgh$, we have $m(10)(10) = 96000 \\implies 100m = 96000 \\implies m = 960\\text{ kg}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ moves along the x-axis under a variable force $F(x) = (6x^2 - 4x)\\text{ N}$. The change in kinetic energy of the particle as it moves from $x = 1\\text{ m}$ to $x = 3\\text{ m}$ is:",
    opts: [
      "$28\\text{ J}$",
      "$36\\text{ J}$",
      "$44\\text{ J}$",
      "$52\\text{ J}$"
    ],
    ans: 1,
    exp: "By work-energy theorem, $\\Delta K = W = \\int_1^3 (6x^2 - 4x) dx = \\left[2x^3 - 2x^2\\right]_1^3 = (2(27) - 2(9)) - (2(1) - 2(1)) = (54 - 18) - 0 = 36\\text{ J}$."
  },
  {
    q: "A body of mass $2\\text{ kg}$ starts from rest and moves with constant acceleration $a = 3\\text{ m/s}^2$. The instantaneous power delivered to the body at $t = 4\\text{ s}$ is:",
    opts: [
      "$36\\text{ W}$",
      "$72\\text{ W}$",
      "$108\\text{ W}$",
      "$144\\text{ W}$"
    ],
    ans: 1, // F = m*a = 2 * 3 = 6 N. v(4) = a*t = 3 * 4 = 12 m/s. P = F * v = 6 * 12 = 72 W!
    exp: "Force is $F = ma = 2 \\times 3 = 6\\text{ N}$. Velocity at $t = 4\\text{ s}$ is $v = at = 3 \\times 4 = 12\\text{ m/s}$. Instantaneous power is $P = F v = 6 \\times 12 = 72\\text{ W}$."
  },
  {
    q: "A car of mass $m$ accelerates on a level road from rest under constant engine power $P$. The displacement $x$ traveled by the car in acquiring speed $v$ is proportional to:",
    opts: [
      "$v$",
      "$v^2$",
      "$v^3$",
      "$v^4$"
    ],
    ans: 2,
    exp: "We have $P = F v = m v^2 \\frac{dv}{dx} \\implies dx = \\frac{m}{P} v^2 dv$. Integrating gives $x = \\frac{m}{3P} v^3 \\propto v^3$."
  },
  {
    q: "A force $\\vec{F} = (2t\\hat{i} + 3t^2\\hat{j})\\text{ N}$ acts on a particle of mass $1\\text{ kg}$ initially at rest. The power delivered by the force at $t = 1\\text{ s}$ is:",
    opts: [
      "$2\\text{ W}$",
      "$3\\text{ W}$",
      "$5\\text{ W}$",
      "$6\\text{ W}$"
    ],
    ans: 2,
    exp: "Acceleration is $\\vec{a} = \\frac{\\vec{F}}{m} = 2t\\hat{i} + 3t^2\\hat{j}$. Integrating gives $\\vec{v}(t) = t^2\\hat{i} + t^3\\hat{j}$. At $t = 1\\text{ s}$: $\\vec{F} = 2\\hat{i} + 3\\hat{j}\\text{ N}$ and $\\vec{v} = 1\\hat{i} + 1\\hat{j}\\text{ m/s}$. Power is $P = \\vec{F} \\cdot \\vec{v} = (2)(1) + (3)(1) = 2 + 3 = 5\\text{ W}$."
  }
];

// 20 Numerical questions for Power and variable force
const numData = [
  {
    q: "A force $F = 4x^3\\text{ N}$ acts on a particle. The work done by this force in moving the particle from $x = 0$ to $x = 2\\text{ m}$ in Joules is:",
    ans: 16,
    exp: "$W = \\int_0^2 4x^3 dx = [x^4]_0^2 = 2^4 - 0 = 16\\text{ J}$."
  },
  {
    q: "An engine pumps $300\\text{ kg}$ of water per minute to a height of $20\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, the power delivered by the engine in Watts is:",
    ans: 1000,
    exp: "Time is $t = 60\\text{ s}$. Work done is $W = mgh = 300 \\times 10 \\times 20 = 60000\\text{ J}$. Power is $P = \\frac{W}{t} = \\frac{60000}{60} = 1000\\text{ W}$."
  },
  {
    q: "A constant force of $20\\text{ N}$ moves a body with a uniform velocity of $5\\text{ m/s}$. The power delivered in Watts is:",
    ans: 100,
    exp: "$P = F v = 20 \\times 5 = 100\\text{ W}$."
  },
  {
    q: "A body of mass $2\\text{ kg}$ is acted upon by a force $F = 6t\\text{ N}$ starting from rest. The work done by the force in the first $2\\text{ seconds}$ in Joules is:",
    ans: 36,
    exp: "$a(t) = \\frac{F}{m} = 3t\\text{ m/s}^2 \\implies v(t) = \\frac{3t^2}{2}$. At $t = 2\\text{ s}$, $v(2) = \\frac{3(4)}{2} = 6\\text{ m/s}$. Work done is $\\Delta K = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(6^2) = 36\\text{ J}$."
  },
  {
    q: "A force $\\vec{F} = (3\\hat{i} + 4\\hat{j})\\text{ N}$ acts on a body moving with velocity $\\vec{v} = (6\\hat{i} - 2\\hat{j})\\text{ m/s}$. The instantaneous power delivered in Watts is:",
    ans: 10,
    exp: "$P = \\vec{F} \\cdot \\vec{v} = (3)(6) + (4)(-2) = 18 - 8 = 10\\text{ W}$."
  },
  {
    q: "An elevator of mass $500\\text{ kg}$ is lifted vertically upward at a constant speed of $2\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, the power of the motor in kilo-Watts ($\\text{kW}$) is:",
    ans: 10,
    exp: "Tension is $T = mg = 500 \\times 10 = 5000\\text{ N}$. Power is $P = T v = 5000 \\times 2 = 10000\\text{ W} = 10\\text{ kW}$."
  },
  {
    q: "A particle of mass $1\\text{ kg}$ is subjected to a force $F = (3x + 1)\\text{ N}$. The work done in moving it from $x = 2\\text{ m}$ to $x = 4\\text{ m}$ in Joules is:",
    ans: 20,
    exp: "$W = \\int_2^4 (3x + 1) dx = \\left[\\frac{3x^2}{2} + x\\right]_2^4 = \\left(\\frac{3(16)}{2} + 4\\right) - \\left(\\frac{3(4)}{2} + 2\\right) = (24 + 4) - (6 + 2) = 28 - 8 = 20\\text{ J}$."
  },
  {
    q: "A wind-powered turbine sweeps out an area of $10\\text{ m}^2$. If the wind speed is $10\\text{ m/s}$ and air density is $\\rho = 1.2\\text{ kg/m}^3$, the total power contained in the wind crossing the turbine in kilo-Watts ($\\text{kW}$) is:",
    ans: 6,
    exp: "$P = \\frac{1}{2}\\rho A v^3 = \\frac{1}{2}(1.2)(10)(10^3) = 6 \\times 1000 = 6000\\text{ W} = 6\\text{ kW}$."
  },
  {
    q: "A vehicle of mass $1000\\text{ kg}$ accelerates from rest to $20\\text{ m/s}$ in $10\\text{ seconds}$. The average power delivered by the engine during this period in kilo-Watts ($\\text{kW}$) is:",
    ans: 20,
    exp: "$P_{\\text{avg}} = \\frac{\\Delta K}{\\Delta t} = \\frac{\\frac{1}{2}(1000)(20^2)}{10} = \\frac{500 \\times 400}{10} = 20000\\text{ W} = 20\\text{ kW}$."
  },
  {
    q: "A water pump rated at $4\\text{ kW}$ operates at $75\\%$ efficiency. Taking $g = 10\\text{ m/s}^2$, the volume of water in cubic meters ($1\\text{ m}^3 = 1000\\text{ kg}$) that it can lift through a height of $15\\text{ m}$ in $10\\text{ minutes}$ is:",
    ans: 12,
    exp: "Useful power is $P = 0.75 \\times 4000 = 3000\\text{ W}$. Time is $t = 10 \\times 60 = 600\\text{ s}$. Total energy is $E = 3000 \\times 600 = 1.8 \\times 10^6\\text{ J}$. Since $E = mgh = m(10)(15) = 150m$, we find $m = \\frac{1.8 \\times 10^6}{150} = 12000\\text{ kg}$, which corresponds to $12\\text{ m}^3$."
  },
  {
    q: "A particle of mass $2\\text{ kg}$ has a velocity $v(t) = 3t^2\\text{ m/s}$. The power delivered to the particle at $t = 2\\text{ s}$ in Watts is:",
    ans: 288,
    exp: "Acceleration is $a(t) = \\frac{dv}{dt} = 6t$. At $t = 2\\text{ s}$, $a = 12\\text{ m/s}^2$ and $v = 3(4) = 12\\text{ m/s}$. Force is $F = ma = 2 \\times 12 = 24\\text{ N}$. Instantaneous power is $P = F v = 24 \\times 12 = 288\\text{ W}$."
  },
  {
    q: "A variable force $F = (10 - 2x)\\text{ N}$ acts on an object. The work done by this force in moving the object from $x = 0$ to $x = 5\\text{ m}$ in Joules is:",
    ans: 25,
    exp: "$W = \\int_0^5 (10 - 2x) dx = [10x - x^2]_0^5 = 50 - 25 = 25\\text{ J}$."
  },
  {
    q: "A motor car of mass $500\\text{ kg}$ moves up an incline of $1\\text{ in } 10$ ($\\sin\\theta = 0.1$) at a constant speed of $20\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$ and neglecting friction, the power developed by the engine in kilo-Watts ($\\text{kW}$) is:",
    ans: 10,
    exp: "Tractive force needed to counter gravity component is $F = mg\\sin\\theta = 500 \\times 10 \\times 0.1 = 500\\text{ N}$. Power is $P = F v = 500 \\times 20 = 10000\\text{ W} = 10\\text{ kW}$."
  },
  {
    q: "A body moves from $(0, 0)$ to $(2\\text{ m}, 3\\text{ m})$ under a constant force $\\vec{F} = (5\\hat{i} + 6\\hat{j})\\text{ N}$. The work done by the force in Joules is:",
    ans: 28,
    exp: "Displacement is $\\Delta\\vec{r} = 2\\hat{i} + 3\\hat{j}\\text{ m}$. Work done is $W = \\vec{F} \\cdot \\Delta\\vec{r} = (5)(2) + (6)(3) = 10 + 18 = 28\\text{ J}$."
  },
  {
    q: "A water jet of cross-sectional area $0.01\\text{ m}^2$ strikes a flat wall normally with a speed of $20\\text{ m/s}$ and comes to rest. If the density of water is $1000\\text{ kg/m}^3$, the force exerted on the wall in kilo-Newtons ($\\text{kN}$) is:",
    ans: 4,
    exp: "$F = \\rho A v^2 = 1000 \\times 0.01 \\times 20^2 = 10 \\times 400 = 4000\\text{ N} = 4\\text{ kN}$."
  },
  {
    q: "A particle of mass $0.5\\text{ kg}$ is subjected to a force $F = 6x\\text{ N}$. If it starts from rest at $x = 0$, its velocity at $x = 2\\text{ m}$ in $\\text{m/s}$ is:",
    ans: 4.89, // W = int_0^2 6x dx = 3(4) = 12 J. 0.5 * 0.5 * v^2 = 12 -> 0.25 v^2 = 12 -> v^2 = 48. Not integer.
    // If W = 16 J: int_0^2 8x dx = 4(4) = 16 J. 0.25 v^2 = 16 -> v^2 = 64 -> v = 8 m/s!
    q: "A particle of mass $0.5\\text{ kg}$ is subjected to a force $F = 8x\\text{ N}$. If it starts from rest at $x = 0$, its velocity at $x = 2\\text{ m}$ in $\\text{m/s}$ is:",
    ans: 8,
    exp: "Work done is $W = \\int_0^2 8x dx = [4x^2]_0^2 = 4(4) = 16\\text{ J}$. By work-energy theorem: $\\frac{1}{2}mv^2 = W \\implies \\frac{1}{2}(0.5)v^2 = 16 \\implies 0.25 v^2 = 16 \\implies v^2 = 64 \\implies v = 8\\text{ m/s}$."
  },
  {
    q: "An engine delivers a power of $50\\text{ kW}$ to a train of mass $10^5\\text{ kg}$. If the train accelerates from rest to a speed of $10\\text{ m/s}$, the minimum time required in seconds is:",
    ans: 100,
    exp: "Kinetic energy acquired is $K = \\frac{1}{2}mv^2 = \\frac{1}{2}(10^5)(10^2) = 5 \\times 10^6\\text{ J}$. Minimum time is $t = \\frac{K}{P} = \\frac{5 \\times 10^6}{50000} = 100\\text{ s}$."
  },
  {
    q: "A variable force $F = 20 - 4t$ (in Newtons, where $t$ is in seconds) acts on a particle. The impulse delivered by this force between $t = 0$ and $t = 5\\text{ s}$ in $\\text{N}\\cdot\\text{s}$ is:",
    ans: 50,
    exp: "$J = \\int_0^5 (20 - 4t) dt = [20t - 2t^2]_0^5 = 20(5) - 2(25) = 100 - 50 = 50\\text{ N}\\cdot\\text{s}$."
  },
  {
    q: "A particle is moved from $x = 1\\text{ m}$ to $x = 3\\text{ m}$ by a force $F = \\frac{6}{x^2}\\text{ N}$. The work done in Joules is:",
    ans: 4,
    exp: "$W = \\int_1^3 \\frac{6}{x^2} dx = \\left[-\\frac{6}{x}\\right]_1^3 = -\\frac{6}{3} - \\left(-\\frac{6}{1}\\right) = -2 + 6 = 4\\text{ J}$."
  },
  {
    q: "A force $F(x) = (2x + 3x^2)\\text{ N}$ acts on a particle. The work done in moving it from $x = 1\\text{ m}$ to $x = 2\\text{ m}$ in Joules is:",
    ans: 10,
    exp: "$W = \\int_1^2 (2x + 3x^2) dx = [x^2 + x^3]_1^2 = (4 + 8) - (1 + 1) = 12 - 2 = 10\\text{ J}$."
  }
];

const part5Questions = [];

arData.forEach((item, idx) => {
  const qText = `Assertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  arOptions.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part5Questions.push({
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

  part5Questions.push({
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

  part5Questions.push({
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

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_wep_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part5Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
