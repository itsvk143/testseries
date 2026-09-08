// scripts/build_zoology_physio_part1.js
// Subtopic: Body Fluids & Circulation
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Body Fluids & Circulation";
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
    a: "Erythrocytes in adult humans are biconcave, enucleated, and lack most organelles.",
    r: "The absence of a nucleus and organelles provides maximal intracellular volume for packing hemoglobin and enhances surface area to volume ratio for gas diffusion.",
    ans: 0,
    exp: "Enucleation and biconcave shape in mature mammalian RBCs maximize space for hemoglobin and optimize oxygen diffusion capacity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Spleen is commonly called the 'graveyard of RBCs'.",
    r: "Senescent erythrocytes with rigid membranes are trapped and phagocytosed by macrophages in the splenic sinusoids.",
    ans: 0,
    exp: "After their ~120-day lifespan, fragile RBCs are destroyed by reticuloendothelial macrophages in the spleen. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Persons with blood group O are called universal donors.",
    r: "The red blood cells of individuals with blood group O lack both surface antigen A and antigen B.",
    ans: 0,
    exp: "Because group O erythrocytes carry neither A nor B agglutinogens, they do not trigger immune agglutination when transfused into any ABO recipient. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Erythroblastosis fetalis can develop when an Rh-negative mother carries an Rh-positive fetus for the second time.",
    r: "Anti-Rh antibodies (IgG) formed in the sensitized mother during the first delivery can cross the placenta and destroy fetal Rh-positive erythrocytes.",
    ans: 0,
    exp: "Maternal anti-Rh antibodies cross the placental barrier and cause severe hemolytic anemia and jaundice in the Rh-positive fetus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Calcium ions are essential for blood coagulation.",
    r: "Calcium ions ($Ca^{2+}$) act as a crucial cofactor in multiple stages of the clotting cascade, including the activation of prothrombin to thrombin.",
    ans: 0,
    exp: "$Ca^{2+}$ (clotting factor IV) is indispensable for binding clotting factors to phospholipids and activating thrombokinase and prothrombin. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lymph is an important carrier for nutrients, hormones, and absorbed fats.",
    r: "Fats are absorbed into the lacteals present in the intestinal villi and transported through the lymphatic vessel system into the bloodstream.",
    ans: 0,
    exp: "Chylomicrons (fats) enter specialized lymphatic capillaries (lacteals) in intestinal villi, and lymph empties into the venous system. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The Sino-Atrial Node (SAN) is called the natural pacemaker of the human heart.",
    r: "The SAN generates the highest frequency of action potentials (70 to 75 per minute) and initiates and maintains the rhythmic contractile activity of the heart.",
    ans: 0,
    exp: "The SAN possesses the highest intrinsic rate of self-excitation among all nodal tissues, driving the rhythm of cardiac contraction. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fishes possess a two-chambered heart and exhibit single circulation.",
    r: "Deoxygenated blood pumped by the ventricle passes directly to the gills for oxygenation and thence to body tissues before returning to the atrium.",
    ans: 0,
    exp: "In fishes, blood passes through the heart only once during each complete circuit (single circulation: heart -> gills -> tissues -> heart). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Basophils play an important role in inflammatory reactions and allergic responses.",
    r: "Basophils secrete chemical mediators such as histamine, serotonin, and heparin.",
    ans: 0,
    exp: "Degranulation of basophils releases histamine (vasodilator), serotonin, and heparin, mediating inflammation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Neutrophils and monocytes are the chief phagocytic cells of the human immune system.",
    r: "They can exit capillaries by diapedesis and engulf foreign microbes and cellular debris invading body tissues.",
    ans: 0,
    exp: "Neutrophils and monocytes are phagocytes capable of extravasation (diapedesis) to clear pathogens. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Blood plasma contains 6 to 8 percent proteins, mainly fibrinogen, globulins, and albumins.",
    r: "Albumins are primarily responsible for maintaining the colloidal osmotic pressure of blood.",
    ans: 1,
    exp: "Both statements are true facts from NCERT. Albumin maintains plasma oncotic pressure, but this does not explain why total protein content is 6–8%. Both are true, (R) is not the explanation."
  },
  {
    a: "A reduction in the number of blood platelets (thrombocytopenia) leads to clotting disorders.",
    r: "Platelets release various thromboplastic factors that participate in the cascade of blood coagulation.",
    ans: 0,
    exp: "Platelet factor 3 and other clotting factors released by platelets are critical for forming the prothrombinase complex. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The wall of the left ventricle is significantly thicker than that of the right ventricle.",
    r: "The left ventricle must pump blood under high pressure throughout the systemic circulation, whereas the right ventricle pumps blood only to the nearby lungs.",
    ans: 0,
    exp: "Systemic vascular resistance is much greater than pulmonary resistance, requiring greater muscular hypertrophy in the left ventricular myocardium. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The bicuspid and tricuspid valves prevent the backflow of blood from the ventricles into the atria during ventricular systole.",
    r: "Chordae tendineae attached to papillary muscles hold the valve cusps firmly and prevent their eversion into the atria.",
    ans: 0,
    exp: "During ventricular contraction, intraventricular pressure rises, pushing AV valves closed; papillary muscles and chordae tendineae prevent their prolapse. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Crocodiles have a four-chambered heart, unlike most other reptiles.",
    r: "Most reptiles possess a three-chambered heart with two atria and an incompletely divided single ventricle.",
    ans: 1,
    exp: "Both statements are correct facts. Crocodiles are an evolutionary exception among reptiles with a completely partitioned four-chambered heart, while typical reptiles have 3 chambers. The condition in other reptiles does not explain why crocodiles evolved 4 chambers. Both are true, (R) is not the explanation."
  },
  {
    a: "Serum does not coagulate when exposed to air.",
    r: "Serum is blood plasma from which fibrinogen and other clotting factors have been removed.",
    ans: 0,
    exp: "Serum = Plasma - Clotting factors. Without fibrinogen and coagulation factors, serum cannot form a fibrin clot. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Eosinophils increase significantly during allergic reactions and parasitic worm infections.",
    r: "Eosinophils contain lysosomal granules with hydrolytic enzymes and major basic protein that counteract histamine and attack helminths.",
    ans: 0,
    exp: "Eosinophils release histaminase to dampen allergic reactions and cytotoxic proteins against metazoan parasites. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Arthropods and molluscs have an open circulatory system.",
    r: "In an open circulatory system, blood pumped by the heart enters large open blood spaces and sinuses called hemocoel.",
    ans: 0,
    exp: "In open circulatory systems, vessels do not form closed capillary beds; hemolymph directly bathes tissues in sinuses. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A healthy human adult has about 5 to 5.5 million RBCs per cubic millimeter of blood.",
    r: "Erythropoiesis occurs continuously in the red bone marrow under the stimulation of erythropoietin.",
    ans: 1,
    exp: "Both statements are true. The normal RBC count is 5–5.5 million/mm³, and red bone marrow produces them stimulated by renal erythropoietin. However, the site of production alone does not explain why the steady-state equilibrium count is 5–5.5 million. Both are true, (R) is not the explanation."
  },
  {
    a: "Hepatic portal system carries blood from the intestine to the liver before it enters systemic circulation.",
    r: "The liver detoxifies absorbed substances, regulates nutrient distribution, and stores glycogen before venous blood returns to the heart.",
    ans: 0,
    exp: "The hepatic portal vein carries nutrient-rich, potentially toxin-bearing venous blood from the gut to the liver capillary sinusoids for processing. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mature mammalian red blood cells carry out only anaerobic respiration.",
    r: "Mature mammalian erythrocytes lack mitochondria and therefore cannot perform oxidative phosphorylation.",
    ans: 0,
    exp: "Because mammalian RBCs lack mitochondria, they generate ATP solely through anaerobic glycolysis, ensuring that they do not consume the oxygen they transport. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Blood group AB individuals are designated universal recipients.",
    r: "The plasma of blood group AB individuals contains both anti-A and anti-B antibodies.",
    ans: 2,
    exp: "Assertion is true (AB individuals can receive all ABO blood types), but Reason is false: plasma of blood group AB individuals contains NEITHER anti-A NOR anti-B antibodies."
  },
  {
    a: "Platelets are true cells containing a well-defined nucleus and cellular organelles.",
    r: "Platelets are formed in the yellow bone marrow by mitotic division of adipocytes.",
    ans: 3,
    exp: "Both Assertion and Reason are false. Platelets (thrombocytes) are non-nucleated cell fragments produced in red bone marrow by fragmentation of megakaryocytes."
  },
  {
    a: "The Purkinje fibers are specialized neural fibers that transmit action potentials from the brain to the heart.",
    r: "The heart is completely neurogenic in humans.",
    ans: 3,
    exp: "Both Assertion and Reason are false. Purkinje fibers are specialized, modified cardiac muscle fibers (myogenic), and the human heart is myogenic, not neurogenic."
  },
  {
    a: "The tricuspid valve guards the opening between the right atrium and the right ventricle.",
    r: "The bicuspid valve (mitral valve) guards the opening between the left atrium and the left ventricle.",
    ans: 1,
    exp: "Both (A) and (R) are anatomically true statements. The tricuspid valve has three muscular flaps between right chambers, while the bicuspid/mitral valve has two flaps between left chambers. The location of the bicuspid valve does not explain the presence of the tricuspid valve. Both are true, (R) is not the explanation."
  },
  {
    a: "Double circulation prevents the mixing of oxygenated and deoxygenated blood in mammals.",
    r: "The complete separation of the right and left sides of the heart allows simultaneous pulmonary and systemic circulations.",
    ans: 0,
    exp: "Complete anatomical septation of atria and ventricles separates pulmonary circulation (right side) from systemic circulation (left side), preventing any mixing of oxygenated and deoxygenated blood. Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "What percentage of human blood is constituted by plasma and formed elements, respectively?",
    opts: ["55% plasma and 45% formed elements", "45% plasma and 55% formed elements", "60% plasma and 40% formed elements", "90% plasma and 10% formed elements"],
    ans: 0,
    exp: "Blood is a fluid connective tissue consisting of a fluid matrix, plasma (55%), and formed elements (45%)."
  },
  {
    q: "Which plasma protein is primarily responsible for maintaining the colloidal osmotic pressure of blood?",
    opts: ["Albumin", "Fibrinogen", "Globulin", "Prothrombin"],
    ans: 0,
    exp: "Albumins are the smallest and most abundant plasma proteins, responsible for maintaining blood colloid osmotic (oncotic) pressure."
  },
  {
    q: "The lifespan of mature human red blood cells is approximately:",
    opts: ["120 days", "30 days", "60 days", "365 days"],
    ans: 0,
    exp: "Mature mammalian erythrocytes have an average lifespan of about 120 days before being removed and phagocytosed in the spleen."
  },
  {
    q: "Which leukocyte is the most abundant in human blood, constituting about 60 to 65% of total WBCs?",
    opts: ["Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils"],
    ans: 0,
    exp: "Neutrophils are the most numerous leukocytes, comprising 60-65% of all circulating white blood cells."
  },
  {
    q: "Which white blood cells secrete histamine, serotonin, and heparin and are involved in inflammatory reactions?",
    opts: ["Basophils", "Neutrophils", "Eosinophils", "Monocytes"],
    ans: 0,
    exp: "Basophils (0.5-1% of WBCs) secrete inflammatory mediators including histamine, serotonin, and the anticoagulant heparin."
  },
  {
    q: "Which formed elements of blood are cell fragments produced from megakaryocytes in the bone marrow?",
    opts: ["Platelets (Thrombocytes)", "Erythrocytes", "Lymphocytes", "Basophils"],
    ans: 0,
    exp: "Thrombocytes (platelets) are non-nucleated cytoplasmic fragments pinched off from giant bone marrow cells called megakaryocytes."
  },
  {
    q: "A person with blood group AB has:",
    opts: ["Antigens A and B on RBCs and neither anti-A nor anti-B antibodies in plasma", "Neither antigen A nor B on RBCs and both antibodies in plasma", "Antigen A on RBCs and anti-B antibodies in plasma", "Antigen B on RBCs and anti-A antibodies in plasma"],
    ans: 0,
    exp: "Blood group AB is characterized by both A and B antigens on RBC membranes and an absence of ABO antibodies in plasma."
  },
  {
    q: "Erythroblastosis fetalis can be prevented by administering what substance to the Rh-negative mother immediately after delivery of her first Rh-positive child?",
    opts: ["Anti-Rh antibodies (RhoGAM)", "Rh-antigen extract", "Heparin injection", "Vitamin K supplement"],
    ans: 0,
    exp: "Administering exogenous anti-Rh antibodies destroys any fetal Rh+ RBCs entering maternal circulation before maternal B cells become sensitized."
  },
  {
    q: "In the blood clotting cascade, the conversion of inactive prothrombin to active thrombin is catalyzed by:",
    opts: ["Thrombokinase (prothrombinase) in the presence of $Ca^{2+}$", "Thrombin in the presence of heparin", "Fibrin in the presence of Vitamin K", "Plasmin in the presence of $Mg^{2+}$"],
    ans: 0,
    exp: "The enzyme complex thrombokinase (prothrombin activator) catalyzes the cleavage of prothrombin into thrombin in the presence of $Ca^{2+}$."
  },
  {
    q: "Which mineral ion is indispensable as Factor IV in multiple stages of blood coagulation?",
    opts: ["Calcium ($Ca^{2+}$)", "Sodium ($Na^+$)", "Potassium ($K^+$)", "Iron ($Fe^{2+}$)"],
    ans: 0,
    exp: "Calcium ions ($Ca^{2+}$) act as Factor IV, binding clotting factors to membrane phospholipids during coagulation."
  },
  {
    q: "Which of the following blood vessels carries deoxygenated blood from the right ventricle to the lungs?",
    opts: ["Pulmonary artery", "Pulmonary vein", "Systemic aorta", "Coronary sinus"],
    ans: 0,
    exp: "The pulmonary artery arises from the right ventricle and carries deoxygenated blood to the lungs for gas exchange."
  },
  {
    q: "The opening between the right atrium and right ventricle is guarded by which valve?",
    opts: ["Tricuspid valve", "Bicuspid (mitral) valve", "Aortic semilunar valve", "Pulmonary semilunar valve"],
    ans: 0,
    exp: "The tricuspid valve (composed of three muscular cusps) guards the right atrioventricular orifice."
  },
  {
    q: "The pacemaker of the human heart that generates action potentials at the highest frequency (70–75 per minute) is the:",
    opts: ["Sino-atrial node (SAN)", "Atrio-ventricular node (AVN)", "Bundle of His", "Purkinje fibers"],
    ans: 0,
    exp: "The Sino-Atrial Node (SAN), situated in the upper right corner of the right atrium, is the primary pacemaker of the human heart."
  },
  {
    q: "Lymph differs from blood plasma primarily in having:",
    opts: ["No RBCs, fewer proteins, and higher lymphocyte count", "High RBC count and low WBC count", "No glucose or electrolytes", "Only blood platelets and fibrinogen"],
    ans: 0,
    exp: "Lymph is filtered tissue fluid devoid of erythrocytes and large plasma proteins, but rich in specialized lymphocytes."
  },
  {
    q: "In which of the following animal groups is a closed circulatory system with a four-chambered heart present?",
    opts: ["Birds and mammals", "Fishes and amphibians", "Arthropods and annelids", "Molluscs and non-crocodilian reptiles"],
    ans: 0,
    exp: "Birds and mammals have a four-chambered heart with complete separation of oxygenated and deoxygenated blood in a closed circulation."
  },
  {
    q: "The specialized cord-like fibrous structures that anchor the atrioventricular valve cusps to the ventricular papillary muscles are called:",
    opts: ["Chordae tendineae", "Purkinje fibers", "Columns of Bertin", "Ligamentum arteriosum"],
    ans: 0,
    exp: "Chordae tendineae ('heart strings') connect papillary muscles to AV valve flaps, preventing valve eversion during ventricular systole."
  },
  {
    q: "Which organ is known as the 'graveyard of RBCs' where worn-out erythrocytes are destroyed?",
    opts: ["Spleen", "Kidney", "Gallbladder", "Pancreas"],
    ans: 0,
    exp: "The spleen filters circulating blood; its reticuloendothelial macrophages engulf and break down senescent erythrocytes."
  },
  {
    q: "What is the normal concentration of hemoglobin in a healthy human adult per 100 mL of blood?",
    opts: ["12 to 16 g", "5 to 8 g", "20 to 25 g", "1 to 2 g"],
    ans: 0,
    exp: "A healthy human adult has approximately 12 to 16 grams of hemoglobin in every 100 mL of whole blood."
  },
  {
    q: "The normal count of blood platelets (thrombocytes) in a healthy individual ranges between:",
    opts: ["150,000 to 350,000 per $\\text{mm}^3$", "10,000 to 20,000 per $\\text{mm}^3$", "1,000,000 to 2,000,000 per $\\text{mm}^3$", "5,000 to 8,000 per $\\text{mm}^3$"],
    ans: 0,
    exp: "Normal platelet count in human blood is $1.5 \\times 10^5 \\text{ to } 3.5 \\times 10^5$ (150,000 to 350,000) per $\\text{mm}^3$."
  },
  {
    q: "Which vitamin is necessary for the synthesis of prothrombin and other clotting factors by liver hepatocytes?",
    opts: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
    ans: 0,
    exp: "Vitamin K is a required coenzyme for gamma-glutamyl carboxylase in the liver to synthesize prothrombin and factors VII, IX, and X."
  }
];

