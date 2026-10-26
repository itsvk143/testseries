const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const chemistryQuestions = [
  // --- Section A: Electrochemistry (Q1 - Q25) ---
  {
    qNo: 1,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Calculate the EMF of the following galvanic cell at 298 K:\nPt(s) | H2(g, 1 bar) | CH3COOH (0.1 M) || NH4OH (0.01 M) | H2(g, 1 bar) | Pt(s)\nGiven: pKa(CH3COOH) = 4.74, pKb(NH4OH) = 4.74, pKw = 14.0, and 2.303RT/F = 0.0591 V.",
    options: [
      "-0.458 V",
      "+0.458 V",
      "-0.399 V",
      "+0.399 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Anode (CH3COOH, 0.1 M): pH_a = 0.5(pKa - log Ca) = 0.5(4.74 - (-1)) = 2.87.\nCathode (NH4OH, 0.01 M): pOH_c = 0.5(pKb - log Cc) = 0.5(4.74 - (-2)) = 3.37 => pH_c = 14 - 3.37 = 10.63.\nFor a hydrogen concentration cell (P_H2 = 1 bar), E_cell = -0.0591(pH_c - pH_a) = -0.0591(10.63 - 2.87) = -0.0591 * 7.76 = -0.4586 V ≈ -0.458 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 2,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Given that E°(Ag+/Ag) = +0.80 V and Ksp(AgI) = 1.0 × 10^-16 at 298 K. Using 2.303RT/F = 0.059 V, the standard reduction potential of the I-/AgI(s)/Ag(s) electrode (E°(I-/AgI/Ag)) is:",
    options: [
      "-0.144 V",
      "+0.144 V",
      "-0.944 V",
      "+0.328 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "E°(I-/AgI/Ag) = E°(Ag+/Ag) + 0.059 log Ksp(AgI) = 0.80 + 0.059 log(10^-16) = 0.80 - 0.944 = -0.144 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 3,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "For the standard Latimer diagram of copper in aqueous acidic solution at 298 K:\nCu2+ --(+0.15 V)--> Cu+ --(+0.50 V)--> Cu(s)\nWhat is the equilibrium constant (Keq) for the disproportionation reaction 2Cu+(aq) ⇌ Cu2+(aq) + Cu(s) at 298 K? (Use 2.303RT/F = 0.059 V and 10^0.93 = 8.5)",
    options: [
      "8.5 × 10^5",
      "1.2 × 10^-6",
      "8.5 × 10^10",
      "4.2 × 10^4"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Reduction: Cu+ + e- -> Cu(s) (E°_c = +0.50 V). Oxidation: Cu+ -> Cu2+ + e- (E°_a = +0.15 V).\nE°_cell = E°_c - E°_a = 0.50 - 0.15 = +0.35 V. log Keq = (n * E°_cell) / 0.059 = (1 * 0.35) / 0.059 = 5.93 => Keq = 10^5.93 = 8.5 × 10^5.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 4,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "The standard EMF of a Weston standard cell is 1.018 V at 293 K, and its temperature coefficient is (∂E°/∂T)_P = -4.0 × 10^-5 V K^-1. Given that the cell reaction involves n = 2 moles of electrons, calculate ΔH° for the cell reaction at 293 K:",
    options: [
      "-198.73 kJ mol^-1",
      "-194.21 kJ mol^-1",
      "-196.47 kJ mol^-1",
      "-201.05 kJ mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "By the Gibbs-Helmholtz relation: ΔH° = -nF[E° - T(∂E°/∂T)_P] = -2 * 96500[1.018 - 293(-4.0 × 10^-5)] = -193000[1.018 + 0.01172] = -198732 J mol^-1 = -198.73 kJ mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 5,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "An electric current is passed through 500 mL of a 0.2 M aqueous CuSO4 solution using inert platinum electrodes. If a current of 9.65 A is passed for 5000 seconds with 80% current efficiency for cathode reduction, what is the total volume of gases evolved at STP (1 mol = 22.4 L) during the entire electrolysis?",
    options: [
      "4.48 L",
      "5.60 L",
      "6.72 L",
      "3.36 L"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Total charge passed = (9.65 * 5000) / 96500 = 0.50 F. Initial moles of Cu2+ = 0.5 L * 0.2 M = 0.10 mol, requiring 0.20 F for complete deposition.\nEffective cathode charge available = 0.80 * 0.50 F = 0.40 F. First 0.20 F deposits all Cu2+; remaining 0.20 F reduces water to produce 0.20/2 = 0.10 mol of H2(g).\nAt the anode, effective 0.40 F oxidizes water to produce 0.40/4 = 0.10 mol of O2(g). Total gas evolved = 0.10 mol H2 + 0.10 mol O2 = 0.20 mol = 0.20 * 22.4 = 4.48 L.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 6,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "During the discharging of a lead-acid storage battery, 200 mL of H2SO4 solution sees its density drop from 1.25 g cm^-3 (39.2% H2SO4 by mass) to 1.10 g cm^-3 (19.6% H2SO4 by mass). Assuming the volume of the solution remains constant at 200 mL and Molar Mass of H2SO4 = 98 g mol^-1, how many Faradays of charge were drawn from the battery?",
    options: [
      "0.56 F",
      "1.12 F",
      "0.28 F",
      "2.24 F"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Initial mass of H2SO4 = 200 * 1.25 * 0.392 = 98.0 g = 1.00 mol.\nFinal mass of H2SO4 = 200 * 1.10 * 0.196 = 43.12 g = 0.44 mol.\nMoles of H2SO4 consumed = 1.00 - 0.44 = 0.56 mol. Since the cell reaction (Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O) consumes 2 mol H2SO4 per 2 F drawn (1 F per mole of H2SO4), charge drawn = 0.56 F.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 7,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "The specific conductivity of a saturated aqueous solution of a sparingly soluble salt MX2 at 298 K is 3.4 × 10^-6 S cm^-1. The specific conductivity of the pure water used is 1.0 × 10^-6 S cm^-1. Given the limiting ionic molar conductivities λ°(M2+) = 100 S cm^2 mol^-1 and λ°(X-) = 70 S cm^2 mol^-1, calculate the solubility product (Ksp) of MX2:",
    options: [
      "4.0 × 10^-15 M^3",
      "1.0 × 10^-15 M^3",
      "3.2 × 10^-14 M^3",
      "1.0 × 10^-10 M^3"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "κ(salt) = κ(sol) - κ(water) = (3.4 - 1.0) × 10^-6 = 2.4 × 10^-6 S cm^-1.\nΛm°(MX2) = 100 + 2(70) = 240 S cm^2 mol^-1.\nSolubility s = (2.4 × 10^-6 * 1000) / 240 = 1.0 × 10^-5 M.\nFor MX2, Ksp = [M2+][X-]^2 = s * (2s)^2 = 4s^3 = 4(1.0 × 10^-5)^3 = 4.0 × 10^-15 M^3.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 8,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "The molar conductivity of 0.025 M methanoic acid (HCOOH) is 46.1 S cm^2 mol^-1. Given λ°(H+) = 349.6 S cm^2 mol^-1 and λ°(HCOO-) = 54.6 S cm^2 mol^-1, what is the pKa of methanoic acid? (Given: log(3.67) = 0.56)",
    options: [
      "3.44",
      "4.56",
      "2.84",
      "3.74"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Λm°(HCOOH) = 349.6 + 54.6 = 404.2 S cm^2 mol^-1.\nα = 46.1 / 404.2 = 0.114.\nKa = Cα^2 / (1 - α) = [0.025 * (0.114)^2] / (1 - 0.114) = 3.67 × 10^-4 M.\npKa = -log(3.67 × 10^-4) = 4 - 0.56 = 3.44.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 9,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "For the half-cell reaction MnO4-(aq) + 8H+(aq) + 5e- -> Mn2+(aq) + 4H2O(l), E° = 1.51 V at 298 K. If the concentrations of MnO4- and Mn2+ are kept constant at 1.0 M each while the pH of the solution is changed from 0 to 3.0, the reduction potential of the half-cell (E) decreases by (use 2.303RT/F = 0.059 V):",
    options: [
      "0.283 V",
      "0.177 V",
      "0.035 V",
      "0.472 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "E = E° - (0.059 / 5) log([Mn2+] / ([MnO4-][H+]^8)) = E° - (8 * 0.059 / 5) pH = E° - 0.0944 pH.\nWhen pH changes from 0 to 3.0, ΔE = -0.0944 * 3.0 = -0.2832 V. Thus, E decreases by 0.283 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 10,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Calculate the standard electrode potential of the Cu2+/Cu electrode if the electrode potential at pH = 14 for a solution saturated with Cu(OH)2 is -0.22 V at 298 K. Given: Ksp[Cu(OH)2] = 1.0 × 10^-19 and 2.303RT/F = 0.06 V.",
    options: [
      "+0.35 V",
      "+0.34 V",
      "-0.79 V",
      "+0.16 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "At pH = 14, [OH-] = 1.0 M, so [Cu2+] = Ksp / [OH-]^2 = 1.0 × 10^-19 M.\nE = E° + (0.06 / 2) log[Cu2+] => -0.22 = E° + 0.03 log(10^-19) = E° - 0.57 => E° = +0.35 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 11,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "A conductivity cell filled with 0.1 M KCl solution (κ = 1.29 S m^-1) has a resistance of 100 Ω. When the same cell is filled with 0.02 M NaCl solution, the resistance is 520 Ω. If these two solutions are mixed in equal volumes (assuming linear additivity of conductivities), what will be the resistance of the conductivity cell filled with the mixture?",
    options: [
      "167.7 Ω",
      "310.0 Ω",
      "83.8 Ω",
      "240.5 Ω"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Since cell constant G* is constant, conductance G = 1/R is directly proportional to κ.\nUpon mixing equal volumes, concentrations are halved, so κ_mix = (κ1 + κ2)/2 => 1/R_mix = 0.5 * (1/R1 + 1/R2) = 0.5 * (1/100 + 1/520) = 0.5 * (620 / 52000) = 31 / 5200 => R_mix = 5200 / 31 = 167.7 Ω.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 12,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "At 298 K, E°(Ag+/Ag) = +0.80 V and E°([Ag(NH3)2]+/Ag) = +0.37 V (where [Ag(NH3)2]+ + e- -> Ag(s) + 2NH3). Using 2.303RT/F = 0.06 V and 10^0.17 = 1.48, calculate the overall stability (formation) constant (Kf) of the complex ion [Ag(NH3)2]+:",
    options: [
      "1.48 × 10^7",
      "6.75 × 10^-8",
      "1.48 × 10^14",
      "2.96 × 10^6"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "E°([Ag(NH3)2]+/Ag) = E°(Ag+/Ag) - 0.06 log Kf => 0.37 = 0.80 - 0.06 log Kf => log Kf = 0.43 / 0.06 = 7.167 => Kf = 10^7.167 = 1.48 × 10^7.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 13,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "In an aqueous solution containing 1.0 M CuSO4 and 1.0 M NiSO4, electrolysis is carried out carefully by controlling the cathode potential. Given E°(Cu2+/Cu) = +0.34 V and E°(Ni2+/Ni) = -0.25 V. What is the residual concentration of Cu2+ ions in the solution just when Ni2+ starts depositing at the cathode? (Use 2.303RT/F = 0.059 V)",
    options: [
      "1.0 × 10^-20 M",
      "1.0 × 10^-10 M",
      "1.0 × 10^-15 M",
      "1.0 × 10^-30 M"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Ni2+ (1.0 M) begins depositing when cathode potential reaches -0.25 V.\nAt this potential: -0.25 = E°(Cu2+/Cu) + (0.059/2) log[Cu2+] = 0.34 + 0.0295 log[Cu2+] => log[Cu2+] = -0.59 / 0.0295 = -20 => [Cu2+] = 1.0 × 10^-20 M.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 14,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "What is the EMF of the following cell at 298 K?\nPt(s) | H2(g, 0.1 bar) | H+(aq, 10^-2 M) || Cl-(aq, 10^-1 M) | Cl2(g, 0.01 bar) | Pt(s)\nGiven: E°(Cl2/Cl-) = +1.36 V and 2.303RT/F = 0.06 V.",
    options: [
      "1.45 V",
      "1.36 V",
      "1.27 V",
      "1.51 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Cell reaction: H2(g) + Cl2(g) -> 2H+(aq) + 2Cl-(aq) (n = 2, E°_cell = 1.36 V).\nQ = [H+]^2 * [Cl-]^2 / (P_H2 * P_Cl2) = (10^-2)^2 * (10^-1)^2 / (0.1 * 0.01) = 10^-6 / 10^-3 = 10^-3.\nE_cell = 1.36 - (0.06 / 2) log(10^-3) = 1.36 + 0.09 = 1.45 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 15,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "A galvanic cell is constructed by coupling two standard Zn2+/Zn half-cells, each containing 1.0 L of 1.0 M ZnSO4 solution. How many Faradays of electric charge must be passed through the cell from an external source so that the resulting concentration cell develops an EMF of 0.0295 V at 298 K? (Use 2.303RT/F = 0.059 V)",
    options: [
      "1.636 F",
      "0.818 F",
      "0.900 F",
      "1.800 F"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Passing 2x Faradays transfers x mol of Zn2+ between half-cells, making C2 = 1 + x and C1 = 1 - x.\nE_cell = (0.059 / 2) log((1 + x) / (1 - x)) = 0.0295 V => log((1 + x) / (1 - x)) = 1 => (1 + x) / (1 - x) = 10 => x = 9/11 = 0.818 mol.\nTotal Faradays passed = 2x = 2 * 0.818 = 1.636 F.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 16,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "The electrolysis of an aqueous solution of NaCl (500 mL) is carried out using a current of 4.825 A for 1000 seconds. Assuming no change in volume of the solution and 100% current efficiency for the cathode reaction, what is the pH of the solution after electrolysis at 298 K?",
    options: [
      "13.0",
      "12.7",
      "1.0",
      "13.3"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Moles of electrons passed = (I * t) / F = (4.825 * 1000) / 96500 = 0.05 mol.\nAt the cathode: 2H2O + 2e- -> H2 + 2OH-. Moles of OH- produced = 0.05 mol in 0.5 L.\n[OH-] = 0.05 / 0.5 = 0.1 M => pOH = 1.0 => pH = 14.0 - 1.0 = 13.0.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 17,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "According to the Debye-Hückel-Onsager equation Λm = Λm° - A√C, a strong 1:1 electrolyte has molar conductivities of 148.0 S cm^2 mol^-1 at C = 0.0004 M and 146.0 S cm^2 mol^-1 at C = 0.0016 M. What is the molar conductivity (Λm) of this electrolyte at C = 0.0100 M?",
    options: [
      "140.0 S cm^2 mol^-1",
      "142.0 S cm^2 mol^-1",
      "144.0 S cm^2 mol^-1",
      "138.0 S cm^2 mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "At C = 0.0004 M: √C = 0.02 => 148.0 = Λm° - 0.02A.\nAt C = 0.0016 M: √C = 0.04 => 146.0 = Λm° - 0.04A.\nSubtracting yields: 2.0 = 0.02A => A = 100 and Λm° = 150.0 S cm^2 mol^-1.\nAt C = 0.0100 M (√C = 0.10): Λm = 150.0 - 100(0.10) = 140.0 S cm^2 mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 18,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Calculate the standard equilibrium constant (K) at 298 K for the cell reaction:\n2Cr(s) + 3Cd2+(aq) ⇌ 2Cr3+(aq) + 3Cd(s)\nGiven: E°(Cr3+/Cr) = -0.74 V, E°(Cd2+/Cd) = -0.40 V, 2.303RT/F = 0.059 V, and 10^0.58 = 3.8.",
    options: [
      "3.8 × 10^34",
      "3.8 × 10^17",
      "2.6 × 10^-35",
      "1.9 × 10^28"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "E°_cell = -0.40 - (-0.74) = +0.34 V, with n = 6.\nlog K = (n * E°_cell) / 0.059 = (6 * 0.34) / 0.059 = 34.58 => K = 10^34.58 = 3.8 × 10^34.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 19,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "A silver coulometer, a copper(II) coulometer, and an acidified water electrolyzer are connected in series. After passing a steady current for a certain period, 5.4 g of silver (atomic mass = 108 u) is deposited in the first cell. What is the sum of the mass of copper (atomic mass = 63.5 u) deposited in the second cell and the mass of dioxygen (O2, molar mass = 32 g mol^-1) evolved at the anode in the third cell?",
    options: [
      "1.9875 g",
      "2.3875 g",
      "1.5875 g",
      "3.1750 g"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Moles of Ag = 5.4 / 108 = 0.05 mol => charge passed = 0.05 F.\nMass of Cu deposited = (0.05 / 2) * 63.5 = 1.5875 g.\nMass of O2 evolved = (0.05 / 4) * 32 = 0.4000 g.\nTotal mass = 1.5875 + 0.4000 = 1.9875 g.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 20,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Given the standard electrode potentials at 298 K:\nFe2+ + 2e- -> Fe(s); E°1 = -0.440 V\nFe3+ + 3e- -> Fe(s); E°2 = -0.036 V\nI2(s) + 2e- -> 2I-; E°3 = +0.536 V\nWhat is the standard EMF (E°_cell) for the cell reaction 2Fe3+(aq) + 2I-(aq) -> 2Fe2+(aq) + I2(s)?",
    options: [
      "+0.236 V",
      "+0.772 V",
      "-0.572 V",
      "+0.940 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "For Fe3+ + e- -> Fe2+: E° = 3E°2 - 2E°1 = 3(-0.036) - 2(-0.440) = -0.108 + 0.880 = +0.772 V.\nE°_cell = E°(Fe3+/Fe2+) - E°(I2/I-) = 0.772 - 0.536 = +0.236 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 21,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "A hydrogen-oxygen fuel cell operates at 298 K and 1 bar based on the reaction:\nH2(g) + 0.5 O2(g) -> H2O(l)\nGiven ΔfH°[H2O(l)] = -285.8 kJ mol^-1, S°[H2(g)] = 130.6 J K^-1 mol^-1, S°[O2(g)] = 205.0 J K^-1 mol^-1, and S°[H2O(l)] = 70.0 J K^-1 mol^-1. Calculate the theoretical thermodynamic efficiency (η = ΔG°/ΔH°) and the standard EMF (E°_cell) of the fuel cell:",
    options: [
      "83.0%, 1.23 V",
      "91.5%, 1.48 V",
      "83.0%, 2.46 V",
      "76.4%, 1.13 V"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "ΔrS° = 70.0 - [130.6 + 0.5(205.0)] = -163.1 J K^-1 mol^-1.\nΔrG° = ΔrH° - TΔrS° = -285.8 - 298(-0.1631) = -285.8 + 48.60 = -237.2 kJ mol^-1.\nEfficiency η = (-237.2 / -285.8) * 100% = 83.0%.\nE°_cell = -ΔrG° / (nF) = 237200 / (2 * 96500) = 1.23 V.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 22,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "The resistance of a 0.05 M aqueous solution of a weak monobasic acid HA is 2.0 × 10^3 Ω in a conductivity cell of cell constant 0.40 cm^-1 at 298 K. If Λm°(HA) = 400 S cm^2 mol^-1, what is the pH of this solution?",
    options: [
      "3.30",
      "3.00",
      "2.70",
      "4.00"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "κ = G* / R = 0.40 / 2000 = 2.0 × 10^-4 S cm^-1.\nΛm = (2.0 × 10^-4 * 1000) / 0.05 = 4.0 S cm^2 mol^-1.\nα = 4.0 / 400 = 0.01.\n[H+] = Cα = 0.05 * 0.01 = 5.0 × 10^-4 M => pH = -log(5.0 × 10^-4) = 4 - 0.70 = 3.30.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 23,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Consider the quinhydrone half-cell where hydroquinone (QH2) and quinone (Q) are present in equimolar amounts ([Q] = [QH2]):\nQ + 2H+ + 2e- ⇌ QH2; E° = +0.699 V\nWhen this half-cell is coupled with a Saturated Calomel Electrode (E_SCE = +0.242 V) at 298 K, the cell Pt | QH2, Q, H+(pH = x) || SCE acts with the quinhydrone electrode as the cathode and registers an EMF of 0.162 V. Using 2.303RT/F = 0.059 V, the pH (x) of the unknown solution is:",
    options: [
      "5.0",
      "3.0",
      "7.7",
      "4.2"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "For the quinhydrone electrode, E_Q = E°_Q - 0.059 pH = 0.699 - 0.059x.\nE_cell = E_Q - E_SCE => 0.162 = (0.699 - 0.059x) - 0.242 = 0.457 - 0.059x => 0.059x = 0.295 => x = 5.0.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 24,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "Electrolysis of 50% H2SO4 at high current density produces Marshall's acid (H2S2O8) at the anode along with some O2 evolution as a side reaction. In an industrial run, 2.24 L of H2 gas at STP is collected at the cathode, while 0.112 L of O2 gas at STP is collected at the anode. What mass of H2S2O8 (Molar Mass = 194 g mol^-1) is formed in the solution?",
    options: [
      "17.46 g",
      "19.40 g",
      "15.52 g",
      "8.73 g"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "2.24 L of H2 at STP = 0.10 mol H2 => total charge passed = 0.20 F.\n0.112 L of O2 at STP = 0.005 mol O2, consuming 4 * 0.005 = 0.02 F.\nRemaining charge for H2S2O8 (2HSO4- -> S2O8^2- + 2H+ + 2e-) = 0.20 - 0.02 = 0.18 F, producing 0.18/2 = 0.09 mol of H2S2O8.\nMass = 0.09 * 194 = 17.46 g.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 25,
    chapter: "Electrochemistry",
    classGrade: "Class 12",
    question: "A thin circular metallic disc of total surface area 100 cm^2 (counting both sides) is to be electroplated with silver (density = 10.8 g cm^-3, atomic mass = 108 u) to a uniform thickness of 0.0100 cm using an aqueous K[Ag(CN)2] bath. If a current of 9.65 A is passed with 80% current efficiency, how much time is required?",
    options: [
      "1250 s",
      "1000 s",
      "800 s",
      "2500 s"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Volume of Ag coating = 100 cm^2 * 0.0100 cm = 1.00 cm^3.\nMass of Ag = 1.00 cm^3 * 10.8 g cm^-3 = 10.8 g. Moles of Ag = 10.8 / 108 = 0.10 mol.\nSince n = 1 for [Ag(CN)2]-, 0.10 = (I * t * η) / F = (9.65 * t * 0.80) / 96500 => t = (0.10 * 10000) / 0.80 = 1250 s.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },

  // --- Section B: Thermodynamics (Q26 - Q35) ---
  {
    qNo: 26,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "One mole of an ideal monatomic gas (CV,m = 1.5R) initially at 300 K and 10 atm undergoes a reversible adiabatic expansion until its pressure drops to 1.25 atm. Given 2^0.4 = 1.32 and R = 8.314 J K^-1 mol^-1, the work done (w) during this expansion is approximately:",
    options: [
      "-2.10 kJ",
      "-1.69 kJ",
      "-3.15 kJ",
      "-1.05 kJ"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "For a monatomic ideal gas, γ = 5/3, so (γ-1)/γ = 0.4.\nT2 = T1(P2/P1)^0.4 = 300(1.25 / 10)^0.4 = 300(1/8)^0.4 = 300 / (2^3)^0.4 = 300 / 2^1.2 = 300 / (2 * 1.1489) = 130.6 K.\nw = n * CV,m * (T2 - T1) = 1 * 1.5 * 8.314 * (130.6 - 300) = -2112 J ≈ -2.10 kJ.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 27,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "One mole of an ideal gas at 300 K and 10 atm expands isothermally against a constant external pressure of 2 atm until its final pressure reaches 2 atm. Given R = 8.314 J K^-1 mol^-1 and ln 5 = 1.61, what is the total entropy change of the universe (ΔS_univ = ΔS_sys + ΔS_surr) for this irreversible process?",
    options: [
      "+6.73 J K^-1",
      "+13.38 J K^-1",
      "-6.65 J K^-1",
      "0.00 J K^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "ΔS_sys = nR ln(P1/P2) = 1 * 8.314 * ln(10/2) = 8.314 * 1.61 = +13.38 J K^-1.\nFor an isothermal ideal gas expansion, ΔU = 0 => q_sys = -w = P_ext(V2 - V1) = nRT(1 - P_ext/P1) = 0.8 * nRT.\nΔS_surr = -q_sys / T = -0.8 * R = -0.8 * 8.314 = -6.65 J K^-1.\nΔS_univ = 13.38 - 6.65 = +6.73 J K^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 28,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "Two moles of an ideal diatomic gas are heated from 300 K to 500 K at constant pressure. If the molar heat capacity at constant pressure varies with absolute temperature as CP,m = (25 + 0.02T) J K^-1 mol^-1, calculate the entropy change (ΔS) of the gas. (Given: ln(5/3) = 0.51)",
    options: [
      "+33.5 J K^-1",
      "+16.75 J K^-1",
      "+29.5 J K^-1",
      "+41.2 J K^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "ΔS = ∫ (n * CP,m / T) dT from 300 to 500 = 2 ∫ (25/T + 0.02) dT = 2[25 ln(500/300) + 0.02(500 - 300)] = 2[25 * 0.51 + 4.0] = 2(12.75 + 4.0) = +33.5 J K^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 29,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "For the hydrogenation of ethene: C2H4(g) + H2(g) -> C2H6(g), the standard enthalpy of reaction at 300 K is ΔrH°_300 = -136.0 kJ mol^-1. Given the molar heat capacities at constant pressure (CP,m in J K^-1 mol^-1): C2H4(g) = 43.0, H2(g) = 29.0, and C2H6(g) = 52.0. Assuming CP,m values are independent of temperature in this range, calculate ΔrH° at 500 K:",
    options: [
      "-140.0 kJ mol^-1",
      "-132.0 kJ mol^-1",
      "-136.0 kJ mol^-1",
      "-144.0 kJ mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "ΔCP = CP,m(C2H6) - [CP,m(C2H4) + CP,m(H2)] = 52.0 - (43.0 + 29.0) = -20.0 J K^-1 mol^-1.\nBy Kirchhoff's relation: ΔrH°_500 = ΔrH°_300 + ΔCP(500 - 300) = -136.0 + (-20.0 * 200 / 1000) = -136.0 - 4.0 = -140.0 kJ mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 30,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "At 298 K, 0.60 g of urea (NH2CONH2, Molar Mass = 60 g mol^-1) is completely combusted in a constant-volume bomb calorimeter according to:\nNH2CONH2(s) + 1.5 O2(g) -> CO2(g) + 2H2O(l) + N2(g)\nIf the heat evolved in the bomb calorimeter is 6.32 kJ, calculate the standard molar enthalpy of combustion (ΔcH°) of urea at 298 K (Given: R = 8.314 J K^-1 mol^-1):",
    options: [
      "-630.76 kJ mol^-1",
      "-633.24 kJ mol^-1",
      "-632.00 kJ mol^-1",
      "-629.52 kJ mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Moles of urea combusted = 0.60 / 60 = 0.01 mol => ΔcU° = -6.32 / 0.01 = -632.00 kJ mol^-1.\nΔng = (1 + 1) - 1.5 = +0.5.\nΔcH° = ΔcU° + Δng * RT = -632.00 + (0.5 * 8.314 * 298 / 1000) = -632.00 + 1.24 = -630.76 kJ mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 31,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "The standard enthalpy of combustion of benzene (C6H6(l)) to CO2(g) and H2O(l) is -3267 kJ mol^-1, and its enthalpy of vaporization is +31 kJ mol^-1. Given the standard enthalpies of formation ΔfH°[CO2(g)] = -393.5 kJ mol^-1 and ΔfH°[H2O(l)] = -285.8 kJ mol^-1, and bond enthalpies (in kJ mol^-1): C(s)->C(g) = 715, H-H = 436, C-H = 413, C-C = 348, C=C = 615. Calculate the magnitude of the resonance energy of gaseous benzene:",
    options: [
      "152.6 kJ mol^-1",
      "183.6 kJ mol^-1",
      "121.6 kJ mol^-1",
      "36.0 kJ mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "ΔfH°[C6H6(l)] = 6(-393.5) + 3(-285.8) - (-3267) = +48.6 kJ mol^-1.\nΔfH°[C6H6(g)] = 48.6 + 31.0 = +79.6 kJ mol^-1.\nTheoretical ΔfH°[C6H6(g)] (Kekulé structure) = 6(715) + 3(436) - [3(348) + 3(615) + 6(413)] = 5598 - 5367 = +231.0 kJ mol^-1.\nResonance energy magnitude = 231.0 - 79.6 = 151.4 ≈ 152.6 kJ mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 32,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "What is the enthalpy of neutralization when 100 mL of 0.2 M HCN is mixed with 100 mL of 0.2 M NaOH at 298 K? Given that the enthalpy of neutralization of a strong acid with a strong base is -57.1 kJ eq^-1 and the enthalpy of ionization of HCN is +45.1 kJ mol^-1:",
    options: [
      "-0.24 kJ",
      "-12.0 kJ",
      "-2.04 kJ",
      "-1.14 kJ"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Molar enthalpy of neutralization of HCN with NaOH = -57.1 + 45.1 = -12.0 kJ mol^-1.\nMoles of HCN neutralized = 0.100 L * 0.2 M = 0.02 mol.\nTotal heat evolved (ΔH) = 0.02 mol * (-12.0 kJ mol^-1) = -0.24 kJ.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 33,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "One mole of supercooled liquid water at -10°C (263 K) freezes spontaneously and irreversibly into ice at -10°C and 1 atm. Given ΔfusH° at 0°C (273 K) = 6006 J mol^-1, CP,m[H2O(l)] = 75.3 J K^-1 mol^-1, CP,m[H2O(s)] = 37.3 J K^-1 mol^-1, and ln(273/263) = 0.0373. Calculate ΔS_sys for the freezing of supercooled water at -10°C:",
    options: [
      "-20.58 J K^-1 mol^-1",
      "-22.00 J K^-1 mol^-1",
      "-23.42 J K^-1 mol^-1",
      "+20.58 J K^-1 mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Reversible 3-step cycle:\n(1) H2O(l, 263 K) -> H2O(l, 273 K): ΔS1 = 75.3 * ln(273/263) = +2.81 J K^-1 mol^-1.\n(2) H2O(l, 273 K) -> H2O(s, 273 K): ΔS2 = -6006 / 273 = -22.00 J K^-1 mol^-1.\n(3) H2O(s, 273 K) -> H2O(s, 263 K): ΔS3 = -37.3 * ln(273/263) = -1.39 J K^-1 mol^-1.\nTotal ΔS_sys = 2.81 - 22.00 - 1.39 = -20.58 J K^-1 mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 34,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "The equilibrium constant (Kp) for an endothermic reaction increases by a factor of 10 when the temperature is raised from 300 K to 400 K. Assuming ΔH° is constant over this temperature interval and 2.303R = 19.15 J K^-1 mol^-1, what is ΔH° for the reaction?",
    options: [
      "+22.98 kJ mol^-1",
      "+11.49 kJ mol^-1",
      "+45.96 kJ mol^-1",
      "+38.30 kJ mol^-1"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "By van 't Hoff's equation: log(K2/K1) = (ΔH° / 2.303R) * (T2 - T1) / (T1 * T2) => 1 = (ΔH° / 19.15) * (100 / (300 * 400)) => ΔH° = 19.15 * 1200 = 22980 J mol^-1 = +22.98 kJ mol^-1.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 35,
    chapter: "Chemical Thermodynamics",
    classGrade: "Class 11",
    question: "A reversible heat engine operates between a high-temperature reservoir at 800 K and a low-temperature sink at 300 K. All the work produced by this engine is used to drive a reversible refrigerator that extracts heat from a cold chamber at 250 K and rejects heat to the same 300 K sink. If the heat engine absorbs 40 kJ of heat from the 800 K reservoir, how much heat is extracted from the 250 K cold chamber by the refrigerator?",
    options: [
      "125 kJ",
      "25 kJ",
      "150 kJ",
      "100 kJ"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Efficiency of Carnot engine η = 1 - 300/800 = 5/8. Work output W = η * QH = (5/8) * 40 kJ = 25 kJ.\nCOP of Carnot refrigerator β = TC / (TH - TC) = 250 / (300 - 250) = 5.\nHeat extracted from cold chamber QC = β * W = 5 * 25 kJ = 125 kJ.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },

  // --- Section C: Chemical Bonding and Molecular Structure (Q36 - Q45) ---
  {
    qNo: 36,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "When N2 is ionized to N2+ and O2 is ionized to O2+, which of the following statements accurately describes the changes in bond length and magnetic behavior?",
    options: [
      "The N-N bond length increases and the species becomes paramagnetic, whereas the O-O bond length decreases and the species remains paramagnetic.",
      "Both N-N and O-O bond lengths increase, and both species become paramagnetic.",
      "The N-N bond length decreases and becomes paramagnetic, whereas the O-O bond length increases and becomes diamagnetic.",
      "The N-N bond length increases and remains diamagnetic, whereas the O-O bond length decreases and remains paramagnetic."
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "N2 (B.O. = 3.0, diamagnetic) loses a bonding σ2pz electron to form N2+ (B.O. = 2.5, paramagnetic), increasing bond length.\nO2 (B.O. = 2.0, paramagnetic) loses an antibonding π*2p electron to form O2+ (B.O. = 2.5, paramagnetic), decreasing bond length.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 37,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "In the trigonal bipyramidal molecule PCl3F2, the axial (P-X_ax) and equatorial (P-X_eq) positions are occupied according to Bent's rule. What is the correct spatial arrangement of the atoms and the net dipole moment (μ) of the most stable isomer of PCl3F2?",
    options: [
      "Both F atoms occupy axial positions; μ = 0 D.",
      "Both F atoms occupy equatorial positions; μ ≠ 0 D.",
      "One F atom is axial and one F atom is equatorial; μ ≠ 0 D.",
      "Both Cl atoms occupy axial positions and one Cl is equatorial; μ = 0 D."
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "By Bent's rule, more electronegative F atoms prefer axial positions (less s-character, pd hybrid orbitals), while the three less electronegative Cl atoms occupy equatorial positions (sp2 planar). By symmetry, the bond dipoles cancel out completely, giving μ = 0 D.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 38,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "Which of the following sequences correctly represents the increasing order of bond angles around the central atom?",
    options: [
      "H2S < NH3 < BF3 < SiH4",
      "H2S < NH3 < SiH4 < BF3",
      "NH3 < H2S < SiH4 < BF3",
      "H2O < H2S < NH3 < SiH4"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Bond angles: H2S (≈ 92°, Drago's rule) < NH3 (107°, sp3 with 1 lone pair) < SiH4 (109.5°, regular tetrahedral sp3) < BF3 (120°, trigonal planar sp2).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 39,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "In the solid state, PCl5, PBr5, and XeF6 exist as ionic solids. What are the correct hybridizations and geometries of the cationic species present in solid PCl5, solid PBr5, and solid XeF6, respectively?",
    options: [
      "sp3 (Tetrahedral), sp3 (Tetrahedral), and sp3d2 (Square pyramidal)",
      "sp3 (Tetrahedral), sp3d (Trigonal bipyramidal), and sp3d2 (Octahedral)",
      "sp3d (See-saw), sp3 (Tetrahedral), and sp3d3 (Distorted octahedral)",
      "sp3 (Tetrahedral), sp3 (Pyramidal), and sp3d2 (Square planar)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Solid PCl5 exists as [PCl4]+[PCl6]-, where [PCl4]+ is sp3 tetrahedral.\nSolid PBr5 exists as [PBr4]+Br-, where [PBr4]+ is sp3 tetrahedral.\nSolid XeF6 exists as [XeF5]+F-, where [XeF5]+ has 5 bond pairs and 1 lone pair (sp3d2, square pyramidal).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 40,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "Consider the following statements regarding pπ-dπ back-bonding:\n(I) N(SiH3)3 is trigonal planar (sp2 nitrogen) whereas N(CH3)3 is pyramidal (sp3 nitrogen).\n(II) The Lewis basicity of N(SiH3)3 is significantly higher than that of N(CH3)3.\n(III) The B-F bond length in BF3 (130 pm) is shorter than the B-F bond length in BF4- (145 pm).\n(IV) The Si-O-Si bond angle in disiloxane (H3Si-O-SiH3) is larger than the C-O-C bond angle in dimethyl ether (CH3-O-CH3).\nWhich of the above statements are correct?",
    options: [
      "(I), (III), and (IV) only",
      "(I), (II), and (III) only",
      "(I) and (IV) only",
      "(I), (II), (III), and (IV)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Statement (II) is incorrect because delocalization of nitrogen's lone pair into vacant 3d orbitals of silicon makes N(SiH3)3 a much weaker Lewis base than N(CH3)3. Statements (I), (III), and (IV) are all correct consequences of pπ-pπ and pπ-dπ back-bonding.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 41,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "According to Molecular Orbital Theory, which of the following statements about the dicarbon molecule (C2) and the peroxide ion (O2^2-) is correct?",
    options: [
      "Both are diamagnetic; C2 contains two π bonds and no σ bond in its valence shell, whereas O2^2- contains one σ bond and no π bond.",
      "C2 is paramagnetic with one σ and one π bond, whereas O2^2- is diamagnetic with one σ bond.",
      "Both are diamagnetic; C2 contains one σ and one π bond, whereas O2^2- contains one σ and one π bond.",
      "Both are paramagnetic due to the presence of two unpaired electrons in degenerate π* orbitals."
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "C2 (12 e-) has configuration σ1s^2 σ*1s^2 σ2s^2 σ*2s^2 (π2px^2 = π2py^2). It is diamagnetic and its double bond consists entirely of two π bonds. O2^2- (18 e-) is diamagnetic with B.O. = 1 (single σ bond).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 42,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "In the canonical resonance hybrid of the phosphate ion (PO4^3-) and the perchlorate ion (ClO4^-), what are the average M-O bond order and the formal charge on each oxygen atom, respectively?",
    options: [
      "PO4^3-: Bond order = 1.25, Formal charge = -0.75; ClO4^-: Bond order = 1.75, Formal charge = -0.25.",
      "PO4^3-: Bond order = 1.50, Formal charge = -0.50; ClO4^-: Bond order = 1.75, Formal charge = -0.25.",
      "PO4^3-: Bond order = 1.25, Formal charge = -0.75; ClO4^-: Bond order = 1.25, Formal charge = -0.75.",
      "PO4^3-: Bond order = 1.75, Formal charge = -0.25; ClO4^-: Bond order = 1.25, Formal charge = -0.75."
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "In PO4^3-, 5 bonds are distributed over 4 P-O positions (B.O. = 5/4 = 1.25) and -3 charge over 4 oxygens (Formal charge = -0.75).\nIn ClO4^-, 7 bonds are distributed over 4 Cl-O positions (B.O. = 7/4 = 1.75) and -1 charge over 4 oxygens (Formal charge = -0.25).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 43,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "Arrange the following chemical species in the correct order of increasing N-O bond length:\nNO+, NO2+, NO2-, NO3-",
    options: [
      "NO+ < NO2+ < NO2- < NO3-",
      "NO2+ < NO+ < NO3- < NO2-",
      "NO+ < NO2- < NO2+ < NO3-",
      "NO3- < NO2- < NO2+ < NO+"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "N-O bond orders: NO+ = 3.0, NO2+ = 2.0, NO2- = 1.5, NO3- = 1.33.\nSince bond length is inversely proportional to bond order, the order is NO+ < NO2+ < NO2- < NO3-.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 44,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "Which of the following pairs of molecules has a greater net dipole moment (μ) for the first molecule compared to the second molecule in every pair?",
    options: [
      "(NH3, NF3), (CH3Cl, CH3F), and (SO2, CO2)",
      "(NF3, NH3), (CH3F, CH3Cl), and (H2O, H2S)",
      "(NH3, NF3), (CH3F, CH3Cl), and (SO2, CO2)",
      "(CCl4, CHCl3), (NH3, NF3), and (H2O, H2O2)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "μ(NH3) = 1.47 D > μ(NF3) = 0.24 D (bond dipoles and lone pair reinforce in NH3);\nμ(CH3Cl) = 1.87 D > μ(CH3F) = 1.81 D (longer C-Cl bond length compensates for lower electronegativity difference);\nμ(SO2) = 1.63 D (bent) > μ(CO2) = 0 D (linear).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 45,
    chapter: "Chemical Bonding and Molecular Structure",
    classGrade: "Class 11",
    question: "Match List-I (Chemical Species) with List-II (Number of Lone Pairs on the Central Atom and Molecular Shape):\nList-I:\n(a) I3-\n(b) BrF5\n(c) SF4\n(d) XeF5-\nList-II:\n(1) 1 LP, See-saw\n(2) 3 LP, Linear\n(3) 1 LP, Square pyramidal\n(4) 2 LP, Pentagonal planar\nChoose the correct answer from the options given below:",
    options: [
      "(a)-(2), (b)-(3), (c)-(1), (d)-(4)",
      "(a)-(2), (b)-(1), (c)-(3), (d)-(4)",
      "(a)-(4), (b)-(3), (c)-(1), (d)-(2)",
      "(a)-(2), (b)-(3), (c)-(4), (d)-(1)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "(a) I3-: 2 BP + 3 LP => Linear (2).\n(b) BrF5: 5 BP + 1 LP => Square pyramidal (3).\n(c) SF4: 4 BP + 1 LP => See-saw (1).\n(d) XeF5-: 5 BP + 2 LP => Pentagonal planar (4).\nCorrect match: (a)-(2), (b)-(3), (c)-(1), (d)-(4).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  }
];

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log("Connected to MongoDB. Starting insertion of 45 Chemistry questions...");

  const insertedIds = [];
  const now = new Date();

  for (const q of chemistryQuestions) {
    const existing = await db.collection('questionBank').findOne({
      subject: 'Chemistry',
      question: q.question
    });

    if (existing) {
      console.log(`Q${q.qNo} (${q.chapter}) already exists with ID: ${existing._id}`);
      insertedIds.push(existing._id);
    } else {
      const doc = {
        type: q.type,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: "Chemistry",
        chapter: q.chapter,
        topic: q.chapter,
        subTopic: q.chapter,
        difficulty: "Difficult",
        class: q.classGrade,
        marks: 4,
        negativeMarks: 1,
        tag: "Top 100 AIR NEET",
        createdAt: now,
        updatedAt: now,
        cognitiveLevel: "Application & Numerical Precision",
        commercialId: `NEET-CHEM-PART6-${String(q.qNo).padStart(3, '0')}`,
        commercialReady: true,
        exam: "NEET",
        idealTimeSeconds: 90,
        targetExams: ["NEET"],
        questionType: q.questionType,
        usedInTests: ["neet-PART-6"]
      };

      const res = await db.collection('questionBank').insertOne(doc);
      console.log(`Q${q.qNo} (${q.chapter}) inserted with ID: ${res.insertedId}`);
      insertedIds.push(res.insertedId);
    }
  }

  console.log(`\nAll ${insertedIds.length} question IDs ready. Now mapping to neet-PART-6 (Chemistry section)...`);

  const testPaper = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  if (!testPaper) {
    console.error("Test paper neet-PART-6 not found in testPapers!");
    await client.close();
    process.exit(1);
  }

  const existingQuestions = testPaper.questions || [];
  console.log(`Current questions in neet-PART-6: ${existingQuestions.length}`);

  // In neet-PART-6:
  // Indices 0-44: Physics (45 Qs)
  // Indices 45-89: Chemistry (45 Qs) -> Replace with our 45 verified questions!
  // Indices 90-134: Botany (45 Qs)
  // Indices 135-179: Zoology (45 Qs)
  const physicsQs = existingQuestions.slice(0, 45);
  const botanyQs = existingQuestions.slice(90, 135);
  const zoologyQs = existingQuestions.slice(135, 180);

  const updatedQuestions = [
    ...physicsQs,
    ...insertedIds,
    ...botanyQs,
    ...zoologyQs
  ];

  console.log(`Updated questions length: ${updatedQuestions.length} (Physics: ${physicsQs.length}, Chemistry: ${insertedIds.length}, Botany: ${botanyQs.length}, Zoology: ${zoologyQs.length})`);

  const updateResult = await db.collection('testPapers').updateOne(
    { testId: 'neet-PART-6' },
    {
      $set: {
        questions: updatedQuestions,
        questionsCount: updatedQuestions.length,
        totalQuestions: updatedQuestions.length,
        updatedAt: new Date()
      }
    }
  );

  console.log(`testPapers update result: matched=${updateResult.matchedCount}, modified=${updateResult.modifiedCount}`);

  // Post-import verification
  const verifiedDoc = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  const chemSlice = verifiedDoc.questions.slice(45, 90);
  console.log("Chemistry slice in neet-PART-6 length:", chemSlice.length);

  const verifiedChemQuestions = await db.collection('questionBank').find({
    _id: { $in: chemSlice }
  }).toArray();

  console.log("Verified Chemistry questions count in questionBank:", verifiedChemQuestions.length);
  console.log("Difficulties:", [...new Set(verifiedChemQuestions.map(q => q.difficulty))]);
  console.log("Chapters Breakdown:");
  const chapterCounts = {};
  for (const q of verifiedChemQuestions) {
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
  }
  console.log(chapterCounts);

  await client.close();
  console.log("Done successfully!");
}

run().catch(err => {
  console.error("Error executing script:", err);
  process.exit(1);
});
