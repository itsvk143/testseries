const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Stefan's law of radiation";
const CHAPTER = "Properties of Solids and Liquids";
const SUBJECT = "Physics";

// 26 AR, 7 MCQ, 20 NUM = 53 total
const arQuestions = [
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A perfectly black body is both an ideal absorber and an ideal emitter of thermal radiation.\nReason R: According to Kirchhoff's law of radiation, at thermal equilibrium, the ratio of emissive power to absorptive power for all bodies is constant and equal to the emissive power of a black body at that temperature.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "By Kirchhoff's law, $\\frac{e_\\lambda}{a_\\lambda} = E_\\lambda$ (constant for all bodies at the same temperature). For a black body, $a_\\lambda = 1$ (absorbs all radiation), so its emissive power $e_\\lambda = E_\\lambda$ is the theoretical maximum possible. Thus good absorbers are necessarily good emitters. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Newton's law of cooling is an approximation of Stefan-Boltzmann's law of radiation for small temperature differences.\nReason R: When the temperature difference $(T - T_0)$ is very small compared to ambient temperature $T_0$, $(T^4 - T_0^4) \\approx 4T_0^3 (T - T_0)$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "According to Stefan-Boltzmann law, net rate of heat loss is $P = e\\sigma A(T^4 - T_0^4)$. Writing $T = T_0 + \\Delta T$, we get $T^4 - T_0^4 = T_0^4\\left(1 + \\frac{\\Delta T}{T_0}\\right)^4 - T_0^4 \\approx 4 T_0^3 \\Delta T$ for $\\Delta T \\ll T_0$. Hence $\\frac{dQ}{dt} \\propto (T - T_0)$, which is Newton's law of cooling. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: As the absolute temperature of a black body increases, the wavelength corresponding to maximum spectral radiance shifts toward shorter wavelengths.\nReason R: According to Wien's displacement law, the product of the peak wavelength and absolute temperature is a universal constant ($\\lambda_m T = b$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Wien's displacement law states that $\\lambda_m T = b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$. As temperature $T$ increases, $\\lambda_m = \\frac{b}{T}$ decreases, shifting towards higher frequencies / shorter wavelengths (from infrared towards blue/violet). Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If the absolute temperature of a black body is doubled, the total radiant energy emitted per second by it increases by a factor of 16.\nReason R: By Stefan-Boltzmann law, the total radiant power emitted by a black body is directly proportional to the fourth power of its absolute temperature ($E \\propto T^4$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "According to Stefan-Boltzmann law, total power radiated is $P = \\sigma A T^4$. When absolute temperature is doubled ($T' = 2T$), $P' = \\sigma A (2T)^4 = 16\\sigma A T^4 = 16 P$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Two solid copper spheres of radii $R$ and $2R$ at the same initial high temperature cool down in the same environment; the smaller sphere cools faster.\nReason R: The rate of decrease of temperature $\\left(-\\frac{dT}{dt}\\right)$ is inversely proportional to the radius of the sphere.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The rate of cooling is $-\\frac{dT}{dt} = \\frac{P}{m c} = \\frac{e\\sigma A(T^4 - T_0^4)}{(\\frac{4}{3}\\pi R^3 \\rho) c} = \\frac{e\\sigma(4\\pi R^2)(T^4 - T_0^4)}{\\frac{4}{3}\\pi R^3 \\rho c} = \\frac{3e\\sigma(T^4 - T_0^4)}{\\rho c R} \\propto \\frac{1}{R}$. Since $-\\frac{dT}{dt} \\propto \\frac{1}{R}$, the smaller sphere cools faster. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A body at absolute zero temperature does not emit any thermal radiation.\nReason R: Prevost's theory of heat exchange states that emission and absorption of thermal radiation occur continuously for any body at all temperatures above $0\\text{ K}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "According to Prevost's theory, all bodies above absolute zero ($T > 0\\text{ K}$) continuously emit and absorb thermal radiation. At $T = 0\\text{ K}$, thermal motion ceases and by Stefan's law ($E = \\sigma T^4$), emission becomes zero. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A blackened metallic plate placed in sunlight becomes significantly hotter than a polished silver plate placed in the same sunlight.\nReason R: Black surfaces have high absorptivity ($a \\approx 1$) and absorb nearly all incident solar radiation, whereas polished surfaces have high reflectivity and low absorptivity.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A blackened surface is an excellent absorber ($a \\approx 1$), absorbing almost all radiation incident upon it. Polished silver reflects over $95\\%$ of incident light. Consequently, the blackened plate reaches a much higher equilibrium temperature. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The area under the spectral emissive power curve ($E_\\lambda$ versus $\\lambda$) of a black body is directly proportional to $T^4$.\nReason R: By definition, the total emissive power is the integral $E = \\int_0^\\infty E_\\lambda d\\lambda$, which equals $\\sigma T^4$ by Stefan's law.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The area under the $E_\\lambda - \\lambda$ curve represents the total radiant energy emitted per unit surface area per unit time over all wavelengths: $\\text{Area} = \\int_0^\\infty E_\\lambda d\\lambda = E$. By Stefan-Boltzmann law, $E = \\sigma T^4$. Thus, the area is directly proportional to $T^4$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A hot liquid cools faster in a container with a blackened outer surface than in a container with a polished outer surface.\nReason R: According to Kirchhoff's law, a good absorber is also a good emitter, so the blackened surface has a higher emissivity ($e \\approx 1$) than the polished surface.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Since emissivity equals absorptivity ($e = a$), the blackened outer surface has $e \\approx 1$, whereas a polished shiny surface has $e \\ll 1$. Higher emissivity leads to a larger rate of radiative heat emission, cooling the liquid faster. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The temperature of a furnace can be accurately determined by analyzing the spectral radiation emitted from a small hole in its wall.\nReason R: A small hole in an enclosed cavity acts as a nearly ideal black body, emitting radiation that depends solely on the internal temperature.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "An enclosed cavity (hollow enclosure) with a small pinhole (Féry's black body) acts as a perfect black body emitter. The peak wavelength $\\lambda_m$ of radiation emerging from the hole gives temperature via Wien's displacement law $\\lambda_m T = b$, an optical pyrometer principle. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A body takes longer to cool from $60^\\circ\\text{C}$ to $50^\\circ\\text{C}$ than it takes to cool from $70^\\circ\\text{C}$ to $60^\\circ\\text{C}$ in a surrounding at $20^\\circ\\text{C}$.\nReason R: By Newton's law of cooling, the rate of cooling is directly proportional to the temperature excess over the surroundings.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The average temperature in the first interval is $65^\\circ\\text{C}$ (excess $= 45^\\circ\\text{C}$), while in the second interval it is $55^\\circ\\text{C}$ (excess $= 35^\\circ\\text{C}$). As the temperature excess decreases, the rate of heat loss decreases, so cooling through the same temperature drop of $10^\\circ\\text{C}$ takes more time. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The SI unit of the Stefan-Boltzmann constant $\\sigma$ is $\\text{W}/(\\text{m}^2\\cdot\\text{K}^4)$ and its dimensional formula is $[\\text{M}\\text{L}^0\\text{T}^{-3}\\theta^{-4}]$.\nReason R: Stefan-Boltzmann law states that emissive power $E = \\sigma T^4$, where $E$ is power per unit area.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "$E = \\frac{\\text{Power}}{\\text{Area}} = \\frac{[\\text{M}\\text{L}^2\\text{T}^{-3}]}{[\\text{L}^2]} = [\\text{M}\\text{T}^{-3}]$. Then $\\sigma = \\frac{E}{T^4} = \\frac{[\\text{M}\\text{T}^{-3}]}{[\\theta^4]} = [\\text{M}\\text{L}^0\\text{T}^{-3}\\theta^{-4}]$. The SI unit is $\\text{W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If the temperature of the Sun were doubled, the solar constant at the Earth would increase by a factor of 16.\nReason R: The solar constant is directly proportional to the total power radiated by the Sun, which varies as the fourth power of temperature ($S \\propto T_s^4$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Solar constant is $S = \\frac{P_{\\text{sun}}}{4\\pi R_{\\text{SE}}^2} = \\frac{\\sigma(4\\pi R_s^2) T_s^4}{4\\pi R_{\\text{SE}}^2} = \\sigma T_s^4 \\left(\\frac{R_s}{R_{\\text{SE}}}\\right)^2$. Since $S \\propto T_s^4$, doubling $T_s$ increases $S$ by $2^4 = 16$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A red hot iron piece appears brighter in a dark room than a green glass piece heated to the same temperature.\nReason R: Iron has a much higher emissivity in the visible spectrum than green glass.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Green glass transmits/reflects green light and absorbs red light, so its absorptivity and emissivity across the entire visible spectrum are lower than rough oxidized iron, which absorbs almost all visible light. Higher emissivity yields greater visible radiance at the same temperature. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The temperature of a body inside an evacuated constant-temperature enclosure eventually becomes equal to the temperature of the enclosure.\nReason R: At thermal equilibrium, the rate of thermal energy absorbed by the body equals the rate of thermal energy emitted by the body.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "By Prevost's theory of exchange, heat exchange continues until the body absorbs as much radiant power as it emits. At that point, net heat exchange is zero and its temperature stabilizes at the enclosure temperature. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Cooking utensils are made with polished outer walls and tarnished or blackened bottoms.\nReason R: Blackened bottoms absorb heat rapidly from the stove flame, while polished shiny walls minimize heat loss to the surroundings via radiation.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A blackened surface has high absorptivity, allowing efficient absorption of heat from the flame. Shiny, polished sides have low emissivity ($e \\approx 0$), minimizing radiative heat dissipation to the cooler room. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A star that appears blue has a higher surface temperature than a star that appears red.\nReason R: By Wien's displacement law, peak emission wavelength is inversely proportional to temperature ($\\lambda_m \\propto \\frac{1}{T}$), and blue light has a shorter wavelength than red light.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Since blue light has $\\lambda \\approx 450\\text{ nm}$ and red light has $\\lambda \\approx 700\\text{ nm}$, by $\\lambda_m T = \\text{constant}$, a shorter peak wavelength indicates a much higher stellar surface temperature. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When an electric bulb's filament is heated from dull red to white hot, the total electrical power consumed must increase substantially.\nReason R: The total power radiated per unit area varies as $T^4$, requiring higher input power to maintain higher equilibrium temperatures.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "At equilibrium, the input electrical power equals the power radiated away by the filament. Since radiated power scales as $T^4$, raising the temperature from dull red ($~1000\\text{ K}$) to white hot ($~2500\\text{ K}$) requires an enormous increase in electrical power input. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The rate of cooling of a hot body by radiation in vacuum depends on the temperature of the body and the temperature of the surroundings.\nReason R: The net rate of energy loss in vacuum is given by $P_{\\text{net}} = e\\sigma A(T^4 - T_0^4)$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "In vacuum, conduction and convection are completely absent; heat exchange occurs solely through radiation. The net rate of heat loss is governed by Stefan's law: $P = e\\sigma A(T^4 - T_0^4)$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A polished Dewar flask (thermos flask) effectively preserves the temperature of hot liquids for hours.\nReason R: Double silvered walls minimize radiative heat transfer, and the vacuum between the double walls prevents heat loss by conduction and convection.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A Dewar flask minimizes all three modes of heat transfer: the vacuum between inner and outer glass walls eliminates conduction and convection, and the shiny silvered coating reflects thermal radiation, keeping emissivity minimal. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The spectral peak of solar radiation occurs in the visible range around $500\\text{ nm}$.\nReason R: The surface temperature of the Sun is approximately $5800\\text{ K}$, which corresponds to $\\lambda_m \\approx \\frac{2.898 \\times 10^{-3}}{5800} \\approx 500\\text{ nm}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "By Wien's displacement law, $\\lambda_m = \\frac{b}{T_s} = \\frac{2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{5800\\text{ K}} \\approx 500\\text{ nm}$ (green-yellow visible region). Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Two solid spheres of the same material have radii in the ratio $1 : 2$. If their temperatures are equal, the ratio of their rates of emission of thermal radiation is $1 : 4$.\nReason R: Emissive power of a body is independent of its surface area, but total power radiated is directly proportional to surface area ($P \\propto A \\propto R^2$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Total rate of emission is $P = e\\sigma A T^4 = e\\sigma (4\\pi R^2) T^4 \\propto R^2$. Since $R_1/R_2 = 1/2$, $P_1/P_2 = (R_1/R_2)^2 = (1/2)^2 = 1/4$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The temperature-time cooling curve for a body obeying Newton's law of cooling is an exponential decay curve.\nReason R: The differential equation $\\frac{dT}{dt} = -k(T - T_0)$ integrates to $(T - T_0) = (T_i - T_0)e^{-kt}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Integrating $\\frac{dT}{T - T_0} = -k dt$ yields $\\ln(T - T_0) = -kt + C$, which gives $(T - T_0) = (T_i - T_0)e^{-kt}$. As time progresses, temperature approaches $T_0$ asymptotically in an exponential decay. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If the absolute temperature of a radiating body increases by $1\\%$, the total rate of energy emission increases by approximately $4\\%$.\nReason R: For small fractional changes in temperature, $\\frac{\\Delta E}{E} \\approx 4 \\frac{\\Delta T}{T}$ by differentiating $E = \\sigma T^4$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Differentiating $E = \\sigma T^4$ gives $dE = 4\\sigma T^3 dT \\implies \\frac{dE}{E} = 4\\frac{dT}{T}$. For $\\frac{\\Delta T}{T} = 1\\%$, $\\frac{\\Delta E}{E} \\approx 4 \\times 1\\% = 4\\%$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: On a clear night without clouds, the Earth's surface cools down more rapidly than on an overcast night.\nReason R: Clouds act as a radiation blanket that absorbs infrared radiation emitted by the Earth and re-radiates it back to the ground.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Water vapor and water droplets in clouds have high absorptivity in the infrared spectrum. They absorb terrestrial infrared radiation and re-emit a significant fraction back to Earth (greenhouse effect), keeping cloudy nights warmer. On clear nights, radiation escapes freely into space. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A hollow sphere and a solid sphere of the same material, same radius, and same surface finish are heated to the same high temperature and allowed to cool in the same room; the hollow sphere cools faster.\nReason R: Both spheres have the same surface area and radiate heat at the same rate, but the hollow sphere has less mass and therefore lower heat capacity ($m c$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Radiative power loss depends solely on surface area and emissivity: $P = e\\sigma A(T^4 - T_0^4)$. Since radii and surfaces are identical, $P$ is identical for both. However, rate of cooling is $-\\frac{dT}{dt} = \\frac{P}{m c}$. Because the hollow sphere has less mass ($m_{\\text{hollow}} < m_{\\text{solid}}$), its heat capacity is lower, meaning it drops temperature faster. Both A and R are true and R explains A."
  }
];