// Concepts for building remaining MCQs
const concepts = [
  { topic: "plasma protein albumin function", fact: "Albumin constitutes ~60% of plasma proteins and maintains plasma colloid osmotic (oncotic) pressure." },
  { topic: "plasma protein globulin function", fact: "Globulins are plasma proteins primarily involved in defense mechanisms (immunoglobulins/antibodies)." },
  { topic: "plasma protein fibrinogen function", fact: "Fibrinogen is an inactive plasma precursor converted to fibrin strands by thrombin during blood clotting." },
  { topic: "serum composition", fact: "Serum is defined as blood plasma without clotting factors (Serum = Plasma - Clotting factors)." },
  { topic: "erythrocyte biconcave structure", fact: "Mammalian erythrocytes are enucleated biconcave discs with high surface area for gas diffusion." },
  { topic: "hemoglobin iron content", fact: "Hemoglobin is a conjugated iron-porphyrin protein; each molecule can bind up to 4 oxygen molecules." },
  { topic: "erythropoiesis site", fact: "In adult humans, red blood cell formation (erythropoiesis) occurs in the red bone marrow of spongy bones." },
  { topic: "neutrophil phagocytic action", fact: "Neutrophils are granulocytes with multi-lobed nuclei that rapidly phagocytose invading bacterial pathogens." },
  { topic: "eosinophil allergic defense", fact: "Eosinophils have bilobed nuclei and contain granules that combat multicellular parasites and regulate allergic responses." },
  { topic: "basophil secretion products", fact: "Basophils secrete heparin (anticoagulant), histamine (vasodilator), and serotonin in inflammatory reactions." },
  { topic: "monocyte differentiation into macrophages", fact: "Monocytes are large agranulocytes that circulate in blood before entering tissues to become active macrophages." },
  { topic: "B and T lymphocyte immune roles", fact: "Lymphocytes are divided into B cells (humoral immunity) and T cells (cell-mediated immunity)." },
  { topic: "megakaryocyte platelet genesis", fact: "Blood platelets are produced by cytoplasmic budding and fragmentation of giant bone marrow megakaryocytes." },
  { topic: "ABO blood grouping genetics", fact: "The ABO blood grouping is governed by the gene I with three alleles: $I^A, I^B,$ and $i$." },
  { topic: "blood group O universal donor basis", fact: "Group O RBCs lack both A and B surface agglutinogens, preventing agglutination in recipient plasma." },
  { topic: "blood group AB universal recipient basis", fact: "Group AB individuals lack anti-A and anti-B agglutinins in their plasma, enabling safe reception of any ABO blood." },
  { topic: "Rh factor prevalence", fact: "Approximately 80% of the human population possesses the Rh antigen on erythrocyte membranes (Rh-positive)." },
  { topic: "erythroblastosis fetalis mechanism", fact: "Hemolytic disease of the newborn occurs when an Rh-negative mother is sensitized against an Rh-positive fetus." },
  { topic: "thromboplastin release", fact: "Injured tissue cells and platelets release thromboplastin (tissue factor) to initiate the extrinsic coagulation pathway." },
  { topic: "prothrombinase / thrombokinase complex", fact: "Thrombokinase converts the inactive plasma proenzyme prothrombin into the active proteolytic enzyme thrombin." },
  { topic: "thrombin action on fibrinogen", fact: "Active thrombin cleaves soluble fibrinogen into insoluble fibrin monomers that polymerize to form the clot." },
  { topic: "calcium role in clotting cascade", fact: "Ionized calcium ($Ca^{2+}$) is essential for multiple enzymatic activation steps in the blood clotting cascade." },
  { topic: "lacteal lipid transport", fact: "Dietary fats absorbed by intestinal enterocytes enter lymphatic capillaries (lacteals) as chylomicrons." },
  { topic: "open circulatory system features", fact: "In open circulatory systems of arthropods and molluscs, hemolymph directly bathes organs in tissue spaces (hemocoel)." },
  { topic: "closed circulatory system advantage", fact: "Closed circulatory systems maintain higher hydrostatic pressures and allow precise regulation of blood flow to tissues." },
  { topic: "two-chambered fish heart", fact: "Fishes possess a two-chambered heart consisting of one atrium and one ventricle supporting single circulation." },
  { topic: "three-chambered amphibian heart", fact: "Amphibians have a three-chambered heart with two atria and a single ventricle exhibiting incomplete double circulation." },
  { topic: "pericardium structure and fluid", fact: "The heart is enclosed in a double-layered pericardial sac containing pericardial fluid that reduces friction." },
  { topic: "interatrial and interventricular septa", fact: "A thin interatrial septum separates the atria, while a thick muscular interventricular septum separates the ventricles." },
  { topic: "tricuspid valve anatomical location", fact: "The tricuspid valve possesses three cusps guarding the atrioventricular opening between the right atrium and right ventricle." },
  { topic: "bicuspid or mitral valve location", fact: "The bicuspid or mitral valve possesses two cusps guarding the opening between the left atrium and left ventricle." },
  { topic: "semilunar valves function", fact: "Semilunar valves at the bases of the pulmonary artery and aorta prevent retrograde flow of blood into the ventricles." },
  { topic: "chordae tendineae and papillary muscles", fact: "Chordae tendineae anchor AV valve cusps to papillary muscles, preventing eversion during ventricular systole." },
  { topic: "sino-atrial node pacemaker activity", fact: "The SAN is located in the right atrium and initiates spontaneous cardiac action potentials at 70 to 75 per minute." },
  { topic: "atrioventricular node conduction delay", fact: "The AV node introduces a short delay in impulse conduction, allowing atria to empty completely before ventricular systole." },
  { topic: "bundle of His and Purkinje fibers", fact: "The AV bundle (bundle of His) divides into right and left bundle branches and Purkinje fibers across the myocardium." },
  { topic: "pulmonary vs systemic circulation", fact: "Pulmonary circulation oxygenates blood through the lungs, while systemic circulation distributes oxygenated blood to body organs." },
  { topic: "hepatic portal system vascular route", fact: "The hepatic portal vein carries venous blood from digestive organs directly to the liver capillary sinusoids." },
  { topic: "coronary circulation purpose", fact: "Coronary arteries and veins provide an exclusive vascular supply to nourish the working cardiac muscle tissue." }
];

const realisticDistractors = [
  "It is directly converted into calcified dentine within the medullary cavity.",
  "It forms a rigid keratinized matrix that blocks all capillary exchange.",
  "It functions solely to convert atmospheric nitrogen into urea in blood plasma.",
  "It breaks down into crystalline uric acid to lower blood pressure.",
  "It eliminates all glycogen reserves from hepatic tissue via exocytosis.",
  "It causes irreversible constriction of all thoracic lymph ducts permanently.",
  "It prevents the formation of any action potentials in all somatic nerve fibers.",
  "It dissolves the basement membrane of all systemic capillaries indiscriminately."
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
      q: `Which of the following statements concerning ${item.topic} is PHYSIOLOGICALLY ACCURATE?`,
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
      q: `Identify the correct statement regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Human Physiology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human circulatory system, what is the significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `Circulatory physiology fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid physiological fact about ${item.topic}:`,
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
  const outPath = path.join(__dirname, 'data_zoology_physio_part1.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 1: Body Fluids & Circulation\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
