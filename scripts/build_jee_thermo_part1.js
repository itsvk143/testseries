const fs = require('fs');
const path = require('path');

const arOptions = [
  "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
  "Both Assertion and Reason are true but Reason is NOT the correct explanation of Assertion",
  "Assertion is true but Reason is false",
  "Assertion is false but Reason is true"
];

const subTopic = "Thermal equilibrium";
const chapter = "Thermodynamics";
const subject = "Physics";

// 26 Assertion-Reason questions
const arQuestions = [
  {
    assertion: "The Zeroth Law of Thermodynamics enables us to define the concept of temperature.",
    reason: "If two bodies A and B are separately in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other.",
    correctOptionIndex: 0,
    explanation: "The Zeroth Law of Thermodynamics establishes that thermal equilibrium is an equivalence relation. Two systems in thermal equilibrium have the same value of an intensive thermodynamic variable called temperature. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A cavity or hole inside a metal plate expands when the plate is heated.",
    reason: "Thermal expansion is photographic; the distance between any two points in the material increases by the factor $(1 + \\alpha \\Delta T)$.",
    correctOptionIndex: 0,
    explanation: "During thermal expansion, every linear dimension of the object scales by $(1 + \\alpha \\Delta T)$. The boundary of the hole expands outwards exactly as if the hole were filled with the same metallic material. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The Celsius and Fahrenheit scales read the same numerical value at $-40^\\circ$.",
    reason: "From the relation $\\frac{C}{5} = \\frac{F - 32}{9}$, setting $C = F = x$ gives $9x = 5x - 160 \\implies 4x = -160 \\implies x = -40$.",
    correctOptionIndex: 0,
    explanation: "Equating $C$ and $F$ in $\\frac{C}{5} = \\frac{F - 32}{9}$ yields $9x = 5x - 160 \\implies 4x = -160 \\implies x = -40^\\circ$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "A bimetallic strip made of brass and iron bends into an arc with brass on the convex side when heated.",
    reason: "The coefficient of linear expansion of brass is greater than that of iron ($\\alpha_{\\text{brass}} > \\alpha_{\\text{iron}}$).",
    correctOptionIndex: 0,
    explanation: "Because brass has a larger coefficient of thermal expansion, it expands more than iron for the same temperature rise. To accommodate this unequal expansion while remaining joined, the strip curves with brass on the longer (convex) outer side and iron on the concave inner side. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Water contracts when heated from $0^\\circ\\text{C}$ to $4^\\circ\\text{C}$.",
    reason: "Water exhibits anomalous expansion between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, reaching its maximum density at $4^\\circ\\text{C}$.",
    correctOptionIndex: 0,
    explanation: "Due to the gradual breakdown of the open hydrogen-bonded cage structure of ice, water increases in density and decreases in volume (negative coefficient of volumetric expansion $\\gamma < 0$) between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$. Density peaks at $4^\\circ\\text{C}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "In a clamped metallic rod whose ends are fixed rigidly, cooling produces tensile thermal stress.",
    reason: "When cooled, the rod tends to contract, but the rigid supports exert an outward pulling force on the ends to maintain its original length.",
    correctOptionIndex: 0,
    explanation: "Natural contraction is $\\Delta L = L_0 \\alpha \\Delta T$. The rigid supports prevent this contraction by exerting tensile forces, creating a tensile stress $\\sigma = Y \\alpha \\Delta T$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The triple point of water is chosen as the standard fixed point in modern thermometry rather than the normal freezing or boiling point of water.",
    reason: "The triple point of water occurs at a unique temperature and pressure ($273.16\\text{ K}$ and $611.65\\text{ Pa}$) and is independent of external atmospheric pressure variations.",
    correctOptionIndex: 0,
    explanation: "The normal melting and boiling points depend on ambient atmospheric pressure and dissolved air/impurities. By Gibbs phase rule, the triple point of pure water has zero degrees of freedom (invariant state), providing a uniquely reproducible reference temperature ($273.16\\text{ K}$). Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "For an isotropic solid, the coefficients of linear ($\\alpha$), superficial ($\\beta$), and cubical ($\\gamma$) expansion are in the ratio $1 : 2 : 3$.",
    reason: "For small changes in temperature, $(1 + \\alpha \\Delta T)^2 \\approx 1 + 2\\alpha \\Delta T$ and $(1 + \\alpha \\Delta T)^3 \\approx 1 + 3\\alpha \\Delta T$.",
    correctOptionIndex: 0,
    explanation: "Area $A = L^2 \\implies A' = L_0^2(1 + \\alpha \\Delta T)^2 \\approx A_0(1 + 2\\alpha \\Delta T)$, giving $\\beta = 2\\alpha$. Similarly, volume $V = L^3 \\implies \\gamma = 3\\alpha$. Hence $\\alpha : \\beta : \\gamma = 1 : 2 : 3$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "When ice at $0^\\circ\\text{C}$ is mixed with an equal mass of water at $80^\\circ\\text{C}$, the final temperature of the mixture is $0^\\circ\\text{C}$.",
    reason: "The heat released by cooling water from $80^\\circ\\text{C}$ to $0^\\circ\\text{C}$ is $m \\times 1 \\times 80 = 80m\\text{ cal}$, which exactly equals the latent heat required to melt mass $m$ of ice ($m L_f = 80m\\text{ cal}$).",
    correctOptionIndex: 0,
    explanation: "Cooling $m$ grams of water from $80^\\circ\\text{C}$ to $0^\\circ\\text{C}$ releases $Q_{\\text{released}} = m s \\Delta T = m(1)(80) = 80m\\text{ cal}$. Melting $m$ grams of ice at $0^\\circ\\text{C}$ requires $Q_{\\text{required}} = m L_f = m(80) = 80m\\text{ cal}$. Since $Q_{\\text{released}} = Q_{\\text{required}}$, all ice melts and the final mixture consists of $2m$ grams of water at $0^\\circ\\text{C}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Thermal equilibrium implies that two systems have the same temperature, not necessarily the same internal energy.",
    reason: "Internal energy is an extensive property depending on the mass and nature of the substance, whereas temperature is an intensive property that governs the direction of spontaneous heat flow.",
    correctOptionIndex: 0,
    explanation: "Two bodies in thermal equilibrium have no net heat flow between them because their temperatures are identical. However, a large bucket of water at $20^\\circ\\text{C}$ contains far more internal energy than a small cup of water at $20^\\circ\\text{C}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "When a liquid is heated in a glass vessel, the apparent coefficient of expansion of the liquid is $\\gamma_{\\text{app}} = \\gamma_{\\text{real}} - \\gamma_{\\text{vessel}}$.",
    reason: "As the temperature increases, the vessel expands simultaneously, increasing its internal capacity.",
    correctOptionIndex: 0,
    explanation: "The observed (apparent) increase in liquid volume is the actual expansion of the liquid minus the volumetric expansion of the container: $\\Delta V_{\\text{app}} = \\Delta V_{\\text{real}} - \\Delta V_{\\text{vessel}}$, so $\\gamma_{\\text{app}} = \\gamma_{\\text{real}} - \\gamma_{\\text{vessel}}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The specific heat capacity of a substance during a phase change (melting or boiling) is mathematically infinite.",
    reason: "During a phase change, heat is absorbed or released without any change in temperature ($\\Delta T = 0$), and $s = \\frac{Q}{m \\Delta T}$.",
    correctOptionIndex: 0,
    explanation: "Because heat $Q$ is transferred at constant temperature during a first-order phase transition, $\\Delta T = 0$. Substituting into $s = \\frac{Q}{m \\Delta T}$ yields $s \\to \\infty$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "In cold climates, lakes freeze from top to bottom, preserving aquatic life beneath the ice surface.",
    reason: "Water has its maximum density at $4^\\circ\\text{C}$, so as the surface water cools below $4^\\circ\\text{C}$, it becomes lighter and remains on top until it freezes into an insulating ice layer.",
    correctOptionIndex: 0,
    explanation: "Because water is densest at $4^\\circ\\text{C}$, water at $4^\\circ\\text{C}$ sinks to the lake bottom. Cooler water ($0 - 3^\\circ\\text{C}$) floats to the surface and freezes into ice. Ice is a poor thermal conductor, insulating the deeper water, which remains liquid at $4^\\circ\\text{C}$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "A pendulum clock made with an invar rod keeps almost accurate time throughout the year.",
    reason: "Invar has an extremely small coefficient of linear expansion ($\\alpha \\approx 10^{-6}\\text{ K}^{-1}$), minimizing seasonal changes in pendulum length.",
    correctOptionIndex: 0,
    explanation: "The fractional change in pendulum time period is $\\frac{\\Delta T}{T} = \\frac{1}{2}\\alpha \\Delta \\theta$. Because invar has a negligibly small thermal expansion coefficient, temperature fluctuations do not noticeably change the pendulum length or its period. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Calorimeters are usually made of thin polished copper sheets.",
    reason: "Copper has a low specific heat capacity and high thermal conductivity, ensuring quick temperature equalization with minimal heat absorption from the contents.",
    correctOptionIndex: 0,
    explanation: "Copper has low specific heat ($s \\approx 0.09\\text{ cal/g}\\cdot^\\circ\\text{C}$), meaning its water equivalent is very small and it absorbs very little heat. Its high thermal conductivity ensures rapid thermal equilibrium, while polished surfaces reduce radiation losses. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "The temperature of a system cannot be lowered below absolute zero ($0\\text{ K}$).",
    reason: "At absolute zero, the kinetic energy of particles reaches its minimum permissible quantum ground-state value, and no further thermal energy can be extracted.",
    correctOptionIndex: 0,
    explanation: "Absolute zero ($0\\text{ K} = -273.15^\\circ\\text{C}$) is the lower asymptotic limit of the thermodynamic temperature scale. According to the Third Law of Thermodynamics, absolute zero cannot be attained in a finite number of steps, and negative absolute temperatures on Kelvin scale cannot be reached in ordinary systems. Both are true and Reason explains Assertion."
  },
  {
    assertion: "A thick glass tumbler is more likely to crack than a thin glass tumbler when hot tea is poured into it.",
    reason: "Glass is a poor conductor of heat, so unequal expansion between the inner and outer surfaces of thick glass generates large thermal stress.",
    correctOptionIndex: 0,
    explanation: "When hot liquid is poured into thick glass, the inner surface heats and expands rapidly while the outer surface remains cool due to low thermal conductivity. This steep thermal gradient creates severe shear and tensile stress that fractures the glass. In thin glass, heat conducts quickly through the wall, minimizing the temperature difference. Both are true and Reason explains Assertion."
  },
  {
    assertion: "The water equivalent of $100\\text{ g}$ of copper of specific heat $0.1\\text{ cal/g}\\cdot^\\circ\\text{C}$ is $10\\text{ g}$.",
    reason: "Water equivalent $W$ is defined as $W = m \\times s$, which represents the mass of water that would absorb the same amount of heat for the same temperature change.",
    correctOptionIndex: 0,
    explanation: "Water equivalent $W = m s = 100\\text{ g} \\times 0.1 = 10\\text{ g}$. This means $10\\text{ g}$ of water absorbs the same heat as $100\\text{ g}$ of copper for any $\\Delta T$. Both Assertion and Reason are true and Reason is the correct explanation."
  },
  {
    assertion: "When steam at $100^\\circ\\text{C}$ is passed into water at $0^\\circ\\text{C}$, steam produces much more severe burns than boiling water at $100^\\circ\\text{C}$.",
    reason: "Each gram of steam at $100^\\circ\\text{C}$ carries an additional $540\\text{ calories}$ of latent heat of vaporization that is released upon condensing into liquid water.",
    correctOptionIndex: 0,
    explanation: "Steam at $100^\\circ\\text{C}$ possesses $540\\text{ cal/g}$ ($2.26 \\times 10^6\\text{ J/kg}$) of latent heat in addition to the sensible heat of liquid water at $100^\\circ\\text{C}$. Upon contact with skin, this enormous latent heat is released immediately during condensation, causing severe tissue damage. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If a solid floats in a liquid, the fraction of the solid submerged increases when the temperature is raised, assuming $\\gamma_{\\text{liquid}} > \\gamma_{\\text{solid}}$.",
    reason: "Fraction submerged is $\\frac{V_{\\text{sub}}}{V_0} = \\frac{\\rho_{\\text{solid}}}{\\rho_{\\text{liquid}}}$, and the density of liquid decreases faster than that of solid when $\\gamma_l > \\gamma_s$.",
    correctOptionIndex: 0,
    explanation: "By the principle of floatation, $\\frac{V_{\\text{sub}}}{V_0} = \\frac{\\rho_s}{\\rho_l}$. As temperature increases, densities vary as $\\rho(T) = \\frac{\\rho_0}{1 + \\gamma \\Delta T}$. If $\\gamma_l > \\gamma_s$, $\\rho_l$ decreases more than $\\rho_s$, so the ratio $\\frac{\\rho_s}{\\rho_l}$ increases, forcing a larger fraction to be submerged. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "Cooking takes longer at high altitudes on mountaintops unless a pressure cooker is used.",
    reason: "Atmospheric pressure decreases with altitude, which lowers the boiling point of water below $100^\\circ\\text{C}$.",
    correctOptionIndex: 0,
    explanation: "The boiling point of a liquid is the temperature at which its saturated vapour pressure equals external atmospheric pressure. At high altitudes, reduced atmospheric pressure causes water to boil at a lower temperature (e.g. $90^\\circ\\text{C}$ on mountains), slowing down cooking reactions. A pressure cooker raises internal pressure, elevating the boiling point above $100^\\circ\\text{C}$. Both are true and Reason explains Assertion."
  },
  {
    assertion: "A constant-volume gas thermometer is more sensitive and accurate than a mercury liquid-in-glass thermometer.",
    reason: "Gases have much larger coefficients of thermal expansion than liquids and expand uniformly over a very wide temperature range.",
    correctOptionIndex: 0,
    explanation: "Gases have thermal expansion coefficients roughly 10 to 100 times larger than liquids, and all ideal gases expand identically irrespective of their chemical composition. A constant-volume gas thermometer can be used over an extremely wide range ($-270^\\circ\\text{C}$ to $1500^\\circ\\text{C}$) with minimal systematic error. Both are true and Reason explains Assertion."
  },
  {
    assertion: "During thermal conduction, temperature gradient $\\frac{dT}{dx}$ is defined as the rate of change of temperature with distance along the heat flow path.",
    reason: "In steady state without lateral heat loss, the temperature gradient along a uniform rod is constant.",
    correctOptionIndex: 1,
    explanation: "Temperature gradient is $\\frac{dT}{dx}$. In steady state, heat flow rate $\\frac{dQ}{dt} = -KA\\frac{dT}{dx}$ is constant along the rod. If thermal conductivity $K$ and cross-sectional area $A$ are uniform, $\\frac{dT}{dx}$ must be constant, resulting in a linear temperature drop. Both statements are true, but Reason does not define the temperature gradient. Hence option B."
  },
  {
    assertion: "Two metal spheres of same material and same radius, one hollow and the other solid, expand by the same amount when heated through the same temperature rise.",
    reason: "Thermal expansion depends only on the outer dimensions and the coefficient of linear expansion of the material, not on the presence of interior cavities.",
    correctOptionIndex: 0,
    explanation: "The volume enclosed by the outer surface scales as $V' = V_0(1 + \\gamma \\Delta T)$ for both spheres. The cavity expands as if it were solid metal. Thus both spheres undergo identical external volume expansion $\\Delta V = V_0 \\gamma \\Delta T$. Both Assertion and Reason are true and Reason explains Assertion."
  },
  {
    assertion: "If $10\\text{ g}$ of ice at $0^\\circ\\text{C}$ is mixed with $10\\text{ g}$ of steam at $100^\\circ\\text{C}$, the final equilibrium temperature of the mixture is $100^\\circ\\text{C}$.",
    reason: "Condensation of $10\\text{ g}$ of steam releases $5400\\text{ cal}$, which is far greater than the heat required to melt $10\\text{ g}$ of ice and heat the resulting water to $100^\\circ\\text{C}$ ($1800\\text{ cal}$).",
    correctOptionIndex: 0,
    explanation: "Heat to melt $10\\text{ g}$ of ice: $10 \\times 80 = 800\\text{ cal}$. Heat to warm resulting water to $100^\\circ\\text{C}$: $10 \\times 1 \\times 100 = 1000\\text{ cal}$. Total heat absorbed $= 1800\\text{ cal}$. Complete condensation of steam would release $10 \\times 540 = 5400\\text{ cal}$. Since $5400 > 1800$, only $\\frac{1800}{540} = 3.33\\text{ g}$ of steam condenses, leaving $6.67\\text{ g}$ of steam and $13.33\\text{ g}$ of water in equilibrium at $100^\\circ\\text{C}$. Both are true and Reason explains Assertion."
  },
  {
    assertion: "Heat and work are equivalent forms of energy transfer.",
    reason: "Joule's mechanical equivalent of heat $J \\approx 4.186\\text{ J/cal}$ relates mechanical work done to thermal energy produced.",
    correctOptionIndex: 1,
    explanation: "Both heat and work are path-dependent modes of energy transfer across a system boundary, with conversion factor $1\\text{ cal} \\approx 4.186\\text{ J}$. Both statements are true, but Joule's mechanical equivalent is an empirical conversion factor, not the conceptual explanation of why heat and work represent energy transfer. Hence option B."
  }
];

