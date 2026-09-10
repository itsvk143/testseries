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

const subTopic = "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)";
const chapter = "Properties of Solids and Liquids";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for Fluid mechanics
const arData = [
  {
    a: "Pascal's law states that pressure exerted anywhere in a confined incompressible fluid is transmitted equally in all directions throughout the fluid.",
    r: "Liquids are virtually incompressible and their molecules slide freely over one another without sustaining static shear stresses.",
    ans: 0,
    exp: "Because fluids in equilibrium cannot resist shear stress, external pressure applied to any part of an enclosed fluid is transmitted undiminished to every portion of the fluid and to the walls of the containing vessel."
  },
  {
    a: "A hydraulic lift allows a small force applied on a small piston to lift a massive automobile on a large piston.",
    r: "According to Pascal's law, the pressure is identical at the same horizontal level in both cylinders, so $F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$, producing a mechanical force multiplication.",
    ans: 0,
    exp: "Since pressure $P = \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$, the output force is multiplied by the area ratio $\\frac{A_2}{A_1} \\gg 1$, while conserving work ($F_1 d_1 = F_2 d_2$)."
  },
  {
    a: "An iceberg floats in seawater with approximately $90\\%$ of its volume submerged beneath the water surface.",
    r: "The density of glacial ice is approximately $917\\,\\text{kg/m}^3$ while the density of seawater is approximately $1025\\,\\text{kg/m}^3$, giving a submerged fraction $\\frac{V_{\\text{sub}}}{V} = \\frac{\\rho_{\\text{ice}}}{\\rho_{\\text{water}}} \\approx 0.90$.",
    ans: 0,
    exp: "By Archimedes' principle, the weight of the floating iceberg equals the buoyant force: $\\rho_{\\text{ice}} V g = \\rho_{\\text{sea}} V_{\\text{sub}} g \\implies \\frac{V_{\\text{sub}}}{V} = \\frac{917}{1025} \\approx 0.895 \\approx 90\\%$."
  },
  {
    a: "When a piece of ice floating in a beaker completely filled with water melts, no water overflows the beaker.",
    r: "The volume of water formed by melting the ice exactly equals the volume of water displaced by the floating ice originally.",
    ans: 0,
    exp: "Weight of ice is $m g = \\rho_{\\text{water}} V_{\\text{disp}} g \\implies V_{\\text{disp}} = \\frac{m}{\\rho_{\\text{water}}}$. When the ice melts into liquid water of mass $m$, its new volume is $V_{\\text{melt}} = \\frac{m}{\\rho_{\\text{water}}} = V_{\\text{disp}}$. Thus the water level remains identical."
  },
  {
    a: "In streamline flow of an incompressible non-viscous fluid through a horizontal pipe of variable cross-section, the pressure is lowest where the fluid speed is highest.",
    r: "According to Bernoulli's principle for a horizontal streamline, $P + \\frac{1}{2}\\rho v^2 = \\text{constant}$, meaning pressure energy is converted into kinetic energy at constrictions.",
    ans: 0,
    exp: "From the continuity equation $A v = \\text{constant}$, velocity $v$ increases at narrower cross-sections. Since $P + \\frac{1}{2}\\rho v^2 = C$, higher kinetic energy density $\\frac{1}{2}\\rho v^2$ necessitates a lower static pressure $P$."
  },
  {
    a: "An airplane wing experiences an upward aerodynamic lift force during forward flight.",
    r: "Due to the cambered airfoil profile, air travels faster over the curved upper surface than beneath the flat lower surface, creating a lower pressure above the wing according to Bernoulli's theorem.",
    ans: 0,
    exp: "With $v_{\\text{top}} > v_{\\text{bottom}}$, Bernoulli's theorem yields $P_{\\text{bottom}} - P_{\\text{top}} = \\frac{1}{2}\\rho(v_{\\text{top}}^2 - v_{\\text{bottom}}^2) > 0$. This net upward pressure difference across wing area $A$ provides the aerodynamic lift force."
  },
  {
    a: "A spinning cricket or baseball curves in flight (the Magnus effect).",
    r: "Air dragged along the surface by viscous friction moves faster on the side where spinning surface velocity aids airflow, reducing pressure on that side and creating a transverse deflecting force.",
    ans: 0,
    exp: "On the side rotating in the direction of oncoming air, airspeed increases ($v + \\omega r$), lowering pressure. On the opposite side, airspeed is reduced ($v - \\omega r$), raising pressure. The resulting pressure imbalance drives the ball along a curved trajectory."
  },
  {
    a: "Two parallel fast-moving boats sailing close together tend to be drawn toward each other.",
    r: "Water rushing through the narrow channel between the boats flows faster than water on their outer flanks, creating a low-pressure region between the hulls according to Bernoulli's equation.",
    ans: 0,
    exp: "Due to constriction, the water velocity between the hulls is higher ($v_{\\text{inner}} > v_{\\text{outer}}$), so $P_{\\text{inner}} < P_{\\text{outer}}$. The higher outer hydrostatic pressure pushes the boats inward, posing a collision hazard."
  },
  {
    a: "A tin roof or thatch can be blown off a house during a violent windstorm without the house collapsing inward.",
    r: "High-speed wind blowing over the roof creates a low pressure above it, while the calm air inside the house remains at high atmospheric pressure, producing a strong upward lifting force.",
    ans: 0,
    exp: "According to Bernoulli's equation, the high velocity of wind over the roof reduces the pressure above ($P_{\\text{out}} < P_{\\text{in}}$). The large pressure difference multiplied by roof area lifts the roof off."
  },
  {
    a: "The speed of efflux of an ideal liquid from a small orifice at depth $h$ below the free surface of an open tank is $v = \\sqrt{2gh}$.",
    r: "Applying Bernoulli's theorem between the free surface of the tank and the hole yields $\\frac{1}{2}\\rho v^2 = \\rho g h$, assuming the cross-sectional area of the tank is negligibly affected by the drain rate.",
    ans: 0,
    exp: "This is Torricelli's law of efflux. The potential energy of a fluid element at depth $h$ is converted entirely into kinetic energy as it escapes at atmospheric pressure, matching free-fall velocity $v = \\sqrt{2gh}$."
  },
  {
    a: "In a tank of height $H$ filled with water, an orifice punched at depth $h = \\frac{H}{2}$ produces the maximum horizontal range on the ground.",
    r: "The horizontal range of the efflux jet is $R = 2\\sqrt{h(H - h)}$, which attains its maximum when $h = H - h \\implies h = \\frac{H}{2}$.",
    ans: 0,
    exp: "Efflux velocity is $v = \\sqrt{2gh}$ and time of fall from height $(H - h)$ is $t = \\sqrt{\\frac{2(H - h)}{g}}$. Horizontal range is $R = v t = 2\\sqrt{h(H - h)}$. The product $h(H - h)$ is maximum when $h = H/2$, yielding $R_{\\text{max}} = H$."
  },
  {
    a: "A small spherical raindrop falling through air eventually reaches a constant terminal velocity.",
    r: "As speed increases, the upward viscous drag force given by Stokes' law ($F = 6\\pi \\eta r v$) and buoyancy increase until the net upward force exactly balances the downward gravitational force.",
    ans: 0,
    exp: "At terminal speed, acceleration is zero: $m g = F_B + F_v \\implies \\frac{4}{3}\\pi r^3 \\rho g = \\frac{4}{3}\\pi r^3 \\sigma g + 6\\pi \\eta r v_t$. This yields constant terminal velocity $v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}$."
  },
  {
    a: "Larger raindrops fall with a higher terminal velocity than smaller mist droplets.",
    r: "The terminal velocity of a falling sphere in a viscous fluid is directly proportional to the square of its radius: $v_t \\propto r^2$.",
    ans: 0,
    exp: "From Stokes' terminal velocity equation $v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}$, terminal speed scales quadratically with droplet radius. Hence large raindrops fall much faster than fine mist droplets."
  },
  {
    a: "The coefficient of viscosity of liquids decreases with an increase in temperature, whereas that of gases increases with temperature.",
    r: "In liquids, viscosity is governed by cohesive intermolecular forces that weaken with thermal agitation, while in gases viscosity is governed by momentum transfer via molecular collisions which increases with thermal speed.",
    ans: 0,
    exp: "In liquids, rising temperature provides kinetic energy to overcome intermolecular cohesive barriers, facilitating easier flow. In gases, mean molecular speed $\\bar{v} \\propto \\sqrt{T}$ increases momentum exchange across shear layers, increasing gas viscosity."
  },
  {
    a: "According to Poiseuille's formula, the volumetric flow rate of liquid through a capillary tube is proportional to the fourth power of the tube radius ($Q \\propto r^4$).",
    r: "For laminar flow through a pipe of radius $r$, the fluid velocity profile is parabolic: $v(y) = \\frac{P}{4\\eta L}(r^2 - y^2)$, and integrating $2\\pi y v(y) dy$ over the cross-section yields $Q = \\frac{\\pi P r^4}{8 \\eta L}$.",
    ans: 0,
    exp: "Because flow rate scales as $r^4$, narrowing a pipe or artery by just $10\\%$ reduces the volumetric flow rate by approximately $34\\%$, illustrating the extreme sensitivity of viscous flow to conduit radius."
  },
  {
    a: "Turbulent flow occurs when the Reynolds number $R_e$ exceeds approximately $2000-3000$.",
    r: "The Reynolds number represents the dimensionless ratio of inertial forces to viscous forces: $R_e = \\frac{\\rho v D}{\\eta}$.",
    ans: 0,
    exp: "At low $R_e (< 1000)$, viscous damping suppresses perturbations, maintaining smooth laminar streamlines. At high $R_e$, inertial forces overpower viscous damping, causing velocity fluctuations, eddies, and turbulence."
  },
  {
    a: "A venturimeter is a device used to measure the rate of flow of an incompressible fluid through a pipe.",
    r: "A venturimeter measures the pressure difference created between a wide pipe section and a narrow throat constriction using Bernoulli's theorem and the continuity equation.",
    ans: 0,
    exp: "Applying $A_1 v_1 = A_2 v_2$ and $P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$ allows direct determination of the discharge rate $Q = A_1 A_2 \\sqrt{\\frac{2(P_1 - P_2)}{\\rho(A_1^2 - A_2^2)}}$."
  },
  {
    a: "Lubricating oils used in heavy machinery must have a high viscosity index.",
    r: "A high viscosity index ensures that the oil's viscosity changes minimally over a wide operating temperature range, maintaining adequate lubricating film thickness.",
    ans: 0,
    exp: "Machinery operates from cold start-up to high operating temperatures. Oils with high viscosity index do not thin out excessively when hot or become excessively viscous when cold."
  },
  {
    a: "The velocity of a viscous liquid flowing through a circular pipe is maximum at the central axis and zero at the pipe walls.",
    r: "Due to adhesive intermolecular forces between the liquid and the solid surface, the liquid layer immediately in contact with the wall is at relative rest (no-slip boundary condition).",
    ans: 0,
    exp: "The no-slip condition sets $v = 0$ at $r = R$. Viscous shear stress $\\tau = -\\eta \\frac{dv}{dr}$ transfers momentum across concentric fluid shells, producing a parabolic velocity profile with peak speed at the center line $r = 0$."
  },
  {
    a: "An air bubble rising through a viscous liquid attains a steady terminal velocity directed upward.",
    r: "Because the density of air is less than the density of the surrounding liquid, the buoyant force exceeds the weight, and terminal speed is reached when the downward viscous drag balances the net upward buoyancy.",
    ans: 0,
    exp: "Net buoyant force is upward: $F_{\\text{net}} = \\frac{4}{3}\\pi r^3 (\\rho_L - \\rho_a) g$. Terminal velocity $v_t = \\frac{2 r^2 (\\rho_L - \\rho_a) g}{9 \\eta}$ is directed upward where drag balances buoyancy."
  },
  {
    a: "Bernoulli's theorem is essentially a statement of the law of conservation of energy for flowing fluids.",
    r: "For steady, incompressible, non-viscous streamline flow, the sum of pressure energy, kinetic energy, and potential energy per unit mass remains constant along any streamline.",
    ans: 0,
    exp: "Dividing Bernoulli's equation by density $\\rho$ yields $\\frac{P}{\\rho} + \\frac{1}{2}v^2 + gh = \\text{constant}$, expressing total mechanical energy conservation per unit mass along a streamline."
  },
  {
    a: "In a horizontal tube with a constriction, a manometer connected across the wide section and the constriction indicates a lower liquid column at the constriction.",
    r: "The velocity is higher at the constriction due to continuity, resulting in a lower static pressure according to Bernoulli's principle.",
    ans: 0,
    exp: "From $P + \\frac{1}{2}\\rho v^2 = C$, higher velocity at the constriction implies reduced pressure $P_2 < P_1$. In an open vertical manometer tube, the liquid column height $h = P/(\\rho g)$ is consequently lower at the constriction."
  },
  {
    a: "A ping-pong ball can be supported in a steady state by an upward jet of air.",
    r: "If the ball moves away from the center of the jet, the air speed is higher on the side nearer the jet axis, creating a low-pressure region that pulls the ball back toward the center of the stream.",
    ans: 0,
    exp: "By Bernoulli's principle, the high-speed core of the air jet has lower pressure than surrounding still air. If the ball shifts sideways, the pressure gradient exerts a restoring force, stabilizing the ball in mid-air."
  },
  {
    a: "The apparent weight of a body floating on a liquid is zero.",
    r: "For any floating body in equilibrium, the upward buoyant force exerted by the liquid equals the downward gravitational force acting on the body.",
    ans: 0,
    exp: "Apparent weight is $W_{\\text{app}} = W_{\\text{real}} - F_B$. By the law of flotation, $F_B = W_{\\text{real}}$, so $W_{\\text{app}} = 0$."
  },
  {
    a: "A siphon tube cannot operate in a vacuum.",
    r: "A siphon requires atmospheric pressure on the open liquid surface to push liquid up the shorter limb into the tube.",
    ans: 0,
    exp: "Liquid is driven into the siphon inlet by atmospheric pressure overcoming gravity in the shorter limb. In a vacuum, unless liquid tensile cohesion is exceptionally high, cavitation occurs and liquid flow stops."
  },
  {
    a: "Two glass capillary tubes of identical length and radii $r$ and $2r$ connected in series transmit the same mass flow rate under steady state.",
    r: "Mass conservation requires the mass flow rate through components connected in series to be identical at all cross-sections.",
    ans: 0,
    exp: "Under steady incompressible flow, fluid cannot accumulate between elements in series. Hence the volumetric flow rate $Q = \\frac{dm/dt}{\\rho}$ is constant through both capillary tubes."
  }
];

