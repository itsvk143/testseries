const fs = require('fs');
const path = require('path');

const SUBTOPIC = "Degrees of freedom";
const CHAPTER = "Kinetic Theory of Gases";
const SUBJECT = "Physics";

// 26 AR, 7 MCQ, 20 NUM = 53 total
const arQuestions = [
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A monoatomic gas molecule like Helium has exactly 3 degrees of freedom at all standard temperatures.\nReason R: A monoatomic molecule is treated as a point mass, so its moment of inertia about its own center of mass is negligibly small, making rotational kinetic energy negligible.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A monoatomic molecule is modeled as a point mass with atomic radius $\\sim 10^{-10}\\text{ m}$ and nuclear mass concentrated at the center. Its moment of inertia $I \\approx 0$, so its rotational kinetic energy $\\frac{1}{2}I\\omega^2$ is negligible compared to $k_BT$. It can only translate in 3 independent Cartesian directions ($x, y, z$). Thus, $f = 3$. Both A and R are true and R is the correct explanation of A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A rigid diatomic molecule such as $\\text{O}_2$ has 5 degrees of freedom at room temperature.\nReason R: A rigid diatomic molecule has 3 translational degrees of freedom and 2 rotational degrees of freedom about axes perpendicular to the internuclear bond axis.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A diatomic molecule consists of two atoms separated by a fixed bond distance. It possesses 3 translational degrees of freedom (motion of CM in $x, y, z$) and 2 independent rotational axes perpendicular to the line joining the atoms. Rotation about the internuclear axis has negligible moment of inertia. Hence, at room temperature (rigid rotor approximation), $f = 3 + 2 = 5$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: At very high temperatures, a diatomic molecule possesses 7 degrees of freedom.\nReason R: At high temperatures, the vibrational mode is excited, contributing two additional quadratic energy terms (one kinetic and one potential energy term).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Each vibrational mode contributes two degrees of freedom: vibrational kinetic energy $\\frac{1}{2}\\mu v_{\\text{vib}}^2$ and vibrational potential energy $\\frac{1}{2}k x^2$. At high temperatures ($T > 1000\\text{ K}$), vibrational modes are no longer frozen out, so $f = 3\\,(\\text{trans}) + 2\\,(\\text{rot}) + 2\\,(\\text{vib}) = 7$. Both A and R are true and R correctly explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A non-linear triatomic gas molecule like water vapor ($\\text{H}_2\\text{O}$) has 6 degrees of freedom at moderate temperatures.\nReason R: A non-linear molecule has 3 translational degrees of freedom and 3 independent rotational degrees of freedom about three mutually perpendicular principal axes.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A non-linear molecule has non-zero moments of inertia about all three Cartesian axes ($I_x, I_y, I_z \\neq 0$). Thus it possesses 3 translational and 3 rotational degrees of freedom, yielding $f = 3 + 3 = 6$ at moderate temperatures. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A linear triatomic molecule like Carbon Dioxide ($\\text{CO}_2$) has 5 degrees of freedom at moderate temperatures, just like a diatomic gas.\nReason R: All three atoms of $\\text{CO}_2$ lie along a single straight line, so the moment of inertia about the molecular bond axis is negligible, leaving only 2 rotational degrees of freedom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Because $\\text{CO}_2$ is linear ($\ ext{O=C=O}$), the moment of inertia along the collinear axis is vanishingly small. Therefore, it has 3 translational and only 2 rotational degrees of freedom at moderate temperatures ($f = 3 + 2 = 5$). Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: At very low temperatures (near $20\\text{ K}$ to $50\\text{ K}$), Hydrogen gas behaves effectively like a monoatomic gas with $f = 3$.\nReason R: According to quantum mechanics, rotational energy levels are discrete; at sufficiently low temperatures, the average thermal energy $k_BT$ is smaller than the first rotational excitation energy gap, freezing out rotation.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "The rotational energy spacing $\\Delta E_{\\text{rot}} = \\frac{\\hbar^2}{I}$ for $\\text{H}_2$ is relatively large because of its small moment of inertia. When $k_BT \\ll \\Delta E_{\\text{rot}}$ (below $\\sim 50\\text{ K}$), collisions lack enough energy to excite molecules out of the rotational ground state ($J = 0$). Hence rotational degrees of freedom freeze out, leaving only $f = 3$ translational modes. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: For a system of $N$ particles with $k$ independent geometric constraints, the number of degrees of freedom is $f = 3N - k$.\nReason R: Each free particle requires 3 coordinates to specify its position in space, and each independent constraint equation reduces the number of independent coordinates by one.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "In classical mechanics, $N$ particles possess $3N$ total coordinates in three dimensions. Each independent constraint relation $g_j(r_1, r_2, \\dots) = 0$ eliminates one independent variable. Thus, $f = 3N - k$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A single vibrational mode in a molecule contributes twice as much to the molar heat capacity as a single rotational degree of freedom.\nReason R: A rotational mode has only kinetic energy ($\\frac{1}{2}I\\omega^2$), whereas a vibrational mode involves both kinetic energy ($\\frac{1}{2}mv^2$) and potential energy ($\\frac{1}{2}kx^2$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "By the equipartition theorem, each quadratic term in the energy expression carries $\\frac{1}{2}k_BT$. Rotation has 1 quadratic term per axis ($\\frac{1}{2}k_BT$), contributing $\\frac{1}{2}R$ to $C_v$. A vibrational mode has 2 quadratic terms (kinetic + elastic potential), contributing $2 \\times \\frac{1}{2}k_BT = k_BT$ per molecule, or $R$ to $C_v$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The ratio of total degrees of freedom of a monoatomic gas to a rigid diatomic gas at room temperature is $3 : 5$.\nReason R: A monoatomic gas has 3 translational degrees of freedom, while a rigid diatomic gas has 3 translational and 2 rotational degrees of freedom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For a monoatomic gas, $f_{\\text{mono}} = 3$. For a rigid diatomic gas, $f_{\\text{dia}} = 3 + 2 = 5$. The ratio is $3/5$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The internal energy of one mole of a rigid diatomic gas at temperature $T$ is $\\frac{5}{2}RT$.\nReason R: By the law of equipartition of energy, each active degree of freedom contributes $\\frac{1}{2}RT$ of energy per mole, and a rigid diatomic gas has 5 active degrees of freedom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "With 5 active degrees of freedom, the molar internal energy is $U = 5 \\times \\left(\\frac{1}{2}RT\\right) = \\frac{5}{2}RT$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The number of translational degrees of freedom is the same for all gas molecules, regardless of their atomicity.\nReason R: All molecules, whether monoatomic, diatomic, or polyatomic, can translate independently along three mutually perpendicular spatial directions in three-dimensional space.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "In 3D physical space, the center of mass of any object possesses exactly 3 translational degrees of freedom along the $x, y,$ and $z$ axes. This holds universally for monoatomic, diatomic, and polyatomic molecules. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: For a rigid triatomic molecule in the shape of an equilateral triangle, the number of degrees of freedom is 6.\nReason R: For $N = 3$ atoms with 3 fixed interatomic bond distances (constraints $k = 3$), $f = 3(3) - 3 = 6$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "With 3 atoms, $3N = 9$. An equilateral triangular configuration fixes all 3 bond lengths ($k = 3$). Thus $f = 3N - k = 9 - 3 = 6$ (3 translational + 3 rotational). Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A diatomic gas with an active vibrational mode has a lower adiabatic exponent $\\gamma$ than a rigid diatomic gas.\nReason R: The adiabatic exponent is $\\gamma = 1 + \\frac{2}{f}$; increasing the active degrees of freedom $f$ from $5$ to $7$ reduces $\\gamma$ from $\\frac{7}{5} = 1.40$ to $\\frac{9}{7} \\approx 1.29$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Since $\\gamma = 1 + \\frac{2}{f}$, as degrees of freedom $f$ increase from 5 to 7, $\\gamma$ decreases from $1.4$ to $1.286$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The molar heat capacity at constant volume of a monoatomic gas is $C_v = \\frac{3}{2}R$.\nReason R: A monoatomic gas has 3 degrees of freedom, each contributing $\\frac{1}{2}R$ to $C_v = \\frac{dU}{dT}$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For a monoatomic gas, $U = \\frac{3}{2}RT$. Differentiating with respect to $T$ gives $C_v = \\frac{dU}{dT} = \\frac{3}{2}R$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The rotation of an oxygen molecule about its internuclear bond axis contributes significantly to its molar heat capacity at room temperature.\nReason R: The moment of inertia of a diatomic molecule about the bond axis is of the same order of magnitude as about the perpendicular axes.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "Both A and R are false"
    ],
    correctAnswer: 3,
    explanation: "The mass of each atom is concentrated in the nucleus of radius $\\sim 10^{-15}\\text{ m}$, whereas the bond length is $\\sim 10^{-10}\\text{ m}$. The moment of inertia about the bond axis is roughly $10^8$ to $10^{10}$ times smaller than about the transverse axes. Hence its rotational quantum states are separated by massive energy gaps, completely freezing rotation about the bond axis. Both A and R are false."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A non-linear molecule with $N$ atoms has $3N - 6$ normal vibrational modes.\nReason R: A non-linear molecule has 3 translational and 3 rotational degrees of freedom, leaving $(3N - 6)$ vibrational coordinates.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Total degrees of freedom for $N$ atoms is $3N$. For a non-linear molecule, translation accounts for 3 and rotation accounts for 3, leaving $3N - (3 + 3) = 3N - 6$ vibrational modes. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A linear molecule containing $N$ atoms has $3N - 5$ vibrational modes.\nReason R: A linear molecule has 3 translational degrees of freedom and only 2 rotational degrees of freedom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For a linear molecule, there are 3 translational and 2 rotational degrees of freedom. The remaining vibrational modes are $3N - (3 + 2) = 3N - 5$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: At standard room temperature, the measured molar heat capacity $C_v$ of Nitrogen gas is approximately $\\frac{5}{2}R$ rather than $\\frac{7}{2}R$.\nReason R: The characteristic vibrational temperature of Nitrogen is around $3350\\text{ K}$, so its vibrational mode remains frozen at room temperature ($300\\text{ K}$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Due to the strong triple bond in $\\text{N}_2$, the vibrational frequency is very high, corresponding to $\\theta_{\\text{vib}} = \\frac{h\\nu}{k_B} \\approx 3350\\text{ K}$. At $300\\text{ K} \\ll 3350\\text{ K}$, quantum vibrational states cannot be excited, so $f = 5$ and $C_v = \\frac{5}{2}R$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: In classical mechanics, degrees of freedom are independent of temperature.\nReason R: The classical equipartition theorem assumes a continuous energy spectrum for all mechanical degrees of freedom, predicting constant $C_v$ at all temperatures.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "In purely classical physics, energy is continuous, so every quadratic term contributes $\\frac{1}{2}k_BT$ regardless of temperature. The phenomenon of freezing of degrees of freedom is a quantum mechanical consequence of discrete quantized energy levels. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A rigid body consisting of 4 point masses located at the vertices of a tetrahedron has 6 degrees of freedom.\nReason R: Any rigid three-dimensional body in free space has exactly 6 degrees of freedom: 3 translational and 3 rotational.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Any completely rigid 3D object requires 3 coordinates to specify the position of its center of mass, and 3 Euler angles to specify its spatial orientation. Hence it has $3 + 3 = 6$ degrees of freedom. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The value of $C_p - C_v = R$ holds for all ideal gases, irrespective of their degrees of freedom.\nReason R: Mayer's relation $C_p - C_v = R$ arises because the work done by one mole of an ideal gas during isobaric expansion per unit rise in temperature is $P\\Delta V = R\\Delta T = R$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "From the first law of thermodynamics at constant pressure, $dQ = dU + P dV \\implies C_p = C_v + P\\left(\\frac{\\partial V}{\\partial T}\\right)_P$. For an ideal gas $PV = RT$, $P\\left(\\frac{\\partial V}{\\partial T}\\right)_P = R$. Hence $C_p - C_v = R$ universally for all ideal gases. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: In a mixture containing $1\\text{ mole}$ of He and $1\\text{ mole}$ of $\\text{O}_2$ at room temperature, the total internal energy is $4RT$.\nReason R: Helium has $f = 3$ and Oxygen has $f = 5$, giving total internal energy $U = \\frac{3}{2}(1)RT + \\frac{5}{2}(1)RT = 4RT$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "Internal energy is extensive: $U = U_1 + U_2 = \\frac{f_1}{2}n_1 RT + \\frac{f_2}{2}n_2 RT = \\frac{3}{2}(1)RT + \\frac{5}{2}(1)RT = 4RT$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: The molar heat capacity $C_v$ of a non-linear triatomic gas at room temperature is $3R$.\nReason R: A non-linear triatomic gas has 6 degrees of freedom at room temperature, each contributing $\\frac{1}{2}R$ to $C_v$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "With $f = 6$, $C_v = \\frac{f}{2}R = \\frac{6}{2}R = 3R$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: Polyatomic gases have lower adiabatic exponents $\\gamma$ than monoatomic gases.\nReason R: As the number of degrees of freedom increases with molecular complexity, $\\gamma = 1 + \\frac{2}{f}$ approaches $1$.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For monoatomic gases $f = 3 \\implies \\gamma = 5/3 \\approx 1.67$. For diatomic gases $f = 5 \\implies \\gamma = 7/5 = 1.4$. For polyatomic gases $f \\ge 6 \\implies \\gamma \\le 8/6 \\approx 1.33$. As $f$ increases, $\\gamma = 1 + \\frac{2}{f}$ monotonically decreases towards $1$. Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: A particle constrained to move on the surface of a sphere of fixed radius has 2 degrees of freedom.\nReason R: The motion in three-dimensional space is subject to one holonomic constraint equation ($x^2 + y^2 + z^2 = R^2$), leaving $3 - 1 = 2$ independent coordinates (e.g., latitude and longitude).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "A single particle has 3 spatial coordinates. One constraint equation $x^2 + y^2 + z^2 = R^2$ reduces the degrees of freedom to $f = 3 - 1 = 2$ (which can be parameterized by $\\theta$ and $\\phi$). Both A and R are true and R explains A."
  },
  {
    question: "Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.\nAssertion A: At room temperature, vibrational modes do not contribute to the heat capacity of most simple diatomic gases like $\\text{O}_2$ and $\\text{N}_2$.\nReason R: The quantum of vibrational energy $\\hbar\\omega$ is significantly larger than the average thermal energy $k_BT$ at room temperature ($300\\text{ K}$).\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctAnswer: 0,
    explanation: "For typical diatomic molecules with strong chemical bonds, $\\hbar\\omega$ is around $0.2\\text{ eV}$ to $0.3\\text{ eV}$, whereas $k_BT$ at $300\\text{ K}$ is only $\\sim 0.026\\text{ eV}$. Since $\\hbar\\omega \\gg k_BT$, the probability of occupying excited vibrational levels is suppressed by the Boltzmann factor $e^{-\\hbar\\omega/k_BT} \\ll 1$. Both A and R are true and R explains A."
  }
];

