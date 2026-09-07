// Part 1: Detection of elements (47 questions: 26 AR, 8 MCQ, 13 NUM)
module.exports = [
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In Lassaigne's test for nitrogen, a Prussian blue precipitate or coloration confirms the presence of nitrogen.\nReason (R): During sodium fusion, nitrogen and carbon in the organic compound react with sodium to form sodium cyanide, which subsequently reacts with $\\text{Fe}^{2+}$ and $\\text{Fe}^{3+}$ ions to form ferric ferrocyanide $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. During sodium fusion, $\\text{Na} + \\text{C} + \\text{N} \\rightarrow \\text{NaCN}$. On boiling with $\\text{FeSO}_4$ in alkaline medium, hexacyanidoferrate(II) $[\text{Fe}(\\text{CN})_6]^{4-}$ is formed. Acidification with dilute $\\text{H}_2\\text{SO}_4$ oxidizes some $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$, forming Prussian blue $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3 \\cdot x\\text{H}_2\\text{O}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Hydrazine $(\\text{NH}_2\\text{NH}_2)$ does not give a positive Lassaigne's test for nitrogen.\nReason (R): Hydrazine does not contain any carbon atom, and therefore sodium cyanide $(\\text{NaCN})$ cannot be formed during sodium fusion.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Lassaigne's test for nitrogen requires the formation of $\\text{NaCN}$, which requires both carbon and nitrogen from the organic compound: $\\text{Na} + \\text{C} + \\text{N} \\rightarrow \\text{NaCN}$. Since hydrazine lacks carbon, it gives no $\\text{NaCN}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Hydroxylamine hydrochloride $(\\text{NH}_2\\text{OH} \\cdot \\text{HCl})$ fails to give Prussian blue coloration in Lassaigne's test.\nReason (R): Hydroxylamine hydrochloride contains nitrogen and chlorine but lacks carbon required to form cyanide ions.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Without carbon, fusion with sodium yields $\\text{NaCl}$ and $\\text{NH}_3$, but no $\\text{NaCN}$, so Prussian blue cannot form.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Diazo compounds like benzenediazonium chloride usually give a poor or negative Lassaigne's test for nitrogen.\nReason (R): Diazo compounds readily lose dinitrogen gas $(\\text{N}_2)$ upon gentle heating before fusion with molten sodium can occur.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Benzenediazonium salts are thermally unstable and decompose rapidly evolving nitrogen gas before the carbon and nitrogen can react with sodium metal.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): When an organic compound contains both nitrogen and sulfur, sodium fusion extract gives a blood-red coloration with neutral $\\text{FeCl}_3$.\nReason (R): Sodium thiocyanate $(\\text{NaSCN})$ is formed during fusion, which reacts with ferric ions to produce ferric thiocyanate $[\text{Fe}(\\text{SCN})]^{2+}$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $\\text{Na} + \\text{C} + \\text{N} + \\text{S} \\rightarrow \\text{NaSCN}$. Upon addition of $\\text{Fe}^{3+}$ ions, blood-red $[\text{Fe}(\\text{SCN})]^{2+}$ or $\\text{Fe}(\\text{SCN})_3$ is produced.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If an organic compound containing both nitrogen and sulfur is fused with excess sodium, it gives Prussian blue coloration instead of blood-red coloration upon testing.\nReason (R): Excess sodium decomposes sodium thiocyanate into sodium cyanide and sodium sulfide.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. With excess sodium: $\\text{NaSCN} + 2\\text{Na} \\rightarrow \\text{NaCN} + \\text{Na}_2\\text{S}$. The cyanide ion then gives Prussian blue with $\\text{FeSO}_4/\\text{Fe}^{3+}$, while thiocyanate is destroyed.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In Lassaigne's test for sulfur, addition of sodium nitroprusside to the sodium extract gives a deep violet/purple coloration.\nReason (R): The reaction forms the complex ion pentacyanidonitrosylferrate(II) with sulfide, producing $[\text{Fe}(\\text{CN})_5\\text{NOS}]^{4-}$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $\\text{Na}_2\\text{S} + \\text{Na}_2[\\text{Fe}(\\text{CN})_5\\text{NO}] \\rightarrow \\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$. The formation of sodium thionitroprusside produces a characteristic violet-purple coloration.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Before testing for halogens with $\\text{AgNO}_3$, the sodium fusion extract must be boiled with concentrated $\\text{HNO}_3$.\nReason (R): Boiling with $\\text{HNO}_3$ decomposes any $\\text{NaCN}$ and $\\text{Na}_2\\text{S}$ present into volatile $\\text{HCN}$ and $\\text{H}_2\\text{S}$, which would otherwise interfere by precipitating white $\\text{AgCN}$ or black $\\text{Ag}_2\\text{S}$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Cyanide and sulfide ions form precipitates with silver nitrate ($\\text{AgCN}$ white, $\\text{Ag}_2\\text{S}$ black). Boiling with $\\text{HNO}_3$ expels them: $\\text{NaCN} + \\text{HNO}_3 \\rightarrow \\text{NaNO}_3 + \\text{HCN}\\uparrow$ and $\\text{Na}_2\\text{S} + 2\\text{HNO}_3 \\rightarrow 2\\text{NaNO}_3 + \\text{H}_2\\text{S}\\uparrow$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Dilute sulfuric acid $(\\text{H}_2\\text{SO}_4)$ cannot be used in place of nitric acid $(\\text{HNO}_3)$ to acidify sodium extract for the halogen test with $\\text{AgNO}_3$.\nReason (R): Sulfuric acid precipitates silver as sparingly soluble silver sulfate $(\\text{Ag}_2\\text{SO}_4)$, giving a false-positive white precipitate.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Concentrated or even moderate $\\text{H}_2\\text{SO}_4$ introduces sulfate ions that can precipitate $\\text{Ag}_2\\text{SO}_4$, interfering with the detection of chloride ions.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Hydrochloric acid $(\\text{HCl})$ must never be used to acidify the sodium extract prior to adding $\\text{AgNO}_3$ solution in the test for halogens.\nReason (R): Hydrochloric acid itself provides chloride ions that react with silver nitrate to form a curdy white precipitate of silver chloride.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Using $\\text{HCl}$ introduces external chloride ions, giving an immediate precipitate of $\\text{AgCl}$ regardless of whether halogen was present in the organic sample.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Silver chloride $(\\text{AgCl})$ precipitate dissolves readily in ammonium hydroxide $(\\text{NH}_4\\text{OH})$, whereas silver iodide $(\\text{AgI})$ is insoluble.\nReason (R): Silver chloride forms a stable diamminesilver(I) complex $[\\text{Ag}(\\text{NH}_3)_2]^+$ with $\\text{NH}_4\\text{OH}$, whereas the solubility product ($K_{sp}$) of $\\text{AgI}$ is extremely low.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). $\\text{AgCl} + 2\\text{NH}_4\\text{OH} \\rightarrow [\\text{Ag}(\\text{NH}_3)_2]^+\\text{Cl}^- + 2\\text{H}_2\\text{O}$. For $\\text{AgI}$, $K_{sp} \\approx 8.5 \\times 10^{-17}$, which is too low for the complexation equilibrium to dissolve the precipitate.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The layer test is used to detect bromine and iodine in the presence of each other in the sodium fusion extract.\nReason (R): Chlorine water oxidizes iodide to iodine before bromide, and the liberated halogens impart characteristic colors to the organic solvent layer (carbon tetrachloride or chloroform).",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Iodide has a lower oxidation potential than bromide ($E^\\circ_{\\text{I}_2/\\text{I}^-} = +0.54\\text{ V}$, $E^\\circ_{\\text{Br}_2/\\text{Br}^-} = +1.09\\text{ V}$), so $\\text{Cl}_2$ oxidizes $\\text{I}^-$ first to $\\text{I}_2$ (violet in $\\text{CCl}_4$). On further addition of chlorine water, iodine is oxidized to colorless iodic acid $(\\text{HIO}_3)$ and bromine is liberated, turning the layer brown/orange.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Detection of phosphorus in an organic compound is confirmed by the formation of a canary yellow precipitate with ammonium molybdate.\nReason (R): Phosphorus in the compound is oxidized to orthophosphate by sodium peroxide, which reacts with ammonium molybdate in presence of conc. $\\text{HNO}_3$ to form ammonium phosphomolybdate.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Heating with $\\text{Na}_2\\text{O}_2$ converts phosphorus to $\\text{Na}_3\\text{PO}_4$. Boiling with conc. $\\text{HNO}_3$ and ammonium molybdate gives canary yellow $(\\text{NH}_4)_3[\\text{P}(\\text{Mo}_{12}\\text{O}_{40})] \\cdot x\\text{H}_2\\text{O}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): The Beilstein test does not definitively establish the presence of halogens in an unknown organic compound.\nReason (R): Certain nitrogen-containing compounds like urea, thiourea, and pyridine also give a green or bluish-green flame in the Beilstein test.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). The Beilstein test gives volatile copper halides that impart a green flame. However, organic nitrogen compounds form volatile copper cyanide complexes that also impart a green flame, leading to false positives.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Fluorine cannot be detected by the Beilstein copper wire test.\nReason (R): Copper(II) fluoride $(\\text{CuF}_2)$ is non-volatile and does not impart any color to the Bunsen burner flame.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Unlike $\\text{CuCl}_2, \\text{CuBr}_2,$ and $\\text{CuI}_2$, copper fluoride is ionic, non-volatile, and does not vaporize into the flame.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In the sodium fusion extract, freshly prepared ferrous sulfate $(\\text{FeSO}_4)$ solution must be used for testing nitrogen.\nReason (R): On prolonged standing, $\\text{FeSO}_4$ is oxidized by atmospheric oxygen to basic ferric sulfate, which impairs the formation of hexacyanidoferrate(II).",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Fresh $\\text{FeSO}_4$ provides unoxidized $\\text{Fe}^{2+}$ ions necessary to react with $\\text{CN}^-$ to form $[\\text{Fe}(\\text{CN})_6]^{4-}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): During Lassaigne's test, sodium metal is heated in an ignition tube until it melts into a shining silvery globule before adding the organic compound.\nReason (R): Uniformly molten sodium metal provides maximum surface area and high reactivity for the complete reduction and covalent-to-ionic conversion of elements.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. Heating sodium first ensures it is molten and free of kerosene, enabling intimate contact and vigorous reaction with the added organic compound.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Carbon and hydrogen in an organic compound are detected simultaneously by heating the substance with dry copper(II) oxide $(\\text{CuO})$.\nReason (R): Copper(II) oxide oxidizes carbon to carbon dioxide (turning lime water milky) and hydrogen to water (turning anhydrous copper sulfate blue).",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $\\text{C} + 2\\text{CuO} \\rightarrow \\text{CO}_2 + 2\\text{Cu}$ and $2\\text{H} + \\text{CuO} \\rightarrow \\text{H}_2\\text{O} + \\text{Cu}$. $\\text{CO}_2$ turns lime water milky, and water turns white anhydrous $\\text{CuSO}_4$ into blue $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Anhydrous calcium chloride $(\\text{CaCl}_2)$ cannot be used in place of anhydrous copper sulfate $(\\text{CuSO}_4)$ for confirming the detection of hydrogen.\nReason (R): Although anhydrous $\\text{CaCl}_2$ absorbs moisture, it does not undergo an unambiguous, distinct color change upon hydration.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Anhydrous $\\text{CuSO}_4$ changes distinctly from white to deep blue on taking up water of crystallization, whereas $\\text{CaCl}_2$ remains a white solid or deliquesces into a colorless liquid without a color signal.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Sodium fusion extract of an organic compound containing sulfur gives a black precipitate with lead acetate solution.\nReason (R): Sulfide ions react with lead acetate in acetic acid medium to form insoluble black lead sulfide $(\\text{PbS})$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $\\text{Na}_2\\text{S} + (\\text{CH}_3\\text{COO})_2\\text{Pb} \\rightarrow \\text{PbS}\\downarrow + 2\\text{CH}_3\\text{COONa}$. Black $\\text{PbS}$ confirms sulfur.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In the test for sulfur with lead acetate, acetic acid must be used for acidification rather than sulfuric acid.\nReason (R): Sulfuric acid would react with lead acetate to precipitate white lead sulfate $(\\text{PbSO}_4)$, obscuring the black $\\text{PbS}$ precipitate.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $\\text{H}_2\\text{SO}_4$ yields $\\text{SO}_4^{2-}$ which precipitates white $\\text{PbSO}_4$, causing severe interference.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): If an organic compound containing nitrogen is heated with soda lime $(\\text{NaOH} + \\text{CaO})$, it liberates ammonia gas only if the nitrogen is present as an amino or amide group.\nReason (R): Nitro, azo, and heterocyclic nitrogen compounds do not liberate ammonia upon heating with soda lime.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Soda lime testing for nitrogen is not universal; it works for amides, amines, and proteins, but fails for nitro compounds, nitrates, and pyridine.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Addition of sodium extract to carbon disulfide and chlorine water gives an orange-brown organic layer if bromine is present.\nReason (R): Chlorine is more electronegative than bromine and displaces bromide ions to yield elemental bromine, which is preferentially soluble in non-polar $\\text{CS}_2$.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) is the correct explanation. $2\\text{Br}^- + \\text{Cl}_2 \\rightarrow 2\\text{Cl}^- + \\text{Br}_2$. Bromine dissolves in the $\\text{CS}_2$ layer imparting an orange-red/brown color.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In Lassaigne's test for halogens, silver bromide $(\\text{AgBr})$ precipitate is sparingly soluble in ammonium hydroxide.\nReason (R): The solubility product of $\\text{AgBr}$ is intermediate between that of $\\text{AgCl}$ and $\\text{AgI}$, requiring a larger volume of $\\text{NH}_4\\text{OH}$ to dissolve.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). $K_{sp}(\\text{AgCl}) \\approx 1.8 \\times 10^{-10}$, $K_{sp}(\\text{AgBr}) \\approx 5.0 \\times 10^{-13}$, $K_{sp}(\\text{AgI}) \\approx 8.5 \\times 10^{-17}$. $\\text{AgBr}$ dissolves only in excess or concentrated $\\text{NH}_4\\text{OH}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): A small piece of potassium metal can be used instead of sodium metal in Lassaigne's test.\nReason (R): Potassium reacts too violently with organic matter and moisture, making the sodium fusion test hazardous to perform with potassium.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Potassium has a lower ionization energy than sodium and reacts explosively with glass tubes, organic compounds, and water, posing serious explosion hazards.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In Lassaigne's test for nitrogen, excessive acidification of the Prussian blue mixture with concentrated hydrochloric acid causes the blue color to fade.\nReason (R): Concentrated $\\text{HCl}$ dissolves ferric ferrocyanide by converting it into soluble hexacyanidoferric acid.",
    "options": [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
      "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
      "Assertion (A) is true but Reason (R) is false.",
      "Assertion (A) is false but Reason (R) is true."
    ],
    "correctAnswer": 0,
    "explanation": "Both (A) and (R) are true, and (R) correctly explains (A). Large excess of strong acid decomposes or solubilizes the colloidal Prussian blue complex, turning the solution greenish-yellow.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Assertion–Reasoning",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "Which of the following compounds will NOT yield a Prussian blue coloration when subjected to Lassaigne's test for nitrogen?",
    "options": [
      "Urea $(\\text{NH}_2\\text{CONH}_2)$",
      "Aniline $(\\text{C}_6\\text{H}_5\\text{NH}_2)$",
      "Hydrazine sulfate $(\\text{N}_2\\text{H}_4 \\cdot \\text{H}_2\\text{SO}_4)$",
      "Glycine $(\\text{H}_2\\text{NCH}_2\\text{COOH})$"
    ],
    "correctAnswer": 2,
    "explanation": "Hydrazine sulfate contains nitrogen and sulfur but lacks any carbon atom. Fusion with sodium cannot form $\\text{NaCN}$, so Prussian blue cannot be formed.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "In Lassaigne's test for nitrogen, what is the chemical formula of the Prussian blue precipitate formed?",
    "options": [
      "$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3 \\cdot x\\text{H}_2\\text{O}$",
      "$\\text{Fe}_3[\\text{Fe}(\\text{CN})_6]_2 \\cdot x\\text{H}_2\\text{O}$",
      "$\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$",
      "$\\text{KFe}[\\text{Fe}(\\text{CN})_6]$"
    ],
    "correctAnswer": 0,
    "explanation": "Prussian blue is iron(III) hexacyanidoferrate(II), having the molecular formula $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3 \\cdot x\\text{H}_2\\text{O}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "When sodium fusion extract of an organic compound containing both nitrogen and sulfur is treated with neutral $\\text{FeCl}_3$, a blood-red color appears. The species responsible for this color is:",
    "options": [
      "$[\\text{Fe}(\\text{SCN})_6]^{3-}$",
      "$[\\text{Fe}(\\text{SCN})]^{2+}$",
      "$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$",
      "$\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$"
    ],
    "correctAnswer": 1,
    "explanation": "The blood-red coloration is due to the formation of the thiocyanatoiron(III) complex cation, $[\\text{Fe}(\\text{SCN})]^{2+}$ or $\\text{Fe}(\\text{SCN})_3$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "In the test for halogens, why is the sodium extract boiled with concentrated $\\text{HNO}_3$ before adding $\\text{AgNO}_3$?",
    "options": [
      "To oxidize $\\text{Ag}^+$ to $\\text{Ag}^{2+}$",
      "To decompose $\\text{NaCN}$ and $\\text{Na}_2\\text{S}$ which would otherwise precipitate as $\\text{AgCN}$ and $\\text{Ag}_2\\text{S}$",
      "To increase the solubility of silver halides",
      "To neutralize the excess sodium metal"
    ],
    "correctAnswer": 1,
    "explanation": "Boiling with $\\text{HNO}_3$ decomposes cyanide to $\\text{HCN}\\uparrow$ and sulfide to $\\text{H}_2\\text{S}\\uparrow$. Without this step, $\\text{AgCN}$ (white) and $\\text{Ag}_2\\text{S}$ (black) would interfere with halide detection.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "Which of the following organic compounds will give a positive Beilstein test?",
    "options": [
      "Chlorobenzene",
      "Pyridine",
      "Urea",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All of the above give a positive Beilstein test. Chlorobenzene gives a green flame due to volatile copper chloride, while pyridine and urea give a false-positive green flame due to volatile copper cyanide complexes.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "In the detection of phosphorus, the yellow precipitate formed with ammonium molybdate in the presence of concentrated $\\text{HNO}_3$ has the composition:",
    "options": [
      "$(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$",
      "$(\\text{NH}_4)_2\\text{MoO}_4$",
      "$\\text{H}_3\\text{PO}_4 \\cdot 10\\text{MoO}_3$",
      "$(\\text{NH}_4)_3\\text{PO}_4 \\cdot \\text{MoO}_3$"
    ],
    "correctAnswer": 0,
    "explanation": "The canary yellow precipitate is ammonium phosphomolybdate, represented by the formula $(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$ or $(\\text{NH}_4)_3[\\text{P}(\\text{Mo}_{12}\\text{O}_{40})]$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "During the test for sulfur, the purple-violet color obtained upon adding sodium nitroprusside to the alkaline sodium fusion extract is due to:",
    "options": [
      "$\\text{Na}_2[\\text{Fe}(\\text{CN})_5\\text{NO}]$",
      "$\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$",
      "$\\text{Na}_3[\\text{Fe}(\\text{CN})_6]$",
      "$\\text{FeS}$"
    ],
    "correctAnswer": 1,
    "explanation": "Sulfide ions react with sodium nitroprusside: $\\text{Na}_2\\text{S} + \\text{Na}_2[\\text{Fe}(\\text{CN})_5\\text{NO}] \\rightarrow \\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$ (sodium thionitroprusside), producing an intense purple/violet coloration.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "MCQ",
    "question": "In the detection of carbon and hydrogen, water formed during the oxidation of organic compound with dry $\\text{CuO}$ is identified by passing through:",
    "options": [
      "Anhydrous copper sulfate, turning it from white to blue",
      "Anhydrous calcium chloride, turning it from blue to white",
      "Potassium dichromate, turning it green",
      "Nessler's reagent, giving a brown precipitate"
    ],
    "correctAnswer": 0,
    "explanation": "Water vapors hydrate anhydrous white copper sulfate to form copper sulfate pentahydrate: $\\text{CuSO}_4 + 5\\text{H}_2\\text{O} \\rightarrow \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (deep blue).",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "MCQ (Multiple Choice Question)",
    "marks": 4,
    "negativeMarks": 1
  },
  {
    "type": "NUMERICAL",
    "question": "In the formula of Prussian blue, $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$, what is the oxidation state of the iron atom present INSIDE the coordination sphere (i.e., in the complex anion)?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "In $[\\text{Fe}(\\text{CN})_6]^{4-}$, let the oxidation state of iron be $x$. $x + 6(-1) = -4 \\implies x = +2$. The iron inside the coordination sphere is $\\text{Fe(II)}$, while the iron outside is $\\text{Fe(III)}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "In the formula of Prussian blue, $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$, what is the oxidation state of the iron atom present OUTSIDE the coordination sphere (i.e., the cationic iron)?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "To balance the charge of three $[\\text{Fe}(\\text{CN})_6]^{4-}$ anions (total charge $-12$), four $\\text{Fe}^{3+}$ cations are present outside the sphere. Hence, the oxidation state is $+3$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "What is the total number of cyanide $(\\text{CN}^-)$ ligands present in one formula unit of Prussian blue, $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$?",
    "options": [],
    "correctAnswer": "18",
    "explanation": "Each $[\\text{Fe}(\\text{CN})_6]^{4-}$ unit contains 6 cyanide ligands. With 3 such units in one formula unit, the total number of cyanide ligands is $3 \\times 6 = 18$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "What is the oxidation state of iron in the purple-colored complex ion $[\\text{Fe}(\\text{CN})_5\\text{NOS}]^{4-}$ formed in the sodium nitroprusside test for sulfur?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "In $[\\text{Fe}(\\text{CN})_5\\text{NOS}]^{4-}$, the ligands are $5\\text{CN}^-$ and $\\text{NOS}^-$ (thionitrosyl ligand with charge $-1$). $x + 5(-1) + (-1) = -4 \\implies x - 6 = -4 \\implies x = +2$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "What is the magnitude of the net negative charge on the complex anion in sodium thionitroprusside, $\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "The compound is $\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$, which dissociates into $4\\text{Na}^+$ and $[\\text{Fe}(\\text{CN})_5\\text{NOS}]^{4-}$. The magnitude of the net charge is 4.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "How many moles of molybdenum $(\\text{Mo})$ atoms are present in one mole of ammonium phosphomolybdate, $(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$?",
    "options": [],
    "correctAnswer": "12",
    "explanation": "The formula $(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$ contains $12$ molybdenum trioxide units, which corresponds to 12 moles of $\\text{Mo}$ atoms per mole of compound.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "How many moles of nitrogen atoms are present in one mole of ammonium phosphomolybdate, $(\\text{NH}_4)_3\\text{PO}_4 \\cdot 12\\text{MoO}_3$?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "There are 3 ammonium $(\\text{NH}_4^+)$ ions per formula unit. Therefore, exactly 3 moles of nitrogen atoms are present per mole of ammonium phosphomolybdate.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "How many moles of water of crystallization are present in one mole of blue vitriol formed when anhydrous $\\text{CuSO}_4$ absorbs water during the detection of hydrogen?",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Anhydrous copper sulfate takes up water to form $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (copper sulfate pentahydrate). The number of water molecules of crystallization is 5.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "In the detection of carbon, how many moles of $\\text{CuO}$ are required for the complete oxidation of one mole of elemental carbon to carbon dioxide?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "The balanced reaction is: $\\text{C} + 2\\text{CuO} \\rightarrow \\text{CO}_2 + 2\\text{Cu}$. Exactly 2 moles of copper(II) oxide are consumed per mole of carbon.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "Among the following compounds, how many will give a positive Lassaigne's test for nitrogen?\n(i) Urea\n(ii) Hydrazine\n(iii) Aniline\n(iv) Hydroxylamine hydrochloride\n(v) Benzonitrile\n(vi) Glycine\n(vii) Ammonium sulfate",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Only organic compounds containing BOTH carbon and nitrogen form $\\text{NaCN}$:\n- Urea ($\\text{NH}_2\\text{CONH}_2$): Contains C and N (Yes)\n- Hydrazine ($\\text{N}_2\\text{H}_4$): No carbon (No)\n- Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$): Contains C and N (Yes)\n- Hydroxylamine hydrochloride ($\\text{NH}_2\\text{OH} \\cdot \\text{HCl}$): No carbon (No)\n- Benzonitrile ($\\text{C}_6\\text{H}_5\\text{CN}$): Contains C and N (Yes)\n- Glycine ($\\text{H}_2\\text{NCH}_2\\text{COOH}$): Contains C and N (Yes)\n- Ammonium sulfate ($(\\text{NH}_4)_2\\text{SO}_4$): No carbon (No)\nTotal = 4.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "Among the following halogens, how many form a silver halide precipitate that is readily soluble in aqueous $\\text{NH}_4\\text{OH}$?\n(i) Fluorine\n(ii) Chlorine\n(iii) Bromine\n(iv) Iodine",
    "options": [],
    "correctAnswer": "1",
    "explanation": "Only $\\text{AgCl}$ dissolves readily in aqueous $\\text{NH}_4\\text{OH}$ to form $[\\text{Ag}(\\text{NH}_3)_2]^+$. $\\text{AgBr}$ is only sparingly soluble (requires concentrated $\\text{NH}_4\\text{OH}$), $\\text{AgI}$ is completely insoluble, and $\\text{AgF}$ is soluble in water (does not precipitate). Total = 1.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "What is the coordination number of iron in the Prussian blue complex anion, $[\\text{Fe}(\\text{CN})_6]^{4-}$?",
    "options": [],
    "correctAnswer": "6",
    "explanation": "The complex anion $[\\text{Fe}(\\text{CN})_6]^{4-}$ contains 6 monodentate cyanide ligands bonded to the central iron(II) atom. Hence, the coordination number is 6.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  },
  {
    "type": "NUMERICAL",
    "question": "How many moles of $\\text{AgNO}_3$ react with one mole of sodium chloride present in the sodium fusion extract to precipitate silver chloride?",
    "options": [],
    "correctAnswer": "1",
    "explanation": "The stoichiometric reaction is: $\\text{NaCl} + \\text{AgNO}_3 \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3$. Exactly 1 mole of $\\text{AgNO}_3$ reacts per mole of $\\text{NaCl}$.",
    "subTopic": "Detection of elements",
    "chapter": "Principles Related to Practical Chemistry",
    "questionType": "Numerical",
    "marks": 4,
    "negativeMarks": 0
  }
];
