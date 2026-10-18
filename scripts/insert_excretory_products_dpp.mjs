import fs from 'fs';
import path from 'path';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const excretory45 = [
  // Q1
  {
    question_id: 1,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Modes of Excretion (Ammonotelism, Ureotelism, Uricotelism)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following groups of animals is entirely uricotelic?",
    options: [
      "Bony fishes, aquatic amphibians, and aquatic insects",
      "Mammals, terrestrial amphibians, and cartilaginous fishes",
      "Reptiles, birds, land snails, and terrestrial insects",
      "Aquatic insects, mammals, and birds"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Reptiles, birds, land snails, and terrestrial insects excrete nitrogenous wastes as uric acid in the form of pellet or paste with a minimum loss of water, and are called uricotelic animals. Ammonotelic animals include many bony fishes, aquatic amphibians, and aquatic insects. Ureotelic animals include mammals, terrestrial amphibians, and marine/cartilaginous fishes."
  },

  // Q2
  {
    question_id: 2,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Modes of Excretion (Toxicity & Water Requirements)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which nitrogenous excretory product requires the maximum amount of water for its removal from the body?",
    options: [
      "Urea",
      "Uric acid",
      "Creatinine",
      "Ammonia"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Ammonia is the most toxic nitrogenous waste product and requires the largest volume of water for its dilution and safe elimination (approx. 300–500 mL water per gram of nitrogen). In contrast, urea requires approx. 50 mL/g, and uric acid requires only approx. 10 mL/g."
  },

  // Q3
  {
    question_id: 3,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Human Excretory System (Kidney Anatomy)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In human kidneys, the columns of Bertini are extensions of:",
    options: [
      "Medullary pyramids into the renal pelvis",
      "Renal cortex into the renal medulla between medullary pyramids",
      "Renal pelvis into the minor calyces",
      "Fibrous capsule into the renal sinus"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The cortex of the kidney extends between the medullary pyramids as renal columns called Renal Columns of Bertini (columns of Bertini)."
  },

  // Q4
  {
    question_id: 4,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Nephron Structure (Renal Corpuscle)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A Malpighian body (renal corpuscle) consists of:",
    options: [
      "Glomerulus and Bowman's capsule",
      "Glomerulus and Henle's loop",
      "Bowman's capsule and Proximal Convoluted Tubule",
      "Glomerulus and Proximal Convoluted Tubule"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The glomerulus along with Bowman's capsule is called the Malpighian body or renal corpuscle. It forms the site of ultrafiltration in the nephron."
  },

  // Q5
  {
    question_id: 5,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Cortical vs Juxtamedullary Nephrons",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following characteristics accurately differentiates juxtamedullary nephrons from cortical nephrons?",
    options: [
      "Juxtamedullary nephrons have short loops of Henle that extend only slightly into the medulla",
      "Juxtamedullary nephrons lack a well-developed vasa recta",
      "Juxtamedullary nephrons constitute approximately 85% of total nephrons",
      "Juxtamedullary nephrons have long loops of Henle dipping deep into the renal medulla"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "In juxtamedullary nephrons (approx. 15% of nephrons), the glomeruli lie near the corticomedullary junction, and the loops of Henle are very long and run deep into the medulla. They are accompanied by well-developed vasa recta and play a vital role in the concentration of urine."
  },

  // Q6
  {
    question_id: 6,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Ultrafiltration & Glomerular Membrane (Podocytes)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The specialized epithelial cells present in the visceral layer of Bowman's capsule that form filtration slits are called:",
    options: [
      "Podocytes",
      "Endothelial cells",
      "Macula densa",
      "Juxtaglomerular cells"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The epithelial cells of Bowman's capsule called podocytes are arranged in an intricate manner so as to leave some minute spaces called filtration slits or slit pores through which blood is filtered finely into the lumen of Bowman's capsule."
  },

  // Q7
  {
    question_id: 7,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Glomerular Filtration Membrane Structure",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following layers does NOT form a constituent of the glomerular filtration membrane?",
    options: [
      "Endothelium of glomerular blood vessels",
      "Visceral epithelial cells (podocytes) of Bowman's capsule",
      "Simple squamous epithelium of the parietal layer of Bowman's capsule",
      "Basement membrane between the endothelium and podocytes"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The glomerular filtration barrier consists of three layers: (1) the fenestrated endothelium of glomerular blood vessels, (2) the non-cellular basement membrane, and (3) the visceral epithelium (podocytes) of Bowman's capsule. The parietal layer of Bowman's capsule encloses the capsular space and does not participate in ultrafiltration."
  },

  // Q8
  {
    question_id: 8,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Net Filtration Pressure & Filtration Dynamics",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If the Glomerular Hydrostatic Pressure (GHP) is 60 mmHg, Bowman's Capsule Hydrostatic Pressure (BCHP) is 18 mmHg, and Blood Colloid Osmotic Pressure (BCOP) is 32 mmHg, what is the Net Filtration Pressure (NFP)?",
    options: [
      "10 mmHg",
      "20 mmHg",
      "44 mmHg",
      "110 mmHg"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Net Filtration Pressure (NFP) = GHP - (BCOP + BCHP) = 60 - (32 + 18) = 60 - 50 = 10 mmHg."
  },

  // Q9
  {
    question_id: 9,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Tubular Reabsorption (Proximal Convoluted Tubule)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Nearly 70–80% of electrolytes and water are reabsorbed by which segment of the nephron?",
    options: [
      "Loop of Henle",
      "Proximal Convoluted Tubule (PCT)",
      "Distal Convoluted Tubule (DCT)",
      "Collecting duct"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Proximal Convoluted Tubule (PCT) is lined by simple cuboidal brush border epithelium which increases the surface area for reabsorption. Nearly 70–80% of electrolytes and water, as well as 100% of essential nutrients like glucose and amino acids, are reabsorbed here."
  },

  // Q10
  {
    question_id: 10,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Nephron Histology & Epithelial Specialization",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The brush-border epithelium lined with extensive microvilli is a characteristic feature of:",
    options: [
      "Ascending limb of loop of Henle",
      "Distal convoluted tubule",
      "Proximal convoluted tubule",
      "Descending limb of loop of Henle"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The proximal convoluted tubule (PCT) is lined with simple cuboidal brush-border epithelium bearing numerous microvilli that vastly expand the absorptive apical surface area."
  },

  // Q11
  {
    question_id: 11,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Loop of Henle (Permeability & Countercurrent Multiplier)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which segment of the loop of Henle is virtually impermeable to water but allows active or passive transport of electrolytes?",
    options: [
      "Thin descending limb",
      "Thick ascending limb",
      "Hairpin turn",
      "Both descending and ascending limbs"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The ascending limb of Henle's loop is virtually impermeable to water. Its thin segment allows passive diffusion of NaCl, whereas its thick segment actively transports electrolytes (Na+, K+, Cl-) into the medullary interstitium, diluting the tubular fluid."
  },

  // Q12
  {
    question_id: 12,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Distal Tubule Function & Hormonal Regulation",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Conditional reabsorption of Na+ and water takes place in which region of the nephron under hormonal control?",
    options: [
      "Proximal Convoluted Tubule",
      "Descending limb of loop of Henle",
      "Distal Convoluted Tubule",
      "Thin segment of ascending limb"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Conditional reabsorption of Na+ and water takes place in the Distal Convoluted Tubule (DCT) and collecting duct under the influence of aldosterone (which increases Na+ and water reabsorption) and ADH (which promotes water reabsorption through aquaporins)."
  },

  // Q13
  {
    question_id: 13,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Tubular Secretion & Acid-Base Homeostasis",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "During tubular secretion, which of the following ions or molecules are actively secreted into the filtrate to maintain ionic and acid-base balance?",
    options: [
      "K+, H+, and NH3",
      "Na+, Cl-, and glucose",
      "Urea, amino acids, and HCO3-",
      "Ca2+, Mg2+, and water"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Tubular secretion involves active and passive transport of substances like H+, K+, and ammonia (NH3 / NH4+) from the peritubular capillary blood into the tubular lumen to maintain ionic balance, electrolyte equilibrium, and physiological pH of body fluids."
  },

  // Q14
  {
    question_id: 14,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Countercurrent Mechanism (Multiplier & Exchanger)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The countercurrent mechanism operates between which of the following structures to maintain a medullary hyperosmolarity gradient?",
    options: [
      "Afferent arteriole and efferent arteriole",
      "Descending and ascending limbs of Henle's loop, and two limbs of vasa recta",
      "Proximal convoluted tubule and distal convoluted tubule",
      "Collecting duct and renal pelvis"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The countercurrent mechanism operates between the two limbs of the loop of Henle (countercurrent multiplier) and the two limbs of the vasa recta (countercurrent exchanger). The opposing flows of tubular fluid and blood establish and maintain an increasing osmotic gradient in the medullary interstitium."
  },

  // Q15
  {
    question_id: 15,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Medullary Osmotic Gradient",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The osmolarity of the medullary interstitial fluid increases progressively from the outer cortex to the inner medulla, reaching up to:",
    options: [
      "300 mOsmol L-1",
      "600 mOsmol L-1",
      "1200 mOsmol L-1",
      "2000 mOsmol L-1"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "In human kidneys, the interstitial osmolarity increases progressively from 300 mOsmol L-1 in the renal cortex to about 1200 mOsmol L-1 (or up to 1200–1400 mOsmol L-1) in the inner renal medulla."
  },

  // Q16
  {
    question_id: 16,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Medullary Gradient Determinants (NaCl & Urea Recycling)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The medullary interstitial gradient is primarily maintained by which two chemical substances?",
    options: [
      "Glucose and urea",
      "NaCl and urea",
      "NaCl and uric acid",
      "KCl and creatinine"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The medullary interstitial hyperosmolar gradient is established and preserved principally by NaCl (transported by the ascending limb of Henle's loop) and urea (reabsorbed from the medullary collecting duct and recycled into Henle's loop)."
  },

  // Q17
  {
    question_id: 17,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Juxtaglomerular Apparatus (JGA) Architecture",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Juxtaglomerular apparatus (JGA) is a specialized cellular structure formed by modifications in:",
    options: [
      "PCT and afferent arteriole",
      "Loop of Henle and efferent arteriole",
      "DCT and afferent arteriole at the site of their contact",
      "Collecting duct and peritubular capillary network"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "JGA is a specialized microscopic structure formed by cellular modifications in the Distal Convoluted Tubule (macula densa) and the afferent arteriole (juxtaglomerular / granular cells) at the location where they come into contact."
  },

  // Q18
  {
    question_id: 18,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Renin-Angiotensin-Aldosterone System (RAAS Trigger)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A fall in glomerular filtration rate (GFR) or glomerular blood flow stimulates the juxtaglomerular cells to release:",
    options: [
      "Aldosterone",
      "Angiotensinogen",
      "Renin",
      "Atrial Natriuretic Factor (ANF)"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "A drop in glomerular blood flow, glomerular blood pressure, or GFR activates the juxtaglomerular (JG) cells of the afferent arteriole to release the enzymatic hormone renin into the bloodstream."
  },

  // Q19
  {
    question_id: 19,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Actions and Hemodynamics of Angiotensin II",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following statements regarding the actions of Angiotensin II is INCORRECT?",
    options: [
      "It is a powerful vasoconstrictor that elevates glomerular blood pressure",
      "It activates the adrenal cortex to release aldosterone",
      "It promotes vasodilatation to directly lower systemic blood pressure",
      "It stimulates proximal tubules to reabsorb more Na+ and water"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Angiotensin II is a potent vasoconstrictor (not vasodilator); it increases systemic blood pressure and elevates glomerular capillary pressure. It also stimulates aldosterone secretion from the adrenal cortex and directly enhances Na+ and water reabsorption in the PCT."
  },

  // Q20
  {
    question_id: 20,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Osmoregulation & ADH / Vasopressin",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Excessive loss of body fluid activates osmoreceptors, which stimulate the release of which hormone from the neurohypophysis?",
    options: [
      "Oxytocin",
      "Antidiuretic Hormone (ADH) / Vasopressin",
      "Atrial Natriuretic Peptide",
      "Renin"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Excessive loss of fluid from the body stimulates hypothalamic osmoreceptors, inducing the neurohypophysis (posterior pituitary) to release Antidiuretic Hormone (ADH) or Vasopressin, which promotes water reabsorption from distal tubules and collecting ducts."
  },

  // Q21
  {
    question_id: 21,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Atrial Natriuretic Factor (ANF) & Counter-Regulation",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "An increase in blood flow to the atria of the heart causes the secretion of:",
    options: [
      "Renin, which increases systemic blood pressure",
      "Aldosterone, which retains sodium and water",
      "Atrial Natriuretic Factor (ANF), which causes vasodilation and lowers blood pressure",
      "Vasopressin, which prevents diuresis"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "An increase in blood volume or venous return stretches atrial myocytes, triggering the secretion of Atrial Natriuretic Factor (ANF). ANF induces vasodilation and promotes natriuresis and diuresis, acting as a natural antagonist to the RAAS and lowering blood pressure."
  },

  // Q22
  {
    question_id: 22,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Micturition Reflex Physiology",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following initiates the stretch reflex responsible for micturition?",
    options: [
      "Relaxation of the detrusor muscle",
      "Stretching of the urinary bladder wall as it fills with urine",
      "Voluntary contraction of the internal urethral sphincter",
      "Active transport of urea into the collecting duct"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "As the urinary bladder fills with urine, its muscular wall expands, stretching the stretch receptors located in the bladder wall. This initiates sensory signals to the CNS, triggering the micturition reflex."
  },

  // Q23
  {
    question_id: 23,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Clinical Pathology of Urine (Diabetes Mellitus)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The presence of glucose (glycosuria) and ketone bodies (ketonuria) in urine is an indicative marker of:",
    options: [
      "Diabetes insipidus",
      "Bright's disease (Glomerulonephritis)",
      "Diabetes mellitus",
      "Renal calculi"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Glycosuria (glucose in urine) and ketonuria (ketone bodies such as acetoacetate and beta-hydroxybutyrate in urine) are classic hallmark clinical indicators of Diabetes mellitus, caused by insulin deficiency or resistance."
  },

  // Q24
  {
    question_id: 24,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Hemodialysis Principles & Dialysis Fluid",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "During hemodialysis, the dialyzing unit contains fluid that has the exact composition of normal plasma, EXCEPT that it lacks:",
    options: [
      "Glucose",
      "Essential amino acids",
      "Nitrogenous wastes like urea",
      "Electrolytes (Na+, K+, Cl-)"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The dialyzing fluid in an artificial kidney has the same composition and osmotic concentration as normal blood plasma, with the crucial exception that it contains zero nitrogenous wastes (urea, uric acid, creatinine). This steep concentration gradient allows toxic metabolic wastes from the patient's blood to diffuse outward into the dialysate."
  },

  // Q25
  {
    question_id: 25,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Accessory Excretory Organs (Sebaceous Glands & Skin)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following human accessory excretory organs eliminates sterols, hydrocarbons, and waxes via sebum?",
    options: [
      "Sweat glands",
      "Sebaceous glands",
      "Liver",
      "Lungs"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Sebaceous glands eliminate certain excretory substances including sterols, hydrocarbons, fatty acids, and waxes through their oily secretion called sebum, which also provides a protective lubricating coating to the skin."
  },

  // ==========================================
  // PART II: Advanced Conceptual & Analytical
  // ==========================================

  // Q26
  {
    question_id: 26,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "NKCC2 Transporter & Loop Diuretic Mechanism",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A researcher applies a chemical inhibitor that selectively blocks the Na+/K+/2Cl- cotransporter (NKCC2) in the thick ascending limb of the loop of Henle. Which of the following cascades of physiological changes will occur?",
    options: [
      "Medullary interstitial osmolarity drops -> water reabsorption from descending limb decreases -> large volume of dilute urine is excreted",
      "Medullary interstitial osmolarity rises -> water reabsorption from collecting duct surges -> concentrated urine is excreted",
      "Vasa recta blood osmolarity increases sharply -> urea excretion drops to near zero",
      "Net filtration pressure in the glomerulus drops to zero due to immediate tubuloglomerular feedback"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Inhibiting NKCC2 (e.g., by loop diuretics like furosemide) prevents active solute transport out of the thick ascending limb into the medullary interstitium. Consequently, medullary hyperosmolarity collapses, reducing the osmotic driving force for water reabsorption from the descending limb and collecting ducts. This results in profuse excretion of a large volume of dilute urine (diuresis)."
  },

  // Q27
  {
    question_id: 27,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Renal Hemodynamics & Arteriolar Resistance (GFR vs RBF)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If the efferent arteriole undergoes moderate constriction while the afferent arteriolar resistance remains unchanged, what will happen to Glomerular Filtration Rate (GFR) and Renal Blood Flow (RBF)?",
    options: [
      "Both GFR and RBF increase",
      "GFR increases, but RBF decreases",
      "GFR decreases, but RBF increases",
      "Both GFR and RBF decrease"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Moderate constriction of the efferent arteriole increases outflow resistance from the glomerulus, raising glomerular capillary hydrostatic pressure (P_G) and thereby elevating GFR. However, because total renal vascular resistance increases, Renal Blood Flow (RBF) decreases."
  },

  // Q28
  {
    question_id: 28,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Paracellular Transport & Claudin Tight Junctions",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In a mutant mouse line, the gene encoding claudin-16 (paracellin-1) in the thick ascending limb is knocked out. Paracellular reabsorption of which of the following divalent cations will be severely impaired?",
    options: [
      "Fe2+ and Cu2+",
      "Mg2+ and Ca2+",
      "Zn2+ and Mn2+",
      "Ba2+ and Sr2+"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Claudin-16 (paracellin-1) is a tight junction protein localized in the thick ascending limb of Henle's loop. It selectively facilitates the paracellular reabsorption of divalent cations, specifically Mg2+ and Ca2+, driven by the lumen-positive transepithelial potential generated by ROMK K+ recycling."
  },

  // Q29
  {
    question_id: 29,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Segmental Nephron Tubular Fluid Osmolarity",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A mammalian micropuncture experiment measures the osmolarity of tubular fluid along different segments of a juxtamedullary nephron under peak physiological ADH levels. Which of the following sequences correctly reflects the fluid osmolarity (in mOsmol L-1)?",
    options: [
      "End of PCT (300) -> Bend of Henle's loop (1200) -> Early DCT (100) -> End of Collecting Duct (1200)",
      "End of PCT (1200) -> Bend of Henle's loop (300) -> Early DCT (600) -> End of Collecting Duct (1200)",
      "End of PCT (300) -> Bend of Henle's loop (300) -> Early DCT (300) -> End of Collecting Duct (300)",
      "End of PCT (100) -> Bend of Henle's loop (1200) -> Early DCT (1200) -> End of Collecting Duct (100)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Tubular fluid remains isosmotic (approx. 300 mOsmol L-1) at the end of the PCT because solutes and water are reabsorbed isotonically. It concentrates progressively as water exits the descending limb, reaching a peak of approx. 1200 mOsmol L-1 at the hairpin bend. Active solute extrusion in the thick ascending limb dilutes the fluid to hypo-osmotic levels (approx. 100 mOsmol L-1) in the early DCT. Under high ADH, water is reabsorbed along the collecting duct, equilibrating with the medullary interstitium to reach 1200 mOsmol L-1."
  },

  // Q30
  {
    question_id: 30,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Renal Clearance & Inulin Clearance Principles",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If a non-metabolizable, filterable substance has a renal clearance significantly greater than the renal clearance of inulin (C_x > C_inulin), what does this prove about the renal handling of substance x?",
    options: [
      "It is filtered and undergoes net tubular reabsorption",
      "It is filtered and undergoes net tubular secretion",
      "It is completely reabsorbed by active transport in the PCT",
      "It is impermeable to the glomerular filtration barrier"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Inulin is freely filtered and neither reabsorbed nor secreted, making C_inulin equal to GFR. If a substance has a renal clearance greater than that of inulin (C_x > C_inulin), the extra amount excreted per unit time must have been introduced into the tubular lumen via net tubular secretion (e.g., as seen with PAH or creatinine)."
  },

  // Q31
  {
    question_id: 31,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Urea Recycling & Inner Medullary Hyperosmolarity",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The primary driving force that facilitates the passive reabsorption of urea from the medullary collecting duct into the deep medullary interstitium is:",
    options: [
      "Primary active transport via a Urea-ATPase pump",
      "High intraluminal concentration of urea established by prior water reabsorption driven by ADH",
      "Symport with chloride ions via secondary active transport",
      "Counter-transport with hydrogen ions driven by the Na+/K+ pump"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In the cortical and outer medullary collecting ducts, ADH stimulates water reabsorption while urea permeability remains low, sharply concentrating urea in the tubular lumen. When this urea-rich fluid reaches the inner medullary collecting duct (where ADH activates UT-A1/UT-A3 urea transporters), urea diffuses passively down its steep concentration gradient into the inner medullary interstitium."
  },

  // Q32
  {
    question_id: 32,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Tubuloglomerular Feedback (TGF) Mechanism",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following physiological events constitutes the Tubuloglomerular Feedback (TGF) response initiated by the macula densa when GFR rises excessively?",
    options: [
      "Decreased delivery of NaCl to macula densa -> local adenosine release -> efferent arteriole dilation",
      "Increased delivery of NaCl to macula densa -> adenosine/ATP release -> afferent arteriole constriction",
      "Increased delivery of NaCl to macula densa -> systemic nitric oxide release -> afferent arteriole dilation",
      "Decreased hydrostatic pressure in glomerulus -> direct release of ANF by macula densa cells"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "When GFR rises, increased tubular fluid delivery carries more NaCl to the macula densa in the early distal tubule. Increased NaCl uptake via NKCC2 triggers ATP/adenosine release from macula densa cells into the juxtaglomerular interstitium. Adenosine acts on A1 receptors on afferent arteriolar vascular smooth muscle, causing afferent vasoconstriction, which lowers glomerular capillary pressure and restores GFR to normal."
  },

  // Q33
  {
    question_id: 33,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Tubular Transport Maximum (Tm) & Renal Threshold",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A patient suffering from severe untreated diabetes mellitus shows glucose excretion in urine. This occurs primarily because:",
    options: [
      "Glucose molecules damage the slit diaphragms of podocytes",
      "The tubular transport maximum (T_m) of sodium-glucose linked cotransporters (SGLT) in the PCT is exceeded",
      "The loop of Henle becomes completely impermeable to glucose",
      "Decreased insulin levels prevent glucose from entering the glomerular filtrate"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Glucose is freely filtered at the glomerulus and completely reabsorbed in the PCT via SGLT2 and SGLT1 cotransporters up to a maximal reabsorptive capacity known as the tubular transport maximum (T_m, approx. 375 mg/min). When plasma glucose exceeds the renal threshold (approx. 180–200 mg/dL), the filtered load surpasses T_m, saturating all transporters and causing unreabsorbed glucose to spill into the urine (glucosuria)."
  },

  // Q34
  {
    question_id: 34,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Vasa Recta Hemodynamics & Medullary Washout",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If the hydrostatic pressure inside the capillary bed of the vasa recta were artificially elevated, what would be the most immediate consequence on the countercurrent multiplier system?",
    options: [
      "Increased extraction of solutes, causing dissipation ('washout') of the medullary osmotic gradient",
      "Enhanced generation of hyperosmolarity up to 2400 mOsmol L-1 in the inner medulla",
      "Complete arrest of primary active transport in the proximal convoluted tubule",
      "Immediate reversal of fluid flow through Henle's loop"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Slow blood flow and low hydrostatic pressure in the vasa recta are essential for effective countercurrent exchange, allowing preservation of the hyperosmotic medullary gradient. If blood flow or hydrostatic pressure increases significantly, solutes (NaCl and urea) are rapidly washed out of the medullary interstitium into the systemic circulation, dissipating the corticomedullary gradient and impairing urine concentrating ability."
  },

  // Q35
  {
    question_id: 35,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Renal Ammoniagenesis & Bicarbonate Generation",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In response to severe metabolic acidosis, which biochemical process in the proximal tubular epithelial cells contributes to the regeneration and addition of 'new' bicarbonate ions to the peritubular capillary blood?",
    options: [
      "Conversion of lactic acid into pyruvic acid",
      "Catabolism and deamination of glutamine into ammonium (NH4+) and alpha-ketoglutarate",
      "Direct oxidation of urea to carbamoyl phosphate",
      "Decarboxylation of acetoacetate to acetone"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "In proximal tubular cells, metabolic acidosis markedly upregulates glutaminase. Deamination and catabolism of glutamine generates two ammonium ions (NH4+) and alpha-ketoglutarate. The NH4+ is secreted into the lumen via Na+/NH4+ antiporters, while the metabolism of alpha-ketoglutarate yields two 'new' HCO3- ions that are transported across the basolateral membrane into the peritubular blood, restoring systemic acid-base balance."
  },

  // Q36
  {
    question_id: 36,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Starling Forces in Glomerular Ultrafiltration",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Consider the following factors:\nI. Glomerular capillary filtration coefficient (K_f)\nII. Glomerular capillary hydrostatic pressure (P_G)\nIII. Bowman's space hydrostatic pressure (P_B)\nIV. Glomerular capillary colloid osmotic pressure (pi_G)\nA decrease in GFR would be caused by:",
    options: [
      "An increase in P_G or a decrease in pi_G",
      "An increase in K_f or an increase in P_G",
      "An increase in P_B or an increase in pi_G",
      "A decrease in P_B or an increase in K_f"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "GFR = K_f * [(P_G - P_B) - pi_G]. The forces that favour filtration are P_G and Bowman's oncotic pressure (pi_B approx 0). The forces opposing filtration are Bowman's hydrostatic pressure (P_B) and glomerular colloid osmotic pressure (pi_G). Therefore, an increase in P_B (e.g., ureteral obstruction) or an increase in pi_G (e.g., dehydration/hemoconcentration) reduces net filtration pressure and decreases GFR."
  },

  // Q37
  {
    question_id: 37,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Intercalated Cells (Type A vs Type B) & Acid Secretion",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Type A intercalated cells of the late distal tubule and cortical collecting duct play a vital role during systemic acidosis by:",
    options: [
      "Secreting HCO3- and reabsorbing H+ via apical Cl-/HCO3- antiporters",
      "Secreting H+ via apical H+-ATPase and reabsorbing HCO3- into blood via basolateral Cl-/HCO3- exchangers",
      "Transporting urea actively into the lumen via Na+-coupled cotransport",
      "Inhibiting aldosterone receptors to stop K+ secretion"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Type A intercalated cells mediate acid elimination during systemic acidosis. They possess apical primary active H+-ATPase pumps (and H+/K+-ATPase pumps) that actively secrete H+ into the lumen, while basolateral anion exchangers (AE1, Cl-/HCO3- exchanger) return newly formed bicarbonate into the peritubular capillary blood."
  },

  // Q38
  {
    question_id: 38,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Angiotensin II Differential Arteriolar Hemodynamics",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Under conditions of severe hypovolemia, high concentrations of circulating Angiotensin II preferentially constrict:",
    options: [
      "Afferent arterioles to reduce hydrostatic pressure below oncotic pressure",
      "Efferent arterioles to help sustain glomerular capillary hydrostatic pressure and maintain GFR",
      "Peritubular capillaries to completely arrest water reabsorption",
      "Renal veins to create backward venous pooling"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Efferent arterioles exhibit greater sensitivity to Angiotensin II vasoconstriction than afferent arterioles (which are protected by local vasodilators like prostaglandins and NO). By selectively constricting the efferent arteriole, Angiotensin II elevates glomerular capillary hydrostatic pressure, preventing catastrophic drops in GFR despite compromised renal perfusion pressure."
  },

  // Q39
  {
    question_id: 39,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Pharmacological Regulation of ADH & Diuresis",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Why does consumption of a hypertonic ethanol solution (alcohol) lead to extensive polyuria and dehydration?",
    options: [
      "Ethanol acts as an osmolyte that is entirely non-reabsorbable by nephron segments",
      "Ethanol directly inhibits hypothalamic supraoptic and paraventricular nuclei from releasing vasopressin",
      "Ethanol blocks aldosterone binding to mineralocorticoid receptors in the principal cells",
      "Ethanol downregulates the expression of Na+/K+ ATPase pumps across all nephron segments"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Ethanol directly suppresses the firing of neurosecretory cells in the hypothalamic supraoptic and paraventricular nuclei, inhibiting the release of Vasopressin (ADH) from the posterior pituitary. In the absence of ADH, water permeability of the late distal tubules and collecting ducts plummets, preventing water reabsorption and causing profuse diuresis (polyuria) and subsequent dehydration."
  },

  // Q40
  {
    question_id: 40,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Charge Selectivity of Glomerular Filtration Barrier",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "The glomerular filtration barrier carries a net negative charge primarily imparted by which component of the basement membrane and cell coats?",
    options: [
      "Type IV collagen and chondroitin sulfate",
      "Heparan sulfate proteoglycans and podocalyxin",
      "Keratin and hyaluronic acid",
      "Fibronectin and integrins"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The charge selectivity of the glomerular barrier is conferred by polyanionic molecules carrying fixed negative charges: heparan sulfate proteoglycans (agrin, perlecan) in the lamina rara of the glomerular basement membrane, and the sialoglycoprotein podocalyxin covering the apical surface and pedicels of podocytes. These repel negatively charged plasma proteins (like albumin)."
  },

  // Q41
  {
    question_id: 41,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Principal Cells & Aldosterone Signaling (ENaC and ROMK)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "In the principal cells of the late distal tubule and collecting duct, the actions of aldosterone promote Na+ reabsorption and K+ excretion by:",
    options: [
      "Downregulating basolateral Na+/K+ pumps and opening luminal Cl- channels",
      "Increasing insertion and opening probability of apical epithelial sodium channels (ENaC) and renal outer medullary potassium (ROMK) channels",
      "Activating the apical H+/K+ antiporter directly",
      "Phosphorylating aquaporin-2 tetramers to facilitate passive diffusion of K+"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Aldosterone diffuses into principal cells, binds intracellular mineralocorticoid receptors, and induces the transcription/insertion of apical Epithelial Sodium Channels (ENaC) and apical ROMK potassium channels, while concurrently stimulating basolateral Na+/K+-ATPase pumps. This increases Na+ reabsorption and accelerates K+ excretion into the tubular lumen."
  },

  // Q42
  {
    question_id: 42,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Diabetes Insipidus (Central vs Nephrogenic Diagnosis)",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "A patient with neurogenic (central) diabetes insipidus and a patient with nephrogenic diabetes insipidus both exhibit severe polyuria. How can they be diagnostically distinguished using exogenous desmopressin (synthetic ADH analog)?",
    options: [
      "Central DI patients respond with increased urine osmolarity; Nephrogenic DI patients show little to no change",
      "Nephrogenic DI patients respond with increased urine osmolarity; Central DI patients show little to no change",
      "Both will show immediate cessation of urine formation",
      "Central DI patients will show elevated urinary sodium excretion while Nephrogenic DI patients show none"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Central DI results from a failure of the neurohypophysis to produce or secrete ADH; administering exogenous desmopressin replaces the missing hormone, causing a dramatic increase in urine osmolarity (>50% increase) and reduction in urine volume. In contrast, Nephrogenic DI stems from renal end-organ resistance (mutations in V2 receptors or AQP2), so kidneys cannot respond to desmopressin, resulting in little or no increase in urine osmolarity."
  },

  // Q43
  {
    question_id: 43,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Thin Descending Limb Transport Properties",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "Which of the following correctly describes the thermodynamic and passive-transport state of the thin descending limb of the loop of Henle?",
    options: [
      "High urea permeability, high NaCl active transport, impermeable to water",
      "High water permeability (via AQP1), low solute (NaCl, urea) permeability",
      "Impermeable to water, high active extrusion of Na+ ions via Na+/K+ ATPase",
      "Freely permeable to both water and NaCl equally by non-selective pores"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The thin descending limb of Henle's loop possesses constitutively active Aquaporin-1 (AQP1) channels, making it highly permeable to water. It has very low passive permeability to NaCl and urea and completely lacks active transport systems. As fluid descends into the hypertonic medulla, water exits into the interstitium by osmosis, concentrating the luminal contents."
  },

  // Q44
  {
    question_id: 44,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Vasa Recta Countercurrent Exchanger Dynamics",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "What is the functional consequence of the sluggish/slow blood velocity through the hairpin loops of the vasa recta?",
    options: [
      "It prevents the blood from becoming oxygenated",
      "It prevents rapid solute removal ('washout'), allowing preservation of the hyperosmotic medullary gradient",
      "It provides sufficient time for the complete destruction of aged red blood cells",
      "It creates extreme hydrostatic pressure that forces medullary interstitial fluids back into the descending limb"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The vasa recta act as countercurrent exchangers. Blood flow through the medullary vasa recta accounts for only 1–2% of total renal blood flow. This sluggish velocity is vital because it permits passive osmotic equilibration across capillary walls without rapid convective removal of interstitial NaCl and urea, thereby preventing solute washout and preserving the medullary gradient."
  },

  // Q45
  {
    question_id: 45,
    subject: "Zoology",
    class: "Class 11",
    chapter: "Excretory Products and their Elimination",
    topic: "Excretory Products and their Elimination",
    subTopic: "Mineralocorticoid Antagonists & Electrolyte Homeostasis",
    exam: "NEET",
    targetExams: ["NEET", "IISER"],
    difficulty: "Difficult",
    questionType: "MCQ (Multiple Choice Question)",
    type: "MCQ",
    question: "If a drug selectively blocks the mineralocorticoid receptor (e.g., spironolactone), what changes would you anticipate in the patient's serum electrolytes and arterial pH?",
    options: [
      "Hypernatremia, hypokalemia, and metabolic alkalosis",
      "Hyponatremia, hyperkalemia, and mild metabolic acidosis",
      "Hypernatremia, hyperkalemia, and respiratory acidosis",
      "Hyponatremia, hypocalcemia, and respiratory alkalosis"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Mineralocorticoid receptor antagonists (such as spironolactone) block aldosterone action in principal cells and intercalated cells. This reduces Na+ reabsorption (tending toward hyponatremia/mild natriuresis), decreases K+ excretion (causing hyperkalemia), and diminishes H+ secretion (causing mild metabolic acidosis, characteristic of type 4 renal tubular acidosis)."
  }
];

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment or .env.local");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qbCol = db.collection('questionBank');
  const tpCol = db.collection('testPapers');

  console.log("Connected to MongoDB successfully.");

  // Find highest commercialId for NEET-ZOO
  const lastZooDoc = await qbCol.findOne(
    { commercialId: /^NEET-ZOO-/ },
    { sort: { commercialId: -1 } }
  );

  let nextIdNum = 17388;
  if (lastZooDoc && lastZooDoc.commercialId) {
    const match = lastZooDoc.commercialId.match(/^NEET-ZOO-(\d+)$/);
    if (match) {
      nextIdNum = parseInt(match[1], 10) + 1;
    }
  }
  console.log(`Starting commercialId: NEET-ZOO-${nextIdNum}`);

  // Prepare documents for insertion
  const dbDocs = excretory45.map((q, idx) => {
    const comId = `NEET-ZOO-${nextIdNum + idx}`;
    return {
      _id: new ObjectId(),
      subject: q.subject,
      class: q.class,
      chapter: q.chapter,
      topic: q.topic,
      subTopic: q.subTopic,
      exam: q.exam,
      targetExams: q.targetExams,
      difficulty: q.difficulty, // "Difficult"
      questionType: q.questionType,
      type: q.type,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctOption: q.correctOption,
      explanation: q.explanation,
      tags: ["Zoology", "Excretory Products and their Elimination", "NEET", "Difficult"],
      source: "Excretory Products and Their Elimination Question Bank (NEET / IISER)",
      status: "Active",
      idealTimeSeconds: 60,
      cognitiveLevel: "Application",
      commercialReady: true,
      commercialId: comId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });

  // Save JSON backup
  const jsonPath = path.join(process.cwd(), 'scripts', 'excretory_products_45_questions.json');
  fs.writeFileSync(jsonPath, JSON.stringify(dbDocs, null, 2), 'utf8');
  console.log(`✓ Saved complete backup JSON to ${jsonPath}`);

  // Insert into questionBank
  const initialQbCount = await qbCol.countDocuments();
  console.log(`Current questionBank count: ${initialQbCount}`);

  console.log(`Inserting ${dbDocs.length} questions into questionBank under chapter 'Excretory Products and their Elimination' and difficulty 'Difficult'...`);
  const insertResult = await qbCol.insertMany(dbDocs);
  console.log(`✓ Successfully inserted ${insertResult.insertedCount} questions into questionBank!`);

  const finalQbCount = await qbCol.countDocuments();
  console.log(`New questionBank count: ${finalQbCount}`);

  const excretoryCount = await qbCol.countDocuments({ chapter: "Excretory Products and their Elimination" });
  console.log(`Total questions in questionBank with chapter 'Excretory Products and their Elimination': ${excretoryCount}`);

  // Extract Question ObjectIds
  const questionObjectIds = dbDocs.map(d => d._id);
  console.log(`Mapped ${questionObjectIds.length} question ObjectIds.`);

  // Define the NEET chapterwise test for Zoology Class 11
  const testId = "neet-CHAPTER-Zoology-Excretory-Products-and-their-Elimination-11";
  const testTitle = "Excretory Products and their Elimination";
  const testPaperDoc = {
    testId: testId,
    id: testId,
    title: testTitle,
    exam: "NEET",
    category: "neet",
    subject: "Zoology",
    chapter: "Excretory Products and their Elimination",
    classGrade: "11",
    duration: 60,
    totalMarks: 180,
    standardQuestionsCount: 45,
    questionsCount: 45,
    totalQuestions: 45,
    difficulty: "Difficult",
    type: "CHAPTER",
    testType: "chapter",
    questions: questionObjectIds,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Upsert into testPapers collection
  console.log(`Upserting testPaper '${testId}' in testPapers collection...`);
  const tpResult = await tpCol.updateOne(
    { testId: testId },
    { $set: testPaperDoc },
    { upsert: true }
  );
  console.log(`✓ testPapers upsert result: matched=${tpResult.matchedCount}, modified=${tpResult.modifiedCount}, upserted=${tpResult.upsertedId || 'Existing'}`);

  // Also upsert aliases without '-11' and standard variants
  const aliasIds = [
    "neet-CHAPTER-Zoology-Excretory-Products-and-their-Elimination",
    "neet-CHAPTER-Excretory-Products-and-their-Elimination-11",
    "neet-CHAPTER-Zoology-Excretory-Products-and-Their-Elimination-11",
    "neet-CHAPTER-Excretory-Products-and-Their-Elimination-11"
  ];
  for (const aliasId of aliasIds) {
    await tpCol.updateOne(
      { testId: aliasId },
      {
        $set: {
          ...testPaperDoc,
          testId: aliasId,
          id: aliasId,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );
    console.log(`✓ Created/updated alias testPaper '${aliasId}'`);
  }

  // Update src/data/tests/custom_tests.json
  const customTestsPath = path.join(process.cwd(), 'src', 'data', 'tests', 'custom_tests.json');
  let customTests = {};
  try {
    if (fs.existsSync(customTestsPath)) {
      customTests = JSON.parse(fs.readFileSync(customTestsPath, 'utf8'));
    }
  } catch (e) {
    customTests = {};
  }

  customTests[testId] = {
    id: testId,
    testId: testId,
    title: "Excretory Products and their Elimination",
    type: "CHAPTER",
    subject: "Zoology",
    chapter: "Excretory Products and their Elimination",
    description: "Chapter-wise test on Excretory Products and their Elimination (Zoology). Comprehensive test with 45 questions.",
    category: "neet",
    duration: 60,
    totalMarks: 180,
    questionsCount: 45,
    difficulty: "Difficult",
    classGrade: "11"
  };

  fs.writeFileSync(customTestsPath, JSON.stringify(customTests, null, 2), 'utf8');
  console.log(`✓ Updated custom_tests.json with test '${testId}'`);

  // Update scripts/neet_chapter_test_targets.json if it exists
  const targetsPath = path.join(process.cwd(), 'scripts', 'neet_chapter_test_targets.json');
  if (fs.existsSync(targetsPath)) {
    try {
      const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf8'));
      targets[testId] = {
        testId: testId,
        title: "Excretory Products and their Elimination",
        subject: "Zoology",
        targetChapter: "Excretory Products and their Elimination",
        exam: "NEET",
        originalQuestionCount: 45
      };
      fs.writeFileSync(targetsPath, JSON.stringify(targets, null, 2), 'utf8');
      console.log(`✓ Updated neet_chapter_test_targets.json with '${testId}'`);
    } catch (e) {
      console.error("Warning: Failed to update neet_chapter_test_targets.json", e.message);
    }
  }

  await client.close();
  console.log("\n=== SUCCESS: ALL 45 QUESTIONS INSERTED AND MAPPED TO NEET CHAPTERWISE EXCRETORY PRODUCTS AND THEIR ELIMINATION TEST ===");
}

main().catch(err => {
  console.error("Execution error:", err);
  process.exit(1);
});