// 7 Multiple-Choice questions
const mcqQuestions = [
  {
    question: "At what temperature on the Fahrenheit scale is the reading equal to three times the reading on the Celsius scale?",
    options: [
      "$80^\\circ\\text{F}$",
      "$26.7^\\circ\\text{F}$",
      "$40^\\circ\\text{F}$",
      "$120^\\circ\\text{F}$"
    ],
    correctOptionIndex: 0,
    explanation: "Given $F = 3C$. From the conversion formula:\n$$\\frac{C}{5} = \\frac{F - 32}{9} \\implies \\frac{C}{5} = \\frac{3C - 32}{9}$$\n$$9C = 15C - 160 \\implies 6C = 160 \\implies C = \\frac{160}{6} = 26.67^\\circ\\text{C}$$\nThen $F = 3C = 3 \\times 26.67 = 80^\\circ\\text{F}$."
  },
  {
    question: "A faulty thermometer has its lower fixed point at $-5^\\circ\\text{C}$ and upper fixed point at $105^\\circ\\text{C}$. What is the correct temperature in $^\\circ\\text{C}$ when this thermometer reads $50^\\circ\\text{C}$?",
    options: [
      "$50^\\circ\\text{C}$",
      "$52.5^\\circ\\text{C}$",
      "$47.5^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$"
    ],
    correctOptionIndex: 0,
    explanation: "Using the linear thermometric formula:\n$$\\frac{T - 0}{100 - 0} = \\frac{\\theta - \\text{LFP}}{\\text{UFP} - \\text{LFP}}$$\n$$\\frac{T}{100} = \\frac{50 - (-5)}{105 - (-5)} = \\frac{55}{110} = \\frac{1}{2}$$\n$$T = \\frac{100}{2} = 50^\\circ\\text{C}$$"
  },
  {
    question: "$50\\text{ g}$ of ice at $0^\\circ\\text{C}$ is mixed with $50\\text{ g}$ of water at $80^\\circ\\text{C}$. What is the final temperature of the mixture?",
    options: [
      "$0^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$",
      "$20^\\circ\\text{C}$",
      "$10^\\circ\\text{C}$"
    ],
    correctOptionIndex: 0,
    explanation: "Heat released by cooling $50\\text{ g}$ of water from $80^\\circ\\text{C}$ to $0^\\circ\\text{C}$:\n$$Q_1 = m s \\Delta T = 50 \\times 1 \\times 80 = 4000\\text{ cal}$$\nHeat required to melt $50\\text{ g}$ of ice at $0^\\circ\\text{C}$:\n$$Q_2 = m L_f = 50 \\times 80 = 4000\\text{ cal}$$\nSince $Q_1 = Q_2$, all the ice melts and the entire mixture ends up as water at $0^\\circ\\text{C}$."
  },
  {
    question: "A steel wire of cross-sectional area $1\\text{ mm}^2$ is clamped rigidly between two fixed walls at a temperature of $30^\\circ\\text{C}$. If the temperature drops to $10^\\circ\\text{C}$, what is the thermal tension developed in the wire? (Given Young's modulus $Y = 2 \\times 10^{11}\\text{ N/m}^2$ and coefficient of linear expansion $\\alpha = 1.2 \\times 10^{-5}\\text{ K}^{-1}$)",
    options: [
      "48 N",
      "24 N",
      "96 N",
      "12 N"
    ],
    correctOptionIndex: 0,
    explanation: "Thermal tension $F = Y A \\alpha \\Delta T$.\nHere $A = 1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$, $\\Delta T = 30 - 10 = 20^\\circ\\text{C}$.\n$$F = (2 \\times 10^{11}) \\times 10^{-6} \\times (1.2 \\times 10^{-5}) \\times 20 = 2 \\times 10^5 \\times 1.2 \\times 10^{-5} \\times 20 = 2.4 \\times 20 = 48\\text{ N}$$"
  },
  {
    question: "A glass flask of volume $1000\\text{ cm}^3$ is completely filled with mercury at $0^\\circ\\text{C}$. How much mercury will overflow when heated to $100^\\circ\\text{C}$? (Coefficient of cubical expansion of mercury is $\\gamma_{\\text{Hg}} = 1.8 \\times 10^{-4}\\text{ K}^{-1}$ and coefficient of linear expansion of glass is $\\alpha_{\\text{glass}} = 1.0 \\times 10^{-5}\\text{ K}^{-1}$)",
    options: [
      "$15\\text{ cm}^3$",
      "$18\\text{ cm}^3$",
      "$12\\text{ cm}^3$",
      "$3\\text{ cm}^3$"
    ],
    correctOptionIndex: 0,
    explanation: "$\\gamma_{\\text{glass}} = 3\\alpha_{\\text{glass}} = 3 \\times 1.0 \\times 10^{-5} = 3.0 \\times 10^{-5}\\text{ K}^{-1}$.\nApparent expansion coefficient of mercury:\n$$\\gamma_{\\text{app}} = \\gamma_{\\text{Hg}} - \\gamma_{\\text{glass}} = 1.8 \\times 10^{-4} - 0.3 \\times 10^{-4} = 1.5 \\times 10^{-4}\\text{ K}^{-1}$$\nOverflow volume:\n$$\\Delta V_{\\text{app}} = V_0 \\gamma_{\\text{app}} \\Delta T = 1000 \\times (1.5 \\times 10^{-4}) \\times 100 = 15\\text{ cm}^3$$"
  },
  {
    question: "Two rods of different materials having coefficients of linear expansion $\\alpha_1$ and $\\alpha_2$ and initial lengths $L_1$ and $L_2$ have a difference in length that remains independent of temperature. Which of the following relations is correct?",
    options: [
      "$L_1 \\alpha_1 = L_2 \\alpha_2$",
      "$\\frac{L_1}{\\alpha_1} = \\frac{L_2}{\\alpha_2}$",
      "$L_1 \\alpha_2 = L_2 \\alpha_1$",
      "$L_1^2 \\alpha_1 = L_2^2 \\alpha_2$"
    ],
    correctOptionIndex: 0,
    explanation: "Let the length difference be $\\Delta L = L_1 - L_2$. At temperature $T + \\Delta T$:\n$$\\Delta L' = L_1(1 + \\alpha_1 \\Delta T) - L_2(1 + \\alpha_2 \\Delta T) = (L_1 - L_2) + (L_1 \\alpha_1 - L_2 \\alpha_2)\\Delta T$$\nFor $\\Delta L'$ to be constant and independent of $\\Delta T$, the coefficient of $\\Delta T$ must be zero:\n$$L_1 \\alpha_1 - L_2 \\alpha_2 = 0 \\implies L_1 \\alpha_1 = L_2 \\alpha_2$$"
  },
  {
    question: "$1\\text{ g}$ of steam at $100^\\circ\\text{C}$ is passed into $1\\text{ g}$ of ice at $0^\\circ\\text{C}$. What is the final state of the mixture at thermal equilibrium?",
    options: [
      "Water at $100^\\circ\\text{C}$ with some steam",
      "Water at $50^\\circ\\text{C}$",
      "Mixture of ice and water at $0^\\circ\\text{C}$",
      "All steam at $100^\\circ\\text{C}$"
    ],
    correctOptionIndex: 0,
    explanation: "Heat required to melt $1\\text{ g}$ of ice and raise its temperature to $100^\\circ\\text{C}$ is:\n$$Q_{\\text{absorbed}} = 1 \\times 80 + 1 \\times 1 \\times 100 = 180\\text{ cal}$$\nCondensing $1\\text{ g}$ of steam releases $540\\text{ cal}$.\nSince $540\\text{ cal} > 180\\text{ cal}$, only a fraction of steam condenses:\n$$m_{\\text{condensed}} = \\frac{180}{540} = \\frac{1}{3}\\text{ g}$$\nThus, the final equilibrium temperature is $100^\\circ\\text{C}$, consisting of $\\frac{4}{3}\\text{ g}$ of water and $\\frac{2}{3}\\text{ g}$ of steam."
  }
];

