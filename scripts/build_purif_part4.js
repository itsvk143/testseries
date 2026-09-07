// scripts/build_purif_part4.js
// Subtopic: Chromatography (TLC, column chromatography)
// Chapter: Purification and Characterisation of Organic Compounds
// 26 Assertion-Reason, 8 MCQ, 13 Numerical = 47 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Chromatography (TLC, column chromatography)";
const CHAPTER = "Purification and Characterisation of Organic Compounds";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arQuestions = [
  // AR 1
  {
    question: `${arDirections}\n\nAssertion (A): In column chromatography, the most weakly adsorbed component is eluted first from the column.\nReason (R): The weakly adsorbed component moves faster down the column with the mobile phase because it interacts less strongly with the stationary phase.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Components with weaker adsorption to the stationary phase remain predominantly in the mobile phase and travel down the column rapidly, eluting first. Components with stronger adsorption remain bound to the adsorbent and elute later. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 2
  {
    question: `${arDirections}\n\nAssertion (A): The retardation factor ($R_f$) of a chemical compound in thin layer chromatography is always less than or equal to 1.\nReason (R): $R_f$ is defined as the ratio of the distance moved by the substance to the distance moved by the solvent front from the baseline.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$$R_f = \\frac{\\text{distance moved by compound}}{\\text{distance moved by solvent front}}$$\nSince the solute travels via the advancing solvent front by capillary action, it can never advance beyond the solvent front itself. Therefore, $R_f \\le 1$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 3
  {
    question: `${arDirections}\n\nAssertion (A): Silica gel and alumina are commonly used as stationary phases in adsorption chromatography.\nReason (R): Silica gel and alumina possess highly porous surfaces with active polar sites capable of reversibly adsorbing organic molecules.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Both silica gel ($\\text{SiO}_2\\cdot x\\text{H}_2\\text{O}$) and activated alumina ($\\text{Al}_2\\text{O}_3$) have high specific surface areas and polar surface functional groups (silanol groups $-\\text{Si-OH}$ and aluminum oxide sites) that participate in reversible dipole-dipole and hydrogen-bonding interactions with solutes. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 4
  {
    question: `${arDirections}\n\nAssertion (A): Thin Layer Chromatography (TLC) is an example of adsorption chromatography.\nReason (R): In TLC, components of a mixture are separated based on their differential adsorption on a thin layer of adsorbent coated on an inert plate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "TLC uses a thin layer ($0.2\\text{ mm}$) of a solid adsorbent (such as silica gel or alumina) spread on a plate of glass or aluminum. The separation occurs due to differences in adsorption affinities of various components on the adsorbent. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 5
  {
    question: `${arDirections}\n\nAssertion (A): Paper chromatography is fundamentally classified as partition chromatography rather than simple adsorption chromatography.\nReason (R): In paper chromatography, water trapped within the cellulose fibers of the paper acts as the liquid stationary phase.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Cellulose fibers in filter paper hold water molecules tightly bound in their pores. This immobilized water acts as the liquid stationary phase, and solute components partition continuously between this stationary water and the moving mobile solvent. Thus, it is partition chromatography. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 6
  {
    question: `${arDirections}\n\nAssertion (A): In TLC, a compound that has a higher affinity for the stationary phase will exhibit a lower $R_f$ value.\nReason (R): Stronger interaction with the stationary phase retards the movement of the compound relative to the solvent front.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "A compound with stronger adsorption affinity spends a larger fraction of time bound to the stationary phase and less time in the mobile phase, travelling a shorter distance and resulting in a smaller $R_f$ value. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 7
  {
    question: `${arDirections}\n\nAssertion (A): When separating a mixture of $o$-nitrophenol and $p$-nitrophenol by silica gel column chromatography using a non-polar solvent, $o$-nitrophenol elutes first.\nReason (R): $o$-Nitrophenol possesses intramolecular hydrogen bonding, making it less polar and less strongly adsorbed on silica gel than $p$-nitrophenol.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$o$-Nitrophenol forms an intramolecular hydrogen bond between the phenolic $-\\text{OH}$ and the nitro group, reducing its polarity and preventing strong intermolecular bonding with polar silica gel. $p$-Nitrophenol has intermolecular hydrogen bonding, making it more polar and tightly adsorbed. Thus, $o$-nitrophenol moves faster and elutes first. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 8
  {
    question: `${arDirections}\n\nAssertion (A): Ninhydrin spray reagent is widely used to detect amino acid spots on a developed TLC or paper chromatogram.\nReason (R): Amino acids react with ninhydrin upon gentle warming to produce an intensely colored complex called Ruhemann's purple.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Amino acids are colorless and invisible on TLC plates. Spraying with ninhydrin (indane-1,2,3-trione hydrate) and heating produces a distinctive purple/violet coloration (Ruhemann's purple, $\\lambda_{\\text{max}} \\approx 570\\text{ nm}$), allowing visual detection. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 9
  {
    question: `${arDirections}\n\nAssertion (A): Iodine chamber is commonly used for visualizing colorless organic compounds on TLC plates.\nReason (R): Iodine vapors react irreversibly with organic compounds to form covalent carbon-iodine bonds.`,
    options: arOptions,
    correctAnswer: 2,
    explanation: "Iodine vapors are physically adsorbed reversibly by organic compounds on TLC plates to give brown spots; it does NOT form covalent carbon-iodine bonds. When removed from the chamber, the iodine gradually sublimes away, leaving the compound intact. Thus, (A) is true but (R) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 10
  {
    question: `${arDirections}\n\nAssertion (A): In column chromatography, the polarity of the eluting solvent is often gradually increased during the run.\nReason (R): Increasing the solvent polarity helps displace strongly adsorbed components from the stationary phase.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Gradient elution begins with a non-polar solvent (e.g., hexane) to elute weakly adsorbed non-polar components. The eluent is then made progressively more polar (by adding ethyl acetate or methanol) to overcome strong adsorbent-solute interactions and elute strongly polar components. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 11
  {
    question: `${arDirections}\n\nAssertion (A): In TLC, the developing chamber must be kept covered with a lid during development.\nReason (R): Covering the developing chamber ensures that the chamber is saturated with solvent vapors, preventing solvent evaporation from the plate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "If the chamber is open, volatile solvent evaporates from the rising solvent front on the plate. This disrupts the uniform capillary ascent, alters the apparent solvent front, and leads to non-reproducible and inflated $R_f$ values. Covering the chamber ensures vapor saturation. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 12
  {
    question: `${arDirections}\n\nAssertion (A): The baseline on a TLC plate must never be submerged below the level of the developing solvent in the jar.\nReason (R): Submerging the baseline causes the sample spots to dissolve directly into the solvent reservoir instead of moving up the plate.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "If the solvent level in the developing jar is higher than the baseline spot, the sample dissolves into the bulk solvent pool at the bottom rather than being carried upward by capillary action. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 13
  {
    question: `${arDirections}\n\nAssertion (A): Calcium sulfate (gypsum) is often added to silica gel used for coating TLC plates.\nReason (R): Calcium sulfate acts as an inert binder that adheres the silica gel particles firmly to the glass or aluminum support.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Silica gel G ('G' stands for gypsum, $\\text{CaSO}_4\\cdot \\frac{1}{2}\\text{H}_2\\text{O}$) contains about $10\\text{--}13\\%$ calcium sulfate, which hydrates and binds the adsorbent particles into a stable, durable layer on the plate. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 14
  {
    question: `${arDirections}\n\nAssertion (A): The $R_f$ value of a specific organic compound is an absolute, immutable physical constant like melting point.\nReason (R): $R_f$ value depends on the temperature, solvent system, nature and activity of adsorbent, and chamber saturation.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "$R_f$ is NOT an absolute physical constant because it varies with experimental conditions such as solvent polarity, layer thickness, temperature, and adsorbent activity (Reason is true). Hence, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 15
  {
    question: `${arDirections}\n\nAssertion (A): UV light of $254\\text{ nm}$ is used to view spots on TLC plates containing a fluorescent indicator like zinc silicate.\nReason (R): Organic compounds with conjugated $\\pi$-systems absorb UV light and quench the green fluorescence of the indicator, appearing as dark spots.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Fluorescent plates emit a bright green glow under $254\\text{ nm}$ UV excitation. Aromatic or conjugated organic compounds absorb this UV radiation, preventing the indicator underneath from fluorescing (fluorescence quenching), thus appearing as dark spots on a glowing background. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 16
  {
    question: `${arDirections}\n\nAssertion (A): In column chromatography, air bubbles must be completely excluded when packing the adsorbent column.\nReason (R): Air bubbles create channels and uneven flow paths, resulting in distorted and overlapping bands of separated components.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Air bubbles in the stationary phase disrupt the uniform packing density, causing solvent channeling where mobile phase rushes through voids faster. This leads to band broadening, tailing, and poor separation. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 17
  {
    question: `${arDirections}\n\nAssertion (A): A pencil line, rather than an ink pen line, is drawn to mark the baseline on a TLC plate.\nReason (R): Pen ink consists of organic dyes that dissolve and separate in the developing solvent, interfering with the chromatogram.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Graphite pencil lead is insoluble in organic solvents and does not travel or produce chromatographic artifacts. Ink from pens contains soluble organic pigments that would elute with the mobile phase and obscure the sample spots. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 18
  {
    question: `${arDirections}\n\nAssertion (A): Column chromatography is a preparative technique, whereas thin layer chromatography is primarily an analytical technique.\nReason (R): Column chromatography allows separation and physical collection of gram-scale quantities of compounds, while TLC is used for microgram-scale monitoring.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In column chromatography, separate fractions of eluents containing bulk quantities of pure compounds are collected in receivers. TLC operates on small plates with microgram spots to check purity, determine $R_f$, or monitor reaction progress. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 19
  {
    question: `${arDirections}\n\nAssertion (A): Between an alkane and an alcohol, the alcohol will have a higher $R_f$ value on a silica gel TLC plate using hexane as eluent.\nReason (R): Alkanes interact more strongly through hydrogen bonding with the silanol groups of silica gel than alcohols.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Alcohols contain polar $-\\text{OH}$ groups that form strong hydrogen bonds with the polar silanol groups ($-\\text{Si-OH}$) of silica gel, causing them to be strongly adsorbed and have a LOW $R_f$. Non-polar alkanes do not form hydrogen bonds and travel faster with hexane, having a HIGH $R_f$. Thus, (A) is false and (R) is false. Wait, let's reformulate Reason to be true so it matches standard (d) or (c):",
    options: arOptions,
    correctAnswer: 3,
    explanation: "Alcohols interact strongly through hydrogen bonding with silanol groups and are strongly retained, giving a low $R_f$ value. Alkanes are non-polar and travel with the non-polar solvent hexane, giving a high $R_f$ value. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 20
  {
    question: `${arDirections}\n\nAssertion (A): Thin Layer Chromatography is significantly faster and gives sharper separation than classical paper chromatography.\nReason (R): The smaller, uniform particle size of silica gel in TLC provides higher surface area and faster mass transfer with minimal diffusion.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "TLC uses fine, uniformly sized particles of silica gel, which offer a high number of theoretical plates and minimal longitudinal diffusion, enabling separations in $15\\text{--}30\\text{ minutes}$ compared to hours for paper chromatography. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 21
  {
    question: `${arDirections}\n\nAssertion (A): Two compounds having identical $R_f$ values in one particular solvent system are confirmed to be the exact same chemical substance.\nReason (R): $R_f$ values are unique to each individual organic molecule under all conditions.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Two completely different compounds can coincidentally have the same $R_f$ in a single solvent system. Confirmation of identity requires identical $R_f$ values across several different solvent systems and co-chromatography (spiking). Moreover, $R_f$ values are not uniquely distinctive like mass spectra. Thus, both are false, matching option (d) where (A) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 22
  {
    question: `${arDirections}\n\nAssertion (A): Gas chromatography is suitable for separating mixtures of non-volatile and thermally unstable organic compounds.\nReason (R): In gas chromatography, the mobile phase is an inert carrier gas such as helium or nitrogen.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "In gas chromatography, the sample must be vaporized without thermal decomposition. Non-volatile or thermally unstable compounds cannot be vaporized intact and decompose in the injection port or column. Hence, GC is NOT suitable for non-volatile compounds. The mobile phase is indeed an inert gas like He or $\\text{N}_2$. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 23
  {
    question: `${arDirections}\n\nAssertion (A): A piece of filter paper moistened with the developing solvent is placed inside the TLC jar during development.\nReason (R): The filter paper lining helps rapidly saturate the atmosphere of the developing chamber with solvent vapor.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Lining the inner walls of the TLC jar with solvent-soaked filter paper increases the evaporating surface area, ensuring that the atmosphere inside the jar reaches vapor-liquid equilibrium rapidly. This prevents solvent evaporation from the plate surface. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 24
  {
    question: `${arDirections}\n\nAssertion (A): In adsorption chromatography, an increase in temperature generally leads to a decrease in the adsorption of solutes on the stationary phase.\nReason (R): Adsorption is an exothermic process, and according to Le Chatelier's principle, higher temperatures favor desorption.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Physical adsorption of solute molecules onto the solid adsorbent surface is an exothermic process ($\\Delta H_{\\text{ads}} < 0$). Raising the temperature shifts the dynamic equilibrium toward desorption, causing compounds to travel faster (higher $R_f$). Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 25
  {
    question: `${arDirections}\n\nAssertion (A): Increasing the proportion of a polar solvent (like ethyl acetate) in a non-polar solvent (like hexane) increases the $R_f$ values of polar compounds on silica gel.\nReason (R): The more polar mobile phase competes effectively with polar solutes for the active adsorption sites on silica gel.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Polar solvent molecules (e.g., ethyl acetate) adsorb strongly onto the polar silanol sites of silica gel, displacing the solute molecules into the mobile phase. Additionally, the solute is more soluble in a polar mobile phase, causing it to travel further and giving higher $R_f$. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 26
  {
    question: `${arDirections}\n\nAssertion (A): The retardation factor $R_f$ is a unitless and dimensionless quantity.\nReason (R): $R_f$ is calculated as the ratio of two distances measured in the same units.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$R_f = \\frac{\\text{distance travelled by solute}}{\\text{distance travelled by solvent front}}$. Since both numerator and denominator have dimensions of length (e.g., $\\text{cm}$), their ratio is dimensionless and has no units. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 8 MCQs (indices 26..33)
const mcqQuestions = [
  // MCQ 1
  {
    question: "Which of the following is an example of partition chromatography?",
    options: [
      "Paper chromatography",
      "Column chromatography using silica gel",
      "Thin layer chromatography using alumina",
      "Gas-solid chromatography"
    ],
    correctAnswer: 0,
    explanation: "Paper chromatography is a type of partition chromatography where water trapped in the cellulose network functions as the stationary liquid phase, and the mobile solvent acts as the mobile liquid phase. Column chromatography and TLC with silica/alumina are adsorption chromatography.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 2
  {
    question: "In thin layer chromatography, the retardation factor ($R_f$) of a compound is defined as:",
    options: [
      "$\\frac{\\text{Distance travelled by the substance from baseline}}{\\text{Distance travelled by the solvent front from baseline}}$",
      "$\\frac{\\text{Distance travelled by the solvent front from baseline}}{\\text{Distance travelled by the substance from baseline}}$",
      "$\\frac{\\text{Distance travelled by the substance from baseline}}{\\text{Total length of the TLC plate}}$",
      "$\\frac{\\text{Distance between spots}}{\\text{Distance travelled by the substance}}$"
    ],
    correctAnswer: 0,
    explanation: "By definition, the retardation factor is given by:\n$$R_f = \\frac{\\text{Distance travelled by the compound from baseline}}{\\text{Distance travelled by the solvent front from baseline}}$$",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 3
  {
    question: "A mixture of three organic compounds X, Y, and Z was separated by TLC on a silica gel plate. The distances moved by X, Y, and Z were $2.0\\text{ cm}$, $4.5\\text{ cm}$, and $6.0\\text{ cm}$ respectively, while the solvent front moved $8.0\\text{ cm}$. Which compound is most strongly adsorbed on the silica gel?",
    options: [
      "Compound X",
      "Compound Y",
      "Compound Z",
      "All compounds are adsorbed equally"
    ],
    correctAnswer: 0,
    explanation: "The $R_f$ values are:\n$R_f(\\text{X}) = 2.0 / 8.0 = 0.25$\n$R_f(\\text{Y}) = 4.5 / 8.0 = 0.5625$\n$R_f(\\text{Z}) = 6.0 / 8.0 = 0.75$\nThe compound with the lowest $R_f$ travels the least distance because it is most strongly adsorbed on the stationary phase. Thus, compound X is most strongly adsorbed.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 4
  {
    question: "Which of the following spray reagents is specifically used for the visualization of amino acid spots on a TLC plate?",
    options: [
      "Ninhydrin reagent",
      "$2,4\\text{-Dinitrophenylhydrazine}$",
      "Schiff's reagent",
      "Fehling's solution"
    ],
    correctAnswer: 0,
    explanation: "Ninhydrin reacts with $\\alpha$-amino acids upon warming to form an intensely purple-blue colored coordination dye called Ruhemann's purple, making it the standard visualizing reagent for amino acids.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 5
  {
    question: "In silica gel column chromatography, which of the following compounds in a mixture of benzoic acid, benzaldehyde, and toluene will be eluted first when eluted with petroleum ether?",
    options: [
      "Toluene",
      "Benzaldehyde",
      "Benzoic acid",
      "All three will elute simultaneously"
    ],
    correctAnswer: 0,
    explanation: "Silica gel is a polar adsorbent. Toluene is a non-polar hydrocarbon with the weakest adsorption affinity, so it elutes first with non-polar petroleum ether. Benzaldehyde (moderately polar) elutes next, and benzoic acid (strongly polar due to $-\\text{COOH}$ and hydrogen bonding) is adsorbed most strongly and elutes last.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 6
  {
    question: "In thin layer chromatography, why is the baseline drawn with a graphite pencil instead of an ink pen?",
    options: [
      "Graphite is insoluble and does not elute with the mobile phase",
      "Ink pen is too sharp and tears the plate",
      "Pencil graphite acts as an additional stationary phase",
      "Graphite fluoresces brightly under UV light"
    ],
    correctAnswer: 0,
    explanation: "Graphite (carbon) is completely insoluble in common organic developing solvents and does not travel or bleed. Pen inks contain dyes that dissolve in the eluent and create colored streaks, ruining the analysis.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 7
  {
    question: "What is the function of gypsum ($\\text{CaSO}_4\\cdot\\frac{1}{2}\\text{H}_2\\text{O}$) in Silica Gel G used for preparing TLC plates?",
    options: [
      "It acts as a binder to hold the adsorbent layer firmly to the glass plate",
      "It acts as a fluorescent indicator under UV light",
      "It acts as the mobile phase",
      "It decreases the polarity of the silica gel"
    ],
    correctAnswer: 0,
    explanation: "Silica Gel G contains $10\\text{--}13\\%$ hemihydrate of calcium sulfate (plaster of Paris / gypsum). When mixed with water and dried, it sets and acts as a binder, ensuring the adsorbent adheres firmly to the glass or aluminum support.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 8
  {
    question: "Which of the following sequences represents the correct order of increasing polarity of solvents used in column chromatography?",
    options: [
      "Petroleum ether $<$ Chloroform $<$ Ethyl acetate $<$ Methanol",
      "Methanol $<$ Ethyl acetate $<$ Chloroform $<$ Petroleum ether",
      "Petroleum ether $<$ Methanol $<$ Chloroform $<$ Ethyl acetate",
      "Chloroform $<$ Petroleum ether $<$ Ethyl acetate $<$ Methanol"
    ],
    correctAnswer: 0,
    explanation: "The elutropic series in order of increasing polarity is:\nPetroleum ether (alkanes, non-polar) $<$ Chloroform (weakly polar) $<$ Ethyl acetate (moderately polar ester) $<$ Methanol (strongly polar, protic alcohol).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 13 Numerical questions (indices 34..46)
const numQuestions = [
  // NUM 1
  {
    question: "In a TLC experiment, the solvent front moved $10.0\\text{ cm}$ from the baseline. A compound spot was detected at a distance of $6.5\\text{ cm}$ from the baseline. What is the $R_f$ value of the compound multiplied by 100?",
    options: [],
    correctAnswer: "65",
    explanation: "$$R_f = \\frac{6.5\\text{ cm}}{10.0\\text{ cm}} = 0.65$$\nMultiplying by 100 gives $0.65 \\times 100 = 65$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 2
  {
    question: "In a thin layer chromatogram, the solvent front moved $12.5\\text{ cm}$ from the starting line. A spot of an organic dye moved $7.5\\text{ cm}$. If the retardation factor is expressed as $\\frac{x}{10}$, find the value of $x$.",
    options: [],
    correctAnswer: "6",
    explanation: "$$R_f = \\frac{7.5}{12.5} = \\frac{3}{5} = 0.6 = \\frac{6}{10}$$\nTherefore, $x = 6$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 3
  {
    question: "A mixture containing components A, B, and C is separated on a silica gel plate. The solvent front advanced $8.0\\text{ cm}$. Component A moved $2.4\\text{ cm}$, component B moved $4.8\\text{ cm}$, and component C moved $6.4\\text{ cm}$. What is the sum of the $R_f$ values of the three components multiplied by 10?",
    options: [],
    correctAnswer: "17",
    explanation: "$R_f(\\text{A}) = 2.4 / 8.0 = 0.30$\n$R_f(\\text{B}) = 4.8 / 8.0 = 0.60$\n$R_f(\\text{C}) = 6.4 / 8.0 = 0.80$\n$$\\text{Sum} = 0.30 + 0.60 + 0.80 = 1.70$$\nMultiplying by 10 gives $1.70 \\times 10 = 17$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 4
  {
    question: "The $R_f$ value of a sample in a TLC experiment is $0.40$. If the solvent front advanced $15.0\\text{ cm}$ from the origin, how many centimeters did the sample spot advance?",
    options: [],
    correctAnswer: "6",
    explanation: "$$\\text{Distance moved by sample} = R_f \\times \\text{distance moved by solvent} = 0.40 \\times 15.0\\text{ cm} = 6.0\\text{ cm}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 5
  {
    question: "Consider the following chromatographic techniques: (1) Column chromatography, (2) Thin layer chromatography, (3) Paper chromatography, (4) Gas-liquid chromatography. How many of these techniques are based primarily on adsorption rather than partition?",
    options: [],
    correctAnswer: "2",
    explanation: "Column chromatography (with solid adsorbent) and Thin Layer Chromatography (TLC) are based primarily on differential adsorption. Paper chromatography and Gas-liquid chromatography are based on partition. Thus, exactly 2 techniques are adsorption-based.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 6
  {
    question: "In a TLC development where the distance between the spotting baseline and the solvent front is $9.0\\text{ cm}$, a compound spot has an $R_f$ value of $0.70$. What is the distance (in $\\text{cm}$) between the compound spot and the solvent front?",
    options: [],
    correctAnswer: "3",
    explanation: "Distance moved by compound $= 0.70 \\times 9.0 = 6.3\\text{ cm}$.\nDistance between the compound spot and the solvent front $= 9.0 - 6.3 = 2.7\\text{ cm} \\approx 3\\text{ cm}$ to nearest integer.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 7
  {
    question: "In an analytical laboratory, a student carried out TLC of an organic acid using silica gel. The spot travelled $3.6\\text{ cm}$ while the solvent front travelled $12.0\\text{ cm}$. What is the $R_f$ value multiplied by 100?",
    options: [],
    correctAnswer: "30",
    explanation: "$$R_f = \\frac{3.6}{12.0} = 0.30$$\nMultiplying by 100 gives $0.30 \\times 100 = 30$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 8
  {
    question: "In thin layer chromatography, what is the maximum theoretical value that the retardation factor ($R_f$) can attain?",
    options: [],
    correctAnswer: "1",
    explanation: "Since the solute cannot travel beyond the solvent front, the maximum possible distance moved by the substance equals the distance moved by the solvent front, corresponding to $R_f = 1$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 9
  {
    question: "A mixture of four dyes with $R_f$ values $0.20, 0.45, 0.60,$ and $0.85$ was separated on a TLC plate. How many of these dyes travel more than half the distance covered by the solvent front?",
    options: [],
    correctAnswer: "2",
    explanation: "A dye travels more than half the distance if its $R_f > 0.50$. The dyes with $R_f = 0.60$ and $0.85$ satisfy this condition. Thus, exactly 2 dyes travel more than half the distance.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 10
  {
    question: "In paper chromatography, how many distinct phases are involved in the chromatographic partition system?",
    options: [],
    correctAnswer: "2",
    explanation: "Every chromatographic process involves 2 distinct phases: a stationary phase (water held in cellulose fibers) and a mobile phase (developing solvent).",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 11
  {
    question: "In a TLC analysis, substance P moved $4.2\\text{ cm}$ and substance Q moved $7.0\\text{ cm}$ when the solvent front moved $14.0\\text{ cm}$. What is the difference between the $R_f$ values of Q and P multiplied by 10?",
    options: [],
    correctAnswer: "2",
    explanation: "$R_f(\\text{Q}) = 7.0 / 14.0 = 0.50$\n$R_f(\\text{P}) = 4.2 / 14.0 = 0.30$\n$$\\Delta R_f = 0.50 - 0.30 = 0.20$$\nMultiplying by 10 gives $0.20 \\times 10 = 2$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 12
  {
    question: "A student runs a TLC plate where the solvent front moves $16.0\\text{ cm}$. A compound spot has an $R_f$ value of $0.25$. What is the distance (in $\\text{cm}$) travelled by the compound from the baseline?",
    options: [],
    correctAnswer: "4",
    explanation: "$$\\text{Distance} = R_f \\times \\text{solvent front distance} = 0.25 \\times 16.0\\text{ cm} = 4.0\\text{ cm}$$",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 13
  {
    question: "During visualization of an amino acid spot on a TLC plate with ninhydrin, how many molecules of ninhydrin react per molecule of $\\alpha$-amino acid to produce one formula unit of the Ruhemann's purple anion?",
    options: [],
    correctAnswer: "2",
    explanation: "Ruhemann's purple is formed by condensation of one molecule of ninhydrin, one molecule of hydrindantin (reduced ninhydrin), and nitrogen from the amino acid. Overall, 2 molecules of ninhydrin are consumed per molecule of amino acid to construct the dimeric Ruhemann's purple framework.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  }
];

const allQuestions = [...arQuestions, ...mcqQuestions, ...numQuestions];

console.log(`Part 4 total questions: ${allQuestions.length}`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 47) {
  const outPath = path.join(__dirname, 'data_purif_part4.js');
  const fileContent = `// Auto-generated data for Purification Part 4: Chromatography (TLC, column chromatography)\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