// 7 Authentic MCQs for Fluid mechanics
const mcqData = [
  {
    q: "A cylindrical tank of height $H = 5.0\\,\\text{m}$ is completely filled with water. A small hole is punctured in the side wall of the tank. At what depth $h$ below the top surface should the hole be made so that the horizontal range of the water jet on the ground is maximum?",
    opts: [
      "$2.5\\,\\text{m}$",
      "$1.25\\,\\text{m}$",
      "$3.75\\,\\text{m}$",
      "$5.0\\,\\text{m}$"
    ],
    ans: 0,
    exp: "Horizontal range is $R = 2\\sqrt{h(H - h)}$. Differentiating with respect to $h$ and equating to zero yields $h = H/2 = 5.0/2 = 2.5\\,\\text{m}$."
  },
  {
    q: "A liquid of density $\\rho = 1000\\,\\text{kg/m}^3$ flows steadily through a horizontal pipe of varying cross-section. At point 1, the cross-sectional area is $A_1 = 10\\,\\text{cm}^2$ and speed is $v_1 = 2.0\\,\\text{m/s}$. At point 2, the area is $A_2 = 5\\,\\text{cm}^2$. What is the pressure difference $P_1 - P_2$ between the two points?",
    opts: [
      "$6000\\,\\text{Pa}$",
      "$3000\\,\\text{Pa}$",
      "$12000\\,\\text{Pa}$",
      "$1500\\,\\text{Pa}$"
    ],
    ans: 0,
    exp: "From continuity: $v_2 = \\frac{A_1 v_1}{A_2} = \\frac{10 \\times 2.0}{5} = 4.0\\,\\text{m/s}$. From Bernoulli: $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2}(1000)(4^2 - 2^2) = 500(16 - 4) = 500 \\times 12 = 6000\\,\\text{Pa}$."
  },
  {
    q: "A spherical ball of lead (density $\\rho_1 = 11.3\\,\\text{g/cm}^3$) falls through a viscous oil (density $\\rho_0 = 0.8\\,\\text{g/cm}^3$) with terminal velocity $v_1 = 21\\,\\text{cm/s}$. What will be the terminal velocity of another lead ball of half the radius in the same oil?",
    opts: [
      "$5.25\\,\\text{cm/s}$",
      "$10.5\\,\\text{cm/s}$",
      "$2.625\\,\\text{cm/s}$",
      "$42.0\\,\\text{cm/s}$"
    ],
    ans: 0,
    exp: "Terminal velocity is proportional to $r^2$: $v_t \\propto r^2$. Since radius is halved ($r' = r/2$), terminal velocity becomes $v_t' = \\frac{v_1}{4} = \\frac{21}{4} = 5.25\\,\\text{cm/s}$."
  },
  {
    q: "In a hydraulic press, the radii of the small and large pistons are $r_1 = 2.0\\,\\text{cm}$ and $r_2 = 20.0\\,\\text{cm}$ respectively. If a force of $50\\,\\text{N}$ is applied to the smaller piston, the force exerted by the large piston is:",
    opts: [
      "$5000\\,\\text{N}$",
      "$500\\,\\text{N}$",
      "$2500\\,\\text{N}$",
      "$10000\\,\\text{N}$"
    ],
    ans: 0,
    exp: "$F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right) = F_1 \\left(\\frac{r_2}{r_1}\\right)^2 = 50 \\times \\left(\\frac{20}{2}\\right)^2 = 50 \\times 10^2 = 5000\\,\\text{N}$."
  },
  {
    q: "A wooden cube of density $\\rho_w = 600\\,\\text{kg/m}^3$ and side length $L = 10\\,\\text{cm}$ floats in water ($\\rho = 1000\\,\\text{kg/m}^3$). What height of the cube remains above the water surface?",
    opts: [
      "$4.0\\,\\text{cm}$",
      "$6.0\\,\\text{cm}$",
      "$2.0\\,\\text{cm}$",
      "$5.0\\,\\text{cm}$"
    ],
    ans: 0,
    exp: "Submerged height is $h_{\\text{sub}} = L \\left(\\frac{\\rho_w}{\\rho}\\right) = 10 \\times \\left(\\frac{600}{1000}\\right) = 6.0\\,\\text{cm}$. Height above surface is $h_{\\text{above}} = L - h_{\\text{sub}} = 10 - 6.0 = 4.0\\,\\text{cm}$."
  },
  {
    q: "Eight identical small spherical raindrops, each falling at terminal velocity $v_t = 5\\,\\text{cm/s}$, coalesce to form a single large spherical drop. The terminal velocity of the combined large drop in air is:",
    opts: [
      "$20\\,\\text{cm/s}$",
      "$10\\,\\text{cm/s}$",
      "$40\\,\\text{cm/s}$",
      "$15\\,\\text{cm/s}$"
    ],
    ans: 0,
    exp: "Volume conservation: $V' = 8 V \\implies \\frac{4}{3}\\pi R^3 = 8 \\left(\\frac{4}{3}\\pi r^3\\right) \\implies R = 2r$. Terminal velocity scales as $r^2$: $v_t' = v_t \\left(\\frac{R}{r}\\right)^2 = 5 \\times (2)^2 = 20\\,\\text{cm/s}$."
  },
  {
    q: "A small metal ball falling in a viscous liquid experiences a viscous drag force. According to Stokes' law, the viscous drag force is proportional to:",
    opts: [
      "Radius of ball and its velocity ($r \\cdot v$)",
      "Square of radius and velocity ($r^2 \\cdot v$)",
      "Radius and square of velocity ($r \\cdot v^2$)",
      "Square of radius and square of velocity ($r^2 \\cdot v^2$)"
    ],
    ans: 0,
    exp: "Stokes' law states $F = 6\\pi \\eta r v$, where drag force is linearly proportional to fluid viscosity $\\eta$, sphere radius $r$, and sphere speed $v$."
  }
];

