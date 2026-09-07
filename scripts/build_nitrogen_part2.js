const fs = require("fs");
const path = require("path");
const katex = require("katex");

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
    subTopic: "Basicity of amines (gas phase vs aqueous phase)",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Assertion–Reasoning",
    marks: 4,
    negativeMarks: 1
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Basicity of amines (gas phase vs aqueous phase)",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "MCQ (Multiple Choice Question)",
    marks: 4,
    negativeMarks: 1
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Basicity of amines (gas phase vs aqueous phase)",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 ASSERTION-REASON ---
  ar(
    "In the gas phase, the basicity of aliphatic amines follows the order: $3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$.",
    "In the gas phase, the electron-releasing inductive effect ($+I$) of alkyl groups progressively stabilizes the conjugate ammonium cation in the absence of solvent effects.",
    0,
    "In the gas phase, solvent-solute interactions (hydration) and steric effects of hydration are absent. The basicity is determined solely by the $+I$ inductive effect of alkyl groups, which disperses the positive charge on the conjugate acid: $(\\text{CH}_3)_3\\overset{+}{\\text{N}}\\text{H} > (\\text{CH}_3)_2\\overset{+}{\\text{N}}\\text{H}_2 > \\text{CH}_3\\overset{+}{\\text{N}}\\text{H}_3 > \\overset{+}{\\text{N}}\\text{H}_4$."
  ),
  ar(
    "In aqueous medium, dimethylamine is a stronger base than trimethylamine.",
    "The conjugate acid of dimethylamine is more extensively stabilized by hydrogen bonding with water molecules than the conjugate acid of trimethylamine.",
    0,
    "In water, three competing factors operate: inductive effect, steric hindrance, and hydration. The conjugate cation $(\\text{CH}_3)_2\\overset{+}{\\text{N}}\\text{H}_2$ forms two strong hydrogen bonds with water, whereas $(\\text{CH}_3)_3\\overset{+}{\\text{N}}\\text{H}$ forms only one and suffers from greater steric crowding. Thus, hydration energy favors dimethylamine, making it more basic."
  ),
  ar(
    "In aqueous solution, the basicity order of methyl-substituted amines is $(2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3)$, whereas for ethyl-substituted amines it is $(2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3)$.",
    "The ethyl group has a larger $+I$ inductive effect than the methyl group, which overcomes the hydration disadvantage in triethylamine compared to diethylamine.",
    0,
    "For ethyl groups, the greater $+I$ electron release of three ethyl groups outweighs hydration differences between $3^\\circ$ and $1^\\circ$, giving the order: $(2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3)$ (order: 2310). For methyl groups, steric and hydration effects make the order: $(2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3)$ (order: 2130)."
  ),
  ar(
    "Aniline is a significantly weaker base than cyclohexylamine.",
    "In aniline, the unshared electron pair on the nitrogen atom is delocalized into the aromatic ring by resonance, reducing its availability for protonation.",
    0,
    "In aniline, the nitrogen lone pair participates in $+M$ conjugation with the benzene ring (represented by five resonance structures). In cyclohexylamine, there is no resonance delocalization, and the cyclohexyl group exerts an electron-releasing $+I$ effect, making cyclohexylamine far more basic ($pK_b \\approx 3.3$ vs $9.38$ for aniline)."
  ),
  ar(
    "Aniline is more stable than the anilinium ion with respect to resonance.",
    "Aniline has five resonating structures, whereas the anilinium ion has only two resonating structures.",
    0,
    "Aniline is stabilized by five resonating structures (three with positive charge on nitrogen delocalized to ortho/para carbons). Upon protonation to the anilinium ion ($\\text{C}_6\\text{H}_5\\overset{+}{\\text{NH}}_3$), the lone pair is engaged in bonding and cannot participate in resonance, leaving only two Kekule structures for the ring. Hence, protonation is energetically disfavored."
  ),
  ar(
    "Aromatic amines are generally weaker bases than ammonia.",
    "The nitrogen atom in aromatic amines is bonded to an $sp^2$ hybridized carbon of the aromatic ring, which is more electronegative than the $sp^3$ hybridized carbon in aliphatic amines.",
    1,
    "Both statements are true. Aromatic amines are weaker bases than ammonia ($pK_b$ of aniline is $9.38$ while ammonia is $4.75$). The $sp^2$ carbon attached to nitrogen is indeed more electronegative than $sp^3$ carbon. However, the primary explanation for the weak basicity of aromatic amines is the resonance delocalization of the nitrogen lone pair into the ring."
  ),
  ar(
    "$p$-Nitroaniline is a substantially weaker base than aniline.",
    "The nitro group at the para position exerts both strong electron-withdrawing inductive ($-I$) and resonance ($-M$) effects, severely depleting electron density on the amino group.",
    0,
    "The $-\\text{NO}_2$ group at the para position withdraws electron density strongly via both $-I$ and $-M$ effects. Extended conjugation allows the nitrogen lone pair of $-\\text{NH}_2$ to be delocalized directly onto the electronegative oxygens of the nitro group, raising the $pK_b$ to $\\sim 13.0$."
  ),
  ar(
    "$p$-Methoxyaniline ($p$-anisidine) is a stronger base than aniline.",
    "The methoxy group ($-\\text{OCH}_3$) at the para position acts as an electron-donating group through $+M$ resonance, increasing the electron density on the amino nitrogen.",
    0,
    "At the para position, the $+M$ electron donation of the $-\\text{OCH}_3$ lone pairs dominates over its $-I$ effect. This increases electron density on the $-\\text{NH}_2$ nitrogen and stabilizes the anilinium cation by charge dispersal, making $p$-anisidine a stronger base ($pK_b = 8.7$ vs $9.38$ for aniline)."
  ),
  ar(
    "$m$-Nitroaniline is a stronger base than $p$-nitroaniline.",
    "At the meta position, the nitro group cannot exert its electron-withdrawing resonance ($-M$) effect on the amino group, withdrawing electron density solely by its inductive ($-I$) effect.",
    0,
    "Resonance delocalization of the amino lone pair directly into the nitro group occurs only at ortho and para positions. At the meta position, only the $-I$ effect operates. Consequently, the electron density on nitrogen is higher in $m$-nitroaniline ($pK_b \\approx 11.5$) than in $p$-nitroaniline ($pK_b \\approx 13.0$)."
  ),
  ar(
    "$o$-Nitroaniline is a weaker base than both $m$-nitroaniline and $p$-nitroaniline.",
    "Due to the ortho-effect and intramolecular hydrogen bonding between the ortho nitro and amino groups, the availability of the nitrogen lone pair for protonation is severely reduced.",
    0,
    "In $o$-nitroaniline, the $-I$ effect is maximal due to spatial proximity. Additionally, intramolecular hydrogen bonding ($\-\\text{N}-\\text{H}\\cdots\\text{O}=\\text{N}-$) and steric inhibition of solvation (ortho-effect) make $o$-nitroaniline the weakest base among the three isomers ($pK_b = 14.3$)."
  ),
  ar(
    "$o$-Toluidine (2-methylaniline) is a weaker base than aniline despite the methyl group being electron-releasing.",
    "In $o$-substituted anilines, the ortho-substituent causes steric hindrance to protonation and hinders the hydration of the conjugate anilinium cation (ortho-effect).",
    0,
    "Even though the methyl group is electron-donating ($+I$ and hyperconjugation), $o$-toluidine ($pK_b = 9.56$) is less basic than aniline ($pK_b = 9.38$). This is due to the ortho-effect: steric crowding around the amino group hinders proton approach and prevents efficient solvation of the conjugate acid."
  ),
  ar(
    "N-Methylaniline is a stronger base than aniline.",
    "The methyl group attached directly to the nitrogen atom releases electron density through its inductive effect ($+I$), increasing electron density on nitrogen.",
    0,
    "In $\\text{C}_6\\text{H}_5\\text{NHCH}_3$, the methyl group exerts a $+I$ inductive effect directly on the nitrogen atom, enhancing the availability of the lone pair compared to unsubstituted aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$)."
  ),
  ar(
    "N,N-Dimethylaniline is a weaker base than aliphatic tertiary amines like trimethylamine.",
    "In N,N-dimethylaniline, the lone pair on nitrogen is delocalized into the aromatic $\\pi$-system, whereas in trimethylamine it resides in a localized $sp^3$ hybrid orbital.",
    0,
    "Resonance delocalization of the nitrogen lone pair into the phenyl ring decreases its availability in N,N-dimethylaniline ($pK_b = 8.94$). In trimethylamine, the lone pair is completely localized and enriched by three $+I$ methyl groups ($pK_b = 4.22$), making trimethylamine far more basic."
  ),
  ar(
    "Guanidine is an exceptionally strong organic base with basicity comparable to inorganic hydroxides.",
    "The conjugate acid formed upon protonation of guanidine is stabilized by three equivalent, highly symmetrical resonance structures with distributed positive charge.",
    0,
    "Guanidine ($(\\text{NH}_2)_2\\text{C}=\\text{NH}$) protonates at the imine nitrogen. The resulting guanidinium cation $[\\text{C}(\\text{NH}_2)_3]^+$ is planar, symmetric, and stabilized by three identical resonance structures sharing the $+1$ formal charge equally over three nitrogen atoms ($pK_b \\approx 0.4$)."
  ),
  ar(
    "Amidines are significantly stronger bases than ordinary amides.",
    "In amidines, protonation occurs at the $sp^2$ nitrogen to yield a resonance-stabilized cation with two equivalent contributing structures, whereas amides are weakly basic due to carbonyl resonance.",
    0,
    "An amidine ($\\text{R}-\\text{C}(=\\text{NH})\\text{NH}_2$) protonates at the imino ($=NH$) nitrogen. The resulting cation is resonance-stabilized with the positive charge shared equally between two nitrogen atoms. In amides, the nitrogen lone pair is delocalized into the carbonyl group, making amides nearly neutral."
  ),
  ar(
    "Pyridine is a weaker base than piperidine.",
    "In pyridine, the nitrogen lone pair occupies an $sp^2$ hybrid orbital, whereas in piperidine the nitrogen lone pair occupies an $sp^3$ hybrid orbital.",
    0,
    "An $sp^2$ hybrid orbital has $33\\%$ $s$-character, making it more electronegative and holding the lone pair more tightly than an $sp^3$ orbital ($25\\%$ $s$-character). Piperidine is a non-aromatic cyclic $2^\\circ$ aliphatic amine ($pK_b = 2.87$) and is far more basic than aromatic pyridine ($pK_b = 8.75$)."
  ),
  ar(
    "Pyrrole is an extremely weak base and behaves essentially as a neutral or very weakly acidic compound.",
    "The lone pair of electrons on the nitrogen atom in pyrrole is part of the aromatic $6\\pi$-electron sextet.",
    0,
    "Pyrrole is an aromatic heterocycle where nitrogen contributes its lone pair to satisfy Huckel's $(4n+2)$ rule ($6\\pi$ electrons). Protonation on nitrogen disrupts the aromatic sextet and destroys aromaticity, so pyrrole is exceptionally non-basic ($pK_b \\approx 13.6$)."
  ),
  ar(
    "Protonation of pyrrole occurs preferentially at the C-2 (alpha) position rather than on the nitrogen atom.",
    "Protonation at the C-2 carbon produces a carbocation stabilized by three resonance contributors, without localizing the positive charge solely on nitrogen.",
    0,
    "Protonation of pyrrole at the C-2 position generates a resonance-stabilized pyrrolinium cation with three resonance structures. Protonation on nitrogen gives a non-aromatic cation without resonance stabilization where nitrogen cannot delocalize the positive charge."
  ),
  ar(
    "The $pK_b$ value of a base is inversely related to its basic strength.",
    "A stronger base has a higher basicity constant ($K_b$), and $pK_b$ is defined as the negative logarithm of $K_b$ ($pK_b = -\\log_{10} K_b$).",
    0,
    "By definition, $pK_b = -\\log_{10} K_b$. Therefore, higher $K_b$ indicates greater extent of ionization in water (stronger base), which translates mathematically into a smaller $pK_b$ value."
  ),
  ar(
    "Aliphatic amines are stronger bases than ammonia in aqueous solution.",
    "Alkyl groups release electrons through inductive effect ($+I$), increasing electron density on nitrogen and dispersing the positive charge in the substituted ammonium cation.",
    0,
    "In water, all methyl and ethyl substituted primary, secondary, and tertiary amines have $pK_b$ values between $3.0$ and $4.2$, whereas ammonia has $pK_b = 4.75$. Alkyl groups supply electron density by $+I$ effect and stabilize the protonated cation."
  ),
  ar(
    "Triphenylamine is virtually non-basic and does not dissolve in dilute mineral acids.",
    "In triphenylamine, the nitrogen lone pair is delocalized over three independent benzene rings through resonance.",
    0,
    "The unshared electron pair of nitrogen is delocalized over 18 carbon atoms of three phenyl rings. Consequently, the electron density on nitrogen is practically negligible, preventing protonation even in concentrated mineral acids."
  ),
  ar(
    "Benzylamine is a stronger base than aniline.",
    "In benzylamine, the amino group is separated from the aromatic ring by an $sp^3$ hybridized methylene group ($-\\text{CH}_2-$), preventing resonance delocalization of the nitrogen lone pair into the ring.",
    0,
    "In benzylamine ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$), there is no direct conjugation between the $-\\text{NH}_2$ group and the phenyl ring. Thus, its nitrogen lone pair is fully localized and available for protonation ($pK_b = 4.63$), making it much more basic than aniline ($pK_b = 9.38$)."
  ),
  ar(
    "Diphenylamine is a weaker base than aniline.",
    "In diphenylamine, the lone pair on nitrogen is delocalized over two benzene rings, resulting in greater resonance stabilization and lower electron availability on nitrogen.",
    0,
    "The presence of two phenyl rings attached to the $-\\text{NH}-$ group causes extensive delocalization of the nitrogen lone pair into both rings, reducing its basicity ($pK_b \\approx 13.2$) far below that of aniline ($pK_b = 9.38$)."
  ),
  ar(
    "In liquid ammonia or non-polar solvents like chlorobenzene, the basicity order of methylamines is $3^\\circ > 2^\\circ > 1^\\circ$.",
    "In non-polar solvents with negligible dielectric constant, solvation by hydrogen bonding is minimal, and inductive effects dominate basicity.",
    0,
    "In non-aqueous, non-polar solvents, hydrogen-bonding hydration is absent. Just as in the gas phase, the $+I$ inductive effect of alkyl groups dictates basicity, restoring the regular order $(\\text{CH}_3)_3\\text{N} > (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2$."
  ),
  ar(
    "The basicity of substituted anilines follows the order: $p$-toluidine $>$ aniline $>$ $p$-chloroaniline.",
    "The methyl group is electron-donating via hyperconjugation and $+I$ effect, while the chlorine atom is net electron-withdrawing because its $-I$ inductive effect outweighs its $+M$ resonance effect.",
    0,
    "The methyl group increases electron density on nitrogen, lowering $pK_b$ ($p$-toluidine $pK_b = 8.92$). Chlorine acts as a net electron-withdrawing group due to strong $-I$ effect, decreasing electron density on nitrogen and raising $pK_b$ ($p$-chloroaniline $pK_b = 10.0$)."
  ),
  ar(
    "Quaternary ammonium hydroxides (e.g., $[(\\text{CH}_3)_4\\text{N}]^+\\text{OH}^-$) are strong bases comparable in strength to $\\text{NaOH}$.",
    "Quaternary ammonium hydroxides are completely dissociated into ions in aqueous solution and contain free hydroxide ions.",
    0,
    "Because quaternary ammonium hydroxides contain a fully ionized ionic bond between the stable tetraalkylammonium cation and hydroxide anion, they completely dissociate in water, exhibiting basicity comparable to alkali metal hydroxides."
  ),

  // --- 8 MCQs ---
  mcq(
    "What is the correct order of basicity of methyl-substituted amines and ammonia in aqueous solution?",
    [
      "$(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$",
      "$(\\text{CH}_3)_3\\text{N} > (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$",
      "$(\\text{CH}_3)_2\\text{NH} > (\\text{CH}_3)_3\\text{N} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$",
      "$\\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_2\\text{NH} > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$"
    ],
    0,
    "In aqueous medium, the basicity of methyl-substituted amines is governed by the combined influence of inductive effect, hydration enthalpy, and steric hindrance, giving the order $2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3$: $(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$."
  ),
  mcq(
    "What is the correct order of basicity of ethyl-substituted amines and ammonia in aqueous solution?",
    [
      "$(\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3$",
      "$(\\text{C}_2\\text{H}_5)_3\\text{N} > (\\text{C}_2\\text{H}_5)_2\\text{NH} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3$",
      "$(\\text{C}_2\\text{H}_5)_2\\text{NH} > \\text{C}_2\\text{H}_5\\text{NH}_2 > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{NH}_3$",
      "$\\text{C}_2\\text{H}_5\\text{NH}_2 > (\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{NH}_3$"
    ],
    0,
    "For ethyl-substituted amines in water, the order of basicity is $2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3$: $(\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3$."
  ),
  mcq(
    "Which of the following compounds has the lowest $pK_b$ value (i.e., is the strongest base) in aqueous solution?",
    [
      "$(\\text{CH}_3)_2\\text{NH}$",
      "$\\text{C}_6\\text{H}_5\\text{NH}_2$",
      "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$",
      "$\\text{NH}_3$"
    ],
    0,
    "Lowest $pK_b$ corresponds to the strongest base. Dimethylamine has $pK_b = 3.27$, benzylamine has $pK_b = 4.63$, ammonia has $pK_b = 4.75$, and aniline has $pK_b = 9.38$. Therefore, dimethylamine is the strongest base with the lowest $pK_b$."
  ),
  mcq(
    "Among the following substituted anilines, which one is the WEAKEST base?",
    [
      "$o\\text{-Nitroaniline}$",
      "$m\\text{-Nitroaniline}$",
      "$p\\text{-Nitroaniline}$",
      "$\\text{Aniline}$"
    ],
    0,
    "Due to the ortho-effect, steric hindrance to solvation, strong $-I$ inductive withdrawal over a short distance, and intramolecular hydrogen bonding, $o$-nitroaniline ($pK_b = 14.3$) is the weakest base among all nitroaniline isomers."
  ),
  mcq(
    "Arrange the following in DECREASING order of basic strength in aqueous solution:\n(I) $\\text{C}_6\\text{H}_5\\text{NH}_2$\n(II) $\\text{C}_6\\text{H}_5\\text{NHCH}_3$\n(III) $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$\n(IV) $(\\text{C}_2\\text{H}_5)_2\\text{NH}$",
    [
      "$\\text{IV} > \\text{III} > \\text{II} > \\text{I}$",
      "$\\text{IV} > \\text{II} > \\text{III} > \\text{I}$",
      "$\\text{III} > \\text{IV} > \\text{II} > \\text{I}$",
      "$\\text{IV} > \\text{I} > \\text{II} > \\text{III}$"
    ],
    0,
    "Diethylamine (IV) is a secondary aliphatic amine ($pK_b = 3.00$, strongest). Benzylamine (III) is a primary aliphatic amine ($pK_b = 4.63$). N-Methylaniline (II) is an aromatic amine with a $+I$ methyl group ($pK_b = 9.20$). Aniline (I) is unsubstituted ($pK_b = 9.38$). Hence, the decreasing order is $\\text{IV} > \\text{III} > \\text{II} > \\text{I}$."
  ),
  mcq(
    "Why is guanidine ($(\\text{H}_2\\text{N})_2\\text{C}=\\text{NH}$) a stronger base than common aliphatic amines?",
    [
      "Protonation gives a symmetrical cation with three equivalent resonance structures sharing the positive charge.",
      "The nitrogen atoms are $sp$ hybridized.",
      "It lacks any lone pair of electrons.",
      "It decomposes into ammonia and urea upon protonation."
    ],
    0,
    "Protonation of guanidine occurs at the imine nitrogen to give the guanidinium cation $[\\text{C}(\\text{NH}_2)_3]^+$. This cation is exceptionally stable due to complete symmetry and three equivalent resonance structures where the positive charge is delocalized equally over three nitrogen atoms."
  ),
  mcq(
    "In the gas phase, which of the following is the STRONGEST base?",
    [
      "$(\\text{CH}_3)_3\\text{N}$",
      "$(\\text{CH}_3)_2\\text{NH}$",
      "$\\text{CH}_3\\text{NH}_2$",
      "$\\text{NH}_3$"
    ],
    0,
    "In the gas phase, basicity is determined purely by the $+I$ inductive effect of alkyl groups. Since trimethylamine possesses three electron-donating methyl groups, it is the strongest base in the gas phase: $(\\text{CH}_3)_3\\text{N} > (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$."
  ),
  mcq(
    "Which of the following compounds does NOT show basic properties in aqueous medium?",
    [
      "$\\text{CH}_3\\text{CONH}_2$ (Acetamide)",
      "$\\text{CH}_3\\text{CH}_2\\text{NH}_2$ (Ethanamine)",
      "$(\\text{CH}_3)_2\\text{NH}$ (Dimethylamine)",
      "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$ (Benzylamine)"
    ],
    0,
    "In acetamide ($\\text{CH}_3\\text{CONH}_2$), the lone pair on nitrogen is delocalized into the carbonyl $\\pi$-system through resonance ($\\text{H}_2\\overset{+}{\\text{N}}=\\text{C}(\\text{CH}_3)-\\text{O}^-$), severely depleting its availability for protonation. Acetamide is essentially neutral in aqueous solution ($pK_b \\approx 14.5$)."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "If the $pK_b$ of dimethylamine in water is $3.27$, calculate the $pK_a$ of its conjugate acid at $25^\\circ\\text{C}$ rounded to the nearest integer.",
    11,
    "For any conjugate acid-base pair in water at $25^\\circ\\text{C}$, $pK_a + pK_b = 14.00$. Therefore, $pK_a = 14.00 - 3.27 = 10.73$, which rounds to the nearest integer 11."
  ),
  num(
    "How many canonical resonance structures can be drawn for the unprotonated aniline molecule (including Kekule structures)?",
    5,
    "Aniline has 5 canonical resonance structures:\n- 2 Kekule structures with alternating double bonds in the ring and neutral $-\\text{NH}_2$.\n- 3 structures with a $\\text{C}=\\overset{+}{\\text{NH}}_2$ double bond and negative charges placed at ortho, para, and ortho' positions of the ring.\nTotal canonical resonance structures = 5."
  ),
  num(
    "How many canonical resonance structures can be drawn for the protonated anilinium ion ($\\text{C}_6\\text{H}_5\\overset{+}{\\text{NH}}_3$)?",
    2,
    "In the anilinium cation, the nitrogen lone pair has formed a covalent bond with $\\text{H}^+$. With an octet and no available lone pair, nitrogen cannot participate in $+M$ resonance with the ring. Thus, only the 2 Kekule structures of the benzene ring exist."
  ),
  num(
    "In a $0.1\\text{ M}$ aqueous solution of an aliphatic amine $\\text{RNH}_2$ with $K_b = 1.0 \\times 10^{-5}$, calculate the $\\text{pH}$ of the solution at $25^\\circ\\text{C}$.",
    11,
    "$[\\text{OH}^-] = \\sqrt{K_b \\cdot C} = \\sqrt{1.0 \\times 10^{-5} \\times 0.1} = \\sqrt{1.0 \\times 10^{-6}} = 1.0 \\times 10^{-3}\\text{ M}$.\n$\\text{pOH} = -\\log_{10}[\\text{OH}^-] = 3$.\n$\\text{pH} = 14 - \\text{pOH} = 14 - 3 = 11$."
  ),
  num(
    "Calculate the percentage of ionization of a $0.04\\text{ M}$ solution of an amine with $K_b = 1.6 \\times 10^{-5}$.",
    2,
    "Degree of dissociation $\\alpha = \\sqrt{\\frac{K_b}{C}} = \\sqrt{\\frac{1.6 \\times 10^{-5}}{0.04}} = \\sqrt{4 \\times 10^{-4}} = 0.02$.\nPercentage ionization $= \\alpha \\times 100 = 0.02 \\times 100 = 2\\%$."
  ),
  num(
    "Consider four amines: ammonia ($pK_b = 4.75$), methylamine ($pK_b = 3.38$), dimethylamine ($pK_b = 3.27$), and aniline ($pK_b = 9.38$). By what power of $10$ (approximate order of magnitude, nearest integer) is the $K_b$ of dimethylamine greater than the $K_b$ of aniline?",
    6,
    "Difference in $pK_b$: $\\Delta pK_b = pK_b(\\text{aniline}) - pK_b(\\text{dimethylamine}) = 9.38 - 3.27 = 6.11$.\nSince $\\frac{K_b(\\text{dimethylamine})}{K_b(\\text{aniline})} = 10^{\\Delta pK_b} = 10^{6.11} \\approx 1.29 \\times 10^6$.\nThe power of 10 rounded to the nearest integer is 6."
  ),
  num(
    "How many equivalent resonance structures contribute to the ground-state stability of the symmetrical guanidinium cation $[\\text{C}(\\text{NH}_2)_3]^+$?",
    3,
    "The guanidinium cation $[\\text{C}(\\text{NH}_2)_3]^+$ possesses three identical $-\\text{NH}_2$ groups attached to a central planar carbon. The double bond and positive charge are shared equally among the three nitrogen atoms across 3 equivalent resonance structures."
  ),
  num(
    "In an aqueous solution of ethylamine ($\\text{C}_2\\text{H}_5\\text{NH}_2$), how many hydrogen atoms on the conjugate ethylammonium cation ($\\text{C}_2\\text{H}_5\\overset{+}{\\text{NH}}_3$) can participate directly in hydrogen bonding with solvent water molecules?",
    3,
    "The ethylammonium cation ($\\text{C}_2\\text{H}_5\\overset{+}{\\text{NH}}_3$) has three hydrogen atoms covalently bonded to the positively charged nitrogen atom ($\\text{N}-\\text{H}$). All 3 hydrogen atoms participate as hydrogen bond donors to water molecules."
  ),
  num(
    "How many hydrogen atoms are available on the nitrogen atom of the conjugate acid of triethylamine ($(\\text{C}_2\\text{H}_5)_3\\overset{+}{\\text{NH}}$) to form hydrogen bonds with water molecules?",
    1,
    "The conjugate acid of triethylamine is $(\\text{C}_2\\text{H}_5)_3\\overset{+}{\\text{NH}}$. It possesses only 1 hydrogen atom on nitrogen available for hydrogen bonding with solvent water molecules."
  ),
  num(
    "For the following five amines in aqueous solution, how many are STRONGER bases than ammonia:\n(1) $\\text{CH}_3\\text{NH}_2$, (2) $(\\text{CH}_3)_2\\text{NH}$, (3) $\\text{C}_6\\text{H}_5\\text{NH}_2$, (4) $\\text{C}_2\\text{H}_5\\text{NH}_2$, (5) $\\text{C}_6\\text{H}_5\\text{NHCH}_3$?",
    3,
    "Ammonia has $pK_b = 4.75$.\n- $\\text{CH}_3\\text{NH}_2$: $pK_b = 3.38$ (stronger)\n- $(\\text{CH}_3)_2\\text{NH}$: $pK_b = 3.27$ (stronger)\n- $\\text{C}_6\\text{H}_5\\text{NH}_2$: $pK_b = 9.38$ (weaker)\n- $\\text{C}_2\\text{H}_5\\text{NH}_2$: $pK_b = 3.29$ (stronger)\n- $\\text{C}_6\\text{H}_5\\text{NHCH}_3$: $pK_b = 9.20$ (weaker)\nExactly 3 amines (1, 2, and 4) are stronger bases than ammonia."
  ),
  num(
    "What is the total number of non-bonding electron pairs (lone pairs) in a neutral molecule of pyridine ($\\text{C}_5\\text{H}_5\\text{N}$)?",
    1,
    "Pyridine has a planar ring containing 5 carbon atoms and 1 nitrogen atom. The nitrogen atom is $sp^2$ hybridized; two hybrid orbitals form $\\sigma$ bonds with adjacent carbon atoms, the unhybridized $p$ orbital participates in the aromatic $6\\pi$ ring, and the remaining $sp^2$ orbital contains 1 lone pair."
  ),
  num(
    "In a buffer solution containing equal molar concentrations ($0.1\\text{ M}$ each) of methylamine ($\\text{CH}_3\\text{NH}_2$) and methylammonium chloride ($\\text{CH}_3\\overset{+}{\\text{NH}}_3\\text{Cl}^-$) with $pK_b = 3.40$, calculate the $\\text{pH}$ of the buffer at $25^\\circ\\text{C}$ to one decimal place (rounded to nearest integer).",
    11,
    "Using the Henderson-Hasselbalch equation for a basic buffer:\n$\\text{pOH} = pK_b + \\log\\frac{[\\text{salt}]}{[\\text{base}]} = 3.40 + \\log(1) = 3.40$.\n$\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 3.40 = 10.60$.\nRounding to the nearest integer gives 11."
  ),
  num(
    "What is the difference in the number of carbon atoms between triethylamine and trimethylamine?",
    3,
    "Triethylamine is $(\\text{C}_2\\text{H}_5)_3\\text{N}$ with $3 \\times 2 = 6$ carbon atoms. Trimethylamine is $(\\text{CH}_3)_3\\text{N}$ with $3 \\times 1 = 3$ carbon atoms. Difference $= 6 - 3 = 3$."
  )
];

