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

const subTopic = "Energy density and Poynting vector";
const chapter = "Electromagnetic Waves";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Energy density and Poynting vector
const arData = [
  {
    a: "In a plane electromagnetic wave travelling in free space, the average electric energy density equals the average magnetic energy density.",
    r: "The electric and magnetic field amplitudes satisfy $E_0 = c B_0$, and using $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$ yields $\\frac{1}{4}\\varepsilon_0 E_0^2 = \\frac{B_0^2}{4\\mu_0}$.",
    ans: 0,
    exp: "Average electric energy density is $\\langle u_E \\rangle = \\frac{1}{4}\\varepsilon_0 E_0^2$. Substituting $E_0 = c B_0$ and $c^2 = \\frac{1}{\\mu_0 \\varepsilon_0}$ gives $\\frac{1}{4}\\varepsilon_0 (c^2 B_0^2) = \\frac{1}{4}\\varepsilon_0 \\left(\\frac{1}{\\mu_0 \\varepsilon_0}\\right) B_0^2 = \\frac{B_0^2}{4\\mu_0} = \\langle u_B \\rangle$."
  },
  {
    a: "The total average energy density of an electromagnetic wave in vacuum is $\\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\frac{B_0^2}{2\\mu_0}$.",
    r: "The total energy density is the sum of electric and magnetic contributions: $\\langle u \\rangle = \\langle u_E \\rangle + \\langle u_B \\rangle = 2 \\langle u_E \\rangle = 2\\left(\\frac{1}{4}\\varepsilon_0 E_0^2\\right) = \\frac{1}{2}\\varepsilon_0 E_0^2$.",
    ans: 0,
    exp: "Because the average electric and magnetic energy densities are equal, the total average energy density is simply twice either component, leading directly to $\\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\varepsilon_0 E_{\\text{rms}}^2$."
  },
  {
    a: "The Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$ represents the directional energy flux per unit area of an electromagnetic field.",
    r: "The dimensions of the Poynting vector are $\\left[\\text{M}\\text{T}^{-3}\\right]$, which are identical to power per unit area $(\\text{W/m}^2)$.",
    ans: 0,
    exp: "The magnitude of $\\vec{S}$ gives the rate of energy transport across a unit area perpendicular to propagation direction, with SI units of Watts per square meter ($\\text{W/m}^2$). The dimensional formula is $\\frac{\\text{J}/\\text{s}}{\\text{m}^2} = \\frac{\\text{ML}^2\\text{T}^{-3}}{\\text{L}^2} = \\text{MT}^{-3}$."
  },
  {
    a: "The intensity of a plane electromagnetic wave in vacuum is related to the total average energy density by $I = c \\langle u \\rangle$.",
    r: "All electromagnetic energy contained within a cylinder of cross-sectional area $A$ and length $c \\Delta t$ crosses the base in time $\\Delta t$, so $I = \\frac{\\text{Energy}}{A \\Delta t} = \\frac{\\langle u \\rangle (A c \\Delta t)}{A \\Delta t} = c \\langle u \\rangle$.",
    ans: 0,
    exp: "Since EM waves travel at speed $c$, the energy flowing across unit area per unit time is precisely the energy density multiplied by wave velocity $c$."
  },
  {
    a: "Radiation pressure exerted by an electromagnetic wave on a completely reflecting surface is twice that on a completely absorbing surface.",
    r: "On complete reflection, the change in photon momentum is $\\Delta p = 2p$, whereas on complete absorption the change in momentum is $\\Delta p = p$.",
    ans: 0,
    exp: "For complete absorption, radiation pressure is $P_{\\text{rad}} = \\frac{I}{c}$. For complete reflection, the wave reverses direction, so the momentum imparted to the surface is double: $P_{\\text{rad}} = \\frac{2I}{c}$."
  },
  {
    a: "Comet tails always point away from the Sun regardless of whether the comet is moving toward or away from the Sun.",
    r: "Radiation pressure from solar electromagnetic waves and the solar wind exert an outward repulsive force on dust and gas particles released by the comet.",
    ans: 0,
    exp: "Photons from the sun carry momentum $p = E/c$. As sunlight scatters and is absorbed by the dust in the comet's coma, the resulting outward radiation pressure drives the tail radially away from the Sun."
  },
  {
    a: "The intensity of radiation from an isotropic point source decreases inversely as the square of the distance from the source.",
    r: "Electromagnetic energy expands outward over spherical wavefronts of surface area $A = 4\\pi r^2$, so energy conservation requires $I = \\frac{P}{4\\pi r^2}$.",
    ans: 0,
    exp: "In a non-absorbing medium, the total power $P$ crossing any concentric sphere of radius $r$ is constant: $P = I(4\\pi r^2) \\implies I \\propto \\frac{1}{r^2}$."
  },
  {
    a: "The electric field amplitude of radiation from a point source decreases inversely as the first power of distance from the source.",
    r: "Since intensity $I \\propto E_0^2$ and $I \\propto \\frac{1}{r^2}$, the field amplitude must scale as $E_0 \\propto \\frac{1}{r}$.",
    ans: 0,
    exp: "From $I = \\frac{1}{2} c \\varepsilon_0 E_0^2 = \\frac{P}{4\\pi r^2}$, taking the square root yields $E_0 = \\sqrt{\\frac{P}{2\\pi c \\varepsilon_0}} \\frac{1}{r} \\propto \\frac{1}{r}$."
  },
  {
    a: "The time-average of the Poynting vector for a harmonic plane wave is $\\langle S \\rangle = \\frac{E_0 B_0}{2\\mu_0}$.",
    r: "The instantaneous Poynting vector is $S(t) = \\frac{E_0 B_0}{\\mu_0} \\sin^2(kx - \\omega t)$, and the time-average of $\\sin^2(kx - \\omega t)$ over one complete cycle is $\\frac{1}{2}$.",
    ans: 0,
    exp: "Integrating $\\sin^2(\\theta)$ from $0$ to $2\\pi$ yields an average of $\\frac{1}{2}$. Hence $\\langle S \\rangle = \\frac{E_0 B_0}{2\\mu_0} = \\frac{E_{\\text{rms}} B_{\\text{rms}}}{\\mu_0} = I$."
  },
  {
    a: "A solar sail can propel a spacecraft without consuming chemical rocket propellant.",
    r: "Photons from sunlight reflect off the reflective sail, transferring linear momentum and generating a continuous mechanical thrust force $F = \\frac{2P}{c}$.",
    ans: 0,
    exp: "A solar sail relies on radiation pressure. By reflecting incident solar photons, the sail experiences a continuous impulse $\\Delta p / \\Delta t = \\frac{2 I A}{c}$, enabling propellant-free interplanetary acceleration."
  },
  {
    a: "In optical tweezers, a tightly focused laser beam can trap and manipulate microscopic dielectric particles.",
    r: "The gradient force generated by the spatial variation in electromagnetic energy density pulls high-refractive-index particles toward the region of maximum electric field intensity.",
    ans: 0,
    exp: "A dielectric particle in an inhomogeneous optical field develops an induced electric dipole $\\vec{p} = \\alpha \\vec{E}$. The resulting electrodynamic gradient force $\\vec{F} = \\frac{1}{2}\\alpha \\nabla |\\vec{E}|^2$ draws the particle toward the beam focus."
  },
  {
    a: "An electromagnetic wave carries momentum even though photons have zero rest mass.",
    r: "According to special relativity, the energy-momentum relation for a particle with zero rest mass is $E = pc$, yielding momentum $p = \\frac{E}{c}$.",
    ans: 0,
    exp: "Relativistic energy satisfies $E^2 = p^2 c^2 + m_0^2 c^4$. For photons $m_0 = 0$, giving $E = pc \\implies p = \\frac{E}{c} = \\frac{h}{\\lambda}$."
  },
  {
    a: "When an electromagnetic wave is incident normally on an interface, the momentum transferred per unit area per second to a medium that absorbs $50\\%$ and reflects $50\\%$ is $\\frac{1.5 I}{c}$.",
    r: "The absorbed fraction transfers momentum $\\frac{0.5 I}{c}$ and the reflected fraction transfers momentum $2 \\times \\frac{0.5 I}{c} = \\frac{I}{c}$, summing to $\\frac{1.5 I}{c}$.",
    ans: 0,
    exp: "Total radiation pressure is $P = P_{\\text{abs}} + P_{\\text{ref}} = \\frac{(1 - R)I}{c} + \\frac{2 R I}{c} = \\frac{(1 + R)I}{c}$. With reflection coefficient $R = 0.5$, $P = \\frac{(1 + 0.5)I}{c} = \\frac{1.5 I}{c}$."
  },
  {
    a: "A cylindrical wire carrying steady DC current has a non-zero Poynting vector on its surface pointing radially inward into the wire.",
    r: "The electric field $\\vec{E}$ is directed along the length of the wire (driving the current), and the magnetic field $\\vec{B}$ forms azimuthal circles around the wire, so $\\vec{E} \\times \\vec{B}$ points radially inward.",
    ans: 0,
    exp: "With $\\vec{E} = E \\hat{z}$ and $\\vec{B} = B \\hat{\\phi}$, $\\vec{S} = \\frac{1}{\\mu_0}(E \\hat{z} \\times B \\hat{\\phi}) = -\\frac{E B}{\\mu_0} \\hat{r}$. Integrating $\\vec{S}$ over the surface area gives the total power entering the wire, which exactly equals the Joule heating dissipation $I^2 R$."
  },
  {
    a: "A laser beam with power $P = 30\\,\\text{mW}$ totally absorbed by a target exerts a force of $10^{-10}\\,\\text{N}$ on the target.",
    r: "The force exerted by an absorbed beam of power $P$ is $F = \\frac{P}{c} = \\frac{30 \\times 10^{-3}}{3 \\times 10^8} = 10^{-10}\\,\\text{N}$.",
    ans: 0,
    exp: "Rate of momentum delivery is $F = \\frac{dp}{dt} = \\frac{1}{c}\\frac{dE}{dt} = \\frac{P}{c} = \\frac{0.030}{3 \\times 10^8} = 10^{-10}\\,\\text{N}$."
  },
  {
    a: "If the electric field amplitude of an EM wave is doubled, its intensity increases by a factor of 4.",
    r: "Intensity is proportional to the square of the electric field amplitude: $I = \\frac{1}{2} c \\varepsilon_0 E_0^2$.",
    ans: 0,
    exp: "Since $I \\propto E_0^2$, replacing $E_0 \\to 2 E_0$ results in $I' = (2 E_0)^2 = 4 I$. The intensity quadruples."
  },
  {
    a: "In an electromagnetic wave, the maximum instantaneous energy density is twice the average energy density.",
    r: "The instantaneous energy density varies sinusoidally as $u(t) = \\varepsilon_0 E_0^2 \\sin^2(kx - \\omega t)$, whose maximum value is $\\varepsilon_0 E_0^2$, while its average value is $\\frac{1}{2}\\varepsilon_0 E_0^2$.",
    ans: 0,
    exp: "Peak energy density is $u_{\\text{max}} = \\varepsilon_0 E_0^2$. Average energy density is $\\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2$. Thus $u_{\\text{max}} = 2 \\langle u \\rangle$."
  },
  {
    a: "For an electromagnetic wave incident obliquely at angle $\\theta$ to the normal on a perfectly absorbing surface, the radiation pressure is $P = \\frac{I}{c}\\cos^2\\theta$.",
    r: "The normal component of the incident beam momentum is reduced by a factor of $\\cos\\theta$, and the beam area spreads over a surface area enlarged by $\\frac{1}{\\cos\\theta}$.",
    ans: 0,
    exp: "Incident power on surface area $A$ is $P_{\\text{in}} = I A \\cos\\theta$. Normal force is $F_{\\perp} = \\frac{P_{\\text{in}}}{c}\\cos\\theta = \\frac{I A \\cos^2\\theta}{c}$. Dividing by area $A$ yields pressure $P = \\frac{I}{c}\\cos^2\\theta$."
  },
  {
    a: "The root-mean-square value of the electric field is related to wave intensity by $E_{\\text{rms}} = \\sqrt{\\frac{I}{c \\varepsilon_0}}$.",
    r: "The intensity of an electromagnetic wave can be written compactly as $I = c \\varepsilon_0 E_{\\text{rms}}^2$.",
    ans: 0,
    exp: "Since $E_{\\text{rms}} = \\frac{E_0}{\\sqrt{2}}$, $I = \\frac{1}{2} c \\varepsilon_0 E_0^2 = c \\varepsilon_0 \\left(\\frac{E_0}{\\sqrt{2}}\\right)^2 = c \\varepsilon_0 E_{\\text{rms}}^2$. Solving for $E_{\\text{rms}}$ yields $\\sqrt{\\frac{I}{c \\varepsilon_0}}$."
  },
  {
    a: "Even though an electromagnetic wave exerts pressure, it does not exert any net force on an object if the radiation is completely isotropic.",
    r: "Isotropic radiation exerts equal pressure from all spatial directions, resulting in vector cancellation of the net translational force $\\oint P \\hat{n} dA = 0$.",
    ans: 0,
    exp: "In an isotropic photon gas (such as blackbody cavity radiation), radiation impinges equally from all angles. The scalar pressure is $P = \\frac{1}{3} u$, but the net vector force on a submerged body is zero."
  },
  {
    a: "The momentum density $\\vec{g}$ of an electromagnetic wave in vacuum is related to the Poynting vector by $\\vec{g} = \\frac{\\vec{S}}{c^2}$.",
    r: "According to Einstein's mass-energy equivalence $m = \\frac{E}{c^2}$, an energy flux $\\vec{S}$ is equivalent to a mass flux $\\frac{\\vec{S}}{c^2}$, carrying momentum density $\\vec{g} = \\left(\\frac{\\vec{S}}{c^2}\\right) c = \\frac{\\vec{S}}{c^2}$.",
    ans: 0,
    exp: "Electromagnetic momentum per unit volume is $\\vec{g} = \\varepsilon_0 (\\vec{E} \\times \\vec{B}) = \\mu_0 \\varepsilon_0 \\vec{S} = \\frac{\\vec{S}}{c^2}$."
  },
  {
    a: "A mirror suspended from a delicate fiber rotates when illuminated by an intense beam of circularly polarized light.",
    r: "Circularly polarized light carries spin angular momentum, which is transferred to the mirror upon reflection or absorption.",
    ans: 0,
    exp: "Beth's experiment (1936) proved that circularly polarized light carries angular momentum $L = \\pm \\frac{U}{\\omega}$. Changing its polarization upon reflection imparts mechanical torque $\\tau = \\frac{dL}{dt}$, causing observable rotation."
  },
  {
    a: "For a given laser beam, focusing the beam to a smaller spot size increases the radiation pressure at the focal spot.",
    r: "Focusing decreases the beam cross-sectional area $A$, which increases the intensity $I = \\frac{P}{A}$ and consequently increases the radiation pressure $P_{\\text{rad}} = \\frac{I}{c}$.",
    ans: 0,
    exp: "Since total laser power $P$ is conserved, concentrating the power into a waist radius $w_0$ raises intensity as $1/w_0^2$. Higher intensity creates proportionately larger radiation pressure."
  },
  {
    a: "The solar constant of Earth (approximately $1360\\,\\text{W/m}^2$) produces a radiation pressure of about $4.5\\,\\mu\\text{Pa}$ on a perfectly absorbing surface.",
    r: "Radiation pressure on an absorber is $P_{\\text{rad}} = \\frac{I}{c} = \\frac{1360}{3 \\times 10^8} \\approx 4.53 \\times 10^{-6}\\,\\text{N/m}^2 = 4.53\\,\\mu\\text{Pa}$.",
    ans: 0,
    exp: "Direct substitution of $I = 1360\\,\\text{W/m}^2$ and $c = 3 \\times 10^8\\,\\text{m/s}$ yields $P = 4.53 \\times 10^{-6}\\,\\text{N/m}^2 = 4.53\\,\\mu\\text{Pa}$."
  },
  {
    a: "Electromagnetic waves can heat matter upon absorption.",
    r: "When electromagnetic waves are absorbed by electrons and molecules in a material, the electromagnetic energy is converted into random microscopic thermal kinetic energy.",
    ans: 0,
    exp: "The oscillating electric field does work $q \\vec{E} \\cdot \\vec{v}$ on free electrons or polar molecules, transferring energy to the lattice through collisions and increasing the temperature of the material."
  },
  {
    a: "In a coaxial cable delivering power to a matched load, the power flows through the dielectric space between the conductors, not inside the copper wires.",
    r: "The Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$ is non-zero in the dielectric volume between the inner and outer conductors and points along the cable axis toward the load.",
    ans: 0,
    exp: "Between the conductors there exists radial electric field $E(r)$ and azimuthal magnetic field $B(r)$. The Poynting vector $\\vec{S} \\propto \\hat{r} \\times \\hat{\\phi} = \\hat{z}$ directs the flow of electromagnetic energy strictly through the dielectric insulating spacer to the load."
  }
];

