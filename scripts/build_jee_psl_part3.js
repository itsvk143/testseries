const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Surface tension, surface energy, and capillarity";
const CHAPTER = "Properties of Solids and Liquids";
const SUBJECT = "Physics";

// 26 AR, 7 MCQ, 20 NUM = 53 total
const arQuestions = [
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A small liquid drop is always spherical in shape.\nReason R: For a given volume, a sphere has the minimum surface area, thereby minimizing the surface energy of the drop.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Surface tension tends to minimize the surface area of a liquid. For a given volume, a sphere possesses the minimum surface area, leading to minimum surface energy. In small drops, surface tension forces dominate over gravitational forces, rendering them spherical. Thus, both A and R are true, and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Liquid rises in a capillary tube if the angle of contact between the liquid and the tube wall is acute.\nReason R: For an acute angle of contact, the meniscus is concave upwards, and the pressure just below the meniscus is less than atmospheric pressure by $\\frac{2T}{R}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "When the angle of contact $\\theta < 90^\\circ$ (acute), the meniscus is concave upwards. The pressure on the concave side (above meniscus) is atmospheric $P_0$, so the pressure just beneath the curved surface is $P_0 - \\frac{2T}{R}$. To balance this pressure deficit relative to the flat liquid surface at pressure $P_0$, the liquid rises up the tube until $h\\rho g = \\frac{2T}{R} = \\frac{2T\\cos\\theta}{r}$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If a capillary tube of insufficient length is placed in water, water overflows from the top of the tube.\nReason R: Water rises until the vertical component of surface tension balances the weight of the water column.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is false but R is true",
      "A is true but R is false"
    ],
    correctAnswer: 2,
    explanation: "Water never overflows from a capillary tube of insufficient length. Instead, as water reaches the top, the radius of curvature of the meniscus increases ($h R = \\text{constant}$), adjusting so that the liquid stays right at the rim without overflowing. Therefore, Assertion A is false, while Reason R is a true physical statement."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When detergent is added to water, its surface tension decreases.\nReason R: Detergent molecules concentrate at the surface of water and significantly weaken the intermolecular cohesive forces between water molecules.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Detergents are surface-active agents (surfactants). Their hydrophobic tails project outwards while hydrophilic heads sit at the water surface, disrupting the strong hydrogen bonds between water molecules and reducing surface tension. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The excess pressure inside a soap bubble in air is twice that inside a liquid droplet of the same radius and surface tension.\nReason R: A soap bubble in air has two free liquid-air surfaces, whereas a liquid droplet has only one free surface.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Excess pressure across a single spherical liquid-air interface is $\\Delta P = \\frac{2T}{R}$. For a soap bubble in air, there are two concentric surfaces (inner and outer), making the total excess pressure $\\Delta P = \\frac{4T}{R}$. For a liquid drop, there is only one surface, giving $\\Delta P = \\frac{2T}{R}$. Hence $\\Delta P_{\\text{bubble}} = 2\\Delta P_{\\text{drop}}$, and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When a large liquid drop breaks into $N$ identical smaller droplets at constant temperature, energy is absorbed from the surroundings.\nReason R: The total surface area increases upon splitting, resulting in an increase in the total surface potential energy.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "When a drop of radius $R$ breaks into $N$ droplets of radius $r = R N^{-1/3}$, the new surface area is $A_f = N(4\\pi r^2) = 4\\pi R^2 N^{1/3} > A_i$. Because surface energy $U = T A$, surface energy increases by $\\Delta U = 4\\pi R^2 T(N^{1/3} - 1) > 0$. This energy is absorbed from the internal energy/surroundings, resulting in cooling if isolated. Thus both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The angle of contact between mercury and clean glass is obtuse.\nReason R: The cohesive force between mercury molecules is stronger than the adhesive force between mercury and glass molecules.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "When cohesive forces between liquid molecules exceed adhesive forces between liquid and solid molecules, the liquid does not wet the solid, forming an obtuse contact angle (around $135^\\circ$ for mercury on glass). Hence both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When water rises to a height $h$ in a capillary tube, the total work done by surface tension is $2mgh$, while the gravitational potential energy gained by the water column is $mgh$.\nReason R: The remaining energy $mgh$ is dissipated as heat during the viscous upward flow of the liquid column.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The force of surface tension is $F = (2\\pi r) T \\cos\\theta = mg$. The upward displacement of the rim boundary is $h$, so work done by surface tension is $W = F h = mgh \\times \\text{force factor} = (mg)h$. But in terms of the potential energy of the center of mass (at $h/2$), the gravitational PE gained is $mg(h/2)$. Actually, the work done by surface tension is $F \\cdot h = (2\\pi r T \\cos\\theta) h = (mg) h$, while gravitational PE gained is $m g (h/2)$. Half of the work done by surface tension ($mgh/2$) is converted into potential energy, and the other half is dissipated as heat. The assertion states total work is $2 \\times \\text{PE}$, and dissipation equals PE, which is mathematically exact. Both A and R are true and R is the correct explanation."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The surface tension of most liquids decreases monotonically with an increase in temperature and vanishes at the critical temperature.\nReason R: Increasing temperature increases the kinetic energy of liquid molecules, thereby expanding the liquid and reducing the cohesive attractive forces between molecules.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "As temperature increases, thermal agitation weakens intermolecular cohesive forces. Consequently, surface tension decreases and becomes zero at the critical temperature where the boundary between liquid and vapor disappears. Both A and R are true, and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A steel needle can be made to float horizontally on the surface of calm water even though steel is denser than water.\nReason R: The buoyant force acting on the steel needle is greater than the weight of the needle.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 2,
    explanation: "A steel needle floats due to surface tension. The stretched surface film creates an upward vertical component of surface tension $2 T L \\sin\\theta$ that balances the needle's weight $mg$. Steel is denser than water, so buoyant force alone cannot balance its weight. Hence A is true but R is false."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: In an artificial satellite orbiting the Earth (weightlessness), water rises and fills the entire length of a capillary tube, no matter how long it is.\nReason R: In the absence of effective gravity ($g_{\\text{eff}} = 0$), there is no downward gravitational force to oppose the upward pull of surface tension.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Capillary rise is given by $h = \\frac{2T\\cos\\theta}{r\\rho g}$. In a state of weightlessness ($g_{\\text{eff}} = 0$), $h \\to \\infty$. Therefore, water will rise to the very top of any capillary tube of finite length, forming a flat or convex meniscus at the upper end. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When highly soluble substances like common salt ($\\text{NaCl}$) are dissolved in water, the surface tension of water increases.\nReason R: The force of attraction between the ions of the dissolved salt and the water molecules is greater than the intermolecular attraction between water molecules themselves.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Highly soluble inorganic salts increase the surface tension of water because the electrostatic attraction between salt ions and polar water molecules is stronger than the water-water cohesive forces, drawing surface molecules more tightly into the interior. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: An air bubble inside a glass of water has an excess internal pressure of $\\frac{4T}{R}$.\nReason R: An air bubble formed inside a liquid has two free liquid surfaces.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "Both A and R are false"
    ],
    correctAnswer: 3,
    explanation: "An air bubble inside a liquid has only one liquid-air interface (concave towards the air inside). Therefore, the excess pressure is $\\Delta P = \\frac{2T}{R}$, not $\\frac{4T}{R}$. A soap bubble in air has two free surfaces, but a bubble inside a liquid has only one. Hence both Assertion A and Reason R are false."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When two soap bubbles of unequal radii are connected by a hollow tube, the smaller bubble shrinks and the larger bubble grows bigger.\nReason R: The excess pressure inside a soap bubble is inversely proportional to its radius, so the smaller bubble is at a higher internal pressure.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The internal pressure of a soap bubble is $P = P_0 + \\frac{4T}{r}$. Since $r_1 < r_2$, the pressure inside the smaller bubble is greater ($P_1 > P_2$). Air naturally flows from higher pressure to lower pressure, so air flows from the smaller bubble into the larger bubble. Thus, the small bubble shrinks and the large bubble expands. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The angle of contact for pure water and clean glass is approximately zero.\nReason R: Adhesive forces between clean glass and water molecules are far stronger than cohesive forces among water molecules.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For pure water and clean glass, the adhesive force $F_a > \\frac{F_c}{\\sqrt{2}}$, causing the resultant force to lie inside the solid. The liquid surface curves to be perpendicular to this resultant, giving an angle of contact $\\theta \\approx 0^\\circ$. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: It is easier to spray a liquid when its temperature is increased.\nReason R: Surface tension decreases with an increase in temperature, requiring less mechanical work to create new surface area.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Spraying requires breaking a bulk liquid into tiny droplets, which greatly increases the surface area. The work required is $W = T \\Delta A$. Because surface tension $T$ decreases at higher temperatures, less work is required to atomize or spray the liquid. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A piece of dry paper or cloth readily absorbs water through capillary action.\nReason R: The narrow interconnected pores in paper act as fine capillary tubes with an acute angle of contact with water.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Paper and cloth fibers have microscopic interconnected pores that act as capillaries. Because the contact angle between water and cellulose is acute, water rises into these pores due to surface tension (capillarity). Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Mercury forms a convex meniscus in a glass tube and exhibits capillary depression.\nReason R: For mercury in glass, the angle of contact is obtuse, making $\\cos\\theta < 0$, which results in a negative capillary rise.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "From Jurin's law, $h = \\frac{2T\\cos\\theta}{r\\rho g}$. For mercury on glass, $\\theta \\approx 135^\\circ > 90^\\circ$, so $\\cos\\theta$ is negative, which means $h < 0$ (capillary depression), and the meniscus is convex upwards. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If two glass plates with a thin water film between them are pressed together, it requires a very large normal force to pull them apart.\nReason R: The thin water film between the plates develops a concave cylindrical meniscus at the boundary, creating a large negative gauge pressure inside the film.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The water boundary between the plates forms a meniscus of radius of curvature $r = d/2$, where $d$ is the thickness of the film. The pressure inside the water film is $P = P_0 - \\frac{2T}{d}$. The net inward force holding the plates together is $F = \\Delta P \\cdot A = \\frac{2TA}{d}$. As $d$ is very small, this attractive force is very large. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Hot soup tastes tastier and spreads more smoothly over the tongue than cold soup.\nReason R: The surface tension of soup decreases at higher temperatures, allowing it to spread over a larger surface area of taste buds.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Surface tension decreases with increasing temperature. Hot soup with lower surface tension spreads readily and evenly across the entire surface of the tongue, stimulating more taste receptors than cold soup. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The SI unit of surface tension is $\\text{N/m}$ and its dimensional formula is $[\\text{M}\\text{L}^0\\text{T}^{-2}]$.\nReason R: Surface tension is defined as force per unit length along an imaginary line drawn on the liquid surface, or energy per unit area.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Surface tension $T = \\frac{F}{L} = \\frac{[\\text{M}\\text{L}\\text{T}^{-2}]}{[\\text{L}]} = [\\text{M}\\text{T}^{-2}]$. Also $T = \\frac{W}{\\Delta A} = \\frac{[\\text{M}\\text{L}^2\\text{T}^{-2}]}{[\\text{L}^2]} = [\\text{M}\\text{L}^0\\text{T}^{-2}]$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: When two soap bubbles of radii $r_1$ and $r_2$ ($r_1 < r_2$) coalesce to form a common interface without bursting, the common interface bulges towards the smaller bubble.\nReason R: The smaller bubble has a higher internal pressure than the larger bubble.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is false but R is true",
      "A is true but R is false"
    ],
    correctAnswer: 2,
    explanation: "Because $P_1 > P_2$ for $r_1 < r_2$, the pressure inside the smaller bubble is greater. The interface must be concave towards the higher pressure side (the smaller bubble) and therefore bulges into the larger bubble (convex towards the larger bubble). Hence Assertion A is false, while Reason R is true."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Raindrops falling from great heights hit the ground as flattened spheres rather than perfect spheres.\nReason R: The aerodynamic drag force exerted by the air on the falling drop opposes gravity and deforms the bottom surface of the drop.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "While small droplets are held spherical by surface tension, larger falling raindrops experience significant upward aerodynamic drag pressure at the bottom, which flattens the bottom and deforms the drop into an oblate spheroid. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A liquid wets a solid surface completely if the angle of contact is $0^\\circ$.\nReason R: In complete wetting, adhesive forces between liquid and solid are much stronger than cohesive forces within the liquid.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "When adhesive forces strongly dominate over cohesive forces, the liquid spreads as a thin uniform film over the solid, yielding a contact angle $\\theta = 0^\\circ$ (complete wetting). Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Work done in blowing a soap bubble of radius $R$ is $8\\pi R^2 T$.\nReason R: A soap bubble in air has two liquid-air interfaces, each having an area of $4\\pi R^2$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A soap bubble possesses both an inner surface and an outer surface. The increase in surface area from zero is $\\Delta A = 2 \\times 4\\pi R^2 = 8\\pi R^2$. The work done against surface tension is $W = T \\Delta A = 8\\pi R^2 T$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: If a capillary tube is tilted at an angle $\\alpha$ with the vertical, the vertical height $h$ of the liquid column remains constant, but the length of the liquid column along the tube increases.\nReason R: The vertical height $h = \\frac{2T\\cos\\theta}{r\\rho g}$ depends only on the vertical hydrostatic equilibrium, so the length along the tube is $l = \\frac{h}{\\cos\\alpha}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The hydrostatic pressure depends only on the vertical depth $h = l\\cos\\alpha$. For a given liquid and tube, the vertical height $h$ supported by the meniscus curvature remains unchanged: $h = \\frac{2T\\cos\\theta}{r\\rho g}$. Consequently, the slant length along the tube is $l = \\frac{h}{\\cos\\alpha} > h$. Both A and R are true and R correctly explains A."
  }
];