// Validate KaTeX
function validateKatex(str) {
  if (!str) return [];
  const errors = [];
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    const math = match[1] || match[2];
    try {
      katex.renderToString(math, { throwOnError: true });
    } catch (err) {
      errors.push({ math, err: err.message });
    }
  }
  return errors;
}

let totalKatexErrors = 0;
questions.forEach((q, idx) => {
  const qErr = validateKatex(q.question);
  const expErr = validateKatex(q.explanation);
  let optErr = [];
  q.options.forEach(opt => optErr.push(...validateKatex(opt)));
  const allErr = [...qErr, ...expErr, ...optErr];
  if (allErr.length > 0) {
    totalKatexErrors += allErr.length;
    console.error(`Error in Q[${idx}]:`, allErr);
  }
});

console.log(`Part 2 total questions: ${questions.length}`);
console.log(`Part 2 KaTeX errors: ${totalKatexErrors}`);

if (totalKatexErrors === 0 && questions.length === 47) {
  const outPath = path.join(__dirname, "data_nitrogen_part2.js");
  fs.writeFileSync(outPath, "module.exports = " + JSON.stringify(questions, null, 2) + ";\n");
  console.log("Successfully wrote", outPath);
} else {
  console.error("Validation failed! Check errors.");
  process.exit(1);
}
