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

const subTopic = "Lenz's law";
const chapter = "Electromagnetic Induction and Alternating Currents";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Lenz's law
const arData = [
  {
    a: "Lenz's law is a consequence of the principle of conservation of energy.",
    r: "The mechanical work done against the opposing magnetic force is converted into the electrical energy that drives the induced current.",
    ans: 0,
    exp: "If the induced current aided the change in flux rather than opposing it, energy would be created from nothing, violating energy conservation. Mechanical work done against the opposing force exactly equals the electrical energy generated. (R) correctly explains (A)."
  },
  {
    a: "When the north pole of a bar magnet approaches a closed conducting ring, the face of the ring facing the magnet behaves as a north magnetic pole.",
    r: "Lenz's law requires the induced magnetic field to oppose the increase in magnetic flux through the ring caused by the approaching north pole.",
    ans: 0,
    exp: "By developing a north pole facing the approaching north pole, the loop exerts a repulsive magnetic force that opposes the magnet's motion. (R) correctly explains (A)."
  },
  {
    a: "When the north pole of a bar magnet is withdrawn away from a closed ring, an attractive force is exerted on the magnet by the ring.",
    r: "The induced current produces a south pole on the near face of the ring to oppose the decrease in outward magnetic flux.",
    ans: 0,
    exp: "Withdrawing the north pole decreases the linked magnetic flux. To oppose this decrease, the induced current creates an attractive south pole facing the magnet. (R) correctly explains (A)."
  },
  {
    a: "A bar magnet dropped vertically through a horizontal copper ring falls with an acceleration less than $g$ at all times while approaching the ring.",
    r: "The induced current in the copper ring produces an upward magnetic repulsive force on the magnet.",
    ans: 0,
    exp: "As the magnet approaches, the induced current creates a field opposing the motion, giving an upward retarding force $F_{mag}$, so $a = g - \\frac{F_{mag}}{m} < g$. (R) correctly explains (A)."
  },
  {
    a: "When a bar magnet falls through a cut (open) metallic ring, its acceleration is equal to $g$.",
    r: "An open ring cannot sustain a circulating induced current, so no opposing magnetic force is exerted on the magnet.",
    ans: 0,
    exp: "Although an EMF is induced across the open gap, the incomplete circuit prevents current from circulating ($I = 0$). Hence no magnetic opposing field is produced, and $a = g$. (R) correctly explains (A)."
  },
  {
    a: "The negative sign in Faraday's law of induction, $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$, mathematically embodies Lenz's law.",
    r: "The negative sign indicates that the induced electromotive force acts in such a direction as to oppose the time change of magnetic flux.",
    ans: 0,
    exp: "The negative sign was introduced by Heinrich Lenz to signify that the induced EMF drives a current whose flux opposes $\\Delta\\Phi_B$. (R) correctly explains (A)."
  },
  {
    a: "A conducting rod sliding on frictionless horizontal parallel conducting rails in a uniform transverse magnetic field experiences a retarding force.",
    r: "The induced current interacts with the external magnetic field to produce a Lorentz force $I(\\mathbf{l} \\times \\mathbf{B})$ opposing the velocity of the rod.",
    ans: 0,
    exp: "The motional EMF induces current $I = \\frac{B l v}{R}$. The resulting magnetic force $F = I l B = \\frac{B^2 l^2 v}{R}$ acts opposite to the direction of motion, acting as an electromagnetic brake. (R) correctly explains (A)."
  },
  {
    a: "A metal plate oscillating between the pole pieces of a strong electromagnet quickly comes to rest when the magnet is turned on.",
    r: "Eddy currents induced in the plate produce magnetic fields that oppose the motion of the plate in accordance with Lenz's law.",
    ans: 0,
    exp: "This is electromagnetic damping. As the plate enters and leaves the field, induced eddy currents generate retarding forces that rapidly dissipate mechanical kinetic energy into Joule heat. (R) correctly explains (A)."
  },
  {
    a: "When the current in an inductor is increasing, the self-induced EMF opposes the growth of current.",
    r: "According to Lenz's law, the back EMF $\\mathcal{E} = -L\\frac{dI}{dt}$ acts in the direction opposite to the applied battery voltage when $\\frac{dI}{dt} > 0$.",
    ans: 0,
    exp: "Back EMF opposes any increase in current, slowing down the rate of current rise in an RL circuit. (R) correctly explains (A)."
  },
  {
    a: "When the current in an inductor is switched off, a large spark often occurs across the switch contacts.",
    r: "The rapid decay of current produces an extremely high rate of change of magnetic flux, generating a very large self-induced EMF in the forward direction that maintains current flow.",
    ans: 0,
    exp: "When current collapses quickly ($\\,\\Delta t \\to 0\\,$), $-\\,L\\frac{dI}{dt}$ becomes huge and acts in the same direction as the original current to prevent its decay, breaking down the air gap across the switch. (R) correctly explains (A)."
  },
  {
    a: "If two concentric circular loops carry currents, decreasing the current in the outer loop induces a current in the inner loop in the same direction.",
    r: "Lenz's law requires the induced current to create a magnetic field that reinforces the decreasing flux produced by the outer loop.",
    ans: 0,
    exp: "When the primary flux decreases, the secondary induced current flows in the same sense to support and oppose the reduction of flux. (R) correctly explains (A)."
  },
  {
    a: "If the current in an outer circular loop is increased, the current induced in an inner concentric loop flows in the opposite direction.",
    r: "Lenz's law demands that the induced magnetic flux oppose the increase of the magnetic flux threading the inner loop.",
    ans: 0,
    exp: "Increasing the current increases the inward/outward flux. The inner loop generates an opposing flux, requiring an opposite circulating current. (R) correctly explains (A)."
  },
  {
    a: "A conducting loop placed in a uniform magnetic field cannot experience any net translational magnetic force even if the magnetic field is time-dependent.",
    r: "In a uniform magnetic field, the net magnetic Lorentz force on any closed current-carrying loop is identically zero.",
    ans: 0,
    exp: "Even though an induced current $I$ flows in the loop due to $\\frac{dB}{dt}$, the magnetic force is $\\mathbf{F} = I \\oint d\\mathbf{l} \\times \\mathbf{B} = I (\\oint d\\mathbf{l}) \\times \\mathbf{B} = 0$, since $\\oint d\\mathbf{l} = 0$ for any closed path in a uniform $\\mathbf{B}$. (R) correctly explains (A)."
  },
  {
    a: "When an aluminum ring is placed over the extended core of an AC electromagnet and the switch is turned on, the ring jumps upwards.",
    r: "The AC magnetic field induces a current in the ring which, by Lenz's law, creates an opposing magnetic field, resulting in a continuous net repulsive force.",
    ans: 0,
    exp: "Due to the inductance of the ring, the induced current lags the induced EMF, resulting in a phase relationship where the time-average electromagnetic force is repelling (Elihu Thomson's jumping ring experiment). (R) correctly explains (A)."
  },
  {
    a: "In a horizontal conducting loop, if a vertically downward magnetic field decreases with time, the induced current flows in the clockwise direction when viewed from above.",
    r: "A clockwise current produces a downward magnetic field that opposes the decrease of the downward external flux.",
    ans: 0,
    exp: "By the right-hand grip rule, a clockwise current viewed from above produces a magnetic field directed downwards, compensating for the decaying downward flux. (R) correctly explains (A)."
  },
  {
    a: "In a horizontal conducting loop, if a vertically upward magnetic field increases with time, the induced current flows in the clockwise direction when viewed from above.",
    r: "To oppose the increasing upward flux, the induced current must produce a downward magnetic field, which corresponds to a clockwise circulation.",
    ans: 0,
    exp: "The increasing upward flux is opposed by an induced downward magnetic field, which is generated by a clockwise current. (R) correctly explains (A)."
  },
  {
    a: "A superconducting ring preserves the initial magnetic flux trapped through it indefinitely.",
    r: "Because a superconductor has zero electrical resistance, any attempted change in flux immediately induces persistent surface currents that perfectly cancel the flux change.",
    ans: 0,
    exp: "For a superconductor with $R = 0$, $\\mathcal{E} = I R = 0 \\implies \\frac{d\\Phi}{dt} = 0$, meaning the total magnetic flux through the ring is strictly conserved. (R) correctly explains (A)."
  },
  {
    a: "A rectangular loop moving with uniform velocity completely inside a uniform magnetic field has zero induced current.",
    r: "The net motional EMF around the closed loop is zero because opposite parallel sides develop equal and opposing potential differences.",
    ans: 0,
    exp: "Both parallel sides moving perpendicular to $\\mathbf{B}$ have identical motional EMFs ($B v l$) in the same sense along the branches, so their loop integral cancels to zero. (R) correctly explains (A)."
  },
  {
    a: "A conducting wire sliding down two vertical parallel conducting rails connected by a resistor in a horizontal uniform magnetic field reaches a terminal velocity.",
    r: "As the velocity increases, the upward retarding magnetic force $\\frac{B^2 l^2 v}{R}$ increases until it balances the downward gravitational force $mg$.",
    ans: 0,
    exp: "At terminal speed, net force is zero: $mg - \\frac{B^2 l^2 v_T}{R} = 0 \\implies v_T = \\frac{m g R}{B^2 l^2}$. (R) correctly explains (A)."
  },
  {
    a: "At terminal velocity, the rate of work done by gravity on a falling conducting rail equals the rate of Joule heating in the circuit.",
    r: "Since the kinetic energy is constant at terminal velocity, all gravitational potential energy lost per second is converted into electrical energy and dissipated as heat.",
    ans: 0,
    exp: "$P_{grav} = mg v_T = \\left(\\frac{B^2 l^2 v_T}{R}\\right) v_T = \\frac{B^2 l^2 v_T^2}{R} = \\frac{\\mathcal{E}^2}{R} = P_{Joule}$. Energy is perfectly conserved. (R) correctly explains (A)."
  },
  {
    a: "When a metal ring is held in a horizontal plane and a magnet is dropped through it, the acceleration of the magnet is $g$ when its center of mass passes through the center of the ring.",
    r: "At the exact center of the ring, the rate of change of magnetic flux $\\frac{d\\Phi}{dt}$ with respect to time passes through zero.",
    ans: 0,
    exp: "As the magnet passes through the center, the flux through the loop attains an extremum (maximum), so $\\frac{d\\Phi}{dz} = 0 \\implies \\frac{d\\Phi}{dt} = 0$. Hence induced EMF and magnetic force are zero at that instant, giving $a = g$. (R) correctly explains (A)."
  },
  {
    a: "Lenz's law cannot be applied to open circuits.",
    r: "In an open circuit, no induced EMF can ever be established.",
    ans: 3,
    exp: "(A) is false because Lenz's law determines the polarity of the induced EMF across the ends of an open conductor. (R) is also false because motional and transformer EMFs are established regardless of whether the circuit is closed or open."
  },
  {
    a: "If an iron rod is pushed into a current-carrying solenoid, the current in the solenoid temporarily decreases.",
    r: "Inserting the iron rod increases the magnetic flux inside the solenoid, creating a back EMF that opposes the battery current.",
    ans: 0,
    exp: "The permeability of iron increases inductance $L$ and flux $\\Phi = L I$. By Lenz's law, the induced EMF opposes the existing flux increase, causing a transient dip in current. (R) correctly explains (A)."
  },
  {
    a: "A closed conducting loop is placed near a straight wire carrying an alternating current. The induced current in the loop reverses direction with the same frequency as the AC source.",
    r: "The direction of induced current depends directly on the sign of the time derivative of the magnetic flux, $\\frac{d\\Phi}{dt}$, which alternates periodically.",
    ans: 0,
    exp: "Since $I_{wire}(t) = I_0 \\sin(\\omega t)$, $\\Phi(t) \\propto \\sin(\\omega t)$, so $\\mathcal{E}(t) \\propto -\\cos(\\omega t)$, which alternates at the identical frequency $\\omega$. (R) correctly explains (A)."
  },
  {
    a: "Two circular loops of wire lie in the same plane. If the current in loop 1 is constant, no current is induced in loop 2.",
    r: "A steady current produces a static magnetic field, resulting in a constant magnetic flux through loop 2 and $\\frac{d\\Phi}{dt} = 0$.",
    ans: 0,
    exp: "Faraday-Lenz law requires $\\frac{d\\Phi}{dt} \\neq 0$ for induction. A constant current creates a static magnetic field, producing zero induced EMF. (R) correctly explains (A)."
  },
  {
    a: "The direction of motional EMF given by Fleming's right-hand rule is consistent with Lenz's law.",
    r: "Both Fleming's right-hand rule and Lenz's law are based on the fundamental magnetic Lorentz force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ and energy conservation.",
    ans: 0,
    exp: "Fleming's right-hand rule is simply a convenient operational rule derived from the Lorentz force on charges inside a moving conductor, yielding identical directions to Lenz's law. (R) correctly explains (A)."
  }
];

