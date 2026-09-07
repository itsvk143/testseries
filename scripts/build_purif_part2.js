// scripts/build_purif_part2.js
// Subtopic: Qualitative analysis
// Chapter: Purification and Characterisation of Organic Compounds
// 26 Assertion-Reason, 8 MCQ, 13 Numerical = 47 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Qualitative analysis";
const CHAPTER = "Purification and Characterisation of Organic Compounds";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arQuestions = [
  // AR 1
  {
    question: `${arDirections}\n\nAssertion (A): Hydrazine ($\\text{NH}_2\\text{NH}_2$) does not give Lassaigne's test for nitrogen.\nReason (R): Hydrazine does not contain carbon to form sodium cyanide ($\\text{NaCN}$) upon fusion with sodium metal.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "For Lassaigne's test of nitrogen, carbon must be present along with nitrogen in the organic compound so that sodium cyanide ($\\text{NaCN}$) is formed: $\\text{Na} + \\text{C} + \\text{N} \\xrightarrow{\\Delta} \\text{NaCN}$. Since hydrazine contains no carbon, no cyanide ions are formed, and hence it does not give the Prussian blue test. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 2
  {
    question: `${arDirections}\n\nAssertion (A): Prussian blue colour obtained during Lassaigne's test for nitrogen is due to the formation of $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$.\nReason (R): Iron(II) ions in the extract are oxidized to iron(III) ions, which react with hexacyanidoferrate(II) complex.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In the detection of nitrogen, $\\text{NaCN}$ reacts with $\\text{FeSO}_4$ to form sodium ferrocyanide $\\text{Na}_4[\\text{Fe(CN)}_6]$. Acidification with $\\text{H}_2\\text{SO}_4$ and heating oxidizes some $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$ (or $\\text{FeCl}_3$ is added), forming ferric ferrocyanide $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$ (Prussian blue). Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 3
  {
    question: `${arDirections}\n\nAssertion (A): Lassaigne's extract is boiled with concentrated $\\text{HNO}_3$ before testing for halogens with $\\text{AgNO}_3$.\nReason (R): Concentrated $\\text{HNO}_3$ decomposes $\\text{NaCN}$ and $\\text{Na}_2\\text{S}$ to gaseous $\\text{HCN}$ and $\\text{H}_2\\text{S}$, preventing interference with the silver nitrate test.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "If nitrogen or sulfur is present, $\\text{CN}^-$ and $\\text{S}^{2-}$ would react with $\\text{Ag}^+$ to form white $\\text{AgCN}$ or black $\\text{Ag}_2\\text{S}$, interfering with the halogen test. Boiling with conc. $\\text{HNO}_3$ decomposes them: $\\text{NaCN} + \\text{HNO}_3 \\to \\text{NaNO}_3 + \\text{HCN}\\uparrow$ and $\\text{Na}_2\\text{S} + 2\\text{HNO}_3 \\to 2\\text{NaNO}_3 + \\text{H}_2\\text{S}\\uparrow$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 4
  {
    question: `${arDirections}\n\nAssertion (A): In Lassaigne's test for sulfur, addition of sodium nitroprusside to the alkaline sodium extract gives a deep violet colour.\nReason (R): The violet colour is due to the formation of the complex $[\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Sulfide ions ($\\text{S}^{2-}$) from the sodium extract react with sodium nitroprusside: $\\text{Na}_2\\text{S} + \\text{Na}_2[\\text{Fe(CN)}_5\\text{NO}] \\to \\text{Na}_4[\\text{Fe(CN)}_5(\\text{NOS})]$. The complex ion $[\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$ produces an intense violet/purple colour. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 5
  {
    question: `${arDirections}\n\nAssertion (A): When an organic compound containing both nitrogen and sulfur is fused with a limited amount of sodium, a blood-red colouration appears upon adding $\\text{FeCl}_3$.\nReason (R): Sodium thiocyanate ($\\text{NaSCN}$) is formed, which reacts with $\\text{Fe}^{3+}$ ions to give $[\\text{Fe(SCN)}]^{2+}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "When limited sodium is fused with a compound containing both N and S, sodium thiocyanate is formed: $\\text{Na} + \\text{C} + \\text{N} + \\text{S} \\to \\text{NaSCN}$. On addition of $\\text{FeCl}_3$, it forms the ferric thiocyanate complex $[\\text{Fe(SCN)}]^{2+}$, which gives a characteristic blood-red colour. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 6
  {
    question: `${arDirections}\n\nAssertion (A): If excess sodium metal is used during fusion of an organic compound containing both nitrogen and sulfur, no blood-red colour is observed with $\\text{FeCl}_3$.\nReason (R): Excess sodium decomposes sodium thiocyanate into sodium cyanide ($\\text{NaCN}$) and sodium sulfide ($\\text{Na}_2\\text{S}$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "With excess sodium: $\\text{NaSCN} + 2\\text{Na} \\to \\text{NaCN} + \\text{Na}_2\\text{S}$. Thus, thiocyanate ions are completely destroyed, preventing the formation of blood-red $[\\text{Fe(SCN)}]^{2+}$. Instead, separate tests for cyanide (Prussian blue) and sulfide (violet colour) succeed. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 7
  {
    question: `${arDirections}\n\nAssertion (A): Detection of carbon and hydrogen is carried out by heating the organic compound with dry copper(II) oxide ($\\text{CuO}$).\nReason (R): Copper(II) oxide oxidizes carbon to carbon dioxide and hydrogen to water vapor.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "In Liebig's combustion tube test, heating an organic compound with $\\text{CuO}$ oxidizes carbon to $\\text{CO}_2$ (which turns lime water milky) and hydrogen to $\\text{H}_2\\text{O}$ (which turns anhydrous $\\text{CuSO}_4$ from white to blue). Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 8
  {
    question: `${arDirections}\n\nAssertion (A): Anhydrous copper(II) sulfate turns blue upon absorbing moisture produced during the detection of hydrogen.\nReason (R): Copper(II) sulfate reacts with water to form the coordination complex $[\\text{Cu(H}_2\\text{O)}_4]\\text{SO}_4\\cdot\\text{H}_2\\text{O}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Anhydrous $\\text{CuSO}_4$ is white. Upon absorbing water vapor generated from hydrogen oxidation, it forms blue copper(II) sulfate pentahydrate, $[\\text{Cu(H}_2\\text{O)}_4]\\text{SO}_4\\cdot\\text{H}_2\\text{O}$, where $d$-$d$ electronic transitions in the presence of water ligands produce a blue color. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 9
  {
    question: `${arDirections}\n\nAssertion (A): Beilstein's test is a definitive and foolproof confirmatory test for the presence of halogens in organic compounds.\nReason (R): Organic compounds containing halogens burn with a green or bluish-green flame in the presence of copper wire due to volatile copper halides.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "While halogens do form volatile copper halides that impart a green flame to a copper wire (making Reason true), Beilstein's test is NOT a definitive or foolproof test because nitrogenous compounds like urea, thiourea, and pyridine derivatives also give a green flame, and fluorocarbons do not give this test. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 10
  {
    question: `${arDirections}\n\nAssertion (A): In Lassaigne's test for halogens, silver chloride precipitate dissolves readily in aqueous ammonia ($\\text{NH}_4\\text{OH}$).\nReason (R): Silver chloride forms a soluble coordination complex, $[\\text{Ag(NH}_3)_2]\\text{Cl}$, with aqueous ammonia.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "When $\\text{AgCl}$ is treated with $\\text{NH}_4\\text{OH}$, it dissolves completely by forming the soluble diamminesilver(I) complex: $\\text{AgCl} + 2\\text{NH}_4\\text{OH} \\to [\\text{Ag(NH}_3)_2]\\text{Cl} + 2\\text{H}_2\\text{O}$. Both (A) and (R) are true and (R) is the correct explanation of (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 11
  {
    question: `${arDirections}\n\nAssertion (A): Silver iodide precipitate obtained in Lassaigne's halogen test is completely insoluble in concentrated ammonium hydroxide.\nReason (R): The solubility product ($K_{sp}$) of $\\text{AgI}$ is extremely low compared to that of $\\text{AgCl}$ and $\\text{AgBr}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$K_{sp}$ of $\\text{AgI}$ is about $8.5 \\times 10^{-17}$, which is far too low for the concentration of free $\\text{Ag}^+$ to be decreased sufficiently by complexation with ammonia. Thus, $\\text{AgI}$ remains insoluble even in concentrated $\\text{NH}_4\\text{OH}$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 12
  {
    question: `${arDirections}\n\nAssertion (A): In the layer test for bromine and iodine, chlorine water is added along with $\\text{CCl}_4$ or $\\text{CS}_2$.\nReason (R): Chlorine has a higher standard reduction potential than bromine and iodine, allowing it to oxidize bromide and iodide ions to elemental halogens.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Since $E^\\circ(\\text{Cl}_2/\\text{Cl}^-) > E^\\circ(\\text{Br}_2/\\text{Br}^-) > E^\\circ(\\text{I}_2/\\text{I}^-)$, chlorine displaces bromine and iodine from their halides: $2\\text{Br}^- + \\text{Cl}_2 \\to 2\\text{Cl}^- + \\text{Br}_2$ (orange layer in $\\text{CCl}_4$) and $2\\text{I}^- + \\text{Cl}_2 \\to 2\\text{Cl}^- + \\text{I}_2$ (violet layer in $\\text{CCl}_4$). Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 13
  {
    question: `${arDirections}\n\nAssertion (A): Addition of excess chlorine water during the layer test for iodine causes the violet colour in the organic layer to disappear.\nReason (R): Excess chlorine oxidizes elemental iodine ($\\text{I}_2$) to colorless iodic acid ($\\text{HIO}_3$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "When excess chlorine water is added to the violet iodine layer, iodine is further oxidized: $\\text{I}_2 + 5\\text{Cl}_2 + 6\\text{H}_2\\text{O} \\to 2\\text{HIO}_3 + 10\\text{HCl}$. Iodic acid is colorless and water-soluble, causing the violet colour in the organic layer to discharge. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 14
  {
    question: `${arDirections}\n\nAssertion (A): For detecting phosphorus in an organic compound, the substance is fused with sodium peroxide ($\\text{Na}_2\\text{O}_2$).\nReason (R): Sodium peroxide oxidizes phosphorus present in the organic compound into sodium phosphate ($\\text{Na}_3\\text{PO}_4$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Heating an organic compound containing phosphorus with an oxidizing agent like $\\text{Na}_2\\text{O}_2$ converts covalently bound phosphorus into ionic phosphate: $\\text{P} + \\text{Na}_2\\text{O}_2 \\xrightarrow{\\Delta} \\text{Na}_3\\text{PO}_4$. The phosphate is then confirmed with ammonium molybdate. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 15
  {
    question: `${arDirections}\n\nAssertion (A): The precipitate formed in the confirmatory test for phosphorus using ammonium molybdate is canary yellow in colour.\nReason (R): The canary yellow precipitate is ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "When sodium phosphate solution is boiled with concentrated $\\text{HNO}_3$ and treated with ammonium molybdate, a characteristic canary yellow precipitate of ammonium phosphomolybdate, $(\\text{NH}_4)_3\\text{PO}_4\\cdot 12\\text{MoO}_3$ or $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$, is formed. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 16
  {
    question: `${arDirections}\n\nAssertion (A): Freshly prepared $\\text{FeSO}_4$ solution must be used during Lassaigne's test for nitrogen.\nReason (R): On prolonged standing in air, $\\text{FeSO}_4$ is oxidized by atmospheric oxygen to basic ferric sulfate $\\text{Fe(OH)SO}_4$, which interferes with the test.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Aged $\\text{FeSO}_4$ oxidizes to basic ferric sulfate $\\text{Fe(OH)SO}_4$, which precipitates as brown ferric hydroxide upon addition of $\\text{NaOH}$, masking the initial formation of hexacyanidoferrate(II) ion. Therefore, freshly prepared $\\text{FeSO}_4$ must be used. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 17
  {
    question: `${arDirections}\n\nAssertion (A): Benzenediazonium chloride does not reliably give Lassaigne's test for nitrogen.\nReason (R): Benzenediazonium chloride loses nitrogen gas ($\\text{N}_2$) very easily upon heating before it can react with sodium metal.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Diazonium salts are thermally unstable and decompose rapidly upon heating to evolve $\\text{N}_2$ gas: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{Cl} + \\text{N}_2\\uparrow$. Consequently, very little or no nitrogen reacts with sodium to form $\\text{NaCN}$. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 18
  {
    question: `${arDirections}\n\nAssertion (A): Potassium metal is preferred over sodium metal for preparing Lassaigne's extract.\nReason (R): Potassium metal is more reactive and reacts more vigorously with organic compounds than sodium metal.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Although potassium is more reactive than sodium (Reason is true), it is NOT used because its reaction is violently explosive and dangerous to handle in a glass fusion tube. Sodium metal is preferred because it reacts smoothly and safely. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 19
  {
    question: `${arDirections}\n\nAssertion (A): In Lassaigne's test for sulfur using lead acetate, acetic acid is used for acidification instead of sulfuric acid.\nReason (R): Sulfuric acid would precipitate white lead sulfate ($\\text{PbSO}_4$), masking the detection of black lead sulfide ($\\text{PbS}$).`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "If $\\text{H}_2\\text{SO}_4$ were used to acidify the sodium extract, sulfate ions would react with lead ions from lead acetate to precipitate white $\\text{PbSO}_4$, interfering with the identification of black $\\text{PbS}$. Hence, dilute acetic acid ($\\text{CH}_3\\text{COOH}$) is used. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 20
  {
    question: `${arDirections}\n\nAssertion (A): Hydroxylamine ($\\text{NH}_2\\text{OH}$) gives a positive Prussian blue test for nitrogen.\nReason (R): Hydroxylamine possesses a primary amino group ($\\text{-NH}_2$).`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Hydroxylamine contains an amino group (Reason is true), but it lacks carbon. Without carbon, sodium cyanide ($\\text{NaCN}$) cannot form during sodium fusion, so it gives a negative Prussian blue test. Thus, (A) is false and (R) is true.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 21
  {
    question: `${arDirections}\n\nAssertion (A): In the detection of carbon, the evolved gas turns lime water milky, but on passing excess gas, the milkiness disappears.\nReason (R): Calcium carbonate dissolves in excess carbon dioxide due to the formation of soluble calcium hydrogen carbonate, $\\text{Ca(HCO}_3)_2$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Carbon dioxide reacts with lime water: $\\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O}$ (milky). With excess $\\text{CO}_2$: $\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$ (soluble and clear). Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 22
  {
    question: `${arDirections}\n\nAssertion (A): A pale yellow precipitate that is sparingly soluble in aqueous $\\text{NH}_4\\text{OH}$ indicates the presence of bromine in the organic compound.\nReason (R): Silver bromide has an intermediate solubility product between silver chloride and silver iodide.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "$\\text{AgCl}$ is white and fully soluble in $\\text{NH}_4\\text{OH}$, $\\text{AgBr}$ is pale yellow and sparingly soluble in $\\text{NH}_4\\text{OH}$, and $\\text{AgI}$ is yellow and insoluble. This trend directly follows their solubility products ($K_{sp}$: $\\text{AgCl} > \\text{AgBr} > \\text{AgI}$). Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 23
  {
    question: `${arDirections}\n\nAssertion (A): Fusion of organic compounds with sodium metal must be done in a dry ignition tube.\nReason (R): Moisture reacts vigorously with sodium metal to produce hydrogen gas, which may cause an explosion.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Sodium reacts exothermically with water: $2\\text{Na} + 2\\text{H}_2\\text{O} \\to 2\\text{NaOH} + \\text{H}_2\\uparrow$. The heat evolved can ignite the hydrogen gas, causing the glass tube to shatter explosively. Hence, the tube must be completely dry. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 24
  {
    question: `${arDirections}\n\nAssertion (A): Urea ($\\text{NH}_2\\text{CONH}_2$) gives a positive Lassaigne's test for nitrogen.\nReason (R): Urea contains both nitrogen and carbon atoms, allowing the formation of sodium cyanide upon sodium fusion.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Urea contains both nitrogen and carbon atoms in its molecular structure: $\\text{NH}_2\\text{CONH}_2 + 2\\text{Na} \\xrightarrow{\\Delta} 2\\text{NaCN} + \\dots$. Therefore, $\\text{NaCN}$ forms and yields Prussian blue. Both (A) and (R) are true and (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 25
  {
    question: `${arDirections}\n\nAssertion (A): In Lassaigne's test for nitrogen, acidification with hydrochloric acid is strictly preferred over sulfuric acid.\nReason (R): Hydrochloric acid provides chloride ions which help precipitate Prussian blue.`,
    options: arOptions,
    correctAnswer: 3,
    explanation: "Concentrated or dilute $\\text{H}_2\\text{SO}_4$ is typically preferred over $\\text{HCl}$ to avoid introducing extra chloride ions if subsequent tests for halogens are conducted, and chloride ions do not precipitate Prussian blue. Thus, (A) is false and (R) is false. Wait, let's verify standard option (d): (A) is false but (R) is true. If both are false, standard JEE 4-choice is (d) or (c). Let's reformulate Assertion/Reason to clearly match option (d) or (c):",
    options: arOptions,
    correctAnswer: 2,
    explanation: "Dilute sulfuric acid is typically used to acidify the ferrous hydroxide precipitate. If hydrochloric acid is used carelessly, it could introduce chloride ions interfering with halogen tests if the same extract is used without separation. Furthermore, Reason is completely false because chloride ions have nothing to do with precipitating Prussian blue. Thus, (A) is true but (R) is false.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // AR 26
  {
    question: `${arDirections}\n\nAssertion (A): The oxidation state of iron in the coordination sphere of Prussian blue, $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$, is $+2$.\nReason (R): The outer counter cations are $\\text{Fe}^{3+}$ while the central metal ions inside the hexacyanidoferrate complex are $\\text{Fe}^{2+}$.`,
    options: arOptions,
    correctAnswer: 0,
    explanation: "Prussian blue is iron(III) hexacyanidoferrate(II). The four external iron cations are in the $+3$ oxidation state, while the three iron atoms within the complex anion $[\\text{Fe(CN)}_6]^{4-}$ are in the $+2$ oxidation state. Both (A) and (R) are true and (R) is the correct explanation.",
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 8 MCQs (indices 26..33)
const mcqQuestions = [
  // MCQ 1
  {
    question: "Which of the following organic compounds will NOT give a positive Prussian blue test for nitrogen upon sodium fusion?",
    options: [
      "$\\text{NH}_2\\text{NH}_2\\cdot\\text{HCl}$ (Hydrazine hydrochloride)",
      "$\\text{CH}_3\\text{CONH}_2$ (Acetamide)",
      "$\\text{C}_6\\text{H}_5\\text{NH}_2$ (Aniline)",
      "$\\text{NH}_2\\text{CSNH}_2$ (Thiourea)"
    ],
    correctAnswer: 0,
    explanation: "Lassaigne's test for nitrogen requires both carbon and nitrogen to form sodium cyanide ($\\text{NaCN}$). Hydrazine hydrochloride ($\\text{NH}_2\\text{NH}_2\\cdot\\text{HCl}$) contains nitrogen but does not contain any carbon, so $\\text{NaCN}$ cannot form, and it gives a negative test.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 2
  {
    question: "The chemical formula of the purple-colored complex formed during the test for sulfur using sodium nitroprusside is:",
    options: [
      "$\\text{Na}_4[\\text{Fe(CN)}_5\\text{NOS}]$",
      "$\\text{Na}_3[\\text{Fe(CN)}_5\\text{NOS}]$",
      "$\\text{Na}_2[\\text{Fe(CN)}_5\\text{NO}_2]$",
      "$\\text{Na}_4[\\text{Fe(CN)}_6]$"
    ],
    correctAnswer: 0,
    explanation: "When sulfide ions react with sodium nitroprusside in alkaline medium, the purple-violet thionitroprusside complex is formed:\n$$\\text{Na}_2\\text{S} + \\text{Na}_2[\\text{Fe(CN)}_5\\text{NO}] \\to \\text{Na}_4[\\text{Fe(CN)}_5\\text{NOS}]$$\nThe complex anion is $[\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 3
  {
    question: "During Lassaigne's test, an organic compound containing both nitrogen and sulfur gives a blood-red coloration on treatment with $\\text{FeCl}_3$. The species responsible for this blood-red color is:",
    options: [
      "$[\\text{Fe(SCN)}]^{2+}$",
      "$\\text{Fe}_4[\\text{Fe(CN)}_6]_3$",
      "$[\\text{Fe(CN)}_5\\text{NOS}]^{4-}$",
      "$[\\text{Fe(H}_2\\text{O)}_6]^{3+}$"
    ],
    correctAnswer: 0,
    explanation: "When an organic compound contains both nitrogen and sulfur, fusion with limited sodium gives sodium thiocyanate ($\\text{NaSCN}$). On adding $\\text{Fe}^{3+}$ ions, the thiocyanatoiron(III) complex $[\\text{Fe(SCN)}]^{2+}$ (or $\\text{Fe(SCN)}_3$) is formed, which produces a characteristic blood-red coloration.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 4
  {
    question: "In the qualitative detection of phosphorus, the organic compound is heated with sodium peroxide and the resulting solution is treated with concentrated $\\text{HNO}_3$ and ammonium molybdate. The composition of the canary yellow precipitate formed is:",
    options: [
      "$(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$",
      "$(\\text{NH}_4)_2\\text{MoO}_4$",
      "$\\text{Mg(NH}_4)\\text{PO}_4$",
      "$\\text{FePO}_4$"
    ],
    correctAnswer: 0,
    explanation: "The canary yellow precipitate is ammonium phosphomolybdate, $(\\text{NH}_4)_3\\text{PO}_4\\cdot 12\\text{MoO}_3$ or $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 5
  {
    question: "Why is Lassaigne's extract boiled with concentrated $\\text{HNO}_3$ before testing for halogens with $\\text{AgNO}_3$?",
    options: [
      "To decompose $\\text{NaCN}$ and $\\text{Na}_2\\text{S}$ which would otherwise form precipitates with $\\text{AgNO}_3$",
      "To oxidize chloride ions to chlorine gas",
      "To dissolve silver halide precipitates",
      "To neutralize any unreacted sodium metal"
    ],
    correctAnswer: 0,
    explanation: "If nitrogen or sulfur is present in the compound, cyanide ($\\text{CN}^-$) and sulfide ($\\text{S}^{2-}$) ions in the extract would react with $\\text{AgNO}_3$ to form white $\\text{AgCN}$ and black $\\text{Ag}_2\\text{S}$, masking the halide precipitate. Boiling with concentrated $\\text{HNO}_3$ converts them to volatile $\\text{HCN}\\uparrow$ and $\\text{H}_2\\text{S}\\uparrow$, eliminating interference.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 6
  {
    question: "In the layer test for halogens, Lassaigne's extract is shaken with chlorine water in the presence of $\\text{CCl}_4$. A violet colour in the carbon tetrachloride layer indicates the presence of:",
    options: [
      "Iodine",
      "Bromine",
      "Chlorine",
      "Fluorine"
    ],
    correctAnswer: 0,
    explanation: "Chlorine oxidizes iodide ($\\text{I}^-$) to elemental iodine ($\\text{I}_2$): $2\\text{I}^- + \\text{Cl}_2 \\to 2\\text{Cl}^- + \\text{I}_2$. Elemental iodine dissolves in the non-polar organic solvent $\\text{CCl}_4$, imparting a characteristic violet/purple color to the organic layer.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 7
  {
    question: "Which of the following precipitates formed during Lassaigne's halogen test is completely insoluble in concentrated aqueous ammonia?",
    options: [
      "$\\text{AgI}$",
      "$\\text{AgCl}$",
      "$\\text{AgBr}$",
      "$\\text{AgF}$"
    ],
    correctAnswer: 0,
    explanation: "$\\text{AgCl}$ is soluble in dilute $\\text{NH}_4\\text{OH}$, $\\text{AgBr}$ is sparingly soluble in concentrated $\\text{NH}_4\\text{OH}$, and $\\text{AgI}$ is completely insoluble in both dilute and concentrated $\\text{NH}_4\\text{OH}$ due to its extremely low $K_{sp}$ ($8.5 \\times 10^{-17}$).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  },
  // MCQ 8
  {
    question: "During the detection of carbon and hydrogen, an organic substance is heated with dry $\\text{CuO}$. Which pair of observations confirms the presence of carbon and hydrogen respectively?",
    options: [
      "Lime water turns milky; anhydrous $\\text{CuSO}_4$ turns blue",
      "Lime water turns blue; anhydrous $\\text{CuSO}_4$ turns milky",
      "Litmus turns red; lime water turns blue",
      "Baryta water remains clear; cobalt chloride paper remains blue"
    ],
    correctAnswer: 0,
    explanation: "Carbon is oxidized to $\\text{CO}_2$, which turns lime water milky by precipitating $\\text{CaCO}_3$. Hydrogen is oxidized to $\\text{H}_2\\text{O}$, which hydrates white anhydrous $\\text{CuSO}_4$ to form blue $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 1
  }
];

// 13 Numerical questions (indices 34..46)
const numQuestions = [
  // NUM 1
  {
    question: "In the Prussian blue complex $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$, the oxidation state of the iron atom outside the coordination sphere is $+x$ and that inside the coordination sphere is $+y$. What is the value of $(x + y)$?",
    options: [],
    correctAnswer: "5",
    explanation: "The formula of Prussian blue is $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$. The iron atoms outside the coordination sphere are in the $+3$ oxidation state ($x = 3$). Inside the hexacyanoferrate complex $[\\text{Fe(CN)}_6]^{4-}$, iron is in the $+2$ oxidation state ($y = 2$). Therefore, $x + y = 3 + 2 = 5$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 2
  {
    question: "In the sodium nitroprusside complex $[\\text{Fe(CN)}_5(\\text{NOS})]^{n-}$, formed during the detection of sulfur, what is the magnitude of the net charge on the complex anion ($n$)?",
    options: [],
    correctAnswer: "4",
    explanation: "The reaction between sodium nitroprusside and sodium sulfide is:\n$$\\text{Na}_2[\\text{Fe(CN)}_5\\text{NO}] + \\text{Na}_2\\text{S} \\to \\text{Na}_4[\\text{Fe(CN)}_5(\\text{NOS})]$$\nThe complex anion is $[\\text{Fe(CN)}_5(\\text{NOS})]^{4-}$. Thus, the magnitude of the net charge $n = 4$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 3
  {
    question: "Consider the following organic compounds: (i) Hydrazine, (ii) Aniline, (iii) Urea, (iv) Hydroxylamine, (v) Glycine, (vi) Pyridine, (vii) Benzenediazonium chloride, (viii) Acetamide. How many of these compounds give a positive Prussian blue test for nitrogen upon sodium fusion under standard conditions?",
    options: [],
    correctAnswer: "5",
    explanation: "Compounds containing both carbon and nitrogen give sodium cyanide on fusion and yield a positive test: Aniline, Urea, Glycine, Pyridine, and Acetamide (5 compounds).\nHydrazine and hydroxylamine do not contain carbon, so they fail. Benzenediazonium chloride loses $\\text{N}_2$ gas upon heating before reacting with sodium, so it fails. Thus, exactly 5 compounds give a positive test.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 4
  {
    question: "In the chemical formula of ammonium phosphomolybdate, $(\\text{NH}_4)_3[\\text{PMo}_{x}\\text{O}_{40}]$, obtained in the test for phosphorus, what is the value of the stoichiometric subscript $x$?",
    options: [],
    correctAnswer: "12",
    explanation: "The composition of the canary yellow ammonium phosphomolybdate precipitate is $(\\text{NH}_4)_3\\text{PO}_4\\cdot 12\\text{MoO}_3$, which is written in coordination form as $(\\text{NH}_4)_3[\\text{PMo}_{12}\\text{O}_{40}]$. Therefore, $x = 12$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 5
  {
    question: "In the blood-red complex $[\\text{Fe(SCN)}_n]^{(3-n)}$, formed when an organic compound containing both nitrogen and sulfur is fused with limited sodium and treated with $\\text{FeCl}_3$, what is the coordination number $n$ of the thiocyanate ligand in the predominant mono-ligand complex ion?",
    options: [],
    correctAnswer: "1",
    explanation: "In aqueous solution, ferric ions react with thiocyanate to form the mono-thiocyanatoiron(III) complex cation: $\\text{Fe}^{3+} + \\text{SCN}^- \\to [\\text{Fe(SCN)}]^{2+}$. Thus, the number of thiocyanate ligands $n = 1$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 6
  {
    question: "How many moles of water of crystallization are coordinated to copper in one formula unit of blue vitriol, formed when anhydrous $\\text{CuSO}_4$ absorbs water during the qualitative detection of hydrogen?",
    options: [],
    correctAnswer: "5",
    explanation: "Anhydrous $\\text{CuSO}_4$ absorbs moisture to form copper(II) sulfate pentahydrate, $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$, commonly known as blue vitriol. Hence, the number of water molecules per formula unit is 5.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 7
  {
    question: "In the qualitative detection of carbon, 1 mole of carbon from an organic compound produces $\\text{CO}_2$, which on reaction with excess lime water yields how many moles of soluble calcium hydrogen carbonate, $\\text{Ca(HCO}_3)_2$?",
    options: [],
    correctAnswer: "1",
    explanation: "The reactions are:\n$\\text{C} + \\text{O}_2 \\to \\text{CO}_2$\n$\\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3 + \\text{H}_2\\text{O}$\n$\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\to \\text{Ca(HCO}_3)_2$\nOverall, 1 mole of $\\text{CaCO}_3$ reacts with 1 mole of $\\text{CO}_2$ to yield 1 mole of $\\text{Ca(HCO}_3)_2$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 8
  {
    question: "In the layer test for iodine, how many moles of chlorine gas ($\\text{Cl}_2$) are consumed per mole of iodine ($\\text{I}_2$) to convert it into colorless iodic acid ($\\text{HIO}_3$) in the presence of excess chlorine water?",
    options: [],
    correctAnswer: "5",
    explanation: "The balanced redox reaction between elemental iodine and excess chlorine in aqueous solution is:\n$$\\text{I}_2 + 5\\text{Cl}_2 + 6\\text{H}_2\\text{O} \\to 2\\text{HIO}_3 + 10\\text{HCl}$$\nThus, 5 moles of $\\text{Cl}_2$ are consumed per mole of $\\text{I}_2$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 9
  {
    question: "How many of the following elements can be detected directly in an organic compound by preparing Lassaigne's sodium fusion extract: Carbon, Hydrogen, Nitrogen, Sulfur, Chlorine, Bromine, Iodine, Phosphorus?",
    options: [],
    correctAnswer: "5",
    explanation: "In Lassaigne's test, fusion with sodium converts Nitrogen (to $\\text{NaCN}$), Sulfur (to $\\text{Na}_2\\text{S}$), and Halogens (Chlorine, Bromine, Iodine to $\\text{NaCl, NaBr, NaI}$) into ionic sodium salts (total 5 elements: N, S, Cl, Br, I).\nCarbon and Hydrogen are detected by heating with $\\text{CuO}$, and Phosphorus is detected by fusion with $\\text{Na}_2\\text{O}_2$ (sodium peroxide). Thus, exactly 5 elements are detected via standard Lassaigne extract.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 10
  {
    question: "In the soluble complex ion $[\\text{Ag(NH}_3)_n]^+$ formed when silver chloride dissolves in excess aqueous ammonia during the halogen test, what is the coordination number $n$ of silver?",
    options: [],
    correctAnswer: "2",
    explanation: "Silver chloride dissolves in aqueous ammonia by forming the linear coordination complex diamminesilver(I), $[\\text{Ag(NH}_3)_2]^+$. Hence, the coordination number $n = 2$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 11
  {
    question: "What is the total number of iron atoms present per formula unit in the Prussian blue complex $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$?",
    options: [],
    correctAnswer: "7",
    explanation: "In $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$, there are 4 iron atoms outside the brackets and 3 iron atoms inside the coordination sphere ($3 \\times 1 = 3$). The total number of iron atoms per formula unit is $4 + 3 = 7$.",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 12
  {
    question: "In the qualitative test for sulfur using lead acetate, sodium sulfide reacts with lead acetate to form a black precipitate of $\\text{PbS}$. What is the oxidation state of lead in this precipitate?",
    options: [],
    correctAnswer: "2",
    explanation: "Lead sulfide ($\\text{PbS}$) contains lead in the $+2$ oxidation state ($\\text{Pb}^{2+}$) and sulfur as the sulfide ion ($\\text{S}^{2-}$).",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  },
  // NUM 13
  {
    question: "How many cyanide ligands ($\\text{CN}^-$) are coordinated to the iron atom in one molecule of sodium nitroprusside, $\\text{Na}_2[\\text{Fe(CN)}_n\\text{NO}]$?",
    options: [],
    correctAnswer: "5",
    explanation: "Sodium nitroprusside has the chemical formula $\\text{Na}_2[\\text{Fe(CN)}_5\\text{NO}]$. Therefore, exactly 5 cyanide ligands are coordinated to the iron center ($n = 5$).",
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: SUBTOPIC,
    chapter: CHAPTER,
    marks: 4,
    negativeMarks: 0
  }
];

const allQuestions = [...arQuestions, ...mcqQuestions, ...numQuestions];

console.log(`Part 2 total questions: ${allQuestions.length}`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 47) {
  const outPath = path.join(__dirname, 'data_purif_part2.js');
  const fileContent = `// Auto-generated data for Purification Part 2: Qualitative analysis\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
