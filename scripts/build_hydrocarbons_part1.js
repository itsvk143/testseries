const fs = require("fs");
const path = require("path");

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function ar(assertion, reason, correctAnswer, explanation) {
  return {
    type: "ASSERTION_REASON",
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${assertion}\nReason (R): ${reason}`,
    options: STANDARD_AR_OPTIONS,
    correctAnswer,
    explanation,
    subTopic: "Alkanes",
    chapter: "Hydrocarbons"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Alkanes",
    chapter: "Hydrocarbons"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Alkanes",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Among isomeric pentanes, 2,2-dimethylpropane (neopentane) has the lowest boiling point ($9.5^\\circ\\text{C}$), whereas n-pentane has the highest boiling point ($36^\\circ\\text{C}$).",
    "Branching makes the molecule more compact and spherical, reducing the surface area of contact and decreasing the magnitude of intermolecular van der Waals forces.",
    0,
    "As branching increases, the alkane molecule assumes a more spherical shape with smaller surface area. This weakens intermolecular London dispersion forces, leading to a marked decrease in boiling point."
  ),
  ar(
    "Methane cannot be prepared by the Wurtz reaction.",
    "Wurtz reaction involves the coupling of two alkyl radicals or alkyl halides, thereby producing an alkane with at least two carbon atoms.",
    0,
    "The Wurtz reaction couples two alkyl halides ($2\\text{RX} + 2\\text{Na} \\rightarrow \\text{R}-\\text{R} + 2\\text{NaX}$). The minimum number of carbon atoms in the resulting symmetrical alkane is 2 (ethane), so single-carbon methane cannot be synthesized."
  ),
  ar(
    "Wurtz reaction of tertiary alkyl halides gives predominantly alkenes rather than the coupled alkane.",
    "Tertiary alkyl halides undergo preferential elimination ($\\text{E}2$) in the presence of strong basic metallic sodium or organosodium intermediates.",
    0,
    "Tertiary alkyl halides are sterically crowded. Under Wurtz conditions, the strongly basic alkylsodium intermediate abstracts a $\\beta$-proton (elimination) rather than undergoing nucleophilic substitution, producing an alkene as the major product."
  ),
  ar(
    "Bromination of isobutane (2-methylpropane) in sunlight gives 2-bromo-2-methylpropane as the almost exclusive product ($>99\\%$).",
    "Bromine free radicals are less reactive and highly selective, abstracting the tertiary hydrogen atom much faster than primary hydrogen atoms ($3^\\circ : 2^\\circ : 1^\\circ = 1600 : 82 : 1$).",
    0,
    "Bromination is endothermic in the hydrogen-abstraction step, so the transition state resembles the alkyl radical intermediate (Hammond's postulate). Due to the high stability of the $3^\\circ$ radical, bromine displays extreme regioselectivity for $3^\\circ$ $\\text{C}-\\text{H}$ bonds."
  ),
  ar(
    "Chlorination of isobutane gives 1-chloro-2-methylpropane as the major product ($64\\%$) despite the tertiary hydrogen forming a more stable radical.",
    "Chlorine free radicals are highly reactive and less selective, so the product ratio is governed heavily by the statistical factor of having nine primary hydrogens versus only one tertiary hydrogen.",
    0,
    "With relative reactivity $3^\\circ : 1^\\circ = 5.0 : 1.0$, the 9 primary hydrogens give a statistical yield of $9 \\times 1 = 9$, while the single tertiary hydrogen gives $1 \\times 5.0 = 5.0$. Hence, primary chloride is $9 / 14 \\approx 64\\%$."
  ),
  ar(
    "Kolbe's electrolytic decarboxylation of potassium ethanoate produces ethane and carbon dioxide at the anode.",
    "Acetate anions lose an electron at the anode to form acetate radicals, which rapidly decarboxylate to methyl radicals that dimerize into ethane.",
    0,
    "At anode: $2\\text{CH}_3\\text{COO}^- - 2e^- \\rightarrow 2\\text{CH}_3\\text{COO}^\\bullet \\rightarrow 2^\\bullet\\text{CH}_3 + 2\\text{CO}_2$. Radical coupling gives ethane: $^\\bullet\\text{CH}_3 + ^\\bullet\\text{CH}_3 \\rightarrow \\text{CH}_3-\\text{CH}_3$."
  ),
  ar(
    "The melting points of alkanes with an even number of carbon atoms are higher than those of the immediately preceding and succeeding alkanes with an odd number of carbon atoms.",
    "Alkanes with an even number of carbon atoms have their terminal methyl groups on opposite sides of the zigzag carbon chain, allowing them to pack more closely and symmetrically into the crystal lattice.",
    0,
    "This is the well-known alternation effect (sawtooth effect) in alkane melting points: even-carbon alkanes pack with higher density and greater crystal lattice stability than odd-carbon alkanes."
  ),
  ar(
    "n-Hexane on heating with a mixture of $\\text{Cr}_2\\text{O}_3$, $\\text{V}_2\\text{O}_5$, or $\\text{Mo}_2\\text{O}_3$ supported on alumina at $773\\text{ K}$ and $10-20\\text{ atm}$ yields benzene.",
    "n-Hexane undergoes catalytic dehydrogenation and simultaneous ring closure (aromatization) under high temperature and pressure in the presence of transition metal oxide catalysts.",
    0,
    "Alkanes having 6 to 8 carbon atoms undergo catalytic cyclization and dehydrogenation (reforming/aromatization) to yield benzene derivatives: $\\text{C}_6\\text{H}_{14} \\xrightarrow{\\text{catalyst}, 773\\text{ K}} \\text{C}_6\\text{H}_6 + 4\\text{H}_2$."
  ),
  ar(
    "Direct iodination of alkanes with iodine is reversible and does not proceed to completion under ordinary conditions.",
    "Hydrogen iodide ($\\text{HI}$) formed as a by-product is a strong reducing agent that reduces the alkyl iodide back to the starting alkane.",
    0,
    "$\\text{RH} + \\text{I}_2 \\rightleftharpoons \\text{RI} + \\text{HI}$. The strong reducing power of $\\text{HI}$ reverses the reaction; therefore, an oxidizing agent like $\\text{HNO}_3$ or $\\text{HIO}_3$ must be added to consume $\\text{HI}$."
  ),
  ar(
    "Direct fluorination of alkanes with pure fluorine gas is explosive and accompanied by extensive carbon-carbon bond cleavage.",
    "The $\\text{F}-\\text{F}$ bond has very low bond dissociation enthalpy, and the newly formed $\\text{C}-\\text{F}$ and $\\text{H}-\\text{F}$ bonds are exceptionally strong, making the overall reaction highly exothermic.",
    0,
    "Fluorination releases more energy than is needed to rupture $\\text{C}-\\text{C}$ bonds, causing uncontrolled runaway chain reactions and explosion unless diluted with an inert gas like nitrogen."
  ),
  ar(
    "Controlled oxidation of methane with oxygen in the presence of copper tube at $523\\text{ K}$ and $100\\text{ atm}$ yields methanol.",
    "Under these specific high-pressure catalytic conditions, copper promotes selective insertion of oxygen into the $\\text{C}-\\text{H}$ bond without causing complete combustion.",
    0,
    "$2\\text{CH}_4 + \\text{O}_2 \\xrightarrow{\\text{Cu}, 523\\text{ K}, 100\\text{ atm}} 2\\text{CH}_3\\text{OH}$. Copper acts as a selective catalyst that halts oxidation at methanol."
  ),
  ar(
    "Isobutane is oxidized by alkaline potassium permanganate ($\\text{KMnO}_4$) to 2-methylpropan-2-ol (tert-butanol), whereas n-butane is resistant to $\\text{KMnO}_4$ oxidation.",
    "Alkanes containing a tertiary hydrogen atom undergo selective oxidation by $\\text{KMnO}_4$ to tertiary alcohols due to the lower bond dissociation energy of the tertiary $\\text{C}-\\text{H}$ bond.",
    0,
    "Normal alkanes resist oxidation by $\\text{KMnO}_4$, but alkanes with a tertiary hydrogen (like isobutane) are selectively oxidized at the $3^\\circ$ $\\text{C}-\\text{H}$ site to give tertiary alcohols: $(\\text{CH}_3)_3\\text{CH} \\xrightarrow{\\text{KMnO}_4} (\\text{CH}_3)_3\\text{C}-\\text{OH}$."
  ),
  ar(
    "Heating n-butane with anhydrous aluminium chloride ($\\text{AlCl}_3$) and dry hydrogen chloride gas ($\\text{HCl}$) produces isobutane.",
    "Anhydrous $\\text{AlCl}_3 / \\text{HCl}$ acts as a Lewis acid catalyst that generates a carbocation intermediate capable of undergoing skeletal rearrangement into a more stable branched isomer.",
    0,
    "Isomerization of straight-chain alkanes to branched alkanes occurs via hydride abstraction by $\\text{AlCl}_3/\\text{HCl}$, forming a carbocation that undergoes a 1,2-hydride or methyl shift to the branched isomer."
  ),
  ar(
    "Corey-House synthesis is superior to the Wurtz reaction for the preparation of unsymmetrical alkanes.",
    "Lithium dialkylcuprate (Gilman reagent) couples cleanly with a primary alkyl halide without forming cross-coupled side products or alkene elimination products.",
    0,
    "Corey-House synthesis $(\\text{R}_2\\text{CuLi} + \\text{R}'\\text{X} \\rightarrow \\text{R}-\\text{R}')$ allows coupling between two different alkyl groups in high yields without the statistical mixture of products that plagues the Wurtz reaction."
  ),
  ar(
    "Soda-lime decarboxylation of sodium propanoate yields ethane.",
    "Heating the sodium salt of a carboxylic acid with soda lime ($\\text{NaOH} + \\text{CaO}$) removes the carboxyl group as sodium carbonate, yielding an alkane with one fewer carbon atom.",
    0,
    "$\\text{CH}_3\\text{CH}_2\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO}, \\Delta} \\text{CH}_3\\text{CH}_3 + \\text{Na}_2\\text{CO}_3$. The reaction shortens the carbon chain from 3 carbons to 2 carbons."
  ),
  ar(
    "During the free-radical chlorination of methane, the addition of small amounts of oxygen gas retards the rate of reaction.",
    "Oxygen molecules react with methyl radicals to form less reactive methylperoxy radicals ($^\\bullet\\text{OOCH}_3$), temporarily interrupting the propagation chain.",
    0,
    "Oxygen is a diradical inhibitor that traps reactive alkyl radicals: $^\\bullet\\text{CH}_3 + \\text{O}_2 \\rightarrow \\text{CH}_3\\text{OO}^\\bullet$. This slows down or stops the chain reaction until all oxygen is consumed."
  ),
  ar(
    "Alkanes are known as 'paraffins' because they are chemically inert towards common acids, bases, oxidizing agents, and reducing agents under ambient conditions.",
    "The carbon-carbon and carbon-hydrogen single bonds in alkanes are strong non-polar $\\sigma$-bonds lacking unshared electron pairs or electrophilic/nucleophilic centers.",
    0,
    "The Latin 'parum affinis' means little affinity. Due to strong, non-polar $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ $\\sigma$-bonds with no electron deficiency or excess, alkanes resist polar chemical reagents."
  ),
  ar(
    "Methane on heating with oxygen in the presence of molybdenum oxide ($\\text{Mo}_2\\text{O}_3$) catalyst yields methanal (formaldehyde).",
    "Molybdenum oxide selectively catalyzes the oxidation of methane to formaldehyde with water as the by-product.",
    0,
    "$\\text{CH}_4 + \\text{O}_2 \\xrightarrow{\\text{Mo}_2\\text{O}_3, \\Delta} \\text{HCHO} + \\text{H}_2\\text{O}$. This is an established industrial catalytic oxidation route to formaldehyde."
  ),
  ar(
    "In the Kolbe electrolysis of sodium acetate, the $pH$ of the aqueous solution increases as the reaction progresses.",
    "At the cathode, water molecules are reduced to produce hydroxide ions ($\\text{OH}^-$) and hydrogen gas.",
    0,
    "Cathode reaction: $2\\text{H}_2\\text{O} + 2e^- \\rightarrow \\text{H}_2\\uparrow + 2\\text{OH}^-$. The accumulation of hydroxide ions increases the basicity of the solution, elevating the $pH$."
  ),
  ar(
    "Photochemical halogenation of alkanes ceases immediately when light is turned off.",
    "The chain-propagating free radicals have extremely short lifetimes and are rapidly destroyed by chain-terminating radical recombination steps.",
    0,
    "Light is required continuously to initiate the reaction by cleaving halogen molecules into radicals. In the dark, radical recombination quickly consumes all active chain carriers, quenching the reaction."
  ),
  ar(
    "Cracking (pyrolysis) of higher alkanes produces a mixture of lower alkanes, alkenes, and hydrogen gas.",
    "Pyrolysis involves the homolytic cleavage of strong carbon-carbon and carbon-hydrogen $\\sigma$-bonds at elevated temperatures.",
    0,
    "At $773-1073\\text{ K}$, thermal energy exceeds bond dissociation energies, causing homolytic fission to generate free radicals that undergo disproportionation and $\\beta$-scission to form smaller alkanes, alkenes, and $\\text{H}_2$."
  ),
  ar(
    "Wurtz reaction between a mixture of iodomethane and iodoethane gives a mixture of three different alkanes.",
    "Three different radical coupling pathways occur simultaneously: methyl-methyl, ethyl-ethyl, and methyl-ethyl couplings.",
    0,
    "Cross-Wurtz coupling produces ethane $(\\text{CH}_3-\\text{CH}_3)$, butane $(\\text{C}_2\\text{H}_5-\\text{C}_2\\text{H}_5)$, and propane $(\\text{CH}_3-\\text{C}_2\\text{H}_5)$. The close boiling points make separation difficult."
  ),
  ar(
    "Frankland reaction is used for the preparation of symmetrical alkanes using dialkylzinc or alkyl halides with zinc metal.",
    "Zinc metal acts similarly to sodium in the Wurtz reaction by coupling two alkyl groups via an organozinc intermediate.",
    0,
    "Frankland reaction: $2\\text{RX} + \\text{Zn} \\rightarrow \\text{R}-\\text{R} + \\text{ZnX}_2$. Organozinc reagents $(\\text{R}_2\\text{Zn})$ undergo clean homocoupling, resembling the Wurtz reaction."
  ),
  ar(
    "Alkanes with odd numbers of carbon atoms generally have lower melting points than expected from a smooth progression curve.",
    "Odd-carbon alkanes have terminal methyl groups on the same side of the carbon chain, resulting in poorer packing efficiency in the crystal lattice.",
    0,
    "Because the terminal methyl groups point in the same direction in odd-numbered zigzag carbon chains, the molecules do not interlock as compactly in the solid state as even-numbered alkanes."
  ),
  ar(
    "Reaction of ethylmagnesium bromide with heavy water ($\\text{D}_2\\text{O}$) produces monodeuteroethane ($\\text{CH}_3\\text{CH}_2\\text{D}$).",
    "Grignard reagents are powerful Bronsted bases that abstract a deuteron from $\\text{D}_2\\text{O}$ to generate the corresponding deuterated alkane.",
    0,
    "$\\text{C}_2\\text{H}_5\\text{MgBr} + \\text{D}_2\\text{O} \\rightarrow \\text{C}_2\\text{H}_5\\text{D} + \\text{Mg(OD)Br}$. The carbanionic ethyl group attacks the deuterium of heavy water."
  ),
  ar(
    "Combustion of methane in an insufficient supply of air produces finely divided carbon black.",
    "Incomplete combustion leads to partial oxidation where carbon atoms are not oxidized to carbon dioxide or carbon monoxide.",
    0,
    "$\\text{CH}_4 + \\text{O}_2 \\xrightarrow{\\text{incomplete}} \\text{C (carbon black)} + 2\\text{H}_2\\text{O}$. Carbon black is used in printer inks, black paints, and automobile tires."
  ),

  // 8 MCQ Questions
  mcq(
    "Which of the following alkanes CANNOT be synthesized in good yield by the Wurtz reaction?",
    [
      "Methane",
      "Ethane",
      "Butane",
      "Hexane"
    ],
    0,
    "Methane has only 1 carbon atom and cannot be prepared by the Wurtz reaction, which couples two alkyl groups and requires at least two carbons."
  ),
  mcq(
    "Which of the following isomeric pentanes has the lowest boiling point?",
    [
      "2,2-Dimethylpropane (neopentane)",
      "2-Methylbutane (isopentane)",
      "n-Pentane",
      "Cyclopentane"
    ],
    0,
    "Neopentane has the most spherical, compact shape with minimal surface area, resulting in the weakest intermolecular van der Waals forces and the lowest boiling point ($9.5^\\circ\\text{C}$)."
  ),
  mcq(
    "Photochemical chlorination of isobutane yields a mixture of 1-chloro-2-methylpropane and 2-chloro-2-methylpropane. What is the approximate percentage of 1-chloro-2-methylpropane formed at $298\\text{ K}$? (Relative rates: $3^\\circ : 1^\\circ = 5.0 : 1.0$)",
    [
      "$64\\%$",
      "$36\\%$",
      "$50\\%$",
      "$90\\%$"
    ],
    0,
    "Relative yield of primary = $9 \\times 1.0 = 9.0$; tertiary = $1 \\times 5.0 = 5.0$. Percentage of primary chloride = $[9.0 / (9.0 + 5.0)] \\times 100 = (9/14) \\times 100 \\approx 64.3\\%$."
  ),
  mcq(
    "When n-hexane is heated at $773\\text{ K}$ and $10-20\\text{ atm}$ in the presence of $\\text{Cr}_2\\text{O}_3 / \\text{Al}_2\\text{O}_3$, the aromatic product formed is:",
    [
      "Benzene",
      "Toluene",
      "Cyclohexane",
      "o-Xylene"
    ],
    0,
    "n-Hexane undergoes catalytic aromatization (dehydrogenative cyclization) to form benzene: $\\text{C}_6\\text{H}_{14} \\xrightarrow{\\text{Cr}_2\\text{O}_3 / \\text{Al}_2\\text{O}_3, 773\\text{ K}} \\text{C}_6\\text{H}_6 + 4\\text{H}_2$."
  ),
  mcq(
    "Which alkane is formed at the anode during the Kolbe electrolysis of an aqueous solution of sodium propanoate?",
    [
      "Butane",
      "Ethane",
      "Hexane",
      "Propane"
    ],
    0,
    "Propanoate ions $(\\text{CH}_3\\text{CH}_2\\text{COO}^-)$ undergo one-electron oxidation and decarboxylation at the anode to form ethyl radicals $(^\\bullet\\text{CH}_2\\text{CH}_3)$, which dimerize to form butane $(\\text{C}_4\\text{H}_{10})$."
  ),
  mcq(
    "A tertiary alkane which on treatment with alkaline $\\text{KMnO}_4$ readily oxidizes to a tertiary alcohol is:",
    [
      "2-Methylpropane (isobutane)",
      "n-Butane",
      "2,2-Dimethylpropane (neopentane)",
      "Ethane"
    ],
    0,
    "Alkanes containing a tertiary $\\text{C}-\\text{H}$ bond are readily oxidized by alkaline $\\text{KMnO}_4$ to the corresponding tertiary alcohol. Isobutane yields 2-methylpropan-2-ol (tert-butanol)."
  ),
  mcq(
    "Decarboxylation of sodium acetate with soda lime gives:",
    [
      "Methane",
      "Ethane",
      "Propane",
      "Ethyne"
    ],
    0,
    "Heating sodium acetate with soda lime $(\\text{NaOH} + \\text{CaO})$ removes the carboxyl group as sodium carbonate: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO}, \\Delta} \\text{CH}_4 + \\text{Na}_2\\text{CO}_3$."
  ),
  mcq(
    "The Corey-House synthesis of unsymmetrical alkanes involves the reaction of an alkyl halide with which organometallic reagent?",
    [
      "Lithium dialkylcuprate (Gilman reagent)",
      "Grignard reagent",
      "Dialkylcadmium",
      "Trialkylaluminium"
    ],
    0,
    "Corey-House synthesis employs lithium dialkylcuprate (Gilman reagent, $\\text{R}_2\\text{CuLi}$), which couples with an alkyl halide $(\\text{R}'\\text{X})$ to yield the unsymmetrical alkane $\\text{R}-\\text{R}'$."
  ),

  // 13 NUM Questions
  num(
    "How many constitutional (structural) isomers are possible for the alkane having molecular formula $\\text{C}_5\\text{H}_{12}$?",
    3,
    "The 3 constitutional isomers of pentane are: (1) n-pentane, (2) 2-methylbutane (isopentane), and (3) 2,2-dimethylpropane (neopentane)."
  ),
  num(
    "How many constitutional (structural) isomers exist for hexane $(\\text{C}_6\\text{H}_{14})$?",
    5,
    "The 5 isomers of hexane are: (1) n-hexane, (2) 2-methylpentane, (3) 3-methylpentane, (4) 2,2-dimethylbutane, and (5) 2,3-dimethylbutane."
  ),
  num(
    "How many primary ($1^\\circ$) hydrogen atoms are present in one molecule of 2,2-dimethylpropane (neopentane)?",
    12,
    "Neopentane has four identical methyl groups attached to a quaternary central carbon. Each methyl has 3 primary hydrogens: $4 \\times 3 = 12$ primary hydrogens."
  ),
  num(
    "What is the number of tertiary ($3^\\circ$) carbon atoms present in a molecule of 2,3-dimethylbutane?",
    2,
    "2,3-Dimethylbutane has the structure $(\\text{CH}_3)_2\\text{CH}-\\text{CH}(\\text{CH}_3)_2$. Carbons C2 and C3 are each bonded to three other carbons, giving exactly 2 tertiary carbons."
  ),
  num(
    "How many moles of $\\text{CO}_2$ are produced by the complete combustion of 1 mole of propane $(\\text{C}_3\\text{H}_8)$?",
    3,
    "Combustion of propane: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Exactly 3 moles of $\\text{CO}_2$ are produced."
  ),
  num(
    "How many moles of oxygen gas $(\\text{O}_2)$ are required for the complete stoichiometric combustion of 1 mole of butane $(\\text{C}_4\\text{H}_{10})$? (Report for 2 moles of butane as integer: 13, so for 1 mole it is 6.5. Let us ask: How many moles of $\\text{O}_2$ are required for the complete combustion of 2 moles of butane?)",
    13,
    "The balanced reaction for 2 moles of butane is: $2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$. Exactly 13 moles of $\\text{O}_2$ are required."
  ),
  num(
    "How many monochloro derivatives (excluding stereoisomers) can be formed by the photochemical chlorination of n-butane?",
    2,
    "Chlorination of n-butane $(\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3)$ can occur at C1 to give 1-chlorobutane or at C2 to give 2-chlorobutane. Total structural isomers = 2."
  ),
  num(
    "How many monochloro derivatives (excluding stereoisomers) can be formed by the photochemical chlorination of 2,2-dimethylpropane (neopentane)?",
    1,
    "In neopentane, all 12 hydrogens are chemically and structurally equivalent. Chlorination at any position yields only one constitutional product: 1-chloro-2,2-dimethylpropane (neopentyl chloride). Total = 1."
  ),
  num(
    "How many moles of $\\text{H}_2$ gas are released when 1 mole of n-hexane is completely aromatized to benzene?",
    4,
    "Aromatization of hexane: $\\text{C}_6\\text{H}_{14} \\rightarrow \\text{C}_6\\text{H}_6 + 4\\text{H}_2$. Exactly 4 moles of hydrogen gas are liberated per mole of hexane."
  ),
  num(
    "How many carbon atoms are present in the alkane produced at the anode during the Kolbe electrolysis of sodium butanoate?",
    6,
    "Sodium butanoate $(\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{COONa})$ yields propyl radicals upon anodic decarboxylation. Dimerization of two propyl radicals produces hexane $(\\text{C}_6\\text{H}_{14})$, containing 6 carbons."
  ),
  num(
    "What is the coordination number (number of $\\sigma$-bonds) of each carbon atom in an acyclic alkane?",
    4,
    "Every carbon in an alkane is $sp^3$ hybridized and forms exactly 4 single covalent $\\sigma$-bonds to neighboring carbon or hydrogen atoms."
  ),
  num(
    "How many different alkanes are formed when a mixture of bromomethane and bromoethane is treated with sodium in dry ether (Wurtz reaction)?",
    3,
    "Three alkanes are formed: ethane (methyl-methyl coupling), butane (ethyl-ethyl coupling), and propane (cross-coupling between methyl and ethyl). Total = 3."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of any acyclic saturated alkane?",
    0,
    "Saturated acyclic alkanes have general formula $\\text{C}_n\\text{H}_{2n+2}$. Since they contain no rings and no multiple bonds, their double bond equivalent is exactly 0."
  )
];

console.log(`Part 1 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part1.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part1.js");