const mcqQuestions = [
  {
    question: "What is the number of degrees of freedom of a non-linear triatomic gas molecule (such as $\\text{H}_2\\text{O}$) at moderate temperatures?",
    options: [
      "$6$",
      "$5$",
      "$3$",
      "$7$"
    ],
    correctAnswer: 0,
    explanation: "A non-linear molecule has 3 translational degrees of freedom and 3 rotational degrees of freedom about three mutually perpendicular axes. Thus, total degrees of freedom $f = 3 + 3 = 6$."
  },
  {
    question: "A diatomic gas molecule has 5 degrees of freedom at room temperature and 7 degrees of freedom at high temperature. The ratio of molar heat capacity $C_v$ at high temperature to that at room temperature is:",
    options: [
      "$\\frac{7}{5}$",
      "$\\frac{5}{7}$",
      "$\\frac{9}{7}$",
      "$\\frac{7}{9}$"
    ],
    correctAnswer: 0,
    explanation: "At room temperature, $C_{v,1} = \\frac{5}{2}R$. At high temperature, $C_{v,2} = \\frac{7}{2}R$. The ratio is $\\frac{C_{v,2}}{C_{v,1}} = \\frac{7/2 R}{5/2 R} = \\frac{7}{5}$."
  },
  {
    question: "If a gas molecule has $f$ degrees of freedom, the ratio of its specific heats $\\gamma = \\frac{C_p}{C_v}$ is given by:",
    options: [
      "$1 + \\frac{2}{f}$",
      "$1 + \\frac{f}{2}$",
      "$\\frac{f}{f + 2}$",
      "$\\frac{f + 1}{f}$"
    ],
    correctAnswer: 0,
    explanation: "$C_v = \\frac{f}{2}R$ and $C_p = C_v + R = \\left(\\frac{f}{2} + 1\\right)R$. Therefore, $\\gamma = \\frac{C_p}{C_v} = \\frac{(f/2 + 1)R}{(f/2)R} = 1 + \\frac{2}{f}$."
  },
  {
    question: "A linear triatomic molecule (such as $\\text{CO}_2$) has how many translational and rotational degrees of freedom respectively?",
    options: [
      "$3$ translational, $2$ rotational",
      "$3$ translational, $3$ rotational",
      "$2$ translational, $3$ rotational",
      "$3$ translational, $1$ rotational"
    ],
    correctAnswer: 0,
    explanation: "Any molecule has 3 translational degrees of freedom. For a linear molecule, the moment of inertia along the internuclear axis is zero, leaving exactly 2 rotational degrees of freedom."
  },
  {
    question: "A rigid body consisting of 3 particles constrained such that the distance between any pair is fixed has how many degrees of freedom in three-dimensional space?",
    options: [
      "$6$",
      "$3$",
      "$5$",
      "$9$"
    ],
    correctAnswer: 0,
    explanation: "Three particles have $3 \\times 3 = 9$ coordinates. Three fixed distances between the 3 pairs provide 3 independent constraints: $f = 9 - 3 = 6$ (3 translational + 3 rotational)."
  },
  {
    question: "Which of the following gases has an adiabatic index $\\gamma = \\frac{5}{3}$ at room temperature?",
    options: [
      "Argon ($\\text{Ar}$)",
      "Oxygen ($\\text{O}_2$)",
      "Carbon dioxide ($\\text{CO}_2$)",
      "Methane ($\\text{CH}_4$)"
    ],
    correctAnswer: 0,
    explanation: "For a monoatomic gas like Argon, $f = 3 \\implies \\gamma = 1 + \\frac{2}{3} = \\frac{5}{3}$. Oxygen has $\\gamma = 7/5$, while $\\text{CO}_2$ and $\\text{CH}_4$ have $\\gamma < 1.4$."
  },
  {
    question: "At what temperature regime do the rotational degrees of freedom of hydrogen molecules freeze out, causing the gas to behave as if it were monoatomic?",
    options: [
      "Below $50\\text{ K}$",
      "Around $300\\text{ K}$",
      "Above $1000\\text{ K}$",
      "At $273\\text{ K}$"
    ],
    correctAnswer: 0,
    explanation: "Due to the small moment of inertia of $\\text{H}_2$, its rotational energy level spacing is large. Below $\\sim 50\\text{ K}$, thermal energy $k_BT$ is insufficient to excite rotation, freezing rotational modes so that $f = 3$."
  }
];

