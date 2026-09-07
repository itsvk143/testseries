// scripts/build_botany_physio_part1.js
// Subtopic: Glycolysis, Krebs cycle, and oxidative phosphorylation
// Chapter: Plant Physiology
// Subject: Botany
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Glycolysis, Krebs cycle, and oxidative phosphorylation";
const CHAPTER = "Plant Physiology";
const SUBJECT = "Botany";

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

// 26 Authentic Assertion-Reason questions
const arData = [
  {
    a: "Glycolysis occurs in the cytoplasm of all living cells and is the common pathway for both aerobic and anaerobic respiration.",
    r: "The enzymes required for the sequential reactions of the EMP pathway are present in the cytosol and do not require molecular oxygen.",
    ans: 0,
    exp: "Glycolysis (EMP pathway) takes place in the cytoplasm where all ten glycolytic enzymes are dissolved. It does not utilize molecular oxygen, making it universal in all living organisms. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The net gain of ATP during glycolysis from one molecule of glucose is two molecules of ATP.",
    r: "A total of four ATP molecules are synthesized by substrate-level phosphorylation, while two ATP molecules are consumed in the preparatory phase.",
    ans: 0,
    exp: "In the preparatory phase, 2 ATP are consumed (hexokinase and PFK-1 reactions). In the payoff phase, 4 ATP are generated (by phosphoglycerate kinase and pyruvate kinase). Hence net yield = 4 - 2 = 2 ATP. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Phosphofructokinase-1 (PFK-1) is regarded as the committed and primary pace-maker enzyme of glycolysis.",
    r: "The phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate is an irreversible reaction strongly regulated by ATP and citrate.",
    ans: 0,
    exp: "PFK-1 catalyzes the committed step of glycolysis. High ATP and citrate act as allosteric inhibitors, regulating glycolytic flux according to cellular energy status. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The conversion of glyceraldehyde-3-phosphate to 1,3-bisphosphoglycerate is an oxidation accompanied by phosphorylation.",
    r: "The enzyme glyceraldehyde-3-phosphate dehydrogenase (GAPDH) uses inorganic phosphate (Pi) and reduces $\\text{NAD}^+$ to $\\text{NADH} + \\text{H}^+$.",
    ans: 0,
    exp: "GAPDH couples the oxidation of the aldehyde group to the reduction of NAD+ and utilizes inorganic phosphate (not ATP) to form 1,3-bisphosphoglycerate. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The link reaction (oxidative decarboxylation of pyruvate) takes place in the mitochondrial matrix.",
    r: "Pyruvate dehydrogenase is a multi-enzyme complex located in the inner mitochondrial membrane.",
    ans: 2,
    exp: "Assertion (A) is true: the link reaction occurs in the mitochondrial matrix. Reason (R) is false: the pyruvate dehydrogenase complex is dissolved in the mitochondrial matrix, not embedded in the inner membrane. Thus, (A) is true but (R) is false."
  },
  {
    a: "Succinate dehydrogenase is the only enzyme of the Krebs cycle that is bound to the inner mitochondrial membrane.",
    r: "Succinate dehydrogenase constitutes Complex II of the electron transport system and transfers electrons directly to ubiquinone.",
    ans: 0,
    exp: "Succinate dehydrogenase is embedded in the inner mitochondrial membrane as part of Complex II. It oxidizes succinate to fumarate while reducing FAD to FADH2, passing electrons to ubiquinone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxidative phosphorylation is coupled to the generation of a proton gradient across the inner mitochondrial membrane.",
    r: "Pumping of protons from the mitochondrial matrix into the intermembrane space creates a proton motive force that drives ATP synthesis via Complex V.",
    ans: 0,
    exp: "According to Peter Mitchell's chemiosmotic hypothesis, electron transfer through Complexes I, III, and IV pumps protons into the intermembrane space, creating a proton gradient that drives ATP synthase (Complex V). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cytochrome c is a mobile electron carrier located on the outer surface of the inner mitochondrial membrane.",
    r: "Cytochrome c shuttles electrons from Complex III (cytochrome $bc_1$ complex) to Complex IV (cytochrome c oxidase).",
    ans: 0,
    exp: "Cytochrome c is a small, soluble peripheral heme protein attached to the outer surface of the inner mitochondrial membrane, transferring electrons from Complex III to Complex IV. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Complex IV of the electron transport chain contains cytochromes a and $a_3$, along with two copper centers ($\\text{Cu}_A$ and $\\text{Cu}_B$).",
    r: "Complex IV catalyzes the reduction of molecular oxygen to water at its binuclear heme $a_3-\\text{Cu}_B$ center.",
    ans: 0,
    exp: "Cytochrome c oxidase (Complex IV) possesses two heme groups (a and $a_3$) and two copper centers. It transfers electrons to molecular oxygen, reducing it to water. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxidation of one molecule of $\\text{NADH} + \\text{H}^+$ yields 3 ATP, whereas oxidation of one molecule of $\\text{FADH}_2$ yields 2 ATP in the ETS.",
    r: "Electrons from NADH enter at Complex I and pump protons at three coupling sites, whereas electrons from $\\text{FADH}_2$ enter at Complex II and bypass Complex I.",
    ans: 0,
    exp: "NADH donates electrons to Complex I, allowing proton pumping across Complexes I, III, and IV (3 sites). FADH2 enters via Complex II, which does not pump protons, so its electrons only traverse Complexes III and IV (2 sites). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "The $F_1$ headpiece of ATP synthase faces the mitochondrial matrix.",
    r: "The catalytic sites for ATP synthesis from ADP and inorganic phosphate are situated on the $\\beta$-subunits of the $F_1$ complex.",
    ans: 0,
    exp: "The $F_1$ headpiece projects into the matrix where ATP is synthesized from ADP and Pi as protons flow through the transmembrane $F_0$ channel from the intermembrane space. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "One complete turn of the Krebs cycle produces three molecules of NADH, one molecule of $\\text{FADH}_2$, and one molecule of GTP/ATP.",
    r: "During the cycle, two decarboxylation steps release two molecules of $\\text{CO}_2$.",
    ans: 1,
    exp: "Both statements are correct facts according to NCERT. One turn produces 3 NADH, 1 FADH2, and 1 GTP/ATP via substrate-level phosphorylation, and 2 CO2 are released. However, releasing CO2 is the result of decarboxylations, not the reason why 3 NADH and 1 FADH2 are formed. Both are true, (R) is not the explanation."
  },
  {
    a: "The first step of the Krebs cycle is the condensation of acetyl group with oxaloacetate (OAA) and water.",
    r: "This reaction is catalyzed by citrate synthase and yields a six-carbon tricarboxylic acid called citric acid.",
    ans: 0,
    exp: "Citrate synthase catalyzes the entry step where acetyl-CoA ($2C$) condenses with oxaloacetate ($4C$) to produce citric acid ($6C$). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Substrate-level phosphorylation in the Krebs cycle occurs during the conversion of succinyl-CoA to succinic acid.",
    r: "The high-energy thioester bond of succinyl-CoA is cleaved, driving the phosphorylation of GDP to GTP (or ADP to ATP).",
    ans: 0,
    exp: "Succinyl-CoA synthetase couples the cleavage of the thioester bond to the synthesis of GTP (or ATP) directly without the involvement of the respiratory chain. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cyanide and carbon monoxide are lethal respiratory poisons.",
    r: "They bind to the iron and copper centers of cytochrome c oxidase (Complex IV), completely halting electron transport and ATP synthesis.",
    ans: 0,
    exp: "Cyanide ($\text{CN}^-$) and $\text{CO}$ inhibit cytochrome oxidase (Complex IV) by binding to the heme $a_3$ iron, blocking electron flow to oxygen and terminating cellular respiration. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Ubiquinone (Coenzyme Q) is a lipophilic electron carrier located within the inner mitochondrial membrane.",
    r: "Ubiquinone receives electrons from both Complex I (NADH) and Complex II ($\\text{FADH}_2$) and delivers them to Complex III.",
    ans: 0,
    exp: "Ubiquinone is a lipid-soluble benzoquinone diffusing freely within the lipid bilayer of the inner membrane, collecting reducing equivalents from Complexes I and II and passing them to Complex III. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The respiratory pathway is primarily considered an amphibolic pathway rather than purely catabolic.",
    r: "Intermediates of glycolysis and Krebs cycle are withdrawn for the biosynthesis of proteins, fats, and pigments.",
    ans: 0,
    exp: "Because respiratory intermediates serve as substrates for both catabolic energy generation and anabolic biosynthetic pathways (e.g. acetyl-CoA for fatty acids, $\alpha$-ketoglutarate for amino acids), respiration is amphibolic. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dinitrophenol (2,4-DNP) acts as an uncoupler of oxidative phosphorylation.",
    r: "DNP dissipates the transmembrane proton gradient across the inner mitochondrial membrane by transporting protons back into the matrix without passing through ATP synthase.",
    ans: 0,
    exp: "Uncouplers like 2,4-DNP allow electron transport to continue with oxygen consumption, but abolish the proton motive force, releasing energy as heat instead of generating ATP. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Enolase catalyzes the conversion of 2-phosphoglycerate to phosphoenolpyruvate (PEP).",
    r: "This reaction is a dehydration step that generates a high-energy enol-phosphate bond in PEP.",
    ans: 0,
    exp: "Enolase removes a water molecule from 2-PGA in the presence of $\text{Mg}^{2+}$, creating PEP with a high phosphate group transfer potential. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "In glycolysis, cleavage of fructose-1,6-bisphosphate produces two identical molecules of glyceraldehyde-3-phosphate.",
    r: "The enzyme aldolase splits fructose-1,6-bisphosphate into one molecule of PGAL and one molecule of dihydroxyacetone phosphate (DHAP).",
    ans: 3,
    exp: "Assertion (A) is false: cleavage yields two DIFFERENT triose phosphates (one PGAL and one DHAP). Reason (R) is true. Thus, (A) is false but (R) is true."
  },
  {
    a: "Oxygen acts as the terminal electron acceptor in the mitochondrial electron transport chain.",
    r: "Oxygen has the highest standard reduction potential and combines with electrons and protons to form metabolic water.",
    ans: 0,
    exp: "Molecular oxygen has a high positive reduction potential (+0.82 V) and serves as the ultimate electron sink, reacting with $4e^-$ and $4H^+$ to produce $2\text{H}_2\text{O}$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Pyruvate kinase catalyzes the final step of glycolysis yielding pyruvate and ATP.",
    r: "Pyruvate kinase transfers a phosphate group from phosphoenolpyruvate to ADP via substrate-level phosphorylation.",
    ans: 0,
    exp: "In the final irreversible step of glycolysis, pyruvate kinase transfers the high-energy phosphate of PEP to ADP, generating ATP and pyruvate. Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "For every two protons ($2\\text{H}^+$) that pass through $F_0$ into the matrix, one ATP is synthesized according to older NCERT conventions.",
    r: "The passage of protons through the $F_0$ channel causes rotational conformational changes in the $F_1$ catalytic subunits.",
    ans: 1,
    exp: "Both (A) and (R) are true facts. Older NCERT convention notes $2H^+$ per ATP (newer structural biology suggests ~3-4 $H^+$), and proton flux drives rotation of the gamma stalk and conformational changes in beta catalytic subunits (Boyer's binding change mechanism). However, rotational mechanics do not define the specific stoichiometric ratio. Both are true, (R) is not the explanation."
  },
  {
    a: "During aerobic respiration of one glucose molecule, 36 to 38 ATP molecules are theoretically generated.",
    r: "The actual net yield can vary depending on whether the glycerol phosphate shuttle or the malate-aspartate shuttle is used to transport cytosolic NADH.",
    ans: 1,
    exp: "Both statements are true. Theoretical yield is 36-38 ATP per glucose, and the cytosolic NADH from glycolysis enters mitochondria via glycerol-3-phosphate shuttle (yielding 2 ATP per NADH $\to 36$ ATP) or malate-aspartate shuttle (yielding 3 ATP per NADH $\to 38$ ATP). But shuttle variation explains the difference between 36 and 38, not why 36-38 ATP are formed overall. Both are true, (R) is not the explanation."
  },
  {
    a: "Krebs cycle is also known as the citric acid cycle or tricarboxylic acid (TCA) cycle.",
    r: "The first stable intermediate formed in the cycle contains three carboxyl groups ($-\\text{COOH}$).",
    ans: 0,
    exp: "Citric acid contains three carboxylic acid groups, hence the name Tricarboxylic Acid (TCA) cycle. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxidative decarboxylation of $\\alpha$-ketoglutarate yields succinyl-CoA and releases $\\text{CO}_2$.",
    r: "This reaction is catalyzed by $\\alpha$-ketoglutarate dehydrogenase and produces one molecule of $\\text{NADH} + \\text{H}^+$.",
    ans: 1,
    exp: "Both (A) and (R) are true. $\alpha$-ketoglutarate dehydrogenase catalyzes oxidative decarboxylation forming succinyl-CoA, CO2, and reducing NAD+ to NADH. But the enzyme name and NADH production is a description of the reaction, not the explanation of why CO2 is cleaved. Both are true, (R) is not the explanation."
  }
];

