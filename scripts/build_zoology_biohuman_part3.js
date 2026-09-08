// scripts/build_zoology_biohuman_part3.js
// Subtopic: Common diseases
// Chapter: Biology and Human Welfare
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Common diseases";
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
    a: "Health is not merely the absence of disease or physical fitness.",
    r: "Health is defined by the World Health Organization (WHO) as a state of complete physical, mental, and social well-being.",
    ans: 0,
    exp: "The modern medical and WHO definition recognizes health as a holistic equilibrium encompassing physical, mental, and social dimensions, rather than simply being free from organic disease. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Infectious diseases are easily transmitted from one person to another.",
    r: "Infectious diseases are caused by transmissible biological pathogens like bacteria, viruses, fungi, protozoa, and helminths.",
    ans: 0,
    exp: "Communicable pathogens possess evolved transmission modes (airborne, waterborne, vectors, direct contact) that allow rapid spread between susceptible hosts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Non-infectious diseases cannot spread from an affected person to a healthy person.",
    r: "Non-infectious diseases arise from internal factors like genetic defects, lifestyle choices, metabolic abnormalities, or environmental toxins rather than transmissible biological agents.",
    ans: 0,
    exp: "Non-communicable diseases (such as coronary artery disease, cancer, and hypertension) are non-transmissible because they do not involve infectious living agents. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Patients with acute cholera develop severe dehydration, electrolyte depletion, and hypovolemic shock within hours.",
    r: "Cholera toxin produced by Vibrio cholerae irreversibly activates adenylate cyclase in intestinal enterocytes, causing massive secretion of isotonic fluid into the bowel lumen.",
    ans: 0,
    exp: "Choleragen ADP-ribosylates Gs alpha, locking adenylate cyclase on and causing hypersecretion of chloride, water, and bicarbonate, presenting as classic rice-water diarrhea. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oral Rehydration Solution (ORS) is a life-saving therapy in acute diarrheal diseases like cholera.",
    r: "Intestinal absorption of sodium and water is coupled to glucose absorption via sodium-glucose cotransporters (SGLT-1), which remain functional despite cholera toxin.",
    ans: 0,
    exp: "Even when cholera toxin stimulates secretory chloride channels, SGLT-1 cotransporters remain intact; co-administering glucose with sodium drives water reabsorption by solvent drag. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tetanus is also known as lockjaw because the patient experiences agonizing spastic paralysis of masseter muscles.",
    r: "Tetanospasmin toxin produced by Clostridium tetani blocks the release of inhibitory neurotransmitters (glycine and GABA) in spinal interneurons.",
    ans: 0,
    exp: "Loss of spinal inhibition produces unchecked, continuous motor neuron firing, causing severe tonic muscle contractions (trismus / lockjaw and opisthotonos). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Diphtheria can cause fatal asphyxiation, especially in unimmunized young children.",
    r: "Corynebacterium diphtheriae produces a tough, leathery grayish pseudomembrane over the tonsils and larynx that can mechanically obstruct the airway.",
    ans: 0,
    exp: "The necrotic fibrinous pseudomembrane can dislodge or occlude the narrow pediatric airway, causing severe respiratory stridor and suffocation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Poliovirus infection leads to asymmetric, flaccid muscular paralysis without sensory loss.",
    r: "Poliovirus selectively replicates in and destroys the motor neurons located in the anterior horns of the spinal cord.",
    ans: 0,
    exp: "Poliovirus targets lower motor neurons in the anterior horn of spinal cord gray matter, causing denervation and flaccid paralysis while preserving dorsal sensory pathways. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dengue fever is colloquially called 'breakbone fever'.",
    r: "Dengue virus infection induces severe, agonizing retro-orbital headache, myalgia, and bone and joint pain.",
    ans: 0,
    exp: "Dengue infection causes intense musculoskeletal and retro-orbital pain so severe that it feels as though bones are breaking, hence the name breakbone fever. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A sudden drop in platelet count (thrombocytopenia) is a critical warning sign in Dengue hemorrhagic fever.",
    r: "Thrombocytopenia combined with increased vascular capillary permeability leads to spontaneous plasma leakage, shock, and hemorrhagic manifestations.",
    ans: 0,
    exp: "Immune destruction of platelets and bone marrow suppression in DHF, together with endothelial barrier disruption, cause hemoconcentration, hemorrhage, and dengue shock syndrome. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chikungunya fever is transmitted by the bite of the infected Aedes aegypti mosquito.",
    r: "Aedes aegypti mosquitoes bite almost exclusively during the day and breed in standing clean water containers.",
    ans: 1,
    exp: "Both statements are correct facts. Aedes aegypti is the urban day-biting vector for Chikungunya virus. Both (A) and (R) are true, but vector biting behavior (R) is an ecological characteristic rather than the biological explanation of viral transmission (A)."
  },
  {
    a: "Rabies is almost invariably fatal once clinical neurological symptoms develop in humans.",
    r: "Rabies virus establishes an acute, progressive, irreversible viral encephalomyelitis and neuronal destruction in the central nervous system.",
    ans: 0,
    exp: "Once rabies virus reaches the brain and clinical signs like hydrophobia appear, mortality approaches 100% due to catastrophic autonomic and respiratory brainstem failure. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Post-exposure prophylaxis (PEP) for rabies must be initiated immediately after an animal bite.",
    r: "The long incubation period of rabies virus (weeks to months) allows active vaccine-induced immunity to develop before the virus travels retrogradely into the central nervous system.",
    ans: 0,
    exp: "Because rabies virus travels slowly via axoplasmic flow (8-20 mm/day), administering rabies vaccine and rabies immunoglobulin promptly neutralizes the virus before it accesses the CNS. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tuberculosis typically presents with persistent cough, hemoptysis, fever, night sweats, and significant weight loss.",
    r: "Mycobacterium tuberculosis induces chronic granulomatous caseating necrosis and cavitation in pulmonary tissues.",
    ans: 0,
    exp: "Cell-mediated hypersensitivity produces granulomas (tubercles) with central cheese-like caseous necrosis; erosion into bronchial vessels causes hemoptysis and chronic wasting (consumption). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Directly Observed Treatment, Short-course (DOTS) is the standard global strategy for managing tuberculosis.",
    r: "DOTS ensures patient compliance by requiring healthcare workers to observe patients swallowing each dose of anti-TB medication, preventing emergence of multidrug-resistant strains.",
    ans: 0,
    exp: "Incomplete treatment is the main cause of drug resistance; DOTS guarantees adherence over the 6-month regimen, ensuring high cure rates and curbing drug resistance. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Koplik's spots on the buccal mucosa provide pathognomonic early diagnostic confirmation of measles.",
    r: "Koplik's spots appear 1 to 2 days before the generalized maculopapular cutaneous rash of measles appears.",
    ans: 1,
    exp: "Both statements are accurate. Koplik's spots are unique white enanthems on erythematous buccal mucosa diagnostic of measles, appearing 1-2 days before the skin rash. Both (A) and (R) are true, but (R) is a timeline statement rather than the histological mechanism of why they are pathognomonic."
  },
  {
    a: "Mumps infection in adolescent and adult males can cause testicular atrophy and sterility.",
    r: "Mumps virus exhibits a specific tropism for glandular tissues and can cause severe bilateral orchitis.",
    ans: 0,
    exp: "Mumps virus replicates in glandular epithelium; acute epididymo-orchitis produces severe testicular edema, ischemia, and seminiferous tubule atrophy. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Rubella infection in a pregnant woman during the first trimester can cause severe congenital malformations in the fetus.",
    r: "Rubella virus crosses the placenta and infects embryonic tissues, producing the classic congenital rubella triad: cataracts, cardiac defects, and sensorineural deafness.",
    ans: 0,
    exp: "During early organogenesis, rubella virus arrests cell division and damages fetal endothelial cells, resulting in severe congenital rubella syndrome (Gregg's triad). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Herpes zoster (shingles) occurs strictly along the dermatome supplied by a single sensory nerve.",
    r: "Varicella-zoster virus remains latent in sensory cranial nerve or dorsal root ganglia after chickenpox and reactivates along sensory nerve axons.",
    ans: 0,
    exp: "Latent VZV reactivates when cell-mediated immunity wanes, migrating anterograde along sensory axons to produce a painful vesicular dermatomal rash. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hepatitis B infection can lead to chronic liver cirrhosis and hepatocellular carcinoma.",
    r: "Hepatitis B virus is an oncogenic virus whose genomic DNA can integrate into the host hepatocyte chromosomes, driving neoplastic transformation.",
    ans: 0,
    exp: "Chronic HBV infection causes continuous immune-mediated hepatocyte destruction, regeneration, cirrhosis, and direct insertional mutagenesis leading to liver cancer. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hookworm infection (Ancylostoma duodenale) leads to profound iron-deficiency microcytic anemia.",
    r: "Adult hookworms attach to the intestinal mucosa with sharp teeth and suck blood continuously while secreting anticoagulants.",
    ans: 0,
    exp: "Each adult worm ingests up to $0.2\\text{ mL}$ of blood daily and causes bleeding from ulcerated mucosal attachment sites, leading to severe iron depletion. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Wearing footwear prevents the transmission of hookworm infection.",
    r: "Filariform larvae of hookworms present in fecally contaminated moist soil penetrate directly through bare human skin, particularly between the toes.",
    ans: 0,
    exp: "Infective filariform larvae enter by actively boring through intact foot epidermis; wearing shoes provides an impermeable barrier against larval penetration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Neurocysticercosis is a major cause of adult-onset epileptic seizures in developing countries.",
    r: "Ingestion of pork meat containing adult Taenia solium tapeworms causes immediate development of cysts in the human brain.",
    ans: 2,
    exp: "(A) is true because larval cysticerci in the brain provoke inflammation and seizures. (R) is false because human cysticercosis is contracted by ingesting Taenia solium eggs (via fecal-oral contamination), NOT by eating pork containing adult worms (which causes intestinal taeniasis)."
  },
  {
    a: "Enterobius vermicularis (pinworm) causes intense nocturnal perianal pruritus.",
    r: "Gravid female pinworms migrate nocturnally through the anus to deposit sticky eggs on the perianal skin.",
    ans: 0,
    exp: "The nocturnal migration of female worms and the irritation caused by oviposition and worm secretions produce intense itching, commonly causing sleep disturbances in children. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Regular physical exercise and yoga are effective in preventing non-communicable lifestyle diseases.",
    r: "Physical exercise improves insulin sensitivity, cardiovascular endurance, and lipid profiles, while lowering systemic blood pressure.",
    ans: 0,
    exp: "Regular aerobic exercise prevents metabolic syndrome, atherosclerosis, type 2 diabetes, and hypertension by optimizing physiological energy expenditure and vascular tone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Proper disposal of household and hospital waste is critical for public health.",
    r: "Uncollected refuse and untreated medical waste create breeding habitats for disease vectors and contaminate communal water supplies.",
    ans: 0,
    exp: "Inadequate sanitation promotes vector proliferation (flies, rodents, mosquitoes) and spreads enteric pathogens through contaminated groundwater. Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

// 154 MCQs
const mcqData = [];

function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-25: Health definitions, broad classifications, public health
addMcq(
  "According to the World Health Organization (WHO), health is formally defined as:",
  ["A state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity", "The ability to run five kilometers without shortness of breath", "Having normal blood pressure and fasting blood glucose levels", "The absence of detectable pathogenic bacteria in blood culture"],
  0,
  "The WHO constitution defines health as 'a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.'"
);
addMcq(
  "Which factor is considered fundamental for maintaining good physical and physiological health?",
  ["Balanced diet, personal hygiene, and regular physical exercise", "Consuming multivitamin tablets instead of meals", "Avoiding all forms of vaccination", "Complete isolation from sunlight and open air"],
  0,
  "NCERT emphasizes that a balanced diet, personal hygiene, and regular physical exercise (including yoga) are essential pillars for maintaining good health."
);
addMcq(
  "Which category of diseases is characterized by easy transmission from one infected individual to a healthy person?",
  ["Infectious (communicable) diseases", "Genetic chromosomal disorders", "Nutritional deficiency diseases", "Autoimmune organ-specific diseases"],
  0,
  "Infectious diseases are caused by biological agents (pathogens) and are readily transmitted from one person to another through various ecological routes."
);
addMcq(
  "Which disease among the following is a non-infectious, non-communicable condition that is a major cause of death globally?",
  ["Cancer", "Typhoid fever", "Pneumonia", "Common cold"],
  0,
  "Cancer is a non-infectious condition resulting from genetic and epigenetic cellular alterations, and represents one of the leading non-communicable causes of death."
);
addMcq(
  "Diseases that are present from birth due to chromosomal abnormalities or gene mutations are classified as:",
  ["Congenital diseases", "Acquired infectious diseases", "Occupational dermatoses", "Epidemic fevers"],
  0,
  "Congenital diseases (such as Down syndrome, hemophilia, sickle-cell anemia) are present at birth and result from genetic defects or adverse prenatal factors."
);

// 26-60: Bacterial diseases clinical distinctions
addMcq(
  "Which pathogenic bacterium is responsible for causing acute cholera in humans?",
  ["Vibrio cholerae", "Salmonella typhi", "Shigella flexneri", "Campylobacter jejuni"],
  0,
  "Vibrio cholerae is a comma-shaped, gram-negative bacterium that colonizes the human small intestine and produces cholera toxin."
);
addMcq(
  "What is the classic descriptive appearance of diarrhea stools in severe cholera?",
  ["Rice-water stools", "Pencil-thin black tarry stools", "Dry hard clay-colored pellets", "Stool containing frank red blood clots and excess mucus"],
  0,
  "Cholera diarrhea has a pathognomonic 'rice-water' appearance, containing flecks of mucus, epithelial cells, and high concentrations of sodium, potassium, and bicarbonate."
);
addMcq(
  "The primary, life-saving intervention for patients suffering from acute cholera diarrhea is:",
  ["Prompt Oral Rehydration Therapy (ORT) or intravenous fluids with electrolytes", "Immediate high-dose corticosteroid injections", "Complete water restriction to halt bowel movements", "Emergency exploratory abdominal laparotomy"],
  0,
  "Because cholera causes massive fluid and electrolyte depletion leading to fatal hypovolemic shock, rapid rehydration using ORS or IV fluids is the definitive life-saving therapy."
);
addMcq(
  "Tetanus is caused by Clostridium tetani, which commonly enters the human body through:",
  ["Deep puncture wounds or contaminated lacerations caused by rusted iron or soil", "Inhaling droplet nuclei in crowded classrooms", "Consuming contaminated raw milk products", "The bite of an infected Aedes mosquito"],
  0,
  "Clostridium tetani is an anaerobic spore-former whose endospores in soil enter through deep puncture wounds, where anaerobic conditions allow germination."
);
addMcq(
  "The potent neurotoxin produced by Clostridium tetani responsible for sustained spastic muscle contractions is:",
  ["Tetanospasmin", "Tetanolysin", "Choleragen", "Botulinum toxin"],
  0,
  "Tetanospasmin is a zinc endopeptidase that cleaves synaptobrevin in inhibitory Renshaw cells, preventing GABA and glycine release and producing muscle spasms."
);
addMcq(
  "Opisthotonos is a severe clinical sign of advanced tetanus characterized by:",
  ["Extreme backward arching of the spine and neck due to spasm of extensor muscles", "Complete flaccid paralysis of all four limbs", "Bilateral loss of corneal reflexes", "Unilateral dropping of the upper eyelid"],
  0,
  "Opisthotonos is a dramatic posture seen in severe tetanus where spasms of axial extensor muscles cause the back to arch backward like a bow."
);
addMcq(
  "Which vaccine formulation is routinely administered in pediatric immunization to protect against Diphtheria, Pertussis, and Tetanus simultaneously?",
  ["DPT vaccine (triple antigen)", "BCG vaccine", "MMR vaccine", "Oral Polio Vaccine (OPV)"],
  0,
  "The DPT vaccine contains diphtheria toxoid, killed Bordetella pertussis organisms (or acellular pertussis antigens), and tetanus toxoid."
);
addMcq(
  "The Schick test was historically developed to evaluate human immunity against:",
  ["Corynebacterium diphtheriae exotoxin", "Tetanus neurotoxin", "Streptococcal pyrogenic exotoxin", "Staphylococcal enterotoxin B"],
  0,
  "The Schick test involves intradermal injection of dilute diphtheria toxin; lack of local cutaneous inflammation indicates circulating neutralizing antitoxin."
);
addMcq(
  "Which bacterium causes whooping cough (pertussis), characterized by paroxysmal coughing bouts followed by a loud inspiratory whoop?",
  ["Bordetella pertussis", "Haemophilus influenzae", "Klebsiella pneumoniae", "Mycoplasma pneumoniae"],
  0,
  "Bordetella pertussis colonizes respiratory cilia, producing pertussis toxin and tracheal cytotoxin that induce severe coughing paroxysms and whooping inspiration."
);
addMcq(
  "The classical vector responsible for transmitting bubonic plague (Yersinia pestis) from urban rats to humans is the:",
  ["Oriental rat flea (Xenopsylla cheopis)", "Human body louse (Pediculus humanus)", "Sandfly (Phlebotomus)", "Kissing bug (Triatoma)"],
  0,
  "Xenopsylla cheopis (rat flea) becomes blocked with multiplying Yersinia pestis in its proventriculus and regurgitates bacteria into the human host during feeding."
);
addMcq(
  "Painful, acutely swollen regional lymph nodes characteristic of bubonic plague are clinically referred to as:",
  ["Buboes", "Chancres", "Gummas", "Tubercles"],
  0,
  "Buboes are intensely painful, inflammatory enlargements of lymph nodes (typically in the groin or axilla) resulting from Yersinia pestis infection."
);
addMcq(
  "Which form of plague is transmitted directly from person to person through respiratory droplets and carries near-100% mortality if untreated?",
  ["Pneumonic plague", "Bubonic plague", "Cutaneous plague", "Ocular plague"],
  0,
  "Pneumonic plague occurs when bacteria invade the lungs; it is highly contagious via airborne droplets and rapidly fatal within 24 to 48 hours without antibiotics."
);
addMcq(
  "Tuberculosis in humans is caused by Mycobacterium tuberculosis, which is microscopically identified using the:",
  ["Ziehl-Neelsen (acid-fast) staining technique", "Gram-negative silver staining technique", "India ink capsule negative stain", "Periodic acid-Schiff (PAS) stain"],
  0,
  "Mycobacterium tuberculosis has a lipid-rich cell wall with mycolic acids that resists decolorization by acid-alcohol, appearing as bright red rods on Ziehl-Neelsen staining."
);
addMcq(
  "Ghon's complex in primary pulmonary tuberculosis consists of:",
  ["A subpleural parenchymal granuloma (Ghon focus) combined with enlarged caseous hilar lymph nodes", "Multiple bilateral calcified pleural plaques only", "A solitary fungal ball inside an empty bronchus", "Bilateral symmetrical bronchiectasis in lower lobes"],
  0,
  "Ghon's complex is the pathological hallmark of primary TB, comprising a subpleural parenchymal lung lesion (Ghon focus) and draining caseous regional hilar lymph nodes."
);
addMcq(
  "The BCG (Bacillus Calmette-Guérin) vaccine used for immunization against tuberculosis is derived from an attenuated strain of:",
  ["Mycobacterium bovis", "Mycobacterium tuberculosis", "Mycobacterium leprae", "Mycobacterium avium"],
  0,
  "BCG was developed by Albert Calmette and Camille Guérin through serial passaging of Mycobacterium bovis over 13 years to create a live attenuated vaccine."
);
addMcq(
  "Which first-line anti-tuberculosis medication is famous for producing a harmless orange-red discoloration of urine, tears, and sweat?",
  ["Rifampicin", "Isoniazid", "Ethambutol", "Pyrazinamide"],
  0,
  "Rifampicin is an orange-colored macrocyclic antibiotic that imparts an orange-red tint to body secretions (urine, sweat, tears, saliva), an important counseling point for patients."
);
addMcq(
  "Which anti-TB drug acts by inhibiting mycolic acid biosynthesis and can cause peripheral neuropathy treatable with Vitamin $B_6$ (pyridoxine)?",
  ["Isoniazid (INH)", "Streptomycin", "Rifampicin", "Ethambutol"],
  0,
  "Isoniazid competitively inhibits pyridoxal kinase, depleting active Vitamin B6; co-administering pyridoxine prevents INH-induced sensory peripheral neuropathy."
);
addMcq(
  "Ethambutol is a first-line anti-TB drug whose classic dose-dependent adverse effect is:",
  ["Optic neuritis, causing reduced visual acuity and red-green color blindness", "Permanent sensorineural hearing loss", "Hepatocellular cholestatic jaundice", "Hypertrophy of gingival margins"],
  0,
  "Ethambutol can cause retrobulbar optic neuritis; patients should be monitored for changes in visual acuity and difficulty distinguishing red from green."
);
addMcq(
  "Multidrug-Resistant Tuberculosis (MDR-TB) is defined as resistance of the M. tuberculosis isolate to at least:",
  ["Isoniazid and Rifampicin simultaneously", "Streptomycin and Kanamycin only", "Ethambutol and Pyrazinamide only", "Ciprofloxacin and Ofloxacin only"],
  0,
  "MDR-TB is defined by the WHO as Mycobacterium tuberculosis resistant to both isoniazid and rifampicin, the two most potent first-line bactericidal anti-TB drugs."
);
addMcq(
  "Leprosy (Hansen's disease) is caused by Mycobacterium leprae, an obligate intracellular bacterium that primarily targets:",
  ["Schwann cells of peripheral nerves and dermal macrophages", "Podocytes of renal glomeruli", "Alveolar pneumocytes type II", "Parietal cells of gastric mucosa"],
  0,
  "Mycobacterium leprae selectively binds to laminin-2 in the basal lamina of Schwann cells, invading peripheral nerve axons and producing anesthesia and deformity."
);

// 61-100: Viral fevers, Polio, Dengue, Rabies, Hepatitis
addMcq(
  "Poliovirus is a non-enveloped RNA virus belonging to which viral family?",
  ["Picornaviridae (genus Enterovirus)", "Rhabdoviridae", "Paramyxoviridae", "Coronaviridae"],
  0,
  "Poliovirus is a positive-sense single-stranded RNA virus belonging to the genus Enterovirus within the family Picornaviridae."
);
addMcq(
  "What is the primary mode of transmission of poliovirus in communities with poor environmental sanitation?",
  ["Fecal-oral route through contaminated drinking water and food", "Aerosol inhalation in open air", "Bite of sandflies in river valleys", "Sexual contact exclusively"],
  0,
  "Poliovirus multiplies in the gastrointestinal tract and is shed in large quantities in human feces, spreading readily through fecal contamination of water and food."
);
addMcq(
  "How does the Salk polio vaccine differ from the Sabin polio vaccine?",
  ["Salk is an Inactivated Polio Vaccine (IPV) given by injection, while Sabin is an Oral Polio Vaccine (OPV) containing live attenuated virus", "Salk is live attenuated and oral, while Sabin is dead and injected", "Salk targets hepatitis B, while Sabin targets poliovirus", "Salk provides lifelong mucosal IgA, while Sabin does not"],
  0,
  "Jonas Salk developed the formalin-inactivated injectable polio vaccine (IPV); Albert Sabin developed the live attenuated oral polio vaccine (OPV) that stimulates gut mucosal IgA."
);
addMcq(
  "Which test is clinically used in suspected Dengue patients to assess capillary fragility by inflating a blood pressure cuff on the forearm?",
  ["Tourniquet test (Rumpel-Leede test)", "Schick test", "Widal test", "Mantoux test"],
  0,
  "The tourniquet test assesses capillary fragility; inflating the cuff midway between systolic and diastolic pressure for 5 minutes reveals petechiae ($>10-20$ per square inch in positive cases)."
);
addMcq(
  "The primary vector mosquito transmitting Dengue fever in domestic and peri-domestic environments is:",
  ["Aedes aegypti", "Anopheles culicifacies", "Culex pipiens", "Mansonia uniformis"],
  0,
  "Aedes aegypti is the principal urban vector of dengue virus, characterized by white lyre-shaped markings on its thorax and banded legs ('tiger mosquito')."
);
addMcq(
  "Severe joint pain (arthralgia) that may persist for months or years after acute infection is a hallmark of:",
  ["Chikungunya fever", "Typhoid fever", "Amoebic dysentery", "Common cold"],
  0,
  "The name 'Chikungunya' derives from the Kimakonde language meaning 'that which bends up', describing the stooped posture resulting from persistent, debilitating polyarthralgia."
);
addMcq(
  "The genome of Rabies virus consists of:",
  ["Negative-sense single-stranded RNA (-ssRNA)", "Double-stranded segmented DNA", "Positive-sense double-stranded RNA", "Circular single-stranded DNA"],
  0,
  "Rabies virus is a member of the Lyssavirus genus (family Rhabdoviridae) possessing a non-segmented, negative-sense, single-stranded RNA genome in a bullet-shaped capsid."
);
addMcq(
  "The presence of eosinophilic intracytoplasmic inclusions known as Negri bodies in brain neurons is diagnostic of:",
  ["Rabies encephalitis", "Poliomyelitis", "Herpes simplex encephalitis", "Bacterial meningitis"],
  0,
  "Negri bodies are round, sharply defined eosinophilic inclusion bodies found in the cytoplasm of Purkinje cells of the cerebellum and pyramidal neurons of the hippocampus in rabies."
);
addMcq(
  "Why is rabies characterized by hydrophobia (extreme dread of drinking liquids)?",
  ["Attempts to swallow trigger agonizing, involuntary spasms of pharyngeal and laryngeal muscles", "Water molecules react with viral coat proteins in saliva", "The renal tubules fail to absorb water completely", "The sensation of thirst is permanently abolished by hypothalamic necrosis"],
  0,
  "In furious rabies, the destruction of brainstem motor nuclei coordinating swallowing induces terrifying reflex laryngospasms and choking when the patient attempts to drink water."
);
addMcq(
  "Which hepatitis virus is an RNA virus transmitted primarily via the fecal-oral route through contaminated drinking water, causing epidemic jaundice?",
  ["Hepatitis A virus (HAV)", "Hepatitis B virus (HBV)", "Hepatitis C virus (HCV)", "Hepatitis D virus (HDV)"],
  0,
  "Hepatitis A virus (Picornaviridae) is shed in feces and spreads via contaminated food and water, causing self-limiting acute infectious hepatitis."
);
addMcq(
  "The Australia antigen discovered by Baruch Blumberg is the historical name for which viral protein?",
  ["Hepatitis B surface antigen (HBsAg)", "Hepatitis C core protein", "HIV glycoprotein 120", "Influenza hemagglutinin"],
  0,
  "Baruch Blumberg identified Australia antigen in the blood of an Australian aborigine; it was later recognized as the hepatitis B surface antigen (HBsAg), leading to Blumberg's 1976 Nobel Prize."
);
addMcq(
  "Which serological marker in blood confirms that a patient has been successfully immunized with the recombinant Hepatitis B vaccine?",
  ["Antibodies to Hepatitis B surface antigen (anti-HBs)", "Hepatitis B e-antigen (HBeAg)", "Antibodies to Hepatitis B core antigen (anti-HBc IgM)", "Hepatitis B viral DNA"],
  0,
  "The recombinant Hepatitis B vaccine contains purified HBsAg produced in yeast; successful immunization stimulates protective neutralizing anti-HBs antibodies in the absence of anti-HBc."
);
addMcq(
  "Which hepatitis virus is known as the 'silent killer' because it leads to chronic asymptomatic infection in over 75-80% of infected individuals?",
  ["Hepatitis C virus (HCV)", "Hepatitis A virus (HAV)", "Hepatitis E virus (HEV)", "Herpes simplex virus (HSV)"],
  0,
  "Hepatitis C virus frequently causes insidious, subclinical acute infection that progresses unnoticed to chronic active hepatitis, cirrhosis, and hepatocellular carcinoma over decades."
);

// 101-135: Helminthic, protozoan, fungal diseases in clinical perspective
addMcq(
  "The microscopic infective stage of Entamoeba histolytica passed in human feces that resists gastric acid is the:",
  ["Mature quadrinucleate cyst", "Uninucleate motile trophozoite", "Flagellated microgamete", "Hexacanth oncosphere"],
  0,
  "The mature quadrinucleate cyst has a resistant chitinous cyst wall that survives gastric acidity, excysting in the alkaline small intestine to release trophozoites."
);
addMcq(
  "In addition to colonic ulceration, Entamoeba histolytica can migrate via the portal vein to produce extra-intestinal abscesses predominantly in the:",
  ["Liver (amoebic liver abscess containing 'anchovy sauce' pus)", "Spleen exclusively", "Thyroid gland", "Adrenal cortex"],
  0,
  "Trophozoites erode mesenteric venules and enter the portal circulation to reach the liver, producing liver abscesses containing necrotic chocolate-brown 'anchovy sauce' fluid."
);
addMcq(
  "Giardia lamblia adheres to the brush border of duodenal and jejunal enterocytes using its:",
  ["Ventral sucking disc", "Anterior oral stylet", "Chitinous jaws", "Hooked rostellum"],
  0,
  "Giardia lamblia trophozoites use a large concavoconvex ventral adhesive sucking disc to attach firmly to the microvillar surface of intestinal enterocytes."
);
addMcq(
  "A distinctive feature of Giardia lamblia infection that distinguishes it clinically from Entamoeba histolytica dysentery is:",
  ["Steatorrhea (pale, foul-smelling, fatty stools that float) without macroscopic blood", "Copious frank blood clots in stool", "Intestinal perforation and peritonitis", "Severe jaundice with liver abscess"],
  0,
  "Giardia blankets the upper small intestine and impairs bile salt and lipase activity, preventing fat absorption and producing greasy, floating stools without mucosal ulceration or blood."
);
addMcq(
  "Which flagellated protozoan causes Kala-azar (visceral leishmaniasis), presenting with hepatosplenomegaly, cachexia, and pancytopenia?",
  ["Leishmania donovani", "Trypanosoma brucei", "Trichomonas tenax", "Plasmodium falciparum"],
  0,
  "Leishmania donovani amastigotes multiply inside macrophages throughout the reticuloendothelial system, causing massive enlargement of the spleen and liver, fever, and bone marrow failure."
);
addMcq(
  "The vector responsible for transmitting Leishmania donovani to humans in the Indian subcontinent is the:",
  ["Sandfly (Phlebotomus argentipes)", "Tsetse fly (Glossina palpalis)", "Rat flea (Xenopsylla cheopis)", "Bedbug (Cimex hemipterus)"],
  0,
  "Phlebotomus argentipes is the female sandfly vector that transmits promastigotes of Leishmania donovani during nocturnal blood feeding."
);
addMcq(
  "The human hookworm Necator americanus attaches to the intestinal mucosa using:",
  ["Ventral and dorsal cutting plates", "Four sharp curved teeth", "A muscular proboscis with spines", "Ciliated grooves"],
  0,
  "Necator americanus (New World hookworm) possesses semilunar cutting plates in its buccal capsule, whereas Ancylostoma duodenale possesses two pairs of sharp teeth."
);
addMcq(
  "Microcytic, hypochromic anemia in chronic hookworm infection is primarily caused by:",
  ["Chronic gastrointestinal blood loss exceeding dietary iron absorption", "Direct destruction of erythrocytes by viral oncoproteins", "Failure of erythropoietin secretion by kidney", "Congenital deficiency of hemoglobin beta chains"],
  0,
  "Hookworms feed on blood and produce oozing wounds in the intestinal mucosa, resulting in insidious chronic blood loss that depletes iron stores and leads to iron-deficiency anemia."
);
addMcq(
  "The scotch-tape (cellophane swab) test performed in the early morning is the standard diagnostic technique for detecting:",
  ["Enterobius vermicularis (pinworm) eggs on the perianal skin", "Ascaris lumbricoides larvae in sputum", "Taenia solium proglottids in stool", "Wuchereria bancrofti microfilariae in blood"],
  0,
  "Gravid female pinworms deposit asymmetric, planoconvex eggs on perianal folds overnight; pressing clear adhesive tape against the perianal area picks up eggs for microscopic examination."
);
addMcq(
  "The nocturnal periodicity of Wuchereria bancrofti microfilariae in peripheral blood means that:",
  ["Microfilariae appear in peripheral blood primarily between 10:00 PM and 2:00 AM, matching the feeding habits of Culex mosquitoes", "Microfilariae only replicate at high daytime temperatures", "Microfilariae are destroyed by daylight UV rays", "Mosquitoes cannot bite in the morning"],
  0,
  "Microfilariae retreat to deep pulmonary vessels during the day and surge into peripheral circulation at night, an evolutionary adaptation synchronizing with the nocturnal feeding of Culex vectors."
);
addMcq(
  "Trichinosis is a helminthic infection acquired by humans through the ingestion of undercooked pork containing encysted larvae of:",
  ["Trichinella spiralis", "Trichuris trichiura", "Taenia saginata", "Enterobius vermicularis"],
  0,
  "Trichinella spiralis larvae encyst inside skeletal muscle nurse cells of pigs; consuming raw or undercooked pork allows larvae to hatch in the human intestine and migrate to striated muscles."
);
addMcq(
  "Which dermatophyte genus attacks only hair and skin, but spares nails?",
  ["Microsporum", "Trichophyton", "Epidermophyton", "Candida"],
  0,
  "Microsporum infects hair and skin but not nails; Epidermophyton infects skin and nails but not hair; Trichophyton infects hair, skin, and nails."
);
addMcq(
  "Which dermatophyte genus attacks skin and nails, but does not infect hair?",
  ["Epidermophyton", "Microsporum", "Trichophyton", "Rhizopus"],
  0,
  "Epidermophyton (e.g. E. floccosum) infects the stratum corneum of skin and nails, but does not invade hair shafts."
);
addMcq(
  "Which dermatophyte genus can infect all three keratinized tissues: hair, skin, and nails?",
  ["Trichophyton", "Microsporum", "Epidermophyton", "Aspergillus"],
  0,
  "Trichophyton (e.g. T. rubrum, T. mentagrophytes) has the enzymatic capability to infect hair, skin, and nails."
);
addMcq(
  "Tinea pedis, a dermatophytic fungal infection commonly referred to as 'athlete's foot', affects the:",
  ["Interdigital spaces and soles of the feet", "Scalp hair follicles", "Groin and inner thighs", "Fingernails exclusively"],
  0,
  "Tinea pedis (athlete's foot) is a fungal infection of the foot, especially the interdigital toe webs and soles, characterized by scaling, maceration, and intense pruritus."
);
addMcq(
  "Tinea cruris, commonly known as 'jock itch', is a fungal dermatophytosis located in the:",
  ["Groin, perineal, and perianal regions", "Palms of hands", "Beard area of adult males", "Auditory ear canal"],
  0,
  "Tinea cruris (jock itch) is a dermatophytic infection affecting the groin, perineum, and inner thighs, facilitated by heat, moisture, and tight clothing."
);
addMcq(
  "Tinea capitis is a fungal dermatophytosis of the:",
  ["Scalp hair and surrounding skin", "Nail beds of toes", "Smooth skin of torso", "Mucosa of the tongue"],
  0,
  "Tinea capitis is a fungal dermatophytosis of the scalp and hair shafts, occurring mostly in children and presenting as scaly circular patches with broken hair stubs."
);

// 136-154: Advanced disease control, epidemiological concepts
addMcq(
  "The time interval between the initial exposure/infection by a pathogen and the first appearance of clinical signs or symptoms is defined as the:",
  ["Incubation period", "Latent period", "Convalescent period", "Prodromal period"],
  0,
  "The incubation period is the silent time interval between the invasion of a pathogen into the host and the manifestation of the first symptom of disease."
);
addMcq(
  "The brief transitional phase characterized by non-specific, mild constitutional symptoms (such as malaise, fatigue, low-grade fever) before hallmark signs appear is the:",
  ["Prodromal stage", "Convalescent stage", "Fastigium", "Incubation stage"],
  0,
  "The prodromal stage is the early period during which non-specific symptoms (fever, malaise, headache) appear before specific diagnostic signs of the disease develop."
);
addMcq(
  "A non-living object (such as a towel, utensil, door handle, or telephone) that can harbor and transmit infectious pathogens is termed a:",
  ["Fomite", "Vector", "Reservoir host", "Carrier"],
  0,
  "Fomites are inanimate objects that become contaminated with infectious secretions from an infected person and transmit the pathogen to another host."
);
addMcq(
  "An individual who harbors a specific infectious pathogen without exhibiting clinical disease but can transmit the infection to others is termed a:",
  ["Carrier", "Reservoir", "Vector", "Primary host"],
  0,
  "A carrier is an asymptomatic infected individual who sheds the pathogen and can infect susceptible contacts (such as Mary Mallon with typhoid)."
);
addMcq(
  "An arthropod vector in whose body a pathogen simply undergoes mechanical transport without multiplying or developing is a:",
  ["Mechanical vector", "Biological vector", "Definitive host", "Reservoir host"],
  0,
  "Mechanical vectors (such as houseflies carrying Entamoeba cysts or Salmonella on their legs) physically transfer pathogens without any biological growth or change in the agent."
);
addMcq(
  "An arthropod vector in whose body a pathogen must undergo multiplication or an essential developmental cycle is a:",
  ["Biological vector", "Mechanical vector", "Passive carrier", "Fomite"],
  0,
  "In biological vectors (such as Anopheles for Plasmodium or Culex for Wuchereria), the parasite must complete essential development or replication before transmission."
);
addMcq(
  "Which term describes an infectious disease that is transmissible under natural conditions from vertebrate animals to humans?",
  ["Zoonosis (zoonotic disease)", "Epizootic", "Enzootic", "Iatrogenic disease"],
  0,
  "A zoonosis is an infectious disease naturally transmitted between vertebrate animals and humans (such as rabies from dogs, anthrax from cattle, or plague from rodents)."
);
addMcq(
  "An infection acquired by a patient while admitted in a hospital or healthcare facility that was not present or incubating at admission is called a:",
  ["Nosocomial infection (hospital-acquired infection)", "Iatrogenic infection", "Idiopathic disease", "Congenital infection"],
  0,
  "Nosocomial (hospital-acquired) infections develop during hospitalization and are frequently caused by antibiotic-resistant strains (such as MRSA or Pseudomonas)."
);
addMcq(
  "Which epidemiological term designates the resistance of an entire community or population to an infectious disease due to a high proportion of immune individuals?",
  ["Herd immunity", "Innate immunity", "Passive artificial immunity", "Autoimmunity"],
  0,
  "Herd immunity occurs when enough individuals in a population are immune (through vaccination or recovery), thereby limiting transmission and protecting susceptible non-immune individuals."
);
addMcq(
  "The basic reproduction number ($R_0$) in infectious disease epidemiology represents:",
  ["The average number of secondary cases produced by a single infected individual in a completely susceptible population", "The percentage of infected patients who die from the disease", "The total number of hospital beds required during an outbreak", "The incubation time divided by duration of symptoms"],
  0,
  "R0 is the basic reproduction number; if $R_0 > 1$, the disease spreads in the population, whereas if $R_0 < 1$, transmission gradually dies out."
);
addMcq(
  "Case Fatality Rate (CFR) of a disease measures:",
  ["The proportion of diagnosed cases of a specified disease that terminate fatally within a designated period", "The total number of deaths per 100,000 general population per year", "The number of new cases diagnosed per week", "The percentage of vaccinated individuals who remain uninfected"],
  0,
  "CFR represents the severity of a disease by measuring the percentage of individuals diagnosed with the disease who die from it."
);
addMcq(
  "Quarantine differs from isolation in public health practice because quarantine applies to:",
  ["Restricting movement of asymptomatic individuals who have been exposed to a contagious disease to see if they become ill", "Separating confirmed ill patients with contagious disease from healthy individuals", "Administering antibiotics to the whole population", "Treating municipal wastewater with chlorine"],
  0,
  "Isolation separates sick, symptomatic individuals with a communicable disease; quarantine restricts the movement of asymptomatic persons exposed to an infectious agent."
);
addMcq(
  "Which method of milk processing heats milk to $71.7^\\circ\\text{C}$ for 15 seconds (or $62.8^\\circ\\text{C}$ for 30 minutes) followed by rapid chilling to destroy pathogenic vegetative bacteria?",
  ["Pasteurization", "Autoclaving", "Tyndallization", "Lyophilization"],
  0,
  "Pasteurization destroys non-spore-forming vegetative human pathogens (including Mycobacterium bovis, Salmonella, and Brucella) in milk without significantly altering taste or nutritional value."
);
addMcq(
  "Autoclaving relies on which physical principle to achieve absolute sterilization (killing even bacterial endospores)?",
  ["Steam under pressure at $121^\\circ\\text{C}$ ($15\\text{ psi}$) for 15 to 20 minutes", "Dry heat at $100^\\circ\\text{C}$ for 1 minute", "Boiling water at atmospheric pressure for 5 minutes", "Ultraviolet irradiation for 10 seconds"],
  0,
  "Autoclaves utilize saturated steam under pressure ($121^\circ\text{C}$ at $15\text{ psi}$), which coagulates and denatures all cellular proteins and destroys heat-resistant bacterial endospores."
);
addMcq(
  "Chlorination of municipal drinking water supplies destroys pathogenic microorganisms primarily by generating:",
  ["Hypochlorous acid (HOCl), a powerful oxidizing agent that penetrates bacterial cell walls", "Hydrochloric acid that dissolves bacterial DNA completely", "Chlorine gas bubbles that mechanically disrupt bacteria", "Sodium ions that cause cell swelling"],
  0,
  "When chlorine gas or hypochlorite dissolves in water, it forms hypochlorous acid (HOCl), an uncharged oxidizing agent that diffuses into microbes and inactivates vital sulfhydryl enzymes."
);
addMcq(
  "A sudden worldwide outbreak of an infectious disease that spreads across multiple continents and affects millions of people is classified as a:",
  ["Pandemic", "Epidemic", "Endemic", "Sporadic disease"],
  0,
  "A pandemic is an epidemic that has spread over multiple countries or continents, usually affecting a large number of people (e.g. 1918 influenza pandemic, COVID-19 pandemic)."
);
addMcq(
  "Which international health treaty administered by WHO legally binds member countries to report outbreaks of public health emergencies of international concern?",
  ["International Health Regulations (IHR)", "Geneva Convention", "Kyoto Protocol", "Paris Agreement"],
  0,
  "The International Health Regulations (IHR 2005) is an overarching legal framework that requires countries to detect, assess, and report public health emergencies to the WHO."
);

const moreMcqsPart3 = [
  ["What is the standard chemical composition of WHO Oral Rehydration Solution (ORS) per liter of water?", ["Sodium chloride 2.6g, Glucose 13.5g, Potassium chloride 1.5g, Trisodium citrate 2.9g", "Sodium chloride 10g, Sucrose 50g only", "Magnesium sulfate 5g, Calcium carbonate 10g", "Pure glucose 100g without electrolytes"], 0, "The WHO reduced-osmolarity ORS contains NaCl 2.6g, anhydrous glucose 13.5g, KCl 1.5g, and trisodium citrate dihydrate 2.9g per liter of potable water."],
  ["Risus sardonicus (a sustained, sardonic grimace or abnormal grin) is a classic clinical manifestation of:", ["Tetanus", "Cholera", "Typhoid", "Pneumonia"], 0, "Spasm of the facial muscles (rhomboids and frontalis) in tetanus produces a characteristic fixed, sneering grimace called risus sardonicus."],
  ["The gray-white pseudomembrane in diphtheria differs from tonsillitis exudate because scraping it causes:", ["Profuse bleeding from underlying ulcerated tissue", "Spontaneous disappearance of the membrane", "Complete immediate cure of fever", "Hardening into bone"], 0, "Diphtheria pseudomembrane is intimately adherent to the underlying mucosa; forceful mechanical removal tears capillaries and causes bleeding."],
  ["Which stage of whooping cough is characterized by paroxysmal episodes of rapid coughing fits during expiration followed by an inspiratory whoop?", ["Paroxysmal stage", "Catarrhal stage", "Convalescent stage", "Incubation stage"], 0, "The paroxysmal stage of pertussis follows the catarrhal stage and is marked by exhausting bursts of consecutive coughs ending in a high-pitched whoop."],
  ["A key distinguishing feature between bacillary dysentery (Shigellosis) and amoebic dysentery is that bacillary dysentery:", ["Has an acute onset with high fever, tenesmus, and abundant neutrophils in stool", "Has an insidious onset without fever or neutrophils", "Never produces abdominal cramps", "Is caused by a flagellated protozoan"], 0, "Shigellosis is an acute bacterial infection featuring high fever, severe tenesmus, and inflammatory exudate packed with polymorphonuclear leukocytes."],
  ["The classical temperature curve in untreated typhoid fever during the first week typically shows a:", ["Step-ladder pattern of daily rise", "Continuous high plateau with no variations", "Saddleback biphasic peak", "Spike occurring only every 72 hours"], 0, "In the first week of typhoid fever, body temperature characteristically ascends in a gradual step-ladder fashion, rising each evening higher than the previous day."],
  ["Transient, faint rose-colored macules ('rose spots') that blanch upon pressure appear on the abdomen and chest in:", ["Typhoid fever (Salmonella typhi)", "Measles", "Chickenpox", "Diphtheria"], 0, "Rose spots are small erythematous macules on the trunk seen in roughly 10-20% of typhoid patients during the second week of illness."],
  ["In the Widal agglutination test, a rising titer of which antibodies indicates acute, active typhoid infection?", ["Anti-O (somatic) and Anti-H (flagellar) antibodies", "Anti-streptolysin O (ASO)", "Anti-nuclear antibodies (ANA)", "Anti-mitochondrial antibodies"], 0, "A significant or fourfold rise in titers of anti-O ($\ge 1:160$) and anti-H ($\ge 1:160$) agglutinins confirms active Salmonella enterica serotype Typhi infection."],
  ["Rust-colored sputum is classically produced in pneumonia caused by:", ["Streptococcus pneumoniae (Pneumococcus)", "Klebsiella pneumoniae", "Mycoplasma pneumoniae", "Pseudomonas aeruginosa"], 0, "In pneumococcal lobar pneumonia, red blood cells extravasate into alveoli during red hepatization, producing characteristic rust-colored tenacious sputum."],
  ["Currant-jelly (thick, mucoid, blood-tinged) sputum is characteristically associated with pneumonia caused by:", ["Klebsiella pneumoniae", "Streptococcus pneumoniae", "Legionella pneumophila", "Haemophilus influenzae"], 0, "Klebsiella pneumoniae produces heavily encapsulated mucoid colonies that cause necrotizing lobar pneumonia with characteristic currant-jelly sputum."],
  ["Walking (atypical) pneumonia in young adults is commonly caused by Mycoplasma pneumoniae, an organism unique because it:", ["Completely lacks a peptidoglycan cell wall and is unaffected by beta-lactam antibiotics", "Has a thick chitinous cell wall", "Possesses twenty flagella", "Replicates exclusively inside red blood cells"], 0, "Mycoplasma species lack cell walls entirely, making them naturally resistant to penicillin/cephalosporins; they possess sterols in their triple-layered cell membrane."],
  ["Legionnaires' disease is a severe form of pneumonia caused by Legionella pneumophila, typically contracted from:", ["Aerosols from contaminated air-conditioning cooling towers, hot tubs, and showerheads", "Bites of infected soft ticks", "Consuming unpasteurized goat cheese", "Direct physical contact with infected farm birds"], 0, "Legionella pneumophila thrives in warm aquatic environments and amoebae in cooling towers and evaporative condensers, spreading via inhaled aerosols."],
  ["Leptospirosis (Weil's disease), characterized by jaundice, renal failure, and conjunctival suffusion, is transmitted through:", ["Contact of abraded skin or mucosa with water or soil contaminated with rat/rodent urine", "Inhalation of fungal spores from dry desert soil", "Bites of female sandflies", "Ingestion of poorly cooked pork"], 0, "Pathogenic spirochetes (Leptospira interrogans) are shed in the urine of chronically infected rodents; humans acquire infection during floods or wading in contaminated water."],
  ["Cutaneous anthrax is characterized by the development of a painless, necrotic ulcer with a central black crust known as a:", ["Black eschar (malignant pustule)", "Chancre", "Gumma", "Bubo"], 0, "Bacillus anthracis spores entering cuts germinate and produce lethal and edema toxins, forming a characteristic painless gelatinous vesicle that evolves into a black eschar."],
  ["Woolsorter's disease is an occupational form of:", ["Inhalational anthrax contracted by workers handling animal wool and hides", "Bovine spongiform encephalopathy", "Chronic pulmonary aspergillosis", "Brucellosis in veterinarians"], 0, "Workers sorting goat hair or sheep wool contaminated with Bacillus anthracis endospores can inhale spores, developing hemorrhagic mediastinitis and severe pulmonary anthrax."],
  ["Undulant fever, featuring recurring waves of nocturnal fever, joint pain, and profuse sweating, is caused by:", ["Brucella abortus and Brucella melitensis", "Salmonella enterica", "Vibrio parahaemolyticus", "Campylobacter fetus"], 0, "Brucellosis is a zoonosis contracted from unpasteurized dairy or contact with livestock; fever characteristically waxes and wanes over weeks (undulant pattern)."],
  ["Which pathogen is transmitted to hunters and butchers handling wild rabbits and causes ulceroglandular disease?", ["Francisella tularensis", "Yersinia enterocolitica", "Pasteurella multocida", "Bartonella henselae"], 0, "Francisella tularensis causes tularemia (rabbit fever), an extremely infectious zoonotic bacterium acquired by handling infected wild lagomorphs or tick bites."],
  ["Cat scratch disease is caused by Bartonella henselae, presenting typically with:", ["Regional lymphadenopathy and a primary cutaneous papule following a cat scratch or bite", "Ascending flaccid paralysis", "Severe bloody diarrhea", "Generalized petechial rash on soles"], 0, "Bartonella henselae is inoculated through scratches or bites of domestic cats; it causes chronic subacute regional lymph node enlargement."],
  ["Gonorrhea in males typically manifests clinically as:", ["Acute purulent urethral discharge and dysuria with intracellular Gram-negative diplococci", "A single painless hard ulcer on the glans", "Painless swelling of inguinal lymph nodes without discharge", "Microscopic hematuria only"], 0, "Neisseria gonorrhoeae infects columnar epithelium, provoking intense acute inflammation with profuse creamy yellow urethral discharge containing PMNs and diplococci."],
  ["Ophthalmia neonatorum (severe neonatal purulent conjunctivitis) is prevented by instilling prophylactic eye drops at birth to prevent infection by:", ["Neisseria gonorrhoeae and Chlamydia trachomatis", "Streptococcus pneumoniae", "Staphylococcus epidermidis", "Mycobacterium tuberculosis"], 0, "Neonatal ocular prophylaxis (traditionally silver nitrate, now erythromycin ointment) prevents gonococcal and chlamydial conjunctivitis acquired during passage through birth canal."],
  ["The primary lesion of syphilis appearing 2 to 4 weeks after sexual exposure is a:", ["Single, painless, indurated ulcer called a hard chancre", "Cluster of painful, fluid-filled vesicles", "Diffuse maculopapular rash on palms and soles", "Cauliflower-like verrucous wart"], 0, "Primary syphilis is characterized by a solitary, painless, indurated clean-based ulcer (hard chancre) that heals spontaneously within 3 to 6 weeks."],
  ["Condylomata lata are flat, highly infectious moist wart-like papules in intertriginous areas diagnostic of:", ["Secondary syphilis", "Primary syphilis", "Tertiary syphilis", "Congenital syphilis"], 0, "Secondary syphilis is a systemic stage featuring generalized rash (affecting palms and soles), lymphadenopathy, and moist gray plaques (condylomata lata) teeming with spirochetes."],
  ["Tabes dorsalis (locomotor ataxia) and general paresis of the insane are late neurological manifestations of:", ["Tertiary (neuro)syphilis", "Acute bacterial meningitis", "Subacute sclerosing panencephalitis", "Chronic fatigue syndrome"], 0, "Tertiary neurosyphilis damages dorsal columns of the spinal cord (tabes dorsalis causing sensory ataxia) and cerebral cortex (general paresis), decades after primary infection."],
  ["Hutchinson's triad in congenital syphilis consists of:", ["Hutchinson's notched incisors, interstitial keratitis, and eighth-nerve sensorineural deafness", "Cataracts, patent ductus arteriosus, and microcephaly", "Hydrocephalus, chorioretinitis, and intracranial calcification", "Cleft palate, polydactyly, and microphthalmia"], 0, "Sir Jonathan Hutchinson described the classic triad of late congenital syphilis: notched barrel-shaped central incisors, interstitial keratitis, and sensorineural deafness."],
  ["Saddle nose and saber shins are skeletal deformities classically caused by:", ["Congenital syphilis", "Congenital toxoplasmosis", "Congenital rubella", "Congenital cytomegalovirus"], 0, "Destruction of nasal cartilage by syphilitic rhinitis results in a collapsed nasal bridge (saddle nose), while periostitis causes anterior bowing of the tibia (saber shin)."],
  ["Non-gonococcal urethritis (NGU) in males is most frequently caused by:", ["Chlamydia trachomatis (serovars D through K)", "Treponema pallidum", "Herpes simplex virus 1", "Neisseria meningitidis"], 0, "Chlamydia trachomatis is the most common cause of non-gonococcal urethritis, presenting with watery/mucoid discharge and dysuria."],
  ["Lymphogranuloma venereum (LGV) is caused by Chlamydia trachomatis serovars L1, L2, and L3, characterized by:", ["Suppurative inguinal lymphadenopathy separated by the inguinal ligament (Groove sign)", "Painless hard chancre on the prepuce", "Cauliflower-like genital warts", "Copious purulent urethral discharge"], 0, "Chlamydia trachomatis serovars L1-L3 cause LGV, featuring painful inguinal buboes above and below Poupart's ligament (the diagnostic 'groove sign')."],
  ["Chancroid, a sexually transmitted infection presenting with extremely painful, non-indurated genital ulcers, is caused by:", ["Haemophilus ducreyi", "Treponema pallidum", "Chlamydia trachomatis", "Calymmatobacterium granulomatis"], 0, "Haemophilus ducreyi causes chancroid ('soft chancre'), which differs sharply from syphilis by its marked tenderness, ragged edges, and painful suppurative buboes."],
  ["Donovan bodies (intracytoplasmic inclusions within large mononuclear cells) are diagnostic of:", ["Granuloma inguinale (Donovanosis caused by Klebsiella granulomatis)", "Chancroid", "Lymphogranuloma venereum", "Syphilis"], 0, "Klebsiella granulomatis causes granuloma inguinale, an indolent ulcerating STI identified by Giemsa-stained smears demonstrating safety-pin-shaped Donovan bodies inside histiocytes."],
  ["Trachoma causes blindness through which pathological sequence?", ["Chronic follicular conjunctival scarring leads to entropion and trichiasis (in-turned eyelashes) that abrade the cornea", "Direct destruction of the optic chiasm by spirochetes", "Excessive production of aqueous humor causing open-angle glaucoma", "Congenital cataract formation"], 0, "Repeated chlamydial conjunctival infection causes severe scarring, contracting the eyelid inward (entropion); eyelashes scratch the cornea (trichiasis), causing opacity and blindness."],
  ["Poliovirus binds specifically to which human cellular receptor to gain entry into host cells?", ["CD155 (poliovirus receptor, PVR)", "CD4", "ACE2", "CCR5"], 0, "CD155 is an immunoglobulin-superfamily transmembrane glycoprotein that functions as the physiological receptor mediating poliovirus attachment and endocytosis."],
  ["Post-polio syndrome refers to:", ["New muscle weakness, pain, and fatigue developing decades after recovery from acute poliomyelitis", "Acute relapse caused by reactivation of dormant poliovirus", "A bacterial infection secondary to paralysis", "Adverse reaction to the polio vaccine"], 0, "Post-polio syndrome is a neurological condition occurring 15-40 years after acute polio due to gradual attrition and exhaustion of surviving, hyper-sprouted motor units."],
  ["Furious rabies differs from paralytic (dumb) rabies by exhibiting:", ["Agitation, hyperactivity, disorientation, hallucinations, hydrophobia, and aerophobia", "Ascending flaccid paralysis without mental agitation", "Gradual development of spastic paraparesis only", "Normal mental status throughout the course"], 0, "Furious rabies accounts for ~80% of human cases, characterized by prominent autonomic and limbic dysfunction, terrifying pharyngeal spasms, and behavioral hyperactivity."],
  ["Why is immediate, thorough washing of animal bite wounds with soap and running water for at least 15 minutes critical?", ["It physically removes and chemically inactivates a large portion of lipid-enveloped rabies virions", "It kills all bacteria in the bone", "It eliminates the need for rabies vaccination", "It stimulates immediate antibody production"], 0, "Rabies virus possesses a lipid envelope readily dissolved by detergents; vigorous washing physically washes away and lyses the virus, dramatically reducing the inoculum."],
  ["Subacute Sclerosing Panencephalitis (SSPE) is a fatal, progressive neurological disorder occurring years after:", ["Measles (Rubeola) virus infection", "Mumps virus infection", "Rubella virus infection", "Picornavirus infection"], 0, "SSPE is a rare, devastating chronic neurodegenerative complication caused by persistent, defective measles virus infection in the brain, manifesting 6 to 10 years later."],
  ["Vitamin A supplementation is recommended by WHO in children diagnosed with measles because it:", ["Significantly reduces measles-related mortality and prevents blindness from corneal ulceration", "Directly kills the measles virus in blood", "Replaces the need for measles immunization", "Neutralizes viral hemagglutinin antibodies"], 0, "Measles rapidly depletes body stores of vitamin A; therapeutic supplementation restores mucosal integrity, boosts cell-mediated immunity, and reduces pneumonia/corneal mortality."],
  ["Painful swelling of the parotid gland that obscures the angle of the jaw is diagnostic of:", ["Mumps", "Measles", "Scarlet fever", "Diphtheria"], 0, "Mumps parotitis causes pronounced bilateral or unilateral swelling of the parotid glands, lifting the earlobe and obscuring the bony angle of the mandible."],
  ["Gregg's triad of Congenital Rubella Syndrome includes:", ["Sensorineural deafness, congenital cataracts, and cardiac anomalies (e.g. patent ductus arteriosus)", "Hydrocephalus, intracranial calcifications, and microphthalmia", "Polydactyly, cleft palate, and syndactyly", "Horseshoe kidney, spina bifida, and anencephaly"], 0, "Australian ophthalmologist Norman Gregg described the classical congenital rubella triad: eye anomalies (cataracts), heart defects (PDA, pulmonary artery stenosis), and deafness."],
  ["Pleomorphic skin lesions ('dew-drop on a rose petal' vesicles alongside papules, pustules, and crusts simultaneously) are characteristic of:", ["Chickenpox (Varicella)", "Smallpox (Variola)", "Measles", "Rubella"], 0, "Chickenpox lesions appear in successive crops, so all stages (macules, papules, clear vesicles, and scabs) are present simultaneously in the same anatomical area."],
  ["Smallpox skin lesions differed from chickenpox lesions because smallpox lesions:", ["Were all at the same developmental stage in any anatomical area and had a centrifugal distribution", "Appeared in successive crops with all stages present simultaneously", "Were strictly confined to the trunk, sparing the face and extremities", "Never progressed to pustules or scabs"], 0, "Smallpox produced deep, umbilicated, synchronous pustules located predominantly on the face and extremities (centrifugal), unlike the centripetal, pleomorphic chickenpox."],
  ["Herpes simplex virus type 1 (HSV-1) characteristically establishes lifelong latency within the:", ["Trigeminal sensory ganglion", "Sacral dorsal root ganglia", "Cerebellar cortex", "Ventral horn motor neurons"], 0, "Following primary orolabial infection (cold sores/gingivostomatitis), HSV-1 ascends sensory axons and establishes latent infection in the sensory trigeminal ganglion."],
  ["Herpes simplex virus type 2 (HSV-2) characteristically establishes lifelong latency within the:", ["Sacral sensory ganglia ($S_2-S_4$)", "Trigeminal ganglion", "Spinal anterior horns", "Dorsal raphe nuclei"], 0, "HSV-2, the primary cause of genital herpes, travels retrograde along sensory neurons to establish permanent latency in sacral dorsal root ganglia."],
  ["Which opportunistic herpesvirus causes CMV retinitis ('scrambled eggs and ketchup' fundus appearance) and sight loss in patients with CD4 count $< 50/\\mu\\text{L}$?", ["Cytomegalovirus (HHV-5)", "Epstein-Barr virus (HHV-4)", "Herpes simplex virus 1", "Varicella-zoster virus"], 0, "CMV retinitis is a vision-threatening opportunistic viral infection in advanced AIDS patients, featuring necrotizing hemorrhagic retinitis."],
  ["Antibody-Dependent Enhancement (ADE) explains why a secondary dengue infection with a different serotype can lead to:", ["Severe Dengue Hemorrhagic Fever and Dengue Shock Syndrome", "Immediate lifetime immunity to all tropical viruses", "Spontaneous resolution without fever", "Conversion of dengue virus into a harmless bacterium"], 0, "Non-neutralizing heterotypic antibodies from a previous dengue infection bind new viral serotypes and facilitate their Fc-receptor-mediated uptake into monocytes, triggering cytokine storm."],
  ["Yellow fever virus causes fatal liver damage characterized histopathologically by apoptotic hepatocytes known as:", ["Councilman bodies", "Negri bodies", "Lewy bodies", "Aschoff bodies"], 0, "Councilman bodies are eosinophilic, apoptotic remnants of hepatocytes seen in the midzonal region of liver lobules in acute yellow fever."],
  ["Kyasanur Forest Disease (KFD), also known as monkey fever, is endemic to the Western Ghats of India and transmitted by:", ["Haemaphysalis ticks", "Aedes mosquitoes", "Sandflies", "Body lice"], 0, "KFD is a tick-borne flaviviral hemorrhagic fever transmitted by forest ticks (genus Haemaphysalis), with forest monkeys (langurs, macaques) acting as sentinels."],
  ["Japanese Encephalitis (JE) virus is maintained in an enzootic transmission cycle involving:", ["Culex tritaeniorhynchus mosquitoes, ardeid wading birds, and pigs as amplifying hosts", "Anopheles mosquitoes and human hosts only", "Ticks and wild rodents only", "Fleas and urban house rats only"], 0, "JE virus is maintained between aquatic birds (herons, egrets) and mosquitoes; domestic pigs serve as high-viremic amplifying hosts near human rice fields."],
  ["West Nile virus belongs to the Flaviviridae family and is primarily maintained in nature between:", ["Birds and Culex mosquitoes", "Monkeys and Aedes mosquitoes", "Bats and sandflies", "Rodents and fleas"], 0, "Birds are the natural reservoir hosts of West Nile virus; Culex mosquitoes transmit the virus to humans and horses, which are dead-end hosts."],
  ["Ebola virus and Marburg virus belong to the family Filoviridae and are characteristically:", ["Enveloped, filamentous negative-sense RNA viruses causing severe hemorrhagic fever", "Non-enveloped icosahedral DNA viruses", "Double-stranded circular DNA bacteriophages", "Segmented double-stranded retroviruses"], 0, "Filoviruses have distinct filamentous, thread-like morphology and cause devastating hemorrhagic fevers with extensive endothelial necrosis and multiorgan failure."],
  ["The natural reservoir host of Marburg virus and Ebola virus in African forests is:", ["Fruit bats (such as Rousettus aegyptiacus)", "Poisonous snakes", "Freshwater snails", "Wild boars"], 0, "Cave-dwelling fruit bats (Rousettus aegyptiacus for Marburg; Eidolon/Hypsignathus for Ebola) harbor the viruses asymptomatically and shed them in saliva and feces."],
  ["Lassa fever is an Arenavirus hemorrhagic fever endemic in West Africa, transmitted to humans through contact with urine and droppings of the:", ["Mastomys natalensis (multimammate rat)", "Rattus norvegicus", "Mus musculus", "Cavia porcellus"], 0, "The multimammate rat (Mastomys natalensis) is the natural reservoir of Lassa mammarenavirus, contaminating household food and surfaces."],
  ["Which antiviral drug is clinically indicated for the early treatment of Lassa fever?", ["Ribavirin", "Acyclovir", "Oseltamivir", "Zidovudine"], 0, "Intravenous ribavirin administered during the first six days of illness significantly reduces mortality in patients suffering from severe Lassa fever."],
  ["Hantavirus Pulmonary Syndrome (HPS), a severe respiratory distress condition, is contracted in rural areas by inhaling aerosols of:", ["Rodent (deer mouse) urine, droppings, or saliva", "Bat guano in caves", "Pigeon droppings on roofs", "Dried cow manure"], 0, "Sin Nombre and other New World hantaviruses are aerosolized from deer mouse excreta, causing rapid capillary leak syndrome in human lungs."],
  ["Which virus is the single most common cause of severe, dehydrating diarrhea and death in infants and young children worldwide?", ["Rotavirus", "Rhinovirus", "Rabies virus", "Hepatitis A virus"], 0, "Rotavirus causes severe infantile gastroenteritis by destroying mature absorptive enterocytes and secreting the enterotoxin NSP4; Rotavac is an oral vaccine protecting against it."],
  ["Norovirus (Norwalk virus) is notorious for causing explosive gastroenteritis outbreaks in closed communities (cruise ships, schools) because of its:", ["Extremely low infectious dose, environmental stability, and resistance to alcohol hand sanitizers", "Ability to integrate into host nuclear DNA", "Transmission by airborne fungal spores", "High susceptibility to boiling water"], 0, "As few as 10 to 100 norovirus virions can cause infection; their non-enveloped capsids survive drying, freezing, and alcohol sanitizers, facilitating rapid foodborne/fomite spread."],
  ["Epidemic keratoconjunctivitis (severe 'pink eye' with preauricular lymphadenopathy) is classically caused by:", ["Adenovirus serotypes 8, 19, and 37", "Poliovirus", "Rabies virus", "Hepatitis B virus"], 0, "Adenoviruses cause acute epidemic keratoconjunctivitis, characterized by follicular conjunctivitis, corneal subepithelial infiltrates, and marked contagiousness."],
  ["Hand, Foot, and Mouth Disease (HFMD) in young children is characterized by vesicular eruptions on palms, soles, and oral mucosa, caused by:", ["Coxsackievirus A16 and Enterovirus A71", "Herpes simplex virus 1", "Parvovirus B19", "Mumps virus"], 0, "Coxsackievirus A16 and Enterovirus 71 cause HFMD, presenting with tender maculopapular and vesicular eruptions on hands, feet, buttocks, and mouth."],
  ["Pleurodynia (Bornholm disease / 'devil's grip'), characterized by sudden agonizing paroxysmal chest and abdominal pain, is caused by:", ["Coxsackievirus B", "Influenza virus", "Rotavirus", "Hepatitis E virus"], 0, "Coxsackievirus B causes epidemic pleurodynia, an acute viral myositis of intercostal and diaphragmatic muscles causing severe stabbing thoracic pain."],
  ["Human Rhinovirus utilizes which cell adhesion molecule as its primary receptor on human respiratory epithelium?", ["Intercellular Adhesion Molecule-1 (ICAM-1)", "Vascular Cell Adhesion Molecule-1 (VCAM-1)", "E-selectin", "Integrin alpha-v beta-3"], 0, "Over 90% of rhinovirus serotypes bind to the D1 domain of ICAM-1 on respiratory epithelial cells to trigger receptor-mediated endocytosis."],
  ["Coronaviruses are classified as enveloped, positive-sense single-stranded RNA viruses characterized by surface projection spikes that resemble a:", ["Solar corona (crown)", "Bacterial flagellum", "Helical corkscrew", "Geometric cube"], 0, "Under electron microscopy, coronaviruses have prominent club-shaped spike glycoproteins creating an image reminiscent of the solar corona, hence the name coronavirus."],
  ["SARS-CoV-2 gains entry into human host alveolar type II pneumocytes by binding its spike protein to the:", ["Angiotensin-Converting Enzyme 2 (ACE2) receptor", "CD4 receptor", "Insulin receptor", "Erythropoietin receptor"], 0, "The receptor-binding domain of the SARS-CoV-2 spike glycoprotein binds ACE2 on host cells, followed by cleavage by TMPRSS2 to facilitate membrane fusion."],
  ["Schuffner's dots are pink/red stippling granules seen in erythrocytes parasitized by which malaria species?", ["Plasmodium vivax and Plasmodium ovale", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium knowlesi"], 0, "Schuffner's dots represent caveola-vesicle complexes induced in the host RBC membrane by growing trophozoites of P. vivax and P. ovale."],
  ["Maurer's clefts are coarse, irregular cytoplasmic markings seen in red blood cells parasitized by:", ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium ovale"], 0, "Maurer's clefts are membranous structures formed in erythrocytes infected with Plasmodium falciparum that traffic virulence proteins (like PfEMP1) to the RBC surface."],
  ["Ziemann's dots are fine stippling granules rarely observed in erythrocytes parasitized by:", ["Plasmodium malariae", "Plasmodium vivax", "Plasmodium falciparum", "Plasmodium ovale"], 0, "Ziemann's dots are faint, fine dust-like granules seen in erythrocytes infected with Plasmodium malariae upon prolonged staining."],
  ["Blackwater fever is a severe, life-threatening complication of Plasmodium falciparum malaria characterized by:", ["Massive intravascular hemolysis, acute hemoglobinuria (dark black urine), and acute renal failure", "Blackening of skin on the forehead", "Dark black tarry stools due to colon cancer", "Melanin pigmentation of nail beds"], 0, "Blackwater fever involves sudden catastrophic intravascular hemolysis, releasing massive free hemoglobin into plasma that passes into urine (blackening it) and plugs renal tubules."],
  ["Individuals heterozygous for sickle-cell trait ($Hb^A/Hb^S$) have a selective survival advantage in malaria-endemic regions because:", ["Their sickling erythrocytes suppress growth and accelerate phagocytic clearance of Plasmodium falciparum", "They produce antibodies that sterilize mosquito bites", "Their liver cells cannot undergo binary fission", "They lack red blood cells completely"], 0, "J.B.S. Haldane's malaria hypothesis: sickling in hypoxic capillaries causes potassium leakage and premature phagocytic destruction of parasitized erythrocytes, conferring malaria resistance."],
  ["Individuals lacking Duffy blood group antigens ($Fy(a-b-)$) on their erythrocytes are completely resistant to infection by:", ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"], 0, "Plasmodium vivax merozoites strictly require binding to the Duffy antigen / chemokine receptor (DARC) on human RBCs; absence of Duffy antigens blocks merozoite invasion."],
  ["Administering the antimalarial drug Primaquine to individuals with Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency causes:", ["Acute hemolytic anemia due to oxidative destruction of red blood cells", "Sudden irreversible blindness", "Immediate liver cirrhosis", "Severe hypocalcemic tetany"], 0, "Primaquine metabolites generate oxidative stress; G6PD-deficient erythrocytes cannot regenerate NADPH and reduced glutathione to detoxify peroxides, resulting in acute hemolysis."],
  ["Chloroquine exerts its therapeutic antimalarial action inside the digestive vacuole of Plasmodium by:", ["Inhibiting heme polymerase (biocrystallization), causing toxic free heme to accumulate and kill the parasite", "Inhibiting viral reverse transcriptase", "Cleaving human hemoglobin into non-absorbable fragments", "Blocking entry of glucose through erythrocyte membranes"], 0, "Plasmodium digests hemoglobin and crystallizes toxic free heme into inert hemozoin; chloroquine caps hemozoin polymers, causing lethal buildup of cytotoxic free heme."],
  ["Quinine, historically the first effective antimalarial drug, was originally extracted from the bark of the:", ["Cinchona tree (Cinchona officinalis)", "Willow tree (Salix alba)", "Yew tree (Taxus baccata)", "Poppy plant (Papaver somniferum)"], 0, "Quinine is a natural alkaloid isolated from the bark of the Andean cinchona tree, used for centuries as a potent blood schizonticide against malaria."],
  ["Artemisinin and its derivatives (artesunate, artemether) are derived from the Chinese medicinal herb Artemisia annua and destroy malaria parasites by:", ["Generating lethal carbon-centered free radicals upon cleavage of their endoperoxide bridge by iron/heme", "Inhibiting host DNA topoisomerase II", "Depleting host sodium ions in blood", "Cross-linking ribosomal RNA subunits"], 0, "Cleavage of artemisinin's endoperoxide bond by intraparasitic ferrous iron generates reactive carbon-centered radical intermediates that alkylate essential malarial proteins."],
  ["Charcot-Leyden crystals found in stool samples of patients with amoebic dysentery or allergic diseases are composed of:", ["Lysophospholipase protein derived from degenerated eosinophils", "Precipitated calcium oxalate crystals", "Bacterial peptidoglycan monomers", "Uric acid crystals from purine metabolism"], 0, "Charcot-Leyden crystals are hexagonal, bipyramidal crystals composed of eosinophil lysophospholipase (galectin-10), formed during eosinophil degranulation."],
  ["Balantidium coli, the largest protozoan parasite of the human intestine, moves by means of:", ["Cilia covering its entire surface", "A single trailing flagellum", "Amoeboid pseudopodia", "Gliding pellicular motors"], 0, "Balantidium coli is a ciliated protozoan that possesses thousands of coordinated surface cilia, an anterior cytostome, a large bean-shaped macronucleus, and a micronucleus."],
  ["Modified acid-fast staining of stool smears is used to detect the round, pink/red oocysts of which opportunistic waterborne protozoan in AIDS patients?", ["Cryptosporidium parvum", "Entamoeba histolytica", "Giardia lamblia", "Balantidium coli"], 0, "Cryptosporidium parvum oocysts are acid-fast and stain bright red against a green or blue background on modified Kinyoun acid-fast staining."],
  ["Which waterborne coccidian protozoan produces large, oval acid-fast oocysts ($20-30\\,\\mu\\text{m}$) that cause chronic diarrhea in immunocompromised hosts?", ["Cystoisospora belli (formerly Isospora belli)", "Cryptosporidium parvum", "Microsporidia", "Trichomonas hominis"], 0, "Cystoisospora belli produces characteristic large, elongated-ellipsoidal oocysts containing two sporocysts that stain acid-fast in stool smears."],
  ["Cyclospora cayetanensis is a protozoan associated with foodborne diarrhea outbreaks from imported fresh berries that exhibits:", ["Autofluorescence (blue-green under ultraviolet light microscopy) and variable acid-fast staining", "Complete motility with eight polar flagella", "Formation of gigantic macroscopic cysts in muscle", "Invasion of erythrocytes exclusively"], 0, "Cyclospora oocysts autofluoresce bright blue under 365 nm UV epifluorescence and stain variably pink to red with modified acid-fast stains."],
  ["Microsporidia are unique obligate intracellular spore-forming parasites (now classified related to fungi) that inject infective sporoplasm via a coiled:", ["Polar filament (polar tube)", "Oral stylet", "Flagellar pocket", "Sucking disc"], 0, "Microsporidian spores possess a specialized extrusible hollow polar tube that pierces host cell membranes to inject the infectious sporoplasm."],
  ["Primary Amoebic Meningoencephalitis (PAM), a rapidly fatal brain infection contracted by swimming in warm freshwater lakes, is caused by:", ["Naegleria fowleri ('brain-eating amoeba')", "Entamoeba histolytica", "Entamoeba coli", "Endolimax nana"], 0, "Naegleria fowleri trophozoites penetrate nasal olfactory neuroepithelium, migrate through the cribriform plate into the brain, causing fulminant hemorrhagic necrosis and death within days."],
  ["Acanthamoeba species can cause severe sight-threatening amoebic keratitis in:", ["Contact lens wearers who use homemade tap water saline cleaning solutions", "Patients receiving regular blood transfusions", "Individuals eating raw seafood", "Infants receiving measles vaccination"], 0, "Acanthamoeba trophozoites and double-walled polygonal cysts contaminate tap water and adhere to contact lenses, producing painful, ulcerating corneal keratitis with ring infiltrates."],
  ["Loeffler's syndrome (pulmonary eosinophilia with transient migratory lung infiltrates and wheezing) occurs during the larval tissue migration of:", ["Ascaris lumbricoides", "Enterobius vermicularis", "Taenia saginata", "Trichuris trichiura"], 0, "Ascaris larvae hatch in the gut, burrow into venous capillaries, reach lungs, break into alveoli, and ascend the bronchial tree, provoking marked eosinophilic hypersensitivity (Loeffler's)."],
  ["'Ground itch' is an intensely pruritic, erythematous maculopapular rash that develops at the skin penetration site of:", ["Hookworm larvae (Ancylostoma and Necator)", "Ascaris eggs", "Pinworm adults", "Tapeworm proglottids"], 0, "Penetration of infective hookworm filariform larvae through the skin of the feet induces local allergic irritation and secondary bacterial pustules known as ground itch."],
  ["Autoinfection, where filariform larvae hatch in the human gut, penetrate perianal skin, and hyperinfect immunocompromised hosts, is characteristic of:", ["Strongyloides stercoralis", "Ascaris lumbricoides", "Trichuris trichiura", "Taenia solium"], 0, "Strongyloides stercoralis rhabditiform larvae can transform into filariform larvae directly in the human intestine, invading the bowel wall or perianal skin (autoinfection)."]
];

moreMcqsPart3.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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

console.log(`Part 3 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part3.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 3: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
