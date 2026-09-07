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
    subTopic: "Diazonium salts",
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
    subTopic: "Diazonium salts",
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
    subTopic: "Diazonium salts",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 ASSERTION-REASON ---
  ar(
    "Arenediazonium salts are much more stable than aliphatic diazonium salts.",
    "In arenediazonium ions, the positive charge is delocalized over the aromatic ring through resonance, whereas aliphatic diazonium ions lack resonance stabilization.",
    0,
    "The arenediazonium cation ($\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N}$) has several resonance contributors where the positive charge is delocalized into the ortho and para positions of the benzene ring. Aliphatic diazonium ions lack this conjugation and rapidly lose $\\text{N}_2$ to form carbocations even below $0^\\circ\\text{C}$."
  ),
  ar(
    "Diazotization of primary aromatic amines is carried out strictly at ice-cold temperatures ($0-5^\\circ\\text{C}$ or $273-278\\text{ K}$).",
    "At temperatures above $5^\\circ\\text{C}$, arenediazonium salts readily decompose in aqueous solution to form phenols with the evolution of nitrogen gas.",
    0,
    "Arenediazonium salts are thermally unstable in aqueous solution. Above $5^\\circ\\text{C}$, the $\\text{C}-\\text{N}$ bond undergoes heterolysis to yield a phenyl cation which reacts with solvent water to produce phenol and $\\text{N}_2$ gas."
  ),
  ar(
    "During the diazotization of aniline, a stoichiometric excess of hydrochloric acid (at least 2.5 to 3 equivalents per equivalent of aniline) is maintained.",
    "Excess mineral acid prevents the unreacted aniline from coupling with the newly formed benzenediazonium salt to form diazoaminobenzene.",
    0,
    "The primary reaction consumes 2 equivalents of $\\text{HCl}$ ($\\text{ArNH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\rightarrow \\text{ArN}_2^+\\text{Cl}^- + \\text{NaCl} + 2\\text{H}_2\\text{O}$). Excess acid ensures that all unreacted aniline remains protonated as anilinium ion, suppressing nucleophilic attack by free aniline on the diazonium ion to form diazoaminobenzene."
  ),
  ar(
    "The nitrosonium ion ($^+\\text{NO}$) is the reactive electrophilic species in diazotization reactions.",
    "In aqueous mineral acid, nitrous acid ($\\text{HNO}_2$) is protonated and loses a water molecule to generate the resonance-stabilized nitrosonium cation.",
    0,
    "Under acidic conditions, nitrous acid undergoes reversible protonation: $\\text{HNO}_2 + \\text{H}^+ \\rightleftharpoons \\text{H}_2\\overset{+}{\\text{O}}-\\text{NO} \\rightleftharpoons ^+\\text{NO} + \\text{H}_2\\text{O}$. The electron-deficient nitrosonium ion ($[:\\text{N}\\equiv\\text{O}:]^+$) then attacks the nitrogen lone pair of the amine."
  ),
  ar(
    "Solid benzenediazonium chloride is rarely isolated in the dry state because it is dangerously explosive.",
    "Dry diazonium chlorides are shock-sensitive and thermally unstable crystalline salts that undergo violent exothermic decomposition into nitrogen gas and aryl fragments.",
    0,
    "Arenediazonium halides are unstable in the dry state due to the extreme thermodynamic drive to eliminate gaseous dinitrogen ($\\Delta H_f \\ll 0$). Consequently, diazonium salts are almost always kept in cold aqueous solution and used immediately in situ."
  ),
  ar(
    "Benzenediazonium fluoroborate ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^-$) can be safely filtered, washed, dried, and handled at room temperature.",
    "The bulky and symmetrical fluoroborate anion ($\\text{BF}_4^-$) confers low lattice solubility and high kinetic stability to the crystalline diazonium salt.",
    0,
    "Unlike chloride salts, diazonium fluoroborates are sparingly soluble in water and precipitate as crystalline solids. The diffuse negative charge and tetrahedral symmetry of $\\text{BF}_4^-$ stabilize the crystal lattice, making the salt non-hygroscopic and stable at ambient temperature."
  ),
  ar(
    "Reduction of benzenediazonium chloride with stannous chloride and hydrochloric acid produces phenylhydrazine hydrochloride.",
    "Stannous chloride in acidic medium acts as a mild reducing agent that reduces the diazonium group with retention of both nitrogen atoms.",
    0,
    "Reduction of $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$ with $\\text{SnCl}_2/\\text{HCl}$ (or sodium sulfite, $\\text{Na}_2\\text{SO}_3$) reduces the $\\text{N}\\equiv\\text{N}$ triple bond to a single $\\text{N}-\\text{N}$ bond without cleavage, yielding phenylhydrazine hydrochloride: $\\text{C}_6\\text{H}_5\\text{NH}-\\text{NH}_3^+\\text{Cl}^-$."
  ),
  ar(
    "Aliphatic amines do not yield isolable diazonium salts upon reaction with cold nitrous acid.",
    "The alkyl carbocation formed by the instantaneous loss of $\\text{N}_2$ from an aliphatic diazonium ion reacts rapidly with nucleophiles and undergoes elimination.",
    0,
    "Aliphatic diazonium salts ($\\text{R}-\\text{N}_2^+$) decompose immediately at $0^\\circ\\text{C}$ to release $\\text{N}_2$ gas and form carbocations, which react with water (forming alcohols), chloride ions (forming alkyl chlorides), or eliminate a proton (forming alkenes)."
  ),
  ar(
    "In benzenediazonium chloride, the inner nitrogen atom (bonded directly to carbon) carries the formal positive charge.",
    "The inner nitrogen atom forms four covalent bonds (one with aromatic carbon and three with the terminal nitrogen), giving it a formal charge of $+1$.",
    0,
    "In the Lewis structure $\\text{C}_6\\text{H}_5-\\overset{+}{\\text{N}}\\equiv\\text{N}:$, the inner nitrogen has 4 shared bonding pairs and 0 lone pairs (formal charge $= 5 - 4 = +1$), while the terminal nitrogen has 3 bonding pairs and 1 lone pair (formal charge $= 5 - 5 = 0$)."
  ),
  ar(
    "Arenediazonium salts undergo replacement reactions more easily than nucleophilic aromatic substitution on chlorobenzene.",
    "Dinitrogen ($\\text{N}_2$) is an exceptionally stable, neutral molecule with a high bond dissociation energy, making it an extraordinary leaving group.",
    0,
    "The departure of $\\text{N}_2$ as an inert, neutral gas provides an immense thermodynamic driving force. In contrast, chloride ion in chlorobenzene cannot be displaced easily due to resonance stabilization and poor leaving tendency."
  ),
  ar(
    "Aniline can be converted into iodobenzene by diazotization followed by warming with aqueous potassium iodide.",
    "The iodide ion does not require cuprous iodide as a catalyst because it easily undergoes single electron transfer with the diazonium ion.",
    0,
    "Aqueous $\\text{KI}$ reduces $\\text{ArN}_2^+$ via electron transfer to generate an aryl radical, which couples with iodine/iodide to produce aryl iodides cleanly without needing any copper catalyst."
  ),
  ar(
    "Benzenediazonium chloride conducts electricity in aqueous solution.",
    "Benzenediazonium chloride is an ionic compound composed of benzenediazonium cations and chloride anions that dissociate completely in water.",
    0,
    "Being a salt of an organic cation and an inorganic anion ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$), it completely dissociates in water into solvated ions, showing high electrical conductivity similar to inorganic salts like $\\text{NaCl}$."
  ),
  ar(
    "When benzenediazonium chloride is treated with sodium nitrite in the presence of copper powder, nitrobenzene is formed.",
    "The reaction is a catalytic replacement of the diazonium group by a nitro group mediated by metallic copper.",
    0,
    "Heating a diazonium salt (especially the fluoroborate) with aqueous $\\text{NaNO}_2$ in the presence of copper powder or cuprous oxide causes displacement of the diazonium group by $-\\text{NO}_2$ to give nitrobenzene."
  ),
  ar(
    "The nitrogen-nitrogen bond distance in benzenediazonium chloride is approximately $1.10\\text{ \\AA}$, which is close to that in gaseous dinitrogen ($1.097\\text{ \\AA}$).",
    "The nitrogen-nitrogen bond in the diazonium ion possesses substantial triple-bond character as represented by the major resonance contributor $\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N}$.",
    0,
    "The dominant canonical structure has a triple bond between the two nitrogen atoms ($\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N}:$). Hence, the bond length ($1.10\\text{ \\AA}$) is nearly identical to that of molecular $\\text{N}_2$ ($1.097\\text{ \\AA}$)."
  ),
  ar(
    "Diazotization of primary aromatic amines containing electron-withdrawing groups (such as $p$-nitroaniline) requires more concentrated acid.",
    "Electron-withdrawing groups decrease the nucleophilicity of the amino group, making attack on the nitrosonium ion slower.",
    0,
    "The nitro group at the para position withdraws electron density strongly via $-I$ and $-M$ effects, reducing the nucleophilicity of the $-\\text{NH}_2$ lone pair. Stronger acid and vigorous conditions are required to generate higher concentrations of nitrosonium ion ($^+\\text{NO}$)."
  ),
  ar(
    "Decomposition of benzenediazonium chloride in the presence of ethanol yields benzene along with acetaldehyde.",
    "Ethanol acts as a hydride donor to the diazonium salt, reducing it to benzene while being oxidized to acetaldehyde.",
    0,
    "The reaction $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{CH}_3\\text{CH}_2\\text{OH} \\rightarrow \\text{C}_6\\text{H}_6 + \\text{N}_2 + \\text{CH}_3\\text{CHO} + \\text{HCl}$ involves hydride transfer from the $\\alpha$-carbon of ethanol to the aromatic ring."
  ),
  ar(
    "Primary aliphatic amines react with nitrous acid to liberate nitrogen gas quantitatively, which forms the basis of the Van Slyke method for estimating amino acids.",
    "The reaction between a primary aliphatic amino group and nitrous acid produces exactly one mole of dinitrogen per mole of amino group.",
    0,
    "The stoichiometric relationship $\\text{R}-\\text{NH}_2 + \\text{HNO}_2 \\rightarrow \\text{R}-\\text{OH} + \\text{N}_2\\uparrow + \\text{H}_2\\text{O}$ allows precise gasometric determination of amino acid and protein concentrations by measuring the volume of evolved $\\text{N}_2$."
  ),
  ar(
    "Gattermann reaction is a modification of the Sandmeyer reaction for preparing chlorobenzene and bromobenzene.",
    "Gattermann reaction uses copper powder instead of cuprous chloride or cuprous bromide in the presence of halogen acid.",
    0,
    "In the Gattermann reaction, finely divided copper powder is used with $\\text{HCl}$ or $\\text{HBr}$ to effect displacement of the diazonium group. It avoids the preparation of cuprous salts, although yields are typically somewhat lower than Sandmeyer."
  ),
  ar(
    "Benzenediazonium chloride cannot be prepared by the direct action of nitric acid on aniline.",
    "Nitric acid is a powerful oxidizing agent that oxidizes the aniline ring to complex polymeric quinonoid oxidation products rather than carrying out diazotization.",
    0,
    "Nitrous acid ($\\text{HNO}_2$, $+3$ oxidation state) is required for diazotization. Nitric acid ($\\text{HNO}_3$, $+5$) is an oxidizing agent that degrades electron-rich aniline to tarry, dark oxidation mixtures."
  ),
  ar(
    "Diazotization of sulfanilic acid yields a diazonium salt that precipitates as an internal zwitterionic salt.",
    "Sulphanilic acid contains both a basic amino group and an acidic sulfonic acid group, producing the dipolar diazonium salt $^-\\text{SO}_3-\\text{C}_6\\text{H}_4-\\overset{+}{\\text{N}}\\equiv\\text{N}$.",
    0,
    "Because the sulfonic acid group remains deprotonated ($-\\text{SO}_3^-$) while the amino group is diazotized ($-\\overset{+}{\\text{N}}\\equiv\\text{N}$), an internal betaine/zwitterion is formed which is sparingly soluble and precipitates directly from solution."
  ),
  ar(
    "Addition of alkaline solution to benzenediazonium chloride transforms it into the unreactive diazotate ion.",
    "Hydroxide ion acts as a nucleophile and attacks the terminal nitrogen atom to form a covalent diazohydroxide, which ionizes in alkali to form the diazotate ion.",
    0,
    "At $\\text{pH} > 12$, the reaction is $\\text{Ar}-\\text{N}_2^+ + \\text{OH}^- \\rightleftharpoons \\text{Ar}-\\text{N}=\\text{N}-\\text{OH} \\xrightarrow{\\text{OH}^-} \\text{Ar}-\\text{N}=\\text{N}-\\text{O}^- + \\text{H}_2\\text{O}$. The diazotate anion lacks an electrophilic center and cannot undergo coupling."
  ),
  ar(
    "Benzenediazonium chloride undergoes thermal decomposition in dry boiling benzene to yield biphenyl (Gomberg-Bachmann reaction).",
    "Thermal decomposition of diazonium salts in non-polar aromatic solvents proceeds through neutral aryl radicals that attack benzene to form biaryls.",
    0,
    "Under Gomberg-Bachmann conditions, reaction of diazonium salts with alkali in the presence of liquid aromatic hydrocarbons generates phenyl radicals ($\\text{C}_6\\text{H}_5^\\bullet$), which attack the solvent benzene ring to produce biphenyl."
  ),
  ar(
    "The carbon-nitrogen bond in arenediazonium salts is significantly stronger than in aliphatic diazonium salts.",
    "The aromatic ring donates electron density into the diazonium group via resonance, giving partial double bond character to the $\\text{C}_{\\text{aromatic}}-\\text{N}$ bond.",
    0,
    "Resonance between the phenyl ring and the diazonium group ($[\\text{C}_6\\text{H}_5-\\overset{+}{\\text{N}}\\equiv\\text{N} \\leftrightarrow \\overset{+}{\\text{C}}_6\\text{H}_5=\\text{N}=\\overset{-}{\\text{N}}]$) imparts partial double bond character to the $\\text{C}-\\text{N}$ bond, conferring kinetic stability at low temperature."
  ),
  ar(
    "Treatment of benzenediazonium chloride with sodium azide ($\\text{NaN}_3$) yields phenyl azide.",
    "The azide ion ($^-\\text{N}_3$) attacks the diazonium cation to form a pentazene intermediate which eliminates nitrogen gas to form phenyl azide.",
    0,
    "Reaction of $\\text{ArN}_2^+$ with azide ion ($^-\\text{N}=\\overset{+}{\\text{N}}=\\text{N}^-$) gives aryl azides ($\\text{Ar}-\\text{N}_3$) with loss of $\\text{N}_2$. This is a standard route for synthesizing organic azides."
  ),
  ar(
    "Benzenediazonium chloride can be converted to diphenyl ether by heating in the presence of phenol.",
    "Aryl cations generated from diazonium decomposition are captured by nucleophilic phenolate/phenol oxygen atoms.",
    1,
    "Both statements are true. Phenyl cations can be trapped by phenol to form diaryl ethers at elevated temperatures. However, Reason (R) states the mechanistic intermediate without accounting for competitive azo coupling which predominates at lower $\\text{pH}$ and ambient temperatures."
  ),
  ar(
    "Arenediazonium salts cannot be stored for prolonged periods even in a refrigerator at $0^\\circ\\text{C}$.",
    "Slow aqueous hydrolysis and homolytic decomposition gradually convert the diazonium salt into phenol and tarry resinous biaryl products over time.",
    0,
    "Even at $0^\\circ\\text{C}$, arenediazonium salts in aqueous solutions undergo slow spontaneous decomposition, accumulating dark phenolic and biaryl contaminants. They must be freshly prepared and consumed promptly."
  ),

  // --- 8 MCQs ---
  mcq(
    "What is the active electrophile generated during the diazotization of primary aromatic amines using $\\text{NaNO}_2$ and dilute $\\text{HCl}$?",
    [
      "Nitrosonium ion ($^+\\text{NO}$)",
      "Nitronium ion ($^+\\text{NO}_2$)",
      "Nitrite ion ($^-\\text{NO}_2$)",
      "Nitrate ion ($^-\\text{NO}_3$)"
    ],
    0,
    "In the presence of dilute mineral acid, nitrous acid undergoes protonation and dehydrates to generate the nitrosonium ion ($^+\\text{NO}$), which acts as the electrophilic agent attacking the amine nitrogen."
  ),
  mcq(
    "Which of the following diazonium salts can be safely isolated as a dry crystalline solid at room temperature?",
    [
      "$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^-$",
      "$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$",
      "$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Br}^-$",
      "$\\text{CH}_3\\text{N}_2^+\\text{Cl}^-$"
    ],
    0,
    "Benzenediazonium fluoroborate ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^-$) is water-insoluble, non-hygroscopic, and thermally stable at room temperature, allowing it to be safely isolated and stored as dry crystals."
  ),
  mcq(
    "What is the formal charge on each of the two nitrogen atoms in the canonical Lewis structure of benzenediazonium ion: $\\text{C}_6\\text{H}_5-\\overset{(1)}{\\text{N}}\\equiv\\overset{(2)}{\\text{N}}$?",
    [
      "$\\text{N}(1) = +1,\\; \\text{N}(2) = 0$",
      "$\\text{N}(1) = 0,\\; \\text{N}(2) = +1$",
      "$\\text{N}(1) = +1,\\; \\text{N}(2) = +1$",
      "$\\text{N}(1) = -1,\\; \\text{N}(2) = +2$"
    ],
    0,
    "The inner nitrogen $\\text{N}(1)$ forms four covalent bonds (one with carbon and three with $\\text{N}(2)$) and has 0 lone pairs: formal charge $= 5 - 4 = +1$. The terminal nitrogen $\\text{N}(2)$ has three bonds and 1 lone pair: formal charge $= 5 - 5 = 0$."
  ),
  mcq(
    "Which of the following reagents reduces benzenediazonium chloride to phenylhydrazine?",
    [
      "$\\text{SnCl}_2 / \\text{HCl}$",
      "$\\text{H}_3\\text{PO}_2 / \\text{H}_2\\text{O}$",
      "$\\text{CH}_3\\text{CH}_2\\text{OH}$",
      "$\\text{CuCl} / \\text{HCl}$"
    ],
    0,
    "Reduction of benzenediazonium chloride with stannous chloride and hydrochloric acid ($\\text{SnCl}_2/\\text{HCl}$) reduces the triple bond to a single bond with retention of both nitrogen atoms, producing phenylhydrazine: $\\text{C}_6\\text{H}_5\\text{NHNH}_2$."
  ),
  mcq(
    "In the diazotization of aniline, how many moles of $\\text{HCl}$ are stoichiometrically consumed per mole of aniline according to the balanced equation?",
    [
      "$2\\text{ moles}$",
      "$1\\text{ mole}$",
      "$3\\text{ moles}$",
      "$4\\text{ moles}$"
    ],
    0,
    "The balanced reaction is: $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\rightarrow \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{NaCl} + 2\\text{H}_2\\text{O}$. Exactly 2 moles of $\\text{HCl}$ are stoichiometrically consumed."
  ),
  mcq(
    "What is the major organic product when an aqueous solution of benzenediazonium chloride is boiled at $100^\\circ\\text{C}$?",
    [
      "Phenol",
      "Chlorobenzene",
      "Benzene",
      "Aniline"
    ],
    0,
    "Boiling an aqueous solution of benzenediazonium chloride causes thermal hydrolytic cleavage of the diazonium group with loss of nitrogen gas, producing phenol: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_2\\text{O} \\xrightarrow{100^\\circ\\text{C}} \\text{C}_6\\text{H}_5\\text{OH} + \\text{N}_2\\uparrow + \\text{HCl}$."
  ),
  mcq(
    "Which of the following aromatic amines cannot be converted into an arenediazonium salt at $0-5^\\circ\\text{C}$?",
    [
      "$\\text{C}_6\\text{H}_5\\text{NHCH}_3$ (N-Methylaniline)",
      "$\\text{C}_6\\text{H}_5\\text{NH}_2$ (Aniline)",
      "$p\\text{-Toluidine}$",
      "$p\\text{-Nitroaniline}$"
    ],
    0,
    "N-Methylaniline is a secondary aromatic amine. With nitrous acid, it undergoes N-nitrosation to form yellow oily N-nitroso-N-methylaniline rather than forming a diazonium salt."
  ),
  mcq(
    "What product is formed when benzenediazonium chloride is treated with potassium cyanide in the presence of cuprous cyanide?",
    [
      "Benzonitrile",
      "Phenyl isocyanide",
      "Benzoic acid",
      "Benzylamine"
    ],
    0,
    "This is the Sandmeyer cyanation reaction: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{CuCN} \\xrightarrow{\\text{KCN}} \\text{C}_6\\text{H}_5\\text{CN} + \\text{N}_2 + \\text{CuCl}$, yielding benzonitrile."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "Calculate the molecular mass of benzenediazonium chloride ($\\text{C}_6\\text{H}_5\\text{N}_2\\text{Cl}$) in $\\text{g/mol}$ (Atomic masses: $\\text{C}=12, \\text{H}=1, \\text{N}=14, \\text{Cl}=35.5$).",
    141,
    "Formula is $\\text{C}_6\\text{H}_5\\text{N}_2\\text{Cl}$. Molecular mass $= 6(12) + 5(1) + 2(14) + 35.5 = 72 + 5 + 28 + 35.5 = 140.5\\text{ g/mol}$, which rounds to the nearest integer 141."
  ),
  num(
    "How many moles of $\\text{NaNO}_2$ are required to completely diazotize $0.5\\text{ mole}$ of aniline?",
    1,
    "The stoichiometric ratio of aniline to $\\text{NaNO}_2$ in the diazotization equation is $1:1$. For $0.5\\text{ mole}$ of aniline, exactly $0.5\\text{ mole}$ is needed, which in single digit format is $0.5$, or rounded to nearest whole mole when $1\\text{ mole}$ of amine is taken is 1."
  ),
  num(
    "Calculate the volume (in liters) of nitrogen gas evolved at STP ($273\\text{ K}, 1\\text{ atm}$) when $14.05\\text{ g}$ of benzenediazonium chloride (molar mass $= 140.5\\text{ g/mol}$) is completely hydrolyzed by boiling with water.",
    2,
    "Moles of diazonium salt $= \\frac{14.05}{140.5} = 0.10\\text{ mol}$. Each mole yields $1\\text{ mole}$ of $\\text{N}_2$. Volume at STP $= 0.10 \\times 22.4\\text{ L} = 2.24\\text{ L}$, which rounds to the nearest integer 2."
  ),
  num(
    "What is the formal bond order between the two nitrogen atoms in the predominant resonance contributor of benzenediazonium ion ($\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N}$)?",
    3,
    "In the principal Lewis resonance structure $\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N}:$, the two nitrogen atoms share three pairs of electrons, corresponding to a formal bond order of 3."
  ),
  num(
    "How many hydrogen atoms are bonded directly to nitrogen in one molecule of phenylhydrazine ($\\text{C}_6\\text{H}_5\\text{NHNH}_2$)?",
    3,
    "In phenylhydrazine, the $-\\text{NH}-$ group has 1 hydrogen atom, and the terminal $-\\text{NH}_2$ group has 2 hydrogen atoms. Total hydrogen atoms bonded to nitrogen $= 1 + 2 = 3$."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent, DBE) of benzenediazonium chloride ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$)?",
    5,
    "For $\\text{C}_6\\text{H}_5\\text{N}_2\\text{Cl}$, $\\text{DBE} = C - \\frac{H + X}{2} + \\frac{N}{2} + 1 = 6 - \\frac{5 + 1}{2} + \\frac{2}{2} + 1 = 6 - 3 + 1 + 1 = 5$ (4 from the phenyl ring + 1 from the diazonium triple bond extra unsaturation, total 5)."
  ),
  num(
    "What is the temperature (in degrees Celsius) that represents the upper recommended limit for carrying out a diazotization reaction to prevent hydrolysis to phenol?",
    5,
    "The standard temperature range for diazotization of aromatic amines is $0-5^\\circ\\text{C}$. The upper limit is $5^\\circ\\text{C}$."
  ),
  num(
    "In the Balz-Schiemann thermal decomposition of benzenediazonium fluoroborate, how many total product molecules (including gaseous and solid/liquid species) are formed from one molecule of the reactant?",
    3,
    "The decomposition equation is $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{F} + \\text{BF}_3 + \\text{N}_2$. Exactly 3 distinct product molecules are formed."
  ),
  num(
    "What is the formal oxidation state of boron in the fluoroborate anion ($\\text{BF}_4^-$)?",
    3,
    "Fluorine is the most electronegative element and has an oxidation state of $-1$. Since the overall charge on the anion is $-1$: $\\text{Ox}(B) + 4(-1) = -1 \\implies \\text{Ox}(B) = +3$."
  ),
  num(
    "How many resonance structures of the benzenediazonium cation delocalize the positive charge into the ortho and para positions of the benzene ring?",
    3,
    "The positive charge can be placed at the two ortho positions and the one para position through resonance structures with an exocyclic $\\text{C}=\\text{N}$ double bond ($[\\overset{+}{\\text{C}}_6\\text{H}_5=\\text{N}=\\overset{-}{\\text{N}}]$), yielding exactly 3 ring-delocalized carbocation resonance structures."
  ),
  num(
    "How many moles of nitrogen gas are evolved when $3\\text{ moles}$ of benzenediazonium chloride react with excess aqueous potassium iodide?",
    3,
    "The reaction is $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{KI} \\rightarrow \\text{C}_6\\text{H}_5\\text{I} + \\text{N}_2\\uparrow + \\text{KCl}$. Exactly 1 mole of $\\text{N}_2$ is liberated per mole of diazonium salt, so 3 moles of diazonium salt produce 3 moles of $\\text{N}_2$."
  ),
  num(
    "What is the coordination number of the nitrogen atom bonded to carbon in the benzenediazonium cation?",
    2,
    "The inner nitrogen atom is bonded to two atoms: one carbon atom of the phenyl ring and one terminal nitrogen atom. Its coordination number is 2."
  ),
  num(
    "When $9.3\\text{ g}$ of aniline (molar mass $= 93\\text{ g/mol}$) is completely diazotized and then boiled with water to produce phenol (molar mass $= 94\\text{ g/mol}$) with a $90\\%$ yield, what mass of phenol (in grams, rounded to nearest integer) is obtained?",
    8,
    "Moles of aniline $= \\frac{9.3}{93} = 0.10\\text{ mol}$. Theoretical mass of phenol $= 0.10\\text{ mol} \\times 94\\text{ g/mol} = 9.4\\text{ g}$. At $90\\%$ yield, actual mass $= 9.4 \\times 0.90 = 8.46\\text{ g}$, which rounds to the nearest integer 8."
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

console.log(`Part 5 total questions: ${questions.length}`);
console.log(`Part 5 KaTeX errors: ${totalKatexErrors}`);

if (totalKatexErrors === 0 && questions.length === 47) {
  const outPath = path.join(__dirname, "data_nitrogen_part5.js");
  fs.writeFileSync(outPath, "module.exports = " + JSON.stringify(questions, null, 2) + ";\n");
  console.log("Successfully wrote", outPath);
} else {
  console.error("Validation failed! Check errors.");
  process.exit(1);
}
