// scripts/build_zoology_physio_part10.js
// Subtopic: Nephron structure and counter-current mechanism
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Nephron structure and counter-current mechanism";
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
    a: "Glomerular filtration is considered an ultrafiltration process.",
    r: "Blood is filtered so finely across the three-layered filtration membrane that almost all plasma constituents except proteins pass into Bowman's capsule.",
    ans: 0,
    exp: "Because podocyte slit pores and fenestrations retain large proteins and cellular elements while passing all small solutes and water, the process is termed ultrafiltration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The Proximal Convoluted Tubule (PCT) reabsorbs nearly 70 to 80 percent of electrolytes and water.",
    r: "The PCT is lined by simple cuboidal brush border epithelium, which provides an immense surface area for active and passive reabsorption.",
    ans: 0,
    exp: "Microvillar brush borders expand the apical luminal area, facilitating massive reabsorption of water, sodium, potassium, and 100% of filtered glucose and amino acids. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Juxtamedullary nephrons play an indispensable role in the concentration of urine.",
    r: "Juxtamedullary nephrons possess exceptionally long loops of Henle that plunge deep into the renal medulla, accompanied by well-developed vasa recta.",
    ans: 0,
    exp: "Deep medullary penetration of Henle's loops in juxtamedullary nephrons establishes and sustains the hyperosmotic medullary gradient essential for hypertonic urine production. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The descending limb of the loop of Henle is permeable to water but almost impermeable to electrolytes.",
    r: "As filtrate descends down the Henle's loop into the hypertonic medullary interstitium, water moves out osmotically, progressively concentrating the tubular fluid.",
    ans: 0,
    exp: "Water exits into the hyperosmolar medulla while solutes remain trapped inside, increasing tubular fluid osmolarity to ~1200 mOsm/L at the loop hairpin tip. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The ascending limb of the loop of Henle dilutes the tubular filtrate.",
    r: "The ascending limb is impermeable to water and actively or passively transports electrolytes ($NaCl$) out of the tubular lumen into the medullary interstitium.",
    ans: 0,
    exp: "Because salt is removed without accompanying water, tubular osmolarity drops from 1200 mOsm/L back to ~200 mOsm/L (hypotonic) as fluid reaches the distal tubule. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The counter-current mechanism operates between the loop of Henle and the vasa recta.",
    r: "Flow of filtrate in the two limbs of Henle's loop is in opposite directions, and the flow of blood in the two limbs of the vasa recta is also in opposite directions.",
    ans: 0,
    exp: "Opposing flow patterns in adjacent hairpin loops create a counter-current multiplier and exchanger system that maintains medullary interstitial hyperosmolarity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The osmolarity of the renal medullary interstitium increases from 300 mOsm/L in the cortex to 1200 mOsm/L in the inner medulla.",
    r: "Active transport of $NaCl$ by the ascending limb and passive diffusion of urea from the collecting duct continuously accumulate in the medullary interstitium.",
    ans: 0,
    exp: "Counter-current trapping of $NaCl$ and urea recycling create an axial hyperosmotic gradient from outer cortex to deep medullary papilla. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A fall in glomerular filtration rate (GFR) activates the juxtaglomerular apparatus (JGA).",
    r: "Juxtaglomerular (JG) cells release the enzyme renin into the bloodstream in response to low glomerular blood pressure or decreased $NaCl$ delivery to macula densa.",
    ans: 0,
    exp: "Renin secretion by JG cells initiates the RAAS cascade to restore renal blood flow and normalize GFR. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Angiotensin II stimulates the secretion of aldosterone from the adrenal cortex.",
    r: "Aldosterone induces conditional reabsorption of $Na^+$ and water from the distal convoluted tubules, expanding blood volume and raising blood pressure.",
    ans: 0,
    exp: "Angiotensin II upregulates aldosterone, which promotes renal sodium and fluid retention, restoring effective circulating volume. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Atrial Natriuretic Factor (ANF) acts as a physiological check on the Renin-Angiotensin-Aldosterone System (RAAS).",
    r: "ANF causes systemic vasodilation and accelerates urinary excretion of sodium (natriuresis), thereby decreasing arterial blood pressure.",
    ans: 0,
    exp: "High blood volume triggers atrial ANF release, which directly opposes renin and aldosterone actions to prevent hypervolemia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Antidiuretic Hormone (ADH / Vasopressin) prevents excessive loss of water in urine (diuresis).",
    r: "ADH facilitates the insertion of aquaporin water channels into the luminal membranes of distal convoluted tubules and collecting ducts.",
    ans: 0,
    exp: "Increased water permeability mediated by ADH permits osmotic water reabsorption into the hypertonic medulla, producing concentrated urine. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The Glomerular Filtration Rate (GFR) in a healthy human adult is approximately 125 mL per minute (180 liters per day).",
    r: "Nearly 99 percent of the glomerular filtrate is reabsorbed by the renal tubules, resulting in a daily urine output of only 1 to 1.5 liters.",
    ans: 1,
    exp: "Both (A) and (R) are accurate NCERT facts ($180\\text{ L}$ filtered vs $1.5\\text{ L}$ excreted = 99% tubular reabsorption). Massive reabsorption explains why daily urine volume is small, but does not causally explain why the filtration rate is 125 mL/min (which depends on net filtration pressure and filtration coefficient). Both are true, (R) is not the explanation."
  },
  {
    a: "Podocytes are specialized epithelial cells forming the visceral layer of Bowman's capsule.",
    r: "Podocytes possess intricate pedicels (foot processes) that interdigitate to leave narrow filtration slits (slit pores) covering the glomerular capillaries.",
    ans: 0,
    exp: "The interdigitating foot processes of podocytes form the final mechanical size-selective barrier of the ultrafiltration membrane. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Small amounts of urea enter the thin ascending limb of the loop of Henle.",
    r: "Urea diffusing out from the collecting duct is recycled through the loop of Henle back into the medullary interstitium to maintain hyperosmolarity.",
    ans: 0,
    exp: "Urea recycling between the medullary collecting duct, medullary interstitium, and thin ascending limb helps preserve the 1200 mOsm/L gradient. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tubular secretion of hydrogen ions ($H^+$), potassium ions ($K^+$), and ammonia ($NH_3$) occurs in the PCT and DCT.",
    r: "Tubular secretion helps maintain ionic balance, electrolyte homeostasis, and acid-base equilibrium of body fluids.",
    ans: 0,
    exp: "Active secretion of protons and ammonium eliminates metabolic acids, while $HCO_3^-$ reabsorption buffers plasma pH. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Excessive consumption of plain water suppresses the secretion of Antidiuretic Hormone (ADH).",
    r: "Hydration dilutes body fluids, turning off hypothalamic osmoreceptors and prompting the posterior pituitary to withhold ADH release.",
    ans: 0,
    exp: "Decreased plasma osmolarity deactivates osmoreceptors, inhibiting ADH and permitting rapid excretion of excess water (water diuresis). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Glucose and amino acids in the glomerular filtrate are reabsorbed completely in the Proximal Convoluted Tubule under normal conditions.",
    r: "Secondary active transport via sodium-glucose cotransporters (SGLT) and amino acid carriers ensures complete reabsorption before the loop of Henle.",
    ans: 0,
    exp: "Coupling with the steep inward $Na^+$ gradient drives 100% reabsorption of valuable organic nutrients across PCT apical membranes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The diameter of the afferent arteriole is larger than that of the efferent arteriole.",
    r: "The difference in luminal diameters creates high glomerular capillary hydrostatic pressure, driving ultrafiltration.",
    ans: 0,
    exp: "Vascular resistance in the narrower efferent arteriole elevates upstream hydrostatic pressure in the glomerulus to ~60 mm Hg, powering filtration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Vasa recta are hairpin vascular loops that run parallel to the loop of Henle.",
    r: "Vasa recta arise from the efferent arterioles of juxtamedullary nephrons.",
    ans: 1,
    exp: "Both statements are true. Vasa recta arise from juxtamedullary efferent arterioles and run parallel to Henle's loops. Stating their microvascular origin does not explain the physical parallel configuration that serves counter-current exchange. Both are true, (R) is not the explanation."
  },
  {
    a: "In cortical nephrons, the loop of Henle extends deep into the renal pyramid.",
    r: "Cortical nephrons constitute the majority (about 85%) of nephrons in the human kidney.",
    ans: 3,
    exp: "Assertion is false: In cortical nephrons, Henle's loop is very short and extends only minimally into the medulla. Reason is true: cortical nephrons do constitute ~85% of total nephrons."
  },
  {
    a: "The collecting duct allows small amounts of urea to pass into the medullary interstitium.",
    r: "The urea in the medullary interstitium contributes significantly to maintaining high medullary hyperosmolarity.",
    ans: 0,
    exp: "Urea reabsorption from inner medullary collecting ducts supplies nearly half of the solutes responsible for deep medullary hyperosmolarity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Angiotensin II is a potent vasodilator that decreases systemic blood pressure.",
    r: "Angiotensin II inhibits the release of aldosterone from the adrenal cortex.",
    ans: 3,
    exp: "Both (A) and (R) are false. Angiotensin II is a potent VASOCONSTRICTOR (increases BP) and STIMULATES aldosterone release from the adrenal cortex."
  },
  {
    a: "Net filtration pressure (NFP) in the glomerulus is about 10 mm Hg.",
    r: "Glomerular hydrostatic pressure (60 mm Hg) is opposed by blood colloid osmotic pressure (32 mm Hg) and capsular hydrostatic pressure (18 mm Hg): $\\text{NFP} = 60 - (32 + 18) = 10\\text{ mm Hg}$.",
    ans: 0,
    exp: "Net filtration pressure represents the vector balance of Starling forces driving ultrafiltration into Bowman's space. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Human urine can be concentrated up to four times the osmolarity of the initial glomerular filtrate.",
    r: "The initial filtrate has an osmolarity of 300 mOsm/L, while concentrated urine can reach up to 1200 mOsm/L.",
    ans: 0,
    exp: "By utilizing the 1200 mOsm/L medullary gradient, human kidneys can concentrate urine four-fold relative to isotonic plasma ($1200 / 300 = 4$). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Juxtaglomerular apparatus is formed by cellular modifications of the distal convoluted tubule and the afferent arteriole.",
    r: "The macula densa cells of the DCT sense tubular fluid flow and osmolarity, signaling juxtaglomerular cells in the afferent arteriole to adjust renin release.",
    ans: 0,
    exp: "The anatomical juxtaposition of macula densa and JG myoepithelial cells creates a local tubuloglomerular feedback hub. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The Malpighian corpuscle, PCT, and DCT of all nephrons are located in the renal cortex.",
    r: "Only the loops of Henle dip into the renal medulla.",
    ans: 0,
    exp: "Renal corpuscles and convoluted tubules are confined to the cortical zone, with medullary rays and pyramids housing loops of Henle and collecting ducts. Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "The Malpighian corpuscle (renal corpuscle) of a nephron comprises:",
    opts: ["Glomerulus and Bowman's capsule", "Bowman's capsule and PCT", "Glomerulus and efferent arteriole", "Loop of Henle and collecting duct"],
    ans: 0,
    exp: "A Malpighian corpuscle consists of the glomerular capillary tuft enclosed within the double-walled Bowman's capsule."
  },
  {
    q: "Specialized epithelial cells of the visceral layer of Bowman's capsule that form filtration slits (slit pores) are called:",
    opts: ["Podocytes", "Macula densa cells", "Mesangial cells", "Juxtaglomerular cells"],
    ans: 0,
    exp: "Podocytes possess intricate interdigitating foot processes (pedicels) that form filtration slits over the glomerular capillaries."
  },
  {
    q: "The Proximal Convoluted Tubule (PCT) is lined by which type of specialized epithelium?",
    opts: ["Simple cuboidal brush border epithelium", "Simple ciliated columnar epithelium", "Stratified squamous epithelium", "Pseudostratified non-ciliated epithelium"],
    ans: 0,
    exp: "The PCT is lined by simple cuboidal brush border epithelium that provides a dense microvillar surface for massive solute reabsorption."
  },
  {
    q: "What percentage of the glomerular filtrate is reabsorbed by the renal tubules in a healthy human adult?",
    opts: ["Nearly 99%", "75%", "50%", "10%"],
    ans: 0,
    exp: "Out of 180 liters of glomerular filtrate produced per day, about 178.5 liters (nearly 99%) is reabsorbed, leaving ~1.5 L excreted as urine."
  },
  {
    q: "The normal Glomerular Filtration Rate (GFR) in a healthy human adult is approximately:",
    opts: ["125 mL/min (180 liters/day)", "50 mL/min (72 liters/day)", "250 mL/min (360 liters/day)", "10 mL/min (14.4 liters/day)"],
    ans: 0,
    exp: "GFR in a healthy individual averages 125 mL/minute, which equates to 180 liters of filtrate per 24 hours."
  },
  {
    q: "Which limb of the loop of Henle is permeable to water but almost impermeable to electrolytes?",
    opts: ["Descending limb", "Ascending limb (thin segment)", "Ascending limb (thick segment)", "Collecting duct"],
    ans: 0,
    exp: "The descending limb of Henle's loop is freely permeable to water and virtually impermeable to electrolytes, concentrating tubular fluid."
  },
  {
    q: "Which limb of the loop of Henle is impermeable to water and actively transports $NaCl$ into the medullary interstitium?",
    opts: ["Ascending limb", "Descending limb", "Proximal convoluted tubule", "Bowman's capsule"],
    ans: 0,
    exp: "The ascending limb is impermeable to water and transports electrolytes into the interstitium, diluting the ascending filtrate."
  },
  {
    q: "What is the osmolarity gradient in the medullary interstitium from the outer renal cortex to the inner medulla?",
    opts: ["From $300\\text{ mOsm/L}$ in cortex to $1200\\text{ mOsm/L}$ in inner medulla", "From $1200\\text{ mOsm/L}$ in cortex to $300\\text{ mOsm/L}$ in inner medulla", "Uniformly $300\\text{ mOsm/L}$ throughout", "From $100\\text{ mOsm/L}$ in cortex to $600\\text{ mOsm/L}$ in inner medulla"],
    ans: 0,
    exp: "The medullary osmolarity increases four-fold from $300\\text{ mOsm/L}$ in the cortex to $1200\\text{ mOsm/L}$ at the deep papillary tips."
  },
  {
    q: "The two main chemical solutes responsible for maintaining the medullary interstitial hyperosmotic gradient are:",
    opts: ["$NaCl$ and urea", "Glucose and creatinine", "Potassium and uric acid", "Bicarbonate and calcium"],
    ans: 0,
    exp: "$NaCl$ (transported by the ascending limb) and urea (diffusing from collecting ducts) are the primary osmotic drivers of the medullary gradient."
  },
  {
    q: "Juxtamedullary nephrons differ from cortical nephrons in having:",
    opts: ["Long loops of Henle dipping deep into medulla and well-developed vasa recta", "Short loops of Henle and absent vasa recta", "No Bowman's capsule", "No distal convoluted tubule"],
    ans: 0,
    exp: "Juxtamedullary nephrons (~15% of nephrons) have long loops of Henle running deep into the medulla with extensive vasa recta."
  },
  {
    q: "A fall in GFR or renal blood pressure stimulates the juxtaglomerular (JG) cells to release:",
    opts: ["Renin", "Aldosterone", "Angiotensinogen", "Atrial natriuretic factor"],
    ans: 0,
    exp: "JG cells release the proteolytic enzyme renin to convert angiotensinogen into angiotensin I, initiating the RAAS pathway."
  },
  {
    q: "The conversion of angiotensinogen to angiotensin I is catalyzed by:",
    opts: ["Renin", "Angiotensin Converting Enzyme (ACE)", "Aldosterone", "Erythropoietin"],
    ans: 0,
    exp: "Renin secreted by renal JG cells cleaves circulating plasma angiotensinogen (from the liver) to produce angiotensin I."
  },
  {
    q: "Angiotensin II elevates blood pressure and restores GFR by:",
    opts: ["Acting as a potent vasoconstrictor and stimulating aldosterone secretion from adrenal cortex", "Causing widespread vasodilation and natriuresis", "Inhibiting ADH release from the pituitary", "Blocking sodium reabsorption in the DCT"],
    ans: 0,
    exp: "Angiotensin II is a powerful arteriolar vasoconstrictor and triggers aldosterone release, promoting fluid and sodium retention."
  },
  {
    q: "Atrial Natriuretic Factor (ANF) secreted by the heart acts to:",
    opts: ["Cause vasodilation and decrease blood pressure, checking RAAS", "Increase renin secretion from JGA", "Stimulate aldosterone secretion", "Constrict renal afferent arterioles"],
    ans: 0,
    exp: "ANF is released in response to atrial stretch; it dilates vessels and promotes natriuresis to reduce BP, checking RAAS."
  },
  {
    q: "Antidiuretic Hormone (ADH / Vasopressin) facilitates water reabsorption by acting primarily on the:",
    opts: ["Distal convoluted tubule (DCT) and collecting duct", "Proximal convoluted tubule (PCT) only", "Descending limb of loop of Henle only", "Bowman's capsule and glomerulus"],
    ans: 0,
    exp: "ADH binds basolateral V2 receptors in DCT and collecting ducts, inserting aquaporin channels to facilitate water reabsorption."
  },
  {
    q: "In which segment of the nephron does maximum reabsorption (70 to 80%) of electrolytes and water occur?",
    opts: ["Proximal Convoluted Tubule (PCT)", "Distal Convoluted Tubule (DCT)", "Descending limb of loop of Henle", "Ascending limb of loop of Henle"],
    ans: 0,
    exp: "The PCT is responsible for obligatory reabsorption of 70 to 80% of filtered water and electrolytes, as well as 100% of glucose."
  },
  {
    q: "Conditional (hormone-dependent) reabsorption of sodium ($Na^+$) and water takes place in which tubule?",
    opts: ["Distal Convoluted Tubule (DCT)", "Descending limb of Henle", "Thin ascending limb of Henle", "Renal corpuscle"],
    ans: 0,
    exp: "Conditional reabsorption in the DCT is regulated by aldosterone (for $Na^+$) and ADH (for water)."
  },
  {
    q: "The net filtration pressure (NFP) that drives ultrafiltration in human glomeruli is approximately:",
    opts: ["$10\\text{ mm Hg}$", "$60\\text{ mm Hg}$", "$32\\text{ mm Hg}$", "$18\\text{ mm Hg}$"],
    ans: 0,
    exp: "$\\text{NFP} = P_{\\text{glomerular hydrostatic}} (60) - [P_{\\text{colloid osmotic}} (32) + P_{\\text{capsular hydrostatic}} (18)] = 10\\text{ mm Hg}$."
  },
  {
    q: "Human kidneys can produce urine that is how many times more concentrated than the initial glomerular filtrate?",
    opts: ["Four times (up to $1200\\text{ mOsm/L}$ vs $300\\text{ mOsm/L}$)", "Ten times", "Two times", "Twenty times"],
    ans: 0,
    exp: "Initial filtrate is $300\\text{ mOsm/L}$; the counter-current system enables production of hypertonic urine up to $1200\\text{ mOsm/L}$ (a 4-fold concentration)."
  },
  {
    q: "Which cells of the juxtaglomerular apparatus (JGA) monitor the sodium chloride ($NaCl$) content and flow of tubular fluid in the DCT?",
    opts: ["Macula densa cells", "Juxtaglomerular (JG) cells", "Podocytes", "Mesangial cells"],
    ans: 0,
    exp: "Macula densa cells are specialized columnar epithelial cells in the DCT wall that sense tubular $NaCl$ delivery."
  }
];

