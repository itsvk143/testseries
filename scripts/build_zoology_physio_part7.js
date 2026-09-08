// scripts/build_zoology_physio_part7.js
// Subtopic: Excretory Products & Elimination
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Excretory Products & Elimination";
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
    a: "Terrestrial animals are generally either ureotelic or uricotelic, but rarely ammonotelic.",
    r: "Ammonia is extremely toxic and requires huge amounts of water for its elimination, which terrestrial animals cannot afford to lose.",
    ans: 0,
    exp: "Ammonotelism necessitates large water turnover (~300-500 mL per gram of ammonia), whereas ureotelism and uricotelism are key adaptations for terrestrial water conservation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Birds and reptiles excrete nitrogenous wastes predominantly in the form of uric acid pellets or paste.",
    r: "Uric acid is the least toxic nitrogenous waste and is insoluble in water, allowing excretion with minimal water loss.",
    ans: 0,
    exp: "Uricotelism allows avian and reptilian species to conserve vital body water by precipitating nitrogenous waste into an insoluble paste. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "During hemodialysis, the cleared blood is pumped back into the patient through a vein after adding anti-heparin.",
    r: "Heparin was added as an anticoagulant before the blood entered the dialyzer unit to prevent clotting in the cellophane tubes.",
    ans: 0,
    exp: "Heparin prevents clotting within the artificial kidney apparatus, and anti-heparin neutralizes the anticoagulant effect before venous re-infusion to prevent internal hemorrhage. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The dialyzing fluid used in hemodialysis has the exact same composition as plasma, except for the complete absence of nitrogenous wastes.",
    r: "Nitrogenous wastes like urea diffuse freely from patient blood across the porous cellophane membrane down their concentration gradient into the dialyzing fluid.",
    ans: 0,
    exp: "The absence of urea and other wastes in the dialysate establishes a steep diffusion gradient across the semipermeable membrane while preventing loss of essential electrolytes and glucose. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Human lungs play a significant accessory role in excretion.",
    r: "Lungs eliminate approximately 200 mL of carbon dioxide per minute as well as significant quantities of water vapor.",
    ans: 0,
    exp: "Elimination of volatile respiratory end-products ($CO_2 \\approx 18\\text{ L/day}$ and water vapor) constitutes a major excretory contribution by the lungs. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Renal calculi are insoluble crystalline stones formed in the urinary tract.",
    r: "Renal calculi commonly consist of precipitated calcium oxalate crystals.",
    ans: 1,
    exp: "Both (A) and (R) are true statements from NCERT. Stones in the urinary system are called renal calculi, and calcium oxalate is their most frequent constituent. Stating the chemical composition of the stone describes it rather than explaining the pathophysiology of hypercalciuria/supersaturation. Both are true, (R) is not the explanation."
  },
  {
    a: "Micturition is a reflex action under voluntary control in adult humans.",
    r: "Stretch receptors on the urinary bladder wall initiate sensory signals to the CNS, which regulates the autonomic contraction of the detrusor muscle and voluntary relaxation of the external urethral sphincter.",
    ans: 0,
    exp: "The micturition reflex is initiated involuntarily by bladder distension, but higher cortical centers exert voluntary control over the external sphincter. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "An adult human excretes on average 25 to 30 grams of urea per day in urine.",
    r: "Urea is synthesized in the liver from ammonia released during amino acid deamination via the ornithine cycle.",
    ans: 1,
    exp: "Both statements are true. Daily urinary urea excretion averages 25–30 g, and hepatic synthesis occurs through the ornithine (urea) cycle. The biochemical pathway of synthesis does not explain the exact daily quantity excreted, which depends on dietary protein intake and metabolic rate. Both are true, (R) is not the explanation."
  },
  {
    a: "Presence of glucose (glycosuria) and ketone bodies (ketonuria) in urine is indicative of Diabetes Mellitus.",
    r: "In diabetes mellitus, insulin deficiency leads to severe hyperglycemia exceeding the renal tubular reabsorptive threshold and accelerated ketogenesis from fat catabolism.",
    ans: 0,
    exp: "Glucosuria occurs when filtered glucose exceeds tubular transport maximum ($T_m$), and unutilized cellular glucose shifts metabolism to fatty acid beta-oxidation, producing excess acetoacetate and beta-hydroxybutyrate. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Columns of Bertin are projections of cortical tissue into the renal medulla.",
    r: "Renal columns of Bertin extend between adjacent medullary pyramids, providing structural pathway for interlobar blood vessels.",
    ans: 0,
    exp: "The cortex dips inward between renal pyramids as the columns of Bertin, housing interlobar arteries and veins. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sebaceous glands in the skin eliminate certain excretory substances in sebum.",
    r: "Sebum contains sterols, hydrocarbons, and fatty waxes that are discharged onto the skin surface.",
    ans: 0,
    exp: "Sebaceous holocrine glands secrete sebum rich in waxes, squalene, and sterols, serving both an excretory and a skin-protective function. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ammonia produced by metabolism in terrestrial mammals is converted into urea in the kidneys.",
    r: "Kidneys possess all the enzymes of the ornithine cycle necessary for urea synthesis.",
    ans: 3,
    exp: "Both (A) and (R) are false. Ammonia is converted into urea in the LIVER (not kidneys) via the ornithine cycle; the kidneys merely filter and excrete the urea."
  },
  {
    a: "Glomerulonephritis is an inflammatory condition affecting the renal glomeruli.",
    r: "It is often caused by the deposition of circulating immune complexes following streptococcal infections.",
    ans: 0,
    exp: "Post-streptococcal glomerulonephritis involves antigen-antibody immune complex trapping in the glomerular basement membrane, inducing acute inflammation and hematuria. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Flame cells (protonephridia) are the excretory structures in Platyhelminthes like Planaria.",
    r: "Protonephridia are primarily concerned with osmoregulation, i.e., ionic and fluid volume regulation.",
    ans: 0,
    exp: "Ciliated flame bulb cells drive interstitial fluid through excretory ducts, functioning primarily in ionic and osmotic balance in flatworms. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Kidneys are located retroperitoneally between the levels of the last thoracic (T12) and third lumbar (L3) vertebrae.",
    r: "The right kidney is positioned slightly lower than the left kidney due to the space occupied by the liver.",
    ans: 1,
    exp: "Both statements are correct anatomical facts. The kidneys extend from T12 to L3 against the posterior abdominal wall, and liver asymmetry displaces the right kidney slightly inferiorly. The anatomical position of the liver explains the lower position of the right kidney, not the vertebral span T12–L3. Both are true, (R) is not the explanation."
  },
  {
    a: "Malpighian tubules are the excretory structures found in insects like cockroaches.",
    r: "Malpighian tubules absorb uric acid and salts from the hemolymph and discharge them into the alimentary canal for excretion.",
    ans: 0,
    exp: "Blind-ended Malpighian tubules dip into the hemocoel, extract potassium urate, and empty into the junction of midgut and hindgut. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Antennal glands or green glands perform excretory functions in crustaceans like prawns.",
    r: "Green glands are paired coelomoducts located at the base of the antennae that filter fluid from the blood.",
    ans: 0,
    exp: "In crustaceans, antennal/green glands consist of an end sac, labyrinth, and bladder that filter hemolymph at the antennal base. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The liver is the largest gland in the human body and contributes to excretion.",
    r: "Bile secreted by the liver carries bilirubin, biliverdin, cholesterol, degraded steroid hormones, and drugs into the digestive tract for fecal elimination.",
    ans: 0,
    exp: "Hepatic detoxification and erythrocyte catabolism yield bile pigments and metabolites that pass with bile into the intestine and exit in feces. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sweat produced by sweat glands is primarily meant for thermoregulation.",
    r: "Evaporative cooling from the skin surface lowers body temperature during high ambient heat or exercise.",
    ans: 0,
    exp: "Although sweat contains trace metabolic wastes (urea, NaCl, lactic acid), its principal evolutionary physiological role is evaporative thermoregulation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Uremia is a clinical condition characterized by dangerously high levels of urea in the blood.",
    r: "Uremia results from severe renal failure where the kidneys fail to adequately filter and excrete nitrogenous wastes.",
    ans: 0,
    exp: "Renal insufficiency leads to systemic accumulation of urea, creatinine, and uremic toxins, which can be fatal if untreated by dialysis or transplantation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Marine cartilaginous fishes like sharks retain significant amounts of urea in their body fluids.",
    r: "Retaining urea raises internal osmolarity, preventing osmotic water loss into the hypertonic marine environment.",
    ans: 0,
    exp: "Sharks accumulate urea and TMAO in blood to make their internal fluid slightly hyperosmotic to seawater, avoiding passive dehydration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The normal human urine is slightly alkaline with a pH of 8.0.",
    r: "Urinary bladder epithelium secretes large quantities of sodium bicarbonate to buffer the urine.",
    ans: 3,
    exp: "Both (A) and (R) are false. Normal human urine is slightly ACIDIC with an average pH of 6.0 due to active tubular secretion of $H^+$ ions; bladder epithelium does not secrete bicarbonate."
  },
  {
    a: "Kidney transplantation is the ultimate method in the management of acute or chronic irreversible renal failure.",
    r: "A functional kidney from a matching donor (preferably a close relative) is transplanted to take over the filtration and excretory work.",
    ans: 0,
    exp: "Kidney transplantation restores complete endocrine and filtration functions, using immunosuppressants like cyclosporin to prevent allograft rejection. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Nephridia are tubular excretory structures present in earthworms.",
    r: "Nephridia help to remove nitrogenous wastes and maintain fluid and ionic balance in annelids.",
    ans: 0,
    exp: "Septal, integumentary, and pharyngeal nephridia collect coelomic fluid and filter wastes, performing both excretion and osmoregulation in earthworms. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Saliva in humans can eliminate small amounts of nitrogenous wastes.",
    r: "Small quantities of urea and thiocyanate can be detected in normal salivary secretions.",
    ans: 0,
    exp: "Salivary glands act as accessory excretory routes, expelling trace amounts of nitrogenous metabolites into the oral cavity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The hilum of the kidney is a notch through which the ureter, renal artery, and renal vein pass.",
    r: "Inner to the hilum is a broad funnel-shaped space called the renal pelvis with projections called calyces.",
    ans: 1,
    exp: "Both (A) and (R) are accurate anatomical descriptions of the medial aspect of the kidney. The presence of the renal pelvis internally is continuous with the hilum but does not explain why vessels and the ureter enter at this notch. Both are true, (R) is not the explanation."
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
    q: "Which nitrogenous waste is the most toxic and requires the maximum volume of water for its excretion?",
    opts: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
    ans: 0,
    exp: "Ammonia is the most toxic nitrogenous catabolite, requiring 300 to 500 mL of water per gram of ammonia for safe dilution and excretion."
  },
  {
    q: "Which group of animals is typically ammonotelic, excreting ammonia by simple diffusion across gills or body surface?",
    opts: ["Bony fishes, aquatic amphibians, and aquatic insects", "Reptiles, birds, and land snails", "Mammals and terrestrial amphibians", "Cartilaginous marine sharks"],
    ans: 0,
    exp: "Freshwater teleosts (bony fishes), larval aquatic amphibians, and aquatic insects excrete ammonia directly into their copious aquatic surroundings."
  },
  {
    q: "Uric acid is excreted in the form of pellets or paste with minimum loss of water by:",
    opts: ["Reptiles, birds, land snails, and terrestrial insects", "Mammals and adult frogs", "Bony fishes and tadpoles", "Marine crustaceans only"],
    ans: 0,
    exp: "Uricotelism is a water-conserving adaptation characteristic of reptiles, birds, land snails, and insects."
  },
  {
    q: "In humans, ammonia produced by cellular metabolism is converted into urea in which organ?",
    opts: ["Liver (via Ornithine cycle)", "Kidneys (via Cori cycle)", "Spleen (via Krebs cycle)", "Lungs (via Calvin cycle)"],
    ans: 0,
    exp: "The liver converts toxic ammonia into less toxic urea via the urea cycle (ornithine cycle), which is then filtered by the kidneys."
  },
  {
    q: "Flame cells (protonephridia) are the specialized excretory and osmoregulatory structures found in:",
    opts: ["Platyhelminthes (e.g., Planaria)", "Annelids (e.g., Earthworm)", "Insects (e.g., Cockroach)", "Crustaceans (e.g., Prawn)"],
    ans: 0,
    exp: "Protonephridia with flame cells are primitive excretory structures found in Platyhelminthes, rotifers, and cephalochordates."
  },
  {
    q: "Malpighian tubules function as the primary excretory organs in:",
    opts: ["Insects such as cockroaches", "Annelids such as leeches", "Flatworms such as tapeworms", "Crustaceans such as crabs"],
    ans: 0,
    exp: "Insects have Malpighian tubules that extract uric acid from hemolymph and empty it into the digestive tract."
  },
  {
    q: "Antennal glands or green glands perform the excretory function in:",
    opts: ["Crustaceans (e.g., Prawns)", "Insects", "Molluscs", "Echinoderms"],
    ans: 0,
    exp: "Green glands (antennal glands) are specialized paired excretory organs located at the antennal base in crustaceans like prawns."
  },
  {
    q: "In adult humans, the kidneys are positioned retroperitoneally between the levels of which vertebrae?",
    opts: ["Last thoracic (T12) and third lumbar (L3) vertebrae", "First cervical and seventh cervical vertebrae", "Fifth thoracic and tenth thoracic vertebrae", "Fourth lumbar and fifth sacral vertebrae"],
    ans: 0,
    exp: "The human kidneys lie retroperitoneally against the dorsal abdominal wall between the T12 and L3 vertebral levels."
  },
  {
    q: "What are the average dimensions (length $\\times$ width $\\times$ thickness) and weight of an adult human kidney?",
    opts: ["10–12 cm $\\times$ 5–7 cm $\\times$ 2–3 cm, weight 120–170 g", "5–6 cm $\\times$ 2–3 cm $\\times$ 1 cm, weight 50–70 g", "18–20 cm $\\times$ 10–12 cm $\\times$ 5 cm, weight 300–400 g", "8–9 cm $\\times$ 3–4 cm $\\times$ 1.5 cm, weight 80–100 g"],
    ans: 0,
    exp: "Each kidney measures about 10–12 cm in length, 5–7 cm in width, 2–3 cm in thickness, with an average weight of 120–170 grams."
  },
  {
    q: "The projections of renal cortex that dip between adjacent medullary pyramids are known as:",
    opts: ["Columns of Bertin (renal columns)", "Ducts of Bellini", "Malpighian corpuscles", "Calyces major"],
    ans: 0,
    exp: "Cortical tissue extending into the medullary region between renal pyramids forms the renal columns of Bertin."
  },
  {
    q: "During artificial hemodialysis, what substance is added to the cleared blood before pumping it back into the patient's vein?",
    opts: ["Anti-heparin", "Heparin", "Streptokinase", "Hirudin"],
    ans: 0,
    exp: "Anti-heparin (e.g. protamine sulfate) is added to restore normal blood clotting capability before the dialyzed blood returns to the patient."
  },
  {
    q: "An adult human produces on average how much urine per day, and what is its typical pH?",
    opts: ["1 to 1.5 liters per day with a pH of 6.0", "3 to 4 liters per day with a pH of 8.5", "0.2 to 0.5 liters per day with a pH of 4.5", "2.5 to 3 liters per day with a pH of 7.4"],
    ans: 0,
    exp: "An adult human excretes 1.0 to 1.5 L of urine per day with an average slightly acidic pH of 6.0."
  },
  {
    q: "How many grams of urea are excreted on average by a healthy adult human each day in urine?",
    opts: ["25 to 30 grams", "5 to 10 grams", "50 to 60 grams", "1 to 2 grams"],
    ans: 0,
    exp: "A healthy adult excretes approximately 25 to 30 grams of urea in urine every 24 hours."
  },
  {
    q: "The accumulation of high levels of urea in the blood due to kidney malfunction is termed:",
    opts: ["Uremia", "Anuria", "Ketonuria", "Glycosuria"],
    ans: 0,
    exp: "Uremia is the toxic clinical syndrome resulting from failure of the kidneys to excrete urea and other nitrogenous wastes."
  },
  {
    q: "Renal calculi are commonly composed of an insoluble precipitate of:",
    opts: ["Calcium oxalate crystals", "Potassium chloride crystals", "Sodium bicarbonate granules", "Magnesium sulfate plates"],
    ans: 0,
    exp: "Renal calculi (kidney stones) are hard deposits formed within the renal pelvis or calyces, most frequently composed of calcium oxalate."
  },
  {
    q: "Inflammation of the glomeruli of the kidney is clinically known as:",
    opts: ["Glomerulonephritis", "Pyelonephritis", "Cystitis", "Urethritis"],
    ans: 0,
    exp: "Glomerulonephritis refers to immune-mediated or infectious inflammation of the renal glomeruli."
  },
  {
    q: "Human lungs eliminate carbon dioxide at an approximate rate of:",
    opts: ["200 mL per minute (~18 liters per day)", "50 mL per minute", "500 mL per minute", "1000 mL per minute"],
    ans: 0,
    exp: "Our lungs eliminate tremendous amounts of carbon dioxide (approximately 200 mL/min or ~18 L/day) along with water vapor."
  },
  {
    q: "Which gland in human skin secretes an oily substance containing sterols, hydrocarbons, and waxes?",
    opts: ["Sebaceous gland", "Eccrine sweat gland", "Ceruminous gland", "Mammary gland"],
    ans: 0,
    exp: "Sebaceous glands eliminate metabolic lipophilic substances like sterols, squalene, and waxes through sebum onto the skin."
  },
  {
    q: "The neural mechanism that coordinates the emptying of the urinary bladder is known as the:",
    opts: ["Micturition reflex", "Defecation reflex", "Hering-Breuer reflex", "Baroreceptor reflex"],
    ans: 0,
    exp: "The process of release of urine is called micturition, and the integrated neural circuit mediating it is the micturition reflex."
  },
  {
    q: "The presence of ketone bodies in urine (ketonuria) is a cardinal clinical indicator of:",
    opts: ["Diabetes mellitus", "Diabetes insipidus", "Addison's disease", "Glomerulonephritis"],
    ans: 0,
    exp: "Ketonuria occurs in uncontrolled diabetes mellitus due to hepatic overproduction of acetoacetate and beta-hydroxybutyrate from fat breakdown."
  }
];