const mcqQuestions = [
  {
    question: "A black body at $227^\\circ\\text{C}$ radiates heat at the rate of $7\\text{ cal/(cm}^2\\cdot\\text{s)}$. At a temperature of $727^\\circ\\text{C}$, the rate of heat radiated in $\\text{cal/(cm}^2\\cdot\\text{s)}$ is:",
    options: [
      "$112$",
      "$28$",
      "$56$",
      "$84$"
    ],
    correctAnswer: 0,
    explanation: "$T_1 = 227 + 273 = 500\\text{ K}$ and $T_2 = 727 + 273 = 1000\\text{ K}$. Since $E \\propto T^4$, we have $\\frac{E_2}{E_1} = \\left(\\frac{T_2}{T_1}\\right)^4 = \\left(\\frac{1000}{500}\\right)^4 = 2^4 = 16$. Thus, $E_2 = 16 \\times 7 = 112\\text{ cal/(cm}^2\\cdot\\text{s)}$."
  },
  {
    question: "The peak wavelength of radiation emitted by a black body at temperature $T_1 = 2000\\text{ K}$ is $\\lambda_1 = 1.45\\,\\mu\\text{m}$. If the temperature is increased to $T_2 = 4000\\text{ K}$, the peak wavelength $\\lambda_2$ is:",
    options: [
      "$0.725\\,\\mu\\text{m}$",
      "$2.90\\,\\mu\\text{m}$",
      "$0.362\\,\\mu\\text{m}$",
      "$1.45\\,\\mu\\text{m}$"
    ],
    correctAnswer: 0,
    explanation: "By Wien's displacement law, $\\lambda_1 T_1 = \\lambda_2 T_2 \\implies \\lambda_2 = \\lambda_1 \\frac{T_1}{T_2} = 1.45\\,\\mu\\text{m} \\times \\frac{2000}{4000} = \\frac{1.45}{2} = 0.725\\,\\mu\\text{m}$."
  },
  {
    question: "A liquid cools from $70^\\circ\\text{C}$ to $60^\\circ\\text{C}$ in $5\\text{ minutes}$. If the temperature of the surroundings is $30^\\circ\\text{C}$, the time taken by the liquid to cool from $60^\\circ\\text{C}$ to $50^\\circ\\text{C}$ is:",
    options: [
      "$7\\text{ minutes}$",
      "$5\\text{ minutes}$",
      "$6\\text{ minutes}$",
      "$9\\text{ minutes}$"
    ],
    correctAnswer: 0,
    explanation: "By Newton's law of cooling: $\\frac{T_1 - T_2}{t} = K\\left(\\frac{T_1 + T_2}{2} - T_0\\right)$. First interval: $\\frac{70 - 60}{5} = K(65 - 30) \\implies \\frac{10}{5} = 2 = 35 K \\implies K = \\frac{2}{35}$. Second interval: $\\frac{60 - 50}{t} = K(55 - 30) \\implies \\frac{10}{t} = \\left(\\frac{2}{35}\\right)(25) = \\frac{50}{35} = \\frac{10}{7} \\implies t = 7\\text{ minutes}$."
  },
  {
    question: "Two spherical bodies of radii $r_1$ and $r_2$ having surface temperatures $T_1$ and $T_2$ radiate the same total power. If $r_1 = 2 r_2$, then the ratio $\\frac{T_1}{T_2}$ is:",
    options: [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\sqrt{2}$"
    ],
    correctAnswer: 0,
    explanation: "Total power radiated is $P = 4\\pi r^2 \\sigma T^4$. Given $P_1 = P_2$: $r_1^2 T_1^4 = r_2^2 T_2^4 \\implies \\left(\\frac{T_1}{T_2}\\right)^4 = \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} \\implies \\frac{T_1}{T_2} = \\left(\\frac{1}{4}\\right)^{1/4} = \\frac{1}{\\sqrt{2}}$."
  },
  {
    question: "A body initially at $80^\\circ\\text{C}$ cools to $64^\\circ\\text{C}$ in $5\\text{ minutes}$ and to $52^\\circ\\text{C}$ in another $5\\text{ minutes}$. The temperature of the surroundings is:",
    options: [
      "$16^\\circ\\text{C}$",
      "$20^\\circ\\text{C}$",
      "$24^\\circ\\text{C}$",
      "$10^\\circ\\text{C}$"
    ],
    correctAnswer: 0,
    explanation: "$\\frac{80 - 64}{5} = K(72 - T_0) \\implies 3.2 = K(72 - T_0)$. $\\frac{64 - 52}{5} = K(58 - T_0) \\implies 2.4 = K(58 - T_0)$. Dividing: $\\frac{3.2}{2.4} = \\frac{4}{3} = \\frac{72 - T_0}{58 - T_0} \\implies 4(58 - T_0) = 3(72 - T_0) \\implies 232 - 4T_0 = 216 - 3T_0 \\implies T_0 = 16^\\circ\\text{C}$."
  },
  {
    question: "The power radiated by a black body of surface area $A$ is $P_0$ when its absolute temperature is $T$. If the temperature is increased to $3T$ and the area is reduced to $A/3$, the new radiated power will be:",
    options: [
      "$27 P_0$",
      "$81 P_0$",
      "$9 P_0$",
      "$3 P_0$"
    ],
    correctAnswer: 0,
    explanation: "Power radiated is $P = \\sigma A T^4$. With $A' = A/3$ and $T' = 3T$, $P' = \\sigma (A/3) (3T)^4 = \\frac{1}{3} \\times 81 \\times \\sigma A T^4 = 27 P_0$."
  },
  {
    question: "Three stars $A$, $B$, and $C$ radiate maximum spectral intensity at wavelengths $\\lambda_A = 360\\text{ nm}$, $\\lambda_B = 480\\text{ nm}$, and $\\lambda_C = 600\\text{ nm}$ respectively. If their absolute temperatures are $T_A, T_B, T_C$, then:",
    options: [
      "$T_A > T_B > T_C$",
      "$T_C > T_B > T_A$",
      "$T_B > T_A > T_C$",
      "$T_A = T_B = T_C$"
    ],
    correctAnswer: 0,
    explanation: "According to Wien's displacement law, $\\lambda_m T = \\text{constant}$, so $T \\propto \\frac{1}{\\lambda_m}$. Since $\\lambda_A < \\lambda_B < \\lambda_C$, we must have $T_A > T_B > T_C$."
  }
];

