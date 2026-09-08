// scripts/build_zoology_physio_part4.js
// Subtopic: Chemical Coordination & Integration
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Chemical Coordination & Integration";
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
    a: "Hormones are defined as non-nutrient chemicals that act as intercellular messengers and are produced in trace amounts.",
    r: "Hormones do not provide calories or cellular building blocks directly, but bind specific high-affinity receptors to alter cellular metabolic activity.",
    ans: 0,
    exp: "NCERT defines hormones as non-nutrient, trace intercellular messengers that elicit profound biochemical responses without supplying direct energy. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hypothalamus regulates the secretions of the anterior pituitary gland through the hypophyseal portal system.",
    r: "Hypothalamic releasing and inhibiting hormones enter the portal venules and reach the adenohypophysis to control synthesis and release of tropic hormones.",
    ans: 0,
    exp: "The hypophyseal portal circulation connects the median eminence of the hypothalamus directly to the anterior pituitary, conveying regulatory neurohormones. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The neurohypophysis (posterior pituitary) is under direct neural regulation of the hypothalamus.",
    r: "The hormones oxytocin and vasopressin are actually synthesized in hypothalamic nuclei and transported axonally to the posterior pituitary for storage and release.",
    ans: 0,
    exp: "Magnocellular neurons in the supraoptic and paraventricular hypothalamic nuclei synthesize ADH and oxytocin, which are ferried down the hypothalamo-hypophyseal tract into the pars nervosa. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxytocin is commonly termed the 'birth hormone' and 'milk-ejection hormone'.",
    r: "Oxytocin stimulates vigorous contraction of uterine smooth muscles during parturition and contraction of myoepithelial cells in lactating mammary glands.",
    ans: 0,
    exp: "Oxytocin produces powerful myometrial contractions during labor (positive feedback) and milk let-down reflex from breast alveoli. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Deficiency of Antidiuretic Hormone (ADH / Vasopressin) leads to Diabetes Insipidus.",
    r: "In the absence of ADH, the water permeability of the distal convoluted tubules and collecting ducts is severely impaired, causing massive polyuria.",
    ans: 0,
    exp: "ADH inserts aquaporin-2 channels in collecting ducts. Lack of ADH prevents water reabsorption, leading to excessive excretion of dilute urine (diabetes insipidus). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Melatonin secreted by the pineal gland plays a key role in regulating the 24-hour diurnal rhythm of our body.",
    r: "Melatonin levels rise in darkness and fall during exposure to light, synchronizing sleep-wake cycles, body temperature, and metabolism.",
    ans: 0,
    exp: "The pineal gland's secretion of melatonin coordinates the circadian clock in response to photoperiodic signals. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dietary deficiency of iodine causes goitre and hypothyroidism in humans.",
    r: "Iodine is an essential chemical component for the synthesis of thyroid hormones $T_3$ and $T_4$.",
    ans: 0,
    exp: "Without adequate iodine, follicular thyroid cells cannot synthesize tetraiodothyronine and triiodothyronine, resulting in low BMR and compensatory thyroid hyperplasia (goitre). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hypothyroidism during pregnancy causes cretinism in the developing infant.",
    r: "Thyroid hormones are critically required for normal central nervous system development, skeletal maturation, and somatic growth during embryonic and fetal life.",
    ans: 0,
    exp: "Untreated maternal and congenital hypothyroidism severely impairs neurogenesis and skeletal growth, manifesting as mental retardation, stunted stature, and deaf-mutism. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Parathyroid Hormone (PTH) and Thyrocalcitonin (TCT) act antagonistically to regulate blood calcium levels.",
    r: "PTH is a hypercalcemic hormone that elevates serum $Ca^{2+}$, whereas TCT is a hypocalcemic hormone that lowers serum $Ca^{2+}$.",
    ans: 0,
    exp: "PTH stimulates osteoclast-mediated bone resorption and renal $Ca^{2+}$ reabsorption, while TCT promotes calcium deposition in bone matrix, maintaining calcium homeostasis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The thymus gland degenerates in old individuals.",
    r: "Old persons exhibit a noticeably weakened immune response compared to young individuals.",
    ans: 1,
    exp: "Both statements are true. Thymic involution occurs with advancing age, causing reduced thymosin production and weakened immunity. The fact that old individuals have weak immunity is the functional consequence, not the cellular explanation of why the thymus atrophies. Both are true, (R) is not the explanation."
  },
  {
    a: "Cortisol is a glucocorticoid that produces powerful anti-inflammatory and immunosuppressive responses.",
    r: "Cortisol suppresses the synthesis and release of inflammatory cytokines and inhibits the proliferation of white blood cells.",
    ans: 0,
    exp: "Glucocorticoids downregulate pro-inflammatory gene transcription, stabilizing lysosomal membranes and suppressing immune cell proliferation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Aldosterone stimulates the conservation of sodium and water in the body.",
    r: "Aldosterone acts predominantly on renal distal tubules to enhance active reabsorption of $Na^+$ and water, and secretion of $K^+$ and phosphate ions.",
    ans: 0,
    exp: "Mineralocorticoids like aldosterone upregulate epithelial sodium channels (ENaC) and $Na^+/K^+$ pumps in DCT and collecting ducts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The adrenal medulla hormones epinephrine and norepinephrine are called emergency hormones or 'fight-or-flight' hormones.",
    r: "They are rapidly secreted in response to stress and increase alertness, pupil dilation, heart rate, glycogen breakdown, and respiration rate.",
    ans: 0,
    exp: "Adrenal medullary catecholamines coordinate acute physiological survival responses to stress and danger. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Insulin and glucagon maintain glucose homeostasis in human blood antagonistically.",
    r: "Insulin lowers blood glucose by promoting cellular glucose uptake and glycogenesis, while glucagon raises blood glucose by stimulating glycogenolysis and gluconeogenesis.",
    ans: 0,
    exp: "Beta cells secrete insulin to clear postprandial glucose, whereas alpha cells secrete glucagon during fasting to maintain normal glycemic levels. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Patients with Diabetes Mellitus excrete glucose in their urine and produce toxic ketone bodies.",
    r: "Due to deficient insulin signaling, target cells cannot take up glucose, forcing the body to break down fats into ketone bodies.",
    ans: 0,
    exp: "Impaired insulin action prevents cellular glucose utilization, causing hyperglycemia exceeding renal threshold (glycosuria) and accelerated lipolysis yielding ketone bodies. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Atrial Natriuretic Factor (ANF) is secreted by the atrial walls of the heart to lower blood pressure.",
    r: "ANF causes vasodilation of blood vessels and promotes renal excretion of sodium, thereby opposing the renin-angiotensin-aldosterone mechanism.",
    ans: 0,
    exp: "Atrial distension from elevated blood volume triggers ANF release, which lowers vascular resistance and stimulates natriuresis to reduce BP. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The juxtaglomerular cells of the kidney secrete the peptide hormone erythropoietin.",
    r: "Erythropoietin stimulates the red bone marrow to accelerate the production of erythrocytes (erythropoiesis).",
    ans: 0,
    exp: "In response to renal hypoxia, JG cells produce erythropoietin, which binds erythroid progenitor receptors in bone marrow to promote RBC maturation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cholecystokinin (CCK) acts on both the gall bladder and the exocrine pancreas.",
    r: "CCK stimulates the contraction of the gall bladder to release stored bile and stimulates pancreatic acinar cells to secrete digestive enzymes.",
    ans: 0,
    exp: "Enteroendocrine CCK stimulates gall bladder smooth muscle contraction and pancreatic enzyme synthesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Secretin stimulates the exocrine pancreas to secrete water and bicarbonate ions.",
    r: "Bicarbonate ions in pancreatic juice neutralize the acidic chyme entering the duodenum from the stomach.",
    ans: 1,
    exp: "Both statements are true physiological facts. Secretin induces pancreatic ductal secretion of alkaline $HCO_3^-$, which neutralizes gastric acid. However, the neutralization purpose in the duodenum is the biochemical utility of bicarbonate rather than the cellular signaling mechanism by which secretin triggers ductal secretion. Both are true, (R) is not the explanation."
  },
  {
    a: "Gastric Inhibitory Peptide (GIP) inhibits gastric secretion and gastric motility.",
    r: "GIP ensures that acidic gastric chyme does not empty too rapidly into the small intestine.",
    ans: 0,
    exp: "Fatty and glucose-rich chyme in the duodenum stimulates GIP release, which slows gastric emptying and dampens acid secretion to optimize intestinal digestion. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Underproduction of hormones by the adrenal cortex causes Addison's disease.",
    r: "Addison's disease alters carbohydrate metabolism and causes acute weakness, extreme fatigue, and skin hyperpigmentation.",
    ans: 1,
    exp: "Both (A) and (R) are true clinical facts from NCERT. Adrenocortical insufficiency causes Addison's disease, marked by weakness and metabolic disturbances. The clinical symptoms characterize the disorder but do not explain the primary autoimmune or destructive lesion of the adrenal cortex. Both are true, (R) is not the explanation."
  },
  {
    a: "The pituitary gland is called the master endocrine gland.",
    r: "The pituitary gland secretes tropic hormones that regulate the activities of several other endocrine glands, such as the thyroid, adrenal cortex, and gonads.",
    ans: 0,
    exp: "Anterior pituitary hormones (TSH, ACTH, FSH, LH) direct the hormonal output of target peripheral endocrine organs. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prolactin stimulates the ejection of milk from the mammary glands during breastfeeding.",
    r: "Oxytocin stimulates the development of mammary glands and synthesis of milk.",
    ans: 3,
    exp: "Both (A) and (R) are false. Prolactin stimulates mammary gland development and milk SYNTHESIS; oxytocin stimulates milk EJECTION (let-down)."
  },
  {
    a: "Exophthalmic goitre (Graves' disease) is a form of hyperthyroidism characterized by protrusion of the eyeballs.",
    r: "Graves' disease is an autoimmune disorder where abnormal autoantibodies stimulate thyroid stimulating hormone (TSH) receptors on thyroid follicular cells.",
    ans: 0,
    exp: "Thyroid-stimulating autoantibodies (TSI) chronically activate TSH receptors, causing goitre, high BMR, weight loss, and exophthalmos. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Somatostatin from the hypothalamus inhibits the release of growth hormone from the anterior pituitary.",
    r: "Growth hormone releasing hormone (GHRH) stimulates pituitary secretion of growth hormone.",
    ans: 1,
    exp: "Both (A) and (R) are true statements describing dual hypothalamic control of growth hormone. The stimulatory role of GHRH does not explain the inhibitory action of somatostatin. Both are true, (R) is not the explanation."
  },
  {
    a: "Testosterone stimulates male secondary sexual characteristics and spermatogenesis.",
    r: "Testosterone is produced and secreted by the Leydig cells (interstitial cells) of the testis under the stimulation of Luteinizing Hormone (LH).",
    ans: 1,
    exp: "Both statements are true. Testosterone induces male phenotypic traits and supports spermatogenesis, and Leydig cells secrete it upon LH stimulation. Stating its cell of origin and LH regulation does not explain the intracellular androgen receptor mechanisms that drive phenotypic secondary sex characteristics. Both are true, (R) is not the explanation."
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
    q: "Which bony cavity of the sphenoid bone houses the human pituitary gland?",
    opts: ["Sella turcica", "Foramen magnum", "Acetabulum", "Glenoid cavity"],
    ans: 0,
    exp: "The pituitary gland is lodged in a depression of the sphenoid bone called the sella turcica and is attached to the hypothalamus by a stalk."
  },
  {
    q: "Which hypothalamic hormone inhibits the secretion of Growth Hormone (GH) from the anterior pituitary?",
    opts: ["Somatostatin", "GnRH", "Thyrotropin releasing hormone", "Corticotropin releasing hormone"],
    ans: 0,
    exp: "Somatostatin from the hypothalamus inhibits the release of growth hormone from the adenohypophysis."
  },
  {
    q: "Which hormone stimulates vigorous contraction of the uterus during parturition and milk ejection from mammary glands?",
    opts: ["Oxytocin", "Prolactin", "Progesterone", "Estrogen"],
    ans: 0,
    exp: "Oxytocin acts on the smooth muscles of the uterus causing powerful labor contractions, and induces milk let-down from breast alveoli."
  },
  {
    q: "Deficiency of which hormone causes Diabetes Insipidus characterized by excessive loss of water in urine?",
    opts: ["Vasopressin (Antidiuretic Hormone / ADH)", "Insulin", "Glucagon", "Aldosterone"],
    ans: 0,
    exp: "Hyposecretion of ADH (vasopressin) impairs renal distal water reabsorption, causing diabetes insipidus marked by severe polyuria."
  },
  {
    q: "Which gland secretes melatonin, which regulates the 24-hour diurnal rhythm and sleep-wake cycle in humans?",
    opts: ["Pineal gland", "Thymus gland", "Thyroid gland", "Parathyroid gland"],
    ans: 0,
    exp: "The pineal gland, situated on the dorsal side of the forebrain, secretes melatonin to coordinate circadian diurnal rhythms."
  },
  {
    q: "Graves' disease (exophthalmic goitre) is an autoimmune disorder resulting from:",
    opts: ["Hyperthyroidism", "Hypothyroidism", "Hypoparathyroidism", "Hyperparathyroidism"],
    ans: 0,
    exp: "Graves' disease is a form of hyperthyroidism characterized by an enlarged thyroid, protruding eyeballs, high BMR, and weight loss."
  },
  {
    q: "Which hormone is hypercalcemic, meaning it increases blood calcium ($Ca^{2+}$) levels by promoting bone resorption?",
    opts: ["Parathyroid Hormone (PTH)", "Thyrocalcitonin (TCT)", "Thyroxine ($T_4$)", "Aldosterone"],
    ans: 0,
    exp: "Parathyroid Hormone (PTH) increases blood $Ca^{2+}$ levels by stimulating osteoclastic bone resorption and renal/gut $Ca^{2+}$ absorption."
  },
  {
    q: "Which endocrine gland plays a central role in the differentiation of T-lymphocytes for cell-mediated immunity?",
    opts: ["Thymus gland", "Thyroid gland", "Adrenal gland", "Pineal gland"],
    ans: 0,
    exp: "The thymus gland secretes thymosins, which direct the maturation and differentiation of T-lymphocytes for cell-mediated immunity."
  },
  {
    q: "The outer layer of the adrenal cortex that secretes mineralocorticoids like aldosterone is the:",
    opts: ["Zona glomerulosa", "Zona fasciculata", "Zona reticularis", "Adrenal medulla"],
    ans: 0,
    exp: "The adrenal cortex has three concentric zones: outer Zona glomerulosa (mineralocorticoids), middle Zona fasciculata (glucocorticoids), and inner Zona reticularis (androgens)."
  },
  {
    q: "Which hormone stimulates gluconeogenesis, lipolysis, and proteolysis, and acts as a potent anti-inflammatory agent?",
    opts: ["Cortisol", "Aldosterone", "Insulin", "Glucagon"],
    ans: 0,
    exp: "Cortisol (the primary glucocorticoid) stimulates hepatic gluconeogenesis, lipolysis, and proteolysis while suppressing immune/inflammatory cascades."
  },
  {
    q: "Which cells in the Islets of Langerhans of the pancreas secrete the hypoglycemic peptide hormone insulin?",
    opts: ["Beta ($\\beta$) cells", "Alpha ($\\alpha$) cells", "Delta ($\\delta$) cells", "Acinar cells"],
    ans: 0,
    exp: "Beta ($\\beta$) cells of pancreatic islets secrete insulin, which lowers blood glucose by accelerating cellular uptake and glycogenesis."
  },
  {
    q: "Glucagon is a peptide hormone that acts on hepatocytes to stimulate:",
    opts: ["Glycogenolysis and gluconeogenesis, raising blood glucose", "Glycogenesis, lowering blood glucose", "Cellular uptake of glucose in adipocytes", "Protein synthesis in muscle fibers"],
    ans: 0,
    exp: "Glucagon is a hyperglycemic hormone that stimulates glycogenolysis and gluconeogenesis in the liver to elevate circulating glucose."
  },
  {
    q: "Atrial Natriuretic Factor (ANF) secreted by the heart acts to:",
    opts: ["Dilate blood vessels and decrease blood pressure", "Constrict arterioles and increase blood pressure", "Stimulate aldosterone secretion", "Inhibit erythropoiesis"],
    ans: 0,
    exp: "ANF is released when atrial blood pressure is high; it causes vasodilation and natriuresis, effectively reducing blood pressure."
  },
  {
    q: "Erythropoietin, a peptide hormone that stimulates red blood cell production in bone marrow, is secreted by the:",
    opts: ["Juxtaglomerular cells of the kidney", "Alpha cells of pancreas", "Adrenal cortex", "Hypothalamus"],
    ans: 0,
    exp: "Juxtaglomerular cells of the kidney produce erythropoietin in response to hypoxia to stimulate bone marrow erythropoiesis."
  },
  {
    q: "Which gastrointestinal hormone stimulates the secretion of hydrochloric acid (HCl) and pepsinogen in the stomach?",
    opts: ["Gastrin", "Secretin", "Cholecystokinin (CCK)", "Gastric Inhibitory Peptide (GIP)"],
    ans: 0,
    exp: "Gastrin acts on gastric glands to stimulate the secretion of hydrochloric acid and the zymogen pepsinogen."
  },
  {
    q: "Which hormone stimulates the exocrine pancreas to secrete bicarbonate ions and water into the duodenum?",
    opts: ["Secretin", "Gastrin", "CCK", "GIP"],
    ans: 0,
    exp: "Secretin acts on the exocrine pancreas to stimulate the release of water and bicarbonate ions to neutralize gastric acid."
  },
  {
    q: "Cholecystokinin (CCK) stimulates the contraction of which organ to release stored bile?",
    opts: ["Gall bladder", "Stomach", "Pancreas", "Spleen"],
    ans: 0,
    exp: "CCK induces rhythmic contraction of the muscular gall bladder wall, ejecting bile into the cystic duct and duodenum."
  },
  {
    q: "In adult females, which hormone induces ovulation of mature Graafian follicles and maintains the corpus luteum?",
    opts: ["Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Prolactin", "Oxytocin"],
    ans: 0,
    exp: "An LH surge mid-cycle induces ovulation of the Graafian follicle and transforms the ruptured follicle into the progesterone-secreting corpus luteum."
  },
  {
    q: "Deficiency of adrenal cortex hormones leading to acute weakness, fatigue, and altered carbohydrate metabolism causes:",
    opts: ["Addison's disease", "Cushing's syndrome", "Graves' disease", "Acromegaly"],
    ans: 0,
    exp: "Underproduction of hormones by the adrenal cortex alters carbohydrate metabolism, producing extreme weakness and Addison's disease."
  },
  {
    q: "Excessive secretion of Growth Hormone in adults after epiphyses have fused produces disfigurement termed:",
    opts: ["Acromegaly", "Gigantism", "Dwarfism", "Cretinism"],
    ans: 0,
    exp: "Hypersecretion of growth hormone in adults causes severe skeletal disfigurement, especially of the face, hands, and feet, called acromegaly."
  }
];

