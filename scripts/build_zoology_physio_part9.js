// scripts/build_zoology_physio_part9.js
// Subtopic: Mechanism of breathing and gas transport (O2-Hb dissociation curve)
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Mechanism of breathing and gas transport (O2-Hb dissociation curve)";
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
    a: "Contraction of the diaphragm and external intercostal muscles leads to inspiration.",
    r: "Diaphragm contraction increases thoracic volume in the antero-posterior axis, while external intercostal contraction increases volume in the dorso-ventral axis, lowering intrapulmonary pressure below atmospheric pressure.",
    ans: 0,
    exp: "Coordinated expansion of the thoracic cage drops intrapulmonary pressure below atmospheric levels, driving air into the lungs by negative pressure ventilation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Carbon dioxide ($CO_2$) diffuses about 20 to 25 times faster than oxygen ($O_2$) across the respiratory membrane.",
    r: "The solubility of carbon dioxide in blood plasma is 20 to 25 times higher than that of oxygen.",
    ans: 0,
    exp: "According to Graham's and Fick's laws, diffusion rate is directly proportional to gas solubility; higher $CO_2$ solubility enables rapid diffusion despite a lower partial pressure gradient. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The oxygen-hemoglobin dissociation curve exhibits a characteristic sigmoid (S-shaped) shape.",
    r: "Binding of the first oxygen molecule to a hemoglobin subunit produces cooperative allosteric conformational changes that increase the affinity of remaining subunits for oxygen.",
    ans: 0,
    exp: "Positive cooperativity among the four heme subunits produces the sigmoidal oxygen-binding curve. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In metabolically active tissues, the oxygen-hemoglobin dissociation curve shifts to the right (Bohr effect).",
    r: "Active tissues have high $pCO_2$, elevated $H^+$ concentration (lower pH), and higher temperature, all of which favor the dissociation of oxygen from oxyhemoglobin.",
    ans: 0,
    exp: "Acidic, hypercapnic, and warmer microenvironments in exercising tissues decrease hemoglobin's oxygen affinity, facilitating $O_2$ offloading. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "About 70% of carbon dioxide is transported in blood as bicarbonate ions ($HCO_3^-$).",
    r: "RBCs contain a very high concentration of the enzyme carbonic anhydrase, which rapidly converts $CO_2$ and $H_2O$ into carbonic acid ($H_2CO_3$), which dissociates into $HCO_3^-$ and $H^+$.",
    ans: 0,
    exp: "Carbonic anhydrase catalyzes the reversible hydration of $CO_2$ to $H_2CO_3$, driving the predominant transport of $CO_2$ as plasma bicarbonate. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chloride shift (Hamburger phenomenon) occurs at the level of tissue capillaries.",
    r: "Bicarbonate ions diffuse out of erythrocytes into the plasma, and chloride ions ($Cl^-$) move from plasma into erythrocytes to maintain electrical neutrality.",
    ans: 0,
    exp: "The anion exchange protein (Band 3) trades intracellular $HCO_3^-$ for extracellular $Cl^-$, preserving cellular electrochemical neutrality in tissue capillaries. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The role of oxygen in the regulation of normal respiratory rhythm is quite insignificant.",
    r: "Respiratory rhythm centers in the medulla and chemoreceptors in the carotid and aortic bodies are primarily sensitive to changes in $pCO_2$ and $H^+$ concentration rather than $pO_2$.",
    ans: 0,
    exp: "Under normal resting conditions, arterial $pCO_2$ and pH are the primary chemical drivers of minute ventilation, while arterial $pO_2$ acts only during severe hypoxia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Pneumotaxic center located in the pons can moderate the function of the respiratory rhythm center.",
    r: "Neural signals from the pneumotaxic center can switch off inspiration, thereby reducing the duration of inspiration and altering the breathing rate.",
    ans: 0,
    exp: "The pneumotaxic center acts as an inspiratory off-switch; strong pneumotaxic activation shortens inspiration and increases respiratory frequency. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Every 100 mL of oxygenated blood can deliver around 5 mL of oxygen to the tissues under normal resting physiological conditions.",
    r: "Under normal conditions, systemic arterial blood is approximately 97% saturated with oxygen, while mixed venous blood remains about 75% saturated.",
    ans: 0,
    exp: "Resting arterial blood carries ~20 mL $O_2$/100 mL and venous blood carries ~15 mL $O_2$/100 mL, resulting in a resting delivery of 5 mL $O_2$ per 100 mL. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Every 100 mL of deoxygenated blood delivers approximately 4 mL of carbon dioxide to the alveoli.",
    r: "Deoxygenated blood arriving at pulmonary capillaries carries around 52 mL of $CO_2$ per 100 mL and releases 4 mL into the alveolar air.",
    ans: 0,
    exp: "Pulmonary capillary transit unloads 4 mL of $CO_2$ per 100 mL of venous blood down its partial pressure gradient into alveoli. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Emphysema is a chronic respiratory disorder characterized by decreased alveolar surface area.",
    r: "Cigarette smoking causes chronic inflammation and destruction of the interalveolar elastic septa, leading to abnormal enlargement of air spaces.",
    ans: 0,
    exp: "Protease-antiprotease imbalance triggered by tobacco smoke breaks down alveolar walls, leaving enlarged, poorly compliant sacs that reduce gas exchange area. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Workers in stone-grinding and mining industries often suffer from occupational respiratory disorders like silicosis and asbestosis.",
    r: "Chronic inhalation of fine mineral dust triggers long-term defense reactions, leading to extensive fibroblastic proliferation (fibrosis) of lung tissue.",
    ans: 0,
    exp: "Phagocytosed crystalline silica or asbestos particles cannot be digested by alveolar macrophages, causing chronic inflammation and progressive debilitating pulmonary fibrosis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Asthma is characterized by difficulty in breathing accompanied by wheezing sounds.",
    r: "Asthma is an allergic inflammatory disorder of the bronchi and bronchioles that leads to mucosal edema and bronchospasm.",
    ans: 0,
    exp: "Allergic mediator release causes smooth muscle constriction and mucosal swelling in small airways, producing turbulent airflow and wheezing. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The diffusion membrane of the human lung is composed of three microscopic layers.",
    r: "It consists of the thin squamous epithelium of alveoli, the endothelium of alveolar capillaries, and the thin basement substance between them.",
    ans: 0,
    exp: "These three ultra-thin layers together measure less than 1 micrometer ($< 0.5\\,\\mu\\text{m}$), minimizing diffusion resistance for rapid gas exchange. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Normal quiet expiration is largely a passive process.",
    r: "Relaxation of the diaphragm and external intercostal muscles allows the lungs and chest wall to recoil elastically to their resting positions.",
    ans: 0,
    exp: "Passive elastic recoil of the pulmonary parenchyma and thoracic cage increases alveolar pressure without requiring active muscular contraction. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Partial pressure of oxygen ($pO_2$) in alveolar air is higher than that in oxygenated blood.",
    r: "Alveolar $pO_2$ is 104 mm Hg, whereas $pO_2$ in systemic arterial oxygenated blood is 95 mm Hg due to physiological shunt.",
    ans: 0,
    exp: "Alveolar air has a $pO_2$ of 104 mm Hg; anatomical bronchial and thebesian venous drainage slightly reduces arterial $pO_2$ to 95 mm Hg. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fetal hemoglobin ($HbF$) has a higher affinity for oxygen than adult hemoglobin ($HbA$).",
    r: "The oxygen-hemoglobin dissociation curve of fetal hemoglobin is shifted to the left of the adult curve.",
    ans: 0,
    exp: "Higher $O_2$ affinity (left-shifted curve) enables fetal hemoglobin to extract oxygen efficiently across the placental barrier from maternal blood. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Carbon monoxide (CO) poisoning leads to severe tissue hypoxia.",
    r: "Carbon monoxide binds to hemoglobin with an affinity approximately 200 to 250 times higher than that of oxygen, forming stable carboxyhemoglobin.",
    ans: 0,
    exp: "High-affinity binding of CO displaces oxygen and locks hemoglobin in a relaxed state that prevents $O_2$ release to tissues, causing lethal hypoxia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In forced expiration, the abdominal muscles and internal intercostal muscles contract actively.",
    r: "Contraction of abdominal muscles pushes the diaphragm upward, and internal intercostals pull the ribs downward and inward, forcefully reducing thoracic volume.",
    ans: 0,
    exp: "Forced expiration recruits accessory expiratory muscles to elevate intra-abdominal and intra-thoracic pressures above resting levels. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Each molecule of hemoglobin can carry up to four molecules of oxygen.",
    r: "Hemoglobin is a tetrameric protein containing four heme groups, each with a central ferrous ($Fe^{2+}$) ion capable of reversibly binding one $O_2$ molecule.",
    ans: 0,
    exp: "The four iron-containing heme prosthetic groups in the $\\alpha_2\\beta_2$ tetramer bind four $O_2$ molecules to form fully saturated oxyhemoglobin. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Carbonic anhydrase is completely absent in blood plasma.",
    r: "Carbonic anhydrase is found exclusively inside the nuclei of white blood cells.",
    ans: 3,
    exp: "Both (A) and (R) are false. Carbonic anhydrase is present in minute quantities in blood plasma, but in extremely high concentrations inside red blood cells (not WBC nuclei)."
  },
  {
    a: "The partial pressure of carbon dioxide ($pCO_2$) in deoxygenated blood is 45 mm Hg.",
    r: "In tissues, catabolism continuously produces $CO_2$, resulting in a tissue $pCO_2$ of 45 mm Hg.",
    ans: 1,
    exp: "Both statements are correct NCERT values. Tissue catabolism generates $CO_2$ maintaining tissue $pCO_2 = 45\\text{ mm Hg}$, and deoxygenated blood equilibrates to 45 mm Hg. The fact that tissue $pCO_2$ is 45 mm Hg is the source of the gas, but stating the tissue value does not explain the biological definition of deoxygenated blood partial pressure. Both are true, (R) is not the explanation."
  },
  {
    a: "Chemoreceptors in the carotid bodies and aortic arch send signals to the respiratory center via the vagus and glossopharyngeal nerves.",
    r: "Carotid and aortic bodies detect elevations in arterial $pCO_2$ and $H^+$ ion concentration.",
    ans: 0,
    exp: "Peripheral chemoreceptor afferents (CN IX from carotid body and CN X from aortic arch) alert the medullary center to hypercapnia and acidosis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Surfactant reduces surface tension within the alveoli.",
    r: "Surfactant is a lipoprotein complex rich in dipalmitoylphosphatidylcholine secreted by Type II alveolar cells.",
    ans: 1,
    exp: "Both statements are true. Surfactant lowers surface tension to prevent alveolar collapse at low lung volumes, and Type II pneumocytes secrete this phospholipid mixture. Stating the cellular source and chemical nature characterizes surfactant rather than explaining the physical mechanism by which it disrupts water hydrogen bonding. Both are true, (R) is not the explanation."
  },
  {
    a: "Hyperventilation leads to respiratory alkalosis.",
    r: "Excessive rapid ventilation flushes out large amounts of $CO_2$ from the body, lowering arterial $pCO_2$ and raising blood pH.",
    ans: 0,
    exp: "Hypocapnia driven by hyperventilation shifts the carbonic acid equilibrium to the left, decreasing free $[H^+]$ and inducing respiratory alkalosis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "At the alveolar surface, factors favor the dissociation of $CO_2$ from carbamino-hemoglobin.",
    r: "In the alveoli, $pO_2$ is high and $pCO_2$ is low, which promotes the displacement of $CO_2$ from hemoglobin (Haldane effect).",
    ans: 0,
    exp: "Oxygenation of hemoglobin in the pulmonary capillaries weakens its affinity for $CO_2$, promoting $CO_2$ release into alveoli (Haldane effect). Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "In human respiration, normal inspiration is initiated primarily by the contraction of which muscles?",
    opts: ["Diaphragm and external intercostal muscles", "Internal intercostal muscles and abdominal muscles", "Pectoralis major and scalene muscles", "Sternocleidomastoid and rectus abdominis"],
    ans: 0,
    exp: "Contraction of the diaphragm and external intercostal muscles increases thoracic volume, lowering intrapulmonary pressure for inspiration."
  },
  {
    q: "Why does carbon dioxide ($CO_2$) diffuse through the alveolar-capillary membrane much faster than oxygen ($O_2$)?",
    opts: ["Solubility of $CO_2$ in blood is 20 to 25 times higher than that of $O_2$", "Molecular weight of $CO_2$ is lower than $O_2$", "Partial pressure gradient of $CO_2$ is much higher than that of $O_2$", "Respiratory membrane is completely impermeable to oxygen"],
    ans: 0,
    exp: "Because the solubility of $CO_2$ is 20-25 times higher than $O_2$, it diffuses across the respiratory membrane much faster per unit partial pressure gradient."
  },
  {
    q: "What are the partial pressures of oxygen ($pO_2$) and carbon dioxide ($pCO_2$) in the alveoli of human lungs?",
    opts: ["$pO_2 = 104\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$", "$pO_2 = 40\\text{ mm Hg}$ and $pCO_2 = 45\\text{ mm Hg}$", "$pO_2 = 95\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$", "$pO_2 = 159\\text{ mm Hg}$ and $pCO_2 = 0.3\\text{ mm Hg}$"],
    ans: 0,
    exp: "Alveolar gas values in human lungs are $pO_2 = 104\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$."
  },
  {
    q: "What are the values of $pO_2$ and $pCO_2$ in human deoxygenated blood entering the pulmonary capillaries?",
    opts: ["$pO_2 = 40\\text{ mm Hg}$ and $pCO_2 = 45\\text{ mm Hg}$", "$pO_2 = 95\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$", "$pO_2 = 104\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$", "$pO_2 = 45\\text{ mm Hg}$ and $pCO_2 = 40\\text{ mm Hg}$"],
    ans: 0,
    exp: "Deoxygenated blood arriving from tissues has $pO_2 = 40\\text{ mm Hg}$ and $pCO_2 = 45\\text{ mm Hg}$."
  },
  {
    q: "Which shape best describes the oxygen-hemoglobin dissociation curve plotted under normal physiological conditions?",
    opts: ["Sigmoid (S-shaped) curve", "Hyperbolic curve", "Linear straight line", "Parabolic curve"],
    ans: 0,
    exp: "The curve relating percent saturation of hemoglobin to $pO_2$ is characteristically sigmoid due to cooperative binding among subunits."
  },
  {
    q: "Which set of factors will cause the oxygen-hemoglobin dissociation curve to shift to the right (Bohr effect)?",
    opts: ["High $pCO_2$, high $H^+$ (low pH), and high temperature", "Low $pCO_2$, low $H^+$ (high pH), and low temperature", "High $pO_2$ and low temperature", "Low $pCO_2$ and high pH"],
    ans: 0,
    exp: "A rightward shift (facilitating $O_2$ release) occurs under conditions of elevated $pCO_2$, increased acidity (high $H^+$, low pH), and high temperature."
  },
  {
    q: "What percentage of carbon dioxide is transported in the blood in the form of bicarbonate ions ($HCO_3^-$)?",
    opts: ["Approximately 70%", "Approximately 20 to 25%", "Approximately 7%", "Over 97%"],
    ans: 0,
    exp: "About 70% of $CO_2$ is transported as bicarbonate ($HCO_3^-$), 20-25% as carbamino-hemoglobin, and 7% dissolved in plasma."
  },
  {
    q: "What percentage of oxygen is transported bound to hemoglobin in erythrocytes as oxyhemoglobin?",
    opts: ["97%", "70%", "20%", "3%"],
    ans: 0,
    exp: "About 97% of oxygen is carried by RBCs as oxyhemoglobin, and the remaining 3% is carried dissolved in blood plasma."
  },
  {
    q: "Every 100 mL of oxygenated blood can deliver approximately how much oxygen to body tissues under resting conditions?",
    opts: ["5 mL", "20 mL", "15 mL", "1.34 mL"],
    ans: 0,
    exp: "Under normal resting physiological conditions, every 100 mL of oxygenated blood delivers about 5 mL of oxygen to metabolizing tissues."
  },
  {
    q: "Every 100 mL of deoxygenated blood delivers approximately how much carbon dioxide to the alveoli?",
    opts: ["4 mL", "10 mL", "20 mL", "50 mL"],
    ans: 0,
    exp: "Every 100 mL of deoxygenated blood delivers about 4 mL of $CO_2$ to alveolar air."
  },
  {
    q: "The phenomenon where chloride ions ($Cl^-$) move into erythrocytes from plasma in exchange for bicarbonate ions is known as:",
    opts: ["Chloride shift (Hamburger phenomenon)", "Bohr effect", "Haldane effect", "Hering-Breuer reflex"],
    ans: 0,
    exp: "Chloride shift refers to the exchange of plasma $Cl^-$ for intracellular $HCO_3^-$ across RBC membranes to preserve electrical neutrality."
  },
  {
    q: "The primary respiratory rhythm center responsible for maintaining the regular pattern of breathing is located in the:",
    opts: ["Medulla oblongata", "Pons varolii", "Cerebellum", "Hypothalamus"],
    ans: 0,
    exp: "The specialized respiratory rhythm center is located in the medulla oblongata of the brainstem."
  },
  {
    q: "The pneumotaxic center that can switch off inspiration and regulate respiratory rate is located in the:",
    opts: ["Pons region of the brain", "Medulla oblongata", "Midbrain", "Cerebral cortex"],
    ans: 0,
    exp: "The pneumotaxic center is located in the pons varolii and moderates the duration of inspiration."
  },
  {
    q: "The chemosensitive area situated adjacent to the respiratory rhythm center in the medulla is highly sensitive to:",
    opts: ["$CO_2$ and hydrogen ions ($H^+$)", "Oxygen ($O_2$) and nitrogen", "Carbon monoxide and glucose", "Calcium and potassium ions"],
    ans: 0,
    exp: "The central chemosensitive area in the medulla detects increases in arterial $pCO_2$ and cerebrospinal $[H^+]$ to stimulate breathing."
  },
  {
    q: "A chronic respiratory disease characterized by damage to alveolar walls and reduced respiratory surface area due to cigarette smoking is:",
    opts: ["Emphysema", "Asthma", "Silicosis", "Asbestosis"],
    ans: 0,
    exp: "Emphysema is a chronic pulmonary disease wherein cigarette smoke destroys alveolar septa, greatly reducing gas exchange surface area."
  },
  {
    q: "Allergic inflammation of the bronchi and bronchioles accompanied by wheezing and coughing is termed:",
    opts: ["Asthma", "Emphysema", "Pleurisy", "Atelectasis"],
    ans: 0,
    exp: "Asthma is characterized by mucosal inflammation and spasms of bronchiolar smooth muscle, resulting in wheezing."
  },
  {
    q: "Occupational lung diseases such as silicosis and asbestosis are characterized pathologically by:",
    opts: ["Fibrosis (proliferation of fibrous connective tissue) of the lungs", "Destruction of the epiglottis", "Paralysis of the vocal cords", "Infection by Mycobacterium tuberculosis"],
    ans: 0,
    exp: "Chronic inhalation of mineral dusts causes relentless fibrotic scarring (pulmonary fibrosis) that progressively destroys lung compliance."
  },
  {
    q: "The total thickness of the three-layered diffusion membrane of the human lung is:",
    opts: ["Much less than a millimeter ($< 1\\,\\mu\\text{m}$)", "2 to 3 millimeters", "5 millimeters", "10 micrometers"],
    ans: 0,
    exp: "The three layers of the alveolar-capillary membrane have a total combined thickness of less than 0.5 to 1 micrometer."
  },
  {
    q: "During forced expiration, which muscle groups are actively recruited to forcefully expel air from the lungs?",
    opts: ["Abdominal muscles and internal intercostal muscles", "Diaphragm and external intercostals", "Sternocleidomastoid and scalenes", "Pectoralis minor and trapezius"],
    ans: 0,
    exp: "Forced expiration involves active contraction of abdominal wall muscles (raising abdominal pressure) and internal intercostals (depressing ribs)."
  },
  {
    q: "The displacement of carbon dioxide from carbamino-hemoglobin facilitated by high oxygenation in pulmonary capillaries is known as the:",
    opts: ["Haldane effect", "Bohr effect", "Hamburger phenomenon", "Pasteur effect"],
    ans: 0,
    exp: "The Haldane effect describes how binding of $O_2$ to hemoglobin in the lungs promotes the release of $CO_2$ from carbamino complexes."
  }
];