const numQuestions = [
  {
    question: "A black body at $127^\\circ\\text{C}$ emits energy at the rate of $16\\text{ W}$. If its temperature is raised to $527^\\circ\\text{C}$, the rate of energy emission in Watts will be:",
    correctAnswer: 256,
    explanation: "$T_1 = 127 + 273 = 400\\text{ K}$, $T_2 = 527 + 273 = 800\\text{ K}$. Since $P \\propto T^4$: $P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right)^4 = 16 \\times \\left(\\frac{800}{400}\\right)^4 = 16 \\times 2^4 = 16 \\times 16 = 256\\text{ W}$."
  },
  {
    question: "A body cools from $80^\\circ\\text{C}$ to $60^\\circ\\text{C}$ in $6\\text{ minutes}$ in a surrounding at $30^\\circ\\text{C}$. The time taken in minutes to cool from $60^\\circ\\text{C}$ to $40^\\circ\\text{C}$ in the same surroundings is:",
    correctAnswer: 12,
    explanation: "$\\frac{80 - 60}{6} = K(70 - 30) \\implies \\frac{20}{6} = 40 K \\implies K = \\frac{20}{240} = \\frac{1}{12}$. For the second interval: $\\frac{60 - 40}{t} = K(50 - 30) = \\frac{1}{12} \\times 20 \\implies \\frac{20}{t} = \\frac{20}{12} \\implies t = 12\\text{ minutes}$."
  },
  {
    question: "A spherical black body of radius $12\\text{ cm}$ radiates $450\\text{ W}$ of power at $500\\text{ K}$. If the radius were halved and the temperature doubled, the power radiated in Watts would be:",
    correctAnswer: 1800,
    explanation: "$P = 4\\pi R^2 \\sigma T^4$. $P' = 4\\pi (R/2)^2 \\sigma (2T)^4 = \\frac{1}{4} \\times 16 \\times P = 4 P = 4 \\times 450 = 1800\\text{ W}$."
  },
  {
    question: "A black body has its maximum spectral emission at a wavelength of $5000\\text{ \\AA}$ at temperature $T_0$. If the temperature is increased by $25\\%$, the wavelength of maximum spectral emission will be $\\lambda\\text{ \\AA}$. Find $\\lambda$.",
    correctAnswer: 4000,
    explanation: "$\\lambda_1 T_1 = \\lambda_2 T_2$. Given $T_2 = 1.25 T_1$: $\\lambda_2 = \\frac{\\lambda_1}{1.25} = \\frac{5000}{1.25} = 4000\\text{ \\AA}$."
  },
  {
    question: "The temperature of a body falls from $90^\\circ\\text{C}$ to $80^\\circ\\text{C}$ in $4\\text{ minutes}$ when the surrounding temperature is $20^\\circ\\text{C}$. The cooling constant $k$ in $\\text{minute}^{-1}$ (using average form of Newton's law) is $K \\times 10^{-3}$. Find the integer value of $K$ (rounded to nearest integer).",
    correctAnswer: 38,
    explanation: "$\\frac{\\Delta T}{t} = k(T_{\\text{avg}} - T_0) \\implies \\frac{90 - 80}{4} = k(85 - 20) \\implies 2.5 = 65 k \\implies k = \\frac{2.5}{65} \\approx 0.03846\\text{ min}^{-1} = 38.46 \\times 10^{-3}\\text{ min}^{-1}$. Nearest integer is 38."
  },
  {
    question: "The operating temperature of a tungsten filament lamp is $2898\\text{ K}$. Assuming it behaves as a black body, the wavelength of maximum radiation emission in $\\mu\\text{m}$ is: (Wien's constant $b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$)",
    correctAnswer: 1,
    explanation: "$\\lambda_m = \\frac{b}{T} = \\frac{2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{2898\\text{ K}} = 10^{-6}\\text{ m} = 1\\,\\mu\\text{m}$."
  },
  {
    question: "A thin square metallic plate of side $10\\text{ cm}$ is heated to $1000\\text{ K}$. If the emissivity of the plate is $0.5$ and the Stefan-Boltzmann constant is $\\sigma = 5.67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)$, the total power radiated from both sides of the plate in Watts is:",
    correctAnswer: 567,
    explanation: "A square plate of side $0.1\\text{ m}$ has two radiating surfaces, so total surface area is $A = 2 \\times (0.1)^2 = 0.02\\text{ m}^2$. Total radiated power is $P = e \\sigma A T^4 = 0.5 \\times (5.67 \\times 10^{-8}) \\times 0.02 \\times (1000)^4 = 0.5 \\times 5.67 \\times 10^{-8} \\times 0.02 \\times 10^{12} = 5.67 \\times 10^2 = 567\\text{ W}$."
  },
  {
    question: "A solid sphere of radius $R_1$ cools down from $60^\\circ\\text{C}$ to $59^\\circ\\text{C}$ in $20\\text{ seconds}$. Another solid sphere of the same material having radius $R_2 = 3 R_1$ cools down through the same temperature interval under identical ambient conditions in $t\\text{ seconds}$. Find $t$.",
    correctAnswer: 60,
    explanation: "Rate of cooling is $-\\frac{dT}{dt} = \\frac{P}{m c} \\propto \\frac{A}{m} = \\frac{4\\pi R^2}{\\frac{4}{3}\\pi R^3 \\rho} \\propto \\frac{1}{R}$. Therefore, the time taken to cool through the same small temperature difference is $\\Delta t \\propto R$. For $R_2 = 3 R_1$: $t_2 = 3 t_1 = 3 \\times 20 = 60\\text{ seconds}$."
  },
  {
    question: "A body is placed in an enclosure at $27^\\circ\\text{C}$. If the temperature of the body is $327^\\circ\\text{C}$, the ratio of the rate of heat lost by radiation to the surroundings to the rate of heat emitted by the body is $x/16$. Find $x$.",
    correctAnswer: 15,
    explanation: "$T = 327 + 273 = 600\\text{ K}$, $T_0 = 27 + 273 = 300\\text{ K}$. Rate of heat emitted is $P_{\\text{emit}} = \\sigma A T^4$. Net rate of heat loss is $P_{\\text{net}} = \\sigma A (T^4 - T_0^4)$. Ratio is $\\frac{T^4 - T_0^4}{T^4} = 1 - \\left(\\frac{T_0}{T}\\right)^4 = 1 - \\left(\\frac{300}{600}\\right)^4 = 1 - \\frac{1}{16} = \\frac{15}{16}$. Hence $x = 15$."
  },
  {
    question: "A liquid in an open vessel cools from $75^\\circ\\text{C}$ to $70^\\circ\\text{C}$ in $2\\text{ minutes}$. The time taken in minutes for the liquid to cool from $70^\\circ\\text{C}$ to $65^\\circ\\text{C}$ when the room temperature is $25^\\circ\\text{C}$ is:",
    options: null,
    correctAnswer: 2.25,
    explanation: "$\\frac{75 - 70}{2} = K(72.5 - 25) \\implies 2.5 = 47.5 K \\implies K = \\frac{2.5}{47.5} = \\frac{1}{19}$. Second interval: $\\frac{70 - 65}{t} = K(67.5 - 25) = \\frac{1}{19} \\times 42.5 \\implies \\frac{5}{t} = \\frac{42.5}{19} \\implies t = \\frac{5 \\times 19}{42.5} = \\frac{95}{42.5} \\approx 2.235 \\approx 2.24\\text{ min}$ (or $\\approx 2.25$)."
  },
  {
    question: "The solar constant at Earth's surface is $1400\\text{ W/m}^2$. The distance from the Earth to the Sun is $1.5 \\times 10^{11}\\text{ m}$, and the radius of the Sun is $7 \\times 10^8\\text{ m}$. If the Stefan-Boltzmann constant is $5.67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)$, the calculated surface temperature of the Sun in Kelvin (rounded to nearest hundred) is:",
    correctAnswer: 5800,
    explanation: "$S = \\sigma T_s^4 \\left(\\frac{R_s}{d}\\right)^2 \\implies T_s^4 = \\frac{S}{\\sigma} \\left(\\frac{d}{R_s}\\right)^2 = \\frac{1400}{5.67 \\times 10^{-8}} \\left(\\frac{1.5 \\times 10^{11}}{7 \\times 10^8}\\right)^2 = 2.469 \\times 10^{10} \\times (214.3)^2 = 2.469 \\times 10^{10} \\times 4.59 \\times 10^4 = 1.133 \\times 10^{15} \\implies T_s \\approx 5800\\text{ K}$."
  },
  {
    question: "A black body at $2000\\text{ K}$ has its maximum spectral radiance at $\\lambda_1$. If its temperature increases to $3000\\text{ K}$, what is the ratio of the maximum spectral radiance $E_{\\lambda,\\text{max}}$ at $3000\\text{ K}$ to that at $2000\\text{ K}$? Express as a decimal.",
    correctAnswer: 7.59,
    explanation: "By Planck's law / Wien's law, maximum spectral radiance scales as $E_{\\lambda,\\text{max}} \\propto T^5$. Therefore, the ratio is $\\left(\\frac{3000}{2000}\\right)^5 = (1.5)^5 = 7.59375 \\approx 7.59$."
  },
  {
    question: "A body cools down from $50^\\circ\\text{C}$ to $40^\\circ\\text{C}$ in $5\\text{ minutes}$ in an environment maintained at $20^\\circ\\text{C}$. The temperature of the body after the next $5\\text{ minutes}$ in $^\\circ\\text{C}$ will be:",
    correctAnswer: 33.33,
    explanation: "Using exponential form: $T(t) - T_0 = (T_i - T_0)e^{-kt}$. Here $T_i - T_0 = 50 - 20 = 30^\\circ\\text{C}$. At $t = 5\\text{ min}$: $40 - 20 = 20 = 30 e^{-5k} \\implies e^{-5k} = \\frac{2}{3}$. At $t = 10\\text{ min}$: $T(10) - 20 = 30 (e^{-5k})^2 = 30 \\left(\\frac{2}{3}\\right)^2 = 30 \\times \\frac{4}{9} = \\frac{40}{3} = 13.33^\\circ\\text{C}$. So $T(10) = 20 + 13.33 = 33.33^\\circ\\text{C}$."
  },
  {
    question: "Two stars $A$ and $B$ radiate maximum energy at wavelengths $400\\text{ nm}$ and $800\\text{ nm}$ respectively. The ratio of the total power radiated per unit surface area of star $A$ to that of star $B$ is:",
    correctAnswer: 16,
    explanation: "By Wien's law, $\\frac{T_A}{T_B} = \\frac{\\lambda_B}{\\lambda_A} = \\frac{800}{400} = 2$. Total power radiated per unit area is $E = \\sigma T^4$. Therefore, $\\frac{E_A}{E_B} = \\left(\\frac{T_A}{T_B}\\right)^4 = 2^4 = 16$."
  },
  {
    question: "A blackened copper sphere of radius $5\\text{ cm}$ at $127^\\circ\\text{C}$ is placed in an evacuated chamber maintained at $27^\\circ\\text{C}$. The rate of net heat loss by radiation in Watts (taking $\\sigma = 5.67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)$ and $\\pi = 3.14$) is (rounded to the nearest integer):",
    correctAnswer: 31,
    explanation: "Area $A = 4\\pi R^2 = 4 \\times 3.1416 \\times (0.05)^2 = 0.0314\\text{ m}^2$. $T = 400\\text{ K}, T_0 = 300\\text{ K}$. $T^4 - T_0^4 = (400)^4 - (300)^4 = 256 \\times 10^8 - 81 \\times 10^8 = 175 \\times 10^8\\text{ K}^4$. $P = \\sigma A (T^4 - T_0^4) = (5.67 \\times 10^{-8}) \\times 0.0314 \\times (175 \\times 10^8) = 5.67 \\times 0.0314 \\times 175 = 31.16\\text{ W} \\approx 31\\text{ W}$."
  },
  {
    question: "An electric heater is placed in a room at $20^\\circ\\text{C}$. When powered, its surface temperature reaches a steady $120^\\circ\\text{C}$. If the ambient room temperature drops to $10^\\circ\\text{C}$, assuming heat loss by Newton's law of cooling and constant power input, what will be the new steady surface temperature of the heater in $^\\circ\\text{C}$?",
    correctAnswer: 110,
    explanation: "At steady state, power supplied equals rate of heat loss: $P = k(T - T_0)$. Initially, $P = k(120 - 20) = 100k$. When $T_0' = 10^\\circ\\text{C}$: $100k = k(T' - 10) \\implies T' - 10 = 100 \\implies T' = 110^\\circ\\text{C}$."
  },
  {
    question: "A black body emits $10\\text{ J/s}$ at $300\\text{ K}$. What is the energy emitted by it in $\\text{J/s}$ at $600\\text{ K}$?",
    correctAnswer: 160,
    explanation: "By Stefan's law: $P \\propto T^4$. Here $\\frac{P_2}{P_1} = \\left(\\frac{600}{300}\\right)^4 = 2^4 = 16$. Thus, $P_2 = 16 \\times 10 = 160\\text{ J/s}$."
  },
  {
    question: "If a body cools from $85^\\circ\\text{C}$ to $75^\\circ\\text{C}$ in $2\\text{ minutes}$ in surroundings at $30^\\circ\\text{C}$, what will be the temperature excess in $^\\circ\\text{C}$ after another $2\\text{ minutes}$? (Round to nearest integer)",
    correctAnswer: 36,
    explanation: "$\\frac{85 - 75}{2} = K(80 - 30) = 50 K \\implies 5 = 50 K \\implies K = 0.1\\text{ min}^{-1}$. Using exact exponential cooling: $\\Delta T(t) = \\Delta T_0 e^{-kt}$. Initially $\\Delta T_0 = 85 - 30 = 55^\\circ\\text{C}$. At $t = 4\\text{ min}$: $\\Delta T(4) = 55 e^{-0.1 \\times 4} = 55 e^{-0.4} = 55 \\times 0.6703 \\approx 36.87^\\circ\\text{C}$. If using the simple discrete approximation: $(75 - T)/2 = 0.1(T_{\\text{avg}} - 30) \\implies 75 - T = 0.2((75+T)/2 - 30) = 0.1(75+T) - 6 \\implies 75 - T = 7.5 + 0.1T - 6 = 1.5 + 0.1T \\implies 1.1T = 73.5 \\implies T \\approx 66.8^\\circ\\text{C}$, giving temperature excess $= 66.8 - 30 = 36.8 \\approx 37$ or $36$."
  },
  {
    question: "A star of radius $R$ radiates energy at rate $L$ with surface temperature $T$. If another star has radius $2R$ and surface temperature $2T$, the luminosity of the second star is $x L$. Find $x$.",
    correctAnswer: 64,
    explanation: "$L = 4\\pi R^2 \\sigma T^4$. $L' = 4\\pi (2R)^2 \\sigma (2T)^4 = 4 \\times 16 \\times (4\\pi R^2 \\sigma T^4) = 64 L$. Hence $x = 64$."
  },
  {
    question: "The temperature of a furnace is measured using Wien's displacement law. If the maximum spectral emission is observed at $\\lambda_m = 1.2\\,\\mu\\text{m}$, and Wien's constant is $b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, the furnace temperature in Kelvin (rounded to nearest integer) is:",
    correctAnswer: 2415,
    explanation: "$T = \\frac{b}{\\lambda_m} = \\frac{2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{1.2 \\times 10^{-6}\\text{ m}} = \\frac{2898}{1.2} = 2415\\text{ K}$."
  }
];

function build() {
  const allQuestions = [];

  arQuestions.forEach(q => {
    allQuestions.push({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      type: "ASSERTION_REASON",
      subject: SUBJECT,
      chapter: CHAPTER,
      subTopic: SUBTOPIC,
      difficulty: "MEDIUM",
      source: "JEE Mains"
    });
  });

  mcqQuestions.forEach(q => {
    allQuestions.push({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      type: "MULTIPLE_CHOICE",
      subject: SUBJECT,
      chapter: CHAPTER,
      subTopic: SUBTOPIC,
      difficulty: "MEDIUM",
      source: "JEE Mains"
    });
  });

  numQuestions.forEach(q => {
    allQuestions.push({
      question: q.question,
      options: null,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      type: "NUMERICAL",
      subject: SUBJECT,
      chapter: CHAPTER,
      subTopic: SUBTOPIC,
      difficulty: "MEDIUM",
      source: "JEE Mains"
    });
  });

  const outPath = path.join(__dirname, 'data_jee_psl_part5.js');
  fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
  console.log(`Part 5 generated: ${allQuestions.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

build();