// 7 Authentic MCQs for Energy density and Poynting vector
const mcqData = [
  {
    q: "A plane electromagnetic wave of intensity $I = 600\\,\\text{W/m}^2$ is incident normally on a flat surface of area $A = 1.5\\,\\text{m}^2$. If the surface reflects $40\\%$ of the incident light and absorbs the rest, the total force exerted by the radiation on the surface is:",
    opts: [
      "$4.2 \\times 10^{-6}\\,\\text{N}$",
      "$3.0 \\times 10^{-6}\\,\\text{N}$",
      "$6.0 \\times 10^{-6}\\,\\text{N}$",
      "$1.8 \\times 10^{-6}\\,\\text{N}$"
    ],
    ans: 0,
    exp: "Incident power is $P = I A = 600 \\times 1.5 = 900\\,\\text{W}$. Radiation force is $F = \\frac{P}{c}(1 + R) = \\frac{900}{3 \\times 10^8}(1 + 0.40) = (3 \\times 10^{-6}) \\times 1.4 = 4.2 \\times 10^{-6}\\,\\text{N}$."
  },
  {
    q: "The electric field of an electromagnetic wave is given by $E = 100\\sqrt{2} \\sin(kz - \\omega t)\\,\\text{V/m}$. Taking $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, what is the total average energy density of this wave?",
    opts: [
      "$8.85 \\times 10^{-8}\\,\\text{J/m}^3$",
      "$4.425 \\times 10^{-8}\\,\\text{J/m}^3$",
      "$1.77 \\times 10^{-7}\\,\\text{J/m}^3$",
      "$2.21 \\times 10^{-8}\\,\\text{J/m}^3$"
    ],
    ans: 0,
    exp: "Total average energy density is $\\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\frac{1}{2}(8.85 \\times 10^{-12}) \\times (100\\sqrt{2})^2 = \\frac{1}{2}(8.85 \\times 10^{-12}) \\times 20000 = 8.85 \\times 10^{-8}\\,\\text{J/m}^3$."
  },
  {
    q: "A light bulb radiates $100\\,\\text{W}$ of power isotropically in all directions. What is the amplitude of the electric field $E_0$ at a distance of $r = 1.0\\,\\text{m}$ from the bulb? (Take $c = 3 \\times 10^8\\,\\text{m/s}$, $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$).",
    opts: [
      "$77.5\\,\\text{V/m}$",
      "$54.8\\,\\text{V/m}$",
      "$110.0\\,\\text{V/m}$",
      "$38.7\\,\\text{V/m}$"
    ],
    ans: 0,
    exp: "Intensity at $r = 1\\,\\text{m}$ is $I = \\frac{P}{4\\pi r^2} = \\frac{100}{4\\pi (1)^2} = \\frac{100}{12.566} = 7.958\\,\\text{W/m}^2$. Since $I = \\frac{1}{2} c \\varepsilon_0 E_0^2$, we get $E_0 = \\sqrt{\\frac{2 I}{c \\varepsilon_0}} = \\sqrt{\\frac{2 \\times 7.958}{(3 \\times 10^8)(8.85 \\times 10^{-12})}} = \\sqrt{\\frac{15.916}{2.655 \\times 10^{-3}}} = \\sqrt{5995} \\approx 77.43\\,\\text{V/m} \\approx 77.5\\,\\text{V/m}$."
  },
  {
    q: "A pulsed laser emits a single pulse of energy $U = 0.6\\,\\text{J}$ in a duration of $\\tau = 10\\,\\text{ns}$. If the beam is focused to a circular spot of radius $r = 10\\,\\mu\\text{m}$ on a completely absorbing surface, the average radiation pressure during the pulse is:",
    opts: [
      "$6.37 \\times 10^5\\,\\text{N/m}^2$",
      "$3.18 \\times 10^5\\,\\text{N/m}^2$",
      "$1.27 \\times 10^6\\,\\text{N/m}^2$",
      "$6.37 \\times 10^6\\,\\text{N/m}^2$"
    ],
    ans: 0,
    exp: "Pulse power is $P = \\frac{U}{\\tau} = \\frac{0.6}{10 \\times 10^{-9}} = 6 \\times 10^7\\,\\text{W}$. Spot area is $A = \\pi r^2 = \\pi (10^{-5})^2 = 3.1416 \\times 10^{-10}\\,\\text{m}^2$. Intensity is $I = \\frac{P}{A} = \\frac{6 \\times 10^7}{3.1416 \\times 10^{-10}} = 1.91 \\times 10^{17}\\,\\text{W/m}^2$. Radiation pressure $P_{\\text{rad}} = \\frac{I}{c} = \\frac{1.91 \\times 10^{17}}{3 \\times 10^8} = 6.37 \\times 10^5\\,\\text{N/m}^2$."
  },
  {
    q: "If the magnetic field amplitude of an electromagnetic wave is $B_0 = 4 \\times 10^{-7}\\,\\text{T}$, the intensity of the wave in vacuum is approximately (take $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{H/m}$):",
    opts: [
      "$19.1\\,\\text{W/m}^2$",
      "$38.2\\,\\text{W/m}^2$",
      "$9.55\\,\\text{W/m}^2$",
      "$76.4\\,\\text{W/m}^2$"
    ],
    ans: 0,
    exp: "$I = \\frac{c B_0^2}{2\\mu_0} = \\frac{(3 \\times 10^8) \\times (16 \\times 10^{-14})}{2 \\times (4\\pi \\times 10^{-7})} = \\frac{48 \\times 10^{-6}}{8\\pi \\times 10^{-7}} = \\frac{480}{8\\pi} = \\frac{60}{\\pi} \\approx 19.1\\,\\text{W/m}^2$."
  },
  {
    q: "A helium-neon laser emits a beam of power $P = 1.5\\,\\text{mW}$ and wavelength $632.8\\,\\text{nm}$. If the beam is completely reflected normally by a flat mirror, what is the force exerted on the mirror?",
    opts: [
      "$1.0 \\times 10^{-11}\\,\\text{N}$",
      "$0.5 \\times 10^{-11}\\,\\text{N}$",
      "$2.0 \\times 10^{-11}\\,\\text{N}$",
      "$3.0 \\times 10^{-11}\\,\\text{N}$"
    ],
    ans: 0,
    exp: "For complete reflection, $F = \\frac{2P}{c} = \\frac{2 \\times (1.5 \\times 10^{-3})}{3 \\times 10^8} = \\frac{3.0 \\times 10^{-3}}{3 \\times 10^8} = 1.0 \\times 10^{-11}\\,\\text{N}$."
  },
  {
    q: "The electric field of an EM wave is $\\vec{E} = E_0 \\hat{i} \\cos(kz - \\omega t)$ and magnetic field is $\\vec{B} = B_0 \\hat{j} \\cos(kz - \\omega t)$. The instantaneous Poynting vector $\\vec{S}$ is:",
    opts: [
      "$\\frac{E_0 B_0}{\\mu_0} \\cos^2(kz - \\omega t) \\hat{k}$",
      "$\\frac{E_0 B_0}{\\mu_0} \\cos^2(kz - \\omega t) (-\\hat{k})$",
      "$\\frac{E_0 B_0}{2\\mu_0} \\cos(2kz - 2\\omega t) \\hat{i}$",
      "$\\frac{E_0 B_0}{\\mu_0} \\sin^2(kz - \\omega t) \\hat{k}$"
    ],
    ans: 0,
    exp: "$\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B}) = \\frac{1}{\\mu_0}[E_0 \\cos(kz - \\omega t) \\hat{i} \\times B_0 \\cos(kz - \\omega t) \\hat{j}] = \\frac{E_0 B_0}{\\mu_0} \\cos^2(kz - \\omega t) \\hat{k}$."
  }
];

