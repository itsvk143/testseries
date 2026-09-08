// scripts/build_zoology_biohuman_part1.js
// Subtopic: Bacterial, viral, protozoan, and fungal diseases in humans
// Chapter: Biology and Human Welfare
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Bacterial, viral, protozoan, and fungal diseases in humans";
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
    a: "Salmonella typhi infects the small intestine and migrates to other organs through blood.",
    r: "Intestinal perforation and death may occur in severe cases of typhoid.",
    ans: 1,
    exp: "Both statements are correct facts from NCERT. Salmonella typhi enters through contaminated food and water, establishes in small intestine, and spreads via blood. In severe typhoid, deep ulceration causes intestinal perforation. However, (R) describes a terminal complication, not the cause of initial intestinal localization and hematogenous spread."
  },
  {
    a: "Widal test is widely utilized for the laboratory confirmation of typhoid fever.",
    r: "Widal test is an agglutination test based on the interaction of patient antibodies with specific somatic (O) and flagellar (H) antigens of Salmonella typhi.",
    ans: 0,
    exp: "Widal test confirms typhoid fever by detecting agglutinating serum antibodies against O (somatic) and H (flagellar) antigens of Salmonella typhi. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In pneumonia, the alveolar air spaces get filled with fluid, causing severe respiratory distress.",
    r: "Pneumonia is caused exclusively by viral agents that infect the conducting zone of the respiratory tract.",
    ans: 2,
    exp: "(A) is true because bacterial agents like Streptococcus pneumoniae and Haemophilus influenzae cause exudation of fluid into alveoli. (R) is false because pneumonia is primarily caused by bacteria, and it affects the respiratory zone (alveoli), unlike common cold which affects the nose and respiratory passage."
  },
  {
    a: "Common cold differs from pneumonia as it does not affect the lungs.",
    r: "Rhino viruses infect the nasal mucosa and respiratory tract but spare the pulmonary alveoli.",
    ans: 0,
    exp: "Rhino viruses infect the upper respiratory tract (nose and conducting passage) and do not infect the lungs, whereas pneumonia affects pulmonary alveoli. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    a: "The malignant tertian malaria caused by Plasmodium falciparum is the most fatal form of malaria.",
    r: "Plasmodium falciparum causes cerebral malaria and extensive blockage of brain microcapillaries by parasitized RBCs.",
    ans: 0,
    exp: "Plasmodium falciparum causes malignant malaria which can lead to microvascular sequestration in the brain (cerebral malaria), renal failure, and death. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The chill and high recurring fever in malaria coincide with the rupture of erythrocytic schizonts.",
    r: "Rupture of red blood cells releases a toxic crystalline pigment called hemozoin into the circulation.",
    ans: 0,
    exp: "Hemozoin released during the rupture of infected red blood cells stimulates macrophages to release endogenous pyrogens (like TNF-alpha and IL-1), triggering the chill and recurring fever. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sexual reproduction of Plasmodium occurs within the digestive tract of the female Anopheles mosquito.",
    r: "The female Anopheles mosquito acts as the definitive host in the life cycle of the malaria parasite.",
    ans: 0,
    exp: "Gametocytes are ingested by the female Anopheles mosquito; fertilization and gametic development take place in the mosquito stomach, making it the definitive (primary) host. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The infective stage of Plasmodium for humans is the sporozoite.",
    r: "Sporozoites stored in the salivary glands of female Anopheles mosquito are inoculated into the human bloodstream during biting.",
    ans: 0,
    exp: "Motile sporozoites reside in the salivary glands of the mosquito vector and are injected during a blood meal into the human host. Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    a: "Entamoeba histolytica is an endoparasite residing in the human large intestine that causes amoebiasis.",
    r: "Houseflies act as mechanical carriers that transfer cysts of Entamoeba histolytica from feces to food products.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Entamoeba histolytica lives in the large intestine producing stool with excess mucus and blood clots. Houseflies carry the infective cysts mechanically to food. Both (A) and (R) are true, but (R) is a transmission mechanism, not the reason why Entamoeba is an endoparasite of the large intestine."
  },
  {
    a: "Ascaris lumbricoides infection can lead to internal mucosal bleeding, anemia, and intestinal obstruction.",
    r: "A heavy worm burden of adult roundworms blocks the lumen of the small intestine and damages the mucosa.",
    ans: 0,
    exp: "Ascaris lumbricoides is an intestinal roundworm whose high population mechanically obstructs the intestinal lumen and causes mucosal trauma and internal bleeding. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Wuchereria bancrofti causes chronic lymphatic filariasis or elephantiasis.",
    r: "The filarial microfilariae and adult worms reside and obstruct the lymphatic vessels of the lower limbs and genital organs.",
    ans: 0,
    exp: "Adult Wuchereria bancrofti worms lodge in the lymphatic system, especially of the lower limbs and scrotum, provoking chronic inflammation and progressive lymphedema. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Female Culex mosquitoes serve as the biological vectors for transmitting elephantiasis.",
    r: "Transmission occurs when female Culex mosquito inoculates infective larvae of Wuchereria during its blood meal.",
    ans: 0,
    exp: "Female Culex mosquitoes ingest microfilariae from an infected human, allow them to develop into infective third-stage larvae, and inoculate them into a new host during subsequent bites. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ringworm is an intensely itchy fungal infection of the skin, nails, and scalp.",
    r: "Ringworm is caused by dermatophytic fungi belonging to the genera Microsporum, Trichophyton, and Epidermophyton.",
    ans: 0,
    exp: "Dermatophytes synthesize keratinases that break down keratin in keratinized epidermal layers, producing dry, scaly, pruritic circular lesions. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Heat and moisture facilitate the proliferation of fungi causing ringworm in skin folds.",
    r: "Dermatophytic fungi thrive in the groin region, interdigital spaces, and perianal folds where perspiration and warmth accumulate.",
    ans: 0,
    exp: "Fungi causing ringworm proliferate under warm and humid conditions, which is why skin folds like the groin and between the toes are prime sites of infection. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Introduction of Gambusia fish into freshwater bodies is an effective biological control method for mosquito-borne diseases.",
    r: "Gambusia affinis actively preys upon mosquito larvae and pupae in surface water bodies.",
    ans: 0,
    exp: "Gambusia (larvivorous fish) feeds voraciously on mosquito larvae, preventing their metamorphosis into adult vectors of malaria and dengue. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Amoebic dysentery is clinically distinguished by stools containing excess mucous and dark blood clots.",
    r: "Trophozoites of Entamoeba histolytica secrete proteolytic enzymes that ulcerate the mucosa and submucosa of the colon.",
    ans: 0,
    exp: "Proteolytic histolytic enzymes secreted by Entamoeba trophozoites erode the colonic mucosa, creating flask-shaped ulcers that bleed and produce excessive mucus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In severe cases of pneumonia, the lips and fingernails may turn gray to bluish in color.",
    r: "Cyanosis results from impaired gas exchange due to fluid accumulation in the pulmonary alveoli, leading to hypoxemia.",
    ans: 0,
    exp: "Alveolar exudate severely limits oxygen diffusion, elevating deoxygenated hemoglobin levels and producing peripheral cyanosis (bluish tint on nails and lips). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Plasmodium sporozoites directly invade and lyse erythrocytes immediately upon entering the human bloodstream.",
    r: "Sporozoites lack the capability to interact with hepatocytes in the human liver.",
    ans: 3,
    exp: "Both (A) and (R) are false. Sporozoites do not directly invade erythrocytes; they first target hepatocytes (pre-erythrocytic hepatic schizogony). Merozoites released from the liver then invade RBCs. Therefore, (A) is false and (R) is false. Hence (d) is correct."
  },
  {
    a: "Ascariasis transmission occurs through the ingestion of water, vegetables, and fruits contaminated with infective embryonated eggs.",
    r: "The eggs of Ascaris are excreted along with the feces of infected persons into soil.",
    ans: 0,
    exp: "Unembryonated eggs pass out in human feces, embryonate in soil, and contaminate drinking water, vegetables, and soil, being ingested by healthy individuals. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Personal hygiene is fundamental for preventing the transmission of infectious diseases.",
    r: "Handwashing and sanitary disposal of excreta prevent the fecal-oral transmission of typhoid and amoebiasis.",
    ans: 0,
    exp: "Personal hygiene practices directly intercept the fecal-oral route of transmission for pathogens like Salmonella typhi and Entamoeba histolytica. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mary Mallon, nicknamed 'Typhoid Mary', was an asymptomatic carrier of Salmonella typhi.",
    r: "Typhoid Mary continued to spread typhoid for several years through the food she prepared as a professional cook.",
    ans: 1,
    exp: "Both statements are historically accurate and stated in NCERT. Mary Mallon harbored the bacteria in her gallbladder asymptomatically and transmitted it via cooking. Both (A) and (R) are true, but (R) illustrates her actions rather than the biological explanation of why an individual becomes an asymptomatic carrier."
  },
  {
    a: "Dengue and Chikungunya are viral fevers transmitted by the bite of female Aedes mosquitoes.",
    r: "Aedes aegypti mosquitoes breed in clean, stagnant water containers around human habitations.",
    ans: 1,
    exp: "Both statements are correct. Aedes aegypti is the day-biting urban vector for both Dengue virus (Flavivirus) and Chikungunya virus (Alphavirus). Both (A) and (R) are true, but breeding habitat (R) is not the biological mechanism of viral transmission (A)."
  },
  {
    a: "The sexual stages (gametocytes) of Plasmodium develop in the human host.",
    r: "Fertilization and fusion of Plasmodium gametes occur in the human hepatic parenchyma.",
    ans: 2,
    exp: "(A) is true because gametocytes develop from merozoites inside human erythrocytes. (R) is false because fertilization and maturation occur exclusively inside the mosquito gut, not in human hepatocytes."
  },
  {
    a: "Infectious diseases are easily transmitted from one person to another.",
    r: "Infectious diseases are caused by biological pathogens such as bacteria, viruses, fungi, and parasites that can disperse via various vectors or media.",
    ans: 0,
    exp: "Pathogens have evolved specialized transmission routes (airborne droplets, water, vectors, contact) allowing them to spread across susceptible hosts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Use of mosquito nets and window meshes reduces the incidence of malaria and filariasis.",
    r: "Physical barriers prevent contact between human hosts and insect vectors like Anopheles and Culex.",
    ans: 0,
    exp: "Mosquito nets create a mechanical barrier that prevents nocturnal vector bites, interrupting the transmission cycle. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Streptococcus pneumoniae and Haemophilus influenzae are causative agents of bacterial pneumonia.",
    r: "These pathogens produce acute inflammation of the bronchioles and alveoli with accumulation of purulent fluid.",
    ans: 0,
    exp: "Both pathogens invade pulmonary tissues, provoking an acute inflammatory exudation into alveolar spaces. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// 154 MCQs
const mcqData = [];

function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-20: Typhoid, Salmonella, Widal
addMcq(
  "Which bacterium is the causative agent of typhoid fever in humans?",
  ["Salmonella typhi", "Streptococcus pneumoniae", "Haemophilus influenzae", "Vibrio cholerae"],
  0,
  "Typhoid fever is caused by the pathogenic bacterium Salmonella typhi, which enters the human gastrointestinal tract through contaminated food and water."
);
addMcq(
  "Through which primary route does Salmonella typhi typically enter the human body?",
  ["Inhalation of aerosol droplets", "Contaminated food and drinking water", "Bite of infected female mosquito", "Direct cutaneous inoculation"],
  1,
  "Salmonella typhi enters the human body via ingestion of food and water contaminated with fecal matter of infected individuals."
);
addMcq(
  "In severe cases of typhoid fever, which life-threatening complication can occur?",
  ["Alveolar fluid consolidation", "Intestinal perforation and internal bleeding", "Elephantiasis of scrotal sacs", "Fibrous blockage of pulmonary capillaries"],
  1,
  "In severe, untreated typhoid cases, ulceration of Peyer's patches in the small intestine can lead to intestinal perforation and peritonitis."
);
addMcq(
  "The classical diagnostic serological test used for confirmation of typhoid fever is:",
  ["ELISA test", "Western blot test", "Widal test", "Mantoux tuberculin test"],
  2,
  "The Widal test is an agglutination test that measures antibody titers against Salmonella typhi O and H antigens to diagnose typhoid fever."
);
addMcq(
  "Which classic symptom triad is characteristic of typhoid fever during its acute stage?",
  ["High sustained fever ($39^\\circ\\text{C}$ to $40^\\circ\\text{C}$), stomach pain, and constipation", "Intense itching, circular rash, and scaling", "Chills every 48 hours with severe muscle spasms", "Sudden paralysis of voluntary motor neurons"],
  0,
  "NCERT states that sustained high fever (39°C to 40°C), weakness, stomach pain, constipation, headache, and loss of appetite are common symptoms of typhoid."
);
addMcq(
  "The historical case of 'Typhoid Mary' (Mary Mallon) is classic in epidemiology because she was a:",
  ["Biological vector that transferred virus to cattle", "Cook who remained an asymptomatic carrier of Salmonella typhi", "Scientist who isolated the causative bacterium", "Patient who developed complete acquired immunity through passive serum"],
  1,
  "Mary Mallon was an asymptomatic chronic carrier of Salmonella typhi who worked as a cook and transmitted typhoid fever to numerous individuals over many years."
);
addMcq(
  "Which organ of the human body is primarily colonized by Salmonella typhi upon entry?",
  ["Pulmonary alveoli", "Small intestine", "Lymphatic nodes of lower extremities", "Epidermal stratum corneum"],
  1,
  "Salmonella typhi initially infects and colonizes the small intestine before entering the bloodstream and migrating to other organs."
);

// 21-40: Pneumonia, Haemophilus, Streptococcus
addMcq(
  "Pneumonia in humans is caused by which of the following pairs of bacterial pathogens?",
  ["Salmonella typhi and Escherichia coli", "Streptococcus pneumoniae and Haemophilus influenzae", "Entamoeba histolytica and Giardia lamblia", "Microsporum and Epidermophyton"],
  1,
  "Bacterial pneumonia is predominantly caused by Streptococcus pneumoniae and Haemophilus influenzae, which infect the alveoli of the lungs."
);
addMcq(
  "Which specific anatomical structures of the human respiratory system are infected and filled with fluid in pneumonia?",
  ["Nasal turbinates and septum", "Pulmonary alveoli", "Laryngeal vocal cords", "Tracheal cartilaginous rings"],
  1,
  "In pneumonia, infection causes the alveoli (air sacs) of the lungs to become filled with fluid and purulent exudate, leading to severe difficulty in gas exchange."
);
addMcq(
  "A distinctive physical sign observed in severe cases of pneumonia due to hypoxemia is:",
  ["Yellowing of sclera and skin", "Fingernails and lips turning gray to bluish", "Swelling of cervical lymph glands", "Formation of ring-like dry scaly lesions"],
  1,
  "In severe cases of pneumonia, inadequate oxygenation of blood causes peripheral cyanosis, causing the lips and fingernails to turn gray to bluish."
);
addMcq(
  "How is bacterial pneumonia typically transmitted from an infected person to a healthy individual?",
  ["Inhaling droplets/aerosols released during coughing or sharing glasses/utensils", "Bite of infected Culex mosquito", "Ingestion of unpasteurized cow milk only", "Through puncture wounds caused by rusted iron nails"],
  0,
  "Pneumonia transmission occurs by inhaling aerosols or droplets released by an infected person or by sharing contaminated utensils and glasses."
);
addMcq(
  "How does common cold primarily differ from pneumonia in terms of the site of infection?",
  ["Common cold infects the alveoli, whereas pneumonia infects the trachea", "Common cold infects the nose and respiratory passage but not the lungs", "Pneumonia spares the lungs, whereas common cold consolidates lung lobes", "Common cold is caused by protozoans, whereas pneumonia is fungal"],
  1,
  "Common cold infects the upper respiratory tract (nasal epithelium and conducting airway) but does not infect the lungs, unlike pneumonia which infects pulmonary alveoli."
);
addMcq(
  "Which group of viruses is the causative agent of the common cold in humans?",
  ["Retroviruses", "Rhino viruses", "Rhabdoviruses", "Flaviruses"],
  1,
  "Rhino viruses represent a group of viruses that cause common cold, one of the most infectious human ailments."
);
addMcq(
  "What is the typical duration of symptoms in an uncomplicated common cold infection?",
  ["3 to 7 days", "3 to 6 weeks", "6 to 12 months", "Lifelong persistence"],
  0,
  "According to NCERT, common cold symptoms—including nasal congestion, discharge, sore throat, cough, and headache—typically last for 3 to 7 days."
);

// 41-70: Malaria, Plasmodium life cycle, Hemozoin
addMcq(
  "Which species of Plasmodium is responsible for malignant, often fatal tertian malaria?",
  ["Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum", "Plasmodium ovale"],
  2,
  "Plasmodium falciparum causes malignant tertian malaria, which is the most severe and potentially fatal form of malaria."
);
addMcq(
  "What is the infectious stage of Plasmodium that enters the human body through a mosquito bite?",
  ["Trophozoite", "Merozoite", "Sporozoite", "Ookinete"],
  2,
  "Plasmodium enters the human bloodstream as motile, spindle-shaped sporozoites inoculated by the bite of an infected female Anopheles mosquito."
);
addMcq(
  "Upon entering the human body, where do Plasmodium sporozoites initially undergo asexual reproduction?",
  ["Red blood cells", "Liver parenchymal cells (hepatocytes)", "Splenic red pulp", "Endothelial cells of glomerulus"],
  1,
  "Sporozoites rapidly reach the liver via the bloodstream and reproduce asexually inside liver cells (pre-erythrocytic schizogony) before invading RBCs."
);
addMcq(
  "The paroxysms of severe chill followed by high recurring fever in malaria are caused by the release of:",
  ["Histamine from basophils", "Hemozoin released upon RBC lysis", "Interferon-gamma from helper T cells", "Endotoxin from ruptured bacterial cell walls"],
  1,
  "Rupture of erythrocytic schizonts releases merozoites along with a toxic byproduct called hemozoin, which triggers chills and high recurring fever."
);
addMcq(
  "In which host and anatomical organ does the sexual stage (gamete fusion) of Plasmodium take place?",
  ["Human liver parenchyma", "Female Anopheles mosquito gut/stomach", "Human erythrocytes", "Mosquito salivary glands"],
  1,
  "Gametocytes taken up by the mosquito during a blood meal undergo fertilization and zygote formation within the gut (stomach) of the female Anopheles mosquito."
);
addMcq(
  "Where are mature infective sporozoites stored within the body of the female Anopheles mosquito?",
  ["Ovaries", "Midgut lumen", "Salivary glands", "Malpighian tubules"],
  2,
  "Following development and emergence from oocysts in the mosquito stomach wall, motile sporozoites migrate to and reside within the salivary glands."
);
addMcq(
  "Why is the female Anopheles mosquito classified as the definitive (primary) host of Plasmodium?",
  ["Asexual multiple fission occurs in its hemocoel", "Sexual reproduction and fertilization take place inside it", "It is warm-blooded like humans", "It causes lysis of human lymphocytes"],
  1,
  "The biological host in which sexual reproduction (syngamy/fertilization) of a parasite takes place is termed the definitive host; for Plasmodium, this is the female Anopheles."
);
addMcq(
  "At what frequency does the classic fever cycle occur in benign tertian malaria caused by Plasmodium vivax?",
  ["Every 24 hours", "Every 48 hours (every 3rd day)", "Every 72 hours (every 4th day)", "Continuous irregular fever without intervals"],
  1,
  "In Plasmodium vivax infection (benign tertian malaria), the erythrocytic schizogony cycle repeats every 48 hours, causing fever every 3rd day."
);
addMcq(
  "In which form does Plasmodium enter the mosquito when it feeds on an infected human?",
  ["Sporozoites", "Merozoites", "Gametocytes", "Oocysts"],
  2,
  "When the female Anopheles mosquito takes a blood meal from an infected human, it ingests male and female gametocytes present in the peripheral circulation."
);

// 71-95: Amoebiasis, Entamoeba histolytica
addMcq(
  "Which protozoan parasite causes amoebiasis (amoebic dysentery) in humans?",
  ["Trypanosoma gambiense", "Entamoeba histolytica", "Leishmania donovani", "Plasmodium ovale"],
  1,
  "Entamoeba histolytica is a protozoan parasite residing in the large intestine of humans that causes amoebiasis or amoebic dysentery."
);
addMcq(
  "Which of the following is a characteristic hallmark of stools in patients suffering from amoebic dysentery?",
  ["Watery rice-water stools without blood", "Excess mucus and dark blood clots", "Frothy greasy stools containing undigested fats only", "Dry clay-colored hard pellets"],
  1,
  "According to NCERT, stools with excess mucous and blood clots are characteristic of amoebic dysentery caused by Entamoeba histolytica."
);
addMcq(
  "Which organism acts as the primary mechanical carrier for transferring Entamoeba histolytica cysts to food?",
  ["Female Anopheles mosquito", "Female Culex mosquito", "Housefly (Musca domestica)", "Tsetse fly (Glossina)"],
  2,
  "Houseflies serve as mechanical carriers that transfer infective cysts from human feces to unprotected food and water supplies."
);
addMcq(
  "Which segment of the human gastrointestinal tract is the primary habitat of Entamoeba histolytica?",
  ["Duodenum", "Stomach", "Large intestine", "Esophagus"],
  2,
  "Entamoeba histolytica establishes infection primarily in the mucosa and submucosa of the large intestine (colon and caecum)."
);

// 96-115: Helminthic diseases: Ascaris & Wuchereria
addMcq(
  "Ascariasis is an infection of the human intestine caused by which type of helminth?",
  ["Platyhelminth tapeworm", "Common intestinal roundworm (Ascaris lumbricoides)", "Filarial nematode (Wuchereria)", "Trematode blood fluke (Schistosoma)"],
  1,
  "Ascaris lumbricoides is an intestinal nematode, commonly known as the giant intestinal roundworm, which infects humans and causes ascariasis."
);
addMcq(
  "What is the principal mode of transmission of Ascaris lumbricoides to humans?",
  ["Bite of infected sandfly", "Consuming water, vegetables, or fruits contaminated with embryonated eggs", "Direct penetration of larvae through intact foot skin", "Breathing droplet nuclei containing larvae"],
  1,
  "Ascaris eggs excreted in feces embryonate in soil and are ingested via contaminated water, raw vegetables, or unwashed hands."
);
addMcq(
  "Which clinical symptoms commonly manifest in a patient with a moderate to heavy Ascaris infection?",
  ["Internal bleeding, muscular pain, fever, anemia, and intestinal blockage", "Joint swelling, subcutaneous nodules, and loss of teeth", "Continuous sneezing, runny nose, and conjunctivitis", "Sudden irreversible loss of hearing and equilibrium"],
  0,
  "Symptoms of ascariasis include internal mucosal bleeding, muscular pain, fever, anemia, and mechanical blockage of the intestinal passage by adult worms."
);
addMcq(
  "Which two filarial nematode species cause chronic elephantiasis in humans?",
  ["Ascaris lumbricoides and Enterobius vermicularis", "Wuchereria bancrofti and Wuchereria malayi", "Ancylostoma duodenale and Necator americanus", "Trichinella spiralis and Taenia solium"],
  1,
  "Elephantiasis (filariasis) is caused by the filarial worms Wuchereria bancrofti and Wuchereria malayi."
);
addMcq(
  "Which anatomical vessels are specifically targeted and chronically inflamed by adult Wuchereria worms?",
  ["Pulmonary veins", "Lymphatic vessels, especially of the lower limbs and genitalia", "Hepatic portal sinusoids", "Coronary arterial capillaries"],
  1,
  "Wuchereria worms reside in the lymphatic vessels of the lower limbs and inguinal region, inducing chronic inflammatory lymphedema and severe deformity."
);
addMcq(
  "Which insect vector is responsible for transmitting the filarial nematode Wuchereria to humans?",
  ["Female Culex mosquito", "Male Anopheles mosquito", "Tsetse fly", "Body louse"],
  0,
  "The biological vector that transmits Wuchereria bancrofti and Wuchereria malayi to humans is the female Culex mosquito."
);

// 116-135: Fungal diseases: Ringworm (Microsporum, Trichophyton, Epidermophyton)
addMcq(
  "Ringworm in humans is caused by dermatophytic fungi belonging to which three genera?",
  ["Microsporum, Trichophyton, and Epidermophyton", "Mucor, Rhizopus, and Aspergillus", "Penicillium, Neurospora, and Claviceps", "Puccinia, Ustilago, and Agaricus"],
  0,
  "Dermatophytic fungi responsible for ringworm infections belong to the three genera: Microsporum, Trichophyton, and Epidermophyton."
);
addMcq(
  "What is the classical clinical presentation of a dermatophytic ringworm infection on human skin?",
  ["Fluid-filled vesicles along cranial nerve paths", "Dry, scaly circular lesions accompanied by intense itching", "Painless subcutaneous calcified nodules", "Petechial hemorrhages with ulcerated purpura"],
  1,
  "Ringworm is characterized by the appearance of dry, scaly circular lesions on various parts of the body such as skin, nails, and scalp, accompanied by intense itching."
);
addMcq(
  "Why do ringworm fungi typically proliferate most actively in regions like the groin and between the toes?",
  ["These regions are exposed to direct sunlight and high wind", "Heat and moisture present in skin folds promote fungal spore germination and growth", "These regions have low keratin content that attracts fungal hyphae", "High blood circulation in these zones activates fungal enzymes"],
  1,
  "Heat and moisture in anatomical skin folds (such as groin and interdigital spaces) create an optimal microclimate for fungal hyphae to thrive and digest keratin."
);
addMcq(
  "How can ringworm be acquired by a healthy individual from an infected person?",
  ["Through inhaling dry dust aerosols", "Using towels, clothes, or combs of infected individuals or contact with contaminated soil", "Via direct transfusion of blood plasma", "Through bites of ticks or bedbugs"],
  1,
  "Ringworm is usually acquired from soil or by using towels, clothes, hairbrushes, or combs belonging to infected individuals."
);

// 136-154: Vector control, public health, disease prevention
addMcq(
  "Which biological agent is introduced into ponds and ditches to feed on mosquito larvae?",
  ["Gambusia fish", "Catla catla fish", "Rana tigrina tadpoles", "Daphnia water fleas"],
  0,
  "Gambusia is a larvivorous freshwater fish introduced into standing water bodies to consume mosquito larvae and biologically control mosquito populations."
);
addMcq(
  "Which disease is transmitted by the day-biting mosquito Aedes aegypti?",
  ["Malaria and Kala-azar", "Dengue and Chikungunya", "Sleeping sickness and Chagas disease", "Typhoid and Amoebic dysentery"],
  1,
  "Aedes aegypti is the mosquito vector responsible for transmitting viral fevers such as Dengue and Chikungunya."
);
addMcq(
  "Which of the following measures is essential for controlling vector-borne diseases like malaria and filariasis?",
  ["Boiling drinking water and eating raw food only", "Eradicating mosquito breeding grounds and using insect repellents and wire mesh on windows", "Administering oral broad-spectrum antibiotics to entire communities", "Sterilizing clothing in autoclave at monthly intervals"],
  1,
  "Controlling mosquito breeding in standing water, eliminating stagnant pools, installing wire mesh on windows/doors, and using mosquito nets prevent vector contact."
);
addMcq(
  "Which infectious disease among the following has been completely eradicated worldwide through mass vaccination campaigns?",
  ["Smallpox", "Poliomyelitis", "Tuberculosis", "Malaria"],
  0,
  "Smallpox is a viral disease that has been completely eradicated globally through systematic mass immunization using the smallpox vaccine."
);
addMcq(
  "Which bacterium is responsible for causing plague in humans?",
  ["Yersinia pestis", "Corynebacterium diphtheriae", "Clostridium tetani", "Bordetella pertussis"],
  0,
  "Plague is caused by the gram-negative rod-shaped bacterium Yersinia pestis, typically transmitted by rat fleas (Xenopsylla cheopis)."
);
addMcq(
  "Lockjaw (trismus) is a classical clinical manifestation of which bacterial infection?",
  ["Tetanus (Clostridium tetani)", "Diphtheria (Corynebacterium diphtheriae)", "Cholera (Vibrio cholerae)", "Pertussis (Bordetella pertussis)"],
  0,
  "Tetanospasmin toxin produced by Clostridium tetani blocks inhibitory neurotransmitters (GABA/glycine), resulting in severe spastic muscle contractions, famously presenting as lockjaw."
);
addMcq(
  "The formation of a tough, leathery pseudomembrane over the tonsils and pharynx is diagnostic of:",
  ["Diphtheria", "Pneumonia", "Typhoid", "Amoebiasis"],
  0,
  "Corynebacterium diphtheriae produces a potent exotoxin that causes tissue necrosis, forming a gray pseudomembrane across the posterior pharynx."
);
addMcq(
  "Rice-water stools leading to rapid dehydration and hypovolemic shock are characteristic of:",
  ["Cholera", "Amoebiasis", "Typhoid", "Ascariasis"],
  0,
  "Vibrio cholerae produces cholera toxin (choleragen), which activates adenylate cyclase in enterocytes, causing massive secretory diarrhea known as rice-water stool."
);
addMcq(
  "The pathogen responsible for causing sleeping sickness (African trypanosomiasis) is:",
  ["Trypanosoma brucei transmitted by Tsetse fly (Glossina)", "Leishmania donovani transmitted by Sandfly (Phlebotomus)", "Plasmodium falciparum transmitted by Anopheles", "Entamoeba gingivalis transmitted by kissing"],
  0,
  "Trypanosoma brucei causes African sleeping sickness and is transmitted by the bite of the infected tsetse fly (genus Glossina)."
);
addMcq(
  "Kala-azar (Visceral leishmaniasis) is caused by Leishmania donovani and transmitted to humans by:",
  ["Sandflies (Phlebotomus)", "Tsetse flies (Glossina)", "Mosquitoes (Anopheles)", "Bedbugs (Cimex)"],
  0,
  "Leishmania donovani, a flagellated protozoan that infects reticuloendothelial cells, is transmitted by the bite of the female sandfly (Phlebotomus)."
);
addMcq(
  "Which organelle in Entamoeba histolytica is completely absent due to its anaerobic parasitic lifestyle?",
  ["Mitochondria", "Nucleus", "Food vacuoles", "Endoplasmic reticulum"],
  0,
  "Entamoeba histolytica lacks classical mitochondria and Golgi apparatus; it possesses relict mitosomes suited for anaerobic glycolysis."
);
addMcq(
  "In the life cycle of Plasmodium, exflagellation of microgametocytes occurs inside:",
  ["The gut lumen of the female Anopheles mosquito", "Human hepatic parenchyma", "Human peripheral blood vessels", "Salivary glands of mosquito"],
  0,
  "Inside the stomach of the female Anopheles mosquito, the male microgametocyte undergoes exflagellation to produce 6 to 8 flagellated microgametes."
);
addMcq(
  "The motile zygote formed after fertilization in the Plasmodium life cycle is termed:",
  ["Ookinete", "Oocyst", "Sporozoite", "Merozoite"],
  0,
  "The zygote of Plasmodium transforms into a motile, elongated vermiform stage called the ookinete, which penetrates the epithelial lining of the mosquito gut."
);
addMcq(
  "In which stage of the Plasmodium life cycle does meiosis occur?",
  ["During transformation of ookinete to oocyst / within the oocyst", "During erythrocytic schizogony in human blood", "During entry of sporozoite into hepatocytes", "During binary fission in human red blood cells"],
  0,
  "The diploid ookinete forms an oocyst on the outer stomach wall of the mosquito, where meiosis occurs followed by sporogony to produce haploid sporozoites."
);
addMcq(
  "Which diagnostic method allows direct visualization of malaria parasites inside erythrocytes?",
  ["Microscopic examination of Giemsa-stained thick and thin peripheral blood smears", "Urinary sediment protein electrophoresis", "Stool concentration by zinc sulfate flotation", "Serum transaminase enzyme assay"],
  0,
  "Giemsa-stained peripheral blood smears (thick smear for screening and thin smear for species identification) remain the gold standard for malaria diagnosis."
);
addMcq(
  "Which of the following is an effective method of personal protection against mosquito-borne pathogens?",
  ["Using insect repellent creams, sleeping under insecticide-treated bed nets, and wearing protective long-sleeved clothing", "Consuming multivitamin supplements daily", "Washing hands with cold tap water only", "Applying sulfur ointment on intact skin"],
  0,
  "Insecticide-treated bed nets, insect repellent creams (like DEET), and protective long clothing prevent mosquito contact and reduce disease transmission."
);
addMcq(
  "Which term describes a disease that is constantly present in a particular geographic population at a baseline rate?",
  ["Endemic", "Epidemic", "Pandemic", "Sporadic"],
  0,
  "An endemic disease is one that is consistently maintained at a baseline frequency within a particular geographic area or population group."
);
addMcq(
  "A disease that suddenly affects an unusually large number of individuals within a region in a short period is termed an:",
  ["Epidemic", "Endemic", "Enzootic", "Autosomal condition"],
  0,
  "An epidemic is a sudden increase in the number of cases of a disease above what is normally expected in that population in that area."
);
addMcq(
  "Which global health organization coordinates international efforts to control infectious disease outbreaks?",
  ["WHO (World Health Organization)", "WTO (World Trade Organization)", "UNESCO", "UNICEF"],
  0,
  "The World Health Organization (WHO) is the specialized agency of the United Nations responsible for international public health and infectious disease control."
);

// Additional MCQs to reach exactly 154
const moreMcqs = [
  ["Which vector transmits Chagas disease (American trypanosomiasis)?", ["Triatomine kissing bug (Triatoma)", "Tsetse fly", "Sandfly", "Deer fly"], 0, "Chagas disease is caused by Trypanosoma cruzi and transmitted by triatomine bugs (kissing bugs)."],
  ["Schistosomiasis (bilharzia) is caused by a trematode blood fluke whose intermediate host is a:", ["Freshwater snail (Biomphalaria/Bulinus)", "Brackish water crab", "Crayfish", "Cyclops water flea"], 0, "Schistosoma cercariae emerge from freshwater snails and penetrate human skin in infested water."],
  ["Guinea worm disease (dracunculiasis) was historically acquired by ingesting water containing:", ["Cyclops water fleas harboring Dracunculus larvae", "Mosquito pupae", "Amoebic cysts", "Rotifers"], 0, "Dracunculiasis was transmitted by drinking unfiltered water containing copepods (Cyclops) infected with Dracunculus medinensis larvae."],
  ["Which bacterial pathogen produces the characteristic 'whooping cough' in infants?", ["Bordetella pertussis", "Corynebacterium diphtheriae", "Klebsiella pneumoniae", "Legionella pneumophila"], 0, "Bordetella pertussis is the causative agent of pertussis (whooping cough), characterized by paroxysmal coughing fits followed by a high-pitched inspiratory whoop."],
  ["Leprosy (Hansen's disease) is caused by Mycobacterium leprae, which predominantly affects:", ["Peripheral nerves and skin", "Pulmonary alveoli exclusively", "Hepatic portal circulation", "Glomerular basement membrane"], 0, "Mycobacterium leprae selectively invades Schwann cells of peripheral sensory nerves and cutaneous tissue, causing sensory loss and hypopigmented macules."],
  ["Which test is commonly used to screen for exposure to Mycobacterium tuberculosis?", ["Mantoux tuberculin skin test (PPD)", "Widal agglutination test", "Wassermann reaction", "Schick test"], 0, "The Mantoux test involves intradermal injection of Purified Protein Derivative (PPD) of tuberculin to detect cell-mediated hypersensitivity to M. tuberculosis."],
  ["The Schick test is historically used to assess human susceptibility or immunity to:", ["Diphtheria toxin", "Tetanus toxin", "Botulinum toxin", "Cholera enterotoxin"], 0, "The Schick test determines whether an individual possesses circulating antitoxin antibodies to neutralize Corynebacterium diphtheriae toxin."],
  ["Trachoma, a leading infectious cause of blindness worldwide, is caused by:", ["Chlamydia trachomatis", "Neisseria gonorrhoeae", "Treponema pallidum", "Haemophilus ducreyi"], 0, "Chlamydia trachomatis serovars A, B, Ba, and C cause trachoma, an ocular infection resulting in chronic conjunctival scarring and blindness."],
  ["Syphilis is a sexually transmitted infection caused by the spirochete:", ["Treponema pallidum", "Borrelia burgdorferi", "Leptospira interrogans", "Spirillum minus"], 0, "Treponema pallidum subsp. pallidum is the spirochete responsible for syphilis, characterized by primary painless chancres, secondary rashes, and tertiary gummas."],
  ["Lyme disease, characterized by erythema migrans (bulls-eye rash), is caused by Borrelia burgdorferi and transmitted by:", ["Ixodes deer ticks", "Dermacentor dog ticks", "Ornithodoros soft ticks", "Pediculus humanus lice"], 0, "Borrelia burgdorferi is transmitted to humans via bites of blacklegged deer ticks belonging to the genus Ixodes."],
  ["Which bacterium is famous for producing heat-resistant endospores and was misused as a bioterror agent?", ["Bacillus anthracis", "Clostridium perfringens", "Listeria monocytogenes", "Campylobacter jejuni"], 0, "Bacillus anthracis produces resilient endospores capable of causing cutaneous, gastrointestinal, or lethal inhalational anthrax."],
  ["Gas gangrene is a severe, rapidly spreading necrotizing soft-tissue infection caused predominantly by:", ["Clostridium perfringens", "Staphylococcus aureus", "Pseudomonas aeruginosa", "Bacteroides fragilis"], 0, "Clostridium perfringens produces alpha-toxin (lecithinase) that causes extensive gas production and myonecrosis in ischemic tissue."],
  ["Which foodborne intoxication results from ingestion of a preformed neurotoxin that inhibits acetylcholine release at neuromuscular junctions?", ["Botulism (Clostridium botulinum)", "Salmonellosis", "Shigellosis", "Staphylococcal enterotoxicosis"], 0, "Botulinum toxin is a potent zinc metalloprotease that cleaves SNARE proteins, blocking ACh release and inducing flaccid paralysis."],
  ["Campylobacter jejuni is a major bacterial cause of gastroenteritis worldwide, frequently contracted from:", ["Undercooked poultry and unpasteurized milk", "Canned acidic fruit juices", "Deep well mineral water", "Boiled vegetables"], 0, "Campylobacter jejuni colonizes avian intestines and is commonly transmitted by consuming undercooked chicken meat or unpasteurized dairy."],
  ["Which organism causes relapsing fever and is transmitted by human body lice (Pediculus humanus)?", ["Borrelia recurrentis", "Rickettsia prowazekii", "Bartonella quintana", "Coxiella burnetii"], 0, "Louse-borne epidemic relapsing fever is caused by the spirochete Borrelia recurrentis, transmitted by crushing body lice on abraded skin."],
  ["Epidemic typhus, an acute febrile disease historically associated with wars and refugees, is caused by:", ["Rickettsia prowazekii transmitted by body lice", "Rickettsia rickettsii transmitted by ticks", "Orientia tsutsugamushi transmitted by chiggers", "Coxiella burnetii transmitted by aerosols"], 0, "Rickettsia prowazekii causes epidemic typhus and is transmitted by the human body louse Pediculus humanus corporis."],
  ["Rocky Mountain spotted fever is caused by Rickettsia rickettsii and transmitted by:", ["Dermacentor ticks", "Xenopsylla fleas", "Aedes mosquitoes", "Triatoma bugs"], 0, "Rickettsia rickettsii is transmitted in North America primarily by Dermacentor variabilis (dog tick) and Dermacentor andersoni (wood tick)."],
  ["Scrub typhus is caused by Orientia tsutsugamushi and transmitted by the larval stage (chiggers) of:", ["Trombiculid mites (Leptotrombidium)", "Sarcoptes scabiei", "Demodex folliculorum", "Argasid ticks"], 0, "Scrub typhus is transmitted through the bites of infected larval trombiculid mites (chiggers) that feed on skin fluids."],
  ["Scabies is an intensely pruritic ectoparasitic dermatosis caused by the burrowing mite:", ["Sarcoptes scabiei", "Pediculus humanus", "Pthirus pubis", "Cimex lectularius"], 0, "Sarcoptes scabiei var. hominis burrows into the stratum corneum of human skin, laying eggs and triggering an allergic hypersensitivity reaction with intense pruritus."],
  ["Which nematode commonly known as the human hookworm penetrates through intact human foot skin?", ["Ancylostoma duodenale and Necator americanus", "Enterobius vermicularis", "Trichuris trichiura", "Strongyloides stercoralis only"], 0, "Filariform larvae of Ancylostoma duodenale and Necator americanus penetrate bare skin (typically between toes), enter venous circulation, and migrate to the small intestine."],
  ["Enterobius vermicularis (pinworm or threadworm) infection is diagnosed clinically by demonstrating eggs collected from the:", ["Perianal skin using a cellophane (Scotch tape) swab in the early morning", "Deep sputum sample after hypertonic saline induction", "Centrifuged cerebrospinal fluid sediment", "Twenty-four-hour pooled urine sample"], 0, "Gravid female pinworms migrate nocturnally out of the anus to deposit eggs on perianal folds, readily detected with the Scotch tape swab technique."],
  ["Trichuris trichiura is commonly referred to in medical helminthology as the:", ["Human whipworm", "Human hookworm", "Pinworm", "Pork tapeworm"], 0, "Trichuris trichiura is named the whipworm because its anterior three-fifths is thin and hair-like, resembling a whip, while its posterior end is thicker."],
  ["Taenia saginata and Taenia solium are cestode tapeworms transmitted to humans by consuming poorly cooked:", ["Beef and pork, respectively", "Pork and beef, respectively", "Freshwater fish and sheep meat, respectively", "Poultry and goat meat, respectively"], 0, "Taenia saginata (beef tapeworm) is contracted from undercooked measly beef, whereas Taenia solium (pork tapeworm) is contracted from undercooked measly pork."],
  ["Cysticercosis, a serious condition where larval tapeworm cysts develop in human muscles, eyes, or brain (neurocysticercosis), is caused by:", ["Ingestion of Taenia solium eggs via contaminated food/water or autoinfection", "Ingestion of adult Taenia saginata proglottids", "Direct skin penetration by Taenia echinococcus oncospheres", "Bite of infected sandfly carrying hydatid cysts"], 0, "Human cysticercosis occurs when humans act as abnormal intermediate hosts by accidentally ingesting eggs of the pork tapeworm Taenia solium."],
  ["Echinococcus granulosus (the hydatid tapeworm) causes hydatid cyst disease in humans, where the definitive host is the:", ["Dog (canine family)", "Sheep", "Human", "Pig"], 0, "Echinococcus granulosus resides as an adult tapeworm in the intestines of dogs (definitive host), shedding eggs in dog feces that infect humans (accidental intermediate hosts)."],
  ["Diphyllobothrium latum, the broad fish tapeworm that causes megaloblastic anemia by competing for Vitamin $B_{12}$, is acquired by consuming:", ["Raw or undercooked freshwater fish harboring plerocercoid larvae", "Raw pork harboring cysticerci", "Raw mutton harboring hydatid fluid", "Contaminated leafy lettuce"], 0, "Diphyllobothrium latum is acquired from eating raw or inadequately cooked freshwater fish; it selectively deprives the host of Vitamin B12 in the ileum."],
  ["Fasciola hepatica is a digenetic trematode commonly known as the sheep liver fluke that infects the human:", ["Biliary passages and gallbladder", "Pulmonary interstitial spaces", "Splenic sinusoids", "Colonic submucosa"], 0, "Fasciola hepatica lives in the bile ducts and gallbladder of sheep, cattle, and humans, feeding on blood, bile, and epithelial lining."],
  ["Clonorchis sinensis (the Chinese liver fluke) is contracted by humans through the ingestion of:", ["Undercooked freshwater fish harboring encysted metacercariae", "Raw watercress containing cercariae", "Crab meat harboring rediae", "Unpasteurized goat milk"], 0, "Humans acquire Clonorchis sinensis by eating raw or insufficiently cooked freshwater cyprinid fish containing infective metacercarial cysts."],
  ["Paragonimus westermani, the human lung fluke, causes chronic hemoptysis and is acquired by eating:", ["Raw or pickled freshwater crabs or crayfish", "Freshwater snails directly", "Raw saltwater oysters", "Undercooked poultry"], 0, "Paragonimus westermani infection results from consuming raw or undercooked freshwater crustaceans (crabs or crayfish) harboring metacercariae."],
  ["Toxoplasmosis is caused by Toxoplasma gondii, an obligate intracellular protozoan whose definitive feline host is the:", ["Domestic or wild cat (Felidae family)", "Dog", "Pig", "Rodent"], 0, "Cats are the definitive hosts of Toxoplasma gondii; sexual reproduction occurs in their intestinal epithelium, shedding hardy oocysts into soil and litter boxes."],
  ["Congenital toxoplasmosis occurs when a pregnant mother contracts a primary infection, leading to:", ["Hydrocephalus, chorioretinitis, and intracranial calcifications in the fetus", "Polydactyly and cleft palate only", "Bilateral renal agenesis and hypoplasia", "Immediate masculinization of female external genitalia"], 0, "Maternal primary Toxoplasma infection during pregnancy can cause transplacental transmission resulting in the classic triad: hydrocephalus, chorioretinitis, and intracranial calcification."],
  ["Cryptosporidium parvum is a protozoan parasite that causes severe, life-threatening chronic watery diarrhea in:", ["Immunocompromised patients, especially those with advanced AIDS", "Athletes consuming high-protein diets", "Individuals residing at high altitudes", "Patients with isolated lactase deficiency"], 0, "Cryptosporidium parvum forms chlorine-resistant oocysts; while causing self-limiting diarrhea in immunocompetent hosts, it produces intractable, fatal diarrhea in AIDS patients."],
  ["Giardiasis (beaver fever), presenting with greasy foul-smelling diarrhea and flatulence without blood, is caused by:", ["Giardia lamblia (flagellated protozoan residing in upper small intestine)", "Entamoeba histolytica", "Balantidium coli", "Isospora belli"], 0, "Giardia lamblia trophozoites use a ventral sucking disc to adhere to the duodenal and jejunal mucosa, causing fat malabsorption and steatorrhea."],
  ["Balantidium coli is the only ciliated protozoan known to cause human dysentery, primarily transmitted from:", ["Pigs (swine reservoir) via contaminated water or food", "Domestic cats via aerosols", "Wild birds via plumage", "Freshwater snails via slime"], 0, "Pigs serve as the major reservoir host for Balantidium coli; humans acquire the infection by ingesting cysts in food or water contaminated with pig feces."],
  ["Trichomonas vaginalis is a flagellated protozoan causing vaginitis and urethritis that possesses:", ["No cystic stage; exists only as a motile trophozoite transmitted sexually", "A thick double-walled resistant cyst stage that survives in dry sand", "An intermediate snail host in freshwater ponds", "An intracellular erythrocytic schizogony cycle"], 0, "Trichomonas vaginalis lacks a cyst form; transmission occurs directly from person to person via trophozoites during sexual intercourse."],
  ["Which pathogenic fungus causes 'Rose gardener's disease' (sporotrichosis) through traumatic skin puncture from rose thorns?", ["Sporothrix schenckii", "Candida albicans", "Cryptococcus neoformans", "Aspergillus fumigatus"], 0, "Sporothrix schenckii is a thermally dimorphic fungus found in soil and plant vegetation that causes subacute/chronic nodular lymphocutaneous lesions upon thorn pricks."],
  ["Blastomycosis is a systemic fungal infection caused by Blastomyces dermatitidis, endemic in soil near decaying wood, characterized by:", ["Broad-based budding yeasts under microscopic examination", "Narrow-based budding yeasts with thick polysaccharide capsules", "Septate hyphae branching at acute $45^\\circ$ angles", "Pseudohyphae with germ tubes at $37^\\circ\\text{C}$"], 0, "Blastomyces dermatitidis in tissue appears as large, round, thick-walled yeast cells with characteristic broad-based budding."],
  ["Histoplasmosis (Darling's disease) is caused by Histoplasma capsulatum, which proliferates inside host macrophages and is associated with:", ["Soil enriched with bird or bat droppings (guano) in caves and chicken coops", "Arid desert sand dunes without animal life", "Thermal hot springs with sulfur deposits", "High-salinity coastal mud flats"], 0, "Histoplasma capsulatum spores are aerosolized from soil heavily contaminated with bird or bat guano, causing pulmonary infection upon inhalation."],
  ["Coccidioidomycosis (Valley Fever) is endemic in arid desert regions of the southwestern United States and is caused by inhalation of:", ["Arthroconidia of Coccidioides immitis/posadasii", "Ascospores of Saccharomyces", "Basidiospores of Agaricus", "Zygospores of Rhizopus"], 0, "Coccidioides thrives in alkaline desert soil; barrel-shaped arthroconidia fracture, become airborne with dust storms, and form large endospore-filled spherules in lungs."],
  ["Cryptococcus neoformans is an opportunistic encapsulated yeast that commonly causes fatal meningitis in AIDS patients, identified by:", ["India ink negative staining demonstrating a wide halo-like polysaccharide capsule", "Gram-negative spiral flagellated rods", "Acid-fast Ziehl-Neelsen red rods", "PAS-negative non-septate hyphae"], 0, "Cryptococcus neoformans has an antiphagocytic glucuronoxylomannan polysaccharide capsule that appears as a clear halo around the yeast cell against black India ink."],
  ["Candida albicans is a polymorphic fungal commensal that produces oral thrush, vaginal candidiasis, and systemic fungemia when:", ["Host immune defenses are impaired or normal bacterial microflora is suppressed by antibiotics", "Dietary intake of sodium chloride is elevated", "Atmospheric oxygen pressure rises above normal", "Gastric secretion of hydrochloric acid increases tenfold"], 0, "Candida albicans overgrows opportunistically when broad-spectrum antibiotics eliminate competing bacterial flora or when cell-mediated immunity is depressed."],
  ["Aspergillus fumigatus can form a fungus ball (aspergilloma) inside pre-existing pulmonary cavities formed by:", ["Previous tuberculosis or sarcoidosis", "Congenital absence of bronchial cilia", "Acute carbon monoxide poisoning", "Traumatic fracture of rib bones"], 0, "Aspergilloma (fungus ball composed of fungal hyphae, cellular debris, and mucus) typically colonizes pre-existing cavities caused by healed tuberculosis."],
  ["Mucormycosis (black fungus) is a life-threatening angioinvasive fungal infection caused by Mucorales (Rhizopus, Mucor) that predominantly strikes:", ["Uncontrolled diabetic ketoacidosis and severely immunocompromised patients", "Healthy adolescents following strenuous physical exercise", "Infants receiving exclusive breast milk feeding", "Adults living at high altitudes with low humidity"], 0, "Mucorales fungi aggressively invade arterial walls causing thrombosis, ischemic necrosis, and black eschars, especially in poorly controlled diabetics with ketoacidosis."],
  ["Which antiviral medication is widely used as a competitive inhibitor of herpesvirus DNA polymerase?", ["Acyclovir", "Amphotericin B", "Metronidazole", "Ciprofloxacin"], 0, "Acyclovir is selectively monophosphorylated by viral thymidine kinase and subsequently triphosphorylated to inhibit herpesvirus DNA polymerase."],
  ["Which antimicrobial agent is the drug of choice for treating anaerobic protozoan infections like amoebiasis, giardiasis, and trichomoniasis?", ["Metronidazole", "Penicillin G", "Streptomycin", "Chloroquine"], 0, "Metronidazole enters anaerobic microorganisms where its nitro group is reduced to toxic reactive intermediates that damage microbial DNA."],
  ["Artemisinin-based combination therapy (ACT) is currently the globally recommended frontline treatment for uncomplicated:", ["Plasmodium falciparum malaria", "Visceral leishmaniasis", "Lymphatic filariasis", "Amoebic liver abscess"], 0, "ACTs combine rapid-acting artemisinin derivatives with a partner drug of a longer half-life, ensuring high cure rates and curbing drug resistance in P. falciparum."],
  ["Diethylcarbamazine (DEC) is the drug of choice for the mass treatment and elimination of:", ["Lymphatic filariasis caused by Wuchereria bancrofti", "Intestinal amoebiasis", "Ringworm fungal infections", "Inhalational anthrax"], 0, "Diethylcarbamazine (DEC) is an effective microfilaricidal agent used in global mass drug administration programs against lymphatic filariasis."],
  ["Albendazole and Mebendazole exert their broad-spectrum anthelmintic action against intestinal nematodes by:", ["Inhibiting microtubule polymerization by binding to beta-tubulin", "Blocking calcium channels in vascular smooth muscle", "Inhibiting bacterial 50S ribosomal protein synthesis", "Activating gamma-aminobutyric acid (GABA) receptors in human nerves"], 0, "Benzimidazoles (albendazole, mebendazole) selectively bind to helminth beta-tubulin, blocking microtubule assembly and disrupting glucose uptake."],
  ["Ivermectin is an anthelmintic agent that immobilizes nematodes by acting as an agonist on:", ["Glutamate-gated chloride channel receptors", "Nicotinic acetylcholine receptors in neuromuscular junction", "Beta-adrenergic receptors in cardiac myocytes", "Voltage-gated sodium channels in axonal membranes"], 0, "Ivermectin enhances inhibitory neurotransmission via invertebrate glutamate-gated chloride channels, causing hyperpolarization and flaccid paralysis."],
  ["Which vector is responsible for transmitting Epidemic Louse-borne Typhus (Rickettsia prowazekii)?", ["Pediculus humanus corporis (human body louse)", "Pulex irritans (human flea)", "Cimex lectularius (bedbug)", "Dermacentor variabilis (dog tick)"], 0, "The human body louse (Pediculus humanus corporis) transmits Rickettsia prowazekii when feces rubbed into bite abrasions infect the host."],
  ["Murine (endemic) typhus is caused by Rickettsia typhi and transmitted from urban rat reservoirs to humans by:", ["Xenopsylla cheopis (oriental rat flea)", "Pediculus capitis (head louse)", "Ixodes scapularis (deer tick)", "Musca domestica (housefly)"], 0, "Rickettsia typhi is transmitted by the oriental rat flea (Xenopsylla cheopis), which defecates during feeding on human skin."],
  ["Which vector transmits Yellow fever and Dengue hemorrhagic fever in urban tropical zones?", ["Aedes aegypti mosquito", "Anopheles stephensi mosquito", "Culex quinquefasciatus mosquito", "Mansonia annulifera mosquito"], 0, "Aedes aegypti is the primary day-biting mosquito vector that transmits both Yellow fever virus and all four serotypes of Dengue virus."],
  ["Zika virus infection, transmitted by Aedes mosquitoes, is associated with a catastrophic congenital anomaly known as:", ["Microcephaly in infants born to infected pregnant mothers", "Situs inversus totalis", "Spina bifida occulta", "Achondroplastic dwarfism"], 0, "Zika virus exhibits neurotropism for fetal neural progenitor cells, causing severe microcephaly, cerebral cortical thinning, and ocular defects."],
  ["Rabies virus (Rhabdoviridae) is transmitted to humans primarily through bites of infected rabid animals and migrates to the central nervous system via:", ["Retrograde axonal transport along peripheral nerves", "Hematogenous dissemination within red blood cells", "Direct lymphatic drainage into the thoracic duct", "Trans-placental viral budding"], 0, "Rabies virus binds to acetylcholine receptors at neuromuscular junctions and travels centripetally via retrograde axoplasmic flow to the spinal cord and brain."],
  ["The pathognomonic histological finding within neurons in fatal rabies encephalitis is the presence of:", ["Negri bodies (intracytoplasmic eosinophilic viral inclusions)", "Cowdry type A intranuclear inclusions", "Lewy bodies composed of alpha-synuclein", "Neurofibrillary tangles composed of tau"], 0, "Negri bodies are round or oval eosinophilic intracytoplasmic inclusions found in the cytoplasm of pyramidal neurons of Ammon's horn and Purkinje cells."],
  ["Hydrophobia (fear of water) in rabies patients is clinically caused by:", ["Violent, painful spastic contractions of pharyngeal muscles when attempting to swallow liquids", "Severe chemical irritation of the tongue by water molecules", "Dehydration-induced mental hallucinations", "Sudden paralysis of the renal glomeruli"], 0, "When patients with furious rabies attempt to swallow water, involuntary, agonizing spasms of the pharyngeal and laryngeal muscles occur, producing extreme hydrophobia."],
  ["Tetanospasmin, the exotoxin produced by Clostridium tetani, causes spastic paralysis by preventing the release of:", ["Inhibitory neurotransmitters (GABA and glycine) from Renshaw cells", "Excitatory neurotransmitter acetylcholine from motor endplates", "Dopamine from substantia nigra neurons", "Norepinephrine from postganglionic sympathetic terminals"], 0, "Tetanospasmin undergoes retrograde axonal transport to spinal cord inhibitory interneurons (Renshaw cells), cleaving synaptobrevin and blocking GABA and glycine release."],
  ["Botulinum neurotoxin causes flaccid muscle paralysis by cleaving SNARE proteins, which blocks the release of:", ["Acetylcholine at the neuromuscular junction", "Glycine in the spinal cord anterior horn", "Glutamate in the cerebral cortex", "Serotonin in the dorsal raphe nuclei"], 0, "Botulinum neurotoxin enters motor nerve endings and enzymatically cleaves SNARE complex proteins, preventing synaptic vesicle fusion and acetylcholine exocytosis."],
  ["Diphtheria toxin produced by Corynebacterium diphtheriae inhibits host cell protein synthesis by:", ["ADP-ribosylating elongation factor 2 (EF-2)", "Inactivating the 60S ribosomal subunit by removing an adenine base", "Phosphorylating RNA polymerase II", "Cleaving initiator tRNA-methionine"], 0, "Diphtheria toxin fragment A catalyzes the transfer of ADP-ribose from NAD+ to elongation factor 2 (EF-2), halting peptide chain elongation and killing host cells."],
  ["Shiga toxin produced by Shigella dysenteriae and Shiga-like toxins of EHEC inhibit protein synthesis in human cells by:", ["Cleaving a specific adenine base from 28S rRNA of the 60S ribosomal subunit", "Binding irreversibly to the peptidyl transferase center of 50S ribosomes", "Inactivating eukaryotic initiation factor 2 (eIF-2)", "Blocking tRNA charging by aminoacyl-tRNA synthetases"], 0, "Shiga toxin is an N-glycosidase that cleaves an adenine residue from 28S ribosomal RNA of the eukaryotic 60S subunit, arresting host protein synthesis."],
  ["Cholera toxin (choleragen) induces profuse secretory diarrhea by permanently activating:", ["Gs protein alpha subunit, causing sustained elevated levels of intracellular cAMP", "Gi protein alpha subunit, causing a decrease in intracellular cGMP", "Phospholipase C, resulting in massive inositol triphosphate breakdown", "Potassium leak channels in the basolateral membrane"], 0, "Cholera toxin ADP-ribosylates the alpha subunit of Gs protein, locking it into an active GTP-bound state, continuously stimulating adenylate cyclase to elevate cAMP."],
  ["Pertussis toxin produced by Bordetella pertussis ADP-ribosylates the alpha subunit of:", ["Gi protein, inactivating it and preventing the inhibition of adenylate cyclase", "Gs protein, stimulating it to activate protein kinase C", "Gq protein, blocking intracellular calcium release", "Transducin, causing retinal photoreceptor degeneration"], 0, "Pertussis toxin ADP-ribosylates Gi alpha, preventing it from inhibiting adenylate cyclase, resulting in accumulated cAMP and altered cellular signaling."],
  ["The Mantoux test induration measurement for Mycobacterium tuberculosis is read clinically after:", ["48 to 72 hours", "10 to 15 minutes", "2 to 4 hours", "7 to 10 days"], 0, "The tuberculin skin test (Mantoux test) is a Type IV delayed-type hypersensitivity reaction that peaks and is clinically measured 48 to 72 hours after intradermal injection."],
  ["Acid-fastness of Mycobacterium tuberculosis and Mycobacterium leprae during Ziehl-Neelsen staining is due to the presence of:", ["High concentrations of mycolic acids in their complex lipid-rich cell wall", "Peptidoglycan cross-linked by teichoic acid monomers", "A thick cellulose and chitin capsule", "Lipopolysaccharide O-antigen outer membrane"], 0, "Mycolic acids—long, branched fatty acids in the mycobacterial cell envelope—prevent decolorization by acid-alcohol, conferring characteristic acid-fastness."],
  ["Lepromatous leprosy differs from tuberculoid leprosy by exhibiting:", ["High bacterial load, anergy/defective cell-mediated immunity, and extensive skin lesions (leonine facies)", "Strong cell-mediated immunity and very few isolated skin lesions", "Absence of cutaneous lesions with isolated cardiac involvement only", "Complete spontaneous cure within 24 hours of infection"], 0, "Lepromatous leprosy is the multibacillary form marked by poor T-cell response (anergy), high bacterial multiplication, and diffuse infiltrated plaques producing leonine facies."],
  ["Which antibiotic group acts by inhibiting bacterial cell wall peptidoglycan synthesis via transpeptidase binding?", ["Beta-lactams (Penicillins and Cephalosporins)", "Aminoglycosides (Gentamicin and Streptomycin)", "Tetracyclines (Doxycycline)", "Macrolides (Azithromycin)"], 0, "Beta-lactam antibiotics contain a 4-membered beta-lactam ring that covalently binds to transpeptidases (penicillin-binding proteins), blocking peptidoglycan cross-linking."],
  ["Vancomycin inhibits bacterial cell wall synthesis by:", ["Binding directly to the D-alanyl-D-alanine terminus of peptidoglycan precursors", "Inhibiting topoisomerase II (DNA gyrase)", "Intercalating into DNA double helices", "Inhibiting dihydrofolate reductase"], 0, "Vancomycin is a glycopeptide antibiotic that binds tightly to D-Ala-D-Ala peptides, sterically preventing transglycosylation and transpeptidation of peptidoglycan."],
  ["Aminoglycosides (such as streptomycin and gentamicin) exert their bactericidal action by binding to the:", ["30S ribosomal subunit, causing misreading of genetic code and halting protein synthesis", "50S ribosomal subunit, blocking peptide bond formation", "DNA-dependent RNA polymerase, blocking transcription initiation", "Phospholipids of outer cell membrane, causing osmotic lysis"], 0, "Aminoglycosides bind irreversibly to the bacterial 30S ribosomal subunit, inducing codon misreading, accumulation of abnormal proteins, and cell membrane damage."],
  ["Tetracyclines inhibit bacterial protein synthesis by:", ["Reversibly binding to the 30S ribosomal subunit and blocking aminoacyl-tRNA from entering the A site", "Binding to the 50S subunit and blocking peptidyl transferase", "Inactivating bacterial elongation factor G", "Stimulating premature termination of polypeptide chains"], 0, "Tetracyclines bind to the 30S subunit of the bacterial ribosome, preventing access of aminoacyl-tRNA to the ribosomal acceptor (A) site."],
  ["Chloramphenicol inhibits bacterial protein synthesis by specifically binding to the:", ["50S ribosomal subunit and inhibiting the enzyme peptidyl transferase", "30S ribosomal subunit and preventing mRNA binding", "RNA polymerase beta subunit and inhibiting elongation", "DNA gyrase and causing double-strand breaks"], 0, "Chloramphenicol binds to the 50S ribosomal subunit near the peptidyl transferase center, directly preventing peptide bond synthesis."],
  ["Macrolides (such as erythromycin and azithromycin) inhibit bacterial protein synthesis by binding to the:", ["50S ribosomal subunit and inhibiting translocation of peptidyl-tRNA from A to P site", "30S ribosomal subunit and altering start codon recognition", "Bacterial cell wall lipid II intermediate", "Bacterial outer membrane porin channels"], 0, "Macrolides reversibly bind to the 23S rRNA in the 50S subunit, preventing translocation of the elongating peptide chain along the ribosome."],
  ["Fluoroquinolones (such as ciprofloxacin and levofloxacin) exert their bactericidal effect by inhibiting:", ["Bacterial topoisomerase II (DNA gyrase) and topoisomerase IV", "Bacterial dihydrofolate reductase", "Peptidoglycan transglycosylase", "RNA polymerase sigma factor"], 0, "Fluoroquinolones inhibit bacterial DNA gyrase (preventing supercoiling relaxation) and topoisomerase IV (preventing decatenation of daughter chromosomes)."],
  ["Rifampicin exerts its powerful bactericidal effect against Mycobacterium tuberculosis by inhibiting:", ["DNA-dependent RNA polymerase, thereby blocking bacterial transcription", "Bacterial cell membrane ergosterol synthesis", "Fatty acid synthase I and II enzymes", "D-alanyl-D-alanine ligase"], 0, "Rifampicin binds to the beta subunit of bacterial DNA-dependent RNA polymerase, blocking the initiation of RNA synthesis."],
  ["Sulfonamides act as bacteriostatic antimicrobial agents by competitively inhibiting:", ["Dihydropteroate synthase due to structural similarity to para-aminobenzoic acid (PABA)", "Dihydrofolate reductase due to resemblance to folic acid", "Bacterial thymidylate synthase", "Carbamoyl phosphate synthetase I"], 0, "Sulfonamides are structural analogs of PABA that competitively inhibit dihydropteroate synthase, halting de novo bacterial folate synthesis."],
  ["Trimethoprim enhances the efficacy of sulfonamides through sequential blockade by inhibiting:", ["Dihydrofolate reductase (DHFR)", "Dihydropteroate synthase", "Purine nucleoside phosphorylase", "Ribonucleotide reductase"], 0, "Trimethoprim competitively inhibits bacterial dihydrofolate reductase, blocking the subsequent reduction of dihydrofolate to tetrahydrofolate."],
  ["Which fungal cell membrane constituent is targeted by polyene antifungals like Amphotericin B and Nystatin?", ["Ergosterol", "Cholesterol", "Beta-glucan", "Chitin"], 0, "Amphotericin B binds selectively to fungal membrane ergosterol, forming ion channels and pores that cause leakage of intracellular potassium and cell death."],
  ["Azole antifungal drugs (such as fluconazole and ketoconazole) inhibit fungal growth by blocking the enzyme:", ["14-alpha-demethylase, disrupting ergosterol biosynthesis", "Beta-(1,3)-D-glucan synthase", "Chitin synthase-2", "Squalene epoxidase"], 0, "Azoles inhibit the fungal cytochrome P450 enzyme 14-alpha-demethylase, which converts lanosterol to ergosterol, depleting ergosterol and accumulating toxic sterols."],
  ["Echinocandins (such as caspofungin and micafungin) exert their antifungal activity by inhibiting:", ["Synthesis of beta-(1,3)-D-glucan in the fungal cell wall", "Squalene monooxygenase in fungal microsomes", "Fungal topoisomerase I", "Fungal mitochondrial cytochrome c oxidase"], 0, "Echinocandins non-competitively inhibit beta-(1,3)-D-glucan synthase, disrupting fungal cell wall structural integrity and leading to osmotic lysis."],
  ["Griseofulvin is an oral antifungal agent used for dermatophytic skin and nail infections that acts by:", ["Disrupting fungal mitotic spindle assembly through interaction with polymerized microtubules", "Forming pores in cell membrane ergosterol", "Inhibiting fungal protein synthesis at the 60S ribosome", "Cleaving viral double-stranded RNA"], 0, "Griseofulvin concentrates in keratin precursor cells and binds to fungal tubulin, disrupting mitotic spindle formation and arresting fungal mitosis at metaphase."],
  ["Terbinafine is an allylamine antifungal drug that treats onychomycosis by inhibiting:", ["Squalene epoxidase, blocking early ergosterol biosynthesis and accumulating toxic squalene", "14-alpha-demethylase", "Thymidylate synthase", "DNA gyrase"], 0, "Terbinafine inhibits squalene epoxidase, preventing conversion of squalene to lanosterol, which depletes ergosterol and accumulates cytotoxic squalene in fungi."],
  ["Which human viral infection is characterized by parotid salivary gland swelling, orchitis, and pancreatitis?", ["Mumps (Rubulavirus)", "Measles (Morbillivirus)", "Rubella (Rubivirus)", "Varicella-zoster virus"], 0, "Mumps virus causes painful swelling of the parotid glands, with potential complications including epididymo-orchitis, aseptic meningitis, and pancreatitis."],
  ["Koplik's spots—small white spots surrounded by red halos on the buccal mucosa—are pathognomonic diagnostic signs of:", ["Measles (Rubeola)", "Scarlet fever", "Chickenpox (Varicella)", "Rubella (German measles)"], 0, "Koplik spots are diagnostic enanthems appearing on the buccal mucosa opposite the second molars a few days before the onset of the measles rash."],
  ["Chickenpox is caused by Varicella-Zoster Virus (VZV), which can reactivate years later from dorsal root sensory ganglia as:", ["Herpes zoster (Shingles)", "Infectious mononucleosis", "Kaposi's sarcoma", "Exanthema subitum"], 0, "After primary infection (chickenpox), VZV remains latent in cranial nerve and dorsal root ganglia, reactivating as painful dermatomal herpes zoster (shingles)."],
  ["Epstein-Barr Virus (EBV), a member of the Herpesviridae family, is the primary etiological agent of:", ["Infectious mononucleosis ('kissing disease')", "Progressive multifocal leukoencephalopathy", "Subacute sclerosing panencephalitis", "Erythema infectiosum"], 0, "EBV infects B lymphocytes via CD21 receptors, causing infectious mononucleosis characterized by fever, lymphadenopathy, pharyngitis, and atypical reactive T cells."],
  ["Human Papillomavirus (HPV) high-risk oncogenic types 16 and 18 are strongly associated with:", ["Cervical carcinoma", "Hepatocellular carcinoma", "Burkitt lymphoma", "Nasopharyngeal carcinoma"], 0, "HPV types 16 and 18 produce E6 and E7 oncoproteins that inactivate p53 and pRb tumor suppressor pathways, driving cervical intraepithelial neoplasia and cancer."],
  ["Which hepatitis virus possesses a partially double-stranded circular DNA genome and replicates via an RNA intermediate using reverse transcriptase?", ["Hepatitis B virus (HBV)", "Hepatitis A virus (HAV)", "Hepatitis C virus (HCV)", "Hepatitis E virus (HEV)"], 0, "Hepatitis B virus is a Hepadnavirus with a relaxed circular partially double-stranded DNA genome that uses reverse transcriptase during its replication cycle."],
  ["Hepatitis D virus (HDV) is a defective single-stranded circular RNA satellite virus that can only replicate and cause infection in the presence of:", ["Hepatitis B virus surface antigen (HBsAg)", "Hepatitis A viral capsid protein", "Human Immunodeficiency Virus glycoprotein 120", "Epstein-Barr viral nuclear antigen"], 0, "Hepatitis D virus is a viroid-like subviral agent that requires HBsAg coating from a co-existing or preceding Hepatitis B infection to assemble and infect hepatocytes."],
  ["Which hepatitis virus is transmitted enterically via the fecal-oral route through contaminated drinking water and causes severe mortality in pregnant women?", ["Hepatitis E virus (HEV)", "Hepatitis B virus (HBV)", "Hepatitis C virus (HCV)", "Hepatitis D virus (HDV)"], 0, "Hepatitis E virus is enterically transmitted via contaminated water; it causes acute self-limiting hepatitis in the general public but up to 20-25% mortality in pregnant women."],
  ["Which component of the influenza virus envelope binds to sialic acid receptors on host respiratory epithelial cells to facilitate viral entry?", ["Hemagglutinin (HA)", "Neuraminidase (NA)", "Matrix protein 2 (M2)", "Nucleoprotein (NP)"], 0, "Influenza hemagglutinin (HA) binds to host surface sialic acid glycoproteins to initiate receptor-mediated endocytosis into respiratory epithelial cells."],
  ["Neuraminidase inhibitors (such as oseltamivir and zanamivir) act against influenza A and B viruses by:", ["Preventing the release and budding of newly formed virions from the host cell surface", "Inactivating viral RNA-dependent RNA polymerase", "Blocking the viral M2 proton channel and preventing uncoating", "Inhibiting viral mRNA translation at the host ribosome"], 0, "Neuraminidase cleaves terminal sialic acid residues from host glycoproteins; its inhibition traps newly assembled virions at the cell surface, preventing viral spread."],
  ["Antigenic drift in influenza viruses is caused by:", ["Gradual accumulation of point mutations in hemagglutinin and neuraminidase genes during replication", "Sudden reassortment of segmented RNA genomes between different influenza strains", "Acquisition of antibiotic resistance plasmids from host bacteria", "Integration of the influenza genome into host nuclear chromatin"], 0, "Antigenic drift arises from error-prone viral RNA polymerase creating point mutations that slightly alter HA and NA epitopes, causing seasonal epidemics."],
  ["Antigenic shift, which can trigger devastating global influenza pandemics, is characterized by:", ["Genetic reassortment of RNA gene segments when two different influenza strains infect the same host cell", "Gradual minor nucleotide substitutions in viral envelope genes", "Loss of the viral neuraminidase gene envelope protein", "Spontaneous conversion of an RNA virus into a DNA virus"], 0, "Antigenic shift occurs when segmented RNA genomes from different strains (e.g. avian and human) reassort inside a single host, creating an entirely novel subtype."],
  ["Which infectious protozoan disease is characterized by 'Winterbottom sign' (posterior cervical lymphadenopathy)?", ["African trypanosomiasis (sleeping sickness)", "Chagas disease", "Visceral leishmaniasis", "Cutaneous amoebiasis"], 0, "Winterbottom sign is posterior cervical lymph node enlargement seen in early Trypanosoma brucei rhodesiense/gambiense infection."],
  ["Romana sign (unilateral painless periorbital edema and conjunctivitis) is diagnostic of early acute:", ["Chagas disease (Trypanosoma cruzi)", "African sleeping sickness", "Ocular toxoplasmosis", "Trichinosis"], 0, "Romana sign occurs when Trypanosoma cruzi enters through the conjunctiva or facial skin abrasions contaminated with triatomine feces."],
  ["Which parasite causes hydatid alveolar echinococcosis, a highly aggressive tumor-like liver disease?", ["Echinococcus multilocularis", "Echinococcus granulosus", "Taenia solium", "Hymenolepis nana"], 0, "Echinococcus multilocularis causes alveolar echinococcosis, forming budding larval vesicles that invade and destroy hepatic parenchyma."],
  ["The dwarf tapeworm, Hymenolepis nana, is unique among human cestodes because:", ["It can complete its entire life cycle within a single human host without an obligate intermediate host", "It reaches lengths exceeding 10 meters in the colon", "It possesses four suckers but completely lacks an armed rostellum", "It requires a cattle intermediate host"], 0, "Hymenolepis nana can undergo internal autoinfection, completing both larval and adult stages inside the human small intestine."],
  ["Cutaneous larva migrans (creeping eruption) is caused by accidental human skin penetration by larvae of:", ["Ancylostoma braziliense or Ancylostoma caninum (dog/cat hookworms)", "Ascaris lumbricoides", "Enterobius vermicularis", "Wuchereria bancrofti"], 0, "Animal hookworm larvae cannot penetrate deeper human tissues and wander within the epidermis, causing serpiginous, intensely pruritic tracks."],
  ["Visceral larva migrans in children who ingest soil contaminated with dog or cat feces is caused by:", ["Toxocara canis or Toxocara cati larvae", "Trichuris trichiura", "Strongyloides stercoralis", "Dracunculus medinensis"], 0, "Toxocara larvae hatch in the human intestine and migrate through liver, lungs, and brain, provoking hypereosinophilia and granulomatous inflammation."]
];

moreMcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part1.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 1: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