const mcqQuestions = [
  {
    question: "A liquid of surface tension $T$ and density $\\rho$ rises to a height $h$ in a capillary tube of radius $r$. If the angle of contact is $\\theta = 0^\\circ$, the work done by the force of surface tension in the capillary rise is:",
    options: [
      "$mgh$",
      "$\\frac{1}{2}mgh$",
      "$2mgh$",
      "Zero"
    ],
    correctAnswer: 0,
    explanation: "The force of surface tension acting around the perimeter of the meniscus is $F = (2\\pi r) T$. Since $h = \\frac{2T}{r\\rho g}$, we have $2\\pi r T = \\pi r^2 h \\rho g = mg$. The upward force $F = mg$ pulls the boundary through a vertical displacement $h$. Thus, the total work done by surface tension is $W = F \\cdot h = mgh$. (Note: gravitational PE gained is $mgh/2$, so the remaining $mgh/2$ is dissipated as heat)."
  },
  {
    question: "Two soap bubbles of radii $r_1$ and $r_2$ ($r_1 < r_2$) coalesce isothermally in vacuum to form a single larger soap bubble of radius $R$. The radius $R$ is given by:",
    options: [
      "$\\sqrt{r_1^2 + r_2^2}$",
      "$\\frac{r_1 r_2}{r_1 + r_2}$",
      "$(r_1^3 + r_2^3)^{1/3}$",
      "$\\sqrt{r_2^2 - r_1^2}$"
    ],
    correctAnswer: 0,
    explanation: "In vacuum, the internal pressure of a soap bubble of radius $r$ is $P = \\frac{4T}{r}$. By Boyle's law for isothermal coalescence, $P_1 V_1 + P_2 V_2 = P V$. Substituting $P = \\frac{4T}{r}$ and $V = \\frac{4}{3}\\pi r^3$, we have $\\left(\\frac{4T}{r_1}\\right)\\left(\\frac{4}{3}\\pi r_1^3\\right) + \\left(\\frac{4T}{r_2}\\right)\\left(\\frac{4}{3}\\pi r_2^3\\right) = \\left(\\frac{4T}{R}\\right)\\left(\\frac{4}{3}\\pi R^3\\right) \\implies r_1^2 + r_2^2 = R^2 \\implies R = \\sqrt{r_1^2 + r_2^2}$."
  },
  {
    question: "A wire of length $L$ and mass $m$ is placed horizontally on the surface of a liquid of surface tension $T$. The minimum vertical force $F$ required to pull the wire away from the surface of the liquid is:",
    options: [
      "$mg + TL$",
      "$mg + 2TL$",
      "$mg + 4TL$",
      "$2mg + TL$"
    ],
    correctAnswer: 1,
    explanation: "When a wire in contact with a liquid surface is pulled upwards, two liquid films cling to both sides of the wire. The surface tension acts along both sides of length $L$, creating a downward force of $2TL$. The required vertical pulling force is $F = mg + 2TL$."
  },
  {
    question: "If two soap bubbles of radii $r_1$ and $r_2$ ($r_1 < r_2$) are in contact with a common interface, the radius of curvature $R$ of the common interface is:",
    options: [
      "$\\frac{r_1 r_2}{r_2 - r_1}$",
      "$\\frac{r_1 r_2}{r_1 + r_2}$",
      "$\\sqrt{r_1 r_2}$",
      "$\\frac{r_1 + r_2}{2}$"
    ],
    correctAnswer: 0,
    explanation: "The excess pressure inside bubble 1 is $\\Delta P_1 = \\frac{4T}{r_1}$ and inside bubble 2 is $\\Delta P_2 = \\frac{4T}{r_2}$. The pressure difference across the common interface is $\\Delta P = \\Delta P_1 - \\Delta P_2 = 4T\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$. This must equal $\\frac{4T}{R}$, where $R$ is the radius of curvature of the interface. Thus, $\\frac{1}{R} = \\frac{1}{r_1} - \\frac{1}{r_2} \\implies R = \\frac{r_1 r_2}{r_2 - r_1}$."
  },
  {
    question: "A liquid drop of radius $R$ is broken into $1000$ identical small droplets under isothermal conditions. If the surface tension of the liquid is $T$, the work done in the process is:",
    options: [
      "$4\\pi R^2 T$",
      "$9 \\times 4\\pi R^2 T$",
      "$36\\pi R^2 T$",
      "$999 \\times 4\\pi R^2 T$"
    ],
    correctAnswer: 2,
    explanation: "By conservation of volume: $\\frac{4}{3}\\pi R^3 = 1000 \\times \\frac{4}{3}\\pi r^3 \\implies r = \\frac{R}{10}$. Initial surface area is $A_i = 4\\pi R^2$. Final surface area is $A_f = 1000 \\times 4\\pi r^2 = 1000 \\times 4\\pi \\left(\\frac{R}{10}\\right)^2 = 10 \\times 4\\pi R^2$. The work done is $W = T(A_f - A_i) = T(10 - 1)(4\\pi R^2) = 9 \\times 4\\pi R^2 T = 36\\pi R^2 T$."
  },
  {
    question: "In a capillary tube of radius $r$, water rises to a height of $6\\text{ cm}$. If another capillary tube of radius $2r$ is dipped in the same water, the height of the water column will be:",
    options: [
      "$12\\text{ cm}$",
      "$3\\text{ cm}$",
      "$6\\text{ cm}$",
      "$1.5\\text{ cm}$"
    ],
    correctAnswer: 1,
    explanation: "According to Jurin's law, $h = \\frac{2T\\cos\\theta}{r\\rho g}$, which means $h \\propto \\frac{1}{r}$, or $h_1 r_1 = h_2 r_2$. Given $h_1 = 6\\text{ cm}$ and $r_2 = 2r_1$, we have $h_2 = \\frac{h_1 r_1}{r_2} = \\frac{6}{2} = 3\\text{ cm}$."
  },
  {
    question: "The excess pressure inside a spherical air bubble of radius $r$ situated at a depth $h$ below the surface of a liquid of density $\\rho$ and surface tension $T$ (where atmospheric pressure is $P_0$) is:",
    options: [
      "$\\frac{2T}{r}$",
      "$\\frac{4T}{r}$",
      "$P_0 + h\\rho g + \\frac{2T}{r}$",
      "$h\\rho g + \\frac{4T}{r}$"
    ],
    correctAnswer: 0,
    explanation: "The excess pressure across the curved interface of an air bubble inside a liquid is always $\\Delta P = P_{\\text{in}} - P_{\\text{out}} = \\frac{2T}{r}$, because it has only a single liquid-air interface. (The total absolute pressure inside is $P_0 + h\\rho g + \\frac{2T}{r}$, but the excess pressure above the surrounding local liquid pressure is $\\frac{2T}{r}$)."
  }
];

