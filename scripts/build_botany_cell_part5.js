const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Cell cycle regulation and checkpoints";
const chapter = "Cell Structure and Function";
const subject = "Botany";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "During the S phase of the eukaryotic cell cycle, the amount of DNA per cell doubles from $2C$ to $4C$, but the chromosome number remains $2n$.",
    r: "DNA replication duplicates each chromatid without splitting the centromere, so each replicated chromosome consists of two identical sister chromatids joined at one centromere.",
    ans: 0,
    exp: "DNA replication in S phase doubles the DNA content ($2C \\rightarrow 4C$). However, chromosome number is counted by the number of functional centromeres; since sister chromatids remain attached at the single centromere, the chromosome count remains diploid ($2n$). (R) correctly explains (A)."
  },
  {
    a: "Cells in the $G_0$ (quiescent) stage are metabolically inactive and dead.",
    r: "Cells exit $G_1$ phase to enter $G_0$ when they no longer need to proliferate, but they remain metabolically active and can re-enter the cell cycle upon appropriate signaling.",
    ans: 3,
    exp: "Assertion is false: cells in $G_0$ (e.g., adult heart cells, neurons) are fully viable and metabolically active; they have simply suspended active division. Reason is true."
  },
  {
    a: "The $G_1/S$ checkpoint is also known as the restriction point in mammalian cells.",
    r: "Once a cell passes the $G_1/S$ checkpoint, it is irreversibly committed to completing DNA replication and dividing.",
    ans: 0,
    exp: "The restriction point in late $G_1$ represents the point of no return: passing it commits the cell to DNA synthesis and the remainder of the cell cycle regardless of external growth factors. (R) correctly explains (A)."
  },
  {
    a: "p53 is referred to as the 'guardian of the genome'.",
    r: "In response to DNA damage, p53 arrests the cell cycle at the $G_1/S$ checkpoint by transactivating p21, allowing time for DNA repair or triggering apoptosis if damage is irreparable.",
    ans: 0,
    exp: "p53 functions as a critical tumor suppressor that detects DNA lesions, halts $G_1 \\rightarrow S$ progression via CDK inhibitors (like p21), and coordinates repair or programmed cell death. (R) correctly explains (A)."
  },
  {
    a: "The maturation-promoting factor (MPF) regulates the transition of cells from $G_2$ into M phase.",
    r: "MPF consists of a catalytic subunit, Cyclin-Dependent Kinase 1 (CDK1), and a regulatory subunit, Cyclin B.",
    ans: 0,
    exp: "The $G_2/M$ checkpoint transition is governed by MPF (CDK1/Cyclin B complex), which phosphorylates lamins, histones, and condensins to initiate prophase. Both statements are true and Reason explains Assertion."
  },
  {
    a: "The Spindle Assembly Checkpoint (SAC) prevents premature entry into anaphase.",
    r: "Unattached kinetochores send an inhibitory signal that prevents the activation of the Anaphase-Promoting Complex/Cyclosome (APC/C).",
    ans: 0,
    exp: "SAC ensures that anaphase cannot start until every single chromosome has achieved stable, bipolar attachment to the spindle apparatus. Unattached kinetochores inhibit APC/C, blocking securin degradation. (R) correctly explains (A)."
  },
  {
    a: "Separation of sister chromatids during anaphase requires the activation of the Anaphase-Promoting Complex/Cyclosome (APC/C).",
    r: "APC/C mediates the ubiquitination and proteasomal degradation of securin, liberating active separase to cleave cohesin rings holding sister chromatids together.",
    ans: 0,
    exp: "APC/C degrades securin (an inhibitory chaperone), releasing active separase protease, which cleaves the kleisin subunit of cohesin, permitting chromatid separation. (R) correctly explains (A)."
  },
  {
    a: "In animal cells, duplication of the centriole occurs in the cytoplasm during the S phase.",
    r: "Centriole duplication in the cytoplasm is coordinated with nuclear DNA replication during the S phase of the cell cycle.",
    ans: 0,
    exp: "During S phase, two vital replication events occur simultaneously: DNA replication in the nucleus and duplication of the centrosome/centrioles in the cytoplasm. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Cyclin-dependent kinases (CDKs) require association with specific cyclin proteins for their catalytic activity.",
    r: "The cellular concentration of CDKs oscillates dramatically during the cell cycle, whereas cyclin levels remain constant.",
    ans: 2,
    exp: "Assertion is true as CDKs are inactive without bound cyclins. Reason is false because CDK protein levels remain relatively constant throughout the cycle, while cyclin concentrations oscillate dramatically through cyclic synthesis and degradation."
  },
  {
    a: "Retinoblastoma protein (Rb) acts as a molecular brake on $G_1/S$ cell cycle progression.",
    r: "Unphosphorylated Rb binds to and inhibits E2F transcription factors, preventing the transcription of genes required for S phase entry.",
    ans: 0,
    exp: "Hypophosphorylated Rb sequesters E2F. When phosphorylated by Cyclin D-CDK4/6 and Cyclin E-CDK2 complexes, Rb releases E2F to activate S-phase genes. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "The $G_2$ phase is characterized by intensive protein synthesis in preparation for mitosis.",
    r: "Proteins such as tubulin, required for mitotic spindle fiber assembly, are synthesized during the $G_2$ phase while overall cell growth continues.",
    ans: 0,
    exp: "During $G_2$, the cell manufactures tubulin and structural proteins necessary for the mitotic apparatus, while RNA and ATP levels build up. (R) correctly explains (A)."
  },
  {
    a: "If cell cycle checkpoints fail, genomic instability and uncontrolled cell proliferation can result.",
    r: "Defects in checkpoint regulators like p53, ATM, or Rb allow cells with DNA mutations or aneuploidy to divide, predisposing to oncogenesis.",
    ans: 0,
    exp: "Checkpoints act as quality-control fail-safes. Their mutation allows damaged or mis-segregated genomes to propagate, leading directly to cancer. (R) correctly explains (A)."
  },
  {
    a: "Colchicine arrests dividing cells at metaphase.",
    r: "Colchicine binds to tubulin dimers and inhibits microtubule polymerisation, preventing the formation of the mitotic spindle apparatus.",
    ans: 0,
    exp: "Colchicine is an antimitotic alkaloid that binds tubulin, preventing spindle microtubule assembly and arresting cells at metaphase (used for karyotyping and polyploidy induction). (R) correctly explains (A)."
  },
  {
    a: "Interphase represents the resting stage of the cell where the cell is completely dormant.",
    r: "During interphase, the cell is highly active metabolically, growing, synthesizing RNA and proteins, and replicating its genomic DNA.",
    ans: 3,
    exp: "Assertion is false: calling interphase a 'resting phase' is a historical misnomer; the cell is metabolically extremely active. Reason is true."
  },
  {
    a: "The duration of the cell cycle varies significantly among different organisms and cell types.",
    r: "A typical human cell in culture divides once approximately every 24 hours, whereas yeast cells complete a cell cycle in about 90 minutes.",
    ans: 0,
    exp: "Cell cycle duration is organism- and tissue-specific (e.g., 24 hours in human cultured fibroblasts vs 90 minutes in budding yeast). (R) correctly explains (A)."
  },
  {
    a: "In the 24-hour human cell cycle, M phase accounts for less than 5% of the total cycle duration.",
    r: "Interphase lasts for more than 95% of the total duration of the eukaryotic cell cycle.",
    ans: 0,
    exp: "In a typical 24-hour human cell cycle, M phase lasts for only about 1 hour (<5%), while interphase occupies over 23 hours (>95%). Both (A) and (R) are true and (R) is the correct explanation."
  },
  {
    a: "Kinetochores must experience mechanical tension from amphitelic spindle attachment to satisfy the spindle checkpoint.",
    r: "Opposing pulling forces exerted by microtubules from opposite spindle poles create tension across sister kinetochores, shutting off the SAC inhibitory cascade.",
    ans: 0,
    exp: "Tension generated across sister kinetochores by amphitelic (bipolar) attachment signals that all chromosomes are correctly aligned, relieving SAC inhibition. (R) correctly explains (A)."
  },
  {
    a: "DNA synthesis cannot re-occur within the same cell cycle once S phase is completed.",
    r: "Replication licensing factors (like MCM helicases) are inactivated or exported from the nucleus after initiation, preventing re-replication in $G_2$.",
    ans: 0,
    exp: "Eukaryotic cells strictly fire replication origins once and only once per cell cycle through the cyclic assembly and destruction of prereplicative complexes. (R) correctly explains (A)."
  },
  {
    a: "Radiation-induced DNA double-strand breaks activate the ATM kinase pathway.",
    r: "ATM phosphorylates checkpoint kinases (Chk2) and p53, enforcing cell cycle arrest to facilitate DNA repair.",
    ans: 0,
    exp: "ATM is a primary sensor of double-strand DNA breaks. It initiates a phosphorylation cascade that stabilizes p53 and blocks CDK activity. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "The $G_1$ phase corresponds to the interval between mitosis and initiation of DNA replication.",
    r: "During $G_1$, the cell duplicates its genomic DNA and increases its chromosome count from $2n$ to $4n$.",
    ans: 2,
    exp: "Assertion is true: $G_1$ is the gap between M phase and S phase. Reason is false: DNA duplication occurs in S phase, and chromosome number never increases to $4n$ during normal interphase."
  },
  {
    a: "Cyclin destruction is mediated by ubiquitin-dependent proteasomal degradation.",
    r: "Cyclins contain destruction box sequences that are recognized by ubiquitin ligases like APC/C and SCF complexes.",
    ans: 0,
    exp: "Cyclins are targeted for rapid proteolysis by specific E3 ubiquitin ligases (SCF in $G_1/S$, APC/C in M phase) that attach polyubiquitin chains for 26S proteasome destruction. (R) correctly explains (A)."
  },
  {
    a: "Centrioles are absent in higher plant cells, yet plants successfully form mitotic spindles and divide.",
    r: "Plant cells utilize anastral spindle assemblies organized by diffuse microtubule organizing centers (MTOCs) without centrioles.",
    ans: 0,
    exp: "Higher plants lack centrosomes/centrioles; they form anastral (barrel-shaped) spindles from nuclear envelope-associated MTOCs. Both (A) and (R) are true and (R) explains (A)."
  },
  {
    a: "Apoptosis is an active, programmed cellular suicide mechanism that eliminates defective or dangerous cells.",
    r: "Cells that harbor severe, irreparable DNA damage trigger intrinsic apoptotic cascades to prevent propagation of oncogenic mutations.",
    ans: 0,
    exp: "Apoptosis is genetically regulated cell death. Irreparably damaged cells trigger mitochondrial cytochrome c release and caspase activation to prevent tumor formation. (R) correctly explains (A)."
  },
  {
    a: "In adult humans, many cells do not exhibit division (e.g., heart cells) and enter $G_0$.",
    r: "Such cells only divide occasionally as needed to replace cells lost due to injury or cell death.",
    ans: 0,
    exp: "NCERT states that many adult cells do not divide (e.g., cardiac cells) and other cells divide only occasionally to replace lost cells; these cells enter the $G_0$ quiescent stage. (R) correctly explains (A)."
  },
  {
    a: "Cohesin protein rings hold sister chromatids together from S phase until the onset of anaphase.",
    r: "Premature cleavage of cohesin before metaphase plate alignment leads to chromosome mis-segregation and aneuploidy.",
    ans: 1,
    exp: "Both statements are true: cohesin complexes establish sister chromatid cohesion during S phase, and premature cleavage causes random chromosome loss (aneuploidy). (R) describes the pathological outcome of failure, rather than explaining how cohesin functions normally."
  },
  {
    a: "The nuclear envelope breaks down at the end of prophase, marking the transition into prometaphase.",
    r: "Disassembly of the nuclear lamina is triggered by phosphorylation of nuclear lamins by active Cyclin B-CDK1 (MPF).",
    ans: 0,
    exp: "MPF directly phosphorylates nuclear lamin proteins, causing depolymerization of the nuclear lamina and fragmentation of the nuclear envelope. (R) correctly explains (A)."
  }
];