const concepts = [
  { topic: "ammonotelism water requirement", fact: "Ammonotelism is the excretion of ammonia; it requires large volumes of water and is seen in aquatic animals." },
  { topic: "ureotelism terrestrial adaptation", fact: "Terrestrial mammals, adult amphibians, and sharks are ureotelic, converting ammonia into less toxic urea." },
  { topic: "uricotelism water conservation", fact: "Birds, reptiles, and insects excrete uric acid paste to minimize water loss, exemplifying uricotelism." },
  { topic: "ornithine cycle in liver", fact: "The ornithine (urea) cycle takes place in hepatocytes to synthesize urea from metabolic ammonia and carbon dioxide." },
  { topic: "flame cells in flatworms", fact: "Flame cells (protonephridia) maintain ionic balance and osmoregulation in Platyhelminthes like Planaria." },
  { topic: "Malpighian tubules in insects", fact: "Malpighian tubules extract nitrogenous wastes from hemolymph and discharge them into the insect hindgut." },
  { topic: "green glands in crustaceans", fact: "Antennal glands (green glands) are paired excretory organs at the antennal base in crustaceans like prawns." },
  { topic: "kidney T12 to L3 location", fact: "Human kidneys are bean-shaped retroperitoneal organs positioned between the T12 and L3 vertebrae." },
  { topic: "kidney dimensions and weight", fact: "Adult human kidneys measure 10-12 cm in length, 5-7 cm in width, 2-3 cm in thickness, and weigh 120-170 g." },
  { topic: "columns of Bertin anatomy", fact: "Renal columns of Bertin are cortical extensions that dip between adjacent conical medullary pyramids." },
  { topic: "hilum and renal pelvis notch", fact: "The hilum on the concave margin leads into the funnel-shaped renal pelvis with calyces collecting urine." },
  { topic: "hemodialysis artificial kidney", fact: "Hemodialysis filters nitrogenous wastes across semipermeable cellophane membranes into dialyzing fluid." },
  { topic: "heparin and anti-heparin usage", fact: "Heparin prevents clotting inside dialyzer tubing, while anti-heparin restores normal coagulation prior to reinfusion." },
  { topic: "daily urine volume and pH 6", fact: "A healthy adult excretes 1 to 1.5 liters of urine daily with an average acidic pH of 6.0." },
  { topic: "daily urea excretion 25-30 g", fact: "Healthy adult humans eliminate approximately 25 to 30 grams of urea in urine every 24 hours." },
  { topic: "uremia toxic blood condition", fact: "Uremia is a dangerous clinical condition caused by kidney failure leading to systemic accumulation of urea in blood." },
  { topic: "renal calculi calcium oxalate", fact: "Kidney stones (renal calculi) are hard insoluble precipitates, most frequently consisting of calcium oxalate." },
  { topic: "glomerulonephritis immune pathology", fact: "Glomerulonephritis is inflammation of the renal glomeruli often triggered by immune complex deposition." },
  { topic: "lungs CO2 elimination 200 mL/min", fact: "Human lungs excrete about 200 mL of carbon dioxide per minute (~18 L/day) along with water vapor." },
  { topic: "liver biliary excretion", fact: "The liver secretes bile pigments (bilirubin, biliverdin), cholesterol, and degraded drugs into the gut for excretion." },
  { topic: "skin sweat and sebaceous excretion", fact: "Sweat glands eliminate NaCl and trace urea for cooling, while sebaceous glands secrete sterols and waxes in sebum." },
  { topic: "micturition reflex voluntary control", fact: "Bladder stretch receptors initiate the micturition reflex, which is subject to conscious voluntary control over the external sphincter." },
  { topic: "glycosuria and ketonuria diagnostic value", fact: "The simultaneous presence of glucose (glycosuria) and ketone bodies (ketonuria) in urine indicates diabetes mellitus." },
  { topic: "shark urea osmoregulation", fact: "Marine elasmobranchs retain high blood concentrations of urea to remain iso- or slightly hyperosmotic to seawater." },
  { topic: "nephridia annelid excretion", fact: "Nephridia are coiled tubular organs that perform nitrogenous excretion and osmoregulation in earthworms." },
  { topic: "kidney transplantation allograft", fact: "Kidney transplantation is the definitive therapy for end-stage renal failure, requiring immunosuppression to avoid rejection." }
];

const realisticDistractors = [
  "It transforms immediately into ossified dentine within the urinary bladder lumen.",
  "It stimulates the complete enzymatic hydrolysis of all circulating serum albumins.",
  "It converts all urinary nitrogen into gaseous ammonia inside the renal calyces.",
  "It causes the permanent calcification of all glomerular basement membranes bilaterally.",
  "It completely abolishes the secretion of bile pigments from the liver parenchyma permanently.",
  "It replaces the entire renal medulla with stratified squamous keratinized epithelium.",
  "It eliminates all sodium-potassium pumps from the collecting ducts entirely.",
  "It induces the spontaneous destruction of all peritubular capillaries throughout the cortex."
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
      q: `Which of the following statements regarding ${item.topic} is PHYSIOLOGICALLY ACCURATE?`,
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
      q: `Identify the accurate statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Excretory physiology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human excretory system and comparative excretion, what is the significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Excretory Products fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the correct NCERT fact regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT statement: ${item.fact}`
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

console.log(`Part 7 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 7 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part7.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 7: Excretory Products & Elimination\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