// 20 Authentic Numerical questions for Energy density and Poynting vector
const numData = [
  {
    q: "A continuous laser beam has an average power of $60\\,\\text{W}$. What is the radiation force (in $\\text{nN}$) exerted on a totally absorbing screen placed perpendicular to the beam?",
    ans: 200,
    exp: "$F = \\frac{P}{c} = \\frac{60}{3 \\times 10^8} = 2 \\times 10^{-7}\\,\\text{N} = 200\\,\\text{nN}$."
  },
  {
    q: "An electromagnetic wave has an intensity of $I = 90\\,\\text{W/m}^2$. Calculate the radiation pressure (in $\\mu\\text{Pa}$) when it strikes a totally reflecting surface at normal incidence.",
    ans: 0.6,
    exp: "$P = \\frac{2I}{c} = \\frac{2 \\times 90}{3 \\times 10^8} = \\frac{180}{3 \\times 10^8} = 6 \\times 10^{-7}\\,\\text{N/m}^2 = 0.6\\,\\mu\\text{Pa}$."
  },
  {
    q: "The RMS value of the electric field in a plane wave is $E_{\\text{rms}} = 60\\,\\text{V/m}$. Find the intensity of the wave in $\\text{W/m}^2$ (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, $c = 3 \\times 10^8\\,\\text{m/s}$, round to nearest integer).",
    ans: 10,
    exp: "$I = c \\varepsilon_0 E_{\\text{rms}}^2 = (3 \\times 10^8) \\times (8.85 \\times 10^{-12}) \\times (60)^2 = (2.655 \\times 10^{-3}) \\times 3600 = 9.558\\,\\text{W/m}^2 \\approx 10\\,\\text{W/m}^2$."
  },
  {
    q: "An electromagnetic wave has a peak electric field of $E_0 = 600\\,\\text{V/m}$. Find the average energy density stored in the magnetic field $\\langle u_B \\rangle$ in $\\text{nJ/m}^3$ (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, round to nearest integer).",
    ans: 797,
    exp: "$\\langle u_B \\rangle = \\langle u_E \\rangle = \\frac{1}{4}\\varepsilon_0 E_0^2 = \\frac{1}{4}(8.85 \\times 10^{-12}) \\times (600)^2 = \\frac{1}{4}(8.85 \\times 10^{-12}) \\times (3.6 \\times 10^5) = 7.965 \\times 10^{-7}\\,\\text{J/m}^3 \\approx 797\\,\\text{nJ/m}^3$."
  },
  {
    q: "A $1200\\,\\text{W}$ searchlight emits a cylindrical beam of cross-sectional area $A = 0.4\\,\\text{m}^2$. Calculate the average Poynting vector magnitude $\\langle S \\rangle$ of the beam in $\\text{kW/m}^2$.",
    ans: 3,
    exp: "$\\langle S \\rangle = \\frac{P}{A} = \\frac{1200\\,\\text{W}}{0.4\\,\\text{m}^2} = 3000\\,\\text{W/m}^2 = 3\\,\\text{kW/m}^2$."
  },
  {
    q: "A flat solar panel of area $2\\,\\text{m}^2$ is oriented perpendicular to the sun's rays where intensity is $I = 1500\\,\\text{W/m}^2$. If the panel completely absorbs the radiation, find the total force exerted by sunlight on the panel in $\\mu\\text{N}$.",
    ans: 10,
    exp: "$F = \\frac{I A}{c} = \\frac{1500 \\times 2}{3 \\times 10^8} = \\frac{3000}{3 \\times 10^8} = 10^{-5}\\,\\text{N} = 10\\,\\mu\\text{N}$."
  },
  {
    q: "The average electric energy density of a plane electromagnetic wave is $2.0 \\times 10^{-11}\\,\\text{J/m}^3$. What is the total average energy density $\\langle u \\rangle$ of the wave in units of $10^{-11}\\,\\text{J/m}^3$?",
    ans: 4,
    exp: "Since $\\langle u_E \\rangle = \\langle u_B \\rangle$, total average energy density is $\\langle u \\rangle = 2 \\langle u_E \\rangle = 2 \\times (2.0 \\times 10^{-11}) = 4.0 \\times 10^{-11}\\,\\text{J/m}^3$. The value is 4."
  },
  {
    q: "A laser pulse of energy $U = 30\\,\\text{J}$ strikes a perfectly reflecting mirror at normal incidence. Find the total linear momentum (in units of $10^{-7}\\,\\text{kg}\\cdot\\text{m/s}$) transferred to the mirror.",
    ans: 2,
    exp: "For complete reflection, $\\Delta p = \\frac{2U}{c} = \\frac{2 \\times 30}{3 \\times 10^8} = \\frac{60}{3 \\times 10^8} = 2 \\times 10^{-7}\\,\\text{kg}\\cdot\\text{m/s}$. The value is 2."
  },
  {
    q: "A point source radiates electromagnetic power $P = 314\\,\\text{W}$ uniformly in all directions. What is the intensity (in $\\text{W/m}^2$) at a distance of $r = 5\\,\\text{m}$? (Take $\\pi = 3.14$).",
    ans: 1,
    exp: "$I = \\frac{P}{4\\pi r^2} = \\frac{314}{4(3.14)(5)^2} = \\frac{314}{4(3.14)(25)} = \\frac{314}{314} = 1\\,\\text{W/m}^2$."
  },
  {
    q: "The intensity of a plane EM wave is $I = 2.655\\,\\text{W/m}^2$. Find the RMS electric field $E_{\\text{rms}}$ in $\\text{V/m}$ (take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, $c = 3 \\times 10^8\\,\\text{m/s}$).",
    ans: 32,
    exp: "$E_{\\text{rms}} = \\sqrt{\\frac{I}{c \\varepsilon_0}} = \\sqrt{\\frac{2.655}{(3 \\times 10^8)(8.85 \\times 10^{-12})}} = \\sqrt{\\frac{2.655}{2.655 \\times 10^{-3}}} = \\sqrt{1000} \\approx 31.62\\,\\text{V/m} \\approx 32\\,\\text{V/m}$."
  },
  {
    q: "A plane electromagnetic wave has total average energy density $\\langle u \\rangle = 1.0 \\times 10^{-6}\\,\\text{J/m}^3$. What is the intensity of this wave in $\\text{W/m}^2$?",
    ans: 300,
    exp: "$I = c \\langle u \\rangle = (3 \\times 10^8\\,\\text{m/s}) \\times (1.0 \\times 10^{-6}\\,\\text{J/m}^3) = 300\\,\\text{W/m}^2$."
  },
  {
    q: "Light of intensity $I = 1.5 \\times 10^5\\,\\text{W/m}^2$ falls normally on a surface of area $A = 20\\,\\text{cm}^2$. If the surface is completely absorbing, calculate the force exerted on the surface in $\\mu\\text{N}$.",
    ans: 1,
    exp: "$A = 20 \\times 10^{-4}\\,\\text{m}^2 = 2 \\times 10^{-3}\\,\\text{m}^2$. Power $P = I A = (1.5 \\times 10^5) \\times (2 \\times 10^{-3}) = 300\\,\\text{W}$. Force $F = \\frac{P}{c} = \\frac{300}{3 \\times 10^8} = 10^{-6}\\,\\text{N} = 1\\,\\mu\\text{N}$."
  },
  {
    q: "A pulsed laser beam with power $P = 90\\,\\text{kW}$ is focused on a completely reflecting surface. Find the radiation force on the surface in $\\mu\\text{N}$.",
    ans: 600,
    exp: "$F = \\frac{2P}{c} = \\frac{2 \\times (90 \\times 10^3)}{3 \\times 10^8} = \\frac{180 \\times 10^3}{3 \\times 10^8} = 6 \\times 10^{-4}\\,\\text{N} = 600\\,\\mu\\text{N}$."
  },
  {
    q: "An electromagnetic wave carries energy of $U = 900\\,\\text{J}$ through a surface. What is the linear momentum carried by this energy in units of $10^{-6}\\,\\text{kg}\\cdot\\text{m/s}$?",
    ans: 3,
    exp: "$p = \\frac{U}{c} = \\frac{900}{3 \\times 10^8} = 3 \\times 10^{-6}\\,\\text{kg}\\cdot\\text{m/s}$. The value is 3."
  },
  {
    q: "A plane electromagnetic wave has electric field amplitude $E_0 = 120\\,\\text{V/m}$. Find the amplitude of the Poynting vector $S_0$ in $\\text{W/m}^2$ (take $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{H/m}$, $c = 3 \\times 10^8\\,\\text{m/s}$, round to nearest integer).",
    ans: 38,
    exp: "$S_0 = \\frac{E_0 B_0}{\\mu_0} = \\frac{E_0^2}{\\mu_0 c} = \\frac{(120)^2}{(4\\pi \\times 10^{-7})(3 \\times 10^8)} = \\frac{14400}{120\\pi} = \\frac{120}{\\pi} \\approx 38.197\\,\\text{W/m}^2 \\approx 38\\,\\text{W/m}^2$."
  },
  {
    q: "Light from a laser with peak electric field $E_0 = 50\\,\\text{V/m}$ propagates in vacuum. What is the peak magnetic energy density $u_{B,\\text{max}}$ in $\\text{nJ/m}^3$? (Take $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$, round to one decimal place).",
    ans: 11.1,
    exp: "Peak magnetic energy density equals peak electric energy density: $u_{B,\\text{max}} = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\frac{1}{2}(8.85 \\times 10^{-12}) \\times (2500) = 1.106 \\times 10^{-8}\\,\\text{J/m}^3 \\approx 11.1\\,\\text{nJ/m}^3$."
  },
  {
    q: "A perfectly reflecting solar sail of mass $m = 100\\,\\text{kg}$ and area $A = 10^4\\,\\text{m}^2$ faces the sun at a point where solar radiation intensity is $I = 1500\\,\\text{W/m}^2$. Find the acceleration of the sail in $\\text{mm/s}^2$.",
    ans: 1,
    exp: "Force is $F = \\frac{2 I A}{c} = \\frac{2 \\times 1500 \\times 10^4}{3 \\times 10^8} = \\frac{3 \\times 10^7}{3 \\times 10^8} = 0.1\\,\\text{N}$. Acceleration $a = \\frac{F}{m} = \\frac{0.1}{100} = 10^{-3}\\,\\text{m/s}^2 = 1\\,\\text{mm/s}^2$."
  },
  {
    q: "A laser beam carries a power of $120\\,\\text{W}$ and strikes a surface at an angle of incidence $\\theta = 60^\\circ$. If the surface is completely absorbing, calculate the normal force exerted on the surface in units of $10^{-7}\\,\\text{N}$.",
    ans: 2,
    exp: "Normal force on an absorber is $F_N = \\frac{P}{c}\\cos\\theta = \\frac{120}{3 \\times 10^8} \\times \\cos(60^\\circ) = (4 \\times 10^{-7}) \\times 0.5 = 2 \\times 10^{-7}\\,\\text{N}$. The value is 2."
  },
  {
    q: "An electromagnetic wave has an intensity of $I = 531\\,\\text{W/m}^2$. Calculate the magnetic field amplitude $B_0$ in $\\mu\\text{T}$ (take $\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{H/m}$, $c = 3 \\times 10^8\\,\\text{m/s}$, $\\pi = 3.14$, round to one decimal place).",
    ans: 2.1,
    exp: "$I = \\frac{c B_0^2}{2\\mu_0} \\implies B_0 = \\sqrt{\\frac{2\\mu_0 I}{c}} = \\sqrt{\\frac{2(4 \\times 3.14 \\times 10^{-7})(531)}{3 \\times 10^8}} = \\sqrt{\\frac{1.334 \\times 10^{-3}}{3 \\times 10^8}} = \\sqrt{4.448 \\times 10^{-12}} = 2.109 \\times 10^{-6}\\,\\text{T} \\approx 2.1\\,\\mu\\text{T}$."
  },
  {
    q: "The intensity of sunlight on Earth is $I = 1400\\,\\text{W/m}^2$. What is the energy contained in a cubic room of volume $V = 30\\,\\text{m}^3$ illuminated by this sunlight, in $\\mu\\text{J}$?",
    ans: 140,
    exp: "Energy density is $\\langle u \\rangle = \\frac{I}{c} = \\frac{1400}{3 \\times 10^8} = 4.667 \\times 10^{-6}\\,\\text{J/m}^3$. Total energy in volume $V$ is $U = \\langle u \\rangle V = (4.667 \\times 10^{-6}) \\times 30 = 140 \\times 10^{-6}\\,\\text{J} = 140\\,\\mu\\text{J}$."
  }
];

// Combine into part 3 questions
const part3Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part3Questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
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

  part3Questions.push({
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

  part3Questions.push({
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

console.log(`Part 3 generated: ${part3Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_emw_part3.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part3Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
