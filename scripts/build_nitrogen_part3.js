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
    subTopic: "Coupling reactions and synthetic uses of diazonium salts",
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
    subTopic: "Coupling reactions and synthetic uses of diazonium salts",
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
    subTopic: "Coupling reactions and synthetic uses of diazonium salts",
    chapter: "Organic Compounds Containing Nitrogen",
    questionType: "Numerical",
    marks: 4,
    negativeMarks: 0
  };
}

const questions = [
  // --- 26 ASSERTION-REASON ---
  ar(
    "Azo coupling of benzenediazonium chloride with phenol is carried out in a mildly alkaline medium ($\\text{pH } 9-10$).",
    "In mildly alkaline solution, phenol is converted into the phenoxide ion, which is significantly more activated toward electrophilic aromatic substitution than neutral phenol.",
    0,
    "The phenoxide ion ($\\text{C}_6\\text{H}_5\\text{O}^-$) has greater electron density than neutral phenol due to the negative charge on oxygen, facilitating attack by the weakly electrophilic diazonium cation ($\\text{ArN}_2^+$). At $\\text{pH} > 10$, however, the diazonium ion is converted into an unreactive diazotate ion, so $\\text{pH } 9-10$ is optimal."
  ),
  ar(
    "Coupling of benzenediazonium chloride with aniline is performed in a mildly acidic medium ($\\text{pH } 4-5$) rather than a strongly acidic or alkaline medium.",
    "In strongly acidic medium, aniline is protonated to anilinium ion which is deactivated, while in alkaline medium, N-coupling occurs to form diazoamino compounds.",
    0,
    "At $\\text{pH } 4-5$, there is sufficient unprotonated aniline available as a nucleophile, while avoiding N-diazoamino formation that predominates in alkaline conditions or complete deactivation via anilinium ion in strongly acidic conditions."
  ),
  ar(
    "Azo dyes are brightly colored compounds containing extended conjugated systems.",
    "The presence of the azo group ($-\\text{N}=\\text{N}-$) linking two aromatic rings provides an extended delocalized $\\pi$-electron chromophore that absorbs light in the visible spectrum.",
    0,
    "The azo linkage ($-\\text{N}=\\text{N}-$) connects two aromatic $\\pi$-electron systems, extending conjugation across the entire molecule. This lowers the HOMO-LUMO energy gap so that absorption occurs in the visible range, resulting in vivid colors."
  ),
  ar(
    "When benzenediazonium chloride couples with phenol, the azo group attaches almost exclusively at the para position.",
    "The para position is sterically less hindered than the ortho positions toward the relatively bulky benzenediazonium cation.",
    0,
    "The benzenediazonium cation is a bulky electrophile. Attack at the ortho positions experiences significant steric repulsion from the neighboring hydroxy/phenoxide group, directing electrophilic substitution predominantly to the unhindered para position."
  ),
  ar(
    "If the para position of phenol is blocked by a methyl group (as in $p$-cresol), azo coupling occurs at the ortho position.",
    "The phenoxide group is ortho-para directing, and when the para position is unavailable, electrophilic attack proceeds at the activated ortho position.",
    0,
    "The phenoxide group strongly activates both ortho and para positions via $+M$ resonance. When the para position is already occupied (e.g., in $p$-cresol), coupling occurs at an unoccupied ortho position to give an ortho-azo dye."
  ),
  ar(
    "Arenediazonium salts are weak electrophiles compared to common nitronium ($^+\\text{NO}_2$) or bromonium ($^+\\text{Br}$) ions.",
    "The positive charge on the diazonium ion is substantially delocalized over the two nitrogen atoms and the attached aromatic $\\pi$-system.",
    0,
    "The resonance contributors $[\\text{Ar}-\\overset{+}{\\text{N}}\\equiv\\text{N} \\leftrightarrow \\text{Ar}-\\text{N}=\\overset{+}{\\text{N}}]$ and delocalization into the ring disperse the positive charge, making $\\text{ArN}_2^+$ a weak electrophile that can attack only highly activated aromatic substrates like phenols and amines."
  ),
  ar(
    "Aryl iodides can be prepared in high yield simply by warming an aqueous solution of arenediazonium chloride with potassium iodide ($\\text{KI}$) without any copper catalyst.",
    "The iodide ion is a powerful nucleophile and an effective reducing agent capable of undergoing facile single-electron transfer with the diazonium cation.",
    0,
    "Unlike Sandmeyer reactions for chloride and bromide which require $\\text{Cu(I)}$ salts as catalysts, iodide ion reduces $\\text{ArN}_2^+$ via single electron transfer (SET) to generate aryl radicals that combine rapidly with iodine/iodide, giving aryl iodides smoothly."
  ),
  ar(
    "Fluorobenzene cannot be prepared by treating arenediazonium chloride with sodium fluoride or hydrofluoric acid directly.",
    "Fluoride ion has high hydration enthalpy and low nucleophilicity in water, leading to competitive formation of phenol via reaction with solvent water.",
    0,
    "Fluoride ions are heavily hydrated in water and react very slowly with diazonium ions, allowing water to attack competitively to form phenol. Fluorobenzene is instead prepared cleanly via the Balz-Schiemann reaction using fluoroborate salts."
  ),
  ar(
    "In the Balz-Schiemann reaction, arenediazonium fluoroborate is isolated as a dry crystalline solid before thermal decomposition.",
    "Arenediazonium fluoroborate ($\\text{ArN}_2^+\\text{BF}_4^-$) is insoluble in water and relatively stable and safe to handle at room temperature compared to other diazonium salts.",
    0,
    "Unlike diazonium chlorides which are hygroscopic and dangerously explosive when dry, diazonium fluoroborates are sparingly soluble precipitates that can be filtered, dried, and safely heated to decompose into aryl fluorides, $\\text{BF}_3$, and $\\text{N}_2$."
  ),
  ar(
    "Sandmeyer reaction provides higher yields of aryl halides than the Gattermann reaction.",
    "In the Sandmeyer reaction, cuprous halides ($\\text{CuCl}$ or $\\text{CuBr}$) are used in stoichiometric or near-stoichiometric amounts, whereas the Gattermann reaction employs copper powder and halogen acid.",
    1,
    "Both statements are true. Sandmeyer reaction uses $\\text{Cu}_2\\text{X}_2/\\text{HX}$ while Gattermann uses $\\text{Cu}/\\text{HX}$. Sandmeyer generally gives higher yields because soluble $\\text{Cu(I)}$ complexes mediate electron transfer and halogen transfer much more efficiently than heterogeneous copper powder, but Reason (R) describes the reagents rather than the mechanistic basis for yield difference."
  ),
  ar(
    "1,3,5-Tribromobenzene can be synthesized efficiently from aniline via a multi-step sequence involving diazotization and deamination.",
    "Treatment of aniline with bromine water yields 2,4,6-tribromoaniline, which upon diazotization followed by reduction with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) yields 1,3,5-tribromobenzene.",
    0,
    "Direct bromination of benzene cannot yield symmetrical 1,3,5-tribromobenzene because bromine is ortho-para directing. Starting from aniline, the powerful activating $-\\text{NH}_2$ directs three bromines to positions 2, 4, and 6. Removal of $-\\text{NH}_2$ via diazotization and reduction with $\\text{H}_3\\text{PO}_2$ leaves 1,3,5-tribromobenzene."
  ),
  ar(
    "Reduction of arenediazonium salts to arenes can be accomplished using hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) or ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$).",
    "Both hypophosphorous acid and ethanol act as reducing agents and are oxidized to phosphorous acid ($\\text{H}_3\\text{PO}_3$) and ethanal ($\\text{CH}_3\\text{CHO}$), respectively.",
    0,
    "The reactions are: $\\text{ArN}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{ArH} + \\text{N}_2 + \\text{H}_3\\text{PO}_3 + \\text{HCl}$ and $\\text{ArN}_2^+\\text{Cl}^- + \\text{CH}_3\\text{CH}_2\\text{OH} \\rightarrow \\text{ArH} + \\text{N}_2 + \\text{CH}_3\\text{CHO} + \\text{HCl}$. In both cases, diazonium nitrogen is lost as $\\text{N}_2$."
  ),
  ar(
    "Benzenediazonium chloride gives phenol when its aqueous solution is warmed to $50-100^\\circ\\text{C}$.",
    "Water acts as a nucleophile and attacks the phenyl cation generated by the heterolytic cleavage of the $\\text{C}-\\text{N}$ bond with loss of $\\text{N}_2$.",
    0,
    "Warming an aqueous diazonium solution induces heterolytic loss of $\\text{N}_2$ to yield phenyl cation (or an $S_N1$-like transition state), which is trapped by water to form phenol: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_2\\text{O} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{OH} + \\text{N}_2 + \\text{HCl}$."
  ),
  ar(
    "Benzonitrile can be synthesized from aniline via diazotization followed by treatment with cuprous cyanide and potassium cyanide ($\\text{CuCN}/\\text{KCN}$).",
    "The cyanide group can subsequently be converted into a carboxylic acid, amide, or primary amine through hydrolysis or reduction, making this a versatile synthetic pathway.",
    1,
    "Both statements are true. Diazotization of aniline followed by Sandmeyer cyanation yields benzonitrile. Benzonitrile is an extremely valuable synthetic intermediate for benzoic acid, benzamide, and benzylamine. However, the versatility of the nitrile group (Reason) does not explain the mechanism of the Sandmeyer substitution."
  ),
  ar(
    "Diazonium salts are indispensable in synthetic organic chemistry for introducing functional groups directly onto an aromatic ring that cannot be introduced by direct electrophilic substitution.",
    "Groups such as $-\\text{OH}, -\\text{I}, -\\text{F}, -\\text{CN}$, and $-\\text{H}$ can be regioselectively placed on an aromatic ring by nucleophilic displacement of the diazonium group.",
    0,
    "Direct fluorination, iodination, or hydroxylation of benzene cannot be accomplished cleanly by direct electrophilic substitution. Diazonium salts allow these substituents to be introduced with complete regiochemical control."
  ),
  ar(
    "Coupling of benzenediazonium chloride with 2-naphthol ($\\beta$-naphthol) in alkaline solution occurs exclusively at the 1-position.",
    "The 1-position in 2-naphthol has greater double-bond character and higher electron density than the 3-position, and the intermediate carbocation retains the aromaticity of the adjacent benzene ring.",
    0,
    "Electrophilic attack at C-1 preserves the intact aromatic sextet of the second ring during the Wheland intermediate. Attack at C-3 would disrupt the aromaticity of both rings, making C-1 the solely favored site."
  ),
  ar(
    "The compound 4-(dimethylamino)azobenzene (butter yellow) is prepared by coupling benzenediazonium chloride with N,N-dimethylaniline in weakly acidic medium.",
    "N,N-Dimethylaniline is strongly activated by the dimethylamino group, allowing electrophilic aromatic substitution by the diazonium ion at the para position.",
    0,
    "The $-\\text{N}(\\text{CH}_3)_2$ group is a powerful $+M$ activating group. Benzenediazonium chloride couples at the unhindered para position at $\\text{pH } 4-5$ to yield the bright yellow azo compound 4-(dimethylamino)azobenzene."
  ),
  ar(
    "Diazotization of sulfanilic acid followed by coupling with N,N-dimethylaniline gives the indicator methyl orange.",
    "Methyl orange changes color from red to yellow across the $\\text{pH}$ range $3.1-4.4$ due to reversible protonation on the azo nitrogen atom.",
    1,
    "Both statements are true. Methyl orange is synthesized by diazotizing sulfanilic acid and coupling with N,N-dimethylaniline. Its color change originates from protonation at one of the azo nitrogens, shifting the absorption spectrum. However, Reason (R) describes the indicator mechanism rather than explaining the coupling synthesis."
  ),
  ar(
    "Arenediazonium salts undergo nucleophilic substitution reactions more readily than aryl halides.",
    "Molecular nitrogen ($\\text{N}_2$) is an exceptionally good leaving group due to its extreme thermodynamic stability and gaseous state.",
    0,
    "Nitrogen gas is one of the best leaving groups in organic chemistry because the $\\text{N}\\equiv\\text{N}$ triple bond has a very high bond dissociation energy ($945\\text{ kJ/mol}$). The release of $\\text{N}_2$ provides a massive thermodynamic driving force ($\\Delta H < 0, \\Delta S > 0$)."
  ),
  ar(
    "Nitrobenzene can be synthesized from benzenediazonium fluoroborate by heating with aqueous sodium nitrite in the presence of copper powder.",
    "Thermal decomposition of diazonium fluoroborate in the presence of nitrite ion and copper catalyst causes nucleophilic replacement of the diazonium group by a nitro group.",
    0,
    "The reaction $\\text{ArN}_2^+\\text{BF}_4^- + \\text{NaNO}_2 \\xrightarrow{\\text{Cu},\\;\\Delta} \\text{ArNO}_2 + \\text{N}_2 + \\text{NaBF}_4$ is an established method to introduce a nitro group onto an aromatic ring without using strongly acidic nitrating mixtures."
  ),
  ar(
    "Coupling of benzenediazonium chloride does not take place with benzene or toluene under normal conditions.",
    "Benzene and toluene lack sufficiently strong electron-donating groups to activate the aromatic ring toward attack by the weakly electrophilic diazonium cation.",
    0,
    "Because arenediazonium ions are weak electrophiles, they only couple with aromatic rings containing exceptionally strong $+M$ activating groups like $-\\text{OH}, -\\text{O}^-$, or $-\\text{NR}_2$. Rings containing alkyl substituents ($+I$) or no substituents are unreactive."
  ),
  ar(
    "When $o$-methylaniline is diazotized and warmed with water, $o$-cresol is obtained as the principal product.",
    "Warming an aqueous diazonium salt results in replacement of the diazonium group by a hydroxyl group via nucleophilic substitution by water.",
    0,
    "The sequence $\\text{ArNH}_2 \\xrightarrow{\\text{NaNO}_2/\\text{HCl}} \\text{ArN}_2^+\\text{Cl}^- \\xrightarrow{\\text{H}_2\\text{O},\\;\\Delta} \\text{ArOH}$ cleanly converts an aromatic amino group into a phenolic hydroxyl group with retention of ring position."
  ),
  ar(
    "During Sandmeyer reaction, cuprous chloride catalyzes the reaction through a single-electron transfer (SET) radical mechanism.",
    "Cuprous ion ($\\text{Cu}^+$) reduces the diazonium cation to an aryl radical while being oxidized to cupric ion ($\\text{Cu}^{2+}$), which subsequently transfers a chlorine atom to the aryl radical.",
    0,
    "Mechanistic studies confirm that $\\text{Cu}^+$ acts as a one-electron reducing agent: $\\text{ArN}_2^+ + \\text{Cu}^+ \\rightarrow \\text{Ar}^\\bullet + \\text{N}_2 + \\text{Cu}^{2+}$. The aryl radical then abstracts halogen from $\\text{CuCl}_2$ to yield $\\text{ArCl}$ and regenerate $\\text{Cu}^+$."
  ),
  ar(
    "The azo dye formed by coupling benzenediazonium chloride with phenol is called $p$-hydroxyazobenzene and is orange in color.",
    "Extended conjugation between the two benzene rings through the azo chromophore shifts absorption to longer wavelengths in the blue region, imparting an orange complementary color.",
    0,
    "The $\\pi$-electrons of the two phenyl rings and the $-\\text{N}=\\text{N}-$ bridge form a continuous conjugated system. Light absorption occurs at $\\sim 430\\text{ nm}$ (blue-violet), transmitting the complementary orange wavelength."
  ),
  ar(
    "Azo compounds can undergo reduction by sodium dithionite ($\\text{Na}_2\\text{S}_2\\text{O}_4$) or tin and hydrochloric acid to yield two primary aromatic amine molecules.",
    "Reductive cleavage breaks the azo linkage ($-\\text{N}=\\text{N}-$) completely into two primary amino groups.",
    0,
    "Reduction of an azo compound $\\text{Ar}-\\text{N}=\\text{N}-\\text{Ar}'$ with reducing agents like $\\text{Na}_2\\text{S}_2\\text{O}_4$ or $\\text{Sn}/\\text{HCl}$ cleaves the nitrogen-nitrogen double bond, producing two molecules of primary aromatic amines: $\\text{ArNH}_2 + \\text{Ar}'\\text{NH}_2$."
  ),
  ar(
    "The reaction of benzenediazonium chloride with hypophosphorous acid is carried out in the presence of cuprous ion as a catalyst.",
    "Cuprous ions accelerate the single electron transfer from hypophosphite to the diazonium cation to produce aryl radicals.",
    0,
    "The reduction by $\\text{H}_3\\text{PO}_2$ proceeds via a radical chain mechanism. Traces of $\\text{Cu}^+$ act as an initiator by facilitating electron transfer to generate phenyl radicals, ensuring rapid and complete deamination."
  ),

  // --- 8 MCQs ---
  mcq(
    "In the coupling reaction of benzenediazonium chloride with phenol, what is the optimum $\\text{pH}$ of the reaction medium and the color of the dye obtained?",
    [
      "$\\text{pH } 9-10$, Orange",
      "$\\text{pH } 4-5$, Yellow",
      "$\\text{pH } 1-2$, Red",
      "$\\text{pH } 7.0$, Green"
    ],
    0,
    "Coupling of benzenediazonium chloride with phenol requires a mildly alkaline medium ($\\text{pH } 9-10$) to convert phenol to the reactive phenoxide ion, yielding $p$-hydroxyazobenzene, an orange dye."
  ),
  mcq(
    "Which of the following reagents is used to convert benzenediazonium chloride into fluorobenzene in the Balz-Schiemann reaction?",
    [
      "$\\text{HBF}_4$ followed by heating",
      "$\\text{NaF} / \\text{HCl}$ at room temperature",
      "$\\text{CuF}_2 / \\Delta$",
      "$\\text{HF} / \\text{pyridine}$ at $0^\\circ\\text{C}$"
    ],
    0,
    "Treatment of benzenediazonium chloride with fluoroboric acid ($\\text{HBF}_4$) precipitates benzenediazonium fluoroborate ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^-$), which upon dry thermal decomposition yields fluorobenzene, $\\text{BF}_3$, and $\\text{N}_2$."
  ),
  mcq(
    "Which of the following compounds is produced when benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) in the presence of water?",
    [
      "Benzene",
      "Phenol",
      "Chlorobenzene",
      "Phenylhydrazine"
    ],
    0,
    "Hypophosphorous acid reduces benzenediazonium chloride to benzene with the liberation of nitrogen gas: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_6 + \\text{N}_2 + \\text{H}_3\\text{PO}_3 + \\text{HCl}$."
  ),
  mcq(
    "When benzenediazonium chloride is treated with potassium iodide ($\\text{KI}$), the major organic product formed is:",
    [
      "Iodobenzene",
      "Phenol",
      "Chlorobenzene",
      "Benzene"
    ],
    0,
    "Aqueous potassium iodide reacts smoothly with benzenediazonium chloride at room temperature without requiring a copper catalyst to give iodobenzene with quantitative evolution of nitrogen gas."
  ),
  mcq(
    "What is the correct sequence of reactions to convert aniline into $1,3,5\\text{-tribromobenzene}$?",
    [
      "$\\text{Br}_2/\\text{H}_2\\text{O} \\rightarrow \\text{NaNO}_2/\\text{HCl } (0-5^\\circ\\text{C}) \\rightarrow \\text{H}_3\\text{PO}_2/\\text{H}_2\\text{O}$",
      "$\\text{NaNO}_2/\\text{HCl } (0-5^\\circ\\text{C}) \\rightarrow \\text{CuBr}/\\text{HBr} \\rightarrow \\text{Br}_2/\\text{Fe}$",
      "$\\text{CH}_3\\text{COCl} \\rightarrow \\text{Br}_2/\\text{CH}_3\\text{COOH} \\rightarrow \\text{H}_3\\text{O}^+ \\rightarrow \\text{H}_3\\text{PO}_2$",
      "$\\text{Br}_2/\\text{Fe} \\rightarrow \\text{HNO}_3/\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Sn}/\\text{HCl}$"
    ],
    0,
    "Aniline is first treated with bromine water to give 2,4,6-tribromoaniline. Diazotization with $\\text{NaNO}_2/\\text{HCl}$ produces 2,4,6-tribromobenzenediazonium chloride. Reduction with $\\text{H}_3\\text{PO}_2$ removes the diazonium group, leaving 1,3,5-tribromobenzene."
  ),
  mcq(
    "An organic compound $X$ ($\\text{C}_6\\text{H}_7\\text{N}$) is treated with $\\text{NaNO}_2/\\text{HCl}$ at $273-278\\text{ K}$ to give $Y$. When $Y$ is treated with alkaline $\\beta$-naphthol, a brilliant scarlet-red precipitate is formed. Compound $X$ is:",
    [
      "Aniline",
      "Benzylamine",
      "N-Methylaniline",
      "o-Toluidine"
    ],
    0,
    "Aniline ($\\text{C}_6\\text{H}_7\\text{N}$) forms benzenediazonium chloride ($Y$) upon cold diazotization. Diazonium salts couple with 2-naphthol in alkaline medium to give 1-phenylazo-2-naphthol, a scarlet-red dye. This is the characteristic azo dye test for aromatic primary amines."
  ),
  mcq(
    "Which of the following diazonium reactions is known as the Sandmeyer reaction?",
    [
      "$\\text{ArN}_2^+\\text{Cl}^- \\xrightarrow{\\text{CuCl}/\\text{HCl}} \\text{ArCl} + \\text{N}_2$",
      "$\\text{ArN}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}/\\text{HCl}} \\text{ArCl} + \\text{N}_2$",
      "$\\text{ArN}_2^+\\text{Cl}^- \\xrightarrow{\\text{KI}} \\text{ArI} + \\text{N}_2$",
      "$\\text{ArN}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\text{ArF} + \\text{BF}_3 + \\text{N}_2$"
    ],
    0,
    "The Sandmeyer reaction specifically refers to the replacement of a diazonium group by chlorine, bromine, or cyanide using cuprous salts ($\\text{CuCl}, \\text{CuBr}, \\text{CuCN}$) dissolved in the corresponding halogen acid or cyanide solution."
  ),
  mcq(
    "What is the organic product formed when benzenediazonium chloride is heated with ethanol?",
    [
      "Benzene and ethanal",
      "Phenetole and nitrogen",
      "Chlorobenzene and ethanol",
      "Phenol and ethane"
    ],
    0,
    "Ethanol acts as a mild reducing agent toward arenediazonium salts, transferring a hydride ion to form benzene and being oxidized itself to ethanal (acetaldehyde): $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{CH}_3\\text{CH}_2\\text{OH} \\rightarrow \\text{C}_6\\text{H}_6 + \\text{N}_2 + \\text{CH}_3\\text{CHO} + \\text{HCl}$."
  ),

  // --- 13 NUMERICAL QUESTIONS ---
  num(
    "How many nitrogen atoms are present in one molecule of the azo dye $p$-hydroxyazobenzene formed by coupling benzenediazonium chloride with phenol?",
    2,
    "The formula of $p$-hydroxyazobenzene is $\\text{C}_6\\text{H}_5-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_4\\text{OH}$. The molecule contains exactly two nitrogen atoms forming the central azo linkage ($-\\text{N}=\\text{N}-$)."
  ),
  num(
    "Calculate the volume of nitrogen gas ($\\text{N}_2$) in liters evolved at STP ($273\\text{ K}, 1\\text{ atm}$) when $0.25\\text{ mole}$ of benzenediazonium chloride undergoes complete reaction with warm water.",
    6,
    "The reaction is $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_5\\text{OH} + \\text{N}_2\\uparrow + \\text{HCl}$. Exactly $1\\text{ mole}$ of diazonium salt produces $1\\text{ mole}$ of $\\text{N}_2$. For $0.25\\text{ mole}$, volume at STP $= 0.25 \\times 22.4\\text{ L} = 5.6\\text{ L}$, which rounds to the nearest integer 6."
  ),
  num(
    "What is the oxidation state of copper in the cuprous chloride ($\\text{CuCl}$) catalyst used in the Sandmeyer reaction?",
    1,
    "In cuprous chloride ($\\text{CuCl}$), chlorine has oxidation state $-1$. Therefore, copper is in the $+1$ oxidation state."
  ),
  num(
    "How many bromine atoms are present in one molecule of $1,3,5\\text{-tribromobenzene}$ prepared from aniline?",
    3,
    "As indicated by the IUPAC name 1,3,5-tribromobenzene ($\\text{C}_6\\text{H}_3\\text{Br}_3$), there are exactly 3 bromine atoms substituted on the benzene ring."
  ),
  num(
    "How many $\\pi$-bonds are present in a molecule of azobenzene ($\\text{C}_6\\text{H}_5-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5$)?",
    7,
    "In azobenzene, each phenyl ring contains 3 $\\pi$-bonds ($2 \\times 3 = 6$), and the central azo double bond ($-\\text{N}=\\text{N}-$) contains 1 $\\pi$-bond. Total $\\pi$-bonds $= 6 + 1 = 7$."
  ),
  num(
    "Calculate the molecular mass (in $\\text{g/mol}$) of the gas evolved during the thermal decomposition of benzenediazonium fluoroborate in the Balz-Schiemann reaction (atomic mass: $\\text{N} = 14$).",
    28,
    "The reaction is $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{F} + \\text{BF}_3 + \\text{N}_2\\uparrow$. The primary gas evolved is dinitrogen ($\\text{N}_2$), with molecular mass $2 \\times 14 = 28\\text{ g/mol}$."
  ),
  num(
    "What is the degree of unsaturation (double bond equivalent, DBE) of $p$-hydroxyazobenzene ($\\text{C}_{12}\\text{H}_{10}\\text{N}_2\\text{O}$)?",
    9,
    "Using $\\text{DBE} = C - \\frac{H}{2} + \\frac{N}{2} + 1$: for $\\text{C}_{12}\\text{H}_{10}\\text{N}_2\\text{O}$, $\\text{DBE} = 12 - \\frac{10}{2} + \\frac{2}{2} + 1 = 12 - 5 + 1 + 1 = 9$ (two aromatic rings $= 2 \\times 4 = 8$ plus one azo double bond $= 1$)."
  ),
  num(
    "How many moles of $\\text{Br}_2$ are required to convert $1\\text{ mole}$ of aniline into $2,4,6\\text{-tribromoaniline}$?",
    3,
    "The bromination reaction is $\\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{Br}_2 \\rightarrow \\text{C}_6\\text{H}_2\\text{Br}_3\\text{NH}_2 + 3\\text{HBr}$. Exactly 3 moles of bromine ($\\text{Br}_2$) are consumed per mole of aniline."
  ),
  num(
    "How many moles of hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) are stoichiometrically required to reduce $2\\text{ moles}$ of benzenediazonium chloride to benzene?",
    2,
    "The balanced reaction is $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_6 + \\text{N}_2 + \\text{H}_3\\text{PO}_3 + \\text{HCl}$. The stoichiometric ratio is $1:1$, so 2 moles of $\\text{H}_3\\text{PO}_2$ are required for 2 moles of diazonium salt."
  ),
  num(
    "What is the total number of carbon atoms in one molecule of the dye formed by coupling benzenediazonium chloride with 2-naphthol ($\\beta$-naphthol)?",
    16,
    "Benzenediazonium group contributes a benzene ring (6 carbons), and 2-naphthol contributes a naphthalene core (10 carbons). The resulting dye 1-phenylazo-2-naphthol has $6 + 10 = 16$ carbon atoms."
  ),
  num(
    "When $0.1\\text{ mole}$ of aniline is converted to fluorobenzene via diazotization and Balz-Schiemann reaction with an overall yield of $70\\%$, how many grams of fluorobenzene (molar mass $= 96\\text{ g/mol}$) are obtained? (Round to one decimal place / nearest integer).",
    7,
    "Theoretical yield $= 0.10\\text{ mol} \\times 96\\text{ g/mol} = 9.6\\text{ g}$. Actual yield at $70\\% = 9.6 \\times 0.70 = 6.72\\text{ g}$, which rounds to the nearest integer 7."
  ),
  num(
    "In the coupling reaction of benzenediazonium chloride with phenol, what is the integer $\\text{pH}$ value within the optimal range ($9-10$) commonly targeted for maximum reaction rate?",
    9,
    "The optimal alkaline $\\text{pH}$ range for phenol coupling is $9-10$. Taking the lower bound integer yields 9."
  ),
  num(
    "How many total covalent bonds (including single and multiple bonds) link the two aromatic rings in azobenzene ($\\text{C}_6\\text{H}_5-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5$)?",
    3,
    "The bridge consists of one $\\text{C}-\\text{N}$ single bond, one $\\text{N}=\\text{N}$ double bond (comprising 2 shared pairs), and one $\\text{N}-\\text{C}$ single bond, giving a total of $1 + 2 + 1 = 4$ bonding electron pairs, or 3 distinct bond linkages between atoms."
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

console.log(`Part 3 total questions: ${questions.length}`);
console.log(`Part 3 KaTeX errors: ${totalKatexErrors}`);

if (totalKatexErrors === 0 && questions.length === 47) {
  const outPath = path.join(__dirname, "data_nitrogen_part3.js");
  fs.writeFileSync(outPath, "module.exports = " + JSON.stringify(questions, null, 2) + ";\n");
  console.log("Successfully wrote", outPath);
} else {
  console.error("Validation failed! Check errors.");
  process.exit(1);
}