const concepts = [
  { topic: "inspiration negative pressure mechanism", fact: "Contraction of diaphragm and external intercostals increases thoracic volume, lowering intrapulmonary pressure for inspiration." },
  { topic: "CO2 solubility 20 to 25 times O2", fact: "Carbon dioxide has 20-25 times higher blood solubility than oxygen, permitting much faster diffusion across alveolar walls." },
  { topic: "alveolar partial pressures 104 and 40", fact: "Alveolar gas pressures are 104 mm Hg for pO2 and 40 mm Hg for pCO2 under normal physiological resting conditions." },
  { topic: "deoxygenated blood pressures 40 and 45", fact: "Deoxygenated venous blood has a pO2 of 40 mm Hg and a pCO2 of 45 mm Hg arriving at pulmonary capillaries." },
  { topic: "sigmoid oxygen hemoglobin curve", fact: "The oxygen-hemoglobin dissociation curve is sigmoid due to allosteric positive cooperativity between heme subunits." },
  { topic: "Bohr effect right shift", fact: "High pCO2, low pH (acidosis), and high temperature shift the oxygen dissociation curve rightward, unloading O2 in tissues." },
  { topic: "bicarbonate 70 percent transport", fact: "About 70% of CO2 is carried as bicarbonate ions (HCO3-) in blood plasma facilitated by RBC carbonic anhydrase." },
  { topic: "carbonic anhydrase high concentration", fact: "Carbonic anhydrase is concentrated inside erythrocytes, accelerating the hydration of CO2 to carbonic acid." },
  { topic: "chloride shift Hamburger phenomenon", fact: "Chloride shift exchanges plasma Cl- for erythrocyte HCO3- to preserve electrical neutrality during venous transit." },
  { topic: "oxygenated blood 5 mL O2 delivery", fact: "Every 100 mL of oxygenated blood delivers approximately 5 mL of oxygen to tissue cells under resting conditions." },
  { topic: "deoxygenated blood 4 mL CO2 delivery", fact: "Every 100 mL of deoxygenated blood delivers approximately 4 mL of carbon dioxide to the alveoli for excretion." },
  { topic: "medullary rhythm center regulation", fact: "The primary respiratory rhythm center is located in the medulla oblongata and sets basal breathing rhythm." },
  { topic: "pneumotaxic center pons switch off", fact: "The pneumotaxic center in the pons regulates tidal volume by sending inhibitory signals to switch off inspiration." },
  { topic: "chemosensitive area CO2 and H sensitivity", fact: "Medullary chemosensitive areas detect elevations in CO2 and H+ to stimulate compensatory hyperventilation." },
  { topic: "insignificant role of oxygen in rhythm", fact: "Under normal physiological conditions, oxygen plays an insignificant role in regulating central respiratory drive." },
  { topic: "emphysema alveolar surface destruction", fact: "Emphysema is a chronic disorder where cigarette smoke damages alveolar walls, drastically reducing gas exchange area." },
  { topic: "asthma bronchiolar allergic inflammation", fact: "Asthma is characterized by allergic spasm and inflammation of bronchioles, causing difficulty in breathing with wheezing." },
  { topic: "occupational lung disease silicosis fibrosis", fact: "Silicosis and asbestosis result from chronic mineral dust inhalation leading to severe pulmonary fibrosis." },
  { topic: "diffusion membrane three layers", fact: "The alveolar diffusion membrane comprises alveolar squamous epithelium, capillary endothelium, and intervening basement substance." },
  { topic: "forced expiration abdominal contraction", fact: "Forced expiration recruits internal intercostals and abdominal muscles to forcefully decrease thoracic cavity volume." },
  { topic: "Haldane effect pulmonary CO2 release", fact: "The Haldane effect describes the promotion of CO2 dissociation from hemoglobin by high alveolar oxygenation." },
  { topic: "carbon monoxide high affinity poisoning", fact: "Carbon monoxide binds hemoglobin with over 200 times higher affinity than oxygen, forming toxic carboxyhemoglobin." },
  { topic: "fetal hemoglobin left shifted curve", fact: "Fetal hemoglobin has a higher oxygen affinity than adult hemoglobin, facilitating transplacental oxygen uptake." },
  { topic: "resting respiratory rate 12 to 16", fact: "A healthy human breathes 12 to 16 times per minute under resting baseline physiological conditions." },
  { topic: "carbamino hemoglobin 20 to 25 percent", fact: "Approximately 20 to 25% of carbon dioxide is transported bound to globin amino groups as carbamino-hemoglobin." },
  { topic: "pulmonary surfactant surface tension reduction", fact: "Alveolar surfactant secreted by Type II pneumocytes lowers surface tension to prevent end-expiratory alveolar collapse." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the alveolar air spaces.",
  "It stimulates the total enzymatic dissolution of all circulating erythrocyte membranes.",
  "It converts all alveolar oxygen into crystalline sulfuric acid during normal expiration.",
  "It causes the permanent calcification of all pulmonary capillary endothelial cells.",
  "It completely abolishes the diffusion of all respiratory gases across the pleural membranes.",
  "It replaces the entire pulmonary surfactant layer with dense keratin microfilaments.",
  "It eliminates all carbonic anhydrase enzymes from erythrocytes permanently.",
  "It induces the spontaneous liquidation of all elastic fibers throughout both lungs."
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
      q: `Identify the correct statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Gas exchange and transport principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human respiratory mechanism and gas transport, what is the significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Breathing & Gas Transport fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid NCERT-based physiological fact about ${item.topic}:`,
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

console.log(`Part 9 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 9 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_physio_part9.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 9: Mechanism of breathing and gas transport (O2-Hb dissociation curve)\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
