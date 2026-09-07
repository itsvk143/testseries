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
    subTopic: "Mechanism of substitution",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Mechanism of substitution",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Mechanism of substitution",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "Reaction of haloalkanes with potassium cyanide ($\\text{KCN}$) yields predominantly alkyl cyanides (nitriles), whereas reaction with silver cyanide ($\\text{AgCN}$) yields alkyl isocyanides.",
    "$\\text{KCN}$ is predominantly ionic, allowing the ambident cyanide ion to attack through carbon to form a stronger $\\text{C}-\\text{C}$ bond, while $\\text{AgCN}$ is predominantly covalent, leaving only the nitrogen lone pair free to attack.",
    0,
    "Cyanide is an ambident nucleophile. In ionic $\\text{KCN}$, both $\\text{C}$ and $\\text{N}$ have lone pairs, but attack via $\\text{C}$ leads to the thermodynamically more stable $\\text{C}-\\text{C}$ bond ($347\\text{ kJ mol}^{-1}$ vs $305\\text{ kJ mol}^{-1}$ for $\\text{C}-\\text{N}$). In covalent $\\text{Ag}-\\text{C}\\equiv\\text{N}$, carbon is bonded to silver, leaving the nitrogen lone pair to attack."
  ),
  ar(
    "Reaction of an alkyl halide with potassium nitrite ($\\text{KNO}_2$) gives an alkyl nitrite as the major product, while with silver nitrite ($\\text{AgNO}_2$) it yields a nitroalkane.",
    "$\\text{KNO}_2$ is an ionic compound providing free nitrite ions which attack preferentially through oxygen due to higher electronegativity, whereas $\\text{AgNO}_2$ is predominantly covalent and attack occurs through the nitrogen lone pair.",
    0,
    "Nitrite ion is ambident. In ionic $\\text{KNO}_2$, the negative charge resides mainly on oxygen, so oxygen attacks carbon to form an alkyl nitrite ($\\text{R}-\\text{ONO}$). In covalent $\\text{Ag}-\\text{O}-\\text{N}=\\text{O}$, the lone pair on nitrogen attacks, forming a nitroalkane ($\\text{R}-\\text{NO}_2$)."
  ),
  ar(
    "Iodide ion ($\\text{I}^-$) is both an excellent nucleophile and an excellent leaving group.",
    "Iodide ion has a large atomic radius and high polarizability, which lowers the activation energy of both bond formation and bond cleavage.",
    0,
    "Due to high polarizability and diffuse electron cloud, $\\text{I}^-$ readily deforms to form the transition state (making it a strong nucleophile). Its weak basicity and low $\\text{C}-\\text{I}$ bond strength make it an excellent leaving group."
  ),
  ar(
    "Polar aprotic solvents such as dimethyl sulfoxide (DMSO) and dimethylformamide (DMF) drastically increase the rate of $\\text{S}_\\text{N}2$ substitutions.",
    "Polar aprotic solvents strongly solvate cations via dipole-dipole interactions but leave anions (nucleophiles) relatively unshielded ('naked'), raising their nucleophilic reactivity.",
    0,
    "Protic solvents cage anions via hydrogen bonding, lowering their ground-state energy. Polar aprotic solvents lack hydrogen-bonding protons, leaving nucleophilic anions bare, reactive, and at higher free energy."
  ),
  ar(
    "In polar protic solvents such as water or methanol, nucleophilicity of halide ions decreases in the order: $\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{F}^-$.",
    "Fluoride ion is small with high charge density and is heavily hydrated by hydrogen bonding, whereas iodide ion is weakly solvated and retains high nucleophilic mobility.",
    0,
    "In protic solvents, strong hydrogen-bonding solvation creates a tight solvent shell around smaller, charge-dense anions like $\\text{F}^-$. Removing this shell requires significant energy, reducing nucleophilicity."
  ),
  ar(
    "In polar aprotic solvents such as acetone or DMSO, the nucleophilicity of halide ions follows the order: $\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$.",
    "In the absence of hydrogen-bonding solvation, nucleophilicity parallels basicity and charge density.",
    0,
    "Without a solvent shell to shed, the smaller, more charge-dense fluoride ion has a stronger electrostatic attraction towards the electrophilic carbon center, making it the most nucleophilic halide."
  ),
  ar(
    "The triflate ion ($\\text{CF}_3\\text{SO}_3^-$) is a much better leaving group than the acetate ion ($\\text{CH}_3\\text{COO}^-$).",
    "Triflic acid is an extremely strong superacid, and its conjugate base is stabilized by the strong electron-withdrawing inductive effect of three fluorines and resonance over three oxygens.",
    0,
    "The weaker the basicity of a conjugate base, the better its leaving group ability. Triflate is the conjugate base of a superacid ($pK_a \\approx -14$), making it an exceptionally stable, non-basic leaving group."
  ),
  ar(
    "Hydroxide ion ($\\text{OH}^-$) is a stronger nucleophile than water ($\\text{H}_2\\text{O}$).",
    "A negatively charged nucleophile is always more nucleophilic than its neutral conjugate acid when comparing the same attacking atom.",
    0,
    "The presence of a full negative charge provides greater electron density and stronger electrostatic attraction towards the partial positive carbon center."
  ),
  ar(
    "Ambident nucleophiles possess two nucleophilic centers and can attack through either center.",
    "Cyanide ($\\text{CN}^-$), nitrite ($\\text{NO}_2^-$), and thiocyanate ($\\text{SCN}^-$) ions are well-known examples of ambident nucleophiles.",
    1,
    "Both statements are true. Ambident nucleophiles have two electron-rich atoms capable of coordinating/bonding. Cyanide, nitrite, and thiocyanate are standard examples, but Reason is an enumeration of examples rather than the fundamental chemical cause of ambident behavior (which is resonance delocalization of lone pairs/charges across two different atoms)."
  ),
  ar(
    "The conversion of an alcohol to an alkyl chloride using thionyl chloride in diethyl ether proceeds with retention of configuration ($\\text{S}_\\text{N}\\text{i}$).",
    "The reaction proceeds via an internal nucleophilic substitution involving an intimate ion pair within a cyclic chlorosulfite transition state.",
    0,
    "In the $\\text{S}_\\text{N}\\text{i}$ mechanism, the chlorosulfite intermediate decomposes by delivering chlorine from the same face from which $\\text{SO}_2$ departs, retaining the stereochemical configuration."
  ),
  ar(
    "Tosylate ion ($p\\text{-TsO}^-$) is widely used in organic synthesis to convert poor leaving group alcohols into reactive substrates for nucleophilic substitution.",
    "Reaction of an alcohol with p-toluenesulfonyl chloride converts the poor leaving group $-\\text{OH}$ into a resonance-stabilized p-toluenesulfonate leaving group without cleaving the $\\text{C}-\\text{O}$ bond.",
    0,
    "Conversion of $\\text{R}-\\text{OH}$ to $\\text{R}-\\text{OTs}$ occurs by reaction at the sulfur atom, keeping the $\\text{C}-\\text{O}$ bond stereochemistry intact while transforming a poor leaving group into an excellent one."
  ),
  ar(
    "Fluoride ion ($\\text{F}^-$) is the poorest leaving group among the halides in nucleophilic substitution.",
    "Hydrofluoric acid ($\\text{HF}$) is the weakest hydrohalic acid, making fluoride the strongest base among halide ions.",
    0,
    "Strong bases make poor leaving groups because they are thermodynamically unstable as departing anions. Since $\\text{F}^-$ is the strongest base among halides ($pK_a$ of $\\text{HF} = 3.2$), it is the poorest leaving group."
  ),
  ar(
    "Reaction of ethyl bromide with excess alcoholic ammonia yields a mixture of primary, secondary, and tertiary amines and quaternary ammonium salt (Hoffmann ammonolysis).",
    "The primary amine formed initially is more nucleophilic than ammonia and competes with ammonia for remaining alkyl halide.",
    0,
    "As ethylamine forms, the $+I$ inductive effect of the ethyl group increases electron density on nitrogen, making it more nucleophilic than ammonia and promoting successive alkylations."
  ),
  ar(
    "A tertiary alkyl halide undergoes substitution with potassium cyanide to give a high yield of tertiary nitrile.",
    "Tertiary carbocations form rapidly and react exclusively with cyanide ion by nucleophilic addition.",
    3,
    "Assertion is false, Reason is false. Cyanide ion is a moderately strong base. With sterically crowded tertiary alkyl halides, elimination ($\\text{E}2$ or $\\text{E}1$) overwhelmingly predominates over substitution, yielding an alkene instead of a nitrile."
  ),
  ar(
    "Triethylamine is a stronger base than quinuclidine, but a weaker nucleophile.",
    "Steric crowding around the nitrogen atom in triethylamine hinders nucleophilic attack at carbon, whereas the bridgehead structure of quinuclidine holds alkyl groups back.",
    0,
    "Nucleophilicity is sensitive to steric factors, whereas basicity involves capturing a small proton. The pinned-back bicyclic structure of quinuclidine leaves the nitrogen lone pair completely exposed for nucleophilic attack."
  ),
  ar(
    "The Williamson ether synthesis between sodium tert-butoxide and methyl iodide gives tert-butyl methyl ether in excellent yield.",
    "Methyl iodide is an unhindered primary substrate that undergoes clean $\\text{S}_\\text{N}2$ substitution by the tert-butoxide nucleophile.",
    0,
    "In Williamson synthesis, the alkyl halide must be methyl or primary to avoid elimination. Here, methyl iodide cannot undergo elimination, so $\\text{S}_\\text{N}2$ substitution occurs cleanly."
  ),
  ar(
    "The reaction of tert-butyl bromide with sodium methoxide gives tert-butyl methyl ether as the major product.",
    "Methoxide ion is a powerful nucleophile that displaces bromide via $\\text{S}_\\text{N}2$ mechanism.",
    3,
    "Assertion is false, Reason is false. Sodium methoxide is a strong base. With tertiary alkyl halide (tert-butyl bromide), elimination ($\\text{E}2$) occurs exclusively to give 2-methylpropene (isobutylene) as the major product."
  ),
  ar(
    "Treatment of an alkyl halide with silver salt of a carboxylic acid ($\\text{R}'\\text{COOAg}$) yields an ester.",
    "Carboxylate anion acts as an oxygen nucleophile that displaces the halide ion from the alkyl halide.",
    0,
    "The reaction $\\text{R}-\\text{X} + \\text{R}'\\text{COOAg} \\rightarrow \\text{R}'\\text{COOR} + \\text{AgX}\\downarrow$ proceeds cleanly as insoluble silver halide precipitates, driving ester formation."
  ),
  ar(
    "Alkyl halides react with sodium acetylide in liquid ammonia to form higher alkynes.",
    "Acetylide anion ($-\\text{C}\\equiv\\text{CH}$) is a powerful carbon nucleophile that displaces halide from primary alkyl halides via an $\\text{S}_\\text{N}2$ pathway.",
    0,
    "Sodium acetylide provides a strongly nucleophilic carbanion: $\\text{R}-\\text{X} + \\text{NaC}\\equiv\\text{CH} \\rightarrow \\text{R}-\\text{C}\\equiv\\text{CH} + \\text{NaX}$, used extensively to synthesize higher terminal alkynes."
  ),
  ar(
    "Mercaptide ion ($\\text{RS}^-$) is more nucleophilic than alkoxide ion ($\\text{RO}^-$) in protic solvents.",
    "Sulfur is larger and more polarizable than oxygen, and its lone pairs are less tightly held by hydrogen-bonding solvents.",
    0,
    "Higher polarizability of the larger sulfur atom enables more effective orbital overlap in the transition state, and weaker solvation by protic solvents makes $\\text{RS}^-$ a much better nucleophile than $\\text{RO}^-$."
  ),
  ar(
    "Reaction of 1-bromobutane with sodium azide ($\\text{NaN}_3$) in DMF yields 1-azidobutane.",
    "Azide ion ($\\text{N}_3^-$) is a good nucleophile that displaces bromide from primary carbons via an $\\text{S}_\\text{N}2$ pathway.",
    0,
    "Azide ion is a linear, unhindered nucleophile. In polar aprotic DMF, it rapidly displaces bromide from primary alkyl halides to form alkyl azides."
  ),
  ar(
    "Neopentyl halides react extremely slowly in bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
    "The three bulky methyl groups on the $\\beta$-carbon severely hinder backside approach of the nucleophile.",
    0,
    "Although neopentyl halides are primary, the bulky tert-butyl group at the $\\beta$-carbon creates massive steric hindrance around the backside of the $\\alpha$-carbon, decelerating $\\text{S}_\\text{N}2$ rates by a factor of over $10^5$."
  ),
  ar(
    "The nucleophilicity of neutral nucleophiles containing the same donor atom parallels their basicity.",
    "Stronger bases have greater electron availability to share with electrophilic centers.",
    0,
    "When comparing species with the same attacking atom (e.g., amine bases), stronger basicity generally correlates with higher nucleophilicity in the absence of significant steric hindrance."
  ),
  ar(
    "Alkyl halides react with potassium hydrosulfide ($\\text{KSH}$) to produce thiols (mercaptans).",
    "Hydrosulfide ion ($\\text{SH}^-$) acts as a sulfur nucleophile that displaces halide ions.",
    0,
    "The reaction $\\text{R}-\\text{X} + \\text{KSH} \\rightarrow \\text{R}-\\text{SH} + \\text{KX}$ provides an efficient laboratory route to thiols without polyalkylation if excess $\\text{KSH}$ is used."
  ),
  ar(
    "In $\\text{S}_\\text{N}2$ reactions, the bond making and bond breaking processes occur simultaneously in a single concerted step.",
    "The transition state of an $\\text{S}_\\text{N}2$ reaction involves a trigonal bipyramidal arrangement with the nucleophile and leaving group partially bonded to the central carbon at $180^\\circ$.",
    0,
    "The $\\text{S}_\\text{N}2$ mechanism is concerted with no intermediate. In the transition state, the central carbon is $sp^2$ hybridized with the three non-reacting groups planar and the entering and leaving groups forming collinear bonds."
  ),
  ar(
    "Alkyl halides react with sodium iodide in acetone to undergo substitution despite iodide being a weaker base than chloride.",
    "Nucleophilicity in aprotic solvents is strictly determined by lattice energy.",
    2,
    "Assertion is true, Reason is false. The driving force for the Finkelstein reaction is the precipitation of insoluble $\\text{NaCl}$ in acetone, not because nucleophilicity is determined by lattice energy."
  ),

  // 8 MCQs
  mcq(
    "Which of the following represents an ambident nucleophile?",
    [
      "Nitrite ion ($\\text{NO}_2^-$)",
      "Hydroxide ion ($\\text{OH}^-$)",
      "Hydride ion ($\\text{H}^-$)",
      "Methoxide ion ($\\text{CH}_3\\text{O}^-$)"
    ],
    0,
    "Nitrite ion ($\\text{NO}_2^-$) is ambident because it can attack through either the nitrogen atom (forming nitroalkanes) or the oxygen atom (forming alkyl nitrites)."
  ),
  mcq(
    "What is the major product formed when bromoethane reacts with $\\text{AgCN}$ in aqueous ethanol?",
    [
      "Ethyl isocyanide ($\\text{CH}_3\\text{CH}_2\\text{NC}$)",
      "Ethyl cyanide ($\\text{CH}_3\\text{CH}_2\\text{CN}$)",
      "Ethylamine",
      "Ethanol"
    ],
    0,
    "Because $\\text{AgCN}$ is predominantly covalent, silver is bonded to carbon, leaving the lone pair on nitrogen free to attack, yielding ethyl isocyanide."
  ),
  mcq(
    "Which of the following solvents will maximize the rate of an $\\text{S}_\\text{N}2$ displacement of 1-bromobutane by sodium cyanide?",
    [
      "Dimethyl sulfoxide (DMSO)",
      "Water",
      "Methanol",
      "Ethanol"
    ],
    0,
    "DMSO is a polar aprotic solvent. It solvates $\\text{Na}^+$ cations but leaves cyanide anions unencumbered ('naked'), maximizing their nucleophilic reactivity."
  ),
  mcq(
    "Which of the following is the best leaving group in nucleophilic substitution reactions?",
    [
      "Trifluoromethanesulfonate ($\\text{CF}_3\\text{SO}_3^-$)",
      "Chloride ion ($\\text{Cl}^-$)",
      "Acetate ion ($\\text{CH}_3\\text{COO}^-$)",
      "Hydroxide ion ($\\text{OH}^-$)"
    ],
    0,
    "Trifluoromethanesulfonate (triflate) is the conjugate base of triflic acid (a superacid). Due to extreme resonance delocalization and electron withdrawal by $-\\text{CF}_3$, it is one of the best leaving groups known."
  ),
  mcq(
    "What is the major organic product obtained when 1-bromopropane is treated with sodium nitrite ($\\text{NaNO}_2$) in DMF?",
    [
      "1-Nitropropane",
      "Propyl nitrite",
      "Propan-1-ol",
      "Propene"
    ],
    0,
    "In polar aprotic solvents like DMF, reaction with $\\text{NaNO}_2$ gives 1-nitropropane as the major product along with small amounts of propyl nitrite."
  ),
  mcq(
    "Which of the following nucleophiles has the highest nucleophilicity in water (polar protic solvent)?",
    [
      "Iodide ion ($\\text{I}^-$)",
      "Bromide ion ($\\text{Br}^-$)",
      "Chloride ion ($\\text{Cl}^-$)",
      "Fluoride ion ($\\text{F}^-$)"
    ],
    0,
    "In polar protic solvents, larger ions are less solvated and more polarizable. Thus, $\\text{I}^-$ is the most nucleophilic halide in water."
  ),
  mcq(
    "When an optically active secondary alcohol is treated with $\\text{SOCl}_2$ in diethyl ether, the reaction proceeds with:",
    [
      "Retention of configuration",
      "Inversion of configuration",
      "Complete racemization",
      "Elimination exclusively"
    ],
    0,
    "In ether without pyridine, the reaction proceeds via the $\\text{S}_\\text{N}\\text{i}$ (internal nucleophilic substitution) mechanism, resulting in retention of configuration."
  ),
  mcq(
    "Which of the following alkyl halides will react fastest with sodium iodide in acetone (Finkelstein reaction)?",
    [
      "$\\text{CH}_3\\text{Cl}$",
      "$\\text{CH}_3\\text{CH}_2\\text{Cl}$",
      "$(\\text{CH}_3)_2\\text{CHCl}$",
      "$(\\text{CH}_3)_3\\text{CCl}$"
    ],
    0,
    "The Finkelstein reaction is an $\\text{S}_\\text{N}2$ process. Methyl chloride ($\\text{CH}_3\\text{Cl}$) has zero steric hindrance and reacts significantly faster than primary, secondary, or tertiary substrates."
  ),

  // 13 Numerical Questions
  num(
    "How many coordinating donor atoms are present in an ambident cyanide ion ($\\text{CN}^-$)?",
    2,
    "The cyanide ion has two donor atoms: carbon and nitrogen, both possessing lone pairs of electrons capable of coordinating to an electrophile."
  ),
  num(
    "What is the coordination number of the central carbon atom in the transition state of an $\\text{S}_\\text{N}2$ reaction?",
    5,
    "In the $\\text{S}_\\text{N}2$ transition state, the central carbon is pentacoordinate: it forms three equatorial $\\sigma$-bonds to spectator groups and two partial axial bonds to the entering nucleophile and departing leaving group."
  ),
  num(
    "How many total valence electrons are present in the azide ion ($\\text{N}_3^-$)?",
    16,
    "Each nitrogen contributes 5 valence electrons, plus 1 electron for the negative charge: $3 \\times 5 + 1 = 16$ valence electrons."
  ),
  num(
    "How many ethyl groups are attached to nitrogen in the quaternary ammonium cation formed by exhaustive ethylation of ammonia with ethyl iodide?",
    4,
    "Exhaustive alkylation replaces all hydrogens on nitrogen and adds one further alkyl group to give tetraethylammonium iodide, which has 4 ethyl groups."
  ),
  num(
    "What is the bond angle between the entering nucleophile, the central carbon, and the departing leaving group in an ideal $\\text{S}_\\text{N}2$ transition state?",
    180,
    "Backside attack requires collinear alignment of the incoming nucleophile and the departing leaving group, resulting in a bond angle of exactly $180^\\circ$."
  ),
  num(
    "How many lone pairs of electrons are present on the sulfur atom in a molecule of dimethyl sulfoxide (DMSO)?",
    1,
    "Sulfur in DMSO has two single bonds to methyl groups and one double bond (or semi-polar bond) to oxygen, leaving 1 non-bonding lone pair on sulfur."
  ),
  num(
    "How many isomeric alkyl cyanides of formula $\\text{C}_4\\text{H}_7\\text{N}$ containing an acyclic saturated chain can be prepared from isomeric propyl halides?",
    2,
    "From 1-chloropropane and 2-chloropropane with $\\text{KCN}$, we obtain butanenitrile ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CN}$) and 2-methylpropanenitrile ($(\\text{CH}_3)_2\\text{CHCN}$). Total = 2."
  ),
  num(
    "How many oxygen atoms are present in the triflate anion ($\\text{CF}_3\\text{SO}_3^-$)?",
    3,
    "The triflate anion is $\\text{CF}_3\\text{SO}_3^-$, which contains 3 oxygen atoms bonded to sulfur."
  ),
  num(
    "How many moles of methyl iodide are consumed in the exhaustive methylation of 1 mole of methylamine to form tetramethylammonium iodide?",
    3,
    "Methylamine ($\\text{CH}_3\\text{NH}_2$) already has 1 methyl group. To reach $(\\text{CH}_3)_4\\text{N}^+\\text{I}^-$, 3 additional methyl groups must be added, consuming 3 moles of $\\text{CH}_3\\text{I}$."
  ),
  num(
    "What is the formal charge on the nitrogen atom in the nitro group of nitromethane ($\\text{CH}_3\\text{NO}_2$)?",
    1,
    "In the Lewis structure of nitromethane, nitrogen forms 4 covalent bonds (one $\\text{C}-\\text{N}$, one $\\text{N}=\\text{O}$, and one coordinate $\\text{N}-\\text{O}^-$), giving it a formal charge of $+1$."
  ),
  num(
    "How many fluorine atoms are present in the trifluoroacetate leaving group ($\\text{CF}_3\\text{COO}^-$)?",
    3,
    "Trifluoroacetate has the formula $\\text{CF}_3\\text{COO}^-$, containing exactly 3 fluorine atoms."
  ),
  num(
    "What is the kinetic order of a bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$) reaction?",
    2,
    "The rate law is $\\text{Rate} = k[\\text{substrate}][\\text{nucleophile}]$, which has an overall kinetic order of $1 + 1 = 2$."
  ),
  num(
    "How many $\\alpha$-carbon atoms attached directly to the functional carbon are present in isopropyl chloride?",
    2,
    "In isopropyl chloride ($(\\text{CH}_3)_2\\text{CHCl}$), the carbon bearing chlorine is attached to two methyl carbons, which are the 2 neighboring carbon atoms."
  )
];

console.log(`Part 5 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part5.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part5.js");