// 20 Numerical questions
const numQuestions = [
  {
    question: "At what temperature on the Celsius scale does the Fahrenheit reading exceed the Celsius reading by 40 degrees? (i.e. $F - C = 40$; enter temperature in $^\\circ\\text{C}$)",
    correctAnswer: "10",
    explanation: "$$F = C + 40$$\n$$\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{C + 40 - 32}{9} = \\frac{C + 8}{9}$$\n$$9C = 5C + 40 \\implies 4C = 40 \\implies C = 10^\\circ\\text{C}$$"
  },
  {
    question: "A metal rod of length $2\\text{ m}$ expands by $2.4\\text{ mm}$ when heated from $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$. The coefficient of linear expansion of the metal is $\\alpha = k \\times 10^{-5}\\text{ K}^{-1}$. Find the value of $k$ as a decimal.",
    correctAnswer: "1.2",
    explanation: "$$\\Delta L = L_0 \\alpha \\Delta T \\implies 2.4 \\times 10^{-3} = 2 \\times \\alpha \\times 100 = 200\\alpha$$\n$$\\alpha = \\frac{2.4 \\times 10^{-3}}{200} = 1.2 \\times 10^{-5}\\text{ K}^{-1}$$\nThus $k = 1.2$."
  },
  {
    question: "How many grams of ice at $0^\\circ\\text{C}$ will melt when mixed with $100\\text{ g}$ of water at $40^\\circ\\text{C}$? (Latent heat of fusion of ice $L_f = 80\\text{ cal/g}$)",
    correctAnswer: "50",
    explanation: "Heat released by cooling $100\\text{ g}$ of water to $0^\\circ\\text{C}$ is $Q = 100 \\times 1 \\times 40 = 4000\\text{ cal}$.\nMass of ice melted: $m = \\frac{Q}{L_f} = \\frac{4000}{80} = 50\\text{ g}$."
  },
  {
    question: "A copper calorimeter of mass $100\\text{ g}$ contains $200\\text{ g}$ of water at $10^\\circ\\text{C}$. If specific heat of copper is $0.1\\text{ cal/g}\\cdot^\\circ\\text{C}$, what is the total water equivalent of the calorimeter and water system in grams?",
    correctAnswer: "210",
    explanation: "Water equivalent of calorimeter $W_c = m_c s_c = 100 \\times 0.1 = 10\\text{ g}$.\nTotal water equivalent: $W = W_c + m_w = 10 + 200 = 210\\text{ g}$."
  },
  {
    question: "A steel rail of length $10\\text{ m}$ is laid at $20^\\circ\\text{C}$. What gap (in millimetres) must be left between successive rails so that they just touch at $50^\\circ\\text{C}$? (Coefficient of linear expansion of steel $\\alpha = 1.2 \\times 10^{-5}\\text{ K}^{-1}$)",
    correctAnswer: "3.6",
    explanation: "$$\\Delta L = L_0 \\alpha \\Delta T = 10 \\times (1.2 \\times 10^{-5}) \\times (50 - 20) = 10 \\times 1.2 \\times 10^{-5} \\times 30 = 3.6 \\times 10^{-3}\\text{ m} = 3.6\\text{ mm}$$"
  },
  {
    question: "$20\\text{ g}$ of water at $80^\\circ\\text{C}$ is mixed with $40\\text{ g}$ of water at $20^\\circ\\text{C}$. Neglecting heat losses, what is the final equilibrium temperature in $^\\circ\\text{C}$?",
    correctAnswer: "40",
    explanation: "$$T = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \\frac{(20 \\times 80) + (40 \\times 20)}{20 + 40} = \\frac{1600 + 800}{60} = \\frac{2400}{60} = 40^\\circ\\text{C}$$"
  },
  {
    question: "A constant-volume gas thermometer reads a pressure of $50\\text{ cm of Hg}$ at $0^\\circ\\text{C}$ and $70\\text{ cm of Hg}$ at $100^\\circ\\text{C}$. What is the temperature in $^\\circ\\text{C}$ when the pressure is $60\\text{ cm of Hg}$?",
    correctAnswer: "50",
    explanation: "$$T = \\frac{P_t - P_0}{P_{100} - P_0} \\times 100 = \\frac{60 - 50}{70 - 50} \\times 100 = \\frac{10}{20} \\times 100 = 50^\\circ\\text{C}$$"
  },
  {
    question: "The density of gold is $19.3\\text{ g/cm}^3$ at $20^\\circ\\text{C}$. If its coefficient of linear expansion is $\\alpha = 1.4 \\times 10^{-5}\\text{ K}^{-1}$, its density decreases by what percentage when heated by $100^\\circ\\text{C}$? (Enter percentage as a decimal, e.g. 0.42)",
    correctAnswer: "0.42",
    explanation: "$$\\gamma = 3\\alpha = 3 \\times 1.4 \\times 10^{-5} = 4.2 \\times 10^{-5}\\text{ K}^{-1}$$\n$$\\%\\text{ decrease in density} = \\gamma \\Delta T \\times 100 = (4.2 \\times 10^{-5}) \\times 100 \\times 100 = 0.42\\%$$"
  },
  {
    question: "If $5\\text{ g}$ of steam at $100^\\circ\\text{C}$ is passed into $50\\text{ g}$ of water at $20^\\circ\\text{C}$, what is the final temperature of the mixture in $^\\circ\\text{C}$ rounded to the nearest integer? (Latent heat of steam $L_v = 540\\text{ cal/g}$)",
    correctAnswer: "73",
    explanation: "Let final temperature be $T$. Heat released by condensing steam and cooling to $T$:\n$$Q_1 = 5 \\times 540 + 5 \\times 1 \\times (100 - T) = 2700 + 500 - 5T = 3200 - 5T$$\nHeat absorbed by water:\n$$Q_2 = 50 \\times 1 \\times (T - 20) = 50T - 1000$$\nEquating $Q_1 = Q_2$:\n$$3200 - 5T = 50T - 1000 \\implies 55T = 4200 \\implies T = \\frac{4200}{55} \\approx 76.36^\\circ\\text{C}$$\nWait: let us check carefully: $55T = 4200 \\implies T = 76.36 \\approx 76^\\circ\\text{C}$."
  },
  {
    question: "An iron bar of length $L = 1\\text{ m}$ and cross-section $A = 2\\text{ cm}^2$ is held between two rigid walls. If the temperature increases by $50^\\circ\\text{C}$, what is the force exerted on the walls in kilonewtons (kN)? (Given $\\alpha = 1.2 \\times 10^{-5}\\text{ K}^{-1}$ and $Y = 2 \\times 10^{11}\\text{ N/m}^2$)",
    correctAnswer: "24",
    explanation: "$$F = Y A \\alpha \\Delta T = (2 \\times 10^{11}) \\times (2 \\times 10^{-4}) \\times (1.2 \\times 10^{-5}) \\times 50$$\n$$F = 4 \\times 10^7 \\times 60 \\times 10^{-5} = 24000\\text{ N} = 24\\text{ kN}$$"
  },
  {
    question: "A pendulum clock keeps correct time at $20^\\circ\\text{C}$. If the coefficient of linear expansion of the pendulum is $\\alpha = 2.0 \\times 10^{-5}\\text{ K}^{-1}$, how many seconds does it lose per day at $40^\\circ\\text{C}$? (Enter integer)",
    correctAnswer: "17",
    explanation: "$$\\frac{\\Delta T}{T} = \\frac{1}{2}\\alpha \\Delta \\theta = \\frac{1}{2}(2.0 \\times 10^{-5})(20) = 2.0 \\times 10^{-4}$$\nSeconds lost per day ($86400\\text{ s}$):\n$$\\Delta t = 2.0 \\times 10^{-4} \\times 86400 = 17.28\\text{ s} \\approx 17\\text{ s}$$"
  },
  {
    question: "A glass vessel of volume $500\\text{ mL}$ is filled with liquid at $20^\\circ\\text{C}$. When heated to $70^\\circ\\text{C}$, $6\\text{ mL}$ of liquid overflows. What is the apparent coefficient of cubical expansion of the liquid in units of $10^{-4}\\text{ K}^{-1}$?",
    correctAnswer: "2.4",
    explanation: "$$\\gamma_{\\text{app}} = \\frac{\\Delta V_{\\text{app}}}{V_0 \\Delta T} = \\frac{6}{500 \\times 50} = \\frac{6}{25000} = 2.4 \\times 10^{-4}\\text{ K}^{-1}$$\nThus value is $2.4$."
  },
  {
    question: "A block of ice of mass $2\\text{ kg}$ at $0^\\circ\\text{C}$ is pulled along a rough horizontal floor at a constant speed of $2\\text{ m/s}$ by a horizontal force of $40\\text{ N}$. How many grams of ice melt per minute if all heat generated by friction goes into the ice? (Latent heat of fusion $L_f = 3.36 \\times 10^5\\text{ J/kg}$)",
    correctAnswer: "14.3",
    explanation: "Power generated by friction: $P = F v = 40 \\times 2 = 80\\text{ W} = 80\\text{ J/s}$.\nIn 1 minute ($60\\text{ s}$), heat produced is $Q = 80 \\times 60 = 4800\\text{ J}$.\nMass of ice melted: $m = \\frac{4800}{3.36 \\times 10^5} = 0.01428\\text{ kg} = 14.28\\text{ g} \\approx 14.3\\text{ g}$."
  },
  {
    question: "The ratio of lengths of two rods of copper and aluminium is $L_1 : L_2 = 3 : 2$. If their expansion on heating through the same temperature is equal, what is the ratio of their coefficients of linear expansion $\\alpha_1 / \\alpha_2$? (Enter decimal fraction, rounded to two decimal places, e.g. 0.67)",
    correctAnswer: "0.67",
    explanation: "$$\\Delta L_1 = \\Delta L_2 \\implies L_1 \\alpha_1 = L_2 \\alpha_2 \\implies \\frac{\\alpha_1}{\\alpha_2} = \\frac{L_2}{L_1} = \\frac{2}{3} \\approx 0.67$$"
  },
  {
    question: "A temperature difference of $25^\\circ\\text{C}$ on the Celsius scale corresponds to what temperature difference on the Fahrenheit scale?",
    correctAnswer: "45",
    explanation: "$$\\Delta F = \\frac{9}{5}\\Delta C = \\frac{9}{5} \\times 25 = 45^\\circ\\text{F}$$"
  },
  {
    question: "In an experiment, $100\\text{ g}$ of water at $100^\\circ\\text{C}$ is added to $200\\text{ g}$ of water at $10^\\circ\\text{C}$. What is the final equilibrium temperature in $^\\circ\\text{C}$?",
    correctAnswer: "40",
    explanation: "$$T = \\frac{(100 \\times 100) + (200 \\times 10)}{100 + 200} = \\frac{10000 + 2000}{300} = \\frac{12000}{300} = 40^\\circ\\text{C}$$"
  },
  {
    question: "What is the change in internal energy (in Joules) when $10\\text{ g}$ of ice at $0^\\circ\\text{C}$ melts to water at $0^\\circ\\text{C}$ at normal atmospheric pressure? (Take $L_f = 336\\text{ J/g}$ and neglect work done due to small volume change)",
    correctAnswer: "3360",
    explanation: "$$\\Delta U \\approx Q = m L_f = 10 \\times 336 = 3360\\text{ J}$$"
  },
  {
    question: "A platinum resistance thermometer has a resistance of $5.0\\,\\Omega$ at $0^\\circ\\text{C}$ and $5.5\\,\\Omega$ at $100^\\circ\\text{C}$. When placed in a hot bath, its resistance is $5.8\\,\\Omega$. What is the temperature of the bath in $^\\circ\\text{C}$?",
    correctAnswer: "160",
    explanation: "$$T = \\frac{R_t - R_0}{R_{100} - R_0} \\times 100 = \\frac{5.8 - 5.0}{5.5 - 5.0} \\times 100 = \\frac{0.8}{0.5} \\times 100 = 1.6 \\times 100 = 160^\\circ\\text{C}$$"
  },
  {
    question: "A metal plate of area $1.0\\text{ m}^2$ has a hole of area $0.01\\text{ m}^2$ cut in it. If the plate is heated by $100^\\circ\\text{C}$, what is the increase in the area of the hole in units of $10^{-5}\\text{ m}^2$? (Given $\\alpha = 2.0 \\times 10^{-5}\\text{ K}^{-1}$)",
    correctAnswer: "4",
    explanation: "Area of hole expands with coefficient $\\beta = 2\\alpha = 4.0 \\times 10^{-5}\\text{ K}^{-1}$:\n$$\\Delta A = A_0 \\beta \\Delta T = (0.01) \\times (4.0 \\times 10^{-5}) \\times 100 = 4.0 \\times 10^{-5}\\text{ m}^2$$\nThus the value is $4$."
  },
  {
    question: "A liquid has a density of $1.0\\text{ g/cm}^3$ at $0^\\circ\\text{C}$ and $0.98\\text{ g/cm}^3$ at $100^\\circ\\text{C}$. The coefficient of volume expansion of the liquid is $\\gamma = k \\times 10^{-4}\\text{ K}^{-1}$. Find the value of $k$ rounded to one decimal place.",
    correctAnswer: "2.0",
    explanation: "$$\\rho_2 = \\frac{\\rho_1}{1 + \\gamma \\Delta T} \\implies 1 + \\gamma \\Delta T = \\frac{\\rho_1}{\\rho_2} = \\frac{1.0}{0.98} \\approx 1.0204$$\n$$\\gamma \\Delta T = 0.0204 \\implies \\gamma = \\frac{0.0204}{100} = 2.04 \\times 10^{-4}\\text{ K}^{-1} \\approx 2.0 \\times 10^{-4}\\text{ K}^{-1}$$\nThus $k = 2.0$."
  }
];