const numQuestions = [
  {
    question: "Find the total number of degrees of freedom for $2\\text{ moles}$ of an ideal rigid diatomic gas at room temperature in terms of Avogadro's number $N_A$. (Enter the numerical multiplier of $N_A$)",
    correctAnswer: 10,
    explanation: "A rigid diatomic molecule has $f = 5$ degrees of freedom. For $2\\text{ moles}$, total number of molecules is $2 N_A$. The total degrees of freedom is $2 N_A \\times 5 = 10 N_A$. Multiplier is $10$."
  },
  {
    question: "A gas has an adiabatic index $\\gamma = 1.33$ (or $4/3$). The number of active degrees of freedom $f$ of the gas molecules is:",
    correctAnswer: 6,
    explanation: "$\\gamma = 1 + \\frac{2}{f} \\implies \\frac{4}{3} = 1 + \\frac{2}{f} \\implies \\frac{2}{f} = \\frac{1}{3} \\implies f = 6$."
  },
  {
    question: "A gas molecule consists of $4$ atoms arranged in a rigid planar structure with $5$ independent constraints between the bond lengths. How many degrees of freedom does the molecule possess?",
    correctAnswer: 7,
    explanation: "For $N = 4$ particles, total unconstrained coordinates are $3N = 3(4) = 12$. With $k = 5$ constraints, degrees of freedom are $f = 3N - k = 12 - 5 = 7$."
  },
  {
    question: "The ratio of the molar heat capacity at constant volume $C_v$ of a non-linear triatomic gas ($f = 6$) to that of a monoatomic gas ($f = 3$) is:",
    correctAnswer: 2,
    explanation: "$C_{v,\\text{tri}} = \\frac{6}{2}R = 3R$, and $C_{v,\\text{mono}} = \\frac{3}{2}R$. Ratio is $\\frac{3R}{1.5R} = 2$."
  },
  {
    question: "A rigid diatomic molecule has $3$ translational and $2$ rotational degrees of freedom. What is the value of $\\gamma = C_p / C_v$? Express as a decimal.",
    correctAnswer: 1.4,
    explanation: "$\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{5} = 1 + 0.4 = 1.4$."
  },
  {
    question: "How many vibrational modes are present in a non-linear triatomic molecule consisting of $3$ atoms?",
    correctAnswer: 3,
    explanation: "For a non-linear molecule, vibrational modes are $3N - 6$. With $N = 3$, $3(3) - 6 = 9 - 6 = 3$."
  },
  {
    question: "How many vibrational modes are present in a linear triatomic molecule like Carbon Dioxide ($\\text{CO}_2$)?",
    correctAnswer: 4,
    explanation: "For a linear molecule, vibrational modes are $3N - 5$. With $N = 3$, $3(3) - 5 = 9 - 5 = 4$."
  },
  {
    question: "For a gas having $f = 4$ degrees of freedom, the value of the adiabatic exponent $\\gamma$ is:",
    correctAnswer: 1.5,
    explanation: "$\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{4} = 1 + 0.5 = 1.5$."
  },
  {
    question: "At high temperature, a diatomic gas has its vibrational mode active ($f = 7$). Find the molar heat capacity $C_v$ in units of $R$. Express as a decimal.",
    correctAnswer: 3.5,
    explanation: "$C_v = \\frac{f}{2}R = \\frac{7}{2}R = 3.5 R$."
  },
  {
    question: "For a gas with $\\gamma = 1.25$ (or $5/4$), the number of degrees of freedom $f$ is:",
    correctAnswer: 8,
    explanation: "$\\gamma = 1 + \\frac{2}{f} \\implies 1.25 = 1 + \\frac{2}{f} \\implies 0.25 = \\frac{2}{f} \\implies f = \\frac{2}{0.25} = 8$."
  },
  {
    question: "A system consists of $N = 5$ particles moving in 3 dimensions with $9$ rigid distance constraints. The number of degrees of freedom of the system is:",
    correctAnswer: 6,
    explanation: "$f = 3N - k = 3(5) - 9 = 15 - 9 = 6$."
  },
  {
    question: "What is the total internal energy in Joules of $1\\text{ mole}$ of a rigid diatomic gas ($f = 5$) at $300\\text{ K}$? (Take $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$; rounded to nearest integer)",
    correctAnswer: 6236,
    explanation: "$U = \\frac{5}{2} n R T = \\frac{5}{2} \\times 1 \\times 8.314 \\times 300 = 2.5 \\times 2494.2 = 6235.5\\text{ J} \\approx 6236\\text{ J}$."
  },
  {
    question: "The ratio of the molar heat capacity $C_p$ of a monoatomic gas to that of a rigid diatomic gas is $x/7$. Find $x$.",
    correctAnswer: 5,
    explanation: "$C_{p,\\text{mono}} = \\frac{5}{2}R$, and $C_{p,\\text{dia}} = \\frac{7}{2}R$. Ratio is $\\frac{5/2 R}{7/2 R} = \\frac{5}{7} = \\frac{x}{7} \\implies x = 5$."
  },
  {
    question: "A polyatomic gas with $f = 6$ degrees of freedom expands adiabatically such that its volume doubles. By what factor does its temperature change? ($T_2 / T_1 = 2^{n}$; find the value of $-n$)",
    correctAnswer: 0.33,
    explanation: "For adiabatic expansion, $T V^{\\gamma - 1} = \\text{constant}$. For $f = 6$, $\\gamma = 1 + 2/6 = 4/3$, so $\\gamma - 1 = 1/3$. Thus $T_2 / T_1 = (V_1 / V_2)^{1/3} = (1/2)^{1/3} = 2^{-1/3}$. Therefore, $-n = 1/3 \\approx 0.33$."
  },
  {
    question: "If $1\\text{ mole}$ of Helium ($f = 3$) and $2\\text{ moles}$ of Oxygen ($f = 5$) are mixed, the effective degrees of freedom $f_{\\text{mix}}$ of the mixture is $x/3$. Find $x$.",
    correctAnswer: 13,
    explanation: "$f_{\\text{mix}} = \\frac{n_1 f_1 + n_2 f_2}{n_1 + n_2} = \\frac{1(3) + 2(5)}{1 + 2} = \\frac{3 + 10}{3} = \\frac{13}{3}$. Hence $x = 13$."
  },
  {
    question: "A molecule of ammonia ($\\text{NH}_3$) is pyramidal (non-linear) with $4$ atoms. How many normal modes of vibration does an ammonia molecule have?",
    correctAnswer: 6,
    explanation: "For a non-linear molecule with $N = 4$ atoms, the number of vibrational modes is $3N - 6 = 3(4) - 6 = 12 - 6 = 6$."
  },
  {
    question: "What is the molar heat capacity at constant pressure $C_p$ for a non-linear triatomic gas with $f = 6$ in units of $R$?",
    correctAnswer: 4,
    explanation: "$C_v = \\frac{6}{2}R = 3R$. $C_p = C_v + R = 3R + R = 4R$."
  },
  {
    question: "Two moles of a gas with $f = 5$ are mixed with $3\\text{ moles}$ of a gas with $f = 3$. The molar heat capacity $C_v$ of the mixture in units of $R$ is:",
    correctAnswer: 1.9,
    explanation: "$C_{v,\\text{mix}} = \\frac{n_1 C_{v,1} + n_2 C_{v,2}}{n_1 + n_2} = \\frac{2(2.5R) + 3(1.5R)}{2 + 3} = \\frac{5R + 4.5R}{5} = \\frac{9.5R}{5} = 1.9R$."
  },
  {
    question: "A rigid dumbbell molecule has $2$ point masses connected by a massless rigid rod. In two-dimensional space (confined to a plane), how many degrees of freedom does it have?",
    correctAnswer: 3,
    explanation: "In 2D, two particles have $2 \\times 2 = 4$ coordinates. One fixed distance constraint reduces degrees of freedom to $4 - 1 = 3$ (2 translational coordinates for CM, 1 orientation angle $\\theta$ in the plane)."
  },
  {
    question: "For an ideal gas, the ratio of translational kinetic energy to total internal energy for a rigid diatomic gas is:",
    options: null,
    correctAnswer: 0.6,
    explanation: "$E_{\\text{trans}} = \\frac{3}{2}nRT$, and $U = \\frac{5}{2}nRT$. The ratio is $\\frac{3/2}{5/2} = \\frac{3}{5} = 0.6$."
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
      type: "MCQ",
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
      options: [],
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

  const outPath = path.join(__dirname, 'data_jee_ktg_part3.js');
  fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(allQuestions, null, 2) + ';\n');
  console.log(`Part 3 generated: ${allQuestions.length} questions (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length}, NUM: ${numQuestions.length})`);
  console.log(`Saved to ${outPath}`);
}

build();
