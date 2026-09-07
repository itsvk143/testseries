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
    subTopic: "Electrophilic aromatic substitution (nitration, halogenation, Friedel-Crafts)",
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
    subTopic: "Electrophilic aromatic substitution (nitration, halogenation, Friedel-Crafts)",
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
    subTopic: "Electrophilic aromatic substitution (nitration, halogenation, Friedel-Crafts)",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 25 AR Questions
  ar(
    "In the nitration of benzene using a mixture of concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$, nitric acid acts as a Bronsted base.",
    "Sulfuric acid is a stronger acid than nitric acid and protonates the hydroxyl group of nitric acid to generate the nitronium ion ($^+\\text{NO}_2$).",
    0,
    "$\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons ^+\\text{NO}_2 + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$. Here, $\\text{H}_2\\text{SO}_4$ donates a proton (Bronsted acid) and $\\text{HNO}_3$ accepts the proton (Bronsted base), which dehydrates to form the linear electrophile $^+\\text{NO}_2$."
  ),
  ar(
    "Nitration of benzene does not exhibit a primary kinetic isotope effect ($k_{\\text{H}} / k_{\\text{D}} \\approx 1$).",
    "The cleavage of the aromatic carbon-hydrogen (or carbon-deuterium) bond occurs in the fast second step after the rate-determining formation of the arenium ion ($\\sigma$-complex).",
    0,
    "The rate-determining step is the attack of $^+\\text{NO}_2$ on the aromatic $\\pi$-system to form the Wheland intermediate. Because $\\text{C}-\\text{H}$ or $\\text{C}-\\text{D}$ bond rupture happens in the subsequent rapid proton-loss step, isotopic substitution does not affect the overall reaction rate."
  ),
  ar(
    "Chlorobenzene undergoes electrophilic aromatic substitution predominantly at ortho and para positions, yet it reacts more slowly than benzene.",
    "The strong electron-withdrawing inductive effect ($-I$) of chlorine deactivates the ring, but its $+M$ resonance donation stabilizes the ortho and para Wheland intermediates.",
    0,
    "Chlorine is a deactivating group because its $-I$ effect outweighs its $+M$ effect, lowering electron density throughout the ring. However, when attack occurs at ortho and para positions, resonance donation from chlorine's lone pair creates an especially stable octet contributor, directing substitution to ortho/para."
  ),
  ar(
    "Friedel-Crafts alkylation of benzene with 1-chloropropane gives isopropylbenzene (cumene) as the major product rather than n-propylbenzene.",
    "The primary propyl carbocation initially generated undergoes a 1,2-hydride shift to form the thermodynamically more stable secondary propyl carbocation.",
    0,
    "$\\text{AlCl}_3$ abstracts chloride to generate the primary carbocation $(\\text{CH}_3\\text{CH}_2\\text{CH}_2^+)$, which rearranges via a 1,2-hydride shift to the secondary carbocation $((\\text{CH}_3)_2\\text{CH}^+)$, attacking benzene to form cumene as the predominant product."
  ),
  ar(
    "Friedel-Crafts acylation of benzene is preferred over Friedel-Crafts alkylation for the synthesis of straight-chain alkylbenzenes.",
    "The acylium ion intermediate ($\\text{R}-\\text{C}\\equiv\\text{O}^+$) is resonance-stabilized and does not undergo carbocation rearrangement.",
    0,
    "Unlike alkyl carbocations, the acylium ion $(\\text{R}-\\text{C}^+=\\text{O} \\leftrightarrow \\text{R}-\\text{C}\\equiv\\text{O}^+)$ is stabilized by resonance with oxygen and does not rearrange. The resulting straight-chain ketone can then be reduced cleanly to the straight-chain alkane via Clemmensen or Wolff-Kishner reduction."
  ),
  ar(
    "Friedel-Crafts alkylation of benzene often leads to polyalkylated products, whereas Friedel-Crafts acylation halts cleanly at monoacylation.",
    "An alkyl group activates the benzene ring towards further electrophilic attack, whereas an acyl group deactivates the ring against further electrophilic substitution.",
    0,
    "Alkyl groups release electrons via hyperconjugation and inductive effect, making the alkylbenzene product more reactive than starting benzene. In contrast, the acyl group is strongly electron-withdrawing ($-M$), completely deactivating the product ring towards a second acylation."
  ),
  ar(
    "Nitrobenzene cannot be used as a substrate in Friedel-Crafts alkylation or acylation reactions.",
    "The nitro group is a powerfully deactivating group that depletes electron density from the benzene ring, making it inert towards attack by weak carbocation electrophiles.",
    0,
    "The $-M$ and $-I$ effects of $-\\text{NO}_2$ drastically diminish the nucleophilicity of the aromatic ring, rendering it too unreactive to attack carbocations or acylium ions. Nitrobenzene is often used as an inert solvent for Friedel-Crafts reactions."
  ),
  ar(
    "Aniline does not undergo Friedel-Crafts alkylation or acylation in the presence of anhydrous $\\text{AlCl}_3$.",
    "The lone pair of electrons on the amino nitrogen atom coordinates with the Lewis acid catalyst $\\text{AlCl}_3$ to form a strongly deactivating complex.",
    0,
    "Aniline is a Lewis base: $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{AlCl}_3 \\rightarrow \\text{C}_6\\text{H}_5-\\text{N}^+\\text{H}_2-\\text{AlCl}_3^-$. The positively charged nitrogen exerts a powerful $-I$ deactivating effect on the ring and deactivates the catalyst."
  ),
  ar(
    "Sulfonation of benzene with fuming sulfuric acid (oleum) is a reversible electrophilic aromatic substitution.",
    "The sulfur trioxide ($\\text{SO}_3$) electrophile can be expelled as $\\text{SO}_3$ or $\\text{H}_2\\text{SO}_4$ upon heating benzenesulfonic acid with superheated steam or dilute acid.",
    0,
    "Sulfonation has a low activation barrier for desulfonation. Heating benzenesulfonic acid with dilute mineral acid or superheated steam easily hydrolyzes it back to benzene, making $-\\text{SO}_3\\text{H}$ a useful protecting/blocking group."
  ),
  ar(
    "The active electrophile in the sulfonation of benzene with concentrated sulfuric acid or oleum is neutral sulfur trioxide ($\\text{SO}_3$).",
    "Sulfur trioxide contains three highly electronegative oxygen atoms that pull electron density away from the sulfur atom, creating a powerful electrophilic center.",
    0,
    "In $\\text{SO}_3$, the sulfur atom is in a high formal oxidation state ($+6$) surrounded by three polar $\\text{S}=\\text{O}$ bonds, making the neutral sulfur atom an aggressive electrophile capable of attacking the aromatic $\\pi$-system."
  ),
  ar(
    "Iodination of benzene requires the presence of an oxidizing agent like concentrated $\\text{HNO}_3$ or $\\text{HIO}_3$.",
    "The hydrogen iodide ($\\text{HI}$) formed as a by-product reduces iodobenzene back to benzene, and the oxidizing agent oxidizes $\\text{HI}$ into $\\text{I}_2$.",
    0,
    "$\\text{C}_6\\text{H}_6 + \\text{I}_2 \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{I} + \\text{HI}$. Because $\\text{HI}$ is a powerful reducing agent, the reaction is reversible. An oxidant consumes $\\text{HI}$ ($5\\text{HI} + \\text{HIO}_3 \\rightarrow 3\\text{I}_2 + 3\\text{H}_2\\text{O}$), driving the equilibrium forward."
  ),
  ar(
    "Toluene undergoes electrophilic aromatic substitution faster than benzene.",
    "The methyl group in toluene donates electron density into the aromatic ring through inductive effect ($+I$) and hyperconjugation.",
    0,
    "Hyperconjugation of the three $\\alpha$-hydrogens of the methyl group with the aromatic $\\pi$-system increases electron density primarily at the ortho and para positions, accelerating electrophilic attack relative to benzene."
  ),
  ar(
    "Nitration of toluene gives a mixture of ortho-nitrotoluene and para-nitrotoluene as the major products, with meta-nitrotoluene formed only in trace amounts.",
    "The methyl group stabilizes the Wheland intermediate formed during ortho and para attack through hyperconjugative tertiary carbocation resonance contributors.",
    0,
    "For ortho and para attacks, one of the three resonance structures places the positive charge directly on the carbon bearing the methyl group (tertiary-like carbocation), providing extra hyperconjugative stabilization that is absent for meta attack."
  ),
  ar(
    "The nitro group ($-\\text{NO}_2$) is meta-directing in electrophilic aromatic substitution.",
    "Electrophilic attack at the ortho and para positions generates a resonance structure in which positive charge resides directly on the ring carbon attached to the positively charged nitrogen of the nitro group.",
    0,
    "Having adjacent positive charges ($-\\text{C}^+-\\text{N}^+\\text{O}_2^-$) causes severe electrostatic repulsion, destabilizing the ortho and para Wheland intermediates. The meta intermediate avoids this juxtaposition and has lower activation energy."
  ),
  ar(
    "Direct bromination of benzene with bromine requires a Lewis acid catalyst such as $\\text{FeBr}_3$ or anhydrous $\\text{AlBr}_3$.",
    "The Lewis acid polarizes the bromine-bromine bond to generate a strong electrophile ($\\text{Br}^+$ or $\\text{Br}_2 \\cdot \\text{FeBr}_3$ complex).",
    0,
    "Benzene's aromatic sextet is not nucleophilic enough to polarize non-polar $\\text{Br}_2$ spontaneously. The Lewis acid accepts an electron pair from $\\text{Br}_2$ to form $[\\text{FeBr}_4]^- \\text{Br}^+$, generating the active electrophile."
  ),
  ar(
    "Benzotrifluoride ($\\text{C}_6\\text{H}_5\\text{CF}_3$) undergoes electrophilic nitration exclusively at the meta position.",
    "The trifluoromethyl group exerts a powerful electron-withdrawing inductive effect ($-I$) without any counteracting $+M$ resonance donation.",
    0,
    "The three highly electronegative fluorine atoms create a massive $-I$ dipole on the benzylic carbon, destabilizing the ortho and para $\\sigma$-complexes and directing incoming electrophiles to the meta position."
  ),
  ar(
    "Phenol undergoes nitration with dilute $\\text{HNO}_3$ at room temperature ($298\\text{ K}$) without needing concentrated $\\text{H}_2\\text{SO}_4$.",
    "The phenolic hydroxyl group is strongly activating towards electrophilic aromatic substitution through its $+M$ resonance donation.",
    0,
    "The lone pair on the phenolic oxygen powerfully activates the aromatic ring through $+M$ resonance, allowing electrophilic nitration to proceed smoothly with dilute $\\text{HNO}_3$ under mild conditions."
  ),
  ar(
    "Acetanilide undergoes bromination to give p-bromoacetanilide without requiring any catalyst.",
    "The acetamido group ($-\\text{NHCOCH}_3$) is an activating, ortho/para-directing group.",
    0,
    "Even though acetylation moderates the activating power of the amino group, $-\\text{NHCOCH}_3$ remains sufficiently activating to direct bromination cleanly to the para position in ethanoic acid without any Lewis acid catalyst."
  ),
  ar(
    "The arenium ion (Wheland intermediate) formed in electrophilic aromatic substitution is non-aromatic.",
    "The ring carbon that accepts the electrophile becomes $sp^3$ hybridized, which disrupts the continuous cyclic conjugation of the aromatic $\\pi$-system.",
    0,
    "Formation of the $\\sigma$-complex converts one ring carbon from $sp^2$ to $sp^3$. The four remaining $\\pi$-electrons are delocalized over only five $sp^2$ carbons, breaking aromaticity until the proton is eliminated."
  ),
  ar(
    "Gattermann-Koch reaction of benzene with carbon monoxide and $\\text{HCl}$ in the presence of $\\text{AlCl}_3 / \\text{CuCl}$ yields benzaldehyde.",
    "The reaction involves formylation of the benzene ring by a formyl cation intermediate ($^+\\text{CHO}$) generated from $\\text{CO}$ and $\\text{HCl}$.",
    0,
    "$\\text{CO} + \\text{HCl} + \\text{AlCl}_3 \\rightarrow \\text{HCO}^+ \\text{AlCl}_4^-$. Electrophilic attack of the formyl cation on benzene followed by proton loss gives benzaldehyde."
  ),
  ar(
    "Halogenation of toluene in the presence of light at boiling temperature gives benzyl halide rather than ring-halogenated products.",
    "In the presence of light and heat, halogenation proceeds by a free-radical chain mechanism that selectively targets the weak benzylic $\\text{C}-\\text{H}$ bond.",
    0,
    "Under photochemical conditions, free radicals are generated. The resonance-stabilized benzylic free radical $(\\text{PhCH}_2^\\bullet)$ forms with very low activation energy, directing halogenation exclusively to the side chain."
  ),
  ar(
    "Sulfonation of naphthalene at $80^\\circ\\text{C}$ gives naphthalene-1-sulfonic acid as the major product, whereas at $160^\\circ\\text{C}$ it gives naphthalene-2-sulfonic acid.",
    "Naphthalene-1-sulfonic acid is the kinetically controlled product, while naphthalene-2-sulfonic acid is the thermodynamically controlled product.",
    0,
    "At $80^\\circ\\text{C}$, electrophilic attack at the more nucleophilic $\\alpha$ (1) position forms faster (kinetic product). At $160^\\circ\\text{C}$, the reaction is reversible and equilibrates to the less sterically crowded $\\beta$ (2) isomer (thermodynamic product)."
  ),
  ar(
    "Aryl halides and vinyl halides cannot be used as halide components in Friedel-Crafts alkylation.",
    "The carbon-halogen bond in aryl and vinyl halides has partial double bond character due to resonance, preventing carbocation formation with Lewis acids.",
    0,
    "Resonance delocalizes the halogen lone pair into the $\\pi$-system, strengthening the $\\text{C}-\\text{X}$ bond. Furthermore, aryl and vinyl carbocations are extremely unstable, precluding their formation under Friedel-Crafts conditions."
  ),
  ar(
    "Electrophilic aromatic substitution of benzoic acid gives 3-bromobenzoic acid upon reaction with bromine and $\\text{FeBr}_3$.",
    "The carboxyl group ($-\\text{COOH}$) is an electron-withdrawing deactivating group that directs electrophiles to the meta position.",
    0,
    "The carboxyl group withdraws electrons by $-M$ and $-I$ effects, causing greatest electron depletion at the ortho and para positions and directing incoming electrophiles to the meta position."
  ),
  ar(
    "Anhydrous $\\text{AlCl}_3$ used in Friedel-Crafts reactions must be stored in tightly stoppered bottles.",
    "Anhydrous $\\text{AlCl}_3$ is hygroscopic and fumes in moist air, reacting with atmospheric moisture to form $\\text{Al(OH)}_3$ and $\\text{HCl}$ gas.",
    0,
    "$\\text{AlCl}_3 + 3\\text{H}_2\\text{O} \\rightarrow \\text{Al(OH)}_3 + 3\\text{HCl}\\uparrow$. Water destroys the Lewis acid catalyst by coordinating to its vacant orbital and hydrolyzing it."
  ),

  // 9 MCQ Questions
  mcq(
    "The active electrophilic species involved in the nitration of benzene using a mixture of concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$ is:",
    [
      "Nitronium ion ($^+\\text{NO}_2$)",
      "Nitrite ion ($\\text{NO}_2^-$)",
      "Nitrosonium ion ($^+\\text{NO}$)",
      "Nitrate ion ($\\text{NO}_3^-$)"
    ],
    0,
    "Concentrated $\\text{H}_2\\text{SO}_4$ protonates concentrated $\\text{HNO}_3$ to generate the linear, electrophilic nitronium ion $(^+\\text{NO}_2)$, which attacks the aromatic ring."
  ),
  mcq(
    "Which of the following aromatic compounds will NOT undergo Friedel-Crafts alkylation or acylation?",
    [
      "Nitrobenzene",
      "Toluene",
      "Benzene",
      "Anisole"
    ],
    0,
    "Nitrobenzene contains a strongly deactivating nitro group ($-\\text{NO}_2$) that depletes ring electron density so severely that it fails to react with carbocations or acylium ions."
  ),
  mcq(
    "Friedel-Crafts alkylation of benzene with 1-chloropropane in the presence of anhydrous $\\text{AlCl}_3$ predominantly yields:",
    [
      "Isopropylbenzene (cumene)",
      "n-Propylbenzene",
      "Ethylbenzene",
      "Toluene"
    ],
    0,
    "The primary propyl carbocation formed initially rearranges via a 1,2-hydride shift into the more stable secondary isopropyl carbocation, which attacks benzene to form cumene."
  ),
  mcq(
    "Which of the following substituents is DEACTIVATING yet ORTHO/PARA-DIRECTING in electrophilic aromatic substitution?",
    [
      "Chlorine ($-\\text{Cl}$)",
      "Nitro ($-\\text{NO}_2$)",
      "Methoxy ($-\\text{OCH}_3$)",
      "Carboxyl ($-\\text{COOH}$)"
    ],
    0,
    "Halogens like chlorine withdraw electron density inductively ($-I > +M$), deactivating the ring towards electrophilic attack, but stabilize the ortho/para Wheland intermediates via $+M$ donation, directing incoming electrophiles to ortho and para positions."
  ),
  mcq(
    "The active electrophile involved in the sulfonation of benzene by oleum (fuming sulfuric acid) is:",
    [
      "Neutral sulfur trioxide ($\\text{SO}_3$)",
      "Hydronium ion ($\\text{H}_3\\text{O}^+$)",
      "Bisulfate ion ($\\text{HSO}_4^-$)",
      "Sulfur dioxide ($\\text{SO}_2$)"
    ],
    0,
    "Sulfur trioxide $(\\text{SO}_3)$ is a neutral molecule with strong electrophilic character on sulfur due to the three electronegative oxygen atoms."
  ),
  mcq(
    "Aniline fails to undergo Friedel-Crafts alkylation because:",
    [
      "The $-\\text{NH}_2$ group coordinates with the Lewis acid catalyst $\\text{AlCl}_3$, forming a strongly deactivating group",
      "Aniline is non-aromatic",
      "The amino group is a meta-directing group",
      "Aniline decomposes on heating with $\\text{AlCl}_3$"
    ],
    0,
    "The basic amino group donates its lone pair to the Lewis acid catalyst $\\text{AlCl}_3$ to form a salt complex $(-\\text{N}^+\\text{H}_2-\\text{AlCl}_3^-)$ which deactivates the aromatic ring and neutralizes the catalyst."
  ),
  mcq(
    "In the chlorination of benzene with $\\text{Cl}_2$ and $\\text{FeCl}_3$, the function of $\\text{FeCl}_3$ is to:",
    [
      "Polarize the $\\text{Cl}-\\text{Cl}$ bond and generate the active electrophile",
      "Absorb the $\\text{HCl}$ gas formed",
      "Act as a reducing agent",
      "Act as a free-radical initiator"
    ],
    0,
    "$\\text{FeCl}_3$ is a Lewis acid that coordinates with $\\text{Cl}_2$ to form $[\\text{FeCl}_4]^- \\text{Cl}^+$, polarizing the bond and generating the active electrophile."
  ),
  mcq(
    "Nitration of toluene with concentrated $\\text{HNO}_3 / \\text{H}_2\\text{SO}_4$ gives:",
    [
      "A mixture of ortho- and para-nitrotoluene",
      "Exclusively meta-nitrotoluene",
      "Benzaldehyde",
      "Benzyl nitrate"
    ],
    0,
    "The methyl group of toluene is activating and ortho/para-directing via hyperconjugation and $+I$ effect, producing a mixture of ortho- and para-nitrotoluene as the major products."
  ),
  mcq(
    "The conversion of benzene into acetophenone is best carried out by reacting benzene with:",
    [
      "$\\text{CH}_3\\text{COCl}$ in the presence of anhydrous $\\text{AlCl}_3$",
      "$\\text{CH}_3\\text{Cl}$ in the presence of anhydrous $\\text{AlCl}_3$",
      "$\\text{CH}_3\\text{COOH}$ in the presence of $\\text{H}_2\\text{SO}_4$",
      "$\\text{CH}_3\\text{CHO}$ in the presence of $\\text{ZnCl}_2$"
    ],
    0,
    "Friedel-Crafts acylation with acetyl chloride $(\\text{CH}_3\\text{COCl})$ and anhydrous $\\text{AlCl}_3$ converts benzene directly into acetophenone in high yield without rearrangement."
  ),

  // 13 NUM Questions
  num(
    "What is the formal charge on the nitrogen atom in the active nitrating electrophile, the nitronium ion $(^+\\text{NO}_2)$?",
    1,
    "The nitronium ion is linear $(\\text{O}=\\text{N}^+=\\text{O})$. The central nitrogen forms four bonds and has zero lone pairs: formal charge = $5 - 0 - 4 = +1$."
  ),
  num(
    "What is the bond angle in degrees in the linear nitronium ion $(^+\\text{NO}_2)$?",
    180,
    "The nitronium ion is isoelectronic with carbon dioxide $(\\text{O}=\\text{N}^+=\\text{O})$, having $sp$ hybridization on nitrogen and an ideal bond angle of $180^\\circ$."
  ),
  num(
    "How many canonical resonance structures can be drawn for the arenium ion (Wheland intermediate / $\\sigma$-complex) in the electrophilic substitution of benzene?",
    3,
    "The $\\sigma$-complex of benzene has 3 resonance contributors that delocalize the positive charge over the two ortho and one para carbons relative to the $sp^3$ ring carbon."
  ),
  num(
    "How many carbon atoms in the Wheland intermediate ($\sigma$-complex) of benzene are $sp^2$ hybridized?",
    5,
    "The carbon that accepts the electrophile becomes $sp^3$ hybridized, leaving the remaining 5 carbon atoms in the ring $sp^2$ hybridized."
  ),
  num(
    "How many total hyperconjugative $\\alpha$-hydrogen atoms are present in toluene $(\\text{C}_6\\text{H}_5\\text{CH}_3)$?",
    3,
    "The methyl group attached to the aromatic ring contains exactly 3 $\\alpha$-hydrogen atoms capable of hyperconjugation."
  ),
  num(
    "How many moles of $\\text{HNO}_3$ are consumed to convert 1 mole of toluene into 2,4,6-trinitrotoluene (TNT)?",
    3,
    "TNT contains three nitro groups at positions 2, 4, and 6. Nitration consumes exactly 3 moles of $\\text{HNO}_3$ per mole of toluene."
  ),
  num(
    "How many moles of $\\text{AlCl}_3$ are required as catalyst in Friedel-Crafts acylation of 1 mole of benzene with 1 mole of an acyl chloride (minimum stoichiometric amount to complex with the product)?",
    1,
    "Because the carbonyl oxygen of the ketone product coordinates tightly with $\\text{AlCl}_3$, slightly more than 1 molar equivalent of $\\text{AlCl}_3$ (at least 1 mole) is consumed in the reaction."
  ),
  num(
    "How many nitro groups are present in one molecule of TNT (2,4,6-trinitrotoluene)?",
    3,
    "TNT is 2,4,6-trinitrotoluene, which contains exactly 3 nitro $(-\\text{NO}_2)$ groups substituted on the aromatic ring."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of toluene $(\\text{C}_7\\text{H}_8)$?",
    4,
    "For $\\text{C}_7\\text{H}_8$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 7 + 1 - 4 = 4$ (1 benzene ring + 3 aromatic $\\pi$-bonds = 4)."
  ),
  num(
    "How many monochloro constitutional isomers are formed by the electrophilic chlorination of toluene $(\\text{C}_6\\text{H}_5\\text{CH}_3)$ in the presence of $\\text{FeCl}_3$?",
    2,
    "Electrophilic chlorination of toluene yields 2 major constitutional isomers: 2-chlorotoluene (ortho) and 4-chlorotoluene (para). (Meta is formed only in negligible trace amounts <1%). Total = 2."
  ),
  num(
    "How many position isomers of dichlorobenzene exist?",
    3,
    "Dichlorobenzene exists as 3 positional isomers: 1,2-dichlorobenzene (ortho), 1,3-dichlorobenzene (meta), and 1,4-dichlorobenzene (para)."
  ),
  num(
    "What is the number of $\\pi$-electrons delocalized across the five $sp^2$ carbons in the Wheland intermediate of benzene?",
    4,
    "In the $\\sigma$-complex, one carbon is $sp^3$ hybridized, and the remaining five $sp^2$ carbons share a conjugated system containing 4 $\\pi$-electrons (two double bonds)."
  ),
  num(
    "How many moles of $\\text{SO}_3$ are consumed per mole of benzene in the formation of benzenesulfonic acid?",
    1,
    "The reaction stoichiometry is: $\\text{C}_6\\text{H}_6 + \\text{SO}_3 \\rightarrow \\text{C}_6\\text{H}_5\\text{SO}_3\\text{H}$. Exactly 1 mole of $\\text{SO}_3$ is consumed per mole of benzene."
  )
];

console.log(`Part 7 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part7.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part7.js");