// 20 Authentic Numerical questions for Fluid mechanics
const numData = [
  {
    q: "A tank filled with water has a small hole $4.9\\,\\text{m}$ below the free surface. Taking $g = 9.8\\,\\text{m/s}^2$, calculate the speed of efflux of water from the hole in $\\text{m/s}$ (round to one decimal place).",
    ans: 9.8,
    exp: "By Torricelli's law, $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{(9.8)^2} = 9.8\\,\\text{m/s}$."
  },
  {
    q: "A hydraulic jack has a small piston of diameter $d_1 = 4\\,\\text{cm}$ and a large piston of diameter $d_2 = 20\\,\\text{cm}$. What force (in $\\text{N}$) must be applied to the small piston to lift a mass of $2500\\,\\text{kg}$ on the large piston? (Take $g = 10\\,\\text{m/s}^2$).",
    ans: 1000,
    exp: "$F_2 = M g = 2500 \\times 10 = 25000\\,\\text{N}$. $F_1 = F_2 \\left(\\frac{d_1}{d_2}\\right)^2 = 25000 \\times \\left(\\frac{4}{20}\\right)^2 = 25000 \\times \\left(\\frac{1}{5}\\right)^2 = \\frac{25000}{25} = 1000\\,\\text{N}$."
  },
  {
    q: "A solid cube of wood of edge $10\\,\\text{cm}$ floats at the interface between oil (density $0.8\\,\\text{g/cm}^3$) and water (density $1.0\\,\\text{g/cm}^3$) with its lower $4\\,\\text{cm}$ in water and upper $6\\,\\text{cm}$ in oil. Find the mass of the cube in grams.",
    ans: 880,
    exp: "Volume in water is $V_1 = 10 \\times 10 \\times 4 = 400\\,\\text{cm}^3$. Volume in oil is $V_2 = 10 \\times 10 \\times 6 = 600\\,\\text{cm}^3$. Total buoyant force equals weight of cube: $M = \\rho_w V_1 + \\rho_{\\text{oil}} V_2 = (1.0)(400) + (0.8)(600) = 400 + 480 = 880\\,\\text{g}$."
  },
  {
    q: "Water flows through a horizontal pipe of non-uniform cross-section. The velocity of water is $3\\,\\text{m/s}$ at a point where the pressure is $4.0 \\times 10^4\\,\\text{Pa}$. What is the pressure (in $\\text{kPa}$) at another point where the velocity is $5\\,\\text{m/s}$? (Take density of water $\\rho = 1000\\,\\text{kg/m}^3$).",
    ans: 32,
    exp: "$P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2) = 40000 + 500(3^2 - 5^2) = 40000 + 500(9 - 25) = 40000 - 8000 = 32000\\,\\text{Pa} = 32\\,\\text{kPa}$."
  },
  {
    q: "A metal sphere of radius $r = 1.0\\,\\text{mm}$ falls through glycerin of viscosity $\\eta = 0.8\\,\\text{Pa}\\cdot\\text{s}$ at a terminal velocity of $v_t = 0.1\\,\\text{m/s}$. Find the viscous drag force on the sphere in units of $10^{-4}\\,\\text{N}$ (take $\\pi = 3.14$, round to nearest integer).",
    ans: 15,
    exp: "$F = 6\\pi \\eta r v = 6(3.14)(0.8)(10^{-3})(0.1) = 1.507 \\times 10^{-3}\\,\\text{N} = 15.07 \\times 10^{-4}\\,\\text{N} \\approx 15 \\times 10^{-4}\\,\\text{N}$."
  },
  {
    q: "An open cylindrical tank of height $H = 4\\,\\text{m}$ has a small leak at height $h = 1\\,\\text{m}$ above the ground. What is the horizontal range (in meters) of the escaping water jet on the ground? (Round to one decimal place).",
    ans: 3.5,
    exp: "Depth below free surface is $y = H - h = 4 - 1 = 3\\,\\text{m}$. Range is $R = 2\\sqrt{y h} = 2\\sqrt{3 \\times 1} = 2\\sqrt{3} \\approx 2 \\times 1.732 = 3.464\\,\\text{m} \\approx 3.5\\,\\text{m}$."
  },
  {
    q: "A horizontal pipeline carries oil. The flow rate through a pipe of radius $r$ is $Q = 16\\,\\text{cm}^3\\text{/s}$. If another pipe of identical length has radius $2r$ and operates under the same pressure difference, find its flow rate in $\\text{cm}^3\\text{/s}$.",
    ans: 256,
    exp: "By Poiseuille's formula, $Q \\propto r^4$. If radius is doubled ($r' = 2r$), $Q' = Q (2)^4 = 16 \\times 16 = 256\\,\\text{cm}^3\\text{/s}$."
  },
  {
    q: "A piece of alloy weighs $50\\,\\text{g}$ in air and $40\\,\\text{g}$ when completely submerged in water. Calculate the relative density (specific gravity) of the alloy.",
    ans: 5,
    exp: "Loss of weight in water is $W_{\\text{air}} - W_{\\text{water}} = 50 - 40 = 10\\,\\text{g}$. Relative density is $\\frac{W_{\\text{air}}}{\\text{Loss of weight}} = \\frac{50}{10} = 5$."
  },
  {
    q: "A U-tube containing mercury is open to the atmosphere on both sides. Water is poured into one arm until the water column is $13.6\\,\\text{cm}$ high. What is the height difference between the mercury surfaces in the two arms in centimeters? (Take density of mercury $= 13.6\\,\\text{g/cm}^3$).",
    ans: 1,
    exp: "At the interface level: $P_0 + \\rho_w g h_w = P_0 + \\rho_m g h_m \\implies h_m = h_w \\left(\\frac{\\rho_w}{\\rho_m}\\right) = 13.6 \\times \\left(\\frac{1.0}{13.6}\\right) = 1.0\\,\\text{cm}$."
  },
  {
    q: "An airplane of total wing area $A = 50\\,\\text{m}^2$ flies horizontally. Airspeed over the upper surface is $100\\,\\text{m/s}$ and over the lower surface is $80\\,\\text{m/s}$. Taking air density $\\rho = 1.2\\,\\text{kg/m}^3$, find the aerodynamic lift force in $\\text{kN}$.",
    ans: 108,
    exp: "Lift force is $F = \\frac{1}{2}\\rho (v_1^2 - v_2^2) A = \\frac{1}{2}(1.2)(100^2 - 80^2)(50) = 0.6 \\times (10000 - 6400) \\times 50 = 30 \\times 3600 = 108000\\,\\text{N} = 108\\,\\text{kN}$."
  },
  {
    q: "A spherical droplet of oil of radius $r = 2.0\\,\\mu\\text{m}$ and density $\\rho = 900\\,\\text{kg/m}^3$ falls in air of viscosity $\\eta = 1.8 \\times 10^{-5}\\,\\text{Pa}\\cdot\\text{s}$. Neglecting air density and taking $g = 10\\,\\text{m/s}^2$, find its terminal velocity in $\\text{mm/s}$ (round to one decimal place).",
    ans: 0.4,
    exp: "$v_t = \\frac{2 r^2 \\rho g}{9 \\eta} = \\frac{2 \\times (2.0 \\times 10^{-6})^2 \\times 900 \\times 10}{9 \\times (1.8 \\times 10^{-5})} = \\frac{2 \\times (4.0 \\times 10^{-12}) \\times 9000}{1.62 \\times 10^{-4}} = \\frac{7.2 \\times 10^{-8}}{1.62 \\times 10^{-4}} = 4.44 \\times 10^{-4}\\,\\text{m/s} \\approx 0.44\\,\\text{mm/s} \\approx 0.4\\,\\text{mm/s}$."
  },
  {
    q: "A tank has a cross-sectional area $A = 2.0\\,\\text{m}^2$ and a circular hole of area $a = 1.0\\,\\text{cm}^2$ at the bottom. When the water depth is $5.0\\,\\text{m}$, what is the initial volumetric discharge rate through the hole in liters per second? (Take $g = 10\\,\\text{m/s}^2$).",
    ans: 1,
    exp: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5.0} = 10\\,\\text{m/s}$. $Q = a v = (1.0 \\times 10^{-4}\\,\\text{m}^2) \\times 10\\,\\text{m/s} = 10^{-3}\\,\\text{m}^3\\text{/s} = 1.0\\,\\text{L/s}$."
  },
  {
    q: "Water flows through a horizontal pipe at a rate of $Q = 0.02\\,\\text{m}^3\\text{/s}$. If the pipe diameter is $D = 0.1\\,\\text{m}$, density $\\rho = 1000\\,\\text{kg/m}^3$, and viscosity $\\eta = 10^{-3}\\,\\text{Pa}\\cdot\\text{s}$, find the Reynolds number rounded to the nearest thousand. (Take $\\pi = 3.14$).",
    ans: 255000,
    exp: "$A = \\frac{\\pi D^2}{4} = \\frac{3.14 \\times 0.01}{4} = 7.85 \\times 10^{-3}\\,\\text{m}^2$. $v = \\frac{Q}{A} = \\frac{0.02}{7.85 \\times 10^{-3}} \\approx 2.548\\,\\text{m/s}$. $R_e = \\frac{\\rho v D}{\\eta} = \\frac{1000 \\times 2.548 \\times 0.1}{10^{-3}} = 254800 \\approx 255000$."
  },
  {
    q: "A solid cylinder of mass $2\\,\\text{kg}$ and density $8000\\,\\text{kg/m}^3$ is suspended by a string and immersed in water of density $1000\\,\\text{kg/m}^3$. Taking $g = 10\\,\\text{m/s}^2$, calculate the tension in the string in Newtons.",
    ans: 17.5,
    exp: "$T = M g \\left(1 - \\frac{\\rho_w}{\\rho_s}\\right) = (2 \\times 10) \\left(1 - \\frac{1000}{8000}\\right) = 20 \\times \\left(1 - \\frac{1}{8}\\right) = 20 \\times \\frac{7}{8} = 17.5\\,\\text{N}$."
  },
  {
    q: "A siphon is used to empty a water reservoir. If the discharge outlet of the siphon tube is $5.0\\,\\text{m}$ below the water surface level, calculate the efflux speed of water in $\\text{m/s}$. (Take $g = 10\\,\\text{m/s}^2$).",
    ans: 10,
    exp: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5.0} = 10\\,\\text{m/s}$."
  },
  {
    q: "A submarine dives to a depth of $200\\,\\text{m}$ in seawater of density $1030\\,\\text{kg/m}^3$. Taking $g = 10\\,\\text{m/s}^2$, find the gauge pressure (in $\\text{MPa}$) on the submarine hull.",
    ans: 2.06,
    exp: "$P_{\\text{gauge}} = \\rho g h = 1030 \\times 10 \\times 200 = 2.06 \\times 10^6\\,\\text{Pa} = 2.06\\,\\text{MPa}$."
  },
  {
    q: "A flat plate of area $A = 0.25\\,\\text{m}^2$ is pulled over a liquid film of thickness $d = 1.0\\,\\text{mm}$ at a constant speed of $v = 2.0\\,\\text{m/s}$. If a force of $F = 5.0\\,\\text{N}$ is required to maintain this speed, find the coefficient of viscosity of the liquid in $\\text{Pa}\\cdot\\text{s}$.",
    ans: 0.01,
    exp: "$F = \\eta A \\frac{v}{d} \\implies \\eta = \\frac{F d}{A v} = \\frac{5.0 \\times (1.0 \\times 10^{-3})}{0.25 \\times 2.0} = \\frac{5.0 \\times 10^{-3}}{0.50} = 0.01\\,\\text{Pa}\\cdot\\text{s}$."
  },
  {
    q: "A cylindrical vessel of base area $A = 100\\,\\text{cm}^2$ is filled with water to a depth of $30\\,\\text{cm}$. What is the total force exerted by water on the flat base in Newtons? (Take $\\rho = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$, neglect atmospheric pressure).",
    ans: 30,
    exp: "Gauge pressure at the base is $P = \\rho g h = 1000 \\times 10 \\times 0.30 = 3000\\,\\text{Pa}$. Base area is $A = 100 \\times 10^{-4} = 0.01\\,\\text{m}^2$. Force is $F = P A = 3000 \\times 0.01 = 30\\,\\text{N}$."
  },
  {
    q: "An object floats in water with $25\\%$ of its volume exposed above the water surface. What is the density of the object in $\\text{kg/m}^3$?",
    ans: 750,
    exp: "Submerged fraction is $1 - 0.25 = 0.75$. By flotation, $\\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{water}}} = 0.75 \\implies \\rho_{\\text{obj}} = 0.75 \\times 1000 = 750\\,\\text{kg/m}^3$."
  },
  {
    q: "In a horizontal Venturi meter, water velocities in the pipe and the throat are $v_1 = 1\\,\\text{m/s}$ and $v_2 = 3\\,\\text{m/s}$ respectively. Find the height difference $h$ (in centimeters) between the liquid columns in the vertical manometer tubes. (Take $g = 10\\,\\text{m/s}^2$).",
    ans: 40,
    exp: "$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\rho g h \\implies h = \\frac{v_2^2 - v_1^2}{2g} = \\frac{3^2 - 1^2}{2 \\times 10} = \\frac{9 - 1}{20} = \\frac{8}{20} = 0.40\\,\\text{m} = 40\\,\\text{cm}$."
  }
];

// Combine into part 2 questions
const part2Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part2Questions.push({
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

  part2Questions.push({
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

  part2Questions.push({
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

console.log(`Part 2 generated: ${part2Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_psl_part2.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part2Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