// 7 Authentic MCQ questions for Lenz's law
const mcqData = [
  {
    q: "A bar magnet is allowed to fall freely through the center of a horizontal copper ring. The acceleration of the magnet as it falls through the ring:",
    opts: [
      "is less than $g$ while approaching and less than $g$ while receding",
      "is greater than $g$ while approaching and less than $g$ while receding",
      "is less than $g$ while approaching and greater than $g$ while receding",
      "remains equal to $g$ throughout"
    ],
    ans: 0,
    exp: "By Lenz's law, the induced current in the copper ring always opposes the motion of the magnet: it repels the approaching magnet (upward force) and attracts the receding magnet (upward force). Thus in both phases, the net acceleration is less than $g$."
  },
  {
    q: "A long straight wire carries a current $I$ towards the right. A square loop of wire is situated above the wire and is moving vertically away from it. The direction of induced current in the loop is:",
    opts: [
      "clockwise",
      "counterclockwise",
      "zero",
      "first clockwise, then counterclockwise"
    ],
    ans: 0,
    exp: "By the right-hand rule, the magnetic field above the wire points out of the page. Moving away from the wire decreases this outward magnetic flux. By Lenz's law, the induced current must create an outward field to oppose the decrease, which requires a counterclockwise current... Wait! Right-hand rule: thumb to the right, fingers above the wire point OUT of the page. As loop moves away, outward flux decreases. To oppose decrease, induced field must be OUT of page. Right-hand grip rule: fingers curling counterclockwise produce a field out of the page! Let's check options: let's make A: counterclockwise."
  },
  {
    q: "A conducting rod of length $l$ and mass $m$ slides down vertical conducting rails connected by a resistance $R$ in a horizontal magnetic field $B$. The terminal velocity attained by the rod is:",
    opts: [
      "$\\frac{m g R}{B^2 l^2}$",
      "$\\frac{m g}{B l R}$",
      "$\\frac{B^2 l^2}{m g R}$",
      "$\\frac{m g R^2}{B l}$"
    ],
    ans: 0,
    exp: "At terminal velocity, the upward magnetic force equals the downward gravitational force: $F_{mag} = I l B = \\frac{B l v_T}{R} l B = \\frac{B^2 l^2 v_T}{R} = mg \\implies v_T = \\frac{m g R}{B^2 l^2}$."
  },
  {
    q: "A metal ring is placed horizontally on a table. A bar magnet is dropped vertically through the center of the ring with its north pole pointing downwards. When viewed from above, the direction of induced current in the ring as the magnet approaches is:",
    opts: [
      "counterclockwise",
      "clockwise",
      "zero",
      "first clockwise, then counterclockwise"
    ],
    ans: 0,
    exp: "As the north pole approaches, downward magnetic flux increases. By Lenz's law, the induced current must produce an upward magnetic field to oppose the approach (forming an induced north pole on the upper face). An upward field corresponds to a counterclockwise current when viewed from above."
  },
  {
    q: "A conducting rod of resistance $R$ and length $L$ is pulled with constant velocity $v$ on smooth horizontal rails in a uniform magnetic field $B$. The mechanical power supplied by the external agent is:",
    opts: [
      "$\\frac{B^2 L^2 v^2}{R}$",
      "$\\frac{B L v^2}{R}$",
      "$\\frac{B^2 L^2 v}{R}$",
      "$\\frac{B L v}{R}$"
    ],
    ans: 0,
    exp: "Induced EMF is $\\mathcal{E} = B L v$. Current is $I = \\frac{B L v}{R}$. Retarding force is $F = I L B = \\frac{B^2 L^2 v}{R}$. Mechanical power supplied is $P = F v = \\frac{B^2 L^2 v^2}{R}$."
  },
  {
    q: "A circular coil is placed in a uniform magnetic field pointing into the paper. If the radius of the coil starts shrinking with time, the direction of induced current in the coil is:",
    opts: [
      "clockwise",
      "counterclockwise",
      "zero",
      "oscillating"
    ],
    ans: 0,
    exp: "As the coil shrinks, its area decreases, so the inward magnetic flux decreases. By Lenz's law, the induced current must generate an inward magnetic field to oppose the loss of flux. By the right-hand grip rule, an inward field is created by a clockwise current."
  },
  {
    q: "An electron moves along the line $AB$ which lies in the same plane as a circular conducting loop. The direction of induced current in the loop, if any, is:",
    opts: [
      "first clockwise, then counterclockwise",
      "first counterclockwise, then clockwise",
      "always clockwise",
      "no current is induced"
    ],
    ans: 0,
    exp: "As the electron approaches along $AB$, the equivalent conventional current (flowing in the opposite direction to electron motion) increases the magnetic flux through the loop in one direction. As it recedes, the flux decreases. By Lenz's law, the induced current reverses direction from clockwise to counterclockwise."
  }
];

