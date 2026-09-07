// Part 3: Authentic Questions for Chemical Kinetics
// Catalysis (47 questions), Collision theory of reactions (47 questions), Half-life and activation energy (47 questions)

function createQ(subTopic, qText, opts, correctIdx, explanation, diff = "Medium", qType = "MCQ") {
  const letters = ["a", "b", "c", "d"];
  return {
    question: qText,
    options: opts,
    correctAnswer: correctIdx,
    correctOption: letters[correctIdx],
    explanation: explanation,
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Chemical Kinetics",
    subTopic: subTopic,
    difficulty: diff,
    questionType: qType === "MCQ" ? "MCQ (Multiple Choice Question)" : (qType === "NUMERICAL" ? "Numerical Value Question" : "Assertion–Reasoning"),
    type: qType === "MCQ" ? "MCQ" : (qType === "NUMERICAL" ? "NUMERICAL" : "ASSERTION_REASON"),
    cognitiveLevel: "Problem Solving & Calculation",
    targetExams: ["NEET", "JEE Main"],
    source: "NCERT & NEET/JEE Authenticated Question Bank",
    marks: 4,
    negativeMarks: qType === "NUMERICAL" ? 0 : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function getCatalysisQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Catalysis", text, opts, ans, exp, diff, type));
  add(
    "In the Haber process for the manufacture of ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, what role does molybdenum ($\\text{Mo}$) play when added to the iron catalyst?",
    ["Catalytic promoter","Catalytic poison","Primary catalyst","Inhibitor"],
    0,
    "Finely divided iron ($\\text{Fe}$) acts as the catalyst, while molybdenum ($\\text{Mo}$) or $\\text{Al}_2\\text{O}_3/\\text{K}_2\\text{O}$ acts as a catalytic promoter, enhancing the catalytic activity of iron.",
    "Easy",
    "MCQ"
  );
  add(
    "The selective reaction of $\\text{CO}$ and $\\text{H}_2$ to produce methane: $\\text{CO}(g) + 3\\text{H}_2(g) \\xrightarrow{\\text{Ni}} \\text{CH}_4(g) + \\text{H}_2\\text{O}(g)$ demonstrates which key property of a catalyst?",
    ["Selectivity","Activity","Thermodynamic feasibility","Spontaneity"],
    0,
    "Selectivity is the ability of a catalyst to direct a chemical reaction to yield a specific product exclusively among several thermodynamically possible products.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following is an example of homogeneous catalysis?",
    ["Oxidation of $\\text{SO}_2$ to $\\text{SO}_3$ in the presence of $\\text{NO}(g)$ in the Lead chamber process","Oxidation of $\\text{SO}_2$ to $\\text{SO}_3$ in the presence of $\\text{V}_2\\text{O}_5(s)$ in the Contact process","Hydrogenation of vegetable oils using finely divided $\\text{Ni}(s)$","Synthesis of $\\text{NH}_3$ from $\\text{N}_2$ and $\\text{H}_2$ using $\\text{Fe}(s)$"],
    0,
    "In the Lead chamber process, the reactants $\\text{SO}_2(g)$, $\\text{O}_2(g)$, and the catalyst $\\text{NO}(g)$ are all in the same gaseous phase, making it a classic example of homogeneous catalysis.",
    "Easy",
    "MCQ"
  );
  add(
    "In the titration of oxalic acid with acidified potassium permanganate ($\\text{KMnO}_4$), the reaction starts very slowly but accelerates rapidly after some time. The substance acting as the autocatalyst is:",
    ["$\\text{Mn}^{2+}$ ions","$\\text{K}^+$ ions","$\\text{SO}_4^{2-}$ ions","$\\text{CO}_2$ gas"],
    0,
    "As the reaction proceeds, $\\text{Mn}^{2+}$ ions are generated as a product. These $\\text{Mn}^{2+}$ ions act as an autocatalyst, dramatically speeding up subsequent reduction of permanganate.",
    "Easy",
    "MCQ"
  );
  add(
    "According to the intermediate compound formation theory of homogeneous catalysis, how does the catalyst accelerate the reaction?",
    ["By forming a temporary intermediate with one reactant, which then reacts with the other reactant to give products and regenerate the catalyst","By adsorbing reactants physically on its porous surface","By increasing the temperature of the reaction mixture internally","By shifting the equilibrium constant to a higher value"],
    0,
    "In homogeneous catalysis, the catalyst $C$ combines with a reactant $A$ to form a reactive intermediate $AC$ with lower activation energy, which then reacts with reactant $B$ to form product $AB$ and regenerate $C$: $A + C \\rightarrow AC$; $AC + B \\rightarrow AB + C$.",
    "Medium",
    "MCQ"
  );
  add(
    "What is the primary function of shape-selective catalysts such as ZSM-5 in the petrochemical industry?",
    ["To convert alcohols directly into gasoline (hydrocarbons) based on molecular pore and cage sizes","To completely combust all hydrocarbons into $\\text{CO}_2$ and $\\text{H}_2\\text{O}$","To crack heavy crude oil into diamond nanoparticles","To dissolve polymer waste into monomeric liquid"],
    0,
    "ZSM-5 is a synthetic aluminosilicate zeolite with a three-dimensional porous network whose pore size matches specific molecular dimensions, converting methanol directly into gasoline hydrocarbons.",
    "Easy",
    "MCQ"
  );
  add(
    "Enzymes generally exhibit optimal catalytic activity within which temperature and pH ranges in the human body?",
    ["$310\\text{ K}$ ($37^\\circ\\text{C}$) and $\\text{pH } 5\\text{ to }7$","$373\\text{ K}$ ($100^\\circ\\text{C}$) and $\\text{pH } 1\\text{ to }2$","$273\\text{ K}$ ($0^\\circ\\text{C}$) and $\\text{pH } 7\\text{ to }9$","$350\\text{ K}$ and $\\text{pH } 10\\text{ to }12$"],
    0,
    "Human biocatalysts (enzymes) function optimally at physiological body temperature ($310\\text{ K} / 37^\\circ\\text{C}$) and around neutral pH ($\\text{pH } 5\\text{ to }7$).",
    "Easy",
    "MCQ"
  );
  add(
    "Which enzyme hydrolyzes urea into ammonia and carbon dioxide?",
    ["Urease","Invertase","Zymase","Diastase"],
    0,
    "Urease is the specific enzyme that catalyzes the hydrolysis of urea: $\\text{NH}_2\\text{CONH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{urease}} 2\\text{NH}_3 + \\text{CO}_2$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following statements about catalytic poisons is correct?",
    ["They strongly adsorb onto the active sites of the catalyst, blocking reactant adsorption","They increase the activation energy of the reverse reaction selectively","They increase the surface area of the catalyst","They act as electron donors to the products"],
    0,
    "Catalytic poisons (such as $\\text{CO}$, $\\text{H}_2\\text{S}$, or arsenic compounds) preferentially adsorb on the active centers of the catalyst, thereby blocking the reactant molecules from adsorbing.",
    "Easy",
    "MCQ"
  );
  add(
    "The enzyme invertase catalyzes the conversion of:",
    ["Cane sugar (sucrose) into glucose and fructose","Glucose into ethyl alcohol and carbon dioxide","Starch into maltose","Maltose into glucose"],
    0,
    "Invertase catalyzes the hydrolysis (inversion) of sucrose into an equimolar mixture of glucose and fructose: $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\xrightarrow{\\text{invertase}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + \\text{C}_6\\text{H}_{12}\\text{O}_6$.",
    "Easy",
    "MCQ"
  );
  add(
    "A catalyst can NOT:",
    ["Change the equilibrium constant ($K_{\\text{eq}}$) or standard Gibbs free energy ($\\Delta G^\\circ$)","Lower the activation energy barrier","Accelerate both the forward and reverse reaction rates","Shorten the time taken to attain equilibrium"],
    0,
    "A catalyst affects only the kinetics (pathway and speed) of the reaction. It cannot change state functions such as $\\Delta H$, $\\Delta S$, $\\Delta G^\\circ$, or the equilibrium constant $K_{\\text{eq}}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In the modern adsorption theory of heterogeneous catalysis, which of the following is the correct sequence of steps?",
    ["Diffusion of reactants to catalyst surface $\\rightarrow$ Adsorption $\\rightarrow$ Chemical reaction on surface $\\rightarrow$ Desorption of products $\\rightarrow$ Diffusion away","Adsorption $\\rightarrow$ Diffusion to surface $\\rightarrow$ Desorption $\\rightarrow$ Reaction","Chemical reaction $\\rightarrow$ Adsorption $\\rightarrow$ Diffusion $\\rightarrow$ Desorption","Desorption $\\rightarrow$ Adsorption $\\rightarrow$ Diffusion $\\rightarrow$ Reaction"],
    0,
    "Heterogeneous catalysis proceeds through 5 distinct steps: (1) Diffusion of reactants to the catalyst surface; (2) Adsorption of reactants on active sites; (3) Reaction on surface to form intermediate complex; (4) Desorption of product molecules; (5) Diffusion of products away from the surface.",
    "Medium",
    "MCQ"
  );
  add(
    "Which enzyme is responsible for converting glucose into ethanol and carbon dioxide during fermentation?",
    ["Zymase","Invertase","Pepsin","Trypsin"],
    0,
    "Zymase, present in yeast, catalyzes the fermentation of glucose into ethanol and carbon dioxide: $\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{zymase}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$.",
    "Easy",
    "MCQ"
  );
  add(
    "When $\\text{CO}$ and $\\text{H}_2$ react in the presence of copper ($\\text{Cu}$) catalyst, the primary product formed is:",
    ["$\\text{HCHO}$ (Methanal)","$\\text{CH}_4$ (Methane)","$\\text{CH}_3\\text{OH}$ (Methanol)","$\\text{C}_2\\text{H}_6$ (Ethane)"],
    0,
    "Depending on the catalyst, $\\text{CO} + \\text{H}_2$ yields different products: with $\\text{Ni} \\rightarrow \\text{CH}_4 + \\text{H}_2\\text{O}$; with $\\text{Cu/ZnO-Cr}_2\\text{O}_3 \\rightarrow \\text{CH}_3\\text{OH}$; and with $\\text{Cu}$ alone $\\rightarrow \\text{HCHO}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Finely divided platinum catalyst in the Contact process is easily poisoned by small traces of which impurity in the $\\text{SO}_2$ gas stream?",
    ["$\\text{As}_2\\text{O}_3$ (Arsenious oxide)","$\\text{CO}_2$","$\\text{N}_2$","$\\text{H}_2\\text{O}$ vapor"],
    0,
    "Arsenious oxide ($\\text{As}_2\\text{O}_3$) acts as a potent catalytic poison for platinum, which is why $\\text{V}_2\\text{O}_5$ is preferred industrially as it is less susceptible to arsenic poisoning.",
    "Easy",
    "MCQ"
  );
  add(
    "Which metal ion acts as a catalytic activator/co-factor for the salivary enzyme amylase?",
    ["$\\text{Cl}^-$ (Chloride ion)","$\\text{Fe}^{3+}$","$\\text{Cu}^{2+}$","$\\text{Pb}^{2+}$"],
    0,
    "Salivary amylase is strongly activated by chloride ($\\text{Cl}^-$) ions, which enhance its catalytic activity.",
    "Medium",
    "MCQ"
  );
  add(
    "A positive catalyst increases the rate of reaction by:",
    ["Providing an alternative pathway with a lower activation energy","Increasing the frequency of binary collisions by orders of magnitude","Increasing the average kinetic energy of the molecules","Decreasing the enthalpy of reaction $\\Delta H$"],
    0,
    "The primary mechanism of a positive catalyst is lowering the activation energy barrier ($E_a$) by providing an alternative transition state.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following is true regarding colloidal catalysts?",
    ["They have an exceptionally large specific surface area, providing high catalytic activity","They are homogeneous catalysts that completely dissolve into single molecules","They cannot be poisoned by impurities","Their catalytic activity is independent of particle size"],
    0,
    "Colloidal catalysts have extremely fine particle sizes ($1\\text{ to }1000\\text{ nm}$), providing an enormous surface area per unit mass, resulting in very high catalytic activity.",
    "Easy",
    "MCQ"
  );
  add(
    "The catalytic activity of transition metals and their compounds is primarily attributed to:",
    ["Their ability to adopt multiple oxidation states and form coordination complexes with reactants","Their low melting points and high vapor pressures","Their diamagnetic electronic configurations","Their inability to adsorb gases"],
    0,
    "Transition metals possess vacant $d$-orbitals, variable oxidation states, and the ability to form interstitial and coordinate complexes, making them effective catalysts.",
    "Easy",
    "MCQ"
  );
  add(
    "What happens to the activation energy of a reaction when a negative catalyst (inhibitor) is added?",
    ["The effective activation energy of the reaction increases","The activation energy decreases","The activation energy drops to zero","The activation energy remains unchanged"],
    0,
    "A negative catalyst (or inhibitor) retards the reaction rate by either destroying reactive intermediates or forcing the reaction through an alternative pathway with a higher activation energy barrier.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following is NOT an enzyme-catalyzed reaction?",
    ["Decomposition of potassium chlorate in presence of $\\text{MnO}_2$","Conversion of milk into curd by lactobacilli","Hydrolysis of starch by diastase into maltose","Digestion of proteins into peptides by pepsin"],
    0,
    "Decomposition of $\\text{KClO}_3$ using $\\text{MnO}_2$ is an inorganic heterogeneous catalytic reaction, not an enzyme-catalyzed biological reaction.",
    "Easy",
    "MCQ"
  );
  add(
    "The phenomenon where one of the products formed in a chemical reaction acts as a catalyst for the reaction is termed:",
    ["Autocatalysis","Negative catalysis","Biocatalysis","Homogeneous catalysis"],
    0,
    "When a reaction product itself acts as a catalyst, increasing the speed of the reaction as more product forms, the phenomenon is called autocatalysis.",
    "Easy",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst does not alter the equilibrium constant of a reversible reaction.\\nReason (R): A catalyst lowers the activation energy of the forward and backward reactions by the exact same amount.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $K_{\\text{eq}} = k_{\\text{f}} / k_{\\text{b}}$, and both $k_{\\text{f}}$ and $k_{\\text{b}}$ are increased by the same factor ($e^{\\Delta E_a / RT}$), the ratio $K_{\\text{eq}}$ remains strictly constant.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Enzymes are extremely specific in their action.\\nReason (R): An enzyme has a uniquely shaped active site with specific functional groups that only bind complementary substrate molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains enzyme specificity according to the lock-and-key and induced fit models.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In heterogeneous catalysis, chemisorption of reactants on the catalyst surface is an essential step.\\nReason (R): Chemisorption weakens the bonds within reactant molecules, facilitating reaction at lower activation energy.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) describes the role of chemisorption in lowering activation barriers.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst accelerates the rate of a non-spontaneous reaction having $\\Delta G > 0$.\\nReason (R): A catalyst provides an alternate pathway that makes $\\Delta G$ negative.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. A catalyst cannot make a non-spontaneous reaction feasible, and it does not alter $\\Delta G$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Finely divided metals are more effective catalysts than smooth metal sheets.\\nReason (R): Finely divided substances possess much greater surface area and a larger number of active sites per unit mass.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Higher surface area exposes more free valencies for adsorption.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Zeolites are shape-selective catalysts.\\nReason (R): The catalytic action of zeolites depends on the pore size and geometry of their honeycomb-like three-dimensional aluminosilicate framework.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly defines shape selectivity in zeolites.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The enthalpy of reaction $\\Delta H$ is changed in the presence of a catalyst.\\nReason (R): The catalyst lowers the potential energy of both the reactants and the products.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. The catalyst alters neither the reactant energy nor the product energy, and $\\Delta H$ remains completely unchanged.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Catalytic poisons reduce or destroy the activity of a catalyst.\\nReason (R): Poisons react irreversibly or bind strongly to the active sites on the catalyst surface, preventing reactants from adsorbing.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains how catalytic poisons work.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In autocatalysis, the rate of reaction initially increases with time before reaching a maximum and then declining.\\nReason (R): The concentration of the autocatalytic product increases as the reaction proceeds, accelerating the rate until reactant depletion slows it down.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the characteristic sigmoid kinetic curve of autocatalytic reactions.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A promoter does not have catalytic activity of its own for the reaction.\\nReason (R): A promoter enhances the activity of the catalyst by increasing the roughness or active sites of the catalyst surface.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). For example, $\\text{Mo}$ alone cannot catalyze $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, but it enhances $\\text{Fe}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Boiling destroys the enzymatic activity of proteins.\\nReason (R): High temperatures cause irreversible thermal denaturation of proteins, altering the active site conformation.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains thermal inactivation of enzymes.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The reaction of $\\text{CO}$ with $\\text{H}_2$ produces different products in the presence of different catalysts.\\nReason (R): Catalysts exhibit high selectivity in directing reactions towards specific products.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). $\\text{Ni}$ yields $\\text{CH}_4$, $\\text{Cu/ZnO}$ yields $\\text{CH}_3\\text{OH}$, and $\\text{Cu}$ yields $\\text{HCHO}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Desorption of product molecules from the catalyst surface is essential in heterogeneous catalysis.\\nReason (R): Desorption clears the active sites so that fresh reactant molecules can adsorb and continue the catalytic cycle.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains why the adsorption cannot be too strong (Sabatier principle).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst alters the state of dynamic equilibrium.\\nReason (R): A catalyst increases the speed of the forward reaction while decreasing the speed of the backward reaction.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. A catalyst increases both forward and backward rates by the same factor and does not alter the equilibrium state.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Transition metals and their oxides act as excellent heterogeneous catalysts.\\nReason (R): Transition metal atoms have incompletely filled $d$-orbitals that can interact with reactant molecules to form unstable coordination intermediates.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Shape-selective catalysis depends upon the pore structure of the catalyst and the size of the reactant and product molecules.\\nReason (R): Molecules with dimensions larger than the pore size cannot enter the catalytic channels to react.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains size exclusion in shape-selective catalysis.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Enzymes display high efficiency compared to ordinary inorganic catalysts.\\nReason (R): A single enzyme molecule can transform millions of substrate molecules into products per minute.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) quantifies the high turnover number of enzymes.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the Contact process, $\\text{V}_2\\text{O}_5$ is preferred over platinum as a catalyst.\\nReason (R): Platinum catalyst is expensive and easily poisoned by arsenic impurities in the $\\text{SO}_2$ feed.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the industrial choice of $\\text{V}_2\\text{O}_5$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst lowers the activation energy of the forward reaction but increases that of the reverse reaction.\\nReason (R): The enthalpy of reaction $\\Delta H$ must remain constant.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because a catalyst lowers the activation energy of BOTH the forward and reverse reactions by the exact same amount. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Adding a catalyst does not change the composition of the reaction mixture at equilibrium.\\nReason (R): A catalyst increases the forward and reverse reaction rates by the same factor.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Homogeneous catalysis reactions typically involve the formation of an intermediate compound.\\nReason (R): In homogeneous catalysis, reactants and catalyst are in the same phase and can readily collide to form intermediates.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Co-enzymes enhance the catalytic activity of enzymes.\\nReason (R): Co-enzymes are non-protein organic molecules that bind temporarily or permanently to the enzyme to assist its catalytic function.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Many vitamins function as co-enzymes.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst remains chemically unchanged in mass and composition at the end of the reaction.\\nReason (R): The catalyst may undergo physical changes in texture or crystalline form during the reaction.",
    ["Both (A) and (R) are true but (R) is not the correct explanation of (A)","Both (A) and (R) are true and (R) is the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both statements are correct facts. A catalyst is regenerated chemically with no net change in mass or chemical composition. However, its physical form (e.g. granular $\\text{MnO}_2$ becoming a fine powder) can change. (R) does not explain why chemical mass remains unchanged.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the Ostwald process for nitric acid, platinum-rhodium gauze acts as a catalyst.\\nReason (R): The oxidation of ammonia to nitric oxide is an endothermic reaction that requires platinum to supply energy.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true. (R) is false because $4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$ is highly exothermic, and a catalyst never supplies energy to a reaction.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The catalytic decomposition of hydrogen peroxide can be inhibited by acetanilide or glycerol.\\nReason (R): Acetanilide and glycerol act as negative catalysts (stabilizers) that retard the decomposition of $\\text{H}_2\\text{O}_2$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Small amounts of acetanilide are added to commercial $\\text{H}_2\\text{O}_2$ solutions to stabilize them.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

function getCollisionTheoryQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Collision theory of reactions", text, opts, ans, exp, diff, type));
  add(
    "According to collision theory, the rate of a bimolecular elementary reaction $A + B \\rightarrow \\text{Products}$ is given by:",
    ["$\\text{Rate} = P Z_{AB} e^{-E_a / (RT)}$","$\\text{Rate} = Z_{AB} e^{E_a / (RT)}$","$\\text{Rate} = P Z_{AB} (RT / E_a)$","$\\text{Rate} = P e^{-E_a / (RT)}$"],
    0,
    "In collision theory, the rate is the product of collision frequency ($Z_{AB}$), steric factor ($P$), and Boltzmann fraction of molecules with energy $\\ge E_a$ ($e^{-E_a/(RT)}$).",
    "Easy",
    "MCQ"
  );
  add(
    "In the collision theory of chemical reactions, the steric factor $P$ is introduced to account for:",
    ["Proper spatial orientation of colliding molecules at the moment of collision","The change in enthalpy during reaction","The increase in collision frequency with temperature","The catalytic effect of container walls"],
    0,
    "Molecules must collide not only with sufficient kinetic energy but also with the proper geometric orientation so that the reacting atoms or functional groups can directly interact to form the transition state. The steric factor $P$ accounts for this orientation probability.",
    "Easy",
    "MCQ"
  );
  add(
    "Collision frequency ($Z$) in a gaseous reaction mixture is directly proportional to:",
    ["$\\sqrt{T}$","$T$","$T^2$","$1 / \\sqrt{T}$"],
    0,
    "Average molecular speed is given by $\\bar{v} = \\sqrt{\\frac{8 k_B T}{\\pi m}} \\propto \\sqrt{T}$. Since collision frequency $Z$ is proportional to relative speed, $Z \\propto \\sqrt{T}$.",
    "Easy",
    "MCQ"
  );
  add(
    "When the temperature of a gas is increased from $300\\text{ K}$ to $310\\text{ K}$, the collision frequency increases by approximately:",
    ["$1.7\\%$","$100\\%$","$50\\%$","$10\\%$"],
    0,
    "$\\frac{Z_{310}}{Z_{300}} = \\sqrt{\\frac{310}{300}} = \\sqrt{1.0333} \\approx 1.0165$. Thus collision frequency increases by only about $1.65\\% \\approx 1.7\\%$.",
    "Medium",
    "MCQ"
  );
  add(
    "The threshold energy ($E_{\\text{th}}$) of a reaction is $250\\text{ kJ mol}^{-1}$ and the average kinetic energy of the reactant molecules is $80\\text{ kJ mol}^{-1}$. What is the activation energy of the reaction?",
    ["$170\\text{ kJ mol}^{-1}$","$330\\text{ kJ mol}^{-1}$","$250\\text{ kJ mol}^{-1}$","$80\\text{ kJ mol}^{-1}$"],
    0,
    "Activation energy is the extra energy above the average internal energy of reactants needed to reach threshold energy: $E_a = E_{\\text{th}} - E_{\\text{reactants}} = 250 - 80 = 170\\text{ kJ mol}^{-1}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For which of the following reactions is the steric factor $P$ expected to be closest to $1$?",
    ["$\\text{K} + \\text{Br}_2 \\rightarrow \\text{KBr} + \\text{Br}$ (harpoon mechanism between simple atom and diatomic)","Polymerization of styrene","Hydrolysis of an optically active ester","Dimerization of a bulky protein"],
    0,
    "In the alkali atom-halogen reaction (harpoon mechanism), electron transfer occurs at long range irrespective of orientation, giving a steric factor $P \\approx 1$ or even $> 1$. Complex organic molecules with specific reactive sites have $P \\ll 1$.",
    "Hard",
    "MCQ"
  );
  add(
    "A major drawback or limitation of the simple collision theory of reaction rates is that:",
    ["It treats reacting molecules as hard, structureless spheres and ignores their rotational and vibrational degrees of freedom","It assumes collisions are elastic","It cannot be applied to gaseous reactions","It predicts zero rate at absolute zero"],
    0,
    "Simple collision theory models molecules as hard, rigid spheres, neglecting internal degrees of freedom, quantum vibrational energy levels, and structural complexities.",
    "Easy",
    "MCQ"
  );
  add(
    "The fraction of collisions with energy equal to or greater than the activation energy $E_a$ is given by the Boltzmann factor:",
    ["$e^{-E_a / (RT)}$","$e^{E_a / (RT)}$","$e^{-RT / E_a}$","$e^{RT / E_a}$"],
    0,
    "According to the Maxwell-Boltzmann distribution, the fraction of molecules with energy exceeding $E_a$ is $f = e^{-E_a / (RT)}$.",
    "Easy",
    "MCQ"
  );
  add(
    "According to transition state theory, the activated complex breaks down to form products at a universal frequency given by:",
    ["$\\nu = \\frac{k_B T}{h}$","$\\nu = \\frac{h}{k_B T}$","$\\nu = \\frac{k_B}{h T}$","$\\nu = \\frac{R T}{N_A}$"],
    0,
    "In Eyring's transition state theory, the transmission frequency across the potential energy saddle point is $\\nu = \\frac{k_B T}{h}$, where $k_B$ is Boltzmann's constant and $h$ is Planck's constant.",
    "Medium",
    "MCQ"
  );
  add(
    "Which of the following two factors are both essential for a collision between reactant molecules to be effective?",
    ["Energy barrier ($E \\ge E_{\\text{th}}$) and Orientation barrier (proper steric alignment)","High molecular speed and low pressure","Presence of a solvent and low temperature","High entropy of reaction and positive $\\Delta H$"],
    0,
    "Collision theory establishes two mandatory criteria for effective collision: (1) Energetic criterion: colliding species must have energy $\\ge E_{\\text{th}}$; (2) Steric criterion: colliding species must have proper spatial orientation.",
    "Easy",
    "MCQ"
  );
  add(
    "In a gas at STP, the total collision frequency $Z$ is typically of the order of:",
    ["$10^{25}\\text{ to }10^{28}\\text{ collisions L}^{-1}\\text{s}^{-1}$","$10^2\\text{ collisions L}^{-1}\\text{s}^{-1}$","$10^8\\text{ collisions L}^{-1}\\text{s}^{-1}$","$10^{50}\\text{ collisions L}^{-1}\\text{s}^{-1}$"],
    0,
    "Under ordinary conditions of temperature and pressure, collision frequency in gases is extraordinarily high, around $10^{25}\\text{ to }10^{28}$ collisions per liter per second ($10^{28}\\text{ to }10^{31}\\text{ m}^{-3}\\text{s}^{-1}$).",
    "Medium",
    "MCQ"
  );
  add(
    "Why is the reaction rate at room temperature relatively slow for many reactions despite enormous collision frequency?",
    ["Only a very small fraction of colliding molecules possesses kinetic energy $\\ge E_a$ and proper orientation","Most collisions are completely inelastic and lose mass","Collisions do not occur between unlike molecules","Molecules repel each other electrostatically at all distances"],
    0,
    "Even though there are $\\sim 10^{28}$ collisions per second, the exponential factor $e^{-E_a/(RT)}$ can be as small as $10^{-10}\\text{ to }10^{-20}$, meaning only 1 in billions of collisions is chemically effective.",
    "Easy",
    "MCQ"
  );
  add(
    "In collision theory, the pre-exponential factor $A$ is represented as:",
    ["$A = P \\times Z_{AB}$","$A = Z_{AB} / P$","$A = P + Z_{AB}$","$A = P e^{Z_{AB}}$"],
    0,
    "Comparing the Arrhenius equation $k = A e^{-E_a/(RT)}$ with collision theory rate constant $k = P Z_{AB} e^{-E_a/(RT)}$ shows $A = P Z_{AB}$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the activation energy of a reaction is zero ($E_a = 0$), the rate constant according to collision theory is:",
    ["$k = P Z_{AB}$","$k = 0$","$k = \\infty$","$k = Z_{AB} / P$"],
    0,
    "When $E_a = 0$, $e^{-E_a/(RT)} = e^0 = 1$. The rate constant becomes $k = P Z_{AB}$, controlled only by collision frequency and orientation.",
    "Easy",
    "MCQ"
  );
  add(
    "The potential energy of the activated complex is:",
    ["Greater than the potential energy of both reactants and products","Less than that of reactants but greater than products","Equal to the average kinetic energy of the reactants","Zero at all temperatures"],
    0,
    "The activated complex lies at the top of the potential energy barrier along the reaction coordinate, having higher potential energy than both reactants and products.",
    "Easy",
    "MCQ"
  );
  add(
    "What happens to the fraction of effective collisions when the activation energy of a reaction is lowered by a catalyst at constant temperature?",
    ["Increases exponentially","Decreases exponentially","Remains unchanged","Increases linearly"],
    0,
    "Since fraction $f = e^{-E_a/(RT)}$, decreasing $E_a$ to $E_a'$ makes the exponent less negative, causing $f$ to increase exponentially.",
    "Easy",
    "MCQ"
  );
  add(
    "A reaction has a steric factor $P = 10^{-4}$. This small value indicates that:",
    ["Only one out of every $10^4$ collisions occurs with the correct spatial orientation","The activation energy of the reaction is negative","The reaction is zero order","The collision frequency is extremely small"],
    0,
    "A steric factor $P = 10^{-4}$ means that geometric orientation requirements are very strict: only $0.01\\%$ of collisions with sufficient energy hit at the precise reactive angle.",
    "Easy",
    "MCQ"
  );
  add(
    "In the Maxwell-Boltzmann distribution, what does the area under the curve to the right of the activation energy $E_a$ represent?",
    ["The total fraction of molecules with energy equal to or greater than $E_a$","The total number of reactant molecules in the system","The enthalpy of reaction $\\Delta H$","The equilibrium constant $K$"],
    0,
    "The area under the distribution curve beyond the activation energy represents the proportion of molecules possessing kinetic energy equal to or greater than $E_a$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following describes the lifetime of an activated complex at the transition state?",
    ["Extremely short, of the order of molecular vibrations ($\\sim 10^{-13}\\text{ s}$)","Several minutes","A few seconds","Infinite until product forms"],
    0,
    "The activated complex is an unstable transition state situated at the peak of the potential energy surface, existing only for the duration of a single bond vibration ($sim 10^{-13}\\text{ s}$).",
    "Easy",
    "MCQ"
  );
  add(
    "When temperature is increased, the primary reason for the increase in reaction rate is:",
    ["A dramatic increase in the fraction of effective collisions ($e^{-E_a/(RT)}$)","An increase in collision frequency ($Z \\propto \\sqrt{T}$)","A decrease in the activation energy ($E_a$)","An increase in the steric factor ($P$)"],
    0,
    "While collision frequency increases by only $sim 1.7\\%$ for a $10\\text{ K}$ rise, the fraction of effective collisions ($e^{-E_a/(RT)}$) roughly doubles ($100\\%$ increase), which is the dominant cause of the rate increase.",
    "Easy",
    "MCQ"
  );
  add(
    "For an endothermic reaction, which of the following is correct regarding the activation energies?",
    ["$E_{a,\\text{forward}} > E_{a,\\text{backward}}$","$E_{a,\\text{forward}} < E_{a,\\text{backward}}$","$E_{a,\\text{forward}} = E_{a,\\text{backward}}$","$E_{a,\\text{forward}} = 0$"],
    0,
    "$\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{backward}} > 0 \\implies E_{a,\\text{forward}} > E_{a,\\text{backward}}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In collision theory, the units of collision frequency $Z_{AB}$ for a bimolecular reaction in SI units are:",
    ["$\\text{m}^{-3}\\text{s}^{-1}$ (or $\\text{number of collisions m}^{-3}\\text{s}^{-1}$)","$\\text{s}^{-1}$","$\\text{J mol}^{-1}$","$\\text{mol L}^{-1}\\text{s}^{-1}$"],
    0,
    "Collision frequency $Z_{AB}$ is defined as the number of collisions per unit volume per unit time, having SI units of $\\text{m}^{-3}\\text{s}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Not all collisions between reactant molecules lead to product formation.\\nReason (R): Only collisions that possess energy equal to or greater than the threshold energy and have proper spatial orientation result in chemical reaction.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains (A) according to the core postulates of collision theory.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The rate of reaction nearly doubles for every $10^\\circ\\text{C}$ rise in temperature, even though the collision frequency increases by only about $1.7\\%$.\\nReason (R): The fraction of molecules having energy greater than or equal to the activation energy ($e^{-E_a/(RT)}$) nearly doubles with a $10^\\circ\\text{C}$ rise in temperature.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact quantitative explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The steric factor $P$ is always equal to $1$ for all chemical reactions.\\nReason (R): All molecular collisions occur with identical spherical geometry.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. Most real molecules are non-spherical and have specific functional groups that must orient precisely, making $P \\ll 1$ in many cases.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Threshold energy is always greater than or equal to activation energy.\\nReason (R): Threshold energy is the sum of activation energy and the average internal energy of the reactant molecules.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $E_{\\text{reactants}} > 0$, $E_{\\text{th}} = E_a + E_{\\text{reactants}} > E_a$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An activated complex cannot be isolated from a reacting mixture.\\nReason (R): The activated complex has a fleeting existence with a lifetime of the order of $10^{-13}\\text{ seconds}$ at the potential energy peak.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why the transition state cannot be isolated like a stable chemical substance.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The collision frequency $Z$ is directly proportional to $\\sqrt{T}$.\\nReason (R): The root-mean-square and average speeds of gas molecules are proportional to the square root of absolute temperature.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Simple collision theory cannot accurately predict the rate constants of complex organic reactions.\\nReason (R): Simple collision theory models reacting molecules as rigid, structureless spheres and neglects orientation and internal energy distribution.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the fundamental limitation of simple collision theory.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The fraction of effective collisions increases when temperature is increased.\\nReason (R): Higher temperature shifts the Maxwell-Boltzmann energy distribution curve toward higher kinetic energy values.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a bimolecular reaction, collision theory rate constant is written as $k = P Z_{AB} e^{-E_a / (RT)}$.\\nReason (R): The pre-exponential factor in the Arrhenius equation is related to collision theory parameters by $A = P Z_{AB}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) equates Arrhenius $A$ with collision theory parameters.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The probability factor $P$ can sometimes be significantly less than $1$ for reactions involving complex polyatomic molecules.\\nReason (R): In large polyatomic molecules, the reactive functional groups represent only a tiny fraction of the total molecular surface area.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why steric factor $P$ is often $10^{-2}\\text{ to }10^{-6}$ for complex molecules.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In an endothermic reaction, the energy of the activated complex is higher than the energy of the products.\\nReason (R): The activated complex corresponds to the highest energy state on the reaction energy profile.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). The transition state is the highest peak along the reaction coordinate.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The value of collision frequency increases upon compressing a gas at constant temperature.\\nReason (R): Compressing a gas increases the number of molecules per unit volume, leading to more collisions per second per unit volume.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Collision frequency is proportional to the square of number density: $Z \\propto n^2$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For an elementary termolecular reaction, the probability of three molecules colliding simultaneously is very small.\\nReason (R): The collision frequency of termolecular collisions is many orders of magnitude smaller than bimolecular collision frequency.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why reactions with molecularity $3$ are rare, and molecularity $> 3$ is practically nonexistent.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): All collisions with kinetic energy $\\ge E_a$ do not necessarily lead to chemical reaction.\\nReason (R): Molecules must also collide with appropriate orientation so that the correct bonds can break and form.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) describes the orientation barrier requirement.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The factor $e^{-E_a/(RT)}$ represents the fraction of molecules with energy $\\ge E_a$.\\nReason (R): This factor is derived from the Maxwell-Boltzmann distribution law of molecular energies.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) identifies the theoretical source of the Boltzmann factor.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In collision theory, the activation energy is assumed to be temperature independent.\\nReason (R): Over typical laboratory temperature intervals, the variation of activation energy with temperature is negligibly small.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the practical justification.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst increases the collision frequency $Z_{AB}$ of reactant molecules.\\nReason (R): A catalyst lowers the activation energy barrier for the reaction.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because a catalyst does NOT increase collision frequency $Z_{AB}$ in the gas phase. It works by lowering the activation energy $E_a$. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In the harpoon mechanism for reactions between alkali metal atoms and halogen molecules, the steric factor can exceed $1$.\\nReason (R): An electron jumps from the alkali atom to the halogen molecule at a distance much larger than the physical collision diameter.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains why the effective cross section exceeds the physical hard-sphere radius (harpoon mechanism).",
    "Hard",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Transition state theory is considered superior to simple collision theory.\\nReason (R): Transition state theory takes into account the structural features, vibrational frequencies, and thermodynamic properties ($\\Delta S^\\ddagger, \\Delta H^\\ddagger$) of the activated complex.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why Eyring's transition state theory provides more accurate thermodynamic predictions than simple collision theory.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An increase in pressure increases the rate of gaseous reactions.\\nReason (R): Increasing pressure increases the concentration of gas molecules, which increases the number of collisions per unit time per unit volume.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): As temperature approaches absolute zero ($T \\rightarrow 0\\text{ K}$), the rate of a reaction with $E_a > 0$ approaches zero.\\nReason (R): At absolute zero, the fraction of molecules with kinetic energy $\\ge E_a$ becomes zero ($e^{-\\infty} = 0$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the thermodynamic limit.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The potential energy of the transition state is greater than that of the ground-state reactants.\\nReason (R): Formation of the transition state requires stretching or breaking of existing chemical bonds.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the potential energy peak.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): An elementary reaction can have a fractional molecularity.\\nReason (R): In an elementary reaction, molecules can collide in non-integer ratios.",
    ["Both (A) and (R) are false","(A) is true but (R) is false","(A) is false but (R) is true","Both (A) and (R) are true"],
    0,
    "Both (A) and (R) are false. Molecularity is always a positive integer ($1, 2, \\text{or } 3$) representing actual colliding particles.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The orientation factor $P$ can be correlated with the entropy of activation $\\Delta S^\\ddagger$.\\nReason (R): A highly organized and constrained transition state corresponds to a large negative entropy of activation and a very small steric factor $P$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) connects collision theory's steric factor $P$ with transition state theory's $\\Delta S^\\ddagger$ ($P \\propto e^{\\Delta S^\\ddagger / R}$).",
    "Hard",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Collision theory assumes that only translational kinetic energy along the line of centers contributes to overcoming the activation barrier.\\nReason (R): Rotational and vibrational energies are considered fully effective in simple collision theory.",
    ["(A) is true but (R) is false","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is false but (R) is true"],
    0,
    "(A) is true because simple collision theory considers only the component of relative translational kinetic energy along the line connecting the centers of the colliding spheres. (R) is false because simple collision theory ignores internal rotational and vibrational contributions.",
    "Medium",
    "ASSERTION_REASON"
  );
  return q;
}

function getHalfLifeActivationEnergyQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Half-life and activation energy", text, opts, ans, exp, diff, type));
  add(
    "The half-life of a first-order reaction is $20\\text{ minutes}$ at $300\\text{ K}$ and $5\\text{ minutes}$ at $320\\text{ K}$. What is the activation energy of the reaction? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $\\ln 4 = 1.386$)",
    ["$55.3\\text{ kJ mol}^{-1}$","$27.6\\text{ kJ mol}^{-1}$","$110.6\\text{ kJ mol}^{-1}$","$41.5\\text{ kJ mol}^{-1}$"],
    0,
    "Since $t_{1/2} = 0.693 / k$, $\\frac{k_{320}}{k_{300}} = \\frac{t_{1/2}(300)}{t_{1/2}(320)} = \\frac{20}{5} = 4$. Using $\\ln 4 = 1.386 = \\frac{E_a}{8.314}\\left(\\frac{20}{300 \\times 320}\\right)$, we get $E_a = \\frac{1.386 \\times 8.314 \\times 96000}{20} = 55,311\\text{ J mol}^{-1} \\approx 55.3\\text{ kJ mol}^{-1}$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a first-order reaction $A \\rightarrow \\text{Products}$, what is the ratio of time required for $99.9\\%$ completion ($t_{99.9\\%}$) to the half-life ($t_{1/2}$)?",
    ["$10$","$5$","$3$","$20$"],
    0,
    "$t_{99.9\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{0.1}\\right) = \\frac{2.303}{k} \\log(10^3) = \\frac{3 \\times 2.303}{k}$. Since $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k} = \\frac{0.3010 \\times 2.303}{k}$, the ratio is $\\frac{3}{0.3010} \\approx 9.97 \\approx 10$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a zero-order reaction, the time required for $75\\%$ of the reactant to react ($t_{75\\%}$) is related to the half-life ($t_{50\\%}$) by:",
    ["$t_{75\\%} = 1.5 \\times t_{50\\%}$","$t_{75\\%} = 2.0 \\times t_{50\\%}$","$t_{75\\%} = 1.25 \\times t_{50\\%}$","$t_{75\\%} = 3.0 \\times t_{50\\%}$"],
    0,
    "In a zero-order reaction, $t = \\frac{[A]_0 - [A]_t}{k}$. Thus $t_{50\\%} = \\frac{0.5[A]_0}{k}$ and $t_{75\\%} = \\frac{0.75[A]_0}{k}$. Hence $t_{75\\%} / t_{50\\%} = 0.75 / 0.50 = 1.5$.",
    "Easy",
    "MCQ"
  );
  add(
    "A radioactive isotope has a half-life of $5730\\text{ years}$. An archaeological wood sample has a carbon-14 activity that is $25\\%$ of that in fresh wood. What is the approximate age of the sample?",
    ["$11,460\\text{ years}$","$5,730\\text{ years}$","$17,190\\text{ years}$","$22,920\\text{ years}$"],
    0,
    "The remaining fraction is $25\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$, which corresponds to exactly $2$ half-lives. Age $= 2 \\times 5730 = 11,460\\text{ years}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction whose half-life is inversely proportional to the initial concentration of reactant, what is the order of the reaction?",
    ["$2$","$1$","$0$","$3$"],
    0,
    "$t_{1/2} \\propto [A]_0^{1-n}$. If $t_{1/2} \\propto [A]_0^{-1}$, then $1 - n = -1 \\implies n = 2$. The reaction is second order.",
    "Easy",
    "MCQ"
  );
  add(
    "A first-order reaction has a half-life of $10\\text{ minutes}$ at $300\\text{ K}$ and $2.5\\text{ minutes}$ at $320\\text{ K}$. What is the half-life at $310\\text{ K}$ if the activation energy is constant? (Take $\\sqrt{10 \\times 2.5} = 5$)",
    ["$5.0\\text{ minutes}$","$6.25\\text{ minutes}$","$3.75\\text{ minutes}$","$4.0\\text{ minutes}$"],
    0,
    "Because $\\frac{1}{300} - \\frac{1}{310} \\approx \\frac{1}{310} - \\frac{1}{320}$, the rate constant increases geometrically: $k_{310} = \\sqrt{k_{300} \\times k_{320}}$, and therefore $t_{1/2}(310) = \\sqrt{t_{1/2}(300) \\times t_{1/2}(320)} = \\sqrt{10 \\times 2.5} = \\sqrt{25} = 5.0\\text{ minutes}$.",
    "Hard",
    "MCQ"
  );
  add(
    "For a first-order reaction, the time required for $90\\%$ completion ($t_{90\\%}$) is related to the rate constant $k$ by:",
    ["$t_{90\\%} = \\frac{2.303}{k}$","$t_{90\\%} = \\frac{0.693}{k}$","$t_{90\\%} = \\frac{4.606}{k}$","$t_{90\\%} = \\frac{1}{k}$"],
    0,
    "$t_{90\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{100 - 90}\\right) = \\frac{2.303}{k}\\log(10) = \\frac{2.303 \\times 1}{k} = \\frac{2.303}{k}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a first-order reaction, what is the ratio $t_{99\\%} / t_{90\\%}$?",
    ["$2$","$1.5$","$3$","$4$"],
    0,
    "$t_{99\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{1}\\right) = \\frac{2 \\times 2.303}{k}$. $t_{90\\%} = \\frac{2.303}{k}\\log(10) = \\frac{2.303}{k}$. Thus $t_{99\\%} / t_{90\\%} = 2 / 1 = 2$.",
    "Easy",
    "MCQ"
  );
  add(
    "If the initial concentration of a zero-order reaction is tripled, its half-life period will:",
    ["Become $3$ times","Remain unchanged","Become $1/3$","Become $9$ times"],
    0,
    "For zero order, $t_{1/2} = \\frac{[A]_0}{2k} \\propto [A]_0$. Tripling the initial concentration triples the half-life period.",
    "Easy",
    "MCQ"
  );
  add(
    "For a second-order reaction $2A \\rightarrow B$, the half-life is $40\\text{ s}$ when $[A]_0 = 0.5\\text{ M}$. What will be the half-life when $[A]_0 = 1.0\\text{ M}$?",
    ["$20\\text{ s}$","$80\\text{ s}$","$40\\text{ s}$","$10\\text{ s}$"],
    0,
    "For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0} \\propto \\frac{1}{[A]_0}$. When $[A]_0$ is doubled from $0.5$ to $1.0\\text{ M}$, the half-life is halved: $40 / 2 = 20\\text{ s}$.",
    "Easy",
    "MCQ"
  );
  add(
    "A first-order reaction is $50\\%$ complete in $1.26 \\times 10^{14}\\text{ s}$. How much time would it take for $100\\%$ completion?",
    ["Infinite time ($\\infty$)","$2.52 \\times 10^{14}\\text{ s}$","$1.26 \\times 10^{15}\\text{ s}$","$5.04 \\times 10^{14}\\text{ s}$"],
    0,
    "For a first-order reaction, $[A]_t = [A]_0 e^{-kt}$. $[A]_t$ approaches zero only as $t \\rightarrow \\infty$. Therefore, a first-order reaction theoretically never reaches $100\\%$ completion.",
    "Easy",
    "MCQ"
  );
  add(
    "For a reaction, the half-life values at two initial concentrations are: at $[A]_0 = 0.1\\text{ M}$, $t_{1/2} = 200\\text{ s}$; at $[A]_0 = 0.4\\text{ M}$, $t_{1/2} = 50\\text{ s}$. The order of reaction is:",
    ["$2$","$1$","$0$","$0.5$"],
    0,
    "$\\frac{t_{1/2}(1)}{t_{1/2}(2)} = \\frac{200}{50} = 4 = \\left(\\frac{[A]_{0,2}}{[A]_{0,1}}\\right)^{n-1} = \\left(\\frac{0.4}{0.1}\\right)^{n-1} = 4^{n-1}$. Therefore, $n - 1 = 1 \\implies n = 2$.",
    "Medium",
    "MCQ"
  );
  add(
    "The half-life of a chemical reaction is found to double when the initial concentration of the reactant is increased by four times. What is the order of the reaction?",
    ["$0.5$","$1.5$","$0$","$2$"],
    0,
    "$t_{1/2} \\propto [A]_0^{1-n}$. When $[A]_0$ increases $4$ times, $t_{1/2}$ increases $2$ times: $4^{1-n} = 2 = 4^{0.5} \\implies 1 - n = 0.5 \\implies n = 0.5$.",
    "Medium",
    "MCQ"
  );
  add(
    "For a first-order reaction with $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$, what is the half-life period?",
    ["$100\\text{ s}$","$10\\text{ s}$","$69.3\\text{ s}$","$0.001\\text{ s}$"],
    0,
    "$t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{6.93 \\times 10^{-3}} = 100\\text{ s}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In a first-order reaction, the time taken for the concentration of reactant to drop from $0.1\\text{ M}$ to $0.025\\text{ M}$ is $40\\text{ minutes}$. What is the half-life of the reaction?",
    ["$20\\text{ minutes}$","$40\\text{ minutes}$","$10\\text{ minutes}$","$30\\text{ minutes}$"],
    0,
    "Decreasing from $0.1\\text{ M}$ to $0.025\\text{ M}$ is a $4$-fold reduction ($= 2^2$), which corresponds to $2$ half-lives. Thus $2 t_{1/2} = 40\\text{ min} \\implies t_{1/2} = 20\\text{ minutes}$.",
    "Easy",
    "MCQ"
  );
  add(
    "For a zero-order reaction with rate constant $k = 0.01\\text{ mol L}^{-1}\\text{s}^{-1}$ and initial concentration $[A]_0 = 0.5\\text{ M}$, what is the half-life period?",
    ["$25\\text{ s}$","$50\\text{ s}$","$100\\text{ s}$","$12.5\\text{ s}$"],
    0,
    "$t_{1/2} = \\frac{[A]_0}{2k} = \\frac{0.5}{2 \\times 0.01} = \\frac{0.5}{0.02} = 25\\text{ s}$.",
    "Easy",
    "MCQ"
  );
  add(
    "Which of the following graphs of half-life $t_{1/2}$ versus initial concentration $[A]_0$ represents a first-order reaction?",
    ["A stra\\right line parallel to the $[A]_0$ axis","A stra\\right line passing through origin with positive slope","A rectangular hyperbola","A parabola opening upward"],
    0,
    "Because $t_{1/2} = 0.693/k$ is constant regardless of $[A]_0$, the plot of $t_{1/2}$ vs $[A]_0$ is a horizontal stra\\right line parallel to the concentration axis.",
    "Easy",
    "MCQ"
  );
  add(
    "A catalyst is added to a first-order reaction, lowering the activation energy by $11.5\\text{ kJ mol}^{-1}$ at $300\\text{ K}$. How will the half-life of the reaction change? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $e^{4.61} \\approx 100$)",
    ["Decreases by a factor of $\\approx 100$","Increases by a factor of $\\approx 100$","Decreases by a factor of $2$","Remains unchanged"],
    0,
    "$\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\Delta E_a / (RT)} = e^{11500 / (8.314 \\times 300)} = e^{4.61} \\approx 100$. Since $t_{1/2} = 0.693/k$, the catalyzed half-life is $100$ times shorter.",
    "Medium",
    "MCQ"
  );
  add(
    "For a first-order reaction, what fraction of the initial concentration remains unreacted after $5$ half-lives?",
    ["$1/32$","$1/16$","$1/64$","$1/8$"],
    0,
    "Remaining fraction $= (1/2)^n = (1/2)^5 = 1/32 = 0.03125$ ($3.125\\%$).",
    "Easy",
    "MCQ"
  );
  add(
    "If the rate constant of a reaction is $k = 10^{-4}\\text{ s}^{-1}$ at $300\\text{ K}$ and $t_{1/2} = 693\\text{ s}$ at $310\\text{ K}$, what is the activation energy? (Take $R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$)",
    ["$176.7\\text{ kJ mol}^{-1}$","$88.4\\text{ kJ mol}^{-1}$","$53.6\\text{ kJ mol}^{-1}$","$35.3\\text{ kJ mol}^{-1}$"],
    0,
    "At $310\\text{ K}$, $t_{1/2} = 693\\text{ s} \\implies k_{310} = \\frac{0.693}{693} = 10^{-3}\\text{ s}^{-1}$. The ratio $\\frac{k_{310}}{k_{300}} = \\frac{10^{-3}}{10^{-4}} = 10$. Then $\\ln 10 = 2.303 = \\frac{E_a}{8.314}\\left(\\frac{10}{300 \\times 310}\\right)$. $E_a = \\frac{2.303 \\times 8.314 \\times 93000}{10} = 177,955\\text{ J mol}^{-1} \\approx 176.7\\text{ kJ mol}^{-1}$.",
    "Hard",
    "MCQ"
  );
  add(
    "The half-life of a zero-order reaction is $50\\text{ minutes}$ when the initial concentration is $0.2\\text{ M}$. How long will it take for the reaction to reach complete completion ($100\\%$)?",
    ["$100\\text{ minutes}$","$150\\text{ minutes}$","$200\\text{ minutes}$","$75\\text{ minutes}$"],
    0,
    "For zero order, $t_{100\\%} = \\frac{[A]_0}{k} = 2 \\times \\frac{[A]_0}{2k} = 2 \\times t_{50\\%} = 2 \\times 50 = 100\\text{ minutes}$.",
    "Easy",
    "MCQ"
  );
  add(
    "In a second-order reaction of type $A \\rightarrow \\text{Products}$, if the time required for $50\\%$ completion is $t_{50\\%}$, what is the time required for $75\\%$ completion ($t_{75\\%}$)?",
    ["$3 \\times t_{50\\%}$","$2 \\times t_{50\\%}$","$1.5 \\times t_{50\\%}$","$4 \\times t_{50\\%}$"],
    0,
    "For second order, $\\frac{1}{[A]} - \\frac{1}{[A]_0} = kt$. For $50\\%$, $\\frac{1}{0.5[A]_0} - \\frac{1}{[A]_0} = \\frac{1}{[A]_0} = k t_{50\\%}$. For $75\\%$, $\\frac{1}{0.25[A]_0} - \\frac{1}{[A]_0} = \\frac{3}{[A]_0} = k t_{75\\%}$. Thus $t_{75\\%} = 3 \\times t_{50\\%}$.",
    "Medium",
    "MCQ"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life period of a first-order reaction is independent of the initial concentration of the reactant.\\nReason (R): For a first-order reaction, $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic explanation of (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): As temperature increases, the half-life of a chemical reaction decreases.\\nReason (R): The rate constant $k$ increases with temperature according to the Arrhenius equation, and half-life is inversely proportional to $k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains why reactions proceed faster and have shorter half-lives at higher temperatures.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a zero-order reaction, doubling the initial concentration doubles the half-life period.\\nReason (R): For a zero-order reaction, $t_{1/2} = \\frac{[A]_0}{2k}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical proof: $t_{1/2} \\propto [A]_0$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a second-order reaction, $t_{75\\%} = 3 \\times t_{50\\%}$.\\nReason (R): In a second-order reaction, the half-life of each successive step is double that of the preceding step as concentration halves.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). First halving takes $t_1 = \\frac{1}{k[A]_0}$. Second halving takes $t_2 = \\frac{1}{k(0.5[A]_0)} = 2 t_1$. Total time for $75\\%$ reaction is $t_1 + 2 t_1 = 3 t_1 = 3 t_{50\\%}$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A catalyst reduces the half-life of a reaction.\\nReason (R): A catalyst lowers the activation energy, increasing the rate constant $k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Since $t_{1/2} \\propto 1/k$, increasing $k$ shortens $t_{1/2}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, the time required for $99.9\\%$ completion is roughly ten times the half-life.\\nReason (R): $\\log_{10}(10^3) = 3$ and $\\frac{3}{\\log_{10} 2} = \\frac{3}{0.3010} \\approx 9.97$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic calculation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Radioactive decays follow first-order kinetics.\\nReason (R): The half-life of a radioactive isotope is independent of the mass of radioactive material present.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) reflects the characteristic hallmark of first-order kinetics.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A zero-order reaction reaches $100\\%$ completion in time $t = 2 \\times t_{1/2}$.\\nReason (R): In a zero-order reaction, the amount of reactant reacted per unit time is constant.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). If $50\\%$ reacts in $t_{1/2}$, the remaining $50\\%$ reacts in an equal time interval $t_{1/2}$.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): If the activation energy of a reaction is zero, its half-life is independent of temperature.\\nReason (R): When $E_a = 0$, the rate constant $k$ is independent of temperature ($k = A$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a second-order reaction, a plot of $t_{1/2}$ versus $[A]_0$ is a stra\\right line passing through the origin.\\nReason (R): For a second-order reaction, $t_{1/2} = \\frac{1}{k[A]_0}$.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because $t_{1/2}$ vs $[A]_0$ is a rectangular hyperbola ($t_{1/2} \\propto 1/[A]_0$), not a stra\\right line through the origin (that is for zero order). (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Between two reactions with identical pre-exponential factors, the reaction with higher $E_a$ has a longer half-life at the same temperature.\\nReason (R): A higher $E_a$ leads to a smaller rate constant $k$, and half-life is inversely proportional to $k$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A). Smaller $k$ means the reaction proceeds more slowly, requiring more time to consume half the reactant.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A plot of $\\ln(t_{1/2})$ versus $1/T$ for a first-order reaction gives a stra\\right line with a positive slope equal to $+E_a / R$.\\nReason (R): Since $t_{1/2} = \\frac{\\ln 2}{k}$ and $k = A e^{-E_a/(RT)}$, $\\ln(t_{1/2}) = \\ln(\\ln 2) - \\ln A + \\frac{E_a}{RT}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the exact algebraic proof showing a positive slope $+E_a/R$.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): A first-order reaction never reaches completion in a finite time.\\nReason (R): The concentration of the reactant approaches zero asymptotically as time approaches infinity ($[A] = [A]_0 e^{-kt}$).",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the mathematical reason.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, the time required to complete $75\\%$ of the reaction is double its half-life.\\nReason (R): After one half-life, $50\\%$ of reactant remains, and after two half-lives, $25\\%$ remains, meaning $75\\%$ is reacted.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the direct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life method can be used to determine the order of a reaction.\\nReason (R): The relation $t_{1/2} \\propto [A]_0^{1-n}$ allows determination of $n$ by comparing half-lives at different initial concentrations.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the half-life method of order determination.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): In carbon dating, the age of ancient organic samples is estimated using the radioactive half-life of Carbon-14 ($5730\\text{ years}$).\\nReason (R): The ratio of Carbon-14 to Carbon-12 remains constant in living organisms but decreases exponentially after death following first-order kinetics.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) describes the scientific principle of radiocarbon dating.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a reaction with high activation energy, the half-life changes dramatically with a small change in temperature.\\nReason (R): The fractional change in rate constant with temperature $\\frac{d(\\ln k)}{dT} = \\frac{E_a}{RT^2}$ is proportional to $E_a$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a zero-order reaction increases as the reaction proceeds.\\nReason (R): For a zero-order reaction, $t_{1/2} = \\frac{[A]_0}{2k}$, and the concentration of reactant decreases over time.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because as the reaction proceeds, remaining reactant concentration is lower, so the time needed to halve that remaining amount decreases, not increases. (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of an enzyme-catalyzed reaction decreases at temperatures above $60^\\circ\\text{C}$.\\nReason (R): At temperatures above $60^\\circ\\text{C}$, the enzyme undergoes denaturation and loses its catalytic activity.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because when the enzyme denatures, the reaction slows down drastically or stops, which INCREASES the half-life (takes much longer to consume substrate). (R) is true.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a first-order reaction, $t_{87.5\\%} = 3 \\times t_{50\\%}$.\\nReason (R): When $87.5\\%$ of the reactant has reacted, the remaining concentration is $12.5\\% = (1/2)^3$ of the initial concentration.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) is the direct mathematical explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The half-life of a reaction depends on the units in which concentration is expressed for a first-order reaction.\\nReason (R): The rate constant $k$ of a first-order reaction has units of $\\text{s}^{-1}$, which does not involve concentration units.",
    ["(A) is false but (R) is true","Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false"],
    0,
    "(A) is false because $t_{1/2} = 0.693/k$ is independent of concentration units. (R) is true.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): For a second-order reaction, $t_{1/2}$ is inversely proportional to initial concentration.\\nReason (R): Integrated second-order rate law gives $t_{1/2} = \\frac{1}{k[A]_0}$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): Radioactive carbon dating is limited to objects with ages up to around $50,000\\text{ years}$.\\nReason (R): After about $10$ half-lives, the residual Carbon-14 activity is less than $0.1\\%$ of initial activity, making precise detection difficult.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) explains the physical limit of C-14 radiocarbon dating.",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The ratio $t_{75\\%} / t_{50\\%}$ is $2.0$ for a first-order reaction and $1.5$ for a zero-order reaction.\\nReason (R): In a first-order reaction, rate decreases as concentration falls, whereas in a zero-order reaction, rate remains constant throughout.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) correctly explains why first-order reactions take longer for the second $25\\%$ drop than zero-order reactions.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\\nAssertion (A): The activation energy of a reaction can be determined by measuring the half-life at two different temperatures.\\nReason (R): For a first-order reaction, $\\ln\\left(\\frac{t_{1/2}(T_1)}{t_{1/2}(T_2)}\\right) = \\frac{E_a}{R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$.",
    ["Both (A) and (R) are true and (R) is the correct explanation of (A)","Both (A) and (R) are true but (R) is not the correct explanation of (A)","(A) is true but (R) is false","(A) is false but (R) is true"],
    0,
    "Both (A) and (R) are true and (R) provides the exact mathematical relationship linking half-life to activation energy.",
    "Easy",
    "ASSERTION_REASON"
  );
  return q;
}

module.exports = {
  getCatalysisQuestions,
  getCollisionTheoryQuestions,
  getHalfLifeActivationEnergyQuestions
};