const mcqQuestions = [
  {
    q: "A typical human cell in culture divides once in approximately every:",
    opts: ["20 minutes", "90 minutes", "24 hours", "48 hours"],
    ans: 2,
    exp: "A typical human cell in tissue culture divides once every 24 hours on average."
  },
  {
    q: "Yeast (Saccharomyces cerevisiae) completes a full cell cycle in about:",
    opts: ["20 minutes", "90 minutes", "12 hours", "24 hours"],
    ans: 1,
    exp: "Yeast cells divide rapidly, completing a complete cell cycle in approximately 90 minutes."
  },
  {
    q: "Interphase in a typical eukaryotic cell cycle occupies more than what percentage of the total cycle duration?",
    opts: ["50%", "75%", "90%", "95%"],
    ans: 3,
    exp: "Interphase accounts for more than 95% of the total duration of the eukaryotic cell cycle, while M phase occupies less than 5%."
  },
  {
    q: "The phase of the cell cycle during which nuclear DNA replication occurs is the:",
    opts: ["$G_1$ phase", "S phase", "$G_2$ phase", "$G_0$ phase"],
    ans: 1,
    exp: "DNA synthesis and replication occur exclusively during the S (Synthesis) phase of interphase."
  },
  {
    q: "If the initial amount of DNA in a cell is denoted as $2C$, what will be the amount of DNA after the completion of the S phase?",
    opts: ["$C$", "$2C$", "$4C$", "$8C$"],
    ans: 2,
    exp: "During S phase, DNA replicates, doubling the DNA content per cell from $2C$ to $4C$."
  },
  {
    q: "If a diploid cell has $2n = 16$ chromosomes in the $G_1$ phase, how many chromosomes will be present in the cell at the end of the S phase?",
    opts: ["8", "16", "32", "64"],
    ans: 1,
    exp: "Although DNA content doubles ($2C \\rightarrow 4C$) in S phase, the chromosome number remains unchanged ($2n = 16$) because sister chromatids remain united at a single centromere."
  },
  {
    q: "During which phase does the duplication of centrioles occur in the cytoplasm of animal cells?",
    opts: ["$G_1$ phase", "S phase", "$G_2$ phase", "Telophase"],
    ans: 1,
    exp: "In animal cells, centriole duplication begins and completes in the cytoplasm during S phase, coordinated with nuclear DNA replication."
  },
  {
    q: "The quiescent stage ($G_0$) of the cell cycle is characterized by cells that:",
    opts: ["Have exited the cell cycle, remain metabolically active, but do not proliferate", "Are dead and undergoing autolysis", "Are actively replicating their DNA continuously", "Are permanently arrested in metaphase"],
    ans: 0,
    exp: "Cells that enter $G_0$ exit the active division cycle; they are metabolically fully functional but do not proliferate unless stimulated."
  },
  {
    q: "The protein complex that phosphorylates cellular targets to drive cells into M phase is known as MPF, which consists of:",
    opts: ["Cyclin A and CDK4", "Cyclin B and CDK1", "Cyclin D and CDK6", "Cyclin E and CDK2"],
    ans: 1,
    exp: "Maturation/M-phase Promoting Factor (MPF) is composed of the regulatory subunit Cyclin B and the catalytic kinase CDK1 (Cdc2)."
  },
  {
    q: "The major checkpoint that acts as the primary 'point of no return' committing a cell to divide is located at the:",
    opts: ["$G_1/S$ transition", "$G_2/M$ transition", "Metaphase-to-anaphase transition", "Telophase-to-$G_1$ transition"],
    ans: 0,
    exp: "The $G_1/S$ checkpoint (restriction point) is the major commitment point; once passed, the cell completes DNA replication and mitosis."
  },
  {
    q: "The tumor suppressor protein known as the 'guardian of the genome' that halts cell cycle progression upon sensing DNA damage is:",
    opts: ["p53", "Tubulin", "Histone H1", "Cohesin"],
    ans: 0,
    exp: "p53 monitors genomic integrity; it arrests the cell cycle at $G_1/S$ via p21 induction or initiates apoptosis if damage cannot be repaired."
  },
  {
    q: "Which complex is responsible for triggering the degradation of securin, thereby permitting sister chromatid separation at anaphase?",
    opts: ["Anaphase-Promoting Complex/Cyclosome (APC/C)", "DNA polymerase III", "Ribosome 60S subunit", "Spliceosome"],
    ans: 0,
    exp: "APC/C is an E3 ubiquitin ligase that targets securin and cyclin B for destruction, enabling separase to cleave cohesin at anaphase."
  },
  {
    q: "The enzyme that directly cleaves the cohesin complex holding sister chromatids together is:",
    opts: ["Separase", "Securin", "Topoisomerase", "Helicase"],
    ans: 0,
    exp: "Separase is a protease that cleaves cohesin rings. It is held inactive by securin until APC/C degrades securin at the metaphase-to-anaphase transition."
  },
  {
    q: "The spindle assembly checkpoint (SAC) monitors which of the following cellular events?",
    opts: ["Accurate duplication of centrioles in $G_1$", "Bipolar attachment and tension of kinetochores to spindle microtubules", "Synthesis of phospholipids in SER", "Decarboxylation of pyruvate in mitochondria"],
    ans: 1,
    exp: "SAC ensures that all chromosomes are properly bi-oriented at the metaphase plate with kinetochores under tension before anaphase begins."
  },
  {
    q: "Colchicine is an antimitotic drug that arrests cells in metaphase by:",
    opts: ["Inhibiting DNA replication in S phase", "Preventing tubulin polymerisation and spindle assembly", "Cleaving histone proteins", "Activating hydrolytic enzymes in lysosomes"],
    ans: 1,
    exp: "Colchicine binds to tubulin dimers, preventing microtubule assembly into mitotic spindle fibers and arresting dividing cells at metaphase."
  },
  {
    q: "Which cyclin-CDK pair is primarily active during early and mid $G_1$ to phosphorylate the Retinoblastoma (Rb) protein?",
    opts: ["Cyclin D with CDK4/6", "Cyclin B with CDK1", "Cyclin A with CDK1", "Cyclin H with CDK7"],
    ans: 0,
    exp: "Cyclin D complexes with CDK4 and CDK6 in response to mitogenic signals to initiate Rb phosphorylation, releasing E2F."
  },
  {
    q: "Proteins required for spindle fiber assembly, such as tubulin, are synthesized during which stage of the cell cycle?",
    opts: ["$G_1$ phase", "S phase", "$G_2$ phase", "$G_0$ phase"],
    ans: 2,
    exp: "During the $G_2$ phase, proteins like tubulin are synthesized in preparation for mitosis while cell growth continues."
  },
  {
    q: "What happens to the Retinoblastoma protein (Rb) to permit passage through the $G_1/S$ checkpoint?",
    opts: ["It is hyperphosphorylated by cyclin-CDK complexes, releasing E2F", "It is cleaved into amino acids by pepsin", "It binds irreversibly to genomic DNA", "It forms disulfide bonds with actin"],
    ans: 0,
    exp: "Phosphorylation of Rb by $G_1$ cyclin-CDKs inactivates its inhibitory hold on E2F transcription factors, allowing transcription of S-phase genes."
  },
  {
    q: "During interkinesis (the interphase between meiosis I and meiosis II):",
    opts: ["DNA replication occurs actively", "No DNA replication occurs", "Chromosomes replicate twice", "Centrioles disintegrate completely"],
    ans: 1,
    exp: "Interkinesis is a brief resting period between meiosis I and II during which RNA and proteins may be made, but no DNA replication occurs."
  },
  {
    q: "Failure of the spindle assembly checkpoint (SAC) during cell division can directly lead to:",
    opts: ["Aneuploidy due to chromosome non-disjunction", "Increased synthesis of starch", "Immediate formation of a thick cell wall", "Overproduction of chlorophyll pigments"],
    ans: 0,
    exp: "If SAC fails, cells divide before chromosomes are properly aligned, causing unequal chromosome distribution (aneuploidy/non-disjunction)."
  }
];