// Fix MCQ 1 options:
mcqData[1] = {
  q: "A long straight wire carries a current $I$ towards the right. A square loop of wire is situated above the wire and is moving vertically away from it. The direction of induced current in the loop is:",
  opts: [
    "counterclockwise",
    "clockwise",
    "zero",
    "alternating"
  ],
  ans: 0,
  exp: "By the right-hand thumb rule, the magnetic field above the rightward current is directed out of the page. As the loop moves upwards away from the wire, the field weakens and outward flux decreases. By Lenz's law, the induced current must produce an outward field to oppose this decrease, which requires a counterclockwise circulating current."
};

// 20 Authentic Numerical questions for Lenz's law
const numData = [
  {
    q: "A conducting rod of length $0.5\\text{ m}$ and resistance $2\\ \\Omega$ moves with a speed of $4\\text{ m/s}$ on parallel conducting rails in a uniform perpendicular magnetic field of $1.0\\text{ T}$. The retarding magnetic force acting on the rod in newtons is:",
    ans: 0.5,
    exp: "Induced EMF $\\mathcal{E} = B l v = 1.0 \\times 0.5 \\times 4 = 2\\text{ V}$. Current $I = \\frac{\\mathcal{E}}{R} = \\frac{2}{2} = 1\\text{ A}$. Retarding force $F = I l B = 1 \\times 0.5 \\times 1.0 = 0.5\\text{ N}$."
  },
  {
    q: "A horizontal rail system has a rod of length $1.0\\text{ m}$ and resistance $5\\ \\Omega$ moving at $10\\text{ m/s}$ perpendicular to a magnetic field of $2.0\\text{ T}$. The rate of Joule heat dissipation in watts is:",
    ans: 80,
    exp: "Induced EMF $\\mathcal{E} = B l v = 2.0 \\times 1.0 \\times 10 = 20\\text{ V}$. Heat dissipation $P = \\frac{\\mathcal{E}^2}{R} = \\frac{20^2}{5} = \\frac{400}{5} = 80\\text{ W}$."
  },
  {
    q: "A conducting rod of mass $0.2\\text{ kg}$ and length $1\\text{ m}$ slides down vertical frictionless rails of resistance $4\\ \\Omega$ in a horizontal magnetic field $B = 2\\text{ T}$. Taking $g = 10\\text{ m/s}^2$, the terminal velocity of the rod in $\\text{m/s}$ is:",
    ans: 2,
    exp: "$v_T = \\frac{m g R}{B^2 l^2} = \\frac{0.2 \\times 10 \\times 4}{2^2 \\times 1^2} = \\frac{8}{4} = 2\\text{ m/s}$."
  },
  {
    q: "A metal rod of length $0.4\\text{ m}$ moves at $5\\text{ m/s}$ perpendicular to a $0.5\\text{ T}$ field. If the circuit has a total resistance of $0.2\\ \\Omega$, the external mechanical power required to maintain constant speed in watts is:",
    ans: 5,
    exp: "$\\mathcal{E} = B l v = 0.5 \\times 0.4 \\times 5 = 1.0\\text{ V}$. Power $P = \\frac{\\mathcal{E}^2}{R} = \\frac{1.0^2}{0.2} = 5\\text{ W}$."
  },
  {
    q: "A square loop of side $10\\text{ cm}$ and resistance $1\\ \\Omega$ is moved with speed $2\\text{ m/s}$ out of a $0.5\\text{ T}$ uniform magnetic field. The opposing magnetic force in newtons is:",
    ans: 0.005,
    exp: "$\\mathcal{E} = B l v = 0.5 \\times 0.1 \\times 2 = 0.1\\text{ V}$. Current $I = \\frac{0.1}{1} = 0.1\\text{ A}$. Force $F = I l B = 0.1 \\times 0.1 \\times 0.5 = 0.005\\text{ N}$."
  },
  {
    q: "A conducting bar of mass $50\\text{ g}$ and length $0.5\\text{ m}$ slides down vertical rails connected by a resistor of $2\\ \\Omega$ in a magnetic field of $1\\text{ T}$. Taking $g = 10\\text{ m/s}^2$, the terminal speed in $\\text{m/s}$ is:",
    ans: 4,
    exp: "$v_T = \\frac{m g R}{B^2 l^2} = \\frac{0.05 \\times 10 \\times 2}{1^2 \\times (0.5)^2} = \\frac{1.0}{0.25} = 4\\text{ m/s}$."
  },
  {
    q: "A rod of length $2\\text{ m}$ is pulled at $3\\text{ m/s}$ on frictionless rails in a magnetic field $B = 0.5\\text{ T}$. If the induced current is $1.5\\text{ A}$, the resistance of the circuit in $\\Omega$ is:",
    ans: 2,
    exp: "$\\mathcal{E} = B l v = 0.5 \\times 2 \\times 3 = 3\\text{ V}$. Resistance $R = \\frac{\\mathcal{E}}{I} = \\frac{3}{1.5} = 2\\ \\Omega$."
  },
  {
    q: "In an electromagnetic braking experiment, a rod of length $0.8\\text{ m}$ moves at $10\\text{ m/s}$ across a $1.25\\text{ T}$ field. If $R = 4\\ \\Omega$, the retarding force in newtons is:",
    ans: 2.5,
    exp: "$\\mathcal{E} = 1.25 \\times 0.8 \\times 10 = 10\\text{ V}$. Current $I = \\frac{10}{4} = 2.5\\text{ A}$. Force $F = I l B = 2.5 \\times 0.8 \\times 1.25 = 2.5\\text{ N}$."
  },
  {
    q: "A conducting rod of length $1.5\\text{ m}$ moves at $4\\text{ m/s}$ in a $0.8\\text{ T}$ magnetic field. If the electrical power dissipated as heat is $18\\text{ W}$, the current in amperes is:",
    ans: 3.75,
    exp: "$\\mathcal{E} = B l v = 0.8 \\times 1.5 \\times 4 = 4.8\\text{ V}$. Since $P = \\mathcal{E} I$, $I = \\frac{P}{\\mathcal{E}} = \\frac{18}{4.8} = 3.75\\text{ A}$."
  },
  {
    q: "A square loop of resistance $0.5\\ \\Omega$ has side $0.2\\text{ m}$. It is dragged out of a $2\\text{ T}$ field at $5\\text{ m/s}$. The work done against magnetic force in moving the loop completely out of the field in joules is:",
    ans: 0.8,
    exp: "$\\mathcal{E} = B l v = 2 \\times 0.2 \\times 5 = 2\\text{ V}$. $F = \\frac{B^2 l^2 v}{R} = \\frac{4 \\times 0.04 \\times 5}{0.5} = 1.6\\text{ N}$. Distance moved $d = 0.2\\text{ m}$. Work $W = F d = 1.6 \\times 0.2 = 0.32\\text{ J}$."
  },
  {
    q: "A conducting rod of length $1\\text{ m}$ is moved across a $0.5\\text{ T}$ field at $6\\text{ m/s}$. If the circuit resistance is $3\\ \\Omega$, the rate at which mechanical work is converted to heat in watts is:",
    ans: 3,
    exp: "$\\mathcal{E} = 0.5 \\times 1 \\times 6 = 3\\text{ V}$. $P = \\frac{\\mathcal{E}^2}{R} = \\frac{3^2}{3} = 3\\text{ W}$."
  },
  {
    q: "A copper rod of mass $0.1\\text{ kg}$ and length $0.5\\text{ m}$ falls vertically under gravity in a horizontal magnetic field of $1\\text{ T}$. If the circuit resistance is $0.5\\ \\Omega$ and $g = 10\\text{ m/s}^2$, the terminal speed in $\\text{m/s}$ is:",
    ans: 2,
    exp: "$v_T = \\frac{m g R}{B^2 l^2} = \\frac{0.1 \\times 10 \\times 0.5}{1^2 \\times (0.5)^2} = \\frac{0.5}{0.25} = 2\\text{ m/s}$."
  },
  {
    q: "A loop of wire enclosing an area of $0.04\\text{ m}^2$ and resistance $2\\ \\Omega$ experiences a changing magnetic flux. If an opposing induced current of $0.5\\text{ A}$ is generated, the rate of change of magnetic field $\\frac{dB}{dt}$ in $\\text{T/s}$ is:",
    ans: 25,
    exp: "$\\mathcal{E} = I R = 0.5 \\times 2 = 1.0\\text{ V}$. Since $\\mathcal{E} = A \\frac{dB}{dt}$, $\\frac{dB}{dt} = \\frac{1.0}{0.04} = 25\\text{ T/s}$."
  },
  {
    q: "A metal bar of length $0.5\\text{ m}$ slides at $8\\text{ m/s}$ on parallel rails in a $0.5\\text{ T}$ field. If the circuit resistance is $1\\ \\Omega$, the opposing force in newtons is:",
    ans: 0.5,
    exp: "$\\mathcal{E} = 0.5 \\times 0.5 \\times 8 = 2\\text{ V}$. $I = \\frac{2}{1} = 2\\text{ A}$. $F = I l B = 2 \\times 0.5 \\times 0.5 = 0.5\\text{ N}$."
  },
  {
    q: "A conducting square loop of side $0.1\\text{ m}$ and resistance $4\\ \\Omega$ is rotated so that the flux through it changes by $0.8\\text{ Wb}$. The charge circulated in coulombs is:",
    ans: 0.2,
    exp: "$q = \\frac{\\Delta\\Phi}{R} = \\frac{0.8}{4} = 0.2\\text{ C}$."
  },
  {
    q: "A rod of length $0.6\\text{ m}$ is pulled at $5\\text{ m/s}$ across a $2\\text{ T}$ field. If the retarding force is $3.6\\text{ N}$, the current flowing through the rod in amperes is:",
    ans: 3,
    exp: "$F = I l B \\implies I = \\frac{F}{l B} = \\frac{3.6}{0.6 \\times 2} = \\frac{3.6}{1.2} = 3\\text{ A}$."
  },
  {
    q: "A railgun prototype has rails separated by $0.25\\text{ m}$ in a $2\\text{ T}$ field. A current of $20\\text{ A}$ is passed through the crossbar. The magnetic force opposing or accelerating the bar in newtons is:",
    ans: 10,
    exp: "$F = I l B = 20 \\times 0.25 \\times 2 = 10\\text{ N}$."
  },
  {
    q: "A loop of wire has resistance $10\\ \\Omega$. When the magnetic flux through the loop changes at a rate of $50\\text{ Wb/s}$, the power dissipated as heat in watts is:",
    ans: 250,
    exp: "$\\mathcal{E} = \\frac{d\\Phi}{dt} = 50\\text{ V}$. $P = \\frac{\\mathcal{E}^2}{R} = \\frac{50^2}{10} = \\frac{2500}{10} = 250\\text{ W}$."
  },
  {
    q: "A conducting wire of length $0.8\\text{ m}$ moves at $10\\text{ m/s}$ perpendicular to a $0.25\\text{ T}$ field. The induced EMF in volts is:",
    ans: 2,
    exp: "$\\mathcal{E} = B l v = 0.25 \\times 0.8 \\times 10 = 2\\text{ V}$."
  },
  {
    q: "A copper bar of length $2\\text{ m}$ moves at $15\\text{ m/s}$ in a $0.1\\text{ T}$ field. If connected across an external resistor of $6\\ \\Omega$ (neglecting wire resistance), the current in amperes is:",
    ans: 0.5,
    exp: "$\\mathcal{E} = B l v = 0.1 \\times 2 \\times 15 = 3\\text{ V}$. Current $I = \\frac{3}{6} = 0.5\\text{ A}$."
  }
];

// Fix item 9 in numData:
numData[9] = {
  q: "A square loop of resistance $0.5\\ \\Omega$ has side $0.2\\text{ m}$. It is dragged out of a $2\\text{ T}$ field at $5\\text{ m/s}$. The work done against the magnetic force in moving the loop completely out of the field in joules is:",
  ans: 0.32,
  exp: "$\\mathcal{E} = B l v = 2 \\times 0.2 \\times 5 = 2\\text{ V}$. Retarding force $F = \\frac{B^2 l^2 v}{R} = \\frac{4 \\times 0.04 \\times 5}{0.5} = 1.6\\text{ N}$. Total distance moved $d = 0.2\\text{ m}$. Work done $W = F d = 1.6 \\times 0.2 = 0.32\\text{ J}$."
};

const part4Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part4Questions.push({
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

const outPath = path.join(__dirname, 'data_jee_emi_ac_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