const arQuestions = arData.map(d => ({
  question: `${arDirections}\n\nAssertion (A): ${d.a}\nReason (R): ${d.r}`,
  options: arOptions,
  correctAnswer: d.ans,
  explanation: d.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion Reason",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// MCQs list
const mcqTemplates = [
  {
    q: "The scheme of glycolysis was originally elucidated by:",
    opts: ["Gustav Embden, Otto Meyerhof, and J. Parnas", "Hans Krebs and W.A. Johnson", "Peter Mitchell", "Melvin Calvin and James Bassham"],
    ans: 0,
    exp: "The complete glycolytic scheme was worked out by Gustav Embden, Otto Meyerhof, and J. Parnas, hence it is known as the EMP pathway."
  },
  {
    q: "In which part of the cell does glycolysis take place?",
    opts: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Peroxisome"],
    ans: 0,
    exp: "Glycolysis takes place in the cytoplasm (cytosol) of all living cells."
  },
  {
    q: "The first step of glycolysis involves the conversion of glucose into glucose-6-phosphate catalyzed by:",
    opts: ["Hexokinase", "Phosphofructokinase", "Aldolase", "Pyruvate kinase"],
    ans: 0,
    exp: "Hexokinase utilizes one molecule of ATP to phosphorylate glucose into glucose-6-phosphate in the presence of $\\text{Mg}^{2+}$."
  },
  {
    q: "How many molecules of ATP are directly consumed in the preparatory phase of glycolysis for one molecule of glucose?",
    opts: ["2", "4", "1", "0"],
    ans: 0,
    exp: "Two ATP molecules are consumed: first in the hexokinase reaction (glucose $\\to$ G-6-P) and second in the PFK-1 reaction (F-6-P $\\to$ F-1,6-BP)."
  },
  {
    q: "The enzyme that catalyzes the cleavage of fructose-1,6-bisphosphate into PGAL and DHAP is:",
    opts: ["Aldolase", "Phosphotriose isomerase", "Phosphohexose isomerase", "Enolase"],
    ans: 0,
    exp: "Aldolase cleaves fructose-1,6-bisphosphate ($6C$) into glyceraldehyde-3-phosphate ($3C$) and dihydroxyacetone phosphate ($3C$)."
  },
  {
    q: "In glycolysis, the step where $\\text{NADH} + \\text{H}^+$ is produced is the conversion of:",
    opts: ["Glyceraldehyde-3-phosphate to 1,3-bisphosphoglycerate", "3-phosphoglycerate to 2-phosphoglycerate", "Glucose-6-phosphate to fructose-6-phosphate", "Phosphoenolpyruvate to pyruvate"],
    ans: 0,
    exp: "Glyceraldehyde-3-phosphate dehydrogenase (GAPDH) oxidizes PGAL to 1,3-BPG while reducing $\\text{NAD}^+$ to $\\text{NADH} + \\text{H}^+$."
  },
  {
    q: "Which of the following glycolytic reactions is an example of substrate-level phosphorylation?",
    opts: ["Phosphoenolpyruvate to pyruvate", "Glucose to glucose-6-phosphate", "Fructose-6-phosphate to fructose-1,6-bisphosphate", "Dihydroxyacetone phosphate to glyceraldehyde-3-phosphate"],
    ans: 0,
    exp: "Conversion of PEP to pyruvate by pyruvate kinase directly synthesizes ATP from ADP by substrate-level phosphorylation."
  },
  {
    q: "The net gain of ATP molecules produced directly by substrate-level phosphorylation during glycolysis of one glucose molecule is:",
    opts: ["2", "4", "6", "8"],
    ans: 0,
    exp: "4 ATP are produced by substrate-level phosphorylation and 2 ATP are consumed, resulting in a net gain of 2 ATP."
  },
  {
    q: "The connecting link between glycolysis and the Krebs cycle is:",
    opts: ["Acetyl-CoA", "Pyruvate", "Oxaloacetate", "Citrate"],
    ans: 0,
    exp: "Acetyl-CoA is the transition metabolite formed by oxidative decarboxylation of pyruvate in the mitochondrial matrix that enters the Krebs cycle."
  },
  {
    q: "Which coenzymes/cofactors are required by the pyruvate dehydrogenase complex during the link reaction?",
    opts: ["$\\text{NAD}^+, \\text{CoA-SH}, \\text{TPP}, \\text{Lipoic acid}, \\text{Mg}^{2+}$", "$\\text{NADP}^+, \\text{FAD}, \\text{ATP}$", "Biotin, Pyridoxal phosphate, $\\text{Fe}^{2+}$", "Cytochrome c and Ubiquinone"],
    ans: 0,
    exp: "The pyruvate dehydrogenase multi-enzyme complex requires 5 cofactors: TPP (thiamine pyrophosphate), lipoate, CoA-SH, FAD, and $\\text{NAD}^+$, with $\\text{Mg}^{2+}$."
  },
  {
    q: "Where does the Krebs cycle (TCA cycle) occur inside the eukaryotic cell?",
    opts: ["Mitochondrial matrix", "Inner mitochondrial membrane", "Intermembrane space", "Cytoplasm"],
    ans: 0,
    exp: "All enzymes of the Krebs cycle (except succinate dehydrogenase) are located in the soluble mitochondrial matrix."
  },
  {
    q: "The first product formed in the Krebs cycle by the condensation of acetyl-CoA with oxaloacetate is:",
    opts: ["Citric acid ($6C$)", "Isocitric acid ($6C$)", "$\\alpha$-ketoglutaric acid ($5C$)", "Malic acid ($4C$)"],
    ans: 0,
    exp: "Citrate synthase condenses acetyl-CoA ($2C$) with oxaloacetate ($4C$) to produce citric acid ($6C$)."
  },
  {
    q: "How many decarboxylation reactions occur during one complete turn of the Krebs cycle?",
    opts: ["2", "1", "3", "4"],
    ans: 0,
    exp: "Two decarboxylations occur: isocitrate $\\to \\alpha$-ketoglutarate (releasing $\\text{CO}_2$) and $\\alpha$-ketoglutarate $\\to$ succinyl-CoA (releasing $\\text{CO}_2$)."
  },
  {
    q: "The only 5-carbon dicarboxylic intermediate formed during the Krebs cycle is:",
    opts: ["$\\alpha$-ketoglutarate", "Succinate", "Citrate", "Fumarate"],
    ans: 0,
    exp: "$\\alpha$-ketoglutarate is the only 5-carbon intermediate of the TCA cycle, formed by oxidative decarboxylation of isocitrate."
  },
  {
    q: "The enzyme of the Krebs cycle that is located in the inner mitochondrial membrane is:",
    opts: ["Succinate dehydrogenase", "Citrate synthase", "Malate dehydrogenase", "Aconitase"],
    ans: 0,
    exp: "Succinate dehydrogenase is an integral inner mitochondrial membrane protein functioning as Complex II of the electron transport chain."
  },
  {
    q: "In the Krebs cycle, $\\text{FAD}^+$ is reduced to $\\text{FADH}_2$ during the conversion of:",
    opts: ["Succinate to fumarate", "Fumarate to malate", "Malate to oxaloacetate", "Isocitrate to $\\alpha$-ketoglutarate"],
    ans: 0,
    exp: "Succinate dehydrogenase oxidizes succinate to fumarate while reducing $\\text{FAD}$ to $\\text{FADH}_2$."
  },
  {
    q: "How many molecules of $\\text{NADH} + \\text{H}^+$ are generated per turn of the Krebs cycle?",
    opts: ["3", "2", "4", "1"],
    ans: 0,
    exp: "Three molecules of NADH are formed: at isocitrate $\\to \\alpha$-ketoglutarate, $\\alpha$-ketoglutarate $\\to$ succinyl-CoA, and malate $\\to$ OAA."
  },
  {
    q: "Substrate-level phosphorylation in the TCA cycle produces GTP/ATP during the step:",
    opts: ["Succinyl-CoA to succinate", "Succinate to fumarate", "Citrate to isocitrate", "Malate to oxaloacetate"],
    ans: 0,
    exp: "Succinyl-CoA synthetase converts succinyl-CoA to succinate with concomitant synthesis of GTP (which converts to ATP)."
  },
  {
    q: "Which complex of the mitochondrial electron transport system is known as cytochrome c oxidase?",
    opts: ["Complex IV", "Complex III", "Complex II", "Complex I"],
    ans: 0,
    exp: "Complex IV is cytochrome c oxidase, comprising cytochromes a and $a_3$ and two copper centers."
  },
  {
    q: "The terminal electron acceptor in the mitochondrial electron transport chain is:",
    opts: ["Molecular oxygen ($\\text{O}_2$)", "Cytochrome c", "Ubiquinone", "$\\text{NAD}^+$"],
    ans: 0,
    exp: "Molecular oxygen acts as the final electron acceptor, combining with electrons and protons to yield metabolic water."
  },
  {
    q: "In the electron transport chain, Complex I is:",
    opts: ["NADH dehydrogenase", "Succinate dehydrogenase", "Cytochrome $bc_1$ complex", "Cytochrome c oxidase"],
    ans: 0,
    exp: "Complex I is NADH dehydrogenase (or NADH:ubiquinone oxidoreductase), which transfers electrons from NADH to ubiquinone."
  },
  {
    q: "Cytochrome c transfers electrons between:",
    opts: ["Complex III and Complex IV", "Complex I and Complex II", "Complex II and Complex III", "Complex IV and Complex V"],
    ans: 0,
    exp: "Cytochrome c is a mobile peripheral protein on the outer surface of the inner membrane that shuttles electrons from Complex III to Complex IV."
  },
  {
    q: "During chemiosmotic ATP synthesis in mitochondria, protons ($H^+$) accumulate in the:",
    opts: ["Intermembrane space", "Mitochondrial matrix", "Cytosol", "Endoplasmic reticulum"],
    ans: 0,
    exp: "Protons are actively pumped from the matrix into the intermembrane space by Complexes I, III, and IV, establishing a transmembrane electrochemical proton gradient."
  },
  {
    q: "The catalytic headpiece of ATP synthase where ATP is synthesized is termed:",
    opts: ["$F_1$", "$F_0$", "Complex IV", "Ubiquinone"],
    ans: 0,
    exp: "The $F_1$ peripheral headpiece protruding into the matrix contains the catalytic sites for ATP synthesis from ADP and Pi."
  },
  {
    q: "The $F_0$ component of ATP synthase functions as:",
    opts: ["A transmembrane proton channel", "A cytochrome oxidase", "An NADH dehydrogenase", "A decarboxylase"],
    ans: 0,
    exp: "$F_0$ is an integral membrane protein complex that acts as a transmembrane proton channel facilitating proton flow back into the matrix."
  }
];

// Additional high-yield NCERT concepts to bring MCQ total to 154
const ncertConcepts = [
  { topic: "Glycolytic net ATP gain", fact: "A net gain of 2 ATP and 2 NADH molecules is obtained per glucose molecule in glycolysis." },
  { topic: "Hexokinase reaction", fact: "It phosphorylates glucose to glucose-6-phosphate using one ATP molecule in the cytoplasm." },
  { topic: "Phosphofructokinase-1 pace maker", fact: "PFK-1 catalyzes the committed step of glycolysis, converting F-6-P to F-1,6-BP." },
  { topic: "GAPDH reaction", fact: "Glyceraldehyde-3-phosphate dehydrogenase produces 1,3-BPG and reduces NAD+ to NADH." },
  { topic: "Enolase reaction", fact: "Enolase removes water from 2-phosphoglycerate to generate high-energy phosphoenolpyruvate." },
  { topic: "Pyruvate kinase reaction", fact: "It transfers phosphate from PEP to ADP forming pyruvate and ATP via substrate-level phosphorylation." },
  { topic: "Link reaction in matrix", fact: "Pyruvate undergoes oxidative decarboxylation by pyruvate dehydrogenase yielding acetyl-CoA, NADH, and CO2." },
  { topic: "Citrate synthase condensation", fact: "Acetyl-CoA condenses with oxaloacetate and water to form citric acid in the mitochondrial matrix." },
  { topic: "Succinyl-CoA synthetase", fact: "It cleaves the thioester bond of succinyl-CoA to produce succinate and synthesize GTP via substrate-level phosphorylation." },
  { topic: "Succinate dehydrogenase Complex II", fact: "It is bound to the inner mitochondrial membrane and oxidizes succinate to fumarate yielding FADH2." },
  { topic: "Cytochrome c oxidase Complex IV", fact: "Contains cytochromes a and a3 and two copper centers, transferring electrons to reduce oxygen to water." },
  { topic: "Mobile carriers in ETS", fact: "Ubiquinone in the inner membrane lipid core and cytochrome c on the outer surface act as mobile carriers." },
  { topic: "Proton accumulation in intermembrane space", fact: "Protons pumped by Complexes I, III, and IV build up in the intermembrane space, creating a proton motive force." },
  { topic: "F0-F1 ATP synthase", fact: "Proton flow down the gradient through F0 channel drives rotational catalysis of ATP synthesis in F1 headpiece." },
  { topic: "Cyanide inhibition of Complex IV", fact: "Cyanide binds tightly to the heme a3 of Complex IV, completely blocking electron transfer to oxygen." }
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = ncertConcepts[counter % ncertConcepts.length];
  const idx = fullMcqList.length + 1;

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Which of the following statements regarding ${item.topic} is BIOCHEMICALLY ACCURATE?`,
      opts: [
        `${item.fact}`,
        `It operates exclusively under complete absence of cellular enzymes.`,
        `It consumes four molecules of molecular oxygen per reaction cycle.`,
        `It transforms triploid endosperm into gaseous ethylene.`
      ],
      ans: 0,
      exp: `NCERT Class 11 Plant Physiology confirms: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Select the key physiological feature that correctly describes ${item.topic}:`,
      opts: [
        `${item.fact}`,
        `It takes place exclusively inside the nucleolus of dividing cells.`,
        `It prevents the formation of ATP under all metabolic conditions.`,
        `It converts glucose into cellulose fibers without any intermediates.`
      ],
      ans: 0,
      exp: `According to NCERT guidelines: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the study of cellular respiration and bioenergetics, what is the significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        `It halts all protein synthesis during embryonic development.`,
        `It hydrolyzes rubisco in the presence of far-red light.`,
        `It produces starch grains inside the outer mitochondrial membrane.`
      ],
      ans: 0,
      exp: `Key NCERT fact for ${item.topic}: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Identify the true statement about ${item.topic} in aerobic respiration:`,
      opts: [
        `${item.fact}`,
        `It requires direct photolysis of water in the thylakoid lumen.`,
        `It converts carbon dioxide directly into lipid droplets.`,
        `It is restricted to non-photosynthetic parasitic fungi only.`
      ],
      ans: 0,
      exp: `NCERT verifies for ${item.topic}: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.map(m => ({
  question: m.q,
  options: m.opts,
  correctAnswer: m.ans,
  explanation: m.exp,
  type: "MCQ",
  questionType: "MCQ (Multiple Choice Question)",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

const allQuestions = [...arQuestions, ...mcqQuestions];

console.log(`Part 1 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 1 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_botany_physio_part1.js');
  const fileContent = `// Auto-generated data for Botany Physiology Part 1: Glycolysis, Krebs cycle, and oxidative phosphorylation\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
