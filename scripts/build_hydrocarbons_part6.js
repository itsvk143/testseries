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
    subTopic: "Electrophilic addition and Markovnikov's rule",
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
    subTopic: "Electrophilic addition and Markovnikov's rule",
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
    subTopic: "Electrophilic addition and Markovnikov's rule",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 25 AR Questions
  ar(
    "Addition of hydrogen bromide ($\\text{HBr}$) to propene in the absence of peroxides yields 2-bromopropane as the major product.",
    "The electrophilic addition proceeds via the more stable secondary carbocation intermediate rather than the less stable primary carbocation.",
    0,
    "Markovnikov's rule: Protonation of propene at the terminal carbon forms the secondary carbocation $(\\text{CH}_3-\\text{CH}^+-\\text{CH}_3)$, which is stabilized by hyperconjugation (6 $\\alpha$-H) and inductive effect. Attack of bromide then yields 2-bromopropane."
  ),
  ar(
    "Addition of $\\text{HBr}$ to propene in the presence of benzoyl peroxide yields 1-bromopropane as the major product.",
    "In the presence of peroxides, the reaction proceeds by a free-radical chain mechanism wherein the bromine free radical adds to form the more stable secondary free radical.",
    0,
    "The Kharasch (peroxide) effect operates via free radicals: $\\text{Br}^\\bullet$ adds to the terminal carbon to form the secondary carbon radical $(\\text{CH}_3-\\text{C}^\\bullet\\text{H}-\\text{CH}_2\\text{Br})$, which abstracts hydrogen from $\\text{HBr}$ to give 1-bromopropane."
  ),
  ar(
    "The peroxide effect (anti-Markovnikov addition) is observed with $\\text{HBr}$, but is NOT observed with $\\text{HCl}$ or $\\text{HI}$.",
    "In the free-radical chain propagation steps, both steps are exothermic only for $\\text{HBr}$, whereas for $\\text{HCl}$ the hydrogen abstraction step is endothermic and for $\\text{HI}$ the addition step is endothermic.",
    0,
    "For $\\text{HCl}$, the $\\text{H}-\\text{Cl}$ bond is too strong ($431\\text{ kJ/mol}$) to be homolytically cleaved by alkoxy radicals. For $\\text{HI}$, the addition of $\\text{I}^\\bullet$ to the double bond is endothermic and iodine radicals prefer to recombine into $\\text{I}_2$. Only $\\text{HBr}$ has both propagation steps exothermic."
  ),
  ar(
    "Addition of $\\text{HCl}$ to 3,3-dimethylbut-1-ene gives 2-chloro-2,3-dimethylbutane as the major product rather than 2-chloro-3,3-dimethylbutane.",
    "The secondary carbocation formed initially undergoes a 1,2-methyl shift to form a more stable tertiary carbocation.",
    0,
    "Protonation generates the secondary carbocation $((\\text{CH}_3)_3\\text{C}-\\text{CH}^+-\\text{CH}_3)$. A 1,2-methide shift relieves steric strain and produces the tertiary carbocation $((\\text{CH}_3)_2\\text{C}^+-\\text{CH}(\\text{CH}_3)_2)$, which captures chloride to give 2-chloro-2,3-dimethylbutane."
  ),
  ar(
    "Addition of $\\text{HCl}$ to 3-methylbut-1-ene predominantly produces 2-chloro-2-methylbutane.",
    "The secondary carbocation formed initially undergoes a 1,2-hydride shift to form a more stable tertiary carbocation.",
    0,
    "Protonation gives $((\\text{CH}_3)_2\\text{CH}-\\text{CH}^+-\\text{CH}_3)$. Migration of the tertiary hydride (1,2-hydride shift) produces the tertiary carbocation $((\\text{CH}_3)_2\\text{C}^+-\\text{CH}_2\\text{CH}_3)$, yielding 2-chloro-2-methylbutane upon chloride addition."
  ),
  ar(
    "Electrophilic addition of bromine to an alkene involves a cyclic bromonium ion intermediate.",
    "The formation of a cyclic bromonium ion blocks one face of the double bond, forcing the incoming bromide ion to attack from the opposite face (anti-addition).",
    0,
    "Bromine donates a lone pair to the developing positive center to form a bridged three-membered cyclic bromonium ion. Nucleophilic attack by $\\text{Br}^-$ occurs from the back with complete anti-stereospecificity."
  ),
  ar(
    "Addition of bromine in $\\text{CCl}_4$ to cis-but-2-ene produces a $(\\pm)$-racemic mixture of enantiomers.",
    "Anti-addition of symmetrical electrophiles to a cis symmetrical alkene generates a pair of non-superimposable mirror-image enantiomers.",
    0,
    "According to stereochemical addition rules: Cis + Anti $\\rightarrow$ Racemic (CAR rule). The opening of the cyclic bromonium ion at either of the two carbons yields equal amounts of $(2R,3R)$ and $(2S,3S)$-2,3-dibromobutane."
  ),
  ar(
    "Addition of bromine in $\\text{CCl}_4$ to trans-but-2-ene yields an optically inactive meso compound.",
    "Anti-addition of symmetrical electrophiles to a trans symmetrical alkene yields a stereoisomer having an internal center or plane of symmetry.",
    0,
    "According to stereochemical addition rules: Trans + Anti $\\rightarrow$ Meso (TAM rule). The product is meso-2,3-dibromobutane, which possesses a center of inversion and is optically inactive."
  ),
  ar(
    "When propene is treated with chlorine water, 1-chloropropan-2-ol is formed as the major product.",
    "In the unsymmetrical cyclic chloronium ion intermediate, the more substituted secondary carbon carries a greater partial positive charge and is preferentially attacked by water.",
    0,
    "The bridged chloronium ion has asymmetric charge distribution: the secondary carbon bears more positive character because it stabilizes positive charge better. The solvent water nucleophile attacks this carbon, giving 1-chloropropan-2-ol."
  ),
  ar(
    "Reaction of propene with $\\text{HBr}$ in the presence of peroxides does not involve carbocation intermediates.",
    "Peroxide-catalyzed addition of $\\text{HBr}$ is a free-radical chain process mediated by bromine and carbon-centered free radicals.",
    0,
    "The reaction proceeds via free radicals: homolysis of organic peroxide generates alkoxy radicals that initiate a chain reaction involving neutral radical species, completely bypassing carbocations."
  ),
  ar(
    "Markovnikov's rule is a direct empirical consequence of the relative thermodynamic stability of carbocation intermediates.",
    "The stability of carbocations follows the order: $3^\\circ > 2^\\circ > 1^\\circ > ^+\\text{CH}_3$ due to hyperconjugation and electron-donating inductive effects.",
    0,
    "The transition state of the rate-determining step resembles the carbocation. The pathway leading to the more substituted (more stable) carbocation has lower activation energy and proceeds much faster."
  ),
  ar(
    "Oxymercuration-demercuration of 3,3-dimethylbut-1-ene yields 3,3-dimethylbutan-2-ol without skeletal rearrangement.",
    "Oxymercuration proceeds via a bridged cyclic mercurinium ion that prevents carbocation rearrangements like hydride or methyl shifts.",
    0,
    "Because the positive charge is delocalized over the mercury atom in a bridged mercurinium ion rather than existing as a free open carbocation, skeletal rearrangement is prevented, giving pure Markovnikov hydration."
  ),
  ar(
    "Electrophilic addition of $\\text{HI}$ to propene in the presence of peroxides yields 2-iodopropane (Markovnikov product).",
    "Peroxide effect does not operate for $\\text{HI}$ because the addition of iodine radical to alkene is endothermic.",
    0,
    "Because $\\Delta H^\\circ$ for the addition of $\\text{I}^\\bullet$ to the double bond is endothermic ($+46\\text{ kJ/mol}$), free-radical chain addition fails and $\\text{HI}$ adds by the normal ionic Markovnikov pathway."
  ),
  ar(
    "Addition of $\\text{HCl}$ to propene in the presence of peroxides yields 2-chloropropane (Markovnikov product).",
    "Peroxide effect does not operate for $\\text{HCl}$ because the abstraction of hydrogen from $\\text{HCl}$ by free radicals is endothermic.",
    0,
    "The $\\text{H}-\\text{Cl}$ bond is too strong ($431\\text{ kJ/mol}$) for alkoxy or alkyl radicals to abstract hydrogen efficiently, so the free-radical chain fails to propagate, and the reaction proceeds via the normal ionic pathway."
  ),
  ar(
    "Reaction of ethene with hypochlorous acid ($\\text{HOCl}$) produces 2-chloroethanol.",
    "The electrophile in hypochlorous acid is the chloronium ion ($^+\\text{Cl}$), which adds first, followed by attack of the hydroxide ion or water.",
    0,
    "Because oxygen is more electronegative than chlorine, $\\text{HO}-\\text{Cl}$ is polarized as $\\text{HO}^{\\delta-}-\\text{Cl}^{\\delta+}$. The electrophilic chlorine adds to the $\\pi$-bond to form a chloronium ion, which is attacked by water to form 2-chloroethanol."
  ),
  ar(
    "Addition of cold concentrated sulfuric acid to propene followed by boiling with water produces propan-2-ol.",
    "Electrophilic addition of $\\text{H}_2\\text{SO}_4$ follows Markovnikov's rule to form isopropyl hydrogen sulfate, which undergoes nucleophilic displacement by water.",
    0,
    "Protonation of propene yields the secondary carbocation, which captures bisulfate ion $(^-\\text{OSO}_3\\text{H})$ to form isopropyl hydrogen sulfate. Boiling with water hydrolyzes the sulfate ester to propan-2-ol."
  ),
  ar(
    "The rate-determining step in the electrophilic addition of $\\text{HBr}$ to an alkene is the attack of the proton to form a carbocation.",
    "Breaking the carbon-carbon $\\pi$-bond to create a localized high-energy carbocation has a substantial activation energy barrier.",
    0,
    "Proton transfer from $\\text{HBr}$ to the alkene $\\pi$-cloud disrupts the double bond and generates a reactive, high-energy carbocation, representing the slow, rate-limiting step."
  ),
  ar(
    "Reaction of methylenecyclobutane with $\\text{HCl}$ gives 1-chloro-1-methylcyclobutane as the minor product and 1-chlorocyclopentane as the major product.",
    "The secondary carbocation intermediate undergoes ring expansion to relieve angle strain by forming a more stable five-membered ring carbocation.",
    0,
    "Protonation gives a cyclobutyl carbocation adjacent to the ring. Ring expansion from a strained 4-membered ring ($90^\\circ$) to a 5-membered cyclopentyl ring ($108^\\circ$) releases angle strain, forming 1-chlorocyclopentane as the major rearranged product."
  ),
  ar(
    "Addition of bromine to (E)-hex-3-ene gives meso-3,4-dibromohexane.",
    "Anti-addition of bromine across a symmetrical trans (E) alkene generates a meso stereoisomer.",
    0,
    "By the TAM rule (Trans + Anti $\\rightarrow$ Meso), anti-addition of $\\text{Br}_2$ to symmetrical (E)-hex-3-ene yields the optically inactive meso-3,4-dibromohexane."
  ),
  ar(
    "Electrophilic addition of $\\text{HBr}$ to 2-methylpropene is faster than to ethene.",
    "The two electron-donating methyl groups increase the electron density of the double bond and stabilize the resulting tertiary carbocation.",
    0,
    "Methyl groups activate the $\\pi$-bond through inductive and hyperconjugative electron donation and strongly stabilize the developing tertiary carbocation in the transition state."
  ),
  ar(
    "In the addition of $\\text{HBr}$ to buta-1,3-diene, 1,2-addition product predominates at low temperature ($-80^\\circ\\text{C}$), whereas 1,4-addition product predominates at higher temperature ($40^\\circ\\text{C}$).",
    "At low temperature, the reaction is kinetically controlled forming the product via faster proximate attack, whereas at higher temperature, thermodynamic control favors the more substituted, stable internal alkene.",
    0,
    "At $-80^\\circ\\text{C}$, the 1,2-adduct forms faster due to proximity of bromide to C2 (kinetic product). At $40^\\circ\\text{C}$, the reaction is reversible and equilibrates to the more substituted, thermodynamically more stable 1,4-adduct (but-2-ene skeleton)."
  ),
  ar(
    "Reaction of propene with $\\text{ICl}$ (iodine monochloride) yields 2-chloro-1-iodopropane as the major product.",
    "Chlorine is more electronegative than iodine, so $\\text{ICl}$ is polarized as $\\text{I}^{\\delta+}-\\text{Cl}^{\\delta-}$, and the electrophilic iodine adds to the terminal carbon to form the secondary carbocation.",
    0,
    "In $\\text{ICl}$, iodine is the electrophilic partner $(^+\\text{I})$ and chlorine is the nucleophilic partner $(^-\\text{Cl})$. Iodine adds to C1 according to Markovnikov's rule, and chloride attacks C2 to give 2-chloro-1-iodopropane."
  ),
  ar(
    "Addition of $\\text{HBr}$ to vinyl bromide gives 1,1-dibromoethane as the major product.",
    "The bromine atom attached to the double-bonded carbon stabilizes the adjacent carbocation through resonance donation of its unshared electron pairs.",
    0,
    "Protonation at the $-\\text{CH}_2$ carbon forms $(\\text{CH}_3-\\text{C}^+\\text{HBr})$. Although bromine withdraws electrons inductively, its lone pair stabilizes the adjacent carbocation by resonance: $\\text{CH}_3-\\text{C}^+\\text{H}-\\text{Br} \\leftrightarrow \\text{CH}_3-\\text{CH}=\\text{Br}^+$, giving 1,1-dibromoethane."
  ),
  ar(
    "Alkenes undergo anti-Markovnikov addition of water via the hydroboration-oxidation sequence.",
    "Diborane adds such that boron attaches to the less hindered, less substituted carbon atom of the alkene.",
    0,
    "Steric repulsion between the alkyl substituents and the bulky borane reagent, combined with electronic stabilization of the developing partial positive charge on the more substituted carbon, directs boron to the terminal carbon."
  ),
  ar(
    "Free-radical addition of $\\text{HBr}$ to 2-methylpropene gives 1-bromo-2-methylpropane.",
    "The bromine free radical attacks the terminal carbon to form the more stable tertiary alkyl radical.",
    0,
    "Attack of $\\text{Br}^\\bullet$ at the terminal $-\\text{CH}_2$ carbon generates the tertiary radical $((\\text{CH}_3)_2\\text{C}^\\bullet-\\text{CH}_2\\text{Br})$, which is more stable than a primary radical, leading to isobutyl bromide."
  ),

  // 9 MCQ Questions
  mcq(
    "Which of the following alkenes will yield 2-chloro-2-methylbutane as the major product upon addition of $\\text{HCl}$?",
    [
      "2-Methylbut-2-ene",
      "Pent-1-ene",
      "Pent-2-ene",
      "3,3-Dimethylbut-1-ene"
    ],
    0,
    "Addition of $\\text{HCl}$ to 2-methylbut-2-ene follows Markovnikov's rule directly without rearrangement, protonating C3 to form the tertiary carbocation at C2, which adds chloride to give 2-chloro-2-methylbutane."
  ),
  mcq(
    "The peroxide effect (anti-Markovnikov addition) is observed ONLY in the case of:",
    [
      "$\\text{HBr}$",
      "$\\text{HCl}$",
      "$\\text{HI}$",
      "$\\text{HF}$"
    ],
    0,
    "Only for $\\text{HBr}$ are both chain propagation steps exothermic in the free-radical addition mechanism. For $\\text{HCl}$ and $\\text{HI}$, endothermic steps prevent the chain reaction."
  ),
  mcq(
    "Reaction of 3,3-dimethylbut-1-ene with $\\text{HBr}$ in the absence of peroxides yields:",
    [
      "2-Bromo-2,3-dimethylbutane",
      "2-Bromo-3,3-dimethylbutane",
      "1-Bromo-3,3-dimethylbutane",
      "2,3-Dibromo-2,3-dimethylbutane"
    ],
    0,
    "Protonation forms a secondary carbocation, which undergoes a 1,2-methyl shift to form the more stable tertiary carbocation, capturing bromide to yield 2-bromo-2,3-dimethylbutane."
  ),
  mcq(
    "Addition of bromine to cis-but-2-ene in $\\text{CCl}_4$ gives:",
    [
      "$(\\pm)$-Racemic mixture of 2,3-dibromobutane",
      "meso-2,3-Dibromobutane",
      "1,2-Dibromobutane",
      "1,4-Dibromobut-2-ene"
    ],
    0,
    "By the CAR rule (Cis + Anti $\\rightarrow$ Racemic), anti-addition of bromine across cis-but-2-ene gives an equimolar racemic mixture of $(2R,3R)$ and $(2S,3S)$-2,3-dibromobutane."
  ),
  mcq(
    "Reaction of propene with chlorine water ($\\text{Cl}_2 + \\text{H}_2\\text{O}$) yields which major product?",
    [
      "1-Chloropropan-2-ol",
      "2-Chloropropan-1-ol",
      "1,2-Dichloropropane",
      "Propane-1,2-diol"
    ],
    0,
    "The cyclic chloronium ion has greater partial positive charge on the more substituted secondary carbon. Water nucleophile attacks this carbon, giving 1-chloropropan-2-ol."
  ),
  mcq(
    "Which of the following reagents will add to propene to give an anti-Markovnikov alcohol after workup?",
    [
      "$\\text{B}_2\\text{H}_6 / \\text{THF}$ followed by $\\text{H}_2\\text{O}_2 / \\text{NaOH}$",
      "$\\text{dil. } \\text{H}_2\\text{SO}_4$",
      "$\\text{Hg}(\\text{OAc})_2 / \\text{H}_2\\text{O}$ followed by $\\text{NaBH}_4$",
      "$\\text{conc. } \\text{H}_2\\text{SO}_4$ followed by boiling with water"
    ],
    0,
    "Hydroboration-oxidation $(\\text{B}_2\\text{H}_6 / \\text{THF}$ then alkaline $\\text{H}_2\\text{O}_2)$ adds water across propene in an anti-Markovnikov fashion, yielding propan-1-ol."
  ),
  mcq(
    "When propene reacts with iodine monochloride ($\\text{ICl}$), the major product formed is:",
    [
      "2-Chloro-1-iodopropane",
      "1-Chloro-2-iodopropane",
      "1,2-Diiodopropane",
      "1,2-Dichloropropane"
    ],
    0,
    "$\\text{ICl}$ is polarized as $\\text{I}^{\\delta+}-\\text{Cl}^{\\delta-}$. Electrophilic $^+\\text{I}$ adds to the terminal carbon to form the secondary carbocation, which captures chloride to form 2-chloro-1-iodopropane."
  ),
  mcq(
    "In the addition of $\\text{HBr}$ to buta-1,3-diene, what is the major product at $-80^\\circ\\text{C}$ (kinetic control)?",
    [
      "3-Bromobut-1-ene (1,2-adduct)",
      "1-Bromobut-2-ene (1,4-adduct)",
      "1,4-Dibromobut-2-ene",
      "2,3-Dibromobutane"
    ],
    0,
    "Under kinetic control at $-80^\\circ\\text{C}$, the 1,2-addition product (3-bromobut-1-ene) forms faster due to proximity of bromide to C2 in the ion pair."
  ),
  mcq(
    "Addition of $\\text{HBr}$ to 2-methylpropene in the presence of peroxides yields:",
    [
      "1-Bromo-2-methylpropane (isobutyl bromide)",
      "2-Bromo-2-methylpropane (tert-butyl bromide)",
      "2-Bromobutane",
      "1-Bromobutane"
    ],
    0,
    "Under peroxide effect, bromine radical attacks the terminal carbon to form the more stable tertiary radical, producing 1-bromo-2-methylpropane upon hydrogen abstraction."
  ),

  // 13 NUM Questions
  num(
    "How many moles of $\\text{HBr}$ add to 1 mole of buta-1,3-diene to form a mono-addition product?",
    1,
    "Mono-addition consumes exactly 1 mole of $\\text{HBr}$ per mole of diene to give 3-bromobut-1-ene or 1-bromobut-2-ene."
  ),
  num(
    "How many stereoisomers are formed in the racemic mixture obtained by the anti-addition of bromine to cis-but-2-ene?",
    2,
    "The racemic mixture consists of exactly 2 enantiomers: $(2R,3R)$-2,3-dibromobutane and $(2S,3S)$-2,3-dibromobutane."
  ),
  num(
    "How many chiral carbon atoms are present in 2-bromobutane?",
    1,
    "In 2-bromobutane $(\\text{CH}_3-\\text{C}^*\\text{HBr}-\\text{CH}_2\\text{CH}_3)$, carbon-2 is bonded to four different groups ($-\\text{H}$, $-\\text{Br}$, $-\\text{CH}_3$, $-\\text{C}_2\\text{H}_5$), giving exactly 1 chiral center."
  ),
  num(
    "How many chiral carbon atoms are present in 2-chloro-2-methylbutane?",
    0,
    "In 2-chloro-2-methylbutane $((\\text{CH}_3)_2\\text{C(Cl)}-\\text{CH}_2\\text{CH}_3)$, C2 is bonded to two identical methyl groups. None of the carbons are asymmetric, giving 0 chiral centers."
  ),
  num(
    "What is the number of hyperconjugative $\\alpha$-hydrogen atoms in the secondary carbocation intermediate formed by protonation of propene?",
    6,
    "Protonation of propene yields the isopropyl cation $(\\text{CH}_3-\\text{CH}^+-\\text{CH}_3)$, which has two methyl groups adjacent to the positive carbon: $2 \\times 3 = 6$ $\\alpha$-hydrogens."
  ),
  num(
    "What is the number of $\\alpha$-hydrogen atoms in the tertiary carbocation formed by protonation of 2-methylpropene?",
    9,
    "Protonation of 2-methylpropene yields the tert-butyl cation $((\\text{CH}_3)_3\\text{C}^+)$, which has three methyl groups: $3 \\times 3 = 9$ $\\alpha$-hydrogens."
  ),
  num(
    "How many bromine atoms are present in one molecule of the product formed by adding $\\text{HBr}$ to 2-bromopropene according to Markovnikov's rule?",
    2,
    "Addition gives 2,2-dibromopropane $(\\text{CH}_3-\\text{CBr}_2-\\text{CH}_3)$, which contains exactly 2 bromine atoms."
  ),
  num(
    "How many carbon atoms are present in the ring of the cyclic bromonium ion intermediate formed during the bromination of ethene?",
    2,
    "The cyclic bromonium ion is a three-membered ring consisting of 2 carbon atoms and 1 positively charged bromine atom."
  ),
  num(
    "What is the formal charge on the bromine atom in a cyclic bromonium ion intermediate?",
    1,
    "In the bridged bromonium ion, the bromine atom forms two covalent bonds and retains two lone pairs: formal charge = $7 - 4 - 2 = +1$."
  ),
  num(
    "How many moles of $\\text{HBr}$ will react completely with 1 mole of buta-1,3-diene to form a saturated dibromoalkane?",
    2,
    "Buta-1,3-diene has two double bonds. Complete addition of $\\text{HBr}$ consumes 2 moles of $\\text{HBr}$ to yield saturated dibromobutane."
  ),
  num(
    "How many carbon atoms in 1-chloropropan-2-ol are chiral?",
    1,
    "In 1-chloropropan-2-ol $(\\text{CH}_3-\\text{C}^*\\text{H(OH)}-\\text{CH}_2\\text{Cl})$, carbon-2 is bonded to $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{CH}_2\\text{Cl}$, giving 1 chiral carbon."
  ),
  num(
    "What is the coordination number of the carbocation carbon in the intermediate of electrophilic addition?",
    3,
    "A classical carbocation is $sp^2$ hybridized and forms 3 $\\sigma$-bonds to neighboring atoms with a vacant $p$-orbital, giving a coordination number of 3."
  ),
  num(
    "How many total constitutional products are formed when $\\text{HBr}$ adds to propene in the presence of peroxides under complete conversion?",
    1,
    "The free-radical addition is highly regioselective and produces 1-bromopropane as the single constitutional product."
  )
];

console.log(`Part 6 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part6.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part6.js");