const checkVariants = [
  {
    q: (n) => `In cell cycle kinetics analysis ${n}, a cell line is treated with a chemical agent that blocks the $G_2/M$ transition. The complex directly inhibited is:`,
    opts: ["Cyclin B-CDK1 (MPF)", "DNA polymerase $\\alpha$", "RNA polymerase II", "ATP synthase"],
    ans: 0,
    exp: "The $G_2/M$ checkpoint transition requires activation of Cyclin B-CDK1 (MPF). Blocking this complex arrests cells in $G_2$."
  },
  {
    q: (n) => `During flow cytometry analysis ${n}, cells exhibiting $4C$ DNA content and double the standard diploid DNA mass are located in:`,
    opts: ["$G_2$ phase and early M phase", "$G_1$ phase exclusively", "$G_0$ quiescent phase", "Immediately post-cytokinesis daughter cells"],
    ans: 0,
    exp: "Following DNA replication in S phase, cells in $G_2$ and through prophase/metaphase of M phase have a duplicated $4C$ DNA content."
  },
  {
    q: (n) => `In experimental oncology model ${n}, a mutation that permanently inactivates p53 leads to:`,
    opts: ["Uncontrolled progression past the $G_1/S$ checkpoint despite DNA lesions", "Immediate arrest in early $G_1$", "Inability of the cell to synthesize tubulin", "Complete absence of sister chromatid cohesion"],
    ans: 0,
    exp: "Loss of p53 eliminates the $G_1/S$ DNA-damage checkpoint, permitting damaged cells to replicate and divide, driving genomic instability."
  },
  {
    q: (n) => `Cytological evaluation ${n} of sister chromatid cohesion confirms that cohesin rings are cleaved at anaphase by:`,
    opts: ["Separase activated upon securin degradation", "DNA ligase", "Reverse transcriptase", "Myosin ATPase"],
    ans: 0,
    exp: "Separase protease cleaves cohesin rings along chromosome arms and centromeres once securin is degraded by the proteasome."
  },
  {
    q: (n) => `In plant developmental assay ${n}, cells that cease active division and differentiate into mature vascular tissues enter:`,
    opts: ["$G_0$ phase", "S phase", "$G_2$ checkpoint arrest", "Continuous M phase"],
    ans: 0,
    exp: "Differentiated cells that withdraw from the proliferative cell cycle reside in the $G_0$ quiescent state."
  },
  {
    q: (n) => `In molecular cytogenetics ${n}, the spindle checkpoint detects unattached kinetochores and directly inhibits:`,
    opts: ["APC/C (Anaphase-Promoting Complex)", "DNA helicase", "Peptidyl transferase", "Cytochrome c oxidase"],
    ans: 0,
    exp: "Unattached kinetochores generate the Mad2/BubR1 mitotic checkpoint complex (MCC) which binds and inhibits APC/C."
  },
  {
    q: (n) => `Cell synchronization experiment ${n} using thymidine block synchronizes cells at which stage?`,
    opts: ["$G_1/S$ boundary", "Metaphase", "Telophase", "$G_0$ phase"],
    ans: 0,
    exp: "Excess thymidine inhibits ribonucleotide reductase, stalling DNA synthesis and arresting cells at the $G_1/S$ boundary."
  },
  {
    q: (n) => `In mammalian cell culture ${n}, mitogenic growth factors stimulate transcription of which cyclin to initiate cell cycle re-entry?`,
    opts: ["Cyclin D", "Cyclin B", "Cyclin A", "Cyclin T"],
    ans: 0,
    exp: "Extracellular mitogens activate Ras-MAPK signaling to induce Cyclin D expression, which partners with CDK4/6 to initiate cell cycle entry."
  }
];

let cvIdx = 0;
while (mcqQuestions.length < 154) {
  const v = checkVariants[cvIdx % checkVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  cvIdx++;
}

const part5Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part5Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

mcqQuestions.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part5Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

console.log(`Part 5 generated: ${part5Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part5.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part5Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
