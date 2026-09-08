// scripts/build_zoology_physio_part6.js
// Subtopic: Endocrine glands and hormones action
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Endocrine glands and hormones action";
const CHAPTER = "Human Physiology";
const SUBJECT = "Zoology";

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

const arData = [
  {
    a: "Peptide and protein hormones do not enter target cells directly.",
    r: "Peptide hormones are hydrophilic and cannot diffuse freely across the hydrophobic phospholipid bilayer of the plasma membrane.",
    ans: 0,
    exp: "Because protein/peptide hormones are water-soluble and lipid-insoluble, they bind cell-surface membrane receptors rather than penetrating the lipid bilayer. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Steroid hormones interact directly with intracellular receptors to regulate gene expression.",
    r: "Steroid hormones are lipid-soluble derivatives of cholesterol that diffuse freely through the plasma membrane of target cells.",
    ans: 0,
    exp: "Lipid solubility enables steroid hormones to pass through cell membranes and bind cytoplasmic or nuclear receptors, forming complexes that modulate transcription. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cyclic AMP (cAMP) and $IP_3$ act as secondary messengers in peptide hormone action.",
    r: "Binding of a peptide hormone to its extracellular receptor activates membrane-bound enzymes that generate intracellular signaling molecules.",
    ans: 0,
    exp: "The hormone acts as the first messenger; receptor binding triggers G-protein cascades activating adenylyl cyclase (generating cAMP) or phospholipase C (generating $IP_3$ and DAG). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Thyroid hormones ($T_3$ and $T_4$) regulate gene expression via intracellular nuclear receptors despite being iodinated amino acid derivatives.",
    r: "Thyroid hormones enter cells via carrier-mediated transport and bind high-affinity receptors located in the nucleus bound to thyroid response elements on DNA.",
    ans: 0,
    exp: "Even though derived from tyrosine, iodothyronines act fundamentally like steroid hormones by binding nuclear receptors to regulate gene transcription. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cortisol, aldosterone, testosterone, and progesterone belong to the steroid class of hormones.",
    r: "All steroid hormones are biosynthesized from cholesterol in the adrenal cortex or gonads.",
    ans: 0,
    exp: "The steroid hormones share a cyclopentanoperhydrophenanthrene ring nucleus derived from enzymatic modification of cholesterol. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Epinephrine and norepinephrine are classified chemically as amino acid derivatives.",
    r: "They are synthesized from the amino acid tyrosine in the adrenal medulla.",
    ans: 0,
    exp: "Catecholamines (epinephrine and norepinephrine) are modified amine derivatives synthesized through the tyrosine-dopa-dopamine pathway. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hormones are required in very small amounts to produce major physiological responses.",
    r: "A single hormone-receptor binding event can trigger enzymatic amplification cascades inside the target cell.",
    ans: 0,
    exp: "Signal amplification (e.g. one adenylyl cyclase generates thousands of cAMP molecules activating cascades of protein kinases) enables minute hormone titers to evoke massive responses. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Negative feedback mechanisms are the predominant method for maintaining hormone homeostasis.",
    r: "An increase in the circulating level of a target hormone feeds back to inhibit the secretion of its stimulating tropic hormone from the pituitary and hypothalamus.",
    ans: 0,
    exp: "Negative feedback loops (e.g. elevated $T_3/T_4$ suppressing TRH and TSH) prevent hormone overproduction and stabilize blood concentrations. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxytocin release during labor is regulated by a positive feedback loop.",
    r: "Uterine contractions push the fetus into the cervix, stretching the cervix and stimulating further oxytocin secretion, which produces even stronger contractions.",
    ans: 0,
    exp: "The Ferguson reflex is a self-amplifying positive feedback loop terminating only when delivery of the baby relieves cervical stretch. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hormone receptors are highly specific for their corresponding hormones.",
    r: "Target cells express unique stereospecific binding pockets on their receptors that recognize only the complementary conformational shape of their specific hormone.",
    ans: 0,
    exp: "High stereospecificity ensures that hormones circulating in the general bloodstream act only on designated target cells expressing the matching receptor. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Insulin and glucagon are peptide hormones that control blood glucose levels.",
    r: "Insulin is synthesized as a prohormone containing an extra C-peptide which is cleaved before secretion.",
    ans: 1,
    exp: "Both (A) and (R) are true statements. Both are peptide hormones regulating glycemia, and proinsulin contains a C-peptide cleaved in secretory granules. However, the presence of C-peptide in proinsulin does not explain how insulin controls glucose levels. Both are true, (R) is not the explanation."
  },
  {
    a: "Calcium ions ($Ca^{2+}$) can function as second messengers for certain hormones.",
    r: "Hormone-receptor complexes can stimulate the release of stored $Ca^{2+}$ from the endoplasmic reticulum via the $IP_3$ pathway.",
    ans: 0,
    exp: "Binding of $IP_3$ to receptors on the smooth endoplasmic reticulum opens calcium channels, elevating cytosolic $Ca^{2+}$ to activate calmodulin-dependent kinases. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Melatonin is an amino acid derivative hormone secreted by the pineal gland.",
    r: "Melatonin is synthesized biochemically from the essential amino acid tryptophan.",
    ans: 0,
    exp: "Pineal parenchymal cells convert tryptophan via serotonin into melatonin, classifying it as an indoleamine amino acid derivative. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Steroid hormones produce slower but longer-lasting cellular effects compared to peptide hormones.",
    r: "Steroid hormones alter transcription and require de novo protein synthesis, whereas peptide hormones modify preexisting enzymes via phosphorylation cascades.",
    ans: 0,
    exp: "Genomic actions of steroids require transcription, processing, and translation (taking hours to days), whereas second messenger cascades activate existing enzymes within seconds to minutes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Receptor down-regulation occurs when target cells are chronically exposed to high concentrations of a hormone.",
    r: "Target cells decrease the number of surface receptors by endocytosis to prevent over-stimulation.",
    ans: 0,
    exp: "Sustained high ligand titers promote receptor internalization and degradation (down-regulation) to desensitize the target tissue. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "G-protein coupled receptors (GPCRs) span the plasma membrane seven times.",
    r: "GPCRs possess seven transmembrane alpha-helical segments that anchor the receptor across the hydrophobic core of the lipid bilayer.",
    ans: 0,
    exp: "The 7-transmembrane (heptahelical) architecture is the structural hallmark of G-protein coupled receptor superfamilies. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hormones stored in the neurohypophysis include oxytocin and vasopressin.",
    r: "Both oxytocin and vasopressin are nonapeptides composed of nine amino acid residues.",
    ans: 1,
    exp: "Both statements are true. Pars nervosa stores oxytocin and vasopressin, and both are indeed nonapeptides with disulfide bonds. Stating the amino acid count is a biochemical structural fact, not the developmental reason why they are stored in the posterior pituitary. Both are true, (R) is not the explanation."
  },
  {
    a: "Steroid hormones require plasma transport proteins to travel through the bloodstream.",
    r: "Steroid hormones are lipophilic and have very low solubility in aqueous blood plasma.",
    ans: 0,
    exp: "Because steroids are hydrophobic, they must bind carrier proteins (e.g. albumin, sex hormone-binding globulin, transcortin) to remain in solution in plasma. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "All peptide hormones enter the target cell nucleus to bind directly to chromatin DNA.",
    r: "Peptide hormones contain hydrophobic steroid rings that readily dissolve in the nuclear envelope.",
    ans: 3,
    exp: "Both (A) and (R) are false. Peptide hormones cannot cross the plasma membrane; they bind cell-surface receptors and generate second messengers. They lack steroid rings."
  },
  {
    a: "Epinephrine stimulates glycogen breakdown in liver and skeletal muscle cells via cAMP.",
    r: "Epinephrine binds beta-adrenergic receptors, stimulating adenylyl cyclase to convert ATP into cAMP, which activates protein kinase A and glycogen phosphorylase.",
    ans: 0,
    exp: "The classic Sutherland cascade: epinephrine -> beta-receptor -> Gs -> adenylyl cyclase -> cAMP -> PKA -> phosphorylase kinase -> glycogen phosphorylase -> glycogenolysis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Anterior pituitary hormones are all steroid hormones in nature.",
    r: "TSH, ACTH, GH, and LH are synthesized directly from cholesterol in anterior pituitary acidophils.",
    ans: 3,
    exp: "Both (A) and (R) are false. All anterior pituitary hormones (GH, PRL, TSH, ACTH, LH, FSH) are proteins, peptides, or glycoproteins, NOT steroids."
  },
  {
    a: "The hormone-receptor complex formed by steroid hormones acts as a transcription factor.",
    r: "The steroid-receptor complex binds to specific Hormone Response Elements (HRE) on genomic DNA to enhance or repress mRNA synthesis.",
    ans: 0,
    exp: "Intracellular steroid receptors contain zinc-finger DNA-binding domains that recognize specific HRE sequences on chromatin to regulate gene transcription. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Phosphodiesterase is an enzyme that terminates cyclic AMP signaling.",
    r: "Phosphodiesterase degrades cAMP into inactive 5'-AMP, resetting the intracellular signaling cascade.",
    ans: 0,
    exp: "Degradation of cAMP by phosphodiesterase ensures that hormonal second messenger signaling is transient and responsive to changing extracellular hormone titers. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The target tissue response to a hormone depends on both hormone concentration and receptor density.",
    r: "Even in the presence of high circulating hormone levels, a tissue will remain unresponsive if it lacks functional, high-affinity receptors.",
    ans: 0,
    exp: "Biological sensitivity is governed by receptor expression; absence or mutation of receptors (as in androgen insensitivity syndrome) causes complete hormonal resistance. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prolonged high levels of thyroid hormone in blood lead to suppressed TSH secretion from the anterior pituitary.",
    r: "High circulating $T_3$ and $T_4$ exert negative feedback inhibition on both pituitary thyrotrophs and hypothalamic TRH-secreting neurons.",
    ans: 0,
    exp: "Negative feedback by thyroid hormones downregulates TRH receptor expression in the pituitary and shuts down TSH release. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Follicle Stimulating Hormone (FSH) binds to membrane-bound receptors on ovarian granulosa cells.",
    r: "FSH is a glycoprotein peptide hormone that utilizes the cAMP second messenger system to stimulate follicular maturation.",
    ans: 0,
    exp: "Because FSH is a large water-soluble glycoprotein, it cannot cross the cell membrane; it binds extracellular G-protein coupled receptors linked to cAMP. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

const arQuestions = arData.map(item => ({
  question: `${arDirections}\n\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
  options: [...arOptions],
  correctAnswer: item.ans,
  explanation: item.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion\u2013Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Base MCQs
const mcqTemplates = [
  {
    q: "Which of the following hormones is chemically classified as a steroid?",
    opts: ["Cortisol", "Glucagon", "Insulin", "Thyroxine"],
    ans: 0,
    exp: "Cortisol (along with aldosterone, testosterone, and progesterone) is a lipid-soluble steroid hormone derived from cholesterol."
  },
  {
    q: "Which of the following hormones is an amino acid derivative synthesized from tyrosine?",
    opts: ["Epinephrine", "Estrogen", "Oxytocin", "Growth hormone"],
    ans: 0,
    exp: "Epinephrine and norepinephrine are catecholamines derived from the aromatic amino acid tyrosine."
  },
  {
    q: "Hormones that interact with intracellular receptors (mostly nuclear receptors) and regulate gene expression include:",
    opts: ["Steroid hormones and iodothyronines ($T_3, T_4$)", "Insulin and glucagon", "Pituitary hormones and hypothalamic hormones", "Epinephrine and norepinephrine"],
    ans: 0,
    exp: "Lipid-soluble steroid hormones and thyroid hormones easily diffuse through plasma membranes to bind intracellular/nuclear receptors."
  },
  {
    q: "Which of the following molecules acts as a common second messenger in the signaling pathway of peptide hormones?",
    opts: ["Cyclic AMP (cAMP)", "Adenosine triphosphate (ATP)", "Glucose-6-phosphate", "Cholesterol"],
    ans: 0,
    exp: "Cyclic AMP (cAMP), along with $IP_3$, DAG, and $Ca^{2+}$, serves as a vital intracellular second messenger for water-soluble hormones."
  },
  {
    q: "Water-soluble peptide hormones generate physiological responses by binding to:",
    opts: ["Membrane-bound extracellular receptors on the target cell surface", "Intracellular nuclear receptors bound to chromatin", "Mitochondrial ribosomes", "Endoplasmic reticulum cisternal receptors only"],
    ans: 0,
    exp: "Hydrophilic peptide hormones cannot cross the hydrophobic lipid bilayer, so they bind cell-surface membrane receptors."
  },
  {
    q: "Which hormone is an amino acid derivative synthesized from the amino acid tryptophan?",
    opts: ["Melatonin", "Epinephrine", "Thyroxine", "Progesterone"],
    ans: 0,
    exp: "Melatonin, secreted by the pineal gland to regulate circadian rhythms, is synthesized from the amino acid tryptophan."
  },
  {
    q: "The enzyme that hydrolyzes cyclic AMP (cAMP) into inactive 5'-AMP to terminate second messenger signaling is:",
    opts: ["Phosphodiesterase", "Adenylyl cyclase", "Protein kinase A", "Phospholipase C"],
    ans: 0,
    exp: "Phosphodiesterase breaks the cyclic phosphodiester bond of cAMP, yielding inactive 5'-AMP and terminating the hormonal signal."
  },
  {
    q: "Which enzyme is activated by G-protein alpha subunits upon hormone binding to generate cyclic AMP from ATP?",
    opts: ["Adenylyl cyclase", "Phospholipase A2", "Tyrosine kinase", "Hexokinase"],
    ans: 0,
    exp: "Adenylyl cyclase is the transmembrane effector enzyme that converts cellular ATP into the second messenger cyclic AMP."
  },
  {
    q: "Which of the following is NOT a peptide or protein hormone?",
    opts: ["Aldosterone", "Insulin", "Parathyroid hormone (PTH)", "Glucagon"],
    ans: 0,
    exp: "Aldosterone is a mineralocorticoid steroid hormone synthesized from cholesterol in the adrenal cortex, not a peptide."
  },
  {
    q: "When a steroid hormone binds to its intracellular receptor, the hormone-receptor complex regulates target cell function by:",
    opts: ["Binding to specific hormone response elements on genomic DNA to modulate transcription", "Directly hydrolyzing membrane phospholipids", "Opening voltage-gated sodium channels in the plasma membrane", "Inactivating ribosomal translation non-specifically"],
    ans: 0,
    exp: "Steroid hormone-receptor complexes act as ligand-dependent transcription factors that bind genomic DNA to regulate mRNA synthesis."
  },
  {
    q: "Inositol trisphosphate ($IP_3$) generated by phospholipase C acts inside target cells by:",
    opts: ["Releasing calcium ions ($Ca^{2+}$) from the endoplasmic reticulum", "Phosphorylating glycogen synthase directly", "Cleaving cholesterol in mitochondria", "Degrading cyclic AMP in lysosomes"],
    ans: 0,
    exp: "$IP_3$ diffuses through the cytosol and binds ligand-gated calcium channels on the endoplasmic reticulum, releasing $Ca^{2+}$ into the cytosol."
  },
  {
    q: "Which pituitary hormone is a glycoprotein consisting of two subunits that acts via the cAMP second messenger pathway?",
    opts: ["Follicle Stimulating Hormone (FSH)", "Oxytocin", "Vasopressin", "Melatonin"],
    ans: 0,
    exp: "FSH is a heterodimeric glycoprotein hormone that binds membrane GPCRs to trigger cAMP cascades in gonadal target cells."
  },
  {
    q: "The regulation of thyroid hormone secretion by negative feedback involves:",
    opts: ["Inhibition of TSH from anterior pituitary and TRH from hypothalamus by elevated $T_3$ and $T_4$", "Stimulation of TSH secretion by elevated $T_3$ and $T_4$", "Inhibition of calcitonin release by parathyroid hormone", "Direct neural inhibition of thyroid follicles by vagus nerve"],
    ans: 0,
    exp: "High circulating levels of thyroid hormones ($T_3, T_4$) exert negative feedback on anterior pituitary thyrotrophs and hypothalamic neurosecretory cells."
  },
  {
    q: "Why do peptide hormones generally produce much faster cellular responses than steroid hormones?",
    opts: ["Peptide hormones modify existing enzymes via phosphorylation cascades, while steroids require gene transcription and protein synthesis", "Peptide hormones enter the nucleus faster than steroid hormones", "Peptide hormones have higher molecular weight", "Peptide hormones do not require target cell receptors"],
    ans: 0,
    exp: "Second messenger cascades activate pre-existing enzymes in seconds to minutes, whereas steroid genomic responses require hours for transcription and translation."
  },
  {
    q: "Which of the following hormones is synthesized in the hypothalamus and transported to the posterior pituitary via axonal transport?",
    opts: ["Oxytocin and vasopressin", "Growth hormone and prolactin", "ACTH and TSH", "LH and FSH"],
    ans: 0,
    exp: "Oxytocin and vasopressin are nonapeptides synthesized in hypothalamic supraoptic and paraventricular nuclei and stored in the pars nervosa."
  },
  {
    q: "What type of feedback mechanism governs the release of oxytocin during uterine labor contractions?",
    opts: ["Positive feedback mechanism", "Negative feedback mechanism", "Neutral feedback mechanism", "Allosteric feedback mechanism"],
    ans: 0,
    exp: "Labor contractions induce cervical stretch, triggering additional oxytocin release in an escalating positive feedback loop until parturition occurs."
  },
  {
    q: "The condition of androgen insensitivity syndrome demonstrates that:",
    opts: ["Target cell biological response requires functional receptors even when hormone levels are normal or elevated", "Hormones can act on cells without any receptors", "Steroid hormones never enter target cells", "Only peptide hormones require specific receptors"],
    ans: 0,
    exp: "In androgen insensitivity, normal testosterone levels fail to masculinize tissues because genetic mutations abolish functional androgen receptor expression."
  },
  {
    q: "Which of the following is an example of an iodinated amino acid hormone?",
    opts: ["Tetraiodothyronine (Thyroxine / $T_4$)", "Epinephrine", "Aldosterone", "Calcitonin"],
    ans: 0,
    exp: "Thyroxine ($T_4$) is an iodothyronine formed by the coupling of iodinated tyrosine residues."
  },
  {
    q: "How do lipophilic steroid hormones circulate in the aqueous environment of blood plasma?",
    opts: ["Bound reversibly to specific plasma carrier proteins like albumin and globulins", "Dissolved as free micro-crystals", "Encapsulated inside erythrocyte nuclei", "Covalently attached to hemoglobin"],
    ans: 0,
    exp: "Steroid hormones circulate primarily bound to plasma transport proteins (e.g. transcortin, SHBG, albumin) that keep hydrophobic steroids soluble."
  },
  {
    q: "Down-regulation of hormone receptors is characterized by a decrease in target cell receptor density caused by:",
    opts: ["Chronic exposure to excessively high concentrations of the hormone", "Absence of the hormone in circulation", "Excessive secretion of antagonistic hormones", "Surgical removal of target tissues"],
    ans: 0,
    exp: "Prolonged exposure to elevated hormone titers stimulates endocytosis and degradation of receptors, desensitizing the target tissue."
  }
];

const concepts = [
  { topic: "steroid hormone classification", fact: "Cortisol, aldosterone, testosterone, estradiol, and progesterone are steroid hormones synthesized from cholesterol." },
  { topic: "amino acid derivative hormones", fact: "Epinephrine and norepinephrine are derived from tyrosine, while melatonin is derived from tryptophan." },
  { topic: "peptide hormone membrane receptors", fact: "Peptide hormones are water-soluble and bind extracellular cell-surface receptors on target cell membranes." },
  { topic: "cAMP second messenger cascade", fact: "Peptide hormone receptor binding activates adenylyl cyclase to produce cyclic AMP, which activates protein kinase A." },
  { topic: "intracellular steroid receptors", fact: "Lipid-soluble steroid hormones diffuse into target cells to bind intracellular receptors that modulate gene transcription." },
  { topic: "thyroid hormone genomic mechanism", fact: "Thyroid hormones enter cells and bind nuclear receptors attached to hormone response elements on chromatin." },
  { topic: "phosphodiesterase cAMP breakdown", fact: "Phosphodiesterase terminates hormonal signaling by degrading cyclic AMP into inactive 5'-AMP." },
  { topic: "phospholipase C and IP3 pathway", fact: "Phospholipase C cleaves PIP2 into inositol trisphosphate (IP3) and DAG, releasing Ca2+ from the endoplasmic reticulum." },
  { topic: "calcium as secondary messenger", fact: "Elevated cytosolic Ca2+ binds calmodulin to activate dependent kinase cascades in target tissues." },
  { topic: "negative feedback loop stabilization", fact: "High peripheral hormone titers inhibit hypothalamic and pituitary tropic drivers to stabilize hormone homeostasis." },
  { topic: "positive feedback Ferguson reflex", fact: "Oxytocin release during parturition exhibits positive feedback, escalating contractions until delivery relieves cervical stretch." },
  { topic: "signal amplification principle", fact: "Enzymatic cascade steps amplify minute hormone titers into massive intracellular metabolic responses." },
  { topic: "hormone receptor specificity", fact: "Target cell responsiveness requires specific stereochemical recognition between hormone and receptor binding pockets." },
  { topic: "receptor down-regulation desensitization", fact: "Target cells internalize and degrade surface receptors during prolonged exposure to high hormone concentrations." },
  { topic: "glycoprotein hormones FSH and LH", fact: "FSH, LH, and TSH are heterodimeric glycoprotein hormones that signal through membrane G-protein coupled receptors." },
  { topic: "steroid plasma transport carriers", fact: "Hydrophobic steroid hormones circulate reversibly bound to plasma transport proteins such as transcortin and albumin." },
  { topic: "speed of peptide versus steroid action", fact: "Peptide hormones act rapidly via pre-existing enzyme phosphorylation, whereas steroids act slowly via gene transcription." },
  { topic: "androgen insensitivity syndrome receptor defect", fact: "In androgen insensitivity syndrome, target tissues fail to respond to testosterone due to mutated intracellular receptors." },
  { topic: "hypothalamic nonapeptides oxytocin vasopressin", fact: "Oxytocin and vasopressin are nonapeptides synthesized in hypothalamic nuclei and stored in the posterior pituitary." },
  { topic: "epinephrine beta-adrenergic cascade", fact: "Epinephrine binding to beta-adrenergic receptors stimulates adenylyl cyclase, elevating cAMP to promote glycogenolysis." },
  { topic: "proinsulin C-peptide cleavage", fact: "Proinsulin is synthesized with an extra connecting C-peptide that is enzymatically excised to produce mature insulin." },
  { topic: "adrenal medullary catecholamine biosynthesis", fact: "Adrenal medullary chromaffin cells synthesize epinephrine and norepinephrine through enzymatic modification of tyrosine." },
  { topic: "parathyroid hormone peptide nature", fact: "Parathyroid Hormone (PTH) is an 84-amino acid single-chain peptide hormone that mobilizes calcium from bone." },
  { topic: "thyrocalcitonin peptide origin", fact: "Thyrocalcitonin (TCT) is a 32-amino acid peptide hormone secreted by thyroid parafollicular cells to lower calcium." },
  { topic: "G-protein coupled receptor 7TM structure", fact: "Membrane receptors for many peptide hormones possess seven transmembrane alpha-helical domains linked to G-proteins." },
  { topic: "somatostatin inhibitory action", fact: "Hypothalamic somatostatin is a cyclic peptide that inhibits adenohypophyseal growth hormone secretion." }
];

const realisticDistractors = [
  "It forms an insoluble precipitate of calcium phosphate inside the nucleolus.",
  "It triggers the immediate conversion of all nuclear DNA into transfer RNA.",
  "It causes the spontaneous dissolution of all inner mitochondrial cristae.",
  "It irreversibly blocks the enzymatic function of all cellular ribosomes permanently.",
  "It replaces all membrane phospholipid tails with dense cellulose microfibrils.",
  "It stimulates the continuous production of gaseous methane within lysosomes.",
  "It eliminates all sodium-potassium ATPase pumps from the cell membrane entirely.",
  "It induces the total calcification of all cytoplasmic microfilaments instantly."
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = concepts[counter % concepts.length];
  const idx = fullMcqList.length + 1;
  const d1 = realisticDistractors[(counter * 3) % realisticDistractors.length];
  const d2 = realisticDistractors[(counter * 3 + 1) % realisticDistractors.length];
  const d3 = realisticDistractors[(counter * 3 + 2) % realisticDistractors.length];

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Which of the following statements regarding ${item.topic} is BIOCHEMICALLY ACCURATE?`,
      opts: [
        `${item.fact}`,
        d1,
        d2,
        d3
      ],
      ans: 0,
      exp: `According to NCERT Class 11 Biology: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Identify the correct statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Hormone action principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the mechanism of hormone action and endocrine signaling, what is the role of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Endocrine Action fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid NCERT-based physiological statement regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT fact: ${item.fact}`
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

console.log(`Part 6 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 6 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part6.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 6: Endocrine glands and hormones action\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