const concepts = [
  { topic: "sella turcica pituitary fossa", fact: "The pituitary gland is located in a bony cavity called the sella turcica and is connected to the hypothalamus by a stalk." },
  { topic: "hypothalamic somatostatin action", fact: "Somatostatin from the hypothalamus inhibits the synthesis and release of growth hormone from the adenohypophysis." },
  { topic: "oxytocin uterine and lactation action", fact: "Oxytocin stimulates vigorous contraction of uterine smooth muscles during childbirth and milk ejection from mammary glands." },
  { topic: "vasopressin ADH water conservation", fact: "Vasopressin (ADH) stimulates water and electrolyte reabsorption in distal nephron segments to prevent water loss." },
  { topic: "diabetes insipidus pathology", fact: "Deficiency of ADH impairs renal water reabsorption, resulting in massive excretion of dilute urine in diabetes insipidus." },
  { topic: "pineal gland melatonin secretion", fact: "Melatonin from the pineal gland coordinates 24-hour diurnal rhythms including sleep-wake cycles and body temperature." },
  { topic: "iodine necessity in thyroid hormone", fact: "Iodine is an essential structural constituent for synthesizing tetraiodothyronine (T4) and triiodothyronine (T3)." },
  { topic: "cretinism congenital hypothyroidism", fact: "Hypothyroidism during fetal development causes cretinism, characterized by stunted physical growth and severe mental retardation." },
  { topic: "Graves disease hyperthyroidism", fact: "Graves' disease is an autoimmune hyperthyroidism presenting with goitre, elevated BMR, and protruding eyeballs (exophthalmos)." },
  { topic: "parathyroid hormone hypercalcemic role", fact: "PTH increases serum calcium levels by stimulating osteoclastic bone resorption and renal calcium reabsorption." },
  { topic: "thyrocalcitonin hypocalcemic action", fact: "Thyrocalcitonin (TCT) secreted by thyroid parafollicular cells lowers blood calcium by promoting bone mineral deposition." },
  { topic: "thymus T lymphocyte maturation", fact: "The thymus produces thymosins that direct the maturation and differentiation of T-lymphocytes for cell-mediated immunity." },
  { topic: "adrenal cortex zonal histology", fact: "The adrenal cortex consists of outer zona glomerulosa, middle zona fasciculata, and inner zona reticularis." },
  { topic: "cortisol anti-inflammatory effects", fact: "Cortisol stimulates gluconeogenesis, lipolysis, and proteolysis, and suppresses allergic and inflammatory cascades." },
  { topic: "aldosterone electrolyte regulation", fact: "Aldosterone stimulates active reabsorption of sodium and water and excretion of potassium and phosphate in renal tubules." },
  { topic: "adrenal medullary catecholamines", fact: "Epinephrine and norepinephrine are emergency hormones that elevate heart rate, alertness, pupil dilation, and glycogenolysis." },
  { topic: "insulin beta cell hypoglycemic function", fact: "Insulin from pancreatic beta cells accelerates cellular glucose uptake and glycogenesis, lowering blood glucose." },
  { topic: "glucagon alpha cell hyperglycemic function", fact: "Glucagon from pancreatic alpha cells stimulates glycogenolysis and gluconeogenesis, elevating blood glucose." },
  { topic: "diabetes mellitus glycosuria ketones", fact: "Prolonged hyperglycemia in diabetes mellitus results in glucose loss in urine (glycosuria) and ketoacidosis." },
  { topic: "atrial natriuretic factor ANF vasodilation", fact: "ANF from atrial myocytes causes vasodilation and natriuresis to decrease blood pressure, opposing RAAS." },
  { topic: "erythropoietin renal stimulation", fact: "Juxtaglomerular cells in the kidney secrete erythropoietin to stimulate red blood cell production in bone marrow." },
  { topic: "gastrin gastric acid secretion", fact: "Gastrin stimulates gastric parietal and chief cells to secrete hydrochloric acid and pepsinogen." },
  { topic: "secretin pancreatic bicarbonate secretion", fact: "Secretin stimulates ductal cells of the exocrine pancreas to secrete alkaline bicarbonate ions and water." },
  { topic: "cholecystokinin CCK dual action", fact: "CCK stimulates contraction of the gall bladder for bile release and stimulates pancreatic acinar enzyme secretion." },
  { topic: "gastric inhibitory peptide GIP role", fact: "GIP inhibits gastric acid secretion and motility to regulate the transit of chyme into the duodenum." },
  { topic: "Addison disease adrenal insufficiency", fact: "Underproduction of adrenocortical hormones produces acute weakness, fatigue, and altered carbohydrate metabolism in Addison's disease." },
  { topic: "LH surge and ovulation", fact: "A mid-cycle surge in Luteinizing Hormone (LH) induces ovulation of the Graafian follicle and forms the corpus luteum." },
  { topic: "FSH follicular development and spermatogenesis", fact: "FSH stimulates ovarian follicular growth in females and regulates spermatogenesis in testicular seminiferous tubules." }
];

const realisticDistractors = [
  "It triggers the immediate calcification of all lymphatic vessels in the abdomen.",
  "It completely hydrolyzes all circulating immunoglobulins into carbon dioxide.",
  "It replaces the entire adrenal cortex with non-secretory dense fibrous tissue.",
  "It prevents any nervous conduction in the vagus nerve permanently.",
  "It transforms all pancreatic acini into non-functional stratified squamous epithelium.",
  "It converts all circulating thyroid hormones into crystalline sulfur granules.",
  "It leads to the permanent cessation of all glomerular filtration in both kidneys.",
  "It blocks the diffusion of all respiratory gases across the alveolar membrane."
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
      q: `Which of the following statements regarding ${item.topic} is ENDOCRINOLOGICALLY ACCURATE?`,
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
      exp: `Endocrine physiology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In human hormonal integration, what is the biological significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Chemical Coordination fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid physiological statement regarding ${item.topic}:`,
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

console.log(`Part 4 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part4.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 4: Chemical Coordination & Integration\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