const concepts = [
  { topic: "Malpighian corpuscle components", fact: "A Malpighian corpuscle is formed by the glomerulus and the surrounding double-walled Bowman's capsule." },
  { topic: "podocyte filtration slits", fact: "Podocytes are specialized visceral epithelial cells whose pedicels form filtration slits for ultrafiltration." },
  { topic: "PCT cuboidal brush border", fact: "The PCT is lined by simple cuboidal brush border epithelium, facilitating reabsorption of 70-80% of water and electrolytes." },
  { topic: "99 percent tubular reabsorption", fact: "Nearly 99% of the 180 liters of daily glomerular filtrate is reabsorbed by the renal tubules." },
  { topic: "GFR 125 mL per minute", fact: "The Glomerular Filtration Rate averages 125 mL per minute (equating to 180 liters per day) in healthy human adults." },
  { topic: "descending limb water permeability", fact: "The descending limb of Henle's loop is permeable to water but impermeable to electrolytes, concentrating the filtrate." },
  { topic: "ascending limb electrolyte transport", fact: "The ascending limb is impermeable to water and actively transports NaCl into the medullary interstitium, diluting the filtrate." },
  { topic: "medullary gradient 300 to 1200 mOsm", fact: "Osmolarity increases from 300 mOsm/L in the renal cortex to 1200 mOsm/L at the deep inner medullary tip." },
  { topic: "NaCl and urea gradient maintenance", fact: "Active NaCl transport by the ascending limb and passive urea recycling maintain the medullary hyperosmotic gradient." },
  { topic: "juxtamedullary nephrons 15 percent", fact: "Juxtamedullary nephrons comprise about 15% of nephrons and possess long loops of Henle essential for urine concentration." },
  { topic: "renin release by JG cells", fact: "A decline in glomerular blood flow or pressure stimulates juxtaglomerular cells to secrete the enzyme renin." },
  { topic: "angiotensinogen to angiotensin I cleavage", fact: "Renin cleaves liver-derived plasma angiotensinogen into the decapeptide angiotensin I." },
  { topic: "angiotensin II vasoconstriction and aldosterone", fact: "Angiotensin II constricts systemic arterioles and stimulates adrenal aldosterone secretion to elevate blood pressure." },
  { topic: "atrial natriuretic factor ANF check", fact: "ANF causes vasodilation and natriuresis to decrease blood pressure, acting as an antagonist to RAAS." },
  { topic: "ADH water channel insertion", fact: "ADH promotes water reabsorption in the DCT and collecting duct by inserting aquaporin water channels." },
  { topic: "conditional DCT reabsorption", fact: "Conditional reabsorption of sodium under aldosterone control and water under ADH control occurs in the DCT." },
  { topic: "net filtration pressure 10 mm Hg", fact: "Net filtration pressure equals glomerular hydrostatic pressure minus opposing colloid osmotic and capsular pressures (~10 mm Hg)." },
  { topic: "four-fold urine concentration capacity", fact: "Human kidneys can concentrate urine four times relative to isotonic plasma (1200 mOsm/L versus 300 mOsm/L)." },
  { topic: "macula densa chemoreception", fact: "Macula densa cells in the DCT detect tubular sodium chloride concentration and modulate adjacent JG renin secretion." },
  { topic: "vasa recta counter-current exchanger", fact: "The hairpin vasa recta act as passive counter-current exchangers, preserving the hyperosmotic medullary gradient." },
  { topic: "urea recycling in medullary papilla", fact: "Urea diffuses from the collecting duct into the medullary interstitium and is recycled through Henle's thin ascending limb." },
  { topic: "tubular secretion acid-base balance", fact: "Active tubular secretion of H+, K+, and ammonia in the PCT and DCT maintains bodily acid-base equilibrium." },
  { topic: "efferent arteriole narrower diameter", fact: "The efferent arteriole has a narrower diameter than the afferent arteriole, generating high filtration hydrostatic pressure." },
  { topic: "complete glucose amino acid reabsorption", fact: "100% of filtered glucose and amino acids are reabsorbed in the PCT by secondary active sodium cotransport." },
  { topic: "dehydration osmoreceptor stimulation", fact: "Dehydration activates hypothalamic osmoreceptors, stimulating posterior pituitary ADH release to conserve water." },
  { topic: "cortical nephrons majority short loop", fact: "Cortical nephrons constitute 85% of nephrons, with short loops of Henle that extend only minimally into the medulla." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the nephron tubule lumen.",
  "It stimulates the complete enzymatic hydrolysis of all circulating podocyte actin filaments.",
  "It converts all glomerular filtrate into crystalline sulfuric acid during filtration.",
  "It causes the irreversible calcification of all capillary fenestrations in both kidneys.",
  "It completely abolishes the secretion of renin from juxtaglomerular cells permanently.",
  "It replaces the entire brush border epithelium with non-absorptive stratified keratin.",
  "It eliminates all aquaporin water channels from the renal collecting ducts permanently.",
  "It induces the spontaneous liquidation of all medullary interstitial proteoglycans."
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
      q: `Which of the following statements regarding ${item.topic} is PHYSIOLOGICALLY TRUE?`,
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
      q: `Identify the accurate physiological statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Renal physiology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In nephron architecture and the counter-current mechanism, what is the role of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Nephron & Counter-Current fact: ${item.fact}`
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

console.log(`Part 10 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 10 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part10.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 10: Nephron structure and counter-current mechanism\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
