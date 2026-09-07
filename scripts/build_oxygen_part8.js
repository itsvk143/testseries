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
    subTopic: "Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Nucleophilic addition reactions of carbonyls (aldol, Cannizzaro)",
    chapter: "Organic Compounds Containing Oxygen"
  };
}

const questions = [
  // 25 AR Questions
  ar(
    "In cross-Cannizzaro reaction between benzaldehyde and formaldehyde in the presence of concentrated $\\text{NaOH}$, formaldehyde is selectively oxidized to sodium formate while benzaldehyde is reduced to benzyl alcohol.",
    "Formaldehyde is more reactive towards nucleophilic addition by hydroxide ion due to lesser steric hindrance and greater electrophilicity of its carbonyl carbon.",
    0,
    "Hydroxide attacks formaldehyde more rapidly than benzaldehyde to form the gem-diolate anion, which then transfers a hydride ion $(\\text{H}^-)$ to the carbonyl carbon of benzaldehyde. Hence, formaldehyde is oxidized and benzaldehyde is reduced."
  ),
  ar(
    "Formaldehyde, benzaldehyde, and 2,2-dimethylpropanal (pivalaldehyde) all undergo the Cannizzaro reaction upon heating with $50\\% \\text{ NaOH}$.",
    "These aldehydes lack $\\alpha$-hydrogen atoms and cannot undergo enolization to form enolate carbanions required for aldol condensation.",
    0,
    "Cannizzaro reaction is characteristic of aldehydes having no $\\alpha$-hydrogens. Since methanal, benzaldehyde, and trimethylacetaldehyde have no $\\alpha$-H, they disproportionate via hydride transfer in concentrated base."
  ),
  ar(
    "Ethanal undergoes aldol condensation in the presence of dilute aqueous $\\text{NaOH}$ to give but-2-enal upon warming.",
    "The $\\alpha$-hydrogen atoms of ethanal are acidic due to the strong electron-withdrawing inductive and resonance effects of the carbonyl group.",
    0,
    "Base abstracts an acidic $\\alpha$-hydrogen to form a resonance-stabilized enolate ion $(^-\\text{CH}_2-\\text{CHO} \\leftrightarrow \\text{CH}_2=\\text{CH}-\\text{O}^-)$, which attacks a second ethanal molecule to form 3-hydroxybutanal (aldol), dehydrating to but-2-enal on warming."
  ),
  ar(
    "The rate-determining step in the Cannizzaro reaction is the transfer of a hydride ion from the tetrahedral intermediate to the second aldehyde molecule.",
    "Hydride ion ($\\text{H}^-$) is a poor leaving group and requires significant activation energy to detach and transfer to an acceptor carbonyl carbon.",
    0,
    "The tetrahedral adduct formed by $\\text{OH}^-$ attack expels a hydride ion. Because $\\text{H}^-$ is an energetic, poor leaving group, this bimolecular hydride transfer represents the slow, rate-determining step of the reaction."
  ),
  ar(
    "Only one of the two amino groups in semicarbazide ($\\text{NH}_2\\text{CONHNH}_2$) acts as a nucleophile in forming semicarbazones with aldehydes and ketones.",
    "The lone pair of electrons on the amide nitrogen atom is delocalized by resonance into the carbonyl $\\pi$-system, leaving only the hydrazine amino group nucleophilic.",
    0,
    "In semicarbazide, the $-\\text{NH}_2$ attached directly to the carbonyl group is an amide nitrogen whose lone pair is delocalized via resonance: $\\text{H}_2\\text{N}-\\text{C}(=\\text{O})-\\text{NH}-\\text{NH}_2 \\leftrightarrow \\text{H}_2\\text{N}^+=\\text{C}(\\text{O}^-)-\\text{NH}-\\text{NH}_2$. The other amino group (hydrazine end) is not conjugated and remains nucleophilic."
  ),
  ar(
    "Addition of hydrogen cyanide ($\\text{HCN}$) to aldehydes and ketones is catalyzed by a base.",
    "Pure $\\text{HCN}$ is a very weak acid with a low degree of dissociation, and base generates the strongly nucleophilic cyanide ion ($^-\\text{C}\\equiv\\text{N}$).",
    0,
    "$\\text{HCN}$ has $pK_a \\approx 9.2$. Adding trace base deprotonates $\\text{HCN}$ to generate free $^-\\text{CN}$, which rapidly attacks the carbonyl carbon in the rate-determining step of cyanohydrin formation."
  ),
  ar(
    "Cross-aldol condensation between an equimolar mixture of ethanal and propanal gives a mixture of four different condensation products.",
    "Both ethanal and propanal contain $\\alpha$-hydrogen atoms and can each act as both nucleophilic enolate donor and electrophilic carbonyl acceptor.",
    0,
    "Two self-condensation products and two cross-condensation products are formed because either aldehyde can generate an enolate and either aldehyde can be attacked by that enolate."
  ),
  ar(
    "Cross-aldol condensation between benzaldehyde and acetophenone (Claisen-Schmidt reaction) yields a single major product, 1,3-diphenylprop-2-en-1-one (chalcone).",
    "Benzaldehyde lacks $\\alpha$-hydrogen atoms and can only act as the electrophilic acceptor, while the enolate of acetophenone acts as the nucleophilic donor.",
    0,
    "Because benzaldehyde has no $\\alpha$-hydrogens, it cannot form an enolate. Acetophenone enolate attacks the more electrophilic carbonyl of benzaldehyde, producing chalcone upon spontaneous dehydration."
  ),
  ar(
    "In acidic solution, reaction of aldehydes with ammonia derivatives like hydroxylamine is carried out at a carefully controlled $pH$ (around $4.5$).",
    "At very low $pH$ ($pH < 3$), the amine nucleophile is completely protonated into an unreactive ammonium salt, whereas at high $pH$ the carbonyl oxygen is insufficiently protonated.",
    0,
    "An optimal $pH$ of $4.5$ provides enough protonation of the carbonyl oxygen to activate it toward nucleophilic attack while leaving a sufficient concentration of unprotonated free amine nucleophile."
  ),
  ar(
    "Glyoxal ($\\text{OHC}-\\text{CHO}$) undergoes an intramolecular Cannizzaro reaction on treatment with concentrated aqueous $\\text{NaOH}$ to yield sodium glycolate.",
    "The hydride transfer occurs internally between the two carbonyl carbons within the same molecule.",
    0,
    "Hydroxide attacks one aldehyde group of glyoxal. The resulting alkoxide transfers an internal hydride to the adjacent aldehyde carbon, producing the $\\alpha$-hydroxy acid salt, sodium glycolate $(\\text{HOCH}_2\\text{COONa})$."
  ),
  ar(
    "Benzoin condensation of benzaldehyde requires catalytic cyanide ion ($\\text{KCN}$) in alcoholic solution.",
    "Cyanide ion is uniquely effective because it acts as a good nucleophile to attack the carbonyl, a good electron-withdrawing group to stabilize the carbanion, and a good leaving group in the final step.",
    0,
    "Cyanide adds to benzaldehyde to form a cyanohydrin intermediate, stabilizes the adjacent carbanion by resonance, and is subsequently expelled when the carbanion attacks a second benzaldehyde molecule."
  ),
  ar(
    "Reaction of aldehydes with excess monohydric alcohol in the presence of dry hydrogen chloride gas yields acetals.",
    "Dry $\\text{HCl}$ protonates the carbonyl oxygen, increasing its electrophilicity, and absorbs the water formed to shift the equilibrium towards acetal formation.",
    0,
    "Protonation activates the carbonyl carbon towards nucleophilic attack by alcohol. Dry $\\text{HCl}$ gas acts as an anhydrous acid catalyst and helps drive the reversible equilibrium to completion."
  ),
  ar(
    "Acetals are stable in neutral and alkaline aqueous solutions, but are readily hydrolyzed back to carbonyl compounds in aqueous acid.",
    "Under basic conditions, alkoxide is an extremely poor leaving group and the acetal carbon cannot be attacked by hydroxide ions.",
    0,
    "In basic or neutral conditions, there is no proton to activate the ether oxygens, so alkoxide cannot leave. In dilute mineral acid, protonation of oxygen generates a good leaving group $(\\text{ROH})$, allowing water to hydrolyze the acetal to aldehyde."
  ),
  ar(
    "Aldol addition products readily undergo dehydration upon heating to form $\\alpha,\\beta$-unsaturated carbonyl compounds.",
    "The newly formed carbon-carbon double bond in the dehydration product is conjugated with the carbonyl group, providing substantial thermodynamic resonance stabilization.",
    0,
    "Dehydration is facilitated because the $\\alpha$-hydrogen is acidic and the resulting $\\alpha,\\beta$-unsaturated system has extended conjugation between the $\\text{C}=\\text{C}$ and $\\text{C}=\\text{O}$ $\\pi$-systems."
  ),
  ar(
    "Reaction of acetone with hydroxylamine produces acetoxime, which exhibits geometrical isomerism.",
    "The nitrogen atom of an oxime is $sp^2$ hybridized with a lone pair of electrons occupying one of the hybrid orbitals.",
    3,
    "Assertion is false: Acetoxime has two identical methyl groups attached to the $sp^2$ carbon $((\\text{CH}_3)_2\\text{C}=\\text{N}-\\text{OH})$ and therefore cannot exhibit geometrical isomerism (syn/anti). Reason is true regarding the hybridization of oxime nitrogen."
  ),
  ar(
    "Ethanal on reaction with hydroxylamine yields acetaldoxime, which exists in two stereoisomeric forms (syn and anti).",
    "Restricted rotation about the $\\text{C}=\\text{N}$ double bond combined with two different groups on carbon and a lone pair on nitrogen gives rise to geometrical isomerism.",
    0,
    "In acetaldoxime $(\\text{CH}_3-\\text{CH}=\\text{N}-\\text{OH})$, the carbon bears $-\\text{H}$ and $-\\text{CH}_3$ and nitrogen bears $-\\text{OH}$ and a lone pair. Due to restricted rotation around $\\text{C}=\\text{N}$, syn and anti isomers exist."
  ),
  ar(
    "Perkin reaction of benzaldehyde with acetic anhydride in the presence of sodium acetate yields cinnamic acid.",
    "Sodium acetate acts as a base to generate an enolate from acetic anhydride, which attacks the carbonyl carbon of benzaldehyde.",
    0,
    "Acetate abstracts an $\\alpha$-H from acetic anhydride to form an enolate, which adds to benzaldehyde. Subsequent elimination of water and hydrolysis of the mixed anhydride produces cinnamic acid (3-phenylprop-2-enoic acid)."
  ),
  ar(
    "Carbonyl compounds undergo nucleophilic addition with sodium bisulfite ($\\text{NaHSO}_3$) to form crystalline bisulfite adducts.",
    "Bisulfite adducts can be converted back to the original carbonyl compounds by treatment with dilute mineral acid or aqueous sodium hydroxide.",
    1,
    "Both statements are true. Carbonyls form bisulfite adducts with $\\text{NaHSO}_3$, which are crystalline and can be hydrolyzed with acid or base to regenerate pure carbonyl. However, the reversibility of the adduct does not explain why the addition occurs mechanistically."
  ),
  ar(
    "Chloral ($\\text{CCl}_3\\text{CHO}$) undergoes the Cannizzaro reaction rather than aldol condensation when heated with concentrated sodium hydroxide.",
    "Chloral lacks $\\alpha$-hydrogen atoms because the $\\alpha$-carbon is fully substituted by three chlorine atoms.",
    0,
    "The three chlorines on the $\\alpha$-carbon leave zero $\\alpha$-hydrogens on chloral, preventing enolization and aldol condensation. Under concentrated base, it undergoes the Cannizzaro reaction or haloform-type cleavage."
  ),
  ar(
    "The equilibrium constant for the addition of $\\text{HCN}$ is higher for cyclohexanone than for di-tert-butyl ketone.",
    "Di-tert-butyl ketone has severe steric crowding from two bulky tert-butyl groups that blocks nucleophilic attack of cyanide ion on the carbonyl carbon.",
    0,
    "Steric crowding around the carbonyl carbon in di-tert-butyl ketone makes conversion from planar $sp^2$ ($120^\\circ$) to tetrahedral $sp^3$ ($109.5^\\circ$) energetically very unfavorable, drastically reducing cyanohydrin formation."
  ),
  ar(
    "Brady's reagent (2,4-dinitrophenylhydrazine) is used as a qualitative test to confirm the presence of an aldehyde or ketone carbonyl group.",
    "2,4-DNP condenses with the carbonyl group of aldehydes and ketones to form insoluble, brightly colored orange, yellow, or red crystalline precipitates.",
    0,
    "Aldehydes and ketones react rapidly with 2,4-DNP in acidic alcohol to precipitate 2,4-dinitrophenylhydrazones with characteristic colors and sharp melting points, serving as a standard identification test."
  ),
  ar(
    "Addition of Grignard reagent to a carbonyl group involves a cyclic six-membered transition state involving two molecules of Grignard reagent in ether.",
    "Ether solvent coordinates to the magnesium atom of the Grignard reagent, stabilizing the monomeric and dimeric organomagnesium species.",
    1,
    "Both statements are true. In ethereal solution, Grignard addition to carbonyls frequently proceeds through a six-membered cyclic transition state involving coordination of magnesium. Ether coordination solvates the reagent, but coordination alone does not directly dictate the cyclic geometry."
  ),
  ar(
    "Ketones react with 1,2-ethanediol (ethylene glycol) in the presence of dry $\\text{HCl}$ to form cyclic ketals (1,3-dioxolanes).",
    "Intramolecular attack of the second hydroxyl group of ethylene glycol on the intermediate hemiketal forms a thermodynamically stable five-membered ring.",
    0,
    "After the first $-\\text{OH}$ attacks the carbonyl, the second $-\\text{OH}$ is poised favorably within the same intermediate to undergo rapid intramolecular nucleophilic attack, forming a stable five-membered 1,3-dioxolane cyclic ketal."
  ),
  ar(
    "Acetaldehyde reacts with dilute $\\text{NaOH}$ to give an aldol addition product, which on dehydration gives crotonaldehyde.",
    "Crotonaldehyde has the IUPAC name but-2-enal.",
    1,
    "Both statements are true. Dehydration of 3-hydroxybutanal gives but-2-enal (crotonaldehyde). The IUPAC name is but-2-enal, but stating the IUPAC name is not the chemical explanation for the aldol condensation mechanism."
  ),
  ar(
    "Cross-Cannizzaro reaction of a $1:1$ mixture of benzaldehyde and formaldehyde with concentrated $\\text{KOH}$ gives a virtually $100\\%$ yield of benzyl alcohol.",
    "Formaldehyde transfers hydride irreversibly to benzaldehyde and is quantitatively oxidized to potassium formate.",
    0,
    "Because formaldehyde is much more electrophilic and steric-free, hydroxide attacks it almost exclusively. The resulting dianion rapidly transfers hydride to benzaldehyde, yielding benzyl alcohol and formate cleanly."
  ),

  // 9 MCQ Questions
  mcq(
    "Which of the following aldehydes will undergo the Cannizzaro reaction upon heating with concentrated aqueous $\\text{NaOH}$?",
    [
      "2,2-Dimethylpropanal",
      "2-Methylbutanal",
      "Propanal",
      "Ethanal"
    ],
    0,
    "2,2-Dimethylpropanal (pivalaldehyde, $(\\text{CH}_3)_3\\text{C}-\\text{CHO}$) lacks $\\alpha$-hydrogen atoms and undergoes the Cannizzaro reaction. The other aldehydes possess $\\alpha$-hydrogens and undergo aldol condensation."
  ),
  mcq(
    "What is the major product obtained when ethanal is warmed with dilute $\\text{NaOH}$ followed by heating?",
    [
      "But-2-enal (crotonaldehyde)",
      "But-1-enal",
      "3-Hydroxybutanoic acid",
      "2-Methylprop-2-enal"
    ],
    0,
    "Dilute $\\text{NaOH}$ converts ethanal into 3-hydroxybutanal (aldol), which upon subsequent heating eliminates water to form the conjugated $\\alpha,\\beta$-unsaturated aldehyde, but-2-enal."
  ),
  mcq(
    "In the cross-Cannizzaro reaction between benzaldehyde and formaldehyde in concentrated $\\text{NaOH}$, the oxidized and reduced products obtained are, respectively:",
    [
      "Sodium formate and benzyl alcohol",
      "Sodium benzoate and methanol",
      "Sodium formate and methanol",
      "Sodium benzoate and benzyl alcohol"
    ],
    0,
    "Formaldehyde has a more electrophilic carbonyl carbon and is attacked by $\\text{OH}^-$ first to become the hydride donor. It is oxidized to sodium formate, while benzaldehyde is reduced to benzyl alcohol."
  ),
  mcq(
    "Which of the following compounds will NOT form a semicarbazone derivative with semicarbazide?",
    [
      "Methanol",
      "Acetone",
      "Benzaldehyde",
      "Acetaldehyde"
    ],
    0,
    "Semicarbazide $(\\text{NH}_2\\text{CONHNH}_2)$ condenses specifically with carbonyl groups of aldehydes and ketones. Methanol is an alcohol and lacks a carbonyl group, so it does not form a semicarbazone."
  ),
  mcq(
    "In semicarbazide ($\\text{H}_2\\text{N}^a-\\text{CO}-\\text{NH}-\\text{NH}_2^b$), which nitrogen atom acts as the nucleophile in condensation with a carbonyl group?",
    [
      "Nitrogen $b$ of the hydrazine group",
      "Nitrogen $a$ of the amide group",
      "The internal $-\\text{NH}-$ nitrogen",
      "Both nitrogen $a$ and nitrogen $b$ equally"
    ],
    0,
    "Nitrogen $a$ has its lone pair conjugated with the carbonyl group through resonance ($-\\text{CONH}_2$), significantly reducing its nucleophilicity. Nitrogen $b$ is non-conjugated and acts as the active nucleophile."
  ),
  mcq(
    "What is the reagent used in the benzoin condensation to convert two molecules of benzaldehyde into benzoin?",
    [
      "Ethanolic $\\text{KCN}$",
      "Aqueous $\\text{NaOH}$",
      "Concentrated $\\text{H}_2\\text{SO}_4$",
      "Anhydrous $\\text{AlCl}_3$"
    ],
    0,
    "Benzoin condensation is catalyzed specifically by cyanide ions: $2\\text{C}_6\\text{H}_5\\text{CHO} \\xrightarrow{\\text{alc. KCN}} \\text{C}_6\\text{H}_5-\\text{CH(OH)}-\\text{CO}-\\text{C}_6\\text{H}_5$ (benzoin)."
  ),
  mcq(
    "What is the correct increasing order of reactivity towards nucleophilic addition for the following carbonyl compounds?\n(I) Formaldehyde\n(II) Acetaldehyde\n(III) Acetone\n(IV) Di-tert-butyl ketone",
    [
      "(IV) < (III) < (II) < (I)",
      "(I) < (II) < (III) < (IV)",
      "(IV) < (II) < (III) < (I)",
      "(III) < (IV) < (II) < (I)"
    ],
    0,
    "Reactivity decreases with increasing steric crowding and inductive electron donation: Formaldehyde (I, least hindered, most reactive) > Acetaldehyde (II) > Acetone (III) > Di-tert-butyl ketone (IV, extremely hindered, least reactive)."
  ),
  mcq(
    "The reaction of benzaldehyde with acetic anhydride in the presence of sodium acetate at $450\\text{ K}$ gives cinnamic acid. This reaction is known as the:",
    [
      "Perkin reaction",
      "Knoevenagel condensation",
      "Claisen condensation",
      "Reformatsky reaction"
    ],
    0,
    "Perkin reaction involves condensation of an aromatic aldehyde with an aliphatic acid anhydride containing at least two $\\alpha$-hydrogens in the presence of the corresponding carboxylate salt to yield an $\\alpha,\\beta$-unsaturated aromatic acid."
  ),
  mcq(
    "Cross-aldol condensation between benzaldehyde and acetone in the presence of dilute $\\text{NaOH}$ yields which major product?",
    [
      "4-Phenylbut-3-en-2-one (benzalacetone)",
      "Cinnamic acid",
      "Benzyl alcohol",
      "1,3-Diphenylpropan-2-one"
    ],
    0,
    "Acetone enolate attacks benzaldehyde to form 4-hydroxy-4-phenylbutan-2-one, which dehydrates immediately to the conjugated enone 4-phenylbut-3-en-2-one (benzalacetone)."
  ),

  // 13 NUM Questions
  num(
    "How many distinct aldol condensation products (including self and cross, excluding stereoisomers) can be formed from an equimolar mixture of ethanal and propanal?",
    4,
    "Four products are formed: (1) ethanal self-aldol (but-2-enal), (2) propanal self-aldol (2-methylpent-2-enal), (3) ethanal enolate + propanal (pent-2-enal), and (4) propanal enolate + ethanal (2-methylbut-2-enal). Total = 4."
  ),
  num(
    "How many $\\alpha$-hydrogen atoms are present in one molecule of benzaldehyde?",
    0,
    "In benzaldehyde $(\\text{C}_6\\text{H}_5\\text{CHO})$, the carbonyl carbon is attached to a benzene ring carbon that has no hydrogen atom. Hence, there are 0 $\\alpha$-hydrogens."
  ),
  num(
    "How many chiral carbon atoms are present in the cyanohydrin obtained from ethanal $(\\text{CH}_3\\text{CHO})$ and $\\text{HCN}$?",
    1,
    "Addition of $\\text{HCN}$ to ethanal gives acetaldehyde cyanohydrin, $\\text{CH}_3-\\text{C}^*\\text{H}(\\text{OH})-\\text{CN}$. The central carbon is bonded to four different groups ($-\\text{H}$, $-\\text{CH}_3$, $-\\text{OH}$, $-\\text{CN}$), giving exactly 1 chiral center."
  ),
  num(
    "What is the total number of carbon atoms in one molecule of the benzoin condensation product obtained from two molecules of benzaldehyde?",
    14,
    "Two benzaldehyde molecules $(\\text{C}_7\\text{H}_6\\text{O})$ condense to give benzoin $(\\text{C}_6\\text{H}_5-\\text{CH(OH)}-\\text{CO}-\\text{C}_6\\text{H}_5)$. Total carbon atoms = $7 + 7 = 14$."
  ),
  num(
    "How many moles of formaldehyde are consumed when 1 mole of pentaerythritol $(\\text{C}(\\text{CH}_2\\text{OH})_4)$ is synthesized from acetaldehyde and excess formaldehyde via repeated cross-aldol and Cannizzaro reactions?",
    4,
    "Acetaldehyde reacts with 3 moles of formaldehyde in cross-aldol to replace all 3 $\\alpha$-hydrogens with $-\\text{CH}_2\\text{OH}$ groups (tris(hydroxymethyl)ethanal), and a 4th mole of formaldehyde reduces the aldehyde group in a cross-Cannizzaro step. Total = 4 moles."
  ),
  num(
    "What is the double bond equivalent (degree of unsaturation) of cinnamic acid $(\\text{C}_6\\text{H}_5-\\text{CH}=\\text{CH}-\\text{COOH})$?",
    6,
    "For $\\text{C}_9\\text{H}_8\\text{O}_2$: $\\text{DBE} = C + 1 - \\frac{H}{2} = 9 + 1 - 4 = 6$ (1 benzene ring + 3 aromatic $\\pi$-bonds + 1 alkene $\\pi$-bond + 1 carbonyl $\\pi$-bond = 6)."
  ),
  num(
    "How many moles of $\\text{H}_2\\text{O}$ are eliminated when 1 mole of an aldol intermediate dehydrates to form an $\\alpha,\\beta$-unsaturated aldehyde?",
    1,
    "The dehydration of an aldol ($\\beta$-hydroxyaldehyde) follows the elimination stoichiometry: $\\text{R}-\\text{CH(OH)}-\\text{CH}_2-\\text{CHO} \\rightarrow \\text{R}-\\text{CH}=\\text{CH}-\\text{CHO} + \\text{H}_2\\text{O}$. Exactly 1 mole of water is eliminated."
  ),
  num(
    "How many nitrogen atoms are present in one molecule of 2,4-dinitrophenylhydrazine (Brady's reagent)?",
    4,
    "2,4-DNP has two nitro groups $(-\\text{NO}_2)$ containing $2 \\times 1 = 2$ nitrogens, and a hydrazine group $(-\\text{NH}-\\text{NH}_2)$ containing 2 nitrogens, giving a total of $2 + 2 = 4$ nitrogen atoms."
  ),
  num(
    "How many nitrogen atoms are present in one molecule of semicarbazide $(\\text{H}_2\\text{N}-\\text{CO}-\\text{NH}-\\text{NH}_2)$?",
    3,
    "Semicarbazide has the formula $\\text{CH}_5\\text{N}_3\\text{O}$ and contains exactly 3 nitrogen atoms."
  ),
  num(
    "How many moles of sodium formate are formed per mole of benzaldehyde in the cross-Cannizzaro reaction of benzaldehyde with excess formaldehyde in concentrated $\\text{NaOH}$?",
    1,
    "The reaction stoichiometry is: $\\text{C}_6\\text{H}_5\\text{CHO} + \\text{HCHO} + \\text{NaOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH} + \\text{HCOONa}$. Exactly 1 mole of sodium formate is produced per mole of benzaldehyde."
  ),
  num(
    "What is the number of $\\alpha$-hydrogen atoms present in a molecule of 2-phenylpropanal?",
    1,
    "In 2-phenylpropanal $(\\text{CH}_3-\\text{CH}(\\text{C}_6\\text{H}_5)-\\text{CHO})$, the $\\alpha$-carbon is bonded to $-\\text{CH}_3$, $-\\text{C}_6\\text{H}_5$, $-\\text{H}$, and $-\\text{CHO}$. It contains exactly 1 $\\alpha$-hydrogen atom."
  ),
  num(
    "What is the coordination number of the carbonyl carbon in the tetrahedral alkoxide intermediate formed during nucleophilic addition to an aldehyde?",
    4,
    "In the addition intermediate, the carbonyl carbon changes hybridization from $sp^2$ (coordination number 3) to $sp^3$ (coordination number 4, bonded to four distinct atoms/groups)."
  ),
  num(
    "How many rings are present in the cyclic ketal formed by condensing 1 molecule of acetone with 1 molecule of ethylene glycol?",
    1,
    "Condensation produces a 1,3-dioxolane derivative (2,2-dimethyl-1,3-dioxolane), which contains exactly 1 five-membered heterocyclic ring."
  )
];

console.log(`Part 8 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_oxygen_part8.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_oxygen_part8.js");
