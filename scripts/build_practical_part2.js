const fs = require("fs");
const path = require("path");
const katex = require("katex");

function validateKaTeX(text) {
  if (!text) return { valid: true };
  const inlineRegex = /\$([^$]+)\$/g;
  let match;
  while ((match = inlineRegex.exec(text)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      return { valid: false, error: e.message, math: match[1] };
    }
  }
  return { valid: true };
}

const subtopic = "Preparation of compounds";
const chapter = "Principles Related to Practical Chemistry";

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
    subTopic: subtopic,
    chapter,
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
    subTopic: subtopic,
    chapter,
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
    subTopic: subtopic,
    chapter,
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // ----------------------------------------------------
  // 26 ASSERTION-REASON QUESTIONS
  // ----------------------------------------------------
  ar(
    "In the preparation of Mohr's salt, a small amount of dilute $\\text{H}_2\\text{SO}_4$ is added before heating the mixture of ferrous sulphate and ammonium sulphate.",
    "Dilute $\\text{H}_2\\text{SO}_4$ prevents the hydrolysis of ferrous ions $(\\text{Fe}^{2+})$ into insoluble basic salts and prevents its oxidation.",
    0,
    "In the preparation of ferrous ammonium sulphate (Mohr's salt, $\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4\\cdot 6\\text{H}_2\\text{O}$), dilute sulphuric acid is added to prevent the hydrolysis of $\\text{Fe}^{2+}$ ions into $\\text{Fe(OH)}_2$ or basic ferric salts. Therefore, both (A) and (R) are true, and (R) correctly explains (A)."
  ),
  ar(
    "Mohr's salt is preferred over ferrous sulphate as a primary standard in volumetric analysis.",
    "Mohr's salt is resistant to atmospheric oxidation because it is a double salt and does not easily lose its water of crystallization.",
    0,
    "Mohr's salt is significantly more stable against aerial oxidation than pure $\\text{FeSO}_4\\cdot 7\\text{H}_2\\text{O}$ (which effloresces and oxidizes rapidly to basic ferric sulphate). Hence, it serves as a reliable primary standard."
  ),
  ar(
    "Potash alum gives tests for $\\text{K}^+$, $\\text{Al}^{3+}$, and $\\text{SO}_4^{2-}$ ions in aqueous solution.",
    "Potash alum is a double salt which completely dissociates into its constituent simple ions when dissolved in water.",
    0,
    "Double salts such as potash alum $(\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3\\cdot 24\\text{H}_2\\text{O})$ retain their identity only in the solid state. In aqueous solution, they dissociate completely into $\\text{K}^+$, $\\text{Al}^{3+}$, and $\\text{SO}_4^{2-}$ ions, giving characteristic chemical tests for each."
  ),
  ar(
    "In the preparation of potash alum, equimolar quantities of potassium sulphate and aluminium sulphate are mixed in water.",
    "Potash alum has the stoichiometric formula $\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3\\cdot 24\\text{H}_2\\text{O}$, containing $\\text{K}_2\\text{SO}_4$ and $\\text{Al}_2(\\text{SO}_4)_3$ in a $1:1$ molar ratio.",
    0,
    "Potash alum crystallizes with a $1:1$ molar ratio of $\\text{K}_2\\text{SO}_4$ and $\\text{Al}_2(\\text{SO}_4)_3$. To avoid excess of either reactant remaining unreacted, equimolar amounts are dissolved together."
  ),
  ar(
    "During the preparation of ferric hydroxide sol, boiling distilled water is added dropwise to a concentrated solution of ferric chloride.",
    "Ferric hydroxide sol is prepared by hydrolysis of ferric chloride at elevated temperature.",
    3,
    "Assertion (A) is false because concentrated $\\text{FeCl}_3$ solution is added dropwise to boiling distilled water (not the other way around). Reason (R) is true because $\\text{FeCl}_3 + 3\\text{H}_2\\text{O} \\to \\text{Fe(OH)}_3(\\text{sol}) + 3\\text{HCl}$ is indeed a hydrolysis reaction at boiling temperature."
  ),
  ar(
    "Ferric hydroxide sol particles carry a net positive electrical charge.",
    "Ferric hydroxide colloidal particles preferentially adsorb $\\text{Fe}^{3+}$ ions from the solution onto their surface.",
    0,
    "Colloidal particles of $\\text{Fe(OH)}_3$ preferentially adsorb common $\\text{Fe}^{3+}$ ions present in the surrounding medium, forming a fixed layer of positive charge which imparts stability to the lyophobic sol."
  ),
  ar(
    "Arsenious sulphide sol particles migrate towards the anode during electrophoresis.",
    "Arsenious sulphide sol particles carry a negative charge due to the preferential adsorption of sulphide $(\\text{S}^{2-})$ ions.",
    0,
    "Arsenious sulphide $(\\text{As}_2\\text{S}_3)$ is a lyophobic sol prepared by passing $\\text{H}_2\\text{S}$ through aqueous $\\text{As}_2\\text{O}_3$. It adsorbs common $\\text{S}^{2-}$ ions, acquiring a negative charge, and thus migrates towards the positive electrode (anode) during electrophoresis."
  ),
  ar(
    "Starch sol is reversible in nature and relatively stable towards the addition of electrolytes.",
    "Starch sol is a lyophilic colloid where particles are strongly solvated by the dispersion medium.",
    0,
    "Starch forms a lyophilic (solvent-loving) sol. The extensive hydration/solvation shell surrounding starch particles provides high thermodynamic stability and makes coagulation by electrolytes difficult."
  ),
  ar(
    "In the preparation of acetanilide from aniline, a small amount of zinc dust is added to the reaction mixture.",
    "Zinc dust reduces colored oxidation impurities in commercial aniline and prevents aerial oxidation during heating.",
    0,
    "Aniline readily undergoes aerial oxidation to form dark, colored oxidation products. Zinc dust acts as a reducing agent to decolorize oxidized aniline and prevents further oxidation during acetylation."
  ),
  ar(
    "Direct nitration of aniline with a nitrating mixture gives a large amount of $m$-nitroaniline along with ortho and para isomers.",
    "In strongly acidic nitrating medium, aniline is protonated to form the anilinium ion, which is strongly meta-directing.",
    0,
    "Due to protonation of the $-\\text{NH}_2$ group to $-\\text{NH}_3^+$ by concentrated $\\text{H}_2\\text{SO}_4$, the electron-withdrawing anilinium ion is formed, directing nitration to the meta-position (giving $\\sim 47\\%$ meta product)."
  ),
  ar(
    "To prepare $p$-nitroaniline from aniline, the amino group is first protected by acetylation to form acetanilide.",
    "The acetyl group decreases the electron density on the benzene ring by resonance and prevents oxidation by concentrated $\\text{HNO}_3$.",
    0,
    "In acetanilide, the lone pair on nitrogen is delocalized into the carbonyl group: $-\\ddot{\\text{N}}\\text{H}-\\text{C}(=\\text{O})\\text{CH}_3$. This moderate activation prevents poly-nitration, avoids oxidation of the $-\\text{NH}_2$ group by $\\text{HNO}_3$, and directs incoming $-\\text{NO}_2$ cleanly to the para position."
  ),
  ar(
    "In the nitration of acetanilide, the temperature is strictly maintained below $15^\\circ\\text{C}$.",
    "High temperatures favor dinitration and hydrolysis of the acetamido group back to aniline.",
    0,
    "Maintaining temperature below $10-15^\\circ\\text{C}$ is critical to avoid dinitration ($2,4$-dinitroacetanilide) and thermal hydrolysis of the amide linkage."
  ),
  ar(
    "During the preparation of aniline yellow ($p$-aminoazobenzene), the diazotization step must be carried out at $0-5^\\circ\\text{C}$.",
    "Benzenediazonium chloride is unstable at temperatures above $5^\\circ\\text{C}$ and decomposes into phenol and nitrogen gas.",
    0,
    "Arenediazonium salts undergo rapid hydrolysis above $5^\\circ\\text{C}$: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_5\\text{OH} + \\text{N}_2 + \\text{HCl}$. Thus, ice-cold conditions are mandatory."
  ),
  ar(
    "Aniline yellow is prepared by coupling benzenediazonium chloride with aniline in a strongly alkaline medium $(\\text{pH} > 12)$.",
    "Strong alkali converts benzenediazonium cation into unreactive diazotate anion $(\\text{Ar-N}=\\text{N}-\\text{O}^-)$.",
    3,
    "Assertion (A) is false: coupling with amines is carried out in weakly acidic/mildly acidic medium $(\\text{pH} \\approx 4-5)$ or neutral conditions, not strongly alkaline. Reason (R) is true: at high $\\text{pH}$, diazonium cation converts to non-electrophilic diazotate ion."
  ),
  ar(
    "The preparation of iodoform from acetone requires iodine and sodium hydroxide.",
    "The haloform reaction involves base-catalyzed halogenation of the $\\alpha$-methyl carbon followed by nucleophilic cleavage by hydroxide ion.",
    0,
    "Acetone contains a methyl ketone group $(\\text{CH}_3\\text{C}=\\text{O})$. Reaction with $\\text{I}_2/\\text{NaOH}$ leads to tri-iodination to give $\\text{CI}_3\\text{COCH}_3$, which is cleaved by $\\text{OH}^-$ into $\\text{CHI}_3$ (iodoform) and sodium acetate."
  ),
  ar(
    "Ethyl alcohol gives a positive iodoform test, but methyl alcohol does not.",
    "Ethyl alcohol is oxidized by $\\text{I}_2/\\text{NaOH}$ to acetaldehyde, which possesses the $\\text{CH}_3\\text{CHO}$ group required for the haloform reaction.",
    0,
    "Ethanol contains the $\\text{CH}_3\\text{CH(OH)}-$ group, which is oxidized to acetaldehyde $(\\text{CH}_3\\text{CHO})$. Methanol lacks this grouping and cannot produce a methyl carbonyl intermediate."
  ),
  ar(
    "In the preparation of dibenzalacetone, benzaldehyde and acetone are reacted in a $1:1$ molar ratio.",
    "Dibenzalacetone contains two benzylidene groups attached to the carbonyl carbon of acetone.",
    3,
    "Assertion (A) is false: the stoichiometric molar ratio is $2:1$ (benzaldehyde : acetone), yielding $\\text{C}_6\\text{H}_5\\text{CH}=\\text{CH}-\\text{CO}-\\text{CH}=\\text{CH}-\\text{C}_6\\text{H}_5$. Reason (R) is true: dibenzalacetone has two benzylidene groups flanking the central carbonyl group."
  ),
  ar(
    "The preparation of dibenzalacetone from benzaldehyde and acetone is an example of a Claisen-Schmidt condensation.",
    "Claisen-Schmidt condensation involves the reaction between an aromatic aldehyde (lacking $\\alpha$-hydrogen) and an aliphatic ketone (having $\\alpha$-hydrogens) in the presence of dilute base.",
    0,
    "The base-catalyzed condensation between an aromatic aldehyde having no $\\alpha$-hydrogen (benzaldehyde) and an enolizable ketone (acetone) is the classic Claisen-Schmidt reaction."
  ),
  ar(
    "In the preparation of sols, dialysis is carried out to remove dissolved ionic impurities.",
    "Colloidal particles cannot pass through a cellophane or parchment membrane, whereas crystalloid ions can pass through freely.",
    0,
    "Dialysis is based on the differential permeability of parchment/cellophane membranes, which allow small crystalloid ions (like $\\text{Cl}^-$, $\\text{H}^+$) to diffuse out while retaining colloidal particles."
  ),
  ar(
    "Excessive dialysis makes a colloidal sol unstable and leads to its precipitation.",
    "Traces of electrolytes are essential to provide the electrical charge that stabilizes colloidal particles.",
    0,
    "A small concentration of adsorbed electrolyte is necessary to maintain the zeta potential and electric charge on lyophobic colloids. Complete removal by prolonged dialysis removes this charge, causing coagulation."
  ),
  ar(
    "Lyophobic sols like $\\text{Fe(OH)}_3$ can be prepared by simply shaking the substance with the dispersion medium.",
    "Lyophobic sols possess high affinity between the dispersed phase and the dispersion medium.",
    3,
    "Both (A) and (R) are false, but under standard options: (A) is false because lyophobic sols cannot be prepared by simple shaking (they require special condensation or dispersion methods); (R) is false because lyophobic means solvent-hating (poor affinity). In standard 4-option AR tests, this corresponds to (A) is false."
  ),
  ar(
    "Mohr's salt is classified as a double salt rather than a complex salt.",
    "An aqueous solution of Mohr's salt gives a positive precipitate test with barium chloride and a brown ring test for nitrate.",
    2,
    "Assertion (A) is true: Mohr's salt is a double salt. Reason (R) is false: Mohr's salt contains sulphate $(\\text{SO}_4^{2-})$ and ammonium $(\\text{NH}_4^+)$ and $\\text{Fe}^{2+}$, not nitrate $(\\text{NO}_3^-)$; hence it does not give a brown ring test."
  ),
  ar(
    "Potash alum crystals obtained from a hot saturated solution are octahedral in shape.",
    "Alums crystallize in the cubic crystal system, typically exhibiting octahedral habit.",
    0,
    "Potash alum $(\\text{KAl(SO}_4)_2\\cdot 12\\text{H}_2\\text{O})$ crystallizes in the cubic system, commonly forming well-defined octahedral crystals upon slow cooling of a saturated solution."
  ),
  ar(
    "Acetanilide is purified by recrystallization from hot water containing a small amount of activated charcoal.",
    "Activated charcoal adsorbs colored impurities present in the crude acetanilide solution.",
    0,
    "Acetanilide is moderately soluble in hot water but sparingly soluble in cold water. Activated charcoal efficiently adsorbs colored tarry impurities, which are removed by hot filtration before crystallization."
  ),
  ar(
    "In the haloform reaction, acetone produces a yellow crystalline precipitate of iodoform, while 3-pentanone does not.",
    "3-Pentanone does not contain a methyl group adjacent to the carbonyl group $(\\text{CH}_3-\\text{C}=\\text{O})$.",
    0,
    "Only compounds with a $\\text{CH}_3\\text{CO}-$ group or a $\\text{CH}_3\\text{CH(OH)}-$ group give a positive iodoform test. 3-Pentanone $(\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3)$ has ethyl groups on both sides and cannot form iodoform."
  ),
  ar(
    "During the hydrolysis of $p$-nitroacetanilide to $p$-nitroaniline, concentrated sulphuric acid is added followed by basification with aqueous ammonia.",
    "The amide bond in $p$-nitroacetanilide is cleaved by acid hydrolysis to yield the $p$-nitroanilinium ion, which is subsequently neutralized.",
    0,
    "Acid-catalyzed hydrolysis cleaves the acetamido group $-\\text{NHCOCH}_3$ into $-\\text{NH}_3^+$ and acetic acid. Neutralization with aqueous ammonia precipitates free $p$-nitroaniline as a bright yellow solid."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "Which of the following statements is INCORRECT regarding the preparation of Mohr's salt?",
    [
      "Dilute $\\text{H}_2\\text{SO}_4$ is added to prevent hydrolysis of $\\text{Fe}^{2+}$ ions.",
      "The molar ratio of $\\text{FeSO}_4\\cdot 7\\text{H}_2\\text{O}$ to $(\\text{NH}_4)_2\\text{SO}_4$ taken is $1:1$.",
      "The solution is boiled vigorously for a prolonged duration to evaporate all water.",
      "The resulting crystals are light green in color."
    ],
    2,
    "Vigorous and prolonged boiling must be avoided because it leads to oxidation of $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$. The solution is only heated gently to its crystallization point."
  ),
  mcq(
    "During the preparation of ferric hydroxide sol, which ion is preferentially adsorbed on the colloidal particles to impart stability?",
    [
      "$\\text{Cl}^-$",
      "$\\text{Fe}^{3+}$",
      "$\\text{OH}^-$",
      "$\\text{H}^+$"
    ],
    1,
    "Colloidal $\\text{Fe(OH)}_3$ particles preferentially adsorb common $\\text{Fe}^{3+}$ ions from the $\\text{FeCl}_3$ solution, acquiring a positive charge."
  ),
  mcq(
    "In the synthesis of acetanilide, what is the specific role of adding zinc dust during the reaction of aniline with acetic anhydride/glacial acetic acid?",
    [
      "To act as a Lewis acid catalyst",
      "To reduce colored oxidation impurities and prevent aerial oxidation of aniline",
      "To dehydrate the intermediate product",
      "To shift the equilibrium by precipitating acetanilide"
    ],
    1,
    "Zinc dust acts as a mild reducing agent. It reduces dark oxidation products present in commercial aniline and prevents aerial oxidation during the heating process."
  ),
  mcq(
    "Which of the following compounds will NOT form a yellow precipitate of iodoform when treated with $\\text{I}_2$ and aqueous $\\text{NaOH}$?",
    [
      "$\\text{CH}_3\\text{CH}_2\\text{OH}$",
      "$\\text{CH}_3\\text{CHO}$",
      "$\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$",
      "$\\text{CH}_3\\text{COCH}_3$"
    ],
    2,
    "$\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$ (3-pentanone) lacks the $\\text{CH}_3\\text{CO}-$ or $\\text{CH}_3\\text{CH(OH)}-$ group and therefore does not give the iodoform reaction."
  ),
  mcq(
    "In the preparation of dibenzalacetone, benzaldehyde and acetone are reacted in the presence of dilute $\\text{NaOH}$ in a stoichiometric molar ratio of:",
    [
      "$1 : 1$",
      "$1 : 2$",
      "$2 : 1$",
      "$3 : 1$"
    ],
    2,
    "The preparation of dibenzalacetone involves a double Claisen-Schmidt condensation requiring 2 moles of benzaldehyde per 1 mole of acetone: $2\\text{C}_6\\text{H}_5\\text{CHO} + \\text{CH}_3\\text{COCH}_3 \\to \\text{C}_6\\text{H}_5\\text{CH}=\\text{CH}-\\text{CO}-\\text{CH}=\\text{CH}-\\text{C}_6\\text{H}_5 + 2\\text{H}_2\\text{O}$."
  ),
  mcq(
    "Arsenious sulphide sol is prepared by passing $\\text{H}_2\\text{S}$ gas through a boiling aqueous solution of $\\text{As}_2\\text{O}_3$. The charge on the sol particles and the preferentially adsorbed ion are, respectively:",
    [
      "Positive, $\\text{As}^{3+}$",
      "Negative, $\\text{S}^{2-}$",
      "Negative, $\\text{OH}^-$",
      "Neutral, uncharged"
    ],
    1,
    "Arsenious sulphide sol particles adsorb common sulphide ions $(\\text{S}^{2-})$ from dissolved $\\text{H}_2\\text{S}$, giving the particles a negative electrical charge."
  ),
  mcq(
    "In the preparation of $p$-nitroacetanilide from acetanilide, what is the main reason for keeping the reaction temperature strictly below $15^\\circ\\text{C}$?",
    [
      "To prevent crystallization of acetanilide",
      "To prevent poly-nitration (formation of dinitro derivatives) and hydrolysis",
      "To prevent freezing of glacial acetic acid",
      "To accelerate the reaction rate"
    ],
    1,
    "At temperatures above $15^\\circ\\text{C}$, dinitration (forming 2,4-dinitroacetanilide) and premature acidic hydrolysis of the amide linkage occur."
  ),
  mcq(
    "Which of the following statements correctly distinguishes a double salt from a complex salt?",
    [
      "A double salt retains its identity in aqueous solution, while a complex salt dissociates into simple ions.",
      "A double salt dissociates completely into simple ions in aqueous solution, while a complex salt retains the complex ion.",
      "Both double salts and complex salts lose their identity in water completely.",
      "A double salt contains coordinate covalent bonds, whereas a complex salt does not."
    ],
    1,
    "A double salt (e.g., Mohr's salt, potash alum) dissociates completely into its component simple ions in water. In contrast, a complex salt retains its complex coordination sphere in aqueous solution."
  ),

  // ----------------------------------------------------
  // 13 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "How many water molecules of crystallization are present per formula unit of ferrous ammonium sulphate (Mohr's salt)?",
    6,
    "The chemical formula of Mohr's salt is $\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4\\cdot 6\\text{H}_2\\text{O}$. Therefore, it contains 6 molecules of water of crystallization."
  ),
  num(
    "What is the total number of water molecules of crystallization present in one formula unit of potash alum, $\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3\\cdot x\\text{H}_2\\text{O}$?",
    24,
    "The chemical formula of potash alum is $\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3\\cdot 24\\text{H}_2\\text{O}$. The value of $x$ is 24."
  ),
  num(
    "Calculate the molecular mass of anhydrous acetanilide $(\\text{C}_8\\text{H}_9\\text{NO})$ in $\\text{g/mol}$. [Given: $\\text{C}=12, \\text{H}=1, \\text{N}=14, \\text{O}=16$]",
    135,
    "Molecular mass of $\\text{C}_8\\text{H}_9\\text{NO} = (8 \\times 12) + (9 \\times 1) + 14 + 16 = 96 + 9 + 14 + 16 = 135\\text{ g/mol}$."
  ),
  num(
    "How many moles of benzaldehyde are required to react with 1 mole of acetone to form 1 mole of dibenzalacetone?",
    2,
    "The reaction is: $2\\text{C}_6\\text{H}_5\\text{CHO} + \\text{CH}_3\\text{COCH}_3 \\to \\text{C}_6\\text{H}_5\\text{CH}=\\text{CH}-\\text{CO}-\\text{CH}=\\text{CH}-\\text{C}_6\\text{H}_5 + 2\\text{H}_2\\text{O}$. Exactly 2 moles of benzaldehyde are required."
  ),
  num(
    "What is the oxidation state of iron in Mohr's salt, $\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4\\cdot 6\\text{H}_2\\text{O}$?",
    2,
    "In Mohr's salt, iron exists as the ferrous cation $\\text{Fe}^{2+}$. Thus, its oxidation state is $+2$."
  ),
  num(
    "How many total ions are produced in aqueous solution when one formula unit of potash alum, $\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3\\cdot 24\\text{H}_2\\text{O}$, completely dissociates?",
    8,
    "Upon complete dissociation: $\\text{K}_2\\text{SO}_4\\cdot\\text{Al}_2(\\text{SO}_4)_3 \\to 2\\text{K}^+ + 2\\text{Al}^{3+} + 4\\text{SO}_4^{2-}$. Total ions = $2 + 2 + 4 = 8$."
  ),
  num(
    "How many total ions are produced in aqueous solution by the complete dissociation of one formula unit of Mohr's salt, $\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4\\cdot 6\\text{H}_2\\text{O}$?",
    5,
    "In aqueous solution: $\\text{FeSO}_4\\cdot(\\text{NH}_4)_2\\text{SO}_4 \\to \\text{Fe}^{2+} + 2\\text{NH}_4^+ + 2\\text{SO}_4^{2-}$. Total ions = $1 + 2 + 2 = 5$."
  ),
  num(
    "Calculate the molecular mass of iodoform $(\\text{CHI}_3)$ in $\\text{g/mol}$. [Given: $\\text{C}=12, \\text{H}=1, \\text{I}=127$]",
    394,
    "Molecular mass of $\\text{CHI}_3 = 12 + 1 + (3 \\times 127) = 13 + 381 = 394\\text{ g/mol}$."
  ),
  num(
    "How many moles of $\\text{I}_2$ are consumed per mole of acetone during the complete conversion of acetone to iodoform in the haloform reaction?",
    3,
    "The overall reaction is: $\\text{CH}_3\\text{COCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\to \\text{CHI}_3 + \\text{CH}_3\\text{COONa} + 3\\text{NaI} + 3\\text{H}_2\\text{O}$. Thus, 3 moles of $\\text{I}_2$ are consumed per mole of acetone."
  ),
  num(
    "In the haloform reaction of acetone, how many moles of $\\text{NaOH}$ are consumed per mole of acetone converted to iodoform?",
    4,
    "From the stoichiometry: $\\text{CH}_3\\text{COCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\to \\text{CHI}_3 + \\text{CH}_3\\text{COONa} + 3\\text{NaI} + 3\\text{H}_2\\text{O}$. Exactly 4 moles of $\\text{NaOH}$ are consumed."
  ),
  num(
    "In the preparation of acetanilide, $9.3\\text{ g}$ of pure aniline (molar mass $93\\text{ g/mol}$) is reacted with excess acetic anhydride. If the actual yield of acetanilide (molar mass $135\\text{ g/mol}$) is $10.8\\text{ g}$, calculate the percentage yield of acetanilide.",
    80,
    "Moles of aniline = $9.3 / 93 = 0.10\\text{ mol}$. Theoretical yield of acetanilide = $0.10 \\times 135 = 13.5\\text{ g}$. Percentage yield = $(10.8 / 13.5) \\times 100 = 80\\%$."
  ),
  num(
    "What is the coordination number of $\\text{Fe}^{2+}$ in the hydrated cation $[\\text{Fe}(\\text{H}_2\\text{O})_6]^{2+}$ present in crystalline Mohr's salt?",
    6,
    "In crystalline ferrous ammonium sulphate hexahydrate, the $\\text{Fe}^{2+}$ ion is octahedrally coordinated by 6 water molecules, giving a coordination number of 6."
  ),
  num(
    "Calculate the molar mass of $p$-nitroacetanilide $(\\text{C}_8\\text{H}_8\\text{N}_2\\text{O}_3)$ in $\\text{g/mol}$. [Given: $\\text{C}=12, \\text{H}=1, \\text{N}=14, \\text{O}=16$]",
    180,
    "Molar mass of $\\text{C}_8\\text{H}_8\\text{N}_2\\text{O}_3 = (8 \\times 12) + (8 \\times 1) + (2 \\times 14) + (3 \\times 16) = 96 + 8 + 28 + 48 = 180\\text{ g/mol}$."
  )
];

// Validate all questions
let katexErrors = 0;
questions.forEach((q, idx) => {
  const fields = [q.question, ...(q.options || []), q.explanation];
  fields.forEach(f => {
    const res = validateKaTeX(f);
    if (!res.valid) {
      console.error(`Question ${idx + 1} KaTeX error:`, res.error, "in:", res.math);
      katexErrors++;
    }
  });
});

console.log(`Part 2 total questions: ${questions.length}`);
console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 47) {
  const outputPath = path.join(__dirname, "data_practical_part2.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