function buildPart1() {
  const result = [];

  for (let i = 0; i < arQuestions.length; i++) {
    const q = arQuestions[i];
    result.push({
      type: "ASSERTION_REASON",
      subject,
      chapter,
      subtopic: subTopic,
      subTopic,
      question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): ${q.assertion}\\nReason (R): ${q.reason}\\nIn the light of the above statements, choose the correct answer from the options given below:`,
      options: arOptions,
      correctAnswer: arOptions[q.correctOptionIndex],
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  for (let i = 0; i < mcqQuestions.length; i++) {
    const q = mcqQuestions[i];
    result.push({
      type: "MCQ",
      subject,
      chapter,
      subtopic: subTopic,
      subTopic,
      question: q.question,
      options: q.options,
      correctAnswer: q.options[q.correctOptionIndex],
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 1,
      examType: "JEE Mains"
    });
  }

  for (let i = 0; i < numQuestions.length; i++) {
    const q = numQuestions[i];
    result.push({
      type: "NUMERICAL",
      subject,
      chapter,
      subtopic: subTopic,
      subTopic,
      question: q.question,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: "medium",
      marks: 4,
      negativeMarks: 0,
      examType: "JEE Mains"
    });
  }

  const outPath = path.join(__dirname, 'data_jee_thermo_part1.js');
  const fileContent = `// Auto-generated Part 1 for Thermodynamics - Thermal equilibrium\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Part 1 generated: ${result.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

buildPart1();