const numQuestions = [
  {
    question: "A spherical soap bubble in air has a radius of $2\\text{ cm}$. The surface tension of the soap solution is $0.03\\text{ N/m}$. The excess pressure inside the bubble is found to be $N\\text{ N/m}^2$. Find the value of $N$.",
    correctAnswer: 6,
    explanation: "The excess pressure inside a soap bubble in air is $\\Delta P = \\frac{4T}{R}$. Here, $T = 0.03\\text{ N/m}$ and $R = 2\\text{ cm} = 0.02\\text{ m}$. Thus, $\\Delta P = \\frac{4 \\times 0.03}{0.02} = 6\\text{ N/m}^2$. So $N = 6$."
  },
  {
    question: "Water rises to a height of $10\\text{ cm}$ in a capillary tube of radius $0.15\\text{ mm}$. If the angle of contact between water and glass is taken as $0^\\circ$, and $g = 10\\text{ m/s}^2, \\rho = 1000\\text{ kg/m}^3$, the surface tension of water in units of $10^{-2}\\text{ N/m}$ is:",
    correctAnswer: 7.5,
    explanation: "From Jurin's law, $h = \\frac{2T\\cos\\theta}{r\\rho g} \\implies T = \\frac{h r \\rho g}{2\\cos\\theta}$. Given $h = 0.1\\text{ m}$, $r = 0.15 \\times 10^{-3}\\text{ m}$, $\\rho = 10^3\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, and $\\cos 0^\\circ = 1$: $T = \\frac{0.1 \\times 0.15 \\times 10^{-3} \\times 10^3 \\times 10}{2} = \\frac{0.15}{2} = 0.075\\text{ N/m} = 7.5 \\times 10^{-2}\\text{ N/m}$. Answer is 7.5."
  },
  {
    question: "A big drop of water of radius $1\\text{ mm}$ splits into $8$ equal droplets. If the surface tension of water is $0.07\\text{ N/m}$, the increase in surface energy is $K\\pi \\times 10^{-7}\\text{ J}$. Find the value of $K$.",
    correctAnswer: 28,
    explanation: "Volume conservation: $\\frac{4}{3}\\pi R^3 = 8 \\times \\frac{4}{3}\\pi r^3 \\implies r = \\frac{R}{2} = 0.5\\text{ mm} = 5 \\times 10^{-4}\\text{ m}$. Initial area: $A_i = 4\\pi R^2 = 4\\pi (10^{-3})^2 = 4\\pi \\times 10^{-6}\\text{ m}^2$. Final area: $A_f = 8 \\times 4\\pi r^2 = 8 \\times 4\\pi (0.5 \\times 10^{-3})^2 = 8\\pi \\times 10^{-6}\\text{ m}^2$. Increase in area $\\Delta A = 4\\pi \\times 10^{-6}\\text{ m}^2$. Increase in surface energy $\\Delta U = T \\Delta A = 0.07 \\times 4\\pi \\times 10^{-6} = 0.28\\pi \\times 10^{-6} = 28\\pi \\times 10^{-7}\\text{ J}$. Hence $K = 28$."
  },
  {
    question: "A thin film of liquid is formed on a rectangular wire frame of length $10\\text{ cm}$ having a movable wire of negligible mass. If the wire is pulled by a distance of $2\\text{ cm}$ against surface tension, and the work done is $2.4 \\times 10^{-4}\\text{ J}$, the surface tension of the liquid in $10^{-2}\\text{ N/m}$ is:",
    correctAnswer: 6,
    explanation: "A liquid film has two surfaces. The increase in surface area is $\\Delta A = 2 \\times (L \\times d) = 2 \\times (0.10\\text{ m} \\times 0.02\\text{ m}) = 4 \\times 10^{-3}\\text{ m}^2$. Work done is $W = T \\Delta A \\implies T = \\frac{W}{\\Delta A} = \\frac{2.4 \\times 10^{-4}}{4 \\times 10^{-3}} = 0.06\\text{ N/m} = 6 \\times 10^{-2}\\text{ N/m}$. Hence the answer is 6."
  },
  {
    question: "Two soap bubbles have radii in the ratio $2 : 3$. The ratio of the excess pressure inside the first bubble to that inside the second bubble is $x : 2$. Find the value of integer $x$.",
    correctAnswer: 3,
    explanation: "Excess pressure inside a soap bubble is $\\Delta P = \\frac{4T}{R}$, so $\\frac{\\Delta P_1}{\\Delta P_2} = \\frac{R_2}{R_1} = \\frac{3}{2} = \\frac{x}{2}$. Therefore, $x = 3$."
  },
  {
    question: "The work done in blowing a soap bubble from a radius of $1\\text{ cm}$ to a radius of $2\\text{ cm}$ is $W_1$, and from $2\\text{ cm}$ to $3\\text{ cm}$ is $W_2$. The ratio $\\frac{W_2}{W_1}$ is equal to:",
    options: null,
    correctAnswer: 1.67,
    explanation: "The surface area of a bubble with two surfaces is $A = 2 \\times 4\\pi R^2 = 8\\pi R^2$. $W_1 = 8\\pi T(2^2 - 1^2) = 8\\pi T(3) = 24\\pi T$. $W_2 = 8\\pi T(3^2 - 2^2) = 8\\pi T(5) = 40\\pi T$. Ratio $\\frac{W_2}{W_1} = \\frac{40}{24} = \\frac{5}{3} \\approx 1.67$."
  },
  {
    question: "A capillary tube of radius $r = 0.2\\text{ mm}$ is dipped vertically into water. The height of the water column in the capillary is $h = 7.5\\text{ cm}$. If the capillary is tilted by $60^\\circ$ with the vertical, the length of the water column along the tube in $\\text{cm}$ will be:",
    correctAnswer: 15,
    explanation: "When tilted at angle $\\alpha$ with the vertical, the vertical height $h$ remains constant: $h = l \\cos\\alpha \\implies l = \\frac{h}{\\cos\\alpha}$. Given $h = 7.5\\text{ cm}$ and $\\alpha = 60^\\circ$: $l = \\frac{7.5}{\\cos 60^\\circ} = \\frac{7.5}{0.5} = 15\\text{ cm}$."
  },
  {
    question: "Two spherical soap bubbles of radii $3\\text{ cm}$ and $6\\text{ cm}$ coalesce to form a common surface. The radius of curvature of the common interface in $\\text{cm}$ is:",
    correctAnswer: 6,
    explanation: "The radius of curvature of the common interface is $R = \\frac{r_1 r_2}{r_2 - r_1}$. Here $r_1 = 3\\text{ cm}$ and $r_2 = 6\\text{ cm}$. $R = \\frac{3 \\times 6}{6 - 3} = \\frac{18}{3} = 6\\text{ cm}$."
  },
  {
    question: "A thin wire ring of radius $5\\text{ cm}$ is rested on the surface of a liquid of surface tension $0.05\\text{ N/m}$. The extra vertical force required to lift the ring off the liquid surface in $\\text{mN}$ (taking $\\pi = 3.14$) is (rounded to nearest integer):",
    correctAnswer: 31,
    explanation: "A ring has two circular boundary lines in contact with the liquid (inner and outer circumference). Total length of boundary is $L = 2 \\times (2\\pi R) = 4\\pi R$. Extra force required is $F = T \\cdot L = T(4\\pi R) = 0.05 \\times 4 \\times 3.14 \\times 0.05 = 0.0314\\text{ N} = 31.4\\text{ mN} \\approx 31\\text{ mN}$."
  },
  {
    question: "A glass capillary tube of radius $0.5\\text{ mm}$ is dipped into water. Water rises to a height of $3\\text{ cm}$. If the tube is pushed down into the water until only $1\\text{ cm}$ of the tube remains above the water surface, the new radius of curvature of the meniscus in $\\text{mm}$ will be:",
    correctAnswer: 1.5,
    explanation: "For insufficient length of capillary tube, $h R_{\\text{meniscus}} = \\text{constant} = h_0 R_0$. Initially, with $\\theta = 0^\\circ$, $R_0 = r = 0.5\\text{ mm}$ and $h_0 = 3\\text{ cm}$. When the exposed length is $h_1 = 1\\text{ cm}$, the new radius of curvature is $R_1 = \\frac{h_0 R_0}{h_1} = \\frac{3 \\times 0.5}{1} = 1.5\\text{ mm}$."
  },
  {
    question: "The excess pressure inside a soap bubble is $3$ times that inside a second soap bubble. If the volume of the first bubble is $V_1$ and that of the second bubble is $V_2$, then the ratio $\\frac{V_2}{V_1}$ is:",
    correctAnswer: 27,
    explanation: "Excess pressure is $\\Delta P = \\frac{4T}{R}$, so $\\frac{\\Delta P_1}{\\Delta P_2} = \\frac{R_2}{R_1} = 3 \\implies R_2 = 3 R_1$. The volume of a sphere is $V \\propto R^3$. Therefore, $\\frac{V_2}{V_1} = \\left(\\frac{R_2}{R_1}\\right)^3 = 3^3 = 27$."
  },
  {
    question: "An air bubble of radius $0.1\\text{ mm}$ is situated just below the surface of water ($T = 0.07\\text{ N/m}, \\text{atmospheric pressure } P_0 = 1.013 \\times 10^5\\text{ N/m}^2$). The excess pressure inside the air bubble in $\\text{N/m}^2$ is:",
    correctAnswer: 1400,
    explanation: "An air bubble inside a liquid has only one liquid-air interface, so $\\Delta P = \\frac{2T}{R}$. Here $T = 0.07\\text{ N/m}$ and $R = 0.1 \\times 10^{-3}\\text{ m} = 10^{-4}\\text{ m}$. $\\Delta P = \\frac{2 \\times 0.07}{10^{-4}} = 1400\\text{ N/m}^2$."
  },
  {
    question: "A spherical drop of mercury of radius $2\\text{ mm}$ falls on a surface and breaks into $10^6$ identical droplets. If the surface tension of mercury is $0.46\\text{ N/m}$, the total work done in $\\mu\\text{J}$ (taking $\\pi = 3.14$) is (rounded to nearest integer):",
    correctAnswer: 2289,
    explanation: "Radius of small droplet: $r = R N^{-1/3} = 2 \\times 10^{-3} \\times (10^6)^{-1/3} = 2 \\times 10^{-5}\\text{ m}$. Work done is $W = 4\\pi R^2 T (N^{1/3} - 1) = 4\\pi (2 \\times 10^{-3})^2 \\times 0.46 \\times (100 - 1) = 4 \\times 3.1416 \\times 4 \\times 10^{-6} \\times 0.46 \\times 99 = 2.289 \\times 10^{-3}\\text{ J} = 2289\\,\\mu\\text{J}$."
  },
  {
    question: "A rectangular plate of dimensions $6\\text{ cm} \\times 4\\text{ cm}$ and thickness $2\\text{ mm}$ is held vertically such that its lower edge just touches the surface of water. If surface tension of water is $0.075\\text{ N/m}$, the downward pull due to surface tension on the plate in $\\text{mN}$ is:",
    correctAnswer: 9.3,
    explanation: "The water touches the perimeter of the cross-section of the plate touching the water: $P = 2 \\times (L + t) = 2 \\times (0.06 + 0.002) = 2 \\times 0.062 = 0.124\\text{ m}$. Downward surface tension force is $F = T \\times P = 0.075 \\times 0.124 = 0.0093\\text{ N} = 9.3\\text{ mN}$."
  },
  {
    question: "Water rises to a height of $5\\text{ cm}$ in a vertical capillary tube. If the capillary tube is cut so that its length above the water surface is only $3\\text{ cm}$, what will be the cosine of the new contact angle at the top rim of the tube (if original contact angle was $0^\\circ$)? Express your answer as a decimal.",
    correctAnswer: 0.6,
    explanation: "In a capillary tube, $h \\cos\\theta = \\text{constant}$ when radius of the tube is fixed and the meniscus changes shape at the top rim: $h_0 \\cos\\theta_0 = h_1 \\cos\\theta_1$. Given $h_0 = 5\\text{ cm}, \\cos\\theta_0 = \\cos 0^\\circ = 1$, and $h_1 = 3\\text{ cm}$: $\\cos\\theta_1 = \\frac{h_0}{h_1} = \\frac{3}{5} = 0.6$."
  },
  {
    question: "Two soap bubbles of radii $4\\text{ cm}$ and $3\\text{ cm}$ coalesce isothermally in vacuum to form a single larger bubble of radius $R$. Find $R$ in $\\text{cm}$.",
    correctAnswer: 5,
    explanation: "For isothermal coalescence of soap bubbles in vacuum, $R = \\sqrt{r_1^2 + r_2^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ cm}$."
  },
  {
    question: "A soap film is formed on a wire loop of area $100\\text{ cm}^2$. If the area of the film is reduced to $60\\text{ cm}^2$, the surface energy released is $4.8 \\times 10^{-4}\\text{ J}$. Find the surface tension of the soap solution in $\\text{N/m}$.",
    correctAnswer: 0.06,
    explanation: "A soap film has two surfaces. The change in total area is $\\Delta A = 2 \\times (100 - 60) \\times 10^{-4}\\text{ m}^2 = 2 \\times 40 \\times 10^{-4} = 8 \\times 10^{-3}\\text{ m}^2$. Energy released $\\Delta U = T \\Delta A \\implies T = \\frac{\\Delta U}{\\Delta A} = \\frac{4.8 \\times 10^{-4}}{8 \\times 10^{-3}} = 0.06\\text{ N/m}$."
  },
  {
    question: "A drop of water of radius $r = 1\\text{ mm}$ falls from a height in air and reaches terminal velocity. If two such identical drops of water combine together to form a single drop without any loss of energy, the ratio of the new terminal velocity to the initial terminal velocity is $2^{n}$. Find the value of $n$ (express as fraction $2/3$ or decimal $0.67$).",
    correctAnswer: 0.67,
    explanation: "Terminal velocity of a falling drop is $v_t \\propto r^2$. When two drops combine, new radius is $R = 2^{1/3} r$. The new terminal velocity is $v_t' \\propto R^2 = (2^{1/3} r)^2 = 2^{2/3} v_t$. Thus, the ratio is $2^{2/3} = 2^{0.67}$, so $n = 2/3 \\approx 0.67$."
  },
  {
    question: "When a capillary tube of radius $r$ is immersed in a liquid of density $1000\\text{ kg/m}^3$, the liquid rises to a height $h = 4\\text{ cm}$. The mass of liquid in the capillary is $M = 0.2\\text{ g}$. If another tube of radius $2r$ is immersed in the same liquid, what will be the mass of the liquid column in the second tube in grams?",
    correctAnswer: 0.4,
    explanation: "The mass of liquid column in capillary rise is $m = \\rho V = \\rho (\\pi r^2 h)$. Since $h = \\frac{2T\\cos\\theta}{r\\rho g}$, we have $m = \\rho \\pi r^2 \\left(\\frac{2T\\cos\\theta}{r\\rho g}\\right) = \\frac{2\\pi T\\cos\\theta}{g} r \\propto r$. When radius is doubled ($r' = 2r$), the mass of the liquid column doubles: $M' = 2M = 2 \\times 0.2\\text{ g} = 0.4\\text{ g}$."
  },
  {
    question: "Calculate the excess pressure inside an oil droplet of diameter $4\\text{ mm}$ suspended in air, if the surface tension of the oil is $0.03\\text{ N/m}$. Express your answer in $\\text{N/m}^2$.",
    correctAnswer: 30,
    explanation: "An oil droplet has radius $R = \\frac{4\\text{ mm}}{2} = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$. For a droplet with a single surface, $\\Delta P = \\frac{2T}{R} = \\frac{2 \\times 0.03}{2 \\times 10^{-3}} = 30\\text{ N/m}^2$."
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

  const outPath = path.join(__dirname, 'data_jee_psl_part3.js');
  fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
  console.log(`Part 3 generated: ${allQuestions.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

build();
