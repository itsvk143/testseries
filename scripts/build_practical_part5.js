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

const subtopic = "Salt analysis (cation and anion systematic detection)";
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
    "In qualitative cation analysis, $\\text{NH}_4\\text{Cl}$ is added before adding $\\text{NH}_4\\text{OH}$ for the precipitation of Group III cations.",
    "Addition of $\\text{NH}_4\\text{Cl}$ suppresses the ionization of $\\text{NH}_4\\text{OH}$ via the common ion effect, preventing the premature precipitation of Group IV and higher cations as hydroxides.",
    0,
    "The common ion $\\text{NH}_4^+$ from strong electrolyte $\\text{NH}_4\\text{Cl}$ suppresses the dissociation of weak base $\\text{NH}_4\\text{OH}$. The reduced $[\\text{OH}^-]$ exceeds the low $K_{sp}$ of Group III hydroxides $(\\text{Fe}^{3+}, \\text{Al}^{3+}, \\text{Cr}^{3+})$, but is insufficient to precipitate higher group cations like $\\text{Zn}^{2+}$ or $\\text{Mg}^{2+}$."
  ),
  ar(
    "Group II cations are precipitated by passing $\\text{H}_2\\text{S}$ gas in the presence of dilute $\\text{HCl}$.",
    "Dilute $\\text{HCl}$ decreases the concentration of sulphide ions $(\\text{S}^{2-})$ by the common ion effect, ensuring only cations with very low $K_{sp}$ precipitate.",
    0,
    "The high $[\text{H}^+]$ from dilute $\\text{HCl}$ suppresses the ionization of weak diprotic acid $\\text{H}_2\\text{S}$ $(\\text{H}_2\\text{S} \\rightleftharpoons 2\\text{H}^+ + \\text{S}^{2-})$. The low $[\\text{S}^{2-}]$ is sufficient to exceed the $K_{sp}$ of Group II sulphides $(\\text{CuS}, \\text{PbS}, \\text{As}_2\\text{S}_3)$, but cannot precipitate Group IV sulphides."
  ),
  ar(
    "The chromyl chloride test is used to confirm the presence of chloride ions in a solid salt sample.",
    "When a solid chloride is heated with solid potassium dichromate and concentrated $\\text{H}_2\\text{SO}_4$, deep red vapors of chromyl chloride $(\\text{CrO}_2\\text{Cl}_2)$ are evolved.",
    0,
    "Reaction: $4\\text{NaCl} + \\text{K}_2\\text{Cr}_2\\text{O}_7 + 6\\text{H}_2\\text{SO}_4 \\to 2\\text{CrO}_2\\text{Cl}_2\\uparrow + 4\\text{NaHSO}_4 + 2\\text{KHSO}_4 + 3\\text{H}_2\\text{O}$. Passing the red $\\text{CrO}_2\\text{Cl}_2$ vapors into aqueous $\\text{NaOH}$ gives a yellow solution of $\\text{Na}_2\\text{CrO}_4$, which yields a yellow precipitate of $\\text{PbCrO}_4$ with lead acetate."
  ),
  ar(
    "Covalent or insoluble chlorides such as $\\text{AgCl}, \\text{Hg}_2\\text{Cl}_2, \\text{PbCl}_2,$ and $\\text{SnCl}_2$ do not respond to the chromyl chloride test.",
    "These chlorides do not generate sufficient free chloride ions to form chromyl chloride.",
    0,
    "Insoluble or primarily covalent chlorides $(\\text{AgCl}, \\text{Hg}_2\\text{Cl}_2, \\text{PbCl}_2, \\text{HgCl}_2)$ fail to furnish free chloride ions upon treatment with $\\text{K}_2\\text{Cr}_2\\text{O}_7$ and conc. $\\text{H}_2\\text{SO}_4$, giving a negative chromyl chloride test."
  ),
  ar(
    "In the brown ring test for nitrate ions, concentrated $\\text{H}_2\\text{SO}_4$ is added slowly along the side of the inclined test tube.",
    "Concentrated $\\text{H}_2\\text{SO}_4$ is denser than water and settles to form a distinct bottom layer without excessive heat generation that could decompose the brown ring complex.",
    0,
    "The brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$ is thermally unstable. Adding dense conc. $\\text{H}_2\\text{SO}_4$ down the tube wall creates a cool interface where the brown ring forms smoothly without decomposing."
  ),
  ar(
    "In the brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$, the formal oxidation state of iron is $+1$.",
    "Nitric oxide acts as a neutral ligand donating a pair of electrons to the central iron atom.",
    2,
    "Assertion (A) is true: magnetic and spectroscopic data demonstrate that iron exists in the $+1$ oxidation state $(d^7)$ while $\\text{NO}$ coordinates as the nitrosonium cation $(\\text{NO}^+)$. Reason (R) is false: $\\text{NO}$ transfers an electron to $\\text{Fe}^{2+}$ forming $\\text{Fe}^+$ and $\\text{NO}^+$."
  ),
  ar(
    "Nickel(II) ion forms a bright rosy-red precipitate with dimethylglyoxime (DMG) in ammoniacal medium.",
    "The bis(dimethylglyoximato)nickel(II) complex is stabilized by strong intramolecular hydrogen bonding.",
    0,
    "$\\text{Ni}^{2+}$ reacts with DMG in basic ammoniacal medium to form a square planar chelate $[\\text{Ni}(\\text{dmg})_2]$ stabilized by two symmetrical $\\text{O-H}\\cdots\\text{O}$ intramolecular hydrogen bonds."
  ),
  ar(
    "$\\text{PbCl}_2$ precipitate dissolves in hot water and reappears as glistening white crystals upon cooling.",
    "Lead(II) chloride has a significantly higher solubility in boiling water than in cold water.",
    0,
    "$\\text{PbCl}_2$ is sparingly soluble at room temperature $(K_{sp} = 1.7 \\times 10^{-5})$ but dissolves readily in boiling water. Upon cooling, it recrystallizes as needle-shaped crystals."
  ),
  ar(
    "A solution of sodium nitroprusside gives an intense purple-violet coloration when treated with sodium sulphide.",
    "Sulphide ion coordinates to the nitrosyl ligand of nitroprusside to form the thionitroprusside complex ion $[\\text{Fe}(\\text{CN})_5(\\text{NOS})]^{4-}$.",
    0,
    "Reaction: $[\\text{Fe}(\\text{CN})_5\\text{NO}]^{2-} + \\text{S}^{2-} \\to [\\text{Fe}(\\text{CN})_5(\\text{NOS})]^{4-}$. The purple coloration confirms the presence of sulphide ion."
  ),
  ar(
    "Ammonium molybdate reagent produces a canary yellow precipitate with phosphate ions upon heating with concentrated nitric acid.",
    "The canary yellow precipitate formed is ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$.",
    0,
    "Orthophosphate reacts with ammonium molybdate in nitric acid medium: $\\text{HPO}_4^{2-} + 12\\text{MoO}_4^{2-} + 3\\text{NH}_4^+ + 23\\text{H}^+ \\to (\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]\\downarrow + 12\\text{H}_2\\text{O}$, producing a characteristic canary yellow precipitate."
  ),
  ar(
    "Potassium ions impart a violet (lilac) color to the non-luminous Bunsen flame when viewed directly.",
    "Potassium salts are viewed through cobalt blue glass to filter out yellow emissions from trace sodium impurities.",
    1,
    "Both statements are chemically true: $\\text{K}^+$ imparts a lilac flame color, and cobalt glass absorbs the bright yellow light of ubiquitous trace $\\text{Na}^+$ impurities to reveal the violet flame clearly. However, (R) is a technique explanation for observation, not the fundamental physical reason why $\\text{K}^+$ emits violet light."
  ),
  ar(
    "A colorless solution of $\\text{Cu}^{2+}$ turns deep blue upon adding excess aqueous ammonia.",
    "Ammonia molecules displace water ligands to form the square planar tetraamminecopper(II) complex $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$.",
    0,
    "Addition of excess ammonia dissolves the initial pale blue precipitate of $\\text{Cu(OH)}_2$ to give the intensely colored deep blue $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ complex."
  ),
  ar(
    "$\\text{Fe}^{3+}$ ions produce an intense blood-red coloration with potassium thiocyanate solution.",
    "The blood-red coloration is due to the formation of the thiocyanatoiron(III) complex $[\\text{Fe}(\\text{SCN})]^{2+}$.",
    0,
    "$\\text{Fe}^{3+}$ coordinates with thiocyanate $(\\text{SCN}^-)$ to form $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{SCN})]^{2+}$, which exhibits an intense blood-red color, confirming ferric ions."
  ),
  ar(
    "Copper(II) ions yield a chocolate brown precipitate with potassium ferrocyanide solution.",
    "The chocolate brown precipitate consists of cupric ferrocyanide, $\\text{Cu}_2[\\text{Fe}(\\text{CN})_6]$.",
    0,
    "Reaction: $2\\text{Cu}^{2+} + [\\text{Fe}(\\text{CN})_6]^{4-} \\to \\text{Cu}_2[\\text{Fe}(\\text{CN})_6]\\downarrow$ (chocolate brown precipitate), a confirmatory test for $\\text{Cu}^{2+}$."
  ),
  ar(
    "Magnesium ions are precipitated in Group V along with $\\text{Ba}^{2+}, \\text{Sr}^{2+},$ and $\\text{Ca}^{2+}$.",
    "Magnesium carbonate has a very low solubility product and precipitates readily with ammonium carbonate.",
    3,
    "Assertion (A) is false: $\\text{Mg}^{2+}$ is placed in Group VI, not Group V. Reason (R) is false: $\\text{MgCO}_3$ has a relatively high $K_{sp}$ and is kept in solution in Group V by the presence of $\\text{NH}_4\\text{Cl}$."
  ),
  ar(
    "In the flame test, a platinum wire is cleaned by dipping into concentrated hydrochloric acid and heating in the flame.",
    "Concentrated hydrochloric acid converts non-volatile metal salts into volatile metal chlorides that impart vivid flame colors.",
    0,
    "Metal chlorides are generally more volatile than sulphates, oxides, or carbonates. Dipping the loop into conc. $\\text{HCl}$ forms volatile chlorides that vaporize and excite in the flame."
  ),
  ar(
    "Addition of barium chloride to an aqueous sulphate solution yields a white precipitate of $\\text{BaSO}_4$ that is insoluble in concentrated $\\text{HCl}$.",
    "Barium sulphate has an extremely low solubility product and sulphuric acid is a strong acid, preventing dissolution by excess $\\text{H}^+$.",
    0,
    "$\\text{BaSO}_4$ has $K_{sp} \\approx 1.1 \\times 10^{-10}$ and sulphate is the conjugate base of a strong acid $(\\text{HSO}_4^- / \\text{H}_2\\text{SO}_4)$, so adding $\\text{H}^+$ cannot protonate $\\text{SO}_4^{2-}$ sufficiently to dissolve the precipitate."
  ),
  ar(
    "Nessler's reagent gives a brown precipitate or coloration with ammonium salts in alkaline medium.",
    "Nessler's reagent is an alkaline solution of potassium tetraiodomercurate(II), $\\text{K}_2[\\text{HgI}_4]$.",
    1,
    "Both statements are true. Nessler's reagent is alkaline $\\text{K}_2[\\text{HgI}_4]$, and it reacts with $\\text{NH}_4^+$ to form a brown precipitate of the iodide of Millon's base $(\\text{H}_2\\text{N-Hg-O-Hg-I})$. However, simply stating its formula does not explain the chemical mechanism of the brown color formation."
  ),
  ar(
    "Passing $\\text{CO}_2$ gas into clear lime water turns it milky, but the milkiness disappears on prolonged passage of $\\text{CO}_2$.",
    "The initial milkiness is due to insoluble calcium carbonate, which on reacting with excess $\\text{CO}_2$ and water converts into soluble calcium bicarbonate.",
    0,
    "$\\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O}$ (milky). With excess $\\text{CO}_2$: $\\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{Ca(HCO}_3)_2$ (soluble, clear)."
  ),
  ar(
    "Sulphite ions $(\\text{SO}_3^{2-})$ turn acidified potassium dichromate paper green.",
    "Sulphite is an oxidizing agent that oxidizes chromium(III) to chromium(VI).",
    2,
    "Assertion (A) is true: $\\text{SO}_2$ evolved from sulphite reduces orange $\\text{Cr}_2\\text{O}_7^{2-}$ to green $\\text{Cr}^{3+}$. Reason (R) is false: sulphite is a reducing agent (it is oxidized to sulphate, while $\\text{Cr(VI)}$ is reduced to $\\text{Cr(III)}$)."
  ),
  ar(
    "Group I cation analysis uses dilute hydrochloric acid as the precipitating reagent.",
    "The chlorides of $\\text{Pb}^{2+}, \\text{Ag}^+,$ and $\\text{Hg}_2^{2+}$ have low solubility products and precipitate from acidic solutions.",
    0,
    "Only Group I cations $(\\text{Pb}^{2+}, \\text{Ag}^+, \\text{Hg}_2^{2+})$ form insoluble chlorides upon adding dilute $\\text{HCl}$, while other metal chlorides remain dissolved."
  ),
  ar(
    "The lake test confirms the presence of aluminium ions $(\\text{Al}^{3+})$.",
    "Gelatinous aluminium hydroxide precipitate strongly adsorbs blue litmus dye, forming a floating blue precipitate (lake).",
    0,
    "In the lake test, gelatinous $\\text{Al(OH)}_3$ precipitate adsorbs blue litmus or aluminon dye, forming a distinct blue lake floating in a clear solution."
  ),
  ar(
    "In the borax bead test, copper salts impart a blue color to the bead in the oxidizing flame.",
    "Copper(II) metaborate, $\\text{Cu(BO}_2)_2$, is formed in the oxidizing flame and has a characteristic blue color.",
    0,
    "Heating with borax $(\\text{Na}_2\\text{B}_4\\text{O}_7)$ forms glassy boric anhydride $(\\text{B}_2\\text{O}_3)$, which reacts with $\\text{CuO}$ in an oxidizing flame to produce blue $\\text{Cu(BO}_2)_2$."
  ),
  ar(
    "A salt containing $\\text{Zn}^{2+}$ gives a white precipitate with $\\text{NaOH}$ that dissolves in excess $\\text{NaOH}$.",
    "Zinc hydroxide is amphoteric and dissolves in excess sodium hydroxide to form the soluble sodium zincate complex $[\\text{Zn}(\\text{OH})_4]^{2-}$.",
    0,
    "$\\text{Zn}^{2+} + 2\\text{OH}^- \\to \\text{Zn(OH)}_2\\downarrow$. With excess base: $\\text{Zn(OH)}_2 + 2\\text{OH}^- \\to [\\text{Zn}(\\text{OH})_4]^{2-}$ (tetrahydroxozincate(II)), demonstrating amphoterism."
  ),
  ar(
    "Cobalt glass is used to observe the lilac flame test color of potassium.",
    "Cobalt glass absorbs the intense yellow emission light of sodium while transmitting the violet light of potassium.",
    0,
    "Trace sodium is present in almost all laboratory reagents and glass, masking the faint lilac flame of potassium with yellow light. Cobalt blue glass selectively absorbs yellow wavelengths while transmitting violet."
  ),
  ar(
    "Ferric ions produce a Prussian blue precipitate when treated with potassium ferrocyanide.",
    "Prussian blue has the chemical formula $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$.",
    0,
    "Reaction: $4\\text{Fe}^{3+} + 3[\\text{Fe}(\\text{CN})_6]^{4-} \\to \\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3\\downarrow$ (Prussian blue, iron(III) hexacyanoferrate(II))."
  ),

  // ----------------------------------------------------
  // 8 MCQ QUESTIONS
  // ----------------------------------------------------
  mcq(
    "In the chromyl chloride test for chloride ions, which of the following compounds is responsible for the final yellow precipitate upon adding lead acetate?",
    [
      "$\\text{CrO}_2\\text{Cl}_2$",
      "$\\text{PbCrO}_4$",
      "$\\text{PbCl}_2$",
      "$\\text{Na}_2\\text{CrO}_4$"
    ],
    1,
    "Chromyl chloride $(\\text{CrO}_2\\text{Cl}_2)$ dissolves in $\\text{NaOH}$ to form yellow sodium chromate $(\\text{Na}_2\\text{CrO}_4)$, which on acidification with acetic acid and addition of lead acetate precipitates as bright yellow lead chromate $(\\text{PbCrO}_4)$."
  ),
  mcq(
    "Which of the following cation groups is correctly paired with its group reagent in qualitative inorganic analysis?",
    [
      "Group I : $\\text{H}_2\\text{S}$ gas in alkaline medium",
      "Group II : $\\text{H}_2\\text{S}$ gas in presence of dilute $\\text{HCl}$",
      "Group III : $(\\text{NH}_4)_2\\text{CO}_3$ in presence of $\\text{NH}_4\\text{Cl}$",
      "Group IV : Dilute $\\text{HCl}$ alone"
    ],
    1,
    "Group II cations $(\\text{Pb}^{2+}, \\text{Cu}^{2+}, \\text{As}^{3+}, \\text{Bi}^{3+}, \\text{Cd}^{2+})$ are precipitated as sulphides by passing $\\text{H}_2\\text{S}$ in an acidic medium $(\\text{dilute HCl})$."
  ),
  mcq(
    "The brown ring test for nitrate ions involves the formation of a coordination complex. What is the chemical formula of this complex?",
    [
      "$[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$",
      "$[\\text{Fe}(\\text{H}_2\\text{O})_4(\\text{NO})_2]^{3+}$",
      "$[\\text{Fe}(\\text{NO}_2)_6]^{3-}$",
      "$[\\text{Fe}(\\text{H}_2\\text{O})_6]^{3+}$"
    ],
    0,
    "The brown ring complex formed at the liquid junction has the formula $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$ (pentaaquanitrosyliron(I) sulphate)."
  ),
  mcq(
    "Which of the following salts gives a brick-red color in the flame test?",
    [
      "$\\text{SrCl}_2$",
      "$\\text{CaCl}_2$",
      "$\\text{BaCl}_2$",
      "$\\text{CuCl}_2$"
    ],
    1,
    "Flame colors: $\\text{Ca}^{2+}$ gives brick red, $\\text{Sr}^{2+}$ gives crimson red, $\\text{Ba}^{2+}$ gives apple green, and $\\text{Cu}^{2+}$ gives bluish green."
  ),
  mcq(
    "An aqueous solution of a salt gives a white precipitate with $\\text{BaCl}_2$ that is completely insoluble in concentrated $\\text{HCl}$. The anion present is:",
    [
      "$\\text{CO}_3^{2-}$",
      "$\\text{SO}_3^{2-}$",
      "$\\text{SO}_4^{2-}$",
      "$\\text{PO}_4^{3-}$"
    ],
    2,
    "$\\text{BaSO}_4$ is insoluble in concentrated $\\text{HCl}$. In contrast, $\\text{BaCO}_3, \\text{BaSO}_3,$ and $\\text{Ba}_3(\\text{PO}_4)_2$ dissolve readily in concentrated acids with gas evolution or complete ionization."
  ),
  mcq(
    "What is the role of adding $\\text{NH}_4\\text{Cl}$ prior to $\\text{NH}_4\\text{OH}$ during the precipitation of Group III cations?",
    [
      "To increase the concentration of $\\text{OH}^-$ ions",
      "To decrease the concentration of $\\text{OH}^-$ ions via common ion effect",
      "To act as an oxidizing agent for $\\text{Fe}^{2+}$",
      "To dissolve the Group III hydroxides as complex ions"
    ],
    1,
    "The common ammonium ion $(\\text{NH}_4^+)$ suppresses the dissociation of $\\text{NH}_4\\text{OH}$, reducing $[\\text{OH}^-]$ so that only the very sparingly soluble hydroxides of Group III precipitate, preventing Group IV cations from precipitating."
  ),
  mcq(
    "Nessler's reagent is used for the detection of which of the following species?",
    [
      "$\\text{NH}_4^+$",
      "$\\text{NO}_3^-$",
      "$\\text{SO}_4^{2-}$",
      "$\\text{Cl}^-$"
    ],
    0,
    "Nessler's reagent (alkaline potassium tetraiodomercurate(II), $\\text{K}_2[\\text{HgI}_4]$) reacts with ammonium ion $(\\text{NH}_4^+)$ or ammonia to give a reddish-brown precipitate of iodide of Millon's base."
  ),
  mcq(
    "Which of the following reagents can be used to separate $\\text{Fe}^{3+}$ from $\\text{Al}^{3+}$ in an aqueous solution of their mixed hydroxides?",
    [
      "Excess dilute $\\text{HCl}$",
      "Excess aqueous $\\text{NaOH}$",
      "Excess $\\text{NH}_4\\text{OH}$",
      "$\\text{H}_2\\text{S}$ gas"
    ],
    1,
    "$\\text{Al(OH)}_3$ is amphoteric and dissolves in excess $\\text{NaOH}$ to form soluble sodium aluminate $\\text{Na}[\\text{Al}(\\text{OH})_4]$, whereas basic $\\text{Fe(OH)}_3$ remains undissolved as a reddish-brown precipitate."
  ),

  // ----------------------------------------------------
  // 13 NUMERICAL QUESTIONS
  // ----------------------------------------------------
  num(
    "What is the coordination number of the central nickel atom in the bis(dimethylglyoximato)nickel(II) complex, $[\\text{Ni}(\\text{dmg})_2]$?",
    4,
    "In $[\\text{Ni}(\\text{dmg})_2]$, nickel is coordinated by four nitrogen donor atoms from two bidentate DMG ligands in a square planar geometry. The coordination number is 4."
  ),
  num(
    "What is the oxidation state of iron in the brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$?",
    1,
    "In $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$, the nitrosyl ligand is present as $\\text{NO}^+$. Therefore, the oxidation state of iron is $+1$."
  ),
  num(
    "How many moles of $\\text{Cl}^-$ are contained in 1 mole of chromyl chloride, $\\text{CrO}_2\\text{Cl}_2$?",
    2,
    "In one molecule of $\\text{CrO}_2\\text{Cl}_2$, there are 2 chlorine atoms. Thus, 1 mole contains 2 moles of chlorine."
  ),
  num(
    "What is the oxidation state of chromium in chromyl chloride, $\\text{CrO}_2\\text{Cl}_2$?",
    6,
    "Let $x$ be the oxidation state of Cr: $x + 2(-2) + 2(-1) = 0 \\implies x - 4 - 2 = 0 \\implies x = +6$."
  ),
  num(
    "How many intramolecular hydrogen bonds are present in one molecule of the square planar complex $[\\text{Ni}(\\text{dmg})_2]$?",
    2,
    "In the neutral complex $[\\text{Ni}(\\text{dmg})_2]$, there are two symmetrical $\\text{O-H}\\cdots\\text{O}$ intramolecular hydrogen bonds holding the two DMG ligand planes together."
  ),
  num(
    "In the systematic precipitation of Group III cations as hydroxides, what is the charge on the aluminium cation?",
    3,
    "Aluminium in qualitative analysis is the trivalent cation $\\text{Al}^{3+}$. Its charge is $+3$."
  ),
  num(
    "What is the total number of ions produced by complete dissociation of one formula unit of Prussian blue, $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$, in water?",
    7,
    "$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3 \\to 4\\text{Fe}^{3+} + 3[\\text{Fe}(\\text{CN})_6]^{4-}$. Total ions = $4 + 3 = 7$."
  ),
  num(
    "In the confirmatory test for phosphate ion with ammonium molybdate, $(\\text{NH}_4)_2\\text{MoO}_4$, how many molybdenum $(\\text{Mo})$ atoms are present in one formula unit of ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$?",
    12,
    "The canary yellow precipitate ammonium phosphomolybdate has the formula $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$ containing 12 molybdenum atoms."
  ),
  num(
    "What is the total number of unpaired electrons in the central metal ion of the high-spin brown ring complex $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$ containing $\\text{Fe}^+$ $(3d^7)$?",
    3,
    "In $[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$, $\\text{Fe}^+$ has configuration $3d^7$ ($t_{2g}^5 e_g^2$). It has 3 unpaired electrons ($S = 3/2$, magnetic moment $\\mu \\approx 3.87\\text{ BM}$)."
  ),
  num(
    "In qualitative analysis, which analytical group number $(0, 1, 2, 3, 4, 5, \\text{or } 6)$ contains the barium ion $(\\text{Ba}^{2+})$?",
    5,
    "Barium $(\\text{Ba}^{2+})$ belongs to Group V (the alkaline earth group along with $\\text{Sr}^{2+}$ and $\\text{Ca}^{2+}$), precipitated by $(\\text{NH}_4)_2\\text{CO}_3$."
  ),
  num(
    "In qualitative analysis, which analytical group number $(0, 1, 2, 3, 4, 5, \\text{or } 6)$ contains the ammonium ion $(\\text{NH}_4^+)$?",
    0,
    "Ammonium ion $(\\text{NH}_4^+)$ is analyzed independently in Group 0 (zero group) using $\\text{NaOH}$ or Nessler's reagent."
  ),
  num(
    "What is the coordination number of the copper ion in the deep blue complex ion $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$?",
    4,
    "In $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, the copper(II) ion coordinates to four monodentate ammine $(\\text{NH}_3)$ ligands. The coordination number is 4."
  ),
  num(
    "How many moles of $\\text{HCl}$ are required per mole of $\\text{Pb}^{2+}$ for complete stoichiometric precipitation of lead(II) chloride, $\\text{PbCl}_2$?",
    2,
    "The precipitation reaction is: $\\text{Pb}^{2+} + 2\\text{HCl} \\to \\text{PbCl}_2\\downarrow + 2\\text{H}^+$. Exactly 2 moles of $\\text{HCl}$ are consumed per mole of $\\text{Pb}^{2+}$."
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

console.log(`Part 5 total questions: ${questions.length}`);
console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && questions.length === 47) {
  const outputPath = path.join(__dirname, "data_practical_part5.js");
  const content = `module.exports = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Successfully wrote ${outputPath}`);
} else {
  console.error("Validation failed. Not writing file.");
  process.exit(1);
}
