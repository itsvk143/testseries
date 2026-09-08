// scripts/build_zoology_biohuman_part2.js
// Subtopic: Cancer
// Chapter: Biology and Human Welfare
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Cancer";
const CHAPTER = "Biology and Human Welfare";
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
    a: "Cancer cells show breakdown of the regulatory mechanism known as contact inhibition.",
    r: "Normal cells display contact inhibition, by virtue of which contact with other cells inhibits their uncontrolled proliferation.",
    ans: 0,
    exp: "Normal cells cease dividing when they touch neighboring cells. Cancer cells lose this property of contact inhibition and continue dividing into multilayered cell masses or tumors. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Metastasis is the most feared and dangerous property of malignant tumors.",
    r: "Malignant tumor cells slough off from the primary tumor, travel via blood and lymph to distant anatomical sites, and initiate new secondary tumors.",
    ans: 0,
    exp: "Metastatic dissemination of cancer cells to vital distant organs (liver, lungs, brain, bones) causes multiorgan failure and accounts for over 90% of cancer mortality. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    a: "Benign tumors are generally less dangerous than malignant tumors.",
    r: "Benign tumors remain confined to their original site, do not invade surrounding normal tissues, and do not metastasize to distant locations.",
    ans: 0,
    exp: "Benign tumors are usually encapsulated, grow expansively without infiltrating neighboring tissues, and lack the capacity for metastasis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ionizing radiations like X-rays and gamma rays, as well as non-ionizing radiations like UV rays, act as physical carcinogens.",
    r: "Radiation damages the genomic DNA of exposed cells, inducing mutations that can activate proto-oncogenes or inactivate tumor suppressor genes.",
    ans: 0,
    exp: "Ionizing radiation causes single- and double-strand DNA breaks, while UV radiation forms cyclobutane pyrimidine dimers, both driving oncogenic transformation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chemical carcinogens present in tobacco smoke are a major etiological cause of lung cancer.",
    r: "Tobacco smoke contains polycyclic aromatic hydrocarbons like benzo[a]pyrene that form DNA adducts in bronchial epithelial cells.",
    ans: 0,
    exp: "Polycyclic aromatic hydrocarbons and nitrosamines in tobacco smoke bind covalently to DNA, causing mutational transversion in critical genes like TP53 and KRAS. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Proto-oncogenes are present in normal healthy human cells.",
    r: "When mutated, amplified, or inappropriately activated, proto-oncogenes transform into oncogenes that drive malignant cellular transformation.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Proto-oncogenes (c-onc) are normal cellular genes regulating physiological cell growth and signaling. Their oncogenic activation leads to neoplastic transformation. Both (A) and (R) are true, but (R) explains the mechanism of transformation rather than the physiological existence of proto-oncogenes."
  },
  {
    a: "Certain viruses called oncogenic viruses possess genes that can cause cancer.",
    r: "The viral genes responsible for malignant transformation carried by oncogenic viruses are known as viral oncogenes (v-onc).",
    ans: 0,
    exp: "Oncogenic viruses carry viral oncogenes (v-onc) or insert their genomes near cellular proto-oncogenes, disrupting normal cell cycle control and driving cancer. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Biopsy and histopathological examination of tissue sections provide definitive microscopic confirmation of cancer.",
    r: "A piece of suspected tumor tissue is cut into thin sections, stained, and examined by a pathologist to detect cellular pleomorphism and abnormal mitoses.",
    ans: 0,
    exp: "Histopathological evaluation of biopsied tissue reveals hallmark neoplastic architectural changes, increased nuclear-to-cytoplasmic ratio, and atypical mitotic spindles. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Magnetic Resonance Imaging (MRI) is exceptionally useful for detecting pathological and physiological changes in soft tissues.",
    r: "MRI uses strong magnetic fields and non-ionizing radiofrequency radiation to accurately detect subtle changes in the living tissue.",
    ans: 0,
    exp: "MRI relies on nuclear magnetic resonance of hydrogen protons subjected to powerful magnetic fields and non-ionizing radiofrequency pulses, providing superior soft-tissue contrast without radiation harm. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Computed Tomography (CT scan) generates a three-dimensional reconstruction of internal organs.",
    r: "CT utilizes X-rays to acquire cross-sectional sectional radiographic images of the internal anatomical structures.",
    ans: 0,
    exp: "CT scanning directs thin X-ray beams through the patient from multiple angles, combining data with computer algorithms to create 3D cross-sectional images. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Alpha-interferon is administered to cancer patients as a biological response modifier.",
    r: "Alpha-interferon activates the patient's immune system (such as NK cells and cytotoxic T lymphocytes) to destroy tumor cells.",
    ans: 0,
    exp: "Tumor cells often evade immune detection. Administration of alpha-interferon acts as a biological response modifier, boosting immune surveillance and cytolytic activity against cancer cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chemotherapeutic drugs used in cancer treatment frequently cause hair loss and anemia.",
    r: "Chemotherapeutic agents selectively target and kill malignant cells while having zero effect on all normal host cells.",
    ans: 2,
    exp: "(A) is true because chemotherapy drugs frequently produce alopecia (hair loss) and bone marrow suppression (anemia). (R) is false because chemotherapeutic drugs lack absolute tumor selectivity and also damage rapidly proliferating normal cells (hair follicle cells, hematopoietic stem cells, and intestinal epithelium)."
  },
  {
    a: "Most cancers are clinically managed using a combination of surgery, radiotherapy, and chemotherapy.",
    r: "Multimodal therapy eliminates primary macroscopic tumor bulk while simultaneously eradicating occult microscopic micrometastases.",
    ans: 0,
    exp: "Combining surgical resection (for primary tumor mass), radiotherapy (for localized residual disease), and chemotherapy (for circulating and micrometastatic cells) yields significantly higher cure rates. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In leukemia, there is an abnormal, uncontrolled proliferation of neoplastic white blood cells.",
    r: "Leukemia is a malignancy originating from hematopoietic precursor cells located in the bone marrow.",
    ans: 0,
    exp: "Leukemia arises from neoplastic transformation of hematopoietic stem cells or lymphoid/myeloid progenitors in the bone marrow, resulting in circulating immature blast cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The p53 protein is widely recognized as the 'guardian of the genome'.",
    r: "p53 arrests the cell cycle at the G1/S transition to allow DNA repair or induces programmed cell death (apoptosis) if the DNA damage is irreparable.",
    ans: 0,
    exp: "p53 acts as a transcription factor activated by DNA damage; it upregulates p21 to arrest the cell cycle for repair, or upregulates pro-apoptotic proteins like Bax if damage cannot be repaired. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Telomerase enzyme activity is significantly elevated in most malignant cancer cells.",
    r: "Active telomerase maintains telomere length at chromosome ends, conferring replicative immortality to cancer cells.",
    ans: 0,
    exp: "Normal somatic cells lack sufficient telomerase and undergo senescence after a finite number of divisions. Cancer cells reactivate telomerase, preventing telomere shortening and achieving infinite replicative lifespan. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Solid tumors stimulate the formation of new blood vessels through a process called tumor angiogenesis.",
    r: "Hypoxic tumor cells secrete vascular endothelial growth factor (VEGF) to induce capillary sprouting from nearby host vessels.",
    ans: 0,
    exp: "As solid tumors grow beyond $1-2\\text{ mm}$, diffusion of oxygen and nutrients becomes inadequate. Secretion of VEGF stimulates new capillary proliferation to support further tumor growth. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sarcomas represent malignant neoplasms arising from epithelial tissues.",
    r: "Carcinomas represent malignant neoplasms arising from mesodermal connective and supporting tissues.",
    ans: 3,
    exp: "Both statements are reversed. Carcinomas arise from epithelial tissues (ectoderm or endoderm), whereas sarcomas arise from mesodermal connective and supportive tissues (bone, cartilage, muscle, fat). Therefore, (A) is false and (R) is false. Hence (d) is correct."
  },
  {
    a: "Pap smear (cervical cytology) is an effective screening tool for the early detection of cervical carcinoma.",
    r: "Exfoliated epithelial cells scraped from the cervix can reveal dysplastic premalignant cellular alterations long before invasive carcinoma develops.",
    ans: 0,
    exp: "The Papanicolaou (Pap) test screens for cervical intraepithelial neoplasia (CIN) by examining exfoliated cervical cells microscopically, enabling curative early intervention. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Antibodies against cancer-specific antigens are utilized for both diagnosis and targeted immunotherapy.",
    r: "Monoclonal antibodies specifically bind to unique antigens overexpressed on the surface of malignant cells.",
    ans: 0,
    exp: "Targeted monoclonal antibodies (e.g. trastuzumab against HER2) bind specifically to tumor cell-surface receptors, inhibiting oncogenic signaling and directing immune-mediated cytotoxicity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Inherited mutations in BRCA1 and BRCA2 genes significantly elevate the risk of developing breast and ovarian cancers.",
    r: "BRCA1 and BRCA2 proteins participate directly in the error-free repair of DNA double-strand breaks via homologous recombination.",
    ans: 0,
    exp: "Loss of function in BRCA1/2 impairs homologous recombination DNA repair, leading to genomic instability and high susceptibility to breast and ovarian carcinomas. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In radiation therapy, tumor cells are irradiated lethally while taking care of normal surrounding tissues.",
    r: "Fractionation of radiation doses allows normal healthy tissues with intact DNA repair mechanisms to recover between sessions.",
    ans: 0,
    exp: "Dividing total radiation into daily fractions exploits the superior DNA repair and recovery capacity of normal cells compared to rapidly proliferating, checkpoint-deficient cancer cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cancer cells exhibit the Warburg effect, consuming glucose at high rates via aerobic glycolysis.",
    r: "Even in the presence of adequate oxygen, cancer cells preferentially convert glucose into lactate rather than oxidizing it through mitochondrial oxidative phosphorylation.",
    ans: 0,
    exp: "The Warburg effect describes how cancer cells reprogram their metabolism towards aerobic glycolysis, providing glycolytic intermediates for rapid macromolecular biosynthesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Burkitt lymphoma is strongly associated with infection by Epstein-Barr virus (EBV).",
    r: "Burkitt lymphoma frequently involves a reciprocal chromosomal translocation t(8;14) that places the c-MYC proto-oncogene under the control of the immunoglobulin heavy chain promoter.",
    ans: 1,
    exp: "Both statements are medically accurate. EBV infection is an epidemiological cofactor for endemic Burkitt lymphoma, and the t(8;14) translocation causes constitutive overexpression of c-MYC. Both (A) and (R) are true, but (R) describes the cytogenetic lesion rather than explaining how EBV infection operates."
  },
  {
    a: "High-risk strains of Human Papillomavirus (HPV 16 and 18) are causal agents of cervical cancer.",
    r: "Viral oncoproteins E6 and E7 produced by high-risk HPV bind to and promote the degradation of host tumor suppressors p53 and pRb.",
    ans: 0,
    exp: "HPV E6 promotes ubiquitin-mediated degradation of p53, while HPV E7 binds and inactivates the retinoblastoma protein (pRb), driving unchecked cell cycle progression. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Aflatoxin B1 produced by the mold Aspergillus flavus is a potent chemical carcinogen linked to liver cancer.",
    r: "Aflatoxin B1 undergoes metabolic activation in the liver to form reactive epoxide intermediates that induce transversion mutations in the TP53 gene.",
    ans: 0,
    exp: "Aflatoxin B1 epoxide forms DNA adducts leading to a specific G to T transversion at codon 249 of the TP53 gene in hepatocytes, causing hepatocellular carcinoma. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// 154 MCQs
const mcqData = [];

function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-25: Core NCERT characteristics, tumors, metastasis
addMcq(
  "Which fundamental regulatory property present in normal cells is completely lost in cancer cells?",
  ["Contact inhibition", "DNA semi-conservative replication", "Transcription by RNA polymerase II", "Translation of messenger RNA on ribosomes"],
  0,
  "Normal cells exhibit contact inhibition, whereby physical contact with neighboring cells inhibits further cell division. Cancer cells lose this property, continuing to proliferate uncontrollably into tumors."
);
addMcq(
  "How do malignant tumors differ critically from benign tumors?",
  ["Malignant tumors remain strictly encapsulated at the site of origin", "Malignant tumors invade neighboring tissues, enter circulation, and establish distant metastases", "Malignant tumors exhibit slower mitotic rates than normal differentiated tissue", "Malignant tumors do not synthesize nucleic acids"],
  1,
  "Unlike benign tumors which remain localized within a connective tissue capsule, malignant tumors invade surrounding tissues, slough off into blood and lymph, and seed metastatic lesions at distant sites."
);
addMcq(
  "The spread of neoplastic cells from a primary tumor site to distant organs via blood and lymph is termed:",
  ["Metastasis", "Metagenesis", "Metamorphosis", "Morphallaxis"],
  0,
  "Metastasis is the process by which malignant cells detach from the primary tumor, travel through the circulatory or lymphatic system, and establish secondary tumors in distant organs."
);
addMcq(
  "Which of the following is considered the most feared and deadly hallmark of malignant tumors?",
  ["Local hyperpigmentation of skin", "Metastasis", "Mild subcutaneous swelling", "Increased glycogen storage in hepatocytes"],
  1,
  "According to NCERT, metastasis is the most feared property of malignant tumors because secondary tumor colonies in vital organs like lungs, liver, and brain are the primary cause of cancer death."
);
addMcq(
  "Malignant neoplasms originating from epithelial tissues covering external and internal surfaces of the body are termed:",
  ["Carcinomas", "Sarcomas", "Lymphomas", "Osteomas"],
  0,
  "Carcinomas are cancers of epithelial origin (e.g. skin, breast, lung, stomach, prostate, colon), which account for approximately 85% of all human cancers."
);
addMcq(
  "A cancer originating from mesodermal connective and supportive tissues, such as bones, cartilage, and muscles, is classified as a:",
  ["Carcinoma", "Sarcoma", "Leukemia", "Adenoma"],
  1,
  "Sarcomas are malignant tumors that arise from mesodermal mesenchymal tissues, including bone (osteosarcoma), cartilage (chondrosarcoma), muscle (myosarcoma), and adipose tissue (liposarcoma)."
);
addMcq(
  "Leukemia is a neoplastic disease characterized by an abnormal, uncontrolled proliferation of:",
  ["White blood cells (leukocytes) in bone marrow and blood", "Erythrocytes in splenic sinusoids only", "Thrombocytes in lymph nodes", "Keratinocytes in stratum corneum"],
  0,
  "Leukemias are malignancies of the blood-forming hematopoietic tissues in bone marrow, characterized by uncontrolled proliferation and accumulation of abnormal, immature white blood cells."
);
addMcq(
  "Which physical agent acts as a non-ionizing carcinogen capable of inducing DNA damage in skin cells?",
  ["Ultraviolet (UV) radiation", "X-rays", "Gamma rays", "Cosmic radiation"],
  0,
  "UV radiation is non-ionizing radiation that penetrates superficial skin layers and damages DNA by inducing the formation of cyclobutane pyrimidine (thymine) dimers."
);
addMcq(
  "Which of the following ionizing radiations acts as a physical carcinogen capable of causing chromosomal breaks?",
  ["X-rays and gamma rays", "Infrared radiation", "Visible light", "Radio waves"],
  0,
  "Ionizing radiations such as X-rays and gamma rays possess sufficient energy to ionize atoms, producing free radicals and double-strand DNA breaks that lead to chromosomal aberrations."
);
addMcq(
  "The chemical carcinogen in tobacco smoke strongly associated with the high incidence of bronchogenic carcinoma (lung cancer) is:",
  ["Polycyclic aromatic hydrocarbons (such as benzo[a]pyrene)", "Acetic acid", "Ascorbic acid", "Glucose oxidase"],
  0,
  "Benzo[a]pyrene and related polycyclic aromatic hydrocarbons present in tobacco smoke are metabolically converted into reactive epoxides that covalently bind DNA, driving lung carcinogenesis."
);
addMcq(
  "Genes present in normal cellular genomes that have the potential to become cancer-causing oncogenes are called:",
  ["Proto-oncogenes (cellular oncogenes, c-onc)", "Jumping genes (transposons)", "Pseudogenes", "Housekeeping structural genes"],
  0,
  "Proto-oncogenes (c-onc) are normal regulatory genes that stimulate cell growth and division. When mutated or overexpressed, they become oncogenes that induce cancer."
);
addMcq(
  "Viruses that are capable of inducing neoplastic transformation in host cells are collectively known as:",
  ["Oncogenic viruses", "Bacteriophages", "Viroids", "Prions"],
  0,
  "Oncogenic viruses (such as HPV, EBV, HBV, and HTLV-1) carry viral oncogenes (v-onc) or disrupt host regulatory pathways to induce malignant transformation."
);
addMcq(
  "The definitive diagnostic procedure for identifying cancer involving microscopic examination of stained thin tissue sections is:",
  ["Biopsy and histopathology", "Urinary urobilinogen test", "Serum amylase measurement", "Electroencephalogram (EEG)"],
  0,
  "Biopsy involves surgical excision of a representative tissue specimen, which is sliced, stained, and examined histopathologically by a pathologist to confirm malignancy."
);
addMcq(
  "Which imaging modality employs strong magnetic fields and non-ionizing radiofrequency radiation to assess tumor-induced tissue alterations?",
  ["Magnetic Resonance Imaging (MRI)", "Computed Tomography (CT)", "Standard Radiography (X-ray)", "Positron Emission Tomography (PET)"],
  0,
  "MRI uses strong magnetic fields and non-ionizing radio waves to measure proton relaxation times, generating high-resolution images of soft tissues without ionizing radiation."
);
addMcq(
  "Which diagnostic imaging technique utilizes X-rays to construct three-dimensional cross-sectional slices of internal organs?",
  ["Computed Tomography (CT scan)", "Ultrasound sonography", "Electrocardiography (ECG)", "Endoscopy"],
  0,
  "Computed Tomography (CT) uses rotating X-ray emitters and detectors coupled with computer algorithms to generate 3D volumetric images of internal organs."
);
addMcq(
  "Which biological response modifier is clinically administered to cancer patients to activate their immune system against tumors?",
  ["$\\alpha$-interferon", "Histamine", "Heparin", "Erythropoietin"],
  0,
  "$\\alpha$-interferon is a biological response modifier that enhances the immune response by activating natural killer (NK) cells and cytotoxic T cells to destroy cancer cells."
);
addMcq(
  "Why do conventional cancer chemotherapeutic drugs frequently cause alopecia (hair loss) and anemia?",
  ["They disrupt rapidly dividing cells indiscriminately, including hair follicle cells and bone marrow hematopoietic precursors", "They selectively destroy keratin and iron molecules in blood plasma", "They block the synthesis of melanin in melanocytes only", "They stimulate excessive production of gastric hydrochloric acid"],
  0,
  "Most chemotherapeutic drugs lack absolute specificity for tumor cells and kill all rapidly proliferating cells, including hematopoietic stem cells in bone marrow and hair matrix cells."
);
addMcq(
  "A common malignant tumor of the eye occurring in young children due to homozygous loss of a tumor suppressor gene on chromosome 13 is:",
  ["Retinoblastoma", "Astrocytoma", "Glioblastoma", "Melanoma"],
  0,
  "Retinoblastoma is caused by mutational inactivation of both alleles of the RB1 tumor suppressor gene on chromosome 13q14, leading to unregulated cell division in retinoblasts."
);
addMcq(
  "The p53 protein functions in the cell as a critical tumor suppressor by:",
  ["Arresting the cell cycle at G1/S to permit DNA repair or inducing apoptosis if damage is irreparable", "Phosphorylating cyclin B to accelerate mitosis", "Degrading caspase-3 to prevent programmed cell death", "Promoting telomere elongation in somatic cells"],
  0,
  "Known as the 'guardian of the genome', p53 halts cell cycle progression at the G1 checkpoint via p21 induction to enable DNA repair, or triggers apoptosis via Bax/caspases if repair fails."
);
addMcq(
  "Which enzyme is characteristically reactivated in the vast majority of human cancer cells, granting them replicative immortality?",
  ["Telomerase", "DNA polymerase I", "RNA polymerase III", "Topoisomerase I"],
  0,
  "Telomerase is a reverse transcriptase that synthesizes telomeric DNA repeats at chromosome ends; its reactivation prevents replicative senescence in cancer cells."
);
addMcq(
  "The formation of new capillary blood vessels from pre-existing vasculature to supply nutrients to a growing tumor is termed:",
  ["Tumor angiogenesis", "Erythropoiesis", "Leukopoiesis", "Hematopoiesis"],
  0,
  "Tumor angiogenesis is the sprout-like development of new blood vessels driven by pro-angiogenic factors like VEGF, allowing solid tumors to grow beyond microscopic sizes."
);
addMcq(
  "Which growth factor is primarily secreted by hypoxic cancer cells to stimulate tumor vascularization?",
  ["Vascular Endothelial Growth Factor (VEGF)", "Glucagon", "Insulin-like Growth Factor II only", "Thyroid-stimulating hormone"],
  0,
  "Vascular Endothelial Growth Factor (VEGF) is upregulated in hypoxic tumor microenvironments by hypoxia-inducible factor 1 (HIF-1) to stimulate endothelial cell proliferation."
);
addMcq(
  "The phenomenon where cancer cells preferentially metabolize glucose via glycolysis to produce lactate even in the presence of ample oxygen is known as the:",
  ["Warburg effect", "Bohr effect", "Haldane effect", "Pasteur effect"],
  0,
  "The Warburg effect (aerobic glycolysis) is a metabolic reprogramming in cancer cells that rapidly generates ATP and carbon precursors for building lipids, nucleotides, and proteins."
);
addMcq(
  "Which viral oncoproteins encoded by high-risk Human Papillomaviruses (HPV 16 and 18) inactivate host p53 and pRb proteins?",
  ["E6 (inactivates p53) and E7 (inactivates pRb)", "E1 and E2 only", "L1 and L2 capsid proteins", "Reverse transcriptase and integrase"],
  0,
  "HPV oncoprotein E6 binds host ubiquitin ligase E6AP to degrade p53, while oncoprotein E7 binds and inactivates the retinoblastoma tumor suppressor pRb."
);
addMcq(
  "Which tumor marker is widely measured in serum to screen for and monitor therapeutic response in prostate adenocarcinoma?",
  ["Prostate-Specific Antigen (PSA)", "Alpha-fetoprotein (AFP)", "Carcinoembryonic Antigen (CEA)", "Human Chorionic Gonadotropin (hCG)"],
  0,
  "Prostate-Specific Antigen (PSA) is a serine protease produced by prostatic epithelium whose elevated serum levels assist in screening for and monitoring prostate cancer."
);

// 26-60: Tumor markers, Oncogenes, Tumor suppressors, Mutagens
addMcq(
  "Alpha-fetoprotein (AFP) is a clinical oncofetal serum marker used in the diagnosis and monitoring of:",
  ["Hepatocellular carcinoma and testicular germ cell tumors", "Osteosarcoma", "Basal cell carcinoma of skin", "Chronic lymphocytic leukemia"],
  0,
  "Serum AFP is normally produced by the fetal liver and yolk sac; its elevated levels in adults serve as a key marker for hepatocellular carcinoma and non-seminomatous germ cell tumors."
);
addMcq(
  "Carcinoembryonic antigen (CEA) is an oncofetal glycoprotein marker primarily monitored in patients with:",
  ["Colorectal carcinoma", "Wilms tumor", "Multiple myeloma", "Glioblastoma multiforme"],
  0,
  "CEA is an established serum biomarker used primarily for monitoring recurrence and response to therapy in patients diagnosed with colorectal carcinoma."
);
addMcq(
  "CA-125 is a serum tumor antigen widely utilized to monitor disease progression and recurrence in:",
  ["Epithelial ovarian carcinoma", "Prostate carcinoma", "Chondrosarcoma", "Ewing sarcoma"],
  0,
  "CA-125 is a high-molecular-weight glycoprotein biomarker used clinically for monitoring treatment response and detecting recurrence in ovarian cancer."
);
addMcq(
  "Human chorionic gonadotropin (hCG) is an important serum tumor marker in non-pregnant patients for diagnosing:",
  ["Gestational choriocarcinoma and testicular choriocarcinoma", "Renal cell carcinoma", "Pancreatic ductal adenocarcinoma", "Thyroid medullary carcinoma"],
  0,
  "Elevated levels of hCG in non-pregnant individuals indicate trophoblastic malignancies such as hydatidiform mole, choriocarcinoma, or testicular germ cell tumors."
);
addMcq(
  "Which chromosome abnormality, known as the Philadelphia chromosome, is pathognomonic for Chronic Myelogenous Leukemia (CML)?",
  ["Reciprocal translocation t(9;22) forming the BCR-ABL fusion tyrosine kinase", "Robertsonian translocation der(14;21)", "Terminal deletion of 5p (cri-du-chat)", "Inversion of chromosome 16"],
  0,
  "The Philadelphia chromosome results from reciprocal translocation between chromosomes 9 and 22, generating a BCR-ABL fusion gene that encodes a constitutively active tyrosine kinase."
);
addMcq(
  "The targeted molecular drug Imatinib (Gleevec) revolutionized cancer therapy by specifically inhibiting:",
  ["BCR-ABL fusion tyrosine kinase in Chronic Myelogenous Leukemia", "Bacterial peptidyl transferase", "Host RNA polymerase I", "Voltage-gated potassium channels"],
  0,
  "Imatinib is a small-molecule competitive inhibitor that binds the ATP-binding pocket of the BCR-ABL kinase, halting aberrant signaling in CML."
);
addMcq(
  "Which proto-oncogene encodes a membrane-bound GTP-binding switch protein that is frequently mutated in pancreatic, colorectal, and lung cancers?",
  ["KRAS", "BRCA1", "RB1", "APC"],
  0,
  "RAS proteins (KRAS, HRAS, NRAS) are membrane-associated G-proteins; point mutations lock RAS into a constitutive GTP-bound state, continuously stimulating cell proliferation."
);
addMcq(
  "Amplification and overexpression of the HER2/neu (ERBB2) receptor tyrosine kinase occurs in about 20% of cases of:",
  ["Breast carcinoma", "Kaposi sarcoma", "Retinoblastoma", "Melanoma"],
  0,
  "HER2 (human epidermal growth factor receptor 2) gene amplification in breast cancer drives aggressive tumor proliferation; patients are treated with targeted anti-HER2 antibodies."
);
addMcq(
  "Trastuzumab (Herceptin) is a recombinant humanized monoclonal antibody designed to target and block:",
  ["HER2/neu receptor in HER2-positive breast cancer", "CD20 antigen on B cells", "VEGF ligand in circulation", "Estrogen receptor inside nucleus"],
  0,
  "Trastuzumab binds the extracellular domain of HER2, blocking downstream proliferative cascades and marking tumor cells for antibody-dependent cellular cytotoxicity."
);
addMcq(
  "Rituximab is a monoclonal antibody used in cancer immunotherapy that specifically targets:",
  ["CD20 antigen expressed on normal and neoplastic B lymphocytes in Non-Hodgkin lymphoma", "CD4 on helper T cells", "CD8 on cytotoxic T cells", "CD34 on hematopoietic stem cells"],
  0,
  "Rituximab binds CD20 on the surface of B cells, causing complement-mediated lysis and apoptosis in B-cell malignancies such as diffuse large B-cell lymphoma."
);
addMcq(
  "Which tumor suppressor gene is mutated in patients with familial Adenomatous Polyposis (FAP), predisposing them to hundreds of colon polyps?",
  ["APC (Adenomatous Polyposis Coli)", "KRAS", "c-MYC", "HER2"],
  0,
  "Inactivating mutations in the APC gene lead to accumulation of free beta-catenin, which translocates to the nucleus and activates genes driving colonic polyposis and cancer."
);
addMcq(
  "Li-Fraumeni syndrome is a rare familial cancer predisposition syndrome caused by germline mutations in:",
  ["TP53 tumor suppressor gene", "BRCA2 gene only", "Retinoblastoma (RB1) gene", "WT1 gene"],
  0,
  "Li-Fraumeni syndrome is an autosomal dominant condition caused by inherited germline mutations in TP53, predisposing patients to soft-tissue sarcomas, breast cancer, brain tumors, and leukemias."
);
addMcq(
  "Wilms tumor (nephroblastoma), the most common pediatric kidney cancer, is associated with mutations in which tumor suppressor gene?",
  ["WT1 on chromosome 11p13", "VHL on chromosome 3p", "NF1 on chromosome 17q", "TSC1 on chromosome 9q"],
  0,
  "Wilms tumor is an embryonic renal neoplasm associated with mutational inactivation of the WT1 (Wilms tumor 1) gene that encodes a transcription factor critical for renal development."
);
addMcq(
  "Neurofibromatosis type 1 (von Recklinghausen disease) is an autosomal dominant disorder caused by mutations in NF1, whose protein product neurofibromin acts as a:",
  ["GTPase-activating protein (GAP) that negatively regulates RAS", "DNA polymerase delta subunit", "Caspase-8 activator", "Receptor tyrosine kinase"],
  0,
  "Neurofibromin functions as a GAP that accelerates GTP hydrolysis on active RAS-GTP; loss of neurofibromin keeps RAS active, leading to benign neurofibromas and malignant nerve sheath tumors."
);
addMcq(
  "Von Hippel-Lindau (VHL) disease predisposes individuals to clear cell renal cell carcinoma and hemangioblastomas because the VHL protein normally:",
  ["Targets hypoxia-inducible factor 1 alpha (HIF-1alpha) for ubiquitin-mediated proteasomal degradation under normoxic conditions", "Phosphorylates p53 at serine residues", "Cleaves poly(ADP-ribose) polymerase (PARP)", "Activates glycogen synthase kinase 3 beta"],
  0,
  "VHL acts as an E3 ubiquitin ligase substrate recognition component that tags hydroxylated HIF-1alpha for destruction; VHL loss leads to constitutive HIF-1alpha activity and VEGF secretion."
);
addMcq(
  "Which occupational carcinogen was famously identified by Percivall Pott in 1775 as the cause of scrotal cancer in chimney sweeps?",
  ["Coal soot containing polycyclic aromatic hydrocarbons", "Arsenic trioxide", "Benzene", "Formaldehyde"],
  0,
  "Sir Percivall Pott provided the first historical demonstration of occupational chemical carcinogenesis by linking coal soot exposure to scrotal cancer in chimney sweeps."
);
addMcq(
  "Exposure to asbestos mineral fibers in shipyards and construction industries is an established cause of which aggressive malignancy of the pleura?",
  ["Malignant mesothelioma", "Osteosarcoma", "Burkitt lymphoma", "Multiple myeloma"],
  0,
  "Inhalation of thin, durable asbestos amphibole fibers causes chronic pleural inflammation, fibrosis (asbestosis), and malignant pleural mesothelioma."
);
addMcq(
  "Which industrial chemical utilized in plastics manufacturing is strongly linked to hepatic angiosarcoma (a rare vascular liver malignancy)?",
  ["Vinyl chloride monomer", "Sodium chloride", "Ethyl alcohol", "Propylene glycol"],
  0,
  "Occupational exposure to gaseous vinyl chloride in polyvinyl chloride (PVC) synthesis induces rare hepatic angiosarcoma through reactive chloroethylene oxide intermediates."
);
addMcq(
  "Bladder cancer among workers in the rubber and synthetic aniline dye industries was historically linked to occupational exposure to:",
  ["Aromatic amines like 2-naphthylamine and benzidine", "Sodium bicarbonate", "Calcium phosphate", "Sulfur dioxide"],
  0,
  "Aromatic amines such as 2-naphthylamine are metabolized in the liver, excreted into urine, and cleaved in the acidic bladder into reactive carcinogens that induce transitional cell bladder cancer."
);
addMcq(
  "Which viral pathogen is the primary etiological cause of Kaposi's sarcoma in patients suffering from advanced AIDS?",
  ["Human Herpesvirus 8 (HHV-8 / KSHV)", "Cytomegalovirus (HHV-5)", "Epstein-Barr virus (HHV-4)", "Herpes simplex virus 1 (HSV-1)"],
  0,
  "Human Herpesvirus 8 (also called Kaposi Sarcoma-Associated Herpesvirus) infects endothelial cells, driving spindle-cell proliferation and vascular lesions of Kaposi's sarcoma in immunocompromised hosts."
);
addMcq(
  "Adult T-cell leukemia/lymphoma (ATLL) is an aggressive malignancy of mature CD4+ T lymphocytes caused by which retrovirus?",
  ["Human T-cell Lymphotropic Virus Type 1 (HTLV-1)", "Human Immunodeficiency Virus (HIV)", "Hepatitis C virus (HCV)", "Dengue virus"],
  0,
  "HTLV-1 encodes a potent regulatory protein called Tax that activates host cellular transcription factors (like NF-kB), leading to immortalization and leukemogenesis."
);
addMcq(
  "Which bacterium is classified as a definitive Group 1 biological carcinogen for gastric adenocarcinoma and gastric MALT lymphoma?",
  ["Helicobacter pylori", "Campylobacter jejuni", "Salmonella enterica", "Escherichia coli"],
  0,
  "Chronic colonization by Helicobacter pylori induces persistent mucosal inflammation, oxidative stress, and CagA oncoprotein injection, promoting gastric adenocarcinoma and MALT lymphoma."
);
addMcq(
  "In cancer diagnosis, Positron Emission Tomography (PET scan) commonly utilizes which radioactive tracer to image metabolic tumor activity?",
  ["$^{18}\\text{F}$-Fluorodeoxyglucose ($^{18}\\text{F}$-FDG)", "$^{131}\\text{I}$-Sodium iodide", "$^{99m}\\text{Tc}$-Pertechnetate", "$^{60}\\text{Co}$-Chloride"],
  0,
  "$^{18}\\text{F}$-FDG is a radiolabeled glucose analog taken up via GLUT transporters and phosphorylated by hexokinase; its metabolic trapping visualizes high-glycolysis tumors on PET."
);
addMcq(
  "Which cell surface antigen is uniquely targeted by CAR-T cell immunotherapy approved for refractory B-cell acute lymphoblastic leukemia (B-ALL)?",
  ["CD19", "CD3", "CD8", "CD56"],
  0,
  "Chimeric Antigen Receptor (CAR) T-cell therapies (such as tisagenlecleucel) are genetically engineered to express synthetic receptors targeting the pan-B-cell marker CD19."
);
addMcq(
  "Immune checkpoint inhibitors such as pembrolizumab and nivolumab enhance anti-tumor immunity by blocking the interaction between:",
  ["Programmed Cell Death Protein 1 (PD-1) on T cells and its ligands (PD-L1/PD-L2) on tumor cells", "CD4 and MHC class II", "TCR and MHC class I", "CD28 and B7-1"],
  0,
  "Tumors upregulate PD-L1 to engage PD-1 on cytotoxic T cells, delivering an inhibitory signal that induces T-cell exhaustion; blocking this pathway unleashes anti-tumor T-cell attack."
);
addMcq(
  "Ipilimumab is an immune checkpoint inhibitor antibody that boosts anti-tumor T-cell activation by blocking:",
  ["Cytotoxic T-Lymphocyte-Associated Protein 4 (CTLA-4)", "Vascular endothelial growth factor (VEGF)", "Epidermal growth factor receptor (EGFR)", "Interleukin-2 receptor"],
  0,
  "CTLA-4 competitively inhibits CD28 binding to B7 costimulatory molecules on antigen-presenting cells; blocking CTLA-4 enhances early T-cell priming and activation in lymph nodes."
);
addMcq(
  "Which class of chemotherapeutic drugs acts by alkylating DNA bases, forming interstrand and intrastrand cross-links that halt replication?",
  ["Alkylating agents (e.g., Cyclophosphamide and Cisplatin)", "Vinca alkaloids (e.g., Vincristine)", "Taxanes (e.g., Paclitaxel)", "Antimetabolites (e.g., Methotrexate)"],
  0,
  "Alkylating agents attach alkyl groups to the N7 position of guanine residues, inducing DNA cross-links and double-strand breaks that trigger apoptosis in rapidly dividing cells."
);
addMcq(
  "Methotrexate exerts its cytotoxic anti-cancer activity by competitively inhibiting which key enzyme in folate metabolism?",
  ["Dihydrofolate reductase (DHFR)", "Thymidylate synthase", "Ribonucleotide reductase", "DNA polymerase alpha"],
  0,
  "Methotrexate is a structural analogue of folic acid that competitively inhibits DHFR, depriving cells of tetrahydrofolate needed for purine and thymidylate biosynthesis."
);
addMcq(
  "Fluorouracil (5-FU) is an antimetabolite chemotherapeutic agent that inhibits DNA synthesis by irreversibly blocking:",
  ["Thymidylate synthase", "Dihydrofolate reductase", "Topoisomerase II", "Helicase"],
  0,
  "5-FU is metabolically converted to 5-FdUMP, which forms a stable covalent ternary complex with thymidylate synthase and 5,10-methylene-THF, arresting thymidine synthesis."
);
addMcq(
  "Vincristine and vinblastine (vinca alkaloids derived from Catharanthus roseus) arrest cancer cells in mitosis by:",
  ["Inhibiting tubulin polymerization, thereby preventing mitotic spindle assembly", "Hyper-stabilizing polymerized microtubules and preventing their disassembly", "Intercalating between base pairs of DNA double helices", "Cross-linking ribosomal RNA molecules"],
  0,
  "Vinca alkaloids bind to tubulin dimers, preventing their assembly into microtubules and arresting cells in metaphase with dysfunctional mitotic spindles."
);
addMcq(
  "Paclitaxel (Taxol, originally isolated from the bark of Taxus brevifolia) acts as an anti-mitotic agent by:",
  ["Binding and hyper-stabilizing polymerized microtubules, preventing their depolymerization during anaphase", "Depolymerizing all cellular microfilaments", "Cleaving histone proteins", "Inhibiting telomerase reverse transcriptase"],
  0,
  "Paclitaxel promotes tubulin assembly and binds specifically to the interior surface of microtubules, stabilizing them and preventing normal mitotic spindle breakdown during anaphase."
);
addMcq(
  "Doxorubicin (Adriamycin) is an anthracycline anti-tumor antibiotic that damages cancer cells through:",
  ["Intercalating into DNA double helices, inhibiting topoisomerase II, and generating reactive oxygen species", "Competitive inhibition of beta-lactamases", "Blocking cellular sodium-potassium pumps", "Degrading mitochondrial ribosomes"],
  0,
  "Doxorubicin intercalates between adjacent base pairs, stabilizes the topoisomerase II-cleavable complex, and generates iron-mediated free radicals that induce DNA strand breaks."
);
addMcq(
  "Tamoxifen is widely prescribed in the endocrine management of breast cancer because it acts as a:",
  ["Selective Estrogen Receptor Modulator (SERM) that competitively antagonizes estrogen binding in mammary tissue", "Direct inhibitor of aromatase in adipose tissue", "GnRH receptor agonist in the anterior pituitary", "Progesterone receptor down-regulator in ovaries"],
  0,
  "Tamoxifen binds to estrogen receptors in breast tissue, competitively blocking estrogen-mediated transcription of growth-promoting genes in ER-positive breast cancer."
);
addMcq(
  "Aromatase inhibitors (such as Anastrozole and Letrozole) reduce recurrence in postmenopausal hormone-receptor-positive breast cancer by:",
  ["Blocking peripheral conversion of androgens into estrogens in adipose and peripheral tissues", "Destroying estrogen receptors inside the cell nucleus", "Inhibiting progesterone synthesis in adrenal cortex", "Blocking prolactin release from the pituitary"],
  0,
  "In postmenopausal women, the primary source of estrogen is peripheral aromatization of adrenal androgens in adipose tissue; aromatase inhibitors block this enzyme completely."
);
addMcq(
  "Brachytherapy is a specialized form of radiation therapy characterized by:",
  ["Placing radioactive isotope seeds directly inside or immediately adjacent to the tumor tissue", "Administering oral cytotoxic antimetabolites with food", "Directing wide-field ionizing X-rays from an external linear accelerator", "Exposing the whole body to ultraviolet light chambers"],
  0,
  "Brachytherapy involves temporary or permanent implantation of sealed radioactive sources (such as Iodine-125 or Cesium-137) directly within the tumor mass."
);

// 61-154: Additional clinical, biological, and NCERT-aligned MCQs
const moreMcqsPart2 = [
  ["Multiple myeloma is a neoplastic disease of the bone marrow characterized by malignant proliferation of:", ["Antibody-secreting plasma cells producing monoclonal Bence Jones paraproteins", "Neutrophils producing alkaline phosphatase", "Erythrocytes producing fetal hemoglobin", "Basophils producing excess heparin"], 0, "Multiple myeloma is a clonal plasma cell neoplasm that produces monoclonal immunoglobulins (M protein) and free light chains (Bence Jones proteins in urine)."],
  ["Reed-Sternberg cells (large binucleated or multinucleated 'owl-eye' cells) are diagnostic histopathological hallmarks of:", ["Hodgkin lymphoma", "Non-Hodgkin lymphoma", "Ewing sarcoma", "Multiple myeloma"], 0, "Reed-Sternberg cells are neoplastic giant cells of B-cell lineage surrounded by non-neoplastic inflammatory cells, pathognomonic for Hodgkin lymphoma."],
  ["Ewing sarcoma is a pediatric bone malignancy characterized by small round blue cells and a recurrent chromosomal translocation:", ["t(11;22)(q24;q12) fusing EWSR1 with FLI1", "t(9;22) fusing BCR with ABL", "t(8;14) fusing MYC with IGH", "t(14;18) fusing BCL2 with IGH"], 0, "Ewing sarcoma is defined by the EWSR1-FLI1 fusion gene generated by the reciprocal translocation t(11;22)."],
  ["Follicular lymphoma is driven by the reciprocal translocation t(14;18), which causes overexpression of:", ["BCL-2, an anti-apoptotic protein that inhibits programmed cell death", "p53, a pro-apoptotic transcription factor", "Cyclin D1, a cell cycle initiator", "E-cadherin, an intercellular adhesion molecule"], 0, "Translocation t(14;18) places the anti-apoptotic BCL-2 gene next to the immunoglobulin heavy chain locus, preventing normal apoptosis in germinal center B cells."],
  ["Mantle cell lymphoma characteristically harbors the chromosomal translocation t(11;14), which drives overexpression of:", ["Cyclin D1 (CCND1), promoting G1 to S phase transition", "c-KIT tyrosine kinase", "Platelet-Derived Growth Factor Receptor", "Vascular Endothelial Growth Factor Receptor"], 0, "The t(11;14) translocation couples the cyclin D1 gene to the IgH enhancer, leading to continuous phosphorylation of pRb and accelerated G1/S progression."],
  ["Gastrointestinal stromal tumors (GIST) frequently harbor activating mutations in which receptor tyrosine kinase gene, rendering them sensitive to imatinib?", ["c-KIT (CD117)", "EGFR", "HER2", "MET"], 0, "GISTs typically exhibit oncogenic gain-of-function mutations in c-KIT or PDGFRA, which are effectively targeted by the tyrosine kinase inhibitor imatinib."],
  ["Glioblastoma multiforme (GBM) is the most aggressive primary malignant neoplasm of the adult central nervous system, originating from:", ["Astrocytes (glial supporting cells of brain)", "Ependymal cells lining ventricles", "Oligodendrocytes in spinal cord", "Schwann cells in peripheral nerves"], 0, "Glioblastoma is a Grade IV astrocytoma characterized by vascular proliferation, necrosis, high invasiveness, and dismal prognosis."],
  ["Basal cell carcinoma of the skin is characterized clinically by:", ["A slow-growing, pearly papule with telangiectasias that rarely metastasizes but invades locally", "Rapid hematogenous metastasis to lungs and brain within days", "Exclusive occurrence on mucosal membranes of internal viscera", "Spontaneous resolution upon sunlight exposure"], 0, "Basal cell carcinoma is the most common human cancer, typically presenting as a pearly translucent papule with telangiectatic vessels on sun-exposed skin."],
  ["Squamous cell carcinoma of the skin is strongly linked to UV radiation and commonly arises from a premalignant lesion known as:", ["Actinic (solar) keratosis", "Seborrheic keratosis", "Café-au-lait macule", "Congenital melanocytic nevus"], 0, "Actinic keratosis is a rough, erythematous, hyperkeratotic cutaneous lesion caused by chronic UV exposure that can evolve into invasive squamous cell carcinoma."],
  ["Malignant melanoma arises from transformed melanocytes; the clinical ABCD criteria for recognizing early melanoma include:", ["Asymmetry, Border irregularity, Color variegation, Diameter $> 6\\text{ mm}$ (and Evolving)", "Acidic, Basic, Chemotactic, Divided", "Acute, Benign, Circular, Depressed", "Apical, Basal, Cortical, Distal"], 0, "The ABCDE clinical rule (Asymmetry, Border irregularity, Color variation, Diameter $>6\\text{ mm}$, and Evolution) helps differentiate early melanoma from benign nevi."],
  ["Breslow thickness in malignant melanoma histopathology measures:", ["The vertical depth of tumor invasion from the top of the granular layer to the deepest tumor cell in millimeters", "The horizontal diameter of the lesion across the skin surface", "The total number of mitoses per high-power field", "The percentage of clear margins around the excision"], 0, "Breslow thickness is the single most important prognostic parameter in cutaneous melanoma, directly correlating with metastatic risk and survival."],
  ["E-cadherin is an essential calcium-dependent cell adhesion molecule; its loss or downregulation in epithelial tumors enables:", ["Epithelial-mesenchymal transition (EMT), cellular detachment, and local tissue invasion", "Decreased motility and enhanced apoptosis", "Spontaneous regression of the tumor bulk", "Immediate repair of genomic mutations"], 0, "Loss of E-cadherin disrupts adherens junctions, allowing neoplastic epithelial cells to dissociate from neighboring cells and acquire invasive mesenchymal traits."],
  ["Matrix metalloproteinases (MMPs, such as MMP-2 and MMP-9) facilitate tumor invasion and metastasis by:", ["Degrading type IV collagen and components of the extracellular matrix and basement membrane", "Forming covalent cross-links in the extracellular matrix", "Stimulating intracellular glycogen synthesis", "Inactivating cytotoxic T cells directly"], 0, "MMPs are zinc-dependent endopeptidases that degrade basement membrane type IV collagen and extracellular matrix, clearing a path for tumor extravasation and invasion."],
  ["Which cellular organelle is the central executioner of the intrinsic (mitochondrial) pathway of apoptosis?", ["Mitochondrion, via the release of cytochrome c into the cytosol", "Golgi apparatus, via secretion of pectin", "Lysosome, via accumulation of glycogen", "Rough endoplasmic reticulum, via protein translation"], 0, "Mitochondrial outer membrane permeabilization releases cytochrome c into the cytoplasm, which binds Apaf-1 and procaspase-9 to form the apoptosome."],
  ["In the intrinsic apoptotic cascade, cytochrome c released from mitochondria binds to Apaf-1 to assemble the multi-protein complex called the:", ["Apoptosome", "Proteasome", "Spliceosome", "Ribosome"], 0, "The apoptosome is a wheel-shaped heptameric complex of Apaf-1 and cytochrome c that recruits and activates the initiator caspase, procaspase-9."],
  ["Which executioner caspases are responsible for cleaving vital structural and regulatory proteins during apoptosis?", ["Caspase-3, Caspase-6, and Caspase-7", "Caspase-1 and Caspase-4 only", "Caspase-8 and Caspase-10 only", "Caspase-9 and Caspase-12 only"], 0, "Initiator caspases (caspase-8 and caspase-9) activate downstream executioner caspases (caspase-3, -6, -7), which proteolytically cleave cellular substrates to dismantle the cell."],
  ["The death-receptor (extrinsic) pathway of apoptosis is initiated by the binding of extracellular ligands like FasL or TNF-alpha to:", ["Death receptors on the plasma membrane containing intracellular death domains (such as Fas/CD95)", "Receptor tyrosine kinases", "Voltage-gated calcium channels", "G-protein coupled olfactory receptors"], 0, "Engagement of death receptors (Fas, TNFR1) by their cognate trimeric ligands recruits FADD and procaspase-8 to form the death-inducing signaling complex (DISC)."],
  ["Which pro-survival (anti-apoptotic) protein family member is commonly overexpressed in cancer to evade programmed cell death?", ["BCL-2", "BAX", "BAK", "BID"], 0, "BCL-2, BCL-XL, and MCL-1 are anti-apoptotic proteins that bind and neutralize pro-apoptotic BAX and BAK, maintaining mitochondrial membrane integrity and preventing apoptosis."],
  ["BAX and BAK are critical pro-apoptotic members of the BCL-2 family that promote cell death by:", ["Oligomerizing in the outer mitochondrial membrane to form pores that release cytochrome c", "Inhibiting caspase-3 cleavage", "Repairing double-strand DNA breaks", "Synthesizing ATP via oxidative phosphorylation"], 0, "Upon activation by BH3-only proteins, BAX and BAK undergo conformational changes and oligomerize, forming pores in the mitochondrial outer membrane."],
  ["Xeroderma pigmentosum is an autosomal recessive genetic disorder characterized by extreme hypersensitivity to sunlight and high skin cancer risk due to defective:", ["Nucleotide Excision Repair (NER) of UV-induced pyrimidine dimers", "Mismatch repair of microsatellite repeats", "Homologous recombination repair of double-strand breaks", "Base excision repair of uracil residues"], 0, "In Xeroderma pigmentosum, mutations in NER genes (such as XPA through XPG) prevent repair of UV-induced thymine dimers, leading to thousands-fold elevated skin cancer rates."],
  ["Hereditary Nonpolyposis Colorectal Cancer (HNPCC / Lynch syndrome) is caused by germline mutations in:", ["DNA Mismatch Repair (MMR) genes (e.g., MSH2, MLH1, MSH6, PMS2)", "Tumor suppressor p53", "KRAS proto-oncogene", "Adenomatous Polyposis Coli (APC) gene"], 0, "Defects in DNA mismatch repair genes lead to microsatellite instability (MSI) and accelerated accumulation of mutations throughout the genome in Lynch syndrome."],
  ["Ataxia-telangiectasia is a hereditary cancer-predisposition syndrome caused by mutations in the ATM gene, which functions in sensing:", ["DNA double-strand breaks and activating cell cycle checkpoints", "Bacterial lipopolysaccharide molecules", "Mitochondrial reactive oxygen species only", "Intracellular glucose starvation"], 0, "ATM (Ataxia Telangiectasia Mutated) is a protein kinase that recognizes double-strand DNA breaks and phosphorylates p53, CHK2, and H2AX to coordinate checkpoint arrest."],
  ["Bloom syndrome, marked by short stature, photosensitivity, and high incidence of diverse malignancies, is caused by mutations in BLM encoding a:", ["RecQ-like DNA helicase involved in maintaining genomic stability", "DNA ligase IV", "Topoisomerase II", "RNA-dependent RNA polymerase"], 0, "Bloom syndrome results from mutations in the BLM gene encoding a RecQ DNA helicase, causing elevated sister chromatid exchanges and genomic instability."],
  ["Fanconi anemia is a rare genetic disorder characterized by aplastic anemia, developmental defects, and high cancer incidence caused by failure to repair:", ["DNA interstrand cross-links", "Single-base mismatches", "Depurinated apurinic sites", "Transfer RNA methylation"], 0, "The Fanconi anemia core complex mediates the repair of DNA interstrand cross-links; defective repair causes chromosome fragility upon exposure to cross-linking agents like mitomycin C."],
  ["Which cellular phenomenon limits the replicative lifespan of normal human somatic cells in culture to approximately 50-70 population doublings?", ["Hayflick limit", "Warburg threshold", "Gould limit", "Hardy-Weinberg equilibrium"], 0, "Leonard Hayflick demonstrated that normal human diploid cells undergo a finite number of divisions (Hayflick limit) before entering permanent telomere-dependent senescence."],
  ["Telomeres at the ends of eukaryotic chromosomes are composed of tandem hexanucleotide repeats of the sequence:", ["$5'\\text{-TTAGGG-}3'$ in humans", "$5'\\text{-TATAAA-}3'$", "$5'\\text{-AATAAA-}3'$", "$5'\\text{-CCGCCC-}3'$"], 0, "Human telomeres consist of thousands of tandem repeats of the hexanucleotide sequence 5'-TTAGGG-3' capped by the shelterin protein complex."],
  ["Shelterin is a specialized six-protein complex that protects chromosome ends from being recognized as:", ["Double-strand DNA breaks requiring repair", "Active promoters by RNA polymerase", "Origins of DNA replication", "Centromeric attachment points for spindle fibers"], 0, "The shelterin complex hides telomeric ends, preventing them from being mistakenly recognized as broken DNA ends that would trigger ATM/ATR checkpoint arrest or end-to-end fusions."],
  ["Crisis in somatic cells occurs when telomeres become critically shortened, resulting in end-to-end chromosome fusions and breakage-fusion-bridge cycles driven by loss of:", ["p53 and pRb checkpoints allowing cells to bypass normal senescence", "Telomerase activity exclusively", "Mitochondrial cytochrome c", "Histone acetyltransferases"], 0, "Cells that bypass M1 senescence (due to p53/pRb loss) continue dividing until reaching M2 crisis, where widespread chromosome instability kills most cells unless telomerase is reactivated."],
  ["ALT (Alternative Lengthening of Telomeres) is a telomerase-independent mechanism employed by ~10-15% of cancers to maintain telomeres using:", ["Homologous recombination-mediated DNA synthesis between telomeric sequences", "Non-homologous end joining", "Transposon retrotransposition", "Exonuclease digestion"], 0, "ALT relies on homologous recombination and break-induced replication between telomeres to maintain telomere length in the absence of active telomerase."],
  ["Hypoxia-Inducible Factor 1 (HIF-1) is a heterodimeric transcription factor whose alpha subunit is stabilized under low oxygen to activate genes for:", ["Angiogenesis (VEGF), glycolysis (GLUT1, glycolytic enzymes), and erythropoiesis (EPO)", "Apoptosis via caspase-3 upregulation", "DNA base excision repair", "Myosin heavy chain synthesis"], 0, "Under hypoxia, prolyl hydroxylases are inactive, allowing HIF-1alpha to escape VHL degradation, translocate to the nucleus, and activate VEGF and glycolytic enzymes."],
  ["Endostatin and Angiostatin are endogenous peptide inhibitors of:", ["Angiogenesis (endothelial cell proliferation and migration)", "Cell cycle progression at G2/M", "Proteasomal protein degradation", "Telomerase catalytic subunit"], 0, "Endostatin (a fragment of collagen XVIII) and angiostatin (a fragment of plasminogen) act as potent natural anti-angiogenic factors that inhibit tumor neovascularization."],
  ["Bevacizumab (Avastin) is a humanized monoclonal antibody designed to inhibit tumor angiogenesis by specifically neutralizing:", ["Vascular Endothelial Growth Factor A (VEGF-A)", "Epidermal Growth Factor Receptor (EGFR)", "Tumor Necrosis Factor alpha (TNF-alpha)", "Platelet-Derived Growth Factor B"], 0, "Bevacizumab binds circulating VEGF-A, preventing its interaction with VEGFR-1 and VEGFR-2 on endothelial cells, thereby suppressing tumor blood vessel growth."],
  ["Cetuximab is a recombinant chimeric monoclonal antibody used in treating metastatic colorectal cancer that targets:", ["Epidermal Growth Factor Receptor (EGFR)", "Vascular Endothelial Growth Factor (VEGF)", "CD20 surface antigen", "HER2 receptor"], 0, "Cetuximab binds to the extracellular domain of EGFR, blocking ligand-induced receptor phosphorylation and downstream MAPK and PI3K signaling cascades."],
  ["Gefitinib and Erlotinib are small-molecule targeted therapies that inhibit the intracellular tyrosine kinase domain of:", ["Epidermal Growth Factor Receptor (EGFR) in non-small cell lung cancer", "BCR-ABL fusion protein", "Anaplastic Lymphoma Kinase (ALK)", "Platelet-Derived Growth Factor Receptor"], 0, "Gefitinib and erlotinib compete with ATP for binding to the catalytic domain of mutated EGFR, blocking signaling in lung adenocarcinoma."],
  ["Crizotinib is a targeted kinase inhibitor indicated for the treatment of non-small cell lung cancer harboring rearrangements in:", ["EML4-ALK fusion gene", "KRAS G12D", "BRAF V600E", "EGFR exon 19 deletion"], 0, "Crizotinib specifically inhibits the tyrosine kinase activity of the EML4-ALK fusion oncoprotein generated by an inversion on chromosome 2p."],
  ["The BRAF V600E point mutation, which causes constitutive activation of the MAPK pathway, is present in over 50% of:", ["Cutaneous malignant melanomas", "Retinoblastomas", "Chronic lymphocytic leukemias", "Renal oncocytomas"], 0, "The valine-to-glutamic acid substitution at codon 600 (V600E) of BRAF locks the kinase in an active conformation; patients are treated with vemurafenib or dabrafenib."],
  ["Vemurafenib is a selective small-molecule inhibitor developed specifically to target which mutated oncoprotein in melanoma?", ["BRAF V600E kinase", "KRAS GTPase", "c-KIT kinase", "ALK fusion kinase"], 0, "Vemurafenib competitively binds the ATP-binding pocket of BRAF V600E kinase, significantly reducing tumor burden in patients with metastatic melanoma."],
  ["Cyclin-dependent kinases (CDKs) require association with regulatory subunits called cyclins to:", ["Phosphorylate specific protein substrates that drive the cell through cell cycle checkpoints", "Dephosphorylate membrane phospholipids", "Replicate mitochondrial DNA", "Degrade messenger RNA molecules"], 0, "CDKs are serine/threonine kinases that must bind cyclins to acquire catalytic activity and phosphorylate key substrates like pRb to advance the cell cycle."],
  ["Phosphorylation of the retinoblastoma protein (pRb) by Cyclin D-CDK4/6 complexes during G1 phase causes:", ["Release of E2F transcription factors, allowing transcription of genes required for S phase entry", "Permanent degradation of E2F proteins", "Immediate activation of caspase-3", "Translocation of p53 into lysosomes"], 0, "Unphosphorylated pRb sequesters E2F transcription factors; phosphorylation by CDK4/6 releases E2F, activating genes like Cyclin E, Cyclin A, and DNA polymerase."],
  ["Palbociclib, Ribociclib, and Abemaciclib are targeted anti-cancer agents that act as selective inhibitors of:", ["CDK4 and CDK6, arresting cells at the G1/S checkpoint", "Topoisomerase I and II", "Aromatase enzyme", "Microtubule depolymerizing enzymes"], 0, "CDK4/6 inhibitors prevent pRb phosphorylation, maintaining E2F sequestration and arresting hormone-receptor-positive breast cancer cells in G1 phase."],
  ["The INK4 family of cyclin-dependent kinase inhibitors (including p16INK4a) specifically inhibits:", ["CDK4 and CDK6, preventing phosphorylation of pRb", "CDK1-Cyclin B complexes at G2/M", "DNA ligase I", "RNA polymerase II elongation"], 0, "p16INK4a binds CDK4/6 and inhibits their binding to Cyclin D; deletion or promoter hypermethylation of p16INK4a is common across many human malignancies."],
  ["The CIP/KIP family of CDK inhibitors includes which universal cell cycle inhibitor directly transactivated by p53 in response to DNA damage?", ["p21CIP1/WAF1", "p16INK4a", "p15INK4b", "p19ARF"], 0, "p21 is transcriptionally induced by p53 and broadly inhibits Cyclin-CDK complexes (including CDK2-Cyclin E), enforcing G1 arrest for DNA repair."],
  ["MDM2 acts as a negative regulator of the p53 tumor suppressor by:", ["Acting as an E3 ubiquitin ligase that targets p53 for proteasomal degradation", "Phosphorylating p53 at activating residues", "Binding to the p53 promoter to stimulate transcription", "Cleaving p53 mRNA in the cytoplasm"], 0, "MDM2 binds the transactivation domain of p53 and catalyzes its polyubiquitination, targeting it for degradation by the 26S proteasome."],
  ["p14ARF (alternate reading frame product of the CDKN2A locus) promotes p53 stabilization by:", ["Binding and inhibiting MDM2, thereby preventing MDM2-mediated degradation of p53", "Directly phosphorylating pRb", "Activating Cyclin D1 transcription", "Cleaving telomerase RNA subunit"], 0, "Hyperproliferative oncogenic signals induce p14ARF, which sequesters MDM2 in the nucleolus, allowing p53 levels to rise and trigger cell cycle arrest or apoptosis."],
  ["Epigenetic alterations in cancer cells frequently include:", ["Global DNA hypomethylation accompanied by focal promoter hypermethylation of tumor suppressor genes", "Universal doubling of all histone genes", "Complete loss of all methyl groups from chromosomal RNA", "Irreversible substitution of guanine with adenine"], 0, "Cancer cells typically exhibit global genome-wide hypomethylation (promoting genomic instability) and localized hypermethylation of CpG islands in tumor suppressor promoters."],
  ["Histone Deacetylase (HDAC) inhibitors (such as Vorinostat) exert anti-tumor activity by:", ["Increasing histone acetylation, relaxing chromatin structure, and reactivating silenced tumor suppressor genes", "Compact chromatin into silent heterochromatin", "Blocking RNA polymerase access to oncogenes", "Cleaving nuclear envelope lamin proteins"], 0, "HDAC inhibitors maintain open euchromatin by preventing deacetylation of lysine residues on histone tails, restoring expression of suppressed pro-apoptotic and regulatory genes."],
  ["Cancer stem cells (CSCs) are a subpopulation of tumor cells that possess:", ["Self-renewal capacity and intrinsic resistance to conventional chemo- and radiation therapy", "Zero proliferative capability", "Higher susceptibility to radiation than differentiated tumor cells", "Complete absence of cell surface membrane receptors"], 0, "Cancer stem cells possess stem-like self-renewal, high DNA repair capacity, and ABC transporter expression, driving tumor recurrence after therapy."],
  ["The primary mechanism of action of platinum coordination complexes like Cisplatin and Carboplatin is:", ["Forming covalent intrastrand cross-links, predominantly between adjacent guanine residues on DNA", "Inhibiting bacterial cell wall transpeptidase", "Binding reversibly to 50S ribosomal subunits", "Antagonizing estrogen receptors inside nucleus"], 0, "Cisplatin loses chloride ligands in low-chloride intracellular environments and forms bifunctional adducts with N7 atoms of adjacent guanines, halting DNA replication."],
  ["Bleomycin is an anti-tumor antibiotic whose clinical use is dose-limited by a serious toxic effect on which organ?", ["Pulmonary toxicity leading to pulmonary fibrosis", "Nephrotoxicity with acute tubular necrosis", "Ototoxicity with permanent deafness", "Cardiotoxicity with congestive heart failure"], 0, "Bleomycin induces single- and double-strand DNA breaks via iron-oxygen free radicals; low levels of bleomycin hydrolase in the lung lead to progressive pulmonary fibrosis."],
  ["Cardiotoxicity, presenting as dilated cardiomyopathy and congestive heart failure, is the classic cumulative dose-limiting side effect of:", ["Anthracyclines (such as Doxorubicin and Daunorubicin)", "Vincristine", "Methotrexate", "Paclitaxel"], 0, "Doxorubicin generates iron-dependent reactive oxygen species in myocardial tissue, which has low antioxidant defenses, causing cumulative cardiomyocyte damage."],
  ["Peripheral sensory neuropathy, characterized by 'stocking-glove' tingling, numbness, and paresthesias, is a well-known side effect of:", ["Vinca alkaloids (Vincristine) and Taxanes (Paclitaxel)", "5-Fluorouracil", "Tamoxifen", "Bleomycin"], 0, "Microtubule-targeting drugs like vincristine and paclitaxel disrupt axonal transport in long peripheral sensory nerves, producing peripheral neuropathy."],
  ["Which supportive medication is routinely administered with high-dose methotrexate therapy to 'rescue' normal host tissues from lethal folate deficiency?", ["Leucovorin (folinic acid)", "Mesna", "Dexrazoxane", "Filgrastim"], 0, "Leucovorin provides a reduced folate source that bypasses blocked DHFR, rescuing normal dividing host tissues (like bone marrow and gut) from methotrexate toxicity."],
  ["Mesna is administered concurrently with high-dose cyclophosphamide and ifosfamide to prevent which severe toxic complication?", ["Hemorrhagic cystitis caused by the toxic urinary metabolite acrolein", "Cardiogenic shock", "Agranulocytosis", "Acute angle-closure glaucoma"], 0, "Acrolein, a cytotoxic metabolite of cyclophosphamide excreted in urine, causes severe hemorrhagic cystitis; Mesna binds acrolein to form a nontoxic thioether conjugate."],
  ["Filgrastim (recombinant human Granulocyte Colony-Stimulating Factor, G-CSF) is administered following chemotherapy to:", ["Stimulate neutrophil production in bone marrow and shorten the duration of neutropenia", "Increase platelet count", "Accelerate erythrocyte maturation in spleen", "Inhibit tumor angiogenesis directly"], 0, "G-CSF stimulates proliferation and differentiation of neutrophil progenitors in bone marrow, speeding recovery from severe chemotherapy-induced neutropenia and reducing infection risk."],
  ["Which recombinant glycoprotein hormone is administered to treat chemotherapy-induced anemia by stimulating red blood cell production?", ["Erythropoietin (EPO)", "Thrombopoietin", "Interleukin-11", "Granulocyte-Macrophage CSF"], 0, "Erythropoietin binds to erythropoietin receptors on erythroid progenitor cells in bone marrow, stimulating their proliferation and survival to raise hemoglobin levels."],
  ["Ondansetron is an effective antiemetic agent used to prevent chemotherapy-induced nausea and vomiting by competitively antagonizing:", ["5-$HT_3$ (serotonin) receptors in the chemoreceptor trigger zone and gastrointestinal tract", "Dopamine D2 receptors in basal ganglia", "Histamine H1 receptors in vestibular nuclei", "Muscarinic M1 receptors in cortex"], 0, "Chemotherapeutic drugs trigger enterochromaffin cells to release serotonin; ondansetron blocks 5-HT3 receptors on vagal afferents and in the solitary tract nucleus."],
  ["Tumor Lysis Syndrome (TLS) is an oncologic emergency occurring after rapid destruction of bulky tumors (e.g., leukemias/lymphomas), characterized by:", ["Hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia", "Hypokalemia, hypophosphatemia, and hypercalcemia", "Severe hypoglycemia and hyponatremia", "Severe metabolic alkalosis with hypokalemia"], 0, "Lysis of millions of cancer cells releases massive intracellular ions into blood, resulting in hyperkalemia, hyperphosphatemia, hyperuricemia (purine breakdown), and secondary hypocalcemia."],
  ["Allopurinol and Rasburicase are administered to prevent renal failure in Tumor Lysis Syndrome by targeting:", ["Uric acid (Allopurinol inhibits xanthine oxidase; Rasburicase converts uric acid to soluble allantoin)", "Potassium ions by binding to gut mucosa", "Phosphate crystals by precipitation in urine", "Serum calcium levels"], 0, "Allopurinol blocks xanthine oxidase preventing uric acid formation, whereas recombinant rasburicase (urate oxidase) enzymatically degrades uric acid into water-soluble allantoin."],
  ["The Ames test is an in vitro bacterial reverse-mutation assay used to screen chemical compounds for potential carcinogenicity by assessing their ability to:", ["Revert histidine-auxotrophic strains of Salmonella typhimurium to histidine prototrophy", "Inhibit growth of Escherichia coli on nutrient agar", "Lyses Staphylococcus aureus cultures", "Induce penicillin resistance in Streptococcus"], 0, "Bruce Ames developed this assay based on the strong correlation between mutagenicity in Salmonella typhimurium his- mutants and animal carcinogenicity."],
  ["Which molecular cytogenetic technique utilizes fluorescently labeled DNA probes to detect gene amplifications or translocations directly in interphase nuclei?", ["Fluorescence In Situ Hybridization (FISH)", "Southern blot hybridization", "Gel electrophoresis", "Enzyme-Linked Immunosorbent Assay (ELISA)"], 0, "FISH hybridizes fluorescent nucleic acid probes to specific chromosome loci in cells, allowing rapid visualization of gene copy number changes (e.g. HER2 amplification) or translocations."],
  ["Liquid biopsy is an emerging diagnostic and monitoring tool that detects cancer-derived biomarkers in peripheral blood, primarily analyzing:", ["Circulating tumor DNA (ctDNA) and circulating tumor cells (CTCs)", "Serum albumin and globulin ratios only", "Peripheral blood erythrocyte count", "Urine creatinine levels"], 0, "Liquid biopsy analyzes fragments of cell-free tumor DNA (ctDNA) shed into circulation, providing a non-invasive assessment of tumor mutations and minimal residual disease."],
  ["Which term describes the complete surgical removal of a localized primary tumor along with a margin of healthy normal tissue?", ["Curative surgical resection (en bloc resection)", "Palliative bypass surgery", "Needle core biopsy", "Debulking surgery only"], 0, "Curative surgical excision aims to completely extirpate the localized primary neoplasm with histologically clear surgical margins to prevent local recurrence."],
  ["Debulking (cytoreductive) surgery is performed in advanced cancers (such as ovarian cancer) with the objective of:", ["Removing as much tumor mass as possible to increase the efficacy of subsequent chemotherapy or radiation", "Completely curing the disease through surgery alone", "Obtaining a 1-millimeter tissue sample for pathology only", "Preventing hair loss caused by chemotherapy"], 0, "Cytoreductive surgery significantly reduces total viable tumor cell burden, improving perfusion and oxygenation and sensitizing residual disease to adjuvant chemotherapy."],
  ["Which clinical term designates cancer therapy administered AFTER surgical removal of all detectable primary tumor to eliminate microscopic micrometastases?", ["Adjuvant therapy", "Neoadjuvant therapy", "Induction therapy", "Palliative therapy"], 0, "Adjuvant therapy (chemotherapy, radiation, or hormone therapy) is given post-surgery to destroy residual microscopic tumor foci and lower recurrence risk."],
  ["Therapy administered BEFORE definitive surgical resection to shrink the primary tumor and facilitate less radical surgery is designated:", ["Neoadjuvant therapy", "Adjuvant therapy", "Maintenance therapy", "Terminal therapy"], 0, "Neoadjuvant therapy (pre-operative chemo or radiation) downstages large tumors, converting inoperable tumors into resectable ones and preserving organ function."],
  ["Palliative cancer therapy is administered with the primary goal of:", ["Relieving pain and distressing symptoms to improve the patient's quality of life without curative intent", "Achieving a permanent microscopic cure", "Completely eradicating all tumor stem cells", "Doubling the patient's white blood cell count"], 0, "Palliative treatment focuses on symptom relief, pain management, and comfort optimization when curative options are no longer viable."],
  ["Which term defines the stage where a cancer patient has no detectable signs or symptoms of cancer on clinical and radiological examinations?", ["Complete remission (complete response)", "Partial response", "Stable disease", "Progressive disease"], 0, "Complete remission indicates the complete disappearance of all detectable tumor lesions and clinical manifestations of cancer, though microscopic cells may remain."],
  ["Minimal Residual Disease (MRD) refers to:", ["Small numbers of leukemic or cancer cells that remain below the detection limit of conventional microscopy but can be identified by flow cytometry or PCR", "A benign skin lesion that never becomes malignant", "Local scar tissue formed after complete healing", "Inflammatory white blood cells infiltrating a healing incision"], 0, "MRD represents submicroscopic residual tumor cells; monitoring MRD by high-sensitivity flow cytometry or RT-qPCR guides decisions on treatment intensification."],
  ["Which of the following is a classic example of an oncogene formed by point mutation in an intracellular signaling enzyme?", ["BRAF V600E", "p53 deletion", "RB1 homozygous loss", "BRCA1 frameshift"], 0, "BRAF V600E is an activating point mutation that converts a serine/threonine kinase into a constitutively active driver oncogene."],
  ["What is the primary role of natural killer (NK) cells in innate anti-tumor immunity?", ["Directly lysing tumor cells that have downregulated surface MHC class I molecules", "Producing antigen-specific immunoglobulin G antibodies", "Acting as professional phagocytes in the colon", "Synthesizing clotting factors in the liver"], 0, "Tumor cells often downregulate MHC class I to evade cytotoxic T cells; NK cells recognize the absence of MHC class I ('missing self') and trigger apoptotic cell lysis."],
  ["Perforin and granzymes are cytotoxic molecules released by cytotoxic T lymphocytes and NK cells to destroy target tumor cells by:", ["Perforin polymerizes to form transmembrane pores in the target membrane, allowing granzymes to enter and activate caspases", "Binding and neutralizing cell surface growth factors", "Inhibiting cellular transcription of ribosomal RNA", "Cross-linking extracellular collagen bundles"], 0, "Perforin creates transmembrane pores in the target tumor cell plasma membrane, permitting granzyme serine proteases to enter and initiate apoptosis via Bid and caspase-3."],
  ["Tumor-infiltrating lymphocytes (TILs) found within a solid tumor are clinically significant because:", ["A high density of CD8+ cytotoxic TILs strongly correlates with active anti-tumor immunity and improved prognosis", "They indicate severe parasitic infection of the tumor", "They promote rapid metastatic spread of the tumor cells", "They synthesize protective connective tissue capsules for the cancer"], 0, "High infiltration of CD8+ cytotoxic T cells and memory T cells within tumor stroma indicates active host immune surveillance and associates with prolonged survival."],
  ["Which clinical test involves rubbing a brush against the surface of a suspected mucosal lesion to collect shed epithelial cells for microscopic evaluation?", ["Exfoliative cytology", "Bone marrow aspiration biopsy", "Open incisional biopsy", "Percutaneous core needle biopsy"], 0, "Exfoliative cytology examines shed or scraped cells from mucosal surfaces (such as the Pap test for cervix or oral brush cytology) to screen for dysplastic alterations."],
  ["The TNM staging system for malignant neoplasms classifies tumors based on:", ["Tumor size/extent (T), regional lymph Node involvement (N), and distant Metastasis (M)", "Temperature, Nutrition, and Metabolism", "Time, Number of cells, and Mitotic rate", "Toxicity, Neutrophil count, and Morphology"], 0, "The TNM system (AJCC/UICC) provides standardized anatomical staging of solid tumors based on primary Tumor size (T), regional Node involvement (N), and distant Metastasis (M)."],
  ["A tumor stage classified as $T_1N_0M_0$ indicates that the cancer is:", ["Small, localized, without regional lymph node involvement or distant metastasis", "Large, invading bone, with extensive distant metastases", "Disseminated widely throughout the central nervous system", "Completely benign with zero mitotic figures"], 0, "T1 indicates a small primary tumor; N0 denotes no regional lymph node spread; M0 confirms absence of distant metastasis, representing an early-stage resectable cancer."],
  ["Histological grading of a tumor assesses:", ["The degree of cellular differentiation and architectural resemblance to normal parent tissue (Grade 1 well-differentiated to Grade 4 undifferentiated/anaplastic)", "The total anatomical diameter of the tumor in centimeters", "The number of lymph nodes removed during surgery", "The patient's chronological age at diagnosis"], 0, "Histological grading reflects the biological aggressiveness of tumor cells based on their microscopic differentiation, nuclear atypia, and mitotic index."],
  ["Anaplastic tumors are characterized by:", ["Complete lack of cellular differentiation, marked nuclear pleomorphism, hyperchromatism, and atypical mitotic figures", "High resemblance to normal differentiated tissue architecture", "Total absence of mitotic cell divisions", "High levels of functional specialized hormone secretion"], 0, "Anaplasia is the hallmark of high-grade malignancy, defined by loss of structural and functional differentiation, pronounced cellular and nuclear polymorphism, and bizarre mitoses."],
  ["Which diagnostic imaging method is specifically used as an annual screening modality for early detection of breast cancer in asymptomatic women?", ["Mammography (low-dose breast radiography)", "Barium enema", "Upper gastrointestinal endoscopy", "Electroencephalography"], 0, "Screening mammography detects occult microcalcifications and small non-palpable breast carcinomas, significantly reducing breast cancer mortality."],
  ["Which childhood cancer of the sympathetic nervous system arises from primitive neural crest cells in the adrenal medulla?", ["Neuroblastoma", "Medulloblastoma", "Retinoblastoma", "Nephroblastoma"], 0, "Neuroblastoma is the most common extracranial solid tumor of infancy, originating from neural crest-derived chromaffin cells of the adrenal medulla or sympathetic chain."],
  ["Amplification of the MYCN (N-myc) proto-oncogene in neuroblastoma indicates:", ["Rapid tumor progression and poor clinical prognosis", "Favorable prognosis and spontaneous differentiation", "Benign transformation into lipoma", "Complete cure without chemotherapy"], 0, "High-level amplification of MYCN (seen as double-minute chromosomes or homogeneously staining regions) is a strong biomarker of adverse clinical outcome in neuroblastoma."],
  ["Medulloblastoma is the most common malignant brain tumor of childhood, arising in the:", ["Cerebellum / posterior cranial fossa", "Frontal cerebral cortex", "Pituitary gland", "Hippocampus"], 0, "Medulloblastoma is an embryonal neuroepithelial tumor located in the cerebellar vermis and roof of the fourth ventricle in pediatric patients."],
  ["Which hormone is commonly produced ectopically by small cell lung carcinoma (SCLC), leading to Cushing syndrome?", ["Adrenocorticotropic Hormone (ACTH)", "Thyroid-stimulating hormone", "Parathyroid hormone-related peptide", "Prolactin"], 0, "Small cell lung cancer frequently displays neuroendocrine differentiation and ectopically secretes ACTH, resulting in paraneoplastic Cushing syndrome."],
  ["Paraneoplastic hypercalcemia in squamous cell carcinoma of the lung is primarily mediated by tumor secretion of:", ["Parathyroid Hormone-Related Peptide (PTHrP)", "Calcitonin", "Vitamin D3", "Aldosterone"], 0, "Tumor-derived PTHrP binds to PTH receptors in bone and kidney, stimulating osteoclastic bone resorption and renal calcium reabsorption."],
  ["Syndrome of Inappropriate Antidiuretic Hormone (SIADH) causing severe hyponatremia is a well-known paraneoplastic complication of:", ["Small cell lung carcinoma", "Renal cell carcinoma", "Osteosarcoma", "Melanoma"], 0, "Small cell lung cancer can ectopically synthesize arginine vasopressin (ADH), driving excessive renal water retention and dilutional hyponatremia."],
  ["Lambert-Eaton Myasthenic Syndrome (LEMS) is an autoimmune paraneoplastic neurological disorder characterized by muscle weakness due to antibodies against:", ["Presynaptic voltage-gated calcium channels (P/Q-type)", "Postsynaptic acetylcholine receptors", "Myelin basic protein", "Dopamine receptors"], 0, "Antibodies directed against presynaptic voltage-gated calcium channels impair acetylcholine release at the neuromuscular junction in LEMS (often associated with SCLC)."],
  ["Myasthenia gravis is associated with which anterior mediastinal neoplasm in approximately 10-15% of patients?", ["Thymoma", "Thyroid follicular adenoma", "Teratoma", "Esophageal leiomyoma"], 0, "Neoplastic epithelial cells in thymomas express self-antigens that trigger autoantibodies against postsynaptic acetylcholine receptors, causing myasthenia gravis."],
  ["Pheochromocytoma is a tumor of the adrenal medulla that characteristically hypersecretes:", ["Catecholamines (epinephrine and norepinephrine)", "Cortisol and corticosterone", "Aldosterone and renin", "Dehydroepiandrosterone (DHEA)"], 0, "Pheochromocytoma originates from chromaffin cells of the adrenal medulla, causing paroxysmal hypertension, palpitations, headaches, and diaphoresis via catecholamine surge."],
  ["The diagnosis of pheochromocytoma is confirmed biochemically by detecting elevated urinary or plasma levels of:", ["Free metanephrines and normetanephrines", "Uric acid and creatinine", "Bence Jones proteins", "Bilirubin and urobilinogen"], 0, "Fractionated plasma or 24-hour urinary metanephrines and normetanephrines (metabolites of epinephrine and norepinephrine) offer high sensitivity and specificity for pheochromocytoma."],
  ["Multiple Endocrine Neoplasia type 2 (MEN2) is an autosomal dominant cancer syndrome caused by activating germline mutations in:", ["RET proto-oncogene encoding a receptor tyrosine kinase", "MEN1 tumor suppressor gene", "NF2 gene", "VHL gene"], 0, "Gain-of-function point mutations in the RET proto-oncogene drive medullary thyroid carcinoma, pheochromocytoma, and parathyroid hyperplasia in MEN2."],
  ["Which cancer of the thyroid arises from calcitonin-secreting parafollicular C-cells?", ["Medullary thyroid carcinoma", "Papillary thyroid carcinoma", "Follicular thyroid carcinoma", "Anaplastic thyroid carcinoma"], 0, "Medullary thyroid carcinoma originates from neuroendocrine C-cells, serving as a biological hallmark for elevated serum calcitonin levels."],
  ["Papillary thyroid carcinoma is the most common thyroid malignancy, histopathologically identified by:", ["'Orphan Annie eye' optically clear nuclei, intranuclear pseudoinclusions, and psammoma bodies", "Dense sheets of small round blue cells", "Uniform follicular architecture with colloid invasion", "Cartilage lacunae containing atypical chondrocytes"], 0, "Ground-glass 'Orphan Annie' nuclei, nuclear grooves, and concentric calcified psammoma bodies are pathognomonic features of papillary thyroid carcinoma."],
  ["Psammoma bodies are concentric, lamellated calcified microscopic structures classically seen in:", ["Papillary thyroid carcinoma, serous ovarian cystadenocarcinoma, and meningioma", "Multiple myeloma", "Basal cell carcinoma", "Osteosarcoma"], 0, "Psammoma bodies represent dystrophic calcification around necrotic tumor papillae, classically found in papillary thyroid carcinoma, ovarian serous tumors, and meningiomas."],
  ["Which tumor of bone characteristically exhibits a 'sunburst' periosteal reaction and Codman triangle on plain radiographs?", ["Osteosarcoma", "Chondrosarcoma", "Giant cell tumor of bone", "Osteoid osteoma"], 0, "Osteosarcoma is a malignant bone-producing tumor that lifts the periosteum (Codman triangle) and extends into soft tissues in a radiating 'sunburst' pattern."],
  ["Which monoclonal antibody drug conjugate delivers a potent microtubule inhibitor selectively to CD30-positive cells in Hodgkin lymphoma?", ["Brentuximab vedotin", "Rituximab", "Trastuzumab", "Cetuximab"], 0, "Brentuximab vedotin couples an anti-CD30 chimeric antibody with monomethyl auristatin E, selectively delivering a cytotoxic spindle poison to Reed-Sternberg cells."]
];

moreMcqsPart2.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

// Format AR questions
const arQuestions = arData.map((d, i) => ({
  question: `${arDirections}\n\nAssertion (A): ${d.a}\nReason (R): ${d.r}`,
  options: arOptions,
  correctAnswer: d.ans,
  explanation: d.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion–Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Format MCQ questions
const mcqQuestions = mcqData.map(m => ({
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

console.log(`Part 2 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part2.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 2: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
